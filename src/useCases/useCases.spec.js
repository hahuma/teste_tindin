const {
  CreateClass,
  CreateComment,
  DeleteClass,
  DeleteComment,
  ListClasses,
  ListComments,
  ListOneClass,
  UpdateClass,
} = require('./index');

const {
  createRepositoryFake,
  deleteRepositoryFake,
  listRepositoryFake,
  listOneRepositoryFake,
  updateClassRepositoryFake,
} = require('./fakes/useCasesFakes');

describe('# UseCases Tests', () => {
  describe('# Create Class Usecase', () => {
    it('should return a newInput with the given information', async () => {
      const createClass = new CreateClass(createRepositoryFake);
      const input = {
        name: 'string',
        description: 'string',
        video: 'string',
        data_init: 20202020,
        data_end: 20202020,
      };

      const expectedInput = {
        _id: 'some id',
        name: 'string',
        description: 'string',
        video: 'string',
        data_init: 20202020,
        data_end: 20202020,
        createdAt: '2020-12-08T00:26:32.492Z',
        updatedAt: '2020-12-08T00:26:32.492Z',
      };

      const newInput = await createClass.execute(input);
      return expect(newInput).toEqual(expectedInput);
    });
    it('should have an instance of Create Class Use Case with "execute" property', () => {
      const createClass = new CreateClass(createRepositoryFake);
      expect(createClass).toHaveProperty('execute');
    });
  });

  describe('# Create Comment Usecase', () => {
    it('should return a newInput with the given information', async () => {
      const createComment = new CreateComment(createRepositoryFake);
      const input = {
        comment: 'string',
        id_class: '123ff234ff2332f45',
      };

      const expectedInput = {
        _id: 'some id',
        comment: 'string',
        id_class: '123ff234ff2332f45',
        createdAt: '2020-12-08T00:26:32.492Z',
        updatedAt: '2020-12-08T00:26:32.492Z',
      };

      const newInput = await createComment.execute(input);
      return expect(newInput).toEqual(expectedInput);
    });
    it('should have an instance of Create Comment Usecase with "execute" property', () => {
      const createComment = new CreateComment(createRepositoryFake);
      expect(createComment).toHaveProperty('execute');
    });
  });

  describe('# Delete Class Usecase', () => {
    it('should delete a class already created', async () => {
      const deleteClass = new DeleteClass(deleteRepositoryFake);

      return expect(await deleteClass.execute('someid')).toBe(true);
    });
  });
  describe('# Delete Comment Usecase', () => {
    it('should delete a comment already created', async () => {
      const deleteComment = new DeleteComment(deleteRepositoryFake);

      return expect(await deleteComment.execute('someid')).toBeUndefined();
    });
  });

  describe('# List Classes Usecase', () => {
    it('should list classes already created', async () => {
      const listClasses = new ListClasses(listRepositoryFake);

      expect(await listClasses.execute()).toHaveProperty(
        'classes',
        'some classes'
      );
      expect(await listClasses.execute()).toHaveProperty(
        'count',
        'some number'
      );
    });
  });
  describe('# List Comments Usecase', () => {
    it('should list comments already created', async () => {
      const listComments = new ListComments(listRepositoryFake);

      expect(await listComments.execute()).toHaveProperty(
        'comments',
        'some comments'
      );
      expect(await listComments.execute()).toHaveProperty(
        'count',
        'some number'
      );
    });
  });

  describe('# Update One Class Usecase', () => {
    it('should return a actualized class', async () => {
      const updateClass = new UpdateClass(updateClassRepositoryFake);

      const updateInput = {
        name: 'Aula xyz',
        description: 'aprenda a...',
        video: 'http://www.youtube.com',
        data_init: 20201208,
        data_end: 20211212,
      };

      expect(await updateClass.execute(updateInput)).not.toHaveProperty(
        'createdAt',
        '2020-12-07T14:22:33.717Z'
      );
    });
  });
  describe('# List One Class Usecase', () => {
    it('should list a single class', async () => {
      const listOneClass = new ListOneClass(listOneRepositoryFake);

      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'total_comments'
      );
      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'name'
      );
      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'description'
      );
      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'video'
      );
      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'data_init'
      );
      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'data_end'
      );
      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'createdAt'
      );
      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'updatedAt'
      );
      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'date_created'
      );
      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'date_updated'
      );
      expect(await listOneClass.execute('1234567890abc')).toHaveProperty(
        'comments'
      );
    });
  });
});
