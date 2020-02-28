import React from 'react';
import styled from 'styled-components';

const Message = styled.section`
  display: block;
  background-color: #fff;
  box-shadow: inset 0 0 0 1px #dddde5;
  border-radius: 0.6rem;
  padding: 1.2rem;

  div {
    padding: 2.4rem;
  }

  span {
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: 400;
    letter-spacing: normal;

    span {
      box-sizing: inherit;
      font-size: 2.4rem;
      line-height: 3rem;
      font-weight: 400;
      letter-spacing: normal;

      strong {
        font-weight: bolder;
      }
    }
  }
`;

const NoResult = () => (
  <Message>
    <div>
      <span>
        <span>
          <strong>죄송합니다.</strong> 이 날짜에 검색되는{' '}
          <strong>결과가 없습니다</strong>.
        </span>
      </span>
    </div>
  </Message>
);

export default NoResult;
