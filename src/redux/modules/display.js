// ACTIONS
export const DISPLAY_MODAL = 'skyprinter/display/DISPLAY_MODAL';
export const HIDE_MODAL = 'skyprinter/display/HIDE_MODAL';

// ACTION CREATORS
export const displayModal = modal => ({ type: DISPLAY_MODAL, modal });
export const hideModal = () => ({ type: HIDE_MODAL });

// INIITIAL STATE
const initialState = {
  onScreen: false,
  culture: false,
  passengerInfo: false,
  outboundDatePicker: false,
  inboundDatePicker: false,
  inlineOutboundDatePicker: false,
  inlineInboundDatePicker: false,
};

// REDUCER
export default function display(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_MODAL:
      const { modal } = action;

      return {
        onScreen: true,
        culture: modal === 'culture',
        passengerInfo: modal === 'passengerInfo',
        outboundDatePicker: modal === 'outboundDatePicker',
        inboundDatePicker: modal === 'inboundDatePicker',
        inlineOutboundDatePicker: modal === 'inline-outboundDatePicker',
        inlineInboundDatePicker: modal === 'inline-inboundDatePicker',
      };

    case HIDE_MODAL:
      return {
        onScreen: false,
        culture: false,
        passengerInfo: false,
        outboundDatePicker: false,
        inboundDatePicker: false,
        inlineOutboundDatePicker: false,
        inlineInboundDatePicker: false,
      };

    default:
      return state;
  }
}
