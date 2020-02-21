import styled, { css } from 'styled-components';
import { FlexWrapper } from '.';

export const DatePickerWrapper = styled(FlexWrapper)`
  position: relative;
  width: 25%;
  color: rgb(17, 18, 54);
  ${({ page, inMain, tripType }) => {
    if (page.includes('transport/flights')) {
      if (inMain) {
        return css`
          width: 23.5%;
          margin-right: 1%;
        `;
      } else {
        let style = '';
        if (tripType === 'oneway') {
          style += 'margin-right: 19.2rem;';
        }
        return css`
          width: 19.2rem;
          height: 3.6rem;
          ${style}
        `;
      }
    }
  }}
`;

export const DatePickerHeader = styled(FlexWrapper)`
  position: relative;
  width: 100%;

  ${({ inMain }) =>
    !inMain &&
    css`
      justify-content: space-between;
    `}

  &::before {
    content: '';
    position: absolute;
    top: ${({ inMain }) => (inMain ? '6.7rem' : '3.6rem')};
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
    top: ${({ inMain }) => (inMain ? '6.6rem' : '3.5rem')};
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
  /* line-height: 1.5; */
  display: block;
  font-weight: 700;
  line-height: 1.8rem;
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
  ${({ page, inMain }) =>
    page.includes('transport/flights') &&
    inMain &&
    css`
      border-radius: 0.4rem;
    `}
`;

export const DatePickerBody = styled.div`
  position: absolute;
  top: 7.8rem;
  top: ${({ inMain }) => (inMain ? '7.8rem' : '4.7rem')};
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
