import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { MODEL } from "../../../types";

const option = {
  discriminatorKey: "__t",
  timestamps: true,
};

const schema = new Schema<MODEL.IUserModel>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export default model(RESOURCE.USERS.DEFAULT, schema);