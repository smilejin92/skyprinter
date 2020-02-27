import styled, { css } from 'styled-components';
import { FlexWrapper } from '../styles';
import { Icon } from 'antd';
import duck from '../../images/duck.gif';

export const TicketResultInfoWrapper = styled.div`
  width: calc(100% - 49.7rem);
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const SearchArea = styled.section`
  position: relative;
  min-height: 7.6rem;
  border-radius: 0 0 0.6rem 0.6rem;
  background-color: #042759;
  cursor: pointer;
`;

export const SearchSummary = styled.div`
  padding: 0.6rem 1.2rem 1.2rem 0;
  color: #fff;
`;

export const SearchButtonDiv = styled.div`
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

export const SearchIcon = styled(Icon)`
  width: 1.8rem;
  height: 1.8rem;
  color: #fff;
  font-size: 1.8rem;
`;

export const SearchHeaderWrapper = styled(FlexWrapper)`
  margin-left: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const SearchTitle = styled.div`
  padding-top: 0.6rem;
  height: 3.4rem;
`;

export const SearchDatePickerGroup = styled.nav`
  display: flex;
  ${({ tripType }) =>
    tripType === 'round' &&
    css`
      align-items: flex-end;
    `}
  height: 100%;
  font-size: 1.2rem;
`;

export const SearchPassenger = styled.div`
  margin-left: 60px;
  height: 100%;
  font-size: 1.2rem;
`;

export const AddOns = styled.div`
  width: 100%;
  margin: 1rem 0 1rem 0;
  line-height: 2.4rem;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  span {
    color: #0770e3;
    font-size: 1.2rem;
  }
`;
export const CalenderAndChart = styled.span`
  float: left;
`;
export const AddLuggage = styled.span`
  float: right;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TicketFilterSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 26%;
`;

export const TicketResultSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 72%;
  margin-left: 1.5rem;
  position: relative;

  ${({ filterLoader }) =>
    filterLoader &&
    css`
      &::after {
        content: '업데이트 중';
        padding-top: 15rem;
        text-align: center;
        position: absolute;
        font-weight: 900;
        text-shadow: 0 0 10px #000;
        color: #fff;
        font-size: 4rem;
        width: 100%;
        height: 100%;
        z-index: 99;
        background-color: rgba(33, 33, 33, 0.2);
      }

      &::before {
        content: '';
        position: absolute;
        top: 20rem;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        height: 20%;
        z-index: 100;
        background-image: url(${duck});
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    `}
`;

export const ResultAndArrangeStandard = styled(FlexWrapper)`
  width: 100%;
  height: 3.6rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  span {
    font-size: 1.2rem;
  }
  label {
    font-weight: 700;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  select {
    display: flex;
    align-items: flex-end;
    height: 3.6rem;
    border: 1px solid rgb(169, 169, 182);
    padding: 0.6rem 3rem 0.6rem 1.2rem;
    background: #fff
      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4Ij48c3R5bGU+PC9zdHlsZT48cGF0aCBkPSJNMTkuNyAxMC4zTDEyIDE3LjRsLTcuNy03LjFjLS42LS42LS4yLTEuNy43LTEuN2gxNGMuOSAwIDEuMyAxLjEuNyAxLjd6IiBmaWxsPSIjNDQ0NTYwIi8+PC9zdmc+')
      no-repeat right 1.2rem center;
    -webkit-appearance: none;
  }
`;

export const SelectArrageStandard = styled(FlexWrapper)`
  align-items: center;
`;
export const ArrangeFilterButtonWapper = styled.div`
  margin-bottom: 1.2rem;
  height: 10rem;
  width: 100%;
  background: #fff;
  border-radius: 0.6rem 0.6rem;
`;

export const FilterPriceButton = styled.button`
  padding: 1.2rem 1.8rem;
  width: 33.3%;
  text-align: left;
  ${({ toggle, id }) =>
    toggle
      ? css`
          border-radius: ${id === 'mostCheapest'
            ? '0.4rem 0 0 0.4rem'
            : id === 'departure'
            ? '0 0.4rem 0.4rem 0'
            : 'none'};
          background: #042759;

          span {
            color: #fff;
          }
          p {
            color: #fff;
          }
        `
      : css`
          span {
            color: #0770e3;
          }
        `}
  p {
    font-size: 1.2rem;
  }

  span {
    font-weight: 700;
    font-size: 2.4rem;
  }

  &:nth-child(2n) {
    border-right: 0.5px solid #ddddef;
    border-left: 0.5px solid #ddddef;
  }
`;

export const MoreResultButton = styled.button`
  border-radius: 0.4rem;
  line-height: 2.4rem;
  margin: 0 auto;
  color: #0770e3;
  font-size: 1.9rem;
  width: 18.6rem;
  padding: 0.4rem 1.8rem;
  border: 2px solid rgb(216, 216, 225);
  background: #fff;
  font-weight: 700;
  &:hover {
    border: 2px solid #0770e3;
  }
`;
export const LuggageMoreDetail = styled.div`
  font-size: 1.2rem;
  line-height: 2.4rem;
  display: block;
  text-align: left;
  padding-top: 1.2rem;
  b {
    font-weight: 700;
  }
  p {
    padding-bottom: 1.2rem;
  }
  a {
    color: #0770e3;
  }
`;

export const PriceAlarm = styled.button`
  color: #0770e3;
  padding: 0.6rem 1.8rem;
  width: 24rem;
  border: 2px solid rgb(216, 216, 225);
  border-radius: 0.4rem;
  line-height: 1.9rem;
  vertical-align: middle;
  font-size: 1.9rem;
  font-weight: 700;
  background: #fff;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  &:hover {
    border: 2px solid #0770e3;
  }
`;

export const ProgressDiv = styled.div.attrs({})`
  position: absolute;
  top: 3rem;
  width: 680px;

  .ant-progress-inner {
    background-color: rgb(215, 215, 225);
  }

  .ant-progress-bg {
    background-color: rgb(1, 102, 218);
    height: 6px !important;
  }
`;

export const MainLoading = styled.div`
  height: 72rem;
  position: relative;
  div {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    span {
      display: block;
      text-align: center;
      font-size: 32px;
      line-height: 1.5;
    }
  }
`;
