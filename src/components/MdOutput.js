import React from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';
//insert {marked(value)} after initial test
const MdOutput = (props) => {

	const markAll = (values) => {
		return values.map(val => marked(val)).join('');
	}

	const mark = (values) => (values.length !== 0) ? markAll(values) : '<p> Write some things!</p>'

	return(
		<div className="md-output" dangerouslySetInnerHTML={{__html: mark(props.values)}}>
			
		</div>
	)
}

MdOutput.propTypes = {
	values: PropTypes.array.isRequired
}

export default MdOutput;