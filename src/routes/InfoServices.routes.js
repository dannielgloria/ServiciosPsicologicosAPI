import { Router } from "express";
import { methods as infoServicesController } from "./../controllers/infoServices.controller"

const router = Router();

/* A router that is used to create the routes for the API. */
router.get("/", infoServicesController.getInfoServices); // GET http://localhost:8000/api-restful/infoServices/
router.get("/:idInstitucion", infoServicesController.getById); // GET http://localhost:8000/api-restful/infoServices/:idInstitucion
router.post("/", infoServicesController.addInfoService); // POST http://localhost:8000/api-restful/infoServices/
router.put("/:idInstitucion", infoServicesController.updateInfoService); // PUT http://localhost:8000/api-restful/infoServices/:idInstitucion
//router.patch("/:idInstitucion", infoServicesController.updateInfoService); // PATCH http://localhost:8000/api-restful/infoServices/:idInstitucion
router.delete("/:idInstitucion", infoServicesController.deleteInfoService);// DELETE http://localhost:8000/api-restful/infoServices/:idInstitucion


export default router;