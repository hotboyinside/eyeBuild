import { ForgotPasswordForm, FormLayout } from "@/components/auth";
import { KeyIcon } from "@/components/common";
import { IconBox } from "@/components/common";
import { adminEmail, adminEmailLink } from "@/constants/config";

const SubtitleForm = () => (
  <>
    To retrieve your login details, please contact <br />
    the administrator at <a href={adminEmailLink}>{adminEmail}</a>
  </>
);

export default function ForgotPassword() {
  return (
    <FormLayout
      title="Forgot password?"
      subtitle={<SubtitleForm />}
      icon={
        <IconBox size="xxl" variant="outlined">
          <KeyIcon size="xxl" />
        </IconBox>
      }
      form={<ForgotPasswordForm />}
    />
  );
}
