const express = require('express');
const PhoneModel = require('./PhoneModel');
const router = express.Router();

router
  .route('/')
  .get(async (_req, res) => {
    try {
      const data = await PhoneModel.find({});
      return res.status(200).send({ data });
    } catch (error) {
      return res.status(403).send({ error });
    }
  })
  .post(async (req, res) => {
    try {
      const newPhone = new PhoneModel(req.body);
      await newPhone.save();
      return res.status(200).send({ id: newPhone.id });
    } catch (error) {
      return res.status(403).send({ error });
    }
  })
  .put(async (req, res) => {
    try {
      const {
        id,
        name,
        price,
        manufacturer,
        description,
        ram,
        screen,
      } = req.body;
      await PhoneModel.findByIdAndUpdate(id, {
        name,
        price,
        manufacturer,
        description,
        ram,
        screen,
      });
      return res.status(200).send();
    } catch (error) {
      return res.status(403).send({ error });
    }
  })
  .delete(async (req, res) => {
    try {
      await PhoneModel.findByIdAndDelete(req.body.id);
      return res.status(200).send();
    } catch (error) {
      return res.status(403).send({ error });
    }
  });

router.route('/:id').get(async (_req, res) => {
  const { id } = req.params;
  try {
    const data = await PhoneModel.findById({ id });
    return res.status(200).send({ data });
  } catch (error) {
    return res.status(403).send({ error });
  }
});

module.exports = router;
