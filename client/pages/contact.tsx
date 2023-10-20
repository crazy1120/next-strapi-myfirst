import { GetStaticProps } from "next";
import Layout from "@/components/layout";
import Hero from "@/components/contact/hero";
import LiveSupport from "@/components/contact/liveSupport";
import {
  contactDataFetcher
} from "@/utils/fetchers/contact-page";
import Enquiries from "@/components/contact/enquiries";

export interface heroAndBlock {
  id: number,
  title: string,
  image: Image
}

export interface supportItem {
  id: number,
  title: string,
  desc: string,
  link: string,
  link_text: string,
  image: Image
}

export interface enquiry {
  id: number,
  title: string, 
  desc: string
}

const contactPage = ({
  titleData,
  heroData,
  liveSupportData,
  supportItemsData,
  enquiriesData
}:{
  titleData: string,
  heroData: heroAndBlock;
  liveSupportData: string,
  supportItemsData: supportItem[],
  enquiriesData: enquiry[]
}) => {
  return (
    <Layout title={titleData}>
      <Hero hero={heroData}></Hero>
      <LiveSupport title={liveSupportData} items={supportItemsData}></LiveSupport>
      <Enquiries items={enquiriesData}></Enquiries>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const contactData = await contactDataFetcher();
  const titleData = contactData.title;

  const heroData = contactData.hero;
  const liveSupportData = contactData.liveSupport;
  const supportItemsData = contactData.supportItems;
  const enquiriesData = contactData.enquiries;
  
  return {
    props: { titleData, heroData, liveSupportData, supportItemsData, enquiriesData},
  };
};
  
export default contactPage;