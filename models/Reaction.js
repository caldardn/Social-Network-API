const { Schema, Types } = require('mongoose');

const ReactionSchema = new Schema({
    // set custom id to avoid confusion with parent comment _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // use getter method to format timestamp
      get: time => dateFormat(time)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

module.exports = ReactionSchema;