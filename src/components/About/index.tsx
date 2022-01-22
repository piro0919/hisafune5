import styles from "./style.module.scss";
import useOverhang from "hooks/useOverhang";

function About(): JSX.Element {
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
        <h2>ひさ舟について</h2>
        <p>
          日本の伝統文化である「書」を、絵、彫刻、メディアアートへと昇華させ、文字に内包される感情や理を引き出す。その作品は唯一無二の現代アートであり、日本の思想や文化を世界に発信している。
          <br />
          <br />
          2014年、フランス・ルーヴル美術館地下会場でのフランス国民美術協会展にて、書画で金賞、彫刻で最高位金賞を日本人初のダブル受賞。翌年同展の「主賓招待アーティスト」に選出され、日本人では横山大観以来の快挙となる。
          <br />
          <br />
          2015年、イタリア・ミラノ国際博覧会にて日本館のエントランス展示を手掛け、同館は展示デザイン部門で金賞を受賞。
          <br />
          <br />
          2017年、天皇皇后両陛下（現、上皇上皇后両陛下）が『紫舟』展に行幸啓され、紫舟は拝謁の彌榮を賜り、自ら作品をご案内。
          <br />
          <br />
          2020年、髙島屋7店舗で巡回展を開催。
          <br />
          <br />
          代表作：NHK大河ドラマ『龍馬伝』、美術番組『美の壺』、伊勢神宮『祝御遷宮』、内閣官房『JAPAN』、ディズニー・ピクサー『喜悲怒嫌怖』、SHISEIDOグローバル展開製品のパッケージ、など。
        </p>
      </article>
    </div>
  );
}

export default About;
