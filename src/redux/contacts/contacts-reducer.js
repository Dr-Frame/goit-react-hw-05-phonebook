import { combineReducers } from 'redux';
import actionType from './contacts-types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case actionType.ADD:
      return [...state, payload];

    case actionType.DELETE:
      return [state.filter(contact => contact.id !== payload)];

    case actionType.ADD_STATE_PROPERY:
      return [{ [payload.name]: payload.value }];

    default:
      return state;
  }
};

const filter = (state, action) => state;

export default combineReducers({
  contacts,
  filter,
});
