import React from 'react';
import { useState, useRef } from 'react';
import AutoSuggest from 'react-autosuggest';
import styled from 'styled-components';
import SearchService from '../../../services/SearchService';
import RenderPlaceList from './RenderPlaceList';
import CheckBox from '../CheckBox';

const SearchWrapper = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
  display: inline-block;
  width: 46%;
  text-align: left;
  position: relative;

  .react-autosuggest__input {
    margin: 0;
    border-right: none;
    display: inline-block;
    width: 101%;
    height: 4.8rem;
    padding: 0.6rem 1.2rem;
    background: #fff;
    color: #111236;
    appearance: none;
    border: 0.1rem solid #b2b2bf;
    border-right-width: 0;
    border-radius: ${props => props.borderRadius || '0.4rem 0 0 0.4rem'};

    &::placeholder {
      font-style: italic;
      color: rgb(173, 173, 184);
    }
  }

  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    position: absolute;
    top: 100%;
    display: block;
    z-index: 900;
    margin-top: 1.3rem;
    width: 180%;
    background-color: initial;
    &:before {
      position: absolute;
      bottom: 100%;
      content: ' ';
      display: block;
      margin-bottom: -0.1rem;
      border: 1.3rem solid transparent;
      border-bottom-color: #dddde5;
      pointer-events: none;
      left: 28%;
      box-sizing: inherit;
    }
    &:after {
      position: absolute;
      bottom: 100%;
      left: 28%;
      content: ' ';
      display: block;
      margin-bottom: -0.1rem;
      margin-left: 0.1rem;
      border: 1.2rem solid transparent;
      border-bottom-color: #fff;
      pointer-events: none;
    }
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: rgb(239, 240, 245);
  }

  ul {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: auto;
    border: none;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    border: 0.1rem solid #dddde5;
    background-color: #fff;
    border-radius: 0.6rem;
    box-shadow: 0 4px 14px 0 rgba(37, 32, 31, 0.25);
  }

  li {
    box-shadow: inset 0 -1px 0 0 #dddde5;
    cursor: pointer;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    letter-spacing: normal;
  }
`;

const SearchLabel = styled.label.attrs(props => ({
  htmlFor: `search-input-${props.type}`,
}))`
  display: block;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
`;

const pressEnter = (e, type) => {
  if (e.keyCode === 13 && e.target.nodeName === 'INPUT') {
    const form = e.target.form;
    const index = Array.prototype.indexOf.call(form, e.target);
    type === 'inBound'
      ? form.elements[index + 3].focus()
      : form.elements[index + 2].focus();
    e.preventDefault();
  }
};

const BoundSearchBox = ({ header, borderRadius, bound, selectBound, type }) => {
  const [suggestions, setSuggestions] = useState([]);
  const CityName = useRef(null);

  const searchPlace = async (value, isDestination) => {
    try {
      const { data } = await SearchService.SelectArea(
        'KR',
        'ko-KR',
        value,
        isDestination,
      );
      setSuggestions(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SearchWrapper borderRadius={borderRadius}>
      <SearchLabel type={type}>{header}</SearchLabel>
      <AutoSuggest
        id={`search-input-${type}`}
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          searchPlace(value, type === 'inBound' ? true : false);
        }}
        onSuggestionSelected={(e, { suggestion }) => {
          selectBound(
            suggestion.PlaceId,
            `${suggestion.PlaceName} (${suggestion.PlaceId})`,
            type,
          );
          pressEnter(e, type);
          return console.log(`Selected: ${suggestion.PlaceId}-sky`);
        }}
        getSuggestionValue={suggestion => suggestion.PlaceName}
        renderSuggestion={suggestion => {
          if (suggestion.CityId === suggestion.PlaceId) {
            CityName.current = suggestion.CityId;
            return <RenderPlaceList place="City" suggestion={suggestion} />;
          } else if (suggestion.CityId === '') {
            return <RenderPlaceList place="Country" suggestion={suggestion} />;
          } else {
            return (
              <RenderPlaceList
                place="AirStation"
                suggestion={suggestion}
                hasCity={suggestion.CityId === CityName.current}
              />
            );
          }
        }}
        inputProps={{
          id: `search-input-${type}`,
          placeholder: '국가, 도시 또는 공항',
          value: type === 'inBound' ? bound.inBoundName : bound.outBoundName,
          onChange: (_, { newValue }) => {
            selectBound('', newValue, type);
          },
          onBlur: (_, { highlightedSuggestion }) => {
            if (highlightedSuggestion && highlightedSuggestion.PlaceName) {
              selectBound(
                highlightedSuggestion.PlaceId,
                `${highlightedSuggestion.PlaceName} (${highlightedSuggestion.PlaceId})`,
                type,
              );
            }
          },
        }}
        highlightFirstSuggestion={true}
      />
      <CheckBox disabled={true}>주변 공항 추가</CheckBox>
    </SearchWrapper>
  );
};

export default BoundSearchBox;
