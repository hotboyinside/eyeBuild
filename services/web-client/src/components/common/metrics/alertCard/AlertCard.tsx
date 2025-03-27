import styles from "./AlertCard.module.scss";
import { Paper } from "../../paper";
import { IAlertCard } from "./AlertCard.types";
import { DangerTriangelIcon, IconBox, VideocameraIcon } from "../../icons";
import { Sizes } from "@/enums/size.enum";
import clsx from "clsx";
import { CameraStatuses } from "@/enums/cameras.enum";

export const AlertCard = ({ type, address, timestamp }: IAlertCard) => {
  const isCamera = type === CameraStatuses.OFFLINE;
  const title = isCamera
    ? "Camera offline for 15+ mins"
    : "Connectivity issues";
  return (
    <Paper className={styles.card}>
      <IconBox
        size={Sizes.SM}
        className={clsx(styles.icon, { [styles.camera]: isCamera })}
        variant="outlined"
      >
        {isCamera ? (
          <VideocameraIcon size={Sizes.SM} />
        ) : (
          <DangerTriangelIcon size={Sizes.SM} />
        )}
      </IconBox>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.address}>{address}</div>
        <div className={styles.timestamp}>{timestamp}</div>
      </div>
    </Paper>
  );
};
