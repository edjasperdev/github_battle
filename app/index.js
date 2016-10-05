
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '98a279c0eee147419f24ffffb67b7781'
var sentryApp = '103577'
var sentryUrl = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp
var _APP_INFO = {
	name: 'Github Battle',
	branch: 'video4',
	version: '1.0'
}


Raven.config(sentryUrl, {
	release: _APP_INFO.version,
	tags: {
		branch: _APP_INFO.branch,
	}
}).install();


ReactDOM.render(
	routes,
	document.getElementById('app')
);