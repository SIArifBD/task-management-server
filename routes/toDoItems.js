const router = require('express').Router();
//import todo model

const todoItemsModel = require('../models/toDoItems');

//add to-do item in db
router.post('/api/item', async (req, res) => {
    try {
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        const saveItem = await newItem.save();
        res.status(200).json('Item Added Successfully');
    }
    catch (err) {
        res.json(err);
    }
})

//get to-do item from db
router.get('/api/items', async (req, res) => {
    try {
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    }
    catch (err) {
        res.json(err);
    }
})

//get to-do item from db
router.get('/api/item/:id', async (req, res) => {
    try {
        // const id = req.params.id;
        // const query = { _id: ObjectId(id) };
        const singleTodoItems = await todoItemsModel.findById(req.params.id);
        res.status(200).json(singleTodoItems)
    }
    catch (err) {
        res.json(err);
    }
})

//update to-do items
router.put('/api/item/:id', async (req, res) => {
    try {
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json('Item Updated');
    }
    catch (err) {
        res.json(err);
    }
})

//delete to-do items
router.delete('/api/item/:id', async (req, res) => {
    try {
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    }
    catch (err) {
        res.json(err);
    }
})


//export router
module.exports = router;
