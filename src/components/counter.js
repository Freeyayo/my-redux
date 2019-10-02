import React from 'react';
import { connect } from 'react-redux';

import { BUTTON_STYLE,FONT_STYLE } from '../styles/styles';

const Counter = props => {
	return(
		<div>
			<button 
			onClick={addHandler.bind(this,props)}
			style={BUTTON_STYLE}>add</button>
			<div style={FONT_STYLE}>{props.number}</div>
		</div>		
	)
}

const addHandler = props => {
	props.dispatch({type:"ADD"})
}

const mapStateToProps = state => ({
	number: state.calculator.number
})

export default connect(mapStateToProps)(Counter);