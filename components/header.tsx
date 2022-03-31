import React from 'react';
import styles from '../styles/Header.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/logo.png" alt="" width="127" height="40" />
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>Home</li>
        <li className={styles.menu__item}>Category</li>
        <li className={styles.menu__item}>About Us</li>
        <li className={styles.menu__item}>Contact Us</li>
      </ul>
      <div className={styles.cart}>
        <FontAwesomeIcon
          icon={faCartShopping}
        />
        <p className={styles.cart__total}>2</p>
      </div>

    </div>
  )
}

export default Header