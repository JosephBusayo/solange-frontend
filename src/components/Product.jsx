import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// import styles from "./Product.module.css";

export function Product() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:5000/api/products/65dff32d840f27933d86dc12")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!product) {
    return (
      <div>
        <span class="loader"></span>
      </div>
    );
  }

  return (
    <div className="m-5">
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div>
          <Link to="/">
            <button>
              <FaArrowLeft
                size={40}
                className="border-2 p-2 rounded-full hover:scale-105 bg-slate-300"
              />
            </button>
          </Link>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded-2xl border border-gray-200"
              src={product.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4">{/* Star icons */}</div>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                {/* Quantity component */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {product.price}
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add to cart
                </button>
                {/* Like button */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
