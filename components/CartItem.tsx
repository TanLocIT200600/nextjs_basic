import React from "react";
import styles from "../styles/CartItem.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = () => {
  return (
    <div className={styles.background}>
      <Image
        src="/images/product-1.jpg"
        alt="Product 1"
        width="300"
        height="300"
        className={styles.background__image}
      />
      <div className={styles.background__description}>
        <span className={styles.background__description__title}>Watches</span>
        <p className={styles.background__description__desc}>Xiaomi Mi Band 5</p>
        <h5 className={styles.background__description__price}>$199.00</h5>
      </div>
      <button className={styles.background__addToCart}>
        <FontAwesomeIcon icon={faCartPlus} />
        Add To Cart
      </button>
    </div>
  );
};

export default CartItem;
