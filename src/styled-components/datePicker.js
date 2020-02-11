import styled, { css } from 'styled-components';
import { FlexWrapper } from './index';

// DatePicker
export const ModalWrapper = styled.div`
  position: absolute;
  top: ${props => props.top || 'initial'};
  left: ${props => props.left || 'initial'};
  right: ${props => props.right || 'initial'};
  bottom: ${props => props.bottom || 'initial'};
`;

export const BorderedWrapper = styled(FlexWrapper)`
  border: 1px solid #ccc;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const SearchTypeButton = styled.button`
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

export const DatePickerWrapper = styled(FlexWrapper)`
  padding: 10px 11px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  &:before {
    display: none;
  }
  &:after {
    display: none;
  }
`;

export const DatePickerHeader = styled(FlexWrapper)`
  margin-bottom: 12px;
  &:before {
    display: none;
  }
  &:after {
    display: none;
  }
`;

export const SelectMonth = styled.select`
  width: 210px;
  height: 36px;
  padding: 6px 30px 6px 12px;
  font-size: 1.5rem;
  border-radius: 0.3rem;
`;

// disabled 왜 안되냐 - index.css에 전역으로 설정돼있었음
export const SkipButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  width: 36px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  svg {
    width: 20px;
    fill: ${({ disabled }) => (disabled ? '#68697f' : '#0770e3')};
  }
`;

export const Days = styled(FlexWrapper)`
  border-bottom: 1px solid #ccc;
  &:before {
    display: none;
  }
  &:after {
    display: none;
  }
`;

export const Day = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  width: 42px;
  height: 36px;
  padding-top: 12px;
  text-align: center;

  ${({ border }) =>
    border &&
    css`
      border-right: 1px solid #ccc;
    `}
`;

export const DateItem = styled.div`
  font-size: 1.4rem;
  line-height: 1.2rem;
  text-align: center;
  width: 42px;
  height: 42px;
  padding-top: 15px;
  cursor: ${({ notAllowed }) => (notAllowed ? 'not-allowed' : 'pointer')};
  color: ${({ available }) => (available ? '#0770e3' : '#b2b2bf')};

  ${({ notAllowed }) =>
    notAllowed &&
    css`
      pointer-events: none;
    `}

  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        color: inherit;
        background: #eee;
        border-radius: 2rem;
      }
    `}
`;

// ${({ border }) => border && css`
//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     right: 0;
//     width: 1px;
//     height: 42px;
//     background: #ccc;
//   }
// `}

// ${({ notAllowed, available }) => {
//   let style = '';
//   // if (!past) style += `
// &:hover {
//   color: inherit;
//   background: #eee;
//   border-radius: 2rem;
// }
//   // `;
//   return css`${style}`;
// }}
