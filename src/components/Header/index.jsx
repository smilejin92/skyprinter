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
  const [displayCulture, setDisplayCulture] = useState(false); // 국가 및 화폐 설정 팝업
  const [countries, setCountries] = useState([]); // 설정할 수 있는 국가 목록
  const [currencies, setCurrencies] = useState([]); // 설정할 수 있는 화폐 목록
  const [selectedCulture, setSelectedCulture] = useState({
    locale: 'ko-KR',
    country: 'KR',
    currency: 'KRW',
  }); // 디폴트 설정

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
        // 1. sort by Name
        data.Countries.sort((c1, c2) => (c1.Name < c2.Name ? -1 : 1));
        // 2. add to array
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
        // 1. sort data
        data.Currencies.sort((c1, c2) => (c1.Code < c2.Code ? -1 : 1));

        const popular = [];
        const rest = [];

        data.Currencies.forEach(({ Code, Symbol: symbol }) => {
          const option = (
            <option key={uuid.v4()} value={Code}>
              {Code} - {symbol}
            </option>
          );

          if (Code === 'EUR' || Code === 'GBP' || Code === 'USD')
            popular.push(option);
          else rest.push(option);
        });

        setCurrencies([
          <optgroup key={uuid.v4()} label="인기 통화">
            {popular}
          </optgroup>,
          <optgroup key={uuid.v4()} label="기타 통화">
            {rest}
          </optgroup>,
        ]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function displayCultureModal() {
    setDisplayCulture(true);
  }

  function closeCultureModal() {
    setDisplayCulture(false);
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
      {displayCulture && (
        <Culture
          closeModal={closeCultureModal}
          setDisplayCulture={setDisplayCulture}
          selectedCulture={selectedCulture}
          setSelectedCulture={setSelectedCulture}
          countries={countries}
          currencies={currencies}
        />
      )}
    </>
  );
}

export default Header;
