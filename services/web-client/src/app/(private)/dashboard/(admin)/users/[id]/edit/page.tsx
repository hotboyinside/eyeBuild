"use client";
import { UserForm } from "@/components/user";
import { Page } from "@/constants/routes";
import { Severity } from "@/enums/severity.enum";
import { useToast } from "@/hooks/useToast";
import { UserFormValues } from "@/schemas";
import { getUserById } from "@/services/user.service";
import { useCurrentUser } from "@/store/currentUser";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditUser() {
  const params = useParams();
  const { user } = useCurrentUser();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [defaultValues, setDefaultValues] = useState<UserFormValues | null>(
    null
  );
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
        setDefaultValues(user);
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
  if (!defaultValues) return <p>Error loading user</p>;
  return <UserForm mode="edit" defaultValues={defaultValues} />;
}
