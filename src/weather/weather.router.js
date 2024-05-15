const router = require("express").Router({ mergeParams: true });
const controller = require("./weather.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:weatherStatusId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
 .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;