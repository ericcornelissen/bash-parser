'use strict';
const curry = require('lodash.curry');

function replace(oldItem, newItem, array) {
	return array.map(item => {
		if (item === oldItem) {
			return newItem;
		}

		return item;
	});
}

module.exports = curry(replace);

// This code was taken from:
// - https://www.npmjs.com/package/iterable-transform-replace (v)1.2.0
// - https://github.com/parro-it/iterable-transform-replace (773c6f663c66cf9d3693631cb5756b0e82ac1726)
// which is available under the MIT license, full license text below.
//
// It was modified to use lodash.curry instead of hughfdjackson's curry
// function.

// MIT License
//
// Copyright (c) 2016-2022 Andrea Parodi
// Copyright (c) 2023 Eric Cornelissen
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
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
