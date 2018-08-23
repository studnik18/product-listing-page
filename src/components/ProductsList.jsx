import React from 'react';
import { products } from '../data/productsData';

const ProductsList = () => (
	<div className="ProductsList">
		{
			products.map(product => (
				<div key={product.id}>
					{product.name}
				</div>
			))
		}
	</div>
)

export default ProductsList;