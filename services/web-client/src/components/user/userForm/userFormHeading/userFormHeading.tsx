import styles from "./userFormHeading.module.scss";
import { ArrowIcon, Button, Heading, Title } from "@/components/common";
import Link from "next/link";
import { IUserFormHeading } from "./userFormHeading.types";
import { Sizes } from "@/enums/size.enum";

export const UserFormHeading = ({
  title,
  backTitle,
  backLink,
  onFormSubmit,
  submitDisable = false,
  submitTitle,
}: IUserFormHeading) => {
  return (
    <Heading underline gap="xxl">
      <Link href={backLink}>
        <Button
          color="secondary"
          variant="text"
          size={Sizes.SM}
          noOutline
          noBackground
          startIcon={<ArrowIcon />}
        >
          {backTitle}
        </Button>
      </Link>
      <div className={styles.titleWrap}>
        <Title tag="h1">{title}</Title>
        <Button type="button" size={Sizes.MD} onClick={onFormSubmit} disabled={submitDisable}>
          {submitTitle}
        </Button>
      </div>
    </Heading>
  );
};
