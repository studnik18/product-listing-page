export const checkColorFilter = (
		productVariantsArray, appliedColorFiltersArray
	) => {
	let shouldProductBeDisplayed = false;
	productVariantsArray.map(variant => { 
		if (
			appliedColorFiltersArray.includes(variant.color) || 
			appliedColorFiltersArray.length === 0
		) {
			shouldProductBeDisplayed = true;
		}
	})
	return shouldProductBeDisplayed;
}