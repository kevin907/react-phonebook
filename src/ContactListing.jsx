'use strict'

var React = require('react');
var ContactListing = require('./ContactListing.jsx');
var eb = require('./eventbus.js');

var ContactTableRow = React.createClass({
  fireDelete: function() {
    eb.publish('DELETE_CONTACT', this.props.contact);
  },
  render: function() {
    return (
      <tr>
        <td>{this.props.contact.lastname}, {this.props.contact.firstname}</td>
        <td>{this.props.contact.phone}</td>
        <td><button className="ink-button red small" onClick={this.fireDelete}>Delete</button></td>
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
              <th className="align-left"></th>
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
