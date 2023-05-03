import DB from "../dbconn.js";
import { DataTypes } from "sequelize";

const SummonType = DB.define("Summon_Type", {
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
