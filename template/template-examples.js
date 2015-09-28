if (Meteor.isClient) {
	// some utilities
	function getArgs(args) {
		return Array.prototype.slice.call(args);
	}
	function showArgs(args) {
		args = getArgs(args);
		return 'arguments: ' + args.join(', ');
	}
	function showObject(object) {
		var result = [],
			value;
		object = object || {};
		for (var k in object) {
			value = object[k];
			if (typeof value === "string") {
				value = '"' + value + '"';
			}
			result.push(k + '=' + value);
		}
		return 'object: ' + result.join(', ');
	}

	// Simple Paramters
	// This is deprecated
	Template.simpleParam.classParam = "class param value";
	Template.simpleParam.helpers({
		helperParam: "helper param value",
	});

	// Using Methods
	// This is deprecated
	Template.usingMethods.classMethod = function() {
		return 'class method result';
	};
	Template.usingMethods.helpers({
		receivingParams: function() {
			console.log('`this` of method: ', this);
			return showArgs(arguments);
		},
		expectsTwoParams: function(foo, bar, spacebarKw) {
			console.log('`this` of method: ', this);
			return showArgs(arguments);
		},
		useSpacebarsKw: function(kw) {
			console.log('`this` of method: ', this);
			return showArgs(arguments) + ' \n# kw: { ' + showObject(kw.hash) + ' }'
		},
		makeContext: function() {
			var args = getArgs(arguments);
			var kw = args.pop();
			console.log('`this` of method: ', this);
			var result = kw.hash;
			result.params = getArgs(args);
			return result;
		},
		useContext: function() {
			var args = getArgs(arguments);
			var kw = args.pop();
			console.log('`this` of method: ', this);
			return showArgs(args) + ' \n# kw: { ' + showObject(kw.hash) + ' } \n# this: { ' + showObject(this) + ' }';
		},
	});

}
