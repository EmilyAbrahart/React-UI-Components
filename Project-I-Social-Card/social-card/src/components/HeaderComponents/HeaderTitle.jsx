/* eslint-disable react/prop-types */
import React from 'react';
import './Header.css';
import moment from 'moment';

function HeaderTitle({ name, handle }) {
  const date = moment().format('Do MMMM');
  return (
    <div className="headerTitle">
      <div className="name">{name}</div>
      <div className="handle">{handle}</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default HeaderTitle;
