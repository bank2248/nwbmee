(function() {
    const w = document.createElement("link").relList;
    if (w && w.supports && w.supports("modulepreload")) return;
    for (const R of document.querySelectorAll('link[rel="modulepreload"]')) h(R);
    new MutationObserver(R => {
        for (const H of R)
            if (H.type === "childList")
                for (const C of H.addedNodes) C.tagName === "LINK" && C.rel === "modulepreload" && h(C)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function _(R) {
        const H = {};
        return R.integrity && (H.integrity = R.integrity), R.referrerPolicy && (H.referrerPolicy = R.referrerPolicy), R.crossOrigin === "use-credentials" ? H.credentials = "include" : R.crossOrigin === "anonymous" ? H.credentials = "omit" : H.credentials = "same-origin", H
    }

    function h(R) {
        if (R.ep) return;
        R.ep = !0;
        const H = _(R);
        fetch(R.href, H)
    }
})();

function gd(v) {
    return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v
}
var Ic = {
        exports: {}
    },
    pu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nd;

function Vv() {
    if (nd) return pu;
    nd = 1;
    var v = Symbol.for("react.transitional.element"),
        w = Symbol.for("react.fragment");

    function _(h, R, H) {
        var C = null;
        if (H !== void 0 && (C = "" + H), R.key !== void 0 && (C = "" + R.key), "key" in R) {
            H = {};
            for (var P in R) P !== "key" && (H[P] = R[P])
        } else H = R;
        return R = H.ref, {
            $$typeof: v,
            type: h,
            key: C,
            ref: R !== void 0 ? R : null,
            props: H
        }
    }
    return pu.Fragment = w, pu.jsx = _, pu.jsxs = _, pu
}
var id;

function Kv() {
    return id || (id = 1, Ic.exports = Vv()), Ic.exports
}
var o = Kv(),
    lf = {
        exports: {}
    },
    F = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;

function Jv() {
    if (cd) return F;
    cd = 1;
    var v = Symbol.for("react.transitional.element"),
        w = Symbol.for("react.portal"),
        _ = Symbol.for("react.fragment"),
        h = Symbol.for("react.strict_mode"),
        R = Symbol.for("react.profiler"),
        H = Symbol.for("react.consumer"),
        C = Symbol.for("react.context"),
        P = Symbol.for("react.forward_ref"),
        O = Symbol.for("react.suspense"),
        A = Symbol.for("react.memo"),
        M = Symbol.for("react.lazy"),
        $ = Symbol.iterator;

    function K(s) {
        return s === null || typeof s != "object" ? null : (s = $ && s[$] || s["@@iterator"], typeof s == "function" ? s : null)
    }
    var ul = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        sl = Object.assign,
        rl = {};

    function J(s, N, b) {
        this.props = s, this.context = N, this.refs = rl, this.updater = b || ul
    }
    J.prototype.isReactComponent = {}, J.prototype.setState = function(s, N) {
        if (typeof s != "object" && typeof s != "function" && s != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, N, "setState")
    }, J.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate")
    };

    function hl() {}
    hl.prototype = J.prototype;

    function W(s, N, b) {
        this.props = s, this.context = N, this.refs = rl, this.updater = b || ul
    }
    var k = W.prototype = new hl;
    k.constructor = W, sl(k, J.prototype), k.isPureReactComponent = !0;
    var zl = Array.isArray,
        B = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        pl = Object.prototype.hasOwnProperty;

    function I(s, N, b, z, D, Z) {
        return b = Z.ref, {
            $$typeof: v,
            type: s,
            key: N,
            ref: b !== void 0 ? b : null,
            props: Z
        }
    }

    function Tl(s, N) {
        return I(s.type, N, void 0, void 0, void 0, s.props)
    }

    function Ol(s) {
        return typeof s == "object" && s !== null && s.$$typeof === v
    }

    function Tt(s) {
        var N = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + s.replace(/[=:]/g, function(b) {
            return N[b]
        })
    }
    var xt = /\/+/g;

    function Hl(s, N) {
        return typeof s == "object" && s !== null && s.key != null ? Tt("" + s.key) : N.toString(36)
    }

    function Dt() {}

    function jt(s) {
        switch (s.status) {
            case "fulfilled":
                return s.value;
            case "rejected":
                throw s.reason;
            default:
                switch (typeof s.status == "string" ? s.then(Dt, Dt) : (s.status = "pending", s.then(function(N) {
                        s.status === "pending" && (s.status = "fulfilled", s.value = N)
                    }, function(N) {
                        s.status === "pending" && (s.status = "rejected", s.reason = N)
                    })), s.status) {
                    case "fulfilled":
                        return s.value;
                    case "rejected":
                        throw s.reason
                }
        }
        throw s
    }

    function wl(s, N, b, z, D) {
        var Z = typeof s;
        (Z === "undefined" || Z === "boolean") && (s = null);
        var Y = !1;
        if (s === null) Y = !0;
        else switch (Z) {
            case "bigint":
            case "string":
            case "number":
                Y = !0;
                break;
            case "object":
                switch (s.$$typeof) {
                    case v:
                    case w:
                        Y = !0;
                        break;
                    case M:
                        return Y = s._init, wl(Y(s._payload), N, b, z, D)
                }
        }
        if (Y) return D = D(s), Y = z === "" ? "." + Hl(s, 0) : z, zl(D) ? (b = "", Y != null && (b = Y.replace(xt, "$&/") + "/"), wl(D, N, b, "", function($l) {
            return $l
        })) : D != null && (Ol(D) && (D = Tl(D, b + (D.key == null || s && s.key === D.key ? "" : ("" + D.key).replace(xt, "$&/") + "/") + Y)), N.push(D)), 1;
        Y = 0;
        var ql = z === "" ? "." : z + ":";
        if (zl(s))
            for (var fl = 0; fl < s.length; fl++) z = s[fl], Z = ql + Hl(z, fl), Y += wl(z, N, b, Z, D);
        else if (fl = K(s), typeof fl == "function")
            for (s = fl.call(s), fl = 0; !(z = s.next()).done;) z = z.value, Z = ql + Hl(z, fl++), Y += wl(z, N, b, Z, D);
        else if (Z === "object") {
            if (typeof s.then == "function") return wl(jt(s), N, b, z, D);
            throw N = String(s), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Y
    }

    function S(s, N, b) {
        if (s == null) return s;
        var z = [],
            D = 0;
        return wl(s, z, "", "", function(Z) {
            return N.call(b, Z, D++)
        }), z
    }

    function j(s) {
        if (s._status === -1) {
            var N = s._result;
            N = N(), N.then(function(b) {
                (s._status === 0 || s._status === -1) && (s._status = 1, s._result = b)
            }, function(b) {
                (s._status === 0 || s._status === -1) && (s._status = 2, s._result = b)
            }), s._status === -1 && (s._status = 0, s._result = N)
        }
        if (s._status === 1) return s._result.default;
        throw s._result
    }
    var Q = typeof reportError == "function" ? reportError : function(s) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var N = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
                error: s
            });
            if (!window.dispatchEvent(N)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", s);
            return
        }
        console.error(s)
    };

    function ol() {}
    return F.Children = {
        map: S,
        forEach: function(s, N, b) {
            S(s, function() {
                N.apply(this, arguments)
            }, b)
        },
        count: function(s) {
            var N = 0;
            return S(s, function() {
                N++
            }), N
        },
        toArray: function(s) {
            return S(s, function(N) {
                return N
            }) || []
        },
        only: function(s) {
            if (!Ol(s)) throw Error("React.Children.only expected to receive a single React element child.");
            return s
        }
    }, F.Component = J, F.Fragment = _, F.Profiler = R, F.PureComponent = W, F.StrictMode = h, F.Suspense = O, F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, F.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(s) {
            return B.H.useMemoCache(s)
        }
    }, F.cache = function(s) {
        return function() {
            return s.apply(null, arguments)
        }
    }, F.cloneElement = function(s, N, b) {
        if (s == null) throw Error("The argument must be a React element, but you passed " + s + ".");
        var z = sl({}, s.props),
            D = s.key,
            Z = void 0;
        if (N != null)
            for (Y in N.ref !== void 0 && (Z = void 0), N.key !== void 0 && (D = "" + N.key), N) !pl.call(N, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && N.ref === void 0 || (z[Y] = N[Y]);
        var Y = arguments.length - 2;
        if (Y === 1) z.children = b;
        else if (1 < Y) {
            for (var ql = Array(Y), fl = 0; fl < Y; fl++) ql[fl] = arguments[fl + 2];
            z.children = ql
        }
        return I(s.type, D, void 0, void 0, Z, z)
    }, F.createContext = function(s) {
        return s = {
            $$typeof: C,
            _currentValue: s,
            _currentValue2: s,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, s.Provider = s, s.Consumer = {
            $$typeof: H,
            _context: s
        }, s
    }, F.createElement = function(s, N, b) {
        var z, D = {},
            Z = null;
        if (N != null)
            for (z in N.key !== void 0 && (Z = "" + N.key), N) pl.call(N, z) && z !== "key" && z !== "__self" && z !== "__source" && (D[z] = N[z]);
        var Y = arguments.length - 2;
        if (Y === 1) D.children = b;
        else if (1 < Y) {
            for (var ql = Array(Y), fl = 0; fl < Y; fl++) ql[fl] = arguments[fl + 2];
            D.children = ql
        }
        if (s && s.defaultProps)
            for (z in Y = s.defaultProps, Y) D[z] === void 0 && (D[z] = Y[z]);
        return I(s, Z, void 0, void 0, null, D)
    }, F.createRef = function() {
        return {
            current: null
        }
    }, F.forwardRef = function(s) {
        return {
            $$typeof: P,
            render: s
        }
    }, F.isValidElement = Ol, F.lazy = function(s) {
        return {
            $$typeof: M,
            _payload: {
                _status: -1,
                _result: s
            },
            _init: j
        }
    }, F.memo = function(s, N) {
        return {
            $$typeof: A,
            type: s,
            compare: N === void 0 ? null : N
        }
    }, F.startTransition = function(s) {
        var N = B.T,
            b = {};
        B.T = b;
        try {
            var z = s(),
                D = B.S;
            D !== null && D(b, z), typeof z == "object" && z !== null && typeof z.then == "function" && z.then(ol, Q)
        } catch (Z) {
            Q(Z)
        } finally {
            B.T = N
        }
    }, F.unstable_useCacheRefresh = function() {
        return B.H.useCacheRefresh()
    }, F.use = function(s) {
        return B.H.use(s)
    }, F.useActionState = function(s, N, b) {
        return B.H.useActionState(s, N, b)
    }, F.useCallback = function(s, N) {
        return B.H.useCallback(s, N)
    }, F.useContext = function(s) {
        return B.H.useContext(s)
    }, F.useDebugValue = function() {}, F.useDeferredValue = function(s, N) {
        return B.H.useDeferredValue(s, N)
    }, F.useEffect = function(s, N, b) {
        var z = B.H;
        if (typeof b == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return z.useEffect(s, N)
    }, F.useId = function() {
        return B.H.useId()
    }, F.useImperativeHandle = function(s, N, b) {
        return B.H.useImperativeHandle(s, N, b)
    }, F.useInsertionEffect = function(s, N) {
        return B.H.useInsertionEffect(s, N)
    }, F.useLayoutEffect = function(s, N) {
        return B.H.useLayoutEffect(s, N)
    }, F.useMemo = function(s, N) {
        return B.H.useMemo(s, N)
    }, F.useOptimistic = function(s, N) {
        return B.H.useOptimistic(s, N)
    }, F.useReducer = function(s, N, b) {
        return B.H.useReducer(s, N, b)
    }, F.useRef = function(s) {
        return B.H.useRef(s)
    }, F.useState = function(s) {
        return B.H.useState(s)
    }, F.useSyncExternalStore = function(s, N, b) {
        return B.H.useSyncExternalStore(s, N, b)
    }, F.useTransition = function() {
        return B.H.useTransition()
    }, F.version = "19.1.0", F
}
var fd;

function sf() {
    return fd || (fd = 1, lf.exports = Jv()), lf.exports
}
var G = sf();
const bd = gd(G);
var tf = {
        exports: {}
    },
    Au = {},
    ef = {
        exports: {}
    },
    af = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;

function kv() {
    return sd || (sd = 1, function(v) {
        function w(S, j) {
            var Q = S.length;
            S.push(j);
            l: for (; 0 < Q;) {
                var ol = Q - 1 >>> 1,
                    s = S[ol];
                if (0 < R(s, j)) S[ol] = j, S[Q] = s, Q = ol;
                else break l
            }
        }

        function _(S) {
            return S.length === 0 ? null : S[0]
        }

        function h(S) {
            if (S.length === 0) return null;
            var j = S[0],
                Q = S.pop();
            if (Q !== j) {
                S[0] = Q;
                l: for (var ol = 0, s = S.length, N = s >>> 1; ol < N;) {
                    var b = 2 * (ol + 1) - 1,
                        z = S[b],
                        D = b + 1,
                        Z = S[D];
                    if (0 > R(z, Q)) D < s && 0 > R(Z, z) ? (S[ol] = Z, S[D] = Q, ol = D) : (S[ol] = z, S[b] = Q, ol = b);
                    else if (D < s && 0 > R(Z, Q)) S[ol] = Z, S[D] = Q, ol = D;
                    else break l
                }
            }
            return j
        }

        function R(S, j) {
            var Q = S.sortIndex - j.sortIndex;
            return Q !== 0 ? Q : S.id - j.id
        }
        if (v.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var H = performance;
            v.unstable_now = function() {
                return H.now()
            }
        } else {
            var C = Date,
                P = C.now();
            v.unstable_now = function() {
                return C.now() - P
            }
        }
        var O = [],
            A = [],
            M = 1,
            $ = null,
            K = 3,
            ul = !1,
            sl = !1,
            rl = !1,
            J = !1,
            hl = typeof setTimeout == "function" ? setTimeout : null,
            W = typeof clearTimeout == "function" ? clearTimeout : null,
            k = typeof setImmediate < "u" ? setImmediate : null;

        function zl(S) {
            for (var j = _(A); j !== null;) {
                if (j.callback === null) h(A);
                else if (j.startTime <= S) h(A), j.sortIndex = j.expirationTime, w(O, j);
                else break;
                j = _(A)
            }
        }

        function B(S) {
            if (rl = !1, zl(S), !sl)
                if (_(O) !== null) sl = !0, pl || (pl = !0, Hl());
                else {
                    var j = _(A);
                    j !== null && wl(B, j.startTime - S)
                }
        }
        var pl = !1,
            I = -1,
            Tl = 5,
            Ol = -1;

        function Tt() {
            return J ? !0 : !(v.unstable_now() - Ol < Tl)
        }

        function xt() {
            if (J = !1, pl) {
                var S = v.unstable_now();
                Ol = S;
                var j = !0;
                try {
                    l: {
                        sl = !1,
                        rl && (rl = !1, W(I), I = -1),
                        ul = !0;
                        var Q = K;
                        try {
                            t: {
                                for (zl(S), $ = _(O); $ !== null && !($.expirationTime > S && Tt());) {
                                    var ol = $.callback;
                                    if (typeof ol == "function") {
                                        $.callback = null, K = $.priorityLevel;
                                        var s = ol($.expirationTime <= S);
                                        if (S = v.unstable_now(), typeof s == "function") {
                                            $.callback = s, zl(S), j = !0;
                                            break t
                                        }
                                        $ === _(O) && h(O), zl(S)
                                    } else h(O);
                                    $ = _(O)
                                }
                                if ($ !== null) j = !0;
                                else {
                                    var N = _(A);
                                    N !== null && wl(B, N.startTime - S), j = !1
                                }
                            }
                            break l
                        }
                        finally {
                            $ = null, K = Q, ul = !1
                        }
                        j = void 0
                    }
                }
                finally {
                    j ? Hl() : pl = !1
                }
            }
        }
        var Hl;
        if (typeof k == "function") Hl = function() {
            k(xt)
        };
        else if (typeof MessageChannel < "u") {
            var Dt = new MessageChannel,
                jt = Dt.port2;
            Dt.port1.onmessage = xt, Hl = function() {
                jt.postMessage(null)
            }
        } else Hl = function() {
            hl(xt, 0)
        };

        function wl(S, j) {
            I = hl(function() {
                S(v.unstable_now())
            }, j)
        }
        v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(S) {
            S.callback = null
        }, v.unstable_forceFrameRate = function(S) {
            0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Tl = 0 < S ? Math.floor(1e3 / S) : 5
        }, v.unstable_getCurrentPriorityLevel = function() {
            return K
        }, v.unstable_next = function(S) {
            switch (K) {
                case 1:
                case 2:
                case 3:
                    var j = 3;
                    break;
                default:
                    j = K
            }
            var Q = K;
            K = j;
            try {
                return S()
            } finally {
                K = Q
            }
        }, v.unstable_requestPaint = function() {
            J = !0
        }, v.unstable_runWithPriority = function(S, j) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    S = 3
            }
            var Q = K;
            K = S;
            try {
                return j()
            } finally {
                K = Q
            }
        }, v.unstable_scheduleCallback = function(S, j, Q) {
            var ol = v.unstable_now();
            switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? ol + Q : ol) : Q = ol, S) {
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
            return s = Q + s, S = {
                id: M++,
                callback: j,
                priorityLevel: S,
                startTime: Q,
                expirationTime: s,
                sortIndex: -1
            }, Q > ol ? (S.sortIndex = Q, w(A, S), _(O) === null && S === _(A) && (rl ? (W(I), I = -1) : rl = !0, wl(B, Q - ol))) : (S.sortIndex = s, w(O, S), sl || ul || (sl = !0, pl || (pl = !0, Hl()))), S
        }, v.unstable_shouldYield = Tt, v.unstable_wrapCallback = function(S) {
            var j = K;
            return function() {
                var Q = K;
                K = j;
                try {
                    return S.apply(this, arguments)
                } finally {
                    K = Q
                }
            }
        }
    }(af)), af
}
var rd;

function $v() {
    return rd || (rd = 1, ef.exports = kv()), ef.exports
}
var uf = {
        exports: {}
    },
    Kl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var od;

function Wv() {
    if (od) return Kl;
    od = 1;
    var v = sf();

    function w(O) {
        var A = "https://react.dev/errors/" + O;
        if (1 < arguments.length) {
            A += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var M = 2; M < arguments.length; M++) A += "&args[]=" + encodeURIComponent(arguments[M])
        }
        return "Minified React error #" + O + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function _() {}
    var h = {
            d: {
                f: _,
                r: function() {
                    throw Error(w(522))
                },
                D: _,
                C: _,
                L: _,
                m: _,
                X: _,
                S: _,
                M: _
            },
            p: 0,
            findDOMNode: null
        },
        R = Symbol.for("react.portal");

    function H(O, A, M) {
        var $ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: R,
            key: $ == null ? null : "" + $,
            children: O,
            containerInfo: A,
            implementation: M
        }
    }
    var C = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function P(O, A) {
        if (O === "font") return "";
        if (typeof A == "string") return A === "use-credentials" ? A : ""
    }
    return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, Kl.createPortal = function(O, A) {
        var M = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11) throw Error(w(299));
        return H(O, A, null, M)
    }, Kl.flushSync = function(O) {
        var A = C.T,
            M = h.p;
        try {
            if (C.T = null, h.p = 2, O) return O()
        } finally {
            C.T = A, h.p = M, h.d.f()
        }
    }, Kl.preconnect = function(O, A) {
        typeof O == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, h.d.C(O, A))
    }, Kl.prefetchDNS = function(O) {
        typeof O == "string" && h.d.D(O)
    }, Kl.preinit = function(O, A) {
        if (typeof O == "string" && A && typeof A.as == "string") {
            var M = A.as,
                $ = P(M, A.crossOrigin),
                K = typeof A.integrity == "string" ? A.integrity : void 0,
                ul = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
            M === "style" ? h.d.S(O, typeof A.precedence == "string" ? A.precedence : void 0, {
                crossOrigin: $,
                integrity: K,
                fetchPriority: ul
            }) : M === "script" && h.d.X(O, {
                crossOrigin: $,
                integrity: K,
                fetchPriority: ul,
                nonce: typeof A.nonce == "string" ? A.nonce : void 0
            })
        }
    }, Kl.preinitModule = function(O, A) {
        if (typeof O == "string")
            if (typeof A == "object" && A !== null) {
                if (A.as == null || A.as === "script") {
                    var M = P(A.as, A.crossOrigin);
                    h.d.M(O, {
                        crossOrigin: M,
                        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
                        nonce: typeof A.nonce == "string" ? A.nonce : void 0
                    })
                }
            } else A == null && h.d.M(O)
    }, Kl.preload = function(O, A) {
        if (typeof O == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
            var M = A.as,
                $ = P(M, A.crossOrigin);
            h.d.L(O, M, {
                crossOrigin: $,
                integrity: typeof A.integrity == "string" ? A.integrity : void 0,
                nonce: typeof A.nonce == "string" ? A.nonce : void 0,
                type: typeof A.type == "string" ? A.type : void 0,
                fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
                referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
                imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
                imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
                media: typeof A.media == "string" ? A.media : void 0
            })
        }
    }, Kl.preloadModule = function(O, A) {
        if (typeof O == "string")
            if (A) {
                var M = P(A.as, A.crossOrigin);
                h.d.m(O, {
                    as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
                    crossOrigin: M,
                    integrity: typeof A.integrity == "string" ? A.integrity : void 0
                })
            } else h.d.m(O)
    }, Kl.requestFormReset = function(O) {
        h.d.r(O)
    }, Kl.unstable_batchedUpdates = function(O, A) {
        return O(A)
    }, Kl.useFormState = function(O, A, M) {
        return C.H.useFormState(O, A, M)
    }, Kl.useFormStatus = function() {
        return C.H.useHostTransitionStatus()
    }, Kl.version = "19.1.0", Kl
}
var dd;

function Fv() {
    if (dd) return uf.exports;
    dd = 1;

    function v() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)
        } catch (w) {
            console.error(w)
        }
    }
    return v(), uf.exports = Wv(), uf.exports
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
var vd;

