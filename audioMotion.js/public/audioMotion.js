/*! For license information please see audioMotion.js.LICENSE.txt */
!(function (e) {
	var t = {};
	function a(r) {
		if (t[r]) return t[r].exports;
		var n = (t[r] = { i: r, l: !1, exports: {} });
		return e[r].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
	}
	(a.m = e),
		(a.c = t),
		(a.d = function (e, t, r) {
			a.o(e, t) ||
				Object.defineProperty(e, t, { enumerable: !0, get: r });
		}),
		(a.r = function (e) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module",
				}),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(a.t = function (e, t) {
			if ((1 & t && (e = a(e)), 8 & t)) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (
				(a.r(r),
				Object.defineProperty(r, "default", {
					enumerable: !0,
					value: e,
				}),
				2 & t && "string" != typeof e)
			)
				for (var n in e)
					a.d(
						r,
						n,
						function (t) {
							return e[t];
						}.bind(null, n)
					);
			return r;
		}),
		(a.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return a.d(t, "a", t), t;
		}),
		(a.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(a.p = ""),
		a((a.s = 137));
})([
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(5),
			n = a(31);
		(t.UINT8 = {
			len: 1,
			get: (e, t) => e.readUInt8(t),
			put(e, t, a) {
				return (
					r.equal(typeof t, "number"),
					r.equal(typeof a, "number"),
					r.ok(a >= 0 && a <= 255),
					r.ok(t >= 0),
					r.ok(this.len <= e.length),
					e.writeUInt8(a, t)
				);
			},
		}),
			(t.UINT16_LE = {
				len: 2,
				get: (e, t) => e.readUInt16LE(t),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= 0 && a <= 65535),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeUInt16LE(a, t)
					);
				},
			}),
			(t.UINT16_BE = {
				len: 2,
				get: (e, t) => e.readUInt16BE(t),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= 0 && a <= 65535),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeUInt16BE(a, t)
					);
				},
			}),
			(t.UINT24_LE = {
				len: 3,
				get: (e, t) => e.readUIntLE(t, 3),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= 0 && a <= 16777215),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeUIntLE(a, t, 3)
					);
				},
			}),
			(t.UINT24_BE = {
				len: 3,
				get: (e, t) => e.readUIntBE(t, 3),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= 0 && a <= 16777215),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeUIntBE(a, t, 3)
					);
				},
			}),
			(t.UINT32_LE = {
				len: 4,
				get: (e, t) => e.readUInt32LE(t),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= 0 && a <= 4294967295),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeUInt32LE(a, t)
					);
				},
			}),
			(t.UINT32_BE = {
				len: 4,
				get: (e, t) => e.readUInt32BE(t),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= 0 && a <= 4294967295),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeUInt32BE(a, t)
					);
				},
			}),
			(t.INT8 = {
				len: 1,
				get: (e, t) => e.readInt8(t),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= -128 && a <= 127),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeInt8(a, t)
					);
				},
			}),
			(t.INT16_BE = {
				len: 2,
				get: (e, t) => e.readInt16BE(t),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= -32768 && a <= 32767),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeInt16BE(a, t)
					);
				},
			}),
			(t.INT16_LE = {
				len: 2,
				get: (e, t) => e.readInt16LE(t),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= -32768 && a <= 32767),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeInt16LE(a, t)
					);
				},
			}),
			(t.INT24_LE = {
				len: 3,
				get: (e, t) => e.readIntLE(t, 3),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= -8388608 && a <= 8388607),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeIntLE(a, t, 3)
					);
				},
			}),
			(t.INT24_BE = {
				len: 3,
				get: (e, t) => e.readIntBE(t, 3),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= -8388608 && a <= 8388607),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeIntBE(a, t, 3)
					);
				},
			}),
			(t.INT32_BE = {
				len: 4,
				get: (e, t) => e.readInt32BE(t),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= -2147483648 && a <= 2147483647),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeInt32BE(a, t)
					);
				},
			}),
			(t.INT32_LE = {
				len: 4,
				get: (e, t) => e.readInt32LE(t),
				put(e, t, a) {
					return (
						r.equal(typeof t, "number"),
						r.equal(typeof a, "number"),
						r.ok(a >= -2147483648 && a <= 2147483647),
						r.ok(t >= 0),
						r.ok(this.len <= e.length),
						e.writeInt32LE(a, t)
					);
				},
			}),
			(t.UINT64_LE = {
				len: 8,
				get(e, t) {
					return (function (e, t, a) {
						a >>>= 0;
						let r = e[(t >>>= 0)],
							n = 1,
							i = 0;
						for (; ++i < a && (n *= 256); ) r += e[t + i] * n;
						return r;
					})(e, t, this.len);
				},
				put(e, t, a) {
					return (function (e, t, a, r) {
						(t = +t), (r >>>= 0);
						let n = 1,
							i = 0;
						e[(a >>>= 0)] = 255 & t;
						for (; ++i < r && (n *= 256); )
							e[a + i] = (t / n) & 255;
						return a + r;
					})(e, a, t, this.len);
				},
			}),
			(t.INT64_LE = {
				len: 8,
				get(e, t) {
					return (function (e, t, a) {
						a >>>= 0;
						let r = e[(t >>>= 0)],
							n = 1,
							i = 0;
						for (; ++i < a && (n *= 256); ) r += e[t + i] * n;
						(n *= 128), r >= n && (r -= Math.pow(2, 8 * a));
						return r;
					})(e, t, this.len);
				},
				put(e, t, a) {
					return s(e, a, t, this.len);
				},
			}),
			(t.UINT64_BE = {
				len: 8,
				get(e, t) {
					return o(e, t, this.len);
				},
				put(e, t, a) {
					return l(e, a, t, this.len);
				},
			}),
			(t.INT64_BE = {
				len: 8,
				get(e, t) {
					return c(e, t, this.len);
				},
				put(e, t, a) {
					return u(e, a, t, this.len);
				},
			}),
			(t.Float16_BE = {
				len: 2,
				get(e, t) {
					return n.read(e, t, !1, 10, this.len);
				},
				put(e, t, a) {
					return n.write(e, a, t, !1, 10, this.len);
				},
			}),
			(t.Float16_LE = {
				len: 2,
				get(e, t) {
					return n.read(e, t, !0, 10, this.len);
				},
				put(e, t, a) {
					return n.write(e, a, t, !0, 10, this.len);
				},
			}),
			(t.Float32_BE = {
				len: 4,
				get: (e, t) => e.readFloatBE(t),
				put: (e, t, a) => e.writeFloatBE(a, t),
			}),
			(t.Float32_LE = {
				len: 4,
				get: (e, t) => e.readFloatLE(t),
				put: (e, t, a) => e.writeFloatLE(a, t),
			}),
			(t.Float64_BE = {
				len: 8,
				get: (e, t) => e.readDoubleBE(t),
				put: (e, t, a) => e.writeDoubleBE(a, t),
			}),
			(t.Float64_LE = {
				len: 8,
				get: (e, t) => e.readDoubleLE(t),
				put: (e, t, a) => e.writeDoubleLE(a, t),
			}),
			(t.Float80_BE = {
				len: 10,
				get(e, t) {
					return n.read(e, t, !1, 63, this.len);
				},
				put(e, t, a) {
					return n.write(e, a, t, !1, 63, this.len);
				},
			}),
			(t.Float80_LE = {
				len: 10,
				get(e, t) {
					return n.read(e, t, !0, 63, this.len);
				},
				put(e, t, a) {
					return n.write(e, a, t, !0, 63, this.len);
				},
			});
		t.IgnoreType = class {
			constructor(e) {
				this.len = e;
			}
			get(e, t) {}
		};
		t.BufferType = class {
			constructor(e) {
				this.len = e;
			}
			get(e, t) {
				return e.slice(t, t + this.len);
			}
		};
		t.StringType = class {
			constructor(e, t) {
				(this.len = e), (this.encoding = t);
			}
			get(e, t) {
				return e.toString(this.encoding, t, t + this.len);
			}
		};
		class i {
			constructor(e) {
				this.len = e;
			}
			static decode(e, t, a) {
				let r = "";
				for (let n = t; n < a; ++n)
					r += i.codePointToString(i.singleByteDecoder(e[n]));
				return r;
			}
			static inRange(e, t, a) {
				return t <= e && e <= a;
			}
			static codePointToString(e) {
				return e <= 65535
					? String.fromCharCode(e)
					: ((e -= 65536),
					  String.fromCharCode(
							55296 + (e >> 10),
							56320 + (1023 & e)
					  ));
			}
			static singleByteDecoder(e) {
				if (i.inRange(e, 0, 127)) return e;
				const t = i.windows1252[e - 128];
				if (null === t) throw Error("invaliding encoding");
				return t;
			}
			get(e, t = 0) {
				return i.decode(e, t, t + this.len);
			}
		}
		function s(e, t, a, r) {
			t = +t;
			let n = 0,
				i = 1,
				s = 0;
			for (e[(a >>>= 0)] = 255 & t; ++n < r && (i *= 256); )
				t < 0 && 0 === s && 0 !== e[a + n - 1] && (s = 1),
					(e[a + n] = (((t / i) >> 0) - s) & 255);
			return a + r;
		}
		function o(e, t, a) {
			a >>>= 0;
			let r = e[(t >>>= 0) + --a],
				n = 1;
			for (; a > 0 && (n *= 256); ) r += e[t + --a] * n;
			return r;
		}
		function l(e, t, a, r) {
			t = +t;
			let n = (r >>>= 0) - 1,
				i = 1;
			for (e[(a >>>= 0) + n] = 255 & t; --n >= 0 && (i *= 256); )
				e[a + n] = (t / i) & 255;
			return a + r;
		}
		function c(e, t, a) {
			let r = (a >>>= 0),
				n = 1,
				i = e[(t >>>= 0) + --r];
			for (; r > 0 && (n *= 256); ) i += e[t + --r] * n;
			return (n *= 128), i >= n && (i -= Math.pow(2, 8 * a)), i;
		}
		function u(e, t, a, r) {
			t = +t;
			let n = r - 1,
				i = 1,
				s = 0;
			for (e[(a >>>= 0) + n] = 255 & t; --n >= 0 && (i *= 256); )
				t < 0 && 0 === s && 0 !== e[a + n + 1] && (s = 1),
					(e[a + n] = (((t / i) >> 0) - s) & 255);
			return a + r;
		}
		(t.AnsiStringType = i),
			(i.windows1252 = [
				8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352,
				8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226,
				8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376, 160, 161,
				162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
				175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
				188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
				201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213,
				214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226,
				227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239,
				240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252,
				253, 254, 255,
			]),
			(t.writeIntLE = s),
			(t.readUIntBE = o),
			(t.writeUIntBE = l),
			(t.readIntBE = c),
			(t.writeIntBE = u);
	},
	function (e, t, a) {
		(function (r) {
			(t.log = function (...e) {
				return (
					"object" == typeof console &&
					console.log &&
					console.log(...e)
				);
			}),
				(t.formatArgs = function (t) {
					if (
						((t[0] =
							(this.useColors ? "%c" : "") +
							this.namespace +
							(this.useColors ? " %c" : " ") +
							t[0] +
							(this.useColors ? "%c " : " ") +
							"+" +
							e.exports.humanize(this.diff)),
						!this.useColors)
					)
						return;
					const a = "color: " + this.color;
					t.splice(1, 0, a, "color: inherit");
					let r = 0,
						n = 0;
					t[0].replace(/%[a-zA-Z%]/g, (e) => {
						"%%" !== e && (r++, "%c" === e && (n = r));
					}),
						t.splice(n, 0, a);
				}),
				(t.save = function (e) {
					try {
						e
							? t.storage.setItem("debug", e)
							: t.storage.removeItem("debug");
					} catch (e) {}
				}),
				(t.load = function () {
					let e;
					try {
						e = t.storage.getItem("debug");
					} catch (e) {}
					!e && void 0 !== r && "env" in r && (e = r.env.DEBUG);
					return e;
				}),
				(t.useColors = function () {
					if (
						"undefined" != typeof window &&
						window.process &&
						("renderer" === window.process.type ||
							window.process.__nwjs)
					)
						return !0;
					if (
						"undefined" != typeof navigator &&
						navigator.userAgent &&
						navigator.userAgent
							.toLowerCase()
							.match(/(edge|trident)\/(\d+)/)
					)
						return !1;
					return (
						("undefined" != typeof document &&
							document.documentElement &&
							document.documentElement.style &&
							document.documentElement.style.WebkitAppearance) ||
						("undefined" != typeof window &&
							window.console &&
							(window.console.firebug ||
								(window.console.exception &&
									window.console.table))) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent
								.toLowerCase()
								.match(/firefox\/(\d+)/) &&
							parseInt(RegExp.$1, 10) >= 31) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent
								.toLowerCase()
								.match(/applewebkit\/(\d+)/))
					);
				}),
				(t.storage = (function () {
					try {
						return localStorage;
					} catch (e) {}
				})()),
				(t.colors = [
					"#0000CC",
					"#0000FF",
					"#0033CC",
					"#0033FF",
					"#0066CC",
					"#0066FF",
					"#0099CC",
					"#0099FF",
					"#00CC00",
					"#00CC33",
					"#00CC66",
					"#00CC99",
					"#00CCCC",
					"#00CCFF",
					"#3300CC",
					"#3300FF",
					"#3333CC",
					"#3333FF",
					"#3366CC",
					"#3366FF",
					"#3399CC",
					"#3399FF",
					"#33CC00",
					"#33CC33",
					"#33CC66",
					"#33CC99",
					"#33CCCC",
					"#33CCFF",
					"#6600CC",
					"#6600FF",
					"#6633CC",
					"#6633FF",
					"#66CC00",
					"#66CC33",
					"#9900CC",
					"#9900FF",
					"#9933CC",
					"#9933FF",
					"#99CC00",
					"#99CC33",
					"#CC0000",
					"#CC0033",
					"#CC0066",
					"#CC0099",
					"#CC00CC",
					"#CC00FF",
					"#CC3300",
					"#CC3333",
					"#CC3366",
					"#CC3399",
					"#CC33CC",
					"#CC33FF",
					"#CC6600",
					"#CC6633",
					"#CC9900",
					"#CC9933",
					"#CCCC00",
					"#CCCC33",
					"#FF0000",
					"#FF0033",
					"#FF0066",
					"#FF0099",
					"#FF00CC",
					"#FF00FF",
					"#FF3300",
					"#FF3333",
					"#FF3366",
					"#FF3399",
					"#FF33CC",
					"#FF33FF",
					"#FF6600",
					"#FF6633",
					"#FF9900",
					"#FF9933",
					"#FFCC00",
					"#FFCC33",
				]),
				(e.exports = a(65)(t));
			const { formatters: n } = e.exports;
			n.j = function (e) {
				try {
					return JSON.stringify(e);
				} catch (e) {
					return "[UnexpectedJSONParseError]: " + e.message;
				}
			};
		}.call(this, a(9)));
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			var r = a(50),
				n = a(31),
				i = a(32);
			function s() {
				return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
			}
			function o(e, t) {
				if (s() < t) throw new RangeError("Invalid typed array length");
				return (
					l.TYPED_ARRAY_SUPPORT
						? ((e = new Uint8Array(t)).__proto__ = l.prototype)
						: (null === e && (e = new l(t)), (e.length = t)),
					e
				);
			}
			function l(e, t, a) {
				if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
					return new l(e, t, a);
				if ("number" == typeof e) {
					if ("string" == typeof t)
						throw new Error(
							"If encoding is specified then the first argument must be a string"
						);
					return d(this, e);
				}
				return c(this, e, t, a);
			}
			function c(e, t, a, r) {
				if ("number" == typeof t)
					throw new TypeError(
						'"value" argument must not be a number'
					);
				return "undefined" != typeof ArrayBuffer &&
					t instanceof ArrayBuffer
					? (function (e, t, a, r) {
							if ((t.byteLength, a < 0 || t.byteLength < a))
								throw new RangeError(
									"'offset' is out of bounds"
								);
							if (t.byteLength < a + (r || 0))
								throw new RangeError(
									"'length' is out of bounds"
								);
							t =
								void 0 === a && void 0 === r
									? new Uint8Array(t)
									: void 0 === r
									? new Uint8Array(t, a)
									: new Uint8Array(t, a, r);
							l.TYPED_ARRAY_SUPPORT
								? ((e = t).__proto__ = l.prototype)
								: (e = f(e, t));
							return e;
					  })(e, t, a, r)
					: "string" == typeof t
					? (function (e, t, a) {
							("string" == typeof a && "" !== a) || (a = "utf8");
							if (!l.isEncoding(a))
								throw new TypeError(
									'"encoding" must be a valid string encoding'
								);
							var r = 0 | p(t, a),
								n = (e = o(e, r)).write(t, a);
							n !== r && (e = e.slice(0, n));
							return e;
					  })(e, t, a)
					: (function (e, t) {
							if (l.isBuffer(t)) {
								var a = 0 | h(t.length);
								return (
									0 === (e = o(e, a)).length ||
										t.copy(e, 0, 0, a),
									e
								);
							}
							if (t) {
								if (
									("undefined" != typeof ArrayBuffer &&
										t.buffer instanceof ArrayBuffer) ||
									"length" in t
								)
									return "number" != typeof t.length ||
										(r = t.length) != r
										? o(e, 0)
										: f(e, t);
								if ("Buffer" === t.type && i(t.data))
									return f(e, t.data);
							}
							var r;
							throw new TypeError(
								"First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
							);
					  })(e, t);
			}
			function u(e) {
				if ("number" != typeof e)
					throw new TypeError('"size" argument must be a number');
				if (e < 0)
					throw new RangeError(
						'"size" argument must not be negative'
					);
			}
			function d(e, t) {
				if (
					(u(t),
					(e = o(e, t < 0 ? 0 : 0 | h(t))),
					!l.TYPED_ARRAY_SUPPORT)
				)
					for (var a = 0; a < t; ++a) e[a] = 0;
				return e;
			}
			function f(e, t) {
				var a = t.length < 0 ? 0 : 0 | h(t.length);
				e = o(e, a);
				for (var r = 0; r < a; r += 1) e[r] = 255 & t[r];
				return e;
			}
			function h(e) {
				if (e >= s())
					throw new RangeError(
						"Attempt to allocate Buffer larger than maximum size: 0x" +
							s().toString(16) +
							" bytes"
					);
				return 0 | e;
			}
			function p(e, t) {
				if (l.isBuffer(e)) return e.length;
				if (
					"undefined" != typeof ArrayBuffer &&
					"function" == typeof ArrayBuffer.isView &&
					(ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
				)
					return e.byteLength;
				"string" != typeof e && (e = "" + e);
				var a = e.length;
				if (0 === a) return 0;
				for (var r = !1; ; )
					switch (t) {
						case "ascii":
						case "latin1":
						case "binary":
							return a;
						case "utf8":
						case "utf-8":
						case void 0:
							return j(e).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * a;
						case "hex":
							return a >>> 1;
						case "base64":
							return H(e).length;
						default:
							if (r) return j(e).length;
							(t = ("" + t).toLowerCase()), (r = !0);
					}
			}
			function m(e, t, a) {
				var r = !1;
				if (((void 0 === t || t < 0) && (t = 0), t > this.length))
					return "";
				if (
					((void 0 === a || a > this.length) && (a = this.length),
					a <= 0)
				)
					return "";
				if ((a >>>= 0) <= (t >>>= 0)) return "";
				for (e || (e = "utf8"); ; )
					switch (e) {
						case "hex":
							return D(this, t, a);
						case "utf8":
						case "utf-8":
							return C(this, t, a);
						case "ascii":
							return x(this, t, a);
						case "latin1":
						case "binary":
							return A(this, t, a);
						case "base64":
							return E(this, t, a);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return O(this, t, a);
						default:
							if (r)
								throw new TypeError("Unknown encoding: " + e);
							(e = (e + "").toLowerCase()), (r = !0);
					}
			}
			function g(e, t, a) {
				var r = e[t];
				(e[t] = e[a]), (e[a] = r);
			}
			function b(e, t, a, r, n) {
				if (0 === e.length) return -1;
				if (
					("string" == typeof a
						? ((r = a), (a = 0))
						: a > 2147483647
						? (a = 2147483647)
						: a < -2147483648 && (a = -2147483648),
					(a = +a),
					isNaN(a) && (a = n ? 0 : e.length - 1),
					a < 0 && (a = e.length + a),
					a >= e.length)
				) {
					if (n) return -1;
					a = e.length - 1;
				} else if (a < 0) {
					if (!n) return -1;
					a = 0;
				}
				if (("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)))
					return 0 === t.length ? -1 : v(e, t, a, r, n);
				if ("number" == typeof t)
					return (
						(t &= 255),
						l.TYPED_ARRAY_SUPPORT &&
						"function" == typeof Uint8Array.prototype.indexOf
							? n
								? Uint8Array.prototype.indexOf.call(e, t, a)
								: Uint8Array.prototype.lastIndexOf.call(e, t, a)
							: v(e, [t], a, r, n)
					);
				throw new TypeError("val must be string, number or Buffer");
			}
			function v(e, t, a, r, n) {
				var i,
					s = 1,
					o = e.length,
					l = t.length;
				if (
					void 0 !== r &&
					("ucs2" === (r = String(r).toLowerCase()) ||
						"ucs-2" === r ||
						"utf16le" === r ||
						"utf-16le" === r)
				) {
					if (e.length < 2 || t.length < 2) return -1;
					(s = 2), (o /= 2), (l /= 2), (a /= 2);
				}
				function c(e, t) {
					return 1 === s ? e[t] : e.readUInt16BE(t * s);
				}
				if (n) {
					var u = -1;
					for (i = a; i < o; i++)
						if (c(e, i) === c(t, -1 === u ? 0 : i - u)) {
							if ((-1 === u && (u = i), i - u + 1 === l))
								return u * s;
						} else -1 !== u && (i -= i - u), (u = -1);
				} else
					for (a + l > o && (a = o - l), i = a; i >= 0; i--) {
						for (var d = !0, f = 0; f < l; f++)
							if (c(e, i + f) !== c(t, f)) {
								d = !1;
								break;
							}
						if (d) return i;
					}
				return -1;
			}
			function y(e, t, a, r) {
				a = Number(a) || 0;
				var n = e.length - a;
				r ? (r = Number(r)) > n && (r = n) : (r = n);
				var i = t.length;
				if (i % 2 != 0) throw new TypeError("Invalid hex string");
				r > i / 2 && (r = i / 2);
				for (var s = 0; s < r; ++s) {
					var o = parseInt(t.substr(2 * s, 2), 16);
					if (isNaN(o)) return s;
					e[a + s] = o;
				}
				return s;
			}
			function w(e, t, a, r) {
				return q(j(t, e.length - a), e, a, r);
			}
			function T(e, t, a, r) {
				return q(
					(function (e) {
						for (var t = [], a = 0; a < e.length; ++a)
							t.push(255 & e.charCodeAt(a));
						return t;
					})(t),
					e,
					a,
					r
				);
			}
			function _(e, t, a, r) {
				return T(e, t, a, r);
			}
			function k(e, t, a, r) {
				return q(H(t), e, a, r);
			}
			function S(e, t, a, r) {
				return q(
					(function (e, t) {
						for (
							var a, r, n, i = [], s = 0;
							s < e.length && !((t -= 2) < 0);
							++s
						)
							(r = (a = e.charCodeAt(s)) >> 8),
								(n = a % 256),
								i.push(n),
								i.push(r);
						return i;
					})(t, e.length - a),
					e,
					a,
					r
				);
			}
			function E(e, t, a) {
				return 0 === t && a === e.length
					? r.fromByteArray(e)
					: r.fromByteArray(e.slice(t, a));
			}
			function C(e, t, a) {
				a = Math.min(e.length, a);
				for (var r = [], n = t; n < a; ) {
					var i,
						s,
						o,
						l,
						c = e[n],
						u = null,
						d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
					if (n + d <= a)
						switch (d) {
							case 1:
								c < 128 && (u = c);
								break;
							case 2:
								128 == (192 & (i = e[n + 1])) &&
									(l = ((31 & c) << 6) | (63 & i)) > 127 &&
									(u = l);
								break;
							case 3:
								(i = e[n + 1]),
									(s = e[n + 2]),
									128 == (192 & i) &&
										128 == (192 & s) &&
										(l =
											((15 & c) << 12) |
											((63 & i) << 6) |
											(63 & s)) > 2047 &&
										(l < 55296 || l > 57343) &&
										(u = l);
								break;
							case 4:
								(i = e[n + 1]),
									(s = e[n + 2]),
									(o = e[n + 3]),
									128 == (192 & i) &&
										128 == (192 & s) &&
										128 == (192 & o) &&
										(l =
											((15 & c) << 18) |
											((63 & i) << 12) |
											((63 & s) << 6) |
											(63 & o)) > 65535 &&
										l < 1114112 &&
										(u = l);
						}
					null === u
						? ((u = 65533), (d = 1))
						: u > 65535 &&
						  ((u -= 65536),
						  r.push(((u >>> 10) & 1023) | 55296),
						  (u = 56320 | (1023 & u))),
						r.push(u),
						(n += d);
				}
				return (function (e) {
					var t = e.length;
					if (t <= I) return String.fromCharCode.apply(String, e);
					var a = "",
						r = 0;
					for (; r < t; )
						a += String.fromCharCode.apply(
							String,
							e.slice(r, (r += I))
						);
					return a;
				})(r);
			}
			(t.Buffer = l),
				(t.SlowBuffer = function (e) {
					+e != e && (e = 0);
					return l.alloc(+e);
				}),
				(t.INSPECT_MAX_BYTES = 50),
				(l.TYPED_ARRAY_SUPPORT =
					void 0 !== e.TYPED_ARRAY_SUPPORT
						? e.TYPED_ARRAY_SUPPORT
						: (function () {
								try {
									var e = new Uint8Array(1);
									return (
										(e.__proto__ = {
											__proto__: Uint8Array.prototype,
											foo: function () {
												return 42;
											},
										}),
										42 === e.foo() &&
											"function" == typeof e.subarray &&
											0 === e.subarray(1, 1).byteLength
									);
								} catch (e) {
									return !1;
								}
						  })()),
				(t.kMaxLength = s()),
				(l.poolSize = 8192),
				(l._augment = function (e) {
					return (e.__proto__ = l.prototype), e;
				}),
				(l.from = function (e, t, a) {
					return c(null, e, t, a);
				}),
				l.TYPED_ARRAY_SUPPORT &&
					((l.prototype.__proto__ = Uint8Array.prototype),
					(l.__proto__ = Uint8Array),
					"undefined" != typeof Symbol &&
						Symbol.species &&
						l[Symbol.species] === l &&
						Object.defineProperty(l, Symbol.species, {
							value: null,
							configurable: !0,
						})),
				(l.alloc = function (e, t, a) {
					return (function (e, t, a, r) {
						return (
							u(t),
							t <= 0
								? o(e, t)
								: void 0 !== a
								? "string" == typeof r
									? o(e, t).fill(a, r)
									: o(e, t).fill(a)
								: o(e, t)
						);
					})(null, e, t, a);
				}),
				(l.allocUnsafe = function (e) {
					return d(null, e);
				}),
				(l.allocUnsafeSlow = function (e) {
					return d(null, e);
				}),
				(l.isBuffer = function (e) {
					return !(null == e || !e._isBuffer);
				}),
				(l.compare = function (e, t) {
					if (!l.isBuffer(e) || !l.isBuffer(t))
						throw new TypeError("Arguments must be Buffers");
					if (e === t) return 0;
					for (
						var a = e.length,
							r = t.length,
							n = 0,
							i = Math.min(a, r);
						n < i;
						++n
					)
						if (e[n] !== t[n]) {
							(a = e[n]), (r = t[n]);
							break;
						}
					return a < r ? -1 : r < a ? 1 : 0;
				}),
				(l.isEncoding = function (e) {
					switch (String(e).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1;
					}
				}),
				(l.concat = function (e, t) {
					if (!i(e))
						throw new TypeError(
							'"list" argument must be an Array of Buffers'
						);
					if (0 === e.length) return l.alloc(0);
					var a;
					if (void 0 === t)
						for (t = 0, a = 0; a < e.length; ++a) t += e[a].length;
					var r = l.allocUnsafe(t),
						n = 0;
					for (a = 0; a < e.length; ++a) {
						var s = e[a];
						if (!l.isBuffer(s))
							throw new TypeError(
								'"list" argument must be an Array of Buffers'
							);
						s.copy(r, n), (n += s.length);
					}
					return r;
				}),
				(l.byteLength = p),
				(l.prototype._isBuffer = !0),
				(l.prototype.swap16 = function () {
					var e = this.length;
					if (e % 2 != 0)
						throw new RangeError(
							"Buffer size must be a multiple of 16-bits"
						);
					for (var t = 0; t < e; t += 2) g(this, t, t + 1);
					return this;
				}),
				(l.prototype.swap32 = function () {
					var e = this.length;
					if (e % 4 != 0)
						throw new RangeError(
							"Buffer size must be a multiple of 32-bits"
						);
					for (var t = 0; t < e; t += 4)
						g(this, t, t + 3), g(this, t + 1, t + 2);
					return this;
				}),
				(l.prototype.swap64 = function () {
					var e = this.length;
					if (e % 8 != 0)
						throw new RangeError(
							"Buffer size must be a multiple of 64-bits"
						);
					for (var t = 0; t < e; t += 8)
						g(this, t, t + 7),
							g(this, t + 1, t + 6),
							g(this, t + 2, t + 5),
							g(this, t + 3, t + 4);
					return this;
				}),
				(l.prototype.toString = function () {
					var e = 0 | this.length;
					return 0 === e
						? ""
						: 0 === arguments.length
						? C(this, 0, e)
						: m.apply(this, arguments);
				}),
				(l.prototype.equals = function (e) {
					if (!l.isBuffer(e))
						throw new TypeError("Argument must be a Buffer");
					return this === e || 0 === l.compare(this, e);
				}),
				(l.prototype.inspect = function () {
					var e = "",
						a = t.INSPECT_MAX_BYTES;
					return (
						this.length > 0 &&
							((e = this.toString("hex", 0, a)
								.match(/.{2}/g)
								.join(" ")),
							this.length > a && (e += " ... ")),
						"<Buffer " + e + ">"
					);
				}),
				(l.prototype.compare = function (e, t, a, r, n) {
					if (!l.isBuffer(e))
						throw new TypeError("Argument must be a Buffer");
					if (
						(void 0 === t && (t = 0),
						void 0 === a && (a = e ? e.length : 0),
						void 0 === r && (r = 0),
						void 0 === n && (n = this.length),
						t < 0 || a > e.length || r < 0 || n > this.length)
					)
						throw new RangeError("out of range index");
					if (r >= n && t >= a) return 0;
					if (r >= n) return -1;
					if (t >= a) return 1;
					if (this === e) return 0;
					for (
						var i = (n >>>= 0) - (r >>>= 0),
							s = (a >>>= 0) - (t >>>= 0),
							o = Math.min(i, s),
							c = this.slice(r, n),
							u = e.slice(t, a),
							d = 0;
						d < o;
						++d
					)
						if (c[d] !== u[d]) {
							(i = c[d]), (s = u[d]);
							break;
						}
					return i < s ? -1 : s < i ? 1 : 0;
				}),
				(l.prototype.includes = function (e, t, a) {
					return -1 !== this.indexOf(e, t, a);
				}),
				(l.prototype.indexOf = function (e, t, a) {
					return b(this, e, t, a, !0);
				}),
				(l.prototype.lastIndexOf = function (e, t, a) {
					return b(this, e, t, a, !1);
				}),
				(l.prototype.write = function (e, t, a, r) {
					if (void 0 === t) (r = "utf8"), (a = this.length), (t = 0);
					else if (void 0 === a && "string" == typeof t)
						(r = t), (a = this.length), (t = 0);
					else {
						if (!isFinite(t))
							throw new Error(
								"Buffer.write(string, encoding, offset[, length]) is no longer supported"
							);
						(t |= 0),
							isFinite(a)
								? ((a |= 0), void 0 === r && (r = "utf8"))
								: ((r = a), (a = void 0));
					}
					var n = this.length - t;
					if (
						((void 0 === a || a > n) && (a = n),
						(e.length > 0 && (a < 0 || t < 0)) || t > this.length)
					)
						throw new RangeError(
							"Attempt to write outside buffer bounds"
						);
					r || (r = "utf8");
					for (var i = !1; ; )
						switch (r) {
							case "hex":
								return y(this, e, t, a);
							case "utf8":
							case "utf-8":
								return w(this, e, t, a);
							case "ascii":
								return T(this, e, t, a);
							case "latin1":
							case "binary":
								return _(this, e, t, a);
							case "base64":
								return k(this, e, t, a);
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
								return S(this, e, t, a);
							default:
								if (i)
									throw new TypeError(
										"Unknown encoding: " + r
									);
								(r = ("" + r).toLowerCase()), (i = !0);
						}
				}),
				(l.prototype.toJSON = function () {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0),
					};
				});
			var I = 4096;
			function x(e, t, a) {
				var r = "";
				a = Math.min(e.length, a);
				for (var n = t; n < a; ++n)
					r += String.fromCharCode(127 & e[n]);
				return r;
			}
			function A(e, t, a) {
				var r = "";
				a = Math.min(e.length, a);
				for (var n = t; n < a; ++n) r += String.fromCharCode(e[n]);
				return r;
			}
			function D(e, t, a) {
				var r = e.length;
				(!t || t < 0) && (t = 0), (!a || a < 0 || a > r) && (a = r);
				for (var n = "", i = t; i < a; ++i) n += U(e[i]);
				return n;
			}
			function O(e, t, a) {
				for (var r = e.slice(t, a), n = "", i = 0; i < r.length; i += 2)
					n += String.fromCharCode(r[i] + 256 * r[i + 1]);
				return n;
			}
			function M(e, t, a) {
				if (e % 1 != 0 || e < 0)
					throw new RangeError("offset is not uint");
				if (e + t > a)
					throw new RangeError(
						"Trying to access beyond buffer length"
					);
			}
			function P(e, t, a, r, n, i) {
				if (!l.isBuffer(e))
					throw new TypeError(
						'"buffer" argument must be a Buffer instance'
					);
				if (t > n || t < i)
					throw new RangeError('"value" argument is out of bounds');
				if (a + r > e.length)
					throw new RangeError("Index out of range");
			}
			function F(e, t, a, r) {
				t < 0 && (t = 65535 + t + 1);
				for (var n = 0, i = Math.min(e.length - a, 2); n < i; ++n)
					e[a + n] =
						(t & (255 << (8 * (r ? n : 1 - n)))) >>>
						(8 * (r ? n : 1 - n));
			}
			function B(e, t, a, r) {
				t < 0 && (t = 4294967295 + t + 1);
				for (var n = 0, i = Math.min(e.length - a, 4); n < i; ++n)
					e[a + n] = (t >>> (8 * (r ? n : 3 - n))) & 255;
			}
			function L(e, t, a, r, n, i) {
				if (a + r > e.length)
					throw new RangeError("Index out of range");
				if (a < 0) throw new RangeError("Index out of range");
			}
			function R(e, t, a, r, i) {
				return i || L(e, 0, a, 4), n.write(e, t, a, r, 23, 4), a + 4;
			}
			function N(e, t, a, r, i) {
				return i || L(e, 0, a, 8), n.write(e, t, a, r, 52, 8), a + 8;
			}
			(l.prototype.slice = function (e, t) {
				var a,
					r = this.length;
				if (
					((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
					(t = void 0 === t ? r : ~~t) < 0
						? (t += r) < 0 && (t = 0)
						: t > r && (t = r),
					t < e && (t = e),
					l.TYPED_ARRAY_SUPPORT)
				)
					(a = this.subarray(e, t)).__proto__ = l.prototype;
				else {
					var n = t - e;
					a = new l(n, void 0);
					for (var i = 0; i < n; ++i) a[i] = this[i + e];
				}
				return a;
			}),
				(l.prototype.readUIntLE = function (e, t, a) {
					(e |= 0), (t |= 0), a || M(e, t, this.length);
					for (var r = this[e], n = 1, i = 0; ++i < t && (n *= 256); )
						r += this[e + i] * n;
					return r;
				}),
				(l.prototype.readUIntBE = function (e, t, a) {
					(e |= 0), (t |= 0), a || M(e, t, this.length);
					for (var r = this[e + --t], n = 1; t > 0 && (n *= 256); )
						r += this[e + --t] * n;
					return r;
				}),
				(l.prototype.readUInt8 = function (e, t) {
					return t || M(e, 1, this.length), this[e];
				}),
				(l.prototype.readUInt16LE = function (e, t) {
					return (
						t || M(e, 2, this.length), this[e] | (this[e + 1] << 8)
					);
				}),
				(l.prototype.readUInt16BE = function (e, t) {
					return (
						t || M(e, 2, this.length), (this[e] << 8) | this[e + 1]
					);
				}),
				(l.prototype.readUInt32LE = function (e, t) {
					return (
						t || M(e, 4, this.length),
						(this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
							16777216 * this[e + 3]
					);
				}),
				(l.prototype.readUInt32BE = function (e, t) {
					return (
						t || M(e, 4, this.length),
						16777216 * this[e] +
							((this[e + 1] << 16) |
								(this[e + 2] << 8) |
								this[e + 3])
					);
				}),
				(l.prototype.readIntLE = function (e, t, a) {
					(e |= 0), (t |= 0), a || M(e, t, this.length);
					for (var r = this[e], n = 1, i = 0; ++i < t && (n *= 256); )
						r += this[e + i] * n;
					return r >= (n *= 128) && (r -= Math.pow(2, 8 * t)), r;
				}),
				(l.prototype.readIntBE = function (e, t, a) {
					(e |= 0), (t |= 0), a || M(e, t, this.length);
					for (
						var r = t, n = 1, i = this[e + --r];
						r > 0 && (n *= 256);

					)
						i += this[e + --r] * n;
					return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)), i;
				}),
				(l.prototype.readInt8 = function (e, t) {
					return (
						t || M(e, 1, this.length),
						128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
					);
				}),
				(l.prototype.readInt16LE = function (e, t) {
					t || M(e, 2, this.length);
					var a = this[e] | (this[e + 1] << 8);
					return 32768 & a ? 4294901760 | a : a;
				}),
				(l.prototype.readInt16BE = function (e, t) {
					t || M(e, 2, this.length);
					var a = this[e + 1] | (this[e] << 8);
					return 32768 & a ? 4294901760 | a : a;
				}),
				(l.prototype.readInt32LE = function (e, t) {
					return (
						t || M(e, 4, this.length),
						this[e] |
							(this[e + 1] << 8) |
							(this[e + 2] << 16) |
							(this[e + 3] << 24)
					);
				}),
				(l.prototype.readInt32BE = function (e, t) {
					return (
						t || M(e, 4, this.length),
						(this[e] << 24) |
							(this[e + 1] << 16) |
							(this[e + 2] << 8) |
							this[e + 3]
					);
				}),
				(l.prototype.readFloatLE = function (e, t) {
					return (
						t || M(e, 4, this.length), n.read(this, e, !0, 23, 4)
					);
				}),
				(l.prototype.readFloatBE = function (e, t) {
					return (
						t || M(e, 4, this.length), n.read(this, e, !1, 23, 4)
					);
				}),
				(l.prototype.readDoubleLE = function (e, t) {
					return (
						t || M(e, 8, this.length), n.read(this, e, !0, 52, 8)
					);
				}),
				(l.prototype.readDoubleBE = function (e, t) {
					return (
						t || M(e, 8, this.length), n.read(this, e, !1, 52, 8)
					);
				}),
				(l.prototype.writeUIntLE = function (e, t, a, r) {
					((e = +e), (t |= 0), (a |= 0), r) ||
						P(this, e, t, a, Math.pow(2, 8 * a) - 1, 0);
					var n = 1,
						i = 0;
					for (this[t] = 255 & e; ++i < a && (n *= 256); )
						this[t + i] = (e / n) & 255;
					return t + a;
				}),
				(l.prototype.writeUIntBE = function (e, t, a, r) {
					((e = +e), (t |= 0), (a |= 0), r) ||
						P(this, e, t, a, Math.pow(2, 8 * a) - 1, 0);
					var n = a - 1,
						i = 1;
					for (this[t + n] = 255 & e; --n >= 0 && (i *= 256); )
						this[t + n] = (e / i) & 255;
					return t + a;
				}),
				(l.prototype.writeUInt8 = function (e, t, a) {
					return (
						(e = +e),
						(t |= 0),
						a || P(this, e, t, 1, 255, 0),
						l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
						(this[t] = 255 & e),
						t + 1
					);
				}),
				(l.prototype.writeUInt16LE = function (e, t, a) {
					return (
						(e = +e),
						(t |= 0),
						a || P(this, e, t, 2, 65535, 0),
						l.TYPED_ARRAY_SUPPORT
							? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
							: F(this, e, t, !0),
						t + 2
					);
				}),
				(l.prototype.writeUInt16BE = function (e, t, a) {
					return (
						(e = +e),
						(t |= 0),
						a || P(this, e, t, 2, 65535, 0),
						l.TYPED_ARRAY_SUPPORT
							? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
							: F(this, e, t, !1),
						t + 2
					);
				}),
				(l.prototype.writeUInt32LE = function (e, t, a) {
					return (
						(e = +e),
						(t |= 0),
						a || P(this, e, t, 4, 4294967295, 0),
						l.TYPED_ARRAY_SUPPORT
							? ((this[t + 3] = e >>> 24),
							  (this[t + 2] = e >>> 16),
							  (this[t + 1] = e >>> 8),
							  (this[t] = 255 & e))
							: B(this, e, t, !0),
						t + 4
					);
				}),
				(l.prototype.writeUInt32BE = function (e, t, a) {
					return (
						(e = +e),
						(t |= 0),
						a || P(this, e, t, 4, 4294967295, 0),
						l.TYPED_ARRAY_SUPPORT
							? ((this[t] = e >>> 24),
							  (this[t + 1] = e >>> 16),
							  (this[t + 2] = e >>> 8),
							  (this[t + 3] = 255 & e))
							: B(this, e, t, !1),
						t + 4
					);
				}),
				(l.prototype.writeIntLE = function (e, t, a, r) {
					if (((e = +e), (t |= 0), !r)) {
						var n = Math.pow(2, 8 * a - 1);
						P(this, e, t, a, n - 1, -n);
					}
					var i = 0,
						s = 1,
						o = 0;
					for (this[t] = 255 & e; ++i < a && (s *= 256); )
						e < 0 && 0 === o && 0 !== this[t + i - 1] && (o = 1),
							(this[t + i] = (((e / s) >> 0) - o) & 255);
					return t + a;
				}),
				(l.prototype.writeIntBE = function (e, t, a, r) {
					if (((e = +e), (t |= 0), !r)) {
						var n = Math.pow(2, 8 * a - 1);
						P(this, e, t, a, n - 1, -n);
					}
					var i = a - 1,
						s = 1,
						o = 0;
					for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
						e < 0 && 0 === o && 0 !== this[t + i + 1] && (o = 1),
							(this[t + i] = (((e / s) >> 0) - o) & 255);
					return t + a;
				}),
				(l.prototype.writeInt8 = function (e, t, a) {
					return (
						(e = +e),
						(t |= 0),
						a || P(this, e, t, 1, 127, -128),
						l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
						e < 0 && (e = 255 + e + 1),
						(this[t] = 255 & e),
						t + 1
					);
				}),
				(l.prototype.writeInt16LE = function (e, t, a) {
					return (
						(e = +e),
						(t |= 0),
						a || P(this, e, t, 2, 32767, -32768),
						l.TYPED_ARRAY_SUPPORT
							? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
							: F(this, e, t, !0),
						t + 2
					);
				}),
				(l.prototype.writeInt16BE = function (e, t, a) {
					return (
						(e = +e),
						(t |= 0),
						a || P(this, e, t, 2, 32767, -32768),
						l.TYPED_ARRAY_SUPPORT
							? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
							: F(this, e, t, !1),
						t + 2
					);
				}),
				(l.prototype.writeInt32LE = function (e, t, a) {
					return (
						(e = +e),
						(t |= 0),
						a || P(this, e, t, 4, 2147483647, -2147483648),
						l.TYPED_ARRAY_SUPPORT
							? ((this[t] = 255 & e),
							  (this[t + 1] = e >>> 8),
							  (this[t + 2] = e >>> 16),
							  (this[t + 3] = e >>> 24))
							: B(this, e, t, !0),
						t + 4
					);
				}),
				(l.prototype.writeInt32BE = function (e, t, a) {
					return (
						(e = +e),
						(t |= 0),
						a || P(this, e, t, 4, 2147483647, -2147483648),
						e < 0 && (e = 4294967295 + e + 1),
						l.TYPED_ARRAY_SUPPORT
							? ((this[t] = e >>> 24),
							  (this[t + 1] = e >>> 16),
							  (this[t + 2] = e >>> 8),
							  (this[t + 3] = 255 & e))
							: B(this, e, t, !1),
						t + 4
					);
				}),
				(l.prototype.writeFloatLE = function (e, t, a) {
					return R(this, e, t, !0, a);
				}),
				(l.prototype.writeFloatBE = function (e, t, a) {
					return R(this, e, t, !1, a);
				}),
				(l.prototype.writeDoubleLE = function (e, t, a) {
					return N(this, e, t, !0, a);
				}),
				(l.prototype.writeDoubleBE = function (e, t, a) {
					return N(this, e, t, !1, a);
				}),
				(l.prototype.copy = function (e, t, a, r) {
					if (
						(a || (a = 0),
						r || 0 === r || (r = this.length),
						t >= e.length && (t = e.length),
						t || (t = 0),
						r > 0 && r < a && (r = a),
						r === a)
					)
						return 0;
					if (0 === e.length || 0 === this.length) return 0;
					if (t < 0)
						throw new RangeError("targetStart out of bounds");
					if (a < 0 || a >= this.length)
						throw new RangeError("sourceStart out of bounds");
					if (r < 0) throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length),
						e.length - t < r - a && (r = e.length - t + a);
					var n,
						i = r - a;
					if (this === e && a < t && t < r)
						for (n = i - 1; n >= 0; --n) e[n + t] = this[n + a];
					else if (i < 1e3 || !l.TYPED_ARRAY_SUPPORT)
						for (n = 0; n < i; ++n) e[n + t] = this[n + a];
					else
						Uint8Array.prototype.set.call(
							e,
							this.subarray(a, a + i),
							t
						);
					return i;
				}),
				(l.prototype.fill = function (e, t, a, r) {
					if ("string" == typeof e) {
						if (
							("string" == typeof t
								? ((r = t), (t = 0), (a = this.length))
								: "string" == typeof a &&
								  ((r = a), (a = this.length)),
							1 === e.length)
						) {
							var n = e.charCodeAt(0);
							n < 256 && (e = n);
						}
						if (void 0 !== r && "string" != typeof r)
							throw new TypeError("encoding must be a string");
						if ("string" == typeof r && !l.isEncoding(r))
							throw new TypeError("Unknown encoding: " + r);
					} else "number" == typeof e && (e &= 255);
					if (t < 0 || this.length < t || this.length < a)
						throw new RangeError("Out of range index");
					if (a <= t) return this;
					var i;
					if (
						((t >>>= 0),
						(a = void 0 === a ? this.length : a >>> 0),
						e || (e = 0),
						"number" == typeof e)
					)
						for (i = t; i < a; ++i) this[i] = e;
					else {
						var s = l.isBuffer(e) ? e : j(new l(e, r).toString()),
							o = s.length;
						for (i = 0; i < a - t; ++i) this[i + t] = s[i % o];
					}
					return this;
				});
			var z = /[^+\/0-9A-Za-z-_]/g;
			function U(e) {
				return e < 16 ? "0" + e.toString(16) : e.toString(16);
			}
			function j(e, t) {
				var a;
				t = t || 1 / 0;
				for (var r = e.length, n = null, i = [], s = 0; s < r; ++s) {
					if ((a = e.charCodeAt(s)) > 55295 && a < 57344) {
						if (!n) {
							if (a > 56319) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue;
							}
							if (s + 1 === r) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue;
							}
							n = a;
							continue;
						}
						if (a < 56320) {
							(t -= 3) > -1 && i.push(239, 191, 189), (n = a);
							continue;
						}
						a = 65536 + (((n - 55296) << 10) | (a - 56320));
					} else n && (t -= 3) > -1 && i.push(239, 191, 189);
					if (((n = null), a < 128)) {
						if ((t -= 1) < 0) break;
						i.push(a);
					} else if (a < 2048) {
						if ((t -= 2) < 0) break;
						i.push((a >> 6) | 192, (63 & a) | 128);
					} else if (a < 65536) {
						if ((t -= 3) < 0) break;
						i.push(
							(a >> 12) | 224,
							((a >> 6) & 63) | 128,
							(63 & a) | 128
						);
					} else {
						if (!(a < 1114112))
							throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						i.push(
							(a >> 18) | 240,
							((a >> 12) & 63) | 128,
							((a >> 6) & 63) | 128,
							(63 & a) | 128
						);
					}
				}
				return i;
			}
			function H(e) {
				return r.toByteArray(
					(function (e) {
						if (
							(e = (function (e) {
								return e.trim
									? e.trim()
									: e.replace(/^\s+|\s+$/g, "");
							})(e).replace(z, "")).length < 2
						)
							return "";
						for (; e.length % 4 != 0; ) e += "=";
						return e;
					})(e)
				);
			}
			function q(e, t, a, r) {
				for (
					var n = 0;
					n < r && !(n + a >= t.length || n >= e.length);
					++n
				)
					t[n + a] = e[n];
				return n;
			}
		}.call(this, a(11)));
	},
	function (e, t, a) {
		e.exports = (function (e) {
			function t(r) {
				if (a[r]) return a[r].exports;
				var n = (a[r] = { i: r, l: !1, exports: {} });
				return (
					e[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports
				);
			}
			var a = {};
			return (
				(t.m = e),
				(t.c = a),
				(t.i = function (e) {
					return e;
				}),
				(t.d = function (e, a, r) {
					t.o(e, a) ||
						Object.defineProperty(e, a, {
							configurable: !1,
							enumerable: !0,
							get: r,
						});
				}),
				(t.n = function (e) {
					var a =
						e && e.__esModule
							? function () {
									return e.default;
							  }
							: function () {
									return e;
							  };
					return t.d(a, "a", a), a;
				}),
				(t.o = function (e, t) {
					return Object.prototype.hasOwnProperty.call(e, t);
				}),
				(t.p = ""),
				t((t.s = 1))
			);
		})([
			function (e, t) {
				e.exports = function (e) {
					return (
						e.webpackPolyfill ||
							((e.deprecate = function () {}),
							(e.paths = []),
							e.children || (e.children = []),
							Object.defineProperty(e, "loaded", {
								enumerable: !0,
								get: function () {
									return e.l;
								},
							}),
							Object.defineProperty(e, "id", {
								enumerable: !0,
								get: function () {
									return e.i;
								},
							}),
							(e.webpackPolyfill = 1)),
						e
					);
				};
			},
			function (e, t, a) {
				"use strict";
				(function (e) {
					var a,
						r,
						n,
						i,
						s =
							"function" == typeof Symbol &&
							"symbol" == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											"function" == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? "symbol"
											: typeof e;
								  };
					(i = function () {
						return (function (e) {
							function t(r) {
								if (a[r]) return a[r].exports;
								var n = (a[r] = { i: r, l: !1, exports: {} });
								return (
									e[r].call(n.exports, n, n.exports, t),
									(n.l = !0),
									n.exports
								);
							}
							var a = {};
							return (
								(t.m = e),
								(t.c = a),
								(t.i = function (e) {
									return e;
								}),
								(t.d = function (e, a, r) {
									t.o(e, a) ||
										Object.defineProperty(e, a, {
											configurable: !1,
											enumerable: !0,
											get: r,
										});
								}),
								(t.n = function (e) {
									var a =
										e && e.__esModule
											? function () {
													return e.default;
											  }
											: function () {
													return e;
											  };
									return t.d(a, "a", a), a;
								}),
								(t.o = function (e, t) {
									return Object.prototype.hasOwnProperty.call(
										e,
										t
									);
								}),
								(t.p = ""),
								t((t.s = 0))
							);
						})([
							function (e, t, a) {
								function r(e, t) {
									var a = {};
									for (var r in e)
										t.indexOf(r) >= 0 ||
											(Object.prototype.hasOwnProperty.call(
												e,
												r
											) &&
												(a[r] = e[r]));
									return a;
								}
								Object.defineProperty(t, "__esModule", {
									value: !0,
								});
								var n =
										"function" == typeof Symbol &&
										"symbol" === s(Symbol.iterator)
											? function (e) {
													return void 0 === e
														? "undefined"
														: s(e);
											  }
											: function (e) {
													return e &&
														"function" ==
															typeof Symbol &&
														e.constructor ===
															Symbol &&
														e !== Symbol.prototype
														? "symbol"
														: void 0 === e
														? "undefined"
														: s(e);
											  },
									i =
										Object.assign ||
										function (e) {
											for (
												var t = 1;
												t < arguments.length;
												t++
											) {
												var a = arguments[t];
												for (var r in a)
													Object.prototype.hasOwnProperty.call(
														a,
														r
													) && (e[r] = a[r]);
											}
											return e;
										},
									o = { top: "top", bottom: "bottom" },
									l = {
										alertTime: 3,
										dateMonths: [
											"January",
											"February",
											"March",
											"April",
											"May",
											"June",
											"July",
											"August",
											"September",
											"October",
											"November",
											"December",
										],
										overlayClickDismiss: !0,
										overlayOpacity: 0.75,
										transitionCurve: "ease",
										transitionDuration: 0.3,
										transitionSelector: "all",
										classes: {
											container: "notie-container",
											textbox: "notie-textbox",
											textboxInner: "notie-textbox-inner",
											button: "notie-button",
											element: "notie-element",
											elementHalf: "notie-element-half",
											elementThird: "notie-element-third",
											overlay: "notie-overlay",
											backgroundSuccess:
												"notie-background-success",
											backgroundWarning:
												"notie-background-warning",
											backgroundError:
												"notie-background-error",
											backgroundInfo:
												"notie-background-info",
											backgroundNeutral:
												"notie-background-neutral",
											backgroundOverlay:
												"notie-background-overlay",
											alert: "notie-alert",
											inputField: "notie-input-field",
											selectChoiceRepeated:
												"notie-select-choice-repeated",
											dateSelectorInner:
												"notie-date-selector-inner",
											dateSelectorUp:
												"notie-date-selector-up",
										},
										ids: { overlay: "notie-overlay" },
										positions: {
											alert: o.top,
											force: o.top,
											confirm: o.top,
											input: o.top,
											select: o.bottom,
											date: o.top,
										},
									},
									c = (t.setOptions = function (e) {
										l = i({}, l, e, {
											classes: i(
												{},
												l.classes,
												e.classes
											),
											ids: i({}, l.ids, e.ids),
											positions: i(
												{},
												l.positions,
												e.positions
											),
										});
									}),
									u = function () {
										return new Promise(function (e) {
											return setTimeout(e, 0);
										});
									},
									d = function (e) {
										return new Promise(function (t) {
											return setTimeout(t, 1e3 * e);
										});
									},
									f = function () {
										document.activeElement &&
											document.activeElement.blur();
									},
									h = function () {
										return (
											"notie-" +
											"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
												/[xy]/g,
												function (e) {
													var t =
														(16 * Math.random()) |
														0;
													return (
														"x" === e
															? t
															: (3 & t) | 8
													).toString(16);
												}
											)
										);
									},
									p = {
										1: l.classes.backgroundSuccess,
										success: l.classes.backgroundSuccess,
										2: l.classes.backgroundWarning,
										warning: l.classes.backgroundWarning,
										3: l.classes.backgroundError,
										error: l.classes.backgroundError,
										4: l.classes.backgroundInfo,
										info: l.classes.backgroundInfo,
										5: l.classes.backgroundNeutral,
										neutral: l.classes.backgroundNeutral,
									},
									m = function () {
										return (
											l.transitionSelector +
											" " +
											l.transitionDuration +
											"s " +
											l.transitionCurve
										);
									},
									g = function (e) {
										return 13 === e.keyCode;
									},
									b = function (e) {
										return 27 === e.keyCode;
									},
									v = function (e, t) {
										e.classList.add(l.classes.container),
											(e.style[t] = "-10000px"),
											document.body.appendChild(e),
											(e.style[t] =
												"-" + e.offsetHeight + "px"),
											e.listener &&
												window.addEventListener(
													"keydown",
													e.listener
												),
											u().then(function () {
												(e.style.transition = m()),
													(e.style[t] = 0);
											});
									},
									y = function (e, t) {
										var a = document.getElementById(e);
										a &&
											((a.style[t] =
												"-" + a.offsetHeight + "px"),
											a.listener &&
												window.removeEventListener(
													"keydown",
													a.listener
												),
											d(l.transitionDuration).then(
												function () {
													a.parentNode &&
														a.parentNode.removeChild(
															a
														);
												}
											));
									},
									w = function (e, t) {
										var a = document.createElement("div");
										(a.id = l.ids.overlay),
											a.classList.add(l.classes.overlay),
											a.classList.add(
												l.classes.backgroundOverlay
											),
											(a.style.opacity = 0),
											e &&
												l.overlayClickDismiss &&
												(a.onclick = function () {
													y(e.id, t), T();
												}),
											document.body.appendChild(a),
											u().then(function () {
												(a.style.transition = m()),
													(a.style.opacity =
														l.overlayOpacity);
											});
									},
									T = function () {
										var e = document.getElementById(
											l.ids.overlay
										);
										(e.style.opacity = 0),
											d(l.transitionDuration).then(
												function () {
													e.parentNode &&
														e.parentNode.removeChild(
															e
														);
												}
											);
									},
									_ = (t.hideAlerts = function (e) {
										var t = document.getElementsByClassName(
											l.classes.alert
										);
										if (t.length) {
											for (var a = 0; a < t.length; a++) {
												var r = t[a];
												y(r.id, r.position);
											}
											e &&
												d(l.transitionDuration).then(
													function () {
														return e();
													}
												);
										}
									}),
									k = (t.alert = function (e) {
										var t = e.type,
											a = void 0 === t ? 4 : t,
											r = e.text,
											n = e.time,
											i = void 0 === n ? l.alertTime : n,
											s = e.stay,
											o = void 0 !== s && s,
											c = e.position,
											u =
												void 0 === c
													? l.positions.alert || u.top
													: c;
										f(), _();
										var m = document.createElement("div"),
											w = h();
										(m.id = w),
											(m.position = u),
											m.classList.add(l.classes.textbox),
											m.classList.add(p[a]),
											m.classList.add(l.classes.alert),
											(m.innerHTML =
												'<div class="' +
												l.classes.textboxInner +
												'">' +
												r +
												"</div>"),
											(m.onclick = function () {
												return y(w, u);
											}),
											(m.listener = function (e) {
												(g(e) || b(e)) && _();
											}),
											v(m, u),
											i && i < 1 && (i = 1),
											!o &&
												i &&
												d(i).then(function () {
													return y(w, u);
												});
									}),
									S = (t.force = function (e, t) {
										var a = e.type,
											r = void 0 === a ? 5 : a,
											n = e.text,
											i = e.buttonText,
											s = void 0 === i ? "OK" : i,
											o = e.callback,
											c = e.position,
											u =
												void 0 === c
													? l.positions.force || u.top
													: c;
										f(), _();
										var d = document.createElement("div"),
											m = h();
										d.id = m;
										var b = document.createElement("div");
										b.classList.add(l.classes.textbox),
											b.classList.add(
												l.classes.backgroundInfo
											),
											(b.innerHTML =
												'<div class="' +
												l.classes.textboxInner +
												'">' +
												n +
												"</div>");
										var k = document.createElement("div");
										k.classList.add(l.classes.button),
											k.classList.add(p[r]),
											(k.innerHTML = s),
											(k.onclick = function () {
												y(m, u),
													T(),
													o ? o() : t && t();
											}),
											d.appendChild(b),
											d.appendChild(k),
											(d.listener = function (e) {
												g(e) && k.click();
											}),
											v(d, u),
											w();
									}),
									E = (t.confirm = function (e, t, a) {
										var r = e.text,
											n = e.submitText,
											i = void 0 === n ? "Yes" : n,
											s = e.cancelText,
											o = void 0 === s ? "Cancel" : s,
											c = e.submitCallback,
											u = e.cancelCallback,
											d = e.position,
											p =
												void 0 === d
													? l.positions.confirm ||
													  p.top
													: d;
										f(), _();
										var m = document.createElement("div"),
											k = h();
										m.id = k;
										var S = document.createElement("div");
										S.classList.add(l.classes.textbox),
											S.classList.add(
												l.classes.backgroundInfo
											),
											(S.innerHTML =
												'<div class="' +
												l.classes.textboxInner +
												'">' +
												r +
												"</div>");
										var E = document.createElement("div");
										E.classList.add(l.classes.button),
											E.classList.add(
												l.classes.elementHalf
											),
											E.classList.add(
												l.classes.backgroundSuccess
											),
											(E.innerHTML = i),
											(E.onclick = function () {
												y(k, p),
													T(),
													c ? c() : t && t();
											});
										var C = document.createElement("div");
										C.classList.add(l.classes.button),
											C.classList.add(
												l.classes.elementHalf
											),
											C.classList.add(
												l.classes.backgroundError
											),
											(C.innerHTML = o),
											(C.onclick = function () {
												y(k, p),
													T(),
													u ? u() : a && a();
											}),
											m.appendChild(S),
											m.appendChild(E),
											m.appendChild(C),
											(m.listener = function (e) {
												g(e)
													? E.click()
													: b(e) && C.click();
											}),
											v(m, p),
											w(m, p);
									}),
									C = function (e, t, a) {
										var i = e.text,
											s = e.submitText,
											o = void 0 === s ? "Submit" : s,
											c = e.cancelText,
											u = void 0 === c ? "Cancel" : c,
											d = e.submitCallback,
											p = e.cancelCallback,
											m = e.position,
											k =
												void 0 === m
													? l.positions.input || k.top
													: m,
											S = r(e, [
												"text",
												"submitText",
												"cancelText",
												"submitCallback",
												"cancelCallback",
												"position",
											]);
										f(), _();
										var E = document.createElement("div"),
											C = h();
										E.id = C;
										var I = document.createElement("div");
										I.classList.add(l.classes.textbox),
											I.classList.add(
												l.classes.backgroundInfo
											),
											(I.innerHTML =
												'<div class="' +
												l.classes.textboxInner +
												'">' +
												i +
												"</div>");
										var x = document.createElement("input");
										x.classList.add(l.classes.inputField),
											x.setAttribute(
												"autocapitalize",
												S.autocapitalize || "none"
											),
											x.setAttribute(
												"autocomplete",
												S.autocomplete || "off"
											),
											x.setAttribute(
												"autocorrect",
												S.autocorrect || "off"
											),
											x.setAttribute(
												"autofocus",
												S.autofocus || "true"
											),
											x.setAttribute(
												"inputmode",
												S.inputmode || "verbatim"
											),
											x.setAttribute("max", S.max || ""),
											x.setAttribute(
												"maxlength",
												S.maxlength || ""
											),
											x.setAttribute("min", S.min || ""),
											x.setAttribute(
												"minlength",
												S.minlength || ""
											),
											x.setAttribute(
												"placeholder",
												S.placeholder || ""
											),
											x.setAttribute(
												"spellcheck",
												S.spellcheck || "default"
											),
											x.setAttribute(
												"step",
												S.step || "any"
											),
											x.setAttribute(
												"type",
												S.type || "text"
											),
											(x.value = S.value || ""),
											S.allowed &&
												(x.oninput = function () {
													var e = void 0;
													if (
														Array.isArray(S.allowed)
													) {
														for (
															var t = "",
																a = S.allowed,
																r = 0;
															r < a.length;
															r++
														)
															"an" === a[r]
																? (t +=
																		"0-9a-zA-Z")
																: "a" === a[r]
																? (t +=
																		"a-zA-Z")
																: "n" ===
																		a[r] &&
																  (t += "0-9"),
																"s" === a[r] &&
																	(t += " ");
														e = new RegExp(
															"[^" + t + "]",
															"g"
														);
													} else
														"object" ===
															n(S.allowed) &&
															(e = S.allowed);
													x.value = x.value.replace(
														e,
														""
													);
												});
										var A = document.createElement("div");
										A.classList.add(l.classes.button),
											A.classList.add(
												l.classes.elementHalf
											),
											A.classList.add(
												l.classes.backgroundSuccess
											),
											(A.innerHTML = o),
											(A.onclick = function () {
												y(C, k),
													T(),
													d
														? d(x.value)
														: t && t(x.value);
											});
										var D = document.createElement("div");
										D.classList.add(l.classes.button),
											D.classList.add(
												l.classes.elementHalf
											),
											D.classList.add(
												l.classes.backgroundError
											),
											(D.innerHTML = u),
											(D.onclick = function () {
												y(C, k),
													T(),
													p
														? p(x.value)
														: a && a(x.value);
											}),
											E.appendChild(I),
											E.appendChild(x),
											E.appendChild(A),
											E.appendChild(D),
											(E.listener = function (e) {
												g(e)
													? A.click()
													: b(e) && D.click();
											}),
											v(E, k),
											x.focus(),
											w(E, k);
									};
								t.input = C;
								var I = (t.select = function (e, t) {
										var a = e.text,
											r = e.cancelText,
											n = void 0 === r ? "Cancel" : r,
											i = e.cancelCallback,
											s = e.choices,
											o = e.position,
											c =
												void 0 === o
													? l.positions.select ||
													  c.top
													: o;
										f(), _();
										var u = document.createElement("div"),
											d = h();
										u.id = d;
										var m = document.createElement("div");
										m.classList.add(l.classes.textbox),
											m.classList.add(
												l.classes.backgroundInfo
											),
											(m.innerHTML =
												'<div class="' +
												l.classes.textboxInner +
												'">' +
												a +
												"</div>"),
											u.appendChild(m),
											s.forEach(function (e, t) {
												var a = e.type,
													r = void 0 === a ? 1 : a,
													n = e.text,
													i = e.handler,
													o =
														document.createElement(
															"div"
														);
												o.classList.add(p[r]),
													o.classList.add(
														l.classes.button
													),
													o.classList.add(
														l.classes.selectChoice
													);
												var f = s[t + 1];
												f && !f.type && (f.type = 1),
													f &&
														f.type === r &&
														o.classList.add(
															l.classes
																.selectChoiceRepeated
														),
													(o.innerHTML = n),
													(o.onclick = function () {
														y(d, c), T(), i();
													}),
													u.appendChild(o);
											});
										var g = document.createElement("div");
										g.classList.add(
											l.classes.backgroundNeutral
										),
											g.classList.add(l.classes.button),
											(g.innerHTML = n),
											(g.onclick = function () {
												y(d, c),
													T(),
													i ? i() : t && t();
											}),
											u.appendChild(g),
											(u.listener = function (e) {
												b(e) && g.click();
											}),
											v(u, c),
											w(u, c);
									}),
									x = (t.date = function (e, t, a) {
										var r = e.value,
											n = void 0 === r ? new Date() : r,
											i = e.submitText,
											s = void 0 === i ? "OK" : i,
											o = e.cancelText,
											c = void 0 === o ? "Cancel" : o,
											u = e.submitCallback,
											d = e.cancelCallback,
											p = e.position,
											m =
												void 0 === p
													? l.positions.date || m.top
													: p;
										f(), _();
										var k = "&#9662",
											S = document.createElement("div"),
											E = document.createElement("div"),
											C = document.createElement("div"),
											I = function (e) {
												(S.innerHTML =
													l.dateMonths[e.getMonth()]),
													(E.innerHTML = e.getDate()),
													(C.innerHTML =
														e.getFullYear());
											},
											x = function (e) {
												var t = new Date(
														n.getFullYear(),
														n.getMonth() + 1,
														0
													).getDate(),
													a = e.target.textContent
														.replace(/^0+/, "")
														.replace(/[^\d]/g, "")
														.slice(0, 2);
												Number(a) > t &&
													(a = t.toString()),
													(e.target.textContent = a),
													Number(a) < 1 && (a = "1"),
													n.setDate(Number(a));
											},
											A = function (e) {
												var t = e.target.textContent
													.replace(/^0+/, "")
													.replace(/[^\d]/g, "")
													.slice(0, 4);
												(e.target.textContent = t),
													n.setFullYear(Number(t));
											},
											D = function (e) {
												I(n);
											},
											O = function (e) {
												var t = new Date(
													n.getFullYear(),
													n.getMonth() + e + 1,
													0
												).getDate();
												n.getDate() > t && n.setDate(t),
													n.setMonth(
														n.getMonth() + e
													),
													I(n);
											},
											M = function (e) {
												n.setDate(n.getDate() + e),
													I(n);
											},
											P = function (e) {
												n.getFullYear() + e < 0
													? n.setFullYear(0)
													: n.setFullYear(
															n.getFullYear() + e
													  ),
													I(n);
											},
											F = document.createElement("div"),
											B = h();
										F.id = B;
										var L = document.createElement("div");
										L.classList.add(
											l.classes.backgroundInfo
										);
										var R = document.createElement("div");
										R.classList.add(
											l.classes.dateSelectorInner
										);
										var N = document.createElement("div");
										N.classList.add(l.classes.button),
											N.classList.add(
												l.classes.elementThird
											),
											N.classList.add(
												l.classes.dateSelectorUp
											),
											(N.innerHTML = k);
										var z = document.createElement("div");
										z.classList.add(l.classes.button),
											z.classList.add(
												l.classes.elementThird
											),
											z.classList.add(
												l.classes.dateSelectorUp
											),
											(z.innerHTML = k);
										var U = document.createElement("div");
										U.classList.add(l.classes.button),
											U.classList.add(
												l.classes.elementThird
											),
											U.classList.add(
												l.classes.dateSelectorUp
											),
											(U.innerHTML = k),
											S.classList.add(l.classes.element),
											S.classList.add(
												l.classes.elementThird
											),
											(S.innerHTML =
												l.dateMonths[n.getMonth()]),
											E.classList.add(l.classes.element),
											E.classList.add(
												l.classes.elementThird
											),
											E.setAttribute(
												"contentEditable",
												!0
											),
											E.addEventListener("input", x),
											E.addEventListener("blur", D),
											(E.innerHTML = n.getDate()),
											C.classList.add(l.classes.element),
											C.classList.add(
												l.classes.elementThird
											),
											C.setAttribute(
												"contentEditable",
												!0
											),
											C.addEventListener("input", A),
											C.addEventListener("blur", D),
											(C.innerHTML = n.getFullYear());
										var j = document.createElement("div");
										j.classList.add(l.classes.button),
											j.classList.add(
												l.classes.elementThird
											),
											(j.innerHTML = k);
										var H = document.createElement("div");
										H.classList.add(l.classes.button),
											H.classList.add(
												l.classes.elementThird
											),
											(H.innerHTML = k);
										var q = document.createElement("div");
										q.classList.add(l.classes.button),
											q.classList.add(
												l.classes.elementThird
											),
											(q.innerHTML = k),
											(N.onclick = function () {
												return O(1);
											}),
											(z.onclick = function () {
												return M(1);
											}),
											(U.onclick = function () {
												return P(1);
											}),
											(j.onclick = function () {
												return O(-1);
											}),
											(H.onclick = function () {
												return M(-1);
											}),
											(q.onclick = function () {
												return P(-1);
											});
										var W = document.createElement("div");
										W.classList.add(l.classes.button),
											W.classList.add(
												l.classes.elementHalf
											),
											W.classList.add(
												l.classes.backgroundSuccess
											),
											(W.innerHTML = s),
											(W.onclick = function () {
												y(B, m),
													T(),
													u ? u(n) : t && t(n);
											});
										var X = document.createElement("div");
										X.classList.add(l.classes.button),
											X.classList.add(
												l.classes.elementHalf
											),
											X.classList.add(
												l.classes.backgroundError
											),
											(X.innerHTML = c),
											(X.onclick = function () {
												y(B, m),
													T(),
													d ? d(n) : a && a(n);
											}),
											R.appendChild(N),
											R.appendChild(z),
											R.appendChild(U),
											R.appendChild(S),
											R.appendChild(E),
											R.appendChild(C),
											R.appendChild(j),
											R.appendChild(H),
											R.appendChild(q),
											L.appendChild(R),
											F.appendChild(L),
											F.appendChild(W),
											F.appendChild(X),
											(F.listener = function (e) {
												g(e)
													? W.click()
													: b(e) && X.click();
											}),
											v(F, m),
											w(F, m);
									});
								t.default = {
									alert: k,
									force: S,
									confirm: E,
									input: C,
									select: I,
									date: x,
									setOptions: c,
									hideAlerts: _,
								};
							},
						]);
					}),
						"object" === s(t) && "object" === s(e)
							? (e.exports = i())
							: ((r = []),
							  void 0 ===
									(n =
										"function" == typeof (a = i)
											? a.apply(t, r)
											: a) || (e.exports = n));
				}.call(t, a(0)(e)));
			},
		]);
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(5),
			n = a(71);
		class i {
			static findZero(e, t, a, r) {
				let n = t;
				if ("utf16" === r) {
					for (; 0 !== e[n] || 0 !== e[n + 1]; ) {
						if (n >= a) return a;
						n += 2;
					}
					return n;
				}
				for (; 0 !== e[n]; ) {
					if (n >= a) return a;
					n++;
				}
				return n;
			}
			static trimRightNull(e) {
				const t = e.indexOf("\0");
				return -1 === t ? e : e.substr(0, t);
			}
			static swapBytes(e) {
				const t = e.length;
				r.ok(0 == (1 & t), "Buffer length must be even");
				for (let a = 0; a < t; a += 2) {
					const t = e[a];
					(e[a] = e[a + 1]), (e[a + 1] = t);
				}
				return e;
			}
			static readUTF16String(e) {
				let t = 0;
				return (
					254 === e[0] && 255 === e[1]
						? ((e = i.swapBytes(e)), (t = 2))
						: 255 === e[0] && 254 === e[1] && (t = 2),
					e.toString("ucs2", t)
				);
			}
			static decodeString(e, t) {
				if (
					(255 === e[0] &&
						254 === e[1] &&
						254 === e[2] &&
						255 === e[3] &&
						(e = e.slice(2)),
					"utf16le" === t || "utf16" === t)
				)
					return i.readUTF16String(e);
				if ("utf8" === t) return e.toString("utf8");
				if ("iso-8859-1" === t) return n.Windows1292Decoder.decode(e);
				throw Error(t + " encoding is not supported!");
			}
			static stripNulls(e) {
				return (e = (e = e.replace(/^\x00+/g, "")).replace(
					/\x00+$/g,
					""
				));
			}
			static getBitAllignedNumber(e, t, a, r) {
				const n = a % 8;
				let s = e[t + ~~(a / 8)];
				s &= 255 >> n;
				const o = 8 - n,
					l = r - o;
				return (
					l < 0
						? (s >>= 8 - n - r)
						: l > 0 &&
						  ((s <<= l),
						  (s |= i.getBitAllignedNumber(e, t, a + o, l))),
					s
				);
			}
			static isBitSet(e, t, a) {
				return 1 === i.getBitAllignedNumber(e, t, a, 1);
			}
			static a2hex(e) {
				const t = [];
				for (let a = 0, r = e.length; a < r; a++) {
					const r = Number(e.charCodeAt(a)).toString(16);
					t.push(1 === r.length ? "0" + r : r);
				}
				return t.join(" ");
			}
		}
		function s(e) {
			return 10 * Math.log10(e);
		}
		function o(e) {
			return Math.pow(10, e / 10);
		}
		(t.default = i),
			(i.strtokBITSET = {
				get: (e, t, a) => 0 != (e[t] & (1 << a)),
				len: 1,
			}),
			(t.ratioToDb = s),
			(t.dbToRatio = o),
			(t.toRatio = function (e) {
				const t = e.split(" ").map((e) => e.trim().toLowerCase());
				if (t.length >= 1) {
					const e = parseFloat(t[0]);
					return 2 === t.length && "db" === t[1]
						? { dB: e, ratio: o(e) }
						: { dB: s(e), ratio: e };
				}
			});
	},
	function (e, t, a) {
		"use strict";
		(function (t) {
			var r = a(52);
			function n(e, t) {
				if (e === t) return 0;
				for (
					var a = e.length, r = t.length, n = 0, i = Math.min(a, r);
					n < i;
					++n
				)
					if (e[n] !== t[n]) {
						(a = e[n]), (r = t[n]);
						break;
					}
				return a < r ? -1 : r < a ? 1 : 0;
			}
			function i(e) {
				return t.Buffer && "function" == typeof t.Buffer.isBuffer
					? t.Buffer.isBuffer(e)
					: !(null == e || !e._isBuffer);
			}
			var s = a(53),
				o = Object.prototype.hasOwnProperty,
				l = Array.prototype.slice,
				c = "foo" === function () {}.name;
			function u(e) {
				return Object.prototype.toString.call(e);
			}
			function d(e) {
				return (
					!i(e) &&
					"function" == typeof t.ArrayBuffer &&
					("function" == typeof ArrayBuffer.isView
						? ArrayBuffer.isView(e)
						: !!e &&
						  (e instanceof DataView ||
								!!(
									e.buffer && e.buffer instanceof ArrayBuffer
								)))
				);
			}
			var f = (e.exports = v),
				h = /\s*function\s+([^\(\s]*)\s*/;
			function p(e) {
				if (s.isFunction(e)) {
					if (c) return e.name;
					var t = e.toString().match(h);
					return t && t[1];
				}
			}
			function m(e, t) {
				return "string" == typeof e
					? e.length < t
						? e
						: e.slice(0, t)
					: e;
			}
			function g(e) {
				if (c || !s.isFunction(e)) return s.inspect(e);
				var t = p(e);
				return "[Function" + (t ? ": " + t : "") + "]";
			}
			function b(e, t, a, r, n) {
				throw new f.AssertionError({
					message: a,
					actual: e,
					expected: t,
					operator: r,
					stackStartFunction: n,
				});
			}
			function v(e, t) {
				e || b(e, !0, t, "==", f.ok);
			}
			function y(e, t, a, r) {
				if (e === t) return !0;
				if (i(e) && i(t)) return 0 === n(e, t);
				if (s.isDate(e) && s.isDate(t))
					return e.getTime() === t.getTime();
				if (s.isRegExp(e) && s.isRegExp(t))
					return (
						e.source === t.source &&
						e.global === t.global &&
						e.multiline === t.multiline &&
						e.lastIndex === t.lastIndex &&
						e.ignoreCase === t.ignoreCase
					);
				if (
					(null !== e && "object" == typeof e) ||
					(null !== t && "object" == typeof t)
				) {
					if (
						d(e) &&
						d(t) &&
						u(e) === u(t) &&
						!(
							e instanceof Float32Array ||
							e instanceof Float64Array
						)
					)
						return (
							0 ===
							n(
								new Uint8Array(e.buffer),
								new Uint8Array(t.buffer)
							)
						);
					if (i(e) !== i(t)) return !1;
					var o = (r = r || {
						actual: [],
						expected: [],
					}).actual.indexOf(e);
					return (
						(-1 !== o && o === r.expected.indexOf(t)) ||
						(r.actual.push(e),
						r.expected.push(t),
						(function (e, t, a, r) {
							if (null == e || null == t) return !1;
							if (s.isPrimitive(e) || s.isPrimitive(t))
								return e === t;
							if (
								a &&
								Object.getPrototypeOf(e) !==
									Object.getPrototypeOf(t)
							)
								return !1;
							var n = w(e),
								i = w(t);
							if ((n && !i) || (!n && i)) return !1;
							if (n)
								return y((e = l.call(e)), (t = l.call(t)), a);
							var o,
								c,
								u = k(e),
								d = k(t);
							if (u.length !== d.length) return !1;
							for (
								u.sort(), d.sort(), c = u.length - 1;
								c >= 0;
								c--
							)
								if (u[c] !== d[c]) return !1;
							for (c = u.length - 1; c >= 0; c--)
								if (!y(e[(o = u[c])], t[o], a, r)) return !1;
							return !0;
						})(e, t, a, r))
					);
				}
				return a ? e === t : e == t;
			}
			function w(e) {
				return (
					"[object Arguments]" == Object.prototype.toString.call(e)
				);
			}
			function T(e, t) {
				if (!e || !t) return !1;
				if ("[object RegExp]" == Object.prototype.toString.call(t))
					return t.test(e);
				try {
					if (e instanceof t) return !0;
				} catch (e) {}
				return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
			}
			function _(e, t, a, r) {
				var n;
				if ("function" != typeof t)
					throw new TypeError('"block" argument must be a function');
				"string" == typeof a && ((r = a), (a = null)),
					(n = (function (e) {
						var t;
						try {
							e();
						} catch (e) {
							t = e;
						}
						return t;
					})(t)),
					(r =
						(a && a.name ? " (" + a.name + ")." : ".") +
						(r ? " " + r : ".")),
					e && !n && b(n, a, "Missing expected exception" + r);
				var i = "string" == typeof r,
					o = !e && n && !a;
				if (
					(((!e && s.isError(n) && i && T(n, a)) || o) &&
						b(n, a, "Got unwanted exception" + r),
					(e && n && a && !T(n, a)) || (!e && n))
				)
					throw n;
			}
			(f.AssertionError = function (e) {
				(this.name = "AssertionError"),
					(this.actual = e.actual),
					(this.expected = e.expected),
					(this.operator = e.operator),
					e.message
						? ((this.message = e.message),
						  (this.generatedMessage = !1))
						: ((this.message = (function (e) {
								return (
									m(g(e.actual), 128) +
									" " +
									e.operator +
									" " +
									m(g(e.expected), 128)
								);
						  })(this)),
						  (this.generatedMessage = !0));
				var t = e.stackStartFunction || b;
				if (Error.captureStackTrace) Error.captureStackTrace(this, t);
				else {
					var a = new Error();
					if (a.stack) {
						var r = a.stack,
							n = p(t),
							i = r.indexOf("\n" + n);
						if (i >= 0) {
							var s = r.indexOf("\n", i + 1);
							r = r.substring(s + 1);
						}
						this.stack = r;
					}
				}
			}),
				s.inherits(f.AssertionError, Error),
				(f.fail = b),
				(f.ok = v),
				(f.equal = function (e, t, a) {
					e != t && b(e, t, a, "==", f.equal);
				}),
				(f.notEqual = function (e, t, a) {
					e == t && b(e, t, a, "!=", f.notEqual);
				}),
				(f.deepEqual = function (e, t, a) {
					y(e, t, !1) || b(e, t, a, "deepEqual", f.deepEqual);
				}),
				(f.deepStrictEqual = function (e, t, a) {
					y(e, t, !0) ||
						b(e, t, a, "deepStrictEqual", f.deepStrictEqual);
				}),
				(f.notDeepEqual = function (e, t, a) {
					y(e, t, !1) && b(e, t, a, "notDeepEqual", f.notDeepEqual);
				}),
				(f.notDeepStrictEqual = function e(t, a, r) {
					y(t, a, !0) && b(t, a, r, "notDeepStrictEqual", e);
				}),
				(f.strictEqual = function (e, t, a) {
					e !== t && b(e, t, a, "===", f.strictEqual);
				}),
				(f.notStrictEqual = function (e, t, a) {
					e === t && b(e, t, a, "!==", f.notStrictEqual);
				}),
				(f.throws = function (e, t, a) {
					_(!0, e, t, a);
				}),
				(f.doesNotThrow = function (e, t, a) {
					_(!1, e, t, a);
				}),
				(f.ifError = function (e) {
					if (e) throw e;
				}),
				(f.strict = r(
					function e(t, a) {
						t || b(t, !0, a, "==", e);
					},
					f,
					{
						equal: f.strictEqual,
						deepEqual: f.deepStrictEqual,
						notEqual: f.notStrictEqual,
						notDeepEqual: f.notDeepStrictEqual,
					}
				)),
				(f.strict.strict = f.strict);
			var k =
				Object.keys ||
				function (e) {
					var t = [];
					for (var a in e) o.call(e, a) && t.push(a);
					return t;
				};
		}.call(this, a(11)));
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(4),
				n = /^[\w-©][\w-\x000-3]/;
			t.FourCcToken = {
				len: 4,
				get: (e, a) => {
					const i = e.toString("binary", a, a + t.FourCcToken.len);
					if (!i.match(n))
						throw new Error(
							"FourCC contains invalid characters: " +
								r.default.a2hex(i)
						);
					return i;
				},
				put: (t, a, r) => {
					const n = e.from(r, "binary");
					if (4 !== n.length) throw new Error("Invalid length");
					return n.copy(t, a);
				},
			};
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		t.BasicParser = class {
			init(e, t, a) {
				return (
					(this.metadata = e),
					(this.tokenizer = t),
					(this.options = a),
					this
				);
			}
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(5),
			n = a(19);
		class i {
			constructor(e, t) {
				(this.tagTypes = e), (this.tagMap = t);
			}
			static parseGenre(e) {
				const t = e
						.trim()
						.split(/\((.*?)\)/g)
						.filter((e) => "" !== e),
					a = [];
				for (let e of t)
					/^\d+$/.test(e) &&
						!isNaN(parseInt(e, 10)) &&
						(e = n.Genres[e]),
						a.push(e);
				return a.filter((e) => void 0 !== e).join("/");
			}
			static fixPictureMimeType(e) {
				switch (
					(r.ok(e, "pictureType should be defined"),
					(e = e.toLocaleLowerCase()))
				) {
					case "image/jpg":
						return "image/jpeg";
				}
				return e;
			}
			static toIntOrNull(e) {
				const t = parseInt(e, 10);
				return isNaN(t) ? null : t;
			}
			static normalizeTrack(e) {
				const t = e.toString().split("/");
				return {
					no: parseInt(t[0], 10) || null,
					of: parseInt(t[1], 10) || null,
				};
			}
			mapGenericTag(e, t) {
				(e = { id: e.id, value: e.value }), this.postMap(e, t);
				const a = this.getCommonName(e.id);
				return a ? { id: a, value: e.value } : null;
			}
			getCommonName(e) {
				return this.tagMap[e];
			}
			postMap(e, t) {}
		}
		(t.CommonTagMapper = i), (i.maxRatingScore = 1);
	},
	function (e, t) {
		var a,
			r,
			n = (e.exports = {});
		function i() {
			throw new Error("setTimeout has not been defined");
		}
		function s() {
			throw new Error("clearTimeout has not been defined");
		}
		function o(e) {
			if (a === setTimeout) return setTimeout(e, 0);
			if ((a === i || !a) && setTimeout)
				return (a = setTimeout), setTimeout(e, 0);
			try {
				return a(e, 0);
			} catch (t) {
				try {
					return a.call(null, e, 0);
				} catch (t) {
					return a.call(this, e, 0);
				}
			}
		}
		!(function () {
			try {
				a = "function" == typeof setTimeout ? setTimeout : i;
			} catch (e) {
				a = i;
			}
			try {
				r = "function" == typeof clearTimeout ? clearTimeout : s;
			} catch (e) {
				r = s;
			}
		})();
		var l,
			c = [],
			u = !1,
			d = -1;
		function f() {
			u &&
				l &&
				((u = !1),
				l.length ? (c = l.concat(c)) : (d = -1),
				c.length && h());
		}
		function h() {
			if (!u) {
				var e = o(f);
				u = !0;
				for (var t = c.length; t; ) {
					for (l = c, c = []; ++d < t; ) l && l[d].run();
					(d = -1), (t = c.length);
				}
				(l = null),
					(u = !1),
					(function (e) {
						if (r === clearTimeout) return clearTimeout(e);
						if ((r === s || !r) && clearTimeout)
							return (r = clearTimeout), clearTimeout(e);
						try {
							r(e);
						} catch (t) {
							try {
								return r.call(null, e);
							} catch (t) {
								return r.call(this, e);
							}
						}
					})(e);
			}
		}
		function p(e, t) {
			(this.fun = e), (this.array = t);
		}
		function m() {}
		(n.nextTick = function (e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var a = 1; a < arguments.length; a++)
					t[a - 1] = arguments[a];
			c.push(new p(e, t)), 1 !== c.length || u || o(h);
		}),
			(p.prototype.run = function () {
				this.fun.apply(null, this.array);
			}),
			(n.title = "browser"),
			(n.browser = !0),
			(n.env = {}),
			(n.argv = []),
			(n.version = ""),
			(n.versions = {}),
			(n.on = m),
			(n.addListener = m),
			(n.once = m),
			(n.off = m),
			(n.removeListener = m),
			(n.removeAllListeners = m),
			(n.emit = m),
			(n.prependListener = m),
			(n.prependOnceListener = m),
			(n.listeners = function (e) {
				return [];
			}),
			(n.binding = function (e) {
				throw new Error("process.binding is not supported");
			}),
			(n.cwd = function () {
				return "/";
			}),
			(n.chdir = function (e) {
				throw new Error("process.chdir is not supported");
			}),
			(n.umask = function () {
				return 0;
			});
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(49),
			n = a(59);
		var i = a(18);
		(t.EndOfStreamError = i.EndOfStreamError),
			(t.fromStream = function (e, t) {
				return new r.ReadStreamTokenizer(e, t);
			}),
			(t.fromBuffer = function (e) {
				return new n.BufferTokenizer(e);
			});
	},
	function (e, t) {
		var a;
		a = (function () {
			return this;
		})();
		try {
			a = a || new Function("return this")();
		} catch (e) {
			"object" == typeof window && (a = window);
		}
		e.exports = a;
	},
	function (e, t, a) {
		"use strict";
		var r = a(20),
			n =
				Object.keys ||
				function (e) {
					var t = [];
					for (var a in e) t.push(a);
					return t;
				};
		e.exports = d;
		var i = Object.create(a(17));
		i.inherits = a(14);
		var s = a(36),
			o = a(29);
		i.inherits(d, s);
		for (var l = n(o.prototype), c = 0; c < l.length; c++) {
			var u = l[c];
			d.prototype[u] || (d.prototype[u] = o.prototype[u]);
		}
		function d(e) {
			if (!(this instanceof d)) return new d(e);
			s.call(this, e),
				o.call(this, e),
				e && !1 === e.readable && (this.readable = !1),
				e && !1 === e.writable && (this.writable = !1),
				(this.allowHalfOpen = !0),
				e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
				this.once("end", f);
		}
		function f() {
			this.allowHalfOpen ||
				this._writableState.ended ||
				r.nextTick(h, this);
		}
		function h(e) {
			e.end();
		}
		Object.defineProperty(d.prototype, "writableHighWaterMark", {
			enumerable: !1,
			get: function () {
				return this._writableState.highWaterMark;
			},
		}),
			Object.defineProperty(d.prototype, "destroyed", {
				get: function () {
					return (
						void 0 !== this._readableState &&
						void 0 !== this._writableState &&
						this._readableState.destroyed &&
						this._writableState.destroyed
					);
				},
				set: function (e) {
					void 0 !== this._readableState &&
						void 0 !== this._writableState &&
						((this._readableState.destroyed = e),
						(this._writableState.destroyed = e));
				},
			}),
			(d.prototype._destroy = function (e, t) {
				this.push(null), this.end(), r.nextTick(t, e);
			});
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(1),
				n = a(34),
				i = a(10),
				s = a(5),
				o = a(4),
				l = a(7),
				c = a(72),
				u = a(0),
				d = r("music-metadata:parser:APEv2"),
				f = "APEv2",
				h = "APETAGEX";
			class p extends l.BasicParser {
				constructor() {
					super(...arguments), (this.ape = {});
				}
				static tryParseApeHeader(e, t, a) {
					const r = new p();
					return r.init(e, t, a), r.tryParseApeHeader();
				}
				static calculateDuration(e) {
					let t =
						e.totalFrames > 1
							? e.blocksPerFrame * (e.totalFrames - 1)
							: 0;
					return (t += e.finalFrameBlocks), t / e.sampleRate;
				}
				static async findApeFooterOffset(t, a) {
					const r = e.alloc(c.TagFooter.len);
					await t.randomRead(
						r,
						0,
						c.TagFooter.len,
						a - c.TagFooter.len
					);
					const n = c.TagFooter.get(r, 0);
					if ("APETAGEX" === n.ID)
						return (
							d("APE footer header at offset=" + a),
							{ footer: n, offset: a - n.size }
						);
				}
				static parseTagFooter(e, t, a) {
					const r = c.TagFooter.get(t, t.length - c.TagFooter.len);
					s.strictEqual(r.ID, h, "APEv2 Footer preamble"),
						i.fromBuffer(t);
					const n = new p();
					return n.init(e, i.fromBuffer(t), a), n.parseTags(r);
				}
				async tryParseApeHeader() {
					if (
						this.tokenizer.fileSize &&
						this.tokenizer.fileSize - this.tokenizer.position <
							c.TagFooter.len
					)
						return void d(
							"No APEv2 header found, end-of-file reached"
						);
					const t = await this.tokenizer.peekToken(c.TagFooter);
					if (t.ID === h)
						return (
							await this.tokenizer.ignore(c.TagFooter.len),
							this.parseTags(t)
						);
					if (
						(d(
							"APEv2 header not found at offset=" +
								this.tokenizer.position
						),
						this.tokenizer.fileSize)
					) {
						const t =
								this.tokenizer.fileSize -
								this.tokenizer.position,
							a = e.alloc(t);
						return (
							await this.tokenizer.readBuffer(a),
							p.parseTagFooter(this.metadata, a, this.options)
						);
					}
				}
				async parse() {
					const e = await this.tokenizer.readToken(
						c.DescriptorParser
					);
					s.strictEqual(e.ID, "MAC ", "descriptor.ID"),
						(this.ape.descriptor = e);
					const t = e.descriptorBytes - c.DescriptorParser.len,
						a = await (t > 0
							? this.parseDescriptorExpansion(t)
							: this.parseHeader());
					return (
						await this.tokenizer.ignore(a.forwardBytes),
						this.tryParseApeHeader()
					);
				}
				async parseTags(t) {
					const a = e.alloc(256);
					let r = t.size - c.TagFooter.len;
					d(
						`Parse APE tags at offset=${this.tokenizer.position}, size=${r}`
					);
					for (let i = 0; i < t.fields; i++) {
						if (r < c.TagItemHeader.len) {
							this.metadata.addWarning(
								`APEv2 Tag-header: ${
									t.fields - i
								} items remaining, but no more tag data to read.`
							);
							break;
						}
						const s = await this.tokenizer.readToken(
							c.TagItemHeader
						);
						(r -= c.TagItemHeader.len + s.size),
							await this.tokenizer.peekBuffer(
								a,
								0,
								Math.min(a.length, r)
							);
						let l = o.default.findZero(a, 0, a.length);
						const h = await this.tokenizer.readToken(
							new u.StringType(l, "ascii")
						);
						switch (
							(await this.tokenizer.ignore(1),
							(r -= h.length + 1),
							s.flags.dataType)
						) {
							case c.DataType.text_utf8: {
								const e = (
									await this.tokenizer.readToken(
										new u.StringType(s.size, "utf8")
									)
								).split(/\x00/g);
								for (const t of e)
									this.metadata.addTag(f, h, t);
								break;
							}
							case c.DataType.binary:
								if (this.options.skipCovers)
									await this.tokenizer.ignore(s.size);
								else {
									const t = e.alloc(s.size);
									await this.tokenizer.readBuffer(t),
										(l = o.default.findZero(
											t,
											0,
											t.length
										));
									const a = t.toString("utf8", 0, l),
										r = e.from(t.slice(l + 1)),
										i = n(r);
									if (i)
										if (0 === i.mime.indexOf("image/")) {
											const e = {
												description: a,
												data: r,
												format: i.mime,
											};
											this.metadata.addTag(f, h, e);
										} else
											d(
												"Unexpected binary tag of type': " +
													i.mime
											);
									else
										d(
											"Failed to determine file type for binary tag: " +
												h
										);
								}
								break;
							case c.DataType.external_info:
								d("Ignore external info " + h),
									await this.tokenizer.ignore(s.size);
								break;
							default:
								throw new Error(
									"Unexpected data-type: " + s.flags.dataType
								);
						}
					}
				}
				async parseDescriptorExpansion(e) {
					return await this.tokenizer.ignore(e), this.parseHeader();
				}
				async parseHeader() {
					const e = await this.tokenizer.readToken(c.Header);
					return (
						this.metadata.setFormat("lossless", !0),
						this.metadata.setFormat("container", "Monkey's Audio"),
						this.metadata.setFormat(
							"bitsPerSample",
							e.bitsPerSample
						),
						this.metadata.setFormat("sampleRate", e.sampleRate),
						this.metadata.setFormat("numberOfChannels", e.channel),
						this.metadata.setFormat(
							"duration",
							p.calculateDuration(e)
						),
						{
							forwardBytes:
								this.ape.descriptor.seekTableBytes +
								this.ape.descriptor.headerDataBytes +
								this.ape.descriptor.apeFrameDataBytes +
								this.ape.descriptor.terminatingDataBytes,
						}
					);
				}
			}
			t.APEv2Parser = p;
		}.call(this, a(2).Buffer));
	},
	function (e, t) {
		"function" == typeof Object.create
			? (e.exports = function (e, t) {
					(e.super_ = t),
						(e.prototype = Object.create(t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						}));
			  })
			: (e.exports = function (e, t) {
					e.super_ = t;
					var a = function () {};
					(a.prototype = t.prototype),
						(e.prototype = new a()),
						(e.prototype.constructor = e);
			  });
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(0),
				n = a(4),
				i = a(82),
				s = a(16);
			class o {
				static removeUnsyncBytes(e) {
					let t = 0,
						a = 0;
					for (; t < e.length - 1; )
						t !== a && (e[a] = e[t]),
							(t += 255 === e[t] && 0 === e[t + 1] ? 2 : 1),
							a++;
					return t < e.length && (e[a++] = e[t]), e.slice(0, a);
				}
				static readFrameHeader(e, t) {
					let a;
					switch (t) {
						case 2:
							a = {
								id: e.toString("ascii", 0, 3),
								length: r.UINT24_BE.get(e, 3),
							};
							break;
						case 3:
							a = {
								id: e.toString("ascii", 0, 4),
								length: r.UINT32_BE.get(e, 4),
								flags: o.readFrameFlags(e.slice(8, 10)),
							};
							break;
						case 4:
							a = {
								id: e.toString("ascii", 0, 4),
								length: s.UINT32SYNCSAFE.get(e, 4),
								flags: o.readFrameFlags(e.slice(8, 10)),
							};
							break;
						default:
							throw new Error("Unexpected majorVer: " + t);
					}
					return a;
				}
				static getFrameHeaderLength(e) {
					switch (e) {
						case 2:
							return 6;
						case 3:
						case 4:
							return 10;
						default:
							throw new Error("header versionIndex is incorrect");
					}
				}
				static readFrameFlags(e) {
					return {
						status: {
							tag_alter_preservation: n.default.strtokBITSET.get(
								e,
								0,
								6
							),
							file_alter_preservation: n.default.strtokBITSET.get(
								e,
								0,
								5
							),
							read_only: n.default.strtokBITSET.get(e, 0, 4),
						},
						format: {
							grouping_identity: n.default.strtokBITSET.get(
								e,
								1,
								7
							),
							compression: n.default.strtokBITSET.get(e, 1, 3),
							encryption: n.default.strtokBITSET.get(e, 1, 2),
							unsynchronisation: n.default.strtokBITSET.get(
								e,
								1,
								1
							),
							data_length_indicator: n.default.strtokBITSET.get(
								e,
								1,
								0
							),
						},
					};
				}
				static readFrameData(e, t, a, r) {
					switch (a) {
						case 2:
							return i.default.readData(e, t.id, a, r);
						case 3:
						case 4:
							return (
								t.flags.format.unsynchronisation &&
									(e = o.removeUnsyncBytes(e)),
								t.flags.format.data_length_indicator &&
									(e = e.slice(4, e.length)),
								i.default.readData(e, t.id, a, r)
							);
						default:
							throw new Error("Unexpected majorVer: " + a);
					}
				}
				static makeDescriptionTagName(e, t) {
					return e + (t ? ":" + t : "");
				}
				async parse(e, t, a) {
					(this.tokenizer = t),
						(this.metadata = e),
						(this.options = a);
					const r = await this.tokenizer.readToken(s.ID3v2Header);
					if ("ID3" !== r.fileIdentifier)
						throw new Error(
							"expected ID3-header file-identifier 'ID3' was not found"
						);
					return (
						(this.id3Header = r),
						(this.headerType = "ID3v2." + r.version.major),
						r.flags.isExtendedHeader
							? this.parseExtendedHeader()
							: this.parseId3Data(r.size)
					);
				}
				async parseExtendedHeader() {
					const e = await this.tokenizer.readToken(s.ExtendedHeader),
						t = e.size - s.ExtendedHeader.len;
					return t > 0
						? this.parseExtendedHeaderData(t, e.size)
						: this.parseId3Data(this.id3Header.size - e.size);
				}
				async parseExtendedHeaderData(t, a) {
					const r = e.alloc(t);
					return (
						await this.tokenizer.readBuffer(r, 0, t),
						this.parseId3Data(this.id3Header.size - a)
					);
				}
				async parseId3Data(t) {
					const a = e.alloc(t);
					await this.tokenizer.readBuffer(a, 0, t);
					for (const e of this.parseMetadata(a))
						if ("TXXX" === e.id)
							for (const t of e.value.text)
								this.addTag(
									o.makeDescriptionTagName(
										e.id,
										e.value.description
									),
									t
								);
						else if ("COM" === e.id)
							for (const t of e.value)
								this.addTag(
									o.makeDescriptionTagName(
										e.id,
										t.description
									),
									t.text
								);
						else if (Array.isArray(e.value))
							for (const t of e.value) this.addTag(e.id, t);
						else this.addTag(e.id, e.value);
				}
				addTag(e, t) {
					this.metadata.addTag(this.headerType, e, t);
				}
				parseMetadata(e) {
					let t = 0;
					const a = [];
					for (; t !== e.length; ) {
						const r = o.getFrameHeaderLength(
							this.id3Header.version.major
						);
						if (t + r > e.length) {
							this.metadata.addWarning(
								"Illegal ID3v2 tag length"
							);
							break;
						}
						const n = e.slice(t, (t += r)),
							i = o.readFrameHeader(
								n,
								this.id3Header.version.major
							);
						if (
							"" === i.id ||
							"\0\0\0\0" === i.id ||
							-1 === "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(i.id[0])
						)
							break;
						const s = e.slice(t, (t += i.length)),
							l = o.readFrameData(
								s,
								i,
								this.id3Header.version.major,
								!this.options.skipCovers
							);
						a.push({ id: i.id, value: l });
					}
					return a;
				}
			}
			t.ID3v2Parser = o;
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(4);
		!(function (e) {
			(e[(e.Other = 0)] = "Other"),
				(e[(e["32x32 pixels 'file icon' (PNG only)"] = 1)] =
					"32x32 pixels 'file icon' (PNG only)"),
				(e[(e["Other file icon"] = 2)] = "Other file icon"),
				(e[(e["Cover (front)"] = 3)] = "Cover (front)"),
				(e[(e["Cover (back)"] = 4)] = "Cover (back)"),
				(e[(e["Leaflet page"] = 5)] = "Leaflet page"),
				(e[(e["Media (e.g. label side of CD)"] = 6)] =
					"Media (e.g. label side of CD)"),
				(e[(e["Lead artist/lead performer/soloist"] = 7)] =
					"Lead artist/lead performer/soloist"),
				(e[(e["Artist/performer"] = 8)] = "Artist/performer"),
				(e[(e.Conductor = 9)] = "Conductor"),
				(e[(e["Band/Orchestra"] = 10)] = "Band/Orchestra"),
				(e[(e.Composer = 11)] = "Composer"),
				(e[(e["Lyricist/text writer"] = 12)] = "Lyricist/text writer"),
				(e[(e["Recording Location"] = 13)] = "Recording Location"),
				(e[(e["During recording"] = 14)] = "During recording"),
				(e[(e["During performance"] = 15)] = "During performance"),
				(e[(e["Movie/video screen capture"] = 16)] =
					"Movie/video screen capture"),
				(e[(e["A bright coloured fish"] = 17)] =
					"A bright coloured fish"),
				(e[(e.Illustration = 18)] = "Illustration"),
				(e[(e["Band/artist logotype"] = 19)] = "Band/artist logotype"),
				(e[(e["Publisher/Studio logotype"] = 20)] =
					"Publisher/Studio logotype");
		})(t.AttachedPictureType || (t.AttachedPictureType = {})),
			(t.UINT32SYNCSAFE = {
				get: (e, t) =>
					(127 & e[t + 3]) |
					(e[t + 2] << 7) |
					(e[t + 1] << 14) |
					(e[t] << 21),
				len: 4,
			}),
			(t.ID3v2Header = {
				len: 10,
				get: (e, a) => ({
					fileIdentifier: new r.StringType(3, "ascii").get(e, a),
					version: {
						major: r.INT8.get(e, a + 3),
						revision: r.INT8.get(e, a + 4),
					},
					flags: {
						raw: r.INT8.get(e, a + 4),
						unsynchronisation: n.default.strtokBITSET.get(
							e,
							a + 5,
							7
						),
						isExtendedHeader: n.default.strtokBITSET.get(
							e,
							a + 5,
							6
						),
						expIndicator: n.default.strtokBITSET.get(e, a + 5, 5),
						footer: n.default.strtokBITSET.get(e, a + 5, 4),
					},
					size: t.UINT32SYNCSAFE.get(e, a + 6),
				}),
			}),
			(t.ExtendedHeader = {
				len: 10,
				get: (e, t) => ({
					size: r.UINT32_BE.get(e, t),
					extendedFlags: r.UINT16_BE.get(e, t + 4),
					sizeOfPadding: r.UINT32_BE.get(e, t + 6),
					crcDataPresent: n.default.strtokBITSET.get(e, t + 4, 31),
				}),
			}),
			(t.TextEncodingToken = {
				len: 1,
				get: (e, t) => {
					switch (e.readUInt8(t)) {
						case 0:
							return { encoding: "iso-8859-1" };
						case 1:
							return { encoding: "utf16", bom: !0 };
						case 2:
							return { encoding: "utf16", bom: !1 };
						case 3:
						default:
							return { encoding: "utf8", bom: !1 };
					}
				},
			});
	},
	function (e, t, a) {
		(function (e) {
			function a(e) {
				return Object.prototype.toString.call(e);
			}
			(t.isArray = function (e) {
				return Array.isArray
					? Array.isArray(e)
					: "[object Array]" === a(e);
			}),
				(t.isBoolean = function (e) {
					return "boolean" == typeof e;
				}),
				(t.isNull = function (e) {
					return null === e;
				}),
				(t.isNullOrUndefined = function (e) {
					return null == e;
				}),
				(t.isNumber = function (e) {
					return "number" == typeof e;
				}),
				(t.isString = function (e) {
					return "string" == typeof e;
				}),
				(t.isSymbol = function (e) {
					return "symbol" == typeof e;
				}),
				(t.isUndefined = function (e) {
					return void 0 === e;
				}),
				(t.isRegExp = function (e) {
					return "[object RegExp]" === a(e);
				}),
				(t.isObject = function (e) {
					return "object" == typeof e && null !== e;
				}),
				(t.isDate = function (e) {
					return "[object Date]" === a(e);
				}),
				(t.isError = function (e) {
					return "[object Error]" === a(e) || e instanceof Error;
				}),
				(t.isFunction = function (e) {
					return "function" == typeof e;
				}),
				(t.isPrimitive = function (e) {
					return (
						null === e ||
						"boolean" == typeof e ||
						"number" == typeof e ||
						"string" == typeof e ||
						"symbol" == typeof e ||
						void 0 === e
					);
				}),
				(t.isBuffer = e.isBuffer);
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(5),
			n = a(33);
		var i = a(33);
		t.EndOfStreamError = i.EndOfStreamError;
		class s {
			constructor() {
				this.promise = new Promise((e, t) => {
					(this.reject = t), (this.resolve = e);
				});
			}
		}
		t.StreamReader = class {
			constructor(e) {
				if (
					((this.s = e),
					(this.endOfStream = !1),
					(this.peekQueue = []),
					!e.read || !e.once)
				)
					throw new Error("Expected an instance of stream.Readable");
				this.s.once("end", () => this.reject(new n.EndOfStreamError())),
					this.s.once("error", (e) => this.reject(e)),
					this.s.once("close", () =>
						this.reject(new Error("Stream closed"))
					);
			}
			async peek(e, t, a) {
				const r = await this.read(e, t, a);
				return this.peekQueue.push(e.slice(t, t + r)), r;
			}
			async read(e, t, a) {
				if (0 === a) return 0;
				if (0 === this.peekQueue.length && this.endOfStream)
					throw new n.EndOfStreamError();
				let r = a,
					i = 0;
				for (; this.peekQueue.length > 0 && r > 0; ) {
					const a = this.peekQueue.pop(),
						n = Math.min(a.length, r);
					a.copy(e, t + i, 0, n),
						(i += n),
						(r -= n),
						n < a.length && this.peekQueue.push(a.slice(n));
				}
				for (; r > 0 && !this.endOfStream; ) {
					const a = Math.min(r, 1048576),
						n = await this._read(e, t + i, a);
					if (((i += n), n < a)) break;
					r -= n;
				}
				return i;
			}
			async _read(e, t, a) {
				r.ok(!this.request, "Concurrent read operation?");
				const n = this.s.read(a);
				return n
					? (n.copy(e, t), n.length)
					: ((this.request = {
							buffer: e,
							offset: t,
							length: a,
							deferred: new s(),
					  }),
					  this.s.once("readable", () => {
							this.tryRead();
					  }),
					  this.request.deferred.promise.then(
							(e) => ((this.request = null), e),
							(e) => {
								throw ((this.request = null), e);
							}
					  ));
			}
			tryRead() {
				const e = this.s.read(this.request.length);
				e
					? (e.copy(this.request.buffer, this.request.offset),
					  this.request.deferred.resolve(e.length))
					: this.s.once("readable", () => {
							this.tryRead();
					  });
			}
			reject(e) {
				(this.endOfStream = !0),
					this.request &&
						(this.request.deferred.reject(e),
						(this.request = null));
			}
		};
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(1),
				n = a(4),
				i = a(0),
				s = a(7),
				o = a(13),
				l = r("music-metadata:parser:ID3v1");
			t.Genres = [
				"Blues",
				"Classic Rock",
				"Country",
				"Dance",
				"Disco",
				"Funk",
				"Grunge",
				"Hip-Hop",
				"Jazz",
				"Metal",
				"New Age",
				"Oldies",
				"Other",
				"Pop",
				"R&B",
				"Rap",
				"Reggae",
				"Rock",
				"Techno",
				"Industrial",
				"Alternative",
				"Ska",
				"Death Metal",
				"Pranks",
				"Soundtrack",
				"Euro-Techno",
				"Ambient",
				"Trip-Hop",
				"Vocal",
				"Jazz+Funk",
				"Fusion",
				"Trance",
				"Classical",
				"Instrumental",
				"Acid",
				"House",
				"Game",
				"Sound Clip",
				"Gospel",
				"Noise",
				"Alt. Rock",
				"Bass",
				"Soul",
				"Punk",
				"Space",
				"Meditative",
				"Instrumental Pop",
				"Instrumental Rock",
				"Ethnic",
				"Gothic",
				"Darkwave",
				"Techno-Industrial",
				"Electronic",
				"Pop-Folk",
				"Eurodance",
				"Dream",
				"Southern Rock",
				"Comedy",
				"Cult",
				"Gangsta Rap",
				"Top 40",
				"Christian Rap",
				"Pop/Funk",
				"Jungle",
				"Native American",
				"Cabaret",
				"New Wave",
				"Psychedelic",
				"Rave",
				"Showtunes",
				"Trailer",
				"Lo-Fi",
				"Tribal",
				"Acid Punk",
				"Acid Jazz",
				"Polka",
				"Retro",
				"Musical",
				"Rock & Roll",
				"Hard Rock",
				"Folk",
				"Folk/Rock",
				"National Folk",
				"Swing",
				"Fast-Fusion",
				"Bebob",
				"Latin",
				"Revival",
				"Celtic",
				"Bluegrass",
				"Avantgarde",
				"Gothic Rock",
				"Progressive Rock",
				"Psychedelic Rock",
				"Symphonic Rock",
				"Slow Rock",
				"Big Band",
				"Chorus",
				"Easy Listening",
				"Acoustic",
				"Humour",
				"Speech",
				"Chanson",
				"Opera",
				"Chamber Music",
				"Sonata",
				"Symphony",
				"Booty Bass",
				"Primus",
				"Porn Groove",
				"Satire",
				"Slow Jam",
				"Club",
				"Tango",
				"Samba",
				"Folklore",
				"Ballad",
				"Power Ballad",
				"Rhythmic Soul",
				"Freestyle",
				"Duet",
				"Punk Rock",
				"Drum Solo",
				"A Cappella",
				"Euro-House",
				"Dance Hall",
				"Goa",
				"Drum & Bass",
				"Club-House",
				"Hardcore",
				"Terror",
				"Indie",
				"BritPop",
				"Negerpunk",
				"Polsk Punk",
				"Beat",
				"Christian Gangsta Rap",
				"Heavy Metal",
				"Black Metal",
				"Crossover",
				"Contemporary Christian",
				"Christian Rock",
				"Merengue",
				"Salsa",
				"Thrash Metal",
				"Anime",
				"JPop",
				"Synthpop",
				"Abstract",
				"Art Rock",
				"Baroque",
				"Bhangra",
				"Big Beat",
				"Breakbeat",
				"Chillout",
				"Downtempo",
				"Dub",
				"EBM",
				"Eclectic",
				"Electro",
				"Electroclash",
				"Emo",
				"Experimental",
				"Garage",
				"Global",
				"IDM",
				"Illbient",
				"Industro-Goth",
				"Jam Band",
				"Krautrock",
				"Leftfield",
				"Lounge",
				"Math Rock",
				"New Romantic",
				"Nu-Breakz",
				"Post-Punk",
				"Post-Rock",
				"Psytrance",
				"Shoegaze",
				"Space Rock",
				"Trop Rock",
				"World Music",
				"Neoclassical",
				"Audiobook",
				"Audio Theatre",
				"Neue Deutsche Welle",
				"Podcast",
				"Indie Rock",
				"G-Funk",
				"Dubstep",
				"Garage Rock",
				"Psybient",
			];
			const c = {
				len: 128,
				get: (e, t) => {
					const a = new u(3).get(e, t);
					return "TAG" === a
						? {
								header: a,
								title: new u(30).get(e, t + 3),
								artist: new u(30).get(e, t + 33),
								album: new u(30).get(e, t + 63),
								year: new u(4).get(e, t + 93),
								comment: new u(28).get(e, t + 97),
								zeroByte: i.UINT8.get(e, t + 127),
								track: i.UINT8.get(e, t + 126),
								genre: i.UINT8.get(e, t + 127),
						  }
						: null;
				},
			};
			class u extends i.StringType {
				constructor(e) {
					super(e, "binary");
				}
				get(e, t) {
					let a = super.get(e, t);
					return (
						(a = n.default.trimRightNull(a)),
						(a = a.trim()),
						a.length > 0 ? a : void 0
					);
				}
			}
			class d extends s.BasicParser {
				static getGenre(e) {
					if (e < t.Genres.length) return t.Genres[e];
				}
				async parse() {
					if (!this.tokenizer.fileSize)
						return void l(
							"Skip checking for ID3v1 because the file-size is unknown"
						);
					if (this.options.apeHeader) {
						this.tokenizer.ignore(
							this.options.apeHeader.offset -
								this.tokenizer.position
						);
						const e = new o.APEv2Parser();
						e.init(this.metadata, this.tokenizer, this.options),
							await e.parseTags(this.options.apeHeader.footer);
					}
					const e = this.tokenizer.fileSize - c.len;
					if (this.tokenizer.position > e)
						return void l("Already consumed the last 128 bytes");
					const t = await this.tokenizer.readToken(c, e);
					if (t) {
						l(
							"ID3v1 header found at: pos=%s",
							this.tokenizer.fileSize - c.len
						);
						for (const e of [
							"title",
							"artist",
							"album",
							"comment",
							"track",
							"year",
						])
							t[e] && "" !== t[e] && this.addTag(e, t[e]);
						const e = d.getGenre(t.genre);
						e && this.addTag("genre", e);
					} else
						l(
							"ID3v1 header not found at: pos=%s",
							this.tokenizer.fileSize - c.len
						);
				}
				addTag(e, t) {
					this.metadata.addTag("ID3v1", e, t);
				}
			}
			(t.ID3v1Parser = d),
				(t.hasID3v1Header = async function (t) {
					if (t.fileSize >= 128) {
						const a = e.alloc(3);
						return (
							await t.randomRead(
								a,
								0,
								a.length,
								t.fileSize - 128
							),
							"TAG" === a.toString("binary")
						);
					}
					return !1;
				});
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		(function (t) {
			void 0 === t ||
			!t.version ||
			0 === t.version.indexOf("v0.") ||
			(0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8."))
				? (e.exports = {
						nextTick: function (e, a, r, n) {
							if ("function" != typeof e)
								throw new TypeError(
									'"callback" argument must be a function'
								);
							var i,
								s,
								o = arguments.length;
							switch (o) {
								case 0:
								case 1:
									return t.nextTick(e);
								case 2:
									return t.nextTick(function () {
										e.call(null, a);
									});
								case 3:
									return t.nextTick(function () {
										e.call(null, a, r);
									});
								case 4:
									return t.nextTick(function () {
										e.call(null, a, r, n);
									});
								default:
									for (
										i = new Array(o - 1), s = 0;
										s < i.length;

									)
										i[s++] = arguments[s];
									return t.nextTick(function () {
										e.apply(null, i);
									});
							}
						},
				  })
				: (e.exports = t);
		}.call(this, a(9)));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(10),
			n = a(16),
			i = a(15),
			s = a(19),
			o = a(1),
			l = a(7),
			c = o("music-metadata:parser:ID3");
		class u extends l.BasicParser {
			constructor() {
				super(...arguments), (this.id3parser = new i.ID3v2Parser());
			}
			static async startsWithID3v2Header(e) {
				return (
					"ID3" === (await e.peekToken(n.ID3v2Header)).fileIdentifier
				);
			}
			async parse() {
				try {
					await this.parseID3v2();
				} catch (e) {
					if (!(e instanceof r.EndOfStreamError)) throw e;
					c("End-of-stream");
				}
			}
			finalize() {}
			async parseID3v2() {
				if (
					(await this.tryReadId3v2Headers(),
					c(
						"End of ID3v2 header, go to MPEG-parser: pos=%s",
						this.tokenizer.position
					),
					await this._parse(),
					this.options.skipPostHeaders && this.metadata.hasAny())
				)
					this.finalize();
				else {
					const e = new s.ID3v1Parser();
					await e
						.init(this.metadata, this.tokenizer, this.options)
						.parse(),
						this.finalize();
				}
			}
			async tryReadId3v2Headers() {
				if (
					"ID3" ===
					(await this.tokenizer.peekToken(n.ID3v2Header))
						.fileIdentifier
				)
					return (
						c(
							"Found ID3v2 header, pos=%s",
							this.tokenizer.position
						),
						await this.id3parser.parse(
							this.metadata,
							this.tokenizer,
							this.options
						),
						this.tryReadId3v2Headers()
					);
			}
		}
		t.AbstractID3Parser = u;
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(0),
				n = a(1),
				i = a(43),
				s = a(42),
				o = n("music-metadata:parser:ogg:vorbis1");
			t.VorbisParser = class {
				constructor(e, t) {
					(this.metadata = e),
						(this.options = t),
						(this.pageSegments = []);
				}
				parsePage(t, a) {
					if (t.headerType.firstPage) this.parseFirstPage(t, a);
					else {
						if (t.headerType.continued) {
							if (0 === this.pageSegments.length)
								throw new Error(
									"Cannot continue on previous page"
								);
							this.pageSegments.push(a);
						}
						if (t.headerType.lastPage || !t.headerType.continued) {
							if (this.pageSegments.length > 0) {
								const t = e.concat(this.pageSegments);
								this.parseFullPage(t);
							}
							this.pageSegments = t.headerType.lastPage
								? []
								: [a];
						}
					}
					t.headerType.lastPage && this.calculateDuration(t);
				}
				flush() {
					this.parseFullPage(e.concat(this.pageSegments));
				}
				parseUserComment(e, t) {
					const a = new i.VorbisDecoder(e, t).parseUserComment();
					return this.addTag(a.key, a.value), a.len;
				}
				addTag(e, t) {
					if (
						"METADATA_BLOCK_PICTURE" === e &&
						"string" == typeof t
					) {
						if (this.options.skipCovers)
							return void o("Ignore picture");
						(t = s.VorbisPictureToken.fromBase64(t)),
							o(`Push picture: id=${e}, format=${t.format}`);
					} else o(`Push tag: id=${e}, value=${t}`);
					this.metadata.addTag("vorbis", e, t);
				}
				parseFirstPage(e, t) {
					this.metadata.setFormat("codec", "Vorbis I"),
						o("Parse first page");
					const a = s.CommonHeader.get(t, 0);
					if ("vorbis" !== a.vorbis)
						throw new Error("Metadata does not look like Vorbis");
					if (1 !== a.packetType)
						throw new Error(
							"First Ogg page should be type 1: the identification header"
						);
					{
						const e = s.IdentificationHeader.get(
							t,
							s.CommonHeader.len
						);
						this.metadata.setFormat("sampleRate", e.sampleRate),
							this.metadata.setFormat(
								"bitrate",
								e.bitrateNominal
							),
							this.metadata.setFormat(
								"numberOfChannels",
								e.channelMode
							),
							o(
								"sample-rate=%s[hz], bitrate=%s[b/s], channel-mode=%s",
								e.sampleRate,
								e.bitrateNominal,
								e.channelMode
							);
					}
				}
				parseFullPage(e) {
					const t = s.CommonHeader.get(e, 0);
					switch (
						(o(
							"Parse full page: type=%s, byteLength=%s",
							t.packetType,
							e.byteLength
						),
						t.packetType)
					) {
						case 3:
							return this.parseUserCommentList(
								e,
								s.CommonHeader.len
							);
					}
				}
				calculateDuration(e) {
					this.metadata.format.sampleRate &&
						e.absoluteGranulePosition >= 0 &&
						(this.metadata.setFormat(
							"numberOfSamples",
							e.absoluteGranulePosition
						),
						this.metadata.setFormat(
							"duration",
							this.metadata.format.numberOfSamples /
								this.metadata.format.sampleRate
						));
				}
				parseUserCommentList(e, t) {
					const a = r.UINT32_LE.get(e, t);
					(t += 4), (t += a);
					let n = r.UINT32_LE.get(e, t);
					for (t += 4; n-- > 0; ) t += this.parseUserComment(e, t);
				}
			};
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(46),
			n = a(30),
			i = a(131),
			s = a(132),
			o = r("music-metadata-browser:main");
		var l = a(30);
		(t.parseBuffer = l.parseBuffer),
			(t.parseFromTokenizer = l.parseFromTokenizer),
			(t.orderTags = l.orderTags),
			(t.ratingToStars = l.ratingToStars),
			(t.parseNodeStream = n.parseStream),
			(t.parseReadableStream = async function (e, a, r) {
				const n = new i.ReadableWebToNodeStream(e),
					s = await t.parseNodeStream(n, a, r);
				return (
					o(
						`Completed parsing from stream bytesRead=${
							n.bytesRead
						} / fileSize=${r && r.fileSize ? r.fileSize : "?"}`
					),
					await n.close(),
					s
				);
			}),
			(t.parseBlob = function (e, t) {
				return (function (e) {
					return new Promise((t, a) => {
						const r = new FileReader();
						(r.onloadend = (e) => {
							let a = e.target.result;
							a instanceof ArrayBuffer &&
								(a = s(new Uint8Array(e.target.result))),
								t(a);
						}),
							(r.onerror = (e) => {
								a(new Error(e.type));
							}),
							(r.onabort = (e) => {
								a(new Error(e.type));
							}),
							r.readAsArrayBuffer(e);
					});
				})(e).then((a) => n.parseBuffer(a, e.type, t));
			}),
			(t.fetchFromUrl = async function (e, t) {
				const a = await fetch(e),
					r = a.headers.get("Content-Type"),
					n = [];
				if (
					(a.headers.forEach((e) => {
						n.push(e);
					}),
					a.ok)
				) {
					if (a.body) {
						const e = await this.parseReadableStream(a.body, r, t);
						return (
							o("Closing HTTP-readable-stream..."),
							a.body.locked || (await a.body.cancel()),
							o("HTTP-readable-stream closed."),
							e
						);
					}
					return this.parseBlob(await a.blob(), t);
				}
				throw new Error(
					`HTTP error status=${a.status}: ${a.statusText}`
				);
			});
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(8);
		class n extends r.CommonTagMapper {
			constructor(e, t) {
				const a = {};
				for (const e of Object.keys(t)) a[e.toUpperCase()] = t[e];
				super(e, a);
			}
			getCommonName(e) {
				return this.tagMap[e.toUpperCase()];
			}
		}
		t.CaseInsensitiveTagMap = n;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(35);
		class n extends r.Readable {
			constructor(e) {
				super(), (this.buf = e);
			}
			_read() {
				this.push(this.buf), this.push(null);
			}
		}
		t.ID3Stream = n;
	},
	function (e, t, a) {
		"use strict";
		var r,
			n = "object" == typeof Reflect ? Reflect : null,
			i =
				n && "function" == typeof n.apply
					? n.apply
					: function (e, t, a) {
							return Function.prototype.apply.call(e, t, a);
					  };
		r =
			n && "function" == typeof n.ownKeys
				? n.ownKeys
				: Object.getOwnPropertySymbols
				? function (e) {
						return Object.getOwnPropertyNames(e).concat(
							Object.getOwnPropertySymbols(e)
						);
				  }
				: function (e) {
						return Object.getOwnPropertyNames(e);
				  };
		var s =
			Number.isNaN ||
			function (e) {
				return e != e;
			};
		function o() {
			o.init.call(this);
		}
		(e.exports = o),
			(e.exports.once = function (e, t) {
				return new Promise(function (a, r) {
					function n() {
						void 0 !== i && e.removeListener("error", i),
							a([].slice.call(arguments));
					}
					var i;
					"error" !== t &&
						((i = function (a) {
							e.removeListener(t, n), r(a);
						}),
						e.once("error", i)),
						e.once(t, n);
				});
			}),
			(o.EventEmitter = o),
			(o.prototype._events = void 0),
			(o.prototype._eventsCount = 0),
			(o.prototype._maxListeners = void 0);
		var l = 10;
		function c(e) {
			if ("function" != typeof e)
				throw new TypeError(
					'The "listener" argument must be of type Function. Received type ' +
						typeof e
				);
		}
		function u(e) {
			return void 0 === e._maxListeners
				? o.defaultMaxListeners
				: e._maxListeners;
		}
		function d(e, t, a, r) {
			var n, i, s, o;
			if (
				(c(a),
				void 0 === (i = e._events)
					? ((i = e._events = Object.create(null)),
					  (e._eventsCount = 0))
					: (void 0 !== i.newListener &&
							(e.emit(
								"newListener",
								t,
								a.listener ? a.listener : a
							),
							(i = e._events)),
					  (s = i[t])),
				void 0 === s)
			)
				(s = i[t] = a), ++e._eventsCount;
			else if (
				("function" == typeof s
					? (s = i[t] = r ? [a, s] : [s, a])
					: r
					? s.unshift(a)
					: s.push(a),
				(n = u(e)) > 0 && s.length > n && !s.warned)
			) {
				s.warned = !0;
				var l = new Error(
					"Possible EventEmitter memory leak detected. " +
						s.length +
						" " +
						String(t) +
						" listeners added. Use emitter.setMaxListeners() to increase limit"
				);
				(l.name = "MaxListenersExceededWarning"),
					(l.emitter = e),
					(l.type = t),
					(l.count = s.length),
					(o = l),
					console && console.warn && console.warn(o);
			}
			return e;
		}
		function f() {
			if (!this.fired)
				return (
					this.target.removeListener(this.type, this.wrapFn),
					(this.fired = !0),
					0 === arguments.length
						? this.listener.call(this.target)
						: this.listener.apply(this.target, arguments)
				);
		}
		function h(e, t, a) {
			var r = {
					fired: !1,
					wrapFn: void 0,
					target: e,
					type: t,
					listener: a,
				},
				n = f.bind(r);
			return (n.listener = a), (r.wrapFn = n), n;
		}
		function p(e, t, a) {
			var r = e._events;
			if (void 0 === r) return [];
			var n = r[t];
			return void 0 === n
				? []
				: "function" == typeof n
				? a
					? [n.listener || n]
					: [n]
				: a
				? (function (e) {
						for (
							var t = new Array(e.length), a = 0;
							a < t.length;
							++a
						)
							t[a] = e[a].listener || e[a];
						return t;
				  })(n)
				: g(n, n.length);
		}
		function m(e) {
			var t = this._events;
			if (void 0 !== t) {
				var a = t[e];
				if ("function" == typeof a) return 1;
				if (void 0 !== a) return a.length;
			}
			return 0;
		}
		function g(e, t) {
			for (var a = new Array(t), r = 0; r < t; ++r) a[r] = e[r];
			return a;
		}
		Object.defineProperty(o, "defaultMaxListeners", {
			enumerable: !0,
			get: function () {
				return l;
			},
			set: function (e) {
				if ("number" != typeof e || e < 0 || s(e))
					throw new RangeError(
						'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
							e +
							"."
					);
				l = e;
			},
		}),
			(o.init = function () {
				(void 0 !== this._events &&
					this._events !== Object.getPrototypeOf(this)._events) ||
					((this._events = Object.create(null)),
					(this._eventsCount = 0)),
					(this._maxListeners = this._maxListeners || void 0);
			}),
			(o.prototype.setMaxListeners = function (e) {
				if ("number" != typeof e || e < 0 || s(e))
					throw new RangeError(
						'The value of "n" is out of range. It must be a non-negative number. Received ' +
							e +
							"."
					);
				return (this._maxListeners = e), this;
			}),
			(o.prototype.getMaxListeners = function () {
				return u(this);
			}),
			(o.prototype.emit = function (e) {
				for (var t = [], a = 1; a < arguments.length; a++)
					t.push(arguments[a]);
				var r = "error" === e,
					n = this._events;
				if (void 0 !== n) r = r && void 0 === n.error;
				else if (!r) return !1;
				if (r) {
					var s;
					if ((t.length > 0 && (s = t[0]), s instanceof Error))
						throw s;
					var o = new Error(
						"Unhandled error." + (s ? " (" + s.message + ")" : "")
					);
					throw ((o.context = s), o);
				}
				var l = n[e];
				if (void 0 === l) return !1;
				if ("function" == typeof l) i(l, this, t);
				else {
					var c = l.length,
						u = g(l, c);
					for (a = 0; a < c; ++a) i(u[a], this, t);
				}
				return !0;
			}),
			(o.prototype.addListener = function (e, t) {
				return d(this, e, t, !1);
			}),
			(o.prototype.on = o.prototype.addListener),
			(o.prototype.prependListener = function (e, t) {
				return d(this, e, t, !0);
			}),
			(o.prototype.once = function (e, t) {
				return c(t), this.on(e, h(this, e, t)), this;
			}),
			(o.prototype.prependOnceListener = function (e, t) {
				return c(t), this.prependListener(e, h(this, e, t)), this;
			}),
			(o.prototype.removeListener = function (e, t) {
				var a, r, n, i, s;
				if ((c(t), void 0 === (r = this._events))) return this;
				if (void 0 === (a = r[e])) return this;
				if (a === t || a.listener === t)
					0 == --this._eventsCount
						? (this._events = Object.create(null))
						: (delete r[e],
						  r.removeListener &&
								this.emit(
									"removeListener",
									e,
									a.listener || t
								));
				else if ("function" != typeof a) {
					for (n = -1, i = a.length - 1; i >= 0; i--)
						if (a[i] === t || a[i].listener === t) {
							(s = a[i].listener), (n = i);
							break;
						}
					if (n < 0) return this;
					0 === n
						? a.shift()
						: (function (e, t) {
								for (; t + 1 < e.length; t++) e[t] = e[t + 1];
								e.pop();
						  })(a, n),
						1 === a.length && (r[e] = a[0]),
						void 0 !== r.removeListener &&
							this.emit("removeListener", e, s || t);
				}
				return this;
			}),
			(o.prototype.off = o.prototype.removeListener),
			(o.prototype.removeAllListeners = function (e) {
				var t, a, r;
				if (void 0 === (a = this._events)) return this;
				if (void 0 === a.removeListener)
					return (
						0 === arguments.length
							? ((this._events = Object.create(null)),
							  (this._eventsCount = 0))
							: void 0 !== a[e] &&
							  (0 == --this._eventsCount
									? (this._events = Object.create(null))
									: delete a[e]),
						this
					);
				if (0 === arguments.length) {
					var n,
						i = Object.keys(a);
					for (r = 0; r < i.length; ++r)
						"removeListener" !== (n = i[r]) &&
							this.removeAllListeners(n);
					return (
						this.removeAllListeners("removeListener"),
						(this._events = Object.create(null)),
						(this._eventsCount = 0),
						this
					);
				}
				if ("function" == typeof (t = a[e])) this.removeListener(e, t);
				else if (void 0 !== t)
					for (r = t.length - 1; r >= 0; r--)
						this.removeListener(e, t[r]);
				return this;
			}),
			(o.prototype.listeners = function (e) {
				return p(this, e, !0);
			}),
			(o.prototype.rawListeners = function (e) {
				return p(this, e, !1);
			}),
			(o.listenerCount = function (e, t) {
				return "function" == typeof e.listenerCount
					? e.listenerCount(t)
					: m.call(e, t);
			}),
			(o.prototype.listenerCount = m),
			(o.prototype.eventNames = function () {
				return this._eventsCount > 0 ? r(this._events) : [];
			});
	},
	function (e, t, a) {
		((t = e.exports = a(36)).Stream = t),
			(t.Readable = t),
			(t.Writable = a(29)),
			(t.Duplex = a(12)),
			(t.Transform = a(40)),
			(t.PassThrough = a(92));
	},
	function (e, t, a) {
		var r = a(2),
			n = r.Buffer;
		function i(e, t) {
			for (var a in e) t[a] = e[a];
		}
		function s(e, t, a) {
			return n(e, t, a);
		}
		n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
			? (e.exports = r)
			: (i(r, t), (t.Buffer = s)),
			i(n, s),
			(s.from = function (e, t, a) {
				if ("number" == typeof e)
					throw new TypeError("Argument must not be a number");
				return n(e, t, a);
			}),
			(s.alloc = function (e, t, a) {
				if ("number" != typeof e)
					throw new TypeError("Argument must be a number");
				var r = n(e);
				return (
					void 0 !== t
						? "string" == typeof a
							? r.fill(t, a)
							: r.fill(t)
						: r.fill(0),
					r
				);
			}),
			(s.allocUnsafe = function (e) {
				if ("number" != typeof e)
					throw new TypeError("Argument must be a number");
				return n(e);
			}),
			(s.allocUnsafeSlow = function (e) {
				if ("number" != typeof e)
					throw new TypeError("Argument must be a number");
				return r.SlowBuffer(e);
			});
	},
	function (e, t, a) {
		"use strict";
		(function (t, r, n) {
			var i = a(20);
			function s(e) {
				var t = this;
				(this.next = null),
					(this.entry = null),
					(this.finish = function () {
						!(function (e, t, a) {
							var r = e.entry;
							e.entry = null;
							for (; r; ) {
								var n = r.callback;
								t.pendingcb--, n(a), (r = r.next);
							}
							t.corkedRequestsFree
								? (t.corkedRequestsFree.next = e)
								: (t.corkedRequestsFree = e);
						})(t, e);
					});
			}
			e.exports = v;
			var o,
				l =
					!t.browser &&
					["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1
						? r
						: i.nextTick;
			v.WritableState = b;
			var c = Object.create(a(17));
			c.inherits = a(14);
			var u = { deprecate: a(90) },
				d = a(37),
				f = a(28).Buffer,
				h = n.Uint8Array || function () {};
			var p,
				m = a(38);
			function g() {}
			function b(e, t) {
				(o = o || a(12)), (e = e || {});
				var r = t instanceof o;
				(this.objectMode = !!e.objectMode),
					r &&
						(this.objectMode =
							this.objectMode || !!e.writableObjectMode);
				var n = e.highWaterMark,
					c = e.writableHighWaterMark,
					u = this.objectMode ? 16 : 16384;
				(this.highWaterMark =
					n || 0 === n ? n : r && (c || 0 === c) ? c : u),
					(this.highWaterMark = Math.floor(this.highWaterMark)),
					(this.finalCalled = !1),
					(this.needDrain = !1),
					(this.ending = !1),
					(this.ended = !1),
					(this.finished = !1),
					(this.destroyed = !1);
				var d = !1 === e.decodeStrings;
				(this.decodeStrings = !d),
					(this.defaultEncoding = e.defaultEncoding || "utf8"),
					(this.length = 0),
					(this.writing = !1),
					(this.corked = 0),
					(this.sync = !0),
					(this.bufferProcessing = !1),
					(this.onwrite = function (e) {
						!(function (e, t) {
							var a = e._writableState,
								r = a.sync,
								n = a.writecb;
							if (
								((function (e) {
									(e.writing = !1),
										(e.writecb = null),
										(e.length -= e.writelen),
										(e.writelen = 0);
								})(a),
								t)
							)
								!(function (e, t, a, r, n) {
									--t.pendingcb,
										a
											? (i.nextTick(n, r),
											  i.nextTick(S, e, t),
											  (e._writableState.errorEmitted =
													!0),
											  e.emit("error", r))
											: (n(r),
											  (e._writableState.errorEmitted =
													!0),
											  e.emit("error", r),
											  S(e, t));
								})(e, a, r, t, n);
							else {
								var s = _(a);
								s ||
									a.corked ||
									a.bufferProcessing ||
									!a.bufferedRequest ||
									T(e, a),
									r ? l(w, e, a, s, n) : w(e, a, s, n);
							}
						})(t, e);
					}),
					(this.writecb = null),
					(this.writelen = 0),
					(this.bufferedRequest = null),
					(this.lastBufferedRequest = null),
					(this.pendingcb = 0),
					(this.prefinished = !1),
					(this.errorEmitted = !1),
					(this.bufferedRequestCount = 0),
					(this.corkedRequestsFree = new s(this));
			}
			function v(e) {
				if (((o = o || a(12)), !(p.call(v, this) || this instanceof o)))
					return new v(e);
				(this._writableState = new b(e, this)),
					(this.writable = !0),
					e &&
						("function" == typeof e.write &&
							(this._write = e.write),
						"function" == typeof e.writev &&
							(this._writev = e.writev),
						"function" == typeof e.destroy &&
							(this._destroy = e.destroy),
						"function" == typeof e.final &&
							(this._final = e.final)),
					d.call(this);
			}
			function y(e, t, a, r, n, i, s) {
				(t.writelen = r),
					(t.writecb = s),
					(t.writing = !0),
					(t.sync = !0),
					a ? e._writev(n, t.onwrite) : e._write(n, i, t.onwrite),
					(t.sync = !1);
			}
			function w(e, t, a, r) {
				a ||
					(function (e, t) {
						0 === t.length &&
							t.needDrain &&
							((t.needDrain = !1), e.emit("drain"));
					})(e, t),
					t.pendingcb--,
					r(),
					S(e, t);
			}
			function T(e, t) {
				t.bufferProcessing = !0;
				var a = t.bufferedRequest;
				if (e._writev && a && a.next) {
					var r = t.bufferedRequestCount,
						n = new Array(r),
						i = t.corkedRequestsFree;
					i.entry = a;
					for (var o = 0, l = !0; a; )
						(n[o] = a), a.isBuf || (l = !1), (a = a.next), (o += 1);
					(n.allBuffers = l),
						y(e, t, !0, t.length, n, "", i.finish),
						t.pendingcb++,
						(t.lastBufferedRequest = null),
						i.next
							? ((t.corkedRequestsFree = i.next), (i.next = null))
							: (t.corkedRequestsFree = new s(t)),
						(t.bufferedRequestCount = 0);
				} else {
					for (; a; ) {
						var c = a.chunk,
							u = a.encoding,
							d = a.callback;
						if (
							(y(e, t, !1, t.objectMode ? 1 : c.length, c, u, d),
							(a = a.next),
							t.bufferedRequestCount--,
							t.writing)
						)
							break;
					}
					null === a && (t.lastBufferedRequest = null);
				}
				(t.bufferedRequest = a), (t.bufferProcessing = !1);
			}
			function _(e) {
				return (
					e.ending &&
					0 === e.length &&
					null === e.bufferedRequest &&
					!e.finished &&
					!e.writing
				);
			}
			function k(e, t) {
				e._final(function (a) {
					t.pendingcb--,
						a && e.emit("error", a),
						(t.prefinished = !0),
						e.emit("prefinish"),
						S(e, t);
				});
			}
			function S(e, t) {
				var a = _(t);
				return (
					a &&
						(!(function (e, t) {
							t.prefinished ||
								t.finalCalled ||
								("function" == typeof e._final
									? (t.pendingcb++,
									  (t.finalCalled = !0),
									  i.nextTick(k, e, t))
									: ((t.prefinished = !0),
									  e.emit("prefinish")));
						})(e, t),
						0 === t.pendingcb &&
							((t.finished = !0), e.emit("finish"))),
					a
				);
			}
			c.inherits(v, d),
				(b.prototype.getBuffer = function () {
					for (var e = this.bufferedRequest, t = []; e; )
						t.push(e), (e = e.next);
					return t;
				}),
				(function () {
					try {
						Object.defineProperty(b.prototype, "buffer", {
							get: u.deprecate(
								function () {
									return this.getBuffer();
								},
								"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
								"DEP0003"
							),
						});
					} catch (e) {}
				})(),
				"function" == typeof Symbol &&
				Symbol.hasInstance &&
				"function" == typeof Function.prototype[Symbol.hasInstance]
					? ((p = Function.prototype[Symbol.hasInstance]),
					  Object.defineProperty(v, Symbol.hasInstance, {
							value: function (e) {
								return (
									!!p.call(this, e) ||
									(this === v &&
										e &&
										e._writableState instanceof b)
								);
							},
					  }))
					: (p = function (e) {
							return e instanceof this;
					  }),
				(v.prototype.pipe = function () {
					this.emit("error", new Error("Cannot pipe, not readable"));
				}),
				(v.prototype.write = function (e, t, a) {
					var r,
						n = this._writableState,
						s = !1,
						o =
							!n.objectMode &&
							((r = e), f.isBuffer(r) || r instanceof h);
					return (
						o &&
							!f.isBuffer(e) &&
							(e = (function (e) {
								return f.from(e);
							})(e)),
						"function" == typeof t && ((a = t), (t = null)),
						o ? (t = "buffer") : t || (t = n.defaultEncoding),
						"function" != typeof a && (a = g),
						n.ended
							? (function (e, t) {
									var a = new Error("write after end");
									e.emit("error", a), i.nextTick(t, a);
							  })(this, a)
							: (o ||
									(function (e, t, a, r) {
										var n = !0,
											s = !1;
										return (
											null === a
												? (s = new TypeError(
														"May not write null values to stream"
												  ))
												: "string" == typeof a ||
												  void 0 === a ||
												  t.objectMode ||
												  (s = new TypeError(
														"Invalid non-string/buffer chunk"
												  )),
											s &&
												(e.emit("error", s),
												i.nextTick(r, s),
												(n = !1)),
											n
										);
									})(this, n, e, a)) &&
							  (n.pendingcb++,
							  (s = (function (e, t, a, r, n, i) {
									if (!a) {
										var s = (function (e, t, a) {
											e.objectMode ||
												!1 === e.decodeStrings ||
												"string" != typeof t ||
												(t = f.from(t, a));
											return t;
										})(t, r, n);
										r !== s &&
											((a = !0), (n = "buffer"), (r = s));
									}
									var o = t.objectMode ? 1 : r.length;
									t.length += o;
									var l = t.length < t.highWaterMark;
									l || (t.needDrain = !0);
									if (t.writing || t.corked) {
										var c = t.lastBufferedRequest;
										(t.lastBufferedRequest = {
											chunk: r,
											encoding: n,
											isBuf: a,
											callback: i,
											next: null,
										}),
											c
												? (c.next =
														t.lastBufferedRequest)
												: (t.bufferedRequest =
														t.lastBufferedRequest),
											(t.bufferedRequestCount += 1);
									} else y(e, t, !1, o, r, n, i);
									return l;
							  })(this, n, o, e, t, a))),
						s
					);
				}),
				(v.prototype.cork = function () {
					this._writableState.corked++;
				}),
				(v.prototype.uncork = function () {
					var e = this._writableState;
					e.corked &&
						(e.corked--,
						e.writing ||
							e.corked ||
							e.finished ||
							e.bufferProcessing ||
							!e.bufferedRequest ||
							T(this, e));
				}),
				(v.prototype.setDefaultEncoding = function (e) {
					if (
						("string" == typeof e && (e = e.toLowerCase()),
						!(
							[
								"hex",
								"utf8",
								"utf-8",
								"ascii",
								"binary",
								"base64",
								"ucs2",
								"ucs-2",
								"utf16le",
								"utf-16le",
								"raw",
							].indexOf((e + "").toLowerCase()) > -1
						))
					)
						throw new TypeError("Unknown encoding: " + e);
					return (this._writableState.defaultEncoding = e), this;
				}),
				Object.defineProperty(v.prototype, "writableHighWaterMark", {
					enumerable: !1,
					get: function () {
						return this._writableState.highWaterMark;
					},
				}),
				(v.prototype._write = function (e, t, a) {
					a(new Error("_write() is not implemented"));
				}),
				(v.prototype._writev = null),
				(v.prototype.end = function (e, t, a) {
					var r = this._writableState;
					"function" == typeof e
						? ((a = e), (e = null), (t = null))
						: "function" == typeof t && ((a = t), (t = null)),
						null != e && this.write(e, t),
						r.corked && ((r.corked = 1), this.uncork()),
						r.ending ||
							r.finished ||
							(function (e, t, a) {
								(t.ending = !0),
									S(e, t),
									a &&
										(t.finished
											? i.nextTick(a)
											: e.once("finish", a));
								(t.ended = !0), (e.writable = !1);
							})(this, r, a);
				}),
				Object.defineProperty(v.prototype, "destroyed", {
					get: function () {
						return (
							void 0 !== this._writableState &&
							this._writableState.destroyed
						);
					},
					set: function (e) {
						this._writableState &&
							(this._writableState.destroyed = e);
					},
				}),
				(v.prototype.destroy = m.destroy),
				(v.prototype._undestroy = m.undestroy),
				(v.prototype._destroy = function (e, t) {
					this.end(), t(e);
				});
		}.call(this, a(9), a(88).setImmediate, a(11)));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(10),
			n = a(60),
			i = a(129),
			s = a(13),
			o = a(19),
			l = a(130);
		function c(e, t, a) {
			return (
				!e.fileSize && a && a.fileSize && (e.fileSize = a.fileSize),
				n.ParserFactory.parseOnContentType(e, t, a)
			);
		}
		async function u(e, t = {}) {
			let a = e.fileSize;
			if (await o.hasID3v1Header(e)) {
				a -= 128;
				a -= await l.getLyricsHeaderLength(e);
			}
			t.apeHeader = await s.APEv2Parser.findApeFooterOffset(e, a);
		}
		(t.parseStream = function (e, t, a = {}) {
			return c(r.fromStream(e), t, a);
		}),
			(t.parseBuffer = async function (e, t, a = {}) {
				const n = new i.RandomBufferReader(e);
				return await u(n, a), c(r.fromBuffer(e), t, a);
			}),
			(t.parseFromTokenizer = c),
			(t.orderTags = function (e) {
				const t = {};
				for (const a of e) (t[a.id] = t[a.id] || []).push(a.value);
				return t;
			}),
			(t.ratingToStars = function (e) {
				return void 0 === e ? 0 : 1 + Math.round(4 * e);
			}),
			(t.scanAppendingHeaders = u);
	},
	function (e, t) {
		(t.read = function (e, t, a, r, n) {
			var i,
				s,
				o = 8 * n - r - 1,
				l = (1 << o) - 1,
				c = l >> 1,
				u = -7,
				d = a ? n - 1 : 0,
				f = a ? -1 : 1,
				h = e[t + d];
			for (
				d += f, i = h & ((1 << -u) - 1), h >>= -u, u += o;
				u > 0;
				i = 256 * i + e[t + d], d += f, u -= 8
			);
			for (
				s = i & ((1 << -u) - 1), i >>= -u, u += r;
				u > 0;
				s = 256 * s + e[t + d], d += f, u -= 8
			);
			if (0 === i) i = 1 - c;
			else {
				if (i === l) return s ? NaN : (1 / 0) * (h ? -1 : 1);
				(s += Math.pow(2, r)), (i -= c);
			}
			return (h ? -1 : 1) * s * Math.pow(2, i - r);
		}),
			(t.write = function (e, t, a, r, n, i) {
				var s,
					o,
					l,
					c = 8 * i - n - 1,
					u = (1 << c) - 1,
					d = u >> 1,
					f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
					h = r ? 0 : i - 1,
					p = r ? 1 : -1,
					m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
				for (
					t = Math.abs(t),
						isNaN(t) || t === 1 / 0
							? ((o = isNaN(t) ? 1 : 0), (s = u))
							: ((s = Math.floor(Math.log(t) / Math.LN2)),
							  t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
							  (t +=
									s + d >= 1
										? f / l
										: f * Math.pow(2, 1 - d)) *
									l >=
									2 && (s++, (l /= 2)),
							  s + d >= u
									? ((o = 0), (s = u))
									: s + d >= 1
									? ((o = (t * l - 1) * Math.pow(2, n)),
									  (s += d))
									: ((o =
											t *
											Math.pow(2, d - 1) *
											Math.pow(2, n)),
									  (s = 0)));
					n >= 8;
					e[a + h] = 255 & o, h += p, o /= 256, n -= 8
				);
				for (
					s = (s << n) | o, c += n;
					c > 0;
					e[a + h] = 255 & s, h += p, s /= 256, c -= 8
				);
				e[a + h - p] |= 128 * m;
			});
	},
	function (e, t) {
		var a = {}.toString;
		e.exports =
			Array.isArray ||
			function (e) {
				return "[object Array]" == a.call(e);
			};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }),
			(t.defaultMessages = "End-Of-Stream");
		class r extends Error {
			constructor() {
				super(t.defaultMessages);
			}
		}
		t.EndOfStreamError = r;
	},
	function (module, exports, __webpack_require__) {
		"use strict";
		(function (Buffer) {
			const {
					multiByteIndexOf: multiByteIndexOf,
					stringToBytes: stringToBytes,
					readUInt64LE: readUInt64LE,
					tarHeaderChecksumMatches: tarHeaderChecksumMatches,
					uint8ArrayUtf8ByteString: uint8ArrayUtf8ByteString,
				} = __webpack_require__(61),
				supported = __webpack_require__(62),
				xpiZipFilename = stringToBytes("META-INF/mozilla.rsa"),
				oxmlContentTypes = stringToBytes("[Content_Types].xml"),
				oxmlRels = stringToBytes("_rels/.rels"),
				fileType = (e) => {
					if (
						!(
							e instanceof Uint8Array ||
							e instanceof ArrayBuffer ||
							Buffer.isBuffer(e)
						)
					)
						throw new TypeError(
							`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``
						);
					const t = e instanceof Uint8Array ? e : new Uint8Array(e);
					if (!(t && t.length > 1)) return;
					const a = (e, a) => {
							a = { offset: 0, ...a };
							for (let r = 0; r < e.length; r++)
								if (a.mask) {
									if (e[r] !== (a.mask[r] & t[r + a.offset]))
										return !1;
								} else if (e[r] !== t[r + a.offset]) return !1;
							return !0;
						},
						r = (e, t) => a(stringToBytes(e), t);
					if (a([255, 216, 255]))
						return { ext: "jpg", mime: "image/jpeg" };
					if (a([137, 80, 78, 71, 13, 10, 26, 10])) {
						const e = 33,
							a = t.findIndex(
								(a, r) =>
									r >= e &&
									73 === t[r] &&
									68 === t[r + 1] &&
									65 === t[r + 2] &&
									84 === t[r + 3]
							),
							r = t.subarray(e, a);
						return r.findIndex(
							(e, t) =>
								97 === r[t] &&
								99 === r[t + 1] &&
								84 === r[t + 2] &&
								76 === r[t + 3]
						) >= 0
							? { ext: "apng", mime: "image/apng" }
							: { ext: "png", mime: "image/png" };
					}
					if (a([71, 73, 70]))
						return { ext: "gif", mime: "image/gif" };
					if (a([87, 69, 66, 80], { offset: 8 }))
						return { ext: "webp", mime: "image/webp" };
					if (a([70, 76, 73, 70]))
						return { ext: "flif", mime: "image/flif" };
					if (
						(a([73, 73, 42, 0]) || a([77, 77, 0, 42])) &&
						a([67, 82], { offset: 8 })
					)
						return { ext: "cr2", mime: "image/x-canon-cr2" };
					if (a([73, 73, 82, 79, 8, 0, 0, 0, 24]))
						return { ext: "orf", mime: "image/x-olympus-orf" };
					if (
						a([73, 73, 42, 0]) &&
						(a([16, 251, 134, 1], { offset: 4 }) ||
							a([8, 0, 0, 0], { offset: 4 })) &&
						a([0, 254, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1], {
							offset: 9,
						})
					)
						return { ext: "arw", mime: "image/x-sony-arw" };
					if (
						a([73, 73, 42, 0, 8, 0, 0, 0]) &&
						(a([45, 0, 254, 0], { offset: 8 }) ||
							a([39, 0, 254, 0], { offset: 8 }))
					)
						return { ext: "dng", mime: "image/x-adobe-dng" };
					if (a([73, 73, 42, 0]) && a([28, 0, 254, 0], { offset: 8 }))
						return { ext: "nef", mime: "image/x-nikon-nef" };
					if (a([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216]))
						return { ext: "rw2", mime: "image/x-panasonic-rw2" };
					if (r("FUJIFILMCCD-RAW"))
						return { ext: "raf", mime: "image/x-fujifilm-raf" };
					if (a([73, 73, 42, 0]) || a([77, 77, 0, 42]))
						return { ext: "tif", mime: "image/tiff" };
					if (a([66, 77])) return { ext: "bmp", mime: "image/bmp" };
					if (a([73, 73, 188]))
						return { ext: "jxr", mime: "image/vnd.ms-photo" };
					if (a([56, 66, 80, 83]))
						return {
							ext: "psd",
							mime: "image/vnd.adobe.photoshop",
						};
					const n = [80, 75, 3, 4];
					if (a(n)) {
						if (
							a(
								[
									109, 105, 109, 101, 116, 121, 112, 101, 97,
									112, 112, 108, 105, 99, 97, 116, 105, 111,
									110, 47, 101, 112, 117, 98, 43, 122, 105,
									112,
								],
								{ offset: 30 }
							)
						)
							return {
								ext: "epub",
								mime: "application/epub+zip",
							};
						if (a(xpiZipFilename, { offset: 30 }))
							return {
								ext: "xpi",
								mime: "application/x-xpinstall",
							};
						if (
							r(
								"mimetypeapplication/vnd.oasis.opendocument.text",
								{ offset: 30 }
							)
						)
							return {
								ext: "odt",
								mime: "application/vnd.oasis.opendocument.text",
							};
						if (
							r(
								"mimetypeapplication/vnd.oasis.opendocument.spreadsheet",
								{ offset: 30 }
							)
						)
							return {
								ext: "ods",
								mime: "application/vnd.oasis.opendocument.spreadsheet",
							};
						if (
							r(
								"mimetypeapplication/vnd.oasis.opendocument.presentation",
								{ offset: 30 }
							)
						)
							return {
								ext: "odp",
								mime: "application/vnd.oasis.opendocument.presentation",
							};
						let e,
							i = 0,
							s = !1;
						do {
							const o = i + 30;
							if (
								(s ||
									(s =
										a(oxmlContentTypes, { offset: o }) ||
										a(oxmlRels, { offset: o })),
								e ||
									(r("word/", { offset: o })
										? (e = {
												ext: "docx",
												mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
										  })
										: r("ppt/", { offset: o })
										? (e = {
												ext: "pptx",
												mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										  })
										: r("xl/", { offset: o }) &&
										  (e = {
												ext: "xlsx",
												mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
										  })),
								s && e)
							)
								return e;
							i = multiByteIndexOf(t, n, o);
						} while (i >= 0);
						if (e) return e;
					}
					if (
						a([80, 75]) &&
						(3 === t[2] || 5 === t[2] || 7 === t[2]) &&
						(4 === t[3] || 6 === t[3] || 8 === t[3])
					)
						return { ext: "zip", mime: "application/zip" };
					if (
						a([48, 48, 48, 48, 48, 48], {
							offset: 148,
							mask: [248, 248, 248, 248, 248, 248],
						}) &&
						tarHeaderChecksumMatches(t)
					)
						return { ext: "tar", mime: "application/x-tar" };
					if (
						a([82, 97, 114, 33, 26, 7]) &&
						(0 === t[6] || 1 === t[6])
					)
						return {
							ext: "rar",
							mime: "application/x-rar-compressed",
						};
					if (a([31, 139, 8]))
						return { ext: "gz", mime: "application/gzip" };
					if (a([66, 90, 104]))
						return { ext: "bz2", mime: "application/x-bzip2" };
					if (a([55, 122, 188, 175, 39, 28]))
						return {
							ext: "7z",
							mime: "application/x-7z-compressed",
						};
					if (a([120, 1]))
						return {
							ext: "dmg",
							mime: "application/x-apple-diskimage",
						};
					if (
						a([102, 114, 101, 101], { offset: 4 }) ||
						a([109, 100, 97, 116], { offset: 4 }) ||
						a([109, 111, 111, 118], { offset: 4 }) ||
						a([119, 105, 100, 101], { offset: 4 })
					)
						return { ext: "mov", mime: "video/quicktime" };
					if (r("ftyp", { offset: 4 }) && 0 != (96 & t[8])) {
						const e = uint8ArrayUtf8ByteString(t, 8, 12)
							.replace("\0", " ")
							.trim();
						switch (e) {
							case "mif1":
								return { ext: "heic", mime: "image/heif" };
							case "msf1":
								return {
									ext: "heic",
									mime: "image/heif-sequence",
								};
							case "heic":
							case "heix":
								return { ext: "heic", mime: "image/heic" };
							case "hevc":
							case "hevx":
								return {
									ext: "heic",
									mime: "image/heic-sequence",
								};
							case "qt":
								return { ext: "mov", mime: "video/quicktime" };
							case "M4V":
							case "M4VH":
							case "M4VP":
								return { ext: "m4v", mime: "video/x-m4v" };
							case "M4P":
								return { ext: "m4p", mime: "video/mp4" };
							case "M4B":
								return { ext: "m4b", mime: "audio/mp4" };
							case "M4A":
								return { ext: "m4a", mime: "audio/x-m4a" };
							case "F4V":
								return { ext: "f4v", mime: "video/mp4" };
							case "F4P":
								return { ext: "f4p", mime: "video/mp4" };
							case "F4A":
								return { ext: "f4a", mime: "audio/mp4" };
							case "F4B":
								return { ext: "f4b", mime: "audio/mp4" };
							default:
								return e.startsWith("3g")
									? e.startsWith("3g2")
										? { ext: "3g2", mime: "video/3gpp2" }
										: { ext: "3gp", mime: "video/3gpp" }
									: { ext: "mp4", mime: "video/mp4" };
						}
					}
					if (a([77, 84, 104, 100]))
						return { ext: "mid", mime: "audio/midi" };
					if (a([26, 69, 223, 163])) {
						const e = t.subarray(4, 4100),
							a = e.findIndex(
								(e, t, a) => 66 === a[t] && 130 === a[t + 1]
							);
						if (-1 !== a) {
							const t = a + 3,
								r = (a) =>
									[...a].every(
										(a, r) => e[t + r] === a.charCodeAt(0)
									);
							if (r("matroska"))
								return { ext: "mkv", mime: "video/x-matroska" };
							if (r("webm"))
								return { ext: "webm", mime: "video/webm" };
						}
					}
					if (a([82, 73, 70, 70])) {
						if (a([65, 86, 73], { offset: 8 }))
							return { ext: "avi", mime: "video/vnd.avi" };
						if (a([87, 65, 86, 69], { offset: 8 }))
							return { ext: "wav", mime: "audio/vnd.wave" };
						if (a([81, 76, 67, 77], { offset: 8 }))
							return { ext: "qcp", mime: "audio/qcelp" };
					}
					if (a([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
						let e = 30;
						do {
							const r = readUInt64LE(t, e + 16);
							if (
								a(
									[
										145, 7, 220, 183, 183, 169, 207, 17,
										142, 230, 0, 192, 12, 32, 83, 101,
									],
									{ offset: e }
								)
							) {
								if (
									a(
										[
											64, 158, 105, 248, 77, 91, 207, 17,
											168, 253, 0, 128, 95, 92, 68, 43,
										],
										{ offset: e + 24 }
									)
								)
									return {
										ext: "wma",
										mime: "audio/x-ms-wma",
									};
								if (
									a(
										[
											192, 239, 25, 188, 77, 91, 207, 17,
											168, 253, 0, 128, 95, 92, 68, 43,
										],
										{ offset: e + 24 }
									)
								)
									return {
										ext: "wmv",
										mime: "video/x-ms-asf",
									};
								break;
							}
							e += r;
						} while (e + 24 <= t.length);
						return { ext: "asf", mime: "application/vnd.ms-asf" };
					}
					if (a([0, 0, 1, 186]) || a([0, 0, 1, 179]))
						return { ext: "mpg", mime: "video/mpeg" };
					for (let e = 0; e < 2 && e < t.length - 16; e++) {
						if (
							a([73, 68, 51], { offset: e }) ||
							a([255, 226], { offset: e, mask: [255, 230] })
						)
							return { ext: "mp3", mime: "audio/mpeg" };
						if (a([255, 228], { offset: e, mask: [255, 230] }))
							return { ext: "mp2", mime: "audio/mpeg" };
						if (a([255, 248], { offset: e, mask: [255, 252] }))
							return { ext: "mp2", mime: "audio/mpeg" };
						if (a([255, 240], { offset: e, mask: [255, 252] }))
							return { ext: "mp4", mime: "audio/mpeg" };
					}
					if (
						a([79, 112, 117, 115, 72, 101, 97, 100], { offset: 28 })
					)
						return { ext: "opus", mime: "audio/opus" };
					if (a([79, 103, 103, 83]))
						return a([128, 116, 104, 101, 111, 114, 97], {
							offset: 28,
						})
							? { ext: "ogv", mime: "video/ogg" }
							: a([1, 118, 105, 100, 101, 111, 0], { offset: 28 })
							? { ext: "ogm", mime: "video/ogg" }
							: a([127, 70, 76, 65, 67], { offset: 28 })
							? { ext: "oga", mime: "audio/ogg" }
							: a([83, 112, 101, 101, 120, 32, 32], {
									offset: 28,
							  })
							? { ext: "spx", mime: "audio/ogg" }
							: a([1, 118, 111, 114, 98, 105, 115], {
									offset: 28,
							  })
							? { ext: "ogg", mime: "audio/ogg" }
							: { ext: "ogx", mime: "application/ogg" };
					if (a([102, 76, 97, 67]))
						return { ext: "flac", mime: "audio/x-flac" };
					if (a([77, 65, 67, 32]))
						return { ext: "ape", mime: "audio/ape" };
					if (a([119, 118, 112, 107]))
						return { ext: "wv", mime: "audio/wavpack" };
					if (a([35, 33, 65, 77, 82, 10]))
						return { ext: "amr", mime: "audio/amr" };
					if (a([37, 80, 68, 70]))
						return { ext: "pdf", mime: "application/pdf" };
					if (a([77, 90]))
						return { ext: "exe", mime: "application/x-msdownload" };
					if (
						(67 === t[0] || 70 === t[0]) &&
						a([87, 83], { offset: 1 })
					)
						return {
							ext: "swf",
							mime: "application/x-shockwave-flash",
						};
					if (a([123, 92, 114, 116, 102]))
						return { ext: "rtf", mime: "application/rtf" };
					if (a([0, 97, 115, 109]))
						return { ext: "wasm", mime: "application/wasm" };
					if (
						a([119, 79, 70, 70]) &&
						(a([0, 1, 0, 0], { offset: 4 }) ||
							a([79, 84, 84, 79], { offset: 4 }))
					)
						return { ext: "woff", mime: "font/woff" };
					if (
						a([119, 79, 70, 50]) &&
						(a([0, 1, 0, 0], { offset: 4 }) ||
							a([79, 84, 84, 79], { offset: 4 }))
					)
						return { ext: "woff2", mime: "font/woff2" };
					if (
						a([76, 80], { offset: 34 }) &&
						(a([0, 0, 1], { offset: 8 }) ||
							a([1, 0, 2], { offset: 8 }) ||
							a([2, 0, 2], { offset: 8 }))
					)
						return {
							ext: "eot",
							mime: "application/vnd.ms-fontobject",
						};
					if (a([0, 1, 0, 0, 0]))
						return { ext: "ttf", mime: "font/ttf" };
					if (a([79, 84, 84, 79, 0]))
						return { ext: "otf", mime: "font/otf" };
					if (a([0, 0, 1, 0]))
						return { ext: "ico", mime: "image/x-icon" };
					if (a([0, 0, 2, 0]))
						return { ext: "cur", mime: "image/x-icon" };
					if (a([70, 76, 86, 1]))
						return { ext: "flv", mime: "video/x-flv" };
					if (a([37, 33]))
						return { ext: "ps", mime: "application/postscript" };
					if (a([253, 55, 122, 88, 90, 0]))
						return { ext: "xz", mime: "application/x-xz" };
					if (a([83, 81, 76, 105]))
						return { ext: "sqlite", mime: "application/x-sqlite3" };
					if (a([78, 69, 83, 26]))
						return {
							ext: "nes",
							mime: "application/x-nintendo-nes-rom",
						};
					if (a([67, 114, 50, 52]))
						return {
							ext: "crx",
							mime: "application/x-google-chrome-extension",
						};
					if (a([77, 83, 67, 70]) || a([73, 83, 99, 40]))
						return {
							ext: "cab",
							mime: "application/vnd.ms-cab-compressed",
						};
					if (
						a([
							33, 60, 97, 114, 99, 104, 62, 10, 100, 101, 98, 105,
							97, 110, 45, 98, 105, 110, 97, 114, 121,
						])
					)
						return { ext: "deb", mime: "application/x-deb" };
					if (a([33, 60, 97, 114, 99, 104, 62]))
						return {
							ext: "ar",
							mime: "application/x-unix-archive",
						};
					if (a([237, 171, 238, 219]))
						return { ext: "rpm", mime: "application/x-rpm" };
					if (a([31, 160]) || a([31, 157]))
						return { ext: "Z", mime: "application/x-compress" };
					if (a([76, 90, 73, 80]))
						return { ext: "lz", mime: "application/x-lzip" };
					if (
						a([
							208, 207, 17, 224, 161, 177, 26, 225, 0, 0, 0, 0, 0,
							0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62,
						])
					)
						return { ext: "msi", mime: "application/x-msi" };
					if (a([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2]))
						return { ext: "mxf", mime: "application/mxf" };
					if (
						a([71], { offset: 4 }) &&
						(a([71], { offset: 192 }) || a([71], { offset: 196 }))
					)
						return { ext: "mts", mime: "video/mp2t" };
					if (a([66, 76, 69, 78, 68, 69, 82]))
						return { ext: "blend", mime: "application/x-blender" };
					if (a([66, 80, 71, 251]))
						return { ext: "bpg", mime: "image/bpg" };
					if (a([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
						if (a([106, 112, 50, 32], { offset: 20 }))
							return { ext: "jp2", mime: "image/jp2" };
						if (a([106, 112, 120, 32], { offset: 20 }))
							return { ext: "jpx", mime: "image/jpx" };
						if (a([106, 112, 109, 32], { offset: 20 }))
							return { ext: "jpm", mime: "image/jpm" };
						if (a([109, 106, 112, 50], { offset: 20 }))
							return { ext: "mj2", mime: "image/mj2" };
					}
					return a([70, 79, 82, 77])
						? { ext: "aif", mime: "audio/aiff" }
						: r("<?xml ")
						? { ext: "xml", mime: "application/xml" }
						: a([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })
						? {
								ext: "mobi",
								mime: "application/x-mobipocket-ebook",
						  }
						: a([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])
						? { ext: "ktx", mime: "image/ktx" }
						: a([68, 73, 67, 77], { offset: 128 })
						? { ext: "dcm", mime: "application/dicom" }
						: a([77, 80, 43]) || a([77, 80, 67, 75])
						? { ext: "mpc", mime: "audio/x-musepack" }
						: a([66, 69, 71, 73, 78, 58])
						? { ext: "ics", mime: "text/calendar" }
						: a([103, 108, 84, 70, 2, 0, 0, 0])
						? { ext: "glb", mime: "model/gltf-binary" }
						: a([212, 195, 178, 161]) || a([161, 178, 195, 212])
						? { ext: "pcap", mime: "application/vnd.tcpdump.pcap" }
						: a([68, 83, 68, 32])
						? { ext: "dsf", mime: "audio/x-dsf" }
						: a([
								76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0,
								0, 0, 0, 0, 70,
						  ])
						? { ext: "lnk", mime: "application/x.ms.shortcut" }
						: a([
								98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114,
								107, 0, 0, 0, 0,
						  ])
						? { ext: "alias", mime: "application/x.apple.alias" }
						: r("Creative Voice File")
						? { ext: "voc", mime: "audio/x-voc" }
						: a([11, 119])
						? { ext: "ac3", mime: "audio/vnd.dolby.dd-raw" }
						: (a([126, 16, 4]) || a([126, 24, 4])) &&
						  a([48, 77, 73, 69], { offset: 4 })
						? { ext: "mie", mime: "application/x-mie" }
						: a([65, 82, 82, 79, 87, 49, 0, 0])
						? { ext: "arrow", mime: "application/x-apache-arrow" }
						: a([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], {
								offset: 2,
						  })
						? { ext: "shp", mime: "application/x-esri-shape" }
						: void 0;
				};
			(module.exports = fileType),
				Object.defineProperty(fileType, "minimumBytes", {
					value: 4100,
				}),
				(fileType.stream = (readableStream) =>
					new Promise((resolve, reject) => {
						const stream = eval("require")("stream");
						readableStream.on("error", reject),
							readableStream.once("readable", () => {
								const e = new stream.PassThrough(),
									t =
										readableStream.read(
											module.exports.minimumBytes
										) || readableStream.read();
								try {
									e.fileType = fileType(t);
								} catch (e) {
									reject(e);
								}
								readableStream.unshift(t),
									stream.pipeline
										? resolve(
												stream.pipeline(
													readableStream,
													e,
													() => {}
												)
										  )
										: resolve(readableStream.pipe(e));
							});
					})),
				Object.defineProperty(fileType, "extensions", {
					get: () => new Set(supported.extensions),
				}),
				Object.defineProperty(fileType, "mimeTypes", {
					get: () => new Set(supported.mimeTypes),
				});
		}.call(this, __webpack_require__(2).Buffer));
	},
	function (e, t, a) {
		e.exports = n;
		var r = a(26).EventEmitter;
		function n() {
			r.call(this);
		}
		a(14)(n, r),
			(n.Readable = a(27)),
			(n.Writable = a(93)),
			(n.Duplex = a(94)),
			(n.Transform = a(95)),
			(n.PassThrough = a(96)),
			(n.Stream = n),
			(n.prototype.pipe = function (e, t) {
				var a = this;
				function n(t) {
					e.writable && !1 === e.write(t) && a.pause && a.pause();
				}
				function i() {
					a.readable && a.resume && a.resume();
				}
				a.on("data", n),
					e.on("drain", i),
					e._isStdio ||
						(t && !1 === t.end) ||
						(a.on("end", o), a.on("close", l));
				var s = !1;
				function o() {
					s || ((s = !0), e.end());
				}
				function l() {
					s ||
						((s = !0),
						"function" == typeof e.destroy && e.destroy());
				}
				function c(e) {
					if ((u(), 0 === r.listenerCount(this, "error"))) throw e;
				}
				function u() {
					a.removeListener("data", n),
						e.removeListener("drain", i),
						a.removeListener("end", o),
						a.removeListener("close", l),
						a.removeListener("error", c),
						e.removeListener("error", c),
						a.removeListener("end", u),
						a.removeListener("close", u),
						e.removeListener("close", u);
				}
				return (
					a.on("error", c),
					e.on("error", c),
					a.on("end", u),
					a.on("close", u),
					e.on("close", u),
					e.emit("pipe", a),
					e
				);
			});
	},
	function (e, t, a) {
		"use strict";
		(function (t, r) {
			var n = a(20);
			e.exports = y;
			var i,
				s = a(32);
			y.ReadableState = v;
			a(26).EventEmitter;
			var o = function (e, t) {
					return e.listeners(t).length;
				},
				l = a(37),
				c = a(28).Buffer,
				u = t.Uint8Array || function () {};
			var d = Object.create(a(17));
			d.inherits = a(14);
			var f = a(85),
				h = void 0;
			h = f && f.debuglog ? f.debuglog("stream") : function () {};
			var p,
				m = a(86),
				g = a(38);
			d.inherits(y, l);
			var b = ["error", "close", "destroy", "pause", "resume"];
			function v(e, t) {
				e = e || {};
				var r = t instanceof (i = i || a(12));
				(this.objectMode = !!e.objectMode),
					r &&
						(this.objectMode =
							this.objectMode || !!e.readableObjectMode);
				var n = e.highWaterMark,
					s = e.readableHighWaterMark,
					o = this.objectMode ? 16 : 16384;
				(this.highWaterMark =
					n || 0 === n ? n : r && (s || 0 === s) ? s : o),
					(this.highWaterMark = Math.floor(this.highWaterMark)),
					(this.buffer = new m()),
					(this.length = 0),
					(this.pipes = null),
					(this.pipesCount = 0),
					(this.flowing = null),
					(this.ended = !1),
					(this.endEmitted = !1),
					(this.reading = !1),
					(this.sync = !0),
					(this.needReadable = !1),
					(this.emittedReadable = !1),
					(this.readableListening = !1),
					(this.resumeScheduled = !1),
					(this.destroyed = !1),
					(this.defaultEncoding = e.defaultEncoding || "utf8"),
					(this.awaitDrain = 0),
					(this.readingMore = !1),
					(this.decoder = null),
					(this.encoding = null),
					e.encoding &&
						(p || (p = a(39).StringDecoder),
						(this.decoder = new p(e.encoding)),
						(this.encoding = e.encoding));
			}
			function y(e) {
				if (((i = i || a(12)), !(this instanceof y))) return new y(e);
				(this._readableState = new v(e, this)),
					(this.readable = !0),
					e &&
						("function" == typeof e.read && (this._read = e.read),
						"function" == typeof e.destroy &&
							(this._destroy = e.destroy)),
					l.call(this);
			}
			function w(e, t, a, r, n) {
				var i,
					s = e._readableState;
				null === t
					? ((s.reading = !1),
					  (function (e, t) {
							if (t.ended) return;
							if (t.decoder) {
								var a = t.decoder.end();
								a &&
									a.length &&
									(t.buffer.push(a),
									(t.length += t.objectMode ? 1 : a.length));
							}
							(t.ended = !0), S(e);
					  })(e, s))
					: (n ||
							(i = (function (e, t) {
								var a;
								(r = t),
									c.isBuffer(r) ||
										r instanceof u ||
										"string" == typeof t ||
										void 0 === t ||
										e.objectMode ||
										(a = new TypeError(
											"Invalid non-string/buffer chunk"
										));
								var r;
								return a;
							})(s, t)),
					  i
							? e.emit("error", i)
							: s.objectMode || (t && t.length > 0)
							? ("string" == typeof t ||
									s.objectMode ||
									Object.getPrototypeOf(t) === c.prototype ||
									(t = (function (e) {
										return c.from(e);
									})(t)),
							  r
									? s.endEmitted
										? e.emit(
												"error",
												new Error(
													"stream.unshift() after end event"
												)
										  )
										: T(e, s, t, !0)
									: s.ended
									? e.emit(
											"error",
											new Error("stream.push() after EOF")
									  )
									: ((s.reading = !1),
									  s.decoder && !a
											? ((t = s.decoder.write(t)),
											  s.objectMode || 0 !== t.length
													? T(e, s, t, !1)
													: C(e, s))
											: T(e, s, t, !1)))
							: r || (s.reading = !1));
				return (function (e) {
					return (
						!e.ended &&
						(e.needReadable ||
							e.length < e.highWaterMark ||
							0 === e.length)
					);
				})(s);
			}
			function T(e, t, a, r) {
				t.flowing && 0 === t.length && !t.sync
					? (e.emit("data", a), e.read(0))
					: ((t.length += t.objectMode ? 1 : a.length),
					  r ? t.buffer.unshift(a) : t.buffer.push(a),
					  t.needReadable && S(e)),
					C(e, t);
			}
			Object.defineProperty(y.prototype, "destroyed", {
				get: function () {
					return (
						void 0 !== this._readableState &&
						this._readableState.destroyed
					);
				},
				set: function (e) {
					this._readableState && (this._readableState.destroyed = e);
				},
			}),
				(y.prototype.destroy = g.destroy),
				(y.prototype._undestroy = g.undestroy),
				(y.prototype._destroy = function (e, t) {
					this.push(null), t(e);
				}),
				(y.prototype.push = function (e, t) {
					var a,
						r = this._readableState;
					return (
						r.objectMode
							? (a = !0)
							: "string" == typeof e &&
							  ((t = t || r.defaultEncoding) !== r.encoding &&
									((e = c.from(e, t)), (t = "")),
							  (a = !0)),
						w(this, e, t, !1, a)
					);
				}),
				(y.prototype.unshift = function (e) {
					return w(this, e, null, !0, !1);
				}),
				(y.prototype.isPaused = function () {
					return !1 === this._readableState.flowing;
				}),
				(y.prototype.setEncoding = function (e) {
					return (
						p || (p = a(39).StringDecoder),
						(this._readableState.decoder = new p(e)),
						(this._readableState.encoding = e),
						this
					);
				});
			var _ = 8388608;
			function k(e, t) {
				return e <= 0 || (0 === t.length && t.ended)
					? 0
					: t.objectMode
					? 1
					: e != e
					? t.flowing && t.length
						? t.buffer.head.data.length
						: t.length
					: (e > t.highWaterMark &&
							(t.highWaterMark = (function (e) {
								return (
									e >= _
										? (e = _)
										: (e--,
										  (e |= e >>> 1),
										  (e |= e >>> 2),
										  (e |= e >>> 4),
										  (e |= e >>> 8),
										  (e |= e >>> 16),
										  e++),
									e
								);
							})(e)),
					  e <= t.length
							? e
							: t.ended
							? t.length
							: ((t.needReadable = !0), 0));
			}
			function S(e) {
				var t = e._readableState;
				(t.needReadable = !1),
					t.emittedReadable ||
						(h("emitReadable", t.flowing),
						(t.emittedReadable = !0),
						t.sync ? n.nextTick(E, e) : E(e));
			}
			function E(e) {
				h("emit readable"), e.emit("readable"), D(e);
			}
			function C(e, t) {
				t.readingMore || ((t.readingMore = !0), n.nextTick(I, e, t));
			}
			function I(e, t) {
				for (
					var a = t.length;
					!t.reading &&
					!t.flowing &&
					!t.ended &&
					t.length < t.highWaterMark &&
					(h("maybeReadMore read 0"), e.read(0), a !== t.length);

				)
					a = t.length;
				t.readingMore = !1;
			}
			function x(e) {
				h("readable nexttick read 0"), e.read(0);
			}
			function A(e, t) {
				t.reading || (h("resume read 0"), e.read(0)),
					(t.resumeScheduled = !1),
					(t.awaitDrain = 0),
					e.emit("resume"),
					D(e),
					t.flowing && !t.reading && e.read(0);
			}
			function D(e) {
				var t = e._readableState;
				for (h("flow", t.flowing); t.flowing && null !== e.read(); );
			}
			function O(e, t) {
				return 0 === t.length
					? null
					: (t.objectMode
							? (a = t.buffer.shift())
							: !e || e >= t.length
							? ((a = t.decoder
									? t.buffer.join("")
									: 1 === t.buffer.length
									? t.buffer.head.data
									: t.buffer.concat(t.length)),
							  t.buffer.clear())
							: (a = (function (e, t, a) {
									var r;
									e < t.head.data.length
										? ((r = t.head.data.slice(0, e)),
										  (t.head.data = t.head.data.slice(e)))
										: (r =
												e === t.head.data.length
													? t.shift()
													: a
													? (function (e, t) {
															var a = t.head,
																r = 1,
																n = a.data;
															e -= n.length;
															for (
																;
																(a = a.next);

															) {
																var i = a.data,
																	s =
																		e >
																		i.length
																			? i.length
																			: e;
																if (
																	(s ===
																	i.length
																		? (n +=
																				i)
																		: (n +=
																				i.slice(
																					0,
																					e
																				)),
																	0 ===
																		(e -=
																			s))
																) {
																	s ===
																	i.length
																		? (++r,
																		  a.next
																				? (t.head =
																						a.next)
																				: (t.head =
																						t.tail =
																							null))
																		: ((t.head =
																				a),
																		  (a.data =
																				i.slice(
																					s
																				)));
																	break;
																}
																++r;
															}
															return (
																(t.length -= r),
																n
															);
													  })(e, t)
													: (function (e, t) {
															var a =
																	c.allocUnsafe(
																		e
																	),
																r = t.head,
																n = 1;
															r.data.copy(a),
																(e -=
																	r.data
																		.length);
															for (
																;
																(r = r.next);

															) {
																var i = r.data,
																	s =
																		e >
																		i.length
																			? i.length
																			: e;
																if (
																	(i.copy(
																		a,
																		a.length -
																			e,
																		0,
																		s
																	),
																	0 ===
																		(e -=
																			s))
																) {
																	s ===
																	i.length
																		? (++n,
																		  r.next
																				? (t.head =
																						r.next)
																				: (t.head =
																						t.tail =
																							null))
																		: ((t.head =
																				r),
																		  (r.data =
																				i.slice(
																					s
																				)));
																	break;
																}
																++n;
															}
															return (
																(t.length -= n),
																a
															);
													  })(e, t));
									return r;
							  })(e, t.buffer, t.decoder)),
					  a);
				var a;
			}
			function M(e) {
				var t = e._readableState;
				if (t.length > 0)
					throw new Error(
						'"endReadable()" called on non-empty stream'
					);
				t.endEmitted || ((t.ended = !0), n.nextTick(P, t, e));
			}
			function P(e, t) {
				e.endEmitted ||
					0 !== e.length ||
					((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
			}
			function F(e, t) {
				for (var a = 0, r = e.length; a < r; a++)
					if (e[a] === t) return a;
				return -1;
			}
			(y.prototype.read = function (e) {
				h("read", e), (e = parseInt(e, 10));
				var t = this._readableState,
					a = e;
				if (
					(0 !== e && (t.emittedReadable = !1),
					0 === e &&
						t.needReadable &&
						(t.length >= t.highWaterMark || t.ended))
				)
					return (
						h("read: emitReadable", t.length, t.ended),
						0 === t.length && t.ended ? M(this) : S(this),
						null
					);
				if (0 === (e = k(e, t)) && t.ended)
					return 0 === t.length && M(this), null;
				var r,
					n = t.needReadable;
				return (
					h("need readable", n),
					(0 === t.length || t.length - e < t.highWaterMark) &&
						h("length less than watermark", (n = !0)),
					t.ended || t.reading
						? h("reading or ended", (n = !1))
						: n &&
						  (h("do read"),
						  (t.reading = !0),
						  (t.sync = !0),
						  0 === t.length && (t.needReadable = !0),
						  this._read(t.highWaterMark),
						  (t.sync = !1),
						  t.reading || (e = k(a, t))),
					null === (r = e > 0 ? O(e, t) : null)
						? ((t.needReadable = !0), (e = 0))
						: (t.length -= e),
					0 === t.length &&
						(t.ended || (t.needReadable = !0),
						a !== e && t.ended && M(this)),
					null !== r && this.emit("data", r),
					r
				);
			}),
				(y.prototype._read = function (e) {
					this.emit("error", new Error("_read() is not implemented"));
				}),
				(y.prototype.pipe = function (e, t) {
					var a = this,
						i = this._readableState;
					switch (i.pipesCount) {
						case 0:
							i.pipes = e;
							break;
						case 1:
							i.pipes = [i.pipes, e];
							break;
						default:
							i.pipes.push(e);
					}
					(i.pipesCount += 1),
						h("pipe count=%d opts=%j", i.pipesCount, t);
					var l =
						(!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr
							? u
							: y;
					function c(t, r) {
						h("onunpipe"),
							t === a &&
								r &&
								!1 === r.hasUnpiped &&
								((r.hasUnpiped = !0),
								h("cleanup"),
								e.removeListener("close", b),
								e.removeListener("finish", v),
								e.removeListener("drain", d),
								e.removeListener("error", g),
								e.removeListener("unpipe", c),
								a.removeListener("end", u),
								a.removeListener("end", y),
								a.removeListener("data", m),
								(f = !0),
								!i.awaitDrain ||
									(e._writableState &&
										!e._writableState.needDrain) ||
									d());
					}
					function u() {
						h("onend"), e.end();
					}
					i.endEmitted ? n.nextTick(l) : a.once("end", l),
						e.on("unpipe", c);
					var d = (function (e) {
						return function () {
							var t = e._readableState;
							h("pipeOnDrain", t.awaitDrain),
								t.awaitDrain && t.awaitDrain--,
								0 === t.awaitDrain &&
									o(e, "data") &&
									((t.flowing = !0), D(e));
						};
					})(a);
					e.on("drain", d);
					var f = !1;
					var p = !1;
					function m(t) {
						h("ondata"),
							(p = !1),
							!1 !== e.write(t) ||
								p ||
								(((1 === i.pipesCount && i.pipes === e) ||
									(i.pipesCount > 1 &&
										-1 !== F(i.pipes, e))) &&
									!f &&
									(h(
										"false write response, pause",
										a._readableState.awaitDrain
									),
									a._readableState.awaitDrain++,
									(p = !0)),
								a.pause());
					}
					function g(t) {
						h("onerror", t),
							y(),
							e.removeListener("error", g),
							0 === o(e, "error") && e.emit("error", t);
					}
					function b() {
						e.removeListener("finish", v), y();
					}
					function v() {
						h("onfinish"), e.removeListener("close", b), y();
					}
					function y() {
						h("unpipe"), a.unpipe(e);
					}
					return (
						a.on("data", m),
						(function (e, t, a) {
							if ("function" == typeof e.prependListener)
								return e.prependListener(t, a);
							e._events && e._events[t]
								? s(e._events[t])
									? e._events[t].unshift(a)
									: (e._events[t] = [a, e._events[t]])
								: e.on(t, a);
						})(e, "error", g),
						e.once("close", b),
						e.once("finish", v),
						e.emit("pipe", a),
						i.flowing || (h("pipe resume"), a.resume()),
						e
					);
				}),
				(y.prototype.unpipe = function (e) {
					var t = this._readableState,
						a = { hasUnpiped: !1 };
					if (0 === t.pipesCount) return this;
					if (1 === t.pipesCount)
						return (
							(e && e !== t.pipes) ||
								(e || (e = t.pipes),
								(t.pipes = null),
								(t.pipesCount = 0),
								(t.flowing = !1),
								e && e.emit("unpipe", this, a)),
							this
						);
					if (!e) {
						var r = t.pipes,
							n = t.pipesCount;
						(t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
						for (var i = 0; i < n; i++)
							r[i].emit("unpipe", this, a);
						return this;
					}
					var s = F(t.pipes, e);
					return (
						-1 === s ||
							(t.pipes.splice(s, 1),
							(t.pipesCount -= 1),
							1 === t.pipesCount && (t.pipes = t.pipes[0]),
							e.emit("unpipe", this, a)),
						this
					);
				}),
				(y.prototype.on = function (e, t) {
					var a = l.prototype.on.call(this, e, t);
					if ("data" === e)
						!1 !== this._readableState.flowing && this.resume();
					else if ("readable" === e) {
						var r = this._readableState;
						r.endEmitted ||
							r.readableListening ||
							((r.readableListening = r.needReadable = !0),
							(r.emittedReadable = !1),
							r.reading
								? r.length && S(this)
								: n.nextTick(x, this));
					}
					return a;
				}),
				(y.prototype.addListener = y.prototype.on),
				(y.prototype.resume = function () {
					var e = this._readableState;
					return (
						e.flowing ||
							(h("resume"),
							(e.flowing = !0),
							(function (e, t) {
								t.resumeScheduled ||
									((t.resumeScheduled = !0),
									n.nextTick(A, e, t));
							})(this, e)),
						this
					);
				}),
				(y.prototype.pause = function () {
					return (
						h("call pause flowing=%j", this._readableState.flowing),
						!1 !== this._readableState.flowing &&
							(h("pause"),
							(this._readableState.flowing = !1),
							this.emit("pause")),
						this
					);
				}),
				(y.prototype.wrap = function (e) {
					var t = this,
						a = this._readableState,
						r = !1;
					for (var n in (e.on("end", function () {
						if ((h("wrapped end"), a.decoder && !a.ended)) {
							var e = a.decoder.end();
							e && e.length && t.push(e);
						}
						t.push(null);
					}),
					e.on("data", function (n) {
						(h("wrapped data"),
						a.decoder && (n = a.decoder.write(n)),
						a.objectMode && null == n) ||
							((a.objectMode || (n && n.length)) &&
								(t.push(n) || ((r = !0), e.pause())));
					}),
					e))
						void 0 === this[n] &&
							"function" == typeof e[n] &&
							(this[n] = (function (t) {
								return function () {
									return e[t].apply(e, arguments);
								};
							})(n));
					for (var i = 0; i < b.length; i++)
						e.on(b[i], this.emit.bind(this, b[i]));
					return (
						(this._read = function (t) {
							h("wrapped _read", t), r && ((r = !1), e.resume());
						}),
						this
					);
				}),
				Object.defineProperty(y.prototype, "readableHighWaterMark", {
					enumerable: !1,
					get: function () {
						return this._readableState.highWaterMark;
					},
				}),
				(y._fromList = O);
		}.call(this, a(11), a(9)));
	},
	function (e, t, a) {
		e.exports = a(26).EventEmitter;
	},
	function (e, t, a) {
		"use strict";
		var r = a(20);
		function n(e, t) {
			e.emit("error", t);
		}
		e.exports = {
			destroy: function (e, t) {
				var a = this,
					i = this._readableState && this._readableState.destroyed,
					s = this._writableState && this._writableState.destroyed;
				return i || s
					? (t
							? t(e)
							: !e ||
							  (this._writableState &&
									this._writableState.errorEmitted) ||
							  r.nextTick(n, this, e),
					  this)
					: (this._readableState &&
							(this._readableState.destroyed = !0),
					  this._writableState &&
							(this._writableState.destroyed = !0),
					  this._destroy(e || null, function (e) {
							!t && e
								? (r.nextTick(n, a, e),
								  a._writableState &&
										(a._writableState.errorEmitted = !0))
								: t && t(e);
					  }),
					  this);
			},
			undestroy: function () {
				this._readableState &&
					((this._readableState.destroyed = !1),
					(this._readableState.reading = !1),
					(this._readableState.ended = !1),
					(this._readableState.endEmitted = !1)),
					this._writableState &&
						((this._writableState.destroyed = !1),
						(this._writableState.ended = !1),
						(this._writableState.ending = !1),
						(this._writableState.finished = !1),
						(this._writableState.errorEmitted = !1));
			},
		};
	},
	function (e, t, a) {
		"use strict";
		var r = a(91).Buffer,
			n =
				r.isEncoding ||
				function (e) {
					switch ((e = "" + e) && e.toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
						case "raw":
							return !0;
						default:
							return !1;
					}
				};
		function i(e) {
			var t;
			switch (
				((this.encoding = (function (e) {
					var t = (function (e) {
						if (!e) return "utf8";
						for (var t; ; )
							switch (e) {
								case "utf8":
								case "utf-8":
									return "utf8";
								case "ucs2":
								case "ucs-2":
								case "utf16le":
								case "utf-16le":
									return "utf16le";
								case "latin1":
								case "binary":
									return "latin1";
								case "base64":
								case "ascii":
								case "hex":
									return e;
								default:
									if (t) return;
									(e = ("" + e).toLowerCase()), (t = !0);
							}
					})(e);
					if ("string" != typeof t && (r.isEncoding === n || !n(e)))
						throw new Error("Unknown encoding: " + e);
					return t || e;
				})(e)),
				this.encoding)
			) {
				case "utf16le":
					(this.text = l), (this.end = c), (t = 4);
					break;
				case "utf8":
					(this.fillLast = o), (t = 4);
					break;
				case "base64":
					(this.text = u), (this.end = d), (t = 3);
					break;
				default:
					return (this.write = f), void (this.end = h);
			}
			(this.lastNeed = 0),
				(this.lastTotal = 0),
				(this.lastChar = r.allocUnsafe(t));
		}
		function s(e) {
			return e <= 127
				? 0
				: e >> 5 == 6
				? 2
				: e >> 4 == 14
				? 3
				: e >> 3 == 30
				? 4
				: e >> 6 == 2
				? -1
				: -2;
		}
		function o(e) {
			var t = this.lastTotal - this.lastNeed,
				a = (function (e, t, a) {
					if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
					if (e.lastNeed > 1 && t.length > 1) {
						if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
						if (
							e.lastNeed > 2 &&
							t.length > 2 &&
							128 != (192 & t[2])
						)
							return (e.lastNeed = 2), "�";
					}
				})(this, e);
			return void 0 !== a
				? a
				: this.lastNeed <= e.length
				? (e.copy(this.lastChar, t, 0, this.lastNeed),
				  this.lastChar.toString(this.encoding, 0, this.lastTotal))
				: (e.copy(this.lastChar, t, 0, e.length),
				  void (this.lastNeed -= e.length));
		}
		function l(e, t) {
			if ((e.length - t) % 2 == 0) {
				var a = e.toString("utf16le", t);
				if (a) {
					var r = a.charCodeAt(a.length - 1);
					if (r >= 55296 && r <= 56319)
						return (
							(this.lastNeed = 2),
							(this.lastTotal = 4),
							(this.lastChar[0] = e[e.length - 2]),
							(this.lastChar[1] = e[e.length - 1]),
							a.slice(0, -1)
						);
				}
				return a;
			}
			return (
				(this.lastNeed = 1),
				(this.lastTotal = 2),
				(this.lastChar[0] = e[e.length - 1]),
				e.toString("utf16le", t, e.length - 1)
			);
		}
		function c(e) {
			var t = e && e.length ? this.write(e) : "";
			if (this.lastNeed) {
				var a = this.lastTotal - this.lastNeed;
				return t + this.lastChar.toString("utf16le", 0, a);
			}
			return t;
		}
		function u(e, t) {
			var a = (e.length - t) % 3;
			return 0 === a
				? e.toString("base64", t)
				: ((this.lastNeed = 3 - a),
				  (this.lastTotal = 3),
				  1 === a
						? (this.lastChar[0] = e[e.length - 1])
						: ((this.lastChar[0] = e[e.length - 2]),
						  (this.lastChar[1] = e[e.length - 1])),
				  e.toString("base64", t, e.length - a));
		}
		function d(e) {
			var t = e && e.length ? this.write(e) : "";
			return this.lastNeed
				? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
				: t;
		}
		function f(e) {
			return e.toString(this.encoding);
		}
		function h(e) {
			return e && e.length ? this.write(e) : "";
		}
		(t.StringDecoder = i),
			(i.prototype.write = function (e) {
				if (0 === e.length) return "";
				var t, a;
				if (this.lastNeed) {
					if (void 0 === (t = this.fillLast(e))) return "";
					(a = this.lastNeed), (this.lastNeed = 0);
				} else a = 0;
				return a < e.length
					? t
						? t + this.text(e, a)
						: this.text(e, a)
					: t || "";
			}),
			(i.prototype.end = function (e) {
				var t = e && e.length ? this.write(e) : "";
				return this.lastNeed ? t + "�" : t;
			}),
			(i.prototype.text = function (e, t) {
				var a = (function (e, t, a) {
					var r = t.length - 1;
					if (r < a) return 0;
					var n = s(t[r]);
					if (n >= 0) return n > 0 && (e.lastNeed = n - 1), n;
					if (--r < a || -2 === n) return 0;
					if ((n = s(t[r])) >= 0)
						return n > 0 && (e.lastNeed = n - 2), n;
					if (--r < a || -2 === n) return 0;
					if ((n = s(t[r])) >= 0)
						return (
							n > 0 && (2 === n ? (n = 0) : (e.lastNeed = n - 3)),
							n
						);
					return 0;
				})(this, e, t);
				if (!this.lastNeed) return e.toString("utf8", t);
				this.lastTotal = a;
				var r = e.length - (a - this.lastNeed);
				return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r);
			}),
			(i.prototype.fillLast = function (e) {
				if (this.lastNeed <= e.length)
					return (
						e.copy(
							this.lastChar,
							this.lastTotal - this.lastNeed,
							0,
							this.lastNeed
						),
						this.lastChar.toString(this.encoding, 0, this.lastTotal)
					);
				e.copy(
					this.lastChar,
					this.lastTotal - this.lastNeed,
					0,
					e.length
				),
					(this.lastNeed -= e.length);
			});
	},
	function (e, t, a) {
		"use strict";
		e.exports = s;
		var r = a(12),
			n = Object.create(a(17));
		function i(e, t) {
			var a = this._transformState;
			a.transforming = !1;
			var r = a.writecb;
			if (!r)
				return this.emit(
					"error",
					new Error("write callback called multiple times")
				);
			(a.writechunk = null),
				(a.writecb = null),
				null != t && this.push(t),
				r(e);
			var n = this._readableState;
			(n.reading = !1),
				(n.needReadable || n.length < n.highWaterMark) &&
					this._read(n.highWaterMark);
		}
		function s(e) {
			if (!(this instanceof s)) return new s(e);
			r.call(this, e),
				(this._transformState = {
					afterTransform: i.bind(this),
					needTransform: !1,
					transforming: !1,
					writecb: null,
					writechunk: null,
					writeencoding: null,
				}),
				(this._readableState.needReadable = !0),
				(this._readableState.sync = !1),
				e &&
					("function" == typeof e.transform &&
						(this._transform = e.transform),
					"function" == typeof e.flush && (this._flush = e.flush)),
				this.on("prefinish", o);
		}
		function o() {
			var e = this;
			"function" == typeof this._flush
				? this._flush(function (t, a) {
						l(e, t, a);
				  })
				: l(this, null, null);
		}
		function l(e, t, a) {
			if (t) return e.emit("error", t);
			if ((null != a && e.push(a), e._writableState.length))
				throw new Error("Calling transform done when ws.length != 0");
			if (e._transformState.transforming)
				throw new Error(
					"Calling transform done when still transforming"
				);
			return e.push(null);
		}
		(n.inherits = a(14)),
			n.inherits(s, r),
			(s.prototype.push = function (e, t) {
				return (
					(this._transformState.needTransform = !1),
					r.prototype.push.call(this, e, t)
				);
			}),
			(s.prototype._transform = function (e, t, a) {
				throw new Error("_transform() is not implemented");
			}),
			(s.prototype._write = function (e, t, a) {
				var r = this._transformState;
				if (
					((r.writecb = a),
					(r.writechunk = e),
					(r.writeencoding = t),
					!r.transforming)
				) {
					var n = this._readableState;
					(r.needTransform ||
						n.needReadable ||
						n.length < n.highWaterMark) &&
						this._read(n.highWaterMark);
				}
			}),
			(s.prototype._read = function (e) {
				var t = this._transformState;
				null !== t.writechunk && t.writecb && !t.transforming
					? ((t.transforming = !0),
					  this._transform(
							t.writechunk,
							t.writeencoding,
							t.afterTransform
					  ))
					: (t.needTransform = !0);
			}),
			(s.prototype._destroy = function (e, t) {
				var a = this;
				r.prototype._destroy.call(this, e, function (e) {
					t(e), a.emit("close");
				});
			});
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			class a {
				constructor(e) {
					this.str = e;
				}
				static fromBin(e, t = 0) {
					return new a(this.decode(e, t));
				}
				static decode(e, t = 0) {
					return (
						e.readUInt32LE(t).toString(16) +
						"-" +
						e.readUInt16LE(t + 4).toString(16) +
						"-" +
						e.readUInt16LE(t + 6).toString(16) +
						"-" +
						e.readUInt16BE(t + 8).toString(16) +
						"-" +
						e.slice(t + 10, t + 16).toString("hex")
					).toUpperCase();
				}
				static decodeMediaType(e) {
					switch (e.str) {
						case a.AudioMedia.str:
							return "audio";
						case a.VideoMedia.str:
							return "video";
						case a.CommandMedia.str:
							return "command";
						case a.Degradable_JPEG_Media.str:
							return "degradable-jpeg";
						case a.FileTransferMedia.str:
							return "file-transfer";
						case a.BinaryMedia.str:
							return "binary";
					}
				}
				static encode(t) {
					const a = e.alloc(16);
					return (
						a.writeUInt32LE(parseInt(t.slice(0, 8), 16), 0),
						a.writeUInt16LE(parseInt(t.slice(9, 13), 16), 4),
						a.writeUInt16LE(parseInt(t.slice(14, 18), 16), 6),
						e.from(t.slice(19, 23), "hex").copy(a, 8),
						e.from(t.slice(24), "hex").copy(a, 10),
						a
					);
				}
				equals(e) {
					return this.str === e.str;
				}
				toBin() {
					return a.encode(this.str);
				}
			}
			(t.default = a),
				(a.HeaderObject = new a(
					"75B22630-668E-11CF-A6D9-00AA0062CE6C"
				)),
				(a.DataObject = new a("75B22636-668E-11CF-A6D9-00AA0062CE6C")),
				(a.SimpleIndexObject = new a(
					"33000890-E5B1-11CF-89F4-00A0C90349CB"
				)),
				(a.IndexObject = new a("D6E229D3-35DA-11D1-9034-00A0C90349BE")),
				(a.MediaObjectIndexObject = new a(
					"FEB103F8-12AD-4C64-840F-2A1D2F7AD48C"
				)),
				(a.TimecodeIndexObject = new a(
					"3CB73FD0-0C4A-4803-953D-EDF7B6228F0C"
				)),
				(a.FilePropertiesObject = new a(
					"8CABDCA1-A947-11CF-8EE4-00C00C205365"
				)),
				(a.StreamPropertiesObject = new a(
					"B7DC0791-A9B7-11CF-8EE6-00C00C205365"
				)),
				(a.HeaderExtensionObject = new a(
					"5FBF03B5-A92E-11CF-8EE3-00C00C205365"
				)),
				(a.CodecListObject = new a(
					"86D15240-311D-11D0-A3A4-00A0C90348F6"
				)),
				(a.ScriptCommandObject = new a(
					"1EFB1A30-0B62-11D0-A39B-00A0C90348F6"
				)),
				(a.MarkerObject = new a(
					"F487CD01-A951-11CF-8EE6-00C00C205365"
				)),
				(a.BitrateMutualExclusionObject = new a(
					"D6E229DC-35DA-11D1-9034-00A0C90349BE"
				)),
				(a.ErrorCorrectionObject = new a(
					"75B22635-668E-11CF-A6D9-00AA0062CE6C"
				)),
				(a.ContentDescriptionObject = new a(
					"75B22633-668E-11CF-A6D9-00AA0062CE6C"
				)),
				(a.ExtendedContentDescriptionObject = new a(
					"D2D0A440-E307-11D2-97F0-00A0C95EA850"
				)),
				(a.ContentBrandingObject = new a(
					"2211B3FA-BD23-11D2-B4B7-00A0C955FC6E"
				)),
				(a.StreamBitratePropertiesObject = new a(
					"7BF875CE-468D-11D1-8D82-006097C9A2B2"
				)),
				(a.ContentEncryptionObject = new a(
					"2211B3FB-BD23-11D2-B4B7-00A0C955FC6E"
				)),
				(a.ExtendedContentEncryptionObject = new a(
					"298AE614-2622-4C17-B935-DAE07EE9289C"
				)),
				(a.DigitalSignatureObject = new a(
					"2211B3FC-BD23-11D2-B4B7-00A0C955FC6E"
				)),
				(a.PaddingObject = new a(
					"1806D474-CADF-4509-A4BA-9AABCB96AAE8"
				)),
				(a.ExtendedStreamPropertiesObject = new a(
					"14E6A5CB-C672-4332-8399-A96952065B5A"
				)),
				(a.AdvancedMutualExclusionObject = new a(
					"A08649CF-4775-4670-8A16-6E35357566CD"
				)),
				(a.GroupMutualExclusionObject = new a(
					"D1465A40-5A79-4338-B71B-E36B8FD6C249"
				)),
				(a.StreamPrioritizationObject = new a(
					"D4FED15B-88D3-454F-81F0-ED5C45999E24"
				)),
				(a.BandwidthSharingObject = new a(
					"A69609E6-517B-11D2-B6AF-00C04FD908E9"
				)),
				(a.LanguageListObject = new a(
					"7C4346A9-EFE0-4BFC-B229-393EDE415C85"
				)),
				(a.MetadataObject = new a(
					"C5F8CBEA-5BAF-4877-8467-AA8C44FA4CCA"
				)),
				(a.MetadataLibraryObject = new a(
					"44231C94-9498-49D1-A141-1D134E457054"
				)),
				(a.IndexParametersObject = new a(
					"D6E229DF-35DA-11D1-9034-00A0C90349BE"
				)),
				(a.MediaObjectIndexParametersObject = new a(
					"6B203BAD-3F11-48E4-ACA8-D7613DE2CFA7"
				)),
				(a.TimecodeIndexParametersObject = new a(
					"F55E496D-9797-4B5D-8C8B-604DFE9BFB24"
				)),
				(a.CompatibilityObject = new a(
					"26F18B5D-4584-47EC-9F5F-0E651F0452C9"
				)),
				(a.AdvancedContentEncryptionObject = new a(
					"43058533-6981-49E6-9B74-AD12CB86D58C"
				)),
				(a.AudioMedia = new a("F8699E40-5B4D-11CF-A8FD-00805F5C442B")),
				(a.VideoMedia = new a("BC19EFC0-5B4D-11CF-A8FD-00805F5C442B")),
				(a.CommandMedia = new a(
					"59DACFC0-59E6-11D0-A3AC-00A0C90348F6"
				)),
				(a.JFIF_Media = new a("B61BE100-5B4E-11CF-A8FD-00805F5C442B")),
				(a.Degradable_JPEG_Media = new a(
					"35907DE0-E415-11CF-A917-00805F5C442B"
				)),
				(a.FileTransferMedia = new a(
					"91BD222C-F21C-497A-8B6D-5AA86BFC0185"
				)),
				(a.BinaryMedia = new a("3AFB65E2-47EF-40F2-AC2C-70A90D71D343")),
				(a.ASF_Index_Placeholder_Object = new a(
					"D9AADE20-7C17-4F9C-BC28-8555DD98E2A2"
				));
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(0),
				n = a(16);
			class i {
				constructor(e) {
					this.len = e;
				}
				static fromBase64(t) {
					return this.fromBuffer(e.from(t, "base64"));
				}
				static fromBuffer(e) {
					return new i(e.length).get(e, 0);
				}
				get(t, a) {
					const i = n.AttachedPictureType[r.UINT32_BE.get(t, a)],
						s = r.UINT32_BE.get(t, (a += 4)),
						o = t.toString("utf-8", (a += 4), a + s),
						l = r.UINT32_BE.get(t, (a += s)),
						c = t.toString("utf-8", (a += 4), a + l),
						u = r.UINT32_BE.get(t, (a += l)),
						d = r.UINT32_BE.get(t, (a += 4)),
						f = r.UINT32_BE.get(t, (a += 4)),
						h = r.UINT32_BE.get(t, (a += 4)),
						p = r.UINT32_BE.get(t, (a += 4));
					return {
						type: i,
						format: o,
						description: c,
						width: u,
						height: d,
						colour_depth: f,
						indexed_color: h,
						data: e.from(t.slice((a += 4), a + p)),
					};
				}
			}
			(t.VorbisPictureToken = i),
				(t.CommonHeader = {
					len: 7,
					get: (e, t) => ({
						packetType: e.readUInt8(t),
						vorbis: new r.StringType(6, "ascii").get(e, t + 1),
					}),
				}),
				(t.IdentificationHeader = {
					len: 23,
					get: (e, t) => ({
						version: e.readUInt32LE(t + 0),
						channelMode: e.readUInt8(t + 4),
						sampleRate: e.readUInt32LE(t + 5),
						bitrateMax: e.readUInt32LE(t + 9),
						bitrateNominal: e.readUInt32LE(t + 13),
						bitrateMin: e.readUInt32LE(t + 17),
					}),
				});
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0);
		t.VorbisDecoder = class {
			constructor(e, t) {
				(this.data = e), (this.offset = t);
			}
			readInt32() {
				const e = r.UINT32_LE.get(this.data, this.offset);
				return (this.offset += 4), e;
			}
			readStringUtf8() {
				const e = this.readInt32(),
					t = this.data.toString(
						"utf8",
						this.offset,
						this.offset + e
					);
				return (this.offset += e), t;
			}
			parseUserComment() {
				const e = this.offset,
					t = this.readStringUtf8(),
					a = t.indexOf("=");
				return {
					key: t.slice(0, a).toUpperCase(),
					value: t.slice(a + 1),
					len: this.offset - e,
				};
			}
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(6),
			i = a(5),
			s = a(1)("music-metadata:parser:MP4:atom");
		(t.Header = {
			len: 8,
			get: (e, t) => {
				const a = r.UINT32_BE.get(e, t);
				if (a < 0) throw new Error("Invalid atom header length");
				return { length: a, name: n.FourCcToken.get(e, t + 4) };
			},
			put: (e, t, a) => (
				r.UINT32_BE.put(e, t, a.length),
				n.FourCcToken.put(e, t + 4, a.name)
			),
		}),
			(t.ExtendedSize = r.UINT64_BE),
			(t.ftyp = {
				len: 4,
				get: (e, t) => ({
					type: new r.StringType(4, "ascii").get(e, t),
				}),
			}),
			(t.tkhd = {
				len: 4,
				get: (e, t) => ({
					type: new r.StringType(4, "ascii").get(e, t),
				}),
			}),
			(t.mhdr = {
				len: 8,
				get: (e, t) => ({
					version: r.UINT8.get(e, t + 0),
					flags: r.UINT24_BE.get(e, t + 1),
					nextItemID: r.UINT32_BE.get(e, t + 4),
				}),
			});
		class o {
			constructor(e, t, a) {
				if (((this.len = e), e < t))
					throw new Error(
						`Atom ${a} expected to be ${t}, but specifies ${e} bytes long.`
					);
				e > t &&
					s(
						`Warning: atom ${a} expected to be ${t}, but was actually ${e} bytes long.`
					);
			}
		}
		t.FixedLengthAtom = o;
		t.MdhdAtom = class extends o {
			constructor(e) {
				super(e, 24, "mdhd"), (this.len = e);
			}
			get(e, t) {
				return {
					version: r.UINT8.get(e, t + 0),
					flags: r.UINT24_BE.get(e, t + 1),
					creationTime: r.UINT32_BE.get(e, t + 4),
					modificationTime: r.UINT32_BE.get(e, t + 8),
					timeScale: r.UINT32_BE.get(e, t + 12),
					duration: r.UINT32_BE.get(e, t + 16),
					language: r.UINT16_BE.get(e, t + 20),
					quality: r.UINT16_BE.get(e, t + 22),
				};
			}
		};
		t.MvhdAtom = class extends o {
			constructor(e) {
				super(e, 100, "mvhd"), (this.len = e);
			}
			get(e, t) {
				return {
					version: r.UINT8.get(e, t),
					flags: r.UINT24_BE.get(e, t + 1),
					creationTime: r.UINT32_BE.get(e, t + 4),
					modificationTime: r.UINT32_BE.get(e, t + 8),
					timeScale: r.UINT32_BE.get(e, t + 12),
					duration: r.UINT32_BE.get(e, t + 16),
					preferredRate: r.UINT32_BE.get(e, t + 20),
					preferredVolume: r.UINT16_BE.get(e, t + 24),
					previewTime: r.UINT32_BE.get(e, t + 72),
					previewDuration: r.UINT32_BE.get(e, t + 76),
					posterTime: r.UINT32_BE.get(e, t + 80),
					selectionTime: r.UINT32_BE.get(e, t + 84),
					selectionDuration: r.UINT32_BE.get(e, t + 88),
					currentTime: r.UINT32_BE.get(e, t + 92),
					nextTrackID: r.UINT32_BE.get(e, t + 96),
				};
			}
		};
		t.DataAtom = class {
			constructor(e) {
				this.len = e;
			}
			get(e, t) {
				return {
					type: {
						set: r.UINT8.get(e, t + 0),
						type: r.UINT24_BE.get(e, t + 1),
					},
					locale: r.UINT24_BE.get(e, t + 4),
					value: new r.BufferType(this.len - 8).get(e, t + 8),
				};
			}
		};
		t.NameAtom = class {
			constructor(e) {
				this.len = e;
			}
			get(e, t) {
				return {
					version: r.UINT8.get(e, t),
					flags: r.UINT24_BE.get(e, t + 1),
					name: new r.StringType(this.len - 4, "utf-8").get(e, t + 4),
				};
			}
		};
		t.TrackHeaderAtom = class {
			constructor(e) {
				this.len = e;
			}
			get(e, t) {
				return {
					version: r.UINT8.get(e, t),
					flags: r.UINT24_BE.get(e, t + 1),
					creationTime: r.UINT32_BE.get(e, t + 4),
					modificationTime: r.UINT32_BE.get(e, t + 8),
					trackId: r.UINT32_BE.get(e, t + 12),
					duration: r.UINT32_BE.get(e, t + 20),
					layer: r.UINT16_BE.get(e, t + 24),
					alternateGroup: r.UINT16_BE.get(e, t + 26),
					volume: r.UINT16_BE.get(e, t + 28),
				};
			}
		};
		const l = 8,
			c = (e, t) => ({
				version: r.UINT8.get(e, t),
				flags: r.UINT24_BE.get(e, t + 1),
				numberOfEntries: r.UINT32_BE.get(e, t + 4),
			});
		class u {
			constructor(e) {
				this.len = e;
			}
			get(e, t) {
				return {
					dataFormat: n.FourCcToken.get(e, t),
					dataReferenceIndex: r.UINT16_BE.get(e, t + 10),
					description: new r.BufferType(this.len - 12).get(e, t + 12),
				};
			}
		}
		(t.StsdAtom = class {
			constructor(e) {
				this.len = e;
			}
			get(e, t) {
				const a = c(e, t);
				t += l;
				const n = [];
				for (let i = 0; i < a.numberOfEntries; ++i) {
					const a = r.UINT32_BE.get(e, t);
					(t += r.UINT32_BE.len),
						n.push(new u(a).get(e, t)),
						(t += a);
				}
				return { header: a, table: n };
			}
		}),
			(t.SoundSampleDescriptionVersion = {
				len: 8,
				get: (e, t) => ({
					version: r.INT16_BE.get(e, t),
					revision: r.INT16_BE.get(e, t + 2),
					vendor: r.INT32_BE.get(e, t + 4),
				}),
			}),
			(t.SoundSampleDescriptionV0 = {
				len: 12,
				get: (e, t) => ({
					numAudioChannels: r.INT16_BE.get(e, t + 0),
					sampleSize: r.INT16_BE.get(e, t + 2),
					compressionId: r.INT16_BE.get(e, t + 4),
					packetSize: r.INT16_BE.get(e, t + 6),
					sampleRate:
						r.UINT16_BE.get(e, t + 8) +
						r.UINT16_BE.get(e, t + 10) / 1e4,
				}),
			});
		class d {
			constructor(e, t) {
				(this.len = e), (this.token = t);
			}
			get(e, t) {
				const a = r.INT32_BE.get(e, t + 4);
				return {
					version: r.INT8.get(e, t + 0),
					flags: r.INT24_BE.get(e, t + 1),
					numberOfEntries: a,
					entries: f(e, this.token, t + 8, this.len - 8, a),
				};
			}
		}
		t.TimeToSampleToken = {
			len: 8,
			get: (e, t) => ({
				count: r.INT32_BE.get(e, t + 0),
				duration: r.INT32_BE.get(e, t + 4),
			}),
		};
		(t.SttsAtom = class extends d {
			constructor(e) {
				super(e, t.TimeToSampleToken), (this.len = e);
			}
		}),
			(t.SampleToChunkToken = {
				len: 12,
				get: (e, t) => ({
					firstChunk: r.INT32_BE.get(e, t),
					samplesPerChunk: r.INT32_BE.get(e, t + 4),
					sampleDescriptionId: r.INT32_BE.get(e, t + 8),
				}),
			});
		t.StscAtom = class extends d {
			constructor(e) {
				super(e, t.SampleToChunkToken), (this.len = e);
			}
		};
		t.StszAtom = class {
			constructor(e) {
				this.len = e;
			}
			get(e, t) {
				const a = r.INT32_BE.get(e, t + 8);
				return {
					version: r.INT8.get(e, t),
					flags: r.INT24_BE.get(e, t + 1),
					sampleSize: r.INT32_BE.get(e, t + 4),
					numberOfEntries: a,
					entries: f(e, r.INT32_BE, t + 12, this.len - 12, a),
				};
			}
		};
		t.StcoAtom = class extends d {
			constructor(e) {
				super(e, r.INT32_BE), (this.len = e);
			}
		};
		function f(e, t, a, r, n) {
			if (
				(s(
					`remainingLen=${r}, numberOfEntries=${n} * token-len=${t.len}`
				),
				0 === r)
			)
				return [];
			i.equal(
				r,
				n * t.len,
				"mismatch number-of-entries with remaining atom-length"
			);
			const o = [];
			for (let r = 0; r < n; ++r) o.push(t.get(e, a)), (a += t.len);
			return o;
		}
		t.ChapterText = class {
			constructor(e) {
				this.len = e;
			}
			get(e, t) {
				const a = r.INT16_BE.get(e, t + 0);
				return new r.StringType(a, "utf-8").get(e, t + 2);
			}
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }),
			(function (e) {
				(e[(e.string = 0)] = "string"),
					(e[(e.uint = 1)] = "uint"),
					(e[(e.uid = 2)] = "uid"),
					(e[(e.bool = 3)] = "bool"),
					(e[(e.binary = 4)] = "binary"),
					(e[(e.float = 5)] = "float");
			})(t.DataType || (t.DataType = {})),
			(function (e) {
				(e[(e.shot = 10)] = "shot"),
					(e[(e.scene = 20)] = "scene"),
					(e[(e.track = 30)] = "track"),
					(e[(e.part = 40)] = "part"),
					(e[(e.album = 50)] = "album"),
					(e[(e.edition = 60)] = "edition"),
					(e[(e.collection = 70)] = "collection");
			})(t.TargetType || (t.TargetType = {})),
			(function (e) {
				(e[(e.video = 1)] = "video"),
					(e[(e.audio = 2)] = "audio"),
					(e[(e.complex = 3)] = "complex"),
					(e[(e.logo = 4)] = "logo"),
					(e[(e.subtitle = 17)] = "subtitle"),
					(e[(e.button = 18)] = "button"),
					(e[(e.control = 32)] = "control");
			})(t.TrackType || (t.TrackType = {}));
	},
	function (e, t, a) {
		(function (r) {
			(t.log = function (...e) {
				return (
					"object" == typeof console &&
					console.log &&
					console.log(...e)
				);
			}),
				(t.formatArgs = function (t) {
					if (
						((t[0] =
							(this.useColors ? "%c" : "") +
							this.namespace +
							(this.useColors ? " %c" : " ") +
							t[0] +
							(this.useColors ? "%c " : " ") +
							"+" +
							e.exports.humanize(this.diff)),
						!this.useColors)
					)
						return;
					const a = "color: " + this.color;
					t.splice(1, 0, a, "color: inherit");
					let r = 0,
						n = 0;
					t[0].replace(/%[a-zA-Z%]/g, (e) => {
						"%%" !== e && (r++, "%c" === e && (n = r));
					}),
						t.splice(n, 0, a);
				}),
				(t.save = function (e) {
					try {
						e
							? t.storage.setItem("debug", e)
							: t.storage.removeItem("debug");
					} catch (e) {}
				}),
				(t.load = function () {
					let e;
					try {
						e = t.storage.getItem("debug");
					} catch (e) {}
					!e && void 0 !== r && "env" in r && (e = r.env.DEBUG);
					return e;
				}),
				(t.useColors = function () {
					if (
						"undefined" != typeof window &&
						window.process &&
						("renderer" === window.process.type ||
							window.process.__nwjs)
					)
						return !0;
					if (
						"undefined" != typeof navigator &&
						navigator.userAgent &&
						navigator.userAgent
							.toLowerCase()
							.match(/(edge|trident)\/(\d+)/)
					)
						return !1;
					return (
						("undefined" != typeof document &&
							document.documentElement &&
							document.documentElement.style &&
							document.documentElement.style.WebkitAppearance) ||
						("undefined" != typeof window &&
							window.console &&
							(window.console.firebug ||
								(window.console.exception &&
									window.console.table))) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent
								.toLowerCase()
								.match(/firefox\/(\d+)/) &&
							parseInt(RegExp.$1, 10) >= 31) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent
								.toLowerCase()
								.match(/applewebkit\/(\d+)/))
					);
				}),
				(t.storage = (function () {
					try {
						return localStorage;
					} catch (e) {}
				})()),
				(t.colors = [
					"#0000CC",
					"#0000FF",
					"#0033CC",
					"#0033FF",
					"#0066CC",
					"#0066FF",
					"#0099CC",
					"#0099FF",
					"#00CC00",
					"#00CC33",
					"#00CC66",
					"#00CC99",
					"#00CCCC",
					"#00CCFF",
					"#3300CC",
					"#3300FF",
					"#3333CC",
					"#3333FF",
					"#3366CC",
					"#3366FF",
					"#3399CC",
					"#3399FF",
					"#33CC00",
					"#33CC33",
					"#33CC66",
					"#33CC99",
					"#33CCCC",
					"#33CCFF",
					"#6600CC",
					"#6600FF",
					"#6633CC",
					"#6633FF",
					"#66CC00",
					"#66CC33",
					"#9900CC",
					"#9900FF",
					"#9933CC",
					"#9933FF",
					"#99CC00",
					"#99CC33",
					"#CC0000",
					"#CC0033",
					"#CC0066",
					"#CC0099",
					"#CC00CC",
					"#CC00FF",
					"#CC3300",
					"#CC3333",
					"#CC3366",
					"#CC3399",
					"#CC33CC",
					"#CC33FF",
					"#CC6600",
					"#CC6633",
					"#CC9900",
					"#CC9933",
					"#CCCC00",
					"#CCCC33",
					"#FF0000",
					"#FF0033",
					"#FF0066",
					"#FF0099",
					"#FF00CC",
					"#FF00FF",
					"#FF3300",
					"#FF3333",
					"#FF3366",
					"#FF3399",
					"#FF33CC",
					"#FF33FF",
					"#FF6600",
					"#FF6633",
					"#FF9900",
					"#FF9933",
					"#FFCC00",
					"#FFCC33",
				]),
				(e.exports = a(47)(t));
			const { formatters: n } = e.exports;
			n.j = function (e) {
				try {
					return JSON.stringify(e);
				} catch (e) {
					return "[UnexpectedJSONParseError]: " + e.message;
				}
			};
		}.call(this, a(9)));
	},
	function (e, t, a) {
		e.exports = function (e) {
			function t(e) {
				let t = 0;
				for (let a = 0; a < e.length; a++)
					(t = (t << 5) - t + e.charCodeAt(a)), (t |= 0);
				return r.colors[Math.abs(t) % r.colors.length];
			}
			function r(e) {
				let a;
				function s(...e) {
					if (!s.enabled) return;
					const t = s,
						n = Number(new Date()),
						i = n - (a || n);
					(t.diff = i),
						(t.prev = a),
						(t.curr = n),
						(a = n),
						(e[0] = r.coerce(e[0])),
						"string" != typeof e[0] && e.unshift("%O");
					let o = 0;
					(e[0] = e[0].replace(/%([a-zA-Z%])/g, (a, n) => {
						if ("%%" === a) return a;
						o++;
						const i = r.formatters[n];
						if ("function" == typeof i) {
							const r = e[o];
							(a = i.call(t, r)), e.splice(o, 1), o--;
						}
						return a;
					})),
						r.formatArgs.call(t, e);
					(t.log || r.log).apply(t, e);
				}
				return (
					(s.namespace = e),
					(s.enabled = r.enabled(e)),
					(s.useColors = r.useColors()),
					(s.color = t(e)),
					(s.destroy = n),
					(s.extend = i),
					"function" == typeof r.init && r.init(s),
					r.instances.push(s),
					s
				);
			}
			function n() {
				const e = r.instances.indexOf(this);
				return -1 !== e && (r.instances.splice(e, 1), !0);
			}
			function i(e, t) {
				const a = r(this.namespace + (void 0 === t ? ":" : t) + e);
				return (a.log = this.log), a;
			}
			function s(e) {
				return e
					.toString()
					.substring(2, e.toString().length - 2)
					.replace(/\.\*\?$/, "*");
			}
			return (
				(r.debug = r),
				(r.default = r),
				(r.coerce = function (e) {
					if (e instanceof Error) return e.stack || e.message;
					return e;
				}),
				(r.disable = function () {
					const e = [
						...r.names.map(s),
						...r.skips.map(s).map((e) => "-" + e),
					].join(",");
					return r.enable(""), e;
				}),
				(r.enable = function (e) {
					let t;
					r.save(e), (r.names = []), (r.skips = []);
					const a = ("string" == typeof e ? e : "").split(/[\s,]+/),
						n = a.length;
					for (t = 0; t < n; t++)
						a[t] &&
							("-" === (e = a[t].replace(/\*/g, ".*?"))[0]
								? r.skips.push(
										new RegExp("^" + e.substr(1) + "$")
								  )
								: r.names.push(new RegExp("^" + e + "$")));
					for (t = 0; t < r.instances.length; t++) {
						const e = r.instances[t];
						e.enabled = r.enabled(e.namespace);
					}
				}),
				(r.enabled = function (e) {
					if ("*" === e[e.length - 1]) return !0;
					let t, a;
					for (t = 0, a = r.skips.length; t < a; t++)
						if (r.skips[t].test(e)) return !1;
					for (t = 0, a = r.names.length; t < a; t++)
						if (r.names[t].test(e)) return !0;
					return !1;
				}),
				(r.humanize = a(48)),
				Object.keys(e).forEach((t) => {
					r[t] = e[t];
				}),
				(r.instances = []),
				(r.names = []),
				(r.skips = []),
				(r.formatters = {}),
				(r.selectColor = t),
				r.enable(r.load()),
				r
			);
		};
	},
	function (e, t) {
		var a = 1e3,
			r = 60 * a,
			n = 60 * r,
			i = 24 * n,
			s = 7 * i,
			o = 365.25 * i;
		function l(e, t, a, r) {
			var n = t >= 1.5 * a;
			return Math.round(e / a) + " " + r + (n ? "s" : "");
		}
		e.exports = function (e, t) {
			t = t || {};
			var c = typeof e;
			if ("string" === c && e.length > 0)
				return (function (e) {
					if ((e = String(e)).length > 100) return;
					var t =
						/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
							e
						);
					if (!t) return;
					var l = parseFloat(t[1]);
					switch ((t[2] || "ms").toLowerCase()) {
						case "years":
						case "year":
						case "yrs":
						case "yr":
						case "y":
							return l * o;
						case "weeks":
						case "week":
						case "w":
							return l * s;
						case "days":
						case "day":
						case "d":
							return l * i;
						case "hours":
						case "hour":
						case "hrs":
						case "hr":
						case "h":
							return l * n;
						case "minutes":
						case "minute":
						case "mins":
						case "min":
						case "m":
							return l * r;
						case "seconds":
						case "second":
						case "secs":
						case "sec":
						case "s":
							return l * a;
						case "milliseconds":
						case "millisecond":
						case "msecs":
						case "msec":
						case "ms":
							return l;
						default:
							return;
					}
				})(e);
			if ("number" === c && isFinite(e))
				return t.long
					? (function (e) {
							var t = Math.abs(e);
							if (t >= i) return l(e, t, i, "day");
							if (t >= n) return l(e, t, n, "hour");
							if (t >= r) return l(e, t, r, "minute");
							if (t >= a) return l(e, t, a, "second");
							return e + " ms";
					  })(e)
					: (function (e) {
							var t = Math.abs(e);
							if (t >= i) return Math.round(e / i) + "d";
							if (t >= n) return Math.round(e / n) + "h";
							if (t >= r) return Math.round(e / r) + "m";
							if (t >= a) return Math.round(e / a) + "s";
							return e + "ms";
					  })(e);
			throw new Error(
				"val is not a non-empty string or a valid number. val=" +
					JSON.stringify(e)
			);
		};
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(51),
				n = a(18),
				i = a(56)("strtok3:ReadStreamTokenizer");
			class s extends r.AbstractTokenizer {
				constructor(e, t) {
					super(),
						(this.streamReader = new n.StreamReader(e)),
						(this.fileSize = t);
				}
				async readBuffer(e, t = 0, a = e.length, r, i) {
					if (0 === a) return 0;
					if (r) {
						const n = r - this.position;
						if (n > 0)
							return (
								await this.ignore(r - this.position),
								this.readBuffer(e, t, a)
							);
						if (n < 0)
							throw new Error(
								"Cannot read from a negative offset in a stream"
							);
					}
					const s = await this.streamReader.read(e, t, a);
					if (((this.position += s), !i && s < a))
						throw new n.EndOfStreamError();
					return s;
				}
				async peekBuffer(t, a = 0, r = t.length, i, s) {
					let o;
					if (i) {
						const n = i - this.position;
						if (n > 0) {
							const i = e.alloc(r + n);
							return (
								(o = await this.peekBuffer(
									i,
									0,
									n + r,
									void 0,
									s
								)),
								i.copy(t, a, n),
								o - n
							);
						}
						if (n < 0)
							throw new Error(
								"Cannot peek from a negative offset in a stream"
							);
					}
					if (
						((o = await this.streamReader.peek(t, a, r)),
						!s && o < r)
					)
						throw new n.EndOfStreamError();
					return o;
				}
				async ignore(t) {
					i(`ignore ${this.position}...${this.position + t - 1}`);
					const a = Math.min(1e6, t),
						r = e.alloc(a);
					let n = 0;
					for (; n < t; ) {
						const e = t - n,
							i = await this.readBuffer(r, 0, Math.min(a, e));
						if (i < 0) return i;
						n += i;
					}
					return n;
				}
			}
			t.ReadStreamTokenizer = s;
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		(t.byteLength = function (e) {
			var t = c(e),
				a = t[0],
				r = t[1];
			return (3 * (a + r)) / 4 - r;
		}),
			(t.toByteArray = function (e) {
				var t,
					a,
					r = c(e),
					s = r[0],
					o = r[1],
					l = new i(
						(function (e, t, a) {
							return (3 * (t + a)) / 4 - a;
						})(0, s, o)
					),
					u = 0,
					d = o > 0 ? s - 4 : s;
				for (a = 0; a < d; a += 4)
					(t =
						(n[e.charCodeAt(a)] << 18) |
						(n[e.charCodeAt(a + 1)] << 12) |
						(n[e.charCodeAt(a + 2)] << 6) |
						n[e.charCodeAt(a + 3)]),
						(l[u++] = (t >> 16) & 255),
						(l[u++] = (t >> 8) & 255),
						(l[u++] = 255 & t);
				2 === o &&
					((t =
						(n[e.charCodeAt(a)] << 2) |
						(n[e.charCodeAt(a + 1)] >> 4)),
					(l[u++] = 255 & t));
				1 === o &&
					((t =
						(n[e.charCodeAt(a)] << 10) |
						(n[e.charCodeAt(a + 1)] << 4) |
						(n[e.charCodeAt(a + 2)] >> 2)),
					(l[u++] = (t >> 8) & 255),
					(l[u++] = 255 & t));
				return l;
			}),
			(t.fromByteArray = function (e) {
				for (
					var t,
						a = e.length,
						n = a % 3,
						i = [],
						s = 16383,
						o = 0,
						l = a - n;
					o < l;
					o += s
				)
					i.push(u(e, o, o + s > l ? l : o + s));
				1 === n
					? ((t = e[a - 1]),
					  i.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
					: 2 === n &&
					  ((t = (e[a - 2] << 8) + e[a - 1]),
					  i.push(
							r[t >> 10] +
								r[(t >> 4) & 63] +
								r[(t << 2) & 63] +
								"="
					  ));
				return i.join("");
			});
		for (
			var r = [],
				n = [],
				i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
				s =
					"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				o = 0,
				l = s.length;
			o < l;
			++o
		)
			(r[o] = s[o]), (n[s.charCodeAt(o)] = o);
		function c(e) {
			var t = e.length;
			if (t % 4 > 0)
				throw new Error(
					"Invalid string. Length must be a multiple of 4"
				);
			var a = e.indexOf("=");
			return -1 === a && (a = t), [a, a === t ? 0 : 4 - (a % 4)];
		}
		function u(e, t, a) {
			for (var n, i, s = [], o = t; o < a; o += 3)
				(n =
					((e[o] << 16) & 16711680) +
					((e[o + 1] << 8) & 65280) +
					(255 & e[o + 2])),
					s.push(
						r[((i = n) >> 18) & 63] +
							r[(i >> 12) & 63] +
							r[(i >> 6) & 63] +
							r[63 & i]
					);
			return s.join("");
		}
		(n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(18);
			t.AbstractTokenizer = class {
				constructor() {
					(this.position = 0), (this.numBuffer = e.alloc(10));
				}
				async readToken(t, a = null, n) {
					const i = e.alloc(t.len),
						s = await this.readBuffer(i, 0, t.len, a);
					if (!n && s < t.len) throw new r.EndOfStreamError();
					return t.get(i, 0);
				}
				async peekToken(t, a = this.position, n) {
					const i = e.alloc(t.len),
						s = await this.peekBuffer(i, 0, t.len, a);
					if (!n && s < t.len) throw new r.EndOfStreamError();
					return t.get(i, 0);
				}
				async readNumber(e) {
					if (
						(await this.readBuffer(
							this.numBuffer,
							0,
							e.len,
							null
						)) < e.len
					)
						throw new r.EndOfStreamError();
					return e.get(this.numBuffer, 0);
				}
				async peekNumber(e) {
					if (
						(await this.peekBuffer(this.numBuffer, 0, e.len)) <
						e.len
					)
						throw new r.EndOfStreamError();
					return e.get(this.numBuffer, 0);
				}
				async close() {}
			};
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		var r = Object.getOwnPropertySymbols,
			n = Object.prototype.hasOwnProperty,
			i = Object.prototype.propertyIsEnumerable;
		function s(e) {
			if (null == e)
				throw new TypeError(
					"Object.assign cannot be called with null or undefined"
				);
			return Object(e);
		}
		e.exports = (function () {
			try {
				if (!Object.assign) return !1;
				var e = new String("abc");
				if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
					return !1;
				for (var t = {}, a = 0; a < 10; a++)
					t["_" + String.fromCharCode(a)] = a;
				if (
					"0123456789" !==
					Object.getOwnPropertyNames(t)
						.map(function (e) {
							return t[e];
						})
						.join("")
				)
					return !1;
				var r = {};
				return (
					"abcdefghijklmnopqrst".split("").forEach(function (e) {
						r[e] = e;
					}),
					"abcdefghijklmnopqrst" ===
						Object.keys(Object.assign({}, r)).join("")
				);
			} catch (e) {
				return !1;
			}
		})()
			? Object.assign
			: function (e, t) {
					for (var a, o, l = s(e), c = 1; c < arguments.length; c++) {
						for (var u in (a = Object(arguments[c])))
							n.call(a, u) && (l[u] = a[u]);
						if (r) {
							o = r(a);
							for (var d = 0; d < o.length; d++)
								i.call(a, o[d]) && (l[o[d]] = a[o[d]]);
						}
					}
					return l;
			  };
	},
	function (e, t, a) {
		(function (e) {
			var r =
					Object.getOwnPropertyDescriptors ||
					function (e) {
						for (
							var t = Object.keys(e), a = {}, r = 0;
							r < t.length;
							r++
						)
							a[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
						return a;
					},
				n = /%[sdj%]/g;
			(t.format = function (e) {
				if (!b(e)) {
					for (var t = [], a = 0; a < arguments.length; a++)
						t.push(o(arguments[a]));
					return t.join(" ");
				}
				a = 1;
				for (
					var r = arguments,
						i = r.length,
						s = String(e).replace(n, function (e) {
							if ("%%" === e) return "%";
							if (a >= i) return e;
							switch (e) {
								case "%s":
									return String(r[a++]);
								case "%d":
									return Number(r[a++]);
								case "%j":
									try {
										return JSON.stringify(r[a++]);
									} catch (e) {
										return "[Circular]";
									}
								default:
									return e;
							}
						}),
						l = r[a];
					a < i;
					l = r[++a]
				)
					m(l) || !w(l) ? (s += " " + l) : (s += " " + o(l));
				return s;
			}),
				(t.deprecate = function (a, r) {
					if (void 0 !== e && !0 === e.noDeprecation) return a;
					if (void 0 === e)
						return function () {
							return t.deprecate(a, r).apply(this, arguments);
						};
					var n = !1;
					return function () {
						if (!n) {
							if (e.throwDeprecation) throw new Error(r);
							e.traceDeprecation
								? console.trace(r)
								: console.error(r),
								(n = !0);
						}
						return a.apply(this, arguments);
					};
				});
			var i,
				s = {};
			function o(e, a) {
				var r = { seen: [], stylize: c };
				return (
					arguments.length >= 3 && (r.depth = arguments[2]),
					arguments.length >= 4 && (r.colors = arguments[3]),
					p(a) ? (r.showHidden = a) : a && t._extend(r, a),
					v(r.showHidden) && (r.showHidden = !1),
					v(r.depth) && (r.depth = 2),
					v(r.colors) && (r.colors = !1),
					v(r.customInspect) && (r.customInspect = !0),
					r.colors && (r.stylize = l),
					u(r, e, r.depth)
				);
			}
			function l(e, t) {
				var a = o.styles[t];
				return a
					? "[" +
							o.colors[a][0] +
							"m" +
							e +
							"[" +
							o.colors[a][1] +
							"m"
					: e;
			}
			function c(e, t) {
				return e;
			}
			function u(e, a, r) {
				if (
					e.customInspect &&
					a &&
					k(a.inspect) &&
					a.inspect !== t.inspect &&
					(!a.constructor || a.constructor.prototype !== a)
				) {
					var n = a.inspect(r, e);
					return b(n) || (n = u(e, n, r)), n;
				}
				var i = (function (e, t) {
					if (v(t)) return e.stylize("undefined", "undefined");
					if (b(t)) {
						var a =
							"'" +
							JSON.stringify(t)
								.replace(/^"|"$/g, "")
								.replace(/'/g, "\\'")
								.replace(/\\"/g, '"') +
							"'";
						return e.stylize(a, "string");
					}
					if (g(t)) return e.stylize("" + t, "number");
					if (p(t)) return e.stylize("" + t, "boolean");
					if (m(t)) return e.stylize("null", "null");
				})(e, a);
				if (i) return i;
				var s = Object.keys(a),
					o = (function (e) {
						var t = {};
						return (
							e.forEach(function (e, a) {
								t[e] = !0;
							}),
							t
						);
					})(s);
				if (
					(e.showHidden && (s = Object.getOwnPropertyNames(a)),
					_(a) &&
						(s.indexOf("message") >= 0 ||
							s.indexOf("description") >= 0))
				)
					return d(a);
				if (0 === s.length) {
					if (k(a)) {
						var l = a.name ? ": " + a.name : "";
						return e.stylize("[Function" + l + "]", "special");
					}
					if (y(a))
						return e.stylize(
							RegExp.prototype.toString.call(a),
							"regexp"
						);
					if (T(a))
						return e.stylize(
							Date.prototype.toString.call(a),
							"date"
						);
					if (_(a)) return d(a);
				}
				var c,
					w = "",
					S = !1,
					E = ["{", "}"];
				(h(a) && ((S = !0), (E = ["[", "]"])), k(a)) &&
					(w = " [Function" + (a.name ? ": " + a.name : "") + "]");
				return (
					y(a) && (w = " " + RegExp.prototype.toString.call(a)),
					T(a) && (w = " " + Date.prototype.toUTCString.call(a)),
					_(a) && (w = " " + d(a)),
					0 !== s.length || (S && 0 != a.length)
						? r < 0
							? y(a)
								? e.stylize(
										RegExp.prototype.toString.call(a),
										"regexp"
								  )
								: e.stylize("[Object]", "special")
							: (e.seen.push(a),
							  (c = S
									? (function (e, t, a, r, n) {
											for (
												var i = [], s = 0, o = t.length;
												s < o;
												++s
											)
												x(t, String(s))
													? i.push(
															f(
																e,
																t,
																a,
																r,
																String(s),
																!0
															)
													  )
													: i.push("");
											return (
												n.forEach(function (n) {
													n.match(/^\d+$/) ||
														i.push(
															f(e, t, a, r, n, !0)
														);
												}),
												i
											);
									  })(e, a, r, o, s)
									: s.map(function (t) {
											return f(e, a, r, o, t, S);
									  })),
							  e.seen.pop(),
							  (function (e, t, a) {
									if (
										e.reduce(function (e, t) {
											return (
												t.indexOf("\n") >= 0 && 0,
												e +
													t.replace(
														/\u001b\[\d\d?m/g,
														""
													).length +
													1
											);
										}, 0) > 60
									)
										return (
											a[0] +
											("" === t ? "" : t + "\n ") +
											" " +
											e.join(",\n  ") +
											" " +
											a[1]
										);
									return (
										a[0] +
										t +
										" " +
										e.join(", ") +
										" " +
										a[1]
									);
							  })(c, w, E))
						: E[0] + w + E[1]
				);
			}
			function d(e) {
				return "[" + Error.prototype.toString.call(e) + "]";
			}
			function f(e, t, a, r, n, i) {
				var s, o, l;
				if (
					((l = Object.getOwnPropertyDescriptor(t, n) || {
						value: t[n],
					}).get
						? (o = l.set
								? e.stylize("[Getter/Setter]", "special")
								: e.stylize("[Getter]", "special"))
						: l.set && (o = e.stylize("[Setter]", "special")),
					x(r, n) || (s = "[" + n + "]"),
					o ||
						(e.seen.indexOf(l.value) < 0
							? (o = m(a)
									? u(e, l.value, null)
									: u(e, l.value, a - 1)).indexOf("\n") >
									-1 &&
							  (o = i
									? o
											.split("\n")
											.map(function (e) {
												return "  " + e;
											})
											.join("\n")
											.substr(2)
									: "\n" +
									  o
											.split("\n")
											.map(function (e) {
												return "   " + e;
											})
											.join("\n"))
							: (o = e.stylize("[Circular]", "special"))),
					v(s))
				) {
					if (i && n.match(/^\d+$/)) return o;
					(s = JSON.stringify("" + n)).match(
						/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/
					)
						? ((s = s.substr(1, s.length - 2)),
						  (s = e.stylize(s, "name")))
						: ((s = s
								.replace(/'/g, "\\'")
								.replace(/\\"/g, '"')
								.replace(/(^"|"$)/g, "'")),
						  (s = e.stylize(s, "string")));
				}
				return s + ": " + o;
			}
			function h(e) {
				return Array.isArray(e);
			}
			function p(e) {
				return "boolean" == typeof e;
			}
			function m(e) {
				return null === e;
			}
			function g(e) {
				return "number" == typeof e;
			}
			function b(e) {
				return "string" == typeof e;
			}
			function v(e) {
				return void 0 === e;
			}
			function y(e) {
				return w(e) && "[object RegExp]" === S(e);
			}
			function w(e) {
				return "object" == typeof e && null !== e;
			}
			function T(e) {
				return w(e) && "[object Date]" === S(e);
			}
			function _(e) {
				return (
					w(e) && ("[object Error]" === S(e) || e instanceof Error)
				);
			}
			function k(e) {
				return "function" == typeof e;
			}
			function S(e) {
				return Object.prototype.toString.call(e);
			}
			function E(e) {
				return e < 10 ? "0" + e.toString(10) : e.toString(10);
			}
			(t.debuglog = function (a) {
				if (
					(v(i) && (i = e.env.NODE_DEBUG || ""),
					(a = a.toUpperCase()),
					!s[a])
				)
					if (new RegExp("\\b" + a + "\\b", "i").test(i)) {
						var r = e.pid;
						s[a] = function () {
							var e = t.format.apply(t, arguments);
							console.error("%s %d: %s", a, r, e);
						};
					} else s[a] = function () {};
				return s[a];
			}),
				(t.inspect = o),
				(o.colors = {
					bold: [1, 22],
					italic: [3, 23],
					underline: [4, 24],
					inverse: [7, 27],
					white: [37, 39],
					grey: [90, 39],
					black: [30, 39],
					blue: [34, 39],
					cyan: [36, 39],
					green: [32, 39],
					magenta: [35, 39],
					red: [31, 39],
					yellow: [33, 39],
				}),
				(o.styles = {
					special: "cyan",
					number: "yellow",
					boolean: "yellow",
					undefined: "grey",
					null: "bold",
					string: "green",
					date: "magenta",
					regexp: "red",
				}),
				(t.isArray = h),
				(t.isBoolean = p),
				(t.isNull = m),
				(t.isNullOrUndefined = function (e) {
					return null == e;
				}),
				(t.isNumber = g),
				(t.isString = b),
				(t.isSymbol = function (e) {
					return "symbol" == typeof e;
				}),
				(t.isUndefined = v),
				(t.isRegExp = y),
				(t.isObject = w),
				(t.isDate = T),
				(t.isError = _),
				(t.isFunction = k),
				(t.isPrimitive = function (e) {
					return (
						null === e ||
						"boolean" == typeof e ||
						"number" == typeof e ||
						"string" == typeof e ||
						"symbol" == typeof e ||
						void 0 === e
					);
				}),
				(t.isBuffer = a(54));
			var C = [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			];
			function I() {
				var e = new Date(),
					t = [
						E(e.getHours()),
						E(e.getMinutes()),
						E(e.getSeconds()),
					].join(":");
				return [e.getDate(), C[e.getMonth()], t].join(" ");
			}
			function x(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}
			(t.log = function () {
				console.log("%s - %s", I(), t.format.apply(t, arguments));
			}),
				(t.inherits = a(55)),
				(t._extend = function (e, t) {
					if (!t || !w(t)) return e;
					for (var a = Object.keys(t), r = a.length; r--; )
						e[a[r]] = t[a[r]];
					return e;
				});
			var A =
				"undefined" != typeof Symbol
					? Symbol("util.promisify.custom")
					: void 0;
			function D(e, t) {
				if (!e) {
					var a = new Error(
						"Promise was rejected with a falsy value"
					);
					(a.reason = e), (e = a);
				}
				return t(e);
			}
			(t.promisify = function (e) {
				if ("function" != typeof e)
					throw new TypeError(
						'The "original" argument must be of type Function'
					);
				if (A && e[A]) {
					var t;
					if ("function" != typeof (t = e[A]))
						throw new TypeError(
							'The "util.promisify.custom" argument must be of type Function'
						);
					return (
						Object.defineProperty(t, A, {
							value: t,
							enumerable: !1,
							writable: !1,
							configurable: !0,
						}),
						t
					);
				}
				function t() {
					for (
						var t,
							a,
							r = new Promise(function (e, r) {
								(t = e), (a = r);
							}),
							n = [],
							i = 0;
						i < arguments.length;
						i++
					)
						n.push(arguments[i]);
					n.push(function (e, r) {
						e ? a(e) : t(r);
					});
					try {
						e.apply(this, n);
					} catch (e) {
						a(e);
					}
					return r;
				}
				return (
					Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
					A &&
						Object.defineProperty(t, A, {
							value: t,
							enumerable: !1,
							writable: !1,
							configurable: !0,
						}),
					Object.defineProperties(t, r(e))
				);
			}),
				(t.promisify.custom = A),
				(t.callbackify = function (t) {
					if ("function" != typeof t)
						throw new TypeError(
							'The "original" argument must be of type Function'
						);
					function a() {
						for (var a = [], r = 0; r < arguments.length; r++)
							a.push(arguments[r]);
						var n = a.pop();
						if ("function" != typeof n)
							throw new TypeError(
								"The last argument must be of type Function"
							);
						var i = this,
							s = function () {
								return n.apply(i, arguments);
							};
						t.apply(this, a).then(
							function (t) {
								e.nextTick(s, null, t);
							},
							function (t) {
								e.nextTick(D, t, s);
							}
						);
					}
					return (
						Object.setPrototypeOf(a, Object.getPrototypeOf(t)),
						Object.defineProperties(a, r(t)),
						a
					);
				});
		}.call(this, a(9)));
	},
	function (e, t) {
		e.exports = function (e) {
			return (
				e &&
				"object" == typeof e &&
				"function" == typeof e.copy &&
				"function" == typeof e.fill &&
				"function" == typeof e.readUInt8
			);
		};
	},
	function (e, t) {
		"function" == typeof Object.create
			? (e.exports = function (e, t) {
					(e.super_ = t),
						(e.prototype = Object.create(t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						}));
			  })
			: (e.exports = function (e, t) {
					e.super_ = t;
					var a = function () {};
					(a.prototype = t.prototype),
						(e.prototype = new a()),
						(e.prototype.constructor = e);
			  });
	},
	function (e, t, a) {
		(function (r) {
			(t.log = function (...e) {
				return (
					"object" == typeof console &&
					console.log &&
					console.log(...e)
				);
			}),
				(t.formatArgs = function (t) {
					if (
						((t[0] =
							(this.useColors ? "%c" : "") +
							this.namespace +
							(this.useColors ? " %c" : " ") +
							t[0] +
							(this.useColors ? "%c " : " ") +
							"+" +
							e.exports.humanize(this.diff)),
						!this.useColors)
					)
						return;
					const a = "color: " + this.color;
					t.splice(1, 0, a, "color: inherit");
					let r = 0,
						n = 0;
					t[0].replace(/%[a-zA-Z%]/g, (e) => {
						"%%" !== e && (r++, "%c" === e && (n = r));
					}),
						t.splice(n, 0, a);
				}),
				(t.save = function (e) {
					try {
						e
							? t.storage.setItem("debug", e)
							: t.storage.removeItem("debug");
					} catch (e) {}
				}),
				(t.load = function () {
					let e;
					try {
						e = t.storage.getItem("debug");
					} catch (e) {}
					!e && void 0 !== r && "env" in r && (e = r.env.DEBUG);
					return e;
				}),
				(t.useColors = function () {
					if (
						"undefined" != typeof window &&
						window.process &&
						("renderer" === window.process.type ||
							window.process.__nwjs)
					)
						return !0;
					if (
						"undefined" != typeof navigator &&
						navigator.userAgent &&
						navigator.userAgent
							.toLowerCase()
							.match(/(edge|trident)\/(\d+)/)
					)
						return !1;
					return (
						("undefined" != typeof document &&
							document.documentElement &&
							document.documentElement.style &&
							document.documentElement.style.WebkitAppearance) ||
						("undefined" != typeof window &&
							window.console &&
							(window.console.firebug ||
								(window.console.exception &&
									window.console.table))) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent
								.toLowerCase()
								.match(/firefox\/(\d+)/) &&
							parseInt(RegExp.$1, 10) >= 31) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent
								.toLowerCase()
								.match(/applewebkit\/(\d+)/))
					);
				}),
				(t.storage = (function () {
					try {
						return localStorage;
					} catch (e) {}
				})()),
				(t.colors = [
					"#0000CC",
					"#0000FF",
					"#0033CC",
					"#0033FF",
					"#0066CC",
					"#0066FF",
					"#0099CC",
					"#0099FF",
					"#00CC00",
					"#00CC33",
					"#00CC66",
					"#00CC99",
					"#00CCCC",
					"#00CCFF",
					"#3300CC",
					"#3300FF",
					"#3333CC",
					"#3333FF",
					"#3366CC",
					"#3366FF",
					"#3399CC",
					"#3399FF",
					"#33CC00",
					"#33CC33",
					"#33CC66",
					"#33CC99",
					"#33CCCC",
					"#33CCFF",
					"#6600CC",
					"#6600FF",
					"#6633CC",
					"#6633FF",
					"#66CC00",
					"#66CC33",
					"#9900CC",
					"#9900FF",
					"#9933CC",
					"#9933FF",
					"#99CC00",
					"#99CC33",
					"#CC0000",
					"#CC0033",
					"#CC0066",
					"#CC0099",
					"#CC00CC",
					"#CC00FF",
					"#CC3300",
					"#CC3333",
					"#CC3366",
					"#CC3399",
					"#CC33CC",
					"#CC33FF",
					"#CC6600",
					"#CC6633",
					"#CC9900",
					"#CC9933",
					"#CCCC00",
					"#CCCC33",
					"#FF0000",
					"#FF0033",
					"#FF0066",
					"#FF0099",
					"#FF00CC",
					"#FF00FF",
					"#FF3300",
					"#FF3333",
					"#FF3366",
					"#FF3399",
					"#FF33CC",
					"#FF33FF",
					"#FF6600",
					"#FF6633",
					"#FF9900",
					"#FF9933",
					"#FFCC00",
					"#FFCC33",
				]),
				(e.exports = a(57)(t));
			const { formatters: n } = e.exports;
			n.j = function (e) {
				try {
					return JSON.stringify(e);
				} catch (e) {
					return "[UnexpectedJSONParseError]: " + e.message;
				}
			};
		}.call(this, a(9)));
	},
	function (e, t, a) {
		e.exports = function (e) {
			function t(e) {
				let t = 0;
				for (let a = 0; a < e.length; a++)
					(t = (t << 5) - t + e.charCodeAt(a)), (t |= 0);
				return r.colors[Math.abs(t) % r.colors.length];
			}
			function r(e) {
				let a;
				function s(...e) {
					if (!s.enabled) return;
					const t = s,
						n = Number(new Date()),
						i = n - (a || n);
					(t.diff = i),
						(t.prev = a),
						(t.curr = n),
						(a = n),
						(e[0] = r.coerce(e[0])),
						"string" != typeof e[0] && e.unshift("%O");
					let o = 0;
					(e[0] = e[0].replace(/%([a-zA-Z%])/g, (a, n) => {
						if ("%%" === a) return a;
						o++;
						const i = r.formatters[n];
						if ("function" == typeof i) {
							const r = e[o];
							(a = i.call(t, r)), e.splice(o, 1), o--;
						}
						return a;
					})),
						r.formatArgs.call(t, e);
					(t.log || r.log).apply(t, e);
				}
				return (
					(s.namespace = e),
					(s.enabled = r.enabled(e)),
					(s.useColors = r.useColors()),
					(s.color = t(e)),
					(s.destroy = n),
					(s.extend = i),
					"function" == typeof r.init && r.init(s),
					r.instances.push(s),
					s
				);
			}
			function n() {
				const e = r.instances.indexOf(this);
				return -1 !== e && (r.instances.splice(e, 1), !0);
			}
			function i(e, t) {
				const a = r(this.namespace + (void 0 === t ? ":" : t) + e);
				return (a.log = this.log), a;
			}
			function s(e) {
				return e
					.toString()
					.substring(2, e.toString().length - 2)
					.replace(/\.\*\?$/, "*");
			}
			return (
				(r.debug = r),
				(r.default = r),
				(r.coerce = function (e) {
					if (e instanceof Error) return e.stack || e.message;
					return e;
				}),
				(r.disable = function () {
					const e = [
						...r.names.map(s),
						...r.skips.map(s).map((e) => "-" + e),
					].join(",");
					return r.enable(""), e;
				}),
				(r.enable = function (e) {
					let t;
					r.save(e), (r.names = []), (r.skips = []);
					const a = ("string" == typeof e ? e : "").split(/[\s,]+/),
						n = a.length;
					for (t = 0; t < n; t++)
						a[t] &&
							("-" === (e = a[t].replace(/\*/g, ".*?"))[0]
								? r.skips.push(
										new RegExp("^" + e.substr(1) + "$")
								  )
								: r.names.push(new RegExp("^" + e + "$")));
					for (t = 0; t < r.instances.length; t++) {
						const e = r.instances[t];
						e.enabled = r.enabled(e.namespace);
					}
				}),
				(r.enabled = function (e) {
					if ("*" === e[e.length - 1]) return !0;
					let t, a;
					for (t = 0, a = r.skips.length; t < a; t++)
						if (r.skips[t].test(e)) return !1;
					for (t = 0, a = r.names.length; t < a; t++)
						if (r.names[t].test(e)) return !0;
					return !1;
				}),
				(r.humanize = a(58)),
				Object.keys(e).forEach((t) => {
					r[t] = e[t];
				}),
				(r.instances = []),
				(r.names = []),
				(r.skips = []),
				(r.formatters = {}),
				(r.selectColor = t),
				r.enable(r.load()),
				r
			);
		};
	},
	function (e, t) {
		var a = 1e3,
			r = 60 * a,
			n = 60 * r,
			i = 24 * n,
			s = 7 * i,
			o = 365.25 * i;
		function l(e, t, a, r) {
			var n = t >= 1.5 * a;
			return Math.round(e / a) + " " + r + (n ? "s" : "");
		}
		e.exports = function (e, t) {
			t = t || {};
			var c = typeof e;
			if ("string" === c && e.length > 0)
				return (function (e) {
					if ((e = String(e)).length > 100) return;
					var t =
						/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
							e
						);
					if (!t) return;
					var l = parseFloat(t[1]);
					switch ((t[2] || "ms").toLowerCase()) {
						case "years":
						case "year":
						case "yrs":
						case "yr":
						case "y":
							return l * o;
						case "weeks":
						case "week":
						case "w":
							return l * s;
						case "days":
						case "day":
						case "d":
							return l * i;
						case "hours":
						case "hour":
						case "hrs":
						case "hr":
						case "h":
							return l * n;
						case "minutes":
						case "minute":
						case "mins":
						case "min":
						case "m":
							return l * r;
						case "seconds":
						case "second":
						case "secs":
						case "sec":
						case "s":
							return l * a;
						case "milliseconds":
						case "millisecond":
						case "msecs":
						case "msec":
						case "ms":
							return l;
						default:
							return;
					}
				})(e);
			if ("number" === c && isFinite(e))
				return t.long
					? (function (e) {
							var t = Math.abs(e);
							if (t >= i) return l(e, t, i, "day");
							if (t >= n) return l(e, t, n, "hour");
							if (t >= r) return l(e, t, r, "minute");
							if (t >= a) return l(e, t, a, "second");
							return e + " ms";
					  })(e)
					: (function (e) {
							var t = Math.abs(e);
							if (t >= i) return Math.round(e / i) + "d";
							if (t >= n) return Math.round(e / n) + "h";
							if (t >= r) return Math.round(e / r) + "m";
							if (t >= a) return Math.round(e / a) + "s";
							return e + "ms";
					  })(e);
			throw new Error(
				"val is not a non-empty string or a valid number. val=" +
					JSON.stringify(e)
			);
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(18);
		t.BufferTokenizer = class {
			constructor(e) {
				(this.buffer = e),
					(this.position = 0),
					(this.fileSize = e.length);
			}
			async readBuffer(e, t, a, r) {
				return (
					(this.position = r || this.position),
					this.peekBuffer(e, t, a, this.position).then(
						(e) => ((this.position += e), e)
					)
				);
			}
			async peekBuffer(e, t, a, n, i = !1) {
				(n = n || this.position), a || (a = e.length);
				const s = Math.min(this.buffer.length - n, a);
				if (!i && s < a) throw new r.EndOfStreamError();
				return this.buffer.copy(e, t, n, n + s), s;
			}
			async readToken(e, t) {
				this.position = t || this.position;
				try {
					const t = this.peekToken(e, this.position);
					return (this.position += e.len), t;
				} catch (e) {
					throw ((this.position += this.buffer.length - t), e);
				}
			}
			async peekToken(e, t = this.position) {
				if (this.buffer.length - t < e.len)
					throw new r.EndOfStreamError();
				return e.get(this.buffer, t);
			}
			async readNumber(e) {
				return this.readToken(e);
			}
			async peekNumber(e) {
				return this.peekToken(e);
			}
			async ignore(e) {
				const t = Math.min(this.buffer.length - this.position, e);
				return (this.position += t), t;
			}
			async close() {}
		};
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(34),
				n = a(63),
				i = a(64),
				s = a(1),
				o = a(67),
				l = a(81),
				c = a(13),
				u = a(97),
				d = a(100),
				f = a(101),
				h = a(103),
				p = a(105),
				m = a(111),
				g = a(118),
				b = a(121),
				v = a(123),
				y = a(125),
				w = a(127),
				T = s("music-metadata:parser:factory");
			function _(e) {
				const t = n.parse(e),
					a = i.parse(t.type);
				return {
					type: a.type,
					subtype: a.subtype,
					suffix: a.suffix,
					parameters: t.parameters,
				};
			}
			t.parseHttpContentType = _;
			class k {
				static async parseOnContentType(e, t, a) {
					const r =
						k.getParserIdForMimeType(t) ||
						k.getParserIdForExtension(t);
					return (
						r ||
							T(
								"No parser found for MIME-type / extension: " +
									t
							),
						this.parse(e, r, a)
					);
				}
				static async parse(t, a, n) {
					if (!a) {
						T("Guess parser on content...");
						const i = e.alloc(4100);
						await t.peekBuffer(i, 0, i.byteLength, t.position, !0);
						const s = r(i);
						if (!s)
							throw new Error("Failed to determine audio format");
						if (
							(T(
								`Guessed file type is mime=${s.mime}, extension=${s.ext}`
							),
							!(a = k.getParserIdForMimeType(s.mime)))
						)
							throw new Error(
								"Guessed MIME-type not supported: " + s.mime
							);
						return this._parse(t, a, n);
					}
					return this._parse(t, a, n);
				}
				static getParserIdForExtension(e) {
					if (!e) return;
					switch (this.getExtension(e).toLocaleLowerCase() || e) {
						case ".mp2":
						case ".mp3":
						case ".m2a":
						case ".aac":
							return "mpeg";
						case ".ape":
							return "apev2";
						case ".mp4":
						case ".m4a":
						case ".m4b":
						case ".m4pa":
						case ".m4v":
						case ".m4r":
						case ".3gp":
							return "mp4";
						case ".wma":
						case ".wmv":
						case ".asf":
							return "asf";
						case ".flac":
							return "flac";
						case ".ogg":
						case ".ogv":
						case ".oga":
						case ".ogm":
						case ".ogx":
						case ".opus":
						case ".spx":
							return "ogg";
						case ".aif":
						case ".aiff":
						case ".aifc":
							return "aiff";
						case ".wav":
							return "riff";
						case ".wv":
						case ".wvp":
							return "wavpack";
						case ".mpc":
							return "musepack";
						case ".dsf":
							return "dsf";
						case ".dff":
							return "dsdiff";
						case ".mka":
						case ".mkv":
						case ".mk3d":
						case ".mks":
						case ".webm":
							return "matroska";
					}
				}
				static async loadParser(e) {
					switch (e) {
						case "aiff":
							return new l.AIFFParser();
						case "apev2":
							return new c.APEv2Parser();
						case "asf":
							return new u.AsfParser();
						case "dsf":
							return new v.DsfParser();
						case "dsdiff":
							return new y.DsdiffParser();
						case "flac":
							return new d.FlacParser();
						case "mp4":
							return new f.MP4Parser();
						case "mpeg":
							return new h.MpegParser();
						case "musepack":
							return new p.default();
						case "ogg":
							return new m.OggParser();
						case "riff":
							return new g.WaveParser();
						case "wavpack":
							return new b.WavPackParser();
						case "matroska":
							return new w.MatroskaParser();
						default:
							throw new Error("Unknown parser type: " + e);
					}
				}
				static async _parse(e, t, a = {}) {
					const r = await k.loadParser(t),
						n = new o.MetadataCollector(a);
					return await r.init(n, e, a).parse(), n.toCommonMetadata();
				}
				static getExtension(e) {
					const t = e.lastIndexOf(".");
					return -1 === t ? "" : e.slice(t);
				}
				static getParserIdForMimeType(e) {
					let t;
					try {
						t = _(e);
					} catch (t) {
						return void T(
							"Invalid HTTP Content-Type header value: " + e
						);
					}
					const a =
						0 === t.subtype.indexOf("x-")
							? t.subtype.substring(2)
							: t.subtype;
					switch (t.type) {
						case "audio":
							switch (a) {
								case "mp3":
								case "mpeg":
									return "mpeg";
								case "flac":
									return "flac";
								case "ape":
								case "monkeys-audio":
									return "apev2";
								case "mp4":
								case "aac":
								case "aacp":
								case "m4a":
									return "mp4";
								case "ogg":
								case "opus":
								case "speex":
									return "ogg";
								case "ms-wma":
								case "ms-wmv":
								case "ms-asf":
									return "asf";
								case "aiff":
								case "aif":
								case "aifc":
									return "aiff";
								case "vnd.wave":
								case "wav":
								case "wave":
									return "riff";
								case "wavpack":
									return "wavpack";
								case "musepack":
									return "musepack";
								case "matroska":
								case "webm":
									return "matroska";
								case "dsf":
									return "dsf";
							}
							break;
						case "video":
							switch (a) {
								case "ms-asf":
								case "ms-wmv":
									return "asf";
								case "m4v":
								case "mp4":
									return "mp4";
								case "ogg":
									return "ogg";
								case "matroska":
								case "webm":
									return "matroska";
							}
							break;
						case "application":
							switch (a) {
								case "vnd.ms-asf":
									return "asf";
								case "ogg":
									return "ogg";
							}
					}
				}
			}
			t.ParserFactory = k;
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			t.stringToBytes = (e) => [...e].map((e) => e.charCodeAt(0));
			const a = (e, t, a) => String.fromCharCode(...e.slice(t, a));
			(t.readUInt64LE = (e, t = 0) => {
				let a = e[t],
					r = 1,
					n = 0;
				for (; ++n < 8; ) (r *= 256), (a += e[t + n] * r);
				return a;
			}),
				(t.tarHeaderChecksumMatches = (e) => {
					if (e.length < 512) return !1;
					let t = 256,
						r = 0;
					for (let a = 0; a < 148; a++) {
						const n = e[a];
						(t += n), (r += 128 & n);
					}
					for (let a = 156; a < 512; a++) {
						const n = e[a];
						(t += n), (r += 128 & n);
					}
					const n = parseInt(a(e, 148, 154), 8);
					return n === t || n === t - (r << 1);
				}),
				(t.multiByteIndexOf = (t, a, r = 0) => {
					if (e && e.isBuffer(t)) return t.indexOf(e.from(a), r);
					const n = (e, t, a) => {
						for (let r = 1; r < t.length; r++)
							if (t[r] !== e[a + r]) return !1;
						return !0;
					};
					let i = t.indexOf(a[0], r);
					for (; i >= 0; ) {
						if (n(t, a, i)) return i;
						i = t.indexOf(a[0], i + 1);
					}
					return -1;
				}),
				(t.uint8ArrayUtf8ByteString = a);
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		e.exports = {
			extensions: [
				"jpg",
				"png",
				"apng",
				"gif",
				"webp",
				"flif",
				"cr2",
				"orf",
				"arw",
				"dng",
				"nef",
				"rw2",
				"raf",
				"tif",
				"bmp",
				"jxr",
				"psd",
				"zip",
				"tar",
				"rar",
				"gz",
				"bz2",
				"7z",
				"dmg",
				"mp4",
				"mid",
				"mkv",
				"webm",
				"mov",
				"avi",
				"mpg",
				"mp2",
				"mp3",
				"m4a",
				"oga",
				"ogg",
				"ogv",
				"opus",
				"flac",
				"wav",
				"spx",
				"amr",
				"pdf",
				"epub",
				"exe",
				"swf",
				"rtf",
				"wasm",
				"woff",
				"woff2",
				"eot",
				"ttf",
				"otf",
				"ico",
				"flv",
				"ps",
				"xz",
				"sqlite",
				"nes",
				"crx",
				"xpi",
				"cab",
				"deb",
				"ar",
				"rpm",
				"Z",
				"lz",
				"msi",
				"mxf",
				"mts",
				"blend",
				"bpg",
				"docx",
				"pptx",
				"xlsx",
				"3gp",
				"3g2",
				"jp2",
				"jpm",
				"jpx",
				"mj2",
				"aif",
				"qcp",
				"odt",
				"ods",
				"odp",
				"xml",
				"mobi",
				"heic",
				"cur",
				"ktx",
				"ape",
				"wv",
				"wmv",
				"wma",
				"dcm",
				"ics",
				"glb",
				"pcap",
				"dsf",
				"lnk",
				"alias",
				"voc",
				"ac3",
				"m4v",
				"m4p",
				"m4b",
				"f4v",
				"f4p",
				"f4b",
				"f4a",
				"mie",
				"asf",
				"ogm",
				"ogx",
				"mpc",
				"arrow",
				"shp",
			],
			mimeTypes: [
				"image/jpeg",
				"image/png",
				"image/gif",
				"image/webp",
				"image/flif",
				"image/x-canon-cr2",
				"image/tiff",
				"image/bmp",
				"image/vnd.ms-photo",
				"image/vnd.adobe.photoshop",
				"application/epub+zip",
				"application/x-xpinstall",
				"application/vnd.oasis.opendocument.text",
				"application/vnd.oasis.opendocument.spreadsheet",
				"application/vnd.oasis.opendocument.presentation",
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
				"application/vnd.openxmlformats-officedocument.presentationml.presentation",
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
				"application/zip",
				"application/x-tar",
				"application/x-rar-compressed",
				"application/gzip",
				"application/x-bzip2",
				"application/x-7z-compressed",
				"application/x-apple-diskimage",
				"application/x-apache-arrow",
				"video/mp4",
				"audio/midi",
				"video/x-matroska",
				"video/webm",
				"video/quicktime",
				"video/vnd.avi",
				"audio/vnd.wave",
				"audio/qcelp",
				"audio/x-ms-wma",
				"video/x-ms-asf",
				"application/vnd.ms-asf",
				"video/mpeg",
				"video/3gpp",
				"audio/mpeg",
				"audio/mp4",
				"audio/opus",
				"video/ogg",
				"audio/ogg",
				"application/ogg",
				"audio/x-flac",
				"audio/ape",
				"audio/wavpack",
				"audio/amr",
				"application/pdf",
				"application/x-msdownload",
				"application/x-shockwave-flash",
				"application/rtf",
				"application/wasm",
				"font/woff",
				"font/woff2",
				"application/vnd.ms-fontobject",
				"font/ttf",
				"font/otf",
				"image/x-icon",
				"video/x-flv",
				"application/postscript",
				"application/x-xz",
				"application/x-sqlite3",
				"application/x-nintendo-nes-rom",
				"application/x-google-chrome-extension",
				"application/vnd.ms-cab-compressed",
				"application/x-deb",
				"application/x-unix-archive",
				"application/x-rpm",
				"application/x-compress",
				"application/x-lzip",
				"application/x-msi",
				"application/x-mie",
				"application/mxf",
				"video/mp2t",
				"application/x-blender",
				"image/bpg",
				"image/jp2",
				"image/jpx",
				"image/jpm",
				"image/mj2",
				"audio/aiff",
				"application/xml",
				"application/x-mobipocket-ebook",
				"image/heif",
				"image/heif-sequence",
				"image/heic",
				"image/heic-sequence",
				"image/ktx",
				"application/dicom",
				"audio/x-musepack",
				"text/calendar",
				"model/gltf-binary",
				"application/vnd.tcpdump.pcap",
				"audio/x-dsf",
				"application/x.ms.shortcut",
				"application/x.apple.alias",
				"audio/x-voc",
				"audio/vnd.dolby.dd-raw",
				"audio/x-m4a",
				"image/apng",
				"image/x-olympus-orf",
				"image/x-sony-arw",
				"image/x-adobe-dng",
				"image/x-nikon-nef",
				"image/x-panasonic-rw2",
				"image/x-fujifilm-raf",
				"video/x-m4v",
				"video/3gpp2",
				"application/x-esri-shape",
			],
		};
	},
	function (e, t, a) {
		"use strict";
		var r =
				/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
			n = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,
			i = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
			s = /\\([\u000b\u0020-\u00ff])/g,
			o = /([\\"])/g,
			l = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
		function c(e) {
			var t = String(e);
			if (i.test(t)) return t;
			if (t.length > 0 && !n.test(t))
				throw new TypeError("invalid parameter value");
			return '"' + t.replace(o, "\\$1") + '"';
		}
		function u(e) {
			(this.parameters = Object.create(null)), (this.type = e);
		}
		(t.format = function (e) {
			if (!e || "object" != typeof e)
				throw new TypeError("argument obj is required");
			var t = e.parameters,
				a = e.type;
			if (!a || !l.test(a)) throw new TypeError("invalid type");
			var r = a;
			if (t && "object" == typeof t)
				for (
					var n, s = Object.keys(t).sort(), o = 0;
					o < s.length;
					o++
				) {
					if (((n = s[o]), !i.test(n)))
						throw new TypeError("invalid parameter name");
					r += "; " + n + "=" + c(t[n]);
				}
			return r;
		}),
			(t.parse = function (e) {
				if (!e) throw new TypeError("argument string is required");
				var t =
					"object" == typeof e
						? (function (e) {
								var t;
								"function" == typeof e.getHeader
									? (t = e.getHeader("content-type"))
									: "object" == typeof e.headers &&
									  (t =
											e.headers &&
											e.headers["content-type"]);
								if ("string" != typeof t)
									throw new TypeError(
										"content-type header is missing from object"
									);
								return t;
						  })(e)
						: e;
				if ("string" != typeof t)
					throw new TypeError(
						"argument string is required to be a string"
					);
				var a = t.indexOf(";"),
					n = -1 !== a ? t.substr(0, a).trim() : t.trim();
				if (!l.test(n)) throw new TypeError("invalid media type");
				var i = new u(n.toLowerCase());
				if (-1 !== a) {
					var o, c, d;
					for (r.lastIndex = a; (c = r.exec(t)); ) {
						if (c.index !== a)
							throw new TypeError("invalid parameter format");
						(a += c[0].length),
							(o = c[1].toLowerCase()),
							'"' === (d = c[2])[0] &&
								(d = d
									.substr(1, d.length - 2)
									.replace(s, "$1")),
							(i.parameters[o] = d);
					}
					if (a !== t.length)
						throw new TypeError("invalid parameter format");
				}
				return i;
			});
	},
	function (e, t, a) {
		"use strict";
		var r = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/,
			n = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/,
			i =
				/^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
		function s(e, t, a) {
			(this.type = e), (this.subtype = t), (this.suffix = a);
		}
		(t.format = function (e) {
			if (!e || "object" != typeof e)
				throw new TypeError("argument obj is required");
			var t = e.subtype,
				a = e.suffix,
				i = e.type;
			if (!i || !n.test(i)) throw new TypeError("invalid type");
			if (!t || !r.test(t)) throw new TypeError("invalid subtype");
			var s = i + "/" + t;
			if (a) {
				if (!n.test(a)) throw new TypeError("invalid suffix");
				s += "+" + a;
			}
			return s;
		}),
			(t.parse = function (e) {
				if (!e) throw new TypeError("argument string is required");
				if ("string" != typeof e)
					throw new TypeError(
						"argument string is required to be a string"
					);
				var t = i.exec(e.toLowerCase());
				if (!t) throw new TypeError("invalid media type");
				var a,
					r = t[1],
					n = t[2],
					o = n.lastIndexOf("+");
				-1 !== o && ((a = n.substr(o + 1)), (n = n.substr(0, o)));
				return new s(r, n, a);
			}),
			(t.test = function (e) {
				if (!e) throw new TypeError("argument string is required");
				if ("string" != typeof e)
					throw new TypeError(
						"argument string is required to be a string"
					);
				return i.test(e.toLowerCase());
			});
	},
	function (e, t, a) {
		e.exports = function (e) {
			function t(e) {
				let t = 0;
				for (let a = 0; a < e.length; a++)
					(t = (t << 5) - t + e.charCodeAt(a)), (t |= 0);
				return r.colors[Math.abs(t) % r.colors.length];
			}
			function r(e) {
				let a;
				function s(...e) {
					if (!s.enabled) return;
					const t = s,
						n = Number(new Date()),
						i = n - (a || n);
					(t.diff = i),
						(t.prev = a),
						(t.curr = n),
						(a = n),
						(e[0] = r.coerce(e[0])),
						"string" != typeof e[0] && e.unshift("%O");
					let o = 0;
					(e[0] = e[0].replace(/%([a-zA-Z%])/g, (a, n) => {
						if ("%%" === a) return a;
						o++;
						const i = r.formatters[n];
						if ("function" == typeof i) {
							const r = e[o];
							(a = i.call(t, r)), e.splice(o, 1), o--;
						}
						return a;
					})),
						r.formatArgs.call(t, e);
					(t.log || r.log).apply(t, e);
				}
				return (
					(s.namespace = e),
					(s.enabled = r.enabled(e)),
					(s.useColors = r.useColors()),
					(s.color = t(e)),
					(s.destroy = n),
					(s.extend = i),
					"function" == typeof r.init && r.init(s),
					r.instances.push(s),
					s
				);
			}
			function n() {
				const e = r.instances.indexOf(this);
				return -1 !== e && (r.instances.splice(e, 1), !0);
			}
			function i(e, t) {
				const a = r(this.namespace + (void 0 === t ? ":" : t) + e);
				return (a.log = this.log), a;
			}
			function s(e) {
				return e
					.toString()
					.substring(2, e.toString().length - 2)
					.replace(/\.\*\?$/, "*");
			}
			return (
				(r.debug = r),
				(r.default = r),
				(r.coerce = function (e) {
					if (e instanceof Error) return e.stack || e.message;
					return e;
				}),
				(r.disable = function () {
					const e = [
						...r.names.map(s),
						...r.skips.map(s).map((e) => "-" + e),
					].join(",");
					return r.enable(""), e;
				}),
				(r.enable = function (e) {
					let t;
					r.save(e), (r.names = []), (r.skips = []);
					const a = ("string" == typeof e ? e : "").split(/[\s,]+/),
						n = a.length;
					for (t = 0; t < n; t++)
						a[t] &&
							("-" === (e = a[t].replace(/\*/g, ".*?"))[0]
								? r.skips.push(
										new RegExp("^" + e.substr(1) + "$")
								  )
								: r.names.push(new RegExp("^" + e + "$")));
					for (t = 0; t < r.instances.length; t++) {
						const e = r.instances[t];
						e.enabled = r.enabled(e.namespace);
					}
				}),
				(r.enabled = function (e) {
					if ("*" === e[e.length - 1]) return !0;
					let t, a;
					for (t = 0, a = r.skips.length; t < a; t++)
						if (r.skips[t].test(e)) return !1;
					for (t = 0, a = r.names.length; t < a; t++)
						if (r.names[t].test(e)) return !0;
					return !1;
				}),
				(r.humanize = a(66)),
				Object.keys(e).forEach((t) => {
					r[t] = e[t];
				}),
				(r.instances = []),
				(r.names = []),
				(r.skips = []),
				(r.formatters = {}),
				(r.selectColor = t),
				r.enable(r.load()),
				r
			);
		};
	},
	function (e, t) {
		var a = 1e3,
			r = 60 * a,
			n = 60 * r,
			i = 24 * n,
			s = 7 * i,
			o = 365.25 * i;
		function l(e, t, a, r) {
			var n = t >= 1.5 * a;
			return Math.round(e / a) + " " + r + (n ? "s" : "");
		}
		e.exports = function (e, t) {
			t = t || {};
			var c = typeof e;
			if ("string" === c && e.length > 0)
				return (function (e) {
					if ((e = String(e)).length > 100) return;
					var t =
						/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
							e
						);
					if (!t) return;
					var l = parseFloat(t[1]);
					switch ((t[2] || "ms").toLowerCase()) {
						case "years":
						case "year":
						case "yrs":
						case "yr":
						case "y":
							return l * o;
						case "weeks":
						case "week":
						case "w":
							return l * s;
						case "days":
						case "day":
						case "d":
							return l * i;
						case "hours":
						case "hour":
						case "hrs":
						case "hr":
						case "h":
							return l * n;
						case "minutes":
						case "minute":
						case "mins":
						case "min":
						case "m":
							return l * r;
						case "seconds":
						case "second":
						case "secs":
						case "sec":
						case "s":
							return l * a;
						case "milliseconds":
						case "millisecond":
						case "msecs":
						case "msec":
						case "ms":
							return l;
						default:
							return;
					}
				})(e);
			if ("number" === c && isFinite(e))
				return t.long
					? (function (e) {
							var t = Math.abs(e);
							if (t >= i) return l(e, t, i, "day");
							if (t >= n) return l(e, t, n, "hour");
							if (t >= r) return l(e, t, r, "minute");
							if (t >= a) return l(e, t, a, "second");
							return e + " ms";
					  })(e)
					: (function (e) {
							var t = Math.abs(e);
							if (t >= i) return Math.round(e / i) + "d";
							if (t >= n) return Math.round(e / n) + "h";
							if (t >= r) return Math.round(e / r) + "m";
							if (t >= a) return Math.round(e / a) + "s";
							return e + "ms";
					  })(e);
			throw new Error(
				"val is not a non-empty string or a valid number. val=" +
					JSON.stringify(e)
			);
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(1),
			n = a(68),
			i = a(69),
			s = a(8),
			o = a(4),
			l = r("music-metadata:collector"),
			c = [
				"matroska",
				"APEv2",
				"vorbis",
				"ID3v2.4",
				"ID3v2.3",
				"ID3v2.2",
				"exif",
				"asf",
				"iTunes",
				"ID3v1",
			];
		function u(e) {
			return e.length > 2
				? e.slice(0, e.length - 1).join(", ") + " & " + e[e.length - 1]
				: e.join(" & ");
		}
		(t.MetadataCollector = class {
			constructor(e) {
				(this.opts = e),
					(this.format = { tagTypes: [] }),
					(this.native = {}),
					(this.common = {
						track: { no: null, of: null },
						disk: { no: null, of: null },
					}),
					(this.quality = { warnings: [] }),
					(this.commonOrigin = {}),
					(this.originPriority = {}),
					(this.tagMapper = new i.CombinedTagMapper());
				let t = 1;
				for (const e of c) this.originPriority[e] = t++;
				(this.originPriority.artificial = 500),
					(this.originPriority.id3v1 = 600);
			}
			hasAny() {
				return Object.keys(this.native).length > 0;
			}
			setFormat(e, t) {
				l(`format: ${e} = ${t}`),
					(this.format[e] = t),
					this.opts.observer &&
						this.opts.observer({
							metadata: this,
							tag: { type: "format", id: e, value: t },
						});
			}
			addTag(e, t, a) {
				l(`tag ${e}.${t} = ${a}`),
					this.native[e] ||
						(this.format.tagTypes.push(e), (this.native[e] = [])),
					this.native[e].push({ id: t, value: a }),
					this.toCommon(e, t, a);
			}
			addWarning(e) {
				this.quality.warnings.push({ message: e });
			}
			postMap(e, t) {
				switch (t.id) {
					case "artist":
						if (this.commonOrigin.artist === this.originPriority[e])
							return this.postMap("artificial", {
								id: "artists",
								value: t.value,
							});
						this.common.artists ||
							this.setGenericTag("artificial", {
								id: "artists",
								value: t.value,
							});
						break;
					case "artists":
						if (
							!(
								(this.common.artist &&
									this.commonOrigin.artist !==
										this.originPriority.artificial) ||
								(this.common.artists &&
									-1 !== this.common.artists.indexOf(t.value))
							)
						) {
							const e = {
								id: "artist",
								value: u(
									(this.common.artists || []).concat([
										t.value,
									])
								),
							};
							this.setGenericTag("artificial", e);
						}
						break;
					case "genre":
						t.value = s.CommonTagMapper.parseGenre(t.value);
						break;
					case "picture":
						t.value.format = s.CommonTagMapper.fixPictureMimeType(
							t.value.format
						);
						break;
					case "totaltracks":
						return void (this.common.track.of =
							s.CommonTagMapper.toIntOrNull(t.value));
					case "totaldiscs":
						return void (this.common.disk.of =
							s.CommonTagMapper.toIntOrNull(t.value));
					case "track":
					case "disk":
						const a = this.common[t.id].of;
						return (
							(this.common[t.id] =
								s.CommonTagMapper.normalizeTrack(t.value)),
							void (this.common[t.id].of =
								null != a ? a : this.common[t.id].of)
						);
					case "year":
					case "originalyear":
						t.value = parseInt(t.value, 10);
						break;
					case "date":
						const r = parseInt(t.value.substr(0, 4), 10);
						isNaN(r) || (this.common.year = r);
						break;
					case "discogs_label_id":
					case "discogs_release_id":
					case "discogs_master_release_id":
					case "discogs_artist_id":
					case "discogs_votes":
						t.value =
							"string" == typeof t.value
								? parseInt(t.value, 10)
								: t.value;
						break;
					case "replaygain_track_gain":
					case "replaygain_track_peak":
					case "replaygain_album_gain":
					case "replaygain_album_peak":
						t.value = o.toRatio(t.value);
						break;
					case "replaygain_track_minmax":
						t.value = t.value
							.split(",")
							.map((e) => parseInt(e, 10));
						break;
					case "replaygain_undo":
						const n = t.value
							.split(",")
							.map((e) => parseInt(e, 10));
						t.value = { leftChannel: n[0], rightChannel: n[1] };
						break;
					case "gapless":
						t.value = "1" === t.value;
						break;
					case "isrc":
						if (
							this.common[t.id] &&
							-1 !== this.common[t.id].indexOf(t.value)
						)
							return;
				}
				this.setGenericTag(e, t);
			}
			toCommonMetadata() {
				return {
					format: this.format,
					native: this.native,
					quality: this.quality,
					common: this.common,
				};
			}
			toCommon(e, t, a) {
				const r = { id: t, value: a },
					n = this.tagMapper.mapTag(e, r, this);
				n && this.postMap(e, n);
			}
			setGenericTag(e, t) {
				l(`common.${t.id} = ${t.value}`);
				const a = this.commonOrigin[t.id] || 1e3,
					r = this.originPriority[e];
				if (n.isSingleton(t.id)) {
					if (!(r <= a))
						return l(
							`Ignore native tag (singleton): ${e}.${t.id} = ${t.value}`
						);
					(this.common[t.id] = t.value),
						(this.commonOrigin[t.id] = r);
				} else if (r === a)
					n.isUnique(t.id) &&
					-1 !== this.common[t.id].indexOf(t.value)
						? l(`Ignore duplicate value: ${e}.${t.id} = ${t.value}`)
						: this.common[t.id].push(t.value);
				else {
					if (!(r < a))
						return l(
							`Ignore native tag (list): ${e}.${t.id} = ${t.value}`
						);
					(this.common[t.id] = [t.value]),
						(this.commonOrigin[t.id] = r);
				}
				this.opts.observer &&
					this.opts.observer({
						metadata: this,
						tag: { type: "common", id: t.id, value: t.value },
					});
			}
		}),
			(t.joinArtists = u);
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }),
			(t.commonTags = {
				year: { multiple: !1 },
				track: { multiple: !1 },
				disk: { multiple: !1 },
				title: { multiple: !1 },
				artist: { multiple: !1 },
				artists: { multiple: !0, unique: !0 },
				albumartist: { multiple: !1 },
				album: { multiple: !1 },
				date: { multiple: !1 },
				originaldate: { multiple: !1 },
				originalyear: { multiple: !1 },
				comment: { multiple: !0, unique: !1 },
				genre: { multiple: !0, unique: !0 },
				picture: { multiple: !0, unique: !0 },
				composer: { multiple: !0, unique: !0 },
				lyrics: { multiple: !0, unique: !1 },
				albumsort: { multiple: !1, unique: !0 },
				titlesort: { multiple: !1, unique: !0 },
				work: { multiple: !1, unique: !0 },
				artistsort: { multiple: !1, unique: !0 },
				albumartistsort: { multiple: !1, unique: !0 },
				composersort: { multiple: !0, unique: !0 },
				lyricist: { multiple: !0, unique: !0 },
				writer: { multiple: !0, unique: !0 },
				conductor: { multiple: !0, unique: !0 },
				remixer: { multiple: !0, unique: !0 },
				arranger: { multiple: !0, unique: !0 },
				engineer: { multiple: !0, unique: !0 },
				producer: { multiple: !0, unique: !0 },
				technician: { multiple: !0, unique: !0 },
				djmixer: { multiple: !0, unique: !0 },
				mixer: { multiple: !0, unique: !0 },
				label: { multiple: !0, unique: !0 },
				grouping: { multiple: !1 },
				subtitle: { multiple: !1 },
				discsubtitle: { multiple: !1 },
				totaltracks: { multiple: !1 },
				totaldiscs: { multiple: !1 },
				compilation: { multiple: !1 },
				rating: { multiple: !0 },
				bpm: { multiple: !1 },
				mood: { multiple: !1 },
				media: { multiple: !1 },
				catalognumber: { multiple: !0, unique: !0 },
				tvShow: { multiple: !1 },
				tvShowSort: { multiple: !1 },
				tvSeason: { multiple: !1 },
				tvEpisode: { multiple: !1 },
				tvEpisodeId: { multiple: !1 },
				tvNetwork: { multiple: !1 },
				podcast: { multiple: !1 },
				podcasturl: { multiple: !1 },
				releasestatus: { multiple: !1 },
				releasetype: { multiple: !0 },
				releasecountry: { multiple: !1 },
				script: { multiple: !1 },
				language: { multiple: !1 },
				copyright: { multiple: !1 },
				license: { multiple: !1 },
				encodedby: { multiple: !1 },
				encodersettings: { multiple: !1 },
				gapless: { multiple: !1 },
				barcode: { multiple: !1 },
				isrc: { multiple: !0 },
				asin: { multiple: !1 },
				musicbrainz_recordingid: { multiple: !1 },
				musicbrainz_trackid: { multiple: !1 },
				musicbrainz_albumid: { multiple: !1 },
				musicbrainz_artistid: { multiple: !0 },
				musicbrainz_albumartistid: { multiple: !0 },
				musicbrainz_releasegroupid: { multiple: !1 },
				musicbrainz_workid: { multiple: !1 },
				musicbrainz_trmid: { multiple: !1 },
				musicbrainz_discid: { multiple: !1 },
				acoustid_id: { multiple: !1 },
				acoustid_fingerprint: { multiple: !1 },
				musicip_puid: { multiple: !1 },
				musicip_fingerprint: { multiple: !1 },
				website: { multiple: !1 },
				"performer:instrument": { multiple: !0, unique: !0 },
				averageLevel: { multiple: !1 },
				peakLevel: { multiple: !1 },
				notes: { multiple: !0, unique: !1 },
				key: { multiple: !1 },
				originalalbum: { multiple: !1 },
				originalartist: { multiple: !1 },
				discogs_artist_id: { multiple: !0, unique: !0 },
				discogs_release_id: { multiple: !1 },
				discogs_label_id: { multiple: !1 },
				discogs_master_release_id: { multiple: !1 },
				discogs_votes: { multiple: !1 },
				discogs_rating: { multiple: !1 },
				replaygain_track_peak: { multiple: !1 },
				replaygain_track_gain: { multiple: !1 },
				replaygain_album_peak: { multiple: !1 },
				replaygain_album_gain: { multiple: !1 },
				replaygain_track_minmax: { multiple: !1 },
				replaygain_album_minmax: { multiple: !1 },
				replaygain_undo: { multiple: !1 },
				description: { multiple: !0 },
			}),
			(t.isSingleton = function (e) {
				return (
					t.commonTags.hasOwnProperty(e) && !t.commonTags[e].multiple
				);
			}),
			(t.isUnique = function (e) {
				return !t.commonTags[e].multiple || t.commonTags[e].unique;
			});
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(70),
			n = a(73),
			i = a(74),
			s = a(75),
			o = a(76),
			l = a(77),
			c = a(78),
			u = a(79),
			d = a(80);
		t.CombinedTagMapper = class {
			constructor() {
				(this.tagMappers = {}),
					[
						new r.ID3v1TagMapper(),
						new s.ID3v22TagMapper(),
						new n.ID3v24TagMapper(),
						new l.MP4TagMapper(),
						new l.MP4TagMapper(),
						new c.VorbisTagMapper(),
						new o.APEv2TagMapper(),
						new i.AsfTagMapper(),
						new u.RiffInfoTagMapper(),
						new d.MatroskaTagMapper(),
					].forEach((e) => {
						this.registerTagMapper(e);
					});
			}
			mapTag(e, t, a) {
				if (this.tagMappers[e])
					return this.tagMappers[e].mapGenericTag(t, a);
				throw new Error(
					"No generic tag mapper defined for tag-format: " + e
				);
			}
			registerTagMapper(e) {
				for (const t of e.tagTypes) this.tagMappers[t] = e;
			}
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(8),
			n = {
				title: "title",
				artist: "artist",
				album: "album",
				year: "year",
				comment: "comment",
				track: "track",
				genre: "genre",
			};
		class i extends r.CommonTagMapper {
			constructor() {
				super(["ID3v1"], n);
			}
		}
		t.ID3v1TagMapper = i;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		class r {
			static decode(e) {
				let t = "";
				for (const a in e)
					e.hasOwnProperty(a) &&
						(t += r.codePointToString(r.singleByteDecoder(e[a])));
				return t;
			}
			static inRange(e, t, a) {
				return t <= e && e <= a;
			}
			static codePointToString(e) {
				return e <= 65535
					? String.fromCharCode(e)
					: ((e -= 65536),
					  String.fromCharCode(
							55296 + (e >> 10),
							56320 + (1023 & e)
					  ));
			}
			static singleByteDecoder(e) {
				if (r.inRange(e, 0, 127)) return e;
				const t = r.windows1252[e - 128];
				if (null === t) throw Error("invaliding encoding");
				return t;
			}
		}
		(t.Windows1292Decoder = r),
			(r.windows1252 = [
				8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352,
				8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226,
				8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376, 160, 161,
				162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
				175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
				188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
				201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213,
				214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226,
				227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239,
				240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252,
				253, 254, 255,
			]);
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(6);
		function i(e) {
			return {
				containsHeader: s(e, 31),
				containsFooter: s(e, 30),
				isHeader: s(e, 31),
				readOnly: s(e, 0),
				dataType: (6 & e) >> 1,
			};
		}
		function s(e, t) {
			return 0 != (e & (1 << t));
		}
		!(function (e) {
			(e[(e.text_utf8 = 0)] = "text_utf8"),
				(e[(e.binary = 1)] = "binary"),
				(e[(e.external_info = 2)] = "external_info"),
				(e[(e.reserved = 3)] = "reserved");
		})(t.DataType || (t.DataType = {})),
			(t.DescriptorParser = {
				len: 52,
				get: (e, t) => ({
					ID: n.FourCcToken.get(e, t),
					version: r.UINT32_LE.get(e, t + 4) / 1e3,
					descriptorBytes: r.UINT32_LE.get(e, t + 8),
					headerBytes: r.UINT32_LE.get(e, t + 12),
					seekTableBytes: r.UINT32_LE.get(e, t + 16),
					headerDataBytes: r.UINT32_LE.get(e, t + 20),
					apeFrameDataBytes: r.UINT32_LE.get(e, t + 24),
					apeFrameDataBytesHigh: r.UINT32_LE.get(e, t + 28),
					terminatingDataBytes: r.UINT32_LE.get(e, t + 32),
					fileMD5: new r.BufferType(16).get(e, t + 36),
				}),
			}),
			(t.Header = {
				len: 24,
				get: (e, t) => ({
					compressionLevel: r.UINT16_LE.get(e, t),
					formatFlags: r.UINT16_LE.get(e, t + 2),
					blocksPerFrame: r.UINT32_LE.get(e, t + 4),
					finalFrameBlocks: r.UINT32_LE.get(e, t + 8),
					totalFrames: r.UINT32_LE.get(e, t + 12),
					bitsPerSample: r.UINT16_LE.get(e, t + 16),
					channel: r.UINT16_LE.get(e, t + 18),
					sampleRate: r.UINT32_LE.get(e, t + 20),
				}),
			}),
			(t.TagFooter = {
				len: 32,
				get: (e, t) => ({
					ID: new r.StringType(8, "ascii").get(e, t),
					version: r.UINT32_LE.get(e, t + 8),
					size: r.UINT32_LE.get(e, t + 12),
					fields: r.UINT32_LE.get(e, t + 16),
					flags: i(r.UINT32_LE.get(e, t + 20)),
				}),
			}),
			(t.TagItemHeader = {
				len: 8,
				get: (e, t) => ({
					size: r.UINT32_LE.get(e, t),
					flags: i(r.UINT32_LE.get(e, t + 4)),
				}),
			}),
			(t.TagField = (e) => new r.BufferType(e.size - t.TagFooter.len)),
			(t.parseTagFlags = i),
			(t.isBitSet = s);
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(8),
			n = a(4),
			i = a(24),
			s = {
				TIT2: "title",
				TPE1: "artist",
				"TXXX:Artists": "artists",
				TPE2: "albumartist",
				TALB: "album",
				TDRV: "date",
				TORY: "originalyear",
				TPOS: "disk",
				TCON: "genre",
				APIC: "picture",
				TCOM: "composer",
				"USLT:description": "lyrics",
				TSOA: "albumsort",
				TSOT: "titlesort",
				TOAL: "originalalbum",
				TSOP: "artistsort",
				TSO2: "albumartistsort",
				TSOC: "composersort",
				TEXT: "lyricist",
				"TXXX:Writer": "writer",
				TPE3: "conductor",
				TPE4: "remixer",
				"IPLS:arranger": "arranger",
				"IPLS:engineer": "engineer",
				"IPLS:producer": "producer",
				"IPLS:DJ-mix": "djmixer",
				"IPLS:mix": "mixer",
				TPUB: "label",
				TIT1: "grouping",
				TIT3: "subtitle",
				TRCK: "track",
				TCMP: "compilation",
				POPM: "rating",
				TBPM: "bpm",
				TMED: "media",
				"TXXX:CATALOGNUMBER": "catalognumber",
				"TXXX:MusicBrainz Album Status": "releasestatus",
				"TXXX:MusicBrainz Album Type": "releasetype",
				"TXXX:MusicBrainz Album Release Country": "releasecountry",
				"TXXX:RELEASECOUNTRY": "releasecountry",
				"TXXX:SCRIPT": "script",
				TLAN: "language",
				TCOP: "copyright",
				WCOP: "license",
				TENC: "encodedby",
				TSSE: "encodersettings",
				"TXXX:BARCODE": "barcode",
				TSRC: "isrc",
				"TXXX:ASIN": "asin",
				"TXXX:originalyear": "originalyear",
				"UFID:http://musicbrainz.org": "musicbrainz_recordingid",
				"TXXX:MusicBrainz Release Track Id": "musicbrainz_trackid",
				"TXXX:MusicBrainz Album Id": "musicbrainz_albumid",
				"TXXX:MusicBrainz Artist Id": "musicbrainz_artistid",
				"TXXX:MusicBrainz Album Artist Id": "musicbrainz_albumartistid",
				"TXXX:MusicBrainz Release Group Id":
					"musicbrainz_releasegroupid",
				"TXXX:MusicBrainz Work Id": "musicbrainz_workid",
				"TXXX:MusicBrainz TRM Id": "musicbrainz_trmid",
				"TXXX:MusicBrainz Disc Id": "musicbrainz_discid",
				"TXXX:ACOUSTID_ID": "acoustid_id",
				"TXXX:Acoustid Id": "acoustid_id",
				"TXXX:Acoustid Fingerprint": "acoustid_fingerprint",
				"TXXX:MusicIP PUID": "musicip_puid",
				"TXXX:MusicMagic Fingerprint": "musicip_fingerprint",
				WOAR: "website",
				TDRC: "date",
				TYER: "year",
				TDOR: "originaldate",
				"TIPL:arranger": "arranger",
				"TIPL:engineer": "engineer",
				"TIPL:producer": "producer",
				"TIPL:DJ-mix": "djmixer",
				"TIPL:mix": "mixer",
				TMOO: "mood",
				SYLT: "lyrics",
				TSST: "discsubtitle",
				TKEY: "key",
				COMM: "comment",
				TOPE: "originalartist",
				"PRIV:AverageLevel": "averageLevel",
				"PRIV:PeakLevel": "peakLevel",
				"TXXX:DISCOGS_ARTIST_ID": "discogs_artist_id",
				"TXXX:DISCOGS_ARTISTS": "artists",
				"TXXX:DISCOGS_ARTIST_NAME": "artists",
				"TXXX:DISCOGS_ALBUM_ARTISTS": "albumartist",
				"TXXX:DISCOGS_CATALOG": "catalognumber",
				"TXXX:DISCOGS_COUNTRY": "releasecountry",
				"TXXX:DISCOGS_DATE": "originaldate",
				"TXXX:DISCOGS_LABEL": "label",
				"TXXX:DISCOGS_LABEL_ID": "discogs_label_id",
				"TXXX:DISCOGS_MASTER_RELEASE_ID": "discogs_master_release_id",
				"TXXX:DISCOGS_RATING": "discogs_rating",
				"TXXX:DISCOGS_RELEASED": "date",
				"TXXX:DISCOGS_RELEASE_ID": "discogs_release_id",
				"TXXX:DISCOGS_VOTES": "discogs_votes",
				"TXXX:CATALOGID": "catalognumber",
				"TXXX:STYLE": "genre",
				"TXXX:REPLAYGAIN_TRACK_PEAK": "replaygain_track_peak",
				"TXXX:REPLAYGAIN_TRACK_GAIN": "replaygain_track_gain",
				"TXXX:REPLAYGAIN_ALBUM_PEAK": "replaygain_album_peak",
				"TXXX:REPLAYGAIN_ALBUM_GAIN": "replaygain_album_gain",
				"TXXX:MP3GAIN_MINMAX": "replaygain_track_minmax",
				"TXXX:MP3GAIN_ALBUM_MINMAX": "replaygain_album_minmax",
				"TXXX:MP3GAIN_UNDO": "replaygain_undo",
			};
		class o extends i.CaseInsensitiveTagMap {
			static toRating(e) {
				return {
					source: e.email,
					rating:
						e.rating > 0
							? ((e.rating - 1) / 254) *
							  r.CommonTagMapper.maxRatingScore
							: void 0,
				};
			}
			constructor() {
				super(["ID3v2.3", "ID3v2.4"], s);
			}
			postMap(e, t) {
				switch (e.id) {
					case "UFID":
						"http://musicbrainz.org" === e.value.owner_identifier &&
							((e.id += ":" + e.value.owner_identifier),
							(e.value = n.default.decodeString(
								e.value.identifier,
								"iso-8859-1"
							)));
						break;
					case "PRIV":
						switch (e.value.owner_identifier) {
							case "AverageLevel":
							case "PeakValue":
								(e.id += ":" + e.value.owner_identifier),
									(e.value =
										4 === e.value.data.length
											? e.value.data.readUInt32LE(0)
											: null),
									null === e.value &&
										t.addWarning(
											"Failed to parse PRIV:PeakValue"
										);
								break;
							default:
								t.addWarning(
									"Unknown PRIV owner-identifier: " +
										e.value.owner_identifier
								);
						}
						break;
					case "COMM":
						e.value = e.value ? e.value.text : null;
						break;
					case "POPM":
						e.value = o.toRating(e.value);
				}
			}
		}
		t.ID3v24TagMapper = o;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(8),
			n = {
				Title: "title",
				Author: "artist",
				"WM/AlbumArtist": "albumartist",
				"WM/AlbumTitle": "album",
				"WM/Year": "date",
				"WM/OriginalReleaseTime": "originaldate",
				"WM/OriginalReleaseYear": "originalyear",
				Description: "comment",
				"WM/TrackNumber": "track",
				"WM/PartOfSet": "disk",
				"WM/Genre": "genre",
				"WM/Composer": "composer",
				"WM/Lyrics": "lyrics",
				"WM/AlbumSortOrder": "albumsort",
				"WM/TitleSortOrder": "titlesort",
				"WM/ArtistSortOrder": "artistsort",
				"WM/AlbumArtistSortOrder": "albumartistsort",
				"WM/ComposerSortOrder": "composersort",
				"WM/Writer": "lyricist",
				"WM/Conductor": "conductor",
				"WM/ModifiedBy": "remixer",
				"WM/Engineer": "engineer",
				"WM/Producer": "producer",
				"WM/DJMixer": "djmixer",
				"WM/Mixer": "mixer",
				"WM/Publisher": "label",
				"WM/ContentGroupDescription": "grouping",
				"WM/SubTitle": "subtitle",
				"WM/SetSubTitle": "discsubtitle",
				"WM/IsCompilation": "compilation",
				"WM/SharedUserRating": "rating",
				"WM/BeatsPerMinute": "bpm",
				"WM/Mood": "mood",
				"WM/Media": "media",
				"WM/CatalogNo": "catalognumber",
				"MusicBrainz/Album Status": "releasestatus",
				"MusicBrainz/Album Type": "releasetype",
				"MusicBrainz/Album Release Country": "releasecountry",
				"WM/Script": "script",
				"WM/Language": "language",
				Copyright: "copyright",
				LICENSE: "license",
				"WM/EncodedBy": "encodedby",
				"WM/EncodingSettings": "encodersettings",
				"WM/Barcode": "barcode",
				"WM/ISRC": "isrc",
				"MusicBrainz/Track Id": "musicbrainz_recordingid",
				"MusicBrainz/Release Track Id": "musicbrainz_trackid",
				"MusicBrainz/Album Id": "musicbrainz_albumid",
				"MusicBrainz/Artist Id": "musicbrainz_artistid",
				"MusicBrainz/Album Artist Id": "musicbrainz_albumartistid",
				"MusicBrainz/Release Group Id": "musicbrainz_releasegroupid",
				"MusicBrainz/Work Id": "musicbrainz_workid",
				"MusicBrainz/TRM Id": "musicbrainz_trmid",
				"MusicBrainz/Disc Id": "musicbrainz_discid",
				"Acoustid/Id": "acoustid_id",
				"Acoustid/Fingerprint": "acoustid_fingerprint",
				"MusicIP/PUID": "musicip_puid",
				"WM/ARTISTS": "artists",
				"WM/InitialKey": "key",
				ASIN: "asin",
				"WM/Work": "work",
				"WM/AuthorURL": "website",
				"WM/Picture": "picture",
			};
		class i extends r.CommonTagMapper {
			static toRating(e) {
				return { rating: parseFloat(e + 1) / 5 };
			}
			constructor() {
				super(["asf"], n);
			}
			postMap(e) {
				switch (e.id) {
					case "WM/SharedUserRating":
						const t = e.id.split(":");
						(e.value = i.toRating(e.value)), (e.id = t[0]);
				}
			}
		}
		t.AsfTagMapper = i;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(8);
		t.id3v22TagMap = {
			TT2: "title",
			TP1: "artist",
			TP2: "albumartist",
			TAL: "album",
			TYE: "year",
			COM: "comment",
			TRK: "track",
			TPA: "disk",
			TCO: "genre",
			PIC: "picture",
			TCM: "composer",
			TOR: "originaldate",
			TOT: "work",
			TXT: "lyricist",
			TP3: "conductor",
			TPB: "label",
			TT1: "grouping",
			TT3: "subtitle",
			TLA: "language",
			TCR: "copyright",
			WCP: "license",
			TEN: "encodedby",
			TSS: "encodersettings",
			WAR: "website",
			"COM:iTunPGAP": "gapless",
		};
		class n extends r.CommonTagMapper {
			constructor() {
				super(["ID3v2.2"], t.id3v22TagMap);
			}
		}
		t.ID3v22TagMapper = n;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(24),
			n = {
				Title: "title",
				Artist: "artist",
				Artists: "artists",
				"Album Artist": "albumartist",
				Album: "album",
				Year: "date",
				Originalyear: "originalyear",
				Originaldate: "originaldate",
				Comment: "comment",
				Track: "track",
				Disc: "disk",
				DISCNUMBER: "disk",
				Genre: "genre",
				"Cover Art (Front)": "picture",
				"Cover Art (Back)": "picture",
				Composer: "composer",
				Lyrics: "lyrics",
				ALBUMSORT: "albumsort",
				TITLESORT: "titlesort",
				WORK: "work",
				ARTISTSORT: "artistsort",
				ALBUMARTISTSORT: "albumartistsort",
				COMPOSERSORT: "composersort",
				Lyricist: "lyricist",
				Writer: "writer",
				Conductor: "conductor",
				MixArtist: "remixer",
				Arranger: "arranger",
				Engineer: "engineer",
				Producer: "producer",
				DJMixer: "djmixer",
				Mixer: "mixer",
				Label: "label",
				Grouping: "grouping",
				Subtitle: "subtitle",
				DiscSubtitle: "discsubtitle",
				Compilation: "compilation",
				BPM: "bpm",
				Mood: "mood",
				Media: "media",
				CatalogNumber: "catalognumber",
				MUSICBRAINZ_ALBUMSTATUS: "releasestatus",
				MUSICBRAINZ_ALBUMTYPE: "releasetype",
				RELEASECOUNTRY: "releasecountry",
				Script: "script",
				Language: "language",
				Copyright: "copyright",
				LICENSE: "license",
				EncodedBy: "encodedby",
				EncoderSettings: "encodersettings",
				Barcode: "barcode",
				ISRC: "isrc",
				ASIN: "asin",
				musicbrainz_trackid: "musicbrainz_recordingid",
				musicbrainz_releasetrackid: "musicbrainz_trackid",
				MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
				MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
				MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
				MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
				MUSICBRAINZ_WORKID: "musicbrainz_workid",
				MUSICBRAINZ_TRMID: "musicbrainz_trmid",
				MUSICBRAINZ_DISCID: "musicbrainz_discid",
				Acoustid_Id: "acoustid_id",
				ACOUSTID_FINGERPRINT: "acoustid_fingerprint",
				MUSICIP_PUID: "musicip_puid",
				Weblink: "website",
				REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
				REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak",
				MP3GAIN_MINMAX: "replaygain_track_minmax",
				MP3GAIN_UNDO: "replaygain_undo",
			};
		class i extends r.CaseInsensitiveTagMap {
			constructor() {
				super(["APEv2"], n);
			}
		}
		t.APEv2TagMapper = i;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(8),
			n = {
				"©nam": "title",
				"©ART": "artist",
				aART: "albumartist",
				"----:com.apple.iTunes:Band": "albumartist",
				"©alb": "album",
				"©day": "date",
				"©cmt": "comment",
				trkn: "track",
				disk: "disk",
				"©gen": "genre",
				covr: "picture",
				"©wrt": "composer",
				"©lyr": "lyrics",
				soal: "albumsort",
				sonm: "titlesort",
				soar: "artistsort",
				soaa: "albumartistsort",
				soco: "composersort",
				"----:com.apple.iTunes:LYRICIST": "lyricist",
				"----:com.apple.iTunes:CONDUCTOR": "conductor",
				"----:com.apple.iTunes:REMIXER": "remixer",
				"----:com.apple.iTunes:ENGINEER": "engineer",
				"----:com.apple.iTunes:PRODUCER": "producer",
				"----:com.apple.iTunes:DJMIXER": "djmixer",
				"----:com.apple.iTunes:MIXER": "mixer",
				"----:com.apple.iTunes:LABEL": "label",
				"©grp": "grouping",
				"----:com.apple.iTunes:SUBTITLE": "subtitle",
				"----:com.apple.iTunes:DISCSUBTITLE": "discsubtitle",
				cpil: "compilation",
				tmpo: "bpm",
				"----:com.apple.iTunes:MOOD": "mood",
				"----:com.apple.iTunes:MEDIA": "media",
				"----:com.apple.iTunes:CATALOGNUMBER": "catalognumber",
				tvsh: "tvShow",
				tvsn: "tvSeason",
				tves: "tvEpisode",
				sosn: "tvShowSort",
				tven: "tvEpisodeId",
				tvnn: "tvNetwork",
				pcst: "podcast",
				purl: "podcasturl",
				"----:com.apple.iTunes:MusicBrainz Album Status":
					"releasestatus",
				"----:com.apple.iTunes:MusicBrainz Album Type": "releasetype",
				"----:com.apple.iTunes:MusicBrainz Album Release Country":
					"releasecountry",
				"----:com.apple.iTunes:SCRIPT": "script",
				"----:com.apple.iTunes:LANGUAGE": "language",
				cprt: "copyright",
				"----:com.apple.iTunes:LICENSE": "license",
				"©too": "encodedby",
				pgap: "gapless",
				"----:com.apple.iTunes:BARCODE": "barcode",
				"----:com.apple.iTunes:ISRC": "isrc",
				"----:com.apple.iTunes:ASIN": "asin",
				"----:com.apple.iTunes:NOTES": "comment",
				"----:com.apple.iTunes:MusicBrainz Track Id":
					"musicbrainz_recordingid",
				"----:com.apple.iTunes:MusicBrainz Release Track Id":
					"musicbrainz_trackid",
				"----:com.apple.iTunes:MusicBrainz Album Id":
					"musicbrainz_albumid",
				"----:com.apple.iTunes:MusicBrainz Artist Id":
					"musicbrainz_artistid",
				"----:com.apple.iTunes:MusicBrainz Album Artist Id":
					"musicbrainz_albumartistid",
				"----:com.apple.iTunes:MusicBrainz Release Group Id":
					"musicbrainz_releasegroupid",
				"----:com.apple.iTunes:MusicBrainz Work Id":
					"musicbrainz_workid",
				"----:com.apple.iTunes:MusicBrainz TRM Id": "musicbrainz_trmid",
				"----:com.apple.iTunes:MusicBrainz Disc Id":
					"musicbrainz_discid",
				"----:com.apple.iTunes:Acoustid Id": "acoustid_id",
				"----:com.apple.iTunes:Acoustid Fingerprint":
					"acoustid_fingerprint",
				"----:com.apple.iTunes:MusicIP PUID": "musicip_puid",
				"----:com.apple.iTunes:fingerprint": "musicip_fingerprint",
				"----:com.apple.iTunes:replaygain_track_gain":
					"replaygain_track_gain",
				"----:com.apple.iTunes:replaygain_track_peak":
					"replaygain_track_peak",
				"----:com.apple.iTunes:replaygain_album_gain":
					"replaygain_album_gain",
				"----:com.apple.iTunes:replaygain_album_peak":
					"replaygain_album_peak",
				"----:com.apple.iTunes:replaygain_track_minmax":
					"replaygain_track_minmax",
				"----:com.apple.iTunes:replaygain_album_minmax":
					"replaygain_album_minmax",
				"----:com.apple.iTunes:replaygain_undo": "replaygain_undo",
				gnre: "genre",
				"----:com.apple.iTunes:ALBUMARTISTSORT": "albumartistsort",
				"----:com.apple.iTunes:ARTISTS": "artists",
				"----:com.apple.iTunes:ORIGINALDATE": "originaldate",
				"----:com.apple.iTunes:ORIGINALYEAR": "originalyear",
				desc: "description",
				ldes: "description",
			};
		t.tagType = "iTunes";
		class i extends r.CommonTagMapper {
			constructor() {
				super([t.tagType], n);
			}
		}
		t.MP4TagMapper = i;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(8),
			n = {
				TITLE: "title",
				ARTIST: "artist",
				ARTISTS: "artists",
				ALBUMARTIST: "albumartist",
				ALBUM: "album",
				DATE: "date",
				ORIGINALDATE: "originaldate",
				ORIGINALYEAR: "originalyear",
				COMMENT: "comment",
				TRACKNUMBER: "track",
				DISCNUMBER: "disk",
				GENRE: "genre",
				METADATA_BLOCK_PICTURE: "picture",
				COMPOSER: "composer",
				LYRICS: "lyrics",
				ALBUMSORT: "albumsort",
				TITLESORT: "titlesort",
				WORK: "work",
				ARTISTSORT: "artistsort",
				ALBUMARTISTSORT: "albumartistsort",
				COMPOSERSORT: "composersort",
				LYRICIST: "lyricist",
				WRITER: "writer",
				CONDUCTOR: "conductor",
				REMIXER: "remixer",
				ARRANGER: "arranger",
				ENGINEER: "engineer",
				PRODUCER: "producer",
				DJMIXER: "djmixer",
				MIXER: "mixer",
				LABEL: "label",
				GROUPING: "grouping",
				SUBTITLE: "subtitle",
				DISCSUBTITLE: "discsubtitle",
				TRACKTOTAL: "totaltracks",
				DISCTOTAL: "totaldiscs",
				COMPILATION: "compilation",
				RATING: "rating",
				BPM: "bpm",
				MOOD: "mood",
				MEDIA: "media",
				CATALOGNUMBER: "catalognumber",
				RELEASESTATUS: "releasestatus",
				RELEASETYPE: "releasetype",
				RELEASECOUNTRY: "releasecountry",
				SCRIPT: "script",
				LANGUAGE: "language",
				COPYRIGHT: "copyright",
				LICENSE: "license",
				ENCODEDBY: "encodedby",
				ENCODERSETTINGS: "encodersettings",
				BARCODE: "barcode",
				ISRC: "isrc",
				ASIN: "asin",
				MUSICBRAINZ_TRACKID: "musicbrainz_recordingid",
				MUSICBRAINZ_RELEASETRACKID: "musicbrainz_trackid",
				MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
				MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
				MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
				MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
				MUSICBRAINZ_WORKID: "musicbrainz_workid",
				MUSICBRAINZ_TRMID: "musicbrainz_trmid",
				MUSICBRAINZ_DISCID: "musicbrainz_discid",
				ACOUSTID_ID: "acoustid_id",
				ACOUSTID_ID_FINGERPRINT: "acoustid_fingerprint",
				MUSICIP_PUID: "musicip_puid",
				WEBSITE: "website",
				NOTES: "notes",
				TOTALTRACKS: "totaltracks",
				TOTALDISCS: "totaldiscs",
				DISCOGS_ARTIST_ID: "discogs_artist_id",
				DISCOGS_ARTISTS: "artists",
				DISCOGS_ARTIST_NAME: "artists",
				DISCOGS_ALBUM_ARTISTS: "albumartist",
				DISCOGS_CATALOG: "catalognumber",
				DISCOGS_COUNTRY: "releasecountry",
				DISCOGS_DATE: "originaldate",
				DISCOGS_LABEL: "label",
				DISCOGS_LABEL_ID: "discogs_label_id",
				DISCOGS_MASTER_RELEASE_ID: "discogs_master_release_id",
				DISCOGS_RATING: "discogs_rating",
				DISCOGS_RELEASED: "date",
				DISCOGS_RELEASE_ID: "discogs_release_id",
				DISCOGS_VOTES: "discogs_votes",
				CATALOGID: "catalognumber",
				STYLE: "genre",
				REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
				REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak",
				REPLAYGAIN_ALBUM_GAIN: "replaygain_album_gain",
				REPLAYGAIN_ALBUM_PEAK: "replaygain_album_peak",
				REPLAYGAIN_MINMAX: "replaygain_track_minmax",
				REPLAYGAIN_ALBUM_MINMAX: "replaygain_album_minmax",
				REPLAYGAIN_UNDO: "replaygain_undo",
			};
		class i extends r.CommonTagMapper {
			static toRating(e, t) {
				return {
					source: e ? e.toLowerCase() : e,
					rating: parseFloat(t) * r.CommonTagMapper.maxRatingScore,
				};
			}
			constructor() {
				super(["vorbis"], n);
			}
			postMap(e) {
				if (0 === e.id.indexOf("RATING:")) {
					const t = e.id.split(":");
					(e.value = i.toRating(t[1], e.value)), (e.id = t[0]);
				}
			}
		}
		t.VorbisTagMapper = i;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(8);
		t.riffInfoTagMap = {
			IART: "artist",
			ICRD: "date",
			INAM: "title",
			TITL: "title",
			IPRD: "album",
			ITRK: "track",
			COMM: "comment",
			ICMT: "comment",
			ICNT: "releasecountry",
			GNRE: "genre",
			IWRI: "writer",
			RATE: "rating",
			YEAR: "year",
			ISFT: "encodedby",
			CODE: "encodedby",
			TURL: "website",
			IGNR: "genre",
			IENG: "engineer",
			ITCH: "technician",
			IMED: "media",
			IRPD: "album",
		};
		class n extends r.CommonTagMapper {
			constructor() {
				super(["exif"], t.riffInfoTagMap);
			}
		}
		t.RiffInfoTagMapper = n;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(24),
			n = {
				"album:ARITST": "albumartist",
				"album:ARITSTSORT": "albumartistsort",
				"album:TITLE": "album",
				"album:DATE_RECORDED": "originaldate",
				"track:ARTIST": "artist",
				"track:ARTISTSORT": "artistsort",
				"track:TITLE": "title",
				"track:PART_NUMBER": "track",
				"track:MUSICBRAINZ_TRACKID": "musicbrainz_recordingid",
				"track:MUSICBRAINZ_ALBUMID": "musicbrainz_albumid",
				"track:MUSICBRAINZ_ARTISTID": "musicbrainz_artistid",
				"track:PUBLISHER": "label",
			};
		class i extends r.CaseInsensitiveTagMap {
			constructor() {
				super(["matroska"], n);
			}
		}
		t.MatroskaTagMapper = i;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(1),
			i = a(10),
			s = a(15),
			o = a(6),
			l = a(7),
			c = a(83),
			u = a(84),
			d = a(25),
			f = n("music-metadata:parser:aiff");
		class h extends l.BasicParser {
			async parse() {
				if (
					"FORM" !==
					(await this.tokenizer.readToken(u.Header)).chunkID
				)
					throw new Error("Invalid Chunk-ID, expected 'FORM'");
				const e = await this.tokenizer.readToken(o.FourCcToken);
				switch (e) {
					case "AIFF":
						this.metadata.setFormat("container", e),
							(this.isCompressed = !1);
						break;
					case "AIFC":
						this.metadata.setFormat("container", "AIFF-C"),
							(this.isCompressed = !0);
						break;
					default:
						throw Error("Unsupported AIFF type: " + e);
				}
				this.metadata.setFormat("lossless", !this.isCompressed);
				try {
					for (;;) {
						const e = await this.tokenizer.readToken(u.Header);
						f("Chunk id=" + e.chunkID);
						const t = 2 * Math.round(e.chunkSize / 2),
							a = await this.readData(e);
						await this.tokenizer.ignore(t - a);
					}
				} catch (e) {
					if (!(e instanceof i.EndOfStreamError)) throw e;
					f("End-of-stream");
				}
			}
			async readData(e) {
				switch (e.chunkID) {
					case "COMM":
						const t = await this.tokenizer.readToken(
							new c.Common(e, this.isCompressed)
						);
						return (
							this.metadata.setFormat(
								"bitsPerSample",
								t.sampleSize
							),
							this.metadata.setFormat("sampleRate", t.sampleRate),
							this.metadata.setFormat(
								"numberOfChannels",
								t.numChannels
							),
							this.metadata.setFormat(
								"numberOfSamples",
								t.numSampleFrames
							),
							this.metadata.setFormat(
								"duration",
								t.numSampleFrames / t.sampleRate
							),
							this.metadata.setFormat("codec", t.compressionName),
							e.chunkSize
						);
					case "ID3 ":
						const a = await this.tokenizer.readToken(
								new r.BufferType(e.chunkSize)
							),
							n = new d.ID3Stream(a),
							o = i.fromStream(n);
						return (
							await new s.ID3v2Parser().parse(
								this.metadata,
								o,
								this.options
							),
							e.chunkSize
						);
					case "SSND":
						return (
							this.metadata.format.duration &&
								this.metadata.setFormat(
									"bitrate",
									(8 * e.chunkSize) /
										this.metadata.format.duration
								),
							0
						);
					default:
						return 0;
				}
			}
		}
		t.AIFFParser = h;
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(1),
				n = a(0),
				i = a(4),
				s = a(16),
				o = r("music-metadata:id3v2:frame-parser"),
				l = "iso-8859-1";
			class c {
				static readData(t, a, r, u) {
					if (0 === t.length) return;
					const { encoding: d, bom: f } = s.TextEncodingToken.get(
							t,
							0
						),
						h = t.length;
					let p = 0,
						m = [];
					const g = c.getNullTerminatorLength(d);
					let b;
					const v = {};
					switch (
						(o(`Parsing tag type=${a}, encoding=${d}, bom=${f}`),
						"TXXX" !== a && "T" === a[0] ? "T*" : a)
					) {
						case "T*":
						case "IPLS":
							const f = i.default
								.decodeString(t.slice(1), d)
								.replace(/\x00+$/, "");
							switch (a) {
								case "TMCL":
								case "TIPL":
								case "IPLS":
									(m = c.splitValue(4, f)),
										(m = c.functionList(m));
									break;
								case "TRK":
								case "TRCK":
								case "TPOS":
									m = f;
									break;
								case "TCOM":
								case "TEXT":
								case "TOLY":
								case "TOPE":
								case "TPE1":
								case "TSRC":
									m = c.splitValue(r, f);
									break;
								default:
									m = r >= 4 ? c.splitValue(r, f) : [f];
							}
							break;
						case "TXXX":
							(m = c.readIdentifierAndData(t, p + 1, h, d)),
								(m = {
									description: m.id,
									text: c.splitValue(
										r,
										i.default
											.decodeString(m.data, d)
											.replace(/\x00+$/, "")
									),
								});
							break;
						case "PIC":
						case "APIC":
							if (u) {
								const a = {};
								switch (((p += 1), r)) {
									case 2:
										(a.format = i.default.decodeString(
											t.slice(p, p + 3),
											d
										)),
											(p += 3);
										break;
									case 3:
									case 4:
										(b = i.default.findZero(t, p, h, l)),
											(a.format = i.default.decodeString(
												t.slice(p, b),
												l
											)),
											(p = b + 1);
										break;
									default:
										throw new Error(
											"Warning: unexpected major versionIndex: " +
												r
										);
								}
								(a.format = c.fixPictureMimeType(a.format)),
									(a.type = s.AttachedPictureType[t[p]]),
									(p += 1),
									(b = i.default.findZero(t, p, h, d)),
									(a.description = i.default.decodeString(
										t.slice(p, b),
										d
									)),
									(p = b + g),
									(a.data = e.from(t.slice(p, h))),
									(m = a);
							}
							break;
						case "CNT":
						case "PCNT":
							m = n.UINT32_BE.get(t, 0);
							break;
						case "SYLT":
							for (p += 7, m = []; p < h; ) {
								const e = t.slice(
									p,
									(p = i.default.findZero(t, p, h, d))
								);
								(p += 5), m.push(i.default.decodeString(e, d));
							}
							break;
						case "ULT":
						case "USLT":
						case "COM":
						case "COMM":
							(p += 1),
								(v.language = i.default.decodeString(
									t.slice(p, p + 3),
									l
								)),
								(p += 3),
								(b = i.default.findZero(t, p, h, d)),
								(v.description = i.default.decodeString(
									t.slice(p, b),
									d
								)),
								(p = b + g),
								(v.text = i.default
									.decodeString(t.slice(p, h), d)
									.replace(/\x00+$/, "")),
								(m = [v]);
							break;
						case "UFID":
							(m = c.readIdentifierAndData(t, p, h, l)),
								(m = {
									owner_identifier: m.id,
									identifier: m.data,
								});
							break;
						case "PRIV":
							(m = c.readIdentifierAndData(t, p, h, l)),
								(m = { owner_identifier: m.id, data: m.data });
							break;
						case "POPM":
							b = i.default.findZero(t, p, h, l);
							const y = i.default.decodeString(t.slice(p, b), l);
							p = b + 1;
							const w = h - p;
							m = {
								email: y,
								rating: t.readUInt8(p),
								counter:
									w >= 5 ? t.readUInt32BE(p + 1) : void 0,
							};
							break;
						case "GEOB": {
							b = i.default.findZero(t, p + 1, h, d);
							const e = i.default.decodeString(
								t.slice(p + 1, b),
								l
							);
							(p = b + 1),
								(b = i.default.findZero(t, p, h - p, d));
							const a = i.default.decodeString(
								t.slice(p + 1, b),
								l
							);
							(p = b + 1),
								(b = i.default.findZero(t, p, h - p, d));
							m = {
								type: e,
								filename: a,
								description: i.default.decodeString(
									t.slice(p + 1, b),
									l
								),
								data: t.slice(p + 1, h),
							};
							break;
						}
						case "WCOM":
						case "WCOP":
						case "WOAF":
						case "WOAR":
						case "WOAS":
						case "WORS":
						case "WPAY":
						case "WPUB":
							m = i.default.decodeString(t.slice(p, b), d);
							break;
						case "WXXX": {
							b = i.default.findZero(t, p + 1, h, d);
							const e = i.default.decodeString(
								t.slice(p + 1, b),
								l
							);
							(p = b + 1),
								(m = {
									description: e,
									url: i.default.decodeString(
										t.slice(p, h - p),
										d
									),
								});
							break;
						}
						case "MCDI":
							m = t.slice(0, h);
							break;
						default:
							o("Warning: unsupported id3v2-tag-type: " + a);
					}
					return m;
				}
				static fixPictureMimeType(e) {
					switch ((e = e.toLocaleLowerCase())) {
						case "jpg":
							return "image/jpeg";
						case "png":
							return "image/png";
					}
					return e;
				}
				static functionList(e) {
					const t = {};
					for (let a = 0; a + 1 < e.length; a += 2) {
						const r = e[a + 1].split(",");
						t[e[a]] = t.hasOwnProperty(e[a])
							? t[e[a]].concat(r)
							: r;
					}
					return t;
				}
				static splitValue(e, t) {
					const a = t.split(e >= 4 ? /\x00/g : /\//g);
					return c.trimArray(a);
				}
				static trimArray(e) {
					for (let t = 0; t < e.length; ++t)
						e[t] = e[t].replace(/\x00+$/, "").trim();
					return e;
				}
				static readIdentifierAndData(e, t, a, r) {
					const n = i.default.findZero(e, t, a, r),
						s = i.default.decodeString(e.slice(t, n), r);
					return (
						(t = n + c.getNullTerminatorLength(r)),
						{ id: s, data: e.slice(t, a) }
					);
				}
				static getNullTerminatorLength(e) {
					return "utf16" === e ? 2 : 1;
				}
			}
			t.default = c;
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(5),
			i = a(6);
		t.Common = class {
			constructor(e, t) {
				this.isAifc = t;
				const a = t ? 22 : 18;
				n.ok(
					e.chunkSize >= a,
					"COMMON CHUNK size should always be at least " + a
				),
					(this.len = e.chunkSize);
			}
			get(e, t) {
				const a = e.readUInt16BE(t + 8) - 16398,
					n = e.readUInt16BE(t + 8 + 2),
					s = {
						numChannels: e.readUInt16BE(t),
						numSampleFrames: e.readUInt32BE(t + 2),
						sampleSize: e.readUInt16BE(t + 6),
						sampleRate: a < 0 ? n >> Math.abs(a) : n << a,
					};
				if (this.isAifc) {
					if (
						((s.compressionType = i.FourCcToken.get(e, t + 18)),
						this.len > 22)
					) {
						const a = e.readInt8(t + 22);
						if (23 + a + ((a + 1) % 2) !== this.len)
							throw new Error("Illegal pstring length");
						s.compressionName = new r.StringType(a, "binary").get(
							e,
							t + 23
						);
					}
				} else s.compressionName = "PCM";
				return s;
			}
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(6);
		t.Header = {
			len: 8,
			get: (e, t) => ({
				chunkID: r.FourCcToken.get(e, t),
				chunkSize: e.readUInt32BE(t + 4),
			}),
		};
	},
	function (e, t) {},
	function (e, t, a) {
		"use strict";
		var r = a(28).Buffer,
			n = a(87);
		(e.exports = (function () {
			function e() {
				!(function (e, t) {
					if (!(e instanceof t))
						throw new TypeError(
							"Cannot call a class as a function"
						);
				})(this, e),
					(this.head = null),
					(this.tail = null),
					(this.length = 0);
			}
			return (
				(e.prototype.push = function (e) {
					var t = { data: e, next: null };
					this.length > 0 ? (this.tail.next = t) : (this.head = t),
						(this.tail = t),
						++this.length;
				}),
				(e.prototype.unshift = function (e) {
					var t = { data: e, next: this.head };
					0 === this.length && (this.tail = t),
						(this.head = t),
						++this.length;
				}),
				(e.prototype.shift = function () {
					if (0 !== this.length) {
						var e = this.head.data;
						return (
							1 === this.length
								? (this.head = this.tail = null)
								: (this.head = this.head.next),
							--this.length,
							e
						);
					}
				}),
				(e.prototype.clear = function () {
					(this.head = this.tail = null), (this.length = 0);
				}),
				(e.prototype.join = function (e) {
					if (0 === this.length) return "";
					for (var t = this.head, a = "" + t.data; (t = t.next); )
						a += e + t.data;
					return a;
				}),
				(e.prototype.concat = function (e) {
					if (0 === this.length) return r.alloc(0);
					if (1 === this.length) return this.head.data;
					for (
						var t,
							a,
							n,
							i = r.allocUnsafe(e >>> 0),
							s = this.head,
							o = 0;
						s;

					)
						(t = s.data),
							(a = i),
							(n = o),
							t.copy(a, n),
							(o += s.data.length),
							(s = s.next);
					return i;
				}),
				e
			);
		})()),
			n &&
				n.inspect &&
				n.inspect.custom &&
				(e.exports.prototype[n.inspect.custom] = function () {
					var e = n.inspect({ length: this.length });
					return this.constructor.name + " " + e;
				});
	},
	function (e, t) {},
	function (e, t, a) {
		(function (e) {
			var r =
					(void 0 !== e && e) ||
					("undefined" != typeof self && self) ||
					window,
				n = Function.prototype.apply;
			function i(e, t) {
				(this._id = e), (this._clearFn = t);
			}
			(t.setTimeout = function () {
				return new i(n.call(setTimeout, r, arguments), clearTimeout);
			}),
				(t.setInterval = function () {
					return new i(
						n.call(setInterval, r, arguments),
						clearInterval
					);
				}),
				(t.clearTimeout = t.clearInterval =
					function (e) {
						e && e.close();
					}),
				(i.prototype.unref = i.prototype.ref = function () {}),
				(i.prototype.close = function () {
					this._clearFn.call(r, this._id);
				}),
				(t.enroll = function (e, t) {
					clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
				}),
				(t.unenroll = function (e) {
					clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
				}),
				(t._unrefActive = t.active =
					function (e) {
						clearTimeout(e._idleTimeoutId);
						var t = e._idleTimeout;
						t >= 0 &&
							(e._idleTimeoutId = setTimeout(function () {
								e._onTimeout && e._onTimeout();
							}, t));
					}),
				a(89),
				(t.setImmediate =
					("undefined" != typeof self && self.setImmediate) ||
					(void 0 !== e && e.setImmediate) ||
					(this && this.setImmediate)),
				(t.clearImmediate =
					("undefined" != typeof self && self.clearImmediate) ||
					(void 0 !== e && e.clearImmediate) ||
					(this && this.clearImmediate));
		}.call(this, a(11)));
	},
	function (e, t, a) {
		(function (e, t) {
			!(function (e, a) {
				"use strict";
				if (!e.setImmediate) {
					var r,
						n,
						i,
						s,
						o,
						l = 1,
						c = {},
						u = !1,
						d = e.document,
						f = Object.getPrototypeOf && Object.getPrototypeOf(e);
					(f = f && f.setTimeout ? f : e),
						"[object process]" === {}.toString.call(e.process)
							? (r = function (e) {
									t.nextTick(function () {
										p(e);
									});
							  })
							: !(function () {
									if (e.postMessage && !e.importScripts) {
										var t = !0,
											a = e.onmessage;
										return (
											(e.onmessage = function () {
												t = !1;
											}),
											e.postMessage("", "*"),
											(e.onmessage = a),
											t
										);
									}
							  })()
							? e.MessageChannel
								? (((i = new MessageChannel()).port1.onmessage =
										function (e) {
											p(e.data);
										}),
								  (r = function (e) {
										i.port2.postMessage(e);
								  }))
								: d &&
								  "onreadystatechange" in
										d.createElement("script")
								? ((n = d.documentElement),
								  (r = function (e) {
										var t = d.createElement("script");
										(t.onreadystatechange = function () {
											p(e),
												(t.onreadystatechange = null),
												n.removeChild(t),
												(t = null);
										}),
											n.appendChild(t);
								  }))
								: (r = function (e) {
										setTimeout(p, 0, e);
								  })
							: ((s = "setImmediate$" + Math.random() + "$"),
							  (o = function (t) {
									t.source === e &&
										"string" == typeof t.data &&
										0 === t.data.indexOf(s) &&
										p(+t.data.slice(s.length));
							  }),
							  e.addEventListener
									? e.addEventListener("message", o, !1)
									: e.attachEvent("onmessage", o),
							  (r = function (t) {
									e.postMessage(s + t, "*");
							  })),
						(f.setImmediate = function (e) {
							"function" != typeof e &&
								(e = new Function("" + e));
							for (
								var t = new Array(arguments.length - 1), a = 0;
								a < t.length;
								a++
							)
								t[a] = arguments[a + 1];
							var n = { callback: e, args: t };
							return (c[l] = n), r(l), l++;
						}),
						(f.clearImmediate = h);
				}
				function h(e) {
					delete c[e];
				}
				function p(e) {
					if (u) setTimeout(p, 0, e);
					else {
						var t = c[e];
						if (t) {
							u = !0;
							try {
								!(function (e) {
									var t = e.callback,
										a = e.args;
									switch (a.length) {
										case 0:
											t();
											break;
										case 1:
											t(a[0]);
											break;
										case 2:
											t(a[0], a[1]);
											break;
										case 3:
											t(a[0], a[1], a[2]);
											break;
										default:
											t.apply(void 0, a);
									}
								})(t);
							} finally {
								h(e), (u = !1);
							}
						}
					}
				}
			})("undefined" == typeof self ? (void 0 === e ? this : e) : self);
		}.call(this, a(11), a(9)));
	},
	function (e, t, a) {
		(function (t) {
			function a(e) {
				try {
					if (!t.localStorage) return !1;
				} catch (e) {
					return !1;
				}
				var a = t.localStorage[e];
				return null != a && "true" === String(a).toLowerCase();
			}
			e.exports = function (e, t) {
				if (a("noDeprecation")) return e;
				var r = !1;
				return function () {
					if (!r) {
						if (a("throwDeprecation")) throw new Error(t);
						a("traceDeprecation")
							? console.trace(t)
							: console.warn(t),
							(r = !0);
					}
					return e.apply(this, arguments);
				};
			};
		}.call(this, a(11)));
	},
	function (e, t, a) {
		var r = a(2),
			n = r.Buffer;
		function i(e, t) {
			for (var a in e) t[a] = e[a];
		}
		function s(e, t, a) {
			return n(e, t, a);
		}
		n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
			? (e.exports = r)
			: (i(r, t), (t.Buffer = s)),
			(s.prototype = Object.create(n.prototype)),
			i(n, s),
			(s.from = function (e, t, a) {
				if ("number" == typeof e)
					throw new TypeError("Argument must not be a number");
				return n(e, t, a);
			}),
			(s.alloc = function (e, t, a) {
				if ("number" != typeof e)
					throw new TypeError("Argument must be a number");
				var r = n(e);
				return (
					void 0 !== t
						? "string" == typeof a
							? r.fill(t, a)
							: r.fill(t)
						: r.fill(0),
					r
				);
			}),
			(s.allocUnsafe = function (e) {
				if ("number" != typeof e)
					throw new TypeError("Argument must be a number");
				return n(e);
			}),
			(s.allocUnsafeSlow = function (e) {
				if ("number" != typeof e)
					throw new TypeError("Argument must be a number");
				return r.SlowBuffer(e);
			});
	},
	function (e, t, a) {
		"use strict";
		e.exports = i;
		var r = a(40),
			n = Object.create(a(17));
		function i(e) {
			if (!(this instanceof i)) return new i(e);
			r.call(this, e);
		}
		(n.inherits = a(14)),
			n.inherits(i, r),
			(i.prototype._transform = function (e, t, a) {
				a(null, e);
			});
	},
	function (e, t, a) {
		e.exports = a(29);
	},
	function (e, t, a) {
		e.exports = a(12);
	},
	function (e, t, a) {
		e.exports = a(27).Transform;
	},
	function (e, t, a) {
		e.exports = a(27).PassThrough;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(41),
			n = a(98),
			i = a(1),
			s = a(7),
			o = i("music-metadata:parser:ASF");
		class l extends s.BasicParser {
			async parse() {
				const e = await this.tokenizer.readToken(
					n.TopLevelHeaderObjectToken
				);
				if (!e.objectId.equals(r.default.HeaderObject))
					throw new Error(
						"expected asf header; but was not found; got: " +
							e.objectId.str
					);
				try {
					await this.parseObjectHeader(e.numberOfHeaderObjects);
				} catch (e) {
					o("Error while parsing ASF: %s", e);
				}
			}
			async parseObjectHeader(e) {
				let t;
				do {
					const e = await this.tokenizer.readToken(
						n.HeaderObjectToken
					);
					switch (
						(o("header GUID=%s", e.objectId.str), e.objectId.str)
					) {
						case n.FilePropertiesObject.guid.str:
							const a = await this.tokenizer.readToken(
								new n.FilePropertiesObject(e)
							);
							this.metadata.setFormat(
								"duration",
								a.playDuration / 1e7
							),
								this.metadata.setFormat(
									"bitrate",
									a.maximumBitrate
								);
							break;
						case n.StreamPropertiesObject.guid.str:
							const i = await this.tokenizer.readToken(
								new n.StreamPropertiesObject(e)
							);
							this.metadata.setFormat(
								"container",
								"ASF/" + i.streamType
							);
							break;
						case n.HeaderExtensionObject.guid.str:
							const s = await this.tokenizer.readToken(
								new n.HeaderExtensionObject()
							);
							await this.parseExtensionObject(
								s.extensionDataSize
							);
							break;
						case n.ContentDescriptionObjectState.guid.str:
							(t = await this.tokenizer.readToken(
								new n.ContentDescriptionObjectState(e)
							)),
								this.addTags(t);
							break;
						case n.ExtendedContentDescriptionObjectState.guid.str:
							(t = await this.tokenizer.readToken(
								new n.ExtendedContentDescriptionObjectState(e)
							)),
								this.addTags(t);
							break;
						case r.default.CodecListObject.str:
						case r.default.StreamBitratePropertiesObject.str:
							await this.tokenizer.ignore(
								e.objectSize - n.HeaderObjectToken.len
							);
							break;
						case r.default.PaddingObject.str:
							o(
								"Padding: %s bytes",
								e.objectSize - n.HeaderObjectToken.len
							),
								await this.tokenizer.ignore(
									e.objectSize - n.HeaderObjectToken.len
								);
							break;
						default:
							this.metadata.addWarning(
								"Ignore ASF-Object-GUID: " + e.objectId.str
							),
								o("Ignore ASF-Object-GUID: %s", e.objectId.str),
								await this.tokenizer.readToken(
									new n.IgnoreObjectState(e)
								);
					}
				} while (--e);
			}
			addTags(e) {
				e.forEach((e) => {
					this.metadata.addTag("asf", e.id, e.value);
				});
			}
			async parseExtensionObject(e) {
				do {
					const t = await this.tokenizer.readToken(
						n.HeaderObjectToken
					);
					switch (t.objectId.str) {
						case n.ExtendedStreamPropertiesObjectState.guid.str:
							await this.tokenizer.readToken(
								new n.ExtendedStreamPropertiesObjectState(t)
							);
							break;
						case n.MetadataObjectState.guid.str:
							const e = await this.tokenizer.readToken(
								new n.MetadataObjectState(t)
							);
							this.addTags(e);
							break;
						case n.MetadataLibraryObjectState.guid.str:
							const a = await this.tokenizer.readToken(
								new n.MetadataLibraryObjectState(t)
							);
							this.addTags(a);
							break;
						case r.default.PaddingObject.str:
							await this.tokenizer.ignore(
								t.objectSize - n.HeaderObjectToken.len
							);
							break;
						case r.default.CompatibilityObject.str:
							this.tokenizer.ignore(
								t.objectSize - n.HeaderObjectToken.len
							);
							break;
						case r.default.ASF_Index_Placeholder_Object.str:
							await this.tokenizer.ignore(
								t.objectSize - n.HeaderObjectToken.len
							);
							break;
						default:
							this.metadata.addWarning(
								"Ignore ASF-Object-GUID: " + t.objectId.str
							),
								await this.tokenizer.readToken(
									new n.IgnoreObjectState(t)
								);
					}
					e -= t.objectSize;
				} while (e > 0);
			}
		}
		t.AsfParser = l;
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(4),
				n = a(0),
				i = a(41),
				s = a(99),
				o = a(16);
			!(function (e) {
				(e[(e.UnicodeString = 0)] = "UnicodeString"),
					(e[(e.ByteArray = 1)] = "ByteArray"),
					(e[(e.Bool = 2)] = "Bool"),
					(e[(e.DWord = 3)] = "DWord"),
					(e[(e.QWord = 4)] = "QWord"),
					(e[(e.Word = 5)] = "Word");
			})(t.DataType || (t.DataType = {})),
				(t.TopLevelHeaderObjectToken = {
					len: 30,
					get: (e, t) => ({
						objectId: i.default.fromBin(
							new n.BufferType(16).get(e, t)
						),
						objectSize: n.UINT64_LE.get(e, t + 16),
						numberOfHeaderObjects: n.UINT32_LE.get(e, t + 24),
					}),
				}),
				(t.HeaderObjectToken = {
					len: 24,
					get: (e, t) => ({
						objectId: i.default.fromBin(
							new n.BufferType(16).get(e, t)
						),
						objectSize: n.UINT64_LE.get(e, t + 16),
					}),
				});
			class l {
				constructor(e) {
					this.len = e.objectSize - t.HeaderObjectToken.len;
				}
				postProcessTag(e, t, a, r) {
					if ("WM/Picture" === t)
						e.push({ id: t, value: b.fromBuffer(r) });
					else {
						const n = s.AsfUtil.getParserForAttr(a);
						if (!n)
							throw new Error(
								"unexpected value headerType: " + a
							);
						e.push({ id: t, value: n(r) });
					}
				}
			}
			t.State = l;
			t.IgnoreObjectState = class extends l {
				constructor(e) {
					super(e);
				}
				get(e, t) {
					return null;
				}
			};
			class c extends l {
				constructor(e) {
					super(e);
				}
				get(e, t) {
					return {
						fileId: i.default.fromBin(e, t),
						fileSize: n.UINT64_LE.get(e, t + 16),
						creationDate: n.UINT64_LE.get(e, t + 24),
						dataPacketsCount: n.UINT64_LE.get(e, t + 32),
						playDuration: n.UINT64_LE.get(e, t + 40),
						sendDuration: n.UINT64_LE.get(e, t + 48),
						preroll: n.UINT64_LE.get(e, t + 56),
						flags: {
							broadcast: r.default.strtokBITSET.get(
								e,
								t + 64,
								24
							),
							seekable: r.default.strtokBITSET.get(e, t + 64, 25),
						},
						minimumDataPacketSize: n.UINT32_LE.get(e, t + 68),
						maximumDataPacketSize: n.UINT32_LE.get(e, t + 72),
						maximumBitrate: n.UINT32_LE.get(e, t + 76),
					};
				}
			}
			(t.FilePropertiesObject = c),
				(c.guid = i.default.FilePropertiesObject);
			class u extends l {
				constructor(e) {
					super(e);
				}
				get(e, t) {
					return {
						streamType: i.default.decodeMediaType(
							i.default.fromBin(e, t)
						),
						errorCorrectionType: i.default.fromBin(e, t + 8),
					};
				}
			}
			(t.StreamPropertiesObject = u),
				(u.guid = i.default.StreamPropertiesObject);
			class d {
				constructor() {
					this.len = 22;
				}
				get(e, t) {
					return {
						reserved1: i.default.fromBin(e, t),
						reserved2: e.readUInt16LE(t + 16),
						extensionDataSize: e.readUInt32LE(t + 18),
					};
				}
			}
			(t.HeaderExtensionObject = d),
				(d.guid = i.default.HeaderExtensionObject);
			class f extends l {
				constructor(e) {
					super(e);
				}
				get(e, t) {
					const a = [];
					let r = t + 10;
					for (let n = 0; n < f.contentDescTags.length; ++n) {
						const i = e.readUInt16LE(t + 2 * n);
						if (i > 0) {
							const t = f.contentDescTags[n],
								o = r + i;
							a.push({
								id: t,
								value: s.AsfUtil.parseUnicodeAttr(
									e.slice(r, o)
								),
							}),
								(r = o);
						}
					}
					return a;
				}
			}
			(t.ContentDescriptionObjectState = f),
				(f.guid = i.default.ContentDescriptionObject),
				(f.contentDescTags = [
					"Title",
					"Author",
					"Copyright",
					"Description",
					"Rating",
				]);
			class h extends l {
				constructor(e) {
					super(e);
				}
				get(e, t) {
					const a = [],
						r = e.readUInt16LE(t);
					let n = t + 2;
					for (let t = 0; t < r; t += 1) {
						const t = e.readUInt16LE(n);
						n += 2;
						const r = s.AsfUtil.parseUnicodeAttr(e.slice(n, n + t));
						n += t;
						const i = e.readUInt16LE(n);
						n += 2;
						const o = e.readUInt16LE(n);
						n += 2;
						const l = e.slice(n, n + o);
						(n += o), this.postProcessTag(a, r, i, l);
					}
					return a;
				}
			}
			(t.ExtendedContentDescriptionObjectState = h),
				(h.guid = i.default.ExtendedContentDescriptionObject);
			class p extends l {
				constructor(e) {
					super(e);
				}
				get(e, t) {
					return {
						startTime: n.UINT64_LE.get(e, t),
						endTime: n.UINT64_LE.get(e, t + 8),
						dataBitrate: e.readInt32LE(t + 12),
						bufferSize: e.readInt32LE(t + 16),
						initialBufferFullness: e.readInt32LE(t + 20),
						alternateDataBitrate: e.readInt32LE(t + 24),
						alternateBufferSize: e.readInt32LE(t + 28),
						alternateInitialBufferFullness: e.readInt32LE(t + 32),
						maximumObjectSize: e.readInt32LE(t + 36),
						flags: {
							reliableFlag: r.default.strtokBITSET.get(
								e,
								t + 40,
								0
							),
							seekableFlag: r.default.strtokBITSET.get(
								e,
								t + 40,
								1
							),
							resendLiveCleanpointsFlag:
								r.default.strtokBITSET.get(e, t + 40, 2),
						},
						streamNumber: e.readInt16LE(t + 42),
						streamLanguageId: e.readInt16LE(t + 44),
						averageTimePerFrame: e.readInt32LE(t + 52),
						streamNameCount: e.readInt32LE(t + 54),
						payloadExtensionSystems: e.readInt32LE(t + 56),
						streamNames: [],
						streamPropertiesObject: null,
					};
				}
			}
			(t.ExtendedStreamPropertiesObjectState = p),
				(p.guid = i.default.ExtendedStreamPropertiesObject);
			class m extends l {
				constructor(e) {
					super(e);
				}
				get(e, t) {
					const a = [],
						r = e.readUInt16LE(t);
					let n = t + 2;
					for (let t = 0; t < r; t += 1) {
						n += 4;
						const t = e.readUInt16LE(n);
						n += 2;
						const r = e.readUInt16LE(n);
						n += 2;
						const i = e.readUInt32LE(n);
						n += 4;
						const o = s.AsfUtil.parseUnicodeAttr(e.slice(n, n + t));
						n += t;
						const l = e.slice(n, n + i);
						n += i;
						if (!s.AsfUtil.getParserForAttr(r))
							throw new Error(
								"unexpected value headerType: " + r
							);
						this.postProcessTag(a, o, r, l);
					}
					return a;
				}
			}
			(t.MetadataObjectState = m), (m.guid = i.default.MetadataObject);
			class g extends m {
				constructor(e) {
					super(e);
				}
			}
			(t.MetadataLibraryObjectState = g),
				(g.guid = i.default.MetadataLibraryObject);
			class b {
				constructor(e) {
					this.len = e;
				}
				static fromBase64(t) {
					return this.fromBuffer(e.from(t, "base64"));
				}
				static fromBuffer(e) {
					return new b(e.length).get(e, 0);
				}
				get(e, t) {
					const a = e.readUInt8(t++),
						r = e.readInt32LE(t);
					let n = 5;
					for (; 0 !== e.readUInt16BE(n); ) n += 2;
					const i = e.slice(5, n).toString("utf16le");
					for (; 0 !== e.readUInt16BE(n); ) n += 2;
					const s = e.slice(5, n).toString("utf16le");
					return {
						type: o.AttachedPictureType[a],
						format: i,
						description: s,
						size: r,
						data: e.slice(n + 4),
					};
				}
			}
			t.WmPictureToken = b;
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(4),
				n = a(0);
			class i {
				static getParserForAttr(e) {
					return i.attributeParsers[e];
				}
				static parseUnicodeAttr(e) {
					return r.default.stripNulls(
						r.default.decodeString(e, "utf16le")
					);
				}
				static parseByteArrayAttr(t) {
					const a = e.alloc(t.length);
					return t.copy(a), a;
				}
				static parseBoolAttr(e, t = 0) {
					return 1 === i.parseWordAttr(e, t);
				}
				static parseDWordAttr(e, t = 0) {
					return e.readUInt32LE(t);
				}
				static parseQWordAttr(e, t = 0) {
					return n.UINT64_LE.get(e, t);
				}
				static parseWordAttr(e, t = 0) {
					return e.readUInt16LE(t);
				}
			}
			(t.AsfUtil = i),
				(i.attributeParsers = [
					i.parseUnicodeAttr,
					i.parseByteArrayAttr,
					i.parseBoolAttr,
					i.parseDWordAttr,
					i.parseQWordAttr,
					i.parseWordAttr,
					i.parseByteArrayAttr,
				]);
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(4),
			n = a(0),
			i = a(42),
			s = a(21),
			o = a(6),
			l = a(1),
			c = a(22),
			u = a(43),
			d = l("music-metadata:parser:FLAC");
		var f;
		!(function (e) {
			(e[(e.STREAMINFO = 0)] = "STREAMINFO"),
				(e[(e.PADDING = 1)] = "PADDING"),
				(e[(e.APPLICATION = 2)] = "APPLICATION"),
				(e[(e.SEEKTABLE = 3)] = "SEEKTABLE"),
				(e[(e.VORBIS_COMMENT = 4)] = "VORBIS_COMMENT"),
				(e[(e.CUESHEET = 5)] = "CUESHEET"),
				(e[(e.PICTURE = 6)] = "PICTURE");
		})(f || (f = {}));
		class h extends s.AbstractID3Parser {
			constructor() {
				super(...arguments), (this.padding = 0);
			}
			init(e, t, a) {
				return (
					super.init(e, t, a),
					(this.vorbisParser = new c.VorbisParser(e, a)),
					this
				);
			}
			async _parse() {
				if (
					"fLaC" !==
					(await this.tokenizer.readToken(o.FourCcToken)).toString()
				)
					throw new Error("Invalid FLAC preamble");
				let e;
				do {
					(e = await this.tokenizer.readToken(p.BlockHeader)),
						await this.parseDataBlock(e);
				} while (!e.lastBlock);
				if (this.tokenizer.fileSize && this.metadata.format.duration) {
					const e = this.tokenizer.fileSize - this.tokenizer.position;
					this.metadata.setFormat(
						"bitrate",
						(8 * e) / this.metadata.format.duration
					);
				}
			}
			parseDataBlock(e) {
				switch (
					(d(`blockHeader type=${e.type}, length=${e.length}`),
					e.type)
				) {
					case f.STREAMINFO:
						return this.parseBlockStreamInfo(e.length);
					case f.PADDING:
						this.padding += e.length;
						break;
					case f.APPLICATION:
					case f.SEEKTABLE:
						break;
					case f.VORBIS_COMMENT:
						return this.parseComment(e.length);
					case f.CUESHEET:
						break;
					case f.PICTURE:
						return this.parsePicture(e.length);
					default:
						this.metadata.addWarning(
							"Unknown block type: " + e.type
						);
				}
				return this.tokenizer.ignore(e.length);
			}
			async parseBlockStreamInfo(e) {
				if (e !== p.BlockStreamInfo.len)
					throw new Error("Unexpected block-stream-info length");
				const t = await this.tokenizer.readToken(p.BlockStreamInfo);
				this.metadata.setFormat("container", "FLAC"),
					this.metadata.setFormat("codec", "FLAC"),
					this.metadata.setFormat("lossless", !0),
					this.metadata.setFormat("numberOfChannels", t.channels),
					this.metadata.setFormat("bitsPerSample", t.bitsPerSample),
					this.metadata.setFormat("sampleRate", t.sampleRate),
					this.metadata.setFormat(
						"duration",
						t.totalSamples / t.sampleRate
					);
			}
			async parseComment(e) {
				const t = await this.tokenizer.readToken(new n.BufferType(e)),
					a = new u.VorbisDecoder(t, 0);
				a.readStringUtf8();
				const r = a.readInt32();
				for (let e = 0; e < r; e++) {
					const e = a.parseUserComment();
					this.vorbisParser.addTag(e.key, e.value);
				}
			}
			async parsePicture(e) {
				if (this.options.skipCovers) return this.tokenizer.ignore(e);
				{
					const t = await this.tokenizer.readToken(
						new i.VorbisPictureToken(e)
					);
					this.vorbisParser.addTag("METADATA_BLOCK_PICTURE", t);
				}
			}
		}
		t.FlacParser = h;
		class p {}
		(p.BlockHeader = {
			len: 4,
			get: (e, t) => ({
				lastBlock: r.default.strtokBITSET.get(e, t, 7),
				type: r.default.getBitAllignedNumber(e, t, 1, 7),
				length: n.UINT24_BE.get(e, t + 1),
			}),
		}),
			(p.BlockStreamInfo = {
				len: 34,
				get: (e, t) => ({
					minimumBlockSize: n.UINT16_BE.get(e, t),
					maximumBlockSize: n.UINT16_BE.get(e, t + 2) / 1e3,
					minimumFrameSize: n.UINT24_BE.get(e, t + 4),
					maximumFrameSize: n.UINT24_BE.get(e, t + 7),
					sampleRate: n.UINT24_BE.get(e, t + 10) >> 4,
					channels:
						r.default.getBitAllignedNumber(e, t + 12, 4, 3) + 1,
					bitsPerSample:
						r.default.getBitAllignedNumber(e, t + 12, 7, 5) + 1,
					totalSamples: r.default.getBitAllignedNumber(
						e,
						t + 13,
						4,
						36
					),
					fileMD5: new n.BufferType(16).get(e, t + 18),
				}),
			});
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(1),
				n = a(0),
				i = a(5),
				s = a(7),
				o = a(102),
				l = a(44),
				c = a(19),
				u = r("music-metadata:parser:MP4"),
				d = {
					raw: { lossy: !1, format: "raw" },
					MAC3: { lossy: !0, format: "MACE 3:1" },
					MAC6: { lossy: !0, format: "MACE 6:1" },
					ima4: { lossy: !0, format: "IMA 4:1" },
					ulaw: { lossy: !0, format: "uLaw 2:1" },
					alaw: { lossy: !0, format: "uLaw 2:1" },
					Qclp: { lossy: !0, format: "QUALCOMM PureVoice" },
					".mp3": { lossy: !0, format: "MPEG-1 layer 3" },
					alac: { lossy: !1, format: "ALAC" },
					"ac-3": { lossy: !0, format: "AC-3" },
					mp4a: { lossy: !0, format: "MPEG-4/AAC" },
					mp4s: { lossy: !0, format: "MP4S" },
					c608: { lossy: !0, format: "CEA-608" },
					c708: { lossy: !0, format: "CEA-708" },
				};
			function f(e, t, a) {
				return a.indexOf(e) === t;
			}
			class h extends s.BasicParser {
				static read_BE_Signed_Integer(e) {
					return n.readIntBE(e, 0, e.length);
				}
				static read_BE_Unsigned_Integer(e) {
					return n.readUIntBE(e, 0, e.length);
				}
				async parse() {
					this.tracks = [];
					let e = this.tokenizer.fileSize;
					for (; !this.tokenizer.fileSize || e > 0; ) {
						try {
							await this.tokenizer.peekToken(l.Header);
						} catch (e) {
							const t = `Error at offset=${this.tokenizer.position}: ${e.message}`;
							u(t), this.addWarning(t);
							break;
						}
						e -= (
							await o.Atom.readAtom(
								this.tokenizer,
								(e) => this.handleAtom(e),
								null
							)
						).header.length;
					}
					const t = [];
					this.tracks.forEach((e) => {
						const a = [];
						e.soundSampleDescription.forEach((e) => {
							const t = d[e.dataFormat];
							t && a.push(t.format);
						}),
							a.length >= 1 && t.push(a.join("/"));
					}),
						t.length > 0 &&
							this.metadata.setFormat(
								"codec",
								t.filter(f).join("+")
							);
					const a = this.tracks.filter(
						(e) =>
							e.soundSampleDescription.length >= 1 &&
							e.soundSampleDescription[0].description &&
							e.soundSampleDescription[0].description.sampleRate >
								0
					);
					if (a.length >= 1) {
						const e = a[0],
							t = e.duration / e.timeScale;
						this.metadata.setFormat("duration", t);
						const r = e.soundSampleDescription[0];
						r.description &&
							(this.metadata.setFormat(
								"sampleRate",
								r.description.sampleRate
							),
							this.metadata.setFormat(
								"bitsPerSample",
								r.description.sampleSize
							),
							this.metadata.setFormat(
								"numberOfChannels",
								r.description.numAudioChannels
							));
						const n = d[r.dataFormat];
						n && this.metadata.setFormat("lossless", !n.lossy),
							this.calculateBitRate();
					}
				}
				async handleAtom(e) {
					if (e.parent)
						switch (e.parent.header.name) {
							case "ilst":
							case "<id>":
								return this.parseMetadataItemData(e);
							case "stbl":
								switch (e.header.name) {
									case "stsd":
										return this.parseAtom_stsd(
											e.getPayloadLength()
										);
									case "stsc":
										return this.parseAtom_stsc(
											e.getPayloadLength()
										);
									case "stts":
										return this.parseAtom_stts(
											e.getPayloadLength()
										);
									case "stsz":
										return this.parseAtom_stsz(
											e.getPayloadLength()
										);
									case "stco":
										return this.parseAtom_stco(
											e.getPayloadLength()
										);
									default:
										u(`Ignore: stbl/${e.header.name} atom`);
								}
						}
					switch (e.header.name) {
						case "ftyp":
							const t = await this.parseAtom_ftyp(
								e.getPayloadLength()
							);
							u("ftyp: " + t.join("/"));
							const a = t.filter(f).join("/");
							return void this.metadata.setFormat("container", a);
						case "mdhd":
							return this.parseAtom_mdhd(e);
						case "mvhd":
							return this.parseAtom_mvhd(e);
						case "mdat":
							(this.audioLengthInBytes = e.getPayloadLength()),
								this.calculateBitRate();
					}
					switch (e.header.name) {
						case "ftyp":
							const t = await this.parseAtom_ftyp(
								e.getPayloadLength()
							);
							u("ftyp: " + t.join("/"));
							const a = t.filter(f).join("/");
							return void this.metadata.setFormat("container", a);
						case "mdhd":
							return this.parseAtom_mdhd(e);
						case "mvhd":
							return this.parseAtom_mvhd(e);
						case "chap":
							return void (this.getTrackDescription().chapterList =
								await this.parseAtom_chap(e));
						case "tkhd":
							return void (await this.parseAtom_tkhd(
								e.getPayloadLength()
							));
						case "mdat":
							return (
								(this.audioLengthInBytes =
									e.getPayloadLength()),
								this.calculateBitRate(),
								this.parseAtom_mdat(e.getPayloadLength())
							);
					}
					await this.tokenizer.ignore(e.getPayloadLength()),
						u(
							`Ignore atom data: path=${
								e.atomPath
							}, payload-len=${e.getPayloadLength()}`
						);
				}
				getTrackDescription() {
					return this.tracks[this.tracks.length - 1];
				}
				calculateBitRate() {
					this.audioLengthInBytes &&
						this.metadata.format.duration &&
						this.metadata.setFormat(
							"bitrate",
							(8 * this.audioLengthInBytes) /
								this.metadata.format.duration
						);
				}
				addTag(e, t) {
					this.metadata.addTag("iTunes", e, t);
				}
				addWarning(e) {
					u("Warning: " + e), this.metadata.addWarning(e);
				}
				parseMetadataItemData(e) {
					let t = e.header.name;
					return e.readAtoms(
						this.tokenizer,
						async (e) => {
							switch (e.header.name) {
								case "data":
									return this.parseValueAtom(t, e);
								case "name":
									const a = await this.tokenizer.readToken(
										new l.NameAtom(e.getPayloadLength())
									);
									t += ":" + a.name;
									break;
								case "mean":
									const r = await this.tokenizer.readToken(
										new l.NameAtom(e.getPayloadLength())
									);
									t += ":" + r.name;
									break;
								default:
									const i = await this.tokenizer.readToken(
										new n.BufferType(e.getPayloadLength())
									);
									this.addWarning(
										"Unsupported meta-item: " +
											t +
											"[" +
											e.header.name +
											"] => value=" +
											i.toString("hex") +
											" ascii=" +
											i.toString("ascii")
									);
							}
						},
						e.getPayloadLength()
					);
				}
				async parseValueAtom(t, a) {
					const r = await this.tokenizer.readToken(
						new l.DataAtom(a.header.length - l.Header.len)
					);
					if (0 !== r.type.set)
						throw new Error(
							"Unsupported type-set != 0: " + r.type.set
						);
					switch (r.type.type) {
						case 0:
							switch (t) {
								case "trkn":
								case "disk":
									const e = n.UINT8.get(r.value, 3),
										a = n.UINT8.get(r.value, 5);
									this.addTag(t, e + "/" + a);
									break;
								case "gnre":
									const i = n.UINT8.get(r.value, 1),
										s = c.Genres[i - 1];
									this.addTag(t, s);
							}
							break;
						case 1:
						case 18:
							this.addTag(t, r.value.toString("utf-8"));
							break;
						case 13:
							if (this.options.skipCovers) break;
							this.addTag(t, {
								format: "image/jpeg",
								data: e.from(r.value),
							});
							break;
						case 14:
							if (this.options.skipCovers) break;
							this.addTag(t, {
								format: "image/png",
								data: e.from(r.value),
							});
							break;
						case 21:
							this.addTag(t, h.read_BE_Signed_Integer(r.value));
							break;
						case 22:
							this.addTag(t, h.read_BE_Unsigned_Integer(r.value));
							break;
						case 65:
							this.addTag(t, r.value.readInt8(0));
							break;
						case 66:
							this.addTag(t, r.value.readInt16BE(0));
							break;
						case 67:
							this.addTag(t, r.value.readInt32BE(0));
							break;
						default:
							this.addWarning(
								`atom key=${t}, has unknown well-known-type (data-type): ${r.type.type}`
							);
					}
				}
				async parseAtom_mvhd(e) {
					await this.tokenizer.ignore(e.getPayloadLength());
				}
				async parseAtom_mdhd(e) {
					const t = await this.tokenizer.readToken(
							new l.MdhdAtom(e.getPayloadLength())
						),
						a = this.getTrackDescription();
					(a.creationTime = t.creationTime),
						(a.modificationTime = t.modificationTime),
						(a.timeScale = t.timeScale),
						(a.duration = t.duration);
				}
				async parseAtom_ftyp(e) {
					const t = await this.tokenizer.readToken(l.ftyp);
					if ((e -= l.ftyp.len) > 0) {
						const a = await this.parseAtom_ftyp(e),
							r = t.type.replace(/\W/g, "");
						return r.length > 0 && a.push(r), a;
					}
					return [];
				}
				async parseAtom_tkhd(e) {
					const t = await this.tokenizer.readToken(
						new l.TrackHeaderAtom(e)
					);
					this.tracks.push(t);
				}
				async parseAtom_stsd(e) {
					const t = await this.tokenizer.readToken(new l.StsdAtom(e));
					this.getTrackDescription().soundSampleDescription =
						t.table.map((e) => this.parseSoundSampleDescription(e));
				}
				async parseAtom_stsc(e) {
					const t = await this.tokenizer.readToken(new l.StscAtom(e));
					this.getTrackDescription().sampleToChunkTable = t.entries;
				}
				async parseAtom_stts(e) {
					const t = await this.tokenizer.readToken(new l.SttsAtom(e));
					this.getTrackDescription().timeToSampleTable = t.entries;
				}
				parseSoundSampleDescription(e) {
					const t = {
						dataFormat: e.dataFormat,
						dataReferenceIndex: e.dataReferenceIndex,
					};
					let a = 0;
					const r = l.SoundSampleDescriptionVersion.get(
						e.description,
						a
					);
					return (
						(a += l.SoundSampleDescriptionVersion.len),
						0 === r.version || 1 === r.version
							? (t.description = l.SoundSampleDescriptionV0.get(
									e.description,
									a
							  ))
							: u(
									`Warning: sound-sample-description ${r} not implemented`
							  ),
						t
					);
				}
				async parseAtom_chap(e) {
					const t = [];
					let a = e.getPayloadLength();
					for (; a >= n.UINT32_BE.len; )
						t.push(await this.tokenizer.readNumber(n.UINT32_BE)),
							(a -= n.UINT32_BE.len);
					return t;
				}
				async parseAtom_stsz(e) {
					const t = await this.tokenizer.readToken(new l.StszAtom(e)),
						a = this.getTrackDescription();
					(a.sampleSize = t.sampleSize),
						(a.sampleSizeTable = t.entries);
				}
				async parseAtom_stco(e) {
					const t = await this.tokenizer.readToken(new l.StcoAtom(e));
					this.getTrackDescription().chunkOffsetTable = t.entries;
				}
				async parseAtom_mdat(e) {
					if (this.options.includeChapters) {
						const t = this.tracks.filter((e) => e.chapterList);
						if (1 === t.length) {
							const a = t[0].chapterList,
								r = this.tracks.filter(
									(e) => -1 !== a.indexOf(e.trackId)
								);
							if (1 === r.length)
								return this.parseChapterTrack(r[0], t[0], e);
						}
					}
					await this.tokenizer.ignore(e);
				}
				async parseChapterTrack(e, t, a) {
					e.sampleSize ||
						i.equal(
							e.chunkOffsetTable.length,
							e.sampleSizeTable.length,
							"chunk-offset-table & sample-size-table length"
						);
					const r = [];
					for (
						let n = 0;
						n < e.chunkOffsetTable.length && a > 0;
						++n
					) {
						const s =
								e.chunkOffsetTable[n] - this.tokenizer.position,
							o =
								e.sampleSize > 0
									? e.sampleSize
									: e.sampleSizeTable[n];
						(a -= s + o),
							i.ok(
								a >= 0,
								"Chapter chunk exceeding token length"
							),
							await this.tokenizer.ignore(s);
						const c = await this.tokenizer.readToken(
							new l.ChapterText(o)
						);
						u(`Chapter ${n + 1}: ${c}`);
						const d = {
							title: c,
							sampleOffset: this.findSampleOffset(
								t,
								this.tokenizer.position
							),
						};
						u(
							`Chapter title=${d.title}, offset=${d.sampleOffset}/${this.tracks[0].duration}`
						),
							r.push(d);
					}
					this.metadata.setFormat("chapters", r),
						await this.tokenizer.ignore(a);
				}
				findSampleOffset(e, t) {
					let a = 0;
					e.timeToSampleTable.forEach((e) => {
						a += e.count * e.duration;
					}),
						u("Total duration=" + a);
					let r = 0;
					for (
						;
						r < e.chunkOffsetTable.length &&
						e.chunkOffsetTable[r] < t;

					)
						++r;
					return this.getChunkDuration(r + 1, e);
				}
				getChunkDuration(e, t) {
					let a = 0,
						r = t.timeToSampleTable[a].count,
						n = t.timeToSampleTable[a].duration,
						i = 1,
						s = this.getSamplesPerChunk(i, t.sampleToChunkTable),
						o = 0;
					for (; i < e; ) {
						const e = Math.min(r, s);
						(o += e * n),
							(r -= e),
							(s -= e),
							0 === s
								? (++i,
								  (s = this.getSamplesPerChunk(
										i,
										t.sampleToChunkTable
								  )))
								: (++a,
								  (r = t.timeToSampleTable[a].count),
								  (n = t.timeToSampleTable[a].duration));
					}
					return o;
				}
				getSamplesPerChunk(e, t) {
					for (let a = 0; a < t.length - 1; ++a)
						if (e >= t[a].firstChunk && e < t[a + 1].firstChunk)
							return t[a].samplesPerChunk;
					return t[t.length - 1].samplesPerChunk;
				}
			}
			t.MP4Parser = h;
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(1),
			n = a(44),
			i = r("music-metadata:parser:MP4:Atom");
		class s {
			constructor(e, t, a) {
				(this.header = e),
					(this.extended = t),
					(this.parent = a),
					(this.children = []),
					(this.atomPath =
						(this.parent ? this.parent.atomPath + "." : "") +
						this.header.name);
			}
			static async readAtom(e, t, a) {
				const r = e.position,
					o = await e.readToken(n.Header),
					l = 1 === o.length;
				l && (o.length = await e.readToken(n.ExtendedSize));
				const c = new s(o, l, a);
				return (
					i(
						`parse atom name=${c.atomPath}, extended=${c.extended}, offset=${r}, len=${c.header.length}`
					),
					await c.readData(e, t),
					c
				);
			}
			getHeaderLength() {
				return this.extended ? 16 : 8;
			}
			getPayloadLength() {
				return this.header.length - this.getHeaderLength();
			}
			async readAtoms(e, t, a) {
				for (; a > 0; ) {
					const r = await s.readAtom(e, t, this);
					this.children.push(r), (a -= r.header.length);
				}
			}
			async readData(e, t) {
				switch (this.header.name) {
					case "moov":
					case "udta":
					case "trak":
					case "mdia":
					case "minf":
					case "stbl":
					case "<id>":
					case "ilst":
					case "tref":
						return this.readAtoms(e, t, this.getPayloadLength());
					case "meta":
						return (
							await e.ignore(4),
							this.readAtoms(e, t, this.getPayloadLength() - 4)
						);
					case "mdhd":
					case "mvhd":
					case "tkhd":
					case "stsz":
					case "mdat":
					default:
						return t(this);
				}
			}
		}
		t.Atom = s;
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(5),
				n = a(0),
				i = a(10),
				s = a(1),
				o = a(4),
				l = a(21),
				c = a(104),
				u = s("music-metadata:parser:mpeg"),
				d = {
					AudioObjectTypes: [
						"AAC Main",
						"AAC LC",
						"AAC SSR",
						"AAC LTP",
					],
					SamplingFrequencies: [
						96e3,
						88200,
						64e3,
						48e3,
						44100,
						32e3,
						24e3,
						22050,
						16e3,
						12e3,
						11025,
						8e3,
						7350,
						void 0,
						void 0,
						-1,
					],
				},
				f = [
					void 0,
					["front-center"],
					["front-left", "front-right"],
					["front-center", "front-left", "front-right"],
					[
						"front-center",
						"front-left",
						"front-right",
						"back-center",
					],
					[
						"front-center",
						"front-left",
						"front-right",
						"back-left",
						"back-right",
					],
					[
						"front-center",
						"front-left",
						"front-right",
						"back-left",
						"back-right",
						"LFE-channel",
					],
					[
						"front-center",
						"front-left",
						"front-right",
						"side-left",
						"side-right",
						"back-left",
						"back-right",
						"LFE-channel",
					],
				];
			class h {
				constructor(e, t) {
					(this.versionIndex = o.default.getBitAllignedNumber(
						e,
						t + 1,
						3,
						2
					)),
						(this.layer =
							h.LayerDescription[
								o.default.getBitAllignedNumber(e, t + 1, 5, 2)
							]),
						this.versionIndex > 1 && 0 === this.layer
							? this.parseAdtsHeader(e, t)
							: this.parseMpegHeader(e, t),
						(this.isProtectedByCRC = !o.default.isBitSet(
							e,
							t + 1,
							7
						));
				}
				calcDuration(e) {
					return (e * this.calcSamplesPerFrame()) / this.samplingRate;
				}
				calcSamplesPerFrame() {
					return h.samplesInFrameTable[1 === this.version ? 0 : 1][
						this.layer
					];
				}
				calculateSideInfoLength() {
					if (3 !== this.layer) return 2;
					if (3 === this.channelModeIndex) {
						if (1 === this.version) return 17;
						if (2 === this.version || 2.5 === this.version)
							return 9;
					} else {
						if (1 === this.version) return 32;
						if (2 === this.version || 2.5 === this.version)
							return 17;
					}
				}
				calcSlotSize() {
					return [null, 4, 1, 1][this.layer];
				}
				parseMpegHeader(e, t) {
					(this.container = "MPEG"),
						(this.bitrateIndex = o.default.getBitAllignedNumber(
							e,
							t + 2,
							0,
							4
						)),
						(this.sampRateFreqIndex =
							o.default.getBitAllignedNumber(e, t + 2, 4, 2)),
						(this.padding = o.default.isBitSet(e, t + 2, 6)),
						(this.privateBit = o.default.isBitSet(e, t + 2, 7)),
						(this.channelModeIndex = o.default.getBitAllignedNumber(
							e,
							t + 3,
							0,
							2
						)),
						(this.modeExtension = o.default.getBitAllignedNumber(
							e,
							t + 3,
							2,
							2
						)),
						(this.isCopyrighted = o.default.isBitSet(e, t + 3, 4)),
						(this.isOriginalMedia = o.default.isBitSet(
							e,
							t + 3,
							5
						)),
						(this.emphasis = o.default.getBitAllignedNumber(
							e,
							t + 3,
							7,
							2
						)),
						(this.version = h.VersionID[this.versionIndex]),
						(this.channelMode =
							h.ChannelMode[this.channelModeIndex]),
						(this.codec = `MPEG ${this.version} Layer ${this.layer}`);
					const a = this.calcBitrate();
					if (!a) throw new Error("Cannot determine bit-rate");
					if (
						((this.bitrate = 1e3 * a),
						(this.samplingRate = this.calcSamplingRate()),
						null == this.samplingRate)
					)
						throw new Error("Cannot determine sampling-rate");
				}
				parseAdtsHeader(e, t) {
					u("layer=0 => ADTS"),
						(this.version = 2 === this.versionIndex ? 4 : 2),
						(this.container = "ADTS/MPEG-" + this.version);
					const a = o.default.getBitAllignedNumber(e, t + 2, 0, 2);
					(this.codec = "AAC"),
						(this.codecProfile = d.AudioObjectTypes[a]),
						u("MPEG-4 audio-codec=" + this.codec);
					const r = o.default.getBitAllignedNumber(e, t + 2, 2, 4);
					(this.samplingRate = d.SamplingFrequencies[r]),
						u("sampling-rate=" + this.samplingRate);
					const n = o.default.getBitAllignedNumber(e, t + 2, 7, 3);
					(this.mp4ChannelConfig = f[n]),
						u("channel-config=" + this.mp4ChannelConfig.join("+")),
						(this.frameLength =
							o.default.getBitAllignedNumber(e, t + 3, 6, 2) <<
							11);
				}
				calcBitrate() {
					if (0 === this.bitrateIndex || 15 === this.bitrateIndex)
						return;
					const e = `${Math.floor(this.version)}${this.layer}`;
					return h.bitrate_index[this.bitrateIndex][e];
				}
				calcSamplingRate() {
					return 3 === this.sampRateFreqIndex
						? null
						: h.sampling_rate_freq_index[this.version][
								this.sampRateFreqIndex
						  ];
				}
			}
			(h.SyncByte1 = 255),
				(h.SyncByte2 = 224),
				(h.VersionID = [2.5, null, 2, 1]),
				(h.LayerDescription = [0, 3, 2, 1]),
				(h.ChannelMode = [
					"stereo",
					"joint_stereo",
					"dual_channel",
					"mono",
				]),
				(h.bitrate_index = {
					1: { 11: 32, 12: 32, 13: 32, 21: 32, 22: 8, 23: 8 },
					2: { 11: 64, 12: 48, 13: 40, 21: 48, 22: 16, 23: 16 },
					3: { 11: 96, 12: 56, 13: 48, 21: 56, 22: 24, 23: 24 },
					4: { 11: 128, 12: 64, 13: 56, 21: 64, 22: 32, 23: 32 },
					5: { 11: 160, 12: 80, 13: 64, 21: 80, 22: 40, 23: 40 },
					6: { 11: 192, 12: 96, 13: 80, 21: 96, 22: 48, 23: 48 },
					7: { 11: 224, 12: 112, 13: 96, 21: 112, 22: 56, 23: 56 },
					8: { 11: 256, 12: 128, 13: 112, 21: 128, 22: 64, 23: 64 },
					9: { 11: 288, 12: 160, 13: 128, 21: 144, 22: 80, 23: 80 },
					10: { 11: 320, 12: 192, 13: 160, 21: 160, 22: 96, 23: 96 },
					11: {
						11: 352,
						12: 224,
						13: 192,
						21: 176,
						22: 112,
						23: 112,
					},
					12: {
						11: 384,
						12: 256,
						13: 224,
						21: 192,
						22: 128,
						23: 128,
					},
					13: {
						11: 416,
						12: 320,
						13: 256,
						21: 224,
						22: 144,
						23: 144,
					},
					14: {
						11: 448,
						12: 384,
						13: 320,
						21: 256,
						22: 160,
						23: 160,
					},
				}),
				(h.sampling_rate_freq_index = {
					1: { 0: 44100, 1: 48e3, 2: 32e3 },
					2: { 0: 22050, 1: 24e3, 2: 16e3 },
					2.5: { 0: 11025, 1: 12e3, 2: 8e3 },
				}),
				(h.samplesInFrameTable = [
					[0, 384, 1152, 1152],
					[0, 384, 1152, 576],
				]);
			const p = 4,
				m = (e, t) => new h(e, t);
			class g extends l.AbstractID3Parser {
				constructor() {
					super(...arguments),
						(this.frameCount = 0),
						(this.syncFrameCount = -1),
						(this.countSkipFrameData = 0),
						(this.totalDataLength = 0),
						(this.bitrates = []),
						(this.calculateEofDuration = !1),
						(this.buf_frame_header = e.alloc(4)),
						(this.syncPeek = { buf: e.alloc(1024), len: 0 });
				}
				async _parse() {
					this.metadata.setFormat("lossless", !1);
					try {
						let e = !1;
						for (; !e; )
							await this.sync(),
								(e = await this.parseCommonMpegHeader());
					} catch (e) {
						if (!(e instanceof i.EndOfStreamError)) throw e;
						if ((u("End-of-stream"), this.calculateEofDuration)) {
							const e = this.frameCount * this.samplesPerFrame;
							this.metadata.setFormat("numberOfSamples", e);
							const t = e / this.metadata.format.sampleRate;
							u(`Calculate duration at EOF: ${t} sec.`, t),
								this.metadata.setFormat("duration", t);
						}
					}
				}
				finalize() {
					const e = this.metadata.format,
						t = this.metadata.native.hasOwnProperty("ID3v1");
					if (e.duration && this.tokenizer.fileSize) {
						const a =
							this.tokenizer.fileSize -
							this.mpegOffset -
							(t ? 128 : 0);
						e.codecProfile &&
							"V" === e.codecProfile[0] &&
							this.metadata.setFormat(
								"bitrate",
								(8 * a) / e.duration
							);
					} else if (
						this.tokenizer.fileSize &&
						"CBR" === e.codecProfile
					) {
						const a =
								this.tokenizer.fileSize -
								this.mpegOffset -
								(t ? 128 : 0),
							r =
								Math.round(a / this.frame_size) *
								this.samplesPerFrame;
						this.metadata.setFormat("numberOfSamples", r);
						const n = r / e.sampleRate;
						u("Calculate CBR duration based on file size: %s", n),
							this.metadata.setFormat("duration", n);
					}
				}
				async sync() {
					let e = !1;
					for (;;) {
						let t = 0;
						if (
							((this.syncPeek.len =
								await this.tokenizer.peekBuffer(
									this.syncPeek.buf,
									0,
									1024,
									this.tokenizer.position,
									!0
								)),
							this.syncPeek.len <= 256)
						)
							throw new i.EndOfStreamError();
						for (;;) {
							if (e && 224 == (224 & this.syncPeek.buf[t]))
								return (
									(this.buf_frame_header[0] = h.SyncByte1),
									(this.buf_frame_header[1] =
										this.syncPeek.buf[t]),
									await this.tokenizer.ignore(t),
									u(
										`Sync at offset=${
											this.tokenizer.position - 1
										}, frameCount=${this.frameCount}`
									),
									this.syncFrameCount === this.frameCount &&
										(u(
											"Re-synced MPEG stream, frameCount=" +
												this.frameCount
										),
										(this.frameCount = 0),
										(this.frame_size = 0)),
									void (this.syncFrameCount = this.frameCount)
								);
							if (
								((e = !1),
								(t = this.syncPeek.buf.indexOf(h.SyncByte1, t)),
								-1 === t)
							) {
								if (
									this.syncPeek.len < this.syncPeek.buf.length
								)
									throw new i.EndOfStreamError();
								await this.tokenizer.ignore(this.syncPeek.len);
								break;
							}
							++t, (e = !0);
						}
					}
				}
				async parseCommonMpegHeader() {
					let e;
					0 === this.frameCount &&
						(this.mpegOffset = this.tokenizer.position - 1),
						await this.tokenizer.peekBuffer(
							this.buf_frame_header,
							1,
							3
						);
					try {
						e = m(this.buf_frame_header, 0);
					} catch (e) {
						return (
							await this.tokenizer.ignore(1),
							this.metadata.addWarning(
								"Parse error: " + e.message
							),
							!1
						);
					}
					return (
						await this.tokenizer.ignore(3),
						this.metadata.setFormat("container", e.container),
						this.metadata.setFormat("codec", e.codec),
						this.metadata.setFormat("lossless", !1),
						this.metadata.setFormat("sampleRate", e.samplingRate),
						this.frameCount++,
						e.version >= 2 && 0 === e.layer
							? this.parseAdts(e)
							: this.parseAudioFrameHeader(e)
					);
				}
				async parseAudioFrameHeader(e) {
					this.metadata.setFormat(
						"numberOfChannels",
						"mono" === e.channelMode ? 1 : 2
					),
						this.metadata.setFormat("bitrate", e.bitrate),
						this.frameCount < 2e5 &&
							u(
								"offset=%s MP%s bitrate=%s sample-rate=%s",
								this.tokenizer.position - 4,
								e.layer,
								e.bitrate,
								e.samplingRate
							);
					const t = e.calcSlotSize();
					if (null === t) throw new Error("invalid slot_size");
					const a = e.calcSamplesPerFrame();
					u("samples_per_frame=" + a);
					const r =
						((a / 8) * e.bitrate) / e.samplingRate +
						(e.padding ? t : 0);
					if (
						((this.frame_size = Math.floor(r)),
						(this.audioFrameHeader = e),
						this.bitrates.push(e.bitrate),
						1 === this.frameCount)
					)
						return (
							(this.offset = p),
							await this.skipSideInformation(),
							!1
						);
					if (3 === this.frameCount) {
						if (this.areAllSame(this.bitrates)) {
							if (
								((this.samplesPerFrame = a),
								this.metadata.setFormat("codecProfile", "CBR"),
								this.tokenizer.fileSize)
							)
								return !0;
						} else if (this.metadata.format.duration) return !0;
						if (!this.options.duration) return !0;
					}
					return (
						this.options.duration &&
							4 === this.frameCount &&
							((this.samplesPerFrame = a),
							(this.calculateEofDuration = !0)),
						(this.offset = 4),
						e.isProtectedByCRC
							? (await this.parseCrc(), !1)
							: (await this.skipSideInformation(), !1)
					);
				}
				async parseAdts(t) {
					const a = e.alloc(3);
					await this.tokenizer.readBuffer(a),
						(t.frameLength += o.default.getBitAllignedNumber(
							a,
							0,
							0,
							11
						)),
						this.tokenizer.ignore(t.frameLength - 7),
						(this.totalDataLength += t.frameLength),
						(this.samplesPerFrame = 1024);
					const r = t.samplingRate / this.samplesPerFrame,
						n =
							8 *
								(0 === this.frameCount
									? 0
									: this.totalDataLength / this.frameCount) *
								r +
							0.5;
					if (
						(this.metadata.setFormat(
							"codecProfile",
							t.codecProfile
						),
						this.metadata.setFormat("bitrate", n),
						t.mp4ChannelConfig &&
							this.metadata.setFormat(
								"numberOfChannels",
								t.mp4ChannelConfig.length
							),
						u(
							`frame-count=${this.frameCount}, size=${t.frameLength} bytes, bit-rate=${n}`
						),
						3 === this.frameCount)
					) {
						if (!this.options.duration) return !0;
						this.calculateEofDuration = !0;
					}
					return !1;
				}
				async parseCrc() {
					return (
						(this.crc = await this.tokenizer.readNumber(
							n.INT16_BE
						)),
						(this.offset += 2),
						this.skipSideInformation()
					);
				}
				async skipSideInformation() {
					const e = this.audioFrameHeader.calculateSideInfoLength();
					await this.tokenizer.readToken(new n.BufferType(e)),
						(this.offset += e),
						await this.readXtraInfoHeader();
				}
				async readXtraInfoHeader() {
					const e = await this.tokenizer.readToken(
						c.InfoTagHeaderTag
					);
					switch (((this.offset += c.InfoTagHeaderTag.len), e)) {
						case "Info":
							return (
								this.metadata.setFormat("codecProfile", "CBR"),
								this.readXingInfoHeader()
							);
						case "Xing":
							const e = await this.readXingInfoHeader(),
								t = "V" + (100 - e.vbrScale) / 10;
							return (
								this.metadata.setFormat("codecProfile", t), null
							);
						case "Xtra":
							break;
						case "LAME":
							const a = await this.tokenizer.readToken(
								c.LameEncoderVersion
							);
							return (
								(this.offset += c.LameEncoderVersion.len),
								this.metadata.setFormat("tool", "LAME " + a),
								await this.skipFrameData(
									this.frame_size - this.offset
								),
								null
							);
					}
					const t = this.frame_size - this.offset;
					return (
						t < 0
							? this.metadata.addWarning(
									"Frame " +
										this.frameCount +
										"corrupt: negative frameDataLeft"
							  )
							: await this.skipFrameData(t),
						null
					);
				}
				async readXingInfoHeader() {
					const e = await this.tokenizer.readToken(c.XingInfoTag);
					if (
						((this.offset += c.XingInfoTag.len),
						this.metadata.setFormat(
							"tool",
							o.default.stripNulls(e.codec)
						),
						1 == (1 & e.headerFlags[3]))
					) {
						const t = this.audioFrameHeader.calcDuration(
							e.numFrames
						);
						return (
							this.metadata.setFormat("duration", t),
							u(
								"Get duration from Xing header: %s",
								this.metadata.format.duration
							),
							e
						);
					}
					const t = this.frame_size - this.offset;
					return await this.skipFrameData(t), e;
				}
				async skipFrameData(e) {
					r.ok(e >= 0, "frame-data-left cannot be negative"),
						await this.tokenizer.ignore(e),
						(this.countSkipFrameData += e);
				}
				areAllSame(e) {
					const t = e[0];
					return e.every((e) => e === t);
				}
			}
			t.MpegParser = g;
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0);
		(t.InfoTagHeaderTag = new r.StringType(4, "ascii")),
			(t.LameEncoderVersion = new r.StringType(6, "ascii")),
			(t.XingInfoTag = {
				len: 136,
				get: (e, t) => ({
					headerFlags: new r.BufferType(4).get(e, t),
					numFrames: r.UINT32_BE.get(e, t + 4),
					streamSize: r.UINT32_BE.get(e, t + 8),
					vbrScale: r.UINT32_BE.get(e, t + 112),
					codec: new r.StringType(9, "ascii").get(e, t + 116),
					infoTagRevision: r.UINT8.get(e, t + 125) >> 4,
					vbrMethod: 15 & r.UINT8.get(e, t + 125),
				}),
			});
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(1),
			n = a(0),
			i = a(106),
			s = a(108),
			o = a(21),
			l = r("music-metadata:parser:musepack");
		class c extends o.AbstractID3Parser {
			async _parse() {
				let e;
				switch (
					await this.tokenizer.peekToken(
						new n.StringType(3, "binary")
					)
				) {
					case "MP+":
						l("Musepack stream-version 7"),
							(e = new s.MpcSv7Parser());
						break;
					case "MPC":
						l("Musepack stream-version 8"),
							(e = new i.MpcSv8Parser());
						break;
					default:
						throw new Error("Invalid Musepack signature prefix");
				}
				return (
					e.init(this.metadata, this.tokenizer, this.options),
					e.parse()
				);
			}
		}
		t.default = c;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(1),
			n = a(5),
			i = a(7),
			s = a(107),
			o = a(13),
			l = a(6),
			c = r("music-metadata:parser:musepack");
		class u extends i.BasicParser {
			constructor() {
				super(...arguments), (this.audioLength = 0);
			}
			async parse() {
				const e = await this.tokenizer.readToken(l.FourCcToken);
				return (
					n.equal(e, "MPCK", "Magic number"),
					this.metadata.setFormat("container", "Musepack, SV8"),
					this.parsePacket()
				);
			}
			async parsePacket() {
				const e = new s.StreamReader(this.tokenizer);
				for (;;) {
					const t = await e.readPacketHeader();
					switch (
						(c(
							`packet-header key=${t.key}, payloadLength=${t.payloadLength}`
						),
						t.key)
					) {
						case "SH":
							const a = await e.readStreamHeader(t.payloadLength);
							this.metadata.setFormat(
								"numberOfSamples",
								a.sampleCount
							),
								this.metadata.setFormat(
									"sampleRate",
									a.sampleFrequency
								),
								this.metadata.setFormat(
									"duration",
									a.sampleCount / a.sampleFrequency
								),
								this.metadata.setFormat(
									"numberOfChannels",
									a.channelCount
								);
							break;
						case "AP":
							(this.audioLength += t.payloadLength),
								await this.tokenizer.ignore(t.payloadLength);
							break;
						case "RG":
						case "EI":
						case "SO":
						case "ST":
						case "CT":
							await this.tokenizer.ignore(t.payloadLength);
							break;
						case "SE":
							return (
								this.metadata.setFormat(
									"bitrate",
									(8 * this.audioLength) /
										this.metadata.format.duration
								),
								o.APEv2Parser.tryParseApeHeader(
									this.metadata,
									this.tokenizer,
									this.options
								)
							);
						default:
							throw new Error("Unexpected header: " + t.key);
					}
				}
			}
		}
		t.MpcSv8Parser = u;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(4),
			i = a(1)("music-metadata:parser:musepack:sv8"),
			s = new r.StringType(2, "binary"),
			o = {
				len: 5,
				get: (e, t) => ({
					crc: r.UINT32_LE.get(e, t),
					streamVersion: r.UINT8.get(e, t + 4),
				}),
			},
			l = {
				len: 2,
				get: (e, t) => ({
					sampleFrequency: [44100, 48e3, 37800, 32e3][
						n.default.getBitAllignedNumber(e, t, 0, 3)
					],
					maxUsedBands: n.default.getBitAllignedNumber(e, t, 3, 5),
					channelCount:
						n.default.getBitAllignedNumber(e, t + 1, 0, 4) + 1,
					msUsed: n.default.isBitSet(e, t + 1, 4),
					audioBlockFrames: n.default.getBitAllignedNumber(
						e,
						t + 1,
						5,
						3
					),
				}),
			};
		t.StreamReader = class {
			constructor(e) {
				this.tokenizer = e;
			}
			async readPacketHeader() {
				const e = await this.tokenizer.readToken(s),
					t = await this.readVariableSizeField();
				return { key: e, payloadLength: t.value - 2 - t.len };
			}
			async readStreamHeader(e) {
				const t = {};
				i("Reading SH at offset=" + this.tokenizer.position);
				const a = await this.tokenizer.readToken(o);
				(e -= o.len),
					Object.assign(t, a),
					i("SH.streamVersion = " + a.streamVersion);
				const r = await this.readVariableSizeField();
				(e -= r.len), (t.sampleCount = r.value);
				const n = await this.readVariableSizeField();
				(e -= n.len), (t.beginningOfSilence = n.value);
				const s = await this.tokenizer.readToken(l);
				return (
					(e -= l.len),
					Object.assign(t, s),
					await this.tokenizer.ignore(e),
					t
				);
			}
			async readVariableSizeField(e = 1, t = 0) {
				let a = await this.tokenizer.readNumber(r.UINT8);
				return 0 == (128 & a)
					? { len: e, value: t + a }
					: ((a &= 127),
					  (a += t),
					  this.readVariableSizeField(e + 1, a << 7));
			}
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(1),
			n = a(5),
			i = a(7),
			s = a(109),
			o = a(13),
			l = a(110),
			c = r("music-metadata:parser:musepack");
		class u extends i.BasicParser {
			constructor() {
				super(...arguments), (this.audioLength = 0);
			}
			async parse() {
				const e = await this.tokenizer.readToken(s.Header);
				n.equal(e.signature, "MP+", "Magic number"),
					c(
						`stream-version=${e.streamMajorVersion}.${e.streamMinorVersion}`
					),
					this.metadata.setFormat("container", "Musepack, SV7"),
					this.metadata.setFormat("sampleRate", e.sampleFrequency);
				const t = 1152 * (e.frameCount - 1) + e.lastFrameLength;
				this.metadata.setFormat("numberOfSamples", t),
					(this.duration = t / e.sampleFrequency),
					this.metadata.setFormat("duration", this.duration),
					(this.bitreader = new l.BitReader(this.tokenizer)),
					this.metadata.setFormat(
						"numberOfChannels",
						e.midSideStereo || e.intensityStereo ? 2 : 1
					);
				const a = await this.bitreader.read(8);
				return (
					this.metadata.setFormat("codec", (a / 100).toFixed(2)),
					await this.skipAudioData(e.frameCount),
					c(
						"End of audio stream, switching to APEv2, offset=" +
							this.tokenizer.position
					),
					o.APEv2Parser.tryParseApeHeader(
						this.metadata,
						this.tokenizer,
						this.options
					)
				);
			}
			async skipAudioData(e) {
				for (; e-- > 0; ) {
					const e = await this.bitreader.read(20);
					(this.audioLength += 20 + e),
						await this.bitreader.ignore(e);
				}
				const t = await this.bitreader.read(11);
				(this.audioLength += t),
					this.metadata.setFormat(
						"bitrate",
						this.audioLength / this.duration
					);
			}
		}
		t.MpcSv7Parser = u;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(4);
		t.Header = {
			len: 24,
			get: (e, t) => {
				const a = {
					signature: e.toString("binary", t, t + 3),
					streamMinorVersion: n.default.getBitAllignedNumber(
						e,
						t + 3,
						0,
						4
					),
					streamMajorVersion: n.default.getBitAllignedNumber(
						e,
						t + 3,
						4,
						4
					),
					frameCount: r.UINT32_LE.get(e, t + 4),
					maxLevel: r.UINT16_LE.get(e, t + 8),
					sampleFrequency: [44100, 48e3, 37800, 32e3][
						n.default.getBitAllignedNumber(e, t + 10, 0, 2)
					],
					link: n.default.getBitAllignedNumber(e, t + 10, 2, 2),
					profile: n.default.getBitAllignedNumber(e, t + 10, 4, 4),
					maxBand: n.default.getBitAllignedNumber(e, t + 11, 0, 6),
					intensityStereo: n.default.isBitSet(e, t + 11, 6),
					midSideStereo: n.default.isBitSet(e, t + 11, 7),
					titlePeak: r.UINT16_LE.get(e, t + 12),
					titleGain: r.UINT16_LE.get(e, t + 14),
					albumPeak: r.UINT16_LE.get(e, t + 16),
					albumGain: r.UINT16_LE.get(e, t + 18),
					lastFrameLength: (r.UINT32_LE.get(e, t + 20) >>> 20) & 2047,
					trueGapless: n.default.isBitSet(e, t + 23, 0),
				};
				return (
					(a.lastFrameLength = a.trueGapless
						? (r.UINT32_LE.get(e, 20) >>> 20) & 2047
						: 0),
					a
				);
			},
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0);
		t.BitReader = class {
			constructor(e) {
				(this.tokenizer = e), (this.pos = 0), (this.dword = void 0);
			}
			async read(e) {
				for (; void 0 === this.dword; )
					this.dword = await this.tokenizer.readToken(r.UINT32_LE);
				let t = this.dword;
				return (
					(this.pos += e),
					this.pos < 32
						? ((t >>>= 32 - this.pos), t & ((1 << e) - 1))
						: ((this.pos -= 32),
						  0 === this.pos
								? ((this.dword = void 0), t & ((1 << e) - 1))
								: ((this.dword = await this.tokenizer.readToken(
										r.UINT32_LE
								  )),
								  this.pos &&
										((t <<= this.pos),
										(t |= this.dword >>> (32 - this.pos))),
								  t & ((1 << e) - 1)))
				);
			}
			async ignore(e) {
				if (this.pos > 0) {
					const t = 32 - this.pos;
					(this.dword = void 0), (e -= t), (this.pos = 0);
				}
				const t = e % 32,
					a = (e - t) / 32;
				return await this.tokenizer.ignore(4 * a), this.read(t);
			}
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(1),
			i = a(5),
			s = a(4),
			o = a(6),
			l = a(22),
			c = a(112),
			u = a(114),
			d = a(7),
			f = a(116),
			h = a(10),
			p = n("music-metadata:parser:ogg");
		class m {
			constructor(e) {
				this.len = e.page_segments;
			}
			static sum(e, t, a) {
				let r = 0;
				for (let n = t; n < t + a; ++n) r += e[n];
				return r;
			}
			get(e, t) {
				return { totalPageSize: m.sum(e, t, this.len) };
			}
		}
		t.SegmentTable = m;
		class g extends d.BasicParser {
			async parse() {
				p("pos=%s, parsePage()", this.tokenizer.position);
				try {
					let e;
					do {
						(e = await this.tokenizer.readToken(g.Header)),
							i.strictEqual(
								e.capturePattern,
								"OggS",
								"Ogg capture pattern"
							),
							this.metadata.setFormat("container", "Ogg"),
							(this.header = e),
							(this.pageNumber = e.pageSequenceNo),
							p(
								"page#=%s, Ogg.id=%s",
								e.pageSequenceNo,
								e.capturePattern
							);
						const t = await this.tokenizer.readToken(new m(e));
						p("totalPageSize=%s", t.totalPageSize);
						const a = await this.tokenizer.readToken(
							new r.BufferType(t.totalPageSize)
						);
						if (
							(p(
								"firstPage=%s, lastPage=%s, continued=%s",
								e.headerType.firstPage,
								e.headerType.lastPage,
								e.headerType.continued
							),
							e.headerType.firstPage)
						) {
							const e = new r.StringType(7, "ascii").get(a, 0);
							switch (e) {
								case "vorbis":
									p("Set page consumer to Ogg/Vorbis"),
										(this.pageConsumer = new l.VorbisParser(
											this.metadata,
											this.options
										));
									break;
								case "OpusHea":
									p("Set page consumer to Ogg/Opus"),
										(this.pageConsumer = new c.OpusParser(
											this.metadata,
											this.options,
											this.tokenizer
										));
									break;
								case "Speex  ":
									p("Set page consumer to Ogg/Speex"),
										(this.pageConsumer = new u.SpeexParser(
											this.metadata,
											this.options,
											this.tokenizer
										));
									break;
								case "\0theora":
									p("Set page consumer to Ogg/Theora"),
										(this.pageConsumer = new f.TheoraParser(
											this.metadata,
											this.options,
											this.tokenizer
										));
									break;
								default:
									throw new Error(
										"gg audio-codec not recognized (id=" +
											e +
											")"
									);
							}
						}
						this.pageConsumer.parsePage(e, a);
					} while (!e.headerType.lastPage);
				} catch (e) {
					if (e instanceof h.EndOfStreamError)
						return void p("End-of-stream");
					if (e.message.startsWith("FourCC") && this.pageNumber > 0)
						return (
							this.metadata.addWarning(
								"Invalid FourCC ID, maybe last OGG-page is not marked with last-page flag"
							),
							this.pageConsumer.flush()
						);
					throw e;
				}
			}
		}
		(t.OggParser = g),
			(g.Header = {
				len: 27,
				get: (e, t) => ({
					capturePattern: o.FourCcToken.get(e, t),
					version: e.readUInt8(t + 4),
					headerType: {
						continued: s.default.strtokBITSET.get(e, t + 5, 0),
						firstPage: s.default.strtokBITSET.get(e, t + 5, 1),
						lastPage: s.default.strtokBITSET.get(e, t + 5, 2),
					},
					absoluteGranulePosition: e.readIntLE(t + 6, 6),
					streamSerialNumber: r.UINT32_LE.get(e, t + 14),
					pageSequenceNo: r.UINT32_LE.get(e, t + 18),
					pageChecksum: r.UINT32_LE.get(e, t + 22),
					page_segments: e.readUInt8(t + 26),
				}),
			});
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(113),
			i = a(22);
		class s extends i.VorbisParser {
			constructor(e, t, a) {
				super(e, t), (this.tokenizer = a), (this.lastPos = -1);
			}
			parseFirstPage(e, t) {
				if (
					(this.metadata.setFormat("codec", "Opus"),
					(this.idHeader = new n.IdHeader(t.length).get(t, 0)),
					"OpusHead" !== this.idHeader.magicSignature)
				)
					throw new Error("Illegal ogg/Opus magic-signature");
				this.metadata.setFormat(
					"sampleRate",
					this.idHeader.inputSampleRate
				),
					this.metadata.setFormat(
						"numberOfChannels",
						this.idHeader.channelCount
					);
			}
			parseFullPage(e) {
				switch (new r.StringType(8, "ascii").get(e, 0)) {
					case "OpusTags":
						this.parseUserCommentList(e, 8),
							(this.lastPos = this.tokenizer.position);
				}
			}
			calculateDuration(e) {
				if (
					this.metadata.format.sampleRate &&
					e.absoluteGranulePosition >= 0 &&
					(this.metadata.setFormat(
						"numberOfSamples",
						e.absoluteGranulePosition - this.idHeader.preSkip
					),
					this.metadata.setFormat(
						"duration",
						this.metadata.format.numberOfSamples /
							this.idHeader.inputSampleRate
					),
					-1 !== this.lastPos &&
						this.tokenizer.fileSize &&
						this.metadata.format.duration)
				) {
					const e = this.tokenizer.fileSize - this.lastPos;
					this.metadata.setFormat(
						"bitrate",
						(8 * e) / this.metadata.format.duration
					);
				}
			}
		}
		t.OpusParser = s;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0);
		t.IdHeader = class {
			constructor(e) {
				if (((this.len = e), e < 19))
					throw new Error(
						"ID-header-page 0 should be at least 19 bytes long"
					);
			}
			get(e, t) {
				return {
					magicSignature: new r.StringType(8, "ascii").get(e, t + 0),
					version: e.readUInt8(t + 8),
					channelCount: e.readUInt8(t + 9),
					preSkip: e.readInt16LE(t + 10),
					inputSampleRate: e.readInt32LE(t + 12),
					outputGain: e.readInt16LE(t + 16),
					channelMapping: e.readUInt8(t + 18),
				};
			}
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(1),
			n = a(115),
			i = a(22),
			s = r("music-metadata:parser:ogg:speex");
		class o extends i.VorbisParser {
			constructor(e, t, a) {
				super(e, t), (this.tokenizer = a);
			}
			parseFirstPage(e, t) {
				s("First Ogg/Speex page");
				const a = n.Header.get(t, 0);
				this.metadata.setFormat("codec", "Speex " + a.version),
					this.metadata.setFormat("numberOfChannels", a.nb_channels),
					this.metadata.setFormat("sampleRate", a.rate),
					-1 !== a.bitrate &&
						this.metadata.setFormat("bitrate", a.bitrate);
			}
		}
		t.SpeexParser = o;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(4);
		t.Header = {
			len: 80,
			get: (e, t) => ({
				speex: new r.StringType(8, "ascii").get(e, t + 0),
				version: n.default.trimRightNull(
					new r.StringType(20, "ascii").get(e, t + 8)
				),
				version_id: e.readInt32LE(t + 28),
				header_size: e.readInt32LE(t + 32),
				rate: e.readInt32LE(t + 36),
				mode: e.readInt32LE(t + 40),
				mode_bitstream_version: e.readInt32LE(t + 44),
				nb_channels: e.readInt32LE(t + 48),
				bitrate: e.readInt32LE(t + 52),
				frame_size: e.readInt32LE(t + 56),
				vbr: e.readInt32LE(t + 60),
				frames_per_packet: e.readInt32LE(t + 64),
				extra_headers: e.readInt32LE(t + 68),
				reserved1: e.readInt32LE(t + 72),
				reserved2: e.readInt32LE(t + 76),
			}),
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(1),
			n = a(117),
			i = r("music-metadata:parser:ogg:theora");
		t.TheoraParser = class {
			constructor(e, t, a) {
				(this.metadata = e), (this.tokenizer = a);
			}
			parsePage(e, t) {
				e.headerType.firstPage && this.parseFirstPage(e, t);
			}
			flush() {
				i("flush");
			}
			parseFirstPage(e, t) {
				i("First Ogg/Theora page"),
					this.metadata.setFormat("codec", "Theora");
				const a = n.IdentificationHeader.get(t, 0);
				this.metadata.setFormat("bitrate", a.nombr);
			}
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0);
		t.IdentificationHeader = {
			len: 42,
			get: (e, t) => ({
				id: new r.StringType(7, "ascii").get(e, t),
				vmaj: e.readUInt8(t + 7),
				vmin: e.readUInt8(t + 8),
				vrev: e.readUInt8(t + 9),
				vmbw: e.readUInt16BE(t + 10),
				vmbh: e.readUInt16BE(t + 17),
				nombr: r.UINT24_BE.get(e, t + 37),
				nqual: e.readUInt8(t + 40),
			}),
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(10),
			n = a(0),
			i = a(1),
			s = a(119),
			o = a(120),
			l = a(15),
			c = a(4),
			u = a(6),
			d = a(7),
			f = a(25),
			h = i("music-metadata:parser:RIFF");
		class p extends d.BasicParser {
			async parse() {
				const e = await this.tokenizer.readToken(s.Header);
				if (
					(h(
						`pos=${this.tokenizer.position}, parse: chunkID=${e.chunkID}`
					),
					"RIFF" === e.chunkID)
				)
					return this.parseRiffChunk(e.chunkSize).catch((e) => {
						if (!(e instanceof r.EndOfStreamError)) throw e;
					});
			}
			async parseRiffChunk(e) {
				const t = await this.tokenizer.readToken(u.FourCcToken);
				switch ((this.metadata.setFormat("container", t), t)) {
					case "WAVE":
						return this.readWaveChunk(e - u.FourCcToken.len);
					default:
						throw new Error("Unsupported RIFF format: RIFF/" + t);
				}
			}
			async readWaveChunk(e) {
				do {
					const t = await this.tokenizer.readToken(s.Header);
					switch (
						((e -= s.Header.len + t.chunkSize),
						(this.header = t),
						h(
							`pos=${this.tokenizer.position}, readChunk: chunkID=RIFF/WAVE/${t.chunkID}`
						),
						t.chunkID)
					) {
						case "LIST":
							await this.parseListTag(t);
							break;
						case "fact":
							this.metadata.setFormat("lossless", !1),
								(this.fact = await this.tokenizer.readToken(
									new o.FactChunk(t)
								));
							break;
						case "fmt ":
							const e = await this.tokenizer.readToken(
								new o.Format(t)
							);
							let a = o.WaveFormat[e.wFormatTag];
							a ||
								(h("WAVE/non-PCM format=" + e.wFormatTag),
								(a = "non-PCM (" + e.wFormatTag + ")")),
								this.metadata.setFormat("codec", a),
								this.metadata.setFormat(
									"bitsPerSample",
									e.wBitsPerSample
								),
								this.metadata.setFormat(
									"sampleRate",
									e.nSamplesPerSec
								),
								this.metadata.setFormat(
									"numberOfChannels",
									e.nChannels
								),
								this.metadata.setFormat(
									"bitrate",
									e.nBlockAlign * e.nSamplesPerSec * 8
								),
								(this.blockAlign = e.nBlockAlign);
							break;
						case "id3 ":
						case "ID3 ":
							const i = await this.tokenizer.readToken(
									new n.BufferType(t.chunkSize)
								),
								s = new f.ID3Stream(i),
								c = r.fromStream(s);
							await new l.ID3v2Parser().parse(
								this.metadata,
								c,
								this.options
							);
							break;
						case "data":
							!1 !== this.metadata.format.lossless &&
								this.metadata.setFormat("lossless", !0);
							const u = this.fact
								? this.fact.dwSampleLength
								: t.chunkSize / this.blockAlign;
							this.metadata.setFormat("numberOfSamples", u),
								this.metadata.setFormat(
									"duration",
									u / this.metadata.format.sampleRate
								),
								this.metadata.setFormat(
									"bitrate",
									this.metadata.format.numberOfChannels *
										this.blockAlign *
										this.metadata.format.sampleRate
								),
								await this.tokenizer.ignore(t.chunkSize);
							break;
						default:
							h(
								`Ignore chunk: RIFF/${t.chunkID} of ${t.chunkSize} bytes`
							),
								this.metadata.addWarning(
									"Ignore chunk: RIFF/" + t.chunkID
								),
								await this.tokenizer.ignore(t.chunkSize);
					}
					this.header.chunkSize % 2 == 1 &&
						(h("Read odd padding byte"),
						await this.tokenizer.ignore(1));
				} while (e > 0);
			}
			async parseListTag(e) {
				const t = await this.tokenizer.readToken(u.FourCcToken);
				switch (
					(h(
						"pos=%s, parseListTag: chunkID=RIFF/WAVE/LIST/%s",
						this.tokenizer.position,
						t
					),
					t)
				) {
					case "INFO":
						return this.parseRiffInfoTags(e.chunkSize - 4);
					case "adtl":
					default:
						return (
							this.metadata.addWarning(
								"Ignore chunk: RIFF/WAVE/LIST/" + t
							),
							h("Ignoring chunkID=RIFF/WAVE/LIST/" + t),
							this.tokenizer.ignore(e.chunkSize - 4)
						);
				}
			}
			async parseRiffInfoTags(e) {
				for (; e >= 8; ) {
					const t = await this.tokenizer.readToken(s.Header),
						a = new s.ListInfoTagValue(t),
						r = await this.tokenizer.readToken(a);
					this.addTag(t.chunkID, c.default.stripNulls(r)),
						(e -= 8 + a.len);
				}
				if (0 !== e) throw Error("Illegal remaining size: " + e);
			}
			addTag(e, t) {
				this.metadata.addTag("exif", e, t);
			}
		}
		t.WaveParser = p;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(6);
		t.Header = {
			len: 8,
			get: (e, t) => ({
				chunkID: n.FourCcToken.get(e, t),
				chunkSize: e.readUInt32LE(t + 4),
			}),
		};
		t.ListInfoTagValue = class {
			constructor(e) {
				(this.tagHeader = e),
					(this.len = e.chunkSize),
					(this.len += 1 & this.len);
			}
			get(e, t) {
				return new r.StringType(this.tagHeader.chunkSize, "ascii").get(
					e,
					t
				);
			}
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(5);
		!(function (e) {
			(e[(e.PCM = 1)] = "PCM"),
				(e[(e.ADPCM = 2)] = "ADPCM"),
				(e[(e.IEEE_FLOAT = 3)] = "IEEE_FLOAT"),
				(e[(e.MPEG_ADTS_AAC = 5632)] = "MPEG_ADTS_AAC"),
				(e[(e.MPEG_LOAS = 5634)] = "MPEG_LOAS"),
				(e[(e.RAW_AAC1 = 255)] = "RAW_AAC1"),
				(e[(e.DOLBY_AC3_SPDIF = 146)] = "DOLBY_AC3_SPDIF"),
				(e[(e.DVM = 8192)] = "DVM"),
				(e[(e.RAW_SPORT = 576)] = "RAW_SPORT"),
				(e[(e.ESST_AC3 = 577)] = "ESST_AC3"),
				(e[(e.DRM = 9)] = "DRM"),
				(e[(e.DTS2 = 8193)] = "DTS2"),
				(e[(e.MPEG = 80)] = "MPEG");
		})(t.WaveFormat || (t.WaveFormat = {}));
		t.Format = class {
			constructor(e) {
				r.ok(e.chunkSize >= 16, "16 for PCM."),
					(this.len = e.chunkSize);
			}
			get(e, t) {
				return {
					wFormatTag: e.readUInt16LE(t),
					nChannels: e.readUInt16LE(t + 2),
					nSamplesPerSec: e.readUInt32LE(t + 4),
					nAvgBytesPerSec: e.readUInt32LE(t + 8),
					nBlockAlign: e.readUInt16LE(t + 12),
					wBitsPerSample: e.readUInt16LE(t + 14),
				};
			}
		};
		t.FactChunk = class {
			constructor(e) {
				r.ok(e.chunkSize >= 4, "minimum fact chunk size."),
					(this.len = e.chunkSize);
			}
			get(e, t) {
				return { dwSampleLength: e.readUInt32LE(t) };
			}
		};
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(0),
				n = a(5),
				i = a(13),
				s = a(6),
				o = a(7),
				l = a(122),
				c = a(1)("music-metadata:parser:WavPack");
			class u extends o.BasicParser {
				async parse() {
					return (
						(this.audioDataSize = 0),
						await this.parseWavPackBlocks(),
						i.APEv2Parser.tryParseApeHeader(
							this.metadata,
							this.tokenizer,
							this.options
						)
					);
				}
				async parseWavPackBlocks() {
					do {
						if (
							"wvpk" !==
							(await this.tokenizer.peekToken(s.FourCcToken))
						)
							break;
						const e = await this.tokenizer.readToken(
							l.WavPack.BlockHeaderToken
						);
						n.strictEqual(e.BlockID, "wvpk", "WavPack Block-ID"),
							c(
								`WavPack header blockIndex=${e.blockIndex}, len=${l.WavPack.BlockHeaderToken.len}`
							),
							0 !== e.blockIndex ||
								this.metadata.format.container ||
								(this.metadata.setFormat(
									"container",
									"WavPack"
								),
								this.metadata.setFormat(
									"lossless",
									!e.flags.isHybrid
								),
								this.metadata.setFormat(
									"bitsPerSample",
									e.flags.bitsPerSample
								),
								e.flags.isDSD ||
									(this.metadata.setFormat(
										"sampleRate",
										e.flags.samplingRate
									),
									this.metadata.setFormat(
										"duration",
										e.totalSamples / e.flags.samplingRate
									)),
								this.metadata.setFormat(
									"numberOfChannels",
									e.flags.isMono ? 1 : 2
								),
								this.metadata.setFormat(
									"numberOfSamples",
									e.totalSamples
								),
								this.metadata.setFormat(
									"codec",
									e.flags.isDSD ? "DSD" : "PCM"
								));
						const t =
							e.blockSize - (l.WavPack.BlockHeaderToken.len - 8);
						0 === e.blockIndex
							? await this.parseMetadataSubBlock(e, t)
							: await this.tokenizer.ignore(t),
							e.blockSamples > 0 &&
								(this.audioDataSize += e.blockSize);
					} while (
						!this.tokenizer.fileSize ||
						this.tokenizer.fileSize - this.tokenizer.position >=
							l.WavPack.BlockHeaderToken.len
					);
					this.metadata.setFormat(
						"bitrate",
						(8 * this.audioDataSize) / this.metadata.format.duration
					);
				}
				async parseMetadataSubBlock(t, a) {
					for (; a > l.WavPack.MetadataIdToken.len; ) {
						const i = await this.tokenizer.readToken(
								l.WavPack.MetadataIdToken
							),
							s = await this.tokenizer.readNumber(
								i.largeBlock ? r.UINT24_LE : r.UINT8
							),
							o = e.alloc(2 * s - (i.isOddSize ? 1 : 0));
						switch (
							(await this.tokenizer.readBuffer(o, 0, o.length),
							c(
								`Metadata Sub-Blocks functionId=0x${i.functionId.toString(
									16
								)}, id.largeBlock=${i.largeBlock},data-size=${
									o.length
								}`
							),
							i.functionId)
						) {
							case 0:
								break;
							case 14:
								c("ID_DSD_BLOCK");
								const e = 1 << o.readUInt8(0),
									a = t.flags.samplingRate * e * 8;
								n.ok(
									t.flags.isDSD,
									"Only expect DSD block if DSD-flag is set"
								),
									this.metadata.setFormat("sampleRate", a),
									this.metadata.setFormat(
										"duration",
										t.totalSamples / a
									);
								break;
							case 36:
								c("ID_ALT_TRAILER: trailer for non-wav files");
								break;
							case 38:
								this.metadata.setFormat("audioMD5", o);
								break;
							case 47:
								c(
									"ID_BLOCK_CHECKSUM: checksum=" +
										o.toString("hex")
								);
								break;
							default:
								c(
									"Ignore unsupported meta-sub-block-id functionId=0x" +
										i.functionId.toString(16)
								);
						}
						(a -=
							l.WavPack.MetadataIdToken.len +
							(i.largeBlock ? r.UINT24_LE.len : r.UINT8.len) +
							2 * s),
							c("remainingLength=" + a),
							i.isOddSize && this.tokenizer.ignore(1);
					}
					n.strictEqual(
						a,
						0,
						"metadata-sub-block should fit it remaining length"
					);
				}
			}
			t.WavPackParser = u;
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(6),
			i = [
				6e3, 8e3, 9600, 11025, 12e3, 16e3, 22050, 24e3, 32e3, 44100,
				48e3, 64e3, 88200, 96e3, 192e3, -1,
			];
		class s {
			static isBitSet(e, t) {
				return 1 === s.getBitAllignedNumber(e, t, 1);
			}
			static getBitAllignedNumber(e, t, a) {
				return (e >>> t) & (4294967295 >>> (32 - a));
			}
		}
		(t.WavPack = s),
			(s.BlockHeaderToken = {
				len: 32,
				get: (e, t) => {
					const a = r.UINT32_LE.get(e, t + 24),
						o = {
							BlockID: n.FourCcToken.get(e, t),
							blockSize: r.UINT32_LE.get(e, t + 4),
							version: r.UINT16_LE.get(e, t + 8),
							totalSamples: r.UINT32_LE.get(e, t + 12),
							blockIndex: r.UINT32_LE.get(e, t + 16),
							blockSamples: r.UINT32_LE.get(e, t + 20),
							flags: {
								bitsPerSample:
									8 * (1 + s.getBitAllignedNumber(a, 0, 2)),
								isMono: s.isBitSet(a, 2),
								isHybrid: s.isBitSet(a, 3),
								isJointStereo: s.isBitSet(a, 4),
								crossChannel: s.isBitSet(a, 5),
								hybridNoiseShaping: s.isBitSet(a, 6),
								floatingPoint: s.isBitSet(a, 7),
								samplingRate:
									i[s.getBitAllignedNumber(a, 23, 4)],
								isDSD: s.isBitSet(a, 31),
							},
							crc: new r.BufferType(4).get(e, t + 28),
						};
					return o.flags.isDSD && (o.totalSamples *= 8), o;
				},
			}),
			(s.MetadataIdToken = {
				len: 1,
				get: (e, t) => ({
					functionId: s.getBitAllignedNumber(e[t], 0, 6),
					isOptional: s.isBitSet(e[t], 5),
					isOddSize: s.isBitSet(e[t], 6),
					largeBlock: s.isBitSet(e[t], 7),
				}),
			});
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(21),
			n = a(5),
			i = a(1),
			s = a(124),
			o = a(15),
			l = i("music-metadata:parser:DSF");
		class c extends r.AbstractID3Parser {
			async _parse() {
				const e = this.tokenizer.position,
					t = await this.tokenizer.readToken(s.ChunkHeader);
				n.strictEqual(t.id, "DSD ", "Invalid chunk signature"),
					this.metadata.setFormat("container", "DSF"),
					this.metadata.setFormat("lossless", !0);
				const a = await this.tokenizer.readToken(s.DsdChunk);
				if (0 !== a.metadataPointer)
					return (
						l("expect ID3v2 at offset=" + a.metadataPointer),
						await this.parseChunks(a.fileSize - t.size),
						await this.tokenizer.ignore(
							a.metadataPointer - this.tokenizer.position - e
						),
						new o.ID3v2Parser().parse(
							this.metadata,
							this.tokenizer,
							this.options
						)
					);
				l("No ID3v2 tag present");
			}
			async parseChunks(e) {
				for (; e >= s.ChunkHeader.len; ) {
					const t = await this.tokenizer.readToken(s.ChunkHeader);
					switch (
						(l(`Parsing chunk name=${t.id} size=${t.size}`), t.id)
					) {
						case "fmt ":
							const e = await this.tokenizer.readToken(
								s.FormatChunk
							);
							this.metadata.setFormat(
								"numberOfChannels",
								e.channelNum
							),
								this.metadata.setFormat(
									"sampleRate",
									e.samplingFrequency
								),
								this.metadata.setFormat(
									"bitsPerSample",
									e.bitsPerSample
								),
								this.metadata.setFormat(
									"numberOfSamples",
									e.sampleCount
								),
								this.metadata.setFormat(
									"duration",
									e.sampleCount / e.samplingFrequency
								);
							const a =
								e.bitsPerSample *
								e.samplingFrequency *
								e.channelNum;
							return void this.metadata.setFormat("bitrate", a);
						default:
							this.tokenizer.ignore(t.size - s.ChunkHeader.len);
					}
					e -= t.size;
				}
			}
		}
		t.DsfParser = c;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(6);
		(t.ChunkHeader = {
			len: 12,
			get: (e, t) => ({
				id: n.FourCcToken.get(e, t),
				size: r.UINT64_LE.get(e, t + 4),
			}),
		}),
			(t.DsdChunk = {
				len: 16,
				get: (e, t) => ({
					fileSize: r.INT64_LE.get(e, t),
					metadataPointer: r.INT64_LE.get(e, t + 8),
				}),
			}),
			(function (e) {
				(e[(e.mono = 1)] = "mono"),
					(e[(e.stereo = 2)] = "stereo"),
					(e[(e.channels = 3)] = "channels"),
					(e[(e.quad = 4)] = "quad"),
					(e[(e["4 channels"] = 5)] = "4 channels"),
					(e[(e["5 channels"] = 6)] = "5 channels"),
					(e[(e["5.1 channels"] = 7)] = "5.1 channels");
			})(t.ChannelType || (t.ChannelType = {})),
			(t.FormatChunk = {
				len: 40,
				get: (e, t) => ({
					formatVersion: r.INT32_LE.get(e, t),
					formatID: r.INT32_LE.get(e, t + 4),
					channelType: r.INT32_LE.get(e, t + 8),
					channelNum: r.INT32_LE.get(e, t + 12),
					samplingFrequency: r.INT32_LE.get(e, t + 16),
					bitsPerSample: r.INT32_LE.get(e, t + 20),
					sampleCount: r.INT64_LE.get(e, t + 24),
					blockSizePerChannel: r.INT32_LE.get(e, t + 32),
				}),
			});
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(5),
			n = a(0),
			i = a(1),
			s = a(6),
			o = a(7),
			l = a(25),
			c = a(126),
			u = a(10),
			d = a(15),
			f = i("music-metadata:parser:aiff");
		class h extends o.BasicParser {
			async parse() {
				const e = await this.tokenizer.readToken(c.ChunkHeader);
				r.strictEqual(e.chunkID, "FRM8");
				const t = (
					await this.tokenizer.readToken(s.FourCcToken)
				).trim();
				switch (t) {
					case "DSD":
						return (
							this.metadata.setFormat("container", "DSDIFF/" + t),
							this.metadata.setFormat("lossless", !0),
							this.readFmt8Chunks(e.chunkSize - s.FourCcToken.len)
						);
					default:
						throw Error("Unsupported DSDIFF type: " + t);
				}
			}
			async readFmt8Chunks(e) {
				for (; e >= c.ChunkHeader.len; ) {
					const t = await this.tokenizer.readToken(c.ChunkHeader);
					f("Chunk id=" + t.chunkID),
						await this.readData(t),
						(e -= c.ChunkHeader.len + t.chunkSize);
				}
			}
			async readData(e) {
				f(
					`Reading data of chunk[ID=${e.chunkID}, size=${e.chunkSize}]`
				);
				const t = this.tokenizer.position;
				switch (e.chunkID.trim()) {
					case "FVER":
						const t = await this.tokenizer.readToken(n.UINT32_LE);
						f("DSDIFF version=" + t);
						break;
					case "PROP":
						const a = await this.tokenizer.readToken(s.FourCcToken);
						r.strictEqual(a, "SND "),
							await this.handleSoundPropertyChunks(
								e.chunkSize - s.FourCcToken.len
							);
						break;
					case "ID3":
						const i = await this.tokenizer.readToken(
								new n.BufferType(e.chunkSize)
							),
							o = new l.ID3Stream(i),
							c = u.fromStream(o);
						await new d.ID3v2Parser().parse(
							this.metadata,
							c,
							this.options
						);
						break;
					default:
						f(`Ignore chunk[ID=${e.chunkID}, size=${e.chunkSize}]`);
						break;
					case "DSD":
						this.metadata.setFormat(
							"numberOfSamples",
							(8 * e.chunkSize) /
								this.metadata.format.numberOfChannels
						),
							this.metadata.setFormat(
								"duration",
								this.metadata.format.numberOfSamples /
									this.metadata.format.sampleRate
							);
				}
				const a = e.chunkSize - (this.tokenizer.position - t);
				a > 0 &&
					(f(`After Parsing chunk, remaining ${a} bytes`),
					await this.tokenizer.ignore(a));
			}
			async handleSoundPropertyChunks(e) {
				for (
					f("Parsing sound-property-chunks, remainingSize=" + e);
					e > 0;

				) {
					const t = await this.tokenizer.readToken(c.ChunkHeader);
					f(
						`Sound-property-chunk[ID=${t.chunkID}, size=${t.chunkSize}]`
					);
					const a = this.tokenizer.position;
					switch (t.chunkID.trim()) {
						case "FS":
							const e = await this.tokenizer.readToken(
								n.UINT32_BE
							);
							this.metadata.setFormat("sampleRate", e);
							break;
						case "CHNL":
							const a = await this.tokenizer.readToken(
								n.UINT16_BE
							);
							this.metadata.setFormat("numberOfChannels", a),
								await this.handleChannelChunks(
									t.chunkSize - n.UINT16_BE.len
								);
							break;
						case "CMPR":
							const r = (
									await this.tokenizer.readToken(
										s.FourCcToken
									)
								).trim(),
								i = await this.tokenizer.readToken(n.UINT8),
								o = await this.tokenizer.readToken(
									new n.StringType(i, "ascii")
								);
							"DSD" === r &&
								(this.metadata.setFormat("lossless", !0),
								this.metadata.setFormat("bitsPerSample", 1)),
								this.metadata.setFormat("codec", `${r} (${o})`);
							break;
						case "ABSS":
							const l = await this.tokenizer.readToken(
									n.UINT16_BE
								),
								c = await this.tokenizer.readToken(n.UINT8),
								u = await this.tokenizer.readToken(n.UINT8),
								d = await this.tokenizer.readToken(n.UINT32_BE);
							f(`ABSS ${l}:${c}:${u}.${d}`);
							break;
						case "LSCO":
							const h = await this.tokenizer.readToken(
								n.UINT16_BE
							);
							f("LSCO lsConfig=" + h);
							break;
						case "COMT":
						default:
							f(
								`Unknown sound-property-chunk[ID=${t.chunkID}, size=${t.chunkSize}]`
							),
								await this.tokenizer.ignore(t.chunkSize);
					}
					const r = t.chunkSize - (this.tokenizer.position - a);
					r > 0 &&
						(f(
							`After Parsing sound-property-chunk ${t.chunkSize}, remaining ${r} bytes`
						),
						await this.tokenizer.ignore(r)),
						(e -= c.ChunkHeader.len + t.chunkSize),
						f("Parsing sound-property-chunks, remainingSize=" + e);
				}
				if (
					this.metadata.format.lossless &&
					this.metadata.format.sampleRate &&
					this.metadata.format.numberOfChannels &&
					this.metadata.format.bitsPerSample
				) {
					const e =
						this.metadata.format.sampleRate *
						this.metadata.format.numberOfChannels *
						this.metadata.format.bitsPerSample;
					this.metadata.setFormat("bitrate", e);
				}
			}
			async handleChannelChunks(e) {
				f("Parsing channel-chunks, remainingSize=" + e);
				const t = [];
				for (; e >= s.FourCcToken.len; ) {
					const a = await this.tokenizer.readToken(s.FourCcToken);
					f(`Channel[ID=${a}]`), t.push(a), (e -= s.FourCcToken.len);
				}
				return f("Channels: " + t.join(", ")), t;
			}
		}
		t.DsdiffParser = h;
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(0),
			n = a(6);
		t.ChunkHeader = {
			len: 12,
			get: (e, t) => ({
				chunkID: n.FourCcToken.get(e, t),
				chunkSize: r.INT64_BE.get(e, t + 4),
			}),
		};
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			const r = a(0),
				n = a(1),
				i = a(7),
				s = a(45),
				o = a(128),
				l = n("music-metadata:parser:matroska");
			class c extends i.BasicParser {
				constructor() {
					super(),
						(this.padding = 0),
						(this.parserMap = new Map()),
						this.parserMap.set(s.DataType.uint, (e) =>
							this.readUint(e)
						),
						this.parserMap.set(s.DataType.string, (e) =>
							this.readString(e)
						),
						this.parserMap.set(s.DataType.binary, (e) =>
							this.readBuffer(e)
						),
						this.parserMap.set(
							s.DataType.uid,
							async (e) => 1 === (await this.readUint(e))
						),
						this.parserMap.set(s.DataType.bool, (e) =>
							this.readFlag(e)
						),
						this.parserMap.set(s.DataType.float, (e) =>
							this.readFloat(e)
						);
				}
				init(e, t, a) {
					return super.init(e, t, a), this;
				}
				async parse() {
					const e = await this.parseContainer(
						o.elements,
						this.tokenizer.fileSize,
						[]
					);
					if (
						(this.metadata.setFormat(
							"container",
							"EBML/" + e.ebml.docType
						),
						e.segment)
					) {
						const t = e.segment.info;
						if (t) {
							const e = t.timecodeScale ? t.timecodeScale : 1e6,
								a = (t.duration * e) / 1e9;
							this.metadata.setFormat("duration", a);
						}
						const a = e.segment.tracks;
						if (a && a.entries) {
							const t = a.entries
								.filter(
									(e) =>
										e.trackType ===
										s.TrackType.audio.valueOf()
								)
								.reduce(
									(e, t) =>
										e
											? (!e.flagDefault &&
													t.flagDefault) ||
											  (t.trackNumber &&
													t.trackNumber <
														e.trackNumber)
												? t
												: e
											: t,
									null
								);
							t &&
								(this.metadata.setFormat(
									"codec",
									t.codecID.replace("A_", "")
								),
								this.metadata.setFormat(
									"sampleRate",
									t.audio.samplingFrequency
								),
								this.metadata.setFormat(
									"numberOfChannels",
									t.audio.channels
								)),
								e.segment.tags &&
									e.segment.tags.tag.forEach((e) => {
										const t = e.target,
											a = t.targetTypeValue
												? s.TargetType[
														t.targetTypeValue
												  ]
												: t.targetType
												? t.targetType
												: s.TargetType.album;
										e.simpleTags.forEach((e) => {
											const t = e.string
												? e.string
												: e.binary;
											this.addTag(`${a}:${e.name}`, t);
										});
									});
						}
					}
				}
				async parseContainer(e, t, a) {
					const r = {};
					for (; this.tokenizer.position < t; ) {
						const t = await this.readElement(),
							n = e[t.id];
						if (n)
							if (n.container) {
								const e = await this.parseContainer(
									n.container,
									this.tokenizer.position + t.len,
									a.concat([n.name])
								);
								n.multiple
									? (r[n.name] || (r[n.name] = []),
									  r[n.name].push(e))
									: (r[n.name] = e);
							} else
								r[n.name] = await this.parserMap.get(n.value)(
									t
								);
						else
							switch (t.id) {
								case 236:
									(this.padding += t.len),
										await this.tokenizer.ignore(t.len);
									break;
								default:
									l(
										`parseEbml: path=${a.join(
											"/"
										)}, unknown element: id=${t.id.toString(
											16
										)}`
									),
										(this.padding += t.len),
										await this.tokenizer.ignore(t.len);
							}
					}
					return r;
				}
				async readVintData() {
					const t = await this.tokenizer.peekNumber(r.UINT8);
					let a = 128,
						n = 1;
					for (; 0 == (t & a); ) ++n, (a >>= 1);
					const i = e.alloc(n);
					return await this.tokenizer.readBuffer(i), i;
				}
				async readElement() {
					const e = await this.readVintData(),
						t = await this.readVintData();
					t[0] ^= 128 >> (t.length - 1);
					const a = Math.min(6, t.length);
					return {
						id: e.readUIntBE(0, e.length),
						len: t.readUIntBE(t.length - a, a),
					};
				}
				async readFloat(e) {
					switch (e.len) {
						case 0:
							return 0;
						case 4:
							return this.tokenizer.readNumber(r.Float32_BE);
						case 8:
						case 10:
							return this.tokenizer.readNumber(r.Float64_BE);
						default:
							throw new Error(
								"Invalid IEEE-754 float length: " + e.len
							);
					}
				}
				async readFlag(e) {
					return 1 === (await this.readUint(e));
				}
				async readUint(e) {
					const t = await this.readBuffer(e),
						a = Math.min(6, e.len);
					return t.readUIntBE(e.len - a, a);
				}
				async readString(e) {
					return this.tokenizer.readToken(
						new r.StringType(e.len, "utf-8")
					);
				}
				async readBuffer(t) {
					const a = e.alloc(t.len);
					return await this.tokenizer.readBuffer(a), a;
				}
				addTag(e, t) {
					this.metadata.addTag("matroska", e, t);
				}
			}
			t.MatroskaParser = c;
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(45);
		t.elements = {
			440786851: {
				name: "ebml",
				container: {
					17030: { name: "ebmlVersion", value: r.DataType.uint },
					17143: { name: "ebmlReadVersion", value: r.DataType.uint },
					17138: { name: "ebmlMaxIDWidth", value: r.DataType.uint },
					17139: { name: "ebmlMaxSizeWidth", value: r.DataType.uint },
					17026: { name: "docType", value: r.DataType.string },
					17031: { name: "docTypeVersion", value: r.DataType.uint },
					17029: {
						name: "docTypeReadVersion",
						value: r.DataType.uint,
					},
				},
			},
			408125543: {
				name: "segment",
				container: {
					290298740: {
						name: "seekHead",
						container: {
							19899: {
								name: "seek",
								container: {
									21419: {
										name: "seekId",
										value: r.DataType.binary,
									},
									21420: {
										name: "seekPosition",
										value: r.DataType.uint,
									},
								},
							},
						},
					},
					357149030: {
						name: "info",
						container: {
							29604: { name: "uid", value: r.DataType.uid },
							29572: {
								name: "filename",
								value: r.DataType.string,
							},
							3979555: { name: "prevUID", value: r.DataType.uid },
							3965867: {
								name: "prevFilename",
								value: r.DataType.string,
							},
							4110627: { name: "nextUID", value: r.DataType.uid },
							4096955: {
								name: "nextFilename",
								value: r.DataType.string,
							},
							2807729: {
								name: "timecodeScale",
								value: r.DataType.uint,
							},
							17545: {
								name: "duration",
								value: r.DataType.float,
							},
							17505: { name: "dateUTC", value: r.DataType.uint },
							31657: { name: "title", value: r.DataType.string },
							19840: {
								name: "muxingApp",
								value: r.DataType.string,
							},
							22337: {
								name: "writingApp",
								value: r.DataType.string,
							},
						},
					},
					524531317: {
						name: "cluster",
						multiple: !0,
						container: {
							231: { name: "timecode", value: r.DataType.uid },
							163: { name: "unknown", value: r.DataType.binary },
							167: { name: "position", value: r.DataType.uid },
							171: { name: "prevSize", value: r.DataType.uid },
						},
					},
					374648427: {
						name: "tracks",
						container: {
							174: {
								name: "entries",
								multiple: !0,
								container: {
									215: {
										name: "trackNumber",
										value: r.DataType.uint,
									},
									29637: {
										name: "uid",
										value: r.DataType.uid,
									},
									131: {
										name: "trackType",
										value: r.DataType.uint,
									},
									185: {
										name: "flagEnabled",
										value: r.DataType.bool,
									},
									136: {
										name: "flagDefault",
										value: r.DataType.bool,
									},
									21930: {
										name: "flagForced",
										value: r.DataType.bool,
									},
									156: {
										name: "flagLacing",
										value: r.DataType.bool,
									},
									28135: {
										name: "minCache",
										value: r.DataType.uint,
									},
									28136: {
										name: "maxCache",
										value: r.DataType.uint,
									},
									2352003: {
										name: "defaultDuration",
										value: r.DataType.uint,
									},
									2306383: {
										name: "timecodeScale",
										value: r.DataType.float,
									},
									21358: {
										name: "name",
										value: r.DataType.string,
									},
									2274716: {
										name: "language",
										value: r.DataType.string,
									},
									134: {
										name: "codecID",
										value: r.DataType.string,
									},
									25506: {
										name: "codecPrivate",
										value: r.DataType.binary,
									},
									2459272: {
										name: "codecName",
										value: r.DataType.string,
									},
									3839639: {
										name: "codecSettings",
										value: r.DataType.string,
									},
									3883072: {
										name: "codecInfoUrl",
										value: r.DataType.string,
									},
									2536e3: {
										name: "codecDownloadUrl",
										value: r.DataType.string,
									},
									170: {
										name: "codecDecodeAll",
										value: r.DataType.bool,
									},
									28587: {
										name: "trackOverlay",
										value: r.DataType.uint,
									},
									224: {
										name: "video",
										container: {
											154: {
												name: "flagInterlaced",
												value: r.DataType.bool,
											},
											21432: {
												name: "stereoMode",
												value: r.DataType.uint,
											},
											176: {
												name: "pixelWidth",
												value: r.DataType.uint,
											},
											186: {
												name: "pixelHeight",
												value: r.DataType.uint,
											},
											21680: {
												name: "displayWidth",
												value: r.DataType.uint,
											},
											21690: {
												name: "displayHeight",
												value: r.DataType.uint,
											},
											21683: {
												name: "aspectRatioType",
												value: r.DataType.uint,
											},
											3061028: {
												name: "colourSpace",
												value: r.DataType.uint,
											},
											3126563: {
												name: "gammaValue",
												value: r.DataType.float,
											},
										},
									},
									225: {
										name: "audio",
										container: {
											181: {
												name: "samplingFrequency",
												value: r.DataType.float,
											},
											30901: {
												name: "outputSamplingFrequency",
												value: r.DataType.float,
											},
											159: {
												name: "channels",
												value: r.DataType.uint,
											},
											148: {
												name: "channels",
												value: r.DataType.uint,
											},
											32123: {
												name: "channelPositions",
												value: r.DataType.binary,
											},
											25188: {
												name: "bitDepth",
												value: r.DataType.uint,
											},
										},
									},
									28032: {
										name: "contentEncodings",
										container: {
											25152: {
												name: "contentEncoding",
												container: {
													20529: {
														name: "order",
														value: r.DataType.uint,
													},
													20530: {
														name: "scope",
														value: r.DataType.bool,
													},
													20531: {
														name: "type",
														value: r.DataType.uint,
													},
													20532: {
														name: "contentEncoding",
														container: {
															16980: {
																name: "contentCompAlgo",
																value: r
																	.DataType
																	.uint,
															},
															16981: {
																name: "contentCompSettings",
																value: r
																	.DataType
																	.binary,
															},
														},
													},
													20533: {
														name: "contentEncoding",
														container: {
															18401: {
																name: "contentEncAlgo",
																value: r
																	.DataType
																	.uint,
															},
															18402: {
																name: "contentEncKeyID",
																value: r
																	.DataType
																	.binary,
															},
															18403: {
																name: "contentSignature ",
																value: r
																	.DataType
																	.binary,
															},
															18404: {
																name: "ContentSigKeyID  ",
																value: r
																	.DataType
																	.binary,
															},
															18405: {
																name: "contentSigAlgo ",
																value: r
																	.DataType
																	.uint,
															},
															18406: {
																name: "contentSigHashAlgo ",
																value: r
																	.DataType
																	.uint,
															},
														},
													},
													25188: {
														name: "bitDepth",
														value: r.DataType.uint,
													},
												},
											},
										},
									},
								},
							},
						},
					},
					475249515: {
						name: "cues",
						container: {
							187: {
								name: "cuePoint",
								container: {
									179: {
										name: "cueTime",
										value: r.DataType.uid,
									},
									183: {
										name: "positions",
										container: {
											247: {
												name: "track",
												value: r.DataType.uint,
											},
											241: {
												name: "clusterPosition",
												value: r.DataType.uint,
											},
											21368: {
												name: "blockNumber",
												value: r.DataType.uint,
											},
											234: {
												name: "codecState",
												value: r.DataType.uint,
											},
											219: {
												name: "reference",
												container: {
													150: {
														name: "time",
														value: r.DataType.uint,
													},
													151: {
														name: "cluster",
														value: r.DataType.uint,
													},
													21343: {
														name: "number",
														value: r.DataType.uint,
													},
													235: {
														name: "codecState",
														value: r.DataType.uint,
													},
												},
											},
											240: {
												name: "relativePosition",
												value: r.DataType.uint,
											},
										},
									},
								},
							},
						},
					},
					423732329: {
						name: "attachments",
						container: {
							24999: {
								name: "attachedFile",
								container: {
									18046: {
										name: "description",
										value: r.DataType.uid,
									},
									18030: {
										name: "name",
										value: r.DataType.string,
									},
									18016: {
										name: "mimeType",
										value: r.DataType.string,
									},
									18012: {
										name: "data",
										value: r.DataType.binary,
									},
									18094: {
										name: "uid",
										value: r.DataType.uid,
									},
								},
							},
						},
					},
					272869232: {
						name: "chapters",
						container: {
							17849: {
								name: "editionEntry",
								container: {
									182: {
										name: "chapterAtom",
										container: {
											29636: {
												name: "uid",
												value: r.DataType.uid,
											},
											145: {
												name: "timeStart",
												value: r.DataType.uint,
											},
											146: {
												name: "timeEnd",
												value: r.DataType.uid,
											},
											152: {
												name: "hidden",
												value: r.DataType.bool,
											},
											17816: {
												name: "enabled",
												value: r.DataType.uid,
											},
											143: {
												name: "track",
												container: {
													137: {
														name: "trackNumber",
														value: r.DataType.uid,
													},
													128: {
														name: "display",
														container: {
															133: {
																name: "string",
																value: r
																	.DataType
																	.string,
															},
															17276: {
																name: "language ",
																value: r
																	.DataType
																	.string,
															},
															17278: {
																name: "country ",
																value: r
																	.DataType
																	.string,
															},
														},
													},
												},
											},
										},
									},
								},
							},
						},
					},
					307544935: {
						name: "tags",
						container: {
							29555: {
								name: "tag",
								multiple: !0,
								container: {
									25536: {
										name: "target",
										container: {
											25541: {
												name: "tagTrackUID",
												value: r.DataType.uid,
											},
											25540: {
												name: "tagChapterUID",
												value: r.DataType.uint,
											},
											25542: {
												name: "tagAttachmentUID",
												value: r.DataType.uid,
											},
											25546: {
												name: "targetType",
												value: r.DataType.string,
											},
											26826: {
												name: "targetTypeValue",
												value: r.DataType.uint,
											},
											25545: {
												name: "tagEditionUID",
												value: r.DataType.uid,
											},
										},
									},
									26568: {
										name: "simpleTags",
										multiple: !0,
										container: {
											17827: {
												name: "name",
												value: r.DataType.string,
											},
											17543: {
												name: "string",
												value: r.DataType.string,
											},
											17541: {
												name: "binary",
												value: r.DataType.binary,
											},
											17530: {
												name: "language",
												value: r.DataType.string,
											},
											17531: {
												name: "languageIETF",
												value: r.DataType.string,
											},
											17540: {
												name: "default",
												value: r.DataType.bool,
											},
										},
									},
								},
							},
						},
					},
				},
			},
		};
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		t.RandomBufferReader = class {
			constructor(e) {
				(this.buf = e), (this.fileSize = e.length);
			}
			async randomRead(e, t, a, r) {
				return this.buf.copy(e, t, r, r + a);
			}
		};
	},
	function (e, t, a) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.endTag2 = "LYRICS200"),
				(t.getLyricsHeaderLength = async function (a) {
					if (a.fileSize >= 143) {
						const r = e.alloc(15);
						await a.randomRead(r, 0, r.length, a.fileSize - 143);
						const n = r.toString("binary");
						if (n.substr(6) === t.endTag2)
							return parseInt(n.substr(0, 6), 10) + 15;
					}
					return 0;
				});
		}.call(this, a(2).Buffer));
	},
	function (e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		const r = a(35);
		class n extends r.Readable {
			constructor(e) {
				super(),
					(this.bytesRead = 0),
					(this.released = !1),
					(this.reader = e.getReader());
			}
			async _read() {
				if (this.released) return void this.push(null);
				this.pendingRead = this.reader.read();
				const e = await this.pendingRead;
				delete this.pendingRead,
					e.done || this.released
						? this.push(null)
						: ((this.bytesRead += e.value.length),
						  this.push(e.value));
			}
			async waitForReadToComplete() {
				this.pendingRead && (await this.pendingRead);
			}
			async close() {
				await this.syncAndRelease();
			}
			async syncAndRelease() {
				(this.released = !0),
					await this.waitForReadToComplete(),
					await this.reader.releaseLock();
			}
		}
		t.ReadableWebToNodeStream = n;
	},
	function (e, t, a) {
		(function (t) {
			var r = a(133).strict;
			e.exports = function (e) {
				if (r(e)) {
					var a = t.from(e.buffer);
					return (
						e.byteLength !== e.buffer.byteLength &&
							(a = a.slice(
								e.byteOffset,
								e.byteOffset + e.byteLength
							)),
						a
					);
				}
				return t.from(e);
			};
		}.call(this, a(2).Buffer));
	},
	function (e, t) {
		(e.exports = n), (n.strict = i), (n.loose = s);
		var a = Object.prototype.toString,
			r = {
				"[object Int8Array]": !0,
				"[object Int16Array]": !0,
				"[object Int32Array]": !0,
				"[object Uint8Array]": !0,
				"[object Uint8ClampedArray]": !0,
				"[object Uint16Array]": !0,
				"[object Uint32Array]": !0,
				"[object Float32Array]": !0,
				"[object Float64Array]": !0,
			};
		function n(e) {
			return i(e) || s(e);
		}
		function i(e) {
			return (
				e instanceof Int8Array ||
				e instanceof Int16Array ||
				e instanceof Int32Array ||
				e instanceof Uint8Array ||
				e instanceof Uint8ClampedArray ||
				e instanceof Uint16Array ||
				e instanceof Uint32Array ||
				e instanceof Float32Array ||
				e instanceof Float64Array
			);
		}
		function s(e) {
			return r[a.call(e)];
		}
	},
	function (e, t) {
		Element.prototype.scrollIntoViewIfNeeded ||
			(Element.prototype.scrollIntoViewIfNeeded = function (e) {
				e = 0 === arguments.length || !!e;
				var t = this.parentNode,
					a = window.getComputedStyle(t, null),
					r = parseInt(a.getPropertyValue("border-top-width")),
					n = parseInt(a.getPropertyValue("border-left-width")),
					i = this.offsetTop - t.offsetTop < t.scrollTop,
					s =
						this.offsetTop - t.offsetTop + this.clientHeight - r >
						t.scrollTop + t.clientHeight,
					o = this.offsetLeft - t.offsetLeft < t.scrollLeft,
					l =
						this.offsetLeft - t.offsetLeft + this.clientWidth - n >
						t.scrollLeft + t.clientWidth,
					c = i && !s;
				(i || s) &&
					e &&
					(t.scrollTop =
						this.offsetTop -
						t.offsetTop -
						t.clientHeight / 2 -
						r +
						this.clientHeight / 2),
					(o || l) &&
						e &&
						(t.scrollLeft =
							this.offsetLeft -
							t.offsetLeft -
							t.clientWidth / 2 -
							n +
							this.clientWidth / 2),
					(i || s || o || l) && !e && this.scrollIntoView(c);
			});
	},
	function (e, t, a) {},
	function (e, t, a) {},
	function (e, t, a) {
		"use strict";
		a.r(t);
		class r {
			constructor(e, t = {}) {
				(this._ready = !1),
					(this._gradients = {
						classic: {
							bgColor: "#111",
							colorStops: [
								"hsl( 0, 100%, 50% )",
								{ pos: 0.6, color: "hsl( 60, 100%, 50% )" },
								"hsl( 120, 100%, 50% )",
							],
						},
						prism: {
							bgColor: "#111",
							colorStops: [
								"hsl( 0, 100%, 50% )",
								"hsl( 60, 100%, 50% )",
								"hsl( 120, 100%, 50% )",
								"hsl( 180, 100%, 50% )",
								"hsl( 240, 100%, 50% )",
							],
						},
						rainbow: {
							bgColor: "#111",
							dir: "h",
							colorStops: [
								"hsl( 0, 100%, 50% )",
								"hsl( 60, 100%, 50% )",
								"hsl( 120, 100%, 50% )",
								"hsl( 180, 100%, 47% )",
								"hsl( 240, 100%, 58% )",
								"hsl( 300, 100%, 50% )",
								"hsl( 360, 100%, 50% )",
							],
						},
					}),
					(this._container = e || document.body),
					(this._defaultWidth = this._container.clientWidth || 640),
					(this._defaultHeight = this._container.clientHeight || 270);
				const a = window.AudioContext || window.webkitAudioContext;
				if (t.hasOwnProperty("audioCtx")) {
					if (!(t.audioCtx instanceof a))
						throw new n(
							"ERR_INVALID_AUDIO_CONTEXT",
							"Provided audio context is not valid"
						);
					this._audioCtx = t.audioCtx;
				} else
					try {
						this._audioCtx = new a();
					} catch (e) {
						throw new n(
							"ERR_AUDIO_CONTEXT_FAIL",
							"Could not create audio context. Web Audio API not supported?"
						);
					}
				(this._analyzer = [
					this._audioCtx.createAnalyser(),
					this._audioCtx.createAnalyser(),
				]),
					(this._splitter = this._audioCtx.createChannelSplitter(2)),
					(this._merger = this._audioCtx.createChannelMerger(2)),
					(this._input = this._audioCtx.createGain()),
					(this._output = this._audioCtx.createGain()),
					(this._sources = []),
					t.source && this.connectInput(t.source);
				for (let e = 0; e < 2; e++)
					this._splitter.connect(this._analyzer[e], e),
						this._analyzer[e].connect(this._merger, 0, e);
				this._merger.connect(this._output),
					this.connectOutput(),
					(this._energy = { val: 0, peak: 0, hold: 0 }),
					(this._canvas = document.createElement("canvas")),
					(this._canvas.style = "max-width: 100%;"),
					this._container.appendChild(this._canvas),
					(this._canvasCtx = this._canvas.getContext("2d")),
					(this._scaleX = document.createElement("canvas")),
					(this._scaleR = document.createElement("canvas"));
				const r = () => {
					this._fsTimeout ||
						(this._fsTimeout = window.setTimeout(() => {
							this._fsChanging ||
								(this._setCanvas("resize"),
								(this._fsTimeout = 0));
						}, 60));
				};
				if (window.ResizeObserver) {
					new ResizeObserver(r).observe(this._container);
				}
				window.addEventListener("resize", r),
					this._canvas.addEventListener("fullscreenchange", () => {
						(this._fsChanging = !0),
							this._fsTimeout &&
								window.clearTimeout(this._fsTimeout),
							this._setCanvas("fschange"),
							(this._fsTimeout = window.setTimeout(() => {
								(this._fsChanging = !1), (this._fsTimeout = 0);
							}, 60));
					});
				const i = () => {
					"suspended" == this._audioCtx.state &&
						this._audioCtx.resume(),
						window.removeEventListener("click", i);
				};
				window.addEventListener("click", i),
					this._calcAux(),
					this._setProps(t, !0),
					(this._ready = !0),
					this._setCanvas("create");
			}
			get barSpace() {
				return this._barSpace;
			}
			set barSpace(e) {
				(this._barSpace = Number(e) || 0), this._calcAux();
			}
			get fftSize() {
				return this._analyzer[0].fftSize;
			}
			set fftSize(e) {
				for (let t = 0; t < 2; t++) this._analyzer[t].fftSize = e;
				(this._dataArray = new Uint8Array(
					this._analyzer[0].frequencyBinCount
				)),
					this._calcBars();
			}
			get gradient() {
				return this._gradient;
			}
			set gradient(e) {
				if (!this._gradients.hasOwnProperty(e))
					throw new n(
						"ERR_UNKNOWN_GRADIENT",
						`Unknown gradient: '${e}'`
					);
				this._gradient = e;
			}
			get height() {
				return this._height;
			}
			set height(e) {
				(this._height = e), this._setCanvas("user");
			}
			get width() {
				return this._width;
			}
			set width(e) {
				(this._width = e), this._setCanvas("user");
			}
			get mode() {
				return this._mode;
			}
			set mode(e) {
				const t = 0 | e;
				if (!(t >= 0 && t <= 10 && 9 != t))
					throw new n("ERR_INVALID_MODE", "Invalid mode: " + e);
				(this._mode = t),
					this._calcAux(),
					this._calcBars(),
					this._makeGrads();
			}
			get loRes() {
				return this._loRes;
			}
			set loRes(e) {
				(this._loRes = !!e), this._setCanvas("lores");
			}
			get lumiBars() {
				return this._lumiBars;
			}
			set lumiBars(e) {
				(this._lumiBars = !!e),
					this._calcAux(),
					this._calcLeds(),
					this._makeGrads();
			}
			get radial() {
				return this._radial;
			}
			set radial(e) {
				(this._radial = !!e),
					this._calcAux(),
					this._calcLeds(),
					this._makeGrads();
			}
			get spinSpeed() {
				return this._spinSpeed;
			}
			set spinSpeed(e) {
				(e = Number(e) || 0),
					(void 0 !== this._spinSpeed && 0 != e) ||
						(this._spinAngle = -Math.PI / 2),
					(this._spinSpeed = e);
			}
			get reflexRatio() {
				return this._reflexRatio;
			}
			set reflexRatio(e) {
				if ((e = Number(e) || 0) < 0 || e >= 1)
					throw new n(
						"ERR_REFLEX_OUT_OF_RANGE",
						"Reflex ratio must be >= 0 and < 1"
					);
				(this._reflexRatio = e),
					this._calcAux(),
					this._makeGrads(),
					this._calcLeds();
			}
			get minFreq() {
				return this._minFreq;
			}
			set minFreq(e) {
				if (e < 1)
					throw new n(
						"ERR_FREQUENCY_TOO_LOW",
						"Frequency values must be >= 1"
					);
				(this._minFreq = e), this._calcBars();
			}
			get maxFreq() {
				return this._maxFreq;
			}
			set maxFreq(e) {
				if (e < 1)
					throw new n(
						"ERR_FREQUENCY_TOO_LOW",
						"Frequency values must be >= 1"
					);
				(this._maxFreq = e), this._calcBars();
			}
			get minDecibels() {
				return this._analyzer[0].minDecibels;
			}
			set minDecibels(e) {
				for (let t = 0; t < 2; t++) this._analyzer[t].minDecibels = e;
			}
			get maxDecibels() {
				return this._analyzer[0].maxDecibels;
			}
			set maxDecibels(e) {
				for (let t = 0; t < 2; t++) this._analyzer[t].maxDecibels = e;
			}
			get showLeds() {
				return this._showLeds;
			}
			set showLeds(e) {
				(this._showLeds = !!e), this._calcAux();
			}
			get smoothing() {
				return this._analyzer[0].smoothingTimeConstant;
			}
			set smoothing(e) {
				for (let t = 0; t < 2; t++)
					this._analyzer[t].smoothingTimeConstant = e;
			}
			get splitGradient() {
				return this._splitGradient;
			}
			set splitGradient(e) {
				(this._splitGradient = !!e), this._makeGrads();
			}
			get stereo() {
				return this._stereo;
			}
			set stereo(e) {
				(this._stereo = !!e),
					this._input.disconnect(),
					this._analyzer[0].disconnect(),
					this._input.connect(
						this._stereo ? this._splitter : this._analyzer[0]
					),
					this._analyzer[0].connect(
						this._stereo ? this._merger : this._output
					),
					this._calcAux(),
					this._createScales(),
					this._calcLeds(),
					this._makeGrads();
			}
			get volume() {
				return this._output.gain.value;
			}
			set volume(e) {
				this._output.gain.value = e;
			}
			get audioCtx() {
				return this._audioCtx;
			}
			get canvas() {
				return this._canvas;
			}
			get canvasCtx() {
				return this._canvasCtx;
			}
			get connectedSources() {
				return this._sources;
			}
			get energy() {
				return this._energy.val;
			}
			get fsWidth() {
				return this._fsWidth;
			}
			get fsHeight() {
				return this._fsHeight;
			}
			get fps() {
				return this._fps;
			}
			get isFullscreen() {
				return (
					(document.fullscreenElement ||
						document.webkitFullscreenElement) === this._canvas
				);
			}
			get isOctaveBands() {
				return this._isOctaveBands;
			}
			get isLedDisplay() {
				return this._isLedDisplay;
			}
			get isLumiBars() {
				return this._isLumiBars;
			}
			get isOn() {
				return void 0 !== this._runId;
			}
			get peakEnergy() {
				return this._energy.peak;
			}
			get pixelRatio() {
				return this._pixelRatio;
			}
			static get version() {
				return "3.0.0";
			}
			connectInput(e) {
				const t = e instanceof HTMLMediaElement;
				if (!(t || e instanceof AudioNode))
					throw new n(
						"ERR_INVALID_AUDIO_SOURCE",
						"Audio source must be an instance of HTMLMediaElement or AudioNode"
					);
				const a = t ? this._audioCtx.createMediaElementSource(e) : e;
				return (
					this._sources.includes(a) ||
						(a.connect(this._input), this._sources.push(a)),
					a
				);
			}
			disconnectInput(e) {
				e
					? Array.isArray(e) || (e = [e])
					: (e = Array.from(this._sources));
				for (const t of e) {
					const e = this._sources.indexOf(t);
					e >= 0 &&
						(t.disconnect(this._input), this._sources.splice(e, 1));
				}
			}
			connectOutput(e = this._audioCtx.destination) {
				this._output.connect(e);
			}
			disconnectOutput(e) {
				this._output.disconnect(e);
			}
			registerGradient(e, t) {
				if ("string" != typeof e || 0 == e.trim().length)
					throw new n(
						"ERR_GRADIENT_INVALID_NAME",
						"Gradient name must be a non-empty string"
					);
				if ("object" != typeof t)
					throw new n(
						"ERR_GRADIENT_NOT_AN_OBJECT",
						"Gradient options must be an object"
					);
				if (void 0 === t.colorStops || t.colorStops.length < 2)
					throw new n(
						"ERR_GRADIENT_MISSING_COLOR",
						"Gradient must define at least two colors"
					);
				(this._gradients[e] = {}),
					void 0 !== t.bgColor
						? (this._gradients[e].bgColor = t.bgColor)
						: (this._gradients[e].bgColor = "#111"),
					void 0 !== t.dir && (this._gradients[e].dir = t.dir),
					(this._gradients[e].colorStops = t.colorStops),
					this._makeGrads();
			}
			setCanvasSize(e, t) {
				(this._width = e), (this._height = t), this._setCanvas("user");
			}
			setFreqRange(e, t) {
				if (e < 1 || t < 1)
					throw new n(
						"ERR_FREQUENCY_TOO_LOW",
						"Frequency values must be >= 1"
					);
				(this._minFreq = Math.min(e, t)),
					(this._maxFreq = Math.max(e, t)),
					this._calcBars();
			}
			setOptions(e) {
				this._setProps(e);
			}
			setSensitivity(e, t) {
				for (let a = 0; a < 2; a++)
					(this._analyzer[a].minDecibels = Math.min(e, t)),
						(this._analyzer[a].maxDecibels = Math.max(e, t));
			}
			toggleAnalyzer(e) {
				const t = this.isOn;
				return (
					void 0 === e && (e = !t),
					t && !e
						? (cancelAnimationFrame(this._runId),
						  (this._runId = void 0))
						: !t &&
						  e &&
						  ((this._frame = this._fps = 0),
						  (this._time = performance.now()),
						  (this._runId = requestAnimationFrame((e) =>
								this._draw(e)
						  ))),
					this.isOn
				);
			}
			toggleFullscreen() {
				this.isFullscreen
					? document.exitFullscreen
						? document.exitFullscreen()
						: document.webkitExitFullscreen &&
						  document.webkitExitFullscreen()
					: this._canvas.requestFullscreen
					? this._canvas.requestFullscreen()
					: this._canvas.webkitRequestFullscreen &&
					  this._canvas.webkitRequestFullscreen();
			}
			_calcAux() {
				(this._radius =
					(this._canvas.height * (this._stereo ? 0.375 : 0.125)) | 0),
					(this._barSpacePx = Math.min(
						this._barWidth - 1,
						this._barSpace > 0 && this._barSpace < 1
							? this._barWidth * this._barSpace
							: this._barSpace
					)),
					(this._isOctaveBands = this._mode % 10 != 0),
					(this._isLedDisplay =
						this._showLeds && this._isOctaveBands && !this._radial),
					(this._isLumiBars =
						this._lumiBars && this._isOctaveBands && !this._radial),
					(this._maximizeLeds =
						!this._stereo ||
						(this._reflexRatio > 0 && !this._isLumiBars));
				const e = this._stereo && !this._radial;
				(this._channelHeight =
					(this._canvas.height -
						(e && !this._isLedDisplay ? 0.5 : 0)) >>
					e),
					(this._analyzerHeight =
						(this._channelHeight *
							(this._isLumiBars || this._radial
								? 1
								: 1 - this._reflexRatio)) |
						0),
					(this._channelGap = e
						? this._canvas.height - 2 * this._channelHeight
						: 0);
			}
			_calcLeds() {
				if (!this._isOctaveBands || !this._ready) return;
				let e,
					t = this._analyzerHeight,
					a = Math.min(6, (t / (90 * this._pixelRatio)) | 0);
				switch (this._mode) {
					case 8:
						(a = Math.min(16, (t / (33 * this._pixelRatio)) | 0)),
							(e = 24);
						break;
					case 7:
						(a = Math.min(8, (t / (67 * this._pixelRatio)) | 0)),
							(e = 48);
						break;
					case 6:
						e = 64;
						break;
					case 5:
					case 4:
						e = 80;
						break;
					case 3:
						e = 96;
						break;
					case 2:
						(a = Math.min(4, (t / (135 * this._pixelRatio)) | 0)),
							(e = 128);
						break;
					case 1:
						(a = Math.min(
							3,
							Math.max(2, (t / (180 * this._pixelRatio)) | 0)
						)),
							(e = 128);
				}
				(a = Math.max(a, 1) * this._pixelRatio),
					this._maximizeLeds && (t += a),
					(e = Math.min(e, (t / (2 * a)) | 0)),
					(this._leds = {
						nLeds: e,
						spaceH:
							this._barWidth *
							(1 == this._mode
								? 0.45
								: this._mode < 5
								? 0.225
								: 0.125),
						spaceV: a,
						ledHeight: t / e - a,
					});
			}
			_draw(e) {
				const t = this._canvas,
					a = this._canvasCtx,
					r = this._isOctaveBands,
					n = this._isLedDisplay,
					i = this._isLumiBars,
					s = this._channelHeight,
					o = this._channelGap,
					l = this._analyzerHeight,
					c = t.width >> 1,
					u = t.height >> 1,
					d = this._radius,
					f = 2 * Math.PI;
				this._energy.val > 0 &&
					(this._spinAngle += (this._spinSpeed * f) / 3600);
				const h = (e, a) => {
						const r = d + a,
							n = f * (e / t.width) + this._spinAngle;
						return [c + r * Math.cos(n), u + r * Math.sin(n)];
					},
					p = (e, t, r, n) => {
						a.moveTo(...h(e, t)),
							a.lineTo(...h(e, t + n)),
							a.lineTo(...h(e + r, t + n)),
							a.lineTo(...h(e + r, t));
					},
					m =
						!this.showBgColor || (n && !this.overlay)
							? "#000"
							: this._gradients[this._gradient].bgColor;
				let g =
					this._barWidth -
					(r
						? Math.max(n ? this._leds.spaceH : 0, this._barSpacePx)
						: 0);
				0 != this._barSpace || n || (g |= 0);
				let b = 0;
				const v = this._bars.length;
				for (let e = 0; e < this._stereo + 1; e++) {
					const r = s * e + o * e,
						y = r + s,
						w =
							r +
							l -
							(n && !this._maximizeLeds ? this._leds.spaceV : 0);
					if (
						(this.overlay && a.clearRect(0, r - o, t.width, s + o),
						(this.overlay && !this.showBgColor) ||
							(this.overlay && (a.globalAlpha = this.bgAlpha),
							(a.fillStyle = m),
							(this._radial && 0 != e) ||
								a.fillRect(
									0,
									r - o,
									t.width,
									(this.overlay && 1 == this.reflexAlpha
										? l
										: s) + o
								),
							(a.globalAlpha = 1)),
						this.showScaleY && !i && !this._radial)
					) {
						const e = this._scaleX.height,
							n = e >> 1,
							i =
								l /
								(this._analyzer[0].maxDecibels -
									this._analyzer[0].minDecibels);
						(a.fillStyle = "#888"),
							(a.font = n + "px sans-serif"),
							(a.textAlign = "right"),
							(a.lineWidth = 1);
						for (
							let s = this._analyzer[0].maxDecibels;
							s > this._analyzer[0].minDecibels;
							s -= 5
						) {
							const o =
									r + (this._analyzer[0].maxDecibels - s) * i,
								l = (s % 2 == 0) | 0;
							if (l) {
								const i = o + n * (o == r ? 0.8 : 0.35);
								a.fillText(s, 0.85 * e, i),
									a.fillText(s, t.width - 0.1 * e, i),
									(a.strokeStyle = "#888"),
									a.setLineDash([2, 4]),
									(a.lineDashOffset = 0);
							} else
								(a.strokeStyle = "#555"),
									a.setLineDash([2, 8]),
									(a.lineDashOffset = 1);
							a.beginPath(),
								a.moveTo(e * l, 0.5 + ~~o),
								a.lineTo(t.width - e * l, 0.5 + ~~o),
								a.stroke();
						}
						a.setLineDash([]), (a.lineDashOffset = 0);
					}
					n &&
						(a.setLineDash([
							this._leds.ledHeight,
							this._leds.spaceV,
						]),
						(a.lineWidth = g)),
						(a.fillStyle = a.strokeStyle =
							this._gradients[this._gradient].gradient),
						this._analyzer[e].getByteFrequencyData(this._dataArray),
						a.beginPath();
					for (let t = 0; t < v; t++) {
						let s = this._bars[t],
							o = 0;
						if (0 == s.endIdx) {
							if (((o = this._dataArray[s.dataIdx]), s.factor)) {
								const e = s.dataIdx
									? this._dataArray[s.dataIdx - 1]
									: o;
								o = e + (o - e) * s.factor;
							}
						} else
							for (let e = s.dataIdx; e <= s.endIdx; e++)
								o = Math.max(o, this._dataArray[e]);
						(o /= 255),
							(b += o),
							i && (a.globalAlpha = o),
							n
								? ((o =
										((o * this._leds.nLeds) | 0) *
											(this._leds.ledHeight +
												this._leds.spaceV) -
										this._leds.spaceV),
								  o < 0 && (o = 0))
								: (o = (o * (this._radial ? u - d : l)) | 0),
							o >= s.peak[e] &&
								((s.peak[e] = o),
								(s.hold[e] = 30),
								(s.accel[e] = 0)),
							this._radial && 1 == e && (o *= -1);
						let c = s.posX,
							f = g;
						if (10 == this._mode)
							this._radial
								? (0 == t &&
										s.dataIdx &&
										s.posX &&
										a.lineTo(
											...h(
												0,
												(this._dataArray[
													s.dataIdx - 1
												] /
													255) *
													(u - d) *
													(1 == e ? -1 : 1)
											)
										),
								  s.posX >= 0 && a.lineTo(...h(s.posX, o)))
								: (0 == t &&
										(a.moveTo(-this.lineWidth, w),
										s.dataIdx &&
											a.lineTo(
												-this.lineWidth,
												w -
													(this._dataArray[
														s.dataIdx - 1
													] /
														255) *
														l
											)),
								  a.lineTo(s.posX, w - o));
						else if (
							(this._mode > 0 &&
								(n
									? (c += Math.max(
											this._leds.spaceH / 2,
											this._barSpacePx / 2
									  ))
									: 0 == this._barSpace
									? ((c |= 0),
									  t > 0 &&
											c > this._bars[t - 1].posX + g &&
											(c--, f++))
									: (c += this._barSpacePx / 2)),
							n)
						) {
							const e = c + g / 2;
							if (this.showBgColor && !this.overlay) {
								const t = a.globalAlpha;
								a.beginPath(),
									a.moveTo(e, r),
									a.lineTo(e, w),
									(a.strokeStyle = "#7f7f7f22"),
									(a.globalAlpha = 1),
									a.stroke(),
									(a.strokeStyle = a.fillStyle),
									(a.globalAlpha = t);
							}
							a.beginPath(),
								a.moveTo(e, i ? r : w),
								a.lineTo(e, i ? y : w - o),
								a.stroke();
						} else
							this._radial
								? s.posX >= 0 && p(c, 0, f, o)
								: a.fillRect(c, i ? r : w, f, i ? y : -o);
						if (s.peak[e] > 1) {
							if (this.showPeaks && !i)
								if (n) {
									const t =
											((s.peak[e] /
												(l + this._leds.spaceV)) *
												this._leds.nLeds) |
											0,
										n =
											(this._leds.nLeds - t - 1) *
											(this._leds.ledHeight +
												this._leds.spaceV);
									a.fillRect(
										c,
										r + n,
										g,
										this._leds.ledHeight
									);
								} else
									this._radial
										? 10 != this.mode &&
										  s.posX >= 0 &&
										  p(
												c,
												s.peak[e] * (1 == e ? -1 : 1),
												f,
												-2
										  )
										: a.fillRect(c, w - s.peak[e], f, 2);
							s.hold[e]
								? s.hold[e]--
								: (s.accel[e]++, (s.peak[e] -= s.accel[e]));
						}
					}
					if (
						((a.globalAlpha = 1),
						10 == this._mode
							? (this._radial
									? a.closePath()
									: a.lineTo(t.width + this.lineWidth, w),
							  this.lineWidth > 0 &&
									((a.lineWidth = this.lineWidth),
									a.stroke()),
							  this.fillAlpha > 0 &&
									(this._radial &&
										(a.moveTo(c + d, u),
										a.arc(c, u, d, 0, f, !0)),
									(a.globalAlpha = this.fillAlpha),
									a.fill(),
									(a.globalAlpha = 1)))
							: this._radial && a.fill(),
						this._reflexRatio > 0 && !i)
					) {
						let n, i;
						this.reflexFit || this._stereo
							? ((n = this._stereo && 0 == e ? s + o : 0),
							  (i = s - l))
							: ((n = t.height - 2 * l), (i = l)),
							(a.globalAlpha = this.reflexAlpha),
							1 != this.reflexBright &&
								(a.filter = `brightness(${this.reflexBright})`),
							a.setTransform(1, 0, 0, -1, 0, t.height),
							a.drawImage(t, 0, r, t.width, l, 0, n, t.width, i),
							a.setTransform(1, 0, 0, 1, 0, 0),
							(a.filter = "none"),
							(a.globalAlpha = 1);
					}
				}
				(this._energy.val = b / (v << this._stereo)),
					this._energy.val >= this._energy.peak
						? ((this._energy.peak = this._energy.val),
						  (this._energy.hold = 30))
						: this._energy.hold > 0
						? this._energy.hold--
						: this._energy.peak > 0 &&
						  (this._energy.peak *=
								(30 + this._energy.hold--) / 30),
					a.setLineDash([]),
					this.showScaleX &&
						(this._radial
							? (a.save(),
							  a.translate(c, u),
							  0 != this._spinSpeed &&
									a.rotate(this._spinAngle + Math.PI / 2),
							  a.drawImage(
									this._scaleR,
									-this._scaleR.width >> 1,
									-this._scaleR.width >> 1
							  ),
							  a.restore())
							: a.drawImage(
									this._scaleX,
									0,
									t.height - this._scaleX.height
							  )),
					this._frame++;
				const y = e - this._time;
				if (
					(y >= 1e3 &&
						((this._fps = this._frame / (y / 1e3)),
						(this._frame = 0),
						(this._time = e)),
					this.showFPS)
				) {
					const e = 20 * this._pixelRatio;
					(a.font = `bold ${e}px sans-serif`),
						(a.fillStyle = "#0f0"),
						(a.textAlign = "right"),
						a.fillText(Math.round(this._fps), t.width - e, 2 * e);
				}
				this.onCanvasDraw &&
					(a.save(),
					(a.fillStyle = a.strokeStyle =
						this._gradients[this._gradient].gradient),
					this.onCanvasDraw(this),
					a.restore()),
					(this._runId = requestAnimationFrame((e) => this._draw(e)));
			}
			_makeGrads() {
				this._isOctaveBands;
				const e = this._isLumiBars,
					t = e
						? this._canvas.height
						: (this._canvas.height *
								(1 - this._reflexRatio * !this._stereo)) |
						  0,
					a = 1 - this._reflexRatio,
					r = this._canvas.width >> 1,
					n = this._canvas.height >> 1,
					i = this._radius;
				Object.keys(this._gradients).forEach((s) => {
					const o = "h" == this._gradients[s].dir;
					let l;
					l = this._radial
						? this._canvasCtx.createRadialGradient(
								r,
								n,
								n,
								r,
								n,
								i - (n - i) * this._stereo
						  )
						: this._canvasCtx.createLinearGradient(
								0,
								0,
								o ? this._canvas.width : 0,
								o ? 0 : t
						  );
					const c = this._gradients[s].colorStops;
					if (c) {
						const t = this._stereo && !this._splitGradient && !o,
							r = (e, t) =>
								l.addColorStop(
									e,
									"object" == typeof t ? t.color : t
								);
						for (let n = 0; n < 1 + t; n++)
							c.forEach((i, s) => {
								const l = c.length - 1;
								let u = void 0 !== i.pos ? i.pos : s / l;
								if (
									(t && (u /= 2),
									!this._stereo ||
										e ||
										this._radial ||
										o ||
										((u *= a),
										!t &&
											u > 0.5 * a &&
											(u += 0.5 * this._reflexRatio)),
									1 == n)
								)
									if (this._radial || e) {
										const e = l - s;
										u =
											1 -
											(void 0 !== (i = c[e]).pos
												? i.pos
												: e / l) /
												2;
									} else
										0 == s && u > 0 && r(0.5, i),
											(u += 0.5);
								r(u, i),
									this._stereo &&
										s == l &&
										u < 0.5 &&
										r(0.5, i);
							});
					}
					this._gradients[s].gradient = l;
				});
			}
			_createScales() {
				const e = 2 * Math.PI,
					t = [16, 31, 63, 125, 250, 500, 1e3, 2e3, 4e3, 8e3, 16e3],
					a = this._scaleX.getContext("2d"),
					r = this._scaleR.getContext("2d"),
					n = (0.03 * this._canvas.height) | 0;
				this._scaleR.width = this._scaleR.height =
					(this._radius << 1) + this._stereo * n;
				const i = this._scaleR.width >> 1,
					s = i - 0.7 * n;
				(this._scaleX.width |= 0),
					(a.fillStyle = r.strokeStyle = "#000c"),
					a.fillRect(0, 0, this._scaleX.width, this._scaleX.height),
					r.arc(i, i, i - n / 2, 0, e),
					(r.lineWidth = n),
					r.stroke(),
					(a.fillStyle = r.fillStyle = "#fff"),
					(a.font = (this._scaleX.height >> 1) + "px sans-serif"),
					(r.font = (n >> 1) + "px sans-serif"),
					(a.textAlign = r.textAlign = "center");
				for (const n of t) {
					const t = n >= 1e3 ? n / 1e3 + "k" : n,
						o = this._logWidth * (Math.log10(n) - this._minLog);
					if (
						(a.fillText(t, o, 0.75 * this._scaleX.height),
						o > 0 && o < this._canvas.width)
					) {
						const a = e * (o / this._canvas.width),
							n = a - Math.PI / 2,
							l = s * Math.cos(n),
							c = s * Math.sin(n);
						r.save(),
							r.translate(i + l, i + c),
							r.rotate(a),
							r.fillText(t, 0, 0),
							r.restore();
					}
				}
			}
			_calcBars() {
				if (!this._ready) return;
				const e = (e) =>
						(e * this._audioCtx.sampleRate) /
						this._analyzer[0].fftSize,
					t = (e, t = "round") => {
						const a = Math[t](
							(e * this._analyzer[0].fftSize) /
								this._audioCtx.sampleRate
						);
						return a < this._analyzer[0].frequencyBinCount
							? a
							: this._analyzer[0].frequencyBinCount - 1;
					};
				let a, r;
				if (((this._bars = []), this._isOctaveBands)) {
					let e;
					e =
						8 == this._mode
							? 24
							: 7 == this._mode
							? 12
							: 6 == this._mode
							? 8
							: 5 == this._mode
							? 6
							: this._mode;
					const n = 2 ** (1 / 24),
						i = 440 * n ** -114;
					let s,
						o = [],
						l = 0;
					for (; (s = i * n ** l) <= this._maxFreq; )
						s >= this._minFreq && l % e == 0 && o.push(s), l++;
					(a = Math.log10(o[0])),
						(r =
							this._canvas.width /
							(Math.log10(o[o.length - 1]) - a)),
						(this._barWidth = this._canvas.width / o.length);
					let c = 0,
						u = -1,
						d = 0;
					o.forEach((e, a) => {
						const r = t(e);
						let n, i;
						if (((n = c > 0 && c + 1 <= r ? c + 1 : r), n == u))
							d++;
						else {
							if (d > 1)
								for (let e = 0; e < d; e++)
									this._bars[
										this._bars.length - d + e
									].factor = (e + 1) / d;
							(u = n), (d = 1);
						}
						(c = i = r),
							void 0 !== o[a + 1] &&
								((i = t(o[a + 1])),
								i - r > 1 && (c += Math.round((i - r) / 2)));
						const s = c - n > 0 ? c : 0;
						this._bars.push({
							posX: a * this._barWidth,
							dataIdx: n,
							endIdx: s,
							factor: 0,
							peak: [0, 0],
							hold: [],
							accel: [],
						});
					});
				} else {
					(this._barWidth = 1),
						(a = Math.log10(this._minFreq)),
						(r =
							this._canvas.width /
							(Math.log10(this._maxFreq) - a));
					const n = t(this._minFreq, "floor"),
						i = t(this._maxFreq);
					let s = -999;
					for (let t = n; t <= i; t++) {
						const n = e(t),
							i = Math.round(r * (Math.log10(n) - a));
						i > s
							? (this._bars.push({
									posX: i,
									dataIdx: t,
									endIdx: 0,
									factor: 0,
									peak: [0, 0],
									hold: [],
									accel: [],
							  }),
							  (s = i))
							: this._bars.length &&
							  (this._bars[this._bars.length - 1].endIdx = t);
					}
				}
				(this._minLog = a),
					(this._logWidth = r),
					this._calcAux(),
					this._createScales(),
					this._calcLeds();
			}
			_setCanvas(e) {
				if (!this._ready) return;
				(this._pixelRatio = window.devicePixelRatio),
					this._loRes && (this._pixelRatio /= 2),
					(this._fsWidth =
						Math.max(window.screen.width, window.screen.height) *
						this._pixelRatio),
					(this._fsHeight =
						Math.min(window.screen.height, window.screen.width) *
						this._pixelRatio);
				const t = this.isFullscreen,
					a = t
						? this._fsWidth
						: ((this._width ||
								this._container.clientWidth ||
								this._defaultWidth) *
								this._pixelRatio) |
						  0,
					r = t
						? this._fsHeight
						: ((this._height ||
								this._container.clientHeight ||
								this._defaultHeight) *
								this._pixelRatio) |
						  0;
				2 == this._pixelRatio &&
					window.screen.height <= 540 &&
					(this._pixelRatio = 1),
					(this._canvas.width == a && this._canvas.height == r) ||
						((this._canvas.width = a),
						(this._canvas.height = r),
						this._calcAux(),
						this.overlay ||
							((this._canvasCtx.fillStyle = "#000"),
							this._canvasCtx.fillRect(
								0,
								0,
								this._canvas.width,
								this._canvas.height
							)),
						(this._canvasCtx.lineJoin = "bevel"),
						(this._scaleX.width = this._canvas.width),
						(this._scaleX.height = Math.max(
							20 * this._pixelRatio,
							(this._canvas.height / 27) | 0
						)),
						this._makeGrads(),
						this._calcBars(),
						void 0 !== this._fsStatus &&
							this._fsStatus !== t &&
							(e = "fschange"),
						(this._fsStatus = t),
						this.onCanvasResize && this.onCanvasResize(e, this));
			}
			_setProps(e, t) {
				const a = ["onCanvasDraw", "onCanvasResize"],
					r = ["audioCtx", "start"];
				(t || void 0 === e) &&
					(e = Object.assign(
						{
							mode: 0,
							fftSize: 8192,
							minFreq: 20,
							maxFreq: 22e3,
							smoothing: 0.5,
							gradient: "classic",
							minDecibels: -85,
							maxDecibels: -25,
							showBgColor: !0,
							showLeds: !1,
							showScaleX: !0,
							showScaleY: !1,
							showPeaks: !0,
							showFPS: !1,
							lumiBars: !1,
							loRes: !1,
							reflexRatio: 0,
							reflexAlpha: 0.15,
							reflexBright: 1,
							reflexFit: !0,
							lineWidth: 0,
							fillAlpha: 1,
							barSpace: 0.1,
							overlay: !1,
							bgAlpha: 0.7,
							radial: !1,
							spinSpeed: 0,
							stereo: !1,
							splitGradient: !1,
							start: !0,
							volume: 1,
						},
						e
					));
				for (const t of Object.keys(e))
					-1 !== a.indexOf(t) && "function" != typeof e[t]
						? (this[t] = void 0)
						: -1 === r.indexOf(t) && (this[t] = e[t]);
				void 0 !== e.start && this.toggleAnalyzer(e.start);
			}
		}
		class n extends Error {
			constructor(e, t) {
				super(t), (this.name = "AudioMotionError"), (this.code = e);
			}
		}
		var i,
			s,
			o,
			l = [],
			c = [],
			u = !1;
		function d(e, t) {
			var a, r;
			return (
				void 0 !== e &&
					(".." == e
						? (a = c.pop())
						: c.push({ dir: e, scrollTop: s.scrollTop })),
				(s.innerHTML = "<li>Loading...</li>"),
				(r = h()),
				new Promise((e) => {
					fetch(r)
						.then((t) => {
							if (200 == t.status) return u ? t.json() : t.text();
							e(!1);
						})
						.then((r) => {
							u || (r = f(r)),
								(function (e, t) {
									(i.innerHTML = ""),
										(s.innerHTML = ""),
										c.forEach((e, t) => {
											"" == e.dir && (e.dir = "root"),
												(i.innerHTML += `<li data-depth="${
													c.length - t - 1
												}">${e.dir}</li> / `);
										}),
										l.forEach((e) => {
											s.innerHTML += `<li data-type="mount" data-path="${e}">[ ${e} ]</li>`;
										}),
										c.length > 1 &&
											(s.innerHTML +=
												'<li data-type="dir" data-path="..">[ parent folder ]</li>'),
										e &&
											(e.dirs &&
												e.dirs.forEach((e) => {
													s.innerHTML += `<li data-type="dir" data-path="${e}">${e}</li>`;
												}),
											e.files &&
												e.files.forEach((e) => {
													s.innerHTML += `<li data-type="${
														null !==
														e.match(/\.(m3u|m3u8)$/)
															? "list"
															: "file"
													}" data-path="${e}">${e}</li>`;
												}),
											(s.style.backgroundImage =
												"linear-gradient( #fff9 0%, #fff9 100% )" +
												(e.cover
													? `, url('${h(e.cover)}')`
													: ""))),
										(s.scrollTop = t || 0);
								})(r, t || (a && a.scrollTop)),
								e(!0);
						})
						.catch((t) => {
							console.log("Error accessing directory. " + t),
								e(!1);
						});
				})
			);
		}
		function f(e) {
			let t = [],
				a = [],
				r = [];
			const n = (e, t) => {
					const a = new RegExp(
						t + ".*\\.(jpg|jpeg|png|gif|bmp)$",
						"i"
					);
					return e.find((e) => e.match(a));
				},
				i = e.match(/href="[^"]*"[^>]*>[^<]*<\/a>/gi);
			for (const e of i) {
				const [n, i, s] = e.match(
					/href="([^"]*)"[^>]*>\s*([^<]*)<\/a>/i
				);
				"/" == i.substring(i.length - 1)
					? s.match(/parent directory/i) ||
					  ("/" == s.substring(s.length - 1)
							? a.push(s.substring(0, s.length - 1))
							: a.push(s))
					: s.match(/\.(jpg|jpeg|png|gif|bmp)$/i)
					? r.push(s)
					: s.match(/\.(mp3|flac|m4a|aac|ogg|wav|m3u|m3u8)$/i) &&
					  t.push(s);
			}
			const s = n(r, "cover") || n(r, "folder") || n(r, "front") || r[0],
				o = new Intl.Collator();
			return {
				cover: s,
				dirs: a.sort(o.compare),
				files: t.sort(o.compare),
			};
		}
		function h(e) {
			var t = "";
			return (
				c.forEach((e) => {
					t += e.dir + "/";
				}),
				e && (t += e),
				(t = t.replace(/#/g, "%23"))
			);
		}
		function p(e = "li") {
			var t = [];
			return (
				s.querySelectorAll(e).forEach((e) => {
					["file", "list"].includes(e.dataset.type) &&
						t.push({
							file: h(e.dataset.path),
							type: e.dataset.type,
						});
				}),
				t
			);
		}
		function m(e, t = {}) {
			var a;
			return (
				((i = document.createElement("ul")).className = "breadcrumb"),
				e.append(i),
				((s = document.createElement("ul")).className = "filelist"),
				e.append(s),
				(a = setTimeout(() => {
					i.innerHTML = "Waiting for server...";
				}, 5e3)),
				(i.innerHTML = "Initializing... please wait..."),
				i.addEventListener("click", function (e) {
					e.target &&
						"LI" == e.target.nodeName &&
						(function (e) {
							for (var t; e > 0; ) (t = c.pop()), e--;
							d(void 0, t && t.scrollTop);
						})(e.target.dataset.depth);
				}),
				s.addEventListener("click", function (e) {
					e.target &&
						"LI" == e.target.nodeName &&
						("dir" == e.target.dataset.type
							? d(e.target.dataset.path)
							: "mount" == e.target.dataset.type &&
							  ((c = []), d(e.target.dataset.path)));
				}),
				"function" == typeof t.dblClick && (o = t.dblClick),
				s.addEventListener("dblclick", function (e) {
					e.target &&
						"LI" == e.target.nodeName &&
						o &&
						["file", "list"].includes(e.target.dataset.type) &&
						o(h(e.target.dataset.path), e);
				}),
				new Promise((e) => {
					fetch("/serverInfo")
						.then((e) => e.text())
						.then(async (r) => {
							let n;
							clearTimeout(a),
								r.startsWith("audioMotion")
									? ((u = !0), (n = 1))
									: (n = 0),
								(l = [t.rootPath || "/music"]),
								!1 === (await d(l[0])) &&
									((i.innerHTML = `Cannot access media folder (${l[0]}) on server!`),
									(s.innerHTML = ""),
									(n = -1)),
								e([n, s, n ? r : "Standard web server"]);
						})
						.catch((t) => {
							clearTimeout(a),
								(i.innerHTML = "No file server found."),
								e([-1, s]);
						});
				})
			);
		}
		var g = a(23);
		a(134);
		function b(e) {
			return (b =
				"function" == typeof Symbol &&
				"symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  })(e);
		}
		function v(e, t, a) {
			return (
				t in e
					? Object.defineProperty(e, t, {
							value: a,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = a),
				e
			);
		}
		function y() {
			return (y =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a)
							Object.prototype.hasOwnProperty.call(a, r) &&
								(e[r] = a[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function w(e) {
			for (var t = 1; t < arguments.length; t++) {
				var a = null != arguments[t] ? arguments[t] : {},
					r = Object.keys(a);
				"function" == typeof Object.getOwnPropertySymbols &&
					(r = r.concat(
						Object.getOwnPropertySymbols(a).filter(function (e) {
							return Object.getOwnPropertyDescriptor(
								a,
								e
							).enumerable;
						})
					)),
					r.forEach(function (t) {
						v(e, t, a[t]);
					});
			}
			return e;
		}
		function T(e, t) {
			if (null == e) return {};
			var a,
				r,
				n = (function (e, t) {
					if (null == e) return {};
					var a,
						r,
						n = {},
						i = Object.keys(e);
					for (r = 0; r < i.length; r++)
						(a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
					return n;
				})(e, t);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(e);
				for (r = 0; r < i.length; r++)
					(a = i[r]),
						t.indexOf(a) >= 0 ||
							(Object.prototype.propertyIsEnumerable.call(e, a) &&
								(n[a] = e[a]));
			}
			return n;
		}
		function _(e) {
			return (
				(function (e) {
					if (Array.isArray(e)) {
						for (
							var t = 0, a = new Array(e.length);
							t < e.length;
							t++
						)
							a[t] = e[t];
						return a;
					}
				})(e) ||
				(function (e) {
					if (
						Symbol.iterator in Object(e) ||
						"[object Arguments]" ===
							Object.prototype.toString.call(e)
					)
						return Array.from(e);
				})(e) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance"
					);
				})()
			);
		}
		function k(e) {
			if ("undefined" != typeof window && window.navigator)
				return !!navigator.userAgent.match(e);
		}
		var S = k(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
			E = k(/Edge/i),
			C = k(/firefox/i),
			I = k(/safari/i) && !k(/chrome/i) && !k(/android/i),
			x = k(/iP(ad|od|hone)/i),
			A = k(/chrome/i) && k(/android/i),
			D = { capture: !1, passive: !1 };
		function O(e, t, a) {
			e.addEventListener(t, a, !S && D);
		}
		function M(e, t, a) {
			e.removeEventListener(t, a, !S && D);
		}
		function P(e, t) {
			if (t) {
				if ((">" === t[0] && (t = t.substring(1)), e))
					try {
						if (e.matches) return e.matches(t);
						if (e.msMatchesSelector) return e.msMatchesSelector(t);
						if (e.webkitMatchesSelector)
							return e.webkitMatchesSelector(t);
					} catch (e) {
						return !1;
					}
				return !1;
			}
		}
		function F(e) {
			return e.host && e !== document && e.host.nodeType
				? e.host
				: e.parentNode;
		}
		function B(e, t, a, r) {
			if (e) {
				a = a || document;
				do {
					if (
						(null != t &&
							(">" === t[0]
								? e.parentNode === a && P(e, t)
								: P(e, t))) ||
						(r && e === a)
					)
						return e;
					if (e === a) break;
				} while ((e = F(e)));
			}
			return null;
		}
		var L,
			R = /\s+/g;
		function N(e, t, a) {
			if (e && t)
				if (e.classList) e.classList[a ? "add" : "remove"](t);
				else {
					var r = (" " + e.className + " ")
						.replace(R, " ")
						.replace(" " + t + " ", " ");
					e.className = (r + (a ? " " + t : "")).replace(R, " ");
				}
		}
		function z(e, t, a) {
			var r = e && e.style;
			if (r) {
				if (void 0 === a)
					return (
						document.defaultView &&
						document.defaultView.getComputedStyle
							? (a = document.defaultView.getComputedStyle(e, ""))
							: e.currentStyle && (a = e.currentStyle),
						void 0 === t ? a : a[t]
					);
				t in r || -1 !== t.indexOf("webkit") || (t = "-webkit-" + t),
					(r[t] = a + ("string" == typeof a ? "" : "px"));
			}
		}
		function U(e, t) {
			var a = "";
			if ("string" == typeof e) a = e;
			else
				do {
					var r = z(e, "transform");
					r && "none" !== r && (a = r + " " + a);
				} while (!t && (e = e.parentNode));
			var n =
				window.DOMMatrix ||
				window.WebKitCSSMatrix ||
				window.CSSMatrix ||
				window.MSCSSMatrix;
			return n && new n(a);
		}
		function j(e, t, a) {
			if (e) {
				var r = e.getElementsByTagName(t),
					n = 0,
					i = r.length;
				if (a) for (; n < i; n++) a(r[n], n);
				return r;
			}
			return [];
		}
		function H() {
			var e = document.scrollingElement;
			return e || document.documentElement;
		}
		function q(e, t, a, r, n) {
			if (e.getBoundingClientRect || e === window) {
				var i, s, o, l, c, u, d;
				if (
					(e !== window && e !== H()
						? ((s = (i = e.getBoundingClientRect()).top),
						  (o = i.left),
						  (l = i.bottom),
						  (c = i.right),
						  (u = i.height),
						  (d = i.width))
						: ((s = 0),
						  (o = 0),
						  (l = window.innerHeight),
						  (c = window.innerWidth),
						  (u = window.innerHeight),
						  (d = window.innerWidth)),
					(t || a) && e !== window && ((n = n || e.parentNode), !S))
				)
					do {
						if (
							n &&
							n.getBoundingClientRect &&
							("none" !== z(n, "transform") ||
								(a && "static" !== z(n, "position")))
						) {
							var f = n.getBoundingClientRect();
							(s -= f.top + parseInt(z(n, "border-top-width"))),
								(o -=
									f.left +
									parseInt(z(n, "border-left-width"))),
								(l = s + i.height),
								(c = o + i.width);
							break;
						}
					} while ((n = n.parentNode));
				if (r && e !== window) {
					var h = U(n || e),
						p = h && h.a,
						m = h && h.d;
					h && ((l = (s /= m) + (u /= m)), (c = (o /= p) + (d /= p)));
				}
				return {
					top: s,
					left: o,
					bottom: l,
					right: c,
					width: d,
					height: u,
				};
			}
		}
		function W(e, t, a) {
			for (var r = V(e, !0), n = q(e)[t]; r; ) {
				var i = q(r)[a];
				if (!("top" === a || "left" === a ? n >= i : n <= i)) return r;
				if (r === H()) break;
				r = V(r, !1);
			}
			return !1;
		}
		function X(e, t, a) {
			for (var r = 0, n = 0, i = e.children; n < i.length; ) {
				if (
					"none" !== i[n].style.display &&
					i[n] !== et.ghost &&
					i[n] !== et.dragged &&
					B(i[n], a.draggable, e, !1)
				) {
					if (r === t) return i[n];
					r++;
				}
				n++;
			}
			return null;
		}
		function G(e, t) {
			for (
				var a = e.lastElementChild;
				a &&
				(a === et.ghost ||
					"none" === z(a, "display") ||
					(t && !P(a, t)));

			)
				a = a.previousElementSibling;
			return a || null;
		}
		function $(e, t) {
			var a = 0;
			if (!e || !e.parentNode) return -1;
			for (; (e = e.previousElementSibling); )
				"TEMPLATE" === e.nodeName.toUpperCase() ||
					e === et.clone ||
					(t && !P(e, t)) ||
					a++;
			return a;
		}
		function Y(e) {
			var t = 0,
				a = 0,
				r = H();
			if (e)
				do {
					var n = U(e),
						i = n.a,
						s = n.d;
					(t += e.scrollLeft * i), (a += e.scrollTop * s);
				} while (e !== r && (e = e.parentNode));
			return [t, a];
		}
		function V(e, t) {
			if (!e || !e.getBoundingClientRect) return H();
			var a = e,
				r = !1;
			do {
				if (
					a.clientWidth < a.scrollWidth ||
					a.clientHeight < a.scrollHeight
				) {
					var n = z(a);
					if (
						(a.clientWidth < a.scrollWidth &&
							("auto" == n.overflowX ||
								"scroll" == n.overflowX)) ||
						(a.clientHeight < a.scrollHeight &&
							("auto" == n.overflowY || "scroll" == n.overflowY))
					) {
						if (!a.getBoundingClientRect || a === document.body)
							return H();
						if (r || t) return a;
						r = !0;
					}
				}
			} while ((a = a.parentNode));
			return H();
		}
		function K(e, t) {
			return (
				Math.round(e.top) === Math.round(t.top) &&
				Math.round(e.left) === Math.round(t.left) &&
				Math.round(e.height) === Math.round(t.height) &&
				Math.round(e.width) === Math.round(t.width)
			);
		}
		function Z(e, t) {
			return function () {
				if (!L) {
					var a = arguments,
						r = this;
					1 === a.length ? e.call(r, a[0]) : e.apply(r, a),
						(L = setTimeout(function () {
							L = void 0;
						}, t));
				}
			};
		}
		function J(e, t, a) {
			(e.scrollLeft += t), (e.scrollTop += a);
		}
		function Q(e) {
			var t = window.Polymer,
				a = window.jQuery || window.Zepto;
			return t && t.dom
				? t.dom(e).cloneNode(!0)
				: a
				? a(e).clone(!0)[0]
				: e.cloneNode(!0);
		}
		function ee(e, t) {
			z(e, "position", "absolute"),
				z(e, "top", t.top),
				z(e, "left", t.left),
				z(e, "width", t.width),
				z(e, "height", t.height);
		}
		function te(e) {
			z(e, "position", ""),
				z(e, "top", ""),
				z(e, "left", ""),
				z(e, "width", ""),
				z(e, "height", "");
		}
		var ae = "Sortable" + new Date().getTime();
		function re() {
			var e,
				t = [];
			return {
				captureAnimationState: function () {
					((t = []), this.options.animation) &&
						[].slice.call(this.el.children).forEach(function (e) {
							if ("none" !== z(e, "display") && e !== et.ghost) {
								t.push({ target: e, rect: q(e) });
								var a = w({}, t[t.length - 1].rect);
								if (e.thisAnimationDuration) {
									var r = U(e, !0);
									r && ((a.top -= r.f), (a.left -= r.e));
								}
								e.fromRect = a;
							}
						});
				},
				addAnimationState: function (e) {
					t.push(e);
				},
				removeAnimationState: function (e) {
					t.splice(
						(function (e, t) {
							for (var a in e)
								if (e.hasOwnProperty(a))
									for (var r in t)
										if (
											t.hasOwnProperty(r) &&
											t[r] === e[a][r]
										)
											return Number(a);
							return -1;
						})(t, { target: e }),
						1
					);
				},
				animateAll: function (a) {
					var r = this;
					if (!this.options.animation)
						return (
							clearTimeout(e),
							void ("function" == typeof a && a())
						);
					var n = !1,
						i = 0;
					t.forEach(function (e) {
						var t = 0,
							a = e.target,
							s = a.fromRect,
							o = q(a),
							l = a.prevFromRect,
							c = a.prevToRect,
							u = e.rect,
							d = U(a, !0);
						d && ((o.top -= d.f), (o.left -= d.e)),
							(a.toRect = o),
							a.thisAnimationDuration &&
								K(l, o) &&
								!K(s, o) &&
								(u.top - o.top) / (u.left - o.left) ==
									(s.top - o.top) / (s.left - o.left) &&
								(t = (function (e, t, a, r) {
									return (
										(Math.sqrt(
											Math.pow(t.top - e.top, 2) +
												Math.pow(t.left - e.left, 2)
										) /
											Math.sqrt(
												Math.pow(t.top - a.top, 2) +
													Math.pow(t.left - a.left, 2)
											)) *
										r.animation
									);
								})(u, l, c, r.options)),
							K(o, s) ||
								((a.prevFromRect = s),
								(a.prevToRect = o),
								t || (t = r.options.animation),
								r.animate(a, u, o, t)),
							t &&
								((n = !0),
								(i = Math.max(i, t)),
								clearTimeout(a.animationResetTimer),
								(a.animationResetTimer = setTimeout(
									function () {
										(a.animationTime = 0),
											(a.prevFromRect = null),
											(a.fromRect = null),
											(a.prevToRect = null),
											(a.thisAnimationDuration = null);
									},
									t
								)),
								(a.thisAnimationDuration = t));
					}),
						clearTimeout(e),
						n
							? (e = setTimeout(function () {
									"function" == typeof a && a();
							  }, i))
							: "function" == typeof a && a(),
						(t = []);
				},
				animate: function (e, t, a, r) {
					if (r) {
						z(e, "transition", ""), z(e, "transform", "");
						var n = U(this.el),
							i = n && n.a,
							s = n && n.d,
							o = (t.left - a.left) / (i || 1),
							l = (t.top - a.top) / (s || 1);
						(e.animatingX = !!o),
							(e.animatingY = !!l),
							z(
								e,
								"transform",
								"translate3d(" + o + "px," + l + "px,0)"
							),
							(function (e) {
								e.offsetWidth;
							})(e),
							z(
								e,
								"transition",
								"transform " +
									r +
									"ms" +
									(this.options.easing
										? " " + this.options.easing
										: "")
							),
							z(e, "transform", "translate3d(0,0,0)"),
							"number" == typeof e.animated &&
								clearTimeout(e.animated),
							(e.animated = setTimeout(function () {
								z(e, "transition", ""),
									z(e, "transform", ""),
									(e.animated = !1),
									(e.animatingX = !1),
									(e.animatingY = !1);
							}, r));
					}
				},
			};
		}
		var ne = [],
			ie = { initializeByDefault: !0 },
			se = {
				mount: function (e) {
					for (var t in ie)
						ie.hasOwnProperty(t) && !(t in e) && (e[t] = ie[t]);
					ne.push(e);
				},
				pluginEvent: function (e, t, a) {
					var r = this;
					(this.eventCanceled = !1),
						(a.cancel = function () {
							r.eventCanceled = !0;
						});
					var n = e + "Global";
					ne.forEach(function (r) {
						t[r.pluginName] &&
							(t[r.pluginName][n] &&
								t[r.pluginName][n](w({ sortable: t }, a)),
							t.options[r.pluginName] &&
								t[r.pluginName][e] &&
								t[r.pluginName][e](w({ sortable: t }, a)));
					});
				},
				initializePlugins: function (e, t, a, r) {
					for (var n in (ne.forEach(function (r) {
						var n = r.pluginName;
						if (e.options[n] || r.initializeByDefault) {
							var i = new r(e, t, e.options);
							(i.sortable = e),
								(i.options = e.options),
								(e[n] = i),
								y(a, i.defaults);
						}
					}),
					e.options))
						if (e.options.hasOwnProperty(n)) {
							var i = this.modifyOption(e, n, e.options[n]);
							void 0 !== i && (e.options[n] = i);
						}
				},
				getEventProperties: function (e, t) {
					var a = {};
					return (
						ne.forEach(function (r) {
							"function" == typeof r.eventProperties &&
								y(
									a,
									r.eventProperties.call(t[r.pluginName], e)
								);
						}),
						a
					);
				},
				modifyOption: function (e, t, a) {
					var r;
					return (
						ne.forEach(function (n) {
							e[n.pluginName] &&
								n.optionListeners &&
								"function" == typeof n.optionListeners[t] &&
								(r = n.optionListeners[t].call(
									e[n.pluginName],
									a
								));
						}),
						r
					);
				},
			};
		function oe(e) {
			var t = e.sortable,
				a = e.rootEl,
				r = e.name,
				n = e.targetEl,
				i = e.cloneEl,
				s = e.toEl,
				o = e.fromEl,
				l = e.oldIndex,
				c = e.newIndex,
				u = e.oldDraggableIndex,
				d = e.newDraggableIndex,
				f = e.originalEvent,
				h = e.putSortable,
				p = e.extraEventProperties;
			if ((t = t || (a && a[ae]))) {
				var m,
					g = t.options,
					b = "on" + r.charAt(0).toUpperCase() + r.substr(1);
				!window.CustomEvent || S || E
					? (m = document.createEvent("Event")).initEvent(r, !0, !0)
					: (m = new CustomEvent(r, { bubbles: !0, cancelable: !0 })),
					(m.to = s || a),
					(m.from = o || a),
					(m.item = n || a),
					(m.clone = i),
					(m.oldIndex = l),
					(m.newIndex = c),
					(m.oldDraggableIndex = u),
					(m.newDraggableIndex = d),
					(m.originalEvent = f),
					(m.pullMode = h ? h.lastPutMode : void 0);
				var v = w({}, p, se.getEventProperties(r, t));
				for (var y in v) m[y] = v[y];
				a && a.dispatchEvent(m), g[b] && g[b].call(t, m);
			}
		}
		var le = function (e, t) {
			var a =
					arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: {},
				r = a.evt,
				n = T(a, ["evt"]);
			se.pluginEvent.bind(et)(
				e,
				t,
				w(
					{
						dragEl: ue,
						parentEl: de,
						ghostEl: fe,
						rootEl: he,
						nextEl: pe,
						lastDownEl: me,
						cloneEl: ge,
						cloneHidden: be,
						dragStarted: De,
						putSortable: ke,
						activeSortable: et.active,
						originalEvent: r,
						oldIndex: ve,
						oldDraggableIndex: we,
						newIndex: ye,
						newDraggableIndex: Te,
						hideGhostForTarget: Ke,
						unhideGhostForTarget: Ze,
						cloneNowHidden: function () {
							be = !0;
						},
						cloneNowShown: function () {
							be = !1;
						},
						dispatchSortableEvent: function (e) {
							ce({ sortable: t, name: e, originalEvent: r });
						},
					},
					n
				)
			);
		};
		function ce(e) {
			oe(
				w(
					{
						putSortable: ke,
						cloneEl: ge,
						targetEl: ue,
						rootEl: he,
						oldIndex: ve,
						oldDraggableIndex: we,
						newIndex: ye,
						newDraggableIndex: Te,
					},
					e
				)
			);
		}
		var ue,
			de,
			fe,
			he,
			pe,
			me,
			ge,
			be,
			ve,
			ye,
			we,
			Te,
			_e,
			ke,
			Se,
			Ee,
			Ce,
			Ie,
			xe,
			Ae,
			De,
			Oe,
			Me,
			Pe,
			Fe,
			Be = !1,
			Le = !1,
			Re = [],
			Ne = !1,
			ze = !1,
			Ue = [],
			je = !1,
			He = [],
			qe = "undefined" != typeof document,
			We = x,
			Xe = E || S ? "cssFloat" : "float",
			Ge = qe && !A && !x && "draggable" in document.createElement("div"),
			$e = (function () {
				if (qe) {
					if (S) return !1;
					var e = document.createElement("x");
					return (
						(e.style.cssText = "pointer-events:auto"),
						"auto" === e.style.pointerEvents
					);
				}
			})(),
			Ye = function (e, t) {
				var a = z(e),
					r =
						parseInt(a.width) -
						parseInt(a.paddingLeft) -
						parseInt(a.paddingRight) -
						parseInt(a.borderLeftWidth) -
						parseInt(a.borderRightWidth),
					n = X(e, 0, t),
					i = X(e, 1, t),
					s = n && z(n),
					o = i && z(i),
					l =
						s &&
						parseInt(s.marginLeft) +
							parseInt(s.marginRight) +
							q(n).width,
					c =
						o &&
						parseInt(o.marginLeft) +
							parseInt(o.marginRight) +
							q(i).width;
				if ("flex" === a.display)
					return "column" === a.flexDirection ||
						"column-reverse" === a.flexDirection
						? "vertical"
						: "horizontal";
				if ("grid" === a.display)
					return a.gridTemplateColumns.split(" ").length <= 1
						? "vertical"
						: "horizontal";
				if (n && s.float && "none" !== s.float) {
					var u = "left" === s.float ? "left" : "right";
					return !i || ("both" !== o.clear && o.clear !== u)
						? "horizontal"
						: "vertical";
				}
				return n &&
					("block" === s.display ||
						"flex" === s.display ||
						"table" === s.display ||
						"grid" === s.display ||
						(l >= r && "none" === a[Xe]) ||
						(i && "none" === a[Xe] && l + c > r))
					? "vertical"
					: "horizontal";
			},
			Ve = function (e) {
				function t(e, a) {
					return function (r, n, i, s) {
						var o =
							r.options.group.name &&
							n.options.group.name &&
							r.options.group.name === n.options.group.name;
						if (null == e && (a || o)) return !0;
						if (null == e || !1 === e) return !1;
						if (a && "clone" === e) return e;
						if ("function" == typeof e)
							return t(e(r, n, i, s), a)(r, n, i, s);
						var l = (a ? r : n).options.group.name;
						return (
							!0 === e ||
							("string" == typeof e && e === l) ||
							(e.join && e.indexOf(l) > -1)
						);
					};
				}
				var a = {},
					r = e.group;
				(r && "object" == b(r)) || (r = { name: r }),
					(a.name = r.name),
					(a.checkPull = t(r.pull, !0)),
					(a.checkPut = t(r.put)),
					(a.revertClone = r.revertClone),
					(e.group = a);
			},
			Ke = function () {
				!$e && fe && z(fe, "display", "none");
			},
			Ze = function () {
				!$e && fe && z(fe, "display", "");
			};
		qe &&
			document.addEventListener(
				"click",
				function (e) {
					if (Le)
						return (
							e.preventDefault(),
							e.stopPropagation && e.stopPropagation(),
							e.stopImmediatePropagation &&
								e.stopImmediatePropagation(),
							(Le = !1),
							!1
						);
				},
				!0
			);
		var Je = function (e) {
				if (ue) {
					e = e.touches ? e.touches[0] : e;
					var t =
						((n = e.clientX),
						(i = e.clientY),
						Re.some(function (e) {
							if (!G(e)) {
								var t = q(e),
									a = e[ae].options.emptyInsertThreshold,
									r = n >= t.left - a && n <= t.right + a,
									o = i >= t.top - a && i <= t.bottom + a;
								return a && r && o ? (s = e) : void 0;
							}
						}),
						s);
					if (t) {
						var a = {};
						for (var r in e) e.hasOwnProperty(r) && (a[r] = e[r]);
						(a.target = a.rootEl = t),
							(a.preventDefault = void 0),
							(a.stopPropagation = void 0),
							t[ae]._onDragOver(a);
					}
				}
				var n, i, s;
			},
			Qe = function (e) {
				ue && ue.parentNode[ae]._isOutsideThisEl(e.target);
			};
		function et(e, t) {
			if (!e || !e.nodeType || 1 !== e.nodeType)
				throw "Sortable: `el` must be an HTMLElement, not ".concat(
					{}.toString.call(e)
				);
			(this.el = e), (this.options = t = y({}, t)), (e[ae] = this);
			var a = {
				group: null,
				sort: !0,
				disabled: !1,
				store: null,
				handle: null,
				draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
				swapThreshold: 1,
				invertSwap: !1,
				invertedSwapThreshold: null,
				removeCloneOnHide: !0,
				direction: function () {
					return Ye(e, this.options);
				},
				ghostClass: "sortable-ghost",
				chosenClass: "sortable-chosen",
				dragClass: "sortable-drag",
				ignore: "a, img",
				filter: null,
				preventOnFilter: !0,
				animation: 0,
				easing: null,
				setData: function (e, t) {
					e.setData("Text", t.textContent);
				},
				dropBubble: !1,
				dragoverBubble: !1,
				dataIdAttr: "data-id",
				delay: 0,
				delayOnTouchOnly: !1,
				touchStartThreshold:
					(Number.parseInt ? Number : window).parseInt(
						window.devicePixelRatio,
						10
					) || 1,
				forceFallback: !1,
				fallbackClass: "sortable-fallback",
				fallbackOnBody: !1,
				fallbackTolerance: 0,
				fallbackOffset: { x: 0, y: 0 },
				supportPointer:
					!1 !== et.supportPointer && "PointerEvent" in window,
				emptyInsertThreshold: 5,
			};
			for (var r in (se.initializePlugins(this, e, a), a))
				!(r in t) && (t[r] = a[r]);
			for (var n in (Ve(t), this))
				"_" === n.charAt(0) &&
					"function" == typeof this[n] &&
					(this[n] = this[n].bind(this));
			(this.nativeDraggable = !t.forceFallback && Ge),
				this.nativeDraggable && (this.options.touchStartThreshold = 1),
				t.supportPointer
					? O(e, "pointerdown", this._onTapStart)
					: (O(e, "mousedown", this._onTapStart),
					  O(e, "touchstart", this._onTapStart)),
				this.nativeDraggable &&
					(O(e, "dragover", this), O(e, "dragenter", this)),
				Re.push(this.el),
				t.store && t.store.get && this.sort(t.store.get(this) || []),
				y(this, re());
		}
		function tt(e, t, a, r, n, i, s, o) {
			var l,
				c,
				u = e[ae],
				d = u.options.onMove;
			return (
				!window.CustomEvent || S || E
					? (l = document.createEvent("Event")).initEvent(
							"move",
							!0,
							!0
					  )
					: (l = new CustomEvent("move", {
							bubbles: !0,
							cancelable: !0,
					  })),
				(l.to = t),
				(l.from = e),
				(l.dragged = a),
				(l.draggedRect = r),
				(l.related = n || t),
				(l.relatedRect = i || q(t)),
				(l.willInsertAfter = o),
				(l.originalEvent = s),
				e.dispatchEvent(l),
				d && (c = d.call(u, l, s)),
				c
			);
		}
		function at(e) {
			e.draggable = !1;
		}
		function rt() {
			je = !1;
		}
		function nt(e) {
			for (
				var t =
						e.tagName +
						e.className +
						e.src +
						e.href +
						e.textContent,
					a = t.length,
					r = 0;
				a--;

			)
				r += t.charCodeAt(a);
			return r.toString(36);
		}
		function it(e) {
			return setTimeout(e, 0);
		}
		function st(e) {
			return clearTimeout(e);
		}
		(et.prototype = {
			constructor: et,
			_isOutsideThisEl: function (e) {
				this.el.contains(e) || e === this.el || (Oe = null);
			},
			_getDirection: function (e, t) {
				return "function" == typeof this.options.direction
					? this.options.direction.call(this, e, t, ue)
					: this.options.direction;
			},
			_onTapStart: function (e) {
				if (e.cancelable) {
					var t = this,
						a = this.el,
						r = this.options,
						n = r.preventOnFilter,
						i = e.type,
						s =
							(e.touches && e.touches[0]) ||
							(e.pointerType && "touch" === e.pointerType && e),
						o = (s || e).target,
						l =
							(e.target.shadowRoot &&
								((e.path && e.path[0]) ||
									(e.composedPath && e.composedPath()[0]))) ||
							o,
						c = r.filter;
					if (
						((function (e) {
							He.length = 0;
							var t = e.getElementsByTagName("input"),
								a = t.length;
							for (; a--; ) {
								var r = t[a];
								r.checked && He.push(r);
							}
						})(a),
						!ue &&
							!(
								(/mousedown|pointerdown/.test(i) &&
									0 !== e.button) ||
								r.disabled ||
								l.isContentEditable ||
								((o = B(o, r.draggable, a, !1)) &&
									o.animated) ||
								me === o
							))
					) {
						if (
							((ve = $(o)),
							(we = $(o, r.draggable)),
							"function" == typeof c)
						) {
							if (c.call(this, e, o, this))
								return (
									ce({
										sortable: t,
										rootEl: l,
										name: "filter",
										targetEl: o,
										toEl: a,
										fromEl: a,
									}),
									le("filter", t, { evt: e }),
									void (
										n &&
										e.cancelable &&
										e.preventDefault()
									)
								);
						} else if (
							c &&
							(c = c.split(",").some(function (r) {
								if ((r = B(l, r.trim(), a, !1)))
									return (
										ce({
											sortable: t,
											rootEl: r,
											name: "filter",
											targetEl: o,
											fromEl: a,
											toEl: a,
										}),
										le("filter", t, { evt: e }),
										!0
									);
							}))
						)
							return void (
								n &&
								e.cancelable &&
								e.preventDefault()
							);
						(r.handle && !B(l, r.handle, a, !1)) ||
							this._prepareDragStart(e, s, o);
					}
				}
			},
			_prepareDragStart: function (e, t, a) {
				var r,
					n = this,
					i = n.el,
					s = n.options,
					o = i.ownerDocument;
				if (a && !ue && a.parentNode === i) {
					var l = q(a);
					if (
						((he = i),
						(de = (ue = a).parentNode),
						(pe = ue.nextSibling),
						(me = a),
						(_e = s.group),
						(et.dragged = ue),
						(Se = {
							target: ue,
							clientX: (t || e).clientX,
							clientY: (t || e).clientY,
						}),
						(xe = Se.clientX - l.left),
						(Ae = Se.clientY - l.top),
						(this._lastX = (t || e).clientX),
						(this._lastY = (t || e).clientY),
						(ue.style["will-change"] = "all"),
						(r = function () {
							le("delayEnded", n, { evt: e }),
								et.eventCanceled
									? n._onDrop()
									: (n._disableDelayedDragEvents(),
									  !C &&
											n.nativeDraggable &&
											(ue.draggable = !0),
									  n._triggerDragStart(e, t),
									  ce({
											sortable: n,
											name: "choose",
											originalEvent: e,
									  }),
									  N(ue, s.chosenClass, !0));
						}),
						s.ignore.split(",").forEach(function (e) {
							j(ue, e.trim(), at);
						}),
						O(o, "dragover", Je),
						O(o, "mousemove", Je),
						O(o, "touchmove", Je),
						O(o, "mouseup", n._onDrop),
						O(o, "touchend", n._onDrop),
						O(o, "touchcancel", n._onDrop),
						C &&
							this.nativeDraggable &&
							((this.options.touchStartThreshold = 4),
							(ue.draggable = !0)),
						le("delayStart", this, { evt: e }),
						!s.delay ||
							(s.delayOnTouchOnly && !t) ||
							(this.nativeDraggable && (E || S)))
					)
						r();
					else {
						if (et.eventCanceled) return void this._onDrop();
						O(o, "mouseup", n._disableDelayedDrag),
							O(o, "touchend", n._disableDelayedDrag),
							O(o, "touchcancel", n._disableDelayedDrag),
							O(o, "mousemove", n._delayedDragTouchMoveHandler),
							O(o, "touchmove", n._delayedDragTouchMoveHandler),
							s.supportPointer &&
								O(
									o,
									"pointermove",
									n._delayedDragTouchMoveHandler
								),
							(n._dragStartTimer = setTimeout(r, s.delay));
					}
				}
			},
			_delayedDragTouchMoveHandler: function (e) {
				var t = e.touches ? e.touches[0] : e;
				Math.max(
					Math.abs(t.clientX - this._lastX),
					Math.abs(t.clientY - this._lastY)
				) >=
					Math.floor(
						this.options.touchStartThreshold /
							((this.nativeDraggable &&
								window.devicePixelRatio) ||
								1)
					) && this._disableDelayedDrag();
			},
			_disableDelayedDrag: function () {
				ue && at(ue),
					clearTimeout(this._dragStartTimer),
					this._disableDelayedDragEvents();
			},
			_disableDelayedDragEvents: function () {
				var e = this.el.ownerDocument;
				M(e, "mouseup", this._disableDelayedDrag),
					M(e, "touchend", this._disableDelayedDrag),
					M(e, "touchcancel", this._disableDelayedDrag),
					M(e, "mousemove", this._delayedDragTouchMoveHandler),
					M(e, "touchmove", this._delayedDragTouchMoveHandler),
					M(e, "pointermove", this._delayedDragTouchMoveHandler);
			},
			_triggerDragStart: function (e, t) {
				(t = t || ("touch" == e.pointerType && e)),
					!this.nativeDraggable || t
						? this.options.supportPointer
							? O(document, "pointermove", this._onTouchMove)
							: O(
									document,
									t ? "touchmove" : "mousemove",
									this._onTouchMove
							  )
						: (O(ue, "dragend", this),
						  O(he, "dragstart", this._onDragStart));
				try {
					document.selection
						? it(function () {
								document.selection.empty();
						  })
						: window.getSelection().removeAllRanges();
				} catch (e) {}
			},
			_dragStarted: function (e, t) {
				if (((Be = !1), he && ue)) {
					le("dragStarted", this, { evt: t }),
						this.nativeDraggable && O(document, "dragover", Qe);
					var a = this.options;
					!e && N(ue, a.dragClass, !1),
						N(ue, a.ghostClass, !0),
						(et.active = this),
						e && this._appendGhost(),
						ce({ sortable: this, name: "start", originalEvent: t });
				} else this._nulling();
			},
			_emulateDragOver: function () {
				if (Ee) {
					(this._lastX = Ee.clientX),
						(this._lastY = Ee.clientY),
						Ke();
					for (
						var e = document.elementFromPoint(
								Ee.clientX,
								Ee.clientY
							),
							t = e;
						e &&
						e.shadowRoot &&
						(e = e.shadowRoot.elementFromPoint(
							Ee.clientX,
							Ee.clientY
						)) !== t;

					)
						t = e;
					if ((ue.parentNode[ae]._isOutsideThisEl(e), t))
						do {
							if (t[ae]) {
								if (
									t[ae]._onDragOver({
										clientX: Ee.clientX,
										clientY: Ee.clientY,
										target: e,
										rootEl: t,
									}) &&
									!this.options.dragoverBubble
								)
									break;
							}
							e = t;
						} while ((t = t.parentNode));
					Ze();
				}
			},
			_onTouchMove: function (e) {
				if (Se) {
					var t = this.options,
						a = t.fallbackTolerance,
						r = t.fallbackOffset,
						n = e.touches ? e.touches[0] : e,
						i = fe && U(fe, !0),
						s = fe && i && i.a,
						o = fe && i && i.d,
						l = We && Fe && Y(Fe),
						c =
							(n.clientX - Se.clientX + r.x) / (s || 1) +
							(l ? l[0] - Ue[0] : 0) / (s || 1),
						u =
							(n.clientY - Se.clientY + r.y) / (o || 1) +
							(l ? l[1] - Ue[1] : 0) / (o || 1);
					if (!et.active && !Be) {
						if (
							a &&
							Math.max(
								Math.abs(n.clientX - this._lastX),
								Math.abs(n.clientY - this._lastY)
							) < a
						)
							return;
						this._onDragStart(e, !0);
					}
					if (fe) {
						i
							? ((i.e += c - (Ce || 0)), (i.f += u - (Ie || 0)))
							: (i = { a: 1, b: 0, c: 0, d: 1, e: c, f: u });
						var d = "matrix("
							.concat(i.a, ",")
							.concat(i.b, ",")
							.concat(i.c, ",")
							.concat(i.d, ",")
							.concat(i.e, ",")
							.concat(i.f, ")");
						z(fe, "webkitTransform", d),
							z(fe, "mozTransform", d),
							z(fe, "msTransform", d),
							z(fe, "transform", d),
							(Ce = c),
							(Ie = u),
							(Ee = n);
					}
					e.cancelable && e.preventDefault();
				}
			},
			_appendGhost: function () {
				if (!fe) {
					var e = this.options.fallbackOnBody ? document.body : he,
						t = q(ue, !0, We, !0, e),
						a = this.options;
					if (We) {
						for (
							Fe = e;
							"static" === z(Fe, "position") &&
							"none" === z(Fe, "transform") &&
							Fe !== document;

						)
							Fe = Fe.parentNode;
						Fe !== document.body && Fe !== document.documentElement
							? (Fe === document && (Fe = H()),
							  (t.top += Fe.scrollTop),
							  (t.left += Fe.scrollLeft))
							: (Fe = H()),
							(Ue = Y(Fe));
					}
					N((fe = ue.cloneNode(!0)), a.ghostClass, !1),
						N(fe, a.fallbackClass, !0),
						N(fe, a.dragClass, !0),
						z(fe, "transition", ""),
						z(fe, "transform", ""),
						z(fe, "box-sizing", "border-box"),
						z(fe, "margin", 0),
						z(fe, "top", t.top),
						z(fe, "left", t.left),
						z(fe, "width", t.width),
						z(fe, "height", t.height),
						z(fe, "opacity", "0.8"),
						z(fe, "position", We ? "absolute" : "fixed"),
						z(fe, "zIndex", "100000"),
						z(fe, "pointerEvents", "none"),
						(et.ghost = fe),
						e.appendChild(fe),
						z(
							fe,
							"transform-origin",
							(xe / parseInt(fe.style.width)) * 100 +
								"% " +
								(Ae / parseInt(fe.style.height)) * 100 +
								"%"
						);
				}
			},
			_onDragStart: function (e, t) {
				var a = this,
					r = e.dataTransfer,
					n = a.options;
				le("dragStart", this, { evt: e }),
					et.eventCanceled
						? this._onDrop()
						: (le("setupClone", this),
						  et.eventCanceled ||
								(((ge = Q(ue)).draggable = !1),
								(ge.style["will-change"] = ""),
								this._hideClone(),
								N(ge, this.options.chosenClass, !1),
								(et.clone = ge)),
						  (a.cloneId = it(function () {
								le("clone", a),
									et.eventCanceled ||
										(a.options.removeCloneOnHide ||
											he.insertBefore(ge, ue),
										a._hideClone(),
										ce({ sortable: a, name: "clone" }));
						  })),
						  !t && N(ue, n.dragClass, !0),
						  t
								? ((Le = !0),
								  (a._loopId = setInterval(
										a._emulateDragOver,
										50
								  )))
								: (M(document, "mouseup", a._onDrop),
								  M(document, "touchend", a._onDrop),
								  M(document, "touchcancel", a._onDrop),
								  r &&
										((r.effectAllowed = "move"),
										n.setData && n.setData.call(a, r, ue)),
								  O(document, "drop", a),
								  z(ue, "transform", "translateZ(0)")),
						  (Be = !0),
						  (a._dragStartId = it(a._dragStarted.bind(a, t, e))),
						  O(document, "selectstart", a),
						  (De = !0),
						  I && z(document.body, "user-select", "none"));
			},
			_onDragOver: function (e) {
				var t,
					a,
					r,
					n,
					i = this.el,
					s = e.target,
					o = this.options,
					l = o.group,
					c = et.active,
					u = _e === l,
					d = o.sort,
					f = ke || c,
					h = this,
					p = !1;
				if (!je) {
					if (
						(void 0 !== e.preventDefault &&
							e.cancelable &&
							e.preventDefault(),
						(s = B(s, o.draggable, i, !0)),
						A("dragOver"),
						et.eventCanceled)
					)
						return p;
					if (
						ue.contains(e.target) ||
						(s.animated && s.animatingX && s.animatingY) ||
						h._ignoreWhileAnimating === s
					)
						return O(!1);
					if (
						((Le = !1),
						c &&
							!o.disabled &&
							(u
								? d || (r = !he.contains(ue))
								: ke === this ||
								  ((this.lastPutMode = _e.checkPull(
										this,
										c,
										ue,
										e
								  )) &&
										l.checkPut(this, c, ue, e))))
					) {
						if (
							((n = "vertical" === this._getDirection(e, s)),
							(t = q(ue)),
							A("dragOverValid"),
							et.eventCanceled)
						)
							return p;
						if (r)
							return (
								(de = he),
								D(),
								this._hideClone(),
								A("revert"),
								et.eventCanceled ||
									(pe
										? he.insertBefore(ue, pe)
										: he.appendChild(ue)),
								O(!0)
							);
						var m = G(i, o.draggable);
						if (
							!m ||
							((function (e, t, a) {
								var r = q(G(a.el, a.options.draggable)),
									n = 10;
								return t
									? e.clientX > r.right + n ||
											(e.clientX <= r.right &&
												e.clientY > r.bottom &&
												e.clientX >= r.left)
									: (e.clientX > r.right &&
											e.clientY > r.top) ||
											(e.clientX <= r.right &&
												e.clientY > r.bottom + n);
							})(e, n, this) &&
								!m.animated)
						) {
							if (m === ue) return O(!1);
							if (
								(m && i === e.target && (s = m),
								s && (a = q(s)),
								!1 !== tt(he, i, ue, t, s, a, e, !!s))
							)
								return (
									D(), i.appendChild(ue), (de = i), M(), O(!0)
								);
						} else if (s.parentNode === i) {
							a = q(s);
							var g,
								b,
								v,
								y = ue.parentNode !== i,
								T = !(function (e, t, a) {
									var r = a ? e.left : e.top,
										n = a ? e.right : e.bottom,
										i = a ? e.width : e.height,
										s = a ? t.left : t.top,
										o = a ? t.right : t.bottom,
										l = a ? t.width : t.height;
									return (
										r === s ||
										n === o ||
										r + i / 2 === s + l / 2
									);
								})(
									(ue.animated && ue.toRect) || t,
									(s.animated && s.toRect) || a,
									n
								),
								_ = n ? "top" : "left",
								k = W(s, "top", "top") || W(ue, "top", "top"),
								S = k ? k.scrollTop : void 0;
							if (
								(Oe !== s &&
									((b = a[_]),
									(Ne = !1),
									(ze = (!T && o.invertSwap) || y)),
								0 !==
									(g = (function (e, t, a, r, n, i, s, o) {
										var l = r ? e.clientY : e.clientX,
											c = r ? a.height : a.width,
											u = r ? a.top : a.left,
											d = r ? a.bottom : a.right,
											f = !1;
										if (!s)
											if (o && Pe < c * n) {
												if (
													(!Ne &&
														(1 === Me
															? l >
															  u + (c * i) / 2
															: l <
															  d -
																	(c * i) /
																		2) &&
														(Ne = !0),
													Ne)
												)
													f = !0;
												else if (
													1 === Me
														? l < u + Pe
														: l > d - Pe
												)
													return -Me;
											} else if (
												l > u + (c * (1 - n)) / 2 &&
												l < d - (c * (1 - n)) / 2
											)
												return (function (e) {
													return $(ue) < $(e)
														? 1
														: -1;
												})(t);
										if (
											(f = f || s) &&
											(l < u + (c * i) / 2 ||
												l > d - (c * i) / 2)
										)
											return l > u + c / 2 ? 1 : -1;
										return 0;
									})(
										e,
										s,
										a,
										n,
										T ? 1 : o.swapThreshold,
										null == o.invertedSwapThreshold
											? o.swapThreshold
											: o.invertedSwapThreshold,
										ze,
										Oe === s
									)))
							) {
								var E = $(ue);
								do {
									(E -= g), (v = de.children[E]);
								} while (
									v &&
									("none" === z(v, "display") || v === fe)
								);
							}
							if (0 === g || v === s) return O(!1);
							(Oe = s), (Me = g);
							var C = s.nextElementSibling,
								I = !1,
								x = tt(he, i, ue, t, s, a, e, (I = 1 === g));
							if (!1 !== x)
								return (
									(1 !== x && -1 !== x) || (I = 1 === x),
									(je = !0),
									setTimeout(rt, 30),
									D(),
									I && !C
										? i.appendChild(ue)
										: s.parentNode.insertBefore(
												ue,
												I ? C : s
										  ),
									k && J(k, 0, S - k.scrollTop),
									(de = ue.parentNode),
									void 0 === b ||
										ze ||
										(Pe = Math.abs(b - q(s)[_])),
									M(),
									O(!0)
								);
						}
						if (i.contains(ue)) return O(!1);
					}
					return !1;
				}
				function A(o, l) {
					le(
						o,
						h,
						w(
							{
								evt: e,
								isOwner: u,
								axis: n ? "vertical" : "horizontal",
								revert: r,
								dragRect: t,
								targetRect: a,
								canSort: d,
								fromSortable: f,
								target: s,
								completed: O,
								onMove: function (a, r) {
									return tt(he, i, ue, t, a, q(a), e, r);
								},
								changed: M,
							},
							l
						)
					);
				}
				function D() {
					A("dragOverAnimationCapture"),
						h.captureAnimationState(),
						h !== f && f.captureAnimationState();
				}
				function O(t) {
					return (
						A("dragOverCompleted", { insertion: t }),
						t &&
							(u ? c._hideClone() : c._showClone(h),
							h !== f &&
								(N(
									ue,
									ke
										? ke.options.ghostClass
										: c.options.ghostClass,
									!1
								),
								N(ue, o.ghostClass, !0)),
							ke !== h && h !== et.active
								? (ke = h)
								: h === et.active && ke && (ke = null),
							f === h && (h._ignoreWhileAnimating = s),
							h.animateAll(function () {
								A("dragOverAnimationComplete"),
									(h._ignoreWhileAnimating = null);
							}),
							h !== f &&
								(f.animateAll(),
								(f._ignoreWhileAnimating = null))),
						((s === ue && !ue.animated) ||
							(s === i && !s.animated)) &&
							(Oe = null),
						o.dragoverBubble ||
							e.rootEl ||
							s === document ||
							(ue.parentNode[ae]._isOutsideThisEl(e.target),
							!t && Je(e)),
						!o.dragoverBubble &&
							e.stopPropagation &&
							e.stopPropagation(),
						(p = !0)
					);
				}
				function M() {
					(ye = $(ue)),
						(Te = $(ue, o.draggable)),
						ce({
							sortable: h,
							name: "change",
							toEl: i,
							newIndex: ye,
							newDraggableIndex: Te,
							originalEvent: e,
						});
				}
			},
			_ignoreWhileAnimating: null,
			_offMoveEvents: function () {
				M(document, "mousemove", this._onTouchMove),
					M(document, "touchmove", this._onTouchMove),
					M(document, "pointermove", this._onTouchMove),
					M(document, "dragover", Je),
					M(document, "mousemove", Je),
					M(document, "touchmove", Je);
			},
			_offUpEvents: function () {
				var e = this.el.ownerDocument;
				M(e, "mouseup", this._onDrop),
					M(e, "touchend", this._onDrop),
					M(e, "pointerup", this._onDrop),
					M(e, "touchcancel", this._onDrop),
					M(document, "selectstart", this);
			},
			_onDrop: function (e) {
				var t = this.el,
					a = this.options;
				(ye = $(ue)),
					(Te = $(ue, a.draggable)),
					le("drop", this, { evt: e }),
					(de = ue && ue.parentNode),
					(ye = $(ue)),
					(Te = $(ue, a.draggable)),
					et.eventCanceled ||
						((Be = !1),
						(ze = !1),
						(Ne = !1),
						clearInterval(this._loopId),
						clearTimeout(this._dragStartTimer),
						st(this.cloneId),
						st(this._dragStartId),
						this.nativeDraggable &&
							(M(document, "drop", this),
							M(t, "dragstart", this._onDragStart)),
						this._offMoveEvents(),
						this._offUpEvents(),
						I && z(document.body, "user-select", ""),
						z(ue, "transform", ""),
						e &&
							(De &&
								(e.cancelable && e.preventDefault(),
								!a.dropBubble && e.stopPropagation()),
							fe &&
								fe.parentNode &&
								fe.parentNode.removeChild(fe),
							(he === de || (ke && "clone" !== ke.lastPutMode)) &&
								ge &&
								ge.parentNode &&
								ge.parentNode.removeChild(ge),
							ue &&
								(this.nativeDraggable && M(ue, "dragend", this),
								at(ue),
								(ue.style["will-change"] = ""),
								De &&
									!Be &&
									N(
										ue,
										ke
											? ke.options.ghostClass
											: this.options.ghostClass,
										!1
									),
								N(ue, this.options.chosenClass, !1),
								ce({
									sortable: this,
									name: "unchoose",
									toEl: de,
									newIndex: null,
									newDraggableIndex: null,
									originalEvent: e,
								}),
								he !== de
									? (ye >= 0 &&
											(ce({
												rootEl: de,
												name: "add",
												toEl: de,
												fromEl: he,
												originalEvent: e,
											}),
											ce({
												sortable: this,
												name: "remove",
												toEl: de,
												originalEvent: e,
											}),
											ce({
												rootEl: de,
												name: "sort",
												toEl: de,
												fromEl: he,
												originalEvent: e,
											}),
											ce({
												sortable: this,
												name: "sort",
												toEl: de,
												originalEvent: e,
											})),
									  ke && ke.save())
									: ye !== ve &&
									  ye >= 0 &&
									  (ce({
											sortable: this,
											name: "update",
											toEl: de,
											originalEvent: e,
									  }),
									  ce({
											sortable: this,
											name: "sort",
											toEl: de,
											originalEvent: e,
									  })),
								et.active &&
									((null != ye && -1 !== ye) ||
										((ye = ve), (Te = we)),
									ce({
										sortable: this,
										name: "end",
										toEl: de,
										originalEvent: e,
									}),
									this.save())))),
					this._nulling();
			},
			_nulling: function () {
				le("nulling", this),
					(he =
						ue =
						de =
						fe =
						pe =
						ge =
						me =
						be =
						Se =
						Ee =
						De =
						ye =
						Te =
						ve =
						we =
						Oe =
						Me =
						ke =
						_e =
						et.dragged =
						et.ghost =
						et.clone =
						et.active =
							null),
					He.forEach(function (e) {
						e.checked = !0;
					}),
					(He.length = Ce = Ie = 0);
			},
			handleEvent: function (e) {
				switch (e.type) {
					case "drop":
					case "dragend":
						this._onDrop(e);
						break;
					case "dragenter":
					case "dragover":
						ue &&
							(this._onDragOver(e),
							(function (e) {
								e.dataTransfer &&
									(e.dataTransfer.dropEffect = "move");
								e.cancelable && e.preventDefault();
							})(e));
						break;
					case "selectstart":
						e.preventDefault();
				}
			},
			toArray: function () {
				for (
					var e,
						t = [],
						a = this.el.children,
						r = 0,
						n = a.length,
						i = this.options;
					r < n;
					r++
				)
					B((e = a[r]), i.draggable, this.el, !1) &&
						t.push(e.getAttribute(i.dataIdAttr) || nt(e));
				return t;
			},
			sort: function (e) {
				var t = {},
					a = this.el;
				this.toArray().forEach(function (e, r) {
					var n = a.children[r];
					B(n, this.options.draggable, a, !1) && (t[e] = n);
				}, this),
					e.forEach(function (e) {
						t[e] && (a.removeChild(t[e]), a.appendChild(t[e]));
					});
			},
			save: function () {
				var e = this.options.store;
				e && e.set && e.set(this);
			},
			closest: function (e, t) {
				return B(e, t || this.options.draggable, this.el, !1);
			},
			option: function (e, t) {
				var a = this.options;
				if (void 0 === t) return a[e];
				var r = se.modifyOption(this, e, t);
				(a[e] = void 0 !== r ? r : t), "group" === e && Ve(a);
			},
			destroy: function () {
				le("destroy", this);
				var e = this.el;
				(e[ae] = null),
					M(e, "mousedown", this._onTapStart),
					M(e, "touchstart", this._onTapStart),
					M(e, "pointerdown", this._onTapStart),
					this.nativeDraggable &&
						(M(e, "dragover", this), M(e, "dragenter", this)),
					Array.prototype.forEach.call(
						e.querySelectorAll("[draggable]"),
						function (e) {
							e.removeAttribute("draggable");
						}
					),
					this._onDrop(),
					this._disableDelayedDragEvents(),
					Re.splice(Re.indexOf(this.el), 1),
					(this.el = e = null);
			},
			_hideClone: function () {
				if (!be) {
					if ((le("hideClone", this), et.eventCanceled)) return;
					z(ge, "display", "none"),
						this.options.removeCloneOnHide &&
							ge.parentNode &&
							ge.parentNode.removeChild(ge),
						(be = !0);
				}
			},
			_showClone: function (e) {
				if ("clone" === e.lastPutMode) {
					if (be) {
						if ((le("showClone", this), et.eventCanceled)) return;
						he.contains(ue) && !this.options.group.revertClone
							? he.insertBefore(ge, ue)
							: pe
							? he.insertBefore(ge, pe)
							: he.appendChild(ge),
							this.options.group.revertClone &&
								this.animate(ue, ge),
							z(ge, "display", ""),
							(be = !1);
					}
				} else this._hideClone();
			},
		}),
			qe &&
				O(document, "touchmove", function (e) {
					(et.active || Be) && e.cancelable && e.preventDefault();
				}),
			(et.utils = {
				on: O,
				off: M,
				css: z,
				find: j,
				is: function (e, t) {
					return !!B(e, t, e, !1);
				},
				extend: function (e, t) {
					if (e && t)
						for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
					return e;
				},
				throttle: Z,
				closest: B,
				toggleClass: N,
				clone: Q,
				index: $,
				nextTick: it,
				cancelNextTick: st,
				detectDirection: Ye,
				getChild: X,
			}),
			(et.get = function (e) {
				return e[ae];
			}),
			(et.mount = function () {
				for (
					var e = arguments.length, t = new Array(e), a = 0;
					a < e;
					a++
				)
					t[a] = arguments[a];
				t[0].constructor === Array && (t = t[0]),
					t.forEach(function (e) {
						if (!e.prototype || !e.prototype.constructor)
							throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
								{}.toString.call(e)
							);
						e.utils && (et.utils = w({}, et.utils, e.utils)),
							se.mount(e);
					});
			}),
			(et.create = function (e, t) {
				return new et(e, t);
			}),
			(et.version = "1.10.2");
		var ot,
			lt,
			ct,
			ut,
			dt,
			ft,
			ht = [],
			pt = !1;
		function mt() {
			ht.forEach(function (e) {
				clearInterval(e.pid);
			}),
				(ht = []);
		}
		function gt() {
			clearInterval(ft);
		}
		var bt = Z(function (e, t, a, r) {
				if (t.scroll) {
					var n,
						i = (e.touches ? e.touches[0] : e).clientX,
						s = (e.touches ? e.touches[0] : e).clientY,
						o = t.scrollSensitivity,
						l = t.scrollSpeed,
						c = H(),
						u = !1;
					lt !== a &&
						((lt = a),
						mt(),
						(ot = t.scroll),
						(n = t.scrollFn),
						!0 === ot && (ot = V(a, !0)));
					var d = 0,
						f = ot;
					do {
						var h = f,
							p = q(h),
							m = p.top,
							g = p.bottom,
							b = p.left,
							v = p.right,
							y = p.width,
							w = p.height,
							T = void 0,
							_ = void 0,
							k = h.scrollWidth,
							S = h.scrollHeight,
							E = z(h),
							C = h.scrollLeft,
							I = h.scrollTop;
						h === c
							? ((T =
									y < k &&
									("auto" === E.overflowX ||
										"scroll" === E.overflowX ||
										"visible" === E.overflowX)),
							  (_ =
									w < S &&
									("auto" === E.overflowY ||
										"scroll" === E.overflowY ||
										"visible" === E.overflowY)))
							: ((T =
									y < k &&
									("auto" === E.overflowX ||
										"scroll" === E.overflowX)),
							  (_ =
									w < S &&
									("auto" === E.overflowY ||
										"scroll" === E.overflowY)));
						var x =
								T &&
								(Math.abs(v - i) <= o && C + y < k) -
									(Math.abs(b - i) <= o && !!C),
							A =
								_ &&
								(Math.abs(g - s) <= o && I + w < S) -
									(Math.abs(m - s) <= o && !!I);
						if (!ht[d])
							for (var D = 0; D <= d; D++) ht[D] || (ht[D] = {});
						(ht[d].vx == x && ht[d].vy == A && ht[d].el === h) ||
							((ht[d].el = h),
							(ht[d].vx = x),
							(ht[d].vy = A),
							clearInterval(ht[d].pid),
							(0 == x && 0 == A) ||
								((u = !0),
								(ht[d].pid = setInterval(
									function () {
										r &&
											0 === this.layer &&
											et.active._onTouchMove(dt);
										var t = ht[this.layer].vy
												? ht[this.layer].vy * l
												: 0,
											a = ht[this.layer].vx
												? ht[this.layer].vx * l
												: 0;
										("function" == typeof n &&
											"continue" !==
												n.call(
													et.dragged.parentNode[ae],
													a,
													t,
													e,
													dt,
													ht[this.layer].el
												)) ||
											J(ht[this.layer].el, a, t);
									}.bind({ layer: d }),
									24
								)))),
							d++;
					} while (t.bubbleScroll && f !== c && (f = V(f, !1)));
					pt = u;
				}
			}, 30),
			vt = function (e) {
				var t = e.originalEvent,
					a = e.putSortable,
					r = e.dragEl,
					n = e.activeSortable,
					i = e.dispatchSortableEvent,
					s = e.hideGhostForTarget,
					o = e.unhideGhostForTarget;
				if (t) {
					var l = a || n;
					s();
					var c =
							t.changedTouches && t.changedTouches.length
								? t.changedTouches[0]
								: t,
						u = document.elementFromPoint(c.clientX, c.clientY);
					o(),
						l &&
							!l.el.contains(u) &&
							(i("spill"),
							this.onSpill({ dragEl: r, putSortable: a }));
				}
			};
		function yt() {}
		function wt() {}
		(yt.prototype = {
			startIndex: null,
			dragStart: function (e) {
				var t = e.oldDraggableIndex;
				this.startIndex = t;
			},
			onSpill: function (e) {
				var t = e.dragEl,
					a = e.putSortable;
				this.sortable.captureAnimationState(),
					a && a.captureAnimationState();
				var r = X(this.sortable.el, this.startIndex, this.options);
				r
					? this.sortable.el.insertBefore(t, r)
					: this.sortable.el.appendChild(t),
					this.sortable.animateAll(),
					a && a.animateAll();
			},
			drop: vt,
		}),
			y(yt, { pluginName: "revertOnSpill" }),
			(wt.prototype = {
				onSpill: function (e) {
					var t = e.dragEl,
						a = e.putSortable || this.sortable;
					a.captureAnimationState(),
						t.parentNode && t.parentNode.removeChild(t),
						a.animateAll();
				},
				drop: vt,
			}),
			y(wt, { pluginName: "removeOnSpill" });
		var Tt,
			_t,
			kt,
			St,
			Et,
			Ct = [],
			It = [],
			xt = !1,
			At = !1,
			Dt = !1;
		function Ot(e, t) {
			It.forEach(function (a, r) {
				var n = t.children[a.sortableIndex + (e ? Number(r) : 0)];
				n ? t.insertBefore(a, n) : t.appendChild(a);
			});
		}
		function Mt() {
			Ct.forEach(function (e) {
				e !== kt && e.parentNode && e.parentNode.removeChild(e);
			});
		}
		et.mount(
			new (function () {
				function e() {
					for (var e in ((this.defaults = {
						scroll: !0,
						scrollSensitivity: 30,
						scrollSpeed: 10,
						bubbleScroll: !0,
					}),
					this))
						"_" === e.charAt(0) &&
							"function" == typeof this[e] &&
							(this[e] = this[e].bind(this));
				}
				return (
					(e.prototype = {
						dragStarted: function (e) {
							var t = e.originalEvent;
							this.sortable.nativeDraggable
								? O(
										document,
										"dragover",
										this._handleAutoScroll
								  )
								: this.options.supportPointer
								? O(
										document,
										"pointermove",
										this._handleFallbackAutoScroll
								  )
								: t.touches
								? O(
										document,
										"touchmove",
										this._handleFallbackAutoScroll
								  )
								: O(
										document,
										"mousemove",
										this._handleFallbackAutoScroll
								  );
						},
						dragOverCompleted: function (e) {
							var t = e.originalEvent;
							this.options.dragOverBubble ||
								t.rootEl ||
								this._handleAutoScroll(t);
						},
						drop: function () {
							this.sortable.nativeDraggable
								? M(
										document,
										"dragover",
										this._handleAutoScroll
								  )
								: (M(
										document,
										"pointermove",
										this._handleFallbackAutoScroll
								  ),
								  M(
										document,
										"touchmove",
										this._handleFallbackAutoScroll
								  ),
								  M(
										document,
										"mousemove",
										this._handleFallbackAutoScroll
								  )),
								gt(),
								mt(),
								clearTimeout(L),
								(L = void 0);
						},
						nulling: function () {
							(dt = lt = ot = pt = ft = ct = ut = null),
								(ht.length = 0);
						},
						_handleFallbackAutoScroll: function (e) {
							this._handleAutoScroll(e, !0);
						},
						_handleAutoScroll: function (e, t) {
							var a = this,
								r = (e.touches ? e.touches[0] : e).clientX,
								n = (e.touches ? e.touches[0] : e).clientY,
								i = document.elementFromPoint(r, n);
							if (((dt = e), t || E || S || I)) {
								bt(e, this.options, i, t);
								var s = V(i, !0);
								!pt ||
									(ft && r === ct && n === ut) ||
									(ft && gt(),
									(ft = setInterval(function () {
										var i = V(
											document.elementFromPoint(r, n),
											!0
										);
										i !== s && ((s = i), mt()),
											bt(e, a.options, i, t);
									}, 10)),
									(ct = r),
									(ut = n));
							} else {
								if (
									!this.options.bubbleScroll ||
									V(i, !0) === H()
								)
									return void mt();
								bt(e, this.options, V(i, !1), !1);
							}
						},
					}),
					y(e, { pluginName: "scroll", initializeByDefault: !0 })
				);
			})()
		),
			et.mount(wt, yt);
		var Pt = et,
			Ft = a(3),
			Bt = a.n(Ft);
		a(135), a(136);
		const Lt = "20.12";
		Pt.mount(
			new (function () {
				function e(e) {
					for (var t in this)
						"_" === t.charAt(0) &&
							"function" == typeof this[t] &&
							(this[t] = this[t].bind(this));
					e.options.supportPointer
						? O(document, "pointerup", this._deselectMultiDrag)
						: (O(document, "mouseup", this._deselectMultiDrag),
						  O(document, "touchend", this._deselectMultiDrag)),
						O(document, "keydown", this._checkKeyDown),
						O(document, "keyup", this._checkKeyUp),
						(this.defaults = {
							selectedClass: "sortable-selected",
							multiDragKey: null,
							setData: function (t, a) {
								var r = "";
								Ct.length && _t === e
									? Ct.forEach(function (e, t) {
											r +=
												(t ? ", " : "") + e.textContent;
									  })
									: (r = a.textContent),
									t.setData("Text", r);
							},
						});
				}
				return (
					(e.prototype = {
						multiDragKeyDown: !1,
						isMultiDrag: !1,
						delayStartGlobal: function (e) {
							var t = e.dragEl;
							kt = t;
						},
						delayEnded: function () {
							this.isMultiDrag = ~Ct.indexOf(kt);
						},
						setupClone: function (e) {
							var t = e.sortable,
								a = e.cancel;
							if (this.isMultiDrag) {
								for (var r = 0; r < Ct.length; r++)
									It.push(Q(Ct[r])),
										(It[r].sortableIndex =
											Ct[r].sortableIndex),
										(It[r].draggable = !1),
										(It[r].style["will-change"] = ""),
										N(
											It[r],
											this.options.selectedClass,
											!1
										),
										Ct[r] === kt &&
											N(
												It[r],
												this.options.chosenClass,
												!1
											);
								t._hideClone(), a();
							}
						},
						clone: function (e) {
							var t = e.sortable,
								a = e.rootEl,
								r = e.dispatchSortableEvent,
								n = e.cancel;
							this.isMultiDrag &&
								(this.options.removeCloneOnHide ||
									(Ct.length &&
										_t === t &&
										(Ot(!0, a), r("clone"), n())));
						},
						showClone: function (e) {
							var t = e.cloneNowShown,
								a = e.rootEl,
								r = e.cancel;
							this.isMultiDrag &&
								(Ot(!1, a),
								It.forEach(function (e) {
									z(e, "display", "");
								}),
								t(),
								(Et = !1),
								r());
						},
						hideClone: function (e) {
							var t = this,
								a = (e.sortable, e.cloneNowHidden),
								r = e.cancel;
							this.isMultiDrag &&
								(It.forEach(function (e) {
									z(e, "display", "none"),
										t.options.removeCloneOnHide &&
											e.parentNode &&
											e.parentNode.removeChild(e);
								}),
								a(),
								(Et = !0),
								r());
						},
						dragStartGlobal: function (e) {
							e.sortable;
							!this.isMultiDrag &&
								_t &&
								_t.multiDrag._deselectMultiDrag(),
								Ct.forEach(function (e) {
									e.sortableIndex = $(e);
								}),
								(Ct = Ct.sort(function (e, t) {
									return e.sortableIndex - t.sortableIndex;
								})),
								(Dt = !0);
						},
						dragStarted: function (e) {
							var t = this,
								a = e.sortable;
							if (this.isMultiDrag) {
								if (
									this.options.sort &&
									(a.captureAnimationState(),
									this.options.animation)
								) {
									Ct.forEach(function (e) {
										e !== kt &&
											z(e, "position", "absolute");
									});
									var r = q(kt, !1, !0, !0);
									Ct.forEach(function (e) {
										e !== kt && ee(e, r);
									}),
										(At = !0),
										(xt = !0);
								}
								a.animateAll(function () {
									(At = !1),
										(xt = !1),
										t.options.animation &&
											Ct.forEach(function (e) {
												te(e);
											}),
										t.options.sort && Mt();
								});
							}
						},
						dragOver: function (e) {
							var t = e.target,
								a = e.completed,
								r = e.cancel;
							At && ~Ct.indexOf(t) && (a(!1), r());
						},
						revert: function (e) {
							var t = e.fromSortable,
								a = e.rootEl,
								r = e.sortable,
								n = e.dragRect;
							Ct.length > 1 &&
								(Ct.forEach(function (e) {
									r.addAnimationState({
										target: e,
										rect: At ? q(e) : n,
									}),
										te(e),
										(e.fromRect = n),
										t.removeAnimationState(e);
								}),
								(At = !1),
								(function (e, t) {
									Ct.forEach(function (a, r) {
										var n =
											t.children[
												a.sortableIndex +
													(e ? Number(r) : 0)
											];
										n
											? t.insertBefore(a, n)
											: t.appendChild(a);
									});
								})(!this.options.removeCloneOnHide, a));
						},
						dragOverCompleted: function (e) {
							var t = e.sortable,
								a = e.isOwner,
								r = e.insertion,
								n = e.activeSortable,
								i = e.parentEl,
								s = e.putSortable,
								o = this.options;
							if (r) {
								if (
									(a && n._hideClone(),
									(xt = !1),
									o.animation &&
										Ct.length > 1 &&
										(At || (!a && !n.options.sort && !s)))
								) {
									var l = q(kt, !1, !0, !0);
									Ct.forEach(function (e) {
										e !== kt &&
											(ee(e, l), i.appendChild(e));
									}),
										(At = !0);
								}
								if (!a)
									if ((At || Mt(), Ct.length > 1)) {
										var c = Et;
										n._showClone(t),
											n.options.animation &&
												!Et &&
												c &&
												It.forEach(function (e) {
													n.addAnimationState({
														target: e,
														rect: St,
													}),
														(e.fromRect = St),
														(e.thisAnimationDuration =
															null);
												});
									} else n._showClone(t);
							}
						},
						dragOverAnimationCapture: function (e) {
							var t = e.dragRect,
								a = e.isOwner,
								r = e.activeSortable;
							if (
								(Ct.forEach(function (e) {
									e.thisAnimationDuration = null;
								}),
								r.options.animation &&
									!a &&
									r.multiDrag.isMultiDrag)
							) {
								St = y({}, t);
								var n = U(kt, !0);
								(St.top -= n.f), (St.left -= n.e);
							}
						},
						dragOverAnimationComplete: function () {
							At && ((At = !1), Mt());
						},
						drop: function (e) {
							var t = e.originalEvent,
								a = e.rootEl,
								r = e.parentEl,
								n = e.sortable,
								i = e.dispatchSortableEvent,
								s = e.oldIndex,
								o = e.putSortable,
								l = o || this.sortable;
							if (t) {
								var c = this.options,
									u = r.children;
								if (!Dt)
									if (
										(c.multiDragKey &&
											!this.multiDragKeyDown &&
											this._deselectMultiDrag(),
										N(
											kt,
											c.selectedClass,
											!~Ct.indexOf(kt)
										),
										~Ct.indexOf(kt))
									)
										Ct.splice(Ct.indexOf(kt), 1),
											(Tt = null),
											oe({
												sortable: n,
												rootEl: a,
												name: "deselect",
												targetEl: kt,
												originalEvt: t,
											});
									else {
										if (
											(Ct.push(kt),
											oe({
												sortable: n,
												rootEl: a,
												name: "select",
												targetEl: kt,
												originalEvt: t,
											}),
											t.shiftKey &&
												Tt &&
												n.el.contains(Tt))
										) {
											var d,
												f,
												h = $(Tt),
												p = $(kt);
											if (~h && ~p && h !== p)
												for (
													p > h
														? ((f = h), (d = p))
														: ((f = p),
														  (d = h + 1));
													f < d;
													f++
												)
													~Ct.indexOf(u[f]) ||
														(N(
															u[f],
															c.selectedClass,
															!0
														),
														Ct.push(u[f]),
														oe({
															sortable: n,
															rootEl: a,
															name: "select",
															targetEl: u[f],
															originalEvt: t,
														}));
										} else Tt = kt;
										_t = l;
									}
								if (Dt && this.isMultiDrag) {
									if (
										(r[ae].options.sort || r !== a) &&
										Ct.length > 1
									) {
										var m = q(kt),
											g = $(
												kt,
												":not(." +
													this.options.selectedClass +
													")"
											);
										if (
											(!xt &&
												c.animation &&
												(kt.thisAnimationDuration =
													null),
											l.captureAnimationState(),
											!xt &&
												(c.animation &&
													((kt.fromRect = m),
													Ct.forEach(function (e) {
														if (
															((e.thisAnimationDuration =
																null),
															e !== kt)
														) {
															var t = At
																? q(e)
																: m;
															(e.fromRect = t),
																l.addAnimationState(
																	{
																		target: e,
																		rect: t,
																	}
																);
														}
													})),
												Mt(),
												Ct.forEach(function (e) {
													u[g]
														? r.insertBefore(
																e,
																u[g]
														  )
														: r.appendChild(e),
														g++;
												}),
												s === $(kt)))
										) {
											var b = !1;
											Ct.forEach(function (e) {
												e.sortableIndex === $(e) ||
													(b = !0);
											}),
												b && i("update");
										}
										Ct.forEach(function (e) {
											te(e);
										}),
											l.animateAll();
									}
									_t = l;
								}
								(a === r || (o && "clone" !== o.lastPutMode)) &&
									It.forEach(function (e) {
										e.parentNode &&
											e.parentNode.removeChild(e);
									});
							}
						},
						nullingGlobal: function () {
							(this.isMultiDrag = Dt = !1), (It.length = 0);
						},
						destroyGlobal: function () {
							this._deselectMultiDrag(),
								M(
									document,
									"pointerup",
									this._deselectMultiDrag
								),
								M(document, "mouseup", this._deselectMultiDrag),
								M(
									document,
									"touchend",
									this._deselectMultiDrag
								),
								M(document, "keydown", this._checkKeyDown),
								M(document, "keyup", this._checkKeyUp);
						},
						_deselectMultiDrag: function (e) {
							if (
								!(
									(void 0 !== Dt && Dt) ||
									_t !== this.sortable ||
									(e &&
										B(
											e.target,
											this.options.draggable,
											this.sortable.el,
											!1
										)) ||
									(e && 0 !== e.button)
								)
							)
								for (; Ct.length; ) {
									var t = Ct[0];
									N(t, this.options.selectedClass, !1),
										Ct.shift(),
										oe({
											sortable: this.sortable,
											rootEl: this.sortable.el,
											name: "deselect",
											targetEl: t,
											originalEvt: e,
										});
								}
						},
						_checkKeyDown: function (e) {
							e.key === this.options.multiDragKey &&
								(this.multiDragKeyDown = !0);
						},
						_checkKeyUp: function (e) {
							e.key === this.options.multiDragKey &&
								(this.multiDragKeyDown = !1);
						},
					}),
					y(e, {
						pluginName: "multiDrag",
						utils: {
							select: function (e) {
								var t = e.parentNode[ae];
								t &&
									t.options.multiDrag &&
									!~Ct.indexOf(e) &&
									(_t &&
										_t !== t &&
										(_t.multiDrag._deselectMultiDrag(),
										(_t = t)),
									N(e, t.options.selectedClass, !0),
									Ct.push(e));
							},
							deselect: function (e) {
								var t = e.parentNode[ae],
									a = Ct.indexOf(e);
								t &&
									t.options.multiDrag &&
									~a &&
									(N(e, t.options.selectedClass, !1),
									Ct.splice(a, 1));
							},
						},
						eventProperties: function () {
							var e = this,
								t = [],
								a = [];
							return (
								Ct.forEach(function (r) {
									var n;
									t.push({
										multiDragElement: r,
										index: r.sortableIndex,
									}),
										(n =
											At && r !== kt
												? -1
												: At
												? $(
														r,
														":not(." +
															e.options
																.selectedClass +
															")"
												  )
												: $(r)),
										a.push({
											multiDragElement: r,
											index: n,
										});
								}),
								{
									items: _(Ct),
									clones: [].concat(It),
									oldIndicies: t,
									newIndicies: a,
								}
							);
						},
						optionListeners: {
							multiDragKey: function (e) {
								return (
									"ctrl" === (e = e.toLowerCase())
										? (e = "Control")
										: e.length > 1 &&
										  (e =
												e.charAt(0).toUpperCase() +
												e.substr(1)),
									e
								);
							},
						},
					})
				);
			})()
		);
		const Rt = document.querySelector.bind(document),
			Nt = document.querySelectorAll.bind(document),
			zt = Rt("#fft_size"),
			Ut = Rt("#freq_min"),
			jt = Rt("#freq_max"),
			Ht = Rt("#smoothing"),
			qt = Rt("#mode"),
			Wt = Rt("#gradient"),
			Xt = Rt("#scaleX"),
			Gt = Rt("#scaleY"),
			$t = Rt("#sensitivity"),
			Yt = Rt("#show_peaks"),
			Vt = Rt("#cycle_grad"),
			Kt = Rt("#random_mode"),
			Zt = Rt("#led_display"),
			Jt = Rt("#lumi_bars"),
			Qt = Rt("#repeat"),
			ea = Rt("#show_song"),
			ta = Rt("#no_shadow"),
			aa = Rt("#lo_res"),
			ra = Rt("#fps"),
			na = Rt("#source"),
			ia = Rt("#playlists"),
			sa = Rt("#line_width"),
			oa = Rt("#fill_alpha"),
			la = Rt("#bar_space"),
			ca = Rt("#reflex"),
			ua = Rt("#background"),
			da = Rt("#bg_img_dim"),
			fa = Rt("#bg_img_fit"),
			ha = Rt("#radial"),
			pa = Rt("#spin"),
			ma = Rt("#stereo"),
			ga = Rt("#split_grad"),
			ba = Rt("#volume"),
			va = Rt("#info_timeout"),
			ya = Rt("#track_timeout"),
			wa = Rt("#end_timeout"),
			Ta = Rt("#show_cover");
		let _a,
			ka,
			Sa,
			Ea,
			Ca,
			Ia,
			xa,
			Aa,
			Da,
			Oa,
			Ma,
			Pa,
			Fa,
			Ba = !1,
			La = !1,
			Ra = [],
			Na = {};
		const za = {
				default: {
					mode: 0,
					fftSize: 8192,
					freqMin: 20,
					freqMax: 22e3,
					smoothing: 0.5,
					gradient: "prism",
					background: 0,
					cycleGrad: 1,
					randomMode: 0,
					ledDisplay: 0,
					lumiBars: 0,
					sensitivity: 1,
					showScaleX: 1,
					showScaleY: 1,
					showPeaks: 1,
					showSong: 1,
					repeat: 0,
					noShadow: 1,
					loRes: 0,
					showFPS: 0,
					lineWidth: 2,
					fillAlpha: 0.1,
					barSpace: 0.1,
					reflex: 0,
					bgImageDim: 0.3,
					bgImageFit: 1,
					radial: 0,
					spin: 2,
					stereo: 0,
					splitGrad: 0,
				},
				fullres: {
					fftSize: 8192,
					freqMin: 20,
					freqMax: 22e3,
					mode: 0,
					radial: 0,
					randomMode: 0,
					reflex: 0,
					smoothing: 0.5,
				},
				octave: {
					barSpace: 0.1,
					ledDisplay: 0,
					lumiBars: 0,
					mode: 3,
					radial: 0,
					randomMode: 0,
					reflex: 0,
				},
				ledbars: {
					background: 0,
					barSpace: 0.5,
					ledDisplay: 1,
					lumiBars: 0,
					mode: 3,
					radial: 0,
					randomMode: 0,
					reflex: 0,
				},
				demo: { cycleGrad: 1, randomMode: 6 },
			},
			Ua = {
				apple: {
					name: "Apple ][",
					bgColor: "#111",
					colorStops: [
						{ pos: 0.1667, color: "#61bb46" },
						{ pos: 0.3333, color: "#fdb827" },
						{ pos: 0.5, color: "#f5821f" },
						{ pos: 0.6667, color: "#e03a3e" },
						{ pos: 0.8333, color: "#963d97" },
						{ pos: 1, color: "#009ddc" },
					],
					disabled: !1,
				},
				aurora: {
					name: "Aurora",
					bgColor: "#0e172a",
					colorStops: [
						{ pos: 0.1, color: "hsl( 120, 100%, 50% )" },
						{ pos: 1, color: "hsl( 216, 100%, 50% )" },
					],
					disabled: !1,
				},
				borealis: {
					name: "Borealis",
					bgColor: "#0d1526",
					colorStops: [
						{ pos: 0.1, color: "hsl( 120, 100%, 50% )" },
						{ pos: 0.5, color: "hsl( 189, 100%, 40% )" },
						{ pos: 1, color: "hsl( 290, 60%, 40% )" },
					],
					disabled: !1,
				},
				candy: {
					name: "Candy",
					bgColor: "#0d0619",
					colorStops: [
						{ pos: 0.1, color: "#ffaf7b" },
						{ pos: 0.5, color: "#d76d77" },
						{ pos: 1, color: "#3a1c71" },
					],
					disabled: !1,
				},
				classic: { name: "Classic", disabled: !1 },
				cool: {
					name: "Cool",
					bgColor: "#0b202b",
					colorStops: [
						"hsl( 208, 0%, 100% )",
						"hsl( 208, 100%, 35% )",
					],
					disabled: !1,
				},
				dusk: {
					name: "Dusk",
					bgColor: "#0e172a",
					colorStops: [
						{ pos: 0.2, color: "hsl( 55, 100%, 50% )" },
						{ pos: 1, color: "hsl( 16, 100%, 50% )" },
					],
					disabled: !1,
				},
				miami: {
					name: "Miami",
					bgColor: "#110a11",
					colorStops: [
						{ pos: 0.024, color: "rgb( 251, 198, 6 )" },
						{ pos: 0.283, color: "rgb( 224, 82, 95 )" },
						{ pos: 0.462, color: "rgb( 194, 78, 154 )" },
						{ pos: 0.794, color: "rgb( 32, 173, 190 )" },
						{ pos: 1, color: "rgb( 22, 158, 95 )" },
					],
					disabled: !1,
				},
				orient: {
					name: "Orient",
					bgColor: "#100",
					colorStops: [
						{ pos: 0.1, color: "#f00" },
						{ pos: 1, color: "#600" },
					],
					disabled: !1,
				},
				outrun: {
					name: "Outrun",
					bgColor: "#101",
					colorStops: [
						{ pos: 0, color: "rgb( 255, 223, 67 )" },
						{ pos: 0.182, color: "rgb( 250, 84, 118 )" },
						{ pos: 0.364, color: "rgb( 198, 59, 243 )" },
						{ pos: 0.525, color: "rgb( 133, 80, 255 )" },
						{ pos: 0.688, color: "rgb( 74, 104, 247 )" },
						{ pos: 1, color: "rgb( 35, 210, 255 )" },
					],
					disabled: !1,
				},
				pacific: {
					name: "Pacific Dream",
					bgColor: "#051319",
					colorStops: [
						{ pos: 0.1, color: "#34e89e" },
						{ pos: 1, color: "#0f3443" },
					],
					disabled: !1,
				},
				prism: { name: "Prism", disabled: !1 },
				rainbow: { name: "Rainbow", disabled: !1 },
				shahabi: {
					name: "Shahabi",
					bgColor: "#060613",
					colorStops: [
						{ pos: 0.1, color: "#66ff00" },
						{ pos: 1, color: "#a80077" },
					],
					disabled: !1,
				},
				summer: {
					name: "Summer",
					bgColor: "#041919",
					colorStops: [
						{ pos: 0.1, color: "#fdbb2d" },
						{ pos: 1, color: "#22c1c3" },
					],
					disabled: !1,
				},
				sunset: {
					name: "Sunset",
					bgColor: "#021119",
					colorStops: [
						{ pos: 0.1, color: "#f56217" },
						{ pos: 1, color: "#0b486b" },
					],
					disabled: !1,
				},
				tiedye: {
					name: "Tie Dye",
					bgColor: "#111",
					colorStops: [
						{ pos: 0.038, color: "rgb( 15, 209, 165 )" },
						{ pos: 0.208, color: "rgb( 15, 157, 209 )" },
						{ pos: 0.519, color: "rgb( 133, 13, 230 )" },
						{ pos: 0.731, color: "rgb( 230, 13, 202 )" },
						{ pos: 0.941, color: "rgb( 242, 180, 107 )" },
					],
					disabled: !1,
				},
			},
			ja = [
				{ value: "0", text: "Discrete frequencies", disabled: !1 },
				{ value: "10", text: "Area graph", disabled: !1 },
				{ value: "101", text: "Line graph", disabled: !1 },
				{ value: "8", text: "Full octave bands", disabled: !1 },
				{ value: "7", text: "Half octave bands", disabled: !1 },
				{ value: "6", text: "1/3rd octave bands", disabled: !1 },
				{ value: "5", text: "1/4th octave bands", disabled: !1 },
				{ value: "4", text: "1/6th octave bands", disabled: !1 },
				{ value: "3", text: "1/8th octave bands", disabled: !1 },
				{ value: "2", text: "1/12th octave bands", disabled: !1 },
				{ value: "1", text: "1/24th octave bands", disabled: !1 },
			],
			Ha = [
				{ value: "nobg", text: "Background", disabled: !1 },
				{ value: "imgfit", text: "Image Fit", disabled: !1 },
				{ value: "reflex", text: "Reflex", disabled: !1 },
				{ value: "peaks", text: "PEAKS", disabled: !1 },
				{ value: "leds", text: "LEDS", disabled: !1 },
				{ value: "lumi", text: "LUMI", disabled: !1 },
				{ value: "barSp", text: "Bar Spacing", disabled: !1 },
				{ value: "line", text: "Line Width", disabled: !1 },
				{ value: "fill", text: "Fill Opacity", disabled: !1 },
				{ value: "radial", text: "Radial", disabled: !1 },
				{ value: "spin", text: "Spin", disabled: !1 },
				{ value: "stereo", text: "Stereo", disabled: !1 },
				{ value: "split", text: "Split", disabled: !1 },
			],
			qa = [
				{ min: -70, max: -20 },
				{ min: -85, max: -25 },
				{ min: -100, max: -30 },
			],
			Wa = { info: 5, track: 10, end: 0, covers: !0 };
		function Xa() {
			_a.toggleFullscreen(), Rt("#btn_fullscreen").blur();
		}
		function Ga(e, t) {
			Array.isArray(e) || (e = [e]);
			for (const t of e)
				switch (t) {
					case ua:
					case fa:
					case da:
						const e = ua.value,
							t = fa.value;
						(_a.overlay = e > 1),
							(_a.showBgColor = 0 == e),
							_a.canvas.classList.toggle("repeat", 2 == t),
							_a.canvas.classList.toggle("cover", 0 == t),
							$a();
						break;
					case la:
						_a.barSpace = _a.isLumiBars ? 1.5 : la.value;
						break;
					case zt:
						(_a.fftSize = zt.value),
							Sr("FFT size is " + _a.fftSize + " samples");
						break;
					case oa:
						_a.fillAlpha = 10 == qt.value ? 1 : oa.value;
						break;
					case Ut:
					case jt:
						for (; Number(jt.value) <= Number(Ut.value); )
							jt.selectedIndex++;
						_a.setFreqRange(Ut.value, jt.value);
						break;
					case Wt:
						"" === Wt.value && (Wt.selectedIndex = 0),
							(_a.gradient = Wt.value);
						break;
					case Zt:
						_a.showLeds = $r(Zt);
						break;
					case sa:
						_a.lineWidth = 10 == qt.value ? 0 : sa.value;
						break;
					case aa:
						_a.loRes = $r(aa);
						break;
					case Jt:
						(_a.lumiBars = $r(Jt)), Ga(la);
						break;
					case qt:
						"" === qt.value && (qt.selectedIndex = 0);
						const a = qt.value;
						a < 10
							? (_a.mode = a)
							: ((_a.mode = 10),
							  10 == a
									? ((_a.lineWidth = 0), (_a.fillAlpha = 1))
									: ((_a.lineWidth = sa.value),
									  (_a.fillAlpha = oa.value))),
							Ga(la);
						break;
					case ha:
						(_a.radial = $r(ha)), Ga(la);
						break;
					case Kt:
						const r = Kt.value;
						Pa && (Pa = window.clearInterval(Pa)),
							r > 1 && (Pa = window.setInterval(Rr, 2500 * r));
						break;
					case ca:
						switch (ca.value) {
							case "1":
								(_a.reflexRatio = 0.4), (_a.reflexAlpha = 0.2);
								break;
							case "2":
								(_a.reflexRatio = 0.5), (_a.reflexAlpha = 1);
								break;
							default:
								_a.reflexRatio = 0;
						}
						break;
					case Xt:
						_a.showScaleX = $r(Xt);
						break;
					case Gt:
						_a.showScaleY = $r(Gt);
						break;
					case $t:
						const n = $t.value;
						_a.setSensitivity(
							Rt(`.min-db[data-preset="${n}"]`).value,
							Rt(`.max-db[data-preset="${n}"]`).value
						);
						break;
					case ra:
						_a.showFPS = $r(ra);
						break;
					case Yt:
						_a.showPeaks = $r(Yt);
						break;
					case Ht:
						(_a.smoothing = Ht.value),
							Sr("smoothingTimeConstant is " + _a.smoothing);
						break;
					case pa:
						_a.spinSpeed = pa.value;
						break;
					case ga:
						_a.splitGradient = $r(ga);
						break;
					case ma:
						_a.stereo = $r(ma);
				}
			t && Dr();
		}
		function $a(e) {
			if ((e && (Ra[Ea].src = e), ua.value > 1 && Ra[Ea].src)) {
				const e = 1 - da.value,
					t = Ra[Ea].src.replace(/'/g, "\\'");
				_a.canvas.style.backgroundImage = `linear-gradient( rgba(0,0,0,${e}) 0%, rgba(0,0,0,${e}) 100% ), url('${t}')`;
			} else _a.canvas.style.backgroundImage = "";
			_a.canvas.style.backgroundSize = "";
		}
		function Ya(e = Ea) {
			const t = Ia[e],
				a = t.dataset;
			t.removeAttribute("src"),
				(a.file = ""),
				(a.artist = ""),
				(a.title = ""),
				(a.album = ""),
				(a.codec = ""),
				(a.quality = ""),
				(a.duration = ""),
				t.load(),
				(Ra[e] = new Image()),
				e == Ea && $a();
		}
		function Va() {
			for (; ka.hasChildNodes(); ) ka.removeChild(ka.firstChild);
			br() ? (Sa = -1) : ((Sa = 0), Ya(Ea)), Ya(Ca), rr();
		}
		function Ka(e) {
			for (; ia.hasChildNodes(); ) ia.removeChild(ia.firstChild);
			const t = new Option("Select a playlist", "");
			(t.disabled = !0),
				(t.selected = !0),
				(ia.options[ia.options.length] = t);
			let a = localStorage.getItem("playlists");
			a &&
				((a = JSON.parse(a)),
				Object.keys(a).forEach((t) => {
					const r = new Option(a[t], t);
					(r.dataset.isLocal = "1"),
						t == e && (r.selected = !0),
						(ia.options[ia.options.length] = r);
				})),
				fetch("playlists.cfg")
					.then(
						(e) =>
							200 == e.status &&
							(Sr("Found legacy playlists.cfg file"), e.text())
					)
					.then((e) => {
						if (!1 !== e) {
							let t = 0;
							e.split(/[\r\n]+/).forEach((e) => {
								if ("#" != e.charAt(0) && "" != e.trim()) {
									let a = e.split(/\|/);
									2 == a.length &&
										((ia.options[ia.options.length] =
											new Option(
												a[0].trim(),
												a[1].trim()
											)),
										t++);
								}
							}),
								t
									? Sr(
											t +
												" playlists loaded from playlists.cfg"
									  )
									: Sr(
											"No playlists found in playlists.cfg",
											!0
									  );
						}
					})
					.catch((e) => {});
		}
		function Za(e, t = !1) {
			const a = e.map((e) => Ja(e.file, t));
			Promise.all(a).then((e) => {
				const t = e.reduce((e, t) => e + t, 0);
				Bt.a.alert({
					text: `${t} song${t > 1 ? "s" : ""} added to the queue`,
					time: 5,
				});
			});
		}
		function Ja(e, t = !1) {
			const a = e.slice(e.lastIndexOf(".") + 1).toLowerCase();
			let r;
			return (
				(r = ["m3u", "m3u8"].includes(a)
					? tr(e)
					: new Promise((t) => {
							er(e), t(1);
					  })),
				r.then((e) => {
					t && !br() && e > 0 && cr(ka.children.length - e);
				}),
				r
			);
		}
		function Qa(e, t) {
			const a = t.dataset,
				r = e.dataset,
				n = e.common,
				i = e.format;
			r
				? ((a.artist = r.artist || ""),
				  (a.title = r.title || ""),
				  (a.album = r.album || ""),
				  (a.codec = r.codec || ""),
				  (a.quality = r.quality || ""),
				  (a.duration = r.duration || ""))
				: ((a.artist = n.artist || a.artist),
				  (a.title = n.title || a.title),
				  (a.album = n.album
						? n.album + (n.year ? " (" + n.year + ")" : "")
						: ""),
				  (a.codec = i ? i.codec || i.container : a.codec),
				  i && i.bitsPerSample
						? (a.quality =
								Math.floor(i.sampleRate / 1e3) +
								"KHz / " +
								i.bitsPerSample +
								"bits")
						: i.bitrate
						? (a.quality =
								Math.floor(i.bitrate / 1e3) +
									"K " +
									i.codecProfile || "")
						: (a.quality = ""),
				  i && i.duration
						? (a.duration = wr(i.duration))
						: (a.duration = ""));
		}
		function er(e, t = {}) {
			const a = (e = e.replace(/\\/g, "/")).split("/").pop(),
				r = a.split(".").pop(),
				n = document.createElement("li"),
				i = n.dataset;
			(i.artist = t.artist || ""),
				(i.title =
					t.title ||
					a.replace(/%23/g, "#") ||
					e.slice(e.lastIndexOf("//") + 2)),
				(i.codec = r !== a ? r.toUpperCase() : ""),
				(e = e.replace(/#/g, "%23")),
				(i.file = e),
				ka.appendChild(n);
			const s = ka.children.length;
			1 != s || br() || or(0),
				Sa > s - 3 && lr(),
				fetch(e)
					.then((e) => e.body)
					.then((e) => {
						g.parseReadableStream(e, "", { skipCovers: !0 })
							.then((t) => {
								t &&
									(Qa(t, n),
									Ia.forEach((e) => {
										e.dataset.file == i.file && Qa(n, e);
									})),
									e.cancel();
							})
							.catch((e) => {});
					});
		}
		function tr(e) {
			const t = (e = e.replace(/\\/g, "/"))
				.slice(e.lastIndexOf(".") + 1)
				.toLowerCase();
			let a,
				r = 0;
			return new Promise((n) => {
				if (e)
					if (["m3u", "m3u8"].includes(t))
						fetch(e)
							.then((t) => {
								if (200 == t.status) return t.text();
								Sr(
									`Fetch returned error code ${t.status} for URI ${e}`,
									!0
								);
							})
							.then((t) => {
								(e = e.slice(0, e.lastIndexOf("/") + 1)),
									t.split(/[\r\n]+/).forEach((t) => {
										if (
											"#" != t.charAt(0) &&
											"" != t.trim()
										) {
											(t = t.replace(/\\/g, "/")),
												r++,
												a ||
													((a = t.slice(
														t.lastIndexOf("/") + 1
													)),
													(a = a
														.slice(
															0,
															a.lastIndexOf(".")
														)
														.replace(/_/g, " "))),
												"http" != t.slice(0, 4) &&
													":" != t[1] &&
													"/" != t[0] &&
													(t = e + t);
											const n = a.indexOf(" - ");
											er(
												t,
												-1 == n
													? { title: a }
													: {
															artist: a.slice(
																0,
																n
															),
															title: a.slice(
																n + 3
															),
													  }
											),
												(a = "");
										} else
											"#EXTINF" == t.slice(0, 7) &&
												(a = t.slice(
													t.indexOf(",") + 1 || 8
												));
									}),
									n(r);
							})
							.catch((e) => {
								Sr(e, !0), n(r);
							});
					else {
						let t = localStorage.getItem("pl_" + e);
						t
							? ((t = JSON.parse(t)),
							  t.forEach((e) => {
									r++,
										(e = e.replace(/\\/g, "/")),
										(a = e.slice(e.lastIndexOf("/") + 1)),
										(a = a
											.slice(0, a.lastIndexOf("."))
											.replace(/_/g, " ")),
										er(e, { title: a });
							  }))
							: Sr("Unrecognized playlist file: " + e, !0),
							n(r);
					}
				else n(-1);
			});
		}
		function ar(e, t = !0) {
			if (0 != ka.children.length)
				if (e) {
					if (e) {
						let a = e;
						if (!t) {
							(a = a
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")),
								(a = a
									.toLowerCase()
									.replace(/[^a-z0-9]/g, "_"));
							let t = localStorage.getItem("playlists");
							for (
								t = t ? JSON.parse(t) : {};
								t.hasOwnProperty(a);

							)
								a += "_1";
							(t[a] = e),
								localStorage.setItem(
									"playlists",
									JSON.stringify(t)
								),
								Ka(a);
						}
						let r = [];
						ka.childNodes.forEach((e) => r.push(e.dataset.file)),
							localStorage.setItem("pl_" + a, JSON.stringify(r)),
							Bt.a.alert({ text: "Playlist saved!" });
					}
				} else
					Bt.a.input({
						text: "Give this playlist a name:",
						submitText: "Save",
						submitCallback: (e) => {
							e && ar(e, !1);
						},
						cancelCallback: () => {
							Bt.a.alert({ text: "Canceled" });
						},
					});
			else Bt.a.alert({ text: "Queue is empty!" });
		}
		function rr() {
			const e = ka.querySelector(".current"),
				t = ka.children[Sa];
			e && e.classList.remove("current"),
				t && (t.classList.add("current"), t.scrollIntoViewIfNeeded());
		}
		function nr() {
			let e, t;
			for (let a = ka.children.length - 1; a > 0; a--)
				(t = Math.floor(Math.random() * (a + 1))),
					(e = ka.replaceChild(ka.children[t], ka.children[a])),
					ka.insertBefore(e, ka.children[t]);
			cr(0);
		}
		function ir(e) {
			if (!e) return;
			let t = 0;
			for (; (e = e.previousElementSibling); ) t++;
			return t;
		}
		function sr(e) {
			return new Promise((t) => {
				g.fetchFromUrl(e)
					.then((a) => {
						if (a.common.picture && a.common.picture.length) {
							const e = new Blob([a.common.picture[0].data], {
								type: a.common.picture[0].format,
							});
							t(URL.createObjectURL(e));
						} else if (-1 == Fa) t("");
						else {
							const a = e.slice(0, e.lastIndexOf("/") + 1);
							if (void 0 !== Na[a]) t(a + Na[a]);
							else {
								const e =
									1 == Fa
										? "/getCover/" + a.replace(/\//g, "%2f")
										: a;
								fetch(e)
									.then((e) =>
										200 == e.status ? e.text() : null
									)
									.then((e) => {
										let r = "";
										if (e)
											if (1 == Fa) r = e;
											else {
												const t = f(e);
												t.cover && (r = t.cover);
											}
										(Na[a] = r), t(a + r);
									});
							}
						}
					})
					.catch((e) => t(""));
			});
		}
		function or(e) {
			if (ka.children[e]) {
				Sa = e;
				const t = ka.children[Sa];
				return (
					(Ia[Ea].src = t.dataset.file),
					(Ia[Ea].dataset.file = t.dataset.file),
					(Ra[Ea] = new Image()),
					Qa(t, Ia[Ea]),
					sr(t.dataset.file).then((e) => $a(e)),
					rr(),
					lr(),
					!0
				);
			}
			return !1;
		}
		function lr() {
			const e = Sa < ka.children.length - 1 ? Sa + 1 : 0,
				t = ka.children[e],
				a = Ia[Ca];
			t &&
				((a.src = t.dataset.file),
				a.load(),
				(a.dataset.file = t.dataset.file),
				(Ra[Ca] = new Image()),
				Qa(t, a),
				sr(t.dataset.file).then((e) => (Ra[Ca].src = e))),
				(Ba = !1);
		}
		function cr(e) {
			or(e) && ur(!0);
		}
		function ur(e) {
			Aa ||
				(br() && !e
					? Ia[Ea].pause()
					: Ia[Ea].play().catch((e) => {
							Sr(e, !0), hr(!0);
					  }));
		}
		function dr() {
			Ia[Ea].pause(), _r(), or(0);
		}
		function fr(e = !1) {
			(e
				? (function () {
						if (!br()) return or(Sa - 1);
						if (Ia[Ea].currentTime > 2) Ia[Ea].currentTime = 0;
						else {
							if (!(Sa > 0)) return !1;
							cr(Sa - 1);
						}
				  })()
				: hr()) || _r(`Already at ${e ? "first" : "last"} track`);
		}
		function hr(e) {
			if (Ba || Aa || Sa > ka.children.length - 1) return !0;
			if (((Ba = !0), Sa < ka.children.length - 1)) Sa++;
			else {
				if (!$r(Qt)) return (Ba = !1), !1;
				Sa = 0;
			}
			return (
				(e |= br()),
				(Ea = Ca),
				(Ca = 0 | !Ea),
				e
					? Ia[Ea].play()
							.then(() => {
								lr();
							})
							.catch((e) => {
								Sr(e, !0), lr(), hr(!0);
							})
					: lr(),
				rr(),
				!0
			);
		}
		function pr(e, t = 1) {
			Ma = window.setTimeout(() => {
				(La = e), mr(t);
			}, 200);
		}
		function mr(e = 1) {
			const t = Ia[Ea];
			if (t.duration > 0 && t.duration < 1 / 0) {
				let a = t.currentTime + 5 * e;
				a < 0 ? (a = 0) : a > t.duration - 1 && (a = t.duration - 1),
					_r(1),
					(t.currentTime = a);
			}
			"m" == La && pr("m", e);
		}
		function gr() {
			return window.clearTimeout(Ma), !!La && ((La = !1), !0);
		}
		function br() {
			const e = Ia[Ea];
			return e && e.currentTime > 0 && !e.paused && !e.ended;
		}
		function vr() {
			if (2 == Oa.info) _r();
			else {
				const e = 0 | va.value || 1 / 0;
				_r(1 + (0 | Oa.info), e);
			}
		}
		function yr(e, t, a, r) {
			const n = _a.canvasCtx;
			$r(ta)
				? (n.strokeText(e, t, a, r), n.fillText(e, t, a, r))
				: ((n.shadowOffsetX = n.shadowOffsetY = 3 * _a.pixelRatio),
				  n.fillText(e, t, a, r),
				  (n.shadowOffsetX = n.shadowOffsetY = 0));
		}
		function wr(e) {
			let t = "",
				a = "";
			return (
				e >= 3600 &&
					((t = Math.floor(e / 3600) + ":"), (e %= 3600), (a = "0")),
				(t +=
					(a + Math.floor(e / 60)).slice(-2) +
					":" +
					("0" + Math.floor(e % 60)).slice(-2)),
				t
			);
		}
		function Tr() {
			const e = Ia[Ea],
				t = e.dataset,
				a = e.duration - e.currentTime,
				r = 0 | wa.value;
			if (
				(a < 0.1 && hr(!0),
				r > 0 && a <= r && $r(ea) && !Oa.info && br() && _r(1, a, -1),
				ua.value > 1 && fa.value > 2)
			) {
				let t;
				if (3 == fa.value) t = ((70 * _a.energy) | 0) - 25;
				else {
					const a = e.currentTime / e.duration;
					t = 100 * (4 == fa.value ? a : 1 - a);
				}
				_a.canvas.style.backgroundSize = `auto ${100 + t}%`;
			}
			if ((Oa.timer || Oa.msgTimer) < 1) return;
			const n = _a.canvas,
				i = _a.canvasCtx,
				s = n.height / 17,
				o = n.width / 2,
				l = 1.4 * s,
				c = `bold ${0.7 * s}px sans-serif`,
				u = `bold ${s}px sans-serif`;
			if (
				((i.lineWidth = 4 * _a.pixelRatio),
				(i.lineJoin = "round"),
				(i.font = c),
				(i.textAlign = "center"),
				(i.fillStyle = "#fff"),
				(i.strokeStyle = i.shadowColor = "#000"),
				Oa.msgTimer > 0 &&
					2 != Oa.info &&
					((i.globalAlpha = Oa.msgTimer < 60 ? Oa.msgTimer / 60 : 1),
					yr(Oa.msg, o, l),
					Oa.msgTimer--),
				Oa.timer > 0)
			) {
				const a = s,
					r = n.width - s,
					d = n.height - 4 * s,
					f = n.height - 2.8 * s,
					h = n.height - 1.6 * s,
					p = n.width - 7 * s,
					m = n.width / 3 - s;
				if (Oa.fade < 0) {
					const e = Math.abs(Oa.fade),
						t = 3 * e - Oa.timer;
					i.globalAlpha = t < e ? t / e : 1;
				} else
					i.globalAlpha = Oa.timer < Oa.fade ? Oa.timer / Oa.fade : 1;
				if (2 == Oa.info) {
					const e = 1.8 * l;
					yr("Gradient: " + Ua[Wt.value].name, o, l, m),
						yr("Auto gradient is " + Gr(Vt), o, e),
						(i.textAlign = "left"),
						yr(Xr(qt), a, l, m),
						yr("Random mode: " + Xr(Kt), a, e, m),
						(i.textAlign = "right"),
						yr(Xr($t).toUpperCase() + " sensitivity", r, l, m),
						yr("Repeat is " + Gr(Qt), r, e, m);
				}
				if (Aa)
					(i.textAlign = "left"),
						(i.font = u),
						yr("MIC source", a, f, p);
				else if (
					((i.textAlign = "right"),
					yr(t.codec, r, d),
					yr(t.quality, r, d + s),
					(i.textAlign = "left"),
					yr(t.artist.toUpperCase(), a, d, p),
					(i.font = "italic " + c),
					yr(t.album, a, h, p),
					(i.font = u),
					yr(e.src ? t.title : "No song loaded", a, f, p),
					(e.duration || t.duration) &&
						(t.duration ||
							((t.duration =
								e.duration === 1 / 0 ? "LIVE" : wr(e.duration)),
							ka.children[Sa] &&
								(ka.children[Sa].dataset.duration =
									t.duration)),
						(i.textAlign = "right"),
						yr(wr(e.currentTime) + " / " + t.duration, r, h)),
					Ra[Ea].width && Ta.checked)
				) {
					const e = 3 * s;
					i.drawImage(Ra[Ea], a, d - 1.3 * e, e, e);
				}
				--Oa.timer < 1 && (Oa.info = Oa.fade = 0);
			}
		}
		function _r(e, t = 2, a = 1) {
			e
				? "number" == typeof e
					? ((Oa.info = e),
					  (Oa.timer = Math.round(Math.max(60 * t, Oa.timer || 0))),
					  (Oa.fade = Math.round(Oa.timer / 3) * a))
					: ((Oa.msg = e),
					  2 == Oa.info && (Oa.info = 1),
					  (Oa.msgTimer = (60 * t) | 0))
				: (Oa = { timer: 0, msgTimer: 0 });
		}
		function kr(e, t) {
			let a;
			switch (e) {
				case "create":
					Sr(
						`Display resolution: ${t.fsWidth} x ${t.fsHeight} pixels`
					),
						Sr("Display pixel ratio: " + window.devicePixelRatio),
						(a = "Canvas created");
					break;
				case "lores":
					a = `Lo-res mode ${t.loRes ? "ON" : "OFF"} (pixelRatio = ${
						t.pixelRatio
					})`;
					break;
				case "fschange":
					a = "Fullscreen changed";
					break;
				case "resize":
					a = "Window resized";
			}
			Sr(
				`${a || e}. Canvas size is ${t.canvas.width} x ${
					t.canvas.height
				} px ${t.isFullscreen ? "(fullscreen)" : ""}`
			);
		}
		function Sr(e, t, a) {
			const r = Rt("#console-content"),
				n = new Date(),
				i =
					n.toLocaleTimeString([], { hour12: !1 }) +
					"." +
					String(n.getMilliseconds()).padStart(3, "0");
			a && (r.innerHTML = ""),
				t && Rt("#toggle_console").classList.add("warning"),
				e &&
					(r.innerHTML += `<div ${
						t ? 'class="error"' : ""
					}>${i} ${e}</div>`),
				(r.scrollTop = r.scrollHeight);
		}
		function Er() {
			(Aa = na.checked),
				Aa
					? xa
						? (br() && Ia[Ea].pause(),
						  (Da = _a.volume),
						  Ir(0),
						  _a.connectInput(xa),
						  Sr("Audio source set to microphone"))
						: navigator.mediaDevices
						? navigator.mediaDevices
								.getUserMedia({ audio: !0, video: !1 })
								.then((e) => {
									(xa =
										_a.audioCtx.createMediaStreamSource(e)),
										Er();
								})
								.catch((e) => {
									Sr(
										"Could not change audio source - " + e,
										!0
									),
										(na.checked = Aa = !1);
								})
						: (Sr("Cannot access user microphone", !0),
						  (na.checked = Aa = !1))
					: (xa && (_a.disconnectInput(xa), Ir(Da)),
					  Sr("Audio source set to built-in player"));
		}
		function Cr(e) {
			let t = Number(ba.dataset.value || 0) + 0.05 * e;
			t < 0 ? (t = 0) : t > 1 && (t = 1),
				Ir(t),
				_r("Volume: " + Math.round(20 * t));
		}
		function Ir(e) {
			(_a.volume = ba.dataset.value = e),
				(ba.querySelector(".marker").style.transform = `rotate( ${
					125 + 290 * e
				}deg )`);
		}
		function xr(e, t, a) {
			if (!za[e]) return;
			const r = za[e],
				n = za.default;
			r.hasOwnProperty("randomMode") && (r.randomMode |= 0),
				r.hasOwnProperty("blackBg") && (r.background = 0 | r.blackBg),
				r.hasOwnProperty("showScale") &&
					((r.showScaleX = 1 & r.showScale),
					(r.showScaleY = r.showScale >> 1)),
				r.hasOwnProperty("reflex") &&
					isNaN(r.reflex) &&
					(r.reflex = ["off", "on", "mirror"].indexOf(r.reflex)),
				r.hasOwnProperty("bgImageFit") &&
					isNaN(r.bgImageFit) &&
					(r.bgImageFit = [
						"adjust",
						"center",
						"repeat",
						"pulse",
						"zoom-in",
						"zoom-out",
					].indexOf(r.bgImageFit)),
				Nt("[data-prop]").forEach((e) => {
					e.classList.contains("switch")
						? r.hasOwnProperty(e.dataset.prop)
							? (e.dataset.active = 0 | r[e.dataset.prop])
							: a && (e.dataset.active = n[e.dataset.prop])
						: (r.hasOwnProperty(e.dataset.prop)
								? (e.value = r[e.dataset.prop])
								: a && (e.value = n[e.dataset.prop]),
						  Lr(e));
				}),
				r.hasOwnProperty("highSens") && ($t.value = r.highSens ? 2 : 1),
				r.hasOwnProperty("minDb") &&
					r.hasOwnProperty("maxDb") &&
					((Rt('.min-db[data-preset="1"]').value = r.minDb),
					(Rt('.max-db[data-preset="1"]').value = r.maxDb),
					Hr("sens")),
				_a.setOptions({
					fftSize: zt.value,
					minFreq: Ut.value,
					maxFreq: jt.value,
					smoothing: Ht.value,
					showPeaks: $r(Yt),
					showLeds: $r(Zt),
					lumiBars: $r(Jt),
					loRes: $r(aa),
					showFPS: $r(ra),
					showScaleX: $r(Xt),
					showScaleY: $r(Gt),
					radial: $r(ha),
					spinSpeed: pa.value,
					stereo: $r(ma),
					splitGradient: $r(ga),
				}),
				Ga([ua, $t, ca, Wt, Kt, la, qt], !0),
				"demo" == e && Rr(!0),
				t && Bt.a.alert({ text: "Settings loaded!" });
		}
		function Ar(e) {
			const t = {
				fftSize: zt.value,
				freqMin: Ut.value,
				freqMax: jt.value,
				smoothing: Ht.value,
				gradient: Wt.value,
				mode: qt.value,
				randomMode: Kt.value,
				sensitivity: $t.value,
				lineWidth: sa.value,
				fillAlpha: oa.value,
				barSpace: la.value,
				reflex: ca.value,
				background: ua.value,
				bgImageDim: da.value,
				bgImageFit: fa.value,
				spin: pa.value,
				showScaleX: Xt.dataset.active,
				showScaleY: Gt.dataset.active,
				showPeaks: Yt.dataset.active,
				cycleGrad: Vt.dataset.active,
				ledDisplay: Zt.dataset.active,
				lumiBars: Jt.dataset.active,
				repeat: Qt.dataset.active,
				showSong: ea.dataset.active,
				noShadow: ta.dataset.active,
				loRes: aa.dataset.active,
				showFPS: ra.dataset.active,
				radial: ha.dataset.active,
				stereo: ma.dataset.active,
				splitGrad: ga.dataset.active,
			};
			localStorage.setItem(e, JSON.stringify(t));
		}
		function Dr() {
			Ar("last-config");
		}
		function Or() {
			Ar("custom-preset"),
				(Rt("#preset").value = "custom"),
				Bt.a.alert({ text: "Custom preset saved!" });
		}
		function Mr(e) {
			if ("BODY" == e.target.tagName && !e.altKey && !e.ctrlKey) {
				if ("keydown" == e.type)
					switch (e.code) {
						case "ArrowUp":
							Cr(1);
							break;
						case "ArrowDown":
							Cr(-1);
							break;
						case "ArrowLeft":
							La ? (_r("Rewind", 1), mr(-1)) : pr("k", -1);
							break;
						case "ArrowRight":
							La ? (_r("Fast forward", 1), mr()) : pr("k");
							break;
						default:
							return;
					}
				else {
					const t = e.shiftKey;
					switch (e.code) {
						case "Delete":
						case "Backspace":
							ka.querySelectorAll(".selected").forEach((e) => {
								e.remove();
							});
							const e = ir(ka.querySelector(".current")),
								a = ka.children.length;
							void 0 !== e
								? (Sa = e)
								: Sa > a - 1
								? (Sa = a - 1)
								: Sa--,
								a ? lr() : (Ya(Ca), br() || Ya());
							break;
						case "Space":
							_r(br() ? "Pause" : "Play", 1), ur();
							break;
						case "ArrowLeft":
						case "KeyJ":
							gr() || (_r("Previous track", 1), fr(!0));
							break;
						case "KeyG":
							Nr(Wt, t), _r("Gradient: " + Ua[Wt.value].name);
							break;
						case "ArrowRight":
						case "KeyK":
							gr() || (_r("Next track", 1), fr());
							break;
						case "KeyA":
							$r(Vt) || t
								? (Kt.selectedIndex == Kt.options.length - 1 &&
										!t) ||
								  (0 == Kt.selectedIndex && $r(Vt) && t)
									? ((Vt.dataset.active = "0"),
									  (Kt.value = "0"),
									  _r("Auto gradient OFF / Random mode OFF"))
									: (Nr(Kt, t), _r("Random mode: " + Xr(Kt)))
								: ((Vt.dataset.active = "1"),
								  _r("Auto gradient ON")),
								Ga(Kt, !0);
							break;
						case "KeyB":
							Nr(t ? fa : ua),
								_r(
									"Background: " +
										Xr(ua) +
										(ua.value > 1 ? ` (${Xr(fa)})` : "")
								);
							break;
						case "KeyC":
							ha.click(), _r("Radial " + Gr(ha));
							break;
						case "KeyD":
							vr();
							break;
						case "KeyE":
							ka.children.length > 0 && (nr(), _r("Shuffle"));
							break;
						case "KeyF":
							Xa();
							break;
						case "KeyH":
							ra.click();
							break;
						case "KeyI":
							ea.click(), _r("Song info display " + Gr(ea));
							break;
						case "KeyL":
							Zt.click(), _r("LED effect " + Gr(Zt));
							break;
						case "KeyM":
						case "KeyV":
							Nr(qt, t), _r("Mode: " + Xr(qt));
							break;
						case "KeyN":
							Nr($t, t),
								_r(Xr($t).toUpperCase() + " sensitivity");
							break;
						case "KeyO":
							aa.click(),
								_r(($r(aa) ? "LOW" : "HIGH") + " Resolution");
							break;
						case "KeyP":
							Yt.click(), _r("Peaks " + Gr(Yt));
							break;
						case "KeyR":
							Qt.click(), _r("Queue repeat " + Gr(Qt));
							break;
						case "KeyS":
							_r(
								"Scale: " +
									[
										"None",
										"Frequency (Hz)",
										"Level (dB)",
										"Both",
									][
										(function (e) {
											let t =
												(0 | Xt.dataset.active) +
												(Gt.dataset.active << 1) +
												(e ? -1 : 1);
											t < 0 ? (t = 3) : t > 3 && (t = 0);
											return (
												(Xt.dataset.active = 1 & t),
												(Gt.dataset.active = t >> 1),
												Ga([Xt, Gt], !0),
												t
											);
										})(t)
									]
							);
							break;
						case "KeyT":
							ta.click(),
								_r(
									($r(ta) ? "Flat" : "Shadowed") +
										" text mode"
								);
							break;
						case "KeyU":
							Jt.click(), _r("Luminance bars " + Gr(Jt));
							break;
						case "KeyX":
							Nr(ca, t), _r("Reflex: " + Xr(ca));
							break;
						default:
							return;
					}
				}
				e.preventDefault();
			}
		}
		function Pr() {
			if (Ia[Ea].attributes.src) {
				if (
					(Ia[Ea].currentTime < 0.1 &&
						("1" == Kt.value
							? Rr(!0)
							: $r(Vt) && "0" == Kt.value && Nr(Wt)),
					$a(),
					$r(ea))
				) {
					_r(1, 0 | ya.value || 1 / 0);
				}
			} else cr(Sa);
		}
		function Fr() {
			hr(!0) || (or(0), _r("Queue ended", 10));
		}
		function Br(e) {
			e.target.attributes.src && Sr("Error loading " + e.target.src, !0);
		}
		function Lr(e) {
			const t = e.previousElementSibling;
			t && "value" == t.className && (t.innerText = e.value);
		}
		function Rr(e = Aa) {
			if (!br() && !e) return;
			const t = (e) => !Ha.find((t) => t.value == e).disabled,
				a = (e = 2) => (Math.random() * e) | 0;
			let r = [];
			if (
				((qt.selectedIndex = a(qt.options.length)),
				t("nobg") && (ua.selectedIndex = a(ua.options.length)),
				t("imgfit") && (fa.selectedIndex = a(fa.options.length)),
				t("peaks") && ((Yt.dataset.active = a()), r.push(Yt)),
				t("leds") && ((Zt.dataset.active = a()), r.push(Zt)),
				t("lumi") &&
					((Jt.dataset.active = ua.value > 1 && $r(Zt) ? 0 : a()),
					r.push(Jt)),
				t("line") && ((sa.value = a(5) + 1), Lr(sa)),
				t("fill") && ((oa.value = a(6) / 10), Lr(oa)),
				t("barSp") && (la.selectedIndex = a(la.options.length)),
				t("reflex"))
			) {
				const e = ca.options.length - (qt.value % 10 != 0);
				ca.selectedIndex = a(e);
			}
			t("radial") && ((ha.dataset.active = a()), r.push(ha)),
				t("spin") && ((pa.value = a(4)), Lr(pa), r.push(pa)),
				t("split") && ((ga.dataset.active = a()), r.push(ga)),
				t("stereo") && ((ma.dataset.active = a()), r.push(ma)),
				$r(Vt) &&
					((Wt.selectedIndex = a(Wt.options.length)), r.push(Wt)),
				r.push(ua, ca, qt),
				Ga(r, !0);
		}
		function Nr(e, t) {
			const a = e.selectedIndex + (t ? -1 : 1);
			a < 0
				? (e.selectedIndex = e.options.length - 1)
				: a >= e.options.length
				? (e.selectedIndex = 0)
				: (e.selectedIndex = a),
				Ga(e, !0);
		}
		function zr() {
			const e = qt.value;
			for (; qt.firstChild; ) qt.removeChild(qt.firstChild);
			for (const e of ja)
				e.disabled ||
					(qt[qt.options.length] = new Option(e.text, e.value));
			"" !== e && ((qt.value = e), Ga(qt, !0));
		}
		function Ur() {
			let e = Wt.value;
			for (; Wt.firstChild; ) Wt.removeChild(Wt.firstChild);
			for (const e of Object.keys(Ua))
				Ua[e].disabled ||
					(Wt.options[Wt.options.length] = new Option(Ua[e].name, e));
			"" !== e && ((Wt.value = e), Ga(Wt, !0));
		}
		function jr() {
			const e = Rt("#toggle_settings");
			e.addEventListener("click", () => {
				Rt("#settings").classList.toggle(
					"active",
					e.classList.toggle("active")
				);
			}),
				Rt(".settings-close").addEventListener("click", () =>
					e.click()
				);
			const t = Rt("#toggle_console");
			t.addEventListener("click", () => {
				Rt("#console").classList.toggle(
					"active",
					t.classList.toggle("active")
				),
					t.classList.remove("warning"),
					Sr();
			}),
				Rt("#console-close").addEventListener("click", () => t.click()),
				Rt("#console-clear").addEventListener("click", () =>
					Sr("Console cleared.", !1, !0)
				),
				Nt(".switch").forEach((e) => {
					e.addEventListener("click", () => {
						e.dataset.active = 0 | !(0 | e.dataset.active);
					});
				}),
				[Yt, Zt, Jt, aa, ra, Xt, Gt, ha, ma, ga].forEach((e) =>
					e.addEventListener("click", () => Ga(e, !0))
				),
				[Vt, Qt, ea, ta].forEach((e) =>
					e.addEventListener("click", Dr)
				),
				na.addEventListener("change", Er),
				ba.addEventListener("wheel", (e) => {
					e.preventDefault(), Cr(Math.sign(e.deltaY || 0));
				}),
				[
					qt,
					Kt,
					zt,
					Ut,
					jt,
					Wt,
					Ht,
					$t,
					sa,
					oa,
					la,
					ca,
					ua,
					da,
					fa,
					pa,
				].forEach((e) => e.addEventListener("change", () => Ga(e, !0))),
				Nt('input[type="range"]').forEach((e) =>
					e.addEventListener("change", () => Lr(e))
				),
				Rt("#btn_play").addEventListener("click", () => ur()),
				Rt("#btn_stop").addEventListener("click", dr),
				Rt("#btn_shuf").addEventListener("click", nr),
				Rt("#btn_prev").addEventListener("mousedown", () =>
					pr("m", -1)
				),
				Rt("#btn_prev").addEventListener("click", (e) => {
					gr() || fr(!0);
				}),
				Rt("#btn_next").addEventListener("mousedown", () => pr("m")),
				Rt("#btn_next").addEventListener("click", () => {
					gr() || fr();
				}),
				Rt("#load_preset").addEventListener("click", () => {
					const e = Rt("#preset");
					e.value &&
						(Sr(`Loading preset '${Xr(e)}'`), xr(e.value, !0));
				}),
				Rt("#btn_save").addEventListener("click", Or),
				Rt("#btn_fullscreen").addEventListener("click", Xa),
				Rt("#load_playlist").addEventListener("click", () => {
					tr(ia.value).then((e) => {
						const t =
							-1 == e
								? "No playlist selected"
								: `${e} song${
										e > 1 ? "s" : ""
								  } added to the queue`;
						Bt.a.alert({ text: t, time: 5 });
					});
				}),
				Rt("#save_playlist").addEventListener("click", () => {
					return (
						(e = ia.selectedIndex),
						void ("" == ia[e].value
							? ar()
							: ia[e].dataset.isLocal
							? Bt.a.confirm({
									text: `Overwrite "${ia[e].innerText}" with the current play queue?`,
									submitText: "Overwrite",
									submitCallback: () => {
										ar(ia[e].value);
									},
									cancelCallback: () => {
										Bt.a.alert({ text: "Canceled" });
									},
							  })
							: Bt.a.alert({
									text: 'This is a server playlist which cannot be overwritten.<br>Click "Save as..." to create a new local playlist.',
									time: 5,
							  }))
					);
					var e;
				}),
				Rt("#create_playlist").addEventListener("click", () => ar()),
				Rt("#delete_playlist").addEventListener("click", () => {
					return (
						(e = ia.selectedIndex),
						void (ia[e].dataset.isLocal
							? Bt.a.confirm({
									text: `Do you really want to DELETE the "${ia[e].innerText}" playlist?<br>THIS CANNOT BE UNDONE!`,
									submitText: "Delete",
									submitCallback: () => {
										const t = ia[e].value;
										let a =
											localStorage.getItem("playlists");
										a &&
											((a = JSON.parse(a)),
											delete a[t],
											localStorage.setItem(
												"playlists",
												JSON.stringify(a)
											)),
											localStorage.removeItem("pl_" + t),
											Bt.a.alert({
												text: "Playlist deleted",
											}),
											Ka();
									},
									cancelCallback: () => {
										Bt.a.alert({ text: "Canceled" });
									},
							  })
							: ia[e].value &&
							  Bt.a.alert({
									text: "Cannot delete a server playlist!",
							  }))
					);
					var e;
				}),
				Rt("#btn_clear").addEventListener("click", Va),
				_a.canvas.addEventListener("click", () => vr()),
				Rt("#local_file").addEventListener("change", (e) =>
					(function (e) {
						const t = e.files[0];
						if (t) {
							Ya();
							const e = Ia[Ea];
							(e.src = URL.createObjectURL(t)),
								e.play(),
								g
									.parseBlob(t)
									.then((t) => {
										if (
											(Qa(t, e),
											t.common.picture &&
												t.common.picture.length)
										) {
											const e = new Blob(
												[t.common.picture[0].data],
												{
													type: t.common.picture[0]
														.format,
												}
											);
											$a(URL.createObjectURL(e));
										}
									})
									.catch((e) => {});
						}
					})(e.target)
				),
				Rt("#btn_load_url").addEventListener("click", () => {
					Bt.a.input({
						text: "Load audio file or stream from URL",
						submitText: "Load",
						submitCallback: (e) => {
							e.trim() && Ja(e, !0);
						},
					});
				});
		}
		function Hr(e) {
			if (!e || "mode" == e) {
				const e = ja.filter((e) => e.disabled).map((e) => e.value);
				localStorage.setItem("disabled-modes", JSON.stringify(e));
			}
			if (!e || "grad" == e) {
				const e = Object.keys(Ua).filter((e) => Ua[e].disabled);
				localStorage.setItem("disabled-gradients", JSON.stringify(e));
			}
			if (!e || "prop" == e) {
				const e = Ha.filter((e) => e.disabled).map((e) => e.value);
				localStorage.setItem("disabled-properties", JSON.stringify(e));
			}
			if (!e || "sens" == e) {
				let e = [];
				for (const t of [0, 1, 2])
					e.push({
						min: Rt(`.min-db[data-preset="${t}"]`).value,
						max: Rt(`.max-db[data-preset="${t}"]`).value,
					});
				localStorage.setItem("sensitivity-presets", JSON.stringify(e));
			}
			if (!e || "osd" == e) {
				const e = {
					info: va.value,
					track: ya.value,
					end: wa.value,
					covers: Ta.checked,
				};
				localStorage.setItem("display-options", JSON.stringify(e));
			}
		}
		function qr(e, t) {
			for (const a of t)
				e[e.options.length] = new Option(a.text, a.value);
		}
		function Wr(e) {
			(va.value = e.info),
				(ya.value = e.track),
				(wa.value = e.end),
				(Ta.checked = e.covers);
		}
		function Xr(e) {
			return e[e.selectedIndex].text;
		}
		function Gr(e) {
			return $r(e) ? "ON" : "OFF";
		}
		function $r(e) {
			return "1" == e.dataset.active;
		}
		!(function () {
			window.addEventListener("error", (e) =>
				Sr("Unexpected " + e.error, !0)
			),
				Sr("audioMotion.js v20.12 initializing..."),
				Sr("User agent: " + window.navigator.userAgent),
				(Rt("#version").innerText = Lt);
			const e = (function () {
				const e = localStorage.getItem("last-config"),
					t = null !== e;
				za.last = t
					? JSON.parse(e)
					: JSON.parse(JSON.stringify(za.default));
				const a = localStorage.getItem("custom-preset");
				za.custom =
					null !== a
						? JSON.parse(a)
						: JSON.parse(JSON.stringify(za.last));
				const r = localStorage.getItem("disabled-modes");
				null !== r &&
					JSON.parse(r).forEach((e) => {
						ja.find((t) => t.value == e).disabled = !0;
					});
				const n = localStorage.getItem("disabled-gradients");
				null !== n &&
					JSON.parse(n).forEach((e) => {
						Ua[e].disabled = !0;
					});
				const i = localStorage.getItem("disabled-properties");
				null !== i &&
					JSON.parse(i).forEach((e) => {
						Ha.find((t) => t.value == e).disabled = !0;
					});
				const s = Nt(".min-db");
				for (let e = -60; e >= -110; e -= 5)
					s.forEach((t) => (t[t.options.length] = new Option(e)));
				const o = Nt(".max-db");
				for (let e = 0; e >= -40; e -= 5)
					o.forEach((t) => (t[t.options.length] = new Option(e)));
				(
					JSON.parse(localStorage.getItem("sensitivity-presets")) ||
					qa
				).forEach((e, t) => {
					(s[t].value = e.min), (o[t].value = e.max);
				});
				const l = Object.assign({}, Wa);
				return (
					Wr(
						Object.assign(
							l,
							JSON.parse(
								localStorage.getItem("display-options")
							) || {}
						)
					),
					t
				);
			})();
			(ka = Rt("#playlist")),
				ka.addEventListener("dblclick", (e) => {
					e.target &&
						e.target.dataset.file &&
						(cr(ir(e.target)),
						e.target.classList.remove(
							"selected",
							"sortable-chosen"
						));
				}),
				(Sa = 0),
				Pt.create(ka, {
					animation: 150,
					group: { name: "filelist", pull: !1, put: !0 },
					multiDrag: !0,
					multiDragKey: "ctrl",
					selectedClass: "selected",
					onEnd: (e) => {
						(Sa = ir(ka.querySelector(".current"))),
							0 != e.newIndex || br() || or(0),
							lr();
					},
				}),
				Sr("Instantiating audioMotion-analyzer v" + r.version),
				(_a = new r(Rt("#analyzer"), {
					onCanvasDraw: Tr,
					onCanvasResize: kr,
				})),
				Sr(`AudioContext sample rate is ${_a.audioCtx.sampleRate}Hz`),
				(Ia = [Rt("#player0"), Rt("#player1")]),
				(Ea = 0),
				(Ca = 1);
			for (const e of [0, 1])
				Ya(e),
					Ia[e].addEventListener("play", Pr),
					Ia[e].addEventListener("ended", Fr),
					Ia[e].addEventListener("error", Br),
					_a.connectInput(Ia[e]);
			!(function () {
				const e = Rt("#enabled_modes");
				ja.forEach((t) => {
					e.innerHTML += `<label><input type="checkbox" class="enabledMode" data-mode="${
						t.value
					}" ${t.disabled ? "" : "checked"}> ${t.text}</label>`;
				}),
					Nt(".enabledMode").forEach((e) => {
						e.addEventListener("click", (t) => {
							if (
								!e.checked &&
								ja.filter((e) => !e.disabled).length < 2
							)
								return (
									Bt.a.alert({
										text: "At least one Mode must be enabled!",
									}),
									t.preventDefault(),
									!1
								);
							(ja.find(
								(t) => t.value == e.dataset.mode
							).disabled = !e.checked),
								zr(),
								Hr("mode");
						});
					});
				const t = Rt("#enabled_gradients");
				Object.keys(Ua).forEach((e) => {
					t.innerHTML += `<label><input type="checkbox" class="enabledGradient" data-grad="${e}" ${
						Ua[e].disabled ? "" : "checked"
					}> ${Ua[e].name}</label>`;
				}),
					Nt(".enabledGradient").forEach((e) => {
						e.addEventListener("click", (t) => {
							if (
								!e.checked &&
								Object.keys(Ua).reduce(
									(e, t) => e + !Ua[t].disabled,
									0
								) < 2
							)
								return (
									Bt.a.alert({
										text: "At least one Gradient must be enabled!",
									}),
									t.preventDefault(),
									!1
								);
							(Ua[e.dataset.grad].disabled = !e.checked),
								Ur(),
								Hr("grad");
						});
					});
				const a = Rt("#random_properties");
				Ha.forEach((e) => {
					a.innerHTML += `<label><input type="checkbox" class="randomProperty" value="${
						e.value
					}" ${e.disabled ? "" : "checked"}> ${e.text}</label>`;
				}),
					Nt(".randomProperty").forEach((e) => {
						e.addEventListener("click", (t) => {
							(Ha.find((t) => t.value == e.value).disabled =
								!e.checked),
								Hr("prop");
						});
					}),
					Nt("[data-preset]").forEach((e) => {
						"reset-sens" == e.className
							? e.addEventListener("click", () => {
									(Rt(
										`.min-db[data-preset="${e.dataset.preset}"]`
									).value = qa[e.dataset.preset].min),
										(Rt(
											`.max-db[data-preset="${e.dataset.preset}"]`
										).value = qa[e.dataset.preset].max),
										e.dataset.preset == $t.value && Ga($t),
										Hr("sens");
							  })
							: e.addEventListener("change", () => {
									e.dataset.preset == $t.value && Ga($t),
										Hr("sens");
							  });
					});
				for (const e of [va, ya, wa, Ta])
					e.addEventListener("change", () => Hr("osd"));
				Rt("#reset_osd").addEventListener("click", () => {
					Wr(Wa), Hr("osd");
				});
			})(),
				zr();
			for (let e = 9; e < 16; e++)
				zt[zt.options.length] = new Option(2 ** e);
			for (const e of [20, 30, 40, 50, 60, 100, 250, 500, 1e3, 2e3])
				Ut[Ut.options.length] = new Option(
					(e >= 1e3 ? e / 1e3 + "k" : e) + "Hz",
					e
				);
			for (const e of [1e3, 2e3, 4e3, 8e3, 12e3, 16e3, 22e3])
				jt[jt.options.length] = new Option(e / 1e3 + "kHz", e);
			qr($t, [
				{ value: "0", text: "Low" },
				{ value: "1", text: "Normal" },
				{ value: "2", text: "High" },
			]),
				qr(la, [
					{ value: "1.5", text: "Legacy" },
					{ value: "0.1", text: "Narrow" },
					{ value: "0.25", text: "Regular" },
					{ value: "0.5", text: "Wide" },
					{ value: "0.75", text: "Extra wide" },
				]),
				qr(Kt, [
					{ value: "0", text: "Off" },
					{ value: "1", text: "On track change" },
					{ value: "2", text: "5 seconds" },
					{ value: "6", text: "15 seconds" },
					{ value: "12", text: "30 seconds" },
					{ value: "24", text: "1 minute" },
					{ value: "48", text: "2 minutes" },
					{ value: "120", text: "5 minutes" },
				]),
				qr(ca, [
					{ value: "0", text: "Off" },
					{ value: "1", text: "On" },
					{ value: "2", text: "Mirrored" },
				]),
				qr(ua, [
					{ value: "0", text: "Gradient default" },
					{ value: "1", text: "Black" },
					{ value: "2", text: "Album cover" },
				]),
				qr(fa, [
					{ value: "0", text: "Adjust" },
					{ value: "1", text: "Center" },
					{ value: "3", text: "Pulse" },
					{ value: "2", text: "Repeat" },
					{ value: "4", text: "Zoom In" },
					{ value: "5", text: "Zoom Out" },
				]),
				(da.min = "0.1"),
				(da.max = "1"),
				(da.step = "0.1"),
				(sa.min = "1"),
				(sa.max = "5"),
				(oa.min = "0"),
				(oa.max = "0.5"),
				(oa.step = "0.1"),
				(Ht.min = "0"),
				(Ht.max = "0.9"),
				(Ht.step = "0.1"),
				(pa.min = "0"),
				(pa.max = "3"),
				(pa.step = "1"),
				jr(),
				_r(),
				Object.keys(Ua).forEach((e) => {
					Ua[e].bgColor &&
						Ua[e].colorStops &&
						_a.registerGradient(e, {
							bgColor: Ua[e].bgColor,
							colorStops: Ua[e].colorStops,
						});
				}),
				Ur(),
				Sr(`Loading ${e ? "last session" : "default"} settings`),
				xr("last", !1, !0),
				Er(),
				Ir(1),
				Ka(),
				m(Rt("#file_explorer"), {
					dblClick: (e, t) => {
						Za([{ file: e }], !0),
							t.target.classList.remove(
								"selected",
								"sortable-chosen"
							);
					},
				}).then(([e, t, a]) => {
					const r = Rt("#btn_add_selected"),
						n = Rt("#btn_add_folder");
					(Fa = e),
						-1 == e
							? (Sr(
									"No server found. File explorer will not be available.",
									!0
							  ),
							  (r.disabled = !0),
							  (n.disabled = !0))
							: (Sr(a + " detected"),
							  Pt.create(t, {
									animation: 150,
									draggable:
										'[data-type="file"], [data-type="list"]',
									group: {
										name: "filelist",
										pull: "clone",
										put: !1,
									},
									multiDrag: !0,
									multiDragKey: "ctrl",
									selectedClass: "selected",
									sort: !1,
									onEnd: (e) => {
										if ("playlist" == e.to.id) {
											(e.items.length
												? e.items
												: [e.item]
											).forEach((e) => {
												Ja(h(e.dataset.path)),
													e.remove();
											});
										}
									},
							  }),
							  r.addEventListener("mousedown", () =>
									Za(p(".selected"))
							  ),
							  n.addEventListener("click", () => Za(p())));
				}),
				window.addEventListener("keydown", Mr),
				window.addEventListener("keyup", Mr),
				Bt.a.setOptions({ positions: { alert: "bottom" } }),
				Sr("Initialization complete!");
		})();
	},
]);
