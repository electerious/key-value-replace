'use strict'

/*
 * Replace keys with their values in a string.
 * @public
 * @param {String} str
 * @param {Object} data
 * @param {Array} delimiter
 * @returns {String}
 */
module.exports = function(str, data, delimiter = [ '{{ ', ' }}' ]) {

	Object.keys(data).forEach((key, i) => {

		const regexp = new RegExp(delimiter[0] + key + delimiter[1], 'g')
		const value  = typeof data[key]==='function' ? data[key](key, i, data, str) : data[key]

		str = str.replace(regexp, value)

	})

	return str

}