import express from "express";
import morgan from "morgan";

import infoServicesRoutes from "./routes/InfoServices.routes";

const app = express();

app.set("port",8000);

/*Milddwares*/
app.use(morgan("dev"));
app.use(express.json());

/* Root Endpoint */
app.get('/', (req, res)=>{
    res.send('Api serviciospsicologicos by Anahi Garcia');
});

app.use("/api-restful/infoServices",infoServicesRoutes);



export default app;