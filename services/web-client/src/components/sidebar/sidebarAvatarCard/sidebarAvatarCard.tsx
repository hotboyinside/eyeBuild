"use client";

import styles from "./sidebarAvatarCard.module.scss";
import { ISidebarAvatarCard } from "./sidebarAvatarCard.types";
import {
  Avatar,
  AvatarCard,
  AvatarLabel,
  Button,
  LogoutIcon,
  Tooltip,
} from "@/components/common";
import { useCallback, useState, useEffect } from "react";
import { Page } from "@/constants/routes";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { logout } from "@/services/auth.service";
import { SidebarModal } from "../sidebarModal";
import { getInitials } from "@/helpers/utils";
import { useCurrentUser } from "@/store/currentUser";

export const SidebarAvatarCard = ({
  collapsed,
  username,
  fullname,
  status,
}: ISidebarAvatarCard) => {
  const [open, setOpen] = useState(false);
  const { removeUser } = useCurrentUser();
  const router = useRouter();
  const [initials, setInitials] = useState("");

  useEffect(() => {
    setInitials(fullname ? getInitials(fullname) : "");
  }, [fullname]);

  const handleProfileRedirect = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      router.push(Page.PROFILE);
    },
    [router]
  );

  const handleLogoutRedirect = useCallback(() => {
    router.push(Page.LOGIN);
  }, [router]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpen = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(true);
  }, []);

  const handleLogout = async () => {
    await logout();
    removeUser();
    handleLogoutRedirect();
  };

  return (
    <div
      className={clsx(styles.avatarCardWrap, {
        [styles.isCollapsed]: collapsed,
      })}
      onClick={handleProfileRedirect}
    >
      <AvatarCard className={styles.avatarCard} size="lg">
        <Avatar
          className={styles.avatar}
          variant="initials"
          initials={initials}
          size="md"
          status={status}
        />
        <AvatarLabel
          className={styles.label}
          username={username}
          fullname={fullname}
          size="lg"
        />
      </AvatarCard>
      <div className={styles.buttonWrap}>
        <Tooltip
          title="Log Out"
          placement="top"
          variant="dark"
          noCaret
        >
          <Button
            className={styles.button}
            variant="contained"
            color="inherit"
            onlyIcon
            noOutline
            onClick={handleOpen}
          >
            <LogoutIcon />
          </Button>
        </Tooltip>
        <SidebarModal
          onClose={handleClose}
          onLogout={handleLogout}
          isOpen={open}
        />
      </div>
    </div>
  );
};
