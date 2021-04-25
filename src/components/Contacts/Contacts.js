import React from 'react';
import styles from './Contacts.css';
import { v4 as uuidv4 } from 'uuid';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" onClick={() => deleteContact(id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
