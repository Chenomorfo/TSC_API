var fs = require("fs");
var path = require("path");
const dir = "./images";
var request = require("request");

let imgs = fs.readdirSync("./imgsC");

/* let imgs = fs.readdirSync(dir);

console.log(imgs); */

//const CardList = require("./CardList.json");

for (let i = 0; i < imgs.length; i++) {
  fs.rename(
    `./imgsC/${imgs[i]}`,
    `./images/${imgs[i].replace(".jpg", "").padStart(3, "0")}.jpg`,
    (err) => (err ? console.log(err) : "Success")
  );
}

/* var download = function (uri, filename, callback) {
  request.head(uri, async function (err, res, body) {
    console.log("content-type:", res.headers["content-type"]);
    console.log("content-length:", res.headers["content-length"]);

    await request(uri)
      .pipe(fs.createWriteStream(filename))
      .on("close", callback);
  });
};

for (let i = 0; i < CardList.length; i++) {
  download(
    CardList[i].Pic,
    `./images/${CardList[i].Id.padStart(3, "0")}.jpg`,
    function () {
      console.log("done");
    }
  );
} */

/*
download(
  "https://www.google.com/images/srpr/logo3w.png",
  "google.png",
  function () {
    console.log("done");
  }
);
 */
