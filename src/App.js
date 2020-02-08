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
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-area">
            <div className="footer-item">
              <h3>탐색</h3>
              <ul className="footer-menu">
                <li className="footer-menu-list">
                  <a href="#"> 도시</a>
                  <a>
                    <span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    className="FooterLinkToggle_FooterLinkToggle__icon__1nUO9"
                    style="width: 1.125rem; height: 1.125rem;">
                    <path d="M10 10V5a2 2 0 1 1 4 0v5h5a2 2 0 1 1 0 4h-5v5a2 2 0 1 1-4 0v-5H5a2 2 0 1 1 0-4h5z">
                    </path>
                  </svg>
                  </span>
                  </a>
                  <ul className="footer-sunmenu">
                    <li className="footer-submenu-list"><a href="#">제주</a></li>
                    <li className="footer-submenu-list"><a href="#">오사카</a></li>
                    <li className="footer-submenu-list"><a href="#">서울</a></li>
                    <li className="footer-submenu-list"><a href="#">후쿠오카</a></li>
                    <li className="footer-submenu-list"><a href="#">도쿄</a></li>
                    <li className="footer-submenu-list"><a href="#">홍콩</a></li>
                    <li className="footer-submenu-list"><a href="#">방콕</a></li>
                  </ul>
                </li>
                <li className="footer-menu-list">
                  <a>주말 여행</a>
                  <a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        className="FooterLinkToggle_FooterLinkToggle__icon__1nUO9"
                        style="width: 1.125rem; height: 1.125rem;">
                        <path d="M10 10V5a2 2 0 1 1 4 0v5h5a2 2 0 1 1 0 4h-5v5a2 2 0 1 1-4 0v-5H5a2 2 0 1 1 0-4h5z">
                        </path>
                      </svg>
                    </span>
                  </a>
                  <ul className="footer-sunmenu">
                    <li className="footer-submenu-list"><a href="#">홍콩</a></li>
                    <li className="footer-submenu-list"><a href="#">부산</a></li>
                    <li className="footer-submenu-list"><a href="#">대구</a></li> 
                    <li className="footer-submenu-list"><a href="#">서울</a></li>
                    <li className="footer-submenu-list"><a href="#">제주</a></li>
                    <li className="footer-submenu-list"><a href="#">도쿄</a></li>
                  </ul>
                </li>
                <li className="footer-menu-list"><a href="#">공항</a></li>
                <li className="footer-menu-list">
                  <a>국가</a>
                  <a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        className="FooterLinkToggle_FooterLinkToggle__icon__1nUO9"
                        style="width: 1.125rem; height: 1.125rem;">
                        <path d="M10 10V5a2 2 0 1 1 4 0v5h5a2 2 0 1 1 0 4h-5v5a2 2 0 1 1-4 0v-5H5a2 2 0 1 1 0-4h5z">
                        </path>
                      </svg>
                    </span>
                  </a>
                  <ul className="footer-sunmenu">
                    <li className="footer-submenu-list"><a href="#">대한민국</a></li>
                    <li className="footer-submenu-list"><a href="#">일본</a></li>
                    <li className="footer-submenu-list"><a href="#">중국</a></li>
                  </ul>
                </li>
                <li className="footer-menu-list"><a href="#">항공사</a></li>
                <li className="footer-menu-list"><a href="#">항공권</a></li>
                <li className="footer-menu-list"><a href="#">렌터카</a></li>
                <li className="footer-menu-list"><a href="#">앱</a></li>
              </ul>
            </div>

            <div className="footer-item">
              <h3>파트너</h3>
              <ul className="footer-menu">
                <li className="footer-menu-list"><a href="#">스카이스캐너와 협력</a></li>
                <li className="footer-menu-list"><a href="#">스카이스캐너와 광고하기</a></li>
                <li className="footer-menu-list"><a href="#">여행인 사이트</a></li>
                <li className="footer-menu-list"><a href="#">제휴사</a></li>
                <li className="footer-menu-list"><a href="#">여행 API</a></li>
              </ul>
            </div>

            <div className="footer -item">
              <h3>회사</h3>
              <ul className="footer-menu">
                <li className="footer-menu-list"><a href="#">회사 소개</a></li>
                <li className="footer-menu-list"><a href="#">스카이스캐너와 함께해야 하는 이유</a></li>
                <li className="footer-menu-list"><a href="#">미디어</a></li>
                <li className="footer-menu-list"><a href="#">스카이스캐너 식구들</a></li>
                <li className="footer-menu-list"><a href="#">지속가능한 여행</a></li>
                <li className="footer-menu-list"><a href="#">브랜드 스토리</a></li>
                <li className="footer-menu-list"><a href="#">회사 정보</a></li>
                <li className="footer-menu-list"><a href="#">채용 정보</a></li>
                <li className="footer-menu-list"><a href="#">여행 특징 및 뉴스</a></li>
                <li className="footer-menu-list"><a href="#">쿠키 정책</a></li>
                <li className="footer-menu-list"><a href="#">개인정보처리방침</a></li>
                <li className="footer-menu-list"><a href="#">서비스 약관</a></li>
              </ul>
            </div>

            <div className="footer-item">
              <h3>도움말</h3>
              <ul className="footer-menu">
                <li className="footer-menu-list"><a href="#">도움말</a></li>
                <li className="footer-menu-list"><a href="#">개인정보 설정</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <section className="global-link">
            <div className="global-title">
              <h3> 전세계 사이트</h3>
            </div>
            < ul>
              <li><a href="#">
                <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'uk'}.png`}
                      alt="국기"
                    /><span>Cheap flight</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'au'}.png`}
                      alt="국기"
                    /><span>Australia - Cheap flights</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'cn'}.png`}
                      alt="국기"
                    /><span>中国 - 机票</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'hkg'}.png`}
                      alt="국기"
                    /><span>香港 - 機票</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'in'}.png`}
                      alt="국기"
                    /><span>India - Flight tickets</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'id'}.png`}
                      alt="국기"
                    /><span>Indonesia - Tiket Pesawat</span></a></li>
              <li><a href="#">
                <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'jp'}.png`}
                      alt="국기"
                    /><span>日本 - 航空券</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'my'}.png`}
                      alt="국기"
                    /><span>Malaysia - flights</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'mx'}.png`}
                      alt="국기"
                    /><span>México - vuelos</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'nz'}.png`}
                      alt="국기"
                    /><span>New Zealand - Cheap flights</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'ph'}.png`}
                      alt="국기"
                    /><span>Philippines - flights</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'ru'}.png`}
                      alt="국기"
                    /><span>Россия - авиабилеты</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'sg'}.png`}
                      alt="국기"
                    /><span>Singapore - flights</span></a></li>
              <li><a href="#"><img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'kr'}.png`}
                      alt="국기"
                    /><span>대한민국 - 항공권</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'tw'}.png`}
                      alt="국기"
                    /><span>台灣 - 機票</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'th'}.png`}
                      alt="국기"
                    /><span>ไทย - ตั๋วเครื่องบิน</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'us'}.png`}
                      alt="국기"
                    /><span>USA - flights</span></a></li>
              <li><a href="#">
              <img
                      src={`https://images.skyscnr.com/images/country/flag/header/${'vn'}.png`}
                      alt="국기"
                    /><span>Việt Nam - các chuyến bay</span></a></li>
            </ul>
            <div>가격비교를 통해 최저가 항공권을 예약하고 즐거운 해외여행을 떠나보세요</div>
            <small> &copy; Skyscanner Ltd 2002-2020</small>
          </section>
        </div>
      </footer>
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
