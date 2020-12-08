const request = require('supertest');
const mongoose = require('mongoose');
const faker = require('faker');
const crypto = require('crypto');

const app = require('./app');
const { MONGO_URL } = require('./config/consts');

describe('# Routes Test', () => {
  beforeAll(() => {
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
    });
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  describe('# Testing "get" routes', () => {
    it('should return a list of classes', async () => {
      const classes = await request(app)
        .get('/classes')
        .expect(200)
        .then((res) => res.body);

      classes.forEach(async (singleClass) => {
        // create a new comment for this class
        await request(app)
          .post('/classes/comment')
          .query({ id_class: `${singleClass._id}` })
          .send({
            comment: faker.lorem.sentence(),
          })
          .expect(201);

        expect(singleClass).toHaveProperty('total_comments');
        expect(singleClass).toHaveProperty('_id');
        expect(singleClass).toHaveProperty('name');
        expect(singleClass).toHaveProperty('description');
        expect(singleClass).toHaveProperty('video');
        expect(singleClass).toHaveProperty('data_init');
        expect(singleClass).toHaveProperty('data_end');
        expect(singleClass).toHaveProperty('date_created');
        expect(singleClass).toHaveProperty('date_updated');
        expect(singleClass).toHaveProperty('createdAt');
        expect(singleClass).toHaveProperty('updatedAt');

        if (singleClass.tota_comments >= 1) {
          expect(singleClass).toHaveProperty('last_comment');
          expect(singleClass).toHaveProperty('last_comment_date');
        }
      });
    });
    it('should return a list of comments', async () => {
      await request(app).get('/class/comments').expect(200);
    });
    it('should return a single class', async () => {
      const fakeUrl = await crypto.randomBytes(10).toString();
      const newClass = await request(app)
        .post('/classes')
        .send({
          name: faker.lorem.words(),
          description: faker.lorem.sentence(),
          video: `${faker.internet.url()}/${fakeUrl}`,
          data_init: 20201202,
          data_end: 20211202,
        })
        .expect(201)
        .then((res) => res.body);

      const response = await request(app).get(`/classes/${newClass._id}`);
      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty('total_comments');
      expect(response.body).toHaveProperty('_id');
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('description');
      expect(response.body).toHaveProperty('video');
      expect(response.body).toHaveProperty('data_init');
      expect(response.body).toHaveProperty('data_end');
      expect(response.body).toHaveProperty('date_created');
      expect(response.body).toHaveProperty('date_updated');
      expect(response.body).toHaveProperty('comments');
      expect(response.body).toHaveProperty('createdAt');
      expect(response.body).toHaveProperty('updatedAt');
    });
  });

  describe('# Testing "post" routes', () => {
    it('should create a new class', async () => {
      const fakeUrl = await crypto.randomBytes(10).toString();
      await request(app)
        .post('/classes')
        .send({
          name: faker.lorem.words(),
          description: faker.lorem.sentence(),
          video: `${faker.internet.url()}/${fakeUrl}`,
          data_init: 20201202,
          data_end: 20211202,
        })
        .expect(201);
    });
    it('should create a new comment', async () => {
      await request(app)
        .post('/classes/comment')
        .query({ id_class: '5fceabc98ce4db0e01a6b572' })
        .send({
          comment: faker.lorem.sentence(),
        })
        .expect(201);
    });
  });

  describe('# Testing "delete" routes', () => {
    it('should delete a class', async () => {
      const fakeUrl = await crypto.randomBytes(10).toString();
      const newClass = await request(app)
        .post('/classes')
        .send({
          name: faker.lorem.words(),
          description: faker.lorem.sentence(),
          video: `${faker.internet.url()}/${fakeUrl}`,
          data_init: 20201202,
          data_end: 20211202,
        })
        .then((res) => res.body);

      await request(app).delete(`/classes/${newClass.id}`).expect(200);
    });
    it('should delete a comment', async () => {
      const newComment = await request(app)
        .post('/classes/comment')
        .query({ id_class: '5fceabc98ce4db0e01a6b572' })
        .send({
          comment: faker.lorem.sentence(),
        })
        .expect(201)
        .then((res) => res.body);

      await request(app)
        .delete(`/classes/comment/${newComment._id}`)
        .expect(200);
    });
  });
  describe('# Testing "delete" routes', () => {
    it('should delete a class', async () => {
      const fakeUrl = await crypto.randomBytes(10).toString();
      const newClass = await request(app)
        .post('/classes')
        .send({
          name: faker.lorem.words(),
          description: faker.lorem.sentence(),
          video: `${faker.internet.url()}/${fakeUrl}`,
          data_init: 20201202,
          data_end: 20211202,
        })
        .expect(201)
        .then((res) => res.body);

      await request(app).delete(`/classes/${newClass.id}`).expect(200);
    });
    it('should delete a comment', async () => {
      const newComment = await request(app)
        .post('/classes/comment')
        .query({ id_class: '5fceabc98ce4db0e01a6b572' })
        .send({
          comment: faker.lorem.sentence(),
        })
        .then((res) => res.body);

      await request(app)
        .delete(`/classes/comment/${newComment._id}`)
        .expect(200);
    });
  });

  describe('# Testing "put" routes', () => {
    it('should update an existing class', async () => {
      const fakeUrl = await crypto.randomBytes(10).toString();
      const newClass = await request(app)
        .post('/classes')
        .send({
          name: faker.lorem.words(),
          description: faker.lorem.sentence(),
          video: `${faker.internet.url()}/${fakeUrl}`,
          data_init: 20201202,
          data_end: 20211202,
        })
        .expect(201)
        .then((res) => res.body);

      const updatedClass = await request(app)
        .put('/classes')
        .query({ _id: newClass._id })
        .send({
          description: faker.lorem.sentences(),
        })
        .expect(200)
        .then((res) => res.body);

      expect(newClass.updatedAt).not.toEqual(updatedClass.updatedAt);
    });
  });
});
