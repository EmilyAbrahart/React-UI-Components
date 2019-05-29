import React from 'react';
import './Button.css';

function ActionButton(props) {
  const { action, btnColor, btnClass } = props;
  return (
    <button className={btnClass} style={btnColor}>{action}</button>
  );
}

export default ActionButton;