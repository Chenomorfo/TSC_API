import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Cards");
});

export default router;
