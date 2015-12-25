import { combineReducers } from 'redux';
import { ADD_ITEM, OF, EQUAL } from './actions';

function relativeCalc (state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.item
      ]

    // case OF:
    //   return [
    //     ...state,
    //     item
    //   ]
    //
    // case EQUAL:
    //   return [
    //     ...state,
    //     item
    //   ]

    default:
      return state
  }
};

const relative = combineReducers({
  relativeCalc
});

export default relative;
