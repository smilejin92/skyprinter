import React from 'react';

function Slogan() {
  return (
    <article className="slogan-article">
      <div slogan-wrapper>
        <div className="slogans">
          <img></img>
          <h3>전세계 어디든지 떠나세요</h3>
          <p>
            여러분의 세계 탐험, 스카이스캐너가 도와드릴께요. 수많은 항공편과
            호텔, 렌터카 옵션 중에서 최고의 가격을 찾아 완벽한 여행을 계획해
            보세요.
          </p>
        </div>
        <div className="slogans">
          <img></img>
          <h3> 간단하고 명쾌하게</h3>
          <p>
            더는 숨은 수수료나 추가 요금, 교묘한 속임수를 걱정하지 마세요.
            스카이스캐너에서 모든 비용을 투명하게 확인하고 편안한 마음으로
            여행을 준비하세요.
          </p>
        </div>
        <div className="slogans">
          <img></img>
          <h3>여행을 내 마음대로</h3>
          <p>
            어디로 떠날지 정하셨나요? 예약하기 가장 좋은 시기를 확인하세요. 아직
            정하지 않으셨다고요? 훌쩍 떠나는 휴가부터 짜릿한 모험까지, 다양한
            상품을 살펴보세요.
          </p>
        </div>
      </div>
    </article>
  );
}
export default Slogan;
