const Author = require("../models/author.models");


module.exports.testResponce = (req,res) => {
    res.json({message:"hey its me!"})
}

module.exports.findAllAuthors = (req,res) => {
    Author.find({})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({results:newAuthor}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.findOneAuthor = (req,res) => {
    Author.findOne({_id:req.params._id})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({_id:req.params._id})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.updateOneAuthor = (req,res) => {
    Author.updateOne({_id:req.params._id}, req.body, {runValidators:true})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}