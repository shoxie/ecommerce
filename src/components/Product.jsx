import { BiCart, BiSearch, BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

function Product({ item }) {
  return (
    <div className="px-3 flex-1 min-w-[280px] h-[400px] flex justify-center items-center bg-[#f5fbfd] relative product">
      <div className="absolute w-[200px] h-[200px] bg-white rounded-full"></div>
      <div className="w-full h-3/4 relative z-10">
        <img
          src={item.img}
          alt=""
          className="w-full h-full max-w-[300px] mx-auto object-cover"
        />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center gap-3 product-icon">
        <div className="p-3 rounded-full flex items-center justify-center bg-white hover:bg-[#e9f5f5] hover:scale-110 transition-all cursor-pointer">
          <BiHeart className="text-lg" />
        </div>
        <Link to={`/product/${item._id}`}>
          <div className="p-3 rounded-full flex items-center justify-center bg-white hover:bg-[#e9f5f5] hover:scale-110 transition-all cursor-pointer">
            <BiSearch className="text-lg" />
          </div>
        </Link>
        <div className="p-3 rounded-full flex items-center justify-center bg-white hover:bg-[#e9f5f5] hover:scale-110 transition-all cursor-pointer">
          <BiCart className="text-lg" />
        </div>
      </div>
    </div>
  );
}

export default Product;
