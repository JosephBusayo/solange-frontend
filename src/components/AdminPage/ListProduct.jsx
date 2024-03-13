import React, { useEffect, useState } from "react";
import "./ListProduct.css";
const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchinfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((resp) => resp.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchinfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
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
        <p>OLd Price</p>
        <p>New Price</p>
        <p>Category</p>
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
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    remove_product(product.id);
                  }}
                  className="listproduct-remove-icon"
                  src={cross_icon}
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
