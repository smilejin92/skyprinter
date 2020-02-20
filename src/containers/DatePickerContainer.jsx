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
  const isInbound = type === 'inbound' || type === 'inline-inbound';

  let visible;
  const {
    inboundDatePicker,
    outboundDatePicker,
    inlineInboundDatePicker,
    inlineOutboundDatePicker,
  } = state.display;

  if (type === 'inbound') visible = inboundDatePicker;
  else if (type === 'outbound') visible = outboundDatePicker;
  else if (type === 'inline-inbound') visible = inlineInboundDatePicker;
  else visible = inlineOutboundDatePicker;

  return {
    tripType: state.datepicker.tripType,
    inboundDate: state.datepicker.inboundDate,
    outboundDate: state.datepicker.outboundDate,
    selectedDate: isInbound
      ? state.datepicker.inboundDate
      : state.datepicker.outboundDate,
    visible,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { type } = ownProps;

  let modalType;
  if (type === 'inbound') modalType = 'inboundDatePicker';
  else if (type === 'outbound') modalType = 'outboundDatePicker';
  else if (type === 'inline-inbound') modalType = 'inline-inboundDatePicker';
  else modalType = 'inline-outboundDatePicker';

  // const modalType =
  //   type === 'inbound' ? 'inboundDatePicker' : 'outboundDatePicker';

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
