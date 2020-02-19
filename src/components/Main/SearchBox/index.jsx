import React from 'react';
import styled from 'styled-components';
import BoundSearchBox from './BoundSearchBox';
import BoundChangeBox from './BoundChangeBox';

const SearchBoxWrapper = styled.div`
  width: 50%;
`;

const SearchBox = React.memo(({ places, setPlace, switchPlaces }) => {
  const selectBound = (PlaceId, PlaceName, type) => {
    setPlace({ PlaceId, PlaceName, type });
  };

  return (
    <SearchBoxWrapper>
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
