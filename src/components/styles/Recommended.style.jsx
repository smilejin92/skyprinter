import styled from 'styled-components';
import { FlexSection } from '.';

export const ProductHeader = styled.div`
  margin-top: ${props => props.marginTop || '2.8rem'};
  margin-bottom: 3.3rem;
  div {
    float: right;
  }
  p {
    display: inline-block;
    font-size: 1.6rem;
    padding-top: 2.1rem;
  }

  h3 {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 1.875rem;
    color: #111236;
    display: inline-block;
  }
  a {
    width: 100%;
    font-weight: 600;
    font-size: 1.5rem;
    color: #0770e3;
    text-decoration: none;
  }
  svg {
    fill: #0770e3;
  }
`;

export const ProductSectionMain = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductAnchor = styled.a.attrs(props => ({
  href: props.href,
  target: props.target,
  rel: props.rel,
}))`
  width: ${props => props.width || '100%'};
  height: 35rem;
  margin-left: ${props => props.left || 0};
`;

export const ProductContent = styled.div`
  position: relative;
  height: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 0.375rem;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-position: center;
    content: '';
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: all 1s ease-in-out, background 0.3s ease-in-out;
  }
  &:hover::before {
    transform: matrix(1.1, 0, 0, 1.1, 0, 0);
  }
`;

export const ProductContentDescription = styled.div`
  position: absolute;
  bottom: 0;
  height: 25%;
  width: 100%;
  padding-right: 12px;
  padding-left: 24px;
  background-color: #02122c;
  border-radius: 0.375rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductText = styled.span`
  font-size: ${props => props.fontSize || '1.6rem'};
  line-height: 1.5rem;
  font-weight: ${props => props.fontSize || '400'};
  letter-spacing: normal;
`;

export const ProductGetPrice = styled.span`
  font-size: 1.6rem;
  line-height: 3rem;
  font-weight: 400;
  letter-spacing: normal;
  font-weight: 600;
  color: #ff7b59;
  svg {
    fill: #ff7b59;
  }
`;

export const ProductSectionWrapper = styled(FlexSection)`
  width: 104.8rem;
  margin: 0 auto;
`;
