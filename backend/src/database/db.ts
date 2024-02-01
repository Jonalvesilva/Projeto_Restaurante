import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_CONNECT as string;

export const dbConnection = () => {
  mongoose
    .connect(url, { dbName: "Restaurant" })
    .then(() => {
      console.log("Conectado");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro durante a conexão. Erro: ${error}`);
    });
};
