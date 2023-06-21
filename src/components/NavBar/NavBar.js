import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            User's Dashboard
            <FaUser className='user_icon' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  Dashboard
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/addUser'>
                  Create
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
