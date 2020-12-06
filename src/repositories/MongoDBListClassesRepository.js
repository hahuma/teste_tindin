const Class = require("../entities/Class")
const Comment = require("../entities/Class")

class MongoDBListClassesRepository  {
  
  async list(page){
    const count = await Class.estimatedDocumentCount()
    const paginatedClasses = await Class.pagination(page)
    
    const classes = paginatedClasses.map(async (singleClass) => {
        const commentData = await this._getLastThreeComments(singleClass._id)
        
        return {
          ...singleClass,
          last_comment: commentData.comment,
          last_comment_date: commentData.createdAt
        }
    })
    return {
      classes,
      count
    }
  }
  
  async _getLastComment(_id) {
    return await Comment.find(_id).sort({ 'createdAt': -1 })[0]
  }
  
  
}

module.exports = MongoDBListClassesRepository