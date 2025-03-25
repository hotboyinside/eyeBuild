import Image from "next/image";
import styles from "./layout.module.scss";
import { Copyright, Logotype } from "@/components/common";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Logotype />
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <Copyright />
        </footer>
      </div>
      <div className={styles.banner}>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <Image
              src="/images/auth.png"
              alt="town"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1053px"
            />
          </div>
          <div className={styles.imageText}>
            We Keep An Eye, <br />
            You Build.
          </div>
        </div>
      </div>
    </div>
  );
}
