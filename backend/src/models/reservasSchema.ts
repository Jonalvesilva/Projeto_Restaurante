import mongoose from "mongoose";
import validator from "validator";

const reservasSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    minLength: [3, "Nome deve conter 3 caracteres"],
    maxLength: [30, "Nome deve conter no maximo 30 caracteres"],
  },
  sobrenome: {
    type: String,
    required: true,
    minLength: [3, "Sobrenome deve conter 3 caracteres"],
    maxLength: [30, "Sobrenome deve conter no maximo 30 caracteres"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Digite um email válido"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Telefone deve conter 11 caracteres"],
    maxLength: [11, "Telefone deve conter no maximo 11 caracteres"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservas = mongoose.model("Reservas", reservasSchema);
