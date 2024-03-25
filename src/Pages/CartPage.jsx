import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './../Redux/Actions/CartActions';

export const CartPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2)
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const checkoutHandler = () => {
    navigate(`/login?redirect=shipping`)
  }

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(id))
  }
  return (
    <>
      <Navbar />
      {/* Cart */}
      <div className="flex flex-col justify-center text-center align-center">
        {
          cartItems.length === 0 ? (
            <div className=" alert alert-info text-center mt-3">
              Your cart is empty
              <Link
                className="btn btn-success mx-5 px-5 py-3"
                to="/"
                style={{
                  fontSize: "12px",
                }}
              >
                SHOPPING NOW
              </Link>
            </div>
          ) : (
            <>
              <div className=" alert alert-info text-center mt-3">
                Total Cart Products
                <Link className="text-success mx-2" to="/cart">
                  ({cartItems.length})
                </Link>
              </div>

              {/* cartiterm */}
              <div className="flex flex-wrap md:flex-row text-center justify-center gap-2 md:gap-6">
                {
                  cartItems.map((item, index) => (
                    <div className="cart-iterm w-[240px]" key={index}>
                      <div
                        onClick={() => removeFromCartHandler(item.product)}
                        className="remove-button d-flex justify-content-center align-items-center">
                        <i className="fas fa-times"></i>
                      </div>
                      <div className="cart-image col-md-3">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-text col-md-5 d-flex align-items-center">
                        <Link to={`/product/${item.product}`}>
                          <h4>{item.name}</h4>
                        </Link>
                      </div>
                      <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                        <h6>QUANTITY</h6>
                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>

                      </div>
                      <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                        <h6>PRICE</h6>
                        <h4>${item.price}</h4>
                      </div>
                    </div>
                  ))
                }
              </div>


              {/* End of cart iterms */}
              <div className="total">
                <span className="sub">total:</span>
                <span className="total-price">${total}</span>
              </div>
              <hr />
              <div className="cart-buttons flex flex-col align-center text-center md:flex-row justify-center gap-4">
                <Link to="/home" className="col-md-6 w-[100%]">
                  <button>Continue To Shopping</button>
                </Link>
                {
                  total > 0 && (
                    <div className="w-[100%] ">
                      <button onClick={checkoutHandler}>
                        Checkout
                      </button>
                    </div>
                  )
                }

              </div>
            </>
          )
        }
      </div>
      <Footer />
    </>
  );
};
