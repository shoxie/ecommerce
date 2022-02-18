import { useEffect, useState } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { BiMeh } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };

    getProduct();
  }, [id]);

  const handleAddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleRemoveQuantity = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };

  const handleAddCart = () => {
    if (user && color && size) {
      dispatch(addProduct({ ...product, quantity, color, size }));
    } else {
      setShowModal(true);
    }
  };

  return (
    <div>
      <NavBar />
      <Announcement />
      <div className="p-10 flex flex-col md:flex-row gap-5 md:gap-0 items-start justify-between mx-auto max-w-screen-xl">
        <div className="flex-1 w-full h-full">
          <img
            src={product.img}
            alt=""
            className="w-full h-[50vh] lg:h-[100vh] object-cover"
          />
        </div>
        <div className="flex-1 px-5">
          <h3 className="text-3xl font-semibold mb-3">{product.title}</h3>
          <p className="text-justify mb-3 text-lg">{product.desc}</p>
          <span className="text-4xl font-thin mt-2">$ {product.price}</span>
          <div className="flex items-center justify-between w-full lg:w-1/2 mt-4">
            <div className="flex items-center justify-center">
              <span className="text-xl mr-3">Color: </span>
              <div className="flex items-center justify-center gap-3">
                {product.color?.map((item) => {
                  return (
                    <div
                      onClick={() => setColor(item)}
                      key={item}
                      style={{ backgroundColor: item, opacity: 0.7 }}
                      className="rounded-full w-[20px] h-[20px] cursor-pointer transition-all border-2 hover:border-slate-500"
                    ></div>
                  );
                })}
              </div>
            </div>
            <div>
              <span className="mr-3 text-xl">Size: </span>
              <select
                name="size"
                className="rounded-md border px-3 py-1 appearance-none cursor-pointer"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between w-full lg:w-1/2 mt-6">
            <div className="flex items-center justify-between gap-4">
              <button
                className="p-2 rounded-full border border-slate-500"
                onClick={handleRemoveQuantity}
              >
                <BsDashLg />
              </button>
              <span className="text-2xl font-medium w-4 text-center">
                {quantity}
              </span>
              <button
                className="p-2 rounded-full border border-slate-500"
                onClick={handleAddQuantity}
              >
                <BsPlusLg />
              </button>
            </div>
            <button
              onClick={handleAddCart}
              className="p-2 rounded-md border border-slate-500 font-medium hover:bg-secondary-100 transition-colors"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 z-20 px-5 w-[100vw] h-[100vh] flex wrapper_modal">
          <div className="m-auto bg-white rounded-md shadow-lg p-8">
            <div className="w-full">
              <BiMeh className="text-red-600 text-3xl mb-5 text-center w-full" />
            </div>
            <div className="text-center text-xl mb-5">
              {user
                ? "You should choose the color and size!!"
                : "You should login to my website"}
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-10 py-2 w-fit border bg-primary rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Product;
