import React from 'react';
import qs from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { createSession } from '../redux/modules/session';
import { setPlace } from '../redux/modules/places';

function withTest(Component) {
  function WrappedComponent(props) {
    const storePlaces = useSelector(state => state.places);
    const culture = useSelector(state => state.culture);
    const dispatch = useDispatch();

    // if(session.sessionKey !== null) {
    //   // sesssionKey가 존재할 경우 패스.
    //   console.log('세션키가 있습니다.');
    //   return <Component {...props} />;
    // } else {
    console.log('시작');
    const urlQuery = qs.parse(props.location.search);
    const places = {
      inBoundId: props.match.params.originId,
      inBoundName: urlQuery.originPlaceName,
      outBoundId: props.match.params.destinationId,
      outBoundName: urlQuery.destinationPlaceName,
    };

    const datepicker = {
      tripType: urlQuery.tripType,
      outboundDate: new Date(props.match.params.outboundDate),
      inboundDate: new Date(urlQuery.inboundDate),
    };

    const passenger = {
      cabinClass: urlQuery.cabinclass,
      adults: urlQuery.adults,
      children: [],
      //urlQuery.children, urlQuery.infants
    };
    // Query String
    const allInfo = {
      culture: culture,
      places: places,
      passenger: passenger,
      datepicker: datepicker,
    };

    dispatch(createSession(allInfo));
    if (storePlaces && storePlaces.inBoundId.length === 0) {
      dispatch(
        setPlace({
          PlaceId: places.inBoundId,
          PlaceName: places.inBoundName,
          type: 'inBound',
        }),
      );
      dispatch(
        setPlace({
          PlaceId: places.outBoundId,
          PlaceName: places.outBoundName,
          type: 'outBound',
        }),
      );
    }
    // sessionKey가 존재하지 않을 경우.
    console.log('끝');
    return <Component {...props} />;
    // }
  }
  // display 이름 설정. (디버깅시 이름을 유지시켜주기 위함.)
  WrappedComponent.displayName = `withTest(${Component.name})`;

  return WrappedComponent;
}

export default withTest;
