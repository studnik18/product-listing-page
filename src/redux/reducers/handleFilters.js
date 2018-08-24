import * as actionTypes from '../constants/actionTypes';
import { products } from '../../data/productsData';

const initialState = { filters: { Category: [], Color: [] }, products};

export const handleFilters = ( state = initialState, action ) => {
	switch(action.type) {
		case actionTypes.ADD_FILTER :
			return {
				...state,
				filters: {
					...state.filters,
					[action.filterType]: [
						...state.filters[action.filterType], action.filterName
					]
				}
			};
		case actionTypes.REMOVE_FILTER :
			const removedFilterIndex = state.filters[action.filterType].indexOf(action.filterName);
			return {
				...state,
				filters: {
					...state.filters,
					[action.filterType]: [
						...state.filters[action.filterType].slice(0, removedFilterIndex),
						...state.filters[action.filterType].slice(removedFilterIndex + 1)
					]
				}
			};
		default :
			return state;
	}
}
