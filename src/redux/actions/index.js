import * as actionTypes from '../constants/actionTypes';

export const addFilter = filter => ({
	type: actionTypes.ADD_FILTER,
	filter
})

export const removeFilter = filter => ({
	type: actionTypes.REMOVE_FILTER,
	filter
})