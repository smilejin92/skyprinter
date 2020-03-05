import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Main from '../components/Main/Home';
import Footer from '../components/Footer';
import GlobalLink from '../components/GlobalLink';
import Copyright from '../components/Copyright';

const Home = () => (
  <>
    <HeaderContainer />
    <Main />
    <Footer />
    <GlobalLink />
    <Copyright />
  </>
);

export default Home;
