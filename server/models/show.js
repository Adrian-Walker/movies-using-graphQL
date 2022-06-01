const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
  name: String,
  genre: String,
  directorId: String,
});

module.exports = mongoose.model("Show", showSchema);
