import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/pages/Home/Home";
import Inventory from "./Components/pages/Inventory/Inventory";
import Login from "./Components/pages/Login/Login";
import Signup from "./Components/pages/Signup/Signup";
import RequirAuth from "./Components/RequirAuth/RequirAuth";

function App() {
  return (
    
    <div className="App">
      <ToastContainer/>
      <Header className="header"></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory"
          element={
            <RequirAuth>
              <Inventory></Inventory>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequirAuth>
              <Inventory></Inventory>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/addProducts"
          element={
            <RequirAuth>
              <Inventory></Inventory>
            </RequirAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
