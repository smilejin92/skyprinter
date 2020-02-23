import React from 'react';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  OptionContent,
  OptionHeader,
  StyleCheckBox,
} from '../../../styles/Filter.style';

const StopFilter = props => {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <FilterWrapperDl>
      <div>
        <dt>
          <FilterWrapperButton>
            <span>경유</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <dd>
          <div>
            <OptionHeader>
              <StyleCheckBox onChange={onChange}>직항</StyleCheckBox>
              <OptionContent> ₩ 117,780</OptionContent>
            </OptionHeader>
            <OptionHeader>
              <StyleCheckBox onChange={onChange}>1회 경유</StyleCheckBox>
              <OptionContent> ₩ 117,780</OptionContent>
            </OptionHeader>
            <OptionHeader>
              <StyleCheckBox onChange={onChange}>2번 이상 경유</StyleCheckBox>
              <OptionContent> ₩ 117,780</OptionContent>
            </OptionHeader>
          </div>
        </dd>
      </div>
    </FilterWrapperDl>
  );
};

export default StopFilter;
