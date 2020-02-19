import React, { useState, useCallback, useMemo, useRef } from 'react';
import { FlexWrapper } from '../../../styles';
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
} from './index.style';
import SearchDates from './SearchDates';
import useOutsideRef from '../../../hooks/useOutsideRef';

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

export default DatePicker;
