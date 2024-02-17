const router = require('express').Router();
const serviceController = require('../controllers/ServiceController')


router.post("/service",serviceController.createService)
router.get("/service",serviceController.getAllServices)
router.get("/service/:id",serviceController.getServiceById)
router.delete("/service/:id",serviceController.deleteService)
router.put("/service/:id",serviceController.updateService)


module.exports = router


