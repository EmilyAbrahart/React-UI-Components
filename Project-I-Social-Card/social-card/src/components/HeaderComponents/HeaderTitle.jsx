/* eslint-disable react/prop-types */
import React from 'react';
import './Header.css';

function HeaderTitle({ name, handle, date }) {
  return (
    <p>
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
      <span className="date">{date}</span>
    </p>
  );
}

// const headerTitle = <HeaderTitle name="Lambda School" handle="@lambdaschool" />;

export default HeaderTitle;