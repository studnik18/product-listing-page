import { combineReducers } from 'redux';
import { handleFilters } from './handleFilters';
import { handleProductList } from './handleProductList';

export const rootReducer = combineReducers({
	handleFilters,
  handleProductList
});

export default rootReducer;
