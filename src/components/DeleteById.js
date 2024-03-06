import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteById() {
    const navigate=useNavigate();
  const [productId, setProductId] = useState('');

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8882/DelProd/${productId}`);
      alert('Product deleted successfully!');
      setProductId(''); // Clear the input field after successful deletion
      navigate('/display');

    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product. Please try again.');
    }
  };

  return (
    <div>
      <h2>Delete Product by ID</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product ID:</label>
          <input type="text" value={productId} onChange={handleChange} />
        </div>
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
}

export default DeleteById;
