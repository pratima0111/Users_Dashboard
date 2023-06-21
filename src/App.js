import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUserForm from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import EditUserForm from './components/Edit/Edit';

// "homepage": "https://pratima0111.github.io/Users_Dashboard",


function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/addUser' element={<AddUserForm />} />
          <Route path='/edit/:id' element={<EditUserForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
