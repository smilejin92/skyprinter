import React, { useState, useEffect, useCallback } from 'react';
import uuid from 'uuid';
import { FlexWrapper } from '../styles';
import {
  BorderedWrapper,
  SearchTypeButton,
  ModalWrapper,
  DatePickerWrapper,
  DatePickerHeader,
  SelectMonth,
  SkipButton,
  Days,
  Day,
  DateItem,
} from '../styles/datePickerStyle';

function DatePicker() {
  const [searchType, setSearchType] = useState(true);

  // 검색 타입 설정
  const setSearchDates = useCallback(() => {
    setSearchType(true);
  }, []);

  const setSearchMonth = useCallback(() => {
    setSearchType(false);
  }, []);

  return (
    <ModalWrapper>
      <BorderedWrapper justify="space-evenly" align="center">
        <SearchTypeButton onClick={setSearchDates} active={searchType}>
          <FlexWrapper justify="space-between" align="center">
            <svg viewBox="0 0 24 24">
              <path d="M8 5c-.6 0-1-.4-1-1 0-.5.4-1 1-1 .5 0 1 .4 1 1s-.4 1-1 1zm9-1c0-.6-.4-1-1-1-.5 0-1 .4-1 1 0 .5.4 1 1 1s1-.4 1-1zm4 1v13c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V5c0-.6.4-1 1-1h1c.6 0 1 .4 1 1s.4 1 1 1h2c.5 0 1-.4 1-1s.4-1 1-1h2c.6 0 1 .4 1 1s.4 1 1 1h2c.5 0 1-.4 1-1s.4-1 1-1h1c.6 0 1 .4 1 1zm-2 5H5v8c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-8zm-8 2H7v4h4v-4z" />
            </svg>
            <span>특정 날짜</span>
          </FlexWrapper>
        </SearchTypeButton>
        <SearchTypeButton onClick={setSearchMonth} active={!searchType}>
          <FlexWrapper justify="space-evenly" align="center">
            <svg viewBox="0 0 24 24">
              <path d="M6 7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2s2-.9 2-2V9c0-1.1-.9-2-2-2zm6-5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2zm6 11c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2v-5c0-1.1-.9-2-2-2z"></path>
            </svg>
            <span>한 달 전체</span>
          </FlexWrapper>
        </SearchTypeButton>
      </BorderedWrapper>
      {searchType && <SearchDates />}
    </ModalWrapper>
  );
}

