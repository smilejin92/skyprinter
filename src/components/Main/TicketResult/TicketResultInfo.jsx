import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import uuid from 'uuid';
import { Popover, Progress } from 'antd';
import DatePickerContainer from '../../../containers/DatePickerContainer';
import Spinner from './Spinner';
import SearchForm from '../SearchForm';
import StopFilter from './filter/StopFilter';
import TimeFilter from './filter/TimeFilter';
import DurationFilter from './filter/DurationFilter';
import CarrierFilter from './filter/CarrierFilter';
import AirportFilter from './filter/AirportFilter';
import earth from '../../../images/earth.gif';
import { HiddenHeader } from '../../styles';
import {
  setInfiniteScroll,
  setTicketIndex,
  loadMoreTickets
} from '../../../redux/modules/session';
import {
  TicketResultInfoWrapper,
  SearchArea,
  SearchSummary,
  SearchButtonDiv,
  SearchIcon,
  SearchHeaderWrapper,
  SearchTitle,
  SearchDatePickerGroup,
  SearchPassenger,
  AddOns,
  CalenderAndChart,
  AddLuggage,
  SectionWrapper,
  TicketFilterSection,
  TicketResultSection,
  ResultAndArrangeStandard,
  SelectArrageStandard,
  ArrangeFilterButtonWapper,
  FilterPriceButton,
  MoreResultButton,
  LuggageMoreDetail,
  PriceAlarm,
  ProgressDiv,
  MainLoading
} from '../../styles/TicketResultInfo.style';

