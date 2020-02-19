import React, { useState } from 'react';
import styled from 'styled-components';
import SearchForm from '../SearchForm';
import { FlexWrapper } from '../../styles';
import { HiddenHeader } from '../../styles';
import { Icon } from 'antd';

const TicketResultInfoWrapper = styled.div`
  width: calc(100% - 49.7rem);
  color: #fff;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

const TicketInfoWrapper = styled.div``;
const SearchArea = styled.section`
  position: relative;
  min-height: 7.6rem;
  border-radius: 0 0 0.6rem 0.6rem;
  background-color: #042759;
  cursor: pointer;
`;

const SearchSummary = styled.div`
  padding: 0.6rem 1.2rem 1.2rem 0;
`;

const SearchButtonDiv = styled.div`
  position: absolute;
  margin: 0 1.2rem;
  width: 3.6rem;
  padding-top: 6px;
  height: 5.8rem;

  button {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 2.9rem;
    text-decoration: none;
    box-shadow: none;
    cursor: pointer;
    user-select: none;
    color: #fff;
    background-color: #00a698;

    &:hover {
      background-color: #00887d;
    }
  }
`;

const SearchIcon = styled(Icon)`
  width: 1.8rem;
  height: 1.8rem;
  color: #fff;
  font-size: 1.8rem;
`;

const SearchHeaderWrapper = styled(FlexWrapper)`
  margin-left: 60px;
  justify-content: space-between;
  align-items: center;
`;

const SearchTitle = styled.div`
  padding-top: 0.6rem;
  height: 3.4rem;
`;

const SearchDatePickerGroup = styled.div`
  height: 100%;
  font-size: 1.2rem;
`;

const SearchDatePicker = styled.div`
  display: inline-block;
  width: 19.2rem;
  height: 100%;
  background-color: tomato;
`;

const SearchPassenger = styled.div`
  margin-left: 60px;
  height: 100%;
  font-size: 1.2rem;
`;

const LuggageMoreDetail = styled.div`
  line-height: 2.4rem;
  display: block;
  text-align: left;
  padding-top: 1.2rem;
  p {
    padding-bottom: 1.8rem;
  }
