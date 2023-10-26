import { GetStaticProps } from "next";

import Layout from "@/components/layout";
import { Blocks, Blogs, Heroes } from "@/components/landing";
import {
  blockDatasFetcher,
  blogDatasFetcher,
  heroDatasFetcher,
  metaDataFetcher,
} from "@/utils/fetchers/landing-page";

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
  heroesData: HeroesAndBlocks[];
  blocksData: HeroesAndBlocks[];
  blogsData: BlogComponent[];
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
