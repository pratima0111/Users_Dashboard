import React, { useState } from 'react';
import './Form.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && phone) {
      // Validate email and phone
      if (!isValidEmail(email) || !isValidPhone(phone)) {
        toast.error('Please fill in correct field values!');
        return;
      }

      // Get existing users from localStorage or initialize as an empty array
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      const newUser = {
        id: uuidv4(), // Generate a unique ID
        name: name,
        email: email,
        phone: phone,
      };

      // Add the new user to the existing users array
      existingUsers.push(newUser);

      // Save the updated users array back to localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));
      // Display toast notification on success
      toast.success('User added successfully!');

      // Reset form inputs
      setName('');
      setEmail('');
      setPhone('');
      
      navigate('/');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    // Phone number validation regex pattern
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone); // Assuming phone number should be 10 digits long
  };

  return (
    <div className='form-container'>
      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <h4 className='title'>ADD NEW USER</h4>
        <div className='mb-3'>
          <input
            type='name'
            className='form-control'
            id='exampleInputName1'
            aria-describedby='emailHelp'
            placeholder='Enter Name...'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className='mb-3'>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter Email...'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className='mb-3'>
          <input
            type='phone'
            className='form-control'
            id='exampleInputPhone1'
            placeholder='Enter Phone...'
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
