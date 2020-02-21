import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SearchForm from '../SearchForm';
import { FlexWrapper } from '../../styles';
import { HiddenHeader } from '../../styles';
import { Icon } from 'antd';
import DatePickerContainer from '../../../containers/DatePickerContainer';
import { connect } from 'react-redux';

const TicketResultInfoWrapper = styled.div`
  width: calc(100% - 49.7rem);
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

const SearchArea = styled.section`
  position: relative;
  min-height: 7.6rem;
  border-radius: 0 0 0.6rem 0.6rem;
  background-color: #042759;
  cursor: pointer;
`;

const SearchSummary = styled.div`
  padding: 0.6rem 1.2rem 1.2rem 0;
  color: #fff;
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

const SearchDatePickerGroup = styled.nav`
  display: flex;
  ${({ tripType }) =>
    tripType === 'round' &&
    css`
      align-items: flex-end;
    `}
  height: 100%;
  font-size: 1.2rem;
`;

const SearchPassenger = styled.div`
  margin-left: 60px;
  height: 100%;
  font-size: 1.2rem;
`;

const AddOns = styled.div`
  width: 100%;
  margin: 1.2rem 0 0 0;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  span {
    color: #0770e3;
    font-size: 1.2rem;
  }
`;
const CalenderAndChart = styled.span`
  float: left;
`;
const AddLuggage = styled.span`
  float: right;
`;

const TicketFilterSection = styled.section`
  width: 26%;
`;

const TicketResultSection = styled.section`
  width: 72%;
`;
const ResultAndArrangeStandard = styled(FlexWrapper)`
  width: 100%;
  height: 3.6rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
  span {
    font-size: 1.2rem;
  }
  label {
    font-weight: 700;
    font-size: 1.2rem;
  }
  select {
    height: 3.6rem;
    border: 1px solid gray;
    padding: 0.6rem 3rem 0.6rem 1.2rem;
    background: #fff
      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4Ij48c3R5bGU+PC9zdHlsZT48cGF0aCBkPSJNMTkuNyAxMC4zTDEyIDE3LjRsLTcuNy03LjFjLS42LS42LS4yLTEuNy43LTEuN2gxNGMuOSAwIDEuMyAxLjEuNyAxLjd6IiBmaWxsPSIjNDQ0NTYwIi8+PC9zdmc+')
      no-repeat right 1.2rem center;
    -webkit-appearance: none;
  }
`;
const ArrangeFilter = styled.div`
  margin-bottom: 1.2rem;
  height: 10rem;
  width: 100%;
  background: #fff;
  border-radius: 0.3rem 0.3rem;
  button {
    padding: 1.2rem 1.8rem;
    width: 33%;
    span {
      font-size: 2.4rem;
      color: #0770e3;
      font-weight: 700;
    }
    p {
      font-size: 1.2rem;
    }
    &:nth-child(2n) {
      border-right: 0.5px solid gray;
      border-left: 0.5px solid gray;
    }
  }
`;
const TicketInfoDetail = styled.div`
  margin-bottom: 1.2rem;
  height: 10rem;
  width: 100%;
  background: #fff;
  border-radius: 0.3rem 0.3rem;
`;

const MoreResultButton = styled.button`
  color: #0770e3;
  font-size: 1.9rem;
  width: 16.7rem;
  height: 3.6rem;
  padding: 0.6rem 1.8rem;
  border: 1px solid gray;
  background: #fff;
  font-weight: 700;

  &:hover {
    border: 2px solid #0770e3;
    width: 16.8rem;
    height: 3.7rem;
  }
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

const TicketResultInfo = ({ tripType, places }) => {
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
            <SearchTitle>
              {places.inBoundName} - {places.outBoundName}
            </SearchTitle>
            <SearchDatePickerGroup tripType={tripType}>
              <DatePickerContainer type="inline-inbound" inMain={false} />
              {tripType === 'round' && (
                <DatePickerContainer type="inline-outbound" inMain={false} />
              )}
            </SearchDatePickerGroup>
          </SearchHeaderWrapper>
          <SearchPassenger>1 성인 | 일반석</SearchPassenger>{' '}
        </SearchSummary>
        {visible && <SearchForm />}
      </SearchArea>
      <div>
        <AddOns>
          <CalenderAndChart>
            <a
              href="https://www.skyscanner.co.kr/transport/flights/icn/nyca?adultsv2=1&childrenv2=&cabinclass=economy&rtn=1&preferdirects=false&oym=2002&iym=2003&outboundaltsenabled=false&inboundaltsenabled=false"
              target="_blank"
              rel="noopener noreferrer"
            >
              달력/차트 보기
            </a>
          </CalenderAndChart>
          <AddLuggage>
            <a
              href="https://www.skyscanner.co.kr/airlinefees"
              target="_blank"
              rel="noopener noreferrer"
            >
              추가 수화물 요금이 부과될 수 있음
            </a>
          </AddLuggage>
        </AddOns>

        <div>
          {/* <TicketFilterSection>
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
          </TicketFilterSection>  */}

          <TicketResultSection>
            <ResultAndArrangeStandard>
              <span>{123}결과</span>
              <div>
                <label>정렬기준</label>
                <select>
                  <option>최저가순</option>
                  <option>최단여행시간순</option>
                  <option>출국: 출발시간</option>
                  <option>귀국: 출발시간</option>
                </select>
              </div>
            </ResultAndArrangeStandard>

            <ArrangeFilter>
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
                <span>₩ 가격</span>
                <p> 14시간 13분(평군)</p>
              </button>
            </ArrangeFilter>

            <TicketInfoDetail>
              <div>
                <div>
                  <div>
                    <img />
                  </div>

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

              <div>
                <div>
                  <div>
                    <img />
                  </div>

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
              <div>
                <div>
                  <p>총 7건중 최저가</p>
                  <span>₩ 1177800</span>
                  <p>총 가격</p>
                  <button>
                    선택
                    <span>
                      <svg width="24" height="24" fill="rgb(255, 255, 255)">
                        <path d="M14.4 19.5l5.7-5.3c.4-.4.7-.9.8-1.5.1-.3.1-.5.1-.7s0-.4-.1-.6c-.1-.6-.4-1.1-.8-1.5l-5.7-5.3c-.8-.8-2.1-.7-2.8.1-.8.8-.7 2.1.1 2.8l2.7 2.5H5c-1.1 0-2 .9-2 2s.9 2 2 2h9.4l-2.7 2.5c-.5.4-.7 1-.7 1.5s.2 1 .5 1.4c.8.8 2.1.8 2.9.1z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </TicketInfoDetail>

            <MoreResultButton>더 많은 결과 표시</MoreResultButton>
          </TicketResultSection>

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

const mapStateToProps = state => ({
  places: state.places,
  tripType: state.datepicker.tripType,
});

export default connect(mapStateToProps)(TicketResultInfo);

// export default TicketResultInfo;
