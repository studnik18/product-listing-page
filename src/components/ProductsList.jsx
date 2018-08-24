import React, { Component } from 'react';
import SingleItemTile from './SingleItemTile';
import { connect } from 'react-redux';
import { getVisibleProducts } from '../redux/selectors';
import { products } from '../data/productsData';
import { fetchProducts } from '../redux/actions';



class ProductsList extends Component {

	componentDidMount() {
		this.props.fetchProducts(products)
	}

	render() {
		const { visibleProducts } = this.props;
		console.log(fetchProducts(products))
		return (
			<div className="ProductsList">
				{
					visibleProducts.map(product => (
						<SingleItemTile
							key={product.id}
							name={product.name}
							img={product.img}
							categories={product.categories}
							variants={product.variants}
						/>
					))
				}
			</div>
		)
	}
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
