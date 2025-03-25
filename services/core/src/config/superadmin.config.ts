import { registerAs } from '@nestjs/config';

export const superadminConfig = registerAs('superadmin', () => ({
  username: process.env.SUPERADMIN_USERNAME || 'root',
  email: process.env.SUPERADMIN_EMAIL || 'admin@example.com',
  password: process.env.SUPERADMIN_PASSWORD || 'asd123qwe',
  phone: process.env.SUPERADMIN_PHONE || '19999999999',
  companyName: process.env.SUPERADMIN_COMPANY_NAME || 'SuperAdmin Inc.',
  fullName: process.env.SUPERADMIN_FULLNAME || 'Vicente Superadmin',
  companyEmail:
    process.env.SUPERADMIN_COMPANY_EMAIL || 'contact@superadmin.com',
}));
