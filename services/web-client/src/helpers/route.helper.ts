import { Page } from "@/constants/routes";

type Params = {
  [key: string]: string | number;
};

export const generateUrl = (page: Page, params: Params = {}): string => {
  let url: string = page;

  Object.keys(params).forEach((key) => {
    url = url.replace(`:${key}`, params[key].toString());
  });

  return url;
};
