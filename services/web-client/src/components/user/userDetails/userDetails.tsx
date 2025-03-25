import { UserDetailsHeading } from "./userDetailsHeading";
import { Role } from "@/constants/roles";
import { UserDetailsTabs } from "./userDetailsTabs";
import { UserDetailsContent } from "./userDetailsContent";
import { IUserDetails } from "./userDetails.types";

export const UserDetails = ({ userData }: IUserDetails) => {
  const isClient = userData.role === Role.CLIENT;
  return (
    <>
      <UserDetailsHeading
        id={userData._id}
        fullName={userData.fullName}
        role={userData.role}
      />
      {isClient ? (
        <UserDetailsTabs userData={userData} />
      ) : (
        <UserDetailsContent userData={userData} />
      )}
    </>
  );
};
