import model from "./model.js";

const getAll = async () => {
  return await model.find({ deleted: false });
};

const add = async (_body: any, session: any) => {
  return await model.create([_body], { session });
};

const update = async (filter: any, _body: any, session: any) => {
  return await model.findOneAndUpdate(filter, _body, { new: true, session });
};

const removeOne = async (filter: any, session: any) => {
  return await model.findOneAndUpdate(
    filter,
    { deleted: true },
    { new: true, session }
  );
};

const getByEmail = async (email: any) => {
  return await model.findOne({ email, deleted: false });
};

export default { getAll, add, update, removeOne, getByEmail };
