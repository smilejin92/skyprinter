import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid';
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

const GET_COUNTRY_URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/ko-KR';
const GET_CURRENCY_URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies';
// const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

function Header() {
  const [selectCulture, setSelectCuture] = useState(false);
  const [countries, setCountries] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  // get country list as mounted
  useEffect(() => {
    (async () => {
      try {
        const headers = {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host':
            'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        };

        const { data } = await axios.get(GET_COUNTRY_URL, {
          headers,
        });
        setCountries(
          data.Countries.map(({ Code, Name }) => (
            <option key={uuid.v4()} value={Code}>
              {Name}
            </option>
          )),
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // get currency list as mounted
  useEffect(() => {
    (async () => {
      try {
        const headers = {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host':
            'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        };

        const { data } = await axios.get(GET_CURRENCY_URL, {
          headers,
        });

        setCurrencies(
          data.Currencies.map(({ Code, Symbol: symbol }) => (
            <option key={uuid.v4()} value={Code}>
              {Code} - {symbol}
            </option>
          )),
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
        <Culture
          closeModal={closeCultureModal}
          configCulture={configCulture}
          countries={countries}
          currencies={currencies}
        />
      )}
    </>
  );
}

export default Header;
