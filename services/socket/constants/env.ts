const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw Error(`Missing String environment variable for ${key}`);
  }

  return value;
};

export const JWT_SECRET = getEnv('JWT_SECRET', 'jwt_secret_key');
export const COOKIE_SECRET = getEnv(
  'COOKIE_SECRET',
  '86032f8346e24f68ad9a694f39de0ff80deeb7682db2ebd8147b06f034b1ce7d',
);
export const CLIENT_URL = getEnv('CLIENT_URL', 'http://eyebuild.localhost/');
export const PORT = getEnv('PORT', '9002');
