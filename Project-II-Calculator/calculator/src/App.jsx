import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const opArr = ['÷', 'x', '-', '+', '='];

const App = () => {
	return (
		<div className="app">
			<Display result="0" />

			<div className="buttons">
				<div className="keypadButtons">
					<ActionButton btnClass="clearButton" action="clear" btnColor={{ background: 'white' }} />

					<div className="keypadNumButtons">
						{numArr.map(number => (
							<NumberButton text={number} btnColor={{ background: 'white' }} key={number} />
						))}
					</div>

					<ActionButton btnClass="zeroButton" action="0" btnColor={{ background: 'white' }} />
				</div>

				<div className="operatorButtons">
					{opArr.map(operator => (
						<ActionButton
							btnClass="opButton"
							action={operator}
							btnColor={{ background: 'darkred' }}
							key={operator}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
