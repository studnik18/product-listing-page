import React from 'react';
import SingleItemTile from './SingleItemTile';
import { connect } from 'react-redux';
import { getVisibleProducts } from '../redux/selectors';
import { products } from '../data/productsData';



const ProductsList = ({ visibleProducts }) => (
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

const mapStateToProps = state => ({
	visibleProducts: getVisibleProducts(state)
})

export default connect(mapStateToProps, null)(ProductsList);
