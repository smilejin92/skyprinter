import styled, { css } from 'styled-components';
import { FlexWrapper } from '.';

// DatePicker
export const DatePickerWrapper = styled(FlexWrapper)`
  position: relative;
  width: 25%;
`;

export const DatePickerHeader = styled(FlexWrapper)`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 6.7rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2.5rem;
    height: 1.2rem;
    background: ${({ arrowTip }) => (arrowTip ? 'white' : 'transparent')};
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 6.6rem;
    left: 50%;
    transform: translateX(-50%);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    width: 2.5rem;
    height: 1.2rem;
    background: ${({ arrowTip }) => (arrowTip ? '#ccc' : 'transparent')};
    z-index: 1;
  }
`;

export const ButtonLabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  font-size: 1.2rem;
  line-height: 1.5;
  color: white;
`;

export const DisplayDatePickerBtn = styled.button`
  height: 4.8rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid #ccc;
  border-right: none;
  background-color: transparent;
  outline: none;
  font-size: 1.6rem;
  text-align: left;
  background: white;
`;

export const DatePickerBody = styled.div`
  position: absolute;
  top: 7.8rem;
  left: 50%;
  transform: translateX(-50%);
  width: 31.8rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background: white;
  z-index: 1;
`;

export const SearchTypes = styled(FlexWrapper)`
  border-bottom: 1px solid #ccc;
`;

export const SearchTypeBtn = styled.button`
  border: none;
  border-bottom: 3px solid
    ${({ active }) => (active ? '#0770e3' : 'transparent')};
  color: ${({ active }) => (active ? '#0770e3' : '#68697f')};
  background-color: transparent;
  padding: 12px 20px;
  margin: 0 4px;
  font-size: 1.6rem;
  outline: none;

  svg {
    width: 20px;
    fill: ${({ active }) => (active ? '#0770e3' : '#68697f')};
    margin-right: 5px;
  }

  ${({ active }) =>
    !active &&
    css`
      &:hover {
        border-bottom: 3px solid #ccc;
        svg {
          fill: #111236;
        }
      }
    `}
`;

export const DatesSelection = styled(FlexWrapper)`
  padding: 1rem 1.1rem;
`;

// disabled 왜 안되냐 - index.css에 전역으로 설정돼있었음
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

export const SelectMonth = styled.select`
  width: 210px;
  height: 36px;
  padding: 6px 30px 6px 12px;
  font-size: 1.5rem;
  border-radius: 0.3rem;
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

export const ButtonBox = styled(FlexWrapper)`
  border-top: 1px solid #ccc;
  justify-content: flex-end;
`;

export const CancelBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  height: 4rem;
  margin-right: 0.5rem;
  color: #0770e3;
  outline: none;
`;
