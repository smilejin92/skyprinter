import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import { Slider } from 'antd';

const FilterButton = styled.button`
  margin-bottom: 1.6rem;
  width: 24rem;
  height: 3.6rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.9rem;
  align-items: center;
  border-bottom: 1px solid rgb(216, 216, 225);
  font-size: 1.6rem;
  padding: 0.6rem 0;

  svg {
    transform: scaleY(-1);
  }
`;

const OptionHeader = styled.div`
  margin-top: 0.4rem;
  span {
    font-size: 1.2rem;
  }
`;

const OptionContent = styled.span`
  color: #68697f;
  display: block;
  margin-left: 3rem;
  letter-spacing: -0.1rem;

  &:hover {
    color: #0770e3;
  }
`;

const StyleCheckBox = styled(Checkbox)`
  color: #111236;

  .ant-checkbox-inner {
    width: 18px;
    height: 18px;
  }
  .ant-checkbox + span {
    padding-left: 1.2rem;

    &:hover {
      color: #0770e3;
    }
  }
`;

const StyleSlider = styled(Slider)`
  .ant-slider-handle {
    width: 30px;
    height: 30px;
    margin-top: -13px;

    &::after {
      content: '';
      position: absolute;
      width: 2rem;
      height: 2rem;
      border-radius: 1.8rem;
      box-shadow: inset 0 0 0 0.1rem #cdcdd7;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const StopFilter = props => {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <dl>
      <div>
        <dt>
          <FilterButton>
            <span>경유</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterButton>
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

      <div>
        <StyleSlider defaultValue={30} />
      </div>
    </dl>
  );
};

export default StopFilter;
