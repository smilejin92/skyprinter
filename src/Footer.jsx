import React, { useState } from 'react';
import { HiddenHeader } from './styled-components';
import styled from 'styled-components';
import { FlexWrapper } from './styled-components';
import { Icon } from 'antd';

const BgFooter = styled.footer`
  background: tomato;
  color: white;
  padding: 3rem 0;
  background-color: #02122c;
  font-size: 1.6rem;
  border: none;
  svg {
    fill: #fff;
    width: 1.8rem;
    height: 1.8rem;
    pointer-events: none;
  }
`;

const FooterWrapper = styled(FlexWrapper)`
  width: 1048px;
  height: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  line-height: 1.5;
  justify-content: space-around;

  a:visited {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: white;
    text-decoration: underline;
  }
`;

const FooterItem = styled.div`
  width: calc((100% - 10.8rem) / 4);
  padding: 3rem 0;
`;

const FooterItemHeader = styled.h3`
  color: #ff7b59;
  font-size: 2.8rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1.2rem;
  line-height: 3rem;
`;

const FooterAddButton = styled.button`
  border: none;
  background: inherit;
  padding: 0;
  margin: 0;
  outline: none;
`;

const FooterAddSpan = styled.span`
  line-height: 1.8rem;
  display: inline-block;
  margin-top: 0.3rem;
  vertical-align: top;
`;

const FooterSubMenu = styled.ul`
  li {
    margin-left: 1.2rem;
  }
`;

