import { Router } from "express";
import { add, getAll } from "./controller.js";

const router = Router();
router.route("/").get(getAll).post(add);

export default router;
