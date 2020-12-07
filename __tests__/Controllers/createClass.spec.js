const request = require('supertest');
const app = require('../../src/app');

describe('Create Class Tests', () => {
  it('Should return status 201 and an object with 6 properties', async () => {
    const fakeClass = {
      name: 'aula tal',
      description: 'aula sobre...',
      video: 'http://youtube.com/?watch=videoaula',
      data_init: 20201209,
      data_end: 20210215,
    };

    const createdFakeClass = await request(app)
      .post('/classes')
      .send(fakeClass);

    expect(createdFakeClass).toHaveProperty('name');
    expect(createdFakeClass).toHaveProperty('description');
    expect(createdFakeClass).toHaveProperty('video');
    expect(createdFakeClass).toHaveProperty('data_init');
    expect(createdFakeClass).toHaveProperty('data_end');
    expect(createdFakeClass).toHaveProperty('_id');
  });
});
