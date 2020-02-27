import styled, { css } from 'styled-components';
import { FlexWrapper } from './index';

export const PlaceCode = styled.span`
  ${({ same }) =>
    !same &&
    css`
      padding: 0 0.375rem;
      border-radius: 0.375rem;
      background: rgba(209, 67, 91, 0.2);
    `}
`;

export const Tickets = styled(FlexWrapper)`
  position: relative;
  margin-bottom: 1.2rem;
  width: 100%;
  background: #fff;
  border-radius: 0.6rem 0.6rem;
  box-shadow: 0 1px 3px 0 rgba(37, 32, 31, 0.3);
  transition: box-shadow 0.2s ease-in-out;
  min-height: 13rem;

  &:hover {
    box-shadow: 0 4px 14px 0 rgba(37, 32, 31, 0.25);
    cursor: pointer;
  }
`;

export const TicketWrapper = styled(FlexWrapper)`
  flex-direction: column;
  width: 66.6%;
  padding: 1.2rem;
`;

export const TicketInfos = styled(FlexWrapper)`
  position: relative;
  height: 50%;
  margin-bottom: 1.2rem;

  .carrier {
    margin-top: 0.6rem;
    width: 21%;
    img {
      display: block;
      width: 6rem;
      height: 3rem;
    }
    div {
      font-size: 1.2rem;
      color: #68697f;
      font-weight: 400;
      text-align: center;
    }
    .operators {
      font-weight: normal;
      white-space: nowrap;
      color: #bbb;
      text-align: left;
      margin-top: 2.7rem;
    }
    .inbound {
      transform: translateY(60%);
      margin-top: 1.5rem;
    }
  }
  .departTime {
    padding-right: 0.6rem;
    width: 25%;
    text-align: right;
    padding-top: 0.6rem;
    p {
      font-size: 1.6rem;
      font-weight: 700;
    }
    span {
      font-size: 1.6rem;
      color: #68697f;
    }
  }
  .totalHour {
    padding: 0 0.6rem;
    width: 29%;
    text-align: center;

    ul {
      position: relative;
      display: block;
      width: 85%;
      height: 0.2rem;
      margin: 0.6rem auto;
      padding: 0;
      border-radius: 0.375rem;
      background-color: #68697f;
      line-height: 0;
      text-align: center;

      li {
        position: relative;
        top: -0.35rem;
        display: inline-block;
        width: 0.375rem;
        height: 0.375rem;
        margin: 0 4%;
        border-radius: 0.375rem;
        background-color: #d1435b;
        background-image: none;
        line-height: 0;
        box-shadow: 0 0 0 0.125rem #fff;
        zoom: 1;
      }
    }
    svg {
      position: absolute;
      top: -5px;
      right: -17px;
    }
    p {
      font-size: 1.2rem;
    }
    .stops {
      .direct {
        color: #00a698;
      }
      .transfer {
        color: #d1435b;
        margin-right: 0.4rem;
      }
    }
  }
  .arriveTime {
    padding-left: 1rem;
    width: 25%;
    text-align: left;
    padding-top: 0.6rem;

    span {
      font-size: 1.6rem;
      color: #68697f;
    }

    p {
      font-size: 1.6rem;
      font-weight: 700;
      position: relative;

      span {
        position: absolute;
        top: -0.8rem;
        font-size: 1rem;
        color: #68697f;
      }
    }
  }
`;

export const SemiCircle = styled.div`
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  background-color: #fff;
  background-image: linear-gradient(#dddde5, #dddde5);
  background-repeat: repeat-y;
  background-position: 50% 0;
  background-size: 0.125rem 0.5rem;
  width: 0.75rem;
  margin: 0.375rem auto;
  padding: 0.375rem 0;

  .up {
    background-color: rgb(235, 237, 244);
    position: absolute;
    top: -0.35rem;
    left: -0.2rem;
    width: 1.2rem;
    height: 0.6rem;
    overflow: hidden;
    cursor: pointer;

    &::after {
      position: relative;
      content: '';
      display: block;
      width: 2.4rem;
      height: 2.4rem;
      transform: translateZ(0);
      border: 0.6rem solid #fff;
      border-radius: 1.2rem;
      box-shadow: inset 0 1px 3px 0 rgba(37, 32, 31, 0.3);
      right: -50%;
      bottom: 200%;
      left: -50%;
    }
  }

  .down {
    background-color: rgb(235, 237, 244);
    position: absolute;
    bottom: -0.35rem;
    left: -0.2rem;
    width: 1.2rem;
    height: 0.6rem;
    overflow: hidden;
    cursor: pointer;
    &::after {
      position: relative;
      content: '';
      display: block;
      width: 2.4rem;
      height: 2.4rem;
      transform: translateZ(0);
      border: 0.6rem solid #fff;
      border-radius: 1.2rem;
      box-shadow: inset 0 1px 3px 0 rgba(37, 32, 31, 0.3);
      right: -50%;
      bottom: 100%;
      left: -50%;
    }
  }
`;

export const SelectTicketDetails = styled.div`
  position: relative;
  width: 33.3%;
  text-align: center;
  .ticketDetailsWrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20rem;
    transform: translate(-50%, -50%);
    p {
      font-size: 1.2rem;
    }
    .mostCheap {
      color: #8f90a0;
    }
    .totalPrice {
      color: #68697f;
    }
    span {
      font-size: 2.4rem;
      font-weight: 700;
      white-space: nowrap;
    }
    svg {
      line-height: 1.5;
    }
    a {
      display: block;
      button {
        width: 91px;
        height: 36px;
        font-size: 1.9rem;
        color: #fff;
        font-weight: 700;
        background: #00a698;
        margin-top: 0.6rem;
        padding: 0.6rem 1.4rem;
        border-radius: 4px;
        cursor: pointer;
        vertical-align: middle;
        align-items: center;
      }
    }
  }
`;
