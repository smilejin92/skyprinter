import React from 'react';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  OptionContent,
  OptionHeader,
  StyleCheckBox,
  AllSelectOrRemove,
} from '../../../styles/Filter.style';
import { Radio } from 'antd';

const CarrierFilter = props => {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <FilterWrapperDl>
      <div>
        <dt>
          <FilterWrapperButton>
            <span>항공사</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <dd>
          <AllSelectOrRemove>
            {/* <Radio.Group onChange={onChange} defaultValue="AllSelect">
              <Radio.Button value="AllSelect">모두선택</Radio.Button>
              <div
                style={{
                  width: '.1rem',
                  marginRight: '1.2rem',
                  marginLeft: '1.2rem',
                  boxShadow: 'inset 0 0 0 1px #b2b2bf',
                }}
              ></div>
              <Radio.Button value="AllRemove">모두 지우기</Radio.Button>
            </Radio.Group> */}
            <button>모두선택</button>|<button>모두 지우기</button>
          </AllSelectOrRemove>

          <OptionHeader>
            <StyleCheckBox onChange={onChange}>대한항공</StyleCheckBox>
            <OptionContent> ₩ 117,780</OptionContent>
          </OptionHeader>
        </dd>
      </div>
    </FilterWrapperDl>
  );
};

export default CarrierFilter;
