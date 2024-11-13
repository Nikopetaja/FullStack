import React, { useEffect, useState } from 'react';
import { getAllItems, deleteItem } from '../api';

const ItemList = ({ onEdit }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await getAllItems();
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteItem(id);
            fetchItems(); // Refresh item list
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
