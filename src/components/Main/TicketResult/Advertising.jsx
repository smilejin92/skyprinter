import React from 'react';
import styled from 'styled-components';
import IMAGE01 from '../../../images/ad_image01.jpeg';
import IMAGE02 from '../../../images/ad_image02.jpeg';
import IMAGE03 from '../../../images/ad_image03.jpeg';

const AdWrapper = styled.div`
  width: 48rem;
`;

const Advertise = styled.div`
  margin-left: 1.6rem;
  margin-top: 1.6rem;
  width: 30rem;
  height: ${props => (props.height ? props.height : '30rem')};
  /* background-color: tomato; */
  background-image: url(${props => props.image || IMAGE02});
  border-radius: 0.3rem;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Advertising = () => {
  return (
    <AdWrapper>
      <Advertise image={IMAGE01}></Advertise>
      <Advertise image={IMAGE02}></Advertise>
      <Advertise image={IMAGE03}></Advertise>
    </AdWrapper>
  );
};

export default Advertising;
