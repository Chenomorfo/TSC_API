const data = require("./SpellList.json");

const filterData = [];

data.forEach((item) => {
  filterData.push(item.CardType);
});

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

console.log(filterData.filter(onlyUnique));
