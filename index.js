var _ = require("./lib")
var parse = require("./parse")
var stringify = require("./stringify")
var canonicalize = stringify.canonicalize
module.exports = Hugml

function Hugml(namespaces, indentationChar = '\t', newlineChar = '\n') {
	if (namespaces) {
		this.namespaces = _.create(this.namespaces, namespaces)
		this.aliases = _.invert(this.namespaces)
	}
	this.indentationChar = indentationChar
	this.newlineChar = newlineChar
}

Hugml.prototype.namespaces = Object.create(null)
Hugml.prototype.aliases = Object.create(null)

Hugml.prototype.parse = function(xml) {
	return parse(this.namespaces, xml)
}

Hugml.prototype.stringify = function(obj) {
	return stringify(this.aliases, obj, this.indentationChar, this.newlineChar)
}

Hugml.prototype.canonicalize = function(obj, path) {
	return canonicalize(this.aliases, obj, path, this.indentationChar, this.newlineChar)
}

Hugml.parse = Hugml.prototype.parse.bind(Hugml.prototype)
Hugml.stringify = Hugml.prototype.stringify.bind(Hugml.prototype)
Hugml.canonicalize = Hugml.prototype.canonicalize.bind(Hugml.prototype)
