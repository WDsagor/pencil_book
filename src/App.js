import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound";
import Home from "./Components/pages/Home/Home";
import AddItem from "./Components/pages/Inventory/AddItem/AddItem";
import Inventory from "./Components/pages/Inventory/Inventory";
import Login from "./Components/pages/Login/Login";
import MyItem from "./Components/pages/MyItem/MyItem";
import Signup from "./Components/pages/Signup/Signup";
import UpdateItem from "./Components/pages/UpdateItem/UpdateItem";
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
          path="/addItem"
          element={
            <RequirAuth>
              <AddItem></AddItem>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/myItem"
          element={
            <RequirAuth>
              <MyItem></MyItem>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={
            <RequirAuth>
              <UpdateItem></UpdateItem>
            </RequirAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer className='foorer'></Footer>
    </div>
  );
}

export default App;
