const Comment = require('../entities/Comment');
const Class = require('../entities/Class');

class MongoDBCreateCommentRepository {
  async create(data) {
    const newComment = await Comment.create(data);

    if (newComment) {
      await Class.findByIdAndUpdate(newComment.id_class, {
        $inc: {
          total_comments: 1,
        },
      });
    }

    return newComment;
  }
}

module.exports = MongoDBCreateCommentRepository;
