import { DataTypes } from "sequelize";
import DB from "../dbconn.js";

const CardType = DB.define("CardType", {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
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
