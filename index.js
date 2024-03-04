import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

const app = express();

app.set("port", process.env.PORT || 2504);
app.listen(app.get("port"), () => {
  console.log(`El Backend está funcionando en el puerto ${app.get("port")}`);
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("alguien solicito algo");

  res.send('Qué queres pelear?')
});
