'use strict'

/**
 * Replace key/value pairs in a string.
 * @public
 * @param {String} str - A string to replace the contents of.
 * @param {Object} data - Key/value pairs, where value must be a function or a string.
 * @param {Array} delimiter - Optional array with a start and end delimiter.
 * @returns {String} - A string with replaced content.
 */
module.exports = function(str, data, delimiter = [ '{{ ', ' }}' ]) {

	Object.keys(data).forEach((key, i) => {

		const regexp = new RegExp(delimiter[0] + key + delimiter[1], 'g')
		const value = typeof data[key]==='function' ? data[key](key, i, data, str) : data[key]

		str = str.replace(regexp, value)

	})

	return str

}