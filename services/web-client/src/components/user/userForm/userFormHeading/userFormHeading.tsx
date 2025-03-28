import styles from "./userFormHeading.module.scss";
import { Button, Heading, Title } from "@/components/common";
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
      <div className={styles.titleWrap}>
        <Title tag="h1">{title}</Title>
        <div className={styles.actions}>
          <Link href={backLink} passHref>
            <Button
              type="button"
              size={Sizes.MD}
              color="neutral"
              variant="outlined"
            >
              {backTitle}
            </Button>
          </Link>
          <Button
            type="button"
            size={Sizes.MD}
            onClick={onFormSubmit}
            disabled={submitDisable}
          >
            {submitTitle}
          </Button>
        </div>
      </div>
    </Heading>
  );
};
