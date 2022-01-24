const Db = require('../model/post')
const router = require('express').Router()


router.get('/', async (req, res)=>{
    const post = await Db.find({})
    res.status(200).json(post)
})

router.post('/', async (req, res)=>{
    const postData = {
        title: req.body.title,
        text: req.body.text
    }
    const post = new Db(postData)
    await post.save()
    res.status(201).json(post)
})

router.delete('/:id', async (req, res)=>{
    await Db.remove({_id: req.params.id})
    res.status(200).json({message: 'deleted'})
})

module.exports = router