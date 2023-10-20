const qs = require("qs");

import { DEV_SERVER_API_URL } from "../constants";

export const privacyPolicyDataFetcher = async (): Promise<any> => {
  const serverRes = await fetch(`${DEV_SERVER_API_URL}/privacy-policy-page?populate=*`);
  const { data }= await serverRes.json();

  return data.attributes;
}
