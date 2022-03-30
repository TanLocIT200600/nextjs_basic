import { AppProps } from 'next/app'
import React from 'react'
import Footer from './footer'
import Header from './header'

const layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default layout