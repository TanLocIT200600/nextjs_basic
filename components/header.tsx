import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/logo.png" alt="" width="127" height="40" />

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <span className="input-group-text" id="basic-addon2">@example.com</span>
      </div>
    </div>
  )
}

export default Header