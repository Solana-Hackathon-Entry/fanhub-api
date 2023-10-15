import { Router } from "express";
import { image, metadata, mint } from "./controller.js";

const router = Router();
router.route("/image").post(image);
router.route("/metadata").post(metadata);
router.route("/").post(mint);

export default router;
