import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import uuid from 'uuid';
import { FlexWrapper } from '../src/styles';
import {
  DatePickerWrapper,
  DatePickerHeader,
  ButtonLabel,
  DisplayDatePickerBtn,
  DatePickerBody,
  SearchTypes,
  SearchTypeBtn,
  DatesSelection,
  SelectMonth,
  SkipButton,
  Days,
  Day,
  DateItem,
  ButtonBox,
  CancelBtn,
} from './datePickerStyle';
import useOutsideRef from '../src/hooks/useOutsideRef';
import { connect } from 'react-redux';
import { displayModal, hideModal } from '../src/redux/modules/display';
import {
  setInboundDate,
  setOutboundDate,
} from '../src/redux/modules/datepicker';

function DatePicker({
  type,
  inMain,
  displayModal,
  hideModal,
  visible,
  selectedDate,
  setInboundDate,
  setOutboundDate,
  inboundDate,
  outboundDate,
}) {
  const [searchType, setSearchType] = useState(true); // 검색 타입 - 특정 날짜

  // DatePicker 표시
  const selectDates = useCallback(() => {
    if (visible) return;
    displayModal();
  }, [displayModal, visible]);

  // 검색 타입 설정 - 특정 날짜
  const setSearchDates = useCallback(() => {
    setSearchType(true);
  }, []);

  // 검색 타입 설정 - 한 달 전체
  const setSearchMonth = useCallback(() => {
    console.log('추후 업데이트 예정');
    // setSearchType(false);
  }, []);

  // DatePicker 닫기
  const closeModal = useCallback(() => {
    hideModal();
  }, [hideModal]);

  // 선택된 날짜를 'year. month. date.' 형식으로 반환
  const convertDateToString = useMemo(() => {
    const month = selectedDate.getMonth() + 1;
    const date = selectedDate.getDate();

    if (inMain) {
      const year = selectedDate.getFullYear();
      return `${year}. ${month}. ${date}`;
    } else {
      const days = ['일', '월', '화', '수', '목', '금', '토'];
      const day = days.indexOf(selectedDate.getDay());
      return `${month}월 ${date}일 (${day})`;
    }
  }, [selectedDate, inMain]);

  const outsideRef = useRef(null);
  useOutsideRef(outsideRef, hideModal);

  return (
    <DatePickerWrapper>
      {inMain && (
        <DatePickerHeader direction="column" arrowTip={visible}>
          <ButtonLabel htmlFor={`date-button-${type}`}>
            {type === 'inbound' ? '가는 날' : '오는 날'}
          </ButtonLabel>
          <DisplayDatePickerBtn
            id={`date-button-${type}`}
            onClick={selectDates}
          >
            <span>{convertDateToString}</span>
          </DisplayDatePickerBtn>
        </DatePickerHeader>
      )}
      {visible && (
        <DatePickerBody ref={outsideRef}>
          {inMain && (
            <SearchTypes justify="space-evenly" align="center">
              <SearchTypeBtn onClick={setSearchDates} active={searchType}>
                <FlexWrapper justify="space-between" align="center">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5c-.6 0-1-.4-1-1 0-.5.4-1 1-1 .5 0 1 .4 1 1s-.4 1-1 1zm9-1c0-.6-.4-1-1-1-.5 0-1 .4-1 1 0 .5.4 1 1 1s1-.4 1-1zm4 1v13c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V5c0-.6.4-1 1-1h1c.6 0 1 .4 1 1s.4 1 1 1h2c.5 0 1-.4 1-1s.4-1 1-1h2c.6 0 1 .4 1 1s.4 1 1 1h2c.5 0 1-.4 1-1s.4-1 1-1h1c.6 0 1 .4 1 1zm-2 5H5v8c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-8zm-8 2H7v4h4v-4z" />
                  </svg>
                  <span>특정 날짜</span>
                </FlexWrapper>
              </SearchTypeBtn>
              <SearchTypeBtn onClick={setSearchMonth} active={!searchType}>
                <FlexWrapper justify="space-evenly" align="center">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2s2-.9 2-2V9c0-1.1-.9-2-2-2zm6-5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2zm6 11c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2v-5c0-1.1-.9-2-2-2z"></path>
                  </svg>
                  <span>한 달 전체</span>
                </FlexWrapper>
              </SearchTypeBtn>
            </SearchTypes>
          )}
          <SearchDates
            type={type}
            selectedDate={selectedDate}
            inboundDate={inboundDate}
            outboundDate={outboundDate}
            setInboundDate={setInboundDate}
            setOutboundDate={setOutboundDate}
            closeModal={closeModal}
          />
          <ButtonBox>
            <CancelBtn onClick={closeModal}>취소</CancelBtn>
          </ButtonBox>
        </DatePickerBody>
      )}
    </DatePickerWrapper>
  );
}

