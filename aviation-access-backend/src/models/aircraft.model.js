const sql = require("./db.js");

const Aircraft = function (aircraft) {
  this.id_aircraft = aircraft.id_aircraft;
  this.imagen_url = aircraft.imagen_url;
  this.descripcion = aircraft.descripcion;
  this.fabricante = aircraft.fabricante;
  this.modelo = aircraft.modelo;
  this.modernidad = aircraft.modernidad;
};

Aircraft.create = (newAircraft, result) => {
  sql.query("INSERT INTO aircraft SET ?", newAircraft, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created aircraft: ", { id: res.insertId, ...newAircraft });
    result(null, { id: res.insertId, ...newAircraft });
  });
};

Aircraft.findById = (id, result) => {
  sql.query(`SELECT * FROM aircraft WHERE id_aircraft = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found aircraft: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Aircraft.getAll = (result) => {
  let query = "SELECT * FROM aircraft";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("aircrafts: ", res);
    result(null, res);
  });
};

Aircraft.remove = (id, result) => {
  sql.query("DELETE FROM aircraft WHERE Id_aircraft = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted aircraft with id: ", id);
    result(null, res);
  });
};

Aircraft.update = (info, result) => {
  sql.query(
    "UPDATE aircraft SET Descripcion = ? Where Id_Aircraft = ?",
    [info.descripcion, info.id_aircraft],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("aircraft  updated: ", res);
      result(null, res);
    }
  );
};

Aircraft.findSome = (findSelection, result) => {
  sql.query(
    "SELECT * FROM aircraft WHERE Modelo LIKE '%" +
      findSelection.modelo +
      "%' OR Fabricante LIKE '%" +
      findSelection.fabricante +
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

module.exports = Aircraft;
