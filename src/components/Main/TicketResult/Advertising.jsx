import React from 'react';
import styled from 'styled-components';
import IMAGE01 from '../../../images/ad_image01.jpeg';
import IMAGE02 from '../../../images/ad_image02.jpeg';

const AdWrapper = styled.div`
  width: 48rem;
`;

const Advertise = styled.div`
  margin-left: 1.6rem;
  margin-top: 1.6rem;
  width: 30rem;
  height: 30rem;
  /* background-color: tomato; */
  background-image: url(${IMAGE01});
  border-radius: 0.3rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const Advertising = props => {
  return (
    <AdWrapper>
      <Advertise></Advertise>
    </AdWrapper>
  );
};

export default Advertising;
