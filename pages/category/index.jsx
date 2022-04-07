/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { FetCategory, FetchProductByCategory } from "../../services/productServices";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Products.module.scss";

export const getStaticProps = async (context) => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const data = await res.json();
  return {
    props: {
      categories: data
    },
  }
};


const Category = (props) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const menuItem = props.categories;

  const filterProducts = (cate) => {
    FetchProductByCategory(cate).then(res => setFilteredProducts(res.data))
    console.log("filteredProduct", filteredProducts);
  };

  return (
    <>
      {menuItem.map((item, index) => {
        return (
          <button key={index} onClick={() => filterProducts(item)}>
            {item}
          </button>
        );
      })}

      {filteredProducts?.map((products) => {
        return (
          <div className={styles.background} key={products.id}>
            <Link href={"/" + products.id}>
              <a>
                <div className={styles.background__image}>
                  <img
                    className={styles.background__image__logo}
                    src={products.image}
                    alt="Product 1"
                  />
                </div>

                <div className={styles.background__description}>
                  <span className={styles.background__description__title}>
                    {products.category}
                  </span>
                  <p className={styles.background__description__desc}>
                    {products.title.length > 50
                      ? `${products.title.substring(0, 50)}...`
                      : products.title}
                  </p>
                  <h5 className={styles.background__description__price}>
                    $ {products.price}
                  </h5>
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
        );
      })}
    </>
  );
};

export default Category;
