import { Heading, Title } from "@/components/common";
import styles from "./userDetailsCard.module.scss";
import { IUserDetailsCard } from "./userDetailsCard.types";
import { Sizes } from "@/enums/size.enum";

export const UserDetailsCard = ({
  title,
  fields,
  ...other
}: IUserDetailsCard) => {
  return (
    <div className={styles.card} {...other}>
      <Heading underline gap={Sizes.MD} underlineMargin={Sizes.SM}>
        <Title tag="h2" size={Sizes.LG}>
          {title}
        </Title>
      </Heading>
      <ul className={styles.list}>
        {fields.map(({ label, value, icon }) => (
          <li key={label} className={styles.item}>
            <div className={styles.label}>{label}</div>
            <div className={styles.value}>
              {icon && <span className={styles.icon}>{icon}</span>}
              {value || "No company"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
