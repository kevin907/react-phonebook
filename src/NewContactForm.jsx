var React = require('react');
var eb = require('./eventbus.js');

var FormInput = React.createClass({
  render: function() {
    return (
      <input ref="fieldValue" type={this.props.type} name={this.props.id} id={this.props.id}/>
    );
  }
});

module.exports  = React.createClass({
  render: function() {
    return (
      <div>
        <div className="control-group column-group">
            <label htmlFor="first-name" className="all-20">First name</label>
            <div className="control all-80">
                <FormInput type="text" id="firstname"/>
            </div>
        </div>
        <div className="control-group column-group">
            <label htmlFor="first-name" className="all-20">Last name</label>
            <div className="control all-80">
                <FormInput type="text" id="lastname"/>
            </div>
        </div>
        <div className="control-group column-group">
            <label htmlFor="phone" className="all-20">Phone</label>
            <div className="control all-80">
                <FormInput type="text" id="phone"/>
            </div>
        </div>
        <button className="ink-button push-right">Add</button>
      </div>
    );
  }
});
