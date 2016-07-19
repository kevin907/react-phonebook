'use strict'

var React = require('react');
var ContactListing = require('./ContactListing.jsx');
var NewContactForm = require('./NewContactForm.jsx');
var ContactCounts = require('./ContactCounts.jsx');
var FilterInput = require('./FilterInput.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Awesome react datastream address book</h1>
          <div className="ink-grid">
            <div className="column-group horizontal-gutters">
              <div className="all-50">
                <FilterInput />
                <ContactListing />
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
