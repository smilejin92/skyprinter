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

const TimeFilter = ({ session, setFilterOption }) => {
  const [drop, setDrop] = useState(true);
  const [outBoundMinTime, setOutBoundMinTime] = useState('오전 12:00');
  const [outBoundMaxTime, setOutBoundMaxTime] = useState('오후 11:59');

  const [inBoundMinTime, setInBoundMinTime] = useState('오전 12:00');
  const [inBoundMaxTime, setInBoundMaxTime] = useState('오후 11:59');

  const getTime = (persent, day) => {
    if (day) {
      const time = persent * 15;
      let date = '';
      let hour = '0';
      let minute = '';
      if (time >= 750) {
        date = '오후';
      } else {
        date = '오전';
      }
      if (time >= 60) {
        hour = Math.floor(time / 60);
        minute = time % 60;
      } else {
        minute = time;
      }
      const answer = `${date} ${persent > 48 ? (hour = hour - 12) : hour}:${
        minute === 0 ? '00' : minute
      }`;
      if (persent === 48) {
        return '오후 12:00';
      }
      if (answer === '오전 0:00') {
        return '오전 12:00';
      } else {
        return answer;
      }
    } else {
      const time = persent * 15;
      let date = '';
      let hour = '';
      let minute = '';
      if (time < 750) {
        date = '오전';
      } else {
        date = '오후';
      }
      if (time >= 60) {
        hour = Math.floor(time / 60);
        minute = time % 60;
      } else {
        minute = time;
      }
      const answer = `${date} ${persent < 48 ? hour : hour - 12}:${
        minute === 0 ? '00' : minute
      }`;
      if (persent === 48) {
        return '오후 12:00';
      }
      if (answer === '오후 12:00') {
        return '오후 11:59';
      } else {
        return answer;
      }
    }
  };

  const parseString = data => {
    if (`${data}`.length === 1) {
      return `0${data}`;
    } else {
      return `${data}`;
    }
  };
  const slideAfterOutBoundChange = () => {
    // console.log('슬라이더 에프터!!', outBoundMinTime, outBoundMaxTime);
    const minHour = +(outBoundMinTime.substring(3, 5)[1] === ':'
      ? outBoundMinTime.substring(3, 4)
      : outBoundMinTime.substring(3, 5));
    const minMinute = outBoundMinTime.slice(-2);
    const maxHour = +(outBoundMaxTime.substring(3, 5)[1] === ':'
      ? outBoundMaxTime.substring(3, 4)
      : outBoundMaxTime.substring(3, 5));
    const maxMinute = outBoundMaxTime.slice(-2);
    // console.log(minHour, minMinute, maxHour, maxMinute);
    const newFilterOption = {
      ...session.filterOption,
      outboundDepartStartTime:
        outBoundMinTime.substring(0, 2) === '오후'
          ? `${minHour + 12}:${minMinute}`
          : `${parseString(minHour)}:${minMinute}`,
      outboundDepartEndTime:
        outBoundMaxTime.substring(0, 2) === '오후'
          ? `${maxHour + 12}:${maxMinute}`
          : `${parseString(maxHour)}:${maxMinute}`
    };

    setFilterOption(newFilterOption);
  };

  const slideOutBoundChange = e => {
    setOutBoundMinTime(getTime(e[0], true));
    setOutBoundMaxTime(getTime(e[1], false));
  };

  const slideAfterInBoundChange = () => {
    // console.log('슬라이더 에프터!!', inBoundMinTime, inBoundMaxTime);
    const minHour = +(inBoundMinTime.substring(3, 5)[1] === ':'
      ? inBoundMinTime.substring(3, 4)
      : inBoundMinTime.substring(3, 5));
    const minMinute = inBoundMinTime.slice(-2);
    const maxHour = +(inBoundMaxTime.substring(3, 5)[1] === ':'
      ? inBoundMaxTime.substring(3, 4)
      : inBoundMinTime.substring(3, 5));
    const maxMinute = inBoundMaxTime.slice(-2);
    // console.log(minHour, minMinute, maxHour, maxMinute);
    const newFilterOption = {
      ...session.filterOption,
      inboundDepartStartTime:
        inBoundMinTime.substring(0, 2) === '오후'
          ? `${minHour + 12 === 24 ? 23 : minHour + 12}:${minMinute}`
          : `${parseString(minHour)}:${minMinute}`,
      inboundDepartEndTime:
        inBoundMaxTime.substring(0, 2) === '오후'
          ? `${maxHour + 12 === 24 ? 23 : maxHour + 12}:${maxMinute}`
          : `${parseString(maxHour)}:${maxMinute}`
    };

    setFilterOption(newFilterOption);
  };

  const slideInBoundChange = e => {
    setInBoundMinTime(getTime(e[0], true));
    setInBoundMaxTime(getTime(e[1], false));
  };

  const switchDrop = () => {
    setDrop(!drop);
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
              <TimeContent>{`${outBoundMinTime} - ${outBoundMaxTime}`}</TimeContent>
              <StyleSliderWrapper>
                <StyleSlider
                  onAfterChange={slideAfterOutBoundChange}
                  onChange={slideOutBoundChange}
                  range
                  step={2}
                  min={0}
                  max={96}
                  tooltipVisible={false}
                  defaultValue={[0, 100]}
                />
              </StyleSliderWrapper>
            </OutBoundTimeDiv>
            <InBoundTimeDiv>
              <TimeHeader>오는날 출발 시간</TimeHeader>
              <TimeContent>{`${inBoundMinTime} - ${inBoundMaxTime}`}</TimeContent>
              <StyleSliderWrapper>
                <StyleSlider
                  onAfterChange={slideAfterInBoundChange}
                  onChange={slideInBoundChange}
                  range
                  step={2}
                  min={0}
                  max={96}
                  tooltipVisible={false}
                  defaultValue={[0, 100]}
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
    dispatch(pollSession(true));
  }
});
export default connect(maptStateToProps, mapDispatchToProps)(TimeFilter);
