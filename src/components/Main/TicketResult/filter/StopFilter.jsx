import React, { useState, useEffect, useCallback } from 'react';
import {
  setFilterOption,
  pollSession,
} from '../../../../redux/modules/session';
import { connect } from 'react-redux';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  FilterWrapperDd,
  FilterDropDiv,
  OptionContent,
  OptionHeader,
  StyleCheckBox,
} from '../../../styles/Filter.style';
import uuid from 'uuid';

const StopFilter = React.memo(({ session, setFilter }) => {
  const [drop, setDrop] = useState(true);
  const [stopLists, setStopLists] = useState([]);

  const getStops = useCallback(
    ({ Itineraries, Legs, Segments }) => {
      const DirectStopList = [];
      const OneOverStopList = [];
      for (let i = 0; i < Itineraries.length; i++) {
        ticketLists(Itineraries[i]);
        if (DirectStopList.length && OneOverStopList.length) break;
      }

      function ticketLists(itinerary) {
        const { PricingOptions, OutboundLegId, InboundLegId } = itinerary;
        // data.Itineraries[n].PricingOptions, data.Itineraries[n].OutboundLegId, data.Itineraries[n].InboundLegId

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
          OutboundLeg,
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

          if (
            ticket.OutboundLeg.Stops.length === ticket.InboundLeg.Stops.length
          ) {
            if (ticket.OutboundLeg.Stops.length === 0) {
              if (DirectStopList.length === 0) DirectStopList.push(ticket);
            }
            if (ticket.OutboundLeg.Stops.length === 1) {
              if (OneOverStopList.length === 0) OneOverStopList.push(ticket);
            }
          }
        } else {
          if (ticket.OutboundLeg.Stops.length === 0) {
            if (DirectStopList.length === 0) DirectStopList.push(ticket);
          }
          if (ticket.OutboundLeg.Stops.length === 1) {
            if (OneOverStopList.length === 0) OneOverStopList.push(ticket);
          }
        }
      }

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      function allStopPrice() {
        if (DirectStopList.length > 0 && OneOverStopList.length > 0) {
          const OneOverPrice = OneOverStopList[0].PricingOptions[0].Price;
          const DirectPrice = DirectStopList[0].PricingOptions[0].Price;
          return OneOverPrice < DirectPrice
            ? `₩ ${numberWithCommas(Math.floor(OneOverPrice))}`
            : `₩ ${numberWithCommas(Math.floor(DirectPrice))}`;
        }
        if (DirectStopList.length > 0 && OneOverStopList.length === 0) {
          const DirectPrice = DirectStopList[0].PricingOptions[0].Price;
          return `₩ ${numberWithCommas(Math.floor(DirectPrice))}`;
        }
        if (DirectStopList.length === 0 && OneOverStopList.length > 0) {
          const OneOverPrice = OneOverStopList[0].PricingOptions[0].Price;
          return `₩ ${numberWithCommas(Math.floor(OneOverPrice))}`;
        }
        if (DirectStopList.length === 0 && OneOverStopList.length === 0) {
          if (Itineraries.length === 0) {
            return '없음';
          } else {
            return `₩ ${numberWithCommas(
              Math.floor(Itineraries[0].PricingOptions[0].Price),
            )}`;
          }
        }
        return '없음';
      }

      const stops = [
        {
          id: '직항',
          checked: session.filterOption.stops === 0 ? true : false,
          price:
            DirectStopList.length >= 1
              ? `₩ ${numberWithCommas(
                  Math.floor(DirectStopList[0].PricingOptions[0].Price),
                )}`
              : '없음',
          disabled: DirectStopList.length === 0 ? true : false,
        },
        {
          id: '최대 1회 경유',
          checked: session.filterOption.stops === 1 ? true : false,
          price:
            OneOverStopList.length >= 1
              ? `₩ ${numberWithCommas(
                  Math.floor(OneOverStopList[0].PricingOptions[0].Price),
                )}`
              : '없음',
          disabled: OneOverStopList.length === 0 ? true : false,
        },
        {
          id: '모두',
          checked: session.filterOption.stops === undefined ? true : false,
          price: allStopPrice(),
          disabled: false,
        },
      ];

      return stops;
    },
    [session.filterOption.stops],
  );

  useEffect(() => {
    setStopLists(getStops(session.allResult));
  }, [getStops, session.allResult]);

  const onChange = stopList => {
    if (stopList.id === '직항') {
      setFilter({ ...session.filterOption, stops: 0 });
    }

    if (stopList.id === '최대 1회 경유') {
      setFilter({ ...session.filterOption, stops: 1 });
    }

    if (stopList.id === '모두') {
      const { stops, ...filterOption } = session.filterOption;
      setFilter({ ...filterOption });
    }
  };

  const switchDrop = () => {
    setDrop(!drop);
  };

  return (
    <FilterWrapperDl>
      <div>
        <dt>
          <FilterWrapperButton drop={drop} onClick={switchDrop}>
            <span>경유</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <FilterWrapperDd>
          <FilterDropDiv drop={drop}>
            {stopLists.map(stopList => (
              <OptionHeader key={uuid.v4()} zero={stopList.disabled}>
                <StyleCheckBox
                  onChange={() => {
                    if (stopList.checked) return;
                    onChange(stopList);
                  }}
                  checked={stopList.checked}
                  disabled={stopList.disabled ? true : false}
                >
                  {stopList.id}
                </StyleCheckBox>
                <OptionContent zero={stopList.disabled}>
                  {stopList.price}
                </OptionContent>
              </OptionHeader>
            ))}
          </FilterDropDiv>
        </FilterWrapperDd>
      </div>
    </FilterWrapperDl>
  );
});

const mapStateToProps = state => ({
  session: state.session,
});

const mapDispatchToProps = dispatch => ({
  setFilter: filterOption => {
    dispatch(setFilterOption(filterOption));
    dispatch(pollSession(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StopFilter);
