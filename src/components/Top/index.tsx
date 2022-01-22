import Image from "next/image";
import logo from "./images/logo.png";
import styles from "./style.module.scss";

function Top(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading1}>書家 ひさ舟</h1>
      <div className={styles.inner}>
        <div className={styles.logoWrapper}>
          <Image
            alt="書家 ひさ舟"
            layout="fill"
            objectFit="contain"
            src={logo}
          />
        </div>
      </div>
    </div>
  );
}

export default Top;
