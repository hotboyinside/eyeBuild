export const config = {
  adminEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "eyebuild@gmail.com",
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8000",
  cookieSecret: process.env.COOKIE_SECRET || "yoursecretkey",
  jwtSecretKey: process.env.JWT_SECRET || "jwt_secret_key",
  jwtRefreshSecretKey: process.env.JWT_REFRESH_SECRET || "jwt_refresh_secret_key",
};

export const adminEmail = config.adminEmail;
export const adminEmailLink = "mailto:" + adminEmail;
