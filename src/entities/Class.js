const { Schema, model } = require("mongoose")
const pagination = require("../helpers/pagination")

const ClassSchema = new Schema({
  name: { type:String, required: true },
  description: { type:String, required: true },
  video: { type:String, required: true },
  data_init: {
    type: Date,
    required: true,
    match: [/(20\d{2})(\d{2})(\d{2})/, "Date must have YYYYMMDD format"]
  },
  data_end: {
    type: Date,
    required: true,
    match: [/(20\d{2})(\d{2})(\d{2})/, "Date must have YYYYMMDD format"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
  
}, {
  timestamps: true
})

ClassSchema.statics = {
  pagination
}

const Class = model("Class", ClassSchema)

module.exports = new Class()