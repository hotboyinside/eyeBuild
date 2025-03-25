"use client";
import styles from "./userForm.module.scss";
import { FieldError, useForm } from "react-hook-form";
import { IUserForm } from "./userForm.types";
import { userFormSchema, UserFormValues } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AtIcon,
  CompanyIcon,
  DotIcon,
  IInputDetailedErrors,
  Input,
  InputPassword,
  KeyIcon,
  LetterIcon,
  PhoneNumberIcon,
  Select,
  UserIcon,
} from "@/components/common";
import { useHookFormMask } from "use-mask-input";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";
import { cleanNumber } from "@/helpers";
import { addUser, updateUser } from "@/services/user.service";
import { Severity } from "@/enums/severity.enum";
import { Page } from "@/constants/routes";
import { REGULAR_USERS } from "@/constants/roles";
import { getCapitalize } from "@/helpers/utils";
import { UserFormHeading } from "./userFormHeading";
import { useParams } from "next/navigation";
import { UserFormSection } from "./userFormSection";
import { Sizes } from "@/enums/size.enum";
import { ErrorMessages } from "@/enums/error-messages.enum";
import { isAxiosError } from "axios";
import { HttpStatus } from "@/enums/https-status.enum";

export const UserForm = ({ mode, defaultValues }: IUserForm) => {
  const isEditMode = mode === "edit";
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const formattedDefaultValues = {
    ...defaultValues,
    role: getCapitalize(defaultValues?.role || ""),
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    mode: isEditMode ? "onChange" : "onSubmit",
    defaultValues: formattedDefaultValues,
  });

  const formRef = useRef<HTMLFormElement | null>(null);
  const [detailedError, setDetailedError] = useState<IInputDetailedErrors>({});
  const registerWithMask = useHookFormMask(register);
  const router = useRouter();
  const { showToast } = useToast();

  useEffect(() => {
    const error = Object.values(errors)[0] as FieldError;
    if (!(error?.ref instanceof HTMLElement) || isSubmitting) return;
    error.ref.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    error.ref.focus({ preventScroll: true });
  }, [errors, isSubmitting]);

  const onSubmit = async (data: UserFormValues) => {
    data.role = data.role.toLowerCase();
    data.phone = cleanNumber(data.phone);

    try {
      let result;
      if (isEditMode) {
        if (!id) throw new Error("User ID is required for editing");
        result = await updateUser(id, data);
      } else {
        result = await addUser(data);
      }

      if (!result) throw new Error("Invalid add user response");

      setDetailedError({});
      router.push(Page.USERS);
      showToast({
        severity: Severity.SUCCESS,
        title: isEditMode ? "Changes saved" : "User added",
      });
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === HttpStatus.CONFLICT) {
        setError("username", {
          type: "manual",
          message: ErrorMessages.INVALID_USERNAME,
        });
        return;
      }

      console.error("Error while processing user:", err);
      showToast({
        severity: Severity.ERROR,
        title: `Failed to ${isEditMode ? "update" : "add"} user`,
      });
    }
  };

  const handleRequestSubmit = () => {
    if (!formRef.current) return;
    formRef.current.requestSubmit();
  };

  const memoizedRoles = useMemo(
    () =>
      REGULAR_USERS.map((role) => ({
        value: getCapitalize(role),
        icon: <DotIcon size={Sizes.LG} className={styles[`${role}Icon`]} />,
      })),
    []
  );

  const isFormInvalid = () => {
    const hasErrors = Object.values(errors).length > 0;
    const isChanged = Object.keys(dirtyFields).length > 0;
    return !isChanged || hasErrors;
  };

  return (
    <>
      <UserFormHeading
        title={isEditMode ? "Edit user" : "Add user"}
        onFormSubmit={handleRequestSubmit}
        backTitle={isEditMode ? "Back to Profile" : "Back to User Management"}
        backLink={isEditMode ? `${Page.USERS}/${id || ""}` : Page.USERS}
        submitTitle={isEditMode ? "Save" : "Add user"}
        submitDisable={isEditMode ? isFormInvalid() : false}
      />
      <form
        ref={formRef}
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <UserFormSection
          title="User Information"
          subtitle="Enter the user's basic details."
        >
          <Input
            className={styles.input}
            label="Full name"
            position="horizontal"
            placeholder="Name Surname"
            startIcon={<UserIcon size={Sizes.LG} />}
            required
            error={errors.fullName?.message}
            {...register("fullName")}
          />
          <Input
            className={styles.input}
            label="Contact email"
            position="horizontal"
            placeholder="Name@mail.com"
            startIcon={<LetterIcon size={Sizes.LG} />}
            required
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            className={styles.input}
            label="Phone number"
            position="horizontal"
            placeholder="+1 (000) 000-0000"
            startIcon={<PhoneNumberIcon size={Sizes.LG} />}
            required
            error={errors.phone?.message}
            {...registerWithMask("phone", "+1 (999) 999-9999")}
          />
          <Input
            className={styles.input}
            label="Company name"
            position="horizontal"
            placeholder="No company"
            startIcon={<CompanyIcon size={Sizes.LG} />}
            {...register("companyName")}
            error={errors.companyName?.message}
          />
        </UserFormSection>
        <UserFormSection
          title="Account Settings"
          subtitle="Set up login credentials and user role."
        >
          <Select
            className={styles.input}
            label="Role"
            position="horizontal"
            placeholder="Select role"
            icon={<DotIcon size={Sizes.LG} />}
            required
            options={memoizedRoles}
            error={errors.role?.message}
            {...register("role")}
          />
          <Input
            className={styles.input}
            label="Username"
            position="horizontal"
            placeholder="Username"
            startIcon={<AtIcon size={Sizes.LG} />}
            required
            error={errors.username?.message}
            {...register("username")}
          />
          <InputPassword
            className={styles.input}
            label="Password"
            position="horizontal"
            placeholder="Password"
            startIcon={<KeyIcon size={Sizes.LG} />}
            showDetailedErrors
            required
            detailedError={detailedError}
            setDetailedError={setDetailedError}
            error={errors.password?.message}
            {...register("password")}
          />
        </UserFormSection>
      </form>
    </>
  );
};
