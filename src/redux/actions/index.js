import * as actionTypes from '../constants/actionTypes';

export const addFilter = (filterName, filterType) => ({
	type: actionTypes.ADD_FILTER,
	filterName,
  filterType
})

export const removeFilter = (filterName, filterType) => ({
	type: actionTypes.REMOVE_FILTER,
	filterName,
  filterType
})
