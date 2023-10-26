const qs = require("qs");

import { SERVER_API_URL } from "../constants";

export const contactDataFetcher = async (): Promise<any> => {
  const query = qs.stringify({
    populate: [
      "title",
      "hero.image",
      "liveSupport",
      "supportItems.image",
      "enquiries"
    ],
  });
  const serverRes = await fetch(`${SERVER_API_URL}/contact-page?${query}`);
  const { data }= await serverRes.json();

  return data.attributes;
}
