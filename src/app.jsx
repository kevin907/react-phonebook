'use strict'

var React = require('react');
var ReactDom = require('react-dom');
var PhoneBook = require('./PhoneBook.jsx');

ReactDom.render(<PhoneBook />, document.getElementById('app-container'))
