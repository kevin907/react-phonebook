'use strict'

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="ink-form">
        <div className="control-group column-group">
          <div className="control all-100">
            <input ref="searchInput" type="text" name="filter" id="filter"/>
          </div>
        </div>
      </div>
    );
  }
});
