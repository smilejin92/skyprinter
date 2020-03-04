import React, { useEffect } from 'react';
import qs from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { createSession } from '../redux/modules/session';
import { setPlace } from '../redux/modules/places';
import { resetDate } from '../redux/modules/datepicker';
import { resetPassenger } from '../redux/modules/passenger';

function withTest(Component) {
  function WrappedComponent(props) {
    const storePlaces = useSelector(state => state.places);
    const culture = useSelector(state => state.culture);
    const dispatch = useDispatch();

    useEffect(() => {
      const urlQuery = qs.parse(props.location.search);
      console.log('url쿼리', urlQuery);
      const places = {
        inBoundId: props.match.params.originId,
        inBoundName: urlQuery.originPlaceName,
        outBoundId: props.match.params.destinationId,
        outBoundName: urlQuery.destinationPlaceName
      };

      const datepicker = {
        tripType: urlQuery.tripType,
        outboundDate: new Date(props.match.params.outboundDate),
        inboundDate: urlQuery.inboundDate
          ? new Date(urlQuery.inboundDate)
          : null,
        prevInboundDate: null
      };

      const children = urlQuery.children
        ? urlQuery.childrenAge
            .split('|')
            .map((c, i) => ({
              id: i,
              age: c,
              type: c >= 2 ? 'child' : 'infant'
            }))
        : [];

      const passenger = {
        cabinClass: urlQuery.cabinclass,
        adults: +urlQuery.adults,
        children
        //urlQuery.children, urlQuery.infants
      };
      // Query String
      const allInfo = {
        culture: culture,
        places: places,
        passenger: passenger,
        datepicker: datepicker
      };

      // createSession
      dispatch(createSession(allInfo));

      // reset ReduxStore
      if (storePlaces && storePlaces.inBoundId.length === 0) {
        dispatch(
          setPlace({
            PlaceId: places.inBoundId,
            PlaceName: places.inBoundName,
            type: 'inBound'
          })
        );
        dispatch(
          setPlace({
            PlaceId: places.outBoundId,
            PlaceName: places.outBoundName,
            type: 'outBound'
          })
        );
        dispatch(resetDate({ ...datepicker }));
        dispatch(resetPassenger({ ...passenger }));
      }
    }, [
      culture,
      dispatch,
      props.location.search,
      props.match.params.destinationId,
      props.match.params.originId,
      props.match.params.outboundDate,
      storePlaces
    ]);

    return <Component {...props} />;
    // }
  }
  // display 이름 설정. (디버깅시 이름을 유지시켜주기 위함.)
  WrappedComponent.displayName = `withTest(${Component.name})`;

  return WrappedComponent;
}

export default withTest;
