// import React from 'react';
import { displayModal } from '../redux/modules/display';
import { connect } from 'react-redux';
import ClassGradeButton from '../components/Main/CabinClassPassenger/index';

const mapStateToProps = state => ({
  visible: state.display.passengerInfo,
  passengerInfo: state.passenger,
});

const mapDispatchToProps = dispatch => ({
  displayModal: () => {
    dispatch(displayModal('passengerInfo'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassGradeButton);
