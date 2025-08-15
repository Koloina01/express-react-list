import express from "express";
import router from "./routes/AllCharacters.routes.js";
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use("/character", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
