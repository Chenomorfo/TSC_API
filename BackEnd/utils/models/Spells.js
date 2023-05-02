import { DataTypes } from "sequelize";
import DB from "../dbconn.js";

const Spell = DB.define("Spell", {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  Card_Type: DataTypes.INTEGER,
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Deck_Cost: DataTypes.INTEGER,
  URL: DataTypes.TEXT,
});

export default Spell;
