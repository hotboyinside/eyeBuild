export enum ErrorMessages {
  REQUIRED_USERNAME_LOGIN = 'Please enter your username.',
  REQUIRED_PASSWORD_LOGIN = 'Please enter your password.',
  INVALID_CREDENTIALS_LOGIN = 'Incorrect username or password. Please try again or reach out to the Admin.',

  REQUIRED_FULL_NAME = 'Enter your first and last name.',
  INVALID_FULL_NAME = 'Enter a valid first and last name.',
  REQUIRED_PHONE = 'Enter your phone number.',
  INVALID_PHONE = 'Enter a valid phone number.',
  REQUIRED_ROLE = 'Select a role.',
  INVALID_ROLE = 'Invalid role.',

  REQUIRED_USERNAME = 'Enter a username. Use 4–25 characters: letters and digits (0–9).',
  INVALID_USERNAME_FORMAT = 'Use 4–25 characters: letters and digits (0–9).',
  DUPLICATE_USERNAME = 'This username is already taken.',

  REQUIRED_PASSWORD = 'Enter a password.',
  INVALID_PASSWORD_FORMAT = 'Your password must meet all requirements.',
  PASSWORD_TOO_SHORT = 'Password must be at least 8 characters long.',
  PASSWORD_MISSING_UPPERCASE = 'Password must contain at least one uppercase letter.',
  PASSWORD_MISSING_LOWERCASE = 'Password must contain at least one lowercase letter.',
  PASSWORD_MISSING_NUMBER = 'Password must contain at least one number.',

  REQUIRED_EMAIL = 'Enter an email address.',
  INVALID_EMAIL = 'Enter a valid email address.',
}
