import { Sequelize } from "sequelize";

const OnlyServer = (dbName = "") => {
  const server = new Sequelize(dbName, "root", "", {
    host: "localhost",
    dialect: "mysql",
  });
  return server;
};

let DB_CONN = OnlyServer("TSC_API");

try {
  await DB_CONN.sync();
  console.log("DB CONNECTED");
} catch (error) {
  //Host Without DB
  DB_CONN = OnlyServer();
  await DB_CONN.query("CREATE DATABASE TSC_API");
  await DB_CONN.close();

  //DB Conn
  DB_CONN = OnlyServer("TSC_API");
  console.log("DB CONNECTED");
}

export default DB_CONN;
