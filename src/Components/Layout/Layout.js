import React from 'react'
import Header from './Header/Header';
import Container from './../../Container/Container';
import Section from './Section/Section';
import Products from './Products/Products';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <Container>
        <Header/>
        <Products/>
        <Section/>
        <Footer/>
    </Container>
  )
}

export default Layout