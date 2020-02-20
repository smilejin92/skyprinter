import styled, { css } from 'styled-components';
import { FlexWrapper } from '.';

export const SearchFormWrapper = styled(FlexWrapper)`
  min-height: ${props => props.height || '22.2rem'};
  background: #02122c;
  padding: ${props => props.padding || '2.4rem'};
  border-radius: 0.4rem;
  font-size: 1.6rem;
  margin-top: ${props =>
    props.page !== '/transport/flights' && props.error ? '35px' : 'none'};

  ${({ page }) =>
    page === '/transport/flights' &&
    css`
      background: #042759;
      padding: 1.2rem;
      min-height: 29.5rem;
      margin-top: none;
    `}
`;

export const SearchFormOption = styled(FlexWrapper)`
  justify-content: space-between;
  color: #fff;
  line-height: 1.5;

  a {
    color: inherit;
  }
`;

export const SearchWrapper = styled(FlexWrapper)`
  padding-top: 1.3rem;
  ${({ page }) =>
    page === '/transport/flights' &&
    css`
      flex-direction: column;
    `};
`;

export const SearchFormSubmit = styled(FlexWrapper)`
  justify-content: space-between;
  color: #fff;
  button {
    padding: 0.6rem 2.4rem 0.3rem 2.4rem;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 3rem;
    vertical-align: middle;
    background-color: rgb(0, 166, 152);
    border: none;
    border-radius: 0.4rem;
    span {
      vertical-align: middle;
      padding-left: 6px;
    }
  }
`;

export const SelectSeatDateBox = styled(FlexWrapper)`
  width: 50%;
  ${({ page }) =>
    page === '/transport/flights' &&
    css`
      width: 100%;
      padding-top: 1.5rem;
    `}
`;

export const SearchSubmitButton = styled.div`
  button {
    transform: translateY(-16px);
  }
  button {
    ${({ page }) =>
      page === '/transport/flights' &&
      css`
        margin-bottom: 12px;
        transform: translateY(12px);
      `}
  }
`;

export const ErrorMessageWrapper = styled.div`
  color: #fff;
  margin-top: 1.2rem;
  padding: 0.6rem 1.2rem;
  background-color: #d1435b;
  border-radius: 0.4rem;
  line-height: 2.4rem;
`;
