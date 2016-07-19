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
      nameFilter: '',
      forms: {
        newContact: {
          firstname: '',
          lastname: '',
          phone: ''
        }
      }
    };
  },
  componentDidMount: function() {
    eb.on(this, 'UPDATE_FILTER', function(newFilterValue) {
      console.log('UPDATE_FILTER received, updating state to nameFilter: ' + newFilterValue);
      this.setState({nameFilter: newFilterValue});
    });
    eb.on(this, 'UPDATE_FORM_FIELD', function(fieldKey, fieldValue) {
      console.log("UPDATE_FORM_FIELD received, updating " + fieldKey + ": " + fieldValue);
      var newState = this.state;
      newState.forms.newContact[fieldKey] = fieldValue;
      this.setState(newState);
    });
    eb.on(this, 'COMMIT_FORM', function() {
      // Look, no arguments! App db already contains everything we need.
      // Remember the single point of truth principle!
      this.setState({
        contacts: this.state.contacts.concat([this.state.forms.newContact]),
        forms: {
          newContact: {
            firstname: '',
            lastname: '',
            phone: ''
          }
        }});
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
  getContactCount: function() {
    return this.state.contacts.length;
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
                <ContactCounts contactCount={this.getContactCount()} />
              </div>
              <div className="all-50">
                <div className="ink-form">
                  <h4>Add new contact</h4>
                  <NewContactForm data={this.state.forms.newContact}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
});
