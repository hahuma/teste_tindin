const CreateClass = require("./CreateClassController")
const UpdateClass = require("./UpdateClassController")
const DeleteClass = require("./DeleteClassController")
const ListClasses = require("./ListClassesController")
const ListOneClass = require("./ListOneClassController")

const CreateComment = require("./CreateCommentController")
const ListComments = require("./ListCommentsController")
const DeleteComment = require("./DeleteCommentController")

module.exports = {
  CreateClass,
  UpdateClass,
  DeleteClass,
  ListClasses,
  ListOneClass,
  CreateComment,
  ListComments,
  DeleteComment
}