"use client";
import { UserDetails } from "@/components/user";
import { Page } from "@/constants/routes";
import { Severity } from "@/enums/severity.enum";
import { useToast } from "@/hooks/useToast";
import { getUserById } from "@/services/user.service";
import { useCurrentUser } from "@/store/currentUser";
import { IUserBase } from "@/types/user";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserInfo() {
  const params = useParams();
  const { user } = useCurrentUser();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [userData, setUserData] = useState<IUserBase | null>(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    if (user && user._id === id) {
      router.push(Page.PROFILE);
    }

    getUserById(id)
      .then((user) => {
        if (!user) throw new Error("User not found");
        setUserData(user);
        setLoading(false);
      })
      .catch(() => {
        router.back();
        showToast({
          severity: Severity.ERROR,
          title: "Error loading user data",
        });
      });
  }, [id, router, showToast, user]);

  if (loading) return <>Loading...</>;
  if (!userData) return <p>Error loading user</p>;
  return <UserDetails userData={userData} />;
}
