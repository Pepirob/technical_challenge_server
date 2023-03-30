const router = require("express").Router();
const Phone = require("../models/Phone.model");
const Phones = require("../models/Phone.model");

router.get("/", async (req, res, next) => {
  try {
    const allPhones = await Phones.find();

    res.status(200).json(allPhones);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const foundPhone = await Phone.find({ id });
    if (foundPhone.length === 0) {
      res.status(404).json({ errorMessage: "Currently unavailable" });
    } else {
      res.status(200).json(foundPhone);
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
