export const convertToMs = (expiry: string | number): number => {
  if (typeof expiry === 'number') return expiry;

  const timeValue = parseInt(expiry);
  const timeUnit = expiry.replace(/[0-9]/g, '');

  switch (timeUnit) {
    case 'm':
      return timeValue * 60 * 1000;
    case 'h':
      return timeValue * 60 * 60 * 1000;
    case 'd':
      return timeValue * 24 * 60 * 60 * 1000;
    default:
      return timeValue;
  }
};
