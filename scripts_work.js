(function() {
    const Q = document.createElement("link").relList;
    if (Q && Q.supports && Q.supports("modulepreload")) return;
    for (const X of document.querySelectorAll('link[rel="modulepreload"]')) y(X);
    new MutationObserver(X => {
        for (const w of X)
            if (w.type === "childList")
                for (const W of w.addedNodes) W.tagName === "LINK" && W.rel === "modulepreload" && y(W)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function O(X) {
        const w = {};
        return X.integrity && (w.integrity = X.integrity), X.referrerPolicy && (w.referrerPolicy = X.referrerPolicy), X.crossOrigin === "use-credentials" ? w.credentials = "include" : X.crossOrigin === "anonymous" ? w.credentials = "omit" : w.credentials = "same-origin", w
    }

    function y(X) {
        if (X.ep) return;
        X.ep = !0;
        const w = O(X);
        fetch(X.href, w)
    }
})();

function fr(A) {
    return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A
}
var kc = {
        exports: {}
    },
    ye = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fd;

function Hv() {
    if (Fd) return ye;
    Fd = 1;
    var A = Symbol.for("react.transitional.element"),
        Q = Symbol.for("react.fragment");

    function O(y, X, w) {
        var W = null;
        if (w !== void 0 && (W = "" + w), X.key !== void 0 && (W = "" + X.key), "key" in X) {
            w = {};
            for (var hl in X) hl !== "key" && (w[hl] = X[hl])
        } else w = X;
        return X = w.ref, {
            $$typeof: A,
            type: y,
            key: W,
            ref: X !== void 0 ? X : null,
            props: w
        }
    }
    return ye.Fragment = Q, ye.jsx = O, ye.jsxs = O, ye
}
var Id;

function qv() {
    return Id || (Id = 1, kc.exports = Hv()), kc.exports
}
var z = qv(),
    $c = {
        exports: {}
    },
    C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pd;

function jv() {
    if (Pd) return C;
    Pd = 1;
    var A = Symbol.for("react.transitional.element"),
        Q = Symbol.for("react.portal"),
        O = Symbol.for("react.fragment"),
        y = Symbol.for("react.strict_mode"),
        X = Symbol.for("react.profiler"),
        w = Symbol.for("react.consumer"),
        W = Symbol.for("react.context"),
        hl = Symbol.for("react.forward_ref"),
        R = Symbol.for("react.suspense"),
        E = Symbol.for("react.memo"),
        U = Symbol.for("react.lazy"),
        el = Symbol.iterator;

    function cl(s) {
        return s === null || typeof s != "object" ? null : (s = el && s[el] || s["@@iterator"], typeof s == "function" ? s : null)
    }
    var ql = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        jl = Object.assign,
        rt = {};

    function Bl(s, p, M) {
        this.props = s, this.context = p, this.refs = rt, this.updater = M || ql
    }
    Bl.prototype.isReactComponent = {}, Bl.prototype.setState = function(s, p) {
        if (typeof s != "object" && typeof s != "function" && s != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, p, "setState")
    }, Bl.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate")
    };

    function ra() {}
    ra.prototype = Bl.prototype;

    function zt(s, p, M) {
        this.props = s, this.context = p, this.refs = rt, this.updater = M || ql
    }
    var Ol = zt.prototype = new ra;
    Ol.constructor = zt, jl(Ol, Bl.prototype), Ol.isPureReactComponent = !0;
    var vt = Array.isArray,
        k = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        Vl = Object.prototype.hasOwnProperty;

    function Ll(s, p, M, x, H, $) {
        return M = $.ref, {
            $$typeof: A,
            type: s,
            key: p,
            ref: M !== void 0 ? M : null,
            props: $
        }
    }

    function Kl(s, p) {
        return Ll(s.type, p, void 0, void 0, void 0, s.props)
    }

    function gt(s) {
        return typeof s == "object" && s !== null && s.$$typeof === A
    }

    function Ha(s) {
        var p = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + s.replace(/[=:]/g, function(M) {
            return p[M]
        })
    }
    var xt = /\/+/g;

    function Dl(s, p) {
        return typeof s == "object" && s !== null && s.key != null ? Ha("" + s.key) : p.toString(36)
    }

    function va() {}

    function ha(s) {
        switch (s.status) {
            case "fulfilled":
                return s.value;
            case "rejected":
                throw s.reason;
            default:
                switch (typeof s.status == "string" ? s.then(va, va) : (s.status = "pending", s.then(function(p) {
                        s.status === "pending" && (s.status = "fulfilled", s.value = p)
                    }, function(p) {
                        s.status === "pending" && (s.status = "rejected", s.reason = p)
                    })), s.status) {
                    case "fulfilled":
                        return s.value;
                    case "rejected":
                        throw s.reason
                }
        }
        throw s
    }

    function Ul(s, p, M, x, H) {
        var $ = typeof s;
        ($ === "undefined" || $ === "boolean") && (s = null);
        var G = !1;
        if (s === null) G = !0;
        else switch ($) {
            case "bigint":
            case "string":
            case "number":
                G = !0;
                break;
            case "object":
                switch (s.$$typeof) {
                    case A:
                    case Q:
                        G = !0;
                        break;
                    case U:
                        return G = s._init, Ul(G(s._payload), p, M, x, H)
                }
        }
        if (G) return H = H(s), G = x === "" ? "." + Dl(s, 0) : x, vt(H) ? (M = "", G != null && (M = G.replace(xt, "$&/") + "/"), Ul(H, p, M, "", function(Qt) {
            return Qt
        })) : H != null && (gt(H) && (H = Kl(H, M + (H.key == null || s && s.key === H.key ? "" : ("" + H.key).replace(xt, "$&/") + "/") + G)), p.push(H)), 1;
        G = 0;
        var wl = x === "" ? "." : x + ":";
        if (vt(s))
            for (var sl = 0; sl < s.length; sl++) x = s[sl], $ = wl + Dl(x, sl), G += Ul(x, p, M, $, H);
        else if (sl = cl(s), typeof sl == "function")
            for (s = sl.call(s), sl = 0; !(x = s.next()).done;) x = x.value, $ = wl + Dl(x, sl++), G += Ul(x, p, M, $, H);
        else if ($ === "object") {
            if (typeof s.then == "function") return Ul(ha(s), p, M, x, H);
            throw p = String(s), Error("Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead.")
        }
        return G
    }

    function b(s, p, M) {
        if (s == null) return s;
        var x = [],
            H = 0;
        return Ul(s, x, "", "", function($) {
            return p.call(M, $, H++)
        }), x
    }

    function _(s) {
        if (s._status === -1) {
            var p = s._result;
            p = p(), p.then(function(M) {
                (s._status === 0 || s._status === -1) && (s._status = 1, s._result = M)
            }, function(M) {
                (s._status === 0 || s._status === -1) && (s._status = 2, s._result = M)
            }), s._status === -1 && (s._status = 0, s._result = p)
        }
        if (s._status === 1) return s._result.default;
        throw s._result
    }
    var Y = typeof reportError == "function" ? reportError : function(s) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var p = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
                error: s
            });
            if (!window.dispatchEvent(p)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", s);
            return
        }
        console.error(s)
    };

    function nl() {}
    return C.Children = {
        map: b,
        forEach: function(s, p, M) {
            b(s, function() {
                p.apply(this, arguments)
            }, M)
        },
        count: function(s) {
            var p = 0;
            return b(s, function() {
                p++
            }), p
        },
        toArray: function(s) {
            return b(s, function(p) {
                return p
            }) || []
        },
        only: function(s) {
            if (!gt(s)) throw Error("React.Children.only expected to receive a single React element child.");
            return s
        }
    }, C.Component = Bl, C.Fragment = O, C.Profiler = X, C.PureComponent = zt, C.StrictMode = y, C.Suspense = R, C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, C.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(s) {
            return k.H.useMemoCache(s)
        }
    }, C.cache = function(s) {
        return function() {
            return s.apply(null, arguments)
        }
    }, C.cloneElement = function(s, p, M) {
        if (s == null) throw Error("The argument must be a React element, but you passed " + s + ".");
        var x = jl({}, s.props),
            H = s.key,
            $ = void 0;
        if (p != null)
            for (G in p.ref !== void 0 && ($ = void 0), p.key !== void 0 && (H = "" + p.key), p) !Vl.call(p, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && p.ref === void 0 || (x[G] = p[G]);
        var G = arguments.length - 2;
        if (G === 1) x.children = M;
        else if (1 < G) {
            for (var wl = Array(G), sl = 0; sl < G; sl++) wl[sl] = arguments[sl + 2];
            x.children = wl
        }
        return Ll(s.type, H, void 0, void 0, $, x)
    }, C.createContext = function(s) {
        return s = {
            $$typeof: W,
            _currentValue: s,
            _currentValue2: s,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, s.Provider = s, s.Consumer = {
            $$typeof: w,
            _context: s
        }, s
    }, C.createElement = function(s, p, M) {
        var x, H = {},
            $ = null;
        if (p != null)
            for (x in p.key !== void 0 && ($ = "" + p.key), p) Vl.call(p, x) && x !== "key" && x !== "__self" && x !== "__source" && (H[x] = p[x]);
        var G = arguments.length - 2;
        if (G === 1) H.children = M;
        else if (1 < G) {
            for (var wl = Array(G), sl = 0; sl < G; sl++) wl[sl] = arguments[sl + 2];
            H.children = wl
        }
        if (s && s.defaultProps)
            for (x in G = s.defaultProps, G) H[x] === void 0 && (H[x] = G[x]);
        return Ll(s, $, void 0, void 0, null, H)
    }, C.createRef = function() {
        return {
            current: null
        }
    }, C.forwardRef = function(s) {
        return {
            $$typeof: hl,
            render: s
        }
    }, C.isValidElement = gt, C.lazy = function(s) {
        return {
            $$typeof: U,
            _payload: {
                _status: -1,
                _result: s
            },
            _init: _
        }
    }, C.memo = function(s, p) {
        return {
            $$typeof: E,
            type: s,
            compare: p === void 0 ? null : p
        }
    }, C.startTransition = function(s) {
        var p = k.T,
            M = {};
        k.T = M;
        try {
            var x = s(),
                H = k.S;
            H !== null && H(M, x), typeof x == "object" && x !== null && typeof x.then == "function" && x.then(nl, Y)
        } catch ($) {
            Y($)
        } finally {
            k.T = p
        }
    }, C.unstable_useCacheRefresh = function() {
        return k.H.useCacheRefresh()
    }, C.use = function(s) {
        return k.H.use(s)
    }, C.useActionState = function(s, p, M) {
        return k.H.useActionState(s, p, M)
    }, C.useCallback = function(s, p) {
        return k.H.useCallback(s, p)
    }, C.useContext = function(s) {
        return k.H.useContext(s)
    }, C.useDebugValue = function() {}, C.useDeferredValue = function(s, p) {
        return k.H.useDeferredValue(s, p)
    }, C.useEffect = function(s, p, M) {
        var x = k.H;
        if (typeof M == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return x.useEffect(s, p)
    }, C.useId = function() {
        return k.H.useId()
    }, C.useImperativeHandle = function(s, p, M) {
        return k.H.useImperativeHandle(s, p, M)
    }, C.useInsertionEffect = function(s, p) {
        return k.H.useInsertionEffect(s, p)
    }, C.useLayoutEffect = function(s, p) {
        return k.H.useLayoutEffect(s, p)
    }, C.useMemo = function(s, p) {
        return k.H.useMemo(s, p)
    }, C.useOptimistic = function(s, p) {
        return k.H.useOptimistic(s, p)
    }, C.useReducer = function(s, p, M) {
        return k.H.useReducer(s, p, M)
    }, C.useRef = function(s) {
        return k.H.useRef(s)
    }, C.useState = function(s) {
        return k.H.useState(s)
    }, C.useSyncExternalStore = function(s, p, M) {
        return k.H.useSyncExternalStore(s, p, M)
    }, C.useTransition = function() {
        return k.H.useTransition()
    }, C.version = "19.1.0", C
}
var lr;

function af() {
    return lr || (lr = 1, $c.exports = jv()), $c.exports
}
var at = af();
const Yv = fr(at);
var Fc = {
        exports: {}
    },
    ge = {},
    Ic = {
        exports: {}
    },
    Pc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;

function Bv() {
    return tr || (tr = 1, function(A) {
        function Q(b, _) {
            var Y = b.length;
            b.push(_);
            l: for (; 0 < Y;) {
                var nl = Y - 1 >>> 1,
                    s = b[nl];
                if (0 < X(s, _)) b[nl] = _, b[Y] = s, Y = nl;
                else break l
            }
        }

        function O(b) {
            return b.length === 0 ? null : b[0]
        }

        function y(b) {
            if (b.length === 0) return null;
            var _ = b[0],
                Y = b.pop();
            if (Y !== _) {
                b[0] = Y;
                l: for (var nl = 0, s = b.length, p = s >>> 1; nl < p;) {
                    var M = 2 * (nl + 1) - 1,
                        x = b[M],
                        H = M + 1,
                        $ = b[H];
                    if (0 > X(x, Y)) H < s && 0 > X($, x) ? (b[nl] = $, b[H] = Y, nl = H) : (b[nl] = x, b[M] = Y, nl = M);
                    else if (H < s && 0 > X($, Y)) b[nl] = $, b[H] = Y, nl = H;
                    else break l
                }
            }
            return _
        }

        function X(b, _) {
            var Y = b.sortIndex - _.sortIndex;
            return Y !== 0 ? Y : b.id - _.id
        }
        if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var w = performance;
            A.unstable_now = function() {
                return w.now()
            }
        } else {
            var W = Date,
                hl = W.now();
            A.unstable_now = function() {
                return W.now() - hl
            }
        }
        var R = [],
            E = [],
            U = 1,
            el = null,
            cl = 3,
            ql = !1,
            jl = !1,
            rt = !1,
            Bl = !1,
            ra = typeof setTimeout == "function" ? setTimeout : null,
            zt = typeof clearTimeout == "function" ? clearTimeout : null,
            Ol = typeof setImmediate < "u" ? setImmediate : null;

        function vt(b) {
            for (var _ = O(E); _ !== null;) {
                if (_.callback === null) y(E);
                else if (_.startTime <= b) y(E), _.sortIndex = _.expirationTime, Q(R, _);
                else break;
                _ = O(E)
            }
        }

        function k(b) {
            if (rt = !1, vt(b), !jl)
                if (O(R) !== null) jl = !0, Vl || (Vl = !0, Dl());
                else {
                    var _ = O(E);
                    _ !== null && Ul(k, _.startTime - b)
                }
        }
        var Vl = !1,
            Ll = -1,
            Kl = 5,
            gt = -1;

        function Ha() {
            return Bl ? !0 : !(A.unstable_now() - gt < Kl)
        }

        function xt() {
            if (Bl = !1, Vl) {
                var b = A.unstable_now();
                gt = b;
                var _ = !0;
                try {
                    l: {
                        jl = !1,
                        rt && (rt = !1, zt(Ll), Ll = -1),
                        ql = !0;
                        var Y = cl;
                        try {
                            t: {
                                for (vt(b), el = O(R); el !== null && !(el.expirationTime > b && Ha());) {
                                    var nl = el.callback;
                                    if (typeof nl == "function") {
                                        el.callback = null, cl = el.priorityLevel;
                                        var s = nl(el.expirationTime <= b);
                                        if (b = A.unstable_now(), typeof s == "function") {
                                            el.callback = s, vt(b), _ = !0;
                                            break t
                                        }
                                        el === O(R) && y(R), vt(b)
                                    } else y(R);
                                    el = O(R)
                                }
                                if (el !== null) _ = !0;
                                else {
                                    var p = O(E);
                                    p !== null && Ul(k, p.startTime - b), _ = !1
                                }
                            }
                            break l
                        }
                        finally {
                            el = null, cl = Y, ql = !1
                        }
                        _ = void 0
                    }
                }
                finally {
                    _ ? Dl() : Vl = !1
                }
            }
        }
        var Dl;
        if (typeof Ol == "function") Dl = function() {
            Ol(xt)
        };
        else if (typeof MessageChannel < "u") {
            var va = new MessageChannel,
                ha = va.port2;
            va.port1.onmessage = xt, Dl = function() {
                ha.postMessage(null)
            }
        } else Dl = function() {
            ra(xt, 0)
        };

        function Ul(b, _) {
            Ll = ra(function() {
                b(A.unstable_now())
            }, _)
        }
        A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(b) {
            b.callback = null
        }, A.unstable_forceFrameRate = function(b) {
            0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Kl = 0 < b ? Math.floor(1e3 / b) : 5
        }, A.unstable_getCurrentPriorityLevel = function() {
            return cl
        }, A.unstable_next = function(b) {
            switch (cl) {
                case 1:
                case 2:
                case 3:
                    var _ = 3;
                    break;
                default:
                    _ = cl
            }
            var Y = cl;
            cl = _;
            try {
                return b()
            } finally {
                cl = Y
            }
        }, A.unstable_requestPaint = function() {
            Bl = !0
        }, A.unstable_runWithPriority = function(b, _) {
            switch (b) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    b = 3
            }
            var Y = cl;
            cl = b;
            try {
                return _()
            } finally {
                cl = Y
            }
        }, A.unstable_scheduleCallback = function(b, _, Y) {
            var nl = A.unstable_now();
            switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? nl + Y : nl) : Y = nl, b) {
                case 1:
                    var s = -1;
                    break;
                case 2:
                    s = 250;
                    break;
                case 5:
                    s = 1073741823;
                    break;
                case 4:
                    s = 1e4;
                    break;
                default:
                    s = 5e3
            }
            return s = Y + s, b = {
                id: U++,
                callback: _,
                priorityLevel: b,
                startTime: Y,
                expirationTime: s,
                sortIndex: -1
            }, Y > nl ? (b.sortIndex = Y, Q(E, b), O(R) === null && b === O(E) && (rt ? (zt(Ll), Ll = -1) : rt = !0, Ul(k, Y - nl))) : (b.sortIndex = s, Q(R, b), jl || ql || (jl = !0, Vl || (Vl = !0, Dl()))), b
        }, A.unstable_shouldYield = Ha, A.unstable_wrapCallback = function(b) {
            var _ = cl;
            return function() {
                var Y = cl;
                cl = _;
                try {
                    return b.apply(this, arguments)
                } finally {
                    cl = Y
                }
            }
        }
    }(Pc)), Pc
}
var ar;

function Gv() {
    return ar || (ar = 1, Ic.exports = Bv()), Ic.exports
}
var lf = {
        exports: {}
    },
    Hl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;

function Xv() {
    if (ur) return Hl;
    ur = 1;
    var A = af();

    function Q(R) {
        var E = "https://react.dev/errors/" + R;
        if (1 < arguments.length) {
            E += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var U = 2; U < arguments.length; U++) E += "&args[]=" + encodeURIComponent(arguments[U])
        }
        return "Minified React error #" + R + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function O() {}
    var y = {
            d: {
                f: O,
                r: function() {
                    throw Error(Q(522))
                },
                D: O,
                C: O,
                L: O,
                m: O,
                X: O,
                S: O,
                M: O
            },
            p: 0,
            findDOMNode: null
        },
        X = Symbol.for("react.portal");

    function w(R, E, U) {
        var el = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: X,
            key: el == null ? null : "" + el,
            children: R,
            containerInfo: E,
            implementation: U
        }
    }
    var W = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function hl(R, E) {
        if (R === "font") return "";
        if (typeof E == "string") return E === "use-credentials" ? E : ""
    }
    return Hl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, Hl.createPortal = function(R, E) {
        var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11) throw Error(Q(299));
        return w(R, E, null, U)
    }, Hl.flushSync = function(R) {
        var E = W.T,
            U = y.p;
        try {
            if (W.T = null, y.p = 2, R) return R()
        } finally {
            W.T = E, y.p = U, y.d.f()
        }
    }, Hl.preconnect = function(R, E) {
        typeof R == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, y.d.C(R, E))
    }, Hl.prefetchDNS = function(R) {
        typeof R == "string" && y.d.D(R)
    }, Hl.preinit = function(R, E) {
        if (typeof R == "string" && E && typeof E.as == "string") {
            var U = E.as,
                el = hl(U, E.crossOrigin),
                cl = typeof E.integrity == "string" ? E.integrity : void 0,
                ql = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
            U === "style" ? y.d.S(R, typeof E.precedence == "string" ? E.precedence : void 0, {
                crossOrigin: el,
                integrity: cl,
                fetchPriority: ql
            }) : U === "script" && y.d.X(R, {
                crossOrigin: el,
                integrity: cl,
                fetchPriority: ql,
                nonce: typeof E.nonce == "string" ? E.nonce : void 0
            })
        }
    }, Hl.preinitModule = function(R, E) {
        if (typeof R == "string")
            if (typeof E == "object" && E !== null) {
                if (E.as == null || E.as === "script") {
                    var U = hl(E.as, E.crossOrigin);
                    y.d.M(R, {
                        crossOrigin: U,
                        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                        nonce: typeof E.nonce == "string" ? E.nonce : void 0
                    })
                }
            } else E == null && y.d.M(R)
    }, Hl.preload = function(R, E) {
        if (typeof R == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
            var U = E.as,
                el = hl(U, E.crossOrigin);
            y.d.L(R, U, {
                crossOrigin: el,
                integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                nonce: typeof E.nonce == "string" ? E.nonce : void 0,
                type: typeof E.type == "string" ? E.type : void 0,
                fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
                referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
                imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
                imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
                media: typeof E.media == "string" ? E.media : void 0
            })
        }
    }, Hl.preloadModule = function(R, E) {
        if (typeof R == "string")
            if (E) {
                var U = hl(E.as, E.crossOrigin);
                y.d.m(R, {
                    as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
                    crossOrigin: U,
                    integrity: typeof E.integrity == "string" ? E.integrity : void 0
                })
            } else y.d.m(R)
    }, Hl.requestFormReset = function(R) {
        y.d.r(R)
    }, Hl.unstable_batchedUpdates = function(R, E) {
        return R(E)
    }, Hl.useFormState = function(R, E, U) {
        return W.H.useFormState(R, E, U)
    }, Hl.useFormStatus = function() {
        return W.H.useHostTransitionStatus()
    }, Hl.version = "19.1.0", Hl
}
var er;

function Cv() {
    if (er) return lf.exports;
    er = 1;

    function A() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)
        } catch (Q) {
            console.error(Q)
        }
    }
    return A(), lf.exports = Xv(), lf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;

