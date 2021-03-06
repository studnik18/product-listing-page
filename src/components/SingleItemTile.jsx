import React, { Component } from 'react';
import SelectProductVariant from './SelectProductVariant';
import { connect } from 'react-redux';

class SingleItemTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVariant: 0,
    };
  }

  getVariants = () => {
    const { variants, filters } = this.props;
    const filteredVariants = variants.filter(variant => filters.Color.includes(variant.color));
    if (filters.Color.length > 0) {
      return filteredVariants;
    } else {
      return variants;
    }
  };

  changeActiveVariant = variant => {
    this.setState({
      activeVariant: variant,
    });
  };

  render() {
    const { name, img, categories, filters } = this.props;
    const { activeVariant } = this.state;
    const variants = this.getVariants();
    return (
      <div className="SingleItemTile">
        <div className="SingleItemTile-imageContainer">
        	{variants && variants[activeVariant] && <img className="SingleItemTile-image" src={`/product-listing-page${variants[activeVariant].img}`} />}
        </div>
        <p className="SingleItemTile-name">{name}</p>
        {variants && variants[activeVariant] && <p className="SingleItemTile-price">{variants[activeVariant].price}</p>}
        <SelectProductVariant
          variants={variants}
          handleClick={this.changeActiveVariant}
          activeVariant={activeVariant}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.handleFilters.filters,
});

export default connect(
  mapStateToProps,
  null
)(SingleItemTile);
