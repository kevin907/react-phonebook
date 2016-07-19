'use strict'

var React = require('react');
var ContactListing = require('./ContactListing.jsx');
var NewContactForm = require('./NewContactForm.jsx');
var ContactCounts = require('./ContactCounts.jsx');
var FilterInput = require('./FilterInput.jsx');
var eb = require('./eventbus.js');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      contacts: [
        {firstname: 'Günther', lastname: 'Haapanen', phone: '045-422452525'},
        {firstname: 'Mock', lastname: 'Mockelson', phone: '045-2409209284'},
        {firstname: 'Guybrush', lastname: 'Threepwood', phone: '045-467467467'},
        {firstname: 'Ada', lastname: 'Lovelace', phone: '045-43746776'},
        {firstname: 'Jane', lastname: 'Doe', phone: '045-34646347'}
      ],
      nameFilter: ''
    };
  },
  componentDidMount: function() {
    eb.on(this, 'UPDATE_FILTER', function(newFilterValue) {
      console.log('UPDATE_FILTER received, updating state to nameFilter: ' + newFilterValue);
      this.setState({nameFilter: newFilterValue});
    });
  },
  getContacts: function() {
    if(this.state.nameFilter === '') {
      return this.state.contacts;
    }
    return this.state.contacts.filter(function(contact) {
      return contact.lastname.indexOf(this.state.nameFilter) > -1 ||
        contact.firstname.indexOf(this.state.nameFilter) > -1;
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <h1>Awesome react datastream address book</h1>
          <div className="ink-grid">
            <div className="column-group horizontal-gutters">
              <div className="all-50">
                <FilterInput value={this.state.nameFilter}/>
                <ContactListing contacts={this.getContacts()}/>
                <ContactCounts contactCount="1000" />
              </div>
              <div className="all-50">
                <div className="ink-form">
                  <h4>Add new contact</h4>
                  <NewContactForm />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
});
