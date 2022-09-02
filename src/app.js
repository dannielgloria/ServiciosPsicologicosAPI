import express from "express";
import morgan from "morgan";

import infoServicesRoutes from "./routes/InfoServices.routes";

const app = express();

app.set('port',8000);

/*Milddwares*/
app.use(morgan("dev"));
app.use(express.json());

/* Root Endpoint */
// app.get('/', function(request, response) {
//     var result = 'App is running'
//     response.send(result);
// }).listen(app.get('port'), function() {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });


app.use("/api-restful/infoServices",infoServicesRoutes);



export default app;