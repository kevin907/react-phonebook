'use strict'

var React = require('react');
var eb = require('./eventbus.js');

module.exports = React.createClass({
  filterChange: function() {
    eb.publish('UPDATE_FILTER', this.refs.searchInput.value);
  },
  render: function() {
    return (
      <div className="ink-form">
        <div className="control-group column-group">
          <div className="control all-100">
            <input ref="searchInput" value={this.props.value} type="text" name="filter" id="filter" onChange={this.filterChange}/>
          </div>
        </div>
      </div>
    );
  }
});
