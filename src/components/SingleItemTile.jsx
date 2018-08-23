import React from 'react';
import VariantsBox from './VariantsBox'
import { connect } from 'react-redux';

const checkCategoryFilter = (productCategoriesArray, appliedCategoryFiltersArray) => {
	let shouldProductBeDisplayed = false;
	productCategoriesArray.map(category => { 
		if (
			appliedCategoryFiltersArray.includes(category) || 
			appliedCategoryFiltersArray.length === 0
		) {
			shouldProductBeDisplayed = true;
		}
	})
	return shouldProductBeDisplayed;
}

const SingleItemTile = ({ name, categories, variants, filters }) => {
	console.log(checkCategoryFilter(categories, filters.Category))
	return (
		checkCategoryFilter(categories, filters.Category)
		? <div className="SingleItemTile">
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