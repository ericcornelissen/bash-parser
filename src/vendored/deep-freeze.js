module.exports = function deepFreeze(o) {
	Object.freeze(o);
	Object.getOwnPropertyNames(o).forEach(function (prop) {
		if (o.hasOwnProperty(prop)
			&& o[prop] !== null
			&& (typeof o[prop] === "object" || typeof o[prop] === "function")
			&& !Object.isFrozen(o[prop])) {
			deepFreeze(o[prop]);
		}
	});

	return o;
};

// This code was taken from:
// - https://www.npmjs.com/package/deep-freeze (v0.0.1)
// which is released to the public domain, full license text below.
//
// It was vendored because the account of the original package's releaser no
// longer exists (meaning it could be claimed by someone else), which is a major
// supply chain security risk.

// This software is released to the public domain.
//
// It is based in part on the deepFreeze function from:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/freeze
//
// https://developer.mozilla.org/en-US/docs/Project:Copyrights
