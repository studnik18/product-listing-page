import React from 'react';
import Filter from './Filter'

const TopBar = () => (
	<div className="TopBar">
		<div className="TopBar-header">
			<p>New shopping experience!</p>
		</div>
		<div className="TopBar-filters">
			<p>Color filter</p>
			<Filter />
			<p>Category filter</p>
		</div>
	</div>
);

export default TopBar;