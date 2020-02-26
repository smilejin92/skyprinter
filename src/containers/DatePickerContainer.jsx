import { connect } from 'react-redux';
import { displayModal, hideModal } from '../redux/modules/display';
import DatePicker from '../components/Main/DatePicker';
import {
  setInboundDate,
  setOutboundDate,
  setRoundTrip,
} from '../redux/modules/datepicker';

const mapStateToProps = (state, ownProps) => {
  const { type } = ownProps;
  const isOutbound = type === 'outbound' || type === 'inline-outbound';

  let visible;
  const {
    outboundDatePicker,
    inboundDatePicker,
    inlineOutboundDatePicker,
    inlineInboundDatePicker,
  } = state.display;

  if (type === 'outbound') visible = outboundDatePicker;
  if (type === 'inbound') visible = inboundDatePicker;
  else if (type === 'inline-outbound') visible = inlineOutboundDatePicker;
  else visible = inlineInboundDatePicker;

  return {
    tripType: state.datepicker.tripType,
    outboundDate: state.datepicker.outboundDate,
    inboundDate: state.datepicker.inboundDate,
    selectedDate: isOutbound
      ? state.datepicker.outboundDate
      : state.datepicker.inboundDate,
    visible,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { type } = ownProps;

  let modalType;
  if (type === 'outbound') modalType = 'outboundDatePicker';
  else if (type === 'inbound') modalType = 'inboundDatePicker';
  else if (type === 'inline-outbound') modalType = 'inline-outboundDatePicker';
  else modalType = 'inline-inboundDatePicker';

  return {
    displayModal: () => {
      dispatch(displayModal(modalType));
    },
    hideModal: () => {
      dispatch(hideModal());
    },
    setOutboundDate: outboundDate => {
      dispatch(setOutboundDate(outboundDate));
    },
    setInboundDate: inboundDate => {
      dispatch(setInboundDate(inboundDate));
    },
    setRoundTrip: () => {
      dispatch(setRoundTrip());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
