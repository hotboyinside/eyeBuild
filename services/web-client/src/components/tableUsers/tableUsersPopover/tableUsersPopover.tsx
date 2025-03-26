"use client";
import styles from "./tableUsersPopover.module.scss";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import {
  BlockIcon,
  Button,
  DotsVerticalIcon,
  EditIcon,
  Popover,
} from "../../common";
import { Page } from "@/constants/routes";
import { ITableUsersPopover } from "./tableUsersPopover.types";
import { generateUrl } from "@/helpers";

export const TableUsersPopover = ({ id }: ITableUsersPopover) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const handleOpen = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const editPageUrl = generateUrl(Page.EDIT_USER, { id });

  return (
    <>
      <Button
        size="xs"
        variant="text"
        color="inherit"
        onlyIcon
        noPadding
        onClick={handleOpen}
        ref={buttonRef}
      >
        <DotsVerticalIcon size="md" />
      </Button>
      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={buttonRef.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ul className={styles.list}>
          <Link href={editPageUrl} passHref>
            <li className={styles.item}>
              <EditIcon className={styles.icon} size="md" />
              Edit user
            </li>
          </Link>
          <li className={styles.item}>
            <BlockIcon className={styles.icon} size="md" />
            Block user
          </li>
        </ul>
      </Popover>
    </>
  );
};
