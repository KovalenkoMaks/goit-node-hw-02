const express = require("express");
const ctrl = require("../../controllers/contacts");
const { tryCatchWrapper } = require("../../utils");
const { validateBody, validateId } = require("../../middelwares");
const schema = require("../../schemas/");
const router = express.Router();

router.get("/", tryCatchWrapper(ctrl.getAll));

router.get("/:contactId", validateId, tryCatchWrapper(ctrl.getById));

router.post("/", validateBody(schema.addSchema), tryCatchWrapper(ctrl.add));

router.delete("/:contactId", validateId, tryCatchWrapper(ctrl.remove));

router.put(
  "/:contactId",
  validateId,
  validateBody(schema.updateSchema),
  tryCatchWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  validateId,
  validateBody(schema.favoriteSchema),
  tryCatchWrapper(ctrl.updateFavorite)
);

module.exports = router;
