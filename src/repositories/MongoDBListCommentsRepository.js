const Comment = require('../entities/Comment');

const { PAGE_SKIP } = require('../config/consts');

class MongoDBListCommentsRepository {
  async list(page) {
    const count = await Comment.estimatedDocumentCount();
    const comments = await Comment.find()
      .sort({ createdAt: -1 })
      .limit(50)
      .skip(PAGE_SKIP * (page - 1));

    return {
      comments,
      count,
    };
  }
}

module.exports = MongoDBListCommentsRepository;
