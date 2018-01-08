'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Dropdown = _react2['default'].createClass({
  displayName: 'Dropdown',

  propTypes: {
    children: _propTypes2['default'].node
  },
  render: function render() {
    // This component adds no markup
    return this.props.children;
  }
});

module.exports = Dropdown;