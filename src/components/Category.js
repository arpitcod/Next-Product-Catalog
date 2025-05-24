import React from "react";

const Category = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className="flex gap-2 flex-wrap justify-center my-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-1 rounded-md border ${
            selectedCategory === category ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
