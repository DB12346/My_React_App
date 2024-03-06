import React, { useState ,Redirect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Insert() {
    const navigate=useNavigate();
  const [product, setProduct] = useState({
    id: '',
    pname: '',
    description: '',
    price: ''
  });
  const [errors, setErrors] = useState({});

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]:value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!product.id) {
      newErrors.id = 'id is required';
    }
    if (!product.pname) {
      newErrors.name = 'name is required';
    } 
     if (!product.price) {
      newErrors.price = 'price is required';
    }
     if(!product.description)
    {
        newErrors.description='description is required';
    }

    if (Object.keys(newErrors).length === 0)
    {
    try {
       const vari= await axios.get(`http://localhost:8882/GetProd/${product.id}`);
               if(vari.data==null)
               {
      await axios.post('http://localhost:8882/AddProd', product);
      alert('Product added successfully!');

      // Clear the form fields after successful submission
      setProduct({ id: '', name: '', description: '', price: '' });
      navigate('/display');
               }
               else
               {
                 // alert('id already in use');
                   newErrors.id='id already in use';
                  // setErrors(newErrors);
               }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
}
setErrors(newErrors);


  };
 

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={product.id} onChange={handleChange} />
          {errors.id && <span style={{color:'red'}}>{errors.id}</span>}
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="pname" value={product.pname} onChange={handleChange} />
          {errors.name && <span style={{color:'red'}}>{errors.name}</span>}
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={product.description} onChange={handleChange} />
          {errors.description && <span style={{color:'red'}}>{errors.description}</span>}
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={product.price} onChange={handleChange} />
          {errors.price && <span style={{color:'red'}}>{errors.price}</span>}
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Insert;
