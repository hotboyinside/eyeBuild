import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { convertToMs } from 'src/common/utils/converter.util';
import { getConfigData } from 'src/common/utils/config.util';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { IRequest } from 'src/common/interfaces/request.interface';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  private readonly jwtExpiresIn: number;
  private readonly jwtRefreshExpiresIn: number;
  private readonly cookieOptions: object;

  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpiresIn = convertToMs(
      getConfigData(this.configService, 'jwt.expiresIn'),
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

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const { accessToken, refreshToken, userData } =
      await this.authService.login(loginDto);
    res.cookie('accessToken', accessToken, {
      ...this.cookieOptions,
      maxAge: this.jwtExpiresIn,
    });
    res.cookie('refreshToken', refreshToken, {
      ...this.cookieOptions,
      maxAge: this.jwtRefreshExpiresIn,
    });

    return res.json({ message: 'Login successful', userData });
  }

  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return res.json({ message: 'Logout successful' });
  }

  @Get('verify')
  verifyToken(@Req() req: IRequest, @Res() res: Response) {
    return res.json({ message: 'Verify successful', role: req.user.role });
  }
}
