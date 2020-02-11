import React, { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from './images/sky-pringer-logo.png';
import './App.scss';
import {
  Header,
  HiddenHeader,
  Image,
  FlexWrapper,
  FlexList,
  SubMenuButton,
  LoginButton,
  MainMenuButton,
  BgWrapper,
  SearchArea,
  SearchAreaTitle,
  SearchFormWrapper,
  Flag,
  Currency,
  BgTailWrapper,
  BgTail,
} from './styled-components';

import TripIdea from './TripIdea';
import MonthSpecialProduct from './MonthSpecialProduct';
import RecommendProduct from './RecommendProduct';
import Slogan from './Slogan';
import Tripplan from './Tripplan';
import GlobalLink from './GlobalLink';
import Footer from './Footer';
import Culture from './components/Culture';

function App() {
  const [selectCountry, setSelectCountry] = useState(false);

  function displaySelectCountry() {
    setSelectCountry(true);
  }

  function hideSelectCountry() {
    setSelectCountry(false);
  }

  function configCulture() {
    setSelectCountry(false);
    // set configuration
  }

  return (
    <BrowserRouter>
      <Header>
        <FlexWrapper justify="space-between" align="center" height="78">
          <h1>
            <Link to="/">
              <Image src={logo} alt="스카이프린터 로고" width="176" />
            </Link>
          </h1>
          <nav>
            <HiddenHeader>언어 설정 및 로그인 메뉴</HiddenHeader>
            <FlexList
              fontSize="1.2"
              width="353"
              justify="space-around"
              align="center"
            >
              <li>
                <a
                  className="help"
                  href="https://help.skyscanner.net/hc/ko?skyCurrency=currency_krw&skyLanguage=lang_ko&skyMarket=kr_skyscanner&_mp=16ff4c302b1108-0342ccc764089b-b383f66-144000-16ff4c302b28f7_1581145007784&preferences=f3fa260e084e455dab664acd265c9a67&traveller_context=f3fa260e-084e-455d-ab66-4acd265c9a67&_ga=2.91829530.163945663.1581136578-799128569.1580359418"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  도움말
                </a>
              </li>
              <li>
                <SubMenuButton onClick={displaySelectCountry} width="195">
                  <FlexWrapper justify="space-around" align="center">
                    <span className="locale">한국어</span>
                    <Flag
                      src={`https://images.skyscnr.com/images/country/flag/header/${'kr'}.png`}
                      alt="국기"
                    />
                    <span className="market">{'대한민국'}</span>
                    <Currency>{'₩ KRW'}</Currency>
                  </FlexWrapper>
                </SubMenuButton>
              </li>
              <li>
                <LoginButton width="94">로그인</LoginButton>
              </li>
            </FlexList>
          </nav>
        </FlexWrapper>
        <nav>
          <HiddenHeader>검색 메뉴</HiddenHeader>
          <FlexList
            justify="space-between"
            align="center"
            width="283"
            height="36"
          >
            <li>
              <MainMenuButton active>
                <FlexWrapper justify="space-around" align="center">
                  <svg className="logo" viewBox="0 0 24 24">
                    <path d="M3.455 8.78a.775.775 0 0 1 .952.224l1.472 1.91 1.816-.267a2.852 2.852 0 0 1 .536-.051h9.862a5.099 5.099 0 0 1 2.438.62.944.944 0 0 1-.072 1.67l-.046.021a5.1 5.1 0 0 1-2.194.497h-4.314l-3.663 5.867A1.546 1.546 0 0 1 8.93 20H7.78l2.007-5.858v-.738h-1.53a2.865 2.865 0 0 1-.589-.062l-1.765-.288-1.509 1.958a.775.775 0 0 1-.929.237.786.786 0 0 1-.419-.984L3.862 12 3.06 9.749a.785.785 0 0 1 .395-.97zM8.929 4a1.545 1.545 0 0 1 1.312.729l3.19 4.985H9.749L7.778 4z" />
                  </svg>
                  <span>항공권</span>
                </FlexWrapper>
              </MainMenuButton>
            </li>
            <li>
              <MainMenuButton disabled>
                <FlexWrapper justify="space-around" align="center">
                  <svg className="logo" viewBox="0 0 24 24">
                    <path d="M3.827 6.65c.428 0 .81.15.855.342l.005.04v3.196a2.356 2.356 0 0 0 2.16 2.438l.11.004 13.878.02c.371 0 0 4.59 0 4.971a.67.67 0 0 1-1.32.184l-.014-.07-.32-1.948H4.687l-.352 1.949a.67.67 0 0 1-1.331-.045L3 17.661V7.031c0-.21.37-.381.827-.381zm14.674 2.228a1.887 1.887 0 0 1 1.936 1.834v.087a.891.891 0 0 1-.914.865h-8.859a.891.891 0 0 1-.914-.865v-.087a1.887 1.887 0 0 1 1.936-1.834zM7.5 7.764a1.672 1.672 0 1 1 0 3.343 1.672 1.672 0 1 1 0-3.343z" />
                  </svg>
                  <span>호텔</span>
                </FlexWrapper>
              </MainMenuButton>
            </li>
            <li>
              <MainMenuButton disabled>
                <FlexWrapper justify="space-around" align="center">
                  <svg className="logo" viewBox="0 0 24 24">
                    <path d="M6 14a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 6 14zm12 0a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 18 14zM9.854 7.5a8.552 8.552 0 0 1 2.872.45 15.534 15.534 0 0 1 3.602 2.466 13.077 13.077 0 0 1 4.842 1.1c.54.28.691 1.294.816 2.14.14.946-.812 1.406-1.466 1.638l-.037.017A2.5 2.5 0 1 0 15.54 16H8.45a2.5 2.5 0 1 0-4.95-.5q0 .09.006.183c-.161-.043-.249-.076-.293-.09a1.815 1.815 0 0 1-1.185-2.101v-.003l.503-2.868h10.923c.601 0 .842-.595.271-.981a5.71 5.71 0 0 0-1.326-.72 7.612 7.612 0 0 0-2.546-.394 13.162 13.162 0 0 0-2.681.3c-1.157.243-2.692.69-3.658 1.002a.457.457 0 0 1-.552-.24l-.022-.054-.004-.01a.478.478 0 0 1 .277-.608 27.517 27.517 0 0 1 3.76-1.095 14.094 14.094 0 0 1 2.88-.32z" />
                  </svg>
                  <span>렌터카</span>
                </FlexWrapper>
              </MainMenuButton>
            </li>
          </FlexList>
        </nav>
      </Header>
      <main>
        <BgWrapper direction="column">
          <SearchArea direction="column" justify="space-evenly" minHeight="55">
            <HiddenHeader>검색 영역</HiddenHeader>
            <SearchAreaTitle>어디로 떠나볼까요?</SearchAreaTitle>
            <SearchFormWrapper></SearchFormWrapper>
          </SearchArea>
          <BgTail>
            <svg viewBox="0 0 14832 55">
              <path d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z" />
            </svg>
          </BgTail>
        </BgWrapper>
        <div className="product-wrapper">
          <HiddenHeader>상품 영역</HiddenHeader>
          <RecommendProduct />
          <TripIdea />
          <MonthSpecialProduct />
        </div>
        <Slogan />
        <Tripplan />
      </main>
      <Footer />
      <GlobalLink />
      <small> &copy; Skyscanner Ltd 2002-2020</small>
      {selectCountry && (
        <Culture
          hideSelectCountry={hideSelectCountry}
          configCulture={configCulture}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
