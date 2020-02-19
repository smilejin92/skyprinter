import styled, { css } from 'styled-components';
import { FlexWrapper } from '.';

export const DatesSelection = styled(FlexWrapper)`
  padding: 1rem 1.1rem;
`;

export const SelectMonth = styled.select`
  width: 210px;
  height: 36px;
  padding: 6px 30px 6px 12px;
  font-size: 1.5rem;
  border-radius: 0.3rem;
`;

export const SkipButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  width: 36px;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed !important;
    `}

  svg {
    width: 20px;
    fill: ${({ disabled }) => (disabled ? '#68697f' : '#0770e3')};
  }
`;

export const Days = styled(FlexWrapper)`
  border-bottom: 1px solid #ccc;
`;

export const Day = styled.div`
  width: 4.2rem;
  height: 3.6rem;
  padding-top: 1.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;

  ${({ border }) =>
    border &&
    css`
      border-right: 1px solid #ccc;
    `}
`;

export const DateItem = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  padding-top: 15px;
  font-size: 1.4rem;
  line-height: 1.2rem;
  text-align: center;
  cursor: ${({ notAllowed }) => (notAllowed ? 'not-allowed' : 'pointer')};
  color: ${({ colorBlue }) => (colorBlue ? '#0770e3' : '#b2b2bf')};

  ${({ hover }) =>
    hover &&
    css`
      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 36px;
        height: 36px;
        background: transparent;
        border-radius: 2rem;
      }
      &:hover::after {
        color: inherit;
        background: #eee;
        border-radius: 2rem;
      }
    `}

  ${({ border }) =>
    border &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 42px;
        background: #ccc;
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      color: white;
      font-weigth: 600;
      pointer-events: none;
      &::after {
        background: #084eb2;
      }
    `}
`;
