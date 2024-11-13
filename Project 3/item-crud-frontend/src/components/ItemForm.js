import React, { useState, useEffect } from 'react';
import { addItem, updateItem } from '../api';

const ItemForm = ({ currentItem, onFormSubmit }) => {
    const [itemData, setItemData] = useState({ name: '', category: '', rating: 0 });

    useEffect(() => {
        if (currentItem) setItemData(currentItem);
    }, [currentItem]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (itemData._id) {
                await updateItem(itemData._id, itemData);
            } else {
                await addItem(itemData);
            }
            onFormSubmit();
            setItemData({ name: '', category: '', rating: 0 });
        } catch (error) {
            console.error("Error saving item:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={itemData.name} onChange={handleChange} className="form-control" required />
            </div>
            <div className="form-group">
                <label>Category</label>
                <input type="text" name="category" value={itemData.category} onChange={handleChange} className="form-control" required />
            </div>
            <div className="form-group">
                <label>Rating</label>
                <input type="number" name="rating" value={itemData.rating} onChange={handleChange} className="form-control" min="0" max="5" />
            </div>
            <button type="submit" className="btn btn-success mt-3">{itemData._id ? 'Update' : 'Add'} Item</button>
        </form>
    );
};

export default ItemForm;
