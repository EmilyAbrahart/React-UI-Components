import React from 'react';
import './Button.css';

function NumberButton(props) {
	const { text, btnColor } = props;
	return (
	<button style={btnColor} className="numButton">{text}</button>
	);
}

export default NumberButton;
