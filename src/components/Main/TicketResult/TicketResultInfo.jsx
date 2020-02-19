import React, { useState } from 'react';
import styled from 'styled-components';
import SearchForm from '../SearchForm';
import { FlexWrapper } from '../../styles';
import { HiddenHeader } from '../../styles';
import { Icon } from 'antd';

const TicketResultInfoWrapper = styled.div`
  width: calc(100% - 49.7rem);
`;

const TicketInfoWrapper = styled(FlexWrapper)``;
const SearchArea = styled.section``;

const TicketResultInfo = props => {
  const [visible, setVisible] = useState(false);

  return (
    <TicketResultInfoWrapper>
      <SearchArea>
        <HiddenHeader>탐색 영역</HiddenHeader>
        <div>
          <button type="button">
            <span>
              <Icon type="search" />
            </span>
          </button>
        </div>
        <div>a</div>
        <div>b</div>
        {visible && <SearchForm />}
      </SearchArea>
      <TicketInfoWrapper></TicketInfoWrapper>
    </TicketResultInfoWrapper>
  );
};

export default TicketResultInfo;
