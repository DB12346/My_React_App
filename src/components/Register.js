import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Simple validation
      const newErrors = {};
      if (!formData.username.trim()) {
        newErrors.username = 'Username is required';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.password.trim()) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }
      if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      setErrors(newErrors);
  
      // Submit the form if no errors
      if (Object.keys(newErrors).length === 0) {
        // Here you can handle form submission, e.g., send data to the server
        console.log('Form submitted:', formData);
      }
    };
  
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <span>{errors.username}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Register;