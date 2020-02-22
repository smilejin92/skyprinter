import React, { useState, useRef } from 'react';
import AutoSuggest from 'react-autosuggest';
import SearchService from '../../../services/SearchService';
import RenderPlaceList from './RenderPlaceList';
import CheckBox from '../CheckBox';
import { SearchWrapper, SearchLabel } from '../../styles/BoundSearchBox.style';
import { useLocation } from 'react-router-dom';

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

const BoundSearchBox = ({
  header,
  borderRadius,
  bound,
  setBound,
  selectBound,
  type,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const CityName = useRef(null);
  const { pathname } = useLocation();

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
    <SearchWrapper borderRadius={borderRadius} page={pathname}>
      <SearchLabel type={type}>{header}</SearchLabel>
      <AutoSuggest
        id={`search-input-${type}`}
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          searchPlace(value, type === 'inBound' ? true : false);
        }}
        onSuggestionSelected={(e, { suggestion }) => {
          // 지역 state 업데이트
          if (type === 'inBound') {
            setBound({
              inBoundName:
                suggestion.PlaceName === suggestion.CityName
                  ? `${suggestion.PlaceName} (모두)`
                  : `${suggestion.PlaceName} (${suggestion.PlaceId})`,
              outBoundName: bound.outBoundName,
            });
          } else {
            setBound({
              inBoundName: bound.inBoundName,
              outBoundName:
                suggestion.PlaceName === suggestion.CityName
                  ? `${suggestion.PlaceName} (모두)`
                  : `${suggestion.PlaceName} (${suggestion.PlaceId})`,
            });
          }
          // 리덕스 state 업데이트
          selectBound(
            suggestion.PlaceId,
            suggestion.PlaceName === suggestion.CityName
              ? `${suggestion.PlaceName} (모두)`
              : `${suggestion.PlaceName} (${suggestion.PlaceId})`,
            type,
          );
          pressEnter(e, type);
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
            // 지역 state 업데이트
            if (type === 'inBound') {
              setBound({
                inBoundName: newValue,
                outBoundName: bound.outBoundName,
              });
            } else {
              setBound({
                inBoundName: bound.inBoundName,
                outBoundName: newValue,
              });
            }
          },
          onBlur: (_, { highlightedSuggestion }) => {
            if (highlightedSuggestion && highlightedSuggestion.PlaceName) {
              // 지역 state 업데이트
              if (type === 'inBound') {
                setBound({
                  inBoundName:
                    highlightedSuggestion.PlaceName ===
                    highlightedSuggestion.CityName
                      ? `${highlightedSuggestion.PlaceName} (모두)`
                      : `${highlightedSuggestion.PlaceName} (${highlightedSuggestion.PlaceId})`,
                  outBoundName: bound.outBoundName,
                });
              } else {
                setBound({
                  inBoundName: bound.inBoundName,
                  outBoundName:
                    highlightedSuggestion.PlaceName ===
                    highlightedSuggestion.CityName
                      ? `${highlightedSuggestion.PlaceName} (모두)`
                      : `${highlightedSuggestion.PlaceName} (${highlightedSuggestion.PlaceId})`,
                });
              }
              // 리덕스 state 업데이트
              selectBound(
                highlightedSuggestion.PlaceId,
                highlightedSuggestion.PlaceName ===
                  highlightedSuggestion.CityName
                  ? `${highlightedSuggestion.PlaceName} (모두)`
                  : `${highlightedSuggestion.PlaceName} (${highlightedSuggestion.PlaceId})`,
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
