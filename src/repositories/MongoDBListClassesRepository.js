const Class = require('../entities/Class');
const Comment = require('../entities/Comment');

class MongoDBListClassesRepository {
  async list(page) {
    const count = await Class.estimatedDocumentCount().select('+last_comment +last_comment_date');
    const paginatedClasses = await Class.pagination(page);

    const data = paginatedClasses.map((singleClass) => {
      const commentData = this._getLastComment(singleClass._id);
      return {
        name: singleClass.name,
        description: commentData?.comment,
        video: singleClass.video,
        data_init: singleClass.data_init,
        data_end: singleClass.data_end,
        date_created: singleClass.date_created,
        date_updated: singleClass.date_updated,
        total_comments: singleClass.total_comments,
        last_comment: commentData?.comment,
        last_comment_date: commentData?.createdAt,
      };
    });

    const classes = await Promise.all(data);
    return {
      classes,
      count,
    };
  }

  async _getLastComment(_id) {
    const lastComment = await Comment.find({ id_class: _id }).sort({
      createdAt: -1,
    });

    return lastComment;
  }
}

module.exports = MongoDBListClassesRepository;
