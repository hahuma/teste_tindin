const { Router } = require('express');

const routes = Router();

const {
  createClass,
  createComment,
  deleteClass,
  deleteComment,
  listClasses,
  listComments,
  listOneClass,
  updateClass,
} = require('./implementations');

// Classes Routes
routes.get('/classes', (req, res) => listClasses.handle(req, res));
routes.post('/classes', (req, res) => createClass.handle(req, res));
routes.get('/classes/:id', (req, res) => listOneClass.handle(req, res));
routes.put('/classes', (req, res) => updateClass.handle(req, res));
routes.delete('/classes/:id', (req, res) => deleteClass.handle(req, res));
routes.post('/classes/comments', (req, res) => createComment.handle(req, res));
routes.get('/classes/comments', (req, res) => listComments.handle(req, res));
routes.delete('/classes/comment/:id', (req, res) =>
  deleteComment.handle(req, res)
);

module.exports = routes;
