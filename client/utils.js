Utils = {};
Utils.getArgs = function(args) {
    return Array.prototype.slice.call(args);
};
Utils.showArgs = function(args) {
    args = this.getArgs(args);
    return 'arguments: ' + args.join(', ');
};
Utils.showObject = function(object) {
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
};
