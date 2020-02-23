import React from 'react';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  StyleSlider,
  TimeContent,
} from '../../../styles/Filter.style';

const DurationFilter = props => {
  return (
    <FilterWrapperDl>
      <div>
        <dt>
          <FilterWrapperButton>
            <span>총 소요시간</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <dd>
          <div>
            <div>
              <TimeContent>14.5시간 - 61.5시간</TimeContent>
            </div>
            <div>
              <StyleSlider defaultValue={20} />
            </div>
          </div>
        </dd>
      </div>
    </FilterWrapperDl>
  );
};

export default DurationFilter;