function Qv() {
    if (nr) return ge;
    nr = 1;
    var A = Gv(),
        Q = af(),
        O = Cv();

    function y(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function X(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }

    function w(l) {
        var t = l,
            a = l;
        if (l.alternate)
            for (; t.return;) t = t.return;
        else {
            l = t;
            do t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return; while (l)
        }
        return t.tag === 3 ? a : null
    }

    function W(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function hl(l) {
        if (w(l) !== l) throw Error(y(188))
    }

    function R(l) {
        var t = l.alternate;
        if (!t) {
            if (t = w(l), t === null) throw Error(y(188));
            return t !== l ? null : l
        }
        for (var a = l, u = t;;) {
            var e = a.return;
            if (e === null) break;
            var n = e.alternate;
            if (n === null) {
                if (u = e.return, u !== null) {
                    a = u;
                    continue
                }
                break
            }
            if (e.child === n.child) {
                for (n = e.child; n;) {
                    if (n === a) return hl(e), l;
                    if (n === u) return hl(e), t;
                    n = n.sibling
                }
                throw Error(y(188))
            }
            if (a.return !== u.return) a = e, u = n;
            else {
                for (var i = !1, c = e.child; c;) {
                    if (c === a) {
                        i = !0, a = e, u = n;
                        break
                    }
                    if (c === u) {
                        i = !0, u = e, a = n;
                        break
                    }
                    c = c.sibling
                }
                if (!i) {
                    for (c = n.child; c;) {
                        if (c === a) {
                            i = !0, a = n, u = e;
                            break
                        }
                        if (c === u) {
                            i = !0, u = n, a = e;
                            break
                        }
                        c = c.sibling
                    }
                    if (!i) throw Error(y(189))
                }
            }
            if (a.alternate !== u) throw Error(y(190))
        }
        if (a.tag !== 3) throw Error(y(188));
        return a.stateNode.current === a ? l : t
    }

    function E(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l;
        for (l = l.child; l !== null;) {
            if (t = E(l), t !== null) return t;
            l = l.sibling
        }
        return null
    }
    var U = Object.assign,
        el = Symbol.for("react.element"),
        cl = Symbol.for("react.transitional.element"),
        ql = Symbol.for("react.portal"),
        jl = Symbol.for("react.fragment"),
        rt = Symbol.for("react.strict_mode"),
        Bl = Symbol.for("react.profiler"),
        ra = Symbol.for("react.provider"),
        zt = Symbol.for("react.consumer"),
        Ol = Symbol.for("react.context"),
        vt = Symbol.for("react.forward_ref"),
        k = Symbol.for("react.suspense"),
        Vl = Symbol.for("react.suspense_list"),
        Ll = Symbol.for("react.memo"),
        Kl = Symbol.for("react.lazy"),
        gt = Symbol.for("react.activity"),
        Ha = Symbol.for("react.memo_cache_sentinel"),
        xt = Symbol.iterator;

    function Dl(l) {
        return l === null || typeof l != "object" ? null : (l = xt && l[xt] || l["@@iterator"], typeof l == "function" ? l : null)
    }
    var va = Symbol.for("react.client.reference");

    function ha(l) {
        if (l == null) return null;
        if (typeof l == "function") return l.$$typeof === va ? null : l.displayName || l.name || null;
        if (typeof l == "string") return l;
        switch (l) {
            case jl:
                return "Fragment";
            case Bl:
                return "Profiler";
            case rt:
                return "StrictMode";
            case k:
                return "Suspense";
            case Vl:
                return "SuspenseList";
            case gt:
                return "Activity"
        }
        if (typeof l == "object") switch (l.$$typeof) {
            case ql:
                return "Portal";
            case Ol:
                return (l.displayName || "Context") + ".Provider";
            case zt:
                return (l._context.displayName || "Context") + ".Consumer";
            case vt:
                var t = l.render;
                return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
            case Ll:
                return t = l.displayName || null, t !== null ? t : ha(l.type) || "Memo";
            case Kl:
                t = l._payload, l = l._init;
                try {
                    return ha(l(t))
                } catch {}
        }
        return null
    }
    var Ul = Array.isArray,
        b = Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        _ = O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Y = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        nl = [],
        s = -1;

    function p(l) {
        return {
            current: l
        }
    }

    function M(l) {
        0 > s || (l.current = nl[s], nl[s] = null, s--)
    }

    function x(l, t) {
        s++, nl[s] = l.current, l.current = t
    }
    var H = p(null),
        $ = p(null),
        G = p(null),
        wl = p(null);

    function sl(l, t) {
        switch (x(G, t), x($, l), x(H, null), t.nodeType) {
            case 9:
            case 11:
                l = (l = t.documentElement) && (l = l.namespaceURI) ? xd(l) : 0;
                break;
            default:
                if (l = t.tagName, t = t.namespaceURI) t = xd(t), l = _d(t, l);
                else switch (l) {
                    case "svg":
                        l = 1;
                        break;
                    case "math":
                        l = 2;
                        break;
                    default:
                        l = 0
                }
        }
        M(H), x(H, l)
    }

    function Qt() {
        M(H), M($), M(G)
    }

    function qn(l) {
        l.memoizedState !== null && x(wl, l);
        var t = H.current,
            a = _d(t, l.type);
        t !== a && (x($, l), x(H, a))
    }

    function be(l) {
        $.current === l && (M(H), M($)), wl.current === l && (M(wl), de._currentValue = Y)
    }
    var jn = Object.prototype.hasOwnProperty,
        Yn = A.unstable_scheduleCallback,
        Bn = A.unstable_cancelCallback,
        dr = A.unstable_shouldYield,
        rr = A.unstable_requestPaint,
        bt = A.unstable_now,
        vr = A.unstable_getCurrentPriorityLevel,
        uf = A.unstable_ImmediatePriority,
        ef = A.unstable_UserBlockingPriority,
        Se = A.unstable_NormalPriority,
        hr = A.unstable_LowPriority,
        nf = A.unstable_IdlePriority,
        mr = A.log,
        yr = A.unstable_setDisableYieldValue,
        Su = null,
        Jl = null;

    function Zt(l) {
        if (typeof mr == "function" && yr(l), Jl && typeof Jl.setStrictMode == "function") try {
            Jl.setStrictMode(Su, l)
        } catch {}
    }
    var Wl = Math.clz32 ? Math.clz32 : Sr,
        gr = Math.log,
        br = Math.LN2;

    function Sr(l) {
        return l >>>= 0, l === 0 ? 32 : 31 - (gr(l) / br | 0) | 0
    }
    var Te = 256,
        Ae = 4194304;

    function ma(l) {
        var t = l & 42;
        if (t !== 0) return t;
        switch (l & -l) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return l & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return l & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return l
        }
    }

    function Ee(l, t, a) {
        var u = l.pendingLanes;
        if (u === 0) return 0;
        var e = 0,
            n = l.suspendedLanes,
            i = l.pingedLanes;
        l = l.warmLanes;
        var c = u & 134217727;
        return c !== 0 ? (u = c & ~n, u !== 0 ? e = ma(u) : (i &= c, i !== 0 ? e = ma(i) : a || (a = c & ~l, a !== 0 && (e = ma(a))))) : (c = u & ~n, c !== 0 ? e = ma(c) : i !== 0 ? e = ma(i) : a || (a = u & ~l, a !== 0 && (e = ma(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e
    }

    function Tu(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }

    function Tr(l, t) {
        switch (l) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function cf() {
        var l = Te;
        return Te <<= 1, (Te & 4194048) === 0 && (Te = 256), l
    }

    function ff() {
        var l = Ae;
        return Ae <<= 1, (Ae & 62914560) === 0 && (Ae = 4194304), l
    }

    function Gn(l) {
        for (var t = [], a = 0; 31 > a; a++) t.push(l);
        return t
    }

    function Au(l, t) {
        l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
    }

    function Ar(l, t, a, u, e, n) {
        var i = l.pendingLanes;
        l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
        var c = l.entanglements,
            f = l.expirationTimes,
            v = l.hiddenUpdates;
        for (a = i & ~a; 0 < a;) {
            var g = 31 - Wl(a),
                T = 1 << g;
            c[g] = 0, f[g] = -1;
            var h = v[g];
            if (h !== null)
                for (v[g] = null, g = 0; g < h.length; g++) {
                    var m = h[g];
                    m !== null && (m.lane &= -536870913)
                }
            a &= ~T
        }
        u !== 0 && sf(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t))
    }

    function sf(l, t, a) {
        l.pendingLanes |= t, l.suspendedLanes &= ~t;
        var u = 31 - Wl(t);
        l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 4194090
    }

    function of(l, t) {
        var a = l.entangledLanes |= t;
        for (l = l.entanglements; a;) {
            var u = 31 - Wl(a),
                e = 1 << u;
            e & t | l[u] & t && (l[u] |= t), a &= ~e
        }
    }

    function Xn(l) {
        switch (l) {
            case 2:
                l = 1;
                break;
            case 8:
                l = 4;
                break;
            case 32:
                l = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                l = 128;
                break;
            case 268435456:
                l = 134217728;
                break;
            default:
                l = 0
        }
        return l
    }

    function Cn(l) {
        return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function df() {
        var l = _.p;
        return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Kd(l.type))
    }

    function Er(l, t) {
        var a = _.p;
        try {
            return _.p = l, t()
        } finally {
            _.p = a
        }
    }
    var Vt = Math.random().toString(36).slice(2),
        Nl = "__reactFiber$" + Vt,
        Gl = "__reactProps$" + Vt,
        qa = "__reactContainer$" + Vt,
        Qn = "__reactEvents$" + Vt,
        pr = "__reactListeners$" + Vt,
        zr = "__reactHandles$" + Vt,
        rf = "__reactResources$" + Vt,
        Eu = "__reactMarker$" + Vt;

    function Zn(l) {
        delete l[Nl], delete l[Gl], delete l[Qn], delete l[pr], delete l[zr]
    }

    function ja(l) {
        var t = l[Nl];
        if (t) return t;
        for (var a = l.parentNode; a;) {
            if (t = a[qa] || a[Nl]) {
                if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
                    for (l = Ud(l); l !== null;) {
                        if (a = l[Nl]) return a;
                        l = Ud(l)
                    }
                return t
            }
            l = a, a = l.parentNode
        }
        return null
    }

    function Ya(l) {
        if (l = l[Nl] || l[qa]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return l
        }
        return null
    }

    function pu(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
        throw Error(y(33))
    }

    function Ba(l) {
        var t = l[rf];
        return t || (t = l[rf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function Al(l) {
        l[Eu] = !0
    }
    var vf = new Set,
        hf = {};

    function ya(l, t) {
        Ga(l, t), Ga(l + "Capture", t)
    }

    function Ga(l, t) {
        for (hf[l] = t, l = 0; l < t.length; l++) vf.add(t[l])
    }
    var xr = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        mf = {},
        yf = {};

    function _r(l) {
        return jn.call(yf, l) ? !0 : jn.call(mf, l) ? !1 : xr.test(l) ? yf[l] = !0 : (mf[l] = !0, !1)
    }

    function pe(l, t, a) {
        if (_r(t))
            if (a === null) l.removeAttribute(t);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        l.removeAttribute(t);
                        return;
                    case "boolean":
                        var u = t.toLowerCase().slice(0, 5);
                        if (u !== "data-" && u !== "aria-") {
                            l.removeAttribute(t);
                            return
                        }
                }
                l.setAttribute(t, "" + a)
            }
    }

    function ze(l, t, a) {
        if (a === null) l.removeAttribute(t);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    l.removeAttribute(t);
                    return
            }
            l.setAttribute(t, "" + a)
        }
    }

    function _t(l, t, a, u) {
        if (u === null) l.removeAttribute(a);
        else {
            switch (typeof u) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    l.removeAttribute(a);
                    return
            }
            l.setAttributeNS(t, a, "" + u)
        }
    }
    var Vn, gf;

    function Xa(l) {
        if (Vn === void 0) try {
            throw Error()
        } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/);
            Vn = t && t[1] || "", gf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Vn + l + gf
    }
    var Ln = !1;

    function Kn(l, t) {
        if (!l || Ln) return "";
        Ln = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var u = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var T = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(T.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(T, [])
                                } catch (m) {
                                    var h = m
                                }
                                Reflect.construct(l, [], T)
                            } else {
                                try {
                                    T.call()
                                } catch (m) {
                                    h = m
                                }
                                l.call(T.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (m) {
                                h = m
                            }(T = l()) && typeof T.catch == "function" && T.catch(function() {})
                        }
                    } catch (m) {
                        if (m && h && typeof m.stack == "string") return [m.stack, h.stack]
                    }
                    return [null, null]
                }
            };
            u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var e = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
            e && e.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = u.DetermineComponentFrameRoot(),
                i = n[0],
                c = n[1];
            if (i && c) {
                var f = i.split(`
`),
                    v = c.split(`
`);
                for (e = u = 0; u < f.length && !f[u].includes("DetermineComponentFrameRoot");) u++;
                for (; e < v.length && !v[e].includes("DetermineComponentFrameRoot");) e++;
                if (u === f.length || e === v.length)
                    for (u = f.length - 1, e = v.length - 1; 1 <= u && 0 <= e && f[u] !== v[e];) e--;
                for (; 1 <= u && 0 <= e; u--, e--)
                    if (f[u] !== v[e]) {
                        if (u !== 1 || e !== 1)
                            do
                                if (u--, e--, 0 > e || f[u] !== v[e]) {
                                    var g = `
` + f[u].replace(" at new ", " at ");
                                    return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g
                                } while (1 <= u && 0 <= e);
                        break
                    }
            }
        } finally {
            Ln = !1, Error.prepareStackTrace = a
        }
        return (a = l ? l.displayName || l.name : "") ? Xa(a) : ""
    }

    function Mr(l) {
        switch (l.tag) {
            case 26:
            case 27:
            case 5:
                return Xa(l.type);
            case 16:
                return Xa("Lazy");
            case 13:
                return Xa("Suspense");
            case 19:
                return Xa("SuspenseList");
            case 0:
            case 15:
                return Kn(l.type, !1);
            case 11:
                return Kn(l.type.render, !1);
            case 1:
                return Kn(l.type, !0);
            case 31:
                return Xa("Activity");
            default:
                return ""
        }
    }

    function bf(l) {
        try {
            var t = "";
            do t += Mr(l), l = l.return; while (l);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }

    function ut(l) {
        switch (typeof l) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return l;
            case "object":
                return l;
            default:
                return ""
        }
    }

    function Sf(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function Or(l) {
        var t = Sf(l) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
            u = "" + l[t];
        if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var e = a.get,
                n = a.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return e.call(this)
                },
                set: function(i) {
                    u = "" + i, n.call(this, i)
                }
            }), Object.defineProperty(l, t, {
                enumerable: a.enumerable
            }), {
                getValue: function() {
                    return u
                },
                setValue: function(i) {
                    u = "" + i
                },
                stopTracking: function() {
                    l._valueTracker = null, delete l[t]
                }
            }
        }
    }

    function xe(l) {
        l._valueTracker || (l._valueTracker = Or(l))
    }

    function Tf(l) {
        if (!l) return !1;
        var t = l._valueTracker;
        if (!t) return !0;
        var a = t.getValue(),
            u = "";
        return l && (u = Sf(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1
    }

    function _e(l) {
        if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var Dr = /[\n"\\]/g;

    function et(l) {
        return l.replace(Dr, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function wn(l, t, a, u, e, n, i, c) {
        l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ut(t)) : l.value !== "" + ut(t) && (l.value = "" + ut(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? Jn(l, i, ut(t)) : a != null ? Jn(l, i, ut(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ut(c) : l.removeAttribute("name")
    }

    function Af(l, t, a, u, e, n, i, c) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) return;
            a = a != null ? "" + ut(a) : "", t = t != null ? "" + ut(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t
        }
        u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i)
    }

    function Jn(l, t, a) {
        t === "number" && _e(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a)
    }

    function Ca(l, t, a, u) {
        if (l = l.options, t) {
            t = {};
            for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
            for (a = 0; a < l.length; a++) e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0)
        } else {
            for (a = "" + ut(a), t = null, e = 0; e < l.length; e++) {
                if (l[e].value === a) {
                    l[e].selected = !0, u && (l[e].defaultSelected = !0);
                    return
                }
                t !== null || l[e].disabled || (t = l[e])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Ef(l, t, a) {
        if (t != null && (t = "" + ut(t), t !== l.value && (l.value = t), a == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = a != null ? "" + ut(a) : ""
    }

    function pf(l, t, a, u) {
        if (t == null) {
            if (u != null) {
                if (a != null) throw Error(y(92));
                if (Ul(u)) {
                    if (1 < u.length) throw Error(y(93));
                    u = u[0]
                }
                a = u
            }
            a == null && (a = ""), t = a
        }
        a = ut(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u)
    }

    function Qa(l, t) {
        if (t) {
            var a = l.firstChild;
            if (a && a === l.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var Ur = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function zf(l, t, a) {
        var u = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Ur.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px"
    }

    function xf(l, t, a) {
        if (t != null && typeof t != "object") throw Error(y(62));
        if (l = l.style, a != null) {
            for (var u in a) !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
            for (var e in t) u = t[e], t.hasOwnProperty(e) && a[e] !== u && zf(l, e, u)
        } else
            for (var n in t) t.hasOwnProperty(n) && zf(l, n, t[n])
    }

    function Wn(l) {
        if (l.indexOf("-") === -1) return !1;
        switch (l) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Nr = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        Rr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Me(l) {
        return Rr.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    var kn = null;

    function $n(l) {
        return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
    }
    var Za = null,
        Va = null;

    function _f(l) {
        var t = Ya(l);
        if (t && (l = t.stateNode)) {
            var a = l[Gl] || null;
            l: switch (l = t.stateNode, t.type) {
                case "input":
                    if (wn(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                        for (a = l; a.parentNode;) a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + et("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
                            var u = a[t];
                            if (u !== l && u.form === l.form) {
                                var e = u[Gl] || null;
                                if (!e) throw Error(y(90));
                                wn(u, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name)
                            }
                        }
                        for (t = 0; t < a.length; t++) u = a[t], u.form === l.form && Tf(u)
                    }
                    break l;
                case "textarea":
                    Ef(l, a.value, a.defaultValue);
                    break l;
                case "select":
                    t = a.value, t != null && Ca(l, !!a.multiple, t, !1)
            }
        }
    }
    var Fn = !1;

    function Mf(l, t, a) {
        if (Fn) return l(t, a);
        Fn = !0;
        try {
            var u = l(t);
            return u
        } finally {
            if (Fn = !1, (Za !== null || Va !== null) && (vn(), Za && (t = Za, l = Va, Va = Za = null, _f(t), l)))
                for (t = 0; t < l.length; t++) _f(l[t])
        }
    }

    function zu(l, t) {
        var a = l.stateNode;
        if (a === null) return null;
        var u = a[Gl] || null;
        if (u === null) return null;
        a = u[t];
        l: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
                break l;
            default:
                l = !1
        }
        if (l) return null;
        if (a && typeof a != "function") throw Error(y(231, t, typeof a));
        return a
    }
    var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        In = !1;
    if (Mt) try {
        var xu = {};
        Object.defineProperty(xu, "passive", {
            get: function() {
                In = !0
            }
        }), window.addEventListener("test", xu, xu), window.removeEventListener("test", xu, xu)
    } catch {
        In = !1
    }
    var Lt = null,
        Pn = null,
        Oe = null;

    function Of() {
        if (Oe) return Oe;
        var l, t = Pn,
            a = t.length,
            u, e = "value" in Lt ? Lt.value : Lt.textContent,
            n = e.length;
        for (l = 0; l < a && t[l] === e[l]; l++);
        var i = a - l;
        for (u = 1; u <= i && t[a - u] === e[n - u]; u++);
        return Oe = e.slice(l, 1 < u ? 1 - u : void 0)
    }

    function De(l) {
        var t = l.keyCode;
        return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
    }

    function Ue() {
        return !0
    }

    function Df() {
        return !1
    }

    function Xl(l) {
        function t(a, u, e, n, i) {
            this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
            for (var c in l) l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ue : Df, this.isPropagationStopped = Df, this
        }
        return U(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ue)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ue)
            },
            persist: function() {},
            isPersistent: Ue
        }), t
    }
    var ga = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(l) {
                return l.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Ne = Xl(ga),
        _u = U({}, ga, {
            view: 0,
            detail: 0
        }),
        Hr = Xl(_u),
        li, ti, Mu, Re = U({}, _u, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: ui,
            button: 0,
            buttons: 0,
            relatedTarget: function(l) {
                return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
            },
            movementX: function(l) {
                return "movementX" in l ? l.movementX : (l !== Mu && (Mu && l.type === "mousemove" ? (li = l.screenX - Mu.screenX, ti = l.screenY - Mu.screenY) : ti = li = 0, Mu = l), li)
            },
            movementY: function(l) {
                return "movementY" in l ? l.movementY : ti
            }
        }),
        Uf = Xl(Re),
        qr = U({}, Re, {
            dataTransfer: 0
        }),
        jr = Xl(qr),
        Yr = U({}, _u, {
            relatedTarget: 0
        }),
        ai = Xl(Yr),
        Br = U({}, ga, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Gr = Xl(Br),
        Xr = U({}, ga, {
            clipboardData: function(l) {
                return "clipboardData" in l ? l.clipboardData : window.clipboardData
            }
        }),
        Cr = Xl(Xr),
        Qr = U({}, ga, {
            data: 0
        }),
        Nf = Xl(Qr),
        Zr = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Vr = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Lr = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Kr(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = Lr[l]) ? !!t[l] : !1
    }

    function ui() {
        return Kr
    }
    var wr = U({}, _u, {
            key: function(l) {
                if (l.key) {
                    var t = Zr[l.key] || l.key;
                    if (t !== "Unidentified") return t
                }
                return l.type === "keypress" ? (l = De(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Vr[l.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ui,
            charCode: function(l) {
                return l.type === "keypress" ? De(l) : 0
            },
            keyCode: function(l) {
                return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            },
            which: function(l) {
                return l.type === "keypress" ? De(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            }
        }),
        Jr = Xl(wr),
        Wr = U({}, Re, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Rf = Xl(Wr),
        kr = U({}, _u, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ui
        }),
        $r = Xl(kr),
        Fr = U({}, ga, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Ir = Xl(Fr),
        Pr = U({}, Re, {
            deltaX: function(l) {
                return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
            },
            deltaY: function(l) {
                return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        l0 = Xl(Pr),
        t0 = U({}, ga, {
            newState: 0,
            oldState: 0
        }),
        a0 = Xl(t0),
        u0 = [9, 13, 27, 32],
        ei = Mt && "CompositionEvent" in window,
        Ou = null;
    Mt && "documentMode" in document && (Ou = document.documentMode);
    var e0 = Mt && "TextEvent" in window && !Ou,
        Hf = Mt && (!ei || Ou && 8 < Ou && 11 >= Ou),
        qf = " ",
        jf = !1;

    function Yf(l, t) {
        switch (l) {
            case "keyup":
                return u0.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Bf(l) {
        return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
    }
    var La = !1;

    function n0(l, t) {
        switch (l) {
            case "compositionend":
                return Bf(t);
            case "keypress":
                return t.which !== 32 ? null : (jf = !0, qf);
            case "textInput":
                return l = t.data, l === qf && jf ? null : l;
            default:
                return null
        }
    }

    function i0(l, t) {
        if (La) return l === "compositionend" || !ei && Yf(l, t) ? (l = Of(), Oe = Pn = Lt = null, La = !1, l) : null;
        switch (l) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Hf && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var c0 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Gf(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!c0[l.type] : t === "textarea"
    }

    function Xf(l, t, a, u) {
        Za ? Va ? Va.push(u) : Va = [u] : Za = u, t = Sn(t, "onChange"), 0 < t.length && (a = new Ne("onChange", "change", null, a, u), l.push({
            event: a,
            listeners: t
        }))
    }
    var Du = null,
        Uu = null;

    function f0(l) {
        Td(l, 0)
    }

    function He(l) {
        var t = pu(l);
        if (Tf(t)) return l
    }

    function Cf(l, t) {
        if (l === "change") return t
    }
    var Qf = !1;
    if (Mt) {
        var ni;
        if (Mt) {
            var ii = "oninput" in document;
            if (!ii) {
                var Zf = document.createElement("div");
                Zf.setAttribute("oninput", "return;"), ii = typeof Zf.oninput == "function"
            }
            ni = ii
        } else ni = !1;
        Qf = ni && (!document.documentMode || 9 < document.documentMode)
    }

    function Vf() {
        Du && (Du.detachEvent("onpropertychange", Lf), Uu = Du = null)
    }

    function Lf(l) {
        if (l.propertyName === "value" && He(Uu)) {
            var t = [];
            Xf(t, Uu, l, $n(l)), Mf(f0, t)
        }
    }

    function s0(l, t, a) {
        l === "focusin" ? (Vf(), Du = t, Uu = a, Du.attachEvent("onpropertychange", Lf)) : l === "focusout" && Vf()
    }

    function o0(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown") return He(Uu)
    }

    function d0(l, t) {
        if (l === "click") return He(t)
    }

    function r0(l, t) {
        if (l === "input" || l === "change") return He(t)
    }

    function v0(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var kl = typeof Object.is == "function" ? Object.is : v0;

    function Nu(l, t) {
        if (kl(l, t)) return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
        var a = Object.keys(l),
            u = Object.keys(t);
        if (a.length !== u.length) return !1;
        for (u = 0; u < a.length; u++) {
            var e = a[u];
            if (!jn.call(t, e) || !kl(l[e], t[e])) return !1
        }
        return !0
    }

    function Kf(l) {
        for (; l && l.firstChild;) l = l.firstChild;
        return l
    }

    function wf(l, t) {
        var a = Kf(l);
        l = 0;
        for (var u; a;) {
            if (a.nodeType === 3) {
                if (u = l + a.textContent.length, l <= t && u >= t) return {
                    node: a,
                    offset: t - l
                };
                l = u
            }
            l: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break l
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Kf(a)
        }
    }

    function Jf(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jf(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Wf(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = _e(l.document); t instanceof l.HTMLIFrameElement;) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) l = t.contentWindow;
            else break;
            t = _e(l.document)
        }
        return t
    }

    function ci(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var h0 = Mt && "documentMode" in document && 11 >= document.documentMode,
        Ka = null,
        fi = null,
        Ru = null,
        si = !1;

    function kf(l, t, a) {
        var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        si || Ka == null || Ka !== _e(u) || (u = Ka, "selectionStart" in u && ci(u) ? u = {
            start: u.selectionStart,
            end: u.selectionEnd
        } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset
        }), Ru && Nu(Ru, u) || (Ru = u, u = Sn(fi, "onSelect"), 0 < u.length && (t = new Ne("onSelect", "select", null, t, a), l.push({
            event: t,
            listeners: u
        }), t.target = Ka)))
    }

    function ba(l, t) {
        var a = {};
        return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a
    }
    var wa = {
            animationend: ba("Animation", "AnimationEnd"),
            animationiteration: ba("Animation", "AnimationIteration"),
            animationstart: ba("Animation", "AnimationStart"),
            transitionrun: ba("Transition", "TransitionRun"),
            transitionstart: ba("Transition", "TransitionStart"),
            transitioncancel: ba("Transition", "TransitionCancel"),
            transitionend: ba("Transition", "TransitionEnd")
        },
        oi = {},
        $f = {};
    Mt && ($f = document.createElement("div").style, "AnimationEvent" in window || (delete wa.animationend.animation, delete wa.animationiteration.animation, delete wa.animationstart.animation), "TransitionEvent" in window || delete wa.transitionend.transition);

    function Sa(l) {
        if (oi[l]) return oi[l];
        if (!wa[l]) return l;
        var t = wa[l],
            a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in $f) return oi[l] = t[a];
        return l
    }
    var Ff = Sa("animationend"),
        If = Sa("animationiteration"),
        Pf = Sa("animationstart"),
        m0 = Sa("transitionrun"),
        y0 = Sa("transitionstart"),
        g0 = Sa("transitioncancel"),
        ls = Sa("transitionend"),
        ts = new Map,
        di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    di.push("scrollEnd");

    function ht(l, t) {
        ts.set(l, t), ya(t, [l])
    }
    var as = new WeakMap;

    function nt(l, t) {
        if (typeof l == "object" && l !== null) {
            var a = as.get(l);
            return a !== void 0 ? a : (t = {
                value: l,
                source: t,
                stack: bf(t)
            }, as.set(l, t), t)
        }
        return {
            value: l,
            source: t,
            stack: bf(t)
        }
    }
    var it = [],
        Ja = 0,
        ri = 0;

    function qe() {
        for (var l = Ja, t = ri = Ja = 0; t < l;) {
            var a = it[t];
            it[t++] = null;
            var u = it[t];
            it[t++] = null;
            var e = it[t];
            it[t++] = null;
            var n = it[t];
            if (it[t++] = null, u !== null && e !== null) {
                var i = u.pending;
                i === null ? e.next = e : (e.next = i.next, i.next = e), u.pending = e
            }
            n !== 0 && us(a, e, n)
        }
    }

    function je(l, t, a, u) {
        it[Ja++] = l, it[Ja++] = t, it[Ja++] = a, it[Ja++] = u, ri |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u)
    }

    function vi(l, t, a, u) {
        return je(l, t, a, u), Ye(l)
    }

    function Wa(l, t) {
        return je(l, null, null, t), Ye(l)
    }

    function us(l, t, a) {
        l.lanes |= a;
        var u = l.alternate;
        u !== null && (u.lanes |= a);
        for (var e = !1, n = l.return; n !== null;) n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
        return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Wl(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null
    }

    function Ye(l) {
        if (50 < ue) throw ue = 0, Sc = null, Error(y(185));
        for (var t = l.return; t !== null;) l = t, t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var ka = {};

    function b0(l, t, a, u) {
        this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function $l(l, t, a, u) {
        return new b0(l, t, a, u)
    }

    function hi(l) {
        return l = l.prototype, !(!l || !l.isReactComponent)
    }

    function Ot(l, t) {
        var a = l.alternate;
        return a === null ? (a = $l(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a
    }

    function es(l, t) {
        l.flags &= 65011714;
        var a = l.alternate;
        return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), l
    }

    function Be(l, t, a, u, e, n) {
        var i = 0;
        if (u = l, typeof l == "function") hi(l) && (i = 1);
        else if (typeof l == "string") i = Tv(l, a, H.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else l: switch (l) {
            case gt:
                return l = $l(31, a, t, e), l.elementType = gt, l.lanes = n, l;
            case jl:
                return Ta(a.children, e, n, t);
            case rt:
                i = 8, e |= 24;
                break;
            case Bl:
                return l = $l(12, a, t, e | 2), l.elementType = Bl, l.lanes = n, l;
            case k:
                return l = $l(13, a, t, e), l.elementType = k, l.lanes = n, l;
            case Vl:
                return l = $l(19, a, t, e), l.elementType = Vl, l.lanes = n, l;
            default:
                if (typeof l == "object" && l !== null) switch (l.$$typeof) {
                    case ra:
                    case Ol:
                        i = 10;
                        break l;
                    case zt:
                        i = 9;
                        break l;
                    case vt:
                        i = 11;
                        break l;
                    case Ll:
                        i = 14;
                        break l;
                    case Kl:
                        i = 16, u = null;
                        break l
                }
                i = 29, a = Error(y(130, l === null ? "null" : typeof l, "")), u = null
        }
        return t = $l(i, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t
    }

    function Ta(l, t, a, u) {
        return l = $l(7, l, u, t), l.lanes = a, l
    }

    function mi(l, t, a) {
        return l = $l(6, l, null, t), l.lanes = a, l
    }

    function yi(l, t, a) {
        return t = $l(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        }, t
    }
    var $a = [],
        Fa = 0,
        Ge = null,
        Xe = 0,
        ct = [],
        ft = 0,
        Aa = null,
        Dt = 1,
        Ut = "";

    function Ea(l, t) {
        $a[Fa++] = Xe, $a[Fa++] = Ge, Ge = l, Xe = t
    }

    function ns(l, t, a) {
        ct[ft++] = Dt, ct[ft++] = Ut, ct[ft++] = Aa, Aa = l;
        var u = Dt;
        l = Ut;
        var e = 32 - Wl(u) - 1;
        u &= ~(1 << e), a += 1;
        var n = 32 - Wl(t) + e;
        if (30 < n) {
            var i = e - e % 5;
            n = (u & (1 << i) - 1).toString(32), u >>= i, e -= i, Dt = 1 << 32 - Wl(t) + e | a << e | u, Ut = n + l
        } else Dt = 1 << n | a << e | u, Ut = l
    }

    function gi(l) {
        l.return !== null && (Ea(l, 1), ns(l, 1, 0))
    }

    function bi(l) {
        for (; l === Ge;) Ge = $a[--Fa], $a[Fa] = null, Xe = $a[--Fa], $a[Fa] = null;
        for (; l === Aa;) Aa = ct[--ft], ct[ft] = null, Ut = ct[--ft], ct[ft] = null, Dt = ct[--ft], ct[ft] = null
    }
    var Yl = null,
        rl = null,
        I = !1,
        pa = null,
        St = !1,
        Si = Error(y(519));

    function za(l) {
        var t = Error(y(418, ""));
        throw ju(nt(t, l)), Si
    }

    function is(l) {
        var t = l.stateNode,
            a = l.type,
            u = l.memoizedProps;
        switch (t[Nl] = l, t[Gl] = u, a) {
            case "dialog":
                K("cancel", t), K("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                K("load", t);
                break;
            case "video":
            case "audio":
                for (a = 0; a < ne.length; a++) K(ne[a], t);
                break;
            case "source":
                K("error", t);
                break;
            case "img":
            case "image":
            case "link":
                K("error", t), K("load", t);
                break;
            case "details":
                K("toggle", t);
                break;
            case "input":
                K("invalid", t), Af(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0), xe(t);
                break;
            case "select":
                K("invalid", t);
                break;
            case "textarea":
                K("invalid", t), pf(t, u.value, u.defaultValue, u.children), xe(t)
        }
        a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || zd(t.textContent, a) ? (u.popover != null && (K("beforetoggle", t), K("toggle", t)), u.onScroll != null && K("scroll", t), u.onScrollEnd != null && K("scrollend", t), u.onClick != null && (t.onclick = Tn), t = !0) : t = !1, t || za(l)
    }

    function cs(l) {
        for (Yl = l.return; Yl;) switch (Yl.tag) {
            case 5:
            case 13:
                St = !1;
                return;
            case 27:
            case 3:
                St = !0;
                return;
            default:
                Yl = Yl.return
        }
    }

    function Hu(l) {
        if (l !== Yl) return !1;
        if (!I) return cs(l), I = !0, !1;
        var t = l.tag,
            a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || jc(l.type, l.memoizedProps)), a = !a), a && rl && za(l), cs(l), t === 13) {
            if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(317));
            l: {
                for (l = l.nextSibling, t = 0; l;) {
                    if (l.nodeType === 8)
                        if (a = l.data, a === "/$") {
                            if (t === 0) {
                                rl = yt(l.nextSibling);
                                break l
                            }
                            t--
                        } else a !== "$" && a !== "$!" && a !== "$?" || t++;
                    l = l.nextSibling
                }
                rl = null
            }
        } else t === 27 ? (t = rl, ia(l.type) ? (l = Xc, Xc = null, rl = l) : rl = t) : rl = Yl ? yt(l.stateNode.nextSibling) : null;
        return !0
    }

    function qu() {
        rl = Yl = null, I = !1
    }

    function fs() {
        var l = pa;
        return l !== null && (Zl === null ? Zl = l : Zl.push.apply(Zl, l), pa = null), l
    }

    function ju(l) {
        pa === null ? pa = [l] : pa.push(l)
    }
    var Ti = p(null),
        xa = null,
        Nt = null;

    function Kt(l, t, a) {
        x(Ti, t._currentValue), t._currentValue = a
    }

    function Rt(l) {
        l._currentValue = Ti.current, M(Ti)
    }

    function Ai(l, t, a) {
        for (; l !== null;) {
            var u = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
            l = l.return
        }
    }

    function Ei(l, t, a, u) {
        var e = l.child;
        for (e !== null && (e.return = l); e !== null;) {
            var n = e.dependencies;
            if (n !== null) {
                var i = e.child;
                n = n.firstContext;
                l: for (; n !== null;) {
                    var c = n;
                    n = e;
                    for (var f = 0; f < t.length; f++)
                        if (c.context === t[f]) {
                            n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Ai(n.return, a, l), u || (i = null);
                            break l
                        } n = c.next
                }
            } else if (e.tag === 18) {
                if (i = e.return, i === null) throw Error(y(341));
                i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Ai(i, a, l), i = null
            } else i = e.child;
            if (i !== null) i.return = e;
            else
                for (i = e; i !== null;) {
                    if (i === l) {
                        i = null;
                        break
                    }
                    if (e = i.sibling, e !== null) {
                        e.return = i.return, i = e;
                        break
                    }
                    i = i.return
                }
            e = i
        }
    }

    function Yu(l, t, a, u) {
        l = null;
        for (var e = t, n = !1; e !== null;) {
            if (!n) {
                if ((e.flags & 524288) !== 0) n = !0;
                else if ((e.flags & 262144) !== 0) break
            }
            if (e.tag === 10) {
                var i = e.alternate;
                if (i === null) throw Error(y(387));
                if (i = i.memoizedProps, i !== null) {
                    var c = e.type;
                    kl(e.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c])
                }
            } else if (e === wl.current) {
                if (i = e.alternate, i === null) throw Error(y(387));
                i.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(de) : l = [de])
            }
            e = e.return
        }
        l !== null && Ei(t, l, a, u), t.flags |= 262144
    }

    function Ce(l) {
        for (l = l.firstContext; l !== null;) {
            if (!kl(l.context._currentValue, l.memoizedValue)) return !0;
            l = l.next
        }
        return !1
    }

    function _a(l) {
        xa = l, Nt = null, l = l.dependencies, l !== null && (l.firstContext = null)
    }

    function Rl(l) {
        return ss(xa, l)
    }

    function Qe(l, t) {
        return xa === null && _a(l), ss(l, t)
    }

    function ss(l, t) {
        var a = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: a,
                next: null
            }, Nt === null) {
            if (l === null) throw Error(y(308));
            Nt = t, l.dependencies = {
                lanes: 0,
                firstContext: t
            }, l.flags |= 524288
        } else Nt = Nt.next = t;
        return a
    }
    var S0 = typeof AbortController < "u" ? AbortController : function() {
            var l = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(a, u) {
                        l.push(u)
                    }
                };
            this.abort = function() {
                t.aborted = !0, l.forEach(function(a) {
                    return a()
                })
            }
        },
        T0 = A.unstable_scheduleCallback,
        A0 = A.unstable_NormalPriority,
        Sl = {
            $$typeof: Ol,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function pi() {
        return {
            controller: new S0,
            data: new Map,
            refCount: 0
        }
    }

    function Bu(l) {
        l.refCount--, l.refCount === 0 && T0(A0, function() {
            l.controller.abort()
        })
    }
    var Gu = null,
        zi = 0,
        Ia = 0,
        Pa = null;

    function E0(l, t) {
        if (Gu === null) {
            var a = Gu = [];
            zi = 0, Ia = _c(), Pa = {
                status: "pending",
                value: void 0,
                then: function(u) {
                    a.push(u)
                }
            }
        }
        return zi++, t.then(os, os), t
    }

    function os() {
        if (--zi === 0 && Gu !== null) {
            Pa !== null && (Pa.status = "fulfilled");
            var l = Gu;
            Gu = null, Ia = 0, Pa = null;
            for (var t = 0; t < l.length; t++)(0, l[t])()
        }
    }

    function p0(l, t) {
        var a = [],
            u = {
                status: "pending",
                value: null,
                reason: null,
                then: function(e) {
                    a.push(e)
                }
            };
        return l.then(function() {
            u.status = "fulfilled", u.value = t;
            for (var e = 0; e < a.length; e++)(0, a[e])(t)
        }, function(e) {
            for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)(0, a[e])(void 0)
        }), u
    }
    var ds = b.S;
    b.S = function(l, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && E0(l, t), ds !== null && ds(l, t)
    };
    var Ma = p(null);

    function xi() {
        var l = Ma.current;
        return l !== null ? l : fl.pooledCache
    }

    function Ze(l, t) {
        t === null ? x(Ma, Ma.current) : x(Ma, t.pool)
    }

    function rs() {
        var l = xi();
        return l === null ? null : {
            parent: Sl._currentValue,
            pool: l
        }
    }
    var Xu = Error(y(460)),
        vs = Error(y(474)),
        Ve = Error(y(542)),
        _i = {
            then: function() {}
        };

    function hs(l) {
        return l = l.status, l === "fulfilled" || l === "rejected"
    }

    function Le() {}

    function ms(l, t, a) {
        switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Le, Le), t = a), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason, gs(l), l;
            default:
                if (typeof t.status == "string") t.then(Le, Le);
                else {
                    if (l = fl, l !== null && 100 < l.shellSuspendCounter) throw Error(y(482));
                    l = t, l.status = "pending", l.then(function(u) {
                        if (t.status === "pending") {
                            var e = t;
                            e.status = "fulfilled", e.value = u
                        }
                    }, function(u) {
                        if (t.status === "pending") {
                            var e = t;
                            e.status = "rejected", e.reason = u
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw l = t.reason, gs(l), l
                }
                throw Cu = t, Xu
        }
    }
    var Cu = null;

    function ys() {
        if (Cu === null) throw Error(y(459));
        var l = Cu;
        return Cu = null, l
    }

    function gs(l) {
        if (l === Xu || l === Ve) throw Error(y(483))
    }
    var wt = !1;

    function Mi(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function Oi(l, t) {
        l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }

    function Jt(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Wt(l, t, a) {
        var u = l.updateQueue;
        if (u === null) return null;
        if (u = u.shared, (P & 2) !== 0) {
            var e = u.pending;
            return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Ye(l), us(l, null, a), t
        }
        return je(l, u, t, a), Ye(l)
    }

    function Qu(l, t, a) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
            var u = t.lanes;
            u &= l.pendingLanes, a |= u, t.lanes = a, of(l, a)
        }
    }

    function Di(l, t) {
        var a = l.updateQueue,
            u = l.alternate;
        if (u !== null && (u = u.updateQueue, a === u)) {
            var e = null,
                n = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var i = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? e = n = i : n = n.next = i, a = a.next
                } while (a !== null);
                n === null ? e = n = t : n = n.next = t
            } else e = n = t;
            a = {
                baseState: u.baseState,
                firstBaseUpdate: e,
                lastBaseUpdate: n,
                shared: u.shared,
                callbacks: u.callbacks
            }, l.updateQueue = a;
            return
        }
        l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t
    }
    var Ui = !1;

    function Zu() {
        if (Ui) {
            var l = Pa;
            if (l !== null) throw l
        }
    }

    function Vu(l, t, a, u) {
        Ui = !1;
        var e = l.updateQueue;
        wt = !1;
        var n = e.firstBaseUpdate,
            i = e.lastBaseUpdate,
            c = e.shared.pending;
        if (c !== null) {
            e.shared.pending = null;
            var f = c,
                v = f.next;
            f.next = null, i === null ? n = v : i.next = v, i = f;
            var g = l.alternate;
            g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== i && (c === null ? g.firstBaseUpdate = v : c.next = v, g.lastBaseUpdate = f))
        }
        if (n !== null) {
            var T = e.baseState;
            i = 0, g = v = f = null, c = n;
            do {
                var h = c.lane & -536870913,
                    m = h !== c.lane;
                if (m ? (J & h) === h : (u & h) === h) {
                    h !== 0 && h === Ia && (Ui = !0), g !== null && (g = g.next = {
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var B = l,
                            q = c;h = t;
                        var ul = a;
                        switch (q.tag) {
                            case 1:
                                if (B = q.payload, typeof B == "function") {
                                    T = B.call(ul, T, h);
                                    break l
                                }
                                T = B;
                                break l;
                            case 3:
                                B.flags = B.flags & -65537 | 128;
                            case 0:
                                if (B = q.payload, h = typeof B == "function" ? B.call(ul, T, h) : B, h == null) break l;
                                T = U({}, T, h);
                                break l;
                            case 2:
                                wt = !0
                        }
                    }
                    h = c.callback, h !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [h] : m.push(h))
                } else m = {
                    lane: h,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                }, g === null ? (v = g = m, f = T) : g = g.next = m, i |= h;
                if (c = c.next, c === null) {
                    if (c = e.shared.pending, c === null) break;
                    m = c, c = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null
                }
            } while (!0);
            g === null && (f = T), e.baseState = f, e.firstBaseUpdate = v, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), aa |= i, l.lanes = i, l.memoizedState = T
        }
    }

    function bs(l, t) {
        if (typeof l != "function") throw Error(y(191, l));
        l.call(t)
    }

    function Ss(l, t) {
        var a = l.callbacks;
        if (a !== null)
            for (l.callbacks = null, l = 0; l < a.length; l++) bs(a[l], t)
    }
    var lu = p(null),
        Ke = p(0);

    function Ts(l, t) {
        l = Xt, x(Ke, l), x(lu, t), Xt = l | t.baseLanes
    }

    function Ni() {
        x(Ke, Xt), x(lu, lu.current)
    }

    function Ri() {
        Xt = Ke.current, M(lu), M(Ke)
    }
    var kt = 0,
        Z = null,
        tl = null,
        gl = null,
        we = !1,
        tu = !1,
        Oa = !1,
        Je = 0,
        Lu = 0,
        au = null,
        z0 = 0;

    function ml() {
        throw Error(y(321))
    }

    function Hi(l, t) {
        if (t === null) return !1;
        for (var a = 0; a < t.length && a < l.length; a++)
            if (!kl(l[a], t[a])) return !1;
        return !0
    }

    function qi(l, t, a, u, e, n) {
        return kt = n, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? uo : eo, Oa = !1, n = a(u, e), Oa = !1, tu && (n = Es(t, a, u, e)), As(l), n
    }

    function As(l) {
        b.H = Pe;
        var t = tl !== null && tl.next !== null;
        if (kt = 0, gl = tl = Z = null, we = !1, Lu = 0, au = null, t) throw Error(y(300));
        l === null || El || (l = l.dependencies, l !== null && Ce(l) && (El = !0))
    }

    function Es(l, t, a, u) {
        Z = l;
        var e = 0;
        do {
            if (tu && (au = null), Lu = 0, tu = !1, 25 <= e) throw Error(y(301));
            if (e += 1, gl = tl = null, l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0)
            }
            b.H = N0, n = t(a, u)
        } while (tu);
        return n
    }

    function x0() {
        var l = b.H,
            t = l.useState()[0];
        return t = typeof t.then == "function" ? Ku(t) : t, l = l.useState()[0], (tl !== null ? tl.memoizedState : null) !== l && (Z.flags |= 1024), t
    }

    function ji() {
        var l = Je !== 0;
        return Je = 0, l
    }

    function Yi(l, t, a) {
        t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a
    }

    function Bi(l) {
        if (we) {
            for (l = l.memoizedState; l !== null;) {
                var t = l.queue;
                t !== null && (t.pending = null), l = l.next
            }
            we = !1
        }
        kt = 0, gl = tl = Z = null, tu = !1, Lu = Je = 0, au = null
    }

    function Cl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return gl === null ? Z.memoizedState = gl = l : gl = gl.next = l, gl
    }

    function bl() {
        if (tl === null) {
            var l = Z.alternate;
            l = l !== null ? l.memoizedState : null
        } else l = tl.next;
        var t = gl === null ? Z.memoizedState : gl.next;
        if (t !== null) gl = t, tl = l;
        else {
            if (l === null) throw Z.alternate === null ? Error(y(467)) : Error(y(310));
            tl = l, l = {
                memoizedState: tl.memoizedState,
                baseState: tl.baseState,
                baseQueue: tl.baseQueue,
                queue: tl.queue,
                next: null
            }, gl === null ? Z.memoizedState = gl = l : gl = gl.next = l
        }
        return gl
    }

    function Gi() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Ku(l) {
        var t = Lu;
        return Lu += 1, au === null && (au = []), l = ms(au, l, t), t = Z, (gl === null ? t.memoizedState : gl.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? uo : eo), l
    }

    function We(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function") return Ku(l);
            if (l.$$typeof === Ol) return Rl(l)
        }
        throw Error(y(438, String(l)))
    }

    function Xi(l) {
        var t = null,
            a = Z.updateQueue;
        if (a !== null && (t = a.memoCache), t == null) {
            var u = Z.alternate;
            u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
                data: u.data.map(function(e) {
                    return e.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), a === null && (a = Gi(), Z.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
            for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Ha;
        return t.index++, a
    }

    function Ht(l, t) {
        return typeof t == "function" ? t(l) : t
    }

    function ke(l) {
        var t = bl();
        return Ci(t, tl, l)
    }

    function Ci(l, t, a) {
        var u = l.queue;
        if (u === null) throw Error(y(311));
        u.lastRenderedReducer = a;
        var e = l.baseQueue,
            n = u.pending;
        if (n !== null) {
            if (e !== null) {
                var i = e.next;
                e.next = n.next, n.next = i
            }
            t.baseQueue = e = n, u.pending = null
        }
        if (n = l.baseState, e === null) l.memoizedState = n;
        else {
            t = e.next;
            var c = i = null,
                f = null,
                v = t,
                g = !1;
            do {
                var T = v.lane & -536870913;
                if (T !== v.lane ? (J & T) === T : (kt & T) === T) {
                    var h = v.revertLane;
                    if (h === 0) f !== null && (f = f.next = {
                        lane: 0,
                        revertLane: 0,
                        action: v.action,
                        hasEagerState: v.hasEagerState,
                        eagerState: v.eagerState,
                        next: null
                    }), T === Ia && (g = !0);
                    else if ((kt & h) === h) {
                        v = v.next, h === Ia && (g = !0);
                        continue
                    } else T = {
                        lane: 0,
                        revertLane: v.revertLane,
                        action: v.action,
                        hasEagerState: v.hasEagerState,
                        eagerState: v.eagerState,
                        next: null
                    }, f === null ? (c = f = T, i = n) : f = f.next = T, Z.lanes |= h, aa |= h;
                    T = v.action, Oa && a(n, T), n = v.hasEagerState ? v.eagerState : a(n, T)
                } else h = {
                    lane: T,
                    revertLane: v.revertLane,
                    action: v.action,
                    hasEagerState: v.hasEagerState,
                    eagerState: v.eagerState,
                    next: null
                }, f === null ? (c = f = h, i = n) : f = f.next = h, Z.lanes |= T, aa |= T;
                v = v.next
            } while (v !== null && v !== t);
            if (f === null ? i = n : f.next = c, !kl(n, l.memoizedState) && (El = !0, g && (a = Pa, a !== null))) throw a;
            l.memoizedState = n, l.baseState = i, l.baseQueue = f, u.lastRenderedState = n
        }
        return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch]
    }

    function Qi(l) {
        var t = bl(),
            a = t.queue;
        if (a === null) throw Error(y(311));
        a.lastRenderedReducer = l;
        var u = a.dispatch,
            e = a.pending,
            n = t.memoizedState;
        if (e !== null) {
            a.pending = null;
            var i = e = e.next;
            do n = l(n, i.action), i = i.next; while (i !== e);
            kl(n, t.memoizedState) || (El = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n
        }
        return [n, u]
    }

    function ps(l, t, a) {
        var u = Z,
            e = bl(),
            n = I;
        if (n) {
            if (a === void 0) throw Error(y(407));
            a = a()
        } else a = t();
        var i = !kl((tl || e).memoizedState, a);
        i && (e.memoizedState = a, El = !0), e = e.queue;
        var c = _s.bind(null, u, e, l);
        if (wu(2048, 8, c, [l]), e.getSnapshot !== t || i || gl !== null && gl.memoizedState.tag & 1) {
            if (u.flags |= 2048, uu(9, $e(), xs.bind(null, u, e, a, t), null), fl === null) throw Error(y(349));
            n || (kt & 124) !== 0 || zs(u, t, a)
        }
        return a
    }

    function zs(l, t, a) {
        l.flags |= 16384, l = {
            getSnapshot: t,
            value: a
        }, t = Z.updateQueue, t === null ? (t = Gi(), Z.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l))
    }

    function xs(l, t, a, u) {
        t.value = a, t.getSnapshot = u, Ms(t) && Os(l)
    }

    function _s(l, t, a) {
        return a(function() {
            Ms(t) && Os(l)
        })
    }

    function Ms(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var a = t();
            return !kl(l, a)
        } catch {
            return !0
        }
    }

    function Os(l) {
        var t = Wa(l, 2);
        t !== null && tt(t, l, 2)
    }

    function Zi(l) {
        var t = Cl();
        if (typeof l == "function") {
            var a = l;
            if (l = a(), Oa) {
                Zt(!0);
                try {
                    a()
                } finally {
                    Zt(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ht,
            lastRenderedState: l
        }, t
    }

    function Ds(l, t, a, u) {
        return l.baseState = a, Ci(l, tl, typeof u == "function" ? u : Ht)
    }

    function _0(l, t, a, u, e) {
        if (Ie(l)) throw Error(y(485));
        if (l = t.action, l !== null) {
            var n = {
                payload: e,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    n.listeners.push(i)
                }
            };
            b.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Us(t, n)) : (n.next = a.next, t.pending = a.next = n)
        }
    }

    function Us(l, t) {
        var a = t.action,
            u = t.payload,
            e = l.state;
        if (t.isTransition) {
            var n = b.T,
                i = {};
            b.T = i;
            try {
                var c = a(e, u),
                    f = b.S;
                f !== null && f(i, c), Ns(l, t, c)
            } catch (v) {
                Vi(l, t, v)
            } finally {
                b.T = n
            }
        } else try {
            n = a(e, u), Ns(l, t, n)
        } catch (v) {
            Vi(l, t, v)
        }
    }

    function Ns(l, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
            Rs(l, t, u)
        }, function(u) {
            return Vi(l, t, u)
        }) : Rs(l, t, a)
    }

    function Rs(l, t, a) {
        t.status = "fulfilled", t.value = a, Hs(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Us(l, a)))
    }

    function Vi(l, t, a) {
        var u = l.pending;
        if (l.pending = null, u !== null) {
            u = u.next;
            do t.status = "rejected", t.reason = a, Hs(t), t = t.next; while (t !== u)
        }
        l.action = null
    }

    function Hs(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)(0, l[t])()
    }

    function qs(l, t) {
        return t
    }

    function js(l, t) {
        if (I) {
            var a = fl.formState;
            if (a !== null) {
                l: {
                    var u = Z;
                    if (I) {
                        if (rl) {
                            t: {
                                for (var e = rl, n = St; e.nodeType !== 8;) {
                                    if (!n) {
                                        e = null;
                                        break t
                                    }
                                    if (e = yt(e.nextSibling), e === null) {
                                        e = null;
                                        break t
                                    }
                                }
                                n = e.data,
                                e = n === "F!" || n === "F" ? e : null
                            }
                            if (e) {
                                rl = yt(e.nextSibling), u = e.data === "F!";
                                break l
                            }
                        }
                        za(u)
                    }
                    u = !1
                }
                u && (t = a[0])
            }
        }
        return a = Cl(), a.memoizedState = a.baseState = t, u = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: qs,
            lastRenderedState: t
        }, a.queue = u, a = lo.bind(null, Z, u), u.dispatch = a, u = Zi(!1), n = Wi.bind(null, Z, !1, u.queue), u = Cl(), e = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        }, u.queue = e, a = _0.bind(null, Z, e, n, a), e.dispatch = a, u.memoizedState = l, [t, a, !1]
    }

    function Ys(l) {
        var t = bl();
        return Bs(t, tl, l)
    }

    function Bs(l, t, a) {
        if (t = Ci(l, t, qs)[0], l = ke(Ht)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var u = Ku(t)
        } catch (i) {
            throw i === Xu ? Ve : i
        } else u = t;
        t = bl();
        var e = t.queue,
            n = e.dispatch;
        return a !== t.memoizedState && (Z.flags |= 2048, uu(9, $e(), M0.bind(null, e, a), null)), [u, n, l]
    }

    function M0(l, t) {
        l.action = t
    }

    function Gs(l) {
        var t = bl(),
            a = tl;
        if (a !== null) return Bs(t, a, l);
        bl(), t = t.memoizedState, a = bl();
        var u = a.queue.dispatch;
        return a.memoizedState = l, [t, u, !1]
    }

    function uu(l, t, a, u) {
        return l = {
            tag: l,
            create: a,
            deps: u,
            inst: t,
            next: null
        }, t = Z.updateQueue, t === null && (t = Gi(), Z.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l
    }

    function $e() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function Xs() {
        return bl().memoizedState
    }

    function Fe(l, t, a, u) {
        var e = Cl();
        u = u === void 0 ? null : u, Z.flags |= l, e.memoizedState = uu(1 | t, $e(), a, u)
    }

    function wu(l, t, a, u) {
        var e = bl();
        u = u === void 0 ? null : u;
        var n = e.memoizedState.inst;
        tl !== null && u !== null && Hi(u, tl.memoizedState.deps) ? e.memoizedState = uu(t, n, a, u) : (Z.flags |= l, e.memoizedState = uu(1 | t, n, a, u))
    }

    function Cs(l, t) {
        Fe(8390656, 8, l, t)
    }

    function Qs(l, t) {
        wu(2048, 8, l, t)
    }

    function Zs(l, t) {
        return wu(4, 2, l, t)
    }

    function Vs(l, t) {
        return wu(4, 4, l, t)
    }

    function Ls(l, t) {
        if (typeof t == "function") {
            l = l();
            var a = t(l);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null) return l = l(), t.current = l,
            function() {
                t.current = null
            }
    }

    function Ks(l, t, a) {
        a = a != null ? a.concat([l]) : null, wu(4, 4, Ls.bind(null, t, l), a)
    }

    function Li() {}

    function ws(l, t) {
        var a = bl();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        return t !== null && Hi(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l)
    }

    function Js(l, t) {
        var a = bl();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        if (t !== null && Hi(t, u[1])) return u[0];
        if (u = l(), Oa) {
            Zt(!0);
            try {
                l()
            } finally {
                Zt(!1)
            }
        }
        return a.memoizedState = [u, t], u
    }

    function Ki(l, t, a) {
        return a === void 0 || (kt & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = a, l = Fo(), Z.lanes |= l, aa |= l, a)
    }

    function Ws(l, t, a, u) {
        return kl(a, t) ? a : lu.current !== null ? (l = Ki(l, a, u), kl(l, t) || (El = !0), l) : (kt & 42) === 0 ? (El = !0, l.memoizedState = a) : (l = Fo(), Z.lanes |= l, aa |= l, t)
    }

    function ks(l, t, a, u, e) {
        var n = _.p;
        _.p = n !== 0 && 8 > n ? n : 8;
        var i = b.T,
            c = {};
        b.T = c, Wi(l, !1, t, a);
        try {
            var f = e(),
                v = b.S;
            if (v !== null && v(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
                var g = p0(f, u);
                Ju(l, t, g, lt(l))
            } else Ju(l, t, u, lt(l))
        } catch (T) {
            Ju(l, t, {
                then: function() {},
                status: "rejected",
                reason: T
            }, lt())
        } finally {
            _.p = n, b.T = i
        }
    }

    function O0() {}

    function wi(l, t, a, u) {
        if (l.tag !== 5) throw Error(y(476));
        var e = $s(l).queue;
        ks(l, e, t, Y, a === null ? O0 : function() {
            return Fs(l), a(u)
        })
    }

    function $s(l) {
        var t = l.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: Y,
            baseState: Y,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ht,
                lastRenderedState: Y
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ht,
                lastRenderedState: a
            },
            next: null
        }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t
    }

    function Fs(l) {
        var t = $s(l).next.queue;
        Ju(l, t, {}, lt())
    }

    function Ji() {
        return Rl(de)
    }

    function Is() {
        return bl().memoizedState
    }

    function Ps() {
        return bl().memoizedState
    }

    function D0(l) {
        for (var t = l.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var a = lt();
                    l = Jt(a);
                    var u = Wt(t, l, a);
                    u !== null && (tt(u, t, a), Qu(u, t, a)), t = {
                        cache: pi()
                    }, l.payload = t;
                    return
            }
            t = t.return
        }
    }

    function U0(l, t, a) {
        var u = lt();
        a = {
            lane: u,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ie(l) ? to(t, a) : (a = vi(l, t, a, u), a !== null && (tt(a, l, u), ao(a, t, u)))
    }

    function lo(l, t, a) {
        var u = lt();
        Ju(l, t, a, u)
    }

    function Ju(l, t, a, u) {
        var e = {
            lane: u,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ie(l)) to(t, e);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
                var i = t.lastRenderedState,
                    c = n(i, a);
                if (e.hasEagerState = !0, e.eagerState = c, kl(c, i)) return je(l, t, e, 0), fl === null && qe(), !1
            } catch {} finally {}
            if (a = vi(l, t, e, u), a !== null) return tt(a, l, u), ao(a, t, u), !0
        }
        return !1
    }

    function Wi(l, t, a, u) {
        if (u = {
                lane: 2,
                revertLane: _c(),
                action: u,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ie(l)) {
            if (t) throw Error(y(479))
        } else t = vi(l, a, u, 2), t !== null && tt(t, l, 2)
    }

    function Ie(l) {
        var t = l.alternate;
        return l === Z || t !== null && t === Z
    }

    function to(l, t) {
        tu = we = !0;
        var a = l.pending;
        a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t
    }

    function ao(l, t, a) {
        if ((a & 4194048) !== 0) {
            var u = t.lanes;
            u &= l.pendingLanes, a |= u, t.lanes = a, of(l, a)
        }
    }
    var Pe = {
            readContext: Rl,
            use: We,
            useCallback: ml,
            useContext: ml,
            useEffect: ml,
            useImperativeHandle: ml,
            useLayoutEffect: ml,
            useInsertionEffect: ml,
            useMemo: ml,
            useReducer: ml,
            useRef: ml,
            useState: ml,
            useDebugValue: ml,
            useDeferredValue: ml,
            useTransition: ml,
            useSyncExternalStore: ml,
            useId: ml,
            useHostTransitionStatus: ml,
            useFormState: ml,
            useActionState: ml,
            useOptimistic: ml,
            useMemoCache: ml,
            useCacheRefresh: ml
        },
        uo = {
            readContext: Rl,
            use: We,
            useCallback: function(l, t) {
                return Cl().memoizedState = [l, t === void 0 ? null : t], l
            },
            useContext: Rl,
            useEffect: Cs,
            useImperativeHandle: function(l, t, a) {
                a = a != null ? a.concat([l]) : null, Fe(4194308, 4, Ls.bind(null, t, l), a)
            },
            useLayoutEffect: function(l, t) {
                return Fe(4194308, 4, l, t)
            },
            useInsertionEffect: function(l, t) {
                Fe(4, 2, l, t)
            },
            useMemo: function(l, t) {
                var a = Cl();
                t = t === void 0 ? null : t;
                var u = l();
                if (Oa) {
                    Zt(!0);
                    try {
                        l()
                    } finally {
                        Zt(!1)
                    }
                }
                return a.memoizedState = [u, t], u
            },
            useReducer: function(l, t, a) {
                var u = Cl();
                if (a !== void 0) {
                    var e = a(t);
                    if (Oa) {
                        Zt(!0);
                        try {
                            a(t)
                        } finally {
                            Zt(!1)
                        }
                    }
                } else e = t;
                return u.memoizedState = u.baseState = e, l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: l,
                    lastRenderedState: e
                }, u.queue = l, l = l.dispatch = U0.bind(null, Z, l), [u.memoizedState, l]
            },
            useRef: function(l) {
                var t = Cl();
                return l = {
                    current: l
                }, t.memoizedState = l
            },
            useState: function(l) {
                l = Zi(l);
                var t = l.queue,
                    a = lo.bind(null, Z, t);
                return t.dispatch = a, [l.memoizedState, a]
            },
            useDebugValue: Li,
            useDeferredValue: function(l, t) {
                var a = Cl();
                return Ki(a, l, t)
            },
            useTransition: function() {
                var l = Zi(!1);
                return l = ks.bind(null, Z, l.queue, !0, !1), Cl().memoizedState = l, [!1, l]
            },
            useSyncExternalStore: function(l, t, a) {
                var u = Z,
                    e = Cl();
                if (I) {
                    if (a === void 0) throw Error(y(407));
                    a = a()
                } else {
                    if (a = t(), fl === null) throw Error(y(349));
                    (J & 124) !== 0 || zs(u, t, a)
                }
                e.memoizedState = a;
                var n = {
                    value: a,
                    getSnapshot: t
                };
                return e.queue = n, Cs(_s.bind(null, u, n, l), [l]), u.flags |= 2048, uu(9, $e(), xs.bind(null, u, n, a, t), null), a
            },
            useId: function() {
                var l = Cl(),
                    t = fl.identifierPrefix;
                if (I) {
                    var a = Ut,
                        u = Dt;
                    a = (u & ~(1 << 32 - Wl(u) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Je++, 0 < a && (t += "H" + a.toString(32)), t += "»"
                } else a = z0++, t = "«" + t + "r" + a.toString(32) + "»";
                return l.memoizedState = t
            },
            useHostTransitionStatus: Ji,
            useFormState: js,
            useActionState: js,
            useOptimistic: function(l) {
                var t = Cl();
                t.memoizedState = t.baseState = l;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = a, t = Wi.bind(null, Z, !0, a), a.dispatch = t, [l, t]
            },
            useMemoCache: Xi,
            useCacheRefresh: function() {
                return Cl().memoizedState = D0.bind(null, Z)
            }
        },
        eo = {
            readContext: Rl,
            use: We,
            useCallback: ws,
            useContext: Rl,
            useEffect: Qs,
            useImperativeHandle: Ks,
            useInsertionEffect: Zs,
            useLayoutEffect: Vs,
            useMemo: Js,
            useReducer: ke,
            useRef: Xs,
            useState: function() {
                return ke(Ht)
            },
            useDebugValue: Li,
            useDeferredValue: function(l, t) {
                var a = bl();
                return Ws(a, tl.memoizedState, l, t)
            },
            useTransition: function() {
                var l = ke(Ht)[0],
                    t = bl().memoizedState;
                return [typeof l == "boolean" ? l : Ku(l), t]
            },
            useSyncExternalStore: ps,
            useId: Is,
            useHostTransitionStatus: Ji,
            useFormState: Ys,
            useActionState: Ys,
            useOptimistic: function(l, t) {
                var a = bl();
                return Ds(a, tl, l, t)
            },
            useMemoCache: Xi,
            useCacheRefresh: Ps
        },
        N0 = {
            readContext: Rl,
            use: We,
            useCallback: ws,
            useContext: Rl,
            useEffect: Qs,
            useImperativeHandle: Ks,
            useInsertionEffect: Zs,
            useLayoutEffect: Vs,
            useMemo: Js,
            useReducer: Qi,
            useRef: Xs,
            useState: function() {
                return Qi(Ht)
            },
            useDebugValue: Li,
            useDeferredValue: function(l, t) {
                var a = bl();
                return tl === null ? Ki(a, l, t) : Ws(a, tl.memoizedState, l, t)
            },
            useTransition: function() {
                var l = Qi(Ht)[0],
                    t = bl().memoizedState;
                return [typeof l == "boolean" ? l : Ku(l), t]
            },
            useSyncExternalStore: ps,
            useId: Is,
            useHostTransitionStatus: Ji,
            useFormState: Gs,
            useActionState: Gs,
            useOptimistic: function(l, t) {
                var a = bl();
                return tl !== null ? Ds(a, tl, l, t) : (a.baseState = l, [l, a.queue.dispatch])
            },
            useMemoCache: Xi,
            useCacheRefresh: Ps
        },
        eu = null,
        Wu = 0;

    function ln(l) {
        var t = Wu;
        return Wu += 1, eu === null && (eu = []), ms(eu, l, t)
    }

    function ku(l, t) {
        t = t.props.ref, l.ref = t !== void 0 ? t : null
    }

    function tn(l, t) {
        throw t.$$typeof === el ? Error(y(525)) : (l = Object.prototype.toString.call(t), Error(y(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }

    function no(l) {
        var t = l._init;
        return t(l._payload)
    }

    function io(l) {
        function t(d, o) {
            if (l) {
                var r = d.deletions;
                r === null ? (d.deletions = [o], d.flags |= 16) : r.push(o)
            }
        }

        function a(d, o) {
            if (!l) return null;
            for (; o !== null;) t(d, o), o = o.sibling;
            return null
        }

        function u(d) {
            for (var o = new Map; d !== null;) d.key !== null ? o.set(d.key, d) : o.set(d.index, d), d = d.sibling;
            return o
        }

        function e(d, o) {
            return d = Ot(d, o), d.index = 0, d.sibling = null, d
        }

        function n(d, o, r) {
            return d.index = r, l ? (r = d.alternate, r !== null ? (r = r.index, r < o ? (d.flags |= 67108866, o) : r) : (d.flags |= 67108866, o)) : (d.flags |= 1048576, o)
        }

        function i(d) {
            return l && d.alternate === null && (d.flags |= 67108866), d
        }

        function c(d, o, r, S) {
            return o === null || o.tag !== 6 ? (o = mi(r, d.mode, S), o.return = d, o) : (o = e(o, r), o.return = d, o)
        }

        function f(d, o, r, S) {
            var D = r.type;
            return D === jl ? g(d, o, r.props.children, S, r.key) : o !== null && (o.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Kl && no(D) === o.type) ? (o = e(o, r.props), ku(o, r), o.return = d, o) : (o = Be(r.type, r.key, r.props, null, d.mode, S), ku(o, r), o.return = d, o)
        }

        function v(d, o, r, S) {
            return o === null || o.tag !== 4 || o.stateNode.containerInfo !== r.containerInfo || o.stateNode.implementation !== r.implementation ? (o = yi(r, d.mode, S), o.return = d, o) : (o = e(o, r.children || []), o.return = d, o)
        }

        function g(d, o, r, S, D) {
            return o === null || o.tag !== 7 ? (o = Ta(r, d.mode, S, D), o.return = d, o) : (o = e(o, r), o.return = d, o)
        }

        function T(d, o, r) {
            if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint") return o = mi("" + o, d.mode, r), o.return = d, o;
            if (typeof o == "object" && o !== null) {
                switch (o.$$typeof) {
                    case cl:
                        return r = Be(o.type, o.key, o.props, null, d.mode, r), ku(r, o), r.return = d, r;
                    case ql:
                        return o = yi(o, d.mode, r), o.return = d, o;
                    case Kl:
                        var S = o._init;
                        return o = S(o._payload), T(d, o, r)
                }
                if (Ul(o) || Dl(o)) return o = Ta(o, d.mode, r, null), o.return = d, o;
                if (typeof o.then == "function") return T(d, ln(o), r);
                if (o.$$typeof === Ol) return T(d, Qe(d, o), r);
                tn(d, o)
            }
            return null
        }

        function h(d, o, r, S) {
            var D = o !== null ? o.key : null;
            if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return D !== null ? null : c(d, o, "" + r, S);
            if (typeof r == "object" && r !== null) {
                switch (r.$$typeof) {
                    case cl:
                        return r.key === D ? f(d, o, r, S) : null;
                    case ql:
                        return r.key === D ? v(d, o, r, S) : null;
                    case Kl:
                        return D = r._init, r = D(r._payload), h(d, o, r, S)
                }
                if (Ul(r) || Dl(r)) return D !== null ? null : g(d, o, r, S, null);
                if (typeof r.then == "function") return h(d, o, ln(r), S);
                if (r.$$typeof === Ol) return h(d, o, Qe(d, r), S);
                tn(d, r)
            }
            return null
        }

        function m(d, o, r, S, D) {
            if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return d = d.get(r) || null, c(o, d, "" + S, D);
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                    case cl:
                        return d = d.get(S.key === null ? r : S.key) || null, f(o, d, S, D);
                    case ql:
                        return d = d.get(S.key === null ? r : S.key) || null, v(o, d, S, D);
                    case Kl:
                        var V = S._init;
                        return S = V(S._payload), m(d, o, r, S, D)
                }
                if (Ul(S) || Dl(S)) return d = d.get(r) || null, g(o, d, S, D, null);
                if (typeof S.then == "function") return m(d, o, r, ln(S), D);
                if (S.$$typeof === Ol) return m(d, o, r, Qe(o, S), D);
                tn(o, S)
            }
            return null
        }

        function B(d, o, r, S) {
            for (var D = null, V = null, N = o, j = o = 0, zl = null; N !== null && j < r.length; j++) {
                N.index > j ? (zl = N, N = null) : zl = N.sibling;
                var F = h(d, N, r[j], S);
                if (F === null) {
                    N === null && (N = zl);
                    break
                }
                l && N && F.alternate === null && t(d, N), o = n(F, o, j), V === null ? D = F : V.sibling = F, V = F, N = zl
            }
            if (j === r.length) return a(d, N), I && Ea(d, j), D;
            if (N === null) {
                for (; j < r.length; j++) N = T(d, r[j], S), N !== null && (o = n(N, o, j), V === null ? D = N : V.sibling = N, V = N);
                return I && Ea(d, j), D
            }
            for (N = u(N); j < r.length; j++) zl = m(N, d, j, r[j], S), zl !== null && (l && zl.alternate !== null && N.delete(zl.key === null ? j : zl.key), o = n(zl, o, j), V === null ? D = zl : V.sibling = zl, V = zl);
            return l && N.forEach(function(da) {
                return t(d, da)
            }), I && Ea(d, j), D
        }

        function q(d, o, r, S) {
            if (r == null) throw Error(y(151));
            for (var D = null, V = null, N = o, j = o = 0, zl = null, F = r.next(); N !== null && !F.done; j++, F = r.next()) {
                N.index > j ? (zl = N, N = null) : zl = N.sibling;
                var da = h(d, N, F.value, S);
                if (da === null) {
                    N === null && (N = zl);
                    break
                }
                l && N && da.alternate === null && t(d, N), o = n(da, o, j), V === null ? D = da : V.sibling = da, V = da, N = zl
            }
            if (F.done) return a(d, N), I && Ea(d, j), D;
            if (N === null) {
                for (; !F.done; j++, F = r.next()) F = T(d, F.value, S), F !== null && (o = n(F, o, j), V === null ? D = F : V.sibling = F, V = F);
                return I && Ea(d, j), D
            }
            for (N = u(N); !F.done; j++, F = r.next()) F = m(N, d, j, F.value, S), F !== null && (l && F.alternate !== null && N.delete(F.key === null ? j : F.key), o = n(F, o, j), V === null ? D = F : V.sibling = F, V = F);
            return l && N.forEach(function(Rv) {
                return t(d, Rv)
            }), I && Ea(d, j), D
        }

        function ul(d, o, r, S) {
            if (typeof r == "object" && r !== null && r.type === jl && r.key === null && (r = r.props.children), typeof r == "object" && r !== null) {
                switch (r.$$typeof) {
                    case cl:
                        l: {
                            for (var D = r.key; o !== null;) {
                                if (o.key === D) {
                                    if (D = r.type, D === jl) {
                                        if (o.tag === 7) {
                                            a(d, o.sibling), S = e(o, r.props.children), S.return = d, d = S;
                                            break l
                                        }
                                    } else if (o.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Kl && no(D) === o.type) {
                                        a(d, o.sibling), S = e(o, r.props), ku(S, r), S.return = d, d = S;
                                        break l
                                    }
                                    a(d, o);
                                    break
                                } else t(d, o);
                                o = o.sibling
                            }
                            r.type === jl ? (S = Ta(r.props.children, d.mode, S, r.key), S.return = d, d = S) : (S = Be(r.type, r.key, r.props, null, d.mode, S), ku(S, r), S.return = d, d = S)
                        }
                        return i(d);
                    case ql:
                        l: {
                            for (D = r.key; o !== null;) {
                                if (o.key === D)
                                    if (o.tag === 4 && o.stateNode.containerInfo === r.containerInfo && o.stateNode.implementation === r.implementation) {
                                        a(d, o.sibling), S = e(o, r.children || []), S.return = d, d = S;
                                        break l
                                    } else {
                                        a(d, o);
                                        break
                                    }
                                else t(d, o);
                                o = o.sibling
                            }
                            S = yi(r, d.mode, S),
                            S.return = d,
                            d = S
                        }
                        return i(d);
                    case Kl:
                        return D = r._init, r = D(r._payload), ul(d, o, r, S)
                }
                if (Ul(r)) return B(d, o, r, S);
                if (Dl(r)) {
                    if (D = Dl(r), typeof D != "function") throw Error(y(150));
                    return r = D.call(r), q(d, o, r, S)
                }
                if (typeof r.then == "function") return ul(d, o, ln(r), S);
                if (r.$$typeof === Ol) return ul(d, o, Qe(d, r), S);
                tn(d, r)
            }
            return typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint" ? (r = "" + r, o !== null && o.tag === 6 ? (a(d, o.sibling), S = e(o, r), S.return = d, d = S) : (a(d, o), S = mi(r, d.mode, S), S.return = d, d = S), i(d)) : a(d, o)
        }
        return function(d, o, r, S) {
            try {
                Wu = 0;
                var D = ul(d, o, r, S);
                return eu = null, D
            } catch (N) {
                if (N === Xu || N === Ve) throw N;
                var V = $l(29, N, null, d.mode);
                return V.lanes = S, V.return = d, V
            } finally {}
        }
    }
    var nu = io(!0),
        co = io(!1),
        st = p(null),
        Tt = null;

    function $t(l) {
        var t = l.alternate;
        x(Tl, Tl.current & 1), x(st, l), Tt === null && (t === null || lu.current !== null || t.memoizedState !== null) && (Tt = l)
    }

    function fo(l) {
        if (l.tag === 22) {
            if (x(Tl, Tl.current), x(st, l), Tt === null) {
                var t = l.alternate;
                t !== null && t.memoizedState !== null && (Tt = l)
            }
        } else Ft()
    }

    function Ft() {
        x(Tl, Tl.current), x(st, st.current)
    }

    function qt(l) {
        M(st), Tt === l && (Tt = null), M(Tl)
    }
    var Tl = p(0);

    function an(l) {
        for (var t = l; t !== null;) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Gc(a))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === l) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === l) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function ki(l, t, a, u) {
        t = l.memoizedState, a = a(u, t), a = a == null ? t : U({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a)
    }
    var $i = {
        enqueueSetState: function(l, t, a) {
            l = l._reactInternals;
            var u = lt(),
                e = Jt(u);
            e.payload = t, a != null && (e.callback = a), t = Wt(l, e, u), t !== null && (tt(t, l, u), Qu(t, l, u))
        },
        enqueueReplaceState: function(l, t, a) {
            l = l._reactInternals;
            var u = lt(),
                e = Jt(u);
            e.tag = 1, e.payload = t, a != null && (e.callback = a), t = Wt(l, e, u), t !== null && (tt(t, l, u), Qu(t, l, u))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var a = lt(),
                u = Jt(a);
            u.tag = 2, t != null && (u.callback = t), t = Wt(l, u, a), t !== null && (tt(t, l, a), Qu(t, l, a))
        }
    };

    function so(l, t, a, u, e, n, i) {
        return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Nu(a, u) || !Nu(e, n) : !0
    }

    function oo(l, t, a, u) {
        l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && $i.enqueueReplaceState(t, t.state, null)
    }

    function Da(l, t) {
        var a = t;
        if ("ref" in t) {
            a = {};
            for (var u in t) u !== "ref" && (a[u] = t[u])
        }
        if (l = l.defaultProps) {
            a === t && (a = U({}, a));
            for (var e in l) a[e] === void 0 && (a[e] = l[e])
        }
        return a
    }
    var un = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    };

    function ro(l) {
        un(l)
    }

    function vo(l) {
        console.error(l)
    }

    function ho(l) {
        un(l)
    }

    function en(l, t) {
        try {
            var a = l.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }

    function mo(l, t, a) {
        try {
            var u = l.onCaughtError;
            u(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }

    function Fi(l, t, a) {
        return a = Jt(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function() {
            en(l, t)
        }, a
    }

    function yo(l) {
        return l = Jt(l), l.tag = 3, l
    }

    function go(l, t, a, u) {
        var e = a.type.getDerivedStateFromError;
        if (typeof e == "function") {
            var n = u.value;
            l.payload = function() {
                return e(n)
            }, l.callback = function() {
                mo(t, a, u)
            }
        }
        var i = a.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
            mo(t, a, u), typeof e != "function" && (ua === null ? ua = new Set([this]) : ua.add(this));
            var c = u.stack;
            this.componentDidCatch(u.value, {
                componentStack: c !== null ? c : ""
            })
        })
    }

    function R0(l, t, a, u, e) {
        if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
            if (t = a.alternate, t !== null && Yu(t, a, e, !0), a = st.current, a !== null) {
                switch (a.tag) {
                    case 13:
                        return Tt === null ? Ac() : a.alternate === null && vl === 0 && (vl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === _i ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([u]) : t.add(u), pc(l, u, e)), !1;
                    case 22:
                        return a.flags |= 65536, u === _i ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([u])
                        }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([u]) : a.add(u)), pc(l, u, e)), !1
                }
                throw Error(y(435, a.tag))
            }
            return pc(l, u, e), Ac(), !1
        }
        if (I) return t = st.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Si && (l = Error(y(422), {
            cause: u
        }), ju(nt(l, a)))) : (u !== Si && (t = Error(y(423), {
            cause: u
        }), ju(nt(t, a))), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = nt(u, a), e = Fi(l.stateNode, u, e), Di(l, e), vl !== 4 && (vl = 2)), !1;
        var n = Error(y(520), {
            cause: u
        });
        if (n = nt(n, a), ae === null ? ae = [n] : ae.push(n), vl !== 4 && (vl = 2), t === null) return !0;
        u = nt(u, a), a = t;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536, l = e & -e, a.lanes |= l, l = Fi(a.stateNode, u, l), Di(a, l), !1;
                case 1:
                    if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ua === null || !ua.has(n)))) return a.flags |= 65536, e &= -e, a.lanes |= e, e = yo(e), go(e, l, a, u), Di(a, e), !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var bo = Error(y(461)),
        El = !1;

    function xl(l, t, a, u) {
        t.child = l === null ? co(t, null, a, u) : nu(t, l.child, a, u)
    }

    function So(l, t, a, u, e) {
        a = a.render;
        var n = t.ref;
        if ("ref" in u) {
            var i = {};
            for (var c in u) c !== "ref" && (i[c] = u[c])
        } else i = u;
        return _a(t), u = qi(l, t, a, i, n, e), c = ji(), l !== null && !El ? (Yi(l, t, e), jt(l, t, e)) : (I && c && gi(t), t.flags |= 1, xl(l, t, u, e), t.child)
    }

    function To(l, t, a, u, e) {
        if (l === null) {
            var n = a.type;
            return typeof n == "function" && !hi(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Ao(l, t, n, u, e)) : (l = Be(a.type, null, u, t, t.mode, e), l.ref = t.ref, l.return = t, t.child = l)
        }
        if (n = l.child, !nc(l, e)) {
            var i = n.memoizedProps;
            if (a = a.compare, a = a !== null ? a : Nu, a(i, u) && l.ref === t.ref) return jt(l, t, e)
        }
        return t.flags |= 1, l = Ot(n, u), l.ref = t.ref, l.return = t, t.child = l
    }

    function Ao(l, t, a, u, e) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (Nu(n, u) && l.ref === t.ref)
                if (El = !1, t.pendingProps = u = n, nc(l, e))(l.flags & 131072) !== 0 && (El = !0);
                else return t.lanes = l.lanes, jt(l, t, e)
        }
        return Ii(l, t, a, u, e)
    }

    function Eo(l, t, a) {
        var u = t.pendingProps,
            e = u.children,
            n = l !== null ? l.memoizedState : null;
        if (u.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (u = n !== null ? n.baseLanes | a : a, l !== null) {
                    for (e = t.child = l.child, n = 0; e !== null;) n = n | e.lanes | e.childLanes, e = e.sibling;
                    t.childLanes = n & ~u
                } else t.childLanes = 0, t.child = null;
                return po(l, t, u, a)
            }
            if ((a & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, l !== null && Ze(t, n !== null ? n.cachePool : null), n !== null ? Ts(t, n) : Ni(), fo(t);
            else return t.lanes = t.childLanes = 536870912, po(l, t, n !== null ? n.baseLanes | a : a, a)
        } else n !== null ? (Ze(t, n.cachePool), Ts(t, n), Ft(), t.memoizedState = null) : (l !== null && Ze(t, null), Ni(), Ft());
        return xl(l, t, e, a), t.child
    }

    function po(l, t, a, u) {
        var e = xi();
        return e = e === null ? null : {
            parent: Sl._currentValue,
            pool: e
        }, t.memoizedState = {
            baseLanes: a,
            cachePool: e
        }, l !== null && Ze(t, null), Ni(), fo(t), l !== null && Yu(l, t, u, !0), null
    }

    function nn(l, t) {
        var a = t.ref;
        if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(y(284));
            (l === null || l.ref !== a) && (t.flags |= 4194816)
        }
    }

    function Ii(l, t, a, u, e) {
        return _a(t), a = qi(l, t, a, u, void 0, e), u = ji(), l !== null && !El ? (Yi(l, t, e), jt(l, t, e)) : (I && u && gi(t), t.flags |= 1, xl(l, t, a, e), t.child)
    }

    function zo(l, t, a, u, e, n) {
        return _a(t), t.updateQueue = null, a = Es(t, u, a, e), As(l), u = ji(), l !== null && !El ? (Yi(l, t, n), jt(l, t, n)) : (I && u && gi(t), t.flags |= 1, xl(l, t, a, n), t.child)
    }

    function xo(l, t, a, u, e) {
        if (_a(t), t.stateNode === null) {
            var n = ka,
                i = a.contextType;
            typeof i == "object" && i !== null && (n = Rl(i)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = $i, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Mi(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? Rl(i) : ka, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (ki(t, a, i, u), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && $i.enqueueReplaceState(n, n.state, null), Vu(t, u, n, e), Zu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0
        } else if (l === null) {
            n = t.stateNode;
            var c = t.memoizedProps,
                f = Da(a, c);
            n.props = f;
            var v = n.context,
                g = a.contextType;
            i = ka, typeof g == "object" && g !== null && (i = Rl(g));
            var T = a.getDerivedStateFromProps;
            g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || v !== i) && oo(t, n, u, i), wt = !1;
            var h = t.memoizedState;
            n.state = h, Vu(t, u, n, e), Zu(), v = t.memoizedState, c || h !== v || wt ? (typeof T == "function" && (ki(t, a, T, u), v = t.memoizedState), (f = wt || so(t, a, f, u, h, v, i)) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = v), n.props = u, n.state = v, n.context = i, u = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1)
        } else {
            n = t.stateNode, Oi(l, t), i = t.memoizedProps, g = Da(a, i), n.props = g, T = t.pendingProps, h = n.context, v = a.contextType, f = ka, typeof v == "object" && v !== null && (f = Rl(v)), c = a.getDerivedStateFromProps, (v = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== T || h !== f) && oo(t, n, u, f), wt = !1, h = t.memoizedState, n.state = h, Vu(t, u, n, e), Zu();
            var m = t.memoizedState;
            i !== T || h !== m || wt || l !== null && l.dependencies !== null && Ce(l.dependencies) ? (typeof c == "function" && (ki(t, a, c, u), m = t.memoizedState), (g = wt || so(t, a, g, u, h, m, f) || l !== null && l.dependencies !== null && Ce(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, m, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(u, m, f)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = f, u = g) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), u = !1)
        }
        return n = u, nn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = nu(t, l.child, null, e), t.child = nu(t, null, a, e)) : xl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = jt(l, t, e), l
    }

    function _o(l, t, a, u) {
        return qu(), t.flags |= 256, xl(l, t, a, u), t.child
    }
    var Pi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function lc(l) {
        return {
            baseLanes: l,
            cachePool: rs()
        }
    }

    function tc(l, t, a) {
        return l = l !== null ? l.childLanes & ~a : 0, t && (l |= ot), l
    }

    function Mo(l, t, a) {
        var u = t.pendingProps,
            e = !1,
            n = (t.flags & 128) !== 0,
            i;
        if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Tl.current & 2) !== 0), i && (e = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
            if (I) {
                if (e ? $t(t) : Ft(), I) {
                    var c = rl,
                        f;
                    if (f = c) {
                        l: {
                            for (f = c, c = St; f.nodeType !== 8;) {
                                if (!c) {
                                    c = null;
                                    break l
                                }
                                if (f = yt(f.nextSibling), f === null) {
                                    c = null;
                                    break l
                                }
                            }
                            c = f
                        }
                        c !== null ? (t.memoizedState = {
                            dehydrated: c,
                            treeContext: Aa !== null ? {
                                id: Dt,
                                overflow: Ut
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, f = $l(18, null, null, 0), f.stateNode = c, f.return = t, t.child = f, Yl = t, rl = null, f = !0) : f = !1
                    }
                    f || za(t)
                }
                if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null)) return Gc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
                qt(t)
            }
            return c = u.children, u = u.fallback, e ? (Ft(), e = t.mode, c = cn({
                mode: "hidden",
                children: c
            }, e), u = Ta(u, e, a, null), c.return = t, u.return = t, c.sibling = u, t.child = c, e = t.child, e.memoizedState = lc(a), e.childLanes = tc(l, i, a), t.memoizedState = Pi, u) : ($t(t), ac(t, c))
        }
        if (f = l.memoizedState, f !== null && (c = f.dehydrated, c !== null)) {
            if (n) t.flags & 256 ? ($t(t), t.flags &= -257, t = uc(l, t, a)) : t.memoizedState !== null ? (Ft(), t.child = l.child, t.flags |= 128, t = null) : (Ft(), e = u.fallback, c = t.mode, u = cn({
                mode: "visible",
                children: u.children
            }, c), e = Ta(e, c, a, null), e.flags |= 2, u.return = t, e.return = t, u.sibling = e, t.child = u, nu(t, l.child, null, a), u = t.child, u.memoizedState = lc(a), u.childLanes = tc(l, i, a), t.memoizedState = Pi, t = e);
            else if ($t(t), Gc(c)) {
                if (i = c.nextSibling && c.nextSibling.dataset, i) var v = i.dgst;
                i = v, u = Error(y(419)), u.stack = "", u.digest = i, ju({
                    value: u,
                    source: null,
                    stack: null
                }), t = uc(l, t, a)
            } else if (El || Yu(l, t, a, !1), i = (a & l.childLanes) !== 0, El || i) {
                if (i = fl, i !== null && (u = a & -a, u = (u & 42) !== 0 ? 1 : Xn(u), u = (u & (i.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== f.retryLane)) throw f.retryLane = u, Wa(l, u), tt(i, l, u), bo;
                c.data === "$?" || Ac(), t = uc(l, t, a)
            } else c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, rl = yt(c.nextSibling), Yl = t, I = !0, pa = null, St = !1, l !== null && (ct[ft++] = Dt, ct[ft++] = Ut, ct[ft++] = Aa, Dt = l.id, Ut = l.overflow, Aa = t), t = ac(t, u.children), t.flags |= 4096);
            return t
        }
        return e ? (Ft(), e = u.fallback, c = t.mode, f = l.child, v = f.sibling, u = Ot(f, {
            mode: "hidden",
            children: u.children
        }), u.subtreeFlags = f.subtreeFlags & 65011712, v !== null ? e = Ot(v, e) : (e = Ta(e, c, a, null), e.flags |= 2), e.return = t, u.return = t, u.sibling = e, t.child = u, u = e, e = t.child, c = l.child.memoizedState, c === null ? c = lc(a) : (f = c.cachePool, f !== null ? (v = Sl._currentValue, f = f.parent !== v ? {
            parent: v,
            pool: v
        } : f) : f = rs(), c = {
            baseLanes: c.baseLanes | a,
            cachePool: f
        }), e.memoizedState = c, e.childLanes = tc(l, i, a), t.memoizedState = Pi, u) : ($t(t), a = l.child, l = a.sibling, a = Ot(a, {
            mode: "visible",
            children: u.children
        }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a)
    }

    function ac(l, t) {
        return t = cn({
            mode: "visible",
            children: t
        }, l.mode), t.return = l, l.child = t
    }

    function cn(l, t) {
        return l = $l(22, l, null, t), l.lanes = 0, l.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, l
    }

    function uc(l, t, a) {
        return nu(t, l.child, null, a), l = ac(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l
    }

    function Oo(l, t, a) {
        l.lanes |= t;
        var u = l.alternate;
        u !== null && (u.lanes |= t), Ai(l.return, t, a)
    }

    function ec(l, t, a, u, e) {
        var n = l.memoizedState;
        n === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: a,
            tailMode: e
        } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = a, n.tailMode = e)
    }

    function Do(l, t, a) {
        var u = t.pendingProps,
            e = u.revealOrder,
            n = u.tail;
        if (xl(l, t, u.children, a), u = Tl.current, (u & 2) !== 0) u = u & 1 | 2, t.flags |= 128;
        else {
            if (l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null;) {
                if (l.tag === 13) l.memoizedState !== null && Oo(l, a, t);
                else if (l.tag === 19) Oo(l, a, t);
                else if (l.child !== null) {
                    l.child.return = l, l = l.child;
                    continue
                }
                if (l === t) break l;
                for (; l.sibling === null;) {
                    if (l.return === null || l.return === t) break l;
                    l = l.return
                }
                l.sibling.return = l.return, l = l.sibling
            }
            u &= 1
        }
        switch (x(Tl, u), e) {
            case "forwards":
                for (a = t.child, e = null; a !== null;) l = a.alternate, l !== null && an(l) === null && (e = a), a = a.sibling;
                a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), ec(t, !1, e, a, n);
                break;
            case "backwards":
                for (a = null, e = t.child, t.child = null; e !== null;) {
                    if (l = e.alternate, l !== null && an(l) === null) {
                        t.child = e;
                        break
                    }
                    l = e.sibling, e.sibling = a, a = e, e = l
                }
                ec(t, !0, a, null, n);
                break;
            case "together":
                ec(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function jt(l, t, a) {
        if (l !== null && (t.dependencies = l.dependencies), aa |= t.lanes, (a & t.childLanes) === 0)
            if (l !== null) {
                if (Yu(l, t, a, !1), (a & t.childLanes) === 0) return null
            } else return null;
        if (l !== null && t.child !== l.child) throw Error(y(153));
        if (t.child !== null) {
            for (l = t.child, a = Ot(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null;) l = l.sibling, a = a.sibling = Ot(l, l.pendingProps), a.return = t;
            a.sibling = null
        }
        return t.child
    }

    function nc(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ce(l)))
    }

    function H0(l, t, a) {
        switch (t.tag) {
            case 3:
                sl(t, t.stateNode.containerInfo), Kt(t, Sl, l.memoizedState.cache), qu();
                break;
            case 27:
            case 5:
                qn(t);
                break;
            case 4:
                sl(t, t.stateNode.containerInfo);
                break;
            case 10:
                Kt(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var u = t.memoizedState;
                if (u !== null) return u.dehydrated !== null ? ($t(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Mo(l, t, a) : ($t(t), l = jt(l, t, a), l !== null ? l.sibling : null);
                $t(t);
                break;
            case 19:
                var e = (l.flags & 128) !== 0;
                if (u = (a & t.childLanes) !== 0, u || (Yu(l, t, a, !1), u = (a & t.childLanes) !== 0), e) {
                    if (u) return Do(l, t, a);
                    t.flags |= 128
                }
                if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), x(Tl, Tl.current), u) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Eo(l, t, a);
            case 24:
                Kt(t, Sl, l.memoizedState.cache)
        }
        return jt(l, t, a)
    }

    function Uo(l, t, a) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps) El = !0;
            else {
                if (!nc(l, a) && (t.flags & 128) === 0) return El = !1, H0(l, t, a);
                El = (l.flags & 131072) !== 0
            }
        else El = !1, I && (t.flags & 1048576) !== 0 && ns(t, Xe, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                l: {
                    l = t.pendingProps;
                    var u = t.elementType,
                        e = u._init;
                    if (u = e(u._payload), t.type = u, typeof u == "function") hi(u) ? (l = Da(u, l), t.tag = 1, t = xo(null, t, u, l, a)) : (t.tag = 0, t = Ii(null, t, u, l, a));
                    else {
                        if (u != null) {
                            if (e = u.$$typeof, e === vt) {
                                t.tag = 11, t = So(null, t, u, l, a);
                                break l
                            } else if (e === Ll) {
                                t.tag = 14, t = To(null, t, u, l, a);
                                break l
                            }
                        }
                        throw t = ha(u) || u, Error(y(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Ii(l, t, t.type, t.pendingProps, a);
            case 1:
                return u = t.type, e = Da(u, t.pendingProps), xo(l, t, u, e, a);
            case 3:
                l: {
                    if (sl(t, t.stateNode.containerInfo), l === null) throw Error(y(387));u = t.pendingProps;
                    var n = t.memoizedState;e = n.element,
                    Oi(l, t),
                    Vu(t, u, null, a);
                    var i = t.memoizedState;
                    if (u = i.cache, Kt(t, Sl, u), u !== n.cache && Ei(t, [Sl], a, !0), Zu(), u = i.element, n.isDehydrated)
                        if (n = {
                                element: u,
                                isDehydrated: !1,
                                cache: i.cache
                            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
                            t = _o(l, t, u, a);
                            break l
                        } else if (u !== e) {
                        e = nt(Error(y(424)), t), ju(e), t = _o(l, t, u, a);
                        break l
                    } else {
                        switch (l = t.stateNode.containerInfo, l.nodeType) {
                            case 9:
                                l = l.body;
                                break;
                            default:
                                l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                        }
                        for (rl = yt(l.firstChild), Yl = t, I = !0, pa = null, St = !0, a = co(t, null, u, a), t.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling
                    } else {
                        if (qu(), u === e) {
                            t = jt(l, t, a);
                            break l
                        }
                        xl(l, t, u, a)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return nn(l, t), l === null ? (a = qd(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : I || (a = t.type, l = t.pendingProps, u = An(G.current).createElement(a), u[Nl] = t, u[Gl] = l, Ml(u, a, l), Al(u), t.stateNode = u) : t.memoizedState = qd(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
            case 27:
                return qn(t), l === null && I && (u = t.stateNode = Nd(t.type, t.pendingProps, G.current), Yl = t, St = !0, e = rl, ia(t.type) ? (Xc = e, rl = yt(u.firstChild)) : rl = e), xl(l, t, t.pendingProps.children, a), nn(l, t), l === null && (t.flags |= 4194304), t.child;
            case 5:
                return l === null && I && ((e = u = rl) && (u = cv(u, t.type, t.pendingProps, St), u !== null ? (t.stateNode = u, Yl = t, rl = yt(u.firstChild), St = !1, e = !0) : e = !1), e || za(t)), qn(t), e = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, u = n.children, jc(e, n) ? u = null : i !== null && jc(e, i) && (t.flags |= 32), t.memoizedState !== null && (e = qi(l, t, x0, null, null, a), de._currentValue = e), nn(l, t), xl(l, t, u, a), t.child;
            case 6:
                return l === null && I && ((l = a = rl) && (a = fv(a, t.pendingProps, St), a !== null ? (t.stateNode = a, Yl = t, rl = null, l = !0) : l = !1), l || za(t)), null;
            case 13:
                return Mo(l, t, a);
            case 4:
                return sl(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = nu(t, null, u, a) : xl(l, t, u, a), t.child;
            case 11:
                return So(l, t, t.type, t.pendingProps, a);
            case 7:
                return xl(l, t, t.pendingProps, a), t.child;
            case 8:
                return xl(l, t, t.pendingProps.children, a), t.child;
            case 12:
                return xl(l, t, t.pendingProps.children, a), t.child;
            case 10:
                return u = t.pendingProps, Kt(t, t.type, u.value), xl(l, t, u.children, a), t.child;
            case 9:
                return e = t.type._context, u = t.pendingProps.children, _a(t), e = Rl(e), u = u(e), t.flags |= 1, xl(l, t, u, a), t.child;
            case 14:
                return To(l, t, t.type, t.pendingProps, a);
            case 15:
                return Ao(l, t, t.type, t.pendingProps, a);
            case 19:
                return Do(l, t, a);
            case 31:
                return u = t.pendingProps, a = t.mode, u = {
                    mode: u.mode,
                    children: u.children
                }, l === null ? (a = cn(u, a), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Ot(l.child, u), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
            case 22:
                return Eo(l, t, a);
            case 24:
                return _a(t), u = Rl(Sl), l === null ? (e = xi(), e === null && (e = fl, n = pi(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
                    parent: u,
                    cache: e
                }, Mi(t), Kt(t, Sl, e)) : ((l.lanes & a) !== 0 && (Oi(l, t), Vu(t, null, null, a), Zu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = {
                    parent: u,
                    cache: u
                }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Kt(t, Sl, u)) : (u = n.cache, Kt(t, Sl, u), u !== e.cache && Ei(t, [Sl], a, !0))), xl(l, t, t.pendingProps.children, a), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(y(156, t.tag))
    }

    function Yt(l) {
        l.flags |= 4
    }

    function No(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
        else if (l.flags |= 16777216, !Xd(t)) {
            if (t = st.current, t !== null && ((J & 4194048) === J ? Tt !== null : (J & 62914560) !== J && (J & 536870912) === 0 || t !== Tt)) throw Cu = _i, vs;
            l.flags |= 8192
        }
    }

    function fn(l, t) {
        t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? ff() : 536870912, l.lanes |= t, su |= t)
    }

    function $u(l, t) {
        if (!I) switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var a = null; t !== null;) t.alternate !== null && (a = t), t = t.sibling;
                a === null ? l.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = l.tail;
                for (var u = null; a !== null;) a.alternate !== null && (u = a), a = a.sibling;
                u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null
        }
    }

    function dl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child,
            a = 0,
            u = 0;
        if (t)
            for (var e = l.child; e !== null;) a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
        else
            for (e = l.child; e !== null;) a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
        return l.subtreeFlags |= u, l.childLanes = a, t
    }

    function q0(l, t, a) {
        var u = t.pendingProps;
        switch (bi(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return dl(t), null;
            case 1:
                return dl(t), null;
            case 3:
                return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Rt(Sl), Qt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (Hu(t) ? Yt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fs())), dl(t), null;
            case 26:
                return a = t.memoizedState, l === null ? (Yt(t), a !== null ? (dl(t), No(t, a)) : (dl(t), t.flags &= -16777217)) : a ? a !== l.memoizedState ? (Yt(t), dl(t), No(t, a)) : (dl(t), t.flags &= -16777217) : (l.memoizedProps !== u && Yt(t), dl(t), t.flags &= -16777217), null;
            case 27:
                be(t), a = G.current;
                var e = t.type;
                if (l !== null && t.stateNode != null) l.memoizedProps !== u && Yt(t);
                else {
                    if (!u) {
                        if (t.stateNode === null) throw Error(y(166));
                        return dl(t), null
                    }
                    l = H.current, Hu(t) ? is(t) : (l = Nd(e, u, a), t.stateNode = l, Yt(t))
                }
                return dl(t), null;
            case 5:
                if (be(t), a = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Yt(t);
                else {
                    if (!u) {
                        if (t.stateNode === null) throw Error(y(166));
                        return dl(t), null
                    }
                    if (l = H.current, Hu(t)) is(t);
                    else {
                        switch (e = An(G.current), l) {
                            case 1:
                                l = e.createElementNS("http://www.w3.org/2000/svg", a);
                                break;
                            case 2:
                                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                break;
                            default:
                                switch (a) {
                                    case "svg":
                                        l = e.createElementNS("http://www.w3.org/2000/svg", a);
                                        break;
                                    case "math":
                                        l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                        break;
                                    case "script":
                                        l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                                        break;
                                    case "select":
                                        l = typeof u.is == "string" ? e.createElement("select", {
                                            is: u.is
                                        }) : e.createElement("select"), u.multiple ? l.multiple = !0 : u.size && (l.size = u.size);
                                        break;
                                    default:
                                        l = typeof u.is == "string" ? e.createElement(a, {
                                            is: u.is
                                        }) : e.createElement(a)
                                }
                        }
                        l[Nl] = t, l[Gl] = u;
                        l: for (e = t.child; e !== null;) {
                            if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
                            else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break l;
                            for (; e.sibling === null;) {
                                if (e.return === null || e.return === t) break l;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        t.stateNode = l;
                        l: switch (Ml(l, a, u), a) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l = !!u.autoFocus;
                                break l;
                            case "img":
                                l = !0;
                                break l;
                            default:
                                l = !1
                        }
                        l && Yt(t)
                    }
                }
                return dl(t), t.flags &= -16777217, null;
            case 6:
                if (l && t.stateNode != null) l.memoizedProps !== u && Yt(t);
                else {
                    if (typeof u != "string" && t.stateNode === null) throw Error(y(166));
                    if (l = G.current, Hu(t)) {
                        if (l = t.stateNode, a = t.memoizedProps, u = null, e = Yl, e !== null) switch (e.tag) {
                            case 27:
                            case 5:
                                u = e.memoizedProps
                        }
                        l[Nl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || zd(l.nodeValue, a)), l || za(t)
                    } else l = An(l).createTextNode(u), l[Nl] = t, t.stateNode = l
                }
                return dl(t), null;
            case 13:
                if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                    if (e = Hu(t), u !== null && u.dehydrated !== null) {
                        if (l === null) {
                            if (!e) throw Error(y(318));
                            if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
                            e[Nl] = t
                        } else qu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        dl(t), e = !1
                    } else e = fs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
                    if (!e) return t.flags & 256 ? (qt(t), t) : (qt(t), null)
                }
                if (qt(t), (t.flags & 128) !== 0) return t.lanes = a, t;
                if (a = u !== null, l = l !== null && l.memoizedState !== null, a) {
                    u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
                    var n = null;
                    u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)
                }
                return a !== l && a && (t.child.flags |= 8192), fn(t, t.updateQueue), dl(t), null;
            case 4:
                return Qt(), l === null && Uc(t.stateNode.containerInfo), dl(t), null;
            case 10:
                return Rt(t.type), dl(t), null;
            case 19:
                if (M(Tl), e = t.memoizedState, e === null) return dl(t), null;
                if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
                    if (u) $u(e, !1);
                    else {
                        if (vl !== 0 || l !== null && (l.flags & 128) !== 0)
                            for (l = t.child; l !== null;) {
                                if (n = an(l), n !== null) {
                                    for (t.flags |= 128, $u(e, !1), l = n.updateQueue, t.updateQueue = l, fn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null;) es(a, l), a = a.sibling;
                                    return x(Tl, Tl.current & 1 | 2), t.child
                                }
                                l = l.sibling
                            }
                        e.tail !== null && bt() > dn && (t.flags |= 128, u = !0, $u(e, !1), t.lanes = 4194304)
                    }
                else {
                    if (!u)
                        if (l = an(n), l !== null) {
                            if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, fn(t, l), $u(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !I) return dl(t), null
                        } else 2 * bt() - e.renderingStartTime > dn && a !== 536870912 && (t.flags |= 128, u = !0, $u(e, !1), t.lanes = 4194304);
                    e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n)
                }
                return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = bt(), t.sibling = null, l = Tl.current, x(Tl, u ? l & 1 | 2 : l & 1), t) : (dl(t), null);
            case 22:
            case 23:
                return qt(t), Ri(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), a = t.updateQueue, a !== null && fn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && M(Ma), null;
            case 24:
                return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Rt(Sl), dl(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(y(156, t.tag))
    }

    function j0(l, t) {
        switch (bi(t), t.tag) {
            case 1:
                return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 3:
                return Rt(Sl), Qt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return be(t), null;
            case 13:
                if (qt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
                    if (t.alternate === null) throw Error(y(340));
                    qu()
                }
                return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 19:
                return M(Tl), null;
            case 4:
                return Qt(), null;
            case 10:
                return Rt(t.type), null;
            case 22:
            case 23:
                return qt(t), Ri(), l !== null && M(Ma), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 24:
                return Rt(Sl), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Ro(l, t) {
        switch (bi(t), t.tag) {
            case 3:
                Rt(Sl), Qt();
                break;
            case 26:
            case 27:
            case 5:
                be(t);
                break;
            case 4:
                Qt();
                break;
            case 13:
                qt(t);
                break;
            case 19:
                M(Tl);
                break;
            case 10:
                Rt(t.type);
                break;
            case 22:
            case 23:
                qt(t), Ri(), l !== null && M(Ma);
                break;
            case 24:
                Rt(Sl)
        }
    }

    function Fu(l, t) {
        try {
            var a = t.updateQueue,
                u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var e = u.next;
                a = e;
                do {
                    if ((a.tag & l) === l) {
                        u = void 0;
                        var n = a.create,
                            i = a.inst;
                        u = n(), i.destroy = u
                    }
                    a = a.next
                } while (a !== e)
            }
        } catch (c) {
            il(t, t.return, c)
        }
    }

    function It(l, t, a) {
        try {
            var u = t.updateQueue,
                e = u !== null ? u.lastEffect : null;
            if (e !== null) {
                var n = e.next;
                u = n;
                do {
                    if ((u.tag & l) === l) {
                        var i = u.inst,
                            c = i.destroy;
                        if (c !== void 0) {
                            i.destroy = void 0, e = t;
                            var f = a,
                                v = c;
                            try {
                                v()
                            } catch (g) {
                                il(e, f, g)
                            }
                        }
                    }
                    u = u.next
                } while (u !== n)
            }
        } catch (g) {
            il(t, t.return, g)
        }
    }

    function Ho(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var a = l.stateNode;
            try {
                Ss(t, a)
            } catch (u) {
                il(l, l.return, u)
            }
        }
    }

    function qo(l, t, a) {
        a.props = Da(l.type, l.memoizedProps), a.state = l.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (u) {
            il(l, t, u)
        }
    }

    function Iu(l, t) {
        try {
            var a = l.ref;
            if (a !== null) {
                switch (l.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var u = l.stateNode;
                        break;
                    case 30:
                        u = l.stateNode;
                        break;
                    default:
                        u = l.stateNode
                }
                typeof a == "function" ? l.refCleanup = a(u) : a.current = u
            }
        } catch (e) {
            il(l, t, e)
        }
    }

    function At(l, t) {
        var a = l.ref,
            u = l.refCleanup;
        if (a !== null)
            if (typeof u == "function") try {
                u()
            } catch (e) {
                il(l, t, e)
            } finally {
                l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null)
            } else if (typeof a == "function") try {
                a(null)
            } catch (e) {
                il(l, t, e)
            } else a.current = null
    }

    function jo(l) {
        var t = l.type,
            a = l.memoizedProps,
            u = l.stateNode;
        try {
            l: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && u.focus();
                    break l;
                case "img":
                    a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet)
            }
        }
        catch (e) {
            il(l, l.return, e)
        }
    }

    function ic(l, t, a) {
        try {
            var u = l.stateNode;
            av(u, l.type, a, t), u[Gl] = t
        } catch (e) {
            il(l, l.return, e)
        }
    }

    function Yo(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ia(l.type) || l.tag === 4
    }

    function cc(l) {
        l: for (;;) {
            for (; l.sibling === null;) {
                if (l.return === null || Yo(l.return)) return null;
                l = l.return
            }
            for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
                if (l.tag === 27 && ia(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
                l.child.return = l, l = l.child
            }
            if (!(l.flags & 2)) return l.stateNode
        }
    }

    function fc(l, t, a) {
        var u = l.tag;
        if (u === 5 || u === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Tn));
        else if (u !== 4 && (u === 27 && ia(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
            for (fc(l, t, a), l = l.sibling; l !== null;) fc(l, t, a), l = l.sibling
    }

    function sn(l, t, a) {
        var u = l.tag;
        if (u === 5 || u === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
        else if (u !== 4 && (u === 27 && ia(l.type) && (a = l.stateNode), l = l.child, l !== null))
            for (sn(l, t, a), l = l.sibling; l !== null;) sn(l, t, a), l = l.sibling
    }

    function Bo(l) {
        var t = l.stateNode,
            a = l.memoizedProps;
        try {
            for (var u = l.type, e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
            Ml(t, u, a), t[Nl] = l, t[Gl] = a
        } catch (n) {
            il(l, l.return, n)
        }
    }
    var Bt = !1,
        yl = !1,
        sc = !1,
        Go = typeof WeakSet == "function" ? WeakSet : Set,
        pl = null;

    function Y0(l, t) {
        if (l = l.containerInfo, Hc = Mn, l = Wf(l), ci(l)) {
            if ("selectionStart" in l) var a = {
                start: l.selectionStart,
                end: l.selectionEnd
            };
            else l: {
                a = (a = l.ownerDocument) && a.defaultView || window;
                var u = a.getSelection && a.getSelection();
                if (u && u.rangeCount !== 0) {
                    a = u.anchorNode;
                    var e = u.anchorOffset,
                        n = u.focusNode;
                    u = u.focusOffset;
                    try {
                        a.nodeType, n.nodeType
                    } catch {
                        a = null;
                        break l
                    }
                    var i = 0,
                        c = -1,
                        f = -1,
                        v = 0,
                        g = 0,
                        T = l,
                        h = null;
                    t: for (;;) {
                        for (var m; T !== a || e !== 0 && T.nodeType !== 3 || (c = i + e), T !== n || u !== 0 && T.nodeType !== 3 || (f = i + u), T.nodeType === 3 && (i += T.nodeValue.length), (m = T.firstChild) !== null;) h = T, T = m;
                        for (;;) {
                            if (T === l) break t;
                            if (h === a && ++v === e && (c = i), h === n && ++g === u && (f = i), (m = T.nextSibling) !== null) break;
                            T = h, h = T.parentNode
                        }
                        T = m
                    }
                    a = c === -1 || f === -1 ? null : {
                        start: c,
                        end: f
                    }
                } else a = null
            }
            a = a || {
                start: 0,
                end: 0
            }
        } else a = null;
        for (qc = {
                focusedElem: l,
                selectionRange: a
            }, Mn = !1, pl = t; pl !== null;)
            if (t = pl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null) l.return = t, pl = l;
            else
                for (; pl !== null;) {
                    switch (t = pl, n = t.alternate, l = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((l & 1024) !== 0 && n !== null) {
                                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                                try {
                                    var B = Da(a.type, e, a.elementType === a.type);
                                    l = u.getSnapshotBeforeUpdate(B, n), u.__reactInternalSnapshotBeforeUpdate = l
                                } catch (q) {
                                    il(a, a.return, q)
                                }
                            }
                            break;
                        case 3:
                            if ((l & 1024) !== 0) {
                                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) Bc(l);
                                else if (a === 1) switch (l.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Bc(l);
                                        break;
                                    default:
                                        l.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((l & 1024) !== 0) throw Error(y(163))
                    }
                    if (l = t.sibling, l !== null) {
                        l.return = t.return, pl = l;
                        break
                    }
                    pl = t.return
                }
    }

    function Xo(l, t, a) {
        var u = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Pt(l, a), u & 4 && Fu(5, a);
                break;
            case 1:
                if (Pt(l, a), u & 4)
                    if (l = a.stateNode, t === null) try {
                        l.componentDidMount()
                    } catch (i) {
                        il(a, a.return, i)
                    } else {
                        var e = Da(a.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate)
                        } catch (i) {
                            il(a, a.return, i)
                        }
                    }
                u & 64 && Ho(a), u & 512 && Iu(a, a.return);
                break;
            case 3:
                if (Pt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
                    if (t = null, a.child !== null) switch (a.child.tag) {
                        case 27:
                        case 5:
                            t = a.child.stateNode;
                            break;
                        case 1:
                            t = a.child.stateNode
                    }
                    try {
                        Ss(l, t)
                    } catch (i) {
                        il(a, a.return, i)
                    }
                }
                break;
            case 27:
                t === null && u & 4 && Bo(a);
            case 26:
            case 5:
                Pt(l, a), t === null && u & 4 && jo(a), u & 512 && Iu(a, a.return);
                break;
            case 12:
                Pt(l, a);
                break;
            case 13:
                Pt(l, a), u & 4 && Zo(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = K0.bind(null, a), sv(l, a))));
                break;
            case 22:
                if (u = a.memoizedState !== null || Bt, !u) {
                    t = t !== null && t.memoizedState !== null || yl, e = Bt;
                    var n = yl;
                    Bt = u, (yl = t) && !n ? la(l, a, (a.subtreeFlags & 8772) !== 0) : Pt(l, a), Bt = e, yl = n
                }
                break;
            case 30:
                break;
            default:
                Pt(l, a)
        }
    }

    function Co(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null, Co(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Zn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null
    }
    var ol = null,
        Ql = !1;

    function Gt(l, t, a) {
        for (a = a.child; a !== null;) Qo(l, t, a), a = a.sibling
    }

    function Qo(l, t, a) {
        if (Jl && typeof Jl.onCommitFiberUnmount == "function") try {
            Jl.onCommitFiberUnmount(Su, a)
        } catch {}
        switch (a.tag) {
            case 26:
                yl || At(a, t), Gt(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                break;
            case 27:
                yl || At(a, t);
                var u = ol,
                    e = Ql;
                ia(a.type) && (ol = a.stateNode, Ql = !1), Gt(l, t, a), ce(a.stateNode), ol = u, Ql = e;
                break;
            case 5:
                yl || At(a, t);
            case 6:
                if (u = ol, e = Ql, ol = null, Gt(l, t, a), ol = u, Ql = e, ol !== null)
                    if (Ql) try {
                        (ol.nodeType === 9 ? ol.body : ol.nodeName === "HTML" ? ol.ownerDocument.body : ol).removeChild(a.stateNode)
                    } catch (n) {
                        il(a, t, n)
                    } else try {
                        ol.removeChild(a.stateNode)
                    } catch (n) {
                        il(a, t, n)
                    }
                break;
            case 18:
                ol !== null && (Ql ? (l = ol, Dd(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), me(l)) : Dd(ol, a.stateNode));
                break;
            case 4:
                u = ol, e = Ql, ol = a.stateNode.containerInfo, Ql = !0, Gt(l, t, a), ol = u, Ql = e;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                yl || It(2, a, t), yl || It(4, a, t), Gt(l, t, a);
                break;
            case 1:
                yl || (At(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && qo(a, t, u)), Gt(l, t, a);
                break;
            case 21:
                Gt(l, t, a);
                break;
            case 22:
                yl = (u = yl) || a.memoizedState !== null, Gt(l, t, a), yl = u;
                break;
            default:
                Gt(l, t, a)
        }
    }

    function Zo(l, t) {
        if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
            me(l)
        } catch (a) {
            il(t, t.return, a)
        }
    }

    function B0(l) {
        switch (l.tag) {
            case 13:
            case 19:
                var t = l.stateNode;
                return t === null && (t = l.stateNode = new Go), t;
            case 22:
                return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Go), t;
            default:
                throw Error(y(435, l.tag))
        }
    }

    function oc(l, t) {
        var a = B0(l);
        t.forEach(function(u) {
            var e = w0.bind(null, l, u);
            a.has(u) || (a.add(u), u.then(e, e))
        })
    }

    function Fl(l, t) {
        var a = t.deletions;
        if (a !== null)
            for (var u = 0; u < a.length; u++) {
                var e = a[u],
                    n = l,
                    i = t,
                    c = i;
                l: for (; c !== null;) {
                    switch (c.tag) {
                        case 27:
                            if (ia(c.type)) {
                                ol = c.stateNode, Ql = !1;
                                break l
                            }
                            break;
                        case 5:
                            ol = c.stateNode, Ql = !1;
                            break l;
                        case 3:
                        case 4:
                            ol = c.stateNode.containerInfo, Ql = !0;
                            break l
                    }
                    c = c.return
                }
                if (ol === null) throw Error(y(160));
                Qo(n, i, e), ol = null, Ql = !1, n = e.alternate, n !== null && (n.return = null), e.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) Vo(t, l), t = t.sibling
    }
    var mt = null;

    function Vo(l, t) {
        var a = l.alternate,
            u = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Fl(t, l), Il(l), u & 4 && (It(3, l, l.return), Fu(3, l), It(5, l, l.return));
                break;
            case 1:
                Fl(t, l), Il(l), u & 512 && (yl || a === null || At(a, a.return)), u & 64 && Bt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
                break;
            case 26:
                var e = mt;
                if (Fl(t, l), Il(l), u & 512 && (yl || a === null || At(a, a.return)), u & 4) {
                    var n = a !== null ? a.memoizedState : null;
                    if (u = l.memoizedState, a === null)
                        if (u === null)
                            if (l.stateNode === null) {
                                l: {
                                    u = l.type,
                                    a = l.memoizedProps,
                                    e = e.ownerDocument || e;t: switch (u) {
                                        case "title":
                                            n = e.getElementsByTagName("title")[0], (!n || n[Eu] || n[Nl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(n, e.querySelector("head > title"))), Ml(n, u, a), n[Nl] = l, Al(n), u = n;
                                            break l;
                                        case "link":
                                            var i = Bd("link", "href", e).get(u + (a.href || ""));
                                            if (i) {
                                                for (var c = 0; c < i.length; c++)
                                                    if (n = i[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                        i.splice(c, 1);
                                                        break t
                                                    }
                                            }
                                            n = e.createElement(u), Ml(n, u, a), e.head.appendChild(n);
                                            break;
                                        case "meta":
                                            if (i = Bd("meta", "content", e).get(u + (a.content || ""))) {
                                                for (c = 0; c < i.length; c++)
                                                    if (n = i[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                        i.splice(c, 1);
                                                        break t
                                                    }
                                            }
                                            n = e.createElement(u), Ml(n, u, a), e.head.appendChild(n);
                                            break;
                                        default:
                                            throw Error(y(468, u))
                                    }
                                    n[Nl] = l,
                                    Al(n),
                                    u = n
                                }
                                l.stateNode = u
                            }
                    else Gd(e, l.type, l.stateNode);
                    else l.stateNode = Yd(e, u, l.memoizedProps);
                    else n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Gd(e, l.type, l.stateNode) : Yd(e, u, l.memoizedProps)) : u === null && l.stateNode !== null && ic(l, l.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                Fl(t, l), Il(l), u & 512 && (yl || a === null || At(a, a.return)), a !== null && u & 4 && ic(l, l.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if (Fl(t, l), Il(l), u & 512 && (yl || a === null || At(a, a.return)), l.flags & 32) {
                    e = l.stateNode;
                    try {
                        Qa(e, "")
                    } catch (m) {
                        il(l, l.return, m)
                    }
                }
                u & 4 && l.stateNode != null && (e = l.memoizedProps, ic(l, e, a !== null ? a.memoizedProps : e)), u & 1024 && (sc = !0);
                break;
            case 6:
                if (Fl(t, l), Il(l), u & 4) {
                    if (l.stateNode === null) throw Error(y(162));
                    u = l.memoizedProps, a = l.stateNode;
                    try {
                        a.nodeValue = u
                    } catch (m) {
                        il(l, l.return, m)
                    }
                }
                break;
            case 3:
                if (zn = null, e = mt, mt = En(t.containerInfo), Fl(t, l), mt = e, Il(l), u & 4 && a !== null && a.memoizedState.isDehydrated) try {
                    me(t.containerInfo)
                } catch (m) {
                    il(l, l.return, m)
                }
                sc && (sc = !1, Lo(l));
                break;
            case 4:
                u = mt, mt = En(l.stateNode.containerInfo), Fl(t, l), Il(l), mt = u;
                break;
            case 12:
                Fl(t, l), Il(l);
                break;
            case 13:
                Fl(t, l), Il(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (yc = bt()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, oc(l, u)));
                break;
            case 22:
                e = l.memoizedState !== null;
                var f = a !== null && a.memoizedState !== null,
                    v = Bt,
                    g = yl;
                if (Bt = v || e, yl = g || f, Fl(t, l), yl = g, Bt = v, Il(l), u & 8192) l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || f || Bt || yl || Ua(l)), a = null, t = l;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            f = a = t;
                            try {
                                if (n = f.stateNode, e) i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    c = f.stateNode;
                                    var T = f.memoizedProps.style,
                                        h = T != null && T.hasOwnProperty("display") ? T.display : null;
                                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim()
                                }
                            } catch (m) {
                                il(f, f.return, m)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            f = t;
                            try {
                                f.stateNode.nodeValue = e ? "" : f.memoizedProps
                            } catch (m) {
                                il(f, f.return, m)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === l) break l;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === l) break l;
                        a === t && (a = null), t = t.return
                    }
                    a === t && (a = null), t.sibling.return = t.return, t = t.sibling
                }
                u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, oc(l, a))));
                break;
            case 19:
                Fl(t, l), Il(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, oc(l, u)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                Fl(t, l), Il(l)
        }
    }

    function Il(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var a, u = l.return; u !== null;) {
                    if (Yo(u)) {
                        a = u;
                        break
                    }
                    u = u.return
                }
                if (a == null) throw Error(y(160));
                switch (a.tag) {
                    case 27:
                        var e = a.stateNode,
                            n = cc(l);
                        sn(l, n, e);
                        break;
                    case 5:
                        var i = a.stateNode;
                        a.flags & 32 && (Qa(i, ""), a.flags &= -33);
                        var c = cc(l);
                        sn(l, c, i);
                        break;
                    case 3:
                    case 4:
                        var f = a.stateNode.containerInfo,
                            v = cc(l);
                        fc(l, v, f);
                        break;
                    default:
                        throw Error(y(161))
                }
            } catch (g) {
                il(l, l.return, g)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }

    function Lo(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null;) {
                var t = l;
                Lo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling
            }
    }

    function Pt(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) Xo(l, t.alternate, t), t = t.sibling
    }

    function Ua(l) {
        for (l = l.child; l !== null;) {
            var t = l;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    It(4, t, t.return), Ua(t);
                    break;
                case 1:
                    At(t, t.return);
                    var a = t.stateNode;
                    typeof a.componentWillUnmount == "function" && qo(t, t.return, a), Ua(t);
                    break;
                case 27:
                    ce(t.stateNode);
                case 26:
                case 5:
                    At(t, t.return), Ua(t);
                    break;
                case 22:
                    t.memoizedState === null && Ua(t);
                    break;
                case 30:
                    Ua(t);
                    break;
                default:
                    Ua(t)
            }
            l = l.sibling
        }
    }

    function la(l, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var u = t.alternate,
                e = l,
                n = t,
                i = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    la(e, n, a), Fu(4, n);
                    break;
                case 1:
                    if (la(e, n, a), u = n, e = u.stateNode, typeof e.componentDidMount == "function") try {
                        e.componentDidMount()
                    } catch (v) {
                        il(u, u.return, v)
                    }
                    if (u = n, e = u.updateQueue, e !== null) {
                        var c = u.stateNode;
                        try {
                            var f = e.shared.hiddenCallbacks;
                            if (f !== null)
                                for (e.shared.hiddenCallbacks = null, e = 0; e < f.length; e++) bs(f[e], c)
                        } catch (v) {
                            il(u, u.return, v)
                        }
                    }
                    a && i & 64 && Ho(n), Iu(n, n.return);
                    break;
                case 27:
                    Bo(n);
                case 26:
                case 5:
                    la(e, n, a), a && u === null && i & 4 && jo(n), Iu(n, n.return);
                    break;
                case 12:
                    la(e, n, a);
                    break;
                case 13:
                    la(e, n, a), a && i & 4 && Zo(e, n);
                    break;
                case 22:
                    n.memoizedState === null && la(e, n, a), Iu(n, n.return);
                    break;
                case 30:
                    break;
                default:
                    la(e, n, a)
            }
            t = t.sibling
        }
    }

    function dc(l, t) {
        var a = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Bu(a))
    }

    function rc(l, t) {
        l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Bu(l))
    }

    function Et(l, t, a, u) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Ko(l, t, a, u), t = t.sibling
    }

    function Ko(l, t, a, u) {
        var e = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Et(l, t, a, u), e & 2048 && Fu(9, t);
                break;
            case 1:
                Et(l, t, a, u);
                break;
            case 3:
                Et(l, t, a, u), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Bu(l)));
                break;
            case 12:
                if (e & 2048) {
                    Et(l, t, a, u), l = t.stateNode;
                    try {
                        var n = t.memoizedProps,
                            i = n.id,
                            c = n.onPostCommit;
                        typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                    } catch (f) {
                        il(t, t.return, f)
                    }
                } else Et(l, t, a, u);
                break;
            case 13:
                Et(l, t, a, u);
                break;
            case 23:
                break;
            case 22:
                n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Et(l, t, a, u) : Pu(l, t) : n._visibility & 2 ? Et(l, t, a, u) : (n._visibility |= 2, iu(l, t, a, u, (t.subtreeFlags & 10256) !== 0)), e & 2048 && dc(i, t);
                break;
            case 24:
                Et(l, t, a, u), e & 2048 && rc(t.alternate, t);
                break;
            default:
                Et(l, t, a, u)
        }
    }

    function iu(l, t, a, u, e) {
        for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var n = l,
                i = t,
                c = a,
                f = u,
                v = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    iu(n, i, c, f, e), Fu(8, i);
                    break;
                case 23:
                    break;
                case 22:
                    var g = i.stateNode;
                    i.memoizedState !== null ? g._visibility & 2 ? iu(n, i, c, f, e) : Pu(n, i) : (g._visibility |= 2, iu(n, i, c, f, e)), e && v & 2048 && dc(i.alternate, i);
                    break;
                case 24:
                    iu(n, i, c, f, e), e && v & 2048 && rc(i.alternate, i);
                    break;
                default:
                    iu(n, i, c, f, e)
            }
            t = t.sibling
        }
    }

    function Pu(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var a = l,
                    u = t,
                    e = u.flags;
                switch (u.tag) {
                    case 22:
                        Pu(a, u), e & 2048 && dc(u.alternate, u);
                        break;
                    case 24:
                        Pu(a, u), e & 2048 && rc(u.alternate, u);
                        break;
                    default:
                        Pu(a, u)
                }
                t = t.sibling
            }
    }
    var le = 8192;

    function cu(l) {
        if (l.subtreeFlags & le)
            for (l = l.child; l !== null;) wo(l), l = l.sibling
    }

    function wo(l) {
        switch (l.tag) {
            case 26:
                cu(l), l.flags & le && l.memoizedState !== null && Ev(mt, l.memoizedState, l.memoizedProps);
                break;
            case 5:
                cu(l);
                break;
            case 3:
            case 4:
                var t = mt;
                mt = En(l.stateNode.containerInfo), cu(l), mt = t;
                break;
            case 22:
                l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = le, le = 16777216, cu(l), le = t) : cu(l));
                break;
            default:
                cu(l)
        }
    }

    function Jo(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child, l !== null)) {
            t.child = null;
            do t = l.sibling, l.sibling = null, l = t; while (l !== null)
        }
    }

    function te(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var u = t[a];
                    pl = u, ko(u, l)
                }
            Jo(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;) Wo(l), l = l.sibling
    }

    function Wo(l) {
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                te(l), l.flags & 2048 && It(9, l, l.return);
                break;
            case 3:
                te(l);
                break;
            case 12:
                te(l);
                break;
            case 22:
                var t = l.stateNode;
                l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, on(l)) : te(l);
                break;
            default:
                te(l)
        }
    }

    function on(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var u = t[a];
                    pl = u, ko(u, l)
                }
            Jo(l)
        }
        for (l = l.child; l !== null;) {
            switch (t = l, t.tag) {
                case 0:
                case 11:
                case 15:
                    It(8, t, t.return), on(t);
                    break;
                case 22:
                    a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, on(t));
                    break;
                default:
                    on(t)
            }
            l = l.sibling
        }
    }

    function ko(l, t) {
        for (; pl !== null;) {
            var a = pl;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    It(8, a, t);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var u = a.memoizedState.cachePool.pool;
                        u != null && u.refCount++
                    }
                    break;
                case 24:
                    Bu(a.memoizedState.cache)
            }
            if (u = a.child, u !== null) u.return = a, pl = u;
            else l: for (a = l; pl !== null;) {
                u = pl;
                var e = u.sibling,
                    n = u.return;
                if (Co(u), u === a) {
                    pl = null;
                    break l
                }
                if (e !== null) {
                    e.return = n, pl = e;
                    break l
                }
                pl = n
            }
        }
    }
    var G0 = {
            getCacheForType: function(l) {
                var t = Rl(Sl),
                    a = t.data.get(l);
                return a === void 0 && (a = l(), t.data.set(l, a)), a
            }
        },
        X0 = typeof WeakMap == "function" ? WeakMap : Map,
        P = 0,
        fl = null,
        L = null,
        J = 0,
        ll = 0,
        Pl = null,
        ta = !1,
        fu = !1,
        vc = !1,
        Xt = 0,
        vl = 0,
        aa = 0,
        Na = 0,
        hc = 0,
        ot = 0,
        su = 0,
        ae = null,
        Zl = null,
        mc = !1,
        yc = 0,
        dn = 1 / 0,
        rn = null,
        ua = null,
        _l = 0,
        ea = null,
        ou = null,
        du = 0,
        gc = 0,
        bc = null,
        $o = null,
        ue = 0,
        Sc = null;

    function lt() {
        if ((P & 2) !== 0 && J !== 0) return J & -J;
        if (b.T !== null) {
            var l = Ia;
            return l !== 0 ? l : _c()
        }
        return df()
    }

    function Fo() {
        ot === 0 && (ot = (J & 536870912) === 0 || I ? cf() : 536870912);
        var l = st.current;
        return l !== null && (l.flags |= 32), ot
    }

    function tt(l, t, a) {
        (l === fl && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null) && (ru(l, 0), na(l, J, ot, !1)), Au(l, a), ((P & 2) === 0 || l !== fl) && (l === fl && ((P & 2) === 0 && (Na |= a), vl === 4 && na(l, J, ot, !1)), pt(l))
    }

    function Io(l, t, a) {
        if ((P & 6) !== 0) throw Error(y(327));
        var u = !a && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Tu(l, t),
            e = u ? Z0(l, t) : Ec(l, t, !0),
            n = u;
        do {
            if (e === 0) {
                fu && !u && na(l, t, 0, !1);
                break
            } else {
                if (a = l.current.alternate, n && !C0(a)) {
                    e = Ec(l, t, !1), n = !1;
                    continue
                }
                if (e === 2) {
                    if (n = t, l.errorRecoveryDisabledLanes & n) var i = 0;
                    else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        t = i;
                        l: {
                            var c = l;e = ae;
                            var f = c.current.memoizedState.isDehydrated;
                            if (f && (ru(c, i).flags |= 256), i = Ec(c, i, !1), i !== 2) {
                                if (vc && !f) {
                                    c.errorRecoveryDisabledLanes |= n, Na |= n, e = 4;
                                    break l
                                }
                                n = Zl, Zl = e, n !== null && (Zl === null ? Zl = n : Zl.push.apply(Zl, n))
                            }
                            e = i
                        }
                        if (n = !1, e !== 2) continue
                    }
                }
                if (e === 1) {
                    ru(l, 0), na(l, t, 0, !0);
                    break
                }
                l: {
                    switch (u = l, n = e, n) {
                        case 0:
                        case 1:
                            throw Error(y(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            na(u, t, ot, !ta);
                            break l;
                        case 2:
                            Zl = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(y(329))
                    }
                    if ((t & 62914560) === t && (e = yc + 300 - bt(), 10 < e)) {
                        if (na(u, t, ot, !ta), Ee(u, 0, !0) !== 0) break l;
                        u.timeoutHandle = Md(Po.bind(null, u, a, Zl, rn, mc, t, ot, Na, su, ta, n, 2, -0, 0), e);
                        break l
                    }
                    Po(u, a, Zl, rn, mc, t, ot, Na, su, ta, n, 0, -0, 0)
                }
            }
            break
        } while (!0);
        pt(l)
    }

    function Po(l, t, a, u, e, n, i, c, f, v, g, T, h, m) {
        if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (oe = {
                stylesheets: null,
                count: 0,
                unsuspend: Av
            }, wo(t), T = pv(), T !== null)) {
            l.cancelPendingCommit = T(id.bind(null, l, t, n, a, u, e, i, c, f, g, 1, h, m)), na(l, n, i, !v);
            return
        }
        id(l, t, n, a, u, e, i, c, f)
    }

    function C0(l) {
        for (var t = l;;) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var u = 0; u < a.length; u++) {
                    var e = a[u],
                        n = e.getSnapshot;
                    e = e.value;
                    try {
                        if (!kl(n(), e)) return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
            else {
                if (t === l) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === l) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function na(l, t, a, u) {
        t &= ~hc, t &= ~Na, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
        for (var e = t; 0 < e;) {
            var n = 31 - Wl(e),
                i = 1 << n;
            u[n] = -1, e &= ~i
        }
        a !== 0 && sf(l, a, t)
    }

    function vn() {
        return (P & 6) === 0 ? (ee(0), !1) : !0
    }

    function Tc() {
        if (L !== null) {
            if (ll === 0) var l = L.return;
            else l = L, Nt = xa = null, Bi(l), eu = null, Wu = 0, l = L;
            for (; l !== null;) Ro(l.alternate, l), l = l.return;
            L = null
        }
    }

    function ru(l, t) {
        var a = l.timeoutHandle;
        a !== -1 && (l.timeoutHandle = -1, ev(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Tc(), fl = l, L = a = Ot(l.current, null), J = t, ll = 0, Pl = null, ta = !1, fu = Tu(l, t), vc = !1, su = ot = hc = Na = aa = vl = 0, Zl = ae = null, mc = !1, (t & 8) !== 0 && (t |= t & 32);
        var u = l.entangledLanes;
        if (u !== 0)
            for (l = l.entanglements, u &= t; 0 < u;) {
                var e = 31 - Wl(u),
                    n = 1 << e;
                t |= l[e], u &= ~n
            }
        return Xt = t, qe(), a
    }

    function ld(l, t) {
        Z = null, b.H = Pe, t === Xu || t === Ve ? (t = ys(), ll = 3) : t === vs ? (t = ys(), ll = 4) : ll = t === bo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Pl = t, L === null && (vl = 1, en(l, nt(t, l.current)))
    }

    function td() {
        var l = b.H;
        return b.H = Pe, l === null ? Pe : l
    }

    function ad() {
        var l = b.A;
        return b.A = G0, l
    }

    function Ac() {
        vl = 4, ta || (J & 4194048) !== J && st.current !== null || (fu = !0), (aa & 134217727) === 0 && (Na & 134217727) === 0 || fl === null || na(fl, J, ot, !1)
    }

    function Ec(l, t, a) {
        var u = P;
        P |= 2;
        var e = td(),
            n = ad();
        (fl !== l || J !== t) && (rn = null, ru(l, t)), t = !1;
        var i = vl;
        l: do try {
                if (ll !== 0 && L !== null) {
                    var c = L,
                        f = Pl;
                    switch (ll) {
                        case 8:
                            Tc(), i = 6;
                            break l;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            st.current === null && (t = !0);
                            var v = ll;
                            if (ll = 0, Pl = null, vu(l, c, f, v), a && fu) {
                                i = 0;
                                break l
                            }
                            break;
                        default:
                            v = ll, ll = 0, Pl = null, vu(l, c, f, v)
                    }
                }
                Q0(), i = vl;
                break
            } catch (g) {
                ld(l, g)
            }
            while (!0);
        return t && l.shellSuspendCounter++, Nt = xa = null, P = u, b.H = e, b.A = n, L === null && (fl = null, J = 0, qe()), i
    }

    function Q0() {
        for (; L !== null;) ud(L)
    }

    function Z0(l, t) {
        var a = P;
        P |= 2;
        var u = td(),
            e = ad();
        fl !== l || J !== t ? (rn = null, dn = bt() + 500, ru(l, t)) : fu = Tu(l, t);
        l: do try {
                if (ll !== 0 && L !== null) {
                    t = L;
                    var n = Pl;
                    t: switch (ll) {
                        case 1:
                            ll = 0, Pl = null, vu(l, t, n, 1);
                            break;
                        case 2:
                        case 9:
                            if (hs(n)) {
                                ll = 0, Pl = null, ed(t);
                                break
                            }
                            t = function() {
                                ll !== 2 && ll !== 9 || fl !== l || (ll = 7), pt(l)
                            }, n.then(t, t);
                            break l;
                        case 3:
                            ll = 7;
                            break l;
                        case 4:
                            ll = 5;
                            break l;
                        case 7:
                            hs(n) ? (ll = 0, Pl = null, ed(t)) : (ll = 0, Pl = null, vu(l, t, n, 7));
                            break;
                        case 5:
                            var i = null;
                            switch (L.tag) {
                                case 26:
                                    i = L.memoizedState;
                                case 5:
                                case 27:
                                    var c = L;
                                    if (!i || Xd(i)) {
                                        ll = 0, Pl = null;
                                        var f = c.sibling;
                                        if (f !== null) L = f;
                                        else {
                                            var v = c.return;
                                            v !== null ? (L = v, hn(v)) : L = null
                                        }
                                        break t
                                    }
                            }
                            ll = 0, Pl = null, vu(l, t, n, 5);
                            break;
                        case 6:
                            ll = 0, Pl = null, vu(l, t, n, 6);
                            break;
                        case 8:
                            Tc(), vl = 6;
                            break l;
                        default:
                            throw Error(y(462))
                    }
                }
                V0();
                break
            } catch (g) {
                ld(l, g)
            }
            while (!0);
        return Nt = xa = null, b.H = u, b.A = e, P = a, L !== null ? 0 : (fl = null, J = 0, qe(), vl)
    }

    function V0() {
        for (; L !== null && !dr();) ud(L)
    }

    function ud(l) {
        var t = Uo(l.alternate, l, Xt);
        l.memoizedProps = l.pendingProps, t === null ? hn(l) : L = t
    }

    function ed(l) {
        var t = l,
            a = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = zo(a, t, t.pendingProps, t.type, void 0, J);
                break;
            case 11:
                t = zo(a, t, t.pendingProps, t.type.render, t.ref, J);
                break;
            case 5:
                Bi(t);
            default:
                Ro(a, t), t = L = es(t, Xt), t = Uo(a, t, Xt)
        }
        l.memoizedProps = l.pendingProps, t === null ? hn(l) : L = t
    }

    function vu(l, t, a, u) {
        Nt = xa = null, Bi(t), eu = null, Wu = 0;
        var e = t.return;
        try {
            if (R0(l, e, t, a, J)) {
                vl = 1, en(l, nt(a, l.current)), L = null;
                return
            }
        } catch (n) {
            if (e !== null) throw L = e, n;
            vl = 1, en(l, nt(a, l.current)), L = null;
            return
        }
        t.flags & 32768 ? (I || u === 1 ? l = !0 : fu || (J & 536870912) !== 0 ? l = !1 : (ta = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = st.current, u !== null && u.tag === 13 && (u.flags |= 16384))), nd(t, l)) : hn(t)
    }

    function hn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                nd(t, ta);
                return
            }
            l = t.return;
            var a = q0(t.alternate, t, Xt);
            if (a !== null) {
                L = a;
                return
            }
            if (t = t.sibling, t !== null) {
                L = t;
                return
            }
            L = t = l
        } while (t !== null);
        vl === 0 && (vl = 5)
    }

    function nd(l, t) {
        do {
            var a = j0(l.alternate, l);
            if (a !== null) {
                a.flags &= 32767, L = a;
                return
            }
            if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
                L = l;
                return
            }
            L = l = a
        } while (l !== null);
        vl = 6, L = null
    }

    function id(l, t, a, u, e, n, i, c, f) {
        l.cancelPendingCommit = null;
        do mn(); while (_l !== 0);
        if ((P & 6) !== 0) throw Error(y(327));
        if (t !== null) {
            if (t === l.current) throw Error(y(177));
            if (n = t.lanes | t.childLanes, n |= ri, Ar(l, a, n, i, c, f), l === fl && (L = fl = null, J = 0), ou = t, ea = l, du = a, gc = n, bc = e, $o = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, J0(Se, function() {
                    return dd(), null
                })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
                u = b.T, b.T = null, e = _.p, _.p = 2, i = P, P |= 4;
                try {
                    Y0(l, t, a)
                } finally {
                    P = i, _.p = e, b.T = u
                }
            }
            _l = 1, cd(), fd(), sd()
        }
    }

    function cd() {
        if (_l === 1) {
            _l = 0;
            var l = ea,
                t = ou,
                a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = b.T, b.T = null;
                var u = _.p;
                _.p = 2;
                var e = P;
                P |= 4;
                try {
                    Vo(t, l);
                    var n = qc,
                        i = Wf(l.containerInfo),
                        c = n.focusedElem,
                        f = n.selectionRange;
                    if (i !== c && c && c.ownerDocument && Jf(c.ownerDocument.documentElement, c)) {
                        if (f !== null && ci(c)) {
                            var v = f.start,
                                g = f.end;
                            if (g === void 0 && (g = v), "selectionStart" in c) c.selectionStart = v, c.selectionEnd = Math.min(g, c.value.length);
                            else {
                                var T = c.ownerDocument || document,
                                    h = T && T.defaultView || window;
                                if (h.getSelection) {
                                    var m = h.getSelection(),
                                        B = c.textContent.length,
                                        q = Math.min(f.start, B),
                                        ul = f.end === void 0 ? q : Math.min(f.end, B);
                                    !m.extend && q > ul && (i = ul, ul = q, q = i);
                                    var d = wf(c, q),
                                        o = wf(c, ul);
                                    if (d && o && (m.rangeCount !== 1 || m.anchorNode !== d.node || m.anchorOffset !== d.offset || m.focusNode !== o.node || m.focusOffset !== o.offset)) {
                                        var r = T.createRange();
                                        r.setStart(d.node, d.offset), m.removeAllRanges(), q > ul ? (m.addRange(r), m.extend(o.node, o.offset)) : (r.setEnd(o.node, o.offset), m.addRange(r))
                                    }
                                }
                            }
                        }
                        for (T = [], m = c; m = m.parentNode;) m.nodeType === 1 && T.push({
                            element: m,
                            left: m.scrollLeft,
                            top: m.scrollTop
                        });
                        for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
                            var S = T[c];
                            S.element.scrollLeft = S.left, S.element.scrollTop = S.top
                        }
                    }
                    Mn = !!Hc, qc = Hc = null
                } finally {
                    P = e, _.p = u, b.T = a
                }
            }
            l.current = t, _l = 2
        }
    }

    function fd() {
        if (_l === 2) {
            _l = 0;
            var l = ea,
                t = ou,
                a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = b.T, b.T = null;
                var u = _.p;
                _.p = 2;
                var e = P;
                P |= 4;
                try {
                    Xo(l, t.alternate, t)
                } finally {
                    P = e, _.p = u, b.T = a
                }
            }
            _l = 3
        }
    }

    function sd() {
        if (_l === 4 || _l === 3) {
            _l = 0, rr();
            var l = ea,
                t = ou,
                a = du,
                u = $o;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _l = 5 : (_l = 0, ou = ea = null, od(l, l.pendingLanes));
            var e = l.pendingLanes;
            if (e === 0 && (ua = null), Cn(a), t = t.stateNode, Jl && typeof Jl.onCommitFiberRoot == "function") try {
                Jl.onCommitFiberRoot(Su, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (u !== null) {
                t = b.T, e = _.p, _.p = 2, b.T = null;
                try {
                    for (var n = l.onRecoverableError, i = 0; i < u.length; i++) {
                        var c = u[i];
                        n(c.value, {
                            componentStack: c.stack
                        })
                    }
                } finally {
                    b.T = t, _.p = e
                }
            }(du & 3) !== 0 && mn(), pt(l), e = l.pendingLanes, (a & 4194090) !== 0 && (e & 42) !== 0 ? l === Sc ? ue++ : (ue = 0, Sc = l) : ue = 0, ee(0)
        }
    }

    function od(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Bu(t)))
    }

    function mn(l) {
        return cd(), fd(), sd(), dd()
    }

    function dd() {
        if (_l !== 5) return !1;
        var l = ea,
            t = gc;
        gc = 0;
        var a = Cn(du),
            u = b.T,
            e = _.p;
        try {
            _.p = 32 > a ? 32 : a, b.T = null, a = bc, bc = null;
            var n = ea,
                i = du;
            if (_l = 0, ou = ea = null, du = 0, (P & 6) !== 0) throw Error(y(331));
            var c = P;
            if (P |= 4, Wo(n.current), Ko(n, n.current, i, a), P = c, ee(0, !1), Jl && typeof Jl.onPostCommitFiberRoot == "function") try {
                Jl.onPostCommitFiberRoot(Su, n)
            } catch {}
            return !0
        } finally {
            _.p = e, b.T = u, od(l, t)
        }
    }

    function rd(l, t, a) {
        t = nt(a, t), t = Fi(l.stateNode, t, 2), l = Wt(l, t, 2), l !== null && (Au(l, 2), pt(l))
    }

    function il(l, t, a) {
        if (l.tag === 3) rd(l, l, a);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    rd(t, l, a);
                    break
                } else if (t.tag === 1) {
                    var u = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ua === null || !ua.has(u))) {
                        l = nt(a, l), a = yo(2), u = Wt(t, a, 2), u !== null && (go(a, u, t, l), Au(u, 2), pt(u));
                        break
                    }
                }
                t = t.return
            }
    }

    function pc(l, t, a) {
        var u = l.pingCache;
        if (u === null) {
            u = l.pingCache = new X0;
            var e = new Set;
            u.set(t, e)
        } else e = u.get(t), e === void 0 && (e = new Set, u.set(t, e));
        e.has(a) || (vc = !0, e.add(a), l = L0.bind(null, l, t, a), t.then(l, l))
    }

    function L0(l, t, a) {
        var u = l.pingCache;
        u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, fl === l && (J & a) === a && (vl === 4 || vl === 3 && (J & 62914560) === J && 300 > bt() - yc ? (P & 2) === 0 && ru(l, 0) : hc |= a, su === J && (su = 0)), pt(l)
    }

    function vd(l, t) {
        t === 0 && (t = ff()), l = Wa(l, t), l !== null && (Au(l, t), pt(l))
    }

    function K0(l) {
        var t = l.memoizedState,
            a = 0;
        t !== null && (a = t.retryLane), vd(l, a)
    }

    function w0(l, t) {
        var a = 0;
        switch (l.tag) {
            case 13:
                var u = l.stateNode,
                    e = l.memoizedState;
                e !== null && (a = e.retryLane);
                break;
            case 19:
                u = l.stateNode;
                break;
            case 22:
                u = l.stateNode._retryCache;
                break;
            default:
                throw Error(y(314))
        }
        u !== null && u.delete(t), vd(l, a)
    }

    function J0(l, t) {
        return Yn(l, t)
    }
    var yn = null,
        hu = null,
        zc = !1,
        gn = !1,
        xc = !1,
        Ra = 0;

    function pt(l) {
        l !== hu && l.next === null && (hu === null ? yn = hu = l : hu = hu.next = l), gn = !0, zc || (zc = !0, k0())
    }

    function ee(l, t) {
        if (!xc && gn) {
            xc = !0;
            do
                for (var a = !1, u = yn; u !== null;) {
                    if (l !== 0) {
                        var e = u.pendingLanes;
                        if (e === 0) var n = 0;
                        else {
                            var i = u.suspendedLanes,
                                c = u.pingedLanes;
                            n = (1 << 31 - Wl(42 | l) + 1) - 1, n &= e & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (a = !0, gd(u, n))
                    } else n = J, n = Ee(u, u === fl ? n : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (n & 3) === 0 || Tu(u, n) || (a = !0, gd(u, n));
                    u = u.next
                }
            while (a);
            xc = !1
        }
    }

    function W0() {
        hd()
    }

    function hd() {
        gn = zc = !1;
        var l = 0;
        Ra !== 0 && (uv() && (l = Ra), Ra = 0);
        for (var t = bt(), a = null, u = yn; u !== null;) {
            var e = u.next,
                n = md(u, t);
            n === 0 ? (u.next = null, a === null ? yn = e : a.next = e, e === null && (hu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (gn = !0)), u = e
        }
        ee(l)
    }

    function md(l, t) {
        for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n;) {
            var i = 31 - Wl(n),
                c = 1 << i,
                f = e[i];
            f === -1 ? ((c & a) === 0 || (c & u) !== 0) && (e[i] = Tr(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c
        }
        if (t = fl, a = J, a = Ee(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, a === 0 || l === t && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null) return u !== null && u !== null && Bn(u), l.callbackNode = null, l.callbackPriority = 0;
        if ((a & 3) === 0 || Tu(l, a)) {
            if (t = a & -a, t === l.callbackPriority) return t;
            switch (u !== null && Bn(u), Cn(a)) {
                case 2:
                case 8:
                    a = ef;
                    break;
                case 32:
                    a = Se;
                    break;
                case 268435456:
                    a = nf;
                    break;
                default:
                    a = Se
            }
            return u = yd.bind(null, l), a = Yn(a, u), l.callbackPriority = t, l.callbackNode = a, t
        }
        return u !== null && u !== null && Bn(u), l.callbackPriority = 2, l.callbackNode = null, 2
    }

    function yd(l, t) {
        if (_l !== 0 && _l !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
        var a = l.callbackNode;
        if (mn() && l.callbackNode !== a) return null;
        var u = J;
        return u = Ee(l, l === fl ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (Io(l, u, t), md(l, bt()), l.callbackNode != null && l.callbackNode === a ? yd.bind(null, l) : null)
    }

    function gd(l, t) {
        if (mn()) return null;
        Io(l, t, !0)
    }

    function k0() {
        nv(function() {
            (P & 6) !== 0 ? Yn(uf, W0) : hd()
        })
    }

    function _c() {
        return Ra === 0 && (Ra = cf()), Ra
    }

    function bd(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Me("" + l)
    }

    function Sd(l, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l
    }

    function $0(l, t, a, u, e) {
        if (t === "submit" && a && a.stateNode === e) {
            var n = bd((e[Gl] || null).action),
                i = u.submitter;
            i && (t = (t = i[Gl] || null) ? bd(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
            var c = new Ne("action", "action", null, u, e);
            l.push({
                event: c,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (u.defaultPrevented) {
                            if (Ra !== 0) {
                                var f = i ? Sd(e, i) : new FormData(e);
                                wi(a, {
                                    pending: !0,
                                    data: f,
                                    method: e.method,
                                    action: n
                                }, null, f)
                            }
                        } else typeof n == "function" && (c.preventDefault(), f = i ? Sd(e, i) : new FormData(e), wi(a, {
                            pending: !0,
                            data: f,
                            method: e.method,
                            action: n
                        }, n, f))
                    },
                    currentTarget: e
                }]
            })
        }
    }
    for (var Mc = 0; Mc < di.length; Mc++) {
        var Oc = di[Mc],
            F0 = Oc.toLowerCase(),
            I0 = Oc[0].toUpperCase() + Oc.slice(1);
        ht(F0, "on" + I0)
    }
    ht(Ff, "onAnimationEnd"), ht(If, "onAnimationIteration"), ht(Pf, "onAnimationStart"), ht("dblclick", "onDoubleClick"), ht("focusin", "onFocus"), ht("focusout", "onBlur"), ht(m0, "onTransitionRun"), ht(y0, "onTransitionStart"), ht(g0, "onTransitionCancel"), ht(ls, "onTransitionEnd"), Ga("onMouseEnter", ["mouseout", "mouseover"]), Ga("onMouseLeave", ["mouseout", "mouseover"]), Ga("onPointerEnter", ["pointerout", "pointerover"]), Ga("onPointerLeave", ["pointerout", "pointerover"]), ya("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ya("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ya("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ya("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ya("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ya("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        P0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne));

    function Td(l, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < l.length; a++) {
            var u = l[a],
                e = u.event;
            u = u.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var i = u.length - 1; 0 <= i; i--) {
                        var c = u[i],
                            f = c.instance,
                            v = c.currentTarget;
                        if (c = c.listener, f !== n && e.isPropagationStopped()) break l;
                        n = c, e.currentTarget = v;
                        try {
                            n(e)
                        } catch (g) {
                            un(g)
                        }
                        e.currentTarget = null, n = f
                    } else
                        for (i = 0; i < u.length; i++) {
                            if (c = u[i], f = c.instance, v = c.currentTarget, c = c.listener, f !== n && e.isPropagationStopped()) break l;
                            n = c, e.currentTarget = v;
                            try {
                                n(e)
                            } catch (g) {
                                un(g)
                            }
                            e.currentTarget = null, n = f
                        }
            }
        }
    }

    function K(l, t) {
        var a = t[Qn];
        a === void 0 && (a = t[Qn] = new Set);
        var u = l + "__bubble";
        a.has(u) || (Ad(t, l, 2, !1), a.add(u))
    }

    function Dc(l, t, a) {
        var u = 0;
        t && (u |= 4), Ad(a, l, u, t)
    }
    var bn = "_reactListening" + Math.random().toString(36).slice(2);

    function Uc(l) {
        if (!l[bn]) {
            l[bn] = !0, vf.forEach(function(a) {
                a !== "selectionchange" && (P0.has(a) || Dc(a, !1, l), Dc(a, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[bn] || (t[bn] = !0, Dc("selectionchange", !1, t))
        }
    }

    function Ad(l, t, a, u) {
        switch (Kd(t)) {
            case 2:
                var e = _v;
                break;
            case 8:
                e = Mv;
                break;
            default:
                e = Lc
        }
        a = e.bind(null, t, a, l), e = void 0, !In || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
            capture: !0,
            passive: e
        }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
            passive: e
        }) : l.addEventListener(t, a, !1)
    }

    function Nc(l, t, a, u, e) {
        var n = u;
        if ((t & 1) === 0 && (t & 2) === 0 && u !== null) l: for (;;) {
            if (u === null) return;
            var i = u.tag;
            if (i === 3 || i === 4) {
                var c = u.stateNode.containerInfo;
                if (c === e) break;
                if (i === 4)
                    for (i = u.return; i !== null;) {
                        var f = i.tag;
                        if ((f === 3 || f === 4) && i.stateNode.containerInfo === e) return;
                        i = i.return
                    }
                for (; c !== null;) {
                    if (i = ja(c), i === null) return;
                    if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
                        u = n = i;
                        continue l
                    }
                    c = c.parentNode
                }
            }
            u = u.return
        }
        Mf(function() {
            var v = n,
                g = $n(a),
                T = [];
            l: {
                var h = ts.get(l);
                if (h !== void 0) {
                    var m = Ne,
                        B = l;
                    switch (l) {
                        case "keypress":
                            if (De(a) === 0) break l;
                        case "keydown":
                        case "keyup":
                            m = Jr;
                            break;
                        case "focusin":
                            B = "focus", m = ai;
                            break;
                        case "focusout":
                            B = "blur", m = ai;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            m = ai;
                            break;
                        case "click":
                            if (a.button === 2) break l;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            m = Uf;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            m = jr;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            m = $r;
                            break;
                        case Ff:
                        case If:
                        case Pf:
                            m = Gr;
                            break;
                        case ls:
                            m = Ir;
                            break;
                        case "scroll":
                        case "scrollend":
                            m = Hr;
                            break;
                        case "wheel":
                            m = l0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            m = Cr;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            m = Rf;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            m = a0
                    }
                    var q = (t & 4) !== 0,
                        ul = !q && (l === "scroll" || l === "scrollend"),
                        d = q ? h !== null ? h + "Capture" : null : h;
                    q = [];
                    for (var o = v, r; o !== null;) {
                        var S = o;
                        if (r = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || r === null || d === null || (S = zu(o, d), S != null && q.push(ie(o, S, r))), ul) break;
                        o = o.return
                    }
                    0 < q.length && (h = new m(h, B, null, a, g), T.push({
                        event: h,
                        listeners: q
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (h = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", h && a !== kn && (B = a.relatedTarget || a.fromElement) && (ja(B) || B[qa])) break l;
                    if ((m || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, m ? (B = a.relatedTarget || a.toElement, m = v, B = B ? ja(B) : null, B !== null && (ul = w(B), q = B.tag, B !== ul || q !== 5 && q !== 27 && q !== 6) && (B = null)) : (m = null, B = v), m !== B)) {
                        if (q = Uf, S = "onMouseLeave", d = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (q = Rf, S = "onPointerLeave", d = "onPointerEnter", o = "pointer"), ul = m == null ? h : pu(m), r = B == null ? h : pu(B), h = new q(S, o + "leave", m, a, g), h.target = ul, h.relatedTarget = r, S = null, ja(g) === v && (q = new q(d, o + "enter", B, a, g), q.target = r, q.relatedTarget = ul, S = q), ul = S, m && B) t: {
                            for (q = m, d = B, o = 0, r = q; r; r = mu(r)) o++;
                            for (r = 0, S = d; S; S = mu(S)) r++;
                            for (; 0 < o - r;) q = mu(q),
                            o--;
                            for (; 0 < r - o;) d = mu(d),
                            r--;
                            for (; o--;) {
                                if (q === d || d !== null && q === d.alternate) break t;
                                q = mu(q), d = mu(d)
                            }
                            q = null
                        }
                        else q = null;
                        m !== null && Ed(T, h, m, q, !1), B !== null && ul !== null && Ed(T, ul, B, q, !0)
                    }
                }
                l: {
                    if (h = v ? pu(v) : window, m = h.nodeName && h.nodeName.toLowerCase(), m === "select" || m === "input" && h.type === "file") var D = Cf;
                    else if (Gf(h))
                        if (Qf) D = r0;
                        else {
                            D = o0;
                            var V = s0
                        }
                    else m = h.nodeName,
                    !m || m.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? v && Wn(v.elementType) && (D = Cf) : D = d0;
                    if (D && (D = D(l, v))) {
                        Xf(T, D, a, g);
                        break l
                    }
                    V && V(l, h, v),
                    l === "focusout" && v && h.type === "number" && v.memoizedProps.value != null && Jn(h, "number", h.value)
                }
                switch (V = v ? pu(v) : window, l) {
                    case "focusin":
                        (Gf(V) || V.contentEditable === "true") && (Ka = V, fi = v, Ru = null);
                        break;
                    case "focusout":
                        Ru = fi = Ka = null;
                        break;
                    case "mousedown":
                        si = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        si = !1, kf(T, a, g);
                        break;
                    case "selectionchange":
                        if (h0) break;
                    case "keydown":
                    case "keyup":
                        kf(T, a, g)
                }
                var N;
                if (ei) l: {
                    switch (l) {
                        case "compositionstart":
                            var j = "onCompositionStart";
                            break l;
                        case "compositionend":
                            j = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            j = "onCompositionUpdate";
                            break l
                    }
                    j = void 0
                }
                else La ? Yf(l, a) && (j = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (j = "onCompositionStart");j && (Hf && a.locale !== "ko" && (La || j !== "onCompositionStart" ? j === "onCompositionEnd" && La && (N = Of()) : (Lt = g, Pn = "value" in Lt ? Lt.value : Lt.textContent, La = !0)), V = Sn(v, j), 0 < V.length && (j = new Nf(j, l, null, a, g), T.push({
                    event: j,
                    listeners: V
                }), N ? j.data = N : (N = Bf(a), N !== null && (j.data = N)))),
                (N = e0 ? n0(l, a) : i0(l, a)) && (j = Sn(v, "onBeforeInput"), 0 < j.length && (V = new Nf("onBeforeInput", "beforeinput", null, a, g), T.push({
                    event: V,
                    listeners: j
                }), V.data = N)),
                $0(T, l, v, a, g)
            }
            Td(T, t)
        })
    }

    function ie(l, t, a) {
        return {
            instance: l,
            listener: t,
            currentTarget: a
        }
    }

    function Sn(l, t) {
        for (var a = t + "Capture", u = []; l !== null;) {
            var e = l,
                n = e.stateNode;
            if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = zu(l, a), e != null && u.unshift(ie(l, e, n)), e = zu(l, t), e != null && u.push(ie(l, e, n))), l.tag === 3) return u;
            l = l.return
        }
        return []
    }

    function mu(l) {
        if (l === null) return null;
        do l = l.return; while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }

    function Ed(l, t, a, u, e) {
        for (var n = t._reactName, i = []; a !== null && a !== u;) {
            var c = a,
                f = c.alternate,
                v = c.stateNode;
            if (c = c.tag, f !== null && f === u) break;
            c !== 5 && c !== 26 && c !== 27 || v === null || (f = v, e ? (v = zu(a, n), v != null && i.unshift(ie(a, v, f))) : e || (v = zu(a, n), v != null && i.push(ie(a, v, f)))), a = a.return
        }
        i.length !== 0 && l.push({
            event: t,
            listeners: i
        })
    }
    var lv = /\r\n?/g,
        tv = /\u0000|\uFFFD/g;

    function pd(l) {
        return (typeof l == "string" ? l : "" + l).replace(lv, `
`).replace(tv, "")
    }

    function zd(l, t) {
        return t = pd(t), pd(l) === t
    }

    function Tn() {}

    function al(l, t, a, u, e, n) {
        switch (a) {
            case "children":
                typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Qa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Qa(l, "" + u);
                break;
            case "className":
                ze(l, "class", u);
                break;
            case "tabIndex":
                ze(l, "tabindex", u);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                ze(l, a, u);
                break;
            case "style":
                xf(l, u, n);
                break;
            case "data":
                if (t !== "object") {
                    ze(l, "data", u);
                    break
                }
            case "src":
            case "href":
                if (u === "" && (t !== "a" || a !== "href")) {
                    l.removeAttribute(a);
                    break
                }
                if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
                    l.removeAttribute(a);
                    break
                }
                u = Me("" + u), l.setAttribute(a, u);
                break;
            case "action":
            case "formAction":
                if (typeof u == "function") {
                    l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof n == "function" && (a === "formAction" ? (t !== "input" && al(l, t, "name", e.name, e, null), al(l, t, "formEncType", e.formEncType, e, null), al(l, t, "formMethod", e.formMethod, e, null), al(l, t, "formTarget", e.formTarget, e, null)) : (al(l, t, "encType", e.encType, e, null), al(l, t, "method", e.method, e, null), al(l, t, "target", e.target, e, null)));
                if (u == null || typeof u == "symbol" || typeof u == "boolean") {
                    l.removeAttribute(a);
                    break
                }
                u = Me("" + u), l.setAttribute(a, u);
                break;
            case "onClick":
                u != null && (l.onclick = Tn);
                break;
            case "onScroll":
                u != null && K("scroll", l);
                break;
            case "onScrollEnd":
                u != null && K("scrollend", l);
                break;
            case "dangerouslySetInnerHTML":
                if (u != null) {
                    if (typeof u != "object" || !("__html" in u)) throw Error(y(61));
                    if (a = u.__html, a != null) {
                        if (e.children != null) throw Error(y(60));
                        l.innerHTML = a
                    }
                }
                break;
            case "multiple":
                l.multiple = u && typeof u != "function" && typeof u != "symbol";
                break;
            case "muted":
                l.muted = u && typeof u != "function" && typeof u != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
                    l.removeAttribute("xlink:href");
                    break
                }
                a = Me("" + u), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
                break;
            case "capture":
            case "download":
                u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
                break;
            case "popover":
                K("beforetoggle", l), K("toggle", l), pe(l, "popover", u);
                break;
            case "xlinkActuate":
                _t(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
                break;
            case "xlinkArcrole":
                _t(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
                break;
            case "xlinkRole":
                _t(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
                break;
            case "xlinkShow":
                _t(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
                break;
            case "xlinkTitle":
                _t(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
                break;
            case "xlinkType":
                _t(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
                break;
            case "xmlBase":
                _t(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
                break;
            case "xmlLang":
                _t(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
                break;
            case "xmlSpace":
                _t(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
                break;
            case "is":
                pe(l, "is", u);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Nr.get(a) || a, pe(l, a, u))
        }
    }

    function Rc(l, t, a, u, e, n) {
        switch (a) {
            case "style":
                xf(l, u, n);
                break;
            case "dangerouslySetInnerHTML":
                if (u != null) {
                    if (typeof u != "object" || !("__html" in u)) throw Error(y(61));
                    if (a = u.__html, a != null) {
                        if (e.children != null) throw Error(y(60));
                        l.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof u == "string" ? Qa(l, u) : (typeof u == "number" || typeof u == "bigint") && Qa(l, "" + u);
                break;
            case "onScroll":
                u != null && K("scroll", l);
                break;
            case "onScrollEnd":
                u != null && K("scrollend", l);
                break;
            case "onClick":
                u != null && (l.onclick = Tn);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!hf.hasOwnProperty(a)) l: {
                    if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Gl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
                        typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
                        break l
                    }
                    a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : pe(l, a, u)
                }
        }
    }

    function Ml(l, t, a) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                K("error", l), K("load", l);
                var u = !1,
                    e = !1,
                    n;
                for (n in a)
                    if (a.hasOwnProperty(n)) {
                        var i = a[n];
                        if (i != null) switch (n) {
                            case "src":
                                u = !0;
                                break;
                            case "srcSet":
                                e = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(y(137, t));
                            default:
                                al(l, t, n, i, a, null)
                        }
                    } e && al(l, t, "srcSet", a.srcSet, a, null), u && al(l, t, "src", a.src, a, null);
                return;
            case "input":
                K("invalid", l);
                var c = n = i = e = null,
                    f = null,
                    v = null;
                for (u in a)
                    if (a.hasOwnProperty(u)) {
                        var g = a[u];
                        if (g != null) switch (u) {
                            case "name":
                                e = g;
                                break;
                            case "type":
                                i = g;
                                break;
                            case "checked":
                                f = g;
                                break;
                            case "defaultChecked":
                                v = g;
                                break;
                            case "value":
                                n = g;
                                break;
                            case "defaultValue":
                                c = g;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (g != null) throw Error(y(137, t));
                                break;
                            default:
                                al(l, t, u, g, a, null)
                        }
                    } Af(l, n, c, f, v, i, e, !1), xe(l);
                return;
            case "select":
                K("invalid", l), u = i = n = null;
                for (e in a)
                    if (a.hasOwnProperty(e) && (c = a[e], c != null)) switch (e) {
                        case "value":
                            n = c;
                            break;
                        case "defaultValue":
                            i = c;
                            break;
                        case "multiple":
                            u = c;
                        default:
                            al(l, t, e, c, a, null)
                    }
                t = n, a = i, l.multiple = !!u, t != null ? Ca(l, !!u, t, !1) : a != null && Ca(l, !!u, a, !0);
                return;
            case "textarea":
                K("invalid", l), n = e = u = null;
                for (i in a)
                    if (a.hasOwnProperty(i) && (c = a[i], c != null)) switch (i) {
                        case "value":
                            u = c;
                            break;
                        case "defaultValue":
                            e = c;
                            break;
                        case "children":
                            n = c;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (c != null) throw Error(y(91));
                            break;
                        default:
                            al(l, t, i, c, a, null)
                    }
                pf(l, u, e, n), xe(l);
                return;
            case "option":
                for (f in a)
                    if (a.hasOwnProperty(f) && (u = a[f], u != null)) switch (f) {
                        case "selected":
                            l.selected = u && typeof u != "function" && typeof u != "symbol";
                            break;
                        default:
                            al(l, t, f, u, a, null)
                    }
                return;
            case "dialog":
                K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l);
                break;
            case "iframe":
            case "object":
                K("load", l);
                break;
            case "video":
            case "audio":
                for (u = 0; u < ne.length; u++) K(ne[u], l);
                break;
            case "image":
                K("error", l), K("load", l);
                break;
            case "details":
                K("toggle", l);
                break;
            case "embed":
            case "source":
            case "link":
                K("error", l), K("load", l);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (v in a)
                    if (a.hasOwnProperty(v) && (u = a[v], u != null)) switch (v) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(y(137, t));
                        default:
                            al(l, t, v, u, a, null)
                    }
                return;
            default:
                if (Wn(t)) {
                    for (g in a) a.hasOwnProperty(g) && (u = a[g], u !== void 0 && Rc(l, t, g, u, a, void 0));
                    return
                }
        }
        for (c in a) a.hasOwnProperty(c) && (u = a[c], u != null && al(l, t, c, u, a, null))
    }

    function av(l, t, a, u) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var e = null,
                    n = null,
                    i = null,
                    c = null,
                    f = null,
                    v = null,
                    g = null;
                for (m in a) {
                    var T = a[m];
                    if (a.hasOwnProperty(m) && T != null) switch (m) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            f = T;
                        default:
                            u.hasOwnProperty(m) || al(l, t, m, null, u, T)
                    }
                }
                for (var h in u) {
                    var m = u[h];
                    if (T = a[h], u.hasOwnProperty(h) && (m != null || T != null)) switch (h) {
                        case "type":
                            n = m;
                            break;
                        case "name":
                            e = m;
                            break;
                        case "checked":
                            v = m;
                            break;
                        case "defaultChecked":
                            g = m;
                            break;
                        case "value":
                            i = m;
                            break;
                        case "defaultValue":
                            c = m;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (m != null) throw Error(y(137, t));
                            break;
                        default:
                            m !== T && al(l, t, h, m, u, T)
                    }
                }
                wn(l, i, c, f, v, g, n, e);
                return;
            case "select":
                m = i = c = h = null;
                for (n in a)
                    if (f = a[n], a.hasOwnProperty(n) && f != null) switch (n) {
                        case "value":
                            break;
                        case "multiple":
                            m = f;
                        default:
                            u.hasOwnProperty(n) || al(l, t, n, null, u, f)
                    }
                for (e in u)
                    if (n = u[e], f = a[e], u.hasOwnProperty(e) && (n != null || f != null)) switch (e) {
                        case "value":
                            h = n;
                            break;
                        case "defaultValue":
                            c = n;
                            break;
                        case "multiple":
                            i = n;
                        default:
                            n !== f && al(l, t, e, n, u, f)
                    }
                t = c, a = i, u = m, h != null ? Ca(l, !!a, h, !1) : !!u != !!a && (t != null ? Ca(l, !!a, t, !0) : Ca(l, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                m = h = null;
                for (c in a)
                    if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c)) switch (c) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            al(l, t, c, null, u, e)
                    }
                for (i in u)
                    if (e = u[i], n = a[i], u.hasOwnProperty(i) && (e != null || n != null)) switch (i) {
                        case "value":
                            h = e;
                            break;
                        case "defaultValue":
                            m = e;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (e != null) throw Error(y(91));
                            break;
                        default:
                            e !== n && al(l, t, i, e, u, n)
                    }
                Ef(l, h, m);
                return;
            case "option":
                for (var B in a)
                    if (h = a[B], a.hasOwnProperty(B) && h != null && !u.hasOwnProperty(B)) switch (B) {
                        case "selected":
                            l.selected = !1;
                            break;
                        default:
                            al(l, t, B, null, u, h)
                    }
                for (f in u)
                    if (h = u[f], m = a[f], u.hasOwnProperty(f) && h !== m && (h != null || m != null)) switch (f) {
                        case "selected":
                            l.selected = h && typeof h != "function" && typeof h != "symbol";
                            break;
                        default:
                            al(l, t, f, h, u, m)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var q in a) h = a[q], a.hasOwnProperty(q) && h != null && !u.hasOwnProperty(q) && al(l, t, q, null, u, h);
                for (v in u)
                    if (h = u[v], m = a[v], u.hasOwnProperty(v) && h !== m && (h != null || m != null)) switch (v) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (h != null) throw Error(y(137, t));
                            break;
                        default:
                            al(l, t, v, h, u, m)
                    }
                return;
            default:
                if (Wn(t)) {
                    for (var ul in a) h = a[ul], a.hasOwnProperty(ul) && h !== void 0 && !u.hasOwnProperty(ul) && Rc(l, t, ul, void 0, u, h);
                    for (g in u) h = u[g], m = a[g], !u.hasOwnProperty(g) || h === m || h === void 0 && m === void 0 || Rc(l, t, g, h, u, m);
                    return
                }
        }
        for (var d in a) h = a[d], a.hasOwnProperty(d) && h != null && !u.hasOwnProperty(d) && al(l, t, d, null, u, h);
        for (T in u) h = u[T], m = a[T], !u.hasOwnProperty(T) || h === m || h == null && m == null || al(l, t, T, h, u, m)
    }
    var Hc = null,
        qc = null;

    function An(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }

    function xd(l) {
        switch (l) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function _d(l, t) {
        if (l === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return l === 1 && t === "foreignObject" ? 0 : l
    }

    function jc(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Yc = null;

    function uv() {
        var l = window.event;
        return l && l.type === "popstate" ? l === Yc ? !1 : (Yc = l, !0) : (Yc = null, !1)
    }
    var Md = typeof setTimeout == "function" ? setTimeout : void 0,
        ev = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Od = typeof Promise == "function" ? Promise : void 0,
        nv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(l) {
            return Od.resolve(null).then(l).catch(iv)
        } : Md;

    function iv(l) {
        setTimeout(function() {
            throw l
        })
    }

    function ia(l) {
        return l === "head"
    }

    function Dd(l, t) {
        var a = t,
            u = 0,
            e = 0;
        do {
            var n = a.nextSibling;
            if (l.removeChild(a), n && n.nodeType === 8)
                if (a = n.data, a === "/$") {
                    if (0 < u && 8 > u) {
                        a = u;
                        var i = l.ownerDocument;
                        if (a & 1 && ce(i.documentElement), a & 2 && ce(i.body), a & 4)
                            for (a = i.head, ce(a), i = a.firstChild; i;) {
                                var c = i.nextSibling,
                                    f = i.nodeName;
                                i[Eu] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = c
                            }
                    }
                    if (e === 0) {
                        l.removeChild(n), me(t);
                        return
                    }
                    e--
                } else a === "$" || a === "$?" || a === "$!" ? e++ : u = a.charCodeAt(0) - 48;
            else u = 0;
            a = n
        } while (a);
        me(t)
    }

    function Bc(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var a = t;
            switch (t = t.nextSibling, a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Bc(a), Zn(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue
            }
            l.removeChild(a)
        }
    }

    function cv(l, t, a, u) {
        for (; l.nodeType === 1;) {
            var e = a;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break
            } else if (u) {
                if (!l[Eu]) switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop")) break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
                        if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title)) break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence")) break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
                        return l;
                    default:
                        return l
                }
            } else if (t === "input" && l.type === "hidden") {
                var n = e.name == null ? null : "" + e.name;
                if (e.type === "hidden" && l.getAttribute("name") === n) return l
            } else return l;
            if (l = yt(l.nextSibling), l === null) break
        }
        return null
    }

    function fv(l, t, a) {
        if (t === "") return null;
        for (; l.nodeType !== 3;)
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = yt(l.nextSibling), l === null)) return null;
        return l
    }

    function Gc(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete"
    }

    function sv(l, t) {
        var a = l.ownerDocument;
        if (l.data !== "$?" || a.readyState === "complete") t();
        else {
            var u = function() {
                t(), a.removeEventListener("DOMContentLoaded", u)
            };
            a.addEventListener("DOMContentLoaded", u), l._reactRetry = u
        }
    }

    function yt(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return l
    }
    var Xc = null;

    function Ud(l) {
        l = l.previousSibling;
        for (var t = 0; l;) {
            if (l.nodeType === 8) {
                var a = l.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (t === 0) return l;
                    t--
                } else a === "/$" && t++
            }
            l = l.previousSibling
        }
        return null
    }

    function Nd(l, t, a) {
        switch (t = An(a), l) {
            case "html":
                if (l = t.documentElement, !l) throw Error(y(452));
                return l;
            case "head":
                if (l = t.head, !l) throw Error(y(453));
                return l;
            case "body":
                if (l = t.body, !l) throw Error(y(454));
                return l;
            default:
                throw Error(y(451))
        }
    }

    function ce(l) {
        for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
        Zn(l)
    }
    var dt = new Map,
        Rd = new Set;

    function En(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var Ct = _.d;
    _.d = {
        f: ov,
        r: dv,
        D: rv,
        C: vv,
        L: hv,
        m: mv,
        X: gv,
        S: yv,
        M: bv
    };

    function ov() {
        var l = Ct.f(),
            t = vn();
        return l || t
    }

    function dv(l) {
        var t = Ya(l);
        t !== null && t.tag === 5 && t.type === "form" ? Fs(t) : Ct.r(l)
    }
    var yu = typeof document > "u" ? null : document;

    function Hd(l, t, a) {
        var u = yu;
        if (u && typeof t == "string" && t) {
            var e = et(t);
            e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Rd.has(e) || (Rd.add(e), l = {
                rel: l,
                crossOrigin: a,
                href: t
            }, u.querySelector(e) === null && (t = u.createElement("link"), Ml(t, "link", l), Al(t), u.head.appendChild(t)))
        }
    }

    function rv(l) {
        Ct.D(l), Hd("dns-prefetch", l, null)
    }

    function vv(l, t) {
        Ct.C(l, t), Hd("preconnect", l, t)
    }

    function hv(l, t, a) {
        Ct.L(l, t, a);
        var u = yu;
        if (u && l && t) {
            var e = 'link[rel="preload"][as="' + et(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + et(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + et(a.imageSizes) + '"]')) : e += '[href="' + et(l) + '"]';
            var n = e;
            switch (t) {
                case "style":
                    n = gu(l);
                    break;
                case "script":
                    n = bu(l)
            }
            dt.has(n) || (l = U({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : l,
                as: t
            }, a), dt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(fe(n)) || t === "script" && u.querySelector(se(n)) || (t = u.createElement("link"), Ml(t, "link", l), Al(t), u.head.appendChild(t)))
        }
    }

    function mv(l, t) {
        Ct.m(l, t);
        var a = yu;
        if (a && l) {
            var u = t && typeof t.as == "string" ? t.as : "script",
                e = 'link[rel="modulepreload"][as="' + et(u) + '"][href="' + et(l) + '"]',
                n = e;
            switch (u) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    n = bu(l)
            }
            if (!dt.has(n) && (l = U({
                    rel: "modulepreload",
                    href: l
                }, t), dt.set(n, l), a.querySelector(e) === null)) {
                switch (u) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(se(n))) return
                }
                u = a.createElement("link"), Ml(u, "link", l), Al(u), a.head.appendChild(u)
            }
        }
    }

    function yv(l, t, a) {
        Ct.S(l, t, a);
        var u = yu;
        if (u && l) {
            var e = Ba(u).hoistableStyles,
                n = gu(l);
            t = t || "default";
            var i = e.get(n);
            if (!i) {
                var c = {
                    loading: 0,
                    preload: null
                };
                if (i = u.querySelector(fe(n))) c.loading = 5;
                else {
                    l = U({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, a), (a = dt.get(n)) && Cc(l, a);
                    var f = i = u.createElement("link");
                    Al(f), Ml(f, "link", l), f._p = new Promise(function(v, g) {
                        f.onload = v, f.onerror = g
                    }), f.addEventListener("load", function() {
                        c.loading |= 1
                    }), f.addEventListener("error", function() {
                        c.loading |= 2
                    }), c.loading |= 4, pn(i, t, u)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: c
                }, e.set(n, i)
            }
        }
    }

    function gv(l, t) {
        Ct.X(l, t);
        var a = yu;
        if (a && l) {
            var u = Ba(a).hoistableScripts,
                e = bu(l),
                n = u.get(e);
            n || (n = a.querySelector(se(e)), n || (l = U({
                src: l,
                async: !0
            }, t), (t = dt.get(e)) && Qc(l, t), n = a.createElement("script"), Al(n), Ml(n, "link", l), a.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, u.set(e, n))
        }
    }

    function bv(l, t) {
        Ct.M(l, t);
        var a = yu;
        if (a && l) {
            var u = Ba(a).hoistableScripts,
                e = bu(l),
                n = u.get(e);
            n || (n = a.querySelector(se(e)), n || (l = U({
                src: l,
                async: !0,
                type: "module"
            }, t), (t = dt.get(e)) && Qc(l, t), n = a.createElement("script"), Al(n), Ml(n, "link", l), a.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, u.set(e, n))
        }
    }

    function qd(l, t, a, u) {
        var e = (e = G.current) ? En(e) : null;
        if (!e) throw Error(y(446));
        switch (l) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (t = gu(a.href), a = Ba(e).hoistableStyles, u = a.get(t), u || (u = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(t, u)), u) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    l = gu(a.href);
                    var n = Ba(e).hoistableStyles,
                        i = n.get(l);
                    if (i || (e = e.ownerDocument || e, i = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, n.set(l, i), (n = e.querySelector(fe(l))) && !n._p && (i.instance = n, i.state.loading = 5), dt.has(l) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, dt.set(l, a), n || Sv(e, l, a, i.state))), t && u === null) throw Error(y(528, ""));
                    return i
                }
                if (t && u !== null) throw Error(y(529, ""));
                return null;
            case "script":
                return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = bu(a), a = Ba(e).hoistableScripts, u = a.get(t), u || (u = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(t, u)), u) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(y(444, l))
        }
    }

    function gu(l) {
        return 'href="' + et(l) + '"'
    }

    function fe(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }

    function jd(l) {
        return U({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }

    function Sv(l, t, a, u) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
            return u.loading |= 1
        }), t.addEventListener("error", function() {
            return u.loading |= 2
        }), Ml(t, "link", a), Al(t), l.head.appendChild(t))
    }

    function bu(l) {
        return '[src="' + et(l) + '"]'
    }

    function se(l) {
        return "script[async]" + l
    }

    function Yd(l, t, a) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var u = l.querySelector('style[data-href~="' + et(a.href) + '"]');
                if (u) return t.instance = u, Al(u), u;
                var e = U({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return u = (l.ownerDocument || l).createElement("style"), Al(u), Ml(u, "style", e), pn(u, a.precedence, l), t.instance = u;
            case "stylesheet":
                e = gu(a.href);
                var n = l.querySelector(fe(e));
                if (n) return t.state.loading |= 4, t.instance = n, Al(n), n;
                u = jd(a), (e = dt.get(e)) && Cc(u, e), n = (l.ownerDocument || l).createElement("link"), Al(n);
                var i = n;
                return i._p = new Promise(function(c, f) {
                    i.onload = c, i.onerror = f
                }), Ml(n, "link", u), t.state.loading |= 4, pn(n, a.precedence, l), t.instance = n;
            case "script":
                return n = bu(a.src), (e = l.querySelector(se(n))) ? (t.instance = e, Al(e), e) : (u = a, (e = dt.get(n)) && (u = U({}, a), Qc(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), Al(e), Ml(e, "link", u), l.head.appendChild(e), t.instance = e);
            case "void":
                return null;
            default:
                throw Error(y(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, pn(u, a.precedence, l));
        return t.instance
    }

    function pn(l, t, a) {
        for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = u.length ? u[u.length - 1] : null, n = e, i = 0; i < u.length; i++) {
            var c = u[i];
            if (c.dataset.precedence === t) n = c;
            else if (n !== e) break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild))
    }

    function Cc(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title)
    }

    function Qc(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity)
    }
    var zn = null;

    function Bd(l, t, a) {
        if (zn === null) {
            var u = new Map,
                e = zn = new Map;
            e.set(a, u)
        } else e = zn, u = e.get(a), u || (u = new Map, e.set(a, u));
        if (u.has(l)) return u;
        for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
            var n = a[e];
            if (!(n[Eu] || n[Nl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = n.getAttribute(t) || "";
                i = l + i;
                var c = u.get(i);
                c ? c.push(n) : u.set(i, [n])
            }
        }
        return u
    }

    function Gd(l, t, a) {
        l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null)
    }

    function Tv(l, t, a) {
        if (a === 1 || t.itemProp != null) return !1;
        switch (l) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return l = t.disabled, typeof t.precedence == "string" && l == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function Xd(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    var oe = null;

    function Av() {}

    function Ev(l, t, a) {
        if (oe === null) throw Error(y(475));
        var u = oe;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var e = gu(a.href),
                    n = l.querySelector(fe(e));
                if (n) {
                    l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = xn.bind(u), l.then(u, u)), t.state.loading |= 4, t.instance = n, Al(n);
                    return
                }
                n = l.ownerDocument || l, a = jd(a), (e = dt.get(e)) && Cc(a, e), n = n.createElement("link"), Al(n);
                var i = n;
                i._p = new Promise(function(c, f) {
                    i.onload = c, i.onerror = f
                }), Ml(n, "link", a), t.instance = n
            }
            u.stylesheets === null && (u.stylesheets = new Map), u.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (u.count++, t = xn.bind(u), l.addEventListener("load", t), l.addEventListener("error", t))
        }
    }

    function pv() {
        if (oe === null) throw Error(y(475));
        var l = oe;
        return l.stylesheets && l.count === 0 && Zc(l, l.stylesheets), 0 < l.count ? function(t) {
            var a = setTimeout(function() {
                if (l.stylesheets && Zc(l, l.stylesheets), l.unsuspend) {
                    var u = l.unsuspend;
                    l.unsuspend = null, u()
                }
            }, 6e4);
            return l.unsuspend = t,
                function() {
                    l.unsuspend = null, clearTimeout(a)
                }
        } : null
    }

    function xn() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Zc(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null, l()
            }
        }
    }
    var _n = null;

    function Zc(l, t) {
        l.stylesheets = null, l.unsuspend !== null && (l.count++, _n = new Map, t.forEach(zv, l), _n = null, xn.call(l))
    }

    function zv(l, t) {
        if (!(t.state.loading & 4)) {
            var a = _n.get(l);
            if (a) var u = a.get(null);
            else {
                a = new Map, _n.set(l, a);
                for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), u = i)
                }
                u && a.set(null, u)
            }
            e = t.instance, i = e.getAttribute("data-precedence"), n = a.get(i) || u, n === u && a.set(null, e), a.set(i, e), this.count++, u = xn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4
        }
    }
    var de = {
        $$typeof: Ol,
        Provider: null,
        Consumer: null,
        _currentValue: Y,
        _currentValue2: Y,
        _threadCount: 0
    };

    function xv(l, t, a, u, e, n, i, c) {
        this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gn(0), this.hiddenUpdates = Gn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = new Map
    }

    function Cd(l, t, a, u, e, n, i, c, f, v, g, T) {
        return l = new xv(l, t, a, i, c, f, v, T), t = 1, n === !0 && (t |= 24), n = $l(3, null, null, t), l.current = n, n.stateNode = l, t = pi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
            element: u,
            isDehydrated: a,
            cache: t
        }, Mi(n), l
    }

    function Qd(l) {
        return l ? (l = ka, l) : ka
    }

    function Zd(l, t, a, u, e, n) {
        e = Qd(e), u.context === null ? u.context = e : u.pendingContext = e, u = Jt(t), u.payload = {
            element: a
        }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = Wt(l, u, t), a !== null && (tt(a, l, t), Qu(a, l, t))
    }

    function Vd(l, t) {
        if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
            var a = l.retryLane;
            l.retryLane = a !== 0 && a < t ? a : t
        }
    }

    function Vc(l, t) {
        Vd(l, t), (l = l.alternate) && Vd(l, t)
    }

    function Ld(l) {
        if (l.tag === 13) {
            var t = Wa(l, 67108864);
            t !== null && tt(t, l, 67108864), Vc(l, 67108864)
        }
    }
    var Mn = !0;

    function _v(l, t, a, u) {
        var e = b.T;
        b.T = null;
        var n = _.p;
        try {
            _.p = 2, Lc(l, t, a, u)
        } finally {
            _.p = n, b.T = e
        }
    }

    function Mv(l, t, a, u) {
        var e = b.T;
        b.T = null;
        var n = _.p;
        try {
            _.p = 8, Lc(l, t, a, u)
        } finally {
            _.p = n, b.T = e
        }
    }

    function Lc(l, t, a, u) {
        if (Mn) {
            var e = Kc(u);
            if (e === null) Nc(l, t, u, On, a), wd(l, u);
            else if (Dv(e, l, t, a, u)) u.stopPropagation();
            else if (wd(l, u), t & 4 && -1 < Ov.indexOf(l)) {
                for (; e !== null;) {
                    var n = Ya(e);
                    if (n !== null) switch (n.tag) {
                        case 3:
                            if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                                var i = ma(n.pendingLanes);
                                if (i !== 0) {
                                    var c = n;
                                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i;) {
                                        var f = 1 << 31 - Wl(i);
                                        c.entanglements[1] |= f, i &= ~f
                                    }
                                    pt(n), (P & 6) === 0 && (dn = bt() + 500, ee(0))
                                }
                            }
                            break;
                        case 13:
                            c = Wa(n, 2), c !== null && tt(c, n, 2), vn(), Vc(n, 2)
                    }
                    if (n = Kc(u), n === null && Nc(l, t, u, On, a), n === e) break;
                    e = n
                }
                e !== null && u.stopPropagation()
            } else Nc(l, t, u, null, a)
        }
    }

    function Kc(l) {
        return l = $n(l), wc(l)
    }
    var On = null;

    function wc(l) {
        if (On = null, l = ja(l), l !== null) {
            var t = w(l);
            if (t === null) l = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (l = W(t), l !== null) return l;
                    l = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else t !== l && (l = null)
            }
        }
        return On = l, null
    }

    function Kd(l) {
        switch (l) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (vr()) {
                    case uf:
                        return 2;
                    case ef:
                        return 8;
                    case Se:
                    case hr:
                        return 32;
                    case nf:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Jc = !1,
        ca = null,
        fa = null,
        sa = null,
        re = new Map,
        ve = new Map,
        oa = [],
        Ov = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function wd(l, t) {
        switch (l) {
            case "focusin":
            case "focusout":
                ca = null;
                break;
            case "dragenter":
            case "dragleave":
                fa = null;
                break;
            case "mouseover":
            case "mouseout":
                sa = null;
                break;
            case "pointerover":
            case "pointerout":
                re.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ve.delete(t.pointerId)
        }
    }

    function he(l, t, a, u, e, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: u,
            nativeEvent: n,
            targetContainers: [e]
        }, t !== null && (t = Ya(t), t !== null && Ld(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l)
    }

    function Dv(l, t, a, u, e) {
        switch (t) {
            case "focusin":
                return ca = he(ca, l, t, a, u, e), !0;
            case "dragenter":
                return fa = he(fa, l, t, a, u, e), !0;
            case "mouseover":
                return sa = he(sa, l, t, a, u, e), !0;
            case "pointerover":
                var n = e.pointerId;
                return re.set(n, he(re.get(n) || null, l, t, a, u, e)), !0;
            case "gotpointercapture":
                return n = e.pointerId, ve.set(n, he(ve.get(n) || null, l, t, a, u, e)), !0
        }
        return !1
    }

    function Jd(l) {
        var t = ja(l.target);
        if (t !== null) {
            var a = w(t);
            if (a !== null) {
                if (t = a.tag, t === 13) {
                    if (t = W(a), t !== null) {
                        l.blockedOn = t, Er(l.priority, function() {
                            if (a.tag === 13) {
                                var u = lt();
                                u = Xn(u);
                                var e = Wa(a, u);
                                e !== null && tt(e, a, u), Vc(a, u)
                            }
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }

    function Dn(l) {
        if (l.blockedOn !== null) return !1;
        for (var t = l.targetContainers; 0 < t.length;) {
            var a = Kc(l.nativeEvent);
            if (a === null) {
                a = l.nativeEvent;
                var u = new a.constructor(a.type, a);
                kn = u, a.target.dispatchEvent(u), kn = null
            } else return t = Ya(a), t !== null && Ld(t), l.blockedOn = a, !1;
            t.shift()
        }
        return !0
    }

    function Wd(l, t, a) {
        Dn(l) && a.delete(t)
    }

    function Uv() {
        Jc = !1, ca !== null && Dn(ca) && (ca = null), fa !== null && Dn(fa) && (fa = null), sa !== null && Dn(sa) && (sa = null), re.forEach(Wd), ve.forEach(Wd)
    }

    function Un(l, t) {
        l.blockedOn === t && (l.blockedOn = null, Jc || (Jc = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, Uv)))
    }
    var Nn = null;

    function kd(l) {
        Nn !== l && (Nn = l, A.unstable_scheduleCallback(A.unstable_NormalPriority, function() {
            Nn === l && (Nn = null);
            for (var t = 0; t < l.length; t += 3) {
                var a = l[t],
                    u = l[t + 1],
                    e = l[t + 2];
                if (typeof u != "function") {
                    if (wc(u || a) === null) continue;
                    break
                }
                var n = Ya(a);
                n !== null && (l.splice(t, 3), t -= 3, wi(n, {
                    pending: !0,
                    data: e,
                    method: a.method,
                    action: u
                }, u, e))
            }
        }))
    }

    function me(l) {
        function t(f) {
            return Un(f, l)
        }
        ca !== null && Un(ca, l), fa !== null && Un(fa, l), sa !== null && Un(sa, l), re.forEach(t), ve.forEach(t);
        for (var a = 0; a < oa.length; a++) {
            var u = oa[a];
            u.blockedOn === l && (u.blockedOn = null)
        }
        for (; 0 < oa.length && (a = oa[0], a.blockedOn === null);) Jd(a), a.blockedOn === null && oa.shift();
        if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
            for (u = 0; u < a.length; u += 3) {
                var e = a[u],
                    n = a[u + 1],
                    i = e[Gl] || null;
                if (typeof n == "function") i || kd(a);
                else if (i) {
                    var c = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (e = n, i = n[Gl] || null) c = i.formAction;
                        else if (wc(e) !== null) continue
                    } else c = i.action;
                    typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), kd(a)
                }
            }
    }

    function Wc(l) {
        this._internalRoot = l
    }
    Rn.prototype.render = Wc.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null) throw Error(y(409));
        var a = t.current,
            u = lt();
        Zd(a, u, l, t, null, null)
    }, Rn.prototype.unmount = Wc.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            Zd(l.current, 2, null, l, null, null), vn(), t[qa] = null
        }
    };

    function Rn(l) {
        this._internalRoot = l
    }
    Rn.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = df();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var a = 0; a < oa.length && t !== 0 && t < oa[a].priority; a++);
            oa.splice(a, 0, l), a === 0 && Jd(l)
        }
    };
    var $d = Q.version;
    if ($d !== "19.1.0") throw Error(y(527, $d, "19.1.0"));
    _.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0) throw typeof l.render == "function" ? Error(y(188)) : (l = Object.keys(l).join(","), Error(y(268, l)));
        return l = R(t), l = l !== null ? E(l) : null, l = l === null ? null : l.stateNode, l
    };
    var Nv = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: b,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Hn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Hn.isDisabled && Hn.supportsFiber) try {
            Su = Hn.inject(Nv), Jl = Hn
        } catch {}
    }
    return ge.createRoot = function(l, t) {
        if (!X(l)) throw Error(y(299));
        var a = !1,
            u = "",
            e = ro,
            n = vo,
            i = ho,
            c = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Cd(l, 1, !1, null, null, a, u, e, n, i, c, null), l[qa] = t.current, Uc(l), new Wc(t)
    }, ge.hydrateRoot = function(l, t, a) {
        if (!X(l)) throw Error(y(299));
        var u = !1,
            e = "",
            n = ro,
            i = vo,
            c = ho,
            f = null,
            v = null;
        return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (f = a.unstable_transitionCallbacks), a.formState !== void 0 && (v = a.formState)), t = Cd(l, 1, !0, t, a ?? null, u, e, n, i, c, f, v), t.context = Qd(null), a = t.current, u = lt(), u = Xn(u), e = Jt(u), e.callback = null, Wt(a, e, u), a = u, t.current.lanes = a, Au(t, a), pt(t), l[qa] = t.current, Uc(l), new Rn(t)
    }, ge.version = "19.1.0", ge
}
var ir;

