"use client";
import clsx from "clsx";
import styles from "./sidebar.module.scss";
import { ISidebar } from "./sidebar.types";
import { Button, Logotype, SideBarRightIcon } from "../common";
import { useCallback, useState } from "react";
import { SidebarAvatarCard } from "./sidebarAvatarCard";
import { SidebarNavMenu } from "./sidebarNavMenu";
import { useCurrentUser } from "@/store/currentUser";
import { UserStatuses } from "@/enums/ users.enum";
import { Sizes } from "@/enums/size.enum";

export const Sidebar = ({ className }: ISidebar) => {
  const { user } = useCurrentUser();
  const [collapsed, setCollapsed] = useState(true);
  const toggleSidebarCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      className={clsx(styles.sidebar, className, {
        [styles.isCollapsed]: collapsed,
      })}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logoWrap}>
            <Logotype className={styles.logo} />
          </div>
          <Button
            variant="outlined"
            color="inherit"
            size={Sizes.SM}
            onlyIcon
            noOutline
            onClick={toggleSidebarCollapse}
          >
            <SideBarRightIcon className={styles.sidebarButton} />
          </Button>
        </header>
        <div className={styles.content}>
          <SidebarNavMenu collapsed={collapsed} />
        </div>
        <footer className={styles.footer}>
          <SidebarAvatarCard
            fullname={user?.fullName || "Unknown"}
            username={user?.username || "Unknown"}
            status={UserStatuses.ONLINE}
            collapsed={collapsed}
          />
        </footer>
      </div>
    </div>
  );
};
