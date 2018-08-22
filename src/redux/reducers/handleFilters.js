import * as actionTypes from '../constants/actionTypes';

const initialState = { filters: [] };

export const handleFilters = ( state = initialState, action ) => {
	switch(action.type) {
		case actionTypes.ADD_FILTER :
			return { 
				...state, 
				filters: [
					...state.filters, action.filter
				] 
			};
		case actionTypes.REMOVE_FILTER :
			const removedFilterIndex = state.filters.find(filter =>
				filter === action.filter
			).indexOf(action.filter)
			return {
				...state,
				filters: [
					...state.filters.slice(0, removedFilterIndex),
					...state.filters.slice(removedFilterIndex + 1)
				]
			}
		default :
			return state;
	}
}