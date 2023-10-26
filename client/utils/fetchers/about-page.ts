const qs = require("qs");

import { SERVER_API_URL } from "../constants";

export const aboutDataFetcher = async (): Promise<any> => {
  const query = qs.stringify({
    populate: [
      "title",
      "hero.image",
      "story",
      "storyItems.image",
      "mission",
      "explore.items.image",
    ],
  });
  const serverRes = await fetch(`${SERVER_API_URL}/about-page?${query}`);
  const { data }= await serverRes.json();

  return data.attributes;
}
