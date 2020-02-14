import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../styles';
import DatePicker from '../DatePicker';

const SearchFormWrapper = styled(FlexWrapper)`
  height: 22.2rem;
  background: #02122c;
  border-radius: 0.3rem;
`;

function SearchForm() {
  const [inboundDate, setInboundDate] = useState(new Date()); // 출발 날짜 (오늘)
  const [outboundDate, setOutboundDate] = useState(
    new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  ); // 귀국 날짜 (inboundDate으로부터 일주일 후)
  const [inboundDatePicker, setInboundDatePicker] = useState(false); // DatePicker 표시 여부 - 출발
  const [outboundDatePicker, setOutboundDatePicker] = useState(false); // DatePicker 표시 여부 - 귀국

  const openDatePicker = useCallback(
    type => {
      setInboundDatePicker(type === 'inbound');
      setOutboundDatePicker(type === 'outbound');
    },
    [setInboundDatePicker, setOutboundDatePicker],
  );

  const closeDatePicker = useCallback(() => {
    setInboundDatePicker(false);
    setOutboundDatePicker(false);
  }, [setInboundDatePicker, setOutboundDatePicker]);

  return (
    <SearchFormWrapper>
      <DatePicker
        type="inbound"
        displayModal={openDatePicker}
        hideModal={closeDatePicker}
        inboundDate={inboundDate}
        outboundDate={outboundDate}
        setInboundDate={setInboundDate}
        setOutboundDate={setOutboundDate}
        display={inboundDatePicker}
        inMain={true}
      />
      <DatePicker
        type="outbound"
        displayModal={openDatePicker}
        hideModal={closeDatePicker}
        inboundDate={inboundDate}
        outboundDate={outboundDate}
        setInboundDate={setInboundDate}
        setOutboundDate={setOutboundDate}
        display={outboundDatePicker}
        inMain={true}
      />
    </SearchFormWrapper>
  );
}

export default SearchForm;
