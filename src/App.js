import React, { useState } from 'react';
import logo from './images/sky-pringer-logo.png';
import { Icon } from 'antd';

function App() {
  const [selectCountry, setSelectCountry] = useState(false);

  function displaySelectCountry() {
    setSelectCountry(true);
  }

  function hideSelectCountry() {
    setSelectCountry(false);
  }

  return (
    <>
      <header className="header">
        <h1 className="logo">
          <img src={logo} alt="스카이프린터 로고" />
        </h1>
        <nav className="main-navigation">
          <h2 className="a11y-hidden">검색 메뉴</h2>
          <ul className="search-menu">
            <li className="search-item active">
              <button>항공권</button>
            </li>
            <li className="search-item">
              <button disabled={true}>호텔</button>
            </li>
            <li className="search-item">
              <button disabled={true}>렌터카</button>
            </li>
          </ul>
        </nav>
        <nav className="sub-navigation">
          <h2 className="ally-hidden">언어 설정 및 로그인 메뉴</h2>
          <ul className="config-menu">
            <li className="config-item">
              <a
                className="help"
                href="https://help.skyscanner.net/hc/ko?skyCurrency=currency_krw&skyLanguage=lang_ko&skyMarket=kr_skyscanner&_mp=16ff4c302b1108-0342ccc764089b-b383f66-144000-16ff4c302b28f7_1581145007784&preferences=f3fa260e084e455dab664acd265c9a67&traveller_context=f3fa260e-084e-455d-ab66-4acd265c9a67&_ga=2.91829530.163945663.1581136578-799128569.1580359418"
                rel="noopener noreferrer"
                target="_blank"
              >
                도움말
              </a>
            </li>
            <li className="config-item">
              <button
                className="btn-select-country"
                onClick={displaySelectCountry}
              >
                <div className="config-item-wrapper">
                  <span className="display-locale">한국어</span>
                  <span className="display-market">
                    <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'kr'}.png`}
                      alt="국기"
                    />
                    {'대한민국'}
                  </span>
                  <span className="display-currency">
                    {/* code: 3글자, symbol: 기호 */}
                    {'₩'}
                    {'KRW'}
                  </span>
                </div>
              </button>
            </li>
            <li className="config-item">
              <button className="btn-login">로그인</button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="search-area-wrapper">
          <section className="search-area">
            <h2>검색 영역</h2>
          </section>
          <svg
            viewBox="0 0 14832 55"
            class="bpk-flare-bar_bpk-flare-bar__curve__3z1de"
          >
            <path d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z" />
          </svg>
        </div>
      </main>
      <footer className="footer">푸터 영역</footer>
      {selectCountry && (
        <div className="select-country-wrapper">
          <article className="select-country">
            <h2 className="select-country-title">국가 설정</h2>
            <button
              className="btn-close-select-country"
              onClick={hideSelectCountry}
            >
              <Icon type="close" />
            </button>
            <div className="select-locale">
              <label htmlFor="locale">언어</label>
              <select id="locale">
                <option>한국어 (대한민국)</option>
              </select>
            </div>
            <div className="select-market">
              <label htmlFor="market">국가/지역</label>
              <select id="market">{/* get list of markets */}</select>
            </div>
            <div className="select-currency">
              <label htmlFor="currency">통화</label>
              <select id="currency">{/* get list of currencies */}</select>
            </div>
            <div className="btn-group">
              <button className="btn-save-select-country">저장</button>
              <button
                className="btn-cancel-select-country"
                onClick={hideSelectCountry}
              >
                취소
              </button>
            </div>
          </article>
        </div>
      )}
    </>
  );
}

export default App;
