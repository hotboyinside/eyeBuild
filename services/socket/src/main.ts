import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { COOKIE_SECRET, CLIENT_URL, PORT } from 'constants/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [CLIENT_URL],
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  app.use(cookieParser(COOKIE_SECRET));
  await app.listen(PORT ?? 9002);
}
bootstrap();
