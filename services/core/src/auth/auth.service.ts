import * as bcrypt from 'bcryptjs';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginDto } from './dto/login.dto';
import { getConfigData } from 'src/common/utils/config.util';
import { convertToMs } from 'src/common/utils/converter.util';
import { IUser } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
  readonly jwtSecret: string;
  readonly jwtExpiresIn: number;
  readonly jwtRefreshSecret: string;
  readonly jwtRefreshExpiresIn: number;
  readonly cookieOptions: object;

  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private configService: ConfigService,
  ) {
    this.jwtSecret = getConfigData(this.configService, 'jwt.secret');
    this.jwtExpiresIn = convertToMs(
      getConfigData(this.configService, 'jwt.expiresIn'),
    );
    this.jwtRefreshSecret = getConfigData(
      this.configService,
      'jwt.refreshSecret',
    );
    this.jwtRefreshExpiresIn = convertToMs(
      getConfigData(this.configService, 'jwt.refreshExpiresIn'),
    );
    this.cookieOptions = {
      httpOnly: true,
      sameSite: true,
      signed: true,
      secure: true,
    };
  }

  async login({ username, password, rememberMe }: LoginDto) {
    const user = await this.usersService.findByUsername(username);
    if (!user) throw new UnauthorizedException('User not found');

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) throw new UnauthorizedException('Incorrect password');

    const tokens = await this.generateTokens(user, rememberMe);
    return { ...tokens, userData: user };
  }

  async verifyToken(
    token: string,
    typeToken: 'access' | 'refresh',
  ): Promise<JwtPayload | null> {
    const secret =
      typeToken === 'access' ? this.jwtSecret : this.jwtRefreshSecret;
    try {
      return await this.jwtService.verifyAsync<JwtPayload>(token, {
        secret,
      });
    } catch {
      return null;
    }
  }

  getPayload(user: IUser): JwtPayload {
    return {
      sub: user._id,
      role: user.role,
      isBanned: user.isBanned || false,
    };
  }

  async generateTokens(user: IUser, rememberMe = false) {
    const payload = this.getPayload(user);
    return {
      accessToken: await this.generateAccessToken(payload),
      refreshToken: await this.generateRefreshToken(payload, rememberMe),
    };
  }

  async generateAccessToken(payload: JwtPayload) {
    return this.jwtService.signAsync(payload, {
      secret: this.jwtSecret,
      expiresIn: this.jwtExpiresIn,
    });
  }

  async generateRefreshToken(payload: JwtPayload, rememberMe = false) {
    return this.jwtService.signAsync(payload, {
      secret: this.jwtRefreshSecret,
      expiresIn: rememberMe ? this.jwtRefreshExpiresIn : this.jwtExpiresIn,
    });
  }
}
