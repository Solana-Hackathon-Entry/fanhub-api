import service from "./service.js";
import { transaction, generateAccess } from "../../../utils/index.js";
import { startSession, ClientSession } from "mongoose";
import { Request, Response } from "express";

const getAll = async (_req: Request, _res: Response) => {
  const data = await service.getAll();
  _res.send({
    data,
    status: "success",
    message: "Get featureds success",
    meta: {
      access: generateAccess({}),
    },
  });
};

const getById = async (_req: Request, _res: Response) => {
  const { id } = _req.params;
  const data = await service.getById(id);
  _res.send({
    data: [data],
    status: "success",
    message: "Get featureds success",
    meta: {
      access: generateAccess({}),
    },
  });
};

const add = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();
  const { start, end, ...res } = _req.body;
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.add(
          { start: new Date(start), end: new Date(end), ...res },
          session
        );
      },
      "Create featureds"
    )
  );
};

const update = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();
  const { id } = _req.params;

  _res.send(
    await transaction(
      session,
      async () => {
        return await service.update({ _id: id }, _req.body, session);
      },
      "Update featureds"
    )
  );
};

const removeOne = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();

  const { id } = _req.params;
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.removeOne({ _id: id }, session);
      },
      "Delete featureds"
    )
  );
};

export { getAll, getById, add, update, removeOne };
