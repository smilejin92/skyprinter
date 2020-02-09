import React from 'react';

function TripIdea() {
  return (
    <section className="trip-wrapper">
      <div className="tripidea-header">
        <h3>어행 아이디어를 얻으세요</h3>
        <div className="tripidea-description">
          <p>항공편 가격 지도로 전 세계를 한눈에 확인하세요</p>
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
      </div>
      <div className="map-content-area">
        <a href="https://www.skyscanner.co.kr/inspire/map?outboundDate=2020-05&outboundPlace=HKGA&preferDirects=false">
          <div className="map-contnet"></div>
        </a>
      </div>
    </section>
  );
}
export default TripIdea;
