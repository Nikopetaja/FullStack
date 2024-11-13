import React, { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import SearchBar from './components/SearchBar';

function App() {
    const [items, setItems] = useState([]);  // Holds all items fetched from the API
    const [filteredItems, setFilteredItems] = useState([]);  // Holds filtered items based on search
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        // Fetch all items when the component mounts
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch('https://fullstack-rest-api.onrender.com/api/getall');
            const data = await response.json();
            setItems(data);
            setFilteredItems(data); // Display all items initially
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
    };

    const handleDelete = (id) => {
      setFilteredItems(filteredItems.filter(item => item._id !== id));
      setItems(items.filter(item => item._id !== id)); // Ensure original list is updated too
  };
  

    const handleFormSubmit = () => {
        setCurrentItem(null); // Reset current item after form submission
        fetchItems();  // Refresh the list after adding/editing an item
    };

    const handleSearch = (searchTerm) => {
        if (searchTerm === '') {
            setFilteredItems(items); // Show all items if search term is empty
        } else {
            const filtered = items.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredItems(filtered);  // Update filtered items based on search term
        }
    };

    return (
        <div className="container">
            <h1>My Items App</h1>
            <SearchBar onSearch={handleSearch} />
            <ItemForm currentItem={currentItem} onFormSubmit={handleFormSubmit} />
            <ItemList items={filteredItems} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

export default App;
