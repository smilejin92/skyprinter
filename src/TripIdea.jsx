import React from 'react';
import { ProductHeader, ProductSectionWrapper } from './RecommendProduct';
import styled from 'styled-components';
import map from './images/map.svg';

const MapContentArea = styled.div`
  background-position: ${props => props.position || '-38.6205px -250.003px'};
  background-image: url(${map});
  background-repeat: repeat-x;
  background-size: cover;
  background-color: #9dc0f2;
  width: 100%;
  height: 300px;
  border-radius: 0.375rem;
`;

const TripIdeaHeader = styled(ProductHeader)`
  h3 {
    display: block;
  }
`;

const MapArea = styled.div`
  position: relative;
  z-index: 10;
`;

const MapPicker = styled.div`
  position: absolute;
  top: ${props => props.top || 0}px;
  left: ${props => props.left || 0}px;
  z-index: 15;
`;

const MapPickerContent = styled.div`
  position: relative;
  display: inline-block;
  max-width: 300px;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(17, 18, 54, 0.3);
  border-radius: 0.4rem;
  text-align: center;
  margin: 0;
  line-height: 4.2rem;
  white-space: nowrap;
  p {
    font-weight: 700;
    margin: 0;
    font-size: 1.6rem;
    color: #444560;
  }
`;

const MapPickerTriangle = styled.div`
  width: 0;
  margin: 0 auto;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 6px solid #fff;
  position: relative;
  top: -0.5px;
`;

const MapPickerMarker = styled.div`
  position: relative;
  top: -8px;
  margin: 0 auto;
  width: 20px;
  height: 20px;
  border: 2.94px solid #fff;
  border-radius: 10px;
  z-index: -1;
  background-color: #00a698;
`;

function TripIdea() {
  return (
    <ProductSectionWrapper direction="column">
      <TripIdeaHeader marginTop="3.3rem">
        <h3>여행 아이디어를 얻으세요</h3>
        <p>항공편 가격 지도로 전 세계를 한눈에 확인하세요</p>
        <div className="tripidea-description">
          <a
            href="https://www.skyscanner.co.kr/inspire/map?outboundDate=2020-05&outboundPlace=HKGA&preferDirects=false"
            target="_blank"
            rel="noopener noreferrer"
          >
            지도 둘러 보기
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.5 12l-6.4 7.2c-.6.6-1.5.7-2.1.1-.6-.5-.7-1.5-.1-2.1l4.6-5.2-4.6-5.2c-.6-.6-.5-1.6.1-2.1s1.6-.5 2.1.1l6.4 7.2z"></path>
            </svg>
          </a>
        </div>
      </TripIdeaHeader>
      <MapArea>
        <a href="https://www.skyscanner.co.kr/inspire/map?outboundDate=2020-05&outboundPlace=HKGA&preferDirects=false">
          <MapContentArea></MapContentArea>
          <MapPicker top="86.892" left="896.827">
            <MapPickerContent>
              <p>오사카</p>
            </MapPickerContent>
            <MapPickerTriangle></MapPickerTriangle>
            <MapPickerMarker></MapPickerMarker>
          </MapPicker>

          <MapPicker top="130.763" left="839.167">
            <MapPickerContent>
              <p>타이페이</p>
            </MapPickerContent>
            <MapPickerTriangle></MapPickerTriangle>
            <MapPickerMarker></MapPickerMarker>
          </MapPicker>

          <MapPicker top="173.864" left="789.65">
            <MapPickerContent>
              <p>방콕</p>
            </MapPickerContent>
            <MapPickerTriangle></MapPickerTriangle>
            <MapPickerMarker></MapPickerMarker>
          </MapPicker>

          <MapPicker top="36.418" left="494.224">
            <MapPickerContent>
              <p>파리</p>
            </MapPickerContent>
            <MapPickerTriangle></MapPickerTriangle>
            <MapPickerMarker></MapPickerMarker>
          </MapPicker>

          <MapPicker top="73.771" left="257.038">
            <MapPickerContent>
              <p>뉴욕</p>
            </MapPickerContent>
            <MapPickerTriangle></MapPickerTriangle>
            <MapPickerMarker></MapPickerMarker>
          </MapPicker>

          <MapPicker top="101.153" left="97.185">
            <MapPickerContent>
              <p>로스엔젤레스</p>
            </MapPickerContent>
            <MapPickerTriangle></MapPickerTriangle>
            <MapPickerMarker></MapPickerMarker>
          </MapPicker>
        </a>
      </MapArea>
    </ProductSectionWrapper>
  );
}
export default TripIdea;
