
import request from 'supertest'; 
import { expect } from 'chai';
import app from '../api/index.js'; 
import dotenv from 'dotenv'; 
dotenv.config();


let userId;

describe('User API', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users/add')
      .send({ name: 'John Doe', email: 'john.doe@example.com', age: 30 });

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('_id');
    expect(response.body.name).to.equal('John Doe');

    userId = response.body._id;
  });

  // Test GET /api/users
  it('should get all users', async () => {
    const response = await request(app).get('/api/users/');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  // Test GET /api/users/:id
  it('should get a specific user by ID', async () => {
    const response = await request(app).get(`/api/users/fetch/${userId}`);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('_id', userId);
  });

  // Test PUT /api/users/modify/:id
  it('should update a user', async () => {
    const response = await request(app)
      .put(`/api/users/modify/${userId}`)
      .send({ name: 'John Doe Updated' });

    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal('John Doe Updated');
  });

  // Test DELETE /api/users/delete/:id
  it('should delete a user', async () => {
    const response = await request(app).delete(`/api/users/delete/${userId}`);

    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal('User deleted');
  });
});
