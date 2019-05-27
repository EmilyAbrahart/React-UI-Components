/* eslint-disable react/prop-types */
import React from 'react';
import './Header.css';

function HeaderTitle({ name, handle, date }) {
  return (
    <div className="headerTitle">
      <div className="name">{name}</div>
      <div className="handle">{handle}</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default HeaderTitle;
