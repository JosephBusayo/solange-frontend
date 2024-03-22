import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Footer } from './../Components/Footer';
import { Navbar } from './../Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetail } from "../Redux/Actions/ProductActions";
import Loading from './../Components/LoadingError/Loading';
import Message from './../Components/LoadingError/Error';
import Rating from './../Components/Rating';



export function ProductDetail() {
  const { id } = useParams(); // Extract the product ID from the URL 
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productDetail = useSelector((state) => state.productDetail)
  const { loading, error, product } = productDetail
  useEffect(() => {
    dispatch(listProductDetail(id))
  }, [dispatch, id])

  const AddToCartHandler = (e) => {
    e.preventDefault();

    navigate(`/cart/${id}?qty=${qty}`)
  }
  return (
    <section>
      <Navbar />
      {(loading || product.length === 0) && <Loading />}
      {error && <Message variant="alert-danger">{error}</Message>}
      {product && (

        <div className="container single-product">
          <div className="flex flex-col text-center md:flex-row align-center">
            <div className="col-md-6">
              <div className="single-image">
                <img src={product.image} alt={product.name} />
              </div>
            </div>

            <div className="product-dtl mt-8">
              <div className="product-name">{product.name}</div>
              <p>{product.desc}</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Price</h6>
                  <span>${product.price}</span>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Status</h6>
                  {product.countInStock > 0 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>unavailable</span>
                  )}
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Reviews</h6>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </div>
                {product.countInStock > 0 ? (
                  <>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Quantity</h6>
                      <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>

                    </div>
                    <button onClick={AddToCartHandler} className="round-black-btn">Add To Cart</button>
                  </>
                ) : null}
              </div>
            </div>
          </div>

          {/* RATING */}
          <div className="flex flex-col md:flex-row mt-16 text-center md:text-left justify-between border-2 border-red-500">
            <div className="flex-1">
              <h6 className="mb-3">REVIEWS</h6>
              <Message variant={"alert-info mt-3"}>No Reviews</Message>
              <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                <strong>Admin Doe</strong>
                <Rating />
                <span>Jan 12 2021</span>
                <div className="alert alert-info mt-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h6>WRITE A CUSTOMER REVIEW</h6>
              <div className="my-4"></div>

              <form>
                <div className="my-4">
                  <strong>Rating</strong>
                  <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                </div>
                <div className="my-4">
                  <strong>Comment</strong>
                  <textarea
                    row="3"
                    className="col-12 bg-light p-3 mt-2 border-0 rounded"
                  ></textarea>
                </div>
                <div className="my-3">
                  <button className="col-12 bg-black border-0 p-3 rounded text-white">
                    SUBMIT
                  </button>
                </div>
              </form>
              <div className="my-3">
                <Message variant={"alert-warning"}>
                  Please{" "}
                  <Link to="/login">
                    " <strong>Login</strong> "
                  </Link>{" "}
                  to write a review{" "}
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