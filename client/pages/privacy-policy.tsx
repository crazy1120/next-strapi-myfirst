import { GetStaticProps } from "next";
import Layout from "@/components/layout";
import PrivacyPolicy from "@/components/privacyPolicy";

import {
    privacyPolicyDataFetcher
} from "@/utils/fetchers/privacy-policy-page";


export interface privacyPolicy {
  id: number,
  title: string,
  desc: string
}

const privacyPolicyPage = ({
  privacyPolicyData,
}:{
  privacyPolicyData: privacyPolicy;
}) => {
  return (
    <Layout title={privacyPolicyData.title}>
       <PrivacyPolicy privacyPolicy={privacyPolicyData}></PrivacyPolicy> 
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const privacyPolicyData = await privacyPolicyDataFetcher();

  return {
    props: {privacyPolicyData},
  };
};
  
export default privacyPolicyPage;