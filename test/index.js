'use strict'

const assert  = require('chai').assert
const replace = require('./../src/index')

describe('index()', function() {

	it('should replace data in a string', function() {

		const str  = 'hello {{ name }}'
		const data = { name: 'world' }

		assert.strictEqual(replace(str, data), 'hello world')

	})

	it('should replace multiple data keys in a string', function() {

		const str  = '{{ greeting }} {{ name }}'
		const data = { greeting: 'hi', name: 'world' }

		assert.strictEqual(replace(str, data), 'hi world')

	})

	it('should replace nothing when no matching key available', function() {

		const str  = 'hello {{ name }}'
		const data = {}

		assert.strictEqual(replace(str, data), 'hello {{ name }}')

	})

	it('should execute values when value is a function', function() {

		const str  = 'hello {{ name }}'
		const data = { name: (key, i) => key + i }

		assert.strictEqual(replace(str, data), 'hello name0')

	})

	it('should replace data in a string with custom delimiter', function() {

		const str       = 'hello !! name !!'
		const data      = { name: 'world' }
		const delimiter = [ '!! ', ' !!' ]

		assert.strictEqual(replace(str, data, delimiter), 'hello world')

	})

})