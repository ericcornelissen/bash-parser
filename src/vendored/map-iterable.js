'use strict';

const curry = require('lodash.curry');
const isIterable = require('is-iterable');

function initDefault(data) {
	return data;
}

function map(options, data) {
	if (typeof options !== 'function' && (typeof options !== 'object' || options === null)) {
		throw new TypeError('Callback argument must be a function or option object');
	}

	if (!isIterable(data)) {
		throw new TypeError('Data argument must be an iterable');
	}

	let idx = 0;

	const init = options.init || initDefault;
	const callback = options.callback || options;

	const ctx = init(data);
	const dataIterator = data[Symbol.iterator]();

	return {
		[Symbol.iterator]() {
			return this;
		},

		next() {
			const item = dataIterator.next();
			if (!item.done) {
				item.value = callback(item.value, idx++, ctx);
			}
			return item;
		}
	};
}

module.exports = curry(map);

// This code was taken from:
// - https://www.npmjs.com/package/map-iterable (v2.0.0)
// - https://github.com/parro-it/map-iterable (511d8c00383f851c5f1be242767649a0072db84d)
// which is available under the MIT license, full license text below.
//
// It was modified to use lodash.curry instead of hughfdjackson's curry
// function.

// The MIT License (MIT)
//
// Copyright (c) 2016 Andrea Parodi
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
// OR OTHER DEALINGS IN THE SOFTWARE.
