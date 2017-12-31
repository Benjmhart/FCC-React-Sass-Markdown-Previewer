import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MdInput extends Component  {
	constructor(props) {
		super(props);
		this.presto = this.presto.bind(this);
	}
	presto () { 
		this.props.chango(this.text.value);
	}
	render() {
		return (<textarea ref={ (textarea)=> this.text = textarea } 
		className="md-input" value={this.props.content.join('\n')} onChange={this.presto} ></textarea>);
	}
}

MdInput.propTypes = {
	content: PropTypes.array.isRequired, 
	chango: PropTypes.func.isRequired
}
export default MdInput;