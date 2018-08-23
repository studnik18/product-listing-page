import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFilter, removeFilter } from '../redux/actions';

const Filter = props => {
	const { addFilter, removeFilter, value, filterType } = props;
	return (
		<div>
			{value}
			<input type="checkbox" onClick={(e) => {
				e.target.checked ? addFilter(value, filterType) : removeFilter(value, filterType)
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
	addFilter: (filterName, filterType) => {
		dispatch(addFilter(filterName, filterType))
	},
	removeFilter: (filterName, filterType) => {
		dispatch(removeFilter(filterName, filterType))
	},
})

export default connect(null, mapDispatchToProps)(Filter);
