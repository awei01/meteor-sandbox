'use strict';

Template.manageModalByQueryPoc.helpers({

	makeModalPath: function(content) {
		return makeModalPath(content);
	},
	getModal: function() {
		var result = getModal();
		console.log('getting modal: ', result);
		return result;
	},

});

function getCurrentRoute() {
	return Session.get('route.current');
};

function makeModalPath(content) {
	var route = getCurrentRoute();
	var path = route.path.split('?')[0];
	var params = route.params || {};
	var query = route.queryParams || {};
	query.modal = content;
	return FlowRouter.path(path, params, query);
};

function getModal() {
	var route = getCurrentRoute();
	var query = route.queryParams || {};
	return query.modal;
}
