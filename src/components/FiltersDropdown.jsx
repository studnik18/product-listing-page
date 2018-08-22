import React, { Component, Fragment } from 'react';
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
		const open = Boolean(anchorEl);
		return (
			<Fragment>
				<button onClick={this.handleClick}>
					Filters
				</button>
				<Popover 
					open={open}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'bottom'
					}}
					onClose={this.handleClose}
				>

						<Filter />

				</Popover>
			</Fragment>
		)
	}
}

export default FiltersDropdown;