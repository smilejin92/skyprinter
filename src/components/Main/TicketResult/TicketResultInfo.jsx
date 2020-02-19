import React, { useState } from 'react';
import styled from 'styled-components';
import SearchForm from '../SearchForm';
import { FlexWrapper } from '../../styles';
import { HiddenHeader } from '../../styles';
import { Icon } from 'antd';

const TicketResultInfoWrapper = styled.div`
  width: calc(100% - 49.7rem);
  color: #fff;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

const TicketInfoWrapper = styled.div``;
const SearchArea = styled.section`
  position: relative;
  min-height: 7.6rem;
  border-radius: 0 0 0.6rem 0.6rem;
  background-color: #042759;
  cursor: pointer;
`;

const SearchSummary = styled.div`
  padding: 0.6rem 1.2rem 1.2rem 0;
`;

const SearchButtonDiv = styled.div`
  position: absolute;
  margin: 0 1.2rem;
  width: 3.6rem;
  padding-top: 6px;
  height: 5.8rem;

  button {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 2.9rem;
    text-decoration: none;
    box-shadow: none;
    cursor: pointer;
    user-select: none;
    color: #fff;
    background-color: #00a698;

    &:hover {
      background-color: #00887d;
    }
  }
`;

const SearchIcon = styled(Icon)`
  width: 1.8rem;
  height: 1.8rem;
  color: #fff;
  font-size: 1.8rem;
`;

const SearchHeaderWrapper = styled(FlexWrapper)`
  margin-left: 60px;
  justify-content: space-between;
  align-items: center;
`;

const SearchTitle = styled.div`
  padding-top: 0.6rem;
  height: 3.4rem;
`;

const SearchDatePickerGroup = styled.div`
  height: 100%;
  font-size: 1.2rem;
`;

const SearchDatePicker = styled.div`
  display: inline-block;
  width: 19.2rem;
  height: 100%;
  background-color: tomato;
`;

const SearchPassenger = styled.div`
  margin-left: 60px;
  height: 100%;
  font-size: 1.2rem;
`;

const TicketResultInfo = props => {
  const [visible, setVisible] = useState(false);

  return (
    <TicketResultInfoWrapper>
      <SearchArea>
        <HiddenHeader>검색 영역</HiddenHeader>
        <SearchSummary onClick={() => setVisible(!visible)}>
          {' '}
          <SearchButtonDiv>
            <button type="button">
              <span>
                <SearchIcon type="search" />
              </span>
            </button>
          </SearchButtonDiv>
          <SearchHeaderWrapper>
            <SearchTitle>도쿄 (모두) - 서울 (모두)</SearchTitle>
            <SearchDatePickerGroup>
              <SearchDatePicker>1</SearchDatePicker>
              <SearchDatePicker>2</SearchDatePicker>
            </SearchDatePickerGroup>
          </SearchHeaderWrapper>
          <SearchPassenger>1 성인 | 일반석</SearchPassenger>{' '}
        </SearchSummary>
        {visible && <SearchForm />}
      </SearchArea>
      <TicketInfoWrapper></TicketInfoWrapper>
    </TicketResultInfoWrapper>
  );
};

export default TicketResultInfo;
