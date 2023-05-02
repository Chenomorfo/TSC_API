import { Sequelize } from "sequelize";

const DB_CONN = new Sequelize("TSC_API", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  await DB_CONN.authenticate();
  console.log("DB CONNECTED");
} catch (error) {
  console.log("ERROR: DATABASE NOT FOUND");
}

export default DB_CONN;
