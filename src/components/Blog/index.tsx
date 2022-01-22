import dayjs from "dayjs";
import Link from "next/link";
import styles from "./style.module.scss";
import useOverhang from "hooks/useOverhang";

function Blog(): JSX.Element {
  const { innerTarget, isOverhang, wrapperTarget } = useOverhang();

  return (
    <div
      className={styles.wrapper}
      ref={wrapperTarget}
      style={{
        justifyContent: isOverhang ? "normal" : "center",
      }}
    >
      <article className={styles.article} ref={innerTarget}>
        <h2>日記</h2>
        <ul className={styles.list}>
          <li>
            <Link href="#">
              <a className={styles.link}>
                <span className={styles.title}>ほげほげ</span>
                <span className={styles.line} />
                <span className={styles.date}>
                  {dayjs().format("YYYY.MM.DD")}
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={styles.link}>
                <span className={styles.title}>ふがふが</span>
                <span className={styles.line} />
                <span className={styles.date}>
                  {dayjs().format("YYYY.MM.DD")}
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={styles.link}>
                <span className={styles.title}>ぴよぴよ</span>
                <span className={styles.line} />
                <span className={styles.date}>
                  {dayjs().format("YYYY.MM.DD")}
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Blog;
