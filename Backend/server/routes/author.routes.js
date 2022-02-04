const AuthorController = require("../controllers/author.controller");
const Author = require("../models/author.models");

module.exports = app => {
    app.get("/api/test", AuthorController.testResponce);

    app.get("/api/authors/findAll", AuthorController.findAllAuthors);

    app.get("/api/authors/author/:_id", AuthorController.findOneAuthor);

    app.post("/api/authors/create", AuthorController.createAuthor);

    app.delete("/api/authors/:_id/delete", AuthorController.deleteAuthor);

    app.patch("/api/authors/:_id/update", AuthorController.updateOneAuthor);

}