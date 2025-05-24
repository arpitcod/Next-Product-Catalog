// app/product/[id]/page.jsx
import Link from "next/link";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";

const getProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

const ProductDetailPage = async ({ params }) => {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="flex justify-center items-center border h-screen bg-gray-50 flex-col">
      <Link
        href="/"
        className="text-blue-50 py-2 px-5 rounded-md hover:bg-blue-800 transition-all bg-blue-600 mb-4 inline-block flex justify-center items-center gap-1 font-medium"
      >
        <IoHomeSharp className="text-lg" /> Back to Products
      </Link>
      <div className="p-4 shadow-md  mx-auto border max-w-prose sm:max-w-screen-md md:max-w-screen-lg  rounded-xl bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[300px] object-contain mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-blue-600 font-semibold text-lg">${product.price}</p>
        <p className="text-gray-500 italic">{product.category}</p>
         {/* <Link
        href="/"
        className="text-blue-50 py-2 px-5 rounded-md hover:bg-blue-800 transition-all bg-blue-600 mb-4  flex justify-center items-center gap-1 font-medium "
      >
        <IoHomeSharp className="text-lg" /> Back to Products
      </Link> */}
      </div>

      {/* <button className=" bg-blue-600 text-white py-2 px-5">Back to Home</button> */}
    </div>
  );
};

export default ProductDetailPage;
