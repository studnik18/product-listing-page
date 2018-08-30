import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Popover from '@material-ui/core/Popover';

class FiltersDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { filterType, children } = this.props;
    const open = Boolean(anchorEl);
    return (
      <Fragment>
        <div className="FiltersDropdown">
          <button className="FiltersDropdown-openButton" onClick={this.handleClick}>
            {filterType}
          </button>
        </div>
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          onClose={this.handleClose}
          classes={{
            paper: 'FiltersDropdown-Popover',
          }}
        >
          {React.Children.map(children, child => React.cloneElement(child, { filterType }))}
        </Popover>
      </Fragment>
    );
  }
}

FiltersDropdown.propTypes = {
  filterType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FiltersDropdown;
