import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayById() {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState(null);

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  useEffect(() => {
    if (productId !== '') {
      // Fetch product by ID when productId changes
      axios.get(`http://localhost:8882/GetProd/${productId}`)
        .then(response => {
          setProduct(response.data); // Set the retrieved product
        })
        .catch(error => {
          console.error('Error fetching product:', error);
          setProduct(null); // Clear the product state in case of error
        });
    } else {
      setProduct(null); // Clear the product state when productId is empty
    }
  }, [productId]);

  return (
    <div>
      <h2>Display Product by ID</h2>
      <div>
        <label>Product ID:</label>
        <input type="text" value={productId} onChange={handleChange} />
      </div>
      {product && (
        <div>
          <h3>Product Details</h3>
          <p>ID: {product.id}</p>
          <p>Name: {product.pname}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      )}
      {product==null &&(
        <div>
            <span style={{color:'red'}}>No product with this id</span>
        </div>
      )}
    </div>
  );
}

export default DisplayById;
