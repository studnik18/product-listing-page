import React, { Component } from 'react';

class FiltersDropdown extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

	render() {
		return (
			<div>
				dropdown
			</div>
		)
	}
}

export default FiltersDropdown;