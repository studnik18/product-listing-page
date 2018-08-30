import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFilter, removeFilter } from '../redux/actions';

const Filter = props => {
	const { addFilter, removeFilter, value, filterType, filters } = props;
	const concatenatedFilters = [...filters.Category, ...filters.Color];
	return (
		<div>
			{value}
			<input
				type="checkbox"
				checked={concatenatedFilters.includes(value)}
				onChange={e => {
					e.target.checked
					? addFilter(value, filterType)
					: removeFilter(value, filterType)
				}}
			/>
		</div>
	)
}

Filter.propTypes = {
	addFilter: PropTypes.func.isRequired,
	removeFilter: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
	filters: state.handleFilters.filters
})

const mapDispatchToProps = dispatch => ({
	addFilter: (filterName, filterType) => {
		dispatch(addFilter(filterName, filterType))
	},
	removeFilter: (filterName, filterType) => {
		dispatch(removeFilter(filterName, filterType))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
