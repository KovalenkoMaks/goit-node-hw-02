const express = require("express");
const ctrl = require("../../controllers/auth");
const { tryCatchWrapper } = require("../../utils");
const { validateBody, authentication, upload } = require("../../middelwares");
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
router.get("/current", authentication, tryCatchWrapper(ctrl.getCurrent));
router.post("/logout", authentication, tryCatchWrapper(ctrl.logout));
router.patch(
  "/",
  authentication,
  validateBody(schema.subscriptionSchema),
  tryCatchWrapper(ctrl.subscription)
);
router.patch(
  "/avatars",
  authentication,
  upload.single("avatar"),
  tryCatchWrapper(ctrl.updateAvatar)
);
module.exports = router;
