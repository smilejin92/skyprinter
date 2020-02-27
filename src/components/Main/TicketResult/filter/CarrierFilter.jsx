import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  setFilterOption,
  pollSession,
} from '../../../../redux/modules/session';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  FilterWrapperDd,
  FilterDropDiv,
  OptionContent,
  OptionHeader,
  StyleCheckBox,
  AllSelectOrRemoveDiv,
  AllSelectBtn,
  AllRemoveBtn,
} from '../../../styles/Filter.style';
import uuid from 'uuid';
import { useCallback } from 'react';

const CarrierFilter = React.memo(({ session }) => {
  const [drop, setDrop] = useState(true);
  const [carrierLists, setCarrierLists] = useState([]);

  const getCarriers = useCallback(
    ({ Carriers, Itineraries, Legs, Segments }) => {
      const CarrierList = [];
      for (let i = 0; i < Itineraries.length; i++) {
        CarrierList.push(ticketLists(Itineraries[i]));
      }

      function getUniqueObjectArray(array) {
        return array.filter((item, i) => {
          return (
            array.findIndex((item2, j) => {
              return item.CarrierId === item2.CarrierId;
            }) === i
          );
        });
      }

      function predicate(key, value) {
        // key와 value를 기억하는 클로저를 반환
        return item => item[key] === value;
      }

      function ticketLists(itinerary) {
        const carrierPriceList = [];
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
            ticket.InboundLeg.Carriers[0] === ticket.OutboundLeg.Carriers[0]
          ) {
            carrierPriceList.push({
              Price: ticket.PricingOptions[0].Price,
              CarrierId: ticket.OutboundLeg.Carriers[0],
            });
            return carrierPriceList[0];
          }
        }
        carrierPriceList.push({
          Price: ticket.PricingOptions[0].Price,
          CarrierId: ticket.OutboundLeg.Carriers[0],
        });
        return carrierPriceList[0];
      }

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      const _carriers = getUniqueObjectArray(CarrierList);

      const carriers = Carriers.map(Carrier => ({
        id: Carrier.Id,
        code: Carrier.Code,
        name: Carrier.Name,
        price:
          _carriers.findIndex(predicate('CarrierId', Carrier.Id)) !== -1 &&
          numberWithCommas(
            _carriers[_carriers.findIndex(predicate('CarrierId', Carrier.Id))]
              .Price,
          ),
        checked: true, // 로직 수정 해야함.
      }))
        .sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        })
        .filter(carrier => carrier.price !== false);

      return carriers;
    },
    [],
  );

  useEffect(() => {
    setCarrierLists(getCarriers(session.allResult));
  }, [getCarriers, session.allResult]);

  const onChange = id => {
    console.log(id);
    setCarrierLists(
      carrierLists.map(carrierList =>
        carrierList.id === id
          ? { ...carrierList, checked: !carrierList.checked }
          : carrierList,
      ),
    );
  };

  const switchDrop = () => {
    setDrop(!drop);
  };

  const allSelect = () => {
    setCarrierLists(
      carrierLists.map(carrierList => ({ ...carrierList, checked: true })),
    );
  };

  const allRemove = () => {
    setCarrierLists(
      carrierLists.map(carrierList => ({ ...carrierList, checked: false })),
    );
  };

  return (
    <FilterWrapperDl>
      <div>
        <dt>
          <FilterWrapperButton drop={drop} onClick={switchDrop}>
            <span>항공사</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <FilterWrapperDd>
          <FilterDropDiv drop={drop} allView={true}>
            <AllSelectOrRemoveDiv>
              <AllSelectBtn
                onClick={allSelect}
                disabled={
                  !carrierLists.some(
                    carrierList => carrierList.checked !== true,
                  )
                }
              >
                모두 선택
              </AllSelectBtn>
              |
              <AllRemoveBtn
                onClick={allRemove}
                disabled={
                  !carrierLists.some(
                    carrierList => carrierList.checked !== false,
                  )
                }
              >
                모두 지우기
              </AllRemoveBtn>
            </AllSelectOrRemoveDiv>
            {carrierLists.map(carrierList => (
              <OptionHeader key={uuid.v4()}>
                <StyleCheckBox
                  onChange={() => onChange(carrierList.id)}
                  checked={carrierList.checked}
                >
                  {carrierList.name}
                </StyleCheckBox>
                <OptionContent> {`₩ ${carrierList.price}`} </OptionContent>
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

export default connect(mapStateToProps, mapDispatchToProps)(CarrierFilter);
