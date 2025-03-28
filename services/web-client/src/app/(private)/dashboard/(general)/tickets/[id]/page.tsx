"use client";

import { ArrowIcon, Heading, Title, Button, Badge } from "@/components/common";

import styles from "./page.module.scss";
import { Page } from "@/constants/routes";
import { Sizes } from "@/enums/size.enum";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { getAuthTokens } from "@/app/api/routes/cookies";

export default function Ticket() {
  const [tokens, setTokens] = useState<{
    accessToken?: string;
    refreshToken?: string;
  }>({});

  const socket = io("http://eyebuild.localhost:9002/", {
    path: "events",
    // autoConnect: false,
    withCredentials: true,
    transports: ["websocket"],
    extraHeaders: {
      Authorization: `Bearer ${tokens.accessToken}`,
      // "Access-Control-Allow-Origin": "http://eyebuild.localhost",
    },
  });

  const fetchTokens = async () => {
    const data = await getAuthTokens();
    setTokens({
      accessToken: data.accessToken?.value,
      refreshToken: data.refreshToken?.value,
    });
  };

  useEffect(() => {
    fetchTokens();

    socket.connect();
  }, []);

  socket.on("connect", () => {
    console.log("Подключение установлено");
  });

  return (
    <>
      <Heading>
        <Link href={Page.TICKETS}>
          <Button
            color='secondary'
            variant='text'
            size={Sizes.SM}
            noOutline
            noBackground
            startIcon={<ArrowIcon />}
          >
            Back to Tickets
          </Button>
        </Link>
        {/* <div className={styles.titleWrap}>
          <div className={styles.titleInfo}>
            <Title tag='h1' className={styles.title}>
              {fullName}
            </Title>
            <Badge {...badgeProps} />
          </div>
          {hasPermission && (
            <div className={styles.titleActions}>
              <Button
                color='inherit'
                size={Sizes.MD}
                noBackground
                startIcon={<BlockIcon size={Sizes.LG} />}
              >
                Block
              </Button>
              <Button
                color='neutral'
                size={Sizes.MD}
                variant='outlined'
                startIcon={<EyeIcon size={Sizes.LG} />}
              >
                Access
              </Button>
              <Link href={editPageUrl}>
                <Button
                  color='neutral'
                  size={Sizes.MD}
                  variant='outlined'
                  startIcon={<EditIcon size={Sizes.LG} />}
                >
                  Edit
                </Button>
              </Link>
            </div>
          )}
        </div> */}
      </Heading>
      {/* {isClient ? (
        <UserDetailsTabs userData={userData} />
      ) : (
        <UserDetailsContent userData={userData} />
      )} */}
    </>
  );
}
