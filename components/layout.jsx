import React from 'react'
import Footer from './footer'
import Header from './header'
import styles from '../styles/Layout.module.scss'

const layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main__body}>
        {children}</div>
      <Footer />
    </div>
  )
}

export default layout