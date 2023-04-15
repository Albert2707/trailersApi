import { Router } from "express";
import {
  deleteTrailer,
  createTrailer,
  getTrailers,
  updateTrailer,
  getOneTrailer,
} from "../controllers/trailer.controller.js";

const router = Router();
router.get("/", getTrailers);
router.get("/:titulo", getOneTrailer);
router.post("/create", createTrailer);
router.put("/update", updateTrailer);
router.delete("/delete", deleteTrailer);

export default router;
