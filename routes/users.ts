import { Router } from "express";
const router = Router();
import { getUsers, getUserByID } from "../controllers/users";

router.route("/").get(getUsers);

router.route("/:id").get(getUserByID);

export default router;
