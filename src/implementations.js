const mongodb = require("./repositories/mongodbExports")
const Controllers = require("./controllers")
const UseCases = require("./useCases")

const createClassUseCase = new UseCases.CreateClass(mongodb.createClass)
const updateClassUseCase = new UseCases.UpdateClass(mongodb.updateClass)
const deleteClassUseCase = new UseCases.DeleteClass(mongodb.deleteClass)
const listClassesUseCase = new UseCases.ListClasses(mongodb.listClasses)
const listOneClassUseCase = new UseCases.ListOneClass(mongodb.listOneClass)
const createCommentUseCase = new UseCases.CreateComment(mongodb.createComment)
const listCommentsUseCase = new UseCases.ListComments(mongodb.listComments)
const deleteCommentUseCase = new UseCases.DeleteComment(mongodb.deleteComment)
  
  
  
  const createClass = new Controllers.createClass(createClassUseCase)
  const updateClass = new Controllers.UpdateClass(updateClassUseCase)
  const listClasses = new Controllers.ListClasses(listClassesUseCase)
  const listOneClass = new Controllers.ListOneClass(listOneClassUseCase)
  const deleteClass = new Controllers.DeleteClass(deleteClassUseCase)
  const createComment = new Controllers.CreateComment(createCommentUseCase)
  const listComments = new Controllers.ListComments(listCommentsUseCase)
  const deleteComment = new Controllers.DeleteComment(DeleteCommentUseCase)
  
  
  
  module.exports = {
    createClass,
    updateClass,
    listClasses,
    listOneClass,
    deleteClass,
    createComment,
    listComments,
    deleteComment
  };