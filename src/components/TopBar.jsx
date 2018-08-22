import React from 'react';
import FiltersDropdown from './FiltersDropdown';
import Filter from './Filter';

const TopBar = () => (
	<div className="TopBar">
		<div className="TopBar-header">
			<p>New shopping experience!</p>
		</div>
		<div className="TopBar-filters">
			<p>Filter by:</p>
			<FiltersDropdown filteringCategory="Category">
				<Filter value="Road" />
				<Filter value="City" />
				<Filter value="Mountain" />
				<Filter value="Trekking" />
			</FiltersDropdown>
			<FiltersDropdown filteringCategory="Color">
				<Filter value="Blue" />
				<Filter value="Black" />
				<Filter value="Red" />
				<Filter value="White" />
				<Filter value="Yellow" />
			</FiltersDropdown>
		</div>
	</div>
);

export default TopBar;