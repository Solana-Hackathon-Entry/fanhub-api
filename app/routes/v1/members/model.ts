import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { MODEL } from "../../../types";

const option = {
  timestamps: true,
};

const schema = new Schema<MODEL.IMembersModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: RESOURCE.USERS.DEFAULT,
    },
    community: {
      type: Schema.Types.ObjectId,
      ref: RESOURCE.COMMUNITIES,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export default model(RESOURCE.MEMBERS, schema);
