import { GetStaticProps } from "next";
import Layout from "@/components/layout";
import Hero from "@/components/locate/hero";
import RowBlock from "@/components/locate/rowBlock";
import ColumnBlock from "@/components/locate/columnBlock";

import {
  locateDataFetcher
} from "@/utils/fetchers/locate-us-page";


export interface heroAndBlock {
  id: number,
  title: string,
  image: Image
}

export interface blockData {
  id: number,
  title: string,
  items: []
}

export interface columnBlockData {
  id: number,
  title: string,
  desc: string
}

const locateUsPage = ({
  titleData,
  heroData,
  officesData,
  retailStoresData,
  resellersData,
  marketPlaceData,
  officialOnlineStoreData
}:{
  titleData: string;
  heroData: heroAndBlock;
  officesData: blockData;
  retailStoresData: blockData;
  resellersData: blockData;
  marketPlaceData: columnBlockData;
  officialOnlineStoreData: columnBlockData;
}) => {
  return (
    <Layout title={titleData}>
        <Hero hero={heroData}></Hero>
        <section className="flex flex-wrap text-black items-start lg:max-w-[1140px] mx-5 lg:mx-auto lg:mb-10">
          <RowBlock blockData={officesData}></RowBlock>
          <RowBlock blockData={retailStoresData}></RowBlock>
          <RowBlock blockData={resellersData}></RowBlock>
        </section>
        <section className="flex flex-wrap text-black items-start lg:max-w-[1140px] mx-5 lg:mx-auto lg:mb-10">
          <ColumnBlock blockData={marketPlaceData}></ColumnBlock>
          <ColumnBlock blockData={officialOnlineStoreData}></ColumnBlock>
        </section>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const locateData = await locateDataFetcher();
  const titleData = locateData.title;
  const heroData = locateData.hero;
  const officesData = locateData.offices;
  const retailStoresData = locateData.retailStores;
  const resellersData = locateData.resellers;
  const marketPlaceData = locateData.marketPlace;
  const officialOnlineStoreData = locateData.onlineStore;

  return {
    props: { titleData, heroData, officesData, retailStoresData, resellersData, marketPlaceData,officialOnlineStoreData},
  };
};
  
export default locateUsPage;