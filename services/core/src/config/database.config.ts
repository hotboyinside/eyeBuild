import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
  mongoUri:
    process.env.MONGO_URL ||
    'mongodb://root:example@mongo:27017/eyebuild?authSource=admin',
}));
