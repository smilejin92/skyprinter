import React, { useState, useCallback, useMemo, useRef } from 'react';
import SearchDates from './SearchDates';
import useOutsideRef from '../../../hooks/useOutsideRef';
import { FlexWrapper } from '../../styles';
import { useLocation } from 'react-router-dom';
import {
  DatePickerWrapper,
  DatePickerHeader,
  ButtonLabel,
  DisplayDatePickerBtn,
  DatePickerBody,
  SearchTypes,
  SearchTypeBtn,
  ButtonBox,
  CancelBtn,
} from '../../styles/DatePicker.style';

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
  tripType,
  setRoundTrip,
}) {
  const [searchType, setSearchType] = useState(true); // 검색 타입 - 특정 날짜

  // DatePicker 표시
  const selectDates = useCallback(() => {
    if (visible) return;
    if (
      tripType === 'oneway' &&
      (type === 'inbound' || type === 'inline-inbound')
    ) {
      setRoundTrip();
    }
    displayModal();
  }, [displayModal, setRoundTrip, tripType, visible, type]);

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
    if (!selectedDate) return '(편도)';
    const month = selectedDate.getMonth() + 1;
    const date = selectedDate.getDate();

    if (inMain) {
      const year = selectedDate.getFullYear();
      return `${year}. ${month}. ${date}`;
    } else {
      const days = ['일', '월', '화', '수', '목', '금', '토'];
      const day = days[selectedDate.getDay()];
      return `${month}월 ${date}일 (${day})`;
    }
  }, [selectedDate, inMain]);

  const { pathname } = useLocation();
  const outsideRef = useRef(null);
  useOutsideRef(outsideRef, hideModal);

  return (
    <DatePickerWrapper page={pathname} inMain={inMain} tripType={tripType}>
      {inMain ? (
        <DatePickerHeader direction="column" inMain={inMain} arrowTip={visible}>
          <ButtonLabel htmlFor={`date-button-${type}`}>
            {type === 'outbound' ? '가는 날' : '오는 날'}
          </ButtonLabel>
          <DisplayDatePickerBtn
            id={`date-button-${type}`}
            onClick={selectDates}
            page={pathname}
            inMain={inMain}
          >
            <span>{convertDateToString}</span>
          </DisplayDatePickerBtn>
        </DatePickerHeader>
      ) : (
        <DatePickerHeader
          onClick={e => {
            e.stopPropagation();
          }}
          inMain={inMain}
          arrowTip={visible}
        >
          <button style={{ width: '3rem', lineHeight: '1rem' }}>
            <svg style={{ fill: 'white' }} viewBox="0 0 24 24">
              <path d="M13.7 19.7L6.6 12l7.1-7.7c.6-.6 1.7-.2 1.7.7v14c0 .9-1.1 1.4-1.7.7z"></path>
            </svg>
          </button>
          <button onClick={() => displayModal()}>
            <span style={{ color: 'white' }}>{convertDateToString}</span>
          </button>
          <button style={{ width: '3rem', lineHeight: '1rem' }}>
            <svg style={{ fill: 'white' }} viewBox="0 0 24 24">
              <path d="M9.9 19.7L17 12 9.9 4.4c-.7-.7-1.7-.2-1.7.7v14c0 .8 1 1.3 1.7.6z"></path>
            </svg>
          </button>
        </DatePickerHeader>
      )}
      {visible && selectedDate && (
        <DatePickerBody inMain={inMain} ref={outsideRef}>
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
            tripType={tripType}
            selectedDate={selectedDate}
            outboundDate={outboundDate}
            inboundDate={inboundDate}
            setOutboundDate={setOutboundDate}
            setInboundDate={setInboundDate}
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

export default DatePicker;
