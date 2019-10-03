import React from 'react';
import { connect } from 'react-redux';

import { BUTTON_STYLE_PRI, BUTTON_STYLE_SEC, BUTTON_STYLE_PRI_ASYNC, FONT_STYLE } from '../styles/styles';

import { add, addAsync, minus } from '../actions/calculatorActions';

const switchRender = props => {
	switch(props.method){
		case 'add':
		  return {
		  	BUTTON_STYLE: BUTTON_STYLE_PRI,
		  	clickHandler(){
		  		props.add()
		  	}
		  }
		case 'addAsync':
		  return {
		  	BUTTON_STYLE: BUTTON_STYLE_PRI_ASYNC,
		  	clickHandler(){
		  		props.addAsync()
		  	}
		  }
		case 'minus':
		  return {
		  	BUTTON_STYLE: BUTTON_STYLE_SEC,
		  	clickHandler(){
		  		props.minus()
		  	}
		  }
	}
}

const Counter = props => {
	return(
		<div>
			<button 
			onClick={switchRender(props).clickHandler}
			style={switchRender(props).BUTTON_STYLE}>{props.method}</button>
			<div style={FONT_STYLE}>{props.number}</div>
		</div>		
	)
}

const mapStateToProps = state => ({
	number: state.calculator.number
})

const mapDispatchToProps = {
	add,
	addAsync,
	minus
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


