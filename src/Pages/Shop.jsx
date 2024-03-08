import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div id="#shop">
      <section className="bg-gray-50 py-10">
        <div className="text-center">
          <h1 className="font-semibold text-5xl font-dmsans">CATEGORIES</h1>
        </div>
      </section>
      <section className="py-10 bg-gray-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
            >
              <div>
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src={product.image} alt={product.name} />
                  <div className="flex items-center space-x-1.5 rounded-lg bg-[#f5deb3] px-4 py-1.5 text-white duration-100 hover:bg-[#b34348]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      {/* Path for the heart icon */}
                    </svg>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700">{product.name}</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {product.location}
                  </p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-orange-700">
                      ${product.price}
                    </p>

                    <div className="flex items-center space-x-1.5 rounded-lg bg-[#f5deb3] px-4 py-1.5 text-white duration-100 hover:bg-[#b34348]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        {/* Path for the shopping cart icon */}
                      </svg>
                      <Link to={`/product/${product.id}`}>
                        <button className="text-sm">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
