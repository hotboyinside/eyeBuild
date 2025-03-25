import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  port: process.env.PORT || 8000,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  cookieSecret: process.env.COOKIE_SECRET || 'unsecretpleasechangewithvalue',
}));
