import { Role } from "./roles";

export enum Page {
  DASHBOARD = "/dashboard",
  OVERVIEW = "/dashboard/overview",
  TICKETS = "/dashboard/tickets",
  ALERTS = "/dashboard/alerts",
  PROFILE = "/dashboard/profile",
  USERS = "/dashboard/users",
  USER = "/dashboard/users/:id",
  EDIT_USER = "/dashboard/users/:id/edit",
  ADD_USER = "/dashboard/add-user",
  SETTINGS = "/dashboard/settings",
  CLIPS_SNAPSHOTS = "/dashboard/clips-snapshots",
  MONITORING = "/dashboard/monitoring",
  LOGIN = "/",
  FORGOT_PASSWORD = "/forgot-password",
  SUPPORT = "/dashboard/support",
  PAYMENTS = "/dashboard/payments",
  CLOUD = "/dashboard/cloud",
}

export type IPageUnion = keyof typeof Page;
export type IPageValuesUnion = (typeof Page)[keyof typeof Page];

const baseRoutes = [
  Page.DASHBOARD,
  Page.SETTINGS,
  Page.PROFILE,
  Page.OVERVIEW,
  Page.TICKETS,
  Page.ALERTS,
  Page.USERS,
  Page.USER,
  Page.ADD_USER,
  Page.EDIT_USER,
];

export const roleRoutes = {
  [Role.SUPERADMIN]: baseRoutes,
  [Role.ADMIN]: baseRoutes,
  [Role.FRANCHISEE]: baseRoutes,
  [Role.CLIENT]: [
    Page.DASHBOARD,
    Page.SETTINGS,
    Page.PROFILE,
    Page.MONITORING,
    Page.CLIPS_SNAPSHOTS,
    Page.ALERTS,
    Page.TICKETS,
  ],
};

export const defaultRoute = Page.LOGIN;
export const publicRoutes = [Page.LOGIN, Page.FORGOT_PASSWORD];
