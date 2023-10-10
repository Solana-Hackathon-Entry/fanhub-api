import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { MODEL } from "../../../types";

const option = {
  timestamps: true,
};

const schema = new Schema<MODEL.INftModel>(
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
    symbol: {
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

export default model(RESOURCE.NFTS, schema);
