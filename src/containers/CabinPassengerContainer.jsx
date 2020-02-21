// import React from 'react';
import { displayModal } from '../redux/modules/display';
import { connect } from 'react-redux';
import { setError } from '../redux/modules/error';
import ClassGradeButton from '../components/Main/CabinClassPassenger/index';

const mapStateToProps = state => ({
  visible: state.display.passengerInfo,
  passengerInfo: state.passenger,
  errors: state.error.errors,
  errorOccurred: state.error.errorOccurred,
});

const mapDispatchToProps = dispatch => ({
  displayModal: () => {
    dispatch(displayModal('passengerInfo'));
  },
  setError: errors => {
    dispatch(setError(errors));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassGradeButton);
