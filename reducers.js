import { combineReducers } from 'redux';
import { ADD_ITEM, OF, EQUAL, CLEAR } from './actions';

import data from './data';

function relativeCalc (state = { process: ['我'], result: '我' }, action) {
  switch (action.type) {
    case ADD_ITEM:
      state.process.push(action.item.value);
      var newReuslt = data[state.result][action.item.key];
      return { process: state.process, result: newReuslt };

    case CLEAR:
      return { process: ['我'], result: '我' };

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
      return state;
  }
};



const relative = combineReducers({
  relativeCalc
});

export default relative;
