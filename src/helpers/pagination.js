module.exports = async function pagination(page = 1) {
  const skip = 50;
  const limit = 50;
  const paginatedList = await this.find()
    .sort({ createdAt: -1 })
    .skip(+skip * (page - 1))
    .limit(+limit)
    .exec();
  return paginatedList;
};
