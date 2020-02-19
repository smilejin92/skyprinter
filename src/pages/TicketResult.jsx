import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Main from '../components/Main/TicketResult';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

const TicketResult = () => (
  <>
    <HeaderContainer width="144rem" />
    <Main />
    <Footer />
    <Copyright />
  </>
);

export default TicketResult;