function Zv() {
    if (ir) return Fc.exports;
    ir = 1;

    function A() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)
        } catch (Q) {
            console.error(Q)
        }
    }
    return A(), Fc.exports = Qv(), Fc.exports
}
var Vv = Zv();
const Lv = fr(Vv),
    Kv = [/*{
        id: "album9",
        title: "พิพากษ์สื่อ",
        artist: "Drama",
        releaseYear: 2025,
        coverArtUrl: "./asset/photo/cat_1pm.png",
        description: "Dumb Fuck AF",
        video: {
            source: "youtube",
            videoId: "Isqk6mX4gPI"
        },
    }*/, /*{
        id: "album8",
        title: "KnightBread",
        artist: "Adventure/Drama",
        releaseYear: 2025,
        coverArtUrl: "https://img.youtube.com/vi/Isqk6mX4gPI/mqdefault.jpg",
        description: "Dumb Fuck AF",
        video: {
            source: "youtube",
            videoId: "Isqk6mX4gPI"
        },
    }*/, {
        id: "album7",
        title: "Ultramarine",
        artist: "Adventure/Drama",
        releaseYear: 2024,
        coverArtUrl: "https://img.youtube.com/vi/Isqk6mX4gPI/mqdefault.jpg",
        description: "",
        video: {
            source: "youtube",
            videoId: "Isqk6mX4gPI"
        },
    }, {
        id: "album1",
        title: "i7d9N",
        artist: "Drama",
        releaseYear: 2023,
        coverArtUrl: "./asset/photo/i7d9N.jpg",
        description: "",
        video: {
            source: "youtube",
            videoId: "-UVE9RWfkmU"
        },
    }, {
        id: "album2",
        title: "Burger Queen",
        artist: "Action/Comedy",
        releaseYear: 2023,
        coverArtUrl: "./asset/photo/bq.png",
        description: "",
        video: {
            source: "vimeo",
            videoId: "779866731"
        },
    }, {
        id: "album3",
        title: "Run Teeh Run!",
        artist: "Horror",
        releaseYear: 2023,
        coverArtUrl: "./asset/photo/teeh.jpeg",
        description: "",
        video: {
            source: "vimeo",
            videoId: "755909996"
        },
    }, {
        id: "album4",
        title: "Sunflower",
        artist: "Horror",
        releaseYear: 2023,
        coverArtUrl: "./asset/photo/sun.jpg",
        description: "",
        video: {
            source: "vimeo",
            videoId: "721757015"
        },
    }, {
        id: "album5",
        title: "Mookrata",
        artist: "Romatic/Thriller",
        releaseYear: 2023,
        coverArtUrl: "./asset/photo/moo.jpg",
        description: "",
        video: {
            source: "vimeo",
            videoId: "705242955"
        },
    }, {
        id: "album6",
        title: "Toilet In Peace",
        artist: "Action",
        releaseYear: 2023,
        coverArtUrl: "./asset/photo/toilet.png",
        description: "",
        video: {
            source: "vimeo",
            videoId: "694875956"
        },
    }],
    wv = () => z.jsx("header", {
        className: "border-b border-[var(--border-subtle)]",
        children: z.jsx("div", {
          className: "container mx-auto px-6 py-4 flex justify-end items-center",
          children: z.jsxs(z.Fragment, {
            children: [
            /*
                z.jsxs("div", {
                    className: "relative inline-block",
                    children: [
                      z.jsx("a", {
                        href: "/movie.html",
                        className: "relative z-10 bg-transparent border border-[var(--border-subtle)] text-[var(--text-default)] font-medium px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_white] hover:border-[white] hover:text-[white] focus:outline-none",
                        children: "Movies"
                      }),
                      z.jsx("div", {
                        className: "absolute inset-0 z-0 animate-particles pointer-events-none"
                      })
                    ]
                  }),
            */
                  z.jsxs("div", {
                    className: "relative inline-block",
                    children: [
                      z.jsx("a", {
                        href: "/",
                        className: "relative z-10 bg-transparent border border-[var(--border-subtle)] text-[var(--text-default)] font-medium px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_white] hover:border-[white] hover:text-[white] focus:outline-none",
                        children: "Home"
                      }),
                      z.jsx("div", {
                        className: "absolute inset-0 z-0 animate-particles pointer-events-none"
                      })
                    ]
                  })
            ]
          })
        })
      }),      
    Jv = () => z.jsx("section", {
        className: "text-center py-12 md:py-16 px-6",
        children: z.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [z.jsx("h1", {
                className: "text-4xl md:text-5xl font-bold text-[var(--text-default)] leading-tight tracking-tight",
                children: " WORKS"
            }), z.jsx("p", {
                className: "mt-4 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto",
                children: "Welcome :) This is where you can see the projects I’ve done so far. Just click any item to watch and read the description."
            })]
        })
    }),
    Wv = ({
        className: A
    }) => z.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: A || "w-6 h-6",
        children: z.jsx("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        })
    }),
    kv = ({
        className: A
    }) => z.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: A || "w-6 h-6",
        children: z.jsx("path", {
            fillRule: "evenodd",
            d: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z",
            clipRule: "evenodd"
        })
    }),
    $v = ({
        className: A
    }) => z.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: A || "w-6 h-6",
        children: z.jsx("path", {
            d: "M19.75 3H4.25A1.25 1.25 0 0 0 3 4.25v15.5A1.25 1.25 0 0 0 4.25 21h15.5A1.25 1.25 0 0 0 21 19.75V4.25A1.25 1.25 0 0 0 19.75 3zM8.5 18.5h-3v-9h3v9zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.5 10h-3v-4.35c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18.5h-3v-9h2.88v1.31h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.3z"
        })
    }),
    tf = ({
        href: A,
        ariaLabel: Q,
        children: O
    }) => z.jsx("a", {
        href: A,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": Q,
        className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-transform duration-200 hover:scale-110",
        children: O
    }),
    Fv = () => z.jsx("footer", {
        className: "bg-[var(--bg-surface-glass)] backdrop-blur-lg mt-12 glass-border shadow-[0_-4px_15px_var(--shadow-color)]",
        children: z.jsxs("div", {
            className: "container mx-auto px-6 py-8 text-center text-[var(--text-secondary)]",
            children: [z.jsx("p", {
                className: "text-lg font-medium text-[var(--text-default)] mb-4",
                children: "THANK YOU :)"
            }), z.jsxs("div", {
                className: "flex justify-center items-center space-x-6 mb-6",
                children: z.jsx(tf, {
                    href: "https://www.youtube.com/@ab7j",
                    ariaLabel: "YouTube",
                    children: z.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "#e63946",
                        className: "w-10 h-10 transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_4px_#e63946]",
                        children: z.jsx("path", {
                            d: "M10 15V9l5.2 3-5.2 3zm11-3c0-1.4-.2-2.9-.5-4.2-.3-1.2-1.2-2.1-2.4-2.4C16.8 5 12 5 12 5s-4.8 0-6.1.4c-1.2.3-2.1 1.2-2.4 2.4C3.2 9.1 3 10.6 3 12s.2 2.9.5 4.2c.3 1.2 1.2 2.1 2.4 2.4 1.3.4 6.1.4 6.1.4s4.8 0 6.1-.4c1.2-.3 2.1-1.2 2.4-2.4.4-1.3.5-2.8.5-4.2z"
                        })
                    })                   
                })
            }), z.jsx("p", {
                className: "text-sm text-[var(--text-muted)]",
                children: "2025"
            }), z.jsx("p", {
                className: "text-sm text-[var(--text-muted)]",
                children: "nwmbee@gmail.com"
            }),  z.jsx("p", {
                className: "text-xs mt-2 text-[var(--text-subtle)]",
                children: "nwbmee / All rights reserved."
            })]
        })
    }),
    Iv = ({
        album: A,
        onSelectAlbum: Q
    }) => z.jsxs("div", {
        className: "bg-[var(--bg-surface-glass-濃)] backdrop-blur-md rounded-2xl shadow-[0_8px_30px_var(--shadow-color)] overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_var(--shadow-color-strong)] group glass-border",
        onClick: () => Q(A),
        role: "button",
        tabIndex: 0,
        onKeyDown: O => O.key === "Enter" && Q(A),
        "aria-label": `View details for ${A.title}`,
        children: [z.jsx("div", {
            className: "relative aspect-square",
            children: z.jsx("img", {
                src: A.coverArtUrl,
                alt: `${A.title} cover art`,
                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                loading: "lazy"
            })
        }), z.jsxs("div", {
            className: "p-5",
            children: [z.jsx("h3", {
                className: "text-xl font-semibold text-[var(--text-default)] truncate",
                title: A.title,
                children: A.title
            }), z.jsx("p", {
                className: "text-sm text-[var(--text-secondary)] mt-1 truncate",
                title: A.artist,
                children: A.artist
            }), z.jsx("p", {
                className: "text-xs text-[var(--text-muted)] mt-1",
                children: A.releaseYear
            })]
        })]
    }),
    Pv = ({
        albums: A,
        onSelectAlbum: Q
    }) => z.jsxs("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8",
        children: [" ", A.map(O => z.jsx(Iv, {
            album: O,
            onSelectAlbum: Q
        }, O.id))]
    }),
    cr = ({
        className: A
    }) => z.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: A || "w-6 h-6",
        children: z.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        })
    }),
    l1 = ({
        source: A,
        videoId: Q
    }) => {
        const O = A === "youtube" ? `https://www.youtube.com/embed/${Q}?autoplay=1&modestbranding=1&rel=0` : `https://player.vimeo.com/video/${Q}?autoplay=1`;
        return z.jsx("div", {
            className: "aspect-video w-full bg-[var(--bg-element)]",
            children: z.jsx("iframe", {
                src: O,
                title: "Video player",
                frameBorder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: !0,
                className: "w-full h-full"
            })
        })
    },
    sr = ({
        album: A,
        onClose: Q,
        isInline: O = !1
    }) => {
        const y = O ? `album-detail-title-inline-${A.id}` : `album-detail-title-modal-${A.id}`,
            X = O ? "bg-transparent" : "bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl shadow-[0_10px_35px_var(--shadow-color-strong)] glass-border";
        return z.jsxs("div", {
            className: `flex flex-col ${X} ${O?"h-full rounded-[14px]":"max-h-[90vh] w-full max-w-2xl rounded-2xl"}`,
            children: [z.jsxs("div", {
                className: `flex-shrink-0 relative ${O?"rounded-t-[14px]":"rounded-t-2xl"} overflow-hidden`,
                children: [z.jsx(l1, {
                    source: A.video.source,
                    videoId: A.video.videoId
                }), O && z.jsx("button", {
                    onClick: Q,
                    className: "absolute top-3 right-3 text-[var(--gray-light-0)] hover:text-[var(--gray-light-0)] bg-[hsla(var(--gray-hue),var(--gray-saturation),0%,0.4)] hover:bg-[hsla(var(--gray-hue),var(--gray-saturation),0%,0.6)] backdrop-blur-sm p-1.5 rounded-full transition-all duration-200 z-10 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-transparent focus:ring-[var(--gray-light-0)]",
                    "aria-label": "Close details",
                    title: "Close details",
                    children: z.jsx(cr, {
                        className: "w-5 h-5"
                    })
                })]
            }), !O && z.jsx("button", {
                onClick: Q,
                className: "absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors z-20 p-2 bg-[var(--bg-surface-glass)] backdrop-blur-sm hover:bg-[var(--bg-element)] rounded-full lg:hidden",
                "aria-label": "Close details",
                children: z.jsx(cr, {
                    className: "w-6 h-6"
                })
            }), z.jsxs("div", {
                className: "p-4 md:p-6 flex-grow overflow-y-auto text-[var(--text-secondary)]",
                style: {
                    scrollbarGutter: "stable"
                },
                children: [z.jsx("h2", {
                    id: O ? void 0 : y,
                    className: `font-bold text-[var(--text-default)] leading-tight break-words ${O?"text-2xl md:text-3xl":"text-3xl md:text-4xl"}`,
                    children: A.title
                }), z.jsxs("p", {
                    className: `mt-1 text-[var(--text-secondary)] ${O?"text-md":"text-lg "}`,
                    children: [A.artist, " • ", A.releaseYear]
                }), z.jsx("p", {
                    className: "mt-6 leading-relaxed text-sm md:text-base",
                    children: A.description
                })]
            })]
        })
    },
    t1 = ({
        album: A,
        onClose: Q
    }) => {
        const [O, y] = at.useState(!1);
        if (at.useEffect(() => {
                if (A) {
                    const hl = setTimeout(() => {
                        y(!0)
                    }, 50);
                    return () => {
                        clearTimeout(hl), y(!1)
                    }
                } else y(!1)
            }, [A]), !A) return null;
        const X = "fixed inset-0 bg-[var(--bg-overlay)] backdrop-blur-sm flex items-center justify-center p-4 z-[100] overflow-y-auto lg:hidden",
            w = "transition-all duration-300 ease-out",
            W = O ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-5";
        return z.jsx("div", {
            className: `${X}`,
            onClick: Q,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": `album-detail-title-modal-${A.id}`,
            children: z.jsx("div", {
                className: `${w} ${W} w-full max-w-2xl`,
                onClick: hl => hl.stopPropagation(),
                role: "document",
                children: z.jsx(sr, {
                    album: A,
                    onClose: Q
                })
            })
        })
    },
    a1 = () => {
        const [A, Q] = at.useState([]), [O, y] = at.useState(null), [X, w] = at.useState(!0), [W, hl] = at.useState(window.innerWidth >= 1024);
        at.useEffect(() => {
            const U = () => {
                hl(window.innerWidth >= 1024)
            };
            return window.addEventListener("resize", U), () => window.removeEventListener("resize", U)
        }, []), at.useEffect(() => {
            w(!0), setTimeout(() => {
                Q(Kv), w(!1)
            }, 500)
        }, []);
        const R = at.useCallback(U => {
                W && (O == null ? void 0 : O.id) === U.id ? y(null) : y(U)
            }, [W, O]),
            E = at.useCallback(() => {
                y(null)
            }, []);
        return at.useEffect(() => {
            const U = el => {
                el.key === "Escape" && E()
            };
            return O && window.addEventListener("keydown", U), () => {
                window.removeEventListener("keydown", U)
            }
        }, [O, E]), at.useEffect(() => {
            O && !W ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
        }, [O, W]), z.jsxs("div", {
            className: "flex flex-col min-h-screen",
            children: [z.jsx(wv, {}), z.jsx(Jv, {}), z.jsx("div", {
                className: "flex-grow container mx-auto px-6 pb-8",
                children: z.jsxs("div", {
                    className: "lg:flex lg:space-x-8",
                    children: [z.jsx("main", {
                        className: `flex-grow ${W&&O?"lg:w-2/3":"w-full"}`,
                        children: X ? z.jsxs("div", {
                            className: "flex flex-col justify-center items-center h-64 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl p-8 glass-border shadow-[0_8px_30px_var(--shadow-color)]",
                            children: [z.jsx("div", {
                                className: "animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#3EB489] shadow-[0_0_15px_#3EB489]"
                            }), z.jsx("p", {
                                className: "ml-4 text-xl text-[var(--text-default)] mt-4",
                                children: "Loading Albums..."
                            })]
                        }) : A.length > 0 ? z.jsx(Pv, {
                            albums: A,
                            onSelectAlbum: R
                        }) : z.jsxs("div", {
                            className: "text-center py-10 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl p-8 glass-border shadow-[0_8px_30px_var(--shadow-color)] text-[var(--text-muted)]",
                            children: [z.jsx("h2", {
                                className: "text-2xl font-semibold mb-2 text-[var(--text-default)]",
                                children: "No Albums Available"
                            }), z.jsx("p", {
                                children: "There are currently no albums to display."
                            })]
                        })
                    }), W && O && z.jsx("aside", {
                        className: "lg:w-1/3 mt-6 lg:mt-0 sticky top-8 max-h-[calc(100vh_-_8rem)] overflow-y-auto rounded-2xl p-px glass-border bg-transparent shadow-[0_8px_30px_var(--shadow-color-strong)]",
                        children: z.jsx("div", {
                            className: "bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl rounded-[15px] h-full",
                            children: z.jsx(sr, {
                                album: O,
                                onClose: E,
                                isInline: !0
                            })
                        })
                    }), W && !O && z.jsx("aside", {
                        className: "hidden lg:block lg:w-1/3 mt-6 lg:mt-0 p-8 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl shadow-[0_8px_30px_var(--shadow-color)] glass-border",
                        children: z.jsxs("div", {
                            className: "flex flex-col items-center justify-center h-full border-2 border-dashed border-[var(--border-muted)] rounded-lg p-6 text-[var(--text-muted)]",
                            children: [z.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-16 w-16 mb-4 text-[var(--text-subtle)]",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: z.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 1.5,
                                    d: "M15.59,13.41L14.17,12L15.59,10.59L17,12M13,17.25V21H11V17.25H7.5L12,12.75L16.5,17.25H13M12,3L1.75,8.25V15.75H4V10.5L12,5.25L20,10.5V15.75H22.25V8.25L12,3Z"
                                })
                            }), z.jsx("h3", {
                                className: "text-xl font-semibold text-[var(--text-default)]",
                                children: "Video Details"
                            }), z.jsx("p", {
                                className: "mt-1 text-sm",
                                children: "Select an item from the list to see the video here."
                            })]
                        })
                    })]
                })
            }), z.jsx(Fv, {}), !W && O && z.jsx(t1, {
                album: O,
                onClose: E
            })]
        })
    },
    u1 = () => z.jsx(a1, {}),
    or = document.getElementById("root");
if (!or) throw new Error("Could not find root element to mount to");
const e1 = Lv.createRoot(or);
e1.render(z.jsx(Yv.StrictMode, {
    children: z.jsx(u1, {})
}));