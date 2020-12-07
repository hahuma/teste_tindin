const Class = require('../entities/Class');

class MongoDBCreateClassRepository {
  async create(data) {
    const hasClass = await this._validate(data.video);
    if (hasClass) throw new Error('User Already Exists');
    const newClass = await Class.create(data);

    return newClass;
  }

  async _validate(video) {
    const isClassCreated = await Class.findOne({ video });
    if (isClassCreated) return true;

    return false;
  }
}

module.exports = MongoDBCreateClassRepository;
