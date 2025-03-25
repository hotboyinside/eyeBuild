export const cleanNumber = (str: string): string => {
  return str.replace(/\D/g, "");
};

export const formatPhone = (phone: string): string => {
  return phone.replace(/^(\d{1})(\d{3})(\d{3})(\d{4})$/, "+$1 ($2) $3-$4");
};
