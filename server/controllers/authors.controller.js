const { update } = require('../models/authors.model');
const Author = require('../models/authors.model');

module.exports = {
    findAllAuthors: (req,res)=>{
        Author.find({})
            .then((allAuthors)=>{
                console.log(allAuthors);
                res.json(allAuthors);
            })
            .catch((err)=>{
                res.status(400).json(err);
            });
    },
    addAuthor: (req,res) => {
        Author.create(req.body)
            .then((newAuthor)=>{
                console.log(newAuthor);
                res.json(newAuthor);
            })
            .catch((err)=>{
                console.log(err);
                console.log("addAuthor has failed!");
                res.status(400).json(err);
            })
    },
    findOneAuthor: (req,res)=>{
        Author.findOne({_id: req.params.id})
            .then((oneAuthor)=>{
                console.log(oneAuthor);
                res.json(oneAuthor);
            })
            .catch((err)=>{
                console.log(err);
                console.log('findOneAuthor has failed!');
                res.status(400).json(err);
            });
    },
    deleteOneAuthor: (req,res)=>{
        Author.deleteOne({_id: req.params.id})
            .then((oneAuthor)=>{
                console.log(oneAuthor)
                res.json(oneAuthor);
            })
            .catch((err)=>{
                console.log(err);
                console.log('deleteOneAuthor has failed!');
                res.status(400).json(err);
            });
    },
    updateExistingAuthor: (req,res)=>{
        Author.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then((updatedAuthor)=>{
                console.log(updatedAuthor)
                res.json(updatedAuthor);
            })
            .catch((err)=>{
                console.log(err);
                console.log('updateOneAuthor has failed!');
                res.status(400).json(err);
            })

    }
}