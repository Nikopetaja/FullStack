import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

function App() {
    const [currentItem, setCurrentItem] = useState(null);

    const handleEdit = (item) => {
        setCurrentItem(item);
    };

    const handleFormSubmit = () => {
        setCurrentItem(null); // Reset current item after form submission
    };

    return (
        <div className="container">
            <h1>My Items App</h1>
            <ItemForm currentItem={currentItem} onFormSubmit={handleFormSubmit} />
            <ItemList onEdit={handleEdit} />
        </div>
    );
}

export default App;
