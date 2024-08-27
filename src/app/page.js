import Image from "next/image";
import styles from "./page.module.css";
import GithubCorner from "../components/github/GithubCorner";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <GithubCorner />
          {/* <Image
              src="/github-mark.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority
            /> */}
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.card}>
          <h2>MEHMET F. KURULDAK</h2>
          <p>Software Developer</p>
        </div>{" "}
      </div>
      <div></div>
    </main>
  );
}
