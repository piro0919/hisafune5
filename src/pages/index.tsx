import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import About from "components/About";
import Blog from "components/Blog";
import Contact, { ContactProps } from "components/Contact";
import Gallery from "components/Gallery";
import { LayoutProps } from "components/Layout";
import Top from "components/Top";

const Layout = dynamic(() => import("components/Layout"), { ssr: false });

export type PagesProps = {
  defaultSlideNumber: number;
};

function Pages({ defaultSlideNumber }: PagesProps): JSX.Element {
  const handleSubmit = useCallback<ContactProps["onSubmit"]>((data) => {
    console.log(data);
  }, []);
  const slides = useMemo<LayoutProps["slides"]>(
    () => [
      {
        path: "/",
        slide: <Top key="top" />,
        title: "トップ",
      },
      ...[
        {
          path: "/gallery",
          slide: <Gallery key="gallery" />,
          title: "ギャラリー",
        },
        { path: "/blog", slide: <Blog key="blog" />, title: "日記" },
        {
          path: "/about",
          slide: <About key="about" />,
          title: "ひさ舟について",
        },
        {
          path: "/contact",
          slide: <Contact key="contact" onSubmit={handleSubmit} />,
          title: "ご連絡",
        },
      ].reverse(),
    ],
    [handleSubmit]
  );
  const [currentSlideNumber, setCurrentSlideNumber] =
    useState(defaultSlideNumber);
  const handleBeforeChange = useCallback<
    NonNullable<LayoutProps["onBeforeChange"]>
  >((_, next): void => {
    setCurrentSlideNumber(next);
  }, []);
  const title = useMemo(() => {
    const { title } = slides[currentSlideNumber];

    return title;
  }, [currentSlideNumber, slides]);

  return (
    <>
      <NextSeo
        noindex={true}
        title={`${title === "トップ" ? "" : `${title} - `}書家 河村ひさ舟`}
      />
      <Layout
        currentSlideNumber={currentSlideNumber}
        onBeforeChange={handleBeforeChange}
        slides={slides}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PagesProps> = async ({
  req: { url },
}) => {
  const paths = ["/", ...["/gallery", "/blog", "/about", "/contact"].reverse()];
  const index = paths.findIndex((path) => url === path);

  return {
    props: {
      defaultSlideNumber: index >= 0 ? index : 0,
    },
  };
};

export default Pages;
