import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddUserForm from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import EditUserForm from './components/Edit/Edit';

function App() {
  return (
    <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/addUser' element={<AddUserForm />} />
          <Route path='/edit/:id' element={<EditUserForm />} />
        </Routes>
    </div>
  );
}

export default App;
