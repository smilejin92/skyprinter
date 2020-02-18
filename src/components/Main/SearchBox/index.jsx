import React from 'react';
import styled from 'styled-components';
import BoundSearchBox from './BoundSearchBox';
import BoundChangeBox from './BoundChangeBox';
import { connect } from 'react-redux';
import { setPlace, switchPlaces } from '../../../redux/modules/places';

const SearchBoxWrapper = styled.div`
  width: 50%;
`;

const SearchBox = React.memo(({ places, setPlace, switchPlaces }) => {
  const selectBound = (PlaceId, PlaceName, type) => {
    setPlace({ PlaceId, PlaceName, type });
  };

  return (
    <SearchBoxWrapper>
      {/* {console.log('bound는 : ', places)} */}
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

const mapStateToProps = state => {
  return {
    places: state.places,
  };
};

const mapDispatchToProps = dispatch => ({
  setPlace: places => {
    dispatch(setPlace(places));
  },
  switchPlaces: () => {
    dispatch(switchPlaces());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
