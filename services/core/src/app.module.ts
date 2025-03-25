import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { AppConfigModule } from './config/config.module';
import { ConfigService } from '@nestjs/config';
import { getConfigData } from './common/utils/config.util';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/guards/auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { TicketsModule } from './tickets/tickets.module';
import { TicketsService } from './tickets/tickets.service';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: getConfigData(configService, 'database.mongoUri'),
      }),
    }),
    TicketsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {
  constructor(private readonly usersService: TicketsService) {}

  async onModuleInit() {
    // await this.usersService.clearDatabase();
    await this.usersService.clearDatabase();
    // await this.usersService.createSuperAdminIfNotExists();
    // await this.usersService.createMockUsers();
  }
}
