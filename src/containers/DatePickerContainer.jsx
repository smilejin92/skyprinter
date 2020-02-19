import { connect } from 'react-redux';
import { displayModal, hideModal } from '../redux/modules/display';
import {
  setInboundDate,
  setOutboundDate,
  setRoundTrip,
} from '../redux/modules/datepicker';
import DatePicker from '../components/Main/DatePicker';

const mapStateToProps = (state, ownProps) => {
  const { type } = ownProps;
  const isInbound = type === 'inbound';

  return {
    tripType: state.datepicker.tripType,
    inboundDate: state.datepicker.inboundDate,
    outboundDate: state.datepicker.outboundDate,
    selectedDate: isInbound
      ? state.datepicker.inboundDate
      : state.datepicker.outboundDate,
    visible: isInbound
      ? state.display.inboundDatePicker
      : state.display.outboundDatePicker,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { type } = ownProps;
  const modalType =
    type === 'inbound' ? 'inboundDatePicker' : 'outboundDatePicker';

  return {
    displayModal: () => {
      dispatch(displayModal(modalType));
    },
    hideModal: () => {
      dispatch(hideModal());
    },
    setInboundDate: inboundDate => {
      dispatch(setInboundDate(inboundDate));
    },
    setOutboundDate: outboundDate => {
      dispatch(setOutboundDate(outboundDate));
    },
    setRoundTrip: () => {
      dispatch(setRoundTrip());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
