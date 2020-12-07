const { Schema, model } = require('mongoose');
const pagination = require('../helpers/pagination');

const CommentSchema = new Schema(
  {
    id_class: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Class',
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

CommentSchema.statics = {
  pagination,
};

module.exports = model('Comment', CommentSchema);
