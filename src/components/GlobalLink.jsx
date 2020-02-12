import React from 'react';
import styled from 'styled-components';
import { FlexSection, Flag, FlexList } from '../styles';
import { Help } from './Header/SubNav';

export const HeadingTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
`;

const GlobalSection = styled(FlexSection)`
  line-height: 1.5;
  width: 1048px;
  margin: 3.5rem auto 0 auto;
`;

const WorldWrapper = styled.div`
  display: block;
  padding: 3rem 0;
`;
const FlexUl = styled(FlexList)`
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const GlobalLinkList = styled.li`
  width: 23.5rem;
  height: 2.4rem;
  margin-left: ${props => props.left || '3.6rem'};
  transform: translateY(2px);
  span {
    margin-left: 0.6rem;
    font-size: 1.2rem;
  }
  img {
    transform: translateY(2px);
  }
`;

const WorldP = styled.p`
  font-size: 1.2rem;
`;

function GlobalLink() {
  return (
    <GlobalSection direction="column">
      <HeadingTitle>전세계 사이트</HeadingTitle>
      <WorldWrapper>
        <FlexUl>
          <GlobalLinkList left="0">
            <Help
              className="help"
              href="https://www.skyscanner.net/?market=UK&locale=en-GB&_ga=2.167051646.1988065219.1581153801-355577210.1580269878&_gac=1.87664106.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'uk'}.png`}
                alt="국기"
              />
              <span>Cheap flight</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.com.au/?market=AU&locale=en-GB&_ga=2.167051646.1988065219.1581153801-355577210.1580269878&_gac=1.87664106.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'au'}.png`}
                alt="국기"
              />
              <span>AustraLIa - Cheap flights</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.tianxun.com/?market=CN&locale=zh-CN&_ga=2.192824938.1988065219.1581153801-355577210.1580269878&_gac=1.89418345.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'cn'}.png`}
                alt="국기"
              />
              <span>中国 - 机票</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.com.hk/?market=HK&locale=zh-TW&_ga=2.192824938.1988065219.1581153801-355577210.1580269878&_gac=1.89418345.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'hk'}.png`}
                alt="국기"
              />
              <span>香港 - 機票</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList left="0">
            <Help
              className="help"
              href="https://www.skyscanner.co.in/?market=IN&locale=en-GB&_ga=2.192824938.1988065219.1581153801-355577210.1580269878&_gac=1.89418345.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'in'}.png`}
                alt="국기"
              />
              <span>India - Flight tickets</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.co.id/?market=ID&locale=id-ID&_ga=2.192824938.1988065219.1581153801-355577210.1580269878&_gac=1.89418345.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'id'}.png`}
                alt="국기"
              />
              <span>Indonesia - Tiket Pesawat</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.jp/?market=JP&locale=ja-JP&_ga=2.192824938.1988065219.1581153801-355577210.1580269878&_gac=1.89418345.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'jp'}.png`}
                alt="국기"
              />
              <span>日本 - 航空券</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.com.my/?market=MY&locale=en-GB&_ga=2.192824938.1988065219.1581153801-355577210.1580269878&_gac=1.89418345.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'my'}.png`}
                alt="국기"
              />
              <span>Malaysia - flights</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList left="0">
            <Help
              className="help"
              href="https://www.espanol.skyscanner.com/?market=MX&locale=es-MX&_ga=2.174344674.1988065219.1581153801-355577210.1580269878&_gac=1.158100168.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'mx'}.png`}
                alt="국기"
              />
              <span>México - vuelos</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.co.nz/?market=NZ&locale=en-GB&_ga=2.174344674.1988065219.1581153801-355577210.1580269878&_gac=1.158100168.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'nz'}.png`}
                alt="국기"
              />
              <span>New Zealand - Cheap flights</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.com.ph/?market=PH&locale=en-GB&_ga=2.174344674.1988065219.1581153801-355577210.1580269878&_gac=1.158100168.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'ph'}.png`}
                alt="국기"
              />
              <span>Philippines - flights</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.ru/?market=RU&locale=ru-RU&_ga=2.174344674.1988065219.1581153801-355577210.1580269878&_gac=1.158100168.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'ru'}.png`}
                alt="국기"
              />
              <span>Россия - авиабилеты</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList left="0">
            <Help
              className="help"
              href="https://www.skyscanner.com.sg/?market=SG&locale=en-GB&_ga=2.174344674.1988065219.1581153801-355577210.1580269878&_gac=1.158100168.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'sg'}.png`}
                alt="국기"
              />
              <span>Singapore - flights</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.co.kr/?market=KR&locale=ko-KR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'kr'}.png`}
                alt="국기"
              />
              <span>대한민국 - 항공권</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.com.tw/?market=TW&locale=zh-TW&_ga=2.140264819.1988065219.1581153801-355577210.1580269878&_gac=1.159098440.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwEl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'tw'}.png`}
                alt="국기"
              />
              <span>台灣 - 機票</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.co.th/?market=TH&locale=th-TH&_ga=2.140264819.1988065219.1581153801-355577210.1580269878&_gac=1.159098440.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'th'}.png`}
                alt="국기"
              />
              <span>ไทย - ตั๋วเครื่องบิน</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList left="0">
            <Help
              className="help"
              href="https://www.skyscanner.com/?market=US&locale=en-US&_ga=2.140264819.1988065219.1581153801-355577210.1580269878&_gac=1.159098440.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'us'}.png`}
                alt="국기"
              />
              <span>USA - flights</span>
            </Help>
          </GlobalLinkList>
          <GlobalLinkList>
            <Help
              className="help"
              href="https://www.skyscanner.com.vn/?market=VN&locale=vi-VN&_ga=2.140264819.1988065219.1581153801-355577210.1580269878&_gac=1.159098440.1580290199.CjwKCAiA1L_xBRA2EiwAgcLKA4fZLEZo8DwHXIXFET0po5ngK0sO6agxY75MZeyPqvsnHK3Hj7EbohoCfmkQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flag
                src={`https://images.skyscnr.com/images/country/flag/header/${'vn'}.png`}
                alt="국기"
              />
              <span>Việt Nam - các chuyến bay</span>
            </Help>
          </GlobalLinkList>
        </FlexUl>
      </WorldWrapper>

      <WorldP>
        {' '}
        가격비교를 통해 최저가 항공권을 예약하고 즐거운 해외여행을 떠나보세요
      </WorldP>
    </GlobalSection>
  );
}
export default GlobalLink;
