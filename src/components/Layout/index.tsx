import { useWindowHeight } from "@react-hook/window-size";
import useEventListener from "@use-it/event-listener";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useMemo, useRef } from "react";
import Slider, { Settings } from "react-slick";
import styles from "./style.module.scss";

type Slide = {
  path: string;
  slide: ReactNode;
  title: string;
};

export type LayoutProps = {
  currentSlideNumber: number;
  onBeforeChange: Settings["beforeChange"];
  slides: Slide[];
};

function Layout({
  currentSlideNumber,
  onBeforeChange,
  slides,
}: LayoutProps): JSX.Element {
  const router = useRouter();
  const settings = useMemo<Settings>(
    () => ({
      afterChange: (currentSlide): void => {
        const { path } = slides[currentSlide];

        router.push(path, undefined, { shallow: true });
      },
      arrows: false,
      beforeChange: onBeforeChange,
      centerMode: true,
      centerPadding: "48px",
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
      swipe: false,
    }),
    [onBeforeChange, router, slides]
  );
  const onlyHeight = useWindowHeight();
  const items = useMemo(
    () =>
      slides.map(({ slide }, index) => (
        <div
          className={`${styles.slide} ${
            currentSlideNumber === index ? "" : styles.inactiveSlide
          }`}
          dir="rtl"
          key={nanoid()}
        >
          <div
            className={styles.slideInner}
            style={{ height: `${onlyHeight}px` }}
          >
            {slide}
          </div>
        </div>
      )),
    [currentSlideNumber, onlyHeight, slides]
  );
  const sliderRef = useRef<Slider>(null);
  const prevTitle = useMemo(() => {
    const { title } =
      slides[
        currentSlideNumber === slides.length - 1 ? 0 : currentSlideNumber + 1
      ];

    return title;
  }, [currentSlideNumber, slides]);
  const nextTitle = useMemo(() => {
    const { title } =
      slides[
        currentSlideNumber === 0 ? slides.length - 1 : currentSlideNumber - 1
      ];

    return title;
  }, [currentSlideNumber, slides]);

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    sliderRef.current.slickGoTo(currentSlideNumber, true);
  }, [currentSlideNumber]);

  useEventListener("popstate", (handler) => {
    if (!sliderRef.current) {
      return;
    }

    const {
      state: { as },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } = handler as any;
    const nextSlideNumber = slides.findIndex(({ path }) => as === path);
    const isReverse =
      (currentSlideNumber === 0 && nextSlideNumber === slides.length - 1) ||
      (currentSlideNumber === slides.length - 1 && nextSlideNumber === 0);

    sliderRef.current.slickGoTo(
      (
        isReverse
          ? currentSlideNumber < nextSlideNumber
          : currentSlideNumber > nextSlideNumber
      )
        ? currentSlideNumber - 1
        : currentSlideNumber + 1
    );
  });

  return (
    <div className={styles.wrapper}>
      <Slider {...settings} ref={sliderRef}>
        {items}
      </Slider>
      <button
        className={styles.leftButton}
        onClick={(): void => {
          if (!sliderRef.current) {
            return;
          }

          sliderRef.current.slickPrev();
        }}
        style={{ height: `${onlyHeight}px` }}
      >
        <span className={styles.buttonInner}>{nextTitle}</span>
      </button>
      <button
        className={styles.rightButton}
        onClick={(): void => {
          if (!sliderRef.current) {
            return;
          }

          sliderRef.current.slickNext();
        }}
        style={{ height: `${onlyHeight}px` }}
      >
        <span className={styles.buttonInner}>{prevTitle}</span>
      </button>
    </div>
  );
}

export default Layout;
