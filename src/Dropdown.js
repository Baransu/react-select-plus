import PropTypes from 'prop-types';
import React from 'react';

const Dropdown = React.createClass({
  propTypes: {
    children: PropTypes.node,
  },
  render () {
    // This component adds no markup
    return this.props.children;
  }
});

module.exports = Dropdown;