function Footer() {
  const [visible, setVisible] = useState({
    city: false,
    trip: false,
    country: false,
  });

  const click = e => {
    console.dir(e.target.id);
    setVisible({ ...visible, [e.target.id]: !visible[e.target.id] });
  };

  return (
    <BgFooter>
      {console.log(visible)}
      <HiddenHeader>탐생 영역</HiddenHeader>
      <FooterWrapper>
        <FooterItem>
          <FooterItemHeader>탐색</FooterItemHeader>
          <ul className="footer-menu">
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/flights-to/cheap-flights-to-cities-all.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                도시
              </a>{' '}
              <FooterAddButton onClick={click}>
                <FooterAddSpan>
                  {visible.city ? (
                    <Icon id="city" type="minus" />
                  ) : (
                    <Icon id="city" type="plus" />
                  )}
                </FooterAddSpan>
              </FooterAddButton>
              {visible.city ? (
                <FooterSubMenu>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/flights-to/cju/cheap-flights-to-jeju-airport.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      제주
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/flights-to/osaa/cheap-flights-to-osaka.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      오사카
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/flights-to/sela/cheap-flights-to-seoul.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      서울
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/flights-to/fuk/cheap-flights-to-fukuoka-airport.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      후쿠오카
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/flights-to/tyoa/cheap-flights-to-tokyo.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      도쿄
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/flights-to/hkga/cheap-flights-to-hong-kong.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      홍콩
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/flights-to/bkkt/cheap-flights-to-bangkok.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      방콕
                    </a>
                  </li>
                </FooterSubMenu>
              ) : null}
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/city-breaks"
                target="_blank"
                rel="noopener noreferrer"
              >
                주말 여행
              </a>{' '}
              <FooterAddButton onClick={click}>
                <FooterAddSpan>
                  {visible.trip ? (
                    <Icon id="trip" type="minus" />
                  ) : (
                    <Icon id="trip" type="plus" />
                  )}
                </FooterAddSpan>
              </FooterAddButton>
              {visible.trip ? (
                <FooterSubMenu>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/city-breaks/hkga/hong-kong-city-breaks.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      홍콩
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/city-breaks/pusa/busan-city-breaks.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      부산
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/city-breaks/taea/daegu-city-breaks.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      대구
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/city-breaks/sela/seoul-city-breaks.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      서울
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/city-breaks/cjua/jeju-city-breaks.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      제주
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/city-breaks/tyoa/tokyo-city-breaks.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      도쿄
                    </a>
                  </li>
                </FooterSubMenu>
              ) : null}
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/airports/airports-of-the-world.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                공항
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/flights-to/cheap-flights-to-countries-all.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                국가
              </a>{' '}
              <FooterAddButton onClick={click}>
                <FooterAddSpan>
                  {visible.country ? (
                    <Icon id="country" type="minus" />
                  ) : (
                    <Icon id="country" type="plus" />
                  )}
                </FooterAddSpan>
              </FooterAddButton>
              {visible.country ? (
                <FooterSubMenu>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/flights-to/kr/cheap-flights-to-south-korea.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      대한민국
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/flights-to/jp/cheap-flights-to-japan.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      일본
                    </a>
                  </li>
                  <li className="footer-submenu-list">
                    <a
                      href="https://www.skyscanner.co.kr/flights-to/cn/cheap-flights-to-china.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      중국
                    </a>
                  </li>
                </FooterSubMenu>
              ) : null}
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/airlines-all.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                항공사
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                항공권
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/hotels?na=1&sd=2020-02-13&ed=2020-02-20&s-f_iplace=NRT"
                target="_blank"
                rel="noopener noreferrer"
              >
                호텔
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/car-hire?pick_up=NRT&pick_up_date=2020-02-13&drop_off=NRT&drop_off_date=2020-02-20"
                target="_blank"
                rel="noopener noreferrer"
              >
                렌터카
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/mobile.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                앱
              </a>
            </li>
          </ul>
        </FooterItem>
        <FooterItem>
          <FooterItemHeader>파트너</FooterItemHeader>
          <ul className="footer-menu">
            <li className="footer-menu-list">
              <a
                href="https://www.partners.skyscanner.net/?_mp=16fef6cbbb3822-0b0e76ca879f86-39617b0e-fa000-16fef6cbbb448a_1581227978863&preferences=c2aa3265599648d1889282c958ea3f04&traveller_context=c2aa3265-5996-48d1-8892-82c958ea3f04&_ga=2.141380338.1988065219.1581153801-355577210.1580269878&_gac=1.148014533.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                스카이스캐너와 협력
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.partners.skyscanner.net/advertising/advertise-with-skyscanner?_mp=16fef6cbbb3822-0b0e76ca879f86-39617b0e-fa000-16fef6cbbb448a_1581227988374&preferences=c2aa3265599648d1889282c958ea3f04&traveller_context=c2aa3265-5996-48d1-8892-82c958ea3f04&_ga=2.141380338.1988065219.1581153801-355577210.1580269878&_gac=1.148014533.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                스카이스캐너와 광고하기
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.partners.skyscanner.net/insights/travel-insight?_mp=16fef6cbbb3822-0b0e76ca879f86-39617b0e-fa000-16fef6cbbb448a_1581228002225&preferences=c2aa3265599648d1889282c958ea3f04&traveller_context=c2aa3265-5996-48d1-8892-82c958ea3f04&_ga=2.208432466.1988065219.1581153801-355577210.1580269878&_gac=1.80964965.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                여행인 사이트
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.partners.skyscanner.net/affiliates/affiliate-products?_mp=16fef6cbbb3822-0b0e76ca879f86-39617b0e-fa000-16fef6cbbb448a_1581228014204&preferences=c2aa3265599648d1889282c958ea3f04&traveller_context=c2aa3265-5996-48d1-8892-82c958ea3f04&_ga=2.208432466.1988065219.1581153801-355577210.1580269878&_gac=1.80964965.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                제휴사
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.partners.skyscanner.net/affiliates/travel-apis?_mp=16fef6cbbb3822-0b0e76ca879f86-39617b0e-fa000-16fef6cbbb448a_1581228026554&preferences=c2aa3265599648d1889282c958ea3f04&traveller_context=c2aa3265-5996-48d1-8892-82c958ea3f04&_ga=2.208432466.1988065219.1581153801-355577210.1580269878&_gac=1.80964965.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                여행 API
              </a>
            </li>
          </ul>
        </FooterItem>
        <FooterItem>
          <FooterItemHeader>회사</FooterItemHeader>
          <ul className="footer-menu">
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/about-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                회사 소개
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/about-us/why-skyscanner"
                target="_blank"
                rel="noopener noreferrer"
              >
                스카이스캐너와 함께해야 하는 이유
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/media"
                target="_blank"
                rel="noopener noreferrer"
              >
                미디어
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/about-us/our-people"
                target="_blank"
                rel="noopener noreferrer"
              >
                스카이스캐너 식구들
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/about-us/sustainability"
                target="_blank"
                rel="noopener noreferrer"
              >
                지속가능한 여행
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/about-us/brand"
                target="_blank"
                rel="noopener noreferrer"
              >
                브랜드 스토리
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/companydetails.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                회사 정보
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.net/jobs?_mp=16fef6cbbb3822-0b0e76ca879f86-39617b0e-fa000-16fef6cbbb448a_1581228110461&preferences=c2aa3265599648d1889282c958ea3f04&traveller_context=c2aa3265-5996-48d1-8892-82c958ea3f04&_ga=2.204229200.1988065219.1581153801-355577210.1580269878&_gac=1.124964600.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                채용 정보
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/news"
                target="_blank"
                rel="noopener noreferrer"
              >
                여행 특징 및 뉴스
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/media/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                쿠키 정책
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/media/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                개인정보처리방침
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/termsofservice.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                서비스 약관
              </a>
            </li>
          </ul>
        </FooterItem>
        <FooterItem>
          <FooterItemHeader>도움말</FooterItemHeader>
          <ul className="footer-menu">
            <li className="footer-menu-list">
              <a
                href="https://help.skyscanner.net/hc/ko?skyCurrency=currency_gbp&skyLanguage=lang_ko&skyMarket=kr_skyscanner&_mp=16fef6cbbb3822-0b0e76ca879f86-39617b0e-fa000-16fef6cbbb448a_1581228190577&preferences=c2aa3265599648d1889282c958ea3f04&traveller_context=c2aa3265-5996-48d1-8892-82c958ea3f04&_ga=2.167051646.1988065219.1581153801-355577210.1580269878&_gac=1.87664106.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                도움말
              </a>
            </li>
            <li className="footer-menu-list">
              <a
                href="https://www.skyscanner.co.kr/privacy-settings"
                target="_blank"
                rel="noopener noreferrer"
              >
                개인정보 설정
              </a>
            </li>
          </ul>
        </FooterItem>
      </FooterWrapper>
    </BgFooter>
  );
}

export default Footer;
