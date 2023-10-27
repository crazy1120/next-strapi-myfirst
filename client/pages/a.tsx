import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";
import { ReactNode } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Query from "@/components/query";
import { POSTS_QUERY } from "@/utils/fetchers";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

interface Post {
  id: number;
  attributes: {
    title: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const A: NextPage = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <Query query={POSTS_QUERY({ locale })}>
      {({ data }: { data: { posts: { data: Post[] } } }): ReactNode => {
        const posts = data.posts.data;

        return (
          <>
            {posts.map((post: Post) => (
              <div key={post.id}>
                <Image
                  src={post.attributes.cover.data.attributes.url}
                  alt="aaa"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </>
        );
      }}
    </Query>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common"])),
  },
});

export default A;
