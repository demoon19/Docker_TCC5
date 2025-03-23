import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("docker", "root", "", {
  host: "34.60.39.112",
  dialect: "mysql",
});

export default db;
