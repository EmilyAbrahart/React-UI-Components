import React from 'react';
import './Display.css';

function Display({ calc }) {
	return <div className="calcDisplay"> {calc || 0}</div>
}

export default Display;
