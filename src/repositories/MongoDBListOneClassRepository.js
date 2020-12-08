const Class = require('../entities/Class');
const Comment = require('../entities/Comment');

class MongoDBListOneClassRepository {
  async list(id) {
    const filteredClass = await Class.findById({ _id: id });
    const lastThreeComments = await this.getLastThreeComments(
      filteredClass._id
    );
    filteredClass.comments = [...lastThreeComments];
    return filteredClass;
  }

  async validate(id) {
    const hasClass = !!(await Class.findById({ _id: id }));

    return hasClass;
  }

  async getLastThreeComments(id) {
    const lastThreeCommentsData = await Comment.find({ id_class: id })
      .sort({ createdAt: -1 })
      .limit(3);

    const lastThreeComments = lastThreeCommentsData.map(
      (commentData) => commentData.comment
    );
    return lastThreeComments;
  }
}

module.exports = MongoDBListOneClassRepository;
