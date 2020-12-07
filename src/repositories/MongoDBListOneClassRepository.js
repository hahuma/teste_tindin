const Class = require('../entities/Class');
const Comment = require('../entities/Comment');

class MongoDBListOneClassRepository {
  async list(id) {
    const filteredClass = await Class.findById({ _id: id }).select('+comments');
    const commentsData = await this._getLastThreeComments(filteredClass._id);
    commentsData.forEach((comment) => {
      filteredClass.comments.push(comment.comment);
    });

    return filteredClass;
  }

  async validate(id) {
    const hasClass = !!(await Class.findById({ _id: id }));

    return hasClass;
  }

  async _getLastThreeComments(id) {
    const lastThreeComments = await Comment.find({ id_class: id })
      .sort({ createdAt: -1 })
      .limit(3);

    return lastThreeComments;
  }
}

module.exports = MongoDBListOneClassRepository;
