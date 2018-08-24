import { createSelector } from 'reselect'

const getFilters = state => state.handleFilters.filters;
const getProducts = state => state.handleProductList.products;

export const getVisibleProducts = createSelector(
  [ getFilters, getProducts ],
  (filters, products) => {

    if (filters.Category.length > 0) {
      products = products.filter(
        product => {
          let categoriesInActiveFilters = product.categories.filter(
            category => filters.Category.includes(category));
          return categoriesInActiveFilters.length > 0;
        }
      )
    }

    if (filters.Color.length > 0) {
      products = products.filter(
        product => {
          let colorsInActiveFilters = product.variants.filter(
            variant => filters.Color.includes(variant.color));
          return colorsInActiveFilters.length > 0;
        }
      )
    }
    return products
  }
);
