const sql = require("./db.js");

const Users = function (users) {
  this.id_user = users.id_user;
  this.username = users.username;
  this.password = users.password;
  this.fullname = users.fullname;
  this.lastinit = users.lastinit;
};

class validationError extends Error {
  constructor(message) {
    super(message), (this.name = "validationError");
  }
}

Users.create = (newUsuario, result) => {
  sql.query("INSERT INTO users SET ?", newUsuario, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUsuario });
    result(null, { id: res.insertId, ...newUsuario });
  });
};

// Usuario findOne
Users.findOne = (login, result) => {
  sql.query(
    "SELECT * FROM users WHERE username = ? and password = ?",
    [login.username, login.password],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      //update last_login
      if (res[0]) {
        sql.query(
          "UPDATE users SET lastinit = ? WHERE Id_user = ?",
          [new Date(), res[0].Id_user],
          (err, resUpdate) => {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
            console.log("usuarios: ", res[0]);
            // console.log("updated user: ", { id: id_usuario, ...login });
            result(null, res[0]);
          }
        );
      } else {
        result(new validationError("Usuario incorrecto "), null);
        return;
      }
    }
  );
};

Users.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE Id_user = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found user with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

Users.getAll = (result) => {
  let query = "SELECT * FROM users";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuarios: ", res);
    result(null, res);
  });
};

module.exports = Users;
