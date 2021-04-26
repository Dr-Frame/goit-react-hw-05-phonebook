import React from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
/* 
import styles from './Filter.module.css'; */

const Filter = ({ filter, changeFilter }) => {
  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
      ></input>
      <br />
      Find contacts by name
    </label>
  );
};

const mapStateToProps = state => ({
  filter: state.contact.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e =>
    dispatch(contactActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
