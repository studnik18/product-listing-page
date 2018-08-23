import { handleFilters } from '../../../redux/reducers/handleFilters';
import * as actionTypes from '../../../redux/constants/actionTypes';

describe('handleFilters reducer test suite', () => {
  it('Should return initial state', () => {
    expect(handleFilters(undefined, {})).toEqual({
      filters: {
        Category: [],
        Color: []
      }
    })
  })

  it('Should add filter to respective category', () => {
    const state = {
      filters: {
        Category: [
          "Trekking",
          "Mountain",
          "City"
        ],
        Color: [
          "Blue",
          "Yellow",
          "Black"
        ]
      }
    };
    const action = {
      type: actionTypes.ADD_FILTER,
      filterName: "Road",
      filterType: "Category"
    };
    const actual = handleFilters(state, action);
    const expected = {
      filters: {
        Category: [
          "Trekking",
          "Mountain",
          "City",
          "Road"
        ],
        Color: [
          "Blue",
          "Yellow",
          "Black"
        ]
      }
    };
    expect(actual).toEqual(expected);
  })

  it('Should remove filter from respective category', () => {
    const state = {
      filters: {
        Category: [
          "Trekking",
          "Mountain"
        ],
        Color: [
          "Blue",
          "Black"
        ]
      }
    };
    const action = {
      type: actionTypes.REMOVE_FILTER,
      filterName: "Black",
      filterType: "Color"
    };
    const actual = handleFilters(state, action);
    const expected = {
      filters: {
        Category: [
          "Trekking",
          "Mountain",
        ],
        Color: [
          "Blue"
        ]
      }
    };
    expect(actual).toEqual(expected);
  })
});

