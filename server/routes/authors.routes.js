const AuthorController = require('../controllers/authors.controller');

module.exports = (app) => {
    app.get('/api/authors',AuthorController.findAllAuthors);
    app.post('/api/authors/create',AuthorController.addAuthor);
    app.get('/api/authors/:id',AuthorController.findOneAuthor);
    app.delete('/api/authors/:id',AuthorController.deleteOneAuthor);
    app.put('/api/authors/:id/edit',AuthorController.updateExistingAuthor);

}