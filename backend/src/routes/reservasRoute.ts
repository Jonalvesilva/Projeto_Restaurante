import express from "express";
import sendReserva from "../controller/reservasController";

const router = express.Router();

router.post("/send", sendReserva);

export default router;
