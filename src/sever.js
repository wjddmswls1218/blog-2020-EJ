import express from "express";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();

const app = express();
const PORT = 7001;

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.listen(PORT, () => {
  console.log(`${PORT} SEVER START`);
});
