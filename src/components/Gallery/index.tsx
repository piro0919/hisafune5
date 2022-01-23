import Image from "next/image";
import Link from "next/link";
import sample from "./images/8845.jpg";
import styles from "./style.module.scss";
import useOverhang from "hooks/useOverhang";

function Gallery(): JSX.Element {
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
        <h2>ギャラリー</h2>
        <ul className={styles.list}>
          <li>
            <Link href="/gallery/hoge">
              <a>
                <figure className={styles.item}>
                  <div className={styles.imageWrapper}>
                    <Image
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      src={sample}
                      unoptimized={true}
                    />
                  </div>
                  <figcaption className={styles.title}>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </figcaption>
                </figure>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gallery/fuga">
              <a>
                <figure className={styles.item}>
                  <div className={styles.imageWrapper}>
                    <Image
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      src={sample}
                      unoptimized={true}
                    />
                  </div>
                  <figcaption className={styles.title}>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </figcaption>
                </figure>
              </a>
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Gallery;
