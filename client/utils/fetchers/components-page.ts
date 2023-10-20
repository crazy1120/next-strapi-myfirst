const qs = require("qs");
import { SERVER_API_URL } from "../constants";

export const dataFetcher = async (): Promise<any> => {
  const query = qs.stringify({
    populate: [
      "white_camera_only.mobile_image",
      "white_camera_only.laptop_image",
      "white_hat_girl.mobile_image",
      "white_hat_girl.laptop_image",
      "purple_camera_only.mobile_image",
      "purple_camera_only.laptop_image",
      "purple_hand_camera.mobile_image",
      "purple_hand_camera.laptop_image",
    ],
  });
  const serverRes = await fetch(`${SERVER_API_URL}/components-page?${query}`);
  const { data } = await serverRes.json();
  return data.attributes;
};
