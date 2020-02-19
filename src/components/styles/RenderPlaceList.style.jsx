import styled from 'styled-components';

export const ListSection = styled.section`
  display: flex;
  flex-direction: row;
  color: #111236;
  padding: 1.2rem 1.8rem;
  padding-left: ${props => (props.hasCity ? '30px' : '18px')};
  svg {
    fill: #b2b2bf;
    overflow: hidden;
    margin-top: -2px;
    margin-right: 0.96rem;
    vertical-align: top;
  }
  div {
    width: 100%;
  }
  span {
    margin: 0;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    letter-spacing: normal;
  }
  small {
    display: block;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 400;
    letter-spacing: normal;
  }
  strong {
    font-weight: 700;
  }
`;
