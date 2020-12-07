const Class = require('../entities/Class');

class MongoDBDeleteClassRepository {
  async findByIdAndDelete(id) {
    await Class.findByIdAndDelete({ _id: id });
  }

  async validate(id) {
    const hasClass = await Class.findOne({ _id: id });
    if (hasClass) return true;

    return false;
  }
}

module.exports = MongoDBDeleteClassRepository;
