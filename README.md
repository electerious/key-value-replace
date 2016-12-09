# key-value-replace

[![Travis Build Status](https://travis-ci.org/electerious/key-value-replace.svg?branch=master)](https://travis-ci.org/electerious/key-value-replace) [![Coverage Status](https://coveralls.io/repos/github/electerious/key-value-replace/badge.svg?branch=master)](https://coveralls.io/github/electerious/key-value-replace?branch=master) [![Dependencies](https://david-dm.org/electerious/key-value-replace.svg)](https://david-dm.org/electerious/key-value-replace#info=dependencies)

Replace keys with their values in a string.

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

- `str` `{String}`
- `obj` `{Object}`
- `delimiter` `{Array}`
	- `{String}` Start delimiter.
	- `{String}` End delimiter.

## Returns

- `{String}`