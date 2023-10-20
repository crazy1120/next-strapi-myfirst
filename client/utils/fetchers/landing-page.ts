// API request fetcher for landing page contents
// Need to improve to make only a single api request
import { SERVER_API_URL } from "../constants";

export const metaDataFetcher = async (): Promise<any> => {
  const serverRes = await fetch(`${SERVER_API_URL}/landing-page?field=title`);
  const { data } = await serverRes.json();
  return data.attributes;
};

export const heroDatasFetcher = async (): Promise<any> => {
  const serverRes = await fetch(
    `${SERVER_API_URL}/landing-page?populate[0]=heroes&populate[1]=heroes.image`
  );
  const { data } = await serverRes.json();
  return data.attributes.heroes;
};

export const blockDatasFetcher = async (): Promise<any> => {
  const serverRes = await fetch(
    `${SERVER_API_URL}/landing-page?populate[0]=blocks&populate[1]=blocks.image`
  );
  const { data } = await serverRes.json();
  return data.attributes.blocks;
};

export const blogDatasFetcher = async (): Promise<any> => {
  const serverRes = await fetch(
    `${SERVER_API_URL}/landing-page?populate[0]=blogs&populate[1]=blogs.image`
  );
  const { data } = await serverRes.json();
  return data.attributes.blogs;
};
