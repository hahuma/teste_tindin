const Class = require('../entities/Class');
const Comment = require('../entities/Comment');

const { PAGE_SKIP } = require('../config/consts');

class MongoDBListClassesRepository {
  async list(page) {
    const count = await Class.estimatedDocumentCount();
    const paginatedClasses = await Class.find()
      .populate('comment')
      .sort({ createdAt: -1 })
      .limit(50)
      .skip(PAGE_SKIP * (page - 1));
    const classesWithComments = Promise.all(
      paginatedClasses.map(async (paginatedClass) => {
        const commentData = await this.getLastComment(paginatedClass.id);
        const data = {
          ...paginatedClass._doc,
          last_comment: commentData[0]?.comment,
          last_comment_date: commentData[0]?.createdAt,
        };
        return data;
      })
    );

    const classes = await classesWithComments;
    return {
      classes,
      count,
    };
  }

  async getLastComment(id) {
    const commentData = await Comment.find({ id_class: id })
      .sort({ createdAt: -1 })
      .limit(1);
    return commentData;
  }
}

module.exports = MongoDBListClassesRepository;
