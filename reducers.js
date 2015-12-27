import { combineReducers } from 'redux';
import { ADD_ITEM, OF, EQUAL, CLEAR, OLDER, YOUNGER, BACK } from './actions';

import data from './data';

function relativeCalc (state = { process: ['我'], result: ['我'] }, action) {
  switch (action.type) {
    case ADD_ITEM:
      state.process.push(action.item.value);
      state.result.push(data[state.result[state.result.length - 1]][action.item.value]);
      return { process: state.process, result: state.result };

    case CLEAR:
      return { process: ['我'], result: ['我'] };

    case OLDER:
      var newReuslt = state.result[state.result.length - 1]['older'];
      state.process.push(newReuslt);
      state.result.push(newReuslt);
      return { process: state.process, result: state.result };


    case YOUNGER:
      var newReuslt = state.result[state.result.length - 1]['older'];
      state.process.push(newReuslt);
      state.result.push(newReuslt);
      return { process: state.process, result: state.result };

    case EQUAL:
      return state;

    case BACK:
      if (state.process.length === 1) {
        return { process: ['我'], result: ['我'] };
      }
      state.process.pop();
      state.result.pop();
      return { process: state.process, result: state.result };

    default:
      return state;
  }
};



const relative = combineReducers({
  relativeCalc
});

export default relative;
