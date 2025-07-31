(function() {
    const q = document.createElement("link").relList;
    if (q && q.supports && q.supports("modulepreload")) return;
    for (const j of document.querySelectorAll('link[rel="modulepreload"]')) d(j);
    new MutationObserver(j => {
        for (const H of j)
            if (H.type === "childList")
                for (const B of H.addedNodes) B.tagName === "LINK" && B.rel === "modulepreload" && d(B)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function N(j) {
        const H = {};
        return j.integrity && (H.integrity = j.integrity), j.referrerPolicy && (H.referrerPolicy = j.referrerPolicy), j.crossOrigin === "use-credentials" ? H.credentials = "include" : j.crossOrigin === "anonymous" ? H.credentials = "omit" : H.credentials = "same-origin", H
    }

    function d(j) {
        if (j.ep) return;
        j.ep = !0;
        const H = N(j);
        fetch(j.href, H)
    }
})();

function vd(y) {
    return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y
}
var Wi = {
        exports: {}
    },
    xu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ed;

function Xh() {
    if (ed) return xu;
    ed = 1;
    var y = Symbol.for("react.transitional.element"),
        q = Symbol.for("react.fragment");

    function N(d, j, H) {
        var B = null;
        if (H !== void 0 && (B = "" + H), j.key !== void 0 && (B = "" + j.key), "key" in j) {
            H = {};
            for (var K in j) K !== "key" && (H[K] = j[K])
        } else H = j;
        return j = H.ref, {
            $$typeof: y,
            type: d,
            key: B,
            ref: j !== void 0 ? j : null,
            props: H
        }
    }
    return xu.Fragment = q, xu.jsx = N, xu.jsxs = N, xu
}
var ad;

function Zh() {
    return ad || (ad = 1, Wi.exports = Xh()), Wi.exports
}
var v = Zh(),
    Fi = {
        exports: {}
    },
    J = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ud;

function Lh() {
    if (ud) return J;
    ud = 1;
    var y = Symbol.for("react.transitional.element"),
        q = Symbol.for("react.portal"),
        N = Symbol.for("react.fragment"),
        d = Symbol.for("react.strict_mode"),
        j = Symbol.for("react.profiler"),
        H = Symbol.for("react.consumer"),
        B = Symbol.for("react.context"),
        K = Symbol.for("react.forward_ref"),
        O = Symbol.for("react.suspense"),
        A = Symbol.for("react.memo"),
        U = Symbol.for("react.lazy"),
        k = Symbol.iterator;

    function F(s) {
        return s === null || typeof s != "object" ? null : (s = k && s[k] || s["@@iterator"], typeof s == "function" ? s : null)
    }
    var il = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        yl = Object.assign,
        gl = {};

    function al(s, z, b) {
        this.props = s, this.context = z, this.refs = gl, this.updater = b || il
    }
    al.prototype.isReactComponent = {}, al.prototype.setState = function(s, z) {
        if (typeof s != "object" && typeof s != "function" && s != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, z, "setState")
    }, al.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate")
    };

    function bl() {}
    bl.prototype = al.prototype;

    function Ol(s, z, b) {
        this.props = s, this.context = z, this.refs = gl, this.updater = b || il
    }
    var $ = Ol.prototype = new bl;
    $.constructor = Ol, yl($, al.prototype), $.isPureReactComponent = !0;
    var jl = Array.isArray,
        L = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        zl = Object.prototype.hasOwnProperty;

    function I(s, z, b, M, _, Q) {
        return b = Q.ref, {
            $$typeof: y,
            type: s,
            key: z,
            ref: b !== void 0 ? b : null,
            props: Q
        }
    }

    function Dl(s, z) {
        return I(s.type, z, void 0, void 0, void 0, s.props)
    }

    function Ml(s) {
        return typeof s == "object" && s !== null && s.$$typeof === y
    }

    function Et(s) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + s.replace(/[=:]/g, function(b) {
            return z[b]
        })
    }
    var bt = /\/+/g;

    function Hl(s, z) {
        return typeof s == "object" && s !== null && s.key != null ? Et("" + s.key) : z.toString(36)
    }

    function Ot() {}

    function Dt(s) {
        switch (s.status) {
            case "fulfilled":
                return s.value;
            case "rejected":
                throw s.reason;
            default:
                switch (typeof s.status == "string" ? s.then(Ot, Ot) : (s.status = "pending", s.then(function(z) {
                        s.status === "pending" && (s.status = "fulfilled", s.value = z)
                    }, function(z) {
                        s.status === "pending" && (s.status = "rejected", s.reason = z)
                    })), s.status) {
                    case "fulfilled":
                        return s.value;
                    case "rejected":
                        throw s.reason
                }
        }
        throw s
    }

    function ql(s, z, b, M, _) {
        var Q = typeof s;
        (Q === "undefined" || Q === "boolean") && (s = null);
        var Y = !1;
        if (s === null) Y = !0;
        else switch (Q) {
            case "bigint":
            case "string":
            case "number":
                Y = !0;
                break;
            case "object":
                switch (s.$$typeof) {
                    case y:
                    case q:
                        Y = !0;
                        break;
                    case U:
                        return Y = s._init, ql(Y(s._payload), z, b, M, _)
                }
        }
        if (Y) return _ = _(s), Y = M === "" ? "." + Hl(s, 0) : M, jl(_) ? (b = "", Y != null && (b = Y.replace(bt, "$&/") + "/"), ql(_, z, b, "", function(kl) {
            return kl
        })) : _ != null && (Ml(_) && (_ = Dl(_, b + (_.key == null || s && s.key === _.key ? "" : ("" + _.key).replace(bt, "$&/") + "/") + Y)), z.push(_)), 1;
        Y = 0;
        var Cl = M === "" ? "." : M + ":";
        if (jl(s))
            for (var cl = 0; cl < s.length; cl++) M = s[cl], Q = Cl + Hl(M, cl), Y += ql(M, z, b, Q, _);
        else if (cl = F(s), typeof cl == "function")
            for (s = cl.call(s), cl = 0; !(M = s.next()).done;) M = M.value, Q = Cl + Hl(M, cl++), Y += ql(M, z, b, Q, _);
        else if (Q === "object") {
            if (typeof s.then == "function") return ql(Dt(s), z, b, M, _);
            throw z = String(s), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Y
    }

    function x(s, z, b) {
        if (s == null) return s;
        var M = [],
            _ = 0;
        return ql(s, M, "", "", function(Q) {
            return z.call(b, Q, _++)
        }), M
    }

    function D(s) {
        if (s._status === -1) {
            var z = s._result;
            z = z(), z.then(function(b) {
                (s._status === 0 || s._status === -1) && (s._status = 1, s._result = b)
            }, function(b) {
                (s._status === 0 || s._status === -1) && (s._status = 2, s._result = b)
            }), s._status === -1 && (s._status = 0, s._result = z)
        }
        if (s._status === 1) return s._result.default;
        throw s._result
    }
    var G = typeof reportError == "function" ? reportError : function(s) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
                error: s
            });
            if (!window.dispatchEvent(z)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", s);
            return
        }
        console.error(s)
    };

    function fl() {}
    return J.Children = {
        map: x,
        forEach: function(s, z, b) {
            x(s, function() {
                z.apply(this, arguments)
            }, b)
        },
        count: function(s) {
            var z = 0;
            return x(s, function() {
                z++
            }), z
        },
        toArray: function(s) {
            return x(s, function(z) {
                return z
            }) || []
        },
        only: function(s) {
            if (!Ml(s)) throw Error("React.Children.only expected to receive a single React element child.");
            return s
        }
    }, J.Component = al, J.Fragment = N, J.Profiler = j, J.PureComponent = Ol, J.StrictMode = d, J.Suspense = O, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, J.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(s) {
            return L.H.useMemoCache(s)
        }
    }, J.cache = function(s) {
        return function() {
            return s.apply(null, arguments)
        }
    }, J.cloneElement = function(s, z, b) {
        if (s == null) throw Error("The argument must be a React element, but you passed " + s + ".");
        var M = yl({}, s.props),
            _ = s.key,
            Q = void 0;
        if (z != null)
            for (Y in z.ref !== void 0 && (Q = void 0), z.key !== void 0 && (_ = "" + z.key), z) !zl.call(z, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && z.ref === void 0 || (M[Y] = z[Y]);
        var Y = arguments.length - 2;
        if (Y === 1) M.children = b;
        else if (1 < Y) {
            for (var Cl = Array(Y), cl = 0; cl < Y; cl++) Cl[cl] = arguments[cl + 2];
            M.children = Cl
        }
        return I(s.type, _, void 0, void 0, Q, M)
    }, J.createContext = function(s) {
        return s = {
            $$typeof: B,
            _currentValue: s,
            _currentValue2: s,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, s.Provider = s, s.Consumer = {
            $$typeof: H,
            _context: s
        }, s
    }, J.createElement = function(s, z, b) {
        var M, _ = {},
            Q = null;
        if (z != null)
            for (M in z.key !== void 0 && (Q = "" + z.key), z) zl.call(z, M) && M !== "key" && M !== "__self" && M !== "__source" && (_[M] = z[M]);
        var Y = arguments.length - 2;
        if (Y === 1) _.children = b;
        else if (1 < Y) {
            for (var Cl = Array(Y), cl = 0; cl < Y; cl++) Cl[cl] = arguments[cl + 2];
            _.children = Cl
        }
        if (s && s.defaultProps)
            for (M in Y = s.defaultProps, Y) _[M] === void 0 && (_[M] = Y[M]);
        return I(s, Q, void 0, void 0, null, _)
    }, J.createRef = function() {
        return {
            current: null
        }
    }, J.forwardRef = function(s) {
        return {
            $$typeof: K,
            render: s
        }
    }, J.isValidElement = Ml, J.lazy = function(s) {
        return {
            $$typeof: U,
            _payload: {
                _status: -1,
                _result: s
            },
            _init: D
        }
    }, J.memo = function(s, z) {
        return {
            $$typeof: A,
            type: s,
            compare: z === void 0 ? null : z
        }
    }, J.startTransition = function(s) {
        var z = L.T,
            b = {};
        L.T = b;
        try {
            var M = s(),
                _ = L.S;
            _ !== null && _(b, M), typeof M == "object" && M !== null && typeof M.then == "function" && M.then(fl, G)
        } catch (Q) {
            G(Q)
        } finally {
            L.T = z
        }
    }, J.unstable_useCacheRefresh = function() {
        return L.H.useCacheRefresh()
    }, J.use = function(s) {
        return L.H.use(s)
    }, J.useActionState = function(s, z, b) {
        return L.H.useActionState(s, z, b)
    }, J.useCallback = function(s, z) {
        return L.H.useCallback(s, z)
    }, J.useContext = function(s) {
        return L.H.useContext(s)
    }, J.useDebugValue = function() {}, J.useDeferredValue = function(s, z) {
        return L.H.useDeferredValue(s, z)
    }, J.useEffect = function(s, z, b) {
        var M = L.H;
        if (typeof b == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return M.useEffect(s, z)
    }, J.useId = function() {
        return L.H.useId()
    }, J.useImperativeHandle = function(s, z, b) {
        return L.H.useImperativeHandle(s, z, b)
    }, J.useInsertionEffect = function(s, z) {
        return L.H.useInsertionEffect(s, z)
    }, J.useLayoutEffect = function(s, z) {
        return L.H.useLayoutEffect(s, z)
    }, J.useMemo = function(s, z) {
        return L.H.useMemo(s, z)
    }, J.useOptimistic = function(s, z) {
        return L.H.useOptimistic(s, z)
    }, J.useReducer = function(s, z, b) {
        return L.H.useReducer(s, z, b)
    }, J.useRef = function(s) {
        return L.H.useRef(s)
    }, J.useState = function(s) {
        return L.H.useState(s)
    }, J.useSyncExternalStore = function(s, z, b) {
        return L.H.useSyncExternalStore(s, z, b)
    }, J.useTransition = function() {
        return L.H.useTransition()
    }, J.version = "19.1.1", J
}
var nd;

function uf() {
    return nd || (nd = 1, Fi.exports = Lh()), Fi.exports
}
var Z = uf();
const Eu = vd(Z);
var Pi = {
        exports: {}
    },
    pu = {},
    Ii = {
        exports: {}
    },
    lf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;

function Vh() {
    return cd || (cd = 1, function(y) {
        function q(x, D) {
            var G = x.length;
            x.push(D);
            l: for (; 0 < G;) {
                var fl = G - 1 >>> 1,
                    s = x[fl];
                if (0 < j(s, D)) x[fl] = D, x[G] = s, G = fl;
                else break l
            }
        }

        function N(x) {
            return x.length === 0 ? null : x[0]
        }

        function d(x) {
            if (x.length === 0) return null;
            var D = x[0],
                G = x.pop();
            if (G !== D) {
                x[0] = G;
                l: for (var fl = 0, s = x.length, z = s >>> 1; fl < z;) {
                    var b = 2 * (fl + 1) - 1,
                        M = x[b],
                        _ = b + 1,
                        Q = x[_];
                    if (0 > j(M, G)) _ < s && 0 > j(Q, M) ? (x[fl] = Q, x[_] = G, fl = _) : (x[fl] = M, x[b] = G, fl = b);
                    else if (_ < s && 0 > j(Q, G)) x[fl] = Q, x[_] = G, fl = _;
                    else break l
                }
            }
            return D
        }

        function j(x, D) {
            var G = x.sortIndex - D.sortIndex;
            return G !== 0 ? G : x.id - D.id
        }
        if (y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var H = performance;
            y.unstable_now = function() {
                return H.now()
            }
        } else {
            var B = Date,
                K = B.now();
            y.unstable_now = function() {
                return B.now() - K
            }
        }
        var O = [],
            A = [],
            U = 1,
            k = null,
            F = 3,
            il = !1,
            yl = !1,
            gl = !1,
            al = !1,
            bl = typeof setTimeout == "function" ? setTimeout : null,
            Ol = typeof clearTimeout == "function" ? clearTimeout : null,
            $ = typeof setImmediate < "u" ? setImmediate : null;

        function jl(x) {
            for (var D = N(A); D !== null;) {
                if (D.callback === null) d(A);
                else if (D.startTime <= x) d(A), D.sortIndex = D.expirationTime, q(O, D);
                else break;
                D = N(A)
            }
        }

        function L(x) {
            if (gl = !1, jl(x), !yl)
                if (N(O) !== null) yl = !0, zl || (zl = !0, Hl());
                else {
                    var D = N(A);
                    D !== null && ql(L, D.startTime - x)
                }
        }
        var zl = !1,
            I = -1,
            Dl = 5,
            Ml = -1;

        function Et() {
            return al ? !0 : !(y.unstable_now() - Ml < Dl)
        }

        function bt() {
            if (al = !1, zl) {
                var x = y.unstable_now();
                Ml = x;
                var D = !0;
                try {
                    l: {
                        yl = !1,
                        gl && (gl = !1, Ol(I), I = -1),
                        il = !0;
                        var G = F;
                        try {
                            t: {
                                for (jl(x), k = N(O); k !== null && !(k.expirationTime > x && Et());) {
                                    var fl = k.callback;
                                    if (typeof fl == "function") {
                                        k.callback = null, F = k.priorityLevel;
                                        var s = fl(k.expirationTime <= x);
                                        if (x = y.unstable_now(), typeof s == "function") {
                                            k.callback = s, jl(x), D = !0;
                                            break t
                                        }
                                        k === N(O) && d(O), jl(x)
                                    } else d(O);
                                    k = N(O)
                                }
                                if (k !== null) D = !0;
                                else {
                                    var z = N(A);
                                    z !== null && ql(L, z.startTime - x), D = !1
                                }
                            }
                            break l
                        }
                        finally {
                            k = null, F = G, il = !1
                        }
                        D = void 0
                    }
                }
                finally {
                    D ? Hl() : zl = !1
                }
            }
        }
        var Hl;
        if (typeof $ == "function") Hl = function() {
            $(bt)
        };
        else if (typeof MessageChannel < "u") {
            var Ot = new MessageChannel,
                Dt = Ot.port2;
            Ot.port1.onmessage = bt, Hl = function() {
                Dt.postMessage(null)
            }
        } else Hl = function() {
            bl(bt, 0)
        };

        function ql(x, D) {
            I = bl(function() {
                x(y.unstable_now())
            }, D)
        }
        y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(x) {
            x.callback = null
        }, y.unstable_forceFrameRate = function(x) {
            0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Dl = 0 < x ? Math.floor(1e3 / x) : 5
        }, y.unstable_getCurrentPriorityLevel = function() {
            return F
        }, y.unstable_next = function(x) {
            switch (F) {
                case 1:
                case 2:
                case 3:
                    var D = 3;
                    break;
                default:
                    D = F
            }
            var G = F;
            F = D;
            try {
                return x()
            } finally {
                F = G
            }
        }, y.unstable_requestPaint = function() {
            al = !0
        }, y.unstable_runWithPriority = function(x, D) {
            switch (x) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    x = 3
            }
            var G = F;
            F = x;
            try {
                return D()
            } finally {
                F = G
            }
        }, y.unstable_scheduleCallback = function(x, D, G) {
            var fl = y.unstable_now();
            switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? fl + G : fl) : G = fl, x) {
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
            return s = G + s, x = {
                id: U++,
                callback: D,
                priorityLevel: x,
                startTime: G,
                expirationTime: s,
                sortIndex: -1
            }, G > fl ? (x.sortIndex = G, q(A, x), N(O) === null && x === N(A) && (gl ? (Ol(I), I = -1) : gl = !0, ql(L, G - fl))) : (x.sortIndex = s, q(O, x), yl || il || (yl = !0, zl || (zl = !0, Hl()))), x
        }, y.unstable_shouldYield = Et, y.unstable_wrapCallback = function(x) {
            var D = F;
            return function() {
                var G = F;
                F = D;
                try {
                    return x.apply(this, arguments)
                } finally {
                    F = G
                }
            }
        }
    }(lf)), lf
}
var id;

function Kh() {
    return id || (id = 1, Ii.exports = Vh()), Ii.exports
}
var tf = {
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
var fd;

function Jh() {
    if (fd) return Kl;
    fd = 1;
    var y = uf();

    function q(O) {
        var A = "https://react.dev/errors/" + O;
        if (1 < arguments.length) {
            A += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var U = 2; U < arguments.length; U++) A += "&args[]=" + encodeURIComponent(arguments[U])
        }
        return "Minified React error #" + O + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function N() {}
    var d = {
            d: {
                f: N,
                r: function() {
                    throw Error(q(522))
                },
                D: N,
                C: N,
                L: N,
                m: N,
                X: N,
                S: N,
                M: N
            },
            p: 0,
            findDOMNode: null
        },
        j = Symbol.for("react.portal");

    function H(O, A, U) {
        var k = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: j,
            key: k == null ? null : "" + k,
            children: O,
            containerInfo: A,
            implementation: U
        }
    }
    var B = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function K(O, A) {
        if (O === "font") return "";
        if (typeof A == "string") return A === "use-credentials" ? A : ""
    }
    return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, Kl.createPortal = function(O, A) {
        var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11) throw Error(q(299));
        return H(O, A, null, U)
    }, Kl.flushSync = function(O) {
        var A = B.T,
            U = d.p;
        try {
            if (B.T = null, d.p = 2, O) return O()
        } finally {
            B.T = A, d.p = U, d.d.f()
        }
    }, Kl.preconnect = function(O, A) {
        typeof O == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, d.d.C(O, A))
    }, Kl.prefetchDNS = function(O) {
        typeof O == "string" && d.d.D(O)
    }, Kl.preinit = function(O, A) {
        if (typeof O == "string" && A && typeof A.as == "string") {
            var U = A.as,
                k = K(U, A.crossOrigin),
                F = typeof A.integrity == "string" ? A.integrity : void 0,
                il = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
            U === "style" ? d.d.S(O, typeof A.precedence == "string" ? A.precedence : void 0, {
                crossOrigin: k,
                integrity: F,
                fetchPriority: il
            }) : U === "script" && d.d.X(O, {
                crossOrigin: k,
                integrity: F,
                fetchPriority: il,
                nonce: typeof A.nonce == "string" ? A.nonce : void 0
            })
        }
    }, Kl.preinitModule = function(O, A) {
        if (typeof O == "string")
            if (typeof A == "object" && A !== null) {
                if (A.as == null || A.as === "script") {
                    var U = K(A.as, A.crossOrigin);
                    d.d.M(O, {
                        crossOrigin: U,
                        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
                        nonce: typeof A.nonce == "string" ? A.nonce : void 0
                    })
                }
            } else A == null && d.d.M(O)
    }, Kl.preload = function(O, A) {
        if (typeof O == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
            var U = A.as,
                k = K(U, A.crossOrigin);
            d.d.L(O, U, {
                crossOrigin: k,
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
                var U = K(A.as, A.crossOrigin);
                d.d.m(O, {
                    as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
                    crossOrigin: U,
                    integrity: typeof A.integrity == "string" ? A.integrity : void 0
                })
            } else d.d.m(O)
    }, Kl.requestFormReset = function(O) {
        d.d.r(O)
    }, Kl.unstable_batchedUpdates = function(O, A) {
        return O(A)
    }, Kl.useFormState = function(O, A, U) {
        return B.H.useFormState(O, A, U)
    }, Kl.useFormStatus = function() {
        return B.H.useHostTransitionStatus()
    }, Kl.version = "19.1.1", Kl
}
var sd;

function kh() {
    if (sd) return tf.exports;
    sd = 1;

    function y() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)
        } catch (q) {
            console.error(q)
        }
    }
    return y(), tf.exports = Jh(), tf.exports
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
var rd;

