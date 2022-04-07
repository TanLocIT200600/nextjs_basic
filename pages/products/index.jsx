/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Products.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../../redux/cart.slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Pagination from "../../components/pagination/Pagination";
import { fetchProductByLimit } from '../../services/productServices.js';


const Products = (props) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOnCLick = (number) => {
    fetchProductByLimit(number).then(res => {
      setProductsPerPage(res.data)
      setProducts(res.data)
    });
  }

  console.log(value);
  console.log("currentProducts", currentProducts);

  return (
    <>
      <div className={styles.filterProducts}>
        <label htmlFor="amountProducts">Number products per page: </label>

        <select onChange={(e) => {
          setValue(e.target.value)
          handleOnCLick(e.target.value)
        }}>
          <option selected value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      {products?.map((products) => {
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
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </>
  );
};

export default Products;
