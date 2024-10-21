const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// 1. GET all items
router.get('/getall', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. GET one item by ID
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. POST (Add a new item)
router.post('/add', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        category: req.body.category,
        rating: req.body.rating
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 4. PUT/PATCH (Update an item by ID)
router.put('/update/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        if (req.body.name != null) item.name = req.body.name;
        if (req.body.category != null) item.category = req.body.category;
        if (req.body.rating != null) item.rating = req.body.rating;

        const updatedItem = await item.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 5. DELETE (Delete an item by ID)
router.delete('/delete/:id', async (req, res) => {
    try {
        // Find and delete the item by ID directly
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
