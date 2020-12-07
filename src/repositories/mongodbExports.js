const CreateClass = require('./MongoDBCreateClassRepository');
const ListClasses = require('./MongoDBListClassesRepository');
const DeleteClass = require('./MongoDBDeleteClassRepository');
const UpdateClass = require('./MongoDBUpdateClassRepository');
const ListOneClass = require('./MongoDBListOneClassRepository');

const CreateComment = require('./MongoDBCreateCommentRepository');
const ListComments = require('./MongoDBListCommentsRepository');
const DeleteComment = require('./MongoDBDeleteCommentRepository');

const createClass = new CreateClass();
const listClasses = new ListClasses();
const listOneClass = new ListOneClass();
const deleteClass = new DeleteClass();
const updateClass = new UpdateClass();
const deleteComment = new DeleteComment();
const createComment = new CreateComment();
const listComments = new ListComments();

module.exports = {
  createClass,
  listClasses,
  listOneClass,
  deleteClass,
  updateClass,
  deleteComment,
  createComment,
  listComments,
};
