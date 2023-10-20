const qs = require("qs");

import { SERVER_API_URL } from "../constants";

export const metaDataFetcher = async (): Promise<any> => {
  const serverRes = await fetch(
    `${SERVER_API_URL}/about-page?_limit=1&_fields=title,desc`
  );
  const { data } = await serverRes.json();
  return data.attributes;
};

export const aboutDataFetcher = async (): Promise<any> => {
  const query = qs.stringify({
    populate: [
      "hero.image",
      "story",
      "storyItems.image",
      "mission",
      "explore.items.image",
      // "exploreItems.image",
      // "jsonRichText"
    ],
  });
  const serverRes = await fetch(`${SERVER_API_URL}/about-page?${query}`);
  const { data } = await serverRes.json();

  return data.attributes;
};