function Pv() {
    if (vd) return Au;
    vd = 1;
    var v = $v(),
        w = sf(),
        _ = Fv();

    function h(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function R(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }

    function H(l) {
        var t = l,
            e = l;
        if (l.alternate)
            for (; t.return;) t = t.return;
        else {
            l = t;
            do t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return; while (l)
        }
        return t.tag === 3 ? e : null
    }

    function C(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function P(l) {
        if (H(l) !== l) throw Error(h(188))
    }

    function O(l) {
        var t = l.alternate;
        if (!t) {
            if (t = H(l), t === null) throw Error(h(188));
            return t !== l ? null : l
        }
        for (var e = l, a = t;;) {
            var u = e.return;
            if (u === null) break;
            var n = u.alternate;
            if (n === null) {
                if (a = u.return, a !== null) {
                    e = a;
                    continue
                }
                break
            }
            if (u.child === n.child) {
                for (n = u.child; n;) {
                    if (n === e) return P(u), l;
                    if (n === a) return P(u), t;
                    n = n.sibling
                }
                throw Error(h(188))
            }
            if (e.return !== a.return) e = u, a = n;
            else {
                for (var i = !1, c = u.child; c;) {
                    if (c === e) {
                        i = !0, e = u, a = n;
                        break
                    }
                    if (c === a) {
                        i = !0, a = u, e = n;
                        break
                    }
                    c = c.sibling
                }
                if (!i) {
                    for (c = n.child; c;) {
                        if (c === e) {
                            i = !0, e = n, a = u;
                            break
                        }
                        if (c === a) {
                            i = !0, a = n, e = u;
                            break
                        }
                        c = c.sibling
                    }
                    if (!i) throw Error(h(189))
                }
            }
            if (e.alternate !== a) throw Error(h(190))
        }
        if (e.tag !== 3) throw Error(h(188));
        return e.stateNode.current === e ? l : t
    }

    function A(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l;
        for (l = l.child; l !== null;) {
            if (t = A(l), t !== null) return t;
            l = l.sibling
        }
        return null
    }
    var M = Object.assign,
        $ = Symbol.for("react.element"),
        K = Symbol.for("react.transitional.element"),
        ul = Symbol.for("react.portal"),
        sl = Symbol.for("react.fragment"),
        rl = Symbol.for("react.strict_mode"),
        J = Symbol.for("react.profiler"),
        hl = Symbol.for("react.provider"),
        W = Symbol.for("react.consumer"),
        k = Symbol.for("react.context"),
        zl = Symbol.for("react.forward_ref"),
        B = Symbol.for("react.suspense"),
        pl = Symbol.for("react.suspense_list"),
        I = Symbol.for("react.memo"),
        Tl = Symbol.for("react.lazy"),
        Ol = Symbol.for("react.activity"),
        Tt = Symbol.for("react.memo_cache_sentinel"),
        xt = Symbol.iterator;

    function Hl(l) {
        return l === null || typeof l != "object" ? null : (l = xt && l[xt] || l["@@iterator"], typeof l == "function" ? l : null)
    }
    var Dt = Symbol.for("react.client.reference");

    function jt(l) {
        if (l == null) return null;
        if (typeof l == "function") return l.$$typeof === Dt ? null : l.displayName || l.name || null;
        if (typeof l == "string") return l;
        switch (l) {
            case sl:
                return "Fragment";
            case J:
                return "Profiler";
            case rl:
                return "StrictMode";
            case B:
                return "Suspense";
            case pl:
                return "SuspenseList";
            case Ol:
                return "Activity"
        }
        if (typeof l == "object") switch (l.$$typeof) {
            case ul:
                return "Portal";
            case k:
                return (l.displayName || "Context") + ".Provider";
            case W:
                return (l._context.displayName || "Context") + ".Consumer";
            case zl:
                var t = l.render;
                return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
            case I:
                return t = l.displayName || null, t !== null ? t : jt(l.type) || "Memo";
            case Tl:
                t = l._payload, l = l._init;
                try {
                    return jt(l(t))
                } catch {}
        }
        return null
    }
    var wl = Array.isArray,
        S = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        j = _.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Q = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        ol = [],
        s = -1;

    function N(l) {
        return {
            current: l
        }
    }

    function b(l) {
        0 > s || (l.current = ol[s], ol[s] = null, s--)
    }

    function z(l, t) {
        s++, ol[s] = l.current, l.current = t
    }
    var D = N(null),
        Z = N(null),
        Y = N(null),
        ql = N(null);

    function fl(l, t) {
        switch (z(Y, t), z(Z, l), z(D, null), t.nodeType) {
            case 9:
            case 11:
                l = (l = t.documentElement) && (l = l.namespaceURI) ? Uo(l) : 0;
                break;
            default:
                if (l = t.tagName, t = t.namespaceURI) t = Uo(t), l = Ho(t, l);
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
        b(D), z(D, l)
    }

    function $l() {
        b(D), b(Z), b(Y)
    }

    function Ce(l) {
        l.memoizedState !== null && z(ql, l);
        var t = D.current,
            e = Ho(t, l.type);
        t !== e && (z(Z, l), z(D, e))
    }

    function ge(l) {
        Z.current === l && (b(D), b(Z)), ql.current === l && (b(ql), yu._currentValue = Q)
    }
    var Be = Object.prototype.hasOwnProperty,
        be = v.unstable_scheduleCallback,
        Qn = v.unstable_cancelCallback,
        Td = v.unstable_shouldYield,
        Ed = v.unstable_requestPaint,
        Et = v.unstable_now,
        Nd = v.unstable_getCurrentPriorityLevel,
        df = v.unstable_ImmediatePriority,
        vf = v.unstable_UserBlockingPriority,
        Tu = v.unstable_NormalPriority,
        zd = v.unstable_LowPriority,
        hf = v.unstable_IdlePriority,
        _d = v.log,
        Md = v.unstable_setDisableYieldValue,
        Ea = null,
        tt = null;

    function Jt(l) {
        if (typeof _d == "function" && Md(l), tt && typeof tt.setStrictMode == "function") try {
            tt.setStrictMode(Ea, l)
        } catch {}
    }
    var et = Math.clz32 ? Math.clz32 : jd,
        Od = Math.log,
        Dd = Math.LN2;

    function jd(l) {
        return l >>>= 0, l === 0 ? 32 : 31 - (Od(l) / Dd | 0) | 0
    }
    var Eu = 256,
        Nu = 4194304;

    function xe(l) {
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

    function zu(l, t, e) {
        var a = l.pendingLanes;
        if (a === 0) return 0;
        var u = 0,
            n = l.suspendedLanes,
            i = l.pingedLanes;
        l = l.warmLanes;
        var c = a & 134217727;
        return c !== 0 ? (a = c & ~n, a !== 0 ? u = xe(a) : (i &= c, i !== 0 ? u = xe(i) : e || (e = c & ~l, e !== 0 && (u = xe(e))))) : (c = a & ~n, c !== 0 ? u = xe(c) : i !== 0 ? u = xe(i) : e || (e = a & ~l, e !== 0 && (u = xe(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u
    }

    function Na(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }

    function Rd(l, t) {
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

    function mf() {
        var l = Eu;
        return Eu <<= 1, (Eu & 4194048) === 0 && (Eu = 256), l
    }

    function yf() {
        var l = Nu;
        return Nu <<= 1, (Nu & 62914560) === 0 && (Nu = 4194304), l
    }

    function Xn(l) {
        for (var t = [], e = 0; 31 > e; e++) t.push(l);
        return t
    }

    function za(l, t) {
        l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
    }

    function Ud(l, t, e, a, u, n) {
        var i = l.pendingLanes;
        l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
        var c = l.entanglements,
            f = l.expirationTimes,
            y = l.hiddenUpdates;
        for (e = i & ~e; 0 < e;) {
            var p = 31 - et(e),
                E = 1 << p;
            c[p] = 0, f[p] = -1;
            var g = y[p];
            if (g !== null)
                for (y[p] = null, p = 0; p < g.length; p++) {
                    var x = g[p];
                    x !== null && (x.lane &= -536870913)
                }
            e &= ~E
        }
        a !== 0 && gf(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t))
    }

    function gf(l, t, e) {
        l.pendingLanes |= t, l.suspendedLanes &= ~t;
        var a = 31 - et(t);
        l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 4194090
    }

    function bf(l, t) {
        var e = l.entangledLanes |= t;
        for (l = l.entanglements; e;) {
            var a = 31 - et(e),
                u = 1 << a;
            u & t | l[a] & t && (l[a] |= t), e &= ~u
        }
    }

    function Zn(l) {
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

    function Ln(l) {
        return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function xf() {
        var l = j.p;
        return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Io(l.type))
    }

    function Hd(l, t) {
        var e = j.p;
        try {
            return j.p = l, t()
        } finally {
            j.p = e
        }
    }
    var kt = Math.random().toString(36).slice(2),
        Ll = "__reactFiber$" + kt,
        Wl = "__reactProps$" + kt,
        Ye = "__reactContainer$" + kt,
        Vn = "__reactEvents$" + kt,
        wd = "__reactListeners$" + kt,
        qd = "__reactHandles$" + kt,
        Sf = "__reactResources$" + kt,
        _a = "__reactMarker$" + kt;

    function Kn(l) {
        delete l[Ll], delete l[Wl], delete l[Vn], delete l[wd], delete l[qd]
    }

    function Ge(l) {
        var t = l[Ll];
        if (t) return t;
        for (var e = l.parentNode; e;) {
            if (t = e[Ye] || e[Ll]) {
                if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
                    for (l = Bo(l); l !== null;) {
                        if (e = l[Ll]) return e;
                        l = Bo(l)
                    }
                return t
            }
            l = e, e = l.parentNode
        }
        return null
    }

    function Qe(l) {
        if (l = l[Ll] || l[Ye]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return l
        }
        return null
    }

    function Ma(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
        throw Error(h(33))
    }

    function Xe(l) {
        var t = l[Sf];
        return t || (t = l[Sf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function Cl(l) {
        l[_a] = !0
    }
    var pf = new Set,
        Af = {};

    function Se(l, t) {
        Ze(l, t), Ze(l + "Capture", t)
    }

    function Ze(l, t) {
        for (Af[l] = t, l = 0; l < t.length; l++) pf.add(t[l])
    }
    var Cd = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Tf = {},
        Ef = {};

    function Bd(l) {
        return Be.call(Ef, l) ? !0 : Be.call(Tf, l) ? !1 : Cd.test(l) ? Ef[l] = !0 : (Tf[l] = !0, !1)
    }

    function _u(l, t, e) {
        if (Bd(t))
            if (e === null) l.removeAttribute(t);
            else {
                switch (typeof e) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        l.removeAttribute(t);
                        return;
                    case "boolean":
                        var a = t.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            l.removeAttribute(t);
                            return
                        }
                }
                l.setAttribute(t, "" + e)
            }
    }

    function Mu(l, t, e) {
        if (e === null) l.removeAttribute(t);
        else {
            switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    l.removeAttribute(t);
                    return
            }
            l.setAttribute(t, "" + e)
        }
    }

    function Rt(l, t, e, a) {
        if (a === null) l.removeAttribute(e);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    l.removeAttribute(e);
                    return
            }
            l.setAttributeNS(t, e, "" + a)
        }
    }
    var Jn, Nf;

    function Le(l) {
        if (Jn === void 0) try {
            throw Error()
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            Jn = t && t[1] || "", Nf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Jn + l + Nf
    }
    var kn = !1;

    function $n(l, t) {
        if (!l || kn) return "";
        kn = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var E = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(E.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(E, [])
                                } catch (x) {
                                    var g = x
                                }
                                Reflect.construct(l, [], E)
                            } else {
                                try {
                                    E.call()
                                } catch (x) {
                                    g = x
                                }
                                l.call(E.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (x) {
                                g = x
                            }(E = l()) && typeof E.catch == "function" && E.catch(function() {})
                        }
                    } catch (x) {
                        if (x && g && typeof x.stack == "string") return [x.stack, g.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = a.DetermineComponentFrameRoot(),
                i = n[0],
                c = n[1];
            if (i && c) {
                var f = i.split(`
`),
                    y = c.split(`
`);
                for (u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot");) a++;
                for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot");) u++;
                if (a === f.length || u === y.length)
                    for (a = f.length - 1, u = y.length - 1; 1 <= a && 0 <= u && f[a] !== y[u];) u--;
                for (; 1 <= a && 0 <= u; a--, u--)
                    if (f[a] !== y[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--, u--, 0 > u || f[a] !== y[u]) {
                                    var p = `
` + f[a].replace(" at new ", " at ");
                                    return l.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", l.displayName)), p
                                } while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            kn = !1, Error.prepareStackTrace = e
        }
        return (e = l ? l.displayName || l.name : "") ? Le(e) : ""
    }

    function Yd(l) {
        switch (l.tag) {
            case 26:
            case 27:
            case 5:
                return Le(l.type);
            case 16:
                return Le("Lazy");
            case 13:
                return Le("Suspense");
            case 19:
                return Le("SuspenseList");
            case 0:
            case 15:
                return $n(l.type, !1);
            case 11:
                return $n(l.type.render, !1);
            case 1:
                return $n(l.type, !0);
            case 31:
                return Le("Activity");
            default:
                return ""
        }
    }

    function zf(l) {
        try {
            var t = "";
            do t += Yd(l), l = l.return; while (l);
            return t
        } catch (e) {
            return `
Error generating stack: ` + e.message + `
` + e.stack
        }
    }

    function rt(l) {
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

    function _f(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function Gd(l) {
        var t = _f(l) ? "checked" : "value",
            e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
            a = "" + l[t];
        if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
            var u = e.get,
                n = e.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(i) {
                    a = "" + i, n.call(this, i)
                }
            }), Object.defineProperty(l, t, {
                enumerable: e.enumerable
            }), {
                getValue: function() {
                    return a
                },
                setValue: function(i) {
                    a = "" + i
                },
                stopTracking: function() {
                    l._valueTracker = null, delete l[t]
                }
            }
        }
    }

    function Ou(l) {
        l._valueTracker || (l._valueTracker = Gd(l))
    }

    function Mf(l) {
        if (!l) return !1;
        var t = l._valueTracker;
        if (!t) return !0;
        var e = t.getValue(),
            a = "";
        return l && (a = _f(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1
    }

    function Du(l) {
        if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var Qd = /[\n"\\]/g;

    function ot(l) {
        return l.replace(Qd, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function Wn(l, t, e, a, u, n, i, c) {
        l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + rt(t)) : l.value !== "" + rt(t) && (l.value = "" + rt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? Fn(l, i, rt(t)) : e != null ? Fn(l, i, rt(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + rt(c) : l.removeAttribute("name")
    }

    function Of(l, t, e, a, u, n, i, c) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) return;
            e = e != null ? "" + rt(e) : "", t = t != null ? "" + rt(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t
        }
        a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i)
    }

    function Fn(l, t, e) {
        t === "number" && Du(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
    }

    function Ve(l, t, e, a) {
        if (l = l.options, t) {
            t = {};
            for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
            for (e = 0; e < l.length; e++) u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0)
        } else {
            for (e = "" + rt(e), t = null, u = 0; u < l.length; u++) {
                if (l[u].value === e) {
                    l[u].selected = !0, a && (l[u].defaultSelected = !0);
                    return
                }
                t !== null || l[u].disabled || (t = l[u])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Df(l, t, e) {
        if (t != null && (t = "" + rt(t), t !== l.value && (l.value = t), e == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = e != null ? "" + rt(e) : ""
    }

    function jf(l, t, e, a) {
        if (t == null) {
            if (a != null) {
                if (e != null) throw Error(h(92));
                if (wl(a)) {
                    if (1 < a.length) throw Error(h(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""), t = e
        }
        e = rt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a)
    }

    function Ke(l, t) {
        if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
                e.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var Xd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Rf(l, t, e) {
        var a = t.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Xd.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
    }

    function Uf(l, t, e) {
        if (t != null && typeof t != "object") throw Error(h(62));
        if (l = l.style, e != null) {
            for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
            for (var u in t) a = t[u], t.hasOwnProperty(u) && e[u] !== a && Rf(l, u, a)
        } else
            for (var n in t) t.hasOwnProperty(n) && Rf(l, n, t[n])
    }

    function Pn(l) {
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
    var Zd = new Map([
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
        Ld = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function ju(l) {
        return Ld.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    var In = null;

    function li(l) {
        return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
    }
    var Je = null,
        ke = null;

    function Hf(l) {
        var t = Qe(l);
        if (t && (l = t.stateNode)) {
            var e = l[Wl] || null;
            l: switch (l = t.stateNode, t.type) {
                case "input":
                    if (Wn(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
                        for (e = l; e.parentNode;) e = e.parentNode;
                        for (e = e.querySelectorAll('input[name="' + ot("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
                            var a = e[t];
                            if (a !== l && a.form === l.form) {
                                var u = a[Wl] || null;
                                if (!u) throw Error(h(90));
                                Wn(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                            }
                        }
                        for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && Mf(a)
                    }
                    break l;
                case "textarea":
                    Df(l, e.value, e.defaultValue);
                    break l;
                case "select":
                    t = e.value, t != null && Ve(l, !!e.multiple, t, !1)
            }
        }
    }
    var ti = !1;

    function wf(l, t, e) {
        if (ti) return l(t, e);
        ti = !0;
        try {
            var a = l(t);
            return a
        } finally {
            if (ti = !1, (Je !== null || ke !== null) && (gn(), Je && (t = Je, l = ke, ke = Je = null, Hf(t), l)))
                for (t = 0; t < l.length; t++) Hf(l[t])
        }
    }

    function Oa(l, t) {
        var e = l.stateNode;
        if (e === null) return null;
        var a = e[Wl] || null;
        if (a === null) return null;
        e = a[t];
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
                (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
                break l;
            default:
                l = !1
        }
        if (l) return null;
        if (e && typeof e != "function") throw Error(h(231, t, typeof e));
        return e
    }
    var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        ei = !1;
    if (Ut) try {
        var Da = {};
        Object.defineProperty(Da, "passive", {
            get: function() {
                ei = !0
            }
        }), window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da)
    } catch {
        ei = !1
    }
    var $t = null,
        ai = null,
        Ru = null;

    function qf() {
        if (Ru) return Ru;
        var l, t = ai,
            e = t.length,
            a, u = "value" in $t ? $t.value : $t.textContent,
            n = u.length;
        for (l = 0; l < e && t[l] === u[l]; l++);
        var i = e - l;
        for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
        return Ru = u.slice(l, 1 < a ? 1 - a : void 0)
    }

    function Uu(l) {
        var t = l.keyCode;
        return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
    }

    function Hu() {
        return !0
    }

    function Cf() {
        return !1
    }

    function Fl(l) {
        function t(e, a, u, n, i) {
            this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
            for (var c in l) l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(n) : n[c]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Hu : Cf, this.isPropagationStopped = Cf, this
        }
        return M(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Hu)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Hu)
            },
            persist: function() {},
            isPersistent: Hu
        }), t
    }
    var pe = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(l) {
                return l.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        wu = Fl(pe),
        ja = M({}, pe, {
            view: 0,
            detail: 0
        }),
        Vd = Fl(ja),
        ui, ni, Ra, qu = M({}, ja, {
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
            getModifierState: ci,
            button: 0,
            buttons: 0,
            relatedTarget: function(l) {
                return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
            },
            movementX: function(l) {
                return "movementX" in l ? l.movementX : (l !== Ra && (Ra && l.type === "mousemove" ? (ui = l.screenX - Ra.screenX, ni = l.screenY - Ra.screenY) : ni = ui = 0, Ra = l), ui)
            },
            movementY: function(l) {
                return "movementY" in l ? l.movementY : ni
            }
        }),
        Bf = Fl(qu),
        Kd = M({}, qu, {
            dataTransfer: 0
        }),
        Jd = Fl(Kd),
        kd = M({}, ja, {
            relatedTarget: 0
        }),
        ii = Fl(kd),
        $d = M({}, pe, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Wd = Fl($d),
        Fd = M({}, pe, {
            clipboardData: function(l) {
                return "clipboardData" in l ? l.clipboardData : window.clipboardData
            }
        }),
        Pd = Fl(Fd),
        Id = M({}, pe, {
            data: 0
        }),
        Yf = Fl(Id),
        l0 = {
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
        t0 = {
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
        e0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function a0(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = e0[l]) ? !!t[l] : !1
    }

    function ci() {
        return a0
    }
    var u0 = M({}, ja, {
            key: function(l) {
                if (l.key) {
                    var t = l0[l.key] || l.key;
                    if (t !== "Unidentified") return t
                }
                return l.type === "keypress" ? (l = Uu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? t0[l.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ci,
            charCode: function(l) {
                return l.type === "keypress" ? Uu(l) : 0
            },
            keyCode: function(l) {
                return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            },
            which: function(l) {
                return l.type === "keypress" ? Uu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            }
        }),
        n0 = Fl(u0),
        i0 = M({}, qu, {
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
        Gf = Fl(i0),
        c0 = M({}, ja, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ci
        }),
        f0 = Fl(c0),
        s0 = M({}, pe, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        r0 = Fl(s0),
        o0 = M({}, qu, {
            deltaX: function(l) {
                return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
            },
            deltaY: function(l) {
                return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        d0 = Fl(o0),
        v0 = M({}, pe, {
            newState: 0,
            oldState: 0
        }),
        h0 = Fl(v0),
        m0 = [9, 13, 27, 32],
        fi = Ut && "CompositionEvent" in window,
        Ua = null;
    Ut && "documentMode" in document && (Ua = document.documentMode);
    var y0 = Ut && "TextEvent" in window && !Ua,
        Qf = Ut && (!fi || Ua && 8 < Ua && 11 >= Ua),
        Xf = " ",
        Zf = !1;

    function Lf(l, t) {
        switch (l) {
            case "keyup":
                return m0.indexOf(t.keyCode) !== -1;
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

    function Vf(l) {
        return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
    }
    var $e = !1;

    function g0(l, t) {
        switch (l) {
            case "compositionend":
                return Vf(t);
            case "keypress":
                return t.which !== 32 ? null : (Zf = !0, Xf);
            case "textInput":
                return l = t.data, l === Xf && Zf ? null : l;
            default:
                return null
        }
    }

    function b0(l, t) {
        if ($e) return l === "compositionend" || !fi && Lf(l, t) ? (l = qf(), Ru = ai = $t = null, $e = !1, l) : null;
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
                return Qf && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var x0 = {
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

    function Kf(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!x0[l.type] : t === "textarea"
    }

    function Jf(l, t, e, a) {
        Je ? ke ? ke.push(a) : ke = [a] : Je = a, t = Tn(t, "onChange"), 0 < t.length && (e = new wu("onChange", "change", null, e, a), l.push({
            event: e,
            listeners: t
        }))
    }
    var Ha = null,
        wa = null;

    function S0(l) {
        Mo(l, 0)
    }

    function Cu(l) {
        var t = Ma(l);
        if (Mf(t)) return l
    }

    function kf(l, t) {
        if (l === "change") return t
    }
    var $f = !1;
    if (Ut) {
        var si;
        if (Ut) {
            var ri = "oninput" in document;
            if (!ri) {
                var Wf = document.createElement("div");
                Wf.setAttribute("oninput", "return;"), ri = typeof Wf.oninput == "function"
            }
            si = ri
        } else si = !1;
        $f = si && (!document.documentMode || 9 < document.documentMode)
    }

    function Ff() {
        Ha && (Ha.detachEvent("onpropertychange", Pf), wa = Ha = null)
    }

    function Pf(l) {
        if (l.propertyName === "value" && Cu(wa)) {
            var t = [];
            Jf(t, wa, l, li(l)), wf(S0, t)
        }
    }

    function p0(l, t, e) {
        l === "focusin" ? (Ff(), Ha = t, wa = e, Ha.attachEvent("onpropertychange", Pf)) : l === "focusout" && Ff()
    }

    function A0(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown") return Cu(wa)
    }

    function T0(l, t) {
        if (l === "click") return Cu(t)
    }

    function E0(l, t) {
        if (l === "input" || l === "change") return Cu(t)
    }

    function N0(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var at = typeof Object.is == "function" ? Object.is : N0;

    function qa(l, t) {
        if (at(l, t)) return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
        var e = Object.keys(l),
            a = Object.keys(t);
        if (e.length !== a.length) return !1;
        for (a = 0; a < e.length; a++) {
            var u = e[a];
            if (!Be.call(t, u) || !at(l[u], t[u])) return !1
        }
        return !0
    }

    function If(l) {
        for (; l && l.firstChild;) l = l.firstChild;
        return l
    }

    function ls(l, t) {
        var e = If(l);
        l = 0;
        for (var a; e;) {
            if (e.nodeType === 3) {
                if (a = l + e.textContent.length, l <= t && a >= t) return {
                    node: e,
                    offset: t - l
                };
                l = a
            }
            l: {
                for (; e;) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break l
                    }
                    e = e.parentNode
                }
                e = void 0
            }
            e = If(e)
        }
    }

    function ts(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ts(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function es(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = Du(l.document); t instanceof l.HTMLIFrameElement;) {
            try {
                var e = typeof t.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e) l = t.contentWindow;
            else break;
            t = Du(l.document)
        }
        return t
    }

    function oi(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var z0 = Ut && "documentMode" in document && 11 >= document.documentMode,
        We = null,
        di = null,
        Ca = null,
        vi = !1;

    function as(l, t, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        vi || We == null || We !== Du(a) || (a = We, "selectionStart" in a && oi(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), Ca && qa(Ca, a) || (Ca = a, a = Tn(di, "onSelect"), 0 < a.length && (t = new wu("onSelect", "select", null, t, e), l.push({
            event: t,
            listeners: a
        }), t.target = We)))
    }

    function Ae(l, t) {
        var e = {};
        return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e
    }
    var Fe = {
            animationend: Ae("Animation", "AnimationEnd"),
            animationiteration: Ae("Animation", "AnimationIteration"),
            animationstart: Ae("Animation", "AnimationStart"),
            transitionrun: Ae("Transition", "TransitionRun"),
            transitionstart: Ae("Transition", "TransitionStart"),
            transitioncancel: Ae("Transition", "TransitionCancel"),
            transitionend: Ae("Transition", "TransitionEnd")
        },
        hi = {},
        us = {};
    Ut && (us = document.createElement("div").style, "AnimationEvent" in window || (delete Fe.animationend.animation, delete Fe.animationiteration.animation, delete Fe.animationstart.animation), "TransitionEvent" in window || delete Fe.transitionend.transition);

    function Te(l) {
        if (hi[l]) return hi[l];
        if (!Fe[l]) return l;
        var t = Fe[l],
            e;
        for (e in t)
            if (t.hasOwnProperty(e) && e in us) return hi[l] = t[e];
        return l
    }
    var ns = Te("animationend"),
        is = Te("animationiteration"),
        cs = Te("animationstart"),
        _0 = Te("transitionrun"),
        M0 = Te("transitionstart"),
        O0 = Te("transitioncancel"),
        fs = Te("transitionend"),
        ss = new Map,
        mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    mi.push("scrollEnd");

    function St(l, t) {
        ss.set(l, t), Se(t, [l])
    }
    var rs = new WeakMap;

    function dt(l, t) {
        if (typeof l == "object" && l !== null) {
            var e = rs.get(l);
            return e !== void 0 ? e : (t = {
                value: l,
                source: t,
                stack: zf(t)
            }, rs.set(l, t), t)
        }
        return {
            value: l,
            source: t,
            stack: zf(t)
        }
    }
    var vt = [],
        Pe = 0,
        yi = 0;

    function Bu() {
        for (var l = Pe, t = yi = Pe = 0; t < l;) {
            var e = vt[t];
            vt[t++] = null;
            var a = vt[t];
            vt[t++] = null;
            var u = vt[t];
            vt[t++] = null;
            var n = vt[t];
            if (vt[t++] = null, a !== null && u !== null) {
                var i = a.pending;
                i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u
            }
            n !== 0 && os(e, u, n)
        }
    }

    function Yu(l, t, e, a) {
        vt[Pe++] = l, vt[Pe++] = t, vt[Pe++] = e, vt[Pe++] = a, yi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a)
    }

    function gi(l, t, e, a) {
        return Yu(l, t, e, a), Gu(l)
    }

    function Ie(l, t) {
        return Yu(l, null, null, t), Gu(l)
    }

    function os(l, t, e) {
        l.lanes |= e;
        var a = l.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = l.return; n !== null;) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
        return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - et(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null
    }

    function Gu(l) {
        if (50 < fu) throw fu = 0, Tc = null, Error(h(185));
        for (var t = l.return; t !== null;) l = t, t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var la = {};

    function D0(l, t, e, a) {
        this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function ut(l, t, e, a) {
        return new D0(l, t, e, a)
    }

    function bi(l) {
        return l = l.prototype, !(!l || !l.isReactComponent)
    }

    function Ht(l, t) {
        var e = l.alternate;
        return e === null ? (e = ut(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e
    }

    function ds(l, t) {
        l.flags &= 65011714;
        var e = l.alternate;
        return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), l
    }

    function Qu(l, t, e, a, u, n) {
        var i = 0;
        if (a = l, typeof l == "function") bi(l) && (i = 1);
        else if (typeof l == "string") i = Rv(l, e, D.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else l: switch (l) {
            case Ol:
                return l = ut(31, e, t, u), l.elementType = Ol, l.lanes = n, l;
            case sl:
                return Ee(e.children, u, n, t);
            case rl:
                i = 8, u |= 24;
                break;
            case J:
                return l = ut(12, e, t, u | 2), l.elementType = J, l.lanes = n, l;
            case B:
                return l = ut(13, e, t, u), l.elementType = B, l.lanes = n, l;
            case pl:
                return l = ut(19, e, t, u), l.elementType = pl, l.lanes = n, l;
            default:
                if (typeof l == "object" && l !== null) switch (l.$$typeof) {
                    case hl:
                    case k:
                        i = 10;
                        break l;
                    case W:
                        i = 9;
                        break l;
                    case zl:
                        i = 11;
                        break l;
                    case I:
                        i = 14;
                        break l;
                    case Tl:
                        i = 16, a = null;
                        break l
                }
                i = 29, e = Error(h(130, l === null ? "null" : typeof l, "")), a = null
        }
        return t = ut(i, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t
    }

    function Ee(l, t, e, a) {
        return l = ut(7, l, a, t), l.lanes = e, l
    }

    function xi(l, t, e) {
        return l = ut(6, l, null, t), l.lanes = e, l
    }

    function Si(l, t, e) {
        return t = ut(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        }, t
    }
    var ta = [],
        ea = 0,
        Xu = null,
        Zu = 0,
        ht = [],
        mt = 0,
        Ne = null,
        wt = 1,
        qt = "";

    function ze(l, t) {
        ta[ea++] = Zu, ta[ea++] = Xu, Xu = l, Zu = t
    }

    function vs(l, t, e) {
        ht[mt++] = wt, ht[mt++] = qt, ht[mt++] = Ne, Ne = l;
        var a = wt;
        l = qt;
        var u = 32 - et(a) - 1;
        a &= ~(1 << u), e += 1;
        var n = 32 - et(t) + u;
        if (30 < n) {
            var i = u - u % 5;
            n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, wt = 1 << 32 - et(t) + u | e << u | a, qt = n + l
        } else wt = 1 << n | e << u | a, qt = l
    }

    function pi(l) {
        l.return !== null && (ze(l, 1), vs(l, 1, 0))
    }

    function Ai(l) {
        for (; l === Xu;) Xu = ta[--ea], ta[ea] = null, Zu = ta[--ea], ta[ea] = null;
        for (; l === Ne;) Ne = ht[--mt], ht[mt] = null, qt = ht[--mt], ht[mt] = null, wt = ht[--mt], ht[mt] = null
    }
    var Jl = null,
        El = null,
        cl = !1,
        _e = null,
        Nt = !1,
        Ti = Error(h(519));

    function Me(l) {
        var t = Error(h(418, ""));
        throw Ga(dt(t, l)), Ti
    }

    function hs(l) {
        var t = l.stateNode,
            e = l.type,
            a = l.memoizedProps;
        switch (t[Ll] = l, t[Wl] = a, e) {
            case "dialog":
                al("cancel", t), al("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                al("load", t);
                break;
            case "video":
            case "audio":
                for (e = 0; e < ru.length; e++) al(ru[e], t);
                break;
            case "source":
                al("error", t);
                break;
            case "img":
            case "image":
            case "link":
                al("error", t), al("load", t);
                break;
            case "details":
                al("toggle", t);
                break;
            case "input":
                al("invalid", t), Of(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Ou(t);
                break;
            case "select":
                al("invalid", t);
                break;
            case "textarea":
                al("invalid", t), jf(t, a.value, a.defaultValue, a.children), Ou(t)
        }
        e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Ro(t.textContent, e) ? (a.popover != null && (al("beforetoggle", t), al("toggle", t)), a.onScroll != null && al("scroll", t), a.onScrollEnd != null && al("scrollend", t), a.onClick != null && (t.onclick = En), t = !0) : t = !1, t || Me(l)
    }

    function ms(l) {
        for (Jl = l.return; Jl;) switch (Jl.tag) {
            case 5:
            case 13:
                Nt = !1;
                return;
            case 27:
            case 3:
                Nt = !0;
                return;
            default:
                Jl = Jl.return
        }
    }

    function Ba(l) {
        if (l !== Jl) return !1;
        if (!cl) return ms(l), cl = !0, !1;
        var t = l.tag,
            e;
        if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Yc(l.type, l.memoizedProps)), e = !e), e && El && Me(l), ms(l), t === 13) {
            if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
            l: {
                for (l = l.nextSibling, t = 0; l;) {
                    if (l.nodeType === 8)
                        if (e = l.data, e === "/$") {
                            if (t === 0) {
                                El = At(l.nextSibling);
                                break l
                            }
                            t--
                        } else e !== "$" && e !== "$!" && e !== "$?" || t++;
                    l = l.nextSibling
                }
                El = null
            }
        } else t === 27 ? (t = El, oe(l.type) ? (l = Zc, Zc = null, El = l) : El = t) : El = Jl ? At(l.stateNode.nextSibling) : null;
        return !0
    }

    function Ya() {
        El = Jl = null, cl = !1
    }

    function ys() {
        var l = _e;
        return l !== null && (lt === null ? lt = l : lt.push.apply(lt, l), _e = null), l
    }

    function Ga(l) {
        _e === null ? _e = [l] : _e.push(l)
    }
    var Ei = N(null),
        Oe = null,
        Ct = null;

    function Wt(l, t, e) {
        z(Ei, t._currentValue), t._currentValue = e
    }

    function Bt(l) {
        l._currentValue = Ei.current, b(Ei)
    }

    function Ni(l, t, e) {
        for (; l !== null;) {
            var a = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
            l = l.return
        }
    }

    function zi(l, t, e, a) {
        var u = l.child;
        for (u !== null && (u.return = l); u !== null;) {
            var n = u.dependencies;
            if (n !== null) {
                var i = u.child;
                n = n.firstContext;
                l: for (; n !== null;) {
                    var c = n;
                    n = u;
                    for (var f = 0; f < t.length; f++)
                        if (c.context === t[f]) {
                            n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), Ni(n.return, e, l), a || (i = null);
                            break l
                        } n = c.next
                }
            } else if (u.tag === 18) {
                if (i = u.return, i === null) throw Error(h(341));
                i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Ni(i, e, l), i = null
            } else i = u.child;
            if (i !== null) i.return = u;
            else
                for (i = u; i !== null;) {
                    if (i === l) {
                        i = null;
                        break
                    }
                    if (u = i.sibling, u !== null) {
                        u.return = i.return, i = u;
                        break
                    }
                    i = i.return
                }
            u = i
        }
    }

    function Qa(l, t, e, a) {
        l = null;
        for (var u = t, n = !1; u !== null;) {
            if (!n) {
                if ((u.flags & 524288) !== 0) n = !0;
                else if ((u.flags & 262144) !== 0) break
            }
            if (u.tag === 10) {
                var i = u.alternate;
                if (i === null) throw Error(h(387));
                if (i = i.memoizedProps, i !== null) {
                    var c = u.type;
                    at(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c])
                }
            } else if (u === ql.current) {
                if (i = u.alternate, i === null) throw Error(h(387));
                i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(yu) : l = [yu])
            }
            u = u.return
        }
        l !== null && zi(t, l, e, a), t.flags |= 262144
    }

    function Lu(l) {
        for (l = l.firstContext; l !== null;) {
            if (!at(l.context._currentValue, l.memoizedValue)) return !0;
            l = l.next
        }
        return !1
    }

    function De(l) {
        Oe = l, Ct = null, l = l.dependencies, l !== null && (l.firstContext = null)
    }

    function Vl(l) {
        return gs(Oe, l)
    }

    function Vu(l, t) {
        return Oe === null && De(l), gs(l, t)
    }

    function gs(l, t) {
        var e = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: e,
                next: null
            }, Ct === null) {
            if (l === null) throw Error(h(308));
            Ct = t, l.dependencies = {
                lanes: 0,
                firstContext: t
            }, l.flags |= 524288
        } else Ct = Ct.next = t;
        return e
    }
    var j0 = typeof AbortController < "u" ? AbortController : function() {
            var l = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(e, a) {
                        l.push(a)
                    }
                };
            this.abort = function() {
                t.aborted = !0, l.forEach(function(e) {
                    return e()
                })
            }
        },
        R0 = v.unstable_scheduleCallback,
        U0 = v.unstable_NormalPriority,
        Rl = {
            $$typeof: k,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function _i() {
        return {
            controller: new j0,
            data: new Map,
            refCount: 0
        }
    }

    function Xa(l) {
        l.refCount--, l.refCount === 0 && R0(U0, function() {
            l.controller.abort()
        })
    }
    var Za = null,
        Mi = 0,
        aa = 0,
        ua = null;

    function H0(l, t) {
        if (Za === null) {
            var e = Za = [];
            Mi = 0, aa = Dc(), ua = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    e.push(a)
                }
            }
        }
        return Mi++, t.then(bs, bs), t
    }

    function bs() {
        if (--Mi === 0 && Za !== null) {
            ua !== null && (ua.status = "fulfilled");
            var l = Za;
            Za = null, aa = 0, ua = null;
            for (var t = 0; t < l.length; t++)(0, l[t])()
        }
    }

    function w0(l, t) {
        var e = [],
            a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    e.push(u)
                }
            };
        return l.then(function() {
            a.status = "fulfilled", a.value = t;
            for (var u = 0; u < e.length; u++)(0, e[u])(t)
        }, function(u) {
            for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)(0, e[u])(void 0)
        }), a
    }
    var xs = S.S;
    S.S = function(l, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && H0(l, t), xs !== null && xs(l, t)
    };
    var je = N(null);

    function Oi() {
        var l = je.current;
        return l !== null ? l : xl.pooledCache
    }

    function Ku(l, t) {
        t === null ? z(je, je.current) : z(je, t.pool)
    }

    function Ss() {
        var l = Oi();
        return l === null ? null : {
            parent: Rl._currentValue,
            pool: l
        }
    }
    var La = Error(h(460)),
        ps = Error(h(474)),
        Ju = Error(h(542)),
        Di = {
            then: function() {}
        };

    function As(l) {
        return l = l.status, l === "fulfilled" || l === "rejected"
    }

    function ku() {}

    function Ts(l, t, e) {
        switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(ku, ku), t = e), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason, Ns(l), l;
            default:
                if (typeof t.status == "string") t.then(ku, ku);
                else {
                    if (l = xl, l !== null && 100 < l.shellSuspendCounter) throw Error(h(482));
                    l = t, l.status = "pending", l.then(function(a) {
                        if (t.status === "pending") {
                            var u = t;
                            u.status = "fulfilled", u.value = a
                        }
                    }, function(a) {
                        if (t.status === "pending") {
                            var u = t;
                            u.status = "rejected", u.reason = a
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw l = t.reason, Ns(l), l
                }
                throw Va = t, La
        }
    }
    var Va = null;

    function Es() {
        if (Va === null) throw Error(h(459));
        var l = Va;
        return Va = null, l
    }

    function Ns(l) {
        if (l === La || l === Ju) throw Error(h(483))
    }
    var Ft = !1;

    function ji(l) {
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

    function Ri(l, t) {
        l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }

    function Pt(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function It(l, t, e) {
        var a = l.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (dl & 2) !== 0) {
            var u = a.pending;
            return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Gu(l), os(l, null, e), t
        }
        return Yu(l, a, t, e), Gu(l)
    }

    function Ka(l, t, e) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
            var a = t.lanes;
            a &= l.pendingLanes, e |= a, t.lanes = e, bf(l, e)
        }
    }

    function Ui(l, t) {
        var e = l.updateQueue,
            a = l.alternate;
        if (a !== null && (a = a.updateQueue, e === a)) {
            var u = null,
                n = null;
            if (e = e.firstBaseUpdate, e !== null) {
                do {
                    var i = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? u = n = i : n = n.next = i, e = e.next
                } while (e !== null);
                n === null ? u = n = t : n = n.next = t
            } else u = n = t;
            e = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: n,
                shared: a.shared,
                callbacks: a.callbacks
            }, l.updateQueue = e;
            return
        }
        l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t
    }
    var Hi = !1;

    function Ja() {
        if (Hi) {
            var l = ua;
            if (l !== null) throw l
        }
    }

    function ka(l, t, e, a) {
        Hi = !1;
        var u = l.updateQueue;
        Ft = !1;
        var n = u.firstBaseUpdate,
            i = u.lastBaseUpdate,
            c = u.shared.pending;
        if (c !== null) {
            u.shared.pending = null;
            var f = c,
                y = f.next;
            f.next = null, i === null ? n = y : i.next = y, i = f;
            var p = l.alternate;
            p !== null && (p = p.updateQueue, c = p.lastBaseUpdate, c !== i && (c === null ? p.firstBaseUpdate = y : c.next = y, p.lastBaseUpdate = f))
        }
        if (n !== null) {
            var E = u.baseState;
            i = 0, p = y = f = null, c = n;
            do {
                var g = c.lane & -536870913,
                    x = g !== c.lane;
                if (x ? (nl & g) === g : (a & g) === g) {
                    g !== 0 && g === aa && (Hi = !0), p !== null && (p = p.next = {
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var V = l,
                            X = c;g = t;
                        var gl = e;
                        switch (X.tag) {
                            case 1:
                                if (V = X.payload, typeof V == "function") {
                                    E = V.call(gl, E, g);
                                    break l
                                }
                                E = V;
                                break l;
                            case 3:
                                V.flags = V.flags & -65537 | 128;
                            case 0:
                                if (V = X.payload, g = typeof V == "function" ? V.call(gl, E, g) : V, g == null) break l;
                                E = M({}, E, g);
                                break l;
                            case 2:
                                Ft = !0
                        }
                    }
                    g = c.callback, g !== null && (l.flags |= 64, x && (l.flags |= 8192), x = u.callbacks, x === null ? u.callbacks = [g] : x.push(g))
                } else x = {
                    lane: g,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                }, p === null ? (y = p = x, f = E) : p = p.next = x, i |= g;
                if (c = c.next, c === null) {
                    if (c = u.shared.pending, c === null) break;
                    x = c, c = x.next, x.next = null, u.lastBaseUpdate = x, u.shared.pending = null
                }
            } while (!0);
            p === null && (f = E), u.baseState = f, u.firstBaseUpdate = y, u.lastBaseUpdate = p, n === null && (u.shared.lanes = 0), ce |= i, l.lanes = i, l.memoizedState = E
        }
    }

    function zs(l, t) {
        if (typeof l != "function") throw Error(h(191, l));
        l.call(t)
    }

    function _s(l, t) {
        var e = l.callbacks;
        if (e !== null)
            for (l.callbacks = null, l = 0; l < e.length; l++) zs(e[l], t)
    }
    var na = N(null),
        $u = N(0);

    function Ms(l, t) {
        l = Vt, z($u, l), z(na, t), Vt = l | t.baseLanes
    }

    function wi() {
        z($u, Vt), z(na, na.current)
    }

    function qi() {
        Vt = $u.current, b(na), b($u)
    }
    var le = 0,
        ll = null,
        ml = null,
        Dl = null,
        Wu = !1,
        ia = !1,
        Re = !1,
        Fu = 0,
        $a = 0,
        ca = null,
        q0 = 0;

    function _l() {
        throw Error(h(321))
    }

    function Ci(l, t) {
        if (t === null) return !1;
        for (var e = 0; e < t.length && e < l.length; e++)
            if (!at(l[e], t[e])) return !1;
        return !0
    }

    function Bi(l, t, e, a, u, n) {
        return le = n, ll = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? or : dr, Re = !1, n = e(a, u), Re = !1, ia && (n = Ds(t, e, a, u)), Os(l), n
    }

    function Os(l) {
        S.H = an;
        var t = ml !== null && ml.next !== null;
        if (le = 0, Dl = ml = ll = null, Wu = !1, $a = 0, ca = null, t) throw Error(h(300));
        l === null || Bl || (l = l.dependencies, l !== null && Lu(l) && (Bl = !0))
    }

    function Ds(l, t, e, a) {
        ll = l;
        var u = 0;
        do {
            if (ia && (ca = null), $a = 0, ia = !1, 25 <= u) throw Error(h(301));
            if (u += 1, Dl = ml = null, l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0)
            }
            S.H = Z0, n = t(e, a)
        } while (ia);
        return n
    }

    function C0() {
        var l = S.H,
            t = l.useState()[0];
        return t = typeof t.then == "function" ? Wa(t) : t, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && (ll.flags |= 1024), t
    }

    function Yi() {
        var l = Fu !== 0;
        return Fu = 0, l
    }

    function Gi(l, t, e) {
        t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e
    }

    function Qi(l) {
        if (Wu) {
            for (l = l.memoizedState; l !== null;) {
                var t = l.queue;
                t !== null && (t.pending = null), l = l.next
            }
            Wu = !1
        }
        le = 0, Dl = ml = ll = null, ia = !1, $a = Fu = 0, ca = null
    }

    function Pl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Dl === null ? ll.memoizedState = Dl = l : Dl = Dl.next = l, Dl
    }

    function jl() {
        if (ml === null) {
            var l = ll.alternate;
            l = l !== null ? l.memoizedState : null
        } else l = ml.next;
        var t = Dl === null ? ll.memoizedState : Dl.next;
        if (t !== null) Dl = t, ml = l;
        else {
            if (l === null) throw ll.alternate === null ? Error(h(467)) : Error(h(310));
            ml = l, l = {
                memoizedState: ml.memoizedState,
                baseState: ml.baseState,
                baseQueue: ml.baseQueue,
                queue: ml.queue,
                next: null
            }, Dl === null ? ll.memoizedState = Dl = l : Dl = Dl.next = l
        }
        return Dl
    }

    function Xi() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Wa(l) {
        var t = $a;
        return $a += 1, ca === null && (ca = []), l = Ts(ca, l, t), t = ll, (Dl === null ? t.memoizedState : Dl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? or : dr), l
    }

    function Pu(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function") return Wa(l);
            if (l.$$typeof === k) return Vl(l)
        }
        throw Error(h(438, String(l)))
    }

    function Zi(l) {
        var t = null,
            e = ll.updateQueue;
        if (e !== null && (t = e.memoCache), t == null) {
            var a = ll.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
                data: a.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), e === null && (e = Xi(), ll.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
            for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Tt;
        return t.index++, e
    }

    function Yt(l, t) {
        return typeof t == "function" ? t(l) : t
    }

    function Iu(l) {
        var t = jl();
        return Li(t, ml, l)
    }

    function Li(l, t, e) {
        var a = l.queue;
        if (a === null) throw Error(h(311));
        a.lastRenderedReducer = e;
        var u = l.baseQueue,
            n = a.pending;
        if (n !== null) {
            if (u !== null) {
                var i = u.next;
                u.next = n.next, n.next = i
            }
            t.baseQueue = u = n, a.pending = null
        }
        if (n = l.baseState, u === null) l.memoizedState = n;
        else {
            t = u.next;
            var c = i = null,
                f = null,
                y = t,
                p = !1;
            do {
                var E = y.lane & -536870913;
                if (E !== y.lane ? (nl & E) === E : (le & E) === E) {
                    var g = y.revertLane;
                    if (g === 0) f !== null && (f = f.next = {
                        lane: 0,
                        revertLane: 0,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null
                    }), E === aa && (p = !0);
                    else if ((le & g) === g) {
                        y = y.next, g === aa && (p = !0);
                        continue
                    } else E = {
                        lane: 0,
                        revertLane: y.revertLane,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null
                    }, f === null ? (c = f = E, i = n) : f = f.next = E, ll.lanes |= g, ce |= g;
                    E = y.action, Re && e(n, E), n = y.hasEagerState ? y.eagerState : e(n, E)
                } else g = {
                    lane: E,
                    revertLane: y.revertLane,
                    action: y.action,
                    hasEagerState: y.hasEagerState,
                    eagerState: y.eagerState,
                    next: null
                }, f === null ? (c = f = g, i = n) : f = f.next = g, ll.lanes |= E, ce |= E;
                y = y.next
            } while (y !== null && y !== t);
            if (f === null ? i = n : f.next = c, !at(n, l.memoizedState) && (Bl = !0, p && (e = ua, e !== null))) throw e;
            l.memoizedState = n, l.baseState = i, l.baseQueue = f, a.lastRenderedState = n
        }
        return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch]
    }

    function Vi(l) {
        var t = jl(),
            e = t.queue;
        if (e === null) throw Error(h(311));
        e.lastRenderedReducer = l;
        var a = e.dispatch,
            u = e.pending,
            n = t.memoizedState;
        if (u !== null) {
            e.pending = null;
            var i = u = u.next;
            do n = l(n, i.action), i = i.next; while (i !== u);
            at(n, t.memoizedState) || (Bl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n
        }
        return [n, a]
    }

    function js(l, t, e) {
        var a = ll,
            u = jl(),
            n = cl;
        if (n) {
            if (e === void 0) throw Error(h(407));
            e = e()
        } else e = t();
        var i = !at((ml || u).memoizedState, e);
        i && (u.memoizedState = e, Bl = !0), u = u.queue;
        var c = Hs.bind(null, a, u, l);
        if (Fa(2048, 8, c, [l]), u.getSnapshot !== t || i || Dl !== null && Dl.memoizedState.tag & 1) {
            if (a.flags |= 2048, fa(9, ln(), Us.bind(null, a, u, e, t), null), xl === null) throw Error(h(349));
            n || (le & 124) !== 0 || Rs(a, t, e)
        }
        return e
    }

    function Rs(l, t, e) {
        l.flags |= 16384, l = {
            getSnapshot: t,
            value: e
        }, t = ll.updateQueue, t === null ? (t = Xi(), ll.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l))
    }

    function Us(l, t, e, a) {
        t.value = e, t.getSnapshot = a, ws(t) && qs(l)
    }

    function Hs(l, t, e) {
        return e(function() {
            ws(t) && qs(l)
        })
    }

    function ws(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var e = t();
            return !at(l, e)
        } catch {
            return !0
        }
    }

    function qs(l) {
        var t = Ie(l, 2);
        t !== null && st(t, l, 2)
    }

    function Ki(l) {
        var t = Pl();
        if (typeof l == "function") {
            var e = l;
            if (l = e(), Re) {
                Jt(!0);
                try {
                    e()
                } finally {
                    Jt(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Yt,
            lastRenderedState: l
        }, t
    }

    function Cs(l, t, e, a) {
        return l.baseState = e, Li(l, ml, typeof a == "function" ? a : Yt)
    }

    function B0(l, t, e, a, u) {
        if (en(l)) throw Error(h(485));
        if (l = t.action, l !== null) {
            var n = {
                payload: u,
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
            S.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, Bs(t, n)) : (n.next = e.next, t.pending = e.next = n)
        }
    }

    function Bs(l, t) {
        var e = t.action,
            a = t.payload,
            u = l.state;
        if (t.isTransition) {
            var n = S.T,
                i = {};
            S.T = i;
            try {
                var c = e(u, a),
                    f = S.S;
                f !== null && f(i, c), Ys(l, t, c)
            } catch (y) {
                Ji(l, t, y)
            } finally {
                S.T = n
            }
        } else try {
            n = e(u, a), Ys(l, t, n)
        } catch (y) {
            Ji(l, t, y)
        }
    }

    function Ys(l, t, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            Gs(l, t, a)
        }, function(a) {
            return Ji(l, t, a)
        }) : Gs(l, t, e)
    }

    function Gs(l, t, e) {
        t.status = "fulfilled", t.value = e, Qs(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, Bs(l, e)))
    }

    function Ji(l, t, e) {
        var a = l.pending;
        if (l.pending = null, a !== null) {
            a = a.next;
            do t.status = "rejected", t.reason = e, Qs(t), t = t.next; while (t !== a)
        }
        l.action = null
    }

    function Qs(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)(0, l[t])()
    }

    function Xs(l, t) {
        return t
    }

    function Zs(l, t) {
        if (cl) {
            var e = xl.formState;
            if (e !== null) {
                l: {
                    var a = ll;
                    if (cl) {
                        if (El) {
                            t: {
                                for (var u = El, n = Nt; u.nodeType !== 8;) {
                                    if (!n) {
                                        u = null;
                                        break t
                                    }
                                    if (u = At(u.nextSibling), u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                n = u.data,
                                u = n === "F!" || n === "F" ? u : null
                            }
                            if (u) {
                                El = At(u.nextSibling), a = u.data === "F!";
                                break l
                            }
                        }
                        Me(a)
                    }
                    a = !1
                }
                a && (t = e[0])
            }
        }
        return e = Pl(), e.memoizedState = e.baseState = t, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Xs,
            lastRenderedState: t
        }, e.queue = a, e = fr.bind(null, ll, a), a.dispatch = e, a = Ki(!1), n = Pi.bind(null, ll, !1, a.queue), a = Pl(), u = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        }, a.queue = u, e = B0.bind(null, ll, u, n, e), u.dispatch = e, a.memoizedState = l, [t, e, !1]
    }

    function Ls(l) {
        var t = jl();
        return Vs(t, ml, l)
    }

    function Vs(l, t, e) {
        if (t = Li(l, t, Xs)[0], l = Iu(Yt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var a = Wa(t)
        } catch (i) {
            throw i === La ? Ju : i
        } else a = t;
        t = jl();
        var u = t.queue,
            n = u.dispatch;
        return e !== t.memoizedState && (ll.flags |= 2048, fa(9, ln(), Y0.bind(null, u, e), null)), [a, n, l]
    }

    function Y0(l, t) {
        l.action = t
    }

    function Ks(l) {
        var t = jl(),
            e = ml;
        if (e !== null) return Vs(t, e, l);
        jl(), t = t.memoizedState, e = jl();
        var a = e.queue.dispatch;
        return e.memoizedState = l, [t, a, !1]
    }

    function fa(l, t, e, a) {
        return l = {
            tag: l,
            create: e,
            deps: a,
            inst: t,
            next: null
        }, t = ll.updateQueue, t === null && (t = Xi(), ll.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l
    }

    function ln() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function Js() {
        return jl().memoizedState
    }

    function tn(l, t, e, a) {
        var u = Pl();
        a = a === void 0 ? null : a, ll.flags |= l, u.memoizedState = fa(1 | t, ln(), e, a)
    }

    function Fa(l, t, e, a) {
        var u = jl();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        ml !== null && a !== null && Ci(a, ml.memoizedState.deps) ? u.memoizedState = fa(t, n, e, a) : (ll.flags |= l, u.memoizedState = fa(1 | t, n, e, a))
    }

    function ks(l, t) {
        tn(8390656, 8, l, t)
    }

    function $s(l, t) {
        Fa(2048, 8, l, t)
    }

    function Ws(l, t) {
        return Fa(4, 2, l, t)
    }

    function Fs(l, t) {
        return Fa(4, 4, l, t)
    }

    function Ps(l, t) {
        if (typeof t == "function") {
            l = l();
            var e = t(l);
            return function() {
                typeof e == "function" ? e() : t(null)
            }
        }
        if (t != null) return l = l(), t.current = l,
            function() {
                t.current = null
            }
    }

    function Is(l, t, e) {
        e = e != null ? e.concat([l]) : null, Fa(4, 4, Ps.bind(null, t, l), e)
    }

    function ki() {}

    function lr(l, t) {
        var e = jl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        return t !== null && Ci(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l)
    }

    function tr(l, t) {
        var e = jl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        if (t !== null && Ci(t, a[1])) return a[0];
        if (a = l(), Re) {
            Jt(!0);
            try {
                l()
            } finally {
                Jt(!1)
            }
        }
        return e.memoizedState = [a, t], a
    }

    function $i(l, t, e) {
        return e === void 0 || (le & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = e, l = uo(), ll.lanes |= l, ce |= l, e)
    }

    function er(l, t, e, a) {
        return at(e, t) ? e : na.current !== null ? (l = $i(l, e, a), at(l, t) || (Bl = !0), l) : (le & 42) === 0 ? (Bl = !0, l.memoizedState = e) : (l = uo(), ll.lanes |= l, ce |= l, t)
    }

    function ar(l, t, e, a, u) {
        var n = j.p;
        j.p = n !== 0 && 8 > n ? n : 8;
        var i = S.T,
            c = {};
        S.T = c, Pi(l, !1, t, e);
        try {
            var f = u(),
                y = S.S;
            if (y !== null && y(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
                var p = w0(f, a);
                Pa(l, t, p, ft(l))
            } else Pa(l, t, a, ft(l))
        } catch (E) {
            Pa(l, t, {
                then: function() {},
                status: "rejected",
                reason: E
            }, ft())
        } finally {
            j.p = n, S.T = i
        }
    }

    function G0() {}

    function Wi(l, t, e, a) {
        if (l.tag !== 5) throw Error(h(476));
        var u = ur(l).queue;
        ar(l, u, t, Q, e === null ? G0 : function() {
            return nr(l), e(a)
        })
    }

    function ur(l) {
        var t = l.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: Q,
            baseState: Q,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Yt,
                lastRenderedState: Q
            },
            next: null
        };
        var e = {};
        return t.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Yt,
                lastRenderedState: e
            },
            next: null
        }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t
    }

    function nr(l) {
        var t = ur(l).next.queue;
        Pa(l, t, {}, ft())
    }

    function Fi() {
        return Vl(yu)
    }

    function ir() {
        return jl().memoizedState
    }

    function cr() {
        return jl().memoizedState
    }

    function Q0(l) {
        for (var t = l.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var e = ft();
                    l = Pt(e);
                    var a = It(t, l, e);
                    a !== null && (st(a, t, e), Ka(a, t, e)), t = {
                        cache: _i()
                    }, l.payload = t;
                    return
            }
            t = t.return
        }
    }

    function X0(l, t, e) {
        var a = ft();
        e = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, en(l) ? sr(t, e) : (e = gi(l, t, e, a), e !== null && (st(e, l, a), rr(e, t, a)))
    }

    function fr(l, t, e) {
        var a = ft();
        Pa(l, t, e, a)
    }

    function Pa(l, t, e, a) {
        var u = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (en(l)) sr(t, u);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
                var i = t.lastRenderedState,
                    c = n(i, e);
                if (u.hasEagerState = !0, u.eagerState = c, at(c, i)) return Yu(l, t, u, 0), xl === null && Bu(), !1
            } catch {} finally {}
            if (e = gi(l, t, u, a), e !== null) return st(e, l, a), rr(e, t, a), !0
        }
        return !1
    }

    function Pi(l, t, e, a) {
        if (a = {
                lane: 2,
                revertLane: Dc(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, en(l)) {
            if (t) throw Error(h(479))
        } else t = gi(l, e, a, 2), t !== null && st(t, l, 2)
    }

    function en(l) {
        var t = l.alternate;
        return l === ll || t !== null && t === ll
    }

    function sr(l, t) {
        ia = Wu = !0;
        var e = l.pending;
        e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t
    }

    function rr(l, t, e) {
        if ((e & 4194048) !== 0) {
            var a = t.lanes;
            a &= l.pendingLanes, e |= a, t.lanes = e, bf(l, e)
        }
    }
    var an = {
            readContext: Vl,
            use: Pu,
            useCallback: _l,
            useContext: _l,
            useEffect: _l,
            useImperativeHandle: _l,
            useLayoutEffect: _l,
            useInsertionEffect: _l,
            useMemo: _l,
            useReducer: _l,
            useRef: _l,
            useState: _l,
            useDebugValue: _l,
            useDeferredValue: _l,
            useTransition: _l,
            useSyncExternalStore: _l,
            useId: _l,
            useHostTransitionStatus: _l,
            useFormState: _l,
            useActionState: _l,
            useOptimistic: _l,
            useMemoCache: _l,
            useCacheRefresh: _l
        },
        or = {
            readContext: Vl,
            use: Pu,
            useCallback: function(l, t) {
                return Pl().memoizedState = [l, t === void 0 ? null : t], l
            },
            useContext: Vl,
            useEffect: ks,
            useImperativeHandle: function(l, t, e) {
                e = e != null ? e.concat([l]) : null, tn(4194308, 4, Ps.bind(null, t, l), e)
            },
            useLayoutEffect: function(l, t) {
                return tn(4194308, 4, l, t)
            },
            useInsertionEffect: function(l, t) {
                tn(4, 2, l, t)
            },
            useMemo: function(l, t) {
                var e = Pl();
                t = t === void 0 ? null : t;
                var a = l();
                if (Re) {
                    Jt(!0);
                    try {
                        l()
                    } finally {
                        Jt(!1)
                    }
                }
                return e.memoizedState = [a, t], a
            },
            useReducer: function(l, t, e) {
                var a = Pl();
                if (e !== void 0) {
                    var u = e(t);
                    if (Re) {
                        Jt(!0);
                        try {
                            e(t)
                        } finally {
                            Jt(!1)
                        }
                    }
                } else u = t;
                return a.memoizedState = a.baseState = u, l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: l,
                    lastRenderedState: u
                }, a.queue = l, l = l.dispatch = X0.bind(null, ll, l), [a.memoizedState, l]
            },
            useRef: function(l) {
                var t = Pl();
                return l = {
                    current: l
                }, t.memoizedState = l
            },
            useState: function(l) {
                l = Ki(l);
                var t = l.queue,
                    e = fr.bind(null, ll, t);
                return t.dispatch = e, [l.memoizedState, e]
            },
            useDebugValue: ki,
            useDeferredValue: function(l, t) {
                var e = Pl();
                return $i(e, l, t)
            },
            useTransition: function() {
                var l = Ki(!1);
                return l = ar.bind(null, ll, l.queue, !0, !1), Pl().memoizedState = l, [!1, l]
            },
            useSyncExternalStore: function(l, t, e) {
                var a = ll,
                    u = Pl();
                if (cl) {
                    if (e === void 0) throw Error(h(407));
                    e = e()
                } else {
                    if (e = t(), xl === null) throw Error(h(349));
                    (nl & 124) !== 0 || Rs(a, t, e)
                }
                u.memoizedState = e;
                var n = {
                    value: e,
                    getSnapshot: t
                };
                return u.queue = n, ks(Hs.bind(null, a, n, l), [l]), a.flags |= 2048, fa(9, ln(), Us.bind(null, a, n, e, t), null), e
            },
            useId: function() {
                var l = Pl(),
                    t = xl.identifierPrefix;
                if (cl) {
                    var e = qt,
                        a = wt;
                    e = (a & ~(1 << 32 - et(a) - 1)).toString(32) + e, t = "«" + t + "R" + e, e = Fu++, 0 < e && (t += "H" + e.toString(32)), t += "»"
                } else e = q0++, t = "«" + t + "r" + e.toString(32) + "»";
                return l.memoizedState = t
            },
            useHostTransitionStatus: Fi,
            useFormState: Zs,
            useActionState: Zs,
            useOptimistic: function(l) {
                var t = Pl();
                t.memoizedState = t.baseState = l;
                var e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = e, t = Pi.bind(null, ll, !0, e), e.dispatch = t, [l, t]
            },
            useMemoCache: Zi,
            useCacheRefresh: function() {
                return Pl().memoizedState = Q0.bind(null, ll)
            }
        },
        dr = {
            readContext: Vl,
            use: Pu,
            useCallback: lr,
            useContext: Vl,
            useEffect: $s,
            useImperativeHandle: Is,
            useInsertionEffect: Ws,
            useLayoutEffect: Fs,
            useMemo: tr,
            useReducer: Iu,
            useRef: Js,
            useState: function() {
                return Iu(Yt)
            },
            useDebugValue: ki,
            useDeferredValue: function(l, t) {
                var e = jl();
                return er(e, ml.memoizedState, l, t)
            },
            useTransition: function() {
                var l = Iu(Yt)[0],
                    t = jl().memoizedState;
                return [typeof l == "boolean" ? l : Wa(l), t]
            },
            useSyncExternalStore: js,
            useId: ir,
            useHostTransitionStatus: Fi,
            useFormState: Ls,
            useActionState: Ls,
            useOptimistic: function(l, t) {
                var e = jl();
                return Cs(e, ml, l, t)
            },
            useMemoCache: Zi,
            useCacheRefresh: cr
        },
        Z0 = {
            readContext: Vl,
            use: Pu,
            useCallback: lr,
            useContext: Vl,
            useEffect: $s,
            useImperativeHandle: Is,
            useInsertionEffect: Ws,
            useLayoutEffect: Fs,
            useMemo: tr,
            useReducer: Vi,
            useRef: Js,
            useState: function() {
                return Vi(Yt)
            },
            useDebugValue: ki,
            useDeferredValue: function(l, t) {
                var e = jl();
                return ml === null ? $i(e, l, t) : er(e, ml.memoizedState, l, t)
            },
            useTransition: function() {
                var l = Vi(Yt)[0],
                    t = jl().memoizedState;
                return [typeof l == "boolean" ? l : Wa(l), t]
            },
            useSyncExternalStore: js,
            useId: ir,
            useHostTransitionStatus: Fi,
            useFormState: Ks,
            useActionState: Ks,
            useOptimistic: function(l, t) {
                var e = jl();
                return ml !== null ? Cs(e, ml, l, t) : (e.baseState = l, [l, e.queue.dispatch])
            },
            useMemoCache: Zi,
            useCacheRefresh: cr
        },
        sa = null,
        Ia = 0;

    function un(l) {
        var t = Ia;
        return Ia += 1, sa === null && (sa = []), Ts(sa, l, t)
    }

    function lu(l, t) {
        t = t.props.ref, l.ref = t !== void 0 ? t : null
    }

    function nn(l, t) {
        throw t.$$typeof === $ ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(h(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }

    function vr(l) {
        var t = l._init;
        return t(l._payload)
    }

    function hr(l) {
        function t(d, r) {
            if (l) {
                var m = d.deletions;
                m === null ? (d.deletions = [r], d.flags |= 16) : m.push(r)
            }
        }

        function e(d, r) {
            if (!l) return null;
            for (; r !== null;) t(d, r), r = r.sibling;
            return null
        }

        function a(d) {
            for (var r = new Map; d !== null;) d.key !== null ? r.set(d.key, d) : r.set(d.index, d), d = d.sibling;
            return r
        }

        function u(d, r) {
            return d = Ht(d, r), d.index = 0, d.sibling = null, d
        }

        function n(d, r, m) {
            return d.index = m, l ? (m = d.alternate, m !== null ? (m = m.index, m < r ? (d.flags |= 67108866, r) : m) : (d.flags |= 67108866, r)) : (d.flags |= 1048576, r)
        }

        function i(d) {
            return l && d.alternate === null && (d.flags |= 67108866), d
        }

        function c(d, r, m, T) {
            return r === null || r.tag !== 6 ? (r = xi(m, d.mode, T), r.return = d, r) : (r = u(r, m), r.return = d, r)
        }

        function f(d, r, m, T) {
            var U = m.type;
            return U === sl ? p(d, r, m.props.children, T, m.key) : r !== null && (r.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Tl && vr(U) === r.type) ? (r = u(r, m.props), lu(r, m), r.return = d, r) : (r = Qu(m.type, m.key, m.props, null, d.mode, T), lu(r, m), r.return = d, r)
        }

        function y(d, r, m, T) {
            return r === null || r.tag !== 4 || r.stateNode.containerInfo !== m.containerInfo || r.stateNode.implementation !== m.implementation ? (r = Si(m, d.mode, T), r.return = d, r) : (r = u(r, m.children || []), r.return = d, r)
        }

        function p(d, r, m, T, U) {
            return r === null || r.tag !== 7 ? (r = Ee(m, d.mode, T, U), r.return = d, r) : (r = u(r, m), r.return = d, r)
        }

        function E(d, r, m) {
            if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return r = xi("" + r, d.mode, m), r.return = d, r;
            if (typeof r == "object" && r !== null) {
                switch (r.$$typeof) {
                    case K:
                        return m = Qu(r.type, r.key, r.props, null, d.mode, m), lu(m, r), m.return = d, m;
                    case ul:
                        return r = Si(r, d.mode, m), r.return = d, r;
                    case Tl:
                        var T = r._init;
                        return r = T(r._payload), E(d, r, m)
                }
                if (wl(r) || Hl(r)) return r = Ee(r, d.mode, m, null), r.return = d, r;
                if (typeof r.then == "function") return E(d, un(r), m);
                if (r.$$typeof === k) return E(d, Vu(d, r), m);
                nn(d, r)
            }
            return null
        }

        function g(d, r, m, T) {
            var U = r !== null ? r.key : null;
            if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return U !== null ? null : c(d, r, "" + m, T);
            if (typeof m == "object" && m !== null) {
                switch (m.$$typeof) {
                    case K:
                        return m.key === U ? f(d, r, m, T) : null;
                    case ul:
                        return m.key === U ? y(d, r, m, T) : null;
                    case Tl:
                        return U = m._init, m = U(m._payload), g(d, r, m, T)
                }
                if (wl(m) || Hl(m)) return U !== null ? null : p(d, r, m, T, null);
                if (typeof m.then == "function") return g(d, r, un(m), T);
                if (m.$$typeof === k) return g(d, r, Vu(d, m), T);
                nn(d, m)
            }
            return null
        }

        function x(d, r, m, T, U) {
            if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return d = d.get(m) || null, c(r, d, "" + T, U);
            if (typeof T == "object" && T !== null) {
                switch (T.$$typeof) {
                    case K:
                        return d = d.get(T.key === null ? m : T.key) || null, f(r, d, T, U);
                    case ul:
                        return d = d.get(T.key === null ? m : T.key) || null, y(r, d, T, U);
                    case Tl:
                        var tl = T._init;
                        return T = tl(T._payload), x(d, r, m, T, U)
                }
                if (wl(T) || Hl(T)) return d = d.get(m) || null, p(r, d, T, U, null);
                if (typeof T.then == "function") return x(d, r, m, un(T), U);
                if (T.$$typeof === k) return x(d, r, m, Vu(r, T), U);
                nn(r, T)
            }
            return null
        }

        function V(d, r, m, T) {
            for (var U = null, tl = null, q = r, L = r = 0, Gl = null; q !== null && L < m.length; L++) {
                q.index > L ? (Gl = q, q = null) : Gl = q.sibling;
                var il = g(d, q, m[L], T);
                if (il === null) {
                    q === null && (q = Gl);
                    break
                }
                l && q && il.alternate === null && t(d, q), r = n(il, r, L), tl === null ? U = il : tl.sibling = il, tl = il, q = Gl
            }
            if (L === m.length) return e(d, q), cl && ze(d, L), U;
            if (q === null) {
                for (; L < m.length; L++) q = E(d, m[L], T), q !== null && (r = n(q, r, L), tl === null ? U = q : tl.sibling = q, tl = q);
                return cl && ze(d, L), U
            }
            for (q = a(q); L < m.length; L++) Gl = x(q, d, L, m[L], T), Gl !== null && (l && Gl.alternate !== null && q.delete(Gl.key === null ? L : Gl.key), r = n(Gl, r, L), tl === null ? U = Gl : tl.sibling = Gl, tl = Gl);
            return l && q.forEach(function(ye) {
                return t(d, ye)
            }), cl && ze(d, L), U
        }

        function X(d, r, m, T) {
            if (m == null) throw Error(h(151));
            for (var U = null, tl = null, q = r, L = r = 0, Gl = null, il = m.next(); q !== null && !il.done; L++, il = m.next()) {
                q.index > L ? (Gl = q, q = null) : Gl = q.sibling;
                var ye = g(d, q, il.value, T);
                if (ye === null) {
                    q === null && (q = Gl);
                    break
                }
                l && q && ye.alternate === null && t(d, q), r = n(ye, r, L), tl === null ? U = ye : tl.sibling = ye, tl = ye, q = Gl
            }
            if (il.done) return e(d, q), cl && ze(d, L), U;
            if (q === null) {
                for (; !il.done; L++, il = m.next()) il = E(d, il.value, T), il !== null && (r = n(il, r, L), tl === null ? U = il : tl.sibling = il, tl = il);
                return cl && ze(d, L), U
            }
            for (q = a(q); !il.done; L++, il = m.next()) il = x(q, d, L, il.value, T), il !== null && (l && il.alternate !== null && q.delete(il.key === null ? L : il.key), r = n(il, r, L), tl === null ? U = il : tl.sibling = il, tl = il);
            return l && q.forEach(function(Lv) {
                return t(d, Lv)
            }), cl && ze(d, L), U
        }

        function gl(d, r, m, T) {
            if (typeof m == "object" && m !== null && m.type === sl && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
                switch (m.$$typeof) {
                    case K:
                        l: {
                            for (var U = m.key; r !== null;) {
                                if (r.key === U) {
                                    if (U = m.type, U === sl) {
                                        if (r.tag === 7) {
                                            e(d, r.sibling), T = u(r, m.props.children), T.return = d, d = T;
                                            break l
                                        }
                                    } else if (r.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Tl && vr(U) === r.type) {
                                        e(d, r.sibling), T = u(r, m.props), lu(T, m), T.return = d, d = T;
                                        break l
                                    }
                                    e(d, r);
                                    break
                                } else t(d, r);
                                r = r.sibling
                            }
                            m.type === sl ? (T = Ee(m.props.children, d.mode, T, m.key), T.return = d, d = T) : (T = Qu(m.type, m.key, m.props, null, d.mode, T), lu(T, m), T.return = d, d = T)
                        }
                        return i(d);
                    case ul:
                        l: {
                            for (U = m.key; r !== null;) {
                                if (r.key === U)
                                    if (r.tag === 4 && r.stateNode.containerInfo === m.containerInfo && r.stateNode.implementation === m.implementation) {
                                        e(d, r.sibling), T = u(r, m.children || []), T.return = d, d = T;
                                        break l
                                    } else {
                                        e(d, r);
                                        break
                                    }
                                else t(d, r);
                                r = r.sibling
                            }
                            T = Si(m, d.mode, T),
                            T.return = d,
                            d = T
                        }
                        return i(d);
                    case Tl:
                        return U = m._init, m = U(m._payload), gl(d, r, m, T)
                }
                if (wl(m)) return V(d, r, m, T);
                if (Hl(m)) {
                    if (U = Hl(m), typeof U != "function") throw Error(h(150));
                    return m = U.call(m), X(d, r, m, T)
                }
                if (typeof m.then == "function") return gl(d, r, un(m), T);
                if (m.$$typeof === k) return gl(d, r, Vu(d, m), T);
                nn(d, m)
            }
            return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, r !== null && r.tag === 6 ? (e(d, r.sibling), T = u(r, m), T.return = d, d = T) : (e(d, r), T = xi(m, d.mode, T), T.return = d, d = T), i(d)) : e(d, r)
        }
        return function(d, r, m, T) {
            try {
                Ia = 0;
                var U = gl(d, r, m, T);
                return sa = null, U
            } catch (q) {
                if (q === La || q === Ju) throw q;
                var tl = ut(29, q, null, d.mode);
                return tl.lanes = T, tl.return = d, tl
            } finally {}
        }
    }
    var ra = hr(!0),
        mr = hr(!1),
        yt = N(null),
        zt = null;

    function te(l) {
        var t = l.alternate;
        z(Ul, Ul.current & 1), z(yt, l), zt === null && (t === null || na.current !== null || t.memoizedState !== null) && (zt = l)
    }

    function yr(l) {
        if (l.tag === 22) {
            if (z(Ul, Ul.current), z(yt, l), zt === null) {
                var t = l.alternate;
                t !== null && t.memoizedState !== null && (zt = l)
            }
        } else ee()
    }

    function ee() {
        z(Ul, Ul.current), z(yt, yt.current)
    }

    function Gt(l) {
        b(yt), zt === l && (zt = null), b(Ul)
    }
    var Ul = N(0);

    function cn(l) {
        for (var t = l; t !== null;) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || Xc(e))) return t
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

    function Ii(l, t, e, a) {
        t = l.memoizedState, e = e(a, t), e = e == null ? t : M({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e)
    }
    var lc = {
        enqueueSetState: function(l, t, e) {
            l = l._reactInternals;
            var a = ft(),
                u = Pt(a);
            u.payload = t, e != null && (u.callback = e), t = It(l, u, a), t !== null && (st(t, l, a), Ka(t, l, a))
        },
        enqueueReplaceState: function(l, t, e) {
            l = l._reactInternals;
            var a = ft(),
                u = Pt(a);
            u.tag = 1, u.payload = t, e != null && (u.callback = e), t = It(l, u, a), t !== null && (st(t, l, a), Ka(t, l, a))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var e = ft(),
                a = Pt(e);
            a.tag = 2, t != null && (a.callback = t), t = It(l, a, e), t !== null && (st(t, l, e), Ka(t, l, e))
        }
    };

    function gr(l, t, e, a, u, n, i) {
        return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !qa(e, a) || !qa(u, n) : !0
    }

    function br(l, t, e, a) {
        l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && lc.enqueueReplaceState(t, t.state, null)
    }

    function Ue(l, t) {
        var e = t;
        if ("ref" in t) {
            e = {};
            for (var a in t) a !== "ref" && (e[a] = t[a])
        }
        if (l = l.defaultProps) {
            e === t && (e = M({}, e));
            for (var u in l) e[u] === void 0 && (e[u] = l[u])
        }
        return e
    }
    var fn = typeof reportError == "function" ? reportError : function(l) {
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

    function xr(l) {
        fn(l)
    }

    function Sr(l) {
        console.error(l)
    }

    function pr(l) {
        fn(l)
    }

    function sn(l, t) {
        try {
            var e = l.onUncaughtError;
            e(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }

    function Ar(l, t, e) {
        try {
            var a = l.onCaughtError;
            a(e.value, {
                componentStack: e.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }

    function tc(l, t, e) {
        return e = Pt(e), e.tag = 3, e.payload = {
            element: null
        }, e.callback = function() {
            sn(l, t)
        }, e
    }

    function Tr(l) {
        return l = Pt(l), l.tag = 3, l
    }

    function Er(l, t, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var n = a.value;
            l.payload = function() {
                return u(n)
            }, l.callback = function() {
                Ar(t, e, a)
            }
        }
        var i = e.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
            Ar(t, e, a), typeof u != "function" && (fe === null ? fe = new Set([this]) : fe.add(this));
            var c = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: c !== null ? c : ""
            })
        })
    }

    function L0(l, t, e, a, u) {
        if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = e.alternate, t !== null && Qa(t, e, u, !0), e = yt.current, e !== null) {
                switch (e.tag) {
                    case 13:
                        return zt === null ? Nc() : e.alternate === null && Nl === 0 && (Nl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Di ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = new Set([a]) : t.add(a), _c(l, a, u)), !1;
                    case 22:
                        return e.flags |= 65536, a === Di ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([a])
                        }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = new Set([a]) : e.add(a)), _c(l, a, u)), !1
                }
                throw Error(h(435, e.tag))
            }
            return _c(l, a, u), Nc(), !1
        }
        if (cl) return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Ti && (l = Error(h(422), {
            cause: a
        }), Ga(dt(l, e)))) : (a !== Ti && (t = Error(h(423), {
            cause: a
        }), Ga(dt(t, e))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = dt(a, e), u = tc(l.stateNode, a, u), Ui(l, u), Nl !== 4 && (Nl = 2)), !1;
        var n = Error(h(520), {
            cause: a
        });
        if (n = dt(n, e), cu === null ? cu = [n] : cu.push(n), Nl !== 4 && (Nl = 2), t === null) return !0;
        a = dt(a, e), e = t;
        do {
            switch (e.tag) {
                case 3:
                    return e.flags |= 65536, l = u & -u, e.lanes |= l, l = tc(e.stateNode, a, l), Ui(e, l), !1;
                case 1:
                    if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (fe === null || !fe.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Tr(u), Er(u, l, e, a), Ui(e, u), !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var Nr = Error(h(461)),
        Bl = !1;

    function Ql(l, t, e, a) {
        t.child = l === null ? mr(t, null, e, a) : ra(t, l.child, e, a)
    }

    function zr(l, t, e, a, u) {
        e = e.render;
        var n = t.ref;
        if ("ref" in a) {
            var i = {};
            for (var c in a) c !== "ref" && (i[c] = a[c])
        } else i = a;
        return De(t), a = Bi(l, t, e, i, n, u), c = Yi(), l !== null && !Bl ? (Gi(l, t, u), Qt(l, t, u)) : (cl && c && pi(t), t.flags |= 1, Ql(l, t, a, u), t.child)
    }

    function _r(l, t, e, a, u) {
        if (l === null) {
            var n = e.type;
            return typeof n == "function" && !bi(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Mr(l, t, n, a, u)) : (l = Qu(e.type, null, a, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l)
        }
        if (n = l.child, !sc(l, u)) {
            var i = n.memoizedProps;
            if (e = e.compare, e = e !== null ? e : qa, e(i, a) && l.ref === t.ref) return Qt(l, t, u)
        }
        return t.flags |= 1, l = Ht(n, a), l.ref = t.ref, l.return = t, t.child = l
    }

    function Mr(l, t, e, a, u) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (qa(n, a) && l.ref === t.ref)
                if (Bl = !1, t.pendingProps = a = n, sc(l, u))(l.flags & 131072) !== 0 && (Bl = !0);
                else return t.lanes = l.lanes, Qt(l, t, u)
        }
        return ec(l, t, e, a, u)
    }

    function Or(l, t, e) {
        var a = t.pendingProps,
            u = a.children,
            n = l !== null ? l.memoizedState : null;
        if (a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (a = n !== null ? n.baseLanes | e : e, l !== null) {
                    for (u = t.child = l.child, n = 0; u !== null;) n = n | u.lanes | u.childLanes, u = u.sibling;
                    t.childLanes = n & ~a
                } else t.childLanes = 0, t.child = null;
                return Dr(l, t, a, e)
            }
            if ((e & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, l !== null && Ku(t, n !== null ? n.cachePool : null), n !== null ? Ms(t, n) : wi(), yr(t);
            else return t.lanes = t.childLanes = 536870912, Dr(l, t, n !== null ? n.baseLanes | e : e, e)
        } else n !== null ? (Ku(t, n.cachePool), Ms(t, n), ee(), t.memoizedState = null) : (l !== null && Ku(t, null), wi(), ee());
        return Ql(l, t, u, e), t.child
    }

    function Dr(l, t, e, a) {
        var u = Oi();
        return u = u === null ? null : {
            parent: Rl._currentValue,
            pool: u
        }, t.memoizedState = {
            baseLanes: e,
            cachePool: u
        }, l !== null && Ku(t, null), wi(), yr(t), l !== null && Qa(l, t, a, !0), null
    }

    function rn(l, t) {
        var e = t.ref;
        if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object") throw Error(h(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816)
        }
    }

    function ec(l, t, e, a, u) {
        return De(t), e = Bi(l, t, e, a, void 0, u), a = Yi(), l !== null && !Bl ? (Gi(l, t, u), Qt(l, t, u)) : (cl && a && pi(t), t.flags |= 1, Ql(l, t, e, u), t.child)
    }

    function jr(l, t, e, a, u, n) {
        return De(t), t.updateQueue = null, e = Ds(t, a, e, u), Os(l), a = Yi(), l !== null && !Bl ? (Gi(l, t, n), Qt(l, t, n)) : (cl && a && pi(t), t.flags |= 1, Ql(l, t, e, n), t.child)
    }

    function Rr(l, t, e, a, u) {
        if (De(t), t.stateNode === null) {
            var n = la,
                i = e.contextType;
            typeof i == "object" && i !== null && (n = Vl(i)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = lc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, ji(t), i = e.contextType, n.context = typeof i == "object" && i !== null ? Vl(i) : la, n.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Ii(t, e, i, a), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && lc.enqueueReplaceState(n, n.state, null), ka(t, a, n, u), Ja(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0
        } else if (l === null) {
            n = t.stateNode;
            var c = t.memoizedProps,
                f = Ue(e, c);
            n.props = f;
            var y = n.context,
                p = e.contextType;
            i = la, typeof p == "object" && p !== null && (i = Vl(p));
            var E = e.getDerivedStateFromProps;
            p = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && br(t, n, a, i), Ft = !1;
            var g = t.memoizedState;
            n.state = g, ka(t, a, n, u), Ja(), y = t.memoizedState, c || g !== y || Ft ? (typeof E == "function" && (Ii(t, e, E, a), y = t.memoizedState), (f = Ft || gr(t, e, f, a, g, y, i)) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = i, a = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
        } else {
            n = t.stateNode, Ri(l, t), i = t.memoizedProps, p = Ue(e, i), n.props = p, E = t.pendingProps, g = n.context, y = e.contextType, f = la, typeof y == "object" && y !== null && (f = Vl(y)), c = e.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== E || g !== f) && br(t, n, a, f), Ft = !1, g = t.memoizedState, n.state = g, ka(t, a, n, u), Ja();
            var x = t.memoizedState;
            i !== E || g !== x || Ft || l !== null && l.dependencies !== null && Lu(l.dependencies) ? (typeof c == "function" && (Ii(t, e, c, a), x = t.memoizedState), (p = Ft || gr(t, e, p, a, g, x, f) || l !== null && l.dependencies !== null && Lu(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, x, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, x, f)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = x), n.props = a, n.state = x, n.context = f, a = p) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), a = !1)
        }
        return n = a, rn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = ra(t, l.child, null, u), t.child = ra(t, null, e, u)) : Ql(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Qt(l, t, u), l
    }

    function Ur(l, t, e, a) {
        return Ya(), t.flags |= 256, Ql(l, t, e, a), t.child
    }
    var ac = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function uc(l) {
        return {
            baseLanes: l,
            cachePool: Ss()
        }
    }

    function nc(l, t, e) {
        return l = l !== null ? l.childLanes & ~e : 0, t && (l |= gt), l
    }

    function Hr(l, t, e) {
        var a = t.pendingProps,
            u = !1,
            n = (t.flags & 128) !== 0,
            i;
        if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Ul.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
            if (cl) {
                if (u ? te(t) : ee(), cl) {
                    var c = El,
                        f;
                    if (f = c) {
                        l: {
                            for (f = c, c = Nt; f.nodeType !== 8;) {
                                if (!c) {
                                    c = null;
                                    break l
                                }
                                if (f = At(f.nextSibling), f === null) {
                                    c = null;
                                    break l
                                }
                            }
                            c = f
                        }
                        c !== null ? (t.memoizedState = {
                            dehydrated: c,
                            treeContext: Ne !== null ? {
                                id: wt,
                                overflow: qt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, f = ut(18, null, null, 0), f.stateNode = c, f.return = t, t.child = f, Jl = t, El = null, f = !0) : f = !1
                    }
                    f || Me(t)
                }
                if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null)) return Xc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
                Gt(t)
            }
            return c = a.children, a = a.fallback, u ? (ee(), u = t.mode, c = on({
                mode: "hidden",
                children: c
            }, u), a = Ee(a, u, e, null), c.return = t, a.return = t, c.sibling = a, t.child = c, u = t.child, u.memoizedState = uc(e), u.childLanes = nc(l, i, e), t.memoizedState = ac, a) : (te(t), ic(t, c))
        }
        if (f = l.memoizedState, f !== null && (c = f.dehydrated, c !== null)) {
            if (n) t.flags & 256 ? (te(t), t.flags &= -257, t = cc(l, t, e)) : t.memoizedState !== null ? (ee(), t.child = l.child, t.flags |= 128, t = null) : (ee(), u = a.fallback, c = t.mode, a = on({
                mode: "visible",
                children: a.children
            }, c), u = Ee(u, c, e, null), u.flags |= 2, a.return = t, u.return = t, a.sibling = u, t.child = a, ra(t, l.child, null, e), a = t.child, a.memoizedState = uc(e), a.childLanes = nc(l, i, e), t.memoizedState = ac, t = u);
            else if (te(t), Xc(c)) {
                if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
                i = y, a = Error(h(419)), a.stack = "", a.digest = i, Ga({
                    value: a,
                    source: null,
                    stack: null
                }), t = cc(l, t, e)
            } else if (Bl || Qa(l, t, e, !1), i = (e & l.childLanes) !== 0, Bl || i) {
                if (i = xl, i !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : Zn(a), a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== f.retryLane)) throw f.retryLane = a, Ie(l, a), st(i, l, a), Nr;
                c.data === "$?" || Nc(), t = cc(l, t, e)
            } else c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, El = At(c.nextSibling), Jl = t, cl = !0, _e = null, Nt = !1, l !== null && (ht[mt++] = wt, ht[mt++] = qt, ht[mt++] = Ne, wt = l.id, qt = l.overflow, Ne = t), t = ic(t, a.children), t.flags |= 4096);
            return t
        }
        return u ? (ee(), u = a.fallback, c = t.mode, f = l.child, y = f.sibling, a = Ht(f, {
            mode: "hidden",
            children: a.children
        }), a.subtreeFlags = f.subtreeFlags & 65011712, y !== null ? u = Ht(y, u) : (u = Ee(u, c, e, null), u.flags |= 2), u.return = t, a.return = t, a.sibling = u, t.child = a, a = u, u = t.child, c = l.child.memoizedState, c === null ? c = uc(e) : (f = c.cachePool, f !== null ? (y = Rl._currentValue, f = f.parent !== y ? {
            parent: y,
            pool: y
        } : f) : f = Ss(), c = {
            baseLanes: c.baseLanes | e,
            cachePool: f
        }), u.memoizedState = c, u.childLanes = nc(l, i, e), t.memoizedState = ac, a) : (te(t), e = l.child, l = e.sibling, e = Ht(e, {
            mode: "visible",
            children: a.children
        }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e)
    }

    function ic(l, t) {
        return t = on({
            mode: "visible",
            children: t
        }, l.mode), t.return = l, l.child = t
    }

    function on(l, t) {
        return l = ut(22, l, null, t), l.lanes = 0, l.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, l
    }

    function cc(l, t, e) {
        return ra(t, l.child, null, e), l = ic(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l
    }

    function wr(l, t, e) {
        l.lanes |= t;
        var a = l.alternate;
        a !== null && (a.lanes |= t), Ni(l.return, t, e)
    }

    function fc(l, t, e, a, u) {
        var n = l.memoizedState;
        n === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: u
        } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = e, n.tailMode = u)
    }

    function qr(l, t, e) {
        var a = t.pendingProps,
            u = a.revealOrder,
            n = a.tail;
        if (Ql(l, t, a.children, e), a = Ul.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
        else {
            if (l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null;) {
                if (l.tag === 13) l.memoizedState !== null && wr(l, e, t);
                else if (l.tag === 19) wr(l, e, t);
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
            a &= 1
        }
        switch (z(Ul, a), u) {
            case "forwards":
                for (e = t.child, u = null; e !== null;) l = e.alternate, l !== null && cn(l) === null && (u = e), e = e.sibling;
                e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), fc(t, !1, u, e, n);
                break;
            case "backwards":
                for (e = null, u = t.child, t.child = null; u !== null;) {
                    if (l = u.alternate, l !== null && cn(l) === null) {
                        t.child = u;
                        break
                    }
                    l = u.sibling, u.sibling = e, e = u, u = l
                }
                fc(t, !0, e, null, n);
                break;
            case "together":
                fc(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Qt(l, t, e) {
        if (l !== null && (t.dependencies = l.dependencies), ce |= t.lanes, (e & t.childLanes) === 0)
            if (l !== null) {
                if (Qa(l, t, e, !1), (e & t.childLanes) === 0) return null
            } else return null;
        if (l !== null && t.child !== l.child) throw Error(h(153));
        if (t.child !== null) {
            for (l = t.child, e = Ht(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null;) l = l.sibling, e = e.sibling = Ht(l, l.pendingProps), e.return = t;
            e.sibling = null
        }
        return t.child
    }

    function sc(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Lu(l)))
    }

    function V0(l, t, e) {
        switch (t.tag) {
            case 3:
                fl(t, t.stateNode.containerInfo), Wt(t, Rl, l.memoizedState.cache), Ya();
                break;
            case 27:
            case 5:
                Ce(t);
                break;
            case 4:
                fl(t, t.stateNode.containerInfo);
                break;
            case 10:
                Wt(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null) return a.dehydrated !== null ? (te(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Hr(l, t, e) : (te(t), l = Qt(l, t, e), l !== null ? l.sibling : null);
                te(t);
                break;
            case 19:
                var u = (l.flags & 128) !== 0;
                if (a = (e & t.childLanes) !== 0, a || (Qa(l, t, e, !1), a = (e & t.childLanes) !== 0), u) {
                    if (a) return qr(l, t, e);
                    t.flags |= 128
                }
                if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), z(Ul, Ul.current), a) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Or(l, t, e);
            case 24:
                Wt(t, Rl, l.memoizedState.cache)
        }
        return Qt(l, t, e)
    }

    function Cr(l, t, e) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps) Bl = !0;
            else {
                if (!sc(l, e) && (t.flags & 128) === 0) return Bl = !1, V0(l, t, e);
                Bl = (l.flags & 131072) !== 0
            }
        else Bl = !1, cl && (t.flags & 1048576) !== 0 && vs(t, Zu, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                l: {
                    l = t.pendingProps;
                    var a = t.elementType,
                        u = a._init;
                    if (a = u(a._payload), t.type = a, typeof a == "function") bi(a) ? (l = Ue(a, l), t.tag = 1, t = Rr(null, t, a, l, e)) : (t.tag = 0, t = ec(null, t, a, l, e));
                    else {
                        if (a != null) {
                            if (u = a.$$typeof, u === zl) {
                                t.tag = 11, t = zr(null, t, a, l, e);
                                break l
                            } else if (u === I) {
                                t.tag = 14, t = _r(null, t, a, l, e);
                                break l
                            }
                        }
                        throw t = jt(a) || a, Error(h(306, t, ""))
                    }
                }
                return t;
            case 0:
                return ec(l, t, t.type, t.pendingProps, e);
            case 1:
                return a = t.type, u = Ue(a, t.pendingProps), Rr(l, t, a, u, e);
            case 3:
                l: {
                    if (fl(t, t.stateNode.containerInfo), l === null) throw Error(h(387));a = t.pendingProps;
                    var n = t.memoizedState;u = n.element,
                    Ri(l, t),
                    ka(t, a, null, e);
                    var i = t.memoizedState;
                    if (a = i.cache, Wt(t, Rl, a), a !== n.cache && zi(t, [Rl], e, !0), Ja(), a = i.element, n.isDehydrated)
                        if (n = {
                                element: a,
                                isDehydrated: !1,
                                cache: i.cache
                            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
                            t = Ur(l, t, a, e);
                            break l
                        } else if (a !== u) {
                        u = dt(Error(h(424)), t), Ga(u), t = Ur(l, t, a, e);
                        break l
                    } else {
                        switch (l = t.stateNode.containerInfo, l.nodeType) {
                            case 9:
                                l = l.body;
                                break;
                            default:
                                l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                        }
                        for (El = At(l.firstChild), Jl = t, cl = !0, _e = null, Nt = !0, e = mr(t, null, a, e), t.child = e; e;) e.flags = e.flags & -3 | 4096, e = e.sibling
                    } else {
                        if (Ya(), a === u) {
                            t = Qt(l, t, e);
                            break l
                        }
                        Ql(l, t, a, e)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return rn(l, t), l === null ? (e = Xo(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : cl || (e = t.type, l = t.pendingProps, a = Nn(Y.current).createElement(e), a[Ll] = t, a[Wl] = l, Zl(a, e, l), Cl(a), t.stateNode = a) : t.memoizedState = Xo(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
            case 27:
                return Ce(t), l === null && cl && (a = t.stateNode = Yo(t.type, t.pendingProps, Y.current), Jl = t, Nt = !0, u = El, oe(t.type) ? (Zc = u, El = At(a.firstChild)) : El = u), Ql(l, t, t.pendingProps.children, e), rn(l, t), l === null && (t.flags |= 4194304), t.child;
            case 5:
                return l === null && cl && ((u = a = El) && (a = xv(a, t.type, t.pendingProps, Nt), a !== null ? (t.stateNode = a, Jl = t, El = At(a.firstChild), Nt = !1, u = !0) : u = !1), u || Me(t)), Ce(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = n.children, Yc(u, n) ? a = null : i !== null && Yc(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = Bi(l, t, C0, null, null, e), yu._currentValue = u), rn(l, t), Ql(l, t, a, e), t.child;
            case 6:
                return l === null && cl && ((l = e = El) && (e = Sv(e, t.pendingProps, Nt), e !== null ? (t.stateNode = e, Jl = t, El = null, l = !0) : l = !1), l || Me(t)), null;
            case 13:
                return Hr(l, t, e);
            case 4:
                return fl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = ra(t, null, a, e) : Ql(l, t, a, e), t.child;
            case 11:
                return zr(l, t, t.type, t.pendingProps, e);
            case 7:
                return Ql(l, t, t.pendingProps, e), t.child;
            case 8:
                return Ql(l, t, t.pendingProps.children, e), t.child;
            case 12:
                return Ql(l, t, t.pendingProps.children, e), t.child;
            case 10:
                return a = t.pendingProps, Wt(t, t.type, a.value), Ql(l, t, a.children, e), t.child;
            case 9:
                return u = t.type._context, a = t.pendingProps.children, De(t), u = Vl(u), a = a(u), t.flags |= 1, Ql(l, t, a, e), t.child;
            case 14:
                return _r(l, t, t.type, t.pendingProps, e);
            case 15:
                return Mr(l, t, t.type, t.pendingProps, e);
            case 19:
                return qr(l, t, e);
            case 31:
                return a = t.pendingProps, e = t.mode, a = {
                    mode: a.mode,
                    children: a.children
                }, l === null ? (e = on(a, e), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Ht(l.child, a), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
            case 22:
                return Or(l, t, e);
            case 24:
                return De(t), a = Vl(Rl), l === null ? (u = Oi(), u === null && (u = xl, n = _i(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = {
                    parent: a,
                    cache: u
                }, ji(t), Wt(t, Rl, u)) : ((l.lanes & e) !== 0 && (Ri(l, t), ka(t, null, null, e), Ja()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = {
                    parent: a,
                    cache: a
                }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Wt(t, Rl, a)) : (a = n.cache, Wt(t, Rl, a), a !== u.cache && zi(t, [Rl], e, !0))), Ql(l, t, t.pendingProps.children, e), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(h(156, t.tag))
    }

    function Xt(l) {
        l.flags |= 4
    }

    function Br(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
        else if (l.flags |= 16777216, !Jo(t)) {
            if (t = yt.current, t !== null && ((nl & 4194048) === nl ? zt !== null : (nl & 62914560) !== nl && (nl & 536870912) === 0 || t !== zt)) throw Va = Di, ps;
            l.flags |= 8192
        }
    }

    function dn(l, t) {
        t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? yf() : 536870912, l.lanes |= t, ha |= t)
    }

    function tu(l, t) {
        if (!cl) switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var e = null; t !== null;) t.alternate !== null && (e = t), t = t.sibling;
                e === null ? l.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = l.tail;
                for (var a = null; e !== null;) e.alternate !== null && (a = e), e = e.sibling;
                a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null
        }
    }

    function Al(l) {
        var t = l.alternate !== null && l.alternate.child === l.child,
            e = 0,
            a = 0;
        if (t)
            for (var u = l.child; u !== null;) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
        else
            for (u = l.child; u !== null;) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
        return l.subtreeFlags |= a, l.childLanes = e, t
    }

    function K0(l, t, e) {
        var a = t.pendingProps;
        switch (Ai(t), t.tag) {
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
                return Al(t), null;
            case 1:
                return Al(t), null;
            case 3:
                return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(Rl), $l(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (Ba(t) ? Xt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ys())), Al(t), null;
            case 26:
                return e = t.memoizedState, l === null ? (Xt(t), e !== null ? (Al(t), Br(t, e)) : (Al(t), t.flags &= -16777217)) : e ? e !== l.memoizedState ? (Xt(t), Al(t), Br(t, e)) : (Al(t), t.flags &= -16777217) : (l.memoizedProps !== a && Xt(t), Al(t), t.flags &= -16777217), null;
            case 27:
                ge(t), e = Y.current;
                var u = t.type;
                if (l !== null && t.stateNode != null) l.memoizedProps !== a && Xt(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(h(166));
                        return Al(t), null
                    }
                    l = D.current, Ba(t) ? hs(t) : (l = Yo(u, a, e), t.stateNode = l, Xt(t))
                }
                return Al(t), null;
            case 5:
                if (ge(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Xt(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(h(166));
                        return Al(t), null
                    }
                    if (l = D.current, Ba(t)) hs(t);
                    else {
                        switch (u = Nn(Y.current), l) {
                            case 1:
                                l = u.createElementNS("http://www.w3.org/2000/svg", e);
                                break;
                            case 2:
                                l = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                                break;
                            default:
                                switch (e) {
                                    case "svg":
                                        l = u.createElementNS("http://www.w3.org/2000/svg", e);
                                        break;
                                    case "math":
                                        l = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                                        break;
                                    case "script":
                                        l = u.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                                        break;
                                    case "select":
                                        l = typeof a.is == "string" ? u.createElement("select", {
                                            is: a.is
                                        }) : u.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                                        break;
                                    default:
                                        l = typeof a.is == "string" ? u.createElement(e, {
                                            is: a.is
                                        }) : u.createElement(e)
                                }
                        }
                        l[Ll] = t, l[Wl] = a;
                        l: for (u = t.child; u !== null;) {
                            if (u.tag === 5 || u.tag === 6) l.appendChild(u.stateNode);
                            else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                                u.child.return = u, u = u.child;
                                continue
                            }
                            if (u === t) break l;
                            for (; u.sibling === null;) {
                                if (u.return === null || u.return === t) break l;
                                u = u.return
                            }
                            u.sibling.return = u.return, u = u.sibling
                        }
                        t.stateNode = l;
                        l: switch (Zl(l, e, a), e) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l = !!a.autoFocus;
                                break l;
                            case "img":
                                l = !0;
                                break l;
                            default:
                                l = !1
                        }
                        l && Xt(t)
                    }
                }
                return Al(t), t.flags &= -16777217, null;
            case 6:
                if (l && t.stateNode != null) l.memoizedProps !== a && Xt(t);
                else {
                    if (typeof a != "string" && t.stateNode === null) throw Error(h(166));
                    if (l = Y.current, Ba(t)) {
                        if (l = t.stateNode, e = t.memoizedProps, a = null, u = Jl, u !== null) switch (u.tag) {
                            case 27:
                            case 5:
                                a = u.memoizedProps
                        }
                        l[Ll] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Ro(l.nodeValue, e)), l || Me(t)
                    } else l = Nn(l).createTextNode(a), l[Ll] = t, t.stateNode = l
                }
                return Al(t), null;
            case 13:
                if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                    if (u = Ba(t), a !== null && a.dehydrated !== null) {
                        if (l === null) {
                            if (!u) throw Error(h(318));
                            if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(h(317));
                            u[Ll] = t
                        } else Ya(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Al(t), u = !1
                    } else u = ys(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
                    if (!u) return t.flags & 256 ? (Gt(t), t) : (Gt(t), null)
                }
                if (Gt(t), (t.flags & 128) !== 0) return t.lanes = e, t;
                if (e = a !== null, l = l !== null && l.memoizedState !== null, e) {
                    a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
                    var n = null;
                    a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)
                }
                return e !== l && e && (t.child.flags |= 8192), dn(t, t.updateQueue), Al(t), null;
            case 4:
                return $l(), l === null && Hc(t.stateNode.containerInfo), Al(t), null;
            case 10:
                return Bt(t.type), Al(t), null;
            case 19:
                if (b(Ul), u = t.memoizedState, u === null) return Al(t), null;
                if (a = (t.flags & 128) !== 0, n = u.rendering, n === null)
                    if (a) tu(u, !1);
                    else {
                        if (Nl !== 0 || l !== null && (l.flags & 128) !== 0)
                            for (l = t.child; l !== null;) {
                                if (n = cn(l), n !== null) {
                                    for (t.flags |= 128, tu(u, !1), l = n.updateQueue, t.updateQueue = l, dn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null;) ds(e, l), e = e.sibling;
                                    return z(Ul, Ul.current & 1 | 2), t.child
                                }
                                l = l.sibling
                            }
                        u.tail !== null && Et() > mn && (t.flags |= 128, a = !0, tu(u, !1), t.lanes = 4194304)
                    }
                else {
                    if (!a)
                        if (l = cn(n), l !== null) {
                            if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, dn(t, l), tu(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !cl) return Al(t), null
                        } else 2 * Et() - u.renderingStartTime > mn && e !== 536870912 && (t.flags |= 128, a = !0, tu(u, !1), t.lanes = 4194304);
                    u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n)
                }
                return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Et(), t.sibling = null, l = Ul.current, z(Ul, a ? l & 1 | 2 : l & 1), t) : (Al(t), null);
            case 22:
            case 23:
                return Gt(t), qi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Al(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Al(t), e = t.updateQueue, e !== null && dn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && b(je), null;
            case 24:
                return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Bt(Rl), Al(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(h(156, t.tag))
    }

    function J0(l, t) {
        switch (Ai(t), t.tag) {
            case 1:
                return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 3:
                return Bt(Rl), $l(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return ge(t), null;
            case 13:
                if (Gt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
                    if (t.alternate === null) throw Error(h(340));
                    Ya()
                }
                return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 19:
                return b(Ul), null;
            case 4:
                return $l(), null;
            case 10:
                return Bt(t.type), null;
            case 22:
            case 23:
                return Gt(t), qi(), l !== null && b(je), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 24:
                return Bt(Rl), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Yr(l, t) {
        switch (Ai(t), t.tag) {
            case 3:
                Bt(Rl), $l();
                break;
            case 26:
            case 27:
            case 5:
                ge(t);
                break;
            case 4:
                $l();
                break;
            case 13:
                Gt(t);
                break;
            case 19:
                b(Ul);
                break;
            case 10:
                Bt(t.type);
                break;
            case 22:
            case 23:
                Gt(t), qi(), l !== null && b(je);
                break;
            case 24:
                Bt(Rl)
        }
    }

    function eu(l, t) {
        try {
            var e = t.updateQueue,
                a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                e = u;
                do {
                    if ((e.tag & l) === l) {
                        a = void 0;
                        var n = e.create,
                            i = e.inst;
                        a = n(), i.destroy = a
                    }
                    e = e.next
                } while (e !== u)
            }
        } catch (c) {
            bl(t, t.return, c)
        }
    }

    function ae(l, t, e) {
        try {
            var a = t.updateQueue,
                u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var n = u.next;
                a = n;
                do {
                    if ((a.tag & l) === l) {
                        var i = a.inst,
                            c = i.destroy;
                        if (c !== void 0) {
                            i.destroy = void 0, u = t;
                            var f = e,
                                y = c;
                            try {
                                y()
                            } catch (p) {
                                bl(u, f, p)
                            }
                        }
                    }
                    a = a.next
                } while (a !== n)
            }
        } catch (p) {
            bl(t, t.return, p)
        }
    }

    function Gr(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var e = l.stateNode;
            try {
                _s(t, e)
            } catch (a) {
                bl(l, l.return, a)
            }
        }
    }

    function Qr(l, t, e) {
        e.props = Ue(l.type, l.memoizedProps), e.state = l.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            bl(l, t, a)
        }
    }

    function au(l, t) {
        try {
            var e = l.ref;
            if (e !== null) {
                switch (l.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = l.stateNode;
                        break;
                    case 30:
                        a = l.stateNode;
                        break;
                    default:
                        a = l.stateNode
                }
                typeof e == "function" ? l.refCleanup = e(a) : e.current = a
            }
        } catch (u) {
            bl(l, t, u)
        }
    }

    function _t(l, t) {
        var e = l.ref,
            a = l.refCleanup;
        if (e !== null)
            if (typeof a == "function") try {
                a()
            } catch (u) {
                bl(l, t, u)
            } finally {
                l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null)
            } else if (typeof e == "function") try {
                e(null)
            } catch (u) {
                bl(l, t, u)
            } else e.current = null
    }

    function Xr(l) {
        var t = l.type,
            e = l.memoizedProps,
            a = l.stateNode;
        try {
            l: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    e.autoFocus && a.focus();
                    break l;
                case "img":
                    e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
            }
        }
        catch (u) {
            bl(l, l.return, u)
        }
    }

    function rc(l, t, e) {
        try {
            var a = l.stateNode;
            hv(a, l.type, e, t), a[Wl] = t
        } catch (u) {
            bl(l, l.return, u)
        }
    }

    function Zr(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && oe(l.type) || l.tag === 4
    }

    function oc(l) {
        l: for (;;) {
            for (; l.sibling === null;) {
                if (l.return === null || Zr(l.return)) return null;
                l = l.return
            }
            for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
                if (l.tag === 27 && oe(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
                l.child.return = l, l = l.child
            }
            if (!(l.flags & 2)) return l.stateNode
        }
    }

    function dc(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = En));
        else if (a !== 4 && (a === 27 && oe(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
            for (dc(l, t, e), l = l.sibling; l !== null;) dc(l, t, e), l = l.sibling
    }

    function vn(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
        else if (a !== 4 && (a === 27 && oe(l.type) && (e = l.stateNode), l = l.child, l !== null))
            for (vn(l, t, e), l = l.sibling; l !== null;) vn(l, t, e), l = l.sibling
    }

    function Lr(l) {
        var t = l.stateNode,
            e = l.memoizedProps;
        try {
            for (var a = l.type, u = t.attributes; u.length;) t.removeAttributeNode(u[0]);
            Zl(t, a, e), t[Ll] = l, t[Wl] = e
        } catch (n) {
            bl(l, l.return, n)
        }
    }
    var Zt = !1,
        Ml = !1,
        vc = !1,
        Vr = typeof WeakSet == "function" ? WeakSet : Set,
        Yl = null;

    function k0(l, t) {
        if (l = l.containerInfo, Cc = jn, l = es(l), oi(l)) {
            if ("selectionStart" in l) var e = {
                start: l.selectionStart,
                end: l.selectionEnd
            };
            else l: {
                e = (e = l.ownerDocument) && e.defaultView || window;
                var a = e.getSelection && e.getSelection();
                if (a && a.rangeCount !== 0) {
                    e = a.anchorNode;
                    var u = a.anchorOffset,
                        n = a.focusNode;
                    a = a.focusOffset;
                    try {
                        e.nodeType, n.nodeType
                    } catch {
                        e = null;
                        break l
                    }
                    var i = 0,
                        c = -1,
                        f = -1,
                        y = 0,
                        p = 0,
                        E = l,
                        g = null;
                    t: for (;;) {
                        for (var x; E !== e || u !== 0 && E.nodeType !== 3 || (c = i + u), E !== n || a !== 0 && E.nodeType !== 3 || (f = i + a), E.nodeType === 3 && (i += E.nodeValue.length), (x = E.firstChild) !== null;) g = E, E = x;
                        for (;;) {
                            if (E === l) break t;
                            if (g === e && ++y === u && (c = i), g === n && ++p === a && (f = i), (x = E.nextSibling) !== null) break;
                            E = g, g = E.parentNode
                        }
                        E = x
                    }
                    e = c === -1 || f === -1 ? null : {
                        start: c,
                        end: f
                    }
                } else e = null
            }
            e = e || {
                start: 0,
                end: 0
            }
        } else e = null;
        for (Bc = {
                focusedElem: l,
                selectionRange: e
            }, jn = !1, Yl = t; Yl !== null;)
            if (t = Yl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null) l.return = t, Yl = l;
            else
                for (; Yl !== null;) {
                    switch (t = Yl, n = t.alternate, l = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((l & 1024) !== 0 && n !== null) {
                                l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                                try {
                                    var V = Ue(e.type, u, e.elementType === e.type);
                                    l = a.getSnapshotBeforeUpdate(V, n), a.__reactInternalSnapshotBeforeUpdate = l
                                } catch (X) {
                                    bl(e, e.return, X)
                                }
                            }
                            break;
                        case 3:
                            if ((l & 1024) !== 0) {
                                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) Qc(l);
                                else if (e === 1) switch (l.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Qc(l);
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
                            if ((l & 1024) !== 0) throw Error(h(163))
                    }
                    if (l = t.sibling, l !== null) {
                        l.return = t.return, Yl = l;
                        break
                    }
                    Yl = t.return
                }
    }

    function Kr(l, t, e) {
        var a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ue(l, e), a & 4 && eu(5, e);
                break;
            case 1:
                if (ue(l, e), a & 4)
                    if (l = e.stateNode, t === null) try {
                        l.componentDidMount()
                    } catch (i) {
                        bl(e, e.return, i)
                    } else {
                        var u = Ue(e.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate)
                        } catch (i) {
                            bl(e, e.return, i)
                        }
                    }
                a & 64 && Gr(e), a & 512 && au(e, e.return);
                break;
            case 3:
                if (ue(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
                    if (t = null, e.child !== null) switch (e.child.tag) {
                        case 27:
                        case 5:
                            t = e.child.stateNode;
                            break;
                        case 1:
                            t = e.child.stateNode
                    }
                    try {
                        _s(l, t)
                    } catch (i) {
                        bl(e, e.return, i)
                    }
                }
                break;
            case 27:
                t === null && a & 4 && Lr(e);
            case 26:
            case 5:
                ue(l, e), t === null && a & 4 && Xr(e), a & 512 && au(e, e.return);
                break;
            case 12:
                ue(l, e);
                break;
            case 13:
                ue(l, e), a & 4 && $r(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = av.bind(null, e), pv(l, e))));
                break;
            case 22:
                if (a = e.memoizedState !== null || Zt, !a) {
                    t = t !== null && t.memoizedState !== null || Ml, u = Zt;
                    var n = Ml;
                    Zt = a, (Ml = t) && !n ? ne(l, e, (e.subtreeFlags & 8772) !== 0) : ue(l, e), Zt = u, Ml = n
                }
                break;
            case 30:
                break;
            default:
                ue(l, e)
        }
    }

    function Jr(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null, Jr(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null
    }
    var Sl = null,
        Il = !1;

    function Lt(l, t, e) {
        for (e = e.child; e !== null;) kr(l, t, e), e = e.sibling
    }

    function kr(l, t, e) {
        if (tt && typeof tt.onCommitFiberUnmount == "function") try {
            tt.onCommitFiberUnmount(Ea, e)
        } catch {}
        switch (e.tag) {
            case 26:
                Ml || _t(e, t), Lt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
                break;
            case 27:
                Ml || _t(e, t);
                var a = Sl,
                    u = Il;
                oe(e.type) && (Sl = e.stateNode, Il = !1), Lt(l, t, e), du(e.stateNode), Sl = a, Il = u;
                break;
            case 5:
                Ml || _t(e, t);
            case 6:
                if (a = Sl, u = Il, Sl = null, Lt(l, t, e), Sl = a, Il = u, Sl !== null)
                    if (Il) try {
                        (Sl.nodeType === 9 ? Sl.body : Sl.nodeName === "HTML" ? Sl.ownerDocument.body : Sl).removeChild(e.stateNode)
                    } catch (n) {
                        bl(e, t, n)
                    } else try {
                        Sl.removeChild(e.stateNode)
                    } catch (n) {
                        bl(e, t, n)
                    }
                break;
            case 18:
                Sl !== null && (Il ? (l = Sl, Co(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Su(l)) : Co(Sl, e.stateNode));
                break;
            case 4:
                a = Sl, u = Il, Sl = e.stateNode.containerInfo, Il = !0, Lt(l, t, e), Sl = a, Il = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Ml || ae(2, e, t), Ml || ae(4, e, t), Lt(l, t, e);
                break;
            case 1:
                Ml || (_t(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && Qr(e, t, a)), Lt(l, t, e);
                break;
            case 21:
                Lt(l, t, e);
                break;
            case 22:
                Ml = (a = Ml) || e.memoizedState !== null, Lt(l, t, e), Ml = a;
                break;
            default:
                Lt(l, t, e)
        }
    }

    function $r(l, t) {
        if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
            Su(l)
        } catch (e) {
            bl(t, t.return, e)
        }
    }

    function $0(l) {
        switch (l.tag) {
            case 13:
            case 19:
                var t = l.stateNode;
                return t === null && (t = l.stateNode = new Vr), t;
            case 22:
                return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Vr), t;
            default:
                throw Error(h(435, l.tag))
        }
    }

    function hc(l, t) {
        var e = $0(l);
        t.forEach(function(a) {
            var u = uv.bind(null, l, a);
            e.has(a) || (e.add(a), a.then(u, u))
        })
    }

    function nt(l, t) {
        var e = t.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var u = e[a],
                    n = l,
                    i = t,
                    c = i;
                l: for (; c !== null;) {
                    switch (c.tag) {
                        case 27:
                            if (oe(c.type)) {
                                Sl = c.stateNode, Il = !1;
                                break l
                            }
                            break;
                        case 5:
                            Sl = c.stateNode, Il = !1;
                            break l;
                        case 3:
                        case 4:
                            Sl = c.stateNode.containerInfo, Il = !0;
                            break l
                    }
                    c = c.return
                }
                if (Sl === null) throw Error(h(160));
                kr(n, i, u), Sl = null, Il = !1, n = u.alternate, n !== null && (n.return = null), u.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) Wr(t, l), t = t.sibling
    }
    var pt = null;

    function Wr(l, t) {
        var e = l.alternate,
            a = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                nt(t, l), it(l), a & 4 && (ae(3, l, l.return), eu(3, l), ae(5, l, l.return));
                break;
            case 1:
                nt(t, l), it(l), a & 512 && (Ml || e === null || _t(e, e.return)), a & 64 && Zt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
                break;
            case 26:
                var u = pt;
                if (nt(t, l), it(l), a & 512 && (Ml || e === null || _t(e, e.return)), a & 4) {
                    var n = e !== null ? e.memoizedState : null;
                    if (a = l.memoizedState, e === null)
                        if (a === null)
                            if (l.stateNode === null) {
                                l: {
                                    a = l.type,
                                    e = l.memoizedProps,
                                    u = u.ownerDocument || u;t: switch (a) {
                                        case "title":
                                            n = u.getElementsByTagName("title")[0], (!n || n[_a] || n[Ll] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), Zl(n, a, e), n[Ll] = l, Cl(n), a = n;
                                            break l;
                                        case "link":
                                            var i = Vo("link", "href", u).get(a + (e.href || ""));
                                            if (i) {
                                                for (var c = 0; c < i.length; c++)
                                                    if (n = i[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                        i.splice(c, 1);
                                                        break t
                                                    }
                                            }
                                            n = u.createElement(a), Zl(n, a, e), u.head.appendChild(n);
                                            break;
                                        case "meta":
                                            if (i = Vo("meta", "content", u).get(a + (e.content || ""))) {
                                                for (c = 0; c < i.length; c++)
                                                    if (n = i[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                        i.splice(c, 1);
                                                        break t
                                                    }
                                            }
                                            n = u.createElement(a), Zl(n, a, e), u.head.appendChild(n);
                                            break;
                                        default:
                                            throw Error(h(468, a))
                                    }
                                    n[Ll] = l,
                                    Cl(n),
                                    a = n
                                }
                                l.stateNode = a
                            }
                    else Ko(u, l.type, l.stateNode);
                    else l.stateNode = Lo(u, a, l.memoizedProps);
                    else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? Ko(u, l.type, l.stateNode) : Lo(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && rc(l, l.memoizedProps, e.memoizedProps)
                }
                break;
            case 27:
                nt(t, l), it(l), a & 512 && (Ml || e === null || _t(e, e.return)), e !== null && a & 4 && rc(l, l.memoizedProps, e.memoizedProps);
                break;
            case 5:
                if (nt(t, l), it(l), a & 512 && (Ml || e === null || _t(e, e.return)), l.flags & 32) {
                    u = l.stateNode;
                    try {
                        Ke(u, "")
                    } catch (x) {
                        bl(l, l.return, x)
                    }
                }
                a & 4 && l.stateNode != null && (u = l.memoizedProps, rc(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (vc = !0);
                break;
            case 6:
                if (nt(t, l), it(l), a & 4) {
                    if (l.stateNode === null) throw Error(h(162));
                    a = l.memoizedProps, e = l.stateNode;
                    try {
                        e.nodeValue = a
                    } catch (x) {
                        bl(l, l.return, x)
                    }
                }
                break;
            case 3:
                if (Mn = null, u = pt, pt = zn(t.containerInfo), nt(t, l), pt = u, it(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
                    Su(t.containerInfo)
                } catch (x) {
                    bl(l, l.return, x)
                }
                vc && (vc = !1, Fr(l));
                break;
            case 4:
                a = pt, pt = zn(l.stateNode.containerInfo), nt(t, l), it(l), pt = a;
                break;
            case 12:
                nt(t, l), it(l);
                break;
            case 13:
                nt(t, l), it(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Sc = Et()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hc(l, a)));
                break;
            case 22:
                u = l.memoizedState !== null;
                var f = e !== null && e.memoizedState !== null,
                    y = Zt,
                    p = Ml;
                if (Zt = y || u, Ml = p || f, nt(t, l), Ml = p, Zt = y, it(l), a & 8192) l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || f || Zt || Ml || He(l)), e = null, t = l;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (e === null) {
                            f = e = t;
                            try {
                                if (n = f.stateNode, u) i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    c = f.stateNode;
                                    var E = f.memoizedProps.style,
                                        g = E != null && E.hasOwnProperty("display") ? E.display : null;
                                    c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim()
                                }
                            } catch (x) {
                                bl(f, f.return, x)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (e === null) {
                            f = t;
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps
                            } catch (x) {
                                bl(f, f.return, x)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === l) break l;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === l) break l;
                        e === t && (e = null), t = t.return
                    }
                    e === t && (e = null), t.sibling.return = t.return, t = t.sibling
                }
                a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, hc(l, e))));
                break;
            case 19:
                nt(t, l), it(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hc(l, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                nt(t, l), it(l)
        }
    }

    function it(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var e, a = l.return; a !== null;) {
                    if (Zr(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null) throw Error(h(160));
                switch (e.tag) {
                    case 27:
                        var u = e.stateNode,
                            n = oc(l);
                        vn(l, n, u);
                        break;
                    case 5:
                        var i = e.stateNode;
                        e.flags & 32 && (Ke(i, ""), e.flags &= -33);
                        var c = oc(l);
                        vn(l, c, i);
                        break;
                    case 3:
                    case 4:
                        var f = e.stateNode.containerInfo,
                            y = oc(l);
                        dc(l, y, f);
                        break;
                    default:
                        throw Error(h(161))
                }
            } catch (p) {
                bl(l, l.return, p)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }

    function Fr(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null;) {
                var t = l;
                Fr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling
            }
    }

    function ue(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) Kr(l, t.alternate, t), t = t.sibling
    }

    function He(l) {
        for (l = l.child; l !== null;) {
            var t = l;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ae(4, t, t.return), He(t);
                    break;
                case 1:
                    _t(t, t.return);
                    var e = t.stateNode;
                    typeof e.componentWillUnmount == "function" && Qr(t, t.return, e), He(t);
                    break;
                case 27:
                    du(t.stateNode);
                case 26:
                case 5:
                    _t(t, t.return), He(t);
                    break;
                case 22:
                    t.memoizedState === null && He(t);
                    break;
                case 30:
                    He(t);
                    break;
                default:
                    He(t)
            }
            l = l.sibling
        }
    }

    function ne(l, t, e) {
        for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var a = t.alternate,
                u = l,
                n = t,
                i = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    ne(u, n, e), eu(4, n);
                    break;
                case 1:
                    if (ne(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
                        u.componentDidMount()
                    } catch (y) {
                        bl(a, a.return, y)
                    }
                    if (a = n, u = a.updateQueue, u !== null) {
                        var c = a.stateNode;
                        try {
                            var f = u.shared.hiddenCallbacks;
                            if (f !== null)
                                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++) zs(f[u], c)
                        } catch (y) {
                            bl(a, a.return, y)
                        }
                    }
                    e && i & 64 && Gr(n), au(n, n.return);
                    break;
                case 27:
                    Lr(n);
                case 26:
                case 5:
                    ne(u, n, e), e && a === null && i & 4 && Xr(n), au(n, n.return);
                    break;
                case 12:
                    ne(u, n, e);
                    break;
                case 13:
                    ne(u, n, e), e && i & 4 && $r(u, n);
                    break;
                case 22:
                    n.memoizedState === null && ne(u, n, e), au(n, n.return);
                    break;
                case 30:
                    break;
                default:
                    ne(u, n, e)
            }
            t = t.sibling
        }
    }

    function mc(l, t) {
        var e = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Xa(e))
    }

    function yc(l, t) {
        l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xa(l))
    }

    function Mt(l, t, e, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Pr(l, t, e, a), t = t.sibling
    }

    function Pr(l, t, e, a) {
        var u = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Mt(l, t, e, a), u & 2048 && eu(9, t);
                break;
            case 1:
                Mt(l, t, e, a);
                break;
            case 3:
                Mt(l, t, e, a), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xa(l)));
                break;
            case 12:
                if (u & 2048) {
                    Mt(l, t, e, a), l = t.stateNode;
                    try {
                        var n = t.memoizedProps,
                            i = n.id,
                            c = n.onPostCommit;
                        typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                    } catch (f) {
                        bl(t, t.return, f)
                    }
                } else Mt(l, t, e, a);
                break;
            case 13:
                Mt(l, t, e, a);
                break;
            case 23:
                break;
            case 22:
                n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Mt(l, t, e, a) : uu(l, t) : n._visibility & 2 ? Mt(l, t, e, a) : (n._visibility |= 2, oa(l, t, e, a, (t.subtreeFlags & 10256) !== 0)), u & 2048 && mc(i, t);
                break;
            case 24:
                Mt(l, t, e, a), u & 2048 && yc(t.alternate, t);
                break;
            default:
                Mt(l, t, e, a)
        }
    }

    function oa(l, t, e, a, u) {
        for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var n = l,
                i = t,
                c = e,
                f = a,
                y = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    oa(n, i, c, f, u), eu(8, i);
                    break;
                case 23:
                    break;
                case 22:
                    var p = i.stateNode;
                    i.memoizedState !== null ? p._visibility & 2 ? oa(n, i, c, f, u) : uu(n, i) : (p._visibility |= 2, oa(n, i, c, f, u)), u && y & 2048 && mc(i.alternate, i);
                    break;
                case 24:
                    oa(n, i, c, f, u), u && y & 2048 && yc(i.alternate, i);
                    break;
                default:
                    oa(n, i, c, f, u)
            }
            t = t.sibling
        }
    }

    function uu(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var e = l,
                    a = t,
                    u = a.flags;
                switch (a.tag) {
                    case 22:
                        uu(e, a), u & 2048 && mc(a.alternate, a);
                        break;
                    case 24:
                        uu(e, a), u & 2048 && yc(a.alternate, a);
                        break;
                    default:
                        uu(e, a)
                }
                t = t.sibling
            }
    }
    var nu = 8192;

    function da(l) {
        if (l.subtreeFlags & nu)
            for (l = l.child; l !== null;) Ir(l), l = l.sibling
    }

    function Ir(l) {
        switch (l.tag) {
            case 26:
                da(l), l.flags & nu && l.memoizedState !== null && Hv(pt, l.memoizedState, l.memoizedProps);
                break;
            case 5:
                da(l);
                break;
            case 3:
            case 4:
                var t = pt;
                pt = zn(l.stateNode.containerInfo), da(l), pt = t;
                break;
            case 22:
                l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = nu, nu = 16777216, da(l), nu = t) : da(l));
                break;
            default:
                da(l)
        }
    }

    function lo(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child, l !== null)) {
            t.child = null;
            do t = l.sibling, l.sibling = null, l = t; while (l !== null)
        }
    }

    function iu(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Yl = a, eo(a, l)
                }
            lo(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;) to(l), l = l.sibling
    }

    function to(l) {
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                iu(l), l.flags & 2048 && ae(9, l, l.return);
                break;
            case 3:
                iu(l);
                break;
            case 12:
                iu(l);
                break;
            case 22:
                var t = l.stateNode;
                l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hn(l)) : iu(l);
                break;
            default:
                iu(l)
        }
    }

    function hn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Yl = a, eo(a, l)
                }
            lo(l)
        }
        for (l = l.child; l !== null;) {
            switch (t = l, t.tag) {
                case 0:
                case 11:
                case 15:
                    ae(8, t, t.return), hn(t);
                    break;
                case 22:
                    e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, hn(t));
                    break;
                default:
                    hn(t)
            }
            l = l.sibling
        }
    }

    function eo(l, t) {
        for (; Yl !== null;) {
            var e = Yl;
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    ae(8, e, t);
                    break;
                case 23:
                case 22:
                    if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                        var a = e.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    Xa(e.memoizedState.cache)
            }
            if (a = e.child, a !== null) a.return = e, Yl = a;
            else l: for (e = l; Yl !== null;) {
                a = Yl;
                var u = a.sibling,
                    n = a.return;
                if (Jr(a), a === e) {
                    Yl = null;
                    break l
                }
                if (u !== null) {
                    u.return = n, Yl = u;
                    break l
                }
                Yl = n
            }
        }
    }
    var W0 = {
            getCacheForType: function(l) {
                var t = Vl(Rl),
                    e = t.data.get(l);
                return e === void 0 && (e = l(), t.data.set(l, e)), e
            }
        },
        F0 = typeof WeakMap == "function" ? WeakMap : Map,
        dl = 0,
        xl = null,
        el = null,
        nl = 0,
        vl = 0,
        ct = null,
        ie = !1,
        va = !1,
        gc = !1,
        Vt = 0,
        Nl = 0,
        ce = 0,
        we = 0,
        bc = 0,
        gt = 0,
        ha = 0,
        cu = null,
        lt = null,
        xc = !1,
        Sc = 0,
        mn = 1 / 0,
        yn = null,
        fe = null,
        Xl = 0,
        se = null,
        ma = null,
        ya = 0,
        pc = 0,
        Ac = null,
        ao = null,
        fu = 0,
        Tc = null;

    function ft() {
        if ((dl & 2) !== 0 && nl !== 0) return nl & -nl;
        if (S.T !== null) {
            var l = aa;
            return l !== 0 ? l : Dc()
        }
        return xf()
    }

    function uo() {
        gt === 0 && (gt = (nl & 536870912) === 0 || cl ? mf() : 536870912);
        var l = yt.current;
        return l !== null && (l.flags |= 32), gt
    }

    function st(l, t, e) {
        (l === xl && (vl === 2 || vl === 9) || l.cancelPendingCommit !== null) && (ga(l, 0), re(l, nl, gt, !1)), za(l, e), ((dl & 2) === 0 || l !== xl) && (l === xl && ((dl & 2) === 0 && (we |= e), Nl === 4 && re(l, nl, gt, !1)), Ot(l))
    }

    function no(l, t, e) {
        if ((dl & 6) !== 0) throw Error(h(327));
        var a = !e && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Na(l, t),
            u = a ? lv(l, t) : zc(l, t, !0),
            n = a;
        do {
            if (u === 0) {
                va && !a && re(l, t, 0, !1);
                break
            } else {
                if (e = l.current.alternate, n && !P0(e)) {
                    u = zc(l, t, !1), n = !1;
                    continue
                }
                if (u === 2) {
                    if (n = t, l.errorRecoveryDisabledLanes & n) var i = 0;
                    else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        t = i;
                        l: {
                            var c = l;u = cu;
                            var f = c.current.memoizedState.isDehydrated;
                            if (f && (ga(c, i).flags |= 256), i = zc(c, i, !1), i !== 2) {
                                if (gc && !f) {
                                    c.errorRecoveryDisabledLanes |= n, we |= n, u = 4;
                                    break l
                                }
                                n = lt, lt = u, n !== null && (lt === null ? lt = n : lt.push.apply(lt, n))
                            }
                            u = i
                        }
                        if (n = !1, u !== 2) continue
                    }
                }
                if (u === 1) {
                    ga(l, 0), re(l, t, 0, !0);
                    break
                }
                l: {
                    switch (a = l, n = u, n) {
                        case 0:
                        case 1:
                            throw Error(h(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            re(a, t, gt, !ie);
                            break l;
                        case 2:
                            lt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(h(329))
                    }
                    if ((t & 62914560) === t && (u = Sc + 300 - Et(), 10 < u)) {
                        if (re(a, t, gt, !ie), zu(a, 0, !0) !== 0) break l;
                        a.timeoutHandle = wo(io.bind(null, a, e, lt, yn, xc, t, gt, we, ha, ie, n, 2, -0, 0), u);
                        break l
                    }
                    io(a, e, lt, yn, xc, t, gt, we, ha, ie, n, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ot(l)
    }

    function io(l, t, e, a, u, n, i, c, f, y, p, E, g, x) {
        if (l.timeoutHandle = -1, E = t.subtreeFlags, (E & 8192 || (E & 16785408) === 16785408) && (mu = {
                stylesheets: null,
                count: 0,
                unsuspend: Uv
            }, Ir(t), E = wv(), E !== null)) {
            l.cancelPendingCommit = E(ho.bind(null, l, t, n, e, a, u, i, c, f, p, 1, g, x)), re(l, n, i, !y);
            return
        }
        ho(l, t, n, e, a, u, i, c, f)
    }

    function P0(l) {
        for (var t = l;;) {
            var e = t.tag;
            if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
                for (var a = 0; a < e.length; a++) {
                    var u = e[a],
                        n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!at(n(), u)) return !1
                    } catch {
                        return !1
                    }
                }
            if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
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

    function re(l, t, e, a) {
        t &= ~bc, t &= ~we, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
        for (var u = t; 0 < u;) {
            var n = 31 - et(u),
                i = 1 << n;
            a[n] = -1, u &= ~i
        }
        e !== 0 && gf(l, e, t)
    }

    function gn() {
        return (dl & 6) === 0 ? (su(0), !1) : !0
    }

    function Ec() {
        if (el !== null) {
            if (vl === 0) var l = el.return;
            else l = el, Ct = Oe = null, Qi(l), sa = null, Ia = 0, l = el;
            for (; l !== null;) Yr(l.alternate, l), l = l.return;
            el = null
        }
    }

    function ga(l, t) {
        var e = l.timeoutHandle;
        e !== -1 && (l.timeoutHandle = -1, yv(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Ec(), xl = l, el = e = Ht(l.current, null), nl = t, vl = 0, ct = null, ie = !1, va = Na(l, t), gc = !1, ha = gt = bc = we = ce = Nl = 0, lt = cu = null, xc = !1, (t & 8) !== 0 && (t |= t & 32);
        var a = l.entangledLanes;
        if (a !== 0)
            for (l = l.entanglements, a &= t; 0 < a;) {
                var u = 31 - et(a),
                    n = 1 << u;
                t |= l[u], a &= ~n
            }
        return Vt = t, Bu(), e
    }

    function co(l, t) {
        ll = null, S.H = an, t === La || t === Ju ? (t = Es(), vl = 3) : t === ps ? (t = Es(), vl = 4) : vl = t === Nr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ct = t, el === null && (Nl = 1, sn(l, dt(t, l.current)))
    }

    function fo() {
        var l = S.H;
        return S.H = an, l === null ? an : l
    }

    function so() {
        var l = S.A;
        return S.A = W0, l
    }

    function Nc() {
        Nl = 4, ie || (nl & 4194048) !== nl && yt.current !== null || (va = !0), (ce & 134217727) === 0 && (we & 134217727) === 0 || xl === null || re(xl, nl, gt, !1)
    }

    function zc(l, t, e) {
        var a = dl;
        dl |= 2;
        var u = fo(),
            n = so();
        (xl !== l || nl !== t) && (yn = null, ga(l, t)), t = !1;
        var i = Nl;
        l: do try {
                if (vl !== 0 && el !== null) {
                    var c = el,
                        f = ct;
                    switch (vl) {
                        case 8:
                            Ec(), i = 6;
                            break l;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            yt.current === null && (t = !0);
                            var y = vl;
                            if (vl = 0, ct = null, ba(l, c, f, y), e && va) {
                                i = 0;
                                break l
                            }
                            break;
                        default:
                            y = vl, vl = 0, ct = null, ba(l, c, f, y)
                    }
                }
                I0(), i = Nl;
                break
            } catch (p) {
                co(l, p)
            }
            while (!0);
            return t && l.shellSuspendCounter++, Ct = Oe = null, dl = a, S.H = u, S.A = n, el === null && (xl = null, nl = 0, Bu()), i
    }

    function I0() {
        for (; el !== null;) ro(el)
    }

    function lv(l, t) {
        var e = dl;
        dl |= 2;
        var a = fo(),
            u = so();
        xl !== l || nl !== t ? (yn = null, mn = Et() + 500, ga(l, t)) : va = Na(l, t);
        l: do try {
                if (vl !== 0 && el !== null) {
                    t = el;
                    var n = ct;
                    t: switch (vl) {
                        case 1:
                            vl = 0, ct = null, ba(l, t, n, 1);
                            break;
                        case 2:
                        case 9:
                            if (As(n)) {
                                vl = 0, ct = null, oo(t);
                                break
                            }
                            t = function() {
                                vl !== 2 && vl !== 9 || xl !== l || (vl = 7), Ot(l)
                            }, n.then(t, t);
                            break l;
                        case 3:
                            vl = 7;
                            break l;
                        case 4:
                            vl = 5;
                            break l;
                        case 7:
                            As(n) ? (vl = 0, ct = null, oo(t)) : (vl = 0, ct = null, ba(l, t, n, 7));
                            break;
                        case 5:
                            var i = null;
                            switch (el.tag) {
                                case 26:
                                    i = el.memoizedState;
                                case 5:
                                case 27:
                                    var c = el;
                                    if (!i || Jo(i)) {
                                        vl = 0, ct = null;
                                        var f = c.sibling;
                                        if (f !== null) el = f;
                                        else {
                                            var y = c.return;
                                            y !== null ? (el = y, bn(y)) : el = null
                                        }
                                        break t
                                    }
                            }
                            vl = 0, ct = null, ba(l, t, n, 5);
                            break;
                        case 6:
                            vl = 0, ct = null, ba(l, t, n, 6);
                            break;
                        case 8:
                            Ec(), Nl = 6;
                            break l;
                        default:
                            throw Error(h(462))
                    }
                }
                tv();
                break
            } catch (p) {
                co(l, p)
            }
            while (!0);
            return Ct = Oe = null, S.H = a, S.A = u, dl = e, el !== null ? 0 : (xl = null, nl = 0, Bu(), Nl)
    }

    function tv() {
        for (; el !== null && !Td();) ro(el)
    }

    function ro(l) {
        var t = Cr(l.alternate, l, Vt);
        l.memoizedProps = l.pendingProps, t === null ? bn(l) : el = t
    }

    function oo(l) {
        var t = l,
            e = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = jr(e, t, t.pendingProps, t.type, void 0, nl);
                break;
            case 11:
                t = jr(e, t, t.pendingProps, t.type.render, t.ref, nl);
                break;
            case 5:
                Qi(t);
            default:
                Yr(e, t), t = el = ds(t, Vt), t = Cr(e, t, Vt)
        }
        l.memoizedProps = l.pendingProps, t === null ? bn(l) : el = t
    }

    function ba(l, t, e, a) {
        Ct = Oe = null, Qi(t), sa = null, Ia = 0;
        var u = t.return;
        try {
            if (L0(l, u, t, e, nl)) {
                Nl = 1, sn(l, dt(e, l.current)), el = null;
                return
            }
        } catch (n) {
            if (u !== null) throw el = u, n;
            Nl = 1, sn(l, dt(e, l.current)), el = null;
            return
        }
        t.flags & 32768 ? (cl || a === 1 ? l = !0 : va || (nl & 536870912) !== 0 ? l = !1 : (ie = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = yt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), vo(t, l)) : bn(t)
    }

    function bn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                vo(t, ie);
                return
            }
            l = t.return;
            var e = K0(t.alternate, t, Vt);
            if (e !== null) {
                el = e;
                return
            }
            if (t = t.sibling, t !== null) {
                el = t;
                return
            }
            el = t = l
        } while (t !== null);
        Nl === 0 && (Nl = 5)
    }

    function vo(l, t) {
        do {
            var e = J0(l.alternate, l);
            if (e !== null) {
                e.flags &= 32767, el = e;
                return
            }
            if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
                el = l;
                return
            }
            el = l = e
        } while (l !== null);
        Nl = 6, el = null
    }

    function ho(l, t, e, a, u, n, i, c, f) {
        l.cancelPendingCommit = null;
        do xn(); while (Xl !== 0);
        if ((dl & 6) !== 0) throw Error(h(327));
        if (t !== null) {
            if (t === l.current) throw Error(h(177));
            if (n = t.lanes | t.childLanes, n |= yi, Ud(l, e, n, i, c, f), l === xl && (el = xl = null, nl = 0), ma = t, se = l, ya = e, pc = n, Ac = u, ao = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, nv(Tu, function() {
                    return xo(), null
                })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                a = S.T, S.T = null, u = j.p, j.p = 2, i = dl, dl |= 4;
                try {
                    k0(l, t, e)
                } finally {
                    dl = i, j.p = u, S.T = a
                }
            }
            Xl = 1, mo(), yo(), go()
        }
    }

    function mo() {
        if (Xl === 1) {
            Xl = 0;
            var l = se,
                t = ma,
                e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
                e = S.T, S.T = null;
                var a = j.p;
                j.p = 2;
                var u = dl;
                dl |= 4;
                try {
                    Wr(t, l);
                    var n = Bc,
                        i = es(l.containerInfo),
                        c = n.focusedElem,
                        f = n.selectionRange;
                    if (i !== c && c && c.ownerDocument && ts(c.ownerDocument.documentElement, c)) {
                        if (f !== null && oi(c)) {
                            var y = f.start,
                                p = f.end;
                            if (p === void 0 && (p = y), "selectionStart" in c) c.selectionStart = y, c.selectionEnd = Math.min(p, c.value.length);
                            else {
                                var E = c.ownerDocument || document,
                                    g = E && E.defaultView || window;
                                if (g.getSelection) {
                                    var x = g.getSelection(),
                                        V = c.textContent.length,
                                        X = Math.min(f.start, V),
                                        gl = f.end === void 0 ? X : Math.min(f.end, V);
                                    !x.extend && X > gl && (i = gl, gl = X, X = i);
                                    var d = ls(c, X),
                                        r = ls(c, gl);
                                    if (d && r && (x.rangeCount !== 1 || x.anchorNode !== d.node || x.anchorOffset !== d.offset || x.focusNode !== r.node || x.focusOffset !== r.offset)) {
                                        var m = E.createRange();
                                        m.setStart(d.node, d.offset), x.removeAllRanges(), X > gl ? (x.addRange(m), x.extend(r.node, r.offset)) : (m.setEnd(r.node, r.offset), x.addRange(m))
                                    }
                                }
                            }
                        }
                        for (E = [], x = c; x = x.parentNode;) x.nodeType === 1 && E.push({
                            element: x,
                            left: x.scrollLeft,
                            top: x.scrollTop
                        });
                        for (typeof c.focus == "function" && c.focus(), c = 0; c < E.length; c++) {
                            var T = E[c];
                            T.element.scrollLeft = T.left, T.element.scrollTop = T.top
                        }
                    }
                    jn = !!Cc, Bc = Cc = null
                } finally {
                    dl = u, j.p = a, S.T = e
                }
            }
            l.current = t, Xl = 2
        }
    }

    function yo() {
        if (Xl === 2) {
            Xl = 0;
            var l = se,
                t = ma,
                e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
                e = S.T, S.T = null;
                var a = j.p;
                j.p = 2;
                var u = dl;
                dl |= 4;
                try {
                    Kr(l, t.alternate, t)
                } finally {
                    dl = u, j.p = a, S.T = e
                }
            }
            Xl = 3
        }
    }

    function go() {
        if (Xl === 4 || Xl === 3) {
            Xl = 0, Ed();
            var l = se,
                t = ma,
                e = ya,
                a = ao;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xl = 5 : (Xl = 0, ma = se = null, bo(l, l.pendingLanes));
            var u = l.pendingLanes;
            if (u === 0 && (fe = null), Ln(e), t = t.stateNode, tt && typeof tt.onCommitFiberRoot == "function") try {
                tt.onCommitFiberRoot(Ea, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (a !== null) {
                t = S.T, u = j.p, j.p = 2, S.T = null;
                try {
                    for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
                        var c = a[i];
                        n(c.value, {
                            componentStack: c.stack
                        })
                    }
                } finally {
                    S.T = t, j.p = u
                }
            }(ya & 3) !== 0 && xn(), Ot(l), u = l.pendingLanes, (e & 4194090) !== 0 && (u & 42) !== 0 ? l === Tc ? fu++ : (fu = 0, Tc = l) : fu = 0, su(0)
        }
    }

    function bo(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Xa(t)))
    }

    function xn(l) {
        return mo(), yo(), go(), xo()
    }

    function xo() {
        if (Xl !== 5) return !1;
        var l = se,
            t = pc;
        pc = 0;
        var e = Ln(ya),
            a = S.T,
            u = j.p;
        try {
            j.p = 32 > e ? 32 : e, S.T = null, e = Ac, Ac = null;
            var n = se,
                i = ya;
            if (Xl = 0, ma = se = null, ya = 0, (dl & 6) !== 0) throw Error(h(331));
            var c = dl;
            if (dl |= 4, to(n.current), Pr(n, n.current, i, e), dl = c, su(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function") try {
                tt.onPostCommitFiberRoot(Ea, n)
            } catch {}
            return !0
        } finally {
            j.p = u, S.T = a, bo(l, t)
        }
    }

    function So(l, t, e) {
        t = dt(e, t), t = tc(l.stateNode, t, 2), l = It(l, t, 2), l !== null && (za(l, 2), Ot(l))
    }

    function bl(l, t, e) {
        if (l.tag === 3) So(l, l, e);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    So(t, l, e);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (fe === null || !fe.has(a))) {
                        l = dt(e, l), e = Tr(2), a = It(t, e, 2), a !== null && (Er(e, a, t, l), za(a, 2), Ot(a));
                        break
                    }
                }
                t = t.return
            }
    }

    function _c(l, t, e) {
        var a = l.pingCache;
        if (a === null) {
            a = l.pingCache = new F0;
            var u = new Set;
            a.set(t, u)
        } else u = a.get(t), u === void 0 && (u = new Set, a.set(t, u));
        u.has(e) || (gc = !0, u.add(e), l = ev.bind(null, l, t, e), t.then(l, l))
    }

    function ev(l, t, e) {
        var a = l.pingCache;
        a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, xl === l && (nl & e) === e && (Nl === 4 || Nl === 3 && (nl & 62914560) === nl && 300 > Et() - Sc ? (dl & 2) === 0 && ga(l, 0) : bc |= e, ha === nl && (ha = 0)), Ot(l)
    }

    function po(l, t) {
        t === 0 && (t = yf()), l = Ie(l, t), l !== null && (za(l, t), Ot(l))
    }

    function av(l) {
        var t = l.memoizedState,
            e = 0;
        t !== null && (e = t.retryLane), po(l, e)
    }

    function uv(l, t) {
        var e = 0;
        switch (l.tag) {
            case 13:
                var a = l.stateNode,
                    u = l.memoizedState;
                u !== null && (e = u.retryLane);
                break;
            case 19:
                a = l.stateNode;
                break;
            case 22:
                a = l.stateNode._retryCache;
                break;
            default:
                throw Error(h(314))
        }
        a !== null && a.delete(t), po(l, e)
    }

    function nv(l, t) {
        return be(l, t)
    }
    var Sn = null,
        xa = null,
        Mc = !1,
        pn = !1,
        Oc = !1,
        qe = 0;

    function Ot(l) {
        l !== xa && l.next === null && (xa === null ? Sn = xa = l : xa = xa.next = l), pn = !0, Mc || (Mc = !0, cv())
    }

    function su(l, t) {
        if (!Oc && pn) {
            Oc = !0;
            do
                for (var e = !1, a = Sn; a !== null;) {
                    if (l !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0) var n = 0;
                        else {
                            var i = a.suspendedLanes,
                                c = a.pingedLanes;
                            n = (1 << 31 - et(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (e = !0, No(a, n))
                    } else n = nl, n = zu(a, a === xl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Na(a, n) || (e = !0, No(a, n));
                    a = a.next
                }
            while (e);
            Oc = !1
        }
    }

    function iv() {
        Ao()
    }

    function Ao() {
        pn = Mc = !1;
        var l = 0;
        qe !== 0 && (mv() && (l = qe), qe = 0);
        for (var t = Et(), e = null, a = Sn; a !== null;) {
            var u = a.next,
                n = To(a, t);
            n === 0 ? (a.next = null, e === null ? Sn = u : e.next = u, u === null && (xa = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (pn = !0)), a = u
        }
        su(l)
    }

    function To(l, t) {
        for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n;) {
            var i = 31 - et(n),
                c = 1 << i,
                f = u[i];
            f === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = Rd(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c
        }
        if (t = xl, e = nl, e = zu(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (vl === 2 || vl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && Qn(a), l.callbackNode = null, l.callbackPriority = 0;
        if ((e & 3) === 0 || Na(l, e)) {
            if (t = e & -e, t === l.callbackPriority) return t;
            switch (a !== null && Qn(a), Ln(e)) {
                case 2:
                case 8:
                    e = vf;
                    break;
                case 32:
                    e = Tu;
                    break;
                case 268435456:
                    e = hf;
                    break;
                default:
                    e = Tu
            }
            return a = Eo.bind(null, l), e = be(e, a), l.callbackPriority = t, l.callbackNode = e, t
        }
        return a !== null && a !== null && Qn(a), l.callbackPriority = 2, l.callbackNode = null, 2
    }

    function Eo(l, t) {
        if (Xl !== 0 && Xl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
        var e = l.callbackNode;
        if (xn() && l.callbackNode !== e) return null;
        var a = nl;
        return a = zu(l, l === xl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (no(l, a, t), To(l, Et()), l.callbackNode != null && l.callbackNode === e ? Eo.bind(null, l) : null)
    }

    function No(l, t) {
        if (xn()) return null;
        no(l, t, !0)
    }

    function cv() {
        gv(function() {
            (dl & 6) !== 0 ? be(df, iv) : Ao()
        })
    }

    function Dc() {
        return qe === 0 && (qe = mf()), qe
    }

    function zo(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ju("" + l)
    }

    function _o(l, t) {
        var e = t.ownerDocument.createElement("input");
        return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l
    }

    function fv(l, t, e, a, u) {
        if (t === "submit" && e && e.stateNode === u) {
            var n = zo((u[Wl] || null).action),
                i = a.submitter;
            i && (t = (t = i[Wl] || null) ? zo(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
            var c = new wu("action", "action", null, a, u);
            l.push({
                event: c,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (qe !== 0) {
                                var f = i ? _o(u, i) : new FormData(u);
                                Wi(e, {
                                    pending: !0,
                                    data: f,
                                    method: u.method,
                                    action: n
                                }, null, f)
                            }
                        } else typeof n == "function" && (c.preventDefault(), f = i ? _o(u, i) : new FormData(u), Wi(e, {
                            pending: !0,
                            data: f,
                            method: u.method,
                            action: n
                        }, n, f))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var jc = 0; jc < mi.length; jc++) {
        var Rc = mi[jc],
            sv = Rc.toLowerCase(),
            rv = Rc[0].toUpperCase() + Rc.slice(1);
        St(sv, "on" + rv)
    }
    St(ns, "onAnimationEnd"), St(is, "onAnimationIteration"), St(cs, "onAnimationStart"), St("dblclick", "onDoubleClick"), St("focusin", "onFocus"), St("focusout", "onBlur"), St(_0, "onTransitionRun"), St(M0, "onTransitionStart"), St(O0, "onTransitionCancel"), St(fs, "onTransitionEnd"), Ze("onMouseEnter", ["mouseout", "mouseover"]), Ze("onMouseLeave", ["mouseout", "mouseover"]), Ze("onPointerEnter", ["pointerout", "pointerover"]), Ze("onPointerLeave", ["pointerout", "pointerover"]), Se("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Se("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Se("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Se("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Se("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Se("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ru = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        ov = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));

    function Mo(l, t) {
        t = (t & 4) !== 0;
        for (var e = 0; e < l.length; e++) {
            var a = l[e],
                u = a.event;
            a = a.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var c = a[i],
                            f = c.instance,
                            y = c.currentTarget;
                        if (c = c.listener, f !== n && u.isPropagationStopped()) break l;
                        n = c, u.currentTarget = y;
                        try {
                            n(u)
                        } catch (p) {
                            fn(p)
                        }
                        u.currentTarget = null, n = f
                    } else
                        for (i = 0; i < a.length; i++) {
                            if (c = a[i], f = c.instance, y = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped()) break l;
                            n = c, u.currentTarget = y;
                            try {
                                n(u)
                            } catch (p) {
                                fn(p)
                            }
                            u.currentTarget = null, n = f
                        }
            }
        }
    }

    function al(l, t) {
        var e = t[Vn];
        e === void 0 && (e = t[Vn] = new Set);
        var a = l + "__bubble";
        e.has(a) || (Oo(t, l, 2, !1), e.add(a))
    }

    function Uc(l, t, e) {
        var a = 0;
        t && (a |= 4), Oo(e, l, a, t)
    }
    var An = "_reactListening" + Math.random().toString(36).slice(2);

    function Hc(l) {
        if (!l[An]) {
            l[An] = !0, pf.forEach(function(e) {
                e !== "selectionchange" && (ov.has(e) || Uc(e, !1, l), Uc(e, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[An] || (t[An] = !0, Uc("selectionchange", !1, t))
        }
    }

    function Oo(l, t, e, a) {
        switch (Io(t)) {
            case 2:
                var u = Bv;
                break;
            case 8:
                u = Yv;
                break;
            default:
                u = kc
        }
        e = u.bind(null, t, e, l), u = void 0, !ei || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, {
            capture: !0,
            passive: u
        }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
            passive: u
        }) : l.addEventListener(t, e, !1)
    }

    function wc(l, t, e, a, u) {
        var n = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (;;) {
            if (a === null) return;
            var i = a.tag;
            if (i === 3 || i === 4) {
                var c = a.stateNode.containerInfo;
                if (c === u) break;
                if (i === 4)
                    for (i = a.return; i !== null;) {
                        var f = i.tag;
                        if ((f === 3 || f === 4) && i.stateNode.containerInfo === u) return;
                        i = i.return
                    }
                for (; c !== null;) {
                    if (i = Ge(c), i === null) return;
                    if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
                        a = n = i;
                        continue l
                    }
                    c = c.parentNode
                }
            }
            a = a.return
        }
        wf(function() {
            var y = n,
                p = li(e),
                E = [];
            l: {
                var g = ss.get(l);
                if (g !== void 0) {
                    var x = wu,
                        V = l;
                    switch (l) {
                        case "keypress":
                            if (Uu(e) === 0) break l;
                        case "keydown":
                        case "keyup":
                            x = n0;
                            break;
                        case "focusin":
                            V = "focus", x = ii;
                            break;
                        case "focusout":
                            V = "blur", x = ii;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            x = ii;
                            break;
                        case "click":
                            if (e.button === 2) break l;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            x = Bf;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            x = Jd;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            x = f0;
                            break;
                        case ns:
                        case is:
                        case cs:
                            x = Wd;
                            break;
                        case fs:
                            x = r0;
                            break;
                        case "scroll":
                        case "scrollend":
                            x = Vd;
                            break;
                        case "wheel":
                            x = d0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            x = Pd;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            x = Gf;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            x = h0
                    }
                    var X = (t & 4) !== 0,
                        gl = !X && (l === "scroll" || l === "scrollend"),
                        d = X ? g !== null ? g + "Capture" : null : g;
                    X = [];
                    for (var r = y, m; r !== null;) {
                        var T = r;
                        if (m = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || m === null || d === null || (T = Oa(r, d), T != null && X.push(ou(r, T, m))), gl) break;
                        r = r.return
                    }
                    0 < X.length && (g = new x(g, V, null, e, p), E.push({
                        event: g,
                        listeners: X
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (g = l === "mouseover" || l === "pointerover", x = l === "mouseout" || l === "pointerout", g && e !== In && (V = e.relatedTarget || e.fromElement) && (Ge(V) || V[Ye])) break l;
                    if ((x || g) && (g = p.window === p ? p : (g = p.ownerDocument) ? g.defaultView || g.parentWindow : window, x ? (V = e.relatedTarget || e.toElement, x = y, V = V ? Ge(V) : null, V !== null && (gl = H(V), X = V.tag, V !== gl || X !== 5 && X !== 27 && X !== 6) && (V = null)) : (x = null, V = y), x !== V)) {
                        if (X = Bf, T = "onMouseLeave", d = "onMouseEnter", r = "mouse", (l === "pointerout" || l === "pointerover") && (X = Gf, T = "onPointerLeave", d = "onPointerEnter", r = "pointer"), gl = x == null ? g : Ma(x), m = V == null ? g : Ma(V), g = new X(T, r + "leave", x, e, p), g.target = gl, g.relatedTarget = m, T = null, Ge(p) === y && (X = new X(d, r + "enter", V, e, p), X.target = m, X.relatedTarget = gl, T = X), gl = T, x && V) t: {
                            for (X = x, d = V, r = 0, m = X; m; m = Sa(m)) r++;
                            for (m = 0, T = d; T; T = Sa(T)) m++;
                            for (; 0 < r - m;) X = Sa(X),
                            r--;
                            for (; 0 < m - r;) d = Sa(d),
                            m--;
                            for (; r--;) {
                                if (X === d || d !== null && X === d.alternate) break t;
                                X = Sa(X), d = Sa(d)
                            }
                            X = null
                        }
                        else X = null;
                        x !== null && Do(E, g, x, X, !1), V !== null && gl !== null && Do(E, gl, V, X, !0)
                    }
                }
                l: {
                    if (g = y ? Ma(y) : window, x = g.nodeName && g.nodeName.toLowerCase(), x === "select" || x === "input" && g.type === "file") var U = kf;
                    else if (Kf(g))
                        if ($f) U = E0;
                        else {
                            U = A0;
                            var tl = p0
                        }
                    else x = g.nodeName,
                    !x || x.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? y && Pn(y.elementType) && (U = kf) : U = T0;
                    if (U && (U = U(l, y))) {
                        Jf(E, U, e, p);
                        break l
                    }
                    tl && tl(l, g, y),
                    l === "focusout" && y && g.type === "number" && y.memoizedProps.value != null && Fn(g, "number", g.value)
                }
                switch (tl = y ? Ma(y) : window, l) {
                    case "focusin":
                        (Kf(tl) || tl.contentEditable === "true") && (We = tl, di = y, Ca = null);
                        break;
                    case "focusout":
                        Ca = di = We = null;
                        break;
                    case "mousedown":
                        vi = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        vi = !1, as(E, e, p);
                        break;
                    case "selectionchange":
                        if (z0) break;
                    case "keydown":
                    case "keyup":
                        as(E, e, p)
                }
                var q;
                if (fi) l: {
                    switch (l) {
                        case "compositionstart":
                            var L = "onCompositionStart";
                            break l;
                        case "compositionend":
                            L = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            L = "onCompositionUpdate";
                            break l
                    }
                    L = void 0
                }
                else $e ? Lf(l, e) && (L = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (L = "onCompositionStart");L && (Qf && e.locale !== "ko" && ($e || L !== "onCompositionStart" ? L === "onCompositionEnd" && $e && (q = qf()) : ($t = p, ai = "value" in $t ? $t.value : $t.textContent, $e = !0)), tl = Tn(y, L), 0 < tl.length && (L = new Yf(L, l, null, e, p), E.push({
                    event: L,
                    listeners: tl
                }), q ? L.data = q : (q = Vf(e), q !== null && (L.data = q)))),
                (q = y0 ? g0(l, e) : b0(l, e)) && (L = Tn(y, "onBeforeInput"), 0 < L.length && (tl = new Yf("onBeforeInput", "beforeinput", null, e, p), E.push({
                    event: tl,
                    listeners: L
                }), tl.data = q)),
                fv(E, l, y, e, p)
            }
            Mo(E, t)
        })
    }

    function ou(l, t, e) {
        return {
            instance: l,
            listener: t,
            currentTarget: e
        }
    }

    function Tn(l, t) {
        for (var e = t + "Capture", a = []; l !== null;) {
            var u = l,
                n = u.stateNode;
            if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Oa(l, e), u != null && a.unshift(ou(l, u, n)), u = Oa(l, t), u != null && a.push(ou(l, u, n))), l.tag === 3) return a;
            l = l.return
        }
        return []
    }

    function Sa(l) {
        if (l === null) return null;
        do l = l.return; while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }

    function Do(l, t, e, a, u) {
        for (var n = t._reactName, i = []; e !== null && e !== a;) {
            var c = e,
                f = c.alternate,
                y = c.stateNode;
            if (c = c.tag, f !== null && f === a) break;
            c !== 5 && c !== 26 && c !== 27 || y === null || (f = y, u ? (y = Oa(e, n), y != null && i.unshift(ou(e, y, f))) : u || (y = Oa(e, n), y != null && i.push(ou(e, y, f)))), e = e.return
        }
        i.length !== 0 && l.push({
            event: t,
            listeners: i
        })
    }
    var dv = /\r\n?/g,
        vv = /\u0000|\uFFFD/g;

    function jo(l) {
        return (typeof l == "string" ? l : "" + l).replace(dv, `
`).replace(vv, "")
    }

    function Ro(l, t) {
        return t = jo(t), jo(l) === t
    }

    function En() {}

    function yl(l, t, e, a, u, n) {
        switch (e) {
            case "children":
                typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ke(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ke(l, "" + a);
                break;
            case "className":
                Mu(l, "class", a);
                break;
            case "tabIndex":
                Mu(l, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Mu(l, e, a);
                break;
            case "style":
                Uf(l, a, n);
                break;
            case "data":
                if (t !== "object") {
                    Mu(l, "data", a);
                    break
                }
            case "src":
            case "href":
                if (a === "" && (t !== "a" || e !== "href")) {
                    l.removeAttribute(e);
                    break
                }
                if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                    l.removeAttribute(e);
                    break
                }
                a = ju("" + a), l.setAttribute(e, a);
                break;
            case "action":
            case "formAction":
                if (typeof a == "function") {
                    l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof n == "function" && (e === "formAction" ? (t !== "input" && yl(l, t, "name", u.name, u, null), yl(l, t, "formEncType", u.formEncType, u, null), yl(l, t, "formMethod", u.formMethod, u, null), yl(l, t, "formTarget", u.formTarget, u, null)) : (yl(l, t, "encType", u.encType, u, null), yl(l, t, "method", u.method, u, null), yl(l, t, "target", u.target, u, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    l.removeAttribute(e);
                    break
                }
                a = ju("" + a), l.setAttribute(e, a);
                break;
            case "onClick":
                a != null && (l.onclick = En);
                break;
            case "onScroll":
                a != null && al("scroll", l);
                break;
            case "onScrollEnd":
                a != null && al("scrollend", l);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(h(61));
                    if (e = a.__html, e != null) {
                        if (u.children != null) throw Error(h(60));
                        l.innerHTML = e
                    }
                }
                break;
            case "multiple":
                l.multiple = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "muted":
                l.muted = a && typeof a != "function" && typeof a != "symbol";
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
                if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                    l.removeAttribute("xlink:href");
                    break
                }
                e = ju("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
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
                a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
                break;
            case "capture":
            case "download":
                a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
                break;
            case "rowSpan":
            case "start":
                a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
                break;
            case "popover":
                al("beforetoggle", l), al("toggle", l), _u(l, "popover", a);
                break;
            case "xlinkActuate":
                Rt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                Rt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                Rt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                Rt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                Rt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                Rt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                _u(l, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Zd.get(e) || e, _u(l, e, a))
        }
    }

    function qc(l, t, e, a, u, n) {
        switch (e) {
            case "style":
                Uf(l, a, n);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(h(61));
                    if (e = a.__html, e != null) {
                        if (u.children != null) throw Error(h(60));
                        l.innerHTML = e
                    }
                }
                break;
            case "children":
                typeof a == "string" ? Ke(l, a) : (typeof a == "number" || typeof a == "bigint") && Ke(l, "" + a);
                break;
            case "onScroll":
                a != null && al("scroll", l);
                break;
            case "onScrollEnd":
                a != null && al("scrollend", l);
                break;
            case "onClick":
                a != null && (l.onclick = En);
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
                if (!Af.hasOwnProperty(e)) l: {
                    if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[Wl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
                        typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
                        break l
                    }
                    e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : _u(l, e, a)
                }
        }
    }

    function Zl(l, t, e) {
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
                al("error", l), al("load", l);
                var a = !1,
                    u = !1,
                    n;
                for (n in e)
                    if (e.hasOwnProperty(n)) {
                        var i = e[n];
                        if (i != null) switch (n) {
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(h(137, t));
                            default:
                                yl(l, t, n, i, e, null)
                        }
                    } u && yl(l, t, "srcSet", e.srcSet, e, null), a && yl(l, t, "src", e.src, e, null);
                return;
            case "input":
                al("invalid", l);
                var c = n = i = u = null,
                    f = null,
                    y = null;
                for (a in e)
                    if (e.hasOwnProperty(a)) {
                        var p = e[a];
                        if (p != null) switch (a) {
                            case "name":
                                u = p;
                                break;
                            case "type":
                                i = p;
                                break;
                            case "checked":
                                f = p;
                                break;
                            case "defaultChecked":
                                y = p;
                                break;
                            case "value":
                                n = p;
                                break;
                            case "defaultValue":
                                c = p;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (p != null) throw Error(h(137, t));
                                break;
                            default:
                                yl(l, t, a, p, e, null)
                        }
                    } Of(l, n, c, f, y, i, u, !1), Ou(l);
                return;
            case "select":
                al("invalid", l), a = i = n = null;
                for (u in e)
                    if (e.hasOwnProperty(u) && (c = e[u], c != null)) switch (u) {
                        case "value":
                            n = c;
                            break;
                        case "defaultValue":
                            i = c;
                            break;
                        case "multiple":
                            a = c;
                        default:
                            yl(l, t, u, c, e, null)
                    }
                t = n, e = i, l.multiple = !!a, t != null ? Ve(l, !!a, t, !1) : e != null && Ve(l, !!a, e, !0);
                return;
            case "textarea":
                al("invalid", l), n = u = a = null;
                for (i in e)
                    if (e.hasOwnProperty(i) && (c = e[i], c != null)) switch (i) {
                        case "value":
                            a = c;
                            break;
                        case "defaultValue":
                            u = c;
                            break;
                        case "children":
                            n = c;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (c != null) throw Error(h(91));
                            break;
                        default:
                            yl(l, t, i, c, e, null)
                    }
                jf(l, a, u, n), Ou(l);
                return;
            case "option":
                for (f in e)
                    if (e.hasOwnProperty(f) && (a = e[f], a != null)) switch (f) {
                        case "selected":
                            l.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            yl(l, t, f, a, e, null)
                    }
                return;
            case "dialog":
                al("beforetoggle", l), al("toggle", l), al("cancel", l), al("close", l);
                break;
            case "iframe":
            case "object":
                al("load", l);
                break;
            case "video":
            case "audio":
                for (a = 0; a < ru.length; a++) al(ru[a], l);
                break;
            case "image":
                al("error", l), al("load", l);
                break;
            case "details":
                al("toggle", l);
                break;
            case "embed":
            case "source":
            case "link":
                al("error", l), al("load", l);
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
                for (y in e)
                    if (e.hasOwnProperty(y) && (a = e[y], a != null)) switch (y) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(h(137, t));
                        default:
                            yl(l, t, y, a, e, null)
                    }
                return;
            default:
                if (Pn(t)) {
                    for (p in e) e.hasOwnProperty(p) && (a = e[p], a !== void 0 && qc(l, t, p, a, e, void 0));
                    return
                }
        }
        for (c in e) e.hasOwnProperty(c) && (a = e[c], a != null && yl(l, t, c, a, e, null))
    }

    function hv(l, t, e, a) {
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
                var u = null,
                    n = null,
                    i = null,
                    c = null,
                    f = null,
                    y = null,
                    p = null;
                for (x in e) {
                    var E = e[x];
                    if (e.hasOwnProperty(x) && E != null) switch (x) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            f = E;
                        default:
                            a.hasOwnProperty(x) || yl(l, t, x, null, a, E)
                    }
                }
                for (var g in a) {
                    var x = a[g];
                    if (E = e[g], a.hasOwnProperty(g) && (x != null || E != null)) switch (g) {
                        case "type":
                            n = x;
                            break;
                        case "name":
                            u = x;
                            break;
                        case "checked":
                            y = x;
                            break;
                        case "defaultChecked":
                            p = x;
                            break;
                        case "value":
                            i = x;
                            break;
                        case "defaultValue":
                            c = x;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (x != null) throw Error(h(137, t));
                            break;
                        default:
                            x !== E && yl(l, t, g, x, a, E)
                    }
                }
                Wn(l, i, c, f, y, p, n, u);
                return;
            case "select":
                x = i = c = g = null;
                for (n in e)
                    if (f = e[n], e.hasOwnProperty(n) && f != null) switch (n) {
                        case "value":
                            break;
                        case "multiple":
                            x = f;
                        default:
                            a.hasOwnProperty(n) || yl(l, t, n, null, a, f)
                    }
                for (u in a)
                    if (n = a[u], f = e[u], a.hasOwnProperty(u) && (n != null || f != null)) switch (u) {
                        case "value":
                            g = n;
                            break;
                        case "defaultValue":
                            c = n;
                            break;
                        case "multiple":
                            i = n;
                        default:
                            n !== f && yl(l, t, u, n, a, f)
                    }
                t = c, e = i, a = x, g != null ? Ve(l, !!e, g, !1) : !!a != !!e && (t != null ? Ve(l, !!e, t, !0) : Ve(l, !!e, e ? [] : "", !1));
                return;
            case "textarea":
                x = g = null;
                for (c in e)
                    if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c)) switch (c) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            yl(l, t, c, null, a, u)
                    }
                for (i in a)
                    if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null)) switch (i) {
                        case "value":
                            g = u;
                            break;
                        case "defaultValue":
                            x = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(h(91));
                            break;
                        default:
                            u !== n && yl(l, t, i, u, a, n)
                    }
                Df(l, g, x);
                return;
            case "option":
                for (var V in e)
                    if (g = e[V], e.hasOwnProperty(V) && g != null && !a.hasOwnProperty(V)) switch (V) {
                        case "selected":
                            l.selected = !1;
                            break;
                        default:
                            yl(l, t, V, null, a, g)
                    }
                for (f in a)
                    if (g = a[f], x = e[f], a.hasOwnProperty(f) && g !== x && (g != null || x != null)) switch (f) {
                        case "selected":
                            l.selected = g && typeof g != "function" && typeof g != "symbol";
                            break;
                        default:
                            yl(l, t, f, g, a, x)
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
                for (var X in e) g = e[X], e.hasOwnProperty(X) && g != null && !a.hasOwnProperty(X) && yl(l, t, X, null, a, g);
                for (y in a)
                    if (g = a[y], x = e[y], a.hasOwnProperty(y) && g !== x && (g != null || x != null)) switch (y) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (g != null) throw Error(h(137, t));
                            break;
                        default:
                            yl(l, t, y, g, a, x)
                    }
                return;
            default:
                if (Pn(t)) {
                    for (var gl in e) g = e[gl], e.hasOwnProperty(gl) && g !== void 0 && !a.hasOwnProperty(gl) && qc(l, t, gl, void 0, a, g);
                    for (p in a) g = a[p], x = e[p], !a.hasOwnProperty(p) || g === x || g === void 0 && x === void 0 || qc(l, t, p, g, a, x);
                    return
                }
        }
        for (var d in e) g = e[d], e.hasOwnProperty(d) && g != null && !a.hasOwnProperty(d) && yl(l, t, d, null, a, g);
        for (E in a) g = a[E], x = e[E], !a.hasOwnProperty(E) || g === x || g == null && x == null || yl(l, t, E, g, a, x)
    }
    var Cc = null,
        Bc = null;

    function Nn(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }

    function Uo(l) {
        switch (l) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Ho(l, t) {
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

    function Yc(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Gc = null;

    function mv() {
        var l = window.event;
        return l && l.type === "popstate" ? l === Gc ? !1 : (Gc = l, !0) : (Gc = null, !1)
    }
    var wo = typeof setTimeout == "function" ? setTimeout : void 0,
        yv = typeof clearTimeout == "function" ? clearTimeout : void 0,
        qo = typeof Promise == "function" ? Promise : void 0,
        gv = typeof queueMicrotask == "function" ? queueMicrotask : typeof qo < "u" ? function(l) {
            return qo.resolve(null).then(l).catch(bv)
        } : wo;

    function bv(l) {
        setTimeout(function() {
            throw l
        })
    }

    function oe(l) {
        return l === "head"
    }

    function Co(l, t) {
        var e = t,
            a = 0,
            u = 0;
        do {
            var n = e.nextSibling;
            if (l.removeChild(e), n && n.nodeType === 8)
                if (e = n.data, e === "/$") {
                    if (0 < a && 8 > a) {
                        e = a;
                        var i = l.ownerDocument;
                        if (e & 1 && du(i.documentElement), e & 2 && du(i.body), e & 4)
                            for (e = i.head, du(e), i = e.firstChild; i;) {
                                var c = i.nextSibling,
                                    f = i.nodeName;
                                i[_a] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = c
                            }
                    }
                    if (u === 0) {
                        l.removeChild(n), Su(t);
                        return
                    }
                    u--
                } else e === "$" || e === "$?" || e === "$!" ? u++ : a = e.charCodeAt(0) - 48;
            else a = 0;
            e = n
        } while (e);
        Su(t)
    }

    function Qc(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var e = t;
            switch (t = t.nextSibling, e.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Qc(e), Kn(e);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (e.rel.toLowerCase() === "stylesheet") continue
            }
            l.removeChild(e)
        }
    }

    function xv(l, t, e, a) {
        for (; l.nodeType === 1;) {
            var u = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break
            } else if (a) {
                if (!l[_a]) switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop")) break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
                        if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence")) break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
                        return l;
                    default:
                        return l
                }
            } else if (t === "input" && l.type === "hidden") {
                var n = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && l.getAttribute("name") === n) return l
            } else return l;
            if (l = At(l.nextSibling), l === null) break
        }
        return null
    }

    function Sv(l, t, e) {
        if (t === "") return null;
        for (; l.nodeType !== 3;)
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = At(l.nextSibling), l === null)) return null;
        return l
    }

    function Xc(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete"
    }

    function pv(l, t) {
        var e = l.ownerDocument;
        if (l.data !== "$?" || e.readyState === "complete") t();
        else {
            var a = function() {
                t(), e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a), l._reactRetry = a
        }
    }

    function At(l) {
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
    var Zc = null;

    function Bo(l) {
        l = l.previousSibling;
        for (var t = 0; l;) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "$" || e === "$!" || e === "$?") {
                    if (t === 0) return l;
                    t--
                } else e === "/$" && t++
            }
            l = l.previousSibling
        }
        return null
    }

    function Yo(l, t, e) {
        switch (t = Nn(e), l) {
            case "html":
                if (l = t.documentElement, !l) throw Error(h(452));
                return l;
            case "head":
                if (l = t.head, !l) throw Error(h(453));
                return l;
            case "body":
                if (l = t.body, !l) throw Error(h(454));
                return l;
            default:
                throw Error(h(451))
        }
    }

    function du(l) {
        for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
        Kn(l)
    }
    var bt = new Map,
        Go = new Set;

    function zn(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var Kt = j.d;
    j.d = {
        f: Av,
        r: Tv,
        D: Ev,
        C: Nv,
        L: zv,
        m: _v,
        X: Ov,
        S: Mv,
        M: Dv
    };

    function Av() {
        var l = Kt.f(),
            t = gn();
        return l || t
    }

    function Tv(l) {
        var t = Qe(l);
        t !== null && t.tag === 5 && t.type === "form" ? nr(t) : Kt.r(l)
    }
    var pa = typeof document > "u" ? null : document;

    function Qo(l, t, e) {
        var a = pa;
        if (a && typeof t == "string" && t) {
            var u = ot(t);
            u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), Go.has(u) || (Go.add(u), l = {
                rel: l,
                crossOrigin: e,
                href: t
            }, a.querySelector(u) === null && (t = a.createElement("link"), Zl(t, "link", l), Cl(t), a.head.appendChild(t)))
        }
    }

    function Ev(l) {
        Kt.D(l), Qo("dns-prefetch", l, null)
    }

    function Nv(l, t) {
        Kt.C(l, t), Qo("preconnect", l, t)
    }

    function zv(l, t, e) {
        Kt.L(l, t, e);
        var a = pa;
        if (a && l && t) {
            var u = 'link[rel="preload"][as="' + ot(t) + '"]';
            t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + ot(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + ot(e.imageSizes) + '"]')) : u += '[href="' + ot(l) + '"]';
            var n = u;
            switch (t) {
                case "style":
                    n = Aa(l);
                    break;
                case "script":
                    n = Ta(l)
            }
            bt.has(n) || (l = M({
                rel: "preload",
                href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                as: t
            }, e), bt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(vu(n)) || t === "script" && a.querySelector(hu(n)) || (t = a.createElement("link"), Zl(t, "link", l), Cl(t), a.head.appendChild(t)))
        }
    }

    function _v(l, t) {
        Kt.m(l, t);
        var e = pa;
        if (e && l) {
            var a = t && typeof t.as == "string" ? t.as : "script",
                u = 'link[rel="modulepreload"][as="' + ot(a) + '"][href="' + ot(l) + '"]',
                n = u;
            switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    n = Ta(l)
            }
            if (!bt.has(n) && (l = M({
                    rel: "modulepreload",
                    href: l
                }, t), bt.set(n, l), e.querySelector(u) === null)) {
                switch (a) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (e.querySelector(hu(n))) return
                }
                a = e.createElement("link"), Zl(a, "link", l), Cl(a), e.head.appendChild(a)
            }
        }
    }

    function Mv(l, t, e) {
        Kt.S(l, t, e);
        var a = pa;
        if (a && l) {
            var u = Xe(a).hoistableStyles,
                n = Aa(l);
            t = t || "default";
            var i = u.get(n);
            if (!i) {
                var c = {
                    loading: 0,
                    preload: null
                };
                if (i = a.querySelector(vu(n))) c.loading = 5;
                else {
                    l = M({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, e), (e = bt.get(n)) && Lc(l, e);
                    var f = i = a.createElement("link");
                    Cl(f), Zl(f, "link", l), f._p = new Promise(function(y, p) {
                        f.onload = y, f.onerror = p
                    }), f.addEventListener("load", function() {
                        c.loading |= 1
                    }), f.addEventListener("error", function() {
                        c.loading |= 2
                    }), c.loading |= 4, _n(i, t, a)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: c
                }, u.set(n, i)
            }
        }
    }

    function Ov(l, t) {
        Kt.X(l, t);
        var e = pa;
        if (e && l) {
            var a = Xe(e).hoistableScripts,
                u = Ta(l),
                n = a.get(u);
            n || (n = e.querySelector(hu(u)), n || (l = M({
                src: l,
                async: !0
            }, t), (t = bt.get(u)) && Vc(l, t), n = e.createElement("script"), Cl(n), Zl(n, "link", l), e.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, a.set(u, n))
        }
    }

    function Dv(l, t) {
        Kt.M(l, t);
        var e = pa;
        if (e && l) {
            var a = Xe(e).hoistableScripts,
                u = Ta(l),
                n = a.get(u);
            n || (n = e.querySelector(hu(u)), n || (l = M({
                src: l,
                async: !0,
                type: "module"
            }, t), (t = bt.get(u)) && Vc(l, t), n = e.createElement("script"), Cl(n), Zl(n, "link", l), e.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, a.set(u, n))
        }
    }

    function Xo(l, t, e, a) {
        var u = (u = Y.current) ? zn(u) : null;
        if (!u) throw Error(h(446));
        switch (l) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Aa(e.href), e = Xe(u).hoistableStyles, a = e.get(t), a || (a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, e.set(t, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                    l = Aa(e.href);
                    var n = Xe(u).hoistableStyles,
                        i = n.get(l);
                    if (i || (u = u.ownerDocument || u, i = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, n.set(l, i), (n = u.querySelector(vu(l))) && !n._p && (i.instance = n, i.state.loading = 5), bt.has(l) || (e = {
                            rel: "preload",
                            as: "style",
                            href: e.href,
                            crossOrigin: e.crossOrigin,
                            integrity: e.integrity,
                            media: e.media,
                            hrefLang: e.hrefLang,
                            referrerPolicy: e.referrerPolicy
                        }, bt.set(l, e), n || jv(u, l, e, i.state))), t && a === null) throw Error(h(528, ""));
                    return i
                }
                if (t && a !== null) throw Error(h(529, ""));
                return null;
            case "script":
                return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ta(e), e = Xe(u).hoistableScripts, a = e.get(t), a || (a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, e.set(t, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(h(444, l))
        }
    }

    function Aa(l) {
        return 'href="' + ot(l) + '"'
    }

    function vu(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }

    function Zo(l) {
        return M({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }

    function jv(l, t, e, a) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
            return a.loading |= 1
        }), t.addEventListener("error", function() {
            return a.loading |= 2
        }), Zl(t, "link", e), Cl(t), l.head.appendChild(t))
    }

    function Ta(l) {
        return '[src="' + ot(l) + '"]'
    }

    function hu(l) {
        return "script[async]" + l
    }

    function Lo(l, t, e) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var a = l.querySelector('style[data-href~="' + ot(e.href) + '"]');
                if (a) return t.instance = a, Cl(a), a;
                var u = M({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return a = (l.ownerDocument || l).createElement("style"), Cl(a), Zl(a, "style", u), _n(a, e.precedence, l), t.instance = a;
            case "stylesheet":
                u = Aa(e.href);
                var n = l.querySelector(vu(u));
                if (n) return t.state.loading |= 4, t.instance = n, Cl(n), n;
                a = Zo(e), (u = bt.get(u)) && Lc(a, u), n = (l.ownerDocument || l).createElement("link"), Cl(n);
                var i = n;
                return i._p = new Promise(function(c, f) {
                    i.onload = c, i.onerror = f
                }), Zl(n, "link", a), t.state.loading |= 4, _n(n, e.precedence, l), t.instance = n;
            case "script":
                return n = Ta(e.src), (u = l.querySelector(hu(n))) ? (t.instance = u, Cl(u), u) : (a = e, (u = bt.get(n)) && (a = M({}, e), Vc(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Cl(u), Zl(u, "link", a), l.head.appendChild(u), t.instance = u);
            case "void":
                return null;
            default:
                throw Error(h(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, _n(a, e.precedence, l));
        return t.instance
    }

    function _n(l, t, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
            var c = a[i];
            if (c.dataset.precedence === t) n = c;
            else if (n !== u) break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild))
    }

    function Lc(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title)
    }

    function Vc(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity)
    }
    var Mn = null;

    function Vo(l, t, e) {
        if (Mn === null) {
            var a = new Map,
                u = Mn = new Map;
            u.set(e, a)
        } else u = Mn, a = u.get(e), a || (a = new Map, u.set(e, a));
        if (a.has(l)) return a;
        for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
            var n = e[u];
            if (!(n[_a] || n[Ll] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = n.getAttribute(t) || "";
                i = l + i;
                var c = a.get(i);
                c ? c.push(n) : a.set(i, [n])
            }
        }
        return a
    }

    function Ko(l, t, e) {
        l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
    }

    function Rv(l, t, e) {
        if (e === 1 || t.itemProp != null) return !1;
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

    function Jo(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    var mu = null;

    function Uv() {}

    function Hv(l, t, e) {
        if (mu === null) throw Error(h(475));
        var a = mu;
        if (t.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var u = Aa(e.href),
                    n = l.querySelector(vu(u));
                if (n) {
                    l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = On.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, Cl(n);
                    return
                }
                n = l.ownerDocument || l, e = Zo(e), (u = bt.get(u)) && Lc(e, u), n = n.createElement("link"), Cl(n);
                var i = n;
                i._p = new Promise(function(c, f) {
                    i.onload = c, i.onerror = f
                }), Zl(n, "link", e), t.instance = n
            }
            a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = On.bind(a), l.addEventListener("load", t), l.addEventListener("error", t))
        }
    }

    function wv() {
        if (mu === null) throw Error(h(475));
        var l = mu;
        return l.stylesheets && l.count === 0 && Kc(l, l.stylesheets), 0 < l.count ? function(t) {
            var e = setTimeout(function() {
                if (l.stylesheets && Kc(l, l.stylesheets), l.unsuspend) {
                    var a = l.unsuspend;
                    l.unsuspend = null, a()
                }
            }, 6e4);
            return l.unsuspend = t,
                function() {
                    l.unsuspend = null, clearTimeout(e)
                }
        } : null
    }

    function On() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Kc(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null, l()
            }
        }
    }
    var Dn = null;

    function Kc(l, t) {
        l.stylesheets = null, l.unsuspend !== null && (l.count++, Dn = new Map, t.forEach(qv, l), Dn = null, On.call(l))
    }

    function qv(l, t) {
        if (!(t.state.loading & 4)) {
            var e = Dn.get(l);
            if (e) var a = e.get(null);
            else {
                e = new Map, Dn.set(l, e);
                for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                    var i = u[n];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i)
                }
                a && e.set(null, a)
            }
            u = t.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = On.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4
        }
    }
    var yu = {
        $$typeof: k,
        Provider: null,
        Consumer: null,
        _currentValue: Q,
        _currentValue2: Q,
        _threadCount: 0
    };

    function Cv(l, t, e, a, u, n, i, c) {
        this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xn(0), this.hiddenUpdates = Xn(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = new Map
    }

    function ko(l, t, e, a, u, n, i, c, f, y, p, E) {
        return l = new Cv(l, t, e, i, c, f, y, E), t = 1, n === !0 && (t |= 24), n = ut(3, null, null, t), l.current = n, n.stateNode = l, t = _i(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: t
        }, ji(n), l
    }

    function $o(l) {
        return l ? (l = la, l) : la
    }

    function Wo(l, t, e, a, u, n) {
        u = $o(u), a.context === null ? a.context = u : a.pendingContext = u, a = Pt(t), a.payload = {
            element: e
        }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = It(l, a, t), e !== null && (st(e, l, t), Ka(e, l, t))
    }

    function Fo(l, t) {
        if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t
        }
    }

    function Jc(l, t) {
        Fo(l, t), (l = l.alternate) && Fo(l, t)
    }

    function Po(l) {
        if (l.tag === 13) {
            var t = Ie(l, 67108864);
            t !== null && st(t, l, 67108864), Jc(l, 67108864)
        }
    }
    var jn = !0;

    function Bv(l, t, e, a) {
        var u = S.T;
        S.T = null;
        var n = j.p;
        try {
            j.p = 2, kc(l, t, e, a)
        } finally {
            j.p = n, S.T = u
        }
    }

    function Yv(l, t, e, a) {
        var u = S.T;
        S.T = null;
        var n = j.p;
        try {
            j.p = 8, kc(l, t, e, a)
        } finally {
            j.p = n, S.T = u
        }
    }

    function kc(l, t, e, a) {
        if (jn) {
            var u = $c(a);
            if (u === null) wc(l, t, a, Rn, e), ld(l, a);
            else if (Qv(u, l, t, e, a)) a.stopPropagation();
            else if (ld(l, a), t & 4 && -1 < Gv.indexOf(l)) {
                for (; u !== null;) {
                    var n = Qe(u);
                    if (n !== null) switch (n.tag) {
                        case 3:
                            if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                                var i = xe(n.pendingLanes);
                                if (i !== 0) {
                                    var c = n;
                                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i;) {
                                        var f = 1 << 31 - et(i);
                                        c.entanglements[1] |= f, i &= ~f
                                    }
                                    Ot(n), (dl & 6) === 0 && (mn = Et() + 500, su(0))
                                }
                            }
                            break;
                        case 13:
                            c = Ie(n, 2), c !== null && st(c, n, 2), gn(), Jc(n, 2)
                    }
                    if (n = $c(a), n === null && wc(l, t, a, Rn, e), n === u) break;
                    u = n
                }
                u !== null && a.stopPropagation()
            } else wc(l, t, a, null, e)
        }
    }

    function $c(l) {
        return l = li(l), Wc(l)
    }
    var Rn = null;

    function Wc(l) {
        if (Rn = null, l = Ge(l), l !== null) {
            var t = H(l);
            if (t === null) l = null;
            else {
                var e = t.tag;
                if (e === 13) {
                    if (l = C(t), l !== null) return l;
                    l = null
                } else if (e === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else t !== l && (l = null)
            }
        }
        return Rn = l, null
    }

    function Io(l) {
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
                switch (Nd()) {
                    case df:
                        return 2;
                    case vf:
                        return 8;
                    case Tu:
                    case zd:
                        return 32;
                    case hf:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Fc = !1,
        de = null,
        ve = null,
        he = null,
        gu = new Map,
        bu = new Map,
        me = [],
        Gv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function ld(l, t) {
        switch (l) {
            case "focusin":
            case "focusout":
                de = null;
                break;
            case "dragenter":
            case "dragleave":
                ve = null;
                break;
            case "mouseover":
            case "mouseout":
                he = null;
                break;
            case "pointerover":
            case "pointerout":
                gu.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                bu.delete(t.pointerId)
        }
    }

    function xu(l, t, e, a, u, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: n,
            targetContainers: [u]
        }, t !== null && (t = Qe(t), t !== null && Po(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l)
    }

    function Qv(l, t, e, a, u) {
        switch (t) {
            case "focusin":
                return de = xu(de, l, t, e, a, u), !0;
            case "dragenter":
                return ve = xu(ve, l, t, e, a, u), !0;
            case "mouseover":
                return he = xu(he, l, t, e, a, u), !0;
            case "pointerover":
                var n = u.pointerId;
                return gu.set(n, xu(gu.get(n) || null, l, t, e, a, u)), !0;
            case "gotpointercapture":
                return n = u.pointerId, bu.set(n, xu(bu.get(n) || null, l, t, e, a, u)), !0
        }
        return !1
    }

    function td(l) {
        var t = Ge(l.target);
        if (t !== null) {
            var e = H(t);
            if (e !== null) {
                if (t = e.tag, t === 13) {
                    if (t = C(e), t !== null) {
                        l.blockedOn = t, Hd(l.priority, function() {
                            if (e.tag === 13) {
                                var a = ft();
                                a = Zn(a);
                                var u = Ie(e, a);
                                u !== null && st(u, e, a), Jc(e, a)
                            }
                        });
                        return
                    }
                } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }

    function Un(l) {
        if (l.blockedOn !== null) return !1;
        for (var t = l.targetContainers; 0 < t.length;) {
            var e = $c(l.nativeEvent);
            if (e === null) {
                e = l.nativeEvent;
                var a = new e.constructor(e.type, e);
                In = a, e.target.dispatchEvent(a), In = null
            } else return t = Qe(e), t !== null && Po(t), l.blockedOn = e, !1;
            t.shift()
        }
        return !0
    }

    function ed(l, t, e) {
        Un(l) && e.delete(t)
    }

    function Xv() {
        Fc = !1, de !== null && Un(de) && (de = null), ve !== null && Un(ve) && (ve = null), he !== null && Un(he) && (he = null), gu.forEach(ed), bu.forEach(ed)
    }

    function Hn(l, t) {
        l.blockedOn === t && (l.blockedOn = null, Fc || (Fc = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Xv)))
    }
    var wn = null;

    function ad(l) {
        wn !== l && (wn = l, v.unstable_scheduleCallback(v.unstable_NormalPriority, function() {
            wn === l && (wn = null);
            for (var t = 0; t < l.length; t += 3) {
                var e = l[t],
                    a = l[t + 1],
                    u = l[t + 2];
                if (typeof a != "function") {
                    if (Wc(a || e) === null) continue;
                    break
                }
                var n = Qe(e);
                n !== null && (l.splice(t, 3), t -= 3, Wi(n, {
                    pending: !0,
                    data: u,
                    method: e.method,
                    action: a
                }, a, u))
            }
        }))
    }

    function Su(l) {
        function t(f) {
            return Hn(f, l)
        }
        de !== null && Hn(de, l), ve !== null && Hn(ve, l), he !== null && Hn(he, l), gu.forEach(t), bu.forEach(t);
        for (var e = 0; e < me.length; e++) {
            var a = me[e];
            a.blockedOn === l && (a.blockedOn = null)
        }
        for (; 0 < me.length && (e = me[0], e.blockedOn === null);) td(e), e.blockedOn === null && me.shift();
        if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
            for (a = 0; a < e.length; a += 3) {
                var u = e[a],
                    n = e[a + 1],
                    i = u[Wl] || null;
                if (typeof n == "function") i || ad(e);
                else if (i) {
                    var c = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (u = n, i = n[Wl] || null) c = i.formAction;
                        else if (Wc(u) !== null) continue
                    } else c = i.action;
                    typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), ad(e)
                }
            }
    }

    function Pc(l) {
        this._internalRoot = l
    }
    qn.prototype.render = Pc.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null) throw Error(h(409));
        var e = t.current,
            a = ft();
        Wo(e, a, l, t, null, null)
    }, qn.prototype.unmount = Pc.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            Wo(l.current, 2, null, l, null, null), gn(), t[Ye] = null
        }
    };

    function qn(l) {
        this._internalRoot = l
    }
    qn.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = xf();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var e = 0; e < me.length && t !== 0 && t < me[e].priority; e++);
            me.splice(e, 0, l), e === 0 && td(l)
        }
    };
    var ud = w.version;
    if (ud !== "19.1.0") throw Error(h(527, ud, "19.1.0"));
    j.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0) throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
        return l = O(t), l = l !== null ? A(l) : null, l = l === null ? null : l.stateNode, l
    };
    var Zv = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: S,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Cn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Cn.isDisabled && Cn.supportsFiber) try {
            Ea = Cn.inject(Zv), tt = Cn
        } catch {}
    }
    return Au.createRoot = function(l, t) {
        if (!R(l)) throw Error(h(299));
        var e = !1,
            a = "",
            u = xr,
            n = Sr,
            i = pr,
            c = null;
        return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = ko(l, 1, !1, null, null, e, a, u, n, i, c, null), l[Ye] = t.current, Hc(l), new Pc(t)
    }, Au.hydrateRoot = function(l, t, e) {
        if (!R(l)) throw Error(h(299));
        var a = !1,
            u = "",
            n = xr,
            i = Sr,
            c = pr,
            f = null,
            y = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (f = e.unstable_transitionCallbacks), e.formState !== void 0 && (y = e.formState)), t = ko(l, 1, !0, t, e ?? null, a, u, n, i, c, f, y), t.context = $o(null), e = t.current, a = ft(), a = Zn(a), u = Pt(a), u.callback = null, It(e, u, a), e = a, t.current.lanes = e, za(t, e), Ot(t), l[Ye] = t.current, Hc(l), new qn(t)
    }, Au.version = "19.1.0", Au
}
var hd;

