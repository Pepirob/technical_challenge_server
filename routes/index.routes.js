const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const phonesRouter = require("./phones.routes");
router.use("/phones", phonesRouter);

module.exports = router;
