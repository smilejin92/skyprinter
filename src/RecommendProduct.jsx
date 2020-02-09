import React from 'react';

function RecommendProduct() {
  return (
    <section className="recommend-area">
      <div className="recommend-header">
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
      </div>
      <div className="recommend-wrapper">
        <a
          href="https://www.skyscanner.co.kr/transport/flights/hkga/tyoa?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content-area">
            <img
              alt="item1"
              src="https://content.skyscnr.com/2b1b04f9dc4df591fe93e3deed87a906/GettyImages-78763208.jpg?resize=1048px:600px&quality=50"
            />
            <div className="content-description">
              <p>
                도쿄,<span>일본</span>
              </p>
              <span>
                가격확인
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.5 12l-6.4 7.2c-.6.6-1.5.7-2.1.1-.6-.5-.7-1.5-.1-2.1l4.6-5.2-4.6-5.2c-.6-.6-.5-1.6.1-2.1s1.6-.5 2.1.1l6.4 7.2z"></path>
                </svg>
              </span>
            </div>
          </div>
        </a>
        <a
          href="https://www.skyscanner.co.kr/news"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content-area">
            <img
              alt="item2"
              src="https://www.skyscanner.net/sponsored-portal-uploads/ce673ce73145ab4a363d631f25cb4517.jpg?resize=1048px:600px&quality=50"
            ></img>

            <div className="content-description">
              <p>세상을 탐험해 보세요</p>
              <span>
                우리의 여행 들로그 읽기{' '}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.5 12l-6.4 7.2c-.6.6-1.5.7-2.1.1-.6-.5-.7-1.5-.1-2.1l4.6-5.2-4.6-5.2c-.6-.6-.5-1.6.1-2.1s1.6-.5 2.1.1l6.4 7.2z"></path>
                </svg>
              </span>
            </div>
          </div>
        </a>
        <a
          href="https://www.skyscanner.co.kr/transport/flights/hkga/spka?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=0&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=2002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content-area">
            <img
              alt="item3"
              src="https://content.skyscnr.com/99b6d376df86c55006e1ca90a18c5902/GettyImages-479490111.jpg?resize=1048px:600px&quality=50"
            />

            <div className="content-description">
              <p>
                삿포로,<span>일본</span>
              </p>
              <span>
                가격확인
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.5 12l-6.4 7.2c-.6.6-1.5.7-2.1.1-.6-.5-.7-1.5-.1-2.1l4.6-5.2-4.6-5.2c-.6-.6-.5-1.6.1-2.1s1.6-.5 2.1.1l6.4 7.2z"></path>
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
export default RecommendProduct;
