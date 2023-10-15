import { generateAccess, transaction } from "../../../utils/index.js";
import { Request, Response } from "express";
import { createNFT, uploadFile, uploadMetadata } from "../../../web3";
import nfts from "../nfts/service.js";
import { ClientSession, startSession } from "mongoose";

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
  const session: ClientSession = await startSession();
  const { name, metadata } = _req.body;
  _res.send(
    await transaction(
      session,
      async () => {
        const mint = await createNFT(metadata, name);
        return await nfts.add({ mint }, session);
      },
      "Create nft"
    )
  );
};

export { image, metadata, mint };
