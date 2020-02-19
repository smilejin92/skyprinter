import React from 'react';
import {
  ProductHeader,
  ProductSectionWrapper,
  ProductSectionMain,
  ProductAnchor,
  ProductContent,
  ProductGetPrice,
  ProductContentDescription,
  ProductText,
} from '../styles/Recommended.style';

const ProductsOfMonth = () => (
  <ProductSectionWrapper direction="column">
    <ProductHeader marginTop="3.3rem">
      <h3>4월 특가 상품</h3>
      <div className="everywhere-search">
        <a
          href="https://www.skyscanner.co.kr/transport/flights-from/hkga?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2004"
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
        href="https://www.skyscanner.co.kr/transport/flights/hkga/hnla?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2004"
        target="_blank"
        rel="noopener noreferrer"
        width="33.3%"
      >
        <ProductContent url="https://content.skyscnr.com/m/41d369e77ac54dfe/original/eyeem-26050318-126813454.jpg?resize=1048px:600px&quality=50">
          <ProductContentDescription>
            <p>
              <ProductText fontSize="2.4rem">호놀룰루, </ProductText>
              <ProductText>미국</ProductText>
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
        href="https://www.skyscanner.co.kr/transport/flights/hkga/prag?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2004"
        target="_blank"
        rel="noopener noreferrer"
        width="33.3%"
        left="1.8rem"
      >
        <ProductContent url="https://content.skyscnr.com/m/1a55403f63baf856/Large-London-England-Aug-2017-Brendan-van-Son-5.jpg?resize=1048px:600px&quality=50">
          <ProductContentDescription>
            <p>
              <ProductText fontSize="2.4rem">프라하, </ProductText>
              <ProductText>체코</ProductText>
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
        href="https://www.skyscanner.co.kr/transport/flights/hkga/guma?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2004"
        target="_blank"
        rel="noopener noreferrer"
        width="33.3%"
        left="1.8rem"
      >
        <ProductContent url="https://content.skyscnr.com/6f3779016c23190fadcdc6f500f5dc11/GettyImages-464420602.jpg?resize=1048px:600px&quality=50">
          <ProductContentDescription>
            <p>
              <ProductText fontSize="2.4rem">Barigada, </ProductText>
              <ProductText>괌</ProductText>
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

export default ProductsOfMonth;
