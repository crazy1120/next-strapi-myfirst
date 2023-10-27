import { ReactNode } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Query from "@/components/query";
import { LANDING_PAGE_QUERY } from "@/utils/fetchers";
import Layout from "@/components/layout";
import { Blogs, Heroes, Products } from "@/components/landing";
import { COMMON } from "@/utils/constants";

type LandingPageProps = PageMetaData & {
  heroes_section: LinkDescComponent[];
} & { products_section: LinkDescComponent[] } & {
  blogs_section: BlogComponent[];
};

const LandingPage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Query query={LANDING_PAGE_QUERY({ locale })}>
      {({
        data,
      }: {
        data: { landingPage: { data: { attributes: LandingPageProps } } };
      }): ReactNode => {
        const props = data.landingPage.data.attributes;

        return (
          <Layout title={props.page_title}>
            <Heroes heroes={props.heroes_section} />
            <Products products={props.products_section} />
            <Blogs blogs={props.blogs_section} />
          </Layout>
        );
      }}
    </Query>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [COMMON])),
  },
});

export default LandingPage;
