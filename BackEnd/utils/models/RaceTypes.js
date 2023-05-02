import { DataTypes } from "sequelize";
import DB from "../dbconn.js";

const RaceType = DB.define("RaceType", {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  URL: DataTypes.TEXT,
});

export default RaceType;
