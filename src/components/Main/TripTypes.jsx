import React, { useCallback } from 'react';
import { Radio } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setOnewayTrip, setRoundTrip } from '../../redux/modules/datepicker';
import { hideModal } from '../../redux/modules/display';

const TypesSelection = styled(Radio.Group)`
  color: #fff;
  label {
    font-size: 1.6rem;
    color: #fff;
  }
  span {
    color: #fff;
  }
  .ant-radio {
    margin: 0 0 2px 0;
  }
`;

function TripTypes({
  onScreen,
  tripType,
  setOnewayTrip,
  setRoundTrip,
  hideModal,
}) {
  const selectTripType = useCallback(
    ({ target }) => {
      if (onScreen) hideModal();
      if (target.value === 'round') setRoundTrip();
      else setOnewayTrip();
    },
    [setOnewayTrip, setRoundTrip, hideModal, onScreen],
  );

  return (
    <TypesSelection onChange={selectTripType} value={tripType}>
      <Radio value="round">왕복</Radio>
      <Radio value="oneway">편도</Radio>
      <Radio value="multi" disabled>
        다구간
      </Radio>
    </TypesSelection>
  );
}

const mapStateToProps = state => ({
  onScreen: state.display.onScreen,
  tripType: state.datepicker.tripType,
});

const mapDispatchToProps = dispatch => ({
  setOnewayTrip: () => {
    dispatch(setOnewayTrip());
  },
  setRoundTrip: () => {
    dispatch(setRoundTrip());
  },
  hideModal: () => {
    dispatch(hideModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TripTypes);
