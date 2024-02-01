import { Reservas } from "../models/reservasSchema";
import { Response, Request } from "express";

const sendReserva = async (req: Request, res: Response) => {
  const { nome, sobrenome, email, phone, date, time } = req.body;

  if (!nome || !sobrenome || !email! || !phone || !date || !time) {
    return res.json({ success: false, message: "Preencha todos os campos" });
  }

  try {
    await Reservas.create({ nome, sobrenome, email, phone, date, time });
    return res
      .status(201)
      .json({ success: true, message: "Reserva feita com sucesso" });
  } catch (error: any) {
    const validationErrors = Object.values(error.errors).map(
      (err: any) => err.message
    );
    return res
      .status(400)
      .json({ success: false, message: [validationErrors] });
  }
};

export default sendReserva;
