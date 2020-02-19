import styled from 'styled-components';

export const BoundChangeWrapper = styled.div`
  // width: 8%;
  width: ${({ page }) => (page === '/transport/flights' ? '4%' : '8%')};
  vertical-align: top;
  display: inline-block;
`;

export const SpaceWrapper = styled.div`
  display: block;
  color: #111236;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
`;

export const BoundChangeButton = styled.div`
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
