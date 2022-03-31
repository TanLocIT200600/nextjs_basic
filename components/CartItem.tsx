/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../styles/CartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductServices } from "../services/productServices";
import { IProduct } from "../models/products";

const CartItem = () => {

  useEffect(() => {
    ProductServices().then(res => setProducts(res.data))
  }, [])


  const [products, setProducts] = useState<IProduct[]>([] || <p>loading ...</p>)
  console.log("Products", products);

  return (
    <>
      {products.map((item, index) => {
        return (
          <div className={styles.background} key={index}>
            <div className={styles.background__image}>
              <img
                className={styles.background__image__logo}
                src={item.image}
                alt="Product 1"
              />
            </div>

            <div className={styles.background__description}>
              <span className={styles.background__description__title}>{item.category}</span>
              <p className={styles.background__description__desc}>{item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}</p>
              <h5 className={styles.background__description__price}>$ {item.price}</h5>
              <button className={styles.background__addToCart}>
                <FontAwesomeIcon icon={faCartPlus} />
                Add To Cart
              </button>
            </div>

          </div>
        )
      })}
    </>

  );
};

export default CartItem;
