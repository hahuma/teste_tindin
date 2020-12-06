const Comment = require("../entities/Comment")

class MongoDBCreateCommentRepository  {
  
  async create(data){
    const  newComment = await Comment.create(data)
    
    return newComment
  }

}

module.exports = MongoDBCreateCommentRepository