export const cleanNumber = (phone: string): string => {
  return phone.replace(/\D/g, '');
};

export const formatPhone = (phone: string): string => {
  return phone.replace(/^(\d{1})(\d{3})(\d{3})(\d{4})$/, '+$1 ($2) $3-$4');
};

export const escapeRegExp = (str: string) => {
  return str.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
};
