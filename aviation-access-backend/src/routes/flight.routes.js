module.exports = (app) => {
  const flights = require("../controllers/flight.controller.js");

  var router = require("express").Router();

  router.post("/", flights.create);

  router.get("/findAll", flights.findAll);

  router.get("/:id", flights.findOne);

  router.delete("/delete/:id", flights.delete);

  router.put("/update", flights.update);

  router.post("/findSelection", flights.findSome);

  app.use("/api/flights", router);
};
