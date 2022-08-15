import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
