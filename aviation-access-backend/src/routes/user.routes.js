module.exports = (app) => {
  const usuarios = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new Usuario ...
  router.post("/register", usuarios.create);

  // Login Usuario ...
  router.post("/login", usuarios.login);

  router.delete("/:id", usuarios.delete);

  // Retrieve all usuarios
  router.get("/findAll", usuarios.findAll);

  app.use("/api/user", router);
};
