'use strict';

module.exports = filterIterator;

function* filterIterator(xs, pred) {
  for (let x of xs) {
    if (pred(x)) yield x;
  }
}

// This code was taken from:
// - https://www.npmjs.com/package/filter-iterator (v0.0.1)
// - https://github.com/jb55/filter-iterator (4ec4175efeced5e55cc80b8223d017c2f66152fa)
// which is available under the MIT license, full license text below.
//
// It was vendored to avoid dependency on this package, which does not declare
// its license in package.json

// The MIT License(MIT)
//
// Copyright(c) 2014 William Casarin
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files(the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
