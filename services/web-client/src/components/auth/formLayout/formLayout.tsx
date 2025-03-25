import { IFormLayout } from "../auth.types";
import styles from "./formLayout.module.scss";

export const FormLayout = ({ icon, title, subtitle, form }: IFormLayout) => {
  return (
    <section className={styles.layout}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.heading}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
          </div>
        </div>
        <div className={styles.form}>{form}</div>
      </div>
    </section>
  );
};
