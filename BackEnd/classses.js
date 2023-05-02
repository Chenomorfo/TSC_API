class Card {
  Id = Number();
  CardType = String();
  Deck_Cost = Number();

  //Data
  Name = String();
  Description = String();
  URL_IMAGE = String();
}
class Monster extends Card {
  //Stats
  Level = Number();
  Atack = Number();
  Defense = Number();

  //Data
  MonsterType = String();
  MonsterRace = String();
  Summon = String();
}

class Spell extends Card {
  Effect = Function;
}

class Player {
  Deck = new Array(40);
  Deck_Capacity = Number;

  Duelist_Level = Number;
  Life_Points = 8000;

  Turn = Boolean;
}

module.exports = { Monster, Spell };
