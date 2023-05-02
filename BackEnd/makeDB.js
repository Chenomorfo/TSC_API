const readline = require("readline");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");
// Configuration
cloudinary.config({
  cloud_name: "drzf6ru3m",
  api_key: "538528826395737",
  api_secret: "NqInF54z8fTBXPfxNHwz2dHILKU",
});
const ID_Base = "";
const path = require("path");

const { Monster, Spell } = require("./classses");

function list_resources(results, next_cursor = null) {
  cloudinary.api.resources(
    {
      resource_type: "image",
      type: "upload",
      prefix: "TSC/",
      max_results: 500, //can be any value up to 500
      next_cursor: next_cursor,
    },
    function (err, res) {
      res.resources.forEach(function (resource) {
        //Do some processing or checks
        results.push({ url: resource.secure_url });
      });

      if (res.next_cursor) {
        list_resources(results, res.next_cursor);
      } else {
        console.log("Done", results);
        fs.writeFileSync(`./CardPictures.json`, JSON.stringify(results), {
          encoding: "utf-8",
          flag: "w",
        });
      }
    }
  );
}

/* let results = [];
list_resources(results);
 */

//LocalFiles

const file = readline.createInterface(fs.createReadStream("../yugioh.csv"));
const CardPics = require("./CardPictures.json");
//console.log(CardPics[0].url)
let MonsterList = [];
let SpellList = [];
file.on("line", async (line) => {
  let data = line.split("@");

  if (!data[4].length > 0) {
    const Card = new Spell();
    Card.Id = parseInt(data[0]);
    Card.Name = data[1];
    Card.Deck_Cost = parseInt(data[2]);
    Card.CardType = data[3];
    Card.Description = data[11];
    Card.URL_IMAGE = CardPics[Card.Id - 1].url;
    SpellList.push(Card);
  } else {
    const Card = new Monster();
    Card.Id = parseInt(data[0]);
    Card.Name = data[1];
    Card.Deck_Cost = parseInt(data[2]);
    Card.CardType = data[3];
    Card.Description = data[11];
    Card.URL_IMAGE = CardPics[Card.Id - 1].url;
    Card.MonsterType = data[4];
    Card.MonsterRace = data[5];
    Card.Summon = data[6];
    Card.Atack = parseInt(data[8]);
    Card.Defense = parseInt(data[9]);
    Card.Level = parseInt(data[7]);

    MonsterList.push(Card);
  }
});

file.on("close", () => {
  fs.writeFileSync(`./MonsterList.json`, JSON.stringify(MonsterList), {
    encoding: "utf-8",
    flag: "w",
  });
  fs.writeFileSync(`./SpellList.json`, JSON.stringify(SpellList), {
    encoding: "utf-8",
    flag: "w",
  });

  console.log("done");
});
