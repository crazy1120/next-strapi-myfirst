// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest as Req, NextApiResponse as Res } from "next";

type DeviceType = { deviceType: string };

const deviceHandler = (req: Req, res: Res<DeviceType>): void => {
  let deviceType: string = "mobile";
  const setDeviceType = (windowWidth: number): void => {
    deviceType =
      windowWidth <= 640 ? "mobile" : windowWidth <= 1024 ? "tablet" : "laptop";
  };

  // setDeviceType(req.params.width);
  res.status(200).json({ deviceType });
};

export default deviceHandler;
