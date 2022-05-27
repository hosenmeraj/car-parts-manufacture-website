import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Navbar from './pages/shared/Navbar/Navbar';
import Login from './pages/Login/Login';
import PurchasePage from './pages/Home/Home/PurchasePage/PurchasePage';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><PurchasePage></PurchasePage></RequireAuth>}></Route>


      </Routes>
    </div>

  );
}

export default App;
