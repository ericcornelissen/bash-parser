'use strict';

function * spread(source) {
	for (const item of source) {
		if (typeof item[Symbol.iterator] === 'function') {
			yield* item;
		} else {
			yield item;
		}
	}
}

module.exports = spread;

// This code was taken from:
// - https://www.npmjs.com/package/transform-spread-iterable (v1.4.1)
// - https://github.com/parro-it/transform-spread-iterable (89bda9986ff8be9f61a38f37d3950ffb2ab5f76a)
// which is available under the MIT license, full license text below.
//
// It was vendored to avoid the (unnecessary) dependency on hughfdjackson's
// curry package.

// MIT License
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
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
