// ACTIONS
export const DISPLAY_MODAL = 'skyprinter/display/DISPLAY_MODAL';
export const HIDE_MODAL = 'skyprinter/display/HIDE_MODAL';

// ACTION CREATORS
export const displayModal = modal => ({ type: DISPLAY_MODAL, modal });
export const hideModal = () => ({ type: HIDE_MODAL });

// INIITIAL STATE
const initialState = {
  culture: false,
  passengerInfo: false,
  inboundDatePicker: false,
  outboundDatePicker: false,
};

// REDUCER
export default function display(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_MODAL:
      const { modal } = action;

      return {
        culture: modal === 'culture' ? true : false,
        passengerInfo: modal === 'passengerInfo' ? true : false,
        inboundDatePicker: modal === 'inboundDatePicker' ? true : false,
        outboundDatePicker: modal === 'outboundDatePicker' ? true : false,
      };

    case HIDE_MODAL:
      return {
        culture: false,
        passengerInfo: false,
        inboundDatePicker: false,
        outboundDatePicker: false,
      };

    default:
      return state;
  }
}
