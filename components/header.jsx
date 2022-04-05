import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Header = () => {

  const cart = useSelector(state => state.cart);
  const getItemCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  }

  useEffect(() => {
    document.removeEventListener("mousedown", handleClickOutside);
  }, [])

  const categoryList = ["men's clothing", 'jewelery', 'electronics', "women's clothing"];

  const container = React.createRef();
  const [state, setState] = useState({
    open: false,
  });

  const handleOnCLick = () => {
    setState((state) => {
      return {
        open: !state.open,
      }
    })
  }

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setState({
        open: false,
      })
    }
  }

  return (
    <div className={styles.container}>
      <Image src="/images/logo.png" alt="" width="127" height="40" />
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link href="/category">
            <a>Category</a>
          </Link>
        </li>
        {/* <li className={styles.menu__item}>
          <button onClick={handleOnCLick}>Category</button>
          <div>
            {state.open && (
              <ul className={styles.list__dropdown}>
                {categoryList.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })}
              </ul>
            )}
          </div>
        </li> */}
        <li className={styles.menu__item}>About Us</li>
        <li className={styles.menu__item}>Contact Us</li>
      </ul>
      <Link href="/cart">
        <a className={styles.cart}>
          <FontAwesomeIcon
            icon={faCartShopping}
          />
          <p className={styles.cart__total}>{getItemCount()}</p>
        </a>
      </Link>

    </div>
  )
}

export default Header