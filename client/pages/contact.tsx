import { GetStaticProps } from "next";
import Layout from "@/components/layout";
import Hero from "@/components/contact/hero";
import LiveSupport from "@/components/contact/liveSupport";
import { contactDataFetcher } from "@/utils/fetchers/contact-page";
import Enquiries from "@/components/contact/enquiries";

export interface enquiry {
  id: number;
  title: string;
  desc: string;
}

const ContactPage = ({
  titleData,
  heroData,
  liveSupportData,
  supportItemsData,
  enquiriesData,
}: {
  titleData: string;
  heroData: HeroAndBlock;
  liveSupportData: string;
  supportItemsData: HeroesAndBlocks[];
  enquiriesData: enquiry[];
}) => {
  return (
    <Layout title={titleData}>
      <Hero hero={heroData}></Hero>
      <LiveSupport
        title={liveSupportData}
        items={supportItemsData}></LiveSupport>
      <Enquiries items={enquiriesData}></Enquiries>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contactData = await contactDataFetcher();
  const titleData = contactData.title;

  const heroData = contactData.hero;
  const liveSupportData = contactData.liveSupport;
  const supportItemsData = contactData.supportItems;
  const enquiriesData = contactData.enquiries;

  return {
    props: {
      titleData,
      heroData,
      liveSupportData,
      supportItemsData,
      enquiriesData,
    },
  };
};

export default ContactPage;
