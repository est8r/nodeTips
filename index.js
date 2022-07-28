import express from "express";
import db from "./src/database/db.js";
import tips from "./src/controller/controller.js";

const app = express();

app.use(express.json());
tips(aplication, db);

const porta = 3000;

app.listen(porta, () => {
  console.log(`http://localhost:${porta}`);
});
