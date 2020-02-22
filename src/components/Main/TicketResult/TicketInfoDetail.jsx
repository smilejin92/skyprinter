import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../styles';

const Tickets = styled(FlexWrapper)`
  margin-bottom: 1.2rem;
  height: 16rem;
  width: 100%;
  background: #fff;
  border-radius: 0.6rem 0.6rem;
  border: 1px solid #ccc;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(37, 32, 31, 25);
    cursor: pointer;
  }
`;
const TicketWrapper = styled(FlexWrapper)`
  flex-direction: column;
  width: 70%;
  /* background:yellow; */
  padding: 1.2rem;
`;
const TicketInfos = styled(FlexWrapper)`
  position: relative;
  /* background:aqua; */
  height: 50%;

  .carrier {
    margin-top: 0.6rem;
    width: 21%;
    img {
      display: block;
      width: 6rem;
      height: 3rem;
    }
  }
  .departTime {
    padding-right: 0.6rem;
    width: 25%;
    text-align: right;
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
      width: 50%;
      height: 0.2rem;
      margin: 0.6rem auto;
      padding: 0;
      border-radius: 0.375rem;
      background-color: #68697f;
      line-height: 0;
      text-align: center;
    }
    svg {
      position: absolute;
      top: -6px;
      right: -17px;
    }
    p {
      font-size: 1.2rem;
    }
    .stops {
      color: #00a698;
    }
  }
  .arriveTime {
    padding-left: 0.6rem;
    width: 25%;
    text-align: left;
    p {
      font-size: 1.6rem;
      font-weight: 700;
    }
    span {
      font-size: 1.6rem;
      color: #68697f;
    }
  }
`;

const SelectTicketDetails = styled.div`
  border-left: 2px solid #ddddef;
  /* background:pink; */
  width: 30%;
  padding: 1.8rem;
  text-align: center;
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
  }
  svg {
    line-height: 1.5;
  }
  button {
    width: 91px;
    height: 36px;
    font-size: 1.9rem;
    color: #fff;
    font-weight: 700;
    background: #00a698;
    margin-top: 0.6rem;
    padding: 0.6rem 1.8rem;
    border-radius: 4px;
    cursor: pointer;
    line-height: 1.5;
    vertical-align: middle;
    align-items: center;
  }
`;

const SemiCircle = styled.div`
  position: absolute;
  width: 0.75rem;
  height: 0.375rem;
  overflow: hidden;
  display: block;
  text-align: center;
  cursor: pointer;
  background: #ddddef;

  &::after {
    right: -10%;
    bottom: 200%;
    left: -50%;
    position: relative;
    content: ' ';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    transform: translateZ(0);
    border: 0.375rem solid #fff;
    border-radius: 0.75rem;
    box-shadow: inset 0 1px 3px 0 rgba(37, 32, 31, 0.3);
  }
`;

function TicketInfoDetail() {
  return (
    <Tickets>
      <TicketWrapper>
        <TicketInfos>
          <div className="carrier">
            <img
              alt="아시아나항공"
              src="//www.skyscanner.net/images/airlines/small/OZ.png"
            />
          </div>

          <div className="departTime">
            <p>오후 8:25</p>
            <span>ICN</span>
          </div>
          <div className="totalHour">
            <p>13시간 55분</p>
            <div>
              <ul>
                <svg
                  width="13"
                  height="13"
                  x="0px"
                  y="0px"
                  viewBox="0 0 12 12"
                  enableBackground="new 0 0 12 12"
                >
                  <path
                    fill="#898294"
                    d="M3.922,12h0.499c0.181,0,0.349-0.093,0.444-0.247L7.949,6.8l3.233-0.019C11.625,6.791,11.989,6.44,12,6 c-0.012-0.44-0.375-0.792-0.818-0.781L7.949,5.2L4.866,0.246C4.77,0.093,4.602,0,4.421,0L3.922,0c-0.367,0-0.62,0.367-0.489,0.71 L5.149,5.2l-2.853,0L1.632,3.87c-0.084-0.167-0.25-0.277-0.436-0.288L0,3.509L1.097,6L0,8.491l1.196-0.073 C1.382,8.407,1.548,8.297,1.632,8.13L2.296,6.8h2.853l-1.716,4.49C3.302,11.633,3.555,12,3.922,12"
                  ></path>
                </svg>
              </ul>
            </div>
            <p className="stops">직항</p>
          </div>
          <div className="arriveTime">
            <p>오후 8:20</p>
            <span>JFK</span>
          </div>
        </TicketInfos>

        <TicketInfos>
          <div className="carrier">
            <img
              alt="아시아나항공"
              src="//www.skyscanner.net/images/airlines/small/OZ.png"
            />
          </div>

          <div className="departTime">
            <p>오후 8:25</p>
            <span>ICN</span>
          </div>

          <div className="totalHour">
            <p>13시간 55분</p>
            <div>
              <ul>
                <svg
                  width="13"
                  height="13"
                  x="0px"
                  y="0px"
                  viewBox="0 0 12 12"
                  enableBackground="new 0 0 12 12"
                >
                  <path
                    fill="#898294"
                    d="M3.922,12h0.499c0.181,0,0.349-0.093,0.444-0.247L7.949,6.8l3.233-0.019C11.625,6.791,11.989,6.44,12,6 c-0.012-0.44-0.375-0.792-0.818-0.781L7.949,5.2L4.866,0.246C4.77,0.093,4.602,0,4.421,0L3.922,0c-0.367,0-0.62,0.367-0.489,0.71 L5.149,5.2l-2.853,0L1.632,3.87c-0.084-0.167-0.25-0.277-0.436-0.288L0,3.509L1.097,6L0,8.491l1.196-0.073 C1.382,8.407,1.548,8.297,1.632,8.13L2.296,6.8h2.853l-1.716,4.49C3.302,11.633,3.555,12,3.922,12"
                  ></path>
                </svg>
              </ul>
            </div>
            <p className="stops">직항</p>
          </div>

          <div className="arriveTime">
            <p>오후 8:20</p>
            <span>JFK</span>
          </div>
        </TicketInfos>
      </TicketWrapper>

      <SemiCircle />
      <div></div>

      <SelectTicketDetails>
        <div>
          <p className="mostCheap">총 7건중 최저가</p>
          <span>₩ 1177800</span>
          <p className="totalPrice">총 가격</p>
          <a
            href="https://www.skyscanner.co.kr/transport/flights/icn/nyca/200223/200302/?adults=3&children=0&adultsv2=3&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&ref=home#/details/12409-2002231000--32128-0-12712-2002231000|12712-2003020050--32128-0-12409-2003030515"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              선택
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="white"
                style={{ width: '18', height: '18' }}
              >
                <path d="M14.4 19.5l5.7-5.3c.4-.4.7-.9.8-1.5.1-.3.1-.5.1-.7s0-.4-.1-.6c-.1-.6-.4-1.1-.8-1.5l-5.7-5.3c-.8-.8-2.1-.7-2.8.1-.8.8-.7 2.1.1 2.8l2.7 2.5H5c-1.1 0-2 .9-2 2s.9 2 2 2h9.4l-2.7 2.5c-.5.4-.7 1-.7 1.5s.2 1 .5 1.4c.8.8 2.1.8 2.9.1z"></path>
              </svg>
            </button>
          </a>
        </div>
      </SelectTicketDetails>
    </Tickets>
  );
}
export default TicketInfoDetail;
