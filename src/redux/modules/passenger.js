//Action
const SET_CABIN_CLASS = 'SET_CABIN_CLASS';
const SET_ADULTS = 'SET_ADULTS';
const SET_CHILDREN = 'SET_CHILDREN';
const SET_CHILD_AGE = 'SET_CHILD_AGE';

//Action creater

export const setCabinClass = cabinClass => ({
  type: SET_CABIN_CLASS,
  cabinClass,
});
export const setAdults = mode => ({ type: SET_ADULTS, mode });
export const setChildren = mode => ({ type: SET_CHILDREN, mode });
export const setChildAge = (id, age) => ({ type: SET_CHILD_AGE, id, age });

//initalState
const intialState = {
  cabinClass: 'economy',
  adults: 1,
  children: [],
};

//reducer
export default function passenger(state = intialState, action) {
  switch (action.type) {
    case SET_CABIN_CLASS:
      return {
        ...state,
        cabinClass: action.cabinClass,
      };
    case SET_ADULTS:
      if (action.mode === 'add')
        return {
          ...state,
          adults: state.adults + 1,
        };
      if (action.mode === 'subtract')
        return {
          ...state,
          adults: state.adults - 1,
        };
      break;
    case SET_CHILDREN:
      if (action.mode === 'add') {
        const getNextId = () =>
          Math.max(0, ...state.children.map(c => c.id)) + 1;
        return {
          ...state,
          children: [
            ...state.children,
            { id: getNextId(), age: '나이를 선택하세요', type: undefined },
          ],
        };
      }
      if (action.mode === 'remove') {
        const newChildren = [...state.children];
        newChildren.pop();
        return {
          ...state,
          children: newChildren,
        };
      }
      break;
    case SET_CHILD_AGE:
      if (action.age === '0' || action.age === '1') {
        const newChildren = state.children.map(c =>
          c.id === action.id ? { ...c, type: 'infant', age: action.age } : c,
        );
        return {
          ...state,
          children: newChildren,
        };
      } else {
        const newChildren = state.children.map(c =>
          c.id === action.id ? { ...c, type: 'child', age: action.age } : c,
        );
        return {
          ...state,
          children: newChildren,
        };
      }
    default:
      return state;
  }
}
