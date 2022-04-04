/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../styles/CartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductServices } from "../services/productServices";
import { IProduct } from "../models/products";
import Link from "next/link"

const CartItem = () => {

  useEffect(() => {
    ProductServices().then(res => setProducts(res.data))
  }, [])


  const [products, setProducts] = useState([])
  console.log("Products", products);
  // console.log("productId: ", products.id);

  return (
    <>
      {products.map((item, index) => {
        return (
          <div className={styles.background} key={index}>
            <Link href={"/" + item.id}>

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
            </Link>

          </div>
        )
      })}
    </>

  );
};

export default CartItem;
