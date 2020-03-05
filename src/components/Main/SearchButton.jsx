import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { setError, clearError } from '../../redux/modules/error';
// import { createSession } from '../../redux/modules/session';
import { push } from 'connected-react-router';
import TicketService from '../../services/TicketService';

function SearchButton({ children, allInfo, createSession, setError }) {
  const generatedId = useCallback(errorLists => {
    return Math.max(0, ...errorLists.map(errorList => errorList.id)) + 1;
  }, []);

  const create = () => {
    const errorLists = [];
    if (!allInfo.places.inBoundId || !allInfo.places.outBoundId) {
      errorLists.push({
        id: generatedId(errorLists),
        type: 'Incorrect places',
        message: '출발지 혹은 도착지를 입력해주세요.'
      });
    }

    if (allInfo.places.inBoundId === allInfo.places.outBoundId) {
      errorLists.push({
        id: generatedId(errorLists),
        type: 'PlaceId is same',
        message: '출발지와 도착지가 같으면 검색이 불가능합니다.'
      });
    }

    if (
      allInfo.passenger.children.filter(child => child.type === undefined)
        .length >= 1
    ) {
      errorLists.push({
        id: generatedId(errorLists),
        type: 'Age not selected',
        message: '모든 유/소아의 나이를 입력해주세요.'
      });
    }

    if (allInfo.passenger.children.filter(child => child.age < 2).length >= 2) {
      if (
        allInfo.passenger.adults <
        allInfo.passenger.children.filter(child => child.age < 2).length
      ) {
        errorLists.push({
          id: generatedId(errorLists),
          type: 'No matching adult',
          message: '성인 한 사람당 유/소아 1명(만 0 - 2세)만 허용됩니다.'
        });
      }
    }

    if (
      allInfo.places.inBoundId.length === 2 ||
      allInfo.places.outBoundId.length === 2
    ) {
      // 나중에 비워내고 브라우저로 변경
      errorLists.push({
        id: generatedId(errorLists),
        type: 'No Country',
        message: '실시간 항공권 검색은 도시 단위까지만 가능합니다.'
      });
    }

    if (errorLists.length >= 1) {
      setError(errorLists);
    } else {
      clearError();
      createSession(allInfo);
    }
  };

  return <button onClick={create}>{children}</button>;
}

const mapStateToProps = state => ({
  allInfo: {
    culture: state.culture,
    places: state.places,
    passenger: state.passenger,
    datepicker: state.datepicker
  }
});

const mapDispatchToProps = dispatch => ({
  createSession: allInfo => {
    dispatch(clearError());
    // URL -> /transport/flights/{originPlace_id}/{destinationPlace_id}/{outboundDate}/{inboundDate && inboundDate}/?query
    const originPlace = allInfo.places.inBoundId.toLowerCase();
    const originPlaceName = allInfo.places.inBoundName;
    const destinationPlace = allInfo.places.outBoundId.toLowerCase();
    const destinationPlaceName = allInfo.places.outBoundName;
    const tripType = allInfo.datepicker.tripType;
    const outboundDate = TicketService.convertDateToString(
      allInfo.datepicker.outboundDate
    );
    const inboundDate =
      allInfo.datepicker.inboundDate &&
      TicketService.convertDateToString(allInfo.datepicker.inboundDate);
    const adults = allInfo.passenger.adults;
    const children = allInfo.passenger.children.length;
    const childrenAge = allInfo.passenger.children.map(c => c.age).join('|');
    const infants = allInfo.passenger.children.filter(c => c.type === 'infant')
      .length;
    const cabinclass = allInfo.passenger.cabinClass;

    dispatch(
      push(
        `/transport/flights/${originPlace}/${destinationPlace}/${outboundDate}?inboundDate=${inboundDate}&tripType=${tripType}&adults=${adults}&children=${children}&childrenAge=${childrenAge}&infants=${infants}&cabinclass=${cabinclass}&originPlaceName=${originPlaceName}&destinationPlaceName=${destinationPlaceName}`
      )
    );
    // dispatch(createSession(allInfo));
  },
  setError: errors => {
    dispatch(setError(errors));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
