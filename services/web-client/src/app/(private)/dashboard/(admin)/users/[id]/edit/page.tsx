"use client";
import { UserForm } from "@/components/user";
import { Severity } from "@/enums/severity.enum";
import { useToast } from "@/hooks/useToast";
import { UserFormValues } from "@/schemas";
import { getUserById } from "@/services/user.service";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditUser() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [defaultValues, setDefaultValues] = useState<UserFormValues | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
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
