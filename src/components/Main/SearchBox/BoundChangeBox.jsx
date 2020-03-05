import React from 'react';
import {
  BoundChangeWrapper,
  SpaceWrapper,
  BoundChangeButton,
} from '../../styles/BoundChangeBox.style';
import { useLocation } from 'react-router-dom';

const BoundChangeBox = ({ changeBound }) => {
  const { pathname } = useLocation();
  return (
    <BoundChangeWrapper page={pathname}>
      <SpaceWrapper>&nbsp;</SpaceWrapper>
      <BoundChangeButton>
        <button
          aria-label="출발지와 도착지 바꾸기"
          type="button"
          tabIndex="2"
          onClick={changeBound}
        >
          <svg viewBox="0 0 24 24">
            <path d="M9.1 11.2V9.5H15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.1V4.8c0-.6-.6-.9-1.1-.7L2.4 7.3c-.5.3-.5 1 0 1.3L8 11.9c.5.3 1.1-.1 1.1-.7zm12.5 4.1L16 12.1c-.5-.3-1.1.1-1.1.7v1.7H9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.9v1.7c0 .6.6.9 1.1.7l5.6-3.2c.5-.3.5-1.1 0-1.4z"></path>
          </svg>
        </button>
      </BoundChangeButton>
    </BoundChangeWrapper>
  );
};

export default BoundChangeBox;
