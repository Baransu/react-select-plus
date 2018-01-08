import PropTypes from 'prop-types';
import React from 'react';

import createReactClass from 'create-react-class';

const Dropdown = createReactClass({
	propTypes: {
		children: PropTypes.node
	},
	render() {
		// This component adds no markup
		return this.props.children;
	}
});

module.exports = Dropdown;
