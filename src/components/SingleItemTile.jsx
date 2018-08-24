import React from 'react';
import VariantsBox from './VariantsBox'
import { connect } from 'react-redux';

const SingleItemTile = ({ name, img, categories, variants, filters }) => {
	return (
		<div className="SingleItemTile">
			<img />
			<p>{name}</p>
			<VariantsBox variants={variants} />
		</div>
	)
};

const mapStateToProps = state => ({
	filters: state.handleFilters.filters
});

export default connect(mapStateToProps, null)(SingleItemTile);
