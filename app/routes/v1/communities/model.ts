import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { MODEL } from "../../../types";

const option = {
  discriminatorKey: "__t",
  timestamps: true,
};

const schema = new Schema<MODEL.ICommunityModel>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    users: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: RESOURCE.USERS.DEFAULT,
        },
      ],
      default: [],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export default model(RESOURCE.COMMUNITIES, schema);