`;

const TicketResultInfo = props => {
  const [visible, setVisible] = useState(false);

  return (
    <TicketResultInfoWrapper>
      <SearchArea>
        <HiddenHeader>검색 영역</HiddenHeader>
        <SearchSummary onClick={() => setVisible(!visible)}>
          {' '}
          <SearchButtonDiv>
            <button type="button">
              <span>
                <SearchIcon type="search" />
              </span>
            </button>
          </SearchButtonDiv>
          <SearchHeaderWrapper>
            <SearchTitle>도쿄 (모두) - 서울 (모두)</SearchTitle>
            <SearchDatePickerGroup>
              <SearchDatePicker>1</SearchDatePicker>
              <SearchDatePicker>2</SearchDatePicker>
            </SearchDatePickerGroup>
          </SearchHeaderWrapper>
          <SearchPassenger>1 성인 | 일반석</SearchPassenger>{' '}
        </SearchSummary>
        {visible && <SearchForm />}
      </SearchArea>
      <div>
        <div>
          <span>
            <a
              href="https://www.skyscanner.co.kr/transport/flights/icn/nyca?adultsv2=1&childrenv2=&cabinclass=economy&rtn=1&preferdirects=false&oym=2002&iym=2003&outboundaltsenabled=false&inboundaltsenabled=false"
              target="_blank"
              rel="noopener noreferrer"
            >
              달력/차트 보기
            </a>
          </span>
          <span>
            <a
              href="https://www.skyscanner.co.kr/airlinefees"
              target="_blank"
              rel="noopener noreferrer"
            >
              추가 수화물 요금이 부과될 수 있음
            </a>
          </span>
        </div>

        <div>
          <section className="검색 옵션">
            <button>
              <svg></svg>
              가격 변동 알림 받기
            </button>

            <dl>
              <div>
                <dt>
                  <button>
                    <span>경유</span>
                    <svg></svg>
                  </button>
                </dt>
                <dd>
                  <div>
                    <div>
                      <label>
                        <input type="checkbox">직항</input>
                      </label>
                      <span>₩1177800</span>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox">1회 경유</input>
                      </label>
                      <span>₩1177800</span>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox">2회 경유</input>
                      </label>
                      <span>₩1177800</span>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>

            <dl>
              <div>
                <dt>
                  <button>
                    <span>출발 시간대 설정</span>
                    <svg></svg>
                  </button>
                </dt>
                <dd>
                  <div>
                    <div>
                      <b>가는날 출발 시간</b>
                      <p>오전 12:00 - 오후 11:59</p>
                      <div>슬라이더</div>
                    </div>
                    <div>
                      <b>오는날 출발 시간</b>
                      <p>오전 12:00 - 오후 11:59</p>
                      <div>슬라이더</div>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>

            <dl>
              <div>
                <dt>
                  <button>
                    <span>총 소요시간</span>
                    <svg></svg>
                  </button>
                </dt>
                <dd>
                  <div>
                    <div>
                      <p>14.5시간 - 61.5시간</p>
                    </div>
                    <div>슬라이더</div>
                  </div>
                </dd>
              </div>
            </dl>

            <dl>
              <div>
                <dt>
                  <button>
                    <span>항공사</span>
                    <svg></svg>
                  </button>
                </dt>
                <dd>
                  <div>
                    <button>모두선택</button>
                    <button>모두 지우기</button>
                  </div>

                  <div>
                    <label>
                      <input>대한항공</input>
                    </label>
                    <span>₩1177800</span>
                  </div>
                </dd>
              </div>
            </dl>

            <dl>
              <div>
                <dt>
                  <button>
                    <span>공항</span>
                    <svg></svg>
                  </button>
                </dt>
                <dd>
                  <div>
                    <label>
                      <input>
                        출국 및 입국 시 <b>같은 공항</b>이용
                      </input>
                    </label>
                  </div>

                  <div>
                    <p>도착지</p>
                    <div>
                      <label>
                        <input>
                          출국 및 입국 시 <b>같은 공항</b>이용
                        </input>
                      </label>
                      <p>뉴욕 뉴왁</p>
                    </div>
                    <div>
                      <label>
                        <input>
                          출국 및 입국 시 <b>같은 공항</b>이용
                        </input>
                      </label>
                      <p>뉴욕 존에프케네디</p>
                    </div>
                    <div>
                      <label>
                        <input>
                          출국 및 입국 시 <b>같은 공항</b>이용
                        </input>
                      </label>
                      <p>뉴욕 라과디아</p>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>
          </section>

          <section className="검색 결과">
            <div>
              <span>결과</span>
              <div>
                <label>정렬기준</label>
                <select>
                  <option>최저가순</option>
                  <option>최단여행시간순</option>
                  <option>출국: 출발시간</option>
                  <option>귀국: 출발시간</option>
                </select>
              </div>
            </div>

            <div>
              <button>
                <p>추천순</p>
                <span>₩가격</span>
                <p> 14시간 13분(평군)</p>
              </button>
              <button>
                <p>추천순</p>
                <span>₩가격</span>
                <p> 14시간 13분(평군)</p>
              </button>
              <button>
                <p>추천순</p>
                <span>₩가격</span>
                <p> 14시간 13분(평군)</p>
              </button>
            </div>

            <div role="button">
              <div>
                <div>
                  <img />
                  <div>
                    <div>
                      <p>오후 8:25</p>
                      <span>ICN</span>
                    </div>
                    <div>
                      <p>13시간 55분</p>
                      <div></div>
                      <svg></svg>
                      <p>직항</p>
                    </div>
                    <div>
                      <p>오후 8:20</p>
                      <span>JFK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button>더 많은 결과 표시</button>
          </section>
          <LuggageMoreDetail>
            <p>
              <b>요금은 매일 갱신됩니다.</b> 예약 시기의 이용 가능 여부에 따라
              요금이 달라질 수 있습니다.
            </p>
            <p>
              <b>체크인 수화물이 있습니까?</b>
              <a
                href="https://www.skyscanner.co.kr/airlinefees"
                target="_blank"
                rel="noopener noreferrer"
              >
                추가 수화물 요금이 부과될 수 있음
              </a>
            </p>
          </LuggageMoreDetail>
        </div>
      </div>
    </TicketResultInfoWrapper>
  );
};

export default TicketResultInfo;
