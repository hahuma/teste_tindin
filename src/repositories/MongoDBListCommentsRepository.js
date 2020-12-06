const Comment = require("../entities/Comment")

class MongoDBListCommentsRepository  {
  
  
  
  async list(page){
    const count = await Comment.estimatedDocumentCount()
    const comments = await Comment.pagination(page)
    
    return {
      comments,
      count
    }
  }
}

module.exports = MongoDBListCommentsRepository