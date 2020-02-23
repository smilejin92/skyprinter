import styled from 'styled-components';
import { Checkbox, Slider } from 'antd';

export const FilterWrapperDl = styled.dl`
  margin-bottom: 1.8rem;
`;

export const FilterWrapperButton = styled.button`
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

export const OutBoundTimeDiv = styled.div``;
export const InBoundTimeDiv = styled.div`
  margin-top: 3.7rem;
`;

export const OptionHeader = styled.div`
  margin-top: 0.4rem;
  span {
    font-size: 1.2rem;
  }
`;

export const OptionContent = styled.span`
  color: #68697f;
  display: block;
  margin-left: 3rem;
  letter-spacing: -0.1rem;

  &:hover {
    color: #0770e3;
  }
`;

export const StyleCheckBox = styled(Checkbox)`
  color: #111236;

  b {
    font-weight: 700;
  }

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

export const TimeHeader = styled.b`
  line-height: 1.8rem;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 1.2rem;
`;

export const TimeContent = styled.span`
  display: block;
  margin-bottom: 0.6rem;
  color: #68697f;
  line-height: 1.8rem;
  font-weight: 400;
  letter-spacing: normal;
  font-size: 1.2rem;
`;

export const StyleSlider = styled(Slider)`
  .ant-slider-handle {
    width: 30px;
    height: 30px;
    margin-top: -13px;
    border: 0.1rem solid #dddde5;
    box-shadow: 0 1px 3px 0 rgba(37, 32, 31, 0.3);

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

    &:hover::after {
      box-shadow: inset 0 0 0 0.1rem #cdcdd7;
    }
  }

  .ant-slider {
    &:hover {
      .ant-slider-track {
        background-color: #02122c;
      }
    }
    &:hover {
      .ant-slider-handle:not(.ant-tooltip-open) {
        border-color: #eeeff6;
      }
    }
  }

  .ant-tooltip-open {
    border: 0.1rem solid #dddde5;
  }

  .ant-slider-rail {
    height: 0.6rem;
    background: rgb(221, 221, 229);
  }
  .ant-slider-step {
    height: 0.6rem;
  }
  .ant-slider-track {
    height: 0.6rem;
    background-color: #02122c;

    &:hover {
      background-color: #02122c;
    }
  }
`;

export const AllSelectOrRemove = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;

  color: #b2b2bf;
  button {
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: normal;
    font-weight: 700;
    color: #b2b2bf;
    text-decoration: none;
    outline: none;
  }
`;

export const AirportSubTitle = styled.span`
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  display: block;
  line-height: 1.8rem;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 1.2rem;
`;
