"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, InputPassword } from "@/components/common/input";
import styles from "./loginForm.module.scss";
import { Checkbox } from "@/components/common/checkbox";
import { Button } from "@/components/common";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { Page } from "@/constants/routes";
import { ErrorMessages } from "@/enums/error-messages.enum";
import { loginFormSchema, LoginFormValues } from "@/schemas/loginForm.schema";
import { login } from "@/services/auth.service";
import { useCurrentUser } from "@/store/currentUser";
import { Severity } from "@/enums/severity.enum";
import { useToast } from "@/hooks/useToast";
import { isAxiosError } from "axios";
import { HttpStatus } from "@/enums/https-status.enum";

export const LoginForm = () => {
  const router = useRouter();
  const { setUser } = useCurrentUser();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleForgotPassword = useCallback(() => {
    router.push(Page.FORGOT_PASSWORD);
  }, [router]);

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const user = await login(data);
      if (!user) throw new Error("Invalid login response.");
      setUser(user);
      const redirectPage =
        user.role === "client" ? Page.MONITORING : Page.OVERVIEW;
      router.push(redirectPage);
    } catch (err) {
      if (
        isAxiosError(err) &&
        err.response?.status === HttpStatus.UNAUTHORIZED
      ) {
        setError("username", { type: "manual", message: " " });
        setError("password", {
          type: "manual",
          message: ErrorMessages.INVALID_CREDENTIALS_LOGIN,
        });
        return;
      }
      showToast({
        severity: Severity.ERROR,
        title: "Undefined error login",
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fieldsWrapper}>
        <Input
          label="Username"
          placeholder="Your username"
          {...register("username")}
          error={errors.username?.message}
          required
        />
        <InputPassword
          label="Password"
          placeholder="•••••••••"
          {...register("password")}
          error={errors.password?.message}
          required
        />
      </div>
      <div className={styles.row}>
        <Checkbox
          variant="primary"
          size="md"
          title="Remember me"
          {...register("rememberMe")}
        />
        <Button
          color="secondary"
          variant="text"
          size="sm"
          noOutline
          noBackground
          type="button"
          onClick={handleForgotPassword}
        >
          Forgot password
        </Button>
      </div>
      <Button
        color="primary"
        variant="outlined"
        size="lg"
        fullWidth
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
};