function TicketResultInfo({
  tripType,
  passengerInfo,
  places,
  session,
  setInfiniteScroll,
  loadMoreTickets
}) {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState([
    {
      id: 'mostCheapest',
      name: '최저가',
      price: null,
      time: null,
      toggle: true
    },
    {
      id: 'shortTrip',
      name: '최단여행 시간',
      price: null,
      time: null,
      toggle: false
    },
    {
      id: 'departure',
      name: '출국:출발시간',
      price: null,
      time: null,
      toggle: false
    }
  ]);

  const convertClass = useCallback(type => {
    const seatTypes = [
      { cabinClass: 'economy', name: '일반석' },
      { cabinClass: 'premiumeconomy', name: '프리미엄 일반석' },
      { cabinClass: 'business', name: '비지니스석' },
      { cabinClass: 'first', name: '일등석' }
    ];

    const [selectedSeat] = seatTypes.filter(s => type === s.cabinClass);

    return selectedSeat.name;
  }, []);

  const getTotalPassengers = useCallback(() => {
    const { adults, children } = passengerInfo;
    return adults + children.length;
  }, [passengerInfo]);

  const changeFilter = useCallback(
    id => {
      setFilter(
        filter.map(filterItem =>
          filterItem.id === id
            ? { ...filterItem, toggle: true }
            : { ...filterItem, toggle: false }
        )
      );
    },
    [filter]
  );

  const toggleVisible = useCallback(() => {
    setVisible(!visible);
  }, [visible, setVisible]);

  return (
    <TicketResultInfoWrapper>
      <SearchArea>
        <HiddenHeader>검색 영역</HiddenHeader>
        <SearchSummary onClick={toggleVisible}>
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
              <DatePickerContainer type="inline-outbound" inMain={false} />
              {tripType === 'round' && (
                <DatePickerContainer type="inline-inbound" inMain={false} />
              )}
            </SearchDatePickerGroup>
          </SearchHeaderWrapper>
          <SearchPassenger>
            {getTotalPassengers() > 1
              ? `${getTotalPassengers()} 승객 | ${convertClass(
                  passengerInfo.cabinClass
                )}`
              : `${getTotalPassengers()} 성인 | ${convertClass(
                  passengerInfo.cabinClass
                )}`}
          </SearchPassenger>{' '}
        </SearchSummary>
        {visible && <SearchForm />}
      </SearchArea>
      {session.pollResult && session.pollResult.Itineraries.length !== 0 ? (
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
          <SectionWrapper>
            <TicketFilterSection>
              <PriceAlarm>
                <svg viewBox="0 0 24 24 " width="18" height="18">
                  <path
                    fill="#0770e3"
                    d="M18 13.2c.2 2.3 2 1.7 2 4 0 1.7-3.5 3.8-8 3.8s-8-2.1-8-3.8c0-2.3 1.8-1.7 2-4 .5-5.5 1-7.7 4.4-8.9C11.6 3.8 11 3 12 3s.4.8 1.6 1.3c3.5 1.2 3.9 3.4 4.4 8.9zM12 20c3.9 0 6.5-1.7 6.5-2.1 0-.7-2-2-6.5-1.9-4.5 0-6.5 1.4-6.5 2 0 .3 2.6 2 6.5 2zm-2.5-2.8c.7-.1 1.6-.2 2.5-.2s1.8.1 2.5.2c-.6 1.2-1.4 1.8-2.5 1.8s-2-.6-2.5-1.8z"
                  ></path>
                </svg>
                가격 변동 알림 받기
              </PriceAlarm>
              <StopFilter />
              <TimeFilter />
              <DurationFilter />
              <CarrierFilter />
              <AirportFilter />
            </TicketFilterSection>
            <TicketResultSection filterLoader={session.filterLoader}>
              <ResultAndArrangeStandard>
                <div>
                  {session.progress < 100 && <Spinner />}
                  <span>{123}결과</span>
                </div>
                <SelectArrageStandard>
                  <label htmlFor="arrangedStandard">정렬기준</label>
                  <select id="arrangedStandard" onChange={() => {}}>
                    <option value="최저가렬">최저가순</option>
                    <option value="최단여행시간순">최단여행시간순</option>
                    <option value="출국">출국: 출발시간</option>
                    <option value="귀국">귀국: 출발시간</option>
                  </select>
                </SelectArrageStandard>
              </ResultAndArrangeStandard>
              {session.progress < 100 && (
                <ProgressDiv>
                  <Progress percent={session.progress} showInfo={false} />
                </ProgressDiv>
              )}
              <ArrangeFilterButtonWapper>
                {filter.map(filterItem => (
                  <Popover
                    key={uuid.v4()}
                    content={`${filterItem.name} 순 정렬`}
                  >
                    <FilterPriceButton
                      id={filterItem.id}
                      toggle={filterItem.toggle}
                      onClick={() => changeFilter(filterItem.id)}
                      className={filterItem.toggle ? 'active' : null}
                    >
                      <p>{filterItem.name}</p>
                      <span>₩533,800</span>
                      <p>{`${filterItem.time}`}</p>
                    </FilterPriceButton>
                  </Popover>
                ))}
              </ArrangeFilterButtonWapper>
              <InfiniteScroll
                hasMore={
                  session.pollResult.Itineraries[session.ticketEndIndex] !==
                  undefined
                }
                loadMore={loadMoreTickets}
              >
                <div>{session.tickets}</div>
              </InfiniteScroll>
              {!session.infiniteScroll && (
                <MoreResultButton onClick={setInfiniteScroll}>
                  더 많은 결과 표시
                </MoreResultButton>
              )}
              <LuggageMoreDetail>
                <p>
                  <b>요금은 매일 갱신됩니다.</b> 예약 시기의 이용 가능 여부에
                  따라 요금이 달라질 수 있습니다.
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
            </TicketResultSection>
          </SectionWrapper>
        </div>
      ) : (
        <MainLoading>
          <div>
            <img src={earth} alt="검색 중" />
            <span>검색 중</span>
          </div>
        </MainLoading>
      )}
    </TicketResultInfoWrapper>
  );
}

const mapStateToProps = state => ({
  session: state.session,
  places: state.places,
  tripType: state.datepicker.tripType,
  passengerInfo: state.passenger
});

const mapDispatchToProps = dispatch => ({
  setInfiniteScroll: () => {
    dispatch(setInfiniteScroll());
  },
  setTicketIndex: idx => {
    dispatch(setTicketIndex(idx));
  },
  loadMoreTickets: () => {
    dispatch(loadMoreTickets());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketResultInfo);
