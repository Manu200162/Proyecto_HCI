const Aircraft = require("../models/aircraft.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const aircraft = new Aircraft({
    imagen_url: req.body.imagen_url,
    descripcion: req.body.descripcion,
    fabricante: req.body.fabricante,
    modelo: req.body.modelo,
    modernidad: req.body.modernidad,
  });

  Aircraft.create(aircraft, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the aircraft.",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Aircraft.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Aircraft with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Aircraft with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Aircraft.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving aircrafts.",
      });
    else res.send(data);
  });
};

exports.delete = (req, res) => {
  Aircraft.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Aircraft with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Aircraft with id " + req.params.id,
        });
      }
    } else if (data.index === 0) {
      res.status(500).send({
        message: "Could not delete Aircraft with id " + req.params.id,
      });
    } else res.send({ message: `Aircraft was deleted successfully!` });
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Aircraft.update(
    {
      descripcion: req.body.descripcion,
      id_aircraft: req.body.id_aircraft,
    },
    (err, data) => {
      if (err) {
        res.status(401).send({
          message:
            err.message || "Some error occurred while retrieving Aircraft.",
        });
      } else res.send(data);
    }
  );
};

exports.findSome = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty",
    });
  }

  const consult = new Aircraft({
    modelo: req.body.modelo,
    fabricante: req.body.fabricante,
  });

  Aircraft.findSome(consult, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while looking for Results.",
      });
    else res.send(data);
  });
};
