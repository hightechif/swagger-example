
const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article.controller')

//Get all Articles
router.get('/',articleCtrl.index)
router.get('/:id',articleCtrl.show)
router.post('/',articleCtrl.create)




// router.put('/articles/:id', (req,res)=>{
//     const {title, body, approved} = req.body;
//     Article.update(req.body,{
//         where:{
//             id:req.params.id
//         }
//     }).then(article =>{
//         res.redirect('/articles')
//     }).catch(err=>{
//         res.status(400).json(`Can't update article - ${err.message}`)
//     })
// })

// router.delete('/articles/:id', (req,res)=>{
//     Article.destroy({
//         where:{
//             id:req.params.id
//         }
//     }).then(article =>{
//         // res.status(201).json(article)
//         res.redirect('/articles')
//     }).catch(err=>{
//         res.status(400).json(`Can't delete article - ${err.message}`)
//     })
// })

module.exports = router;



