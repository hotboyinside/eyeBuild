import { FormLayout, LoginForm } from "@/components/auth";
import { Logomark } from "@/components/common";

export default function Auth() {
  return (
    <FormLayout
      title="Log in to your account"
      subtitle="Welcome back! Please enter your details."
      icon={<Logomark size="xxl" variant="primary" />}
      form={<LoginForm />}
    />
  );
}
