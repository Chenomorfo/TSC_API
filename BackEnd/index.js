import express from "express";
import cardsRoutes from "./routes/cards.js";

const app = express();

app.set("PORT", 3000);

//middleware

//routes
app.use("/cards", cardsRoutes);

app.listen(app.get("PORT"), () => {
  console.log("Server on port:", app.get("PORT"));
});
