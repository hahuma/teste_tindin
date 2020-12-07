/* eslint-disable func-names */
const { Schema, model } = require('mongoose');
const pagination = require('../helpers/pagination');
const setDate = require('../helpers/setDate');

const ClassSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    video: { type: String, required: true, unique: true },
    data_init: {
      type: Number,
      required: true,
      match: [
        /[(20\d{2})][(\d{2})][(\d{2})]/,
        'Date must have YYYYMMDD format',
      ],
    },
    data_end: {
      type: Number,
      required: true,
      match: [
        /[(20\d{2})][(\d{2})][(\d{2})]{8}/,
        'Date must have YYYYMMDD format',
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    date_created: {
      type: Schema.Types.Mixed,
      default: setDate,
    },
    date_updated: {
      type: Schema.Types.Mixed,
      default: setDate,
    },
    total_comments: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: [String],
        select: false,
      },
    ],
    last_comment: {
      type: String,
      select: false,
      default: '',
    },
    last_comment_date: {
      type: Date,
      select: false,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

ClassSchema.pre(/Update/, function () {
  this._update.$set.date_updated = setDate();
});

ClassSchema.statics = {
  pagination,
};

module.exports = model('Class', ClassSchema);
