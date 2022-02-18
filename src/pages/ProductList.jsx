import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <NavBar />
      <Announcement />
      <div className="px-10 py-5 mx-auto max-w-screen-xl">
        <h1 className="text-3xl font-semibold mb-8">{cat.toUpperCase()}</h1>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-start md:items-center justify-between">
          <div>
            <span className="text-lg font-medium mr-3">Filter Products:</span>
            <select
              name="color"
              onChange={handleFilter}
              className="rounded-md border px-3 py-1 appearance-none mr-2"
            >
              <option disabled>Color</option>
              <option>white</option>
              <option>black</option>
              <option>red</option>
              <option>blue</option>
              <option>yellow</option>
              <option>green</option>
            </select>
            <select
              name="size"
              onChange={handleFilter}
              className="rounded-md border px-3 py-1 appearance-none"
            >
              <option disabled>Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div>
            <span className="text-lg font-medium mr-3">Sort Products:</span>
            <select
              name="sort"
              onChange={(e) => setSort(e.target.value)}
              className="rounded-md border px-3 py-1 appearance-none"
            >
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products cat={cat} filter={filter} sort={sort}/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductList;
