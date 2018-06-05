# key-value-replace

[![Travis Build Status](https://travis-ci.org/electerious/key-value-replace.svg?branch=master)](https://travis-ci.org/electerious/key-value-replace) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/p99ic2d4ba120c0w?svg=true)](https://ci.appveyor.com/project/electerious/key-value-replace)  [![Coverage Status](https://coveralls.io/repos/github/electerious/key-value-replace/badge.svg?branch=master)](https://coveralls.io/github/electerious/key-value-replace?branch=master) [![Dependencies](https://david-dm.org/electerious/key-value-replace.svg)](https://david-dm.org/electerious/key-value-replace#info=dependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/electerious/key-value-replace.svg)](https://greenkeeper.io/)

Replace key/value pairs in a string.

## Install

```
npm install key-value-replace
```

## Usage

```js
const replace = require('key-value-replace')

replace('hello {{ name }}', { name: 'world' }) // hello world
replace('{{ greeting }} {{ name }}', { greeting: 'hi', name: 'world' }) // hi world
replace('hello {{ name }}', { name: (key, i, data, str) => key }) // hello name
replace('hello !! name !!', { name: 'world' }, [ '!! ', ' !!' ]) // hello world
```

## Parameters

- `str` `{String}` - A string to replace the contents of.
- `obj` `{Object}` - Key/value pairs, where value must be a function or a string.
- `delimiter` `{Array}` - Optional array with a start and end delimiter.
	- `{String}` Start delimiter. Defaults to `'{{ '`.
	- `{String}` End delimiter. Defaults to `' }}'`.

## Returns

- `{String}` - A string with replaced content.