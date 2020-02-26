import React from 'react';
import { connect } from 'react-redux';
import { setError, clearError } from '../../redux/modules/error';
import { createSession } from '../../redux/modules/session';
import { push } from 'connected-react-router';

const SearchButton = ({ children, allInfo, createSession, setError }) => {
  const generatedId = errorLists => {
    return Math.max(0, ...errorLists.map(errorList => errorList.id)) + 1;
  };

  const create = () => {
    const errorLists = [];
    if (!allInfo.places.inBoundId || !allInfo.places.outBoundId) {
      console.log('출발지 혹은 도착지를 입력해주세요.');
      errorLists.push({
        id: generatedId(errorLists),
        type: 'Incorrect places',
        message: '출발지 혹은 도착지를 입력해주세요.',
      });
    }

    if (allInfo.places.inBoundId === allInfo.places.outBoundId) {
      console.log('출발지와 도착지가 같으면 검색이 불가능합니다.');
      errorLists.push({
        id: generatedId(errorLists),
        type: 'PlaceId is same',
        message: '출발지와 도착지가 같으면 검색이 불가능합니다.',
      });
    }

    if (
      allInfo.passenger.children.filter(child => child.type === undefined)
        .length >= 1
    ) {
      errorLists.push({
        id: generatedId(errorLists),
        type: 'Age not selected',
        message: '모든 유/소아의 나이를 입력해주세요.',
      });
    }

    if (allInfo.passenger.children.filter(child => child.age < 2).length >= 2) {
      if (
        allInfo.passenger.adults <
        allInfo.passenger.children.filter(child => child.age < 2).length
      ) {
        console.log('성인 한 사람당 유/소아 1명(만 0 - 2세)만 허용됩니다.');
        errorLists.push({
          id: generatedId(errorLists),
          type: 'No matching adult',
          message: '성인 한 사람당 유/소아 1명(만 0 - 2세)만 허용됩니다.',
        });
      }
    }

    if (
      allInfo.places.inBoundId.length === 2 ||
      allInfo.places.outBoundId.length === 2
    ) {
      // 나중에 비워내고 브라우저로 변경
      errorLists.push({
        id: generatedId(errorLists),
        type: 'No Country',
        message: '실시간 항공권 검색은 도시 단위까지만 가능합니다.',
      });
    }

    if (errorLists.length >= 1) {
      setError(errorLists);
    } else {
      clearError();
      createSession(allInfo);
    }
  };

  return <button onClick={create}>{children}</button>;
};

const convertDateToString = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const _date = date.getDate();
  return `${year}-${Math.floor(month / 10) === 0 ? `0${month}` : month}-${
    Math.floor(_date / 10) === 0 ? `0${_date}` : _date
  }`;
};

const mapStateToProps = state => ({
  allInfo: {
    culture: state.culture,
    places: state.places,
    passenger: state.passenger,
    datepicker: state.datepicker,
  },
});

const mapDispatchToProps = dispatch => ({
  createSession: allInfo => {
    dispatch(clearError());
    // URL -> /transport/flights/{originPlace_id}/{destinationPlace_id}/{outboundDate}/{inboundDate && inboundDate}/?query
    dispatch(
      push(
        `/transport/flights/${allInfo.places.inBoundId.toLowerCase()}/${allInfo.places.outBoundId.toLowerCase()}/${convertDateToString(
          allInfo.datepicker.outboundDate,
        )}${allInfo.datepicker.inboundDate &&
          `/${convertDateToString(allInfo.datepicker.inboundDate)}`}`,
      ),
    );
    dispatch(createSession(allInfo));
  },
  setError: errors => {
    dispatch(setError(errors));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
