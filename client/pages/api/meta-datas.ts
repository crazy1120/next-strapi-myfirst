import type { NextApiRequest as Req, NextApiResponse as Res } from "next";

interface MetaData {
  title: string;
}

interface MetaDataResponse {
  data: {
    attributes: MetaData;
  }[];
}

const metaDataHandler = async (req: Req, res: Res) => {
  const serverRes = await fetch(
    `http://localhost:1337/api/meta-datas?filters[page][$eq]=home&fields[0]=title`
  );

  const { data }: MetaDataResponse = await serverRes.json();
  const { title }: MetaData = data[0].attributes;

  res.status(200).json(title);
};

export default metaDataHandler;
