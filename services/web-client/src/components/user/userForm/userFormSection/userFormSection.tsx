import { Heading, Paragraph, Title } from "@/components/common";
import styles from "./userFormSection.module.scss";
import { IUserFormSection } from "./userFormSection.types";
import { Sizes } from "@/enums/size.enum";
export const UserFormSection = ({
  title,
  subtitle,
  children,
  ...other
}: IUserFormSection) => {
  return (
    <div className={styles.section} {...other}>
      <Heading gap={Sizes.SM} underline className={styles.heading}>
        <Title tag="h2" size={Sizes.LG}>
          {title}
        </Title>
        {subtitle && <Paragraph size={Sizes.SM}>{subtitle}</Paragraph>}
      </Heading>
      <div className={styles.fields}>{children}</div>
    </div>
  );
};
