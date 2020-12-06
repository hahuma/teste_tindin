const Class = require("../entities/Class")

class MongoDBUpdateClassRepository  {
  
  async update(data){
    const  updatedClass = await Class.findOneAndUpdate({ video: data.video_url }, data, {
        omitUndefined: true,
        new: true
    })
    
    return updatedClass
  }
  
  async validate(video_url){
    const hasClass = await Class.findOne(video_url)
    if(hasClass) return true
    
    return false
  }
}

module.exports = MongoDBUpdateClassRepository