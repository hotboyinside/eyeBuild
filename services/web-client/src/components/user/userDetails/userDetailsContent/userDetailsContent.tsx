import { UserDetailsCard } from "../userDetailsCard";
import styles from "./userDetailsContent.module.scss";
import { IUserBase } from "@/types/user";
import { formatRole, formatPhone } from "@/helpers";
import {
  AtIcon,
  CompanyIcon,
  DotIcon,
  KeyIcon,
  LetterIcon,
  PhoneNumberIcon,
  UserIcon,
} from "@/components/common";
import { Sizes } from "@/enums/size.enum";

export const UserDetailsContent = ({ userData }: { userData: IUserBase }) => {
  const userInfo = [
    {
      label: "Full Name",
      value: userData.fullName,
      icon: <UserIcon size={Sizes.LG} />,
    },
    {
      label: "Contact email",
      value: userData.email,
      icon: <LetterIcon size={Sizes.LG} />,
    },
    {
      label: "Phone number",
      value: formatPhone(userData.phone),
      icon: <PhoneNumberIcon size={Sizes.LG} />,
    },
    {
      label: "Company name",
      value: userData.companyName || 'No company',
      icon: <CompanyIcon size={Sizes.LG} />,
    },
  ];

  const accountSettings = [
    {
      label: "Role",
      value: formatRole(userData.role),
      icon: <DotIcon size={Sizes.LG} />,
    },
    {
      label: "Username",
      value: userData.username,
      icon: <AtIcon size={Sizes.LG} />,
    },
    {
      label: "Password",
      value: "•••••••••••",
      icon: <KeyIcon size={Sizes.LG} />,
    },
  ];
  return (
    <div className={styles.content}>
      <UserDetailsCard title="User Information" fields={userInfo} />
      <UserDetailsCard title="Account Settings" fields={accountSettings} />
    </div>
  );
};
