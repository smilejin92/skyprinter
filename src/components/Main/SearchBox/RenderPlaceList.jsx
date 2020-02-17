import React from 'react';
import ParseWord from './ParseWord';
import styled from 'styled-components';
import uuid from 'uuid';

const ListSection = styled.section`
  display: flex;
  flex-direction: row;
  color: #111236;
  padding: 1.2rem 1.8rem;
  padding-left: ${props => (props.hasCountry ? '30px' : '18px')};
  svg {
    fill: #b2b2bf;
    overflow: hidden;
    margin-top: -2px;
    margin-right: 0.96rem;
    vertical-align: top;
  }
  div {
    width: 100%;
  }
  span {
    margin: 0;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    letter-spacing: normal;
  }
  small {
    display: block;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 400;
    letter-spacing: normal;
  }
  strong {
    font-weight: 700;
  }
`;

const RenderPlaceList = React.memo(({ place, suggestion, hasCountry }) => {
  const result = {};
  const array = suggestion.ResultingPhrase.split('');
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < suggestion.Highlighting.length; j++) {
      if (i === suggestion.Highlighting[j][0]) {
        array[i] = '#' + array[i];
      }
      if (i === suggestion.Highlighting[j][1] - 1) {
        array[i] = array[i] + '#$';
      }
    }
  }

  if (place === 'Country') {
    result.CountryName = array.join('').split('$');
    // console.log('국가명1: ', result.CountryName);
  } else {
    const ResultingArray = array.join('').split('|');
    result.PlaceName = ResultingArray[0].includes(',')
      ? ResultingArray[0]
          .split(',')[0]
          .split(' ')[0]
          .split('$')
      : ResultingArray[0].split('$');
    result.CountryName = ResultingArray[ResultingArray.length - 1].includes('$')
      ? ResultingArray[ResultingArray.length - 1].split('$')
      : [ResultingArray[ResultingArray.length - 1]];
  }

  switch (place) {
    case 'Country': {
      return (
        <ListSection>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M6 22H4V3c0-.6.4-1 1-1s1 .4 1 1v19zM19.5 3H7v10h12.5c.4 0 .7-.5.4-.8L16 8l3.9-4.2c.3-.3 0-.8-.4-.8z"></path>
          </svg>
          <div>
            <span>
              {result.CountryName.map(word => {
                return <ParseWord key={uuid.v4()} word={word} />;
              })}
            </span>
            <span>{suggestion.RegionId && `${suggestion.RegionId}`}</span>{' '}
            <span>({suggestion.PlaceId})</span>
            <small>
              {result.CountryName.map(word => {
                return <ParseWord key={uuid.v4()} word={word} />;
              })}
            </small>
          </div>
        </ListSection>
      );
    }
    case 'City': {
      return (
        <ListSection>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M19 12h-4V6l-3-3-3 3v2H5c-1.1 0-2 .9-2 2v11h18v-7c0-1.1-.9-2-2-2zM8 19.8H6v-2h2v2zM8 16H6v-2h2v2zm0-4H6v-2h2v2zm5 7.8h-2v-2h2v2zm0-3.8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2zm5 11.8h-2v-2h2v2zm0-3.8h-2v-2h2v2z"></path>
          </svg>
          <div>
            <span>
              {' '}
              {result.PlaceName.map(word => {
                return <ParseWord key={uuid.v4()} word={word} />;
              })}
            </span>{' '}
            <span>{suggestion.RegionId && `(${suggestion.RegionId})`}</span>{' '}
            <span>({suggestion.PlaceId})</span>
            <small>
              {' '}
              {result.CountryName.map(word => {
                return <ParseWord key={uuid.v4()} word={word} />;
              })}
            </small>
          </div>
        </ListSection>
      );
    }
    default: {
      return (
        <ListSection hasCountry={hasCountry}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M3.455 8.78a.775.775 0 0 1 .952.224l1.472 1.91 1.816-.267a2.852 2.852 0 0 1 .536-.051h9.862a5.099 5.099 0 0 1 2.438.62.944.944 0 0 1-.072 1.67l-.046.021a5.1 5.1 0 0 1-2.194.497h-4.314l-3.663 5.867A1.546 1.546 0 0 1 8.93 20H7.78l2.007-5.858v-.738h-1.53a2.865 2.865 0 0 1-.589-.062l-1.765-.288-1.509 1.958a.775.775 0 0 1-.929.237.786.786 0 0 1-.419-.984L3.862 12 3.06 9.749a.785.785 0 0 1 .395-.97zM8.929 4a1.545 1.545 0 0 1 1.312.729l3.19 4.985H9.749L7.778 4z"></path>
          </svg>
          <div>
            <span>
              {' '}
              {result.PlaceName.map(word => {
                return <ParseWord key={uuid.v4()} word={word} />;
              })}
            </span>{' '}
            <span>{suggestion.RegionId && `(${suggestion.RegionId})`}</span>{' '}
            <span>({suggestion.PlaceId})</span>
            <small>
              {' '}
              {result.CountryName.map(word => {
                return <ParseWord key={uuid.v4()} word={word} />;
              })}
            </small>
          </div>
        </ListSection>
      );
    }
  }
});

export default RenderPlaceList;
