Template.methodHelperProps.helpers({
	receivingParams: function() {
		console.log('`this` of method: ', this);
		return Utils.showArgs(arguments);
	},
	expectsTwoParams: function(foo, bar, spacebarKw) {
		console.log('`this` of method: ', this);
		return Utils.showArgs(arguments);
	},
	useSpacebarsKw: function(kw) {
		console.log('`this` of method: ', this);
		return Utils.showArgs(arguments) + ' \n# kw: { ' + Utils.showObject(kw.hash) + ' }'
	},
	makeContext: function() {
		var args = Utils.getArgs(arguments);
		var kw = args.pop();
		console.log('`this` of method: ', this);
		var result = kw.hash;
		result.params = Utils.getArgs(args);
		return result;
	},
	useContext: function() {
		var args = Utils.getArgs(arguments);
		var kw = args.pop();
		console.log('`this` of method: ', this);
		return Utils.showArgs(args) + ' \n# kw: { ' + Utils.showObject(kw.hash) + ' } \n# this: { ' + Utils.showObject(this) + ' }';
	},
});
