import React from 'react';
import styled from 'styled-components';
import { HiddenHeader, FlexList, FlexWrapper } from '../../styles';

const UserMenu = styled(FlexList)`
  width: 35.3rem;
  font-size: 1.2rem;
`;

const Help = styled.a`
  color: #0770e3;
`;

const SwitchCultureBtn = styled.button`
  width: 19.5rem;
  padding: 0.9rem 1.8rem;
  border: 0.2rem solid #dddde5;
  border-radius: 0.5rem;
  background: none;

  &:hover {
    border: 0.2rem solid #0770e3;
  }
`;

const LoginBtn = styled(SwitchCultureBtn)`
  width: 9.4rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: #0770e3;
`;

const Flag = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
}))`
  width: 1.6rem;
  margin: 0 0.3rem 0 0.6rem;
  border: 0.1rem solid #dddde5;
`;

export const Currency = styled.span`
  margin-left: 6px;
  color: #b2b2bf;
`;

const SubNav = ({
  country,
  countryName,
  currency,
  currencySymbol,
  displayModal,
}) => (
  <nav>
    <HiddenHeader>언어 설정 및 로그인 메뉴</HiddenHeader>
    <UserMenu justify="space-around" align="center">
      <li>
        <Help
          href="https://help.skyscanner.net/hc/ko?skyCurrency=currency_krw&skyLanguage=lang_ko&skyMarket=kr_skyscanner&_mp=16ff4c302b1108-0342ccc764089b-b383f66-144000-16ff4c302b28f7_1581145007784&preferences=f3fa260e084e455dab664acd265c9a67&traveller_context=f3fa260e-084e-455d-ab66-4acd265c9a67&_ga=2.91829530.163945663.1581136578-799128569.1580359418"
          rel="noopener noreferrer"
          target="_blank"
        >
          도움말
        </Help>
      </li>
      <li>
        <SwitchCultureBtn onClick={displayModal}>
          <FlexWrapper justify="space-around" align="center">
            <span>한국어</span>
            <Flag
              src={`https://images.skyscnr.com/images/country/flag/header/${country.toLowerCase()}.png`}
              alt="국기"
            />
            <span>{countryName}</span>
            <Currency>{`${currencySymbol} ${currency}`}</Currency>
          </FlexWrapper>
        </SwitchCultureBtn>
      </li>
      <li>
        <LoginBtn>로그인</LoginBtn>
      </li>
    </UserMenu>
  </nav>
);

export default SubNav;
