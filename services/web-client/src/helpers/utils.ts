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

export const getInitials = (name: string) => {
  const words = name.trim().split(/\s+/);
  if (words.length > 1) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return words[0]?.slice(0, 2).toUpperCase() || "UN";
};

export const getCapitalize = (str: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

export const getCountTicketsForShowing = (
  ticketsCount: number
): string | undefined => {
  if (ticketsCount === 0) {
    return undefined;
  } else if (ticketsCount > 999) {
    return "+999";
  } else {
    return String(ticketsCount);
  }
};
