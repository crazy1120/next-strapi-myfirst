import { GetStaticProps } from "next";

import Layout from "@/components/layout";
import {
  blockDatasFetcher,
  blogDatasFetcher,
  heroDatasFetcher,
  metaDataFetcher,
} from "@/utils/fetchers/landing-page";
import { Blocks, Blogs, Heroes } from "@/components/landing";

export interface heroesAndBlocks {
  id: number;
  title: string;
  desc: string;
  link: string;
  link_text: string;
  image: Image;
}

export interface blogs {
  id: number;
  title: string;
  desc: string;
  link: string;
  date: string;
  image: Image;
}

const LandingPage = ({
  pageMetaData,
  heroesData,
  blocksData,
  blogsData,
}: {
  pageMetaData: {
    title: string;
    desc: string;
  };
  heroesData: heroesAndBlocks[];
  blocksData: heroesAndBlocks[];
  blogsData: blogs[];
}) => {
  const { title } = pageMetaData;
  return (
    <Layout title={title}>
      <Heroes heroes={heroesData} />
      <Blocks blocks={blocksData} />
      <Blogs blogs={blogsData} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const metaData = await metaDataFetcher();
  const heroesData = await heroDatasFetcher();
  const blocksData = await blockDatasFetcher();
  const blogsData = await blogDatasFetcher();

  return {
    props: { pageMetaData: metaData, heroesData, blocksData, blogsData },
  };
};

export default LandingPage;
