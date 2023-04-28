module.exports = (app) => {
  const aircrafts = require("../controllers/aircraft.controller.js");

  var router = require("express").Router();

  router.post("/", aircrafts.create);

  router.get("/findAll", aircrafts.findAll);

  router.get("/:id", aircrafts.findOne);

  router.delete("/delete/:id", aircrafts.delete);

  router.put("/update", aircrafts.update);

  router.post("/findSelection", aircrafts.findSome);

  app.use("/api/aircrafts", router);
};
