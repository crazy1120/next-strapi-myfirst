const qs = require("qs");

import { SERVER_API_URL } from "../constants";

export const locateDataFetcher = async (): Promise<any> => {
  const query = qs.stringify({
    populate: [
      "title",
      "hero.image",
      "offices.items",
      "retailStores.items",
      "resellers.items",
      "marketPlace",
      "onlineStore",
    ],
  });
  const serverRes = await fetch(`${SERVER_API_URL}/locate-page?${query}`);
  const { data } = await serverRes.json();

  return data.attributes;
};
