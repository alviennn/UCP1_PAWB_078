import express from "express";
import bodyParser from 'body-parser';
import bibitRoute from "./routes/bibit.js";
import pupukRoute from "./routes/pupuk.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(express.json());

app.use(bodyParser.json());
app.listen(PORT, () =>
    console.log(`Server berjalan di port: http://localhost:${PORT}`)
);