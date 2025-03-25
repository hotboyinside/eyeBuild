"use client";
import styles from "./sidebarNavMenu.module.scss";
import { NAV_MENU } from "@/constants/menu";
import { ISidebarNavMenu } from "./sidebarNavMenu.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useCurrentUser } from "@/store/currentUser";
import { useTicketStore } from "@/store/ticket";
import { Badge } from "@/components/common";
import { getCountTicketsForShowing } from "@/helpers/utils";

export const SidebarNavMenu = ({ className, collapsed }: ISidebarNavMenu) => {
  const { user } = useCurrentUser();
  const pathname = usePathname();
  const { pagination } = useTicketStore();
  const pendingTicketsCount = getCountTicketsForShowing(
    pagination.totalPendingTickets
  );

  if (!user || !user.role) return null;

  const roleMenu = NAV_MENU[user.role as keyof typeof NAV_MENU];
  if (!roleMenu) return null;

  return (
    <nav
      className={clsx(styles.menu, className, {
        [styles.isCollapsed]: collapsed,
      })}
    >
      {roleMenu.map(({ label, href, icon: Icon }) => (
        <div key={label} className={styles.item}>
          <Link
            href={href}
            className={clsx(styles.link, {
              [styles.isActive]: pathname === href,
            })}
          >
            <Icon className={styles.icon} size='xl' />
            <span className={styles.label}>
              {label}
              {label === "Tickets" && pendingTicketsCount ? (
                <Badge title={pendingTicketsCount} />
              ) : null}
            </span>
          </Link>
        </div>
      ))}
    </nav>
  );
};
