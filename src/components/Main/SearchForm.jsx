import React, { useCallback } from 'react';
import PlacesContainer from '../../containers/PlacesContainer';
import CheckBox from './CheckBox';
import DatePickerContainer from '../../containers/DatePickerContainer';
import TripTypes from './TripTypes';
import CabinClassPassengerContainer from '../../containers/CabinPassengerContainer';
import {
  SearchFormWrapper,
  SearchFormOption,
  SearchWrapper,
  SearchFormSubmit,
  SelectSeatDateBox,
  SearchSubmitButton,
} from '../styles/SearchForm.style';
import { useLocation } from 'react-router-dom';

function SearchForm() {
  const handleSubmit = useCallback(e => {
    e.preventDefault();
  }, []);

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <SearchFormWrapper direction="column" page={pathname}>
      <form onSubmit={handleSubmit}>
        <SearchFormOption>
          <TripTypes />
          <div>
            <a
              href="https://www.skyscanner.co.kr/inspire/map?outboundDate=2020-11-11&outboundPlace=&preferDirects=false"
              target="_blank"
              rel="noopener noreferrer"
            >
              지도로 검색하기
            </a>
          </div>
        </SearchFormOption>
        <SearchWrapper page={pathname}>
          <PlacesContainer />
          <SelectSeatDateBox page={pathname}>
            <DatePickerContainer type="inbound" inMain={true} />
            <DatePickerContainer type="outbound" inMain={true} />
            <CabinClassPassengerContainer />
          </SelectSeatDateBox>
        </SearchWrapper>
        <SearchFormSubmit>
          <CheckBox>직항만</CheckBox>
          <SearchSubmitButton>
            항공권 검색
            <span>
              <svg width="24" height="24" fill="rgb(255, 255, 255)">
                <path d="M14.4 19.5l5.7-5.3c.4-.4.7-.9.8-1.5.1-.3.1-.5.1-.7s0-.4-.1-.6c-.1-.6-.4-1.1-.8-1.5l-5.7-5.3c-.8-.8-2.1-.7-2.8.1-.8.8-.7 2.1.1 2.8l2.7 2.5H5c-1.1 0-2 .9-2 2s.9 2 2 2h9.4l-2.7 2.5c-.5.4-.7 1-.7 1.5s.2 1 .5 1.4c.8.8 2.1.8 2.9.1z"></path>
              </svg>
            </span>
          </SearchSubmitButton>
        </SearchFormSubmit>
      </form>
    </SearchFormWrapper>
  );
}

export default SearchForm;

// export default connect(
//   state => ({
//     page: state.style.page
//   }),
//   dispatch => ({
//     setStyle: () => {
//       dispatch(setStyle('result'));
//     }
//   }))(SearchForm);
