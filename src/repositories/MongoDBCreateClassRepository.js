const Class = require("../entities/Class")

class MongoDBCreateClassRepository  {
  
  async create(data){
    const  newClass = await Class.create(data)
    
    return newClass
  }
  
  async validate(video_url){
    const isClassCreated = await Class.findOne(video_url)
    if(isClassCreated) return true
    
    return false
  }
}

module.exports = MongoDBCreateClassRepository