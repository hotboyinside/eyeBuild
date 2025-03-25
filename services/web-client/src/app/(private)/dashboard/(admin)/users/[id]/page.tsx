"use client";
import { UserDetails } from "@/components/user";
import { Severity } from "@/enums/severity.enum";
import { useToast } from "@/hooks/useToast";
import { getUserById } from "@/services/user.service";
import { IUserBase } from "@/types/user";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserEdit() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [userData, setUserData] = useState<IUserBase | null>(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

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
  }, [id, router, showToast]);

  if (loading) return <>Loading...</>;
  if (!userData) return <p>Error loading user</p>;
  return <UserDetails userData={userData} />;
}
