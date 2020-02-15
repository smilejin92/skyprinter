import React from 'react';
import styled from 'styled-components';

const StyledSmall = styled.small`
  display: block;
  width: 1048px;
  margin: 1.2rem auto;
  color: #444560;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 400;
  letter-spacing: normal;
`;

const Copyright = () => (
  <StyledSmall>&copy; Skyscanner Ltd 2002-2020</StyledSmall>
);

export default Copyright;
