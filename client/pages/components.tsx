import { GetStaticProps } from "next";

import Layout from "@/components/layout";
import { dataFetcher } from "@/utils/fetchers/components-page";
import {
  WhiteCameraOnly,
  WhiteHatGirl,
  PurpleCameraOnly,
  PurpleHandCamera,
} from "@/components/components";

interface PagePropTypes {
  title: string;
  white_camera_only: Hero;
  white_hat_girl: Hero;
  purple_camera_only: Hero;
  purple_hand_camera: Hero;
}

const Components = ({ data }: { data: PagePropTypes }) => {
  return (
    <Layout title={data.title}>
      <WhiteCameraOnly data={data.white_camera_only} />
      <PurpleCameraOnly data={data.purple_camera_only} />
      <WhiteHatGirl data={data.white_hat_girl} />
      <PurpleHandCamera data={data.purple_hand_camera} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await dataFetcher();
  return { props: { data } };
};

export default Components;
