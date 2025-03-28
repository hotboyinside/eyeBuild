export const cleanNumber = (str: string): string => {
  return str.replace(/\D/g, "");
};

export const formatPhone = (phone: string): string => {
  return phone.replace(/^(\d{1})(\d{3})(\d{3})(\d{4})$/, "+$1 ($2) $3-$4");
};

export const formatCapitalize = (str: string): string => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};

export const formatRole = (role: string): string => {
  return formatCapitalize(role.toLowerCase()) + "s";
};

export const formatInitials = (name?: string): string | null => {
  if (!name) {
    return null;
  }

  const words = name.trim().split(/\s+/);
  return words.length > 1
    ? (words[0][0] + words[1][0]).toUpperCase()
    : words[0]?.slice(0, 2).toUpperCase() || "UN";
};

export const formatCountTicketsForShowing = (
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
