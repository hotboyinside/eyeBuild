import { ConfigService } from '@nestjs/config';

export const getConfigData = (
  configService: ConfigService,
  key: string,
  defaultValue?: string,
): string => {
  const value = configService.get<string>(key);
  if (value === undefined && defaultValue === undefined) {
    throw new Error(`Missing required config key: ${key}`);
  }
  return value ?? defaultValue!;
};
