import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/pages/Home/Home';
import Inventory from './Components/pages/Inventory/Inventory';
import Login from './Components/pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header className="header"></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
