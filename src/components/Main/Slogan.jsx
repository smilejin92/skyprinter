import React from 'react';
import { FlexWrapper, Image } from '../styles';
import styled from 'styled-components';

const SloganArticle = styled.article`
  background-color: #f1f2f8;
  height: 47rem;
  margin-top: 6.5rem;
  padding: 3rem 0;
  min-width: 1096px;
`;

const SloganWrapper = styled(FlexWrapper)`
  width: 1048px;
  height: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SloganItems = styled(FlexWrapper)`
  width: calc((100% - 23.4rem) / 3);
  padding: 2.4rem 0;
  align-items: center;

  b {
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: 700;
    letter-spacing: normal;
    margin-bottom: 1.8rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    letter-spacing: normal;
    text-align: center;
  }
`;

const SloganImage = styled(Image)`
  width: 100%;
  height: 205px;
  margin-bottom: 1.8rem;
`;

const Slogan = () => (
  <SloganArticle>
    <SloganWrapper>
      <SloganItems direction="column">
        <SloganImage
          alt="산 정상에서 망원경을 보는 남자"
          src="//js.skyscnr.com/sttc/blackbird/static/media/anywhere.992d8e73.svg"
        />
        <b>전세계 어디든지 떠나세요</b>
        <p>
          여러분의 세계 탐험, 스카이스캐너가 도와드릴께요. 수많은 항공편과 호텔,
          렌터카 옵션 중에서 최고의 가격을 찾아 완벽한 여행을 계획해 보세요.
        </p>
      </SloganItems>
      <SloganItems direction="column">
        <SloganImage
          alt="소파에 앉아 강아지와 함께 핸드폰을 보는 남자"
          src="//js.skyscnr.com/sttc/blackbird/static/media/simple.ac9139b9.svg"
        />
        <b>간단하고 명쾌하게</b>
        <p>
          더는 숨은 수수료나 추가 요금, 교묘한 속임수를 걱정하지 마세요.
          스카이스캐너에서 모든 비용을 투명하게 확인하고 편안한 마음으로 여행을
          준비하세요.
        </p>
      </SloganItems>
      <SloganItems direction="column">
        <SloganImage
          alt="어디로 떠날지 고민하는 여자"
          src="//js.skyscnr.com/sttc/blackbird/static/media/travel.dc26a1ad.svg"
        />
        <b>여행을 내 마음대로</b>
        <p>
          어디로 떠날지 정하셨나요? 예약하기 가장 좋은 시기를 확인하세요. 아직
          정하지 않으셨다고요? 훌쩍 떠나는 휴가부터 짜릿한 모험까지, 다양한
          상품을 살펴보세요.
        </p>
      </SloganItems>
    </SloganWrapper>
  </SloganArticle>
);

export default Slogan;
