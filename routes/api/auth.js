const express = require("express");
const ctrl = require("../../controllers/auth");
const { tryCatchWrapper } = require("../../utils");
const { validateBody } = require("../../middelwares");
const schema = require("../../schemas/");
const router = express.Router();

router.post(
  "/registration",
  validateBody(schema.registrationSchema),
  tryCatchWrapper(ctrl.registration)
);
router.post(
  "/login",
  validateBody(schema.loginSchema),
  tryCatchWrapper(ctrl.login)
);

module.exports = router;
