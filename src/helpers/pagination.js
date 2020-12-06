module.exports = async function list(page = 1) {
    const skip = 50
    const limit = 50
    return await this.find()
      .sort({ createdAt: -1 })
      .skip(+skip * page)
      .limit(+limit)
      .exec();
  }