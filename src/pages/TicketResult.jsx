import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Main from '../components/Main/TicketResult';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import withTest from '../hocs/withTest';

const TicketResult = ({ location, match }) => (
  <>
    <HeaderContainer width="144rem" />
    <Main />
    <Footer />
    <Copyright />
  </>
);

export default withTest(TicketResult);
