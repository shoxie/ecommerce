import React, { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import Product from "./Product";

function Products({ cat, filter, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/products?category=${cat}` : "/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };

    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, products, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort(
          (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
        )
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="px-10 flex justify-between flex-wrap gap-2 mx-auto max-w-screen-xl">
      {cat
        ? filteredProducts.map((item) => {
            return <Product key={item._id} item={item} />;
          })
        : products.slice(0, 100).map((item) => {
            return <Product key={item._id} item={item} />;
          })}
      {cat &&
        (filteredProducts.length <= 0 ||
          products.slice(0, 100).length <= 0) && (
          <div className="w-full flex items-center text-center justify-center h-[50vh] text-3xl font-medium">
            No Thing is Found here
          </div>
        )}
    </div>
  );
}

export default Products;
