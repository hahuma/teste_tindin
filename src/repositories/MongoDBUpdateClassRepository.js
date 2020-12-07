const Class = require('../entities/Class');

class MongoDBUpdateClassRepository {
  async update(data) {
    const updatedClass = await Class.findOneAndUpdate(
      { video: data.video },
      data,
      {
        omitUndefined: true,
        new: true,
        useFindAndModify: false,
      }
    );

    return updatedClass;
  }

  async validate(video) {
    const hasClass = await Class.findOne(video);
    if (hasClass) return true;

    return false;
  }
}

module.exports = MongoDBUpdateClassRepository;
