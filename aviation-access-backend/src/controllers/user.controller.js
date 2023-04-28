const User = require("../models/user.model.js");

// Create and Save a new Usuario
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Usuario
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
    lastinit: new Date(),
  });

  // Save Usuario in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuario.",
      });
    else res.send(data);
  });
};

// Login Usuario
exports.login = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Verificar si el usuario existe
  User.findOne(
    {
      username: req.body.username,
      password: req.body.password,
    },
    (err, data) => {
      if (err) {
        res.status(401).send({
          message:
            err.message || "Some error occurred while retrieving Usuario.",
        });
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  User.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Usuario with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Usuario with id " + req.params.id,
        });
      }
    } else res.send({ message: `Usuario was deleted successfully!` });
  });
};

// Retrieve all books from the database
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving usuarios.",
      });
    else res.send(data);
  });
};
