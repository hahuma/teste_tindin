const Class = require("../entities/Class")
const Comment = require("../entities/Class")

class MongoDBListOneClassRepository  {
  
  async list(_id){

    const filteredClass = await Class.findById(_1)
    const commentData = await this._getLastThreeComments(filteredClass._id)


    const singleClass = {
      filteredClass,
      commentData
    }
    return singleClass
  }
  
  async _getLastThreeComment(_id) {
    return await Comment.find(_id).sort({ 'createdAt': -1 }).limit(3)
  }
  
  
}

module.exports = MongoDBListOneClassRepository;