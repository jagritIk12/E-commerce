const router = require('express').Router();
const controller = require("../controller/action")
const middleware = require("../middleware/mid")

// all routers url
router.get("/signup",controller.signup);
router.get("/login/:email",middleware.Validation,controller.login);
router.get("/logout",controller.logout);
router.get("/service",middleware.token2,controller.service)
router.get("/greed",middleware.Validation,controller.greet)

// exporting a router instance
module.exports = router