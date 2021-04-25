import actionType from './contacts-types';

const addContact = contact => ({
  type: actionType.ADD,
  payload: contact,
});

const deleteContact = contactId => ({
  type: actionType.DELETE,
  payload: contactId,
});

const addStatePropery = (name, value) => ({
  type: actionType.ADD_STATE_PROPERY,
  payload: [name, value],
});

export default { addContact, deleteContact, addStatePropery };
