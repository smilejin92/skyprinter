import React from 'react';
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

const SearchBox = React.memo(({ places, setPlace, switchPlaces }) => {
  const selectBound = (PlaceId, PlaceName, type) => {
    setPlace({ PlaceId, PlaceName, type });
  };

  const { pathname } = useLocation();

  return (
    <SearchBoxWrapper page={pathname}>
      <BoundSearchBox
        header={'출발지'}
        bound={places}
        selectBound={selectBound}
        type="inBound"
      />
      <BoundChangeBox changeBound={switchPlaces} />
      <BoundSearchBox
        header={'도착지'}
        bound={places}
        selectBound={selectBound}
        type="outBound"
        borderRadius="none"
      />
    </SearchBoxWrapper>
  );
});

export default SearchBox;
