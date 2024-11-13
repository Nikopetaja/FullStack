import React from 'react';
import { deleteItem } from '../api';

const ItemList = ({ items, onEdit, onDelete }) => {
    // Handle item deletion
    const handleDelete = async (id) => {
        try {
            await deleteItem(id);
            onDelete(id); // Notify the parent to update the list
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div>
            <h2>Item List</h2>
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                            {item.name} - {item.category} - Rating: {item.rating}
                        </span>
                        <div>
                            <button className="btn btn-primary btn-sm" onClick={() => onEdit(item)}>Edit</button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
