const Class = require('../entities/Class');

class MongoDBUpdateClassRepository {
  async update(data) {
    const updatedClass = await Class.findOneAndUpdate({ _id: data._id }, data, {
      omitUndefined: true,
      new: true,
      useFindAndModify: false,
    });

    return updatedClass;
  }

  async validate(_id) {
    const hasClass = await Class.findOne({ _id });
    if (hasClass) return true;

    return false;
  }
}

module.exports = MongoDBUpdateClassRepository;
