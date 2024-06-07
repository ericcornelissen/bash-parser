'use strict';

module.exports = filterIterator;

function* filterIterator(xs, pred) {
  for (let x of xs) {
    if (pred(x)) yield x;
  }
}

// This code was taken from:
// - https://www.npmjs.com/package/filter-iterator
// - https://github.com/jb55/filter-iterator
// which is available under the MIT license
// It was vendored to avoid dependency on this package,
// which does not declare its license in package.json
