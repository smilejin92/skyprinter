// ACTIONS
export const SET_INBOUND_DATE = 'skyprinter/datepicker/SET_INBOUND_DATE';
export const SET_OUTBOUND_DATE = 'skyprinter/datepicker/SET_OUTBOUND_DATE';
export const SET_ONEWAY_TRIP = 'skyprinter/datepicker/SET_ONEWAY_TRIP';
export const SET_ROUND_TRIP = 'skyprinter/datepicker/SET_ROUND_TRIP';

// ACTION CREATORS
export const setInboundDate = inboundDate => ({
  type: SET_INBOUND_DATE,
  inboundDate,
});

export const setOutboundDate = outboundDate => ({
  type: SET_OUTBOUND_DATE,
  outboundDate,
});

export const setOnewayTrip = () => ({
  type: SET_ONEWAY_TRIP,
});

export const setRoundTrip = () => ({
  type: SET_ROUND_TRIP,
});

// INITIAL STATE
const initialState = {
  tripType: 'round',
  inboundDate: new Date(),
  outboundDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  prevOutboundDate: null,
};

// REDUCER
export default function datepicker(state = initialState, action) {
  switch (action.type) {
    case SET_INBOUND_DATE:
      return {
        ...state,
        inboundDate: action.inboundDate,
      };

    case SET_OUTBOUND_DATE:
      return {
        ...state,
        outboundDate: action.outboundDate,
        prevOutboundDate: state.outboundDate,
      };

    case SET_ONEWAY_TRIP:
      return {
        ...state,
        tripType: 'oneway',
        outboundDate: '',
        prevOutboundDate: state.outboundDate,
      };

    case SET_ROUND_TRIP:
      const outboundDate =
        state.inboundDate <= state.prevOutboundDate
          ? state.prevOutboundDate
          : state.inboundDate;

      return {
        ...state,
        tripType: 'round',
        outboundDate,
        prevOutboundDate: state.outboundDate,
      };

    default:
      return state;
  }
}
