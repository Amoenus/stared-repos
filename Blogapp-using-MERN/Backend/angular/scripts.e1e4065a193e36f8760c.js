!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    i = Object.getPrototypeOf,
    r = n.slice,
    o = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    s = n.push,
    a = n.indexOf,
    l = {},
    c = l.toString,
    u = l.hasOwnProperty,
    f = u.toString,
    d = f.call(Object),
    h = {},
    p = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    g = function (e) {
      return null != e && e === e.window;
    },
    m = e.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var i,
      r,
      o = (n = n || m).createElement("script");
    if (((o.text = e), t))
      for (i in v)
        (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          o.setAttribute(i, r);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function _(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var b = function (e, t) {
    return new b.fn.init(e, t);
  };
  function w(e) {
    var t = !!e && "length" in e && e.length,
      n = _(e);
    return (
      !p(e) &&
      !g(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (b.fn = b.prototype =
    {
      jquery: "3.5.1",
      constructor: b,
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null == e
          ? r.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = b.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return b.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          b.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          b.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          b.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (b.extend = b.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || p(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (i = e[t]),
                "__proto__" !== t &&
                  s !== i &&
                  (c && i && (b.isPlainObject(i) || (r = Array.isArray(i)))
                    ? ((n = s[t]),
                      (o =
                        r && !Array.isArray(n)
                          ? []
                          : r || b.isPlainObject(n)
                          ? n
                          : {}),
                      (r = !1),
                      (s[t] = b.extend(c, o, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    b.extend({
      expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== c.call(e) ||
          ((t = i(e)) &&
            ("function" !=
              typeof (n = u.call(t, "constructor") && t.constructor) ||
              f.call(n) !== d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (w(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (w(Object(e))
              ? b.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : a.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
          !t(e[r], r) !== s && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          s = 0,
          a = [];
        if (w(e))
          for (i = e.length; s < i; s++)
            null != (r = t(e[s], s, n)) && a.push(r);
        else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
        return o(a);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
    b.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var T = (function (e) {
    var t,
      n,
      i,
      r,
      o,
      s,
      a,
      l,
      c,
      u,
      f,
      d,
      h,
      p,
      g,
      m,
      v,
      y,
      _,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      E = 0,
      x = le(),
      C = le(),
      S = le(),
      k = le(),
      A = function (e, t) {
        return e === t && (f = !0), 0;
      },
      D = {}.hasOwnProperty,
      N = [],
      j = N.pop,
      I = N.push,
      O = N.push,
      L = N.slice,
      q = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      R = "[\\x20\\t\\r\\n\\f]",
      H =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        R +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      F =
        "\\[" +
        R +
        "*(" +
        H +
        ")(?:" +
        R +
        "*([*^$|!~]?=)" +
        R +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        H +
        "))|)" +
        R +
        "*\\]",
      M =
        ":(" +
        H +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        F +
        ")*)|.*)\\)|)",
      B = new RegExp(R + "+", "g"),
      W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
      Q = new RegExp("^" + R + "*," + R + "*"),
      U = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
      $ = new RegExp(R + "|>"),
      z = new RegExp(M),
      X = new RegExp("^" + H + "$"),
      V = {
        ID: new RegExp("^#(" + H + ")"),
        CLASS: new RegExp("^\\.(" + H + ")"),
        TAG: new RegExp("^(" + H + "|[*])"),
        ATTR: new RegExp("^" + F),
        PSEUDO: new RegExp("^" + M),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            R +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            R +
            "*(?:([+-]|)" +
            R +
            "*(\\d+)|))" +
            R +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            R +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            R +
            "*((?:-\\d)?\\d*)" +
            R +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      K = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        d();
      },
      se = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      O.apply((N = L.call(w.childNodes)), w.childNodes);
    } catch (Ce) {
      O = {
        apply: N.length
          ? function (e, t) {
              I.apply(e, L.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function ae(e, t, i, r) {
      var o,
        a,
        c,
        u,
        f,
        p,
        v,
        y = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
      )
        return i;
      if (!r && (d(t), (t = t || h), g)) {
        if (11 !== w && (f = Z.exec(e)))
          if ((o = f[1])) {
            if (9 === w) {
              if (!(c = t.getElementById(o))) return i;
              if (c.id === o) return i.push(c), i;
            } else if (y && (c = y.getElementById(o)) && _(t, c) && c.id === o)
              return i.push(c), i;
          } else {
            if (f[2]) return O.apply(i, t.getElementsByTagName(e)), i;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return O.apply(i, t.getElementsByClassName(o)), i;
          }
        if (
          n.qsa &&
          !k[e + " "] &&
          (!m || !m.test(e)) &&
          (1 !== w || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((v = e), (y = t), 1 === w && ($.test(e) || U.test(e)))) {
            for (
              ((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) ||
                ((u = t.getAttribute("id"))
                  ? (u = u.replace(ie, re))
                  : t.setAttribute("id", (u = b))),
                a = (p = s(e)).length;
              a--;

            )
              p[a] = (u ? "#" + u : ":scope") + " " + _e(p[a]);
            v = p.join(",");
          }
          try {
            return O.apply(i, y.querySelectorAll(v)), i;
          } catch (T) {
            k(e, !0);
          } finally {
            u === b && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(W, "$1"), t, i, r);
    }
    function le() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = r)
        );
      };
    }
    function ce(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = h.createElement("fieldset");
      try {
        return !!e(t);
      } catch (Ce) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
    }
    function de(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function he(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function ge(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function me(e) {
      return ce(function (t) {
        return (
          (t = +t),
          ce(function (n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--; )
              n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function ve(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = ae.support = {}),
    (o = ae.isXML =
      function (e) {
        var t = (e.ownerDocument || e).documentElement;
        return !Y.test(e.namespaceURI || (t && t.nodeName) || "HTML");
      }),
    (d = ae.setDocument =
      function (e) {
        var t,
          r,
          s = e ? e.ownerDocument || e : w;
        return s != h && 9 === s.nodeType && s.documentElement
          ? ((p = (h = s).documentElement),
            (g = !o(h)),
            w != h &&
              (r = h.defaultView) &&
              r.top !== r &&
              (r.addEventListener
                ? r.addEventListener("unload", oe, !1)
                : r.attachEvent && r.attachEvent("onunload", oe)),
            (n.scope = ue(function (e) {
              return (
                p.appendChild(e).appendChild(h.createElement("div")),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (n.attributes = ue(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ue(function (e) {
              return (
                e.appendChild(h.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = J.test(h.getElementsByClassName)),
            (n.getById = ue(function (e) {
              return (
                (p.appendChild(e).id = b),
                !h.getElementsByName || !h.getElementsByName(b).length
              );
            })),
            n.getById
              ? ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n,
                      i,
                      r,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                  return t.getElementsByClassName(e);
              }),
            (v = []),
            (m = []),
            (n.qsa = J.test(h.querySelectorAll)) &&
              (ue(function (e) {
                var t;
                (p.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    m.push("\\[" + R + "*(?:value|" + P + ")"),
                  e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                  (t = h.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    m.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || m.push(":checked"),
                  e.querySelectorAll("a#" + b + "+*").length ||
                    m.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  m.push("[\\r\\n\\f]");
              }),
              ue(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    m.push("name" + R + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    m.push(":enabled", ":disabled"),
                  (p.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    m.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (n.matchesSelector = J.test(
              (y =
                p.matches ||
                p.webkitMatchesSelector ||
                p.mozMatchesSelector ||
                p.oMatchesSelector ||
                p.msMatchesSelector)
            )) &&
              ue(function (e) {
                (n.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  v.push("!=", M);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (t = J.test(p.compareDocumentPosition)),
            (_ =
              t || J.test(p.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (A = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e == h || (e.ownerDocument == w && _(w, e))
                        ? -1
                        : t == h || (t.ownerDocument == w && _(w, t))
                        ? 1
                        : u
                        ? q(u, e) - q(u, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!r || !o)
                    return e == h
                      ? -1
                      : t == h
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : u
                      ? q(u, e) - q(u, t)
                      : 0;
                  if (r === o) return de(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[i] === a[i]; ) i++;
                  return i
                    ? de(s[i], a[i])
                    : s[i] == w
                    ? -1
                    : a[i] == w
                    ? 1
                    : 0;
                }),
            h)
          : h;
      }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (
        (d(e),
        n.matchesSelector &&
          g &&
          !k[t + " "] &&
          (!v || !v.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (Ce) {
          k(t, !0);
        }
      return ae(t, h, null, [e]).length > 0;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) != h && d(e), _(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) != h && d(e);
      var r = i.attrHandle[t.toLowerCase()],
        o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (ae.escape = function (e) {
      return (e + "").replace(ie, re);
    }),
    (ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        i = [],
        r = 0,
        o = 0;
      if (
        ((f = !n.detectDuplicates),
        (u = !n.sortStable && e.slice(0)),
        e.sort(A),
        f)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
        for (; r--; ) e.splice(i[r], 1);
      }
      return (u = null), e;
    }),
    (r = ae.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += r(t);
        return n;
      }),
    ((i = ae.selectors =
      {
        cacheLength: 50,
        createPseudo: ce,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || ae.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && ae.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    z.test(n) &&
                    (t = s(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = x[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                x(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var r = ae.attr(i, e);
              return null == r
                ? "!=" === t
                : !t ||
                    ((r += ""),
                    "=" === t
                      ? r === n
                      : "!=" === t
                      ? r !== n
                      : "^=" === t
                      ? n && 0 === r.indexOf(n)
                      : "*=" === t
                      ? n && r.indexOf(n) > -1
                      : "$=" === t
                      ? n && r.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1
                      : "|=" === t &&
                        (r === n || r.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    f,
                    d,
                    h,
                    p,
                    g = o !== s ? "nextSibling" : "previousSibling",
                    m = t.parentNode,
                    v = a && t.nodeName.toLowerCase(),
                    y = !l && !a,
                    _ = !1;
                  if (m) {
                    if (o) {
                      for (; g; ) {
                        for (d = t; (d = d[g]); )
                          if (
                            a
                              ? d.nodeName.toLowerCase() === v
                              : 1 === d.nodeType
                          )
                            return !1;
                        p = g = "only" === e && !p && "nextSibling";
                      }
                      return !0;
                    }
                    if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                      for (
                        _ =
                          (h =
                            (c =
                              (u =
                                (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                            c[1]) && c[2],
                          d = h && m.childNodes[h];
                        (d = (++h && d && d[g]) || (_ = h = 0) || p.pop());

                      )
                        if (1 === d.nodeType && ++_ && d === t) {
                          u[e] = [T, h, _];
                          break;
                        }
                    } else if (
                      (y &&
                        (_ = h =
                          (c =
                            (u =
                              (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] || [])[0] === T && c[1]),
                      !1 === _)
                    )
                      for (
                        ;
                        (d = (++h && d && d[g]) || (_ = h = 0) || p.pop()) &&
                        ((a
                          ? d.nodeName.toLowerCase() !== v
                          : 1 !== d.nodeType) ||
                          !++_ ||
                          (y &&
                            ((u =
                              (f = d[b] || (d[b] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] = [T, _]),
                          d !== t));

                      );
                    return (_ -= r) === i || (_ % i == 0 && _ / i >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              r =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                ae.error("unsupported pseudo: " + e);
            return r[b]
              ? r(t)
              : r.length > 1
              ? ((n = [e, e, "", t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ce(function (e, n) {
                      for (var i, o = r(e, t), s = o.length; s--; )
                        e[(i = q(e, o[s]))] = !(n[i] = o[s]);
                    })
                  : function (e) {
                      return r(e, 0, n);
                    })
              : r;
          },
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
              n = [],
              i = a(e.replace(W, "$1"));
            return i[b]
              ? ce(function (e, t, n, r) {
                  for (var o, s = i(e, null, r, []), a = e.length; a--; )
                    (o = s[a]) && (e[a] = !(t[a] = o));
                })
              : function (e, r, o) {
                  return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: ce(function (e) {
            return function (t) {
              return ae(e, t).length > 0;
            };
          }),
          contains: ce(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return (t.textContent || r(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: ce(function (e) {
            return (
              X.test(e || "") || ae.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = g
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === p;
          },
          focus: function (e) {
            return (
              e === h.activeElement &&
              (!h.hasFocus || h.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return G.test(e.nodeName);
          },
          input: function (e) {
            return K.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: me(function () {
            return [0];
          }),
          last: me(function (e, t) {
            return [t - 1];
          }),
          eq: me(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: me(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: me(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: me(function (e, t, n) {
            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
            return e;
          }),
          gt: me(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = he(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
    function ye() {}
    function _e(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function be(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        s = n && "parentNode" === o,
        a = E++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
            return !1;
          }
        : function (t, n, l) {
            var c,
              u,
              f,
              d = [T, a];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((u =
                      (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (f[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = u[o]) && c[0] === T && c[1] === a)
                      return (d[2] = c[2]);
                    if (((u[o] = d), (d[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function Te(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
      return s;
    }
    function Ee(e, t, n, i, r, o) {
      return (
        i && !i[b] && (i = Ee(i)),
        r && !r[b] && (r = Ee(r, o)),
        ce(function (o, s, a, l) {
          var c,
            u,
            f,
            d = [],
            h = [],
            p = s.length,
            g =
              o ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                return n;
              })(t || "*", a.nodeType ? [a] : a, []),
            m = !e || (!o && t) ? g : Te(g, d, e, a, l),
            v = n ? (r || (o ? e : p || i) ? [] : s) : m;
          if ((n && n(m, v, a, l), i))
            for (c = Te(v, h), i(c, [], a, l), u = c.length; u--; )
              (f = c[u]) && (v[h[u]] = !(m[h[u]] = f));
          if (o) {
            if (r || e) {
              if (r) {
                for (c = [], u = v.length; u--; )
                  (f = v[u]) && c.push((m[u] = f));
                r(null, (v = []), c, l);
              }
              for (u = v.length; u--; )
                (f = v[u]) &&
                  (c = r ? q(o, f) : d[u]) > -1 &&
                  (o[c] = !(s[c] = f));
            }
          } else (v = Te(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, l) : O.apply(s, v);
        })
      );
    }
    function xe(e) {
      for (
        var t,
          n,
          r,
          o = e.length,
          s = i.relative[e[0].type],
          a = s || i.relative[" "],
          l = s ? 1 : 0,
          u = be(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          f = be(
            function (e) {
              return q(t, e) > -1;
            },
            a,
            !0
          ),
          d = [
            function (e, n, i) {
              var r =
                (!s && (i || n !== c)) ||
                ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
              return (t = null), r;
            },
          ];
        l < o;
        l++
      )
        if ((n = i.relative[e[l].type])) d = [be(we(d), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (r = ++l; r < o && !i.relative[e[r].type]; r++);
            return Ee(
              l > 1 && we(d),
              l > 1 &&
                _e(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(W, "$1"),
              n,
              l < r && xe(e.slice(l, r)),
              r < o && xe((e = e.slice(r))),
              r < o && _e(e)
            );
          }
          d.push(n);
        }
      return we(d);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (s = ae.tokenize =
        function (e, t) {
          var n,
            r,
            o,
            s,
            a,
            l,
            c,
            u = C[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (a = e, l = [], c = i.preFilter; a; ) {
            for (s in ((n && !(r = Q.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
            (n = !1),
            (r = U.exec(a)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(W, " ") }),
              (a = a.slice(n.length))),
            i.filter))
              !(r = V[s].exec(a)) ||
                (c[s] && !(r = c[s](r))) ||
                ((n = r.shift()),
                o.push({ value: n, type: s, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
        }),
      (a = ae.compile =
        function (e, t) {
          var n,
            r = [],
            o = [],
            a = S[e + " "];
          if (!a) {
            for (t || (t = s(e)), n = t.length; n--; )
              (a = xe(t[n]))[b] ? r.push(a) : o.push(a);
            (a = S(
              e,
              (function (e, t) {
                var n = t.length > 0,
                  r = e.length > 0,
                  o = function (o, s, a, l, u) {
                    var f,
                      p,
                      m,
                      v = 0,
                      y = "0",
                      _ = o && [],
                      b = [],
                      w = c,
                      E = o || (r && i.find.TAG("*", u)),
                      x = (T += null == w ? 1 : Math.random() || 0.1),
                      C = E.length;
                    for (
                      u && (c = s == h || s || u);
                      y !== C && null != (f = E[y]);
                      y++
                    ) {
                      if (r && f) {
                        for (
                          p = 0, s || f.ownerDocument == h || (d(f), (a = !g));
                          (m = e[p++]);

                        )
                          if (m(f, s || h, a)) {
                            l.push(f);
                            break;
                          }
                        u && (T = x);
                      }
                      n && ((f = !m && f) && v--, o && _.push(f));
                    }
                    if (((v += y), n && y !== v)) {
                      for (p = 0; (m = t[p++]); ) m(_, b, s, a);
                      if (o) {
                        if (v > 0)
                          for (; y--; ) _[y] || b[y] || (b[y] = j.call(l));
                        b = Te(b);
                      }
                      O.apply(l, b),
                        u &&
                          !o &&
                          b.length > 0 &&
                          v + t.length > 1 &&
                          ae.uniqueSort(l);
                    }
                    return u && ((T = x), (c = w)), _;
                  };
                return n ? ce(o) : o;
              })(o, r)
            )).selector = e;
          }
          return a;
        }),
      (l = ae.select =
        function (e, t, n, r) {
          var o,
            l,
            c,
            u,
            f,
            d = "function" == typeof e && e,
            h = !r && s((e = d.selector || e));
          if (((n = n || []), 1 === h.length)) {
            if (
              (l = h[0] = h[0].slice(0)).length > 2 &&
              "ID" === (c = l[0]).type &&
              9 === t.nodeType &&
              g &&
              i.relative[l[1].type]
            ) {
              if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              o = V.needsContext.test(e) ? 0 : l.length;
              o-- && !i.relative[(u = (c = l[o]).type)];

            )
              if (
                (f = i.find[u]) &&
                (r = f(
                  c.matches[0].replace(te, ne),
                  (ee.test(l[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(o, 1), !(e = r.length && _e(l))))
                  return O.apply(n, r), n;
                break;
              }
          }
          return (
            (d || a(e, h))(
              r,
              t,
              !g,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(A).join("") === b),
      (n.detectDuplicates = !!f),
      d(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(P, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      ae
    );
  })(e);
  (b.find = T),
    (b.expr = T.selectors),
    (b.expr[":"] = b.expr.pseudos),
    (b.uniqueSort = b.unique = T.uniqueSort),
    (b.text = T.getText),
    (b.isXMLDoc = T.isXML),
    (b.contains = T.contains),
    (b.escapeSelector = T.escape);
  var E = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && b(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    x = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    C = b.expr.match.needsContext;
  function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function A(e, t, n) {
    return p(t)
      ? b.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? b.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? b.grep(e, function (e) {
          return a.call(t, e) > -1 !== n;
        })
      : b.filter(t, e, n);
  }
  (b.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? b.find.matchesSelector(i, e)
          ? [i]
          : []
        : b.find.matches(
            e,
            b.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    b.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            b(e).filter(function () {
              for (t = 0; t < i; t++) if (b.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) b.find(e, r[t], n);
        return i > 1 ? b.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(A(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(A(this, e || [], !0));
      },
      is: function (e) {
        return !!A(this, "string" == typeof e && C.test(e) ? b(e) : e || [], !1)
          .length;
      },
    });
  var D,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((b.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : N.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          (b.merge(
            this,
            b.parseHTML(
              i[1],
              (t = t instanceof b ? t[0] : t) && t.nodeType
                ? t.ownerDocument || t
                : m,
              !0
            )
          ),
          k.test(i[1]) && b.isPlainObject(t))
        )
          for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (r = m.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : p(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(b)
      : b.makeArray(e, this);
  }).prototype = b.fn),
    (D = b(m));
  var j = /^(?:parents|prev(?:Until|All))/,
    I = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  b.fn.extend({
    has: function (e) {
      var t = b(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (b.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = "string" != typeof e && b(e);
      if (!C.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && b.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? a.call(b(e), this[0])
          : a.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    b.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return E(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return E(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return E(e, "nextSibling");
        },
        prevAll: function (e) {
          return E(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return E(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return E(e, "previousSibling", n);
        },
        siblings: function (e) {
          return x((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return x(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (S(e, "template") && (e = e.content || e),
              b.merge([], e.childNodes));
        },
      },
      function (e, t) {
        b.fn[e] = function (n, i) {
          var r = b.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = b.filter(i, r)),
            this.length > 1 &&
              (I[e] || b.uniqueSort(r), j.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var L = /[^\x20\t\r\n\f]+/g;
  function q(e) {
    return e;
  }
  function P(e) {
    throw e;
  }
  function R(e, t, n, i) {
    var r;
    try {
      e && p((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && p((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (b.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
            var t = {};
            return (
              b.each(e.match(L) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : b.extend({}, e);
    var t,
      n,
      i,
      r,
      o = [],
      s = [],
      a = -1,
      l = function () {
        for (r = r || e.once, i = t = !0; s.length; a = -1)
          for (n = s.shift(); ++a < o.length; )
            !1 === o[a].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((a = o.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            o &&
              (n && !t && ((a = o.length - 1), s.push(n)),
              (function t(n) {
                b.each(n, function (n, i) {
                  p(i)
                    ? (e.unique && c.has(i)) || o.push(i)
                    : i && i.length && "string" !== _(i) && t(i);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            b.each(arguments, function (e, t) {
              for (var n; (n = b.inArray(t, o, n)) > -1; )
                o.splice(n, 1), n <= a && a--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? b.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (r = s = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (r = s = []), n || t || (o = n = ""), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, n) {
          return (
            r ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || l()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return c;
  }),
    b.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              b.Callbacks("memory"),
              b.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              b.Callbacks("once memory"),
              b.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              b.Callbacks("once memory"),
              b.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return b
                .Deferred(function (t) {
                  b.each(n, function (n, i) {
                    var r = p(e[i[4]]) && e[i[4]];
                    o[i[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && p(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, r ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, r) {
              var o = 0;
              function s(t, n, i, r) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < o)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        p(
                          (c =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then)
                        )
                          ? r
                            ? c.call(e, s(o, n, q, r), s(o, n, P, r))
                            : (o++,
                              c.call(
                                e,
                                s(o, n, q, r),
                                s(o, n, P, r),
                                s(o, n, q, n.notifyWith)
                              ))
                          : (i !== q && ((a = void 0), (l = [e])),
                            (r || n.resolveWith)(a, l));
                      }
                    },
                    u = r
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            b.Deferred.exceptionHook &&
                              b.Deferred.exceptionHook(e, u.stackTrace),
                              t + 1 >= o &&
                                (i !== P && ((a = void 0), (l = [e])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? u()
                    : (b.Deferred.getStackHook &&
                        (u.stackTrace = b.Deferred.getStackHook()),
                      e.setTimeout(u));
                };
              }
              return b
                .Deferred(function (e) {
                  n[0][3].add(s(0, e, p(r) ? r : q, e.notifyWith)),
                    n[1][3].add(s(0, e, p(t) ? t : q)),
                    n[2][3].add(s(0, e, p(i) ? i : P));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? b.extend(e, r) : r;
            },
          },
          o = {};
        return (
          b.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (r[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = s.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          s = b.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (o[e] = arguments.length > 1 ? r.call(arguments) : n),
                --t || s.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          (R(e, s.done(a(n)).resolve, s.reject, !t),
          "pending" === s.state() || p(o[n] && o[n].then))
        )
          return s.then();
        for (; n--; ) R(o[n], a(n), s.reject);
        return s.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (b.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      H.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (b.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = b.Deferred();
  function M() {
    m.removeEventListener("DOMContentLoaded", M),
      e.removeEventListener("load", M),
      b.ready();
  }
  (b.fn.ready = function (e) {
    return (
      F.then(e).catch(function (e) {
        b.readyException(e);
      }),
      this
    );
  }),
    b.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --b.readyWait : b.isReady) ||
          ((b.isReady = !0),
          (!0 !== e && --b.readyWait > 0) || F.resolveWith(m, [b]));
      },
    }),
    (b.ready.then = F.then),
    "complete" === m.readyState ||
    ("loading" !== m.readyState && !m.documentElement.doScroll)
      ? e.setTimeout(b.ready)
      : (m.addEventListener("DOMContentLoaded", M),
        e.addEventListener("load", M));
  var B = function (e, t, n, i, r, o, s) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === _(n))
        for (a in ((r = !0), n)) B(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== i &&
        ((r = !0),
        p(i) || (s = !0),
        c &&
          (s
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(b(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
    },
    W = /^-ms-/,
    Q = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function $(e) {
    return e.replace(W, "ms-").replace(Q, U);
  }
  var z = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function X() {
    this.expando = b.expando + X.uid++;
  }
  (X.uid = 1),
    (X.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            z(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[$(t)] = n;
        else for (i in t) r[$(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][$(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map($)
              : (t = $(t)) in i
              ? [t]
              : t.match(L) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || b.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !b.isEmptyObject(t);
      },
    });
  var V = new X(),
    Y = new X(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    G = /[A-Z]/g;
  function J(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(G, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n = (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("null" === e
                  ? null
                  : e === +e + ""
                  ? +e
                  : K.test(e)
                  ? JSON.parse(e)
                  : e))
            );
          })(n);
        } catch (r) {}
        Y.set(e, t, n);
      } else n = void 0;
    return n;
  }
  b.extend({
    hasData: function (e) {
      return Y.hasData(e) || V.hasData(e);
    },
    data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    removeData: function (e, t) {
      Y.remove(e, t);
    },
    _data: function (e, t, n) {
      return V.access(e, t, n);
    },
    _removeData: function (e, t) {
      V.remove(e, t);
    },
  }),
    b.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = Y.get(o)), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                ((i = $(i.slice(5))), J(o, i, r[i]));
            V.set(o, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              Y.set(this, e);
            })
          : B(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return void 0 !== (n = Y.get(o, e))
                    ? n
                    : void 0 !== (n = J(o, e))
                    ? n
                    : void 0;
                this.each(function () {
                  Y.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Y.remove(this, e);
        });
      },
    }),
    b.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (i = V.get(e, (t = (t || "fx") + "queue"))),
            n &&
              (!i || Array.isArray(n)
                ? (i = V.access(e, t, b.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        var n = b.queue(e, (t = t || "fx")),
          i = n.length,
          r = n.shift(),
          o = b._queueHooks(e, t);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(
              e,
              function () {
                b.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          V.get(e, n) ||
          V.access(e, n, {
            empty: b.Callbacks("once memory").add(function () {
              V.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    b.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? b.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          b.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = b.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = V.get(o[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), r.promise(t);
      },
    });
  var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
    te = ["Top", "Right", "Bottom", "Left"],
    ne = m.documentElement,
    ie = function (e) {
      return b.contains(e.ownerDocument, e);
    },
    re = { composed: !0 };
  ne.getRootNode &&
    (ie = function (e) {
      return (
        b.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
      );
    });
  var oe = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === b.css(e, "display"))
    );
  };
  function se(e, t, n, i) {
    var r,
      o,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return b.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (b.cssNumber[t] ? "" : "px"),
      u =
        e.nodeType &&
        (b.cssNumber[t] || ("px" !== c && +l)) &&
        ee.exec(b.css(e, t));
    if (u && u[3] !== c) {
      for (c = c || u[3], u = +(l /= 2) || 1; s--; )
        b.style(e, t, u + c),
          (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
          (u /= o);
      b.style(e, t, (u *= 2) + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = r))),
      r
    );
  }
  var ae = {};
  function le(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      r = ae[i];
    return (
      r ||
      ((t = n.body.appendChild(n.createElement(i))),
      (r = b.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === r && (r = "block"),
      (ae[i] = r),
      r)
    );
  }
  function ce(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
      (i = e[o]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((r[o] = V.get(i, "display") || null),
              r[o] || (i.style.display = "")),
            "" === i.style.display && oe(i) && (r[o] = le(i)))
          : "none" !== n && ((r[o] = "none"), V.set(i, "display", n)));
    for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
    return e;
  }
  b.fn.extend({
    show: function () {
      return ce(this, !0);
    },
    hide: function () {
      return ce(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            oe(this) ? b(this).show() : b(this).hide();
          });
    },
  });
  var ue,
    fe,
    de = /^(?:checkbox|radio)$/i,
    he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i;
  (ue = m.createDocumentFragment().appendChild(m.createElement("div"))),
    (fe = m.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ue.appendChild(fe),
    (h.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ue.innerHTML = "<textarea>x</textarea>"),
    (h.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
    (ue.innerHTML = "<option></option>"),
    (h.option = !!ue.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function me(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && S(e, t)) ? b.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    h.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function _e(e, t, n, i, r) {
    for (
      var o,
        s,
        a,
        l,
        c,
        u,
        f = t.createDocumentFragment(),
        d = [],
        h = 0,
        p = e.length;
      h < p;
      h++
    )
      if ((o = e[h]) || 0 === o)
        if ("object" === _(o)) b.merge(d, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          for (
            s = s || f.appendChild(t.createElement("div")),
              a = (he.exec(o) || ["", ""])[1].toLowerCase(),
              s.innerHTML =
                (l = ge[a] || ge._default)[1] + b.htmlPrefilter(o) + l[2],
              u = l[0];
            u--;

          )
            s = s.lastChild;
          b.merge(d, s.childNodes), ((s = f.firstChild).textContent = "");
        } else d.push(t.createTextNode(o));
    for (f.textContent = "", h = 0; (o = d[h++]); )
      if (i && b.inArray(o, i) > -1) r && r.push(o);
      else if (
        ((c = ie(o)), (s = me(f.appendChild(o), "script")), c && ve(s), n)
      )
        for (u = 0; (o = s[u++]); ) pe.test(o.type || "") && n.push(o);
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function xe() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return m.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Se(e, t, n, i, r, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Se(e, a, n, i, t[a], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = xe;
    else if (!r) return e;
    return (
      1 === o &&
        ((s = r),
        ((r = function (e) {
          return b().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = b.guid++))),
      e.each(function () {
        b.event.add(this, t, r, i, n);
      })
    );
  }
  function ke(e, t, n) {
    n
      ? (V.set(e, t, !1),
        b.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              o,
              s = V.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (s.length)
                (b.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((s = r.call(arguments)),
                V.set(this, t, s),
                (i = n(this, t)),
                this[t](),
                s !== (o = V.get(this, t)) || i ? V.set(this, t, !1) : (o = {}),
                s !== o)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), o.value
                );
            } else
              s.length &&
                (V.set(this, t, {
                  value: b.event.trigger(
                    b.extend(s[0], b.Event.prototype),
                    s.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === V.get(e, t) && b.event.add(e, t, Ee);
  }
  (b.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        c,
        u,
        f,
        d,
        h,
        p,
        g,
        m = V.get(e);
      if (z(e))
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && b.find.matchesSelector(ne, r),
            n.guid || (n.guid = b.guid++),
            (l = m.events) || (l = m.events = Object.create(null)),
            (s = m.handle) ||
              (s = m.handle =
                function (t) {
                  return void 0 !== b && b.event.triggered !== t.type
                    ? b.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(L) || [""]).length;
          c--;

        )
          (h = g = (a = Te.exec(t[c]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            h &&
              ((f = b.event.special[h] || {}),
              (f =
                b.event.special[(h = (r ? f.delegateType : f.bindType) || h)] ||
                {}),
              (u = b.extend(
                {
                  type: h,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && b.expr.match.needsContext.test(r),
                  namespace: p.join("."),
                },
                o
              )),
              (d = l[h]) ||
                (((d = l[h] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, i, p, s)) ||
                  (e.addEventListener && e.addEventListener(h, s))),
              f.add &&
                (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
              (b.event.global[h] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        c,
        u,
        f,
        d,
        h,
        p,
        g,
        m = V.hasData(e) && V.get(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(L) || [""]).length; c--; )
          if (
            ((h = g = (a = Te.exec(t[c]) || [])[1]),
            (p = (a[2] || "").split(".").sort()),
            h)
          ) {
            for (
              f = b.event.special[h] || {},
                d = l[(h = (i ? f.delegateType : f.bindType) || h)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = d.length;
              o--;

            )
              (u = d[o]),
                (!r && g !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (d.splice(o, 1),
                  u.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, u));
            s &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                b.removeEvent(e, h, m.handle),
              delete l[h]);
          } else for (h in l) b.event.remove(e, h + t[c], n, i, !0);
        b.isEmptyObject(l) && V.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a = new Array(arguments.length),
        l = b.event.fix(e),
        c = (V.get(this, "events") || Object.create(null))[l.type] || [],
        u = b.event.special[l.type] || {};
      for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, l))
      ) {
        for (
          s = b.event.handlers.call(this, l, c), t = 0;
          (r = s[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== o.namespace &&
              !l.rnamespace.test(o.namespace)) ||
              ((l.handleObj = o),
              (l.data = o.data),
              void 0 !==
                (i = (
                  (b.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, a)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(r = (i = t[n]).selector + " ")] &&
                (s[r] = i.needsContext
                  ? b(r, this).index(c) > -1
                  : b.find(r, this, null, [c]).length),
                s[r] && o.push(i);
            o.length && a.push({ elem: c, handlers: o });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(b.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: p(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[b.expando] ? e : new b.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            de.test(t.type) && t.click && S(t, "input") && ke(t, "click", Ee),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            de.test(t.type) && t.click && S(t, "input") && ke(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (de.test(t.type) &&
              t.click &&
              S(t, "input") &&
              V.get(t, "click")) ||
            S(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (b.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (b.Event = function (e, t) {
      if (!(this instanceof b.Event)) return new b.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ee
              : xe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && b.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[b.expando] = !0);
    }),
    (b.Event.prototype = {
      constructor: b.Event,
      isDefaultPrevented: xe,
      isPropagationStopped: xe,
      isImmediatePropagationStopped: xe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    b.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      b.event.addProp
    ),
    b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      b.event.special[e] = {
        setup: function () {
          return ke(this, e, Ce), !1;
        },
        trigger: function () {
          return ke(this, e), !0;
        },
        delegateType: t,
      };
    }),
    b.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        b.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              r = e.relatedTarget,
              o = e.handleObj;
            return (
              (r && (r === i || b.contains(i, r))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    b.fn.extend({
      on: function (e, t, n, i) {
        return Se(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Se(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            b(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = xe),
          this.each(function () {
            b.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ae = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (S(e, "table") &&
        S(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        b(e).children("tbody")[0]) ||
      e
    );
  }
  function Ie(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Oe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, i, r, o, s, a;
    if (1 === t.nodeType) {
      if (V.hasData(e) && (a = V.get(e).events))
        for (r in (V.remove(t, "handle events"), a))
          for (n = 0, i = a[r].length; n < i; n++) b.event.add(t, r, a[r][n]);
      Y.hasData(e) && ((o = Y.access(e)), (s = b.extend({}, o)), Y.set(t, s));
    }
  }
  function qe(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && de.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function Pe(e, t, n, i) {
    t = o(t);
    var r,
      s,
      a,
      l,
      c,
      u,
      f = 0,
      d = e.length,
      g = d - 1,
      m = t[0],
      v = p(m);
    if (v || (d > 1 && "string" == typeof m && !h.checkClone && De.test(m)))
      return e.each(function (r) {
        var o = e.eq(r);
        v && (t[0] = m.call(this, r, o.html())), Pe(o, t, n, i);
      });
    if (
      d &&
      ((s = (r = _e(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === r.childNodes.length && (r = s),
      s || i)
    ) {
      for (l = (a = b.map(me(r, "script"), Ie)).length; f < d; f++)
        (c = r),
          f !== g &&
            ((c = b.clone(c, !0, !0)), l && b.merge(a, me(c, "script"))),
          n.call(e[f], c, f);
      if (l)
        for (u = a[a.length - 1].ownerDocument, b.map(a, Oe), f = 0; f < l; f++)
          pe.test((c = a[f]).type || "") &&
            !V.access(c, "globalEval") &&
            b.contains(u, c) &&
            (c.src && "module" !== (c.type || "").toLowerCase()
              ? b._evalUrl &&
                !c.noModule &&
                b._evalUrl(
                  c.src,
                  { nonce: c.nonce || c.getAttribute("nonce") },
                  u
                )
              : y(c.textContent.replace(Ne, ""), c, u));
    }
    return e;
  }
  function Re(e, t, n) {
    for (var i, r = t ? b.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || b.cleanData(me(i)),
        i.parentNode &&
          (n && ie(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  b.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        s,
        a = e.cloneNode(!0),
        l = ie(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          b.isXMLDoc(e)
        )
      )
        for (s = me(a), i = 0, r = (o = me(e)).length; i < r; i++)
          qe(o[i], s[i]);
      if (t)
        if (n)
          for (o = o || me(e), s = s || me(a), i = 0, r = o.length; i < r; i++)
            Le(o[i], s[i]);
        else Le(e, a);
      return (
        (s = me(a, "script")).length > 0 && ve(s, !l && me(e, "script")), a
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (z(n)) {
          if ((t = n[V.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? b.event.remove(n, i) : b.removeEvent(n, i, t.handle);
            n[V.expando] = void 0;
          }
          n[Y.expando] && (n[Y.expando] = void 0);
        }
    },
  }),
    b.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? b.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (b.cleanData(me(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return b.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = b.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (b.cleanData(me(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (r) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Pe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            b.inArray(this, e) < 0 &&
              (b.cleanData(me(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    b.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        b.fn[e] = function (e) {
          for (var n, i = [], r = b(e), o = r.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              b(r[a])[t](n),
              s.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var He = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
    Fe = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Me = function (e, t, n) {
      var i,
        r,
        o = {};
      for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
      return i;
    },
    Be = new RegExp(te.join("|"), "i");
  function We(e, t, n) {
    var i,
      r,
      o,
      s,
      a = e.style;
    return (
      (n = n || Fe(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (s = b.style(e, t)),
        !h.pixelBoxStyles() &&
          He.test(s) &&
          Be.test(t) &&
          ((i = a.width),
          (r = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = r),
          (a.maxWidth = o))),
      void 0 !== s ? s + "" : s
    );
  }
  function Qe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (u) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ne.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        (i = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (u.style.right = "60%"),
          (s = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (u.style.position = "absolute"),
          (o = 12 === n(u.offsetWidth / 3)),
          ne.removeChild(c),
          (u = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      r,
      o,
      s,
      a,
      l,
      c = m.createElement("div"),
      u = m.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === u.style.backgroundClip),
      b.extend(h, {
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, i, r;
          return (
            null == a &&
              ((t = m.createElement("table")),
              (n = m.createElement("tr")),
              (i = m.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px"),
              (n.style.height = "1px"),
              (i.style.height = "9px"),
              ne.appendChild(t).appendChild(n).appendChild(i),
              (r = e.getComputedStyle(n)),
              (a = parseInt(r.height) > 3),
              ne.removeChild(t)),
            a
          );
        },
      }));
  })();
  var Ue = ["Webkit", "Moz", "ms"],
    $e = m.createElement("div").style,
    ze = {};
  function Xe(e) {
    return (
      b.cssProps[e] ||
      ze[e] ||
      (e in $e
        ? e
        : (ze[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                n--;

              )
                if ((e = Ue[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ye = /^--/,
    Ke = { position: "absolute", visibility: "hidden", display: "block" },
    Ge = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var i = ee.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function Ze(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += b.css(e, n + te[s], !0, r)),
        i
          ? ("content" === n && (l -= b.css(e, "padding" + te[s], !0, r)),
            "margin" !== n &&
              (l -= b.css(e, "border" + te[s] + "Width", !0, r)))
          : ((l += b.css(e, "padding" + te[s], !0, r)),
            "padding" !== n
              ? (l += b.css(e, "border" + te[s] + "Width", !0, r))
              : (a += b.css(e, "border" + te[s] + "Width", !0, r)));
    return (
      !i &&
        o >= 0 &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function et(e, t, n) {
    var i = Fe(e),
      r =
        (!h.boxSizingReliable() || n) &&
        "border-box" === b.css(e, "boxSizing", !1, i),
      o = r,
      s = We(e, t, i),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (He.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!h.boxSizingReliable() && r) ||
        (!h.reliableTrDimensions() && S(e, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === b.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((r = "border-box" === b.css(e, "boxSizing", !1, i)),
        (o = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) +
        Ze(e, t, n || (r ? "border" : "content"), o, i, s) +
        "px"
    );
  }
  function tt(e, t, n, i, r) {
    return new tt.prototype.init(e, t, n, i, r);
  }
  b.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          s,
          a = $(t),
          l = Ye.test(t),
          c = e.style;
        if (
          (l || (t = Xe(a)), (s = b.cssHooks[t] || b.cssHooks[a]), void 0 === n)
        )
          return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
        "string" == (o = typeof n) &&
          (r = ee.exec(n)) &&
          r[1] &&
          ((n = se(e, t, r)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              l ||
              (n += (r && r[3]) || (b.cssNumber[a] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        s,
        a = $(t);
      return (
        Ye.test(t) || (t = Xe(a)),
        (s = b.cssHooks[t] || b.cssHooks[a]) &&
          "get" in s &&
          (r = s.get(e, !0, n)),
        void 0 === r && (r = We(e, t, i)),
        "normal" === r && t in Ge && (r = Ge[t]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    b.each(["height", "width"], function (e, t) {
      b.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Ve.test(b.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, i)
              : Me(e, Ke, function () {
                  return et(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            o = Fe(e),
            s = !h.scrollboxSize() && "absolute" === o.position,
            a = (s || i) && "border-box" === b.css(e, "boxSizing", !1, o),
            l = i ? Ze(e, t, i, a, o) : 0;
          return (
            a &&
              s &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ze(e, t, "border", !1, o) -
                  0.5
              )),
            l &&
              (r = ee.exec(n)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[t] = n), (n = b.css(e, t))),
            Je(0, n, l)
          );
        },
      };
    }),
    (b.cssHooks.marginLeft = Qe(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    b.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (b.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + te[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        "margin" !== e && (b.cssHooks[e + t].set = Je);
    }),
    b.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = Fe(e), r = t.length; s < r; s++)
                o[t[s]] = b.css(e, t[s], !1, i);
              return o;
            }
            return void 0 !== n ? b.style(e, t, n) : b.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (b.Tween = tt),
    ((tt.prototype = {
      constructor: tt,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || b.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (b.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = tt.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? b.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = tt.prototype),
    ((tt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = b.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          b.fx.step[e.prop]
            ? b.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!b.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : b.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = tt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (b.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (b.fx = tt.prototype.init),
    (b.fx.step = {});
  var nt,
    it,
    rt = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function st() {
    it &&
      (!1 === m.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(st)
        : e.setTimeout(st, b.fx.interval),
      b.fx.tick());
  }
  function at() {
    return (
      e.setTimeout(function () {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = te[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function ct(e, t, n) {
    for (
      var i,
        r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]),
        o = 0,
        s = r.length;
      o < s;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function ut(e, t, n) {
    var i,
      r,
      o = 0,
      s = ut.prefilters.length,
      a = b.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = nt || at(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            o = 0,
            s = c.tweens.length;
          o < s;
          o++
        )
          c.tweens[o].run(i);
        return (
          a.notifyWith(e, [c, i, n]),
          i < 1 && s
            ? n
            : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: b.extend({}, t),
        opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || at(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = b.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      u = c.props;
    for (
      (function (e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (
            ((r = t[(i = $(n))]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (s = b.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[i], o))
              (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(u, c.opts.specialEasing);
      o < s;
      o++
    )
      if ((i = ut.prefilters[o].call(c, e, u, c.opts)))
        return (
          p(i.stop) &&
            (b._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      b.map(u, ct, c),
      p(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      b.fx.timer(b.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (b.Animation = b.extend(ut, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, ee.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      p(e) ? ((t = e), (e = ["*"])) : (e = e.match(L));
      for (var n, i = 0, r = e.length; i < r; i++)
        (ut.tweeners[(n = e[i])] = ut.tweeners[n] || []).unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          f = "width" in t || "height" in t,
          d = this,
          h = {},
          p = e.style,
          g = e.nodeType && oe(e),
          m = V.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (s = b._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          d.always(function () {
            d.always(function () {
              s.unqueued--, b.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (rt.test((r = t[i]))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (g ? "hide" : "show"))
            ) {
              if ("show" !== r || !m || void 0 === m[i]) continue;
              g = !0;
            }
            h[i] = (m && m[i]) || b.style(e, i);
          }
        if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(h))
          for (i in (f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (c = m && m.display) && (c = V.get(e, "display")),
            "none" === (u = b.css(e, "display")) &&
              (c
                ? (u = c)
                : (ce([e], !0),
                  (c = e.style.display || c),
                  (u = b.css(e, "display")),
                  ce([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === b.css(e, "float") &&
              (l ||
                (d.done(function () {
                  p.display = c;
                }),
                null == c && (c = "none" === (u = p.display) ? "" : u)),
              (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            d.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          h))
            l ||
              (m
                ? "hidden" in m && (g = m.hidden)
                : (m = V.access(e, "fxshow", { display: c })),
              o && (m.hidden = !g),
              g && ce([e], !0),
              d.done(function () {
                for (i in (g || ce([e]), V.remove(e, "fxshow"), h))
                  b.style(e, i, h[i]);
              })),
              (l = ct(g ? m[i] : 0, i, d)),
              i in m ||
                ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
    },
  })),
    (b.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? b.extend({}, e)
          : {
              complete: n || (!n && t) || (p(e) && e),
              duration: e,
              easing: (n && t) || (t && !p(t) && t),
            };
      return (
        b.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration =
              i.duration in b.fx.speeds
                ? b.fx.speeds[i.duration]
                : b.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          p(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue);
        }),
        i
      );
    }),
    b.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(oe)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = b.isEmptyObject(e),
          o = b.speed(t, n, i),
          s = function () {
            var t = ut(this, b.extend({}, e), o);
            (r || V.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = b.timers,
              s = V.get(this);
            if (r) s[r] && s[r].stop && i(s[r]);
            else for (r in s) s[r] && s[r].stop && ot.test(r) && i(s[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != e && o[r].queue !== e) ||
                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || b.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = V.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = b.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                b.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    b.each(["toggle", "show", "hide"], function (e, t) {
      var n = b.fn[t];
      b.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(lt(t, !0), e, i, r);
      };
    }),
    b.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        b.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (b.timers = []),
    (b.fx.tick = function () {
      var e,
        t = 0,
        n = b.timers;
      for (nt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || b.fx.stop(), (nt = void 0);
    }),
    (b.fx.timer = function (e) {
      b.timers.push(e), b.fx.start();
    }),
    (b.fx.interval = 13),
    (b.fx.start = function () {
      it || ((it = !0), st());
    }),
    (b.fx.stop = function () {
      it = null;
    }),
    (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (b.fn.delay = function (t, n) {
      return (
        (t = (b.fx && b.fx.speeds[t]) || t),
        this.queue((n = n || "fx"), function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e = m.createElement("input"),
        t = m.createElement("select").appendChild(m.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = m.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var ft,
    dt = b.expr.attrHandle;
  b.fn.extend({
    attr: function (e, t) {
      return B(this, b.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        b.removeAttr(this, e);
      });
    },
  }),
    b.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? b.prop(e, t, n)
            : ((1 === o && b.isXMLDoc(e)) ||
                (r =
                  b.attrHooks[t.toLowerCase()] ||
                  (b.expr.match.bool.test(t) ? ft : void 0)),
              void 0 !== n
                ? null === n
                  ? void b.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = b.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && S(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(L);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (ft = {
      set: function (e, t, n) {
        return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = dt[t] || b.find.attr;
      dt[t] = function (e, t, i) {
        var r,
          o,
          s = t.toLowerCase();
        return (
          i ||
            ((o = dt[s]),
            (dt[s] = r),
            (r = null != n(e, t, i) ? s : null),
            (dt[s] = o)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    pt = /^(?:a|area)$/i;
  function gt(e) {
    return (e.match(L) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(L)) || [];
  }
  b.fn.extend({
    prop: function (e, t) {
      return B(this, b.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[b.propFix[e] || e];
      });
    },
  }),
    b.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && b.isXMLDoc(e)) ||
              (r = b.propHooks[(t = b.propFix[t] || t)]),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = b.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (pt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (b.propHooks.selected = {
        get: function (e) {
          return null;
        },
        set: function (e) {},
      }),
    b.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        b.propFix[this.toLowerCase()] = this;
      }
    ),
    b.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (p(e))
          return this.each(function (t) {
            b(this).addClass(e.call(this, t, mt(this)));
          });
        if ((t = vt(e)).length)
          for (; (n = this[l++]); )
            if (((r = mt(n)), (i = 1 === n.nodeType && " " + gt(r) + " "))) {
              for (s = 0; (o = t[s++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (a = gt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0;
        if (p(e))
          return this.each(function (t) {
            b(this).removeClass(e.call(this, t, mt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = vt(e)).length)
          for (; (n = this[l++]); )
            if (((r = mt(n)), (i = 1 === n.nodeType && " " + gt(r) + " "))) {
              for (s = 0; (o = t[s++]); )
                for (; i.indexOf(" " + o + " ") > -1; )
                  i = i.replace(" " + o + " ", " ");
              r !== (a = gt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : p(e)
          ? this.each(function (n) {
              b(this).toggleClass(e.call(this, n, mt(this), t), t);
            })
          : this.each(function () {
              var t, r, o, s;
              if (i)
                for (r = 0, o = b(this), s = vt(e); (t = s[r++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = mt(this)) && V.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : V.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  b.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = p(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, b(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : Array.isArray(r) &&
                  (r = b.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                b.valHooks[this.type] ||
                b.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? (t = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(r, "value"))
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(yt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    b.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = b.find.attr(e, "value");
            return null != t ? t : gt(b.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;
            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))
              ) {
                if (((t = b(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = b.makeArray(t), s = r.length;
              s--;

            )
              ((i = r[s]).selected =
                b.inArray(b.valHooks.option.get(i), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    b.each(["radio", "checkbox"], function () {
      (b.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = b.inArray(b(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (b.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var _t = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (e) {
      e.stopPropagation();
    };
  b.extend(b.event, {
    trigger: function (t, n, i, r) {
      var o,
        s,
        a,
        l,
        c,
        f,
        d,
        h,
        v = [i || m],
        y = u.call(t, "type") ? t.type : t,
        _ = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = a = i = i || m),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !_t.test(y + b.event.triggered) &&
          (y.indexOf(".") > -1 &&
            ((_ = y.split(".")), (y = _.shift()), _.sort()),
          (c = y.indexOf(":") < 0 && "on" + y),
          ((t = t[b.expando]
            ? t
            : new b.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = _.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : b.makeArray(n, [t])),
          (d = b.event.special[y] || {}),
          r || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!r && !d.noBubble && !g(i)) {
          for (
            _t.test((l = d.delegateType || y) + y) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            v.push(s), (a = s);
          a === (i.ownerDocument || m) &&
            v.push(a.defaultView || a.parentWindow || e);
        }
        for (o = 0; (s = v[o++]) && !t.isPropagationStopped(); )
          (h = s),
            (t.type = o > 1 ? l : d.bindType || y),
            (f =
              (V.get(s, "events") || Object.create(null))[t.type] &&
              V.get(s, "handle")) && f.apply(s, n),
            (f = c && s[c]) &&
              f.apply &&
              z(s) &&
              ((t.result = f.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          r ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !z(i) ||
            (c &&
              p(i[y]) &&
              !g(i) &&
              ((a = i[c]) && (i[c] = null),
              (b.event.triggered = y),
              t.isPropagationStopped() && h.addEventListener(y, bt),
              i[y](),
              t.isPropagationStopped() && h.removeEventListener(y, bt),
              (b.event.triggered = void 0),
              a && (i[c] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = b.extend(new b.Event(), n, { type: e, isSimulated: !0 });
      b.event.trigger(i, null, t);
    },
  }),
    b.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          b.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return b.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          b.event.simulate(t, e.target, b.event.fix(e));
        };
        b.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              r = V.access(i, t);
            r || i.addEventListener(e, n, !0), V.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              r = V.access(i, t) - 1;
            r
              ? V.access(i, t, r)
              : (i.removeEventListener(e, n, !0), V.remove(i, t));
          },
        };
      });
  var wt = e.location,
    Tt = { guid: Date.now() },
    Et = /\?/;
  b.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (i) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        b.error("Invalid XML: " + t),
      n
    );
  };
  var xt = /\[\]$/,
    Ct = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      b.each(t, function (t, r) {
        n || xt.test(e)
          ? i(e, r)
          : At(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== _(t)) i(e, t);
    else for (r in t) At(e + "[" + r + "]", t[r], n, i);
  }
  (b.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = p(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !b.isPlainObject(e)))
      b.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, r);
    return i.join("&");
  }),
    b.fn.extend({
      serialize: function () {
        return b.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = b.prop(this, "elements");
          return e ? b.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !b(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !de.test(e))
            );
          })
          .map(function (e, t) {
            var n = b(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? b.map(n, function (e) {
                  return { name: t.name, value: e.replace(Ct, "\r\n") };
                })
              : { name: t.name, value: n.replace(Ct, "\r\n") };
          })
          .get();
      },
    });
  var Dt = /%20/g,
    Nt = /#.*$/,
    jt = /([?&])_=[^&]*/,
    It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Lt = /^\/\//,
    qt = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Ht = m.createElement("a");
  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        o = t.toLowerCase().match(L) || [];
      if (p(n))
        for (; (i = o[r++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Mt(e, t, n, i) {
    var r = {},
      o = e === Pt;
    function s(a) {
      var l;
      return (
        (r[a] = !0),
        b.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || o || r[c]
            ? o
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), s(c), !1);
        }),
        l
      );
    }
    return s(t.dataTypes[0]) || (!r["*"] && s("*"));
  }
  function Bt(e, t) {
    var n,
      i,
      r = b.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && b.extend(!0, e, i), e;
  }
  (Ht.href = wt.href),
    b.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: wt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            wt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": b.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Bt(Bt(e, b.ajaxSettings), t) : Bt(b.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(qt),
      ajaxTransport: Ft(Pt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0));
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          f,
          d,
          h = b.ajaxSetup({}, (n = n || {})),
          p = h.context || h,
          g = h.context && (p.nodeType || p.jquery) ? b(p) : b.event,
          v = b.Deferred(),
          y = b.Callbacks("once memory"),
          _ = h.statusCode || {},
          w = {},
          T = {},
          E = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = It.exec(o)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? o : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) x.always(e[x.status]);
                else for (t in e) _[t] = [_[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || E;
              return i && i.abort(t), C(0, t), this;
            },
          };
        if (
          (v.promise(x),
          (h.url = ((t || h.url || wt.href) + "").replace(
            Lt,
            wt.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(L) || [""]),
          null == h.crossDomain)
        ) {
          l = m.createElement("a");
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host);
          } catch (S) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = b.param(h.data, h.traditional)),
          Mt(qt, h, n, x),
          c)
        )
          return x;
        for (f in ((u = b.event && h.global) &&
          0 == b.active++ &&
          b.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Ot.test(h.type)),
        (r = h.url.replace(Nt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(Dt, "+"))
          : ((d = h.url.slice(r.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((r += (Et.test(r) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((r = r.replace(jt, "$1")),
              (d = (Et.test(r) ? "&" : "?") + "_=" + Tt.guid++ + d)),
            (h.url = r + d)),
        h.ifModified &&
          (b.lastModified[r] &&
            x.setRequestHeader("If-Modified-Since", b.lastModified[r]),
          b.etag[r] && x.setRequestHeader("If-None-Match", b.etag[r])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          x.setRequestHeader("Content-Type", h.contentType),
        x.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          x.setRequestHeader(f, h.headers[f]);
        if (h.beforeSend && (!1 === h.beforeSend.call(p, x, h) || c))
          return x.abort();
        if (
          ((E = "abort"),
          y.add(h.complete),
          x.done(h.success),
          x.fail(h.error),
          (i = Mt(Pt, h, n, x)))
        ) {
          if (((x.readyState = 1), u && g.trigger("ajaxSend", [x, h]), c))
            return x;
          h.async &&
            h.timeout > 0 &&
            (a = e.setTimeout(function () {
              x.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), i.send(w, C);
          } catch (S) {
            if (c) throw S;
            C(-1, S);
          }
        } else C(-1, "No Transport");
        function C(t, n, s, l) {
          var f,
            d,
            m,
            w,
            T,
            E = n;
          c ||
            ((c = !0),
            a && e.clearTimeout(a),
            (i = void 0),
            (o = l || ""),
            (x.readyState = t > 0 ? 4 : 0),
            (f = (t >= 200 && t < 300) || 304 === t),
            s &&
              (w = (function (e, t, n) {
                for (
                  var i, r, o, s, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                      o = r;
                      break;
                    }
                    s || (s = r);
                  }
                  o = o || s;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(h, x, s)),
            !f &&
              b.inArray("script", h.dataTypes) > -1 &&
              (h.converters["text script"] = function () {}),
            (w = (function (e, t, n, i) {
              var r,
                o,
                s,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              for (o = u.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = u.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(s = c[l + " " + o] || c["* " + o]))
                      for (r in c)
                        if (
                          (a = r.split(" "))[1] === o &&
                          (s = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = c[r])
                            : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (S) {
                          return {
                            state: "parsererror",
                            error: s
                              ? S
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(h, w, x, f)),
            f
              ? (h.ifModified &&
                  ((T = x.getResponseHeader("Last-Modified")) &&
                    (b.lastModified[r] = T),
                  (T = x.getResponseHeader("etag")) && (b.etag[r] = T)),
                204 === t || "HEAD" === h.type
                  ? (E = "nocontent")
                  : 304 === t
                  ? (E = "notmodified")
                  : ((E = w.state), (d = w.data), (f = !(m = w.error))))
              : ((m = E), (!t && E) || ((E = "error"), t < 0 && (t = 0))),
            (x.status = t),
            (x.statusText = (n || E) + ""),
            f ? v.resolveWith(p, [d, E, x]) : v.rejectWith(p, [x, E, m]),
            x.statusCode(_),
            (_ = void 0),
            u && g.trigger(f ? "ajaxSuccess" : "ajaxError", [x, h, f ? d : m]),
            y.fireWith(p, [x, E]),
            u &&
              (g.trigger("ajaxComplete", [x, h]),
              --b.active || b.event.trigger("ajaxStop")));
        }
        return x;
      },
      getJSON: function (e, t, n) {
        return b.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return b.get(e, void 0, t, "script");
      },
    }),
    b.each(["get", "post"], function (e, t) {
      b[t] = function (e, n, i, r) {
        return (
          p(n) && ((r = r || i), (i = n), (n = void 0)),
          b.ajax(
            b.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              b.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    b.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (b._evalUrl = function (e, t, n) {
      return b.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          b.globalEval(e, t, n);
        },
      });
    }),
    b.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (p(e) && (e = e.call(this[0])),
            (t = b(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return p(e)
          ? this.each(function (t) {
              b(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = b(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = p(e);
        return this.each(function (n) {
          b(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              b(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (b.expr.pseudos.hidden = function (e) {
      return !b.expr.pseudos.visible(e);
    }),
    (b.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (b.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var Wt = { 0: 200, 1223: 204 },
    Qt = b.ajaxSettings.xhr();
  (h.cors = !!Qt && "withCredentials" in Qt),
    (h.ajax = Qt = !!Qt),
    b.ajaxTransport(function (t) {
      var n, i;
      if (h.cors || (Qt && !t.crossDomain))
        return {
          send: function (r, o) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
            t.crossDomain ||
              r["X-Requested-With"] ||
              (r["X-Requested-With"] = "XMLHttpRequest"),
            r))
              a.setRequestHeader(s, r[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? o(0, "error")
                      : o(a.status, a.statusText)
                    : o(
                        Wt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (l) {
              if (n) throw l;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    b.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    b.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return b.globalEval(e), e;
        },
      },
    }),
    b.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    b.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, r) {
            (t = b("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              m.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Ut,
    $t = [],
    zt = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = $t.pop() || b.expando + "_" + Tt.guid++;
      return (this[e] = !0), e;
    },
  }),
    b.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        o,
        s,
        a =
          !1 !== t.jsonp &&
          (zt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              zt.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(zt, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return s || b.error(r + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[r]),
          (e[r] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === o ? b(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), $t.push(r)),
              s && p(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument =
      (((Ut = m.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (b.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((i = (t =
                  m.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = m.location.href),
                t.head.appendChild(i))
              : (t = m)),
          (o = !n && []),
          (r = k.exec(e))
            ? [t.createElement(r[1])]
            : ((r = _e([e], t, o)),
              o && o.length && b(o).remove(),
              b.merge([], r.childNodes)));
      var i, r, o;
    }),
    (b.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        s = this,
        a = e.indexOf(" ");
      return (
        a > -1 && ((i = gt(e.slice(a))), (e = e.slice(0, a))),
        p(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        s.length > 0 &&
          b
            .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (b.expr.pseudos.animated = function (e) {
      return b.grep(b.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (b.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c = b.css(e, "position"),
          u = b(e),
          f = {};
        "static" === c && (e.style.position = "relative"),
          (a = u.offset()),
          (o = b.css(e, "top")),
          (l = b.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1
            ? ((s = (i = u.position()).top), (r = i.left))
            : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          p(t) && (t = t.call(e, n, b.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + r),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              u.css(f));
      },
    }),
    b.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                b.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? {
                top:
                  (t = i.getBoundingClientRect()).top +
                  (n = i.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset,
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ("fixed" === b.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === b.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = b(e).offset()).top += b.css(e, "borderTopWidth", !0)),
              (r.left += b.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - r.top - b.css(i, "marginTop", !0),
            left: t.left - r.left - b.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === b.css(e, "position");

          )
            e = e.offsetParent;
          return e || ne;
        });
      },
    }),
    b.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function (i) {
          return B(
            this,
            function (e, i, r) {
              var o;
              if (
                (g(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
              )
                return o ? o[t] : e[i];
              o
                ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                : (e[i] = r);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    b.each(["top", "left"], function (e, t) {
      b.cssHooks[t] = Qe(h.pixelPosition, function (e, n) {
        if (n)
          return (n = We(e, t)), He.test(n) ? b(e).position()[t] + "px" : n;
      });
    }),
    b.each({ Height: "height", Width: "width" }, function (e, t) {
      b.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          b.fn[i] = function (r, o) {
            var s = arguments.length && (n || "boolean" != typeof r),
              a = n || (!0 === r || !0 === o ? "margin" : "border");
            return B(
              this,
              function (t, n, r) {
                var o;
                return g(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === r
                  ? b.css(t, n, a)
                  : b.style(t, n, r, a);
              },
              t,
              s ? r : void 0,
              s
            );
          };
        }
      );
    }),
    b.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        b.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    b.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    b.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        b.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (b.proxy = function (e, t) {
    var n, i, o;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), p(e)))
      return (
        (i = r.call(arguments, 2)),
        ((o = function () {
          return e.apply(t || this, i.concat(r.call(arguments)));
        }).guid = e.guid =
          e.guid || b.guid++),
        o
      );
  }),
    (b.holdReady = function (e) {
      e ? b.readyWait++ : b.ready(!0);
    }),
    (b.isArray = Array.isArray),
    (b.parseJSON = JSON.parse),
    (b.nodeName = S),
    (b.isFunction = p),
    (b.isWindow = g),
    (b.camelCase = $),
    (b.type = _),
    (b.now = Date.now),
    (b.isNumeric = function (e) {
      var t = b.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (b.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return b;
      });
  var Vt = e.jQuery,
    Yt = e.$;
  return (
    (b.noConflict = function (t) {
      return e.$ === b && (e.$ = Yt), t && e.jQuery === b && (e.jQuery = Vt), b;
    }),
    void 0 === t && (e.jQuery = e.$ = b),
    b
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis
              ? globalThis
              : e || self).bootstrap = {}),
          e.jQuery,
          e.Popper
        );
  })(this, function (e, t, n) {
    "use strict";
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }
    function o() {
      return (o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }).apply(this, arguments);
    }
    (t =
      t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t),
      (n =
        n && Object.prototype.hasOwnProperty.call(n, "default")
          ? n.default
          : n);
    var s = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));
        return e;
      },
      getSelectorFromElement: function (e) {
        var t = e.getAttribute("data-target");
        if (!t || "#" === t) {
          var n = e.getAttribute("href");
          t = n && "#" !== n ? n.trim() : "";
        }
        try {
          return document.querySelector(t) ? t : null;
        } catch (i) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (e) {
        if (!e) return 0;
        var n = t(e).css("transition-duration"),
          i = t(e).css("transition-delay"),
          r = parseFloat(n),
          o = parseFloat(i);
        return r || o
          ? ((n = n.split(",")[0]),
            (i = i.split(",")[0]),
            1e3 * (parseFloat(n) + parseFloat(i)))
          : 0;
      },
      reflow: function (e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function (e) {
        t(e).trigger("transitionend");
      },
      supportsTransitionEnd: function () {
        return Boolean("transitionend");
      },
      isElement: function (e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function (e, t, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
              o = t[i],
              a =
                o && s.isElement(o)
                  ? "element"
                  : null == (l = o)
                  ? "" + l
                  : {}.toString
                      .call(l)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase();
            if (!new RegExp(r).test(a))
              throw new Error(
                e.toUpperCase() +
                  ': Option "' +
                  i +
                  '" provided type "' +
                  a +
                  '" but expected type "' +
                  r +
                  '".'
              );
          }
        var l;
      },
      findShadowRoot: function (e) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof e.getRootNode) {
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }
        return e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? s.findShadowRoot(e.parentNode)
          : null;
      },
      jQueryDetection: function () {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (
          (e[0] < 2 && e[1] < 9) ||
          (1 === e[0] && 9 === e[1] && e[2] < 1) ||
          e[0] >= 4
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    };
    s.jQueryDetection(),
      (t.fn.emulateTransitionEnd = function (e) {
        var n = this,
          i = !1;
        return (
          t(this).one(s.TRANSITION_END, function () {
            i = !0;
          }),
          setTimeout(function () {
            i || s.triggerTransitionEnd(n);
          }, e),
          this
        );
      }),
      (t.event.special[s.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function (e) {
          if (t(e.target).is(this))
            return e.handleObj.handler.apply(this, arguments);
        },
      });
    var a = t.fn.alert,
      l = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.close = function (e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() ||
                this._removeElement(t);
          }),
          (n.dispose = function () {
            t.removeData(this._element, "bs.alert"), (this._element = null);
          }),
          (n._getRootElement = function (e) {
            var n = s.getSelectorFromElement(e),
              i = !1;
            return (
              n && (i = document.querySelector(n)),
              i || (i = t(e).closest(".alert")[0]),
              i
            );
          }),
          (n._triggerCloseEvent = function (e) {
            var n = t.Event("close.bs.alert");
            return t(e).trigger(n), n;
          }),
          (n._removeElement = function (e) {
            var n = this;
            if ((t(e).removeClass("show"), t(e).hasClass("fade"))) {
              var i = s.getTransitionDurationFromElement(e);
              t(e)
                .one(s.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(i);
            } else this._destroyElement(e);
          }),
          (n._destroyElement = function (e) {
            t(e).detach().trigger("closed.bs.alert").remove();
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                r = i.data("bs.alert");
              r || ((r = new e(this)), i.data("bs.alert", r)),
                "close" === n && r[n](this);
            });
          }),
          (e._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          r(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
          ]),
          e
        );
      })();
    t(document).on(
      "click.bs.alert.data-api",
      '[data-dismiss="alert"]',
      l._handleDismiss(new l())
    ),
      (t.fn.alert = l._jQueryInterface),
      (t.fn.alert.Constructor = l),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = a), l._jQueryInterface;
      });
    var c = t.fn.button,
      u = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.toggle = function () {
            var e = !0,
              n = !0,
              i = t(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
              var r = this._element.querySelector('input:not([type="hidden"])');
              if (r) {
                if ("radio" === r.type)
                  if (r.checked && this._element.classList.contains("active"))
                    e = !1;
                  else {
                    var o = i.querySelector(".active");
                    o && t(o).removeClass("active");
                  }
                e &&
                  (("checkbox" !== r.type && "radio" !== r.type) ||
                    (r.checked = !this._element.classList.contains("active")),
                  t(r).trigger("change")),
                  r.focus(),
                  (n = !1);
              }
            }
            this._element.hasAttribute("disabled") ||
              this._element.classList.contains("disabled") ||
              (n &&
                this._element.setAttribute(
                  "aria-pressed",
                  !this._element.classList.contains("active")
                ),
              e && t(this._element).toggleClass("active"));
          }),
          (n.dispose = function () {
            t.removeData(this._element, "bs.button"), (this._element = null);
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data("bs.button");
              i || ((i = new e(this)), t(this).data("bs.button", i)),
                "toggle" === n && i[n]();
            });
          }),
          r(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
          ]),
          e
        );
      })();
    t(document)
      .on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        var n = e.target,
          i = n;
        if (
          (t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]),
          !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
        )
          e.preventDefault();
        else {
          var r = n.querySelector('input:not([type="hidden"])');
          if (
            r &&
            (r.hasAttribute("disabled") || r.classList.contains("disabled"))
          )
            return void e.preventDefault();
          ("LABEL" !== i.tagName || (r && "checkbox" !== r.type)) &&
            u._jQueryInterface.call(t(n), "toggle");
        }
      })
      .on(
        "focus.bs.button.data-api blur.bs.button.data-api",
        '[data-toggle^="button"]',
        function (e) {
          var n = t(e.target).closest(".btn")[0];
          t(n).toggleClass("focus", /^focus(in)?$/.test(e.type));
        }
      ),
      t(window).on("load.bs.button.data-api", function () {
        for (
          var e = [].slice.call(
              document.querySelectorAll('[data-toggle="buttons"] .btn')
            ),
            t = 0,
            n = e.length;
          t < n;
          t++
        ) {
          var i = e[t],
            r = i.querySelector('input:not([type="hidden"])');
          r.checked || r.hasAttribute("checked")
            ? i.classList.add("active")
            : i.classList.remove("active");
        }
        for (
          var o = 0,
            s = (e = [].slice.call(
              document.querySelectorAll('[data-toggle="button"]')
            )).length;
          o < s;
          o++
        ) {
          var a = e[o];
          "true" === a.getAttribute("aria-pressed")
            ? a.classList.add("active")
            : a.classList.remove("active");
        }
      }),
      (t.fn.button = u._jQueryInterface),
      (t.fn.button.Constructor = u),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = c), u._jQueryInterface;
      });
    var f = "carousel",
      d = t.fn[f],
      h = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      p = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      g = { TOUCH: "touch", PEN: "pen" },
      m = (function () {
        function e(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector(
              ".carousel-indicators"
            )),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var n = e.prototype;
        return (
          (n.next = function () {
            this._isSliding || this._slide("next");
          }),
          (n.nextWhenVisible = function () {
            !document.hidden &&
              t(this._element).is(":visible") &&
              "hidden" !== t(this._element).css("visibility") &&
              this.next();
          }),
          (n.prev = function () {
            this._isSliding || this._slide("prev");
          }),
          (n.pause = function (e) {
            e || (this._isPaused = !0),
              this._element.querySelector(
                ".carousel-item-next, .carousel-item-prev"
              ) && (s.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (n.cycle = function (e) {
            e || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (n.to = function (e) {
            var n = this;
            this._activeElement = this._element.querySelector(
              ".active.carousel-item"
            );
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                t(this._element).one("slid.bs.carousel", function () {
                  return n.to(e);
                });
              else {
                if (i === e) return this.pause(), void this.cycle();
                this._slide(e > i ? "next" : "prev", this._items[e]);
              }
          }),
          (n.dispose = function () {
            t(this._element).off(".bs.carousel"),
              t.removeData(this._element, "bs.carousel"),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (n._getConfig = function (e) {
            return (e = o({}, h, e)), s.typeCheckConfig(f, e, p), e;
          }),
          (n._handleSwipe = function () {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
              var t = e / this.touchDeltaX;
              (this.touchDeltaX = 0),
                t > 0 && this.prev(),
                t < 0 && this.next();
            }
          }),
          (n._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              t(this._element).on("keydown.bs.carousel", function (t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                t(this._element)
                  .on("mouseenter.bs.carousel", function (t) {
                    return e.pause(t);
                  })
                  .on("mouseleave.bs.carousel", function (t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (n._addTouchEventListeners = function () {
            var e = this;
            if (this._touchSupported) {
              var n = function (t) {
                  e._pointerEvent &&
                  g[t.originalEvent.pointerType.toUpperCase()]
                    ? (e.touchStartX = t.originalEvent.clientX)
                    : e._pointerEvent ||
                      (e.touchStartX = t.originalEvent.touches[0].clientX);
                },
                i = function (t) {
                  e._pointerEvent &&
                    g[t.originalEvent.pointerType.toUpperCase()] &&
                    (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause &&
                      (e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval)));
                };
              t(this._element.querySelectorAll(".carousel-item img")).on(
                "dragstart.bs.carousel",
                function (e) {
                  return e.preventDefault();
                }
              ),
                this._pointerEvent
                  ? (t(this._element).on(
                      "pointerdown.bs.carousel",
                      function (e) {
                        return n(e);
                      }
                    ),
                    t(this._element).on("pointerup.bs.carousel", function (e) {
                      return i(e);
                    }),
                    this._element.classList.add("pointer-event"))
                  : (t(this._element).on(
                      "touchstart.bs.carousel",
                      function (e) {
                        return n(e);
                      }
                    ),
                    t(this._element).on("touchmove.bs.carousel", function (t) {
                      return (function (t) {
                        e.touchDeltaX =
                          t.originalEvent.touches &&
                          t.originalEvent.touches.length > 1
                            ? 0
                            : t.originalEvent.touches[0].clientX -
                              e.touchStartX;
                      })(t);
                    }),
                    t(this._element).on("touchend.bs.carousel", function (e) {
                      return i(e);
                    }));
            }
          }),
          (n._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (n._getItemIndex = function (e) {
            return (
              (this._items =
                e && e.parentNode
                  ? [].slice.call(
                      e.parentNode.querySelectorAll(".carousel-item")
                    )
                  : []),
              this._items.indexOf(e)
            );
          }),
          (n._getItemByDirection = function (e, t) {
            var n = "next" === e,
              i = "prev" === e,
              r = this._getItemIndex(t);
            if (
              ((i && 0 === r) || (n && r === this._items.length - 1)) &&
              !this._config.wrap
            )
              return t;
            var o = (r + ("prev" === e ? -1 : 1)) % this._items.length;
            return -1 === o
              ? this._items[this._items.length - 1]
              : this._items[o];
          }),
          (n._triggerSlideEvent = function (e, n) {
            var i = this._getItemIndex(e),
              r = this._getItemIndex(
                this._element.querySelector(".active.carousel-item")
              ),
              o = t.Event("slide.bs.carousel", {
                relatedTarget: e,
                direction: n,
                from: r,
                to: i,
              });
            return t(this._element).trigger(o), o;
          }),
          (n._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              var n = [].slice.call(
                this._indicatorsElement.querySelectorAll(".active")
              );
              t(n).removeClass("active");
              var i = this._indicatorsElement.children[this._getItemIndex(e)];
              i && t(i).addClass("active");
            }
          }),
          (n._slide = function (e, n) {
            var i,
              r,
              o,
              a = this,
              l = this._element.querySelector(".active.carousel-item"),
              c = this._getItemIndex(l),
              u = n || (l && this._getItemByDirection(e, l)),
              f = this._getItemIndex(u),
              d = Boolean(this._interval);
            if (
              ("next" === e
                ? ((i = "carousel-item-left"),
                  (r = "carousel-item-next"),
                  (o = "left"))
                : ((i = "carousel-item-right"),
                  (r = "carousel-item-prev"),
                  (o = "right")),
              u && t(u).hasClass("active"))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(u, o).isDefaultPrevented() &&
              l &&
              u
            ) {
              (this._isSliding = !0),
                d && this.pause(),
                this._setActiveIndicatorElement(u);
              var h = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: o,
                from: c,
                to: f,
              });
              if (t(this._element).hasClass("slide")) {
                t(u).addClass(r),
                  s.reflow(u),
                  t(l).addClass(i),
                  t(u).addClass(i);
                var p = parseInt(u.getAttribute("data-interval"), 10);
                p
                  ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                    (this._config.interval = p))
                  : (this._config.interval =
                      this._config.defaultInterval || this._config.interval);
                var g = s.getTransitionDurationFromElement(l);
                t(l)
                  .one(s.TRANSITION_END, function () {
                    t(u)
                      .removeClass(i + " " + r)
                      .addClass("active"),
                      t(l).removeClass("active " + r + " " + i),
                      (a._isSliding = !1),
                      setTimeout(function () {
                        return t(a._element).trigger(h);
                      }, 0);
                  })
                  .emulateTransitionEnd(g);
              } else
                t(l).removeClass("active"),
                  t(u).addClass("active"),
                  (this._isSliding = !1),
                  t(this._element).trigger(h);
              d && this.cycle();
            }
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data("bs.carousel"),
                r = o({}, h, t(this).data());
              "object" == typeof n && (r = o({}, r, n));
              var s = "string" == typeof n ? n : r.slide;
              if (
                (i || ((i = new e(this, r)), t(this).data("bs.carousel", i)),
                "number" == typeof n)
              )
                i.to(n);
              else if ("string" == typeof s) {
                if (void 0 === i[s])
                  throw new TypeError('No method named "' + s + '"');
                i[s]();
              } else r.interval && r.ride && (i.pause(), i.cycle());
            });
          }),
          (e._dataApiClickHandler = function (n) {
            var i = s.getSelectorFromElement(this);
            if (i) {
              var r = t(i)[0];
              if (r && t(r).hasClass("carousel")) {
                var a = o({}, t(r).data(), t(this).data()),
                  l = this.getAttribute("data-slide-to");
                l && (a.interval = !1),
                  e._jQueryInterface.call(t(r), a),
                  l && t(r).data("bs.carousel").to(l),
                  n.preventDefault();
              }
            }
          }),
          r(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return h;
              },
            },
          ]),
          e
        );
      })();
    t(document).on(
      "click.bs.carousel.data-api",
      "[data-slide], [data-slide-to]",
      m._dataApiClickHandler
    ),
      t(window).on("load.bs.carousel.data-api", function () {
        for (
          var e = [].slice.call(
              document.querySelectorAll('[data-ride="carousel"]')
            ),
            n = 0,
            i = e.length;
          n < i;
          n++
        ) {
          var r = t(e[n]);
          m._jQueryInterface.call(r, r.data());
        }
      }),
      (t.fn[f] = m._jQueryInterface),
      (t.fn[f].Constructor = m),
      (t.fn[f].noConflict = function () {
        return (t.fn[f] = d), m._jQueryInterface;
      });
    var v = "collapse",
      y = t.fn[v],
      _ = { toggle: !0, parent: "" },
      b = { toggle: "boolean", parent: "(string|element)" },
      w = (function () {
        function e(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  e.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  e.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(
                document.querySelectorAll('[data-toggle="collapse"]')
              ),
              i = 0,
              r = n.length;
            i < r;
            i++
          ) {
            var o = n[i],
              a = s.getSelectorFromElement(o),
              l = [].slice
                .call(document.querySelectorAll(a))
                .filter(function (t) {
                  return t === e;
                });
            null !== a &&
              l.length > 0 &&
              ((this._selector = a), this._triggerArray.push(o));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var n = e.prototype;
        return (
          (n.toggle = function () {
            t(this._element).hasClass("show") ? this.hide() : this.show();
          }),
          (n.show = function () {
            var n,
              i,
              r = this;
            if (
              !(
                this._isTransitioning ||
                t(this._element).hasClass("show") ||
                (this._parent &&
                  0 ===
                    (n = [].slice
                      .call(this._parent.querySelectorAll(".show, .collapsing"))
                      .filter(function (e) {
                        return "string" == typeof r._config.parent
                          ? e.getAttribute("data-parent") === r._config.parent
                          : e.classList.contains("collapse");
                      })).length &&
                  (n = null),
                n &&
                  (i = t(n).not(this._selector).data("bs.collapse")) &&
                  i._isTransitioning)
              )
            ) {
              var o = t.Event("show.bs.collapse");
              if ((t(this._element).trigger(o), !o.isDefaultPrevented())) {
                n &&
                  (e._jQueryInterface.call(t(n).not(this._selector), "hide"),
                  i || t(n).data("bs.collapse", null));
                var a = this._getDimension();
                t(this._element).removeClass("collapse").addClass("collapsing"),
                  (this._element.style[a] = 0),
                  this._triggerArray.length &&
                    t(this._triggerArray)
                      .removeClass("collapsed")
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                  c = s.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(s.TRANSITION_END, function () {
                    t(r._element)
                      .removeClass("collapsing")
                      .addClass("collapse show"),
                      (r._element.style[a] = ""),
                      r.setTransitioning(!1),
                      t(r._element).trigger("shown.bs.collapse");
                  })
                  .emulateTransitionEnd(c),
                  (this._element.style[a] = this._element[l] + "px");
              }
            }
          }),
          (n.hide = function () {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass("show")) {
              var n = t.Event("hide.bs.collapse");
              if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                var i = this._getDimension();
                (this._element.style[i] =
                  this._element.getBoundingClientRect()[i] + "px"),
                  s.reflow(this._element),
                  t(this._element)
                    .addClass("collapsing")
                    .removeClass("collapse show");
                var r = this._triggerArray.length;
                if (r > 0)
                  for (var o = 0; o < r; o++) {
                    var a = this._triggerArray[o],
                      l = s.getSelectorFromElement(a);
                    null !== l &&
                      (t([].slice.call(document.querySelectorAll(l))).hasClass(
                        "show"
                      ) ||
                        t(a).addClass("collapsed").attr("aria-expanded", !1));
                  }
                this.setTransitioning(!0), (this._element.style[i] = "");
                var c = s.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(s.TRANSITION_END, function () {
                    e.setTransitioning(!1),
                      t(e._element)
                        .removeClass("collapsing")
                        .addClass("collapse")
                        .trigger("hidden.bs.collapse");
                  })
                  .emulateTransitionEnd(c);
              }
            }
          }),
          (n.setTransitioning = function (e) {
            this._isTransitioning = e;
          }),
          (n.dispose = function () {
            t.removeData(this._element, "bs.collapse"),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (n._getConfig = function (e) {
            return (
              ((e = o({}, _, e)).toggle = Boolean(e.toggle)),
              s.typeCheckConfig(v, e, b),
              e
            );
          }),
          (n._getDimension = function () {
            return t(this._element).hasClass("width") ? "width" : "height";
          }),
          (n._getParent = function () {
            var n,
              i = this;
            s.isElement(this._config.parent)
              ? ((n = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (n = this._config.parent[0]))
              : (n = document.querySelector(this._config.parent));
            var r = [].slice.call(
              n.querySelectorAll(
                '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]'
              )
            );
            return (
              t(r).each(function (t, n) {
                i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
              }),
              n
            );
          }),
          (n._addAriaAndCollapsedClass = function (e, n) {
            var i = t(e).hasClass("show");
            n.length &&
              t(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
          }),
          (e._getTargetFromElement = function (e) {
            var t = s.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null;
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                r = i.data("bs.collapse"),
                s = o({}, _, i.data(), "object" == typeof n && n ? n : {});
              if (
                (!r &&
                  s.toggle &&
                  "string" == typeof n &&
                  /show|hide/.test(n) &&
                  (s.toggle = !1),
                r || ((r = new e(this, s)), i.data("bs.collapse", r)),
                "string" == typeof n)
              ) {
                if (void 0 === r[n])
                  throw new TypeError('No method named "' + n + '"');
                r[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return _;
              },
            },
          ]),
          e
        );
      })();
    t(document).on(
      "click.bs.collapse.data-api",
      '[data-toggle="collapse"]',
      function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
          i = s.getSelectorFromElement(this),
          r = [].slice.call(document.querySelectorAll(i));
        t(r).each(function () {
          var e = t(this),
            i = e.data("bs.collapse") ? "toggle" : n.data();
          w._jQueryInterface.call(e, i);
        });
      }
    ),
      (t.fn[v] = w._jQueryInterface),
      (t.fn[v].Constructor = w),
      (t.fn[v].noConflict = function () {
        return (t.fn[v] = y), w._jQueryInterface;
      });
    var T = "dropdown",
      E = t.fn[T],
      x = new RegExp("38|40|27"),
      C = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      S = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)",
      },
      k = (function () {
        function e(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var i = e.prototype;
        return (
          (i.toggle = function () {
            if (
              !this._element.disabled &&
              !t(this._element).hasClass("disabled")
            ) {
              var n = t(this._menu).hasClass("show");
              e._clearMenus(), n || this.show(!0);
            }
          }),
          (i.show = function (i) {
            if (
              (void 0 === i && (i = !1),
              !(
                this._element.disabled ||
                t(this._element).hasClass("disabled") ||
                t(this._menu).hasClass("show")
              ))
            ) {
              var r = { relatedTarget: this._element },
                o = t.Event("show.bs.dropdown", r),
                a = e._getParentFromElement(this._element);
              if ((t(a).trigger(o), !o.isDefaultPrevented())) {
                if (!this._inNavbar && i) {
                  if (void 0 === n)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  var l = this._element;
                  "parent" === this._config.reference
                    ? (l = a)
                    : s.isElement(this._config.reference) &&
                      ((l = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (l = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary &&
                      t(a).addClass("position-static"),
                    (this._popper = new n(
                      l,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === t(a).closest(".navbar-nav").length &&
                  t(document.body).children().on("mouseover", null, t.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  t(this._menu).toggleClass("show"),
                  t(a)
                    .toggleClass("show")
                    .trigger(t.Event("shown.bs.dropdown", r));
              }
            }
          }),
          (i.hide = function () {
            if (
              !this._element.disabled &&
              !t(this._element).hasClass("disabled") &&
              t(this._menu).hasClass("show")
            ) {
              var n = { relatedTarget: this._element },
                i = t.Event("hide.bs.dropdown", n),
                r = e._getParentFromElement(this._element);
              t(r).trigger(i),
                i.isDefaultPrevented() ||
                  (this._popper && this._popper.destroy(),
                  t(this._menu).toggleClass("show"),
                  t(r)
                    .toggleClass("show")
                    .trigger(t.Event("hidden.bs.dropdown", n)));
            }
          }),
          (i.dispose = function () {
            t.removeData(this._element, "bs.dropdown"),
              t(this._element).off(".bs.dropdown"),
              (this._element = null),
              (this._menu = null),
              null !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (i.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (i._addEventListeners = function () {
            var e = this;
            t(this._element).on("click.bs.dropdown", function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (i._getConfig = function (e) {
            return (
              (e = o({}, this.constructor.Default, t(this._element).data(), e)),
              s.typeCheckConfig(T, e, this.constructor.DefaultType),
              e
            );
          }),
          (i._getMenuElement = function () {
            if (!this._menu) {
              var t = e._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(".dropdown-menu"));
            }
            return this._menu;
          }),
          (i._getPlacement = function () {
            var e = t(this._element.parentNode),
              n = "bottom-start";
            return (
              e.hasClass("dropup")
                ? (n = t(this._menu).hasClass("dropdown-menu-right")
                    ? "top-end"
                    : "top-start")
                : e.hasClass("dropright")
                ? (n = "right-start")
                : e.hasClass("dropleft")
                ? (n = "left-start")
                : t(this._menu).hasClass("dropdown-menu-right") &&
                  (n = "bottom-end"),
              n
            );
          }),
          (i._detectNavbar = function () {
            return t(this._element).closest(".navbar").length > 0;
          }),
          (i._getOffset = function () {
            var e = this,
              t = {};
            return (
              "function" == typeof this._config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = o(
                        {},
                        t.offsets,
                        e._config.offset(t.offsets, e._element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this._config.offset),
              t
            );
          }),
          (i._getPopperConfig = function () {
            var e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (e.modifiers.applyStyle = { enabled: !1 }),
              o({}, e, this._config.popperConfig)
            );
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data("bs.dropdown");
              if (
                (i ||
                  ((i = new e(this, "object" == typeof n ? n : null)),
                  t(this).data("bs.dropdown", i)),
                "string" == typeof n)
              ) {
                if (void 0 === i[n])
                  throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          (e._clearMenus = function (n) {
            if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
              for (
                var i = [].slice.call(
                    document.querySelectorAll('[data-toggle="dropdown"]')
                  ),
                  r = 0,
                  o = i.length;
                r < o;
                r++
              ) {
                var s = e._getParentFromElement(i[r]),
                  a = t(i[r]).data("bs.dropdown"),
                  l = { relatedTarget: i[r] };
                if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                  var c = a._menu;
                  if (
                    t(s).hasClass("show") &&
                    !(
                      n &&
                      (("click" === n.type &&
                        /input|textarea/i.test(n.target.tagName)) ||
                        ("keyup" === n.type && 9 === n.which)) &&
                      t.contains(s, n.target)
                    )
                  ) {
                    var u = t.Event("hide.bs.dropdown", l);
                    t(s).trigger(u),
                      u.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          t(document.body)
                            .children()
                            .off("mouseover", null, t.noop),
                        i[r].setAttribute("aria-expanded", "false"),
                        a._popper && a._popper.destroy(),
                        t(c).removeClass("show"),
                        t(s)
                          .removeClass("show")
                          .trigger(t.Event("hidden.bs.dropdown", l)));
                  }
                }
              }
          }),
          (e._getParentFromElement = function (e) {
            var t,
              n = s.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
          }),
          (e._dataApiKeydownHandler = function (n) {
            if (
              (/input|textarea/i.test(n.target.tagName)
                ? !(
                    32 === n.which ||
                    (27 !== n.which &&
                      ((40 !== n.which && 38 !== n.which) ||
                        t(n.target).closest(".dropdown-menu").length))
                  )
                : x.test(n.which)) &&
              !this.disabled &&
              !t(this).hasClass("disabled")
            ) {
              var i = e._getParentFromElement(this),
                r = t(i).hasClass("show");
              if (r || 27 !== n.which) {
                if (
                  (n.preventDefault(),
                  n.stopPropagation(),
                  !r || (r && (27 === n.which || 32 === n.which)))
                )
                  return (
                    27 === n.which &&
                      t(i.querySelector('[data-toggle="dropdown"]')).trigger(
                        "focus"
                      ),
                    void t(this).trigger("click")
                  );
                var o = [].slice
                  .call(
                    i.querySelectorAll(
                      ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                    )
                  )
                  .filter(function (e) {
                    return t(e).is(":visible");
                  });
                if (0 !== o.length) {
                  var s = o.indexOf(n.target);
                  38 === n.which && s > 0 && s--,
                    40 === n.which && s < o.length - 1 && s++,
                    s < 0 && (s = 0),
                    o[s].focus();
                }
              }
            }
          }),
          r(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return C;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return S;
              },
            },
          ]),
          e
        );
      })();
    t(document)
      .on(
        "keydown.bs.dropdown.data-api",
        '[data-toggle="dropdown"]',
        k._dataApiKeydownHandler
      )
      .on(
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        k._dataApiKeydownHandler
      )
      .on(
        "click.bs.dropdown.data-api keyup.bs.dropdown.data-api",
        k._clearMenus
      )
      .on(
        "click.bs.dropdown.data-api",
        '[data-toggle="dropdown"]',
        function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            k._jQueryInterface.call(t(this), "toggle");
        }
      )
      .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation();
      }),
      (t.fn[T] = k._jQueryInterface),
      (t.fn[T].Constructor = k),
      (t.fn[T].noConflict = function () {
        return (t.fn[T] = E), k._jQueryInterface;
      });
    var A = t.fn.modal,
      D = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      N = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      },
      j = (function () {
        function e(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(".modal-dialog")),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var n = e.prototype;
        return (
          (n.toggle = function (e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (n.show = function (e) {
            var n = this;
            if (!this._isShown && !this._isTransitioning) {
              t(this._element).hasClass("fade") && (this._isTransitioning = !0);
              var i = t.Event("show.bs.modal", { relatedTarget: e });
              t(this._element).trigger(i),
                this._isShown ||
                  i.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(this._element).on(
                    "click.dismiss.bs.modal",
                    '[data-dismiss="modal"]',
                    function (e) {
                      return n.hide(e);
                    }
                  ),
                  t(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                    t(n._element).one("mouseup.dismiss.bs.modal", function (e) {
                      t(e.target).is(n._element) &&
                        (n._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return n._showElement(e);
                  }));
            }
          }),
          (n.hide = function (e) {
            var n = this;
            if (
              (e && e.preventDefault(), this._isShown && !this._isTransitioning)
            ) {
              var i = t.Event("hide.bs.modal");
              if (
                (t(this._element).trigger(i),
                this._isShown && !i.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var r = t(this._element).hasClass("fade");
                if (
                  (r && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(document).off("focusin.bs.modal"),
                  t(this._element).removeClass("show"),
                  t(this._element).off("click.dismiss.bs.modal"),
                  t(this._dialog).off("mousedown.dismiss.bs.modal"),
                  r)
                ) {
                  var o = s.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(s.TRANSITION_END, function (e) {
                      return n._hideModal(e);
                    })
                    .emulateTransitionEnd(o);
                } else this._hideModal();
              }
            }
          }),
          (n.dispose = function () {
            [window, this._element, this._dialog].forEach(function (e) {
              return t(e).off(".bs.modal");
            }),
              t(document).off("focusin.bs.modal"),
              t.removeData(this._element, "bs.modal"),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (n.handleUpdate = function () {
            this._adjustDialog();
          }),
          (n._getConfig = function (e) {
            return (e = o({}, D, e)), s.typeCheckConfig("modal", e, N), e;
          }),
          (n._triggerBackdropTransition = function () {
            var e = this;
            if ("static" === this._config.backdrop) {
              var n = t.Event("hidePrevented.bs.modal");
              if ((t(this._element).trigger(n), n.defaultPrevented)) return;
              var i =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              i || (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static");
              var r = s.getTransitionDurationFromElement(this._dialog);
              t(this._element).off(s.TRANSITION_END),
                t(this._element)
                  .one(s.TRANSITION_END, function () {
                    e._element.classList.remove("modal-static"),
                      i ||
                        t(e._element)
                          .one(s.TRANSITION_END, function () {
                            e._element.style.overflowY = "";
                          })
                          .emulateTransitionEnd(e._element, r);
                  })
                  .emulateTransitionEnd(r),
                this._element.focus();
            } else this.hide();
          }),
          (n._showElement = function (e) {
            var n = this,
              i = t(this._element).hasClass("fade"),
              r = this._dialog
                ? this._dialog.querySelector(".modal-body")
                : null;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              t(this._dialog).hasClass("modal-dialog-scrollable") && r
                ? (r.scrollTop = 0)
                : (this._element.scrollTop = 0),
              i && s.reflow(this._element),
              t(this._element).addClass("show"),
              this._config.focus && this._enforceFocus();
            var o = t.Event("shown.bs.modal", { relatedTarget: e }),
              a = function () {
                n._config.focus && n._element.focus(),
                  (n._isTransitioning = !1),
                  t(n._element).trigger(o);
              };
            if (i) {
              var l = s.getTransitionDurationFromElement(this._dialog);
              t(this._dialog).one(s.TRANSITION_END, a).emulateTransitionEnd(l);
            } else a();
          }),
          (n._enforceFocus = function () {
            var e = this;
            t(document)
              .off("focusin.bs.modal")
              .on("focusin.bs.modal", function (n) {
                document !== n.target &&
                  e._element !== n.target &&
                  0 === t(e._element).has(n.target).length &&
                  e._element.focus();
              });
          }),
          (n._setEscapeEvent = function () {
            var e = this;
            this._isShown
              ? t(this._element).on("keydown.dismiss.bs.modal", function (t) {
                  e._config.keyboard && 27 === t.which
                    ? (t.preventDefault(), e.hide())
                    : e._config.keyboard ||
                      27 !== t.which ||
                      e._triggerBackdropTransition();
                })
              : this._isShown ||
                t(this._element).off("keydown.dismiss.bs.modal");
          }),
          (n._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? t(window).on("resize.bs.modal", function (t) {
                  return e.handleUpdate(t);
                })
              : t(window).off("resize.bs.modal");
          }),
          (n._hideModal = function () {
            var e = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                t(document.body).removeClass("modal-open"),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  t(e._element).trigger("hidden.bs.modal");
              });
          }),
          (n._removeBackdrop = function () {
            this._backdrop &&
              (t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (n._showBackdrop = function (e) {
            var n = this,
              i = t(this._element).hasClass("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                i && this._backdrop.classList.add(i),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on("click.dismiss.bs.modal", function (e) {
                  n._ignoreBackdropClick
                    ? (n._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget &&
                      n._triggerBackdropTransition();
                }),
                i && s.reflow(this._backdrop),
                t(this._backdrop).addClass("show"),
                !e)
              )
                return;
              if (!i) return void e();
              var r = s.getTransitionDurationFromElement(this._backdrop);
              t(this._backdrop)
                .one(s.TRANSITION_END, e)
                .emulateTransitionEnd(r);
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass("show");
              var o = function () {
                n._removeBackdrop(), e && e();
              };
              if (t(this._element).hasClass("fade")) {
                var a = s.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop)
                  .one(s.TRANSITION_END, o)
                  .emulateTransitionEnd(a);
              } else o();
            } else e && e();
          }),
          (n._adjustDialog = function () {
            var e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              e &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !e &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (n._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (n._checkScrollbar = function () {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing =
              Math.round(e.left + e.right) < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (n._setScrollbar = function () {
            var e = this;
            if (this._isBodyOverflowing) {
              var n = [].slice.call(
                  document.querySelectorAll(
                    ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                  )
                ),
                i = [].slice.call(document.querySelectorAll(".sticky-top"));
              t(n).each(function (n, i) {
                var r = i.style.paddingRight,
                  o = t(i).css("padding-right");
                t(i)
                  .data("padding-right", r)
                  .css(
                    "padding-right",
                    parseFloat(o) + e._scrollbarWidth + "px"
                  );
              }),
                t(i).each(function (n, i) {
                  var r = i.style.marginRight,
                    o = t(i).css("margin-right");
                  t(i)
                    .data("margin-right", r)
                    .css(
                      "margin-right",
                      parseFloat(o) - e._scrollbarWidth + "px"
                    );
                });
              var r = document.body.style.paddingRight,
                o = t(document.body).css("padding-right");
              t(document.body)
                .data("padding-right", r)
                .css(
                  "padding-right",
                  parseFloat(o) + this._scrollbarWidth + "px"
                );
            }
            t(document.body).addClass("modal-open");
          }),
          (n._resetScrollbar = function () {
            var e = [].slice.call(
              document.querySelectorAll(
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
              )
            );
            t(e).each(function (e, n) {
              var i = t(n).data("padding-right");
              t(n).removeData("padding-right"),
                (n.style.paddingRight = i || "");
            });
            var n = [].slice.call(document.querySelectorAll(".sticky-top"));
            t(n).each(function (e, n) {
              var i = t(n).data("margin-right");
              void 0 !== i &&
                t(n).css("margin-right", i).removeData("margin-right");
            });
            var i = t(document.body).data("padding-right");
            t(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = i || "");
          }),
          (n._getScrollbarWidth = function () {
            var e = document.createElement("div");
            (e.className = "modal-scrollbar-measure"),
              document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
          }),
          (e._jQueryInterface = function (n, i) {
            return this.each(function () {
              var r = t(this).data("bs.modal"),
                s = o(
                  {},
                  D,
                  t(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (r || ((r = new e(this, s)), t(this).data("bs.modal", r)),
                "string" == typeof n)
              ) {
                if (void 0 === r[n])
                  throw new TypeError('No method named "' + n + '"');
                r[n](i);
              } else s.show && r.show(i);
            });
          }),
          r(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return D;
              },
            },
          ]),
          e
        );
      })();
    t(document).on(
      "click.bs.modal.data-api",
      '[data-toggle="modal"]',
      function (e) {
        var n,
          i = this,
          r = s.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var a = t(n).data("bs.modal")
          ? "toggle"
          : o({}, t(n).data(), t(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
        var l = t(n).one("show.bs.modal", function (e) {
          e.isDefaultPrevented() ||
            l.one("hidden.bs.modal", function () {
              t(i).is(":visible") && i.focus();
            });
        });
        j._jQueryInterface.call(t(n), a, this);
      }
    ),
      (t.fn.modal = j._jQueryInterface),
      (t.fn.modal.Constructor = j),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = A), j._jQueryInterface;
      });
    var I = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      O = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      L =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function q(e, t, n) {
      if (0 === e.length) return e;
      if (n && "function" == typeof n) return n(e);
      for (
        var i = new window.DOMParser().parseFromString(e, "text/html"),
          r = Object.keys(t),
          o = [].slice.call(i.body.querySelectorAll("*")),
          s = function (e, n) {
            var i = o[e],
              s = i.nodeName.toLowerCase();
            if (-1 === r.indexOf(i.nodeName.toLowerCase()))
              return i.parentNode.removeChild(i), "continue";
            var a = [].slice.call(i.attributes),
              l = [].concat(t["*"] || [], t[s] || []);
            a.forEach(function (e) {
              (function (e, t) {
                var n = e.nodeName.toLowerCase();
                if (-1 !== t.indexOf(n))
                  return (
                    -1 === I.indexOf(n) ||
                    Boolean(e.nodeValue.match(O) || e.nodeValue.match(L))
                  );
                for (
                  var i = t.filter(function (e) {
                      return e instanceof RegExp;
                    }),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                )
                  if (n.match(i[r])) return !0;
                return !1;
              })(e, l) || i.removeAttribute(e.nodeName);
            });
          },
          a = 0,
          l = o.length;
        a < l;
        a++
      )
        s(a);
      return i.body.innerHTML;
    }
    var P = t.fn.tooltip,
      R = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      H = ["sanitize", "whiteList", "sanitizeFn"],
      F = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)",
      },
      M = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      },
      B = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      W = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
      },
      Q = (function () {
        function e(e, t) {
          if (void 0 === n)
            throw new TypeError(
              "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var i = e.prototype;
        return (
          (i.enable = function () {
            this._isEnabled = !0;
          }),
          (i.disable = function () {
            this._isEnabled = !1;
          }),
          (i.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (i.toggle = function (e) {
            if (this._isEnabled)
              if (e) {
                var n = this.constructor.DATA_KEY,
                  i = t(e.currentTarget).data(n);
                i ||
                  ((i = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(n, i)),
                  (i._activeTrigger.click = !i._activeTrigger.click),
                  i._isWithActiveTrigger()
                    ? i._enter(null, i)
                    : i._leave(null, i);
              } else {
                if (t(this.getTipElement()).hasClass("show"))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (i.dispose = function () {
            clearTimeout(this._timeout),
              t.removeData(this.element, this.constructor.DATA_KEY),
              t(this.element).off(this.constructor.EVENT_KEY),
              t(this.element)
                .closest(".modal")
                .off("hide.bs.modal", this._hideModalHandler),
              this.tip && t(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (i.show = function () {
            var e = this;
            if ("none" === t(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var i = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              t(this.element).trigger(i);
              var r = s.findShadowRoot(this.element),
                o = t.contains(
                  null !== r ? r : this.element.ownerDocument.documentElement,
                  this.element
                );
              if (i.isDefaultPrevented() || !o) return;
              var a = this.getTipElement(),
                l = s.getUID(this.constructor.NAME);
              a.setAttribute("id", l),
                this.element.setAttribute("aria-describedby", l),
                this.setContent(),
                this.config.animation && t(a).addClass("fade");
              var c =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, a, this.element)
                    : this.config.placement,
                u = this._getAttachment(c);
              this.addAttachmentClass(u);
              var f = this._getContainer();
              t(a).data(this.constructor.DATA_KEY, this),
                t.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || t(a).appendTo(f),
                t(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new n(
                  this.element,
                  a,
                  this._getPopperConfig(u)
                )),
                t(a).addClass("show"),
                "ontouchstart" in document.documentElement &&
                  t(document.body).children().on("mouseover", null, t.noop);
              var d = function () {
                e.config.animation && e._fixTransition();
                var n = e._hoverState;
                (e._hoverState = null),
                  t(e.element).trigger(e.constructor.Event.SHOWN),
                  "out" === n && e._leave(null, e);
              };
              if (t(this.tip).hasClass("fade")) {
                var h = s.getTransitionDurationFromElement(this.tip);
                t(this.tip).one(s.TRANSITION_END, d).emulateTransitionEnd(h);
              } else d();
            }
          }),
          (i.hide = function (e) {
            var n = this,
              i = this.getTipElement(),
              r = t.Event(this.constructor.Event.HIDE),
              o = function () {
                "show" !== n._hoverState &&
                  i.parentNode &&
                  i.parentNode.removeChild(i),
                  n._cleanTipClass(),
                  n.element.removeAttribute("aria-describedby"),
                  t(n.element).trigger(n.constructor.Event.HIDDEN),
                  null !== n._popper && n._popper.destroy(),
                  e && e();
              };
            if ((t(this.element).trigger(r), !r.isDefaultPrevented())) {
              if (
                (t(i).removeClass("show"),
                "ontouchstart" in document.documentElement &&
                  t(document.body).children().off("mouseover", null, t.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1),
                t(this.tip).hasClass("fade"))
              ) {
                var a = s.getTransitionDurationFromElement(i);
                t(i).one(s.TRANSITION_END, o).emulateTransitionEnd(a);
              } else o();
              this._hoverState = "";
            }
          }),
          (i.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (i.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (i.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass("bs-tooltip-" + e);
          }),
          (i.getTipElement = function () {
            return (
              (this.tip = this.tip || t(this.config.template)[0]), this.tip
            );
          }),
          (i.setContent = function () {
            var e = this.getTipElement();
            this.setElementContent(
              t(e.querySelectorAll(".tooltip-inner")),
              this.getTitle()
            ),
              t(e).removeClass("fade show");
          }),
          (i.setElementContent = function (e, n) {
            "object" != typeof n || (!n.nodeType && !n.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (n = q(n, this.config.whiteList, this.config.sanitizeFn)),
                  e.html(n))
                : e.text(n)
              : this.config.html
              ? t(n).parent().is(e) || e.empty().append(n)
              : e.text(t(n).text());
          }),
          (i.getTitle = function () {
            var e = this.element.getAttribute("data-original-title");
            return (
              e ||
                (e =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              e
            );
          }),
          (i._getPopperConfig = function (e) {
            var t = this;
            return o(
              {},
              {
                placement: e,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: ".arrow" },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (e) {
                  e.originalPlacement !== e.placement &&
                    t._handlePopperPlacementChange(e);
                },
                onUpdate: function (e) {
                  return t._handlePopperPlacementChange(e);
                },
              },
              this.config.popperConfig
            );
          }),
          (i._getOffset = function () {
            var e = this,
              t = {};
            return (
              "function" == typeof this.config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = o(
                        {},
                        t.offsets,
                        e.config.offset(t.offsets, e.element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this.config.offset),
              t
            );
          }),
          (i._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : s.isElement(this.config.container)
              ? t(this.config.container)
              : t(document).find(this.config.container);
          }),
          (i._getAttachment = function (e) {
            return M[e.toUpperCase()];
          }),
          (i._setListeners = function () {
            var e = this;
            this.config.trigger.split(" ").forEach(function (n) {
              if ("click" === n)
                t(e.element).on(
                  e.constructor.Event.CLICK,
                  e.config.selector,
                  function (t) {
                    return e.toggle(t);
                  }
                );
              else if ("manual" !== n) {
                var i =
                    "hover" === n
                      ? e.constructor.Event.MOUSEENTER
                      : e.constructor.Event.FOCUSIN,
                  r =
                    "hover" === n
                      ? e.constructor.Event.MOUSELEAVE
                      : e.constructor.Event.FOCUSOUT;
                t(e.element)
                  .on(i, e.config.selector, function (t) {
                    return e._enter(t);
                  })
                  .on(r, e.config.selector, function (t) {
                    return e._leave(t);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                e.element && e.hide();
              }),
              t(this.element)
                .closest(".modal")
                .on("hide.bs.modal", this._hideModalHandler),
              this.config.selector
                ? (this.config = o({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (i._fixTitle = function () {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) &&
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (i._enter = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) ||
              ((n = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              t(e.currentTarget).data(i, n)),
              e &&
                (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] =
                  !0),
              t(n.getTipElement()).hasClass("show") || "show" === n._hoverState
                ? (n._hoverState = "show")
                : (clearTimeout(n._timeout),
                  (n._hoverState = "show"),
                  n.config.delay && n.config.delay.show
                    ? (n._timeout = setTimeout(function () {
                        "show" === n._hoverState && n.show();
                      }, n.config.delay.show))
                    : n.show());
          }),
          (i._leave = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) ||
              ((n = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              t(e.currentTarget).data(i, n)),
              e &&
                (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] =
                  !1),
              n._isWithActiveTrigger() ||
                (clearTimeout(n._timeout),
                (n._hoverState = "out"),
                n.config.delay && n.config.delay.hide
                  ? (n._timeout = setTimeout(function () {
                      "out" === n._hoverState && n.hide();
                    }, n.config.delay.hide))
                  : n.hide());
          }),
          (i._isWithActiveTrigger = function () {
            for (var e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (i._getConfig = function (e) {
            var n = t(this.element).data();
            return (
              Object.keys(n).forEach(function (e) {
                -1 !== H.indexOf(e) && delete n[e];
              }),
              "number" ==
                typeof (e = o(
                  {},
                  this.constructor.Default,
                  n,
                  "object" == typeof e && e ? e : {}
                )).delay && (e.delay = { show: e.delay, hide: e.delay }),
              "number" == typeof e.title && (e.title = e.title.toString()),
              "number" == typeof e.content &&
                (e.content = e.content.toString()),
              s.typeCheckConfig("tooltip", e, this.constructor.DefaultType),
              e.sanitize &&
                (e.template = q(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (i._getDelegateConfig = function () {
            var e = {};
            if (this.config)
              for (var t in this.config)
                this.constructor.Default[t] !== this.config[t] &&
                  (e[t] = this.config[t]);
            return e;
          }),
          (i._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match(R);
            null !== n && n.length && e.removeClass(n.join(""));
          }),
          (i._handlePopperPlacementChange = function (e) {
            (this.tip = e.instance.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (i._fixTransition = function () {
            var e = this.getTipElement(),
              n = this.config.animation;
            null === e.getAttribute("x-placement") &&
              (t(e).removeClass("fade"),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = n));
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data("bs.tooltip"),
                r = "object" == typeof n && n;
              if (
                (i || !/dispose|hide/.test(n)) &&
                (i || ((i = new e(this, r)), t(this).data("bs.tooltip", i)),
                "string" == typeof n)
              ) {
                if (void 0 === i[n])
                  throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return B;
              },
            },
            {
              key: "NAME",
              get: function () {
                return "tooltip";
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.tooltip";
              },
            },
            {
              key: "Event",
              get: function () {
                return W;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.tooltip";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return F;
              },
            },
          ]),
          e
        );
      })();
    (t.fn.tooltip = Q._jQueryInterface),
      (t.fn.tooltip.Constructor = Q),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = P), Q._jQueryInterface;
      });
    var U = t.fn.popover,
      $ = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      z = o({}, Q.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      X = o({}, Q.DefaultType, { content: "(string|element|function)" }),
      V = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
      },
      Y = (function (e) {
        var n, i;
        function o() {
          return e.apply(this, arguments) || this;
        }
        (i = e),
          ((n = o).prototype = Object.create(i.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = i);
        var s = o.prototype;
        return (
          (s.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (s.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass("bs-popover-" + e);
          }),
          (s.getTipElement = function () {
            return (
              (this.tip = this.tip || t(this.config.template)[0]), this.tip
            );
          }),
          (s.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(".popover-header"), this.getTitle());
            var n = this._getContent();
            "function" == typeof n && (n = n.call(this.element)),
              this.setElementContent(e.find(".popover-body"), n),
              e.removeClass("fade show");
          }),
          (s._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (s._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match($);
            null !== n && n.length > 0 && e.removeClass(n.join(""));
          }),
          (o._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data("bs.popover"),
                i = "object" == typeof e ? e : null;
              if (
                (n || !/dispose|hide/.test(e)) &&
                (n || ((n = new o(this, i)), t(this).data("bs.popover", n)),
                "string" == typeof e)
              ) {
                if (void 0 === n[e])
                  throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          r(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return z;
              },
            },
            {
              key: "NAME",
              get: function () {
                return "popover";
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.popover";
              },
            },
            {
              key: "Event",
              get: function () {
                return V;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.popover";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return X;
              },
            },
          ]),
          o
        );
      })(Q);
    (t.fn.popover = Y._jQueryInterface),
      (t.fn.popover.Constructor = Y),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = U), Y._jQueryInterface;
      });
    var K = "scrollspy",
      G = t.fn[K],
      J = { offset: 10, method: "auto", target: "" },
      Z = { offset: "number", method: "string", target: "(string|element)" },
      ee = (function () {
        function e(e, n) {
          var i = this;
          (this._element = e),
            (this._scrollElement = "BODY" === e.tagName ? window : e),
            (this._config = this._getConfig(n)),
            (this._selector =
              this._config.target +
              " .nav-link," +
              this._config.target +
              " .list-group-item," +
              this._config.target +
              " .dropdown-item"),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            t(this._scrollElement).on("scroll.bs.scrollspy", function (e) {
              return i._process(e);
            }),
            this.refresh(),
            this._process();
        }
        var n = e.prototype;
        return (
          (n.refresh = function () {
            var e = this,
              n =
                "auto" === this._config.method
                  ? this._scrollElement === this._scrollElement.window
                    ? "offset"
                    : "position"
                  : this._config.method,
              i = "position" === n ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (e) {
                  var r,
                    o = s.getSelectorFromElement(e);
                  if ((o && (r = document.querySelector(o)), r)) {
                    var a = r.getBoundingClientRect();
                    if (a.width || a.height) return [t(r)[n]().top + i, o];
                  }
                  return null;
                })
                .filter(function (e) {
                  return e;
                })
                .sort(function (e, t) {
                  return e[0] - t[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (n.dispose = function () {
            t.removeData(this._element, "bs.scrollspy"),
              t(this._scrollElement).off(".bs.scrollspy"),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (n._getConfig = function (e) {
            if (
              "string" !=
                typeof (e = o({}, J, "object" == typeof e && e ? e : {}))
                  .target &&
              s.isElement(e.target)
            ) {
              var n = t(e.target).attr("id");
              n || ((n = s.getUID(K)), t(e.target).attr("id", n)),
                (e.target = "#" + n);
            }
            return s.typeCheckConfig(K, e, Z), e;
          }),
          (n._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (n._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (n._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (n._process = function () {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                e < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; )
                this._activeTarget !== this._targets[r] &&
                  e >= this._offsets[r] &&
                  (void 0 === this._offsets[r + 1] ||
                    e < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
            }
          }),
          (n._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var n = this._selector.split(",").map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              }),
              i = t([].slice.call(document.querySelectorAll(n.join(","))));
            i.hasClass("dropdown-item")
              ? (i
                  .closest(".dropdown")
                  .find(".dropdown-toggle")
                  .addClass("active"),
                i.addClass("active"))
              : (i.addClass("active"),
                i
                  .parents(".nav, .list-group")
                  .prev(".nav-link, .list-group-item")
                  .addClass("active"),
                i
                  .parents(".nav, .list-group")
                  .prev(".nav-item")
                  .children(".nav-link")
                  .addClass("active")),
              t(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: e,
              });
          }),
          (n._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (e) {
                return e.classList.contains("active");
              })
              .forEach(function (e) {
                return e.classList.remove("active");
              });
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data("bs.scrollspy");
              if (
                (i ||
                  ((i = new e(this, "object" == typeof n && n)),
                  t(this).data("bs.scrollspy", i)),
                "string" == typeof n)
              ) {
                if (void 0 === i[n])
                  throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return J;
              },
            },
          ]),
          e
        );
      })();
    t(window).on("load.bs.scrollspy.data-api", function () {
      for (
        var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
          n = e.length;
        n--;

      ) {
        var i = t(e[n]);
        ee._jQueryInterface.call(i, i.data());
      }
    }),
      (t.fn[K] = ee._jQueryInterface),
      (t.fn[K].Constructor = ee),
      (t.fn[K].noConflict = function () {
        return (t.fn[K] = G), ee._jQueryInterface;
      });
    var te = t.fn.tab,
      ne = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.show = function () {
            var e = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  t(this._element).hasClass("active")) ||
                t(this._element).hasClass("disabled")
              )
            ) {
              var n,
                i,
                r = t(this._element).closest(".nav, .list-group")[0],
                o = s.getSelectorFromElement(this._element);
              if (r) {
                var a =
                  "UL" === r.nodeName || "OL" === r.nodeName
                    ? "> li > .active"
                    : ".active";
                i = (i = t.makeArray(t(r).find(a)))[i.length - 1];
              }
              var l = t.Event("hide.bs.tab", { relatedTarget: this._element }),
                c = t.Event("show.bs.tab", { relatedTarget: i });
              if (
                (i && t(i).trigger(l),
                t(this._element).trigger(c),
                !c.isDefaultPrevented() && !l.isDefaultPrevented())
              ) {
                o && (n = document.querySelector(o)),
                  this._activate(this._element, r);
                var u = function () {
                  var n = t.Event("hidden.bs.tab", {
                      relatedTarget: e._element,
                    }),
                    r = t.Event("shown.bs.tab", { relatedTarget: i });
                  t(i).trigger(n), t(e._element).trigger(r);
                };
                n ? this._activate(n, n.parentNode, u) : u();
              }
            }
          }),
          (n.dispose = function () {
            t.removeData(this._element, "bs.tab"), (this._element = null);
          }),
          (n._activate = function (e, n, i) {
            var r = this,
              o = (
                !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                  ? t(n).children(".active")
                  : t(n).find("> li > .active")
              )[0],
              a = i && o && t(o).hasClass("fade"),
              l = function () {
                return r._transitionComplete(e, o, i);
              };
            if (o && a) {
              var c = s.getTransitionDurationFromElement(o);
              t(o)
                .removeClass("show")
                .one(s.TRANSITION_END, l)
                .emulateTransitionEnd(c);
            } else l();
          }),
          (n._transitionComplete = function (e, n, i) {
            if (n) {
              t(n).removeClass("active");
              var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
              r && t(r).removeClass("active"),
                "tab" === n.getAttribute("role") &&
                  n.setAttribute("aria-selected", !1);
            }
            if (
              (t(e).addClass("active"),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !0),
              s.reflow(e),
              e.classList.contains("fade") && e.classList.add("show"),
              e.parentNode && t(e.parentNode).hasClass("dropdown-menu"))
            ) {
              var o = t(e).closest(".dropdown")[0];
              if (o) {
                var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                t(a).addClass("active");
              }
              e.setAttribute("aria-expanded", !0);
            }
            i && i();
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                r = i.data("bs.tab");
              if (
                (r || ((r = new e(this)), i.data("bs.tab", r)),
                "string" == typeof n)
              ) {
                if (void 0 === r[n])
                  throw new TypeError('No method named "' + n + '"');
                r[n]();
              }
            });
          }),
          r(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
          ]),
          e
        );
      })();
    t(document).on(
      "click.bs.tab.data-api",
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (e) {
        e.preventDefault(), ne._jQueryInterface.call(t(this), "show");
      }
    ),
      (t.fn.tab = ne._jQueryInterface),
      (t.fn.tab.Constructor = ne),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = te), ne._jQueryInterface;
      });
    var ie = t.fn.toast,
      re = { animation: "boolean", autohide: "boolean", delay: "number" },
      oe = { animation: !0, autohide: !0, delay: 500 },
      se = (function () {
        function e(e, t) {
          (this._element = e),
            (this._config = this._getConfig(t)),
            (this._timeout = null),
            this._setListeners();
        }
        var n = e.prototype;
        return (
          (n.show = function () {
            var e = this,
              n = t.Event("show.bs.toast");
            if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
              this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
              var i = function () {
                e._element.classList.remove("showing"),
                  e._element.classList.add("show"),
                  t(e._element).trigger("shown.bs.toast"),
                  e._config.autohide &&
                    (e._timeout = setTimeout(function () {
                      e.hide();
                    }, e._config.delay));
              };
              if (
                (this._element.classList.remove("hide"),
                s.reflow(this._element),
                this._element.classList.add("showing"),
                this._config.animation)
              ) {
                var r = s.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(s.TRANSITION_END, i)
                  .emulateTransitionEnd(r);
              } else i();
            }
          }),
          (n.hide = function () {
            if (this._element.classList.contains("show")) {
              var e = t.Event("hide.bs.toast");
              t(this._element).trigger(e),
                e.isDefaultPrevented() || this._close();
            }
          }),
          (n.dispose = function () {
            this._clearTimeout(),
              this._element.classList.contains("show") &&
                this._element.classList.remove("show"),
              t(this._element).off("click.dismiss.bs.toast"),
              t.removeData(this._element, "bs.toast"),
              (this._element = null),
              (this._config = null);
          }),
          (n._getConfig = function (e) {
            return (
              (e = o(
                {},
                oe,
                t(this._element).data(),
                "object" == typeof e && e ? e : {}
              )),
              s.typeCheckConfig("toast", e, this.constructor.DefaultType),
              e
            );
          }),
          (n._setListeners = function () {
            var e = this;
            t(this._element).on(
              "click.dismiss.bs.toast",
              '[data-dismiss="toast"]',
              function () {
                return e.hide();
              }
            );
          }),
          (n._close = function () {
            var e = this,
              n = function () {
                e._element.classList.add("hide"),
                  t(e._element).trigger("hidden.bs.toast");
              };
            if (
              (this._element.classList.remove("show"), this._config.animation)
            ) {
              var i = s.getTransitionDurationFromElement(this._element);
              t(this._element).one(s.TRANSITION_END, n).emulateTransitionEnd(i);
            } else n();
          }),
          (n._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                r = i.data("bs.toast");
              if (
                (r ||
                  ((r = new e(this, "object" == typeof n && n)),
                  i.data("bs.toast", r)),
                "string" == typeof n)
              ) {
                if (void 0 === r[n])
                  throw new TypeError('No method named "' + n + '"');
                r[n](this);
              }
            });
          }),
          r(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.5.2";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return re;
              },
            },
            {
              key: "Default",
              get: function () {
                return oe;
              },
            },
          ]),
          e
        );
      })();
    (t.fn.toast = se._jQueryInterface),
      (t.fn.toast.Constructor = se),
      (t.fn.toast.noConflict = function () {
        return (t.fn.toast = ie), se._jQueryInterface;
      }),
      (e.Alert = l),
      (e.Button = u),
      (e.Carousel = m),
      (e.Collapse = w),
      (e.Dropdown = k),
      (e.Modal = j),
      (e.Popover = Y),
      (e.Scrollspy = ee),
      (e.Tab = ne),
      (e.Toast = se),
      (e.Tooltip = Q),
      (e.Util = s),
      Object.defineProperty(e, "__esModule", { value: !0 });
  });
