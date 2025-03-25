import {
  BillCheckIcon,
  ClipsIcon,
  DangerTriangelIcon,
  DashboardIcon,
  SettingIcon,
  UsersIcon,
  VideocameraIcon,
} from "@/components/common";
import { Role } from "./roles";
import { Page } from "./routes";

const baseMenu = [
  { label: "Overview", href: Page.OVERVIEW, icon: DashboardIcon },
  { label: "Tickets", href: Page.TICKETS, icon: BillCheckIcon },
  { label: "Alerts", href: Page.ALERTS, icon: DangerTriangelIcon },
  { label: "Users", href: Page.USERS, icon: UsersIcon },
  { label: "Settings", href: Page.SETTINGS, icon: SettingIcon },
];

export const NAV_MENU = {
  [Role.SUPERADMIN]: baseMenu,
  [Role.ADMIN]: baseMenu,
  [Role.FRANCHISEE]: baseMenu,
  [Role.CLIENT]: [
    { label: "Monitoring", href: Page.MONITORING, icon: VideocameraIcon },
    { label: "Clips & Snapshots", href: Page.CLIPS_SNAPSHOTS, icon: ClipsIcon },
    { label: "Alerts", href: Page.ALERTS, icon: DangerTriangelIcon },
    { label: "Tickets", href: Page.TICKETS, icon: BillCheckIcon },
    { label: "Settings", href: Page.SETTINGS, icon: SettingIcon },
  ],
};
