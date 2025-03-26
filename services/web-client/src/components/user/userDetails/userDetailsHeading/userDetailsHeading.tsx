import styles from "./userDetailsHeading.module.scss";
import {
  ArrowIcon,
  Badge,
  BlockIcon,
  Button,
  EditIcon,
  EyeIcon,
  Heading,
  IBadge,
  IHeading,
  Title,
} from "@/components/common";
import { Page } from "@/constants/routes";
import Link from "next/link";
import { IUserDetailsHeading } from "./userDetailsHeading.types";
import { Sizes } from "@/enums/size.enum";
import { Role } from "@/enums/role.enum";
import { formatCapitalize, generateUrl } from "@/helpers";
import { Severity } from "@/enums/severity.enum";
import { useCurrentUser } from "@/store/currentUser";
import { isRoleHigher } from "@/helpers";

const getHeadingProps = (role: Role): IHeading => {
  const props: IHeading = {
    gap: Sizes.XXL,
    underline: role !== Role.CLIENT,
  };
  if (role !== Role.CLIENT) {
    props.underlineMargin = Sizes.MD;
  } else {
    props.margin = Sizes.MD;
  }
  return props;
};

const getBadgeProps = (role: Role): IBadge => {
  let severity = Severity.SUCCESS;
  if (role === Role.ADMIN || role === Role.SUPERADMIN) {
    severity = Severity.ERROR;
  } else if (role === Role.FRANCHISEE) {
    severity = Severity.WARNING;
  }
  return {
    severity,
    size: Sizes.LG,
    title: formatCapitalize(role),
  };
};

export const UserDetailsHeading = ({
  id,
  fullName,
  role,
}: IUserDetailsHeading) => {
  const { user } = useCurrentUser();
  const hasPermission = user && isRoleHigher(user.role, role);

  const editPageUrl = generateUrl(Page.EDIT_USER, { id });
  const badgeProps = getBadgeProps(role);
  const headingProps = getHeadingProps(role);

  return (
    <Heading {...headingProps}>
      <Link href={Page.USERS}>
        <Button
          color="secondary"
          variant="text"
          size={Sizes.SM}
          noOutline
          noBackground
          startIcon={<ArrowIcon />}
        >
          Back to User Management
        </Button>
      </Link>
      <div className={styles.titleWrap}>
        <div className={styles.titleInfo}>
          <Title tag="h1" className={styles.title}>
            {fullName}
          </Title>
          <Badge {...badgeProps} />
        </div>
        {hasPermission && (
          <div className={styles.titleActions}>
            <Button
              color="inherit"
              size={Sizes.MD}
              noBackground
              startIcon={<BlockIcon size={Sizes.LG} />}
            >
              Block
            </Button>
            <Button
              color="neutral"
              size={Sizes.MD}
              variant="outlined"
              startIcon={<EyeIcon size={Sizes.LG} />}
            >
              Access
            </Button>
            <Link href={editPageUrl}>
              <Button
                color="neutral"
                size={Sizes.MD}
                variant="outlined"
                startIcon={<EditIcon size={Sizes.LG} />}
              >
                Edit
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Heading>
  );
};
