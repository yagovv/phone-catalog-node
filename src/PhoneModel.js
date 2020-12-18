const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const phoneSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    screen: { type: String, required: true },
    ram: { type: String, required: true },
    manufacturer: { type: String, required: true },
  },
  { versionKey: false }
);

const model = mongoose.model('Phone', phoneSchema);

module.exports = model;
