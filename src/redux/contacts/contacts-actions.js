import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const ADD = 'contacts/add';
const DELETE = 'contacts/delete';
const CHANGE_FILTER = 'contacts/filter';

const addContact = createAction(ADD, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction(DELETE);

const changeFilter = createAction(CHANGE_FILTER);

export default { addContact, deleteContact, changeFilter };
