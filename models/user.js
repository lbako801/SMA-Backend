const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone_number: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  unique_id: {
    type: String,
    required: true,
    unique: true
  },
  profile_pic: {
    type: String,
    required: true
  },
  completed_prompts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prompt'
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  liked_posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prompt'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;