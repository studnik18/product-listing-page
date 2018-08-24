import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleItemTile from './SingleItemTile';
import { connect } from 'react-redux';
import { getVisibleProducts } from '../redux/selectors';
import { fetchProducts } from '../redux/actions';

// Simulating fetch from array in static file

import { products } from '../data/productsData';

class ProductsList extends Component {

	componentDidMount() {
		this.props.fetchProducts(products);
	}

	render() {
		const { visibleProducts } = this.props;
		return (
			<div className="ProductsList">
				{
					visibleProducts.map(product => (
						<SingleItemTile
							key={product.id}
							name={product.name}
							variants={product.variants}
						/>
					))
				}
			</div>
		)
	}
}

ProductsList.propTypes = {
	fetchProducts: PropTypes.func.isRequired,
	visibleProducts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
	visibleProducts: getVisibleProducts(state)
});

const mapDispatchToProps = dispatch => ({
	fetchProducts: products => {
		dispatch(fetchProducts(products))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
