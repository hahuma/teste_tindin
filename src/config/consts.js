const { MONGO_URL } = process.env;
const { PORT } = process.env;

const PAGE_SKIP = 50;

module.exports = {
  MONGO_URL,
  PORT,
  PAGE_SKIP,
};