function Iv() {
    if (hd) return tf.exports;
    hd = 1;

    function v() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)
        } catch (w) {
            console.error(w)
        }
    }
    return v(), tf.exports = Pv(), tf.exports
}
var l1 = Iv();
const t1 = gd(l1),
    kl = "./asset/player/013_i7d9N/source/01_Which_Path_I_Have_To_Go.mp3",
    e1 = [{
        id: "album13",
        title: "i7d9N",
        artist: "Drama Short Film",
        releaseYear: 2023,
        coverArtUrl: "./asset/photo/i7d9N.jpg",
        description: ":)",
        tracks: [{
            id: "t13-1",
            title: "Which Path I Have To Go",
            duration: "1:06",
            audioSrc: kl
        }, {
            id: "t13-2",
            title: "This Path Is My Home",
            duration: "0:37",
            audioSrc: "./asset/player/013_i7d9N/source/02_This_Path_Is_My_Home.mp3"
        }, {
            id: "t13-3",
            title: "Path Of Choice",
            duration: "4:08",
            audioSrc: "./asset/player/013_i7d9N/source/03_Path_Of_Choice.mp3"
        }, {
            id: "t13-4",
            title: "My Old Path Was Gone",
            duration: "0:28",
            audioSrc: "./asset/player/013_i7d9N/source/04_My_Old_Path_Was_Gone.mp3"
        }, {
            id: "t13-5",
            title: "I Chose This Path",
            duration: "3:08",
            audioSrc: "./asset/player/013_i7d9N/source/05_I_Chose_This_Path.mp3"
        }]
    }, {
        id: "album12",
        title: "Forever Even Further",
        artist: "Just A Music Created When Bored",
        releaseYear: 2023,
        coverArtUrl: "./asset/player/012_ForeverEvenFurther/source/cover.jpg",
        description: ":)",
        tracks: [{
            id: "t12-1",
            title: "Forever Even Further",
            duration: "3:07",
            audioSrc: "./asset/player/012_ForeverEvenFurther/source/ADJ_remake_master002.mp3"
        }]
    }, {
        id: "album11",
        title: "Burger Queen",
        artist: "Action/Comedy",
        releaseYear: 2023,
        coverArtUrl: "./asset/player/011_BQ/source/cover.jpg",
        description: ":)",
        tracks: [{
            id: "t11-1",
            title: "Why Am I Running?",
            duration: "0:47",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M1.mp3"
        }, {
            id: "t11-2",
            title: "Meeting",
            duration: "0:15",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M2b.mp3"
        }, {
            id: "t11-3",
            title: "The Burger Queen Project",
            duration: "0:41",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M3.mp3"
        }, {
            id: "t11-4",
            title: "CAUTION! WET FLOOR",
            duration: "1:02",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M5.mp3"
        }, {
            id: "t11-5",
            title: "The Burger of the Queen",
            duration: "1:08",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M6b.mp3"
        }, {
            id: "t11-6",
            title: "Stairway to Get Lunch",
            duration: "0:24",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M7b.mp3"
        }, {
            id: "t11-7",
            title: "This Is Why I Was Running",
            duration: "0:55",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M9.mp3"
        }, {
            id: "t11-8",
            title: "Yes!! Chef",
            duration: "0:20",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M10.mp3"
        }, {
            id: "t11-9",
            title: "Grilling (not in the short)",
            duration: "0:18",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M11.mp3"
        }, {
            id: "t11-10",
            title: "Some Burger Idea",
            duration: "0:13",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M12.mp3"
        }, {
            id: "t11-11",
            title: "The Taste...sh...Chessburger",
            duration: "0:15",
            audioSrc: "./asset/player/011_BQ/source/BQ_1M13.mp3"
        }]
    }, {
        id: "album10",
        title: "TEEH Escapes Ghosts",
        artist: "Horror short",
        releaseYear: 2023,
        coverArtUrl: "./asset/player/010_teeh/source/cover.jpeg",
        description: ":)",
        tracks: [{
            id: "t10-1",
            title: "Professor TEEH hunting the ghosts but no one escaped.",
            duration: "3:06",
            audioSrc: "./asset/player/010_teeh/source/teeh.mp3"
        }]
    }, {
        id: "album9",
        title: "Beautiful Cars",
        artist: "Just a music made when bored",
        releaseYear: 2023,
        coverArtUrl: "./asset/player/009_beatifulCats/source/cover.png",
        description: ":)",
        tracks: [{
            id: "t9-1",
            title: "Beautiful Cars",
            duration: "0:33",
            audioSrc: "./asset/player/009_beatifulCats/source/Pressured_cats.mp3"
        }]
    }, {
        id: "album8",
        title: "Mookrata",
        artist: "Romantic/Thriller",
        releaseYear: 2022,
        coverArtUrl: "./asset/player/008_Mookrata/source/cover.jpg",
        description: ":)",
        tracks: [{
            id: "t8-1",
            title: "New Year",
            duration: "0:43",
            audioSrc: "./asset/player/008_Mookrata/source/newyear.mp3"
        }, {
            id: "t8-2",
            title: "What's Going On?",
            duration: "0:23",
            audioSrc: "./asset/player/008_Mookrata/source/forgetworking.mp3"
        }, {
            id: "t8-3",
            title: "New Year Party",
            duration: "0:16",
            audioSrc: "./asset/player/008_Mookrata/source/Newyearparty.mp3"
        }, {
            id: "t8-4",
            title: "Fireworks",
            duration: "0:18",
            audioSrc: "./asset/player/008_Mookrata/source/Fireworks.mp3"
        }]
    }, {
        id: "album7",
        title: "Sunflower",
        artist: "Horror",
        releaseYear: 2022,
        coverArtUrl: "./asset/player/007_sunflower/source/cover.jpg",
        description: ":)",
        tracks: [{
            id: "t7-1",
            title: "Incident Next to The Front Door",
            duration: "0:25",
            audioSrc: "./asset/player/007_sunflower/source/sun1.mp3"
        }, {
            id: "t7-2",
            title: "Pain(t)",
            duration: "0:40",
            audioSrc: "./asset/player/007_sunflower/source/sun2.mp3"
        }, {
            id: "t7-3",
            title: "Seriously?",
            duration: "0:59",
            audioSrc: "./asset/player/007_sunflower/source/sun3.mp3"
        }, {
            id: "t7-4",
            title: "Forced Into A Bad Dream",
            duration: "0:30",
            audioSrc: "./asset/player/007_sunflower/source/sun4_2.mp3"
        }, {
            id: "t7-5",
            title: "Oh! My Hand",
            duration: "0:20",
            audioSrc: "./asset/player/007_sunflower/source/sun5.mp3"
        }, {
            id: "t7-6",
            title: "Something Terrible Happened",
            duration: "2:11",
            audioSrc: "./asset/player/007_sunflower/source/sun6.mp3"
        }, {
            id: "t7-7",
            title: "Sunflower Teaser",
            duration: "0:46",
            audioSrc: "./asset/player/007_sunflower/source/sun_teaser_Master.mp3"
        }]
    }, {
        id: "album6",
        title: "Toilet In Peace",
        artist: "Action/Comedy",
        releaseYear: 2021,
        coverArtUrl: "./asset/player/006_toilet/source/cover.png",
        description: ":)",
        tracks: [{
            id: "t6-1",
            title: "Hallway Chasing",
            duration: "0:26",
            audioSrc: "./asset/player/006_toilet/source/01m00_mastered.mp3"
        }, {
            id: "t6-2",
            title: "Hide",
            duration: "1:38",
            audioSrc: "./asset/player/006_toilet/source/02m00_mastered.mp3"
        }, {
            id: "t6-3",
            title: "Killer VS Murderer",
            duration: "1:53",
            audioSrc: "./asset/player/006_toilet/source/03m00_mastered_fixlenght.mp3"
        }, {
            id: "t6-4",
            title: "Bathroom Massacre",
            duration: "1:41",
            audioSrc: "./asset/player/006_toilet/source/04m00_mastered_fixlenght.mp3"
        }, {
            id: "t6-5",
            title: "Bathroom Massacre (Alternative version)",
            duration: "1:43",
            audioSrc: "./asset/player/006_toilet/source/04nihonversion.mp3"
        }]
    }, {
        id: "album5",
        title: "Latest Book",
        artist: "Drama/Romatic",
        releaseYear: 2020,
        coverArtUrl: "./asset/player/005_latestBook/source/cover.png",
        description: ":)",
        tracks: [{
            id: "t5-1",
            title: "Most Important Journey",
            duration: "3:26",
            audioSrc: "./asset/player/005_latestBook/source/009_remaster_mastered.wav"
        }, {
            id: "t5-2",
            title: "Important Journey",
            duration: "0:58",
            audioSrc: "./asset/player/005_latestBook/source/001_remaster_mastered.wav"
        }, {
            id: "t5-3",
            title: "Steal The Truth",
            duration: "1:16",
            audioSrc: "./asset/player/005_latestBook/source/002_remaster_mastered.wav"
        }, {
            id: "t5-4",
            title: "Revealed",
            duration: "0:47",
            audioSrc: "./asset/player/005_latestBook/source/003_remaster_mastered.wav"
        }, {
            id: "t5-5",
            title: "Like We Were",
            duration: "1:13",
            audioSrc: "./asset/player/005_latestBook/source/004_remaster_mastered.wav"
        }, {
            id: "t5-6",
            title: "Support",
            duration: "1:44",
            audioSrc: "./asset/player/005_latestBook/source/005_new_remaster_mastered.wav"
        }, {
            id: "t5-7",
            title: "Don't Know Why",
            duration: "1:44",
            audioSrc: "./asset/player/005_latestBook/source/006_remaster_mastered.wav"
        }, {
            id: "t5-8",
            title: "Understand",
            duration: "1:56",
            audioSrc: "./asset/player/005_latestBook/source/007_remaster_mastered.wav"
        }, {
            id: "t5-9",
            title: "From Now On",
            duration: "1:32",
            audioSrc: "./asset/player/005_latestBook/source/008_remaster_mastered.wav"
        }]
    }, {
        id: "album4",
        title: "Simple Story",
        artist: "Drama/Romatic",
        releaseYear: 2021,
        coverArtUrl: "./asset/player/004_simpleStory/source/cover.png",
        description: ":)",
        tracks: [{
            id: "t4-1",
            title: "Simple Story",
            duration: "3:45",
            audioSrc: "./asset/player/004_simpleStory/source/simplestory.mp3"
        }]
    }, {
        id: "album3",
        title: "Even Though",
        artist: "Drama/Romatic",
        releaseYear: 2020,
        coverArtUrl: "./asset/player/003_evenThough/source/cover.png",
        description: ":)",
        tracks: [{
            id: "t3-1",
            title: "Even Though",
            duration: "1:39",
            audioSrc: "./asset/player/003_evenThough/source/eventhough.mp3"
        }]
    }, {
        id: "album2",
        title: "Spring",
        artist: "Adventure",
        releaseYear: 2021,
        coverArtUrl: "./asset/player/002_Spring/source/cover.jpg",
        description: ":)",
        tracks: [{
            id: "t2-1",
            title: "Spring",
            duration: "3:13",
            audioSrc: "./asset/player/002_Spring/source/scorerelief_masterd.mp3"
        }]
    }, {
        id: "album1",
        title: "Star Girl",
        artist: "Adventure",
        releaseYear: 2021,
        coverArtUrl: "./asset/player/001_DCStargirl/source/cover.jpg",
        description: ":)",
        tracks: [{
            id: "t1-1",
            title: "Star Girl",
            duration: "1:36",
            audioSrc: "./asset/player/001_DCStargirl/source/stargirl.mp3"
        }]
    }],
    a1 = () => o.jsx("header", {
        className: "border-[var(--border-subtle)]",
        children: o.jsx("div", {
          className: "container mx-auto px-6 py-4 flex justify-end items-center",
          children: o.jsxs(o.Fragment, {
            children: [
              o.jsx("div", {
                className: "relative inline-block",
                children: [
                  o.jsx("a", {
                    href: "/work",
                    className: "relative z-10 bg-transparent border border-[var(--border-subtle)] text-[var(--text-default)] font-medium px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_white] hover:border-[white] hover:text-[white] focus:outline-none",
                    children: "Works"
                  }),
                  o.jsx("div", {
                    className: "absolute inset-0 z-0 animate-particles pointer-events-none"
                  })
                ]
              })
            ]
          })
        })
      }),   
    u1 = () => o.jsx("section", {
        className: "text-center py-12 md:py-16 px-6",
        children: o.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [o.jsx("h1", {
                className: "text-4xl md:text-5xl font-bold text-[var(--text-default)] leading-tight tracking-tight",
                children: "hey"
            }), o.jsx("p", {
                className: "mt-4 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto",
                children: "These are my film scoring projects—so listen up. If you wanna see what I’ve done, click the (Works) button right on top of the page."
            })]
        })
    }),
    n1 = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        })
    }),
    i1 = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            fillRule: "evenodd",
            d: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z",
            clipRule: "evenodd"
        })
    }),
    c1 = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            d: "M19.75 3H4.25A1.25 1.25 0 0 0 3 4.25v15.5A1.25 1.25 0 0 0 4.25 21h15.5A1.25 1.25 0 0 0 21 19.75V4.25A1.25 1.25 0 0 0 19.75 3zM8.5 18.5h-3v-9h3v9zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.5 10h-3v-4.35c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18.5h-3v-9h2.88v1.31h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.3z"
        })
    }),
    nf = ({
        href: v,
        ariaLabel: w,
        children: _
    }) => o.jsx("a", {
        href: v,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": w,
        className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-transform duration-200 hover:scale-110",
        children: _
    }),
    f1 = () => o.jsx("footer", {
        className: "bg-[var(--bg-surface-glass)] backdrop-blur-lg mt-12 glass-border shadow-[0_-4px_15px_var(--shadow-color)]",
        children: o.jsxs("div", {
          className: "container mx-auto px-6 py-8 text-center text-[var(--text-secondary)]",
          children: [
            o.jsx("p", {
              className: "text-lg font-medium text-[var(--text-default)] mb-4",
              children: "THANK YOU :)"
            }),
            o.jsxs("div", {
              className: "flex justify-center items-center space-x-6 mb-6",
              children: o.jsx("a", {
                href: "https://www.youtube.com/@ab7j",
                "aria-label": "YouTube",
                target: "_blank",
                rel: "noopener noreferrer",
                children: o.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "#e63946",
                  className: "w-10 h-10 transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_4px_#e63946]",
                  children: o.jsx("path", {
                    d: "M10 15V9l5.2 3-5.2 3zm11-3c0-1.4-.2-2.9-.5-4.2-.3-1.2-1.2-2.1-2.4-2.4C16.8 5 12 5 12 5s-4.8 0-6.1.4c-1.2.3-2.1 1.2-2.4 2.4C3.2 9.1 3 10.6 3 12s.2 2.9.5 4.2c.3 1.2 1.2 2.1 2.4 2.4 1.3.4 6.1.4 6.1.4s4.8 0 6.1-.4c1.2-.3 2.1-1.2 2.4-2.4.4-1.3.5-2.8.5-4.2z"
                  })
                })
              })
            }),
            o.jsx("p", {
              className: "text-sm text-[var(--text-muted)]",
              children: "2025"
            }),
            o.jsx("p", {
              className: "text-sm text-[var(--text-muted)]",
              children: "nwmbee@gmail.com"
            }),
            o.jsx("p", {
              className: "text-xs mt-2 text-[var(--text-subtle)]",
              children: "nwbmee / All rights reserved."
            })
          ]
        })
      }),      
    Bn = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            fillRule: "evenodd",
            d: "M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",
            clipRule: "evenodd"
        })
    }),
    Yn = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            fillRule: "evenodd",
            d: "M6.75 5.25a.75.75 0 0 0-.75.75V18a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-1.5Zm9 0a.75.75 0 0 0-.75.75V18a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-1.5Z",
            clipRule: "evenodd"
        })
    }),
    xd = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            fillRule: "evenodd",
            d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75z",
            clipRule: "evenodd"
        })
    }),
    s1 = ({
        album: v,
        onSelectAlbum: w,
        onPlayAlbumNow: _,
        onAddAlbumToQueue: h,
        currentPlayingAlbumId: R,
        currentPlayingTrackId: H,
        isAudioPlaying: C,
        isAudioLoading: P
    }) => {
        const O = R === v.id,
            M = O && v.tracks.length > 0 && H === v.tracks[0].id && C,
            $ = O && P,
            K = v.tracks && v.tracks.length > 0,
            ul = J => {
                J.stopPropagation(), K && _(v, J)
            },
            sl = J => {
                J.stopPropagation(), K && h(v, J)
            },
            rl = J => {
                J.stopPropagation(), w(v)
            };
        return o.jsxs("div", {
            className: "bg-[var(--bg-surface-glass-濃)] backdrop-blur-md rounded-2xl shadow-[0_8px_30px_var(--shadow-color)] overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_var(--shadow-color-strong)] group glass-border",
            onClick: () => w(v),
            role: "button",
            tabIndex: 0,
            onKeyDown: J => J.key === "Enter" && w(v),
            "aria-label": `View details for ${v.title}`,
            children: [o.jsxs("div", {
                className: "relative aspect-square",
                children: [o.jsx("img", {
                    src: v.coverArtUrl,
                    alt: `${v.title} cover art`,
                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                    loading: "lazy"
                }), o.jsxs("div", {
                    className: "absolute bottom-3 left-3 right-3 flex justify-between items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 delay-100 z-[2]",
                    children: [o.jsx("button", {
                        onClick: rl,
                        className: "px-3 py-1 bg-[hsla(var(--gray-hue),var(--gray-saturation),10%,0.3)] dark:bg-[hsla(var(--gray-hue),var(--gray-saturation),0%,0.3)] backdrop-blur-sm hover:bg-[hsla(var(--gray-hue),var(--gray-saturation),10%,0.4)] dark:hover:bg-[hsla(var(--gray-hue),var(--gray-saturation),0%,0.4)] text-white text-xs font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 pointer-events-auto focus:outline-none focus:ring-2 ring-offset-2 ring-offset-[var(--bg-default)] focus:ring-[var(--color-primary)]",
                        "aria-label": `View details for ${v.title}`,
                        children: "Details"
                    }), K && o.jsx("button", {
                        onClick: sl,
                        title: "Add to Queue",
                        "aria-label": `Add ${v.title} to queue`,
                        className: "p-1.5 bg-[hsla(var(--gray-hue),var(--gray-saturation),10%,0.3)] dark:bg-[hsla(var(--gray-hue),var(--gray-saturation),0%,0.3)] backdrop-blur-sm hover:bg-[hsla(var(--gray-hue),var(--gray-saturation),10%,0.4)] dark:hover:bg-[hsla(var(--gray-hue),var(--gray-saturation),0%,0.4)] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 pointer-events-auto focus:outline-none focus:ring-2 ring-offset-2 ring-offset-[var(--bg-default)] focus:ring-[var(--color-primary)]",
                        children: o.jsx(xd, {
                            className: "w-4 h-4"
                        })
                    })]
                }), K && o.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 delay-50 z-[1] group-hover:scale-100 scale-90",
                    children: o.jsx("button", {
                        onClick: ul,
                        className: `p-4 bg-[var(--bg-accent)] hover:bg-[var(--color-primary-hover)] backdrop-blur-sm rounded-full text-[var(--text-on-accent)] shadow-2xl
                         transform transition-all duration-300 ease-out hover:scale-105 focus:scale-105 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-element)] focus:ring-[var(--color-primary)] pointer-events-auto`,
                        "aria-label": M ? `Pause album ${v.title}` : `Play album ${v.title} now`,
                        title: M ? `Pause album ${v.title}` : `Play album ${v.title} now`,
                        disabled: $,
                        children: $ ? o.jsx("div", {
                            className: "w-8 h-8 animate-spin rounded-full border-4 border-[var(--text-on-accent)] border-t-transparent"
                        }) : M ? o.jsx(Yn, {
                            className: "w-8 h-8"
                        }) : o.jsx(Bn, {
                            className: "w-8 h-8"
                        })
                    })
                })]
            }), o.jsxs("div", {
                className: "p-5",
                children: [o.jsx("h3", {
                    className: "text-xl font-semibold text-[var(--text-default)] truncate",
                    title: v.title,
                    children: v.title
                }), o.jsx("p", {
                    className: "text-sm text-[var(--text-secondary)] mt-1 truncate",
                    title: v.artist,
                    children: v.artist
                }), o.jsx("p", {
                    className: "text-xs text-[var(--text-muted)] mt-1",
                    children: v.releaseYear
                })]
            })]
        })
    },
    r1 = ({
        albums: v,
        onSelectAlbum: w,
        onPlayAlbumNow: _,
        onAddAlbumToQueue: h,
        currentPlayingAlbumId: R,
        currentPlayingTrackId: H,
        isAudioPlaying: C,
        isAudioLoading: P
    }) => o.jsxs("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8",
        children: [" ", v.map(O => o.jsx(s1, {
            album: O,
            onSelectAlbum: w,
            onPlayAlbumNow: _,
            onAddAlbumToQueue: h,
            currentPlayingAlbumId: R,
            currentPlayingTrackId: H,
            isAudioPlaying: C,
            isAudioLoading: P
        }, O.id))]
    }),
    cf = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        })
    }),
    Sd = G.createContext(void 0),
    Gn = () => {
        const v = G.useContext(Sd);
        if (!v) throw new Error("useAudio must be used within an AudioProvider");
        return v
    },
    o1 = ({
        children: v
    }) => {
        const [w, _] = G.useState(null), [h, R] = G.useState(null), [H, C] = G.useState(!1), [P, O] = G.useState(0), [A, M] = G.useState(0), [$, K] = G.useState(.75), [ul, sl] = G.useState(!1), [rl, J] = G.useState(!1), [hl, W] = G.useState([]), [k, zl] = G.useState(-1), B = G.useRef(null), pl = G.useRef(.75), I = G.useCallback((b, z) => {
            const D = z || hl,
                Z = B.current;
            if (Z && D.length > 0 && b >= 0 && b < D.length) {
                const {
                    track: Y,
                    album: ql
                } = D[b];
                J(!0), _(Y), R(ql), zl(b), Z.src !== Y.audioSrc && (Z.src = Y.audioSrc, Z.load());
                const fl = Z.play();
                fl !== void 0 && fl.catch($l => {
                    $l.name === "AbortError" ? console.log("Playback aborted (e.g., by new track load or rapid navigation). This is usually normal.") : (console.error("Error attempting to play track:", $l), J(!1), C(!1))
                })
            } else Z && (Z.paused || Z.pause(), Z.src && (!D || D.length === 0) && (Z.removeAttribute("src"), Z.load())), _(null), R(null), zl(-1), C(!1), J(!1), (!D || D.length === 0) && W([])
        }, [hl]), Tl = G.useCallback(() => {
            k !== -1 && k < hl.length - 1 ? I(k + 1) : C(!1)
        }, [k, hl, I]), Ol = G.useRef(Tl);
        G.useEffect(() => {
            Ol.current = Tl
        }, [Tl]), G.useEffect(() => {
            if (typeof window < "u") {
                const b = new Audio;
                B.current = b, b.volume = ul ? 0 : $, b.muted = ul;
                const z = () => O(b.currentTime),
                    D = () => {
                        M(b.duration), J(!1)
                    },
                    Z = () => Ol.current(),
                    Y = () => C(!0),
                    ql = () => C(!1),
                    fl = () => {
                        K(b.volume), sl(b.muted), !b.muted && b.volume > 0 && (pl.current = b.volume)
                    },
                    $l = () => J(!0),
                    Ce = () => J(!1),
                    ge = Be => {
                        console.error("Audio element error:", Be);
                        const be = Be.target.error;
                        be && console.error(`MediaError code: ${be.code}, message: ${be.message||"No message"}`), J(!1), C(!1)
                    };
                return b.addEventListener("timeupdate", z), b.addEventListener("loadedmetadata", D), b.addEventListener("ended", Z), b.addEventListener("play", Y), b.addEventListener("pause", ql), b.addEventListener("volumechange", fl), b.addEventListener("waiting", $l), b.addEventListener("canplay", Ce), b.addEventListener("error", ge), () => {
                    b.removeEventListener("timeupdate", z), b.removeEventListener("loadedmetadata", D), b.removeEventListener("ended", Z), b.removeEventListener("play", Y), b.removeEventListener("pause", ql), b.removeEventListener("volumechange", fl), b.removeEventListener("waiting", $l), b.removeEventListener("canplay", Ce), b.removeEventListener("error", ge), b.paused || b.pause(), b.removeAttribute("src"), b.load(), B.current = null
                }
            }
        }, []), G.useEffect(() => {
            const b = B.current;
            b && (b.volume !== $ && (b.volume = $), b.muted !== ul && (b.muted = ul))
        }, [$, ul]);
        const Tt = G.useCallback((b, z) => {
                const D = {
                    track: b,
                    album: z
                };
                W([D]), I(0, [D])
            }, [I]),
            xt = G.useCallback((b, z = 0) => {
                if (!b.tracks || b.tracks.length === 0) return;
                const D = b.tracks.map(Z => ({
                    track: Z,
                    album: b
                }));
                W(D), I(z, D)
            }, [I]),
            Hl = G.useCallback(b => {
                !b || b.length === 0 || W(z => {
                    const D = [...z, ...b];
                    return !H && k === -1 && B.current && z.length === 0 && I(D.length - b.length, D), D
                })
            }, [H, k, I]),
            Dt = G.useCallback(b => {
                W(z => {
                    if (b < 0 || b >= z.length) return z;
                    const D = z.filter((Z, Y) => Y !== b);
                    return D.length === 0 ? (B.current && (B.current.paused || B.current.pause(), B.current.removeAttribute("src"), B.current.load()), _(null), R(null), zl(-1), D) : (b === k ? b < D.length ? I(b, D) : I(D.length - 1, D) : b < k && zl(k - 1), D)
                })
            }, [k, I]),
            jt = G.useCallback(b => {
                b >= 0 && b < hl.length && I(b)
            }, [hl, I]),
            wl = G.useCallback(() => {
                const b = B.current;
                if (b) {
                    if (!w) {
                        if (hl.length > 0) {
                            const z = k !== -1 ? k : 0;
                            z >= 0 && z < hl.length ? I(z) : hl.length > 0 && I(0)
                        }
                        return
                    }
                    if (b.paused) {
                        const z = b.play();
                        z !== void 0 && z.catch(D => {
                            D.name === "AbortError" ? console.log("Play toggle aborted.") : (console.error("Error resuming playback via toggle:", D), C(!1))
                        })
                    } else b.pause()
                }
            }, [w, hl, k, I]),
            S = G.useCallback(b => {
                B.current && isFinite(b) && (B.current.currentTime = Math.max(0, Math.min(b, A || 0)))
            }, [A]),
            j = G.useCallback(b => {
                const z = Math.max(0, Math.min(b, 1));
                K(z), z > 0 && ul ? sl(!1) : z === 0 && !ul && sl(!0)
            }, [ul]),
            Q = G.useCallback(() => {
                const b = B.current;
                b && (b.muted ? (sl(!1), $ === 0 && pl.current > 0 && K(pl.current)) : (b.volume > 0 && (pl.current = b.volume), sl(!0)))
            }, [$]),
            ol = G.useCallback(() => {
                k !== -1 && k < hl.length - 1 && I(k + 1)
            }, [k, hl, I]),
            s = G.useCallback(() => {
                k > 0 && I(k - 1)
            }, [k, I]),
            N = {
                currentTrack: w,
                currentAlbum: h,
                isPlaying: H,
                currentTime: P,
                duration: A,
                volume: $,
                isMuted: ul,
                isLoadingTrack: rl,
                playlist: hl,
                currentPlaylistIndex: k,
                playSingleTrackNow: Tt,
                playAlbumNow: xt,
                addToQueue: Hl,
                removeFromQueue: Dt,
                playTrackAtIndex: jt,
                togglePlayPause: wl,
                seek: S,
                setVolume: j,
                toggleMute: Q,
                playNextTrack: ol,
                playPreviousTrack: s
            };
        return o.jsx(Sd.Provider, {
            value: N,
            children: v
        })
    },
    rf = ({
        className: v
    }) => o.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: [o.jsx("path", {
            d: "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"
        }), o.jsx("path", {
            d: "M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"
        })]
    }),
    d1 = ({
        track: v,
        album: w,
        index: _
    }) => {
        const {
            currentTrack: h,
            currentAlbum: R,
            isPlaying: H,
            playSingleTrackNow: C,
            addToQueue: P,
            togglePlayPause: O,
            isLoadingTrack: A
        } = Gn(), M = (h == null ? void 0 : h.id) === v.id && (R == null ? void 0 : R.id) === w.id, $ = () => {
            M ? O() : C(v, w)
        }, K = () => {
            P([{
                track: v,
                album: w
            }])
        }, ul = A && (h == null ? void 0 : h.id) === v.id && (R == null ? void 0 : R.id) === w.id;
        return o.jsxs("li", {
            className: `flex justify-between items-center py-3 px-4 rounded-lg transition-colors duration-200 group 
                    ${M?"bg-[var(--bg-element)]":"hover:bg-[var(--bg-subtle)]"}`,
            children: [o.jsxs("div", {
                className: "flex items-center min-w-0 flex-grow",
                children: [o.jsx("span", {
                    className: `text-sm w-8 min-w-[2rem] text-right mr-3 transition-colors duration-200
                        ${M&&H?"text-[var(--color-primary)]":"text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"}`,
                    children: M && H ? o.jsx(rf, {
                        className: "w-4 h-4 inline-block"
                    }) : `${_+1}.`
                }), o.jsx("span", {
                    className: `break-words transition-colors duration-200 flex-grow
                        ${M?"text-[var(--text-default)] font-semibold":"text-[var(--text-secondary)] group-hover:text-[var(--text-default)]"}`,
                    children: v.title
                })]
            }), o.jsxs("div", {
                className: "flex items-center space-x-2 ml-2 flex-shrink-0",
                children: [o.jsx("span", {
                    className: "text-sm text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]",
                    children: v.duration
                }), o.jsx("button", {
                    title: "Add to Queue",
                    className: "text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 opacity-60 group-hover:opacity-100 p-1 rounded-full hover:bg-[var(--bg-element)]",
                    onClick: K,
                    "aria-label": `Add ${v.title} to queue`,
                    children: o.jsx(xd, {
                        className: "w-5 h-5"
                    })
                }), o.jsx("button", {
                    title: M && H ? `Pause ${v.title}` : `Play ${v.title} now`,
                    className: "text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 opacity-80 group-hover:opacity-100 disabled:opacity-40 disabled:cursor-not-allowed p-1 rounded-full hover:bg-[var(--bg-element)]",
                    onClick: $,
                    "aria-label": M && H ? `Pause track ${v.title}` : `Play track ${v.title} now`,
                    disabled: ul,
                    children: ul ? o.jsx("div", {
                        className: "w-5 h-5 animate-spin rounded-full border-2 border-[var(--text-muted)] border-t-transparent"
                    }) : M && H ? o.jsx(Yn, {
                        className: "w-5 h-5 text-[var(--color-primary)]"
                    }) : o.jsx(Bn, {
                        className: "w-5 h-5"
                    })
                })]
            })]
        })
    },
    pd = ({
        album: v,
        onClose: w,
        isInline: _ = !1
    }) => {
        const h = _ ? `album-detail-title-inline-${v.id}` : `album-detail-title-modal-${v.id}`,
            R = _ ? "bg-transparent" : "bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl shadow-[0_10px_35px_var(--shadow-color-strong)] glass-border";
        return o.jsxs("div", {
            className: `flex flex-col ${R} ${_?"h-full rounded-[14px]":"max-h-[90vh] w-full max-w-2xl rounded-2xl"}`,
            children: [!_ && o.jsx("button", {
                onClick: w,
                className: "absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors z-20 p-2 bg-[var(--bg-surface-glass)] backdrop-blur-sm hover:bg-[var(--bg-element)] rounded-full lg:hidden",
                "aria-label": "Close album details",
                children: o.jsx(cf, {
                    className: "w-6 h-6"
                })
            }), o.jsxs("div", {
                className: `flex-shrink-0 relative ${_?"":"rounded-t-2xl overflow-hidden"}`,
                children: [o.jsx("img", {
                    src: v.coverArtUrl,
                    alt: `${v.title} cover art`,
                    className: `w-full ${_?"h-48 md:h-56 rounded-t-[14px]":"h-64"} object-cover`
                }), o.jsx("div", {
                    className: `absolute inset-0 bg-gradient-to-t from-[var(--bg-subtle)] via-[hsla(var(--gray-hue),var(--gray-saturation),var(${_?"--gray-lightness-100":"--gray-lightness-200"}),0.5)] dark:from-[var(--bg-subtle)] dark:via-[hsla(var(--gray-hue),var(--gray-saturation),var(${_?"--gray-darkness-100":"--gray-darkness-200"}),0.7)] to-transparent`
                }), o.jsxs("div", {
                    className: "absolute bottom-0 left-0 p-4 md:p-6",
                    children: [o.jsx("h2", {
                        id: _ ? void 0 : h,
                        className: `font-bold text-[var(--text-inverted)] dark:text-[var(--text-default)] leading-tight break-words ${_?"text-2xl md:text-3xl":"text-3xl md:text-4xl"}`,
                        children: v.title
                    }), o.jsxs("p", {
                        className: `mt-1 text-[var(--text-inverted)] dark:text-[var(--text-secondary)] ${_?"text-md":"text-lg "}`,
                        children: [v.artist, " • ", v.releaseYear]
                    })]
                }), _ && o.jsx("button", {
                    onClick: w,
                    className: "absolute top-3 right-3 text-[var(--gray-light-0)] hover:text-[var(--gray-light-0)] bg-[hsla(var(--gray-hue),var(--gray-saturation),0%,0.4)] hover:bg-[hsla(var(--gray-hue),var(--gray-saturation),0%,0.6)] backdrop-blur-sm p-1.5 rounded-full transition-all duration-200 z-10 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-transparent focus:ring-[var(--gray-light-0)]",
                    "aria-label": "Close album details",
                    title: "Close album details",
                    children: o.jsx(cf, {
                        className: "w-5 h-5"
                    })
                })]
            }), o.jsxs("div", {
                className: "p-4 md:p-6 flex-grow overflow-y-auto text-[var(--text-secondary)]",
                style: {
                    scrollbarGutter: "stable"
                },
                children: [o.jsx("p", {
                    className: "mb-6 leading-relaxed text-sm md:text-base",
                    children: v.description
                }), o.jsx("h3", {
                    className: "text-lg md:text-xl font-semibold text-[var(--text-default)] mb-3",
                    children: "Track List"
                }), v.tracks.length > 0 ? o.jsx("ul", {
                    className: "space-y-1",
                    children: v.tracks.map((H, C) => o.jsx(d1, {
                        track: H,
                        album: v,
                        index: C
                    }, H.id))
                }) : o.jsx("p", {
                    className: "text-[var(--text-muted)]",
                    children: "No tracks available for this album."
                })]
            })]
        })
    },
    v1 = ({
        album: v,
        onClose: w
    }) => {
        const [_, h] = G.useState(!1);
        if (G.useEffect(() => {
                if (v) {
                    const P = setTimeout(() => {
                        h(!0)
                    }, 50);
                    return () => {
                        clearTimeout(P), h(!1)
                    }
                } else h(!1)
            }, [v]), !v) return null;
        const R = "fixed inset-0 bg-[var(--bg-overlay)] backdrop-blur-sm flex items-center justify-center p-4 z-[100] overflow-y-auto lg:hidden",
            H = "transition-all duration-300 ease-out",
            C = _ ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-5";
        return o.jsx("div", {
            className: `${R}`,
            onClick: w,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": `album-detail-title-modal-${v.id}`,
            children: o.jsx("div", {
                className: `${H} ${C} w-full max-w-2xl`,
                onClick: P => P.stopPropagation(),
                role: "document",
                children: o.jsx(pd, {
                    album: v,
                    onClose: w
                })
            })
        })
    },
    h1 = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            d: "M5.588 5.062a1.25 1.25 0 0 0-1.025 2.197l5.005 4.29-5.005 4.29a1.25 1.25 0 0 0 1.025 2.197l7.09-6.078a1.25 1.25 0 0 0 0-2.196L5.587 5.06Zm10.912 0a1.25 1.25 0 0 0-1.25 1.25v11.375a1.25 1.25 0 0 0 2.5 0V6.312a1.25 1.25 0 0 0-1.25-1.25Z"
        })
    }),
    m1 = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            d: "M18.412 5.062a1.25 1.25 0 0 1 1.025 2.197l-5.005 4.29 5.005 4.29a1.25 1.25 0 0 1-1.025 2.197l-7.09-6.078a1.25 1.25 0 0 1 0-2.196l7.09-6.077ZM7.5 5.062A1.25 1.25 0 0 1 6.25 6.312v11.375a1.25 1.25 0 0 1-2.5 0V6.312A1.25 1.25 0 0 1 7.5 5.06Z"
        })
    }),
    y1 = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            d: "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06ZM18.28 15.28a.75.75 0 0 0-1.06-1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06L16.25 14.2l1.97 1.97ZM18.28 8.72a.75.75 0 0 0 1.06-1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06L16.25 9.8l1.97-1.97Z"
        })
    }),
    ff = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            fillRule: "evenodd",
            d: "M2.625 6.75a.75.75 0 0 1 .75-.75h17.25a.75.75 0 0 1 0 1.5H3.375a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h17.25a.75.75 0 0 1 0 1.5H3.375a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h17.25a.75.75 0 0 1 0 1.5H3.375a.75.75 0 0 1-.75-.75Z",
            clipRule: "evenodd"
        })
    }),
    md = v => {
        if (isNaN(v) || v === 1 / 0) return "0:00";
        const w = Math.floor(v / 60),
            _ = Math.floor(v % 60);
        return `${w}:${_<10?"0":""}${_}`
    },
    of = 80,
    yd = `h-[${of}px]`,
    g1 = ({
        onOpenPlaylistQueue: v
    }) => {
        const {
            currentTrack: w,
            currentAlbum: _,
            isPlaying: h,
            currentTime: R,
            duration: H,
            volume: C,
            isMuted: P,
            isLoadingTrack: O,
            playlist: A,
            currentPlaylistIndex: M,
            togglePlayPause: $,
            seek: K,
            setVolume: ul,
            playNextTrack: sl,
            playPreviousTrack: rl
        } = Gn(), [J, hl] = G.useState(!1), W = G.useRef(null), k = Ol => {
            K(parseFloat(Ol.target.value))
        }, zl = Ol => {
            ul(parseFloat(Ol.target.value))
        };
        G.useEffect(() => {
            const Ol = Tt => {
                W.current && !W.current.contains(Tt.target) && hl(!1)
            };
            return J && document.addEventListener("mousedown", Ol), () => {
                document.removeEventListener("mousedown", Ol)
            }
        }, [J]);
        const B = M > 0,
            pl = M !== -1 && M < A.length - 1;
        if (!w || !_) return o.jsxs("div", {
            className: `${yd} fixed bottom-0 left-0 right-0 bg-[var(--bg-surface-glass-濃)] backdrop-blur-lg shadow-[0_-4px_15px_var(--shadow-color)] z-50 flex items-center justify-between px-4 text-[var(--text-muted)] glass-border`,
            children: [o.jsx("span", {
                children: "No track selected."
            }), o.jsx("button", {
                onClick: v,
                title: "View Queue",
                className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5",
                children: o.jsx(ff, {
                    className: "w-5 h-5"
                })
            })]
        });
        const I = H > 0 ? R / H * 100 : 0,
            Tl = `linear-gradient(to right, var(--range-thumb-bg) ${I}%, var(--range-track-bg) ${I}%)`;
        return o.jsxs("div", {
            className: `${yd} fixed bottom-0 left-0 right-0 bg-[var(--bg-surface-glass-濃)] backdrop-blur-lg shadow-[0_-4px_15px_var(--shadow-color)] z-50 px-4 flex items-center justify-between glass-border`,
            "aria-label": "Audio Player Controls",
            children: [o.jsxs("div", {
                className: "flex items-center space-x-3 w-1/3 min-w-0",
                children: [o.jsx("img", {
                    src: _.coverArtUrl,
                    alt: `${_.title} cover`,
                    className: "w-12 h-12 rounded-md object-cover shadow-md"
                }), o.jsxs("div", {
                    className: "min-w-0",
                    children: [o.jsx("p", {
                        className: "text-sm font-medium truncate text-[var(--text-default)]",
                        title: w.title,
                        children: w.title
                    }), o.jsx("p", {
                        className: "text-xs text-[var(--text-muted)] truncate",
                        title: _.artist,
                        children: _.artist
                    })]
                })]
            }), o.jsxs("div", {
                className: "flex flex-col items-center justify-center flex-grow w-1/3 mx-4",
                children: [o.jsxs("div", {
                    className: "flex items-center space-x-4 mb-1.5",
                    children: [o.jsx("button", {
                        onClick: rl,
                        title: "Previous Track",
                        className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed p-1",
                        disabled: O || !B,
                        children: o.jsx(m1, {
                            className: "w-5 h-5"
                        })
                    }), o.jsx("button", {
                        onClick: $,
                        title: h ? "Pause" : "Play",
                        className: "p-2.5 bg-[var(--bg-accent)] hover:bg-[var(--color-primary-hover)] rounded-full text-[var(--text-on-accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg",
                        disabled: O && !h,
                        children: O && !h ? o.jsx("div", {
                            className: "w-6 h-6 animate-spin rounded-full border-2 border-[var(--text-on-accent)] border-t-transparent"
                        }) : h ? o.jsx(Yn, {
                            className: "w-6 h-6"
                        }) : o.jsx(Bn, {
                            className: "w-6 h-6"
                        })
                    }), o.jsx("button", {
                        onClick: sl,
                        title: "Next Track",
                        className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed p-1",
                        disabled: O || !pl,
                        children: o.jsx(h1, {
                            className: "w-5 h-5"
                        })
                    })]
                }), o.jsxs("div", {
                    className: "flex items-center w-full max-w-xs space-x-2",
                    children: [o.jsx("span", {
                        className: "text-xs text-[var(--text-muted)] w-10 text-right tabular-nums",
                        children: md(R)
                    }), o.jsx("input", {
                        type: "range",
                        min: "0",
                        max: H || 0,
                        value: R || 0,
                        onChange: k,
                        className: "w-full h-2 appearance-none cursor-pointer focus:outline-none",
                        title: "Seek",
                        disabled: O || H === 0,
                        style: {
                            background: Tl
                        }
                    }), o.jsx("span", {
                        className: "text-xs text-[var(--text-muted)] w-10 text-left tabular-nums",
                        children: md(H)
                    })]
                })]
            }), o.jsxs("div", {
                ref: W,
                className: "flex items-center justify-end space-x-2 w-1/3 relative",
                children: [o.jsx("div", {
                    className: `absolute bottom-full right-0 mb-3 p-3 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-lg shadow-[0_4px_15px_var(--shadow-color)] transition-all duration-200 ease-out origin-bottom-right glass-border ${J?"opacity-100 scale-100":"opacity-0 scale-90 pointer-events-none"}`,
                    children: o.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "1",
                        step: "0.01",
                        value: P ? 0 : C,
                        onChange: zl,
                        className: "w-24 h-2 appearance-none cursor-pointer focus:outline-none",
                        title: "Volume",
                        style: {
                            background: `linear-gradient(to right, var(--range-thumb-bg) ${P?0:C*100}%, var(--range-track-bg) ${P?0:C*100}%)`
                        }
                    })
                }), o.jsx("button", {
                    onClick: () => hl(!J),
                    onMouseEnter: () => hl(!0),
                    className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5",
                    "aria-label": "Toggle Volume Slider",
                    title: "Volume",
                    children: P || C === 0 ? o.jsx(y1, {
                        className: "w-5 h-5"
                    }) : o.jsx(rf, {
                        className: "w-5 h-5"
                    })
                }), o.jsx("button", {
                    onClick: v,
                    title: "View Queue",
                    className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5",
                    "aria-label": "View Playing Queue",
                    children: o.jsx(ff, {
                        className: "w-5 h-5"
                    })
                })]
            })]
        })
    },
    b1 = ({
        className: v
    }) => o.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: v || "w-6 h-6",
        children: o.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.56 0c1.153-.117 2.306-.217 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        })
    }),
    x1 = ({
        item: v,
        index: w,
        isCurrent: _,
        isPlaying: h,
        isLoading: R,
        onPlay: H,
        onRemove: C,
        onTogglePlayPause: P
    }) => {
        const {
            track: O,
            album: A
        } = v, M = () => {
            _ ? P() : H(w)
        };
        return o.jsxs("li", {
            className: `flex items-center justify-between p-3 rounded-lg transition-colors duration-150 group ${_?"bg-[var(--bg-element)]":"hover:bg-[var(--bg-subtle)]"}`,
            "aria-current": _ ? "true" : "false",
            children: [o.jsxs("div", {
                className: "flex items-center space-x-3 min-w-0 flex-grow",
                children: [o.jsx("span", {
                    className: `text-sm w-5 text-center ${_&&h?"text-[var(--color-primary)]":"text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"}`,
                    children: _ && h ? o.jsx(rf, {
                        className: "w-4 h-4 inline-block"
                    }) : `${w+1}.`
                }), o.jsx("img", {
                    src: A.coverArtUrl,
                    alt: A.title,
                    className: "w-10 h-10 rounded object-cover flex-shrink-0"
                }), o.jsxs("div", {
                    className: "min-w-0",
                    children: [o.jsx("p", {
                        className: `text-sm font-medium truncate ${_?"text-[var(--text-default)]":"text-[var(--text-secondary)] group-hover:text-[var(--text-default)]"}`,
                        title: O.title,
                        children: O.title
                    }), o.jsx("p", {
                        className: "text-xs text-[var(--text-muted)] truncate group-hover:text-[var(--text-secondary)]",
                        title: A.artist,
                        children: A.artist
                    })]
                })]
            }), o.jsxs("div", {
                className: "flex items-center space-x-2 flex-shrink-0 ml-3",
                children: [o.jsx("button", {
                    onClick: M,
                    className: `p-1.5 rounded-full transition-colors ${_?"text-[var(--color-primary)]":"text-[var(--text-muted)] hover:text-[var(--color-primary)]"} hover:bg-[var(--bg-element)] disabled:opacity-50`,
                    title: _ && h ? "Pause" : "Play",
                    "aria-label": _ && h ? `Pause ${O.title}` : `Play ${O.title}`,
                    disabled: R && _,
                    children: R && _ ? o.jsx("div", {
                        className: "w-5 h-5 animate-spin rounded-full border-2 border-[var(--text-muted)] border-t-transparent"
                    }) : _ && h ? o.jsx(Yn, {
                        className: "w-5 h-5"
                    }) : o.jsx(Bn, {
                        className: "w-5 h-5"
                    })
                }), o.jsx("button", {
                    onClick: () => C(w),
                    className: "p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-element)] transition-colors",
                    title: "Remove from queue",
                    "aria-label": `Remove ${O.title} from queue`,
                    children: o.jsx(b1, {
                        className: "w-5 h-5"
                    })
                })]
            })]
        })
    },
    S1 = ({
        isOpen: v,
        onClose: w
    }) => {
        const {
            playlist: _,
            currentPlaylistIndex: h,
            playTrackAtIndex: R,
            removeFromQueue: H,
            isPlaying: C,
            isLoadingTrack: P,
            togglePlayPause: O
        } = Gn(), [A, M] = bd.useState(!1);
        if (G.useEffect(() => {
                if (v) {
                    document.body.style.overflow = "hidden";
                    const rl = setTimeout(() => M(!0), 50);
                    return () => {
                        clearTimeout(rl), document.body.style.overflow = ""
                    }
                } else M(!1), document.body.style.overflow = ""
            }, [v]), G.useEffect(() => {
                const rl = J => {
                    J.key === "Escape" && w()
                };
                return v && window.addEventListener("keydown", rl), () => {
                    window.removeEventListener("keydown", rl)
                }
            }, [v, w]), !v) return null;
        const $ = "fixed z-[60] bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl shadow-[0_10px_35px_var(--shadow-color-strong)] glass-border rounded-2xl w-96 max-h-[50vh] flex flex-col transform-origin-bottom-right",
            K = "transition-all duration-300 ease-out",
            ul = A ? "opacity-100 scale-100 translate-x-0 translate-y-0" : "opacity-0 scale-95 translate-x-4 translate-y-4",
            sl = {
                bottom: `calc(${of}px + 1rem)`,
                right: "1rem"
            };
        return o.jsxs("div", {
            className: `${$} ${K} ${ul}`,
            style: sl,
            onClick: rl => rl.stopPropagation(),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "playlist-queue-modal-title",
            children: [o.jsx("header", {
                className: "p-4 md:p-5 border-b border-[var(--border-subtle)] flex-shrink-0",
                children: o.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [o.jsx("h2", {
                        id: "playlist-queue-modal-title",
                        className: "text-xl font-semibold text-[var(--text-default)]",
                        children: "Playing Queue"
                    }), o.jsx("button", {
                        onClick: w,
                        className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5 bg-[var(--bg-surface-glass)] hover:bg-[var(--bg-element)] rounded-full",
                        "aria-label": "Close queue",
                        children: o.jsx(cf, {
                            className: "w-5 h-5"
                        })
                    })]
                })
            }), o.jsx("div", {
                className: "p-2 md:p-4 flex-grow overflow-y-auto",
                style: {
                    scrollbarGutter: "stable"
                },
                children: _.length > 0 ? o.jsx("ul", {
                    className: "space-y-1.5",
                    children: _.map((rl, J) => o.jsx(x1, {
                        item: rl,
                        index: J,
                        isCurrent: J === h,
                        isPlaying: C,
                        isLoading: P,
                        onPlay: R,
                        onRemove: H,
                        onTogglePlayPause: O
                    }, `${rl.track.id}-${J}`))
                }) : o.jsxs("div", {
                    className: "text-center py-10 text-[var(--text-muted)]",
                    children: [o.jsx(ff, {
                        className: "w-12 h-12 mx-auto mb-3 text-[var(--text-subtle)]"
                    }), o.jsx("p", {
                        className: "text-lg font-medium text-[var(--text-secondary)]",
                        children: "The queue is empty."
                    }), o.jsx("p", {
                        className: "text-sm",
                        children: "Add some music to start listening!"
                    })]
                })
            })]
        })
    },
    p1 = () => {
        var J, hl;
        const [v, w] = G.useState([]), [_, h] = G.useState(null), [R, H] = G.useState(!0), [C, P] = G.useState(!1), [O, A] = G.useState(window.innerWidth >= 1024), M = Gn();
        G.useEffect(() => {
            const W = () => {
                A(window.innerWidth >= 1024)
            };
            return window.addEventListener("resize", W), () => window.removeEventListener("resize", W)
        }, []), G.useEffect(() => {
            H(!0), setTimeout(() => {
                w(e1), H(!1)
            }, 500)
        }, []);
        const $ = G.useCallback(W => {
                O && (_ == null ? void 0 : _.id) === W.id ? h(null) : h(W), !O && W && (document.body.style.overflow = "hidden")
            }, [O, _]),
            K = G.useCallback(() => {
                h(null), O || (document.body.style.overflow = "")
            }, [O]),
            ul = G.useCallback((W, k) => {
                var B, pl, I, Tl;
                if (k.stopPropagation(), !W.tracks || W.tracks.length === 0) {
                    console.warn("Album has no tracks to play.");
                    return
                }((B = M.currentAlbum) == null ? void 0 : B.id) === W.id && M.playlist.length > 0 && M.currentPlaylistIndex !== -1 && ((pl = M.playlist[M.currentPlaylistIndex]) == null ? void 0 : pl.track.id) === ((I = W.tracks[0]) == null ? void 0 : I.id) && ((Tl = M.playlist[M.currentPlaylistIndex]) == null ? void 0 : Tl.album.id) === W.id ? M.togglePlayPause() : M.playAlbumNow(W, 0)
            }, [M]),
            sl = G.useCallback((W, k) => {
                if (k.stopPropagation(), !W.tracks || W.tracks.length === 0) {
                    console.warn("Album has no tracks to add to queue.");
                    return
                }
                const zl = W.tracks.map(B => ({
                    track: B,
                    album: W
                }));
                M.addToQueue(zl)
            }, [M]);
        G.useEffect(() => {
            const W = k => {
                k.key === "Escape" && (C ? P(!1) : _ && !O && K())
            };
            return (_ || C) && window.addEventListener("keydown", W), () => {
                window.removeEventListener("keydown", W)
            }
        }, [_, K, C, O]), G.useEffect(() => {
            _ && !O || C ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
        }, [_, O, C]);
        const rl = M.currentTrack ? `${of}px` : "0px";
        return o.jsxs("div", {
            className: "flex flex-col min-h-screen",
            children: [o.jsx(a1, {}), o.jsx(u1, {}), o.jsx("div", {
                className: "flex-grow container mx-auto px-6 pb-8",
                style: {
                    paddingBottom: rl
                },
                children: o.jsxs("div", {
                    className: "lg:flex lg:space-x-8",
                    children: [o.jsx("main", {
                        className: `flex-grow ${O&&_?"lg:w-2/3":"w-full"}`,
                        children: R ? o.jsxs("div", {
                            className: "flex flex-col justify-center items-center h-64 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl p-8 glass-border shadow-[0_8px_30px_var(--shadow-color)]",
                            children: [o.jsx("div", {
                                className: "animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#3EB489] shadow-[0_0_15px_#3EB489]"
                            }),
                            // Particles
                            o.jsx("span", { className: "absolute w-2 h-2 bg-[#3EB489] rounded-full animate-ping top-2 left-6" }),
                            o.jsx("span", { className: "absolute w-1.5 h-1.5 bg-[#A7F3D0] rounded-full animate-ping top-10 right-3" }),
                            o.jsx("span", { className: "absolute w-2 h-2 bg-[#6EE7B7] rounded-full animate-ping bottom-4 left-4" }),
                            o.jsx("span", { className: "absolute w-1.5 h-1.5 bg-[#34D399] rounded-full animate-ping bottom-8 right-6" }), o.jsx("p", {
                                className: "ml-4 text-xl text-[var(--text-default)] mt-4",
                                children: "Loading Albums..."
                            })]
                        }) : v.length > 0 ? o.jsx(r1, {
                            albums: v,
                            onSelectAlbum: $,
                            onPlayAlbumNow: ul,
                            onAddAlbumToQueue: sl,
                            currentPlayingAlbumId: ((J = M.currentAlbum) == null ? void 0 : J.id) || null,
                            currentPlayingTrackId: ((hl = M.currentTrack) == null ? void 0 : hl.id) || null,
                            isAudioPlaying: M.isPlaying,
                            isAudioLoading: M.isLoadingTrack
                        }) : o.jsxs("div", {
                            className: "text-center py-10 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl p-8 glass-border shadow-[0_8px_30px_var(--shadow-color)] text-[var(--text-muted)]",
                            children: [o.jsx("h2", {
                                className: "text-2xl font-semibold mb-2 text-[var(--text-default)]",
                                children: "No Albums Available"
                            }), o.jsx("p", {
                                children: "There are currently no albums to display."
                            })]
                        })
                    }), O && _ && o.jsx("aside", {
                        className: "lg:w-1/3 mt-6 lg:mt-0 sticky top-8 max-h-[calc(100vh_-_8rem)] overflow-y-auto rounded-2xl p-px glass-border bg-transparent shadow-[0_8px_30px_var(--shadow-color-strong)]",
                        children: o.jsx("div", {
                            className: "bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl rounded-[15px] h-full",
                            children: o.jsx(pd, {
                                album: _,
                                onClose: K,
                                isInline: !0
                            })
                        })
                    }), O && !_ && o.jsx("aside", {
                        className: "hidden lg:block lg:w-1/3 mt-6 lg:mt-0 p-8 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl shadow-[0_8px_30px_var(--shadow-color)] glass-border",
                        children: o.jsxs("div", {
                            className: "flex flex-col items-center justify-center h-full border-2 border-dashed border-[var(--border-muted)] rounded-lg p-6 text-[var(--text-muted)]",
                            children: [o.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-16 w-16 mb-4 text-[var(--text-subtle)]",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: o.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 1.5,
                                    d: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                })
                            }), o.jsx("h3", {
                                className: "text-xl font-semibold text-[var(--text-default)]",
                                children: "Album Details"
                            }), o.jsx("p", {
                                className: "mt-1 text-sm",
                                children: "Select an album from the list to see more information here."
                            })]
                        })
                    })]
                })
            }), o.jsx(f1, {}), !O && _ && o.jsx(v1, {
                album: _,
                onClose: K
            }), o.jsx(g1, {
                onOpenPlaylistQueue: () => P(!0)
            }), o.jsx(S1, {
                isOpen: C,
                onClose: () => P(!1)
            })]
        })
    },
    A1 = () => o.jsx(o1, {
        children: o.jsx(p1, {})
    }),
    Ad = document.getElementById("root");
if (!Ad) throw new Error("Could not find root element to mount to");
const T1 = t1.createRoot(Ad);
T1.render(o.jsx(bd.StrictMode, {
    children: o.jsx(A1, {})
}));