import React from 'react';
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

  return (
    <div className={styles.container}>
      <Image src="/images/logo.png" alt="" width="127" height="40" />
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>Home</li>
        <li className={styles.menu__item}>Category</li>
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