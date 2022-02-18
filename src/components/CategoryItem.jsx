import { Link } from "react-router-dom";

function CategoryItem({ item }) {
  return (
    <div className="flex-1 px-5 relative flex items-center">
      <div className="w-full h-3/4">
        <img src={item.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-3/4 flex flex-col gap-3 items-center justify-center ">
        <h4 className="text-white text-xl font-semibold tracking-widest">
          {item.title}
        </h4>
        <Link to={`/products/${item.cat}`}>
          <button className="px-3 py-2 border bg-slate-200 text-zinc-600 cursor-pointer">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
