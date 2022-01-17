! function (n) {
    var i = {};

    function r(t) {
        if (i[t]) return i[t].exports;
        var e = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
    }
    r.m = n, r.c = i, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function (t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 4)
}([function (t, on, e) {
    (function (en) {
        var nn;

        function rn(t) {
            return (rn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * jQuery JavaScript Library v3.5.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2020-05-04T22:49Z
         */
        ! function (t, e) {
            "use strict";
            "object" === rn(en) && "object" === rn(en.exports) ? en.exports = t.document ? e(t, !0) : function (t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return e(t)
            } : e(t)
        }("undefined" != typeof window ? window : this, function (w, t) {
            "use strict";

            function m(t) {
                return null != t && t === t.window
            }
            var e = [],
                n = Object.getPrototypeOf,
                a = e.slice,
                v = e.flat ? function (t) {
                    return e.flat.call(t)
                } : function (t) {
                    return e.concat.apply([], t)
                },
                l = e.push,
                r = e.indexOf,
                i = {},
                o = i.toString,
                g = i.hasOwnProperty,
                s = g.toString,
                c = s.call(Object),
                y = {},
                _ = function (t) {
                    return "function" == typeof t && "number" != typeof t.nodeType
                },
                T = w.document,
                u = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function x(t, e, n) {
                var i, r, o = (n = n || T).createElement("script");
                if (o.text = t, e)
                    for (i in u) (r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
                n.head.appendChild(o).parentNode.removeChild(o)
            }

            function d(t) {
                return null == t ? t + "" : "object" === rn(t) || "function" == typeof t ? i[o.call(t)] || "object" : rn(t)
            }
            var S = function t(e, n) {
                return new t.fn.init(e, n)
            };

            function h(t) {
                var e = !!t && "length" in t && t.length,
                    n = d(t);
                return !_(t) && !m(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
            }
            S.fn = S.prototype = {
                jquery: "3.5.1",
                constructor: S,
                length: 0,
                toArray: function () {
                    return a.call(this)
                },
                get: function (t) {
                    return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
                },
                pushStack: function (t) {
                    t = S.merge(this.constructor(), t);
                    return t.prevObject = this, t
                },
                each: function (t) {
                    return S.each(this, t)
                },
                map: function (n) {
                    return this.pushStack(S.map(this, function (t, e) {
                        return n.call(t, e, t)
                    }))
                },
                slice: function () {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                even: function () {
                    return this.pushStack(S.grep(this, function (t, e) {
                        return (e + 1) % 2
                    }))
                },
                odd: function () {
                    return this.pushStack(S.grep(this, function (t, e) {
                        return e % 2
                    }))
                },
                eq: function (t) {
                    var e = this.length,
                        t = +t + (t < 0 ? e : 0);
                    return this.pushStack(0 <= t && t < e ? [this[t]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: e.sort,
                splice: e.splice
            }, S.extend = S.fn.extend = function () {
                var t, e, n, i, r, o = arguments[0] || {},
                    s = 1,
                    a = arguments.length,
                    l = !1;
                for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" === rn(o) || _(o) || (o = {}), s === a && (o = this, s--); s < a; s++)
                    if (null != (t = arguments[s]))
                        for (e in t) n = t[e], "__proto__" !== e && o !== n && (l && n && (S.isPlainObject(n) || (i = Array.isArray(n))) ? (r = o[e], r = i && !Array.isArray(r) ? [] : i || S.isPlainObject(r) ? r : {}, i = !1, o[e] = S.extend(l, r, n)) : void 0 !== n && (o[e] = n));
                return o
            }, S.extend({
                expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t)
                },
                noop: function () { },
                isPlainObject: function (t) {
                    return !(!t || "[object Object]" !== o.call(t)) && (!(t = n(t)) || "function" == typeof (t = g.call(t, "constructor") && t.constructor) && s.call(t) === c)
                },
                isEmptyObject: function (t) {
                    for (var e in t) return !1;
                    return !0
                },
                globalEval: function (t, e, n) {
                    x(t, {
                        nonce: e && e.nonce
                    }, n)
                },
                each: function (t, e) {
                    var n, i = 0;
                    if (h(t))
                        for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                    else
                        for (i in t)
                            if (!1 === e.call(t[i], i, t[i])) break;
                    return t
                },
                makeArray: function (t, e) {
                    e = e || [];
                    return null != t && (h(Object(t)) ? S.merge(e, "string" == typeof t ? [t] : t) : l.call(e, t)), e
                },
                inArray: function (t, e, n) {
                    return null == e ? -1 : r.call(e, t, n)
                },
                merge: function (t, e) {
                    for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                    return t.length = r, t
                },
                grep: function (t, e, n) {
                    for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) != s && i.push(t[r]);
                    return i
                },
                map: function (t, e, n) {
                    var i, r, o = 0,
                        s = [];
                    if (h(t))
                        for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
                    else
                        for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
                    return v(s)
                },
                guid: 1,
                support: y
            }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = e[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                i["[object " + e + "]"] = e.toLowerCase()
            });
            var f =
                /*!
                 * Sizzle CSS Selector Engine v2.3.5
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://js.foundation/
                 *
                 * Date: 2020-03-14
                 */
                function (n) {
                    function h(t, e) {
                        return t = "0x" + t.slice(1) - 65536, e || (t < 0 ? String.fromCharCode(65536 + t) : String.fromCharCode(t >> 10 | 55296, 1023 & t | 56320))
                    }

                    function i() {
                        w()
                    }
                    var t, p, x, o, r, d, f, m, b, l, c, w, T, s, S, v, a, u, g, E = "sizzle" + +new Date,
                        y = n.document,
                        k = 0,
                        _ = 0,
                        C = lt(),
                        A = lt(),
                        P = lt(),
                        O = lt(),
                        L = function (t, e) {
                            return t === e && (c = !0), 0
                        },
                        D = {}.hasOwnProperty,
                        e = [],
                        R = e.pop,
                        M = e.push,
                        N = e.push,
                        j = e.slice,
                        I = function (t, e) {
                            for (var n = 0, i = t.length; n < i; n++)
                                if (t[n] === e) return n;
                            return -1
                        },
                        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        B = "[\\x20\\t\\r\\n\\f]",
                        z = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        q = "\\[" + B + "*(" + z + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + B + "*\\]",
                        X = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                        F = new RegExp(B + "+", "g"),
                        W = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
                        Y = new RegExp("^" + B + "*," + B + "*"),
                        $ = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
                        U = new RegExp(B + "|>"),
                        V = new RegExp(X),
                        K = new RegExp("^" + z + "$"),
                        G = {
                            ID: new RegExp("^#(" + z + ")"),
                            CLASS: new RegExp("^\\.(" + z + ")"),
                            TAG: new RegExp("^(" + z + "|[*])"),
                            ATTR: new RegExp("^" + q),
                            PSEUDO: new RegExp("^" + X),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + H + ")$", "i"),
                            needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
                        },
                        Q = /HTML$/i,
                        Z = /^(?:input|select|textarea|button)$/i,
                        J = /^h\d$/i,
                        tt = /^[^{]+\{\s*\[native \w/,
                        et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        nt = /[+~]/,
                        it = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])", "g"),
                        rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        ot = function (t, e) {
                            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                        },
                        st = yt(function (t) {
                            return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                        }, {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        N.apply(e = j.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType
                    } catch (t) {
                        N = {
                            apply: e.length ? function (t, e) {
                                M.apply(t, j.call(e))
                            } : function (t, e) {
                                for (var n = t.length, i = 0; t[n++] = e[i++];);
                                t.length = n - 1
                            }
                        }
                    }

                    function at(e, t, n, i) {
                        var r, o, s, a, l, c, u, h = t && t.ownerDocument,
                            f = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
                        if (!i && (w(t), t = t || T, S)) {
                            if (11 !== f && (l = et.exec(e)))
                                if (r = l[1]) {
                                    if (9 === f) {
                                        if (!(s = t.getElementById(r))) return n;
                                        if (s.id === r) return n.push(s), n
                                    } else if (h && (s = h.getElementById(r)) && g(t, s) && s.id === r) return n.push(s), n
                                } else {
                                    if (l[2]) return N.apply(n, t.getElementsByTagName(e)), n;
                                    if ((r = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return N.apply(n, t.getElementsByClassName(r)), n
                                } if (p.qsa && !O[e + " "] && (!v || !v.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                                    if (u = e, h = t, 1 === f && (U.test(e) || $.test(e))) {
                                        for ((h = nt.test(e) && mt(t.parentNode) || t) === t && p.scope || ((a = t.getAttribute("id")) ? a = a.replace(rt, ot) : t.setAttribute("id", a = E)), o = (c = d(e)).length; o--;) c[o] = (a ? "#" + a : ":scope") + " " + gt(c[o]);
                                        u = c.join(",")
                                    }
                                    try {
                                        return N.apply(n, h.querySelectorAll(u)), n
                                    } catch (t) {
                                        O(e, !0)
                                    } finally {
                                        a === E && t.removeAttribute("id")
                                    }
                                }
                        }
                        return m(e.replace(W, "$1"), t, n, i)
                    }

                    function lt() {
                        var n = [];

                        function i(t, e) {
                            return n.push(t + " ") > x.cacheLength && delete i[n.shift()], i[t + " "] = e
                        }
                        return i
                    }

                    function ct(t) {
                        return t[E] = !0, t
                    }

                    function ut(t) {
                        var e = T.createElement("fieldset");
                        try {
                            return !!t(e)
                        } catch (t) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null
                        }
                    }

                    function ht(t, e) {
                        for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
                    }

                    function ft(t, e) {
                        var n = e && t,
                            i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                        if (i) return i;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === e) return -1;
                        return t ? 1 : -1
                    }

                    function pt(e) {
                        return function (t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && st(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }

                    function dt(s) {
                        return ct(function (o) {
                            return o = +o, ct(function (t, e) {
                                for (var n, i = s([], t.length, o), r = i.length; r--;) t[n = i[r]] && (t[n] = !(e[n] = t[n]))
                            })
                        })
                    }

                    function mt(t) {
                        return t && void 0 !== t.getElementsByTagName && t
                    }
                    for (t in p = at.support = {}, r = at.isXML = function (t) {
                        var e = t.namespaceURI,
                            t = (t.ownerDocument || t).documentElement;
                        return !Q.test(e || t && t.nodeName || "HTML")
                    }, w = at.setDocument = function (t) {
                        var e, t = t ? t.ownerDocument || t : y;
                        return t != T && 9 === t.nodeType && t.documentElement && (s = (T = t).documentElement, S = !r(T), y != T && (e = T.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", i, !1) : e.attachEvent && e.attachEvent("onunload", i)), p.scope = ut(function (t) {
                            return s.appendChild(t).appendChild(T.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                        }), p.attributes = ut(function (t) {
                            return t.className = "i", !t.getAttribute("className")
                        }), p.getElementsByTagName = ut(function (t) {
                            return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length
                        }), p.getElementsByClassName = tt.test(T.getElementsByClassName), p.getById = ut(function (t) {
                            return s.appendChild(t).id = E, !T.getElementsByName || !T.getElementsByName(E).length
                        }), p.getById ? (x.filter.ID = function (t) {
                            var e = t.replace(it, h);
                            return function (t) {
                                return t.getAttribute("id") === e
                            }
                        }, x.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && S) {
                                t = e.getElementById(t);
                                return t ? [t] : []
                            }
                        }) : (x.filter.ID = function (t) {
                            var e = t.replace(it, h);
                            return function (t) {
                                t = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                return t && t.value === e
                            }
                        }, x.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && S) {
                                var n, i, r, o = e.getElementById(t);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                    for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                                }
                                return []
                            }
                        }), x.find.TAG = p.getElementsByTagName ? function (t, e) {
                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
                        } : function (t, e) {
                            var n, i = [],
                                r = 0,
                                o = e.getElementsByTagName(t);
                            if ("*" !== t) return o;
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }, x.find.CLASS = p.getElementsByClassName && function (t, e) {
                            if (void 0 !== e.getElementsByClassName && S) return e.getElementsByClassName(t)
                        }, a = [], v = [], (p.qsa = tt.test(T.querySelectorAll)) && (ut(function (t) {
                            var e;
                            s.appendChild(t).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + B + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + B + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + E + "-]").length || v.push("~="), (e = T.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || v.push("\\[" + B + "*name" + B + "*=" + B + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + E + "+*").length || v.push(".#.+[+~]"), t.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                        }), ut(function (t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = T.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + B + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), s.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                        })), (p.matchesSelector = tt.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ut(function (t) {
                            p.disconnectedMatch = u.call(t, "*"), u.call(t, "[s!='']:x"), a.push("!=", X)
                        }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), e = tt.test(s.compareDocumentPosition), g = e || tt.test(s.contains) ? function (t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                                e = e && e.parentNode;
                            return t === e || !(!e || 1 !== e.nodeType || !(n.contains ? n.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
                        } : function (t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, L = e ? function (t, e) {
                            if (t === e) return c = !0, 0;
                            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === n ? t == T || t.ownerDocument == y && g(y, t) ? -1 : e == T || e.ownerDocument == y && g(y, e) ? 1 : l ? I(l, t) - I(l, e) : 0 : 4 & n ? -1 : 1)
                        } : function (t, e) {
                            if (t === e) return c = !0, 0;
                            var n, i = 0,
                                r = t.parentNode,
                                o = e.parentNode,
                                s = [t],
                                a = [e];
                            if (!r || !o) return t == T ? -1 : e == T ? 1 : r ? -1 : o ? 1 : l ? I(l, t) - I(l, e) : 0;
                            if (r === o) return ft(t, e);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? ft(s[i], a[i]) : s[i] == y ? -1 : a[i] == y ? 1 : 0
                        }), T
                    }, at.matches = function (t, e) {
                        return at(t, null, null, e)
                    }, at.matchesSelector = function (t, e) {
                        if (w(t), p.matchesSelector && S && !O[e + " "] && (!a || !a.test(e)) && (!v || !v.test(e))) try {
                            var n = u.call(t, e);
                            if (n || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                        } catch (t) {
                            O(e, !0)
                        }
                        return 0 < at(e, T, null, [t]).length
                    }, at.contains = function (t, e) {
                        return (t.ownerDocument || t) != T && w(t), g(t, e)
                    }, at.attr = function (t, e) {
                        (t.ownerDocument || t) != T && w(t);
                        var n = x.attrHandle[e.toLowerCase()],
                            n = n && D.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !S) : void 0;
                        return void 0 !== n ? n : p.attributes || !S ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                    }, at.escape = function (t) {
                        return (t + "").replace(rt, ot)
                    }, at.error = function (t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }, at.uniqueSort = function (t) {
                        var e, n = [],
                            i = 0,
                            r = 0;
                        if (c = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(L), c) {
                            for (; e = t[r++];) e === t[r] && (i = n.push(r));
                            for (; i--;) t.splice(n[i], 1)
                        }
                        return l = null, t
                    }, o = at.getText = function (t) {
                        var e, n = "",
                            i = 0,
                            r = t.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                            } else if (3 === r || 4 === r) return t.nodeValue
                        } else
                            for (; e = t[i++];) n += o(e);
                        return n
                    }, (x = at.selectors = {
                        cacheLength: 50,
                        createPseudo: ct,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (t) {
                                return t[1] = t[1].replace(it, h), t[3] = (t[3] || t[4] || t[5] || "").replace(it, h), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function (t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                            },
                            PSEUDO: function (t) {
                                var e, n = !t[6] && t[2];
                                return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = d(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(it, h).toLowerCase();
                                return "*" === t ? function () {
                                    return !0
                                } : function (t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function (t) {
                                var e = C[t + " "];
                                return e || (e = new RegExp("(^|" + B + ")" + t + "(" + B + "|$)")) && C(t, function (t) {
                                    return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (e, n, i) {
                                return function (t) {
                                    t = at.attr(t, e);
                                    return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === i : "!=" === n ? t !== i : "^=" === n ? i && 0 === t.indexOf(i) : "*=" === n ? i && -1 < t.indexOf(i) : "$=" === n ? i && t.slice(-i.length) === i : "~=" === n ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === n && (t === i || t.slice(0, i.length + 1) === i + "-"))
                                }
                            },
                            CHILD: function (d, t, e, m, v) {
                                var g = "nth" !== d.slice(0, 3),
                                    y = "last" !== d.slice(-4),
                                    _ = "of-type" === t;
                                return 1 === m && 0 === v ? function (t) {
                                    return !!t.parentNode
                                } : function (t, e, n) {
                                    var i, r, o, s, a, l, c = g != y ? "nextSibling" : "previousSibling",
                                        u = t.parentNode,
                                        h = _ && t.nodeName.toLowerCase(),
                                        f = !n && !_,
                                        p = !1;
                                    if (u) {
                                        if (g) {
                                            for (; c;) {
                                                for (s = t; s = s[c];)
                                                    if (_ ? s.nodeName.toLowerCase() === h : 1 === s.nodeType) return !1;
                                                l = c = "only" === d && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [y ? u.firstChild : u.lastChild], y && f) {
                                            for (p = (a = (i = (r = (o = (s = u)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === k && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || l.pop();)
                                                if (1 === s.nodeType && ++p && s === t) {
                                                    r[d] = [k, a, p];
                                                    break
                                                }
                                        } else if (f && (p = a = (i = (r = (o = (s = t)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === k && i[1]), !1 === p)
                                            for (;
                                                (s = ++a && s && s[c] || (p = a = 0) || l.pop()) && ((_ ? s.nodeName.toLowerCase() !== h : 1 !== s.nodeType) || !++p || (f && ((r = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] = [k, p]), s !== t)););
                                        return (p -= v) === m || p % m == 0 && 0 <= p / m
                                    }
                                }
                            },
                            PSEUDO: function (t, o) {
                                var e, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                                return s[E] ? s(o) : 1 < s.length ? (e = [t, t, "", o], x.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function (t, e) {
                                    for (var n, i = s(t, o), r = i.length; r--;) t[n = I(t, i[r])] = !(e[n] = i[r])
                                }) : function (t) {
                                    return s(t, 0, e)
                                }) : s
                            }
                        },
                        pseudos: {
                            not: ct(function (t) {
                                var i = [],
                                    r = [],
                                    a = f(t.replace(W, "$1"));
                                return a[E] ? ct(function (t, e, n, i) {
                                    for (var r, o = a(t, null, i, []), s = t.length; s--;)(r = o[s]) && (t[s] = !(e[s] = r))
                                }) : function (t, e, n) {
                                    return i[0] = t, a(i, null, n, r), i[0] = null, !r.pop()
                                }
                            }),
                            has: ct(function (e) {
                                return function (t) {
                                    return 0 < at(e, t).length
                                }
                            }),
                            contains: ct(function (e) {
                                return e = e.replace(it, h),
                                    function (t) {
                                        return -1 < (t.textContent || o(t)).indexOf(e)
                                    }
                            }),
                            lang: ct(function (n) {
                                return K.test(n || "") || at.error("unsupported lang: " + n), n = n.replace(it, h).toLowerCase(),
                                    function (t) {
                                        var e;
                                        do {
                                            if (e = S ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (t) {
                                var e = n.location && n.location.hash;
                                return e && e.slice(1) === t.id
                            },
                            root: function (t) {
                                return t === s
                            },
                            focus: function (t) {
                                return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: pt(!1),
                            disabled: pt(!0),
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function (t) {
                                return !x.pseudos.empty(t)
                            },
                            header: function (t) {
                                return J.test(t.nodeName)
                            },
                            input: function (t) {
                                return Z.test(t.nodeName)
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function (t) {
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: dt(function () {
                                return [0]
                            }),
                            last: dt(function (t, e) {
                                return [e - 1]
                            }),
                            eq: dt(function (t, e, n) {
                                return [n < 0 ? n + e : n]
                            }),
                            even: dt(function (t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t
                            }),
                            odd: dt(function (t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t
                            }),
                            lt: dt(function (t, e, n) {
                                for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
                                return t
                            }),
                            gt: dt(function (t, e, n) {
                                for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                                return t
                            })
                        }
                    }).pseudos.nth = x.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) x.pseudos[t] = function (e) {
                        return function (t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    }) x.pseudos[t] = function (n) {
                        return function (t) {
                            var e = t.nodeName.toLowerCase();
                            return ("input" === e || "button" === e) && t.type === n
                        }
                    }(t);

                    function vt() { }

                    function gt(t) {
                        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                        return i
                    }

                    function yt(s, t, e) {
                        var a = t.dir,
                            l = t.next,
                            c = l || a,
                            u = e && "parentNode" === c,
                            h = _++;
                        return t.first ? function (t, e, n) {
                            for (; t = t[a];)
                                if (1 === t.nodeType || u) return s(t, e, n);
                            return !1
                        } : function (t, e, n) {
                            var i, r, o = [k, h];
                            if (n) {
                                for (; t = t[a];)
                                    if ((1 === t.nodeType || u) && s(t, e, n)) return !0
                            } else
                                for (; t = t[a];)
                                    if (1 === t.nodeType || u)
                                        if (i = (r = t[E] || (t[E] = {}))[t.uniqueID] || (r[t.uniqueID] = {}), l && l === t.nodeName.toLowerCase()) t = t[a] || t;
                                        else {
                                            if ((r = i[c]) && r[0] === k && r[1] === h) return o[2] = r[2];
                                            if ((i[c] = o)[2] = s(t, e, n)) return !0
                                        } return !1
                        }
                    }

                    function _t(r) {
                        return 1 < r.length ? function (t, e, n) {
                            for (var i = r.length; i--;)
                                if (!r[i](t, e, n)) return !1;
                            return !0
                        } : r[0]
                    }

                    function xt(t, e, n, i, r) {
                        for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), c && e.push(a)));
                        return s
                    }

                    function bt(p, d, m, v, g, t) {
                        return v && !v[E] && (v = bt(v)), g && !g[E] && (g = bt(g, t)), ct(function (t, e, n, i) {
                            var r, o, s, a = [],
                                l = [],
                                c = e.length,
                                u = t || function (t, e, n) {
                                    for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                                    return n
                                }(d || "*", n.nodeType ? [n] : n, []),
                                h = !p || !t && d ? u : xt(u, a, p, n, i),
                                f = m ? g || (t ? p : c || v) ? [] : e : h;
                            if (m && m(h, f, n, i), v)
                                for (r = xt(f, l), v(r, [], n, i), o = r.length; o--;)(s = r[o]) && (f[l[o]] = !(h[l[o]] = s));
                            if (t) {
                                if (g || p) {
                                    if (g) {
                                        for (r = [], o = f.length; o--;)(s = f[o]) && r.push(h[o] = s);
                                        g(null, f = [], r, i)
                                    }
                                    for (o = f.length; o--;)(s = f[o]) && -1 < (r = g ? I(t, s) : a[o]) && (t[r] = !(e[r] = s))
                                }
                            } else f = xt(f === e ? f.splice(c, f.length) : f), g ? g(null, e, f, i) : N.apply(e, f)
                        })
                    }

                    function wt(v, g) {
                        function t(t, e, n, i, r) {
                            var o, s, a, l = 0,
                                c = "0",
                                u = t && [],
                                h = [],
                                f = b,
                                p = t || _ && x.find.TAG("*", r),
                                d = k += null == f ? 1 : Math.random() || .1,
                                m = p.length;
                            for (r && (b = e == T || e || r); c !== m && null != (o = p[c]); c++) {
                                if (_ && o) {
                                    for (s = 0, e || o.ownerDocument == T || (w(o), n = !S); a = v[s++];)
                                        if (a(o, e || T, n)) {
                                            i.push(o);
                                            break
                                        } r && (k = d)
                                }
                                y && ((o = !a && o) && l--, t && u.push(o))
                            }
                            if (l += c, y && c !== l) {
                                for (s = 0; a = g[s++];) a(u, h, e, n);
                                if (t) {
                                    if (0 < l)
                                        for (; c--;) u[c] || h[c] || (h[c] = R.call(i));
                                    h = xt(h)
                                }
                                N.apply(i, h), r && !t && 0 < h.length && 1 < l + g.length && at.uniqueSort(i)
                            }
                            return r && (k = d, b = f), u
                        }
                        var y = 0 < g.length,
                            _ = 0 < v.length;
                        return y ? ct(t) : t
                    }
                    return vt.prototype = x.filters = x.pseudos, x.setFilters = new vt, d = at.tokenize = function (t, e) {
                        var n, i, r, o, s, a, l, c = A[t + " "];
                        if (c) return e ? 0 : c.slice(0);
                        for (s = t, a = [], l = x.preFilter; s;) {
                            for (o in n && !(i = Y.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = $.exec(s)) && (n = i.shift(), r.push({
                                value: n,
                                type: i[0].replace(W, " ")
                            }), s = s.slice(n.length)), x.filter) !(i = G[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                                value: n,
                                type: o,
                                matches: i
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return e ? s.length : s ? at.error(t) : A(t, a).slice(0)
                    }, f = at.compile = function (t, e) {
                        var n, i = [],
                            r = [],
                            o = P[t + " "];
                        if (!o) {
                            for (n = (e = e || d(t)).length; n--;)((o = function t(e) {
                                for (var i, n, r, o = e.length, s = x.relative[e[0].type], a = s || x.relative[" "], l = s ? 1 : 0, c = yt(function (t) {
                                    return t === i
                                }, a, !0), u = yt(function (t) {
                                    return -1 < I(i, t)
                                }, a, !0), h = [function (t, e, n) {
                                    return n = !s && (n || e !== b) || ((i = e).nodeType ? c : u)(t, e, n), i = null, n
                                }]; l < o; l++)
                                    if (n = x.relative[e[l].type]) h = [yt(_t(h), n)];
                                    else {
                                        if ((n = x.filter[e[l].type].apply(null, e[l].matches))[E]) {
                                            for (r = ++l; r < o && !x.relative[e[r].type]; r++);
                                            return bt(1 < l && _t(h), 1 < l && gt(e.slice(0, l - 1).concat({
                                                value: " " === e[l - 2].type ? "*" : ""
                                            })).replace(W, "$1"), n, l < r && t(e.slice(l, r)), r < o && t(e = e.slice(r)), r < o && gt(e))
                                        }
                                        h.push(n)
                                    } return _t(h)
                            }(e[n]))[E] ? i : r).push(o);
                            (o = P(t, wt(r, i))).selector = t
                        }
                        return o
                    }, m = at.select = function (t, e, n, i) {
                        var r, o, s, a, l, c = "function" == typeof t && t,
                            u = !i && d(t = c.selector || t);
                        if (n = n || [], 1 === u.length) {
                            if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && S && x.relative[o[1].type]) {
                                if (!(e = (x.find.ID(s.matches[0].replace(it, h), e) || [])[0])) return n;
                                c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                            }
                            for (r = G.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                                if ((l = x.find[a]) && (i = l(s.matches[0].replace(it, h), nt.test(o[0].type) && mt(e.parentNode) || e))) {
                                    if (o.splice(r, 1), !(t = i.length && gt(o))) return N.apply(n, i), n;
                                    break
                                }
                        }
                        return (c || f(t, u))(i, e, !S, n, !e || nt.test(t) && mt(e.parentNode) || e), n
                    }, p.sortStable = E.split("").sort(L).join("") === E, p.detectDuplicates = !!c, w(), p.sortDetached = ut(function (t) {
                        return 1 & t.compareDocumentPosition(T.createElement("fieldset"))
                    }), ut(function (t) {
                        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                    }) || ht("type|href|height|width", function (t, e, n) {
                        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    }), p.attributes && ut(function (t) {
                        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                    }) || ht("value", function (t, e, n) {
                        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                    }), ut(function (t) {
                        return null == t.getAttribute("disabled")
                    }) || ht(H, function (t, e, n) {
                        if (!n) return !0 === t[e] ? e.toLowerCase() : (e = t.getAttributeNode(e)) && e.specified ? e.value : null
                    }), at
                }(w);
            S.find = f, S.expr = f.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = f.uniqueSort, S.text = f.getText, S.isXMLDoc = f.isXML, S.contains = f.contains, S.escapeSelector = f.escape;

            function p(t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && S(t).is(n)) break;
                        i.push(t)
                    } return i
            }

            function b(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
            var E = S.expr.match.needsContext;

            function k(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }
            var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function A(t, n, i) {
                return _(n) ? S.grep(t, function (t, e) {
                    return !!n.call(t, e, t) !== i
                }) : n.nodeType ? S.grep(t, function (t) {
                    return t === n !== i
                }) : "string" != typeof n ? S.grep(t, function (t) {
                    return -1 < r.call(n, t) !== i
                }) : S.filter(n, t, i)
            }
            S.filter = function (t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? S.find.matchesSelector(i, t) ? [i] : [] : S.find.matches(t, S.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, S.fn.extend({
                find: function (t) {
                    var e, n, i = this.length,
                        r = this;
                    if ("string" != typeof t) return this.pushStack(S(t).filter(function () {
                        for (e = 0; e < i; e++)
                            if (S.contains(r[e], this)) return !0
                    }));
                    for (n = this.pushStack([]), e = 0; e < i; e++) S.find(t, r[e], n);
                    return 1 < i ? S.uniqueSort(n) : n
                },
                filter: function (t) {
                    return this.pushStack(A(this, t || [], !1))
                },
                not: function (t) {
                    return this.pushStack(A(this, t || [], !0))
                },
                is: function (t) {
                    return !!A(this, "string" == typeof t && E.test(t) ? S(t) : t || [], !1).length
                }
            });
            var P, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (S.fn.init = function (t, e, n) {
                if (!t) return this;
                if (n = n || P, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : _(t) ? void 0 !== n.ready ? n.ready(t) : t(S) : S.makeArray(t, this);
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : O.exec(t)) || !i[1] && e) return (!e || e.jquery ? e || n : this.constructor(e)).find(t);
                if (i[1]) {
                    if (e = e instanceof S ? e[0] : e, S.merge(this, S.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : T, !0)), C.test(i[1]) && S.isPlainObject(e))
                        for (var i in e) _(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (t = T.getElementById(i[2])) && (this[0] = t, this.length = 1), this
            }).prototype = S.fn, P = S(T);
            var L = /^(?:parents|prev(?:Until|All))/,
                D = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function R(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }
            S.fn.extend({
                has: function (t) {
                    var e = S(t, this),
                        n = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < n; t++)
                            if (S.contains(this, e[t])) return !0
                    })
                },
                closest: function (t, e) {
                    var n, i = 0,
                        r = this.length,
                        o = [],
                        s = "string" != typeof t && S(t);
                    if (!E.test(t))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== e; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, t))) {
                                    o.push(n);
                                    break
                                } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
                },
                index: function (t) {
                    return t ? "string" == typeof t ? r.call(S(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (t, e) {
                    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))))
                },
                addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), S.each({
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function (t) {
                    return p(t, "parentNode")
                },
                parentsUntil: function (t, e, n) {
                    return p(t, "parentNode", n)
                },
                next: function (t) {
                    return R(t, "nextSibling")
                },
                prev: function (t) {
                    return R(t, "previousSibling")
                },
                nextAll: function (t) {
                    return p(t, "nextSibling")
                },
                prevAll: function (t) {
                    return p(t, "previousSibling")
                },
                nextUntil: function (t, e, n) {
                    return p(t, "nextSibling", n)
                },
                prevUntil: function (t, e, n) {
                    return p(t, "previousSibling", n)
                },
                siblings: function (t) {
                    return b((t.parentNode || {}).firstChild, t)
                },
                children: function (t) {
                    return b(t.firstChild)
                },
                contents: function (t) {
                    return null != t.contentDocument && n(t.contentDocument) ? t.contentDocument : (k(t, "template") && (t = t.content || t), S.merge([], t.childNodes))
                }
            }, function (i, r) {
                S.fn[i] = function (t, e) {
                    var n = S.map(this, r, t);
                    return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = S.filter(e, n)), 1 < this.length && (D[i] || S.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n)
                }
            });
            var M = /[^\x20\t\r\n\f]+/g;

            function N(t) {
                return t
            }

            function j(t) {
                throw t
            }

            function I(t, e, n, i) {
                var r;
                try {
                    t && _(r = t.promise) ? r.call(t).done(e).fail(n) : t && _(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
                } catch (t) {
                    n.apply(void 0, [t])
                }
            }
            S.Callbacks = function (i) {
                var t, n;
                i = "string" == typeof i ? (t = i, n = {}, S.each(t.match(M) || [], function (t, e) {
                    n[e] = !0
                }), n) : S.extend({}, i);

                function r() {
                    for (a = a || i.once, s = o = !0; c.length; u = -1)
                        for (e = c.shift(); ++u < l.length;) !1 === l[u].apply(e[0], e[1]) && i.stopOnFalse && (u = l.length, e = !1);
                    i.memory || (e = !1), o = !1, a && (l = e ? [] : "")
                }
                var o, e, s, a, l = [],
                    c = [],
                    u = -1,
                    h = {
                        add: function () {
                            return l && (e && !o && (u = l.length - 1, c.push(e)), function n(t) {
                                S.each(t, function (t, e) {
                                    _(e) ? i.unique && h.has(e) || l.push(e) : e && e.length && "string" !== d(e) && n(e)
                                })
                            }(arguments), e && !o && r()), this
                        },
                        remove: function () {
                            return S.each(arguments, function (t, e) {
                                for (var n; - 1 < (n = S.inArray(e, l, n));) l.splice(n, 1), n <= u && u--
                            }), this
                        },
                        has: function (t) {
                            return t ? -1 < S.inArray(t, l) : 0 < l.length
                        },
                        empty: function () {
                            return l = l && [], this
                        },
                        disable: function () {
                            return a = c = [], l = e = "", this
                        },
                        disabled: function () {
                            return !l
                        },
                        lock: function () {
                            return a = c = [], e || o || (l = e = ""), this
                        },
                        locked: function () {
                            return !!a
                        },
                        fireWith: function (t, e) {
                            return a || (e = [t, (e = e || []).slice ? e.slice() : e], c.push(e), o || r()), this
                        },
                        fire: function () {
                            return h.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!s
                        }
                    };
                return h
            }, S.extend({
                Deferred: function (t) {
                    var o = [
                        ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                        ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                    ],
                        r = "pending",
                        s = {
                            state: function () {
                                return r
                            },
                            always: function () {
                                return a.done(arguments).fail(arguments), this
                            },
                            catch: function (t) {
                                return s.then(null, t)
                            },
                            pipe: function () {
                                var r = arguments;
                                return S.Deferred(function (i) {
                                    S.each(o, function (t, e) {
                                        var n = _(r[e[4]]) && r[e[4]];
                                        a[e[1]](function () {
                                            var t = n && n.apply(this, arguments);
                                            t && _(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
                                        })
                                    }), r = null
                                }).promise()
                            },
                            then: function (e, n, i) {
                                var l = 0;

                                function c(r, o, s, a) {
                                    return function () {
                                        function t() {
                                            var t, e;
                                            if (!(r < l)) {
                                                if ((t = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                e = t && ("object" === rn(t) || "function" == typeof t) && t.then, _(e) ? a ? e.call(t, c(l, o, N, a), c(l, o, j, a)) : (l++, e.call(t, c(l, o, N, a), c(l, o, j, a), c(l, o, N, o.notifyWith))) : (s !== N && (n = void 0, i = [t]), (a || o.resolveWith)(n, i))
                                            }
                                        }
                                        var n = this,
                                            i = arguments,
                                            e = a ? t : function () {
                                                try {
                                                    t()
                                                } catch (t) {
                                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(t, e.stackTrace), l <= r + 1 && (s !== j && (n = void 0, i = [t]), o.rejectWith(n, i))
                                                }
                                            };
                                        r ? e() : (S.Deferred.getStackHook && (e.stackTrace = S.Deferred.getStackHook()), w.setTimeout(e))
                                    }
                                }
                                return S.Deferred(function (t) {
                                    o[0][3].add(c(0, t, _(i) ? i : N, t.notifyWith)), o[1][3].add(c(0, t, _(e) ? e : N)), o[2][3].add(c(0, t, _(n) ? n : j))
                                }).promise()
                            },
                            promise: function (t) {
                                return null != t ? S.extend(t, s) : s
                            }
                        },
                        a = {};
                    return S.each(o, function (t, e) {
                        var n = e[2],
                            i = e[5];
                        s[e[1]] = n.add, i && n.add(function () {
                            r = i
                        }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock), n.add(e[3].fire), a[e[0]] = function () {
                            return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[e[0] + "With"] = n.fireWith
                    }), s.promise(a), t && t.call(a, a), a
                },
                when: function (t) {
                    function e(e) {
                        return function (t) {
                            r[e] = this, o[e] = 1 < arguments.length ? a.call(arguments) : t, --n || s.resolveWith(r, o)
                        }
                    }
                    var n = arguments.length,
                        i = n,
                        r = Array(i),
                        o = a.call(arguments),
                        s = S.Deferred();
                    if (n <= 1 && (I(t, s.done(e(i)).resolve, s.reject, !n), "pending" === s.state() || _(o[i] && o[i].then))) return s.then();
                    for (; i--;) I(o[i], e(i), s.reject);
                    return s.promise()
                }
            });
            var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            S.Deferred.exceptionHook = function (t, e) {
                w.console && w.console.warn && t && H.test(t.name) && w.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
            }, S.readyException = function (t) {
                w.setTimeout(function () {
                    throw t
                })
            };
            var B = S.Deferred();

            function z() {
                T.removeEventListener("DOMContentLoaded", z), w.removeEventListener("load", z), S.ready()
            }
            S.fn.ready = function (t) {
                return B.then(t).catch(function (t) {
                    S.readyException(t)
                }), this
            }, S.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (t) {
                    (!0 === t ? --S.readyWait : S.isReady) || (S.isReady = !0) !== t && 0 < --S.readyWait || B.resolveWith(T, [S])
                }
            }), S.ready.then = B.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? w.setTimeout(S.ready) : (T.addEventListener("DOMContentLoaded", z), w.addEventListener("load", z));

            function q(t, e, n, i, r, o, s) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === d(n))
                    for (a in r = !0, n) q(t, e, a, n[a], !0, o, s);
                else if (void 0 !== i && (r = !0, _(i) || (s = !0), c && (e = s ? (e.call(t, i), null) : (c = e, function (t, e, n) {
                    return c.call(S(t), n)
                })), e))
                    for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
            }
            var X = /^-ms-/,
                F = /-([a-z])/g;

            function W(t, e) {
                return e.toUpperCase()
            }

            function Y(t) {
                return t.replace(X, "ms-").replace(F, W)
            }

            function $(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }

            function U() {
                this.expando = S.expando + U.uid++
            }
            U.uid = 1, U.prototype = {
                cache: function (t) {
                    var e = t[this.expando];
                    return e || (e = {}, $(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))), e
                },
                set: function (t, e, n) {
                    var i, r = this.cache(t);
                    if ("string" == typeof e) r[Y(e)] = n;
                    else
                        for (i in e) r[Y(i)] = e[i];
                    return r
                },
                get: function (t, e) {
                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
                },
                access: function (t, e, n) {
                    return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
                },
                remove: function (t, e) {
                    var n, i = t[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== e) {
                            n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(M) || []).length;
                            for (; n--;) delete i[e[n]]
                        }
                        void 0 !== e && !S.isEmptyObject(i) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                    }
                },
                hasData: function (t) {
                    t = t[this.expando];
                    return void 0 !== t && !S.isEmptyObject(t)
                }
            };
            var V = new U,
                K = new U,
                G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Q = /[A-Z]/g;

            function Z(t, e, n) {
                var i, r;
                if (void 0 === n && 1 === t.nodeType)
                    if (i = "data-" + e.replace(Q, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                        try {
                            n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : G.test(r) ? JSON.parse(r) : r)
                        } catch (t) { }
                        K.set(t, e, n)
                    } else n = void 0;
                return n
            }
            S.extend({
                hasData: function (t) {
                    return K.hasData(t) || V.hasData(t)
                },
                data: function (t, e, n) {
                    return K.access(t, e, n)
                },
                removeData: function (t, e) {
                    K.remove(t, e)
                },
                _data: function (t, e, n) {
                    return V.access(t, e, n)
                },
                _removeData: function (t, e) {
                    V.remove(t, e)
                }
            }), S.fn.extend({
                data: function (n, t) {
                    var e, i, r, o = this[0],
                        s = o && o.attributes;
                    if (void 0 !== n) return "object" === rn(n) ? this.each(function () {
                        K.set(this, n)
                    }) : q(this, function (t) {
                        var e;
                        return o && void 0 === t ? void 0 !== (e = K.get(o, n)) || void 0 !== (e = Z(o, n)) ? e : void 0 : void this.each(function () {
                            K.set(this, n, t)
                        })
                    }, null, t, 1 < arguments.length, null, !0);
                    if (this.length && (r = K.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                        for (e = s.length; e--;) s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = Y(i.slice(5)), Z(o, i, r[i]));
                        V.set(o, "hasDataAttrs", !0)
                    }
                    return r
                },
                removeData: function (t) {
                    return this.each(function () {
                        K.remove(this, t)
                    })
                }
            }), S.extend({
                queue: function (t, e, n) {
                    var i;
                    if (t) return e = (e || "fx") + "queue", i = V.get(t, e), n && (!i || Array.isArray(n) ? i = V.access(t, e, S.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function (t, e) {
                    e = e || "fx";
                    var n = S.queue(t, e),
                        i = n.length,
                        r = n.shift(),
                        o = S._queueHooks(t, e);
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
                        S.dequeue(t, e)
                    }, o)), !i && o && o.empty.fire()
                },
                _queueHooks: function (t, e) {
                    var n = e + "queueHooks";
                    return V.get(t, n) || V.access(t, n, {
                        empty: S.Callbacks("once memory").add(function () {
                            V.remove(t, [e + "queue", n])
                        })
                    })
                }
            }), S.fn.extend({
                queue: function (e, n) {
                    var t = 2;
                    return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? S.queue(this[0], e) : void 0 === n ? this : this.each(function () {
                        var t = S.queue(this, e, n);
                        S._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && S.dequeue(this, e)
                    })
                },
                dequeue: function (t) {
                    return this.each(function () {
                        S.dequeue(this, t)
                    })
                },
                clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                },
                promise: function (t, e) {
                    function n() {
                        --r || o.resolveWith(s, [s])
                    }
                    var i, r = 1,
                        o = S.Deferred(),
                        s = this,
                        a = this.length;
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = V.get(s[a], t + "queueHooks")) && i.empty && (r++, i.empty.add(n));
                    return n(), o.promise(e)
                }
            });
            var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                tt = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
                et = ["Top", "Right", "Bottom", "Left"],
                nt = T.documentElement,
                it = function (t) {
                    return S.contains(t.ownerDocument, t)
                },
                rt = {
                    composed: !0
                };
            nt.getRootNode && (it = function (t) {
                return S.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument
            });
            var ot = function (t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && it(t) && "none" === S.css(t, "display")
            };

            function st(t, e, n, i) {
                var r, o, s = 20,
                    a = i ? function () {
                        return i.cur()
                    } : function () {
                        return S.css(t, e, "")
                    },
                    l = a(),
                    c = n && n[3] || (S.cssNumber[e] ? "" : "px"),
                    u = t.nodeType && (S.cssNumber[e] || "px" !== c && +l) && tt.exec(S.css(t, e));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; s--;) S.style(t, e, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
                    u *= 2, S.style(t, e, u + c), n = n || []
                }
                return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
            }
            var at = {};

            function lt(t, e) {
                for (var n, i, r, o, s, a = [], l = 0, c = t.length; l < c; l++)(i = t[l]).style && (n = i.style.display, e ? ("none" === n && (a[l] = V.get(i, "display") || null, a[l] || (i.style.display = "")), "" === i.style.display && ot(i) && (a[l] = (s = o = void 0, o = (r = i).ownerDocument, s = r.nodeName, (r = at[s]) || (o = o.body.appendChild(o.createElement(s)), r = S.css(o, "display"), o.parentNode.removeChild(o), "none" === r && (r = "block"), at[s] = r)))) : "none" !== n && (a[l] = "none", V.set(i, "display", n)));
                for (l = 0; l < c; l++) null != a[l] && (t[l].style.display = a[l]);
                return t
            }
            S.fn.extend({
                show: function () {
                    return lt(this, !0)
                },
                hide: function () {
                    return lt(this)
                },
                toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        ot(this) ? S(this).show() : S(this).hide()
                    })
                }
            });
            var ct = /^(?:checkbox|radio)$/i,
                ut = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ht = /^$|^module$|\/(?:java|ecma)script/i;
            Ke = T.createDocumentFragment().appendChild(T.createElement("div")), (f = T.createElement("input")).setAttribute("type", "radio"), f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), Ke.appendChild(f), y.checkClone = Ke.cloneNode(!0).cloneNode(!0).lastChild.checked, Ke.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!Ke.cloneNode(!0).lastChild.defaultValue, Ke.innerHTML = "<option></option>", y.option = !!Ke.lastChild;
            var ft = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function pt(t, e) {
                var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || e && k(t, e) ? S.merge([t], n) : n
            }

            function dt(t, e) {
                for (var n = 0, i = t.length; n < i; n++) V.set(t[n], "globalEval", !e || V.get(e[n], "globalEval"))
            }
            ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead, ft.th = ft.td, y.option || (ft.optgroup = ft.option = [1, "<select multiple='multiple'>", "</select>"]);
            var mt = /<|&#?\w+;/;

            function vt(t, e, n, i, r) {
                for (var o, s, a, l, c, u = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
                    if ((o = t[f]) || 0 === o)
                        if ("object" === d(o)) S.merge(h, o.nodeType ? [o] : o);
                        else if (mt.test(o)) {
                            for (s = s || u.appendChild(e.createElement("div")), a = (ut.exec(o) || ["", ""])[1].toLowerCase(), a = ft[a] || ft._default, s.innerHTML = a[1] + S.htmlPrefilter(o) + a[2], c = a[0]; c--;) s = s.lastChild;
                            S.merge(h, s.childNodes), (s = u.firstChild).textContent = ""
                        } else h.push(e.createTextNode(o));
                for (u.textContent = "", f = 0; o = h[f++];)
                    if (i && -1 < S.inArray(o, i)) r && r.push(o);
                    else if (l = it(o), s = pt(u.appendChild(o), "script"), l && dt(s), n)
                        for (c = 0; o = s[c++];) ht.test(o.type || "") && n.push(o);
                return u
            }
            var gt = /^key/,
                yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                _t = /^([^.]*)(?:\.(.+)|)/;

            function xt() {
                return !0
            }

            function bt() {
                return !1
            }

            function wt(t, e) {
                return t === function () {
                    try {
                        return T.activeElement
                    } catch (t) { }
                }() == ("focus" === e)
            }

            function Tt(t, e, n, i, r, o) {
                var s, a;
                if ("object" === rn(e)) {
                    for (a in "string" != typeof n && (i = i || n, n = void 0), e) Tt(t, a, n, i, e[a], o);
                    return t
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = bt;
                else if (!r) return t;
                return 1 === o && (s = r, (r = function (t) {
                    return S().off(t), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = S.guid++)), t.each(function () {
                    S.event.add(this, e, r, i, n)
                })
            }

            function St(t, r, o) {
                o ? (V.set(t, r, !1), S.event.add(t, r, {
                    namespace: !1,
                    handler: function (t) {
                        var e, n, i = V.get(this, r);
                        if (1 & t.isTrigger && this[r]) {
                            if (i.length) (S.event.special[r] || {}).delegateType && t.stopPropagation();
                            else if (i = a.call(arguments), V.set(this, r, i), e = o(this, r), this[r](), i !== (n = V.get(this, r)) || e ? V.set(this, r, !1) : n = {}, i !== n) return t.stopImmediatePropagation(), t.preventDefault(), n.value
                        } else i.length && (V.set(this, r, {
                            value: S.event.trigger(S.extend(i[0], S.Event.prototype), i.slice(1), this)
                        }), t.stopImmediatePropagation())
                    }
                })) : void 0 === V.get(t, r) && S.event.add(t, r, xt)
            }
            S.event = {
                global: {},
                add: function (e, t, n, i, r) {
                    var o, s, a, l, c, u, h, f, p, d = V.get(e);
                    if ($(e))
                        for (n.handler && (n = (o = n).handler, r = o.selector), r && S.find.matchesSelector(nt, r), n.guid || (n.guid = S.guid++), (a = d.events) || (a = d.events = Object.create(null)), (s = d.handle) || (s = d.handle = function (t) {
                            return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                        }), l = (t = (t || "").match(M) || [""]).length; l--;) h = p = (c = _t.exec(t[l]) || [])[1], f = (c[2] || "").split(".").sort(), h && (u = S.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = S.event.special[h] || {}, c = S.extend({
                            type: h,
                            origType: p,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && S.expr.match.needsContext.test(r),
                            namespace: f.join(".")
                        }, o), (p = a[h]) || ((p = a[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(h, s)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[h] = !0)
                },
                remove: function (t, e, n, i, r) {
                    var o, s, a, l, c, u, h, f, p, d, m, v = V.hasData(t) && V.get(t);
                    if (v && (l = v.events)) {
                        for (c = (e = (e || "").match(M) || [""]).length; c--;)
                            if (p = m = (a = _t.exec(e[c]) || [])[1], d = (a[2] || "").split(".").sort(), p) {
                                for (h = S.event.special[p] || {}, f = l[p = (i ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) u = f[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, h.remove && h.remove.call(t, u));
                                s && !f.length && (h.teardown && !1 !== h.teardown.call(t, d, v.handle) || S.removeEvent(t, p, v.handle), delete l[p])
                            } else
                                for (p in l) S.event.remove(t, p + e[c], n, i, !0);
                        S.isEmptyObject(l) && V.remove(t, "handle events")
                    }
                },
                dispatch: function (t) {
                    var e, n, i, r, o, s = new Array(arguments.length),
                        a = S.event.fix(t),
                        l = (V.get(this, "events") || Object.create(null))[a.type] || [],
                        t = S.event.special[a.type] || {};
                    for (s[0] = a, e = 1; e < arguments.length; e++) s[e] = arguments[e];
                    if (a.delegateTarget = this, !t.preDispatch || !1 !== t.preDispatch.call(this, a)) {
                        for (o = S.event.handlers.call(this, a, l), e = 0;
                            (i = o[e++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = i.elem, n = 0;
                                (r = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (r = ((S.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                        return t.postDispatch && t.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function (t, e) {
                    var n, i, r, o, s, a = [],
                        l = e.delegateCount,
                        c = t.target;
                    if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? -1 < S(r, this).index(c) : S.find(r, this, null, [c]).length), s[r] && o.push(i);
                                o.length && a.push({
                                    elem: c,
                                    handlers: o
                                })
                            } return c = this, l < e.length && a.push({
                                elem: c,
                                handlers: e.slice(l)
                            }), a
                },
                addProp: function (e, t) {
                    Object.defineProperty(S.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: _(t) ? function () {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function (t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function (t) {
                    return t[S.expando] ? t : new S.Event(t)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function (t) {
                            t = this || t;
                            return ct.test(t.type) && t.click && k(t, "input") && St(t, "click", xt), !1
                        },
                        trigger: function (t) {
                            t = this || t;
                            return ct.test(t.type) && t.click && k(t, "input") && St(t, "click"), !0
                        },
                        _default: function (t) {
                            t = t.target;
                            return ct.test(t.type) && t.click && k(t, "input") && V.get(t, "click") || k(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                }
            }, S.removeEvent = function (t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n)
            }, S.Event = function (t, e) {
                if (!(this instanceof S.Event)) return new S.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? xt : bt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && S.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[S.expando] = !0
            }, S.Event.prototype = {
                constructor: S.Event,
                isDefaultPrevented: bt,
                isPropagationStopped: bt,
                isImmediatePropagationStopped: bt,
                isSimulated: !1,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = xt, t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = xt, t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = xt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, S.each({
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
                which: function (t) {
                    var e = t.button;
                    return null == t.which && gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && yt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                }
            }, S.event.addProp), S.each({
                focus: "focusin",
                blur: "focusout"
            }, function (t, e) {
                S.event.special[t] = {
                    setup: function () {
                        return St(this, t, wt), !1
                    },
                    trigger: function () {
                        return St(this, t), !0
                    },
                    delegateType: e
                }
            }), S.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (t, r) {
                S.event.special[t] = {
                    delegateType: r,
                    bindType: r,
                    handle: function (t) {
                        var e, n = t.relatedTarget,
                            i = t.handleObj;
                        return n && (n === this || S.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = r), e
                    }
                }
            }), S.fn.extend({
                on: function (t, e, n, i) {
                    return Tt(this, t, e, n, i)
                },
                one: function (t, e, n, i) {
                    return Tt(this, t, e, n, i, 1)
                },
                off: function (t, e, n) {
                    var i, r;
                    if (t && t.preventDefault && t.handleObj) return i = t.handleObj, S(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" !== rn(t)) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = bt), this.each(function () {
                        S.event.remove(this, t, n, e)
                    });
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
            });
            var Et = /<script|<style|<link/i,
                kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ct = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function At(t, e) {
                return k(t, "table") && k(11 !== e.nodeType ? e : e.firstChild, "tr") && S(t).children("tbody")[0] || t
            }

            function Pt(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function Ot(t) {
                return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
            }

            function Lt(t, e) {
                var n, i, r, o;
                if (1 === e.nodeType) {
                    if (V.hasData(t) && (o = V.get(t).events))
                        for (r in V.remove(e, "handle events"), o)
                            for (n = 0, i = o[r].length; n < i; n++) S.event.add(e, r, o[r][n]);
                    K.hasData(t) && (t = K.access(t), t = S.extend({}, t), K.set(e, t))
                }
            }

            function Dt(n, i, r, o) {
                i = v(i);
                var t, e, s, a, l, c, u = 0,
                    h = n.length,
                    f = h - 1,
                    p = i[0],
                    d = _(p);
                if (d || 1 < h && "string" == typeof p && !y.checkClone && kt.test(p)) return n.each(function (t) {
                    var e = n.eq(t);
                    d && (i[0] = p.call(this, t, e.html())), Dt(e, i, r, o)
                });
                if (h && (e = (t = vt(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
                    for (a = (s = S.map(pt(t, "script"), Pt)).length; u < h; u++) l = t, u !== f && (l = S.clone(l, !0, !0), a && S.merge(s, pt(l, "script"))), r.call(n[u], l, u);
                    if (a)
                        for (c = s[s.length - 1].ownerDocument, S.map(s, Ot), u = 0; u < a; u++) l = s[u], ht.test(l.type || "") && !V.access(l, "globalEval") && S.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }, c) : x(l.textContent.replace(Ct, ""), l, c))
                }
                return n
            }

            function Rt(t, e, n) {
                for (var i, r = e ? S.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || S.cleanData(pt(i)), i.parentNode && (n && it(i) && dt(pt(i, "script")), i.parentNode.removeChild(i));
                return t
            }
            S.extend({
                htmlPrefilter: function (t) {
                    return t
                },
                clone: function (t, e, n) {
                    var i, r, o, s, a, l, c, u = t.cloneNode(!0),
                        h = it(t);
                    if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || S.isXMLDoc(t)))
                        for (s = pt(u), i = 0, r = (o = pt(t)).length; i < r; i++) a = o[i], l = s[i], c = void 0, "input" === (c = l.nodeName.toLowerCase()) && ct.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                    if (e)
                        if (n)
                            for (o = o || pt(t), s = s || pt(u), i = 0, r = o.length; i < r; i++) Lt(o[i], s[i]);
                        else Lt(t, u);
                    return 0 < (s = pt(u, "script")).length && dt(s, !h && pt(t, "script")), u
                },
                cleanData: function (t) {
                    for (var e, n, i, r = S.event.special, o = 0; void 0 !== (n = t[o]); o++)
                        if ($(n)) {
                            if (e = n[V.expando]) {
                                if (e.events)
                                    for (i in e.events) r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, e.handle);
                                n[V.expando] = void 0
                            }
                            n[K.expando] && (n[K.expando] = void 0)
                        }
                }
            }), S.fn.extend({
                detach: function (t) {
                    return Rt(this, t, !0)
                },
                remove: function (t) {
                    return Rt(this, t)
                },
                text: function (t) {
                    return q(this, function (t) {
                        return void 0 === t ? S.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                },
                append: function () {
                    return Dt(this, arguments, function (t) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t)
                    })
                },
                prepend: function () {
                    return Dt(this, arguments, function (t) {
                        var e;
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = At(this, t)).insertBefore(t, e.firstChild)
                    })
                },
                before: function () {
                    return Dt(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function () {
                    return Dt(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (S.cleanData(pt(t, !1)), t.textContent = "");
                    return this
                },
                clone: function (t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function () {
                        return S.clone(this, t, e)
                    })
                },
                html: function (t) {
                    return q(this, function (t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Et.test(t) && !ft[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = S.htmlPrefilter(t);
                            try {
                                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (S.cleanData(pt(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) { }
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function () {
                    var n = [];
                    return Dt(this, arguments, function (t) {
                        var e = this.parentNode;
                        S.inArray(this, n) < 0 && (S.cleanData(pt(this)), e && e.replaceChild(t, this))
                    }, n)
                }
            }), S.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, s) {
                S.fn[t] = function (t) {
                    for (var e, n = [], i = S(t), r = i.length - 1, o = 0; o <= r; o++) e = o === r ? this : this.clone(!0), S(i[o])[s](e), l.apply(n, e.get());
                    return this.pushStack(n)
                }
            });

            function Mt(t, e, n) {
                var i, r = {};
                for (i in e) r[i] = t.style[i], t.style[i] = e[i];
                for (i in n = n.call(t), e) t.style[i] = r[i];
                return n
            }
            var Nt, jt, It, Ht, Bt, zt, qt, Xt, Ft = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
                Wt = function (t) {
                    var e = t.ownerDocument.defaultView;
                    return e && e.opener || (e = w), e.getComputedStyle(t)
                },
                Yt = new RegExp(et.join("|"), "i");

            function $t() {
                var t;
                Xt && (qt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Xt.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(qt).appendChild(Xt), t = w.getComputedStyle(Xt), Nt = "1%" !== t.top, zt = 12 === Ut(t.marginLeft), Xt.style.right = "60%", Ht = 36 === Ut(t.right), jt = 36 === Ut(t.width), Xt.style.position = "absolute", It = 12 === Ut(Xt.offsetWidth / 3), nt.removeChild(qt), Xt = null)
            }

            function Ut(t) {
                return Math.round(parseFloat(t))
            }

            function Vt(t, e, n) {
                var i, r, o = t.style;
                return (n = n || Wt(t)) && ("" !== (r = n.getPropertyValue(e) || n[e]) || it(t) || (r = S.style(t, e)), !y.pixelBoxStyles() && Ft.test(r) && Yt.test(e) && (i = o.width, t = o.minWidth, e = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = n.width, o.width = i, o.minWidth = t, o.maxWidth = e)), void 0 !== r ? r + "" : r
            }

            function Kt(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            qt = T.createElement("div"), (Xt = T.createElement("div")).style && (Xt.style.backgroundClip = "content-box", Xt.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Xt.style.backgroundClip, S.extend(y, {
                boxSizingReliable: function () {
                    return $t(), jt
                },
                pixelBoxStyles: function () {
                    return $t(), Ht
                },
                pixelPosition: function () {
                    return $t(), Nt
                },
                reliableMarginLeft: function () {
                    return $t(), zt
                },
                scrollboxSize: function () {
                    return $t(), It
                },
                reliableTrDimensions: function () {
                    var t, e, n;
                    return null == Bt && (t = T.createElement("table"), n = T.createElement("tr"), e = T.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", e.style.height = "9px", nt.appendChild(t).appendChild(n).appendChild(e), n = w.getComputedStyle(n), Bt = 3 < parseInt(n.height), nt.removeChild(t)), Bt
                }
            }));
            var Gt = ["Webkit", "Moz", "ms"],
                Qt = T.createElement("div").style,
                Zt = {};

            function Jt(t) {
                var e = S.cssProps[t] || Zt[t];
                return e || (t in Qt ? t : Zt[t] = function (t) {
                    for (var e = t[0].toUpperCase() + t.slice(1), n = Gt.length; n--;)
                        if ((t = Gt[n] + e) in Qt) return t
                }(t) || t)
            }
            var te = /^(none|table(?!-c[ea]).+)/,
                ee = /^--/,
                ne = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                ie = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function re(t, e, n) {
                var i = tt.exec(e);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
            }

            function oe(t, e, n, i, r, o) {
                var s = "width" === e ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2) "margin" === n && (l += S.css(t, n + et[s], !0, r)), i ? ("content" === n && (l -= S.css(t, "padding" + et[s], !0, r)), "margin" !== n && (l -= S.css(t, "border" + et[s] + "Width", !0, r))) : (l += S.css(t, "padding" + et[s], !0, r), "padding" !== n ? l += S.css(t, "border" + et[s] + "Width", !0, r) : a += S.css(t, "border" + et[s] + "Width", !0, r));
                return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
            }

            function se(t, e, n) {
                var i = Wt(t),
                    r = (!y.boxSizingReliable() || n) && "border-box" === S.css(t, "boxSizing", !1, i),
                    o = r,
                    s = Vt(t, e, i),
                    a = "offset" + e[0].toUpperCase() + e.slice(1);
                if (Ft.test(s)) {
                    if (!n) return s;
                    s = "auto"
                }
                return (!y.boxSizingReliable() && r || !y.reliableTrDimensions() && k(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === S.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === S.css(t, "boxSizing", !1, i), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + oe(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
            }

            function ae(t, e, n, i, r) {
                return new ae.prototype.init(t, e, n, i, r)
            }
            S.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                t = Vt(t, "opacity");
                                return "" === t ? "1" : t
                            }
                        }
                    }
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
                    zoom: !0
                },
                cssProps: {},
                style: function (t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r, o, s, a = Y(e),
                            l = ee.test(e),
                            c = t.style;
                        if (l || (e = Jt(a)), s = S.cssHooks[e] || S.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e];
                        "string" === (o = rn(n)) && (r = tt.exec(n)) && r[1] && (n = st(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (S.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
                    }
                },
                css: function (t, e, n, i) {
                    var r, o = Y(e);
                    return ee.test(e) || (e = Jt(o)), (o = S.cssHooks[e] || S.cssHooks[o]) && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = Vt(t, e, i)), "normal" === r && e in ie && (r = ie[e]), "" === n || n ? (e = parseFloat(r), !0 === n || isFinite(e) ? e || 0 : r) : r
                }
            }), S.each(["height", "width"], function (t, a) {
                S.cssHooks[a] = {
                    get: function (t, e, n) {
                        if (e) return !te.test(S.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? se(t, a, n) : Mt(t, ne, function () {
                            return se(t, a, n)
                        })
                    },
                    set: function (t, e, n) {
                        var i, r = Wt(t),
                            o = !y.scrollboxSize() && "absolute" === r.position,
                            s = (o || n) && "border-box" === S.css(t, "boxSizing", !1, r),
                            n = n ? oe(t, a, n, s, r) : 0;
                        return s && o && (n -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - oe(t, a, "border", !1, r) - .5)), n && (i = tt.exec(e)) && "px" !== (i[3] || "px") && (t.style[a] = e, e = S.css(t, a)), re(0, e, n)
                    }
                }
            }), S.cssHooks.marginLeft = Kt(y.reliableMarginLeft, function (t, e) {
                if (e) return (parseFloat(Vt(t, "marginLeft")) || t.getBoundingClientRect().left - Mt(t, {
                    marginLeft: 0
                }, function () {
                    return t.getBoundingClientRect().left
                })) + "px"
            }), S.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (r, o) {
                S.cssHooks[r + o] = {
                    expand: function (t) {
                        for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[r + et[e] + o] = i[e] || i[e - 2] || i[0];
                        return n
                    }
                }, "margin" !== r && (S.cssHooks[r + o].set = re)
            }), S.fn.extend({
                css: function (t, e) {
                    return q(this, function (t, e, n) {
                        var i, r, o = {},
                            s = 0;
                        if (Array.isArray(e)) {
                            for (i = Wt(t), r = e.length; s < r; s++) o[e[s]] = S.css(t, e[s], !1, i);
                            return o
                        }
                        return void 0 !== n ? S.style(t, e, n) : S.css(t, e)
                    }, t, e, 1 < arguments.length)
                }
            }), (S.Tween = ae).prototype = {
                constructor: ae,
                init: function (t, e, n, i, r, o) {
                    this.elem = t, this.prop = n, this.easing = r || S.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (S.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var t = ae.propHooks[this.prop];
                    return (t && t.get ? t : ae.propHooks._default).get(this)
                },
                run: function (t) {
                    var e, n = ae.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = S.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : ae.propHooks._default).set(this), this
                }
            }, ae.prototype.init.prototype = ae.prototype, ae.propHooks = {
                _default: {
                    get: function (t) {
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (t = S.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function (t) {
                        S.fx.step[t.prop] ? S.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !S.cssHooks[t.prop] && null == t.elem.style[Jt(t.prop)] ? t.elem[t.prop] = t.now : S.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            }, ae.propHooks.scrollTop = ae.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, S.easing = {
                linear: function (t) {
                    return t
                },
                swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            }, S.fx = ae.prototype.init, S.fx.step = {};
            var le, ce, ue = /^(?:toggle|show|hide)$/,
                he = /queueHooks$/;

            function fe() {
                ce && (!1 === T.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(fe) : w.setTimeout(fe, S.fx.interval), S.fx.tick())
            }

            function pe() {
                return w.setTimeout(function () {
                    le = void 0
                }), le = Date.now()
            }

            function de(t, e) {
                var n, i = 0,
                    r = {
                        height: t
                    };
                for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = et[i])] = r["padding" + n] = t;
                return e && (r.opacity = r.width = t), r
            }

            function me(t, e, n) {
                for (var i, r = (ve.tweeners[e] || []).concat(ve.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                    if (i = r[o].call(n, e, t)) return i
            }

            function ve(r, t, e) {
                var n, o, i = 0,
                    s = ve.prefilters.length,
                    a = S.Deferred().always(function () {
                        delete l.elem
                    }),
                    l = function () {
                        if (o) return !1;
                        for (var t = le || pe(), t = Math.max(0, c.startTime + c.duration - t), e = 1 - (t / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) c.tweens[n].run(e);
                        return a.notifyWith(r, [c, e, t]), e < 1 && i ? t : (i || a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c]), !1)
                    },
                    c = a.promise({
                        elem: r,
                        props: S.extend({}, t),
                        opts: S.extend(!0, {
                            specialEasing: {},
                            easing: S.easing._default
                        }, e),
                        originalProperties: t,
                        originalOptions: e,
                        startTime: le || pe(),
                        duration: e.duration,
                        tweens: [],
                        createTween: function (t, e) {
                            t = S.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(t), t
                        },
                        stop: function (t) {
                            var e = 0,
                                n = t ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; e < n; e++) c.tweens[e].run(1);
                            return t ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, t])) : a.rejectWith(r, [c, t]), this
                        }
                    }),
                    u = c.props;
                for (! function (t, e) {
                    var n, i, r, o, s;
                    for (n in t)
                        if (r = e[i = Y(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = S.cssHooks[i]) && "expand" in s)
                            for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                        else e[i] = r
                }(u, c.opts.specialEasing); i < s; i++)
                    if (n = ve.prefilters[i].call(c, r, u, c.opts)) return _(n.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
                return S.map(u, me, c), _(c.opts.start) && c.opts.start.call(r, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), S.fx.timer(S.extend(l, {
                    elem: r,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }
            S.Animation = S.extend(ve, {
                tweeners: {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e);
                        return st(n.elem, t, tt.exec(e), n), n
                    }]
                },
                tweener: function (t, e) {
                    for (var n, i = 0, r = (t = _(t) ? (e = t, ["*"]) : t.match(M)).length; i < r; i++) n = t[i], ve.tweeners[n] = ve.tweeners[n] || [], ve.tweeners[n].unshift(e)
                },
                prefilters: [function (t, e, n) {
                    var i, r, o, s, a, l, c, u = "width" in e || "height" in e,
                        h = this,
                        f = {},
                        p = t.style,
                        d = t.nodeType && ot(t),
                        m = V.get(t, "fxshow");
                    for (i in n.queue || (null == (s = S._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                        s.unqueued || a()
                    }), s.unqueued++, h.always(function () {
                        h.always(function () {
                            s.unqueued--, S.queue(t, "fx").length || s.empty.fire()
                        })
                    })), e)
                        if (r = e[i], ue.test(r)) {
                            if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                                if ("show" !== r || !m || void 0 === m[i]) continue;
                                d = !0
                            }
                            f[i] = m && m[i] || S.style(t, i)
                        } if ((l = !S.isEmptyObject(e)) || !S.isEmptyObject(f))
                        for (i in u && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = V.get(t, "display")), "none" === (u = S.css(t, "display")) && (c ? u = c : (lt([t], !0), c = t.style.display || c, u = S.css(t, "display"), lt([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === S.css(t, "float") && (l || (h.done(function () {
                            p.display = c
                        }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), l = !1, f) l || (m ? "hidden" in m && (d = m.hidden) : m = V.access(t, "fxshow", {
                            display: c
                        }), o && (m.hidden = !d), d && lt([t], !0), h.done(function () {
                            for (i in d || lt([t]), V.remove(t, "fxshow"), f) S.style(t, i, f[i])
                        })), l = me(d ? m[i] : 0, i, h), i in m || (m[i] = l.start, d && (l.end = l.start, l.start = 0))
                }],
                prefilter: function (t, e) {
                    e ? ve.prefilters.unshift(t) : ve.prefilters.push(t)
                }
            }), S.speed = function (t, e, n) {
                var i = t && "object" === rn(t) ? S.extend({}, t) : {
                    complete: n || !n && e || _(t) && t,
                    duration: t,
                    easing: n && e || e && !_(e) && e
                };
                return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    _(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue)
                }, i
            }, S.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(ot).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function (e, t, n, i) {
                    var r = S.isEmptyObject(e),
                        o = S.speed(t, n, i),
                        i = function () {
                            var t = ve(this, S.extend({}, e), o);
                            (r || V.get(this, "finish")) && t.stop(!0)
                        };
                    return i.finish = i, r || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
                },
                stop: function (r, t, o) {
                    function s(t) {
                        var e = t.stop;
                        delete t.stop, e(o)
                    }
                    return "string" != typeof r && (o = t, t = r, r = void 0), t && this.queue(r || "fx", []), this.each(function () {
                        var t = !0,
                            e = null != r && r + "queueHooks",
                            n = S.timers,
                            i = V.get(this);
                        if (e) i[e] && i[e].stop && s(i[e]);
                        else
                            for (e in i) i[e] && i[e].stop && he.test(e) && s(i[e]);
                        for (e = n.length; e--;) n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
                        !t && o || S.dequeue(this, r)
                    })
                },
                finish: function (s) {
                    return !1 !== s && (s = s || "fx"), this.each(function () {
                        var t, e = V.get(this),
                            n = e[s + "queue"],
                            i = e[s + "queueHooks"],
                            r = S.timers,
                            o = n ? n.length : 0;
                        for (e.finish = !0, S.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === s && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                        delete e.finish
                    })
                }
            }), S.each(["toggle", "show", "hide"], function (t, i) {
                var r = S.fn[i];
                S.fn[i] = function (t, e, n) {
                    return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(de(i, !0), t, e, n)
                }
            }), S.each({
                slideDown: de("show"),
                slideUp: de("hide"),
                slideToggle: de("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, i) {
                S.fn[t] = function (t, e, n) {
                    return this.animate(i, t, e, n)
                }
            }), S.timers = [], S.fx.tick = function () {
                var t, e = 0,
                    n = S.timers;
                for (le = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || S.fx.stop(), le = void 0
            }, S.fx.timer = function (t) {
                S.timers.push(t), S.fx.start()
            }, S.fx.interval = 13, S.fx.start = function () {
                ce || (ce = !0, fe())
            }, S.fx.stop = function () {
                ce = null
            }, S.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, S.fn.delay = function (i, t) {
                return i = S.fx && S.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
                    var n = w.setTimeout(t, i);
                    e.stop = function () {
                        w.clearTimeout(n)
                    }
                })
            }, Ke = T.createElement("input"), J = T.createElement("select").appendChild(T.createElement("option")), Ke.type = "checkbox", y.checkOn = "" !== Ke.value, y.optSelected = J.selected, (Ke = T.createElement("input")).value = "t", Ke.type = "radio", y.radioValue = "t" === Ke.value;
            var ge, ye = S.expr.attrHandle;
            S.fn.extend({
                attr: function (t, e) {
                    return q(this, S.attr, t, e, 1 < arguments.length)
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        S.removeAttr(this, t)
                    })
                }
            }), S.extend({
                attr: function (t, e, n) {
                    var i, r, o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? S.prop(t, e, n) : (1 === o && S.isXMLDoc(t) || (r = S.attrHooks[e.toLowerCase()] || (S.expr.match.bool.test(e) ? ge : void 0)), void 0 !== n ? null === n ? void S.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : !(r && "get" in r && null !== (i = r.get(t, e))) && null == (i = S.find.attr(t, e)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!y.radioValue && "radio" === e && k(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                },
                removeAttr: function (t, e) {
                    var n, i = 0,
                        r = e && e.match(M);
                    if (r && 1 === t.nodeType)
                        for (; n = r[i++];) t.removeAttribute(n)
                }
            }), ge = {
                set: function (t, e, n) {
                    return !1 === e ? S.removeAttr(t, n) : t.setAttribute(n, n), n
                }
            }, S.each(S.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var s = ye[e] || S.find.attr;
                ye[e] = function (t, e, n) {
                    var i, r, o = e.toLowerCase();
                    return n || (r = ye[o], ye[o] = i, i = null != s(t, e, n) ? o : null, ye[o] = r), i
                }
            });
            var _e = /^(?:input|select|textarea|button)$/i,
                xe = /^(?:a|area)$/i;

            function be(t) {
                return (t.match(M) || []).join(" ")
            }

            function we(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }

            function Te(t) {
                return Array.isArray(t) ? t : "string" == typeof t && t.match(M) || []
            }
            S.fn.extend({
                prop: function (t, e) {
                    return q(this, S.prop, t, e, 1 < arguments.length)
                },
                removeProp: function (t) {
                    return this.each(function () {
                        delete this[S.propFix[t] || t]
                    })
                }
            }), S.extend({
                prop: function (t, e, n) {
                    var i, r, o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(t) || (e = S.propFix[e] || e, r = S.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = S.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : _e.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), y.optSelected || (S.propHooks.selected = {
                get: function (t) {
                    t = t.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function (t) {
                    t = t.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                S.propFix[this.toLowerCase()] = this
            }), S.fn.extend({
                addClass: function (e) {
                    var t, n, i, r, o, s, a = 0;
                    if (_(e)) return this.each(function (t) {
                        S(this).addClass(e.call(this, t, we(this)))
                    });
                    if ((t = Te(e)).length)
                        for (; n = this[a++];)
                            if (s = we(n), i = 1 === n.nodeType && " " + be(s) + " ") {
                                for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                s !== (s = be(i)) && n.setAttribute("class", s)
                            } return this
                },
                removeClass: function (e) {
                    var t, n, i, r, o, s, a = 0;
                    if (_(e)) return this.each(function (t) {
                        S(this).removeClass(e.call(this, t, we(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = Te(e)).length)
                        for (; n = this[a++];)
                            if (s = we(n), i = 1 === n.nodeType && " " + be(s) + " ") {
                                for (o = 0; r = t[o++];)
                                    for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                                s !== (s = be(i)) && n.setAttribute("class", s)
                            } return this
                },
                toggleClass: function (r, e) {
                    var o = rn(r),
                        s = "string" === o || Array.isArray(r);
                    return "boolean" == typeof e && s ? e ? this.addClass(r) : this.removeClass(r) : _(r) ? this.each(function (t) {
                        S(this).toggleClass(r.call(this, t, we(this), e), e)
                    }) : this.each(function () {
                        var t, e, n, i;
                        if (s)
                            for (e = 0, n = S(this), i = Te(r); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                        else void 0 !== r && "boolean" !== o || ((t = we(this)) && V.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== r && V.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (t) {
                    for (var e, n = 0, i = " " + t + " "; e = this[n++];)
                        if (1 === e.nodeType && -1 < (" " + be(we(e)) + " ").indexOf(i)) return !0;
                    return !1
                }
            });
            var Se = /\r/g;
            S.fn.extend({
                val: function (e) {
                    var n, t, i, r = this[0];
                    return arguments.length ? (i = _(e), this.each(function (t) {
                        1 === this.nodeType && (null == (t = i ? e.call(this, t, S(this).val()) : e) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (t) {
                            return null == t ? "" : t + ""
                        })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
                    })) : r ? (n = S.valHooks[r.type] || S.valHooks[r.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(r, "value")) ? t : "string" == typeof (t = r.value) ? t.replace(Se, "") : null == t ? "" : t : void 0
                }
            }), S.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = S.find.attr(t, "value");
                            return null != e ? e : be(S.text(t))
                        }
                    },
                    select: {
                        get: function (t) {
                            for (var e, n = t.options, i = t.selectedIndex, r = "select-one" === t.type, o = r ? null : [], s = r ? i + 1 : n.length, a = i < 0 ? s : r ? i : 0; a < s; a++)
                                if (((e = n[a]).selected || a === i) && !e.disabled && (!e.parentNode.disabled || !k(e.parentNode, "optgroup"))) {
                                    if (e = S(e).val(), r) return e;
                                    o.push(e)
                                } return o
                        },
                        set: function (t, e) {
                            for (var n, i, r = t.options, o = S.makeArray(e), s = r.length; s--;)((i = r[s]).selected = -1 < S.inArray(S.valHooks.option.get(i), o)) && (n = !0);
                            return n || (t.selectedIndex = -1), o
                        }
                    }
                }
            }), S.each(["radio", "checkbox"], function () {
                S.valHooks[this] = {
                    set: function (t, e) {
                        if (Array.isArray(e)) return t.checked = -1 < S.inArray(S(t).val(), e)
                    }
                }, y.checkOn || (S.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), y.focusin = "onfocusin" in w;

            function Ee(t) {
                t.stopPropagation()
            }
            var ke = /^(?:focusinfocus|focusoutblur)$/;
            S.extend(S.event, {
                trigger: function (t, e, n, i) {
                    var r, o, s, a, l, c, u, h = [n || T],
                        f = g.call(t, "type") ? t.type : t,
                        p = g.call(t, "namespace") ? t.namespace.split(".") : [],
                        d = u = o = n = n || T;
                    if (3 !== n.nodeType && 8 !== n.nodeType && !ke.test(f + S.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), a = f.indexOf(":") < 0 && "on" + f, (t = t[S.expando] ? t : new S.Event(f, "object" === rn(t) && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : S.makeArray(e, [t]), c = S.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
                        if (!i && !c.noBubble && !m(n)) {
                            for (s = c.delegateType || f, ke.test(s + f) || (d = d.parentNode); d; d = d.parentNode) h.push(d), o = d;
                            o === (n.ownerDocument || T) && h.push(o.defaultView || o.parentWindow || w)
                        }
                        for (r = 0;
                            (d = h[r++]) && !t.isPropagationStopped();) u = d, t.type = 1 < r ? s : c.bindType || f, (l = (V.get(d, "events") || Object.create(null))[t.type] && V.get(d, "handle")) && l.apply(d, e), (l = a && d[a]) && l.apply && $(d) && (t.result = l.apply(d, e), !1 === t.result && t.preventDefault());
                        return t.type = f, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), e) || !$(n) || a && _(n[f]) && !m(n) && ((o = n[a]) && (n[a] = null), S.event.triggered = f, t.isPropagationStopped() && u.addEventListener(f, Ee), n[f](), t.isPropagationStopped() && u.removeEventListener(f, Ee), S.event.triggered = void 0, o && (n[a] = o)), t.result
                    }
                },
                simulate: function (t, e, n) {
                    t = S.extend(new S.Event, n, {
                        type: t,
                        isSimulated: !0
                    });
                    S.event.trigger(t, null, e)
                }
            }), S.fn.extend({
                trigger: function (t, e) {
                    return this.each(function () {
                        S.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function (t, e) {
                    var n = this[0];
                    if (n) return S.event.trigger(t, e, n, !0)
                }
            }), y.focusin || S.each({
                focus: "focusin",
                blur: "focusout"
            }, function (n, i) {
                function r(t) {
                    S.event.simulate(i, t.target, S.event.fix(t))
                }
                S.event.special[i] = {
                    setup: function () {
                        var t = this.ownerDocument || this.document || this,
                            e = V.access(t, i);
                        e || t.addEventListener(n, r, !0), V.access(t, i, (e || 0) + 1)
                    },
                    teardown: function () {
                        var t = this.ownerDocument || this.document || this,
                            e = V.access(t, i) - 1;
                        e ? V.access(t, i, e) : (t.removeEventListener(n, r, !0), V.remove(t, i))
                    }
                }
            });
            var Ce = w.location,
                Ae = {
                    guid: Date.now()
                },
                Pe = /\?/;
            S.parseXML = function (t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = (new w.DOMParser).parseFromString(t, "text/xml")
                } catch (t) {
                    e = void 0
                }
                return e && !e.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + t), e
            };
            var Oe = /\[\]$/,
                Le = /\r?\n/g,
                De = /^(?:submit|button|image|reset|file)$/i,
                Re = /^(?:input|select|textarea|keygen)/i;
            S.param = function (t, e) {
                function n(t, e) {
                    e = _(e) ? e() : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e)
                }
                var i, r = [];
                if (null == t) return "";
                if (Array.isArray(t) || t.jquery && !S.isPlainObject(t)) S.each(t, function () {
                    n(this.name, this.value)
                });
                else
                    for (i in t) ! function n(i, t, r, o) {
                        if (Array.isArray(t)) S.each(t, function (t, e) {
                            r || Oe.test(i) ? o(i, e) : n(i + "[" + ("object" === rn(e) && null != e ? t : "") + "]", e, r, o)
                        });
                        else if (r || "object" !== d(t)) o(i, t);
                        else
                            for (var e in t) n(i + "[" + e + "]", t[e], r, o)
                    }(i, t[i], e, n);
                return r.join("&")
            }, S.fn.extend({
                serialize: function () {
                    return S.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var t = S.prop(this, "elements");
                        return t ? S.makeArray(t) : this
                    }).filter(function () {
                        var t = this.type;
                        return this.name && !S(this).is(":disabled") && Re.test(this.nodeName) && !De.test(t) && (this.checked || !ct.test(t))
                    }).map(function (t, e) {
                        var n = S(this).val();
                        return null == n ? null : Array.isArray(n) ? S.map(n, function (t) {
                            return {
                                name: e.name,
                                value: t.replace(Le, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: n.replace(Le, "\r\n")
                        }
                    }).get()
                }
            });
            var Me = /%20/g,
                Ne = /#.*$/,
                je = /([?&])_=[^&]*/,
                Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                He = /^(?:GET|HEAD)$/,
                Be = /^\/\//,
                ze = {},
                qe = {},
                Xe = "*/".concat("*"),
                Fe = T.createElement("a");

            function We(o) {
                return function (t, e) {
                    "string" != typeof t && (e = t, t = "*");
                    var n, i = 0,
                        r = t.toLowerCase().match(M) || [];
                    if (_(e))
                        for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
                }
            }

            function Ye(e, i, r, o) {
                var s = {},
                    a = e === qe;

                function l(t) {
                    var n;
                    return s[t] = !0, S.each(e[t] || [], function (t, e) {
                        e = e(i, r, o);
                        return "string" != typeof e || a || s[e] ? a ? !(n = e) : void 0 : (i.dataTypes.unshift(e), l(e), !1)
                    }), n
                }
                return l(i.dataTypes[0]) || !s["*"] && l("*")
            }

            function $e(t, e) {
                var n, i, r = S.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((r[n] ? t : i = i || {})[n] = e[n]);
                return i && S.extend(!0, t, i), t
            }
            Fe.href = Ce.href, S.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ce.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ce.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Xe,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": S.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (t, e) {
                    return e ? $e($e(t, S.ajaxSettings), e) : $e(S.ajaxSettings, t)
                },
                ajaxPrefilter: We(ze),
                ajaxTransport: We(qe),
                ajax: function (t, e) {
                    "object" === rn(t) && (e = t, t = void 0), e = e || {};
                    var l, c, u, n, h, i, f, p, r, d = S.ajaxSetup({}, e),
                        m = d.context || d,
                        v = d.context && (m.nodeType || m.jquery) ? S(m) : S.event,
                        g = S.Deferred(),
                        y = S.Callbacks("once memory"),
                        _ = d.statusCode || {},
                        o = {},
                        s = {},
                        a = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function (t) {
                                var e;
                                if (f) {
                                    if (!n)
                                        for (n = {}; e = Ie.exec(u);) n[e[1].toLowerCase() + " "] = (n[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                    e = n[t.toLowerCase() + " "]
                                }
                                return null == e ? null : e.join(", ")
                            },
                            getAllResponseHeaders: function () {
                                return f ? u : null
                            },
                            setRequestHeader: function (t, e) {
                                return null == f && (t = s[t.toLowerCase()] = s[t.toLowerCase()] || t, o[t] = e), this
                            },
                            overrideMimeType: function (t) {
                                return null == f && (d.mimeType = t), this
                            },
                            statusCode: function (t) {
                                if (t)
                                    if (f) x.always(t[x.status]);
                                    else
                                        for (var e in t) _[e] = [_[e], t[e]];
                                return this
                            },
                            abort: function (t) {
                                t = t || a;
                                return l && l.abort(t), b(0, t), this
                            }
                        };
                    if (g.promise(x), d.url = ((t || d.url || Ce.href) + "").replace(Be, Ce.protocol + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(M) || [""], null == d.crossDomain) {
                        i = T.createElement("a");
                        try {
                            i.href = d.url, i.href = i.href, d.crossDomain = Fe.protocol + "//" + Fe.host != i.protocol + "//" + i.host
                        } catch (t) {
                            d.crossDomain = !0
                        }
                    }
                    if (d.data && d.processData && "string" != typeof d.data && (d.data = S.param(d.data, d.traditional)), Ye(ze, d, e, x), f) return x;
                    for (r in (p = S.event && d.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !He.test(d.type), c = d.url.replace(Ne, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Me, "+")) : (t = d.url.slice(c.length), d.data && (d.processData || "string" == typeof d.data) && (c += (Pe.test(c) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (c = c.replace(je, "$1"), t = (Pe.test(c) ? "&" : "?") + "_=" + Ae.guid++ + t), d.url = c + t), d.ifModified && (S.lastModified[c] && x.setRequestHeader("If-Modified-Since", S.lastModified[c]), S.etag[c] && x.setRequestHeader("If-None-Match", S.etag[c])), (d.data && d.hasContent && !1 !== d.contentType || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : d.accepts["*"]), d.headers) x.setRequestHeader(r, d.headers[r]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(m, x, d) || f)) return x.abort();
                    if (a = "abort", y.add(d.complete), x.done(d.success), x.fail(d.error), l = Ye(qe, d, e, x)) {
                        if (x.readyState = 1, p && v.trigger("ajaxSend", [x, d]), f) return x;
                        d.async && 0 < d.timeout && (h = w.setTimeout(function () {
                            x.abort("timeout")
                        }, d.timeout));
                        try {
                            f = !1, l.send(o, b)
                        } catch (t) {
                            if (f) throw t;
                            b(-1, t)
                        }
                    } else b(-1, "No Transport");

                    function b(t, e, n, i) {
                        var r, o, s, a = e;
                        f || (f = !0, h && w.clearTimeout(h), l = void 0, u = i || "", x.readyState = 0 < t ? 4 : 0, i = 200 <= t && t < 300 || 304 === t, n && (s = function (t, e, n) {
                            for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (i)
                                for (r in a)
                                    if (a[r] && a[r].test(i)) {
                                        l.unshift(r);
                                        break
                                    } if (l[0] in n) o = l[0];
                            else {
                                for (r in n) {
                                    if (!l[0] || t.converters[r + " " + l[0]]) {
                                        o = r;
                                        break
                                    }
                                    s = s || r
                                }
                                o = o || s
                            }
                            if (o) return o !== l[0] && l.unshift(o), n[o]
                        }(d, x, n)), !i && -1 < S.inArray("script", d.dataTypes) && (d.converters["text script"] = function () { }), s = function (t, e, n, i) {
                            var r, o, s, a, l, c = {},
                                u = t.dataTypes.slice();
                            if (u[1])
                                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                            for (o = u.shift(); o;)
                                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (!(s = c[l + " " + o] || c["* " + o]))
                                            for (r in c)
                                                if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                                    break
                                                } if (!0 !== s)
                                            if (s && t.throws) e = s(e);
                                            else try {
                                                e = s(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? t : "No conversion from " + l + " to " + o
                                                }
                                            }
                                    }
                            return {
                                state: "success",
                                data: e
                            }
                        }(d, s, x, i), i ? (d.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (S.lastModified[c] = n), (n = x.getResponseHeader("etag")) && (S.etag[c] = n)), 204 === t || "HEAD" === d.type ? a = "nocontent" : 304 === t ? a = "notmodified" : (a = s.state, r = s.data, i = !(o = s.error))) : (o = a, !t && a || (a = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || a) + "", i ? g.resolveWith(m, [r, a, x]) : g.rejectWith(m, [x, a, o]), x.statusCode(_), _ = void 0, p && v.trigger(i ? "ajaxSuccess" : "ajaxError", [x, d, i ? r : o]), y.fireWith(m, [x, a]), p && (v.trigger("ajaxComplete", [x, d]), --S.active || S.event.trigger("ajaxStop")))
                    }
                    return x
                },
                getJSON: function (t, e, n) {
                    return S.get(t, e, n, "json")
                },
                getScript: function (t, e) {
                    return S.get(t, void 0, e, "script")
                }
            }), S.each(["get", "post"], function (t, r) {
                S[r] = function (t, e, n, i) {
                    return _(e) && (i = i || n, n = e, e = void 0), S.ajax(S.extend({
                        url: t,
                        type: r,
                        dataType: i,
                        data: e,
                        success: n
                    }, S.isPlainObject(t) && t))
                }
            }), S.ajaxPrefilter(function (t) {
                for (var e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
            }), S._evalUrl = function (t, e, n) {
                return S.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () { }
                    },
                    dataFilter: function (t) {
                        S.globalEval(t, e, n)
                    }
                })
            }, S.fn.extend({
                wrapAll: function (t) {
                    return this[0] && (_(t) && (t = t.call(this[0])), t = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    }).append(this)), this
                },
                wrapInner: function (n) {
                    return _(n) ? this.each(function (t) {
                        S(this).wrapInner(n.call(this, t))
                    }) : this.each(function () {
                        var t = S(this),
                            e = t.contents();
                        e.length ? e.wrapAll(n) : t.append(n)
                    })
                },
                wrap: function (e) {
                    var n = _(e);
                    return this.each(function (t) {
                        S(this).wrapAll(n ? e.call(this, t) : e)
                    })
                },
                unwrap: function (t) {
                    return this.parent(t).not("body").each(function () {
                        S(this).replaceWith(this.childNodes)
                    }), this
                }
            }), S.expr.pseudos.hidden = function (t) {
                return !S.expr.pseudos.visible(t)
            }, S.expr.pseudos.visible = function (t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            }, S.ajaxSettings.xhr = function () {
                try {
                    return new w.XMLHttpRequest
                } catch (t) { }
            };
            var Ue = {
                0: 200,
                1223: 204
            },
                Ve = S.ajaxSettings.xhr();
            y.cors = !!Ve && "withCredentials" in Ve, y.ajax = Ve = !!Ve, S.ajaxTransport(function (r) {
                var o, s;
                if (y.cors || Ve && !r.crossDomain) return {
                    send: function (t, e) {
                        var n, i = r.xhr();
                        if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                            for (n in r.xhrFields) i[n] = r.xhrFields[n];
                        for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
                        o = function (t) {
                            return function () {
                                o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(Ue[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                    binary: i.response
                                } : {
                                    text: i.responseText
                                }, i.getAllResponseHeaders()))
                            }
                        }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
                            4 === i.readyState && w.setTimeout(function () {
                                o && s()
                            })
                        }, o = o("abort");
                        try {
                            i.send(r.hasContent && r.data || null)
                        } catch (t) {
                            if (o) throw t
                        }
                    },
                    abort: function () {
                        o && o()
                    }
                }
            }), S.ajaxPrefilter(function (t) {
                t.crossDomain && (t.contents.script = !1)
            }), S.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (t) {
                        return S.globalEval(t), t
                    }
                }
            }), S.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), S.ajaxTransport("script", function (n) {
                var i, r;
                if (n.crossDomain || n.scriptAttrs) return {
                    send: function (t, e) {
                        i = S("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", r = function (t) {
                            i.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                        }), T.head.appendChild(i[0])
                    },
                    abort: function () {
                        r && r()
                    }
                }
            });
            var Ke, Ge = [],
                Qe = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var t = Ge.pop() || S.expando + "_" + Ae.guid++;
                    return this[t] = !0, t
                }
            }), S.ajaxPrefilter("json jsonp", function (t, e, n) {
                var i, r, o, s = !1 !== t.jsonp && (Qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = _(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qe, "$1" + i) : !1 !== t.jsonp && (t.url += (Pe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                    return o || S.error(i + " was not called"), o[0]
                }, t.dataTypes[0] = "json", r = w[i], w[i] = function () {
                    o = arguments
                }, n.always(function () {
                    void 0 === r ? S(w).removeProp(i) : w[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, Ge.push(i)), o && _(r) && r(o[0]), o = r = void 0
                }), "script"
            }), y.createHTMLDocument = ((Ke = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ke.childNodes.length), S.parseHTML = function (t, e, n) {
                return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (y.createHTMLDocument ? ((i = (e = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, e.head.appendChild(i)) : e = T), i = !n && [], (n = C.exec(t)) ? [e.createElement(n[1])] : (n = vt([t], e, i), i && i.length && S(i).remove(), S.merge([], n.childNodes)));
                var i
            }, S.fn.load = function (t, e, n) {
                var i, r, o, s = this,
                    a = t.indexOf(" ");
                return -1 < a && (i = be(t.slice(a)), t = t.slice(0, a)), _(e) ? (n = e, e = void 0) : e && "object" === rn(e) && (r = "POST"), 0 < s.length && S.ajax({
                    url: t,
                    type: r || "GET",
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    o = arguments, s.html(i ? S("<div>").append(S.parseHTML(t)).find(i) : t)
                }).always(n && function (t, e) {
                    s.each(function () {
                        n.apply(this, o || [t.responseText, e, t])
                    })
                }), this
            }, S.expr.pseudos.animated = function (e) {
                return S.grep(S.timers, function (t) {
                    return e === t.elem
                }).length
            }, S.offset = {
                setOffset: function (t, e, n) {
                    var i, r, o, s, a = S.css(t, "position"),
                        l = S(t),
                        c = {};
                    "static" === a && (t.style.position = "relative"), o = l.offset(), i = S.css(t, "top"), s = S.css(t, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (r = (a = l.position()).top, a.left) : (r = parseFloat(i) || 0, parseFloat(s) || 0), _(e) && (e = e.call(t, n, S.extend({}, o))), null != e.top && (c.top = e.top - o.top + r), null != e.left && (c.left = e.left - o.left + s), "using" in e ? e.using.call(t, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), l.css(c))
                }
            }, S.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        S.offset.setOffset(this, e, t)
                    });
                    var t, n = this[0];
                    return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var t, e, n, i = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === S.css(i, "position")) e = i.getBoundingClientRect();
                        else {
                            for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === S.css(t, "position");) t = t.parentNode;
                            t && t !== i && 1 === t.nodeType && ((r = S(t).offset()).top += S.css(t, "borderTopWidth", !0), r.left += S.css(t, "borderLeftWidth", !0))
                        }
                        return {
                            top: e.top - r.top - S.css(i, "marginTop", !0),
                            left: e.left - r.left - S.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent; t && "static" === S.css(t, "position");) t = t.offsetParent;
                        return t || nt
                    })
                }
            }), S.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (e, r) {
                var o = "pageYOffset" === r;
                S.fn[e] = function (t) {
                    return q(this, function (t, e, n) {
                        var i;
                        return m(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n ? i ? i[r] : t[e] : void (i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[e] = n)
                    }, e, t, arguments.length)
                }
            }), S.each(["top", "left"], function (t, n) {
                S.cssHooks[n] = Kt(y.pixelPosition, function (t, e) {
                    if (e) return e = Vt(t, n), Ft.test(e) ? S(t).position()[n] + "px" : e
                })
            }), S.each({
                Height: "height",
                Width: "width"
            }, function (s, a) {
                S.each({
                    padding: "inner" + s,
                    content: a,
                    "": "outer" + s
                }, function (i, o) {
                    S.fn[o] = function (t, e) {
                        var n = arguments.length && (i || "boolean" != typeof t),
                            r = i || (!0 === t || !0 === e ? "margin" : "border");
                        return q(this, function (t, e, n) {
                            var i;
                            return m(t) ? 0 === o.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? S.css(t, e, r) : S.style(t, e, n, r)
                        }, a, n ? t : void 0, n)
                    }
                })
            }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                S.fn[e] = function (t) {
                    return this.on(e, t)
                }
            }), S.fn.extend({
                bind: function (t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function (t, e) {
                    return this.off(t, null, e)
                },
                delegate: function (t, e, n, i) {
                    return this.on(e, t, n, i)
                },
                undelegate: function (t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                },
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
                S.fn[n] = function (t, e) {
                    return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
                }
            });
            var Ze = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            S.proxy = function (t, e) {
                var n, i;
                if ("string" == typeof e && (i = t[e], e = t, t = i), _(t)) return n = a.call(arguments, 2), (i = function () {
                    return t.apply(e || this, n.concat(a.call(arguments)))
                }).guid = t.guid = t.guid || S.guid++, i
            }, S.holdReady = function (t) {
                t ? S.readyWait++ : S.ready(!0)
            }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = k, S.isFunction = _, S.isWindow = m, S.camelCase = Y, S.type = d, S.now = Date.now, S.isNumeric = function (t) {
                var e = S.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            }, S.trim = function (t) {
                return null == t ? "" : (t + "").replace(Ze, "")
            }, void 0 === (nn = function () {
                return S
            }.apply(on, [])) || (en.exports = nn);
            var Je = w.jQuery,
                tn = w.$;
            return S.noConflict = function (t) {
                return w.$ === S && (w.$ = tn), t && w.jQuery === S && (w.jQuery = Je), S
            }, void 0 === t && (w.jQuery = w.$ = S), S
        })
    }).call(this, e(1)(t))
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () { }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (e, t) {
    (function (t) {
        e.exports = t
    }).call(this, {})
}, function (t, e, n) {
    var i, r, o;
    /*!
     * fullPage 3.0.9
     * https://github.com/alvarotrigo/fullPage.js
     *
     * @license GPLv3 for open source use only
     * or Fullpage Commercial License for commercial use
     * http://alvarotrigo.com/fullPage/pricing/
     *
     * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
     */
    i = this, r = window, o = document, void 0 === (e = function () {
        return i.fullpage = function (Me, Rn) {
            "use strict";
            var Ne = "fullpage-wrapper",
                je = "." + Ne,
                t, e = "." + "fp-scrollable",
                Ie = "fp-responsive",
                He = "fp-notransition",
                Be = "fp-destroyed",
                ze = "fp-enabled",
                qe = "fp-viewing",
                Xe = "active",
                Fe = "." + Xe,
                We = "fp-completely",
                n = "." + We,
                i = ".section",
                Mn = "fp-section",
                Ye = "." + Mn,
                $e = Ye + Fe,
                Ue = "fp-tableCell",
                Ve = "." + Ue,
                Ke = "fp-auto-height",
                r = "." + Ke,
                o, s = "." + "fp-auto-height-responsive",
                Ge = "fp-normal-scroll",
                a = "." + Ge,
                l, Qe = "#" + "fp-nav",
                Ze = "fp-tooltip",
                c = "." + Ze,
                u = "fp-show-active",
                h = ".slide",
                Nn = "fp-slide",
                Je = "." + Nn,
                tn = Je + Fe,
                en = "fp-slides",
                nn = "." + en,
                rn = "fp-slidesContainer",
                on = "." + rn,
                sn = "fp-table",
                an = "fp-slidesNav",
                ln = "." + an,
                cn = ln + " a",
                f = "fp-controlArrow",
                un = "." + f,
                hn = "fp-prev",
                p, d = f + " " + hn,
                fn = un + ("." + hn),
                m = "fp-next",
                v, g = f + " " + m,
                pn = un + ("." + m);

            function y(t, f) {
                var n = f && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(f.licenseKey) || -1 < Rn.domain.indexOf("alvarotrigo.com"),
                    i = jn("html, body"),
                    s = jn("html")[0],
                    p = jn("body")[0];
                if (vn(s, ze)) return void Ae();
                var u = {};
                f = mn({
                    menu: !1,
                    anchors: [],
                    lockAnchors: !1,
                    navigation: !1,
                    navigationPosition: "right",
                    navigationTooltips: [],
                    showActiveTooltip: !1,
                    slidesNavigation: !1,
                    slidesNavPosition: "bottom",
                    scrollBar: !1,
                    hybrid: !1,
                    css3: !0,
                    scrollingSpeed: 700,
                    autoScrolling: !0,
                    fitToSection: !0,
                    fitToSectionDelay: 1e3,
                    easing: "easeInOutCubic",
                    easingcss3: "ease",
                    loopBottom: !1,
                    loopTop: !1,
                    loopHorizontal: !0,
                    continuousVertical: !1,
                    continuousHorizontal: !1,
                    scrollHorizontally: !1,
                    interlockedSlides: !1,
                    dragAndMove: !1,
                    offsetSections: !1,
                    resetSliders: !1,
                    fadingEffect: !1,
                    normalScrollElements: null,
                    scrollOverflow: !1,
                    scrollOverflowReset: !1,
                    scrollOverflowHandler: Me.fp_scrolloverflow ? Me.fp_scrolloverflow.iscrollHandler : null,
                    scrollOverflowOptions: null,
                    touchSensitivity: 5,
                    touchWrapper: "string" == typeof t ? jn(t)[0] : t,
                    bigSectionsDestination: null,
                    keyboardScrolling: !0,
                    animateAnchor: !0,
                    recordHistory: !0,
                    controlArrows: !0,
                    controlArrowColor: "#fff",
                    verticalCentered: !0,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null,
                    responsive: 0,
                    responsiveWidth: 0,
                    responsiveHeight: 0,
                    responsiveSlides: !1,
                    parallax: !1,
                    parallaxOptions: {
                        type: "reveal",
                        percentage: 62,
                        property: "translate"
                    },
                    cards: !1,
                    cardsOptions: {
                        perspective: 100,
                        fadeContent: !0,
                        fadeBackground: !0
                    },
                    sectionSelector: ".section",
                    slideSelector: ".slide",
                    v2compatible: !1,
                    afterLoad: null,
                    onLeave: null,
                    afterRender: null,
                    afterResize: null,
                    afterReBuild: null,
                    afterSlideLoad: null,
                    onSlideLeave: null,
                    afterResponsive: null,
                    lazyLoading: !0
                }, f);
                var d, r, o, a, l = !1,
                    c = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    h = "ontouchstart" in Me || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                    m = "string" == typeof t ? jn(t)[0] : t,
                    v = gn(),
                    g = yn(),
                    y = !1,
                    e = !0,
                    _ = !0,
                    x = [],
                    b = {
                        m: {
                            up: !0,
                            down: !0,
                            left: !0,
                            right: !0
                        }
                    };
                b.k = mn({}, b.m);
                var w, T, S, E, k, C, A, P, O, t = function () {
                    var t;
                    t = Me.PointerEvent ? {
                        down: "pointerdown",
                        move: "pointermove"
                    } : {
                        down: "MSPointerDown",
                        move: "MSPointerMove"
                    };
                    return t
                }(),
                    L = {
                        touchmove: "ontouchmove" in Me ? "touchmove" : t.move,
                        touchstart: "ontouchstart" in Me ? "touchstart" : t.down
                    },
                    D = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                    R = !1;
                try {
                    var M = Object.defineProperty({}, "passive", {
                        get: function () {
                            R = !0
                        }
                    });
                    Me.addEventListener("testPassive", null, M), Me.removeEventListener("testPassive", null, M)
                } catch (t) { }
                var N, j, I, H = mn({}, f),
                    B = !1,
                    z = !0,
                    q = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards"];

                function X(t, e) {
                    t || Se(0), Ce("autoScrolling", t, e);
                    e = jn($e)[0];
                    f.autoScrolling && !f.scrollBar ? (_n(i, {
                        overflow: "hidden",
                        height: "100%"
                    }), F(H.recordHistory, "internal"), _n(m, {
                        "-ms-touch-action": "none",
                        "touch-action": "none"
                    }), null != e && Se(e.offsetTop)) : (_n(i, {
                        overflow: "visible",
                        height: "initial"
                    }), F(!!f.autoScrolling && H.recordHistory, "internal"), _n(m, {
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), null != e && (e = Mt(e.offsetTop)).element.scrollTo(0, e.options))
                }

                function F(t, e) {
                    Ce("recordHistory", t, e)
                }

                function W(t, e) {
                    Ce("scrollingSpeed", t, e)
                }

                function Y(t, e) {
                    Ce("fitToSection", t, e)
                }

                function $(t) {
                    f.lockAnchors = t
                }

                function $(t) {
                    t ? (function () {
                        var t, e = "";
                        Me.addEventListener ? t = "addEventListener" : (t = "attachEvent", e = "on");
                        var n = "onwheel" in Rn.createElement("div") ? "wheel" : void 0 !== Rn.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                            i = !!R && {
                                passive: !1
                            };
                        "DOMMouseScroll" == n ? Rn[t](e + "MozMousePixelScroll", kt, i) : Rn[t](e + n, kt, i)
                    }(), m.addEventListener("mousedown", Kt), m.addEventListener("mouseup", Gt)) : (Rn.addEventListener ? (Rn.removeEventListener("mousewheel", kt, !1), Rn.removeEventListener("wheel", kt, !1), Rn.removeEventListener("MozMousePixelScroll", kt, !1)) : Rn.detachEvent("onmousewheel", kt), m.removeEventListener("mousedown", Kt), m.removeEventListener("mouseup", Gt))
                }

                function U(e, t) {
                    void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
                        ke(e, t, "m")
                    }) : ke(e, "all", "m")
                }

                function V(t) {
                    t ? ($(!0), function () {
                        {
                            var t;
                            (c || h) && (f.autoScrolling && (p.removeEventListener(L.touchmove, vt, {
                                passive: !1
                            }), p.addEventListener(L.touchmove, vt, {
                                passive: !1
                            })), (t = f.touchWrapper).removeEventListener(L.touchstart, Tt), t.removeEventListener(L.touchmove, bt, {
                                passive: !1
                            }), t.addEventListener(L.touchstart, Tt), t.addEventListener(L.touchmove, bt, {
                                passive: !1
                            }))
                        }
                    }()) : ($(!1), function () {
                        {
                            var t;
                            (c || h) && (f.autoScrolling && (p.removeEventListener(L.touchmove, bt, {
                                passive: !1
                            }), p.removeEventListener(L.touchmove, vt, {
                                passive: !1
                            })), (t = f.touchWrapper).removeEventListener(L.touchstart, Tt), t.removeEventListener(L.touchmove, bt, {
                                passive: !1
                            }))
                        }
                    }())
                }

                function K(e, t) {
                    void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
                        ke(e, t, "k")
                    }) : (ke(e, "all", "k"), f.keyboardScrolling = e)
                }

                function G() {
                    var t = xn(jn($e)[0], Ye);
                    t || !f.loopTop && !f.continuousVertical || (t = Sn(jn(Ye))), null != t && Ot(t, null, !0)
                }

                function Q() {
                    var t = bn(jn($e)[0], Ye);
                    t || !f.loopBottom && !f.continuousVertical || (t = jn(Ye)[0]), null != t && Ot(t, null, !1)
                }

                function Z(t, e) {
                    W(0, "internal"), J(t, e), W(H.scrollingSpeed, "internal")
                }

                function J(t, e) {
                    var n = me(t);
                    void 0 !== e ? ve(t, e) : null != n && Ot(n)
                }

                function tt(t) {
                    Ct("right", t)
                }

                function et(t) {
                    Ct("left", t)
                }

                function nt(t) {
                    if (!vn(m, Be)) {
                        y = !0, v = gn(), g = yn();
                        for (var e = jn(Ye), n = 0; n < e.length; ++n) {
                            var i = e[n],
                                r = jn(nn, i)[0],
                                o = jn(Je, i);
                            f.verticalCentered && _n(jn(Ve, i), {
                                height: pe(i) + "px"
                            }), _n(i, {
                                height: v + "px"
                            }), 1 < o.length && ne(r, jn(tn, r)[0])
                        }
                        f.scrollOverflow && w.createScrollBarForAll();
                        var s = En(jn($e)[0], Ye);
                        s && Z(s + 1), y = !1, Wn(f.afterResize) && t && f.afterResize.call(m, Me.innerWidth, Me.innerHeight), Wn(f.afterReBuild) && !t && f.afterReBuild.call(m)
                    }
                }

                function it() {
                    return vn(p, Ie)
                }

                function rt(t) {
                    var e = it();
                    t ? e || (X(!1, "internal"), Y(!1, "internal"), kn(jn(Qe)), In(p, Ie), Wn(f.afterResponsive) && f.afterResponsive.call(m, t), f.scrollOverflow && w.createScrollBarForAll()) : e && (X(H.autoScrolling, "internal"), Y(H.autoScrolling, "internal"), Cn(jn(Qe)), An(p, Ie), Wn(f.afterResponsive) && f.afterResponsive.call(m, t))
                }
                if (Ae(), Me.fp_easings = mn(Me.fp_easings, {
                    easeInOutCubic: function (t, e, n, i) {
                        return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                    }
                }), m) u.version = "3.0.8", u.setAutoScrolling = X, u.setRecordHistory = F, u.setScrollingSpeed = W, u.setFitToSection = Y, u.setLockAnchors = function (t) {
                    f.lockAnchors = t
                }, u.setMouseWheelScrolling = $, u.setAllowScrolling = U, u.setKeyboardScrolling = K, u.moveSectionUp = G, u.moveSectionDown = Q, u.silentMoveTo = Z, u.moveTo = J, u.moveSlideRight = tt, u.moveSlideLeft = et, u.fitToSection = dt, u.reBuild = nt, u.setResponsive = rt, u.getFullpageData = function () {
                    return f
                }, u.destroy = function (t) {
                    X(!1, "internal"), U(!0), V(!1), K(!1), In(m, Be), [k, E, T, C, A, O, S, I].forEach(function (t) {
                        clearTimeout(t)
                    }), Me.removeEventListener("scroll", pt), Me.removeEventListener("hashchange", Yt), Me.removeEventListener("resize", oe), Rn.removeEventListener("keydown", Ut), Rn.removeEventListener("keyup", Vt), ["click", "touchstart"].forEach(function (t) {
                        Rn.removeEventListener(t, ot)
                    }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (t) {
                        Rn.removeEventListener(t, at, !0)
                    }), t && (Se(0), jn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", m).forEach(function (t) {
                        jt(t, "src")
                    }), jn("img[data-srcset]").forEach(function (t) {
                        jt(t, "srcset")
                    }), Kn(jn(Qe + ", " + ln + ", " + un)), _n(jn(Ye), {
                        height: "",
                        "background-color": "",
                        padding: ""
                    }), _n(jn(Je), {
                        width: ""
                    }), _n(m, {
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), _n(i, {
                        overflow: "",
                        height: ""
                    }), An(s, ze), An(p, Ie), p.className.split(/\s+/).forEach(function (t) {
                        0 === t.indexOf(qe) && An(p, t)
                    }), jn(Ye + ", " + Je).forEach(function (t) {
                        f.scrollOverflowHandler && f.scrollOverflow && f.scrollOverflowHandler.remove(t), An(t, sn + " " + Xe + " " + We), t.getAttribute("data-fp-styles") && t.setAttribute("style", t.getAttribute("data-fp-styles")), vn(t, Mn) && !B && t.removeAttribute("data-anchor")
                    }), ce(m), [Ve, on, nn].forEach(function (t) {
                        jn(t, m).forEach(function (t) {
                            Dn(t)
                        })
                    }), _n(m, {
                        "-webkit-transition": "none",
                        transition: "none"
                    }), Me.scrollTo(0, 0), [Mn, Nn, rn].forEach(function (t) {
                        An(jn("." + t), t)
                    }))
                }, u.getActiveSection = function () {
                    return new De(jn($e)[0])
                }, u.getActiveSlide = function () {
                    return Rt(jn(tn, jn($e)[0])[0])
                }, u.test = {
                    top: "0px",
                    translate3d: "translate3d(0px, 0px, 0px)",
                    translate3dH: function () {
                        for (var t = [], e = 0; e < jn(f.sectionSelector, m).length; e++) t.push("translate3d(0px, 0px, 0px)");
                        return t
                    }(),
                    left: function () {
                        for (var t = [], e = 0; e < jn(f.sectionSelector, m).length; e++) t.push(0);
                        return t
                    }(),
                    options: f,
                    setAutoScrolling: X
                }, u.shared = {
                    afterRenderActions: ut,
                    isNormalScrollElement: !1
                }, Me.fullpage_api = u, f.$ && Object.keys(u).forEach(function (t) {
                    f.$.fn.fullpage[t] = u[t]
                }),
                    function () {
                        f.css3 && (f.css3 = function () {
                            var t, e, n = Rn.createElement("p"),
                                i = {
                                    webkitTransform: "-webkit-transform",
                                    OTransform: "-o-transform",
                                    msTransform: "-ms-transform",
                                    MozTransform: "-moz-transform",
                                    transform: "transform"
                                };
                            for (e in n.style.display = "block", Rn.body.insertBefore(n, null), i) void 0 !== n.style[e] && (n.style[e] = "translate3d(1px,1px,1px)", t = Me.getComputedStyle(n).getPropertyValue(i[e]));
                            return Rn.body.removeChild(n), void 0 !== t && 0 < t.length && "none" !== t
                        }());
                        f.scrollBar = f.scrollBar || f.hybrid,
                            function () {
                                f.anchors.length || (t = "[data-anchor]", (t = jn(f.sectionSelector.split(",").join(t + ",") + t, m)).length && t.length === jn(Ye).length && (B = !0, t.forEach(function (t) {
                                    f.anchors.push(t.getAttribute("data-anchor").toString())
                                }))); {
                                    var t;
                                    f.navigationTooltips.length || (t = "[data-tooltip]", (t = jn(f.sectionSelector.split(",").join(t + ",") + t, m)).length && t.forEach(function (t) {
                                        f.navigationTooltips.push(t.getAttribute("data-tooltip").toString())
                                    }))
                                }
                            }(),
                            function () {
                                _n(m, {
                                    height: "100%",
                                    position: "relative"
                                }), In(m, Ne), In(s, ze), v = gn(), An(m, Be), In(jn(f.sectionSelector, m), Mn), In(jn(f.slideSelector, m), Nn);
                                for (var t = jn(Ye), e = 0; e < t.length; e++) {
                                    var n = e,
                                        i = t[e],
                                        r = jn(Je, i),
                                        o = r.length;
                                    i.setAttribute("data-fp-styles", i.getAttribute("style")),
                                        function (t, e) {
                                            e || null != jn($e)[0] || In(t, Xe);
                                            a = jn($e)[0], _n(t, {
                                                height: v + "px"
                                            }), f.paddingTop && _n(t, {
                                                "padding-top": f.paddingTop
                                            });
                                            f.paddingBottom && _n(t, {
                                                "padding-bottom": f.paddingBottom
                                            });
                                            void 0 !== f.sectionsColor[e] && _n(t, {
                                                "background-color": f.sectionsColor[e]
                                            });
                                            void 0 !== f.anchors[e] && t.setAttribute("data-anchor", f.anchors[e])
                                        }(i, n),
                                        function (t, e) {
                                            void 0 !== f.anchors[e] && vn(t, Xe) && ue(f.anchors[e], e);
                                            f.menu && f.css3 && null != Hn(jn(f.menu)[0], je) && jn(f.menu).forEach(function (t) {
                                                p.appendChild(t)
                                            })
                                        }(i, n), 0 < o ? function (t, e, n) {
                                            var i = 100 * n,
                                                r = 100 / n,
                                                o = Rn.createElement("div");
                                            o.className = en, On(e, o);
                                            o = Rn.createElement("div");
                                            o.className = rn, On(e, o), _n(jn(on, t), {
                                                width: i + "%"
                                            }), 1 < n && (f.controlArrows && function (t) {
                                                var e = [Vn('<div class="fp-controlArrow fp-prev"></div>'), Vn('<div class="fp-controlArrow fp-next"></div>')];
                                                Bn(jn(nn, t)[0], e), "#fff" !== f.controlArrowColor && (_n(jn(pn, t), {
                                                    "border-color": "transparent transparent transparent " + f.controlArrowColor
                                                }), _n(jn(fn, t), {
                                                    "border-color": "transparent " + f.controlArrowColor + " transparent transparent"
                                                }));
                                                f.loopHorizontal || kn(jn(fn, t))
                                            }(t), f.slidesNavigation && function (t, e) {
                                                Pn(Vn('<div class="' + an + '"><ul></ul></div>'), t);
                                                var n = jn(ln, t)[0];
                                                In(n, "fp-" + f.slidesNavPosition);
                                                for (var i = 0; i < e; i++) {
                                                    var r = jn(Je, t)[i];
                                                    Pn(Vn('<li><a href="#"><span class="fp-sr-only">' + ct(i, "Slide", r) + "</span><span></span></a></li>"), jn("ul", n)[0])
                                                }
                                                _n(n, {
                                                    "margin-left": "-" + n.innerWidth / 2 + "px"
                                                }), In(jn("a", jn("li", n)[0]), Xe)
                                            }(t, n));
                                            e.forEach(function (t) {
                                                _n(t, {
                                                    width: r + "%"
                                                }), f.verticalCentered && fe(t)
                                            });
                                            t = jn(tn, t)[0];
                                            null != t && (0 !== En(jn($e), Ye) || 0 === En(jn($e), Ye) && 0 !== En(t)) ? Te(t, "internal") : In(e[0], Xe)
                                        }(i, r, o) : f.verticalCentered && fe(i)
                                }
                                f.fixedElements && f.css3 && jn(f.fixedElements).forEach(function (t) {
                                    p.appendChild(t)
                                });
                                f.navigation && function () {
                                    var t = Rn.createElement("div");
                                    t.setAttribute("id", "fp-nav");
                                    var e = Rn.createElement("ul");
                                    t.appendChild(e), Pn(t, p);
                                    t = jn(Qe)[0];
                                    In(t, "fp-" + f.navigationPosition), f.showActiveTooltip && In(t, "fp-show-active");
                                    for (var n = "", i = 0; i < jn(Ye).length; i++) {
                                        var r = "";
                                        f.anchors.length && (r = f.anchors[i]), n += '<li><a href="#' + r + '"><span class="fp-sr-only">' + ct(i, "Section") + "</span><span></span></a>";
                                        r = f.navigationTooltips[i];
                                        void 0 !== r && "" !== r && (n += '<div class="' + Ze + " fp-" + f.navigationPosition + '">' + r + "</div>"), n += "</li>"
                                    }
                                    jn("ul", t)[0].innerHTML = n;
                                    t = jn("li", jn(Qe)[0])[En(jn($e)[0], Ye)];
                                    In(jn("a", t), Xe)
                                }();
                                jn('iframe[src*="youtube.com/embed/"]', m).forEach(function (t) {
                                    var e, n;
                                    n = "enablejsapi=1", t = (e = t).getAttribute("src"), e.setAttribute("src", t + function (t) {
                                        return /\?/.test(t) ? "&" : "?"
                                    }(t) + n)
                                }), f.scrollOverflow && (w = f.scrollOverflowHandler.init(f))
                            }(), U(!0), V(!0), X(f.autoScrolling, "internal"), ae(), be(), "complete" === Rn.readyState && Wt();
                        Me.addEventListener("load", Wt), f.scrollOverflow || ut();
                        ! function () {
                            for (var t = 1; t < 4; t++) O = setTimeout(lt, 350 * t)
                        }()
                    }(), Me.addEventListener("scroll", pt), Me.addEventListener("hashchange", Yt), Me.addEventListener("focus", Zt), Me.addEventListener("blur", Jt), Me.addEventListener("resize", oe), Rn.addEventListener("keydown", Ut), Rn.addEventListener("keyup", Vt), ["click", "touchstart"].forEach(function (t) {
                        Rn.addEventListener(t, ot)
                    }), f.normalScrollElements && (["mouseenter", "touchstart"].forEach(function (t) {
                        st(t, !1)
                    }), ["mouseleave", "touchend"].forEach(function (t) {
                        st(t, !0)
                    }));

                function st() {
                    if (f.css3) f.css3 = function () {
                        var t, e, n = Rn.createElement("p"),
                            i = {
                                webkitTransform: "-webkit-transform",
                                OTransform: "-o-transform",
                                msTransform: "-ms-transform",
                                MozTransform: "-moz-transform",
                                transform: "transform"
                            };
                        for (e in n.style.display = "block", Rn.body.insertBefore(n, null), i) void 0 !== n.style[e] && (n.style[e] = "translate3d(1px,1px,1px)", t = Me.getComputedStyle(n).getPropertyValue(i[e]));
                        return Rn.body.removeChild(n), void 0 !== t && 0 < t.length && "none" !== t
                    }();
                    if (f.scrollBar = f.scrollBar || f.hybrid, function () {
                        f.anchors.length || (t = "[data-anchor]", (t = jn(f.sectionSelector.split(",").join(t + ",") + t, m)).length && t.length === jn(Ye).length && (B = !0, t.forEach(function (t) {
                            f.anchors.push(t.getAttribute("data-anchor").toString())
                        }))); {
                            var t;
                            f.navigationTooltips.length || (t = "[data-tooltip]", (t = jn(f.sectionSelector.split(",").join(t + ",") + t, m)).length && t.forEach(function (t) {
                                f.navigationTooltips.push(t.getAttribute("data-tooltip").toString())
                            }))
                        }
                    }(), function () {
                        _n(m, {
                            height: "100%",
                            position: "relative"
                        }), In(m, Ne), In(s, ze), v = gn(), An(m, Be), In(jn(f.sectionSelector, m), Mn), In(jn(f.slideSelector, m), Nn);
                        for (var t = jn(Ye), e = 0; e < t.length; e++) {
                            var n = e,
                                i = t[e],
                                r = jn(Je, i),
                                o = r.length;
                            i.setAttribute("data-fp-styles", i.getAttribute("style")),
                                function (t, e) {
                                    e || null != jn($e)[0] || In(t, Xe);
                                    a = jn($e)[0], _n(t, {
                                        height: v + "px"
                                    }), f.paddingTop && _n(t, {
                                        "padding-top": f.paddingTop
                                    });
                                    f.paddingBottom && _n(t, {
                                        "padding-bottom": f.paddingBottom
                                    });
                                    void 0 !== f.sectionsColor[e] && _n(t, {
                                        "background-color": f.sectionsColor[e]
                                    });
                                    void 0 !== f.anchors[e] && t.setAttribute("data-anchor", f.anchors[e])
                                }(i, n),
                                function (t, e) {
                                    void 0 !== f.anchors[e] && vn(t, Xe) && ue(f.anchors[e], e);
                                    f.menu && f.css3 && null != Hn(jn(f.menu)[0], je) && jn(f.menu).forEach(function (t) {
                                        p.appendChild(t)
                                    })
                                }(i, n), 0 < o ? function (t, e, n) {
                                    var i = 100 * n,
                                        r = 100 / n,
                                        o = Rn.createElement("div");
                                    o.className = en, On(e, o);
                                    o = Rn.createElement("div");
                                    o.className = rn, On(e, o), _n(jn(on, t), {
                                        width: i + "%"
                                    }), 1 < n && (f.controlArrows && function (t) {
                                        var e = [Vn('<div class="fp-controlArrow fp-prev"></div>'), Vn('<div class="fp-controlArrow fp-next"></div>')];
                                        Bn(jn(nn, t)[0], e), "#fff" !== f.controlArrowColor && (_n(jn(pn, t), {
                                            "border-color": "transparent transparent transparent " + f.controlArrowColor
                                        }), _n(jn(fn, t), {
                                            "border-color": "transparent " + f.controlArrowColor + " transparent transparent"
                                        }));
                                        f.loopHorizontal || kn(jn(fn, t))
                                    }(t), f.slidesNavigation && function (t, e) {
                                        Pn(Vn('<div class="' + an + '"><ul></ul></div>'), t);
                                        var n = jn(ln, t)[0];
                                        In(n, "fp-" + f.slidesNavPosition);
                                        for (var i = 0; i < e; i++) {
                                            var r = jn(Je, t)[i];
                                            Pn(Vn('<li><a href="#"><span class="fp-sr-only">' + ct(i, "Slide", r) + "</span><span></span></a></li>"), jn("ul", n)[0])
                                        }
                                        _n(n, {
                                            "margin-left": "-" + n.innerWidth / 2 + "px"
                                        }), In(jn("a", jn("li", n)[0]), Xe)
                                    }(t, n));
                                    e.forEach(function (t) {
                                        _n(t, {
                                            width: r + "%"
                                        }), f.verticalCentered && fe(t)
                                    });
                                    t = jn(tn, t)[0];
                                    null != t && (0 !== En(jn($e), Ye) || 0 === En(jn($e), Ye) && 0 !== En(t)) ? Te(t, "internal") : In(e[0], Xe)
                                }(i, r, o) : f.verticalCentered && fe(i)
                        }
                        f.fixedElements && f.css3 && jn(f.fixedElements).forEach(function (t) {
                            p.appendChild(t)
                        });
                        f.navigation && function () {
                            var t = Rn.createElement("div");
                            t.setAttribute("id", "fp-nav");
                            var e = Rn.createElement("ul");
                            t.appendChild(e), Pn(t, p);
                            t = jn(Qe)[0];
                            In(t, "fp-" + f.navigationPosition), f.showActiveTooltip && In(t, "fp-show-active");
                            for (var n = "", i = 0; i < jn(Ye).length; i++) {
                                var r = "";
                                f.anchors.length && (r = f.anchors[i]), n += '<li><a href="#' + r + '"><span class="fp-sr-only">' + ct(i, "Section") + "</span><span></span></a>";
                                r = f.navigationTooltips[i];
                                void 0 !== r && "" !== r && (n += '<div class="' + Ze + " fp-" + f.navigationPosition + '">' + r + "</div>"), n += "</li>"
                            }
                            jn("ul", t)[0].innerHTML = n;
                            t = jn("li", jn(Qe)[0])[En(jn($e)[0], Ye)];
                            In(jn("a", t), Xe)
                        }();
                        jn('iframe[src*="youtube.com/embed/"]', m).forEach(function (t) {
                            var e, n;
                            n = "enablejsapi=1", t = (e = t).getAttribute("src"), e.setAttribute("src", t + function (t) {
                                return /\?/.test(t) ? "&" : "?"
                            }(t) + n)
                        }), f.scrollOverflow && (w = f.scrollOverflowHandler.init(f))
                    }(), U(!0), V(!0), X(f.autoScrolling, "internal"), ae(), be(), "complete" === Rn.readyState) Wt();
                    if (Me.addEventListener("load", Wt), !f.scrollOverflow) ut();
                    ! function () {
                        for (var t = 1; t < 4; t++) O = setTimeout(lt, 350 * t)
                    }()
                }

                function at() {
                    if (Me.addEventListener("scroll", pt), Me.addEventListener("hashchange", Yt), Me.addEventListener("focus", Zt), Me.addEventListener("blur", Jt), Me.addEventListener("resize", oe), Rn.addEventListener("keydown", Ut), Rn.addEventListener("keyup", Vt), ["click", "touchstart"].forEach(function (t) {
                        Rn.addEventListener(t, ot)
                    }), f.normalScrollElements) ["mouseenter", "touchstart"].forEach(function (t) {
                        st(t, !1)
                    }), ["mouseleave", "touchend"].forEach(function (t) {
                        st(t, !0)
                    })
                }

                function ot(t) {
                    var e = t.target;
                    e && Hn(e, Qe + " a") ? function (t) {
                        Fn(t);
                        t = En(Hn(this, Qe + " li"));
                        Ot(jn(Ye)[t])
                    }.call(e, t) : $n(e, ".fp-tooltip") ? function () {
                        Yn(wn(this), "click")
                    }.call(e) : $n(e, un) ? function () {
                        var t = Hn(this, Ye);
                        vn(this, hn) ? b.m.left && et(t) : b.m.right && tt(t)
                    }.call(e, t) : $n(e, cn) || null != Hn(e, cn) ? function (t) {
                        Fn(t);
                        var e = jn(nn, Hn(this, Ye))[0],
                            t = jn(Je, e)[En(Hn(this, "li"))];
                        ne(e, t)
                    }.call(e, t) : Hn(e, f.menu + " [data-menuanchor]") && function (t) {
                        !jn(f.menu)[0] || !f.lockAnchors && f.anchors.length || (Fn(t), J(this.getAttribute("data-menuanchor")))
                    }.call(e, t)
                }

                function st(t, e) {
                    Rn["fp_" + t] = e, Rn.addEventListener(t, at, !0)
                }

                function at(t) {
                    var e = t.type,
                        n = !1,
                        i = f.scrollOverflow,
                        r = "mouseleave" === e ? t.toElement || t.relatedTarget : t.target;
                    if (r == Rn || !r) return V(!0), void (i && f.scrollOverflowHandler.setIscroll(r, !0));
                    "touchend" === e && (z = !1, setTimeout(function () {
                        z = !0
                    }, 800)), "mouseenter" === e && !z || (f.normalScrollElements.split(",").forEach(function (t) {
                        var e;
                        n || (e = $n(r, t), t = Hn(r, t), (e || t) && (u.shared.isNormalScrollElement || (V(!1), i && f.scrollOverflowHandler.setIscroll(r, !1)), u.shared.isNormalScrollElement = !0, n = !0))
                    }), !n && u.shared.isNormalScrollElement && (V(!0), i && f.scrollOverflowHandler.setIscroll(r, !0), u.shared.isNormalScrollElement = !1))
                }

                function ht() {
                    for (var t = 1; t < 4; t++) O = setTimeout(lt, 350 * t)
                }

                function lt() {
                    var t = gn(),
                        e = yn();
                    v === t && g === e || (v = t, g = e, nt(!0))
                }

                function pt() {
                    if (!f.anchors.length) {
                        var e = "[data-anchor]",
                            e = jn(f.sectionSelector.split(",").join(t + ",") + t, m);
                        (t = jn(f.sectionSelector.split(",").join(t + ",") + t, m)).length && t.length === jn(Ye).length && (B = !0, t.forEach(function (t) {
                            f.anchors.push(t.getAttribute("data-anchor").toString())
                        }))
                    }
                    if (!f.navigationTooltips.length) {
                        var e = "[data-tooltip]",
                            t = jn(f.sectionSelector.split(",").join(t + ",") + t, m);
                        (t = jn(f.sectionSelector.split(",").join(t + ",") + t, m)).length && t.forEach(function (t) {
                            f.navigationTooltips.push(t.getAttribute("data-tooltip").toString())
                        })
                    }
                }

                function dt() {
                    _n(m, {
                        height: "100%",
                        position: "relative"
                    }), In(m, Ne), In(s, ze), v = gn(), An(m, Be), In(jn(f.sectionSelector, m), Mn), void In(jn(f.slideSelector, m), Nn);
                    for (var t = jn(Ye), e = 0; e < t.length; e++) {
                        var n = e,
                            i = t[e],
                            r = jn(Je, i),
                            o = r.length;
                        i.setAttribute("data-fp-styles", i.getAttribute("style")),
                            function (t, e) {
                                e || null != jn($e)[0] || In(t, Xe);
                                a = jn($e)[0], _n(t, {
                                    height: v + "px"
                                }), f.paddingTop && _n(t, {
                                    "padding-top": f.paddingTop
                                });
                                f.paddingBottom && _n(t, {
                                    "padding-bottom": f.paddingBottom
                                });
                                void 0 !== f.sectionsColor[e] && _n(t, {
                                    "background-color": f.sectionsColor[e]
                                });
                                void 0 !== f.anchors[e] && t.setAttribute("data-anchor", f.anchors[e])
                            }(i, n),
                            function (t, e) {
                                void 0 !== f.anchors[e] && vn(t, Xe) && ue(f.anchors[e], e);
                                f.menu && f.css3 && null != Hn(jn(f.menu)[0], je) && jn(f.menu).forEach(function (t) {
                                    p.appendChild(t)
                                })
                            }(i, n), 0 < o ? function (t, e, n) {
                                var i = 100 * n,
                                    r = 100 / n,
                                    o = Rn.createElement("div");
                                o.className = en, On(e, o);
                                o = Rn.createElement("div");
                                o.className = rn, On(e, o), _n(jn(on, t), {
                                    width: i + "%"
                                }), 1 < n && (f.controlArrows && function (t) {
                                    var e = [Vn('<div class="fp-controlArrow fp-prev"></div>'), Vn('<div class="fp-controlArrow fp-next"></div>')];
                                    Bn(jn(nn, t)[0], e), "#fff" !== f.controlArrowColor && (_n(jn(pn, t), {
                                        "border-color": "transparent transparent transparent " + f.controlArrowColor
                                    }), _n(jn(fn, t), {
                                        "border-color": "transparent " + f.controlArrowColor + " transparent transparent"
                                    }));
                                    f.loopHorizontal || kn(jn(fn, t))
                                }(t), f.slidesNavigation && function (t, e) {
                                    Pn(Vn('<div class="' + an + '"><ul></ul></div>'), t);
                                    var n = jn(ln, t)[0];
                                    In(n, "fp-" + f.slidesNavPosition);
                                    for (var i = 0; i < e; i++) {
                                        var r = jn(Je, t)[i];
                                        Pn(Vn('<li><a href="#"><span class="fp-sr-only">' + ct(i, "Slide", r) + "</span><span></span></a></li>"), jn("ul", n)[0])
                                    }
                                    _n(n, {
                                        "margin-left": "-" + n.innerWidth / 2 + "px"
                                    }), In(jn("a", jn("li", n)[0]), Xe)
                                }(t, n));
                                e.forEach(function (t) {
                                    _n(t, {
                                        width: r + "%"
                                    }), f.verticalCentered && fe(t)
                                });
                                t = jn(tn, t)[0];
                                null != t && (0 !== En(jn($e), Ye) || 0 === En(jn($e), Ye) && 0 !== En(t)) ? Te(t, "internal") : In(e[0], Xe)
                            }(i, r, o) : f.verticalCentered && fe(i)
                    }
                    if (f.fixedElements && f.css3) jn(f.fixedElements).forEach(function (t) {
                        p.appendChild(t)
                    });
                    if (f.navigation) ! function () {
                        var t = Rn.createElement("div");
                        t.setAttribute("id", "fp-nav");
                        var e = Rn.createElement("ul");
                        t.appendChild(e), Pn(t, p);
                        t = jn(Qe)[0];
                        In(t, "fp-" + f.navigationPosition), f.showActiveTooltip && In(t, "fp-show-active");
                        for (var n = "", i = 0; i < jn(Ye).length; i++) {
                            var r = "";
                            f.anchors.length && (r = f.anchors[i]), n += '<li><a href="#' + r + '"><span class="fp-sr-only">' + ct(i, "Section") + "</span><span></span></a>";
                            r = f.navigationTooltips[i];
                            void 0 !== r && "" !== r && (n += '<div class="' + Ze + " fp-" + f.navigationPosition + '">' + r + "</div>"), n += "</li>"
                        }
                        jn("ul", t)[0].innerHTML = n;
                        t = jn("li", jn(Qe)[0])[En(jn($e)[0], Ye)];
                        In(jn("a", t), Xe)
                    }();
                    if (jn('iframe[src*="youtube.com/embed/"]', m).forEach(function (t) {
                        var e, n;
                        n = "enablejsapi=1", t = (e = t).getAttribute("src"), e.setAttribute("src", t + function (t) {
                            return /\?/.test(t) ? "&" : "?"
                        }(t) + n)
                    }), f.scrollOverflow) w = f.scrollOverflowHandler.init(f)
                }

                function mt(t, e, n) {
                    var i = 100 * n,
                        r = 100 / n,
                        o = Rn.createElement("div");
                    o.className = en, On(e, o);
                    var h = Rn.createElement("div");
                    if (o.className = rn, On(e, o), _n(jn(on, t), {
                        width: i + "%"
                    }), 1 < n) f.controlArrows && function (t) {
                        var e = [Vn('<div class="fp-controlArrow fp-prev"></div>'), Vn('<div class="fp-controlArrow fp-next"></div>')];
                        Bn(jn(nn, t)[0], e), "#fff" !== f.controlArrowColor && (_n(jn(pn, t), {
                            "border-color": "transparent transparent transparent " + f.controlArrowColor
                        }), _n(jn(fn, t), {
                            "border-color": "transparent " + f.controlArrowColor + " transparent transparent"
                        }));
                        f.loopHorizontal || kn(jn(fn, t))
                    }(t), f.slidesNavigation && function (t, e) {
                        Pn(Vn('<div class="' + an + '"><ul></ul></div>'), t);
                        var n = jn(ln, t)[0];
                        In(n, "fp-" + f.slidesNavPosition);
                        for (var i = 0; i < e; i++) {
                            var r = jn(Je, t)[i];
                            Pn(Vn('<li><a href="#"><span class="fp-sr-only">' + ct(i, "Slide", r) + "</span><span></span></a></li>"), jn("ul", n)[0])
                        }
                        _n(n, {
                            "margin-left": "-" + n.innerWidth / 2 + "px"
                        }), In(jn("a", jn("li", n)[0]), Xe)
                    }(t, n);
                    e.forEach(function (t) {
                        _n(t, {
                            width: r + "%"
                        }), f.verticalCentered && fe(t)
                    });
                    var s = jn(tn, t)[0];
                    if (null != t && (0 !== En(jn($e), Ye) || 0 === En(jn($e), Ye) && 0 !== En(t))) Te(t, "internal");
                    else In(e[0], Xe)
                }

                function vt(t, e) {
                    if (!e && null == jn($e)[0]) In(t, Xe);
                    if (a = jn($e)[0], _n(t, {
                        height: v + "px"
                    }), f.paddingTop) _n(t, {
                        "padding-top": f.paddingTop
                    });
                    if (f.paddingBottom) _n(t, {
                        "padding-bottom": f.paddingBottom
                    });
                    if (void 0 !== f.sectionsColor[e]) _n(t, {
                        "background-color": f.sectionsColor[e]
                    });
                    if (void 0 !== f.anchors[e]) t.setAttribute("data-anchor", f.anchors[e])
                }

                function gt(t, e) {
                    if (void 0 !== f.anchors[e]) vn(t, Xe) && ue(f.anchors[e], e);
                    if (f.menu && f.css3 && null != Hn(jn(f.menu)[0], je)) jn(f.menu).forEach(function (t) {
                        p.appendChild(t)
                    })
                }

                function yt() {
                    In(jn(e.sectionSelector, d), Mn), In(jn(e.slideSelector, d), Nn)
                }

                function _t(t) {
                    var e = [Vn('<div class="fp-controlArrow fp-prev"></div>'), Vn('<div class="fp-controlArrow fp-next"></div>')];
                    if (Bn(jn(nn, t)[0], e), "#fff" !== f.controlArrowColor) _n(jn(pn, t), {
                        "border-color": "transparent transparent transparent " + f.controlArrowColor
                    }), _n(jn(fn, t), {
                        "border-color": "transparent " + f.controlArrowColor + " transparent transparent"
                    });
                    if (!f.loopHorizontal) kn(jn(fn, t))
                }

                function xt() {
                    var t = Rn.createElement("div");
                    t.setAttribute("id", "fp-nav");
                    var e = Rn.createElement("ul");
                    t.appendChild(e), Pn(t, p);
                    var s = jn(Qe)[0];
                    if (In(t, "fp-" + f.navigationPosition), f.showActiveTooltip) In(t, "fp-show-active");
                    for (var n = "", i = 0; i < jn(Ye).length; i++) {
                        var r = "";
                        f.anchors.length && (r = f.anchors[i]), n += '<li><a href="#' + r + '"><span class="fp-sr-only">' + ct(i, "Section") + "</span><span></span></a>";
                        r = f.navigationTooltips[i];
                        void 0 !== r && "" !== r && (n += '<div class="' + Ze + " fp-" + f.navigationPosition + '">' + r + "</div>"), n += "</li>"
                    }
                    jn("ul", t)[0].innerHTML = n;
                    var s = jn("li", jn(Qe)[0])[En(jn($e)[0], Ye)];
                    In(jn("a", t), Xe)
                }

                function ct(t, e, n) {
                    n = "Section" === e ? f.anchors[t] : n.getAttribute("data-anchor");
                    return f.navigationTooltips[t] || n || e + " " + (t + 1)
                }

                function wt() {
                    jn('iframe[src*="youtube.com/embed/"]', m).forEach(function (t) {
                        var e, n;
                        n = "enablejsapi=1", t = (e = t).getAttribute("src"), e.setAttribute("src", t + function (t) {
                            return /\?/.test(t) ? "&" : "?"
                        }(t) + n)
                    })
                }

                function Tt(t, e) {
                    var n = (e = t).getAttribute("src");
                    e.setAttribute("src", t + function (t) {
                        return /\?/.test(t) ? "&" : "?"
                    }(t) + n)
                }

                function St(t) {
                    return /\?/.test(t) ? "&" : "?"
                }

                function ut() {
                    var t, e, n = jn($e)[0];
                    In(n, We), Ht(n), It(), zt(n), f.scrollOverflow && f.scrollOverflowHandler.afterLoad(), t = $t(), e = me(t.section), t.section && e && (void 0 === e || En(e) !== En(a)) || !Wn(f.afterLoad) || Lt("afterLoad", {
                        activeSection: n,
                        element: n,
                        direction: null,
                        anchorLink: n.getAttribute("data-anchor"),
                        sectionIndex: En(n, Ye)
                    }), Wn(f.afterRender) && Lt("afterRender")
                }

                function kt() {
                    var t = $t(),
                        e = me(t.section);
                    return !t.section || !e || void 0 !== e && En(e) === En(a)
                }
                var ht = !1,
                    ft = 0;

                function pt() {
                    if (!y && (!f.autoScrolling || f.scrollBar)) {
                        var t, e, n, i, r, o = qn(),
                            s = (e = ft < (t = o) ? "down" : "up", Pt = ft = t, e),
                            a = 0,
                            l = o + gn() / 2,
                            c = p.offsetHeight - gn() === o,
                            u = jn(Ye);
                        if (c) a = u.length - 1;
                        else if (o)
                            for (var h = 0; h < u.length; ++h) u[h].offsetTop <= l && (a = h);
                        else a = 0;
                        n = s, t = jn($e)[0].offsetTop, e = t + gn(), ("up" != n ? t <= qn() : e >= qn() + gn()) && (vn(jn($e)[0], We) || (In(jn($e)[0], We), An(Xn(jn($e)[0]), We))), vn(c = u[a], Xe) || (ht = !0, s = En(o = jn($e)[0], Ye) + 1, n = he(c), t = c.getAttribute("data-anchor"), s = {
                            activeSection: o,
                            sectionIndex: (e = En(c, Ye) + 1) - 1,
                            anchorLink: t,
                            element: c,
                            leavingSection: s,
                            direction: n
                        }, (n = jn(tn, c)[0]) && (r = n.getAttribute("data-anchor"), i = En(n)), _ && (In(c, Xe), An(Xn(c), Xe), Wn(f.onLeave) && Lt("onLeave", s), Wn(f.afterLoad) && Lt("afterLoad", s), Xt(o), Ht(c), zt(c), ue(t, e - 1), f.anchors.length && (d = t), ye(i, r, t)), clearTimeout(C), C = setTimeout(function () {
                            ht = !1
                        }, 100)), f.fitToSection && (clearTimeout(A), A = setTimeout(function () {
                            f.fitToSection && jn($e)[0].offsetHeight <= v && dt()
                        }, f.fitToSectionDelay))
                    }
                }

                function dt() {
                    _ && (y = !0, Ot(jn($e)[0]), y = !1)
                }

                function Lt(t) {
                    var e = jn($e)[0].offsetTop,
                        n = t + gn();
                    return "up" != n ? t <= qn() : e >= qn() + gn()
                }

                function Dt(t) {
                    var t = (n = (e = t).getBoundingClientRect()).top,
                        n = n.bottom;
                    return e + 2 < v && 0 < e || 2 < n && n < v
                }

                function Rt(t) {
                    var e = ft < (t = o) ? "down" : "up";
                    return Pt = ft = t, e
                }

                function mt(t) {
                    if (b.m[t]) {
                        var e = "down" === t ? Q : G;
                        if (f.scrollOverflow) {
                            var n = f.scrollOverflowHandler.scrollable(jn($e)[0]),
                                t = "down" === t ? "bottom" : "top";
                            if (null != n) {
                                if (!f.scrollOverflowHandler.isScrolled(t, n)) return 1;
                                e()
                            } else e()
                        } else e()
                    }
                }

                function vt(t) {
                    f.autoScrolling && wt(t) && b.m.up && Fn(t)
                }
                var gt = 0,
                    yt = 0,
                    _t = 0,
                    xt = 0;

                function bt(t) {
                    var e = Hn(t.target, Ye) || jn($e)[0];
                    wt(t) && (f.autoScrolling && Fn(t), t = we(t), _t = t.y, xt = t.x, jn(nn, e).length && Math.abs(yt - xt) > Math.abs(gt - _t) ? !l && Math.abs(yt - xt) > yn() / 100 * f.touchSensitivity && (xt < yt ? b.m.right && tt(e) : b.m.left && et(e)) : f.autoScrolling && _ && Math.abs(gt - _t) > Me.innerHeight / 100 * f.touchSensitivity && (_t < gt ? mt("down") : gt < _t && mt("up")))
                }

                function wt(t) {
                    return void 0 === t.pointerType || "mouse" != t.pointerType
                }

                function Tt(t) {
                    f.fitToSection && (N = !1), wt(t) && (t = we(t), gt = t.y, yt = t.x)
                }

                function St(t, e) {
                    for (var n = 0, i = t.slice(Math.max(t.length - e, 1)), r = 0; r < i.length; r++) n += i[r];
                    return Math.ceil(n / e)
                }
                var Et = (new Date).getTime();

                function kt(t) {
                    var e = (new Date).getTime(),
                        n = vn(jn(".fp-completely")[0], Ge);
                    if (!b.m.down && !b.m.up) return Fn(t), !1;
                    if (f.autoScrolling && !o && !n) {
                        var i = (t = t || Me.event).wheelDelta || -t.deltaY || -t.detail,
                            r = Math.max(-1, Math.min(1, i)),
                            n = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
                            n = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !n;
                        149 < x.length && x.shift(), x.push(Math.abs(i)), f.scrollBar && Fn(t);
                        t = e - Et;
                        return Et = e, 200 < t && (x = []), _ && (t = St(x, 10), St(x, 70) <= t && n && mt(r < 0 ? "down" : "up")), !1
                    }
                    f.fitToSection && (N = !1)
                }

                function Ct(t, e) {
                    var n = null == e ? jn($e)[0] : e,
                        i = jn(nn, n)[0];
                    if (!(null == i || l || jn(Je, i).length < 2)) {
                        e = jn(tn, i)[0], n = null;
                        if (null == (n = ("left" === t ? xn : bn)(e, Je))) {
                            if (!f.loopHorizontal) return;
                            e = Xn(e), n = "left" === t ? e[e.length - 1] : e[0]
                        }
                        l = !u.test.isTesting, ne(i, n, t)
                    }
                }

                function At() {
                    for (var t = jn(tn), e = 0; e < t.length; e++) Te(t[e], "internal")
                }
                var Pt = 0;

                function Kt(t) {
                    var r = (i = t).offsetHeight,
                        n = s = i.offsetTop,
                        o = Pt < s,
                        r = c - v + r,
                        s = f.bigSectionsDestination;
                    return v < r ? (o || s) && "bottom" !== s || (c = e) : (o || y && null == Tn(i)) && (c = e), Pt = c
                }

                function Ot(t, e, n) {
                    if (null != t) {
                        var i, r, o, s, a, l, e = {
                            element: t,
                            callback: e,
                            isMovementUp: n,
                            dtop: (r = (i = t).offsetHeight, c = s = i.offsetTop, o = Pt < s, e = c - v + r, s = f.bigSectionsDestination, v < r ? (o || s) && "bottom" !== s || (c = e) : (o || y && null == Tn(i)) && (c = e), Pt = c),
                            yMovement: he(t),
                            anchorLink: t.getAttribute("data-anchor"),
                            sectionIndex: En(t, Ye),
                            activeSlide: jn(tn, t)[0],
                            activeSection: jn($e)[0],
                            leavingSection: En(jn($e), Ye) + 1,
                            localIsResizing: y
                        };
                        if (!(e.activeSection == t && !y || f.scrollBar && qn() === e.dtop && !vn(t, Ke))) {
                            if (null != e.activeSlide && (a = e.activeSlide.getAttribute("data-anchor"), l = En(e.activeSlide)), !e.localIsResizing) {
                                var c = e.yMovement;
                                if (void 0 !== n && (c = n ? "up" : "down"), e.direction = c, Wn(f.onLeave) && !1 === Lt("onLeave", e)) return
                            }
                            f.autoScrolling && f.continuousVertical && void 0 !== e.isMovementUp && (!e.isMovementUp && "up" == e.yMovement || e.isMovementUp && "down" == e.yMovement) && (e = function (t) {
                                t.isMovementUp ? zn(jn($e)[0], Gn(t.activeSection, Ye)) : Bn(jn($e)[0], Qn(t.activeSection, Ye).reverse());
                                return Se(jn($e)[0].offsetTop), At(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.offsetTop, t.yMovement = he(t.element), t
                            }(e)), e.localIsResizing || Xt(e.activeSection), f.scrollOverflow && f.scrollOverflowHandler.beforeLeave(), In(t, Xe), An(Xn(t), Xe), Ht(t), f.scrollOverflow && f.scrollOverflowHandler.onLeave(), _ = u.test.isTesting, ye(l, a, e.anchorLink, e.sectionIndex),
                                function (t) {
                                    var e = f.scrollingSpeed < 700,
                                        n = e ? 700 : f.scrollingSpeed; {
                                        var i;
                                        f.css3 && f.autoScrolling && !f.scrollBar ? (de("translate3d(0px, -" + Math.round(t.dtop) + "px, 0px)", !0), f.scrollingSpeed ? (clearTimeout(E), E = setTimeout(function () {
                                            Nt(t), _ = !e
                                        }, f.scrollingSpeed)) : Nt(t)) : (i = Mt(t.dtop), u.test.top = -t.dtop + "px", Pe(i.element, i.options, f.scrollingSpeed, function () {
                                            f.scrollBar ? setTimeout(function () {
                                                Nt(t)
                                            }, 30) : (Nt(t), _ = !e)
                                        }))
                                    }
                                    e && (clearTimeout(I), I = setTimeout(function () {
                                        _ = !0
                                    }, n))
                                }(e), d = e.anchorLink, ue(e.anchorLink, e.sectionIndex)
                        }
                    }
                }

                function Lt(t, e) {
                    var n, e = function (t, e) {
                        var n;
                        n = f.v2compatible ? {
                            afterRender: function () {
                                return [m]
                            },
                            onLeave: function () {
                                return [e.activeSection, e.leavingSection, e.sectionIndex + 1, e.direction]
                            },
                            afterLoad: function () {
                                return [e.element, e.anchorLink, e.sectionIndex + 1]
                            },
                            afterSlideLoad: function () {
                                return [e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex]
                            },
                            onSlideLeave: function () {
                                return [e.prevSlide, e.anchorLink, e.sectionIndex + 1, e.prevSlideIndex, e.direction, e.slideIndex]
                            }
                        } : {
                            afterRender: function () {
                                return {
                                    section: Dt(jn($e)[0]),
                                    slide: Rt(jn(tn, jn($e)[0])[0])
                                }
                            },
                            onLeave: function () {
                                return {
                                    origin: Dt(e.activeSection),
                                    destination: Dt(e.element),
                                    direction: e.direction
                                }
                            },
                            afterLoad: function () {
                                return n.onLeave()
                            },
                            afterSlideLoad: function () {
                                return {
                                    section: Dt(e.section),
                                    origin: Rt(e.prevSlide),
                                    destination: Rt(e.destiny),
                                    direction: e.direction
                                }
                            },
                            onSlideLeave: function () {
                                return n.afterSlideLoad()
                            }
                        };
                        return n[t]()
                    }(t, e);
                    if (f.v2compatible) {
                        if (!1 === f[t].apply(e[0], e.slice(1))) return !1
                    } else if (Yn(m, t, e), !1 === f[t].apply(e[Object.keys(e)[0]], (n = e, Object.keys(n).map(function (t) {
                        return n[t]
                    })))) return !1;
                    return !0
                }

                function Dt(t) {
                    return t ? new De(t) : null
                }

                function Rt(t) {
                    return t ? new Re(t) : null
                }

                function te(t, e) {
                    var n;
                    if (f.v2compatible) n = {
                        afterRender: function () {
                            return [m]
                        },
                        onLeave: function () {
                            return [e.activeSection, e.leavingSection, e.sectionIndex + 1, e.direction]
                        },
                        afterLoad: function () {
                            return [e.element, e.anchorLink, e.sectionIndex + 1]
                        },
                        afterSlideLoad: function () {
                            return [e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex]
                        },
                        onSlideLeave: function () {
                            return [e.prevSlide, e.anchorLink, e.sectionIndex + 1, e.prevSlideIndex, e.direction, e.slideIndex]
                        }
                    };
                    else o = {
                        afterRender: function () {
                            return {
                                section: Dt(jn($e)[0]),
                                slide: Rt(jn(tn, jn($e)[0])[0])
                            }
                        },
                        onLeave: function () {
                            return {
                                origin: Dt(e.activeSection),
                                destination: Dt(e.element),
                                direction: e.direction
                            }
                        },
                        afterLoad: function () {
                            return n.onLeave()
                        },
                        afterSlideLoad: function () {
                            return {
                                section: Dt(e.section),
                                origin: Rt(e.prevSlide),
                                destination: Rt(e.destiny),
                                direction: e.direction
                            }
                        },
                        onSlideLeave: function () {
                            return n.afterSlideLoad()
                        }
                    };
                    return n[t]()
                }

                function ee(t) {
                    var e = f.scrollingSpeed < 700,
                        n = e ? 700 : f.scrollingSpeed;
                    if (f.css3 && f.autoScrolling && !f.scrollBar) {
                        var t;
                        de("translate3d(0px, -" + Math.round(t.dtop) + "px, 0px)", !0), f.scrollingSpeed ? (clearTimeout(E), E = setTimeout(function () {
                            Nt(t), _ = !e
                        }, f.scrollingSpeed)) : Nt(t)
                    } else {
                        var i = Mt(t.dtop);
                        u.test.top = -t.dtop + "px", Pe(i.element, i.options, f.scrollingSpeed, function () {
                            f.scrollBar ? setTimeout(function () {
                                Nt(t)
                            }, 30) : (Nt(t), _ = !e)
                        })
                    }
                    if (e) clearTimeout(I), I = setTimeout(function () {
                        _ = !0
                    }, n)
                }

                function Mt(t) {
                    var e = {};
                    return f.autoScrolling && !f.scrollBar ? (e.options = -t, e.element = jn(je)[0]) : (e.options = t, e.element = Me), e
                }

                function ie(t) {
                    if (t.isMovementUp) zn(jn($e)[0], Gn(t.activeSection, Ye));
                    else Bn(jn($e)[0], Qn(t.activeSection, Ye).reverse());
                    return Se(jn($e)[0].offsetTop), At(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.offsetTop, t.yMovement = he(t.element), t
                }

                function re(t) {
                    null != (e = t).wrapAroundElements && (e.isMovementUp ? zn(jn(Ye)[0], e.wrapAroundElements) : Bn(jn(Ye)[jn(Ye).length - 1], e.wrapAroundElements), Se(jn($e)[0].offsetTop), At())
                }

                function Nt(t) {
                    var e;
                    null != (e = t).wrapAroundElements && (e.isMovementUp ? zn(jn(Ye)[0], e.wrapAroundElements) : Bn(jn(Ye)[jn(Ye).length - 1], e.wrapAroundElements), Se(jn($e)[0].offsetTop), At()), Wn(f.afterLoad) && !t.localIsResizing && Lt("afterLoad", t), f.scrollOverflow && f.scrollOverflowHandler.afterLoad(), t.localIsResizing || zt(t.element), In(t.element, We), An(Xn(t.element), We), It(), _ = !0, Wn(t.callback) && t.callback()
                }

                function jt(t, e) {
                    t.setAttribute(e, t.getAttribute("data-" + e)), t.removeAttribute("data-" + e)
                }

                function It() {
                    var t = jn(".fp-auto-height")[0] || it() && jn(".fp-auto-height-responsive")[0];
                    f.lazyLoading && t && jn(Ye + ":not(" + Fe + ")").forEach(function (t) {
                        var e, n;
                        e = (n = (e = t).getBoundingClientRect()).top, n = n.bottom, (e + 2 < v && 0 < e || 2 < n && n < v) && Ht(t)
                    })
                }

                function Ht(i) {
                    f.lazyLoading && jn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Ft(i)).forEach(function (n) {
                        var t;
                        ["src", "srcset"].forEach(function (t) {
                            var e = n.getAttribute("data-" + t);
                            null != e && e && (jt(n, t), n.addEventListener("load", function () {
                                Bt(i)
                            }))
                        }), !$n(n, "source") || (t = Hn(n, "video, audio")) && (t.load(), t.onloadeddata = function () {
                            Bt(i)
                        })
                    })
                }

                function Bt(t) {
                    f.scrollOverflow && (clearTimeout(j), j = setTimeout(function () {
                        vn(p, Ie) || w.createScrollBar(t)
                    }, 200))
                }

                function zt(t) {
                    t = Ft(t);
                    jn("video, audio", t).forEach(function (t) {
                        t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
                    }), jn('iframe[src*="youtube.com/embed/"]', t).forEach(function (t) {
                        t.hasAttribute("data-autoplay") && qt(t), t.onload = function () {
                            t.hasAttribute("data-autoplay") && qt(t)
                        }
                    })
                }

                function qt(t) {
                    t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
                }

                function Xt(t) {
                    t = Ft(t);
                    jn("video, audio", t).forEach(function (t) {
                        t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
                    }), jn('iframe[src*="youtube.com/embed/"]', t).forEach(function (t) {
                        /youtube\.com\/embed\//.test(t.getAttribute("src")) && !t.hasAttribute("data-keepplaying") && t.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                    })
                }

                function Ft(t) {
                    var e = jn(tn, t);
                    return e.length && (t = e[0]), t
                }

                function Wt() {
                    var t = $t(),
                        e = t.section,
                        t = t.slide;
                    e && (f.animateAnchor ? ve : Z)(e, t)
                }

                function Yt() {
                    var t, e, n, i;
                    ht || f.lockAnchors || (t = (i = $t()).section, e = i.slide, i = (n = void 0 === d) && void 0 === e && !l, t && t.length && (t && t !== d && !n || i || !l && r != e) && ve(t, e))
                }

                function $t() {
                    var t, e, n, i = Me.location.hash;
                    return i.length && (n = i.replace("#", "").split("/"), e = (i = -1 < i.indexOf("#/")) ? "/" + n[1] : decodeURIComponent(n[0]), (n = i ? n[2] : n[1]) && n.length && (t = decodeURIComponent(n))), {
                        section: e,
                        slide: t
                    }
                }

                function Ut(t) {
                    clearTimeout(P);
                    var e = Rn.activeElement,
                        n = t.keyCode;
                    9 === n ? function (t) {
                        var e = t.shiftKey,
                            n = Rn.activeElement,
                            i = Qt(Ft(jn($e)[0]));

                        function r(t) {
                            return Fn(t), i[0] ? i[0].focus() : null
                        }
                        if (function (t) {
                            var e = Qt(Rn),
                                n = e.indexOf(Rn.activeElement),
                                n = t.shiftKey ? n - 1 : n + 1,
                                e = e[n],
                                n = Rt(Hn(e, Je)),
                                e = Dt(Hn(e, Ye));
                            return !n && !e
                        }(t)) return;
                        n ? null == Hn(n, $e + "," + $e + " " + tn) && (n = r(t)) : r(t);
                        (!e && n == i[i.length - 1] || e && n == i[0]) && Fn(t)
                    }(t) : $n(e, "textarea") || $n(e, "input") || $n(e, "select") || "true" === e.getAttribute("contentEditable") || "" === e.getAttribute("contentEditable") || !f.keyboardScrolling || !f.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(n) && Fn(t), o = t.ctrlKey, P = setTimeout(function () {
                        ! function (t) {
                            var e = t.shiftKey,
                                n = Rn.activeElement,
                                i = $n(n, "video") || $n(n, "audio");
                            if (!_ && [37, 39].indexOf(t.keyCode) < 0) return;
                            switch (t.keyCode) {
                                case 38:
                                case 33:
                                    b.k.up && G();
                                    break;
                                case 32:
                                    if (e && b.k.up && !i) {
                                        G();
                                        break
                                    }
                                case 40:
                                case 34:
                                    b.k.down && (32 === t.keyCode && i || Q());
                                    break;
                                case 36:
                                    b.k.up && J(1);
                                    break;
                                case 35:
                                    b.k.down && J(jn(Ye).length);
                                    break;
                                case 37:
                                    b.k.left && et();
                                    break;
                                case 39:
                                    b.k.right && tt();
                                    break;
                                default:
                                    ;
                            }
                        }(t)
                    }, 150))
                }

                function ye() {
                    Yn(wn(this), "click")
                }

                function Vt(t) {
                    e && (o = t.ctrlKey)
                }

                function Kt(t) {
                    2 == t.which && (te = t.pageY, m.addEventListener("mousemove", ee))
                }

                function Gt(t) {
                    2 == t.which && m.removeEventListener("mousemove", ee)
                }

                function we(t) {
                    var e = t.shiftKey,
                        n = Rn.activeElement,
                        i = Qt(Ft(jn($e)[0]));

                    function r(t) {
                        return Fn(t), i[0] ? i[0].focus() : null
                    }
                    if (function (t) {
                        var e = Qt(Rn),
                            n = e.indexOf(Rn.activeElement),
                            n = t.shiftKey ? n - 1 : n + 1,
                            e = e[n],
                            n = Rt(Hn(e, Je)),
                            e = Dt(Hn(e, Ye));
                        return !n && !e
                    }(t)) return;
                    if (n) null == Hn(n, $e + "," + $e + " " + tn) && (n = r(t));
                    else r(t);
                    if (!e && n == i[i.length - 1] || e && n == i[0]) Fn(t)
                }

                function Qt(t) {
                    return [].slice.call(jn(D, t)).filter(function (t) {
                        return "-1" !== t.getAttribute("tabindex") && null !== t.offsetParent
                    })
                }

                function Se(t) {
                    var e = Qt(Rn),
                        n = e.indexOf(Rn.activeElement),
                        n = t.shiftKey ? n - 1 : n + 1,
                        e = e[n],
                        n = Rt(Hn(e, Je)),
                        e = Dt(Hn(e, Ye));
                    return !n && !e
                }

                function Ee() {
                    var t = Hn(this, Ye);
                    if (vn(this, hn)) b.m.left && et(t);
                    else b.m.right && tt(t)
                }

                function Zt() {
                    e = !0
                }

                function Jt() {
                    o = e = !1
                }

                function Ae(t) {
                    Fn(t);
                    var n = En(Hn(this, Qe + " li"));
                    Ot(jn(Ye)[t])
                }

                function Pe(t) {
                    Fn(t);
                    var e = jn(nn, Hn(this, Ye))[0],
                        t = jn(Je, e)[En(Hn(this, "li"))];
                    ne(e, t)
                }

                function Oe(t) {
                    if (jn(f.menu)[0] && (f.lockAnchors || !f.anchors.length)) Fn(t), J(this.getAttribute("data-menuanchor"))
                }

                function Le(t) {
                    var e = t.shiftKey,
                        n = Rn.activeElement,
                        i = $n(n, "video") || $n(n, "audio");
                    if (!_ && [37, 39].indexOf(t.keyCode) < 0) return;
                    switch (t.keyCode) {
                        case 38:
                        case 33:
                            b.k.up && G();
                            break;
                        case 32:
                            if (e && b.k.up && !i) {
                                G();
                                break
                            }
                        case 40:
                        case 34:
                            b.k.down && (32 === t.keyCode && i || Q());
                            break;
                        case 36:
                            b.k.up && J(1);
                            break;
                        case 35:
                            b.k.down && J(jn(Ye).length);
                            break;
                        case 37:
                            b.k.left && et();
                            break;
                        case 39:
                            b.k.right && tt();
                            break;
                        default:
                            ;
                    }
                }
                var te = 0;

                function ee(t) {
                    f.autoScrolling && (_ && (t.pageY < te && b.m.up ? G() : t.pageY > te && b.m.down && Q()), te = t.pageY)
                }

                function ne(t, e, n) {
                    var i = Hn(t, Ye),
                        n = {
                            slides: t,
                            destiny: e,
                            direction: n,
                            destinyPos: {
                                left: e.offsetLeft
                            },
                            slideIndex: En(e),
                            section: i,
                            sectionIndex: En(i, Ye),
                            anchorLink: i.getAttribute("data-anchor"),
                            slidesNav: jn(ln, i)[0],
                            slideAnchor: xe(e),
                            prevSlide: jn(tn, i)[0],
                            prevSlideIndex: En(jn(tn, i)[0]),
                            localIsResizing: y
                        };
                    n.xMovement = function (t, e) {
                        if (t == e) return "none";
                        if (e < t) return "left";
                        return "right"
                    }(n.prevSlideIndex, n.slideIndex), n.direction = n.direction || n.xMovement, n.localIsResizing || (_ = !1), f.onSlideLeave && !n.localIsResizing && "none" !== n.xMovement && Wn(f.onSlideLeave) && !1 === Lt("onSlideLeave", n) ? l = !1 : (In(e, Xe), An(Xn(e), Xe), n.localIsResizing || (Xt(n.prevSlide), Ht(e)), !f.loopHorizontal && f.controlArrows && (Un(jn(fn, i), 0 !== n.slideIndex), Un(jn(pn, i), null != Tn(e))), vn(i, Xe) && !n.localIsResizing && ye(n.slideIndex, n.slideAnchor, n.anchorLink, n.sectionIndex), function (t, e, n) {
                        var i = e.destinyPos; {
                            var r;
                            f.css3 ? (r = "translate3d(-" + Math.round(i.left) + "px, 0px, 0px)", u.test.translate3dH[e.sectionIndex] = r, _n(le(jn(on, t)), Ee(r)), k = setTimeout(function () {
                                n && ie(e)
                            }, f.scrollingSpeed)) : (u.test.left[e.sectionIndex] = Math.round(i.left), Pe(t, Math.round(i.left), f.scrollingSpeed, function () {
                                n && ie(e)
                            }))
                        }
                    }(t, n, !0))
                }

                function ie(t) {
                    var e, n;
                    e = t.slidesNav, n = t.slideIndex, f.slidesNavigation && null != e && (An(jn(Fe, e), Xe), In(jn("a", jn("li", e)[n]), Xe)), t.localIsResizing || (Wn(f.afterSlideLoad) && Lt("afterSlideLoad", t), _ = !0, zt(t.destiny)), l = !1
                }

                function je(t, e, n) {
                    var i = e.destinyPos;
                    if (f.css3) {
                        var r = "translate3d(-" + Math.round(i.left) + "px, 0px, 0px)";
                        u.test.translate3dH[e.sectionIndex] = r, _n(le(jn(on, t)), Ee(r)), k = setTimeout(function () {
                            n && ie(e)
                        }, f.scrollingSpeed)
                    } else u.test.left[e.sectionIndex] = Math.round(i.left), Pe(t, Math.round(i.left), f.scrollingSpeed, function () {
                        n && ie(e)
                    })
                }

                function Ie(t, e) {
                    if (f.slidesNavigation && null != e) An(jn(Fe, e), Xe), In(jn("a", jn("li", e)[n]), Xe)
                }
                var re = v;

                function oe() {
                    y = !0, clearTimeout(T), T = setTimeout(function () {
                        for (var t = 0; t < 4; t++) S = setTimeout(se, 200 * t)
                    }, 200)
                }

                function se() {
                    var t;
                    ae(), c ? $n(t = Rn.activeElement, "textarea") || $n(t, "input") || $n(t, "select") || (t = gn(), Math.abs(t - re) > 20 * Math.max(re, t) / 100 && (nt(!0), re = t)) : lt()
                }

                function ae() {
                    var t = f.responsive || f.responsiveWidth,
                        e = f.responsiveHeight,
                        n = t && Me.innerWidth < t,
                        i = e && Me.innerHeight < e;
                    t && e ? rt(n || i) : t ? rt(n) : e && rt(i)
                }

                function le(t) {
                    var e = "all " + f.scrollingSpeed + "ms " + f.easingcss3;
                    return An(t, He), _n(t, {
                        "-webkit-transition": e,
                        transition: e
                    })
                }

                function ce(t) {
                    return In(t, He)
                }

                function We(t, e) {
                    f.navigation && null != jn(Qe)[0] && (An(jn(Fe, jn(Qe)[0]), Xe), In(t ? jn('a[href="#' + t + '"]', jn(Qe)[0]) : jn("a", jn("li", jn(Qe)[0])[e]), Xe))
                }

                function Ye(t) {
                    jn(f.menu).forEach(function (t) {
                        f.menu && null != t && (An(jn(Fe, t), Xe), In(jn('[data-menuanchor="' + n + '"]', t), Xe))
                    })
                }

                function ue(t, e) {
                    var n;
                    n = t, jn(f.menu).forEach(function (t) {
                        f.menu && null != t && (An(jn(Fe, t), Xe), In(jn('[data-menuanchor="' + n + '"]', t), Xe))
                    }), t = t, e = e, f.navigation && null != jn(Qe)[0] && (An(jn(Fe, jn(Qe)[0]), Xe), In(t ? jn('a[href="#' + t + '"]', jn(Qe)[0]) : jn("a", jn("li", jn(Qe)[0])[e]), Xe))
                }

                function he(t) {
                    var e = En(jn($e)[0], Ye),
                        t = En(t, Ye);
                    return e == t ? "none" : t < e ? "up" : "down"
                }

                function Ve(t, e) {
                    if (t == e) return "none";
                    if (e < t) return "left";
                    return "right"
                }

                function fe(t) {
                    var e;
                    vn(t, sn) || ((e = Rn.createElement("div")).className = Ue, e.style.height = pe(t) + "px", In(t, sn), Ln(t, e))
                }

                function pe(t) {
                    var e, n = v;
                    return (f.paddingTop || f.paddingBottom) && (vn(e = t, Mn) || (e = Hn(t, Ye)), e = parseInt(getComputedStyle(e)["padding-top"]) + parseInt(getComputedStyle(e)["padding-bottom"]), n = v - e), n
                }

                function de(t, e) {
                    (e ? le : ce)(m), _n(m, Ee(t)), u.test.translate3d = t, setTimeout(function () {
                        An(m, He)
                    }, 10)
                }

                function me(t) {
                    var e = jn(Ye + '[data-anchor="' + t + '"]', m)[0];
                    return e || (t = void 0 !== t ? t - 1 : 0, e = jn(Ye)[t]), e
                }

                function Je(t, e) {
                    var n = jn(Je + '[data-anchor="' + (i = e) + '"]', t = r)[0];
                    return null == (e = jn(Je + '[data-anchor="' + (i = e) + '"]', t = r)[0]) && (i = void 0 !== i ? i : 0, e = jn(Je, t)[i]), e
                }

                function ve(t, e) {
                    var n, i, r = me(t);
                    null != r && (null == (e = jn(Je + '[data-anchor="' + (i = e) + '"]', t = r)[0]) && (i = void 0 !== i ? i : 0, e = jn(Je, t)[i]), n = e, xe(r) === d || vn(r, Xe) ? ge(n) : Ot(r, function () {
                        ge(n)
                    }))
                }

                function ge(t) {
                    null != t && ne(Hn(t, nn), t)
                }

                function nn(t, e) {
                    Pn(Vn('<div class="' + an + '"><ul></ul></div>'), t);
                    var n = jn(ln, t)[0];
                    In(n, "fp-" + f.slidesNavPosition);
                    for (var i = 0; i < e; i++) {
                        var r = jn(Je, t)[i];
                        Pn(Vn('<li><a href="#"><span class="fp-sr-only">' + ct(i, "Slide", r) + "</span><span></span></a></li>"), jn("ul", n)[0])
                    }
                    _n(n, {
                        "margin-left": "-" + n.innerWidth / 2 + "px"
                    }), In(jn("a", jn("li", n)[0]), Xe)
                }

                function ye(t, e, n) {
                    var i = "";
                    f.anchors.length && !f.lockAnchors && (t ? (null != n && (i = n), null == e && (e = t), _e(i + "/" + (r = e))) : (null != t && (r = e), _e(n))), be()
                }

                function _e(t) {
                    var e;
                    f.recordHistory ? location.hash = t : c || h ? Me.history.replaceState(void 0, void 0, "#" + t) : (e = Me.location.href.split("#")[0], Me.location.replace(e + "#" + t))
                }

                function xe(t) {
                    if (!t) return null;
                    var e = t.getAttribute("data-anchor"),
                        t = En(t);
                    return null == e && (e = t), e
                }

                function be() {
                    var t = jn($e)[0],
                        e = jn(tn, t)[0],
                        n = xe(t),
                        t = xe(e),
                        n = String(n);
                    e && (n = n + "-" + t), n = n.replace("/", "-").replace("#", "");
                    t = new RegExp("\\b\\s?" + qe + "-[^\\s]+\\b", "g");
                    p.className = p.className.replace(t, ""), In(p, qe + "-" + n)
                }

                function ln() {
                    var t, e, n = Rn.createElement("p"),
                        i = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                    for (e in n.style.display = "block", Rn.body.insertBefore(n, null), i) void 0 !== n.style[e] && (n.style[e] = "translate3d(1px,1px,1px)", t = Me.getComputedStyle(n).getPropertyValue(i[e]));
                    return Rn.body.removeChild(n), void 0 !== t && 0 < t.length && "none" !== t
                }

                function cn() {
                    if (Rn.addEventListener) Rn.removeEventListener("mousewheel", Yt, !1), Rn.removeEventListener("wheel", Yt, !1), Rn.removeEventListener("MozMousePixelScroll", Yt, !1);
                    else Rn.detachEvent("onmousewheel", Yt)
                }

                function un() {
                    var t, e = "";
                    if (Me.addEventListener) t = "addEventListener";
                    else t = "attachEvent", e = "on";
                    var n = "onwheel" in Rn.createElement("div") ? "wheel" : void 0 !== Rn.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                        i = !!R && {
                            passive: !1
                        };
                    if ("DOMMouseScroll" == n) Rn[t](e + "MozMousePixelScroll", kt, i);
                    else Rn[t](e + n, kt, i)
                }

                function hn() {
                    d.addEventListener("mousedown", xe), d.addEventListener("mouseup", be)
                }

                function fn() {
                    d.removeEventListener("mousedown", xe), d.removeEventListener("mouseup", be)
                }

                function pn() {
                    if (c || h) {
                        f.autoScrolling && (p.removeEventListener(L.touchmove, vt, {
                            passive: !1
                        }), p.addEventListener(L.touchmove, vt, {
                            passive: !1
                        }));
                        var t = f.touchWrapper;
                        (t = f.touchWrapper).removeEventListener(L.touchstart, Tt), t.removeEventListener(L.touchmove, bt, {
                            passive: !1
                        }), t.addEventListener(L.touchstart, Tt), t.addEventListener(L.touchmove, bt, {
                            passive: !1
                        })
                    }
                }

                function dn() {
                    if (c || h) {
                        f.autoScrolling && (p.removeEventListener(L.touchmove, bt, {
                            passive: !1
                        }), p.removeEventListener(L.touchmove, vt, {
                            passive: !1
                        }));
                        var t = f.touchWrapper;
                        (t = f.touchWrapper).removeEventListener(L.touchstart, Tt), t.removeEventListener(L.touchmove, bt, {
                            passive: !1
                        })
                    }
                }

                function mn() {
                    var t;
                    if (Me.PointerEvent) t = {
                        down: "pointerdown",
                        move: "pointermove"
                    };
                    else e = {
                        down: "MSPointerDown",
                        move: "MSPointerMove"
                    };
                    return t
                }

                function we(t) {
                    var e = [];
                    return e.y = (void 0 !== t.pageY && (t.pageY || t.pageX) ? t : t.touches[0]).pageY, e.x = (void 0 !== t.pageX && (t.pageY || t.pageX) ? t : t.touches[0]).pageX, h && wt(t) && f.scrollBar && void 0 !== t.touches && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
                }

                function Te(t, e) {
                    W(0, "internal"), void 0 !== e && (y = !0), ne(Hn(t, nn), t), void 0 !== e && (y = !1), W(H.scrollingSpeed, "internal")
                }

                function Se(t) {
                    t = Math.round(t);
                    f.css3 && f.autoScrolling && !f.scrollBar ? de("translate3d(0px, -" + t + "px, 0px)", !1) : f.autoScrolling && !f.scrollBar ? (_n(m, {
                        top: -t + "px"
                    }), u.test.top = -t + "px") : Oe((t = Mt(t)).element, t.options)
                }

                function Ee(t) {
                    return {
                        "-webkit-transform": t,
                        "-moz-transform": t,
                        "-ms-transform": t,
                        transform: t
                    }
                }

                function ke(e, t, n) {
                    "all" !== t ? b[n][t] = e : Object.keys(b[n]).forEach(function (t) {
                        b[n][t] = e
                    })
                }

                function bn(t) {
                    if (X(!1, "internal"), U(!0), V(!1), K(!1), In(m, Be), [k, E, T, C, A, O, S, I].forEach(function (t) {
                        clearTimeout(t)
                    }), Me.removeEventListener("scroll", pt), Me.removeEventListener("hashchange", Yt), Me.removeEventListener("resize", oe), Rn.removeEventListener("keydown", Ut), Rn.removeEventListener("keyup", Vt), ["click", "touchstart"].forEach(function (t) {
                        Rn.removeEventListener(t, ot)
                    }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (t) {
                        Rn.removeEventListener(t, at, !0)
                    }), t) Se(0), jn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", m).forEach(function (t) {
                        jt(t, "src")
                    }), jn("img[data-srcset]").forEach(function (t) {
                        jt(t, "srcset")
                    }), Kn(jn(Qe + ", " + ln + ", " + un)), _n(jn(Ye), {
                        height: "",
                        "background-color": "",
                        padding: ""
                    }), _n(jn(Je), {
                        width: ""
                    }), _n(m, {
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), _n(i, {
                        overflow: "",
                        height: ""
                    }), An(s, ze), An(p, Ie), p.className.split(/\s+/).forEach(function (t) {
                        0 === t.indexOf(qe) && An(p, t)
                    }), jn(Ye + ", " + Je).forEach(function (t) {
                        f.scrollOverflowHandler && f.scrollOverflow && f.scrollOverflowHandler.remove(t), An(t, sn + " " + Xe + " " + We), t.getAttribute("data-fp-styles") && t.setAttribute("style", t.getAttribute("data-fp-styles")), vn(t, Mn) && !B && t.removeAttribute("data-anchor")
                    }), ce(m), [Ve, on, nn].forEach(function (t) {
                        jn(t, m).forEach(function (t) {
                            Dn(t)
                        })
                    }), _n(m, {
                        "-webkit-transition": "none",
                        transition: "none"
                    }), Me.scrollTo(0, 0), [Mn, Nn, rn].forEach(function (t) {
                        An(jn("." + t), t)
                    })
                }

                function wn() {
                    var t;
                    Se(0), jn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", m).forEach(function (t) {
                        jt(t, "src")
                    }), jn("img[data-srcset]").forEach(function (t) {
                        jt(t, "srcset")
                    }), Kn(jn(Qe + ", " + ln + ", " + un)), _n(jn(Ye), {
                        height: "",
                        "background-color": "",
                        padding: ""
                    }), _n(jn(Je), {
                        width: ""
                    }), _n(m, {
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), _n(i, {
                        overflow: "",
                        height: ""
                    }), An(s, ze), An(p, Ie), p.className.split(/\s+/).forEach(function (t) {
                        0 === t.indexOf(qe) && An(p, t)
                    }), jn(Ye + ", " + Je).forEach(function (t) {
                        f.scrollOverflowHandler && f.scrollOverflow && f.scrollOverflowHandler.remove(t), An(t, sn + " " + Xe + " " + We), t.getAttribute("data-fp-styles") && t.setAttribute("style", t.getAttribute("data-fp-styles")), vn(t, Mn) && !B && t.removeAttribute("data-anchor")
                    }), ce(m), [Ve, on, nn].forEach(function (t) {
                        jn(t, m).forEach(function (t) {
                            Dn(t)
                        })
                    }), _n(m, {
                        "-webkit-transition": "none",
                        transition: "none"
                    }), Me.scrollTo(0, 0), [Mn, Nn, rn].forEach(function (t) {
                        An(jn("." + t), t)
                    })
                }

                function Ce(t, e, n) {
                    f[t] = e, "internal" !== n && (H[t] = e)
                }

                function Ae() {
                    var t = f.licenseKey,
                        e = "font-size: 15px;background:yellow;";
                    n ? t && t.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", e), console.warn("%c https://alvarotrigo.com/fullPage/", e)) : (dn("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), dn("error", "https://github.com/alvarotrigo/fullPage.js#options.")), vn(s, ze) ? dn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (f.continuousVertical && (f.loopTop || f.loopBottom) && (f.continuousVertical = !1, dn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !f.scrollOverflow || !f.scrollBar && f.autoScrolling || dn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !f.continuousVertical || !f.scrollBar && f.autoScrolling || (f.continuousVertical = !1, dn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), f.scrollOverflow && null == f.scrollOverflowHandler && (f.scrollOverflow = !1, dn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), q.forEach(function (t) {
                        f[t] && dn("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + t)
                    }), f.anchors.forEach(function (e) {
                        var t, n = [].slice.call(jn("[name]")).filter(function (t) {
                            return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase()
                        }),
                            i = [].slice.call(jn("[id]")).filter(function (t) {
                                return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase()
                            });
                        (i.length || n.length) && (dn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), t = i.length ? "id" : "name", (i.length || n.length) && dn("error", '"' + e + '" is is being used by another element `' + t + "` property"))
                    }))
                }

                function En(t) {
                    return t = (t = n).self != Me && vn(t, en) ? t.scrollLeft : !f.autoScrolling || f.scrollBar ? qn() : t.offsetTop
                }

                function Pe(n, i, r, o) {
                    var t, s = t = (t = n).self != Me && vn(t, en) ? t.scrollLeft : !f.autoScrolling || f.scrollBar ? qn() : t.offsetTop,
                        a = i - s,
                        l = 0;
                    N = !0,
                        function t() {
                            var e;
                            N ? (e = i, l += 20, r && (e = Me.fp_easings[f.easing](l, s, a, r)), Oe(n, e), l < r ? setTimeout(t, 20) : void 0 !== o && o()) : l < r && o()
                        }()
                }

                function Oe(t, e) {
                    !f.autoScrolling || f.scrollBar || t.self != Me && vn(t, en) ? t.self != Me && vn(t, en) ? t.scrollLeft = e : t.scrollTo(0, e) : t.style.top = e + "px"
                }

                function An() {
                    var t;
                    return Rt(jn(tn, jn($e)[0])[0])
                }

                function Pn() {
                    return new De(jn($e)[0])
                }

                function Le(t, e) {
                    this.anchor = t.getAttribute("data-anchor"), this.item = t, this.index = En(t, e), this.isLast = this.index === t.parentElement.querySelectorAll(e).length - 1, this.isFirst = !this.index
                }

                function De(t) {
                    Le.call(this, t, Ye)
                }

                function Re(t) {
                    Le.call(this, t, Je)
                }
                return u
            }

            function dn(t, e) {
                Me.console && Me.console[t] && Me.console[t]("fullPage: " + e)
            }

            function jn(t, e) {
                e = arguments.length > 1 ? e : Rn;
                return e ? e.querySelectorAll(t) : null
            }

            function mn(t) {
                t = t || {};
                for (var e = 1, n = arguments.length; e < n; ++e) {
                    var i = arguments[e];
                    if (!i) continue;
                    for (var r in i) {
                        if (!i.hasOwnProperty(r)) continue;
                        if (Object.prototype.toString.call(i[r]) === "[object Object]") {
                            t[r] = mn(t[r], i[r]);
                            continue
                        }
                        t[r] = i[r]
                    }
                }
                return t
            }

            function vn(t, e) {
                if (t == null) return false;
                if (t.classList) return t.classList.contains(e);
                return new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
            }

            function gn() {
                return "innerHeight" in Me ? Me.innerHeight : Rn.documentElement.offsetHeight
            }

            function yn() {
                return Me.innerWidth
            }

            function _n(t, e) {
                t = x(t);
                var n;
                for (n in e)
                    if (e.hasOwnProperty(n))
                        if (n !== null)
                            for (var i = 0; i < t.length; i++) {
                                var r = t[i];
                                r.style[n] = e[n]
                            }
                return t
            }

            function _(t, e, n) {
                var i = t[n];
                while (i && !$n(i, e)) i = i[n];
                return i
            }

            function xn(t, e) {
                return _(t, e, "previousElementSibling")
            }

            function bn(t, e) {
                return _(t, e, "nextElementSibling")
            }

            function wn(t) {
                return t.previousElementSibling
            }

            function Tn(t) {
                return t.nextElementSibling
            }

            function Sn(t) {
                return t[t.length - 1]
            }

            function En(t, e) {
                t = b(t) ? t[0] : t;
                var n = e != null ? jn(e, t.parentNode) : t.parentNode.childNodes;
                var i = 0;
                for (var r = 0; r < n.length; r++) {
                    if (n[r] == t) return i;
                    if (n[r].nodeType == 1) i++
                }
                return -1
            }

            function x(t) {
                return !b(t) ? [t] : t
            }

            function kn(t) {
                t = x(t);
                for (var e = 0; e < t.length; e++) t[e].style.display = "none";
                return t
            }

            function Cn(t) {
                t = x(t);
                for (var e = 0; e < t.length; e++) t[e].style.display = "block";
                return t
            }

            function b(t) {
                return Object.prototype.toString.call(t) === "[object Array]" || Object.prototype.toString.call(t) === "[object NodeList]"
            }

            function In(t, e) {
                t = x(t);
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (i.classList) i.classList.add(e);
                    else i.className += " " + e
                }
                return t
            }

            function An(t, e) {
                t = x(t);
                var n = e.split(" ");
                for (var i = 0; i < n.length; i++) {
                    e = n[i];
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        if (o.classList) o.classList.remove(e);
                        else o.className = o.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
                    }
                }
                return t
            }

            function Pn(t, e) {
                e.appendChild(t)
            }

            function w(t, e, n) {
                var i;
                e = e || Rn.createElement("div");
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (n && !r || !n) {
                        i = e.cloneNode(true);
                        o.parentNode.insertBefore(i, o)
                    }
                    i.appendChild(o)
                }
                return t
            }

            function On(t, e) {
                w(t, e, true)
            }

            function Ln(t, e) {
                if (typeof e === "string") e = Vn(e);
                t.appendChild(e);
                while (t.firstChild !== e) e.appendChild(t.firstChild)
            }

            function Dn(t) {
                var e = Rn.createDocumentFragment();
                while (t.firstChild) e.appendChild(t.firstChild);
                t.parentNode.replaceChild(e, t)
            }

            function Hn(t, e) {
                if (t && t.nodeType === 1) {
                    if ($n(t, e)) return t;
                    return Hn(t.parentNode, e)
                }
                return null
            }

            function Bn(t, e) {
                T(t, t.nextSibling, e)
            }

            function zn(t, e) {
                T(t, t, e)
            }

            function T(t, e, n) {
                if (!b(n)) {
                    if (typeof n == "string") n = Vn(n);
                    n = [n]
                }
                for (var i = 0; i < n.length; i++) t.parentNode.insertBefore(n[i], e)
            }

            function qn() {
                var t = Rn.documentElement;
                return (Me.pageYOffset || t.scrollTop) - (t.clientTop || 0)
            }

            function Xn(e) {
                return Array.prototype.filter.call(e.parentNode.children, function (t) {
                    return t !== e
                })
            }

            function Fn(t) {
                if (t.preventDefault) t.preventDefault();
                else t.returnValue = false
            }

            function Wn(t) {
                if (typeof t === "function") return true;
                var e = Object.prototype.toString(t);
                return e === "[object Function]" || e === "[object GeneratorFunction]"
            }

            function Yn(t, e, n) {
                var i;
                n = typeof n === "undefined" ? {} : n;
                if (typeof Me.CustomEvent === "function") i = new CustomEvent(e, {
                    detail: n
                });
                else {
                    i = Rn.createEvent("CustomEvent");
                    i.initCustomEvent(e, true, true, n)
                }
                t.dispatchEvent(i)
            }

            function $n(t, e) {
                return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e)
            }

            function Un(t, e) {
                if (typeof e === "boolean")
                    for (var n = 0; n < t.length; n++) t[n].style.display = e ? "block" : "none";
                return t
            }

            function Vn(t) {
                var e = Rn.createElement("div");
                e.innerHTML = t.trim();
                return e.firstChild
            }

            function Kn(t) {
                t = x(t);
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (n && n.parentElement) n.parentNode.removeChild(n)
                }
            }

            function S(t, e) {
                Array.prototype.filter.call(t, e)
            }

            function E(t, e, n) {
                var i = t[n];
                var r = [];
                while (i) {
                    if ($n(i, e) || e == null) r.push(i);
                    i = i[n]
                }
                return r
            }

            function Gn(t, e) {
                return E(t, e, "nextElementSibling")
            }

            function Qn(t, e) {
                return E(t, e, "previousElementSibling")
            }

            function k(t) {
                return Object.keys(n).map(function (t) {
                    return n[t]
                })
            }
            if (Me.NodeList && !NodeList.prototype.forEach) NodeList.prototype.forEach = function (t, e) {
                e = e || Me;
                for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this)
            };
            return Me.fp_utils = {
                $: jn,
                deepExtend: mn,
                hasClass: vn,
                getWindowHeight: gn,
                css: _n,
                until: _,
                prevUntil: xn,
                nextUntil: bn,
                prev: wn,
                next: Tn,
                last: Sn,
                index: En,
                getList: x,
                hide: kn,
                show: Cn,
                isArrayOrList: b,
                addClass: In,
                removeClass: An,
                appendTo: Pn,
                wrap: w,
                wrapAll: On,
                wrapInner: Ln,
                unwrap: Dn,
                closest: Hn,
                after: Bn,
                before: zn,
                insertBefore: T,
                getScrollTop: qn,
                siblings: Xn,
                preventDefault: Fn,
                isFunction: Wn,
                trigger: Yn,
                matches: $n,
                toggle: Un,
                createElementFromHTML: Vn,
                remove: Kn,
                filter: function (t, e) {
                    Array.prototype.filter.call(t, e)
                },
                untilAll: E,
                nextAll: Gn,
                prevAll: Qn,
                showError: dn
            },
                function (t, f) {
                    var n = f && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(f.licenseKey) || -1 < Rn.domain.indexOf("alvarotrigo.com"),
                        i = jn("html, body"),
                        s = jn("html")[0],
                        p = jn("body")[0];
                    if (vn(s, ze)) return void Ae();
                    var u = {};
                    f = mn({
                        menu: !1,
                        anchors: [],
                        lockAnchors: !1,
                        navigation: !1,
                        navigationPosition: "right",
                        navigationTooltips: [],
                        showActiveTooltip: !1,
                        slidesNavigation: !1,
                        slidesNavPosition: "bottom",
                        scrollBar: !1,
                        hybrid: !1,
                        css3: !0,
                        scrollingSpeed: 700,
                        autoScrolling: !0,
                        fitToSection: !0,
                        fitToSectionDelay: 1e3,
                        easing: "easeInOutCubic",
                        easingcss3: "ease",
                        loopBottom: !1,
                        loopTop: !1,
                        loopHorizontal: !0,
                        continuousVertical: !1,
                        continuousHorizontal: !1,
                        scrollHorizontally: !1,
                        interlockedSlides: !1,
                        dragAndMove: !1,
                        offsetSections: !1,
                        resetSliders: !1,
                        fadingEffect: !1,
                        normalScrollElements: null,
                        scrollOverflow: !1,
                        scrollOverflowReset: !1,
                        scrollOverflowHandler: Me.fp_scrolloverflow ? Me.fp_scrolloverflow.iscrollHandler : null,
                        scrollOverflowOptions: null,
                        touchSensitivity: 5,
                        touchWrapper: "string" == typeof t ? jn(t)[0] : t,
                        bigSectionsDestination: null,
                        keyboardScrolling: !0,
                        animateAnchor: !0,
                        recordHistory: !0,
                        controlArrows: !0,
                        controlArrowColor: "#fff",
                        verticalCentered: !0,
                        sectionsColor: [],
                        paddingTop: 0,
                        paddingBottom: 0,
                        fixedElements: null,
                        responsive: 0,
                        responsiveWidth: 0,
                        responsiveHeight: 0,
                        responsiveSlides: !1,
                        parallax: !1,
                        parallaxOptions: {
                            type: "reveal",
                            percentage: 62,
                            property: "translate"
                        },
                        cards: !1,
                        cardsOptions: {
                            perspective: 100,
                            fadeContent: !0,
                            fadeBackground: !0
                        },
                        sectionSelector: ".section",
                        slideSelector: ".slide",
                        v2compatible: !1,
                        afterLoad: null,
                        onLeave: null,
                        afterRender: null,
                        afterResize: null,
                        afterReBuild: null,
                        afterSlideLoad: null,
                        onSlideLeave: null,
                        afterResponsive: null,
                        lazyLoading: !0
                    }, f);
                    var d, r, o, a, l = !1,
                        c = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                        h = "ontouchstart" in Me || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                        m = "string" == typeof t ? jn(t)[0] : t,
                        v = gn(),
                        g = yn(),
                        y = !1,
                        e = !0,
                        _ = !0,
                        x = [],
                        b = {
                            m: {
                                up: !0,
                                down: !0,
                                left: !0,
                                right: !0
                            }
                        };
                    b.k = mn({}, b.m);
                    var w, T, S, E, k, C, A, P, O, t = function () {
                        var t;
                        t = Me.PointerEvent ? {
                            down: "pointerdown",
                            move: "pointermove"
                        } : {
                            down: "MSPointerDown",
                            move: "MSPointerMove"
                        };
                        return t
                    }(),
                        L = {
                            touchmove: "ontouchmove" in Me ? "touchmove" : t.move,
                            touchstart: "ontouchstart" in Me ? "touchstart" : t.down
                        },
                        D = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                        R = !1;
                    try {
                        var M = Object.defineProperty({}, "passive", {
                            get: function () {
                                R = !0
                            }
                        });
                        Me.addEventListener("testPassive", null, M), Me.removeEventListener("testPassive", null, M)
                    } catch (t) { }
                    var N, j, I, H = mn({}, f),
                        B = !1,
                        z = !0,
                        q = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards"];

                    function X(t, e) {
                        t || Se(0), Ce("autoScrolling", t, e);
                        e = jn($e)[0];
                        f.autoScrolling && !f.scrollBar ? (_n(i, {
                            overflow: "hidden",
                            height: "100%"
                        }), F(H.recordHistory, "internal"), _n(m, {
                            "-ms-touch-action": "none",
                            "touch-action": "none"
                        }), null != e && Se(e.offsetTop)) : (_n(i, {
                            overflow: "visible",
                            height: "initial"
                        }), F(!!f.autoScrolling && H.recordHistory, "internal"), _n(m, {
                            "-ms-touch-action": "",
                            "touch-action": ""
                        }), null != e && (e = Mt(e.offsetTop)).element.scrollTo(0, e.options))
                    }

                    function F(t, e) {
                        Ce("recordHistory", t, e)
                    }

                    function W(t, e) {
                        Ce("scrollingSpeed", t, e)
                    }

                    function Y(t, e) {
                        Ce("fitToSection", t, e)
                    }

                    function $(t) {
                        t ? (function () {
                            var t, e = "";
                            Me.addEventListener ? t = "addEventListener" : (t = "attachEvent", e = "on");
                            var n = "onwheel" in Rn.createElement("div") ? "wheel" : void 0 !== Rn.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                                i = !!R && {
                                    passive: !1
                                };
                            "DOMMouseScroll" == n ? Rn[t](e + "MozMousePixelScroll", kt, i) : Rn[t](e + n, kt, i)
                        }(), m.addEventListener("mousedown", Kt), m.addEventListener("mouseup", Gt)) : (Rn.addEventListener ? (Rn.removeEventListener("mousewheel", kt, !1), Rn.removeEventListener("wheel", kt, !1), Rn.removeEventListener("MozMousePixelScroll", kt, !1)) : Rn.detachEvent("onmousewheel", kt), m.removeEventListener("mousedown", Kt), m.removeEventListener("mouseup", Gt))
                    }

                    function U(e, t) {
                        void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
                            ke(e, t, "m")
                        }) : ke(e, "all", "m")
                    }

                    function V(t) {
                        t ? ($(!0), function () {
                            {
                                var t;
                                (c || h) && (f.autoScrolling && (p.removeEventListener(L.touchmove, vt, {
                                    passive: !1
                                }), p.addEventListener(L.touchmove, vt, {
                                    passive: !1
                                })), (t = f.touchWrapper).removeEventListener(L.touchstart, Tt), t.removeEventListener(L.touchmove, bt, {
                                    passive: !1
                                }), t.addEventListener(L.touchstart, Tt), t.addEventListener(L.touchmove, bt, {
                                    passive: !1
                                }))
                            }
                        }()) : ($(!1), function () {
                            {
                                var t;
                                (c || h) && (f.autoScrolling && (p.removeEventListener(L.touchmove, bt, {
                                    passive: !1
                                }), p.removeEventListener(L.touchmove, vt, {
                                    passive: !1
                                })), (t = f.touchWrapper).removeEventListener(L.touchstart, Tt), t.removeEventListener(L.touchmove, bt, {
                                    passive: !1
                                }))
                            }
                        }())
                    }

                    function K(e, t) {
                        void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
                            ke(e, t, "k")
                        }) : (ke(e, "all", "k"), f.keyboardScrolling = e)
                    }

                    function G() {
                        var t = xn(jn($e)[0], Ye);
                        t || !f.loopTop && !f.continuousVertical || (t = Sn(jn(Ye))), null != t && Ot(t, null, !0)
                    }

                    function Q() {
                        var t = bn(jn($e)[0], Ye);
                        t || !f.loopBottom && !f.continuousVertical || (t = jn(Ye)[0]), null != t && Ot(t, null, !1)
                    }

                    function Z(t, e) {
                        W(0, "internal"), J(t, e), W(H.scrollingSpeed, "internal")
                    }

                    function J(t, e) {
                        var n = me(t);
                        void 0 !== e ? ve(t, e) : null != n && Ot(n)
                    }

                    function tt(t) {
                        Ct("right", t)
                    }

                    function et(t) {
                        Ct("left", t)
                    }

                    function nt(t) {
                        if (!vn(m, Be)) {
                            y = !0, v = gn(), g = yn();
                            for (var e = jn(Ye), n = 0; n < e.length; ++n) {
                                var i = e[n],
                                    r = jn(nn, i)[0],
                                    o = jn(Je, i);
                                f.verticalCentered && _n(jn(Ve, i), {
                                    height: pe(i) + "px"
                                }), _n(i, {
                                    height: v + "px"
                                }), 1 < o.length && ne(r, jn(tn, r)[0])
                            }
                            f.scrollOverflow && w.createScrollBarForAll();
                            var s = En(jn($e)[0], Ye);
                            s && Z(s + 1), y = !1, Wn(f.afterResize) && t && f.afterResize.call(m, Me.innerWidth, Me.innerHeight), Wn(f.afterReBuild) && !t && f.afterReBuild.call(m)
                        }
                    }

                    function it() {
                        return vn(p, Ie)
                    }

                    function rt(t) {
                        var e = it();
                        t ? e || (X(!1, "internal"), Y(!1, "internal"), kn(jn(Qe)), In(p, Ie), Wn(f.afterResponsive) && f.afterResponsive.call(m, t), f.scrollOverflow && w.createScrollBarForAll()) : e && (X(H.autoScrolling, "internal"), Y(H.autoScrolling, "internal"), Cn(jn(Qe)), An(p, Ie), Wn(f.afterResponsive) && f.afterResponsive.call(m, t))
                    }
                    Ae(), Me.fp_easings = mn(Me.fp_easings, {
                        easeInOutCubic: function (t, e, n, i) {
                            return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                        }
                    }), m && (u.version = "3.0.8", u.setAutoScrolling = X, u.setRecordHistory = F, u.setScrollingSpeed = W, u.setFitToSection = Y, u.setLockAnchors = function (t) {
                        f.lockAnchors = t
                    }, u.setMouseWheelScrolling = $, u.setAllowScrolling = U, u.setKeyboardScrolling = K, u.moveSectionUp = G, u.moveSectionDown = Q, u.silentMoveTo = Z, u.moveTo = J, u.moveSlideRight = tt, u.moveSlideLeft = et, u.fitToSection = dt, u.reBuild = nt, u.setResponsive = rt, u.getFullpageData = function () {
                        return f
                    }, u.destroy = function (t) {
                        X(!1, "internal"), U(!0), V(!1), K(!1), In(m, Be), [k, E, T, C, A, O, S, I].forEach(function (t) {
                            clearTimeout(t)
                        }), Me.removeEventListener("scroll", pt), Me.removeEventListener("hashchange", Yt), Me.removeEventListener("resize", oe), Rn.removeEventListener("keydown", Ut), Rn.removeEventListener("keyup", Vt), ["click", "touchstart"].forEach(function (t) {
                            Rn.removeEventListener(t, ot)
                        }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (t) {
                            Rn.removeEventListener(t, at, !0)
                        }), t && (Se(0), jn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", m).forEach(function (t) {
                            jt(t, "src")
                        }), jn("img[data-srcset]").forEach(function (t) {
                            jt(t, "srcset")
                        }), Kn(jn(Qe + ", " + ln + ", " + un)), _n(jn(Ye), {
                            height: "",
                            "background-color": "",
                            padding: ""
                        }), _n(jn(Je), {
                            width: ""
                        }), _n(m, {
                            height: "",
                            position: "",
                            "-ms-touch-action": "",
                            "touch-action": ""
                        }), _n(i, {
                            overflow: "",
                            height: ""
                        }), An(s, ze), An(p, Ie), p.className.split(/\s+/).forEach(function (t) {
                            0 === t.indexOf(qe) && An(p, t)
                        }), jn(Ye + ", " + Je).forEach(function (t) {
                            f.scrollOverflowHandler && f.scrollOverflow && f.scrollOverflowHandler.remove(t), An(t, sn + " " + Xe + " " + We), t.getAttribute("data-fp-styles") && t.setAttribute("style", t.getAttribute("data-fp-styles")), vn(t, Mn) && !B && t.removeAttribute("data-anchor")
                        }), ce(m), [Ve, on, nn].forEach(function (t) {
                            jn(t, m).forEach(function (t) {
                                Dn(t)
                            })
                        }), _n(m, {
                            "-webkit-transition": "none",
                            transition: "none"
                        }), Me.scrollTo(0, 0), [Mn, Nn, rn].forEach(function (t) {
                            An(jn("." + t), t)
                        }))
                    }, u.getActiveSection = function () {
                        return new De(jn($e)[0])
                    }, u.getActiveSlide = function () {
                        return Rt(jn(tn, jn($e)[0])[0])
                    }, u.test = {
                        top: "0px",
                        translate3d: "translate3d(0px, 0px, 0px)",
                        translate3dH: function () {
                            for (var t = [], e = 0; e < jn(f.sectionSelector, m).length; e++) t.push("translate3d(0px, 0px, 0px)");
                            return t
                        }(),
                        left: function () {
                            for (var t = [], e = 0; e < jn(f.sectionSelector, m).length; e++) t.push(0);
                            return t
                        }(),
                        options: f,
                        setAutoScrolling: X
                    }, u.shared = {
                        afterRenderActions: ut,
                        isNormalScrollElement: !1
                    }, Me.fullpage_api = u, f.$ && Object.keys(u).forEach(function (t) {
                        f.$.fn.fullpage[t] = u[t]
                    }), function () {
                        f.css3 && (f.css3 = function () {
                            var t, e, n = Rn.createElement("p"),
                                i = {
                                    webkitTransform: "-webkit-transform",
                                    OTransform: "-o-transform",
                                    msTransform: "-ms-transform",
                                    MozTransform: "-moz-transform",
                                    transform: "transform"
                                };
                            for (e in n.style.display = "block", Rn.body.insertBefore(n, null), i) void 0 !== n.style[e] && (n.style[e] = "translate3d(1px,1px,1px)", t = Me.getComputedStyle(n).getPropertyValue(i[e]));
                            return Rn.body.removeChild(n), void 0 !== t && 0 < t.length && "none" !== t
                        }());
                        f.scrollBar = f.scrollBar || f.hybrid,
                            function () {
                                f.anchors.length || (t = "[data-anchor]", (t = jn(f.sectionSelector.split(",").join(t + ",") + t, m)).length && t.length === jn(Ye).length && (B = !0, t.forEach(function (t) {
                                    f.anchors.push(t.getAttribute("data-anchor").toString())
                                }))); {
                                    var t;
                                    f.navigationTooltips.length || (t = "[data-tooltip]", (t = jn(f.sectionSelector.split(",").join(t + ",") + t, m)).length && t.forEach(function (t) {
                                        f.navigationTooltips.push(t.getAttribute("data-tooltip").toString())
                                    }))
                                }
                            }(),
                            function () {
                                _n(m, {
                                    height: "100%",
                                    position: "relative"
                                }), In(m, Ne), In(s, ze), v = gn(), An(m, Be), In(jn(f.sectionSelector, m), Mn), In(jn(f.slideSelector, m), Nn);
                                for (var t = jn(Ye), e = 0; e < t.length; e++) {
                                    var n = e,
                                        i = t[e],
                                        r = jn(Je, i),
                                        o = r.length;
                                    i.setAttribute("data-fp-styles", i.getAttribute("style")),
                                        function (t, e) {
                                            e || null != jn($e)[0] || In(t, Xe);
                                            a = jn($e)[0], _n(t, {
                                                height: v + "px"
                                            }), f.paddingTop && _n(t, {
                                                "padding-top": f.paddingTop
                                            });
                                            f.paddingBottom && _n(t, {
                                                "padding-bottom": f.paddingBottom
                                            });
                                            void 0 !== f.sectionsColor[e] && _n(t, {
                                                "background-color": f.sectionsColor[e]
                                            });
                                            void 0 !== f.anchors[e] && t.setAttribute("data-anchor", f.anchors[e])
                                        }(i, n),
                                        function (t, e) {
                                            void 0 !== f.anchors[e] && vn(t, Xe) && ue(f.anchors[e], e);
                                            f.menu && f.css3 && null != Hn(jn(f.menu)[0], je) && jn(f.menu).forEach(function (t) {
                                                p.appendChild(t)
                                            })
                                        }(i, n), 0 < o ? function (t, e, n) {
                                            var i = 100 * n,
                                                r = 100 / n,
                                                o = Rn.createElement("div");
                                            o.className = en, On(e, o);
                                            o = Rn.createElement("div");
                                            o.className = rn, On(e, o), _n(jn(on, t), {
                                                width: i + "%"
                                            }), 1 < n && (f.controlArrows && function (t) {
                                                var e = [Vn('<div class="fp-controlArrow fp-prev"></div>'), Vn('<div class="fp-controlArrow fp-next"></div>')];
                                                Bn(jn(nn, t)[0], e), "#fff" !== f.controlArrowColor && (_n(jn(pn, t), {
                                                    "border-color": "transparent transparent transparent " + f.controlArrowColor
                                                }), _n(jn(fn, t), {
                                                    "border-color": "transparent " + f.controlArrowColor + " transparent transparent"
                                                }));
                                                f.loopHorizontal || kn(jn(fn, t))
                                            }(t), f.slidesNavigation && function (t, e) {
                                                Pn(Vn('<div class="' + an + '"><ul></ul></div>'), t);
                                                var n = jn(ln, t)[0];
                                                In(n, "fp-" + f.slidesNavPosition);
                                                for (var i = 0; i < e; i++) {
                                                    var r = jn(Je, t)[i];
                                                    Pn(Vn('<li><a href="#"><span class="fp-sr-only">' + ct(i, "Slide", r) + "</span><span></span></a></li>"), jn("ul", n)[0])
                                                }
                                                _n(n, {
                                                    "margin-left": "-" + n.innerWidth / 2 + "px"
                                                }), In(jn("a", jn("li", n)[0]), Xe)
                                            }(t, n));
                                            e.forEach(function (t) {
                                                _n(t, {
                                                    width: r + "%"
                                                }), f.verticalCentered && fe(t)
                                            });
                                            t = jn(tn, t)[0];
                                            null != t && (0 !== En(jn($e), Ye) || 0 === En(jn($e), Ye) && 0 !== En(t)) ? Te(t, "internal") : In(e[0], Xe)
                                        }(i, r, o) : f.verticalCentered && fe(i)
                                }
                                f.fixedElements && f.css3 && jn(f.fixedElements).forEach(function (t) {
                                    p.appendChild(t)
                                });
                                f.navigation && function () {
                                    var t = Rn.createElement("div");
                                    t.setAttribute("id", "fp-nav");
                                    var e = Rn.createElement("ul");
                                    t.appendChild(e), Pn(t, p);
                                    t = jn(Qe)[0];
                                    In(t, "fp-" + f.navigationPosition), f.showActiveTooltip && In(t, "fp-show-active");
                                    for (var n = "", i = 0; i < jn(Ye).length; i++) {
                                        var r = "";
                                        f.anchors.length && (r = f.anchors[i]), n += '<li><a href="#' + r + '"><span class="fp-sr-only">' + ct(i, "Section") + "</span><span></span></a>";
                                        r = f.navigationTooltips[i];
                                        void 0 !== r && "" !== r && (n += '<div class="' + Ze + " fp-" + f.navigationPosition + '">' + r + "</div>"), n += "</li>"
                                    }
                                    jn("ul", t)[0].innerHTML = n;
                                    t = jn("li", jn(Qe)[0])[En(jn($e)[0], Ye)];
                                    In(jn("a", t), Xe)
                                }();
                                jn('iframe[src*="youtube.com/embed/"]', m).forEach(function (t) {
                                    var e, n;
                                    n = "enablejsapi=1", t = (e = t).getAttribute("src"), e.setAttribute("src", t + function (t) {
                                        return /\?/.test(t) ? "&" : "?"
                                    }(t) + n)
                                }), f.scrollOverflow && (w = f.scrollOverflowHandler.init(f))
                            }(), U(!0), V(!0), X(f.autoScrolling, "internal"), ae(), be(), "complete" === Rn.readyState && Wt();
                        Me.addEventListener("load", Wt), f.scrollOverflow || ut();
                        ! function () {
                            for (var t = 1; t < 4; t++) O = setTimeout(lt, 350 * t)
                        }()
                    }(), Me.addEventListener("scroll", pt), Me.addEventListener("hashchange", Yt), Me.addEventListener("focus", Zt), Me.addEventListener("blur", Jt), Me.addEventListener("resize", oe), Rn.addEventListener("keydown", Ut), Rn.addEventListener("keyup", Vt), ["click", "touchstart"].forEach(function (t) {
                        Rn.addEventListener(t, ot)
                    }), f.normalScrollElements && (["mouseenter", "touchstart"].forEach(function (t) {
                        st(t, !1)
                    }), ["mouseleave", "touchend"].forEach(function (t) {
                        st(t, !0)
                    })));

                    function ot(t) {
                        var e = t.target;
                        e && Hn(e, Qe + " a") ? function (t) {
                            Fn(t);
                            t = En(Hn(this, Qe + " li"));
                            Ot(jn(Ye)[t])
                        }.call(e, t) : $n(e, ".fp-tooltip") ? function () {
                            Yn(wn(this), "click")
                        }.call(e) : $n(e, un) ? function () {
                            var t = Hn(this, Ye);
                            vn(this, hn) ? b.m.left && et(t) : b.m.right && tt(t)
                        }.call(e, t) : $n(e, cn) || null != Hn(e, cn) ? function (t) {
                            Fn(t);
                            var e = jn(nn, Hn(this, Ye))[0],
                                t = jn(Je, e)[En(Hn(this, "li"))];
                            ne(e, t)
                        }.call(e, t) : Hn(e, f.menu + " [data-menuanchor]") && function (t) {
                            !jn(f.menu)[0] || !f.lockAnchors && f.anchors.length || (Fn(t), J(this.getAttribute("data-menuanchor")))
                        }.call(e, t)
                    }

                    function st(t, e) {
                        Rn["fp_" + t] = e, Rn.addEventListener(t, at, !0)
                    }

                    function at(t) {
                        var e = t.type,
                            n = !1,
                            i = f.scrollOverflow,
                            r = "mouseleave" === e ? t.toElement || t.relatedTarget : t.target;
                        if (r == Rn || !r) return V(!0), void (i && f.scrollOverflowHandler.setIscroll(r, !0));
                        "touchend" === e && (z = !1, setTimeout(function () {
                            z = !0
                        }, 800)), "mouseenter" === e && !z || (f.normalScrollElements.split(",").forEach(function (t) {
                            var e;
                            n || (e = $n(r, t), t = Hn(r, t), (e || t) && (u.shared.isNormalScrollElement || (V(!1), i && f.scrollOverflowHandler.setIscroll(r, !1)), u.shared.isNormalScrollElement = !0, n = !0))
                        }), !n && u.shared.isNormalScrollElement && (V(!0), i && f.scrollOverflowHandler.setIscroll(r, !0), u.shared.isNormalScrollElement = !1))
                    }

                    function lt() {
                        var t = gn(),
                            e = yn();
                        v === t && g === e || (v = t, g = e, nt(!0))
                    }

                    function ct(t, e, n) {
                        n = "Section" === e ? f.anchors[t] : n.getAttribute("data-anchor");
                        return f.navigationTooltips[t] || n || e + " " + (t + 1)
                    }

                    function ut() {
                        var t, e, n = jn($e)[0];
                        In(n, We), Ht(n), It(), zt(n), f.scrollOverflow && f.scrollOverflowHandler.afterLoad(), t = $t(), e = me(t.section), t.section && e && (void 0 === e || En(e) !== En(a)) || !Wn(f.afterLoad) || Lt("afterLoad", {
                            activeSection: n,
                            element: n,
                            direction: null,
                            anchorLink: n.getAttribute("data-anchor"),
                            sectionIndex: En(n, Ye)
                        }), Wn(f.afterRender) && Lt("afterRender")
                    }
                    var ht = !1,
                        ft = 0;

                    function pt() {
                        if (!y && (!f.autoScrolling || f.scrollBar)) {
                            var t, e, n, i, r, o = qn(),
                                s = (e = ft < (t = o) ? "down" : "up", Pt = ft = t, e),
                                a = 0,
                                l = o + gn() / 2,
                                c = p.offsetHeight - gn() === o,
                                u = jn(Ye);
                            if (c) a = u.length - 1;
                            else if (o)
                                for (var h = 0; h < u.length; ++h) u[h].offsetTop <= l && (a = h);
                            else a = 0;
                            n = s, t = jn($e)[0].offsetTop, e = t + gn(), ("up" != n ? t <= qn() : e >= qn() + gn()) && (vn(jn($e)[0], We) || (In(jn($e)[0], We), An(Xn(jn($e)[0]), We))), vn(c = u[a], Xe) || (ht = !0, s = En(o = jn($e)[0], Ye) + 1, n = he(c), t = c.getAttribute("data-anchor"), s = {
                                activeSection: o,
                                sectionIndex: (e = En(c, Ye) + 1) - 1,
                                anchorLink: t,
                                element: c,
                                leavingSection: s,
                                direction: n
                            }, (n = jn(tn, c)[0]) && (r = n.getAttribute("data-anchor"), i = En(n)), _ && (In(c, Xe), An(Xn(c), Xe), Wn(f.onLeave) && Lt("onLeave", s), Wn(f.afterLoad) && Lt("afterLoad", s), Xt(o), Ht(c), zt(c), ue(t, e - 1), f.anchors.length && (d = t), ye(i, r, t)), clearTimeout(C), C = setTimeout(function () {
                                ht = !1
                            }, 100)), f.fitToSection && (clearTimeout(A), A = setTimeout(function () {
                                f.fitToSection && jn($e)[0].offsetHeight <= v && dt()
                            }, f.fitToSectionDelay))
                        }
                    }

                    function dt() {
                        _ && (y = !0, Ot(jn($e)[0]), y = !1)
                    }

                    function mt(t) {
                        if (b.m[t]) {
                            var e = "down" === t ? Q : G;
                            if (f.scrollOverflow) {
                                var n = f.scrollOverflowHandler.scrollable(jn($e)[0]),
                                    t = "down" === t ? "bottom" : "top";
                                if (null != n) {
                                    if (!f.scrollOverflowHandler.isScrolled(t, n)) return 1;
                                    e()
                                } else e()
                            } else e()
                        }
                    }

                    function vt(t) {
                        f.autoScrolling && wt(t) && b.m.up && Fn(t)
                    }
                    var gt = 0,
                        yt = 0,
                        _t = 0,
                        xt = 0;

                    function bt(t) {
                        var e = Hn(t.target, Ye) || jn($e)[0];
                        wt(t) && (f.autoScrolling && Fn(t), t = we(t), _t = t.y, xt = t.x, jn(nn, e).length && Math.abs(yt - xt) > Math.abs(gt - _t) ? !l && Math.abs(yt - xt) > yn() / 100 * f.touchSensitivity && (xt < yt ? b.m.right && tt(e) : b.m.left && et(e)) : f.autoScrolling && _ && Math.abs(gt - _t) > Me.innerHeight / 100 * f.touchSensitivity && (_t < gt ? mt("down") : gt < _t && mt("up")))
                    }

                    function wt(t) {
                        return void 0 === t.pointerType || "mouse" != t.pointerType
                    }

                    function Tt(t) {
                        f.fitToSection && (N = !1), wt(t) && (t = we(t), gt = t.y, yt = t.x)
                    }

                    function St(t, e) {
                        for (var n = 0, i = t.slice(Math.max(t.length - e, 1)), r = 0; r < i.length; r++) n += i[r];
                        return Math.ceil(n / e)
                    }
                    var Et = (new Date).getTime();

                    function kt(t) {
                        var e = (new Date).getTime(),
                            n = vn(jn(".fp-completely")[0], Ge);
                        if (!b.m.down && !b.m.up) return Fn(t), !1;
                        if (f.autoScrolling && !o && !n) {
                            var i = (t = t || Me.event).wheelDelta || -t.deltaY || -t.detail,
                                r = Math.max(-1, Math.min(1, i)),
                                n = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
                                n = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !n;
                            149 < x.length && x.shift(), x.push(Math.abs(i)), f.scrollBar && Fn(t);
                            t = e - Et;
                            return Et = e, 200 < t && (x = []), _ && (t = St(x, 10), St(x, 70) <= t && n && mt(r < 0 ? "down" : "up")), !1
                        }
                        f.fitToSection && (N = !1)
                    }

                    function Ct(t, e) {
                        var n = null == e ? jn($e)[0] : e,
                            i = jn(nn, n)[0];
                        if (!(null == i || l || jn(Je, i).length < 2)) {
                            e = jn(tn, i)[0], n = null;
                            if (null == (n = ("left" === t ? xn : bn)(e, Je))) {
                                if (!f.loopHorizontal) return;
                                e = Xn(e), n = "left" === t ? e[e.length - 1] : e[0]
                            }
                            l = !u.test.isTesting, ne(i, n, t)
                        }
                    }

                    function At() {
                        for (var t = jn(tn), e = 0; e < t.length; e++) Te(t[e], "internal")
                    }
                    var Pt = 0;

                    function Ot(t, e, n) {
                        if (null != t) {
                            var i, r, o, s, a, l, e = {
                                element: t,
                                callback: e,
                                isMovementUp: n,
                                dtop: (r = (i = t).offsetHeight, c = s = i.offsetTop, o = Pt < s, e = c - v + r, s = f.bigSectionsDestination, v < r ? (o || s) && "bottom" !== s || (c = e) : (o || y && null == Tn(i)) && (c = e), Pt = c),
                                yMovement: he(t),
                                anchorLink: t.getAttribute("data-anchor"),
                                sectionIndex: En(t, Ye),
                                activeSlide: jn(tn, t)[0],
                                activeSection: jn($e)[0],
                                leavingSection: En(jn($e), Ye) + 1,
                                localIsResizing: y
                            };
                            if (!(e.activeSection == t && !y || f.scrollBar && qn() === e.dtop && !vn(t, Ke))) {
                                if (null != e.activeSlide && (a = e.activeSlide.getAttribute("data-anchor"), l = En(e.activeSlide)), !e.localIsResizing) {
                                    var c = e.yMovement;
                                    if (void 0 !== n && (c = n ? "up" : "down"), e.direction = c, Wn(f.onLeave) && !1 === Lt("onLeave", e)) return
                                }
                                f.autoScrolling && f.continuousVertical && void 0 !== e.isMovementUp && (!e.isMovementUp && "up" == e.yMovement || e.isMovementUp && "down" == e.yMovement) && (e = function (t) {
                                    t.isMovementUp ? zn(jn($e)[0], Gn(t.activeSection, Ye)) : Bn(jn($e)[0], Qn(t.activeSection, Ye).reverse());
                                    return Se(jn($e)[0].offsetTop), At(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.offsetTop, t.yMovement = he(t.element), t
                                }(e)), e.localIsResizing || Xt(e.activeSection), f.scrollOverflow && f.scrollOverflowHandler.beforeLeave(), In(t, Xe), An(Xn(t), Xe), Ht(t), f.scrollOverflow && f.scrollOverflowHandler.onLeave(), _ = u.test.isTesting, ye(l, a, e.anchorLink, e.sectionIndex),
                                    function (t) {
                                        var e = f.scrollingSpeed < 700,
                                            n = e ? 700 : f.scrollingSpeed; {
                                            var i;
                                            f.css3 && f.autoScrolling && !f.scrollBar ? (de("translate3d(0px, -" + Math.round(t.dtop) + "px, 0px)", !0), f.scrollingSpeed ? (clearTimeout(E), E = setTimeout(function () {
                                                Nt(t), _ = !e
                                            }, f.scrollingSpeed)) : Nt(t)) : (i = Mt(t.dtop), u.test.top = -t.dtop + "px", Pe(i.element, i.options, f.scrollingSpeed, function () {
                                                f.scrollBar ? setTimeout(function () {
                                                    Nt(t)
                                                }, 30) : (Nt(t), _ = !e)
                                            }))
                                        }
                                        e && (clearTimeout(I), I = setTimeout(function () {
                                            _ = !0
                                        }, n))
                                    }(e), d = e.anchorLink, ue(e.anchorLink, e.sectionIndex)
                            }
                        }
                    }

                    function Lt(t, e) {
                        var n, e = function (t, e) {
                            var n;
                            n = f.v2compatible ? {
                                afterRender: function () {
                                    return [m]
                                },
                                onLeave: function () {
                                    return [e.activeSection, e.leavingSection, e.sectionIndex + 1, e.direction]
                                },
                                afterLoad: function () {
                                    return [e.element, e.anchorLink, e.sectionIndex + 1]
                                },
                                afterSlideLoad: function () {
                                    return [e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex]
                                },
                                onSlideLeave: function () {
                                    return [e.prevSlide, e.anchorLink, e.sectionIndex + 1, e.prevSlideIndex, e.direction, e.slideIndex]
                                }
                            } : {
                                afterRender: function () {
                                    return {
                                        section: Dt(jn($e)[0]),
                                        slide: Rt(jn(tn, jn($e)[0])[0])
                                    }
                                },
                                onLeave: function () {
                                    return {
                                        origin: Dt(e.activeSection),
                                        destination: Dt(e.element),
                                        direction: e.direction
                                    }
                                },
                                afterLoad: function () {
                                    return n.onLeave()
                                },
                                afterSlideLoad: function () {
                                    return {
                                        section: Dt(e.section),
                                        origin: Rt(e.prevSlide),
                                        destination: Rt(e.destiny),
                                        direction: e.direction
                                    }
                                },
                                onSlideLeave: function () {
                                    return n.afterSlideLoad()
                                }
                            };
                            return n[t]()
                        }(t, e);
                        if (f.v2compatible) {
                            if (!1 === f[t].apply(e[0], e.slice(1))) return !1
                        } else if (Yn(m, t, e), !1 === f[t].apply(e[Object.keys(e)[0]], (n = e, Object.keys(n).map(function (t) {
                            return n[t]
                        })))) return !1;
                        return !0
                    }

                    function Dt(t) {
                        return t ? new De(t) : null
                    }

                    function Rt(t) {
                        return t ? new Re(t) : null
                    }

                    function Mt(t) {
                        var e = {};
                        return f.autoScrolling && !f.scrollBar ? (e.options = -t, e.element = jn(je)[0]) : (e.options = t, e.element = Me), e
                    }

                    function Nt(t) {
                        var e;
                        null != (e = t).wrapAroundElements && (e.isMovementUp ? zn(jn(Ye)[0], e.wrapAroundElements) : Bn(jn(Ye)[jn(Ye).length - 1], e.wrapAroundElements), Se(jn($e)[0].offsetTop), At()), Wn(f.afterLoad) && !t.localIsResizing && Lt("afterLoad", t), f.scrollOverflow && f.scrollOverflowHandler.afterLoad(), t.localIsResizing || zt(t.element), In(t.element, We), An(Xn(t.element), We), It(), _ = !0, Wn(t.callback) && t.callback()
                    }

                    function jt(t, e) {
                        t.setAttribute(e, t.getAttribute("data-" + e)), t.removeAttribute("data-" + e)
                    }

                    function It() {
                        var t = jn(".fp-auto-height")[0] || it() && jn(".fp-auto-height-responsive")[0];
                        f.lazyLoading && t && jn(Ye + ":not(" + Fe + ")").forEach(function (t) {
                            var e, n;
                            e = (n = (e = t).getBoundingClientRect()).top, n = n.bottom, (e + 2 < v && 0 < e || 2 < n && n < v) && Ht(t)
                        })
                    }

                    function Ht(i) {
                        f.lazyLoading && jn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Ft(i)).forEach(function (n) {
                            var t;
                            ["src", "srcset"].forEach(function (t) {
                                var e = n.getAttribute("data-" + t);
                                null != e && e && (jt(n, t), n.addEventListener("load", function () {
                                    Bt(i)
                                }))
                            }), !$n(n, "source") || (t = Hn(n, "video, audio")) && (t.load(), t.onloadeddata = function () {
                                Bt(i)
                            })
                        })
                    }

                    function Bt(t) {
                        f.scrollOverflow && (clearTimeout(j), j = setTimeout(function () {
                            vn(p, Ie) || w.createScrollBar(t)
                        }, 200))
                    }

                    function zt(t) {
                        t = Ft(t);
                        jn("video, audio", t).forEach(function (t) {
                            t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
                        }), jn('iframe[src*="youtube.com/embed/"]', t).forEach(function (t) {
                            t.hasAttribute("data-autoplay") && qt(t), t.onload = function () {
                                t.hasAttribute("data-autoplay") && qt(t)
                            }
                        })
                    }

                    function qt(t) {
                        t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
                    }

                    function Xt(t) {
                        t = Ft(t);
                        jn("video, audio", t).forEach(function (t) {
                            t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
                        }), jn('iframe[src*="youtube.com/embed/"]', t).forEach(function (t) {
                            /youtube\.com\/embed\//.test(t.getAttribute("src")) && !t.hasAttribute("data-keepplaying") && t.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                        })
                    }

                    function Ft(t) {
                        var e = jn(tn, t);
                        return e.length && (t = e[0]), t
                    }

                    function Wt() {
                        var t = $t(),
                            e = t.section,
                            t = t.slide;
                        e && (f.animateAnchor ? ve : Z)(e, t)
                    }

                    function Yt() {
                        var t, e, n, i;
                        ht || f.lockAnchors || (t = (i = $t()).section, e = i.slide, i = (n = void 0 === d) && void 0 === e && !l, t && t.length && (t && t !== d && !n || i || !l && r != e) && ve(t, e))
                    }

                    function $t() {
                        var t, e, n, i = Me.location.hash;
                        return i.length && (n = i.replace("#", "").split("/"), e = (i = -1 < i.indexOf("#/")) ? "/" + n[1] : decodeURIComponent(n[0]), (n = i ? n[2] : n[1]) && n.length && (t = decodeURIComponent(n))), {
                            section: e,
                            slide: t
                        }
                    }

                    function Ut(t) {
                        clearTimeout(P);
                        var e = Rn.activeElement,
                            n = t.keyCode;
                        9 === n ? function (t) {
                            var e = t.shiftKey,
                                n = Rn.activeElement,
                                i = Qt(Ft(jn($e)[0]));

                            function r(t) {
                                return Fn(t), i[0] ? i[0].focus() : null
                            }
                            if (function (t) {
                                var e = Qt(Rn),
                                    n = e.indexOf(Rn.activeElement),
                                    n = t.shiftKey ? n - 1 : n + 1,
                                    e = e[n],
                                    n = Rt(Hn(e, Je)),
                                    e = Dt(Hn(e, Ye));
                                return !n && !e
                            }(t)) return;
                            n ? null == Hn(n, $e + "," + $e + " " + tn) && (n = r(t)) : r(t);
                            (!e && n == i[i.length - 1] || e && n == i[0]) && Fn(t)
                        }(t) : $n(e, "textarea") || $n(e, "input") || $n(e, "select") || "true" === e.getAttribute("contentEditable") || "" === e.getAttribute("contentEditable") || !f.keyboardScrolling || !f.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(n) && Fn(t), o = t.ctrlKey, P = setTimeout(function () {
                            ! function (t) {
                                var e = t.shiftKey,
                                    n = Rn.activeElement,
                                    i = $n(n, "video") || $n(n, "audio");
                                if (!_ && [37, 39].indexOf(t.keyCode) < 0) return;
                                switch (t.keyCode) {
                                    case 38:
                                    case 33:
                                        b.k.up && G();
                                        break;
                                    case 32:
                                        if (e && b.k.up && !i) {
                                            G();
                                            break
                                        }
                                    case 40:
                                    case 34:
                                        b.k.down && (32 === t.keyCode && i || Q());
                                        break;
                                    case 36:
                                        b.k.up && J(1);
                                        break;
                                    case 35:
                                        b.k.down && J(jn(Ye).length);
                                        break;
                                    case 37:
                                        b.k.left && et();
                                        break;
                                    case 39:
                                        b.k.right && tt();
                                        break;
                                    default:
                                        ;
                                }
                            }(t)
                        }, 150))
                    }

                    function Vt(t) {
                        e && (o = t.ctrlKey)
                    }

                    function Kt(t) {
                        2 == t.which && (te = t.pageY, m.addEventListener("mousemove", ee))
                    }

                    function Gt(t) {
                        2 == t.which && m.removeEventListener("mousemove", ee)
                    }

                    function Qt(t) {
                        return [].slice.call(jn(D, t)).filter(function (t) {
                            return "-1" !== t.getAttribute("tabindex") && null !== t.offsetParent
                        })
                    }

                    function Zt() {
                        e = !0
                    }

                    function Jt() {
                        o = e = !1
                    }
                    var te = 0;

                    function ee(t) {
                        f.autoScrolling && (_ && (t.pageY < te && b.m.up ? G() : t.pageY > te && b.m.down && Q()), te = t.pageY)
                    }

                    function ne(t, e, n) {
                        var i = Hn(t, Ye),
                            n = {
                                slides: t,
                                destiny: e,
                                direction: n,
                                destinyPos: {
                                    left: e.offsetLeft
                                },
                                slideIndex: En(e),
                                section: i,
                                sectionIndex: En(i, Ye),
                                anchorLink: i.getAttribute("data-anchor"),
                                slidesNav: jn(ln, i)[0],
                                slideAnchor: xe(e),
                                prevSlide: jn(tn, i)[0],
                                prevSlideIndex: En(jn(tn, i)[0]),
                                localIsResizing: y
                            };
                        n.xMovement = function (t, e) {
                            if (t == e) return "none";
                            if (e < t) return "left";
                            return "right"
                        }(n.prevSlideIndex, n.slideIndex), n.direction = n.direction || n.xMovement, n.localIsResizing || (_ = !1), f.onSlideLeave && !n.localIsResizing && "none" !== n.xMovement && Wn(f.onSlideLeave) && !1 === Lt("onSlideLeave", n) ? l = !1 : (In(e, Xe), An(Xn(e), Xe), n.localIsResizing || (Xt(n.prevSlide), Ht(e)), !f.loopHorizontal && f.controlArrows && (Un(jn(fn, i), 0 !== n.slideIndex), Un(jn(pn, i), null != Tn(e))), vn(i, Xe) && !n.localIsResizing && ye(n.slideIndex, n.slideAnchor, n.anchorLink, n.sectionIndex), function (t, e, n) {
                            var i = e.destinyPos; {
                                var r;
                                f.css3 ? (r = "translate3d(-" + Math.round(i.left) + "px, 0px, 0px)", u.test.translate3dH[e.sectionIndex] = r, _n(le(jn(on, t)), Ee(r)), k = setTimeout(function () {
                                    n && ie(e)
                                }, f.scrollingSpeed)) : (u.test.left[e.sectionIndex] = Math.round(i.left), Pe(t, Math.round(i.left), f.scrollingSpeed, function () {
                                    n && ie(e)
                                }))
                            }
                        }(t, n, !0))
                    }

                    function ie(t) {
                        var e, n;
                        e = t.slidesNav, n = t.slideIndex, f.slidesNavigation && null != e && (An(jn(Fe, e), Xe), In(jn("a", jn("li", e)[n]), Xe)), t.localIsResizing || (Wn(f.afterSlideLoad) && Lt("afterSlideLoad", t), _ = !0, zt(t.destiny)), l = !1
                    }
                    var re = v;

                    function oe() {
                        y = !0, clearTimeout(T), T = setTimeout(function () {
                            for (var t = 0; t < 4; t++) S = setTimeout(se, 200 * t)
                        }, 200)
                    }

                    function se() {
                        var t;
                        ae(), c ? $n(t = Rn.activeElement, "textarea") || $n(t, "input") || $n(t, "select") || (t = gn(), Math.abs(t - re) > 20 * Math.max(re, t) / 100 && (nt(!0), re = t)) : lt()
                    }

                    function ae() {
                        var t = f.responsive || f.responsiveWidth,
                            e = f.responsiveHeight,
                            n = t && Me.innerWidth < t,
                            i = e && Me.innerHeight < e;
                        t && e ? rt(n || i) : t ? rt(n) : e && rt(i)
                    }

                    function le(t) {
                        var e = "all " + f.scrollingSpeed + "ms " + f.easingcss3;
                        return An(t, He), _n(t, {
                            "-webkit-transition": e,
                            transition: e
                        })
                    }

                    function ce(t) {
                        return In(t, He)
                    }

                    function ue(t, e) {
                        var n;
                        n = t, jn(f.menu).forEach(function (t) {
                            f.menu && null != t && (An(jn(Fe, t), Xe), In(jn('[data-menuanchor="' + n + '"]', t), Xe))
                        }), t = t, e = e, f.navigation && null != jn(Qe)[0] && (An(jn(Fe, jn(Qe)[0]), Xe), In(t ? jn('a[href="#' + t + '"]', jn(Qe)[0]) : jn("a", jn("li", jn(Qe)[0])[e]), Xe))
                    }

                    function he(t) {
                        var e = En(jn($e)[0], Ye),
                            t = En(t, Ye);
                        return e == t ? "none" : t < e ? "up" : "down"
                    }

                    function fe(t) {
                        var e;
                        vn(t, sn) || ((e = Rn.createElement("div")).className = Ue, e.style.height = pe(t) + "px", In(t, sn), Ln(t, e))
                    }

                    function pe(t) {
                        var e, n = v;
                        return (f.paddingTop || f.paddingBottom) && (vn(e = t, Mn) || (e = Hn(t, Ye)), e = parseInt(getComputedStyle(e)["padding-top"]) + parseInt(getComputedStyle(e)["padding-bottom"]), n = v - e), n
                    }

                    function de(t, e) {
                        (e ? le : ce)(m), _n(m, Ee(t)), u.test.translate3d = t, setTimeout(function () {
                            An(m, He)
                        }, 10)
                    }

                    function me(t) {
                        var e = jn(Ye + '[data-anchor="' + t + '"]', m)[0];
                        return e || (t = void 0 !== t ? t - 1 : 0, e = jn(Ye)[t]), e
                    }

                    function ve(t, e) {
                        var n, i, r = me(t);
                        null != r && (null == (e = jn(Je + '[data-anchor="' + (i = e) + '"]', t = r)[0]) && (i = void 0 !== i ? i : 0, e = jn(Je, t)[i]), n = e, xe(r) === d || vn(r, Xe) ? ge(n) : Ot(r, function () {
                            ge(n)
                        }))
                    }

                    function ge(t) {
                        null != t && ne(Hn(t, nn), t)
                    }

                    function ye(t, e, n) {
                        var i = "";
                        f.anchors.length && !f.lockAnchors && (t ? (null != n && (i = n), null == e && (e = t), _e(i + "/" + (r = e))) : (null != t && (r = e), _e(n))), be()
                    }

                    function _e(t) {
                        var e;
                        f.recordHistory ? location.hash = t : c || h ? Me.history.replaceState(void 0, void 0, "#" + t) : (e = Me.location.href.split("#")[0], Me.location.replace(e + "#" + t))
                    }

                    function xe(t) {
                        if (!t) return null;
                        var e = t.getAttribute("data-anchor"),
                            t = En(t);
                        return null == e && (e = t), e
                    }

                    function be() {
                        var t = jn($e)[0],
                            e = jn(tn, t)[0],
                            n = xe(t),
                            t = xe(e),
                            n = String(n);
                        e && (n = n + "-" + t), n = n.replace("/", "-").replace("#", "");
                        t = new RegExp("\\b\\s?" + qe + "-[^\\s]+\\b", "g");
                        p.className = p.className.replace(t, ""), In(p, qe + "-" + n)
                    }

                    function we(t) {
                        var e = [];
                        return e.y = (void 0 !== t.pageY && (t.pageY || t.pageX) ? t : t.touches[0]).pageY, e.x = (void 0 !== t.pageX && (t.pageY || t.pageX) ? t : t.touches[0]).pageX, h && wt(t) && f.scrollBar && void 0 !== t.touches && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
                    }

                    function Te(t, e) {
                        W(0, "internal"), void 0 !== e && (y = !0), ne(Hn(t, nn), t), void 0 !== e && (y = !1), W(H.scrollingSpeed, "internal")
                    }

                    function Se(t) {
                        t = Math.round(t);
                        f.css3 && f.autoScrolling && !f.scrollBar ? de("translate3d(0px, -" + t + "px, 0px)", !1) : f.autoScrolling && !f.scrollBar ? (_n(m, {
                            top: -t + "px"
                        }), u.test.top = -t + "px") : Oe((t = Mt(t)).element, t.options)
                    }

                    function Ee(t) {
                        return {
                            "-webkit-transform": t,
                            "-moz-transform": t,
                            "-ms-transform": t,
                            transform: t
                        }
                    }

                    function ke(e, t, n) {
                        "all" !== t ? b[n][t] = e : Object.keys(b[n]).forEach(function (t) {
                            b[n][t] = e
                        })
                    }

                    function Ce(t, e, n) {
                        f[t] = e, "internal" !== n && (H[t] = e)
                    }

                    function Ae() {
                        var t = f.licenseKey,
                            e = "font-size: 15px;background:yellow;";
                        n ? t && t.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", e), console.warn("%c https://alvarotrigo.com/fullPage/", e)) : (dn("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), dn("error", "https://github.com/alvarotrigo/fullPage.js#options.")), vn(s, ze) ? dn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (f.continuousVertical && (f.loopTop || f.loopBottom) && (f.continuousVertical = !1, dn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !f.scrollOverflow || !f.scrollBar && f.autoScrolling || dn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !f.continuousVertical || !f.scrollBar && f.autoScrolling || (f.continuousVertical = !1, dn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), f.scrollOverflow && null == f.scrollOverflowHandler && (f.scrollOverflow = !1, dn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), q.forEach(function (t) {
                            f[t] && dn("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + t)
                        }), f.anchors.forEach(function (e) {
                            var t, n = [].slice.call(jn("[name]")).filter(function (t) {
                                return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase()
                            }),
                                i = [].slice.call(jn("[id]")).filter(function (t) {
                                    return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase()
                                });
                            (i.length || n.length) && (dn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), t = i.length ? "id" : "name", (i.length || n.length) && dn("error", '"' + e + '" is is being used by another element `' + t + "` property"))
                        }))
                    }

                    function Pe(n, i, r, o) {
                        var t, s = t = (t = n).self != Me && vn(t, en) ? t.scrollLeft : !f.autoScrolling || f.scrollBar ? qn() : t.offsetTop,
                            a = i - s,
                            l = 0;
                        N = !0,
                            function t() {
                                var e;
                                N ? (e = i, l += 20, r && (e = Me.fp_easings[f.easing](l, s, a, r)), Oe(n, e), l < r ? setTimeout(t, 20) : void 0 !== o && o()) : l < r && o()
                            }()
                    }

                    function Oe(t, e) {
                        !f.autoScrolling || f.scrollBar || t.self != Me && vn(t, en) ? t.self != Me && vn(t, en) ? t.scrollLeft = e : t.scrollTo(0, e) : t.style.top = e + "px"
                    }

                    function Le(t, e) {
                        this.anchor = t.getAttribute("data-anchor"), this.item = t, this.index = En(t, e), this.isLast = this.index === t.parentElement.querySelectorAll(e).length - 1, this.isFirst = !this.index
                    }

                    function De(t) {
                        Le.call(this, t, Ye)
                    }

                    function Re(t) {
                        Le.call(this, t, Je)
                    }
                    return u
                }
        }(r, o), i.fullpage
    }.call(e, n, e, t)) || (t.exports = e), window.jQuery && window.fullpage && function (e, n) {
        "use strict";
        e && n ? e.fn.fullpage = function (t) {
            t = e.extend({}, t, {
                $: e
            });
            new n(this[0], t)
        } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
    }(window.jQuery, window.fullpage)
}, function (t, e, n) {
    n(5), t.exports = n(6)
}, function (t, e, n) { }, function (t, e, g) {
    "use strict";
    g.r(e),
        function (o, t, e) {
            var n = g(8),
                i = g(9),
                n = g(10),
                i = g(12),
                n = g(3);

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            new (g.n(n).a)(".page", {
                scrollOverflow: !0,
                anchors: ["presentation", "projet", "citation", "messages", "fiscalite"],
                navigation: !0,
                navigationPosition: "right",
                css3: !1,
                fixedElements: ".donation-form0, .donation-form1",
                normalScrollElements: ".scrollable-element",
                verticalCentered: !1,
                responsiveWidth: 1200
            });
            6 < window.location.hash.substr(1).length && 1 == window.location.hash.indexOf("projet") && (o("#" + window.location.hash.substr(13) + "-popin").addClass("active"), o("#" + window.location.hash.substr(13)).addClass("active"), o(".rollover." + window.location.hash.substr(13)).addClass("active"), fullpage_api.silentMoveTo("projet", 0)), o.urlParam = function (t) {
                t = new RegExp("[?&]" + t + "=([^&#]*)").exec(window.location.href);
                return null == t ? null : decodeURI(t[1]) || 0
            };
            var s, a, l, c, u, h = window.location.origin + window.location.pathname;
            n = !(i = function () {
                function m() {
                    for (var t = 0, e = {}; t < arguments.length; t++) {
                        var n, i = arguments[t];
                        for (n in i) e[n] = i[n]
                    }
                    return e
                }
                return function t(p) {
                    function d(t, e, n) {
                        var i, r;
                        if ("undefined" != typeof document) {
                            if (1 < arguments.length) {
                                "number" == typeof (n = m({
                                    path: "/"
                                }, d.defaults, n)).expires && ((r = new Date).setMilliseconds(r.getMilliseconds() + 864e5 * n.expires), n.expires = r), n.expires = n.expires ? n.expires.toUTCString() : "";
                                try {
                                    i = JSON.stringify(e), /^[\{\[]/.test(i) && (e = i)
                                } catch (t) { }
                                e = p.write ? p.write(e, t) : encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                                var o, s = "";
                                for (o in n) n[o] && (s += "; " + o, !0 !== n[o] && (s += "=" + n[o]));
                                return document.cookie = t + "=" + e + s
                            }
                            t || (i = {});
                            for (var a = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, c = 0; c < a.length; c++) {
                                var u = a[c].split("="),
                                    h = u.slice(1).join("=");
                                this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
                                try {
                                    var f = u[0].replace(l, decodeURIComponent),
                                        h = p.read ? p.read(h, f) : p(h, f) || h.replace(l, decodeURIComponent);
                                    if (this.json) try {
                                        h = JSON.parse(h)
                                    } catch (t) { }
                                    if (t === f) {
                                        i = h;
                                        break
                                    }
                                    t || (i[f] = h)
                                } catch (t) { }
                            }
                            return i
                        }
                    }
                    return (d.set = d).get = function (t) {
                        return d.call(d, t)
                    }, d.getJSON = function () {
                        return d.apply({
                            json: !0
                        }, [].slice.call(arguments))
                    }, d.defaults = {}, d.remove = function (t, e) {
                        d(t, "", m(e, {
                            expires: -1
                        }))
                    }, d.withConverter = t, d
                }(function () { })
            }), "function" == typeof define && g(2) && (define(i), n = !0), "object" == ("undefined" == typeof exports ? "undefined" : r(exports)) && (t.exports = i(), n = !0), n || (s = window.Cookies, (a = window.Cookies = i()).noConflict = function () {
                return window.Cookies = s, a
            }), (l = e)(function () {
                Cookies.get("showExitPopup");
                var e = l("body"),
                    n = l(".exit-popup");
                window.addEventListener("mouseout", function (t) {
                    t.clientY < 0 && t.offsetX > l(this).width() - 500 && (e.hasClass("popup-once-opened") || (n.fadeIn(), e.addClass("popup-once-opened"), Cookies.set("showExitPopup", "true", {
                        expires: 30
                    })))
                }, !1), l(".exit-popup__form").on("submit", function (t) {
                    t.preventDefault();
                    var e = l(this);
                    l.ajax({
                        type: "POST",
                        cache: !1,
                        url: "https://careme-fraternel.oeuvre-orient.fr/actions/submit.php",
                        dataType: "json",
                        data: e.serialize()
                    }).done(function (t) {
                        t.success && (l("input[type=email]", e).val(""), l(".exit-popup").hide(), l(".merci-popup").fadeIn())
                    })
                })
            }), (c = e)(function () {
                var e = c(".message-popup");
                c(".message-popup__close", e).on("click", function () {
                    c(this).parent(".message-popup").fadeOut()
                }), c(document).mouseup(function (t) {
                    e.is(t.target) || 0 !== e.has(t.target).length || e.fadeOut()
                })
            }), (u = e)(function () {
                u(".newsletter-block__btn").on("click", function (t) {
                    t.preventDefault();
                    var e = u(this),
                        n = e.parents(".newsletter-block"),
                        t = u("form", n);
                    u("form", n).slideDown(250), t.is(":visible") && e.addClass("disable"), u("input[name=prenom]", n).focus()
                }), u(".newsletter-form").on("submit", function (t) {
                    t.preventDefault();
                    var e = u(this);
                    u.ajax({
                        type: "POST",
                        cache: !1,
                        url: "/actions/submit.php",
                        dataType: "json",
                        data: e.serialize()
                    }).done(function (t) {
                        t.success && (u("input[type=text], input[type=email]", e).val(""), e.parents(".newsletter-block").find(".newsletter-block__btn").removeClass("disable"), e.hide(), u(".merci-popup").fadeIn())
                    })
                }), u(document).mouseup(function (t) {
                    var e = u(".newsletter-form");
                    e.is(t.target) || 0 !== e.has(t.target).length || (e.fadeOut(), u(".newsletter-block__btn").removeClass("disable"))
                })
            }), o(".rollover, .country-name").on("click", function () {
                var t = o(this).data("name");
                window.history.replaceState(null, null, "#projet?pays=" + t), o(".popin").hasClass("active") ? (o(".popin").removeClass("active"), setTimeout(function () {
                    o("#" + t + "-popin").addClass("active")
                }, 500)) : o("#" + t + "-popin").addClass("active"), o("html, body").animate({
                    scrollTop: o(".carte").offset().top
                }, 600)
            }), o(".close-popin").on("click", function () {
                o(".popin").removeClass("active"), o(".rollover").removeClass("active"), o("html, body").animate({
                    scrollTop: o("#map").offset().top - 200
                }, 600)
            }), o("#map g").unbind("mouseenter mouseleave"), o(".country-name, .rollover, g").on("mouseenter", function () {
                o(".rollover").removeClass("active"), o(".country-name, .rollover").removeClass("clicked"), o(this).addClass("clicked"), o("." + o(this).data("name")).addClass("active")
            }), o(".carte svg").on("mouseleave", function () {
                var t;
                0 < o(".popin.active").length && (t = o(".popin.active").attr("data-popin"), o(".rollover").removeClass("active"), o("." + t).addClass("active"))
            }), o("#text-message").on("focus change focusout", function () {
                o(".info-form").hide()
            }), o("#text-message").on("blur", function () {
                0 === o("#text-message").val().length && o(".info-form").show()
            }), o(".dot").on("click", function () {
                o.ajax({
                    method: "GET",
                    url: h + "?oo-messages=oo-messages",
                    async: !0,
                    dataType: "json",
                    success: function (t) {
                        console.log(t), o(".popin-message .msg-text").html(t.message), o(".popin-message .name").html(t.name), o(".popin-message").show()
                    },
                    error: function (t) {
                        console.log(t)
                    }
                })
            }), o("#captation textarea, #captation input").on("focus, change, blur", function () {
                0 < o("#captation.error").length && (o("#captation").removeClass("error"), o(".info-form .container-placeholder").html("<span>&Eacute;crivez votre intention de prière ou votre message</span><span>(400 caractères maximum)</span>").hide())
            });
            var f = !1;
            o("#captation button").on("click", function (t) {
                t.preventDefault();
                o(this);
                var e = o("#captation textarea[name=message]").val(),
                    n = o("#captation input[type=radio]:checked").val(),
                    i = o("#captation input[type=radio]:checked").val(),
                    r = o("#captation input[name=last_name]").val(),
                    t = o("#captation input[name=email]").val();
                e && n && i && r && /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t) ? f || o.ajax({
                    method: "POST",
                    url: h + "/?oo-send-message=send-message",
                    data: {
                        message: o("#captation textarea[name=message]").val(),
                        civility: o("#captation input[type=radio]:checked").val(),
                        first_name: o("#captation input[name=first_name]").val(),
                        last_name: o("#captation input[name=last_name]").val(),
                        email: o("#captation input[name=email]").val()
                    },
                    success: function (t) {
                        console.log(t), o(".info-form .container-placeholder").html("Votre message a bien été envoyé"), o(".info-form").show(), o("#captation")[0].reset(), f = !0, 0 < o("#captation.error").length && o("#captation").removeClass("error")
                    },
                    error: function (t) {
                        console.log(t), o("#captation").addClass("error"), o(".info-form .container-placeholder").html("Une erreur c'est produite..."), o(".info-form").show()
                    }
                }) : (o("#captation").addClass("error"), o(".info-form .container-placeholder").html("Une erreur c'est produite..."), o(".info-form, .container-placeholder").show())
            }), o(".close-msg").on("click", function () {
                o(".popin-message").hide()
            }), o(document).ready(function () {
                6 < window.location.hash.substr(1).length && 1 == window.location.hash.indexOf("projet") && (o("#" + window.location.hash.substr(13) + "-popin").addClass("active"), o("#" + window.location.hash.substr(13)).addClass("active"), o(".rollover." + window.location.hash.substr(13)).addClass("active"))
            });

            function p(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            }
            var d, m, v, i = document.querySelectorAll("#map g");
            console.log(i),
                function (t, e, n) {
                    for (var i = 0; i < t.length; i++) e.call(n, i, t[i])
                }(i, function (t, e) {
                    e.groupTimeline = new TimelineMax({
                        paused: !0
                    }), e.groupTimeline.to(e, .25, {
                        opacity: 0
                    }), new TimelineMax({
                        repeat: -1,
                        delay: p(1, 3),
                        repeatDelay: p(0, 1)
                    }).to(e.querySelector(".Pin-back"), 3, {
                        scale: 50,
                        transformOrigin: "center center",
                        opacity: 0
                    })
                }), (d = e)(function () {
                    d(".chart-block__chart-wrap").one("inview", function () {
                        d(".circle-chart__circle").css("animation", "circle-chart-fill 1.5s reverse")
                    })
                }),
                function (r) {
                    var t = r(".donation-form0");
                    r(".donation-ponctuel input[name=donation0]", t).on("change", function () {
                        var t = r(this).parents(".donation-form0"),
                            e = r(".donation-ponctuel input[name='donation0']:checked").val(),
                            n = s(e),
                            n = n || "……";
                        r(".donation-ponctuel .count", t).text(n), e && (e = o(e), t.find(".btn").attr("href", e))
                    }), r(".donation-ponctuel .donation-form__input0", t).on("focus", function () {
                        var t = r(this),
                            e = t.parents(".donation-form0");
                        r(".donation-ponctuel input[name=donation0]", e).prop("checked", !1), r(".donation-ponctuel .count", e).text("……"), t.attr("placeholder", ""), t.addClass("active")
                    }), r(".donation-ponctuel .donation-form__input0", t).on("focusout", function () {
                        r(this).attr("placeholder", "Montant libre"), r(this).val() || r(this).removeClass("active")
                    }), r(".donation-ponctuel .donation-form__input0", t).on("input", function () {
                        var t = r(this),
                            e = t.parents(".donation-form0"),
                            n = t.val(),
                            i = s(n = n.replace(/ /g, "")),
                            t = i || "……";
                        r(".donation-ponctuel .count", e).text(t), i && (n = o(n), e.find(".btn").attr("href", n))
                    }), r(".donation-ponctuel .donation-form__input0", t).keypress(function (t) {
                        t = t.which || t.keyCode;
                        return !(31 < t && (t < 48 || 57 < t))
                    }), r(".donation-ponctuel .donation-form__input0", t).keyup(function (t) {
                        r(this).val(function (t, e) {
                            return e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                        })
                    });

                    r(".donation-prelevement input[name=donation0]", t).on("change", function () {
                        var t = r(this).parents(".donation-form0"),
                            e = r(".donation-prelevement input[name='donation0']:checked").val(),
                            n = s(e),
                            n = n || "……";
                        r(".donation-prelevement .count", t).text(n), e && (e = o(e, ".donation-prelevement"), t.find(".btn").attr("href", e))
                    }), r(".donation-prelevement .donation-form__input0", t).on("focus", function () {
                        var t = r(this),
                            e = t.parents(".donation-form0");
                        r(".donation-prelevement input[name=donation0]", e).prop("checked", !1), r(".donation-prelevement .count", e).text("……"), t.attr("placeholder", ""), t.addClass("active")
                    }), r(".donation-prelevement .donation-form__input0", t).on("focusout", function () {
                        r(this).attr("placeholder", "Montant libre"), r(this).val() || r(this).removeClass("active")
                    }), r(".donation-prelevement .donation-form__input0", t).on("input", function () {
                        var t = r(this),
                            e = t.parents(".donation-form0"),
                            n = t.val(),
                            i = s(n = n.replace(/ /g, "")),
                            t = i || "……";
                        r(".donation-prelevement .count", e).text(t), i && (n = o(n, ".donation-prelevement"), e.find(".btn").attr("href", n))
                    }), r(".donation-prelevement .donation-form__input0", t).keypress(function (t) {
                        t = t.which || t.keyCode;
                        return !(31 < t && (t < 48 || 57 < t))
                    }), r(".donation-prelevement .donation-form__input0", t).keyup(function (t) {
                        r(this).val(function (t, e) {
                            return e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                        })
                    });

                    t = r(".donation-form1");

                    r(".donation-ponctuel input[name=donation1]", t).on("change", function () {
                        var t = r(this).parents(".donation-form1"),
                            e = r(".donation-ponctuel input[name='donation1']:checked").val(),
                            n = s(e),
                            n = n || "……";
                        r(".donation-ponctuel .count", t).text(n), e && (e = o(e, ".donation-ponctuel"), t.find(".donation-ponctuel .btn").attr("href", e))
                    }), r(".donation-ponctuel .donation-form__input1", t).on("focus", function () {
                        var t = r(this),
                            e = t.parents(".donation-form1");
                        r(".donation-ponctuel input[name=donation1]", e).prop("checked", !1), r(".donation-ponctuel .count", e).text("……"), t.attr("placeholder", ""), t.addClass("active")
                    }), r(".donation-ponctuel .donation-form__input1", t).on("focusout", function () {
                        r(this).attr("placeholder", "Montant libre"), r(this).val() || r(this).removeClass("active")
                    }), r(".donation-ponctuel .donation-form__input1", t).on("input", function () {
                        var t = r(this),
                            e = t.parents(".donation-form1"),
                            n = t.val(),
                            i = s(n = n.replace(/ /g, "")),
                            t = i || "……";
                        r(".donation-ponctuel .count", e).text(t), i && (n = o(n, ".donation-ponctuel"), e.find(".donation-ponctuel .btn").attr("href", n))
                    }), r(".donation-ponctuel .donation-form__input1", t).keypress(function (t) {
                        t = t.which || t.keyCode;
                        return !(31 < t && (t < 48 || 57 < t))
                    }), r(".donation-ponctuel .donation-form__input1", t).keyup(function (t) {
                        r(this).val(function (t, e) {
                            return e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                        })
                    });

                    r(".donation-prelevement input[name=donation1]", t).on("change", function () {
                        var t = r(this).parents(".donation-form1"),
                            e = r(".donation-prelevement input[name='donation1']:checked").val(),
                            n = s(e),
                            n = n || "……";
                        r(".donation-prelevement .count", t).text(n), e && (e = o(e, ".donation-prelevement"), t.find(".donation-prelevement .btn").attr("href", e))
                    }), r(".donation-prelevement .donation-form__input1", t).on("focus", function () {
                        var t = r(this),
                            e = t.parents(".donation-form1");
                        r(".donation-prelevement input[name=donation1]", e).prop("checked", !1), r(".donation-prelevement .count", e).text("……"), t.attr("placeholder", ""), t.addClass("active")
                    }), r(".donation-prelevement .donation-form__input1", t).on("focusout", function () {
                        r(this).attr("placeholder", "Montant libre"), r(this).val() || r(this).removeClass("active")
                    }), r(".donation-prelevement .donation-form__input1", t).on("input", function () {
                        var t = r(this),
                            e = t.parents(".donation-form1"),
                            n = t.val(),
                            i = s(n = n.replace(/ /g, "")),
                            t = i || "……";
                        r(".donation-prelevement .count", e).text(t), i && (n = o(n, ".donation-prelevement"), e.find(".donation-prelevement .btn").attr("href", n))
                    }), r(".donation-prelevement .donation-form__input1", t).keypress(function (t) {
                        t = t.which || t.keyCode;
                        return !(31 < t && (t < 48 || 57 < t))
                    }), r(".donation-prelevement .donation-form__input1", t).keyup(function (t) {
                        r(this).val(function (t, e) {
                            return e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                        })
                    });


                    t = r(".donation-form3");

                    function o(t, type) {
                        if (type == undefined) type = "";
                        return r(type + " .donation-form__actions").attr("data-link") + t
                    }

                    function s(t) {
                        return Math.ceil(.34 * t)
                    }
                    r("input[name=donation3]", t).on("change", function () {
                        var t = r(this).parents(".donation-form3"),
                            e = r("input[name='donation3']:checked").val(),
                            n = s(e),
                            n = n || "……";
                        r(".count", t).text(n), e && (e = o(e), t.find(".btn").attr("href", e))
                    }), r(".donation-form__input3", t).on("focus", function () {
                        var t = r(this),
                            e = t.parents(".donation-form3");
                        r("input[name=donation3]", e).prop("checked", !1), r(".count", e).text("……"), t.attr("placeholder", ""), t.addClass("active")
                    }), r(".donation-form__input3", t).on("focusout", function () {
                        r(this).attr("placeholder", "Montant libre"), r(this).val() || r(this).removeClass("active")
                    }), r(".donation-form__input3", t).on("input", function () {
                        var t = r(this),
                            e = t.parents(".donation-form3"),
                            n = t.val(),
                            i = s(n = n.replace(/ /g, "")),
                            t = i || "……";
                        r(".count", e).text(t), i && (n = o(n), e.find(".btn").attr("href", n))
                    }), r(".donation-form__input3", t).keypress(function (t) {
                        t = t.which || t.keyCode;
                        return !(31 < t && (t < 48 || 57 < t))
                    }), r(".donation-form__input3", t).keyup(function (t) {
                        r(this).val(function (t, e) {
                            return e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                        })
                    })
                }(e), (m = e).fn.countTo = function (c) {
                    return c = c || {}, m(this).each(function () {
                        var e = m.extend({}, m.fn.countTo.defaults, {
                            from: m(this).data("from"),
                            to: m(this).data("to"),
                            speed: m(this).data("speed"),
                            refreshInterval: m(this).data("refresh-interval"),
                            decimals: m(this).data("decimals")
                        }, c),
                            t = Math.ceil(e.speed / e.refreshInterval),
                            n = (e.to - e.from) / t,
                            i = this,
                            r = m(this),
                            o = 0,
                            s = e.from,
                            a = r.data("countTo") || {};

                        function l(t) {
                            t = e.formatter.call(i, t, e);
                            r.html(t)
                        }
                        r.data("countTo", a), a.interval && clearInterval(a.interval), a.interval = setInterval(function () {
                            o++, l(s += n), "function" == typeof e.onUpdate && e.onUpdate.call(i, s);
                            t <= o && (r.removeData("countTo"), clearInterval(a.interval), s = e.to, "function" == typeof e.onComplete && e.onComplete.call(i, s))
                        }, e.refreshInterval), l(s)
                    })
                }, m.fn.countTo.defaults = {
                    from: 0,
                    to: 0,
                    speed: 1e3,
                    refreshInterval: 100,
                    decimals: 0,
                    formatter: function (t, e) {
                        return t.toFixed(e.decimals)
                    },
                    onUpdate: null,
                    onComplete: null
                }, e(function (n) {
                    function t(t) {
                        var e = n(this);
                        t = n.extend({}, t || {}, e.data("countToOptions") || {}), e.countTo(t)
                    }
                    n(".count-number").data("countToOptions", {
                        formatter: function (t, e) {
                            return t.toFixed(e.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ")
                        }
                    }), n(".numbers-block").one("inview", function () {
                        n(".timer").each(t)
                    })
                }), (v = e)(function () {
                    v(".sharing-btn").on("click", function (t) {
                        t.preventDefault();
                        var e = "https://careme-fraternel.oeuvre-orient.fr/",
                            n = "40 jours de carême : Pour les chrétiens d’orient faites un don",
                            i = "";
                        switch (v(this).attr("data-type")) {
                            case "fb":
                                i = "https://www.facebook.com/sharer/sharer.php?", i += "u=" + e;
                                break;
                            case "tw":
                                i = "https://twitter.com/intent/tweet?", i += "text=" + n, i += "&url=" + e;
                                break;
                            case "lin":
                                i = "https://www.linkedin.com/shareArticle?mini=true", i += "&title=" + n, i += "&url=" + e, i += "&source=LinkedIn"
                        }
                        "" != i && window.open(i, "_blank", "toolbar=0,status=0,resizable=1,menubar=0,scrollbars=1,width=626,height=436,left=100,top=100")
                    })
                })
        }.call(this, g(0), g(7)(t), g(0))
}, function (t, e) {
    t.exports = function (t) {
        var e;
        return t.webpackPolyfill || ((e = Object.create(t)).children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), Object.defineProperty(e, "exports", {
            enumerable: !0
        }), e.webpackPolyfill = 1), e
    }
}, function (t, on, e) {
    (function (en) {
        var nn;

        function rn(t) {
            return (rn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
        ! function (t, e) {
            "use strict";
            "object" == rn(en) && "object" == rn(en.exports) ? en.exports = t.document ? e(t, !0) : function (t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return e(t)
            } : e(t)
        }("undefined" != typeof window ? window : this, function (T, t) {
            "use strict";

            function m(t) {
                return null != t && t === t.window
            }
            var e = [],
                n = Object.getPrototypeOf,
                a = e.slice,
                v = e.flat ? function (t) {
                    return e.flat.call(t)
                } : function (t) {
                    return e.concat.apply([], t)
                },
                l = e.push,
                r = e.indexOf,
                i = {},
                o = i.toString,
                g = i.hasOwnProperty,
                s = g.toString,
                c = s.call(Object),
                y = {},
                _ = function (t) {
                    return "function" == typeof t && "number" != typeof t.nodeType
                },
                S = T.document,
                u = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function x(t, e, n) {
                var i, r, o = (n = n || S).createElement("script");
                if (o.text = t, e)
                    for (i in u) (r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
                n.head.appendChild(o).parentNode.removeChild(o)
            }

            function d(t) {
                return null == t ? t + "" : "object" == rn(t) || "function" == typeof t ? i[o.call(t)] || "object" : rn(t)
            }
            var E = function t(e, n) {
                return new t.fn.init(e, n)
            };

            function h(t) {
                var e = !!t && "length" in t && t.length,
                    n = d(t);
                return !_(t) && !m(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
            }
            E.fn = E.prototype = {
                jquery: "3.5.1",
                constructor: E,
                length: 0,
                toArray: function () {
                    return a.call(this)
                },
                get: function (t) {
                    return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
                },
                pushStack: function (t) {
                    t = E.merge(this.constructor(), t);
                    return t.prevObject = this, t
                },
                each: function (t) {
                    return E.each(this, t)
                },
                map: function (n) {
                    return this.pushStack(E.map(this, function (t, e) {
                        return n.call(t, e, t)
                    }))
                },
                slice: function () {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                even: function () {
                    return this.pushStack(E.grep(this, function (t, e) {
                        return (e + 1) % 2
                    }))
                },
                odd: function () {
                    return this.pushStack(E.grep(this, function (t, e) {
                        return e % 2
                    }))
                },
                eq: function (t) {
                    var e = this.length,
                        t = +t + (t < 0 ? e : 0);
                    return this.pushStack(0 <= t && t < e ? [this[t]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: e.sort,
                splice: e.splice
            }, E.extend = E.fn.extend = function () {
                var t, e, n, i, r, o = arguments[0] || {},
                    s = 1,
                    a = arguments.length,
                    l = !1;
                for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == rn(o) || _(o) || (o = {}), s === a && (o = this, s--); s < a; s++)
                    if (null != (t = arguments[s]))
                        for (e in t) n = t[e], "__proto__" !== e && o !== n && (l && n && (E.isPlainObject(n) || (i = Array.isArray(n))) ? (r = o[e], r = i && !Array.isArray(r) ? [] : i || E.isPlainObject(r) ? r : {}, i = !1, o[e] = E.extend(l, r, n)) : void 0 !== n && (o[e] = n));
                return o
            }, E.extend({
                expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t)
                },
                noop: function () { },
                isPlainObject: function (t) {
                    return !(!t || "[object Object]" !== o.call(t) || (t = n(t)) && ("function" != typeof (t = g.call(t, "constructor") && t.constructor) || s.call(t) !== c))
                },
                isEmptyObject: function (t) {
                    for (var e in t) return !1;
                    return !0
                },
                globalEval: function (t, e, n) {
                    x(t, {
                        nonce: e && e.nonce
                    }, n)
                },
                each: function (t, e) {
                    var n, i = 0;
                    if (h(t))
                        for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                    else
                        for (i in t)
                            if (!1 === e.call(t[i], i, t[i])) break;
                    return t
                },
                makeArray: function (t, e) {
                    e = e || [];
                    return null != t && (h(Object(t)) ? E.merge(e, "string" == typeof t ? [t] : t) : l.call(e, t)), e
                },
                inArray: function (t, e, n) {
                    return null == e ? -1 : r.call(e, t, n)
                },
                merge: function (t, e) {
                    for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                    return t.length = r, t
                },
                grep: function (t, e, n) {
                    for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) != s && i.push(t[r]);
                    return i
                },
                map: function (t, e, n) {
                    var i, r, o = 0,
                        s = [];
                    if (h(t))
                        for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
                    else
                        for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
                    return v(s)
                },
                guid: 1,
                support: y
            }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = e[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                i["[object " + e + "]"] = e.toLowerCase()
            });
            var f = function (n) {
                function h(t, e) {
                    return t = "0x" + t.slice(1) - 65536, e || (t < 0 ? String.fromCharCode(65536 + t) : String.fromCharCode(t >> 10 | 55296, 1023 & t | 56320))
                }

                function i() {
                    w()
                }
                var t, p, x, o, r, d, f, m, b, l, c, w, T, s, S, v, a, u, g, E = "sizzle" + +new Date,
                    y = n.document,
                    k = 0,
                    _ = 0,
                    C = lt(),
                    A = lt(),
                    P = lt(),
                    O = lt(),
                    L = function (t, e) {
                        return t === e && (c = !0), 0
                    },
                    D = {}.hasOwnProperty,
                    e = [],
                    R = e.pop,
                    M = e.push,
                    N = e.push,
                    j = e.slice,
                    I = function (t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    B = "[\\x20\\t\\r\\n\\f]",
                    z = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    q = "\\[" + B + "*(" + z + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + B + "*\\]",
                    X = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                    F = new RegExp(B + "+", "g"),
                    W = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
                    Y = new RegExp("^" + B + "*," + B + "*"),
                    $ = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
                    U = new RegExp(B + "|>"),
                    V = new RegExp(X),
                    K = new RegExp("^" + z + "$"),
                    G = {
                        ID: new RegExp("^#(" + z + ")"),
                        CLASS: new RegExp("^\\.(" + z + ")"),
                        TAG: new RegExp("^(" + z + "|[*])"),
                        ATTR: new RegExp("^" + q),
                        PSEUDO: new RegExp("^" + X),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + H + ")$", "i"),
                        needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Q = /HTML$/i,
                    Z = /^(?:input|select|textarea|button)$/i,
                    J = /^h\d$/i,
                    tt = /^[^{]+\{\s*\[native \w/,
                    et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    nt = /[+~]/,
                    it = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])", "g"),
                    rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ot = function (t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    },
                    st = yt(function (t) {
                        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    N.apply(e = j.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType
                } catch (t) {
                    N = {
                        apply: e.length ? function (t, e) {
                            M.apply(t, j.call(e))
                        } : function (t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }

                function at(t, e, n, i) {
                    var r, o, s, a, l, c, u, h = e && e.ownerDocument,
                        f = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
                    if (!i && (w(e), e = e || T, S)) {
                        if (11 !== f && (l = et.exec(t)))
                            if (r = l[1]) {
                                if (9 === f) {
                                    if (!(s = e.getElementById(r))) return n;
                                    if (s.id === r) return n.push(s), n
                                } else if (h && (s = h.getElementById(r)) && g(e, s) && s.id === r) return n.push(s), n
                            } else {
                                if (l[2]) return N.apply(n, e.getElementsByTagName(t)), n;
                                if ((r = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return N.apply(n, e.getElementsByClassName(r)), n
                            } if (p.qsa && !O[t + " "] && (!v || !v.test(t)) && (1 !== f || "object" !== e.nodeName.toLowerCase())) {
                                if (u = t, h = e, 1 === f && (U.test(t) || $.test(t))) {
                                    for ((h = nt.test(t) && mt(e.parentNode) || e) === e && p.scope || ((a = e.getAttribute("id")) ? a = a.replace(rt, ot) : e.setAttribute("id", a = E)), o = (c = d(t)).length; o--;) c[o] = (a ? "#" + a : ":scope") + " " + gt(c[o]);
                                    u = c.join(",")
                                }
                                try {
                                    return N.apply(n, h.querySelectorAll(u)), n
                                } catch (e) {
                                    O(t, !0)
                                } finally {
                                    a === E && e.removeAttribute("id")
                                }
                            }
                    }
                    return m(t.replace(W, "$1"), e, n, i)
                }

                function lt() {
                    var i = [];
                    return function t(e, n) {
                        return i.push(e + " ") > x.cacheLength && delete t[i.shift()], t[e + " "] = n
                    }
                }

                function ct(t) {
                    return t[E] = !0, t
                }

                function ut(t) {
                    var e = T.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ht(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
                }

                function ft(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function pt(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && st(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function dt(s) {
                    return ct(function (o) {
                        return o = +o, ct(function (t, e) {
                            for (var n, i = s([], t.length, o), r = i.length; r--;) t[n = i[r]] && (t[n] = !(e[n] = t[n]))
                        })
                    })
                }

                function mt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }
                for (t in p = at.support = {}, r = at.isXML = function (t) {
                    var e = t.namespaceURI,
                        t = (t.ownerDocument || t).documentElement;
                    return !Q.test(e || t && t.nodeName || "HTML")
                }, w = at.setDocument = function (t) {
                    var e, t = t ? t.ownerDocument || t : y;
                    return t != T && 9 === t.nodeType && t.documentElement && (s = (T = t).documentElement, S = !r(T), y != T && (e = T.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", i, !1) : e.attachEvent && e.attachEvent("onunload", i)), p.scope = ut(function (t) {
                        return s.appendChild(t).appendChild(T.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                    }), p.attributes = ut(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), p.getElementsByTagName = ut(function (t) {
                        return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length
                    }), p.getElementsByClassName = tt.test(T.getElementsByClassName), p.getById = ut(function (t) {
                        return s.appendChild(t).id = E, !T.getElementsByName || !T.getElementsByName(E).length
                    }), p.getById ? (x.filter.ID = function (t) {
                        var e = t.replace(it, h);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }, x.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && S) {
                            t = e.getElementById(t);
                            return t ? [t] : []
                        }
                    }) : (x.filter.ID = function (t) {
                        var e = t.replace(it, h);
                        return function (t) {
                            t = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return t && t.value === e
                        }
                    }, x.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && S) {
                            var n, i, r, o = e.getElementById(t);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                            }
                            return []
                        }
                    }), x.find.TAG = p.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, i = [],
                            r = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" !== t) return o;
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }, x.find.CLASS = p.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && S) return e.getElementsByClassName(t)
                    }, a = [], v = [], (p.qsa = tt.test(T.querySelectorAll)) && (ut(function (t) {
                        var e;
                        s.appendChild(t).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + B + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + B + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + E + "-]").length || v.push("~="), (e = T.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || v.push("\\[" + B + "*name" + B + "*=" + B + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + E + "+*").length || v.push(".#.+[+~]"), t.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                    }), ut(function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = T.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + B + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), s.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                    })), (p.matchesSelector = tt.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ut(function (t) {
                        p.disconnectedMatch = u.call(t, "*"), u.call(t, "[s!='']:x"), a.push("!=", X)
                    }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), e = tt.test(s.compareDocumentPosition), g = e || tt.test(s.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            e = e && e.parentNode;
                        return t === e || !(!e || 1 !== e.nodeType || !(n.contains ? n.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
                    } : function (t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, L = e ? function (t, e) {
                        if (t === e) return c = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === n ? t == T || t.ownerDocument == y && g(y, t) ? -1 : e == T || e.ownerDocument == y && g(y, e) ? 1 : l ? I(l, t) - I(l, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return c = !0, 0;
                        var n, i = 0,
                            r = t.parentNode,
                            o = e.parentNode,
                            s = [t],
                            a = [e];
                        if (!r || !o) return t == T ? -1 : e == T ? 1 : r ? -1 : o ? 1 : l ? I(l, t) - I(l, e) : 0;
                        if (r === o) return ft(t, e);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (; s[i] === a[i];) i++;
                        return i ? ft(s[i], a[i]) : s[i] == y ? -1 : a[i] == y ? 1 : 0
                    }), T
                }, at.matches = function (t, e) {
                    return at(t, null, null, e)
                }, at.matchesSelector = function (t, e) {
                    if (w(t), p.matchesSelector && S && !O[e + " "] && (!a || !a.test(e)) && (!v || !v.test(e))) try {
                        var n = u.call(t, e);
                        if (n || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {
                        O(e, !0)
                    }
                    return 0 < at(e, T, null, [t]).length
                }, at.contains = function (t, e) {
                    return (t.ownerDocument || t) != T && w(t), g(t, e)
                }, at.attr = function (t, e) {
                    (t.ownerDocument || t) != T && w(t);
                    var n = x.attrHandle[e.toLowerCase()],
                        n = n && D.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !S) : void 0;
                    return void 0 !== n ? n : p.attributes || !S ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }, at.escape = function (t) {
                    return (t + "").replace(rt, ot)
                }, at.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, at.uniqueSort = function (t) {
                    var e, n = [],
                        i = 0,
                        r = 0;
                    if (c = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(L), c) {
                        for (; e = t[r++];) e === t[r] && (i = n.push(r));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return l = null, t
                }, o = at.getText = function (t) {
                    var e, n = "",
                        i = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += o(e);
                    return n
                }, (x = at.selectors = {
                    cacheLength: 50,
                    createPseudo: ct,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(it, h), t[3] = (t[3] || t[4] || t[5] || "").replace(it, h), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                        },
                        PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = d(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(it, h).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function (t) {
                            var e = C[t + " "];
                            return e || (e = new RegExp("(^|" + B + ")" + t + "(" + B + "|$)")) && C(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, n, i) {
                            return function (t) {
                                t = at.attr(t, e);
                                return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === i : "!=" === n ? t !== i : "^=" === n ? i && 0 === t.indexOf(i) : "*=" === n ? i && -1 < t.indexOf(i) : "$=" === n ? i && t.slice(-i.length) === i : "~=" === n ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === n && (t === i || t.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function (d, t, e, m, v) {
                            var g = "nth" !== d.slice(0, 3),
                                y = "last" !== d.slice(-4),
                                _ = "of-type" === t;
                            return 1 === m && 0 === v ? function (t) {
                                return !!t.parentNode
                            } : function (t, e, n) {
                                var i, r, o, s, a, l, c = g != y ? "nextSibling" : "previousSibling",
                                    u = t.parentNode,
                                    h = _ && t.nodeName.toLowerCase(),
                                    f = !n && !_,
                                    p = !1;
                                if (u) {
                                    if (g) {
                                        for (; c;) {
                                            for (s = t; s = s[c];)
                                                if (_ ? s.nodeName.toLowerCase() === h : 1 === s.nodeType) return !1;
                                            l = c = "only" === d && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [y ? u.firstChild : u.lastChild], y && f) {
                                        for (p = (a = (i = (r = (o = (s = u)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === k && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || l.pop();)
                                            if (1 === s.nodeType && ++p && s === t) {
                                                r[d] = [k, a, p];
                                                break
                                            }
                                    } else if (f && (p = a = (i = (r = (o = (s = t)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === k && i[1]), !1 === p)
                                        for (;
                                            (s = ++a && s && s[c] || (p = a = 0) || l.pop()) && ((_ ? s.nodeName.toLowerCase() !== h : 1 !== s.nodeType) || !++p || (f && ((r = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] = [k, p]), s !== t)););
                                    return (p -= v) === m || p % m == 0 && 0 <= p / m
                                }
                            }
                        },
                        PSEUDO: function (t, o) {
                            var e, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                            return s[E] ? s(o) : 1 < s.length ? (e = [t, t, "", o], x.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function (t, e) {
                                for (var n, i = s(t, o), r = i.length; r--;) t[n = I(t, i[r])] = !(e[n] = i[r])
                            }) : function (t) {
                                return s(t, 0, e)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: ct(function (t) {
                            var i = [],
                                r = [],
                                a = f(t.replace(W, "$1"));
                            return a[E] ? ct(function (t, e, n, i) {
                                for (var r, o = a(t, null, i, []), s = t.length; s--;)(r = o[s]) && (t[s] = !(e[s] = r))
                            }) : function (t, e, n) {
                                return i[0] = t, a(i, null, n, r), i[0] = null, !r.pop()
                            }
                        }),
                        has: ct(function (e) {
                            return function (t) {
                                return 0 < at(e, t).length
                            }
                        }),
                        contains: ct(function (e) {
                            return e = e.replace(it, h),
                                function (t) {
                                    return -1 < (t.textContent || o(t)).indexOf(e)
                                }
                        }),
                        lang: ct(function (n) {
                            return K.test(n || "") || at.error("unsupported lang: " + n), n = n.replace(it, h).toLowerCase(),
                                function (t) {
                                    var e;
                                    do {
                                        if (e = S ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var e = n.location && n.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function (t) {
                            return t === s
                        },
                        focus: function (t) {
                            return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: pt(!1),
                        disabled: pt(!0),
                        checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (t) {
                            return !x.pseudos.empty(t)
                        },
                        header: function (t) {
                            return J.test(t.nodeName)
                        },
                        input: function (t) {
                            return Z.test(t.nodeName)
                        },
                        button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function (t) {
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: dt(function () {
                            return [0]
                        }),
                        last: dt(function (t, e) {
                            return [e - 1]
                        }),
                        eq: dt(function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        }),
                        even: dt(function (t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }),
                        odd: dt(function (t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }),
                        lt: dt(function (t, e, n) {
                            for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
                            return t
                        }),
                        gt: dt(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }).pseudos.nth = x.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[t] = function (e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(t);
                for (t in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[t] = function (n) {
                    return function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e || "button" === e) && t.type === n
                    }
                }(t);

                function vt() { }

                function gt(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function yt(s, t, e) {
                    var a = t.dir,
                        l = t.next,
                        c = l || a,
                        u = e && "parentNode" === c,
                        h = _++;
                    return t.first ? function (t, e, n) {
                        for (; t = t[a];)
                            if (1 === t.nodeType || u) return s(t, e, n);
                        return !1
                    } : function (t, e, n) {
                        var i, r, o = [k, h];
                        if (n) {
                            for (; t = t[a];)
                                if ((1 === t.nodeType || u) && s(t, e, n)) return !0
                        } else
                            for (; t = t[a];)
                                if (1 === t.nodeType || u)
                                    if (i = (r = t[E] || (t[E] = {}))[t.uniqueID] || (r[t.uniqueID] = {}), l && l === t.nodeName.toLowerCase()) t = t[a] || t;
                                    else {
                                        if ((r = i[c]) && r[0] === k && r[1] === h) return o[2] = r[2];
                                        if ((i[c] = o)[2] = s(t, e, n)) return !0
                                    } return !1
                    }
                }

                function _t(r) {
                    return 1 < r.length ? function (t, e, n) {
                        for (var i = r.length; i--;)
                            if (!r[i](t, e, n)) return !1;
                        return !0
                    } : r[0]
                }

                function xt(t, e, n, i, r) {
                    for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), c && e.push(a)));
                    return s
                }

                function bt(t) {
                    for (var i, e, n, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = yt(function (t) {
                        return t === i
                    }, s, !0), c = yt(function (t) {
                        return -1 < I(i, t)
                    }, s, !0), u = [function (t, e, n) {
                        n = !o && (n || e !== b) || ((i = e).nodeType ? l : c)(t, e, n);
                        return i = null, n
                    }]; a < r; a++)
                        if (e = x.relative[t[a].type]) u = [yt(_t(u), e)];
                        else {
                            if ((e = x.filter[t[a].type].apply(null, t[a].matches))[E]) {
                                for (n = ++a; n < r && !x.relative[t[n].type]; n++);
                                return function t(p, d, m, v, g, e) {
                                    return v && !v[E] && (v = t(v)), g && !g[E] && (g = t(g, e)), ct(function (t, e, n, i) {
                                        var r, o, s, a = [],
                                            l = [],
                                            c = e.length,
                                            u = t || function (t, e, n) {
                                                for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                                                return n
                                            }(d || "*", n.nodeType ? [n] : n, []),
                                            h = !p || !t && d ? u : xt(u, a, p, n, i),
                                            f = m ? g || (t ? p : c || v) ? [] : e : h;
                                        if (m && m(h, f, n, i), v)
                                            for (r = xt(f, l), v(r, [], n, i), o = r.length; o--;)(s = r[o]) && (f[l[o]] = !(h[l[o]] = s));
                                        if (t) {
                                            if (g || p) {
                                                if (g) {
                                                    for (r = [], o = f.length; o--;)(s = f[o]) && r.push(h[o] = s);
                                                    g(null, f = [], r, i)
                                                }
                                                for (o = f.length; o--;)(s = f[o]) && -1 < (r = g ? I(t, s) : a[o]) && (t[r] = !(e[r] = s))
                                            }
                                        } else f = xt(f === e ? f.splice(c, f.length) : f), g ? g(null, e, f, i) : N.apply(e, f)
                                    })
                                }(1 < a && _t(u), 1 < a && gt(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(W, "$1"), e, a < n && bt(t.slice(a, n)), n < r && bt(t = t.slice(n)), n < r && gt(t))
                            }
                            u.push(e)
                        } return _t(u)
                }
                return vt.prototype = x.filters = x.pseudos, x.setFilters = new vt, d = at.tokenize = function (t, e) {
                    var n, i, r, o, s, a, l, c = A[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (s = t, a = [], l = x.preFilter; s;) {
                        for (o in n && !(i = Y.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = $.exec(s)) && (n = i.shift(), r.push({
                            value: n,
                            type: i[0].replace(W, " ")
                        }), s = s.slice(n.length)), x.filter) !(i = G[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                            value: n,
                            type: o,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return e ? s.length : s ? at.error(t) : A(t, a).slice(0)
                }, f = at.compile = function (t, e) {
                    var n, v, g, y, _, i, r = [],
                        o = [],
                        s = P[t + " "];
                    if (!s) {
                        for (n = (e = e || d(t)).length; n--;)((s = bt(e[n]))[E] ? r : o).push(s);
                        (s = P(t, (v = o, y = 0 < (g = r).length, _ = 0 < v.length, i = function (t, e, n, i, r) {
                            var o, s, a, l = 0,
                                c = "0",
                                u = t && [],
                                h = [],
                                f = b,
                                p = t || _ && x.find.TAG("*", r),
                                d = k += null == f ? 1 : Math.random() || .1,
                                m = p.length;
                            for (r && (b = e == T || e || r); c !== m && null != (o = p[c]); c++) {
                                if (_ && o) {
                                    for (s = 0, e || o.ownerDocument == T || (w(o), n = !S); a = v[s++];)
                                        if (a(o, e || T, n)) {
                                            i.push(o);
                                            break
                                        } r && (k = d)
                                }
                                y && ((o = !a && o) && l--, t && u.push(o))
                            }
                            if (l += c, y && c !== l) {
                                for (s = 0; a = g[s++];) a(u, h, e, n);
                                if (t) {
                                    if (0 < l)
                                        for (; c--;) u[c] || h[c] || (h[c] = R.call(i));
                                    h = xt(h)
                                }
                                N.apply(i, h), r && !t && 0 < h.length && 1 < l + g.length && at.uniqueSort(i)
                            }
                            return r && (k = d, b = f), u
                        }, y ? ct(i) : i))).selector = t
                    }
                    return s
                }, m = at.select = function (t, e, n, i) {
                    var r, o, s, a, l, c = "function" == typeof t && t,
                        u = !i && d(t = c.selector || t);
                    if (n = n || [], 1 === u.length) {
                        if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && S && x.relative[o[1].type]) {
                            if (!(e = (x.find.ID(s.matches[0].replace(it, h), e) || [])[0])) return n;
                            c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (r = G.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                            if ((l = x.find[a]) && (i = l(s.matches[0].replace(it, h), nt.test(o[0].type) && mt(e.parentNode) || e))) {
                                if (o.splice(r, 1), !(t = i.length && gt(o))) return N.apply(n, i), n;
                                break
                            }
                    }
                    return (c || f(t, u))(i, e, !S, n, !e || nt.test(t) && mt(e.parentNode) || e), n
                }, p.sortStable = E.split("").sort(L).join("") === E, p.detectDuplicates = !!c, w(), p.sortDetached = ut(function (t) {
                    return 1 & t.compareDocumentPosition(T.createElement("fieldset"))
                }), ut(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || ht("type|href|height|width", function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), p.attributes && ut(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || ht("value", function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), ut(function (t) {
                    return null == t.getAttribute("disabled")
                }) || ht(H, function (t, e, n) {
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (e = t.getAttributeNode(e)) && e.specified ? e.value : null
                }), at
            }(T);
            E.find = f, E.expr = f.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = f.uniqueSort, E.text = f.getText, E.isXMLDoc = f.isXML, E.contains = f.contains, E.escapeSelector = f.escape;

            function p(t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && E(t).is(n)) break;
                        i.push(t)
                    } return i
            }

            function b(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
            var w = E.expr.match.needsContext;

            function k(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }
            var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function A(t, n, i) {
                return _(n) ? E.grep(t, function (t, e) {
                    return !!n.call(t, e, t) !== i
                }) : n.nodeType ? E.grep(t, function (t) {
                    return t === n !== i
                }) : "string" != typeof n ? E.grep(t, function (t) {
                    return -1 < r.call(n, t) !== i
                }) : E.filter(n, t, i)
            }
            E.filter = function (t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? E.find.matchesSelector(i, t) ? [i] : [] : E.find.matches(t, E.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, E.fn.extend({
                find: function (t) {
                    var e, n, i = this.length,
                        r = this;
                    if ("string" != typeof t) return this.pushStack(E(t).filter(function () {
                        for (e = 0; e < i; e++)
                            if (E.contains(r[e], this)) return !0
                    }));
                    for (n = this.pushStack([]), e = 0; e < i; e++) E.find(t, r[e], n);
                    return 1 < i ? E.uniqueSort(n) : n
                },
                filter: function (t) {
                    return this.pushStack(A(this, t || [], !1))
                },
                not: function (t) {
                    return this.pushStack(A(this, t || [], !0))
                },
                is: function (t) {
                    return !!A(this, "string" == typeof t && w.test(t) ? E(t) : t || [], !1).length
                }
            });
            var P, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (E.fn.init = function (t, e, n) {
                if (!t) return this;
                if (n = n || P, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : _(t) ? void 0 !== n.ready ? n.ready(t) : t(E) : E.makeArray(t, this);
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : O.exec(t)) || !i[1] && e) return (!e || e.jquery ? e || n : this.constructor(e)).find(t);
                if (i[1]) {
                    if (e = e instanceof E ? e[0] : e, E.merge(this, E.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : S, !0)), C.test(i[1]) && E.isPlainObject(e))
                        for (var i in e) _(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (t = S.getElementById(i[2])) && (this[0] = t, this.length = 1), this
            }).prototype = E.fn, P = E(S);
            var L = /^(?:parents|prev(?:Until|All))/,
                D = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function R(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }
            E.fn.extend({
                has: function (t) {
                    var e = E(t, this),
                        n = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < n; t++)
                            if (E.contains(this, e[t])) return !0
                    })
                },
                closest: function (t, e) {
                    var n, i = 0,
                        r = this.length,
                        o = [],
                        s = "string" != typeof t && E(t);
                    if (!w.test(t))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== e; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, t))) {
                                    o.push(n);
                                    break
                                } return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
                },
                index: function (t) {
                    return t ? "string" == typeof t ? r.call(E(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (t, e) {
                    return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))))
                },
                addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), E.each({
                parent: function (t) {
                    t = t.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (t) {
                    return p(t, "parentNode")
                },
                parentsUntil: function (t, e, n) {
                    return p(t, "parentNode", n)
                },
                next: function (t) {
                    return R(t, "nextSibling")
                },
                prev: function (t) {
                    return R(t, "previousSibling")
                },
                nextAll: function (t) {
                    return p(t, "nextSibling")
                },
                prevAll: function (t) {
                    return p(t, "previousSibling")
                },
                nextUntil: function (t, e, n) {
                    return p(t, "nextSibling", n)
                },
                prevUntil: function (t, e, n) {
                    return p(t, "previousSibling", n)
                },
                siblings: function (t) {
                    return b((t.parentNode || {}).firstChild, t)
                },
                children: function (t) {
                    return b(t.firstChild)
                },
                contents: function (t) {
                    return null != t.contentDocument && n(t.contentDocument) ? t.contentDocument : (k(t, "template") && (t = t.content || t), E.merge([], t.childNodes))
                }
            }, function (i, r) {
                E.fn[i] = function (t, e) {
                    var n = E.map(this, r, t);
                    return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = E.filter(e, n)), 1 < this.length && (D[i] || E.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n)
                }
            });
            var M = /[^\x20\t\r\n\f]+/g;

            function N(t) {
                return t
            }

            function j(t) {
                throw t
            }

            function I(t, e, n, i) {
                var r;
                try {
                    t && _(r = t.promise) ? r.call(t).done(e).fail(n) : t && _(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
                } catch (t) {
                    n.apply(void 0, [t])
                }
            }
            E.Callbacks = function (i) {
                var n;
                i = "string" == typeof i ? (n = {}, E.each(i.match(M) || [], function (t, e) {
                    n[e] = !0
                }), n) : E.extend({}, i);

                function r() {
                    for (s = s || i.once, e = o = !0; l.length; c = -1)
                        for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length, t = !1);
                    i.memory || (t = !1), o = !1, s && (a = t ? [] : "")
                }
                var o, t, e, s, a = [],
                    l = [],
                    c = -1,
                    u = {
                        add: function () {
                            return a && (t && !o && (c = a.length - 1, l.push(t)), function n(t) {
                                E.each(t, function (t, e) {
                                    _(e) ? i.unique && u.has(e) || a.push(e) : e && e.length && "string" !== d(e) && n(e)
                                })
                            }(arguments), t && !o && r()), this
                        },
                        remove: function () {
                            return E.each(arguments, function (t, e) {
                                for (var n; - 1 < (n = E.inArray(e, a, n));) a.splice(n, 1), n <= c && c--
                            }), this
                        },
                        has: function (t) {
                            return t ? -1 < E.inArray(t, a) : 0 < a.length
                        },
                        empty: function () {
                            return a = a && [], this
                        },
                        disable: function () {
                            return s = l = [], a = t = "", this
                        },
                        disabled: function () {
                            return !a
                        },
                        lock: function () {
                            return s = l = [], t || o || (a = t = ""), this
                        },
                        locked: function () {
                            return !!s
                        },
                        fireWith: function (t, e) {
                            return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), o || r()), this
                        },
                        fire: function () {
                            return u.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!e
                        }
                    };
                return u
            }, E.extend({
                Deferred: function (t) {
                    var o = [
                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                    ],
                        r = "pending",
                        s = {
                            state: function () {
                                return r
                            },
                            always: function () {
                                return a.done(arguments).fail(arguments), this
                            },
                            catch: function (t) {
                                return s.then(null, t)
                            },
                            pipe: function () {
                                var r = arguments;
                                return E.Deferred(function (i) {
                                    E.each(o, function (t, e) {
                                        var n = _(r[e[4]]) && r[e[4]];
                                        a[e[1]](function () {
                                            var t = n && n.apply(this, arguments);
                                            t && _(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
                                        })
                                    }), r = null
                                }).promise()
                            },
                            then: function (e, n, i) {
                                var l = 0;

                                function c(r, o, s, a) {
                                    return function () {
                                        function t() {
                                            var t, e;
                                            if (!(r < l)) {
                                                if ((t = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                e = t && ("object" == rn(t) || "function" == typeof t) && t.then, _(e) ? a ? e.call(t, c(l, o, N, a), c(l, o, j, a)) : (l++, e.call(t, c(l, o, N, a), c(l, o, j, a), c(l, o, N, o.notifyWith))) : (s !== N && (n = void 0, i = [t]), (a || o.resolveWith)(n, i))
                                            }
                                        }
                                        var n = this,
                                            i = arguments,
                                            e = a ? t : function () {
                                                try {
                                                    t()
                                                } catch (t) {
                                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(t, e.stackTrace), l <= r + 1 && (s !== j && (n = void 0, i = [t]), o.rejectWith(n, i))
                                                }
                                            };
                                        r ? e() : (E.Deferred.getStackHook && (e.stackTrace = E.Deferred.getStackHook()), T.setTimeout(e))
                                    }
                                }
                                return E.Deferred(function (t) {
                                    o[0][3].add(c(0, t, _(i) ? i : N, t.notifyWith)), o[1][3].add(c(0, t, _(e) ? e : N)), o[2][3].add(c(0, t, _(n) ? n : j))
                                }).promise()
                            },
                            promise: function (t) {
                                return null != t ? E.extend(t, s) : s
                            }
                        },
                        a = {};
                    return E.each(o, function (t, e) {
                        var n = e[2],
                            i = e[5];
                        s[e[1]] = n.add, i && n.add(function () {
                            r = i
                        }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock), n.add(e[3].fire), a[e[0]] = function () {
                            return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[e[0] + "With"] = n.fireWith
                    }), s.promise(a), t && t.call(a, a), a
                },
                when: function (t) {
                    function e(e) {
                        return function (t) {
                            r[e] = this, o[e] = 1 < arguments.length ? a.call(arguments) : t, --n || s.resolveWith(r, o)
                        }
                    }
                    var n = arguments.length,
                        i = n,
                        r = Array(i),
                        o = a.call(arguments),
                        s = E.Deferred();
                    if (n <= 1 && (I(t, s.done(e(i)).resolve, s.reject, !n), "pending" === s.state() || _(o[i] && o[i].then))) return s.then();
                    for (; i--;) I(o[i], e(i), s.reject);
                    return s.promise()
                }
            });
            var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            E.Deferred.exceptionHook = function (t, e) {
                T.console && T.console.warn && t && H.test(t.name) && T.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
            }, E.readyException = function (t) {
                T.setTimeout(function () {
                    throw t
                })
            };
            var B = E.Deferred();

            function z() {
                S.removeEventListener("DOMContentLoaded", z), T.removeEventListener("load", z), E.ready()
            }
            E.fn.ready = function (t) {
                return B.then(t).catch(function (t) {
                    E.readyException(t)
                }), this
            }, E.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (t) {
                    (!0 === t ? --E.readyWait : E.isReady) || (E.isReady = !0) !== t && 0 < --E.readyWait || B.resolveWith(S, [E])
                }
            }), E.ready.then = B.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(E.ready) : (S.addEventListener("DOMContentLoaded", z), T.addEventListener("load", z));

            function q(t, e, n, i, r, o, s) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === d(n))
                    for (a in r = !0, n) q(t, e, a, n[a], !0, o, s);
                else if (void 0 !== i && (r = !0, _(i) || (s = !0), c && (e = s ? (e.call(t, i), null) : (c = e, function (t, e, n) {
                    return c.call(E(t), n)
                })), e))
                    for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
            }
            var X = /^-ms-/,
                F = /-([a-z])/g;

            function W(t, e) {
                return e.toUpperCase()
            }

            function Y(t) {
                return t.replace(X, "ms-").replace(F, W)
            }

            function $(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }

            function U() {
                this.expando = E.expando + U.uid++
            }
            U.uid = 1, U.prototype = {
                cache: function (t) {
                    var e = t[this.expando];
                    return e || (e = {}, $(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))), e
                },
                set: function (t, e, n) {
                    var i, r = this.cache(t);
                    if ("string" == typeof e) r[Y(e)] = n;
                    else
                        for (i in e) r[Y(i)] = e[i];
                    return r
                },
                get: function (t, e) {
                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
                },
                access: function (t, e, n) {
                    return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
                },
                remove: function (t, e) {
                    var n, i = t[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== e) {
                            n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(M) || []).length;
                            for (; n--;) delete i[e[n]]
                        }
                        void 0 !== e && !E.isEmptyObject(i) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                    }
                },
                hasData: function (t) {
                    t = t[this.expando];
                    return void 0 !== t && !E.isEmptyObject(t)
                }
            };
            var V = new U,
                K = new U,
                G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Q = /[A-Z]/g;

            function Z(t, e, n) {
                var i, r;
                if (void 0 === n && 1 === t.nodeType)
                    if (i = "data-" + e.replace(Q, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                        try {
                            n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : G.test(r) ? JSON.parse(r) : r)
                        } catch (t) { }
                        K.set(t, e, n)
                    } else n = void 0;
                return n
            }
            E.extend({
                hasData: function (t) {
                    return K.hasData(t) || V.hasData(t)
                },
                data: function (t, e, n) {
                    return K.access(t, e, n)
                },
                removeData: function (t, e) {
                    K.remove(t, e)
                },
                _data: function (t, e, n) {
                    return V.access(t, e, n)
                },
                _removeData: function (t, e) {
                    V.remove(t, e)
                }
            }), E.fn.extend({
                data: function (n, t) {
                    var e, i, r, o = this[0],
                        s = o && o.attributes;
                    if (void 0 !== n) return "object" == rn(n) ? this.each(function () {
                        K.set(this, n)
                    }) : q(this, function (t) {
                        var e;
                        return o && void 0 === t ? void 0 !== (e = K.get(o, n)) || void 0 !== (e = Z(o, n)) ? e : void 0 : void this.each(function () {
                            K.set(this, n, t)
                        })
                    }, null, t, 1 < arguments.length, null, !0);
                    if (this.length && (r = K.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                        for (e = s.length; e--;) s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = Y(i.slice(5)), Z(o, i, r[i]));
                        V.set(o, "hasDataAttrs", !0)
                    }
                    return r
                },
                removeData: function (t) {
                    return this.each(function () {
                        K.remove(this, t)
                    })
                }
            }), E.extend({
                queue: function (t, e, n) {
                    var i;
                    if (t) return e = (e || "fx") + "queue", i = V.get(t, e), n && (!i || Array.isArray(n) ? i = V.access(t, e, E.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function (t, e) {
                    e = e || "fx";
                    var n = E.queue(t, e),
                        i = n.length,
                        r = n.shift(),
                        o = E._queueHooks(t, e);
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
                        E.dequeue(t, e)
                    }, o)), !i && o && o.empty.fire()
                },
                _queueHooks: function (t, e) {
                    var n = e + "queueHooks";
                    return V.get(t, n) || V.access(t, n, {
                        empty: E.Callbacks("once memory").add(function () {
                            V.remove(t, [e + "queue", n])
                        })
                    })
                }
            }), E.fn.extend({
                queue: function (e, n) {
                    var t = 2;
                    return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? E.queue(this[0], e) : void 0 === n ? this : this.each(function () {
                        var t = E.queue(this, e, n);
                        E._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && E.dequeue(this, e)
                    })
                },
                dequeue: function (t) {
                    return this.each(function () {
                        E.dequeue(this, t)
                    })
                },
                clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                },
                promise: function (t, e) {
                    function n() {
                        --r || o.resolveWith(s, [s])
                    }
                    var i, r = 1,
                        o = E.Deferred(),
                        s = this,
                        a = this.length;
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = V.get(s[a], t + "queueHooks")) && i.empty && (r++, i.empty.add(n));
                    return n(), o.promise(e)
                }
            });
            var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                tt = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
                et = ["Top", "Right", "Bottom", "Left"],
                nt = S.documentElement,
                it = function (t) {
                    return E.contains(t.ownerDocument, t)
                },
                rt = {
                    composed: !0
                };
            nt.getRootNode && (it = function (t) {
                return E.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument
            });

            function ot(t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && it(t) && "none" === E.css(t, "display")
            }

            function st(t, e, n, i) {
                var r, o, s = 20,
                    a = i ? function () {
                        return i.cur()
                    } : function () {
                        return E.css(t, e, "")
                    },
                    l = a(),
                    c = n && n[3] || (E.cssNumber[e] ? "" : "px"),
                    u = t.nodeType && (E.cssNumber[e] || "px" !== c && +l) && tt.exec(E.css(t, e));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; s--;) E.style(t, e, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
                    u *= 2, E.style(t, e, u + c), n = n || []
                }
                return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
            }
            var at = {};

            function lt(t, e) {
                for (var n, i, r, o, s, a, l = [], c = 0, u = t.length; c < u; c++)(i = t[c]).style && (n = i.style.display, e ? ("none" === n && (l[c] = V.get(i, "display") || null, l[c] || (i.style.display = "")), "" === i.style.display && ot(i) && (l[c] = (a = o = r = void 0, o = i.ownerDocument, s = i.nodeName, (a = at[s]) || (r = o.body.appendChild(o.createElement(s)), a = E.css(r, "display"), r.parentNode.removeChild(r), "none" === a && (a = "block"), at[s] = a)))) : "none" !== n && (l[c] = "none", V.set(i, "display", n)));
                for (c = 0; c < u; c++) null != l[c] && (t[c].style.display = l[c]);
                return t
            }
            E.fn.extend({
                show: function () {
                    return lt(this, !0)
                },
                hide: function () {
                    return lt(this)
                },
                toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        ot(this) ? E(this).show() : E(this).hide()
                    })
                }
            });
            var ct = /^(?:checkbox|radio)$/i,
                ut = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ht = /^$|^module$|\/(?:java|ecma)script/i,
                ft = S.createDocumentFragment().appendChild(S.createElement("div"));
            (f = S.createElement("input")).setAttribute("type", "radio"), f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), ft.appendChild(f), y.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue, ft.innerHTML = "<option></option>", y.option = !!ft.lastChild;
            var pt = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function dt(t, e) {
                var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || e && k(t, e) ? E.merge([t], n) : n
            }

            function mt(t, e) {
                for (var n = 0, i = t.length; n < i; n++) V.set(t[n], "globalEval", !e || V.get(e[n], "globalEval"))
            }
            pt.tbody = pt.tfoot = pt.colgroup = pt.caption = pt.thead, pt.th = pt.td, y.option || (pt.optgroup = pt.option = [1, "<select multiple='multiple'>", "</select>"]);
            var vt = /<|&#?\w+;/;

            function gt(t, e, n, i, r) {
                for (var o, s, a, l, c, u = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
                    if ((o = t[f]) || 0 === o)
                        if ("object" === d(o)) E.merge(h, o.nodeType ? [o] : o);
                        else if (vt.test(o)) {
                            for (s = s || u.appendChild(e.createElement("div")), a = (ut.exec(o) || ["", ""])[1].toLowerCase(), a = pt[a] || pt._default, s.innerHTML = a[1] + E.htmlPrefilter(o) + a[2], c = a[0]; c--;) s = s.lastChild;
                            E.merge(h, s.childNodes), (s = u.firstChild).textContent = ""
                        } else h.push(e.createTextNode(o));
                for (u.textContent = "", f = 0; o = h[f++];)
                    if (i && -1 < E.inArray(o, i)) r && r.push(o);
                    else if (l = it(o), s = dt(u.appendChild(o), "script"), l && mt(s), n)
                        for (c = 0; o = s[c++];) ht.test(o.type || "") && n.push(o);
                return u
            }
            var yt = /^key/,
                _t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                xt = /^([^.]*)(?:\.(.+)|)/;

            function bt() {
                return !0
            }

            function wt() {
                return !1
            }

            function Tt(t, e) {
                return t === function () {
                    try {
                        return S.activeElement
                    } catch (t) { }
                }() == ("focus" === e)
            }

            function St(t, e, n, i, r, o) {
                var s, a;
                if ("object" == rn(e)) {
                    for (a in "string" != typeof n && (i = i || n, n = void 0), e) St(t, a, n, i, e[a], o);
                    return t
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = wt;
                else if (!r) return t;
                return 1 === o && (s = r, (r = function (t) {
                    return E().off(t), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = E.guid++)), t.each(function () {
                    E.event.add(this, e, r, i, n)
                })
            }

            function Et(t, r, o) {
                o ? (V.set(t, r, !1), E.event.add(t, r, {
                    namespace: !1,
                    handler: function (t) {
                        var e, n, i = V.get(this, r);
                        if (1 & t.isTrigger && this[r]) {
                            if (i.length) (E.event.special[r] || {}).delegateType && t.stopPropagation();
                            else if (i = a.call(arguments), V.set(this, r, i), e = o(this, r), this[r](), i !== (n = V.get(this, r)) || e ? V.set(this, r, !1) : n = {}, i !== n) return t.stopImmediatePropagation(), t.preventDefault(), n.value
                        } else i.length && (V.set(this, r, {
                            value: E.event.trigger(E.extend(i[0], E.Event.prototype), i.slice(1), this)
                        }), t.stopImmediatePropagation())
                    }
                })) : void 0 === V.get(t, r) && E.event.add(t, r, bt)
            }
            E.event = {
                global: {},
                add: function (e, t, n, i, r) {
                    var o, s, a, l, c, u, h, f, p, d = V.get(e);
                    if ($(e))
                        for (n.handler && (n = (o = n).handler, r = o.selector), r && E.find.matchesSelector(nt, r), n.guid || (n.guid = E.guid++), (a = d.events) || (a = d.events = Object.create(null)), (s = d.handle) || (s = d.handle = function (t) {
                            return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                        }), l = (t = (t || "").match(M) || [""]).length; l--;) h = p = (c = xt.exec(t[l]) || [])[1], f = (c[2] || "").split(".").sort(), h && (u = E.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = E.event.special[h] || {}, c = E.extend({
                            type: h,
                            origType: p,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && E.expr.match.needsContext.test(r),
                            namespace: f.join(".")
                        }, o), (p = a[h]) || ((p = a[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(h, s)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[h] = !0)
                },
                remove: function (t, e, n, i, r) {
                    var o, s, a, l, c, u, h, f, p, d, m, v = V.hasData(t) && V.get(t);
                    if (v && (l = v.events)) {
                        for (c = (e = (e || "").match(M) || [""]).length; c--;)
                            if (p = m = (a = xt.exec(e[c]) || [])[1], d = (a[2] || "").split(".").sort(), p) {
                                for (h = E.event.special[p] || {}, f = l[p = (i ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) u = f[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, h.remove && h.remove.call(t, u));
                                s && !f.length && (h.teardown && !1 !== h.teardown.call(t, d, v.handle) || E.removeEvent(t, p, v.handle), delete l[p])
                            } else
                                for (p in l) E.event.remove(t, p + e[c], n, i, !0);
                        E.isEmptyObject(l) && V.remove(t, "handle events")
                    }
                },
                dispatch: function (t) {
                    var e, n, i, r, o, s = new Array(arguments.length),
                        a = E.event.fix(t),
                        l = (V.get(this, "events") || Object.create(null))[a.type] || [],
                        t = E.event.special[a.type] || {};
                    for (s[0] = a, e = 1; e < arguments.length; e++) s[e] = arguments[e];
                    if (a.delegateTarget = this, !t.preDispatch || !1 !== t.preDispatch.call(this, a)) {
                        for (o = E.event.handlers.call(this, a, l), e = 0;
                            (i = o[e++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = i.elem, n = 0;
                                (r = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (r = ((E.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                        return t.postDispatch && t.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function (t, e) {
                    var n, i, r, o, s, a = [],
                        l = e.delegateCount,
                        c = t.target;
                    if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? -1 < E(r, this).index(c) : E.find(r, this, null, [c]).length), s[r] && o.push(i);
                                o.length && a.push({
                                    elem: c,
                                    handlers: o
                                })
                            } return c = this, l < e.length && a.push({
                                elem: c,
                                handlers: e.slice(l)
                            }), a
                },
                addProp: function (e, t) {
                    Object.defineProperty(E.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: _(t) ? function () {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function (t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function (t) {
                    return t[E.expando] ? t : new E.Event(t)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function (t) {
                            t = this || t;
                            return ct.test(t.type) && t.click && k(t, "input") && Et(t, "click", bt), !1
                        },
                        trigger: function (t) {
                            t = this || t;
                            return ct.test(t.type) && t.click && k(t, "input") && Et(t, "click"), !0
                        },
                        _default: function (t) {
                            t = t.target;
                            return ct.test(t.type) && t.click && k(t, "input") && V.get(t, "click") || k(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                }
            }, E.removeEvent = function (t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n)
            }, E.Event = function (t, e) {
                if (!(this instanceof E.Event)) return new E.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? bt : wt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && E.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[E.expando] = !0
            }, E.Event.prototype = {
                constructor: E.Event,
                isDefaultPrevented: wt,
                isPropagationStopped: wt,
                isImmediatePropagationStopped: wt,
                isSimulated: !1,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = bt, t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = bt, t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = bt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, E.each({
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
                which: function (t) {
                    var e = t.button;
                    return null == t.which && yt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && _t.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                }
            }, E.event.addProp), E.each({
                focus: "focusin",
                blur: "focusout"
            }, function (t, e) {
                E.event.special[t] = {
                    setup: function () {
                        return Et(this, t, Tt), !1
                    },
                    trigger: function () {
                        return Et(this, t), !0
                    },
                    delegateType: e
                }
            }), E.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (t, r) {
                E.event.special[t] = {
                    delegateType: r,
                    bindType: r,
                    handle: function (t) {
                        var e, n = t.relatedTarget,
                            i = t.handleObj;
                        return n && (n === this || E.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = r), e
                    }
                }
            }), E.fn.extend({
                on: function (t, e, n, i) {
                    return St(this, t, e, n, i)
                },
                one: function (t, e, n, i) {
                    return St(this, t, e, n, i, 1)
                },
                off: function (t, e, n) {
                    var i, r;
                    if (t && t.preventDefault && t.handleObj) return i = t.handleObj, E(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" != rn(t)) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = wt), this.each(function () {
                        E.event.remove(this, t, n, e)
                    });
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
            });
            var kt = /<script|<style|<link/i,
                Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
                At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Pt(t, e) {
                return k(t, "table") && k(11 !== e.nodeType ? e : e.firstChild, "tr") && E(t).children("tbody")[0] || t
            }

            function Ot(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function Lt(t) {
                return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
            }

            function Dt(t, e) {
                var n, i, r, o;
                if (1 === e.nodeType) {
                    if (V.hasData(t) && (o = V.get(t).events))
                        for (r in V.remove(e, "handle events"), o)
                            for (n = 0, i = o[r].length; n < i; n++) E.event.add(e, r, o[r][n]);
                    K.hasData(t) && (t = K.access(t), t = E.extend({}, t), K.set(e, t))
                }
            }

            function Rt(n, i, r, o) {
                i = v(i);
                var t, e, s, a, l, c, u = 0,
                    h = n.length,
                    f = h - 1,
                    p = i[0],
                    d = _(p);
                if (d || 1 < h && "string" == typeof p && !y.checkClone && Ct.test(p)) return n.each(function (t) {
                    var e = n.eq(t);
                    d && (i[0] = p.call(this, t, e.html())), Rt(e, i, r, o)
                });
                if (h && (e = (t = gt(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
                    for (a = (s = E.map(dt(t, "script"), Ot)).length; u < h; u++) l = t, u !== f && (l = E.clone(l, !0, !0), a && E.merge(s, dt(l, "script"))), r.call(n[u], l, u);
                    if (a)
                        for (c = s[s.length - 1].ownerDocument, E.map(s, Lt), u = 0; u < a; u++) l = s[u], ht.test(l.type || "") && !V.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }, c) : x(l.textContent.replace(At, ""), l, c))
                }
                return n
            }

            function Mt(t, e, n) {
                for (var i, r = e ? E.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || E.cleanData(dt(i)), i.parentNode && (n && it(i) && mt(dt(i, "script")), i.parentNode.removeChild(i));
                return t
            }
            E.extend({
                htmlPrefilter: function (t) {
                    return t
                },
                clone: function (t, e, n) {
                    var i, r, o, s, a, l, c, u = t.cloneNode(!0),
                        h = it(t);
                    if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || E.isXMLDoc(t)))
                        for (s = dt(u), i = 0, r = (o = dt(t)).length; i < r; i++) a = o[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && ct.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                    if (e)
                        if (n)
                            for (o = o || dt(t), s = s || dt(u), i = 0, r = o.length; i < r; i++) Dt(o[i], s[i]);
                        else Dt(t, u);
                    return 0 < (s = dt(u, "script")).length && mt(s, !h && dt(t, "script")), u
                },
                cleanData: function (t) {
                    for (var e, n, i, r = E.event.special, o = 0; void 0 !== (n = t[o]); o++)
                        if ($(n)) {
                            if (e = n[V.expando]) {
                                if (e.events)
                                    for (i in e.events) r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, e.handle);
                                n[V.expando] = void 0
                            }
                            n[K.expando] && (n[K.expando] = void 0)
                        }
                }
            }), E.fn.extend({
                detach: function (t) {
                    return Mt(this, t, !0)
                },
                remove: function (t) {
                    return Mt(this, t)
                },
                text: function (t) {
                    return q(this, function (t) {
                        return void 0 === t ? E.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                },
                append: function () {
                    return Rt(this, arguments, function (t) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pt(this, t).appendChild(t)
                    })
                },
                prepend: function () {
                    return Rt(this, arguments, function (t) {
                        var e;
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = Pt(this, t)).insertBefore(t, e.firstChild)
                    })
                },
                before: function () {
                    return Rt(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function () {
                    return Rt(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (E.cleanData(dt(t, !1)), t.textContent = "");
                    return this
                },
                clone: function (t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function () {
                        return E.clone(this, t, e)
                    })
                },
                html: function (t) {
                    return q(this, function (t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !kt.test(t) && !pt[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = E.htmlPrefilter(t);
                            try {
                                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (E.cleanData(dt(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) { }
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function () {
                    var n = [];
                    return Rt(this, arguments, function (t) {
                        var e = this.parentNode;
                        E.inArray(this, n) < 0 && (E.cleanData(dt(this)), e && e.replaceChild(t, this))
                    }, n)
                }
            }), E.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, s) {
                E.fn[t] = function (t) {
                    for (var e, n = [], i = E(t), r = i.length - 1, o = 0; o <= r; o++) e = o === r ? this : this.clone(!0), E(i[o])[s](e), l.apply(n, e.get());
                    return this.pushStack(n)
                }
            });

            function Nt(t, e, n) {
                var i, r = {};
                for (i in e) r[i] = t.style[i], t.style[i] = e[i];
                for (i in n = n.call(t), e) t.style[i] = r[i];
                return n
            }
            var jt, It, Ht, Bt, zt, qt, Xt, Ft, Wt = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
                Yt = function (t) {
                    var e = t.ownerDocument.defaultView;
                    return e && e.opener || (e = T), e.getComputedStyle(t)
                },
                $t = new RegExp(et.join("|"), "i");

            function Ut(t, e, n) {
                var i, r, o = t.style;
                return (n = n || Yt(t)) && ("" !== (r = n.getPropertyValue(e) || n[e]) || it(t) || (r = E.style(t, e)), !y.pixelBoxStyles() && Wt.test(r) && $t.test(e) && (i = o.width, t = o.minWidth, e = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = n.width, o.width = i, o.minWidth = t, o.maxWidth = e)), void 0 !== r ? r + "" : r
            }

            function Vt(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }

            function Kt() {
                var t;
                Ft && (Xt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Ft.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(Xt).appendChild(Ft), t = T.getComputedStyle(Ft), jt = "1%" !== t.top, qt = 12 === Gt(t.marginLeft), Ft.style.right = "60%", Bt = 36 === Gt(t.right), It = 36 === Gt(t.width), Ft.style.position = "absolute", Ht = 12 === Gt(Ft.offsetWidth / 3), nt.removeChild(Xt), Ft = null)
            }

            function Gt(t) {
                return Math.round(parseFloat(t))
            }
            Xt = S.createElement("div"), (Ft = S.createElement("div")).style && (Ft.style.backgroundClip = "content-box", Ft.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Ft.style.backgroundClip, E.extend(y, {
                boxSizingReliable: function () {
                    return Kt(), It
                },
                pixelBoxStyles: function () {
                    return Kt(), Bt
                },
                pixelPosition: function () {
                    return Kt(), jt
                },
                reliableMarginLeft: function () {
                    return Kt(), qt
                },
                scrollboxSize: function () {
                    return Kt(), Ht
                },
                reliableTrDimensions: function () {
                    var t, e, n;
                    return null == zt && (t = S.createElement("table"), n = S.createElement("tr"), e = S.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", e.style.height = "9px", nt.appendChild(t).appendChild(n).appendChild(e), n = T.getComputedStyle(n), zt = 3 < parseInt(n.height), nt.removeChild(t)), zt
                }
            }));
            var Qt = ["Webkit", "Moz", "ms"],
                Zt = S.createElement("div").style,
                Jt = {};

            function te(t) {
                return E.cssProps[t] || Jt[t] || (t in Zt ? t : Jt[t] = function (t) {
                    for (var e = t[0].toUpperCase() + t.slice(1), n = Qt.length; n--;)
                        if ((t = Qt[n] + e) in Zt) return t
                }(t) || t)
            }
            var ee = /^(none|table(?!-c[ea]).+)/,
                ne = /^--/,
                ie = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                re = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function oe(t, e, n) {
                var i = tt.exec(e);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
            }

            function se(t, e, n, i, r, o) {
                var s = "width" === e ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2) "margin" === n && (l += E.css(t, n + et[s], !0, r)), i ? ("content" === n && (l -= E.css(t, "padding" + et[s], !0, r)), "margin" !== n && (l -= E.css(t, "border" + et[s] + "Width", !0, r))) : (l += E.css(t, "padding" + et[s], !0, r), "padding" !== n ? l += E.css(t, "border" + et[s] + "Width", !0, r) : a += E.css(t, "border" + et[s] + "Width", !0, r));
                return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
            }

            function ae(t, e, n) {
                var i = Yt(t),
                    r = (!y.boxSizingReliable() || n) && "border-box" === E.css(t, "boxSizing", !1, i),
                    o = r,
                    s = Ut(t, e, i),
                    a = "offset" + e[0].toUpperCase() + e.slice(1);
                if (Wt.test(s)) {
                    if (!n) return s;
                    s = "auto"
                }
                return (!y.boxSizingReliable() && r || !y.reliableTrDimensions() && k(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === E.css(t, "boxSizing", !1, i), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + se(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
            }

            function le(t, e, n, i, r) {
                return new le.prototype.init(t, e, n, i, r)
            }
            E.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                t = Ut(t, "opacity");
                                return "" === t ? "1" : t
                            }
                        }
                    }
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
                    zoom: !0
                },
                cssProps: {},
                style: function (t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r, o, s, a = Y(e),
                            l = ne.test(e),
                            c = t.style;
                        if (l || (e = te(a)), s = E.cssHooks[e] || E.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e];
                        "string" === (o = rn(n)) && (r = tt.exec(n)) && r[1] && (n = st(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (E.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
                    }
                },
                css: function (t, e, n, i) {
                    var r, o = Y(e);
                    return ne.test(e) || (e = te(o)), (o = E.cssHooks[e] || E.cssHooks[o]) && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = Ut(t, e, i)), "normal" === r && e in re && (r = re[e]), "" === n || n ? (e = parseFloat(r), !0 === n || isFinite(e) ? e || 0 : r) : r
                }
            }), E.each(["height", "width"], function (t, a) {
                E.cssHooks[a] = {
                    get: function (t, e, n) {
                        if (e) return !ee.test(E.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ae(t, a, n) : Nt(t, ie, function () {
                            return ae(t, a, n)
                        })
                    },
                    set: function (t, e, n) {
                        var i, r = Yt(t),
                            o = !y.scrollboxSize() && "absolute" === r.position,
                            s = (o || n) && "border-box" === E.css(t, "boxSizing", !1, r),
                            n = n ? se(t, a, n, s, r) : 0;
                        return s && o && (n -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - se(t, a, "border", !1, r) - .5)), n && (i = tt.exec(e)) && "px" !== (i[3] || "px") && (t.style[a] = e, e = E.css(t, a)), oe(0, e, n)
                    }
                }
            }), E.cssHooks.marginLeft = Vt(y.reliableMarginLeft, function (t, e) {
                if (e) return (parseFloat(Ut(t, "marginLeft")) || t.getBoundingClientRect().left - Nt(t, {
                    marginLeft: 0
                }, function () {
                    return t.getBoundingClientRect().left
                })) + "px"
            }), E.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (r, o) {
                E.cssHooks[r + o] = {
                    expand: function (t) {
                        for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[r + et[e] + o] = i[e] || i[e - 2] || i[0];
                        return n
                    }
                }, "margin" !== r && (E.cssHooks[r + o].set = oe)
            }), E.fn.extend({
                css: function (t, e) {
                    return q(this, function (t, e, n) {
                        var i, r, o = {},
                            s = 0;
                        if (Array.isArray(e)) {
                            for (i = Yt(t), r = e.length; s < r; s++) o[e[s]] = E.css(t, e[s], !1, i);
                            return o
                        }
                        return void 0 !== n ? E.style(t, e, n) : E.css(t, e)
                    }, t, e, 1 < arguments.length)
                }
            }), ((E.Tween = le).prototype = {
                constructor: le,
                init: function (t, e, n, i, r, o) {
                    this.elem = t, this.prop = n, this.easing = r || E.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (E.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var t = le.propHooks[this.prop];
                    return (t && t.get ? t : le.propHooks._default).get(this)
                },
                run: function (t) {
                    var e, n = le.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = E.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : le.propHooks._default).set(this), this
                }
            }).init.prototype = le.prototype, (le.propHooks = {
                _default: {
                    get: function (t) {
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (t = E.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function (t) {
                        E.fx.step[t.prop] ? E.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !E.cssHooks[t.prop] && null == t.elem.style[te(t.prop)] ? t.elem[t.prop] = t.now : E.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            }).scrollTop = le.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, E.easing = {
                linear: function (t) {
                    return t
                },
                swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            }, E.fx = le.prototype.init, E.fx.step = {};
            var ce, ue, he = /^(?:toggle|show|hide)$/,
                fe = /queueHooks$/;

            function pe() {
                ue && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(pe) : T.setTimeout(pe, E.fx.interval), E.fx.tick())
            }

            function de() {
                return T.setTimeout(function () {
                    ce = void 0
                }), ce = Date.now()
            }

            function me(t, e) {
                var n, i = 0,
                    r = {
                        height: t
                    };
                for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = et[i])] = r["padding" + n] = t;
                return e && (r.opacity = r.width = t), r
            }

            function ve(t, e, n) {
                for (var i, r = (ge.tweeners[e] || []).concat(ge.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                    if (i = r[o].call(n, e, t)) return i
            }

            function ge(r, t, e) {
                var n, o, i = 0,
                    s = ge.prefilters.length,
                    a = E.Deferred().always(function () {
                        delete l.elem
                    }),
                    l = function () {
                        if (o) return !1;
                        for (var t = ce || de(), t = Math.max(0, c.startTime + c.duration - t), e = 1 - (t / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) c.tweens[n].run(e);
                        return a.notifyWith(r, [c, e, t]), e < 1 && i ? t : (i || a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c]), !1)
                    },
                    c = a.promise({
                        elem: r,
                        props: E.extend({}, t),
                        opts: E.extend(!0, {
                            specialEasing: {},
                            easing: E.easing._default
                        }, e),
                        originalProperties: t,
                        originalOptions: e,
                        startTime: ce || de(),
                        duration: e.duration,
                        tweens: [],
                        createTween: function (t, e) {
                            t = E.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(t), t
                        },
                        stop: function (t) {
                            var e = 0,
                                n = t ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; e < n; e++) c.tweens[e].run(1);
                            return t ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, t])) : a.rejectWith(r, [c, t]), this
                        }
                    }),
                    u = c.props;
                for (function (t, e) {
                    var n, i, r, o, s;
                    for (n in t)
                        if (r = e[i = Y(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = E.cssHooks[i]) && "expand" in s)
                            for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                        else e[i] = r
                }(u, c.opts.specialEasing); i < s; i++)
                    if (n = ge.prefilters[i].call(c, r, u, c.opts)) return _(n.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
                return E.map(u, ve, c), _(c.opts.start) && c.opts.start.call(r, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(l, {
                    elem: r,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }
            E.Animation = E.extend(ge, {
                tweeners: {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e);
                        return st(n.elem, t, tt.exec(e), n), n
                    }]
                },
                tweener: function (t, e) {
                    for (var n, i = 0, r = (t = _(t) ? (e = t, ["*"]) : t.match(M)).length; i < r; i++) n = t[i], ge.tweeners[n] = ge.tweeners[n] || [], ge.tweeners[n].unshift(e)
                },
                prefilters: [function (t, e, n) {
                    var i, r, o, s, a, l, c, u = "width" in e || "height" in e,
                        h = this,
                        f = {},
                        p = t.style,
                        d = t.nodeType && ot(t),
                        m = V.get(t, "fxshow");
                    for (i in n.queue || (null == (s = E._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                        s.unqueued || a()
                    }), s.unqueued++, h.always(function () {
                        h.always(function () {
                            s.unqueued--, E.queue(t, "fx").length || s.empty.fire()
                        })
                    })), e)
                        if (r = e[i], he.test(r)) {
                            if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                                if ("show" !== r || !m || void 0 === m[i]) continue;
                                d = !0
                            }
                            f[i] = m && m[i] || E.style(t, i)
                        } if ((l = !E.isEmptyObject(e)) || !E.isEmptyObject(f))
                        for (i in u && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = V.get(t, "display")), "none" === (u = E.css(t, "display")) && (c ? u = c : (lt([t], !0), c = t.style.display || c, u = E.css(t, "display"), lt([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(t, "float") && (l || (h.done(function () {
                            p.display = c
                        }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), l = !1, f) l || (m ? "hidden" in m && (d = m.hidden) : m = V.access(t, "fxshow", {
                            display: c
                        }), o && (m.hidden = !d), d && lt([t], !0), h.done(function () {
                            for (i in d || lt([t]), V.remove(t, "fxshow"), f) E.style(t, i, f[i])
                        })), l = ve(d ? m[i] : 0, i, h), i in m || (m[i] = l.start, d && (l.end = l.start, l.start = 0))
                }],
                prefilter: function (t, e) {
                    e ? ge.prefilters.unshift(t) : ge.prefilters.push(t)
                }
            }), E.speed = function (t, e, n) {
                var i = t && "object" == rn(t) ? E.extend({}, t) : {
                    complete: n || !n && e || _(t) && t,
                    duration: t,
                    easing: n && e || e && !_(e) && e
                };
                return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    _(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue)
                }, i
            }, E.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(ot).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function (e, t, n, i) {
                    var r = E.isEmptyObject(e),
                        o = E.speed(t, n, i),
                        i = function () {
                            var t = ge(this, E.extend({}, e), o);
                            (r || V.get(this, "finish")) && t.stop(!0)
                        };
                    return i.finish = i, r || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
                },
                stop: function (r, t, o) {
                    function s(t) {
                        var e = t.stop;
                        delete t.stop, e(o)
                    }
                    return "string" != typeof r && (o = t, t = r, r = void 0), t && this.queue(r || "fx", []), this.each(function () {
                        var t = !0,
                            e = null != r && r + "queueHooks",
                            n = E.timers,
                            i = V.get(this);
                        if (e) i[e] && i[e].stop && s(i[e]);
                        else
                            for (e in i) i[e] && i[e].stop && fe.test(e) && s(i[e]);
                        for (e = n.length; e--;) n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
                        !t && o || E.dequeue(this, r)
                    })
                },
                finish: function (s) {
                    return !1 !== s && (s = s || "fx"), this.each(function () {
                        var t, e = V.get(this),
                            n = e[s + "queue"],
                            i = e[s + "queueHooks"],
                            r = E.timers,
                            o = n ? n.length : 0;
                        for (e.finish = !0, E.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === s && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                        delete e.finish
                    })
                }
            }), E.each(["toggle", "show", "hide"], function (t, i) {
                var r = E.fn[i];
                E.fn[i] = function (t, e, n) {
                    return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(me(i, !0), t, e, n)
                }
            }), E.each({
                slideDown: me("show"),
                slideUp: me("hide"),
                slideToggle: me("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, i) {
                E.fn[t] = function (t, e, n) {
                    return this.animate(i, t, e, n)
                }
            }), E.timers = [], E.fx.tick = function () {
                var t, e = 0,
                    n = E.timers;
                for (ce = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || E.fx.stop(), ce = void 0
            }, E.fx.timer = function (t) {
                E.timers.push(t), E.fx.start()
            }, E.fx.interval = 13, E.fx.start = function () {
                ue || (ue = !0, pe())
            }, E.fx.stop = function () {
                ue = null
            }, E.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, E.fn.delay = function (i, t) {
                return i = E.fx && E.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
                    var n = T.setTimeout(t, i);
                    e.stop = function () {
                        T.clearTimeout(n)
                    }
                })
            }, ft = S.createElement("input"), J = S.createElement("select").appendChild(S.createElement("option")), ft.type = "checkbox", y.checkOn = "" !== ft.value, y.optSelected = J.selected, (ft = S.createElement("input")).value = "t", ft.type = "radio", y.radioValue = "t" === ft.value;
            var ye, _e = E.expr.attrHandle;
            E.fn.extend({
                attr: function (t, e) {
                    return q(this, E.attr, t, e, 1 < arguments.length)
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        E.removeAttr(this, t)
                    })
                }
            }), E.extend({
                attr: function (t, e, n) {
                    var i, r, o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? E.prop(t, e, n) : (1 === o && E.isXMLDoc(t) || (r = E.attrHooks[e.toLowerCase()] || (E.expr.match.bool.test(e) ? ye : void 0)), void 0 !== n ? null === n ? void E.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : !(r && "get" in r && null !== (i = r.get(t, e))) && null == (i = E.find.attr(t, e)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!y.radioValue && "radio" === e && k(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                },
                removeAttr: function (t, e) {
                    var n, i = 0,
                        r = e && e.match(M);
                    if (r && 1 === t.nodeType)
                        for (; n = r[i++];) t.removeAttribute(n)
                }
            }), ye = {
                set: function (t, e, n) {
                    return !1 === e ? E.removeAttr(t, n) : t.setAttribute(n, n), n
                }
            }, E.each(E.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var s = _e[e] || E.find.attr;
                _e[e] = function (t, e, n) {
                    var i, r, o = e.toLowerCase();
                    return n || (r = _e[o], _e[o] = i, i = null != s(t, e, n) ? o : null, _e[o] = r), i
                }
            });
            var xe = /^(?:input|select|textarea|button)$/i,
                be = /^(?:a|area)$/i;

            function we(t) {
                return (t.match(M) || []).join(" ")
            }

            function Te(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }

            function Se(t) {
                return Array.isArray(t) ? t : "string" == typeof t && t.match(M) || []
            }
            E.fn.extend({
                prop: function (t, e) {
                    return q(this, E.prop, t, e, 1 < arguments.length)
                },
                removeProp: function (t) {
                    return this.each(function () {
                        delete this[E.propFix[t] || t]
                    })
                }
            }), E.extend({
                prop: function (t, e, n) {
                    var i, r, o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(t) || (e = E.propFix[e] || e, r = E.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = E.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : xe.test(t.nodeName) || be.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), y.optSelected || (E.propHooks.selected = {
                get: function (t) {
                    t = t.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function (t) {
                    t = t.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                E.propFix[this.toLowerCase()] = this
            }), E.fn.extend({
                addClass: function (e) {
                    var t, n, i, r, o, s, a = 0;
                    if (_(e)) return this.each(function (t) {
                        E(this).addClass(e.call(this, t, Te(this)))
                    });
                    if ((t = Se(e)).length)
                        for (; n = this[a++];)
                            if (s = Te(n), i = 1 === n.nodeType && " " + we(s) + " ") {
                                for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                s !== (s = we(i)) && n.setAttribute("class", s)
                            } return this
                },
                removeClass: function (e) {
                    var t, n, i, r, o, s, a = 0;
                    if (_(e)) return this.each(function (t) {
                        E(this).removeClass(e.call(this, t, Te(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = Se(e)).length)
                        for (; n = this[a++];)
                            if (s = Te(n), i = 1 === n.nodeType && " " + we(s) + " ") {
                                for (o = 0; r = t[o++];)
                                    for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                                s !== (s = we(i)) && n.setAttribute("class", s)
                            } return this
                },
                toggleClass: function (r, e) {
                    var o = rn(r),
                        s = "string" === o || Array.isArray(r);
                    return "boolean" == typeof e && s ? e ? this.addClass(r) : this.removeClass(r) : _(r) ? this.each(function (t) {
                        E(this).toggleClass(r.call(this, t, Te(this), e), e)
                    }) : this.each(function () {
                        var t, e, n, i;
                        if (s)
                            for (e = 0, n = E(this), i = Se(r); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                        else void 0 !== r && "boolean" !== o || ((t = Te(this)) && V.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== r && V.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (t) {
                    for (var e, n = 0, i = " " + t + " "; e = this[n++];)
                        if (1 === e.nodeType && -1 < (" " + we(Te(e)) + " ").indexOf(i)) return !0;
                    return !1
                }
            });
            var Ee = /\r/g;
            E.fn.extend({
                val: function (e) {
                    var n, t, i, r = this[0];
                    return arguments.length ? (i = _(e), this.each(function (t) {
                        1 === this.nodeType && (null == (t = i ? e.call(this, t, E(this).val()) : e) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function (t) {
                            return null == t ? "" : t + ""
                        })), (n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
                    })) : r ? (n = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(r, "value")) ? t : "string" == typeof (t = r.value) ? t.replace(Ee, "") : null == t ? "" : t : void 0
                }
            }), E.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = E.find.attr(t, "value");
                            return null != e ? e : we(E.text(t))
                        }
                    },
                    select: {
                        get: function (t) {
                            for (var e, n = t.options, i = t.selectedIndex, r = "select-one" === t.type, o = r ? null : [], s = r ? i + 1 : n.length, a = i < 0 ? s : r ? i : 0; a < s; a++)
                                if (((e = n[a]).selected || a === i) && !e.disabled && (!e.parentNode.disabled || !k(e.parentNode, "optgroup"))) {
                                    if (e = E(e).val(), r) return e;
                                    o.push(e)
                                } return o
                        },
                        set: function (t, e) {
                            for (var n, i, r = t.options, o = E.makeArray(e), s = r.length; s--;)((i = r[s]).selected = -1 < E.inArray(E.valHooks.option.get(i), o)) && (n = !0);
                            return n || (t.selectedIndex = -1), o
                        }
                    }
                }
            }), E.each(["radio", "checkbox"], function () {
                E.valHooks[this] = {
                    set: function (t, e) {
                        if (Array.isArray(e)) return t.checked = -1 < E.inArray(E(t).val(), e)
                    }
                }, y.checkOn || (E.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), y.focusin = "onfocusin" in T;

            function ke(t) {
                t.stopPropagation()
            }
            var Ce = /^(?:focusinfocus|focusoutblur)$/;
            E.extend(E.event, {
                trigger: function (t, e, n, i) {
                    var r, o, s, a, l, c, u, h = [n || S],
                        f = g.call(t, "type") ? t.type : t,
                        p = g.call(t, "namespace") ? t.namespace.split(".") : [],
                        d = u = o = n = n || S;
                    if (3 !== n.nodeType && 8 !== n.nodeType && !Ce.test(f + E.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), a = f.indexOf(":") < 0 && "on" + f, (t = t[E.expando] ? t : new E.Event(f, "object" == rn(t) && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : E.makeArray(e, [t]), c = E.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
                        if (!i && !c.noBubble && !m(n)) {
                            for (s = c.delegateType || f, Ce.test(s + f) || (d = d.parentNode); d; d = d.parentNode) h.push(d), o = d;
                            o === (n.ownerDocument || S) && h.push(o.defaultView || o.parentWindow || T)
                        }
                        for (r = 0;
                            (d = h[r++]) && !t.isPropagationStopped();) u = d, t.type = 1 < r ? s : c.bindType || f, (l = (V.get(d, "events") || Object.create(null))[t.type] && V.get(d, "handle")) && l.apply(d, e), (l = a && d[a]) && l.apply && $(d) && (t.result = l.apply(d, e), !1 === t.result && t.preventDefault());
                        return t.type = f, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), e) || !$(n) || a && _(n[f]) && !m(n) && ((o = n[a]) && (n[a] = null), E.event.triggered = f, t.isPropagationStopped() && u.addEventListener(f, ke), n[f](), t.isPropagationStopped() && u.removeEventListener(f, ke), E.event.triggered = void 0, o && (n[a] = o)), t.result
                    }
                },
                simulate: function (t, e, n) {
                    t = E.extend(new E.Event, n, {
                        type: t,
                        isSimulated: !0
                    });
                    E.event.trigger(t, null, e)
                }
            }), E.fn.extend({
                trigger: function (t, e) {
                    return this.each(function () {
                        E.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function (t, e) {
                    var n = this[0];
                    if (n) return E.event.trigger(t, e, n, !0)
                }
            }), y.focusin || E.each({
                focus: "focusin",
                blur: "focusout"
            }, function (n, i) {
                function r(t) {
                    E.event.simulate(i, t.target, E.event.fix(t))
                }
                E.event.special[i] = {
                    setup: function () {
                        var t = this.ownerDocument || this.document || this,
                            e = V.access(t, i);
                        e || t.addEventListener(n, r, !0), V.access(t, i, (e || 0) + 1)
                    },
                    teardown: function () {
                        var t = this.ownerDocument || this.document || this,
                            e = V.access(t, i) - 1;
                        e ? V.access(t, i, e) : (t.removeEventListener(n, r, !0), V.remove(t, i))
                    }
                }
            });
            var Ae = T.location,
                Pe = {
                    guid: Date.now()
                },
                Oe = /\?/;
            E.parseXML = function (t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = (new T.DOMParser).parseFromString(t, "text/xml")
                } catch (t) {
                    e = void 0
                }
                return e && !e.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + t), e
            };
            var Le = /\[\]$/,
                De = /\r?\n/g,
                Re = /^(?:submit|button|image|reset|file)$/i,
                Me = /^(?:input|select|textarea|keygen)/i;
            E.param = function (t, e) {
                function n(t, e) {
                    e = _(e) ? e() : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e)
                }
                var i, r = [];
                if (null == t) return "";
                if (Array.isArray(t) || t.jquery && !E.isPlainObject(t)) E.each(t, function () {
                    n(this.name, this.value)
                });
                else
                    for (i in t) ! function n(i, t, r, o) {
                        if (Array.isArray(t)) E.each(t, function (t, e) {
                            r || Le.test(i) ? o(i, e) : n(i + "[" + ("object" == rn(e) && null != e ? t : "") + "]", e, r, o)
                        });
                        else if (r || "object" !== d(t)) o(i, t);
                        else
                            for (var e in t) n(i + "[" + e + "]", t[e], r, o)
                    }(i, t[i], e, n);
                return r.join("&")
            }, E.fn.extend({
                serialize: function () {
                    return E.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var t = E.prop(this, "elements");
                        return t ? E.makeArray(t) : this
                    }).filter(function () {
                        var t = this.type;
                        return this.name && !E(this).is(":disabled") && Me.test(this.nodeName) && !Re.test(t) && (this.checked || !ct.test(t))
                    }).map(function (t, e) {
                        var n = E(this).val();
                        return null == n ? null : Array.isArray(n) ? E.map(n, function (t) {
                            return {
                                name: e.name,
                                value: t.replace(De, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: n.replace(De, "\r\n")
                        }
                    }).get()
                }
            });
            var Ne = /%20/g,
                je = /#.*$/,
                Ie = /([?&])_=[^&]*/,
                He = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Be = /^(?:GET|HEAD)$/,
                ze = /^\/\//,
                qe = {},
                Xe = {},
                Fe = "*/".concat("*"),
                We = S.createElement("a");

            function Ye(o) {
                return function (t, e) {
                    "string" != typeof t && (e = t, t = "*");
                    var n, i = 0,
                        r = t.toLowerCase().match(M) || [];
                    if (_(e))
                        for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
                }
            }

            function $e(e, i, r, o) {
                var s = {},
                    a = e === Xe;

                function l(t) {
                    var n;
                    return s[t] = !0, E.each(e[t] || [], function (t, e) {
                        e = e(i, r, o);
                        return "string" != typeof e || a || s[e] ? a ? !(n = e) : void 0 : (i.dataTypes.unshift(e), l(e), !1)
                    }), n
                }
                return l(i.dataTypes[0]) || !s["*"] && l("*")
            }

            function Ue(t, e) {
                var n, i, r = E.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((r[n] ? t : i = i || {})[n] = e[n]);
                return i && E.extend(!0, t, i), t
            }
            We.href = Ae.href, E.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ae.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ae.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Fe,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": E.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (t, e) {
                    return e ? Ue(Ue(t, E.ajaxSettings), e) : Ue(E.ajaxSettings, t)
                },
                ajaxPrefilter: Ye(qe),
                ajaxTransport: Ye(Xe),
                ajax: function (t, e) {
                    "object" == rn(t) && (e = t, t = void 0), e = e || {};
                    var l, c, u, n, h, i, f, p, r, o, d = E.ajaxSetup({}, e),
                        m = d.context || d,
                        v = d.context && (m.nodeType || m.jquery) ? E(m) : E.event,
                        g = E.Deferred(),
                        y = E.Callbacks("once memory"),
                        _ = d.statusCode || {},
                        s = {},
                        a = {},
                        x = "canceled",
                        b = {
                            readyState: 0,
                            getResponseHeader: function (t) {
                                var e;
                                if (f) {
                                    if (!n)
                                        for (n = {}; e = He.exec(u);) n[e[1].toLowerCase() + " "] = (n[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                    e = n[t.toLowerCase() + " "]
                                }
                                return null == e ? null : e.join(", ")
                            },
                            getAllResponseHeaders: function () {
                                return f ? u : null
                            },
                            setRequestHeader: function (t, e) {
                                return null == f && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, s[t] = e), this
                            },
                            overrideMimeType: function (t) {
                                return null == f && (d.mimeType = t), this
                            },
                            statusCode: function (t) {
                                if (t)
                                    if (f) b.always(t[b.status]);
                                    else
                                        for (var e in t) _[e] = [_[e], t[e]];
                                return this
                            },
                            abort: function (t) {
                                t = t || x;
                                return l && l.abort(t), w(0, t), this
                            }
                        };
                    if (g.promise(b), d.url = ((t || d.url || Ae.href) + "").replace(ze, Ae.protocol + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(M) || [""], null == d.crossDomain) {
                        i = S.createElement("a");
                        try {
                            i.href = d.url, i.href = i.href, d.crossDomain = We.protocol + "//" + We.host != i.protocol + "//" + i.host
                        } catch (t) {
                            d.crossDomain = !0
                        }
                    }
                    if (d.data && d.processData && "string" != typeof d.data && (d.data = E.param(d.data, d.traditional)), $e(qe, d, e, b), f) return b;
                    for (r in (p = E.event && d.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Be.test(d.type), c = d.url.replace(je, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Ne, "+")) : (o = d.url.slice(c.length), d.data && (d.processData || "string" == typeof d.data) && (c += (Oe.test(c) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (c = c.replace(Ie, "$1"), o = (Oe.test(c) ? "&" : "?") + "_=" + Pe.guid++ + o), d.url = c + o), d.ifModified && (E.lastModified[c] && b.setRequestHeader("If-Modified-Since", E.lastModified[c]), E.etag[c] && b.setRequestHeader("If-None-Match", E.etag[c])), (d.data && d.hasContent && !1 !== d.contentType || e.contentType) && b.setRequestHeader("Content-Type", d.contentType), b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : d.accepts["*"]), d.headers) b.setRequestHeader(r, d.headers[r]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(m, b, d) || f)) return b.abort();
                    if (x = "abort", y.add(d.complete), b.done(d.success), b.fail(d.error), l = $e(Xe, d, e, b)) {
                        if (b.readyState = 1, p && v.trigger("ajaxSend", [b, d]), f) return b;
                        d.async && 0 < d.timeout && (h = T.setTimeout(function () {
                            b.abort("timeout")
                        }, d.timeout));
                        try {
                            f = !1, l.send(s, w)
                        } catch (t) {
                            if (f) throw t;
                            w(-1, t)
                        }
                    } else w(-1, "No Transport");

                    function w(t, e, n, i) {
                        var r, o, s, a = e;
                        f || (f = !0, h && T.clearTimeout(h), l = void 0, u = i || "", b.readyState = 0 < t ? 4 : 0, i = 200 <= t && t < 300 || 304 === t, n && (s = function (t, e, n) {
                            for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (i)
                                for (r in a)
                                    if (a[r] && a[r].test(i)) {
                                        l.unshift(r);
                                        break
                                    } if (l[0] in n) o = l[0];
                            else {
                                for (r in n) {
                                    if (!l[0] || t.converters[r + " " + l[0]]) {
                                        o = r;
                                        break
                                    }
                                    s = s || r
                                }
                                o = o || s
                            }
                            if (o) return o !== l[0] && l.unshift(o), n[o]
                        }(d, b, n)), !i && -1 < E.inArray("script", d.dataTypes) && (d.converters["text script"] = function () { }), s = function (t, e, n, i) {
                            var r, o, s, a, l, c = {},
                                u = t.dataTypes.slice();
                            if (u[1])
                                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                            for (o = u.shift(); o;)
                                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (!(s = c[l + " " + o] || c["* " + o]))
                                            for (r in c)
                                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                                    break
                                                } if (!0 !== s)
                                            if (s && t.throws) e = s(e);
                                            else try {
                                                e = s(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? t : "No conversion from " + l + " to " + o
                                                }
                                            }
                                    }
                            return {
                                state: "success",
                                data: e
                            }
                        }(d, s, b, i), i ? (d.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (E.lastModified[c] = n), (n = b.getResponseHeader("etag")) && (E.etag[c] = n)), 204 === t || "HEAD" === d.type ? a = "nocontent" : 304 === t ? a = "notmodified" : (a = s.state, r = s.data, i = !(o = s.error))) : (o = a, !t && a || (a = "error", t < 0 && (t = 0))), b.status = t, b.statusText = (e || a) + "", i ? g.resolveWith(m, [r, a, b]) : g.rejectWith(m, [b, a, o]), b.statusCode(_), _ = void 0, p && v.trigger(i ? "ajaxSuccess" : "ajaxError", [b, d, i ? r : o]), y.fireWith(m, [b, a]), p && (v.trigger("ajaxComplete", [b, d]), --E.active || E.event.trigger("ajaxStop")))
                    }
                    return b
                },
                getJSON: function (t, e, n) {
                    return E.get(t, e, n, "json")
                },
                getScript: function (t, e) {
                    return E.get(t, void 0, e, "script")
                }
            }), E.each(["get", "post"], function (t, r) {
                E[r] = function (t, e, n, i) {
                    return _(e) && (i = i || n, n = e, e = void 0), E.ajax(E.extend({
                        url: t,
                        type: r,
                        dataType: i,
                        data: e,
                        success: n
                    }, E.isPlainObject(t) && t))
                }
            }), E.ajaxPrefilter(function (t) {
                for (var e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
            }), E._evalUrl = function (t, e, n) {
                return E.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () { }
                    },
                    dataFilter: function (t) {
                        E.globalEval(t, e, n)
                    }
                })
            }, E.fn.extend({
                wrapAll: function (t) {
                    return this[0] && (_(t) && (t = t.call(this[0])), t = E(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    }).append(this)), this
                },
                wrapInner: function (n) {
                    return _(n) ? this.each(function (t) {
                        E(this).wrapInner(n.call(this, t))
                    }) : this.each(function () {
                        var t = E(this),
                            e = t.contents();
                        e.length ? e.wrapAll(n) : t.append(n)
                    })
                },
                wrap: function (e) {
                    var n = _(e);
                    return this.each(function (t) {
                        E(this).wrapAll(n ? e.call(this, t) : e)
                    })
                },
                unwrap: function (t) {
                    return this.parent(t).not("body").each(function () {
                        E(this).replaceWith(this.childNodes)
                    }), this
                }
            }), E.expr.pseudos.hidden = function (t) {
                return !E.expr.pseudos.visible(t)
            }, E.expr.pseudos.visible = function (t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            }, E.ajaxSettings.xhr = function () {
                try {
                    return new T.XMLHttpRequest
                } catch (t) { }
            };
            var Ve = {
                0: 200,
                1223: 204
            },
                Ke = E.ajaxSettings.xhr();
            y.cors = !!Ke && "withCredentials" in Ke, y.ajax = Ke = !!Ke, E.ajaxTransport(function (r) {
                var o, s;
                if (y.cors || Ke && !r.crossDomain) return {
                    send: function (t, e) {
                        var n, i = r.xhr();
                        if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                            for (n in r.xhrFields) i[n] = r.xhrFields[n];
                        for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
                        o = function (t) {
                            return function () {
                                o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(Ve[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                    binary: i.response
                                } : {
                                    text: i.responseText
                                }, i.getAllResponseHeaders()))
                            }
                        }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
                            4 === i.readyState && T.setTimeout(function () {
                                o && s()
                            })
                        }, o = o("abort");
                        try {
                            i.send(r.hasContent && r.data || null)
                        } catch (t) {
                            if (o) throw t
                        }
                    },
                    abort: function () {
                        o && o()
                    }
                }
            }), E.ajaxPrefilter(function (t) {
                t.crossDomain && (t.contents.script = !1)
            }), E.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (t) {
                        return E.globalEval(t), t
                    }
                }
            }), E.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), E.ajaxTransport("script", function (n) {
                var i, r;
                if (n.crossDomain || n.scriptAttrs) return {
                    send: function (t, e) {
                        i = E("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", r = function (t) {
                            i.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                        }), S.head.appendChild(i[0])
                    },
                    abort: function () {
                        r && r()
                    }
                }
            });
            var Ge = [],
                Qe = /(=)\?(?=&|$)|\?\?/;
            E.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var t = Ge.pop() || E.expando + "_" + Pe.guid++;
                    return this[t] = !0, t
                }
            }), E.ajaxPrefilter("json jsonp", function (t, e, n) {
                var i, r, o, s = !1 !== t.jsonp && (Qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = _(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qe, "$1" + i) : !1 !== t.jsonp && (t.url += (Oe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                    return o || E.error(i + " was not called"), o[0]
                }, t.dataTypes[0] = "json", r = T[i], T[i] = function () {
                    o = arguments
                }, n.always(function () {
                    void 0 === r ? E(T).removeProp(i) : T[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, Ge.push(i)), o && _(r) && r(o[0]), o = r = void 0
                }), "script"
            }), y.createHTMLDocument = ((ft = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ft.childNodes.length), E.parseHTML = function (t, e, n) {
                return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (y.createHTMLDocument ? ((i = (e = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, e.head.appendChild(i)) : e = S), i = !n && [], (n = C.exec(t)) ? [e.createElement(n[1])] : (n = gt([t], e, i), i && i.length && E(i).remove(), E.merge([], n.childNodes)));
                var i
            }, E.fn.load = function (t, e, n) {
                var i, r, o, s = this,
                    a = t.indexOf(" ");
                return -1 < a && (i = we(t.slice(a)), t = t.slice(0, a)), _(e) ? (n = e, e = void 0) : e && "object" == rn(e) && (r = "POST"), 0 < s.length && E.ajax({
                    url: t,
                    type: r || "GET",
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    o = arguments, s.html(i ? E("<div>").append(E.parseHTML(t)).find(i) : t)
                }).always(n && function (t, e) {
                    s.each(function () {
                        n.apply(this, o || [t.responseText, e, t])
                    })
                }), this
            }, E.expr.pseudos.animated = function (e) {
                return E.grep(E.timers, function (t) {
                    return e === t.elem
                }).length
            }, E.offset = {
                setOffset: function (t, e, n) {
                    var i, r, o, s, a = E.css(t, "position"),
                        l = E(t),
                        c = {};
                    "static" === a && (t.style.position = "relative"), o = l.offset(), i = E.css(t, "top"), s = E.css(t, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (r = (a = l.position()).top, a.left) : (r = parseFloat(i) || 0, parseFloat(s) || 0), _(e) && (e = e.call(t, n, E.extend({}, o))), null != e.top && (c.top = e.top - o.top + r), null != e.left && (c.left = e.left - o.left + s), "using" in e ? e.using.call(t, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), l.css(c))
                }
            }, E.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        E.offset.setOffset(this, e, t)
                    });
                    var t, n = this[0];
                    return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var t, e, n, i = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === E.css(i, "position")) e = i.getBoundingClientRect();
                        else {
                            for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === E.css(t, "position");) t = t.parentNode;
                            t && t !== i && 1 === t.nodeType && ((r = E(t).offset()).top += E.css(t, "borderTopWidth", !0), r.left += E.css(t, "borderLeftWidth", !0))
                        }
                        return {
                            top: e.top - r.top - E.css(i, "marginTop", !0),
                            left: e.left - r.left - E.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent; t && "static" === E.css(t, "position");) t = t.offsetParent;
                        return t || nt
                    })
                }
            }), E.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (e, r) {
                var o = "pageYOffset" === r;
                E.fn[e] = function (t) {
                    return q(this, function (t, e, n) {
                        var i;
                        return m(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n ? i ? i[r] : t[e] : void (i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[e] = n)
                    }, e, t, arguments.length)
                }
            }), E.each(["top", "left"], function (t, n) {
                E.cssHooks[n] = Vt(y.pixelPosition, function (t, e) {
                    if (e) return e = Ut(t, n), Wt.test(e) ? E(t).position()[n] + "px" : e
                })
            }), E.each({
                Height: "height",
                Width: "width"
            }, function (s, a) {
                E.each({
                    padding: "inner" + s,
                    content: a,
                    "": "outer" + s
                }, function (i, o) {
                    E.fn[o] = function (t, e) {
                        var n = arguments.length && (i || "boolean" != typeof t),
                            r = i || (!0 === t || !0 === e ? "margin" : "border");
                        return q(this, function (t, e, n) {
                            var i;
                            return m(t) ? 0 === o.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? E.css(t, e, r) : E.style(t, e, n, r)
                        }, a, n ? t : void 0, n)
                    }
                })
            }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                E.fn[e] = function (t) {
                    return this.on(e, t)
                }
            }), E.fn.extend({
                bind: function (t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function (t, e) {
                    return this.off(t, null, e)
                },
                delegate: function (t, e, n, i) {
                    return this.on(e, t, n, i)
                },
                undelegate: function (t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                },
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
                E.fn[n] = function (t, e) {
                    return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
                }
            });
            var Ze = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            E.proxy = function (t, e) {
                var n, i;
                if ("string" == typeof e && (i = t[e], e = t, t = i), _(t)) return n = a.call(arguments, 2), (i = function () {
                    return t.apply(e || this, n.concat(a.call(arguments)))
                }).guid = t.guid = t.guid || E.guid++, i
            }, E.holdReady = function (t) {
                t ? E.readyWait++ : E.ready(!0)
            }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = k, E.isFunction = _, E.isWindow = m, E.camelCase = Y, E.type = d, E.now = Date.now, E.isNumeric = function (t) {
                var e = E.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            }, E.trim = function (t) {
                return null == t ? "" : (t + "").replace(Ze, "")
            }, void 0 === (nn = function () {
                return E
            }.apply(on, [])) || (en.exports = nn);
            var Je = T.jQuery,
                tn = T.$;
            return E.noConflict = function (t) {
                return T.$ === E && (T.$ = tn), t && T.jQuery === E && (T.jQuery = Je), E
            }, void 0 === t && (T.jQuery = T.$ = E), E
        })
    }).call(this, e(1)(t))
}, function (t, e, n) {
    var i;
    i = [n(0)], void 0 === (n = "function" == typeof (n = function (s) {
        function a() {
            var t, e, n = {
                height: o.innerHeight,
                width: o.innerWidth
            };
            return n.height || (t = i.compatMode, (t || !s.support.boxModel) && (e = "CSS1Compat" === t ? f : i.body, n = {
                height: e.clientHeight,
                width: e.clientWidth
            })), n
        }

        function l() {
            return {
                top: o.pageYOffset || f.scrollTop || i.body.scrollTop,
                left: o.pageXOffset || f.scrollLeft || i.body.scrollLeft
            }
        }

        function n() {
            if (h.length) {
                var t = 0,
                    e = s.map(h, function (t) {
                        var e = t.data.selector,
                            n = t.$element;
                        return e ? n.find(e) : n
                    });
                for (c = c || a(), u = u || l(); t < h.length; t++)
                    if (s.contains(f, e[t][0])) {
                        var n = s(e[t]),
                            i = {
                                height: n[0].offsetHeight,
                                width: n[0].offsetWidth
                            },
                            r = n.offset(),
                            o = n.data("inview");
                        if (!u || !c) return;
                        r.top + i.height > u.top && r.top < u.top + c.height && r.left + i.width > u.left && r.left < u.left + c.width ? o || n.data("inview", !0).trigger("inview", [!0]) : o && n.data("inview", !1).trigger("inview", [!1])
                    }
            }
        }
        var c, u, r, h = [],
            i = document,
            o = window,
            f = i.documentElement;
        s.event.special.inview = {
            add: function t(e) {
                h.push({
                    data: e,
                    $element: s(this),
                    element: this
                }), !r && h.length && (r = setInterval(n, 250))
            },
            remove: function t(e) {
                for (var n = 0; n < h.length; n++) {
                    var i = h[n];
                    if (i.element === this && i.data.guid === e.guid) {
                        h.splice(n, 1);
                        break
                    }
                }
                h.length || (clearInterval(r), r = null)
            }
        }, s(o).on("scroll resize scrollstop", function () {
            c = u = null
        }), !f.addEventListener && f.attachEvent && f.attachEvent("onfocusin", function () {
            u = null
        })
    }) ? n.apply(e, i) : n) || (t.exports = n)
}, function (it, rt, ot) {
    (function (t) {
        var nt;

        function $t(t) {
            return ($t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * VERSION: 1.18.5
         * DATE: 2016-05-24
         * UPDATES AND DOCS AT: http://greensock.com
         * 
         * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
         *
         * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        var Ut = it.exports && void 0 !== t ? t : this || window;
        (Ut._gsQueue || (Ut._gsQueue = [])).push(function () {
            "use strict";
            var T, y, _, x, g, e, v, t;

            function b(t, e, n, i) {
                n === i && (n = i - (i - e) / 1e6), t === e && (e = t + (n - t) / 1e6), this.a = t, this.b = e, this.c = n, this.d = i, this.da = i - t, this.ca = n - t, this.ba = e - t
            }

            function w(t, e, n, i) {
                var r = {
                    a: t
                },
                    o = {},
                    s = {},
                    a = {
                        c: i
                    },
                    l = (t + e) / 2,
                    c = (n + i) / 2,
                    u = ((n = ((u = (e + n) / 2) + c) / 2) - (e = (l + u) / 2)) / 8;
                return r.b = l + (t - l) / 4, o.b = e + u, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (e + n) / 2, s.b = n - u, a.b = c + (i - c) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
            }

            function f(t, e, n, i, r, o) {
                var s, a, l, c, u, h, f, p, d = {},
                    m = [],
                    v = o || t[0];
                for (a in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) m.push(a);
                if (1 < t.length) {
                    for (p = t[t.length - 1], f = !0, s = m.length; - 1 < --s;)
                        if (a = m[s], .05 < Math.abs(v[a] - p[a])) {
                            f = !1;
                            break
                        } f && (t = t.concat(), o && t.unshift(o), t.push(t[1]), o = t[t.length - 3])
                }
                for (y.length = _.length = x.length = 0, s = m.length; - 1 < --s;) a = m[s], g[a] = -1 !== r.indexOf("," + a + ","), d[a] = function (t, e, n, i) {
                    var r, o, s, a, l, c, u = [];
                    if (i)
                        for (o = (t = [i].concat(t)).length; - 1 < --o;) "string" == typeof (c = t[o][e]) && "=" === c.charAt(1) && (t[o][e] = i[e] + Number(c.charAt(0) + c.substr(2)));
                    if ((r = t.length - 2) < 0) return u[0] = new b(t[0][e], 0, 0, t[r < -1 ? 0 : 1][e]), u;
                    for (o = 0; o < r; o++) s = t[o][e], a = t[o + 1][e], u[o] = new b(s, 0, 0, a), n && (l = t[o + 2][e], y[o] = (y[o] || 0) + (a - s) * (a - s), _[o] = (_[o] || 0) + (l - a) * (l - a));
                    return u[o] = new b(t[o][e], 0, 0, t[o + 1][e]), u
                }(t, a, g[a], o);
                for (s = y.length; - 1 < --s;) y[s] = Math.sqrt(y[s]), _[s] = Math.sqrt(_[s]);
                if (!i) {
                    for (s = m.length; - 1 < --s;)
                        if (g[a])
                            for (h = (l = d[m[s]]).length - 1, c = 0; c < h; c++) u = l[c + 1].da / _[c] + l[c].da / y[c] || 0, x[c] = (x[c] || 0) + u * u;
                    for (s = x.length; - 1 < --s;) x[s] = Math.sqrt(x[s])
                }
                for (s = m.length, c = n ? 4 : 1; - 1 < --s;)(function (t, e, n, i, r) {
                    var o, s, a, l, c, u, h, f, p, d, m = t.length - 1,
                        v = 0,
                        g = t[0].a;
                    for (o = 0; o < m; o++) s = (l = t[v]).a, a = l.d, u = t[v + 1].d, u = r ? (f = y[o], d = ((p = _[o]) + f) * e * .25 / (!i && x[o] || .5), a - ((c = a - (a - s) * (i ? .5 * e : 0 !== f ? d / f : 0)) + (((d = a + (u - a) * (i ? .5 * e : 0 !== p ? d / p : 0)) - c) * (3 * f / (f + p) + .5) / 4 || 0))) : a - ((c = a - (a - s) * e * .5) + (d = a + (u - a) * e * .5)) / 2, c += u, d += u, l.c = u = c, l.b = 0 !== o ? g : g = l.a + .6 * (l.c - l.a), l.da = a - s, l.ca = u - s, l.ba = g - s, n ? (h = w(s, g, u, a), t.splice(v, 1, h[0], h[1], h[2], h[3]), v += 4) : v++, g = d;
                    (l = t[v]).b = g, l.c = g + .4 * (l.d - g), l.da = l.d - l.a, l.ca = l.c - l.a, l.ba = g - l.a, n && (h = w(l.a, g, l.c, l.d), t.splice(v, 1, h[0], h[1], h[2], h[3]))
                })(l = d[a = m[s]], e, n, i, g[a]), f && (l.splice(0, c), l.splice(l.length - c, c));
                return d
            }
            Ut._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (i, u, v) {
                function g(t) {
                    for (var e = [], n = t.length, i = 0; i !== n; e.push(t[i++]));
                    return e
                }

                function y(t, e, n) {
                    var i, r, o = t.cycle;
                    for (i in o) r = o[i], t[i] = "function" == typeof r ? r.call(e[n], n) : r[n % r.length];
                    delete t.cycle
                }

                function _(t, e, n) {
                    v.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = _.prototype.render
                }
                var m = 1e-10,
                    x = v._internals,
                    b = x.isSelector,
                    w = x.isArray,
                    t = _.prototype = v.to({}, .1, {}),
                    T = [];
                _.version = "1.18.5", t.constructor = _, t.kill()._gc = !1, _.killTweensOf = _.killDelayedCallsTo = v.killTweensOf, _.getTweensOf = v.getTweensOf, _.lagSmoothing = v.lagSmoothing, _.ticker = v.ticker, _.render = v.render, t.invalidate = function () {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), v.prototype.invalidate.call(this)
                }, t.updateTo = function (t, e) {
                    var n, i = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    for (n in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[n] = t[n];
                    if (this._initted || r)
                        if (e) this._initted = !1, r && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && v._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                            e = this._totalTime;
                            this.render(0, !0, !1), this._initted = !1, this.render(e, !0, !1)
                        } else if (this._initted = !1, this._init(), 0 < this._time || r)
                            for (var o, s = 1 / (1 - i), a = this._firstPT; a;) o = a.s + a.c, a.c *= s, a.s = o - a.c, a = a._next;
                    return this
                }, t.render = function (t, e, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var i, r, o, s, a, l, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        u = this._time,
                        h = this._totalTime,
                        f = this._cycle,
                        p = this._duration,
                        d = this._rawPrevTime;
                    if (c - 1e-7 <= t ? (this._totalTime = c, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = p, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 !== p || !this._initted && this.vars.lazy && !n || (this._startTime === this._timeline._duration && (t = 0), (d < 0 || t <= 0 && -1e-7 <= t || d === m && "isPause" !== this.data) && d !== t && (n = !0, m < d && (r = "onReverseComplete")), this._rawPrevTime = l = !e || t || d === t ? t : m)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === p && 0 < d) && (r = "onReverseComplete", i = this._reversed), t < 0 && (this._active = !1, 0 !== p || !this._initted && this.vars.lazy && !n || (0 <= d && (n = !0), this._rawPrevTime = l = !e || t || d === t ? t : m)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = p + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && h <= t && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = p - this._time), this._time > p ? this._time = p : this._time < 0 && (this._time = 0)), this._easeType ? (s = this._time / p, (1 === (c = this._easeType) || 3 === c && .5 <= s) && (s = 1 - s), 3 === c && (s *= 2), 1 === (a = this._easePower) ? s *= s : 2 === a ? s *= s * s : 3 === a ? s *= s * s * s : 4 === a && (s *= s * s * s * s), 1 === c ? this.ratio = 1 - s : 2 === c ? this.ratio = s : this._time / p < .5 ? this.ratio = s / 2 : this.ratio = 1 - s / 2) : this.ratio = this._ease.getRatio(this._time / p)), u !== this._time || n || f !== this._cycle) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = u, this._totalTime = h, this._rawPrevTime = d, this._cycle = f, x.lazyTweens.push(this), void (this._lazy = [t, e]);
                            this._time && !i ? this.ratio = this._ease.getRatio(this._time / p) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== u && 0 <= t && (this._active = !0), 0 === h && (2 === this._initted && 0 < t && this._init(), this._startAt && (0 <= t ? this._startAt.render(t, e, n) : r = r || "_dummyGS"), !this.vars.onStart || 0 === this._totalTime && 0 !== p || (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                        this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, n), e || this._totalTime === h && !r || this._callback("onUpdate")), this._cycle !== f && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), !r || this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === p && this._rawPrevTime === m && l !== m && (this._rawPrevTime = 0))
                    } else h !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, _.to = function (t, e, n) {
                    return new _(t, e, n)
                }, _.from = function (t, e, n) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new _(t, e, n)
                }, _.fromTo = function (t, e, n, i) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new _(t, e, i)
                }, _.staggerTo = _.allTo = function (t, e, n, i, r, o, s) {
                    i = i || 0;

                    function a() {
                        n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), r.apply(s || n.callbackScope || this, o || T)
                    }
                    var l, c, u, h, f = 0,
                        p = [],
                        d = n.cycle,
                        m = n.startAt && n.startAt.cycle;
                    for (w(t) || ("string" == typeof t && (t = v.selector(t) || t), b(t) && (t = g(t))), t = t || [], i < 0 && ((t = g(t)).reverse(), i *= -1), l = t.length - 1, u = 0; u <= l; u++) {
                        for (h in c = {}, n) c[h] = n[h];
                        if (d && (y(c, t, u), null != c.duration && (e = c.duration, delete c.duration)), m) {
                            for (h in m = c.startAt = {}, n.startAt) m[h] = n.startAt[h];
                            y(c.startAt, t, u)
                        }
                        c.delay = f + (c.delay || 0), u === l && r && (c.onComplete = a), p[u] = new _(t[u], e, c), f += i
                    }
                    return p
                }, _.staggerFrom = _.allFrom = function (t, e, n, i, r, o, s) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, _.staggerTo(t, e, n, i, r, o, s)
                }, _.staggerFromTo = _.allFromTo = function (t, e, n, i, r, o, s, a) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, _.staggerTo(t, e, i, r, o, s, a)
                }, _.delayedCall = function (t, e, n, i, r) {
                    return new _(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: n,
                        callbackScope: i,
                        onReverseComplete: e,
                        onReverseCompleteParams: n,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, _.set = function (t, e) {
                    return new _(t, 0, e)
                }, _.isTweening = function (t) {
                    return 0 < v.getTweensOf(t, !0).length
                };

                function o(t, e) {
                    for (var n = [], i = 0, r = t._first; r;) r instanceof v ? n[i++] = r : (e && (n[i++] = r), i = (n = n.concat(o(r, e))).length), r = r._next;
                    return n
                }
                var h = _.getAllTweens = function (t) {
                    return o(i._rootTimeline, t).concat(o(i._rootFramesTimeline, t))
                };
                _.killAll = function (t, e, n, i) {
                    null == e && (e = !0), null == n && (n = !0);
                    for (var r, o, s = h(0 != i), a = s.length, l = e && n && i, c = 0; c < a; c++) o = s[c], (l || o instanceof u || (r = o.target === o.vars.onComplete) && n || e && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, _.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var n, i, r, o, s, a = x.tweenLookup;
                        if ("string" == typeof t && (t = v.selector(t) || t), b(t) && (t = g(t)), w(t))
                            for (o = t.length; - 1 < --o;) _.killChildTweensOf(t[o], e);
                        else {
                            for (r in n = [], a)
                                for (i = a[r].target.parentNode; i;) i === t && (n = n.concat(a[r].tweens)), i = i.parentNode;
                            for (s = n.length, o = 0; o < s; o++) e && n[o].totalTime(n[o].totalDuration()), n[o]._enabled(!1, !1)
                        }
                    }
                };

                function r(t, e, n, i) {
                    e = !1 !== e, n = !1 !== n;
                    for (var r, o, s = h(i = !1 !== i), a = e && n && i, l = s.length; - 1 < --l;) o = s[l], (a || o instanceof u || (r = o.target === o.vars.onComplete) && n || e && !r) && o.paused(t)
                }
                return _.pauseAll = function (t, e, n) {
                    r(!0, t, e, n)
                }, _.resumeAll = function (t, e, n) {
                    r(!1, t, e, n)
                }, _.globalTimeScale = function (t) {
                    var e = i._rootTimeline,
                        n = v.ticker.time;
                    return arguments.length ? (t = t || m, e._startTime = n - (n - e._startTime) * e._timeScale / t, e = i._rootFramesTimeline, n = v.ticker.frame, e._startTime = n - (n - e._startTime) * e._timeScale / t, e._timeScale = i._rootTimeline._timeScale = t) : e._timeScale
                }, t.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, t.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, t.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, t.duration = function (t) {
                    return arguments.length ? i.prototype.duration.call(this, t) : this._duration
                }, t.totalDuration = function (t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, t.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, t.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, t.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, _
            }, !0), Ut._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (u, h, f) {
                function p(t) {
                    h.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var e, n, i = this.vars;
                    for (n in i) e = i[n], y(e) && -1 !== e.join("").indexOf("{self}") && (i[n] = this._swapSelfInParams(e));
                    y(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
                }

                function d(t) {
                    var e, n = {};
                    for (e in t) n[e] = t[e];
                    return n
                }

                function m(t, e, n) {
                    var i, r, o = t.cycle;
                    for (i in o) r = o[i], t[i] = "function" == typeof r ? r.call(e[n], n) : r[n % r.length];
                    delete t.cycle
                }

                function v(t) {
                    for (var e = [], n = t.length, i = 0; i !== n; e.push(t[i++]));
                    return e
                }
                var t = f._internals,
                    e = p._internals = {},
                    g = t.isSelector,
                    y = t.isArray,
                    _ = t.lazyTweens,
                    x = t.lazyRender,
                    s = Ut._gsDefine.globals,
                    r = e.pauseCallback = function () { },
                    e = p.prototype = new h;
                return p.version = "1.18.5", e.constructor = p, e.kill()._gc = e._forcingPlayhead = e._hasPause = !1, e.to = function (t, e, n, i) {
                    var r = n.repeat && s.TweenMax || f;
                    return e ? this.add(new r(t, e, n), i) : this.set(t, n, i)
                }, e.from = function (t, e, n, i) {
                    return this.add((n.repeat && s.TweenMax || f).from(t, e, n), i)
                }, e.fromTo = function (t, e, n, i, r) {
                    var o = i.repeat && s.TweenMax || f;
                    return e ? this.add(o.fromTo(t, e, n, i), r) : this.set(t, i, r)
                }, e.staggerTo = function (t, e, n, i, r, o, s, a) {
                    var l, c, u = new p({
                        onComplete: o,
                        onCompleteParams: s,
                        callbackScope: a,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                        h = n.cycle;
                    for ("string" == typeof t && (t = f.selector(t) || t), g(t = t || []) && (t = v(t)), (i = i || 0) < 0 && ((t = v(t)).reverse(), i *= -1), c = 0; c < t.length; c++)(l = d(n)).startAt && (l.startAt = d(l.startAt), l.startAt.cycle && m(l.startAt, t, c)), h && (m(l, t, c), null != l.duration && (e = l.duration, delete l.duration)), u.to(t[c], e, l, c * i);
                    return this.add(u, r)
                }, e.staggerFrom = function (t, e, n, i, r, o, s, a) {
                    return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(t, e, n, i, r, o, s, a)
                }, e.staggerFromTo = function (t, e, n, i, r, o, s, a, l) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, this.staggerTo(t, e, i, r, o, s, a, l)
                }, e.call = function (t, e, n, i) {
                    return this.add(f.delayedCall(0, t, e, n), i)
                }, e.set = function (t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new f(t, 0, e), n)
                }, p.exportRoot = function (t, e) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var n, i, r = new p(t),
                        t = r._timeline;
                    for (null == e && (e = !0), t._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = t._time, n = t._first; n;) i = n._next, e && n instanceof f && n.target === n.vars.onComplete || r.add(n, n._startTime - n._delay), n = i;
                    return t.add(r, 0), r
                }, e.add = function (t, e, n, i) {
                    var r, o, s, a, l, c;
                    if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof u)) {
                        if (t instanceof Array || t && t.push && y(t)) {
                            for (n = n || "normal", i = i || 0, r = e, o = t.length, s = 0; s < o; s++) y(a = t[s]) && (a = new p({
                                tweens: a
                            })), this.add(a, r), "string" != typeof a && "function" != typeof a && ("sequence" === n ? r = a._startTime + a.totalDuration() / a._timeScale : "start" === n && (a._startTime -= a.delay())), r += i;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof t) return this.addLabel(t, e);
                        if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                        t = f.delayedCall(0, t)
                    }
                    if (h.prototype.add.call(this, t, e), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (c = (l = this).rawTime() > t._startTime; l._timeline;) c && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                    return this
                }, e.remove = function (t) {
                    if (t instanceof u) {
                        this._remove(t, !1);
                        var e = t._timeline = t.vars.useFrames ? u._rootFramesTimeline : u._rootTimeline;
                        return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                    }
                    if (t instanceof Array || t && t.push && y(t)) {
                        for (var n = t.length; - 1 < --n;) this.remove(t[n]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, e._remove = function (t, e) {
                    h.prototype._remove.call(this, t, e);
                    e = this._last;
                    return e ? this._time > e._startTime + e._totalDuration / e._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, e.append = function (t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, e.insert = e.insertMultiple = function (t, e, n, i) {
                    return this.add(t, e || 0, n, i)
                }, e.appendMultiple = function (t, e, n, i) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i)
                }, e.addLabel = function (t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, e.addPause = function (t, e, n, i) {
                    i = f.delayedCall(0, r, n, i || this);
                    return i.vars.onComplete = i.vars.onReverseComplete = e, i.data = "isPause", this._hasPause = !0, this.add(i, t)
                }, e.removeLabel = function (t) {
                    return delete this._labels[t], this
                }, e.getLabelTime = function (t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, e._parseTimeOrLabel = function (t, e, n, i) {
                    var r;
                    if (i instanceof u && i.timeline === this) this.remove(i);
                    else if (i && (i instanceof Array || i.push && y(i)))
                        for (r = i.length; - 1 < --r;) i[r] instanceof u && i[r].timeline === this && this.remove(i[r]);
                    if ("string" == typeof e) return this._parseTimeOrLabel(e, n && "number" == typeof t && null == this._labels[e] ? t - this.duration() : 0, n);
                    if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                    else {
                        if (-1 === (r = t.indexOf("="))) return null == this._labels[t] ? n ? this._labels[t] = this.duration() + e : e : this._labels[t] + e;
                        e = parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1)), t = 1 < r ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, n) : this.duration()
                    }
                    return Number(t) + e
                }, e.seek = function (t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, e.stop = function () {
                    return this.paused(!0)
                }, e.gotoAndPlay = function (t, e) {
                    return this.play(t, e)
                }, e.gotoAndStop = function (t, e) {
                    return this.pause(t, e)
                }, e.render = function (t, e, n) {
                    this._gc && this._enabled(!0, !1);
                    var i, r, o, s, a, l, c, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        h = this._time,
                        f = this._startTime,
                        p = this._timeScale,
                        d = this._paused;
                    if (u - 1e-7 <= t) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (r = !0, s = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, 1e-10 < this._rawPrevTime && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = u + 1e-4;
                    else if (t < 1e-7)
                        if (((this._totalTime = this._time = 0) !== h || 0 === this._duration && 1e-10 !== this._rawPrevTime && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (s = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, s = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (a = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                for (i = this._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                            t = 0, this._initted || (a = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (h <= t)
                                for (i = this._first; i && i._startTime <= t && !l;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (l = i), i = i._next;
                            else
                                for (i = this._last; i && i._startTime >= t && !l;) i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (l = i), i = i._prev;
                            l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== h && this._first || n || a || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== h && 0 < t && (this._active = !0), 0 === h && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), h <= (c = this._time))
                            for (i = this._first; i && (o = i._next, c === this._time && (!this._paused || d));)(i._active || i._startTime <= c && !i._paused && !i._gc) && (l === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = o;
                        else
                            for (i = this._last; i && (o = i._prev, c === this._time && (!this._paused || d));) {
                                if (i._active || i._startTime <= h && !i._paused && !i._gc) {
                                    if (l === i) {
                                        for (l = i._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, n), l = l._prev;
                                        l = null, this.pause()
                                    }
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                                }
                                i = o
                            }
                        this._onUpdate && (e || (_.length && x(), this._callback("onUpdate"))), s && (this._gc || f !== this._startTime && p === this._timeScale || !(0 === this._time || u >= this.totalDuration()) || (r && (_.length && x(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
                    }
                }, e._hasPausedChild = function () {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof p && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, e.getChildren = function (t, e, n, i) {
                    i = i || -9999999999;
                    for (var r = [], o = this._first, s = 0; o;) o._startTime < i || (o instanceof f ? !1 !== e && (r[s++] = o) : (!1 !== n && (r[s++] = o), !1 !== t && (s = (r = r.concat(o.getChildren(!0, e, n))).length))), o = o._next;
                    return r
                }, e.getTweensOf = function (t, e) {
                    var n, i, r = this._gc,
                        o = [],
                        s = 0;
                    for (r && this._enabled(!0, !0), i = (n = f.getTweensOf(t)).length; - 1 < --i;)(n[i].timeline === this || e && this._contains(n[i])) && (o[s++] = n[i]);
                    return r && this._enabled(!1, !0), o
                }, e.recent = function () {
                    return this._recent
                }, e._contains = function (t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, e.shiftChildren = function (t, e, n) {
                    n = n || 0;
                    for (var i, r = this._first, o = this._labels; r;) r._startTime >= n && (r._startTime += t), r = r._next;
                    if (e)
                        for (i in o) o[i] >= n && (o[i] += t);
                    return this._uncache(!0)
                }, e._kill = function (t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; - 1 < --i;) n[i]._kill(t, e) && (r = !0);
                    return r
                }, e.clear = function (t) {
                    var e = this.getChildren(!1, !0, !0),
                        n = e.length;
                    for (this._time = this._totalTime = 0; - 1 < --n;) e[n]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, e.invalidate = function () {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return u.prototype.invalidate.call(this)
                }, e._enabled = function (t, e) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return h.prototype._enabled.call(this, t, e)
                }, e.totalTime = function (t, e, n) {
                    this._forcingPlayhead = !0;
                    var i = u.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, i
                }, e.duration = function (t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, e.totalDuration = function (t) {
                    if (arguments.length) return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
                    if (this._dirty) {
                        for (var e, n, i = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (i -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i < (n = r._startTime + r._totalDuration / r._timeScale) && (i = n), r = e;
                        this._duration = this._totalDuration = i, this._dirty = !1
                    }
                    return this._totalDuration
                }, e.paused = function (t) {
                    if (!t)
                        for (var e = this._first, n = this._time; e;) e._startTime === n && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                    return u.prototype.paused.apply(this, arguments)
                }, e.usesFrames = function () {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === u._rootFramesTimeline
                }, e.rawTime = function () {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, p
            }, !0), Ut._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, s, t) {
                function n(t) {
                    e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                }
                var i = s._internals,
                    E = i.lazyTweens,
                    k = i.lazyRender,
                    a = new t(null, null, 1, 0),
                    t = n.prototype = new e;
                return t.constructor = n, t.kill()._gc = !1, n.version = "1.18.5", t.invalidate = function () {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                }, t.addCallback = function (t, e, n, i) {
                    return this.add(s.delayedCall(0, t, n, i), e)
                }, t.removeCallback = function (t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var n = this.getTweensOf(t, !1), i = n.length, r = this._parseTimeOrLabel(e); - 1 < --i;) n[i]._startTime === r && n[i]._enabled(!1, !1);
                    return this
                }, t.removePause = function (t) {
                    return this.removeCallback(e._internals.pauseCallback, t)
                }, t.tweenTo = function (t, e) {
                    e = e || {};
                    var n, i, r, o = {
                        ease: a,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (i in e) o[i] = e[i];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, r = new s(this, n, o), o.onStart = function () {
                        r.target.paused(!0), r.vars.time !== r.target.time() && n === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), e.onStart && r._callback("onStart")
                    }, r
                }, t.tweenFromTo = function (t, e, n) {
                    n = n || {}, t = this._parseTimeOrLabel(t), n.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, n.immediateRender = !1 !== n.immediateRender;
                    n = this.tweenTo(e, n);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, t.render = function (t, e, n) {
                    this._gc && this._enabled(!0, !1);
                    var i, r, o, s, a, l, c, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        h = this._duration,
                        f = this._time,
                        p = this._totalTime,
                        d = this._startTime,
                        m = this._timeScale,
                        v = this._rawPrevTime,
                        g = this._paused,
                        y = this._cycle;
                    if (u - 1e-7 <= t) this._locked || (this._totalTime = u, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, s = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || v < 0 || 1e-10 === v) && v !== t && this._first && (a = !0, 1e-10 < v && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = h) + 1e-4;
                    else if (t < 1e-7)
                        if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== f || 0 === h && 1e-10 !== v && (0 < v || t < 0 && 0 <= v) && !this._locked) && (s = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, s = "onReverseComplete") : 0 <= v && this._first && (a = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = h || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                for (i = this._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                            t = 0, this._initted || (a = !0)
                        }
                    else if (0 === h && v < 0 && (a = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (S = h + this._repeatDelay, this._cycle = this._totalTime / S >> 0, 0 !== this._cycle && this._cycle === this._totalTime / S && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * S, this._yoyo && 0 != (1 & this._cycle) && (this._time = h - this._time), this._time > h ? t = (this._time = h) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (f <= (t = this._time))
                            for (i = this._first; i && i._startTime <= t && !l;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (l = i), i = i._next;
                        else
                            for (i = this._last; i && i._startTime >= t && !l;) i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (l = i), i = i._prev;
                        l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== y && !this._locked) {
                        var _ = this._yoyo && 0 != (1 & y),
                            x = _ === (this._yoyo && 0 != (1 & this._cycle)),
                            b = this._totalTime,
                            w = this._cycle,
                            T = this._rawPrevTime,
                            S = this._time;
                        if (this._totalTime = y * h, this._cycle < y ? _ = !_ : this._totalTime += h, this._time = f, this._rawPrevTime = 0 === h ? v - 1e-4 : v, this._cycle = y, this._locked = !0, f = _ ? 0 : h, this.render(f, e, 0 === h), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), f !== this._time) return;
                        if (x && (f = _ ? h + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !g) return;
                        this._time = S, this._totalTime = b, this._cycle = w, this._rawPrevTime = T
                    }
                    if (this._time !== f && this._first || n || a || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== p && 0 < t && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), f <= (c = this._time))
                            for (i = this._first; i && (o = i._next, c === this._time && (!this._paused || g));)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (l === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = o;
                        else
                            for (i = this._last; i && (o = i._prev, c === this._time && (!this._paused || g));) {
                                if (i._active || i._startTime <= f && !i._paused && !i._gc) {
                                    if (l === i) {
                                        for (l = i._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, n), l = l._prev;
                                        l = null, this.pause()
                                    }
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                                }
                                i = o
                            }
                        this._onUpdate && (e || (E.length && k(), this._callback("onUpdate"))), s && (this._locked || this._gc || d !== this._startTime && m === this._timeScale || !(0 === this._time || u >= this.totalDuration()) || (r && (E.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
                    } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, t.getActive = function (t, e, n) {
                    null == t && (t = !0), null == e && (e = !0), null == n && (n = !1);
                    for (var i, r = [], o = this.getChildren(t, e, n), s = 0, a = o.length, l = 0; l < a; l++)(i = o[l]).isActive() && (r[s++] = i);
                    return r
                }, t.getLabelAfter = function (t) {
                    t || 0 !== t && (t = this._time);
                    for (var e = this.getLabelsArray(), n = e.length, i = 0; i < n; i++)
                        if (e[i].time > t) return e[i].name;
                    return null
                }, t.getLabelBefore = function (t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), n = e.length; - 1 < --n;)
                        if (e[n].time < t) return e[n].name;
                    return null
                }, t.getLabelsArray = function () {
                    var t, e = [],
                        n = 0;
                    for (t in this._labels) e[n++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function (t, e) {
                        return t.time - e.time
                    }), e
                }, t.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, t.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, t.totalDuration = function (t) {
                    return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, t.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, t.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, t.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, t.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, t.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0), T = 180 / Math.PI, y = [], _ = [], x = [], g = {}, e = Ut._gsDefine.globals, v = Ut._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.6",
                API: 2,
                global: !0,
                init: function (t, e, n) {
                    this._target = t, e instanceof Array && (e = {
                        values: e
                    }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var i, r, o, s, a, l = e.values || [],
                        c = {},
                        u = l[0],
                        h = e.autoRotate || n.vars.orientToBezier;
                    for (i in this._autoRotate = h ? h instanceof Array ? h : [
                        ["x", "y", "rotation", !0 !== h && Number(h) || 0]
                    ] : null, u) this._props.push(i);
                    for (o = this._props.length; - 1 < --o;) i = this._props[o], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof t[i], c[i] = r ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), a || c[i] !== l[0][i] && (a = c);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function (t, e, n) {
                        var i, r, o, s, a, l, c, u, h, f, p, d = {},
                            m = "cubic" === (e = e || "soft") ? 3 : 2,
                            v = "soft" === e,
                            g = [];
                        if (v && n && (t = [n].concat(t)), null == t || t.length < 1 + m) throw "invalid Bezier data";
                        for (h in t[0]) g.push(h);
                        for (l = g.length; - 1 < --l;) {
                            for (h = g[l], d[h] = a = [], f = 0, u = t.length, c = 0; c < u; c++) i = null == n ? t[c][h] : "string" == typeof (p = t[c][h]) && "=" === p.charAt(1) ? n[h] + Number(p.charAt(0) + p.substr(2)) : Number(p), v && 1 < c && c < u - 1 && (a[f++] = (i + a[f - 2]) / 2), a[f++] = i;
                            for (u = f - m + 1, c = f = 0; c < u; c += m) i = a[c], r = a[c + 1], o = a[c + 2], s = 2 == m ? 0 : a[c + 3], a[f++] = p = 3 == m ? new b(i, r, o, s) : new b(i, (2 * r + i) / 3, (2 * r + o) / 3, o);
                            a.length = f
                        }
                        return d
                    }(l, e.type, c), this._segCount = this._beziers[i].length, this._timeRes && (e = function (t, e) {
                        var n, i, r, o, s = [],
                            a = [],
                            l = 0,
                            c = 0,
                            u = (e = e >> 0 || 6) - 1,
                            h = [],
                            f = [];
                        for (n in t) ! function (t, e, n) {
                            for (var i, r, o, s, a, l, c, u, h, f, p, d = 1 / n, m = t.length; - 1 < --m;)
                                for (o = (f = t[m]).a, s = f.d - o, a = f.c - o, l = f.b - o, r = 0, u = 1; u <= n; u++) i = r - (r = ((c = d * u) * c * s + 3 * (h = 1 - c) * (c * a + h * l)) * c), p = m * n + u - 1, e[p] = (e[p] || 0) + i * i
                        }(t[n], s, e);
                        for (r = s.length, i = 0; i < r; i++) l += Math.sqrt(s[i]), f[o = i % e] = l, o == u && (c += l, h[o = i / e >> 0] = f, a[o] = c, l = 0, f = []);
                        return {
                            length: c,
                            lengths: a,
                            segments: h
                        }
                    }(this._beziers, this._timeRes), this._length = e.length, this._lengths = e.lengths, this._segments = e.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length), h = this._autoRotate)
                        for (this._initialRotations = [], h[0] instanceof Array || (this._autoRotate = h = [h]), o = h.length; - 1 < --o;) {
                            for (s = 0; s < 3; s++) i = h[o][s], this._func[i] = "function" == typeof t[i] && t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                            i = h[o][2], this._initialRotations[o] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0
                        }
                    return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
                },
                set: function (t) {
                    var e, n, i, r, o, s, a, l, c, u = this._segCount,
                        h = this._func,
                        f = this._target,
                        p = t !== this._startRatio;
                    if (this._timeRes) {
                        if (l = this._lengths, c = this._curSeg, t *= this._length, w = this._li, t > this._l2 && w < u - 1) {
                            for (a = u - 1; w < a && (this._l2 = l[++w]) <= t;);
                            this._l1 = l[w - 1], this._li = w, this._curSeg = c = this._segments[w], this._s2 = c[this._s1 = this._si = 0]
                        } else if (t < this._l1 && 0 < w) {
                            for (; 0 < w && (this._l1 = l[--w]) >= t;);
                            0 === w && t < this._l1 ? this._l1 = 0 : w++, this._l2 = l[w], this._li = w, this._curSeg = c = this._segments[w], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                        }
                        if (e = w, t -= this._l1, w = this._si, t > this._s2 && w < c.length - 1) {
                            for (a = c.length - 1; w < a && (this._s2 = c[++w]) <= t;);
                            this._s1 = c[w - 1], this._si = w
                        } else if (t < this._s1 && 0 < w) {
                            for (; 0 < w && (this._s1 = c[--w]) >= t;);
                            0 === w && t < this._s1 ? this._s1 = 0 : w++, this._s2 = c[w], this._si = w
                        }
                        o = (w + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else o = (t - (e = t < 0 ? 0 : 1 <= t ? u - 1 : u * t >> 0) * (1 / u)) * u;
                    for (n = 1 - o, w = this._props.length; - 1 < --w;) i = this._props[w], s = (o * o * (r = this._beziers[i][e]).da + 3 * n * (o * r.ca + n * r.ba)) * o + r.a, this._round[i] && (s = Math.round(s)), h[i] ? f[i](s) : f[i] = s;
                    if (this._autoRotate)
                        for (var d, m, v, g, y, _, x, b = this._autoRotate, w = b.length; - 1 < --w;) i = b[w][2], _ = b[w][3] || 0, x = !0 === b[w][4] ? 1 : T, r = this._beziers[b[w][0]], d = this._beziers[b[w][1]], r && d && (r = r[e], d = d[e], m = r.a + (r.b - r.a) * o, m += ((g = r.b + (r.c - r.b) * o) - m) * o, g += (r.c + (r.d - r.c) * o - g) * o, v = d.a + (d.b - d.a) * o, v += ((y = d.b + (d.c - d.b) * o) - v) * o, y += (d.c + (d.d - d.c) * o - y) * o, s = p ? Math.atan2(y - v, g - m) * x + _ : this._initialRotations[w], h[i] ? f[i](s) : f[i] = s)
                }
            }), t = v.prototype, v.bezierThrough = f, v.cubicToQuadratic = w, v._autoCSS = !0, v.quadraticToCubic = function (t, e, n) {
                return new b(t, (2 * e + t) / 3, (2 * e + n) / 3, n)
            }, v._cssRegister = function () {
                var p, d, m, t = e.CSSPlugin;
                t && (t = t._internals, p = t._parseToProxy, d = t._setPluginRatio, m = t.CSSPropTween, t._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, n, i, r, o) {
                        e instanceof Array && (e = {
                            values: e
                        }), o = new v;
                        var s, a, l, c = e.values,
                            u = c.length - 1,
                            h = [],
                            f = {};
                        if (u < 0) return r;
                        for (s = 0; s <= u; s++) l = p(t, c[s], i, r, o, u !== s), h[s] = l.end;
                        for (a in e) f[a] = e[a];
                        return f.values = h, (r = new m(t, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = o, r.setRatio = d, 0 === f.autoRotate && (f.autoRotate = !0), !f.autoRotate || f.autoRotate instanceof Array || (s = !0 === f.autoRotate ? 0 : Number(f.autoRotate), f.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", s, !1]
                        ] : null != l.end.x && [
                            ["x", "y", "rotation", s, !1]
                        ]), f.autoRotate && (i._transform || i._enableTransforms(!1), l.autoRotate = i._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0), o._onInitTween(l.proxy, f, i._tween), r
                    }
                }))
            }, t._roundProps = function (t, e) {
                for (var n = this._overwriteProps, i = n.length; - 1 < --i;)(t[n[i]] || t.bezier || t.bezierThrough) && (this._round[n[i]] = e)
            }, t._kill = function (t) {
                var e, n, i = this._props;
                for (e in this._beziers)
                    if (e in t)
                        for (delete this._beziers[e], delete this._func[e], n = i.length; - 1 < --n;) i[n] === e && i.splice(n, 1);
                return this._super._kill.call(this, t)
            }, Ut._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (o, O) {
                function L() {
                    o.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = L.prototype.setRatio
                }
                var f, b, w, h, c = Ut._gsDefine.globals,
                    p = {},
                    t = L.prototype = new o("css");
                (t.constructor = L).version = "1.18.5", L.API = 2, L.defaultTransformPerspective = 0, L.defaultSkewType = "compensated", L.defaultSmoothOrigin = !0, L.suffixMap = {
                    top: t = "px",
                    right: t,
                    bottom: t,
                    left: t,
                    width: t,
                    height: t,
                    fontSize: t,
                    padding: t,
                    margin: t,
                    perspective: t,
                    lineHeight: ""
                };

                function s(t, e) {
                    return e.toUpperCase()
                }

                function a(t) {
                    return I.test("string" == typeof t ? t : (t.currentStyle || t.style).filter || "") ? parseFloat(RegExp.$1) / 100 : 1
                }

                function d(t) {
                    window.console && console.log(t)
                }

                function T(t, e) {
                    var n, i, r = (e = e || Q).style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; - 1 < --i && void 0 === r[n[i] + t];);
                    return 0 <= i ? (et = "-" + (nt = 3 === i ? "ms" : n[i]).toLowerCase() + "-", nt + t) : null
                }

                function m(t, e) {
                    var n, i, r = {};
                    if (e = e || it(t, null))
                        if (n = e.length)
                            for (; - 1 < --n;) - 1 !== (i = e[n]).indexOf("-transform") && At !== i || (r[i.replace(z, s)] = e.getPropertyValue(i));
                        else
                            for (n in e) - 1 !== n.indexOf("Transform") && Ct !== n || (r[n] = e[n]);
                    else if (e = t.currentStyle || t.style)
                        for (n in e) "string" == typeof n && void 0 === r[n] && (r[n.replace(z, s)] = e[n]);
                    return tt || (r.opacity = a(t)), t = Ht(t, e, !1), r.rotation = t.rotation, r.skewX = t.skewX, r.scaleX = t.scaleX, r.scaleY = t.scaleY, r.x = t.x, r.y = t.y, Ot && (r.z = t.z, r.rotationX = t.rotationX, r.rotationY = t.rotationY, r.scaleZ = t.scaleZ), r.filters && delete r.filters, r
                }

                function v(t, e, n, i, r) {
                    var o, s, a, l = {},
                        c = t.style;
                    for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(N, "") ? o : 0 : st(t, s), void 0 !== c[s] && (a = new mt(c, s, c[s], a)));
                    if (i)
                        for (s in i) "className" !== s && (l[s] = i[s]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                }

                function S(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    null != t && "" !== t || (t = "0 0");
                    var n, i = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    if (3 < i.length && !e) {
                        for (i = t.split(", ").join(",").split(","), t = [], n = 0; n < i.length; n++) t.push(S(i[n]));
                        return t.join(",")
                    }
                    return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (2 < i.length ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(N, "")), e.oy = parseFloat(o.replace(N, "")), e.v = t), e || t
                }

                function k(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                }

                function E(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                }

                function C(t, e, n, i) {
                    var r, o = null == t ? e : "number" == typeof t ? t : (r = t.split("_"), o = ((o = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : V) - (o ? 0 : e), r.length && (i && (i[n] = e + o), -1 !== t.indexOf("short") && ((o %= 360) !== o % 180 && (o = o < 0 ? o + 360 : o - 360)), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 3599999999640) % 360 - 360 * (o / 360 | 0) : -1 !== t.indexOf("ccw") && 0 < o && (o = (o - 3599999999640) % 360 - 360 * (o / 360 | 0))), e + o);
                    return o < 1e-6 && -1e-6 < o && (o = 0), o
                }

                function u(t, e, n) {
                    return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                }

                function n(t, e) {
                    for (var n, i, r = t.match(ht) || [], o = 0, s = r.length ? "" : t, a = 0; a < r.length; a++) n = r[a], o += (i = t.substr(o, t.indexOf(n, o) - o)).length + n.length, 3 === (n = ut(n, e)).length && n.push(1), s += i + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                    return s + t.substr(o)
                }
                var A, g, y, D, _, P, R = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    M = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    N = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    j = /(?:\d|\-|\+|=|#|\.)*/g,
                    I = /opacity *= *([^)]*)/i,
                    H = /opacity:([^;]*)/i,
                    r = /alpha\(opacity *=.+?\)/i,
                    B = /^(rgb|hsl)/,
                    l = /([A-Z])/g,
                    z = /-([a-z])/gi,
                    q = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    X = /(?:Left|Right|Width)/i,
                    F = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    W = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    Y = /,(?=[^\)]*(?:\(|$))/gi,
                    $ = /[\s,\(]/i,
                    U = Math.PI / 180,
                    V = 180 / Math.PI,
                    K = {},
                    G = document,
                    e = function (t) {
                        return G.createElementNS ? G.createElementNS("http://www.w3.org/1999/xhtml", t) : G.createElement(t)
                    },
                    Q = e("div"),
                    Z = e("img"),
                    i = L._internals = {
                        _specialProps: p
                    },
                    J = navigator.userAgent,
                    tt = (Et = J.indexOf("Android"), St = e("a"), y = -1 !== J.indexOf("Safari") && -1 === J.indexOf("Chrome") && (-1 === Et || 3 < Number(J.substr(Et + 8, 1))), _ = y && Number(J.substr(J.indexOf("Version/") + 8, 1)) < 6, D = -1 !== J.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(J) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(J)) && (P = parseFloat(RegExp.$1)), !!St && (St.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(St.style.opacity))),
                    et = "",
                    nt = "",
                    it = G.defaultView ? G.defaultView.getComputedStyle : function () { },
                    rt = L.getStyle = function (t, e, n, i, r) {
                        var o;
                        return tt || "opacity" !== e ? (!i && t.style[e] ? o = t.style[e] : (n = n || it(t)) ? o = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(l, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : a(t)
                    },
                    ot = i.convertToPixels = function (t, e, n, i, r) {
                        if ("px" === i || !i) return n;
                        if ("auto" === i || !n) return 0;
                        var o, s, a, l = X.test(e),
                            c = t,
                            u = Q.style,
                            h = n < 0,
                            f = 1 === n;
                        if (h && (n = -n), f && (n *= 100), "%" === i && -1 !== e.indexOf("border")) o = n / 100 * (l ? t.clientWidth : t.clientHeight);
                        else {
                            if (u.cssText = "border:0 solid red;position:" + rt(t, "position") + ";line-height:0;", "%" !== i && c.appendChild && "v" !== i.charAt(0) && "rem" !== i) u[l ? "borderLeftWidth" : "borderTopWidth"] = n + i;
                            else {
                                if (s = (c = t.parentNode || G.body)._gsCache, a = O.ticker.frame, s && l && s.time === a) return s.width * n / 100;
                                u[l ? "width" : "height"] = n + i
                            }
                            c.appendChild(Q), o = parseFloat(Q[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(Q), l && "%" === i && !1 !== L.cacheWidths && ((s = c._gsCache = c._gsCache || {}).time = a, s.width = o / n * 100), 0 !== o || r || (o = ot(t, e, n, i, !0))
                        }
                        return f && (o /= 100), h ? -o : o
                    },
                    st = i.calculateOffset = function (t, e, n) {
                        if ("absolute" !== rt(t, "position", n)) return 0;
                        var i = "left" === e ? "Left" : "Top",
                            n = rt(t, "margin" + i, n);
                        return t["offset" + i] - (ot(t, e, parseFloat(n), n.replace(j, "")) || 0)
                    },
                    at = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    lt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ct = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ut = L.parseColor = function (t, e) {
                        var n, i, r, o, s, a, l, c;
                        if (t)
                            if ("number" == typeof t) n = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) n = ct[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (r = t.charAt(2)) + r + (o = t.charAt(3)) + o), n = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (n = c = t.match(R), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(M)
                                    } else s = Number(n[0]) % 360 / 360, a = Number(n[1]) / 100, i = 2 * (l = Number(n[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < n.length && (n[3] = Number(t[3])), n[0] = u(s + 1 / 3, i, r), n[1] = u(s, i, r), n[2] = u(s - 1 / 3, i, r);
                                else n = t.match(R) || ct.transparent;
                                n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), 3 < n.length && (n[3] = Number(n[3]))
                            }
                        else n = ct.black;
                        return e && !c && (i = n[0] / 255, r = n[1] / 255, o = n[2] / 255, l = ((t = Math.max(i, r, o)) + (e = Math.min(i, r, o))) / 2, t === e ? s = a = 0 : (c = t - e, a = .5 < l ? c / (2 - t - e) : c / (t + e), s = t === i ? (r - o) / c + (r < o ? 6 : 0) : t === r ? (o - i) / c + 2 : (i - r) / c + 4, s *= 60), n[0] = s + .5 | 0, n[1] = 100 * a + .5 | 0, n[2] = 100 * l + .5 | 0), n
                    },
                    ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (t in ct) ht += "|" + t + "\\b";
                ht = new RegExp(ht + ")", "gi"), L.colorStringFilter = function (t) {
                    var e = t[0] + t[1];
                    ht.test(e) && (e = -1 !== e.indexOf("hsl(") || -1 !== e.indexOf("hsla("), t[0] = n(t[0], e), t[1] = n(t[1], e)), ht.lastIndex = 0
                }, O.defaultStringFilter || (O.defaultStringFilter = L.colorStringFilter);

                function ft(t, e, o, s) {
                    if (null == t) return function (t) {
                        return t
                    };
                    var a, l = e ? (t.match(ht) || [""])[0] : "",
                        c = t.split(l).join("").match(x) || [],
                        u = t.substr(0, t.indexOf(c[0])),
                        h = ")" === t.charAt(t.length - 1) ? ")" : "",
                        f = -1 !== t.indexOf(" ") ? " " : ",",
                        p = c.length,
                        d = 0 < p ? c[0].replace(R, "") : "";
                    return p ? a = e ? function (t) {
                        var e, n, i, r;
                        if ("number" == typeof t) t += d;
                        else if (s && Y.test(t)) {
                            for (r = t.replace(Y, "|").split("|"), i = 0; i < r.length; i++) r[i] = a(r[i]);
                            return r.join(",")
                        }
                        if (e = (t.match(ht) || [l])[0], i = (n = t.split(e).join("").match(x) || []).length, p > i--)
                            for (; ++i < p;) n[i] = o ? n[(i - 1) / 2 | 0] : c[i];
                        return u + n.join(f) + f + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function (t) {
                        var e, n, i;
                        if ("number" == typeof t) t += d;
                        else if (s && Y.test(t)) {
                            for (n = t.replace(Y, "|").split("|"), i = 0; i < n.length; i++) n[i] = a(n[i]);
                            return n.join(",")
                        }
                        if (i = (e = t.match(x) || []).length, p > i--)
                            for (; ++i < p;) e[i] = o ? e[(i - 1) / 2 | 0] : c[i];
                        return u + e.join(f) + h
                    } : function (t) {
                        return t
                    }
                }

                function pt(c) {
                    return c = c.split(","),
                        function (t, e, n, i, r, o, s) {
                            var a, l = (e + "").split(" ");
                            for (s = {}, a = 0; a < 4; a++) s[c[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                            return i.parse(t, s, r, o)
                        }
                }

                function dt(t, e, n, i, r, o) {
                    return (o = new vt(t, e, n, i - n, r, -1, o)).b = n, o.e = o.xs0 = i, o
                }
                var mt = (i._setPluginRatio = function (t) {
                    this.plugin.setRatio(t);
                    for (var e, n, i, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), l.t[l.p] = e, l = l._next;
                    if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t || 0 === t)
                        for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                            if ((n = l.t).type) {
                                if (1 === n.type) {
                                    for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                    n[o] = r
                                }
                            } else n[o] = n.s + n.xs0;
                            l = l._next
                        }
                }, function (t, e, n, i, r) {
                    this.t = t, this.p = e, this.v = n, this.r = r, i && ((i._prev = this)._next = i)
                }),
                    vt = (i._parseToProxy = function (t, e, n, i, r, o) {
                        var s, a, l, c, u = i,
                            h = {},
                            f = {},
                            p = n._transform,
                            d = K;
                        for (n._transform = null, K = e, i = r = n.parse(t, e, i, r), K = d, o && (n._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); i && i !== u;) {
                            if (i.type <= 1 && (f[a = i.p] = i.s + i.c, h[a] = i.s, o || (c = new mt(i, "s", a, c, i.r), i.c = 0), 1 === i.type))
                                for (s = i.l; 0 < --s;) l = "xn" + s, f[a = i.p + "_" + l] = i.data[l], h[a] = i[l], o || (c = new mt(i, l, a, c, i.rxp[l]));
                            i = i._next
                        }
                        return {
                            proxy: h,
                            end: f,
                            firstMPT: c,
                            pt: r
                        }
                    }, i.CSSPropTween = function (t, e, n, i, r, o, s, a, l, c, u) {
                        this.t = t, this.p = e, this.s = n, this.c = i, this.n = s || e, t instanceof vt || h.push(this.n), this.r = a, this.type = o || 0, l && (this.pr = l, f = !0), this.b = void 0 === c ? n : c, this.e = void 0 === u ? n + i : u, r && ((this._next = r)._prev = this)
                    }),
                    gt = L.parseComplex = function (t, e, n, i, r, o, s, a, l, c) {
                        s = new vt(t, e, 0, 0, s, c ? 2 : 1, null, !1, a, n = n || o || "", i), i += "", r && ht.test(i + n) && (L.colorStringFilter(i = [n, i]), n = i[0], i = i[1]);
                        var u, h, f, p, d, m, v, g, y, _, x, b, w = n.split(", ").join(",").split(" "),
                            T = i.split(", ").join(",").split(" "),
                            S = w.length,
                            E = !1 !== A;
                        for (-1 === i.indexOf(",") && -1 === n.indexOf(",") || (w = w.join(" ").replace(Y, ", ").split(" "), T = T.join(" ").replace(Y, ", ").split(" "), S = w.length), S !== T.length && (S = (w = (o || "").split(" ")).length), s.plugin = l, s.setRatio = c, u = ht.lastIndex = 0; u < S; u++)
                            if (p = w[u], d = T[u], (g = parseFloat(p)) || 0 === g) s.appendXtra("", g, k(d, g), d.replace(M, ""), E && -1 !== d.indexOf("px"), !0);
                            else if (r && ht.test(p)) x = ")" + ((x = d.indexOf(")") + 1) ? d.substr(x) : ""), b = -1 !== d.indexOf("hsl") && tt, p = ut(p, b), d = ut(d, b), (g = 6 < p.length + d.length) && !tt && 0 === d[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(T[u]).join("transparent")) : (tt || (g = !1), b ? s.appendXtra(g ? "hsla(" : "hsl(", p[0], k(d[0], p[0]), ",", !1, !0).appendXtra("", p[1], k(d[1], p[1]), "%,", !1).appendXtra("", p[2], k(d[2], p[2]), g ? "%," : "%" + x, !1) : s.appendXtra(g ? "rgba(" : "rgb(", p[0], d[0] - p[0], ",", !0, !0).appendXtra("", p[1], d[1] - p[1], ",", !0).appendXtra("", p[2], d[2] - p[2], g ? "," : x, !0), g && (p = p.length < 4 ? 1 : p[3], s.appendXtra("", p, (d.length < 4 ? 1 : d[3]) - p, x, !1))), ht.lastIndex = 0;
                            else if (m = p.match(R)) {
                                if (!(v = d.match(M)) || v.length !== m.length) return s;
                                for (h = f = 0; h < m.length; h++) _ = m[h], y = p.indexOf(_, f), s.appendXtra(p.substr(f, y - f), Number(_), k(v[h], _), "", E && "px" === p.substr(y + _.length, 2), 0 === h), f = y + _.length;
                                s["xs" + s.l] += p.substr(f)
                            } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + d : d;
                        if (-1 !== i.indexOf("=") && s.data) {
                            for (x = s.xs0 + s.data.s, u = 1; u < s.l; u++) x += s["xs" + u] + s.data["xn" + u];
                            s.e = x + s["xs" + u]
                        }
                        return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                    },
                    yt = 9;
                for ((t = vt.prototype).l = t.pr = 0; 0 < --yt;) t["xn" + yt] = 0, t["xs" + yt] = "";
                t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function (t, e, n, i, r, o) {
                    var s = this,
                        a = s.l;
                    return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", 0 < a ? (s.data["xn" + a] = e + n, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new vt(s, "xn" + a, e, n, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0)) : (s.data = {
                        s: e + n
                    }, s.rxp = {}, s.s = e, s.c = n, s.r = r)) : s["xs" + a] += e + (i || ""), s
                };

                function _t(t, e) {
                    e = e || {}, this.p = e.prefix && T(t) || t, (p[t] = p[this.p] = this).format = e.formatter || ft(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                }
                var xt = i._registerComplexSpecialProp = function (t, e, n) {
                    "object" != $t(e) && (e = {
                        parser: n
                    });
                    var i, r = t.split(","),
                        o = e.defaultValue;
                    for (n = n || [o], i = 0; i < r.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || o, new _t(r[i], e)
                };
                (t = _t.prototype).parseComplex = function (t, e, n, i, r, o) {
                    var s, a, l, c, u, h, f = this.keyword;
                    if (this.multi && (Y.test(n) || Y.test(e) ? (a = e.replace(Y, "|").split("|"), l = n.replace(Y, "|").split("|")) : f && (a = [e], l = [n])), l) {
                        for (c = (l.length > a.length ? l : a).length, s = 0; s < c; s++) e = a[s] = a[s] || this.dflt, n = l[s] = l[s] || this.dflt, f && ((u = e.indexOf(f)) !== (h = n.indexOf(f)) && (-1 === h ? a[s] = a[s].split(f).join("") : -1 === u && (a[s] += " " + f)));
                        e = a.join(", "), n = l.join(", ")
                    }
                    return gt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, o)
                }, t.parse = function (t, e, n, i, r, o, s) {
                    return this.parseComplex(t.style, this.format(rt(t, this.p, w, !1, this.dflt)), this.format(e), r, o)
                }, L.registerSpecialProp = function (t, s, a) {
                    xt(t, {
                        parser: function (t, e, n, i, r, o) {
                            r = new vt(t, n, 0, 0, r, 2, n, !1, a);
                            return r.plugin = o, r.setRatio = s(t, e, i._tween, n), r
                        },
                        priority: a
                    })
                }, L.useSVGTransformAttr = y || D;

                function bt(t, e, n, i, r, o) {
                    var s, a, l, c, u, h, f, p, d, m = t._gsTransform,
                        v = It(t, !0);
                    m && (p = m.xOrigin, d = m.yOrigin), (!i || (s = i.split(" ")).length < 2) && (u = t.getBBox(), s = [(-1 !== (e = S(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * u.width : parseFloat(e[0])) + u.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * u.height : parseFloat(e[1])) + u.y]), n.xOrigin = a = parseFloat(s[0]), n.yOrigin = l = parseFloat(s[1]), i && v !== jt && (c = v[0], u = v[1], e = v[2], h = v[3], i = v[4], h = a * (h / (f = c * h - u * e)) + l * (-e / f) + (e * (e = v[5]) - h * i) / f, f = a * (-u / f) + l * (c / f) - (c * e - u * i) / f, a = n.xOrigin = s[0] = h, l = n.yOrigin = s[1] = f), m && (o && (n.xOffset = m.xOffset, n.yOffset = m.yOffset, m = n), r || !1 !== r && !1 !== L.defaultSmoothOrigin ? (h = a - p, f = l - d, m.xOffset += h * v[0] + f * v[2] - h, m.yOffset += h * v[1] + f * v[3] - f) : m.xOffset = m.yOffset = 0), o || t.setAttribute("data-svg-origin", s.join(" "))
                }

                function wt(t) {
                    var e, n, i = this.data,
                        r = (m = -i.rotation * U) + i.skewX * U,
                        o = (Math.cos(m) * i.scaleX * 1e5 | 0) / 1e5,
                        s = (Math.sin(m) * i.scaleX * 1e5 | 0) / 1e5,
                        a = (Math.sin(r) * -i.scaleY * 1e5 | 0) / 1e5,
                        l = (Math.cos(r) * i.scaleY * 1e5 | 0) / 1e5,
                        c = this.t.style,
                        u = this.t.currentStyle;
                    if (u) {
                        n = s, s = -a, a = -n, e = u.filter, c.filter = "";
                        var h = this.t.offsetWidth,
                            f = this.t.offsetHeight,
                            p = "absolute" !== u.position,
                            d = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + s + ", M21=" + a + ", M22=" + l,
                            m = i.x + h * i.xPercent / 100,
                            r = i.y + f * i.yPercent / 100;
                        if (null != i.ox && (m += (_ = (i.oxp ? h * i.ox * .01 : i.ox) - h / 2) - (_ * o + (x = (i.oyp ? f * i.oy * .01 : i.oy) - f / 2) * s), r += x - (_ * a + x * l)), p ? d += ", Dx=" + ((_ = h / 2) - (_ * o + (x = f / 2) * s) + m) + ", Dy=" + (x - (_ * a + x * l) + r) + ")" : d += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(W, d) : c.filter = d + " " + e, 0 !== t && 1 !== t || 1 != o || 0 != s || 0 != a || 1 != l || (p && -1 === d.indexOf("Dx=0, Dy=0") || I.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !p) {
                            var v, g, y = P < 8 ? 1 : -1,
                                _ = i.ieOffsetX || 0,
                                x = i.ieOffsetY || 0;
                            for (i.ieOffsetX = Math.round((h - ((o < 0 ? -o : o) * h + (s < 0 ? -s : s) * f)) / 2 + m), i.ieOffsetY = Math.round((f - ((l < 0 ? -l : l) * f + (a < 0 ? -a : a) * h)) / 2 + r), yt = 0; yt < 4; yt++) g = (n = -1 !== (g = u[v = lt[yt]]).indexOf("px") ? parseFloat(g) : ot(this.t, v, parseFloat(g), g.replace(j, "")) || 0) !== i[v] ? yt < 2 ? -i.ieOffsetX : -i.ieOffsetY : yt < 2 ? _ - i.ieOffsetX : x - i.ieOffsetY, c[v] = (i[v] = Math.round(n - g * (0 === yt || 2 === yt ? 1 : y))) + "px"
                        }
                    }
                }
                var Tt, St, Et, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ct = T("transform"),
                    At = et + "transform",
                    Pt = T("transformOrigin"),
                    Ot = null !== T("perspective"),
                    Lt = i.Transform = function () {
                        this.perspective = parseFloat(L.defaultTransformPerspective) || 0, this.force3D = !(!1 === L.defaultForce3D || !Ot) && (L.defaultForce3D || "auto")
                    },
                    Dt = window.SVGElement,
                    e = function (t, e, n) {
                        var i, r = G.createElementNS("http://www.w3.org/2000/svg", t),
                            o = /([a-z])([A-Z])/g;
                        for (i in n) r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
                        return e.appendChild(r), r
                    },
                    Rt = G.documentElement,
                    Mt = (Et = P || /Android/i.test(J) && !window.chrome, G.createElementNS && !Et && (St = e("svg", Rt), e = (J = e("rect", St, {
                        width: 100,
                        height: 50,
                        x: 100
                    })).getBoundingClientRect().width, J.style[Pt] = "50% 50%", J.style[Ct] = "scaleX(0.5)", Et = e === J.getBoundingClientRect().width && !(D && Ot), Rt.removeChild(St)), Et),
                    Nt = function (t) {
                        return !!(Dt && t.getBBox && t.getCTM && function (t) {
                            try {
                                return t.getBBox()
                            } catch (t) { }
                        }(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    jt = [1, 0, 0, 1, 0, 0],
                    It = function (t, e) {
                        var n, i, r, o, s, a, l = t._gsTransform || new Lt,
                            c = t.style;
                        if (Ct ? i = rt(t, At, null, !0) : t.currentStyle && (i = (i = t.currentStyle.filter.match(F)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), (n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i) && Ct && ((a = "none" === it(t).display) || !t.parentNode) && (a && (o = c.display, c.display = "block"), t.parentNode || (s = 1, Rt.appendChild(t)), n = !(i = rt(t, At, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, o ? c.display = o : a && Xt(c, "display"), s && Rt.removeChild(t)), (l.svg || t.getBBox && Nt(t)) && (n && -1 !== (c[Ct] + "").indexOf("matrix") && (i = c[Ct], n = 0), r = t.getAttribute("transform"), n && r && (-1 !== r.indexOf("matrix") ? (i = r, n = 0) : -1 !== r.indexOf("translate") && (i = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", n = 0))), n) return jt;
                        for (r = (i || "").match(R) || [], yt = r.length; - 1 < --yt;) o = Number(r[yt]), r[yt] = (s = o - (o |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                        return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Ht = i.getTransform = function (t, e, n, i) {
                        if (t._gsTransform && n && !i) return t._gsTransform;
                        var r, o, s, a, l, c, u, h, f, p, d, m, v, g, y, _, x, b, w, T, S, E, k = n && t._gsTransform || new Lt,
                            C = k.scaleX < 0,
                            A = Ot && (parseFloat(rt(t, Pt, e, !1, "0 0 0").split(" ")[2]) || k.zOrigin) || 0,
                            P = parseFloat(L.defaultTransformPerspective) || 0;
                        if (k.svg = !(!t.getBBox || !Nt(t)), k.svg && (bt(t, rt(t, Pt, e, !1, "50% 50%") + "", k, t.getAttribute("data-svg-origin")), Tt = L.useSVGTransformAttr || Mt), o = It(t), o !== jt)
                            for (r in 16 === o.length ? (T = o[0], E = o[1], h = o[2], f = o[3], S = o[4], p = o[5], d = o[6], m = o[7], v = o[8], g = o[9], y = o[10], _ = o[12], b = o[13], w = o[14], x = o[11], e = Math.atan2(d, y), k.zOrigin && (_ = v * (w = -k.zOrigin) - o[12], b = g * w - o[13], w = y * w + k.zOrigin - o[14]), k.rotationX = e * V, e && (s = S * (c = Math.cos(-e)) + v * (u = Math.sin(-e)), a = p * c + g * u, l = d * c + y * u, v = S * -u + v * c, g = p * -u + g * c, y = d * -u + y * c, x = m * -u + x * c, S = s, p = a, d = l), e = Math.atan2(-h, y), k.rotationY = e * V, e && (a = E * (c = Math.cos(-e)) - g * (u = Math.sin(-e)), l = h * c - y * u, g = E * u + g * c, y = h * u + y * c, x = f * u + x * c, T = s = T * c - v * u, E = a, h = l), e = Math.atan2(E, T), k.rotation = e * V, e && (T = T * (c = Math.cos(-e)) + S * (u = Math.sin(-e)), a = E * c + p * u, p = E * -u + p * c, d = h * -u + d * c, E = a), k.rotationX && 359.9 < Math.abs(k.rotationX) + Math.abs(k.rotation) && (k.rotationX = k.rotation = 0, k.rotationY = 180 - k.rotationY), k.scaleX = (1e5 * Math.sqrt(T * T + E * E) + .5 | 0) / 1e5, k.scaleY = (1e5 * Math.sqrt(p * p + g * g) + .5 | 0) / 1e5, k.scaleZ = (1e5 * Math.sqrt(d * d + y * y) + .5 | 0) / 1e5, k.rotationX || k.rotationY ? k.skewX = 0 : (k.skewX = S || p ? Math.atan2(S, p) * V + k.rotation : k.skewX || 0, 90 < Math.abs(k.skewX) && Math.abs(k.skewX) < 270 && (C ? (k.scaleX *= -1, k.skewX += k.rotation <= 0 ? 180 : -180, k.rotation += k.rotation <= 0 ? 180 : -180) : (k.scaleY *= -1, k.skewX += k.skewX <= 0 ? 180 : -180))), k.perspective = x ? 1 / (x < 0 ? -x : x) : 0, k.x = _, k.y = b, k.z = w, k.svg && (k.x -= k.xOrigin - (k.xOrigin * T - k.yOrigin * S), k.y -= k.yOrigin - (k.yOrigin * E - k.xOrigin * p))) : Ot && !i && o.length && k.x === o[4] && k.y === o[5] && (k.rotationX || k.rotationY) || (w = (b = 6 <= o.length) ? o[0] : 1, T = o[1] || 0, S = o[2] || 0, E = b ? o[3] : 1, k.x = o[4] || 0, k.y = o[5] || 0, p = Math.sqrt(w * w + T * T), i = Math.sqrt(E * E + S * S), b = w || T ? Math.atan2(T, w) * V : k.rotation || 0, o = S || E ? Math.atan2(S, E) * V + b : k.skewX || 0, 90 < Math.abs(o) && Math.abs(o) < 270 && (C ? (p *= -1, o += b <= 0 ? 180 : -180, b += b <= 0 ? 180 : -180) : (i *= -1, o += o <= 0 ? 180 : -180)), k.scaleX = p, k.scaleY = i, k.rotation = b, k.skewX = o, Ot && (k.rotationX = k.rotationY = k.z = 0, k.perspective = P, k.scaleZ = 1), k.svg && (k.x -= k.xOrigin - (k.xOrigin * w + k.yOrigin * S), k.y -= k.yOrigin - (k.xOrigin * T + k.yOrigin * E))), k.zOrigin = A, k) k[r] < 2e-5 && -2e-5 < k[r] && (k[r] = 0);
                        return n && ((t._gsTransform = k).svg && (Tt && t.style[Ct] ? O.delayedCall(.001, function () {
                            Xt(t.style, Ct)
                        }) : !Tt && t.getAttribute("transform") && O.delayedCall(.001, function () {
                            t.removeAttribute("transform")
                        }))), k
                    },
                    Bt = i.set3DTransformRatio = i.setTransformRatio = function (t) {
                        var e, n, i, r, o, s, a, l, c, u, h, f, p, d, m, v, g = this.data,
                            y = this.t.style,
                            _ = g.rotation,
                            x = g.rotationX,
                            b = g.rotationY,
                            w = g.scaleX,
                            T = g.scaleY,
                            S = g.scaleZ,
                            E = g.x,
                            k = g.y,
                            C = g.z,
                            A = g.svg,
                            P = g.perspective,
                            O = g.force3D;
                        if (!((1 !== t && 0 !== t || "auto" !== O || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && O || C || P || b || x || 1 !== S) || Tt && A || !Ot) _ || g.skewX || A ? (_ *= U, v = g.skewX * U, e = Math.cos(_) * w, i = Math.sin(_) * w, n = Math.sin(_ - v) * -T, r = Math.cos(_ - v) * T, v && "simple" === g.skewType && (d = Math.tan(v), n *= d = Math.sqrt(1 + d * d), r *= d, g.skewY && (e *= d, i *= d)), A && (E += g.xOrigin - (g.xOrigin * e + g.yOrigin * n) + g.xOffset, k += g.yOrigin - (g.xOrigin * i + g.yOrigin * r) + g.yOffset, Tt && (g.xPercent || g.yPercent) && (h = this.t.getBBox(), E += .01 * g.xPercent * h.width, k += .01 * g.yPercent * h.height), E < (h = 1e-6) && -h < E && (E = 0), k < h && -h < k && (k = 0)), m = (1e5 * e | 0) / 1e5 + "," + (1e5 * i | 0) / 1e5 + "," + (1e5 * n | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + E + "," + k + ")", A && Tt ? this.t.setAttribute("transform", "matrix(" + m) : y[Ct] = (g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) matrix(" : "matrix(") + m) : y[Ct] = (g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) matrix(" : "matrix(") + w + ",0,0," + T + "," + E + "," + k + ")";
                        else {
                            if (D && (w < (h = 1e-4) && -h < w && (w = S = 2e-5), T < h && -h < T && (T = S = 2e-5), !P || g.z || g.rotationX || g.rotationY || (P = 0)), _ || g.skewX) _ *= U, f = e = Math.cos(_), p = i = Math.sin(_), g.skewX && (_ -= g.skewX * U, f = Math.cos(_), p = Math.sin(_), "simple" === g.skewType && (d = Math.tan(g.skewX * U), f *= d = Math.sqrt(1 + d * d), p *= d, g.skewY && (e *= d, i *= d))), n = -p, r = f;
                            else {
                                if (!(b || x || 1 !== S || P || A)) return void (y[Ct] = (g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + k + "px," + C + "px)" + (1 !== w || 1 !== T ? " scale(" + w + "," + T + ")" : ""));
                                e = r = 1, n = i = 0
                            }
                            l = 1, t = o = s = a = c = u = 0, O = P ? -1 / P : 0, v = g.zOrigin, h = 1e-6, (_ = b * U) && (f = Math.cos(_), c = O * (s = -(p = Math.sin(_))), t = e * p, o = i * p, O *= l = f, e *= f, i *= f), (_ = x * U) && (d = n * (f = Math.cos(_)) + t * (p = Math.sin(_)), _ = r * f + o * p, a = l * p, u = O * p, t = n * -p + t * f, o = r * -p + o * f, l *= f, O *= f, n = d, r = _), 1 !== S && (t *= S, o *= S, l *= S, O *= S), 1 !== T && (n *= T, r *= T, a *= T, u *= T), 1 !== w && (e *= w, i *= w, s *= w, c *= w), (v || A) && (v && (E += t * -v, k += o * -v, C += l * -v + v), A && (E += g.xOrigin - (g.xOrigin * e + g.yOrigin * n) + g.xOffset, k += g.yOrigin - (g.xOrigin * i + g.yOrigin * r) + g.yOffset), E < h && -h < E && (E = "0"), k < h && -h < k && (k = "0"), C < h && -h < C && (C = 0)), m = g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) matrix3d(" : "matrix3d(", m += (e < h && -h < e ? "0" : e) + "," + (i < h && -h < i ? "0" : i) + "," + (s < h && -h < s ? "0" : s), m += "," + (c < h && -h < c ? "0" : c) + "," + (n < h && -h < n ? "0" : n) + "," + (r < h && -h < r ? "0" : r), x || b || 1 !== S ? (m += "," + (a < h && -h < a ? "0" : a) + "," + (u < h && -h < u ? "0" : u) + "," + (t < h && -h < t ? "0" : t), m += "," + (o < h && -h < o ? "0" : o) + "," + (l < h && -h < l ? "0" : l) + "," + (O < h && -h < O ? "0" : O) + ",") : m += ",0,0,0,0,1,0,", m += E + "," + k + "," + C + "," + (P ? 1 + -C / P : 1) + ")", y[Ct] = m
                        }
                    };
                (t = Lt.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, xt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function (t, e, n, i, r, o, s) {
                        if (i._lastParsedTransform === s) return r;
                        i._lastParsedTransform = s;
                        var a, l, c, u, h, f, p, d, m = t._gsTransform,
                            v = t.style,
                            g = kt.length,
                            y = s,
                            _ = {},
                            x = "transformOrigin",
                            b = Ht(t, w, !0, s.parseTransform);
                        if (i._transform = b, "string" == typeof y.transform && Ct) (l = Q.style)[Ct] = y.transform, l.display = "block", l.position = "absolute", G.body.appendChild(Q), a = Ht(Q, null, !1), b.svg && (f = b.xOrigin, p = b.yOrigin, a.x -= b.xOffset, a.y -= b.yOffset, (y.transformOrigin || y.svgOrigin) && (c = {}, bt(t, S(y.transformOrigin), c, y.svgOrigin, y.smoothOrigin, !0), f = c.xOrigin, p = c.yOrigin, a.x -= c.xOffset - b.xOffset, a.y -= c.yOffset - b.yOffset), (f || p) && (d = It(Q, !0), a.x -= f - (f * d[0] + p * d[2]), a.y -= p - (f * d[1] + p * d[3]))), G.body.removeChild(Q), a.perspective || (a.perspective = b.perspective), null != y.xPercent && (a.xPercent = E(y.xPercent, b.xPercent)), null != y.yPercent && (a.yPercent = E(y.yPercent, b.yPercent));
                        else if ("object" == $t(y)) {
                            if (a = {
                                scaleX: E(null != y.scaleX ? y.scaleX : y.scale, b.scaleX),
                                scaleY: E(null != y.scaleY ? y.scaleY : y.scale, b.scaleY),
                                scaleZ: E(y.scaleZ, b.scaleZ),
                                x: E(y.x, b.x),
                                y: E(y.y, b.y),
                                z: E(y.z, b.z),
                                xPercent: E(y.xPercent, b.xPercent),
                                yPercent: E(y.yPercent, b.yPercent),
                                perspective: E(y.transformPerspective, b.perspective)
                            }, null != (h = y.directionalRotation))
                                if ("object" == $t(h))
                                    for (l in h) y[l] = h[l];
                                else y.rotation = h;
                            "string" == typeof y.x && -1 !== y.x.indexOf("%") && (a.x = 0, a.xPercent = E(y.x, b.xPercent)), "string" == typeof y.y && -1 !== y.y.indexOf("%") && (a.y = 0, a.yPercent = E(y.y, b.yPercent)), a.rotation = C("rotation" in y ? y.rotation : "shortRotation" in y ? y.shortRotation + "_short" : "rotationZ" in y ? y.rotationZ : b.rotation - b.skewY, b.rotation - b.skewY, "rotation", _), Ot && (a.rotationX = C("rotationX" in y ? y.rotationX : "shortRotationX" in y ? y.shortRotationX + "_short" : b.rotationX || 0, b.rotationX, "rotationX", _), a.rotationY = C("rotationY" in y ? y.rotationY : "shortRotationY" in y ? y.shortRotationY + "_short" : b.rotationY || 0, b.rotationY, "rotationY", _)), a.skewX = C(y.skewX, b.skewX - b.skewY), (a.skewY = C(y.skewY, b.skewY)) && (a.skewX += a.skewY, a.rotation += a.skewY)
                        }
                        for (Ot && null != y.force3D && (b.force3D = y.force3D, u = !0), b.skewType = y.skewType || b.skewType || L.defaultSkewType, (d = b.force3D || b.z || b.rotationX || b.rotationY || a.z || a.rotationX || a.rotationY || a.perspective) || null == y.scale || (a.scaleZ = 1); - 1 < --g;)(1e-6 < (c = a[n = kt[g]] - b[n]) || c < -1e-6 || null != y[n] || null != K[n]) && (u = !0, r = new vt(b, n, b[n], c, r), n in _ && (r.e = _[n]), r.xs0 = 0, r.plugin = o, i._overwriteProps.push(r.n));
                        return c = y.transformOrigin, b.svg && (c || y.svgOrigin) && (f = b.xOffset, p = b.yOffset, bt(t, S(c), a, y.svgOrigin, y.smoothOrigin), r = dt(b, "xOrigin", (m ? b : a).xOrigin, a.xOrigin, r, x), r = dt(b, "yOrigin", (m ? b : a).yOrigin, a.yOrigin, r, x), f === b.xOffset && p === b.yOffset || (r = dt(b, "xOffset", m ? f : b.xOffset, b.xOffset, r, x), r = dt(b, "yOffset", m ? p : b.yOffset, b.yOffset, r, x)), c = Tt ? null : "0px 0px"), (c || Ot && d && b.zOrigin) && (Ct ? (u = !0, n = Pt, c = (c || rt(t, n, w, !1, "50% 50%")) + "", (r = new vt(v, n, 0, 0, r, -1, x)).b = v[n], r.plugin = o, Ot ? (l = b.zOrigin, c = c.split(" "), b.zOrigin = (2 < c.length && (0 === l || "0px" !== c[2]) ? parseFloat(c[2]) : l) || 0, r.xs0 = r.e = c[0] + " " + (c[1] || "50%") + " 0px", (r = new vt(b, "zOrigin", 0, 0, r, -1, r.n)).b = l, r.xs0 = r.e = b.zOrigin) : r.xs0 = r.e = c) : S(c + "", b)), u && (i._transformType = b.svg && Tt || !d && 3 !== this._transformType ? 2 : 3), r
                    },
                    prefix: !0
                }), xt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), xt("borderRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, n, i, r) {
                        e = this.format(e);
                        for (var o, s, a, l, c, u, h, f, p, d, m = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], v = t.style, g = parseFloat(t.offsetWidth), y = parseFloat(t.offsetHeight), _ = e.split(" "), x = 0; x < m.length; x++) this.p.indexOf("border") && (m[x] = T(m[x])), -1 !== (a = s = rt(t, m[x], w, !1, "0px")).indexOf(" ") && (a = (s = a.split(" "))[0], s = s[1]), l = o = _[x], p = parseFloat(a), d = a.substr((p + "").length), "" === (u = (h = "=" === l.charAt(1)) ? (c = parseInt(l.charAt(0) + "1", 10), l = l.substr(2), c *= parseFloat(l), l.substr((c + "").length - (c < 0 ? 1 : 0)) || "") : (c = parseFloat(l), l.substr((c + "").length))) && (u = b[n] || d), u !== d && (f = ot(t, "borderLeft", p, d), p = ot(t, "borderTop", p, d), s = "%" === u ? (a = f / g * 100 + "%", p / y * 100 + "%") : "em" === u ? (a = f / (d = ot(t, "borderLeft", 1, "em")) + "em", p / d + "em") : (a = f + "px", p + "px"), h && (l = parseFloat(a) + c + u, o = parseFloat(s) + c + u)), r = gt(v, m[x], a + " " + s, l + " " + o, !1, "0px", r);
                        return r
                    },
                    prefix: !0,
                    formatter: ft("0px 0px 0px 0px", !1, !0)
                }), xt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, n, i, r) {
                        return gt(t.style, n, this.format(rt(t, n, w, !1, "0px 0px")), this.format(e), !1, "0px", r)
                    },
                    prefix: !0,
                    formatter: ft("0px 0px", !1, !0)
                }), xt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (t, e, n, i, r, o) {
                        var s, a, l, c, u, h, f = "background-position",
                            p = w || it(t, null),
                            d = this.format((p ? P ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            e = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== e.indexOf("%")) && e.split(",").length < 2 && ((h = rt(t, "backgroundImage").replace(q, "")) && "none" !== h)) {
                            for (s = d.split(" "), a = e.split(" "), Z.setAttribute("src", h), l = 2; - 1 < --l;)(c = -1 !== (d = s[l]).indexOf("%")) != (-1 !== a[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - Z.width : t.offsetHeight - Z.height, s[l] = c ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                            d = s.join(" ")
                        }
                        return this.parseComplex(t.style, d, e, r, o)
                    },
                    formatter: S
                }), xt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: S
                }), xt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), xt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), xt("transformStyle", {
                    prefix: !0
                }), xt("backfaceVisibility", {
                    prefix: !0
                }), xt("userSelect", {
                    prefix: !0
                }), xt("margin", {
                    parser: pt("marginTop,marginRight,marginBottom,marginLeft")
                }), xt("padding", {
                    parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), xt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (t, e, n, i, r, o) {
                        var s, a;
                        return e = P < 9 ? (s = t.currentStyle, a = P < 8 ? " " : ",", s = "rect(" + s.clipTop + a + s.clipRight + a + s.clipBottom + a + s.clipLeft + ")", this.format(e).split(",").join(a)) : (s = this.format(rt(t, this.p, w, !1, this.dflt)), this.format(e)), this.parseComplex(t.style, s, e, r, o)
                    }
                }), xt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), xt("autoRound,strictUnits", {
                    parser: function (t, e, n, i, r) {
                        return r
                    }
                }), xt("border", {
                    defaultValue: "0px solid #000",
                    parser: function (t, e, n, i, r, o) {
                        var s = rt(t, "borderTopWidth", w, !1, "0px"),
                            a = this.format(e).split(" "),
                            e = a[0].replace(j, "");
                        return "px" !== e && (s = parseFloat(s) / ot(t, "borderTopWidth", 1, e) + e), this.parseComplex(t.style, this.format(s + " " + rt(t, "borderTopStyle", w, !1, "solid") + " " + rt(t, "borderTopColor", w, !1, "#000")), a.join(" "), r, o)
                    },
                    color: !0,
                    formatter: function (t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
                    }
                }), xt("borderWidth", {
                    parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), xt("float,cssFloat,styleFloat", {
                    parser: function (t, e, n, i, r) {
                        var o = t.style,
                            t = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new vt(o, t, 0, 0, r, -1, n, !1, 0, o[t], e)
                    }
                });

                function zt(t) {
                    var e, n = this.t,
                        i = n.filter || rt(this.data, "filter") || "";
                    100 == (t = this.s + this.c * t | 0) && (e = -1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), !rt(this.data, "filter")) : (n.filter = i.replace(r, ""), !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + t + ")"), -1 === i.indexOf("pacity") ? 0 == t && this.xn1 || (n.filter = i + " alpha(opacity=" + t + ")") : n.filter = i.replace(I, "opacity=" + t))
                }
                xt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, n, i, r, o) {
                        var s = parseFloat(rt(t, "opacity", w, !1, "1")),
                            a = t.style,
                            l = "autoAlpha" === n;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), l && 1 === s && "hidden" === rt(t, "visibility", w) && 0 !== e && (s = 0), tt ? r = new vt(a, "opacity", s, e - s, r) : ((r = new vt(a, "opacity", 100 * s, 100 * (e - s), r)).xn1 = l ? 1 : 0, a.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = zt), l && ((r = new vt(a, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", i._overwriteProps.push(r.n), i._overwriteProps.push(n)), r
                    }
                });

                function qt(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : Xt(n, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                }
                var Xt = function (t, e) {
                    e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(l, "-$1").toLowerCase())) : t.removeAttribute(e))
                };
                xt("className", {
                    parser: function (t, e, n, i, r, o, s) {
                        var a, l, c, u = t.getAttribute("class") || "",
                            h = t.style.cssText;
                        if ((r = i._classNamePT = new vt(t, n, 0, 0, r, 2)).setRatio = qt, r.pr = -11, f = !0, r.b = u, a = m(t, w), n = t._gsClassPT) {
                            for (l = {}, c = n.data; c;) l[c.p] = 1, c = c._next;
                            n.setRatio(1)
                        }
                        return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : u.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), s = v(t, a, m(t), s, l), t.setAttribute("class", u), r.data = s.firstMPT, t.style.cssText = h, r.xfirst = i.parse(t, s.difs, r, o)
                    }
                });

                function Ft(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, n, i, r, o = this.t.style,
                            s = p.transform.parse;
                        if ("all" === this.e) r = !(o.cssText = "");
                        else
                            for (i = (e = this.e.split(" ").join("").split(",")).length; - 1 < --i;) n = e[i], p[n] && (p[n].parse === s ? r = !0 : n = "transformOrigin" === n ? Pt : p[n].p), Xt(o, n);
                        r && (Xt(o, Ct), (t = this.t._gsTransform) && (t.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                }
                for (xt("clearProps", {
                    parser: function (t, e, n, i, r) {
                        return (r = new vt(t, n, 0, 0, r, 2)).setRatio = Ft, r.e = e, r.pr = -10, r.data = i._tween, f = !0, r
                    }
                }), t = "bezier,throwProps,physicsProps,physics2D".split(","), yt = t.length; yt--;) ! function (t) {
                    var l;
                    p[t] || (l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin", xt(t, {
                        parser: function (t, e, n, i, r, o, s) {
                            var a = c.com.greensock.plugins[l];
                            return a ? (a._cssRegister(), p[n].parse(t, e, n, i, r, o, s)) : (d("Error: " + l + " js file not loaded."), r)
                        }
                    }))
                }(t[yt]);
                (t = L.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function (t, e, n) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = n, this._vars = e, A = e.autoRound, f = !1, b = e.suffixMap || L.suffixMap, w = it(t, ""), h = this._overwriteProps;
                    var i, r, o, s, a, l, c = t.style;
                    if (g && "" === c.zIndex && ("auto" !== (l = rt(t, "zIndex", w)) && "" !== l || this._addLazySet(c, "zIndex", 0)), "string" == typeof e && (o = c.cssText, l = m(t, w), c.cssText = o + ";" + e, l = v(t, l, m(t)).difs, !tt && H.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, c.cssText = o), e.className ? this._firstPT = i = p.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = i = this.parse(t, e, null), this._transformType) {
                        for (l = 3 === this._transformType, Ct ? y && (g = !0, "" === c.zIndex && ("auto" !== (e = rt(t, "zIndex", w)) && "" !== e || this._addLazySet(c, "zIndex", 0)), _ && this._addLazySet(c, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (l ? "visible" : "hidden"))) : c.zoom = 1, r = i; r && r._next;) r = r._next;
                        c = new vt(t, "transform", 0, 0, null, 2), this._linkCSSP(c, null, r), c.setRatio = Ct ? Bt : wt, c.data = this._transform || Ht(t, w, !0), c.tween = n, c.pr = -1, h.pop()
                    }
                    if (f) {
                        for (; i;) {
                            for (a = i._next, r = o; r && r.pr > i.pr;) r = r._next;
                            (i._prev = r ? r._prev : s) ? i._prev._next = i : o = i, (i._next = r) ? r._prev = i : s = i, i = a
                        }
                        this._firstPT = o
                    }
                    return !0
                }, t.parse = function (t, e, n, i) {
                    var r, o, s, a, l, c, u, h, f = t.style;
                    for (r in e) l = e[r], (h = p[r]) ? n = h.parse(t, l, r, this, n, i, e) : (a = rt(t, r, w) + "", u = "string" == typeof l, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || u && B.test(l) ? (u || (l = (3 < (l = ut(l)).length ? "rgba(" : "rgb(") + l.join(",") + ")"), n = gt(f, r, a, l, !0, "transparent", n, 0, i)) : u && $.test(l) ? n = gt(f, r, a, l, !0, null, n, 0, i) : (c = (o = parseFloat(a)) || 0 === o ? a.substr((o + "").length) : "", "" !== a && "auto" !== a || (c = "width" === r || "height" === r ? (o = function (t, e, n) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (n || it(t))[e] || 0;
                        if (t.getBBox && Nt(t)) return t.getBBox()[e] || 0;
                        var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = at[e],
                            o = r.length;
                        for (n = n || it(t, null); - 1 < --o;) i -= parseFloat(rt(t, "padding" + r[o], n, !0)) || 0, i -= parseFloat(rt(t, "border" + r[o] + "Width", n, !0)) || 0;
                        return i
                    }(t, r, w), "px") : "left" === r || "top" === r ? (o = st(t, r, w), "px") : (o = "opacity" !== r ? 0 : 1, "")), "" === (u = (h = u && "=" === l.charAt(1)) ? (s = parseInt(l.charAt(0) + "1", 10), l = l.substr(2), s *= parseFloat(l), l.replace(j, "")) : (s = parseFloat(l), u ? l.replace(j, "") : "")) && (u = r in b ? b[r] : c), l = s || 0 === s ? (h ? s + o : s) + u : e[r], c !== u && "" !== u && (s || 0 === s) && o && (o = ot(t, r, o, c), "%" === u ? (o /= ot(t, r, 100, "%") / 100, !0 !== e.strictUnits && (a = o + "%")) : "em" === u || "rem" === u || "vw" === u || "vh" === u ? o /= ot(t, r, 1, u) : "px" !== u && (s = ot(t, r, s, u), u = "px"), h && (s || 0 === s) && (l = s + o + u)), h && (s += o), !o && 0 !== o || !s && 0 !== s ? void 0 !== f[r] && (l || l + "" != "NaN" && null != l) ? (n = new vt(f, r, s || o || 0, 0, n, -1, r, !1, 0, a, l)).xs0 = "none" !== l || "display" !== r && -1 === r.indexOf("Style") ? l : a : d("invalid " + r + " tween value: " + e[r]) : (n = new vt(f, r, o, s - o, n, 0, r, !1 !== A && ("px" === u || "zIndex" === r), 0, a, l)).xs0 = u)), i && n && !n.plugin && (n.plugin = i);
                    return n
                }, t.setRatio = function (t) {
                    var e, n, i, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (i = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                        else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                        else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                        else {
                                            for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                            r.t[r.p] = n
                                        } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (i = r.l, n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                            r.t[r.p] = n
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
                }, t._enableTransforms = function (t) {
                    this._transform = this._transform || Ht(this._target, w, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3
                };

                function Wt() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                }
                t._addLazySet = function (t, e, n) {
                    e = this._firstPT = new vt(t, e, 0, 0, this._firstPT, 2);
                    e.e = n, e.setRatio = Wt, e.data = this
                }, t._linkCSSP = function (t, e, n, i) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
                }, t._kill = function (t) {
                    var e, n, i, r = t;
                    if (t.autoAlpha || t.alpha) {
                        for (n in r = {}, t) r[n] = t[n];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    return t.className && (e = this._classNamePT) && ((i = e.xfirst) && i._prev ? this._linkCSSP(i._prev, e._next, i._prev._prev) : i === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, i._prev), this._classNamePT = null), o.prototype._kill.call(this, r)
                };

                function Yt(t, e, n) {
                    var i, r, o, s;
                    if (t.slice)
                        for (r = t.length; - 1 < --r;) Yt(t[r], e, n);
                    else
                        for (r = (i = t.childNodes).length; - 1 < --r;) s = (o = i[r]).type, o.style && (e.push(m(o)), n && n.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Yt(o, e, n)
                }
                return L.cascadeTo = function (t, e, n) {
                    var i, r, o, s, a = O.to(t, e, n),
                        l = [a],
                        c = [],
                        u = [],
                        h = [],
                        f = O._internals.reservedProps;
                    for (t = a._targets || a.target, Yt(t, c, h), a.render(e, !0, !0), Yt(t, u), a.render(0, !0, !0), a._enabled(!0), i = h.length; - 1 < --i;)
                        if ((r = v(h[i], c[i], u[i])).firstMPT) {
                            for (o in r = r.difs, n) f[o] && (r[o] = n[o]);
                            for (o in s = {}, r) s[o] = c[i][o];
                            l.push(O.fromTo(h[i], e, s, r))
                        } return l
                }, o.activate([L]), L
            }, !0), (t = (t = Ut._gsDefine.plugin({
                propName: "roundProps",
                version: "1.5",
                priority: -1,
                API: 2,
                init: function (t, e, n) {
                    return this._tween = n, !0
                }
            })).prototype)._onInitAllProps = function () {
                for (var t, e, n, i = this._tween, r = i.vars.roundProps.join ? i.vars.roundProps : i.vars.roundProps.split(","), o = r.length, s = {}, a = i._propLookup.roundProps; - 1 < --o;) s[r[o]] = 1;
                for (o = r.length; - 1 < --o;)
                    for (t = r[o], e = i._firstPT; e;) n = e._next, e.pg ? e.t._roundProps(s, !0) : e.n === t && (2 === e.f && e.t ? function (t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    }(e.t._firstPT) : (this._add(e.t, t, e.s, e.c), n && (n._prev = e._prev), e._prev ? e._prev._next = n : i._firstPT === e && (i._firstPT = n), e._next = e._prev = null, i._propLookup[t] = a)), e = n;
                return !1
            }, t._add = function (t, e, n, i) {
                this._addTween(t, e, n, n + i, e, !0), this._overwriteProps.push(e)
            }, Ut._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.5.0",
                init: function (t, e) {
                    if ("function" != typeof t.setAttribute) return !1;
                    for (var n in e) this._addTween(t, "setAttribute", t.getAttribute(n) + "", e[n] + "", n, !1, n), this._overwriteProps.push(n);
                    return !0
                }
            }), Ut._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function (t, e) {
                    "object" != $t(e) && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, i, r, o, s, a = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (n in e) "useRadians" !== n && (i = (s = (e[n] + "").split("_"))[0], r = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), o = (this.finals[n] = "string" == typeof i && "=" === i.charAt(1) ? r + parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2)) : Number(i) || 0) - r, s.length && (-1 !== (i = s.join("_")).indexOf("short") && ((o %= a) !== o % (a / 2) && (o = o < 0 ? o + a : o - a)), -1 !== i.indexOf("_cw") && o < 0 ? o = (o + 9999999999 * a) % a - (o / a | 0) * a : -1 !== i.indexOf("ccw") && 0 < o && (o = (o - 9999999999 * a) % a - (o / a | 0) * a)), (1e-6 < o || o < -1e-6) && (this._addTween(t, n, r, r + o, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function (t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, Ut._gsDefine("easing.Back", ["easing.Ease"], function (v) {
                function t(t, e) {
                    var n = l("easing." + t, function () { }, !0);
                    return (t = n.prototype = new v).constructor = n, t.getRatio = e, n
                }

                function e(t, e, n, i) {
                    return i = l("easing." + t, {
                        easeOut: new e,
                        easeIn: new n,
                        easeInOut: new i
                    }, !0), c(i, t), i
                }

                function g(t, e, n) {
                    this.t = t, this.v = e, n && (((this.next = n).prev = this).c = n.v - e, this.gap = n.t - t)
                }
                var n, i, r = Ut.GreenSockGlobals || Ut,
                    o = r.com.greensock,
                    s = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = o._class,
                    c = v.register || function () { },
                    u = function (t, e) {
                        var n = l("easing." + t, function (t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                            t = n.prototype = new v;
                        return t.constructor = n, t.getRatio = e, t.config = function (t) {
                            return new n(t)
                        }, n
                    },
                    o = e("Back", u("BackOut", function (t) {
                        return --t * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), u("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), u("BackInOut", function (t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    h = l("easing.SlowMo", function (t, e, n) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n
                    }, !0),
                    u = h.prototype = new v;
                return u.constructor = h, u.getRatio = function (t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, h.ease = new h(.7, .7), u.config = h.config = function (t, e, n) {
                    return new h(t, e, n)
                }, (u = (n = l("easing.SteppedEase", function (t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0)).prototype = new v).constructor = n, u.getRatio = function (t) {
                    return t < 0 ? t = 0 : 1 <= t && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, u.config = n.config = function (t) {
                    return new n(t)
                }, (u = (i = l("easing.RoughEase", function (t) {
                    for (var e, n, i, r, o, s, a = (t = t || {}).taper || "none", l = [], c = 0, u = 0 | (t.points || 20), h = u, f = !1 !== t.randomize, p = !0 === t.clamp, d = t.template instanceof v ? t.template : null, m = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --h;) e = f ? Math.random() : 1 / u * h, n = d ? d.getRatio(e) : e, i = "none" === a ? m : "out" === a ? (r = 1 - e) * r * m : "in" === a ? e * e * m : (r = e < .5 ? 2 * e : 2 * (1 - e)) * r * .5 * m, f ? n += Math.random() * i - .5 * i : h % 2 ? n += .5 * i : n -= .5 * i, p && (1 < n ? n = 1 : n < 0 && (n = 0)), l[c++] = {
                        x: e,
                        y: n
                    };
                    for (l.sort(function (t, e) {
                        return t.x - e.x
                    }), s = new g(1, 1, null), h = u; - 1 < --h;) o = l[h], s = new g(o.x, o.y, s);
                    this._prev = new g(0, 0, 0 !== s.t ? s : s.next)
                }, !0)).prototype = new v).constructor = i, u.getRatio = function (t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return (this._prev = e).v + (t - e.t) / e.gap * e.c
                }, u.config = function (t) {
                    return new i(t)
                }, i.ease = new i, e("Bounce", t("BounceOut", function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), t("BounceIn", function (t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), t("BounceInOut", function (t) {
                    var e = t < .5;
                    return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), e("Circ", t("CircOut", function (t) {
                    return Math.sqrt(1 - --t * t)
                }), t("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), t("CircInOut", function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), e("Elastic", (u = function (t, e, n) {
                    var i = l("easing." + t, function (t, e) {
                        this._p1 = 1 <= t ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                    }, !0),
                        t = i.prototype = new v;
                    return t.constructor = i, t.getRatio = e, t.config = function (t, e) {
                        return new i(t, e)
                    }, i
                })("ElasticOut", function (t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), u("ElasticIn", function (t) {
                    return -(this._p1 * Math.pow(2, 10 * --t) * Math.sin((t - this._p3) * this._p2))
                }, .3), u("ElasticInOut", function (t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * --t) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * --t) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), e("Expo", t("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t)
                }), t("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), t("ExpoInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), e("Sine", t("SineOut", function (t) {
                    return Math.sin(t * a)
                }), t("SineIn", function (t) {
                    return 1 - Math.cos(t * a)
                }), t("SineInOut", function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function (t) {
                        return v.map[t]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(n, "SteppedEase", "ease,"), o
            }, !0)
        }), Ut._gsDefine && Ut._gsQueue.pop()(),
            function (u, p) {
                "use strict";
                var e, n, d = {},
                    m = u.GreenSockGlobals = u.GreenSockGlobals || u;
                if (!m.TweenLite) {
                    var v, g = function (t) {
                        for (var e = t.split("."), n = m, i = 0; i < e.length; i++) n[e[i]] = n = n[e[i]] || {};
                        return n
                    },
                        h = g("com.greensock"),
                        y = 1e-10,
                        a = function (t) {
                            for (var e = [], n = t.length, i = 0; i !== n; e.push(t[i++]));
                            return e
                        },
                        _ = function () { },
                        x = (e = Object.prototype.toString, n = e.call([]), function (t) {
                            return null != t && (t instanceof Array || "object" == $t(t) && !!t.push && e.call(t) === n)
                        }),
                        b = {},
                        r = function a(l, c, u, h) {
                            this.sc = b[l] ? b[l].sc : [], (b[l] = this).gsClass = null, this.func = u;
                            var f = [];
                            this.check = function (t) {
                                for (var e, n, i, r, o = c.length, s = o; - 1 < --o;)(e = b[c[o]] || new a(c[o], [])).gsClass ? (f[o] = e.gsClass, s--) : t && e.sc.push(this);
                                if (0 === s && u) {
                                    if (n = (r = ("com.greensock." + l).split(".")).pop(), i = g(r.join("."))[n] = this.gsClass = u.apply(u, f), h)
                                        if (m[n] = i, !(r = it.exports) && ot(2)) void 0 === (nt = function () {
                                            return i
                                        }.apply(rt, [])) || (it.exports = nt);
                                        else if (r)
                                            if (l === p)
                                                for (o in it.exports = d[p] = i, d) i[o] = d[o];
                                            else d[p] && (d[p][n] = i);
                                    for (o = 0; o < this.sc.length; o++) this.sc[o].check()
                                }
                            }, this.check(!0)
                        },
                        i = u._gsDefine = function (t, e, n, i) {
                            return new r(t, e, n, i)
                        },
                        f = h._class = function (t, e, n) {
                            return e = e || function () { }, i(t, [], function () {
                                return e
                            }, n), e
                        };
                    i.globals = m;
                    var t, o = [0, 0, 1, 1],
                        s = [],
                        w = f("easing.Ease", function (t, e, n, i) {
                            this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? o.concat(e) : o
                        }, !0),
                        T = w.map = {},
                        l = w.register = function (t, e, n, i) {
                            for (var r, o, s, a, l = e.split(","), c = l.length, u = (n || "easeIn,easeOut,easeInOut").split(","); - 1 < --c;)
                                for (o = l[c], r = i ? f("easing." + o, null, !0) : h.easing[o] || {}, s = u.length; - 1 < --s;) a = u[s], T[o + "." + a] = T[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                        };
                    for ((t = w.prototype)._calcEnd = !1, t.getRatio = function (t) {
                        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type,
                            n = this._power,
                            i = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : t < .5 ? i / 2 : 1 - i / 2
                    }, P = (c = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --P;) t = c[P] + ",Power" + P, l(new w(null, null, 1, P), t, "easeOut", !0), l(new w(null, null, 2, P), t, "easeIn" + (0 === P ? ",easeNone" : "")), l(new w(null, null, 3, P), t, "easeInOut");
                    T.linear = h.easing.Linear.easeIn, T.swing = h.easing.Quad.easeInOut;
                    var S = f("events.EventDispatcher", function (t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    (t = S.prototype).addEventListener = function (t, e, n, i, r) {
                        r = r || 0;
                        var o, s, a = this._listeners[t],
                            l = 0;
                        for (this !== L || v || L.wake(), null == a && (this._listeners[t] = a = []), s = a.length; - 1 < --s;)(o = a[s]).c === e && o.s === n ? a.splice(s, 1) : 0 === l && o.pr < r && (l = s + 1);
                        a.splice(l, 0, {
                            c: e,
                            s: n,
                            up: i,
                            pr: r
                        })
                    }, t.removeEventListener = function (t, e) {
                        var n, i = this._listeners[t];
                        if (i)
                            for (n = i.length; - 1 < --n;)
                                if (i[n].c === e) return void i.splice(n, 1)
                    }, t.dispatchEvent = function (t) {
                        var e, n, i, r = this._listeners[t];
                        if (r)
                            for (e = r.length, n = this._eventTarget; - 1 < --e;)(i = r[e]) && (i.up ? i.c.call(i.s || n, {
                                type: t,
                                target: n
                            }) : i.c.call(i.s || n))
                    };
                    for (var c, E = u.requestAnimationFrame, k = u.cancelAnimationFrame, C = Date.now || function () {
                        return (new Date).getTime()
                    }, A = C(), P = (c = ["ms", "moz", "webkit", "o"]).length; - 1 < --P && !E;) E = u[c[P] + "RequestAnimationFrame"], k = u[c[P] + "CancelAnimationFrame"] || u[c[P] + "CancelRequestAnimationFrame"];
                    f("Ticker", function (t, e) {
                        function i(t) {
                            var e, n = C() - A;
                            h < n && (u += n - f), A += n, c.time = (A - u) / 1e3, n = c.time - l, (!r || 0 < n || !0 === t) && (c.frame++, l += n + (a <= n ? .004 : a - n), e = !0), !0 !== t && (s = o(i)), e && c.dispatchEvent("tick")
                        }
                        var r, o, s, a, l, c = this,
                            u = C(),
                            n = !(!1 === e || !E) && "auto",
                            h = 500,
                            f = 33;
                        S.call(c), c.time = c.frame = 0, c.tick = function () {
                            i(!0)
                        }, c.lagSmoothing = function (t, e) {
                            h = t || 1e10, f = Math.min(e, h, 0)
                        }, c.sleep = function () {
                            null != s && ((n && k ? k : clearTimeout)(s), o = _, s = null, c === L && (v = !1))
                        }, c.wake = function (t) {
                            null !== s ? c.sleep() : t ? u += -A + (A = C()) : 10 < c.frame && (A = C() - h + 5), o = 0 === r ? _ : n && E ? E : function (t) {
                                return setTimeout(t, 1e3 * (l - c.time) + 1 | 0)
                            }, c === L && (v = !0), i(2)
                        }, c.fps = function (t) {
                            return arguments.length ? (a = 1 / ((r = t) || 60), l = this.time + a, void c.wake()) : r
                        }, c.useRAF = function (t) {
                            return arguments.length ? (c.sleep(), n = t, void c.fps(r)) : n
                        }, c.fps(t), setTimeout(function () {
                            "auto" === n && c.frame < 5 && "hidden" !== document.visibilityState && c.useRAF(!1)
                        }, 1500)
                    }), (t = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
                    var O = f("core.Animation", function (t, e) {
                        this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, V && (v || L.wake(), (e = this.vars.useFrames ? U : V).add(this, e._time), this.vars.paused && this.paused(!0))
                    }),
                        L = O.ticker = new h.Ticker;
                    (t = O.prototype)._dirty = t._gc = t._initted = t._paused = !1, t._totalTime = t._time = 0, t._rawPrevTime = -1, t._next = t._last = t._onUpdate = t._timeline = t.timeline = null, t._paused = !1,
                        function t() {
                            v && 2e3 < C() - A && L.wake(), setTimeout(t, 2e3)
                        }(), t.play = function (t, e) {
                            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                        }, t.pause = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!0)
                        }, t.resume = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!1)
                        }, t.seek = function (t, e) {
                            return this.totalTime(Number(t), !1 !== e)
                        }, t.restart = function (t, e) {
                            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                        }, t.reverse = function (t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                        }, t.render = function (t, e, n) { }, t.invalidate = function () {
                            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                        }, t.isActive = function () {
                            var t, e = this._timeline,
                                n = this._startTime;
                            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= n && t < n + this.totalDuration() / this._timeScale
                        }, t._enabled = function (t, e) {
                            return v || L.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                        }, t._kill = function (t, e) {
                            return this._enabled(!1, !1)
                        }, t.kill = function (t, e) {
                            return this._kill(t, e), this
                        }, t._uncache = function (t) {
                            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                            return this
                        }, t._swapSelfInParams = function (t) {
                            for (var e = t.length, n = t.concat(); - 1 < --e;) "{self}" === t[e] && (n[e] = this);
                            return n
                        }, t._callback = function (t) {
                            var e = this.vars;
                            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || s)
                        }, t.eventCallback = function (t, e, n, i) {
                            if ("on" === (t || "").substr(0, 2)) {
                                var r = this.vars;
                                if (1 === arguments.length) return r[t];
                                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = x(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
                            }
                            return this
                        }, t.delay = function (t) {
                            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                        }, t.duration = function (t) {
                            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                        }, t.totalDuration = function (t) {
                            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                        }, t.time = function (t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                        }, t.totalTime = function (t, e, n) {
                            if (v || L.wake(), !arguments.length) return this._totalTime;
                            if (this._timeline) {
                                if (t < 0 && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                    this._dirty && this.totalDuration();
                                    var i = this._totalDuration,
                                        r = this._timeline;
                                    if (i < t && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                                }
                                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (N.length && G(), this.render(t, e, !1), N.length && G())
                            }
                            return this
                        }, t.progress = t.totalProgress = function (t, e) {
                            var n = this.duration();
                            return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio
                        }, t.startTime = function (t) {
                            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                        }, t.endTime = function (t) {
                            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                        }, t.timeScale = function (t) {
                            return arguments.length ? (t = t || y, this._timeline && this._timeline.smoothChildTiming && (e = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = e - (e - this._startTime) * this._timeScale / t), this._timeScale = t, this._uncache(!1)) : this._timeScale;
                            var e
                        }, t.reversed = function (t) {
                            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                        }, t.paused = function (t) {
                            if (!arguments.length) return this._paused;
                            var e, n, i = this._timeline;
                            return t != this._paused && i && (v || t || L.wake(), n = (e = i.rawTime()) - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 != n && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                        };
                    var D = f("core.SimpleTimeline", function (t) {
                        O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    (t = D.prototype = new O).constructor = D, t.kill()._gc = !1, t._first = t._last = t._recent = null, t._sortChildren = !1, t.add = t.insert = function (t, e, n, i) {
                        var r, o;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, t._remove = function (t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, t.render = function (t, e, n) {
                        var i, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
                    }, t.rawTime = function () {
                        return v || L.wake(), this._totalTime
                    };
                    var R = f("TweenLite", function (t, e, n) {
                        if (O.call(this, e, n), this.render = R.prototype.render, null == t) throw "Cannot tween a null target.";
                        this.target = t = "string" == typeof t && R.selector(t) || t;
                        var i, r, o, n = t.jquery || t.length && t !== u && t[0] && (t[0] === u || t[0].nodeType && t[0].style && !t.nodeType),
                            s = this.vars.overwrite;
                        if (this._overwrite = s = null == s ? $[R.defaultOverwrite] : "number" == typeof s ? s >> 0 : $[s], (n || t instanceof Array || t.push && x(t)) && "number" != typeof t[0])
                            for (this._targets = o = a(t), this._propLookup = [], this._siblings = [], i = 0; i < o.length; i++)(r = o[i]) ? "string" != typeof r ? r.length && r !== u && r[0] && (r[0] === u || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(i--, 1), this._targets = o = o.concat(a(r))) : (this._siblings[i] = Q(r, this, !1), 1 === s && 1 < this._siblings[i].length && J(r, this, null, 1, this._siblings[i])) : "string" == typeof (r = o[i--] = R.selector(r)) && o.splice(i + 1, 1) : o.splice(i--, 1);
                        else this._propLookup = {}, this._siblings = Q(t, this, !1), 1 === s && 1 < this._siblings.length && J(t, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -y, this.render(Math.min(0, -this._delay)))
                    }, !0),
                        M = function (t) {
                            return t && t.length && t !== u && t[0] && (t[0] === u || t[0].nodeType && t[0].style && !t.nodeType)
                        };
                    (t = R.prototype = new O).constructor = R, t.kill()._gc = !1, t.ratio = 0, t._firstPT = t._targets = t._overwrittenProps = t._startAt = null, t._notifyPluginsOfEnabled = t._lazy = !1, R.version = "1.18.5", R.defaultEase = t._ease = new w(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = L, R.autoSleep = 120, R.lagSmoothing = function (t, e) {
                        L.lagSmoothing(t, e)
                    }, R.selector = u.$ || u.jQuery || function (t) {
                        var e = u.$ || u.jQuery;
                        return e ? (R.selector = e)(t) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                    };
                    var N = [],
                        j = {},
                        I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        H = function (t) {
                            for (var e, n = this._firstPT; n;) e = n.blob ? t ? this.join("") : this.start : n.c * t + n.s, n.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e, n = n._next
                        },
                        B = function (t, e, n, i) {
                            var r, o, s, a, l, c, u = [t, e],
                                h = 0,
                                f = "",
                                p = 0;
                            for (u.start = t, n && (n(u), t = u[0], e = u[1]), u.length = 0, r = t.match(I) || [], o = e.match(I) || [], i && (i._next = null, i.blob = 1, u._firstPT = i), a = o.length, s = 0; s < a; s++) c = o[s], f += (l = e.substr(h, e.indexOf(c, h) - h)) || !s ? l : ",", h += l.length, p ? p = (p + 1) % 5 : "rgba(" === l.substr(-5) && (p = 1), c === r[s] || r.length <= s ? f += c : (f && (u.push(f), f = ""), l = parseFloat(r[s]), u.push(l), u._firstPT = {
                                _next: u._firstPT,
                                t: u,
                                p: u.length - 1,
                                s: l,
                                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - l) || 0,
                                f: 0,
                                r: p && p < 4
                            }), h += c.length;
                            return (f += e.substr(h)) && u.push(f), u.setRatio = H, u
                        },
                        z = function (t, e, n, i, r, o, s, a) {
                            var l = "get" === n ? t[e] : n,
                                c = $t(t[e]),
                                u = "string" == typeof i && "=" === i.charAt(1),
                                o = {
                                    t: t,
                                    p: e,
                                    s: l,
                                    f: "function" === c,
                                    pg: 0,
                                    n: r || e,
                                    r: o,
                                    pr: 0,
                                    c: u ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - l || 0
                                };
                            return "number" !== c && ("function" === c && "get" === n && (n = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), o.s = l = s ? t[n](s) : t[n]()), "string" == typeof l && (s || isNaN(l)) ? (o.fp = s, o = {
                                t: B(l, i, a || R.defaultStringFilter, o),
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: r || e,
                                pr: 0
                            }) : u || (o.s = parseFloat(l), o.c = parseFloat(i) - o.s || 0)), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o) : void 0
                        },
                        q = R._internals = {
                            isArray: x,
                            isSelector: M,
                            lazyTweens: N,
                            blobDif: B
                        },
                        X = R._plugins = {},
                        F = q.tweenLookup = {},
                        W = 0,
                        Y = q.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1
                        },
                        $ = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        U = O._rootFramesTimeline = new D,
                        V = O._rootTimeline = new D,
                        K = 30,
                        G = q.lazyRender = function () {
                            var t, e = N.length;
                            for (j = {}; - 1 < --e;)(t = N[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                            N.length = 0
                        };
                    V._startTime = L.time, U._startTime = L.frame, V._active = U._active = !0, setTimeout(G, 1), O._updateRoot = R.render = function () {
                        var t, e, n;
                        if (N.length && G(), V.render((L.time - V._startTime) * V._timeScale, !1, !1), U.render((L.frame - U._startTime) * U._timeScale, !1, !1), N.length && G(), L.frame >= K) {
                            for (n in K = L.frame + (parseInt(R.autoSleep, 10) || 120), F) {
                                for (t = (e = F[n].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete F[n]
                            }
                            if ((!(n = V._first) || n._paused) && R.autoSleep && !U._first && 1 === L._listeners.tick.length) {
                                for (; n && n._paused;) n = n._next;
                                n || L.sleep()
                            }
                        }
                    }, L.addEventListener("tick", O._updateRoot);
                    var Q = function (t, e, n) {
                        var i, r, o = t._gsTweenID;
                        if (F[o || (t._gsTweenID = o = "t" + W++)] || (F[o] = {
                            target: t,
                            tweens: []
                        }), e && ((i = F[o].tweens)[r = i.length] = e, n))
                            for (; - 1 < --r;) i[r] === e && i.splice(r, 1);
                        return F[o].tweens
                    },
                        Z = function (t, e, n, i) {
                            var r, o, s = t.vars.onOverwrite;
                            return s && (r = s(t, e, n, i)), (s = R.onOverwrite) && (o = s(t, e, n, i)), !1 !== r && !1 !== o
                        },
                        J = function (t, e, n, i, r) {
                            var o, s, a;
                            if (1 === i || 4 <= i) {
                                for (a = r.length, p = 0; p < a; p++)
                                    if ((s = r[p]) !== e) s._gc || s._kill(null, t, e) && (o = !0);
                                    else if (5 === i) break;
                                return o
                            }
                            for (var l, c = e._startTime + y, u = [], h = 0, f = 0 === e._duration, p = r.length; - 1 < --p;)(s = r[p]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (l = l || tt(e, 0, f), 0 === tt(s, l, f) && (u[h++] = s)) : s._startTime <= c && s._startTime + s.totalDuration() / s._timeScale > c && ((f || !s._initted) && c - s._startTime <= 2e-10 || (u[h++] = s)));
                            for (p = h; - 1 < --p;) s = u[p], 2 === i && s._kill(n, t, e) && (o = !0), 2 === i && (s._firstPT || !s._initted) || (2 === i || Z(s, e)) && s._enabled(!1, !1) && (o = !0);
                            return o
                        },
                        tt = function (t, e, n) {
                            for (var i = t._timeline, r = i._timeScale, o = t._startTime; i._timeline;) {
                                if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
                                i = i._timeline
                            }
                            return e < (o /= r) ? o - e : n && o === e || !t._initted && o - e < 2e-10 ? y : (o += t.totalDuration() / t._timeScale / r) > e + y ? 0 : o - e - y
                        };
                    t._init = function () {
                        var t, e, n, i, r, o = this.vars,
                            s = this._overwrittenProps,
                            a = this._duration,
                            l = !!o.immediateRender,
                            c = o.ease;
                        if (o.startAt) {
                            for (i in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, o.startAt) r[i] = o.startAt[i];
                            if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== o.lazy, r.startAt = r.delay = null, this._startAt = R.to(this.target, 0, r), l)
                                if (0 < this._time) this._startAt = null;
                                else if (0 !== a) return
                        } else if (o.runBackwards && 0 !== a)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                for (i in 0 !== this._time && (l = !1), n = {}, o) Y[i] && "autoCSS" !== i || (n[i] = o[i]);
                                if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && !1 !== o.lazy, n.immediateRender = l, this._startAt = R.to(this.target, 0, n), l) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            } if (this._ease = c = c ? c instanceof w ? c : "function" == typeof c ? new w(c, o.easeParams) : T[c] || R.defaultEase : R.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (t = this._targets.length; - 1 < --t;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, s);
                        if (e && R._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                            for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                        this._onUpdate = o.onUpdate, this._initted = !0
                    }, t._initProps = function (t, e, n, i) {
                        var r, o, s, a, l, c;
                        if (null == t) return !1;
                        for (r in j[t._gsTweenID] && G(), this.vars.css || t.style && t !== u && t.nodeType && X.css && !1 !== this.vars.autoCSS && function (t, e) {
                            var n, i = {};
                            for (n in t) Y[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!X[n] || X[n] && X[n]._autoCSS) || (i[n] = t[n], delete t[n]);
                            t.css = i
                        }(this.vars, t), this.vars)
                            if (c = this.vars[r], Y[r]) c && (c instanceof Array || c.push && x(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                            else if (X[r] && (a = new X[r])._onInitTween(t, this.vars[r], this)) {
                                for (this._firstPT = l = {
                                    _next: this._firstPT,
                                    t: a,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: r,
                                    pg: 1,
                                    pr: a._priority
                                }, o = a._overwriteProps.length; - 1 < --o;) e[a._overwriteProps[o]] = this._firstPT;
                                (a._priority || a._onInitAllProps) && (s = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
                            } else e[r] = z.call(this, t, r, "get", c, r, 0, null, this.vars.stringFilter);
                        return i && this._kill(i, t) ? this._initProps(t, e, n, i) : 1 < this._overwrite && this._firstPT && 1 < n.length && J(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, i)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (j[t._gsTweenID] = !0), s)
                    }, t.render = function (t, e, n) {
                        var i, r, o, s, a, l, c, u = this._time,
                            h = this._duration,
                            f = this._rawPrevTime;
                        if (h - 1e-7 <= t ? (this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 !== h || !this._initted && this.vars.lazy && !n || (this._startTime === this._timeline._duration && (t = 0), (f < 0 || t <= 0 && -1e-7 <= t || f === y && "isPause" !== this.data) && f !== t && (n = !0, y < f && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || f === t ? t : y)) : t < 1e-7 ? (this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== u || 0 === h && 0 < f) && (r = "onReverseComplete", i = this._reversed), t < 0 && (this._active = !1, 0 !== h || !this._initted && this.vars.lazy && !n || (0 <= f && (f !== y || "isPause" !== this.data) && (n = !0), this._rawPrevTime = s = !e || t || f === t ? t : y)), this._initted || (n = !0)) : (this._totalTime = this._time = t, this._easeType ? (a = t / h, (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a), 3 === l && (a *= 2), 1 === (c = this._easePower) ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a), this.ratio = 1 === l ? 1 - a : 2 === l ? a : t / h < .5 ? a / 2 : 1 - a / 2) : this.ratio = this._ease.getRatio(t / h)), this._time !== u || n) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = u, this._rawPrevTime = f, N.push(this), void (this._lazy = [t, e]);
                                this._time && !i ? this.ratio = this._ease.getRatio(this._time / h) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== u && 0 <= t && (this._active = !0), 0 === u && (this._startAt && (0 <= t ? this._startAt.render(t, e, n) : r = r || "_dummyGS"), !this.vars.onStart || 0 === this._time && 0 !== h || (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, n), e || (this._time !== u || i || n) && this._callback("onUpdate")), !r || this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === h && this._rawPrevTime === y && s !== y && (this._rawPrevTime = 0))
                        }
                    }, t._kill = function (t, e, n) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e;
                        var i, r, o, s, a, l, c, u, h, f = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
                        if ((x(e) || M(e)) && "number" != typeof e[0])
                            for (i = e.length; - 1 < --i;) this._kill(t, e[i], n) && (l = !0);
                        else {
                            if (this._targets) {
                                for (i = this._targets.length; - 1 < --i;)
                                    if (e === this._targets[i]) {
                                        a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (c = t || a, u = t !== r && "all" !== r && t !== a && ("object" != $t(t) || !t._tempKill), n && (R.onOverwrite || this.vars.onOverwrite)) {
                                    for (o in c) a[o] && (h = h || []).push(o);
                                    if ((h || !t) && !Z(this, n, e, h)) return !1
                                }
                                for (o in c) (s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, t.invalidate = function () {
                        return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -y, this.render(Math.min(0, -this._delay))), this
                    }, t._enabled = function (t, e) {
                        if (v || L.wake(), t && this._gc) {
                            var n, i = this._targets;
                            if (i)
                                for (n = i.length; - 1 < --n;) this._siblings[n] = Q(i[n], this, !0);
                            else this._siblings = Q(this.target, this, !0)
                        }
                        return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, R.to = function (t, e, n) {
                        return new R(t, e, n)
                    }, R.from = function (t, e, n) {
                        return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new R(t, e, n)
                    }, R.fromTo = function (t, e, n, i) {
                        return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new R(t, e, i)
                    }, R.delayedCall = function (t, e, n, i, r) {
                        return new R(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: n,
                            callbackScope: i,
                            onReverseComplete: e,
                            onReverseCompleteParams: n,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, R.set = function (t, e) {
                        return new R(t, 0, e)
                    }, R.getTweensOf = function (t, e) {
                        if (null == t) return [];
                        var n, i, r, o;
                        if (t = "string" == typeof t && R.selector(t) || t, (x(t) || M(t)) && "number" != typeof t[0]) {
                            for (n = t.length, i = []; - 1 < --n;) i = i.concat(R.getTweensOf(t[n], e));
                            for (n = i.length; - 1 < --n;)
                                for (o = i[n], r = n; - 1 < --r;) o === i[r] && i.splice(n, 1)
                        } else
                            for (n = (i = Q(t).concat()).length; - 1 < --n;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
                        return i
                    }, R.killTweensOf = R.killDelayedCallsTo = function (t, e, n) {
                        "object" == $t(e) && (n = e, e = !1);
                        for (var i = R.getTweensOf(t, e), r = i.length; - 1 < --r;) i[r]._kill(n, t)
                    };
                    var et = f("plugins.TweenPlugin", function (t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype
                    }, !0);
                    if (t = et.prototype, et.version = "1.18.0", et.API = 2, t._firstPT = null, t._addTween = z, t.setRatio = H, t._kill = function (t) {
                        var e, n = this._overwriteProps,
                            i = this._firstPT;
                        if (null != t[this._propName]) this._overwriteProps = [];
                        else
                            for (e = n.length; - 1 < --e;) null != t[n[e]] && n.splice(e, 1);
                        for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                        return !1
                    }, t._roundProps = function (t, e) {
                        for (var n = this._firstPT; n;)(t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && (n.r = e), n = n._next
                    }, R._onPluginEvent = function (t, e) {
                        var n, i, r, o, s, a = e._firstPT;
                        if ("_onInitAllProps" === t) {
                            for (; a;) {
                                for (s = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                                (a._prev = i ? i._prev : o) ? a._prev._next = a : r = a, (a._next = i) ? i._prev = a : o = a, a = s
                            }
                            a = e._firstPT = r
                        }
                        for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), a = a._next;
                        return n
                    }, et.activate = function (t) {
                        for (var e = t.length; - 1 < --e;) t[e].API === et.API && (X[(new t[e])._propName] = t[e]);
                        return !0
                    }, i.plugin = function (t) {
                        if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                        var e, n = t.propName,
                            i = t.priority || 0,
                            r = t.overwriteProps,
                            o = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_roundProps",
                                initAll: "_onInitAllProps"
                            },
                            s = f("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                                et.call(this, n, i), this._overwriteProps = r || []
                            }, !0 === t.global),
                            a = s.prototype = new et(n);
                        for (e in (a.constructor = s).API = t.API, o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                        return s.version = t.version, et.activate([s]), s
                    }, c = u._gsQueue) {
                        for (P = 0; P < c.length; P++) c[P]();
                        for (t in b) b[t].func || u.console.log("GSAP encountered missing dependency: com.greensock." + t)
                    }
                    v = !1
                }
            }(it.exports && void 0 !== t ? t : this || window, "TweenMax")
    }).call(this, ot(11))
}, function (t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var i = function () {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (i = window)
    }
    t.exports = i
}, function (t, e, n) {
    var f, p, s, o, h, d, m;

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    /**
     * Customized version of iScroll.js 0.1.3
     * It fixes bugs affecting its integration with fullpage.js
     * @license
     */
    function i(t, e) {
        for (var n in this.wrapper = "string" == typeof t ? o.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !m.hasPointer,
            disableTouch: m.hasPointer || !m.hasTouch,
            disableMouse: m.hasPointer || m.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: void 0 === s.onmousedown
        }, e) this.options[n] = e[n];
        this.translateZ = this.options.HWCompositing && m.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = m.hasTransition && this.options.useTransition, this.options.useTransform = m.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? m.ease[this.options.bounceEasing] || m.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function l(t, e, n) {
        var i = o.createElement("div"),
            r = o.createElement("div");
        return !0 === n && (i.style.cssText = "position:absolute;z-index:9999", r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), r.className = "iScrollIndicator", i.className = "h" == t ? (!0 === n && (i.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", r.style.height = "100%"), "iScrollHorizontalScrollbar") : (!0 === n && (i.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", r.style.width = "100%"), "iScrollVerticalScrollbar"), i.style.cssText += ";overflow:hidden", e || (i.style.pointerEvents = "none"), i.appendChild(r), i
    }

    function c(t, e) {
        for (var n in this.wrapper = "string" == typeof e.el ? o.querySelector(e.el) : e.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = t, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        }, e) this.options[n] = e[n];
        var i, r;
        this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (m.addEvent(this.indicator, "touchstart", this), m.addEvent(s, "touchend", this)), this.options.disablePointer || (m.addEvent(this.indicator, m.prefixPointerEvent("pointerdown"), this), m.addEvent(s, m.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (m.addEvent(this.indicator, "mousedown", this), m.addEvent(s, "mouseup", this))), this.options.fade && (this.wrapperStyle[m.style.transform] = this.scroller.translateZ, (i = m.style.transitionDuration) && (this.wrapperStyle[i] = m.isBadAndroid ? "0.0001ms" : "0ms", r = this, m.isBadAndroid && d(function () {
            "0.0001ms" === r.wrapperStyle[i] && (r.wrapperStyle[i] = "0s")
        }), this.wrapperStyle.opacity = "0"))
    }
    s = window, o = document, h = Math, d = s.requestAnimationFrame || s.webkitRequestAnimationFrame || s.mozRequestAnimationFrame || s.oRequestAnimationFrame || s.msRequestAnimationFrame || function (t) {
        s.setTimeout(t, 1e3 / 60)
    }, m = function () {
        var i = {},
            r = o.createElement("div").style,
            e = function () {
                for (var t = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, n = t.length; e < n; e++)
                    if (t[e] + "ransform" in r) return t[e].substr(0, t[e].length - 1);
                return !1
            }();

        function t(t) {
            return !1 !== e && ("" === e ? t : e + t.charAt(0).toUpperCase() + t.substr(1))
        }
        i.getTime = Date.now || function () {
            return (new Date).getTime()
        }, i.extend = function (t, e) {
            for (var n in e) t[n] = e[n]
        }, i.addEvent = function (t, e, n, i) {
            t.addEventListener(e, n, !!i)
        }, i.removeEvent = function (t, e, n, i) {
            t.removeEventListener(e, n, !!i)
        }, i.prefixPointerEvent = function (t) {
            return s.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
        }, i.momentum = function (t, e, n, i, r, o) {
            var s = t - e,
                e = h.abs(s) / n,
                n = e / (o = void 0 === o ? 6e-4 : o);
            return (o = t + e * e / (2 * o) * (s < 0 ? -1 : 1)) < i ? (o = r ? i - r / 2.5 * (e / 8) : i, n = (s = h.abs(o - t)) / e) : 0 < o && (o = r ? r / 2.5 * (e / 8) : 0, n = (s = h.abs(t) + o) / e), {
                destination: h.round(o),
                duration: n
            }
        };
        var n = t("transform");
        return i.extend(i, {
            hasTransform: !1 !== n,
            hasPerspective: t("perspective") in r,
            hasTouch: "ontouchstart" in s,
            hasPointer: !(!s.PointerEvent && !s.MSPointerEvent),
            hasTransition: t("transition") in r
        }), i.isBadAndroid = function () {
            var t = s.navigator.appVersion;
            if (!/Android/.test(t) || /Chrome\/\d/.test(t)) return !1;
            t = t.match(/Safari\/(\d+.\d)/);
            return !(t && "object" == a(t) && 2 <= t.length) || parseFloat(t[1]) < 535.19
        }(), i.extend(i.style = {}, {
            transform: n,
            transitionTimingFunction: t("transitionTimingFunction"),
            transitionDuration: t("transitionDuration"),
            transitionDelay: t("transitionDelay"),
            transformOrigin: t("transformOrigin")
        }), i.hasClass = function (t, e) {
            return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
        }, i.addClass = function (t, e) {
            var n;
            i.hasClass(t, e) || ((n = t.className.split(" ")).push(e), t.className = n.join(" "))
        }, i.removeClass = function (t, e) {
            i.hasClass(t, e) && (e = new RegExp("(^|\\s)" + e + "(\\s|$)", "g"), t.className = t.className.replace(e, " "))
        }, i.offset = function (t) {
            for (var e = -t.offsetLeft, n = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, n -= t.offsetTop;
            return {
                left: e,
                top: n
            }
        }, i.preventDefaultException = function (t, e) {
            for (var n in e)
                if (e[n].test(t[n])) return !0;
            return !1
        }, i.extend(i.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }), i.extend(i.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function (t) {
                    return t * (2 - t)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function (t) {
                    return h.sqrt(1 - --t * t)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function (t) {
                    return --t * t * (5 * t + 4) + 1
                }
            },
            bounce: {
                style: "",
                fn: function (t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }
            },
            elastic: {
                style: "",
                fn: function (t) {
                    return 0 === t ? 0 : 1 == t ? 1 : .4 * h.pow(2, -10 * t) * h.sin((t - .055) * (2 * h.PI) / .22) + 1
                }
            }
        }), i.tap = function (t, e) {
            var n = o.createEvent("Event");
            n.initEvent(e, !0, !0), n.pageX = t.pageX, n.pageY = t.pageY, t.target.dispatchEvent(n)
        }, i.click = function (t) {
            var e, n = t.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || ((e = o.createEvent(s.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0), e.view = t.view || s, e.detail = 1, e.screenX = n.screenX || 0, e.screenY = n.screenY || 0, e.clientX = n.clientX || 0, e.clientY = n.clientY || 0, e.ctrlKey = !!t.ctrlKey, e.altKey = !!t.altKey, e.shiftKey = !!t.shiftKey, e.metaKey = !!t.metaKey, e.button = 0, e.relatedTarget = null, e._constructed = !0, n.dispatchEvent(e))
        }, i
    }(), i.prototype = {
        version: "5.2.0",
        _init: function () {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        },
        destroy: function () {
            this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
        },
        _transitionEnd: function (t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function (t) {
            var e;
            1 != m.eventType[t.type] && 0 !== (t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2) || !this.enabled || this.initiated && m.eventType[t.type] !== this.initiated || (!this.options.preventDefault || m.isBadAndroid || m.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault(), e = t.touches ? t.touches[0] : t, this.initiated = m.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = m.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, t = this.getComputedPosition(), this._translate(h.round(t.x), h.round(t.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = e.pageX, this.pointY = e.pageY, this._execEvent("beforeScrollStart"))
        },
        _move: function (t) {
            if (this.enabled && m.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var e, n = t.touches ? t.touches[0] : t,
                    i = n.pageX - this.pointX,
                    r = n.pageY - this.pointY,
                    o = m.getTime();
                if (this.pointX = n.pageX, this.pointY = n.pageY, this.distX += i, this.distY += r, e = h.abs(this.distX), n = h.abs(this.distY), !(300 < o - this.endTime && e < 10 && n < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (e > n + this.options.directionLockThreshold ? this.directionLocked = "h" : n >= e + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = !1);
                        r = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = !1);
                        i = 0
                    }
                    i = this.hasHorizontalScroll ? i : 0, r = this.hasVerticalScroll ? r : 0, e = this.x + i, t = this.y + r, (0 < e || e < this.maxScrollX) && (e = this.options.bounce ? this.x + i / 3 : 0 < e ? 0 : this.maxScrollX), (0 < t || t < this.maxScrollY) && (t = this.options.bounce ? this.y + r / 3 : 0 < t ? 0 : this.maxScrollY), this.directionX = 0 < i ? -1 : i < 0 ? 1 : 0, this.directionY = 0 < r ? -1 : r < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, t), 300 < o - this.startTime && (this.startTime = o, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function (t) {
            if (this.enabled && m.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !m.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault(), t.changedTouches && t.changedTouches[0];
                var e, n = m.getTime() - this.startTime,
                    i = h.round(this.x),
                    r = h.round(this.y),
                    o = h.abs(i - this.startX),
                    s = h.abs(r - this.startY),
                    a = 0,
                    l = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = m.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(i, r), !this.moved) return this.options.tap && m.tap(t, this.options.tap), this.options.click && m.click(t), void this._execEvent("scrollCancel");
                    if (this._events.flick && n < 200 && o < 100 && s < 100) this._execEvent("flick");
                    else {
                        if (this.options.momentum && n < 300 && (s = this.hasHorizontalScroll ? m.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                            destination: i,
                            duration: 0
                        }, e = this.hasVerticalScroll ? m.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                            destination: r,
                            duration: 0
                        }, i = s.destination, r = e.destination, a = h.max(s.duration, e.duration), this.isInTransition = 1), this.options.snap && (e = this._nearestSnap(i, r), this.currentPage = e, a = this.options.snapSpeed || h.max(h.max(h.min(h.abs(i - e.x), 1e3), h.min(h.abs(r - e.y), 1e3)), 300), i = e.x, r = e.y, this.directionX = 0, this.directionY = 0, l = this.options.bounceEasing), i != this.x || r != this.y) return (0 < i || i < this.maxScrollX || 0 < r || r < this.maxScrollY) && (l = m.ease.quadratic), void this.scrollTo(i, r, a, l);
                        this._execEvent("scrollEnd")
                    }
                }
            }
        },
        _resize: function () {
            var t = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
                t.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function (t) {
            var e = this.x,
                n = this.y;
            return t = t || 0, !this.hasHorizontalScroll || 0 < this.x ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || 0 < this.y ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY), (e != this.x || n != this.y) && (this.scrollTo(e, n, t, this.options.bounceEasing), !0)
        },
        disable: function () {
            this.enabled = !1
        },
        enable: function () {
            this.enabled = !0
        },
        refresh: function () {
            this.wrapper.offsetHeight, this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = m.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        },
        on: function (t, e) {
            this._events[t] || (this._events[t] = []), this._events[t].push(e)
        },
        off: function (t, e) {
            !this._events[t] || -1 < (e = this._events[t].indexOf(e)) && this._events[t].splice(e, 1)
        },
        _execEvent: function (t) {
            if (this._events[t]) {
                var e = 0,
                    n = this._events[t].length;
                if (n)
                    for (; e < n; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function (t, e, n, i) {
            t = this.x + t, e = this.y + e, n = n || 0, this.scrollTo(t, e, n, i)
        },
        scrollTo: function (t, e, n, i) {
            i = i || m.ease.circular, this.isInTransition = this.options.useTransition && 0 < n;
            var r = this.options.useTransition && i.style;
            !n || r ? (r && (this._transitionTimingFunction(i.style), this._transitionTime(n)), this._translate(t, e)) : this._animate(t, e, n, i.fn)
        },
        scrollToElement: function (t, e, n, i, r) {
            var o;
            (t = t.nodeType ? t : this.scroller.querySelector(t)) && ((o = m.offset(t)).left -= this.wrapperOffset.left, o.top -= this.wrapperOffset.top, !0 === n && (n = h.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === i && (i = h.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), o.left -= n || 0, o.top -= i || 0, o.left = 0 < o.left ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left, o.top = 0 < o.top ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top, e = null == e || "auto" === e ? h.max(h.abs(this.x - o.left), h.abs(this.y - o.top)) : e, this.scrollTo(o.left, o.top, e, r))
        },
        _transitionTime: function (t) {
            if (this.options.useTransition) {
                t = t || 0;
                var e, n = m.style.transitionDuration;
                if (n)
                    if (this.scrollerStyle[n] = t + "ms", !t && m.isBadAndroid && (this.scrollerStyle[n] = "0.0001ms", e = this, d(function () {
                        "0.0001ms" === e.scrollerStyle[n] && (e.scrollerStyle[n] = "0s")
                    })), this.indicators)
                        for (var i = this.indicators.length; i--;) this.indicators[i].transitionTime(t)
            }
        },
        _transitionTimingFunction: function (t) {
            if (this.scrollerStyle[m.style.transitionTimingFunction] = t, this.indicators)
                for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
        },
        _translate: function (t, e) {
            if (this.options.useTransform ? this.scrollerStyle[m.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = h.round(t), e = h.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators)
                for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition()
        },
        _initEvents: function (t) {
            var e = t ? m.removeEvent : m.addEvent,
                t = this.options.bindToWrapper ? this.wrapper : s;
            e(s, "orientationchange", this), e(s, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(t, "mousemove", this), e(t, "mousecancel", this), e(t, "mouseup", this)), m.hasPointer && !this.options.disablePointer && (e(this.wrapper, m.prefixPointerEvent("pointerdown"), this), e(t, m.prefixPointerEvent("pointermove"), this), e(t, m.prefixPointerEvent("pointercancel"), this), e(t, m.prefixPointerEvent("pointerup"), this)), m.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(t, "touchmove", this), e(t, "touchcancel", this), e(t, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function () {
            var t, e = s.getComputedStyle(this.scroller, null),
                e = this.options.useTransform ? (t = +((e = e[m.style.transform].split(")")[0].split(", "))[12] || e[4]), +(e[13] || e[5])) : (t = +e.left.replace(/[^-\d.]/g, ""), +e.top.replace(/[^-\d.]/g, ""));
            return {
                x: t,
                y: e
            }
        },
        _initIndicators: function () {
            var t, e = this.options.interactiveScrollbars,
                n = "string" != typeof this.options.scrollbars,
                i = [],
                r = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (t = {
                el: l("v", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(t.el), i.push(t)), this.options.scrollX && (t = {
                el: l("h", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(t.el), i.push(t))), this.options.indicators && (i = i.concat(this.options.indicators));
            for (var o = i.length; o--;) this.indicators.push(new c(this, i[o]));

            function s(t) {
                if (r.indicators)
                    for (var e = r.indicators.length; e--;) t.call(r.indicators[e])
            }
            this.options.fadeScrollbars && (this.on("scrollEnd", function () {
                s(function () {
                    this.fade()
                })
            }), this.on("scrollCancel", function () {
                s(function () {
                    this.fade()
                })
            }), this.on("scrollStart", function () {
                s(function () {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function () {
                s(function () {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function () {
                s(function () {
                    this.refresh()
                })
            }), this.on("destroy", function () {
                s(function () {
                    this.destroy()
                }), delete this.indicators
            })
        },
        _initWheel: function () {
            m.addEvent(this.wrapper, "wheel", this), m.addEvent(this.wrapper, "mousewheel", this), m.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function () {
                clearTimeout(this.wheelTimeout), this.wheelTimeout = null, m.removeEvent(this.wrapper, "wheel", this), m.removeEvent(this.wrapper, "mousewheel", this), m.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function (t) {
            if (this.enabled) {
                s.navigator.userAgent.match(/(MSIE|Trident)/) || t.preventDefault();
                var e, n, i, r, o = this;
                if (void 0 === this.wheelTimeout && o._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
                    o.options.snap || o._execEvent("scrollEnd"), o.wheelTimeout = void 0
                }, 400), "deltaX" in t) n = 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, -t.deltaY);
                else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, n = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in t) e = n = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in t)) return;
                    e = n = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (e *= this.options.invertWheelDirection, n *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = n, n = 0), this.options.snap) return i = this.currentPage.pageX, r = this.currentPage.pageY, 0 < e ? i-- : e < 0 && i++, 0 < n ? r-- : n < 0 && r++, void this.goToPage(i, r);
                i = this.x + h.round(this.hasHorizontalScroll ? e : 0), r = this.y + h.round(this.hasVerticalScroll ? n : 0), this.directionX = 0 < e ? -1 : e < 0 ? 1 : 0, this.directionY = 0 < n ? -1 : n < 0 ? 1 : 0, 0 < i ? i = 0 : i < this.maxScrollX && (i = this.maxScrollX), 0 < r ? r = 0 : r < this.maxScrollY && (r = this.maxScrollY), this.scrollTo(i, r, 0)
            }
        },
        _initSnap: function () {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function () {
                var t, e, n, i, r, o, s = 0,
                    a = 0,
                    l = 0,
                    c = this.options.snapStepX || this.wrapperWidth,
                    u = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (!0 === this.options.snap)
                        for (n = h.round(c / 2), i = h.round(u / 2); l > -this.scrollerWidth;) {
                            for (this.pages[s] = [], r = t = 0; r > -this.scrollerHeight;) this.pages[s][t] = {
                                x: h.max(l, this.maxScrollX),
                                y: h.max(r, this.maxScrollY),
                                width: c,
                                height: u,
                                cx: l - n,
                                cy: r - i
                            }, r -= u, t++;
                            l -= c, s++
                        } else
                        for (t = (o = this.options.snap).length, e = -1; s < t; s++)(0 === s || o[s].offsetLeft <= o[s - 1].offsetLeft) && (a = 0, e++), this.pages[a] || (this.pages[a] = []), l = h.max(-o[s].offsetLeft, this.maxScrollX), r = h.max(-o[s].offsetTop, this.maxScrollY), n = l - h.round(o[s].offsetWidth / 2), i = r - h.round(o[s].offsetHeight / 2), this.pages[a][e] = {
                            x: l,
                            y: r,
                            width: o[s].offsetWidth,
                            height: o[s].offsetHeight,
                            cx: n,
                            cy: i
                        }, l > this.maxScrollX && a++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = h.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = h.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function () {
                var t = this.options.snapSpeed || h.max(h.max(h.min(h.abs(this.x - this.startX), 1e3), h.min(h.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function (t, e) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var n = 0,
                i = this.pages.length,
                r = 0;
            if (h.abs(t - this.absStartX) < this.snapThresholdX && h.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (0 < t ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), 0 < e ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); n < i; n++)
                if (t >= this.pages[n][0].cx) {
                    t = this.pages[n][0].x;
                    break
                } for (i = this.pages[n].length; r < i; r++)
                if (e >= this.pages[0][r].cy) {
                    e = this.pages[0][r].y;
                    break
                } return n == this.currentPage.pageX && ((n += this.directionX) < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), t = this.pages[n][0].x), r == this.currentPage.pageY && ((r += this.directionY) < 0 ? r = 0 : r >= this.pages[0].length && (r = this.pages[0].length - 1), e = this.pages[0][r].y), {
                    x: t,
                    y: e,
                    pageX: n,
                    pageY: r
                }
        },
        goToPage: function (t, e, n, i) {
            i = i || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
            var r = this.pages[t][e].x,
                o = this.pages[t][e].y;
            n = void 0 === n ? this.options.snapSpeed || h.max(h.max(h.min(h.abs(r - this.x), 1e3), h.min(h.abs(o - this.y), 1e3)), 300) : n, this.currentPage = {
                x: r,
                y: o,
                pageX: t,
                pageY: e
            }, this.scrollTo(r, o, n, i)
        },
        next: function (t, e) {
            var n = this.currentPage.pageX,
                i = this.currentPage.pageY;
            ++n >= this.pages.length && this.hasVerticalScroll && (n = 0, i++), this.goToPage(n, i, t, e)
        },
        prev: function (t, e) {
            var n = this.currentPage.pageX,
                i = this.currentPage.pageY;
            --n < 0 && this.hasVerticalScroll && (n = 0, i--), this.goToPage(n, i, t, e)
        },
        _initKeys: function () {
            var t, e = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == a(this.options.keyBindings))
                for (t in this.options.keyBindings) "string" == typeof this.options.keyBindings[t] && (this.options.keyBindings[t] = this.options.keyBindings[t].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (t in e) this.options.keyBindings[t] = this.options.keyBindings[t] || e[t];
            m.addEvent(s, "keydown", this), this.on("destroy", function () {
                m.removeEvent(s, "keydown", this)
            })
        },
        _key: function (t) {
            if (this.enabled) {
                var e, n = this.options.snap,
                    i = n ? this.currentPage.pageX : this.x,
                    r = n ? this.currentPage.pageY : this.y,
                    o = m.getTime(),
                    s = this.keyTime || 0;
                switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(h.round(e.x), h.round(e.y)), this.isInTransition = !1), this.keyAcceleration = o - s < 200 ? h.min(this.keyAcceleration + .25, 50) : 0, t.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? i += n ? 1 : this.wrapperWidth : r += n ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? i -= n ? 1 : this.wrapperWidth : r -= n ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        i = n ? this.pages.length - 1 : this.maxScrollX, r = n ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        r = i = 0;
                        break;
                    case this.options.keyBindings.left:
                        i += n ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        r += n ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        i -= n ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        r -= n ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                n ? this.goToPage(i, r) : (0 < i ? (i = 0, this.keyAcceleration = 0) : i < this.maxScrollX && (i = this.maxScrollX, this.keyAcceleration = 0), 0 < r ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(i, r, 0), this.keyTime = o)
            }
        },
        _animate: function (i, r, o, s) {
            var a = this,
                l = this.x,
                c = this.y,
                u = m.getTime(),
                h = u + o;
            this.isAnimating = !0,
                function t() {
                    var e, n = m.getTime();
                    if (h <= n) return a.isAnimating = !1, a._translate(i, r), void (a.resetPosition(a.options.bounceTime) || a._execEvent("scrollEnd"));
                    e = s((n - u) / o), n = (i - l) * e + l, e = (r - c) * e + c, a._translate(n, e), a.isAnimating && d(t)
                }()
        },
        handleEvent: function (t) {
            switch (t.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(t);
                    break;
                case "keydown":
                    this._key(t);
                    break;
                case "click":
                    this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
            }
        }
    }, c.prototype = {
        handleEvent: function (t) {
            switch (t.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t)
            }
        },
        destroy: function () {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (m.removeEvent(this.indicator, "touchstart", this), m.removeEvent(this.indicator, m.prefixPointerEvent("pointerdown"), this), m.removeEvent(this.indicator, "mousedown", this), m.removeEvent(s, "touchmove", this), m.removeEvent(s, m.prefixPointerEvent("pointermove"), this), m.removeEvent(s, "mousemove", this), m.removeEvent(s, "touchend", this), m.removeEvent(s, m.prefixPointerEvent("pointerup"), this), m.removeEvent(s, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function (t) {
            var e = t.touches ? t.touches[0] : t;
            t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = m.getTime(), this.options.disableTouch || m.addEvent(s, "touchmove", this), this.options.disablePointer || m.addEvent(s, m.prefixPointerEvent("pointermove"), this), this.options.disableMouse || m.addEvent(s, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        },
        _move: function (t) {
            var e, n, i = t.touches ? t.touches[0] : t;
            m.getTime(), this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = i.pageX - this.lastPointX, this.lastPointX = i.pageX, n = i.pageY - this.lastPointY, this.lastPointY = i.pageY, e = this.x + e, n = this.y + n, this._pos(e, n), t.preventDefault(), t.stopPropagation()
        },
        _end: function (t) {
            var e;
            this.initiated && (this.initiated = !1, t.preventDefault(), t.stopPropagation(), m.removeEvent(s, "touchmove", this), m.removeEvent(s, m.prefixPointerEvent("pointermove"), this), m.removeEvent(s, "mousemove", this), this.scroller.options.snap && (e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), t = this.options.snapSpeed || h.max(h.max(h.min(h.abs(this.scroller.x - e.x), 1e3), h.min(h.abs(this.scroller.y - e.y), 1e3)), 300), this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, t, this.scroller.options.bounceEasing))), this.moved && this.scroller._execEvent("scrollEnd"))
        },
        transitionTime: function (t) {
            t = t || 0;
            var e, n = m.style.transitionDuration;
            n && (this.indicatorStyle[n] = t + "ms", !t && m.isBadAndroid) && (this.indicatorStyle[n] = "0.0001ms", e = this, d(function () {
                "0.0001ms" === e.indicatorStyle[n] && (e.indicatorStyle[n] = "0s")
            }))
        },
        transitionTimingFunction: function (t) {
            this.indicatorStyle[m.style.transitionTimingFunction] = t
        },
        refresh: function () {
            this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (m.addClass(this.wrapper, "iScrollBothScrollbars"), m.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (m.removeClass(this.wrapper, "iScrollBothScrollbars"), m.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")), this.wrapper.offsetHeight, this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = h.max(h.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = h.max(h.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        },
        updatePosition: function () {
            var t = this.options.listenX && h.round(this.sizeRatioX * this.scroller.x) || 0,
                e = this.options.listenY && h.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = h.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? t = "scale" == this.options.shrink ? (this.width = h.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", this.maxPosX + this.indicatorWidth - this.width) : this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = h.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? e = "scale" == this.options.shrink ? (this.height = h.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", this.maxPosY + this.indicatorHeight - this.height) : this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[m.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
        },
        _pos: function (t, e) {
            t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? h.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? h.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
        },
        fade: function (t, e) {
            var n;
            e && !this.visible || (clearTimeout(this.fadeTimeout), this.fadeTimeout = null, n = t ? 250 : 500, e = t ? 0 : 300, t = t ? "1" : "0", this.wrapperStyle[m.style.transitionDuration] = n + "ms", this.fadeTimeout = setTimeout(function (t) {
                this.wrapperStyle.opacity = t, this.visible = +t
            }.bind(this, t), e))
        }
    }, i.utils = m, t.exports ? t.exports = i : (void 0 === (e = function () {
        return i
    }.call(e, n, e, t)) || (t.exports = e), void 0 !== s && (s.IScroll = i)),
        /*!
         * Scrolloverflow 2.0.5 module for fullPage.js >= 3
         * https://github.com/alvarotrigo/fullPage.js
         * @license MIT licensed
         *
         * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
         */
        f = window, p = document, f.fp_scrolloverflow = function () {
            f.IScroll || (f.IScroll = t.exports);
            var n = "fp-scrollable",
                o = "." + n,
                c = ".fp-section",
                i = c + ".active",
                u = ".fp-tableCell";

            function r() {
                var l = this;

                function n() {
                    var e;
                    fp_utils.hasClass(p.body, "fp-responsive") ? (e = l.options.scrollOverflowHandler, i(function (t) {
                        fp_utils.hasClass(fp_utils.closest(t, c), "fp-auto-height-responsive") && e.remove(t)
                    })) : i(t)
                }

                function t(t) {
                    var e, n, i, r, o, s, a;
                    fp_utils.hasClass(t, "fp-noscroll") || (fp_utils.css(t, {
                        overflow: "hidden"
                    }), i = (n = l.options.scrollOverflowHandler).wrapContent(), s = fp_utils.closest(t, c), r = n.scrollable(t), o = null != (a = fp_utils.closest(s, c)) ? parseInt(getComputedStyle(a)["padding-bottom"]) + parseInt(getComputedStyle(a)["padding-top"]) : 0, null != r ? e = n.scrollHeight(t) : (e = t.scrollHeight, l.options.verticalCentered && (e = h(u, t)[0].scrollHeight)), a = (s = fp_utils.getWindowHeight()) - o, s < e + o ? null != r ? n.update(t, a) : (l.options.verticalCentered ? (fp_utils.wrapInner(h(u, t)[0], i.scroller), fp_utils.wrapInner(h(u, t)[0], i.scrollable)) : (fp_utils.wrapInner(t, i.scroller), fp_utils.wrapInner(t, i.scrollable)), n.create(t, a, l.iscrollOptions)) : n.remove(t), fp_utils.css(t, {
                        overflow: ""
                    }))
                }

                function i(n) {
                    h(c).forEach(function (t) {
                        var e = h(".fp-slide", t);
                        e.length ? e.forEach(function (t) {
                            n(t)
                        }) : n(t)
                    })
                }
                l.options = null, l.init = function (t, e) {
                    return l.options = t, l.iscrollOptions = e, "complete" === p.readyState && (n(), fullpage_api.shared.afterRenderActions()), f.addEventListener("load", function () {
                        n(), fullpage_api.shared.afterRenderActions()
                    }), l
                }, l.createScrollBarForAll = n, l.createScrollBar = t
            }
            IScroll.prototype.wheelOn = function () {
                this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
            }, IScroll.prototype.wheelOff = function () {
                this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
            };
            var h = null,
                s = null,
                a = {
                    refreshId: null,
                    iScrollInstances: [],
                    lastScrollY: null,
                    hasBeenInit: !1,
                    iscrollOptions: {
                        scrollbars: !0,
                        mouseWheel: !0,
                        hideScrollbars: !1,
                        fadeScrollbars: !1,
                        disableMouse: !0,
                        interactiveScrollbars: !0
                    },
                    init: function (t) {
                        h = fp_utils.$, s = t;
                        var e = "ontouchstart" in f || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints;
                        return a.iscrollOptions.click = e, a.hasBeenInit = !0, a.iscrollOptions = fp_utils.deepExtend(a.iscrollOptions, t.scrollOverflowOptions), (new r).init(t, a.iscrollOptions)
                    },
                    toggleWheel: function (e) {
                        h(o, h(i)[0]).forEach(function (t) {
                            t = t.fp_iscrollInstance;
                            null != t && (e ? t.wheelOn() : t.wheelOff())
                        })
                    },
                    setIscroll: function (t, e) {
                        a.hasBeenInit && (e = e ? "enable" : "disable", (t = fp_utils.closest(t, o) || h(o, t)[0]) && t.fp_iscrollInstance[e]())
                    },
                    onLeave: function () {
                        a.toggleWheel(!1)
                    },
                    beforeLeave: function () {
                        a.onLeave()
                    },
                    afterLoad: function () {
                        a.toggleWheel(!0)
                    },
                    create: function (n, i, r) {
                        h(o, n).forEach(function (t) {
                            fp_utils.css(t, {
                                height: i + "px"
                            });
                            var e = t.fp_iscrollInstance;
                            null != e && a.iScrollInstances.forEach(function (t) {
                                t.destroy()
                            }), e = new IScroll(t, r), a.iScrollInstances.push(e), fp_utils.hasClass(fp_utils.closest(n, c), "active") || e.wheelOff(), t.fp_iscrollInstance = e
                        })
                    },
                    isScrolled: function (t, e) {
                        var n = e.fp_iscrollInstance;
                        return !n || ("top" === t ? 0 <= n.y && !fp_utils.getScrollTop(e) : "bottom" === t ? 0 - n.y + fp_utils.getScrollTop(e) + e.offsetHeight >= e.scrollHeight : void 0)
                    },
                    scrollable: function (t) {
                        return (h(".fp-slides", t).length ? h(o, h(".fp-slide.active", t)[0]) : h(o, t))[0]
                    },
                    scrollHeight: function (t) {
                        return h(".fp-scroller", h(o, t)[0])[0].scrollHeight
                    },
                    remove: function (t) {
                        var e, n;
                        null == t || null != (e = h(o, t)[0]) && (null != (n = e.fp_iscrollInstance) && n.destroy(), e.fp_iscrollInstance = null, fp_utils.unwrap(h(".fp-scroller", t)[0]), fp_utils.unwrap(h(o, t)[0]))
                    },
                    update: function (t, e) {
                        clearTimeout(a.refreshId), a.refreshId = setTimeout(function () {
                            a.iScrollInstances.forEach(function (t) {
                                t.refresh(), fullpage_api.silentMoveTo(fp_utils.index(h(i)[0]) + 1)
                            })
                        }, 150), fp_utils.css(h(o, t)[0], {
                            height: e + "px"
                        }), s.verticalCentered && fp_utils.css(h(o, t)[0].parentNode, {
                            height: e + "px"
                        })
                    },
                    wrapContent: function () {
                        var t = p.createElement("div");
                        t.className = n;
                        var e = p.createElement("div");
                        return e.className = "fp-scroller", {
                            scrollable: t,
                            scroller: e
                        }
                    }
                };
            return {
                iscrollHandler: a
            }
        }()
}]);