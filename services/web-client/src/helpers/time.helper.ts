export const parseExpireTime = (expireTime: string): number => {
  const regex = /(\d+)([smhd])/;
  const match = expireTime.match(regex);

  if (!match) return 0;
  const value = parseInt(match[1], 10);
  const unit = match[2];
  switch (unit) {
    case "s":
      return value * 1000;
    case "m":
      return value * 60000;
    case "h":
      return value * 3600000;
    case "d":
      return value * 86400000;
    default:
      return 0;
  }
};
