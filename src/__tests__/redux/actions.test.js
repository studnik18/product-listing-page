import * as actionTypes from '../../redux/constants/actionTypes';
import * as actions from '../../redux/actions/';

describe('Actions test suite', () => {
  it('Should create action for adding filter in certain category', () => {
    const filterName = "City";
    const filterType = "Category";
    const actual = actions.addFilter(filterName, filterType);
    const expected = {
      type: actionTypes.ADD_FILTER,
      filterName,
      filterType
    };
    expect(actual).toEqual(expected);
  });
  it('Should create action for removing filter in certain category', () => {
    const filterName = "City";
    const filterType = "Category";
    const actual = actions.removeFilter(filterName, filterType);
    const expected = {
      type: actionTypes.REMOVE_FILTER,
      filterName,
      filterType
    };
    expect(actual).toEqual(expected);
  });
})
