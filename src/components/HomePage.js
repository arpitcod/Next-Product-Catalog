"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";
import Link from "next/link";
import Navbar from "./Navbar";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchProduct,setSearchProduct] = useState("")

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          method: "GET",
        });

        const data = await response.json();

        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <>
    
    <Navbar handleOnChange={(e) => setSearchProduct(e.target.value)} />
    <div className="p-4">
      {isLoading ? (
       
          <Loader />
          // <p className="text-2xl font-bold text-center">Loading...............</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {filteredProducts?.map((product, index) => (
            <>
            <Link href={`/product/${product?.id}`} className="cursor-pointer">
                <div className="border p-2 rounded-lg shadow h-[400px] flex flex-col gap-2" key={index}>
                <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-[200px] object-contain"
                    
                />
                {/* <div className="flex flex-col gap-2"> */}
                <p className="font-semibold mt-2">{product?.title}</p>
                <p className="text-blue-600 text-lg">${product?.price}</p>
                <p className="text-gray-500">{product?.category}</p>
                {/* </div> */}
                </div>
            </Link>
            </>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default HomePage;
