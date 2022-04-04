/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Products.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductServices } from "../../services/productServices";
import { addToCart } from '../../redux/cart.slice';
import { useDispatch } from 'react-redux'
import Link from 'next/link'


const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    ProductServices().then(res => setProducts(res.data))
  }, [])


  const [products, setProducts] = useState([])

  return (
    <>
      {products?.map((products) => {
        return (
          <div className={styles.background} key={products.id}>
            <Link href={'/' + products.id}>
              <a>
                <div className={styles.background__image}>
                  <img
                    className={styles.background__image__logo}
                    src={products.image}
                    alt="Product 1"
                  />
                </div>

                <div className={styles.background__description}>
                  <span className={styles.background__description__title}>{products.category}</span>
                  <p className={styles.background__description__desc}>{products.title.length > 50 ? `${products.title.substring(0, 50)}...` : products.title}</p>
                  <h5 className={styles.background__description__price}>$ {products.price}</h5>
                </div>
              </a>
            </Link>

            <button
              className={styles.background__addToCart}
              onClick={() => dispatch(addToCart(products))}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              Add To Cart
            </button>
          </div>
        )
      })}
    </>

  );
};

export default Products;
