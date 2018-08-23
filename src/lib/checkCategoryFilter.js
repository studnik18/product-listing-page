export const checkCategoryFilter = (
		productCategoriesArray, appliedCategoryFiltersArray
	) => {
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