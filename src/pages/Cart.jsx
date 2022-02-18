import React, { useEffect, useState } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { resetCart } from "../redux/cartRedux";
import { userRequest } from "../requestMethods";

const KEY = process.env.REACT_APP_STRIPE;

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart,
        });
        dispatch(resetCart());
      } catch (error) {}
    };

    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <div>
      <NavBar />
      <Announcement />
      <div className="p-10 mx-auto max-w-screen-xl">
        <div>
          <h1 className="text-4xl text-center">YOUR BAG</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between mt-5">
          <Link to="/">
            <button className="p-2 border border-stone-600">
              Continue Shopping
            </button>
          </Link>
          <div>
            <span className="underline mr-5">
              Shopping Bag <span>({cart.quantity})</span>
            </span>
            <span className="underline">
              Your Wishlist <span>(0)</span>
            </span>
          </div>
          <button className="p-2 bg-black text-white">Checkout Now</button>
        </div>
        {cart.products.length <= 0 ? (
          <div className="mt-5 flex items-center justify-center text-4xl h-[50vh] bg-[#fcf1ed]">
            Nothing in cart
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between mt-8">
            <div className="flex-[3_3_0%]">
              {cart.products?.map((item) => {
                return (
                  <div
                    key={item._id + Math.floor(Math.random() * 1000).toString()}
                  >
                    <div className="py-2 flex flex-col md:flex-row gap-3 md:gap-0 justify-between">
                      <div className="flex-[2_2_0%] flex justify-between md:justify-start">
                        <div>
                          <img
                            className="w-[200px] object-cover"
                            src={item.img}
                            alt=""
                          />
                        </div>
                        <div className="p-5 flex flex-col justify-around gap-2 md:gap-0">
                          <span>
                            <b>Product: </b>
                            {item.title}
                          </span>
                          <span>
                            <b>ID: </b>
                            {item._id +
                              Math.floor(Math.random() * 1000).toString()}
                          </span>
                          <span
                            style={{
                              backgroundColor: item.color,
                              opacity: 0.7,
                            }}
                            className="w-[20px] h-[20px] rounded-full border-2 border-slate-500"
                          ></span>
                          <span>
                            <b>Size: </b>
                            {item.size}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center gap-5">
                        <div className="flex items-center justify-center gap-4">
                          <span className="text-2xl font-medium text-center">
                            quantity: {item.quantity}
                          </span>
                        </div>
                        <div className="text-4xl font-thin">
                          $ {item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                    <div className="border-b"></div>
                  </div>
                );
              })}
            </div>
            <div className="flex-1 border p-4">
              <h3 className="text-2xl mb-4">ORDER SUMMARY</h3>
              <div className="flex flex-col justify-center gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg">Subtotal</span>
                  <span className="text-xl font-medium">$ {cart.total}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">Estimated Shipping</span>
                  <span className="text-xl font-medium">$ 5.9</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">Shipping Discount</span>
                  <span className="text-xl font-medium">$ -5.9</span>
                </div>
                <div className="border-b border-stone-700"></div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">Total</span>
                  <span className="text-xl font-medium">$ {cart.total}</span>
                </div>
              </div>
              <div className="w-full">
                <StripeCheckout
                  name="Bodoi Shop"
                  image="https://avatars.githubusercontent.com/u/74906342?v=4"
                  billingAddress
                  shippingAddress
                  description={`Your total is $${cart.total}`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <button className="border p-2 bg-primary mt-5 w-full">
                    CHECKOUT NOW
                  </button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
