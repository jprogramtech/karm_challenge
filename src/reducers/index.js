import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ItemReducer from './item_reducer';

const rootReducer = combineReducers({
  items: ItemReducer,
  form:formReducer
});

export default rootReducer;
