import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { Popover, Icon, Progress } from 'antd';
import DatePickerContainer from '../../../containers/DatePickerContainer';
import Spinner from './Spinner';
import TicketInfoDetail from './TicketInfoDetail';
import SearchForm from '../SearchForm';
import StopFilter from './filter/StopFilter';
import TimeFilter from './filter/TimeFilter';
import DurationFilter from './filter/DurationFilter';
import CarrierFilter from './filter/CarrierFilter';
import AirportFilter from './filter/AirportFilter';
import earth from '../../../images/earth.gif';
import { FlexWrapper } from '../../styles';
import { HiddenHeader } from '../../styles';

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
  margin: 1rem 0 1rem 0;
  line-height: 2.4rem;

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

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TicketFilterSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 26%;
`;

const TicketResultSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 72%;
  margin-left: 1.5rem;
  position: relative;
`;

const ResultAndArrangeStandard = styled(FlexWrapper)`
  width: 100%;
  height: 3.6rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  span {
    font-size: 1.2rem;
  }
  label {
    font-weight: 700;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  select {
    display: flex;
    align-items: flex-end;
    height: 3.6rem;
    border: 1px solid rgb(169, 169, 182);
    padding: 0.6rem 3rem 0.6rem 1.2rem;
    background: #fff
      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4Ij48c3R5bGU+PC9zdHlsZT48cGF0aCBkPSJNMTkuNyAxMC4zTDEyIDE3LjRsLTcuNy03LjFjLS42LS42LS4yLTEuNy43LTEuN2gxNGMuOSAwIDEuMyAxLjEuNyAxLjd6IiBmaWxsPSIjNDQ0NTYwIi8+PC9zdmc+')
      no-repeat right 1.2rem center;
    -webkit-appearance: none;
  }
`;

const SelectArrageStandard = styled(FlexWrapper)`
  align-items: center;
`;
const ArrangeFilterButtonWapper = styled.div`
  margin-bottom: 1.2rem;
  height: 10rem;
  width: 100%;
  background: #fff;
  border-radius: 0.6rem 0.6rem;
`;

const FilterPriceButton = styled.button`
  padding: 1.2rem 1.8rem;
  width: 33.3%;
  text-align: left;

  ${({ toggle, id }) =>
    toggle
      ? css`
          border-radius: ${id === 'mostCheapest'
            ? '0.4rem 0 0 0.4rem'
            : id === 'departure'
            ? '0 0.4rem 0.4rem 0'
            : 'none'};
          background: #042759;

          span {
            color: #fff;
          }
          p {
            color: #fff;
          }
        `
      : css`
          span {
            color: #0770e3;
          }
        `}
  p {
    font-size: 1.2rem;
  }

  span {
    font-weight: 700;
    font-size: 2.4rem;
  }

  &:nth-child(2n) {
    border-right: 0.5px solid #ddddef;
    border-left: 0.5px solid #ddddef;
  }
`;

const MoreResultButton = styled.button`
  border-radius: 0.4rem;
  line-height: 2.4rem;
  margin: 0 auto;
  color: #0770e3;
  font-size: 1.9rem;
  width: 18.6rem;
  padding: 0.4rem 1.8rem;
  border: 2px solid rgb(216, 216, 225);
  background: #fff;
  font-weight: 700;
  &:hover {
    border: 2px solid #0770e3;
  }
`;
const LuggageMoreDetail = styled.div`
  font-size: 1.2rem;
  line-height: 2.4rem;
  display: block;
  text-align: left;
  padding-top: 1.2rem;
  b {
    font-weight: 700;
  }
  p {
    padding-bottom: 1.2rem;
  }
  a {
    color: #0770e3;
  }
`;

const PriceAlarm = styled.button`
  color: #0770e3;
  padding: 0.6rem 1.8rem;
  width: 24rem;
  border: 2px solid rgb(216, 216, 225);
  border-radius: 0.4rem;
  line-height: 1.9rem;
  vertical-align: middle;
  font-size: 1.9rem;
  font-weight: 700;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  &:hover {
    border: 2px solid #0770e3;
  }
`;

const ProgressDiv = styled.div.attrs({})`
  position: absolute;
  top: 3rem;
  width: 680px;

  .ant-progress-inner {
    background-color: rgb(215, 215, 225);
  }

  .ant-progress-bg {
    background-color: rgb(1, 102, 218);
    height: 6px !important;
  }
`;

const MainLoading = styled.div`
  height: 72rem;
  position: relative;

  div {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    span {
      display: block;
      text-align: center;
      font-size: 32px;
      line-height: 1.5;
    }
  }
`;

