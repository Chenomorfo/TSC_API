const cloudinary = require("cloudinary").v2;
const fs = require("fs");
// Configuration
cloudinary.config({
  cloud_name: "drzf6ru3m",
  api_key: "538528826395737",
  api_secret: "NqInF54z8fTBXPfxNHwz2dHILKU",
});

let imgs = fs.readdirSync("./images");

// Upload
function uploadImg(path = "") {
  cloudinary.uploader
    .upload(`./images/${path}`, {
      async: false,
      public_id: `TSC_${path.replace(".jpg", "")}`,
      folder: "TSC",
      timeout: 30000,
    })
    .then((data) => {
      console.log(`done: TSC_${path.replace(".jpg", "")}`);
      fs.rename(`./images/${path}`, `./imgsC/${path}`, (err) =>
        err ? console.log(err) : "Success"
      );
    })
    .catch((err) => {
      console.log(`Error with: TSC_${path.replace(".jpg", "")}`, err);
    });
}

for (let i = 0; i < imgs.length; i++) {
  uploadImg(imgs[i]);
}
/* const res = 

res
  .then((data) => {
    console.log("done");
  })
  .catch((err) => {
    console.log(err);
  }); */

// Generate
/* const url = cloudinary.url("olympic_flag", {
  width: 100,
  height: 150,
  Crop: "fill",
});

// The output url
console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
 */
