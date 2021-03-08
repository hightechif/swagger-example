const { Article } = require("../models");

const index = (req, res) => {
    Article.findAll()
        .then((articles) => {
            res.status(200).json(articles)
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message,
            });
        });
};
const show = (req, res) => {
    Article.findByPk(req.params.id)
        .then((article) => {
            if (article) {
                // res.status(200).json(article)
                res.status(200).json({
                    title: article.title,
                    body: article.body,
                });
            } else {
                res.status(404).json({
                    message: "ID Article is Not Found",
                });
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message,
            });
        });
};
const create = (req, res) => {
    const { title, body, approved } = req.body;

    Article.create({
        title,
        body,
        approved,
    })
        .then((article) => {
            res.status(201).json(article)
        })
        .catch((err) => {
            res.status(400).json("Can't create article");
        });
};

module.exports = {
    index,
    show,
    create
};
