import React from 'react';
/* import styles from './Contacts.css'; */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';

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

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (contacList, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacList.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contact: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
