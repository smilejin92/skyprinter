import React from 'react';
import styled from 'styled-components';

const Message = styled.section`
  display: block;
  background-color: #fff;
  box-shadow: inset 0 0 0 1px #dddde5;
  border-radius: 0.6rem;
  padding: 1.2rem;
  text-align: center;

  span {
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: 400;
    letter-spacing: normal;
    margin: 0;

    span {
      font-size: 2.4rem;
      line-height: 3rem;
      font-weight: 400;
      letter-spacing: normal;
    }
    strong {
      font-weight: bolder;
    }
  }

  div {
    display: flex;
    padding-top: 2.4rem;
    justify-content: center;

    svg {
      height: 5.6rem;

      .blue {
        fill: #0770e3;
      }

      .st3 {
        fill: none;
        stroke: #0770e3;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 3;
      }

      .st4 {
        fill: none;
        stroke: #0770e3;
        stroke-miterlimit: 10;
        stroke-width: 2.0073;
      }
    }
  }
`;

function NoFilteredResult() {
  return (
    <Message>
      <span>
        <span>
          죄송합니다. <strong>필터(조건)</strong>에 일치하는 항공권이 없습니다.
        </span>
      </span>
      <div>
        <svg viewBox="0 0 182 58" enableBackground="new 0 0 182 58">
          <path
            className="blue"
            d="M111.7 22.1h37c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-37c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5z"
          ></path>
          <path
            className="blue"
            d="M111.7 31.1h11c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-11c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5z"
          ></path>
          <path
            className="blue"
            d="M87.8 35c-.3 0-.7-.1-1-.4l-4.3-3.8c-.3-.3-.3-.7-.1-1.1l1-1.1c.3-.3.7-.3 1.1-.1l3 2.6c.1.1.3.1.4 0l6.9-7.9c.3-.3.7-.3 1.1-.1l1.1 1c.3.3.3.7.1 1.1l-8.1 9.2c-.4.4-.8.6-1.2.6"
          ></path>
          <path className="blue st3" d="M168.5 3.3h-5"></path>
          <path className="blue st3" d="M156.3 3.3h-2.5"></path>
          <path className="blue st3" d="M163.5 53.3h6.7"></path>
          <path
            className="blue st3"
            d="M140.7 53.3h11M128.7 53.3h-89.4c-2.8 0-5.5-1-7.7-2.8l-21.1-17.6c-2.9-2.4-2.9-6.8 0-9.2l21.2-17.6c2.2-1.8 4.9-2.8 7.7-2.8h107.19999999999999"
          ></path>
          <path
            className="blue st4"
            d="M96.5 38.8h-13.5c-1.7 0-3-1.3-3-3v-13.6c0-1.7 1.3-3 3-3h13.5c1.7 0 3 1.3 3 3v13.5c0 1.7-1.3 3.1-3 3.1z"
          ></path>
          <path
            className="blue"
            d="M39.8 16.6l-9.5 8.8c-.6.7-1.1 1.6-1.3 2.6-.1.3-.2.7-.2 1 0 .4.1.7.2 1 .2.9.6 1.8 1.4 2.5l9.5 8.8c1.3 1.2 3.4 1.2 4.7-.2 1.3-1.3 1.2-3.4-.2-4.7l-4.5-4.2h15.5c1.8 0 3.3-1.5 3.3-3.3 0-1.8-1.5-3.3-3.3-3.3h-15.5l4.5-4.2c.7-.7 1.1-1.5 1.1-2.4 0-.8-.3-1.6-.9-2.3-1.3-1.2-3.4-1.3-4.8-.1"
          ></path>
        </svg>
      </div>
    </Message>
  );
}

export default NoFilteredResult;
