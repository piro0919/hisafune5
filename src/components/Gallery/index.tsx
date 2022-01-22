import Image from "next/image";
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
            <div className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={sample}
                  unoptimized={true}
                />
              </div>
              <div className={styles.title}>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </div>
            </div>
          </li>
          <li>
            <figure className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={sample}
                  unoptimized={true}
                />
              </div>
              <figcaption className={styles.title}>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={sample}
                  unoptimized={true}
                />
              </div>
              <figcaption className={styles.title}>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={sample}
                  unoptimized={true}
                />
              </div>
              <figcaption className={styles.title}>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={sample}
                  unoptimized={true}
                />
              </div>
              <figcaption className={styles.title}>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={sample}
                  unoptimized={true}
                />
              </div>
              <figcaption className={styles.title}>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={sample}
                  unoptimized={true}
                />
              </div>
              <figcaption className={styles.title}>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </figcaption>
            </figure>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Gallery;
