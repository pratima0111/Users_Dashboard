import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '../Card/Card.js';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { BsPlusCircleFill } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const deleteUser = (id) => {
    // Remove user from local storage
    const usersFromStorage = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsersStorage = usersFromStorage.filter(
      (user) => user.id !== id
    );
    setUsers(updatedUsersStorage);
    localStorage.setItem('users', JSON.stringify(updatedUsersStorage));
    toast.success('User Deleted!');
  };

  return (
    <div>
      <ToastContainer />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: 4,
          alignItems: 'center',
        }}
      >
        <Link to='/addUser' className='link_btn'>
          <Button variant='contained' color='success' size='large'>
            ADD USER &nbsp; <BsPlusCircleFill />
          </Button>
        </Link>
      </Box>
      <Box sx={{ flexGrow: 1, p: '2rem' }}>
        {users.length > 0 ? (
          <>
            <Grid container spacing={4}>
              {users.slice().reverse().map((user, index) => (
                <Grid xs={12} md={6} key={user.id}>
                  <Card
                    user={user}
                    index={index}
                    onDelete={() => deleteUser(user.id)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
            }}
          >
            No users found in your localstorage. Please add a new user.
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Dashboard;
