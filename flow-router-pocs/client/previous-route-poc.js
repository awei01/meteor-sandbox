'use strict';

Template.previousRoutePoc.helpers({
	getCurrentPath: function() {
		return getCurrentPath();
	},
	getPreviousPath: function() {
		return getPreviousPath();
	}
});

// register the previous route
trackFlowRouterPaths();

function trackFlowRouterPaths() {
	FlowRouter.triggers.enter([storeCurrentRoute]);
	FlowRouter.triggers.exit([storePreviousRoute]);
};
function storeCurrentRoute(context) {
	storeRoute(context, 'current');
};
function storePreviousRoute(context) {
	storeRoute(context, 'previous');
};
function storeRoute(context, type) {
	var route = _.pick(context, ['path', 'params', 'queryParams']);
	var key = 'route.' + type;
	console.log('storing route [' + type + ']:', route);
	Session.set(key, route);
};

function getCurrentPath() {
	var route = Session.get('route.current') || {};
	return route.path;
};
function getPreviousPath() {
	var route = Session.get('route.previous') || {};
	return route.path;
};

