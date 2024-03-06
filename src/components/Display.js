import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Display() {
  // Define state variables to store fetched data and loading status
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8882/GetProd');
            
            // Check if the response status is OK (200)
            if (response.status === 200) {
              // Parse the response JSON data
              const responseData = await response.data;
              // Update the products state with the parsed data
              setData(responseData);
              // Set loading to false
              setLoading(false);
            } else {
              // Handle non-OK response status
              console.error('Error fetching products: Non-OK response status');
              setLoading(false);
            }
          } catch (error) {
            // Handle errors
            console.error('Error fetching products:', error);
            setLoading(false);
          }
    };

    fetchData(); // Call fetchData function
  }, []); // Empty dependency array means the effect runs once on mount

  // Render loading message while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render table with fetched data
  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.pname}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
