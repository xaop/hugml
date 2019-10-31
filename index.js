var _ = require("./lib")
var parse = require("./parse")
var stringify = require("./stringify")
module.exports = Hugml

function Hugml(namespaces) {
	if (namespaces) {
		this.namespaces = _.create(this.namespaces, namespaces)
		this.aliases = _.invert(this.namespaces)
	}
}

Hugml.prototype.namespaces = Object.create(null)
Hugml.prototype.aliases = Object.create(null)

Hugml.prototype.parse = function(xml) {
	return parse(this.namespaces, xml)
}

Hugml.prototype.stringify = function(obj) {
	return stringify(this.aliases, obj)
}

Hugml.parse = Hugml.prototype.parse.bind(Hugml.prototype)
Hugml.stringify = Hugml.prototype.stringify.bind(Hugml.prototype)
