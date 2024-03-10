import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
