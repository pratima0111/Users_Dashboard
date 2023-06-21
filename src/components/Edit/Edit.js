import React, { useState, useEffect } from 'react';
import '../Form/Form.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom';

const EditUserForm = () => {
  const { id } = useParams();
  const usersFromStorage = JSON.parse(localStorage.getItem('users')) || [];
  const currentUser = usersFromStorage.find((user) => user.id === id);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [phone, setPhone] = useState(currentUser.phone);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && phone) {
      // Validate email and phone
      if (!isValidEmail(email) || !isValidPhone(phone)) {
        toast.error('Please fill in correct field values.');
        return;
      }

      const updatedUser = {
        id,
        name,
        email,
        phone,
      };
      // Find the user object with matching ID
      const updatedUsers = usersFromStorage.map((user) =>
        user.id === id ? updatedUser : user
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      navigate('/');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <div className='form-container'>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h4 className='title'>EDIT USER</h4>
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

export default EditUserForm;
