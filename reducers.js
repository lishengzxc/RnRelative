import { combineReducers } from 'redux';
import { ADD_ITEM, OF, EQUAL, CLEAR, OLDER, YOUNGER } from './actions';

import data from './data';

function relativeCalc (state = { process: ['我'], result: '我' }, action) {
  switch (action.type) {
    case ADD_ITEM:
      state.process.push(action.item.value);
      var newReuslt = data[state.result][action.item.key];
      return { process: state.process, result: newReuslt };

    case CLEAR:
      return { process: ['我'], result: '我' };

    case OLDER:
      var newReuslt = state.result.older;
      state.process.push(newReuslt);
      return { process: state.process, result: newReuslt };


    case YOUNGER:
      var newReuslt = state.result.younger;
      state.process.push(newReuslt);
      return { process: state.process, result: newReuslt };

    case EQUAL:
      return state;

    default:
      return state;
  }
};



const relative = combineReducers({
  relativeCalc
});

export default relative;
