'use strict'

var React = require('react');


module.exports  = React.createClass({
  render: function() {
    return (
      <div>This phone book has <span className="ink-badge blue">{this.props.contactCount}</span> contacts</div>
      );
  }
});
