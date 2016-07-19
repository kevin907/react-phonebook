'use strict'

var React = require('react');
var ContactListing = require('./ContactListing.jsx');

var ContactTableRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.contact.lastname}, {this.props.contact.firstname}</td>
        <td>{this.props.contact.phone}</td>
      </tr>
    );
  }
});

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      contacts: []
    };
  },
  render: function() {
    return (
      <div>
        <table className="ink-table">
          <thead>
            <tr>
              <th className="align-left">Name</th>
              <th className="align-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map(function(contact, i){
              return <ContactTableRow key={i} contact={contact}/>
            })}
          </tbody>
        </table>
      </div>
    );
  }
});
