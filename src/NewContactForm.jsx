var React = require('react');
var eb = require('./eventbus.js');

var FormInput = React.createClass({
  fireChangeEvent: function() {
    eb.publish('UPDATE_FORM_FIELD', this.props.id, this.refs.fieldValue.value);
  },
  render: function() {
    return (
      <input ref="fieldValue"
        value={this.props.value}
        type={this.props.type}
        name={this.props.id}
        id={this.props.id}
        onChange={this.fireChangeEvent}/>
    );
  }
});

module.exports  = React.createClass({
  commitForm: function() {
    eb.publish('COMMIT_FORM');
  },
  render: function() {
    return (
      <div>
        <div className="control-group column-group">
            <label htmlFor="first-name" className="all-20">First name</label>
            <div className="control all-80">
                <FormInput type="text" id="firstname" value={this.props.data.firstname}/>
            </div>
        </div>
        <div className="control-group column-group">
            <label htmlFor="first-name" className="all-20">Last name</label>
            <div className="control all-80">
                <FormInput type="text" id="lastname" value={this.props.data.lastname}/>
            </div>
        </div>
        <div className="control-group column-group">
            <label htmlFor="phone" className="all-20">Phone</label>
            <div className="control all-80">
                <FormInput type="text" id="phone" value={this.props.data.phone}/>
            </div>
        </div>
        <button className="ink-button push-right" onClick={this.commitForm}>Add</button>
      </div>
    );
  }
});
