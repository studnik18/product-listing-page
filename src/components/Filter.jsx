import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFilter, removeFilter } from '../redux/actions';

const Filter = props => {
	const { addFilter, removeFilter, value } = props;
	return (
		<div>
			{value}
			<input type="checkbox" onClick={(e) => {
				e.target.checked ? addFilter(value) : removeFilter(value)
			}}/>
		</div>		
	)
}

Filter.propTypes = {
	addFilter: PropTypes.func.isRequired,
	removeFilter: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
	addFilter: filter => {
		dispatch(addFilter(filter))
	},
	removeFilter: filter => {
		dispatch(removeFilter(filter))
	},
})

export default connect(null, mapDispatchToProps)(Filter);