import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import HomePage from "../Pages/HomePage/HomePage";
import ProductDetails from "../ProductDetails/ProductDetails";
import Checkout from "../Checkout/Checkout";
import Order from "../Order/Order";
import Orderdetails from "../Order/Orderdetails";
import { Bounce, ToastContainer } from "react-toastify";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import Profile from "../Profile/Profile";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/user" element={<Profile />}></Route>
        <Route
          path="/account/rate/:productId"
          element={<ReviewProduct />}
        ></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<Orderdetails />}
        ></Route>
      </Routes>

      <div>
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default CustomerRouters;
