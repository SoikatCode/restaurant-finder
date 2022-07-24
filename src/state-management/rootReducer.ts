import { combineReducers } from 'redux';
import globalReducer from './global/globalReducer';
import reduceReducers from 'reduce-reducers';
const combinedReducers = combineReducers({
  global: globalReducer,
});

/**
 * here state is full redux state
 * @param state
 * @param action
 */
function crossStateReducer(state: any, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = reduceReducers(combinedReducers, crossStateReducer);

export default rootReducer;