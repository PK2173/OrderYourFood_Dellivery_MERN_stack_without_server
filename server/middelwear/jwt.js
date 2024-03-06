const jwt = require("jsonwebtoken");
const knex = require("../config/dbconnection");

const createToken = ({ user_id }) => {
  return jwt.sign(user_id, process.env.SECRATE_KEY || "praveennoijdfebw34232rrfge5gre");
};

const virifiToken = async (req, res, next) => {
  try {
    if (req.headers.seingtoken) {
      const token = req.headers.seingtoken;
      const tr = jwt.verify(token, process.env.SECRATE_KEY || "praveennoijdfebw34232rrfge5gre");
      const user = await knex("user").where({ user_id: tr });
      req.userData = user;
      next();
    } else {
      res.send("token has expaire");
    }
  } catch (error) {
    console.log(error);
    res.send("token has expaire");
  }
};

module.exports = { createToken, virifiToken };
