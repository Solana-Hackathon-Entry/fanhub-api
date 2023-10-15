import { generateAccess } from "../../../utils/index.js";
import { Request, Response } from "express";
import { createNFT, uploadFile, uploadMetadata } from "../../../web3";

const image = async (_req: Request, _res: Response) => {
  const { image } = _req.body;
  const data = await uploadFile(image ?? "");
  _res.send({
    data: [data],
    status: "success",
    message: "Upload Image to metaplex success",
    meta: {
      access: generateAccess({}),
    },
  });
};

const metadata = async (_req: Request, _res: Response) => {
  const { image, ...res } = _req.body;

  const data = await uploadMetadata(res, image);

  _res.send({
    data: [data],
    status: "success",
    message: "Upload metadata to metaplex success",
    meta: {
      access: generateAccess({}),
    },
  });
};

const mint = async (_req: Request, _res: Response) => {
  const { name, metadata } = _req.body;
  const data = await createNFT(metadata, name);

  _res.send({
    data: [data],
    status: "success",
    message: "Mint success",
    meta: {
      access: generateAccess({}),
    },
  });
};

export { image, metadata, mint };
