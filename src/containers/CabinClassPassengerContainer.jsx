import { hideModal } from '../redux/modules/display';
import { connect } from 'react-redux';
import {
  setCabinClass,
  setAdults,
  setChildren,
} from '../redux/modules/passenger';
import CabinClassAndPassenger from '../components/Main/CabinClassPassenger/CabinClassAndPassenger';

const mapStateToProps = state => ({
  passengerInfo: state.passenger,
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => {
    dispatch(hideModal());
  },
  setCabinGrade: cabinClass => {
    dispatch(setCabinClass(cabinClass));
  },
  setAdult: mode => {
    dispatch(setAdults(mode));
  },
  setChild: mode => {
    dispatch(setChildren(mode));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CabinClassAndPassenger);
