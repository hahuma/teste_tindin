const Class = require('../entities/Class');
const Comment = require('../entities/Comment');

class MongoDBDeleteCommentRepository {
  async findByIdAndDelete(id) {
    const deletedComment = await Comment.findByIdAndDelete({ _id: id });

    if (deletedComment) {
      await Class.findByIdAndUpdate(deletedComment.id_class, {
        $inc: {
          total_comments: -1,
        },
      });
    }
  }

  async validate(id) {
    const hasComment = await Comment.findOne({ _id: id });
    if (hasComment) return true;

    return false;
  }
}

module.exports = MongoDBDeleteCommentRepository;
