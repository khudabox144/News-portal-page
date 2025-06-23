import React, { use } from "react";
import { NavLink } from "react-router";
const categoriesPromise = fetch("/demo-data/categories.json").then(
  (res) => res.json()
);
const LeftAside = () => {
  const categories = use(categoriesPromise);
//   console.log(categories);
  return (
    <div>
      <h3 className="mb-5" >All Categories</h3>
      <div className="border-none flex flex-col gap-2.5" >
        {categories.map((category) => (
          <NavLink key={category.id} to={`/category/${category.id}`}  className={({ isActive }) => 
    ["flex flex-col btn text-accent border-none hover:bg-base-200", 
     isActive ? "bg-base-300" : "bg-base-100"].join(" ")
  }>
            {" "}
            {category.name}{" "}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
