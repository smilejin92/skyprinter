import React from 'react';
import uuid from 'uuid';
import TicketInfoDetail from '../components/Main/TicketResult/TicketInfoDetail';

export default class TicketService {
  static convertDateToString(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const _date = date.getDate();
    return `${year}-${Math.floor(month / 10) === 0 ? `0${month}` : month}-${
      Math.floor(_date / 10) === 0 ? `0${_date}` : _date
    }`;
  }

  static formatDateString(dateString) {
    const time = dateString.split('T')[1];
    const [militaryHours, minutes] = time.split(':');
    const timePeriod =
      +militaryHours < 12 || +militaryHours >= 24 ? '오전' : '오후';
    const hours = +militaryHours <= 12 ? +militaryHours : +militaryHours - 12;
    return `${timePeriod} ${hours}:${minutes}`;
  }

  static formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    if (!hours) return `${duration}분`;

    const minutes = duration % 60;
    if (!minutes) return `${hours}시간`;

    return `${hours}시간 ${('' + minutes).split('.')[0]}분`;
  }

  static priceToString(price) {
    let result = '';
    let _price = price + '';
    _price = _price.split('.')[0];

    let count = 0;
    for (let i = _price.length - 1; i >= 0; i--) {
      result = _price[i] + result;
      count += 1;
      if (i > 0 && count === 3) {
        result = ',' + result;
        count = 0;
      }
    }
    return result;
  }

  static isSamePlace(ticket) {
    if (!ticket.InboundLeg) return true;
    const { OutboundLeg, InboundLeg } = ticket;
    return OutboundLeg.DestinationStation === InboundLeg.OriginStation;
  }

  static getAirlineLogo(leg, data) {
    const { Carriers } = leg;
    if (Carriers.length < 2) {
      const [carrierId] = Carriers;
      const { ImageUrl, Name } = data.Carriers.filter(
        c => c.Id === carrierId,
      )[0];
      return <img src={ImageUrl} alt={Name} />;
    } else {
      let altText = '';
      for (let i = 0; i < Carriers.length - 1; i++) {
        const { Name } = data.Carriers.filter(c => c.Id === Carriers[i])[0];
        altText += `${Name} + `;
      }
      const { Name } = data.Carriers.filter(
        c => c.Id === Carriers[Carriers.length - 1],
      )[0];
      altText += Name;
      return <div>{altText}</div>;
    }
  }

  static getOperatingAirline(leg, data, type) {
    const { Carriers, OperatingCarriers } = leg;
    const operatorIds = OperatingCarriers.filter(oc => !Carriers.includes(oc));

    if (!operatorIds.length) {
      return <div></div>;
    } else {
      const operatorNames = [];
      operatorIds.forEach(id => {
        const { Name } = data.Carriers.filter(c => c.Id === id)[0];
        operatorNames.push(Name);
      });

      let text = '';
      for (let i = 0; i < operatorNames.length - 1; i++) {
        text += `${operatorNames[i]}, `;
      }

      // operators에 Carriers의 요소가 없는 경우 = operators에서 운항
      if (operatorIds.length === OperatingCarriers.length) {
        text += `${operatorNames[operatorNames.length - 1]}에서 운항`;
      } else {
        // operators에 Carriers의 요소가 있는 경우 = ~에서 부분 운항
        text += `${operatorNames[operatorNames.length - 1]}에서 부분 운항`;
      }
      return <div className={`operators ${type}`}>{text}</div>;
    }
  }

  static getTimeDifference(leg) {
    const { Departure, Arrival } = leg;
    const [departureDate] = Departure.split('T');
    const [arrivalDate] = Arrival.split('T');
    const departureDateObj = new Date(departureDate);
    const arrivalDateObj = new Date(arrivalDate);
    return (arrivalDateObj - departureDateObj) / 1000 / 60 / 60 / 24;
  }

  static isSameDay(leg) {
    const { Departure, Arrival } = leg;
    const [departureDate] = Departure.split('T');
    const [arrivalDate] = Arrival.split('T');
    return departureDate === arrivalDate;
  }

  static getPlaceCode(placeId, data) {
    const [targetPlace] = data.Places.filter(p => p.Id === placeId);
    return targetPlace.Code;
  }

  static getParentPlaceCode(placeId, data) {
    const [targetPlace] = data.Places.filter(p => p.Id === placeId);
    return TicketService.getPlaceCode(targetPlace.ParentId, data);
  }

  static getNumberOfStops(leg) {
    const { Stops, Segments } = leg;
    if (!Stops.length) {
      return 0;
    } else {
      if (Stops.length === Segments.length) {
        return Segments.length - 1;
      } else {
        return Stops.length;
      }
    }
  }

  static getStopsList(leg, data) {
    const { Stops, Segments } = leg;
    const textElements = [];
    if (Stops.length === Segments.length) {
      for (let i = 1; i < Segments.length; i++) {
        const prevDest = Segments[i - 1].DestinationStation;
        const curOrigin = Segments[i].OriginStation;
        let text = '';
        const placeCode =
          prevDest === curOrigin
            ? TicketService.getPlaceCode(prevDest, data)
            : TicketService.getParentPlaceCode(prevDest, data);
        text += placeCode;
        if (i + 1 < Stops.length) text += ', ';

        // <span id={placeCode} warning={true}>
        if (prevDest !== curOrigin) {
          textElements.push(
            <span key={uuid.v4()} id={placeCode}>
              {text}
            </span>,
          );
        } else {
          textElements.push(
            <span key={uuid.v4()} id={placeCode}>
              {text}
            </span>,
          );
        }
      }
    } else {
      for (let i = 0; i < Stops.length; i++) {
        let text = '';
        const placeCode = TicketService.getPlaceCode(Stops[i], data);
        text += placeCode;
        if (i + 1 < Stops.length) text += ', ';
        textElements.push(
          <span key={uuid.v4()} id={placeCode}>
            {text}
          </span>,
        );
      }
    }
    return textElements;
  }

  static getStopDots(leg) {
    const $lis = [];
    const stops = TicketService.getNumberOfStops(leg);
    for (let i = 0; i < stops; i++) {
      $lis.push(<li key={uuid.v4()}></li>);
    }
    return $lis;
  }

  static pushTickets(start, end, pollResult) {
    const { Itineraries } = pollResult;
    const tickets = [];
    for (let i = start; i < end; i++) {
      if (!Itineraries[i]) break;
      tickets.push(
        <TicketInfoDetail
          key={uuid.v4()}
          data={pollResult}
          itinerary={Itineraries[i]}
        />,
      );
    }
    return tickets;
  }
}
