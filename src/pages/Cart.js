import React, { useState, useEffect, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout from "Layout";
import CartItem from "components/CartItem";
import axios from "commons/axios";
import { toast } from "react-toastify";

// use React hook instead of class
const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get("/carts").then((res) => setCarts(res.data));
  }, []);

  const totalPrice = useMemo(() => {
    const _totalPrice = carts
      .map((d) => d.mount * d.price)
      .reduce((a, value) => a + value, 0);
    return _totalPrice;
  }, [carts]);

  const updateCart = (cart) => {
    const newCarts = [...carts];
    const _index = newCarts.findIndex((d) => d.id === cart.id);
    newCarts.splice(_index, 1, cart);
    setCarts(newCarts);
  };

  const deleteCart = (cart) => {
    const _carts = carts.filter((d) => d.id !== cart.id);
    setCarts(_carts);
    toast.warning("Remove an item");
  };
  return (
    <Layout>
      <div className="cart-page">
        <span className="cart-title">Shopping Cart</span>
        <div className="cart-list">
          <TransitionGroup component={null}>
            {carts.map((cart) => (
              <CSSTransition classNames="cart-item" timeout={300} key={cart.id}>
                <CartItem
                  cart={cart}
                  key={cart.id}
                  updateCart={updateCart}
                  deleteCart={deleteCart}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        {carts.length === 0 ? <div className="no-cart">No items</div> : ""}

        <div className="cart-total">
          Total:
          <span className="total-price">{totalPrice}</span>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
