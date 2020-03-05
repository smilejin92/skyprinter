import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  FilterWrapperDd,
  FilterDropDiv,
  StyleSliderWrapper,
  StyleSlider,
  TimeContent
} from '../../../styles/Filter.style';
import { connect } from 'react-redux';
import {
  setFilterOption,
  pollSession
} from '../../../../redux/modules/session';

const DurationFilter = ({ session, setFilterOption }) => {
  const [drop, setDrop] = useState(true);
  const [legLists, setLegLists] = useState([]);
  const [minHour, setMinHour] = useState(0);
  const [maxHour, setMaxHour] = useState(100);
  const [defaultMaxHour, setDefaultMaxHour] = useState(100);
  const defaultHourRef = useRef(100);

  const getDurations = useCallback(({ Itineraries, Legs, Segments }) => {
    const LegList = [];
    for (let i = 0; i < Itineraries.length; i++) {
      LegList.push(ticketLists(Itineraries[i]));
    }

    function ticketLists(itinerary) {
      const { PricingOptions, OutboundLegId, InboundLegId } = itinerary;

      // get Outbound Leg
      let OutboundLeg;
      Legs.forEach(leg => {
        if (leg.Directionality === 'Outbound' && leg.Id === OutboundLegId) {
          OutboundLeg = { ...leg };
        }
      });
      // get Outbound segments
      const OutboundSegments = [];
      OutboundLeg.SegmentIds.forEach(id => {
        OutboundSegments.push({ ...Segments[id] });
      });
      OutboundLeg.Segments = OutboundSegments;
      const ticket = {
        PricingOptions,
        OutboundLeg
      };

      // get Inbound Leg (왕복이라면)
      if (InboundLegId) {
        let InboundLeg;
        Legs.forEach(leg => {
          if (leg.Directionality === 'Inbound' && leg.Id === InboundLegId) {
            InboundLeg = { ...leg };
          }
        });
        const InboundSegments = [];
        InboundLeg.SegmentIds.forEach(id => {
          InboundSegments.push({ ...Segments[id] });
        });
        InboundLeg.Segments = InboundSegments;
        ticket.InboundLeg = InboundLeg;
        return (ticket.OutboundLeg.Duration + ticket.InboundLeg.Duration) / 2;
      }
      return ticket.OutboundLeg.Duration;
    }
    LegList.sort((a, b) => a - b);

    let Minhours = Math.floor(LegList[0] / 60);
    let Minresthours = LegList[0] % 60;

    let Maxhours = Math.floor(LegList[LegList.length - 1] / 60);
    let Maxresthours = LegList[LegList.length - 1] % 60;

    if (Minresthours > 50) {
      Minhours += 1;
    } else if (Minresthours > 0) {
      Minhours += 0.5;
    }

    if (Maxresthours > 50) {
      Maxhours += 1;
    } else if (Maxresthours > 0) {
      Maxhours += 0.5;
    }

    setMinHour(Minhours);
    setMaxHour(Maxhours);
    setDefaultMaxHour(Maxhours);

    defaultHourRef.current = Maxhours;

    return Legs;
  }, []);

  const sliderChange = e => {
    defaultHourRef.current = e;
    setMaxHour(e);
  };

  const slideAfterChange = duration => {
    // 1. session.filterOption에 duration property가 있는가?
    // 2. duration 값을 슬라이더의 value로 설정
    const newFilterOption = {
      ...session.filterOption,
      duration: duration * 60 * 2
    };

    setFilterOption(newFilterOption);
  };
  useEffect(() => {
    setLegLists(getDurations(session.allResult));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDurations, legLists]);

  const switchDrop = () => {
    setDrop(!drop);
  };

  return (
    <FilterWrapperDl>
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
                defaultValue={defaultHourRef.current}
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
  session: state.session
});
const mapDispatchToProps = dispatch => ({
  setFilterOption: filterOption => {
    dispatch(setFilterOption(filterOption));
    dispatch(pollSession(true));
  }
});
export default connect(maptStateToProps, mapDispatchToProps)(DurationFilter);
