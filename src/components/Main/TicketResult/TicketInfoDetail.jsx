import React, { useEffect, useState } from 'react';
import TicketService from '../../../services/TicketService';
import Spinner from './Spinner';
import {
  Tickets,
  TicketWrapper,
  TicketInfos,
  SemiCircle,
  SelectTicketDetails,
  PlaceCode
} from '../../styles/TicketInfoDetail.style';

function TicketInfoDetail({ data, itinerary, progress }) {
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // 각 티켓에 대한 정보 취합
    const { PricingOptions, OutboundLegId, InboundLegId } = itinerary;

    // get Outbound Leg
    let OutboundLeg;
    data.Legs.forEach(leg => {
      if (leg.Directionality === 'Outbound' && leg.Id === OutboundLegId) {
        OutboundLeg = { ...leg };
      }
    });

    // get Outbound segments
    const OutboundSegments = [];
    OutboundLeg.SegmentIds.forEach(id => {
      OutboundSegments.push({ ...data.Segments[id] });
    });

    OutboundLeg.Segments = OutboundSegments;

    const ticket = {
      PricingOptions,
      OutboundLeg
    };

    // get Inbound Leg (왕복이라면)
    if (InboundLegId) {
      let InboundLeg;
      data.Legs.forEach(leg => {
        if (leg.Directionality === 'Inbound' && leg.Id === InboundLegId) {
          InboundLeg = { ...leg };
        }
      });

      const InboundSegments = [];
      InboundLeg.SegmentIds.forEach(id => {
        InboundSegments.push({ ...data.Segments[id] });
      });
      InboundLeg.Segments = InboundSegments;

      ticket.InboundLeg = InboundLeg;
    }

    setTicket(ticket);
  }, [data.Legs, data.Segments, itinerary]);

  return (
    <div>
      {ticket && (
        <Tickets>
          <TicketWrapper>
            <TicketInfos>
              <div className="carrier">
                {TicketService.getAirlineLogo(ticket.OutboundLeg, data)}
                {TicketService.getOperatingAirline(ticket.OutboundLeg, data)}
              </div>

              <div className="departTime">
                <p>
                  {TicketService.formatDateString(ticket.OutboundLeg.Departure)}
                </p>
                <span>
                  {TicketService.getPlaceCode(
                    ticket.OutboundLeg.OriginStation,
                    data
                  )}
                </span>
              </div>
              <div className="totalHour">
                <p>
                  {TicketService.formatDuration(ticket.OutboundLeg.Duration)}
                </p>
                <div>
                  <ul>
                    {TicketService.getStopDots(ticket.OutboundLeg)}
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        fill="#898294"
                        d="M3.922,12h0.499c0.181,0,0.349-0.093,0.444-0.247L7.949,6.8l3.233-0.019C11.625,6.791,11.989,6.44,12,6 c-0.012-0.44-0.375-0.792-0.818-0.781L7.949,5.2L4.866,0.246C4.77,0.093,4.602,0,4.421,0L3.922,0c-0.367,0-0.62,0.367-0.489,0.71 L5.149,5.2l-2.853,0L1.632,3.87c-0.084-0.167-0.25-0.277-0.436-0.288L0,3.509L1.097,6L0,8.491l1.196-0.073 C1.382,8.407,1.548,8.297,1.632,8.13L2.296,6.8h2.853l-1.716,4.49C3.302,11.633,3.555,12,3.922,12"
                      ></path>
                    </svg>
                  </ul>
                </div>
                <p className="stops">
                  {ticket.OutboundLeg.Stops.length > 0 ? (
                    <span className="transfer">{`${TicketService.getNumberOfStops(
                      ticket.OutboundLeg
                    )}회 경유`}</span>
                  ) : (
                    <span className="direct">직항</span>
                  )}
                  {ticket.OutboundLeg.Stops.length > 0 &&
                    TicketService.getStopsList(ticket.OutboundLeg, data)}
                </p>
              </div>
              <div className="arriveTime">
                <p>
                  {TicketService.formatDateString(ticket.OutboundLeg.Arrival)}{' '}
                  {!TicketService.isSameDay(ticket.OutboundLeg) && (
                    <span>{`+${TicketService.getTimeDifference(
                      ticket.OutboundLeg
                    )}`}</span>
                  )}
                </p>
                <PlaceCode same={TicketService.isSamePlace(ticket)}>
                  {TicketService.getPlaceCode(
                    ticket.OutboundLeg.DestinationStation,
                    data
                  )}
                </PlaceCode>
              </div>
            </TicketInfos>
            {ticket.InboundLeg && (
              <TicketInfos>
                <div className="carrier">
                  {TicketService.getAirlineLogo(ticket.InboundLeg, data)}
                  {TicketService.getOperatingAirline(
                    ticket.InboundLeg,
                    data,
                    'inbound'
                  )}
                </div>

                <div className="departTime">
                  <p>
                    {TicketService.formatDateString(
                      ticket.InboundLeg.Departure
                    )}
                  </p>
                  <PlaceCode same={TicketService.isSamePlace(ticket)}>
                    {TicketService.getPlaceCode(
                      ticket.InboundLeg.OriginStation,
                      data
                    )}
                  </PlaceCode>
                </div>

                <div className="totalHour">
                  <p>
                    {TicketService.formatDuration(ticket.InboundLeg.Duration)}
                  </p>
                  <div>
                    <ul>
                      {TicketService.getStopDots(ticket.InboundLeg)}
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <path
                          fill="#898294"
                          d="M3.922,12h0.499c0.181,0,0.349-0.093,0.444-0.247L7.949,6.8l3.233-0.019C11.625,6.791,11.989,6.44,12,6 c-0.012-0.44-0.375-0.792-0.818-0.781L7.949,5.2L4.866,0.246C4.77,0.093,4.602,0,4.421,0L3.922,0c-0.367,0-0.62,0.367-0.489,0.71 L5.149,5.2l-2.853,0L1.632,3.87c-0.084-0.167-0.25-0.277-0.436-0.288L0,3.509L1.097,6L0,8.491l1.196-0.073 C1.382,8.407,1.548,8.297,1.632,8.13L2.296,6.8h2.853l-1.716,4.49C3.302,11.633,3.555,12,3.922,12"
                        ></path>
                      </svg>
                    </ul>
                  </div>
                  <p className="stops">
                    {ticket.InboundLeg.Stops.length > 0 ? (
                      <span className="transfer">{`${TicketService.getNumberOfStops(
                        ticket.InboundLeg
                      )}회 경유`}</span>
                    ) : (
                      <span className="direct">직항</span>
                    )}
                    {ticket.InboundLeg.Stops.length > 0 &&
                      TicketService.getStopsList(ticket.InboundLeg, data)}
                  </p>
                </div>

                <div className="arriveTime">
                  <p>
                    {TicketService.formatDateString(ticket.InboundLeg.Arrival)}{' '}
                    {!TicketService.isSameDay(ticket.InboundLeg) && (
                      <span>{`+${TicketService.getTimeDifference(
                        ticket.InboundLeg
                      )}`}</span>
                    )}
                  </p>
                  <span>
                    {TicketService.getPlaceCode(
                      ticket.InboundLeg.DestinationStation,
                      data
                    )}
                  </span>
                </div>
              </TicketInfos>
            )}
          </TicketWrapper>
          <SemiCircle>
            <div className="up"></div>
            <div className="down"></div>
          </SemiCircle>
          <SelectTicketDetails>
            <div className="ticketDetailsWrapper">
              <p className="mostCheap">
                {ticket.PricingOptions.length > 1
                  ? `총 ${ticket.PricingOptions.length}건 중 최저가`
                  : `상품 1개`}
              </p>
              {progress < 100 && <Spinner />}
              <span>{`₩ ${TicketService.priceToString(
                ticket.PricingOptions[0].Price
              )}`}</span>
              <a
                href={ticket.PricingOptions[0].DeeplinkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  선택
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M14.4 19.5l5.7-5.3c.4-.4.7-.9.8-1.5.1-.3.1-.5.1-.7s0-.4-.1-.6c-.1-.6-.4-1.1-.8-1.5l-5.7-5.3c-.8-.8-2.1-.7-2.8.1-.8.8-.7 2.1.1 2.8l2.7 2.5H5c-1.1 0-2 .9-2 2s.9 2 2 2h9.4l-2.7 2.5c-.5.4-.7 1-.7 1.5s.2 1 .5 1.4c.8.8 2.1.8 2.9.1z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </SelectTicketDetails>
        </Tickets>
      )}
    </div>
  );
}
export default TicketInfoDetail;
