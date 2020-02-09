import React, { useState, useEffect } from 'react';
import './datePicker.scss';

function DatePicker() {
  const [searchDate, setSearchDate] = useState(true);

  // 검색 타입 설정
  function setSearchType({ target }) {
    setSearchDate(target.id === 'dates');
  }

  return (
    <div className="date-picker">
      <div className="btn-group">
        <button id="dates" onClick={setSearchType}>
          특정 날짜
        </button>
        <button id="month" onClick={setSearchType}>
          한 달 전체
        </button>
      </div>
      {searchDate && <SearchDates />}
    </div>
  );
}

function SearchDates() {
  const [months, setMonths] = useState([]);
  const [monthsIdx, setMonthsIdx] = useState(0);
  const [maxDates, setMaxDates] = useState([]);
  const [selectedYearMonth, setSelectedYearMonth] = useState(null);
  const [now] = useState(new Date());
  const [days, setDays] = useState([]);
  const [dates, setDates] = useState([]);
  // const [yearAfterNow] = useState(
  //   new Date(
  //     new Date().setFullYear(
  //       new Date().getFullYear() + 1
  //     )
  //   )
  // );

  // Datepicker에 표시할 년월 초기화
  useEffect(() => {
    const _months = [];
    const _maxDates = [];
    let year = now.getFullYear();
    let month = now.getMonth();

    _maxDates.push(getTotalDays(year, month));

    for (let i = 0; i < 13; i++) {
      month = (month + 1) % 13;
      if (!month) {
        month = 1;
        year += 1;
      }
      _maxDates.push(getTotalDays(year, month));
      _months.push({ year, month });
    }

    month = (month + 1) % 13;
    if (!month) {
      month = 1;
      year += 1;
    }
    _maxDates.push(getTotalDays(year, month));

    const { year: y, month: m } = _months[monthsIdx];
    setSelectedYearMonth(`${y}-${m}`);
    setMaxDates(_maxDates);
    setMonths(_months);
  }, [monthsIdx, now]);

  // Datepicker에 표시할 요일 엘리먼트 초기화
  useEffect(() => {
    const _days = ['일', '월', '화', '수', '목', '금', '토'];
    const elements = [];
    for (let i = 0; i < _days.length; i++) {
      elements.push(<div className="day">{_days[i]}</div>);
    }
    setDays(elements);
  }, []);

  // Datepicker에 표시할 날짜 엘리먼트 변경
  useEffect(() => {
    if (!selectedYearMonth) return;

    const elements = [];
    const [year, date] = selectedYearMonth.split('-');
    const firstDay = new Date(`${year}/${date}/1`).getDay();

    // 일요일이 아니면 a : b
    let loopStartDate = firstDay !== 0 ? maxDates[monthsIdx] - firstDay + 1 : 1;
    let incrementIdx = firstDay !== 0 ? 0 : 1;
    let count = 0;

    for (let i = 0; i < 42; i++) {
      if (loopStartDate + count <= maxDates[monthsIdx + incrementIdx]) {
        elements.push(<div className="date">{loopStartDate + count}</div>);
        count += 1;
      } else {
        loopStartDate = 1;
        count = 1;
        incrementIdx += 1;
        elements.push(<div className="date">{loopStartDate}</div>);
      }
    }
    setDates(elements);
  }, [selectedYearMonth, monthsIdx, maxDates]);

  // 해당 년월의 일 수를 반환
  function getTotalDays(y, m) {
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
  }

  // Dropdown으로 년월을 선택했을 경우
  function selectYearMonth({ target }) {
    let idx = -1;
    const [year, month] = target.value.split('-');
    months.forEach((m, i) => {
      if (m.year === +year && m.month === +month) {
        idx = i;
      }
    });
    setMonthsIdx(idx);
    setSelectedYearMonth(target.value);
  }

  // 우측 화살표로 월을 선택했을 경우
  function getNextMonth() {
    setMonthsIdx(curIdx => {
      let count = 0;
      if (curIdx + 1 < months.length) count += 1;
      const { year, month } = months[monthsIdx + count];
      setSelectedYearMonth(`${year}-${month}`);
      return curIdx + count;
    });
  }

  // 좌측 화살표로 월을 선택했을 경우
  function getPrevMonth() {
    setMonthsIdx(curIdx => {
      let count = 0;
      if (0 <= curIdx - 1) count -= 1;
      const { year, month } = months[monthsIdx + count];
      setSelectedYearMonth(`${year}-${month}`);
      return curIdx + count;
    });
  }

  return (
    <div className="wrapper">
      <div className="header">
        <button disabled={!monthsIdx} onClick={getPrevMonth}>
          {'<'}
        </button>
        {selectedYearMonth && (
          <select value={selectedYearMonth} onChange={selectYearMonth}>
            {months.map((m, i) => (
              <option key={i} value={`${m.year}-${m.month}`}>
                {`${m.year}년 ${m.month}월`}
              </option>
            ))}
          </select>
        )}
        <button
          disabled={monthsIdx >= months.length - 1}
          onClick={getNextMonth}
        >
          {'>'}
        </button>
      </div>
      <div className="days">{days}</div>
      <div className="dates">{dates}</div>
    </div>
  );
}

export default DatePicker;
