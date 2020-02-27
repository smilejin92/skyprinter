import React, { useState } from 'react';
import {
  FilterWrapperDl,
  FilterWrapperDd,
  FilterDropDiv,
  FilterWrapperButton,
  StyleSliderWrapper,
  StyleSlider,
  TimeHeader,
  TimeContent,
  InBoundTimeDiv,
  OutBoundTimeDiv
} from '../../../styles/Filter.style';
import { connect } from 'react-redux';
import {
  setFilterOption,
  pollSession
} from '../../../../redux/modules/session';

const TimeFilter = ({ session, setFilterOption, pollSession }) => {
  const [drop, setDrop] = useState(true);
  const [minHour, setMinHour] = useState(0);
  const [maxHour, setMaxHour] = useState(0);

  const switchDrop = () => {
    setDrop(!drop);
  };

  const sliderChange = e => {
    console.log(e);
    console.log('슬라이더 실행!');
  };

  const slideAfterChange = ({}) => {
    console.log('슬라이더 에프터!!');
    // 1. session.filterOption에 duration property가 있는가?
    // 2. duration 값을 슬라이더의 value로 설정
    // const newFilterOption = {
    //   ...session.filterOption,
    //   : duration * 60
    // };
    // // setSliderValue(duration);
    // setFilterOption(newFilterOption)
    // pollSession();
  };
  return (
    <FilterWrapperDl>
      <div>
        <dt>
          <FilterWrapperButton drop={drop} onClick={switchDrop}>
            <span>출발 시간대 설정</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <FilterWrapperDd>
          <FilterDropDiv drop={drop}>
            <OutBoundTimeDiv>
              <TimeHeader>가는날 출발 시간</TimeHeader>
              <TimeContent>{`오전 12:00 - 오후 11:59`}</TimeContent>
              <StyleSliderWrapper>
                <StyleSlider
                  onChange={sliderChange}
                  onAfterChange={() => {}}
                  range

                  // min={outboundDepartTime}
                  // max={outboundDepartEndTime}
                />
              </StyleSliderWrapper>
            </OutBoundTimeDiv>
            <InBoundTimeDiv>
              <TimeHeader>오는날 출발 시간</TimeHeader>
              <TimeContent>{`오전 12:00 - 오후 11:59`}</TimeContent>
              <StyleSliderWrapper>
                <StyleSlider
                  onChange={sliderChange}
                  onAfterChange={() => {}}
                  range
                  defaultValue={[0, 50]}
                  //  min={inboundDepartStartTime}
                  //  max={inboundDepartEndTime}
                />
              </StyleSliderWrapper>
            </InBoundTimeDiv>
          </FilterDropDiv>
        </FilterWrapperDd>
      </div>
    </FilterWrapperDl>
  );
};

const maptStateToProps = state => ({
  session: state.session
});
const mapDispatchToProps = dispatch => ({
  setFilterOption: filterOption => {
    dispatch(setFilterOption(filterOption));
  },
  pollSession: () => {
    dispatch(pollSession());
  }
});
export default connect(maptStateToProps, mapDispatchToProps)(TimeFilter);
