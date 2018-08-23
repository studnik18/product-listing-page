import { combineReducers } from 'redux';
import { handleFilters } from './handleFilters';

export const rootReducer = combineReducers({
	handleFilters,
});

export default rootReducer;