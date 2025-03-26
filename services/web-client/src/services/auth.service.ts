import { AxiosResponse } from "axios";
import request from "./request";
import { Page, roleRoutes } from "../constants/routes";
import cookieParser from "cookie-parser";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../constants/config";
import { IUserBase } from "@/types/user";
import { Role } from "../enums/role.enum";

interface ILoginRequest {
  username: string;
  password: string;
  rememberMe: boolean;
}

interface ILoginResponse {
  message: string;
  userData: IUserBase;
}

export const login = async (loginRequest: ILoginRequest) => {
  try {
    const { data } = await request.post<
      ILoginRequest,
      AxiosResponse<ILoginResponse>
    >("/auth/login", loginRequest);
    if (!data || !data.userData) {
      console.error("Invalid login response:", data);
      throw new Error("Invalid login response");
    }
    return data.userData;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};

export const logout = async () => {
  try {
    await request.post("/auth/logout");
    return true;
  } catch (err) {
    console.error("Logout error:", err);
    return false;
  }
};

export const verifyToken = (token: string, secretKey: string): Role | false => {
  if (!token) return false;
  try {
    const unparsedToken = cookieParser.signedCookie(token, config.cookieSecret);
    if (!unparsedToken) return false;

    const decodedToken = jwt.verify(unparsedToken, secretKey) as JwtPayload;
    if (!decodedToken) return false;

    const { role, exp } = decodedToken;
    if (!role || !exp) return false;

    const isExpired = exp * 1000 < Date.now();
    if (isExpired) return false;

    return role;
  } catch {
    return false;
  }
};

const generateRouteRegex = (route: string): RegExp => {
  const routeWithDynamicParams = route.replace(/:\w+/g, "\\w+");
  const regexString = `^${routeWithDynamicParams}$`;
  return new RegExp(regexString);
};

export const verifyRole = (role: Role, path: string): boolean => {
  if (roleRoutes[role]?.includes(path as Page)) {
    return true;
  }

  for (const route of roleRoutes[role]) {
    const dynamicRouteRegex = generateRouteRegex(route);
    if (dynamicRouteRegex.test(path)) {
      return true;
    }
  }

  return false;
};
