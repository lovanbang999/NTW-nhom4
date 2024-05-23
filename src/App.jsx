import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import { Routes, Route, Link } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <>
    <Box>
      <Routes>
        <Route path="/" element ={<Login/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path='/register' element ={<Register/>} />
        <Route path="/home" element ={<Home/>} />
      </Routes>
    </Box>
    </>
  )
}
export default App
