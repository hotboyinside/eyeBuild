import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from './app.config';
import { jwtConfig } from './jwt.config';
import { databaseConfig } from './database.config';
import { superadminConfig } from './superadmin.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, jwtConfig, databaseConfig, superadminConfig],
      isGlobal: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppConfigModule {}
