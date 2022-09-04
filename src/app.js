import express from "express";
import morgan from "morgan";
import severless from "serverless-http";

import infoServicesRoutes from "./routes/InfoServices.routes";

const app = express();

app.set('port',8000);

/*Milddwares*/
app.use(morgan("dev"));
app.use(express.json());




app.use("/api-restful/infoServices",infoServicesRoutes);



export default app;
module.exports.handlers= severless(app);