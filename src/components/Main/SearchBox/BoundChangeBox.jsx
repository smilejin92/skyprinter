import React from 'react';
import styled from 'styled-components';

const BoundChangeWrapper = styled.div`
  width: 8%;
  vertical-align: top;
  display: inline-block;
`;

const SpaceWrapper = styled.div`
  display: block;
  color: #111236;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
`;

const BoundChangeButton = styled.div`
  button {
    width: 100%;
    height: 4.8rem;
    padding: 0;
    border: 0.1rem solid #b2b2bf;
    border-right: 0;
    border-left: 0;
    border-radius: 0;
    outline: none;
    text-transform: none;
    background-color: #fff;
    cursor: pointer;
  }

  svg {
    fill: #0770e3;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const BoundChangeBox = ({ changeBound }) => {
  return (
    <BoundChangeWrapper>
      <SpaceWrapper>&nbsp;</SpaceWrapper>
      <BoundChangeButton>
        <button
          aria-label="출발지와 도착지 바꾸기"
          type="button"
          tabIndex="2"
          onClick={changeBound}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9.1 11.2V9.5H15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.1V4.8c0-.6-.6-.9-1.1-.7L2.4 7.3c-.5.3-.5 1 0 1.3L8 11.9c.5.3 1.1-.1 1.1-.7zm12.5 4.1L16 12.1c-.5-.3-1.1.1-1.1.7v1.7H9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.9v1.7c0 .6.6.9 1.1.7l5.6-3.2c.5-.3.5-1.1 0-1.4z"></path>
          </svg>
        </button>
      </BoundChangeButton>
    </BoundChangeWrapper>
  );
};

export default BoundChangeBox;
