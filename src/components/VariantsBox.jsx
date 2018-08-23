import React from 'react';

const VariantsBox = ({ variants }) => (
	<div>
		{
			variants.map(variant => 
				<p>{variant.color}</p>
			)
		}
	</div>
);

export default VariantsBox;