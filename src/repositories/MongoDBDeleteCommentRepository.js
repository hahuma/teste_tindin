const Comment = require("../entities/Comment")

class MongoDBDeleteCommentRepository  {
  
  async findByIdAndDelete(id){
    await Comment.findByIdAndDelete({ _id: id })
    
    
  }
  
  async validate(id){
    const hasComment = await Comment.findOne({ _id: id })
    if(hasComment) return true
    
    return false
  }
}

module.exports = MongoDBDeleteCommentRepository