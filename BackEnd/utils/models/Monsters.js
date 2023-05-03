import { DataTypes } from "sequelize";
import DB from "../dbconn.js";

const Monster = DB.define("Monster", {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Card_Type: DataTypes.INTEGER,
  Monster_Type: DataTypes.INTEGER,
  Summon_Type: DataTypes.INTEGER,
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Deck_Cost: DataTypes.INTEGER,
  Level: DataTypes.INTEGER,
  Attack: DataTypes.INTEGER,
  Defense: DataTypes.INTEGER,
});


export default Monster;
