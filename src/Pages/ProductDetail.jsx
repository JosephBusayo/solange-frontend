import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Footer } from './../Components/Footer';
import { Navbar } from './../Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetail } from "../Redux/Actions/ProductActions";
import Loading from "./../Components/LoadingError/Loading";
import Message from "./../Components/LoadingError/Error";
import Rating from "./../Components/Rating";

export function ProductDetail() {
  const { id } = useParams(); // Extract the product ID from the URL 
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;
  useEffect(() => {
    dispatch(listProductDetail(id));
  }, [dispatch, id]);

  const AddToCartHandler = (e) => {
    e.preventDefault();

    navigate(`/cart/${id}?qty=${qty}`)
  }
  return (
    <section className="bg-gray-100 min-h-screen">
      <Navbar />
      {(loading || !product) && <Loading />}
      {error && <Message variant="alert-danger">{error}</Message>}
      {product && (
        <div className="container mx-auto mt-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="md:w-1/2">
              <div className="w-full md:max-w-md mx-auto rounded-md overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="mt-3 text-gray-600">{product.desc}</p>

              <div className="mt-6">
                <h6 className="font-semibold">Price</h6>
                <span>${product.price}</span>
              </div>
              <div className="mt-2">
                <h6 className="font-semibold">Status</h6>
                {product.countInStock > 0 ? (
                  <span className="text-green-500">In Stock</span>
                ) : (
                  <span className="text-red-500">Unavailable</span>
                )}
              </div>
              <div className="mt-2">
                <h6 className="font-semibold">Reviews</h6>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </div>
              {product.countInStock > 0 && (
                <>
                  <div className="mt-2">
                    <h6 className="font-semibold">Quantity</h6>
                    <select 
                    value={qty}
                    onChange={(e) => setQty(e.target.value)} 
                    className="block w-24 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button onClick={AddToCartHandler} className="mt-4 hover:text-black hover:bg-[#5DD9C1] bg-black text-[#5DD9C1] font-bold rounded-md  py-4 px-8">
                    Add To Cart 
                  </button>
                </>
              )}
            </div>
          </div>

          {/* RATING */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t-2 pt-6">
            <div className="w-full md:w-1/2">
              <h6 className="mb-3 font-semibold">REVIEWS</h6>
              <Message variant="alert-info mt-3">No Reviews</Message>
            </div>

            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <h6 className="font-semibold">WRITE A CUSTOMER REVIEW</h6>
              <form className="mt-4">
                <div className="mt-4">
                  <strong>Rating</strong>
                  <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                </div>
                <div className="mt-4">
                  <strong>Comment</strong>
                  <textarea
                    rows="3"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button className=" text-center mt-4 hover:text-black hover:bg-[#5DD9C1] bg-black text-[#5DD9C1] font-bold rounded-md w-full py-4 px-8">
                    SUBMIT
                  </button>
                </div>
              </form>
              <div className="mt-4">
                <Message variant="alert-warning">
                  Please{" "}
                  <Link to="/login" className="font-semibold">
                    Login
                  </Link>{" "}
                  to write a review
                </Message>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
}