const TicketResultInfo = ({ tripType, passengerInfo, places, session }) => {
  // const [progressNum, setProgressNum] = useState(0);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState([
    {
      id: 'mostCheapest',
      name: '최저가',
      price: null,
      time: null,
      toggle: true,
    },
    {
      id: 'shortTrip',
      name: '최단여행 시간',
      price: null,
      time: null,
      toggle: false,
    },
    {
      id: 'departure',
      name: '출국:출발시간',
      price: null,
      time: null,
      toggle: false,
    },
  ]);

  const convertClass = useCallback(type => {
    const seatTypes = [
      { cabinClass: 'economy', name: '일반석' },
      { cabinClass: 'premiumeconomy', name: '프리미엄 일반석' },
      { cabinClass: 'business', name: '비지니스석' },
      { cabinClass: 'first', name: '일등석' },
    ];

    const [selectedSeat] = seatTypes.filter(s => type === s.cabinClass);

    return selectedSeat.name;
  }, []);

  const getTotalPassengers = () => {
    const { adults, children } = passengerInfo;
    return adults + children.length;
  };

  const changeFilter = id => {
    setFilter(
      filter.map(filterItem =>
        filterItem.id === id
          ? { ...filterItem, toggle: true }
          : { ...filterItem, toggle: false },
      ),
    );
    console.log(id);
  };

  const formatDateString = useCallback(dateString => {
    const [date, time] = dateString.split('T');
    const [militaryHours, minutes] = time.split(':');
    const timePeriod = +militaryHours < 12 ? '오전' : '오후';
    const hours = +militaryHours <= 12 ? +militaryHours : +militaryHours - 12;
    return `${timePeriod} ${hours}:${minutes}`;
  }, []);

  const formatDuration = useCallback(duration => {
    const hours = Math.floor(duration / 60);
    if (!hours) return `${duration}분`;

    const minutes = duration % 60;
    if (!minutes) return `${hours}시간`;

    return `${hours}시간 ${minutes}분`;
  }, []);

  const getAirlineLogo = useCallback(
    leg => {
      const { Carriers } = leg;
      if (Carriers.length < 2) {
        const [carrierId] = Carriers;
        const { ImageUrl, Name } = session.tempResults.Carriers.filter(
          c => c.Id === carrierId,
        )[0];
        return <img src={ImageUrl} alt={Name} />;
      } else {
        let altText = '';
        for (let i = 0; i < Carriers.length - 1; i++) {
          const { Name } = session.tempResults.Carriers.filter(
            c => c.Id === Carriers[i],
          )[0];
          altText += `${Name} + `;
        }
        const { Name } = session.tempResults.Carriers.filter(
          c => c.Id === Carriers[Carriers.length - 1],
        )[0];
        altText += Name;
        return <div>{altText}</div>;
      }
    },
    [session.tempResults],
  );

  const getOperatingAirline = useCallback(
    (leg, type) => {
      console.log(leg);
      const { Carriers, OperatingCarriers } = leg;
      const operatorIds = OperatingCarriers.filter(
        oc => !Carriers.includes(oc),
      ); // 실질적 운행사

      if (!operatorIds.length) {
        return <div></div>;
      } else {
        const operatorNames = [];
        operatorIds.forEach(id => {
          const { Name } = session.tempResults.Carriers.filter(
            c => c.Id === id,
          )[0];
          operatorNames.push(Name);
        });

        let text = '';
        for (let i = 0; i < operatorNames.length - 1; i++) {
          text += `${operatorNames[i]}, `;
        }

        // operators에 Carriers의 요소가 없는 경우 = operators에서 운항
        if (operatorIds.length === OperatingCarriers.length) {
          text += `${operatorNames[operatorNames.length - 1]}에서 운항`;
        } else {
          // operators에 Carriers의 요소가 있는 경우 = ~에서 부분 운항
          text += `${operatorNames[operatorNames.length - 1]}에서 부분 운항`;
        }
        return <div className={`operators ${type}`}>{text}</div>;
      }
    },
    [session.tempResults],
  );

  const getTimeDifference = useCallback(leg => {
    const { Departure, Arrival } = leg;
    const [departureDate] = Departure.split('T');
    const [arrivalDate] = Arrival.split('T');
    const departureDateObj = new Date(departureDate);
    const arrivalDateObj = new Date(arrivalDate);
    return (arrivalDateObj - departureDateObj) / 1000 / 60 / 60 / 24;
  }, []);

  const isSameDay = useCallback(leg => {
    const { Departure, Arrival } = leg;
    const [departureDate] = Departure.split('T');
    const [arrivalDate] = Arrival.split('T');
    return departureDate === arrivalDate;
  }, []);

  const getPlaceCode = useCallback(
    placeId => {
      const [targetPlace] = session.tempResults.Places.filter(
        p => p.Id === placeId,
      );
      return targetPlace.Code;
    },
    [session.tempResults],
  );

  const getParentPlaceCode = useCallback(
    placeId => {
      const [targetPlace] = session.tempResults.Places.filter(
        p => p.Id === placeId,
      );
      return getPlaceCode(targetPlace.ParentId);
    },
    [session.tempResults, getPlaceCode],
  );

  const getNumberOfStops = useCallback(leg => {
    const { Stops, Segments } = leg;
    if (!Stops.length) {
      return 0;
    } else {
      if (Stops.length === Segments.length) {
        return Segments.length - 1;
      } else {
        return Stops.length;
      }
    }
  }, []);

  const getStopsList = useCallback(
    leg => {
      const { Stops, Segments } = leg;
      const textElements = [];
      if (Stops.length === Segments.length) {
        for (let i = 1; i < Segments.length; i++) {
          const prevDest = Segments[i - 1].DestinationStation;
          const curOrigin = Segments[i].OriginStation;
          let text = '';
          const placeCode =
            prevDest === curOrigin
              ? getPlaceCode(prevDest)
              : getParentPlaceCode(prevDest);
          text += placeCode;
          if (i + 1 < Stops.length) text += ', ';

          if (prevDest !== curOrigin) {
            textElements.push(
              <span id={placeCode} warning={true}>
                {text}
              </span>,
            );
          } else {
            textElements.push(<span id={placeCode}>{text}</span>);
          }
        }
      } else {
        for (let i = 0; i < Stops.length; i++) {
          let text = '';
          const placeCode = getPlaceCode(Stops[i]);
          text += placeCode;
          if (i + 1 < Stops.length) text += ', ';
          textElements.push(<span id={placeCode}>{text}</span>);
        }
      }
      return textElements;
    },
    [getPlaceCode, getParentPlaceCode],
  );

  const getStopDots = useCallback(
    leg => {
      const $lis = [];
      const stops = getNumberOfStops(leg);
      for (let i = 0; i < stops; i++) {
        $lis.push(<li></li>);
      }

      return $lis;
    },
    [getNumberOfStops],
  );

  const priceToString = useCallback(price => {
    let result = '';
    let _price = price + '';
    _price = _price.split('.')[0];

    let count = 0;
    for (let i = _price.length - 1; i >= 0; i--) {
      result = _price[i] + result;
      count += 1;
      if (i > 0 && count === 3) {
        result = ',' + result;
        count = 0;
      }
    }
    return result;
  }, []);

  const isSamePlace = useCallback(ticket => {
    if (!ticket.InboundLeg) return true;
    const { OutboundLeg, InboundLeg } = ticket;
    return OutboundLeg.DestinationStation === InboundLeg.OriginStation;
    // }, [ticket]);
  }, []);

  const getResults = useCallback(
    results => {
      if (!results) return [];
      const lists = [];
      for (let i = 0; i < results.Itineraries.length; i++) {
        if (i === 10) break;
        lists.push(
          <TicketInfoDetail
            key={uuid.v4()}
            data={results}
            itinerary={results.Itineraries[i]}
            progress={session.progress}
            formatDateString={formatDateString}
            formatDuration={formatDuration}
            getAirlineLogo={getAirlineLogo}
            getOperatingAirline={getOperatingAirline}
            getTimeDifference={getTimeDifference}
            isSameDay={isSameDay}
            getPlaceCode={getPlaceCode}
            getParentPlaceCode={getParentPlaceCode}
            getNumberOfStops={getNumberOfStops}
            getStopsList={getStopsList}
            getStopDots={getStopDots}
            priceToString={priceToString}
            isSamePlace={isSamePlace}
          />,
        );
      }
      return lists;
    },
    [
      formatDateString,
      formatDuration,
      getAirlineLogo,
      getNumberOfStops,
      getOperatingAirline,
      getParentPlaceCode,
      getPlaceCode,
      getStopDots,
      getStopsList,
      getTimeDifference,
      isSameDay,
      isSamePlace,
      priceToString,
      session.progress,
    ],
  );

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
              {/* 서울 - 도쿄 */}
            </SearchTitle>
            <SearchDatePickerGroup tripType={tripType}>
              <DatePickerContainer type="inline-inbound" inMain={false} />
              {tripType === 'round' && (
                <DatePickerContainer type="inline-outbound" inMain={false} />
              )}
            </SearchDatePickerGroup>
          </SearchHeaderWrapper>
          <SearchPassenger>
            {getTotalPassengers() > 1
              ? `${getTotalPassengers()} 승객 | ${convertClass(
                  passengerInfo.cabinClass,
                )}`
              : `${getTotalPassengers()} 성인 | ${convertClass(
                  passengerInfo.cabinClass,
                )}`}
          </SearchPassenger>{' '}
        </SearchSummary>
        {visible && <SearchForm />}
      </SearchArea>
      {session.pollResults && session.pollResults.Itineraries.length !== 0 ? (
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
            <TicketResultSection>
              <ResultAndArrangeStandard>
                <div>
                  {session.pollResults &&
                    session.pollResults.Status !== 'UpdatesComplete' && (
                      <Spinner />
                    )}
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
              {/* 프로그레스바 */}
              {session.pollResults &&
                session.pollResults.Status !== 'UpdatesComplete' && (
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
              {session.sessionKey && session.progress < 100
                ? getResults(session.tempResults)
                : getResults(session.pollResults)}
              <MoreResultButton>더 많은 결과 표시</MoreResultButton>
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
};

const mapStateToProps = state => ({
  session: state.session,
  places: state.places,
  tripType: state.datepicker.tripType,
  passengerInfo: state.passenger,
});

export default connect(mapStateToProps)(TicketResultInfo);

// export default TicketResultInfo;
