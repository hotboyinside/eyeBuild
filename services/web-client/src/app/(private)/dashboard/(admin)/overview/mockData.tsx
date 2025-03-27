import {
  IAlertCard,
  IMiniStatCard,
  ITicketCard,
  RoleIcon,
  UsersIcon,
  VideocameraIcon,
} from "@/components/common";
import { Page } from "@/constants/routes";
import { Sizes } from "@/enums/size.enum";

export const ALERTS: IAlertCard[] = [
  {
    type: "offline",
    address: "4811 Hannah Street, Lost Springs, Wyoming",
    timestamp: "07/21/25, 11:45 am",
  },
  {
    type: "connectivity",
    address: "4811 Hannah Street, Lost Springs, Wyoming",
    timestamp: "07/21/25, 11:45 am",
  },
  {
    type: "connectivity",
    address: "4811 Hannah Street, Lost Springs, Wyoming",
    timestamp: "07/21/25, 11:45 am",
  },
  {
    type: "offline",
    address: "4811 Hannah Street, Lost Springs, Wyoming",
    timestamp: "07/21/25, 11:45 am",
  },
  {
    type: "connectivity",
    address: "4811 Hannah Street, Lost Springs, Wyoming",
    timestamp: "07/21/25, 11:45 am",
  },
  {
    type: "connectivity",
    address: "4811 Hannah Street, Lost Springs, Wyoming",
    timestamp: "07/21/25, 11:45 am",
  },
];

export const TICKETS: ITicketCard[] = [
  {
    _id: "#2939944",
    type: "Account support",
    reason:
      "Night vision mode is not switching automatically on certain camera models. Users have to manually enable it every evening.",
    createdAt: "07/21/25, 11:45 am",
  },
  {
    _id: "#2939944",
    type: "Troubleshooting",
    reason:
      "Night vision mode is not switching automatically on certain camera models. Users have to manually enable it every evening.",
    createdAt: "07/21/25, 11:45 am",
  },
  {
    _id: "#2939944",
    type: "Payment",
    reason:
      "Night vision mode is not switching automatically on certain camera models. Users have to manually enable it every evening.",
    createdAt: "07/21/25, 11:45 am",
  },
  {
    _id: "#2939944",
    type: "Account support",
    reason:
      "Night vision mode is not switching automatically on certain camera models. Users have to manually enable it every evening.",
    createdAt: "07/21/25, 11:45 am",
  },
];

export const METRICS: IMiniStatCard[] = [
  {
    title: "Total Franchisees",
    value: "324",
    link: Page.USERS,
    icon: <RoleIcon size={Sizes.LG} />,
  },
  {
    title: "Total Clients",
    value: "2,420",
    link: Page.USERS,
    icon: <UsersIcon size={Sizes.LG} />,
  },
  {
    title: "Total Cameras",
    value: "16,674",
    link: Page.USERS,
    icon: <VideocameraIcon size={Sizes.LG} />,
  },
];
