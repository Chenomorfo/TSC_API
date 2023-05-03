import { Router } from "express";

import SummonData from "../localData/Summon.json";
const router = Router();

router.get("/default/summons", (req, res) => {
  let arr = [];
  SummonData.forEach(async (summon) => {
    const newSummon = await SummonType.build({
      Name: summon.name,
      Description: summon.description,
    });
    console.log(newSummon);
  });
  res.send("Summon Types created");
});

export default router;
