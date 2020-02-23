import React from 'react';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  OptionContent,
  OptionHeader,
  StyleCheckBox,
  AirportSubTitle,
} from '../../../styles/Filter.style';

const AirportFilter = props => {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <FilterWrapperDl>
      <div>
        <dt>
          <FilterWrapperButton>
            <span>공항</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <dd>
          <OptionHeader>
            <StyleCheckBox>
              출국 및 입국 시 <b>같은 공항</b>이용
            </StyleCheckBox>
          </OptionHeader>
          <AirportSubTitle>도착지</AirportSubTitle>
          <OptionHeader>
            <StyleCheckBox onChange={onChange}>HND</StyleCheckBox>
            <OptionContent>도쿄 하네다</OptionContent>
          </OptionHeader>
        </dd>
      </div>
    </FilterWrapperDl>
  );
};

export default AirportFilter;
