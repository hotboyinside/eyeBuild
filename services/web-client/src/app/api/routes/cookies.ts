"use server";

import { cookies } from "next/headers";

export const getAuthTokens = async () => {
  const cookiesStore = await cookies();

  const accessToken = cookiesStore.get("accessToken");
  const refreshToken = cookiesStore.get("refreshToken");

  return { accessToken, refreshToken };
};
