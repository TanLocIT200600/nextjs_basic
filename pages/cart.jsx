import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/CartPage.module.scss';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cart.slice';
import Link from 'next/link';

const Cart = () => {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price, 0
    )
  }

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <>
          <h1>Your Cart is Empty!</h1>
          <Link href="/"><a>Buy Now</a></Link>
        </>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className={styles.body}>
              <div className={styles.image}>
                <img src={item.image} height="90" width="65" />
              </div>
              <p>{item.title}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
        </>
      )}
    </div>
  );
};

export default Cart