function $h() {
    if (rd) return pu;
    rd = 1;
    var y = Kh(),
        q = uf(),
        N = kh();

    function d(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function j(l) {
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

    function B(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function K(l) {
        if (H(l) !== l) throw Error(d(188))
    }

    function O(l) {
        var t = l.alternate;
        if (!t) {
            if (t = H(l), t === null) throw Error(d(188));
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
                    if (n === e) return K(u), l;
                    if (n === a) return K(u), t;
                    n = n.sibling
                }
                throw Error(d(188))
            }
            if (e.return !== a.return) e = u, a = n;
            else {
                for (var c = !1, i = u.child; i;) {
                    if (i === e) {
                        c = !0, e = u, a = n;
                        break
                    }
                    if (i === a) {
                        c = !0, a = u, e = n;
                        break
                    }
                    i = i.sibling
                }
                if (!c) {
                    for (i = n.child; i;) {
                        if (i === e) {
                            c = !0, e = n, a = u;
                            break
                        }
                        if (i === a) {
                            c = !0, a = n, e = u;
                            break
                        }
                        i = i.sibling
                    }
                    if (!c) throw Error(d(189))
                }
            }
            if (e.alternate !== a) throw Error(d(190))
        }
        if (e.tag !== 3) throw Error(d(188));
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
    var U = Object.assign,
        k = Symbol.for("react.element"),
        F = Symbol.for("react.transitional.element"),
        il = Symbol.for("react.portal"),
        yl = Symbol.for("react.fragment"),
        gl = Symbol.for("react.strict_mode"),
        al = Symbol.for("react.profiler"),
        bl = Symbol.for("react.provider"),
        Ol = Symbol.for("react.consumer"),
        $ = Symbol.for("react.context"),
        jl = Symbol.for("react.forward_ref"),
        L = Symbol.for("react.suspense"),
        zl = Symbol.for("react.suspense_list"),
        I = Symbol.for("react.memo"),
        Dl = Symbol.for("react.lazy"),
        Ml = Symbol.for("react.activity"),
        Et = Symbol.for("react.memo_cache_sentinel"),
        bt = Symbol.iterator;

    function Hl(l) {
        return l === null || typeof l != "object" ? null : (l = bt && l[bt] || l["@@iterator"], typeof l == "function" ? l : null)
    }
    var Ot = Symbol.for("react.client.reference");

    function Dt(l) {
        if (l == null) return null;
        if (typeof l == "function") return l.$$typeof === Ot ? null : l.displayName || l.name || null;
        if (typeof l == "string") return l;
        switch (l) {
            case yl:
                return "Fragment";
            case al:
                return "Profiler";
            case gl:
                return "StrictMode";
            case L:
                return "Suspense";
            case zl:
                return "SuspenseList";
            case Ml:
                return "Activity"
        }
        if (typeof l == "object") switch (l.$$typeof) {
            case il:
                return "Portal";
            case $:
                return (l.displayName || "Context") + ".Provider";
            case Ol:
                return (l._context.displayName || "Context") + ".Consumer";
            case jl:
                var t = l.render;
                return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
            case I:
                return t = l.displayName || null, t !== null ? t : Dt(l.type) || "Memo";
            case Dl:
                t = l._payload, l = l._init;
                try {
                    return Dt(l(t))
                } catch {}
        }
        return null
    }
    var ql = Array.isArray,
        x = q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        D = N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        G = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        fl = [],
        s = -1;

    function z(l) {
        return {
            current: l
        }
    }

    function b(l) {
        0 > s || (l.current = fl[s], fl[s] = null, s--)
    }

    function M(l, t) {
        s++, fl[s] = l.current, l.current = t
    }
    var _ = z(null),
        Q = z(null),
        Y = z(null),
        Cl = z(null);

    function cl(l, t) {
        switch (M(Y, t), M(Q, l), M(_, null), t.nodeType) {
            case 9:
            case 11:
                l = (l = t.documentElement) && (l = l.namespaceURI) ? Do(l) : 0;
                break;
            default:
                if (l = t.tagName, t = t.namespaceURI) t = Do(t), l = Uo(t, l);
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
        b(_), M(_, l)
    }

    function kl() {
        b(_), b(Q), b(Y)
    }

    function Ce(l) {
        l.memoizedState !== null && M(Cl, l);
        var t = _.current,
            e = Uo(t, l.type);
        t !== e && (M(Q, l), M(_, e))
    }

    function ye(l) {
        Q.current === l && (b(_), b(Q)), Cl.current === l && (b(Cl), mu._currentValue = G)
    }
    var Be = Object.prototype.hasOwnProperty,
        ge = y.unstable_scheduleCallback,
        Yn = y.unstable_cancelCallback,
        xd = y.unstable_shouldYield,
        pd = y.unstable_requestPaint,
        At = y.unstable_now,
        Ed = y.unstable_getCurrentPriorityLevel,
        sf = y.unstable_ImmediatePriority,
        rf = y.unstable_UserBlockingPriority,
        Au = y.unstable_NormalPriority,
        Ad = y.unstable_LowPriority,
        of = y.unstable_IdlePriority,
        Td = y.log,
        zd = y.unstable_setDisableYieldValue,
        Aa = null,
        lt = null;

    function Kt(l) {
        if (typeof Td == "function" && zd(l), lt && typeof lt.setStrictMode == "function") try {
            lt.setStrictMode(Aa, l)
        } catch {}
    }
    var tt = Math.clz32 ? Math.clz32 : Nd,
        Md = Math.log,
        _d = Math.LN2;

    function Nd(l) {
        return l >>>= 0, l === 0 ? 32 : 31 - (Md(l) / _d | 0) | 0
    }
    var Tu = 256,
        zu = 4194304;

    function be(l) {
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

    function Mu(l, t, e) {
        var a = l.pendingLanes;
        if (a === 0) return 0;
        var u = 0,
            n = l.suspendedLanes,
            c = l.pingedLanes;
        l = l.warmLanes;
        var i = a & 134217727;
        return i !== 0 ? (a = i & ~n, a !== 0 ? u = be(a) : (c &= i, c !== 0 ? u = be(c) : e || (e = i & ~l, e !== 0 && (u = be(e))))) : (i = a & ~n, i !== 0 ? u = be(i) : c !== 0 ? u = be(c) : e || (e = a & ~l, e !== 0 && (u = be(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u
    }

    function Ta(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }

    function Od(l, t) {
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

    function df() {
        var l = Tu;
        return Tu <<= 1, (Tu & 4194048) === 0 && (Tu = 256), l
    }

    function hf() {
        var l = zu;
        return zu <<= 1, (zu & 62914560) === 0 && (zu = 4194304), l
    }

    function Gn(l) {
        for (var t = [], e = 0; 31 > e; e++) t.push(l);
        return t
    }

    function za(l, t) {
        l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
    }

    function Dd(l, t, e, a, u, n) {
        var c = l.pendingLanes;
        l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
        var i = l.entanglements,
            f = l.expirationTimes,
            m = l.hiddenUpdates;
        for (e = c & ~e; 0 < e;) {
            var p = 31 - tt(e),
                T = 1 << p;
            i[p] = 0, f[p] = -1;
            var g = m[p];
            if (g !== null)
                for (m[p] = null, p = 0; p < g.length; p++) {
                    var S = g[p];
                    S !== null && (S.lane &= -536870913)
                }
            e &= ~T
        }
        a !== 0 && vf(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t))
    }

    function vf(l, t, e) {
        l.pendingLanes |= t, l.suspendedLanes &= ~t;
        var a = 31 - tt(t);
        l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 4194090
    }

    function mf(l, t) {
        var e = l.entangledLanes |= t;
        for (l = l.entanglements; e;) {
            var a = 31 - tt(e),
                u = 1 << a;
            u & t | l[a] & t && (l[a] |= t), e &= ~u
        }
    }

    function wn(l) {
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

    function Qn(l) {
        return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function yf() {
        var l = D.p;
        return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Wo(l.type))
    }

    function Ud(l, t) {
        var e = D.p;
        try {
            return D.p = l, t()
        } finally {
            D.p = e
        }
    }
    var Jt = Math.random().toString(36).slice(2),
        Ll = "__reactFiber$" + Jt,
        $l = "__reactProps$" + Jt,
        Ye = "__reactContainer$" + Jt,
        Xn = "__reactEvents$" + Jt,
        Rd = "__reactListeners$" + Jt,
        jd = "__reactHandles$" + Jt,
        gf = "__reactResources$" + Jt,
        Ma = "__reactMarker$" + Jt;

    function Zn(l) {
        delete l[Ll], delete l[$l], delete l[Xn], delete l[Rd], delete l[jd]
    }

    function Ge(l) {
        var t = l[Ll];
        if (t) return t;
        for (var e = l.parentNode; e;) {
            if (t = e[Ye] || e[Ll]) {
                if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
                    for (l = qo(l); l !== null;) {
                        if (e = l[Ll]) return e;
                        l = qo(l)
                    }
                return t
            }
            l = e, e = l.parentNode
        }
        return null
    }

    function we(l) {
        if (l = l[Ll] || l[Ye]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return l
        }
        return null
    }

    function _a(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
        throw Error(d(33))
    }

    function Qe(l) {
        var t = l[gf];
        return t || (t = l[gf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function Bl(l) {
        l[Ma] = !0
    }
    var bf = new Set,
        Sf = {};

    function Se(l, t) {
        Xe(l, t), Xe(l + "Capture", t)
    }

    function Xe(l, t) {
        for (Sf[l] = t, l = 0; l < t.length; l++) bf.add(t[l])
    }
    var Hd = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        xf = {},
        pf = {};

    function qd(l) {
        return Be.call(pf, l) ? !0 : Be.call(xf, l) ? !1 : Hd.test(l) ? pf[l] = !0 : (xf[l] = !0, !1)
    }

    function _u(l, t, e) {
        if (qd(t))
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

    function Nu(l, t, e) {
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

    function Ut(l, t, e, a) {
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
    var Ln, Ef;

    function Ze(l) {
        if (Ln === void 0) try {
            throw Error()
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            Ln = t && t[1] || "", Ef = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Ln + l + Ef
    }
    var Vn = !1;

    function Kn(l, t) {
        if (!l || Vn) return "";
        Vn = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
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
                                } catch (S) {
                                    var g = S
                                }
                                Reflect.construct(l, [], T)
                            } else {
                                try {
                                    T.call()
                                } catch (S) {
                                    g = S
                                }
                                l.call(T.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (S) {
                                g = S
                            }(T = l()) && typeof T.catch == "function" && T.catch(function() {})
                        }
                    } catch (S) {
                        if (S && g && typeof S.stack == "string") return [S.stack, g.stack]
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
                c = n[0],
                i = n[1];
            if (c && i) {
                var f = c.split(`
`),
                    m = i.split(`
`);
                for (u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot");) a++;
                for (; u < m.length && !m[u].includes("DetermineComponentFrameRoot");) u++;
                if (a === f.length || u === m.length)
                    for (a = f.length - 1, u = m.length - 1; 1 <= a && 0 <= u && f[a] !== m[u];) u--;
                for (; 1 <= a && 0 <= u; a--, u--)
                    if (f[a] !== m[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--, u--, 0 > u || f[a] !== m[u]) {
                                    var p = `
` + f[a].replace(" at new ", " at ");
                                    return l.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", l.displayName)), p
                                } while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            Vn = !1, Error.prepareStackTrace = e
        }
        return (e = l ? l.displayName || l.name : "") ? Ze(e) : ""
    }

    function Cd(l) {
        switch (l.tag) {
            case 26:
            case 27:
            case 5:
                return Ze(l.type);
            case 16:
                return Ze("Lazy");
            case 13:
                return Ze("Suspense");
            case 19:
                return Ze("SuspenseList");
            case 0:
            case 15:
                return Kn(l.type, !1);
            case 11:
                return Kn(l.type.render, !1);
            case 1:
                return Kn(l.type, !0);
            case 31:
                return Ze("Activity");
            default:
                return ""
        }
    }

    function Af(l) {
        try {
            var t = "";
            do t += Cd(l), l = l.return; while (l);
            return t
        } catch (e) {
            return `
Error generating stack: ` + e.message + `
` + e.stack
        }
    }

    function st(l) {
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

    function Tf(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function Bd(l) {
        var t = Tf(l) ? "checked" : "value",
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
                set: function(c) {
                    a = "" + c, n.call(this, c)
                }
            }), Object.defineProperty(l, t, {
                enumerable: e.enumerable
            }), {
                getValue: function() {
                    return a
                },
                setValue: function(c) {
                    a = "" + c
                },
                stopTracking: function() {
                    l._valueTracker = null, delete l[t]
                }
            }
        }
    }

    function Ou(l) {
        l._valueTracker || (l._valueTracker = Bd(l))
    }

    function zf(l) {
        if (!l) return !1;
        var t = l._valueTracker;
        if (!t) return !0;
        var e = t.getValue(),
            a = "";
        return l && (a = Tf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1
    }

    function Du(l) {
        if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var Yd = /[\n"\\]/g;

    function rt(l) {
        return l.replace(Yd, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function Jn(l, t, e, a, u, n, c, i) {
        l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + st(t)) : l.value !== "" + st(t) && (l.value = "" + st(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? kn(l, c, st(t)) : e != null ? kn(l, c, st(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + st(i) : l.removeAttribute("name")
    }

    function Mf(l, t, e, a, u, n, c, i) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) return;
            e = e != null ? "" + st(e) : "", t = t != null ? "" + st(t) : e, i || t === l.value || (l.value = t), l.defaultValue = t
        }
        a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = i ? l.checked : !!a, l.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c)
    }

    function kn(l, t, e) {
        t === "number" && Du(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
    }

    function Le(l, t, e, a) {
        if (l = l.options, t) {
            t = {};
            for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
            for (e = 0; e < l.length; e++) u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0)
        } else {
            for (e = "" + st(e), t = null, u = 0; u < l.length; u++) {
                if (l[u].value === e) {
                    l[u].selected = !0, a && (l[u].defaultSelected = !0);
                    return
                }
                t !== null || l[u].disabled || (t = l[u])
            }
            t !== null && (t.selected = !0)
        }
    }

    function _f(l, t, e) {
        if (t != null && (t = "" + st(t), t !== l.value && (l.value = t), e == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = e != null ? "" + st(e) : ""
    }

    function Nf(l, t, e, a) {
        if (t == null) {
            if (a != null) {
                if (e != null) throw Error(d(92));
                if (ql(a)) {
                    if (1 < a.length) throw Error(d(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""), t = e
        }
        e = st(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a)
    }

    function Ve(l, t) {
        if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
                e.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var Gd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Of(l, t, e) {
        var a = t.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Gd.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
    }

    function Df(l, t, e) {
        if (t != null && typeof t != "object") throw Error(d(62));
        if (l = l.style, e != null) {
            for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
            for (var u in t) a = t[u], t.hasOwnProperty(u) && e[u] !== a && Of(l, u, a)
        } else
            for (var n in t) t.hasOwnProperty(n) && Of(l, n, t[n])
    }

    function $n(l) {
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
    var wd = new Map([
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
        Qd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Uu(l) {
        return Qd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    var Wn = null;

    function Fn(l) {
        return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
    }
    var Ke = null,
        Je = null;

    function Uf(l) {
        var t = we(l);
        if (t && (l = t.stateNode)) {
            var e = l[$l] || null;
            l: switch (l = t.stateNode, t.type) {
                case "input":
                    if (Jn(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
                        for (e = l; e.parentNode;) e = e.parentNode;
                        for (e = e.querySelectorAll('input[name="' + rt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
                            var a = e[t];
                            if (a !== l && a.form === l.form) {
                                var u = a[$l] || null;
                                if (!u) throw Error(d(90));
                                Jn(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                            }
                        }
                        for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && zf(a)
                    }
                    break l;
                case "textarea":
                    _f(l, e.value, e.defaultValue);
                    break l;
                case "select":
                    t = e.value, t != null && Le(l, !!e.multiple, t, !1)
            }
        }
    }
    var Pn = !1;

    function Rf(l, t, e) {
        if (Pn) return l(t, e);
        Pn = !0;
        try {
            var a = l(t);
            return a
        } finally {
            if (Pn = !1, (Ke !== null || Je !== null) && (gn(), Ke && (t = Ke, l = Je, Je = Ke = null, Uf(t), l)))
                for (t = 0; t < l.length; t++) Uf(l[t])
        }
    }

    function Na(l, t) {
        var e = l.stateNode;
        if (e === null) return null;
        var a = e[$l] || null;
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
        if (e && typeof e != "function") throw Error(d(231, t, typeof e));
        return e
    }
    var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        In = !1;
    if (Rt) try {
        var Oa = {};
        Object.defineProperty(Oa, "passive", {
            get: function() {
                In = !0
            }
        }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa)
    } catch {
        In = !1
    }
    var kt = null,
        lc = null,
        Ru = null;

    function jf() {
        if (Ru) return Ru;
        var l, t = lc,
            e = t.length,
            a, u = "value" in kt ? kt.value : kt.textContent,
            n = u.length;
        for (l = 0; l < e && t[l] === u[l]; l++);
        var c = e - l;
        for (a = 1; a <= c && t[e - a] === u[n - a]; a++);
        return Ru = u.slice(l, 1 < a ? 1 - a : void 0)
    }

    function ju(l) {
        var t = l.keyCode;
        return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
    }

    function Hu() {
        return !0
    }

    function Hf() {
        return !1
    }

    function Wl(l) {
        function t(e, a, u, n, c) {
            this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
            for (var i in l) l.hasOwnProperty(i) && (e = l[i], this[i] = e ? e(n) : n[i]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Hu : Hf, this.isPropagationStopped = Hf, this
        }
        return U(t.prototype, {
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
    var xe = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(l) {
                return l.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        qu = Wl(xe),
        Da = U({}, xe, {
            view: 0,
            detail: 0
        }),
        Xd = Wl(Da),
        tc, ec, Ua, Cu = U({}, Da, {
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
            getModifierState: uc,
            button: 0,
            buttons: 0,
            relatedTarget: function(l) {
                return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
            },
            movementX: function(l) {
                return "movementX" in l ? l.movementX : (l !== Ua && (Ua && l.type === "mousemove" ? (tc = l.screenX - Ua.screenX, ec = l.screenY - Ua.screenY) : ec = tc = 0, Ua = l), tc)
            },
            movementY: function(l) {
                return "movementY" in l ? l.movementY : ec
            }
        }),
        qf = Wl(Cu),
        Zd = U({}, Cu, {
            dataTransfer: 0
        }),
        Ld = Wl(Zd),
        Vd = U({}, Da, {
            relatedTarget: 0
        }),
        ac = Wl(Vd),
        Kd = U({}, xe, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Jd = Wl(Kd),
        kd = U({}, xe, {
            clipboardData: function(l) {
                return "clipboardData" in l ? l.clipboardData : window.clipboardData
            }
        }),
        $d = Wl(kd),
        Wd = U({}, xe, {
            data: 0
        }),
        Cf = Wl(Wd),
        Fd = {
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
        Pd = {
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
        Id = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function l0(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = Id[l]) ? !!t[l] : !1
    }

    function uc() {
        return l0
    }
    var t0 = U({}, Da, {
            key: function(l) {
                if (l.key) {
                    var t = Fd[l.key] || l.key;
                    if (t !== "Unidentified") return t
                }
                return l.type === "keypress" ? (l = ju(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Pd[l.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: uc,
            charCode: function(l) {
                return l.type === "keypress" ? ju(l) : 0
            },
            keyCode: function(l) {
                return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            },
            which: function(l) {
                return l.type === "keypress" ? ju(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            }
        }),
        e0 = Wl(t0),
        a0 = U({}, Cu, {
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
        Bf = Wl(a0),
        u0 = U({}, Da, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: uc
        }),
        n0 = Wl(u0),
        c0 = U({}, xe, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        i0 = Wl(c0),
        f0 = U({}, Cu, {
            deltaX: function(l) {
                return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
            },
            deltaY: function(l) {
                return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        s0 = Wl(f0),
        r0 = U({}, xe, {
            newState: 0,
            oldState: 0
        }),
        o0 = Wl(r0),
        d0 = [9, 13, 27, 32],
        nc = Rt && "CompositionEvent" in window,
        Ra = null;
    Rt && "documentMode" in document && (Ra = document.documentMode);
    var h0 = Rt && "TextEvent" in window && !Ra,
        Yf = Rt && (!nc || Ra && 8 < Ra && 11 >= Ra),
        Gf = " ",
        wf = !1;

    function Qf(l, t) {
        switch (l) {
            case "keyup":
                return d0.indexOf(t.keyCode) !== -1;
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

    function Xf(l) {
        return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
    }
    var ke = !1;

    function v0(l, t) {
        switch (l) {
            case "compositionend":
                return Xf(t);
            case "keypress":
                return t.which !== 32 ? null : (wf = !0, Gf);
            case "textInput":
                return l = t.data, l === Gf && wf ? null : l;
            default:
                return null
        }
    }

    function m0(l, t) {
        if (ke) return l === "compositionend" || !nc && Qf(l, t) ? (l = jf(), Ru = lc = kt = null, ke = !1, l) : null;
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
                return Yf && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var y0 = {
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

    function Zf(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!y0[l.type] : t === "textarea"
    }

    function Lf(l, t, e, a) {
        Ke ? Je ? Je.push(a) : Je = [a] : Ke = a, t = An(t, "onChange"), 0 < t.length && (e = new qu("onChange", "change", null, e, a), l.push({
            event: e,
            listeners: t
        }))
    }
    var ja = null,
        Ha = null;

    function g0(l) {
        zo(l, 0)
    }

    function Bu(l) {
        var t = _a(l);
        if (zf(t)) return l
    }

    function Vf(l, t) {
        if (l === "change") return t
    }
    var Kf = !1;
    if (Rt) {
        var cc;
        if (Rt) {
            var ic = "oninput" in document;
            if (!ic) {
                var Jf = document.createElement("div");
                Jf.setAttribute("oninput", "return;"), ic = typeof Jf.oninput == "function"
            }
            cc = ic
        } else cc = !1;
        Kf = cc && (!document.documentMode || 9 < document.documentMode)
    }

    function kf() {
        ja && (ja.detachEvent("onpropertychange", $f), Ha = ja = null)
    }

    function $f(l) {
        if (l.propertyName === "value" && Bu(Ha)) {
            var t = [];
            Lf(t, Ha, l, Fn(l)), Rf(g0, t)
        }
    }

    function b0(l, t, e) {
        l === "focusin" ? (kf(), ja = t, Ha = e, ja.attachEvent("onpropertychange", $f)) : l === "focusout" && kf()
    }

    function S0(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown") return Bu(Ha)
    }

    function x0(l, t) {
        if (l === "click") return Bu(t)
    }

    function p0(l, t) {
        if (l === "input" || l === "change") return Bu(t)
    }

    function E0(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var et = typeof Object.is == "function" ? Object.is : E0;

    function qa(l, t) {
        if (et(l, t)) return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
        var e = Object.keys(l),
            a = Object.keys(t);
        if (e.length !== a.length) return !1;
        for (a = 0; a < e.length; a++) {
            var u = e[a];
            if (!Be.call(t, u) || !et(l[u], t[u])) return !1
        }
        return !0
    }

    function Wf(l) {
        for (; l && l.firstChild;) l = l.firstChild;
        return l
    }

    function Ff(l, t) {
        var e = Wf(l);
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
            e = Wf(e)
        }
    }

    function Pf(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pf(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function If(l) {
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

    function fc(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var A0 = Rt && "documentMode" in document && 11 >= document.documentMode,
        $e = null,
        sc = null,
        Ca = null,
        rc = !1;

    function ls(l, t, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        rc || $e == null || $e !== Du(a) || (a = $e, "selectionStart" in a && fc(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), Ca && qa(Ca, a) || (Ca = a, a = An(sc, "onSelect"), 0 < a.length && (t = new qu("onSelect", "select", null, t, e), l.push({
            event: t,
            listeners: a
        }), t.target = $e)))
    }

    function pe(l, t) {
        var e = {};
        return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e
    }
    var We = {
            animationend: pe("Animation", "AnimationEnd"),
            animationiteration: pe("Animation", "AnimationIteration"),
            animationstart: pe("Animation", "AnimationStart"),
            transitionrun: pe("Transition", "TransitionRun"),
            transitionstart: pe("Transition", "TransitionStart"),
            transitioncancel: pe("Transition", "TransitionCancel"),
            transitionend: pe("Transition", "TransitionEnd")
        },
        oc = {},
        ts = {};
    Rt && (ts = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);

    function Ee(l) {
        if (oc[l]) return oc[l];
        if (!We[l]) return l;
        var t = We[l],
            e;
        for (e in t)
            if (t.hasOwnProperty(e) && e in ts) return oc[l] = t[e];
        return l
    }
    var es = Ee("animationend"),
        as = Ee("animationiteration"),
        us = Ee("animationstart"),
        T0 = Ee("transitionrun"),
        z0 = Ee("transitionstart"),
        M0 = Ee("transitioncancel"),
        ns = Ee("transitionend"),
        cs = new Map,
        dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    dc.push("scrollEnd");

    function St(l, t) {
        cs.set(l, t), Se(t, [l])
    }
    var is = new WeakMap;

    function ot(l, t) {
        if (typeof l == "object" && l !== null) {
            var e = is.get(l);
            return e !== void 0 ? e : (t = {
                value: l,
                source: t,
                stack: Af(t)
            }, is.set(l, t), t)
        }
        return {
            value: l,
            source: t,
            stack: Af(t)
        }
    }
    var dt = [],
        Fe = 0,
        hc = 0;

    function Yu() {
        for (var l = Fe, t = hc = Fe = 0; t < l;) {
            var e = dt[t];
            dt[t++] = null;
            var a = dt[t];
            dt[t++] = null;
            var u = dt[t];
            dt[t++] = null;
            var n = dt[t];
            if (dt[t++] = null, a !== null && u !== null) {
                var c = a.pending;
                c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u
            }
            n !== 0 && fs(e, u, n)
        }
    }

    function Gu(l, t, e, a) {
        dt[Fe++] = l, dt[Fe++] = t, dt[Fe++] = e, dt[Fe++] = a, hc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a)
    }

    function vc(l, t, e, a) {
        return Gu(l, t, e, a), wu(l)
    }

    function Pe(l, t) {
        return Gu(l, null, null, t), wu(l)
    }

    function fs(l, t, e) {
        l.lanes |= e;
        var a = l.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = l.return; n !== null;) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
        return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - tt(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null
    }

    function wu(l) {
        if (50 < iu) throw iu = 0, xi = null, Error(d(185));
        for (var t = l.return; t !== null;) l = t, t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var Ie = {};

    function _0(l, t, e, a) {
        this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function at(l, t, e, a) {
        return new _0(l, t, e, a)
    }

    function mc(l) {
        return l = l.prototype, !(!l || !l.isReactComponent)
    }

    function jt(l, t) {
        var e = l.alternate;
        return e === null ? (e = at(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e
    }

    function ss(l, t) {
        l.flags &= 65011714;
        var e = l.alternate;
        return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), l
    }

    function Qu(l, t, e, a, u, n) {
        var c = 0;
        if (a = l, typeof l == "function") mc(l) && (c = 1);
        else if (typeof l == "string") c = Oh(l, e, _.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else l: switch (l) {
            case Ml:
                return l = at(31, e, t, u), l.elementType = Ml, l.lanes = n, l;
            case yl:
                return Ae(e.children, u, n, t);
            case gl:
                c = 8, u |= 24;
                break;
            case al:
                return l = at(12, e, t, u | 2), l.elementType = al, l.lanes = n, l;
            case L:
                return l = at(13, e, t, u), l.elementType = L, l.lanes = n, l;
            case zl:
                return l = at(19, e, t, u), l.elementType = zl, l.lanes = n, l;
            default:
                if (typeof l == "object" && l !== null) switch (l.$$typeof) {
                    case bl:
                    case $:
                        c = 10;
                        break l;
                    case Ol:
                        c = 9;
                        break l;
                    case jl:
                        c = 11;
                        break l;
                    case I:
                        c = 14;
                        break l;
                    case Dl:
                        c = 16, a = null;
                        break l
                }
                c = 29, e = Error(d(130, l === null ? "null" : typeof l, "")), a = null
        }
        return t = at(c, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t
    }

    function Ae(l, t, e, a) {
        return l = at(7, l, a, t), l.lanes = e, l
    }

    function yc(l, t, e) {
        return l = at(6, l, null, t), l.lanes = e, l
    }

    function gc(l, t, e) {
        return t = at(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        }, t
    }
    var la = [],
        ta = 0,
        Xu = null,
        Zu = 0,
        ht = [],
        vt = 0,
        Te = null,
        Ht = 1,
        qt = "";

    function ze(l, t) {
        la[ta++] = Zu, la[ta++] = Xu, Xu = l, Zu = t
    }

    function rs(l, t, e) {
        ht[vt++] = Ht, ht[vt++] = qt, ht[vt++] = Te, Te = l;
        var a = Ht;
        l = qt;
        var u = 32 - tt(a) - 1;
        a &= ~(1 << u), e += 1;
        var n = 32 - tt(t) + u;
        if (30 < n) {
            var c = u - u % 5;
            n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, Ht = 1 << 32 - tt(t) + u | e << u | a, qt = n + l
        } else Ht = 1 << n | e << u | a, qt = l
    }

    function bc(l) {
        l.return !== null && (ze(l, 1), rs(l, 1, 0))
    }

    function Sc(l) {
        for (; l === Xu;) Xu = la[--ta], la[ta] = null, Zu = la[--ta], la[ta] = null;
        for (; l === Te;) Te = ht[--vt], ht[vt] = null, qt = ht[--vt], ht[vt] = null, Ht = ht[--vt], ht[vt] = null
    }
    var Jl = null,
        pl = null,
        nl = !1,
        Me = null,
        Tt = !1,
        xc = Error(d(519));

    function _e(l) {
        var t = Error(d(418, ""));
        throw Ga(ot(t, l)), xc
    }

    function os(l) {
        var t = l.stateNode,
            e = l.type,
            a = l.memoizedProps;
        switch (t[Ll] = l, t[$l] = a, e) {
            case "dialog":
                tl("cancel", t), tl("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                tl("load", t);
                break;
            case "video":
            case "audio":
                for (e = 0; e < su.length; e++) tl(su[e], t);
                break;
            case "source":
                tl("error", t);
                break;
            case "img":
            case "image":
            case "link":
                tl("error", t), tl("load", t);
                break;
            case "details":
                tl("toggle", t);
                break;
            case "input":
                tl("invalid", t), Mf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Ou(t);
                break;
            case "select":
                tl("invalid", t);
                break;
            case "textarea":
                tl("invalid", t), Nf(t, a.value, a.defaultValue, a.children), Ou(t)
        }
        e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Oo(t.textContent, e) ? (a.popover != null && (tl("beforetoggle", t), tl("toggle", t)), a.onScroll != null && tl("scroll", t), a.onScrollEnd != null && tl("scrollend", t), a.onClick != null && (t.onclick = Tn), t = !0) : t = !1, t || _e(l)
    }

    function ds(l) {
        for (Jl = l.return; Jl;) switch (Jl.tag) {
            case 5:
            case 13:
                Tt = !1;
                return;
            case 27:
            case 3:
                Tt = !0;
                return;
            default:
                Jl = Jl.return
        }
    }

    function Ba(l) {
        if (l !== Jl) return !1;
        if (!nl) return ds(l), nl = !0, !1;
        var t = l.tag,
            e;
        if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Ci(l.type, l.memoizedProps)), e = !e), e && pl && _e(l), ds(l), t === 13) {
            if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
            l: {
                for (l = l.nextSibling, t = 0; l;) {
                    if (l.nodeType === 8)
                        if (e = l.data, e === "/$") {
                            if (t === 0) {
                                pl = pt(l.nextSibling);
                                break l
                            }
                            t--
                        } else e !== "$" && e !== "$!" && e !== "$?" || t++;
                    l = l.nextSibling
                }
                pl = null
            }
        } else t === 27 ? (t = pl, re(l.type) ? (l = wi, wi = null, pl = l) : pl = t) : pl = Jl ? pt(l.stateNode.nextSibling) : null;
        return !0
    }

    function Ya() {
        pl = Jl = null, nl = !1
    }

    function hs() {
        var l = Me;
        return l !== null && (Il === null ? Il = l : Il.push.apply(Il, l), Me = null), l
    }

    function Ga(l) {
        Me === null ? Me = [l] : Me.push(l)
    }
    var pc = z(null),
        Ne = null,
        Ct = null;

    function $t(l, t, e) {
        M(pc, t._currentValue), t._currentValue = e
    }

    function Bt(l) {
        l._currentValue = pc.current, b(pc)
    }

    function Ec(l, t, e) {
        for (; l !== null;) {
            var a = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
            l = l.return
        }
    }

    function Ac(l, t, e, a) {
        var u = l.child;
        for (u !== null && (u.return = l); u !== null;) {
            var n = u.dependencies;
            if (n !== null) {
                var c = u.child;
                n = n.firstContext;
                l: for (; n !== null;) {
                    var i = n;
                    n = u;
                    for (var f = 0; f < t.length; f++)
                        if (i.context === t[f]) {
                            n.lanes |= e, i = n.alternate, i !== null && (i.lanes |= e), Ec(n.return, e, l), a || (c = null);
                            break l
                        } n = i.next
                }
            } else if (u.tag === 18) {
                if (c = u.return, c === null) throw Error(d(341));
                c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), Ec(c, e, l), c = null
            } else c = u.child;
            if (c !== null) c.return = u;
            else
                for (c = u; c !== null;) {
                    if (c === l) {
                        c = null;
                        break
                    }
                    if (u = c.sibling, u !== null) {
                        u.return = c.return, c = u;
                        break
                    }
                    c = c.return
                }
            u = c
        }
    }

    function wa(l, t, e, a) {
        l = null;
        for (var u = t, n = !1; u !== null;) {
            if (!n) {
                if ((u.flags & 524288) !== 0) n = !0;
                else if ((u.flags & 262144) !== 0) break
            }
            if (u.tag === 10) {
                var c = u.alternate;
                if (c === null) throw Error(d(387));
                if (c = c.memoizedProps, c !== null) {
                    var i = u.type;
                    et(u.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [i])
                }
            } else if (u === Cl.current) {
                if (c = u.alternate, c === null) throw Error(d(387));
                c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(mu) : l = [mu])
            }
            u = u.return
        }
        l !== null && Ac(t, l, e, a), t.flags |= 262144
    }

    function Lu(l) {
        for (l = l.firstContext; l !== null;) {
            if (!et(l.context._currentValue, l.memoizedValue)) return !0;
            l = l.next
        }
        return !1
    }

    function Oe(l) {
        Ne = l, Ct = null, l = l.dependencies, l !== null && (l.firstContext = null)
    }

    function Vl(l) {
        return vs(Ne, l)
    }

    function Vu(l, t) {
        return Ne === null && Oe(l), vs(l, t)
    }

    function vs(l, t) {
        var e = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: e,
                next: null
            }, Ct === null) {
            if (l === null) throw Error(d(308));
            Ct = t, l.dependencies = {
                lanes: 0,
                firstContext: t
            }, l.flags |= 524288
        } else Ct = Ct.next = t;
        return e
    }
    var N0 = typeof AbortController < "u" ? AbortController : function() {
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
        O0 = y.unstable_scheduleCallback,
        D0 = y.unstable_NormalPriority,
        Ul = {
            $$typeof: $,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Tc() {
        return {
            controller: new N0,
            data: new Map,
            refCount: 0
        }
    }

    function Qa(l) {
        l.refCount--, l.refCount === 0 && O0(D0, function() {
            l.controller.abort()
        })
    }
    var Xa = null,
        zc = 0,
        ea = 0,
        aa = null;

    function U0(l, t) {
        if (Xa === null) {
            var e = Xa = [];
            zc = 0, ea = _i(), aa = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    e.push(a)
                }
            }
        }
        return zc++, t.then(ms, ms), t
    }

    function ms() {
        if (--zc === 0 && Xa !== null) {
            aa !== null && (aa.status = "fulfilled");
            var l = Xa;
            Xa = null, ea = 0, aa = null;
            for (var t = 0; t < l.length; t++)(0, l[t])()
        }
    }

    function R0(l, t) {
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
    var ys = x.S;
    x.S = function(l, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && U0(l, t), ys !== null && ys(l, t)
    };
    var De = z(null);

    function Mc() {
        var l = De.current;
        return l !== null ? l : ml.pooledCache
    }

    function Ku(l, t) {
        t === null ? M(De, De.current) : M(De, t.pool)
    }

    function gs() {
        var l = Mc();
        return l === null ? null : {
            parent: Ul._currentValue,
            pool: l
        }
    }
    var Za = Error(d(460)),
        bs = Error(d(474)),
        Ju = Error(d(542)),
        _c = {
            then: function() {}
        };

    function Ss(l) {
        return l = l.status, l === "fulfilled" || l === "rejected"
    }

    function ku() {}

    function xs(l, t, e) {
        switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(ku, ku), t = e), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason, Es(l), l;
            default:
                if (typeof t.status == "string") t.then(ku, ku);
                else {
                    if (l = ml, l !== null && 100 < l.shellSuspendCounter) throw Error(d(482));
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
                        throw l = t.reason, Es(l), l
                }
                throw La = t, Za
        }
    }
    var La = null;

    function ps() {
        if (La === null) throw Error(d(459));
        var l = La;
        return La = null, l
    }

    function Es(l) {
        if (l === Za || l === Ju) throw Error(d(483))
    }
    var Wt = !1;

    function Nc(l) {
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

    function Oc(l, t) {
        l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }

    function Ft(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Pt(l, t, e) {
        var a = l.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (sl & 2) !== 0) {
            var u = a.pending;
            return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = wu(l), fs(l, null, e), t
        }
        return Gu(l, a, t, e), wu(l)
    }

    function Va(l, t, e) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
            var a = t.lanes;
            a &= l.pendingLanes, e |= a, t.lanes = e, mf(l, e)
        }
    }

    function Dc(l, t) {
        var e = l.updateQueue,
            a = l.alternate;
        if (a !== null && (a = a.updateQueue, e === a)) {
            var u = null,
                n = null;
            if (e = e.firstBaseUpdate, e !== null) {
                do {
                    var c = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? u = n = c : n = n.next = c, e = e.next
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
    var Uc = !1;

    function Ka() {
        if (Uc) {
            var l = aa;
            if (l !== null) throw l
        }
    }

    function Ja(l, t, e, a) {
        Uc = !1;
        var u = l.updateQueue;
        Wt = !1;
        var n = u.firstBaseUpdate,
            c = u.lastBaseUpdate,
            i = u.shared.pending;
        if (i !== null) {
            u.shared.pending = null;
            var f = i,
                m = f.next;
            f.next = null, c === null ? n = m : c.next = m, c = f;
            var p = l.alternate;
            p !== null && (p = p.updateQueue, i = p.lastBaseUpdate, i !== c && (i === null ? p.firstBaseUpdate = m : i.next = m, p.lastBaseUpdate = f))
        }
        if (n !== null) {
            var T = u.baseState;
            c = 0, p = m = f = null, i = n;
            do {
                var g = i.lane & -536870913,
                    S = g !== i.lane;
                if (S ? (el & g) === g : (a & g) === g) {
                    g !== 0 && g === ea && (Uc = !0), p !== null && (p = p.next = {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var V = l,
                            w = i;g = t;
                        var hl = e;
                        switch (w.tag) {
                            case 1:
                                if (V = w.payload, typeof V == "function") {
                                    T = V.call(hl, T, g);
                                    break l
                                }
                                T = V;
                                break l;
                            case 3:
                                V.flags = V.flags & -65537 | 128;
                            case 0:
                                if (V = w.payload, g = typeof V == "function" ? V.call(hl, T, g) : V, g == null) break l;
                                T = U({}, T, g);
                                break l;
                            case 2:
                                Wt = !0
                        }
                    }
                    g = i.callback, g !== null && (l.flags |= 64, S && (l.flags |= 8192), S = u.callbacks, S === null ? u.callbacks = [g] : S.push(g))
                } else S = {
                    lane: g,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                }, p === null ? (m = p = S, f = T) : p = p.next = S, c |= g;
                if (i = i.next, i === null) {
                    if (i = u.shared.pending, i === null) break;
                    S = i, i = S.next, S.next = null, u.lastBaseUpdate = S, u.shared.pending = null
                }
            } while (!0);
            p === null && (f = T), u.baseState = f, u.firstBaseUpdate = m, u.lastBaseUpdate = p, n === null && (u.shared.lanes = 0), ce |= c, l.lanes = c, l.memoizedState = T
        }
    }

    function As(l, t) {
        if (typeof l != "function") throw Error(d(191, l));
        l.call(t)
    }

    function Ts(l, t) {
        var e = l.callbacks;
        if (e !== null)
            for (l.callbacks = null, l = 0; l < e.length; l++) As(e[l], t)
    }
    var ua = z(null),
        $u = z(0);

    function zs(l, t) {
        l = Lt, M($u, l), M(ua, t), Lt = l | t.baseLanes
    }

    function Rc() {
        M($u, Lt), M(ua, ua.current)
    }

    function jc() {
        Lt = $u.current, b(ua), b($u)
    }
    var It = 0,
        W = null,
        ol = null,
        _l = null,
        Wu = !1,
        na = !1,
        Ue = !1,
        Fu = 0,
        ka = 0,
        ca = null,
        j0 = 0;

    function Al() {
        throw Error(d(321))
    }

    function Hc(l, t) {
        if (t === null) return !1;
        for (var e = 0; e < t.length && e < l.length; e++)
            if (!et(l[e], t[e])) return !1;
        return !0
    }

    function qc(l, t, e, a, u, n) {
        return It = n, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = l === null || l.memoizedState === null ? fr : sr, Ue = !1, n = e(a, u), Ue = !1, na && (n = _s(t, e, a, u)), Ms(l), n
    }

    function Ms(l) {
        x.H = an;
        var t = ol !== null && ol.next !== null;
        if (It = 0, _l = ol = W = null, Wu = !1, ka = 0, ca = null, t) throw Error(d(300));
        l === null || Yl || (l = l.dependencies, l !== null && Lu(l) && (Yl = !0))
    }

    function _s(l, t, e, a) {
        W = l;
        var u = 0;
        do {
            if (na && (ca = null), ka = 0, na = !1, 25 <= u) throw Error(d(301));
            if (u += 1, _l = ol = null, l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0)
            }
            x.H = w0, n = t(e, a)
        } while (na);
        return n
    }

    function H0() {
        var l = x.H,
            t = l.useState()[0];
        return t = typeof t.then == "function" ? $a(t) : t, l = l.useState()[0], (ol !== null ? ol.memoizedState : null) !== l && (W.flags |= 1024), t
    }

    function Cc() {
        var l = Fu !== 0;
        return Fu = 0, l
    }

    function Bc(l, t, e) {
        t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e
    }

    function Yc(l) {
        if (Wu) {
            for (l = l.memoizedState; l !== null;) {
                var t = l.queue;
                t !== null && (t.pending = null), l = l.next
            }
            Wu = !1
        }
        It = 0, _l = ol = W = null, na = !1, ka = Fu = 0, ca = null
    }

    function Fl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return _l === null ? W.memoizedState = _l = l : _l = _l.next = l, _l
    }

    function Nl() {
        if (ol === null) {
            var l = W.alternate;
            l = l !== null ? l.memoizedState : null
        } else l = ol.next;
        var t = _l === null ? W.memoizedState : _l.next;
        if (t !== null) _l = t, ol = l;
        else {
            if (l === null) throw W.alternate === null ? Error(d(467)) : Error(d(310));
            ol = l, l = {
                memoizedState: ol.memoizedState,
                baseState: ol.baseState,
                baseQueue: ol.baseQueue,
                queue: ol.queue,
                next: null
            }, _l === null ? W.memoizedState = _l = l : _l = _l.next = l
        }
        return _l
    }

    function Gc() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function $a(l) {
        var t = ka;
        return ka += 1, ca === null && (ca = []), l = xs(ca, l, t), t = W, (_l === null ? t.memoizedState : _l.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? fr : sr), l
    }

    function Pu(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function") return $a(l);
            if (l.$$typeof === $) return Vl(l)
        }
        throw Error(d(438, String(l)))
    }

    function wc(l) {
        var t = null,
            e = W.updateQueue;
        if (e !== null && (t = e.memoCache), t == null) {
            var a = W.alternate;
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
            }), e === null && (e = Gc(), W.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
            for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Et;
        return t.index++, e
    }

    function Yt(l, t) {
        return typeof t == "function" ? t(l) : t
    }

    function Iu(l) {
        var t = Nl();
        return Qc(t, ol, l)
    }

    function Qc(l, t, e) {
        var a = l.queue;
        if (a === null) throw Error(d(311));
        a.lastRenderedReducer = e;
        var u = l.baseQueue,
            n = a.pending;
        if (n !== null) {
            if (u !== null) {
                var c = u.next;
                u.next = n.next, n.next = c
            }
            t.baseQueue = u = n, a.pending = null
        }
        if (n = l.baseState, u === null) l.memoizedState = n;
        else {
            t = u.next;
            var i = c = null,
                f = null,
                m = t,
                p = !1;
            do {
                var T = m.lane & -536870913;
                if (T !== m.lane ? (el & T) === T : (It & T) === T) {
                    var g = m.revertLane;
                    if (g === 0) f !== null && (f = f.next = {
                        lane: 0,
                        revertLane: 0,
                        action: m.action,
                        hasEagerState: m.hasEagerState,
                        eagerState: m.eagerState,
                        next: null
                    }), T === ea && (p = !0);
                    else if ((It & g) === g) {
                        m = m.next, g === ea && (p = !0);
                        continue
                    } else T = {
                        lane: 0,
                        revertLane: m.revertLane,
                        action: m.action,
                        hasEagerState: m.hasEagerState,
                        eagerState: m.eagerState,
                        next: null
                    }, f === null ? (i = f = T, c = n) : f = f.next = T, W.lanes |= g, ce |= g;
                    T = m.action, Ue && e(n, T), n = m.hasEagerState ? m.eagerState : e(n, T)
                } else g = {
                    lane: T,
                    revertLane: m.revertLane,
                    action: m.action,
                    hasEagerState: m.hasEagerState,
                    eagerState: m.eagerState,
                    next: null
                }, f === null ? (i = f = g, c = n) : f = f.next = g, W.lanes |= T, ce |= T;
                m = m.next
            } while (m !== null && m !== t);
            if (f === null ? c = n : f.next = i, !et(n, l.memoizedState) && (Yl = !0, p && (e = aa, e !== null))) throw e;
            l.memoizedState = n, l.baseState = c, l.baseQueue = f, a.lastRenderedState = n
        }
        return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch]
    }

    function Xc(l) {
        var t = Nl(),
            e = t.queue;
        if (e === null) throw Error(d(311));
        e.lastRenderedReducer = l;
        var a = e.dispatch,
            u = e.pending,
            n = t.memoizedState;
        if (u !== null) {
            e.pending = null;
            var c = u = u.next;
            do n = l(n, c.action), c = c.next; while (c !== u);
            et(n, t.memoizedState) || (Yl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n
        }
        return [n, a]
    }

    function Ns(l, t, e) {
        var a = W,
            u = Nl(),
            n = nl;
        if (n) {
            if (e === void 0) throw Error(d(407));
            e = e()
        } else e = t();
        var c = !et((ol || u).memoizedState, e);
        c && (u.memoizedState = e, Yl = !0), u = u.queue;
        var i = Us.bind(null, a, u, l);
        if (Wa(2048, 8, i, [l]), u.getSnapshot !== t || c || _l !== null && _l.memoizedState.tag & 1) {
            if (a.flags |= 2048, ia(9, ln(), Ds.bind(null, a, u, e, t), null), ml === null) throw Error(d(349));
            n || (It & 124) !== 0 || Os(a, t, e)
        }
        return e
    }

    function Os(l, t, e) {
        l.flags |= 16384, l = {
            getSnapshot: t,
            value: e
        }, t = W.updateQueue, t === null ? (t = Gc(), W.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l))
    }

    function Ds(l, t, e, a) {
        t.value = e, t.getSnapshot = a, Rs(t) && js(l)
    }

    function Us(l, t, e) {
        return e(function() {
            Rs(t) && js(l)
        })
    }

    function Rs(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var e = t();
            return !et(l, e)
        } catch {
            return !0
        }
    }

    function js(l) {
        var t = Pe(l, 2);
        t !== null && ft(t, l, 2)
    }

    function Zc(l) {
        var t = Fl();
        if (typeof l == "function") {
            var e = l;
            if (l = e(), Ue) {
                Kt(!0);
                try {
                    e()
                } finally {
                    Kt(!1)
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

    function Hs(l, t, e, a) {
        return l.baseState = e, Qc(l, ol, typeof a == "function" ? a : Yt)
    }

    function q0(l, t, e, a, u) {
        if (en(l)) throw Error(d(485));
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
                then: function(c) {
                    n.listeners.push(c)
                }
            };
            x.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, qs(t, n)) : (n.next = e.next, t.pending = e.next = n)
        }
    }

    function qs(l, t) {
        var e = t.action,
            a = t.payload,
            u = l.state;
        if (t.isTransition) {
            var n = x.T,
                c = {};
            x.T = c;
            try {
                var i = e(u, a),
                    f = x.S;
                f !== null && f(c, i), Cs(l, t, i)
            } catch (m) {
                Lc(l, t, m)
            } finally {
                x.T = n
            }
        } else try {
            n = e(u, a), Cs(l, t, n)
        } catch (m) {
            Lc(l, t, m)
        }
    }

    function Cs(l, t, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            Bs(l, t, a)
        }, function(a) {
            return Lc(l, t, a)
        }) : Bs(l, t, e)
    }

    function Bs(l, t, e) {
        t.status = "fulfilled", t.value = e, Ys(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, qs(l, e)))
    }

    function Lc(l, t, e) {
        var a = l.pending;
        if (l.pending = null, a !== null) {
            a = a.next;
            do t.status = "rejected", t.reason = e, Ys(t), t = t.next; while (t !== a)
        }
        l.action = null
    }

    function Ys(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)(0, l[t])()
    }

    function Gs(l, t) {
        return t
    }

    function ws(l, t) {
        if (nl) {
            var e = ml.formState;
            if (e !== null) {
                l: {
                    var a = W;
                    if (nl) {
                        if (pl) {
                            t: {
                                for (var u = pl, n = Tt; u.nodeType !== 8;) {
                                    if (!n) {
                                        u = null;
                                        break t
                                    }
                                    if (u = pt(u.nextSibling), u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                n = u.data,
                                u = n === "F!" || n === "F" ? u : null
                            }
                            if (u) {
                                pl = pt(u.nextSibling), a = u.data === "F!";
                                break l
                            }
                        }
                        _e(a)
                    }
                    a = !1
                }
                a && (t = e[0])
            }
        }
        return e = Fl(), e.memoizedState = e.baseState = t, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Gs,
            lastRenderedState: t
        }, e.queue = a, e = nr.bind(null, W, a), a.dispatch = e, a = Zc(!1), n = $c.bind(null, W, !1, a.queue), a = Fl(), u = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        }, a.queue = u, e = q0.bind(null, W, u, n, e), u.dispatch = e, a.memoizedState = l, [t, e, !1]
    }

    function Qs(l) {
        var t = Nl();
        return Xs(t, ol, l)
    }

    function Xs(l, t, e) {
        if (t = Qc(l, t, Gs)[0], l = Iu(Yt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var a = $a(t)
        } catch (c) {
            throw c === Za ? Ju : c
        } else a = t;
        t = Nl();
        var u = t.queue,
            n = u.dispatch;
        return e !== t.memoizedState && (W.flags |= 2048, ia(9, ln(), C0.bind(null, u, e), null)), [a, n, l]
    }

    function C0(l, t) {
        l.action = t
    }

    function Zs(l) {
        var t = Nl(),
            e = ol;
        if (e !== null) return Xs(t, e, l);
        Nl(), t = t.memoizedState, e = Nl();
        var a = e.queue.dispatch;
        return e.memoizedState = l, [t, a, !1]
    }

    function ia(l, t, e, a) {
        return l = {
            tag: l,
            create: e,
            deps: a,
            inst: t,
            next: null
        }, t = W.updateQueue, t === null && (t = Gc(), W.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l
    }

    function ln() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function Ls() {
        return Nl().memoizedState
    }

    function tn(l, t, e, a) {
        var u = Fl();
        a = a === void 0 ? null : a, W.flags |= l, u.memoizedState = ia(1 | t, ln(), e, a)
    }

    function Wa(l, t, e, a) {
        var u = Nl();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        ol !== null && a !== null && Hc(a, ol.memoizedState.deps) ? u.memoizedState = ia(t, n, e, a) : (W.flags |= l, u.memoizedState = ia(1 | t, n, e, a))
    }

    function Vs(l, t) {
        tn(8390656, 8, l, t)
    }

    function Ks(l, t) {
        Wa(2048, 8, l, t)
    }

    function Js(l, t) {
        return Wa(4, 2, l, t)
    }

    function ks(l, t) {
        return Wa(4, 4, l, t)
    }

    function $s(l, t) {
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

    function Ws(l, t, e) {
        e = e != null ? e.concat([l]) : null, Wa(4, 4, $s.bind(null, t, l), e)
    }

    function Vc() {}

    function Fs(l, t) {
        var e = Nl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        return t !== null && Hc(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l)
    }

    function Ps(l, t) {
        var e = Nl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        if (t !== null && Hc(t, a[1])) return a[0];
        if (a = l(), Ue) {
            Kt(!0);
            try {
                l()
            } finally {
                Kt(!1)
            }
        }
        return e.memoizedState = [a, t], a
    }

    function Kc(l, t, e) {
        return e === void 0 || (It & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = e, l = to(), W.lanes |= l, ce |= l, e)
    }

    function Is(l, t, e, a) {
        return et(e, t) ? e : ua.current !== null ? (l = Kc(l, e, a), et(l, t) || (Yl = !0), l) : (It & 42) === 0 ? (Yl = !0, l.memoizedState = e) : (l = to(), W.lanes |= l, ce |= l, t)
    }

    function lr(l, t, e, a, u) {
        var n = D.p;
        D.p = n !== 0 && 8 > n ? n : 8;
        var c = x.T,
            i = {};
        x.T = i, $c(l, !1, t, e);
        try {
            var f = u(),
                m = x.S;
            if (m !== null && m(i, f), f !== null && typeof f == "object" && typeof f.then == "function") {
                var p = R0(f, a);
                Fa(l, t, p, it(l))
            } else Fa(l, t, a, it(l))
        } catch (T) {
            Fa(l, t, {
                then: function() {},
                status: "rejected",
                reason: T
            }, it())
        } finally {
            D.p = n, x.T = c
        }
    }

    function B0() {}

    function Jc(l, t, e, a) {
        if (l.tag !== 5) throw Error(d(476));
        var u = tr(l).queue;
        lr(l, u, t, G, e === null ? B0 : function() {
            return er(l), e(a)
        })
    }

    function tr(l) {
        var t = l.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: G,
            baseState: G,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Yt,
                lastRenderedState: G
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

    function er(l) {
        var t = tr(l).next.queue;
        Fa(l, t, {}, it())
    }

    function kc() {
        return Vl(mu)
    }

    function ar() {
        return Nl().memoizedState
    }

    function ur() {
        return Nl().memoizedState
    }

    function Y0(l) {
        for (var t = l.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var e = it();
                    l = Ft(e);
                    var a = Pt(t, l, e);
                    a !== null && (ft(a, t, e), Va(a, t, e)), t = {
                        cache: Tc()
                    }, l.payload = t;
                    return
            }
            t = t.return
        }
    }

    function G0(l, t, e) {
        var a = it();
        e = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, en(l) ? cr(t, e) : (e = vc(l, t, e, a), e !== null && (ft(e, l, a), ir(e, t, a)))
    }

    function nr(l, t, e) {
        var a = it();
        Fa(l, t, e, a)
    }

    function Fa(l, t, e, a) {
        var u = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (en(l)) cr(t, u);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
                var c = t.lastRenderedState,
                    i = n(c, e);
                if (u.hasEagerState = !0, u.eagerState = i, et(i, c)) return Gu(l, t, u, 0), ml === null && Yu(), !1
            } catch {} finally {}
            if (e = vc(l, t, u, a), e !== null) return ft(e, l, a), ir(e, t, a), !0
        }
        return !1
    }

    function $c(l, t, e, a) {
        if (a = {
                lane: 2,
                revertLane: _i(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, en(l)) {
            if (t) throw Error(d(479))
        } else t = vc(l, e, a, 2), t !== null && ft(t, l, 2)
    }

    function en(l) {
        var t = l.alternate;
        return l === W || t !== null && t === W
    }

    function cr(l, t) {
        na = Wu = !0;
        var e = l.pending;
        e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t
    }

    function ir(l, t, e) {
        if ((e & 4194048) !== 0) {
            var a = t.lanes;
            a &= l.pendingLanes, e |= a, t.lanes = e, mf(l, e)
        }
    }
    var an = {
            readContext: Vl,
            use: Pu,
            useCallback: Al,
            useContext: Al,
            useEffect: Al,
            useImperativeHandle: Al,
            useLayoutEffect: Al,
            useInsertionEffect: Al,
            useMemo: Al,
            useReducer: Al,
            useRef: Al,
            useState: Al,
            useDebugValue: Al,
            useDeferredValue: Al,
            useTransition: Al,
            useSyncExternalStore: Al,
            useId: Al,
            useHostTransitionStatus: Al,
            useFormState: Al,
            useActionState: Al,
            useOptimistic: Al,
            useMemoCache: Al,
            useCacheRefresh: Al
        },
        fr = {
            readContext: Vl,
            use: Pu,
            useCallback: function(l, t) {
                return Fl().memoizedState = [l, t === void 0 ? null : t], l
            },
            useContext: Vl,
            useEffect: Vs,
            useImperativeHandle: function(l, t, e) {
                e = e != null ? e.concat([l]) : null, tn(4194308, 4, $s.bind(null, t, l), e)
            },
            useLayoutEffect: function(l, t) {
                return tn(4194308, 4, l, t)
            },
            useInsertionEffect: function(l, t) {
                tn(4, 2, l, t)
            },
            useMemo: function(l, t) {
                var e = Fl();
                t = t === void 0 ? null : t;
                var a = l();
                if (Ue) {
                    Kt(!0);
                    try {
                        l()
                    } finally {
                        Kt(!1)
                    }
                }
                return e.memoizedState = [a, t], a
            },
            useReducer: function(l, t, e) {
                var a = Fl();
                if (e !== void 0) {
                    var u = e(t);
                    if (Ue) {
                        Kt(!0);
                        try {
                            e(t)
                        } finally {
                            Kt(!1)
                        }
                    }
                } else u = t;
                return a.memoizedState = a.baseState = u, l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: l,
                    lastRenderedState: u
                }, a.queue = l, l = l.dispatch = G0.bind(null, W, l), [a.memoizedState, l]
            },
            useRef: function(l) {
                var t = Fl();
                return l = {
                    current: l
                }, t.memoizedState = l
            },
            useState: function(l) {
                l = Zc(l);
                var t = l.queue,
                    e = nr.bind(null, W, t);
                return t.dispatch = e, [l.memoizedState, e]
            },
            useDebugValue: Vc,
            useDeferredValue: function(l, t) {
                var e = Fl();
                return Kc(e, l, t)
            },
            useTransition: function() {
                var l = Zc(!1);
                return l = lr.bind(null, W, l.queue, !0, !1), Fl().memoizedState = l, [!1, l]
            },
            useSyncExternalStore: function(l, t, e) {
                var a = W,
                    u = Fl();
                if (nl) {
                    if (e === void 0) throw Error(d(407));
                    e = e()
                } else {
                    if (e = t(), ml === null) throw Error(d(349));
                    (el & 124) !== 0 || Os(a, t, e)
                }
                u.memoizedState = e;
                var n = {
                    value: e,
                    getSnapshot: t
                };
                return u.queue = n, Vs(Us.bind(null, a, n, l), [l]), a.flags |= 2048, ia(9, ln(), Ds.bind(null, a, n, e, t), null), e
            },
            useId: function() {
                var l = Fl(),
                    t = ml.identifierPrefix;
                if (nl) {
                    var e = qt,
                        a = Ht;
                    e = (a & ~(1 << 32 - tt(a) - 1)).toString(32) + e, t = "«" + t + "R" + e, e = Fu++, 0 < e && (t += "H" + e.toString(32)), t += "»"
                } else e = j0++, t = "«" + t + "r" + e.toString(32) + "»";
                return l.memoizedState = t
            },
            useHostTransitionStatus: kc,
            useFormState: ws,
            useActionState: ws,
            useOptimistic: function(l) {
                var t = Fl();
                t.memoizedState = t.baseState = l;
                var e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = e, t = $c.bind(null, W, !0, e), e.dispatch = t, [l, t]
            },
            useMemoCache: wc,
            useCacheRefresh: function() {
                return Fl().memoizedState = Y0.bind(null, W)
            }
        },
        sr = {
            readContext: Vl,
            use: Pu,
            useCallback: Fs,
            useContext: Vl,
            useEffect: Ks,
            useImperativeHandle: Ws,
            useInsertionEffect: Js,
            useLayoutEffect: ks,
            useMemo: Ps,
            useReducer: Iu,
            useRef: Ls,
            useState: function() {
                return Iu(Yt)
            },
            useDebugValue: Vc,
            useDeferredValue: function(l, t) {
                var e = Nl();
                return Is(e, ol.memoizedState, l, t)
            },
            useTransition: function() {
                var l = Iu(Yt)[0],
                    t = Nl().memoizedState;
                return [typeof l == "boolean" ? l : $a(l), t]
            },
            useSyncExternalStore: Ns,
            useId: ar,
            useHostTransitionStatus: kc,
            useFormState: Qs,
            useActionState: Qs,
            useOptimistic: function(l, t) {
                var e = Nl();
                return Hs(e, ol, l, t)
            },
            useMemoCache: wc,
            useCacheRefresh: ur
        },
        w0 = {
            readContext: Vl,
            use: Pu,
            useCallback: Fs,
            useContext: Vl,
            useEffect: Ks,
            useImperativeHandle: Ws,
            useInsertionEffect: Js,
            useLayoutEffect: ks,
            useMemo: Ps,
            useReducer: Xc,
            useRef: Ls,
            useState: function() {
                return Xc(Yt)
            },
            useDebugValue: Vc,
            useDeferredValue: function(l, t) {
                var e = Nl();
                return ol === null ? Kc(e, l, t) : Is(e, ol.memoizedState, l, t)
            },
            useTransition: function() {
                var l = Xc(Yt)[0],
                    t = Nl().memoizedState;
                return [typeof l == "boolean" ? l : $a(l), t]
            },
            useSyncExternalStore: Ns,
            useId: ar,
            useHostTransitionStatus: kc,
            useFormState: Zs,
            useActionState: Zs,
            useOptimistic: function(l, t) {
                var e = Nl();
                return ol !== null ? Hs(e, ol, l, t) : (e.baseState = l, [l, e.queue.dispatch])
            },
            useMemoCache: wc,
            useCacheRefresh: ur
        },
        fa = null,
        Pa = 0;

    function un(l) {
        var t = Pa;
        return Pa += 1, fa === null && (fa = []), xs(fa, l, t)
    }

    function Ia(l, t) {
        t = t.props.ref, l.ref = t !== void 0 ? t : null
    }

    function nn(l, t) {
        throw t.$$typeof === k ? Error(d(525)) : (l = Object.prototype.toString.call(t), Error(d(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }

    function rr(l) {
        var t = l._init;
        return t(l._payload)
    }

    function or(l) {
        function t(o, r) {
            if (l) {
                var h = o.deletions;
                h === null ? (o.deletions = [r], o.flags |= 16) : h.push(r)
            }
        }

        function e(o, r) {
            if (!l) return null;
            for (; r !== null;) t(o, r), r = r.sibling;
            return null
        }

        function a(o) {
            for (var r = new Map; o !== null;) o.key !== null ? r.set(o.key, o) : r.set(o.index, o), o = o.sibling;
            return r
        }

        function u(o, r) {
            return o = jt(o, r), o.index = 0, o.sibling = null, o
        }

        function n(o, r, h) {
            return o.index = h, l ? (h = o.alternate, h !== null ? (h = h.index, h < r ? (o.flags |= 67108866, r) : h) : (o.flags |= 67108866, r)) : (o.flags |= 1048576, r)
        }

        function c(o) {
            return l && o.alternate === null && (o.flags |= 67108866), o
        }

        function i(o, r, h, E) {
            return r === null || r.tag !== 6 ? (r = yc(h, o.mode, E), r.return = o, r) : (r = u(r, h), r.return = o, r)
        }

        function f(o, r, h, E) {
            var R = h.type;
            return R === yl ? p(o, r, h.props.children, E, h.key) : r !== null && (r.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Dl && rr(R) === r.type) ? (r = u(r, h.props), Ia(r, h), r.return = o, r) : (r = Qu(h.type, h.key, h.props, null, o.mode, E), Ia(r, h), r.return = o, r)
        }

        function m(o, r, h, E) {
            return r === null || r.tag !== 4 || r.stateNode.containerInfo !== h.containerInfo || r.stateNode.implementation !== h.implementation ? (r = gc(h, o.mode, E), r.return = o, r) : (r = u(r, h.children || []), r.return = o, r)
        }

        function p(o, r, h, E, R) {
            return r === null || r.tag !== 7 ? (r = Ae(h, o.mode, E, R), r.return = o, r) : (r = u(r, h), r.return = o, r)
        }

        function T(o, r, h) {
            if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return r = yc("" + r, o.mode, h), r.return = o, r;
            if (typeof r == "object" && r !== null) {
                switch (r.$$typeof) {
                    case F:
                        return h = Qu(r.type, r.key, r.props, null, o.mode, h), Ia(h, r), h.return = o, h;
                    case il:
                        return r = gc(r, o.mode, h), r.return = o, r;
                    case Dl:
                        var E = r._init;
                        return r = E(r._payload), T(o, r, h)
                }
                if (ql(r) || Hl(r)) return r = Ae(r, o.mode, h, null), r.return = o, r;
                if (typeof r.then == "function") return T(o, un(r), h);
                if (r.$$typeof === $) return T(o, Vu(o, r), h);
                nn(o, r)
            }
            return null
        }

        function g(o, r, h, E) {
            var R = r !== null ? r.key : null;
            if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return R !== null ? null : i(o, r, "" + h, E);
            if (typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                    case F:
                        return h.key === R ? f(o, r, h, E) : null;
                    case il:
                        return h.key === R ? m(o, r, h, E) : null;
                    case Dl:
                        return R = h._init, h = R(h._payload), g(o, r, h, E)
                }
                if (ql(h) || Hl(h)) return R !== null ? null : p(o, r, h, E, null);
                if (typeof h.then == "function") return g(o, r, un(h), E);
                if (h.$$typeof === $) return g(o, r, Vu(o, h), E);
                nn(o, h)
            }
            return null
        }

        function S(o, r, h, E, R) {
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return o = o.get(h) || null, i(r, o, "" + E, R);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case F:
                        return o = o.get(E.key === null ? h : E.key) || null, f(r, o, E, R);
                    case il:
                        return o = o.get(E.key === null ? h : E.key) || null, m(r, o, E, R);
                    case Dl:
                        var P = E._init;
                        return E = P(E._payload), S(o, r, h, E, R)
                }
                if (ql(E) || Hl(E)) return o = o.get(h) || null, p(r, o, E, R, null);
                if (typeof E.then == "function") return S(o, r, h, un(E), R);
                if (E.$$typeof === $) return S(o, r, h, Vu(r, E), R);
                nn(r, E)
            }
            return null
        }

        function V(o, r, h, E) {
            for (var R = null, P = null, C = r, X = r = 0, wl = null; C !== null && X < h.length; X++) {
                C.index > X ? (wl = C, C = null) : wl = C.sibling;
                var ul = g(o, C, h[X], E);
                if (ul === null) {
                    C === null && (C = wl);
                    break
                }
                l && C && ul.alternate === null && t(o, C), r = n(ul, r, X), P === null ? R = ul : P.sibling = ul, P = ul, C = wl
            }
            if (X === h.length) return e(o, C), nl && ze(o, X), R;
            if (C === null) {
                for (; X < h.length; X++) C = T(o, h[X], E), C !== null && (r = n(C, r, X), P === null ? R = C : P.sibling = C, P = C);
                return nl && ze(o, X), R
            }
            for (C = a(C); X < h.length; X++) wl = S(C, o, X, h[X], E), wl !== null && (l && wl.alternate !== null && C.delete(wl.key === null ? X : wl.key), r = n(wl, r, X), P === null ? R = wl : P.sibling = wl, P = wl);
            return l && C.forEach(function(me) {
                return t(o, me)
            }), nl && ze(o, X), R
        }

        function w(o, r, h, E) {
            if (h == null) throw Error(d(151));
            for (var R = null, P = null, C = r, X = r = 0, wl = null, ul = h.next(); C !== null && !ul.done; X++, ul = h.next()) {
                C.index > X ? (wl = C, C = null) : wl = C.sibling;
                var me = g(o, C, ul.value, E);
                if (me === null) {
                    C === null && (C = wl);
                    break
                }
                l && C && me.alternate === null && t(o, C), r = n(me, r, X), P === null ? R = me : P.sibling = me, P = me, C = wl
            }
            if (ul.done) return e(o, C), nl && ze(o, X), R;
            if (C === null) {
                for (; !ul.done; X++, ul = h.next()) ul = T(o, ul.value, E), ul !== null && (r = n(ul, r, X), P === null ? R = ul : P.sibling = ul, P = ul);
                return nl && ze(o, X), R
            }
            for (C = a(C); !ul.done; X++, ul = h.next()) ul = S(C, o, X, ul.value, E), ul !== null && (l && ul.alternate !== null && C.delete(ul.key === null ? X : ul.key), r = n(ul, r, X), P === null ? R = ul : P.sibling = ul, P = ul);
            return l && C.forEach(function(Qh) {
                return t(o, Qh)
            }), nl && ze(o, X), R
        }

        function hl(o, r, h, E) {
            if (typeof h == "object" && h !== null && h.type === yl && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                    case F:
                        l: {
                            for (var R = h.key; r !== null;) {
                                if (r.key === R) {
                                    if (R = h.type, R === yl) {
                                        if (r.tag === 7) {
                                            e(o, r.sibling), E = u(r, h.props.children), E.return = o, o = E;
                                            break l
                                        }
                                    } else if (r.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Dl && rr(R) === r.type) {
                                        e(o, r.sibling), E = u(r, h.props), Ia(E, h), E.return = o, o = E;
                                        break l
                                    }
                                    e(o, r);
                                    break
                                } else t(o, r);
                                r = r.sibling
                            }
                            h.type === yl ? (E = Ae(h.props.children, o.mode, E, h.key), E.return = o, o = E) : (E = Qu(h.type, h.key, h.props, null, o.mode, E), Ia(E, h), E.return = o, o = E)
                        }
                        return c(o);
                    case il:
                        l: {
                            for (R = h.key; r !== null;) {
                                if (r.key === R)
                                    if (r.tag === 4 && r.stateNode.containerInfo === h.containerInfo && r.stateNode.implementation === h.implementation) {
                                        e(o, r.sibling), E = u(r, h.children || []), E.return = o, o = E;
                                        break l
                                    } else {
                                        e(o, r);
                                        break
                                    }
                                else t(o, r);
                                r = r.sibling
                            }
                            E = gc(h, o.mode, E),
                            E.return = o,
                            o = E
                        }
                        return c(o);
                    case Dl:
                        return R = h._init, h = R(h._payload), hl(o, r, h, E)
                }
                if (ql(h)) return V(o, r, h, E);
                if (Hl(h)) {
                    if (R = Hl(h), typeof R != "function") throw Error(d(150));
                    return h = R.call(h), w(o, r, h, E)
                }
                if (typeof h.then == "function") return hl(o, r, un(h), E);
                if (h.$$typeof === $) return hl(o, r, Vu(o, h), E);
                nn(o, h)
            }
            return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, r !== null && r.tag === 6 ? (e(o, r.sibling), E = u(r, h), E.return = o, o = E) : (e(o, r), E = yc(h, o.mode, E), E.return = o, o = E), c(o)) : e(o, r)
        }
        return function(o, r, h, E) {
            try {
                Pa = 0;
                var R = hl(o, r, h, E);
                return fa = null, R
            } catch (C) {
                if (C === Za || C === Ju) throw C;
                var P = at(29, C, null, o.mode);
                return P.lanes = E, P.return = o, P
            } finally {}
        }
    }
    var sa = or(!0),
        dr = or(!1),
        mt = z(null),
        zt = null;

    function le(l) {
        var t = l.alternate;
        M(Rl, Rl.current & 1), M(mt, l), zt === null && (t === null || ua.current !== null || t.memoizedState !== null) && (zt = l)
    }

    function hr(l) {
        if (l.tag === 22) {
            if (M(Rl, Rl.current), M(mt, l), zt === null) {
                var t = l.alternate;
                t !== null && t.memoizedState !== null && (zt = l)
            }
        } else te()
    }

    function te() {
        M(Rl, Rl.current), M(mt, mt.current)
    }

    function Gt(l) {
        b(mt), zt === l && (zt = null), b(Rl)
    }
    var Rl = z(0);

    function cn(l) {
        for (var t = l; t !== null;) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || Gi(e))) return t
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

    function Wc(l, t, e, a) {
        t = l.memoizedState, e = e(a, t), e = e == null ? t : U({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e)
    }
    var Fc = {
        enqueueSetState: function(l, t, e) {
            l = l._reactInternals;
            var a = it(),
                u = Ft(a);
            u.payload = t, e != null && (u.callback = e), t = Pt(l, u, a), t !== null && (ft(t, l, a), Va(t, l, a))
        },
        enqueueReplaceState: function(l, t, e) {
            l = l._reactInternals;
            var a = it(),
                u = Ft(a);
            u.tag = 1, u.payload = t, e != null && (u.callback = e), t = Pt(l, u, a), t !== null && (ft(t, l, a), Va(t, l, a))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var e = it(),
                a = Ft(e);
            a.tag = 2, t != null && (a.callback = t), t = Pt(l, a, e), t !== null && (ft(t, l, e), Va(t, l, e))
        }
    };

    function vr(l, t, e, a, u, n, c) {
        return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, c) : t.prototype && t.prototype.isPureReactComponent ? !qa(e, a) || !qa(u, n) : !0
    }

    function mr(l, t, e, a) {
        l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && Fc.enqueueReplaceState(t, t.state, null)
    }

    function Re(l, t) {
        var e = t;
        if ("ref" in t) {
            e = {};
            for (var a in t) a !== "ref" && (e[a] = t[a])
        }
        if (l = l.defaultProps) {
            e === t && (e = U({}, e));
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

    function yr(l) {
        fn(l)
    }

    function gr(l) {
        console.error(l)
    }

    function br(l) {
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

    function Sr(l, t, e) {
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

    function Pc(l, t, e) {
        return e = Ft(e), e.tag = 3, e.payload = {
            element: null
        }, e.callback = function() {
            sn(l, t)
        }, e
    }

    function xr(l) {
        return l = Ft(l), l.tag = 3, l
    }

    function pr(l, t, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var n = a.value;
            l.payload = function() {
                return u(n)
            }, l.callback = function() {
                Sr(t, e, a)
            }
        }
        var c = e.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
            Sr(t, e, a), typeof u != "function" && (ie === null ? ie = new Set([this]) : ie.add(this));
            var i = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: i !== null ? i : ""
            })
        })
    }

    function Q0(l, t, e, a, u) {
        if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = e.alternate, t !== null && wa(t, e, u, !0), e = mt.current, e !== null) {
                switch (e.tag) {
                    case 13:
                        return zt === null ? Ei() : e.alternate === null && El === 0 && (El = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === _c ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = new Set([a]) : t.add(a), Ti(l, a, u)), !1;
                    case 22:
                        return e.flags |= 65536, a === _c ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([a])
                        }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = new Set([a]) : e.add(a)), Ti(l, a, u)), !1
                }
                throw Error(d(435, e.tag))
            }
            return Ti(l, a, u), Ei(), !1
        }
        if (nl) return t = mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== xc && (l = Error(d(422), {
            cause: a
        }), Ga(ot(l, e)))) : (a !== xc && (t = Error(d(423), {
            cause: a
        }), Ga(ot(t, e))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = ot(a, e), u = Pc(l.stateNode, a, u), Dc(l, u), El !== 4 && (El = 2)), !1;
        var n = Error(d(520), {
            cause: a
        });
        if (n = ot(n, e), cu === null ? cu = [n] : cu.push(n), El !== 4 && (El = 2), t === null) return !0;
        a = ot(a, e), e = t;
        do {
            switch (e.tag) {
                case 3:
                    return e.flags |= 65536, l = u & -u, e.lanes |= l, l = Pc(e.stateNode, a, l), Dc(e, l), !1;
                case 1:
                    if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ie === null || !ie.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = xr(u), pr(u, l, e, a), Dc(e, u), !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var Er = Error(d(461)),
        Yl = !1;

    function Ql(l, t, e, a) {
        t.child = l === null ? dr(t, null, e, a) : sa(t, l.child, e, a)
    }

    function Ar(l, t, e, a, u) {
        e = e.render;
        var n = t.ref;
        if ("ref" in a) {
            var c = {};
            for (var i in a) i !== "ref" && (c[i] = a[i])
        } else c = a;
        return Oe(t), a = qc(l, t, e, c, n, u), i = Cc(), l !== null && !Yl ? (Bc(l, t, u), wt(l, t, u)) : (nl && i && bc(t), t.flags |= 1, Ql(l, t, a, u), t.child)
    }

    function Tr(l, t, e, a, u) {
        if (l === null) {
            var n = e.type;
            return typeof n == "function" && !mc(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, zr(l, t, n, a, u)) : (l = Qu(e.type, null, a, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l)
        }
        if (n = l.child, !ci(l, u)) {
            var c = n.memoizedProps;
            if (e = e.compare, e = e !== null ? e : qa, e(c, a) && l.ref === t.ref) return wt(l, t, u)
        }
        return t.flags |= 1, l = jt(n, a), l.ref = t.ref, l.return = t, t.child = l
    }

    function zr(l, t, e, a, u) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (qa(n, a) && l.ref === t.ref)
                if (Yl = !1, t.pendingProps = a = n, ci(l, u))(l.flags & 131072) !== 0 && (Yl = !0);
                else return t.lanes = l.lanes, wt(l, t, u)
        }
        return Ic(l, t, e, a, u)
    }

    function Mr(l, t, e) {
        var a = t.pendingProps,
            u = a.children,
            n = l !== null ? l.memoizedState : null;
        if (a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (a = n !== null ? n.baseLanes | e : e, l !== null) {
                    for (u = t.child = l.child, n = 0; u !== null;) n = n | u.lanes | u.childLanes, u = u.sibling;
                    t.childLanes = n & ~a
                } else t.childLanes = 0, t.child = null;
                return _r(l, t, a, e)
            }
            if ((e & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, l !== null && Ku(t, n !== null ? n.cachePool : null), n !== null ? zs(t, n) : Rc(), hr(t);
            else return t.lanes = t.childLanes = 536870912, _r(l, t, n !== null ? n.baseLanes | e : e, e)
        } else n !== null ? (Ku(t, n.cachePool), zs(t, n), te(), t.memoizedState = null) : (l !== null && Ku(t, null), Rc(), te());
        return Ql(l, t, u, e), t.child
    }

    function _r(l, t, e, a) {
        var u = Mc();
        return u = u === null ? null : {
            parent: Ul._currentValue,
            pool: u
        }, t.memoizedState = {
            baseLanes: e,
            cachePool: u
        }, l !== null && Ku(t, null), Rc(), hr(t), l !== null && wa(l, t, a, !0), null
    }

    function rn(l, t) {
        var e = t.ref;
        if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object") throw Error(d(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816)
        }
    }

    function Ic(l, t, e, a, u) {
        return Oe(t), e = qc(l, t, e, a, void 0, u), a = Cc(), l !== null && !Yl ? (Bc(l, t, u), wt(l, t, u)) : (nl && a && bc(t), t.flags |= 1, Ql(l, t, e, u), t.child)
    }

    function Nr(l, t, e, a, u, n) {
        return Oe(t), t.updateQueue = null, e = _s(t, a, e, u), Ms(l), a = Cc(), l !== null && !Yl ? (Bc(l, t, n), wt(l, t, n)) : (nl && a && bc(t), t.flags |= 1, Ql(l, t, e, n), t.child)
    }

    function Or(l, t, e, a, u) {
        if (Oe(t), t.stateNode === null) {
            var n = Ie,
                c = e.contextType;
            typeof c == "object" && c !== null && (n = Vl(c)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Fc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Nc(t), c = e.contextType, n.context = typeof c == "object" && c !== null ? Vl(c) : Ie, n.state = t.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (Wc(t, e, c, a), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && Fc.enqueueReplaceState(n, n.state, null), Ja(t, a, n, u), Ka(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0
        } else if (l === null) {
            n = t.stateNode;
            var i = t.memoizedProps,
                f = Re(e, i);
            n.props = f;
            var m = n.context,
                p = e.contextType;
            c = Ie, typeof p == "object" && p !== null && (c = Vl(p));
            var T = e.getDerivedStateFromProps;
            p = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || m !== c) && mr(t, n, a, c), Wt = !1;
            var g = t.memoizedState;
            n.state = g, Ja(t, a, n, u), Ka(), m = t.memoizedState, i || g !== m || Wt ? (typeof T == "function" && (Wc(t, e, T, a), m = t.memoizedState), (f = Wt || vr(t, e, f, a, g, m, c)) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = c, a = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
        } else {
            n = t.stateNode, Oc(l, t), c = t.memoizedProps, p = Re(e, c), n.props = p, T = t.pendingProps, g = n.context, m = e.contextType, f = Ie, typeof m == "object" && m !== null && (f = Vl(m)), i = e.getDerivedStateFromProps, (m = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== T || g !== f) && mr(t, n, a, f), Wt = !1, g = t.memoizedState, n.state = g, Ja(t, a, n, u), Ka();
            var S = t.memoizedState;
            c !== T || g !== S || Wt || l !== null && l.dependencies !== null && Lu(l.dependencies) ? (typeof i == "function" && (Wc(t, e, i, a), S = t.memoizedState), (p = Wt || vr(t, e, p, a, g, S, f) || l !== null && l.dependencies !== null && Lu(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, S, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, S, f)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = S), n.props = a, n.state = S, n.context = f, a = p) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), a = !1)
        }
        return n = a, rn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = sa(t, l.child, null, u), t.child = sa(t, null, e, u)) : Ql(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = wt(l, t, u), l
    }

    function Dr(l, t, e, a) {
        return Ya(), t.flags |= 256, Ql(l, t, e, a), t.child
    }
    var li = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function ti(l) {
        return {
            baseLanes: l,
            cachePool: gs()
        }
    }

    function ei(l, t, e) {
        return l = l !== null ? l.childLanes & ~e : 0, t && (l |= yt), l
    }

    function Ur(l, t, e) {
        var a = t.pendingProps,
            u = !1,
            n = (t.flags & 128) !== 0,
            c;
        if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (Rl.current & 2) !== 0), c && (u = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
            if (nl) {
                if (u ? le(t) : te(), nl) {
                    var i = pl,
                        f;
                    if (f = i) {
                        l: {
                            for (f = i, i = Tt; f.nodeType !== 8;) {
                                if (!i) {
                                    i = null;
                                    break l
                                }
                                if (f = pt(f.nextSibling), f === null) {
                                    i = null;
                                    break l
                                }
                            }
                            i = f
                        }
                        i !== null ? (t.memoizedState = {
                            dehydrated: i,
                            treeContext: Te !== null ? {
                                id: Ht,
                                overflow: qt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, f = at(18, null, null, 0), f.stateNode = i, f.return = t, t.child = f, Jl = t, pl = null, f = !0) : f = !1
                    }
                    f || _e(t)
                }
                if (i = t.memoizedState, i !== null && (i = i.dehydrated, i !== null)) return Gi(i) ? t.lanes = 32 : t.lanes = 536870912, null;
                Gt(t)
            }
            return i = a.children, a = a.fallback, u ? (te(), u = t.mode, i = on({
                mode: "hidden",
                children: i
            }, u), a = Ae(a, u, e, null), i.return = t, a.return = t, i.sibling = a, t.child = i, u = t.child, u.memoizedState = ti(e), u.childLanes = ei(l, c, e), t.memoizedState = li, a) : (le(t), ai(t, i))
        }
        if (f = l.memoizedState, f !== null && (i = f.dehydrated, i !== null)) {
            if (n) t.flags & 256 ? (le(t), t.flags &= -257, t = ui(l, t, e)) : t.memoizedState !== null ? (te(), t.child = l.child, t.flags |= 128, t = null) : (te(), u = a.fallback, i = t.mode, a = on({
                mode: "visible",
                children: a.children
            }, i), u = Ae(u, i, e, null), u.flags |= 2, a.return = t, u.return = t, a.sibling = u, t.child = a, sa(t, l.child, null, e), a = t.child, a.memoizedState = ti(e), a.childLanes = ei(l, c, e), t.memoizedState = li, t = u);
            else if (le(t), Gi(i)) {
                if (c = i.nextSibling && i.nextSibling.dataset, c) var m = c.dgst;
                c = m, a = Error(d(419)), a.stack = "", a.digest = c, Ga({
                    value: a,
                    source: null,
                    stack: null
                }), t = ui(l, t, e)
            } else if (Yl || wa(l, t, e, !1), c = (e & l.childLanes) !== 0, Yl || c) {
                if (c = ml, c !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : wn(a), a = (a & (c.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== f.retryLane)) throw f.retryLane = a, Pe(l, a), ft(c, l, a), Er;
                i.data === "$?" || Ei(), t = ui(l, t, e)
            } else i.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, pl = pt(i.nextSibling), Jl = t, nl = !0, Me = null, Tt = !1, l !== null && (ht[vt++] = Ht, ht[vt++] = qt, ht[vt++] = Te, Ht = l.id, qt = l.overflow, Te = t), t = ai(t, a.children), t.flags |= 4096);
            return t
        }
        return u ? (te(), u = a.fallback, i = t.mode, f = l.child, m = f.sibling, a = jt(f, {
            mode: "hidden",
            children: a.children
        }), a.subtreeFlags = f.subtreeFlags & 65011712, m !== null ? u = jt(m, u) : (u = Ae(u, i, e, null), u.flags |= 2), u.return = t, a.return = t, a.sibling = u, t.child = a, a = u, u = t.child, i = l.child.memoizedState, i === null ? i = ti(e) : (f = i.cachePool, f !== null ? (m = Ul._currentValue, f = f.parent !== m ? {
            parent: m,
            pool: m
        } : f) : f = gs(), i = {
            baseLanes: i.baseLanes | e,
            cachePool: f
        }), u.memoizedState = i, u.childLanes = ei(l, c, e), t.memoizedState = li, a) : (le(t), e = l.child, l = e.sibling, e = jt(e, {
            mode: "visible",
            children: a.children
        }), e.return = t, e.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = e, t.memoizedState = null, e)
    }

    function ai(l, t) {
        return t = on({
            mode: "visible",
            children: t
        }, l.mode), t.return = l, l.child = t
    }

    function on(l, t) {
        return l = at(22, l, null, t), l.lanes = 0, l.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, l
    }

    function ui(l, t, e) {
        return sa(t, l.child, null, e), l = ai(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l
    }

    function Rr(l, t, e) {
        l.lanes |= t;
        var a = l.alternate;
        a !== null && (a.lanes |= t), Ec(l.return, t, e)
    }

    function ni(l, t, e, a, u) {
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

    function jr(l, t, e) {
        var a = t.pendingProps,
            u = a.revealOrder,
            n = a.tail;
        if (Ql(l, t, a.children, e), a = Rl.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
        else {
            if (l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null;) {
                if (l.tag === 13) l.memoizedState !== null && Rr(l, e, t);
                else if (l.tag === 19) Rr(l, e, t);
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
        switch (M(Rl, a), u) {
            case "forwards":
                for (e = t.child, u = null; e !== null;) l = e.alternate, l !== null && cn(l) === null && (u = e), e = e.sibling;
                e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), ni(t, !1, u, e, n);
                break;
            case "backwards":
                for (e = null, u = t.child, t.child = null; u !== null;) {
                    if (l = u.alternate, l !== null && cn(l) === null) {
                        t.child = u;
                        break
                    }
                    l = u.sibling, u.sibling = e, e = u, u = l
                }
                ni(t, !0, e, null, n);
                break;
            case "together":
                ni(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function wt(l, t, e) {
        if (l !== null && (t.dependencies = l.dependencies), ce |= t.lanes, (e & t.childLanes) === 0)
            if (l !== null) {
                if (wa(l, t, e, !1), (e & t.childLanes) === 0) return null
            } else return null;
        if (l !== null && t.child !== l.child) throw Error(d(153));
        if (t.child !== null) {
            for (l = t.child, e = jt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null;) l = l.sibling, e = e.sibling = jt(l, l.pendingProps), e.return = t;
            e.sibling = null
        }
        return t.child
    }

    function ci(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Lu(l)))
    }

    function X0(l, t, e) {
        switch (t.tag) {
            case 3:
                cl(t, t.stateNode.containerInfo), $t(t, Ul, l.memoizedState.cache), Ya();
                break;
            case 27:
            case 5:
                Ce(t);
                break;
            case 4:
                cl(t, t.stateNode.containerInfo);
                break;
            case 10:
                $t(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null) return a.dehydrated !== null ? (le(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Ur(l, t, e) : (le(t), l = wt(l, t, e), l !== null ? l.sibling : null);
                le(t);
                break;
            case 19:
                var u = (l.flags & 128) !== 0;
                if (a = (e & t.childLanes) !== 0, a || (wa(l, t, e, !1), a = (e & t.childLanes) !== 0), u) {
                    if (a) return jr(l, t, e);
                    t.flags |= 128
                }
                if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), M(Rl, Rl.current), a) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Mr(l, t, e);
            case 24:
                $t(t, Ul, l.memoizedState.cache)
        }
        return wt(l, t, e)
    }

    function Hr(l, t, e) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps) Yl = !0;
            else {
                if (!ci(l, e) && (t.flags & 128) === 0) return Yl = !1, X0(l, t, e);
                Yl = (l.flags & 131072) !== 0
            }
        else Yl = !1, nl && (t.flags & 1048576) !== 0 && rs(t, Zu, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                l: {
                    l = t.pendingProps;
                    var a = t.elementType,
                        u = a._init;
                    if (a = u(a._payload), t.type = a, typeof a == "function") mc(a) ? (l = Re(a, l), t.tag = 1, t = Or(null, t, a, l, e)) : (t.tag = 0, t = Ic(null, t, a, l, e));
                    else {
                        if (a != null) {
                            if (u = a.$$typeof, u === jl) {
                                t.tag = 11, t = Ar(null, t, a, l, e);
                                break l
                            } else if (u === I) {
                                t.tag = 14, t = Tr(null, t, a, l, e);
                                break l
                            }
                        }
                        throw t = Dt(a) || a, Error(d(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Ic(l, t, t.type, t.pendingProps, e);
            case 1:
                return a = t.type, u = Re(a, t.pendingProps), Or(l, t, a, u, e);
            case 3:
                l: {
                    if (cl(t, t.stateNode.containerInfo), l === null) throw Error(d(387));a = t.pendingProps;
                    var n = t.memoizedState;u = n.element,
                    Oc(l, t),
                    Ja(t, a, null, e);
                    var c = t.memoizedState;
                    if (a = c.cache, $t(t, Ul, a), a !== n.cache && Ac(t, [Ul], e, !0), Ka(), a = c.element, n.isDehydrated)
                        if (n = {
                                element: a,
                                isDehydrated: !1,
                                cache: c.cache
                            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
                            t = Dr(l, t, a, e);
                            break l
                        } else if (a !== u) {
                        u = ot(Error(d(424)), t), Ga(u), t = Dr(l, t, a, e);
                        break l
                    } else {
                        switch (l = t.stateNode.containerInfo, l.nodeType) {
                            case 9:
                                l = l.body;
                                break;
                            default:
                                l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                        }
                        for (pl = pt(l.firstChild), Jl = t, nl = !0, Me = null, Tt = !0, e = dr(t, null, a, e), t.child = e; e;) e.flags = e.flags & -3 | 4096, e = e.sibling
                    } else {
                        if (Ya(), a === u) {
                            t = wt(l, t, e);
                            break l
                        }
                        Ql(l, t, a, e)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return rn(l, t), l === null ? (e = Go(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : nl || (e = t.type, l = t.pendingProps, a = zn(Y.current).createElement(e), a[Ll] = t, a[$l] = l, Zl(a, e, l), Bl(a), t.stateNode = a) : t.memoizedState = Go(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
            case 27:
                return Ce(t), l === null && nl && (a = t.stateNode = Co(t.type, t.pendingProps, Y.current), Jl = t, Tt = !0, u = pl, re(t.type) ? (wi = u, pl = pt(a.firstChild)) : pl = u), Ql(l, t, t.pendingProps.children, e), rn(l, t), l === null && (t.flags |= 4194304), t.child;
            case 5:
                return l === null && nl && ((u = a = pl) && (a = yh(a, t.type, t.pendingProps, Tt), a !== null ? (t.stateNode = a, Jl = t, pl = pt(a.firstChild), Tt = !1, u = !0) : u = !1), u || _e(t)), Ce(t), u = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, a = n.children, Ci(u, n) ? a = null : c !== null && Ci(u, c) && (t.flags |= 32), t.memoizedState !== null && (u = qc(l, t, H0, null, null, e), mu._currentValue = u), rn(l, t), Ql(l, t, a, e), t.child;
            case 6:
                return l === null && nl && ((l = e = pl) && (e = gh(e, t.pendingProps, Tt), e !== null ? (t.stateNode = e, Jl = t, pl = null, l = !0) : l = !1), l || _e(t)), null;
            case 13:
                return Ur(l, t, e);
            case 4:
                return cl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = sa(t, null, a, e) : Ql(l, t, a, e), t.child;
            case 11:
                return Ar(l, t, t.type, t.pendingProps, e);
            case 7:
                return Ql(l, t, t.pendingProps, e), t.child;
            case 8:
                return Ql(l, t, t.pendingProps.children, e), t.child;
            case 12:
                return Ql(l, t, t.pendingProps.children, e), t.child;
            case 10:
                return a = t.pendingProps, $t(t, t.type, a.value), Ql(l, t, a.children, e), t.child;
            case 9:
                return u = t.type._context, a = t.pendingProps.children, Oe(t), u = Vl(u), a = a(u), t.flags |= 1, Ql(l, t, a, e), t.child;
            case 14:
                return Tr(l, t, t.type, t.pendingProps, e);
            case 15:
                return zr(l, t, t.type, t.pendingProps, e);
            case 19:
                return jr(l, t, e);
            case 31:
                return a = t.pendingProps, e = t.mode, a = {
                    mode: a.mode,
                    children: a.children
                }, l === null ? (e = on(a, e), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = jt(l.child, a), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
            case 22:
                return Mr(l, t, e);
            case 24:
                return Oe(t), a = Vl(Ul), l === null ? (u = Mc(), u === null && (u = ml, n = Tc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = {
                    parent: a,
                    cache: u
                }, Nc(t), $t(t, Ul, u)) : ((l.lanes & e) !== 0 && (Oc(l, t), Ja(t, null, null, e), Ka()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = {
                    parent: a,
                    cache: a
                }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), $t(t, Ul, a)) : (a = n.cache, $t(t, Ul, a), a !== u.cache && Ac(t, [Ul], e, !0))), Ql(l, t, t.pendingProps.children, e), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(d(156, t.tag))
    }

    function Qt(l) {
        l.flags |= 4
    }

    function qr(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
        else if (l.flags |= 16777216, !Lo(t)) {
            if (t = mt.current, t !== null && ((el & 4194048) === el ? zt !== null : (el & 62914560) !== el && (el & 536870912) === 0 || t !== zt)) throw La = _c, bs;
            l.flags |= 8192
        }
    }

    function dn(l, t) {
        t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? hf() : 536870912, l.lanes |= t, ha |= t)
    }

    function lu(l, t) {
        if (!nl) switch (l.tailMode) {
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

    function xl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child,
            e = 0,
            a = 0;
        if (t)
            for (var u = l.child; u !== null;) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
        else
            for (u = l.child; u !== null;) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
        return l.subtreeFlags |= a, l.childLanes = e, t
    }

    function Z0(l, t, e) {
        var a = t.pendingProps;
        switch (Sc(t), t.tag) {
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
                return xl(t), null;
            case 1:
                return xl(t), null;
            case 3:
                return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(Ul), kl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (Ba(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hs())), xl(t), null;
            case 26:
                return e = t.memoizedState, l === null ? (Qt(t), e !== null ? (xl(t), qr(t, e)) : (xl(t), t.flags &= -16777217)) : e ? e !== l.memoizedState ? (Qt(t), xl(t), qr(t, e)) : (xl(t), t.flags &= -16777217) : (l.memoizedProps !== a && Qt(t), xl(t), t.flags &= -16777217), null;
            case 27:
                ye(t), e = Y.current;
                var u = t.type;
                if (l !== null && t.stateNode != null) l.memoizedProps !== a && Qt(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(d(166));
                        return xl(t), null
                    }
                    l = _.current, Ba(t) ? os(t) : (l = Co(u, a, e), t.stateNode = l, Qt(t))
                }
                return xl(t), null;
            case 5:
                if (ye(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Qt(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(d(166));
                        return xl(t), null
                    }
                    if (l = _.current, Ba(t)) os(t);
                    else {
                        switch (u = zn(Y.current), l) {
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
                        l[Ll] = t, l[$l] = a;
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
                        l && Qt(t)
                    }
                }
                return xl(t), t.flags &= -16777217, null;
            case 6:
                if (l && t.stateNode != null) l.memoizedProps !== a && Qt(t);
                else {
                    if (typeof a != "string" && t.stateNode === null) throw Error(d(166));
                    if (l = Y.current, Ba(t)) {
                        if (l = t.stateNode, e = t.memoizedProps, a = null, u = Jl, u !== null) switch (u.tag) {
                            case 27:
                            case 5:
                                a = u.memoizedProps
                        }
                        l[Ll] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Oo(l.nodeValue, e)), l || _e(t)
                    } else l = zn(l).createTextNode(a), l[Ll] = t, t.stateNode = l
                }
                return xl(t), null;
            case 13:
                if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                    if (u = Ba(t), a !== null && a.dehydrated !== null) {
                        if (l === null) {
                            if (!u) throw Error(d(318));
                            if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(d(317));
                            u[Ll] = t
                        } else Ya(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        xl(t), u = !1
                    } else u = hs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
                    if (!u) return t.flags & 256 ? (Gt(t), t) : (Gt(t), null)
                }
                if (Gt(t), (t.flags & 128) !== 0) return t.lanes = e, t;
                if (e = a !== null, l = l !== null && l.memoizedState !== null, e) {
                    a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
                    var n = null;
                    a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)
                }
                return e !== l && e && (t.child.flags |= 8192), dn(t, t.updateQueue), xl(t), null;
            case 4:
                return kl(), l === null && Ui(t.stateNode.containerInfo), xl(t), null;
            case 10:
                return Bt(t.type), xl(t), null;
            case 19:
                if (b(Rl), u = t.memoizedState, u === null) return xl(t), null;
                if (a = (t.flags & 128) !== 0, n = u.rendering, n === null)
                    if (a) lu(u, !1);
                    else {
                        if (El !== 0 || l !== null && (l.flags & 128) !== 0)
                            for (l = t.child; l !== null;) {
                                if (n = cn(l), n !== null) {
                                    for (t.flags |= 128, lu(u, !1), l = n.updateQueue, t.updateQueue = l, dn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null;) ss(e, l), e = e.sibling;
                                    return M(Rl, Rl.current & 1 | 2), t.child
                                }
                                l = l.sibling
                            }
                        u.tail !== null && At() > mn && (t.flags |= 128, a = !0, lu(u, !1), t.lanes = 4194304)
                    }
                else {
                    if (!a)
                        if (l = cn(n), l !== null) {
                            if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, dn(t, l), lu(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !nl) return xl(t), null
                        } else 2 * At() - u.renderingStartTime > mn && e !== 536870912 && (t.flags |= 128, a = !0, lu(u, !1), t.lanes = 4194304);
                    u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n)
                }
                return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = At(), t.sibling = null, l = Rl.current, M(Rl, a ? l & 1 | 2 : l & 1), t) : (xl(t), null);
            case 22:
            case 23:
                return Gt(t), jc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (xl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xl(t), e = t.updateQueue, e !== null && dn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && b(De), null;
            case 24:
                return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Bt(Ul), xl(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(d(156, t.tag))
    }

    function L0(l, t) {
        switch (Sc(t), t.tag) {
            case 1:
                return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 3:
                return Bt(Ul), kl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return ye(t), null;
            case 13:
                if (Gt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
                    if (t.alternate === null) throw Error(d(340));
                    Ya()
                }
                return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 19:
                return b(Rl), null;
            case 4:
                return kl(), null;
            case 10:
                return Bt(t.type), null;
            case 22:
            case 23:
                return Gt(t), jc(), l !== null && b(De), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 24:
                return Bt(Ul), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Cr(l, t) {
        switch (Sc(t), t.tag) {
            case 3:
                Bt(Ul), kl();
                break;
            case 26:
            case 27:
            case 5:
                ye(t);
                break;
            case 4:
                kl();
                break;
            case 13:
                Gt(t);
                break;
            case 19:
                b(Rl);
                break;
            case 10:
                Bt(t.type);
                break;
            case 22:
            case 23:
                Gt(t), jc(), l !== null && b(De);
                break;
            case 24:
                Bt(Ul)
        }
    }

    function tu(l, t) {
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
                            c = e.inst;
                        a = n(), c.destroy = a
                    }
                    e = e.next
                } while (e !== u)
            }
        } catch (i) {
            vl(t, t.return, i)
        }
    }

    function ee(l, t, e) {
        try {
            var a = t.updateQueue,
                u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var n = u.next;
                a = n;
                do {
                    if ((a.tag & l) === l) {
                        var c = a.inst,
                            i = c.destroy;
                        if (i !== void 0) {
                            c.destroy = void 0, u = t;
                            var f = e,
                                m = i;
                            try {
                                m()
                            } catch (p) {
                                vl(u, f, p)
                            }
                        }
                    }
                    a = a.next
                } while (a !== n)
            }
        } catch (p) {
            vl(t, t.return, p)
        }
    }

    function Br(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var e = l.stateNode;
            try {
                Ts(t, e)
            } catch (a) {
                vl(l, l.return, a)
            }
        }
    }

    function Yr(l, t, e) {
        e.props = Re(l.type, l.memoizedProps), e.state = l.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            vl(l, t, a)
        }
    }

    function eu(l, t) {
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
            vl(l, t, u)
        }
    }

    function Mt(l, t) {
        var e = l.ref,
            a = l.refCleanup;
        if (e !== null)
            if (typeof a == "function") try {
                a()
            } catch (u) {
                vl(l, t, u)
            } finally {
                l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null)
            } else if (typeof e == "function") try {
                e(null)
            } catch (u) {
                vl(l, t, u)
            } else e.current = null
    }

    function Gr(l) {
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
            vl(l, l.return, u)
        }
    }

    function ii(l, t, e) {
        try {
            var a = l.stateNode;
            oh(a, l.type, e, t), a[$l] = t
        } catch (u) {
            vl(l, l.return, u)
        }
    }

    function wr(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && re(l.type) || l.tag === 4
    }

    function fi(l) {
        l: for (;;) {
            for (; l.sibling === null;) {
                if (l.return === null || wr(l.return)) return null;
                l = l.return
            }
            for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
                if (l.tag === 27 && re(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
                l.child.return = l, l = l.child
            }
            if (!(l.flags & 2)) return l.stateNode
        }
    }

    function si(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Tn));
        else if (a !== 4 && (a === 27 && re(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
            for (si(l, t, e), l = l.sibling; l !== null;) si(l, t, e), l = l.sibling
    }

    function hn(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
        else if (a !== 4 && (a === 27 && re(l.type) && (e = l.stateNode), l = l.child, l !== null))
            for (hn(l, t, e), l = l.sibling; l !== null;) hn(l, t, e), l = l.sibling
    }

    function Qr(l) {
        var t = l.stateNode,
            e = l.memoizedProps;
        try {
            for (var a = l.type, u = t.attributes; u.length;) t.removeAttributeNode(u[0]);
            Zl(t, a, e), t[Ll] = l, t[$l] = e
        } catch (n) {
            vl(l, l.return, n)
        }
    }
    var Xt = !1,
        Tl = !1,
        ri = !1,
        Xr = typeof WeakSet == "function" ? WeakSet : Set,
        Gl = null;

    function V0(l, t) {
        if (l = l.containerInfo, Hi = Un, l = If(l), fc(l)) {
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
                    var c = 0,
                        i = -1,
                        f = -1,
                        m = 0,
                        p = 0,
                        T = l,
                        g = null;
                    t: for (;;) {
                        for (var S; T !== e || u !== 0 && T.nodeType !== 3 || (i = c + u), T !== n || a !== 0 && T.nodeType !== 3 || (f = c + a), T.nodeType === 3 && (c += T.nodeValue.length), (S = T.firstChild) !== null;) g = T, T = S;
                        for (;;) {
                            if (T === l) break t;
                            if (g === e && ++m === u && (i = c), g === n && ++p === a && (f = c), (S = T.nextSibling) !== null) break;
                            T = g, g = T.parentNode
                        }
                        T = S
                    }
                    e = i === -1 || f === -1 ? null : {
                        start: i,
                        end: f
                    }
                } else e = null
            }
            e = e || {
                start: 0,
                end: 0
            }
        } else e = null;
        for (qi = {
                focusedElem: l,
                selectionRange: e
            }, Un = !1, Gl = t; Gl !== null;)
            if (t = Gl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null) l.return = t, Gl = l;
            else
                for (; Gl !== null;) {
                    switch (t = Gl, n = t.alternate, l = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((l & 1024) !== 0 && n !== null) {
                                l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                                try {
                                    var V = Re(e.type, u, e.elementType === e.type);
                                    l = a.getSnapshotBeforeUpdate(V, n), a.__reactInternalSnapshotBeforeUpdate = l
                                } catch (w) {
                                    vl(e, e.return, w)
                                }
                            }
                            break;
                        case 3:
                            if ((l & 1024) !== 0) {
                                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) Yi(l);
                                else if (e === 1) switch (l.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Yi(l);
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
                            if ((l & 1024) !== 0) throw Error(d(163))
                    }
                    if (l = t.sibling, l !== null) {
                        l.return = t.return, Gl = l;
                        break
                    }
                    Gl = t.return
                }
    }

    function Zr(l, t, e) {
        var a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ae(l, e), a & 4 && tu(5, e);
                break;
            case 1:
                if (ae(l, e), a & 4)
                    if (l = e.stateNode, t === null) try {
                        l.componentDidMount()
                    } catch (c) {
                        vl(e, e.return, c)
                    } else {
                        var u = Re(e.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate)
                        } catch (c) {
                            vl(e, e.return, c)
                        }
                    }
                a & 64 && Br(e), a & 512 && eu(e, e.return);
                break;
            case 3:
                if (ae(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
                    if (t = null, e.child !== null) switch (e.child.tag) {
                        case 27:
                        case 5:
                            t = e.child.stateNode;
                            break;
                        case 1:
                            t = e.child.stateNode
                    }
                    try {
                        Ts(l, t)
                    } catch (c) {
                        vl(e, e.return, c)
                    }
                }
                break;
            case 27:
                t === null && a & 4 && Qr(e);
            case 26:
            case 5:
                ae(l, e), t === null && a & 4 && Gr(e), a & 512 && eu(e, e.return);
                break;
            case 12:
                ae(l, e);
                break;
            case 13:
                ae(l, e), a & 4 && Kr(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = lh.bind(null, e), bh(l, e))));
                break;
            case 22:
                if (a = e.memoizedState !== null || Xt, !a) {
                    t = t !== null && t.memoizedState !== null || Tl, u = Xt;
                    var n = Tl;
                    Xt = a, (Tl = t) && !n ? ue(l, e, (e.subtreeFlags & 8772) !== 0) : ae(l, e), Xt = u, Tl = n
                }
                break;
            case 30:
                break;
            default:
                ae(l, e)
        }
    }

    function Lr(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null, Lr(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Zn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null
    }
    var Sl = null,
        Pl = !1;

    function Zt(l, t, e) {
        for (e = e.child; e !== null;) Vr(l, t, e), e = e.sibling
    }

    function Vr(l, t, e) {
        if (lt && typeof lt.onCommitFiberUnmount == "function") try {
            lt.onCommitFiberUnmount(Aa, e)
        } catch {}
        switch (e.tag) {
            case 26:
                Tl || Mt(e, t), Zt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
                break;
            case 27:
                Tl || Mt(e, t);
                var a = Sl,
                    u = Pl;
                re(e.type) && (Sl = e.stateNode, Pl = !1), Zt(l, t, e), ou(e.stateNode), Sl = a, Pl = u;
                break;
            case 5:
                Tl || Mt(e, t);
            case 6:
                if (a = Sl, u = Pl, Sl = null, Zt(l, t, e), Sl = a, Pl = u, Sl !== null)
                    if (Pl) try {
                        (Sl.nodeType === 9 ? Sl.body : Sl.nodeName === "HTML" ? Sl.ownerDocument.body : Sl).removeChild(e.stateNode)
                    } catch (n) {
                        vl(e, t, n)
                    } else try {
                        Sl.removeChild(e.stateNode)
                    } catch (n) {
                        vl(e, t, n)
                    }
                break;
            case 18:
                Sl !== null && (Pl ? (l = Sl, Ho(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Su(l)) : Ho(Sl, e.stateNode));
                break;
            case 4:
                a = Sl, u = Pl, Sl = e.stateNode.containerInfo, Pl = !0, Zt(l, t, e), Sl = a, Pl = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Tl || ee(2, e, t), Tl || ee(4, e, t), Zt(l, t, e);
                break;
            case 1:
                Tl || (Mt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && Yr(e, t, a)), Zt(l, t, e);
                break;
            case 21:
                Zt(l, t, e);
                break;
            case 22:
                Tl = (a = Tl) || e.memoizedState !== null, Zt(l, t, e), Tl = a;
                break;
            default:
                Zt(l, t, e)
        }
    }

    function Kr(l, t) {
        if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
            Su(l)
        } catch (e) {
            vl(t, t.return, e)
        }
    }

    function K0(l) {
        switch (l.tag) {
            case 13:
            case 19:
                var t = l.stateNode;
                return t === null && (t = l.stateNode = new Xr), t;
            case 22:
                return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Xr), t;
            default:
                throw Error(d(435, l.tag))
        }
    }

    function oi(l, t) {
        var e = K0(l);
        t.forEach(function(a) {
            var u = th.bind(null, l, a);
            e.has(a) || (e.add(a), a.then(u, u))
        })
    }

    function ut(l, t) {
        var e = t.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var u = e[a],
                    n = l,
                    c = t,
                    i = c;
                l: for (; i !== null;) {
                    switch (i.tag) {
                        case 27:
                            if (re(i.type)) {
                                Sl = i.stateNode, Pl = !1;
                                break l
                            }
                            break;
                        case 5:
                            Sl = i.stateNode, Pl = !1;
                            break l;
                        case 3:
                        case 4:
                            Sl = i.stateNode.containerInfo, Pl = !0;
                            break l
                    }
                    i = i.return
                }
                if (Sl === null) throw Error(d(160));
                Vr(n, c, u), Sl = null, Pl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) Jr(t, l), t = t.sibling
    }
    var xt = null;

    function Jr(l, t) {
        var e = l.alternate,
            a = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ut(t, l), nt(l), a & 4 && (ee(3, l, l.return), tu(3, l), ee(5, l, l.return));
                break;
            case 1:
                ut(t, l), nt(l), a & 512 && (Tl || e === null || Mt(e, e.return)), a & 64 && Xt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
                break;
            case 26:
                var u = xt;
                if (ut(t, l), nt(l), a & 512 && (Tl || e === null || Mt(e, e.return)), a & 4) {
                    var n = e !== null ? e.memoizedState : null;
                    if (a = l.memoizedState, e === null)
                        if (a === null)
                            if (l.stateNode === null) {
                                l: {
                                    a = l.type,
                                    e = l.memoizedProps,
                                    u = u.ownerDocument || u;t: switch (a) {
                                        case "title":
                                            n = u.getElementsByTagName("title")[0], (!n || n[Ma] || n[Ll] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), Zl(n, a, e), n[Ll] = l, Bl(n), a = n;
                                            break l;
                                        case "link":
                                            var c = Xo("link", "href", u).get(a + (e.href || ""));
                                            if (c) {
                                                for (var i = 0; i < c.length; i++)
                                                    if (n = c[i], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                        c.splice(i, 1);
                                                        break t
                                                    }
                                            }
                                            n = u.createElement(a), Zl(n, a, e), u.head.appendChild(n);
                                            break;
                                        case "meta":
                                            if (c = Xo("meta", "content", u).get(a + (e.content || ""))) {
                                                for (i = 0; i < c.length; i++)
                                                    if (n = c[i], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                        c.splice(i, 1);
                                                        break t
                                                    }
                                            }
                                            n = u.createElement(a), Zl(n, a, e), u.head.appendChild(n);
                                            break;
                                        default:
                                            throw Error(d(468, a))
                                    }
                                    n[Ll] = l,
                                    Bl(n),
                                    a = n
                                }
                                l.stateNode = a
                            }
                    else Zo(u, l.type, l.stateNode);
                    else l.stateNode = Qo(u, a, l.memoizedProps);
                    else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? Zo(u, l.type, l.stateNode) : Qo(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && ii(l, l.memoizedProps, e.memoizedProps)
                }
                break;
            case 27:
                ut(t, l), nt(l), a & 512 && (Tl || e === null || Mt(e, e.return)), e !== null && a & 4 && ii(l, l.memoizedProps, e.memoizedProps);
                break;
            case 5:
                if (ut(t, l), nt(l), a & 512 && (Tl || e === null || Mt(e, e.return)), l.flags & 32) {
                    u = l.stateNode;
                    try {
                        Ve(u, "")
                    } catch (S) {
                        vl(l, l.return, S)
                    }
                }
                a & 4 && l.stateNode != null && (u = l.memoizedProps, ii(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (ri = !0);
                break;
            case 6:
                if (ut(t, l), nt(l), a & 4) {
                    if (l.stateNode === null) throw Error(d(162));
                    a = l.memoizedProps, e = l.stateNode;
                    try {
                        e.nodeValue = a
                    } catch (S) {
                        vl(l, l.return, S)
                    }
                }
                break;
            case 3:
                if (Nn = null, u = xt, xt = Mn(t.containerInfo), ut(t, l), xt = u, nt(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
                    Su(t.containerInfo)
                } catch (S) {
                    vl(l, l.return, S)
                }
                ri && (ri = !1, kr(l));
                break;
            case 4:
                a = xt, xt = Mn(l.stateNode.containerInfo), ut(t, l), nt(l), xt = a;
                break;
            case 12:
                ut(t, l), nt(l);
                break;
            case 13:
                ut(t, l), nt(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (gi = At()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, oi(l, a)));
                break;
            case 22:
                u = l.memoizedState !== null;
                var f = e !== null && e.memoizedState !== null,
                    m = Xt,
                    p = Tl;
                if (Xt = m || u, Tl = p || f, ut(t, l), Tl = p, Xt = m, nt(l), a & 8192) l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || f || Xt || Tl || je(l)), e = null, t = l;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (e === null) {
                            f = e = t;
                            try {
                                if (n = f.stateNode, u) c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    i = f.stateNode;
                                    var T = f.memoizedProps.style,
                                        g = T != null && T.hasOwnProperty("display") ? T.display : null;
                                    i.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim()
                                }
                            } catch (S) {
                                vl(f, f.return, S)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (e === null) {
                            f = t;
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps
                            } catch (S) {
                                vl(f, f.return, S)
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
                a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, oi(l, e))));
                break;
            case 19:
                ut(t, l), nt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, oi(l, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                ut(t, l), nt(l)
        }
    }

    function nt(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var e, a = l.return; a !== null;) {
                    if (wr(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null) throw Error(d(160));
                switch (e.tag) {
                    case 27:
                        var u = e.stateNode,
                            n = fi(l);
                        hn(l, n, u);
                        break;
                    case 5:
                        var c = e.stateNode;
                        e.flags & 32 && (Ve(c, ""), e.flags &= -33);
                        var i = fi(l);
                        hn(l, i, c);
                        break;
                    case 3:
                    case 4:
                        var f = e.stateNode.containerInfo,
                            m = fi(l);
                        si(l, m, f);
                        break;
                    default:
                        throw Error(d(161))
                }
            } catch (p) {
                vl(l, l.return, p)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }

    function kr(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null;) {
                var t = l;
                kr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling
            }
    }

    function ae(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) Zr(l, t.alternate, t), t = t.sibling
    }

    function je(l) {
        for (l = l.child; l !== null;) {
            var t = l;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ee(4, t, t.return), je(t);
                    break;
                case 1:
                    Mt(t, t.return);
                    var e = t.stateNode;
                    typeof e.componentWillUnmount == "function" && Yr(t, t.return, e), je(t);
                    break;
                case 27:
                    ou(t.stateNode);
                case 26:
                case 5:
                    Mt(t, t.return), je(t);
                    break;
                case 22:
                    t.memoizedState === null && je(t);
                    break;
                case 30:
                    je(t);
                    break;
                default:
                    je(t)
            }
            l = l.sibling
        }
    }

    function ue(l, t, e) {
        for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var a = t.alternate,
                u = l,
                n = t,
                c = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    ue(u, n, e), tu(4, n);
                    break;
                case 1:
                    if (ue(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
                        u.componentDidMount()
                    } catch (m) {
                        vl(a, a.return, m)
                    }
                    if (a = n, u = a.updateQueue, u !== null) {
                        var i = a.stateNode;
                        try {
                            var f = u.shared.hiddenCallbacks;
                            if (f !== null)
                                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++) As(f[u], i)
                        } catch (m) {
                            vl(a, a.return, m)
                        }
                    }
                    e && c & 64 && Br(n), eu(n, n.return);
                    break;
                case 27:
                    Qr(n);
                case 26:
                case 5:
                    ue(u, n, e), e && a === null && c & 4 && Gr(n), eu(n, n.return);
                    break;
                case 12:
                    ue(u, n, e);
                    break;
                case 13:
                    ue(u, n, e), e && c & 4 && Kr(u, n);
                    break;
                case 22:
                    n.memoizedState === null && ue(u, n, e), eu(n, n.return);
                    break;
                case 30:
                    break;
                default:
                    ue(u, n, e)
            }
            t = t.sibling
        }
    }

    function di(l, t) {
        var e = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Qa(e))
    }

    function hi(l, t) {
        l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Qa(l))
    }

    function _t(l, t, e, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) $r(l, t, e, a), t = t.sibling
    }

    function $r(l, t, e, a) {
        var u = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                _t(l, t, e, a), u & 2048 && tu(9, t);
                break;
            case 1:
                _t(l, t, e, a);
                break;
            case 3:
                _t(l, t, e, a), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Qa(l)));
                break;
            case 12:
                if (u & 2048) {
                    _t(l, t, e, a), l = t.stateNode;
                    try {
                        var n = t.memoizedProps,
                            c = n.id,
                            i = n.onPostCommit;
                        typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                    } catch (f) {
                        vl(t, t.return, f)
                    }
                } else _t(l, t, e, a);
                break;
            case 13:
                _t(l, t, e, a);
                break;
            case 23:
                break;
            case 22:
                n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? _t(l, t, e, a) : au(l, t) : n._visibility & 2 ? _t(l, t, e, a) : (n._visibility |= 2, ra(l, t, e, a, (t.subtreeFlags & 10256) !== 0)), u & 2048 && di(c, t);
                break;
            case 24:
                _t(l, t, e, a), u & 2048 && hi(t.alternate, t);
                break;
            default:
                _t(l, t, e, a)
        }
    }

    function ra(l, t, e, a, u) {
        for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var n = l,
                c = t,
                i = e,
                f = a,
                m = c.flags;
            switch (c.tag) {
                case 0:
                case 11:
                case 15:
                    ra(n, c, i, f, u), tu(8, c);
                    break;
                case 23:
                    break;
                case 22:
                    var p = c.stateNode;
                    c.memoizedState !== null ? p._visibility & 2 ? ra(n, c, i, f, u) : au(n, c) : (p._visibility |= 2, ra(n, c, i, f, u)), u && m & 2048 && di(c.alternate, c);
                    break;
                case 24:
                    ra(n, c, i, f, u), u && m & 2048 && hi(c.alternate, c);
                    break;
                default:
                    ra(n, c, i, f, u)
            }
            t = t.sibling
        }
    }

    function au(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var e = l,
                    a = t,
                    u = a.flags;
                switch (a.tag) {
                    case 22:
                        au(e, a), u & 2048 && di(a.alternate, a);
                        break;
                    case 24:
                        au(e, a), u & 2048 && hi(a.alternate, a);
                        break;
                    default:
                        au(e, a)
                }
                t = t.sibling
            }
    }
    var uu = 8192;

    function oa(l) {
        if (l.subtreeFlags & uu)
            for (l = l.child; l !== null;) Wr(l), l = l.sibling
    }

    function Wr(l) {
        switch (l.tag) {
            case 26:
                oa(l), l.flags & uu && l.memoizedState !== null && Uh(xt, l.memoizedState, l.memoizedProps);
                break;
            case 5:
                oa(l);
                break;
            case 3:
            case 4:
                var t = xt;
                xt = Mn(l.stateNode.containerInfo), oa(l), xt = t;
                break;
            case 22:
                l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = uu, uu = 16777216, oa(l), uu = t) : oa(l));
                break;
            default:
                oa(l)
        }
    }

    function Fr(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child, l !== null)) {
            t.child = null;
            do t = l.sibling, l.sibling = null, l = t; while (l !== null)
        }
    }

    function nu(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Gl = a, Ir(a, l)
                }
            Fr(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;) Pr(l), l = l.sibling
    }

    function Pr(l) {
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                nu(l), l.flags & 2048 && ee(9, l, l.return);
                break;
            case 3:
                nu(l);
                break;
            case 12:
                nu(l);
                break;
            case 22:
                var t = l.stateNode;
                l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vn(l)) : nu(l);
                break;
            default:
                nu(l)
        }
    }

    function vn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Gl = a, Ir(a, l)
                }
            Fr(l)
        }
        for (l = l.child; l !== null;) {
            switch (t = l, t.tag) {
                case 0:
                case 11:
                case 15:
                    ee(8, t, t.return), vn(t);
                    break;
                case 22:
                    e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, vn(t));
                    break;
                default:
                    vn(t)
            }
            l = l.sibling
        }
    }

    function Ir(l, t) {
        for (; Gl !== null;) {
            var e = Gl;
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    ee(8, e, t);
                    break;
                case 23:
                case 22:
                    if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                        var a = e.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    Qa(e.memoizedState.cache)
            }
            if (a = e.child, a !== null) a.return = e, Gl = a;
            else l: for (e = l; Gl !== null;) {
                a = Gl;
                var u = a.sibling,
                    n = a.return;
                if (Lr(a), a === e) {
                    Gl = null;
                    break l
                }
                if (u !== null) {
                    u.return = n, Gl = u;
                    break l
                }
                Gl = n
            }
        }
    }
    var J0 = {
            getCacheForType: function(l) {
                var t = Vl(Ul),
                    e = t.data.get(l);
                return e === void 0 && (e = l(), t.data.set(l, e)), e
            }
        },
        k0 = typeof WeakMap == "function" ? WeakMap : Map,
        sl = 0,
        ml = null,
        ll = null,
        el = 0,
        rl = 0,
        ct = null,
        ne = !1,
        da = !1,
        vi = !1,
        Lt = 0,
        El = 0,
        ce = 0,
        He = 0,
        mi = 0,
        yt = 0,
        ha = 0,
        cu = null,
        Il = null,
        yi = !1,
        gi = 0,
        mn = 1 / 0,
        yn = null,
        ie = null,
        Xl = 0,
        fe = null,
        va = null,
        ma = 0,
        bi = 0,
        Si = null,
        lo = null,
        iu = 0,
        xi = null;

    function it() {
        if ((sl & 2) !== 0 && el !== 0) return el & -el;
        if (x.T !== null) {
            var l = ea;
            return l !== 0 ? l : _i()
        }
        return yf()
    }

    function to() {
        yt === 0 && (yt = (el & 536870912) === 0 || nl ? df() : 536870912);
        var l = mt.current;
        return l !== null && (l.flags |= 32), yt
    }

    function ft(l, t, e) {
        (l === ml && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) && (ya(l, 0), se(l, el, yt, !1)), za(l, e), ((sl & 2) === 0 || l !== ml) && (l === ml && ((sl & 2) === 0 && (He |= e), El === 4 && se(l, el, yt, !1)), Nt(l))
    }

    function eo(l, t, e) {
        if ((sl & 6) !== 0) throw Error(d(327));
        var a = !e && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ta(l, t),
            u = a ? F0(l, t) : Ai(l, t, !0),
            n = a;
        do {
            if (u === 0) {
                da && !a && se(l, t, 0, !1);
                break
            } else {
                if (e = l.current.alternate, n && !$0(e)) {
                    u = Ai(l, t, !1), n = !1;
                    continue
                }
                if (u === 2) {
                    if (n = t, l.errorRecoveryDisabledLanes & n) var c = 0;
                    else c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        l: {
                            var i = l;u = cu;
                            var f = i.current.memoizedState.isDehydrated;
                            if (f && (ya(i, c).flags |= 256), c = Ai(i, c, !1), c !== 2) {
                                if (vi && !f) {
                                    i.errorRecoveryDisabledLanes |= n, He |= n, u = 4;
                                    break l
                                }
                                n = Il, Il = u, n !== null && (Il === null ? Il = n : Il.push.apply(Il, n))
                            }
                            u = c
                        }
                        if (n = !1, u !== 2) continue
                    }
                }
                if (u === 1) {
                    ya(l, 0), se(l, t, 0, !0);
                    break
                }
                l: {
                    switch (a = l, n = u, n) {
                        case 0:
                        case 1:
                            throw Error(d(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            se(a, t, yt, !ne);
                            break l;
                        case 2:
                            Il = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(d(329))
                    }
                    if ((t & 62914560) === t && (u = gi + 300 - At(), 10 < u)) {
                        if (se(a, t, yt, !ne), Mu(a, 0, !0) !== 0) break l;
                        a.timeoutHandle = Ro(ao.bind(null, a, e, Il, yn, yi, t, yt, He, ha, ne, n, 2, -0, 0), u);
                        break l
                    }
                    ao(a, e, Il, yn, yi, t, yt, He, ha, ne, n, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Nt(l)
    }

    function ao(l, t, e, a, u, n, c, i, f, m, p, T, g, S) {
        if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (vu = {
                stylesheets: null,
                count: 0,
                unsuspend: Dh
            }, Wr(t), T = Rh(), T !== null)) {
            l.cancelPendingCommit = T(ro.bind(null, l, t, n, e, a, u, c, i, f, p, 1, g, S)), se(l, n, c, !m);
            return
        }
        ro(l, t, n, e, a, u, c, i, f)
    }

    function $0(l) {
        for (var t = l;;) {
            var e = t.tag;
            if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
                for (var a = 0; a < e.length; a++) {
                    var u = e[a],
                        n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!et(n(), u)) return !1
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

    function se(l, t, e, a) {
        t &= ~mi, t &= ~He, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
        for (var u = t; 0 < u;) {
            var n = 31 - tt(u),
                c = 1 << n;
            a[n] = -1, u &= ~c
        }
        e !== 0 && vf(l, e, t)
    }

    function gn() {
        return (sl & 6) === 0 ? (fu(0), !1) : !0
    }

    function pi() {
        if (ll !== null) {
            if (rl === 0) var l = ll.return;
            else l = ll, Ct = Ne = null, Yc(l), fa = null, Pa = 0, l = ll;
            for (; l !== null;) Cr(l.alternate, l), l = l.return;
            ll = null
        }
    }

    function ya(l, t) {
        var e = l.timeoutHandle;
        e !== -1 && (l.timeoutHandle = -1, hh(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), pi(), ml = l, ll = e = jt(l.current, null), el = t, rl = 0, ct = null, ne = !1, da = Ta(l, t), vi = !1, ha = yt = mi = He = ce = El = 0, Il = cu = null, yi = !1, (t & 8) !== 0 && (t |= t & 32);
        var a = l.entangledLanes;
        if (a !== 0)
            for (l = l.entanglements, a &= t; 0 < a;) {
                var u = 31 - tt(a),
                    n = 1 << u;
                t |= l[u], a &= ~n
            }
        return Lt = t, Yu(), e
    }

    function uo(l, t) {
        W = null, x.H = an, t === Za || t === Ju ? (t = ps(), rl = 3) : t === bs ? (t = ps(), rl = 4) : rl = t === Er ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ct = t, ll === null && (El = 1, sn(l, ot(t, l.current)))
    }

    function no() {
        var l = x.H;
        return x.H = an, l === null ? an : l
    }

    function co() {
        var l = x.A;
        return x.A = J0, l
    }

    function Ei() {
        El = 4, ne || (el & 4194048) !== el && mt.current !== null || (da = !0), (ce & 134217727) === 0 && (He & 134217727) === 0 || ml === null || se(ml, el, yt, !1)
    }

    function Ai(l, t, e) {
        var a = sl;
        sl |= 2;
        var u = no(),
            n = co();
        (ml !== l || el !== t) && (yn = null, ya(l, t)), t = !1;
        var c = El;
        l: do try {
                if (rl !== 0 && ll !== null) {
                    var i = ll,
                        f = ct;
                    switch (rl) {
                        case 8:
                            pi(), c = 6;
                            break l;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            mt.current === null && (t = !0);
                            var m = rl;
                            if (rl = 0, ct = null, ga(l, i, f, m), e && da) {
                                c = 0;
                                break l
                            }
                            break;
                        default:
                            m = rl, rl = 0, ct = null, ga(l, i, f, m)
                    }
                }
                W0(), c = El;
                break
            } catch (p) {
                uo(l, p)
            }
            while (!0);
        return t && l.shellSuspendCounter++, Ct = Ne = null, sl = a, x.H = u, x.A = n, ll === null && (ml = null, el = 0, Yu()), c
    }

    function W0() {
        for (; ll !== null;) io(ll)
    }

    function F0(l, t) {
        var e = sl;
        sl |= 2;
        var a = no(),
            u = co();
        ml !== l || el !== t ? (yn = null, mn = At() + 500, ya(l, t)) : da = Ta(l, t);
        l: do try {
                if (rl !== 0 && ll !== null) {
                    t = ll;
                    var n = ct;
                    t: switch (rl) {
                        case 1:
                            rl = 0, ct = null, ga(l, t, n, 1);
                            break;
                        case 2:
                        case 9:
                            if (Ss(n)) {
                                rl = 0, ct = null, fo(t);
                                break
                            }
                            t = function() {
                                rl !== 2 && rl !== 9 || ml !== l || (rl = 7), Nt(l)
                            }, n.then(t, t);
                            break l;
                        case 3:
                            rl = 7;
                            break l;
                        case 4:
                            rl = 5;
                            break l;
                        case 7:
                            Ss(n) ? (rl = 0, ct = null, fo(t)) : (rl = 0, ct = null, ga(l, t, n, 7));
                            break;
                        case 5:
                            var c = null;
                            switch (ll.tag) {
                                case 26:
                                    c = ll.memoizedState;
                                case 5:
                                case 27:
                                    var i = ll;
                                    if (!c || Lo(c)) {
                                        rl = 0, ct = null;
                                        var f = i.sibling;
                                        if (f !== null) ll = f;
                                        else {
                                            var m = i.return;
                                            m !== null ? (ll = m, bn(m)) : ll = null
                                        }
                                        break t
                                    }
                            }
                            rl = 0, ct = null, ga(l, t, n, 5);
                            break;
                        case 6:
                            rl = 0, ct = null, ga(l, t, n, 6);
                            break;
                        case 8:
                            pi(), El = 6;
                            break l;
                        default:
                            throw Error(d(462))
                    }
                }
                P0();
                break
            } catch (p) {
                uo(l, p)
            }
            while (!0);
        return Ct = Ne = null, x.H = a, x.A = u, sl = e, ll !== null ? 0 : (ml = null, el = 0, Yu(), El)
    }

    function P0() {
        for (; ll !== null && !xd();) io(ll)
    }

    function io(l) {
        var t = Hr(l.alternate, l, Lt);
        l.memoizedProps = l.pendingProps, t === null ? bn(l) : ll = t
    }

    function fo(l) {
        var t = l,
            e = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Nr(e, t, t.pendingProps, t.type, void 0, el);
                break;
            case 11:
                t = Nr(e, t, t.pendingProps, t.type.render, t.ref, el);
                break;
            case 5:
                Yc(t);
            default:
                Cr(e, t), t = ll = ss(t, Lt), t = Hr(e, t, Lt)
        }
        l.memoizedProps = l.pendingProps, t === null ? bn(l) : ll = t
    }

    function ga(l, t, e, a) {
        Ct = Ne = null, Yc(t), fa = null, Pa = 0;
        var u = t.return;
        try {
            if (Q0(l, u, t, e, el)) {
                El = 1, sn(l, ot(e, l.current)), ll = null;
                return
            }
        } catch (n) {
            if (u !== null) throw ll = u, n;
            El = 1, sn(l, ot(e, l.current)), ll = null;
            return
        }
        t.flags & 32768 ? (nl || a === 1 ? l = !0 : da || (el & 536870912) !== 0 ? l = !1 : (ne = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = mt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), so(t, l)) : bn(t)
    }

    function bn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                so(t, ne);
                return
            }
            l = t.return;
            var e = Z0(t.alternate, t, Lt);
            if (e !== null) {
                ll = e;
                return
            }
            if (t = t.sibling, t !== null) {
                ll = t;
                return
            }
            ll = t = l
        } while (t !== null);
        El === 0 && (El = 5)
    }

    function so(l, t) {
        do {
            var e = L0(l.alternate, l);
            if (e !== null) {
                e.flags &= 32767, ll = e;
                return
            }
            if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
                ll = l;
                return
            }
            ll = l = e
        } while (l !== null);
        El = 6, ll = null
    }

    function ro(l, t, e, a, u, n, c, i, f) {
        l.cancelPendingCommit = null;
        do Sn(); while (Xl !== 0);
        if ((sl & 6) !== 0) throw Error(d(327));
        if (t !== null) {
            if (t === l.current) throw Error(d(177));
            if (n = t.lanes | t.childLanes, n |= hc, Dd(l, e, n, c, i, f), l === ml && (ll = ml = null, el = 0), va = t, fe = l, ma = e, bi = n, Si = u, lo = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, eh(Au, function() {
                    return yo(), null
                })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                a = x.T, x.T = null, u = D.p, D.p = 2, c = sl, sl |= 4;
                try {
                    V0(l, t, e)
                } finally {
                    sl = c, D.p = u, x.T = a
                }
            }
            Xl = 1, oo(), ho(), vo()
        }
    }

    function oo() {
        if (Xl === 1) {
            Xl = 0;
            var l = fe,
                t = va,
                e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
                e = x.T, x.T = null;
                var a = D.p;
                D.p = 2;
                var u = sl;
                sl |= 4;
                try {
                    Jr(t, l);
                    var n = qi,
                        c = If(l.containerInfo),
                        i = n.focusedElem,
                        f = n.selectionRange;
                    if (c !== i && i && i.ownerDocument && Pf(i.ownerDocument.documentElement, i)) {
                        if (f !== null && fc(i)) {
                            var m = f.start,
                                p = f.end;
                            if (p === void 0 && (p = m), "selectionStart" in i) i.selectionStart = m, i.selectionEnd = Math.min(p, i.value.length);
                            else {
                                var T = i.ownerDocument || document,
                                    g = T && T.defaultView || window;
                                if (g.getSelection) {
                                    var S = g.getSelection(),
                                        V = i.textContent.length,
                                        w = Math.min(f.start, V),
                                        hl = f.end === void 0 ? w : Math.min(f.end, V);
                                    !S.extend && w > hl && (c = hl, hl = w, w = c);
                                    var o = Ff(i, w),
                                        r = Ff(i, hl);
                                    if (o && r && (S.rangeCount !== 1 || S.anchorNode !== o.node || S.anchorOffset !== o.offset || S.focusNode !== r.node || S.focusOffset !== r.offset)) {
                                        var h = T.createRange();
                                        h.setStart(o.node, o.offset), S.removeAllRanges(), w > hl ? (S.addRange(h), S.extend(r.node, r.offset)) : (h.setEnd(r.node, r.offset), S.addRange(h))
                                    }
                                }
                            }
                        }
                        for (T = [], S = i; S = S.parentNode;) S.nodeType === 1 && T.push({
                            element: S,
                            left: S.scrollLeft,
                            top: S.scrollTop
                        });
                        for (typeof i.focus == "function" && i.focus(), i = 0; i < T.length; i++) {
                            var E = T[i];
                            E.element.scrollLeft = E.left, E.element.scrollTop = E.top
                        }
                    }
                    Un = !!Hi, qi = Hi = null
                } finally {
                    sl = u, D.p = a, x.T = e
                }
            }
            l.current = t, Xl = 2
        }
    }

    function ho() {
        if (Xl === 2) {
            Xl = 0;
            var l = fe,
                t = va,
                e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
                e = x.T, x.T = null;
                var a = D.p;
                D.p = 2;
                var u = sl;
                sl |= 4;
                try {
                    Zr(l, t.alternate, t)
                } finally {
                    sl = u, D.p = a, x.T = e
                }
            }
            Xl = 3
        }
    }

    function vo() {
        if (Xl === 4 || Xl === 3) {
            Xl = 0, pd();
            var l = fe,
                t = va,
                e = ma,
                a = lo;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xl = 5 : (Xl = 0, va = fe = null, mo(l, l.pendingLanes));
            var u = l.pendingLanes;
            if (u === 0 && (ie = null), Qn(e), t = t.stateNode, lt && typeof lt.onCommitFiberRoot == "function") try {
                lt.onCommitFiberRoot(Aa, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (a !== null) {
                t = x.T, u = D.p, D.p = 2, x.T = null;
                try {
                    for (var n = l.onRecoverableError, c = 0; c < a.length; c++) {
                        var i = a[c];
                        n(i.value, {
                            componentStack: i.stack
                        })
                    }
                } finally {
                    x.T = t, D.p = u
                }
            }(ma & 3) !== 0 && Sn(), Nt(l), u = l.pendingLanes, (e & 4194090) !== 0 && (u & 42) !== 0 ? l === xi ? iu++ : (iu = 0, xi = l) : iu = 0, fu(0)
        }
    }

    function mo(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Qa(t)))
    }

    function Sn(l) {
        return oo(), ho(), vo(), yo()
    }

    function yo() {
        if (Xl !== 5) return !1;
        var l = fe,
            t = bi;
        bi = 0;
        var e = Qn(ma),
            a = x.T,
            u = D.p;
        try {
            D.p = 32 > e ? 32 : e, x.T = null, e = Si, Si = null;
            var n = fe,
                c = ma;
            if (Xl = 0, va = fe = null, ma = 0, (sl & 6) !== 0) throw Error(d(331));
            var i = sl;
            if (sl |= 4, Pr(n.current), $r(n, n.current, c, e), sl = i, fu(0, !1), lt && typeof lt.onPostCommitFiberRoot == "function") try {
                lt.onPostCommitFiberRoot(Aa, n)
            } catch {}
            return !0
        } finally {
            D.p = u, x.T = a, mo(l, t)
        }
    }

    function go(l, t, e) {
        t = ot(e, t), t = Pc(l.stateNode, t, 2), l = Pt(l, t, 2), l !== null && (za(l, 2), Nt(l))
    }

    function vl(l, t, e) {
        if (l.tag === 3) go(l, l, e);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    go(t, l, e);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ie === null || !ie.has(a))) {
                        l = ot(e, l), e = xr(2), a = Pt(t, e, 2), a !== null && (pr(e, a, t, l), za(a, 2), Nt(a));
                        break
                    }
                }
                t = t.return
            }
    }

    function Ti(l, t, e) {
        var a = l.pingCache;
        if (a === null) {
            a = l.pingCache = new k0;
            var u = new Set;
            a.set(t, u)
        } else u = a.get(t), u === void 0 && (u = new Set, a.set(t, u));
        u.has(e) || (vi = !0, u.add(e), l = I0.bind(null, l, t, e), t.then(l, l))
    }

    function I0(l, t, e) {
        var a = l.pingCache;
        a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, ml === l && (el & e) === e && (El === 4 || El === 3 && (el & 62914560) === el && 300 > At() - gi ? (sl & 2) === 0 && ya(l, 0) : mi |= e, ha === el && (ha = 0)), Nt(l)
    }

    function bo(l, t) {
        t === 0 && (t = hf()), l = Pe(l, t), l !== null && (za(l, t), Nt(l))
    }

    function lh(l) {
        var t = l.memoizedState,
            e = 0;
        t !== null && (e = t.retryLane), bo(l, e)
    }

    function th(l, t) {
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
                throw Error(d(314))
        }
        a !== null && a.delete(t), bo(l, e)
    }

    function eh(l, t) {
        return ge(l, t)
    }
    var xn = null,
        ba = null,
        zi = !1,
        pn = !1,
        Mi = !1,
        qe = 0;

    function Nt(l) {
        l !== ba && l.next === null && (ba === null ? xn = ba = l : ba = ba.next = l), pn = !0, zi || (zi = !0, uh())
    }

    function fu(l, t) {
        if (!Mi && pn) {
            Mi = !0;
            do
                for (var e = !1, a = xn; a !== null;) {
                    if (l !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0) var n = 0;
                        else {
                            var c = a.suspendedLanes,
                                i = a.pingedLanes;
                            n = (1 << 31 - tt(42 | l) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (e = !0, Eo(a, n))
                    } else n = el, n = Mu(a, a === ml ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ta(a, n) || (e = !0, Eo(a, n));
                    a = a.next
                }
            while (e);
            Mi = !1
        }
    }

    function ah() {
        So()
    }

    function So() {
        pn = zi = !1;
        var l = 0;
        qe !== 0 && (dh() && (l = qe), qe = 0);
        for (var t = At(), e = null, a = xn; a !== null;) {
            var u = a.next,
                n = xo(a, t);
            n === 0 ? (a.next = null, e === null ? xn = u : e.next = u, u === null && (ba = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (pn = !0)), a = u
        }
        fu(l)
    }

    function xo(l, t) {
        for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n;) {
            var c = 31 - tt(n),
                i = 1 << c,
                f = u[c];
            f === -1 ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = Od(i, t)) : f <= t && (l.expiredLanes |= i), n &= ~i
        }
        if (t = ml, e = el, e = Mu(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && Yn(a), l.callbackNode = null, l.callbackPriority = 0;
        if ((e & 3) === 0 || Ta(l, e)) {
            if (t = e & -e, t === l.callbackPriority) return t;
            switch (a !== null && Yn(a), Qn(e)) {
                case 2:
                case 8:
                    e = rf;
                    break;
                case 32:
                    e = Au;
                    break;
                case 268435456:
                    e = of;
                    break;
                default:
                    e = Au
            }
            return a = po.bind(null, l), e = ge(e, a), l.callbackPriority = t, l.callbackNode = e, t
        }
        return a !== null && a !== null && Yn(a), l.callbackPriority = 2, l.callbackNode = null, 2
    }

    function po(l, t) {
        if (Xl !== 0 && Xl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
        var e = l.callbackNode;
        if (Sn() && l.callbackNode !== e) return null;
        var a = el;
        return a = Mu(l, l === ml ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (eo(l, a, t), xo(l, At()), l.callbackNode != null && l.callbackNode === e ? po.bind(null, l) : null)
    }

    function Eo(l, t) {
        if (Sn()) return null;
        eo(l, t, !0)
    }

    function uh() {
        vh(function() {
            (sl & 6) !== 0 ? ge(sf, ah) : So()
        })
    }

    function _i() {
        return qe === 0 && (qe = df()), qe
    }

    function Ao(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Uu("" + l)
    }

    function To(l, t) {
        var e = t.ownerDocument.createElement("input");
        return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l
    }

    function nh(l, t, e, a, u) {
        if (t === "submit" && e && e.stateNode === u) {
            var n = Ao((u[$l] || null).action),
                c = a.submitter;
            c && (t = (t = c[$l] || null) ? Ao(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
            var i = new qu("action", "action", null, a, u);
            l.push({
                event: i,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (qe !== 0) {
                                var f = c ? To(u, c) : new FormData(u);
                                Jc(e, {
                                    pending: !0,
                                    data: f,
                                    method: u.method,
                                    action: n
                                }, null, f)
                            }
                        } else typeof n == "function" && (i.preventDefault(), f = c ? To(u, c) : new FormData(u), Jc(e, {
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
    for (var Ni = 0; Ni < dc.length; Ni++) {
        var Oi = dc[Ni],
            ch = Oi.toLowerCase(),
            ih = Oi[0].toUpperCase() + Oi.slice(1);
        St(ch, "on" + ih)
    }
    St(es, "onAnimationEnd"), St(as, "onAnimationIteration"), St(us, "onAnimationStart"), St("dblclick", "onDoubleClick"), St("focusin", "onFocus"), St("focusout", "onBlur"), St(T0, "onTransitionRun"), St(z0, "onTransitionStart"), St(M0, "onTransitionCancel"), St(ns, "onTransitionEnd"), Xe("onMouseEnter", ["mouseout", "mouseover"]), Xe("onMouseLeave", ["mouseout", "mouseover"]), Xe("onPointerEnter", ["pointerout", "pointerover"]), Xe("onPointerLeave", ["pointerout", "pointerover"]), Se("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Se("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Se("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Se("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Se("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Se("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var su = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        fh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));

    function zo(l, t) {
        t = (t & 4) !== 0;
        for (var e = 0; e < l.length; e++) {
            var a = l[e],
                u = a.event;
            a = a.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var c = a.length - 1; 0 <= c; c--) {
                        var i = a[c],
                            f = i.instance,
                            m = i.currentTarget;
                        if (i = i.listener, f !== n && u.isPropagationStopped()) break l;
                        n = i, u.currentTarget = m;
                        try {
                            n(u)
                        } catch (p) {
                            fn(p)
                        }
                        u.currentTarget = null, n = f
                    } else
                        for (c = 0; c < a.length; c++) {
                            if (i = a[c], f = i.instance, m = i.currentTarget, i = i.listener, f !== n && u.isPropagationStopped()) break l;
                            n = i, u.currentTarget = m;
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

    function tl(l, t) {
        var e = t[Xn];
        e === void 0 && (e = t[Xn] = new Set);
        var a = l + "__bubble";
        e.has(a) || (Mo(t, l, 2, !1), e.add(a))
    }

    function Di(l, t, e) {
        var a = 0;
        t && (a |= 4), Mo(e, l, a, t)
    }
    var En = "_reactListening" + Math.random().toString(36).slice(2);

    function Ui(l) {
        if (!l[En]) {
            l[En] = !0, bf.forEach(function(e) {
                e !== "selectionchange" && (fh.has(e) || Di(e, !1, l), Di(e, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[En] || (t[En] = !0, Di("selectionchange", !1, t))
        }
    }

    function Mo(l, t, e, a) {
        switch (Wo(t)) {
            case 2:
                var u = qh;
                break;
            case 8:
                u = Ch;
                break;
            default:
                u = Vi
        }
        e = u.bind(null, t, e, l), u = void 0, !In || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, {
            capture: !0,
            passive: u
        }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
            passive: u
        }) : l.addEventListener(t, e, !1)
    }

    function Ri(l, t, e, a, u) {
        var n = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (;;) {
            if (a === null) return;
            var c = a.tag;
            if (c === 3 || c === 4) {
                var i = a.stateNode.containerInfo;
                if (i === u) break;
                if (c === 4)
                    for (c = a.return; c !== null;) {
                        var f = c.tag;
                        if ((f === 3 || f === 4) && c.stateNode.containerInfo === u) return;
                        c = c.return
                    }
                for (; i !== null;) {
                    if (c = Ge(i), c === null) return;
                    if (f = c.tag, f === 5 || f === 6 || f === 26 || f === 27) {
                        a = n = c;
                        continue l
                    }
                    i = i.parentNode
                }
            }
            a = a.return
        }
        Rf(function() {
            var m = n,
                p = Fn(e),
                T = [];
            l: {
                var g = cs.get(l);
                if (g !== void 0) {
                    var S = qu,
                        V = l;
                    switch (l) {
                        case "keypress":
                            if (ju(e) === 0) break l;
                        case "keydown":
                        case "keyup":
                            S = e0;
                            break;
                        case "focusin":
                            V = "focus", S = ac;
                            break;
                        case "focusout":
                            V = "blur", S = ac;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            S = ac;
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
                            S = qf;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            S = Ld;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            S = n0;
                            break;
                        case es:
                        case as:
                        case us:
                            S = Jd;
                            break;
                        case ns:
                            S = i0;
                            break;
                        case "scroll":
                        case "scrollend":
                            S = Xd;
                            break;
                        case "wheel":
                            S = s0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            S = $d;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            S = Bf;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            S = o0
                    }
                    var w = (t & 4) !== 0,
                        hl = !w && (l === "scroll" || l === "scrollend"),
                        o = w ? g !== null ? g + "Capture" : null : g;
                    w = [];
                    for (var r = m, h; r !== null;) {
                        var E = r;
                        if (h = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || h === null || o === null || (E = Na(r, o), E != null && w.push(ru(r, E, h))), hl) break;
                        r = r.return
                    }
                    0 < w.length && (g = new S(g, V, null, e, p), T.push({
                        event: g,
                        listeners: w
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (g = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", g && e !== Wn && (V = e.relatedTarget || e.fromElement) && (Ge(V) || V[Ye])) break l;
                    if ((S || g) && (g = p.window === p ? p : (g = p.ownerDocument) ? g.defaultView || g.parentWindow : window, S ? (V = e.relatedTarget || e.toElement, S = m, V = V ? Ge(V) : null, V !== null && (hl = H(V), w = V.tag, V !== hl || w !== 5 && w !== 27 && w !== 6) && (V = null)) : (S = null, V = m), S !== V)) {
                        if (w = qf, E = "onMouseLeave", o = "onMouseEnter", r = "mouse", (l === "pointerout" || l === "pointerover") && (w = Bf, E = "onPointerLeave", o = "onPointerEnter", r = "pointer"), hl = S == null ? g : _a(S), h = V == null ? g : _a(V), g = new w(E, r + "leave", S, e, p), g.target = hl, g.relatedTarget = h, E = null, Ge(p) === m && (w = new w(o, r + "enter", V, e, p), w.target = h, w.relatedTarget = hl, E = w), hl = E, S && V) t: {
                            for (w = S, o = V, r = 0, h = w; h; h = Sa(h)) r++;
                            for (h = 0, E = o; E; E = Sa(E)) h++;
                            for (; 0 < r - h;) w = Sa(w),
                            r--;
                            for (; 0 < h - r;) o = Sa(o),
                            h--;
                            for (; r--;) {
                                if (w === o || o !== null && w === o.alternate) break t;
                                w = Sa(w), o = Sa(o)
                            }
                            w = null
                        }
                        else w = null;
                        S !== null && _o(T, g, S, w, !1), V !== null && hl !== null && _o(T, hl, V, w, !0)
                    }
                }
                l: {
                    if (g = m ? _a(m) : window, S = g.nodeName && g.nodeName.toLowerCase(), S === "select" || S === "input" && g.type === "file") var R = Vf;
                    else if (Zf(g))
                        if (Kf) R = p0;
                        else {
                            R = S0;
                            var P = b0
                        }
                    else S = g.nodeName,
                    !S || S.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? m && $n(m.elementType) && (R = Vf) : R = x0;
                    if (R && (R = R(l, m))) {
                        Lf(T, R, e, p);
                        break l
                    }
                    P && P(l, g, m),
                    l === "focusout" && m && g.type === "number" && m.memoizedProps.value != null && kn(g, "number", g.value)
                }
                switch (P = m ? _a(m) : window, l) {
                    case "focusin":
                        (Zf(P) || P.contentEditable === "true") && ($e = P, sc = m, Ca = null);
                        break;
                    case "focusout":
                        Ca = sc = $e = null;
                        break;
                    case "mousedown":
                        rc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        rc = !1, ls(T, e, p);
                        break;
                    case "selectionchange":
                        if (A0) break;
                    case "keydown":
                    case "keyup":
                        ls(T, e, p)
                }
                var C;
                if (nc) l: {
                    switch (l) {
                        case "compositionstart":
                            var X = "onCompositionStart";
                            break l;
                        case "compositionend":
                            X = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            X = "onCompositionUpdate";
                            break l
                    }
                    X = void 0
                }
                else ke ? Qf(l, e) && (X = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (X = "onCompositionStart");X && (Yf && e.locale !== "ko" && (ke || X !== "onCompositionStart" ? X === "onCompositionEnd" && ke && (C = jf()) : (kt = p, lc = "value" in kt ? kt.value : kt.textContent, ke = !0)), P = An(m, X), 0 < P.length && (X = new Cf(X, l, null, e, p), T.push({
                    event: X,
                    listeners: P
                }), C ? X.data = C : (C = Xf(e), C !== null && (X.data = C)))),
                (C = h0 ? v0(l, e) : m0(l, e)) && (X = An(m, "onBeforeInput"), 0 < X.length && (P = new Cf("onBeforeInput", "beforeinput", null, e, p), T.push({
                    event: P,
                    listeners: X
                }), P.data = C)),
                nh(T, l, m, e, p)
            }
            zo(T, t)
        })
    }

    function ru(l, t, e) {
        return {
            instance: l,
            listener: t,
            currentTarget: e
        }
    }

    function An(l, t) {
        for (var e = t + "Capture", a = []; l !== null;) {
            var u = l,
                n = u.stateNode;
            if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Na(l, e), u != null && a.unshift(ru(l, u, n)), u = Na(l, t), u != null && a.push(ru(l, u, n))), l.tag === 3) return a;
            l = l.return
        }
        return []
    }

    function Sa(l) {
        if (l === null) return null;
        do l = l.return; while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }

    function _o(l, t, e, a, u) {
        for (var n = t._reactName, c = []; e !== null && e !== a;) {
            var i = e,
                f = i.alternate,
                m = i.stateNode;
            if (i = i.tag, f !== null && f === a) break;
            i !== 5 && i !== 26 && i !== 27 || m === null || (f = m, u ? (m = Na(e, n), m != null && c.unshift(ru(e, m, f))) : u || (m = Na(e, n), m != null && c.push(ru(e, m, f)))), e = e.return
        }
        c.length !== 0 && l.push({
            event: t,
            listeners: c
        })
    }
    var sh = /\r\n?/g,
        rh = /\u0000|\uFFFD/g;

    function No(l) {
        return (typeof l == "string" ? l : "" + l).replace(sh, `
`).replace(rh, "")
    }

    function Oo(l, t) {
        return t = No(t), No(l) === t
    }

    function Tn() {}

    function dl(l, t, e, a, u, n) {
        switch (e) {
            case "children":
                typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ve(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ve(l, "" + a);
                break;
            case "className":
                Nu(l, "class", a);
                break;
            case "tabIndex":
                Nu(l, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Nu(l, e, a);
                break;
            case "style":
                Df(l, a, n);
                break;
            case "data":
                if (t !== "object") {
                    Nu(l, "data", a);
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
                a = Uu("" + a), l.setAttribute(e, a);
                break;
            case "action":
            case "formAction":
                if (typeof a == "function") {
                    l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof n == "function" && (e === "formAction" ? (t !== "input" && dl(l, t, "name", u.name, u, null), dl(l, t, "formEncType", u.formEncType, u, null), dl(l, t, "formMethod", u.formMethod, u, null), dl(l, t, "formTarget", u.formTarget, u, null)) : (dl(l, t, "encType", u.encType, u, null), dl(l, t, "method", u.method, u, null), dl(l, t, "target", u.target, u, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    l.removeAttribute(e);
                    break
                }
                a = Uu("" + a), l.setAttribute(e, a);
                break;
            case "onClick":
                a != null && (l.onclick = Tn);
                break;
            case "onScroll":
                a != null && tl("scroll", l);
                break;
            case "onScrollEnd":
                a != null && tl("scrollend", l);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
                    if (e = a.__html, e != null) {
                        if (u.children != null) throw Error(d(60));
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
                e = Uu("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
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
                tl("beforetoggle", l), tl("toggle", l), _u(l, "popover", a);
                break;
            case "xlinkActuate":
                Ut(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                Ut(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                Ut(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                Ut(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                Ut(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                Ut(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                _u(l, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = wd.get(e) || e, _u(l, e, a))
        }
    }

    function ji(l, t, e, a, u, n) {
        switch (e) {
            case "style":
                Df(l, a, n);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
                    if (e = a.__html, e != null) {
                        if (u.children != null) throw Error(d(60));
                        l.innerHTML = e
                    }
                }
                break;
            case "children":
                typeof a == "string" ? Ve(l, a) : (typeof a == "number" || typeof a == "bigint") && Ve(l, "" + a);
                break;
            case "onScroll":
                a != null && tl("scroll", l);
                break;
            case "onScrollEnd":
                a != null && tl("scrollend", l);
                break;
            case "onClick":
                a != null && (l.onclick = Tn);
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
                if (!Sf.hasOwnProperty(e)) l: {
                    if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[$l] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
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
                tl("error", l), tl("load", l);
                var a = !1,
                    u = !1,
                    n;
                for (n in e)
                    if (e.hasOwnProperty(n)) {
                        var c = e[n];
                        if (c != null) switch (n) {
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(d(137, t));
                            default:
                                dl(l, t, n, c, e, null)
                        }
                    } u && dl(l, t, "srcSet", e.srcSet, e, null), a && dl(l, t, "src", e.src, e, null);
                return;
            case "input":
                tl("invalid", l);
                var i = n = c = u = null,
                    f = null,
                    m = null;
                for (a in e)
                    if (e.hasOwnProperty(a)) {
                        var p = e[a];
                        if (p != null) switch (a) {
                            case "name":
                                u = p;
                                break;
                            case "type":
                                c = p;
                                break;
                            case "checked":
                                f = p;
                                break;
                            case "defaultChecked":
                                m = p;
                                break;
                            case "value":
                                n = p;
                                break;
                            case "defaultValue":
                                i = p;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (p != null) throw Error(d(137, t));
                                break;
                            default:
                                dl(l, t, a, p, e, null)
                        }
                    } Mf(l, n, i, f, m, c, u, !1), Ou(l);
                return;
            case "select":
                tl("invalid", l), a = c = n = null;
                for (u in e)
                    if (e.hasOwnProperty(u) && (i = e[u], i != null)) switch (u) {
                        case "value":
                            n = i;
                            break;
                        case "defaultValue":
                            c = i;
                            break;
                        case "multiple":
                            a = i;
                        default:
                            dl(l, t, u, i, e, null)
                    }
                t = n, e = c, l.multiple = !!a, t != null ? Le(l, !!a, t, !1) : e != null && Le(l, !!a, e, !0);
                return;
            case "textarea":
                tl("invalid", l), n = u = a = null;
                for (c in e)
                    if (e.hasOwnProperty(c) && (i = e[c], i != null)) switch (c) {
                        case "value":
                            a = i;
                            break;
                        case "defaultValue":
                            u = i;
                            break;
                        case "children":
                            n = i;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (i != null) throw Error(d(91));
                            break;
                        default:
                            dl(l, t, c, i, e, null)
                    }
                Nf(l, a, u, n), Ou(l);
                return;
            case "option":
                for (f in e)
                    if (e.hasOwnProperty(f) && (a = e[f], a != null)) switch (f) {
                        case "selected":
                            l.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            dl(l, t, f, a, e, null)
                    }
                return;
            case "dialog":
                tl("beforetoggle", l), tl("toggle", l), tl("cancel", l), tl("close", l);
                break;
            case "iframe":
            case "object":
                tl("load", l);
                break;
            case "video":
            case "audio":
                for (a = 0; a < su.length; a++) tl(su[a], l);
                break;
            case "image":
                tl("error", l), tl("load", l);
                break;
            case "details":
                tl("toggle", l);
                break;
            case "embed":
            case "source":
            case "link":
                tl("error", l), tl("load", l);
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
                for (m in e)
                    if (e.hasOwnProperty(m) && (a = e[m], a != null)) switch (m) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(d(137, t));
                        default:
                            dl(l, t, m, a, e, null)
                    }
                return;
            default:
                if ($n(t)) {
                    for (p in e) e.hasOwnProperty(p) && (a = e[p], a !== void 0 && ji(l, t, p, a, e, void 0));
                    return
                }
        }
        for (i in e) e.hasOwnProperty(i) && (a = e[i], a != null && dl(l, t, i, a, e, null))
    }

    function oh(l, t, e, a) {
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
                    c = null,
                    i = null,
                    f = null,
                    m = null,
                    p = null;
                for (S in e) {
                    var T = e[S];
                    if (e.hasOwnProperty(S) && T != null) switch (S) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            f = T;
                        default:
                            a.hasOwnProperty(S) || dl(l, t, S, null, a, T)
                    }
                }
                for (var g in a) {
                    var S = a[g];
                    if (T = e[g], a.hasOwnProperty(g) && (S != null || T != null)) switch (g) {
                        case "type":
                            n = S;
                            break;
                        case "name":
                            u = S;
                            break;
                        case "checked":
                            m = S;
                            break;
                        case "defaultChecked":
                            p = S;
                            break;
                        case "value":
                            c = S;
                            break;
                        case "defaultValue":
                            i = S;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (S != null) throw Error(d(137, t));
                            break;
                        default:
                            S !== T && dl(l, t, g, S, a, T)
                    }
                }
                Jn(l, c, i, f, m, p, n, u);
                return;
            case "select":
                S = c = i = g = null;
                for (n in e)
                    if (f = e[n], e.hasOwnProperty(n) && f != null) switch (n) {
                        case "value":
                            break;
                        case "multiple":
                            S = f;
                        default:
                            a.hasOwnProperty(n) || dl(l, t, n, null, a, f)
                    }
                for (u in a)
                    if (n = a[u], f = e[u], a.hasOwnProperty(u) && (n != null || f != null)) switch (u) {
                        case "value":
                            g = n;
                            break;
                        case "defaultValue":
                            i = n;
                            break;
                        case "multiple":
                            c = n;
                        default:
                            n !== f && dl(l, t, u, n, a, f)
                    }
                t = i, e = c, a = S, g != null ? Le(l, !!e, g, !1) : !!a != !!e && (t != null ? Le(l, !!e, t, !0) : Le(l, !!e, e ? [] : "", !1));
                return;
            case "textarea":
                S = g = null;
                for (i in e)
                    if (u = e[i], e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i)) switch (i) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            dl(l, t, i, null, a, u)
                    }
                for (c in a)
                    if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null)) switch (c) {
                        case "value":
                            g = u;
                            break;
                        case "defaultValue":
                            S = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(d(91));
                            break;
                        default:
                            u !== n && dl(l, t, c, u, a, n)
                    }
                _f(l, g, S);
                return;
            case "option":
                for (var V in e)
                    if (g = e[V], e.hasOwnProperty(V) && g != null && !a.hasOwnProperty(V)) switch (V) {
                        case "selected":
                            l.selected = !1;
                            break;
                        default:
                            dl(l, t, V, null, a, g)
                    }
                for (f in a)
                    if (g = a[f], S = e[f], a.hasOwnProperty(f) && g !== S && (g != null || S != null)) switch (f) {
                        case "selected":
                            l.selected = g && typeof g != "function" && typeof g != "symbol";
                            break;
                        default:
                            dl(l, t, f, g, a, S)
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
                for (var w in e) g = e[w], e.hasOwnProperty(w) && g != null && !a.hasOwnProperty(w) && dl(l, t, w, null, a, g);
                for (m in a)
                    if (g = a[m], S = e[m], a.hasOwnProperty(m) && g !== S && (g != null || S != null)) switch (m) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (g != null) throw Error(d(137, t));
                            break;
                        default:
                            dl(l, t, m, g, a, S)
                    }
                return;
            default:
                if ($n(t)) {
                    for (var hl in e) g = e[hl], e.hasOwnProperty(hl) && g !== void 0 && !a.hasOwnProperty(hl) && ji(l, t, hl, void 0, a, g);
                    for (p in a) g = a[p], S = e[p], !a.hasOwnProperty(p) || g === S || g === void 0 && S === void 0 || ji(l, t, p, g, a, S);
                    return
                }
        }
        for (var o in e) g = e[o], e.hasOwnProperty(o) && g != null && !a.hasOwnProperty(o) && dl(l, t, o, null, a, g);
        for (T in a) g = a[T], S = e[T], !a.hasOwnProperty(T) || g === S || g == null && S == null || dl(l, t, T, g, a, S)
    }
    var Hi = null,
        qi = null;

    function zn(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }

    function Do(l) {
        switch (l) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Uo(l, t) {
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

    function Ci(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Bi = null;

    function dh() {
        var l = window.event;
        return l && l.type === "popstate" ? l === Bi ? !1 : (Bi = l, !0) : (Bi = null, !1)
    }
    var Ro = typeof setTimeout == "function" ? setTimeout : void 0,
        hh = typeof clearTimeout == "function" ? clearTimeout : void 0,
        jo = typeof Promise == "function" ? Promise : void 0,
        vh = typeof queueMicrotask == "function" ? queueMicrotask : typeof jo < "u" ? function(l) {
            return jo.resolve(null).then(l).catch(mh)
        } : Ro;

    function mh(l) {
        setTimeout(function() {
            throw l
        })
    }

    function re(l) {
        return l === "head"
    }

    function Ho(l, t) {
        var e = t,
            a = 0,
            u = 0;
        do {
            var n = e.nextSibling;
            if (l.removeChild(e), n && n.nodeType === 8)
                if (e = n.data, e === "/$") {
                    if (0 < a && 8 > a) {
                        e = a;
                        var c = l.ownerDocument;
                        if (e & 1 && ou(c.documentElement), e & 2 && ou(c.body), e & 4)
                            for (e = c.head, ou(e), c = e.firstChild; c;) {
                                var i = c.nextSibling,
                                    f = c.nodeName;
                                c[Ma] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && c.rel.toLowerCase() === "stylesheet" || e.removeChild(c), c = i
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

    function Yi(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var e = t;
            switch (t = t.nextSibling, e.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Yi(e), Zn(e);
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

    function yh(l, t, e, a) {
        for (; l.nodeType === 1;) {
            var u = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break
            } else if (a) {
                if (!l[Ma]) switch (t) {
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
            if (l = pt(l.nextSibling), l === null) break
        }
        return null
    }

    function gh(l, t, e) {
        if (t === "") return null;
        for (; l.nodeType !== 3;)
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = pt(l.nextSibling), l === null)) return null;
        return l
    }

    function Gi(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete"
    }

    function bh(l, t) {
        var e = l.ownerDocument;
        if (l.data !== "$?" || e.readyState === "complete") t();
        else {
            var a = function() {
                t(), e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a), l._reactRetry = a
        }
    }

    function pt(l) {
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
    var wi = null;

    function qo(l) {
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

    function Co(l, t, e) {
        switch (t = zn(e), l) {
            case "html":
                if (l = t.documentElement, !l) throw Error(d(452));
                return l;
            case "head":
                if (l = t.head, !l) throw Error(d(453));
                return l;
            case "body":
                if (l = t.body, !l) throw Error(d(454));
                return l;
            default:
                throw Error(d(451))
        }
    }

    function ou(l) {
        for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
        Zn(l)
    }
    var gt = new Map,
        Bo = new Set;

    function Mn(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var Vt = D.d;
    D.d = {
        f: Sh,
        r: xh,
        D: ph,
        C: Eh,
        L: Ah,
        m: Th,
        X: Mh,
        S: zh,
        M: _h
    };

    function Sh() {
        var l = Vt.f(),
            t = gn();
        return l || t
    }

    function xh(l) {
        var t = we(l);
        t !== null && t.tag === 5 && t.type === "form" ? er(t) : Vt.r(l)
    }
    var xa = typeof document > "u" ? null : document;

    function Yo(l, t, e) {
        var a = xa;
        if (a && typeof t == "string" && t) {
            var u = rt(t);
            u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), Bo.has(u) || (Bo.add(u), l = {
                rel: l,
                crossOrigin: e,
                href: t
            }, a.querySelector(u) === null && (t = a.createElement("link"), Zl(t, "link", l), Bl(t), a.head.appendChild(t)))
        }
    }

    function ph(l) {
        Vt.D(l), Yo("dns-prefetch", l, null)
    }

    function Eh(l, t) {
        Vt.C(l, t), Yo("preconnect", l, t)
    }

    function Ah(l, t, e) {
        Vt.L(l, t, e);
        var a = xa;
        if (a && l && t) {
            var u = 'link[rel="preload"][as="' + rt(t) + '"]';
            t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + rt(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + rt(e.imageSizes) + '"]')) : u += '[href="' + rt(l) + '"]';
            var n = u;
            switch (t) {
                case "style":
                    n = pa(l);
                    break;
                case "script":
                    n = Ea(l)
            }
            gt.has(n) || (l = U({
                rel: "preload",
                href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                as: t
            }, e), gt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(du(n)) || t === "script" && a.querySelector(hu(n)) || (t = a.createElement("link"), Zl(t, "link", l), Bl(t), a.head.appendChild(t)))
        }
    }

    function Th(l, t) {
        Vt.m(l, t);
        var e = xa;
        if (e && l) {
            var a = t && typeof t.as == "string" ? t.as : "script",
                u = 'link[rel="modulepreload"][as="' + rt(a) + '"][href="' + rt(l) + '"]',
                n = u;
            switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    n = Ea(l)
            }
            if (!gt.has(n) && (l = U({
                    rel: "modulepreload",
                    href: l
                }, t), gt.set(n, l), e.querySelector(u) === null)) {
                switch (a) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (e.querySelector(hu(n))) return
                }
                a = e.createElement("link"), Zl(a, "link", l), Bl(a), e.head.appendChild(a)
            }
        }
    }

    function zh(l, t, e) {
        Vt.S(l, t, e);
        var a = xa;
        if (a && l) {
            var u = Qe(a).hoistableStyles,
                n = pa(l);
            t = t || "default";
            var c = u.get(n);
            if (!c) {
                var i = {
                    loading: 0,
                    preload: null
                };
                if (c = a.querySelector(du(n))) i.loading = 5;
                else {
                    l = U({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, e), (e = gt.get(n)) && Qi(l, e);
                    var f = c = a.createElement("link");
                    Bl(f), Zl(f, "link", l), f._p = new Promise(function(m, p) {
                        f.onload = m, f.onerror = p
                    }), f.addEventListener("load", function() {
                        i.loading |= 1
                    }), f.addEventListener("error", function() {
                        i.loading |= 2
                    }), i.loading |= 4, _n(c, t, a)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: i
                }, u.set(n, c)
            }
        }
    }

    function Mh(l, t) {
        Vt.X(l, t);
        var e = xa;
        if (e && l) {
            var a = Qe(e).hoistableScripts,
                u = Ea(l),
                n = a.get(u);
            n || (n = e.querySelector(hu(u)), n || (l = U({
                src: l,
                async: !0
            }, t), (t = gt.get(u)) && Xi(l, t), n = e.createElement("script"), Bl(n), Zl(n, "link", l), e.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, a.set(u, n))
        }
    }

    function _h(l, t) {
        Vt.M(l, t);
        var e = xa;
        if (e && l) {
            var a = Qe(e).hoistableScripts,
                u = Ea(l),
                n = a.get(u);
            n || (n = e.querySelector(hu(u)), n || (l = U({
                src: l,
                async: !0,
                type: "module"
            }, t), (t = gt.get(u)) && Xi(l, t), n = e.createElement("script"), Bl(n), Zl(n, "link", l), e.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, a.set(u, n))
        }
    }

    function Go(l, t, e, a) {
        var u = (u = Y.current) ? Mn(u) : null;
        if (!u) throw Error(d(446));
        switch (l) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof e.precedence == "string" && typeof e.href == "string" ? (t = pa(e.href), e = Qe(u).hoistableStyles, a = e.get(t), a || (a = {
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
                    l = pa(e.href);
                    var n = Qe(u).hoistableStyles,
                        c = n.get(l);
                    if (c || (u = u.ownerDocument || u, c = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, n.set(l, c), (n = u.querySelector(du(l))) && !n._p && (c.instance = n, c.state.loading = 5), gt.has(l) || (e = {
                            rel: "preload",
                            as: "style",
                            href: e.href,
                            crossOrigin: e.crossOrigin,
                            integrity: e.integrity,
                            media: e.media,
                            hrefLang: e.hrefLang,
                            referrerPolicy: e.referrerPolicy
                        }, gt.set(l, e), n || Nh(u, l, e, c.state))), t && a === null) throw Error(d(528, ""));
                    return c
                }
                if (t && a !== null) throw Error(d(529, ""));
                return null;
            case "script":
                return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ea(e), e = Qe(u).hoistableScripts, a = e.get(t), a || (a = {
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
                throw Error(d(444, l))
        }
    }

    function pa(l) {
        return 'href="' + rt(l) + '"'
    }

    function du(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }

    function wo(l) {
        return U({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }

    function Nh(l, t, e, a) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
            return a.loading |= 1
        }), t.addEventListener("error", function() {
            return a.loading |= 2
        }), Zl(t, "link", e), Bl(t), l.head.appendChild(t))
    }

    function Ea(l) {
        return '[src="' + rt(l) + '"]'
    }

    function hu(l) {
        return "script[async]" + l
    }

    function Qo(l, t, e) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var a = l.querySelector('style[data-href~="' + rt(e.href) + '"]');
                if (a) return t.instance = a, Bl(a), a;
                var u = U({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return a = (l.ownerDocument || l).createElement("style"), Bl(a), Zl(a, "style", u), _n(a, e.precedence, l), t.instance = a;
            case "stylesheet":
                u = pa(e.href);
                var n = l.querySelector(du(u));
                if (n) return t.state.loading |= 4, t.instance = n, Bl(n), n;
                a = wo(e), (u = gt.get(u)) && Qi(a, u), n = (l.ownerDocument || l).createElement("link"), Bl(n);
                var c = n;
                return c._p = new Promise(function(i, f) {
                    c.onload = i, c.onerror = f
                }), Zl(n, "link", a), t.state.loading |= 4, _n(n, e.precedence, l), t.instance = n;
            case "script":
                return n = Ea(e.src), (u = l.querySelector(hu(n))) ? (t.instance = u, Bl(u), u) : (a = e, (u = gt.get(n)) && (a = U({}, e), Xi(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Bl(u), Zl(u, "link", a), l.head.appendChild(u), t.instance = u);
            case "void":
                return null;
            default:
                throw Error(d(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, _n(a, e.precedence, l));
        return t.instance
    }

    function _n(l, t, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
            var i = a[c];
            if (i.dataset.precedence === t) n = i;
            else if (n !== u) break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild))
    }

    function Qi(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title)
    }

    function Xi(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity)
    }
    var Nn = null;

    function Xo(l, t, e) {
        if (Nn === null) {
            var a = new Map,
                u = Nn = new Map;
            u.set(e, a)
        } else u = Nn, a = u.get(e), a || (a = new Map, u.set(e, a));
        if (a.has(l)) return a;
        for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
            var n = e[u];
            if (!(n[Ma] || n[Ll] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = n.getAttribute(t) || "";
                c = l + c;
                var i = a.get(c);
                i ? i.push(n) : a.set(c, [n])
            }
        }
        return a
    }

    function Zo(l, t, e) {
        l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
    }

    function Oh(l, t, e) {
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

    function Lo(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    var vu = null;

    function Dh() {}

    function Uh(l, t, e) {
        if (vu === null) throw Error(d(475));
        var a = vu;
        if (t.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var u = pa(e.href),
                    n = l.querySelector(du(u));
                if (n) {
                    l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = On.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, Bl(n);
                    return
                }
                n = l.ownerDocument || l, e = wo(e), (u = gt.get(u)) && Qi(e, u), n = n.createElement("link"), Bl(n);
                var c = n;
                c._p = new Promise(function(i, f) {
                    c.onload = i, c.onerror = f
                }), Zl(n, "link", e), t.instance = n
            }
            a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = On.bind(a), l.addEventListener("load", t), l.addEventListener("error", t))
        }
    }

    function Rh() {
        if (vu === null) throw Error(d(475));
        var l = vu;
        return l.stylesheets && l.count === 0 && Zi(l, l.stylesheets), 0 < l.count ? function(t) {
            var e = setTimeout(function() {
                if (l.stylesheets && Zi(l, l.stylesheets), l.unsuspend) {
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
            if (this.stylesheets) Zi(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null, l()
            }
        }
    }
    var Dn = null;

    function Zi(l, t) {
        l.stylesheets = null, l.unsuspend !== null && (l.count++, Dn = new Map, t.forEach(jh, l), Dn = null, On.call(l))
    }

    function jh(l, t) {
        if (!(t.state.loading & 4)) {
            var e = Dn.get(l);
            if (e) var a = e.get(null);
            else {
                e = new Map, Dn.set(l, e);
                for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                    var c = u[n];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c)
                }
                a && e.set(null, a)
            }
            u = t.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = On.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4
        }
    }
    var mu = {
        $$typeof: $,
        Provider: null,
        Consumer: null,
        _currentValue: G,
        _currentValue2: G,
        _threadCount: 0
    };

    function Hh(l, t, e, a, u, n, c, i) {
        this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gn(0), this.hiddenUpdates = Gn(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = new Map
    }

    function Vo(l, t, e, a, u, n, c, i, f, m, p, T) {
        return l = new Hh(l, t, e, c, i, f, m, T), t = 1, n === !0 && (t |= 24), n = at(3, null, null, t), l.current = n, n.stateNode = l, t = Tc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: t
        }, Nc(n), l
    }

    function Ko(l) {
        return l ? (l = Ie, l) : Ie
    }

    function Jo(l, t, e, a, u, n) {
        u = Ko(u), a.context === null ? a.context = u : a.pendingContext = u, a = Ft(t), a.payload = {
            element: e
        }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = Pt(l, a, t), e !== null && (ft(e, l, t), Va(e, l, t))
    }

    function ko(l, t) {
        if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t
        }
    }

    function Li(l, t) {
        ko(l, t), (l = l.alternate) && ko(l, t)
    }

    function $o(l) {
        if (l.tag === 13) {
            var t = Pe(l, 67108864);
            t !== null && ft(t, l, 67108864), Li(l, 67108864)
        }
    }
    var Un = !0;

    function qh(l, t, e, a) {
        var u = x.T;
        x.T = null;
        var n = D.p;
        try {
            D.p = 2, Vi(l, t, e, a)
        } finally {
            D.p = n, x.T = u
        }
    }

    function Ch(l, t, e, a) {
        var u = x.T;
        x.T = null;
        var n = D.p;
        try {
            D.p = 8, Vi(l, t, e, a)
        } finally {
            D.p = n, x.T = u
        }
    }

    function Vi(l, t, e, a) {
        if (Un) {
            var u = Ki(a);
            if (u === null) Ri(l, t, a, Rn, e), Fo(l, a);
            else if (Yh(u, l, t, e, a)) a.stopPropagation();
            else if (Fo(l, a), t & 4 && -1 < Bh.indexOf(l)) {
                for (; u !== null;) {
                    var n = we(u);
                    if (n !== null) switch (n.tag) {
                        case 3:
                            if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                                var c = be(n.pendingLanes);
                                if (c !== 0) {
                                    var i = n;
                                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c;) {
                                        var f = 1 << 31 - tt(c);
                                        i.entanglements[1] |= f, c &= ~f
                                    }
                                    Nt(n), (sl & 6) === 0 && (mn = At() + 500, fu(0))
                                }
                            }
                            break;
                        case 13:
                            i = Pe(n, 2), i !== null && ft(i, n, 2), gn(), Li(n, 2)
                    }
                    if (n = Ki(a), n === null && Ri(l, t, a, Rn, e), n === u) break;
                    u = n
                }
                u !== null && a.stopPropagation()
            } else Ri(l, t, a, null, e)
        }
    }

    function Ki(l) {
        return l = Fn(l), Ji(l)
    }
    var Rn = null;

    function Ji(l) {
        if (Rn = null, l = Ge(l), l !== null) {
            var t = H(l);
            if (t === null) l = null;
            else {
                var e = t.tag;
                if (e === 13) {
                    if (l = B(t), l !== null) return l;
                    l = null
                } else if (e === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else t !== l && (l = null)
            }
        }
        return Rn = l, null
    }

    function Wo(l) {
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
                switch (Ed()) {
                    case sf:
                        return 2;
                    case rf:
                        return 8;
                    case Au:
                    case Ad:
                        return 32;
                    case of:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var ki = !1,
        oe = null,
        de = null,
        he = null,
        yu = new Map,
        gu = new Map,
        ve = [],
        Bh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Fo(l, t) {
        switch (l) {
            case "focusin":
            case "focusout":
                oe = null;
                break;
            case "dragenter":
            case "dragleave":
                de = null;
                break;
            case "mouseover":
            case "mouseout":
                he = null;
                break;
            case "pointerover":
            case "pointerout":
                yu.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                gu.delete(t.pointerId)
        }
    }

    function bu(l, t, e, a, u, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: n,
            targetContainers: [u]
        }, t !== null && (t = we(t), t !== null && $o(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l)
    }

    function Yh(l, t, e, a, u) {
        switch (t) {
            case "focusin":
                return oe = bu(oe, l, t, e, a, u), !0;
            case "dragenter":
                return de = bu(de, l, t, e, a, u), !0;
            case "mouseover":
                return he = bu(he, l, t, e, a, u), !0;
            case "pointerover":
                var n = u.pointerId;
                return yu.set(n, bu(yu.get(n) || null, l, t, e, a, u)), !0;
            case "gotpointercapture":
                return n = u.pointerId, gu.set(n, bu(gu.get(n) || null, l, t, e, a, u)), !0
        }
        return !1
    }

    function Po(l) {
        var t = Ge(l.target);
        if (t !== null) {
            var e = H(t);
            if (e !== null) {
                if (t = e.tag, t === 13) {
                    if (t = B(e), t !== null) {
                        l.blockedOn = t, Ud(l.priority, function() {
                            if (e.tag === 13) {
                                var a = it();
                                a = wn(a);
                                var u = Pe(e, a);
                                u !== null && ft(u, e, a), Li(e, a)
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

    function jn(l) {
        if (l.blockedOn !== null) return !1;
        for (var t = l.targetContainers; 0 < t.length;) {
            var e = Ki(l.nativeEvent);
            if (e === null) {
                e = l.nativeEvent;
                var a = new e.constructor(e.type, e);
                Wn = a, e.target.dispatchEvent(a), Wn = null
            } else return t = we(e), t !== null && $o(t), l.blockedOn = e, !1;
            t.shift()
        }
        return !0
    }

    function Io(l, t, e) {
        jn(l) && e.delete(t)
    }

    function Gh() {
        ki = !1, oe !== null && jn(oe) && (oe = null), de !== null && jn(de) && (de = null), he !== null && jn(he) && (he = null), yu.forEach(Io), gu.forEach(Io)
    }

    function Hn(l, t) {
        l.blockedOn === t && (l.blockedOn = null, ki || (ki = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, Gh)))
    }
    var qn = null;

    function ld(l) {
        qn !== l && (qn = l, y.unstable_scheduleCallback(y.unstable_NormalPriority, function() {
            qn === l && (qn = null);
            for (var t = 0; t < l.length; t += 3) {
                var e = l[t],
                    a = l[t + 1],
                    u = l[t + 2];
                if (typeof a != "function") {
                    if (Ji(a || e) === null) continue;
                    break
                }
                var n = we(e);
                n !== null && (l.splice(t, 3), t -= 3, Jc(n, {
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
        oe !== null && Hn(oe, l), de !== null && Hn(de, l), he !== null && Hn(he, l), yu.forEach(t), gu.forEach(t);
        for (var e = 0; e < ve.length; e++) {
            var a = ve[e];
            a.blockedOn === l && (a.blockedOn = null)
        }
        for (; 0 < ve.length && (e = ve[0], e.blockedOn === null);) Po(e), e.blockedOn === null && ve.shift();
        if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
            for (a = 0; a < e.length; a += 3) {
                var u = e[a],
                    n = e[a + 1],
                    c = u[$l] || null;
                if (typeof n == "function") c || ld(e);
                else if (c) {
                    var i = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (u = n, c = n[$l] || null) i = c.formAction;
                        else if (Ji(u) !== null) continue
                    } else i = c.action;
                    typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3), a -= 3), ld(e)
                }
            }
    }

    function $i(l) {
        this._internalRoot = l
    }
    Cn.prototype.render = $i.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null) throw Error(d(409));
        var e = t.current,
            a = it();
        Jo(e, a, l, t, null, null)
    }, Cn.prototype.unmount = $i.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            Jo(l.current, 2, null, l, null, null), gn(), t[Ye] = null
        }
    };

    function Cn(l) {
        this._internalRoot = l
    }
    Cn.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = yf();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var e = 0; e < ve.length && t !== 0 && t < ve[e].priority; e++);
            ve.splice(e, 0, l), e === 0 && Po(l)
        }
    };
    var td = q.version;
    if (td !== "19.1.1") throw Error(d(527, td, "19.1.1"));
    D.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0) throw typeof l.render == "function" ? Error(d(188)) : (l = Object.keys(l).join(","), Error(d(268, l)));
        return l = O(t), l = l !== null ? A(l) : null, l = l === null ? null : l.stateNode, l
    };
    var wh = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: x,
        reconcilerVersion: "19.1.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Bn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Bn.isDisabled && Bn.supportsFiber) try {
            Aa = Bn.inject(wh), lt = Bn
        } catch {}
    }
    return pu.createRoot = function(l, t) {
        if (!j(l)) throw Error(d(299));
        var e = !1,
            a = "",
            u = yr,
            n = gr,
            c = br,
            i = null;
        return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (i = t.unstable_transitionCallbacks)), t = Vo(l, 1, !1, null, null, e, a, u, n, c, i, null), l[Ye] = t.current, Ui(l), new $i(t)
    }, pu.hydrateRoot = function(l, t, e) {
        if (!j(l)) throw Error(d(299));
        var a = !1,
            u = "",
            n = yr,
            c = gr,
            i = br,
            f = null,
            m = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (f = e.unstable_transitionCallbacks), e.formState !== void 0 && (m = e.formState)), t = Vo(l, 1, !0, t, e ?? null, a, u, n, c, i, f, m), t.context = Ko(null), e = t.current, a = it(), a = wn(a), u = Ft(a), u.callback = null, Pt(e, u, a), e = a, t.current.lanes = e, za(t, e), Nt(t), l[Ye] = t.current, Ui(l), new Cn(t)
    }, pu.version = "19.1.1", pu
}
var od;

function Wh() {
    if (od) return Pi.exports;
    od = 1;

    function y() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)
        } catch (q) {
            console.error(q)
        }
    }
    return y(), Pi.exports = $h(), Pi.exports
}
var Fh = Wh();
const Ph = vd(Fh),
    Ih = [{
        id: "album1",
        title: "ไม่จดไม่จำ",
        artist: "Key of B major",
        releaseYear: "4/4",
        coverArtUrl: "./asset/photo/remember.png",
        description: "",
        lyrics: [, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "    C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: " B             G#m7",
            lyric: "มีช่วงเวลาดีดี ทุกวันนี้ของเธอกับเขา"
        }, {
            chords: "    C#m7(add11)     Eadd9  F# Eadd9",
            lyric: "คนที่ควรมันไม่ใช่เรา ฉันกับเธอคงไม่มีวันนั้น"
        }, {
            chords: "     B5add9              Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7          F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: ""
        }, {
            chords: "F#sus4"
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี แอบมองเธอมากเกินกว่านั้น"
        }, {
            chords: "     C#m7(add11)        Eadd9     F#  Eadd9",
            lyric: "คิดกับเธอมากเกินเพื่อนกัน อึดอัดใจ อยากให้เธอได้รู้"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 ",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "",
        }, {
            chords: "B / Eadd9 / B / Eadd9",
        }, {
            chords: "  B               G#m7",
            lyric: "อากาศกลางวันก็ร้อน อากาศตอนเย็นก็ฝน"
        }, {
            chords: "  C#m7(add11)      Eadd9",
            lyric: "อากาศกลางคืนก็หนาว ยิ่งชวนให้ฉันคิดถึง"
        }, {
            chords: "  B              G#m7",
            lyric: "ที่ใจเต้นแรงช่วงนี้ เธอจะได้ยินบ้านไหม"
        }, {
            chords: "   C#m7(add11)  Eadd9          Eadd9",
            lyric: "ต่อให้ใจเธอมีเขา แล้วเธอจะเหงาบ้างไหม"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "       Eadd9  B     F#sus4 G#m7",
            lyric: "อยากบอกเธอให้เธอรู้ ว่าตัวฉันนั้นมีใจ"
        }, {
            chords:  "    Eadd9  B      F#sus4 G#m7",
            lyric: "หากเธอรู้ว่าฉันคิด เธอจะไปจากฉันไหม"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเดา"
        }, {
            chords: "",
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)       Eadd9 ",
            lyric: "ได้กวนตีนล้อเล่นทุกวัน เพื่อนที่ดีทุก ๆ เวลา"
        }]
    }, {
        id: "album2",
        title: "ชอบเธอที่",
        artist: "Key of A major",
        releaseYear: "4/4",
        coverArtUrl: "./asset/photo/ilyw.png",
        description: "DAMN!!",
        lyrics: [{
            chords: "   D         C#m         Bm       Bm ",
            lyric: "เธอบอกว่าฉันเป็นคนที่สำคัญ และรักฉันมากแค่ไหน"
        }, {
            chords: "   D        C#m         Bm       A",
            lyric: "เธอบอกเสมอว่าเธอไม่เสียใจ ที่ใช้ชีวิตอยู่กับฉัน"
        }, {
            chords: "   D        C#m      Bm        Bm",
            lyric: "มีอยู่หนึ่งครั้งเธอเล่าให้ฟัง ว่ารถเธอพังไม่ไปไหน"
        }, {
            chords: "   D         C#m      Bm        A",
            lyric: "เธอเลยชวนฉันไปขึ้นรถไฟ จะไกลแค่ไหนก็ไป"
        }, {
            chords: "     D",
            lyric: "ไปจากความวุ่นวายทั้งหมด"
        }, {
            chords: "  C#m     F#",
            lyric: "ให้ชีวิตนี้มีแต่ความสดใส"
        }, {
            chords: "      Bm       C#m    B7",
            lyric: "จากตอนนั้น ถึงตอนนี้ และจะถึงเมื่อไหร่"
        }, {
            chords: "      Bm        A",
            lyric: "ฝากให้เธอเป็นคนดูแล"
        }, {
            chords: ""
        }, {
            chords: "    D         C#m ",
            lyric: "ชอบเธอที่บอกว่าไม่เคยเสียใจ"
        }, {
            chords: "    Bm      A",
            lyric: "ตั้งแต่วันที่เรานั้นได้พบกัน"
        }, {
            chords: "     D              C#m ",
            lyric: "ชอบที่เธอบอกฉันว่าเธอได้เป็นคนใหม่"
        }, {
            chords: "     Bm      A",
            lyric: "ตั้งแต่วันที่เราได้อยู่ด้วยกัน"
        }, {
            chords: "      D          C#m",
            lyric: "จะอยู่กับคนคนนี้ไม่ว่าจะเศร้าเพียงใด"
        }, {
            chords: "     Bm        A    ",
            lyric: "เธอจะคอยใส่ใจ ไม่ให้ฉันกลัว"
        }, {
            chords: "D E / A / E"
        }, {
            chords: "D / C#m / Bm / Bm C#"
        }, {
            chords: "   D         C#m          Bm        Bm",
            lyric: "แต่ก่อนคือฉันเป็นคนไม่ค่อยแคร์ ว่ารักแท้จริงสักแค่ไหน"
        }, {
            chords: "   D          C#m           Bm        A",
            lyric: "มองมาตอนนี้ มองเธอข้าง ๆ กาย สิ่งนั้นมันจริงสำหรับฉัน"
        }, {
            chords: "   D         C#m         Bm       Bm ",
            lyric: "ฉันบอกว่าเธอเป็นคนที่สำคัญ และรักเธอมากแค่ไหน"
        }, {
            chords: "   D        C#m          Bm       A",
            lyric: "ฉันเลยชวนเธอไปดูดอกไม้ไฟ จะสวยแค่ไหนก็ไป"
        }, {
            lyric: ""
        }, {
            chords: "     D",
            lyric: "ไปจากความวุ่นวายทั้งหมด"
        }, {
            chords: "  C#m     F#",
            lyric: "ให้ชีวิตนี้มีแต่ความสดใส"
        }, {
            chords: "   Bm      C#m   B7",
            lyric: "ทั้งชีวิต นับจากนี้ อีกตลอดไป"
        }, {
            chords: "      Bm        A",
            lyric: "อยากให้เธอเป็นคนดูแล"
        }, {
            chords: ""
        }, {
            chords: "    D         C#m ",
            lyric: "ชอบเธอที่บอกว่าไม่เคยเสียใจ"
        }, {
            chords: "    Bm       A",
            lyric: "ตั้งแต่วันที่เรานั้นได้พบกัน"
        }, {
            chords: "     D              C#m ",
            lyric: "ชอบที่เธอบอกฉันว่าเธอได้เป็นคนใหม่"
        }, {
            chords: "     Bm      A",
            lyric: "ตั้งแต่วันที่เราได้อยู่ด้วยกัน"
        }, {
            chords: "      D          C#m",
            lyric: "จะอยู่กับคนคนนี้ไม่ว่าจะเศร้าเพียงใด"
        }, {
            chords: "     Bm        A    ",
            lyric: "เธอจะคอยใส่ใจ ไม่ให้ฉันกลัว"
        }, {
            chords: "D E / A / E"
        }, {
            chords: "   A         C#m         F#m       Em   A ",
            lyric: "เธอบอกว่าฉันเป็นคนที่สำคัญ และรักฉันมากแค่ไหน"
        }, {
            chords: "   D        B          Bm        A",
            lyric: "มีเธอและฉันเดินร่วมทางไป จะไกลแค่ไหนก็ไป"
        }, {
            chords: "    D         C#m ",
            lyric: "ชอบเธอที่บอกว่าไม่เคยเสียใจ"
        }, {
            chords: "    Bm      A",
            lyric: "ตั้งแต่วันที่เรานั้นได้พบกัน"
        }, {
            chords: "     D              C#m ",
            lyric: "ชอบที่เธอบอกฉันว่าเธอได้เป็นคนใหม่"
        }, {
            chords: "     Bm      A",
            lyric: "ตั้งแต่วันที่เราได้อยู่ด้วยกัน"
        }, {
            chords: "      D          C#m",
            lyric: "จะอยู่กับคนคนนี้ไม่ว่าจะเศร้าเพียงใด"
        }, {
            chords: "     Bm        A    ",
            lyric: "เธอจะคอยใส่ใจ ไม่ให้ฉันกลัว"
        }, {
            chords: "D E / A / E / A"
        }]
    }, {
        id: "album3",
        title: "ไม่โกรธมั้ง",
        artist: "Key of A Major",
        releaseYear: "4/4",
        coverArtUrl: "./asset/photo/mad.png",
        description: "",
        lyrics: [, {
            chords: "Aadd9 / Aadd9",
        }, {
            chords: "            A                C#m",
            lyric: "อากาศกลางวันก็ร้อน อากาศกลางคืนก็ร้อน"
        }, {
            chords: "         Bm  ",
            lyric: "บวกกับตอนนอน ยิ่งนอนไม่ค่อยหลับ"
        }, {
            chords: "     E7",
            lyric: "เพราะดันกลับไปคิดถึง"
        }, {
            chords: "       A              C#m",
            lyric: "เรื่องเมื่อเช้า ประโยคที่เราพูดกับเขา"
        }, {
            chords: "        Bm",
            lyric: "บวกกับน้ำเสียงที่ฟังไม่ค่อยเหมาะ"
        }, {
            chords: "   E7",
            lyric: "จึงอยากจะขออย่าโกรธกัน"
        }, {
            chords: "",
        }, {
            chords: " Bm    C#m   D          Dm",
            lyric: "ได้ไหม ได้ไหม     อยากรู้ว่าได้หรือเปล่า"
        }, {
            chords: " Bm     C#m     D         Dm",
            lyric: "โกรธไหม โกรธไหม    ไม่ชัวร์อะไรสักอย่าง"
        }, {
            chords: " Bm    C#m  D        Dm",
            lyric: "กลัวอยู่ ทนอยู่     ไม่รู้อีกนานแค่ไหน"
        }, {
            chords: " Bm   C#m     E7",
            lyric: "ต่อจากนี้เป็นอย่างไร"
        }, {
            chords: ""
        }, {
            chords: " D     E     C#m F#m",
            lyric: "ก็ยังติด คิดอยู่ว่าเราทำผิดไป"
        }, {
            chords: "D     E       C#m F#m",
            lyric: "ทนกับ ความรู้สึกที่เรายังเก็บไว้"
        }, {
            chords: "D    E     C#m F#m      Bm   C#m",
            lyric: "แต่สุดท้ายไม่เคยกล้าพูดมันออกไป"
        }, {
            chords: "       D            E7         Aadd9",
            lyric: "ทำได้แค่เพียง เสี่ยงดวงว่าเขาคงไม่โกรธเรามั้ง"
        }, {
            chords: "",
        }, {
            chords: "Aadd9",
        }, {
            chords: "",
        }, {
            chords: "          A               C#m",
            lyric: "วันวันที่ผ่านมานั้น จะคิดมากเกินไปไหน"
        }, {
            chords: "         Bm  ",
            lyric: "แต่ถ้อยคำที่ใช้ เขาเหมือนไม่พอใจ"
        }, {
            chords: "   E7",
            lyric: "เราทำอะไรผิดไปจริง ๆ"
        }, {
            chords: "  A               C#m",
            lyric: "ใช่ไหม เป็นตอนที่เราพูดกับเขา"
        }, {
            chords: "         Bm",
            lyric: "หรืออาจเป็นครั้งที่ไม่ได้ช่วยอะไร"
        }, {
            chords: "  E7",
            lyric: "จึงอยากจะขออย่าโกรธกัน"
        }, {
            chords: "",
        }, {
            chords: " Bm    C#m   D          Dm",
            lyric: "ได้ไหม ได้ไหม     อยากรู้ว่าได้หรือเปล่า"
        }, {
            chords: " Bm     C#m     D         Dm",
            lyric: "โกรธไหม โกรธไหม    ไม่ชัวร์อะไรสักอย่าง"
        }, {
            chords: " Bm    C#m  D        Dm",
            lyric: "กลัวอยู่ ทนอยู่     ไม่รู้อีกนานแค่ไหน"
        }, {
            chords: " Bm   C#m     E7",
            lyric: "ต่อจากนี้เป็นอย่างไร"
        }, {
            chords: ""
        }, {
            chords: " D     E     C#m F#m",
            lyric: "ก็ยังติด คิดอยู่ว่าเราทำผิดไป"
        }, {
            chords: "D     E       C#m F#m",
            lyric: "ทนกับ ความรู้สึกที่เรายังเก็บไว้"
        }, {
            chords: "D    E     C#m F#m      Bm   C#m",
            lyric: "แต่สุดท้ายไม่เคยกล้าพูดมันออกไป"
        }, {
            chords: "       D            E7         Aadd9",
            lyric: "ทำได้แค่เพียง เสี่ยงดวงว่าเขาคงไม่โกรธเรามั้ง"
        }, {
            chords: "",
        }, {
            chords: "Aadd9",
        }, {
            chords: "",
        }, {
            chords: "B C#m / C#m / D",
        }, {
            chords: "             E7  ",
            lyric: "ต่อจากนี้เป็นอย่างไร"
        }, {
            chords: "",
        }, {
            chords: " D     E     C#m F#m",
            lyric: "ก็ยังติด คิดอยู่ว่าเราทำผิดไป"
        }, {
            chords: "D     E       C#m F#m",
            lyric: "ทนกับ ความรู้สึกที่เรายังเก็บไว้"
        }, {
            chords: "D    E    C#m  F#m      Bm   C#m",
            lyric: "แต่สุดท้ายไม่เคยกล้าพูดมันออกไป"
        }, {
            chords: "       D            E7 ",
            lyric: "ทำได้แค่เพียง กังวลเรื่องเขาแล้วเรา"
        }, {
            chords: " D     E     C#m F#m",
            lyric: "ก็ยังติด คิดอยู่ว่าเราทำผิดไป"
        }, {
            chords: "D     E       C#m F#m",
            lyric: "ทนกับ ความรู้สึกที่เรายังเก็บไว้"
        }, {
            chords: "D    E    C#m  F#m      Bm   C#m",
            lyric: "แต่สุดท้ายไม่เคยกล้าพูดมันออกไป"
        }, {
            chords: "       D            E7   ",
            lyric: "ทำได้แค่เพียง แอบหวังให้เขาไม่โกรธเรา"
        }, {
            chords:"  D     E     C#m        F#m",
            lyric: "ได้ไหม ได้ไหม     อยากรู้ว่าได้หรือเปล่า"
        }, {
            chords: "D E / C#m F#m",
        }, {
            chords:" D       E       C#m        F#m",
            lyric: "โกรธไหม โกรธไหม     ไม่ชัวร์อะไรสักอย่าง"
        }, {
            chords:"Bm   C#m          D",
            lyric: "           ทำได้แค่เพียง"
        }, {
            chords:"         E7           Aa99",
            lyric: "เสี่ยงดวงว่าเขาคงไม่โกรธเรามั้ง"
        }, ]
    }, {
        id: "album4",
        title: "ไม่ใช่แค่ฉัน",
        artist: "",
        releaseYear: 2023,
        coverArtUrl: "./asset/photo/notjustme16.jpg",
        description: "",
        lyrics: [, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "    C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: " B             G#m7",
            lyric: "มีช่วงเวลาดีดี ทุกวันนี้ของเธอกับเขา"
        }, {
            chords: "    C#m7(add11)     Eadd9  F# Eadd9",
            lyric: "คนที่ควรมันไม่ใช่เรา ฉันกับเธอคงไม่มีวันนั้น"
        }, {
            chords: "     B5add9              Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7          F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: ""
        }, {
            chords: "F#sus4"
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี แอบมองเธอมากเกินกว่านั้น"
        }, {
            chords: "     C#m7(add11)        Eadd9     F#  Eadd9",
            lyric: "คิดกับเธอมากเกินเพื่อนกัน อึดอัดใจ อยากให้เธอได้รู้"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 ",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "",
        }, {
            chords: "B / Eadd9 / B / Eadd9",
        }, {
            chords: "  B               G#m7",
            lyric: "อากาศกลางวันก็ร้อน อากาศตอนเย็นก็ฝน"
        }, {
            chords: "  C#m7(add11)      Eadd9",
            lyric: "อากาศกลางคืนก็หนาว ยิ่งชวนให้ฉันคิดถึง"
        }, {
            chords: "  B              G#m7",
            lyric: "ที่ใจเต้นแรงช่วงนี้ เธอจะได้ยินบ้านไหม"
        }, {
            chords: "   C#m7(add11)  Eadd9          Eadd9",
            lyric: "ต่อให้ใจเธอมีเขา แล้วเธอจะเหงาบ้างไหม"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "       Eadd9  B     F#sus4 G#m7",
            lyric: "อยากบอกเธอให้เธอรู้ ว่าตัวฉันนั้นมีใจ"
        }, {
            chords:  "    Eadd9  B      F#sus4 G#m7",
            lyric: "หากเธอรู้ว่าฉันคิด เธอจะไปจากฉันไหม"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเดา"
        }, {
            chords: "",
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)       Eadd9 ",
            lyric: "ได้กวนตีนล้อเล่นทุกวัน เพื่อนที่ดีทุก ๆ เวลา"
        }]
    }, {
        id: "album5",
        title: "ไม่เท่าไร",
        artist: "",
        releaseYear: 2021,
        coverArtUrl: "./asset/photo/maimak.jpg",
        description: "",
        lyrics: [, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "    C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: " B             G#m7",
            lyric: "มีช่วงเวลาดีดี ทุกวันนี้ของเธอกับเขา"
        }, {
            chords: "    C#m7(add11)     Eadd9  F# Eadd9",
            lyric: "คนที่ควรมันไม่ใช่เรา ฉันกับเธอคงไม่มีวันนั้น"
        }, {
            chords: "     B5add9              Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7          F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: ""
        }, {
            chords: "F#sus4"
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี แอบมองเธอมากเกินกว่านั้น"
        }, {
            chords: "     C#m7(add11)        Eadd9     F#  Eadd9",
            lyric: "คิดกับเธอมากเกินเพื่อนกัน อึดอัดใจ อยากให้เธอได้รู้"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 ",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "",
        }, {
            chords: "B / Eadd9 / B / Eadd9",
        }, {
            chords: "  B               G#m7",
            lyric: "อากาศกลางวันก็ร้อน อากาศตอนเย็นก็ฝน"
        }, {
            chords: "  C#m7(add11)      Eadd9",
            lyric: "อากาศกลางคืนก็หนาว ยิ่งชวนให้ฉันคิดถึง"
        }, {
            chords: "  B              G#m7",
            lyric: "ที่ใจเต้นแรงช่วงนี้ เธอจะได้ยินบ้านไหม"
        }, {
            chords: "   C#m7(add11)  Eadd9          Eadd9",
            lyric: "ต่อให้ใจเธอมีเขา แล้วเธอจะเหงาบ้างไหม"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "       Eadd9  B     F#sus4 G#m7",
            lyric: "อยากบอกเธอให้เธอรู้ ว่าตัวฉันนั้นมีใจ"
        }, {
            chords:  "    Eadd9  B      F#sus4 G#m7",
            lyric: "หากเธอรู้ว่าฉันคิด เธอจะไปจากฉันไหม"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเดา"
        }, {
            chords: "",
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)       Eadd9 ",
            lyric: "ได้กวนตีนล้อเล่นทุกวัน เพื่อนที่ดีทุก ๆ เวลา"
        }]
    }, {
        id: "album6",
        title: "ไม่ต้องห่วง ไม่เป็นไร",
        artist: "",
        releaseYear: 2024,
        coverArtUrl: "./asset/photo/fine.png",
        description: "",
        lyrics: [, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "    C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: " B             G#m7",
            lyric: "มีช่วงเวลาดีดี ทุกวันนี้ของเธอกับเขา"
        }, {
            chords: "    C#m7(add11)     Eadd9  F# Eadd9",
            lyric: "คนที่ควรมันไม่ใช่เรา ฉันกับเธอคงไม่มีวันนั้น"
        }, {
            chords: "     B5add9              Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7          F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: ""
        }, {
            chords: "F#sus4"
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี แอบมองเธอมากเกินกว่านั้น"
        }, {
            chords: "     C#m7(add11)        Eadd9     F#  Eadd9",
            lyric: "คิดกับเธอมากเกินเพื่อนกัน อึดอัดใจ อยากให้เธอได้รู้"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 ",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "",
        }, {
            chords: "B / Eadd9 / B / Eadd9",
        }, {
            chords: "  B               G#m7",
            lyric: "อากาศกลางวันก็ร้อน อากาศตอนเย็นก็ฝน"
        }, {
            chords: "  C#m7(add11)      Eadd9",
            lyric: "อากาศกลางคืนก็หนาว ยิ่งชวนให้ฉันคิดถึง"
        }, {
            chords: "  B              G#m7",
            lyric: "ที่ใจเต้นแรงช่วงนี้ เธอจะได้ยินบ้านไหม"
        }, {
            chords: "   C#m7(add11)  Eadd9          Eadd9",
            lyric: "ต่อให้ใจเธอมีเขา แล้วเธอจะเหงาบ้างไหม"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "       Eadd9  B     F#sus4 G#m7",
            lyric: "อยากบอกเธอให้เธอรู้ ว่าตัวฉันนั้นมีใจ"
        }, {
            chords:  "    Eadd9  B      F#sus4 G#m7",
            lyric: "หากเธอรู้ว่าฉันคิด เธอจะไปจากฉันไหม"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเดา"
        }, {
            chords: "",
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)       Eadd9 ",
            lyric: "ได้กวนตีนล้อเล่นทุกวัน เพื่อนที่ดีทุก ๆ เวลา"
        }]
    }, {
        id: "album7",
        title: "โชคดีมีชัย โชคชัยมีวัว",
        artist: "",
        releaseYear: 2024,
        coverArtUrl: "./asset/photo/luck.png",
        description: "",
        lyrics: [, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "    C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: " B             G#m7",
            lyric: "มีช่วงเวลาดีดี ทุกวันนี้ของเธอกับเขา"
        }, {
            chords: "    C#m7(add11)     Eadd9  F# Eadd9",
            lyric: "คนที่ควรมันไม่ใช่เรา ฉันกับเธอคงไม่มีวันนั้น"
        }, {
            chords: "     B5add9              Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7          F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: ""
        }, {
            chords: "F#sus4"
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี แอบมองเธอมากเกินกว่านั้น"
        }, {
            chords: "     C#m7(add11)        Eadd9     F#  Eadd9",
            lyric: "คิดกับเธอมากเกินเพื่อนกัน อึดอัดใจ อยากให้เธอได้รู้"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 ",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "",
        }, {
            chords: "B / Eadd9 / B / Eadd9",
        }, {
            chords: "  B               G#m7",
            lyric: "อากาศกลางวันก็ร้อน อากาศตอนเย็นก็ฝน"
        }, {
            chords: "  C#m7(add11)      Eadd9",
            lyric: "อากาศกลางคืนก็หนาว ยิ่งชวนให้ฉันคิดถึง"
        }, {
            chords: "  B              G#m7",
            lyric: "ที่ใจเต้นแรงช่วงนี้ เธอจะได้ยินบ้านไหม"
        }, {
            chords: "   C#m7(add11)  Eadd9          Eadd9",
            lyric: "ต่อให้ใจเธอมีเขา แล้วเธอจะเหงาบ้างไหม"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "       Eadd9  B     F#sus4 G#m7",
            lyric: "อยากบอกเธอให้เธอรู้ ว่าตัวฉันนั้นมีใจ"
        }, {
            chords:  "    Eadd9  B      F#sus4 G#m7",
            lyric: "หากเธอรู้ว่าฉันคิด เธอจะไปจากฉันไหม"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเดา"
        }, {
            chords: "",
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)       Eadd9 ",
            lyric: "ได้กวนตีนล้อเล่นทุกวัน เพื่อนที่ดีทุก ๆ เวลา"
        }]
    }, {
        id: "album8",
        title: "ไม่คิดอะไร",
        artist: "",
        releaseYear: 2024,
        coverArtUrl: "./asset/photo/yonder.jpg",
        description: "",
        lyrics: [, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "    C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: " B             G#m7",
            lyric: "มีช่วงเวลาดีดี ทุกวันนี้ของเธอกับเขา"
        }, {
            chords: "    C#m7(add11)     Eadd9  F# Eadd9",
            lyric: "คนที่ควรมันไม่ใช่เรา ฉันกับเธอคงไม่มีวันนั้น"
        }, {
            chords: "     B5add9              Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7          F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: ""
        }, {
            chords: "F#sus4"
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)    Eadd9 ",
            lyric: "ตั้งแต่เราได้รู้จักกัน อยู่ข้างกันทุก ๆ เวลา"
        }, {
            chords: "   B               G#m7",
            lyric: "เป็นช่วงเวลาดีดี แอบมองเธอมากเกินกว่านั้น"
        }, {
            chords: "     C#m7(add11)        Eadd9     F#  Eadd9",
            lyric: "คิดกับเธอมากเกินเพื่อนกัน อึดอัดใจ อยากให้เธอได้รู้"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 ",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "",
        }, {
            chords: "B / Eadd9 / B / Eadd9",
        }, {
            chords: "  B               G#m7",
            lyric: "อากาศกลางวันก็ร้อน อากาศตอนเย็นก็ฝน"
        }, {
            chords: "  C#m7(add11)      Eadd9",
            lyric: "อากาศกลางคืนก็หนาว ยิ่งชวนให้ฉันคิดถึง"
        }, {
            chords: "  B              G#m7",
            lyric: "ที่ใจเต้นแรงช่วงนี้ เธอจะได้ยินบ้านไหม"
        }, {
            chords: "   C#m7(add11)  Eadd9          Eadd9",
            lyric: "ต่อให้ใจเธอมีเขา แล้วเธอจะเหงาบ้างไหม"
        }, {
            chords: "      B5add9             Dm7b5",
            lyric: "หยุดตัวเองไว้แค่ไหน ต้องการห้ามใจ"
        }, {
            chords: "    C#m7 Eadd9   B",
            lyric: "แต่ว่าใจ ไปชอบมันทุกที"
        }, {
            chords: "   C#m7         F#sus4",
            lyric: "จะกี่ครั้ง เป็นกี่ครั้งก็ไม่จำ"
        }, {
            chords: "",
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "     Eadd9   B      F#sus4  G#m7",
            lyric: "เธอมาทำ ให้หวั่นไหว ก็ไปชอบมันทุกที"
        }, {
            chords:  "       Eadd9 B      F#sus4 G#m7",
            lyric: "เบื่อตัวเอง เจ็บไม่จำ แต่ห้ามใจไว้ไม่ไหว"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเป็น"
        }, {
            chords: "  Eadd9 B     F#sus4 G#m7",
            lyric: "คนอื่นเขา เป็นแบบนี้กันบ้างไหม"
        }, {
            chords: "       Eadd9  B     F#sus4 G#m7",
            lyric: "อยากบอกเธอให้เธอรู้ ว่าตัวฉันนั้นมีใจ"
        }, {
            chords:  "    Eadd9  B      F#sus4 G#m7",
            lyric: "หากเธอรู้ว่าฉันคิด เธอจะไปจากฉันไหม"
        }, {
            chords: "     C#m7      F#sus4 B",
            lyric: "เหนื่อยจริง ๆ ทำไมฉันจะต้องเดา"
        }, {
            chords: "",
        }, {
            chords: "   B              G#m7",
            lyric: "เป็นช่วงเวลาดีดี เธอเป็นเพื่อนที่ดีต่อฉัน"
        }, {
            chords: "     C#m7(add11)       Eadd9 ",
            lyric: "ได้กวนตีนล้อเล่นทุกวัน เพื่อนที่ดีทุก ๆ เวลา"
        }]
    }],
    l1 = () => v.jsx("header", {
        className: "border-[var(--border-subtle)]",
        children: v.jsx("div", {
            className: "container mx-auto px-6 py-4 flex justify-end items-center"
        })
    }),
    t1 = () => v.jsx("section", {
        className: "text-center py-12 md:py-16 px-6",
        children: v.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [v.jsx("h1", {
                className: "text-4xl md:text-5xl font-bold text-[var(--text-default)] leading-tight tracking-tight",
                children: ""
            }), v.jsx("p", {
                className: "mt-4 text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto",
                children: ""
            })]
        })
    }),
    e1 = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        })
    }),
    a1 = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            fillRule: "evenodd",
            d: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z",
            clipRule: "evenodd"
        })
    }),
    u1 = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            d: "M19.75 3H4.25A1.25 1.25 0 0 0 3 4.25v15.5A1.25 1.25 0 0 0 4.25 21h15.5A1.25 1.25 0 0 0 21 19.75V4.25A1.25 1.25 0 0 0 19.75 3zM8.5 18.5h-3v-9h3v9zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.5 10h-3v-4.35c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18.5h-3v-9h2.88v1.31h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.3z"
        })
    }),
    ef = ({
        href: y,
        ariaLabel: q,
        children: N
    }) => v.jsx("a", {
        href: y,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": q,
        className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-transform duration-200 hover:scale-110",
        children: N
    }),
    n1 = () => v.jsx("footer", {
        className: "bg-[var(--bg-surface-glass)] backdrop-blur-lg mt-12 glass-border shadow-[0_-4px_15px_var(--shadow-color)]",
        children: v.jsxs("div", {
            className: "container mx-auto px-6 py-8 text-center text-[var(--text-secondary)]",
            children: [v.jsx("p", {
                className: "text-lg font-medium text-[var(--text-default)] mb-4",
                children: ""
            }), v.jsx("p", {
                className: "text-xs mt-2 text-[var(--text-subtle)]",
                children: ""
            })]
        })
    }),
    c1 = ({
        album: y,
        onSelectAlbum: q,
        isSelected: N
    }) => {
        const d = N ? "ring-2 ring-[var(--color-primary)] ring-offset-2 ring-offset-[var(--bg-default)]" : "shadow-[0_8px_30px_var(--shadow-color)]";
        return v.jsx("article", {
            className: `bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl rounded-2xl glass-border transition-all duration-300 ${d}`,
            children: v.jsxs("button", {
                className: "w-full text-left flex items-center p-4",
                onClick: () => q(y),
                "aria-pressed": N,
                children: [v.jsx("img", {
                    src: y.coverArtUrl,
                    alt: `${y.title} cover art`,
                    className: "w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover mr-4 flex-shrink-0 shadow-md",
                    loading: "lazy"
                }), v.jsxs("div", {
                    className: "min-w-0 flex-grow",
                    children: [v.jsx("h3", {
                        className: "font-bold text-xl text-[var(--text-default)] truncate",
                        title: y.title,
                        children: y.title
                    }), v.jsxs("p", {
                        className: "text-md text-[var(--text-secondary)] mt-1 truncate",
                        title: y.artist,
                        children: [y.artist, " • ", y.releaseYear]
                    })]
                })]
            })
        })
    },
    i1 = ({
        albums: y,
        selectedAlbum: q,
        onSelectAlbum: N
    }) => v.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8",
        children: y.map(d => v.jsx(c1, {
            album: d,
            onSelectAlbum: N,
            isSelected: (q == null ? void 0 : q.id) === d.id
        }, d.id))
    }),
    md = Z.createContext(void 0),
    nf = () => {
        const y = Z.useContext(md);
        if (!y) throw new Error("useAudio must be used within an AudioProvider");
        return y
    },
    f1 = ({
        children: y
    }) => {
        const [q, N] = Z.useState(null), [d, j] = Z.useState(null), [H, B] = Z.useState(!1), [K, O] = Z.useState(0), [A, U] = Z.useState(0), [k, F] = Z.useState(.75), [il, yl] = Z.useState(!1), [gl, al] = Z.useState(!1), [bl, Ol] = Z.useState([]), [$, jl] = Z.useState(-1), L = Z.useRef(null), zl = Z.useRef(.75), I = Z.useCallback((b, M) => {
            const _ = M || bl,
                Q = L.current;
            if (Q && _.length > 0 && b >= 0 && b < _.length) {
                const {
                    track: Y,
                    album: Cl
                } = _[b];
                al(!0), N(Y), j(Cl), jl(b), Q.src !== Y.audioSrc && (Q.src = Y.audioSrc, Q.load());
                const cl = Q.play();
                cl !== void 0 && cl.catch(kl => {
                    kl.name === "AbortError" ? console.log("Playback aborted (e.g., by new track load or rapid navigation). This is usually normal.") : (console.error("Error attempting to play track:", kl), al(!1), B(!1))
                })
            } else Q && (Q.paused || Q.pause(), Q.src && (!_ || _.length === 0) && (Q.removeAttribute("src"), Q.load())), N(null), j(null), jl(-1), B(!1), al(!1), (!_ || _.length === 0) && Ol([])
        }, [bl]), Dl = Z.useCallback(() => {
            $ !== -1 && $ < bl.length - 1 ? I($ + 1) : B(!1)
        }, [$, bl, I]), Ml = Z.useRef(Dl);
        Z.useEffect(() => {
            Ml.current = Dl
        }, [Dl]), Z.useEffect(() => {
            if (typeof window < "u") {
                const b = new Audio;
                L.current = b, b.volume = il ? 0 : k, b.muted = il;
                const M = () => O(b.currentTime),
                    _ = () => {
                        U(b.duration), al(!1)
                    },
                    Q = () => Ml.current(),
                    Y = () => B(!0),
                    Cl = () => B(!1),
                    cl = () => {
                        F(b.volume), yl(b.muted), !b.muted && b.volume > 0 && (zl.current = b.volume)
                    },
                    kl = () => al(!0),
                    Ce = () => al(!1),
                    ye = Be => {
                        console.error("Audio element error:", Be);
                        const ge = Be.target.error;
                        ge && console.error(`MediaError code: ${ge.code}, message: ${ge.message||"No message"}`), al(!1), B(!1)
                    };
                return b.addEventListener("timeupdate", M), b.addEventListener("loadedmetadata", _), b.addEventListener("ended", Q), b.addEventListener("play", Y), b.addEventListener("pause", Cl), b.addEventListener("volumechange", cl), b.addEventListener("waiting", kl), b.addEventListener("canplay", Ce), b.addEventListener("error", ye), () => {
                    b.removeEventListener("timeupdate", M), b.removeEventListener("loadedmetadata", _), b.removeEventListener("ended", Q), b.removeEventListener("play", Y), b.removeEventListener("pause", Cl), b.removeEventListener("volumechange", cl), b.removeEventListener("waiting", kl), b.removeEventListener("canplay", Ce), b.removeEventListener("error", ye), b.paused || b.pause(), b.removeAttribute("src"), b.load(), L.current = null
                }
            }
        }, []), Z.useEffect(() => {
            const b = L.current;
            b && (b.volume !== k && (b.volume = k), b.muted !== il && (b.muted = il))
        }, [k, il]);
        const Et = Z.useCallback((b, M) => {
                const _ = {
                    track: b,
                    album: M
                };
                Ol([_]), I(0, [_])
            }, [I]),
            bt = Z.useCallback((b, M = 0) => {
                if (!b.tracks || b.tracks.length === 0) return;
                const _ = b.tracks.map(Q => ({
                    track: Q,
                    album: b
                }));
                Ol(_), I(M, _)
            }, [I]),
            Hl = Z.useCallback(b => {
                !b || b.length === 0 || Ol(M => {
                    const _ = [...M, ...b];
                    return !H && $ === -1 && L.current && M.length === 0 && I(_.length - b.length, _), _
                })
            }, [H, $, I]),
            Ot = Z.useCallback(b => {
                Ol(M => {
                    if (b < 0 || b >= M.length) return M;
                    const _ = M.filter((Q, Y) => Y !== b);
                    return _.length === 0 ? (L.current && (L.current.paused || L.current.pause(), L.current.removeAttribute("src"), L.current.load()), N(null), j(null), jl(-1), _) : (b === $ ? b < _.length ? I(b, _) : I(_.length - 1, _) : b < $ && jl($ - 1), _)
                })
            }, [$, I]),
            Dt = Z.useCallback(b => {
                b >= 0 && b < bl.length && I(b)
            }, [bl, I]),
            ql = Z.useCallback(() => {
                const b = L.current;
                if (b) {
                    if (!q) {
                        if (bl.length > 0) {
                            const M = $ !== -1 ? $ : 0;
                            M >= 0 && M < bl.length ? I(M) : bl.length > 0 && I(0)
                        }
                        return
                    }
                    if (b.paused) {
                        const M = b.play();
                        M !== void 0 && M.catch(_ => {
                            _.name === "AbortError" ? console.log("Play toggle aborted.") : (console.error("Error resuming playback via toggle:", _), B(!1))
                        })
                    } else b.pause()
                }
            }, [q, bl, $, I]),
            x = Z.useCallback(b => {
                L.current && isFinite(b) && (L.current.currentTime = Math.max(0, Math.min(b, A || 0)))
            }, [A]),
            D = Z.useCallback(b => {
                const M = Math.max(0, Math.min(b, 1));
                F(M), M > 0 && il ? yl(!1) : M === 0 && !il && yl(!0)
            }, [il]),
            G = Z.useCallback(() => {
                const b = L.current;
                b && (b.muted ? (yl(!1), k === 0 && zl.current > 0 && F(zl.current)) : (b.volume > 0 && (zl.current = b.volume), yl(!0)))
            }, [k]),
            fl = Z.useCallback(() => {
                $ !== -1 && $ < bl.length - 1 && I($ + 1)
            }, [$, bl, I]),
            s = Z.useCallback(() => {
                $ > 0 && I($ - 1)
            }, [$, I]),
            z = {
                currentTrack: q,
                currentAlbum: d,
                isPlaying: H,
                currentTime: K,
                duration: A,
                volume: k,
                isMuted: il,
                isLoadingTrack: gl,
                playlist: bl,
                currentPlaylistIndex: $,
                playSingleTrackNow: Et,
                playAlbumNow: bt,
                addToQueue: Hl,
                removeFromQueue: Ot,
                playTrackAtIndex: Dt,
                togglePlayPause: ql,
                seek: x,
                setVolume: D,
                toggleMute: G,
                playNextTrack: fl,
                playPreviousTrack: s
            };
        return v.jsx(md.Provider, {
            value: z,
            children: y
        })
    },
    cf = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            fillRule: "evenodd",
            d: "M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",
            clipRule: "evenodd"
        })
    }),
    yd = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            fillRule: "evenodd",
            d: "M6.75 5.25a.75.75 0 0 0-.75.75V18a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-1.5Zm9 0a.75.75 0 0 0-.75.75V18a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-1.5Z",
            clipRule: "evenodd"
        })
    }),
    s1 = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            d: "M5.588 5.062a1.25 1.25 0 0 0-1.025 2.197l5.005 4.29-5.005 4.29a1.25 1.25 0 0 0 1.025 2.197l7.09-6.078a1.25 1.25 0 0 0 0-2.196L5.587 5.06Zm10.912 0a1.25 1.25 0 0 0-1.25 1.25v11.375a1.25 1.25 0 0 0 2.5 0V6.312a1.25 1.25 0 0 0-1.25-1.25Z"
        })
    }),
    r1 = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            d: "M18.412 5.062a1.25 1.25 0 0 1 1.025 2.197l-5.005 4.29 5.005 4.29a1.25 1.25 0 0 1-1.025 2.197l-7.09-6.078a1.25 1.25 0 0 1 0-2.196l7.09-6.077ZM7.5 5.062A1.25 1.25 0 0 1 6.25 6.312v11.375a1.25 1.25 0 0 1-2.5 0V6.312A1.25 1.25 0 0 1 7.5 5.06Z"
        })
    }),
    gd = ({
        className: y
    }) => v.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: [v.jsx("path", {
            d: "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"
        }), v.jsx("path", {
            d: "M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"
        })]
    }),
    o1 = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            d: "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06ZM18.28 15.28a.75.75 0 0 0-1.06-1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06L16.25 14.2l1.97 1.97ZM18.28 8.72a.75.75 0 0 0 1.06-1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06L16.25 9.8l1.97-1.97Z"
        })
    }),
    af = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            fillRule: "evenodd",
            d: "M2.625 6.75a.75.75 0 0 1 .75-.75h17.25a.75.75 0 0 1 0 1.5H3.375a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h17.25a.75.75 0 0 1 0 1.5H3.375a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h17.25a.75.75 0 0 1 0 1.5H3.375a.75.75 0 0 1-.75-.75Z",
            clipRule: "evenodd"
        })
    }),
    dd = y => {
        if (isNaN(y) || y === 1 / 0) return "0:00";
        const q = Math.floor(y / 60),
            N = Math.floor(y % 60);
        return `${q}:${N<10?"0":""}${N}`
    },
    ff = 80,
    hd = `h-[${ff}px]`,
    d1 = ({
        onOpenPlaylistQueue: y
    }) => {
        const {
            currentTrack: q,
            currentAlbum: N,
            isPlaying: d,
            currentTime: j,
            duration: H,
            volume: B,
            isMuted: K,
            isLoadingTrack: O,
            playlist: A,
            currentPlaylistIndex: U,
            togglePlayPause: k,
            seek: F,
            setVolume: il,
            playNextTrack: yl,
            playPreviousTrack: gl
        } = nf(), [al, bl] = Z.useState(!1), Ol = Z.useRef(null), $ = Ml => {
            F(parseFloat(Ml.target.value))
        }, jl = Ml => {
            il(parseFloat(Ml.target.value))
        };
        Z.useEffect(() => {
            const Ml = Et => {
                Ol.current && !Ol.current.contains(Et.target) && bl(!1)
            };
            return al && document.addEventListener("mousedown", Ml), () => {
                document.removeEventListener("mousedown", Ml)
            }
        }, [al]);
        const L = U > 0,
            zl = U !== -1 && U < A.length - 1;
        if (!q || !N) return v.jsxs("div", {
            className: `${hd} fixed bottom-0 left-0 right-0 bg-[var(--bg-surface-glass-濃)] backdrop-blur-lg shadow-[0_-4px_15px_var(--shadow-color)] z-50 flex items-center justify-between px-4 text-[var(--text-muted)] glass-border`,
            children: [v.jsx("span", {
                children: "No track selected."
            }), v.jsx("button", {
                onClick: y,
                title: "View Queue",
                className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5",
                children: v.jsx(af, {
                    className: "w-5 h-5"
                })
            })]
        });
        const I = H > 0 ? j / H * 100 : 0,
            Dl = `linear-gradient(to right, var(--range-thumb-bg) ${I}%, var(--range-track-bg) ${I}%)`;
        return v.jsxs("div", {
            className: `${hd} fixed bottom-0 left-0 right-0 bg-[var(--bg-surface-glass-濃)] backdrop-blur-lg shadow-[0_-4px_15px_var(--shadow-color)] z-50 px-4 flex items-center justify-between glass-border`,
            "aria-label": "Audio Player Controls",
            children: [v.jsxs("div", {
                className: "flex items-center space-x-3 w-1/3 min-w-0",
                children: [v.jsx("img", {
                    src: N.coverArtUrl,
                    alt: `${N.title} cover`,
                    className: "w-12 h-12 rounded-md object-cover shadow-md"
                }), v.jsxs("div", {
                    className: "min-w-0",
                    children: [v.jsx("p", {
                        className: "text-sm font-medium truncate text-[var(--text-default)]",
                        title: q.title,
                        children: q.title
                    }), v.jsx("p", {
                        className: "text-xs text-[var(--text-muted)] truncate",
                        title: N.artist,
                        children: N.artist
                    })]
                })]
            }), v.jsxs("div", {
                className: "flex flex-col items-center justify-center flex-grow w-1/3 mx-4",
                children: [v.jsxs("div", {
                    className: "flex items-center space-x-4 mb-1.5",
                    children: [v.jsx("button", {
                        onClick: gl,
                        title: "Previous Track",
                        className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed p-1",
                        disabled: O || !L,
                        children: v.jsx(r1, {
                            className: "w-5 h-5"
                        })
                    }), v.jsx("button", {
                        onClick: k,
                        title: d ? "Pause" : "Play",
                        className: "p-2.5 bg-[var(--bg-accent)] hover:bg-[var(--color-primary-hover)] rounded-full text-[var(--text-on-accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg",
                        disabled: O && !d,
                        children: O && !d ? v.jsx("div", {
                            className: "w-6 h-6 animate-spin rounded-full border-2 border-[var(--text-on-accent)] border-t-transparent"
                        }) : d ? v.jsx(yd, {
                            className: "w-6 h-6"
                        }) : v.jsx(cf, {
                            className: "w-6 h-6"
                        })
                    }), v.jsx("button", {
                        onClick: yl,
                        title: "Next Track",
                        className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed p-1",
                        disabled: O || !zl,
                        children: v.jsx(s1, {
                            className: "w-5 h-5"
                        })
                    })]
                }), v.jsxs("div", {
                    className: "flex items-center w-full max-w-xs space-x-2",
                    children: [v.jsx("span", {
                        className: "text-xs text-[var(--text-muted)] w-10 text-right tabular-nums",
                        children: dd(j)
                    }), v.jsx("input", {
                        type: "range",
                        min: "0",
                        max: H || 0,
                        value: j || 0,
                        onChange: $,
                        className: "w-full h-2 appearance-none cursor-pointer focus:outline-none",
                        title: "Seek",
                        disabled: O || H === 0,
                        style: {
                            background: Dl
                        }
                    }), v.jsx("span", {
                        className: "text-xs text-[var(--text-muted)] w-10 text-left tabular-nums",
                        children: dd(H)
                    })]
                })]
            }), v.jsxs("div", {
                ref: Ol,
                className: "flex items-center justify-end space-x-2 w-1/3 relative",
                children: [v.jsx("div", {
                    className: `absolute bottom-full right-0 mb-3 p-3 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-lg shadow-[0_4px_15px_var(--shadow-color)] transition-all duration-200 ease-out origin-bottom-right glass-border ${al?"opacity-100 scale-100":"opacity-0 scale-90 pointer-events-none"}`,
                    children: v.jsx("input", {
                        type: "range",
                        min: "0",
                        max: "1",
                        step: "0.01",
                        value: K ? 0 : B,
                        onChange: jl,
                        className: "w-24 h-2 appearance-none cursor-pointer focus:outline-none",
                        title: "Volume",
                        style: {
                            background: `linear-gradient(to right, var(--range-thumb-bg) ${K?0:B*100}%, var(--range-track-bg) ${K?0:B*100}%)`
                        }
                    })
                }), v.jsx("button", {
                    onClick: () => bl(!al),
                    onMouseEnter: () => bl(!0),
                    className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5",
                    "aria-label": "Toggle Volume Slider",
                    title: "Volume",
                    children: K || B === 0 ? v.jsx(o1, {
                        className: "w-5 h-5"
                    }) : v.jsx(gd, {
                        className: "w-5 h-5"
                    })
                }), v.jsx("button", {
                    onClick: y,
                    title: "View Queue",
                    className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5",
                    "aria-label": "View Playing Queue",
                    children: v.jsx(af, {
                        className: "w-5 h-5"
                    })
                })]
            })]
        })
    },
    bd = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        })
    }),
    h1 = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.56 0c1.153-.117 2.306-.217 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        })
    }),
    v1 = ({
        item: y,
        index: q,
        isCurrent: N,
        isPlaying: d,
        isLoading: j,
        onPlay: H,
        onRemove: B,
        onTogglePlayPause: K
    }) => {
        const {
            track: O,
            album: A
        } = y, U = () => {
            N ? K() : H(q)
        };
        return v.jsxs("li", {
            className: `flex items-center justify-between p-3 rounded-lg transition-colors duration-150 group ${N?"bg-[var(--bg-element)]":"hover:bg-[var(--bg-subtle)]"}`,
            "aria-current": N ? "true" : "false",
            children: [v.jsxs("div", {
                className: "flex items-center space-x-3 min-w-0 flex-grow",
                children: [v.jsx("span", {
                    className: `text-sm w-5 text-center ${N&&d?"text-[var(--color-primary)]":"text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"}`,
                    children: N && d ? v.jsx(gd, {
                        className: "w-4 h-4 inline-block"
                    }) : `${q+1}.`
                }), v.jsx("img", {
                    src: A.coverArtUrl,
                    alt: A.title,
                    className: "w-10 h-10 rounded object-cover flex-shrink-0"
                }), v.jsxs("div", {
                    className: "min-w-0",
                    children: [v.jsx("p", {
                        className: `text-sm font-medium truncate ${N?"text-[var(--text-default)]":"text-[var(--text-secondary)] group-hover:text-[var(--text-default)]"}`,
                        title: O.title,
                        children: O.title
                    }), v.jsx("p", {
                        className: "text-xs text-[var(--text-muted)] truncate group-hover:text-[var(--text-secondary)]",
                        title: A.artist,
                        children: A.artist
                    })]
                })]
            }), v.jsxs("div", {
                className: "flex items-center space-x-2 flex-shrink-0 ml-3",
                children: [v.jsx("button", {
                    onClick: U,
                    className: `p-1.5 rounded-full transition-colors ${N?"text-[var(--color-primary)]":"text-[var(--text-muted)] hover:text-[var(--color-primary)]"} hover:bg-[var(--bg-element)] disabled:opacity-50`,
                    title: N && d ? "Pause" : "Play",
                    "aria-label": N && d ? `Pause ${O.title}` : `Play ${O.title}`,
                    disabled: j && N,
                    children: j && N ? v.jsx("div", {
                        className: "w-5 h-5 animate-spin rounded-full border-2 border-[var(--text-muted)] border-t-transparent"
                    }) : N && d ? v.jsx(yd, {
                        className: "w-5 h-5"
                    }) : v.jsx(cf, {
                        className: "w-5 h-5"
                    })
                }), v.jsx("button", {
                    onClick: () => B(q),
                    className: "p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-element)] transition-colors",
                    title: "Remove from queue",
                    "aria-label": `Remove ${O.title} from queue`,
                    children: v.jsx(h1, {
                        className: "w-5 h-5"
                    })
                })]
            })]
        })
    },
    m1 = ({
        isOpen: y,
        onClose: q
    }) => {
        const {
            playlist: N,
            currentPlaylistIndex: d,
            playTrackAtIndex: j,
            removeFromQueue: H,
            isPlaying: B,
            isLoadingTrack: K,
            togglePlayPause: O
        } = nf(), [A, U] = Eu.useState(!1);
        if (Z.useEffect(() => {
                if (y) {
                    document.body.style.overflow = "hidden";
                    const gl = setTimeout(() => U(!0), 50);
                    return () => {
                        clearTimeout(gl), document.body.style.overflow = ""
                    }
                } else U(!1), document.body.style.overflow = ""
            }, [y]), Z.useEffect(() => {
                const gl = al => {
                    al.key === "Escape" && q()
                };
                return y && window.addEventListener("keydown", gl), () => {
                    window.removeEventListener("keydown", gl)
                }
            }, [y, q]), !y) return null;
        const k = "fixed z-[60] bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl shadow-[0_10px_35px_var(--shadow-color-strong)] glass-border rounded-2xl w-96 max-h-[50vh] flex flex-col transform-origin-bottom-right",
            F = "transition-all duration-300 ease-out",
            il = A ? "opacity-100 scale-100 translate-x-0 translate-y-0" : "opacity-0 scale-95 translate-x-4 translate-y-4",
            yl = {
                bottom: `calc(${ff}px + 1rem)`,
                right: "1rem"
            };
        return v.jsxs("div", {
            className: `${k} ${F} ${il}`,
            style: yl,
            onClick: gl => gl.stopPropagation(),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "playlist-queue-modal-title",
            children: [v.jsx("header", {
                className: "p-4 md:p-5 border-b border-[var(--border-subtle)] flex-shrink-0",
                children: v.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [v.jsx("h2", {
                        id: "playlist-queue-modal-title",
                        className: "text-xl font-semibold text-[var(--text-default)]",
                        children: "Playing Queue"
                    }), v.jsx("button", {
                        onClick: q,
                        className: "text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5 bg-[var(--bg-surface-glass)] hover:bg-[var(--bg-element)] rounded-full",
                        "aria-label": "Close queue",
                        children: v.jsx(bd, {
                            className: "w-5 h-5"
                        })
                    })]
                })
            }), v.jsx("div", {
                className: "p-2 md:p-4 flex-grow overflow-y-auto",
                style: {
                    scrollbarGutter: "stable"
                },
                children: N.length > 0 ? v.jsx("ul", {
                    className: "space-y-1.5",
                    children: N.map((gl, al) => v.jsx(v1, {
                        item: gl,
                        index: al,
                        isCurrent: al === d,
                        isPlaying: B,
                        isLoading: K,
                        onPlay: j,
                        onRemove: H,
                        onTogglePlayPause: O
                    }, `${gl.track.id}-${al}`))
                }) : v.jsxs("div", {
                    className: "text-center py-10 text-[var(--text-muted)]",
                    children: [v.jsx(af, {
                        className: "w-12 h-12 mx-auto mb-3 text-[var(--text-subtle)]"
                    }), v.jsx("p", {
                        className: "text-lg font-medium text-[var(--text-secondary)]",
                        children: "The queue is empty."
                    }), v.jsx("p", {
                        className: "text-sm",
                        children: "Add some music to start listening!"
                    })]
                })
            })]
        })
    },
    y1 = Z.createContext(void 0),
    g1 = ({
        children: y
    }) => {
        const [q, N] = Z.useState(() => {
            if (typeof window < "u") {
                const K = localStorage.getItem("theme");
                if (K && ["light", "dark", "system"].includes(K)) return K
            }
            return "system"
        }), [d, j] = Z.useState("light"), H = Z.useCallback(K => {
            let O;
            K === "system" ? O = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : O = K, j(O), O === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
        }, []);
        Z.useEffect(() => {
            H(q)
        }, [q, H]), Z.useEffect(() => {
            if (typeof window < "u") {
                const K = window.matchMedia("(prefers-color-scheme: dark)"),
                    O = () => {
                        q === "system" && H("system")
                    };
                return K.addEventListener("change", O), () => K.removeEventListener("change", O)
            }
        }, [q, H]);
        const B = K => {
            typeof window < "u" && localStorage.setItem("theme", K), N(K)
        };
        return Z.useEffect(() => {
            H(q)
        }, []), v.jsx(y1.Provider, {
            value: {
                theme: q,
                setTheme: B,
                effectiveTheme: d
            },
            children: y
        })
    },
    b1 = ({
        className: y
    }) => v.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: y || "w-6 h-6",
        children: v.jsx("path", {
            fillRule: "evenodd",
            d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75z",
            clipRule: "evenodd"
        })
    }),
    S1 = ({
        album: y
    }) => {
        const {
            playAlbumNow: q,
            addToQueue: N
        } = nf(), d = () => {
            y.tracks && y.tracks.length > 0 && q(y, 0)
        }, j = () => {
            if (y.tracks && y.tracks.length > 0) {
                const H = y.tracks.map(B => ({
                    track: B,
                    album: y
                }));
                N(H)
            }
        }},
    x1 = ({
        lyrics: y
    }) => {
        const N = Math.ceil(y.length / 3),
            d = Array.from({
                length: 3
            }, (j, H) => {
                const B = H * N,
                    K = B + N;
                return y.slice(B, K)
            });
        return v.jsx("div", {
            className: "font-mono text-sm mt-6 bg-[var(--bg-element)] p-4 rounded-lg",
            children: v.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8",
                children: d.map((j, H) => v.jsx("div", {
                    className: "break-inside-avoid",
                    children: j.map((B, K) => v.jsxs("div", {
                        className: "mb-3",
                        children: [B.chords && v.jsx("div", {
                            className: "text-[var(--color-primary)] font-bold opacity-90 whitespace-pre-wrap leading-tight",
                            children: B.chords
                        }), v.jsx("div", {
                            className: "text-[var(--text-secondary)] whitespace-pre-wrap leading-snug",
                            children: B.lyric || " "
                        })]
                    }, K))
                }, H))
            })
        })
    },
    p1 = ({
        album: y,
        onClose: q
    }) => {
        const N = Eu.useRef(null),
            [d, j] = Eu.useState(0);
        Eu.useLayoutEffect(() => {
            y && N.current ? j(N.current.scrollHeight) : j(0)
        }, [y]);
        const H = y ? "1.5rem" : "0",
            B = y ? "1.5rem" : "0";
        return v.jsx("div", {
            className: "relative transition-[max-height,padding] duration-500 ease-in-out overflow-hidden",
            style: {
                maxHeight: `${d}px`,
                paddingTop: H,
                paddingBottom: B
            },
            children: v.jsx("div", {
                ref: N,
                children: y && v.jsx("div", {
                    className: "container mx-auto px-6",
                    children: v.jsxs("div", {
                        className: "relative bg-[var(--bg-surface-glass-濃)] backdrop-blur-xl p-6 rounded-2xl shadow-[0_8px_30px_var(--shadow-color)] glass-border",
                        children: [v.jsx("button", {
                            onClick: q,
                            className: "absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-default)] transition-colors p-1.5 bg-[var(--bg-surface-glass)] hover:bg-[var(--bg-element)] rounded-full z-10",
                            "aria-label": "Close lyrics viewer",
                            children: v.jsx(bd, {
                                className: "w-5 h-5"
                            })
                        }), v.jsxs("div", {
                            className: "pr-10",
                            children: [v.jsx("h2", {
                                className: "text-3xl font-bold text-[var(--text-default)]",
                                id: `lyrics-title-${y.id}`,
                                children: y.title
                            }), v.jsxs("p", {
                                className: "text-lg text-[var(--text-secondary)] mt-1",
                                children: [y.artist, " • ", y.releaseYear]
                            }), v.jsx("p", {
                                className: "mt-4 leading-relaxed text-base text-[var(--text-secondary)] max-w-4xl",
                                children: y.description
                            })]
                        }), v.jsx(S1, {
                            album: y
                        }), y.lyrics && y.lyrics.length > 0 ? v.jsx(x1, {
                            lyrics: y.lyrics
                        }) : v.jsx("div", {
                            className: "mt-6 text-center text-[var(--text-muted)] p-6 bg-[var(--bg-element)] rounded-lg",
                            children: v.jsx("p", {
                                children: "No lyrics available for this song."
                            })
                        })]
                    })
                })
            })
        })
    },
    E1 = () => {
        const [y, q] = Z.useState([]), [N, d] = Z.useState(null), [j, H] = Z.useState(!0), [B, K] = Z.useState(!1);
        Z.useEffect(() => {
            H(!0), setTimeout(() => {
                q(Ih), H(!1)
            }, 500)
        }, []), Z.useEffect(() => {
            N && window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, [N]);
        const O = k => {
                d(F => (F == null ? void 0 : F.id) === k.id ? null : k)
            },
            A = () => {
                d(null)
            },
            U = {
                paddingBottom: `${ff+32}px`
            };
        return v.jsxs("div", {
            className: "flex flex-col min-h-screen",
            children: [v.jsx(l1, {}), v.jsx(p1, {
                album: N,
                onClose: A
            }), v.jsx(t1, {}), v.jsx("main", {
                className: "flex-grow container mx-auto px-6",
                style: U,
                children: j ? v.jsxs("div", {
                    className: "flex flex-col justify-center items-center h-64 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl p-8 glass-border shadow-[0_8px_30px_var(--shadow-color)]",
                    children: [v.jsx("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[var(--color-primary)]"
                    }), v.jsx("p", {
                        className: "ml-4 text-lg text-[var(--text-default)] mt-4",
                        children: "Loading Songs..."
                    })]
                }) : y.length > 0 ? v.jsx(i1, {
                    albums: y,
                    selectedAlbum: N,
                    onSelectAlbum: O
                }) : v.jsx("div", {
                    className: "text-center py-10 bg-[var(--bg-surface-glass)] backdrop-blur-md rounded-2xl p-8 glass-border shadow-[0_8px_30px_var(--shadow-color)] text-[var(--text-muted)]",
                    children: v.jsx("h2", {
                        className: "text-2xl font-semibold mb-2 text-[var(--text-default)]",
                        children: "No Songs Available"
                    })
                })
            }), v.jsx(n1, {}), v.jsx(d1, {
                onOpenPlaylistQueue: () => K(!0)
            }), v.jsx(m1, {
                isOpen: B,
                onClose: () => K(!1)
            })]
        })
    },
    A1 = () => v.jsx(g1, {
        children: v.jsx(f1, {
            children: v.jsx(E1, {})
        })
    }),
    Sd = document.getElementById("root");
if (!Sd) throw new Error("Could not find root element to mount to");
const T1 = Ph.createRoot(Sd);
T1.render(v.jsx(Eu.StrictMode, {
    children: v.jsx(A1, {})
}));