function SearchDates() {
  const [months, setMonths] = useState([]); // Datepicker에 나타낼 15개의 month
  const [monthsIdx, setMonthsIdx] = useState(1); // Datepicker의 시작 month
  const [selectedYearMonth, setSelectedYearMonth] = useState(null); // 선택된 년월
  const [days, setDays] = useState([]); // Datepicker에 나타낼 요일 (일 ~ 토)
  const [dates, setDates] = useState([]); // 선택된 년월에 맞게 나타 낼 날짜
  const [today, setToday] = useState(null); // 앱 실행 기준 날짜
  const [monthOptions, setMonthOptions] = useState([]); // 선택 가능한 월
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

  // Datepicker에 표시할 년월 초기화
  useEffect(() => {
    const today = new Date();
    const _months = []; // Datepicker에 필요한 년월일 (ex. 2020/1 ~ 2021/3)
    const curYear = today.getFullYear(); // 2020
    const curMonth = today.getMonth() + 1; // 2
    const curDate = today.getDate();

    // _months 배열의 각 요소에 들어 갈 정보
    let year = curYear;
    let month = curMonth;

    // 현재가 1월이면 이전 년 12월을 처리
    if (curMonth === 1) {
      year -= 1;
      month = 12;
    } else {
      month -= 1;
    }

    // _months 배열의 첫 요소 삽입 { 2020, 1, 31 }
    _months.push({ year, month, days: getTotalDays(year, month) });

    // _months 배열의 첫 요소와 마지막 요소 사이의 13개 요소에 대한 처리
    // year = 2020, month = 1 시작
    for (let i = 0; i < 13; i++) {
      month = (month + 1) % 13;
      if (!month) {
        month = 1;
        year += 1;
      }
      _months.push({ year, month, days: getTotalDays(year, month) });
    }

    // _months 배열의 마지막 요소 삽입 { 2021, 3, 31 }
    month = (month + 1) % 13;
    if (!month) {
      month = 1;
      year += 1;
    }
    _months.push({ year, month, days: getTotalDays(year, month) });

    const { year: y, month: m } = _months[monthsIdx];
    setSelectedYearMonth(`${y}/${m}`);
    setMonths(_months);
    setToday(new Date(`${curYear}/${curMonth}/${curDate}`));
    setYearAfterToday(new Date(`${curYear + 1}/${curMonth}/${curDate}`));
  }, [getTotalDays, monthsIdx]);

  // Datepicker에 표시할 요일 엘리먼트 초기화
  useEffect(() => {
    const _days = ['일', '월', '화', '수', '목', '금', '토'];
    const elements = [];
    for (let i = 0; i < _days.length; i++) {
      elements.push(
        <Day key={uuid.v4()} border={i === 0 || i === 5}>
          {_days[i]}
        </Day>,
      );
    }
    setDays(elements);
  }, []);

  // 선택 가능한 월 초기화
  useEffect(() => {
    const options = [];
    for (let i = 1; i < months.length - 1; i++) {
      const { year, month } = months[i];
      options.push(
        <option key={i} value={`${year}/${month}`}>
          {`${year}년 ${month}월`}
        </option>,
      );
    }
    setMonthOptions(options);
  }, [months]);

  // 날짜 선택 시 처리할 로직
  const handleClick = useCallback(({ target }) => {
    if (target.id === 'not-allowed') return;
    console.log(target.id);
  }, []);

  // Datepicker에 표시할 날짜 엘리먼트 변경
  useEffect(() => {
    if (!selectedYearMonth) return;

    // current year와 month의 1일이 일요일인지 탐색
    // 일요일이면 firstDayOfMonth는 0이다.
    // ex. 2020/2/1은 토요일이다 (6).
    const [year, month] = selectedYearMonth.split('/');
    const firstDayOfMonth = new Date(`${year}/${month}/1`).getDay();
    const elements = [];

    // 일요일이면 DatePicker의 시작 날짜는 current month의 1일이다.
    // 일요일이 아니면 DatePicker의 시작 날짜는 이전 달의 x일이다.
    const { days } = months[monthsIdx - 1];
    let startDate = firstDayOfMonth === 0 ? 1 : days - firstDayOfMonth + 1;
    let incrementIdx = firstDayOfMonth === 0 ? 0 : -1;

    // Datepicker에 표시할 날짜를 count를 활용해 1씩 올려준다
    let count = 0;

    // 6주 * 7일 = 42
    for (let i = 0; i < 42; i++) {
      const { year, month, days } = months[monthsIdx + incrementIdx];

      // 현 시점 기준 과거 / 1년 이후는 click disabled
      const ithDate = new Date(`${year}/${month}/${startDate + count}`);
      const past = ithDate < today;
      const future = yearAfterToday < ithDate;

      // 일요일, 금요일 날짜 오른쪽에 border 추가
      const border = i % 7 === 0 || i % 7 === 5;

      // selectedYearMonth에 해당하는 날짜만 파란색
      const available =
        !past && !future && `${year}/${month}` === selectedYearMonth;

      elements.push(
        <DateItem
          key={uuid.v4()}
          border={border}
          notAllowed={past || future}
          available={available}
          hover={!past && !future}
          id={
            !past && !future
              ? `${year}/${month}/${startDate + count}`
              : 'not-allowed'
          }
          onClick={handleClick}
        >
          {startDate + count}
        </DateItem>,
      );

      count += 1;

      // 만약 startDate 날짜가 해당 월의 마지막 날을 지나치지 않았을 경우
      if (startDate + count > days) {
        startDate = 1;
        count = 0;
        incrementIdx += 1;
      }
    }
    setDates(elements);
  }, [
    selectedYearMonth,
    months,
    monthsIdx,
    today,
    yearAfterToday,
    handleClick,
  ]);

  // Dropdown으로 년월을 선택했을 경우
  const selectYearMonth = useCallback(
    ({ target }) => {
      let idx = -1;
      const [year, month] = target.value.split('/');
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
        setSelectedYearMonth(`${year}/${month}`);

        return curIdx + count;
      });
    },
    [months, monthsIdx],
  );

  return (
    <DatePickerWrapper direction="column">
      <DatePickerHeader justify="space-evenly">
        <SkipButton
          disabled={monthsIdx === 1}
          onClick={() => skipMonth('prev')}
        >
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
          onClick={() => skipMonth('next')}
        >
          <svg viewBox="0 0 24 24">
            <path d="M9.9 19.7L17 12 9.9 4.4c-.7-.7-1.7-.2-1.7.7v14c0 .8 1 1.3 1.7.6z"></path>
          </svg>
        </SkipButton>
      </DatePickerHeader>
      <Days width="294">{days}</Days>
      <FlexWrapper wrap="true" width="294">
        {dates}
      </FlexWrapper>
    </DatePickerWrapper>
  );
}

export default DatePicker;
