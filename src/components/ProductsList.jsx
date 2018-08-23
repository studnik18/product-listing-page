import React from 'react';
import SingleItemTile from './SingleItemTile';
import { products } from '../data/productsData';

const ProductsList = () => (
	<div className="ProductsList">
		{
			products.map(product => (
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

export default ProductsList;