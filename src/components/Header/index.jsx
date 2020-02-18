import React, { useEffect } from 'react';
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

function Header({
  culture,
  country,
  countryName,
  currency,
  currencySymbol,
  countriesDOM,
  currenciesDOM,
  setCountries,
  setCurrencies,
  displayModal,
  hideModal,
  setCulture,
}) {
  // get country & currency lists as mounted
  useEffect(() => {
    setCountries();
    setCurrencies();
  }, [setCountries, setCurrencies]);

  return (
    <>
      <StyledHeader>
        <HeaderWrapper justify="space-between" align="center">
          <MainLogo />
          <SubNav
            country={country}
            countryName={countryName}
            currency={currency}
            currencySymbol={currencySymbol}
            displayModal={displayModal}
          />
        </HeaderWrapper>
        <MainNav />
      </StyledHeader>
      {culture && (
        <Culture
          country={country}
          currency={currency}
          countriesDOM={countriesDOM}
          currenciesDOM={currenciesDOM}
          setCulture={setCulture}
          hideModal={hideModal}
        />
      )}
    </>
  );
}

export default Header;
