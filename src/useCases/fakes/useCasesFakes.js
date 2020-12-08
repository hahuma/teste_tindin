const createRepositoryFake = {
  async create(data) {
    const newData = {
      ...data,
      _id: 'some id',
      createdAt: '2020-12-08T00:26:32.492Z',
      updatedAt: '2020-12-08T00:26:32.492Z',
    };

    return newData;
  },
};

const deleteRepositoryFake = {
  async findByIdAndDelete(id) {
    if (await this.validate(id)) {
      return `${id} + deleted`;
    }

    throw new Error();
  },
  async validate(id) {
    return typeof id === 'string';
  },
};

const listRepositoryFake = {
  async list() {
    return {
      classes: 'some classes',
      comments: 'some comments',
      count: 'some number',
    };
  },
};

const listOneRepositoryFake = {
  async list() {
    return {
      total_comments: 14,
      name: 'Aula xyz',
      description: 'aprenda a...',
      video: 'http://www.youtube.com',
      data_init: 20201208,
      data_end: 20211212,
      createdAt: '2020-12-07T14:22:33.717Z',
      updatedAt: '2020-12-07T14:22:33.717Z',
      date_created: 20201207,
      date_updated: 20201207,
      comments: ['Nao gostei nao', 'Nossa gostei muito.', 'Gostei'],
    };
  },
  async validate(id) {
    return id === '1234567890abc';
  },
};

const updateClassRepositoryFake = {
  async update(data) {
    const newData = {
      ...data,
      _id: 'some id',
      createdAt: '2020-12-08T00:26:32.492Z',
      updatedAt: Date.now(),
    };

    return newData;
  },
  async validate(id) {
    return id === 'http://www.youtube.com';
  },
};

module.exports = {
  createRepositoryFake,
  deleteRepositoryFake,
  listRepositoryFake,
  listOneRepositoryFake,
  updateClassRepositoryFake
};
