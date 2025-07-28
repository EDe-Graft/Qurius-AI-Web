function jc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Js = { exports: {} }, za = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jp;
function Z0() {
  if (Jp) return za;
  Jp = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function r(u, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var p in s)
        p !== "key" && (f[p] = s[p]);
    } else f = s;
    return s = f.ref, {
      $$typeof: n,
      type: u,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return za.Fragment = i, za.jsx = r, za.jsxs = r, za;
}
var Ip;
function K0() {
  return Ip || (Ip = 1, Js.exports = Z0()), Js.exports;
}
var J = K0(), Is = { exports: {} }, Ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp;
function F0() {
  if (Pp) return Ee;
  Pp = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.iterator;
  function w(b) {
    return b === null || typeof b != "object" ? null : (b = v && b[v] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, C = Object.assign, O = {};
  function B(b, q, ee) {
    this.props = b, this.context = q, this.refs = O, this.updater = ee || S;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(b, q) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, q, "setState");
  }, B.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function U() {
  }
  U.prototype = B.prototype;
  function I(b, q, ee) {
    this.props = b, this.context = q, this.refs = O, this.updater = ee || S;
  }
  var Q = I.prototype = new U();
  Q.constructor = I, C(Q, B.prototype), Q.isPureReactComponent = !0;
  var ne = Array.isArray, $ = { H: null, A: null, T: null, S: null, V: null }, L = Object.prototype.hasOwnProperty;
  function re(b, q, ee, E, le, xe) {
    return ee = xe.ref, {
      $$typeof: n,
      type: b,
      key: q,
      ref: ee !== void 0 ? ee : null,
      props: xe
    };
  }
  function P(b, q) {
    return re(
      b.type,
      q,
      void 0,
      void 0,
      void 0,
      b.props
    );
  }
  function de(b) {
    return typeof b == "object" && b !== null && b.$$typeof === n;
  }
  function Te(b) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(ee) {
      return q[ee];
    });
  }
  var ie = /\/+/g;
  function G(b, q) {
    return typeof b == "object" && b !== null && b.key != null ? Te("" + b.key) : q.toString(36);
  }
  function ae() {
  }
  function W(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(ae, ae) : (b.status = "pending", b.then(
          function(q) {
            b.status === "pending" && (b.status = "fulfilled", b.value = q);
          },
          function(q) {
            b.status === "pending" && (b.status = "rejected", b.reason = q);
          }
        )), b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function te(b, q, ee, E, le) {
    var xe = typeof b;
    (xe === "undefined" || xe === "boolean") && (b = null);
    var ue = !1;
    if (b === null) ue = !0;
    else
      switch (xe) {
        case "bigint":
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case n:
            case i:
              ue = !0;
              break;
            case m:
              return ue = b._init, te(
                ue(b._payload),
                q,
                ee,
                E,
                le
              );
          }
      }
    if (ue)
      return le = le(b), ue = E === "" ? "." + G(b, 0) : E, ne(le) ? (ee = "", ue != null && (ee = ue.replace(ie, "$&/") + "/"), te(le, q, ee, "", function(et) {
        return et;
      })) : le != null && (de(le) && (le = P(
        le,
        ee + (le.key == null || b && b.key === le.key ? "" : ("" + le.key).replace(
          ie,
          "$&/"
        ) + "/") + ue
      )), q.push(le)), 1;
    ue = 0;
    var _e = E === "" ? "." : E + ":";
    if (ne(b))
      for (var Ne = 0; Ne < b.length; Ne++)
        E = b[Ne], xe = _e + G(E, Ne), ue += te(
          E,
          q,
          ee,
          xe,
          le
        );
    else if (Ne = w(b), typeof Ne == "function")
      for (b = Ne.call(b), Ne = 0; !(E = b.next()).done; )
        E = E.value, xe = _e + G(E, Ne++), ue += te(
          E,
          q,
          ee,
          xe,
          le
        );
    else if (xe === "object") {
      if (typeof b.then == "function")
        return te(
          W(b),
          q,
          ee,
          E,
          le
        );
      throw q = String(b), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ue;
  }
  function N(b, q, ee) {
    if (b == null) return b;
    var E = [], le = 0;
    return te(b, E, "", "", function(xe) {
      return q.call(ee, xe, le++);
    }), E;
  }
  function Z(b) {
    if (b._status === -1) {
      var q = b._result;
      q = q(), q.then(
        function(ee) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = ee);
        },
        function(ee) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = ee);
        }
      ), b._status === -1 && (b._status = 0, b._result = q);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var X = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  };
  function Ae() {
  }
  return Ee.Children = {
    map: N,
    forEach: function(b, q, ee) {
      N(
        b,
        function() {
          q.apply(this, arguments);
        },
        ee
      );
    },
    count: function(b) {
      var q = 0;
      return N(b, function() {
        q++;
      }), q;
    },
    toArray: function(b) {
      return N(b, function(q) {
        return q;
      }) || [];
    },
    only: function(b) {
      if (!de(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  }, Ee.Component = B, Ee.Fragment = r, Ee.Profiler = s, Ee.PureComponent = I, Ee.StrictMode = u, Ee.Suspense = y, Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, Ee.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return $.H.useMemoCache(b);
    }
  }, Ee.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, Ee.cloneElement = function(b, q, ee) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var E = C({}, b.props), le = b.key, xe = void 0;
    if (q != null)
      for (ue in q.ref !== void 0 && (xe = void 0), q.key !== void 0 && (le = "" + q.key), q)
        !L.call(q, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && q.ref === void 0 || (E[ue] = q[ue]);
    var ue = arguments.length - 2;
    if (ue === 1) E.children = ee;
    else if (1 < ue) {
      for (var _e = Array(ue), Ne = 0; Ne < ue; Ne++)
        _e[Ne] = arguments[Ne + 2];
      E.children = _e;
    }
    return re(b.type, le, void 0, void 0, xe, E);
  }, Ee.createContext = function(b) {
    return b = {
      $$typeof: d,
      _currentValue: b,
      _currentValue2: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, b.Provider = b, b.Consumer = {
      $$typeof: f,
      _context: b
    }, b;
  }, Ee.createElement = function(b, q, ee) {
    var E, le = {}, xe = null;
    if (q != null)
      for (E in q.key !== void 0 && (xe = "" + q.key), q)
        L.call(q, E) && E !== "key" && E !== "__self" && E !== "__source" && (le[E] = q[E]);
    var ue = arguments.length - 2;
    if (ue === 1) le.children = ee;
    else if (1 < ue) {
      for (var _e = Array(ue), Ne = 0; Ne < ue; Ne++)
        _e[Ne] = arguments[Ne + 2];
      le.children = _e;
    }
    if (b && b.defaultProps)
      for (E in ue = b.defaultProps, ue)
        le[E] === void 0 && (le[E] = ue[E]);
    return re(b, xe, void 0, void 0, null, le);
  }, Ee.createRef = function() {
    return { current: null };
  }, Ee.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, Ee.isValidElement = de, Ee.lazy = function(b) {
    return {
      $$typeof: m,
      _payload: { _status: -1, _result: b },
      _init: Z
    };
  }, Ee.memo = function(b, q) {
    return {
      $$typeof: h,
      type: b,
      compare: q === void 0 ? null : q
    };
  }, Ee.startTransition = function(b) {
    var q = $.T, ee = {};
    $.T = ee;
    try {
      var E = b(), le = $.S;
      le !== null && le(ee, E), typeof E == "object" && E !== null && typeof E.then == "function" && E.then(Ae, X);
    } catch (xe) {
      X(xe);
    } finally {
      $.T = q;
    }
  }, Ee.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, Ee.use = function(b) {
    return $.H.use(b);
  }, Ee.useActionState = function(b, q, ee) {
    return $.H.useActionState(b, q, ee);
  }, Ee.useCallback = function(b, q) {
    return $.H.useCallback(b, q);
  }, Ee.useContext = function(b) {
    return $.H.useContext(b);
  }, Ee.useDebugValue = function() {
  }, Ee.useDeferredValue = function(b, q) {
    return $.H.useDeferredValue(b, q);
  }, Ee.useEffect = function(b, q, ee) {
    var E = $.H;
    if (typeof ee == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return E.useEffect(b, q);
  }, Ee.useId = function() {
    return $.H.useId();
  }, Ee.useImperativeHandle = function(b, q, ee) {
    return $.H.useImperativeHandle(b, q, ee);
  }, Ee.useInsertionEffect = function(b, q) {
    return $.H.useInsertionEffect(b, q);
  }, Ee.useLayoutEffect = function(b, q) {
    return $.H.useLayoutEffect(b, q);
  }, Ee.useMemo = function(b, q) {
    return $.H.useMemo(b, q);
  }, Ee.useOptimistic = function(b, q) {
    return $.H.useOptimistic(b, q);
  }, Ee.useReducer = function(b, q, ee) {
    return $.H.useReducer(b, q, ee);
  }, Ee.useRef = function(b) {
    return $.H.useRef(b);
  }, Ee.useState = function(b) {
    return $.H.useState(b);
  }, Ee.useSyncExternalStore = function(b, q, ee) {
    return $.H.useSyncExternalStore(
      b,
      q,
      ee
    );
  }, Ee.useTransition = function() {
    return $.H.useTransition();
  }, Ee.version = "19.1.0", Ee;
}
var $p;
function Hc() {
  return $p || ($p = 1, Is.exports = F0()), Is.exports;
}
var ve = Hc();
const fg = /* @__PURE__ */ jc(ve);
var Ps = { exports: {} }, Na = {}, $s = { exports: {} }, Ws = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wp;
function J0() {
  return Wp || (Wp = 1, function(n) {
    function i(N, Z) {
      var X = N.length;
      N.push(Z);
      e: for (; 0 < X; ) {
        var Ae = X - 1 >>> 1, b = N[Ae];
        if (0 < s(b, Z))
          N[Ae] = Z, N[X] = b, X = Ae;
        else break e;
      }
    }
    function r(N) {
      return N.length === 0 ? null : N[0];
    }
    function u(N) {
      if (N.length === 0) return null;
      var Z = N[0], X = N.pop();
      if (X !== Z) {
        N[0] = X;
        e: for (var Ae = 0, b = N.length, q = b >>> 1; Ae < q; ) {
          var ee = 2 * (Ae + 1) - 1, E = N[ee], le = ee + 1, xe = N[le];
          if (0 > s(E, X))
            le < b && 0 > s(xe, E) ? (N[Ae] = xe, N[le] = X, Ae = le) : (N[Ae] = E, N[ee] = X, Ae = ee);
          else if (le < b && 0 > s(xe, X))
            N[Ae] = xe, N[le] = X, Ae = le;
          else break e;
        }
      }
      return Z;
    }
    function s(N, Z) {
      var X = N.sortIndex - Z.sortIndex;
      return X !== 0 ? X : N.id - Z.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, p = d.now();
      n.unstable_now = function() {
        return d.now() - p;
      };
    }
    var y = [], h = [], m = 1, v = null, w = 3, S = !1, C = !1, O = !1, B = !1, U = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function ne(N) {
      for (var Z = r(h); Z !== null; ) {
        if (Z.callback === null) u(h);
        else if (Z.startTime <= N)
          u(h), Z.sortIndex = Z.expirationTime, i(y, Z);
        else break;
        Z = r(h);
      }
    }
    function $(N) {
      if (O = !1, ne(N), !C)
        if (r(y) !== null)
          C = !0, L || (L = !0, G());
        else {
          var Z = r(h);
          Z !== null && te($, Z.startTime - N);
        }
    }
    var L = !1, re = -1, P = 5, de = -1;
    function Te() {
      return B ? !0 : !(n.unstable_now() - de < P);
    }
    function ie() {
      if (B = !1, L) {
        var N = n.unstable_now();
        de = N;
        var Z = !0;
        try {
          e: {
            C = !1, O && (O = !1, I(re), re = -1), S = !0;
            var X = w;
            try {
              t: {
                for (ne(N), v = r(y); v !== null && !(v.expirationTime > N && Te()); ) {
                  var Ae = v.callback;
                  if (typeof Ae == "function") {
                    v.callback = null, w = v.priorityLevel;
                    var b = Ae(
                      v.expirationTime <= N
                    );
                    if (N = n.unstable_now(), typeof b == "function") {
                      v.callback = b, ne(N), Z = !0;
                      break t;
                    }
                    v === r(y) && u(y), ne(N);
                  } else u(y);
                  v = r(y);
                }
                if (v !== null) Z = !0;
                else {
                  var q = r(h);
                  q !== null && te(
                    $,
                    q.startTime - N
                  ), Z = !1;
                }
              }
              break e;
            } finally {
              v = null, w = X, S = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? G() : L = !1;
        }
      }
    }
    var G;
    if (typeof Q == "function")
      G = function() {
        Q(ie);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), W = ae.port2;
      ae.port1.onmessage = ie, G = function() {
        W.postMessage(null);
      };
    } else
      G = function() {
        U(ie, 0);
      };
    function te(N, Z) {
      re = U(function() {
        N(n.unstable_now());
      }, Z);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, n.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < N ? Math.floor(1e3 / N) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(N) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = w;
      }
      var X = w;
      w = Z;
      try {
        return N();
      } finally {
        w = X;
      }
    }, n.unstable_requestPaint = function() {
      B = !0;
    }, n.unstable_runWithPriority = function(N, Z) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var X = w;
      w = N;
      try {
        return Z();
      } finally {
        w = X;
      }
    }, n.unstable_scheduleCallback = function(N, Z, X) {
      var Ae = n.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? Ae + X : Ae) : X = Ae, N) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return b = X + b, N = {
        id: m++,
        callback: Z,
        priorityLevel: N,
        startTime: X,
        expirationTime: b,
        sortIndex: -1
      }, X > Ae ? (N.sortIndex = X, i(h, N), r(y) === null && N === r(h) && (O ? (I(re), re = -1) : O = !0, te($, X - Ae))) : (N.sortIndex = b, i(y, N), C || S || (C = !0, L || (L = !0, G()))), N;
    }, n.unstable_shouldYield = Te, n.unstable_wrapCallback = function(N) {
      var Z = w;
      return function() {
        var X = w;
        w = Z;
        try {
          return N.apply(this, arguments);
        } finally {
          w = X;
        }
      };
    };
  }(Ws)), Ws;
}
var em;
function I0() {
  return em || (em = 1, $s.exports = J0()), $s.exports;
}
var ec = { exports: {} }, yt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tm;
function P0() {
  if (tm) return yt;
  tm = 1;
  var n = Hc();
  function i(y) {
    var h = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        h += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return "Minified React error #" + y + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var u = {
    d: {
      f: r,
      r: function() {
        throw Error(i(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function f(y, h, m) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : "" + v,
      children: y,
      containerInfo: h,
      implementation: m
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, h) {
    if (y === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, yt.createPortal = function(y, h) {
    var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(i(299));
    return f(y, h, null, m);
  }, yt.flushSync = function(y) {
    var h = d.T, m = u.p;
    try {
      if (d.T = null, u.p = 2, y) return y();
    } finally {
      d.T = h, u.p = m, u.d.f();
    }
  }, yt.preconnect = function(y, h) {
    typeof y == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, u.d.C(y, h));
  }, yt.prefetchDNS = function(y) {
    typeof y == "string" && u.d.D(y);
  }, yt.preinit = function(y, h) {
    if (typeof y == "string" && h && typeof h.as == "string") {
      var m = h.as, v = p(m, h.crossOrigin), w = typeof h.integrity == "string" ? h.integrity : void 0, S = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      m === "style" ? u.d.S(
        y,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: v,
          integrity: w,
          fetchPriority: S
        }
      ) : m === "script" && u.d.X(y, {
        crossOrigin: v,
        integrity: w,
        fetchPriority: S,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, yt.preinitModule = function(y, h) {
    if (typeof y == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var m = p(
            h.as,
            h.crossOrigin
          );
          u.d.M(y, {
            crossOrigin: m,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && u.d.M(y);
  }, yt.preload = function(y, h) {
    if (typeof y == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var m = h.as, v = p(m, h.crossOrigin);
      u.d.L(y, m, {
        crossOrigin: v,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, yt.preloadModule = function(y, h) {
    if (typeof y == "string")
      if (h) {
        var m = p(h.as, h.crossOrigin);
        u.d.m(y, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: m,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else u.d.m(y);
  }, yt.requestFormReset = function(y) {
    u.d.r(y);
  }, yt.unstable_batchedUpdates = function(y, h) {
    return y(h);
  }, yt.useFormState = function(y, h, m) {
    return d.H.useFormState(y, h, m);
  }, yt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, yt.version = "19.1.0", yt;
}
var nm;
function $0() {
  if (nm) return ec.exports;
  nm = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), ec.exports = P0(), ec.exports;
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
var lm;
function W0() {
  if (lm) return Na;
  lm = 1;
  var n = I0(), i = Hc(), r = $0();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (f(e) !== e)
      throw Error(u(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var o = l.return;
      if (o === null) break;
      var c = o.alternate;
      if (c === null) {
        if (a = o.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === l) return p(o), e;
          if (c === a) return p(o), t;
          c = c.sibling;
        }
        throw Error(u(188));
      }
      if (l.return !== a.return) l = o, a = c;
      else {
        for (var g = !1, x = o.child; x; ) {
          if (x === l) {
            g = !0, l = o, a = c;
            break;
          }
          if (x === a) {
            g = !0, a = o, l = c;
            break;
          }
          x = x.sibling;
        }
        if (!g) {
          for (x = c.child; x; ) {
            if (x === l) {
              g = !0, l = c, a = o;
              break;
            }
            if (x === a) {
              g = !0, a = c, l = o;
              break;
            }
            x = x.sibling;
          }
          if (!g) throw Error(u(189));
        }
      }
      if (l.alternate !== a) throw Error(u(190));
    }
    if (l.tag !== 3) throw Error(u(188));
    return l.stateNode.current === l ? e : t;
  }
  function h(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = h(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var m = Object.assign, v = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), I = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), Te = Symbol.for("react.memo_cache_sentinel"), ie = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object" ? null : (e = ie && e[ie] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ae = Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case C:
        return "Fragment";
      case B:
        return "Profiler";
      case O:
        return "StrictMode";
      case $:
        return "Suspense";
      case L:
        return "SuspenseList";
      case de:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case Q:
          return (e.displayName || "Context") + ".Provider";
        case I:
          return (e._context.displayName || "Context") + ".Consumer";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case re:
          return t = e.displayName || null, t !== null ? t : W(e.type) || "Memo";
        case P:
          t = e._payload, e = e._init;
          try {
            return W(e(t));
          } catch {
          }
      }
    return null;
  }
  var te = Array.isArray, N = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ae = [], b = -1;
  function q(e) {
    return { current: e };
  }
  function ee(e) {
    0 > b || (e.current = Ae[b], Ae[b] = null, b--);
  }
  function E(e, t) {
    b++, Ae[b] = e.current, e.current = t;
  }
  var le = q(null), xe = q(null), ue = q(null), _e = q(null);
  function Ne(e, t) {
    switch (E(ue, t), E(xe, e), E(le, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? wp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = wp(t), e = Tp(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ee(le), E(le, e);
  }
  function et() {
    ee(le), ee(xe), ee(ue);
  }
  function xt(e) {
    e.memoizedState !== null && E(_e, e);
    var t = le.current, l = Tp(t, e.type);
    t !== l && (E(xe, e), E(le, l));
  }
  function Mt(e) {
    xe.current === e && (ee(le), ee(xe)), _e.current === e && (ee(_e), ka._currentValue = X);
  }
  var sn = Object.prototype.hasOwnProperty, Ni = n.unstable_scheduleCallback, Mi = n.unstable_cancelCallback, Ia = n.unstable_shouldYield, Pa = n.unstable_requestPaint, Dt = n.unstable_now, Mu = n.unstable_getCurrentPriorityLevel, Di = n.unstable_ImmediatePriority, Ui = n.unstable_UserBlockingPriority, Ul = n.unstable_NormalPriority, Du = n.unstable_LowPriority, $a = n.unstable_IdlePriority, Uu = n.log, Bu = n.unstable_setDisableYieldValue, j = null, K = null;
  function he(e) {
    if (typeof Uu == "function" && Bu(e), K && typeof K.setStrictMode == "function")
      try {
        K.setStrictMode(j, e);
      } catch {
      }
  }
  var ge = Math.clz32 ? Math.clz32 : Sn, je = Math.log, Ut = Math.LN2;
  function Sn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (je(e) / Ut | 0) | 0;
  }
  var Et = 256, cn = 4194304;
  function Bt(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function ut(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var o = 0, c = e.suspendedLanes, g = e.pingedLanes;
    e = e.warmLanes;
    var x = a & 134217727;
    return x !== 0 ? (a = x & ~c, a !== 0 ? o = Bt(a) : (g &= x, g !== 0 ? o = Bt(g) : l || (l = x & ~e, l !== 0 && (o = Bt(l))))) : (x = a & ~c, x !== 0 ? o = Bt(x) : g !== 0 ? o = Bt(g) : l || (l = a & ~e, l !== 0 && (o = Bt(l)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, l = t & -t, c >= l || c === 32 && (l & 4194048) !== 0) ? t : o;
  }
  function Zt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ln(e, t) {
    switch (e) {
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
        return -1;
    }
  }
  function rf() {
    var e = Et;
    return Et <<= 1, (Et & 4194048) === 0 && (Et = 256), e;
  }
  function uf() {
    var e = cn;
    return cn <<= 1, (cn & 62914560) === 0 && (cn = 4194304), e;
  }
  function Lu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Bi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Dy(e, t, l, a, o, c) {
    var g = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var x = e.entanglements, T = e.expirationTimes, R = e.hiddenUpdates;
    for (l = g & ~l; 0 < l; ) {
      var H = 31 - ge(l), Y = 1 << H;
      x[H] = 0, T[H] = -1;
      var z = R[H];
      if (z !== null)
        for (R[H] = null, H = 0; H < z.length; H++) {
          var M = z[H];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~Y;
    }
    a !== 0 && of(e, a, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(g & ~t));
  }
  function of(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - ge(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 4194090;
  }
  function sf(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - ge(l), o = 1 << a;
      o & t | e[a] & t && (e[a] |= t), l &= ~o;
    }
  }
  function ju(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Hu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function cf() {
    var e = Z.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Gp(e.type));
  }
  function Uy(e, t) {
    var l = Z.p;
    try {
      return Z.p = e, t();
    } finally {
      Z.p = l;
    }
  }
  var qn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + qn, wt = "__reactProps$" + qn, Bl = "__reactContainer$" + qn, qu = "__reactEvents$" + qn, By = "__reactListeners$" + qn, Ly = "__reactHandles$" + qn, ff = "__reactResources$" + qn, Li = "__reactMarker$" + qn;
  function Vu(e) {
    delete e[mt], delete e[wt], delete e[qu], delete e[By], delete e[Ly];
  }
  function Ll(e) {
    var t = e[mt];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[Bl] || l[mt]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = _p(e); e !== null; ) {
            if (l = e[mt]) return l;
            e = _p(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function jl(e) {
    if (e = e[mt] || e[Bl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ji(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Hl(e) {
    var t = e[ff];
    return t || (t = e[ff] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ot(e) {
    e[Li] = !0;
  }
  var df = /* @__PURE__ */ new Set(), hf = {};
  function dl(e, t) {
    ql(e, t), ql(e + "Capture", t);
  }
  function ql(e, t) {
    for (hf[e] = t, e = 0; e < t.length; e++)
      df.add(t[e]);
  }
  var jy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), pf = {}, mf = {};
  function Hy(e) {
    return sn.call(mf, e) ? !0 : sn.call(pf, e) ? !1 : jy.test(e) ? mf[e] = !0 : (pf[e] = !0, !1);
  }
  function Wa(e, t, l) {
    if (Hy(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function er(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function En(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  var Yu, gf;
  function Vl(e) {
    if (Yu === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Yu = t && t[1] || "", gf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Yu + e + gf;
  }
  var Gu = !1;
  function Xu(e, t) {
    if (!e || Gu) return "";
    Gu = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var Y = function() {
                throw Error();
              };
              if (Object.defineProperty(Y.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Y, []);
                } catch (M) {
                  var z = M;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (M) {
                  z = M;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                z = M;
              }
              (Y = e()) && typeof Y.catch == "function" && Y.catch(function() {
              });
            }
          } catch (M) {
            if (M && z && typeof M.stack == "string")
              return [M.stack, z.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = a.DetermineComponentFrameRoot(), g = c[0], x = c[1];
      if (g && x) {
        var T = g.split(`
`), R = x.split(`
`);
        for (o = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; o < R.length && !R[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (a === T.length || o === R.length)
          for (a = T.length - 1, o = R.length - 1; 1 <= a && 0 <= o && T[a] !== R[o]; )
            o--;
        for (; 1 <= a && 0 <= o; a--, o--)
          if (T[a] !== R[o]) {
            if (a !== 1 || o !== 1)
              do
                if (a--, o--, 0 > o || T[a] !== R[o]) {
                  var H = `
` + T[a].replace(" at new ", " at ");
                  return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                }
              while (1 <= a && 0 <= o);
            break;
          }
      }
    } finally {
      Gu = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Vl(l) : "";
  }
  function qy(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Vl(e.type);
      case 16:
        return Vl("Lazy");
      case 13:
        return Vl("Suspense");
      case 19:
        return Vl("SuspenseList");
      case 0:
      case 15:
        return Xu(e.type, !1);
      case 11:
        return Xu(e.type.render, !1);
      case 1:
        return Xu(e.type, !0);
      case 31:
        return Vl("Activity");
      default:
        return "";
    }
  }
  function yf(e) {
    try {
      var t = "";
      do
        t += qy(e), e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  function Kt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function bf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Vy(e) {
    var t = bf(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), a = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var o = l.get, c = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(g) {
          a = "" + g, c.call(this, g);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(g) {
          a = "" + g;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function tr(e) {
    e._valueTracker || (e._valueTracker = Vy(e));
  }
  function vf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = bf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function nr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Yy = /[\n"\\]/g;
  function Ft(e) {
    return e.replace(
      Yy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Qu(e, t, l, a, o, c, g, x) {
    e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Kt(t)) : e.value !== "" + Kt(t) && (e.value = "" + Kt(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? Zu(e, g, Kt(t)) : l != null ? Zu(e, g, Kt(l)) : a != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? e.name = "" + Kt(x) : e.removeAttribute("name");
  }
  function xf(e, t, l, a, o, c, g, x) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || l != null) {
      if (!(c !== "submit" && c !== "reset" || t != null))
        return;
      l = l != null ? "" + Kt(l) : "", t = t != null ? "" + Kt(t) : l, x || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? o, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = x ? e.checked : !!a, e.defaultChecked = !!a, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g);
  }
  function Zu(e, t, l) {
    t === "number" && nr(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Yl(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < l.length; o++)
        t["$" + l[o]] = !0;
      for (l = 0; l < e.length; l++)
        o = t.hasOwnProperty("$" + e[l].value), e[l].selected !== o && (e[l].selected = o), o && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Kt(l), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === l) {
          e[o].selected = !0, a && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Sf(e, t, l) {
    if (t != null && (t = "" + Kt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Kt(l) : "";
  }
  function Ef(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(u(92));
        if (te(a)) {
          if (1 < a.length) throw Error(u(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = Kt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a);
  }
  function Gl(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wf(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Gy.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Tf(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var o in t)
        a = t[o], t.hasOwnProperty(o) && l[o] !== a && wf(e, o, a);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && wf(e, c, t[c]);
  }
  function Ku(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
        return !0;
    }
  }
  var Xy = /* @__PURE__ */ new Map([
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
  ]), Qy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function lr(e) {
    return Qy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Fu = null;
  function Ju(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xl = null, Ql = null;
  function Af(e) {
    var t = jl(e);
    if (t && (e = t.stateNode)) {
      var l = e[wt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Qu(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Ft(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var o = a[wt] || null;
                if (!o) throw Error(u(90));
                Qu(
                  a,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              a = l[t], a.form === e.form && vf(a);
          }
          break e;
        case "textarea":
          Sf(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Yl(e, !!l.multiple, t, !1);
      }
    }
  }
  var Iu = !1;
  function kf(e, t, l) {
    if (Iu) return e(t, l);
    Iu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Iu = !1, (Xl !== null || Ql !== null) && (Yr(), Xl && (t = Xl, e = Ql, Ql = Xl = null, Af(t), e)))
        for (t = 0; t < e.length; t++) Af(e[t]);
    }
  }
  function Hi(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[wt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
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
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        u(231, t, typeof l)
      );
    return l;
  }
  var wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pu = !1;
  if (wn)
    try {
      var qi = {};
      Object.defineProperty(qi, "passive", {
        get: function() {
          Pu = !0;
        }
      }), window.addEventListener("test", qi, qi), window.removeEventListener("test", qi, qi);
    } catch {
      Pu = !1;
    }
  var Vn = null, $u = null, ir = null;
  function Cf() {
    if (ir) return ir;
    var e, t = $u, l = t.length, a, o = "value" in Vn ? Vn.value : Vn.textContent, c = o.length;
    for (e = 0; e < l && t[e] === o[e]; e++) ;
    var g = l - e;
    for (a = 1; a <= g && t[l - a] === o[c - a]; a++) ;
    return ir = o.slice(e, 1 < a ? 1 - a : void 0);
  }
  function ar(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function rr() {
    return !0;
  }
  function _f() {
    return !1;
  }
  function Tt(e) {
    function t(l, a, o, c, g) {
      this._reactName = l, this._targetInst = o, this.type = a, this.nativeEvent = c, this.target = g, this.currentTarget = null;
      for (var x in e)
        e.hasOwnProperty(x) && (l = e[x], this[x] = l ? l(c) : c[x]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? rr : _f, this.isPropagationStopped = _f, this;
    }
    return m(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = rr);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = rr);
      },
      persist: function() {
      },
      isPersistent: rr
    }), t;
  }
  var hl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ur = Tt(hl), Vi = m({}, hl, { view: 0, detail: 0 }), Zy = Tt(Vi), Wu, eo, Yi, or = m({}, Vi, {
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
    getModifierState: no,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Yi && (Yi && e.type === "mousemove" ? (Wu = e.screenX - Yi.screenX, eo = e.screenY - Yi.screenY) : eo = Wu = 0, Yi = e), Wu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : eo;
    }
  }), Rf = Tt(or), Ky = m({}, or, { dataTransfer: 0 }), Fy = Tt(Ky), Jy = m({}, Vi, { relatedTarget: 0 }), to = Tt(Jy), Iy = m({}, hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Py = Tt(Iy), $y = m({}, hl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Wy = Tt($y), eb = m({}, hl, { data: 0 }), Of = Tt(eb), tb = {
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
  }, nb = {
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
  }, lb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ib(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = lb[e]) ? !!t[e] : !1;
  }
  function no() {
    return ib;
  }
  var ab = m({}, Vi, {
    key: function(e) {
      if (e.key) {
        var t = tb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ar(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: no,
    charCode: function(e) {
      return e.type === "keypress" ? ar(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ar(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), rb = Tt(ab), ub = m({}, or, {
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
  }), zf = Tt(ub), ob = m({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: no
  }), sb = Tt(ob), cb = m({}, hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), fb = Tt(cb), db = m({}, or, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), hb = Tt(db), pb = m({}, hl, {
    newState: 0,
    oldState: 0
  }), mb = Tt(pb), gb = [9, 13, 27, 32], lo = wn && "CompositionEvent" in window, Gi = null;
  wn && "documentMode" in document && (Gi = document.documentMode);
  var yb = wn && "TextEvent" in window && !Gi, Nf = wn && (!lo || Gi && 8 < Gi && 11 >= Gi), Mf = " ", Df = !1;
  function Uf(e, t) {
    switch (e) {
      case "keyup":
        return gb.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Zl = !1;
  function bb(e, t) {
    switch (e) {
      case "compositionend":
        return Bf(t);
      case "keypress":
        return t.which !== 32 ? null : (Df = !0, Mf);
      case "textInput":
        return e = t.data, e === Mf && Df ? null : e;
      default:
        return null;
    }
  }
  function vb(e, t) {
    if (Zl)
      return e === "compositionend" || !lo && Uf(e, t) ? (e = Cf(), ir = $u = Vn = null, Zl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Nf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xb = {
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
  function Lf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xb[e.type] : t === "textarea";
  }
  function jf(e, t, l, a) {
    Xl ? Ql ? Ql.push(a) : Ql = [a] : Xl = a, t = Fr(t, "onChange"), 0 < t.length && (l = new ur(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var Xi = null, Qi = null;
  function Sb(e) {
    bp(e, 0);
  }
  function sr(e) {
    var t = ji(e);
    if (vf(t)) return e;
  }
  function Hf(e, t) {
    if (e === "change") return t;
  }
  var qf = !1;
  if (wn) {
    var io;
    if (wn) {
      var ao = "oninput" in document;
      if (!ao) {
        var Vf = document.createElement("div");
        Vf.setAttribute("oninput", "return;"), ao = typeof Vf.oninput == "function";
      }
      io = ao;
    } else io = !1;
    qf = io && (!document.documentMode || 9 < document.documentMode);
  }
  function Yf() {
    Xi && (Xi.detachEvent("onpropertychange", Gf), Qi = Xi = null);
  }
  function Gf(e) {
    if (e.propertyName === "value" && sr(Qi)) {
      var t = [];
      jf(
        t,
        Qi,
        e,
        Ju(e)
      ), kf(Sb, t);
    }
  }
  function Eb(e, t, l) {
    e === "focusin" ? (Yf(), Xi = t, Qi = l, Xi.attachEvent("onpropertychange", Gf)) : e === "focusout" && Yf();
  }
  function wb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return sr(Qi);
  }
  function Tb(e, t) {
    if (e === "click") return sr(t);
  }
  function Ab(e, t) {
    if (e === "input" || e === "change")
      return sr(t);
  }
  function kb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Lt = typeof Object.is == "function" ? Object.is : kb;
  function Zi(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var o = l[a];
      if (!sn.call(t, o) || !Lt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function Xf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Qf(e, t) {
    var l = Xf(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t)
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Xf(l);
    }
  }
  function Zf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Kf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = nr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = nr(e.document);
    }
    return t;
  }
  function ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Cb = wn && "documentMode" in document && 11 >= document.documentMode, Kl = null, uo = null, Ki = null, oo = !1;
  function Ff(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    oo || Kl == null || Kl !== nr(a) || (a = Kl, "selectionStart" in a && ro(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ki && Zi(Ki, a) || (Ki = a, a = Fr(uo, "onSelect"), 0 < a.length && (t = new ur(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = Kl)));
  }
  function pl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Fl = {
    animationend: pl("Animation", "AnimationEnd"),
    animationiteration: pl("Animation", "AnimationIteration"),
    animationstart: pl("Animation", "AnimationStart"),
    transitionrun: pl("Transition", "TransitionRun"),
    transitionstart: pl("Transition", "TransitionStart"),
    transitioncancel: pl("Transition", "TransitionCancel"),
    transitionend: pl("Transition", "TransitionEnd")
  }, so = {}, Jf = {};
  wn && (Jf = document.createElement("div").style, "AnimationEvent" in window || (delete Fl.animationend.animation, delete Fl.animationiteration.animation, delete Fl.animationstart.animation), "TransitionEvent" in window || delete Fl.transitionend.transition);
  function ml(e) {
    if (so[e]) return so[e];
    if (!Fl[e]) return e;
    var t = Fl[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Jf)
        return so[e] = t[l];
    return e;
  }
  var If = ml("animationend"), Pf = ml("animationiteration"), $f = ml("animationstart"), _b = ml("transitionrun"), Rb = ml("transitionstart"), Ob = ml("transitioncancel"), Wf = ml("transitionend"), ed = /* @__PURE__ */ new Map(), co = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  co.push("scrollEnd");
  function an(e, t) {
    ed.set(e, t), dl(t, [e]);
  }
  var td = /* @__PURE__ */ new WeakMap();
  function Jt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = td.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: yf(t)
      }, td.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: yf(t)
    };
  }
  var It = [], Jl = 0, fo = 0;
  function cr() {
    for (var e = Jl, t = fo = Jl = 0; t < e; ) {
      var l = It[t];
      It[t++] = null;
      var a = It[t];
      It[t++] = null;
      var o = It[t];
      It[t++] = null;
      var c = It[t];
      if (It[t++] = null, a !== null && o !== null) {
        var g = a.pending;
        g === null ? o.next = o : (o.next = g.next, g.next = o), a.pending = o;
      }
      c !== 0 && nd(l, o, c);
    }
  }
  function fr(e, t, l, a) {
    It[Jl++] = e, It[Jl++] = t, It[Jl++] = l, It[Jl++] = a, fo |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function ho(e, t, l, a) {
    return fr(e, t, l, a), dr(e);
  }
  function Il(e, t) {
    return fr(e, null, null, t), dr(e);
  }
  function nd(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var o = !1, c = e.return; c !== null; )
      c.childLanes |= l, a = c.alternate, a !== null && (a.childLanes |= l), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - ge(l), e = c.hiddenUpdates, a = e[o], a === null ? e[o] = [t] : a.push(t), t.lane = l | 536870912), c) : null;
  }
  function dr(e) {
    if (50 < ba)
      throw ba = 0, vs = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Pl = {};
  function zb(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jt(e, t, l, a) {
    return new zb(e, t, l, a);
  }
  function po(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Tn(e, t) {
    var l = e.alternate;
    return l === null ? (l = jt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function ld(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function hr(e, t, l, a, o, c) {
    var g = 0;
    if (a = e, typeof e == "function") po(e) && (g = 1);
    else if (typeof e == "string")
      g = M0(
        e,
        l,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case de:
          return e = jt(31, l, t, o), e.elementType = de, e.lanes = c, e;
        case C:
          return gl(l.children, o, c, t);
        case O:
          g = 8, o |= 24;
          break;
        case B:
          return e = jt(12, l, t, o | 2), e.elementType = B, e.lanes = c, e;
        case $:
          return e = jt(13, l, t, o), e.elementType = $, e.lanes = c, e;
        case L:
          return e = jt(19, l, t, o), e.elementType = L, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case U:
              case Q:
                g = 10;
                break e;
              case I:
                g = 9;
                break e;
              case ne:
                g = 11;
                break e;
              case re:
                g = 14;
                break e;
              case P:
                g = 16, a = null;
                break e;
            }
          g = 29, l = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = jt(g, l, t, o), t.elementType = e, t.type = a, t.lanes = c, t;
  }
  function gl(e, t, l, a) {
    return e = jt(7, e, a, t), e.lanes = l, e;
  }
  function mo(e, t, l) {
    return e = jt(6, e, null, t), e.lanes = l, e;
  }
  function go(e, t, l) {
    return t = jt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var $l = [], Wl = 0, pr = null, mr = 0, Pt = [], $t = 0, yl = null, An = 1, kn = "";
  function bl(e, t) {
    $l[Wl++] = mr, $l[Wl++] = pr, pr = e, mr = t;
  }
  function id(e, t, l) {
    Pt[$t++] = An, Pt[$t++] = kn, Pt[$t++] = yl, yl = e;
    var a = An;
    e = kn;
    var o = 32 - ge(a) - 1;
    a &= ~(1 << o), l += 1;
    var c = 32 - ge(t) + o;
    if (30 < c) {
      var g = o - o % 5;
      c = (a & (1 << g) - 1).toString(32), a >>= g, o -= g, An = 1 << 32 - ge(t) + o | l << o | a, kn = c + e;
    } else
      An = 1 << c | l << o | a, kn = e;
  }
  function yo(e) {
    e.return !== null && (bl(e, 1), id(e, 1, 0));
  }
  function bo(e) {
    for (; e === pr; )
      pr = $l[--Wl], $l[Wl] = null, mr = $l[--Wl], $l[Wl] = null;
    for (; e === yl; )
      yl = Pt[--$t], Pt[$t] = null, kn = Pt[--$t], Pt[$t] = null, An = Pt[--$t], Pt[$t] = null;
  }
  var St = null, Ie = null, Ue = !1, vl = null, fn = !1, vo = Error(u(519));
  function xl(e) {
    var t = Error(u(418, ""));
    throw Ii(Jt(t, e)), vo;
  }
  function ad(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[mt] = e, t[wt] = a, l) {
      case "dialog":
        ze("cancel", t), ze("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ze("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < xa.length; l++)
          ze(xa[l], t);
        break;
      case "source":
        ze("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ze("error", t), ze("load", t);
        break;
      case "details":
        ze("toggle", t);
        break;
      case "input":
        ze("invalid", t), xf(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), tr(t);
        break;
      case "select":
        ze("invalid", t);
        break;
      case "textarea":
        ze("invalid", t), Ef(t, a.value, a.defaultValue, a.children), tr(t);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Ep(t.textContent, l) ? (a.popover != null && (ze("beforetoggle", t), ze("toggle", t)), a.onScroll != null && ze("scroll", t), a.onScrollEnd != null && ze("scrollend", t), a.onClick != null && (t.onclick = Jr), t = !0) : t = !1, t || xl(e);
  }
  function rd(e) {
    for (St = e.return; St; )
      switch (St.tag) {
        case 5:
        case 13:
          fn = !1;
          return;
        case 27:
        case 3:
          fn = !0;
          return;
        default:
          St = St.return;
      }
  }
  function Fi(e) {
    if (e !== St) return !1;
    if (!Ue) return rd(e), Ue = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Us(e.type, e.memoizedProps)), l = !l), l && Ie && xl(e), rd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (l = e.data, l === "/$") {
              if (t === 0) {
                Ie = un(e.nextSibling);
                break e;
              }
              t--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || t++;
          e = e.nextSibling;
        }
        Ie = null;
      }
    } else
      t === 27 ? (t = Ie, ll(e.type) ? (e = Hs, Hs = null, Ie = e) : Ie = t) : Ie = St ? un(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ji() {
    Ie = St = null, Ue = !1;
  }
  function ud() {
    var e = vl;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), vl = null), e;
  }
  function Ii(e) {
    vl === null ? vl = [e] : vl.push(e);
  }
  var xo = q(null), Sl = null, Cn = null;
  function Yn(e, t, l) {
    E(xo, t._currentValue), t._currentValue = l;
  }
  function _n(e) {
    e._currentValue = xo.current, ee(xo);
  }
  function So(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Eo(e, t, l, a) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var g = o.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var x = c;
          c = o;
          for (var T = 0; T < t.length; T++)
            if (x.context === t[T]) {
              c.lanes |= l, x = c.alternate, x !== null && (x.lanes |= l), So(
                c.return,
                l,
                e
              ), a || (g = null);
              break e;
            }
          c = x.next;
        }
      } else if (o.tag === 18) {
        if (g = o.return, g === null) throw Error(u(341));
        g.lanes |= l, c = g.alternate, c !== null && (c.lanes |= l), So(g, l, e), g = null;
      } else g = o.child;
      if (g !== null) g.return = o;
      else
        for (g = o; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (o = g.sibling, o !== null) {
            o.return = g.return, g = o;
            break;
          }
          g = g.return;
        }
      o = g;
    }
  }
  function Pi(e, t, l, a) {
    e = null;
    for (var o = t, c = !1; o !== null; ) {
      if (!c) {
        if ((o.flags & 524288) !== 0) c = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var g = o.alternate;
        if (g === null) throw Error(u(387));
        if (g = g.memoizedProps, g !== null) {
          var x = o.type;
          Lt(o.pendingProps.value, g.value) || (e !== null ? e.push(x) : e = [x]);
        }
      } else if (o === _e.current) {
        if (g = o.alternate, g === null) throw Error(u(387));
        g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(ka) : e = [ka]);
      }
      o = o.return;
    }
    e !== null && Eo(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function gr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Lt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function El(e) {
    Sl = e, Cn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function gt(e) {
    return od(Sl, e);
  }
  function yr(e, t) {
    return Sl === null && El(e), od(e, t);
  }
  function od(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Cn === null) {
      if (e === null) throw Error(u(308));
      Cn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Cn = Cn.next = t;
    return l;
  }
  var Nb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, Mb = n.unstable_scheduleCallback, Db = n.unstable_NormalPriority, it = {
    $$typeof: Q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wo() {
    return {
      controller: new Nb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $i(e) {
    e.refCount--, e.refCount === 0 && Mb(Db, function() {
      e.controller.abort();
    });
  }
  var Wi = null, To = 0, ei = 0, ti = null;
  function Ub(e, t) {
    if (Wi === null) {
      var l = Wi = [];
      To = 0, ei = ks(), ti = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return To++, t.then(sd, sd), t;
  }
  function sd() {
    if (--To === 0 && Wi !== null) {
      ti !== null && (ti.status = "fulfilled");
      var e = Wi;
      Wi = null, ei = 0, ti = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Bb(e, t) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        l.push(o);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var o = 0; o < l.length; o++) (0, l[o])(t);
      },
      function(o) {
        for (a.status = "rejected", a.reason = o, o = 0; o < l.length; o++)
          (0, l[o])(void 0);
      }
    ), a;
  }
  var cd = N.S;
  N.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Ub(e, t), cd !== null && cd(e, t);
  };
  var wl = q(null);
  function Ao() {
    var e = wl.current;
    return e !== null ? e : Qe.pooledCache;
  }
  function br(e, t) {
    t === null ? E(wl, wl.current) : E(wl, t.pool);
  }
  function fd() {
    var e = Ao();
    return e === null ? null : { parent: it._currentValue, pool: e };
  }
  var ea = Error(u(460)), dd = Error(u(474)), vr = Error(u(542)), ko = { then: function() {
  } };
  function hd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function xr() {
  }
  function pd(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(xr, xr), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, gd(e), e;
      default:
        if (typeof t.status == "string") t.then(xr, xr);
        else {
          if (e = Qe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(u(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, gd(e), e;
        }
        throw ta = t, ea;
    }
  }
  var ta = null;
  function md() {
    if (ta === null) throw Error(u(459));
    var e = ta;
    return ta = null, e;
  }
  function gd(e) {
    if (e === ea || e === vr)
      throw Error(u(483));
  }
  var Gn = !1;
  function Co(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _o(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Xn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Qn(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (He & 2) !== 0) {
      var o = a.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), a.pending = t, t = dr(e), nd(e, null, l), t;
    }
    return fr(e, a, t, l), dr(e);
  }
  function na(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, sf(e, l);
    }
  }
  function Ro(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var o = null, c = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var g = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          c === null ? o = c = g : c = c.next = g, l = l.next;
        } while (l !== null);
        c === null ? o = c = t : c = c.next = t;
      } else o = c = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Oo = !1;
  function la() {
    if (Oo) {
      var e = ti;
      if (e !== null) throw e;
    }
  }
  function ia(e, t, l, a) {
    Oo = !1;
    var o = e.updateQueue;
    Gn = !1;
    var c = o.firstBaseUpdate, g = o.lastBaseUpdate, x = o.shared.pending;
    if (x !== null) {
      o.shared.pending = null;
      var T = x, R = T.next;
      T.next = null, g === null ? c = R : g.next = R, g = T;
      var H = e.alternate;
      H !== null && (H = H.updateQueue, x = H.lastBaseUpdate, x !== g && (x === null ? H.firstBaseUpdate = R : x.next = R, H.lastBaseUpdate = T));
    }
    if (c !== null) {
      var Y = o.baseState;
      g = 0, H = R = T = null, x = c;
      do {
        var z = x.lane & -536870913, M = z !== x.lane;
        if (M ? (Me & z) === z : (a & z) === z) {
          z !== 0 && z === ei && (Oo = !0), H !== null && (H = H.next = {
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: null,
            next: null
          });
          e: {
            var ye = e, pe = x;
            z = t;
            var Ge = l;
            switch (pe.tag) {
              case 1:
                if (ye = pe.payload, typeof ye == "function") {
                  Y = ye.call(Ge, Y, z);
                  break e;
                }
                Y = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = pe.payload, z = typeof ye == "function" ? ye.call(Ge, Y, z) : ye, z == null) break e;
                Y = m({}, Y, z);
                break e;
              case 2:
                Gn = !0;
            }
          }
          z = x.callback, z !== null && (e.flags |= 64, M && (e.flags |= 8192), M = o.callbacks, M === null ? o.callbacks = [z] : M.push(z));
        } else
          M = {
            lane: z,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          }, H === null ? (R = H = M, T = Y) : H = H.next = M, g |= z;
        if (x = x.next, x === null) {
          if (x = o.shared.pending, x === null)
            break;
          M = x, x = M.next, M.next = null, o.lastBaseUpdate = M, o.shared.pending = null;
        }
      } while (!0);
      H === null && (T = Y), o.baseState = T, o.firstBaseUpdate = R, o.lastBaseUpdate = H, c === null && (o.shared.lanes = 0), Wn |= g, e.lanes = g, e.memoizedState = Y;
    }
  }
  function yd(e, t) {
    if (typeof e != "function")
      throw Error(u(191, e));
    e.call(t);
  }
  function bd(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        yd(l[e], t);
  }
  var ni = q(null), Sr = q(0);
  function vd(e, t) {
    e = Un, E(Sr, e), E(ni, t), Un = e | t.baseLanes;
  }
  function zo() {
    E(Sr, Un), E(ni, ni.current);
  }
  function No() {
    Un = Sr.current, ee(ni), ee(Sr);
  }
  var Zn = 0, ke = null, Ve = null, tt = null, Er = !1, li = !1, Tl = !1, wr = 0, aa = 0, ii = null, Lb = 0;
  function $e() {
    throw Error(u(321));
  }
  function Mo(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Lt(e[l], t[l])) return !1;
    return !0;
  }
  function Do(e, t, l, a, o, c) {
    return Zn = c, ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, N.H = e === null || e.memoizedState === null ? nh : lh, Tl = !1, c = l(a, o), Tl = !1, li && (c = Sd(
      t,
      l,
      a,
      o
    )), xd(e), c;
  }
  function xd(e) {
    N.H = Rr;
    var t = Ve !== null && Ve.next !== null;
    if (Zn = 0, tt = Ve = ke = null, Er = !1, aa = 0, ii = null, t) throw Error(u(300));
    e === null || st || (e = e.dependencies, e !== null && gr(e) && (st = !0));
  }
  function Sd(e, t, l, a) {
    ke = e;
    var o = 0;
    do {
      if (li && (ii = null), aa = 0, li = !1, 25 <= o) throw Error(u(301));
      if (o += 1, tt = Ve = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      N.H = Xb, c = t(l, a);
    } while (li);
    return c;
  }
  function jb() {
    var e = N.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ra(t) : t, e = e.useState()[0], (Ve !== null ? Ve.memoizedState : null) !== e && (ke.flags |= 1024), t;
  }
  function Uo() {
    var e = wr !== 0;
    return wr = 0, e;
  }
  function Bo(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Lo(e) {
    if (Er) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Er = !1;
    }
    Zn = 0, tt = Ve = ke = null, li = !1, aa = wr = 0, ii = null;
  }
  function At() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return tt === null ? ke.memoizedState = tt = e : tt = tt.next = e, tt;
  }
  function nt() {
    if (Ve === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = tt === null ? ke.memoizedState : tt.next;
    if (t !== null)
      tt = t, Ve = e;
    else {
      if (e === null)
        throw ke.alternate === null ? Error(u(467)) : Error(u(310));
      Ve = e, e = {
        memoizedState: Ve.memoizedState,
        baseState: Ve.baseState,
        baseQueue: Ve.baseQueue,
        queue: Ve.queue,
        next: null
      }, tt === null ? ke.memoizedState = tt = e : tt = tt.next = e;
    }
    return tt;
  }
  function jo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ra(e) {
    var t = aa;
    return aa += 1, ii === null && (ii = []), e = pd(ii, e, t), t = ke, (tt === null ? t.memoizedState : tt.next) === null && (t = t.alternate, N.H = t === null || t.memoizedState === null ? nh : lh), e;
  }
  function Tr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ra(e);
      if (e.$$typeof === Q) return gt(e);
    }
    throw Error(u(438, String(e)));
  }
  function Ho(e) {
    var t = null, l = ke.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = ke.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = jo(), ke.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Te;
    return t.index++, l;
  }
  function Rn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ar(e) {
    var t = nt();
    return qo(t, Ve, e);
  }
  function qo(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = l;
    var o = e.baseQueue, c = a.pending;
    if (c !== null) {
      if (o !== null) {
        var g = o.next;
        o.next = c.next, c.next = g;
      }
      t.baseQueue = o = c, a.pending = null;
    }
    if (c = e.baseState, o === null) e.memoizedState = c;
    else {
      t = o.next;
      var x = g = null, T = null, R = t, H = !1;
      do {
        var Y = R.lane & -536870913;
        if (Y !== R.lane ? (Me & Y) === Y : (Zn & Y) === Y) {
          var z = R.revertLane;
          if (z === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), Y === ei && (H = !0);
          else if ((Zn & z) === z) {
            R = R.next, z === ei && (H = !0);
            continue;
          } else
            Y = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, T === null ? (x = T = Y, g = c) : T = T.next = Y, ke.lanes |= z, Wn |= z;
          Y = R.action, Tl && l(c, Y), c = R.hasEagerState ? R.eagerState : l(c, Y);
        } else
          z = {
            lane: Y,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, T === null ? (x = T = z, g = c) : T = T.next = z, ke.lanes |= Y, Wn |= Y;
        R = R.next;
      } while (R !== null && R !== t);
      if (T === null ? g = c : T.next = x, !Lt(c, e.memoizedState) && (st = !0, H && (l = ti, l !== null)))
        throw l;
      e.memoizedState = c, e.baseState = g, e.baseQueue = T, a.lastRenderedState = c;
    }
    return o === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Vo(e) {
    var t = nt(), l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, o = l.pending, c = t.memoizedState;
    if (o !== null) {
      l.pending = null;
      var g = o = o.next;
      do
        c = e(c, g.action), g = g.next;
      while (g !== o);
      Lt(c, t.memoizedState) || (st = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), l.lastRenderedState = c;
    }
    return [c, a];
  }
  function Ed(e, t, l) {
    var a = ke, o = nt(), c = Ue;
    if (c) {
      if (l === void 0) throw Error(u(407));
      l = l();
    } else l = t();
    var g = !Lt(
      (Ve || o).memoizedState,
      l
    );
    g && (o.memoizedState = l, st = !0), o = o.queue;
    var x = Ad.bind(null, a, o, e);
    if (ua(2048, 8, x, [e]), o.getSnapshot !== t || g || tt !== null && tt.memoizedState.tag & 1) {
      if (a.flags |= 2048, ai(
        9,
        kr(),
        Td.bind(
          null,
          a,
          o,
          l,
          t
        ),
        null
      ), Qe === null) throw Error(u(349));
      c || (Zn & 124) !== 0 || wd(a, t, l);
    }
    return l;
  }
  function wd(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ke.updateQueue, t === null ? (t = jo(), ke.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Td(e, t, l, a) {
    t.value = l, t.getSnapshot = a, kd(t) && Cd(e);
  }
  function Ad(e, t, l) {
    return l(function() {
      kd(t) && Cd(e);
    });
  }
  function kd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Lt(e, l);
    } catch {
      return !0;
    }
  }
  function Cd(e) {
    var t = Il(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function Yo(e) {
    var t = At();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), Tl) {
        he(!0);
        try {
          l();
        } finally {
          he(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rn,
      lastRenderedState: e
    }, t;
  }
  function _d(e, t, l, a) {
    return e.baseState = l, qo(
      e,
      Ve,
      typeof a == "function" ? a : Rn
    );
  }
  function Hb(e, t, l, a, o) {
    if (_r(e)) throw Error(u(485));
    if (e = t.action, e !== null) {
      var c = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(g) {
          c.listeners.push(g);
        }
      };
      N.T !== null ? l(!0) : c.isTransition = !1, a(c), l = t.pending, l === null ? (c.next = t.pending = c, Rd(t, c)) : (c.next = l.next, t.pending = l.next = c);
    }
  }
  function Rd(e, t) {
    var l = t.action, a = t.payload, o = e.state;
    if (t.isTransition) {
      var c = N.T, g = {};
      N.T = g;
      try {
        var x = l(o, a), T = N.S;
        T !== null && T(g, x), Od(e, t, x);
      } catch (R) {
        Go(e, t, R);
      } finally {
        N.T = c;
      }
    } else
      try {
        c = l(o, a), Od(e, t, c);
      } catch (R) {
        Go(e, t, R);
      }
  }
  function Od(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        zd(e, t, a);
      },
      function(a) {
        return Go(e, t, a);
      }
    ) : zd(e, t, l);
  }
  function zd(e, t, l) {
    t.status = "fulfilled", t.value = l, Nd(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Rd(e, l)));
  }
  function Go(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, Nd(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Nd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Md(e, t) {
    return t;
  }
  function Dd(e, t) {
    if (Ue) {
      var l = Qe.formState;
      if (l !== null) {
        e: {
          var a = ke;
          if (Ue) {
            if (Ie) {
              t: {
                for (var o = Ie, c = fn; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break t;
                  }
                  if (o = un(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                c = o.data, o = c === "F!" || c === "F" ? o : null;
              }
              if (o) {
                Ie = un(
                  o.nextSibling
                ), a = o.data === "F!";
                break e;
              }
            }
            xl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = At(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Md,
      lastRenderedState: t
    }, l.queue = a, l = Wd.bind(
      null,
      ke,
      a
    ), a.dispatch = l, a = Yo(!1), c = Fo.bind(
      null,
      ke,
      !1,
      a.queue
    ), a = At(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = o, l = Hb.bind(
      null,
      ke,
      o,
      c,
      l
    ), o.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function Ud(e) {
    var t = nt();
    return Bd(t, Ve, e);
  }
  function Bd(e, t, l) {
    if (t = qo(
      e,
      t,
      Md
    )[0], e = Ar(Rn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ra(t);
      } catch (g) {
        throw g === ea ? vr : g;
      }
    else a = t;
    t = nt();
    var o = t.queue, c = o.dispatch;
    return l !== t.memoizedState && (ke.flags |= 2048, ai(
      9,
      kr(),
      qb.bind(null, o, l),
      null
    )), [a, c, e];
  }
  function qb(e, t) {
    e.action = t;
  }
  function Ld(e) {
    var t = nt(), l = Ve;
    if (l !== null)
      return Bd(t, l, e);
    nt(), t = t.memoizedState, l = nt();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function ai(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ke.updateQueue, t === null && (t = jo(), ke.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function kr() {
    return { destroy: void 0, resource: void 0 };
  }
  function jd() {
    return nt().memoizedState;
  }
  function Cr(e, t, l, a) {
    var o = At();
    a = a === void 0 ? null : a, ke.flags |= e, o.memoizedState = ai(
      1 | t,
      kr(),
      l,
      a
    );
  }
  function ua(e, t, l, a) {
    var o = nt();
    a = a === void 0 ? null : a;
    var c = o.memoizedState.inst;
    Ve !== null && a !== null && Mo(a, Ve.memoizedState.deps) ? o.memoizedState = ai(t, c, l, a) : (ke.flags |= e, o.memoizedState = ai(
      1 | t,
      c,
      l,
      a
    ));
  }
  function Hd(e, t) {
    Cr(8390656, 8, e, t);
  }
  function qd(e, t) {
    ua(2048, 8, e, t);
  }
  function Vd(e, t) {
    return ua(4, 2, e, t);
  }
  function Yd(e, t) {
    return ua(4, 4, e, t);
  }
  function Gd(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Xd(e, t, l) {
    l = l != null ? l.concat([e]) : null, ua(4, 4, Gd.bind(null, t, e), l);
  }
  function Xo() {
  }
  function Qd(e, t) {
    var l = nt();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Mo(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function Zd(e, t) {
    var l = nt();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Mo(t, a[1]))
      return a[0];
    if (a = e(), Tl) {
      he(!0);
      try {
        e();
      } finally {
        he(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function Qo(e, t, l) {
    return l === void 0 || (Zn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Jh(), ke.lanes |= e, Wn |= e, l);
  }
  function Kd(e, t, l, a) {
    return Lt(l, t) ? l : ni.current !== null ? (e = Qo(e, l, a), Lt(e, t) || (st = !0), e) : (Zn & 42) === 0 ? (st = !0, e.memoizedState = l) : (e = Jh(), ke.lanes |= e, Wn |= e, t);
  }
  function Fd(e, t, l, a, o) {
    var c = Z.p;
    Z.p = c !== 0 && 8 > c ? c : 8;
    var g = N.T, x = {};
    N.T = x, Fo(e, !1, t, l);
    try {
      var T = o(), R = N.S;
      if (R !== null && R(x, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var H = Bb(
          T,
          a
        );
        oa(
          e,
          t,
          H,
          Yt(e)
        );
      } else
        oa(
          e,
          t,
          a,
          Yt(e)
        );
    } catch (Y) {
      oa(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Y },
        Yt()
      );
    } finally {
      Z.p = c, N.T = g;
    }
  }
  function Vb() {
  }
  function Zo(e, t, l, a) {
    if (e.tag !== 5) throw Error(u(476));
    var o = Jd(e).queue;
    Fd(
      e,
      o,
      t,
      X,
      l === null ? Vb : function() {
        return Id(e), l(a);
      }
    );
  }
  function Jd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rn,
        lastRenderedState: X
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rn,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Id(e) {
    var t = Jd(e).next.queue;
    oa(e, t, {}, Yt());
  }
  function Ko() {
    return gt(ka);
  }
  function Pd() {
    return nt().memoizedState;
  }
  function $d() {
    return nt().memoizedState;
  }
  function Yb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Yt();
          e = Xn(l);
          var a = Qn(t, e, l);
          a !== null && (Gt(a, t, l), na(a, t, l)), t = { cache: wo() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Gb(e, t, l) {
    var a = Yt();
    l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _r(e) ? eh(t, l) : (l = ho(e, t, l, a), l !== null && (Gt(l, e, a), th(l, t, a)));
  }
  function Wd(e, t, l) {
    var a = Yt();
    oa(e, t, l, a);
  }
  function oa(e, t, l, a) {
    var o = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (_r(e)) eh(t, o);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var g = t.lastRenderedState, x = c(g, l);
          if (o.hasEagerState = !0, o.eagerState = x, Lt(x, g))
            return fr(e, t, o, 0), Qe === null && cr(), !1;
        } catch {
        } finally {
        }
      if (l = ho(e, t, o, a), l !== null)
        return Gt(l, e, a), th(l, t, a), !0;
    }
    return !1;
  }
  function Fo(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: ks(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _r(e)) {
      if (t) throw Error(u(479));
    } else
      t = ho(
        e,
        l,
        a,
        2
      ), t !== null && Gt(t, e, 2);
  }
  function _r(e) {
    var t = e.alternate;
    return e === ke || t !== null && t === ke;
  }
  function eh(e, t) {
    li = Er = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function th(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, sf(e, l);
    }
  }
  var Rr = {
    readContext: gt,
    use: Tr,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useLayoutEffect: $e,
    useInsertionEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useSyncExternalStore: $e,
    useId: $e,
    useHostTransitionStatus: $e,
    useFormState: $e,
    useActionState: $e,
    useOptimistic: $e,
    useMemoCache: $e,
    useCacheRefresh: $e
  }, nh = {
    readContext: gt,
    use: Tr,
    useCallback: function(e, t) {
      return At().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: gt,
    useEffect: Hd,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Cr(
        4194308,
        4,
        Gd.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Cr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Cr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = At();
      t = t === void 0 ? null : t;
      var a = e();
      if (Tl) {
        he(!0);
        try {
          e();
        } finally {
          he(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = At();
      if (l !== void 0) {
        var o = l(t);
        if (Tl) {
          he(!0);
          try {
            l(t);
          } finally {
            he(!1);
          }
        }
      } else o = t;
      return a.memoizedState = a.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, a.queue = e, e = e.dispatch = Gb.bind(
        null,
        ke,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = At();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Yo(e);
      var t = e.queue, l = Wd.bind(null, ke, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Xo,
    useDeferredValue: function(e, t) {
      var l = At();
      return Qo(l, e, t);
    },
    useTransition: function() {
      var e = Yo(!1);
      return e = Fd.bind(
        null,
        ke,
        e.queue,
        !0,
        !1
      ), At().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ke, o = At();
      if (Ue) {
        if (l === void 0)
          throw Error(u(407));
        l = l();
      } else {
        if (l = t(), Qe === null)
          throw Error(u(349));
        (Me & 124) !== 0 || wd(a, t, l);
      }
      o.memoizedState = l;
      var c = { value: l, getSnapshot: t };
      return o.queue = c, Hd(Ad.bind(null, a, c, e), [
        e
      ]), a.flags |= 2048, ai(
        9,
        kr(),
        Td.bind(
          null,
          a,
          c,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = At(), t = Qe.identifierPrefix;
      if (Ue) {
        var l = kn, a = An;
        l = (a & ~(1 << 32 - ge(a) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = wr++, 0 < l && (t += "H" + l.toString(32)), t += "»";
      } else
        l = Lb++, t = "«" + t + "r" + l.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ko,
    useFormState: Dd,
    useActionState: Dd,
    useOptimistic: function(e) {
      var t = At();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Fo.bind(
        null,
        ke,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Ho,
    useCacheRefresh: function() {
      return At().memoizedState = Yb.bind(
        null,
        ke
      );
    }
  }, lh = {
    readContext: gt,
    use: Tr,
    useCallback: Qd,
    useContext: gt,
    useEffect: qd,
    useImperativeHandle: Xd,
    useInsertionEffect: Vd,
    useLayoutEffect: Yd,
    useMemo: Zd,
    useReducer: Ar,
    useRef: jd,
    useState: function() {
      return Ar(Rn);
    },
    useDebugValue: Xo,
    useDeferredValue: function(e, t) {
      var l = nt();
      return Kd(
        l,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ar(Rn)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : ra(e),
        t
      ];
    },
    useSyncExternalStore: Ed,
    useId: Pd,
    useHostTransitionStatus: Ko,
    useFormState: Ud,
    useActionState: Ud,
    useOptimistic: function(e, t) {
      var l = nt();
      return _d(l, Ve, e, t);
    },
    useMemoCache: Ho,
    useCacheRefresh: $d
  }, Xb = {
    readContext: gt,
    use: Tr,
    useCallback: Qd,
    useContext: gt,
    useEffect: qd,
    useImperativeHandle: Xd,
    useInsertionEffect: Vd,
    useLayoutEffect: Yd,
    useMemo: Zd,
    useReducer: Vo,
    useRef: jd,
    useState: function() {
      return Vo(Rn);
    },
    useDebugValue: Xo,
    useDeferredValue: function(e, t) {
      var l = nt();
      return Ve === null ? Qo(l, e, t) : Kd(
        l,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Vo(Rn)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : ra(e),
        t
      ];
    },
    useSyncExternalStore: Ed,
    useId: Pd,
    useHostTransitionStatus: Ko,
    useFormState: Ld,
    useActionState: Ld,
    useOptimistic: function(e, t) {
      var l = nt();
      return Ve !== null ? _d(l, Ve, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Ho,
    useCacheRefresh: $d
  }, ri = null, sa = 0;
  function Or(e) {
    var t = sa;
    return sa += 1, ri === null && (ri = []), pd(ri, e, t);
  }
  function ca(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function zr(e, t) {
    throw t.$$typeof === v ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ih(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ah(e) {
    function t(k, A) {
      if (e) {
        var _ = k.deletions;
        _ === null ? (k.deletions = [A], k.flags |= 16) : _.push(A);
      }
    }
    function l(k, A) {
      if (!e) return null;
      for (; A !== null; )
        t(k, A), A = A.sibling;
      return null;
    }
    function a(k) {
      for (var A = /* @__PURE__ */ new Map(); k !== null; )
        k.key !== null ? A.set(k.key, k) : A.set(k.index, k), k = k.sibling;
      return A;
    }
    function o(k, A) {
      return k = Tn(k, A), k.index = 0, k.sibling = null, k;
    }
    function c(k, A, _) {
      return k.index = _, e ? (_ = k.alternate, _ !== null ? (_ = _.index, _ < A ? (k.flags |= 67108866, A) : _) : (k.flags |= 67108866, A)) : (k.flags |= 1048576, A);
    }
    function g(k) {
      return e && k.alternate === null && (k.flags |= 67108866), k;
    }
    function x(k, A, _, V) {
      return A === null || A.tag !== 6 ? (A = mo(_, k.mode, V), A.return = k, A) : (A = o(A, _), A.return = k, A);
    }
    function T(k, A, _, V) {
      var oe = _.type;
      return oe === C ? H(
        k,
        A,
        _.props.children,
        V,
        _.key
      ) : A !== null && (A.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === P && ih(oe) === A.type) ? (A = o(A, _.props), ca(A, _), A.return = k, A) : (A = hr(
        _.type,
        _.key,
        _.props,
        null,
        k.mode,
        V
      ), ca(A, _), A.return = k, A);
    }
    function R(k, A, _, V) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== _.containerInfo || A.stateNode.implementation !== _.implementation ? (A = go(_, k.mode, V), A.return = k, A) : (A = o(A, _.children || []), A.return = k, A);
    }
    function H(k, A, _, V, oe) {
      return A === null || A.tag !== 7 ? (A = gl(
        _,
        k.mode,
        V,
        oe
      ), A.return = k, A) : (A = o(A, _), A.return = k, A);
    }
    function Y(k, A, _) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = mo(
          "" + A,
          k.mode,
          _
        ), A.return = k, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case w:
            return _ = hr(
              A.type,
              A.key,
              A.props,
              null,
              k.mode,
              _
            ), ca(_, A), _.return = k, _;
          case S:
            return A = go(
              A,
              k.mode,
              _
            ), A.return = k, A;
          case P:
            var V = A._init;
            return A = V(A._payload), Y(k, A, _);
        }
        if (te(A) || G(A))
          return A = gl(
            A,
            k.mode,
            _,
            null
          ), A.return = k, A;
        if (typeof A.then == "function")
          return Y(k, Or(A), _);
        if (A.$$typeof === Q)
          return Y(
            k,
            yr(k, A),
            _
          );
        zr(k, A);
      }
      return null;
    }
    function z(k, A, _, V) {
      var oe = A !== null ? A.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return oe !== null ? null : x(k, A, "" + _, V);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case w:
            return _.key === oe ? T(k, A, _, V) : null;
          case S:
            return _.key === oe ? R(k, A, _, V) : null;
          case P:
            return oe = _._init, _ = oe(_._payload), z(k, A, _, V);
        }
        if (te(_) || G(_))
          return oe !== null ? null : H(k, A, _, V, null);
        if (typeof _.then == "function")
          return z(
            k,
            A,
            Or(_),
            V
          );
        if (_.$$typeof === Q)
          return z(
            k,
            A,
            yr(k, _),
            V
          );
        zr(k, _);
      }
      return null;
    }
    function M(k, A, _, V, oe) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return k = k.get(_) || null, x(A, k, "" + V, oe);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case w:
            return k = k.get(
              V.key === null ? _ : V.key
            ) || null, T(A, k, V, oe);
          case S:
            return k = k.get(
              V.key === null ? _ : V.key
            ) || null, R(A, k, V, oe);
          case P:
            var Re = V._init;
            return V = Re(V._payload), M(
              k,
              A,
              _,
              V,
              oe
            );
        }
        if (te(V) || G(V))
          return k = k.get(_) || null, H(A, k, V, oe, null);
        if (typeof V.then == "function")
          return M(
            k,
            A,
            _,
            Or(V),
            oe
          );
        if (V.$$typeof === Q)
          return M(
            k,
            A,
            _,
            yr(A, V),
            oe
          );
        zr(A, V);
      }
      return null;
    }
    function ye(k, A, _, V) {
      for (var oe = null, Re = null, fe = A, me = A = 0, ft = null; fe !== null && me < _.length; me++) {
        fe.index > me ? (ft = fe, fe = null) : ft = fe.sibling;
        var De = z(
          k,
          fe,
          _[me],
          V
        );
        if (De === null) {
          fe === null && (fe = ft);
          break;
        }
        e && fe && De.alternate === null && t(k, fe), A = c(De, A, me), Re === null ? oe = De : Re.sibling = De, Re = De, fe = ft;
      }
      if (me === _.length)
        return l(k, fe), Ue && bl(k, me), oe;
      if (fe === null) {
        for (; me < _.length; me++)
          fe = Y(k, _[me], V), fe !== null && (A = c(
            fe,
            A,
            me
          ), Re === null ? oe = fe : Re.sibling = fe, Re = fe);
        return Ue && bl(k, me), oe;
      }
      for (fe = a(fe); me < _.length; me++)
        ft = M(
          fe,
          k,
          me,
          _[me],
          V
        ), ft !== null && (e && ft.alternate !== null && fe.delete(
          ft.key === null ? me : ft.key
        ), A = c(
          ft,
          A,
          me
        ), Re === null ? oe = ft : Re.sibling = ft, Re = ft);
      return e && fe.forEach(function(ol) {
        return t(k, ol);
      }), Ue && bl(k, me), oe;
    }
    function pe(k, A, _, V) {
      if (_ == null) throw Error(u(151));
      for (var oe = null, Re = null, fe = A, me = A = 0, ft = null, De = _.next(); fe !== null && !De.done; me++, De = _.next()) {
        fe.index > me ? (ft = fe, fe = null) : ft = fe.sibling;
        var ol = z(k, fe, De.value, V);
        if (ol === null) {
          fe === null && (fe = ft);
          break;
        }
        e && fe && ol.alternate === null && t(k, fe), A = c(ol, A, me), Re === null ? oe = ol : Re.sibling = ol, Re = ol, fe = ft;
      }
      if (De.done)
        return l(k, fe), Ue && bl(k, me), oe;
      if (fe === null) {
        for (; !De.done; me++, De = _.next())
          De = Y(k, De.value, V), De !== null && (A = c(De, A, me), Re === null ? oe = De : Re.sibling = De, Re = De);
        return Ue && bl(k, me), oe;
      }
      for (fe = a(fe); !De.done; me++, De = _.next())
        De = M(fe, k, me, De.value, V), De !== null && (e && De.alternate !== null && fe.delete(De.key === null ? me : De.key), A = c(De, A, me), Re === null ? oe = De : Re.sibling = De, Re = De);
      return e && fe.forEach(function(Q0) {
        return t(k, Q0);
      }), Ue && bl(k, me), oe;
    }
    function Ge(k, A, _, V) {
      if (typeof _ == "object" && _ !== null && _.type === C && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case w:
            e: {
              for (var oe = _.key; A !== null; ) {
                if (A.key === oe) {
                  if (oe = _.type, oe === C) {
                    if (A.tag === 7) {
                      l(
                        k,
                        A.sibling
                      ), V = o(
                        A,
                        _.props.children
                      ), V.return = k, k = V;
                      break e;
                    }
                  } else if (A.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === P && ih(oe) === A.type) {
                    l(
                      k,
                      A.sibling
                    ), V = o(A, _.props), ca(V, _), V.return = k, k = V;
                    break e;
                  }
                  l(k, A);
                  break;
                } else t(k, A);
                A = A.sibling;
              }
              _.type === C ? (V = gl(
                _.props.children,
                k.mode,
                V,
                _.key
              ), V.return = k, k = V) : (V = hr(
                _.type,
                _.key,
                _.props,
                null,
                k.mode,
                V
              ), ca(V, _), V.return = k, k = V);
            }
            return g(k);
          case S:
            e: {
              for (oe = _.key; A !== null; ) {
                if (A.key === oe)
                  if (A.tag === 4 && A.stateNode.containerInfo === _.containerInfo && A.stateNode.implementation === _.implementation) {
                    l(
                      k,
                      A.sibling
                    ), V = o(A, _.children || []), V.return = k, k = V;
                    break e;
                  } else {
                    l(k, A);
                    break;
                  }
                else t(k, A);
                A = A.sibling;
              }
              V = go(_, k.mode, V), V.return = k, k = V;
            }
            return g(k);
          case P:
            return oe = _._init, _ = oe(_._payload), Ge(
              k,
              A,
              _,
              V
            );
        }
        if (te(_))
          return ye(
            k,
            A,
            _,
            V
          );
        if (G(_)) {
          if (oe = G(_), typeof oe != "function") throw Error(u(150));
          return _ = oe.call(_), pe(
            k,
            A,
            _,
            V
          );
        }
        if (typeof _.then == "function")
          return Ge(
            k,
            A,
            Or(_),
            V
          );
        if (_.$$typeof === Q)
          return Ge(
            k,
            A,
            yr(k, _),
            V
          );
        zr(k, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, A !== null && A.tag === 6 ? (l(k, A.sibling), V = o(A, _), V.return = k, k = V) : (l(k, A), V = mo(_, k.mode, V), V.return = k, k = V), g(k)) : l(k, A);
    }
    return function(k, A, _, V) {
      try {
        sa = 0;
        var oe = Ge(
          k,
          A,
          _,
          V
        );
        return ri = null, oe;
      } catch (fe) {
        if (fe === ea || fe === vr) throw fe;
        var Re = jt(29, fe, null, k.mode);
        return Re.lanes = V, Re.return = k, Re;
      } finally {
      }
    };
  }
  var ui = ah(!0), rh = ah(!1), Wt = q(null), dn = null;
  function Kn(e) {
    var t = e.alternate;
    E(at, at.current & 1), E(Wt, e), dn === null && (t === null || ni.current !== null || t.memoizedState !== null) && (dn = e);
  }
  function uh(e) {
    if (e.tag === 22) {
      if (E(at, at.current), E(Wt, e), dn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (dn = e);
      }
    } else Fn();
  }
  function Fn() {
    E(at, at.current), E(Wt, Wt.current);
  }
  function On(e) {
    ee(Wt), dn === e && (dn = null), ee(at);
  }
  var at = q(0);
  function Nr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || js(l)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function Jo(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : m({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Io = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Yt(), o = Xn(a);
      o.payload = t, l != null && (o.callback = l), t = Qn(e, o, a), t !== null && (Gt(t, e, a), na(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Yt(), o = Xn(a);
      o.tag = 1, o.payload = t, l != null && (o.callback = l), t = Qn(e, o, a), t !== null && (Gt(t, e, a), na(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Yt(), a = Xn(l);
      a.tag = 2, t != null && (a.callback = t), t = Qn(e, a, l), t !== null && (Gt(t, e, l), na(t, e, l));
    }
  };
  function oh(e, t, l, a, o, c, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, c, g) : t.prototype && t.prototype.isPureReactComponent ? !Zi(l, a) || !Zi(o, c) : !0;
  }
  function sh(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Io.enqueueReplaceState(t, t.state, null);
  }
  function Al(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = m({}, l));
      for (var o in e)
        l[o] === void 0 && (l[o] = e[o]);
    }
    return l;
  }
  var Mr = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function ch(e) {
    Mr(e);
  }
  function fh(e) {
    console.error(e);
  }
  function dh(e) {
    Mr(e);
  }
  function Dr(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function hh(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Po(e, t, l) {
    return l = Xn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Dr(e, t);
    }, l;
  }
  function ph(e) {
    return e = Xn(e), e.tag = 3, e;
  }
  function mh(e, t, l, a) {
    var o = l.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = a.value;
      e.payload = function() {
        return o(c);
      }, e.callback = function() {
        hh(t, l, a);
      };
    }
    var g = l.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
      hh(t, l, a), typeof o != "function" && (el === null ? el = /* @__PURE__ */ new Set([this]) : el.add(this));
      var x = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: x !== null ? x : ""
      });
    });
  }
  function Qb(e, t, l, a, o) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Pi(
        t,
        l,
        o,
        !0
      ), l = Wt.current, l !== null) {
        switch (l.tag) {
          case 13:
            return dn === null ? Ss() : l.alternate === null && Pe === 0 && (Pe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = o, a === ko ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), ws(e, a, o)), !1;
          case 22:
            return l.flags |= 65536, a === ko ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), ws(e, a, o)), !1;
        }
        throw Error(u(435, l.tag));
      }
      return ws(e, a, o), Ss(), !1;
    }
    if (Ue)
      return t = Wt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, a !== vo && (e = Error(u(422), { cause: a }), Ii(Jt(e, l)))) : (a !== vo && (t = Error(u(423), {
        cause: a
      }), Ii(
        Jt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, a = Jt(a, l), o = Po(
        e.stateNode,
        a,
        o
      ), Ro(e, o), Pe !== 4 && (Pe = 2)), !1;
    var c = Error(u(520), { cause: a });
    if (c = Jt(c, l), ya === null ? ya = [c] : ya.push(c), Pe !== 4 && (Pe = 2), t === null) return !0;
    a = Jt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = o & -o, l.lanes |= e, e = Po(l.stateNode, a, e), Ro(l, e), !1;
        case 1:
          if (t = l.type, c = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (el === null || !el.has(c))))
            return l.flags |= 65536, o &= -o, l.lanes |= o, o = ph(o), mh(
              o,
              e,
              l,
              a
            ), Ro(l, o), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var gh = Error(u(461)), st = !1;
  function dt(e, t, l, a) {
    t.child = e === null ? rh(t, null, l, a) : ui(
      t,
      e.child,
      l,
      a
    );
  }
  function yh(e, t, l, a, o) {
    l = l.render;
    var c = t.ref;
    if ("ref" in a) {
      var g = {};
      for (var x in a)
        x !== "ref" && (g[x] = a[x]);
    } else g = a;
    return El(t), a = Do(
      e,
      t,
      l,
      g,
      c,
      o
    ), x = Uo(), e !== null && !st ? (Bo(e, t, o), zn(e, t, o)) : (Ue && x && yo(t), t.flags |= 1, dt(e, t, a, o), t.child);
  }
  function bh(e, t, l, a, o) {
    if (e === null) {
      var c = l.type;
      return typeof c == "function" && !po(c) && c.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = c, vh(
        e,
        t,
        c,
        a,
        o
      )) : (e = hr(
        l.type,
        null,
        a,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !as(e, o)) {
      var g = c.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zi, l(g, a) && e.ref === t.ref)
        return zn(e, t, o);
    }
    return t.flags |= 1, e = Tn(c, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function vh(e, t, l, a, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Zi(c, a) && e.ref === t.ref)
        if (st = !1, t.pendingProps = a = c, as(e, o))
          (e.flags & 131072) !== 0 && (st = !0);
        else
          return t.lanes = e.lanes, zn(e, t, o);
    }
    return $o(
      e,
      t,
      l,
      a,
      o
    );
  }
  function xh(e, t, l) {
    var a = t.pendingProps, o = a.children, c = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = c !== null ? c.baseLanes | l : l, e !== null) {
          for (o = t.child = e.child, c = 0; o !== null; )
            c = c | o.lanes | o.childLanes, o = o.sibling;
          t.childLanes = c & ~a;
        } else t.childLanes = 0, t.child = null;
        return Sh(
          e,
          t,
          a,
          l
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && br(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? vd(t, c) : zo(), uh(t);
      else
        return t.lanes = t.childLanes = 536870912, Sh(
          e,
          t,
          c !== null ? c.baseLanes | l : l,
          l
        );
    } else
      c !== null ? (br(t, c.cachePool), vd(t, c), Fn(), t.memoizedState = null) : (e !== null && br(t, null), zo(), Fn());
    return dt(e, t, o, l), t.child;
  }
  function Sh(e, t, l, a) {
    var o = Ao();
    return o = o === null ? null : { parent: it._currentValue, pool: o }, t.memoizedState = {
      baseLanes: l,
      cachePool: o
    }, e !== null && br(t, null), zo(), uh(t), e !== null && Pi(e, t, a, !0), null;
  }
  function Ur(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(u(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function $o(e, t, l, a, o) {
    return El(t), l = Do(
      e,
      t,
      l,
      a,
      void 0,
      o
    ), a = Uo(), e !== null && !st ? (Bo(e, t, o), zn(e, t, o)) : (Ue && a && yo(t), t.flags |= 1, dt(e, t, l, o), t.child);
  }
  function Eh(e, t, l, a, o, c) {
    return El(t), t.updateQueue = null, l = Sd(
      t,
      a,
      l,
      o
    ), xd(e), a = Uo(), e !== null && !st ? (Bo(e, t, c), zn(e, t, c)) : (Ue && a && yo(t), t.flags |= 1, dt(e, t, l, c), t.child);
  }
  function wh(e, t, l, a, o) {
    if (El(t), t.stateNode === null) {
      var c = Pl, g = l.contextType;
      typeof g == "object" && g !== null && (c = gt(g)), c = new l(a, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Io, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = a, c.state = t.memoizedState, c.refs = {}, Co(t), g = l.contextType, c.context = typeof g == "object" && g !== null ? gt(g) : Pl, c.state = t.memoizedState, g = l.getDerivedStateFromProps, typeof g == "function" && (Jo(
        t,
        l,
        g,
        a
      ), c.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (g = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), g !== c.state && Io.enqueueReplaceState(c, c.state, null), ia(t, a, c, o), la(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      c = t.stateNode;
      var x = t.memoizedProps, T = Al(l, x);
      c.props = T;
      var R = c.context, H = l.contextType;
      g = Pl, typeof H == "object" && H !== null && (g = gt(H));
      var Y = l.getDerivedStateFromProps;
      H = typeof Y == "function" || typeof c.getSnapshotBeforeUpdate == "function", x = t.pendingProps !== x, H || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (x || R !== g) && sh(
        t,
        c,
        a,
        g
      ), Gn = !1;
      var z = t.memoizedState;
      c.state = z, ia(t, a, c, o), la(), R = t.memoizedState, x || z !== R || Gn ? (typeof Y == "function" && (Jo(
        t,
        l,
        Y,
        a
      ), R = t.memoizedState), (T = Gn || oh(
        t,
        l,
        T,
        a,
        z,
        R,
        g
      )) ? (H || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = R), c.props = a, c.state = R, c.context = g, a = T) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      c = t.stateNode, _o(e, t), g = t.memoizedProps, H = Al(l, g), c.props = H, Y = t.pendingProps, z = c.context, R = l.contextType, T = Pl, typeof R == "object" && R !== null && (T = gt(R)), x = l.getDerivedStateFromProps, (R = typeof x == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g !== Y || z !== T) && sh(
        t,
        c,
        a,
        T
      ), Gn = !1, z = t.memoizedState, c.state = z, ia(t, a, c, o), la();
      var M = t.memoizedState;
      g !== Y || z !== M || Gn || e !== null && e.dependencies !== null && gr(e.dependencies) ? (typeof x == "function" && (Jo(
        t,
        l,
        x,
        a
      ), M = t.memoizedState), (H = Gn || oh(
        t,
        l,
        H,
        a,
        z,
        M,
        T
      ) || e !== null && e.dependencies !== null && gr(e.dependencies)) ? (R || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, M, T), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        a,
        M,
        T
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), c.props = a, c.state = M, c.context = T, a = H) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return c = a, Ur(e, t), a = (t.flags & 128) !== 0, c || a ? (c = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && a ? (t.child = ui(
      t,
      e.child,
      null,
      o
    ), t.child = ui(
      t,
      null,
      l,
      o
    )) : dt(e, t, l, o), t.memoizedState = c.state, e = t.child) : e = zn(
      e,
      t,
      o
    ), e;
  }
  function Th(e, t, l, a) {
    return Ji(), t.flags |= 256, dt(e, t, l, a), t.child;
  }
  var Wo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function es(e) {
    return { baseLanes: e, cachePool: fd() };
  }
  function ts(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= en), e;
  }
  function Ah(e, t, l) {
    var a = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, g;
    if ((g = c) || (g = e !== null && e.memoizedState === null ? !1 : (at.current & 2) !== 0), g && (o = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ue) {
        if (o ? Kn(t) : Fn(), Ue) {
          var x = Ie, T;
          if (T = x) {
            e: {
              for (T = x, x = fn; T.nodeType !== 8; ) {
                if (!x) {
                  x = null;
                  break e;
                }
                if (T = un(
                  T.nextSibling
                ), T === null) {
                  x = null;
                  break e;
                }
              }
              x = T;
            }
            x !== null ? (t.memoizedState = {
              dehydrated: x,
              treeContext: yl !== null ? { id: An, overflow: kn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, T = jt(
              18,
              null,
              null,
              0
            ), T.stateNode = x, T.return = t, t.child = T, St = t, Ie = null, T = !0) : T = !1;
          }
          T || xl(t);
        }
        if (x = t.memoizedState, x !== null && (x = x.dehydrated, x !== null))
          return js(x) ? t.lanes = 32 : t.lanes = 536870912, null;
        On(t);
      }
      return x = a.children, a = a.fallback, o ? (Fn(), o = t.mode, x = Br(
        { mode: "hidden", children: x },
        o
      ), a = gl(
        a,
        o,
        l,
        null
      ), x.return = t, a.return = t, x.sibling = a, t.child = x, o = t.child, o.memoizedState = es(l), o.childLanes = ts(
        e,
        g,
        l
      ), t.memoizedState = Wo, a) : (Kn(t), ns(t, x));
    }
    if (T = e.memoizedState, T !== null && (x = T.dehydrated, x !== null)) {
      if (c)
        t.flags & 256 ? (Kn(t), t.flags &= -257, t = ls(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Fn(), t.child = e.child, t.flags |= 128, t = null) : (Fn(), o = a.fallback, x = t.mode, a = Br(
          { mode: "visible", children: a.children },
          x
        ), o = gl(
          o,
          x,
          l,
          null
        ), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, ui(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = es(l), a.childLanes = ts(
          e,
          g,
          l
        ), t.memoizedState = Wo, t = o);
      else if (Kn(t), js(x)) {
        if (g = x.nextSibling && x.nextSibling.dataset, g) var R = g.dgst;
        g = R, a = Error(u(419)), a.stack = "", a.digest = g, Ii({ value: a, source: null, stack: null }), t = ls(
          e,
          t,
          l
        );
      } else if (st || Pi(e, t, l, !1), g = (l & e.childLanes) !== 0, st || g) {
        if (g = Qe, g !== null && (a = l & -l, a = (a & 42) !== 0 ? 1 : ju(a), a = (a & (g.suspendedLanes | l)) !== 0 ? 0 : a, a !== 0 && a !== T.retryLane))
          throw T.retryLane = a, Il(e, a), Gt(g, e, a), gh;
        x.data === "$?" || Ss(), t = ls(
          e,
          t,
          l
        );
      } else
        x.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, Ie = un(
          x.nextSibling
        ), St = t, Ue = !0, vl = null, fn = !1, e !== null && (Pt[$t++] = An, Pt[$t++] = kn, Pt[$t++] = yl, An = e.id, kn = e.overflow, yl = t), t = ns(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (Fn(), o = a.fallback, x = t.mode, T = e.child, R = T.sibling, a = Tn(T, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = T.subtreeFlags & 65011712, R !== null ? o = Tn(R, o) : (o = gl(
      o,
      x,
      l,
      null
    ), o.flags |= 2), o.return = t, a.return = t, a.sibling = o, t.child = a, a = o, o = t.child, x = e.child.memoizedState, x === null ? x = es(l) : (T = x.cachePool, T !== null ? (R = it._currentValue, T = T.parent !== R ? { parent: R, pool: R } : T) : T = fd(), x = {
      baseLanes: x.baseLanes | l,
      cachePool: T
    }), o.memoizedState = x, o.childLanes = ts(
      e,
      g,
      l
    ), t.memoizedState = Wo, a) : (Kn(t), l = e.child, e = l.sibling, l = Tn(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function ns(e, t) {
    return t = Br(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Br(e, t) {
    return e = jt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function ls(e, t, l) {
    return ui(t, e.child, null, l), e = ns(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function kh(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), So(e.return, t, l);
  }
  function is(e, t, l, a, o) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: o
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = l, c.tailMode = o);
  }
  function Ch(e, t, l) {
    var a = t.pendingProps, o = a.revealOrder, c = a.tail;
    if (dt(e, t, a.children, l), a = at.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && kh(e, l, t);
          else if (e.tag === 19)
            kh(e, l, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      a &= 1;
    }
    switch (E(at, a), o) {
      case "forwards":
        for (l = t.child, o = null; l !== null; )
          e = l.alternate, e !== null && Nr(e) === null && (o = l), l = l.sibling;
        l = o, l === null ? (o = t.child, t.child = null) : (o = l.sibling, l.sibling = null), is(
          t,
          !1,
          o,
          l,
          c
        );
        break;
      case "backwards":
        for (l = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Nr(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = l, l = o, o = e;
        }
        is(
          t,
          !0,
          l,
          null,
          c
        );
        break;
      case "together":
        is(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function zn(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Wn |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Pi(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, l = Tn(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Tn(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function as(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && gr(e)));
  }
  function Zb(e, t, l) {
    switch (t.tag) {
      case 3:
        Ne(t, t.stateNode.containerInfo), Yn(t, it, e.memoizedState.cache), Ji();
        break;
      case 27:
      case 5:
        xt(t);
        break;
      case 4:
        Ne(t, t.stateNode.containerInfo);
        break;
      case 10:
        Yn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Kn(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Ah(e, t, l) : (Kn(t), e = zn(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Kn(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Pi(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), o) {
          if (a)
            return Ch(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), E(at, at.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, xh(e, t, l);
      case 24:
        Yn(t, it, e.memoizedState.cache);
    }
    return zn(e, t, l);
  }
  function _h(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        st = !0;
      else {
        if (!as(e, l) && (t.flags & 128) === 0)
          return st = !1, Zb(
            e,
            t,
            l
          );
        st = (e.flags & 131072) !== 0;
      }
    else
      st = !1, Ue && (t.flags & 1048576) !== 0 && id(t, mr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType, o = a._init;
          if (a = o(a._payload), t.type = a, typeof a == "function")
            po(a) ? (e = Al(a, e), t.tag = 1, t = wh(
              null,
              t,
              a,
              e,
              l
            )) : (t.tag = 0, t = $o(
              null,
              t,
              a,
              e,
              l
            ));
          else {
            if (a != null) {
              if (o = a.$$typeof, o === ne) {
                t.tag = 11, t = yh(
                  null,
                  t,
                  a,
                  e,
                  l
                );
                break e;
              } else if (o === re) {
                t.tag = 14, t = bh(
                  null,
                  t,
                  a,
                  e,
                  l
                );
                break e;
              }
            }
            throw t = W(a) || a, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return $o(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, o = Al(
          a,
          t.pendingProps
        ), wh(
          e,
          t,
          a,
          o,
          l
        );
      case 3:
        e: {
          if (Ne(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          a = t.pendingProps;
          var c = t.memoizedState;
          o = c.element, _o(e, t), ia(t, a, null, l);
          var g = t.memoizedState;
          if (a = g.cache, Yn(t, it, a), a !== c.cache && Eo(
            t,
            [it],
            l,
            !0
          ), la(), a = g.element, c.isDehydrated)
            if (c = {
              element: a,
              isDehydrated: !1,
              cache: g.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = Th(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== o) {
              o = Jt(
                Error(u(424)),
                t
              ), Ii(o), t = Th(
                e,
                t,
                a,
                l
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ie = un(e.firstChild), St = t, Ue = !0, vl = null, fn = !0, l = rh(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Ji(), a === o) {
              t = zn(
                e,
                t,
                l
              );
              break e;
            }
            dt(
              e,
              t,
              a,
              l
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ur(e, t), e === null ? (l = Np(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : Ue || (l = t.type, e = t.pendingProps, a = Ir(
          ue.current
        ).createElement(l), a[mt] = t, a[wt] = e, pt(a, l, e), ot(a), t.stateNode = a) : t.memoizedState = Np(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return xt(t), e === null && Ue && (a = t.stateNode = Rp(
          t.type,
          t.pendingProps,
          ue.current
        ), St = t, fn = !0, o = Ie, ll(t.type) ? (Hs = o, Ie = un(
          a.firstChild
        )) : Ie = o), dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Ur(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ue && ((o = a = Ie) && (a = x0(
          a,
          t.type,
          t.pendingProps,
          fn
        ), a !== null ? (t.stateNode = a, St = t, Ie = un(
          a.firstChild
        ), fn = !1, o = !0) : o = !1), o || xl(t)), xt(t), o = t.type, c = t.pendingProps, g = e !== null ? e.memoizedProps : null, a = c.children, Us(o, c) ? a = null : g !== null && Us(o, g) && (t.flags |= 32), t.memoizedState !== null && (o = Do(
          e,
          t,
          jb,
          null,
          null,
          l
        ), ka._currentValue = o), Ur(e, t), dt(e, t, a, l), t.child;
      case 6:
        return e === null && Ue && ((e = l = Ie) && (l = S0(
          l,
          t.pendingProps,
          fn
        ), l !== null ? (t.stateNode = l, St = t, Ie = null, e = !0) : e = !1), e || xl(t)), null;
      case 13:
        return Ah(e, t, l);
      case 4:
        return Ne(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ui(
          t,
          null,
          a,
          l
        ) : dt(
          e,
          t,
          a,
          l
        ), t.child;
      case 11:
        return yh(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return dt(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, Yn(t, t.type, a.value), dt(
          e,
          t,
          a.children,
          l
        ), t.child;
      case 9:
        return o = t.type._context, a = t.pendingProps.children, El(t), o = gt(o), a = a(o), t.flags |= 1, dt(e, t, a, l), t.child;
      case 14:
        return bh(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return vh(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Ch(e, t, l);
      case 31:
        return a = t.pendingProps, l = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, e === null ? (l = Br(
          a,
          l
        ), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Tn(e.child, a), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
      case 22:
        return xh(e, t, l);
      case 24:
        return El(t), a = gt(it), e === null ? (o = Ao(), o === null && (o = Qe, c = wo(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= l), o = c), t.memoizedState = {
          parent: a,
          cache: o
        }, Co(t), Yn(t, it, o)) : ((e.lanes & l) !== 0 && (_o(e, t), ia(t, null, null, l), la()), o = e.memoizedState, c = t.memoizedState, o.parent !== a ? (o = { parent: a, cache: a }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Yn(t, it, a)) : (a = c.cache, Yn(t, it, a), a !== o.cache && Eo(
          t,
          [it],
          l,
          !0
        ))), dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function Nn(e) {
    e.flags |= 4;
  }
  function Rh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Lp(t)) {
      if (t = Wt.current, t !== null && ((Me & 4194048) === Me ? dn !== null : (Me & 62914560) !== Me && (Me & 536870912) === 0 || t !== dn))
        throw ta = ko, dd;
      e.flags |= 8192;
    }
  }
  function Lr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? uf() : 536870912, e.lanes |= t, fi |= t);
  }
  function fa(e, t) {
    if (!Ue)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var o = e.child; o !== null; )
        l |= o.lanes | o.childLanes, a |= o.subtreeFlags & 65011712, a |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        l |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function Kb(e, t, l) {
    var a = t.pendingProps;
    switch (bo(t), t.tag) {
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
        return Je(t), null;
      case 1:
        return Je(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), _n(it), et(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Fi(t) ? Nn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ud())), Je(t), null;
      case 26:
        return l = t.memoizedState, e === null ? (Nn(t), l !== null ? (Je(t), Rh(t, l)) : (Je(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Nn(t), Je(t), Rh(t, l)) : (Je(t), t.flags &= -16777217) : (e.memoizedProps !== a && Nn(t), Je(t), t.flags &= -16777217), null;
      case 27:
        Mt(t), l = ue.current;
        var o = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== a && Nn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Je(t), null;
          }
          e = le.current, Fi(t) ? ad(t) : (e = Rp(o, a, l), t.stateNode = e, Nn(t));
        }
        return Je(t), null;
      case 5:
        if (Mt(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Nn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Je(t), null;
          }
          if (e = le.current, Fi(t))
            ad(t);
          else {
            switch (o = Ir(
              ue.current
            ), e) {
              case 1:
                e = o.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                e = o.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    e = o.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    e = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof a.is == "string" ? o.createElement("select", { is: a.is }) : o.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                    break;
                  default:
                    e = typeof a.is == "string" ? o.createElement(l, { is: a.is }) : o.createElement(l);
                }
            }
            e[mt] = t, e[wt] = a;
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6)
                e.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
              if (o === t) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t)
                  break e;
                o = o.return;
              }
              o.sibling.return = o.return, o = o.sibling;
            }
            t.stateNode = e;
            e: switch (pt(e, l, a), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Nn(t);
          }
        }
        return Je(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Nn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = ue.current, Fi(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, o = St, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  a = o.memoizedProps;
              }
            e[mt] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Ep(e.nodeValue, l)), e || xl(t);
          } else
            e = Ir(e).createTextNode(
              a
            ), e[mt] = t, t.stateNode = e;
        }
        return Je(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Fi(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[mt] = t;
            } else
              Ji(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), o = !1;
          } else
            o = ud(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (On(t), t) : (On(t), null);
        }
        if (On(t), (t.flags & 128) !== 0)
          return t.lanes = l, t;
        if (l = a !== null, e = e !== null && e.memoizedState !== null, l) {
          a = t.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool);
          var c = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== o && (a.flags |= 2048);
        }
        return l !== e && l && (t.child.flags |= 8192), Lr(t, t.updateQueue), Je(t), null;
      case 4:
        return et(), e === null && Os(t.stateNode.containerInfo), Je(t), null;
      case 10:
        return _n(t.type), Je(t), null;
      case 19:
        if (ee(at), o = t.memoizedState, o === null) return Je(t), null;
        if (a = (t.flags & 128) !== 0, c = o.rendering, c === null)
          if (a) fa(o, !1);
          else {
            if (Pe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = Nr(e), c !== null) {
                  for (t.flags |= 128, fa(o, !1), e = c.updateQueue, t.updateQueue = e, Lr(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    ld(l, e), l = l.sibling;
                  return E(
                    at,
                    at.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && Dt() > qr && (t.flags |= 128, a = !0, fa(o, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Nr(c), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Lr(t, e), fa(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !Ue)
                return Je(t), null;
            } else
              2 * Dt() - o.renderingStartTime > qr && l !== 536870912 && (t.flags |= 128, a = !0, fa(o, !1), t.lanes = 4194304);
          o.isBackwards ? (c.sibling = t.child, t.child = c) : (e = o.last, e !== null ? e.sibling = c : t.child = c, o.last = c);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Dt(), t.sibling = null, e = at.current, E(at, a ? e & 1 | 2 : e & 1), t) : (Je(t), null);
      case 22:
      case 23:
        return On(t), No(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), l = t.updateQueue, l !== null && Lr(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && ee(wl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), _n(it), Je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Fb(e, t) {
    switch (bo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return _n(it), et(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Mt(t), null;
      case 13:
        if (On(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          Ji();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ee(at), null;
      case 4:
        return et(), null;
      case 10:
        return _n(t.type), null;
      case 22:
      case 23:
        return On(t), No(), e !== null && ee(wl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return _n(it), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Oh(e, t) {
    switch (bo(t), t.tag) {
      case 3:
        _n(it), et();
        break;
      case 26:
      case 27:
      case 5:
        Mt(t);
        break;
      case 4:
        et();
        break;
      case 13:
        On(t);
        break;
      case 19:
        ee(at);
        break;
      case 10:
        _n(t.type);
        break;
      case 22:
      case 23:
        On(t), No(), e !== null && ee(wl);
        break;
      case 24:
        _n(it);
    }
  }
  function da(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var o = a.next;
        l = o;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var c = l.create, g = l.inst;
            a = c(), g.destroy = a;
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (x) {
      Xe(t, t.return, x);
    }
  }
  function Jn(e, t, l) {
    try {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            var g = a.inst, x = g.destroy;
            if (x !== void 0) {
              g.destroy = void 0, o = t;
              var T = l, R = x;
              try {
                R();
              } catch (H) {
                Xe(
                  o,
                  T,
                  H
                );
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (H) {
      Xe(t, t.return, H);
    }
  }
  function zh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        bd(t, l);
      } catch (a) {
        Xe(e, e.return, a);
      }
    }
  }
  function Nh(e, t, l) {
    l.props = Al(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Xe(e, t, a);
    }
  }
  function ha(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
      }
    } catch (o) {
      Xe(e, t, o);
    }
  }
  function hn(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (o) {
          Xe(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Xe(e, t, o);
        }
      else l.current = null;
  }
  function Mh(e) {
    var t = e.type, l = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (o) {
      Xe(e, e.return, o);
    }
  }
  function rs(e, t, l) {
    try {
      var a = e.stateNode;
      m0(a, e.type, l, t), a[wt] = t;
    } catch (o) {
      Xe(e, e.return, o);
    }
  }
  function Dh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ll(e.type) || e.tag === 4;
  }
  function us(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Dh(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ll(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function os(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Jr));
    else if (a !== 4 && (a === 27 && ll(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (os(e, t, l), e = e.sibling; e !== null; )
        os(e, t, l), e = e.sibling;
  }
  function jr(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && ll(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (jr(e, t, l), e = e.sibling; e !== null; )
        jr(e, t, l), e = e.sibling;
  }
  function Uh(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      pt(t, a, l), t[mt] = e, t[wt] = l;
    } catch (c) {
      Xe(e, e.return, c);
    }
  }
  var Mn = !1, We = !1, ss = !1, Bh = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function Jb(e, t) {
    if (e = e.containerInfo, Ms = nu, e = Kf(e), ro(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var o = a.anchorOffset, c = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, c.nodeType;
            } catch {
              l = null;
              break e;
            }
            var g = 0, x = -1, T = -1, R = 0, H = 0, Y = e, z = null;
            t: for (; ; ) {
              for (var M; Y !== l || o !== 0 && Y.nodeType !== 3 || (x = g + o), Y !== c || a !== 0 && Y.nodeType !== 3 || (T = g + a), Y.nodeType === 3 && (g += Y.nodeValue.length), (M = Y.firstChild) !== null; )
                z = Y, Y = M;
              for (; ; ) {
                if (Y === e) break t;
                if (z === l && ++R === o && (x = g), z === c && ++H === a && (T = g), (M = Y.nextSibling) !== null) break;
                Y = z, z = Y.parentNode;
              }
              Y = M;
            }
            l = x === -1 || T === -1 ? null : { start: x, end: T };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ds = { focusedElem: e, selectionRange: l }, nu = !1, ct = t; ct !== null; )
      if (t = ct, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, ct = e;
      else
        for (; ct !== null; ) {
          switch (t = ct, c = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, l = t, o = c.memoizedProps, c = c.memoizedState, a = l.stateNode;
                try {
                  var ye = Al(
                    l.type,
                    o,
                    l.elementType === l.type
                  );
                  e = a.getSnapshotBeforeUpdate(
                    ye,
                    c
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (pe) {
                  Xe(
                    l,
                    l.return,
                    pe
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Ls(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ls(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ct = e;
            break;
          }
          ct = t.return;
        }
  }
  function Lh(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        In(e, l), a & 4 && da(5, l);
        break;
      case 1:
        if (In(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (g) {
              Xe(l, l.return, g);
            }
          else {
            var o = Al(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (g) {
              Xe(
                l,
                l.return,
                g
              );
            }
          }
        a & 64 && zh(l), a & 512 && ha(l, l.return);
        break;
      case 3:
        if (In(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            bd(e, t);
          } catch (g) {
            Xe(l, l.return, g);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Uh(l);
      case 26:
      case 5:
        In(e, l), t === null && a & 4 && Mh(l), a & 512 && ha(l, l.return);
        break;
      case 12:
        In(e, l);
        break;
      case 13:
        In(e, l), a & 4 && qh(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = i0.bind(
          null,
          l
        ), E0(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Mn, !a) {
          t = t !== null && t.memoizedState !== null || We, o = Mn;
          var c = We;
          Mn = a, (We = t) && !c ? Pn(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : In(e, l), Mn = o, We = c;
        }
        break;
      case 30:
        break;
      default:
        In(e, l);
    }
  }
  function jh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, jh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Vu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Fe = null, kt = !1;
  function Dn(e, t, l) {
    for (l = l.child; l !== null; )
      Hh(e, t, l), l = l.sibling;
  }
  function Hh(e, t, l) {
    if (K && typeof K.onCommitFiberUnmount == "function")
      try {
        K.onCommitFiberUnmount(j, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        We || hn(l, t), Dn(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        We || hn(l, t);
        var a = Fe, o = kt;
        ll(l.type) && (Fe = l.stateNode, kt = !1), Dn(
          e,
          t,
          l
        ), Ea(l.stateNode), Fe = a, kt = o;
        break;
      case 5:
        We || hn(l, t);
      case 6:
        if (a = Fe, o = kt, Fe = null, Dn(
          e,
          t,
          l
        ), Fe = a, kt = o, Fe !== null)
          if (kt)
            try {
              (Fe.nodeType === 9 ? Fe.body : Fe.nodeName === "HTML" ? Fe.ownerDocument.body : Fe).removeChild(l.stateNode);
            } catch (c) {
              Xe(
                l,
                t,
                c
              );
            }
          else
            try {
              Fe.removeChild(l.stateNode);
            } catch (c) {
              Xe(
                l,
                t,
                c
              );
            }
        break;
      case 18:
        Fe !== null && (kt ? (e = Fe, Cp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Oa(e)) : Cp(Fe, l.stateNode));
        break;
      case 4:
        a = Fe, o = kt, Fe = l.stateNode.containerInfo, kt = !0, Dn(
          e,
          t,
          l
        ), Fe = a, kt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        We || Jn(2, l, t), We || Jn(4, l, t), Dn(
          e,
          t,
          l
        );
        break;
      case 1:
        We || (hn(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Nh(
          l,
          t,
          a
        )), Dn(
          e,
          t,
          l
        );
        break;
      case 21:
        Dn(
          e,
          t,
          l
        );
        break;
      case 22:
        We = (a = We) || l.memoizedState !== null, Dn(
          e,
          t,
          l
        ), We = a;
        break;
      default:
        Dn(
          e,
          t,
          l
        );
    }
  }
  function qh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Oa(e);
      } catch (l) {
        Xe(t, t.return, l);
      }
  }
  function Ib(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Bh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Bh()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function cs(e, t) {
    var l = Ib(e);
    t.forEach(function(a) {
      var o = a0.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(o, o));
    });
  }
  function Ht(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var o = l[a], c = e, g = t, x = g;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (ll(x.type)) {
                Fe = x.stateNode, kt = !1;
                break e;
              }
              break;
            case 5:
              Fe = x.stateNode, kt = !1;
              break e;
            case 3:
            case 4:
              Fe = x.stateNode.containerInfo, kt = !0;
              break e;
          }
          x = x.return;
        }
        if (Fe === null) throw Error(u(160));
        Hh(c, g, o), Fe = null, kt = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Vh(t, e), t = t.sibling;
  }
  var rn = null;
  function Vh(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ht(t, e), qt(e), a & 4 && (Jn(3, e, e.return), da(3, e), Jn(5, e, e.return));
        break;
      case 1:
        Ht(t, e), qt(e), a & 512 && (We || l === null || hn(l, l.return)), a & 64 && Mn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var o = rn;
        if (Ht(t, e), qt(e), a & 512 && (We || l === null || hn(l, l.return)), a & 4) {
          var c = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (a) {
                    case "title":
                      c = o.getElementsByTagName("title")[0], (!c || c[Li] || c[mt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(a), o.head.insertBefore(
                        c,
                        o.querySelector("head > title")
                      )), pt(c, a, l), c[mt] = e, ot(c), a = c;
                      break e;
                    case "link":
                      var g = Up(
                        "link",
                        "href",
                        o
                      ).get(a + (l.href || ""));
                      if (g) {
                        for (var x = 0; x < g.length; x++)
                          if (c = g[x], c.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && c.getAttribute("rel") === (l.rel == null ? null : l.rel) && c.getAttribute("title") === (l.title == null ? null : l.title) && c.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            g.splice(x, 1);
                            break t;
                          }
                      }
                      c = o.createElement(a), pt(c, a, l), o.head.appendChild(c);
                      break;
                    case "meta":
                      if (g = Up(
                        "meta",
                        "content",
                        o
                      ).get(a + (l.content || ""))) {
                        for (x = 0; x < g.length; x++)
                          if (c = g[x], c.getAttribute("content") === (l.content == null ? null : "" + l.content) && c.getAttribute("name") === (l.name == null ? null : l.name) && c.getAttribute("property") === (l.property == null ? null : l.property) && c.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && c.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            g.splice(x, 1);
                            break t;
                          }
                      }
                      c = o.createElement(a), pt(c, a, l), o.head.appendChild(c);
                      break;
                    default:
                      throw Error(u(468, a));
                  }
                  c[mt] = e, ot(c), a = c;
                }
                e.stateNode = a;
              } else
                Bp(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Dp(
                o,
                a,
                e.memoizedProps
              );
          else
            c !== a ? (c === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : c.count--, a === null ? Bp(
              o,
              e.type,
              e.stateNode
            ) : Dp(
              o,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && rs(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Ht(t, e), qt(e), a & 512 && (We || l === null || hn(l, l.return)), l !== null && a & 4 && rs(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Ht(t, e), qt(e), a & 512 && (We || l === null || hn(l, l.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Gl(o, "");
          } catch (M) {
            Xe(e, e.return, M);
          }
        }
        a & 4 && e.stateNode != null && (o = e.memoizedProps, rs(
          e,
          o,
          l !== null ? l.memoizedProps : o
        )), a & 1024 && (ss = !0);
        break;
      case 6:
        if (Ht(t, e), qt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (M) {
            Xe(e, e.return, M);
          }
        }
        break;
      case 3:
        if (Wr = null, o = rn, rn = Pr(t.containerInfo), Ht(t, e), rn = o, qt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Oa(t.containerInfo);
          } catch (M) {
            Xe(e, e.return, M);
          }
        ss && (ss = !1, Yh(e));
        break;
      case 4:
        a = rn, rn = Pr(
          e.stateNode.containerInfo
        ), Ht(t, e), qt(e), rn = a;
        break;
      case 12:
        Ht(t, e), qt(e);
        break;
      case 13:
        Ht(t, e), qt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (gs = Dt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, cs(e, a)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var T = l !== null && l.memoizedState !== null, R = Mn, H = We;
        if (Mn = R || o, We = H || T, Ht(t, e), We = H, Mn = R, qt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (l === null || T || Mn || We || kl(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                T = l = t;
                try {
                  if (c = T.stateNode, o)
                    g = c.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    x = T.stateNode;
                    var Y = T.memoizedProps.style, z = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                    x.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (M) {
                  Xe(T, T.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                T = t;
                try {
                  T.stateNode.nodeValue = o ? "" : T.memoizedProps;
                } catch (M) {
                  Xe(T, T.return, M);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, cs(e, l))));
        break;
      case 19:
        Ht(t, e), qt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, cs(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ht(t, e), qt(e);
    }
  }
  function qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Dh(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(u(160));
        switch (l.tag) {
          case 27:
            var o = l.stateNode, c = us(e);
            jr(e, c, o);
            break;
          case 5:
            var g = l.stateNode;
            l.flags & 32 && (Gl(g, ""), l.flags &= -33);
            var x = us(e);
            jr(e, x, g);
            break;
          case 3:
          case 4:
            var T = l.stateNode.containerInfo, R = us(e);
            os(
              e,
              R,
              T
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (H) {
        Xe(e, e.return, H);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Yh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Yh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function In(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Lh(e, t.alternate, t), t = t.sibling;
  }
  function kl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jn(4, t, t.return), kl(t);
          break;
        case 1:
          hn(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Nh(
            t,
            t.return,
            l
          ), kl(t);
          break;
        case 27:
          Ea(t.stateNode);
        case 26:
        case 5:
          hn(t, t.return), kl(t);
          break;
        case 22:
          t.memoizedState === null && kl(t);
          break;
        case 30:
          kl(t);
          break;
        default:
          kl(t);
      }
      e = e.sibling;
    }
  }
  function Pn(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, o = e, c = t, g = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Pn(
            o,
            c,
            l
          ), da(4, c);
          break;
        case 1:
          if (Pn(
            o,
            c,
            l
          ), a = c, o = a.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (R) {
              Xe(a, a.return, R);
            }
          if (a = c, o = a.updateQueue, o !== null) {
            var x = a.stateNode;
            try {
              var T = o.shared.hiddenCallbacks;
              if (T !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < T.length; o++)
                  yd(T[o], x);
            } catch (R) {
              Xe(a, a.return, R);
            }
          }
          l && g & 64 && zh(c), ha(c, c.return);
          break;
        case 27:
          Uh(c);
        case 26:
        case 5:
          Pn(
            o,
            c,
            l
          ), l && a === null && g & 4 && Mh(c), ha(c, c.return);
          break;
        case 12:
          Pn(
            o,
            c,
            l
          );
          break;
        case 13:
          Pn(
            o,
            c,
            l
          ), l && g & 4 && qh(o, c);
          break;
        case 22:
          c.memoizedState === null && Pn(
            o,
            c,
            l
          ), ha(c, c.return);
          break;
        case 30:
          break;
        default:
          Pn(
            o,
            c,
            l
          );
      }
      t = t.sibling;
    }
  }
  function fs(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && $i(l));
  }
  function ds(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $i(e));
  }
  function pn(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Gh(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function Gh(e, t, l, a) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pn(
          e,
          t,
          l,
          a
        ), o & 2048 && da(9, t);
        break;
      case 1:
        pn(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        pn(
          e,
          t,
          l,
          a
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $i(e)));
        break;
      case 12:
        if (o & 2048) {
          pn(
            e,
            t,
            l,
            a
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, g = c.id, x = c.onPostCommit;
            typeof x == "function" && x(
              g,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Xe(t, t.return, T);
          }
        } else
          pn(
            e,
            t,
            l,
            a
          );
        break;
      case 13:
        pn(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, g = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? pn(
          e,
          t,
          l,
          a
        ) : pa(e, t) : c._visibility & 2 ? pn(
          e,
          t,
          l,
          a
        ) : (c._visibility |= 2, oi(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), o & 2048 && fs(g, t);
        break;
      case 24:
        pn(
          e,
          t,
          l,
          a
        ), o & 2048 && ds(t.alternate, t);
        break;
      default:
        pn(
          e,
          t,
          l,
          a
        );
    }
  }
  function oi(e, t, l, a, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e, g = t, x = l, T = a, R = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          oi(
            c,
            g,
            x,
            T,
            o
          ), da(8, g);
          break;
        case 23:
          break;
        case 22:
          var H = g.stateNode;
          g.memoizedState !== null ? H._visibility & 2 ? oi(
            c,
            g,
            x,
            T,
            o
          ) : pa(
            c,
            g
          ) : (H._visibility |= 2, oi(
            c,
            g,
            x,
            T,
            o
          )), o && R & 2048 && fs(
            g.alternate,
            g
          );
          break;
        case 24:
          oi(
            c,
            g,
            x,
            T,
            o
          ), o && R & 2048 && ds(g.alternate, g);
          break;
        default:
          oi(
            c,
            g,
            x,
            T,
            o
          );
      }
      t = t.sibling;
    }
  }
  function pa(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, o = a.flags;
        switch (a.tag) {
          case 22:
            pa(l, a), o & 2048 && fs(
              a.alternate,
              a
            );
            break;
          case 24:
            pa(l, a), o & 2048 && ds(a.alternate, a);
            break;
          default:
            pa(l, a);
        }
        t = t.sibling;
      }
  }
  var ma = 8192;
  function si(e) {
    if (e.subtreeFlags & ma)
      for (e = e.child; e !== null; )
        Xh(e), e = e.sibling;
  }
  function Xh(e) {
    switch (e.tag) {
      case 26:
        si(e), e.flags & ma && e.memoizedState !== null && U0(
          rn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        si(e);
        break;
      case 3:
      case 4:
        var t = rn;
        rn = Pr(e.stateNode.containerInfo), si(e), rn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = ma, ma = 16777216, si(e), ma = t) : si(e));
        break;
      default:
        si(e);
    }
  }
  function Qh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ga(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ct = a, Kh(
            a,
            e
          );
        }
      Qh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Zh(e), e = e.sibling;
  }
  function Zh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ga(e), e.flags & 2048 && Jn(9, e, e.return);
        break;
      case 3:
        ga(e);
        break;
      case 12:
        ga(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Hr(e)) : ga(e);
        break;
      default:
        ga(e);
    }
  }
  function Hr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ct = a, Kh(
            a,
            e
          );
        }
      Qh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, t, t.return), Hr(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Hr(t));
          break;
        default:
          Hr(t);
      }
      e = e.sibling;
    }
  }
  function Kh(e, t) {
    for (; ct !== null; ) {
      var l = ct;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $i(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, ct = a;
      else
        e: for (l = e; ct !== null; ) {
          a = ct;
          var o = a.sibling, c = a.return;
          if (jh(a), a === l) {
            ct = null;
            break e;
          }
          if (o !== null) {
            o.return = c, ct = o;
            break e;
          }
          ct = c;
        }
    }
  }
  var Pb = {
    getCacheForType: function(e) {
      var t = gt(it), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    }
  }, $b = typeof WeakMap == "function" ? WeakMap : Map, He = 0, Qe = null, Oe = null, Me = 0, qe = 0, Vt = null, $n = !1, ci = !1, hs = !1, Un = 0, Pe = 0, Wn = 0, Cl = 0, ps = 0, en = 0, fi = 0, ya = null, Ct = null, ms = !1, gs = 0, qr = 1 / 0, Vr = null, el = null, ht = 0, tl = null, di = null, hi = 0, ys = 0, bs = null, Fh = null, ba = 0, vs = null;
  function Yt() {
    if ((He & 2) !== 0 && Me !== 0)
      return Me & -Me;
    if (N.T !== null) {
      var e = ei;
      return e !== 0 ? e : ks();
    }
    return cf();
  }
  function Jh() {
    en === 0 && (en = (Me & 536870912) === 0 || Ue ? rf() : 536870912);
    var e = Wt.current;
    return e !== null && (e.flags |= 32), en;
  }
  function Gt(e, t, l) {
    (e === Qe && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) && (pi(e, 0), nl(
      e,
      Me,
      en,
      !1
    )), Bi(e, l), ((He & 2) === 0 || e !== Qe) && (e === Qe && ((He & 2) === 0 && (Cl |= l), Pe === 4 && nl(
      e,
      Me,
      en,
      !1
    )), mn(e));
  }
  function Ih(e, t, l) {
    if ((He & 6) !== 0) throw Error(u(327));
    var a = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Zt(e, t), o = a ? t0(e, t) : Es(e, t, !0), c = a;
    do {
      if (o === 0) {
        ci && !a && nl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, c && !Wb(l)) {
          o = Es(e, t, !1), c = !1;
          continue;
        }
        if (o === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var g = 0;
          else
            g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
          if (g !== 0) {
            t = g;
            e: {
              var x = e;
              o = ya;
              var T = x.current.memoizedState.isDehydrated;
              if (T && (pi(x, g).flags |= 256), g = Es(
                x,
                g,
                !1
              ), g !== 2) {
                if (hs && !T) {
                  x.errorRecoveryDisabledLanes |= c, Cl |= c, o = 4;
                  break e;
                }
                c = Ct, Ct = o, c !== null && (Ct === null ? Ct = c : Ct.push.apply(
                  Ct,
                  c
                ));
              }
              o = g;
            }
            if (c = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          pi(e, 0), nl(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, c = o, c) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              nl(
                a,
                t,
                en,
                !$n
              );
              break e;
            case 2:
              Ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (o = gs + 300 - Dt(), 10 < o)) {
            if (nl(
              a,
              t,
              en,
              !$n
            ), ut(a, 0, !0) !== 0) break e;
            a.timeoutHandle = Ap(
              Ph.bind(
                null,
                a,
                l,
                Ct,
                Vr,
                ms,
                t,
                en,
                Cl,
                fi,
                $n,
                c,
                2,
                -0,
                0
              ),
              o
            );
            break e;
          }
          Ph(
            a,
            l,
            Ct,
            Vr,
            ms,
            t,
            en,
            Cl,
            fi,
            $n,
            c,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    mn(e);
  }
  function Ph(e, t, l, a, o, c, g, x, T, R, H, Y, z, M) {
    if (e.timeoutHandle = -1, Y = t.subtreeFlags, (Y & 8192 || (Y & 16785408) === 16785408) && (Aa = { stylesheets: null, count: 0, unsuspend: D0 }, Xh(t), Y = B0(), Y !== null)) {
      e.cancelPendingCommit = Y(
        ip.bind(
          null,
          e,
          t,
          c,
          l,
          a,
          o,
          g,
          x,
          T,
          H,
          1,
          z,
          M
        )
      ), nl(e, c, g, !R);
      return;
    }
    ip(
      e,
      t,
      c,
      l,
      a,
      o,
      g,
      x,
      T
    );
  }
  function Wb(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var o = l[a], c = o.getSnapshot;
          o = o.value;
          try {
            if (!Lt(c(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function nl(e, t, l, a) {
    t &= ~ps, t &= ~Cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var c = 31 - ge(o), g = 1 << c;
      a[c] = -1, o &= ~g;
    }
    l !== 0 && of(e, l, t);
  }
  function Yr() {
    return (He & 6) === 0 ? (va(0), !1) : !0;
  }
  function xs() {
    if (Oe !== null) {
      if (qe === 0)
        var e = Oe.return;
      else
        e = Oe, Cn = Sl = null, Lo(e), ri = null, sa = 0, e = Oe;
      for (; e !== null; )
        Oh(e.alternate, e), e = e.return;
      Oe = null;
    }
  }
  function pi(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, y0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), xs(), Qe = e, Oe = l = Tn(e.current, null), Me = t, qe = 0, Vt = null, $n = !1, ci = Zt(e, t), hs = !1, fi = en = ps = Cl = Wn = Pe = 0, Ct = ya = null, ms = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var o = 31 - ge(a), c = 1 << o;
        t |= e[o], a &= ~c;
      }
    return Un = t, cr(), l;
  }
  function $h(e, t) {
    ke = null, N.H = Rr, t === ea || t === vr ? (t = md(), qe = 3) : t === dd ? (t = md(), qe = 4) : qe = t === gh ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, Oe === null && (Pe = 1, Dr(
      e,
      Jt(t, e.current)
    ));
  }
  function Wh() {
    var e = N.H;
    return N.H = Rr, e === null ? Rr : e;
  }
  function ep() {
    var e = N.A;
    return N.A = Pb, e;
  }
  function Ss() {
    Pe = 4, $n || (Me & 4194048) !== Me && Wt.current !== null || (ci = !0), (Wn & 134217727) === 0 && (Cl & 134217727) === 0 || Qe === null || nl(
      Qe,
      Me,
      en,
      !1
    );
  }
  function Es(e, t, l) {
    var a = He;
    He |= 2;
    var o = Wh(), c = ep();
    (Qe !== e || Me !== t) && (Vr = null, pi(e, t)), t = !1;
    var g = Pe;
    e: do
      try {
        if (qe !== 0 && Oe !== null) {
          var x = Oe, T = Vt;
          switch (qe) {
            case 8:
              xs(), g = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Wt.current === null && (t = !0);
              var R = qe;
              if (qe = 0, Vt = null, mi(e, x, T, R), l && ci) {
                g = 0;
                break e;
              }
              break;
            default:
              R = qe, qe = 0, Vt = null, mi(e, x, T, R);
          }
        }
        e0(), g = Pe;
        break;
      } catch (H) {
        $h(e, H);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Cn = Sl = null, He = a, N.H = o, N.A = c, Oe === null && (Qe = null, Me = 0, cr()), g;
  }
  function e0() {
    for (; Oe !== null; ) tp(Oe);
  }
  function t0(e, t) {
    var l = He;
    He |= 2;
    var a = Wh(), o = ep();
    Qe !== e || Me !== t ? (Vr = null, qr = Dt() + 500, pi(e, t)) : ci = Zt(
      e,
      t
    );
    e: do
      try {
        if (qe !== 0 && Oe !== null) {
          t = Oe;
          var c = Vt;
          t: switch (qe) {
            case 1:
              qe = 0, Vt = null, mi(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (hd(c)) {
                qe = 0, Vt = null, np(t);
                break;
              }
              t = function() {
                qe !== 2 && qe !== 9 || Qe !== e || (qe = 7), mn(e);
              }, c.then(t, t);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              hd(c) ? (qe = 0, Vt = null, np(t)) : (qe = 0, Vt = null, mi(e, t, c, 7));
              break;
            case 5:
              var g = null;
              switch (Oe.tag) {
                case 26:
                  g = Oe.memoizedState;
                case 5:
                case 27:
                  var x = Oe;
                  if (!g || Lp(g)) {
                    qe = 0, Vt = null;
                    var T = x.sibling;
                    if (T !== null) Oe = T;
                    else {
                      var R = x.return;
                      R !== null ? (Oe = R, Gr(R)) : Oe = null;
                    }
                    break t;
                  }
              }
              qe = 0, Vt = null, mi(e, t, c, 5);
              break;
            case 6:
              qe = 0, Vt = null, mi(e, t, c, 6);
              break;
            case 8:
              xs(), Pe = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        n0();
        break;
      } catch (H) {
        $h(e, H);
      }
    while (!0);
    return Cn = Sl = null, N.H = a, N.A = o, He = l, Oe !== null ? 0 : (Qe = null, Me = 0, cr(), Pe);
  }
  function n0() {
    for (; Oe !== null && !Ia(); )
      tp(Oe);
  }
  function tp(e) {
    var t = _h(e.alternate, e, Un);
    e.memoizedProps = e.pendingProps, t === null ? Gr(e) : Oe = t;
  }
  function np(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Eh(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Me
        );
        break;
      case 11:
        t = Eh(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Me
        );
        break;
      case 5:
        Lo(t);
      default:
        Oh(l, t), t = Oe = ld(t, Un), t = _h(l, t, Un);
    }
    e.memoizedProps = e.pendingProps, t === null ? Gr(e) : Oe = t;
  }
  function mi(e, t, l, a) {
    Cn = Sl = null, Lo(t), ri = null, sa = 0;
    var o = t.return;
    try {
      if (Qb(
        e,
        o,
        t,
        l,
        Me
      )) {
        Pe = 1, Dr(
          e,
          Jt(l, e.current)
        ), Oe = null;
        return;
      }
    } catch (c) {
      if (o !== null) throw Oe = o, c;
      Pe = 1, Dr(
        e,
        Jt(l, e.current)
      ), Oe = null;
      return;
    }
    t.flags & 32768 ? (Ue || a === 1 ? e = !0 : ci || (Me & 536870912) !== 0 ? e = !1 : ($n = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Wt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), lp(t, e)) : Gr(t);
  }
  function Gr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        lp(
          t,
          $n
        );
        return;
      }
      e = t.return;
      var l = Kb(
        t.alternate,
        t,
        Un
      );
      if (l !== null) {
        Oe = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function lp(e, t) {
    do {
      var l = Fb(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, Oe = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        Oe = e;
        return;
      }
      Oe = e = l;
    } while (e !== null);
    Pe = 6, Oe = null;
  }
  function ip(e, t, l, a, o, c, g, x, T) {
    e.cancelPendingCommit = null;
    do
      Xr();
    while (ht !== 0);
    if ((He & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (c = t.lanes | t.childLanes, c |= fo, Dy(
        e,
        l,
        c,
        g,
        x,
        T
      ), e === Qe && (Oe = Qe = null, Me = 0), di = t, tl = e, hi = l, ys = c, bs = o, Fh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, r0(Ul, function() {
        return sp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = N.T, N.T = null, o = Z.p, Z.p = 2, g = He, He |= 4;
        try {
          Jb(e, t, l);
        } finally {
          He = g, Z.p = o, N.T = a;
        }
      }
      ht = 1, ap(), rp(), up();
    }
  }
  function ap() {
    if (ht === 1) {
      ht = 0;
      var e = tl, t = di, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = N.T, N.T = null;
        var a = Z.p;
        Z.p = 2;
        var o = He;
        He |= 4;
        try {
          Vh(t, e);
          var c = Ds, g = Kf(e.containerInfo), x = c.focusedElem, T = c.selectionRange;
          if (g !== x && x && x.ownerDocument && Zf(
            x.ownerDocument.documentElement,
            x
          )) {
            if (T !== null && ro(x)) {
              var R = T.start, H = T.end;
              if (H === void 0 && (H = R), "selectionStart" in x)
                x.selectionStart = R, x.selectionEnd = Math.min(
                  H,
                  x.value.length
                );
              else {
                var Y = x.ownerDocument || document, z = Y && Y.defaultView || window;
                if (z.getSelection) {
                  var M = z.getSelection(), ye = x.textContent.length, pe = Math.min(T.start, ye), Ge = T.end === void 0 ? pe : Math.min(T.end, ye);
                  !M.extend && pe > Ge && (g = Ge, Ge = pe, pe = g);
                  var k = Qf(
                    x,
                    pe
                  ), A = Qf(
                    x,
                    Ge
                  );
                  if (k && A && (M.rangeCount !== 1 || M.anchorNode !== k.node || M.anchorOffset !== k.offset || M.focusNode !== A.node || M.focusOffset !== A.offset)) {
                    var _ = Y.createRange();
                    _.setStart(k.node, k.offset), M.removeAllRanges(), pe > Ge ? (M.addRange(_), M.extend(A.node, A.offset)) : (_.setEnd(A.node, A.offset), M.addRange(_));
                  }
                }
              }
            }
            for (Y = [], M = x; M = M.parentNode; )
              M.nodeType === 1 && Y.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof x.focus == "function" && x.focus(), x = 0; x < Y.length; x++) {
              var V = Y[x];
              V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
            }
          }
          nu = !!Ms, Ds = Ms = null;
        } finally {
          He = o, Z.p = a, N.T = l;
        }
      }
      e.current = t, ht = 2;
    }
  }
  function rp() {
    if (ht === 2) {
      ht = 0;
      var e = tl, t = di, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = N.T, N.T = null;
        var a = Z.p;
        Z.p = 2;
        var o = He;
        He |= 4;
        try {
          Lh(e, t.alternate, t);
        } finally {
          He = o, Z.p = a, N.T = l;
        }
      }
      ht = 3;
    }
  }
  function up() {
    if (ht === 4 || ht === 3) {
      ht = 0, Pa();
      var e = tl, t = di, l = hi, a = Fh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ht = 5 : (ht = 0, di = tl = null, op(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (el = null), Hu(l), t = t.stateNode, K && typeof K.onCommitFiberRoot == "function")
        try {
          K.onCommitFiberRoot(
            j,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = N.T, o = Z.p, Z.p = 2, N.T = null;
        try {
          for (var c = e.onRecoverableError, g = 0; g < a.length; g++) {
            var x = a[g];
            c(x.value, {
              componentStack: x.stack
            });
          }
        } finally {
          N.T = t, Z.p = o;
        }
      }
      (hi & 3) !== 0 && Xr(), mn(e), o = e.pendingLanes, (l & 4194090) !== 0 && (o & 42) !== 0 ? e === vs ? ba++ : (ba = 0, vs = e) : ba = 0, va(0);
    }
  }
  function op(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, $i(t)));
  }
  function Xr(e) {
    return ap(), rp(), up(), sp();
  }
  function sp() {
    if (ht !== 5) return !1;
    var e = tl, t = ys;
    ys = 0;
    var l = Hu(hi), a = N.T, o = Z.p;
    try {
      Z.p = 32 > l ? 32 : l, N.T = null, l = bs, bs = null;
      var c = tl, g = hi;
      if (ht = 0, di = tl = null, hi = 0, (He & 6) !== 0) throw Error(u(331));
      var x = He;
      if (He |= 4, Zh(c.current), Gh(
        c,
        c.current,
        g,
        l
      ), He = x, va(0, !1), K && typeof K.onPostCommitFiberRoot == "function")
        try {
          K.onPostCommitFiberRoot(j, c);
        } catch {
        }
      return !0;
    } finally {
      Z.p = o, N.T = a, op(e, t);
    }
  }
  function cp(e, t, l) {
    t = Jt(l, t), t = Po(e.stateNode, t, 2), e = Qn(e, t, 2), e !== null && (Bi(e, 2), mn(e));
  }
  function Xe(e, t, l) {
    if (e.tag === 3)
      cp(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          cp(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (el === null || !el.has(a))) {
            e = Jt(l, e), l = ph(2), a = Qn(t, l, 2), a !== null && (mh(
              l,
              a,
              t,
              e
            ), Bi(a, 2), mn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function ws(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new $b();
      var o = /* @__PURE__ */ new Set();
      a.set(t, o);
    } else
      o = a.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), a.set(t, o));
    o.has(l) || (hs = !0, o.add(l), e = l0.bind(null, e, t, l), t.then(e, e));
  }
  function l0(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Qe === e && (Me & l) === l && (Pe === 4 || Pe === 3 && (Me & 62914560) === Me && 300 > Dt() - gs ? (He & 2) === 0 && pi(e, 0) : ps |= l, fi === Me && (fi = 0)), mn(e);
  }
  function fp(e, t) {
    t === 0 && (t = uf()), e = Il(e, t), e !== null && (Bi(e, t), mn(e));
  }
  function i0(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), fp(e, l);
  }
  function a0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode, o = e.memoizedState;
        o !== null && (l = o.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    a !== null && a.delete(t), fp(e, l);
  }
  function r0(e, t) {
    return Ni(e, t);
  }
  var Qr = null, gi = null, Ts = !1, Zr = !1, As = !1, _l = 0;
  function mn(e) {
    e !== gi && e.next === null && (gi === null ? Qr = gi = e : gi = gi.next = e), Zr = !0, Ts || (Ts = !0, o0());
  }
  function va(e, t) {
    if (!As && Zr) {
      As = !0;
      do
        for (var l = !1, a = Qr; a !== null; ) {
          if (e !== 0) {
            var o = a.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var g = a.suspendedLanes, x = a.pingedLanes;
              c = (1 << 31 - ge(42 | e) + 1) - 1, c &= o & ~(g & ~x), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (l = !0, mp(a, c));
          } else
            c = Me, c = ut(
              a,
              a === Qe ? c : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (c & 3) === 0 || Zt(a, c) || (l = !0, mp(a, c));
          a = a.next;
        }
      while (l);
      As = !1;
    }
  }
  function u0() {
    dp();
  }
  function dp() {
    Zr = Ts = !1;
    var e = 0;
    _l !== 0 && (g0() && (e = _l), _l = 0);
    for (var t = Dt(), l = null, a = Qr; a !== null; ) {
      var o = a.next, c = hp(a, t);
      c === 0 ? (a.next = null, l === null ? Qr = o : l.next = o, o === null && (gi = l)) : (l = a, (e !== 0 || (c & 3) !== 0) && (Zr = !0)), a = o;
    }
    va(e);
  }
  function hp(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var g = 31 - ge(c), x = 1 << g, T = o[g];
      T === -1 ? ((x & l) === 0 || (x & a) !== 0) && (o[g] = ln(x, t)) : T <= t && (e.expiredLanes |= x), c &= ~x;
    }
    if (t = Qe, l = Me, l = ut(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Mi(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Zt(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Mi(a), Hu(l)) {
        case 2:
        case 8:
          l = Ui;
          break;
        case 32:
          l = Ul;
          break;
        case 268435456:
          l = $a;
          break;
        default:
          l = Ul;
      }
      return a = pp.bind(null, e), l = Ni(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && Mi(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function pp(e, t) {
    if (ht !== 0 && ht !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Xr() && e.callbackNode !== l)
      return null;
    var a = Me;
    return a = ut(
      e,
      e === Qe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Ih(e, a, t), hp(e, Dt()), e.callbackNode != null && e.callbackNode === l ? pp.bind(null, e) : null);
  }
  function mp(e, t) {
    if (Xr()) return null;
    Ih(e, t, !0);
  }
  function o0() {
    b0(function() {
      (He & 6) !== 0 ? Ni(
        Di,
        u0
      ) : dp();
    });
  }
  function ks() {
    return _l === 0 && (_l = rf()), _l;
  }
  function gp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : lr("" + e);
  }
  function yp(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function s0(e, t, l, a, o) {
    if (t === "submit" && l && l.stateNode === o) {
      var c = gp(
        (o[wt] || null).action
      ), g = a.submitter;
      g && (t = (t = g[wt] || null) ? gp(t.formAction) : g.getAttribute("formAction"), t !== null && (c = t, g = null));
      var x = new ur(
        "action",
        "action",
        null,
        a,
        o
      );
      e.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (_l !== 0) {
                  var T = g ? yp(o, g) : new FormData(o);
                  Zo(
                    l,
                    {
                      pending: !0,
                      data: T,
                      method: o.method,
                      action: c
                    },
                    null,
                    T
                  );
                }
              } else
                typeof c == "function" && (x.preventDefault(), T = g ? yp(o, g) : new FormData(o), Zo(
                  l,
                  {
                    pending: !0,
                    data: T,
                    method: o.method,
                    action: c
                  },
                  c,
                  T
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Cs = 0; Cs < co.length; Cs++) {
    var _s = co[Cs], c0 = _s.toLowerCase(), f0 = _s[0].toUpperCase() + _s.slice(1);
    an(
      c0,
      "on" + f0
    );
  }
  an(If, "onAnimationEnd"), an(Pf, "onAnimationIteration"), an($f, "onAnimationStart"), an("dblclick", "onDoubleClick"), an("focusin", "onFocus"), an("focusout", "onBlur"), an(_b, "onTransitionRun"), an(Rb, "onTransitionStart"), an(Ob, "onTransitionCancel"), an(Wf, "onTransitionEnd"), ql("onMouseEnter", ["mouseout", "mouseover"]), ql("onMouseLeave", ["mouseout", "mouseover"]), ql("onPointerEnter", ["pointerout", "pointerover"]), ql("onPointerLeave", ["pointerout", "pointerover"]), dl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), dl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), dl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), dl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), dl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), dl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var xa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), d0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xa)
  );
  function bp(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], o = a.event;
      a = a.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var g = a.length - 1; 0 <= g; g--) {
            var x = a[g], T = x.instance, R = x.currentTarget;
            if (x = x.listener, T !== c && o.isPropagationStopped())
              break e;
            c = x, o.currentTarget = R;
            try {
              c(o);
            } catch (H) {
              Mr(H);
            }
            o.currentTarget = null, c = T;
          }
        else
          for (g = 0; g < a.length; g++) {
            if (x = a[g], T = x.instance, R = x.currentTarget, x = x.listener, T !== c && o.isPropagationStopped())
              break e;
            c = x, o.currentTarget = R;
            try {
              c(o);
            } catch (H) {
              Mr(H);
            }
            o.currentTarget = null, c = T;
          }
      }
    }
  }
  function ze(e, t) {
    var l = t[qu];
    l === void 0 && (l = t[qu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (vp(t, e, 2, !1), l.add(a));
  }
  function Rs(e, t, l) {
    var a = 0;
    t && (a |= 4), vp(
      l,
      e,
      a,
      t
    );
  }
  var Kr = "_reactListening" + Math.random().toString(36).slice(2);
  function Os(e) {
    if (!e[Kr]) {
      e[Kr] = !0, df.forEach(function(l) {
        l !== "selectionchange" && (d0.has(l) || Rs(l, !1, e), Rs(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Kr] || (t[Kr] = !0, Rs("selectionchange", !1, t));
    }
  }
  function vp(e, t, l, a) {
    switch (Gp(t)) {
      case 2:
        var o = H0;
        break;
      case 8:
        o = q0;
        break;
      default:
        o = Xs;
    }
    l = o.bind(
      null,
      t,
      l,
      e
    ), o = void 0, !Pu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), a ? o !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, l, !0) : o !== void 0 ? e.addEventListener(t, l, {
      passive: o
    }) : e.addEventListener(t, l, !1);
  }
  function zs(e, t, l, a, o) {
    var c = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var g = a.tag;
        if (g === 3 || g === 4) {
          var x = a.stateNode.containerInfo;
          if (x === o) break;
          if (g === 4)
            for (g = a.return; g !== null; ) {
              var T = g.tag;
              if ((T === 3 || T === 4) && g.stateNode.containerInfo === o)
                return;
              g = g.return;
            }
          for (; x !== null; ) {
            if (g = Ll(x), g === null) return;
            if (T = g.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              a = c = g;
              continue e;
            }
            x = x.parentNode;
          }
        }
        a = a.return;
      }
    kf(function() {
      var R = c, H = Ju(l), Y = [];
      e: {
        var z = ed.get(e);
        if (z !== void 0) {
          var M = ur, ye = e;
          switch (e) {
            case "keypress":
              if (ar(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = rb;
              break;
            case "focusin":
              ye = "focus", M = to;
              break;
            case "focusout":
              ye = "blur", M = to;
              break;
            case "beforeblur":
            case "afterblur":
              M = to;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = Rf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Fy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = sb;
              break;
            case If:
            case Pf:
            case $f:
              M = Py;
              break;
            case Wf:
              M = fb;
              break;
            case "scroll":
            case "scrollend":
              M = Zy;
              break;
            case "wheel":
              M = hb;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Wy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = zf;
              break;
            case "toggle":
            case "beforetoggle":
              M = mb;
          }
          var pe = (t & 4) !== 0, Ge = !pe && (e === "scroll" || e === "scrollend"), k = pe ? z !== null ? z + "Capture" : null : z;
          pe = [];
          for (var A = R, _; A !== null; ) {
            var V = A;
            if (_ = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || _ === null || k === null || (V = Hi(A, k), V != null && pe.push(
              Sa(A, V, _)
            )), Ge) break;
            A = A.return;
          }
          0 < pe.length && (z = new M(
            z,
            ye,
            null,
            l,
            H
          ), Y.push({ event: z, listeners: pe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", z && l !== Fu && (ye = l.relatedTarget || l.fromElement) && (Ll(ye) || ye[Bl]))
            break e;
          if ((M || z) && (z = H.window === H ? H : (z = H.ownerDocument) ? z.defaultView || z.parentWindow : window, M ? (ye = l.relatedTarget || l.toElement, M = R, ye = ye ? Ll(ye) : null, ye !== null && (Ge = f(ye), pe = ye.tag, ye !== Ge || pe !== 5 && pe !== 27 && pe !== 6) && (ye = null)) : (M = null, ye = R), M !== ye)) {
            if (pe = Rf, V = "onMouseLeave", k = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (pe = zf, V = "onPointerLeave", k = "onPointerEnter", A = "pointer"), Ge = M == null ? z : ji(M), _ = ye == null ? z : ji(ye), z = new pe(
              V,
              A + "leave",
              M,
              l,
              H
            ), z.target = Ge, z.relatedTarget = _, V = null, Ll(H) === R && (pe = new pe(
              k,
              A + "enter",
              ye,
              l,
              H
            ), pe.target = _, pe.relatedTarget = Ge, V = pe), Ge = V, M && ye)
              t: {
                for (pe = M, k = ye, A = 0, _ = pe; _; _ = yi(_))
                  A++;
                for (_ = 0, V = k; V; V = yi(V))
                  _++;
                for (; 0 < A - _; )
                  pe = yi(pe), A--;
                for (; 0 < _ - A; )
                  k = yi(k), _--;
                for (; A--; ) {
                  if (pe === k || k !== null && pe === k.alternate)
                    break t;
                  pe = yi(pe), k = yi(k);
                }
                pe = null;
              }
            else pe = null;
            M !== null && xp(
              Y,
              z,
              M,
              pe,
              !1
            ), ye !== null && Ge !== null && xp(
              Y,
              Ge,
              ye,
              pe,
              !0
            );
          }
        }
        e: {
          if (z = R ? ji(R) : window, M = z.nodeName && z.nodeName.toLowerCase(), M === "select" || M === "input" && z.type === "file")
            var oe = Hf;
          else if (Lf(z))
            if (qf)
              oe = Ab;
            else {
              oe = wb;
              var Re = Eb;
            }
          else
            M = z.nodeName, !M || M.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? R && Ku(R.elementType) && (oe = Hf) : oe = Tb;
          if (oe && (oe = oe(e, R))) {
            jf(
              Y,
              oe,
              l,
              H
            );
            break e;
          }
          Re && Re(e, z, R), e === "focusout" && R && z.type === "number" && R.memoizedProps.value != null && Zu(z, "number", z.value);
        }
        switch (Re = R ? ji(R) : window, e) {
          case "focusin":
            (Lf(Re) || Re.contentEditable === "true") && (Kl = Re, uo = R, Ki = null);
            break;
          case "focusout":
            Ki = uo = Kl = null;
            break;
          case "mousedown":
            oo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            oo = !1, Ff(Y, l, H);
            break;
          case "selectionchange":
            if (Cb) break;
          case "keydown":
          case "keyup":
            Ff(Y, l, H);
        }
        var fe;
        if (lo)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          Zl ? Uf(e, l) && (me = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (me = "onCompositionStart");
        me && (Nf && l.locale !== "ko" && (Zl || me !== "onCompositionStart" ? me === "onCompositionEnd" && Zl && (fe = Cf()) : (Vn = H, $u = "value" in Vn ? Vn.value : Vn.textContent, Zl = !0)), Re = Fr(R, me), 0 < Re.length && (me = new Of(
          me,
          e,
          null,
          l,
          H
        ), Y.push({ event: me, listeners: Re }), fe ? me.data = fe : (fe = Bf(l), fe !== null && (me.data = fe)))), (fe = yb ? bb(e, l) : vb(e, l)) && (me = Fr(R, "onBeforeInput"), 0 < me.length && (Re = new Of(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          H
        ), Y.push({
          event: Re,
          listeners: me
        }), Re.data = fe)), s0(
          Y,
          e,
          R,
          l,
          H
        );
      }
      bp(Y, t);
    });
  }
  function Sa(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Fr(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var o = e, c = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = Hi(e, l), o != null && a.unshift(
        Sa(e, o, c)
      ), o = Hi(e, t), o != null && a.push(
        Sa(e, o, c)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function yi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xp(e, t, l, a, o) {
    for (var c = t._reactName, g = []; l !== null && l !== a; ) {
      var x = l, T = x.alternate, R = x.stateNode;
      if (x = x.tag, T !== null && T === a) break;
      x !== 5 && x !== 26 && x !== 27 || R === null || (T = R, o ? (R = Hi(l, c), R != null && g.unshift(
        Sa(l, R, T)
      )) : o || (R = Hi(l, c), R != null && g.push(
        Sa(l, R, T)
      ))), l = l.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var h0 = /\r\n?/g, p0 = /\u0000|\uFFFD/g;
  function Sp(e) {
    return (typeof e == "string" ? e : "" + e).replace(h0, `
`).replace(p0, "");
  }
  function Ep(e, t) {
    return t = Sp(t), Sp(e) === t;
  }
  function Jr() {
  }
  function Ye(e, t, l, a, o, c) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Gl(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Gl(e, "" + a);
        break;
      case "className":
        er(e, "class", a);
        break;
      case "tabIndex":
        er(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        er(e, l, a);
        break;
      case "style":
        Tf(e, a, c);
        break;
      case "data":
        if (t !== "object") {
          er(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = lr("" + a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (l === "formAction" ? (t !== "input" && Ye(e, t, "name", o.name, o, null), Ye(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Ye(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Ye(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Ye(e, t, "encType", o.encType, o, null), Ye(e, t, "method", o.method, o, null), Ye(e, t, "target", o.target, o, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = lr("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Jr);
        break;
      case "onScroll":
        a != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ze("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(u(61));
          if (l = a.__html, l != null) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
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
          e.removeAttribute("xlink:href");
          break;
        }
        l = lr("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        ze("beforetoggle", e), ze("toggle", e), Wa(e, "popover", a);
        break;
      case "xlinkActuate":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Wa(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Xy.get(l) || l, Wa(e, l, a));
    }
  }
  function Ns(e, t, l, a, o, c) {
    switch (l) {
      case "style":
        Tf(e, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(u(61));
          if (l = a.__html, l != null) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Gl(e, a) : (typeof a == "number" || typeof a == "bigint") && Gl(e, "" + a);
        break;
      case "onScroll":
        a != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ze("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Jr);
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
        if (!hf.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (o = l.endsWith("Capture"), t = l.slice(2, o ? l.length - 7 : void 0), c = e[wt] || null, c = c != null ? c[l] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof a == "function")) {
              typeof c != "function" && c !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, o);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Wa(e, l, a);
          }
    }
  }
  function pt(e, t, l) {
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
        ze("error", e), ze("load", e);
        var a = !1, o = !1, c;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var g = l[c];
            if (g != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  Ye(e, t, c, g, l, null);
              }
          }
        o && Ye(e, t, "srcSet", l.srcSet, l, null), a && Ye(e, t, "src", l.src, l, null);
        return;
      case "input":
        ze("invalid", e);
        var x = c = g = o = null, T = null, R = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var H = l[a];
            if (H != null)
              switch (a) {
                case "name":
                  o = H;
                  break;
                case "type":
                  g = H;
                  break;
                case "checked":
                  T = H;
                  break;
                case "defaultChecked":
                  R = H;
                  break;
                case "value":
                  c = H;
                  break;
                case "defaultValue":
                  x = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(u(137, t));
                  break;
                default:
                  Ye(e, t, a, H, l, null);
              }
          }
        xf(
          e,
          c,
          x,
          T,
          R,
          g,
          o,
          !1
        ), tr(e);
        return;
      case "select":
        ze("invalid", e), a = g = c = null;
        for (o in l)
          if (l.hasOwnProperty(o) && (x = l[o], x != null))
            switch (o) {
              case "value":
                c = x;
                break;
              case "defaultValue":
                g = x;
                break;
              case "multiple":
                a = x;
              default:
                Ye(e, t, o, x, l, null);
            }
        t = c, l = g, e.multiple = !!a, t != null ? Yl(e, !!a, t, !1) : l != null && Yl(e, !!a, l, !0);
        return;
      case "textarea":
        ze("invalid", e), c = o = a = null;
        for (g in l)
          if (l.hasOwnProperty(g) && (x = l[g], x != null))
            switch (g) {
              case "value":
                a = x;
                break;
              case "defaultValue":
                o = x;
                break;
              case "children":
                c = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(u(91));
                break;
              default:
                Ye(e, t, g, x, l, null);
            }
        Ef(e, a, o, c), tr(e);
        return;
      case "option":
        for (T in l)
          if (l.hasOwnProperty(T) && (a = l[T], a != null))
            switch (T) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ye(e, t, T, a, l, null);
            }
        return;
      case "dialog":
        ze("beforetoggle", e), ze("toggle", e), ze("cancel", e), ze("close", e);
        break;
      case "iframe":
      case "object":
        ze("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < xa.length; a++)
          ze(xa[a], e);
        break;
      case "image":
        ze("error", e), ze("load", e);
        break;
      case "details":
        ze("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ze("error", e), ze("load", e);
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
        for (R in l)
          if (l.hasOwnProperty(R) && (a = l[R], a != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Ye(e, t, R, a, l, null);
            }
        return;
      default:
        if (Ku(t)) {
          for (H in l)
            l.hasOwnProperty(H) && (a = l[H], a !== void 0 && Ns(
              e,
              t,
              H,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (x in l)
      l.hasOwnProperty(x) && (a = l[x], a != null && Ye(e, t, x, a, l, null));
  }
  function m0(e, t, l, a) {
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
        var o = null, c = null, g = null, x = null, T = null, R = null, H = null;
        for (M in l) {
          var Y = l[M];
          if (l.hasOwnProperty(M) && Y != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = Y;
              default:
                a.hasOwnProperty(M) || Ye(e, t, M, null, a, Y);
            }
        }
        for (var z in a) {
          var M = a[z];
          if (Y = l[z], a.hasOwnProperty(z) && (M != null || Y != null))
            switch (z) {
              case "type":
                c = M;
                break;
              case "name":
                o = M;
                break;
              case "checked":
                R = M;
                break;
              case "defaultChecked":
                H = M;
                break;
              case "value":
                g = M;
                break;
              case "defaultValue":
                x = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(u(137, t));
                break;
              default:
                M !== Y && Ye(
                  e,
                  t,
                  z,
                  M,
                  a,
                  Y
                );
            }
        }
        Qu(
          e,
          g,
          x,
          T,
          R,
          H,
          c,
          o
        );
        return;
      case "select":
        M = g = x = z = null;
        for (c in l)
          if (T = l[c], l.hasOwnProperty(c) && T != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                M = T;
              default:
                a.hasOwnProperty(c) || Ye(
                  e,
                  t,
                  c,
                  null,
                  a,
                  T
                );
            }
        for (o in a)
          if (c = a[o], T = l[o], a.hasOwnProperty(o) && (c != null || T != null))
            switch (o) {
              case "value":
                z = c;
                break;
              case "defaultValue":
                x = c;
                break;
              case "multiple":
                g = c;
              default:
                c !== T && Ye(
                  e,
                  t,
                  o,
                  c,
                  a,
                  T
                );
            }
        t = x, l = g, a = M, z != null ? Yl(e, !!l, z, !1) : !!a != !!l && (t != null ? Yl(e, !!l, t, !0) : Yl(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = z = null;
        for (x in l)
          if (o = l[x], l.hasOwnProperty(x) && o != null && !a.hasOwnProperty(x))
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ye(e, t, x, null, a, o);
            }
        for (g in a)
          if (o = a[g], c = l[g], a.hasOwnProperty(g) && (o != null || c != null))
            switch (g) {
              case "value":
                z = o;
                break;
              case "defaultValue":
                M = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(u(91));
                break;
              default:
                o !== c && Ye(e, t, g, o, a, c);
            }
        Sf(e, z, M);
        return;
      case "option":
        for (var ye in l)
          if (z = l[ye], l.hasOwnProperty(ye) && z != null && !a.hasOwnProperty(ye))
            switch (ye) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ye(
                  e,
                  t,
                  ye,
                  null,
                  a,
                  z
                );
            }
        for (T in a)
          if (z = a[T], M = l[T], a.hasOwnProperty(T) && z !== M && (z != null || M != null))
            switch (T) {
              case "selected":
                e.selected = z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                Ye(
                  e,
                  t,
                  T,
                  z,
                  a,
                  M
                );
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
        for (var pe in l)
          z = l[pe], l.hasOwnProperty(pe) && z != null && !a.hasOwnProperty(pe) && Ye(e, t, pe, null, a, z);
        for (R in a)
          if (z = a[R], M = l[R], a.hasOwnProperty(R) && z !== M && (z != null || M != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(u(137, t));
                break;
              default:
                Ye(
                  e,
                  t,
                  R,
                  z,
                  a,
                  M
                );
            }
        return;
      default:
        if (Ku(t)) {
          for (var Ge in l)
            z = l[Ge], l.hasOwnProperty(Ge) && z !== void 0 && !a.hasOwnProperty(Ge) && Ns(
              e,
              t,
              Ge,
              void 0,
              a,
              z
            );
          for (H in a)
            z = a[H], M = l[H], !a.hasOwnProperty(H) || z === M || z === void 0 && M === void 0 || Ns(
              e,
              t,
              H,
              z,
              a,
              M
            );
          return;
        }
    }
    for (var k in l)
      z = l[k], l.hasOwnProperty(k) && z != null && !a.hasOwnProperty(k) && Ye(e, t, k, null, a, z);
    for (Y in a)
      z = a[Y], M = l[Y], !a.hasOwnProperty(Y) || z === M || z == null && M == null || Ye(e, t, Y, z, a, M);
  }
  var Ms = null, Ds = null;
  function Ir(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function wp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Tp(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Us(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Bs = null;
  function g0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Bs ? !1 : (Bs = e, !0) : (Bs = null, !1);
  }
  var Ap = typeof setTimeout == "function" ? setTimeout : void 0, y0 = typeof clearTimeout == "function" ? clearTimeout : void 0, kp = typeof Promise == "function" ? Promise : void 0, b0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof kp < "u" ? function(e) {
    return kp.resolve(null).then(e).catch(v0);
  } : Ap;
  function v0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ll(e) {
    return e === "head";
  }
  function Cp(e, t) {
    var l = t, a = 0, o = 0;
    do {
      var c = l.nextSibling;
      if (e.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (0 < a && 8 > a) {
            l = a;
            var g = e.ownerDocument;
            if (l & 1 && Ea(g.documentElement), l & 2 && Ea(g.body), l & 4)
              for (l = g.head, Ea(l), g = l.firstChild; g; ) {
                var x = g.nextSibling, T = g.nodeName;
                g[Li] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && g.rel.toLowerCase() === "stylesheet" || l.removeChild(g), g = x;
              }
          }
          if (o === 0) {
            e.removeChild(c), Oa(t);
            return;
          }
          o--;
        } else
          l === "$" || l === "$?" || l === "$!" ? o++ : a = l.charCodeAt(0) - 48;
      else a = 0;
      l = c;
    } while (l);
    Oa(t);
  }
  function Ls(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ls(l), Vu(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function x0(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var o = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Li])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (c !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = un(e.nextSibling), e === null) break;
    }
    return null;
  }
  function S0(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = un(e.nextSibling), e === null)) return null;
    return e;
  }
  function js(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function E0(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete")
      t();
    else {
      var a = function() {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function un(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Hs = null;
  function _p(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Rp(e, t, l) {
    switch (t = Ir(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function Ea(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Vu(e);
  }
  var tn = /* @__PURE__ */ new Map(), Op = /* @__PURE__ */ new Set();
  function Pr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Bn = Z.d;
  Z.d = {
    f: w0,
    r: T0,
    D: A0,
    C: k0,
    L: C0,
    m: _0,
    X: O0,
    S: R0,
    M: z0
  };
  function w0() {
    var e = Bn.f(), t = Yr();
    return e || t;
  }
  function T0(e) {
    var t = jl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Id(t) : Bn.r(e);
  }
  var bi = typeof document > "u" ? null : document;
  function zp(e, t, l) {
    var a = bi;
    if (a && typeof t == "string" && t) {
      var o = Ft(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof l == "string" && (o += '[crossorigin="' + l + '"]'), Op.has(o) || (Op.add(o), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(o) === null && (t = a.createElement("link"), pt(t, "link", e), ot(t), a.head.appendChild(t)));
    }
  }
  function A0(e) {
    Bn.D(e), zp("dns-prefetch", e, null);
  }
  function k0(e, t) {
    Bn.C(e, t), zp("preconnect", e, t);
  }
  function C0(e, t, l) {
    Bn.L(e, t, l);
    var a = bi;
    if (a && e && t) {
      var o = 'link[rel="preload"][as="' + Ft(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (o += '[imagesrcset="' + Ft(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (o += '[imagesizes="' + Ft(
        l.imageSizes
      ) + '"]')) : o += '[href="' + Ft(e) + '"]';
      var c = o;
      switch (t) {
        case "style":
          c = vi(e);
          break;
        case "script":
          c = xi(e);
      }
      tn.has(c) || (e = m(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), tn.set(c, e), a.querySelector(o) !== null || t === "style" && a.querySelector(wa(c)) || t === "script" && a.querySelector(Ta(c)) || (t = a.createElement("link"), pt(t, "link", e), ot(t), a.head.appendChild(t)));
    }
  }
  function _0(e, t) {
    Bn.m(e, t);
    var l = bi;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Ft(a) + '"][href="' + Ft(e) + '"]', c = o;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = xi(e);
      }
      if (!tn.has(c) && (e = m({ rel: "modulepreload", href: e }, t), tn.set(c, e), l.querySelector(o) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ta(c)))
              return;
        }
        a = l.createElement("link"), pt(a, "link", e), ot(a), l.head.appendChild(a);
      }
    }
  }
  function R0(e, t, l) {
    Bn.S(e, t, l);
    var a = bi;
    if (a && e) {
      var o = Hl(a).hoistableStyles, c = vi(e);
      t = t || "default";
      var g = o.get(c);
      if (!g) {
        var x = { loading: 0, preload: null };
        if (g = a.querySelector(
          wa(c)
        ))
          x.loading = 5;
        else {
          e = m(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = tn.get(c)) && qs(e, l);
          var T = g = a.createElement("link");
          ot(T), pt(T, "link", e), T._p = new Promise(function(R, H) {
            T.onload = R, T.onerror = H;
          }), T.addEventListener("load", function() {
            x.loading |= 1;
          }), T.addEventListener("error", function() {
            x.loading |= 2;
          }), x.loading |= 4, $r(g, t, a);
        }
        g = {
          type: "stylesheet",
          instance: g,
          count: 1,
          state: x
        }, o.set(c, g);
      }
    }
  }
  function O0(e, t) {
    Bn.X(e, t);
    var l = bi;
    if (l && e) {
      var a = Hl(l).hoistableScripts, o = xi(e), c = a.get(o);
      c || (c = l.querySelector(Ta(o)), c || (e = m({ src: e, async: !0 }, t), (t = tn.get(o)) && Vs(e, t), c = l.createElement("script"), ot(c), pt(c, "link", e), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, a.set(o, c));
    }
  }
  function z0(e, t) {
    Bn.M(e, t);
    var l = bi;
    if (l && e) {
      var a = Hl(l).hoistableScripts, o = xi(e), c = a.get(o);
      c || (c = l.querySelector(Ta(o)), c || (e = m({ src: e, async: !0, type: "module" }, t), (t = tn.get(o)) && Vs(e, t), c = l.createElement("script"), ot(c), pt(c, "link", e), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, a.set(o, c));
    }
  }
  function Np(e, t, l, a) {
    var o = (o = ue.current) ? Pr(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = vi(l.href), l = Hl(
          o
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = vi(l.href);
          var c = Hl(
            o
          ).hoistableStyles, g = c.get(e);
          if (g || (o = o.ownerDocument || o, g = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, g), (c = o.querySelector(
            wa(e)
          )) && !c._p && (g.instance = c, g.state.loading = 5), tn.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, tn.set(e, l), c || N0(
            o,
            e,
            l,
            g.state
          ))), t && a === null)
            throw Error(u(528, ""));
          return g;
        }
        if (t && a !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = xi(l), l = Hl(
          o
        ).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function vi(e) {
    return 'href="' + Ft(e) + '"';
  }
  function wa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Mp(e) {
    return m({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function N0(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), pt(t, "link", l), ot(t), e.head.appendChild(t));
  }
  function xi(e) {
    return '[src="' + Ft(e) + '"]';
  }
  function Ta(e) {
    return "script[async]" + e;
  }
  function Dp(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Ft(l.href) + '"]'
          );
          if (a)
            return t.instance = a, ot(a), a;
          var o = m({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), ot(a), pt(a, "style", o), $r(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          o = vi(l.href);
          var c = e.querySelector(
            wa(o)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ot(c), c;
          a = Mp(l), (o = tn.get(o)) && qs(a, o), c = (e.ownerDocument || e).createElement("link"), ot(c);
          var g = c;
          return g._p = new Promise(function(x, T) {
            g.onload = x, g.onerror = T;
          }), pt(c, "link", a), t.state.loading |= 4, $r(c, l.precedence, e), t.instance = c;
        case "script":
          return c = xi(l.src), (o = e.querySelector(
            Ta(c)
          )) ? (t.instance = o, ot(o), o) : (a = l, (o = tn.get(c)) && (a = m({}, l), Vs(a, o)), e = e.ownerDocument || e, o = e.createElement("script"), ot(o), pt(o, "link", a), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, $r(a, l.precedence, e));
    return t.instance;
  }
  function $r(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = a.length ? a[a.length - 1] : null, c = o, g = 0; g < a.length; g++) {
      var x = a[g];
      if (x.dataset.precedence === t) c = x;
      else if (c !== o) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function qs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Vs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Wr = null;
  function Up(e, t, l) {
    if (Wr === null) {
      var a = /* @__PURE__ */ new Map(), o = Wr = /* @__PURE__ */ new Map();
      o.set(l, a);
    } else
      o = Wr, a = o.get(l), a || (a = /* @__PURE__ */ new Map(), o.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), o = 0; o < l.length; o++) {
      var c = l[o];
      if (!(c[Li] || c[mt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = c.getAttribute(t) || "";
        g = e + g;
        var x = a.get(g);
        x ? x.push(c) : a.set(g, [c]);
      }
    }
    return a;
  }
  function Bp(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function M0(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Lp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Aa = null;
  function D0() {
  }
  function U0(e, t, l) {
    if (Aa === null) throw Error(u(475));
    var a = Aa;
    if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var o = vi(l.href), c = e.querySelector(
          wa(o)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = eu.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = c, ot(c);
          return;
        }
        c = e.ownerDocument || e, l = Mp(l), (o = tn.get(o)) && qs(l, o), c = c.createElement("link"), ot(c);
        var g = c;
        g._p = new Promise(function(x, T) {
          g.onload = x, g.onerror = T;
        }), pt(c, "link", l), t.instance = c;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = eu.bind(a), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function B0() {
    if (Aa === null) throw Error(u(475));
    var e = Aa;
    return e.stylesheets && e.count === 0 && Ys(e, e.stylesheets), 0 < e.count ? function(t) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ys(e, e.stylesheets), e.unsuspend) {
          var a = e.unsuspend;
          e.unsuspend = null, a();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function eu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ys(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var tu = null;
  function Ys(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, tu = /* @__PURE__ */ new Map(), t.forEach(L0, e), tu = null, eu.call(e));
  }
  function L0(e, t) {
    if (!(t.state.loading & 4)) {
      var l = tu.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), tu.set(e, l);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < o.length; c++) {
          var g = o[c];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (l.set(g.dataset.precedence, g), a = g);
        }
        a && l.set(null, a);
      }
      o = t.instance, g = o.getAttribute("data-precedence"), c = l.get(g) || a, c === a && l.set(null, o), l.set(g, o), this.count++, a = eu.bind(this), o.addEventListener("load", a), o.addEventListener("error", a), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ka = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };
  function j0(e, t, l, a, o, c, g, x) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Lu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Lu(0), this.hiddenUpdates = Lu(null), this.identifierPrefix = a, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jp(e, t, l, a, o, c, g, x, T, R, H, Y) {
    return e = new j0(
      e,
      t,
      l,
      g,
      x,
      T,
      R,
      Y
    ), t = 1, c === !0 && (t |= 24), c = jt(3, null, null, t), e.current = c, c.stateNode = e, t = wo(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Co(c), e;
  }
  function Hp(e) {
    return e ? (e = Pl, e) : Pl;
  }
  function qp(e, t, l, a, o, c) {
    o = Hp(o), a.context === null ? a.context = o : a.pendingContext = o, a = Xn(t), a.payload = { element: l }, c = c === void 0 ? null : c, c !== null && (a.callback = c), l = Qn(e, a, t), l !== null && (Gt(l, e, t), na(l, e, t));
  }
  function Vp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Gs(e, t) {
    Vp(e, t), (e = e.alternate) && Vp(e, t);
  }
  function Yp(e) {
    if (e.tag === 13) {
      var t = Il(e, 67108864);
      t !== null && Gt(t, e, 67108864), Gs(e, 67108864);
    }
  }
  var nu = !0;
  function H0(e, t, l, a) {
    var o = N.T;
    N.T = null;
    var c = Z.p;
    try {
      Z.p = 2, Xs(e, t, l, a);
    } finally {
      Z.p = c, N.T = o;
    }
  }
  function q0(e, t, l, a) {
    var o = N.T;
    N.T = null;
    var c = Z.p;
    try {
      Z.p = 8, Xs(e, t, l, a);
    } finally {
      Z.p = c, N.T = o;
    }
  }
  function Xs(e, t, l, a) {
    if (nu) {
      var o = Qs(a);
      if (o === null)
        zs(
          e,
          t,
          a,
          lu,
          l
        ), Xp(e, a);
      else if (Y0(
        o,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (Xp(e, a), t & 4 && -1 < V0.indexOf(e)) {
        for (; o !== null; ) {
          var c = jl(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var g = Bt(c.pendingLanes);
                  if (g !== 0) {
                    var x = c;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; g; ) {
                      var T = 1 << 31 - ge(g);
                      x.entanglements[1] |= T, g &= ~T;
                    }
                    mn(c), (He & 6) === 0 && (qr = Dt() + 500, va(0));
                  }
                }
                break;
              case 13:
                x = Il(c, 2), x !== null && Gt(x, c, 2), Yr(), Gs(c, 2);
            }
          if (c = Qs(a), c === null && zs(
            e,
            t,
            a,
            lu,
            l
          ), c === o) break;
          o = c;
        }
        o !== null && a.stopPropagation();
      } else
        zs(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function Qs(e) {
    return e = Ju(e), Zs(e);
  }
  var lu = null;
  function Zs(e) {
    if (lu = null, e = Ll(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return lu = e, null;
  }
  function Gp(e) {
    switch (e) {
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
        switch (Mu()) {
          case Di:
            return 2;
          case Ui:
            return 8;
          case Ul:
          case Du:
            return 32;
          case $a:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ks = !1, il = null, al = null, rl = null, Ca = /* @__PURE__ */ new Map(), _a = /* @__PURE__ */ new Map(), ul = [], V0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Xp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        il = null;
        break;
      case "dragenter":
      case "dragleave":
        al = null;
        break;
      case "mouseover":
      case "mouseout":
        rl = null;
        break;
      case "pointerover":
      case "pointerout":
        Ca.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _a.delete(t.pointerId);
    }
  }
  function Ra(e, t, l, a, o, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: c,
      targetContainers: [o]
    }, t !== null && (t = jl(t), t !== null && Yp(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Y0(e, t, l, a, o) {
    switch (t) {
      case "focusin":
        return il = Ra(
          il,
          e,
          t,
          l,
          a,
          o
        ), !0;
      case "dragenter":
        return al = Ra(
          al,
          e,
          t,
          l,
          a,
          o
        ), !0;
      case "mouseover":
        return rl = Ra(
          rl,
          e,
          t,
          l,
          a,
          o
        ), !0;
      case "pointerover":
        var c = o.pointerId;
        return Ca.set(
          c,
          Ra(
            Ca.get(c) || null,
            e,
            t,
            l,
            a,
            o
          )
        ), !0;
      case "gotpointercapture":
        return c = o.pointerId, _a.set(
          c,
          Ra(
            _a.get(c) || null,
            e,
            t,
            l,
            a,
            o
          )
        ), !0;
    }
    return !1;
  }
  function Qp(e) {
    var t = Ll(e.target);
    if (t !== null) {
      var l = f(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = d(l), t !== null) {
            e.blockedOn = t, Uy(e.priority, function() {
              if (l.tag === 13) {
                var a = Yt();
                a = ju(a);
                var o = Il(l, a);
                o !== null && Gt(o, l, a), Gs(l, a);
              }
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function iu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Qs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Fu = a, l.target.dispatchEvent(a), Fu = null;
      } else
        return t = jl(l), t !== null && Yp(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Zp(e, t, l) {
    iu(e) && l.delete(t);
  }
  function G0() {
    Ks = !1, il !== null && iu(il) && (il = null), al !== null && iu(al) && (al = null), rl !== null && iu(rl) && (rl = null), Ca.forEach(Zp), _a.forEach(Zp);
  }
  function au(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ks || (Ks = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      G0
    )));
  }
  var ru = null;
  function Kp(e) {
    ru !== e && (ru = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        ru === e && (ru = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], o = e[t + 2];
          if (typeof a != "function") {
            if (Zs(a || l) === null)
              continue;
            break;
          }
          var c = jl(l);
          c !== null && (e.splice(t, 3), t -= 3, Zo(
            c,
            {
              pending: !0,
              data: o,
              method: l.method,
              action: a
            },
            a,
            o
          ));
        }
      }
    ));
  }
  function Oa(e) {
    function t(T) {
      return au(T, e);
    }
    il !== null && au(il, e), al !== null && au(al, e), rl !== null && au(rl, e), Ca.forEach(t), _a.forEach(t);
    for (var l = 0; l < ul.length; l++) {
      var a = ul[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ul.length && (l = ul[0], l.blockedOn === null); )
      Qp(l), l.blockedOn === null && ul.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var o = l[a], c = l[a + 1], g = o[wt] || null;
        if (typeof c == "function")
          g || Kp(l);
        else if (g) {
          var x = null;
          if (c && c.hasAttribute("formAction")) {
            if (o = c, g = c[wt] || null)
              x = g.formAction;
            else if (Zs(o) !== null) continue;
          } else x = g.action;
          typeof x == "function" ? l[a + 1] = x : (l.splice(a, 3), a -= 3), Kp(l);
        }
      }
  }
  function Fs(e) {
    this._internalRoot = e;
  }
  uu.prototype.render = Fs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var l = t.current, a = Yt();
    qp(l, a, e, t, null, null);
  }, uu.prototype.unmount = Fs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      qp(e.current, 2, null, e, null, null), Yr(), t[Bl] = null;
    }
  };
  function uu(e) {
    this._internalRoot = e;
  }
  uu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = cf();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ul.length && t !== 0 && t < ul[l].priority; l++) ;
      ul.splice(l, 0, e), l === 0 && Qp(e);
    }
  };
  var Fp = i.version;
  if (Fp !== "19.1.0")
    throw Error(
      u(
        527,
        Fp,
        "19.1.0"
      )
    );
  Z.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = y(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var X0 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ou.isDisabled && ou.supportsFiber)
      try {
        j = ou.inject(
          X0
        ), K = ou;
      } catch {
      }
  }
  return Na.createRoot = function(e, t) {
    if (!s(e)) throw Error(u(299));
    var l = !1, a = "", o = ch, c = fh, g = dh, x = null;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (x = t.unstable_transitionCallbacks)), t = jp(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      o,
      c,
      g,
      x,
      null
    ), e[Bl] = t.current, Os(e), new Fs(t);
  }, Na.hydrateRoot = function(e, t, l) {
    if (!s(e)) throw Error(u(299));
    var a = !1, o = "", c = ch, g = fh, x = dh, T = null, R = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (o = l.identifierPrefix), l.onUncaughtError !== void 0 && (c = l.onUncaughtError), l.onCaughtError !== void 0 && (g = l.onCaughtError), l.onRecoverableError !== void 0 && (x = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (T = l.unstable_transitionCallbacks), l.formState !== void 0 && (R = l.formState)), t = jp(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      o,
      c,
      g,
      x,
      T,
      R
    ), t.context = Hp(null), l = t.current, a = Yt(), a = ju(a), o = Xn(a), o.callback = null, Qn(l, o, a), l = a, t.current.lanes = l, Bi(t, l), mn(t), e[Bl] = t.current, Os(e), new uu(t);
  }, Na.version = "19.1.0", Na;
}
var im;
function e1() {
  if (im) return Ps.exports;
  im = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Ps.exports = W0(), Ps.exports;
}
var t1 = e1();
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), l1 = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, r, u) => u ? u.toUpperCase() : r.toLowerCase()
), am = (n) => {
  const i = l1(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, dg = (...n) => n.filter((i, r, u) => !!i && i.trim() !== "" && u.indexOf(i) === r).join(" ").trim(), i1 = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var a1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = ve.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: u,
    className: s = "",
    children: f,
    iconNode: d,
    ...p
  }, y) => ve.createElement(
    "svg",
    {
      ref: y,
      ...a1,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: u ? Number(r) * 24 / Number(i) : r,
      className: dg("lucide", s),
      ...!f && !i1(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([h, m]) => ve.createElement(h, m)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = (n, i) => {
  const r = ve.forwardRef(
    ({ className: u, ...s }, f) => ve.createElement(r1, {
      ref: f,
      iconNode: i,
      className: dg(
        `lucide-${n1(am(n))}`,
        `lucide-${n}`,
        u
      ),
      ...s
    })
  );
  return r.displayName = am(n), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], hg = Hn("bot", u1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], s1 = Hn("chevron-down", o1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], qc = Hn("loader-circle", c1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], rm = Hn("message-circle", f1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], h1 = Hn("minimize-2", d1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], m1 = Hn("moon", p1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], y1 = Hn("send", g1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], v1 = Hn("sun", b1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], S1 = Hn("user", x1);
function pg(n) {
  var i, r, u = "";
  if (typeof n == "string" || typeof n == "number") u += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (i = 0; i < s; i++) n[i] && (r = pg(n[i])) && (u && (u += " "), u += r);
  } else for (r in n) n[r] && (u && (u += " "), u += r);
  return u;
}
function mg() {
  for (var n, i, r = 0, u = "", s = arguments.length; r < s; r++) (n = arguments[r]) && (i = pg(n)) && (u && (u += " "), u += i);
  return u;
}
const Vc = "-", E1 = (n) => {
  const i = T1(n), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: u
  } = n;
  return {
    getClassGroupId: (d) => {
      const p = d.split(Vc);
      return p[0] === "" && p.length !== 1 && p.shift(), gg(p, i) || w1(d);
    },
    getConflictingClassGroupIds: (d, p) => {
      const y = r[d] || [];
      return p && u[d] ? [...y, ...u[d]] : y;
    }
  };
}, gg = (n, i) => {
  if (n.length === 0)
    return i.classGroupId;
  const r = n[0], u = i.nextPart.get(r), s = u ? gg(n.slice(1), u) : void 0;
  if (s)
    return s;
  if (i.validators.length === 0)
    return;
  const f = n.join(Vc);
  return i.validators.find(({
    validator: d
  }) => d(f))?.classGroupId;
}, um = /^\[(.+)\]$/, w1 = (n) => {
  if (um.test(n)) {
    const i = um.exec(n)[1], r = i?.substring(0, i.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, T1 = (n) => {
  const {
    theme: i,
    classGroups: r
  } = n, u = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in r)
    vc(r[s], u, s, i);
  return u;
}, vc = (n, i, r, u) => {
  n.forEach((s) => {
    if (typeof s == "string") {
      const f = s === "" ? i : om(i, s);
      f.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (A1(s)) {
        vc(s(u), i, r, u);
        return;
      }
      i.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([f, d]) => {
      vc(d, om(i, f), r, u);
    });
  });
}, om = (n, i) => {
  let r = n;
  return i.split(Vc).forEach((u) => {
    r.nextPart.has(u) || r.nextPart.set(u, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(u);
  }), r;
}, A1 = (n) => n.isThemeGetter, k1 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, r = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  const s = (f, d) => {
    r.set(f, d), i++, i > n && (i = 0, u = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let d = r.get(f);
      if (d !== void 0)
        return d;
      if ((d = u.get(f)) !== void 0)
        return s(f, d), d;
    },
    set(f, d) {
      r.has(f) ? r.set(f, d) : s(f, d);
    }
  };
}, xc = "!", Sc = ":", C1 = Sc.length, _1 = (n) => {
  const {
    prefix: i,
    experimentalParseClassName: r
  } = n;
  let u = (s) => {
    const f = [];
    let d = 0, p = 0, y = 0, h;
    for (let C = 0; C < s.length; C++) {
      let O = s[C];
      if (d === 0 && p === 0) {
        if (O === Sc) {
          f.push(s.slice(y, C)), y = C + C1;
          continue;
        }
        if (O === "/") {
          h = C;
          continue;
        }
      }
      O === "[" ? d++ : O === "]" ? d-- : O === "(" ? p++ : O === ")" && p--;
    }
    const m = f.length === 0 ? s : s.substring(y), v = R1(m), w = v !== m, S = h && h > y ? h - y : void 0;
    return {
      modifiers: f,
      hasImportantModifier: w,
      baseClassName: v,
      maybePostfixModifierPosition: S
    };
  };
  if (i) {
    const s = i + Sc, f = u;
    u = (d) => d.startsWith(s) ? f(d.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const s = u;
    u = (f) => r({
      className: f,
      parseClassName: s
    });
  }
  return u;
}, R1 = (n) => n.endsWith(xc) ? n.substring(0, n.length - 1) : n.startsWith(xc) ? n.substring(1) : n, O1 = (n) => {
  const i = Object.fromEntries(n.orderSensitiveModifiers.map((u) => [u, !0]));
  return (u) => {
    if (u.length <= 1)
      return u;
    const s = [];
    let f = [];
    return u.forEach((d) => {
      d[0] === "[" || i[d] ? (s.push(...f.sort(), d), f = []) : f.push(d);
    }), s.push(...f.sort()), s;
  };
}, z1 = (n) => ({
  cache: k1(n.cacheSize),
  parseClassName: _1(n),
  sortModifiers: O1(n),
  ...E1(n)
}), N1 = /\s+/, M1 = (n, i) => {
  const {
    parseClassName: r,
    getClassGroupId: u,
    getConflictingClassGroupIds: s,
    sortModifiers: f
  } = i, d = [], p = n.trim().split(N1);
  let y = "";
  for (let h = p.length - 1; h >= 0; h -= 1) {
    const m = p[h], {
      isExternal: v,
      modifiers: w,
      hasImportantModifier: S,
      baseClassName: C,
      maybePostfixModifierPosition: O
    } = r(m);
    if (v) {
      y = m + (y.length > 0 ? " " + y : y);
      continue;
    }
    let B = !!O, U = u(B ? C.substring(0, O) : C);
    if (!U) {
      if (!B) {
        y = m + (y.length > 0 ? " " + y : y);
        continue;
      }
      if (U = u(C), !U) {
        y = m + (y.length > 0 ? " " + y : y);
        continue;
      }
      B = !1;
    }
    const I = f(w).join(":"), Q = S ? I + xc : I, ne = Q + U;
    if (d.includes(ne))
      continue;
    d.push(ne);
    const $ = s(U, B);
    for (let L = 0; L < $.length; ++L) {
      const re = $[L];
      d.push(Q + re);
    }
    y = m + (y.length > 0 ? " " + y : y);
  }
  return y;
};
function D1() {
  let n = 0, i, r, u = "";
  for (; n < arguments.length; )
    (i = arguments[n++]) && (r = yg(i)) && (u && (u += " "), u += r);
  return u;
}
const yg = (n) => {
  if (typeof n == "string")
    return n;
  let i, r = "";
  for (let u = 0; u < n.length; u++)
    n[u] && (i = yg(n[u])) && (r && (r += " "), r += i);
  return r;
};
function U1(n, ...i) {
  let r, u, s, f = d;
  function d(y) {
    const h = i.reduce((m, v) => v(m), n());
    return r = z1(h), u = r.cache.get, s = r.cache.set, f = p, p(y);
  }
  function p(y) {
    const h = u(y);
    if (h)
      return h;
    const m = M1(y, r);
    return s(y, m), m;
  }
  return function() {
    return f(D1.apply(null, arguments));
  };
}
const rt = (n) => {
  const i = (r) => r[n] || [];
  return i.isThemeGetter = !0, i;
}, bg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, vg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, B1 = /^\d+\/\d+$/, L1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, j1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, H1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, q1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, V1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Si = (n) => B1.test(n), Ce = (n) => !!n && !Number.isNaN(Number(n)), sl = (n) => !!n && Number.isInteger(Number(n)), tc = (n) => n.endsWith("%") && Ce(n.slice(0, -1)), Ln = (n) => L1.test(n), Y1 = () => !0, G1 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  j1.test(n) && !H1.test(n)
), xg = () => !1, X1 = (n) => q1.test(n), Q1 = (n) => V1.test(n), Z1 = (n) => !se(n) && !ce(n), K1 = (n) => ki(n, wg, xg), se = (n) => bg.test(n), Rl = (n) => ki(n, Tg, G1), nc = (n) => ki(n, $1, Ce), sm = (n) => ki(n, Sg, xg), F1 = (n) => ki(n, Eg, Q1), su = (n) => ki(n, Ag, X1), ce = (n) => vg.test(n), Ma = (n) => Ci(n, Tg), J1 = (n) => Ci(n, W1), cm = (n) => Ci(n, Sg), I1 = (n) => Ci(n, wg), P1 = (n) => Ci(n, Eg), cu = (n) => Ci(n, Ag, !0), ki = (n, i, r) => {
  const u = bg.exec(n);
  return u ? u[1] ? i(u[1]) : r(u[2]) : !1;
}, Ci = (n, i, r = !1) => {
  const u = vg.exec(n);
  return u ? u[1] ? i(u[1]) : r : !1;
}, Sg = (n) => n === "position" || n === "percentage", Eg = (n) => n === "image" || n === "url", wg = (n) => n === "length" || n === "size" || n === "bg-size", Tg = (n) => n === "length", $1 = (n) => n === "number", W1 = (n) => n === "family-name", Ag = (n) => n === "shadow", ev = () => {
  const n = rt("color"), i = rt("font"), r = rt("text"), u = rt("font-weight"), s = rt("tracking"), f = rt("leading"), d = rt("breakpoint"), p = rt("container"), y = rt("spacing"), h = rt("radius"), m = rt("shadow"), v = rt("inset-shadow"), w = rt("text-shadow"), S = rt("drop-shadow"), C = rt("blur"), O = rt("perspective"), B = rt("aspect"), U = rt("ease"), I = rt("animate"), Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ne = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], $ = () => [...ne(), ce, se], L = () => ["auto", "hidden", "clip", "visible", "scroll"], re = () => ["auto", "contain", "none"], P = () => [ce, se, y], de = () => [Si, "full", "auto", ...P()], Te = () => [sl, "none", "subgrid", ce, se], ie = () => ["auto", {
    span: ["full", sl, ce, se]
  }, sl, ce, se], G = () => [sl, "auto", ce, se], ae = () => ["auto", "min", "max", "fr", ce, se], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], te = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], N = () => ["auto", ...P()], Z = () => [Si, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], X = () => [n, ce, se], Ae = () => [...ne(), cm, sm, {
    position: [ce, se]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], q = () => ["auto", "cover", "contain", I1, K1, {
    size: [ce, se]
  }], ee = () => [tc, Ma, Rl], E = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    ce,
    se
  ], le = () => ["", Ce, Ma, Rl], xe = () => ["solid", "dashed", "dotted", "double"], ue = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _e = () => [Ce, tc, cm, sm], Ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    C,
    ce,
    se
  ], et = () => ["none", Ce, ce, se], xt = () => ["none", Ce, ce, se], Mt = () => [Ce, ce, se], sn = () => [Si, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ln],
      breakpoint: [Ln],
      color: [Y1],
      container: [Ln],
      "drop-shadow": [Ln],
      ease: ["in", "out", "in-out"],
      font: [Z1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ln],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ln],
      shadow: [Ln],
      spacing: ["px", Ce],
      text: [Ln],
      "text-shadow": [Ln],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Si, se, ce, B]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ce, se, ce, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: $()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: re()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": re()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": re()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: de()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": de()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": de()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: de()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: de()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: de()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: de()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: de()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: de()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [sl, "auto", ce, se]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Si, "full", "auto", p, ...P()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Ce, Si, "auto", "initial", "none", se]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ce, ce, se]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ce, ce, se]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [sl, "first", "last", "none", ce, se]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Te()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ie()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Te()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ie()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ae()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ae()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: P()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": P()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": P()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...W(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...te(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...te()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...W()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...te(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...te(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": W()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...te(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...te()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: P()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: P()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: P()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: P()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: P()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: P()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: P()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: P()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: P()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: N()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: N()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: N()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: N()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: N()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: N()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: N()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: N()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: N()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": P()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": P()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Z()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...Z()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          p,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Z()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          p,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...Z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ma, Rl]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [u, ce, nc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", tc, se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [J1, se, i]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, ce, se]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ce, "none", ce, nc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...P()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce, se]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", ce, se]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: X()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: X()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...xe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ce, "from-font", "auto", ce, Rl]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: X()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ce, "auto", ce, se]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce, se]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ce, se]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Ae()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: b()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: q()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, sl, ce, se],
          radial: ["", ce, se],
          conic: [sl, ce, se]
        }, P1, F1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: X()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ee()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ee()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ee()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: X()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: X()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: X()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: E()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": E()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": E()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": E()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": E()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": E()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": E()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": E()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": E()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": E()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": E()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": E()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": E()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": E()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": E()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: le()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": le()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": le()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": le()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": le()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": le()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": le()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": le()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": le()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": le()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": le()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...xe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...xe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: X()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": X()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": X()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": X()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": X()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": X()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": X()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": X()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": X()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: X()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...xe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ce, ce, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ce, Ma, Rl]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: X()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          m,
          cu,
          su
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: X()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", v, cu, su]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": X()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: le()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: X()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ce, Rl]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": X()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": le()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": X()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, cu, su]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": X()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ce, ce, se]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ue(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ue()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Ce]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": _e()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": _e()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": X()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": X()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": _e()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": _e()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": X()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": X()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": _e()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": _e()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": X()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": X()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": _e()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": _e()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": X()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": X()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": _e()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": _e()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": X()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": X()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": _e()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": _e()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": X()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": X()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": _e()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": _e()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": X()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": X()
      }],
      "mask-image-radial": [{
        "mask-radial": [ce, se]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": _e()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": _e()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": X()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": X()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": ne()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ce]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": _e()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": _e()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": X()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": X()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Ae()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: b()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: q()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", ce, se]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ce,
          se
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ne()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ce, ce, se]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ce, ce, se]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          S,
          cu,
          su
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": X()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ce, ce, se]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ce, ce, se]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ce, ce, se]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ce, ce, se]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ce, ce, se]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ce,
          se
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ne()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ce, ce, se]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ce, ce, se]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ce, ce, se]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ce, ce, se]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ce, ce, se]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ce, ce, se]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ce, ce, se]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ce, ce, se]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": P()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": P()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": P()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ce, se]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Ce, "initial", ce, se]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", U, ce, se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ce, ce, se]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", I, ce, se]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [O, ce, se]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": $()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: et()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": et()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": et()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": et()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: xt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": xt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": xt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": xt()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Mt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Mt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Mt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ce, se, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: $()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: sn()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": sn()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": sn()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": sn()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: X()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: X()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce, se]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ce, se]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...X()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ce, Ma, Rl, nc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...X()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, tv = /* @__PURE__ */ U1(ev);
function bn(...n) {
  return tv(mg(n));
}
function kg(n, i = 20) {
  const r = n.replace("#", ""), u = parseInt(r.substr(0, 2), 16), s = parseInt(r.substr(2, 2), 16), f = parseInt(r.substr(4, 2), 16), d = i / 100, p = Math.max(0, Math.floor(u * (1 - d))), y = Math.max(0, Math.floor(s * (1 - d))), h = Math.max(0, Math.floor(f * (1 - d))), m = (v) => v.toString(16).padStart(2, "0");
  return `#${m(p)}${m(y)}${m(h)}`;
}
function nv(n, i) {
  const r = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const lv = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, iv = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, av = {};
function fm(n, i) {
  return (av.jsx ? iv : lv).test(n);
}
const rv = /[ \t\n\f\r]/g;
function uv(n) {
  return typeof n == "object" ? n.type === "text" ? dm(n.value) : !1 : dm(n);
}
function dm(n) {
  return n.replace(rv, "") === "";
}
class Za {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(i, r, u) {
    this.normal = r, this.property = i, u && (this.space = u);
  }
}
Za.prototype.normal = {};
Za.prototype.property = {};
Za.prototype.space = void 0;
function Cg(n, i) {
  const r = {}, u = {};
  for (const s of n)
    Object.assign(r, s.property), Object.assign(u, s.normal);
  return new Za(r, u, i);
}
function Ec(n) {
  return n.toLowerCase();
}
class Nt {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(i, r) {
    this.attribute = r, this.property = i;
  }
}
Nt.prototype.attribute = "";
Nt.prototype.booleanish = !1;
Nt.prototype.boolean = !1;
Nt.prototype.commaOrSpaceSeparated = !1;
Nt.prototype.commaSeparated = !1;
Nt.prototype.defined = !1;
Nt.prototype.mustUseProperty = !1;
Nt.prototype.number = !1;
Nt.prototype.overloadedBoolean = !1;
Nt.prototype.property = "";
Nt.prototype.spaceSeparated = !1;
Nt.prototype.space = void 0;
let ov = 0;
const we = Dl(), lt = Dl(), wc = Dl(), F = Dl(), Ze = Dl(), Ti = Dl(), Xt = Dl();
function Dl() {
  return 2 ** ++ov;
}
const Tc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: we,
  booleanish: lt,
  commaOrSpaceSeparated: Xt,
  commaSeparated: Ti,
  number: F,
  overloadedBoolean: wc,
  spaceSeparated: Ze
}, Symbol.toStringTag, { value: "Module" })), lc = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Tc)
);
class Yc extends Nt {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(i, r, u, s) {
    let f = -1;
    if (super(i, r), hm(this, "space", s), typeof u == "number")
      for (; ++f < lc.length; ) {
        const d = lc[f];
        hm(this, lc[f], (u & Tc[d]) === Tc[d]);
      }
  }
}
Yc.prototype.defined = !0;
function hm(n, i, r) {
  r && (n[i] = r);
}
function _i(n) {
  const i = {}, r = {};
  for (const [u, s] of Object.entries(n.properties)) {
    const f = new Yc(
      u,
      n.transform(n.attributes || {}, u),
      s,
      n.space
    );
    n.mustUseProperty && n.mustUseProperty.includes(u) && (f.mustUseProperty = !0), i[u] = f, r[Ec(u)] = u, r[Ec(f.attribute)] = u;
  }
  return new Za(i, r, n.space);
}
const _g = _i({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: lt,
    ariaAutoComplete: null,
    ariaBusy: lt,
    ariaChecked: lt,
    ariaColCount: F,
    ariaColIndex: F,
    ariaColSpan: F,
    ariaControls: Ze,
    ariaCurrent: null,
    ariaDescribedBy: Ze,
    ariaDetails: null,
    ariaDisabled: lt,
    ariaDropEffect: Ze,
    ariaErrorMessage: null,
    ariaExpanded: lt,
    ariaFlowTo: Ze,
    ariaGrabbed: lt,
    ariaHasPopup: null,
    ariaHidden: lt,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Ze,
    ariaLevel: F,
    ariaLive: null,
    ariaModal: lt,
    ariaMultiLine: lt,
    ariaMultiSelectable: lt,
    ariaOrientation: null,
    ariaOwns: Ze,
    ariaPlaceholder: null,
    ariaPosInSet: F,
    ariaPressed: lt,
    ariaReadOnly: lt,
    ariaRelevant: null,
    ariaRequired: lt,
    ariaRoleDescription: Ze,
    ariaRowCount: F,
    ariaRowIndex: F,
    ariaRowSpan: F,
    ariaSelected: lt,
    ariaSetSize: F,
    ariaSort: null,
    ariaValueMax: F,
    ariaValueMin: F,
    ariaValueNow: F,
    ariaValueText: null,
    role: null
  },
  transform(n, i) {
    return i === "role" ? i : "aria-" + i.slice(4).toLowerCase();
  }
});
function Rg(n, i) {
  return i in n ? n[i] : i;
}
function Og(n, i) {
  return Rg(n, i.toLowerCase());
}
const sv = _i({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Ti,
    acceptCharset: Ze,
    accessKey: Ze,
    action: null,
    allow: null,
    allowFullScreen: we,
    allowPaymentRequest: we,
    allowUserMedia: we,
    alt: null,
    as: null,
    async: we,
    autoCapitalize: null,
    autoComplete: Ze,
    autoFocus: we,
    autoPlay: we,
    blocking: Ze,
    capture: null,
    charSet: null,
    checked: we,
    cite: null,
    className: Ze,
    cols: F,
    colSpan: null,
    content: null,
    contentEditable: lt,
    controls: we,
    controlsList: Ze,
    coords: F | Ti,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: we,
    defer: we,
    dir: null,
    dirName: null,
    disabled: we,
    download: wc,
    draggable: lt,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: we,
    formTarget: null,
    headers: Ze,
    height: F,
    hidden: wc,
    high: F,
    href: null,
    hrefLang: null,
    htmlFor: Ze,
    httpEquiv: Ze,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: we,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: we,
    itemId: null,
    itemProp: Ze,
    itemRef: Ze,
    itemScope: we,
    itemType: Ze,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: we,
    low: F,
    manifest: null,
    max: null,
    maxLength: F,
    media: null,
    method: null,
    min: null,
    minLength: F,
    multiple: we,
    muted: we,
    name: null,
    nonce: null,
    noModule: we,
    noValidate: we,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: we,
    optimum: F,
    pattern: null,
    ping: Ze,
    placeholder: null,
    playsInline: we,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: we,
    referrerPolicy: null,
    rel: Ze,
    required: we,
    reversed: we,
    rows: F,
    rowSpan: F,
    sandbox: Ze,
    scope: null,
    scoped: we,
    seamless: we,
    selected: we,
    shadowRootClonable: we,
    shadowRootDelegatesFocus: we,
    shadowRootMode: null,
    shape: null,
    size: F,
    sizes: null,
    slot: null,
    span: F,
    spellCheck: lt,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: F,
    step: null,
    style: null,
    tabIndex: F,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: we,
    useMap: null,
    value: lt,
    width: F,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Ze,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: F,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: F,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: we,
    // Lists. Use CSS to reduce space between items instead
    declare: we,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: F,
    // `<img>` and `<object>`
    leftMargin: F,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: F,
    // `<body>`
    marginWidth: F,
    // `<body>`
    noResize: we,
    // `<frame>`
    noHref: we,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: we,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: we,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: F,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: lt,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: F,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: F,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: we,
    disableRemotePlayback: we,
    prefix: null,
    property: null,
    results: F,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Og
}), cv = _i({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Xt,
    accentHeight: F,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: F,
    amplitude: F,
    arabicForm: null,
    ascent: F,
    attributeName: null,
    attributeType: null,
    azimuth: F,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: F,
    by: null,
    calcMode: null,
    capHeight: F,
    className: Ze,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: F,
    diffuseConstant: F,
    direction: null,
    display: null,
    dur: null,
    divisor: F,
    dominantBaseline: null,
    download: we,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: F,
    enableBackground: null,
    end: null,
    event: null,
    exponent: F,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: F,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Ti,
    g2: Ti,
    glyphName: Ti,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: F,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: F,
    horizOriginX: F,
    horizOriginY: F,
    id: null,
    ideographic: F,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: F,
    k: F,
    k1: F,
    k2: F,
    k3: F,
    k4: F,
    kernelMatrix: Xt,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: F,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: F,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: F,
    overlineThickness: F,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: F,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Ze,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: F,
    pointsAtY: F,
    pointsAtZ: F,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Xt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Xt,
    rev: Xt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Xt,
    requiredFeatures: Xt,
    requiredFonts: Xt,
    requiredFormats: Xt,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: F,
    specularExponent: F,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: F,
    strikethroughThickness: F,
    string: null,
    stroke: null,
    strokeDashArray: Xt,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: F,
    strokeOpacity: F,
    strokeWidth: null,
    style: null,
    surfaceScale: F,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Xt,
    tabIndex: F,
    tableValues: null,
    target: null,
    targetX: F,
    targetY: F,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Xt,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: F,
    underlineThickness: F,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: F,
    values: null,
    vAlphabetic: F,
    vMathematical: F,
    vectorEffect: null,
    vHanging: F,
    vIdeographic: F,
    version: null,
    vertAdvY: F,
    vertOriginX: F,
    vertOriginY: F,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: F,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Rg
}), zg = _i({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(n, i) {
    return "xlink:" + i.slice(5).toLowerCase();
  }
}), Ng = _i({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Og
}), Mg = _i({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(n, i) {
    return "xml:" + i.slice(3).toLowerCase();
  }
}), fv = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, dv = /[A-Z]/g, pm = /-[a-z]/g, hv = /^data[-\w.:]+$/i;
function pv(n, i) {
  const r = Ec(i);
  let u = i, s = Nt;
  if (r in n.normal)
    return n.property[n.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && hv.test(i)) {
    if (i.charAt(4) === "-") {
      const f = i.slice(5).replace(pm, gv);
      u = "data" + f.charAt(0).toUpperCase() + f.slice(1);
    } else {
      const f = i.slice(4);
      if (!pm.test(f)) {
        let d = f.replace(dv, mv);
        d.charAt(0) !== "-" && (d = "-" + d), i = "data" + d;
      }
    }
    s = Yc;
  }
  return new s(u, i);
}
function mv(n) {
  return "-" + n.toLowerCase();
}
function gv(n) {
  return n.charAt(1).toUpperCase();
}
const yv = Cg([_g, sv, zg, Ng, Mg], "html"), Gc = Cg([_g, cv, zg, Ng, Mg], "svg");
function bv(n) {
  return n.join(" ").trim();
}
var Ei = {}, ic, mm;
function vv() {
  if (mm) return ic;
  mm = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, r = /^\s*/, u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, f = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, d = /^[;\s]*/, p = /^\s+|\s+$/g, y = `
`, h = "/", m = "*", v = "", w = "comment", S = "declaration";
  ic = function(O, B) {
    if (typeof O != "string")
      throw new TypeError("First argument must be a string");
    if (!O) return [];
    B = B || {};
    var U = 1, I = 1;
    function Q(ae) {
      var W = ae.match(i);
      W && (U += W.length);
      var te = ae.lastIndexOf(y);
      I = ~te ? ae.length - te : I + ae.length;
    }
    function ne() {
      var ae = { line: U, column: I };
      return function(W) {
        return W.position = new $(ae), P(), W;
      };
    }
    function $(ae) {
      this.start = ae, this.end = { line: U, column: I }, this.source = B.source;
    }
    $.prototype.content = O;
    function L(ae) {
      var W = new Error(
        B.source + ":" + U + ":" + I + ": " + ae
      );
      if (W.reason = ae, W.filename = B.source, W.line = U, W.column = I, W.source = O, !B.silent) throw W;
    }
    function re(ae) {
      var W = ae.exec(O);
      if (W) {
        var te = W[0];
        return Q(te), O = O.slice(te.length), W;
      }
    }
    function P() {
      re(r);
    }
    function de(ae) {
      var W;
      for (ae = ae || []; W = Te(); )
        W !== !1 && ae.push(W);
      return ae;
    }
    function Te() {
      var ae = ne();
      if (!(h != O.charAt(0) || m != O.charAt(1))) {
        for (var W = 2; v != O.charAt(W) && (m != O.charAt(W) || h != O.charAt(W + 1)); )
          ++W;
        if (W += 2, v === O.charAt(W - 1))
          return L("End of comment missing");
        var te = O.slice(2, W - 2);
        return I += 2, Q(te), O = O.slice(W), I += 2, ae({
          type: w,
          comment: te
        });
      }
    }
    function ie() {
      var ae = ne(), W = re(u);
      if (W) {
        if (Te(), !re(s)) return L("property missing ':'");
        var te = re(f), N = ae({
          type: S,
          property: C(W[0].replace(n, v)),
          value: te ? C(te[0].replace(n, v)) : v
        });
        return re(d), N;
      }
    }
    function G() {
      var ae = [];
      de(ae);
      for (var W; W = ie(); )
        W !== !1 && (ae.push(W), de(ae));
      return ae;
    }
    return P(), G();
  };
  function C(O) {
    return O ? O.replace(p, v) : v;
  }
  return ic;
}
var gm;
function xv() {
  if (gm) return Ei;
  gm = 1;
  var n = Ei && Ei.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(Ei, "__esModule", { value: !0 }), Ei.default = r;
  var i = n(vv());
  function r(u, s) {
    var f = null;
    if (!u || typeof u != "string")
      return f;
    var d = (0, i.default)(u), p = typeof s == "function";
    return d.forEach(function(y) {
      if (y.type === "declaration") {
        var h = y.property, m = y.value;
        p ? s(h, m, y) : m && (f = f || {}, f[h] = m);
      }
    }), f;
  }
  return Ei;
}
var Da = {}, ym;
function Sv() {
  if (ym) return Da;
  ym = 1, Object.defineProperty(Da, "__esModule", { value: !0 }), Da.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, r = /^[^-]+$/, u = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, f = function(h) {
    return !h || r.test(h) || n.test(h);
  }, d = function(h, m) {
    return m.toUpperCase();
  }, p = function(h, m) {
    return "".concat(m, "-");
  }, y = function(h, m) {
    return m === void 0 && (m = {}), f(h) ? h : (h = h.toLowerCase(), m.reactCompat ? h = h.replace(s, p) : h = h.replace(u, p), h.replace(i, d));
  };
  return Da.camelCase = y, Da;
}
var Ua, bm;
function Ev() {
  if (bm) return Ua;
  bm = 1;
  var n = Ua && Ua.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, i = n(xv()), r = Sv();
  function u(s, f) {
    var d = {};
    return !s || typeof s != "string" || (0, i.default)(s, function(p, y) {
      p && y && (d[(0, r.camelCase)(p, f)] = y);
    }), d;
  }
  return u.default = u, Ua = u, Ua;
}
var wv = Ev();
const Tv = /* @__PURE__ */ jc(wv), Dg = Ug("end"), Xc = Ug("start");
function Ug(n) {
  return i;
  function i(r) {
    const u = r && r.position && r.position[n] || {};
    if (typeof u.line == "number" && u.line > 0 && typeof u.column == "number" && u.column > 0)
      return {
        line: u.line,
        column: u.column,
        offset: typeof u.offset == "number" && u.offset > -1 ? u.offset : void 0
      };
  }
}
function Av(n) {
  const i = Xc(n), r = Dg(n);
  if (i && r)
    return { start: i, end: r };
}
function qa(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? vm(n.position) : "start" in n || "end" in n ? vm(n) : "line" in n || "column" in n ? Ac(n) : "";
}
function Ac(n) {
  return xm(n && n.line) + ":" + xm(n && n.column);
}
function vm(n) {
  return Ac(n && n.start) + "-" + Ac(n && n.end);
}
function xm(n) {
  return n && typeof n == "number" ? n : 1;
}
class vt extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(i, r, u) {
    super(), typeof r == "string" && (u = r, r = void 0);
    let s = "", f = {}, d = !1;
    if (r && ("line" in r && "column" in r ? f = { place: r } : "start" in r && "end" in r ? f = { place: r } : "type" in r ? f = {
      ancestors: [r],
      place: r.position
    } : f = { ...r }), typeof i == "string" ? s = i : !f.cause && i && (d = !0, s = i.message, f.cause = i), !f.ruleId && !f.source && typeof u == "string") {
      const y = u.indexOf(":");
      y === -1 ? f.ruleId = u : (f.source = u.slice(0, y), f.ruleId = u.slice(y + 1));
    }
    if (!f.place && f.ancestors && f.ancestors) {
      const y = f.ancestors[f.ancestors.length - 1];
      y && (f.place = y.position);
    }
    const p = f.place && "start" in f.place ? f.place.start : f.place;
    this.ancestors = f.ancestors || void 0, this.cause = f.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file, this.message = s, this.line = p ? p.line : void 0, this.name = qa(f.place) || "1:1", this.place = f.place || void 0, this.reason = this.message, this.ruleId = f.ruleId || void 0, this.source = f.source || void 0, this.stack = d && f.cause && typeof f.cause.stack == "string" ? f.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
vt.prototype.file = "";
vt.prototype.name = "";
vt.prototype.reason = "";
vt.prototype.message = "";
vt.prototype.stack = "";
vt.prototype.column = void 0;
vt.prototype.line = void 0;
vt.prototype.ancestors = void 0;
vt.prototype.cause = void 0;
vt.prototype.fatal = void 0;
vt.prototype.place = void 0;
vt.prototype.ruleId = void 0;
vt.prototype.source = void 0;
const Qc = {}.hasOwnProperty, kv = /* @__PURE__ */ new Map(), Cv = /[A-Z]/g, _v = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Rv = /* @__PURE__ */ new Set(["td", "th"]), Bg = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Ov(n, i) {
  if (!i || i.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = i.filePath || void 0;
  let u;
  if (i.development) {
    if (typeof i.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = jv(r, i.jsxDEV);
  } else {
    if (typeof i.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof i.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = Lv(r, i.jsx, i.jsxs);
  }
  const s = {
    Fragment: i.Fragment,
    ancestors: [],
    components: i.components || {},
    create: u,
    elementAttributeNameCase: i.elementAttributeNameCase || "react",
    evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
    filePath: r,
    ignoreInvalidStyle: i.ignoreInvalidStyle || !1,
    passKeys: i.passKeys !== !1,
    passNode: i.passNode || !1,
    schema: i.space === "svg" ? Gc : yv,
    stylePropertyNameCase: i.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
  }, f = Lg(s, n, void 0);
  return f && typeof f != "string" ? f : s.create(
    n,
    s.Fragment,
    { children: f || void 0 },
    void 0
  );
}
function Lg(n, i, r) {
  if (i.type === "element")
    return zv(n, i, r);
  if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
    return Nv(n, i);
  if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
    return Dv(n, i, r);
  if (i.type === "mdxjsEsm")
    return Mv(n, i);
  if (i.type === "root")
    return Uv(n, i, r);
  if (i.type === "text")
    return Bv(n, i);
}
function zv(n, i, r) {
  const u = n.schema;
  let s = u;
  i.tagName.toLowerCase() === "svg" && u.space === "html" && (s = Gc, n.schema = s), n.ancestors.push(i);
  const f = Hg(n, i.tagName, !1), d = Hv(n, i);
  let p = Kc(n, i);
  return _v.has(i.tagName) && (p = p.filter(function(y) {
    return typeof y == "string" ? !uv(y) : !0;
  })), jg(n, d, f, i), Zc(d, p), n.ancestors.pop(), n.schema = u, n.create(i, f, d, r);
}
function Nv(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const u = i.data.estree.body[0];
    return u.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(u.expression);
  }
  Xa(n, i.position);
}
function Mv(n, i) {
  if (i.data && i.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(i.data.estree)
    );
  Xa(n, i.position);
}
function Dv(n, i, r) {
  const u = n.schema;
  let s = u;
  i.name === "svg" && u.space === "html" && (s = Gc, n.schema = s), n.ancestors.push(i);
  const f = i.name === null ? n.Fragment : Hg(n, i.name, !0), d = qv(n, i), p = Kc(n, i);
  return jg(n, d, f, i), Zc(d, p), n.ancestors.pop(), n.schema = u, n.create(i, f, d, r);
}
function Uv(n, i, r) {
  const u = {};
  return Zc(u, Kc(n, i)), n.create(i, n.Fragment, u, r);
}
function Bv(n, i) {
  return i.value;
}
function jg(n, i, r, u) {
  typeof r != "string" && r !== n.Fragment && n.passNode && (i.node = u);
}
function Zc(n, i) {
  if (i.length > 0) {
    const r = i.length > 1 ? i : i[0];
    r && (n.children = r);
  }
}
function Lv(n, i, r) {
  return u;
  function u(s, f, d, p) {
    const h = Array.isArray(d.children) ? r : i;
    return p ? h(f, d, p) : h(f, d);
  }
}
function jv(n, i) {
  return r;
  function r(u, s, f, d) {
    const p = Array.isArray(f.children), y = Xc(u);
    return i(
      s,
      f,
      d,
      p,
      {
        columnNumber: y ? y.column - 1 : void 0,
        fileName: n,
        lineNumber: y ? y.line : void 0
      },
      void 0
    );
  }
}
function Hv(n, i) {
  const r = {};
  let u, s;
  for (s in i.properties)
    if (s !== "children" && Qc.call(i.properties, s)) {
      const f = Vv(n, s, i.properties[s]);
      if (f) {
        const [d, p] = f;
        n.tableCellAlignToStyle && d === "align" && typeof p == "string" && Rv.has(i.tagName) ? u = p : r[d] = p;
      }
    }
  if (u) {
    const f = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    f[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = u;
  }
  return r;
}
function qv(n, i) {
  const r = {};
  for (const u of i.attributes)
    if (u.type === "mdxJsxExpressionAttribute")
      if (u.data && u.data.estree && n.evaluater) {
        const f = u.data.estree.body[0];
        f.type;
        const d = f.expression;
        d.type;
        const p = d.properties[0];
        p.type, Object.assign(
          r,
          n.evaluater.evaluateExpression(p.argument)
        );
      } else
        Xa(n, i.position);
    else {
      const s = u.name;
      let f;
      if (u.value && typeof u.value == "object")
        if (u.value.data && u.value.data.estree && n.evaluater) {
          const p = u.value.data.estree.body[0];
          p.type, f = n.evaluater.evaluateExpression(p.expression);
        } else
          Xa(n, i.position);
      else
        f = u.value === null ? !0 : u.value;
      r[s] = /** @type {Props[keyof Props]} */
      f;
    }
  return r;
}
function Kc(n, i) {
  const r = [];
  let u = -1;
  const s = n.passKeys ? /* @__PURE__ */ new Map() : kv;
  for (; ++u < i.children.length; ) {
    const f = i.children[u];
    let d;
    if (n.passKeys) {
      const y = f.type === "element" ? f.tagName : f.type === "mdxJsxFlowElement" || f.type === "mdxJsxTextElement" ? f.name : void 0;
      if (y) {
        const h = s.get(y) || 0;
        d = y + "-" + h, s.set(y, h + 1);
      }
    }
    const p = Lg(n, f, d);
    p !== void 0 && r.push(p);
  }
  return r;
}
function Vv(n, i, r) {
  const u = pv(n.schema, i);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = u.commaSeparated ? nv(r) : bv(r)), u.property === "style") {
      let s = typeof r == "object" ? r : Yv(n, String(r));
      return n.stylePropertyNameCase === "css" && (s = Gv(s)), ["style", s];
    }
    return [
      n.elementAttributeNameCase === "react" && u.space ? fv[u.property] || u.property : u.attribute,
      r
    ];
  }
}
function Yv(n, i) {
  try {
    return Tv(i, { reactCompat: !0 });
  } catch (r) {
    if (n.ignoreInvalidStyle)
      return {};
    const u = (
      /** @type {Error} */
      r
    ), s = new vt("Cannot parse `style` attribute", {
      ancestors: n.ancestors,
      cause: u,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = n.filePath || void 0, s.url = Bg + "#cannot-parse-style-attribute", s;
  }
}
function Hg(n, i, r) {
  let u;
  if (!r)
    u = { type: "Literal", value: i };
  else if (i.includes(".")) {
    const s = i.split(".");
    let f = -1, d;
    for (; ++f < s.length; ) {
      const p = fm(s[f]) ? { type: "Identifier", name: s[f] } : { type: "Literal", value: s[f] };
      d = d ? {
        type: "MemberExpression",
        object: d,
        property: p,
        computed: !!(f && p.type === "Literal"),
        optional: !1
      } : p;
    }
    u = d;
  } else
    u = fm(i) && !/^[a-z]/.test(i) ? { type: "Identifier", name: i } : { type: "Literal", value: i };
  if (u.type === "Literal") {
    const s = (
      /** @type {string | number} */
      u.value
    );
    return Qc.call(n.components, s) ? n.components[s] : s;
  }
  if (n.evaluater)
    return n.evaluater.evaluateExpression(u);
  Xa(n);
}
function Xa(n, i) {
  const r = new vt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: n.ancestors,
      place: i,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = n.filePath || void 0, r.url = Bg + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function Gv(n) {
  const i = {};
  let r;
  for (r in n)
    Qc.call(n, r) && (i[Xv(r)] = n[r]);
  return i;
}
function Xv(n) {
  let i = n.replace(Cv, Qv);
  return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
}
function Qv(n) {
  return "-" + n.toLowerCase();
}
const ac = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, Zv = {};
function Kv(n, i) {
  const r = Zv, u = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, s = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return qg(n, u, s);
}
function qg(n, i, r) {
  if (Fv(n)) {
    if ("value" in n)
      return n.type === "html" && !r ? "" : n.value;
    if (i && "alt" in n && n.alt)
      return n.alt;
    if ("children" in n)
      return Sm(n.children, i, r);
  }
  return Array.isArray(n) ? Sm(n, i, r) : "";
}
function Sm(n, i, r) {
  const u = [];
  let s = -1;
  for (; ++s < n.length; )
    u[s] = qg(n[s], i, r);
  return u.join("");
}
function Fv(n) {
  return !!(n && typeof n == "object");
}
const Em = document.createElement("i");
function Fc(n) {
  const i = "&" + n + ";";
  Em.innerHTML = i;
  const r = Em.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    r.charCodeAt(r.length - 1) === 59 && n !== "semi" || r === i ? !1 : r
  );
}
function xn(n, i, r, u) {
  const s = n.length;
  let f = 0, d;
  if (i < 0 ? i = -i > s ? 0 : s + i : i = i > s ? s : i, r = r > 0 ? r : 0, u.length < 1e4)
    d = Array.from(u), d.unshift(i, r), n.splice(...d);
  else
    for (r && n.splice(i, r); f < u.length; )
      d = u.slice(f, f + 1e4), d.unshift(i, 0), n.splice(...d), f += 1e4, i += 1e4;
}
function nn(n, i) {
  return n.length > 0 ? (xn(n, n.length, 0, i), n) : i;
}
const wm = {}.hasOwnProperty;
function Jv(n) {
  const i = {};
  let r = -1;
  for (; ++r < n.length; )
    Iv(i, n[r]);
  return i;
}
function Iv(n, i) {
  let r;
  for (r in i) {
    const s = (wm.call(n, r) ? n[r] : void 0) || (n[r] = {}), f = i[r];
    let d;
    if (f)
      for (d in f) {
        wm.call(s, d) || (s[d] = []);
        const p = f[d];
        Pv(
          // @ts-expect-error Looks like a list.
          s[d],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function Pv(n, i) {
  let r = -1;
  const u = [];
  for (; ++r < i.length; )
    (i[r].add === "after" ? n : u).push(i[r]);
  xn(n, 0, 0, u);
}
function Vg(n, i) {
  const r = Number.parseInt(n, i);
  return (
    // C0 except for HT, LF, FF, CR, space.
    r < 9 || r === 11 || r > 13 && r < 32 || // Control character (DEL) of C0, and C1 controls.
    r > 126 && r < 160 || // Lone high surrogates and low surrogates.
    r > 55295 && r < 57344 || // Noncharacters.
    r > 64975 && r < 65008 || /* eslint-disable no-bitwise */
    (r & 65535) === 65535 || (r & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    r > 1114111 ? "�" : String.fromCodePoint(r)
  );
}
function Ai(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const vn = fl(/[A-Za-z]/), Qt = fl(/[\dA-Za-z]/), $v = fl(/[#-'*+\--9=?A-Z^-~]/);
function kc(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const Cc = fl(/\d/), Wv = fl(/[\dA-Fa-f]/), ex = fl(/[!-/:-@[-`{-~]/);
function be(n) {
  return n !== null && n < -2;
}
function Rt(n) {
  return n !== null && (n < 0 || n === 32);
}
function Be(n) {
  return n === -2 || n === -1 || n === 32;
}
const tx = fl(new RegExp("\\p{P}|\\p{S}", "u")), nx = fl(/\s/);
function fl(n) {
  return i;
  function i(r) {
    return r !== null && r > -1 && n.test(String.fromCharCode(r));
  }
}
function Ri(n) {
  const i = [];
  let r = -1, u = 0, s = 0;
  for (; ++r < n.length; ) {
    const f = n.charCodeAt(r);
    let d = "";
    if (f === 37 && Qt(n.charCodeAt(r + 1)) && Qt(n.charCodeAt(r + 2)))
      s = 2;
    else if (f < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f)) || (d = String.fromCharCode(f));
    else if (f > 55295 && f < 57344) {
      const p = n.charCodeAt(r + 1);
      f < 56320 && p > 56319 && p < 57344 ? (d = String.fromCharCode(f, p), s = 1) : d = "�";
    } else
      d = String.fromCharCode(f);
    d && (i.push(n.slice(u, r), encodeURIComponent(d)), u = r + s + 1, d = ""), s && (r += s, s = 0);
  }
  return i.join("") + n.slice(u);
}
function Ke(n, i, r, u) {
  const s = u ? u - 1 : Number.POSITIVE_INFINITY;
  let f = 0;
  return d;
  function d(y) {
    return Be(y) ? (n.enter(r), p(y)) : i(y);
  }
  function p(y) {
    return Be(y) && f++ < s ? (n.consume(y), p) : (n.exit(r), i(y));
  }
}
const lx = {
  tokenize: ix
};
function ix(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, u, s);
  let r;
  return i;
  function u(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return n.enter("lineEnding"), n.consume(p), n.exit("lineEnding"), Ke(n, i, "linePrefix");
  }
  function s(p) {
    return n.enter("paragraph"), f(p);
  }
  function f(p) {
    const y = n.enter("chunkText", {
      contentType: "text",
      previous: r
    });
    return r && (r.next = y), r = y, d(p);
  }
  function d(p) {
    if (p === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(p);
      return;
    }
    return be(p) ? (n.consume(p), n.exit("chunkText"), f) : (n.consume(p), d);
  }
}
const ax = {
  tokenize: rx
}, Tm = {
  tokenize: ux
};
function rx(n) {
  const i = this, r = [];
  let u = 0, s, f, d;
  return p;
  function p(Q) {
    if (u < r.length) {
      const ne = r[u];
      return i.containerState = ne[1], n.attempt(ne[0].continuation, y, h)(Q);
    }
    return h(Q);
  }
  function y(Q) {
    if (u++, i.containerState._closeFlow) {
      i.containerState._closeFlow = void 0, s && I();
      const ne = i.events.length;
      let $ = ne, L;
      for (; $--; )
        if (i.events[$][0] === "exit" && i.events[$][1].type === "chunkFlow") {
          L = i.events[$][1].end;
          break;
        }
      U(u);
      let re = ne;
      for (; re < i.events.length; )
        i.events[re][1].end = {
          ...L
        }, re++;
      return xn(i.events, $ + 1, 0, i.events.slice(ne)), i.events.length = re, h(Q);
    }
    return p(Q);
  }
  function h(Q) {
    if (u === r.length) {
      if (!s)
        return w(Q);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return C(Q);
      i.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return i.containerState = {}, n.check(Tm, m, v)(Q);
  }
  function m(Q) {
    return s && I(), U(u), w(Q);
  }
  function v(Q) {
    return i.parser.lazy[i.now().line] = u !== r.length, d = i.now().offset, C(Q);
  }
  function w(Q) {
    return i.containerState = {}, n.attempt(Tm, S, C)(Q);
  }
  function S(Q) {
    return u++, r.push([i.currentConstruct, i.containerState]), w(Q);
  }
  function C(Q) {
    if (Q === null) {
      s && I(), U(0), n.consume(Q);
      return;
    }
    return s = s || i.parser.flow(i.now()), n.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: f
    }), O(Q);
  }
  function O(Q) {
    if (Q === null) {
      B(n.exit("chunkFlow"), !0), U(0), n.consume(Q);
      return;
    }
    return be(Q) ? (n.consume(Q), B(n.exit("chunkFlow")), u = 0, i.interrupt = void 0, p) : (n.consume(Q), O);
  }
  function B(Q, ne) {
    const $ = i.sliceStream(Q);
    if (ne && $.push(null), Q.previous = f, f && (f.next = Q), f = Q, s.defineSkip(Q.start), s.write($), i.parser.lazy[Q.start.line]) {
      let L = s.events.length;
      for (; L--; )
        if (
          // The token starts before the line ending…
          s.events[L][1].start.offset < d && // …and either is not ended yet…
          (!s.events[L][1].end || // …or ends after it.
          s.events[L][1].end.offset > d)
        )
          return;
      const re = i.events.length;
      let P = re, de, Te;
      for (; P--; )
        if (i.events[P][0] === "exit" && i.events[P][1].type === "chunkFlow") {
          if (de) {
            Te = i.events[P][1].end;
            break;
          }
          de = !0;
        }
      for (U(u), L = re; L < i.events.length; )
        i.events[L][1].end = {
          ...Te
        }, L++;
      xn(i.events, P + 1, 0, i.events.slice(re)), i.events.length = L;
    }
  }
  function U(Q) {
    let ne = r.length;
    for (; ne-- > Q; ) {
      const $ = r[ne];
      i.containerState = $[1], $[0].exit.call(i, n);
    }
    r.length = Q;
  }
  function I() {
    s.write([null]), f = void 0, s = void 0, i.containerState._closeFlow = void 0;
  }
}
function ux(n, i, r) {
  return Ke(n, n.attempt(this.parser.constructs.document, i, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Am(n) {
  if (n === null || Rt(n) || nx(n))
    return 1;
  if (tx(n))
    return 2;
}
function Jc(n, i, r) {
  const u = [];
  let s = -1;
  for (; ++s < n.length; ) {
    const f = n[s].resolveAll;
    f && !u.includes(f) && (i = f(i, r), u.push(f));
  }
  return i;
}
const _c = {
  name: "attention",
  resolveAll: ox,
  tokenize: sx
};
function ox(n, i) {
  let r = -1, u, s, f, d, p, y, h, m;
  for (; ++r < n.length; )
    if (n[r][0] === "enter" && n[r][1].type === "attentionSequence" && n[r][1]._close) {
      for (u = r; u--; )
        if (n[u][0] === "exit" && n[u][1].type === "attentionSequence" && n[u][1]._open && // If the markers are the same:
        i.sliceSerialize(n[u][1]).charCodeAt(0) === i.sliceSerialize(n[r][1]).charCodeAt(0)) {
          if ((n[u][1]._close || n[r][1]._open) && (n[r][1].end.offset - n[r][1].start.offset) % 3 && !((n[u][1].end.offset - n[u][1].start.offset + n[r][1].end.offset - n[r][1].start.offset) % 3))
            continue;
          y = n[u][1].end.offset - n[u][1].start.offset > 1 && n[r][1].end.offset - n[r][1].start.offset > 1 ? 2 : 1;
          const v = {
            ...n[u][1].end
          }, w = {
            ...n[r][1].start
          };
          km(v, -y), km(w, y), d = {
            type: y > 1 ? "strongSequence" : "emphasisSequence",
            start: v,
            end: {
              ...n[u][1].end
            }
          }, p = {
            type: y > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...n[r][1].start
            },
            end: w
          }, f = {
            type: y > 1 ? "strongText" : "emphasisText",
            start: {
              ...n[u][1].end
            },
            end: {
              ...n[r][1].start
            }
          }, s = {
            type: y > 1 ? "strong" : "emphasis",
            start: {
              ...d.start
            },
            end: {
              ...p.end
            }
          }, n[u][1].end = {
            ...d.start
          }, n[r][1].start = {
            ...p.end
          }, h = [], n[u][1].end.offset - n[u][1].start.offset && (h = nn(h, [["enter", n[u][1], i], ["exit", n[u][1], i]])), h = nn(h, [["enter", s, i], ["enter", d, i], ["exit", d, i], ["enter", f, i]]), h = nn(h, Jc(i.parser.constructs.insideSpan.null, n.slice(u + 1, r), i)), h = nn(h, [["exit", f, i], ["enter", p, i], ["exit", p, i], ["exit", s, i]]), n[r][1].end.offset - n[r][1].start.offset ? (m = 2, h = nn(h, [["enter", n[r][1], i], ["exit", n[r][1], i]])) : m = 0, xn(n, u - 1, r - u + 3, h), r = u + h.length - m - 2;
          break;
        }
    }
  for (r = -1; ++r < n.length; )
    n[r][1].type === "attentionSequence" && (n[r][1].type = "data");
  return n;
}
function sx(n, i) {
  const r = this.parser.constructs.attentionMarkers.null, u = this.previous, s = Am(u);
  let f;
  return d;
  function d(y) {
    return f = y, n.enter("attentionSequence"), p(y);
  }
  function p(y) {
    if (y === f)
      return n.consume(y), p;
    const h = n.exit("attentionSequence"), m = Am(y), v = !m || m === 2 && s || r.includes(y), w = !s || s === 2 && m || r.includes(u);
    return h._open = !!(f === 42 ? v : v && (s || !w)), h._close = !!(f === 42 ? w : w && (m || !v)), i(y);
  }
}
function km(n, i) {
  n.column += i, n.offset += i, n._bufferIndex += i;
}
const cx = {
  name: "autolink",
  tokenize: fx
};
function fx(n, i, r) {
  let u = 0;
  return s;
  function s(S) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), f;
  }
  function f(S) {
    return vn(S) ? (n.consume(S), d) : S === 64 ? r(S) : h(S);
  }
  function d(S) {
    return S === 43 || S === 45 || S === 46 || Qt(S) ? (u = 1, p(S)) : h(S);
  }
  function p(S) {
    return S === 58 ? (n.consume(S), u = 0, y) : (S === 43 || S === 45 || S === 46 || Qt(S)) && u++ < 32 ? (n.consume(S), p) : (u = 0, h(S));
  }
  function y(S) {
    return S === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.exit("autolink"), i) : S === null || S === 32 || S === 60 || kc(S) ? r(S) : (n.consume(S), y);
  }
  function h(S) {
    return S === 64 ? (n.consume(S), m) : $v(S) ? (n.consume(S), h) : r(S);
  }
  function m(S) {
    return Qt(S) ? v(S) : r(S);
  }
  function v(S) {
    return S === 46 ? (n.consume(S), u = 0, m) : S === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.exit("autolink"), i) : w(S);
  }
  function w(S) {
    if ((S === 45 || Qt(S)) && u++ < 63) {
      const C = S === 45 ? w : v;
      return n.consume(S), C;
    }
    return r(S);
  }
}
const wu = {
  partial: !0,
  tokenize: dx
};
function dx(n, i, r) {
  return u;
  function u(f) {
    return Be(f) ? Ke(n, s, "linePrefix")(f) : s(f);
  }
  function s(f) {
    return f === null || be(f) ? i(f) : r(f);
  }
}
const Yg = {
  continuation: {
    tokenize: px
  },
  exit: mx,
  name: "blockQuote",
  tokenize: hx
};
function hx(n, i, r) {
  const u = this;
  return s;
  function s(d) {
    if (d === 62) {
      const p = u.containerState;
      return p.open || (n.enter("blockQuote", {
        _container: !0
      }), p.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(d), n.exit("blockQuoteMarker"), f;
    }
    return r(d);
  }
  function f(d) {
    return Be(d) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(d), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), i) : (n.exit("blockQuotePrefix"), i(d));
  }
}
function px(n, i, r) {
  const u = this;
  return s;
  function s(d) {
    return Be(d) ? Ke(n, f, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : f(d);
  }
  function f(d) {
    return n.attempt(Yg, i, r)(d);
  }
}
function mx(n) {
  n.exit("blockQuote");
}
const Gg = {
  name: "characterEscape",
  tokenize: gx
};
function gx(n, i, r) {
  return u;
  function u(f) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(f), n.exit("escapeMarker"), s;
  }
  function s(f) {
    return ex(f) ? (n.enter("characterEscapeValue"), n.consume(f), n.exit("characterEscapeValue"), n.exit("characterEscape"), i) : r(f);
  }
}
const Xg = {
  name: "characterReference",
  tokenize: yx
};
function yx(n, i, r) {
  const u = this;
  let s = 0, f, d;
  return p;
  function p(v) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(v), n.exit("characterReferenceMarker"), y;
  }
  function y(v) {
    return v === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(v), n.exit("characterReferenceMarkerNumeric"), h) : (n.enter("characterReferenceValue"), f = 31, d = Qt, m(v));
  }
  function h(v) {
    return v === 88 || v === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(v), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), f = 6, d = Wv, m) : (n.enter("characterReferenceValue"), f = 7, d = Cc, m(v));
  }
  function m(v) {
    if (v === 59 && s) {
      const w = n.exit("characterReferenceValue");
      return d === Qt && !Fc(u.sliceSerialize(w)) ? r(v) : (n.enter("characterReferenceMarker"), n.consume(v), n.exit("characterReferenceMarker"), n.exit("characterReference"), i);
    }
    return d(v) && s++ < f ? (n.consume(v), m) : r(v);
  }
}
const Cm = {
  partial: !0,
  tokenize: vx
}, _m = {
  concrete: !0,
  name: "codeFenced",
  tokenize: bx
};
function bx(n, i, r) {
  const u = this, s = {
    partial: !0,
    tokenize: $
  };
  let f = 0, d = 0, p;
  return y;
  function y(L) {
    return h(L);
  }
  function h(L) {
    const re = u.events[u.events.length - 1];
    return f = re && re[1].type === "linePrefix" ? re[2].sliceSerialize(re[1], !0).length : 0, p = L, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), m(L);
  }
  function m(L) {
    return L === p ? (d++, n.consume(L), m) : d < 3 ? r(L) : (n.exit("codeFencedFenceSequence"), Be(L) ? Ke(n, v, "whitespace")(L) : v(L));
  }
  function v(L) {
    return L === null || be(L) ? (n.exit("codeFencedFence"), u.interrupt ? i(L) : n.check(Cm, O, ne)(L)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), w(L));
  }
  function w(L) {
    return L === null || be(L) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), v(L)) : Be(L) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Ke(n, S, "whitespace")(L)) : L === 96 && L === p ? r(L) : (n.consume(L), w);
  }
  function S(L) {
    return L === null || be(L) ? v(L) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), C(L));
  }
  function C(L) {
    return L === null || be(L) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), v(L)) : L === 96 && L === p ? r(L) : (n.consume(L), C);
  }
  function O(L) {
    return n.attempt(s, ne, B)(L);
  }
  function B(L) {
    return n.enter("lineEnding"), n.consume(L), n.exit("lineEnding"), U;
  }
  function U(L) {
    return f > 0 && Be(L) ? Ke(n, I, "linePrefix", f + 1)(L) : I(L);
  }
  function I(L) {
    return L === null || be(L) ? n.check(Cm, O, ne)(L) : (n.enter("codeFlowValue"), Q(L));
  }
  function Q(L) {
    return L === null || be(L) ? (n.exit("codeFlowValue"), I(L)) : (n.consume(L), Q);
  }
  function ne(L) {
    return n.exit("codeFenced"), i(L);
  }
  function $(L, re, P) {
    let de = 0;
    return Te;
    function Te(te) {
      return L.enter("lineEnding"), L.consume(te), L.exit("lineEnding"), ie;
    }
    function ie(te) {
      return L.enter("codeFencedFence"), Be(te) ? Ke(L, G, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(te) : G(te);
    }
    function G(te) {
      return te === p ? (L.enter("codeFencedFenceSequence"), ae(te)) : P(te);
    }
    function ae(te) {
      return te === p ? (de++, L.consume(te), ae) : de >= d ? (L.exit("codeFencedFenceSequence"), Be(te) ? Ke(L, W, "whitespace")(te) : W(te)) : P(te);
    }
    function W(te) {
      return te === null || be(te) ? (L.exit("codeFencedFence"), re(te)) : P(te);
    }
  }
}
function vx(n, i, r) {
  const u = this;
  return s;
  function s(d) {
    return d === null ? r(d) : (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), f);
  }
  function f(d) {
    return u.parser.lazy[u.now().line] ? r(d) : i(d);
  }
}
const rc = {
  name: "codeIndented",
  tokenize: Sx
}, xx = {
  partial: !0,
  tokenize: Ex
};
function Sx(n, i, r) {
  const u = this;
  return s;
  function s(h) {
    return n.enter("codeIndented"), Ke(n, f, "linePrefix", 5)(h);
  }
  function f(h) {
    const m = u.events[u.events.length - 1];
    return m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? d(h) : r(h);
  }
  function d(h) {
    return h === null ? y(h) : be(h) ? n.attempt(xx, d, y)(h) : (n.enter("codeFlowValue"), p(h));
  }
  function p(h) {
    return h === null || be(h) ? (n.exit("codeFlowValue"), d(h)) : (n.consume(h), p);
  }
  function y(h) {
    return n.exit("codeIndented"), i(h);
  }
}
function Ex(n, i, r) {
  const u = this;
  return s;
  function s(d) {
    return u.parser.lazy[u.now().line] ? r(d) : be(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), s) : Ke(n, f, "linePrefix", 5)(d);
  }
  function f(d) {
    const p = u.events[u.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(d) : be(d) ? s(d) : r(d);
  }
}
const wx = {
  name: "codeText",
  previous: Ax,
  resolve: Tx,
  tokenize: kx
};
function Tx(n) {
  let i = n.length - 4, r = 3, u, s;
  if ((n[r][1].type === "lineEnding" || n[r][1].type === "space") && (n[i][1].type === "lineEnding" || n[i][1].type === "space")) {
    for (u = r; ++u < i; )
      if (n[u][1].type === "codeTextData") {
        n[r][1].type = "codeTextPadding", n[i][1].type = "codeTextPadding", r += 2, i -= 2;
        break;
      }
  }
  for (u = r - 1, i++; ++u <= i; )
    s === void 0 ? u !== i && n[u][1].type !== "lineEnding" && (s = u) : (u === i || n[u][1].type === "lineEnding") && (n[s][1].type = "codeTextData", u !== s + 2 && (n[s][1].end = n[u - 1][1].end, n.splice(s + 2, u - s - 2), i -= u - s - 2, u = s + 2), s = void 0);
  return n;
}
function Ax(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function kx(n, i, r) {
  let u = 0, s, f;
  return d;
  function d(v) {
    return n.enter("codeText"), n.enter("codeTextSequence"), p(v);
  }
  function p(v) {
    return v === 96 ? (n.consume(v), u++, p) : (n.exit("codeTextSequence"), y(v));
  }
  function y(v) {
    return v === null ? r(v) : v === 32 ? (n.enter("space"), n.consume(v), n.exit("space"), y) : v === 96 ? (f = n.enter("codeTextSequence"), s = 0, m(v)) : be(v) ? (n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), y) : (n.enter("codeTextData"), h(v));
  }
  function h(v) {
    return v === null || v === 32 || v === 96 || be(v) ? (n.exit("codeTextData"), y(v)) : (n.consume(v), h);
  }
  function m(v) {
    return v === 96 ? (n.consume(v), s++, m) : s === u ? (n.exit("codeTextSequence"), n.exit("codeText"), i(v)) : (f.type = "codeTextData", h(v));
  }
}
class Cx {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(i) {
    this.left = i ? [...i] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(i) {
    if (i < 0 || i >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + i + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return i < this.left.length ? this.left[i] : this.right[this.right.length - i + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(i, r) {
    const u = r ?? Number.POSITIVE_INFINITY;
    return u < this.left.length ? this.left.slice(i, u) : i > this.left.length ? this.right.slice(this.right.length - u + this.left.length, this.right.length - i + this.left.length).reverse() : this.left.slice(i).concat(this.right.slice(this.right.length - u + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(i, r, u) {
    const s = r || 0;
    this.setCursor(Math.trunc(i));
    const f = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
    return u && Ba(this.left, u), f.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(i) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(i) {
    this.setCursor(Number.POSITIVE_INFINITY), Ba(this.left, i);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(i) {
    this.setCursor(0), this.right.push(i);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(i) {
    this.setCursor(0), Ba(this.right, i.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(i) {
    if (!(i === this.left.length || i > this.left.length && this.right.length === 0 || i < 0 && this.left.length === 0))
      if (i < this.left.length) {
        const r = this.left.splice(i, Number.POSITIVE_INFINITY);
        Ba(this.right, r.reverse());
      } else {
        const r = this.right.splice(this.left.length + this.right.length - i, Number.POSITIVE_INFINITY);
        Ba(this.left, r.reverse());
      }
  }
}
function Ba(n, i) {
  let r = 0;
  if (i.length < 1e4)
    n.push(...i);
  else
    for (; r < i.length; )
      n.push(...i.slice(r, r + 1e4)), r += 1e4;
}
function Qg(n) {
  const i = {};
  let r = -1, u, s, f, d, p, y, h;
  const m = new Cx(n);
  for (; ++r < m.length; ) {
    for (; r in i; )
      r = i[r];
    if (u = m.get(r), r && u[1].type === "chunkFlow" && m.get(r - 1)[1].type === "listItemPrefix" && (y = u[1]._tokenizer.events, f = 0, f < y.length && y[f][1].type === "lineEndingBlank" && (f += 2), f < y.length && y[f][1].type === "content"))
      for (; ++f < y.length && y[f][1].type !== "content"; )
        y[f][1].type === "chunkText" && (y[f][1]._isInFirstContentOfListItem = !0, f++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(i, _x(m, r)), r = i[r], h = !0);
    else if (u[1]._container) {
      for (f = r, s = void 0; f--; )
        if (d = m.get(f), d[1].type === "lineEnding" || d[1].type === "lineEndingBlank")
          d[0] === "enter" && (s && (m.get(s)[1].type = "lineEndingBlank"), d[1].type = "lineEnding", s = f);
        else if (!(d[1].type === "linePrefix" || d[1].type === "listItemIndent")) break;
      s && (u[1].end = {
        ...m.get(s)[1].start
      }, p = m.slice(s, r), p.unshift(u), m.splice(s, r - s + 1, p));
    }
  }
  return xn(n, 0, Number.POSITIVE_INFINITY, m.slice(0)), !h;
}
function _x(n, i) {
  const r = n.get(i)[1], u = n.get(i)[2];
  let s = i - 1;
  const f = [];
  let d = r._tokenizer;
  d || (d = u.parser[r.contentType](r.start), r._contentTypeTextTrailing && (d._contentTypeTextTrailing = !0));
  const p = d.events, y = [], h = {};
  let m, v, w = -1, S = r, C = 0, O = 0;
  const B = [O];
  for (; S; ) {
    for (; n.get(++s)[1] !== S; )
      ;
    f.push(s), S._tokenizer || (m = u.sliceStream(S), S.next || m.push(null), v && d.defineSkip(S.start), S._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(m), S._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), v = S, S = S.next;
  }
  for (S = r; ++w < p.length; )
    // Find a void token that includes a break.
    p[w][0] === "exit" && p[w - 1][0] === "enter" && p[w][1].type === p[w - 1][1].type && p[w][1].start.line !== p[w][1].end.line && (O = w + 1, B.push(O), S._tokenizer = void 0, S.previous = void 0, S = S.next);
  for (d.events = [], S ? (S._tokenizer = void 0, S.previous = void 0) : B.pop(), w = B.length; w--; ) {
    const U = p.slice(B[w], B[w + 1]), I = f.pop();
    y.push([I, I + U.length - 1]), n.splice(I, 2, U);
  }
  for (y.reverse(), w = -1; ++w < y.length; )
    h[C + y[w][0]] = C + y[w][1], C += y[w][1] - y[w][0] - 1;
  return h;
}
const Rx = {
  resolve: zx,
  tokenize: Nx
}, Ox = {
  partial: !0,
  tokenize: Mx
};
function zx(n) {
  return Qg(n), n;
}
function Nx(n, i) {
  let r;
  return u;
  function u(p) {
    return n.enter("content"), r = n.enter("chunkContent", {
      contentType: "content"
    }), s(p);
  }
  function s(p) {
    return p === null ? f(p) : be(p) ? n.check(Ox, d, f)(p) : (n.consume(p), s);
  }
  function f(p) {
    return n.exit("chunkContent"), n.exit("content"), i(p);
  }
  function d(p) {
    return n.consume(p), n.exit("chunkContent"), r.next = n.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, s;
  }
}
function Mx(n, i, r) {
  const u = this;
  return s;
  function s(d) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), Ke(n, f, "linePrefix");
  }
  function f(d) {
    if (d === null || be(d))
      return r(d);
    const p = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(d) : n.interrupt(u.parser.constructs.flow, r, i)(d);
  }
}
function Zg(n, i, r, u, s, f, d, p, y) {
  const h = y || Number.POSITIVE_INFINITY;
  let m = 0;
  return v;
  function v(U) {
    return U === 60 ? (n.enter(u), n.enter(s), n.enter(f), n.consume(U), n.exit(f), w) : U === null || U === 32 || U === 41 || kc(U) ? r(U) : (n.enter(u), n.enter(d), n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), O(U));
  }
  function w(U) {
    return U === 62 ? (n.enter(f), n.consume(U), n.exit(f), n.exit(s), n.exit(u), i) : (n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), S(U));
  }
  function S(U) {
    return U === 62 ? (n.exit("chunkString"), n.exit(p), w(U)) : U === null || U === 60 || be(U) ? r(U) : (n.consume(U), U === 92 ? C : S);
  }
  function C(U) {
    return U === 60 || U === 62 || U === 92 ? (n.consume(U), S) : S(U);
  }
  function O(U) {
    return !m && (U === null || U === 41 || Rt(U)) ? (n.exit("chunkString"), n.exit(p), n.exit(d), n.exit(u), i(U)) : m < h && U === 40 ? (n.consume(U), m++, O) : U === 41 ? (n.consume(U), m--, O) : U === null || U === 32 || U === 40 || kc(U) ? r(U) : (n.consume(U), U === 92 ? B : O);
  }
  function B(U) {
    return U === 40 || U === 41 || U === 92 ? (n.consume(U), O) : O(U);
  }
}
function Kg(n, i, r, u, s, f) {
  const d = this;
  let p = 0, y;
  return h;
  function h(S) {
    return n.enter(u), n.enter(s), n.consume(S), n.exit(s), n.enter(f), m;
  }
  function m(S) {
    return p > 999 || S === null || S === 91 || S === 93 && !y || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    S === 94 && !p && "_hiddenFootnoteSupport" in d.parser.constructs ? r(S) : S === 93 ? (n.exit(f), n.enter(s), n.consume(S), n.exit(s), n.exit(u), i) : be(S) ? (n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), m) : (n.enter("chunkString", {
      contentType: "string"
    }), v(S));
  }
  function v(S) {
    return S === null || S === 91 || S === 93 || be(S) || p++ > 999 ? (n.exit("chunkString"), m(S)) : (n.consume(S), y || (y = !Be(S)), S === 92 ? w : v);
  }
  function w(S) {
    return S === 91 || S === 92 || S === 93 ? (n.consume(S), p++, v) : v(S);
  }
}
function Fg(n, i, r, u, s, f) {
  let d;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40 ? (n.enter(u), n.enter(s), n.consume(w), n.exit(s), d = w === 40 ? 41 : w, y) : r(w);
  }
  function y(w) {
    return w === d ? (n.enter(s), n.consume(w), n.exit(s), n.exit(u), i) : (n.enter(f), h(w));
  }
  function h(w) {
    return w === d ? (n.exit(f), y(d)) : w === null ? r(w) : be(w) ? (n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), Ke(n, h, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), m(w));
  }
  function m(w) {
    return w === d || w === null || be(w) ? (n.exit("chunkString"), h(w)) : (n.consume(w), w === 92 ? v : m);
  }
  function v(w) {
    return w === d || w === 92 ? (n.consume(w), m) : m(w);
  }
}
function Va(n, i) {
  let r;
  return u;
  function u(s) {
    return be(s) ? (n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), r = !0, u) : Be(s) ? Ke(n, u, r ? "linePrefix" : "lineSuffix")(s) : i(s);
  }
}
const Dx = {
  name: "definition",
  tokenize: Bx
}, Ux = {
  partial: !0,
  tokenize: Lx
};
function Bx(n, i, r) {
  const u = this;
  let s;
  return f;
  function f(S) {
    return n.enter("definition"), d(S);
  }
  function d(S) {
    return Kg.call(
      u,
      n,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(S);
  }
  function p(S) {
    return s = Ai(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1)), S === 58 ? (n.enter("definitionMarker"), n.consume(S), n.exit("definitionMarker"), y) : r(S);
  }
  function y(S) {
    return Rt(S) ? Va(n, h)(S) : h(S);
  }
  function h(S) {
    return Zg(
      n,
      m,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(S);
  }
  function m(S) {
    return n.attempt(Ux, v, v)(S);
  }
  function v(S) {
    return Be(S) ? Ke(n, w, "whitespace")(S) : w(S);
  }
  function w(S) {
    return S === null || be(S) ? (n.exit("definition"), u.parser.defined.push(s), i(S)) : r(S);
  }
}
function Lx(n, i, r) {
  return u;
  function u(p) {
    return Rt(p) ? Va(n, s)(p) : r(p);
  }
  function s(p) {
    return Fg(n, f, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function f(p) {
    return Be(p) ? Ke(n, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || be(p) ? i(p) : r(p);
  }
}
const jx = {
  name: "hardBreakEscape",
  tokenize: Hx
};
function Hx(n, i, r) {
  return u;
  function u(f) {
    return n.enter("hardBreakEscape"), n.consume(f), s;
  }
  function s(f) {
    return be(f) ? (n.exit("hardBreakEscape"), i(f)) : r(f);
  }
}
const qx = {
  name: "headingAtx",
  resolve: Vx,
  tokenize: Yx
};
function Vx(n, i) {
  let r = n.length - 2, u = 3, s, f;
  return n[u][1].type === "whitespace" && (u += 2), r - 2 > u && n[r][1].type === "whitespace" && (r -= 2), n[r][1].type === "atxHeadingSequence" && (u === r - 1 || r - 4 > u && n[r - 2][1].type === "whitespace") && (r -= u + 1 === r ? 2 : 4), r > u && (s = {
    type: "atxHeadingText",
    start: n[u][1].start,
    end: n[r][1].end
  }, f = {
    type: "chunkText",
    start: n[u][1].start,
    end: n[r][1].end,
    contentType: "text"
  }, xn(n, u, r - u + 1, [["enter", s, i], ["enter", f, i], ["exit", f, i], ["exit", s, i]])), n;
}
function Yx(n, i, r) {
  let u = 0;
  return s;
  function s(m) {
    return n.enter("atxHeading"), f(m);
  }
  function f(m) {
    return n.enter("atxHeadingSequence"), d(m);
  }
  function d(m) {
    return m === 35 && u++ < 6 ? (n.consume(m), d) : m === null || Rt(m) ? (n.exit("atxHeadingSequence"), p(m)) : r(m);
  }
  function p(m) {
    return m === 35 ? (n.enter("atxHeadingSequence"), y(m)) : m === null || be(m) ? (n.exit("atxHeading"), i(m)) : Be(m) ? Ke(n, p, "whitespace")(m) : (n.enter("atxHeadingText"), h(m));
  }
  function y(m) {
    return m === 35 ? (n.consume(m), y) : (n.exit("atxHeadingSequence"), p(m));
  }
  function h(m) {
    return m === null || m === 35 || Rt(m) ? (n.exit("atxHeadingText"), p(m)) : (n.consume(m), h);
  }
}
const Gx = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Rm = ["pre", "script", "style", "textarea"], Xx = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Kx,
  tokenize: Fx
}, Qx = {
  partial: !0,
  tokenize: Ix
}, Zx = {
  partial: !0,
  tokenize: Jx
};
function Kx(n) {
  let i = n.length;
  for (; i-- && !(n[i][0] === "enter" && n[i][1].type === "htmlFlow"); )
    ;
  return i > 1 && n[i - 2][1].type === "linePrefix" && (n[i][1].start = n[i - 2][1].start, n[i + 1][1].start = n[i - 2][1].start, n.splice(i - 2, 2)), n;
}
function Fx(n, i, r) {
  const u = this;
  let s, f, d, p, y;
  return h;
  function h(E) {
    return m(E);
  }
  function m(E) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(E), v;
  }
  function v(E) {
    return E === 33 ? (n.consume(E), w) : E === 47 ? (n.consume(E), f = !0, O) : E === 63 ? (n.consume(E), s = 3, u.interrupt ? i : b) : vn(E) ? (n.consume(E), d = String.fromCharCode(E), B) : r(E);
  }
  function w(E) {
    return E === 45 ? (n.consume(E), s = 2, S) : E === 91 ? (n.consume(E), s = 5, p = 0, C) : vn(E) ? (n.consume(E), s = 4, u.interrupt ? i : b) : r(E);
  }
  function S(E) {
    return E === 45 ? (n.consume(E), u.interrupt ? i : b) : r(E);
  }
  function C(E) {
    const le = "CDATA[";
    return E === le.charCodeAt(p++) ? (n.consume(E), p === le.length ? u.interrupt ? i : G : C) : r(E);
  }
  function O(E) {
    return vn(E) ? (n.consume(E), d = String.fromCharCode(E), B) : r(E);
  }
  function B(E) {
    if (E === null || E === 47 || E === 62 || Rt(E)) {
      const le = E === 47, xe = d.toLowerCase();
      return !le && !f && Rm.includes(xe) ? (s = 1, u.interrupt ? i(E) : G(E)) : Gx.includes(d.toLowerCase()) ? (s = 6, le ? (n.consume(E), U) : u.interrupt ? i(E) : G(E)) : (s = 7, u.interrupt && !u.parser.lazy[u.now().line] ? r(E) : f ? I(E) : Q(E));
    }
    return E === 45 || Qt(E) ? (n.consume(E), d += String.fromCharCode(E), B) : r(E);
  }
  function U(E) {
    return E === 62 ? (n.consume(E), u.interrupt ? i : G) : r(E);
  }
  function I(E) {
    return Be(E) ? (n.consume(E), I) : Te(E);
  }
  function Q(E) {
    return E === 47 ? (n.consume(E), Te) : E === 58 || E === 95 || vn(E) ? (n.consume(E), ne) : Be(E) ? (n.consume(E), Q) : Te(E);
  }
  function ne(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || Qt(E) ? (n.consume(E), ne) : $(E);
  }
  function $(E) {
    return E === 61 ? (n.consume(E), L) : Be(E) ? (n.consume(E), $) : Q(E);
  }
  function L(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? r(E) : E === 34 || E === 39 ? (n.consume(E), y = E, re) : Be(E) ? (n.consume(E), L) : P(E);
  }
  function re(E) {
    return E === y ? (n.consume(E), y = null, de) : E === null || be(E) ? r(E) : (n.consume(E), re);
  }
  function P(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || Rt(E) ? $(E) : (n.consume(E), P);
  }
  function de(E) {
    return E === 47 || E === 62 || Be(E) ? Q(E) : r(E);
  }
  function Te(E) {
    return E === 62 ? (n.consume(E), ie) : r(E);
  }
  function ie(E) {
    return E === null || be(E) ? G(E) : Be(E) ? (n.consume(E), ie) : r(E);
  }
  function G(E) {
    return E === 45 && s === 2 ? (n.consume(E), N) : E === 60 && s === 1 ? (n.consume(E), Z) : E === 62 && s === 4 ? (n.consume(E), q) : E === 63 && s === 3 ? (n.consume(E), b) : E === 93 && s === 5 ? (n.consume(E), Ae) : be(E) && (s === 6 || s === 7) ? (n.exit("htmlFlowData"), n.check(Qx, ee, ae)(E)) : E === null || be(E) ? (n.exit("htmlFlowData"), ae(E)) : (n.consume(E), G);
  }
  function ae(E) {
    return n.check(Zx, W, ee)(E);
  }
  function W(E) {
    return n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), te;
  }
  function te(E) {
    return E === null || be(E) ? ae(E) : (n.enter("htmlFlowData"), G(E));
  }
  function N(E) {
    return E === 45 ? (n.consume(E), b) : G(E);
  }
  function Z(E) {
    return E === 47 ? (n.consume(E), d = "", X) : G(E);
  }
  function X(E) {
    if (E === 62) {
      const le = d.toLowerCase();
      return Rm.includes(le) ? (n.consume(E), q) : G(E);
    }
    return vn(E) && d.length < 8 ? (n.consume(E), d += String.fromCharCode(E), X) : G(E);
  }
  function Ae(E) {
    return E === 93 ? (n.consume(E), b) : G(E);
  }
  function b(E) {
    return E === 62 ? (n.consume(E), q) : E === 45 && s === 2 ? (n.consume(E), b) : G(E);
  }
  function q(E) {
    return E === null || be(E) ? (n.exit("htmlFlowData"), ee(E)) : (n.consume(E), q);
  }
  function ee(E) {
    return n.exit("htmlFlow"), i(E);
  }
}
function Jx(n, i, r) {
  const u = this;
  return s;
  function s(d) {
    return be(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), f) : r(d);
  }
  function f(d) {
    return u.parser.lazy[u.now().line] ? r(d) : i(d);
  }
}
function Ix(n, i, r) {
  return u;
  function u(s) {
    return n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), n.attempt(wu, i, r);
  }
}
const Px = {
  name: "htmlText",
  tokenize: $x
};
function $x(n, i, r) {
  const u = this;
  let s, f, d;
  return p;
  function p(b) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(b), y;
  }
  function y(b) {
    return b === 33 ? (n.consume(b), h) : b === 47 ? (n.consume(b), $) : b === 63 ? (n.consume(b), Q) : vn(b) ? (n.consume(b), P) : r(b);
  }
  function h(b) {
    return b === 45 ? (n.consume(b), m) : b === 91 ? (n.consume(b), f = 0, C) : vn(b) ? (n.consume(b), I) : r(b);
  }
  function m(b) {
    return b === 45 ? (n.consume(b), S) : r(b);
  }
  function v(b) {
    return b === null ? r(b) : b === 45 ? (n.consume(b), w) : be(b) ? (d = v, Z(b)) : (n.consume(b), v);
  }
  function w(b) {
    return b === 45 ? (n.consume(b), S) : v(b);
  }
  function S(b) {
    return b === 62 ? N(b) : b === 45 ? w(b) : v(b);
  }
  function C(b) {
    const q = "CDATA[";
    return b === q.charCodeAt(f++) ? (n.consume(b), f === q.length ? O : C) : r(b);
  }
  function O(b) {
    return b === null ? r(b) : b === 93 ? (n.consume(b), B) : be(b) ? (d = O, Z(b)) : (n.consume(b), O);
  }
  function B(b) {
    return b === 93 ? (n.consume(b), U) : O(b);
  }
  function U(b) {
    return b === 62 ? N(b) : b === 93 ? (n.consume(b), U) : O(b);
  }
  function I(b) {
    return b === null || b === 62 ? N(b) : be(b) ? (d = I, Z(b)) : (n.consume(b), I);
  }
  function Q(b) {
    return b === null ? r(b) : b === 63 ? (n.consume(b), ne) : be(b) ? (d = Q, Z(b)) : (n.consume(b), Q);
  }
  function ne(b) {
    return b === 62 ? N(b) : Q(b);
  }
  function $(b) {
    return vn(b) ? (n.consume(b), L) : r(b);
  }
  function L(b) {
    return b === 45 || Qt(b) ? (n.consume(b), L) : re(b);
  }
  function re(b) {
    return be(b) ? (d = re, Z(b)) : Be(b) ? (n.consume(b), re) : N(b);
  }
  function P(b) {
    return b === 45 || Qt(b) ? (n.consume(b), P) : b === 47 || b === 62 || Rt(b) ? de(b) : r(b);
  }
  function de(b) {
    return b === 47 ? (n.consume(b), N) : b === 58 || b === 95 || vn(b) ? (n.consume(b), Te) : be(b) ? (d = de, Z(b)) : Be(b) ? (n.consume(b), de) : N(b);
  }
  function Te(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Qt(b) ? (n.consume(b), Te) : ie(b);
  }
  function ie(b) {
    return b === 61 ? (n.consume(b), G) : be(b) ? (d = ie, Z(b)) : Be(b) ? (n.consume(b), ie) : de(b);
  }
  function G(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? r(b) : b === 34 || b === 39 ? (n.consume(b), s = b, ae) : be(b) ? (d = G, Z(b)) : Be(b) ? (n.consume(b), G) : (n.consume(b), W);
  }
  function ae(b) {
    return b === s ? (n.consume(b), s = void 0, te) : b === null ? r(b) : be(b) ? (d = ae, Z(b)) : (n.consume(b), ae);
  }
  function W(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? r(b) : b === 47 || b === 62 || Rt(b) ? de(b) : (n.consume(b), W);
  }
  function te(b) {
    return b === 47 || b === 62 || Rt(b) ? de(b) : r(b);
  }
  function N(b) {
    return b === 62 ? (n.consume(b), n.exit("htmlTextData"), n.exit("htmlText"), i) : r(b);
  }
  function Z(b) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(b), n.exit("lineEnding"), X;
  }
  function X(b) {
    return Be(b) ? Ke(n, Ae, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : Ae(b);
  }
  function Ae(b) {
    return n.enter("htmlTextData"), d(b);
  }
}
const Ic = {
  name: "labelEnd",
  resolveAll: nS,
  resolveTo: lS,
  tokenize: iS
}, Wx = {
  tokenize: aS
}, eS = {
  tokenize: rS
}, tS = {
  tokenize: uS
};
function nS(n) {
  let i = -1;
  const r = [];
  for (; ++i < n.length; ) {
    const u = n[i][1];
    if (r.push(n[i]), u.type === "labelImage" || u.type === "labelLink" || u.type === "labelEnd") {
      const s = u.type === "labelImage" ? 4 : 2;
      u.type = "data", i += s;
    }
  }
  return n.length !== r.length && xn(n, 0, n.length, r), n;
}
function lS(n, i) {
  let r = n.length, u = 0, s, f, d, p;
  for (; r--; )
    if (s = n[r][1], f) {
      if (s.type === "link" || s.type === "labelLink" && s._inactive)
        break;
      n[r][0] === "enter" && s.type === "labelLink" && (s._inactive = !0);
    } else if (d) {
      if (n[r][0] === "enter" && (s.type === "labelImage" || s.type === "labelLink") && !s._balanced && (f = r, s.type !== "labelLink")) {
        u = 2;
        break;
      }
    } else s.type === "labelEnd" && (d = r);
  const y = {
    type: n[f][1].type === "labelLink" ? "link" : "image",
    start: {
      ...n[f][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  }, h = {
    type: "label",
    start: {
      ...n[f][1].start
    },
    end: {
      ...n[d][1].end
    }
  }, m = {
    type: "labelText",
    start: {
      ...n[f + u + 2][1].end
    },
    end: {
      ...n[d - 2][1].start
    }
  };
  return p = [["enter", y, i], ["enter", h, i]], p = nn(p, n.slice(f + 1, f + u + 3)), p = nn(p, [["enter", m, i]]), p = nn(p, Jc(i.parser.constructs.insideSpan.null, n.slice(f + u + 4, d - 3), i)), p = nn(p, [["exit", m, i], n[d - 2], n[d - 1], ["exit", h, i]]), p = nn(p, n.slice(d + 1)), p = nn(p, [["exit", y, i]]), xn(n, f, n.length, p), n;
}
function iS(n, i, r) {
  const u = this;
  let s = u.events.length, f, d;
  for (; s--; )
    if ((u.events[s][1].type === "labelImage" || u.events[s][1].type === "labelLink") && !u.events[s][1]._balanced) {
      f = u.events[s][1];
      break;
    }
  return p;
  function p(w) {
    return f ? f._inactive ? v(w) : (d = u.parser.defined.includes(Ai(u.sliceSerialize({
      start: f.end,
      end: u.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(w), n.exit("labelMarker"), n.exit("labelEnd"), y) : r(w);
  }
  function y(w) {
    return w === 40 ? n.attempt(Wx, m, d ? m : v)(w) : w === 91 ? n.attempt(eS, m, d ? h : v)(w) : d ? m(w) : v(w);
  }
  function h(w) {
    return n.attempt(tS, m, v)(w);
  }
  function m(w) {
    return i(w);
  }
  function v(w) {
    return f._balanced = !0, r(w);
  }
}
function aS(n, i, r) {
  return u;
  function u(v) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(v), n.exit("resourceMarker"), s;
  }
  function s(v) {
    return Rt(v) ? Va(n, f)(v) : f(v);
  }
  function f(v) {
    return v === 41 ? m(v) : Zg(n, d, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(v);
  }
  function d(v) {
    return Rt(v) ? Va(n, y)(v) : m(v);
  }
  function p(v) {
    return r(v);
  }
  function y(v) {
    return v === 34 || v === 39 || v === 40 ? Fg(n, h, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(v) : m(v);
  }
  function h(v) {
    return Rt(v) ? Va(n, m)(v) : m(v);
  }
  function m(v) {
    return v === 41 ? (n.enter("resourceMarker"), n.consume(v), n.exit("resourceMarker"), n.exit("resource"), i) : r(v);
  }
}
function rS(n, i, r) {
  const u = this;
  return s;
  function s(p) {
    return Kg.call(u, n, f, d, "reference", "referenceMarker", "referenceString")(p);
  }
  function f(p) {
    return u.parser.defined.includes(Ai(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? i(p) : r(p);
  }
  function d(p) {
    return r(p);
  }
}
function uS(n, i, r) {
  return u;
  function u(f) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(f), n.exit("referenceMarker"), s;
  }
  function s(f) {
    return f === 93 ? (n.enter("referenceMarker"), n.consume(f), n.exit("referenceMarker"), n.exit("reference"), i) : r(f);
  }
}
const oS = {
  name: "labelStartImage",
  resolveAll: Ic.resolveAll,
  tokenize: sS
};
function sS(n, i, r) {
  const u = this;
  return s;
  function s(p) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(p), n.exit("labelImageMarker"), f;
  }
  function f(p) {
    return p === 91 ? (n.enter("labelMarker"), n.consume(p), n.exit("labelMarker"), n.exit("labelImage"), d) : r(p);
  }
  function d(p) {
    return p === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? r(p) : i(p);
  }
}
const cS = {
  name: "labelStartLink",
  resolveAll: Ic.resolveAll,
  tokenize: fS
};
function fS(n, i, r) {
  const u = this;
  return s;
  function s(d) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(d), n.exit("labelMarker"), n.exit("labelLink"), f;
  }
  function f(d) {
    return d === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? r(d) : i(d);
  }
}
const uc = {
  name: "lineEnding",
  tokenize: dS
};
function dS(n, i) {
  return r;
  function r(u) {
    return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), Ke(n, i, "linePrefix");
  }
}
const mu = {
  name: "thematicBreak",
  tokenize: hS
};
function hS(n, i, r) {
  let u = 0, s;
  return f;
  function f(h) {
    return n.enter("thematicBreak"), d(h);
  }
  function d(h) {
    return s = h, p(h);
  }
  function p(h) {
    return h === s ? (n.enter("thematicBreakSequence"), y(h)) : u >= 3 && (h === null || be(h)) ? (n.exit("thematicBreak"), i(h)) : r(h);
  }
  function y(h) {
    return h === s ? (n.consume(h), u++, y) : (n.exit("thematicBreakSequence"), Be(h) ? Ke(n, p, "whitespace")(h) : p(h));
  }
}
const _t = {
  continuation: {
    tokenize: yS
  },
  exit: vS,
  name: "list",
  tokenize: gS
}, pS = {
  partial: !0,
  tokenize: xS
}, mS = {
  partial: !0,
  tokenize: bS
};
function gS(n, i, r) {
  const u = this, s = u.events[u.events.length - 1];
  let f = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, d = 0;
  return p;
  function p(S) {
    const C = u.containerState.type || (S === 42 || S === 43 || S === 45 ? "listUnordered" : "listOrdered");
    if (C === "listUnordered" ? !u.containerState.marker || S === u.containerState.marker : Cc(S)) {
      if (u.containerState.type || (u.containerState.type = C, n.enter(C, {
        _container: !0
      })), C === "listUnordered")
        return n.enter("listItemPrefix"), S === 42 || S === 45 ? n.check(mu, r, h)(S) : h(S);
      if (!u.interrupt || S === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), y(S);
    }
    return r(S);
  }
  function y(S) {
    return Cc(S) && ++d < 10 ? (n.consume(S), y) : (!u.interrupt || d < 2) && (u.containerState.marker ? S === u.containerState.marker : S === 41 || S === 46) ? (n.exit("listItemValue"), h(S)) : r(S);
  }
  function h(S) {
    return n.enter("listItemMarker"), n.consume(S), n.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || S, n.check(
      wu,
      // Can’t be empty when interrupting.
      u.interrupt ? r : m,
      n.attempt(pS, w, v)
    );
  }
  function m(S) {
    return u.containerState.initialBlankLine = !0, f++, w(S);
  }
  function v(S) {
    return Be(S) ? (n.enter("listItemPrefixWhitespace"), n.consume(S), n.exit("listItemPrefixWhitespace"), w) : r(S);
  }
  function w(S) {
    return u.containerState.size = f + u.sliceSerialize(n.exit("listItemPrefix"), !0).length, i(S);
  }
}
function yS(n, i, r) {
  const u = this;
  return u.containerState._closeFlow = void 0, n.check(wu, s, f);
  function s(p) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, Ke(n, i, "listItemIndent", u.containerState.size + 1)(p);
  }
  function f(p) {
    return u.containerState.furtherBlankLines || !Be(p) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, d(p)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, n.attempt(mS, i, d)(p));
  }
  function d(p) {
    return u.containerState._closeFlow = !0, u.interrupt = void 0, Ke(n, n.attempt(_t, i, r), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function bS(n, i, r) {
  const u = this;
  return Ke(n, s, "listItemIndent", u.containerState.size + 1);
  function s(f) {
    const d = u.events[u.events.length - 1];
    return d && d[1].type === "listItemIndent" && d[2].sliceSerialize(d[1], !0).length === u.containerState.size ? i(f) : r(f);
  }
}
function vS(n) {
  n.exit(this.containerState.type);
}
function xS(n, i, r) {
  const u = this;
  return Ke(n, s, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(f) {
    const d = u.events[u.events.length - 1];
    return !Be(f) && d && d[1].type === "listItemPrefixWhitespace" ? i(f) : r(f);
  }
}
const Om = {
  name: "setextUnderline",
  resolveTo: SS,
  tokenize: ES
};
function SS(n, i) {
  let r = n.length, u, s, f;
  for (; r--; )
    if (n[r][0] === "enter") {
      if (n[r][1].type === "content") {
        u = r;
        break;
      }
      n[r][1].type === "paragraph" && (s = r);
    } else
      n[r][1].type === "content" && n.splice(r, 1), !f && n[r][1].type === "definition" && (f = r);
  const d = {
    type: "setextHeading",
    start: {
      ...n[u][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  };
  return n[s][1].type = "setextHeadingText", f ? (n.splice(s, 0, ["enter", d, i]), n.splice(f + 1, 0, ["exit", n[u][1], i]), n[u][1].end = {
    ...n[f][1].end
  }) : n[u][1] = d, n.push(["exit", d, i]), n;
}
function ES(n, i, r) {
  const u = this;
  let s;
  return f;
  function f(h) {
    let m = u.events.length, v;
    for (; m--; )
      if (u.events[m][1].type !== "lineEnding" && u.events[m][1].type !== "linePrefix" && u.events[m][1].type !== "content") {
        v = u.events[m][1].type === "paragraph";
        break;
      }
    return !u.parser.lazy[u.now().line] && (u.interrupt || v) ? (n.enter("setextHeadingLine"), s = h, d(h)) : r(h);
  }
  function d(h) {
    return n.enter("setextHeadingLineSequence"), p(h);
  }
  function p(h) {
    return h === s ? (n.consume(h), p) : (n.exit("setextHeadingLineSequence"), Be(h) ? Ke(n, y, "lineSuffix")(h) : y(h));
  }
  function y(h) {
    return h === null || be(h) ? (n.exit("setextHeadingLine"), i(h)) : r(h);
  }
}
const wS = {
  tokenize: TS
};
function TS(n) {
  const i = this, r = n.attempt(
    // Try to parse a blank line.
    wu,
    u,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, s, Ke(n, n.attempt(this.parser.constructs.flow, s, n.attempt(Rx, s)), "linePrefix"))
  );
  return r;
  function u(f) {
    if (f === null) {
      n.consume(f);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(f), n.exit("lineEndingBlank"), i.currentConstruct = void 0, r;
  }
  function s(f) {
    if (f === null) {
      n.consume(f);
      return;
    }
    return n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), i.currentConstruct = void 0, r;
  }
}
const AS = {
  resolveAll: Ig()
}, kS = Jg("string"), CS = Jg("text");
function Jg(n) {
  return {
    resolveAll: Ig(n === "text" ? _S : void 0),
    tokenize: i
  };
  function i(r) {
    const u = this, s = this.parser.constructs[n], f = r.attempt(s, d, p);
    return d;
    function d(m) {
      return h(m) ? f(m) : p(m);
    }
    function p(m) {
      if (m === null) {
        r.consume(m);
        return;
      }
      return r.enter("data"), r.consume(m), y;
    }
    function y(m) {
      return h(m) ? (r.exit("data"), f(m)) : (r.consume(m), y);
    }
    function h(m) {
      if (m === null)
        return !0;
      const v = s[m];
      let w = -1;
      if (v)
        for (; ++w < v.length; ) {
          const S = v[w];
          if (!S.previous || S.previous.call(u, u.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Ig(n) {
  return i;
  function i(r, u) {
    let s = -1, f;
    for (; ++s <= r.length; )
      f === void 0 ? r[s] && r[s][1].type === "data" && (f = s, s++) : (!r[s] || r[s][1].type !== "data") && (s !== f + 2 && (r[f][1].end = r[s - 1][1].end, r.splice(f + 2, s - f - 2), s = f + 2), f = void 0);
    return n ? n(r, u) : r;
  }
}
function _S(n, i) {
  let r = 0;
  for (; ++r <= n.length; )
    if ((r === n.length || n[r][1].type === "lineEnding") && n[r - 1][1].type === "data") {
      const u = n[r - 1][1], s = i.sliceStream(u);
      let f = s.length, d = -1, p = 0, y;
      for (; f--; ) {
        const h = s[f];
        if (typeof h == "string") {
          for (d = h.length; h.charCodeAt(d - 1) === 32; )
            p++, d--;
          if (d) break;
          d = -1;
        } else if (h === -2)
          y = !0, p++;
        else if (h !== -1) {
          f++;
          break;
        }
      }
      if (i._contentTypeTextTrailing && r === n.length && (p = 0), p) {
        const h = {
          type: r === n.length || y || p < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: f ? d : u.start._bufferIndex + d,
            _index: u.start._index + f,
            line: u.end.line,
            column: u.end.column - p,
            offset: u.end.offset - p
          },
          end: {
            ...u.end
          }
        };
        u.end = {
          ...h.start
        }, u.start.offset === u.end.offset ? Object.assign(u, h) : (n.splice(r, 0, ["enter", h, i], ["exit", h, i]), r += 2);
      }
      r++;
    }
  return n;
}
const RS = {
  42: _t,
  43: _t,
  45: _t,
  48: _t,
  49: _t,
  50: _t,
  51: _t,
  52: _t,
  53: _t,
  54: _t,
  55: _t,
  56: _t,
  57: _t,
  62: Yg
}, OS = {
  91: Dx
}, zS = {
  [-2]: rc,
  [-1]: rc,
  32: rc
}, NS = {
  35: qx,
  42: mu,
  45: [Om, mu],
  60: Xx,
  61: Om,
  95: mu,
  96: _m,
  126: _m
}, MS = {
  38: Xg,
  92: Gg
}, DS = {
  [-5]: uc,
  [-4]: uc,
  [-3]: uc,
  33: oS,
  38: Xg,
  42: _c,
  60: [cx, Px],
  91: cS,
  92: [jx, Gg],
  93: Ic,
  95: _c,
  96: wx
}, US = {
  null: [_c, AS]
}, BS = {
  null: [42, 95]
}, LS = {
  null: []
}, jS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: BS,
  contentInitial: OS,
  disable: LS,
  document: RS,
  flow: NS,
  flowInitial: zS,
  insideSpan: US,
  string: MS,
  text: DS
}, Symbol.toStringTag, { value: "Module" }));
function HS(n, i, r) {
  let u = {
    _bufferIndex: -1,
    _index: 0,
    line: r && r.line || 1,
    column: r && r.column || 1,
    offset: r && r.offset || 0
  };
  const s = {}, f = [];
  let d = [], p = [];
  const y = {
    attempt: re($),
    check: re(L),
    consume: I,
    enter: Q,
    exit: ne,
    interrupt: re(L, {
      interrupt: !0
    })
  }, h = {
    code: null,
    containerState: {},
    defineSkip: O,
    events: [],
    now: C,
    parser: n,
    previous: null,
    sliceSerialize: w,
    sliceStream: S,
    write: v
  };
  let m = i.tokenize.call(h, y);
  return i.resolveAll && f.push(i), h;
  function v(ie) {
    return d = nn(d, ie), B(), d[d.length - 1] !== null ? [] : (P(i, 0), h.events = Jc(f, h.events, h), h.events);
  }
  function w(ie, G) {
    return VS(S(ie), G);
  }
  function S(ie) {
    return qS(d, ie);
  }
  function C() {
    const {
      _bufferIndex: ie,
      _index: G,
      line: ae,
      column: W,
      offset: te
    } = u;
    return {
      _bufferIndex: ie,
      _index: G,
      line: ae,
      column: W,
      offset: te
    };
  }
  function O(ie) {
    s[ie.line] = ie.column, Te();
  }
  function B() {
    let ie;
    for (; u._index < d.length; ) {
      const G = d[u._index];
      if (typeof G == "string")
        for (ie = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === ie && u._bufferIndex < G.length; )
          U(G.charCodeAt(u._bufferIndex));
      else
        U(G);
    }
  }
  function U(ie) {
    m = m(ie);
  }
  function I(ie) {
    be(ie) ? (u.line++, u.column = 1, u.offset += ie === -3 ? 2 : 1, Te()) : ie !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    d[u._index].length && (u._bufferIndex = -1, u._index++)), h.previous = ie;
  }
  function Q(ie, G) {
    const ae = G || {};
    return ae.type = ie, ae.start = C(), h.events.push(["enter", ae, h]), p.push(ae), ae;
  }
  function ne(ie) {
    const G = p.pop();
    return G.end = C(), h.events.push(["exit", G, h]), G;
  }
  function $(ie, G) {
    P(ie, G.from);
  }
  function L(ie, G) {
    G.restore();
  }
  function re(ie, G) {
    return ae;
    function ae(W, te, N) {
      let Z, X, Ae, b;
      return Array.isArray(W) ? (
        /* c8 ignore next 1 */
        ee(W)
      ) : "tokenize" in W ? (
        // Looks like a construct.
        ee([
          /** @type {Construct} */
          W
        ])
      ) : q(W);
      function q(ue) {
        return _e;
        function _e(Ne) {
          const et = Ne !== null && ue[Ne], xt = Ne !== null && ue.null, Mt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(et) ? et : et ? [et] : [],
            ...Array.isArray(xt) ? xt : xt ? [xt] : []
          ];
          return ee(Mt)(Ne);
        }
      }
      function ee(ue) {
        return Z = ue, X = 0, ue.length === 0 ? N : E(ue[X]);
      }
      function E(ue) {
        return _e;
        function _e(Ne) {
          return b = de(), Ae = ue, ue.partial || (h.currentConstruct = ue), ue.name && h.parser.constructs.disable.null.includes(ue.name) ? xe() : ue.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            G ? Object.assign(Object.create(h), G) : h,
            y,
            le,
            xe
          )(Ne);
        }
      }
      function le(ue) {
        return ie(Ae, b), te;
      }
      function xe(ue) {
        return b.restore(), ++X < Z.length ? E(Z[X]) : N;
      }
    }
  }
  function P(ie, G) {
    ie.resolveAll && !f.includes(ie) && f.push(ie), ie.resolve && xn(h.events, G, h.events.length - G, ie.resolve(h.events.slice(G), h)), ie.resolveTo && (h.events = ie.resolveTo(h.events, h));
  }
  function de() {
    const ie = C(), G = h.previous, ae = h.currentConstruct, W = h.events.length, te = Array.from(p);
    return {
      from: W,
      restore: N
    };
    function N() {
      u = ie, h.previous = G, h.currentConstruct = ae, h.events.length = W, p = te, Te();
    }
  }
  function Te() {
    u.line in s && u.column < 2 && (u.column = s[u.line], u.offset += s[u.line] - 1);
  }
}
function qS(n, i) {
  const r = i.start._index, u = i.start._bufferIndex, s = i.end._index, f = i.end._bufferIndex;
  let d;
  if (r === s)
    d = [n[r].slice(u, f)];
  else {
    if (d = n.slice(r, s), u > -1) {
      const p = d[0];
      typeof p == "string" ? d[0] = p.slice(u) : d.shift();
    }
    f > 0 && d.push(n[s].slice(0, f));
  }
  return d;
}
function VS(n, i) {
  let r = -1;
  const u = [];
  let s;
  for (; ++r < n.length; ) {
    const f = n[r];
    let d;
    if (typeof f == "string")
      d = f;
    else switch (f) {
      case -5: {
        d = "\r";
        break;
      }
      case -4: {
        d = `
`;
        break;
      }
      case -3: {
        d = `\r
`;
        break;
      }
      case -2: {
        d = i ? " " : "	";
        break;
      }
      case -1: {
        if (!i && s) continue;
        d = " ";
        break;
      }
      default:
        d = String.fromCharCode(f);
    }
    s = f === -2, u.push(d);
  }
  return u.join("");
}
function YS(n) {
  const u = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Jv([jS, ...(n || {}).extensions || []])
    ),
    content: s(lx),
    defined: [],
    document: s(ax),
    flow: s(wS),
    lazy: {},
    string: s(kS),
    text: s(CS)
  };
  return u;
  function s(f) {
    return d;
    function d(p) {
      return HS(u, f, p);
    }
  }
}
function GS(n) {
  for (; !Qg(n); )
    ;
  return n;
}
const zm = /[\0\t\n\r]/g;
function XS() {
  let n = 1, i = "", r = !0, u;
  return s;
  function s(f, d, p) {
    const y = [];
    let h, m, v, w, S;
    for (f = i + (typeof f == "string" ? f.toString() : new TextDecoder(d || void 0).decode(f)), v = 0, i = "", r && (f.charCodeAt(0) === 65279 && v++, r = void 0); v < f.length; ) {
      if (zm.lastIndex = v, h = zm.exec(f), w = h && h.index !== void 0 ? h.index : f.length, S = f.charCodeAt(w), !h) {
        i = f.slice(v);
        break;
      }
      if (S === 10 && v === w && u)
        y.push(-3), u = void 0;
      else
        switch (u && (y.push(-5), u = void 0), v < w && (y.push(f.slice(v, w)), n += w - v), S) {
          case 0: {
            y.push(65533), n++;
            break;
          }
          case 9: {
            for (m = Math.ceil(n / 4) * 4, y.push(-2); n++ < m; ) y.push(-1);
            break;
          }
          case 10: {
            y.push(-4), n = 1;
            break;
          }
          default:
            u = !0, n = 1;
        }
      v = w + 1;
    }
    return p && (u && y.push(-5), i && y.push(i), y.push(null)), y;
  }
}
const QS = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ZS(n) {
  return n.replace(QS, KS);
}
function KS(n, i, r) {
  if (i)
    return i;
  if (r.charCodeAt(0) === 35) {
    const s = r.charCodeAt(1), f = s === 120 || s === 88;
    return Vg(r.slice(f ? 2 : 1), f ? 16 : 10);
  }
  return Fc(r) || n;
}
const Pg = {}.hasOwnProperty;
function FS(n, i, r) {
  return typeof i != "string" && (r = i, i = void 0), JS(r)(GS(YS(r).document().write(XS()(n, i, !0))));
}
function JS(n) {
  const i = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: f(Di),
      autolinkProtocol: de,
      autolinkEmail: de,
      atxHeading: f(Ia),
      blockQuote: f(xt),
      characterEscape: de,
      characterReference: de,
      codeFenced: f(Mt),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: f(Mt, d),
      codeText: f(sn, d),
      codeTextData: de,
      data: de,
      codeFlowValue: de,
      definition: f(Ni),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: f(Mi),
      hardBreakEscape: f(Pa),
      hardBreakTrailing: f(Pa),
      htmlFlow: f(Dt, d),
      htmlFlowData: de,
      htmlText: f(Dt, d),
      htmlTextData: de,
      image: f(Mu),
      label: d,
      link: f(Di),
      listItem: f(Ul),
      listItemValue: w,
      listOrdered: f(Ui, v),
      listUnordered: f(Ui),
      paragraph: f(Du),
      reference: E,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: f(Ia),
      strong: f($a),
      thematicBreak: f(Bu)
    },
    exit: {
      atxHeading: y(),
      atxHeadingSequence: $,
      autolink: y(),
      autolinkEmail: et,
      autolinkProtocol: Ne,
      blockQuote: y(),
      characterEscapeValue: Te,
      characterReferenceMarkerHexadecimal: xe,
      characterReferenceMarkerNumeric: xe,
      characterReferenceValue: ue,
      characterReference: _e,
      codeFenced: y(B),
      codeFencedFence: O,
      codeFencedFenceInfo: S,
      codeFencedFenceMeta: C,
      codeFlowValue: Te,
      codeIndented: y(U),
      codeText: y(te),
      codeTextData: Te,
      data: Te,
      definition: y(),
      definitionDestinationString: ne,
      definitionLabelString: I,
      definitionTitleString: Q,
      emphasis: y(),
      hardBreakEscape: y(G),
      hardBreakTrailing: y(G),
      htmlFlow: y(ae),
      htmlFlowData: Te,
      htmlText: y(W),
      htmlTextData: Te,
      image: y(Z),
      label: Ae,
      labelText: X,
      lineEnding: ie,
      link: y(N),
      listItem: y(),
      listOrdered: y(),
      listUnordered: y(),
      paragraph: y(),
      referenceString: le,
      resourceDestinationString: b,
      resourceTitleString: q,
      resource: ee,
      setextHeading: y(P),
      setextHeadingLineSequence: re,
      setextHeadingText: L,
      strong: y(),
      thematicBreak: y()
    }
  };
  $g(i, (n || {}).mdastExtensions || []);
  const r = {};
  return u;
  function u(j) {
    let K = {
      type: "root",
      children: []
    };
    const he = {
      stack: [K],
      tokenStack: [],
      config: i,
      enter: p,
      exit: h,
      buffer: d,
      resume: m,
      data: r
    }, ge = [];
    let je = -1;
    for (; ++je < j.length; )
      if (j[je][1].type === "listOrdered" || j[je][1].type === "listUnordered")
        if (j[je][0] === "enter")
          ge.push(je);
        else {
          const Ut = ge.pop();
          je = s(j, Ut, je);
        }
    for (je = -1; ++je < j.length; ) {
      const Ut = i[j[je][0]];
      Pg.call(Ut, j[je][1].type) && Ut[j[je][1].type].call(Object.assign({
        sliceSerialize: j[je][2].sliceSerialize
      }, he), j[je][1]);
    }
    if (he.tokenStack.length > 0) {
      const Ut = he.tokenStack[he.tokenStack.length - 1];
      (Ut[1] || Nm).call(he, void 0, Ut[0]);
    }
    for (K.position = {
      start: cl(j.length > 0 ? j[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: cl(j.length > 0 ? j[j.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, je = -1; ++je < i.transforms.length; )
      K = i.transforms[je](K) || K;
    return K;
  }
  function s(j, K, he) {
    let ge = K - 1, je = -1, Ut = !1, Sn, Et, cn, Bt;
    for (; ++ge <= he; ) {
      const ut = j[ge];
      switch (ut[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ut[0] === "enter" ? je++ : je--, Bt = void 0;
          break;
        }
        case "lineEndingBlank": {
          ut[0] === "enter" && (Sn && !Bt && !je && !cn && (cn = ge), Bt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Bt = void 0;
      }
      if (!je && ut[0] === "enter" && ut[1].type === "listItemPrefix" || je === -1 && ut[0] === "exit" && (ut[1].type === "listUnordered" || ut[1].type === "listOrdered")) {
        if (Sn) {
          let Zt = ge;
          for (Et = void 0; Zt--; ) {
            const ln = j[Zt];
            if (ln[1].type === "lineEnding" || ln[1].type === "lineEndingBlank") {
              if (ln[0] === "exit") continue;
              Et && (j[Et][1].type = "lineEndingBlank", Ut = !0), ln[1].type = "lineEnding", Et = Zt;
            } else if (!(ln[1].type === "linePrefix" || ln[1].type === "blockQuotePrefix" || ln[1].type === "blockQuotePrefixWhitespace" || ln[1].type === "blockQuoteMarker" || ln[1].type === "listItemIndent")) break;
          }
          cn && (!Et || cn < Et) && (Sn._spread = !0), Sn.end = Object.assign({}, Et ? j[Et][1].start : ut[1].end), j.splice(Et || ge, 0, ["exit", Sn, ut[2]]), ge++, he++;
        }
        if (ut[1].type === "listItemPrefix") {
          const Zt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ut[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Sn = Zt, j.splice(ge, 0, ["enter", Zt, ut[2]]), ge++, he++, cn = void 0, Bt = !0;
        }
      }
    }
    return j[K][1]._spread = Ut, he;
  }
  function f(j, K) {
    return he;
    function he(ge) {
      p.call(this, j(ge), ge), K && K.call(this, ge);
    }
  }
  function d() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function p(j, K, he) {
    this.stack[this.stack.length - 1].children.push(j), this.stack.push(j), this.tokenStack.push([K, he || void 0]), j.position = {
      start: cl(K.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function y(j) {
    return K;
    function K(he) {
      j && j.call(this, he), h.call(this, he);
    }
  }
  function h(j, K) {
    const he = this.stack.pop(), ge = this.tokenStack.pop();
    if (ge)
      ge[0].type !== j.type && (K ? K.call(this, j, ge[0]) : (ge[1] || Nm).call(this, j, ge[0]));
    else throw new Error("Cannot close `" + j.type + "` (" + qa({
      start: j.start,
      end: j.end
    }) + "): it’s not open");
    he.position.end = cl(j.end);
  }
  function m() {
    return Kv(this.stack.pop());
  }
  function v() {
    this.data.expectingFirstListItemValue = !0;
  }
  function w(j) {
    if (this.data.expectingFirstListItemValue) {
      const K = this.stack[this.stack.length - 2];
      K.start = Number.parseInt(this.sliceSerialize(j), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function S() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.lang = j;
  }
  function C() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.meta = j;
  }
  function O() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function B() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function U() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = j.replace(/(\r?\n|\r)$/g, "");
  }
  function I(j) {
    const K = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = K, he.identifier = Ai(this.sliceSerialize(j)).toLowerCase();
  }
  function Q() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.title = j;
  }
  function ne() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.url = j;
  }
  function $(j) {
    const K = this.stack[this.stack.length - 1];
    if (!K.depth) {
      const he = this.sliceSerialize(j).length;
      K.depth = he;
    }
  }
  function L() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function re(j) {
    const K = this.stack[this.stack.length - 1];
    K.depth = this.sliceSerialize(j).codePointAt(0) === 61 ? 1 : 2;
  }
  function P() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function de(j) {
    const he = this.stack[this.stack.length - 1].children;
    let ge = he[he.length - 1];
    (!ge || ge.type !== "text") && (ge = Uu(), ge.position = {
      start: cl(j.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, he.push(ge)), this.stack.push(ge);
  }
  function Te(j) {
    const K = this.stack.pop();
    K.value += this.sliceSerialize(j), K.position.end = cl(j.end);
  }
  function ie(j) {
    const K = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const he = K.children[K.children.length - 1];
      he.position.end = cl(j.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(K.type) && (de.call(this, j), Te.call(this, j));
  }
  function G() {
    this.data.atHardBreak = !0;
  }
  function ae() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = j;
  }
  function W() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = j;
  }
  function te() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = j;
  }
  function N() {
    const j = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || "shortcut";
      j.type += "Reference", j.referenceType = K, delete j.url, delete j.title;
    } else
      delete j.identifier, delete j.label;
    this.data.referenceType = void 0;
  }
  function Z() {
    const j = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || "shortcut";
      j.type += "Reference", j.referenceType = K, delete j.url, delete j.title;
    } else
      delete j.identifier, delete j.label;
    this.data.referenceType = void 0;
  }
  function X(j) {
    const K = this.sliceSerialize(j), he = this.stack[this.stack.length - 2];
    he.label = ZS(K), he.identifier = Ai(K).toLowerCase();
  }
  function Ae() {
    const j = this.stack[this.stack.length - 1], K = this.resume(), he = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, he.type === "link") {
      const ge = j.children;
      he.children = ge;
    } else
      he.alt = K;
  }
  function b() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.url = j;
  }
  function q() {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.title = j;
  }
  function ee() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function le(j) {
    const K = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = K, he.identifier = Ai(this.sliceSerialize(j)).toLowerCase(), this.data.referenceType = "full";
  }
  function xe(j) {
    this.data.characterReferenceType = j.type;
  }
  function ue(j) {
    const K = this.sliceSerialize(j), he = this.data.characterReferenceType;
    let ge;
    he ? (ge = Vg(K, he === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : ge = Fc(K);
    const je = this.stack[this.stack.length - 1];
    je.value += ge;
  }
  function _e(j) {
    const K = this.stack.pop();
    K.position.end = cl(j.end);
  }
  function Ne(j) {
    Te.call(this, j);
    const K = this.stack[this.stack.length - 1];
    K.url = this.sliceSerialize(j);
  }
  function et(j) {
    Te.call(this, j);
    const K = this.stack[this.stack.length - 1];
    K.url = "mailto:" + this.sliceSerialize(j);
  }
  function xt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Mt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function sn() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Ni() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Mi() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Ia() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Pa() {
    return {
      type: "break"
    };
  }
  function Dt() {
    return {
      type: "html",
      value: ""
    };
  }
  function Mu() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Di() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Ui(j) {
    return {
      type: "list",
      ordered: j.type === "listOrdered",
      start: null,
      spread: j._spread,
      children: []
    };
  }
  function Ul(j) {
    return {
      type: "listItem",
      spread: j._spread,
      checked: null,
      children: []
    };
  }
  function Du() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function $a() {
    return {
      type: "strong",
      children: []
    };
  }
  function Uu() {
    return {
      type: "text",
      value: ""
    };
  }
  function Bu() {
    return {
      type: "thematicBreak"
    };
  }
}
function cl(n) {
  return {
    line: n.line,
    column: n.column,
    offset: n.offset
  };
}
function $g(n, i) {
  let r = -1;
  for (; ++r < i.length; ) {
    const u = i[r];
    Array.isArray(u) ? $g(n, u) : IS(n, u);
  }
}
function IS(n, i) {
  let r;
  for (r in i)
    if (Pg.call(i, r))
      switch (r) {
        case "canContainEols": {
          const u = i[r];
          u && n[r].push(...u);
          break;
        }
        case "transforms": {
          const u = i[r];
          u && n[r].push(...u);
          break;
        }
        case "enter":
        case "exit": {
          const u = i[r];
          u && Object.assign(n[r], u);
          break;
        }
      }
}
function Nm(n, i) {
  throw n ? new Error("Cannot close `" + n.type + "` (" + qa({
    start: n.start,
    end: n.end
  }) + "): a different token (`" + i.type + "`, " + qa({
    start: i.start,
    end: i.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + qa({
    start: i.start,
    end: i.end
  }) + ") is still open");
}
function PS(n) {
  const i = this;
  i.parser = r;
  function r(u) {
    return FS(u, {
      ...i.data("settings"),
      ...n,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: i.data("micromarkExtensions") || [],
      mdastExtensions: i.data("fromMarkdownExtensions") || []
    });
  }
}
function $S(n, i) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(i), !0)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function WS(n, i) {
  const r = { type: "element", tagName: "br", properties: {}, children: [] };
  return n.patch(i, r), [n.applyData(i, r), { type: "text", value: `
` }];
}
function eE(n, i) {
  const r = i.value ? i.value + `
` : "", u = {};
  i.lang && (u.className = ["language-" + i.lang]);
  let s = {
    type: "element",
    tagName: "code",
    properties: u,
    children: [{ type: "text", value: r }]
  };
  return i.meta && (s.data = { meta: i.meta }), n.patch(i, s), s = n.applyData(i, s), s = { type: "element", tagName: "pre", properties: {}, children: [s] }, n.patch(i, s), s;
}
function tE(n, i) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function nE(n, i) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function lE(n, i) {
  const r = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", u = String(i.identifier).toUpperCase(), s = Ri(u.toLowerCase()), f = n.footnoteOrder.indexOf(u);
  let d, p = n.footnoteCounts.get(u);
  p === void 0 ? (p = 0, n.footnoteOrder.push(u), d = n.footnoteOrder.length) : d = f + 1, p += 1, n.footnoteCounts.set(u, p);
  const y = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + r + "fn-" + s,
      id: r + "fnref-" + s + (p > 1 ? "-" + p : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(d) }]
  };
  n.patch(i, y);
  const h = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [y]
  };
  return n.patch(i, h), n.applyData(i, h);
}
function iE(n, i) {
  const r = {
    type: "element",
    tagName: "h" + i.depth,
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function aE(n, i) {
  if (n.options.allowDangerousHtml) {
    const r = { type: "raw", value: i.value };
    return n.patch(i, r), n.applyData(i, r);
  }
}
function Wg(n, i) {
  const r = i.referenceType;
  let u = "]";
  if (r === "collapsed" ? u += "[]" : r === "full" && (u += "[" + (i.label || i.identifier) + "]"), i.type === "imageReference")
    return [{ type: "text", value: "![" + i.alt + u }];
  const s = n.all(i), f = s[0];
  f && f.type === "text" ? f.value = "[" + f.value : s.unshift({ type: "text", value: "[" });
  const d = s[s.length - 1];
  return d && d.type === "text" ? d.value += u : s.push({ type: "text", value: u }), s;
}
function rE(n, i) {
  const r = String(i.identifier).toUpperCase(), u = n.definitionById.get(r);
  if (!u)
    return Wg(n, i);
  const s = { src: Ri(u.url || ""), alt: i.alt };
  u.title !== null && u.title !== void 0 && (s.title = u.title);
  const f = { type: "element", tagName: "img", properties: s, children: [] };
  return n.patch(i, f), n.applyData(i, f);
}
function uE(n, i) {
  const r = { src: Ri(i.url) };
  i.alt !== null && i.alt !== void 0 && (r.alt = i.alt), i.title !== null && i.title !== void 0 && (r.title = i.title);
  const u = { type: "element", tagName: "img", properties: r, children: [] };
  return n.patch(i, u), n.applyData(i, u);
}
function oE(n, i) {
  const r = { type: "text", value: i.value.replace(/\r?\n|\r/g, " ") };
  n.patch(i, r);
  const u = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [r]
  };
  return n.patch(i, u), n.applyData(i, u);
}
function sE(n, i) {
  const r = String(i.identifier).toUpperCase(), u = n.definitionById.get(r);
  if (!u)
    return Wg(n, i);
  const s = { href: Ri(u.url || "") };
  u.title !== null && u.title !== void 0 && (s.title = u.title);
  const f = {
    type: "element",
    tagName: "a",
    properties: s,
    children: n.all(i)
  };
  return n.patch(i, f), n.applyData(i, f);
}
function cE(n, i) {
  const r = { href: Ri(i.url) };
  i.title !== null && i.title !== void 0 && (r.title = i.title);
  const u = {
    type: "element",
    tagName: "a",
    properties: r,
    children: n.all(i)
  };
  return n.patch(i, u), n.applyData(i, u);
}
function fE(n, i, r) {
  const u = n.all(i), s = r ? dE(r) : ey(i), f = {}, d = [];
  if (typeof i.checked == "boolean") {
    const m = u[0];
    let v;
    m && m.type === "element" && m.tagName === "p" ? v = m : (v = { type: "element", tagName: "p", properties: {}, children: [] }, u.unshift(v)), v.children.length > 0 && v.children.unshift({ type: "text", value: " " }), v.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: i.checked, disabled: !0 },
      children: []
    }), f.className = ["task-list-item"];
  }
  let p = -1;
  for (; ++p < u.length; ) {
    const m = u[p];
    (s || p !== 0 || m.type !== "element" || m.tagName !== "p") && d.push({ type: "text", value: `
` }), m.type === "element" && m.tagName === "p" && !s ? d.push(...m.children) : d.push(m);
  }
  const y = u[u.length - 1];
  y && (s || y.type !== "element" || y.tagName !== "p") && d.push({ type: "text", value: `
` });
  const h = { type: "element", tagName: "li", properties: f, children: d };
  return n.patch(i, h), n.applyData(i, h);
}
function dE(n) {
  let i = !1;
  if (n.type === "list") {
    i = n.spread || !1;
    const r = n.children;
    let u = -1;
    for (; !i && ++u < r.length; )
      i = ey(r[u]);
  }
  return i;
}
function ey(n) {
  const i = n.spread;
  return i ?? n.children.length > 1;
}
function hE(n, i) {
  const r = {}, u = n.all(i);
  let s = -1;
  for (typeof i.start == "number" && i.start !== 1 && (r.start = i.start); ++s < u.length; ) {
    const d = u[s];
    if (d.type === "element" && d.tagName === "li" && d.properties && Array.isArray(d.properties.className) && d.properties.className.includes("task-list-item")) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const f = {
    type: "element",
    tagName: i.ordered ? "ol" : "ul",
    properties: r,
    children: n.wrap(u, !0)
  };
  return n.patch(i, f), n.applyData(i, f);
}
function pE(n, i) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function mE(n, i) {
  const r = { type: "root", children: n.wrap(n.all(i)) };
  return n.patch(i, r), n.applyData(i, r);
}
function gE(n, i) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function yE(n, i) {
  const r = n.all(i), u = r.shift(), s = [];
  if (u) {
    const d = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: n.wrap([u], !0)
    };
    n.patch(i.children[0], d), s.push(d);
  }
  if (r.length > 0) {
    const d = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: n.wrap(r, !0)
    }, p = Xc(i.children[1]), y = Dg(i.children[i.children.length - 1]);
    p && y && (d.position = { start: p, end: y }), s.push(d);
  }
  const f = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(s, !0)
  };
  return n.patch(i, f), n.applyData(i, f);
}
function bE(n, i, r) {
  const u = r ? r.children : void 0, f = (u ? u.indexOf(i) : 1) === 0 ? "th" : "td", d = r && r.type === "table" ? r.align : void 0, p = d ? d.length : i.children.length;
  let y = -1;
  const h = [];
  for (; ++y < p; ) {
    const v = i.children[y], w = {}, S = d ? d[y] : void 0;
    S && (w.align = S);
    let C = { type: "element", tagName: f, properties: w, children: [] };
    v && (C.children = n.all(v), n.patch(v, C), C = n.applyData(v, C)), h.push(C);
  }
  const m = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: n.wrap(h, !0)
  };
  return n.patch(i, m), n.applyData(i, m);
}
function vE(n, i) {
  const r = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
const Mm = 9, Dm = 32;
function xE(n) {
  const i = String(n), r = /\r?\n|\r/g;
  let u = r.exec(i), s = 0;
  const f = [];
  for (; u; )
    f.push(
      Um(i.slice(s, u.index), s > 0, !0),
      u[0]
    ), s = u.index + u[0].length, u = r.exec(i);
  return f.push(Um(i.slice(s), s > 0, !1)), f.join("");
}
function Um(n, i, r) {
  let u = 0, s = n.length;
  if (i) {
    let f = n.codePointAt(u);
    for (; f === Mm || f === Dm; )
      u++, f = n.codePointAt(u);
  }
  if (r) {
    let f = n.codePointAt(s - 1);
    for (; f === Mm || f === Dm; )
      s--, f = n.codePointAt(s - 1);
  }
  return s > u ? n.slice(u, s) : "";
}
function SE(n, i) {
  const r = { type: "text", value: xE(String(i.value)) };
  return n.patch(i, r), n.applyData(i, r);
}
function EE(n, i) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return n.patch(i, r), n.applyData(i, r);
}
const wE = {
  blockquote: $S,
  break: WS,
  code: eE,
  delete: tE,
  emphasis: nE,
  footnoteReference: lE,
  heading: iE,
  html: aE,
  imageReference: rE,
  image: uE,
  inlineCode: oE,
  linkReference: sE,
  link: cE,
  listItem: fE,
  list: hE,
  paragraph: pE,
  // @ts-expect-error: root is different, but hard to type.
  root: mE,
  strong: gE,
  table: yE,
  tableCell: vE,
  tableRow: bE,
  text: SE,
  thematicBreak: EE,
  toml: fu,
  yaml: fu,
  definition: fu,
  footnoteDefinition: fu
};
function fu() {
}
const ty = -1, Tu = 0, Ya = 1, vu = 2, Pc = 3, $c = 4, Wc = 5, ef = 6, ny = 7, ly = 8, Bm = typeof self == "object" ? self : globalThis, TE = (n, i) => {
  const r = (s, f) => (n.set(f, s), s), u = (s) => {
    if (n.has(s))
      return n.get(s);
    const [f, d] = i[s];
    switch (f) {
      case Tu:
      case ty:
        return r(d, s);
      case Ya: {
        const p = r([], s);
        for (const y of d)
          p.push(u(y));
        return p;
      }
      case vu: {
        const p = r({}, s);
        for (const [y, h] of d)
          p[u(y)] = u(h);
        return p;
      }
      case Pc:
        return r(new Date(d), s);
      case $c: {
        const { source: p, flags: y } = d;
        return r(new RegExp(p, y), s);
      }
      case Wc: {
        const p = r(/* @__PURE__ */ new Map(), s);
        for (const [y, h] of d)
          p.set(u(y), u(h));
        return p;
      }
      case ef: {
        const p = r(/* @__PURE__ */ new Set(), s);
        for (const y of d)
          p.add(u(y));
        return p;
      }
      case ny: {
        const { name: p, message: y } = d;
        return r(new Bm[p](y), s);
      }
      case ly:
        return r(BigInt(d), s);
      case "BigInt":
        return r(Object(BigInt(d)), s);
      case "ArrayBuffer":
        return r(new Uint8Array(d).buffer, d);
      case "DataView": {
        const { buffer: p } = new Uint8Array(d);
        return r(new DataView(p), d);
      }
    }
    return r(new Bm[f](d), s);
  };
  return u;
}, Lm = (n) => TE(/* @__PURE__ */ new Map(), n)(0), wi = "", { toString: AE } = {}, { keys: kE } = Object, La = (n) => {
  const i = typeof n;
  if (i !== "object" || !n)
    return [Tu, i];
  const r = AE.call(n).slice(8, -1);
  switch (r) {
    case "Array":
      return [Ya, wi];
    case "Object":
      return [vu, wi];
    case "Date":
      return [Pc, wi];
    case "RegExp":
      return [$c, wi];
    case "Map":
      return [Wc, wi];
    case "Set":
      return [ef, wi];
    case "DataView":
      return [Ya, r];
  }
  return r.includes("Array") ? [Ya, r] : r.includes("Error") ? [ny, r] : [vu, r];
}, du = ([n, i]) => n === Tu && (i === "function" || i === "symbol"), CE = (n, i, r, u) => {
  const s = (d, p) => {
    const y = u.push(d) - 1;
    return r.set(p, y), y;
  }, f = (d) => {
    if (r.has(d))
      return r.get(d);
    let [p, y] = La(d);
    switch (p) {
      case Tu: {
        let m = d;
        switch (y) {
          case "bigint":
            p = ly, m = d.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + y);
            m = null;
            break;
          case "undefined":
            return s([ty], d);
        }
        return s([p, m], d);
      }
      case Ya: {
        if (y) {
          let w = d;
          return y === "DataView" ? w = new Uint8Array(d.buffer) : y === "ArrayBuffer" && (w = new Uint8Array(d)), s([y, [...w]], d);
        }
        const m = [], v = s([p, m], d);
        for (const w of d)
          m.push(f(w));
        return v;
      }
      case vu: {
        if (y)
          switch (y) {
            case "BigInt":
              return s([y, d.toString()], d);
            case "Boolean":
            case "Number":
            case "String":
              return s([y, d.valueOf()], d);
          }
        if (i && "toJSON" in d)
          return f(d.toJSON());
        const m = [], v = s([p, m], d);
        for (const w of kE(d))
          (n || !du(La(d[w]))) && m.push([f(w), f(d[w])]);
        return v;
      }
      case Pc:
        return s([p, d.toISOString()], d);
      case $c: {
        const { source: m, flags: v } = d;
        return s([p, { source: m, flags: v }], d);
      }
      case Wc: {
        const m = [], v = s([p, m], d);
        for (const [w, S] of d)
          (n || !(du(La(w)) || du(La(S)))) && m.push([f(w), f(S)]);
        return v;
      }
      case ef: {
        const m = [], v = s([p, m], d);
        for (const w of d)
          (n || !du(La(w))) && m.push(f(w));
        return v;
      }
    }
    const { message: h } = d;
    return s([p, { name: y, message: h }], d);
  };
  return f;
}, jm = (n, { json: i, lossy: r } = {}) => {
  const u = [];
  return CE(!(i || r), !!i, /* @__PURE__ */ new Map(), u)(n), u;
}, xu = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, i) => i && ("json" in i || "lossy" in i) ? Lm(jm(n, i)) : structuredClone(n)
) : (n, i) => Lm(jm(n, i));
function _E(n, i) {
  const r = [{ type: "text", value: "↩" }];
  return i > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(i) }]
  }), r;
}
function RE(n, i) {
  return "Back to reference " + (n + 1) + (i > 1 ? "-" + i : "");
}
function OE(n) {
  const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", r = n.options.footnoteBackContent || _E, u = n.options.footnoteBackLabel || RE, s = n.options.footnoteLabel || "Footnotes", f = n.options.footnoteLabelTagName || "h2", d = n.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let y = -1;
  for (; ++y < n.footnoteOrder.length; ) {
    const h = n.footnoteById.get(
      n.footnoteOrder[y]
    );
    if (!h)
      continue;
    const m = n.all(h), v = String(h.identifier).toUpperCase(), w = Ri(v.toLowerCase());
    let S = 0;
    const C = [], O = n.footnoteCounts.get(v);
    for (; O !== void 0 && ++S <= O; ) {
      C.length > 0 && C.push({ type: "text", value: " " });
      let I = typeof r == "string" ? r : r(y, S);
      typeof I == "string" && (I = { type: "text", value: I }), C.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + i + "fnref-" + w + (S > 1 ? "-" + S : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof u == "string" ? u : u(y, S),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(I) ? I : [I]
      });
    }
    const B = m[m.length - 1];
    if (B && B.type === "element" && B.tagName === "p") {
      const I = B.children[B.children.length - 1];
      I && I.type === "text" ? I.value += " " : B.children.push({ type: "text", value: " " }), B.children.push(...C);
    } else
      m.push(...C);
    const U = {
      type: "element",
      tagName: "li",
      properties: { id: i + "fn-" + w },
      children: n.wrap(m, !0)
    };
    n.patch(h, U), p.push(U);
  }
  if (p.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: f,
          properties: {
            ...xu(d),
            id: "footnote-label"
          },
          children: [{ type: "text", value: s }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: n.wrap(p, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const iy = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(n) {
    if (n == null)
      return DE;
    if (typeof n == "function")
      return Au(n);
    if (typeof n == "object")
      return Array.isArray(n) ? zE(n) : NE(n);
    if (typeof n == "string")
      return ME(n);
    throw new Error("Expected function, string, or object as test");
  }
);
function zE(n) {
  const i = [];
  let r = -1;
  for (; ++r < n.length; )
    i[r] = iy(n[r]);
  return Au(u);
  function u(...s) {
    let f = -1;
    for (; ++f < i.length; )
      if (i[f].apply(this, s)) return !0;
    return !1;
  }
}
function NE(n) {
  const i = (
    /** @type {Record<string, unknown>} */
    n
  );
  return Au(r);
  function r(u) {
    const s = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      u
    );
    let f;
    for (f in n)
      if (s[f] !== i[f]) return !1;
    return !0;
  }
}
function ME(n) {
  return Au(i);
  function i(r) {
    return r && r.type === n;
  }
}
function Au(n) {
  return i;
  function i(r, u, s) {
    return !!(UE(r) && n.call(
      this,
      r,
      typeof u == "number" ? u : void 0,
      s || void 0
    ));
  }
}
function DE() {
  return !0;
}
function UE(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const ay = [], BE = !0, Hm = !1, LE = "skip";
function jE(n, i, r, u) {
  let s;
  typeof i == "function" && typeof r != "function" ? (u = r, r = i) : s = i;
  const f = iy(s), d = u ? -1 : 1;
  p(n, void 0, [])();
  function p(y, h, m) {
    const v = (
      /** @type {Record<string, unknown>} */
      y && typeof y == "object" ? y : {}
    );
    if (typeof v.type == "string") {
      const S = (
        // `hast`
        typeof v.tagName == "string" ? v.tagName : (
          // `xast`
          typeof v.name == "string" ? v.name : void 0
        )
      );
      Object.defineProperty(w, "name", {
        value: "node (" + (y.type + (S ? "<" + S + ">" : "")) + ")"
      });
    }
    return w;
    function w() {
      let S = ay, C, O, B;
      if ((!i || f(y, h, m[m.length - 1] || void 0)) && (S = HE(r(y, m)), S[0] === Hm))
        return S;
      if ("children" in y && y.children) {
        const U = (
          /** @type {UnistParent} */
          y
        );
        if (U.children && S[0] !== LE)
          for (O = (u ? U.children.length : -1) + d, B = m.concat(U); O > -1 && O < U.children.length; ) {
            const I = U.children[O];
            if (C = p(I, O, B)(), C[0] === Hm)
              return C;
            O = typeof C[1] == "number" ? C[1] : O + d;
          }
      }
      return S;
    }
  }
}
function HE(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [BE, n] : n == null ? ay : [n];
}
function ry(n, i, r, u) {
  let s, f, d;
  typeof i == "function" && typeof r != "function" ? (f = void 0, d = i, s = r) : (f = i, d = r, s = u), jE(n, f, p, s);
  function p(y, h) {
    const m = h[h.length - 1], v = m ? m.children.indexOf(y) : void 0;
    return d(y, v, m);
  }
}
const Rc = {}.hasOwnProperty, qE = {};
function VE(n, i) {
  const r = i || qE, u = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), d = { ...wE, ...r.handlers }, p = {
    all: h,
    applyData: GE,
    definitionById: u,
    footnoteById: s,
    footnoteCounts: f,
    footnoteOrder: [],
    handlers: d,
    one: y,
    options: r,
    patch: YE,
    wrap: QE
  };
  return ry(n, function(m) {
    if (m.type === "definition" || m.type === "footnoteDefinition") {
      const v = m.type === "definition" ? u : s, w = String(m.identifier).toUpperCase();
      v.has(w) || v.set(w, m);
    }
  }), p;
  function y(m, v) {
    const w = m.type, S = p.handlers[w];
    if (Rc.call(p.handlers, w) && S)
      return S(p, m, v);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ("children" in m) {
        const { children: O, ...B } = m, U = xu(B);
        return U.children = p.all(m), U;
      }
      return xu(m);
    }
    return (p.options.unknownHandler || XE)(p, m, v);
  }
  function h(m) {
    const v = [];
    if ("children" in m) {
      const w = m.children;
      let S = -1;
      for (; ++S < w.length; ) {
        const C = p.one(w[S], m);
        if (C) {
          if (S && w[S - 1].type === "break" && (!Array.isArray(C) && C.type === "text" && (C.value = qm(C.value)), !Array.isArray(C) && C.type === "element")) {
            const O = C.children[0];
            O && O.type === "text" && (O.value = qm(O.value));
          }
          Array.isArray(C) ? v.push(...C) : v.push(C);
        }
      }
    }
    return v;
  }
}
function YE(n, i) {
  n.position && (i.position = Av(n));
}
function GE(n, i) {
  let r = i;
  if (n && n.data) {
    const u = n.data.hName, s = n.data.hChildren, f = n.data.hProperties;
    if (typeof u == "string")
      if (r.type === "element")
        r.tagName = u;
      else {
        const d = "children" in r ? r.children : [r];
        r = { type: "element", tagName: u, properties: {}, children: d };
      }
    r.type === "element" && f && Object.assign(r.properties, xu(f)), "children" in r && r.children && s !== null && s !== void 0 && (r.children = s);
  }
  return r;
}
function XE(n, i) {
  const r = i.data || {}, u = "value" in i && !(Rc.call(r, "hProperties") || Rc.call(r, "hChildren")) ? { type: "text", value: i.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, u), n.applyData(i, u);
}
function QE(n, i) {
  const r = [];
  let u = -1;
  for (i && r.push({ type: "text", value: `
` }); ++u < n.length; )
    u && r.push({ type: "text", value: `
` }), r.push(n[u]);
  return i && n.length > 0 && r.push({ type: "text", value: `
` }), r;
}
function qm(n) {
  let i = 0, r = n.charCodeAt(i);
  for (; r === 9 || r === 32; )
    i++, r = n.charCodeAt(i);
  return n.slice(i);
}
function Vm(n, i) {
  const r = VE(n, i), u = r.one(n, void 0), s = OE(r), f = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return s && f.children.push({ type: "text", value: `
` }, s), f;
}
function ZE(n, i) {
  return n && "run" in n ? async function(r, u) {
    const s = (
      /** @type {HastRoot} */
      Vm(r, { file: u, ...i })
    );
    await n.run(s, u);
  } : function(r, u) {
    return (
      /** @type {HastRoot} */
      Vm(r, { file: u, ...n || i })
    );
  };
}
function Ym(n) {
  if (n)
    throw n;
}
var oc, Gm;
function KE() {
  if (Gm) return oc;
  Gm = 1;
  var n = Object.prototype.hasOwnProperty, i = Object.prototype.toString, r = Object.defineProperty, u = Object.getOwnPropertyDescriptor, s = function(h) {
    return typeof Array.isArray == "function" ? Array.isArray(h) : i.call(h) === "[object Array]";
  }, f = function(h) {
    if (!h || i.call(h) !== "[object Object]")
      return !1;
    var m = n.call(h, "constructor"), v = h.constructor && h.constructor.prototype && n.call(h.constructor.prototype, "isPrototypeOf");
    if (h.constructor && !m && !v)
      return !1;
    var w;
    for (w in h)
      ;
    return typeof w > "u" || n.call(h, w);
  }, d = function(h, m) {
    r && m.name === "__proto__" ? r(h, m.name, {
      enumerable: !0,
      configurable: !0,
      value: m.newValue,
      writable: !0
    }) : h[m.name] = m.newValue;
  }, p = function(h, m) {
    if (m === "__proto__")
      if (n.call(h, m)) {
        if (u)
          return u(h, m).value;
      } else return;
    return h[m];
  };
  return oc = function y() {
    var h, m, v, w, S, C, O = arguments[0], B = 1, U = arguments.length, I = !1;
    for (typeof O == "boolean" && (I = O, O = arguments[1] || {}, B = 2), (O == null || typeof O != "object" && typeof O != "function") && (O = {}); B < U; ++B)
      if (h = arguments[B], h != null)
        for (m in h)
          v = p(O, m), w = p(h, m), O !== w && (I && w && (f(w) || (S = s(w))) ? (S ? (S = !1, C = v && s(v) ? v : []) : C = v && f(v) ? v : {}, d(O, { name: m, newValue: y(I, C, w) })) : typeof w < "u" && d(O, { name: m, newValue: w }));
    return O;
  }, oc;
}
var FE = KE();
const sc = /* @__PURE__ */ jc(FE);
function Oc(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const i = Object.getPrototypeOf(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function JE() {
  const n = [], i = { run: r, use: u };
  return i;
  function r(...s) {
    let f = -1;
    const d = s.pop();
    if (typeof d != "function")
      throw new TypeError("Expected function as last argument, not " + d);
    p(null, ...s);
    function p(y, ...h) {
      const m = n[++f];
      let v = -1;
      if (y) {
        d(y);
        return;
      }
      for (; ++v < s.length; )
        (h[v] === null || h[v] === void 0) && (h[v] = s[v]);
      s = h, m ? IE(m, p)(...h) : d(null, ...h);
    }
  }
  function u(s) {
    if (typeof s != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + s
      );
    return n.push(s), i;
  }
}
function IE(n, i) {
  let r;
  return u;
  function u(...d) {
    const p = n.length > d.length;
    let y;
    p && d.push(s);
    try {
      y = n.apply(this, d);
    } catch (h) {
      const m = (
        /** @type {Error} */
        h
      );
      if (p && r)
        throw m;
      return s(m);
    }
    p || (y && y.then && typeof y.then == "function" ? y.then(f, s) : y instanceof Error ? s(y) : f(y));
  }
  function s(d, ...p) {
    r || (r = !0, i(d, ...p));
  }
  function f(d) {
    s(null, d);
  }
}
const yn = { basename: PE, dirname: $E, extname: WE, join: ew, sep: "/" };
function PE(n, i) {
  if (i !== void 0 && typeof i != "string")
    throw new TypeError('"ext" argument must be a string');
  Ka(n);
  let r = 0, u = -1, s = n.length, f;
  if (i === void 0 || i.length === 0 || i.length > n.length) {
    for (; s--; )
      if (n.codePointAt(s) === 47) {
        if (f) {
          r = s + 1;
          break;
        }
      } else u < 0 && (f = !0, u = s + 1);
    return u < 0 ? "" : n.slice(r, u);
  }
  if (i === n)
    return "";
  let d = -1, p = i.length - 1;
  for (; s--; )
    if (n.codePointAt(s) === 47) {
      if (f) {
        r = s + 1;
        break;
      }
    } else
      d < 0 && (f = !0, d = s + 1), p > -1 && (n.codePointAt(s) === i.codePointAt(p--) ? p < 0 && (u = s) : (p = -1, u = d));
  return r === u ? u = d : u < 0 && (u = n.length), n.slice(r, u);
}
function $E(n) {
  if (Ka(n), n.length === 0)
    return ".";
  let i = -1, r = n.length, u;
  for (; --r; )
    if (n.codePointAt(r) === 47) {
      if (u) {
        i = r;
        break;
      }
    } else u || (u = !0);
  return i < 0 ? n.codePointAt(0) === 47 ? "/" : "." : i === 1 && n.codePointAt(0) === 47 ? "//" : n.slice(0, i);
}
function WE(n) {
  Ka(n);
  let i = n.length, r = -1, u = 0, s = -1, f = 0, d;
  for (; i--; ) {
    const p = n.codePointAt(i);
    if (p === 47) {
      if (d) {
        u = i + 1;
        break;
      }
      continue;
    }
    r < 0 && (d = !0, r = i + 1), p === 46 ? s < 0 ? s = i : f !== 1 && (f = 1) : s > -1 && (f = -1);
  }
  return s < 0 || r < 0 || // We saw a non-dot character immediately before the dot.
  f === 0 || // The (right-most) trimmed path component is exactly `..`.
  f === 1 && s === r - 1 && s === u + 1 ? "" : n.slice(s, r);
}
function ew(...n) {
  let i = -1, r;
  for (; ++i < n.length; )
    Ka(n[i]), n[i] && (r = r === void 0 ? n[i] : r + "/" + n[i]);
  return r === void 0 ? "." : tw(r);
}
function tw(n) {
  Ka(n);
  const i = n.codePointAt(0) === 47;
  let r = nw(n, !i);
  return r.length === 0 && !i && (r = "."), r.length > 0 && n.codePointAt(n.length - 1) === 47 && (r += "/"), i ? "/" + r : r;
}
function nw(n, i) {
  let r = "", u = 0, s = -1, f = 0, d = -1, p, y;
  for (; ++d <= n.length; ) {
    if (d < n.length)
      p = n.codePointAt(d);
    else {
      if (p === 47)
        break;
      p = 47;
    }
    if (p === 47) {
      if (!(s === d - 1 || f === 1)) if (s !== d - 1 && f === 2) {
        if (r.length < 2 || u !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            if (y = r.lastIndexOf("/"), y !== r.length - 1) {
              y < 0 ? (r = "", u = 0) : (r = r.slice(0, y), u = r.length - 1 - r.lastIndexOf("/")), s = d, f = 0;
              continue;
            }
          } else if (r.length > 0) {
            r = "", u = 0, s = d, f = 0;
            continue;
          }
        }
        i && (r = r.length > 0 ? r + "/.." : "..", u = 2);
      } else
        r.length > 0 ? r += "/" + n.slice(s + 1, d) : r = n.slice(s + 1, d), u = d - s - 1;
      s = d, f = 0;
    } else p === 46 && f > -1 ? f++ : f = -1;
  }
  return r;
}
function Ka(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
const lw = { cwd: iw };
function iw() {
  return "/";
}
function zc(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function aw(n) {
  if (typeof n == "string")
    n = new URL(n);
  else if (!zc(n)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + "`"
    );
    throw i.code = "ERR_INVALID_ARG_TYPE", i;
  }
  if (n.protocol !== "file:") {
    const i = new TypeError("The URL must be of scheme file");
    throw i.code = "ERR_INVALID_URL_SCHEME", i;
  }
  return rw(n);
}
function rw(n) {
  if (n.hostname !== "") {
    const u = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw u.code = "ERR_INVALID_FILE_URL_HOST", u;
  }
  const i = n.pathname;
  let r = -1;
  for (; ++r < i.length; )
    if (i.codePointAt(r) === 37 && i.codePointAt(r + 1) === 50) {
      const u = i.codePointAt(r + 2);
      if (u === 70 || u === 102) {
        const s = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
  return decodeURIComponent(i);
}
const cc = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class uy {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(i) {
    let r;
    i ? zc(i) ? r = { path: i } : typeof i == "string" || uw(i) ? r = { value: i } : r = i : r = {}, this.cwd = "cwd" in r ? "" : lw.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < cc.length; ) {
      const f = cc[u];
      f in r && r[f] !== void 0 && r[f] !== null && (this[f] = f === "history" ? [...r[f]] : r[f]);
    }
    let s;
    for (s in r)
      cc.includes(s) || (this[s] = r[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? yn.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(i) {
    dc(i, "basename"), fc(i, "basename"), this.path = yn.join(this.dirname || "", i);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? yn.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(i) {
    Xm(this.basename, "dirname"), this.path = yn.join(i || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? yn.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(i) {
    if (fc(i, "extname"), Xm(this.dirname, "extname"), i) {
      if (i.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (i.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = yn.join(this.dirname, this.stem + (i || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(i) {
    zc(i) && (i = aw(i)), dc(i, "path"), this.path !== i && this.history.push(i);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? yn.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(i) {
    dc(i, "stem"), fc(i, "stem"), this.path = yn.join(this.dirname || "", i + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(i, r, u) {
    const s = this.message(i, r, u);
    throw s.fatal = !0, s;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(i, r, u) {
    const s = this.message(i, r, u);
    return s.fatal = void 0, s;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(i, r, u) {
    const s = new vt(
      // @ts-expect-error: the overloads are fine.
      i,
      r,
      u
    );
    return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = !1, this.messages.push(s), s;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(i) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(i || void 0).decode(this.value);
  }
}
function fc(n, i) {
  if (n && n.includes(yn.sep))
    throw new Error(
      "`" + i + "` cannot be a path: did not expect `" + yn.sep + "`"
    );
}
function dc(n, i) {
  if (!n)
    throw new Error("`" + i + "` cannot be empty");
}
function Xm(n, i) {
  if (!n)
    throw new Error("Setting `" + i + "` requires `path` to be set too");
}
function uw(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const ow = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(n) {
    const u = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), s = u[n], f = function() {
      return s.apply(f, arguments);
    };
    return Object.setPrototypeOf(f, u), f;
  }
), sw = {}.hasOwnProperty;
class tf extends ow {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = JE();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const i = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new tf()
    );
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const u = this.attachers[r];
      i.use(...u);
    }
    return i.data(sc(!0, {}, this.namespace)), i;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(i, r) {
    return typeof i == "string" ? arguments.length === 2 ? (mc("data", this.frozen), this.namespace[i] = r, this) : sw.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (mc("data", this.frozen), this.namespace = i, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const i = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [r, ...u] = this.attachers[this.freezeIndex];
      if (u[0] === !1)
        continue;
      u[0] === !0 && (u[0] = void 0);
      const s = r.call(i, ...u);
      typeof s == "function" && this.transformers.use(s);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(i) {
    this.freeze();
    const r = hu(i), u = this.parser || this.Parser;
    return hc("parse", u), u(String(r), r);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(i, r) {
    const u = this;
    return this.freeze(), hc("process", this.parser || this.Parser), pc("process", this.compiler || this.Compiler), r ? s(void 0, r) : new Promise(s);
    function s(f, d) {
      const p = hu(i), y = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        u.parse(p)
      );
      u.run(y, p, function(m, v, w) {
        if (m || !v || !w)
          return h(m);
        const S = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          v
        ), C = u.stringify(S, w);
        dw(C) ? w.value = C : w.result = C, h(
          m,
          /** @type {VFileWithOutput<CompileResult>} */
          w
        );
      });
      function h(m, v) {
        m || !v ? d(m) : f ? f(v) : r(void 0, v);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(i) {
    let r = !1, u;
    return this.freeze(), hc("processSync", this.parser || this.Parser), pc("processSync", this.compiler || this.Compiler), this.process(i, s), Zm("processSync", "process", r), u;
    function s(f, d) {
      r = !0, Ym(f), u = d;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(i, r, u) {
    Qm(i), this.freeze();
    const s = this.transformers;
    return !u && typeof r == "function" && (u = r, r = void 0), u ? f(void 0, u) : new Promise(f);
    function f(d, p) {
      const y = hu(r);
      s.run(i, y, h);
      function h(m, v, w) {
        const S = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          v || i
        );
        m ? p(m) : d ? d(S) : u(void 0, S, w);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(i, r) {
    let u = !1, s;
    return this.run(i, r, f), Zm("runSync", "run", u), s;
    function f(d, p) {
      Ym(d), s = p, u = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(i, r) {
    this.freeze();
    const u = hu(r), s = this.compiler || this.Compiler;
    return pc("stringify", s), Qm(i), s(i, u);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(i, ...r) {
    const u = this.attachers, s = this.namespace;
    if (mc("use", this.frozen), i != null) if (typeof i == "function")
      y(i, r);
    else if (typeof i == "object")
      Array.isArray(i) ? p(i) : d(i);
    else
      throw new TypeError("Expected usable value, not `" + i + "`");
    return this;
    function f(h) {
      if (typeof h == "function")
        y(h, []);
      else if (typeof h == "object")
        if (Array.isArray(h)) {
          const [m, ...v] = (
            /** @type {PluginTuple<Array<unknown>>} */
            h
          );
          y(m, v);
        } else
          d(h);
      else
        throw new TypeError("Expected usable value, not `" + h + "`");
    }
    function d(h) {
      if (!("plugins" in h) && !("settings" in h))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      p(h.plugins), h.settings && (s.settings = sc(!0, s.settings, h.settings));
    }
    function p(h) {
      let m = -1;
      if (h != null) if (Array.isArray(h))
        for (; ++m < h.length; ) {
          const v = h[m];
          f(v);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + h + "`");
    }
    function y(h, m) {
      let v = -1, w = -1;
      for (; ++v < u.length; )
        if (u[v][0] === h) {
          w = v;
          break;
        }
      if (w === -1)
        u.push([h, ...m]);
      else if (m.length > 0) {
        let [S, ...C] = m;
        const O = u[w][1];
        Oc(O) && Oc(S) && (S = sc(!0, O, S)), u[w] = [h, S, ...C];
      }
    }
  }
}
const cw = new tf().freeze();
function hc(n, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + n + "` without `parser`");
}
function pc(n, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + n + "` without `compiler`");
}
function mc(n, i) {
  if (i)
    throw new Error(
      "Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Qm(n) {
  if (!Oc(n) || typeof n.type != "string")
    throw new TypeError("Expected node, got `" + n + "`");
}
function Zm(n, i, r) {
  if (!r)
    throw new Error(
      "`" + n + "` finished async. Use `" + i + "` instead"
    );
}
function hu(n) {
  return fw(n) ? n : new uy(n);
}
function fw(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function dw(n) {
  return typeof n == "string" || hw(n);
}
function hw(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const pw = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Km = [], Fm = { allowDangerousHtml: !0 }, mw = /^(https?|ircs?|mailto|xmpp)$/i, gw = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function yw(n) {
  const i = bw(n), r = vw(n);
  return xw(i.runSync(i.parse(r), r), n);
}
function bw(n) {
  const i = n.rehypePlugins || Km, r = n.remarkPlugins || Km, u = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...Fm } : Fm;
  return cw().use(PS).use(r).use(ZE, u).use(i);
}
function vw(n) {
  const i = n.children || "", r = new uy();
  return typeof i == "string" && (r.value = i), r;
}
function xw(n, i) {
  const r = i.allowedElements, u = i.allowElement, s = i.components, f = i.disallowedElements, d = i.skipHtml, p = i.unwrapDisallowed, y = i.urlTransform || Sw;
  for (const m of gw)
    Object.hasOwn(i, m.from) && ("" + m.from + (m.to ? "use `" + m.to + "` instead" : "remove it") + pw + m.id, void 0);
  return ry(n, h), Ov(n, {
    Fragment: J.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: J.jsx,
    jsxs: J.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function h(m, v, w) {
    if (m.type === "raw" && w && typeof v == "number")
      return d ? w.children.splice(v, 1) : w.children[v] = { type: "text", value: m.value }, v;
    if (m.type === "element") {
      let S;
      for (S in ac)
        if (Object.hasOwn(ac, S) && Object.hasOwn(m.properties, S)) {
          const C = m.properties[S], O = ac[S];
          (O === null || O.includes(m.tagName)) && (m.properties[S] = y(String(C || ""), S, m));
        }
    }
    if (m.type === "element") {
      let S = r ? !r.includes(m.tagName) : f ? f.includes(m.tagName) : !1;
      if (!S && u && typeof v == "number" && (S = !u(m, v, w)), S && w && typeof v == "number")
        return p && m.children ? w.children.splice(v, 1, ...m.children) : w.children.splice(v, 1), v;
    }
  }
}
function Sw(n) {
  const i = n.indexOf(":"), r = n.indexOf("?"), u = n.indexOf("#"), s = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    i === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && i > s || r !== -1 && i > r || u !== -1 && i > u || // It is a protocol, it should be allowed.
    mw.test(n.slice(0, i)) ? n : ""
  );
}
function Ew({ content: n, className: i = "" }) {
  return /* @__PURE__ */ J.jsx("div", { className: `prose prose-sm max-w-none dark:prose-invert ${i}`, children: /* @__PURE__ */ J.jsx(
    yw,
    {
      components: {
        // Custom styling for markdown elements
        p: ({ children: r }) => /* @__PURE__ */ J.jsx("p", { className: "mb-2 last:mb-0", children: r }),
        ul: ({ children: r }) => /* @__PURE__ */ J.jsx("ul", { className: "list-disc list-inside mb-2 space-y-1", children: r }),
        ol: ({ children: r }) => /* @__PURE__ */ J.jsx("ol", { className: "list-decimal list-inside mb-2 space-y-1", children: r }),
        li: ({ children: r }) => /* @__PURE__ */ J.jsx("li", { className: "text-sm", children: r }),
        strong: ({ children: r }) => /* @__PURE__ */ J.jsx("strong", { className: "font-semibold", children: r }),
        em: ({ children: r }) => /* @__PURE__ */ J.jsx("em", { className: "italic", children: r }),
        code: ({ children: r }) => /* @__PURE__ */ J.jsx("code", { className: "bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono", children: r }),
        pre: ({ children: r }) => /* @__PURE__ */ J.jsx("pre", { className: "bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto", children: r }),
        h1: ({ children: r }) => /* @__PURE__ */ J.jsx("h1", { className: "text-lg font-bold mb-2", children: r }),
        h2: ({ children: r }) => /* @__PURE__ */ J.jsx("h2", { className: "text-base font-bold mb-2", children: r }),
        h3: ({ children: r }) => /* @__PURE__ */ J.jsx("h3", { className: "text-sm font-bold mb-1", children: r }),
        a: ({ children: r, href: u }) => /* @__PURE__ */ J.jsx(
          "a",
          {
            href: u,
            className: "text-blue-500 hover:text-blue-600 underline",
            target: "_blank",
            rel: "noopener noreferrer",
            children: r
          }
        )
      },
      children: n
    }
  ) });
}
function ww({ message: n, isUser: i, timestamp: r, onStreamingChange: u, skipStreaming: s, companyTheme: f, isLastAiMessage: d }) {
  const [p, y] = ve.useState(""), [h, m] = ve.useState(!1), [v, w] = ve.useState(!1), S = async (C) => {
    const O = C.split(" ");
    let B = "";
    m(!0), u?.(!0), y("");
    for (let U = 0; U < O.length; U++)
      B += O[U] + " ", y(B.trim()), U === O.length - 1 && (m(!1), u?.(!1)), await new Promise((I) => setTimeout(I, 100));
  };
  return ve.useEffect(() => {
    const C = setTimeout(() => {
      w(!0);
    }, 500);
    return () => clearTimeout(C);
  }, []), ve.useEffect(() => {
    !i && !s && v && d ? setTimeout(() => {
      S(n);
    }, 1e3) : !i && !s && !v && d ? (m(!0), u?.(!0), y("")) : (m(!1), u?.(!1), y(""));
  }, [n, i, s, v, d]), /* @__PURE__ */ J.jsxs("div", { className: bn("flex gap-3 max-w-[98%] mx-auto px-4 py-6", i ? "flex-row-reverse" : "flex-row"), children: [
    /* @__PURE__ */ J.jsx(
      "div",
      {
        className: bn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          i ? "text-white" : "text-gray-600 dark:text-gray-400"
        ),
        style: { backgroundColor: i ? f?.primaryColor : f?.backgroundColor },
        children: i ? /* @__PURE__ */ J.jsx(S1, { className: "w-4 h-4" }) : /* @__PURE__ */ J.jsx(hg, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ J.jsxs("div", { className: bn("flex-1 space-y-2", i ? "text-right" : "text-left"), children: [
      /* @__PURE__ */ J.jsx(
        "div",
        {
          className: bn(
            "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
            i ? "text-white rounded-br-md" : "text-gray-900 dark:text-gray-100 rounded-bl-md"
          ),
          style: { backgroundColor: i ? f?.primaryColor : f?.backgroundColor },
          children: /* @__PURE__ */ J.jsx(
            Ew,
            {
              content: !i && h && !s && d ? p : n
            }
          )
        }
      ),
      r && /* @__PURE__ */ J.jsx(
        "div",
        {
          className: bn("text-xs text-gray-500 dark:text-gray-400 px-2", i ? "text-right" : "text-left"),
          children: r
        }
      )
    ] })
  ] });
}
function Jm(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
function Tw(...n) {
  return (i) => {
    let r = !1;
    const u = n.map((s) => {
      const f = Jm(s, i);
      return !r && typeof f == "function" && (r = !0), f;
    });
    if (r)
      return () => {
        for (let s = 0; s < u.length; s++) {
          const f = u[s];
          typeof f == "function" ? f() : Jm(n[s], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function Aw(n) {
  const i = /* @__PURE__ */ Cw(n), r = ve.forwardRef((u, s) => {
    const { children: f, ...d } = u, p = ve.Children.toArray(f), y = p.find(Rw);
    if (y) {
      const h = y.props.children, m = p.map((v) => v === y ? ve.Children.count(h) > 1 ? ve.Children.only(null) : ve.isValidElement(h) ? h.props.children : null : v);
      return /* @__PURE__ */ J.jsx(i, { ...d, ref: s, children: ve.isValidElement(h) ? ve.cloneElement(h, void 0, m) : null });
    }
    return /* @__PURE__ */ J.jsx(i, { ...d, ref: s, children: f });
  });
  return r.displayName = `${n}.Slot`, r;
}
var kw = /* @__PURE__ */ Aw("Slot");
// @__NO_SIDE_EFFECTS__
function Cw(n) {
  const i = ve.forwardRef((r, u) => {
    const { children: s, ...f } = r;
    if (ve.isValidElement(s)) {
      const d = zw(s), p = Ow(f, s.props);
      return s.type !== ve.Fragment && (p.ref = u ? Tw(u, d) : d), ve.cloneElement(s, p);
    }
    return ve.Children.count(s) > 1 ? ve.Children.only(null) : null;
  });
  return i.displayName = `${n}.SlotClone`, i;
}
var _w = Symbol("radix.slottable");
function Rw(n) {
  return ve.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === _w;
}
function Ow(n, i) {
  const r = { ...i };
  for (const u in i) {
    const s = n[u], f = i[u];
    /^on[A-Z]/.test(u) ? s && f ? r[u] = (...p) => {
      const y = f(...p);
      return s(...p), y;
    } : s && (r[u] = s) : u === "style" ? r[u] = { ...s, ...f } : u === "className" && (r[u] = [s, f].filter(Boolean).join(" "));
  }
  return { ...n, ...r };
}
function zw(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? n.props.ref : n.props.ref || n.ref);
}
const Im = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, Pm = mg, Nw = (n, i) => (r) => {
  var u;
  if (i?.variants == null) return Pm(n, r?.class, r?.className);
  const { variants: s, defaultVariants: f } = i, d = Object.keys(s).map((h) => {
    const m = r?.[h], v = f?.[h];
    if (m === null) return null;
    const w = Im(m) || Im(v);
    return s[h][w];
  }), p = r && Object.entries(r).reduce((h, m) => {
    let [v, w] = m;
    return w === void 0 || (h[v] = w), h;
  }, {}), y = i == null || (u = i.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((h, m) => {
    let { class: v, className: w, ...S } = m;
    return Object.entries(S).every((C) => {
      let [O, B] = C;
      return Array.isArray(B) ? B.includes({
        ...f,
        ...p
      }[O]) : {
        ...f,
        ...p
      }[O] === B;
    }) ? [
      ...h,
      v,
      w
    ] : h;
  }, []);
  return Pm(n, d, y, r?.class, r?.className);
}, Mw = Nw(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Ga({
  className: n,
  variant: i,
  size: r,
  asChild: u = !1,
  ...s
}) {
  const f = u ? kw : "button";
  return /* @__PURE__ */ J.jsx(
    f,
    {
      "data-slot": "button",
      className: bn(Mw({ variant: i, size: r, className: n })),
      ...s
    }
  );
}
function Dw({ className: n, ...i }) {
  return /* @__PURE__ */ J.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: bn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n
      ),
      ...i
    }
  );
}
function Uw({ onSendMessage: n, isLoading: i = !1, placeholder: r = "Type your message...", companyTheme: u }) {
  const [s, f] = ve.useState(""), d = (h) => {
    h.preventDefault(), s.trim() && !i && (n(s.trim()), f(""));
  }, p = (h) => {
    h.key === "Enter" && !h.shiftKey && (h.preventDefault(), d(h));
  }, y = u?.primaryColor ? kg(u.primaryColor, 20) : void 0;
  return /* @__PURE__ */ J.jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900", children: /* @__PURE__ */ J.jsxs("div", { className: "max-w-4xl mx-auto p-4", children: [
    /* @__PURE__ */ J.jsxs("form", { onSubmit: d, className: "relative", children: [
      /* @__PURE__ */ J.jsx(
        Dw,
        {
          value: s,
          onChange: (h) => f(h.target.value),
          onKeyDown: p,
          placeholder: r,
          disabled: i,
          className: bn(
            "min-h-[60px] max-h-[200px] resize-none pr-12 py-3",
            "border-gray-300 dark:border-gray-600",
            "bg-white dark:bg-gray-800",
            "text-gray-900 dark:text-gray-100",
            "placeholder:text-gray-500 dark:placeholder:text-gray-400",
            "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          ),
          rows: 1
        }
      ),
      /* @__PURE__ */ J.jsxs(
        Ga,
        {
          type: "submit",
          size: "sm",
          disabled: !s.trim() || i,
          className: bn(
            "absolute right-1 bottom-2 h-8 w-8 p-0",
            "disabled:bg-gray-300 dark:disabled:bg-gray-600",
            "transition-all duration-200 ease-in-out",
            "hover:scale-105 focus:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-offset-2"
          ),
          style: {
            backgroundColor: u?.primaryColor,
            "--hover-bg-color": y
          },
          onMouseEnter: (h) => {
            y && (h.currentTarget.style.backgroundColor = y);
          },
          onMouseLeave: (h) => {
            u?.primaryColor && (h.currentTarget.style.backgroundColor = u.primaryColor);
          },
          onFocus: (h) => {
            y && (h.currentTarget.style.backgroundColor = y);
          },
          onBlur: (h) => {
            u?.primaryColor && (h.currentTarget.style.backgroundColor = u.primaryColor);
          },
          children: [
            i ? /* @__PURE__ */ J.jsx(qc, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ J.jsx(y1, { className: "h-4 w-4 text-white" }),
            /* @__PURE__ */ J.jsx("span", { className: "sr-only", children: "Send message" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ J.jsx("div", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400 text-center", children: "Press Enter to send, Shift + Enter for new line" })
  ] }) });
}
function Bw({ companyTheme: n }) {
  return /* @__PURE__ */ J.jsxs("div", { className: "flex gap-3 max-w-4xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ J.jsx(
      "div",
      {
        className: "flex-shrink-0 w-8 h-8 rounded-full text-gray-600 dark:text-gray-400 flex items-center justify-center",
        style: { backgroundColor: n?.backgroundColor || "#f3f4f6" },
        children: /* @__PURE__ */ J.jsx(hg, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ J.jsx("div", { className: "flex-1", children: /* @__PURE__ */ J.jsx("div", { className: "inline-block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md", children: /* @__PURE__ */ J.jsxs("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ J.jsx("div", { className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ J.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ J.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.2s" }
        }
      )
    ] }) }) })
  ] });
}
function oy(n, i) {
  return function() {
    return n.apply(i, arguments);
  };
}
const { toString: Lw } = Object.prototype, { getPrototypeOf: nf } = Object, { iterator: ku, toStringTag: sy } = Symbol, Cu = /* @__PURE__ */ ((n) => (i) => {
  const r = Lw.call(i);
  return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), on = (n) => (n = n.toLowerCase(), (i) => Cu(i) === n), _u = (n) => (i) => typeof i === n, { isArray: Oi } = Array, Qa = _u("undefined");
function jw(n) {
  return n !== null && !Qa(n) && n.constructor !== null && !Qa(n.constructor) && Ot(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const cy = on("ArrayBuffer");
function Hw(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && cy(n.buffer), i;
}
const qw = _u("string"), Ot = _u("function"), fy = _u("number"), Ru = (n) => n !== null && typeof n == "object", Vw = (n) => n === !0 || n === !1, gu = (n) => {
  if (Cu(n) !== "object")
    return !1;
  const i = nf(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(sy in n) && !(ku in n);
}, Yw = on("Date"), Gw = on("File"), Xw = on("Blob"), Qw = on("FileList"), Zw = (n) => Ru(n) && Ot(n.pipe), Kw = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || Ot(n.append) && ((i = Cu(n)) === "formdata" || // detect form-data instance
  i === "object" && Ot(n.toString) && n.toString() === "[object FormData]"));
}, Fw = on("URLSearchParams"), [Jw, Iw, Pw, $w] = ["ReadableStream", "Request", "Response", "Headers"].map(on), Ww = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fa(n, i, { allOwnKeys: r = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let u, s;
  if (typeof n != "object" && (n = [n]), Oi(n))
    for (u = 0, s = n.length; u < s; u++)
      i.call(null, n[u], u, n);
  else {
    const f = r ? Object.getOwnPropertyNames(n) : Object.keys(n), d = f.length;
    let p;
    for (u = 0; u < d; u++)
      p = f[u], i.call(null, n[p], p, n);
  }
}
function dy(n, i) {
  i = i.toLowerCase();
  const r = Object.keys(n);
  let u = r.length, s;
  for (; u-- > 0; )
    if (s = r[u], i === s.toLowerCase())
      return s;
  return null;
}
const zl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, hy = (n) => !Qa(n) && n !== zl;
function Nc() {
  const { caseless: n } = hy(this) && this || {}, i = {}, r = (u, s) => {
    const f = n && dy(i, s) || s;
    gu(i[f]) && gu(u) ? i[f] = Nc(i[f], u) : gu(u) ? i[f] = Nc({}, u) : Oi(u) ? i[f] = u.slice() : i[f] = u;
  };
  for (let u = 0, s = arguments.length; u < s; u++)
    arguments[u] && Fa(arguments[u], r);
  return i;
}
const e2 = (n, i, r, { allOwnKeys: u } = {}) => (Fa(i, (s, f) => {
  r && Ot(s) ? n[f] = oy(s, r) : n[f] = s;
}, { allOwnKeys: u }), n), t2 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), n2 = (n, i, r, u) => {
  n.prototype = Object.create(i.prototype, u), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), r && Object.assign(n.prototype, r);
}, l2 = (n, i, r, u) => {
  let s, f, d;
  const p = {};
  if (i = i || {}, n == null) return i;
  do {
    for (s = Object.getOwnPropertyNames(n), f = s.length; f-- > 0; )
      d = s[f], (!u || u(d, n, i)) && !p[d] && (i[d] = n[d], p[d] = !0);
    n = r !== !1 && nf(n);
  } while (n && (!r || r(n, i)) && n !== Object.prototype);
  return i;
}, i2 = (n, i, r) => {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= i.length;
  const u = n.indexOf(i, r);
  return u !== -1 && u === r;
}, a2 = (n) => {
  if (!n) return null;
  if (Oi(n)) return n;
  let i = n.length;
  if (!fy(i)) return null;
  const r = new Array(i);
  for (; i-- > 0; )
    r[i] = n[i];
  return r;
}, r2 = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && nf(Uint8Array)), u2 = (n, i) => {
  const u = (n && n[ku]).call(n);
  let s;
  for (; (s = u.next()) && !s.done; ) {
    const f = s.value;
    i.call(n, f[0], f[1]);
  }
}, o2 = (n, i) => {
  let r;
  const u = [];
  for (; (r = n.exec(i)) !== null; )
    u.push(r);
  return u;
}, s2 = on("HTMLFormElement"), c2 = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, u, s) {
    return u.toUpperCase() + s;
  }
), $m = (({ hasOwnProperty: n }) => (i, r) => n.call(i, r))(Object.prototype), f2 = on("RegExp"), py = (n, i) => {
  const r = Object.getOwnPropertyDescriptors(n), u = {};
  Fa(r, (s, f) => {
    let d;
    (d = i(s, f, n)) !== !1 && (u[f] = d || s);
  }), Object.defineProperties(n, u);
}, d2 = (n) => {
  py(n, (i, r) => {
    if (Ot(n) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const u = n[r];
    if (Ot(u)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, h2 = (n, i) => {
  const r = {}, u = (s) => {
    s.forEach((f) => {
      r[f] = !0;
    });
  };
  return Oi(n) ? u(n) : u(String(n).split(i)), r;
}, p2 = () => {
}, m2 = (n, i) => n != null && Number.isFinite(n = +n) ? n : i;
function g2(n) {
  return !!(n && Ot(n.append) && n[sy] === "FormData" && n[ku]);
}
const y2 = (n) => {
  const i = new Array(10), r = (u, s) => {
    if (Ru(u)) {
      if (i.indexOf(u) >= 0)
        return;
      if (!("toJSON" in u)) {
        i[s] = u;
        const f = Oi(u) ? [] : {};
        return Fa(u, (d, p) => {
          const y = r(d, s + 1);
          !Qa(y) && (f[p] = y);
        }), i[s] = void 0, f;
      }
    }
    return u;
  };
  return r(n, 0);
}, b2 = on("AsyncFunction"), v2 = (n) => n && (Ru(n) || Ot(n)) && Ot(n.then) && Ot(n.catch), my = ((n, i) => n ? setImmediate : i ? ((r, u) => (zl.addEventListener("message", ({ source: s, data: f }) => {
  s === zl && f === r && u.length && u.shift()();
}, !1), (s) => {
  u.push(s), zl.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ot(zl.postMessage)
), x2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(zl) : typeof process < "u" && process.nextTick || my, S2 = (n) => n != null && Ot(n[ku]), D = {
  isArray: Oi,
  isArrayBuffer: cy,
  isBuffer: jw,
  isFormData: Kw,
  isArrayBufferView: Hw,
  isString: qw,
  isNumber: fy,
  isBoolean: Vw,
  isObject: Ru,
  isPlainObject: gu,
  isReadableStream: Jw,
  isRequest: Iw,
  isResponse: Pw,
  isHeaders: $w,
  isUndefined: Qa,
  isDate: Yw,
  isFile: Gw,
  isBlob: Xw,
  isRegExp: f2,
  isFunction: Ot,
  isStream: Zw,
  isURLSearchParams: Fw,
  isTypedArray: r2,
  isFileList: Qw,
  forEach: Fa,
  merge: Nc,
  extend: e2,
  trim: Ww,
  stripBOM: t2,
  inherits: n2,
  toFlatObject: l2,
  kindOf: Cu,
  kindOfTest: on,
  endsWith: i2,
  toArray: a2,
  forEachEntry: u2,
  matchAll: o2,
  isHTMLForm: s2,
  hasOwnProperty: $m,
  hasOwnProp: $m,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: py,
  freezeMethods: d2,
  toObjectSet: h2,
  toCamelCase: c2,
  noop: p2,
  toFiniteNumber: m2,
  findKey: dy,
  global: zl,
  isContextDefined: hy,
  isSpecCompliantForm: g2,
  toJSONObject: y2,
  isAsyncFn: b2,
  isThenable: v2,
  setImmediate: my,
  asap: x2,
  isIterable: S2
};
function Se(n, i, r, u, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), u && (this.request = u), s && (this.response = s, this.status = s.status ? s.status : null);
}
D.inherits(Se, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: D.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const gy = Se.prototype, yy = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((n) => {
  yy[n] = { value: n };
});
Object.defineProperties(Se, yy);
Object.defineProperty(gy, "isAxiosError", { value: !0 });
Se.from = (n, i, r, u, s, f) => {
  const d = Object.create(gy);
  return D.toFlatObject(n, d, function(y) {
    return y !== Error.prototype;
  }, (p) => p !== "isAxiosError"), Se.call(d, n.message, i, r, u, s), d.cause = n, d.name = n.name, f && Object.assign(d, f), d;
};
const E2 = null;
function Mc(n) {
  return D.isPlainObject(n) || D.isArray(n);
}
function by(n) {
  return D.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Wm(n, i, r) {
  return n ? n.concat(i).map(function(s, f) {
    return s = by(s), !r && f ? "[" + s + "]" : s;
  }).join(r ? "." : "") : i;
}
function w2(n) {
  return D.isArray(n) && !n.some(Mc);
}
const T2 = D.toFlatObject(D, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function Ou(n, i, r) {
  if (!D.isObject(n))
    throw new TypeError("target must be an object");
  i = i || new FormData(), r = D.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(O, B) {
    return !D.isUndefined(B[O]);
  });
  const u = r.metaTokens, s = r.visitor || m, f = r.dots, d = r.indexes, y = (r.Blob || typeof Blob < "u" && Blob) && D.isSpecCompliantForm(i);
  if (!D.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(C) {
    if (C === null) return "";
    if (D.isDate(C))
      return C.toISOString();
    if (D.isBoolean(C))
      return C.toString();
    if (!y && D.isBlob(C))
      throw new Se("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(C) || D.isTypedArray(C) ? y && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function m(C, O, B) {
    let U = C;
    if (C && !B && typeof C == "object") {
      if (D.endsWith(O, "{}"))
        O = u ? O : O.slice(0, -2), C = JSON.stringify(C);
      else if (D.isArray(C) && w2(C) || (D.isFileList(C) || D.endsWith(O, "[]")) && (U = D.toArray(C)))
        return O = by(O), U.forEach(function(Q, ne) {
          !(D.isUndefined(Q) || Q === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? Wm([O], ne, f) : d === null ? O : O + "[]",
            h(Q)
          );
        }), !1;
    }
    return Mc(C) ? !0 : (i.append(Wm(B, O, f), h(C)), !1);
  }
  const v = [], w = Object.assign(T2, {
    defaultVisitor: m,
    convertValue: h,
    isVisitable: Mc
  });
  function S(C, O) {
    if (!D.isUndefined(C)) {
      if (v.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      v.push(C), D.forEach(C, function(U, I) {
        (!(D.isUndefined(U) || U === null) && s.call(
          i,
          U,
          D.isString(I) ? I.trim() : I,
          O,
          w
        )) === !0 && S(U, O ? O.concat(I) : [I]);
      }), v.pop();
    }
  }
  if (!D.isObject(n))
    throw new TypeError("data must be an object");
  return S(n), i;
}
function eg(n) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(u) {
    return i[u];
  });
}
function lf(n, i) {
  this._pairs = [], n && Ou(n, this, i);
}
const vy = lf.prototype;
vy.append = function(i, r) {
  this._pairs.push([i, r]);
};
vy.toString = function(i) {
  const r = i ? function(u) {
    return i.call(this, u, eg);
  } : eg;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function A2(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xy(n, i, r) {
  if (!i)
    return n;
  const u = r && r.encode || A2;
  D.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let f;
  if (s ? f = s(i, r) : f = D.isURLSearchParams(i) ? i.toString() : new lf(i, r).toString(u), f) {
    const d = n.indexOf("#");
    d !== -1 && (n = n.slice(0, d)), n += (n.indexOf("?") === -1 ? "?" : "&") + f;
  }
  return n;
}
class tg {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(i, r, u) {
    return this.handlers.push({
      fulfilled: i,
      rejected: r,
      synchronous: u ? u.synchronous : !1,
      runWhen: u ? u.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(i) {
    D.forEach(this.handlers, function(u) {
      u !== null && i(u);
    });
  }
}
const Sy = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, k2 = typeof URLSearchParams < "u" ? URLSearchParams : lf, C2 = typeof FormData < "u" ? FormData : null, _2 = typeof Blob < "u" ? Blob : null, R2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: k2,
    FormData: C2,
    Blob: _2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, af = typeof window < "u" && typeof document < "u", Dc = typeof navigator == "object" && navigator || void 0, O2 = af && (!Dc || ["ReactNative", "NativeScript", "NS"].indexOf(Dc.product) < 0), z2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", N2 = af && window.location.href || "http://localhost", M2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: af,
  hasStandardBrowserEnv: O2,
  hasStandardBrowserWebWorkerEnv: z2,
  navigator: Dc,
  origin: N2
}, Symbol.toStringTag, { value: "Module" })), bt = {
  ...M2,
  ...R2
};
function D2(n, i) {
  return Ou(n, new bt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, u, s, f) {
      return bt.isNode && D.isBuffer(r) ? (this.append(u, r.toString("base64")), !1) : f.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function U2(n) {
  return D.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function B2(n) {
  const i = {}, r = Object.keys(n);
  let u;
  const s = r.length;
  let f;
  for (u = 0; u < s; u++)
    f = r[u], i[f] = n[f];
  return i;
}
function Ey(n) {
  function i(r, u, s, f) {
    let d = r[f++];
    if (d === "__proto__") return !0;
    const p = Number.isFinite(+d), y = f >= r.length;
    return d = !d && D.isArray(s) ? s.length : d, y ? (D.hasOwnProp(s, d) ? s[d] = [s[d], u] : s[d] = u, !p) : ((!s[d] || !D.isObject(s[d])) && (s[d] = []), i(r, u, s[d], f) && D.isArray(s[d]) && (s[d] = B2(s[d])), !p);
  }
  if (D.isFormData(n) && D.isFunction(n.entries)) {
    const r = {};
    return D.forEachEntry(n, (u, s) => {
      i(U2(u), s, r, 0);
    }), r;
  }
  return null;
}
function L2(n, i, r) {
  if (D.isString(n))
    try {
      return (i || JSON.parse)(n), D.trim(n);
    } catch (u) {
      if (u.name !== "SyntaxError")
        throw u;
    }
  return (r || JSON.stringify)(n);
}
const Ja = {
  transitional: Sy,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, r) {
    const u = r.getContentType() || "", s = u.indexOf("application/json") > -1, f = D.isObject(i);
    if (f && D.isHTMLForm(i) && (i = new FormData(i)), D.isFormData(i))
      return s ? JSON.stringify(Ey(i)) : i;
    if (D.isArrayBuffer(i) || D.isBuffer(i) || D.isStream(i) || D.isFile(i) || D.isBlob(i) || D.isReadableStream(i))
      return i;
    if (D.isArrayBufferView(i))
      return i.buffer;
    if (D.isURLSearchParams(i))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let p;
    if (f) {
      if (u.indexOf("application/x-www-form-urlencoded") > -1)
        return D2(i, this.formSerializer).toString();
      if ((p = D.isFileList(i)) || u.indexOf("multipart/form-data") > -1) {
        const y = this.env && this.env.FormData;
        return Ou(
          p ? { "files[]": i } : i,
          y && new y(),
          this.formSerializer
        );
      }
    }
    return f || s ? (r.setContentType("application/json", !1), L2(i)) : i;
  }],
  transformResponse: [function(i) {
    const r = this.transitional || Ja.transitional, u = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (D.isResponse(i) || D.isReadableStream(i))
      return i;
    if (i && D.isString(i) && (u && !this.responseType || s)) {
      const d = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(i);
      } catch (p) {
        if (d)
          throw p.name === "SyntaxError" ? Se.from(p, Se.ERR_BAD_RESPONSE, this, null, this.response) : p;
      }
    }
    return i;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: bt.classes.FormData,
    Blob: bt.classes.Blob
  },
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
D.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Ja.headers[n] = {};
});
const j2 = D.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), H2 = (n) => {
  const i = {};
  let r, u, s;
  return n && n.split(`
`).forEach(function(d) {
    s = d.indexOf(":"), r = d.substring(0, s).trim().toLowerCase(), u = d.substring(s + 1).trim(), !(!r || i[r] && j2[r]) && (r === "set-cookie" ? i[r] ? i[r].push(u) : i[r] = [u] : i[r] = i[r] ? i[r] + ", " + u : u);
  }), i;
}, ng = Symbol("internals");
function ja(n) {
  return n && String(n).trim().toLowerCase();
}
function yu(n) {
  return n === !1 || n == null ? n : D.isArray(n) ? n.map(yu) : String(n);
}
function q2(n) {
  const i = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; u = r.exec(n); )
    i[u[1]] = u[2];
  return i;
}
const V2 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function gc(n, i, r, u, s) {
  if (D.isFunction(u))
    return u.call(this, i, r);
  if (s && (i = r), !!D.isString(i)) {
    if (D.isString(u))
      return i.indexOf(u) !== -1;
    if (D.isRegExp(u))
      return u.test(i);
  }
}
function Y2(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, r, u) => r.toUpperCase() + u);
}
function G2(n, i) {
  const r = D.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(n, u + r, {
      value: function(s, f, d) {
        return this[u].call(this, i, s, f, d);
      },
      configurable: !0
    });
  });
}
let zt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, r, u) {
    const s = this;
    function f(p, y, h) {
      const m = ja(y);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const v = D.findKey(s, m);
      (!v || s[v] === void 0 || h === !0 || h === void 0 && s[v] !== !1) && (s[v || y] = yu(p));
    }
    const d = (p, y) => D.forEach(p, (h, m) => f(h, m, y));
    if (D.isPlainObject(i) || i instanceof this.constructor)
      d(i, r);
    else if (D.isString(i) && (i = i.trim()) && !V2(i))
      d(H2(i), r);
    else if (D.isObject(i) && D.isIterable(i)) {
      let p = {}, y, h;
      for (const m of i) {
        if (!D.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        p[h = m[0]] = (y = p[h]) ? D.isArray(y) ? [...y, m[1]] : [y, m[1]] : m[1];
      }
      d(p, r);
    } else
      i != null && f(r, i, u);
    return this;
  }
  get(i, r) {
    if (i = ja(i), i) {
      const u = D.findKey(this, i);
      if (u) {
        const s = this[u];
        if (!r)
          return s;
        if (r === !0)
          return q2(s);
        if (D.isFunction(r))
          return r.call(this, s, u);
        if (D.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, r) {
    if (i = ja(i), i) {
      const u = D.findKey(this, i);
      return !!(u && this[u] !== void 0 && (!r || gc(this, this[u], u, r)));
    }
    return !1;
  }
  delete(i, r) {
    const u = this;
    let s = !1;
    function f(d) {
      if (d = ja(d), d) {
        const p = D.findKey(u, d);
        p && (!r || gc(u, u[p], p, r)) && (delete u[p], s = !0);
      }
    }
    return D.isArray(i) ? i.forEach(f) : f(i), s;
  }
  clear(i) {
    const r = Object.keys(this);
    let u = r.length, s = !1;
    for (; u--; ) {
      const f = r[u];
      (!i || gc(this, this[f], f, i, !0)) && (delete this[f], s = !0);
    }
    return s;
  }
  normalize(i) {
    const r = this, u = {};
    return D.forEach(this, (s, f) => {
      const d = D.findKey(u, f);
      if (d) {
        r[d] = yu(s), delete r[f];
        return;
      }
      const p = i ? Y2(f) : String(f).trim();
      p !== f && delete r[f], r[p] = yu(s), u[p] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const r = /* @__PURE__ */ Object.create(null);
    return D.forEach(this, (u, s) => {
      u != null && u !== !1 && (r[s] = i && D.isArray(u) ? u.join(", ") : u);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, r]) => i + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...r) {
    const u = new this(i);
    return r.forEach((s) => u.set(s)), u;
  }
  static accessor(i) {
    const u = (this[ng] = this[ng] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function f(d) {
      const p = ja(d);
      u[p] || (G2(s, d), u[p] = !0);
    }
    return D.isArray(i) ? i.forEach(f) : f(i), this;
  }
};
zt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
D.reduceDescriptors(zt.prototype, ({ value: n }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(u) {
      this[r] = u;
    }
  };
});
D.freezeMethods(zt);
function yc(n, i) {
  const r = this || Ja, u = i || r, s = zt.from(u.headers);
  let f = u.data;
  return D.forEach(n, function(p) {
    f = p.call(r, f, s.normalize(), i ? i.status : void 0);
  }), s.normalize(), f;
}
function wy(n) {
  return !!(n && n.__CANCEL__);
}
function zi(n, i, r) {
  Se.call(this, n ?? "canceled", Se.ERR_CANCELED, i, r), this.name = "CanceledError";
}
D.inherits(zi, Se, {
  __CANCEL__: !0
});
function Ty(n, i, r) {
  const u = r.config.validateStatus;
  !r.status || !u || u(r.status) ? n(r) : i(new Se(
    "Request failed with status code " + r.status,
    [Se.ERR_BAD_REQUEST, Se.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function X2(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function Q2(n, i) {
  n = n || 10;
  const r = new Array(n), u = new Array(n);
  let s = 0, f = 0, d;
  return i = i !== void 0 ? i : 1e3, function(y) {
    const h = Date.now(), m = u[f];
    d || (d = h), r[s] = y, u[s] = h;
    let v = f, w = 0;
    for (; v !== s; )
      w += r[v++], v = v % n;
    if (s = (s + 1) % n, s === f && (f = (f + 1) % n), h - d < i)
      return;
    const S = m && h - m;
    return S ? Math.round(w * 1e3 / S) : void 0;
  };
}
function Z2(n, i) {
  let r = 0, u = 1e3 / i, s, f;
  const d = (h, m = Date.now()) => {
    r = m, s = null, f && (clearTimeout(f), f = null), n.apply(null, h);
  };
  return [(...h) => {
    const m = Date.now(), v = m - r;
    v >= u ? d(h, m) : (s = h, f || (f = setTimeout(() => {
      f = null, d(s);
    }, u - v)));
  }, () => s && d(s)];
}
const Su = (n, i, r = 3) => {
  let u = 0;
  const s = Q2(50, 250);
  return Z2((f) => {
    const d = f.loaded, p = f.lengthComputable ? f.total : void 0, y = d - u, h = s(y), m = d <= p;
    u = d;
    const v = {
      loaded: d,
      total: p,
      progress: p ? d / p : void 0,
      bytes: y,
      rate: h || void 0,
      estimated: h && p && m ? (p - d) / h : void 0,
      event: f,
      lengthComputable: p != null,
      [i ? "download" : "upload"]: !0
    };
    n(v);
  }, r);
}, lg = (n, i) => {
  const r = n != null;
  return [(u) => i[0]({
    lengthComputable: r,
    total: n,
    loaded: u
  }), i[1]];
}, ig = (n) => (...i) => D.asap(() => n(...i)), K2 = bt.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, i) => (r) => (r = new URL(r, bt.origin), n.protocol === r.protocol && n.host === r.host && (i || n.port === r.port)))(
  new URL(bt.origin),
  bt.navigator && /(msie|trident)/i.test(bt.navigator.userAgent)
) : () => !0, F2 = bt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, i, r, u, s, f) {
      const d = [n + "=" + encodeURIComponent(i)];
      D.isNumber(r) && d.push("expires=" + new Date(r).toGMTString()), D.isString(u) && d.push("path=" + u), D.isString(s) && d.push("domain=" + s), f === !0 && d.push("secure"), document.cookie = d.join("; ");
    },
    read(n) {
      const i = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return i ? decodeURIComponent(i[3]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function J2(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function I2(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function Ay(n, i, r) {
  let u = !J2(i);
  return n && (u || r == !1) ? I2(n, i) : i;
}
const ag = (n) => n instanceof zt ? { ...n } : n;
function Ml(n, i) {
  i = i || {};
  const r = {};
  function u(h, m, v, w) {
    return D.isPlainObject(h) && D.isPlainObject(m) ? D.merge.call({ caseless: w }, h, m) : D.isPlainObject(m) ? D.merge({}, m) : D.isArray(m) ? m.slice() : m;
  }
  function s(h, m, v, w) {
    if (D.isUndefined(m)) {
      if (!D.isUndefined(h))
        return u(void 0, h, v, w);
    } else return u(h, m, v, w);
  }
  function f(h, m) {
    if (!D.isUndefined(m))
      return u(void 0, m);
  }
  function d(h, m) {
    if (D.isUndefined(m)) {
      if (!D.isUndefined(h))
        return u(void 0, h);
    } else return u(void 0, m);
  }
  function p(h, m, v) {
    if (v in i)
      return u(h, m);
    if (v in n)
      return u(void 0, h);
  }
  const y = {
    url: f,
    method: f,
    data: f,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: p,
    headers: (h, m, v) => s(ag(h), ag(m), v, !0)
  };
  return D.forEach(Object.keys(Object.assign({}, n, i)), function(m) {
    const v = y[m] || s, w = v(n[m], i[m], m);
    D.isUndefined(w) && v !== p || (r[m] = w);
  }), r;
}
const ky = (n) => {
  const i = Ml({}, n);
  let { data: r, withXSRFToken: u, xsrfHeaderName: s, xsrfCookieName: f, headers: d, auth: p } = i;
  i.headers = d = zt.from(d), i.url = xy(Ay(i.baseURL, i.url, i.allowAbsoluteUrls), n.params, n.paramsSerializer), p && d.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let y;
  if (D.isFormData(r)) {
    if (bt.hasStandardBrowserEnv || bt.hasStandardBrowserWebWorkerEnv)
      d.setContentType(void 0);
    else if ((y = d.getContentType()) !== !1) {
      const [h, ...m] = y ? y.split(";").map((v) => v.trim()).filter(Boolean) : [];
      d.setContentType([h || "multipart/form-data", ...m].join("; "));
    }
  }
  if (bt.hasStandardBrowserEnv && (u && D.isFunction(u) && (u = u(i)), u || u !== !1 && K2(i.url))) {
    const h = s && f && F2.read(f);
    h && d.set(s, h);
  }
  return i;
}, P2 = typeof XMLHttpRequest < "u", $2 = P2 && function(n) {
  return new Promise(function(r, u) {
    const s = ky(n);
    let f = s.data;
    const d = zt.from(s.headers).normalize();
    let { responseType: p, onUploadProgress: y, onDownloadProgress: h } = s, m, v, w, S, C;
    function O() {
      S && S(), C && C(), s.cancelToken && s.cancelToken.unsubscribe(m), s.signal && s.signal.removeEventListener("abort", m);
    }
    let B = new XMLHttpRequest();
    B.open(s.method.toUpperCase(), s.url, !0), B.timeout = s.timeout;
    function U() {
      if (!B)
        return;
      const Q = zt.from(
        "getAllResponseHeaders" in B && B.getAllResponseHeaders()
      ), $ = {
        data: !p || p === "text" || p === "json" ? B.responseText : B.response,
        status: B.status,
        statusText: B.statusText,
        headers: Q,
        config: n,
        request: B
      };
      Ty(function(re) {
        r(re), O();
      }, function(re) {
        u(re), O();
      }, $), B = null;
    }
    "onloadend" in B ? B.onloadend = U : B.onreadystatechange = function() {
      !B || B.readyState !== 4 || B.status === 0 && !(B.responseURL && B.responseURL.indexOf("file:") === 0) || setTimeout(U);
    }, B.onabort = function() {
      B && (u(new Se("Request aborted", Se.ECONNABORTED, n, B)), B = null);
    }, B.onerror = function() {
      u(new Se("Network Error", Se.ERR_NETWORK, n, B)), B = null;
    }, B.ontimeout = function() {
      let ne = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const $ = s.transitional || Sy;
      s.timeoutErrorMessage && (ne = s.timeoutErrorMessage), u(new Se(
        ne,
        $.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED,
        n,
        B
      )), B = null;
    }, f === void 0 && d.setContentType(null), "setRequestHeader" in B && D.forEach(d.toJSON(), function(ne, $) {
      B.setRequestHeader($, ne);
    }), D.isUndefined(s.withCredentials) || (B.withCredentials = !!s.withCredentials), p && p !== "json" && (B.responseType = s.responseType), h && ([w, C] = Su(h, !0), B.addEventListener("progress", w)), y && B.upload && ([v, S] = Su(y), B.upload.addEventListener("progress", v), B.upload.addEventListener("loadend", S)), (s.cancelToken || s.signal) && (m = (Q) => {
      B && (u(!Q || Q.type ? new zi(null, n, B) : Q), B.abort(), B = null);
    }, s.cancelToken && s.cancelToken.subscribe(m), s.signal && (s.signal.aborted ? m() : s.signal.addEventListener("abort", m)));
    const I = X2(s.url);
    if (I && bt.protocols.indexOf(I) === -1) {
      u(new Se("Unsupported protocol " + I + ":", Se.ERR_BAD_REQUEST, n));
      return;
    }
    B.send(f || null);
  });
}, W2 = (n, i) => {
  const { length: r } = n = n ? n.filter(Boolean) : [];
  if (i || r) {
    let u = new AbortController(), s;
    const f = function(h) {
      if (!s) {
        s = !0, p();
        const m = h instanceof Error ? h : this.reason;
        u.abort(m instanceof Se ? m : new zi(m instanceof Error ? m.message : m));
      }
    };
    let d = i && setTimeout(() => {
      d = null, f(new Se(`timeout ${i} of ms exceeded`, Se.ETIMEDOUT));
    }, i);
    const p = () => {
      n && (d && clearTimeout(d), d = null, n.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(f) : h.removeEventListener("abort", f);
      }), n = null);
    };
    n.forEach((h) => h.addEventListener("abort", f));
    const { signal: y } = u;
    return y.unsubscribe = () => D.asap(p), y;
  }
}, eT = function* (n, i) {
  let r = n.byteLength;
  if (r < i) {
    yield n;
    return;
  }
  let u = 0, s;
  for (; u < r; )
    s = u + i, yield n.slice(u, s), u = s;
}, tT = async function* (n, i) {
  for await (const r of nT(n))
    yield* eT(r, i);
}, nT = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const i = n.getReader();
  try {
    for (; ; ) {
      const { done: r, value: u } = await i.read();
      if (r)
        break;
      yield u;
    }
  } finally {
    await i.cancel();
  }
}, rg = (n, i, r, u) => {
  const s = tT(n, i);
  let f = 0, d, p = (y) => {
    d || (d = !0, u && u(y));
  };
  return new ReadableStream({
    async pull(y) {
      try {
        const { done: h, value: m } = await s.next();
        if (h) {
          p(), y.close();
          return;
        }
        let v = m.byteLength;
        if (r) {
          let w = f += v;
          r(w);
        }
        y.enqueue(new Uint8Array(m));
      } catch (h) {
        throw p(h), h;
      }
    },
    cancel(y) {
      return p(y), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, zu = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Cy = zu && typeof ReadableStream == "function", lT = zu && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), _y = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, iT = Cy && _y(() => {
  let n = !1;
  const i = new Request(bt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), ug = 64 * 1024, Uc = Cy && _y(() => D.isReadableStream(new Response("").body)), Eu = {
  stream: Uc && ((n) => n.body)
};
zu && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !Eu[i] && (Eu[i] = D.isFunction(n[i]) ? (r) => r[i]() : (r, u) => {
      throw new Se(`Response type '${i}' is not supported`, Se.ERR_NOT_SUPPORT, u);
    });
  });
})(new Response());
const aT = async (n) => {
  if (n == null)
    return 0;
  if (D.isBlob(n))
    return n.size;
  if (D.isSpecCompliantForm(n))
    return (await new Request(bt.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (D.isArrayBufferView(n) || D.isArrayBuffer(n))
    return n.byteLength;
  if (D.isURLSearchParams(n) && (n = n + ""), D.isString(n))
    return (await lT(n)).byteLength;
}, rT = async (n, i) => {
  const r = D.toFiniteNumber(n.getContentLength());
  return r ?? aT(i);
}, uT = zu && (async (n) => {
  let {
    url: i,
    method: r,
    data: u,
    signal: s,
    cancelToken: f,
    timeout: d,
    onDownloadProgress: p,
    onUploadProgress: y,
    responseType: h,
    headers: m,
    withCredentials: v = "same-origin",
    fetchOptions: w
  } = ky(n);
  h = h ? (h + "").toLowerCase() : "text";
  let S = W2([s, f && f.toAbortSignal()], d), C;
  const O = S && S.unsubscribe && (() => {
    S.unsubscribe();
  });
  let B;
  try {
    if (y && iT && r !== "get" && r !== "head" && (B = await rT(m, u)) !== 0) {
      let $ = new Request(i, {
        method: "POST",
        body: u,
        duplex: "half"
      }), L;
      if (D.isFormData(u) && (L = $.headers.get("content-type")) && m.setContentType(L), $.body) {
        const [re, P] = lg(
          B,
          Su(ig(y))
        );
        u = rg($.body, ug, re, P);
      }
    }
    D.isString(v) || (v = v ? "include" : "omit");
    const U = "credentials" in Request.prototype;
    C = new Request(i, {
      ...w,
      signal: S,
      method: r.toUpperCase(),
      headers: m.normalize().toJSON(),
      body: u,
      duplex: "half",
      credentials: U ? v : void 0
    });
    let I = await fetch(C, w);
    const Q = Uc && (h === "stream" || h === "response");
    if (Uc && (p || Q && O)) {
      const $ = {};
      ["status", "statusText", "headers"].forEach((de) => {
        $[de] = I[de];
      });
      const L = D.toFiniteNumber(I.headers.get("content-length")), [re, P] = p && lg(
        L,
        Su(ig(p), !0)
      ) || [];
      I = new Response(
        rg(I.body, ug, re, () => {
          P && P(), O && O();
        }),
        $
      );
    }
    h = h || "text";
    let ne = await Eu[D.findKey(Eu, h) || "text"](I, n);
    return !Q && O && O(), await new Promise(($, L) => {
      Ty($, L, {
        data: ne,
        headers: zt.from(I.headers),
        status: I.status,
        statusText: I.statusText,
        config: n,
        request: C
      });
    });
  } catch (U) {
    throw O && O(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message) ? Object.assign(
      new Se("Network Error", Se.ERR_NETWORK, n, C),
      {
        cause: U.cause || U
      }
    ) : Se.from(U, U && U.code, n, C);
  }
}), Bc = {
  http: E2,
  xhr: $2,
  fetch: uT
};
D.forEach(Bc, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const og = (n) => `- ${n}`, oT = (n) => D.isFunction(n) || n === null || n === !1, Ry = {
  getAdapter: (n) => {
    n = D.isArray(n) ? n : [n];
    const { length: i } = n;
    let r, u;
    const s = {};
    for (let f = 0; f < i; f++) {
      r = n[f];
      let d;
      if (u = r, !oT(r) && (u = Bc[(d = String(r)).toLowerCase()], u === void 0))
        throw new Se(`Unknown adapter '${d}'`);
      if (u)
        break;
      s[d || "#" + f] = u;
    }
    if (!u) {
      const f = Object.entries(s).map(
        ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let d = i ? f.length > 1 ? `since :
` + f.map(og).join(`
`) : " " + og(f[0]) : "as no adapter specified";
      throw new Se(
        "There is no suitable adapter to dispatch the request " + d,
        "ERR_NOT_SUPPORT"
      );
    }
    return u;
  },
  adapters: Bc
};
function bc(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new zi(null, n);
}
function sg(n) {
  return bc(n), n.headers = zt.from(n.headers), n.data = yc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Ry.getAdapter(n.adapter || Ja.adapter)(n).then(function(u) {
    return bc(n), u.data = yc.call(
      n,
      n.transformResponse,
      u
    ), u.headers = zt.from(u.headers), u;
  }, function(u) {
    return wy(u) || (bc(n), u && u.response && (u.response.data = yc.call(
      n,
      n.transformResponse,
      u.response
    ), u.response.headers = zt.from(u.response.headers))), Promise.reject(u);
  });
}
const Oy = "1.10.0", Nu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, i) => {
  Nu[n] = function(u) {
    return typeof u === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
const cg = {};
Nu.transitional = function(i, r, u) {
  function s(f, d) {
    return "[Axios v" + Oy + "] Transitional option '" + f + "'" + d + (u ? ". " + u : "");
  }
  return (f, d, p) => {
    if (i === !1)
      throw new Se(
        s(d, " has been removed" + (r ? " in " + r : "")),
        Se.ERR_DEPRECATED
      );
    return r && !cg[d] && (cg[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(f, d, p) : !0;
  };
};
Nu.spelling = function(i) {
  return (r, u) => (console.warn(`${u} is likely a misspelling of ${i}`), !0);
};
function sT(n, i, r) {
  if (typeof n != "object")
    throw new Se("options must be an object", Se.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(n);
  let s = u.length;
  for (; s-- > 0; ) {
    const f = u[s], d = i[f];
    if (d) {
      const p = n[f], y = p === void 0 || d(p, f, n);
      if (y !== !0)
        throw new Se("option " + f + " must be " + y, Se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Se("Unknown option " + f, Se.ERR_BAD_OPTION);
  }
}
const bu = {
  assertOptions: sT,
  validators: Nu
}, gn = bu.validators;
let Nl = class {
  constructor(i) {
    this.defaults = i || {}, this.interceptors = {
      request: new tg(),
      response: new tg()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(i, r) {
    try {
      return await this._request(i, r);
    } catch (u) {
      if (u instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const f = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          u.stack ? f && !String(u.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (u.stack += `
` + f) : u.stack = f;
        } catch {
        }
      }
      throw u;
    }
  }
  _request(i, r) {
    typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = Ml(this.defaults, r);
    const { transitional: u, paramsSerializer: s, headers: f } = r;
    u !== void 0 && bu.assertOptions(u, {
      silentJSONParsing: gn.transitional(gn.boolean),
      forcedJSONParsing: gn.transitional(gn.boolean),
      clarifyTimeoutError: gn.transitional(gn.boolean)
    }, !1), s != null && (D.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : bu.assertOptions(s, {
      encode: gn.function,
      serialize: gn.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), bu.assertOptions(r, {
      baseUrl: gn.spelling("baseURL"),
      withXsrfToken: gn.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let d = f && D.merge(
      f.common,
      f[r.method]
    );
    f && D.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete f[C];
      }
    ), r.headers = zt.concat(d, f);
    const p = [];
    let y = !0;
    this.interceptors.request.forEach(function(O) {
      typeof O.runWhen == "function" && O.runWhen(r) === !1 || (y = y && O.synchronous, p.unshift(O.fulfilled, O.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(O) {
      h.push(O.fulfilled, O.rejected);
    });
    let m, v = 0, w;
    if (!y) {
      const C = [sg.bind(this), void 0];
      for (C.unshift.apply(C, p), C.push.apply(C, h), w = C.length, m = Promise.resolve(r); v < w; )
        m = m.then(C[v++], C[v++]);
      return m;
    }
    w = p.length;
    let S = r;
    for (v = 0; v < w; ) {
      const C = p[v++], O = p[v++];
      try {
        S = C(S);
      } catch (B) {
        O.call(this, B);
        break;
      }
    }
    try {
      m = sg.call(this, S);
    } catch (C) {
      return Promise.reject(C);
    }
    for (v = 0, w = h.length; v < w; )
      m = m.then(h[v++], h[v++]);
    return m;
  }
  getUri(i) {
    i = Ml(this.defaults, i);
    const r = Ay(i.baseURL, i.url, i.allowAbsoluteUrls);
    return xy(r, i.params, i.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function(i) {
  Nl.prototype[i] = function(r, u) {
    return this.request(Ml(u || {}, {
      method: i,
      url: r,
      data: (u || {}).data
    }));
  };
});
D.forEach(["post", "put", "patch"], function(i) {
  function r(u) {
    return function(f, d, p) {
      return this.request(Ml(p || {}, {
        method: i,
        headers: u ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: d
      }));
    };
  }
  Nl.prototype[i] = r(), Nl.prototype[i + "Form"] = r(!0);
});
let cT = class zy {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(f) {
      r = f;
    });
    const u = this;
    this.promise.then((s) => {
      if (!u._listeners) return;
      let f = u._listeners.length;
      for (; f-- > 0; )
        u._listeners[f](s);
      u._listeners = null;
    }), this.promise.then = (s) => {
      let f;
      const d = new Promise((p) => {
        u.subscribe(p), f = p;
      }).then(s);
      return d.cancel = function() {
        u.unsubscribe(f);
      }, d;
    }, i(function(f, d, p) {
      u.reason || (u.reason = new zi(f, d, p), r(u.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(i) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(i);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const i = new AbortController(), r = (u) => {
      i.abort(u);
    };
    return this.subscribe(r), i.signal.unsubscribe = () => this.unsubscribe(r), i.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let i;
    return {
      token: new zy(function(s) {
        i = s;
      }),
      cancel: i
    };
  }
};
function fT(n) {
  return function(r) {
    return n.apply(null, r);
  };
}
function dT(n) {
  return D.isObject(n) && n.isAxiosError === !0;
}
const Lc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Lc).forEach(([n, i]) => {
  Lc[i] = n;
});
function Ny(n) {
  const i = new Nl(n), r = oy(Nl.prototype.request, i);
  return D.extend(r, Nl.prototype, i, { allOwnKeys: !0 }), D.extend(r, i, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Ny(Ml(n, s));
  }, r;
}
const Le = Ny(Ja);
Le.Axios = Nl;
Le.CanceledError = zi;
Le.CancelToken = cT;
Le.isCancel = wy;
Le.VERSION = Oy;
Le.toFormData = Ou;
Le.AxiosError = Se;
Le.Cancel = Le.CanceledError;
Le.all = function(i) {
  return Promise.all(i);
};
Le.spread = fT;
Le.isAxiosError = dT;
Le.mergeConfig = Ml;
Le.AxiosHeaders = zt;
Le.formToJSON = (n) => Ey(D.isHTMLForm(n) ? new FormData(n) : n);
Le.getAdapter = Ry.getAdapter;
Le.HttpStatusCode = Lc;
Le.default = Le;
const {
  Axios: NT,
  AxiosError: MT,
  CanceledError: DT,
  isCancel: UT,
  CancelToken: BT,
  VERSION: LT,
  all: jT,
  Cancel: HT,
  isAxiosError: qT,
  spread: VT,
  toFormData: YT,
  AxiosHeaders: GT,
  HttpStatusCode: XT,
  formToJSON: QT,
  getAdapter: ZT,
  mergeConfig: KT
} = Le;
class Ha {
  static BACKEND_URL = "https://qurius-ai.onrender.com";
  // Track widget view
  static async trackWidgetView(i, r) {
    try {
      const u = this.getSessionId(), s = navigator.userAgent;
      await Le.post(`${this.BACKEND_URL}/api/analytics/widget-view`, {
        companyName: i,
        pageUrl: r || window.location.href,
        userAgent: s,
        sessionId: u,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (u) {
      console.error("Failed to track widget view:", u);
    }
  }
  // Track widget interaction
  static async trackWidgetInteraction(i, r, u, s) {
    try {
      const f = this.getSessionId();
      await Le.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName: i,
        eventType: r,
        message: u,
        response: s,
        sessionId: f,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (f) {
      console.error("Failed to track widget interaction:", f);
    }
  }
  // Get analytics for a company
  static async getCompanyAnalytics(i, r = "7d") {
    try {
      const u = await Le.get(`${this.BACKEND_URL}/api/analytics/company/${i}?period=${r}`);
      return console.log("Analytics data for company:", i, u.data), u.data;
    } catch (u) {
      throw console.error("Failed to fetch analytics:", u), new Error("Failed to fetch analytics");
    }
  }
  // Generate unique session ID
  static getSessionId() {
    let i = sessionStorage.getItem("qurius_session_id");
    return i || (i = "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), sessionStorage.setItem("qurius_session_id", i)), i;
  }
  // Track widget open
  static async trackWidgetOpen(i) {
    await this.trackWidgetInteraction(i, "widget_opened");
  }
  // Track widget close
  static async trackWidgetClose(i) {
    await this.trackWidgetInteraction(i, "widget_closed");
  }
  // Track message sent
  static async trackMessageSent(i, r) {
    await this.trackWidgetInteraction(i, "message_sent", r);
  }
  // Track message received
  static async trackMessageReceived(i, r) {
    await this.trackWidgetInteraction(i, "message_received", void 0, r);
  }
}
function hT({ theme: n, toggleTheme: i, isThemeChanging: r }) {
  return /* @__PURE__ */ J.jsxs(
    Ga,
    {
      variant: "ghost",
      size: "sm",
      onClick: i,
      disabled: r,
      className: "h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
      children: [
        r ? /* @__PURE__ */ J.jsx(qc, { className: "h-4 w-4 text-gray-600 dark:text-gray-400 animate-spin" }) : n === "light" ? /* @__PURE__ */ J.jsx(m1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }) : /* @__PURE__ */ J.jsx(v1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }),
        /* @__PURE__ */ J.jsx("span", { className: "sr-only", children: r ? "Changing theme..." : "Toggle theme" })
      ]
    }
  );
}
const pT = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_BACKEND_URL: "https://qurius-ai.onrender.com", VITE_FRONTEND_URL: "https://qurius-ai.vercel.app", VITE_JINA_API_KEY: "demo-jina-key", VITE_OPEN_ROUTER_API_KEY: "demo-openrouter-key", VITE_SUPABASE_ANON_KEY: "demo-key", VITE_SUPABASE_PROJECT_URL: "https://demo.supabase.co", VITE_SUPABASE_SERVICE_ROLE_KEY: "demo-service-key" };
function jn(n, i = "") {
  const r = typeof process < "u" ? process.env?.[n] : void 0;
  return (typeof import.meta < "u" ? pT?.[n] : void 0) ?? r ?? i;
}
const mT = {
  projectUrl: jn("VITE_SUPABASE_PROJECT_URL"),
  anonKey: jn("VITE_SUPABASE_ANON_KEY"),
  serviceRoleKey: jn("VITE_SUPABASE_SERVICE_ROLE_KEY")
}, gT = {
  apiUrl: jn("VITE_OPEN_ROUTER_URL", "https://openrouter.ai/api/v1"),
  apiKey: jn("VITE_OPEN_ROUTER_API_KEY"),
  sourceUrl: jn("VITE_SOURCE_URL", "http://localhost:8081")
}, yT = {
  apiUrl: jn("VITE_JINA_API_URL", "https://api.jina.ai/v1/embeddings"),
  apiKey: jn("VITE_JINA_API_KEY")
}, bT = {
  backendUrl: jn("VITE_BACKEND_URL", "http://localhost:3001"),
  ...mT,
  ...gT,
  ...yT
};
class vT {
  BACKEND_URL = bT.backendUrl;
  // Get FAQ answer using semantic search
  async getFAQAnswer(i, r) {
    try {
      const u = await Le.post(`${this.BACKEND_URL}/api/faqs/search`, {
        companyName: i,
        question: r
      });
      return console.log("FAQ search results:", u.data), Array.isArray(u.data) && u.data.length > 0 ? u.data[0].answer || null : u.data && u.data.answer ? u.data.answer : null;
    } catch (u) {
      return console.error("Error searching FAQs:", u), null;
    }
  }
  async getFAQs(i) {
    try {
      return (await Le.get(`${this.BACKEND_URL}/api/companies/${i}/faqs`)).data;
    } catch (r) {
      throw console.error("Error fetching FAQs:", r), r;
    }
  }
  async importFAQs(i, r) {
    try {
      return (await Le.post(`${this.BACKEND_URL}/api/companies/${i}/faqs`, { faqs: r })).data;
    } catch (u) {
      throw console.error("Error importing FAQs:", u), u;
    }
  }
  async addFAQ(i, r, u) {
    try {
      return (await Le.post(`${this.BACKEND_URL}/api/companies/${i}/faqs`, {
        faqs: [{ question: r, answer: u }]
      })).data;
    } catch (s) {
      throw console.error("Error adding FAQ:", s), s;
    }
  }
  async updateFAQ(i, r, u) {
    try {
      return (await Le.put(`${this.BACKEND_URL}/api/faqs/${i}`, {
        question: r,
        answer: u
      })).data;
    } catch (s) {
      throw console.error("Error updating FAQ:", s), s;
    }
  }
  async deleteFAQ(i) {
    try {
      await Le.delete(`${this.BACKEND_URL}/api/faqs/${i}`);
    } catch (r) {
      throw console.error("Error deleting FAQ:", r), r;
    }
  }
}
const xT = new vT();
class ST {
  static BACKEND_URL = "https://qurius-ai.onrender.com";
  // Generate theme from primary color
  static generateThemeFromPrimary(i, r, u) {
    return {
      primaryColor: i,
      logoUrl: u,
      backgroundColor: r ? "#1e2939" : "#F3F4F6",
      textColor: r ? "#F9FAFB" : "#1F2937",
      borderColor: r ? "#374151" : "#E5E7EB",
      accentColor: "#10B981"
      // Keep accent consistent
    };
  }
  static async getCompanyTheme(i, r) {
    try {
      const s = (await Le.get(`${this.BACKEND_URL}/api/companies/${encodeURIComponent(i)}/theme`, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.company, d = s?.theme?.primaryColor || "#3B82F6", p = s?.logo_url || "";
      return this.generateThemeFromPrimary(d, r, p);
    } catch (u) {
      return console.error("Error fetching company theme:", u), this.generateThemeFromPrimary("#3B82F6", r, "");
    }
  }
}
function ET({
  defaultTheme: n,
  toggleTheme: i,
  isMinimized: r = !1,
  onToggleMinimize: u,
  companyName: s = "Assistant",
  isThemeChanging: f = !1
}) {
  const [d, p] = ve.useState([
    {
      content: `Hello! I'm your ${s} assistant. How can I help you today?`,
      isUser: !1,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]), [y, h] = ve.useState(!1), [m, v] = ve.useState(!1), [w, S] = ve.useState(!1), [C, O] = ve.useState(!0), [B, U] = ve.useState(!1), I = ve.useRef(null), Q = ve.useRef(null), [ne, $] = ve.useState(null), L = n === "dark";
  ve.useEffect(() => {
    s && ST.getCompanyTheme(s, L).then($);
  }, [s, L]), ve.useEffect(() => {
    s && Ha.trackWidgetView(s);
  }, [s]), ve.useEffect(() => {
    s && (r ? Ha.trackWidgetClose(s) : Ha.trackWidgetOpen(s));
  }, [r, s]);
  const re = () => {
    I.current?.scrollIntoView({ behavior: "smooth" });
  }, P = () => {
    if (Q.current) {
      const { scrollTop: G, scrollHeight: ae, clientHeight: W } = Q.current, te = ae - G - W < 10;
      O(te), w && !te && v(!0), te && v(!1);
    }
  }, de = (G) => {
    S(G), G && v(!1);
  };
  ve.useEffect(() => {
    if (w && !m) {
      const G = setInterval(() => {
        re();
      }, 100);
      return () => clearInterval(G);
    }
  }, [w, m]), ve.useEffect(() => {
    r ? U(!0) : re();
  }, [r]);
  const Te = async (G) => {
    const ae = {
      content: G,
      isUser: !0,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    h(!0), p((W) => [...W, ae]), s && Ha.trackMessageSent(s, G);
    try {
      const W = await xT.getFAQAnswer(s, G);
      if (W) {
        const te = {
          content: W,
          isUser: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        p((N) => [...N, te]), U(!1), s && Ha.trackMessageReceived(s, W);
      } else
        p((te) => [
          ...te,
          {
            content: "I apologize, but I don't have specific information about that. Please contact our support team for assistance.",
            isUser: !1,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          }
        ]);
    } catch (W) {
      console.error("Error getting response:", W), p((te) => [
        ...te,
        {
          content: "Sorry, something went wrong. Please try again.",
          isUser: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      h(!1);
    }
  }, ie = ne?.primaryColor ? kg(ne.primaryColor, 20) : void 0;
  return r ? /* @__PURE__ */ J.jsx(
    "div",
    {
      style: {
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 50,
        maxWidth: "400px",
        maxHeight: "600px"
      },
      children: /* @__PURE__ */ J.jsxs(
        Ga,
        {
          onClick: u,
          className: "h-14 w-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2",
          style: {
            backgroundColor: ne?.primaryColor,
            "--hover-bg-color": ie
          },
          onMouseEnter: (G) => {
            ie && (G.currentTarget.style.backgroundColor = ie);
          },
          onMouseLeave: (G) => {
            ne?.primaryColor && (G.currentTarget.style.backgroundColor = ne.primaryColor);
          },
          onFocus: (G) => {
            ie && (G.currentTarget.style.backgroundColor = ie);
          },
          onBlur: (G) => {
            ne?.primaryColor && (G.currentTarget.style.backgroundColor = ne.primaryColor);
          },
          children: [
            /* @__PURE__ */ J.jsx(rm, { className: "h-6 w-6" }),
            /* @__PURE__ */ J.jsx("span", { className: "sr-only", children: "Open chat" })
          ]
        }
      )
    }
  ) : /* @__PURE__ */ J.jsxs(
    "div",
    {
      className: bn(
        "border border-gray-200 dark:border-gray-700",
        "rounded-lg shadow-2xl flex flex-col overflow-hidden",
        "transition-all duration-300 ease-in-out",
        "relative",
        // Add relative positioning for spinner overlay
        "bg-white dark:bg-gray-900"
      ),
      style: {
        width: "100%",
        height: "100%",
        maxWidth: "400px",
        maxHeight: "600px",
        boxSizing: "border-box",
        position: "fixed",
        bottom: `${window.innerWidth > 768 ? "1rem" : "0"}`,
        right: `${window.innerWidth > 768 ? "1rem" : "0"}`,
        zIndex: 50
      },
      children: [
        f && /* @__PURE__ */ J.jsx(
          "div",
          {
            className: "absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg",
            style: { backgroundColor: ne?.backgroundColor + "CC" },
            children: /* @__PURE__ */ J.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ J.jsx(
                qc,
                {
                  className: "w-12 h-12 animate-spin",
                  style: { color: ne?.primaryColor }
                }
              ),
              /* @__PURE__ */ J.jsx(
                "p",
                {
                  className: "text-sm font-medium",
                  style: { color: ne?.textColor },
                  children: "Updating theme..."
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ J.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800", children: [
          /* @__PURE__ */ J.jsxs("div", { className: "flex items-center gap-3", children: [
            ne?.logoUrl ? /* @__PURE__ */ J.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", children: /* @__PURE__ */ J.jsx("img", { src: ne?.logoUrl, alt: "Company Logo", className: "w-7 h-7" }) }) : (
              // Default logo
              /* @__PURE__ */ J.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", style: { backgroundColor: ne?.primaryColor }, children: /* @__PURE__ */ J.jsx(rm, { className: "w-4 h-4 text-white" }) })
            ),
            /* @__PURE__ */ J.jsxs("div", { children: [
              /* @__PURE__ */ J.jsxs("h3", { className: "font-semibold text-gray-900 dark:text-gray-100 text-sm", children: [
                s,
                " Assistant"
              ] }),
              /* @__PURE__ */ J.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Online now" })
            ] })
          ] }),
          /* @__PURE__ */ J.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ J.jsx(hT, { theme: n, toggleTheme: i, isThemeChanging: f }),
            u && /* @__PURE__ */ J.jsxs(
              Ga,
              {
                variant: "ghost",
                size: "sm",
                onClick: u,
                className: "h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-700",
                children: [
                  /* @__PURE__ */ J.jsx(h1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }),
                  /* @__PURE__ */ J.jsx("span", { className: "sr-only", children: "Minimize chat" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ J.jsxs(
          "div",
          {
            ref: Q,
            className: "flex-1 overflow-y-auto bg-white dark:bg-gray-900",
            onScroll: P,
            children: [
              /* @__PURE__ */ J.jsxs("div", { className: "py-4", children: [
                d.map((G, ae) => {
                  const W = !G.isUser && ae === d.length - 1;
                  return /* @__PURE__ */ J.jsx(
                    ww,
                    {
                      message: G.content,
                      isUser: G.isUser,
                      timestamp: G.timestamp,
                      onStreamingChange: G.isUser ? void 0 : de,
                      skipStreaming: B && !G.isUser,
                      isLastAiMessage: W,
                      companyTheme: ne || void 0
                    },
                    ae
                  );
                }),
                y && /* @__PURE__ */ J.jsx(Bw, { companyTheme: ne })
              ] }),
              /* @__PURE__ */ J.jsx("div", { ref: I })
            ]
          }
        ),
        !C && !w && /* @__PURE__ */ J.jsx("div", { className: "absolute bottom-27 right-4 z-10", children: /* @__PURE__ */ J.jsxs(
          Ga,
          {
            onClick: re,
            size: "sm",
            className: "h-10 w-10 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
            style: {
              backgroundColor: ne?.primaryColor,
              "--hover-bg-color": ie
            },
            onMouseEnter: (G) => {
              ie && (G.currentTarget.style.backgroundColor = ie);
            },
            onMouseLeave: (G) => {
              ne?.primaryColor && (G.currentTarget.style.backgroundColor = ne.primaryColor);
            },
            onFocus: (G) => {
              ie && (G.currentTarget.style.backgroundColor = ie);
            },
            onBlur: (G) => {
              ne?.primaryColor && (G.currentTarget.style.backgroundColor = ne.primaryColor);
            },
            children: [
              /* @__PURE__ */ J.jsx(s1, { className: "h-4 w-4" }),
              /* @__PURE__ */ J.jsx("span", { className: "sr-only", children: "Scroll to bottom" })
            ]
          }
        ) }),
        /* @__PURE__ */ J.jsx(
          Uw,
          {
            onSendMessage: Te,
            isLoading: y,
            placeholder: `Ask ${s} anything...`,
            defaultTheme: n,
            companyTheme: ne || void 0
          }
        )
      ]
    }
  );
}
const wT = 400, TT = 1300, Ol = {
  light: {
    containerBackground: "#ffffff",
    messageBackground: "#f5f5f5",
    text: "#000000",
    primary: "#8B5CF6",
    secondary: "#8B5CF6",
    card: "#f5f5f5",
    border: "#e0e0e0",
    gray: "#888888"
  },
  dark: {
    containerBackground: "#000000",
    messageBackground: "#111827",
    text: "#ffffff",
    primary: "#8B5CF6",
    secondary: "#8B5CF6",
    card: "#1e1e1e",
    border: "#333333",
    gray: "#888888"
  }
}, My = ve.createContext({
  colors: Ol.light,
  defaultTheme: "light",
  isDark: !1,
  setColorScheme: () => {
  },
  toggleTheme: () => {
  },
  isThemeChanging: !1
}), AT = ({ children: n }) => {
  const i = () => {
    if (typeof window < "u") {
      const h = localStorage.getItem("theme");
      return h === "light" || h === "dark" ? h : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }, [r, u] = ve.useState(i() === "dark"), [s, f] = ve.useState(!1), d = (h) => {
    u(h === "dark"), typeof window < "u" && localStorage.setItem("theme", h);
  }, p = () => {
    const h = r ? "light" : "dark";
    f(!0), setTimeout(() => {
      d(h), setTimeout(() => {
        f(!1);
      }, TT);
    }, wT);
  };
  ve.useEffect(() => {
    const h = window.matchMedia("(prefers-color-scheme: dark)"), m = (v) => {
      localStorage.getItem("theme") || d(v.matches ? "dark" : "light");
    };
    return h.addEventListener("change", m), () => h.removeEventListener("change", m);
  }, []), ve.useEffect(() => {
    typeof window < "u" && (r ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), document.body.style.backgroundColor = r ? Ol.dark.containerBackground : Ol.light.containerBackground, document.body.style.color = r ? Ol.dark.text : Ol.light.text);
  }, [r]);
  const y = r ? Ol.dark : Ol.light;
  return /* @__PURE__ */ J.jsx(My.Provider, { value: {
    colors: y,
    defaultTheme: r ? "dark" : "light",
    isDark: r,
    setColorScheme: d,
    toggleTheme: p,
    isThemeChanging: s
  }, children: n });
}, kT = () => {
  const n = ve.useContext(My);
  if (!n)
    throw new Error("useTheme must be used within a ThemeProvider");
  return n;
};
let pu = null;
function CT(n, i) {
  pu && pu.unmount(), pu = t1.createRoot(n), pu.render(
    /* @__PURE__ */ J.jsx(fg.StrictMode, { children: /* @__PURE__ */ J.jsx(AT, { children: /* @__PURE__ */ J.jsx(_T, { config: i }) }) })
  );
}
function _T({ config: n }) {
  const { defaultTheme: i, toggleTheme: r, isThemeChanging: u } = kT(), [s, f] = fg.useState(!0), d = () => {
    const p = !s;
    f(p), console.log(p ? "Widget minimized, chat button should be visible" : "Widget expanded, chat button should be hidden");
  };
  return /* @__PURE__ */ J.jsx(
    ET,
    {
      defaultTheme: i,
      toggleTheme: r,
      isMinimized: s,
      onToggleMinimize: d,
      companyName: n.companyName,
      isThemeChanging: u
    }
  );
}
const RT = {
  init: CT
};
typeof window < "u" && (window.QuriusChatWidget = RT);
export {
  RT as default
};
