const express = require("express");
const ctrl = require("../../controllers/contacts");
const { tryCatchWrapper } = require("../../utils");
const {
  validateBody,
  validateId,
  authentication,
} = require("../../middelwares");
const schema = require("../../schemas/");
const router = express.Router();

router.get("/", authentication, tryCatchWrapper(ctrl.getAll));

router.get(
  "/:contactId",
  authentication,
  validateId,
  tryCatchWrapper(ctrl.getById)
);

router.post(
  "/",
  authentication,
  validateBody(schema.addSchema),
  tryCatchWrapper(ctrl.add)
);

router.delete(
  "/:contactId",
  authentication,
  validateId,
  tryCatchWrapper(ctrl.remove)
);

router.put(
  "/:contactId",
  authentication,
  validateId,
  validateBody(schema.updateSchema),
  tryCatchWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  authentication,
  validateId,
  validateBody(schema.favoriteSchema),
  tryCatchWrapper(ctrl.updateFavorite)
);

module.exports = router;
