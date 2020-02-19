// ACTIONS
export const SET_INBOUND_DATE = 'SET_INBOUND_DATE';
export const SET_OUTBOUND_DATE = 'SET_OUTBOUND_DATE';

// ACTION CREATORS
export const setInboundDate = inboundDate => ({
  type: SET_INBOUND_DATE,
  inboundDate,
});

export const setOutboundDate = outboundDate => ({
  type: SET_OUTBOUND_DATE,
  outboundDate,
});

// INITIAL STATE
const initialState = {
  inboundDate: new Date(),
  outboundDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
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
      };

    default:
      return state;
  }
}
