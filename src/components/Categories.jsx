import { categories } from "../data";
import CategoryItem from "./CategoryItem";

function Categories() {
  return (
    <div className="px-5 md:py-0 py-8 flex md:flex-row flex-col gap-5 justify-between mx-auto max-w-screen-xl">
      {categories.map((item) => {
        return <CategoryItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Categories;