function SearchDates({
  type,
  selectedDate,
  closeModal,
  setInboundDate,
  setOutboundDate,
  inboundDate,
  outboundDate,
}) {
  const [months, setMonths] = useState([]); // DatePicker에 나타낼 15개의 month
  const [monthsIdx, setMonthsIdx] = useState(null); // Datepicker의 시작 month index
  const [monthOptions, setMonthOptions] = useState([]); // 선택 가능한 월
  const [selectedYearMonth, setSelectedYearMonth] = useState(null); // 선택된 년월
  const [days, setDays] = useState([]); // Datepicker에 나타낼 요일 (일 ~ 토)
  const [dates, setDates] = useState([]); // 선택된 년월에 맞게 나타 낼 날짜 엘리먼트
  const [today, setToday] = useState(null); // 앱 실행 기준 날짜
  const [yearAfterToday, setYearAfterToday] = useState(null); // 앱 실행 기준 날짜 후 1년

  // 전달된 년월의 일 수를 반환
  const getTotalDays = useCallback((y, m) => {
    if (m === 4 || m === 6 || m === 9 || m === 11) {
      return 30;
    } else if (m === 2) {
      if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    }
    return 31;
  }, []);

  // Datepicker에 표시할 모든 년월일 초기화
  useEffect(() => {
    const today = new Date();
    const _months = []; // Datepicker에 필요한 년월일 (ex. 2020/1 ~ 2021/3)
    const curYear = today.getFullYear(); // 2020
    const curMonth = today.getMonth() + 1; // 2
    const curDate = today.getDate();

    // _months 배열의 각 요소에 들어갈 정보
    let year = curYear;
    let month = curMonth;

    // 현재가 1월이면 이전 년 12월을 처리
    // 1월이 아니면 이전 달부터
    if (curMonth === 1) {
      month = 12;
      year -= 1;
    } else {
      month -= 1;
    }

    // _months 배열의 첫 요소 삽입 { 2020, 1, 31 }
    _months.push({ year, month, days: getTotalDays(year, month) });

    // _months 배열의 첫 요소 이후 14개 요소에 대한 처리
    // year = 2020, month = 2 시작
    for (let i = 0; i < 14; i++) {
      month = (month + 1) % 13;
      if (!month) {
        month = 1;
        year += 1;
      }
      _months.push({ year, month, days: getTotalDays(year, month) });
    }
    // monthsIdx 여기서 설정 based on travelDate
    let _monthsIdx = -1;

    const selectedYear = selectedDate.getFullYear();
    const selectedMonth = selectedDate.getMonth() + 1;

    for (let i = 0; i < _months.length; i++) {
      if (
        _months[i].year === selectedYear &&
        _months[i].month === selectedMonth
      ) {
        _monthsIdx = i;
        break;
      }
    }

    const { year: y, month: m } = _months[_monthsIdx];
    setSelectedYearMonth(`${y}-${m}`);
    setMonths(_months);
    setMonthsIdx(_monthsIdx);
    setToday(new Date(`${curYear}/${curMonth}/${curDate}`));
    setYearAfterToday(new Date(`${curYear + 1}/${curMonth}/${curDate}`));
  }, [getTotalDays, selectedDate]);

  // Datepicker에 표시할 요일 엘리먼트 초기화
  useLayoutEffect(() => {
    const targets = ['일', '월', '화', '수', '목', '금', '토'];
    const _days = [];
    for (let i = 0; i < targets.length; i++) {
      _days.push(
        <Day key={uuid.v4()} border={i === 0 || i === 5}>
          {targets[i]}
        </Day>,
      );
    }
    setDays(_days);
  }, []);

  // 선택 가능한 월 초기화
  useLayoutEffect(() => {
    const options = [];
    for (let i = 1; i < months.length - 1; i++) {
      const { year, month } = months[i];
      options.push(
        <option key={uuid.v4()} value={`${year}-${month}`}>
          {`${year}년 ${month}월`}
        </option>,
      );
    }
    setMonthOptions(options);
  }, [months]);

  // 날짜 선택 시 처리할 로직
  const selectDate = useCallback(
    ({ target }) => {
      const [year, month, date] = target.id.split('-');
      const clickedDate = new Date(`${year}/${month}/${date}`);

      // 1. past와 future는 return 시킨다.
      if (clickedDate < today || yearAfterToday < clickedDate) return;

      // 2. travelDate을 설정한다.
      if (type === 'inbound') {
        if (clickedDate > outboundDate) {
          setOutboundDate(clickedDate);
        }
        setInboundDate(clickedDate);
      } else {
        // 2.2 outbound < inbound
        if (clickedDate < inboundDate) {
          setInboundDate(clickedDate);
        }
        setOutboundDate(clickedDate);
      }
      closeModal();
    },
    [
      today,
      yearAfterToday,
      type,
      closeModal,
      outboundDate,
      setInboundDate,
      setOutboundDate,
      inboundDate,
    ],
  );

  // Datepicker에 표시할 날짜 엘리먼트 변경
  useLayoutEffect(() => {
    if (!selectedYearMonth) return;

    // current year와 month의 1일이 일요일인지 탐색
    // 일요일이면 firstDayOfMonth는 0이다.
    // ex. 2020/2/1은 토요일이다 (6).
    const [year, month] = selectedYearMonth.split('-');
    const firstDayOfMonth = new Date(`${year}/${month}/1`).getDay();
    const _dates = [];

    // 일요일이면 DatePicker의 시작 날짜는 current month의 1일이다.
    // 일요일이 아니면 DatePicker의 시작 날짜는 이전 달의 x일이다.
    const { days } = months[monthsIdx - 1];
    let startDate = firstDayOfMonth === 0 ? 1 : days - firstDayOfMonth + 1;
    let incrementMonthIdx = firstDayOfMonth === 0 ? 0 : -1;

    // Datepicker에 표시할 날짜를 count를 활용해 1씩 올려준다
    let count = 0;

    // 6주 * 7일 = 42
    for (let i = 0; i < 42; i++) {
      const { year, month, days } = months[monthsIdx + incrementMonthIdx];

      // 현 시점 기준 과거, 1년 이후는 click disabled
      const ithDate = new Date(`${year}/${month}/${startDate + count}`);
      const past = ithDate < today;
      const future = yearAfterToday < ithDate;

      // 일요일, 금요일 날짜 오른쪽에 border 추가
      const border = i % 7 === 0 || i % 7 === 5;

      // selectedYearMonth에 해당하는 날짜만 파란색
      const colorBlue =
        !past && !future && `${year}-${month}` === selectedYearMonth;

      const inYear = selectedDate.getFullYear();
      const inMonth = selectedDate.getMonth() + 1;
      const inDate = selectedDate.getDate();

      const selected =
        `${year}-${month}-${startDate + count}` ===
        `${inYear}-${inMonth}-${inDate}`;

      _dates.push(
        <DateItem
          key={uuid.v4()}
          id={`${year}-${month}-${startDate + count}`}
          border={border}
          notAllowed={past || future}
          colorBlue={colorBlue}
          hover={!past && !future}
          selected={selected}
          onClick={selectDate}
        >
          {startDate + count}
        </DateItem>,
      );

      count += 1;

      // 만약 startDate 날짜가 해당 월의 마지막 날을 지나치지 않았을 경우
      if (startDate + count > days) {
        startDate = 1;
        count = 0;
        incrementMonthIdx += 1;
      }
    }

    setDates(_dates);
  }, [
    selectedYearMonth,
    months,
    monthsIdx,
    today,
    yearAfterToday,
    selectDate,
    type,
    selectedDate,
  ]);

  // Dropdown으로 년월을 선택했을 경우
  const selectYearMonth = useCallback(
    ({ target }) => {
      let idx = -1;
      const [year, month] = target.value.split('-');

      months.forEach((m, i) => {
        if (m.year === +year && m.month === +month) {
          idx = i;
        }
      });
      setMonthsIdx(idx);
      setSelectedYearMonth(target.value);
    },
    [months],
  );

  // 양쪽 화살표로 월을 선택했을 경우
  const skipMonth = useCallback(
    type => {
      if (type !== 'next' && type !== 'prev') return;

      setMonthsIdx(curIdx => {
        let count = 0;

        if (type === 'next') {
          if (curIdx + 1 < months.length - 1) count += 1;
        } else {
          if (1 <= curIdx - 1) count -= 1;
        }

        const { year, month } = months[monthsIdx + count];
        setSelectedYearMonth(`${year}-${month}`);

        return curIdx + count;
      });
    },
    [months, monthsIdx],
  );

  const getPrevMonth = useCallback(() => {
    skipMonth('prev');
  }, [skipMonth]);

  const getNextMonth = useCallback(() => {
    skipMonth('next');
  }, [skipMonth]);

  return (
    <DatesSelection direction="column">
      <FlexWrapper justify="space-evenly">
        <SkipButton disabled={monthsIdx === 1} onClick={getPrevMonth}>
          <svg viewBox="0 0 24 24">
            <path d="M13.7 19.7L6.6 12l7.1-7.7c.6-.6 1.7-.2 1.7.7v14c0 .9-1.1 1.4-1.7.7z"></path>
          </svg>
        </SkipButton>
        {selectedYearMonth && (
          <SelectMonth value={selectedYearMonth} onChange={selectYearMonth}>
            {monthOptions}
          </SelectMonth>
        )}
        <SkipButton
          disabled={monthsIdx >= months.length - 2}
          onClick={getNextMonth}
        >
          <svg viewBox="0 0 24 24">
            <path d="M9.9 19.7L17 12 9.9 4.4c-.7-.7-1.7-.2-1.7.7v14c0 .8 1 1.3 1.7.6z"></path>
          </svg>
        </SkipButton>
      </FlexWrapper>
      <Days>{days}</Days>
      <FlexWrapper wrap="true">{dates}</FlexWrapper>
    </DatesSelection>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { type } = ownProps;
  const isInbound = type === 'inbound';

  return {
    inboundDate: state.datepicker.inboundDate,
    outboundDate: state.datepicker.outboundDate,
    selectedDate: isInbound
      ? state.datepicker.inboundDate
      : state.datepicker.outboundDate,
    visible: isInbound
      ? state.display.inboundDatePicker
      : state.display.outboundDatePicker,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { type } = ownProps;
  const modalType =
    type === 'inbound' ? 'inboundDatePicker' : 'outboundDatePicker';

  return {
    displayModal: () => {
      dispatch(displayModal(modalType));
    },
    hideModal: () => {
      dispatch(hideModal());
    },
    setInboundDate: inboundDate => {
      dispatch(setInboundDate(inboundDate));
    },
    setOutboundDate: outboundDate => {
      dispatch(setOutboundDate(outboundDate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
