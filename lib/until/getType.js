module.exports = function (obj) {
	var type;
	return ((type = typeof(obj)) == "object" ? obj == null && "null" || Object.prototype.toString.call(obj).slice(8, -1) : type).toLowerCase();
}