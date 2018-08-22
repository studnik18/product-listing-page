import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFilter, removeFilter } from '../redux/actions';

const Filter = props => {
	const { addFilter, removeFilter } = props;
	return (
		<div>
			Filter
			<input type="checkbox" onClick={(e) => {
				e.target.checked ? addFilter('Filter') : removeFilter("Filter")
			}}/>
		</div>		
	)
}

Filter.propTypes = {
	addFilter: PropTypes.func.isRequired,
	removeFilter: PropTypes.func.isRequired
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