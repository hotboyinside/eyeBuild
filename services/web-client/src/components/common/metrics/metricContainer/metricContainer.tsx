import styles from "./metricContainer.module.scss";
import clsx from "clsx";
import { Paper } from "../../paper";
import { Heading } from "../../heading";
import { IMetricContainer } from "./metricContainer.types";
import { Title } from "../../title";
import { Badge } from "../../badge";
import { Button } from "../../button";
import { Sizes } from "@/enums/size.enum";
import { ArrowIcon } from "../../icons";
import Link from "next/link";
import { Severity } from "@/enums/severity.enum";

export const MetricContainer = ({
  title,
  link,
  total,
  className,
  children,
  ...other
}: IMetricContainer) => {
  return (
    <Paper
      className={clsx(styles.container, className)}
      variant="secondary"
      {...other}
    >
      <Heading underline gap={Sizes.MD} underlineMargin={Sizes.SM}>
        <header className={styles.header}>
          <div className={styles.left}>
            <Title tag="h3" size={Sizes.LG} className={styles.title}>
              {title}
            </Title>
            {title && (
              <Badge
                variant="text"
                severity={Severity.INFO}
                title={String(total)}
              />
            )}
          </div>
          <Link href={link}>
            <Button
              color="secondary"
              variant="text"
              size={Sizes.SM}
              noOutline
              noBackground
              endIcon={
                <ArrowIcon size={Sizes.LG} className={styles.linkIcon} />
              }
            >
              View all
            </Button>
          </Link>
        </header>
      </Heading>
      {children}
    </Paper>
  );
};
