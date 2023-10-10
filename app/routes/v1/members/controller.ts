import service from "./service.js";
import users from "../users/service.js";
import communities from "../communities/service.js";
import { transaction, generateAccess } from "../../../utils/index.js";
import { startSession, ClientSession } from "mongoose";
import { Request, Response } from "express";

const getAll = async (_req: Request, _res: Response) => {
  const data = await service.getAll();
  _res.send({
    data,
    status: "success",
    message: "Get member success",
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
    message: "Get member success",
    meta: {
      access: generateAccess({}),
    },
  });
};

const add = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();
  const { user, community } = _req.body;
  _res.send(
    await transaction(
      session,
      async () => {
        await users.update(
          { _id: user },
          { $addToSet: { communityMember: community } },
          session
        );

        await communities.update(
          { _id: community },
          { $addToSet: { members: user } },
          session
        );
        return await service.add(_req.body, session);
      },
      "Create member"
    )
  );
};

const update = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();
  const { id } = _req.params;
  const { date, ...res } = _req.body;

  _res.send(
    await transaction(
      session,
      async () => {
        return await service.update(
          { _id: id },
          { date: new Date(date), ...res },
          session
        );
      },
      "Update member"
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
      "Delete member"
    )
  );
};

export { getAll, getById, add, update, removeOne };
