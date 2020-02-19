import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../styles';
import TicketResultInfo from './TicketResultInfo';
import Advertising from './Advertising';

const TicketResultBackground = styled.div`
  background-color: rgb(238, 239, 246);
`;

const TicketResultWrapper = styled(FlexWrapper)`
  width: 144rem;
  margin: 0 auto;
  min-height: 110vh;
  background-color: #ddddef;
`;

const index = props => {
  return (
    <TicketResultBackground>
      <TicketResultWrapper>
        <TicketResultInfo />
        <Advertising />
      </TicketResultWrapper>
    </TicketResultBackground>
  );
};

export default index;
