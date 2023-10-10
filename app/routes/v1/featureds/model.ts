import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { MODEL } from "../../../types";

const option = {
  timestamps: true,
};

const schema = new Schema<MODEL.IFeaturedModel>(
  {
    image: {
      type: String,
      required: true,
    },
    route: {
      type: String,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export default model(RESOURCE.FEATUREDS, schema);
