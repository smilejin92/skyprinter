import styled from 'styled-components';

export const CabinSection = styled.section`
  z-index: 99;
  display: block;
  background-color: #fff;
  position: absolute;
  top: 7.8rem;
  border: 1px solid #dddde5;
  border-radius: 0.6rem;
  box-shadow: 0 4px 14px 0 rgba(37, 32, 31, 25);
  width: 36.6rem;
`;

export const CainContentWrapper = styled.div`
  display: block;
  padding: 12px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #dddef5;
`;

export const MinusNumberButton = styled.button`
  line-height: 1;
  width: 3.4rem;
  height: 3.4rem;
  border: 1px solid #ddd;
  border-radius: 50%;
  background-color: ${({ disabled }) => (disabled ? '#ddddef' : 'transparent')};
  span {
    line-height: 1.8rem;
    display: inline-block;
    margin-top: 0.3rem;
    vertical-align: top;
  }

  &:hover {
    border: ${({ disabled }) =>
      disabled ? '1px solid #ddddef' : '1px solid #0770e3'};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  svg {
    width: 1.8rem;
    fill: ${({ disabled }) => (disabled ? '#68697f' : '#0770e3')};
  }
`;

export const PlusNumberButton = styled.button`
  line-height: 1;
  width: 3.4rem;
  height: 3.4rem;
  border: 1px solid #ddddef;
  border-radius: 50%;
  background-color: ${({ disabled }) => (disabled ? '#ddddef' : 'transparent')};
  span {
    line-height: 1.8rem;
    display: inline-block;
    margin-top: 0.3rem;
    vertical-align: top;
  }
  &:hover {
    border: ${({ disabled }) =>
      disabled ? '1px solid #ddddef' : '1px solid #0770e3'};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
  svg {
    width: 1.8rem;
    fill: ${({ disabled }) => (disabled ? '#68697f' : '#0770e3')};
  }
`;
export const ButtonWrapper = styled.div`
  display: inline-block;
  line-height: 2.4rem;
`;

export const SvgIcon = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
`;

export const PessengerBoundary = styled.span`
  font-size: 1.6rem;
  padding-left: 1.2rem;
  line-height: 2.4rem;
  vertical-align: middle;
`;
export const WarningDetail = styled.div`
  padding-top: 2.4rem;
  p {
    padding-bottom: 1.8rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #81768f;
  }
`;

export const CompleteButton = styled.div`
  padding: 0.6rem 1.2rem 0.6rem 1.2rem;
  text-align: right;
  background-color: #fff;

  button {
    font-size: 1.6rem;
    color: #0770e3;
    border: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PeopleNumber = styled.input`
  cursor: text;
  width: 3.2rem;
  height: 2.9rem;
  display: inline-block;
  padding-top: 6px;
  padding-bottom: 6px;
  font-weight: 400;
  vertical-align: middle;
  text-align: center;
  line-height: 2.4rem;
  font-size: 2.4rem;
  border: none;
  margin: 0 0.5rem 0 0.5rem;
`;
export const Triangle = styled.span`
  &:before {
    position: absolute;
    bottom: 100%;
    content: ' ';
    display: block;
    margin-bottom: -0.1rem;
    border: 1.3rem solid transparent;
    border-bottom-color: #dddde5;
    pointer-events: none;
    left: 45%;
    box-sizing: inherit;
  }
  &:after {
    position: absolute;
    bottom: 100%;
    left: 49%;
    content: ' ';
    display: block;
    margin-bottom: -0.1rem;
    margin-left: -1.2rem;
    border: 1.2rem solid transparent;
    border-bottom-color: #fff;
    pointer-events: none;
  }
`;
