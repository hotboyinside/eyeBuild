import * as cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getConfigData } from './common/utils/config.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = getConfigData(configService, 'app.port');
  const clientUrl = getConfigData(configService, 'app.clientUrl');
  const cookieSecret = getConfigData(configService, 'app.cookieSecret');

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors({
    origin: [clientUrl],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  app.use(cookieParser(cookieSecret));
  app.setGlobalPrefix('core');
  await app.listen(port);
}
bootstrap();
