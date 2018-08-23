import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Popover from '@material-ui/core/Popover';

class FiltersDropdown extends Component {

	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null
		};
	}

  handleClick = event => {
  	this.setState({
  		anchorEl: event.currentTarget
  	})
  };

  handleClose = () => {
  	this.setState({
  		anchorEl: null
  	})
  }

	render() {
		const { anchorEl } = this.state;
		const { filteringCategory, children } = this.props;
		const open = Boolean(anchorEl);
		return (
			<Fragment>
				<button onClick={this.handleClick}>
					{filteringCategory}
				</button>
				<Popover 
					open={open}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					onClose={this.handleClose}
				>

					{children}

				</Popover>
			</Fragment>
		)
	}
}

FiltersDropdown.propTypes = {
	filteringCategory: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default FiltersDropdown;