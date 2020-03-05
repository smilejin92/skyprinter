// ACTIONS
export const SET_OUTBOUND_DATE = 'skyprinter/datepicker/SET_OUTBOUND_DATE';
export const SET_INBOUND_DATE = 'skyprinter/datepicker/SET_INBOUND_DATE';
export const SET_ONEWAY_TRIP = 'skyprinter/datepicker/SET_ONEWAY_TRIP';
export const SET_ROUND_TRIP = 'skyprinter/datepicker/SET_ROUND_TRIP';
export const RESET_DATE = 'skyprinter/datepicker/RESET_DATE';
export const INITIALIZE_DATE = 'skyprinter/datepicker/INITIALIZE_DATE';

// ACTION CREATORS
export const initializeDate = () => ({
  type: INITIALIZE_DATE
});

export const resetDate = ({
  tripType,
  outboundDate,
  inboundDate,
  prevInboundDate
}) => ({
  type: RESET_DATE,
  tripType,
  outboundDate,
  inboundDate,
  prevInboundDate
});

export const setOutboundDate = outboundDate => ({
  type: SET_OUTBOUND_DATE,
  outboundDate
});

export const setInboundDate = inboundDate => ({
  type: SET_INBOUND_DATE,
  inboundDate
});

export const setOnewayTrip = () => ({
  type: SET_ONEWAY_TRIP
});

export const setRoundTrip = () => ({
  type: SET_ROUND_TRIP
});

// INITIAL STATE
const initialState = {
  tripType: 'round',
  outboundDate: new Date(),
  inboundDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  prevInboundDate: null
};

// REDUCER
export default function datepicker(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_DATE:
      return initialState;

    case RESET_DATE:
      return {
        tripType: action.tripType,
        outboundDate: action.outboundDate,
        inboundDate: action.inboundDate,
        prevInboundDate: action.prevInboundDate
      };

    case SET_OUTBOUND_DATE:
      return {
        ...state,
        outboundDate: action.outboundDate
      };

    case SET_INBOUND_DATE:
      return {
        ...state,
        inboundDate: action.inboundDate,
        prevInboundDate: state.inboundDate
      };

    case SET_ONEWAY_TRIP:
      return {
        ...state,
        tripType: 'oneway',
        inboundDate: '',
        prevInboundDate: state.inboundDate
      };

    case SET_ROUND_TRIP:
      const inboundDate =
        state.outboundDate <= state.prevInboundDate
          ? state.prevInboundDate
          : state.outboundDate;

      return {
        ...state,
        tripType: 'round',
        inboundDate,
        prevInboundDate: state.inboundDate
      };

    default:
      return state;
  }
}
