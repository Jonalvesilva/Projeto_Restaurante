import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "../src/database/db";
import ReservasRoute from "../src/routes/reservasRoute";

dotenv.config();

const app = express();
const port = process.env.PORT;
const origin = process.env.FRONT_END_URL;

app.use(
  cors({
    origin: [origin || true],
    credentials: true,
    methods: ["POST, GET, PUT, DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservas", ReservasRoute);

dbConnection();

app.listen(port, () => {
  console.log(`Servidor Rodando na port ${port}`);
});
