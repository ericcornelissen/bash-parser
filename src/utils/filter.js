'use strict';
const filterIterator = require('../vendored/filter-iterator');
const reverse = require('reverse-arguments');
const curry = require('lodash.curry');

const filter = curry(reverse(filterIterator), 2);

module.exports = filter;
