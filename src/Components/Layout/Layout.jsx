import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../Routers/Routerr'; // Correct the import
import Home from '../../Pages/Home';
import Helmet from '../Helmet/Helmet';
import HeroSlider from '../UI/HeroSlider';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div><Routers /></div>
      <Home/>
      <div><Routers /></div>
      <HeroSlider/>
      <div><Routers /></div>
      <Footer />
    </Fragment>
  );
}

export default Layout;
