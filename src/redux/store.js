import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
