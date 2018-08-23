import React from 'react';
import VariantsBox from './VariantsBox'
import { checkCategoryFilter } from '../lib/checkCategoryFilter';
import { checkColorFilter } from '../lib/checkColorFilter';
import { connect } from 'react-redux';

const SingleItemTile = ({ name, img, categories, variants, filters }) => {
	return (
		checkCategoryFilter(categories, filters.Category) && 
		checkColorFilter(variants, filters.Color)
		? <div className="SingleItemTile">
				<img />
				<p>{name}</p>
				<VariantsBox variants={variants} />
			</div>
		: null
	)
};

const mapStateToProps = state => ({
	filters: state.handleFilters.filters
});

export default connect(mapStateToProps, null)(SingleItemTile);