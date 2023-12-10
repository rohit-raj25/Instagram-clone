const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instaclone");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  passport: String,
  profileImage: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "posts" }],
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
