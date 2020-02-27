import React, { useState, useEffect, useCallback } from 'react';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  FilterWrapperDd,
  FilterDropDiv,
  StyleSliderWrapper,
  StyleSlider,
  TimeContent,
} from '../../../styles/Filter.style';
import { connect } from 'react-redux';

const DurationFilter = ({ session }) => {
  const [drop, setDrop] = useState(true);
  const [legLists, setLegLists] = useState([]);
  const [minHour, setMinHour] = useState(0);
  const [maxHour, setMaxHour] = useState(100);
  const [defaultMaxHour, setDefaultMaxHour] = useState(100);
  const [sliderValue, setSliderValue] = useState(100);

  const getDurations = useCallback(({ Itineraries, Legs, Segments }) => {
    console.log(Itineraries, Legs, Segments);
    const LegList = [];
    for (let i = 0; i < Legs.length; i++) {
      LegList.push(ticketLists(Legs[i]));
    }
    function ticketLists(itinerary) {
      return itinerary.Duration;
    }
    LegList.sort((a, b) => a - b);
    // console.log(LegList)

    let Minhours = Math.floor(LegList[0] / 60);
    let Minresthours = LegList[0] % 60;

    let Maxhours = Math.floor(LegList[LegList.length - 1] / 60);
    let Maxresthours = LegList[LegList.length - 1] % 60;

    if (Minresthours / 30 > 1) {
      Minhours += 1;
    } else if (Minresthours / 30 === 1) {
      Minhours += 0.5;
    }

    if (Maxresthours / 30 > 1) {
      Maxhours += 1;
    } else if (Maxresthours / 30 === 1) {
      Maxhours += 0.5;
    }

    setMinHour(Minhours);
    setMaxHour(Maxhours);
    setDefaultMaxHour(Maxhours);
    setSliderValue(Maxhours);

    return Legs;
  }, []);

  const sliderChange = e => {
    setSliderValue(e);
    setMaxHour(e);

    console.log(e);
    console.log('슬라이더 실행!');
  };
  const slideAfterChange = () => {
    console.log('슬라이더 에프터!!');
  };
  useEffect(() => {
    console.log(getDurations(session.pollResult));
    setLegLists(getDurations(session.pollResult));
    console.log(legLists);
  }, [getDurations, legLists, session.pollResult]);

  const switchDrop = () => {
    setDrop(!drop);
  };

  return (
    <FilterWrapperDl>
      {console.log()}
      <div>
        <dt>
          <FilterWrapperButton drop={drop} onClick={switchDrop}>
            <span>총 소요시간</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <FilterWrapperDd>
          <FilterDropDiv drop={drop}>
            <div>
              <TimeContent>{`${minHour}시간 - ${maxHour}시간`}</TimeContent>
            </div>
            <StyleSliderWrapper>
              <StyleSlider
                min={minHour}
                max={defaultMaxHour}
                value={sliderValue}
                step={0.5}
                onAfterChange={slideAfterChange}
                onChange={sliderChange}
              />
            </StyleSliderWrapper>
          </FilterDropDiv>
        </FilterWrapperDd>
      </div>
    </FilterWrapperDl>
  );
};

const maptStateToProps = state => ({
  session: state.session,
});
const mapDispatchToProps = dispatch => ({});
export default connect(maptStateToProps, mapDispatchToProps)(DurationFilter);
