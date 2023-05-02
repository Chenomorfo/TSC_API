import { DataTypes } from "sequelize";
import DB from "../dbconn.js";

const SummonType = DB.define("SummonType", {
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

export default SummonType;
