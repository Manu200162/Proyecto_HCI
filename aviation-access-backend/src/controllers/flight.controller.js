const Flight = require("../models/flight.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const flight = new Flight({
    id_aircraft: req.body.id_aircraft,
    nombre: req.body.nombre,
    aerolinea: req.body.aerolinea,
    paises: req.body.paises,
    nacional: req.body.nacional,
    origen: req.body.origen,
    destino: req.body.destino,
    tiempo_vuelo: req.body.tiempo_vuelo,
    img_vuelo: req.body.img_vuelo,
    aeronave: req.body.aeronave,
  });

  Flight.create(flight, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Flight.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Flight with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Flight with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Flight.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving flights.",
      });
    else res.send(data);
  });
};

exports.delete = (req, res) => {
  Flight.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Flight with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Flight with id " + req.params.id,
        });
      }
    } else res.send({ message: `Flight was deleted successfully!` });
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Flight.update(
    {
      id_aircraft: req.body.id_aircraft,
      aeronave: req.body.aeronave,
      id_flight: req.body.id_flight,
      img_vuelo: req.body.img_vuelo,
    },
    (err, data) => {
      if (err) {
        res.status(401).send({
          message:
            err.message || "Some error occurred while retrieving Flight.",
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

  const consult = new Flight({
    nombre: req.body.nombre,
    aerolinea: req.body.aerolinea,
    aeronave: req.body.aeronave,
  });

  Flight.findSome(consult, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while looking for Results.",
      });
    else res.send(data);
  });
};
