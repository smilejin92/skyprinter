import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import { FlexWrapper, HiddenHeader, FlexSection } from '../styles';

const Background = styled(FlexWrapper)`
  min-width: 109.6rem;
  background: 50% 60% / cover no-repeat
    url('https://content.skyscnr.com/m/785bdfcbe683606c/Large-Flights-hero-2.jpg?crop=1800px:1375px&quality=76');
`;

const SearchAreaWrapper = styled(FlexSection)`
  width: 109.6rem;
  min-height: 55rem;
  margin: 0 auto;
  padding: 6.5rem 0 9.5rem 0;
`;

const Description = styled.p`
  font-size: 6rem;
  font-weight: 600;
  line-height: 6rem;
  color: white;
  padding-left: 2.4rem;
`;

const BackgroundTail = styled.div`
  width: 100%;
  align-items: flex-end;
  align-self: flex-end;
  position: relative;
  min-width: 16rem;
  height: 2.4rem;
  overflow: hidden;
`;

const SvgIcon = styled.svg`
  position: absolute;
  bottom: -1px;
  width: 1120rem;
  height: 2.4rem;
  margin-left: 50%;
  transform: translateX(-50%);
  fill: #fff;
`;

const SearchArea = () => (
  <Background direction="column">
    <SearchAreaWrapper direction="column" justify="space-evenly">
      <HiddenHeader>검색 영역</HiddenHeader>
      <Description>어디로 떠나볼까요?</Description>
      <SearchForm />
    </SearchAreaWrapper>
    <BackgroundTail>
      <SvgIcon viewBox="0 0 14832 55">
        <path d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z" />
      </SvgIcon>
    </BackgroundTail>
  </Background>
);

export default SearchArea;
