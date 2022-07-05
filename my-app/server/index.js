import express from "express";
import cors from "cors";
import dataRoutes from './routes/index.js';
const app = express();

app.use(cors());
app.use('/data',dataRoutes);

const PORT = 8000; 

app.listen(PORT, () => console.log("server listening on port " + PORT));
