"use client";
import styles from "./forgotPasswordForm.module.scss";
import { Button } from "@/components/common";
import { ArrowIcon } from "@/components/common";
import { Page } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const ForgotPasswordForm = () => {
  const router = useRouter();

  const handleBackToLogin = useCallback(() => {
    router.push(Page.LOGIN);
  }, [router]);

  return (
    <div className={styles.box}>
      <Button
        color="inherit"
        variant="text"
        noBackground
        noOutline
        startIcon={<ArrowIcon size="lg" />}
        type="button"
        onClick={handleBackToLogin}
      >
        Back to Log in
      </Button>
    </div>
  );
};
