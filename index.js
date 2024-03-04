import express from "express";
const app = express();

app.set("port", process.env.PORT || 2504);
app.listen(app.get("port"), () => {
  console.log(`El Backend está funcionando en el puerto ${app.get("port")}`);
});
