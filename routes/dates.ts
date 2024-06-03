import { Router } from "express";
const router = Router();
import { getDates, getDateByID, addDate } from "../controllers/dates";

router.route("/").get(getDates).post(addDate);

router.route("/:id").get(getDateByID);

export default router;
