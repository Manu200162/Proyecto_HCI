const sql = require("./db.js");

const Flight = function (flight) {
  this.id_flight = flight.id_flight;
  this.id_aircraft = flight.id_aircraft;
  this.nombre = flight.nombre;
  this.aerolinea = flight.aerolinea;
  this.paises = flight.paises;
  this.nacional = flight.nacional;
  this.origen = flight.origen;
  this.destino = flight.destino;
  this.tiempo_vuelo = flight.tiempo_vuelo;
  this.img_vuelo = flight.img_vuelo;
  this.aeronave = flight.aeronave;
};

Flight.create = (newflight, result) => {
  sql.query("INSERT INTO flight SET ?", newflight, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created flight: ", { id: res.insertId, ...newflight });
    result(null, { id: res.insertId, ...newflight });
  });
};

Flight.findById = (id, result) => {
  sql.query(`SELECT * FROM flight WHERE id_flight = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found flight: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Flight.getAll = (result) => {
  let query = "SELECT * FROM flight";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("flights: ", res);
    result(null, res);
  });
};

Flight.remove = (id, result) => {
  sql.query("DELETE FROM flight WHERE Id_flight = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted flight with id: ", id);
    result(null, res);
  });
};

Flight.update = (info, result) => {
  sql.query(
    "UPDATE flight SET Id_aircraft = ? , Aeronave = ?, Img_vuelo = ? Where Id_flight = ?",
    [info.id_aircraft, info.aeronave, info.img_vuelo, info.id_flight],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("flight updated: ", res);
      result(null, res);
    }
  );
};

Flight.findSome = (findSelection, result) => {
  sql.query(
    "SELECT * FROM flight WHERE Nombre LIKE '%" +
      findSelection.nombre +
      "%' OR Aerolinea LIKE '%" +
      findSelection.aerolinea +
      "%'  OR Aeronave LIKE '%" +
      findSelection.aeronave +
      "%'",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("error: ", res);
      result(null, res);
    }
  );
};

module.exports = Flight;
