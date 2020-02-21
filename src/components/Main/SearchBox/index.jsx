import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import BoundSearchBox from './BoundSearchBox';
import BoundChangeBox from './BoundChangeBox';
import { useLocation } from 'react-router-dom';

const SearchBoxWrapper = styled.div`
  width: 50%;

  ${({ page }) =>
    page === '/transport/flights' &&
    css`
      width: 100%;
    `}
`;

const SearchBox = React.memo(
  ({ places, setPlace, switchPlaces, errors, errorOccurred, setError }) => {
    const [bound, setBound] = useState({
      inBoundName: places.inBoundName,
      outBoundName: places.outBoundName,
    });

    const selectBound = (PlaceId, PlaceName, type) => {
      setPlace({ PlaceId, PlaceName, type });
      // if (errorOccurred) {
      //   let newErrors = [...errors];
      //   if (places.inBoundId && places.outBoundId) {
      //     console.log(
      //       'test',
      //       places.inBoundId.length,
      //       places.outBoundId.length,
      //     );
      //     // setError(errors.filter(e => e.type !== 'Incorrect places'));
      //     // const newErrors = ;
      //     newErrors = newErrors.filter(e => e.type !== 'Incorrect places');
      //   }
      //   if (places.inBoundId !== places.outBoundId) {
      //     newErrors = newErrors.filter(e => e.type !== 'PlaceId is same');
      //   }
      //   setError(newErrors);
      // }
    };

    const changeBound = () => {
      setBound({
        inBoundName: places.outBoundName,
        outBoundName: places.inBoundName,
      });
      switchPlaces();
    };

    const { pathname } = useLocation();

    return (
      <SearchBoxWrapper page={pathname}>
        <BoundSearchBox
          header={'출발지'}
          bound={bound} // 지역 state
          setBound={setBound} // 지역 state Update
          selectBound={selectBound} // 전역 state Update
          type="inBound"
        />
        <BoundChangeBox changeBound={changeBound} />
        <BoundSearchBox
          header={'도착지'}
          bound={bound} // 지역 state
          setBound={setBound} // 지역 state Update
          selectBound={selectBound} // 전역 state Update
          type="outBound"
          borderRadius="none"
        />
      </SearchBoxWrapper>
    );
  },
);

export default SearchBox;
