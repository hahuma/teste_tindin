const CreateClass = require('./CreateClassUseCase');
const ListClasses = require('./ListClassesUseCase');
const DeleteClass = require('./DeleteClassUseCase');
const UpdateClass = require('./UpdateClassUseCase');
const ListOneClass = require('./ListOneClassUseCase');
const CreateComment = require('./CreateCommentUseCase');
const ListComments = require('./ListCommentsUseCase');
const DeleteComment = require('./DeleteCommentUseCase');

module.exports = {
  CreateClass,
  UpdateClass,
  DeleteClass,
  ListClasses,
  ListOneClass,
  CreateComment,
  ListComments,
  DeleteComment,
};
