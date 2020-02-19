import styled from 'styled-components';
import { FlexWrapper } from '.';

export const SearchFormWrapper = styled(FlexWrapper)`
  height: ${props => props.height || '22.2rem'};
  background: #02122c;
  padding: ${props => props.padding || '2.4rem'};
  border-radius: 0.4rem;
  font-size: 1.6rem;
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
`;

export const SearchSubmitButton = styled.button.attrs(props => ({
  ariaLabel: '항공권 검색',
}))`
  transform: translateY(-16px);
`;
