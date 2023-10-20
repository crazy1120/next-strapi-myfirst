import { GetStaticProps } from "next";
import Hero from "@/components/about/hero";
import Story from "@/components/about/story";
import Mission from "@/components/about/mission";
import Explore from "@/components/about/explore";
import Layout from "@/components/layout";

import {
  aboutDataFetcher
} from "@/utils/fetchers/about-page";

export interface heroAndBlock {
  id: number,
  title: string,
  image: Image
}

export interface storyData {
  id: number,
  title: string,
  desc: string,

}

export interface missionData {
  id: number,
  title: string,
  desc: string
}

export interface storyItemData {
  id: number,
  desc: string,
  textLeft: Boolean,
  image: Image
}

export interface exploreData {
  id: number,
  title: string,
  items: []
}

export interface exploreItemData {
  id: number,
  title: string,
  desc: string,
  link: string,
  link_text: string,
  image: Image
}

const AboutPage = ({
  titleData,
  heroData,
  storyData,
  storyItemsData,
  missionData,
  exploreData
}:{
  titleData: string;
  heroData: heroAndBlock;
  storyData: storyData;
  storyItemsData: storyItemData[];
  missionData: missionData,
  exploreData: exploreData,
  exploreTitle: string,
}) => {
  
  return (
    <Layout title={titleData}>
      <Hero hero={heroData}></Hero>
      <Story story={storyData} storyItems={storyItemsData}></Story>
      <Mission mission={missionData}></Mission>
      <Explore explore={exploreData}></Explore>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async () => {
    const aboutData = await aboutDataFetcher();
    
    const titleData = aboutData.title;
    const heroData = aboutData.hero;
    const storyData = aboutData.story;
    const storyItemsData = aboutData.storyItems;
    const missionData = aboutData.mission;
    const exploreData = aboutData.explore;
  
    return {
      props: { titleData, heroData, storyData, storyItemsData, missionData, exploreData},
    };
  };
  
export default AboutPage;