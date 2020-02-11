import React, { useState } from 'react';
import styled from 'styled-components';
import MainLogo from './MainLogo';
import SubNav from './SubNav';
import MainNav from './MainNav';
import Culture from './Culture';
import { FlexWrapper } from '../../styles';

const StyledHeader = styled.header`
  width: 104.8rem;
  margin: 0 auto;
`;

const HeaderWrapper = styled(FlexWrapper)`
  height: 7.8rem;
`;

function Header() {
  const [selectCulture, setSelectCuture] = useState(false);

  function displayCultureModal() {
    setSelectCuture(true);
  }

  function closeCultureModal() {
    setSelectCuture(false);
  }

  function configCulture() {
    // set parameters for api request
    setSelectCuture(false);
  }
  return (
    <>
      <StyledHeader>
        <HeaderWrapper justify="space-between" align="center">
          <MainLogo />
          <SubNav displayModal={displayCultureModal} />
        </HeaderWrapper>
        <MainNav />
      </StyledHeader>
      {selectCulture && (
        <Culture closeModal={closeCultureModal} configCulture={configCulture} />
      )}
    </>
  );
}

export default Header;
