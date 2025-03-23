import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tcc5", "root", "", {
  host: "34.72.93.57",
  dialect: "mysql",
});

export default db;
