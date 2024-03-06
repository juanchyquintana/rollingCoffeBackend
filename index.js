import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

app.set("port", process.env.PORT || 2504);
app.listen(app.get("port"), () => {
  console.log(`El Backend está funcionando en el puerto ${app.get("port")}`);
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/nuevo", (req, res) => {
  console.log("alguien solicito algo");

  res.send("Qué queres pelear?");
});
