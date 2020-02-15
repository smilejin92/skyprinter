import React from 'react';
import { FlexSection } from '../../styles';
import styled from 'styled-components';

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

const Recommended = () => (
  <ProductSectionWrapper direction="column">
    <ProductHeader>
      <h3>추천 상품</h3>
      <div className="everywhere-search">
        <a
          href="https://www.skyscanner.co.kr/transport/flights-from/hkga?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2002"
          target="_blank"
          rel="noopener noreferrer"
        >
          EveryWhere 검색
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.5 12l-6.4 7.2c-.6.6-1.5.7-2.1.1-.6-.5-.7-1.5-.1-2.1l4.6-5.2-4.6-5.2c-.6-.6-.5-1.6.1-2.1s1.6-.5 2.1.1l6.4 7.2z"></path>
          </svg>
        </a>
      </div>
    </ProductHeader>
    <ProductSectionMain>
      <ProductAnchor
        href="https://www.skyscanner.co.kr/transport/flights/hkga/tyoa?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2002"
        target="_blank"
        rel="noopener noreferrer"
        width="50%"
      >
        <ProductContent url="https://content.skyscnr.com/99b6d376df86c55006e1ca90a18c5902/GettyImages-479490111.jpg?resize=1048px:600px&quality=50">
          <ProductContentDescription>
            <p>
              <ProductText fontSize="2.4rem" fontWeight="500">
                도쿄,
              </ProductText>
              <ProductText>일본</ProductText>
            </p>
            <ProductGetPrice>
              가격 확인
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.5 12l-6.4 7.2c-.6.6-1.5.7-2.1.1-.6-.5-.7-1.5-.1-2.1l4.6-5.2-4.6-5.2c-.6-.6-.5-1.6.1-2.1s1.6-.5 2.1.1l6.4 7.2z"></path>
              </svg>
            </ProductGetPrice>
          </ProductContentDescription>
        </ProductContent>
      </ProductAnchor>
      <ProductAnchor
        href="https://www.skyscanner.co.kr/news"
        target="_blank"
        rel="noopener noreferrer"
        width="25%"
        left="1.9rem"
      >
        <ProductContent url="https://www.skyscanner.net/sponsored-portal-uploads/ce673ce73145ab4a363d631f25cb4517.jpg?resize=1048px:600px&quality=50">
          <ProductContentDescription>
            <p>
              <ProductText>세상을 탐험해 보세요</ProductText>
            </p>
            <ProductGetPrice>
              우리의 여행 들로그 읽기{' '}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.5 12l-6.4 7.2c-.6.6-1.5.7-2.1.1-.6-.5-.7-1.5-.1-2.1l4.6-5.2-4.6-5.2c-.6-.6-.5-1.6.1-2.1s1.6-.5 2.1.1l6.4 7.2z"></path>
              </svg>
            </ProductGetPrice>
          </ProductContentDescription>
        </ProductContent>
      </ProductAnchor>
      <ProductAnchor
        href="https://www.skyscanner.co.kr/transport/flights/hkga/spka?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2002"
        target="_blank"
        rel="noopener noreferrer"
        width="25%"
        left="1.9rem"
      >
        <ProductContent url="https://content.skyscnr.com/2b1b04f9dc4df591fe93e3deed87a906/GettyImages-78763208.jpg?resize=1048px:600px&quality=50">
          <ProductContentDescription>
            <p>
              <ProductText fontSize="2.4rem">삿포로, </ProductText>
              <ProductText>일본</ProductText>
            </p>
            <ProductGetPrice>
              가격 확인
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.5 12l-6.4 7.2c-.6.6-1.5.7-2.1.1-.6-.5-.7-1.5-.1-2.1l4.6-5.2-4.6-5.2c-.6-.6-.5-1.6.1-2.1s1.6-.5 2.1.1l6.4 7.2z"></path>
              </svg>
            </ProductGetPrice>
          </ProductContentDescription>
        </ProductContent>
      </ProductAnchor>
    </ProductSectionMain>
  </ProductSectionWrapper>
);

export default Recommended;
