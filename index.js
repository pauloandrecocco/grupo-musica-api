import "dotenv/config";
import express from "express";
import winston from "winston";
import cors from "cors";

const { combine, timestamp, label, printf } = winston.format;
const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console({
      // format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: "logs/grupo-musica-api.log",
      // format: winston.format.simple(),
    }),
  ],
  format: combine(label({ label: "grupo-musica-api" }), timestamp(), logFormat),
});

const app = express();
app.use(express.json());
app.use(cors());

// TODO: implementar rotas

app.listen(3000, async () => {
  logger.info("API rodando na porta 3000.");
});
