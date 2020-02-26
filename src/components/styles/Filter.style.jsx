import styled, { css } from 'styled-components';
import { Checkbox, Slider, Button } from 'antd';

export const FilterWrapperDl = styled.dl`
  margin-bottom: 1.8rem;
`;

export const FilterWrapperDd = styled.dd`
  height: auto;
  overflow: hidden;
`;

export const FilterDropDiv = styled.div`
  ${({ drop, allView }) =>
    drop
      ? css`
          animation: open 0.75s forwards;

          @keyframes open {
            0% {
              max-height: 0;
            }
            100% {
              max-height: ${allView ? '120rem' : '28rem'};
            }
          }
        `
      : css`
          animation: close 0.75s forwards;

          @keyframes close {
            0% {
              max-height: ${allView ? '120rem' : '28rem'};
            }
            100% {
              max-height: 0;
            }
        `}
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
    ${({ drop }) => (drop ? 'transform: scaleY(-1)' : '')};
  }
`;

export const OutBoundTimeDiv = styled.div``;
export const InBoundTimeDiv = styled.div`
  margin-top: 1.8rem;
`;

export const OptionHeader = styled.div`
  margin-top: 0.4rem;
  span {
    font-size: 1.2rem;
  }

  &:hover {
    label,
    span {
      color: #0770e3;
    }
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
  pointer: none;

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

export const StyleSliderWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 10px;
`;

export const StyleSlider = styled(Slider)`
  width: 20rem;

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

    &:active {
      /* transform-origin: initial; */
      transform: scale(1.2) translateX(-50%) !important;
    }
  }

  &:hover .ant-slider-track {
    background-color: #02122c;
  }

  &:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: #eeeff6;
  }

  .ant-tooltip-open {
    border-color: #eeeff6;
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

export const AllSelectOrRemoveDiv = styled.div`
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
    padding: 0;
    margin: 0;
    box-shadow: none;
    border: none;
    background-color: transparent;
    color: rgb(37, 124, 222);
  }

  .ant-btn[disabled] {
    box-shadow: none;
    border: none;
    background-color: transparent;
  }

  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active,
  .ant-btn.active {
    box-shadow: none;
    border: none;
    background-color: transparent;
  }
`;

export const AllSelectBtn = styled(Button)`
  margin-right: 1.4rem !important;
  &:after {
    display: none;
  }
`;

export const AllRemoveBtn = styled(Button)`
  margin-left: 1.4rem !important;
  &:after {
    display: none;
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
