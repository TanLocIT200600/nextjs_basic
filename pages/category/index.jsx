/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { ProductServices } from '../../services/productServices';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/Products.module.scss'

const Category = () => {

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProduct, setfilteredProduct] = useState(null);
  useEffect(() => {
    ProductServices().then(res => setFilteredProducts(res.data))
  }, [])
  const menuItem = ["men's clothing", 'jewelery', 'electronics', "women's clothing"];

  const filterProducts = (cate) => {
    const newListProduct = filteredProducts.filter((newItem) => {
      return newItem.category === cate;
    });
    setfilteredProduct(newListProduct);
    console.log("newListProduct", newListProduct);
  }

  return (
    <>
      {
        menuItem.map((item, index) => {
          return (
            <button key={index}
              onClick={() => filterProducts(item)}
            >
              {item}
            </button>
          )
        })
      }

      {filteredProduct?.map((products) => {
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
  )
}

export default Category