import React from 'react';
import { connect } from 'react-redux';
import { setError } from '../../redux/modules/error';
import { clearError } from '../../redux/modules/error';

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
        type: 'ValidationError',
        message: '출발지 혹은 도착지를 입력해주세요.',
      });
    }

    if (allInfo.places.inBoundId === allInfo.places.outBoundId) {
      console.log('출발지와 도착지가 같으면 검색이 불가능합니다.');
      errorLists.push({
        id: generatedId(errorLists),
        type: 'ValidationError',
        message: '출발지와 도착지가 같으면 검색이 불가능합니다.',
      });
    }

    if (
      allInfo.passenger.children.filter(child => child.type === undefined)
        .length >= 1
    ) {
      errorLists.push({
        id: generatedId(errorLists),
        type: 'ValidationError',
        message: '모든 유/소아의 나이를 입력해주세요.',
      });
    }

    if (allInfo.passenger.children.filter(child => child.age < 3).length >= 1) {
      if (
        allInfo.passenger.adult <
        allInfo.passenger.children.filter(child => child.age < 3).length
      ) {
        console.log('성인 한 사람당 유/소아 1명(만 0 - 2세)만 허용됩니다.');
        errorLists.push({
          id: generatedId(errorLists),
          type: 'ValidationError',
          message: '성인 한 사람당 유/소아 1명(만 0 - 2세)만 허용됩니다.',
        });
      }
    }

    if (errorLists.length >= 1) {
      setError(errorLists);
    } else {
      createSession(allInfo);
    }
  };

  return <button onClick={create}>{children}</button>;
};

const mapStateToProps = state => ({
  allInfo: {
    locale: state.culture.locale,
    country: state.culture.country,
    currency: state.culture.currency,
    places: state.places,
    culture: state.culture,
    passenger: state.passenger,
    datepicker: state.datepicker,
  },
});

const mapDispatchToProps = dispatch => ({
  createSession: () => {
    console.log('세션생성');
    dispatch(clearError);
  },
  setError: errors => {
    console.log('에러');
    dispatch(setError(errors));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
