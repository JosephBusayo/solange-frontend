import React, { useEffect, useState } from "react";
import "./ListProduct.css";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchinfo = async () => {
    await fetch("https://solange.onrender.com/api/products")
      .then((resp) => resp.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchinfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:5000/removeproducts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchinfo();
  };
  return (
    <div className="list-product">
      <h1>ALL PRODUCT LIST</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Description</p>
        <p>Reviews</p>
        <p>Rating</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.price}</p>
                <p>${product.desc}</p>
                <p>${product.numReviews}</p>
                <p>${product.rating}</p>
                <img
                  onClick={() => {
                    remove_product(product.id);
                  }}
                  className="listproduct-remove-icon"
                  // src={cross_icon}
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
