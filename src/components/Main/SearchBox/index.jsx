import React, { useState } from 'react';
import styled from 'styled-components';
import BoundSearchBox from './BoundSearchBox';
import BoundChangeBox from './BoundChangeBox';

const SearchBoxWrapper = styled.div`
  width: 50%;
`;

const SearchBox = () => {
  const [bound, setBound] = useState({
    inBoundId: '',
    inBoundName: '',
    outBoundId: '',
    outBoundName: '',
  });

  const selectBound = (PlaceId, PlaceName, boundType) => {
    if (boundType === 'inBound') {
      setBound({
        ...bound,
        inBoundId: PlaceId,
        inBoundName: PlaceName,
      });
    } else {
      setBound({
        ...bound,
        outBoundId: PlaceId,
        outBoundName: PlaceName,
      });
    }
  };

  const changeBound = () => {
    if (!(bound.inBoundName || bound.outBoundName)) return;
    // const tempBound = {
    //   inBoundId: bound.outBoundId,
    //   outBoundId: bound.inBoundId,
    //   inBoundName: bound.outBoundName,
    //   outBoundName: bound.inBoundName
    // }
    setBound({
      inBoundId: bound.outBoundId,
      outBoundId: bound.inBoundId,
      inBoundName: bound.outBoundName,
      outBoundName: bound.inBoundName,
    });
  };

  return (
    <SearchBoxWrapper>
      {console.log(bound)}
      <BoundSearchBox bound={bound} selectBound={selectBound} type="inBound" />
      <BoundChangeBox changeBound={changeBound} />
      <BoundSearchBox
        bound={bound}
        selectBound={selectBound}
        type="outBound"
        borderRadius="none"
      />
    </SearchBoxWrapper>
  );
};

export default SearchBox;
