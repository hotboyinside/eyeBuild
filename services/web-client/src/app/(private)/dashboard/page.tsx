"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/store/currentUser";
import { Page } from "@/constants/routes";

export default function Dashboard() {
  const { user } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    if (user.role === "client") {
      router.replace(Page.MONITORING);
    } else {
      router.replace(Page.OVERVIEW);
    }
  }, [user, router]);

  return null;
}
