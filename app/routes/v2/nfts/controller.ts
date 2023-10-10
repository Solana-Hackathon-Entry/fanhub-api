import { generateAccess } from "../../../utils/index.js";
import { Request, Response } from "express";
import { getAllNFTS, createNFT } from "../../../web3";

const getAll = async (_req: Request, _res: Response) => {
  const data = await getAllNFTS();
  _res.send({
    data: data,
    status: "success",
    message: "Create nft success",
    meta: {
      access: generateAccess({}),
    },
  });
};

const add = async (_req: Request, _res: Response) => {
  const { imagePath, ...res } = _req.body;
  const address = await createNFT(res, imagePath);
  _res.send({
    data: [{ address }],
    status: "success",
    message: "Create nft success",
    meta: {
      access: generateAccess({}),
    },
  });
};

export { getAll, add };
