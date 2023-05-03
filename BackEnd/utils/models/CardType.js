import { DataTypes } from "sequelize";
import DB from "../dbconn.js";

const CardType = DB.define("Card_Type", {
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
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default CardType;
