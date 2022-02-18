import { Route, Routes, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux";
import Success from "./pages/Success";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/success" element={<Success />} />
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </>
  );
}

export default App;
