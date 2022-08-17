import Cart from "./Components/Cart/Cart";
import Menu from "./Components/Menu/Menu";
import Login from "./Components/Auth/Login";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Auth/Register";
import Empty from "./Components/Common/isEmpty/isEmpty";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="*" element={<Empty title={"این صفحه وجود ندارد"} />} />
    </Routes>
  );
}

export default App;
