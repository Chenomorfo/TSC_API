import Conn from "./utils/dbconn.js";

import CardTypes from "./utils/models/CardType.js";
import MonsterType from "./utils/models/MonsterType.js";
import Monsters from "./utils/models/Monsters.js";
import Spells from "./utils/models/Spells.js";
import RaceTypes from "./utils/models/RaceTypes.js";
import SummonTypes from "./utils/models/SummonTypes.js";

const DB = {};

DB.conn = Conn;
DB.cardTypes = CardTypes;
DB.monsterTypes = MonsterType;
DB.monsters = Monsters;
DB.spells = Spells;
DB.raceTypes = RaceTypes;
DB.summonTypes = SummonTypes;

await Conn.sync();

export default DB;
