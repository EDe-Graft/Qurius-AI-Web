function Hc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Fs = { exports: {} }, Nr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ip;
function e1() {
  if (Ip) return Nr;
  Ip = 1;
  var n = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function i(u, s, f) {
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
  return Nr.Fragment = a, Nr.jsx = i, Nr.jsxs = i, Nr;
}
var Jp;
function t1() {
  return Jp || (Jp = 1, Fs.exports = e1()), Fs.exports;
}
var V = t1(), Is = { exports: {} }, Te = {};
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
function n1() {
  if (Pp) return Te;
  Pp = 1;
  var n = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.iterator;
  function w(b) {
    return b === null || typeof b != "object" ? null : (b = x && b[x] || b["@@iterator"], typeof b == "function" ? b : null);
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
  }, _ = Object.assign, O = {};
  function j(b, Y, W) {
    this.props = b, this.context = Y, this.refs = O, this.updater = W || S;
  }
  j.prototype.isReactComponent = {}, j.prototype.setState = function(b, Y) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, Y, "setState");
  }, j.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function B() {
  }
  B.prototype = j.prototype;
  function F(b, Y, W) {
    this.props = b, this.context = Y, this.refs = O, this.updater = W || S;
  }
  var K = F.prototype = new B();
  K.constructor = F, _(K, j.prototype), K.isPureReactComponent = !0;
  var ue = Array.isArray, P = { H: null, A: null, T: null, S: null, V: null }, U = Object.prototype.hasOwnProperty;
  function re(b, Y, W, E, le, Ee) {
    return W = Ee.ref, {
      $$typeof: n,
      type: b,
      key: Y,
      ref: W !== void 0 ? W : null,
      props: Ee
    };
  }
  function J(b, Y) {
    return re(
      b.type,
      Y,
      void 0,
      void 0,
      void 0,
      b.props
    );
  }
  function fe(b) {
    return typeof b == "object" && b !== null && b.$$typeof === n;
  }
  function Se(b) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(W) {
      return Y[W];
    });
  }
  var ae = /\/+/g;
  function te(b, Y) {
    return typeof b == "object" && b !== null && b.key != null ? Se("" + b.key) : Y.toString(36);
  }
  function $() {
  }
  function ne(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then($, $) : (b.status = "pending", b.then(
          function(Y) {
            b.status === "pending" && (b.status = "fulfilled", b.value = Y);
          },
          function(Y) {
            b.status === "pending" && (b.status = "rejected", b.reason = Y);
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
  function ee(b, Y, W, E, le) {
    var Ee = typeof b;
    (Ee === "undefined" || Ee === "boolean") && (b = null);
    var ie = !1;
    if (b === null) ie = !0;
    else
      switch (Ee) {
        case "bigint":
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case n:
            case a:
              ie = !0;
              break;
            case m:
              return ie = b._init, ee(
                ie(b._payload),
                Y,
                W,
                E,
                le
              );
          }
      }
    if (ie)
      return le = le(b), ie = E === "" ? "." + te(b, 0) : E, ue(le) ? (W = "", ie != null && (W = ie.replace(ae, "$&/") + "/"), ee(le, Y, W, "", function(et) {
        return et;
      })) : le != null && (fe(le) && (le = J(
        le,
        W + (le.key == null || b && b.key === le.key ? "" : ("" + le.key).replace(
          ae,
          "$&/"
        ) + "/") + ie
      )), Y.push(le)), 1;
    ie = 0;
    var _e = E === "" ? "." : E + ":";
    if (ue(b))
      for (var Ne = 0; Ne < b.length; Ne++)
        E = b[Ne], Ee = _e + te(E, Ne), ie += ee(
          E,
          Y,
          W,
          Ee,
          le
        );
    else if (Ne = w(b), typeof Ne == "function")
      for (b = Ne.call(b), Ne = 0; !(E = b.next()).done; )
        E = E.value, Ee = _e + te(E, Ne++), ie += ee(
          E,
          Y,
          W,
          Ee,
          le
        );
    else if (Ee === "object") {
      if (typeof b.then == "function")
        return ee(
          ne(b),
          Y,
          W,
          E,
          le
        );
      throw Y = String(b), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ie;
  }
  function A(b, Y, W) {
    if (b == null) return b;
    var E = [], le = 0;
    return ee(b, E, "", "", function(Ee) {
      return Y.call(W, Ee, le++);
    }), E;
  }
  function Q(b) {
    if (b._status === -1) {
      var Y = b._result;
      Y = Y(), Y.then(
        function(W) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = W);
        },
        function(W) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = W);
        }
      ), b._status === -1 && (b._status = 0, b._result = Y);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var L = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  };
  function de() {
  }
  return Te.Children = {
    map: A,
    forEach: function(b, Y, W) {
      A(
        b,
        function() {
          Y.apply(this, arguments);
        },
        W
      );
    },
    count: function(b) {
      var Y = 0;
      return A(b, function() {
        Y++;
      }), Y;
    },
    toArray: function(b) {
      return A(b, function(Y) {
        return Y;
      }) || [];
    },
    only: function(b) {
      if (!fe(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  }, Te.Component = j, Te.Fragment = i, Te.Profiler = s, Te.PureComponent = F, Te.StrictMode = u, Te.Suspense = y, Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, Te.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return P.H.useMemoCache(b);
    }
  }, Te.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, Te.cloneElement = function(b, Y, W) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var E = _({}, b.props), le = b.key, Ee = void 0;
    if (Y != null)
      for (ie in Y.ref !== void 0 && (Ee = void 0), Y.key !== void 0 && (le = "" + Y.key), Y)
        !U.call(Y, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && Y.ref === void 0 || (E[ie] = Y[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) E.children = W;
    else if (1 < ie) {
      for (var _e = Array(ie), Ne = 0; Ne < ie; Ne++)
        _e[Ne] = arguments[Ne + 2];
      E.children = _e;
    }
    return re(b.type, le, void 0, void 0, Ee, E);
  }, Te.createContext = function(b) {
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
  }, Te.createElement = function(b, Y, W) {
    var E, le = {}, Ee = null;
    if (Y != null)
      for (E in Y.key !== void 0 && (Ee = "" + Y.key), Y)
        U.call(Y, E) && E !== "key" && E !== "__self" && E !== "__source" && (le[E] = Y[E]);
    var ie = arguments.length - 2;
    if (ie === 1) le.children = W;
    else if (1 < ie) {
      for (var _e = Array(ie), Ne = 0; Ne < ie; Ne++)
        _e[Ne] = arguments[Ne + 2];
      le.children = _e;
    }
    if (b && b.defaultProps)
      for (E in ie = b.defaultProps, ie)
        le[E] === void 0 && (le[E] = ie[E]);
    return re(b, Ee, void 0, void 0, null, le);
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, Te.isValidElement = fe, Te.lazy = function(b) {
    return {
      $$typeof: m,
      _payload: { _status: -1, _result: b },
      _init: Q
    };
  }, Te.memo = function(b, Y) {
    return {
      $$typeof: h,
      type: b,
      compare: Y === void 0 ? null : Y
    };
  }, Te.startTransition = function(b) {
    var Y = P.T, W = {};
    P.T = W;
    try {
      var E = b(), le = P.S;
      le !== null && le(W, E), typeof E == "object" && E !== null && typeof E.then == "function" && E.then(de, L);
    } catch (Ee) {
      L(Ee);
    } finally {
      P.T = Y;
    }
  }, Te.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, Te.use = function(b) {
    return P.H.use(b);
  }, Te.useActionState = function(b, Y, W) {
    return P.H.useActionState(b, Y, W);
  }, Te.useCallback = function(b, Y) {
    return P.H.useCallback(b, Y);
  }, Te.useContext = function(b) {
    return P.H.useContext(b);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(b, Y) {
    return P.H.useDeferredValue(b, Y);
  }, Te.useEffect = function(b, Y, W) {
    var E = P.H;
    if (typeof W == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return E.useEffect(b, Y);
  }, Te.useId = function() {
    return P.H.useId();
  }, Te.useImperativeHandle = function(b, Y, W) {
    return P.H.useImperativeHandle(b, Y, W);
  }, Te.useInsertionEffect = function(b, Y) {
    return P.H.useInsertionEffect(b, Y);
  }, Te.useLayoutEffect = function(b, Y) {
    return P.H.useLayoutEffect(b, Y);
  }, Te.useMemo = function(b, Y) {
    return P.H.useMemo(b, Y);
  }, Te.useOptimistic = function(b, Y) {
    return P.H.useOptimistic(b, Y);
  }, Te.useReducer = function(b, Y, W) {
    return P.H.useReducer(b, Y, W);
  }, Te.useRef = function(b) {
    return P.H.useRef(b);
  }, Te.useState = function(b) {
    return P.H.useState(b);
  }, Te.useSyncExternalStore = function(b, Y, W) {
    return P.H.useSyncExternalStore(
      b,
      Y,
      W
    );
  }, Te.useTransition = function() {
    return P.H.useTransition();
  }, Te.version = "19.1.0", Te;
}
var $p;
function qc() {
  return $p || ($p = 1, Is.exports = n1()), Is.exports;
}
var pe = qc();
const pg = /* @__PURE__ */ Hc(pe);
var Js = { exports: {} }, Mr = {}, Ps = { exports: {} }, $s = {};
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
function l1() {
  return Wp || (Wp = 1, function(n) {
    function a(A, Q) {
      var L = A.length;
      A.push(Q);
      e: for (; 0 < L; ) {
        var de = L - 1 >>> 1, b = A[de];
        if (0 < s(b, Q))
          A[de] = Q, A[L] = b, L = de;
        else break e;
      }
    }
    function i(A) {
      return A.length === 0 ? null : A[0];
    }
    function u(A) {
      if (A.length === 0) return null;
      var Q = A[0], L = A.pop();
      if (L !== Q) {
        A[0] = L;
        e: for (var de = 0, b = A.length, Y = b >>> 1; de < Y; ) {
          var W = 2 * (de + 1) - 1, E = A[W], le = W + 1, Ee = A[le];
          if (0 > s(E, L))
            le < b && 0 > s(Ee, E) ? (A[de] = Ee, A[le] = L, de = le) : (A[de] = E, A[W] = L, de = W);
          else if (le < b && 0 > s(Ee, L))
            A[de] = Ee, A[le] = L, de = le;
          else break e;
        }
      }
      return Q;
    }
    function s(A, Q) {
      var L = A.sortIndex - Q.sortIndex;
      return L !== 0 ? L : A.id - Q.id;
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
    var y = [], h = [], m = 1, x = null, w = 3, S = !1, _ = !1, O = !1, j = !1, B = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function ue(A) {
      for (var Q = i(h); Q !== null; ) {
        if (Q.callback === null) u(h);
        else if (Q.startTime <= A)
          u(h), Q.sortIndex = Q.expirationTime, a(y, Q);
        else break;
        Q = i(h);
      }
    }
    function P(A) {
      if (O = !1, ue(A), !_)
        if (i(y) !== null)
          _ = !0, U || (U = !0, te());
        else {
          var Q = i(h);
          Q !== null && ee(P, Q.startTime - A);
        }
    }
    var U = !1, re = -1, J = 5, fe = -1;
    function Se() {
      return j ? !0 : !(n.unstable_now() - fe < J);
    }
    function ae() {
      if (j = !1, U) {
        var A = n.unstable_now();
        fe = A;
        var Q = !0;
        try {
          e: {
            _ = !1, O && (O = !1, F(re), re = -1), S = !0;
            var L = w;
            try {
              t: {
                for (ue(A), x = i(y); x !== null && !(x.expirationTime > A && Se()); ) {
                  var de = x.callback;
                  if (typeof de == "function") {
                    x.callback = null, w = x.priorityLevel;
                    var b = de(
                      x.expirationTime <= A
                    );
                    if (A = n.unstable_now(), typeof b == "function") {
                      x.callback = b, ue(A), Q = !0;
                      break t;
                    }
                    x === i(y) && u(y), ue(A);
                  } else u(y);
                  x = i(y);
                }
                if (x !== null) Q = !0;
                else {
                  var Y = i(h);
                  Y !== null && ee(
                    P,
                    Y.startTime - A
                  ), Q = !1;
                }
              }
              break e;
            } finally {
              x = null, w = L, S = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? te() : U = !1;
        }
      }
    }
    var te;
    if (typeof K == "function")
      te = function() {
        K(ae);
      };
    else if (typeof MessageChannel < "u") {
      var $ = new MessageChannel(), ne = $.port2;
      $.port1.onmessage = ae, te = function() {
        ne.postMessage(null);
      };
    } else
      te = function() {
        B(ae, 0);
      };
    function ee(A, Q) {
      re = B(function() {
        A(n.unstable_now());
      }, Q);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, n.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < A ? Math.floor(1e3 / A) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(A) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = w;
      }
      var L = w;
      w = Q;
      try {
        return A();
      } finally {
        w = L;
      }
    }, n.unstable_requestPaint = function() {
      j = !0;
    }, n.unstable_runWithPriority = function(A, Q) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var L = w;
      w = A;
      try {
        return Q();
      } finally {
        w = L;
      }
    }, n.unstable_scheduleCallback = function(A, Q, L) {
      var de = n.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? de + L : de) : L = de, A) {
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
      return b = L + b, A = {
        id: m++,
        callback: Q,
        priorityLevel: A,
        startTime: L,
        expirationTime: b,
        sortIndex: -1
      }, L > de ? (A.sortIndex = L, a(h, A), i(y) === null && A === i(h) && (O ? (F(re), re = -1) : O = !0, ee(P, L - de))) : (A.sortIndex = b, a(y, A), _ || S || (_ = !0, U || (U = !0, te()))), A;
    }, n.unstable_shouldYield = Se, n.unstable_wrapCallback = function(A) {
      var Q = w;
      return function() {
        var L = w;
        w = Q;
        try {
          return A.apply(this, arguments);
        } finally {
          w = L;
        }
      };
    };
  }($s)), $s;
}
var em;
function a1() {
  return em || (em = 1, Ps.exports = l1()), Ps.exports;
}
var Ws = { exports: {} }, yt = {};
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
function r1() {
  if (tm) return yt;
  tm = 1;
  var n = qc();
  function a(y) {
    var h = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        h += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return "Minified React error #" + y + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var u = {
    d: {
      f: i,
      r: function() {
        throw Error(a(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function f(y, h, m) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: x == null ? null : "" + x,
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
      throw Error(a(299));
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
      var m = h.as, x = p(m, h.crossOrigin), w = typeof h.integrity == "string" ? h.integrity : void 0, S = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      m === "style" ? u.d.S(
        y,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: x,
          integrity: w,
          fetchPriority: S
        }
      ) : m === "script" && u.d.X(y, {
        crossOrigin: x,
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
      var m = h.as, x = p(m, h.crossOrigin);
      u.d.L(y, m, {
        crossOrigin: x,
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
function i1() {
  if (nm) return Ws.exports;
  nm = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), Ws.exports = r1(), Ws.exports;
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
function u1() {
  if (lm) return Mr;
  lm = 1;
  var n = a1(), a = qc(), i = i1();
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
    for (var l = e, r = t; ; ) {
      var o = l.return;
      if (o === null) break;
      var c = o.alternate;
      if (c === null) {
        if (r = o.return, r !== null) {
          l = r;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === l) return p(o), e;
          if (c === r) return p(o), t;
          c = c.sibling;
        }
        throw Error(u(188));
      }
      if (l.return !== r.return) l = o, r = c;
      else {
        for (var g = !1, v = o.child; v; ) {
          if (v === l) {
            g = !0, l = o, r = c;
            break;
          }
          if (v === r) {
            g = !0, r = o, l = c;
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = c.child; v; ) {
            if (v === l) {
              g = !0, l = c, r = o;
              break;
            }
            if (v === r) {
              g = !0, r = c, l = o;
              break;
            }
            v = v.sibling;
          }
          if (!g) throw Error(u(189));
        }
      }
      if (l.alternate !== r) throw Error(u(190));
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
  var m = Object.assign, x = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), F = Symbol.for("react.consumer"), K = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), Se = Symbol.for("react.memo_cache_sentinel"), ae = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = ae && e[ae] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var $ = Symbol.for("react.client.reference");
  function ne(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === $ ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case _:
        return "Fragment";
      case j:
        return "Profiler";
      case O:
        return "StrictMode";
      case P:
        return "Suspense";
      case U:
        return "SuspenseList";
      case fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case K:
          return (e.displayName || "Context") + ".Provider";
        case F:
          return (e._context.displayName || "Context") + ".Consumer";
        case ue:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case re:
          return t = e.displayName || null, t !== null ? t : ne(e.type) || "Memo";
        case J:
          t = e._payload, e = e._init;
          try {
            return ne(e(t));
          } catch {
          }
      }
    return null;
  }
  var ee = Array.isArray, A = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, de = [], b = -1;
  function Y(e) {
    return { current: e };
  }
  function W(e) {
    0 > b || (e.current = de[b], de[b] = null, b--);
  }
  function E(e, t) {
    b++, de[b] = e.current, e.current = t;
  }
  var le = Y(null), Ee = Y(null), ie = Y(null), _e = Y(null);
  function Ne(e, t) {
    switch (E(ie, t), E(Ee, e), E(le, null), t.nodeType) {
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
    W(le), E(le, e);
  }
  function et() {
    W(le), W(Ee), W(ie);
  }
  function xt(e) {
    e.memoizedState !== null && E(_e, e);
    var t = le.current, l = Tp(t, e.type);
    t !== l && (E(Ee, e), E(le, l));
  }
  function Dt(e) {
    Ee.current === e && (W(le), W(Ee)), _e.current === e && (W(_e), Cr._currentValue = L);
  }
  var fn = Object.prototype.hasOwnProperty, Ma = n.unstable_scheduleCallback, Da = n.unstable_cancelCallback, Ir = n.unstable_shouldYield, Jr = n.unstable_requestPaint, Ut = n.unstable_now, Nu = n.unstable_getCurrentPriorityLevel, Ua = n.unstable_ImmediatePriority, Ba = n.unstable_UserBlockingPriority, Bl = n.unstable_NormalPriority, Mu = n.unstable_LowPriority, Pr = n.unstable_IdlePriority, Du = n.log, Uu = n.unstable_setDisableYieldValue, H = null, Z = null;
  function me(e) {
    if (typeof Du == "function" && Uu(e), Z && typeof Z.setStrictMode == "function")
      try {
        Z.setStrictMode(H, e);
      } catch {
      }
  }
  var be = Math.clz32 ? Math.clz32 : En, Le = Math.log, Bt = Math.LN2;
  function En(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Le(e) / Bt | 0) | 0;
  }
  var Et = 256, dn = 4194304;
  function jt(e) {
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
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0, c = e.suspendedLanes, g = e.pingedLanes;
    e = e.warmLanes;
    var v = r & 134217727;
    return v !== 0 ? (r = v & ~c, r !== 0 ? o = jt(r) : (g &= v, g !== 0 ? o = jt(g) : l || (l = v & ~e, l !== 0 && (o = jt(l))))) : (v = r & ~c, v !== 0 ? o = jt(v) : g !== 0 ? o = jt(g) : l || (l = r & ~e, l !== 0 && (o = jt(l)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, l = t & -t, c >= l || c === 32 && (l & 4194048) !== 0) ? t : o;
  }
  function Zt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function rn(e, t) {
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
    var e = dn;
    return dn <<= 1, (dn & 62914560) === 0 && (dn = 4194304), e;
  }
  function Bu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ja(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Yy(e, t, l, r, o, c) {
    var g = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var v = e.entanglements, T = e.expirationTimes, z = e.hiddenUpdates;
    for (l = g & ~l; 0 < l; ) {
      var q = 31 - be(l), X = 1 << q;
      v[q] = 0, T[q] = -1;
      var N = z[q];
      if (N !== null)
        for (z[q] = null, q = 0; q < N.length; q++) {
          var M = N[q];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~X;
    }
    r !== 0 && of(e, r, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(g & ~t));
  }
  function of(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - be(t);
    e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | l & 4194090;
  }
  function sf(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var r = 31 - be(l), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), l &= ~o;
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
  function Lu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function cf() {
    var e = Q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Gp(e.type));
  }
  function Gy(e, t) {
    var l = Q.p;
    try {
      return Q.p = e, t();
    } finally {
      Q.p = l;
    }
  }
  var Vn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + Vn, wt = "__reactProps$" + Vn, jl = "__reactContainer$" + Vn, Hu = "__reactEvents$" + Vn, Qy = "__reactListeners$" + Vn, Xy = "__reactHandles$" + Vn, ff = "__reactResources$" + Vn, La = "__reactMarker$" + Vn;
  function qu(e) {
    delete e[mt], delete e[wt], delete e[Hu], delete e[Qy], delete e[Xy];
  }
  function Ll(e) {
    var t = e[mt];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[jl] || l[mt]) {
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
  function Hl(e) {
    if (e = e[mt] || e[jl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ha(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function ql(e) {
    var t = e[ff];
    return t || (t = e[ff] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ot(e) {
    e[La] = !0;
  }
  var df = /* @__PURE__ */ new Set(), hf = {};
  function hl(e, t) {
    Vl(e, t), Vl(e + "Capture", t);
  }
  function Vl(e, t) {
    for (hf[e] = t, e = 0; e < t.length; e++)
      df.add(t[e]);
  }
  var Ky = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), pf = {}, mf = {};
  function Zy(e) {
    return fn.call(mf, e) ? !0 : fn.call(pf, e) ? !1 : Ky.test(e) ? mf[e] = !0 : (pf[e] = !0, !1);
  }
  function $r(e, t, l) {
    if (Zy(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var r = t.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Wr(e, t, l) {
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
  function wn(e, t, l, r) {
    if (r === null) e.removeAttribute(l);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + r);
    }
  }
  var Vu, gf;
  function Yl(e) {
    if (Vu === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Vu = t && t[1] || "", gf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Vu + e + gf;
  }
  var Yu = !1;
  function Gu(e, t) {
    if (!e || Yu) return "";
    Yu = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (M) {
                  var N = M;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (M) {
                  N = M;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                N = M;
              }
              (X = e()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (M) {
            if (M && N && typeof M.stack == "string")
              return [M.stack, N.stack];
          }
          return [null, null];
        }
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        r.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = r.DetermineComponentFrameRoot(), g = c[0], v = c[1];
      if (g && v) {
        var T = g.split(`
`), z = v.split(`
`);
        for (o = r = 0; r < T.length && !T[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; o < z.length && !z[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (r === T.length || o === z.length)
          for (r = T.length - 1, o = z.length - 1; 1 <= r && 0 <= o && T[r] !== z[o]; )
            o--;
        for (; 1 <= r && 0 <= o; r--, o--)
          if (T[r] !== z[o]) {
            if (r !== 1 || o !== 1)
              do
                if (r--, o--, 0 > o || T[r] !== z[o]) {
                  var q = `
` + T[r].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                }
              while (1 <= r && 0 <= o);
            break;
          }
      }
    } finally {
      Yu = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Yl(l) : "";
  }
  function Fy(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Yl(e.type);
      case 16:
        return Yl("Lazy");
      case 13:
        return Yl("Suspense");
      case 19:
        return Yl("SuspenseList");
      case 0:
      case 15:
        return Gu(e.type, !1);
      case 11:
        return Gu(e.type.render, !1);
      case 1:
        return Gu(e.type, !0);
      case 31:
        return Yl("Activity");
      default:
        return "";
    }
  }
  function yf(e) {
    try {
      var t = "";
      do
        t += Fy(e), e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  function Ft(e) {
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
  function Iy(e) {
    var t = bf(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var o = l.get, c = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(g) {
          r = "" + g, c.call(this, g);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(g) {
          r = "" + g;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function ei(e) {
    e._valueTracker || (e._valueTracker = Iy(e));
  }
  function vf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), r = "";
    return e && (r = bf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== l ? (t.setValue(e), !0) : !1;
  }
  function ti(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Jy = /[\n"\\]/g;
  function It(e) {
    return e.replace(
      Jy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Qu(e, t, l, r, o, c, g, v) {
    e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ft(t)) : e.value !== "" + Ft(t) && (e.value = "" + Ft(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? Xu(e, g, Ft(t)) : l != null ? Xu(e, g, Ft(l)) : r != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + Ft(v) : e.removeAttribute("name");
  }
  function xf(e, t, l, r, o, c, g, v) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || l != null) {
      if (!(c !== "submit" && c !== "reset" || t != null))
        return;
      l = l != null ? "" + Ft(l) : "", t = t != null ? "" + Ft(t) : l, v || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = r ?? o, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = v ? e.checked : !!r, e.defaultChecked = !!r, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g);
  }
  function Xu(e, t, l) {
    t === "number" && ti(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Gl(e, t, l, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < l.length; o++)
        t["$" + l[o]] = !0;
      for (l = 0; l < e.length; l++)
        o = t.hasOwnProperty("$" + e[l].value), e[l].selected !== o && (e[l].selected = o), o && r && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Ft(l), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === l) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Sf(e, t, l) {
    if (t != null && (t = "" + Ft(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Ft(l) : "";
  }
  function Ef(e, t, l, r) {
    if (t == null) {
      if (r != null) {
        if (l != null) throw Error(u(92));
        if (ee(r)) {
          if (1 < r.length) throw Error(u(93));
          r = r[0];
        }
        l = r;
      }
      l == null && (l = ""), t = l;
    }
    l = Ft(t), e.defaultValue = l, r = e.textContent, r === l && r !== "" && r !== null && (e.value = r);
  }
  function Ql(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Py = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wf(e, t, l) {
    var r = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Py.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Tf(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, l != null) {
      for (var r in l)
        !l.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
      for (var o in t)
        r = t[o], t.hasOwnProperty(o) && l[o] !== r && wf(e, o, r);
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
  var $y = /* @__PURE__ */ new Map([
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
  ]), Wy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ni(e) {
    return Wy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Zu = null;
  function Fu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xl = null, Kl = null;
  function kf(e) {
    var t = Hl(e);
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
              'input[name="' + It(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var r = l[t];
              if (r !== e && r.form === e.form) {
                var o = r[wt] || null;
                if (!o) throw Error(u(90));
                Qu(
                  r,
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
              r = l[t], r.form === e.form && vf(r);
          }
          break e;
        case "textarea":
          Sf(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Gl(e, !!l.multiple, t, !1);
      }
    }
  }
  var Iu = !1;
  function Af(e, t, l) {
    if (Iu) return e(t, l);
    Iu = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (Iu = !1, (Xl !== null || Kl !== null) && (Vi(), Xl && (t = Xl, e = Kl, Kl = Xl = null, kf(t), e)))
        for (t = 0; t < e.length; t++) kf(e[t]);
    }
  }
  function qa(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var r = l[wt] || null;
    if (r === null) return null;
    l = r[t];
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
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
  var Tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ju = !1;
  if (Tn)
    try {
      var Va = {};
      Object.defineProperty(Va, "passive", {
        get: function() {
          Ju = !0;
        }
      }), window.addEventListener("test", Va, Va), window.removeEventListener("test", Va, Va);
    } catch {
      Ju = !1;
    }
  var Yn = null, Pu = null, li = null;
  function Cf() {
    if (li) return li;
    var e, t = Pu, l = t.length, r, o = "value" in Yn ? Yn.value : Yn.textContent, c = o.length;
    for (e = 0; e < l && t[e] === o[e]; e++) ;
    var g = l - e;
    for (r = 1; r <= g && t[l - r] === o[c - r]; r++) ;
    return li = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ai(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ri() {
    return !0;
  }
  function _f() {
    return !1;
  }
  function Tt(e) {
    function t(l, r, o, c, g) {
      this._reactName = l, this._targetInst = o, this.type = r, this.nativeEvent = c, this.target = g, this.currentTarget = null;
      for (var v in e)
        e.hasOwnProperty(v) && (l = e[v], this[v] = l ? l(c) : c[v]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? ri : _f, this.isPropagationStopped = _f, this;
    }
    return m(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ri);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ri);
      },
      persist: function() {
      },
      isPersistent: ri
    }), t;
  }
  var pl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ii = Tt(pl), Ya = m({}, pl, { view: 0, detail: 0 }), e0 = Tt(Ya), $u, Wu, Ga, ui = m({}, Ya, {
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
    getModifierState: to,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ga && (Ga && e.type === "mousemove" ? ($u = e.screenX - Ga.screenX, Wu = e.screenY - Ga.screenY) : Wu = $u = 0, Ga = e), $u);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Wu;
    }
  }), Rf = Tt(ui), t0 = m({}, ui, { dataTransfer: 0 }), n0 = Tt(t0), l0 = m({}, Ya, { relatedTarget: 0 }), eo = Tt(l0), a0 = m({}, pl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), r0 = Tt(a0), i0 = m({}, pl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), u0 = Tt(i0), o0 = m({}, pl, { data: 0 }), Of = Tt(o0), s0 = {
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
  }, c0 = {
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
  }, f0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function d0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = f0[e]) ? !!t[e] : !1;
  }
  function to() {
    return d0;
  }
  var h0 = m({}, Ya, {
    key: function(e) {
      if (e.key) {
        var t = s0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ai(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? c0[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: to,
    charCode: function(e) {
      return e.type === "keypress" ? ai(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ai(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), p0 = Tt(h0), m0 = m({}, ui, {
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
  }), zf = Tt(m0), g0 = m({}, Ya, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: to
  }), y0 = Tt(g0), b0 = m({}, pl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), v0 = Tt(b0), x0 = m({}, ui, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), S0 = Tt(x0), E0 = m({}, pl, {
    newState: 0,
    oldState: 0
  }), w0 = Tt(E0), T0 = [9, 13, 27, 32], no = Tn && "CompositionEvent" in window, Qa = null;
  Tn && "documentMode" in document && (Qa = document.documentMode);
  var k0 = Tn && "TextEvent" in window && !Qa, Nf = Tn && (!no || Qa && 8 < Qa && 11 >= Qa), Mf = " ", Df = !1;
  function Uf(e, t) {
    switch (e) {
      case "keyup":
        return T0.indexOf(t.keyCode) !== -1;
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
  function A0(e, t) {
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
  function C0(e, t) {
    if (Zl)
      return e === "compositionend" || !no && Uf(e, t) ? (e = Cf(), li = Pu = Yn = null, Zl = !1, e) : null;
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
  var _0 = {
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
  function jf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_0[e.type] : t === "textarea";
  }
  function Lf(e, t, l, r) {
    Xl ? Kl ? Kl.push(r) : Kl = [r] : Xl = r, t = Zi(t, "onChange"), 0 < t.length && (l = new ii(
      "onChange",
      "change",
      null,
      l,
      r
    ), e.push({ event: l, listeners: t }));
  }
  var Xa = null, Ka = null;
  function R0(e) {
    bp(e, 0);
  }
  function oi(e) {
    var t = Ha(e);
    if (vf(t)) return e;
  }
  function Hf(e, t) {
    if (e === "change") return t;
  }
  var qf = !1;
  if (Tn) {
    var lo;
    if (Tn) {
      var ao = "oninput" in document;
      if (!ao) {
        var Vf = document.createElement("div");
        Vf.setAttribute("oninput", "return;"), ao = typeof Vf.oninput == "function";
      }
      lo = ao;
    } else lo = !1;
    qf = lo && (!document.documentMode || 9 < document.documentMode);
  }
  function Yf() {
    Xa && (Xa.detachEvent("onpropertychange", Gf), Ka = Xa = null);
  }
  function Gf(e) {
    if (e.propertyName === "value" && oi(Ka)) {
      var t = [];
      Lf(
        t,
        Ka,
        e,
        Fu(e)
      ), Af(R0, t);
    }
  }
  function O0(e, t, l) {
    e === "focusin" ? (Yf(), Xa = t, Ka = l, Xa.attachEvent("onpropertychange", Gf)) : e === "focusout" && Yf();
  }
  function z0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return oi(Ka);
  }
  function N0(e, t) {
    if (e === "click") return oi(t);
  }
  function M0(e, t) {
    if (e === "input" || e === "change")
      return oi(t);
  }
  function D0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Lt = typeof Object.is == "function" ? Object.is : D0;
  function Za(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), r = Object.keys(t);
    if (l.length !== r.length) return !1;
    for (r = 0; r < l.length; r++) {
      var o = l[r];
      if (!fn.call(t, o) || !Lt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function Qf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xf(e, t) {
    var l = Qf(e);
    e = 0;
    for (var r; l; ) {
      if (l.nodeType === 3) {
        if (r = e + l.textContent.length, e <= t && r >= t)
          return { node: l, offset: t - e };
        e = r;
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
      l = Qf(l);
    }
  }
  function Kf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ti(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = ti(e.document);
    }
    return t;
  }
  function ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var U0 = Tn && "documentMode" in document && 11 >= document.documentMode, Fl = null, io = null, Fa = null, uo = !1;
  function Ff(e, t, l) {
    var r = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    uo || Fl == null || Fl !== ti(r) || (r = Fl, "selectionStart" in r && ro(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Fa && Za(Fa, r) || (Fa = r, r = Zi(io, "onSelect"), 0 < r.length && (t = new ii(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: r }), t.target = Fl)));
  }
  function ml(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Il = {
    animationend: ml("Animation", "AnimationEnd"),
    animationiteration: ml("Animation", "AnimationIteration"),
    animationstart: ml("Animation", "AnimationStart"),
    transitionrun: ml("Transition", "TransitionRun"),
    transitionstart: ml("Transition", "TransitionStart"),
    transitioncancel: ml("Transition", "TransitionCancel"),
    transitionend: ml("Transition", "TransitionEnd")
  }, oo = {}, If = {};
  Tn && (If = document.createElement("div").style, "AnimationEvent" in window || (delete Il.animationend.animation, delete Il.animationiteration.animation, delete Il.animationstart.animation), "TransitionEvent" in window || delete Il.transitionend.transition);
  function gl(e) {
    if (oo[e]) return oo[e];
    if (!Il[e]) return e;
    var t = Il[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in If)
        return oo[e] = t[l];
    return e;
  }
  var Jf = gl("animationend"), Pf = gl("animationiteration"), $f = gl("animationstart"), B0 = gl("transitionrun"), j0 = gl("transitionstart"), L0 = gl("transitioncancel"), Wf = gl("transitionend"), ed = /* @__PURE__ */ new Map(), so = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  so.push("scrollEnd");
  function un(e, t) {
    ed.set(e, t), hl(t, [e]);
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
  var Pt = [], Jl = 0, co = 0;
  function si() {
    for (var e = Jl, t = co = Jl = 0; t < e; ) {
      var l = Pt[t];
      Pt[t++] = null;
      var r = Pt[t];
      Pt[t++] = null;
      var o = Pt[t];
      Pt[t++] = null;
      var c = Pt[t];
      if (Pt[t++] = null, r !== null && o !== null) {
        var g = r.pending;
        g === null ? o.next = o : (o.next = g.next, g.next = o), r.pending = o;
      }
      c !== 0 && nd(l, o, c);
    }
  }
  function ci(e, t, l, r) {
    Pt[Jl++] = e, Pt[Jl++] = t, Pt[Jl++] = l, Pt[Jl++] = r, co |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function fo(e, t, l, r) {
    return ci(e, t, l, r), fi(e);
  }
  function Pl(e, t) {
    return ci(e, null, null, t), fi(e);
  }
  function nd(e, t, l) {
    e.lanes |= l;
    var r = e.alternate;
    r !== null && (r.lanes |= l);
    for (var o = !1, c = e.return; c !== null; )
      c.childLanes |= l, r = c.alternate, r !== null && (r.childLanes |= l), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - be(l), e = c.hiddenUpdates, r = e[o], r === null ? e[o] = [t] : r.push(t), t.lane = l | 536870912), c) : null;
  }
  function fi(e) {
    if (50 < vr)
      throw vr = 0, bs = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var $l = {};
  function H0(e, t, l, r) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, l, r) {
    return new H0(e, t, l, r);
  }
  function ho(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function kn(e, t) {
    var l = e.alternate;
    return l === null ? (l = Ht(
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
  function di(e, t, l, r, o, c) {
    var g = 0;
    if (r = e, typeof e == "function") ho(e) && (g = 1);
    else if (typeof e == "string")
      g = Vb(
        e,
        l,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case fe:
          return e = Ht(31, l, t, o), e.elementType = fe, e.lanes = c, e;
        case _:
          return yl(l.children, o, c, t);
        case O:
          g = 8, o |= 24;
          break;
        case j:
          return e = Ht(12, l, t, o | 2), e.elementType = j, e.lanes = c, e;
        case P:
          return e = Ht(13, l, t, o), e.elementType = P, e.lanes = c, e;
        case U:
          return e = Ht(19, l, t, o), e.elementType = U, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case B:
              case K:
                g = 10;
                break e;
              case F:
                g = 9;
                break e;
              case ue:
                g = 11;
                break e;
              case re:
                g = 14;
                break e;
              case J:
                g = 16, r = null;
                break e;
            }
          g = 29, l = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), r = null;
      }
    return t = Ht(g, l, t, o), t.elementType = e, t.type = r, t.lanes = c, t;
  }
  function yl(e, t, l, r) {
    return e = Ht(7, e, r, t), e.lanes = l, e;
  }
  function po(e, t, l) {
    return e = Ht(6, e, null, t), e.lanes = l, e;
  }
  function mo(e, t, l) {
    return t = Ht(
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
  var Wl = [], ea = 0, hi = null, pi = 0, $t = [], Wt = 0, bl = null, An = 1, Cn = "";
  function vl(e, t) {
    Wl[ea++] = pi, Wl[ea++] = hi, hi = e, pi = t;
  }
  function ad(e, t, l) {
    $t[Wt++] = An, $t[Wt++] = Cn, $t[Wt++] = bl, bl = e;
    var r = An;
    e = Cn;
    var o = 32 - be(r) - 1;
    r &= ~(1 << o), l += 1;
    var c = 32 - be(t) + o;
    if (30 < c) {
      var g = o - o % 5;
      c = (r & (1 << g) - 1).toString(32), r >>= g, o -= g, An = 1 << 32 - be(t) + o | l << o | r, Cn = c + e;
    } else
      An = 1 << c | l << o | r, Cn = e;
  }
  function go(e) {
    e.return !== null && (vl(e, 1), ad(e, 1, 0));
  }
  function yo(e) {
    for (; e === hi; )
      hi = Wl[--ea], Wl[ea] = null, pi = Wl[--ea], Wl[ea] = null;
    for (; e === bl; )
      bl = $t[--Wt], $t[Wt] = null, Cn = $t[--Wt], $t[Wt] = null, An = $t[--Wt], $t[Wt] = null;
  }
  var St = null, Je = null, Be = !1, xl = null, hn = !1, bo = Error(u(519));
  function Sl(e) {
    var t = Error(u(418, ""));
    throw Pa(Jt(t, e)), bo;
  }
  function rd(e) {
    var t = e.stateNode, l = e.type, r = e.memoizedProps;
    switch (t[mt] = e, t[wt] = r, l) {
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
        for (l = 0; l < Sr.length; l++)
          ze(Sr[l], t);
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
          r.value,
          r.defaultValue,
          r.checked,
          r.defaultChecked,
          r.type,
          r.name,
          !0
        ), ei(t);
        break;
      case "select":
        ze("invalid", t);
        break;
      case "textarea":
        ze("invalid", t), Ef(t, r.value, r.defaultValue, r.children), ei(t);
    }
    l = r.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || r.suppressHydrationWarning === !0 || Ep(t.textContent, l) ? (r.popover != null && (ze("beforetoggle", t), ze("toggle", t)), r.onScroll != null && ze("scroll", t), r.onScrollEnd != null && ze("scrollend", t), r.onClick != null && (t.onclick = Fi), t = !0) : t = !1, t || Sl(e);
  }
  function id(e) {
    for (St = e.return; St; )
      switch (St.tag) {
        case 5:
        case 13:
          hn = !1;
          return;
        case 27:
        case 3:
          hn = !0;
          return;
        default:
          St = St.return;
      }
  }
  function Ia(e) {
    if (e !== St) return !1;
    if (!Be) return id(e), Be = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Ds(e.type, e.memoizedProps)), l = !l), l && Je && Sl(e), id(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (l = e.data, l === "/$") {
              if (t === 0) {
                Je = sn(e.nextSibling);
                break e;
              }
              t--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || t++;
          e = e.nextSibling;
        }
        Je = null;
      }
    } else
      t === 27 ? (t = Je, al(e.type) ? (e = Ls, Ls = null, Je = e) : Je = t) : Je = St ? sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ja() {
    Je = St = null, Be = !1;
  }
  function ud() {
    var e = xl;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), xl = null), e;
  }
  function Pa(e) {
    xl === null ? xl = [e] : xl.push(e);
  }
  var vo = Y(null), El = null, _n = null;
  function Gn(e, t, l) {
    E(vo, t._currentValue), t._currentValue = l;
  }
  function Rn(e) {
    e._currentValue = vo.current, W(vo);
  }
  function xo(e, t, l) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function So(e, t, l, r) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var g = o.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var v = c;
          c = o;
          for (var T = 0; T < t.length; T++)
            if (v.context === t[T]) {
              c.lanes |= l, v = c.alternate, v !== null && (v.lanes |= l), xo(
                c.return,
                l,
                e
              ), r || (g = null);
              break e;
            }
          c = v.next;
        }
      } else if (o.tag === 18) {
        if (g = o.return, g === null) throw Error(u(341));
        g.lanes |= l, c = g.alternate, c !== null && (c.lanes |= l), xo(g, l, e), g = null;
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
  function $a(e, t, l, r) {
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
          var v = o.type;
          Lt(o.pendingProps.value, g.value) || (e !== null ? e.push(v) : e = [v]);
        }
      } else if (o === _e.current) {
        if (g = o.alternate, g === null) throw Error(u(387));
        g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Cr) : e = [Cr]);
      }
      o = o.return;
    }
    e !== null && So(
      t,
      e,
      l,
      r
    ), t.flags |= 262144;
  }
  function mi(e) {
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
  function wl(e) {
    El = e, _n = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function gt(e) {
    return od(El, e);
  }
  function gi(e, t) {
    return El === null && wl(e), od(e, t);
  }
  function od(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, _n === null) {
      if (e === null) throw Error(u(308));
      _n = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else _n = _n.next = t;
    return l;
  }
  var q0 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, r) {
        e.push(r);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, V0 = n.unstable_scheduleCallback, Y0 = n.unstable_NormalPriority, at = {
    $$typeof: K,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Eo() {
    return {
      controller: new q0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Wa(e) {
    e.refCount--, e.refCount === 0 && V0(Y0, function() {
      e.controller.abort();
    });
  }
  var er = null, wo = 0, ta = 0, na = null;
  function G0(e, t) {
    if (er === null) {
      var l = er = [];
      wo = 0, ta = ks(), na = {
        status: "pending",
        value: void 0,
        then: function(r) {
          l.push(r);
        }
      };
    }
    return wo++, t.then(sd, sd), t;
  }
  function sd() {
    if (--wo === 0 && er !== null) {
      na !== null && (na.status = "fulfilled");
      var e = er;
      er = null, ta = 0, na = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Q0(e, t) {
    var l = [], r = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        l.push(o);
      }
    };
    return e.then(
      function() {
        r.status = "fulfilled", r.value = t;
        for (var o = 0; o < l.length; o++) (0, l[o])(t);
      },
      function(o) {
        for (r.status = "rejected", r.reason = o, o = 0; o < l.length; o++)
          (0, l[o])(void 0);
      }
    ), r;
  }
  var cd = A.S;
  A.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && G0(e, t), cd !== null && cd(e, t);
  };
  var Tl = Y(null);
  function To() {
    var e = Tl.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function yi(e, t) {
    t === null ? E(Tl, Tl.current) : E(Tl, t.pool);
  }
  function fd() {
    var e = To();
    return e === null ? null : { parent: at._currentValue, pool: e };
  }
  var tr = Error(u(460)), dd = Error(u(474)), bi = Error(u(542)), ko = { then: function() {
  } };
  function hd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function vi() {
  }
  function pd(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(vi, vi), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, gd(e), e;
      default:
        if (typeof t.status == "string") t.then(vi, vi);
        else {
          if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(u(482));
          e = t, e.status = "pending", e.then(
            function(r) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = r;
              }
            },
            function(r) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = r;
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
        throw nr = t, tr;
    }
  }
  var nr = null;
  function md() {
    if (nr === null) throw Error(u(459));
    var e = nr;
    return nr = null, e;
  }
  function gd(e) {
    if (e === tr || e === bi)
      throw Error(u(483));
  }
  var Qn = !1;
  function Ao(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Co(e, t) {
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
  function Kn(e, t, l) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (He & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, t = fi(e), nd(e, null, l), t;
    }
    return ci(e, r, t, l), fi(e);
  }
  function lr(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, l |= r, t.lanes = l, sf(e, l);
    }
  }
  function _o(e, t) {
    var l = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, l === r)) {
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
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: c,
        shared: r.shared,
        callbacks: r.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Ro = !1;
  function ar() {
    if (Ro) {
      var e = na;
      if (e !== null) throw e;
    }
  }
  function rr(e, t, l, r) {
    Ro = !1;
    var o = e.updateQueue;
    Qn = !1;
    var c = o.firstBaseUpdate, g = o.lastBaseUpdate, v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var T = v, z = T.next;
      T.next = null, g === null ? c = z : g.next = z, g = T;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, v = q.lastBaseUpdate, v !== g && (v === null ? q.firstBaseUpdate = z : v.next = z, q.lastBaseUpdate = T));
    }
    if (c !== null) {
      var X = o.baseState;
      g = 0, q = z = T = null, v = c;
      do {
        var N = v.lane & -536870913, M = N !== v.lane;
        if (M ? (Me & N) === N : (r & N) === N) {
          N !== 0 && N === ta && (Ro = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var ve = e, ge = v;
            N = t;
            var Ge = l;
            switch (ge.tag) {
              case 1:
                if (ve = ge.payload, typeof ve == "function") {
                  X = ve.call(Ge, X, N);
                  break e;
                }
                X = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ge.payload, N = typeof ve == "function" ? ve.call(Ge, X, N) : ve, N == null) break e;
                X = m({}, X, N);
                break e;
              case 2:
                Qn = !0;
            }
          }
          N = v.callback, N !== null && (e.flags |= 64, M && (e.flags |= 8192), M = o.callbacks, M === null ? o.callbacks = [N] : M.push(N));
        } else
          M = {
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, q === null ? (z = q = M, T = X) : q = q.next = M, g |= N;
        if (v = v.next, v === null) {
          if (v = o.shared.pending, v === null)
            break;
          M = v, v = M.next, M.next = null, o.lastBaseUpdate = M, o.shared.pending = null;
        }
      } while (!0);
      q === null && (T = X), o.baseState = T, o.firstBaseUpdate = z, o.lastBaseUpdate = q, c === null && (o.shared.lanes = 0), el |= g, e.lanes = g, e.memoizedState = X;
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
  var la = Y(null), xi = Y(0);
  function vd(e, t) {
    e = Bn, E(xi, e), E(la, t), Bn = e | t.baseLanes;
  }
  function Oo() {
    E(xi, Bn), E(la, la.current);
  }
  function zo() {
    Bn = xi.current, W(la), W(xi);
  }
  var Zn = 0, Ae = null, Ve = null, tt = null, Si = !1, aa = !1, kl = !1, Ei = 0, ir = 0, ra = null, X0 = 0;
  function $e() {
    throw Error(u(321));
  }
  function No(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Lt(e[l], t[l])) return !1;
    return !0;
  }
  function Mo(e, t, l, r, o, c) {
    return Zn = c, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, A.H = e === null || e.memoizedState === null ? nh : lh, kl = !1, c = l(r, o), kl = !1, aa && (c = Sd(
      t,
      l,
      r,
      o
    )), xd(e), c;
  }
  function xd(e) {
    A.H = _i;
    var t = Ve !== null && Ve.next !== null;
    if (Zn = 0, tt = Ve = Ae = null, Si = !1, ir = 0, ra = null, t) throw Error(u(300));
    e === null || st || (e = e.dependencies, e !== null && mi(e) && (st = !0));
  }
  function Sd(e, t, l, r) {
    Ae = e;
    var o = 0;
    do {
      if (aa && (ra = null), ir = 0, aa = !1, 25 <= o) throw Error(u(301));
      if (o += 1, tt = Ve = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      A.H = $0, c = t(l, r);
    } while (aa);
    return c;
  }
  function K0() {
    var e = A.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ur(t) : t, e = e.useState()[0], (Ve !== null ? Ve.memoizedState : null) !== e && (Ae.flags |= 1024), t;
  }
  function Do() {
    var e = Ei !== 0;
    return Ei = 0, e;
  }
  function Uo(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Bo(e) {
    if (Si) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Si = !1;
    }
    Zn = 0, tt = Ve = Ae = null, aa = !1, ir = Ei = 0, ra = null;
  }
  function kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return tt === null ? Ae.memoizedState = tt = e : tt = tt.next = e, tt;
  }
  function nt() {
    if (Ve === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = tt === null ? Ae.memoizedState : tt.next;
    if (t !== null)
      tt = t, Ve = e;
    else {
      if (e === null)
        throw Ae.alternate === null ? Error(u(467)) : Error(u(310));
      Ve = e, e = {
        memoizedState: Ve.memoizedState,
        baseState: Ve.baseState,
        baseQueue: Ve.baseQueue,
        queue: Ve.queue,
        next: null
      }, tt === null ? Ae.memoizedState = tt = e : tt = tt.next = e;
    }
    return tt;
  }
  function jo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ur(e) {
    var t = ir;
    return ir += 1, ra === null && (ra = []), e = pd(ra, e, t), t = Ae, (tt === null ? t.memoizedState : tt.next) === null && (t = t.alternate, A.H = t === null || t.memoizedState === null ? nh : lh), e;
  }
  function wi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ur(e);
      if (e.$$typeof === K) return gt(e);
    }
    throw Error(u(438, String(e)));
  }
  function Lo(e) {
    var t = null, l = Ae.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var r = Ae.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
        data: r.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = jo(), Ae.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), r = 0; r < e; r++)
        l[r] = Se;
    return t.index++, l;
  }
  function On(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ti(e) {
    var t = nt();
    return Ho(t, Ve, e);
  }
  function Ho(e, t, l) {
    var r = e.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = l;
    var o = e.baseQueue, c = r.pending;
    if (c !== null) {
      if (o !== null) {
        var g = o.next;
        o.next = c.next, c.next = g;
      }
      t.baseQueue = o = c, r.pending = null;
    }
    if (c = e.baseState, o === null) e.memoizedState = c;
    else {
      t = o.next;
      var v = g = null, T = null, z = t, q = !1;
      do {
        var X = z.lane & -536870913;
        if (X !== z.lane ? (Me & X) === X : (Zn & X) === X) {
          var N = z.revertLane;
          if (N === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }), X === ta && (q = !0);
          else if ((Zn & N) === N) {
            z = z.next, N === ta && (q = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }, T === null ? (v = T = X, g = c) : T = T.next = X, Ae.lanes |= N, el |= N;
          X = z.action, kl && l(c, X), c = z.hasEagerState ? z.eagerState : l(c, X);
        } else
          N = {
            lane: X,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }, T === null ? (v = T = N, g = c) : T = T.next = N, Ae.lanes |= X, el |= X;
        z = z.next;
      } while (z !== null && z !== t);
      if (T === null ? g = c : T.next = v, !Lt(c, e.memoizedState) && (st = !0, q && (l = na, l !== null)))
        throw l;
      e.memoizedState = c, e.baseState = g, e.baseQueue = T, r.lastRenderedState = c;
    }
    return o === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function qo(e) {
    var t = nt(), l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = e;
    var r = l.dispatch, o = l.pending, c = t.memoizedState;
    if (o !== null) {
      l.pending = null;
      var g = o = o.next;
      do
        c = e(c, g.action), g = g.next;
      while (g !== o);
      Lt(c, t.memoizedState) || (st = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), l.lastRenderedState = c;
    }
    return [c, r];
  }
  function Ed(e, t, l) {
    var r = Ae, o = nt(), c = Be;
    if (c) {
      if (l === void 0) throw Error(u(407));
      l = l();
    } else l = t();
    var g = !Lt(
      (Ve || o).memoizedState,
      l
    );
    g && (o.memoizedState = l, st = !0), o = o.queue;
    var v = kd.bind(null, r, o, e);
    if (or(2048, 8, v, [e]), o.getSnapshot !== t || g || tt !== null && tt.memoizedState.tag & 1) {
      if (r.flags |= 2048, ia(
        9,
        ki(),
        Td.bind(
          null,
          r,
          o,
          l,
          t
        ),
        null
      ), Xe === null) throw Error(u(349));
      c || (Zn & 124) !== 0 || wd(r, t, l);
    }
    return l;
  }
  function wd(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = Ae.updateQueue, t === null ? (t = jo(), Ae.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Td(e, t, l, r) {
    t.value = l, t.getSnapshot = r, Ad(t) && Cd(e);
  }
  function kd(e, t, l) {
    return l(function() {
      Ad(t) && Cd(e);
    });
  }
  function Ad(e) {
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
    var t = Pl(e, 2);
    t !== null && Qt(t, e, 2);
  }
  function Vo(e) {
    var t = kt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), kl) {
        me(!0);
        try {
          l();
        } finally {
          me(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: On,
      lastRenderedState: e
    }, t;
  }
  function _d(e, t, l, r) {
    return e.baseState = l, Ho(
      e,
      Ve,
      typeof r == "function" ? r : On
    );
  }
  function Z0(e, t, l, r, o) {
    if (Ci(e)) throw Error(u(485));
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
      A.T !== null ? l(!0) : c.isTransition = !1, r(c), l = t.pending, l === null ? (c.next = t.pending = c, Rd(t, c)) : (c.next = l.next, t.pending = l.next = c);
    }
  }
  function Rd(e, t) {
    var l = t.action, r = t.payload, o = e.state;
    if (t.isTransition) {
      var c = A.T, g = {};
      A.T = g;
      try {
        var v = l(o, r), T = A.S;
        T !== null && T(g, v), Od(e, t, v);
      } catch (z) {
        Yo(e, t, z);
      } finally {
        A.T = c;
      }
    } else
      try {
        c = l(o, r), Od(e, t, c);
      } catch (z) {
        Yo(e, t, z);
      }
  }
  function Od(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(r) {
        zd(e, t, r);
      },
      function(r) {
        return Yo(e, t, r);
      }
    ) : zd(e, t, l);
  }
  function zd(e, t, l) {
    t.status = "fulfilled", t.value = l, Nd(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Rd(e, l)));
  }
  function Yo(e, t, l) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        t.status = "rejected", t.reason = l, Nd(t), t = t.next;
      while (t !== r);
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
    if (Be) {
      var l = Xe.formState;
      if (l !== null) {
        e: {
          var r = Ae;
          if (Be) {
            if (Je) {
              t: {
                for (var o = Je, c = hn; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break t;
                  }
                  if (o = sn(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                c = o.data, o = c === "F!" || c === "F" ? o : null;
              }
              if (o) {
                Je = sn(
                  o.nextSibling
                ), r = o.data === "F!";
                break e;
              }
            }
            Sl(r);
          }
          r = !1;
        }
        r && (t = l[0]);
      }
    }
    return l = kt(), l.memoizedState = l.baseState = t, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Md,
      lastRenderedState: t
    }, l.queue = r, l = Wd.bind(
      null,
      Ae,
      r
    ), r.dispatch = l, r = Vo(!1), c = Zo.bind(
      null,
      Ae,
      !1,
      r.queue
    ), r = kt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, r.queue = o, l = Z0.bind(
      null,
      Ae,
      o,
      c,
      l
    ), o.dispatch = l, r.memoizedState = e, [t, l, !1];
  }
  function Ud(e) {
    var t = nt();
    return Bd(t, Ve, e);
  }
  function Bd(e, t, l) {
    if (t = Ho(
      e,
      t,
      Md
    )[0], e = Ti(On)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var r = ur(t);
      } catch (g) {
        throw g === tr ? bi : g;
      }
    else r = t;
    t = nt();
    var o = t.queue, c = o.dispatch;
    return l !== t.memoizedState && (Ae.flags |= 2048, ia(
      9,
      ki(),
      F0.bind(null, o, l),
      null
    )), [r, c, e];
  }
  function F0(e, t) {
    e.action = t;
  }
  function jd(e) {
    var t = nt(), l = Ve;
    if (l !== null)
      return Bd(t, l, e);
    nt(), t = t.memoizedState, l = nt();
    var r = l.queue.dispatch;
    return l.memoizedState = e, [t, r, !1];
  }
  function ia(e, t, l, r) {
    return e = { tag: e, create: l, deps: r, inst: t, next: null }, t = Ae.updateQueue, t === null && (t = jo(), Ae.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (r = l.next, l.next = e, e.next = r, t.lastEffect = e), e;
  }
  function ki() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ld() {
    return nt().memoizedState;
  }
  function Ai(e, t, l, r) {
    var o = kt();
    r = r === void 0 ? null : r, Ae.flags |= e, o.memoizedState = ia(
      1 | t,
      ki(),
      l,
      r
    );
  }
  function or(e, t, l, r) {
    var o = nt();
    r = r === void 0 ? null : r;
    var c = o.memoizedState.inst;
    Ve !== null && r !== null && No(r, Ve.memoizedState.deps) ? o.memoizedState = ia(t, c, l, r) : (Ae.flags |= e, o.memoizedState = ia(
      1 | t,
      c,
      l,
      r
    ));
  }
  function Hd(e, t) {
    Ai(8390656, 8, e, t);
  }
  function qd(e, t) {
    or(2048, 8, e, t);
  }
  function Vd(e, t) {
    return or(4, 2, e, t);
  }
  function Yd(e, t) {
    return or(4, 4, e, t);
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
  function Qd(e, t, l) {
    l = l != null ? l.concat([e]) : null, or(4, 4, Gd.bind(null, t, e), l);
  }
  function Go() {
  }
  function Xd(e, t) {
    var l = nt();
    t = t === void 0 ? null : t;
    var r = l.memoizedState;
    return t !== null && No(t, r[1]) ? r[0] : (l.memoizedState = [e, t], e);
  }
  function Kd(e, t) {
    var l = nt();
    t = t === void 0 ? null : t;
    var r = l.memoizedState;
    if (t !== null && No(t, r[1]))
      return r[0];
    if (r = e(), kl) {
      me(!0);
      try {
        e();
      } finally {
        me(!1);
      }
    }
    return l.memoizedState = [r, t], r;
  }
  function Qo(e, t, l) {
    return l === void 0 || (Zn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Ih(), Ae.lanes |= e, el |= e, l);
  }
  function Zd(e, t, l, r) {
    return Lt(l, t) ? l : la.current !== null ? (e = Qo(e, l, r), Lt(e, t) || (st = !0), e) : (Zn & 42) === 0 ? (st = !0, e.memoizedState = l) : (e = Ih(), Ae.lanes |= e, el |= e, t);
  }
  function Fd(e, t, l, r, o) {
    var c = Q.p;
    Q.p = c !== 0 && 8 > c ? c : 8;
    var g = A.T, v = {};
    A.T = v, Zo(e, !1, t, l);
    try {
      var T = o(), z = A.S;
      if (z !== null && z(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var q = Q0(
          T,
          r
        );
        sr(
          e,
          t,
          q,
          Gt(e)
        );
      } else
        sr(
          e,
          t,
          r,
          Gt(e)
        );
    } catch (X) {
      sr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: X },
        Gt()
      );
    } finally {
      Q.p = c, A.T = g;
    }
  }
  function I0() {
  }
  function Xo(e, t, l, r) {
    if (e.tag !== 5) throw Error(u(476));
    var o = Id(e).queue;
    Fd(
      e,
      o,
      t,
      L,
      l === null ? I0 : function() {
        return Jd(e), l(r);
      }
    );
  }
  function Id(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: L,
      baseState: L,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: On,
        lastRenderedState: L
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
        lastRenderedReducer: On,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Jd(e) {
    var t = Id(e).next.queue;
    sr(e, t, {}, Gt());
  }
  function Ko() {
    return gt(Cr);
  }
  function Pd() {
    return nt().memoizedState;
  }
  function $d() {
    return nt().memoizedState;
  }
  function J0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Gt();
          e = Xn(l);
          var r = Kn(t, e, l);
          r !== null && (Qt(r, t, l), lr(r, t, l)), t = { cache: Eo() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function P0(e, t, l) {
    var r = Gt();
    l = {
      lane: r,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ci(e) ? eh(t, l) : (l = fo(e, t, l, r), l !== null && (Qt(l, e, r), th(l, t, r)));
  }
  function Wd(e, t, l) {
    var r = Gt();
    sr(e, t, l, r);
  }
  function sr(e, t, l, r) {
    var o = {
      lane: r,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ci(e)) eh(t, o);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var g = t.lastRenderedState, v = c(g, l);
          if (o.hasEagerState = !0, o.eagerState = v, Lt(v, g))
            return ci(e, t, o, 0), Xe === null && si(), !1;
        } catch {
        } finally {
        }
      if (l = fo(e, t, o, r), l !== null)
        return Qt(l, e, r), th(l, t, r), !0;
    }
    return !1;
  }
  function Zo(e, t, l, r) {
    if (r = {
      lane: 2,
      revertLane: ks(),
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ci(e)) {
      if (t) throw Error(u(479));
    } else
      t = fo(
        e,
        l,
        r,
        2
      ), t !== null && Qt(t, e, 2);
  }
  function Ci(e) {
    var t = e.alternate;
    return e === Ae || t !== null && t === Ae;
  }
  function eh(e, t) {
    aa = Si = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function th(e, t, l) {
    if ((l & 4194048) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, l |= r, t.lanes = l, sf(e, l);
    }
  }
  var _i = {
    readContext: gt,
    use: wi,
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
    use: wi,
    useCallback: function(e, t) {
      return kt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: gt,
    useEffect: Hd,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Ai(
        4194308,
        4,
        Gd.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Ai(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ai(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = kt();
      t = t === void 0 ? null : t;
      var r = e();
      if (kl) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return l.memoizedState = [r, t], r;
    },
    useReducer: function(e, t, l) {
      var r = kt();
      if (l !== void 0) {
        var o = l(t);
        if (kl) {
          me(!0);
          try {
            l(t);
          } finally {
            me(!1);
          }
        }
      } else o = t;
      return r.memoizedState = r.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, r.queue = e, e = e.dispatch = P0.bind(
        null,
        Ae,
        e
      ), [r.memoizedState, e];
    },
    useRef: function(e) {
      var t = kt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Vo(e);
      var t = e.queue, l = Wd.bind(null, Ae, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Go,
    useDeferredValue: function(e, t) {
      var l = kt();
      return Qo(l, e, t);
    },
    useTransition: function() {
      var e = Vo(!1);
      return e = Fd.bind(
        null,
        Ae,
        e.queue,
        !0,
        !1
      ), kt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var r = Ae, o = kt();
      if (Be) {
        if (l === void 0)
          throw Error(u(407));
        l = l();
      } else {
        if (l = t(), Xe === null)
          throw Error(u(349));
        (Me & 124) !== 0 || wd(r, t, l);
      }
      o.memoizedState = l;
      var c = { value: l, getSnapshot: t };
      return o.queue = c, Hd(kd.bind(null, r, c, e), [
        e
      ]), r.flags |= 2048, ia(
        9,
        ki(),
        Td.bind(
          null,
          r,
          c,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = kt(), t = Xe.identifierPrefix;
      if (Be) {
        var l = Cn, r = An;
        l = (r & ~(1 << 32 - be(r) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Ei++, 0 < l && (t += "H" + l.toString(32)), t += "»";
      } else
        l = X0++, t = "«" + t + "r" + l.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ko,
    useFormState: Dd,
    useActionState: Dd,
    useOptimistic: function(e) {
      var t = kt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Zo.bind(
        null,
        Ae,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Lo,
    useCacheRefresh: function() {
      return kt().memoizedState = J0.bind(
        null,
        Ae
      );
    }
  }, lh = {
    readContext: gt,
    use: wi,
    useCallback: Xd,
    useContext: gt,
    useEffect: qd,
    useImperativeHandle: Qd,
    useInsertionEffect: Vd,
    useLayoutEffect: Yd,
    useMemo: Kd,
    useReducer: Ti,
    useRef: Ld,
    useState: function() {
      return Ti(On);
    },
    useDebugValue: Go,
    useDeferredValue: function(e, t) {
      var l = nt();
      return Zd(
        l,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ti(On)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : ur(e),
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
    useMemoCache: Lo,
    useCacheRefresh: $d
  }, $0 = {
    readContext: gt,
    use: wi,
    useCallback: Xd,
    useContext: gt,
    useEffect: qd,
    useImperativeHandle: Qd,
    useInsertionEffect: Vd,
    useLayoutEffect: Yd,
    useMemo: Kd,
    useReducer: qo,
    useRef: Ld,
    useState: function() {
      return qo(On);
    },
    useDebugValue: Go,
    useDeferredValue: function(e, t) {
      var l = nt();
      return Ve === null ? Qo(l, e, t) : Zd(
        l,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qo(On)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : ur(e),
        t
      ];
    },
    useSyncExternalStore: Ed,
    useId: Pd,
    useHostTransitionStatus: Ko,
    useFormState: jd,
    useActionState: jd,
    useOptimistic: function(e, t) {
      var l = nt();
      return Ve !== null ? _d(l, Ve, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Lo,
    useCacheRefresh: $d
  }, ua = null, cr = 0;
  function Ri(e) {
    var t = cr;
    return cr += 1, ua === null && (ua = []), pd(ua, e, t);
  }
  function fr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Oi(e, t) {
    throw t.$$typeof === x ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ah(e) {
    var t = e._init;
    return t(e._payload);
  }
  function rh(e) {
    function t(C, k) {
      if (e) {
        var R = C.deletions;
        R === null ? (C.deletions = [k], C.flags |= 16) : R.push(k);
      }
    }
    function l(C, k) {
      if (!e) return null;
      for (; k !== null; )
        t(C, k), k = k.sibling;
      return null;
    }
    function r(C) {
      for (var k = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? k.set(C.key, C) : k.set(C.index, C), C = C.sibling;
      return k;
    }
    function o(C, k) {
      return C = kn(C, k), C.index = 0, C.sibling = null, C;
    }
    function c(C, k, R) {
      return C.index = R, e ? (R = C.alternate, R !== null ? (R = R.index, R < k ? (C.flags |= 67108866, k) : R) : (C.flags |= 67108866, k)) : (C.flags |= 1048576, k);
    }
    function g(C) {
      return e && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, k, R, G) {
      return k === null || k.tag !== 6 ? (k = po(R, C.mode, G), k.return = C, k) : (k = o(k, R), k.return = C, k);
    }
    function T(C, k, R, G) {
      var oe = R.type;
      return oe === _ ? q(
        C,
        k,
        R.props.children,
        G,
        R.key
      ) : k !== null && (k.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === J && ah(oe) === k.type) ? (k = o(k, R.props), fr(k, R), k.return = C, k) : (k = di(
        R.type,
        R.key,
        R.props,
        null,
        C.mode,
        G
      ), fr(k, R), k.return = C, k);
    }
    function z(C, k, R, G) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== R.containerInfo || k.stateNode.implementation !== R.implementation ? (k = mo(R, C.mode, G), k.return = C, k) : (k = o(k, R.children || []), k.return = C, k);
    }
    function q(C, k, R, G, oe) {
      return k === null || k.tag !== 7 ? (k = yl(
        R,
        C.mode,
        G,
        oe
      ), k.return = C, k) : (k = o(k, R), k.return = C, k);
    }
    function X(C, k, R) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return k = po(
          "" + k,
          C.mode,
          R
        ), k.return = C, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case w:
            return R = di(
              k.type,
              k.key,
              k.props,
              null,
              C.mode,
              R
            ), fr(R, k), R.return = C, R;
          case S:
            return k = mo(
              k,
              C.mode,
              R
            ), k.return = C, k;
          case J:
            var G = k._init;
            return k = G(k._payload), X(C, k, R);
        }
        if (ee(k) || te(k))
          return k = yl(
            k,
            C.mode,
            R,
            null
          ), k.return = C, k;
        if (typeof k.then == "function")
          return X(C, Ri(k), R);
        if (k.$$typeof === K)
          return X(
            C,
            gi(C, k),
            R
          );
        Oi(C, k);
      }
      return null;
    }
    function N(C, k, R, G) {
      var oe = k !== null ? k.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return oe !== null ? null : v(C, k, "" + R, G);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case w:
            return R.key === oe ? T(C, k, R, G) : null;
          case S:
            return R.key === oe ? z(C, k, R, G) : null;
          case J:
            return oe = R._init, R = oe(R._payload), N(C, k, R, G);
        }
        if (ee(R) || te(R))
          return oe !== null ? null : q(C, k, R, G, null);
        if (typeof R.then == "function")
          return N(
            C,
            k,
            Ri(R),
            G
          );
        if (R.$$typeof === K)
          return N(
            C,
            k,
            gi(C, R),
            G
          );
        Oi(C, R);
      }
      return null;
    }
    function M(C, k, R, G, oe) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return C = C.get(R) || null, v(k, C, "" + G, oe);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case w:
            return C = C.get(
              G.key === null ? R : G.key
            ) || null, T(k, C, G, oe);
          case S:
            return C = C.get(
              G.key === null ? R : G.key
            ) || null, z(k, C, G, oe);
          case J:
            var Re = G._init;
            return G = Re(G._payload), M(
              C,
              k,
              R,
              G,
              oe
            );
        }
        if (ee(G) || te(G))
          return C = C.get(R) || null, q(k, C, G, oe, null);
        if (typeof G.then == "function")
          return M(
            C,
            k,
            R,
            Ri(G),
            oe
          );
        if (G.$$typeof === K)
          return M(
            C,
            k,
            R,
            gi(k, G),
            oe
          );
        Oi(k, G);
      }
      return null;
    }
    function ve(C, k, R, G) {
      for (var oe = null, Re = null, he = k, ye = k = 0, ft = null; he !== null && ye < R.length; ye++) {
        he.index > ye ? (ft = he, he = null) : ft = he.sibling;
        var De = N(
          C,
          he,
          R[ye],
          G
        );
        if (De === null) {
          he === null && (he = ft);
          break;
        }
        e && he && De.alternate === null && t(C, he), k = c(De, k, ye), Re === null ? oe = De : Re.sibling = De, Re = De, he = ft;
      }
      if (ye === R.length)
        return l(C, he), Be && vl(C, ye), oe;
      if (he === null) {
        for (; ye < R.length; ye++)
          he = X(C, R[ye], G), he !== null && (k = c(
            he,
            k,
            ye
          ), Re === null ? oe = he : Re.sibling = he, Re = he);
        return Be && vl(C, ye), oe;
      }
      for (he = r(he); ye < R.length; ye++)
        ft = M(
          he,
          C,
          ye,
          R[ye],
          G
        ), ft !== null && (e && ft.alternate !== null && he.delete(
          ft.key === null ? ye : ft.key
        ), k = c(
          ft,
          k,
          ye
        ), Re === null ? oe = ft : Re.sibling = ft, Re = ft);
      return e && he.forEach(function(sl) {
        return t(C, sl);
      }), Be && vl(C, ye), oe;
    }
    function ge(C, k, R, G) {
      if (R == null) throw Error(u(151));
      for (var oe = null, Re = null, he = k, ye = k = 0, ft = null, De = R.next(); he !== null && !De.done; ye++, De = R.next()) {
        he.index > ye ? (ft = he, he = null) : ft = he.sibling;
        var sl = N(C, he, De.value, G);
        if (sl === null) {
          he === null && (he = ft);
          break;
        }
        e && he && sl.alternate === null && t(C, he), k = c(sl, k, ye), Re === null ? oe = sl : Re.sibling = sl, Re = sl, he = ft;
      }
      if (De.done)
        return l(C, he), Be && vl(C, ye), oe;
      if (he === null) {
        for (; !De.done; ye++, De = R.next())
          De = X(C, De.value, G), De !== null && (k = c(De, k, ye), Re === null ? oe = De : Re.sibling = De, Re = De);
        return Be && vl(C, ye), oe;
      }
      for (he = r(he); !De.done; ye++, De = R.next())
        De = M(he, C, ye, De.value, G), De !== null && (e && De.alternate !== null && he.delete(De.key === null ? ye : De.key), k = c(De, k, ye), Re === null ? oe = De : Re.sibling = De, Re = De);
      return e && he.forEach(function(Wb) {
        return t(C, Wb);
      }), Be && vl(C, ye), oe;
    }
    function Ge(C, k, R, G) {
      if (typeof R == "object" && R !== null && R.type === _ && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case w:
            e: {
              for (var oe = R.key; k !== null; ) {
                if (k.key === oe) {
                  if (oe = R.type, oe === _) {
                    if (k.tag === 7) {
                      l(
                        C,
                        k.sibling
                      ), G = o(
                        k,
                        R.props.children
                      ), G.return = C, C = G;
                      break e;
                    }
                  } else if (k.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === J && ah(oe) === k.type) {
                    l(
                      C,
                      k.sibling
                    ), G = o(k, R.props), fr(G, R), G.return = C, C = G;
                    break e;
                  }
                  l(C, k);
                  break;
                } else t(C, k);
                k = k.sibling;
              }
              R.type === _ ? (G = yl(
                R.props.children,
                C.mode,
                G,
                R.key
              ), G.return = C, C = G) : (G = di(
                R.type,
                R.key,
                R.props,
                null,
                C.mode,
                G
              ), fr(G, R), G.return = C, C = G);
            }
            return g(C);
          case S:
            e: {
              for (oe = R.key; k !== null; ) {
                if (k.key === oe)
                  if (k.tag === 4 && k.stateNode.containerInfo === R.containerInfo && k.stateNode.implementation === R.implementation) {
                    l(
                      C,
                      k.sibling
                    ), G = o(k, R.children || []), G.return = C, C = G;
                    break e;
                  } else {
                    l(C, k);
                    break;
                  }
                else t(C, k);
                k = k.sibling;
              }
              G = mo(R, C.mode, G), G.return = C, C = G;
            }
            return g(C);
          case J:
            return oe = R._init, R = oe(R._payload), Ge(
              C,
              k,
              R,
              G
            );
        }
        if (ee(R))
          return ve(
            C,
            k,
            R,
            G
          );
        if (te(R)) {
          if (oe = te(R), typeof oe != "function") throw Error(u(150));
          return R = oe.call(R), ge(
            C,
            k,
            R,
            G
          );
        }
        if (typeof R.then == "function")
          return Ge(
            C,
            k,
            Ri(R),
            G
          );
        if (R.$$typeof === K)
          return Ge(
            C,
            k,
            gi(C, R),
            G
          );
        Oi(C, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, k !== null && k.tag === 6 ? (l(C, k.sibling), G = o(k, R), G.return = C, C = G) : (l(C, k), G = po(R, C.mode, G), G.return = C, C = G), g(C)) : l(C, k);
    }
    return function(C, k, R, G) {
      try {
        cr = 0;
        var oe = Ge(
          C,
          k,
          R,
          G
        );
        return ua = null, oe;
      } catch (he) {
        if (he === tr || he === bi) throw he;
        var Re = Ht(29, he, null, C.mode);
        return Re.lanes = G, Re.return = C, Re;
      } finally {
      }
    };
  }
  var oa = rh(!0), ih = rh(!1), en = Y(null), pn = null;
  function Fn(e) {
    var t = e.alternate;
    E(rt, rt.current & 1), E(en, e), pn === null && (t === null || la.current !== null || t.memoizedState !== null) && (pn = e);
  }
  function uh(e) {
    if (e.tag === 22) {
      if (E(rt, rt.current), E(en, e), pn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (pn = e);
      }
    } else In();
  }
  function In() {
    E(rt, rt.current), E(en, en.current);
  }
  function zn(e) {
    W(en), pn === e && (pn = null), W(rt);
  }
  var rt = Y(0);
  function zi(e) {
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
  function Fo(e, t, l, r) {
    t = e.memoizedState, l = l(r, t), l = l == null ? t : m({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Io = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var r = Gt(), o = Xn(r);
      o.payload = t, l != null && (o.callback = l), t = Kn(e, o, r), t !== null && (Qt(t, e, r), lr(t, e, r));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var r = Gt(), o = Xn(r);
      o.tag = 1, o.payload = t, l != null && (o.callback = l), t = Kn(e, o, r), t !== null && (Qt(t, e, r), lr(t, e, r));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Gt(), r = Xn(l);
      r.tag = 2, t != null && (r.callback = t), t = Kn(e, r, l), t !== null && (Qt(t, e, l), lr(t, e, l));
    }
  };
  function oh(e, t, l, r, o, c, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, g) : t.prototype && t.prototype.isPureReactComponent ? !Za(l, r) || !Za(o, c) : !0;
  }
  function sh(e, t, l, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, r), t.state !== e && Io.enqueueReplaceState(t, t.state, null);
  }
  function Al(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var r in t)
        r !== "ref" && (l[r] = t[r]);
    }
    if (e = e.defaultProps) {
      l === t && (l = m({}, l));
      for (var o in e)
        l[o] === void 0 && (l[o] = e[o]);
    }
    return l;
  }
  var Ni = typeof reportError == "function" ? reportError : function(e) {
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
    Ni(e);
  }
  function fh(e) {
    console.error(e);
  }
  function dh(e) {
    Ni(e);
  }
  function Mi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function hh(e, t, l) {
    try {
      var r = e.onCaughtError;
      r(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Jo(e, t, l) {
    return l = Xn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Mi(e, t);
    }, l;
  }
  function ph(e) {
    return e = Xn(e), e.tag = 3, e;
  }
  function mh(e, t, l, r) {
    var o = l.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      e.payload = function() {
        return o(c);
      }, e.callback = function() {
        hh(t, l, r);
      };
    }
    var g = l.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
      hh(t, l, r), typeof o != "function" && (tl === null ? tl = /* @__PURE__ */ new Set([this]) : tl.add(this));
      var v = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function W0(e, t, l, r, o) {
    if (l.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (t = l.alternate, t !== null && $a(
        t,
        l,
        o,
        !0
      ), l = en.current, l !== null) {
        switch (l.tag) {
          case 13:
            return pn === null ? xs() : l.alternate === null && Pe === 0 && (Pe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = o, r === ko ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Es(e, r, o)), !1;
          case 22:
            return l.flags |= 65536, r === ko ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : l.add(r)), Es(e, r, o)), !1;
        }
        throw Error(u(435, l.tag));
      }
      return Es(e, r, o), xs(), !1;
    }
    if (Be)
      return t = en.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, r !== bo && (e = Error(u(422), { cause: r }), Pa(Jt(e, l)))) : (r !== bo && (t = Error(u(423), {
        cause: r
      }), Pa(
        Jt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, r = Jt(r, l), o = Jo(
        e.stateNode,
        r,
        o
      ), _o(e, o), Pe !== 4 && (Pe = 2)), !1;
    var c = Error(u(520), { cause: r });
    if (c = Jt(c, l), br === null ? br = [c] : br.push(c), Pe !== 4 && (Pe = 2), t === null) return !0;
    r = Jt(r, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = o & -o, l.lanes |= e, e = Jo(l.stateNode, r, e), _o(l, e), !1;
        case 1:
          if (t = l.type, c = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (tl === null || !tl.has(c))))
            return l.flags |= 65536, o &= -o, l.lanes |= o, o = ph(o), mh(
              o,
              e,
              l,
              r
            ), _o(l, o), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var gh = Error(u(461)), st = !1;
  function dt(e, t, l, r) {
    t.child = e === null ? ih(t, null, l, r) : oa(
      t,
      e.child,
      l,
      r
    );
  }
  function yh(e, t, l, r, o) {
    l = l.render;
    var c = t.ref;
    if ("ref" in r) {
      var g = {};
      for (var v in r)
        v !== "ref" && (g[v] = r[v]);
    } else g = r;
    return wl(t), r = Mo(
      e,
      t,
      l,
      g,
      c,
      o
    ), v = Do(), e !== null && !st ? (Uo(e, t, o), Nn(e, t, o)) : (Be && v && go(t), t.flags |= 1, dt(e, t, r, o), t.child);
  }
  function bh(e, t, l, r, o) {
    if (e === null) {
      var c = l.type;
      return typeof c == "function" && !ho(c) && c.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = c, vh(
        e,
        t,
        c,
        r,
        o
      )) : (e = di(
        l.type,
        null,
        r,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !as(e, o)) {
      var g = c.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Za, l(g, r) && e.ref === t.ref)
        return Nn(e, t, o);
    }
    return t.flags |= 1, e = kn(c, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function vh(e, t, l, r, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Za(c, r) && e.ref === t.ref)
        if (st = !1, t.pendingProps = r = c, as(e, o))
          (e.flags & 131072) !== 0 && (st = !0);
        else
          return t.lanes = e.lanes, Nn(e, t, o);
    }
    return Po(
      e,
      t,
      l,
      r,
      o
    );
  }
  function xh(e, t, l) {
    var r = t.pendingProps, o = r.children, c = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (r = c !== null ? c.baseLanes | l : l, e !== null) {
          for (o = t.child = e.child, c = 0; o !== null; )
            c = c | o.lanes | o.childLanes, o = o.sibling;
          t.childLanes = c & ~r;
        } else t.childLanes = 0, t.child = null;
        return Sh(
          e,
          t,
          r,
          l
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && yi(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? vd(t, c) : Oo(), uh(t);
      else
        return t.lanes = t.childLanes = 536870912, Sh(
          e,
          t,
          c !== null ? c.baseLanes | l : l,
          l
        );
    } else
      c !== null ? (yi(t, c.cachePool), vd(t, c), In(), t.memoizedState = null) : (e !== null && yi(t, null), Oo(), In());
    return dt(e, t, o, l), t.child;
  }
  function Sh(e, t, l, r) {
    var o = To();
    return o = o === null ? null : { parent: at._currentValue, pool: o }, t.memoizedState = {
      baseLanes: l,
      cachePool: o
    }, e !== null && yi(t, null), Oo(), uh(t), e !== null && $a(e, t, r, !0), null;
  }
  function Di(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(u(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Po(e, t, l, r, o) {
    return wl(t), l = Mo(
      e,
      t,
      l,
      r,
      void 0,
      o
    ), r = Do(), e !== null && !st ? (Uo(e, t, o), Nn(e, t, o)) : (Be && r && go(t), t.flags |= 1, dt(e, t, l, o), t.child);
  }
  function Eh(e, t, l, r, o, c) {
    return wl(t), t.updateQueue = null, l = Sd(
      t,
      r,
      l,
      o
    ), xd(e), r = Do(), e !== null && !st ? (Uo(e, t, c), Nn(e, t, c)) : (Be && r && go(t), t.flags |= 1, dt(e, t, l, c), t.child);
  }
  function wh(e, t, l, r, o) {
    if (wl(t), t.stateNode === null) {
      var c = $l, g = l.contextType;
      typeof g == "object" && g !== null && (c = gt(g)), c = new l(r, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Io, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = r, c.state = t.memoizedState, c.refs = {}, Ao(t), g = l.contextType, c.context = typeof g == "object" && g !== null ? gt(g) : $l, c.state = t.memoizedState, g = l.getDerivedStateFromProps, typeof g == "function" && (Fo(
        t,
        l,
        g,
        r
      ), c.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (g = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), g !== c.state && Io.enqueueReplaceState(c, c.state, null), rr(t, r, c, o), ar(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      c = t.stateNode;
      var v = t.memoizedProps, T = Al(l, v);
      c.props = T;
      var z = c.context, q = l.contextType;
      g = $l, typeof q == "object" && q !== null && (g = gt(q));
      var X = l.getDerivedStateFromProps;
      q = typeof X == "function" || typeof c.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, q || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || z !== g) && sh(
        t,
        c,
        r,
        g
      ), Qn = !1;
      var N = t.memoizedState;
      c.state = N, rr(t, r, c, o), ar(), z = t.memoizedState, v || N !== z || Qn ? (typeof X == "function" && (Fo(
        t,
        l,
        X,
        r
      ), z = t.memoizedState), (T = Qn || oh(
        t,
        l,
        T,
        r,
        N,
        z,
        g
      )) ? (q || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = z), c.props = r, c.state = z, c.context = g, r = T) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      c = t.stateNode, Co(e, t), g = t.memoizedProps, q = Al(l, g), c.props = q, X = t.pendingProps, N = c.context, z = l.contextType, T = $l, typeof z == "object" && z !== null && (T = gt(z)), v = l.getDerivedStateFromProps, (z = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g !== X || N !== T) && sh(
        t,
        c,
        r,
        T
      ), Qn = !1, N = t.memoizedState, c.state = N, rr(t, r, c, o), ar();
      var M = t.memoizedState;
      g !== X || N !== M || Qn || e !== null && e.dependencies !== null && mi(e.dependencies) ? (typeof v == "function" && (Fo(
        t,
        l,
        v,
        r
      ), M = t.memoizedState), (q = Qn || oh(
        t,
        l,
        q,
        r,
        N,
        M,
        T
      ) || e !== null && e.dependencies !== null && mi(e.dependencies)) ? (z || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, M, T), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        r,
        M,
        T
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = M), c.props = r, c.state = M, c.context = T, r = q) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return c = r, Di(e, t), r = (t.flags & 128) !== 0, c || r ? (c = t.stateNode, l = r && typeof l.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && r ? (t.child = oa(
      t,
      e.child,
      null,
      o
    ), t.child = oa(
      t,
      null,
      l,
      o
    )) : dt(e, t, l, o), t.memoizedState = c.state, e = t.child) : e = Nn(
      e,
      t,
      o
    ), e;
  }
  function Th(e, t, l, r) {
    return Ja(), t.flags |= 256, dt(e, t, l, r), t.child;
  }
  var $o = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Wo(e) {
    return { baseLanes: e, cachePool: fd() };
  }
  function es(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= tn), e;
  }
  function kh(e, t, l) {
    var r = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, g;
    if ((g = c) || (g = e !== null && e.memoizedState === null ? !1 : (rt.current & 2) !== 0), g && (o = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Be) {
        if (o ? Fn(t) : In(), Be) {
          var v = Je, T;
          if (T = v) {
            e: {
              for (T = v, v = hn; T.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (T = sn(
                  T.nextSibling
                ), T === null) {
                  v = null;
                  break e;
                }
              }
              v = T;
            }
            v !== null ? (t.memoizedState = {
              dehydrated: v,
              treeContext: bl !== null ? { id: An, overflow: Cn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, T = Ht(
              18,
              null,
              null,
              0
            ), T.stateNode = v, T.return = t, t.child = T, St = t, Je = null, T = !0) : T = !1;
          }
          T || Sl(t);
        }
        if (v = t.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return js(v) ? t.lanes = 32 : t.lanes = 536870912, null;
        zn(t);
      }
      return v = r.children, r = r.fallback, o ? (In(), o = t.mode, v = Ui(
        { mode: "hidden", children: v },
        o
      ), r = yl(
        r,
        o,
        l,
        null
      ), v.return = t, r.return = t, v.sibling = r, t.child = v, o = t.child, o.memoizedState = Wo(l), o.childLanes = es(
        e,
        g,
        l
      ), t.memoizedState = $o, r) : (Fn(t), ts(t, v));
    }
    if (T = e.memoizedState, T !== null && (v = T.dehydrated, v !== null)) {
      if (c)
        t.flags & 256 ? (Fn(t), t.flags &= -257, t = ns(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (In(), t.child = e.child, t.flags |= 128, t = null) : (In(), o = r.fallback, v = t.mode, r = Ui(
          { mode: "visible", children: r.children },
          v
        ), o = yl(
          o,
          v,
          l,
          null
        ), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, oa(
          t,
          e.child,
          null,
          l
        ), r = t.child, r.memoizedState = Wo(l), r.childLanes = es(
          e,
          g,
          l
        ), t.memoizedState = $o, t = o);
      else if (Fn(t), js(v)) {
        if (g = v.nextSibling && v.nextSibling.dataset, g) var z = g.dgst;
        g = z, r = Error(u(419)), r.stack = "", r.digest = g, Pa({ value: r, source: null, stack: null }), t = ns(
          e,
          t,
          l
        );
      } else if (st || $a(e, t, l, !1), g = (l & e.childLanes) !== 0, st || g) {
        if (g = Xe, g !== null && (r = l & -l, r = (r & 42) !== 0 ? 1 : ju(r), r = (r & (g.suspendedLanes | l)) !== 0 ? 0 : r, r !== 0 && r !== T.retryLane))
          throw T.retryLane = r, Pl(e, r), Qt(g, e, r), gh;
        v.data === "$?" || xs(), t = ns(
          e,
          t,
          l
        );
      } else
        v.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, Je = sn(
          v.nextSibling
        ), St = t, Be = !0, xl = null, hn = !1, e !== null && ($t[Wt++] = An, $t[Wt++] = Cn, $t[Wt++] = bl, An = e.id, Cn = e.overflow, bl = t), t = ts(
          t,
          r.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (In(), o = r.fallback, v = t.mode, T = e.child, z = T.sibling, r = kn(T, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = T.subtreeFlags & 65011712, z !== null ? o = kn(z, o) : (o = yl(
      o,
      v,
      l,
      null
    ), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, v = e.child.memoizedState, v === null ? v = Wo(l) : (T = v.cachePool, T !== null ? (z = at._currentValue, T = T.parent !== z ? { parent: z, pool: z } : T) : T = fd(), v = {
      baseLanes: v.baseLanes | l,
      cachePool: T
    }), o.memoizedState = v, o.childLanes = es(
      e,
      g,
      l
    ), t.memoizedState = $o, r) : (Fn(t), l = e.child, e = l.sibling, l = kn(l, {
      mode: "visible",
      children: r.children
    }), l.return = t, l.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function ts(e, t) {
    return t = Ui(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ui(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function ns(e, t, l) {
    return oa(t, e.child, null, l), e = ts(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ah(e, t, l) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), xo(e.return, t, l);
  }
  function ls(e, t, l, r, o) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: l,
      tailMode: o
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = r, c.tail = l, c.tailMode = o);
  }
  function Ch(e, t, l) {
    var r = t.pendingProps, o = r.revealOrder, c = r.tail;
    if (dt(e, t, r.children, l), r = rt.current, (r & 2) !== 0)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ah(e, l, t);
          else if (e.tag === 19)
            Ah(e, l, t);
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
      r &= 1;
    }
    switch (E(rt, r), o) {
      case "forwards":
        for (l = t.child, o = null; l !== null; )
          e = l.alternate, e !== null && zi(e) === null && (o = l), l = l.sibling;
        l = o, l === null ? (o = t.child, t.child = null) : (o = l.sibling, l.sibling = null), ls(
          t,
          !1,
          o,
          l,
          c
        );
        break;
      case "backwards":
        for (l = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && zi(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = l, l = o, o = e;
        }
        ls(
          t,
          !0,
          l,
          null,
          c
        );
        break;
      case "together":
        ls(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Nn(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), el |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if ($a(
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
      for (e = t.child, l = kn(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = kn(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function as(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && mi(e)));
  }
  function eb(e, t, l) {
    switch (t.tag) {
      case 3:
        Ne(t, t.stateNode.containerInfo), Gn(t, at, e.memoizedState.cache), Ja();
        break;
      case 27:
      case 5:
        xt(t);
        break;
      case 4:
        Ne(t, t.stateNode.containerInfo);
        break;
      case 10:
        Gn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (Fn(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? kh(e, t, l) : (Fn(t), e = Nn(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Fn(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (r = (l & t.childLanes) !== 0, r || ($a(
          e,
          t,
          l,
          !1
        ), r = (l & t.childLanes) !== 0), o) {
          if (r)
            return Ch(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), E(rt, rt.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, xh(e, t, l);
      case 24:
        Gn(t, at, e.memoizedState.cache);
    }
    return Nn(e, t, l);
  }
  function _h(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        st = !0;
      else {
        if (!as(e, l) && (t.flags & 128) === 0)
          return st = !1, eb(
            e,
            t,
            l
          );
        st = (e.flags & 131072) !== 0;
      }
    else
      st = !1, Be && (t.flags & 1048576) !== 0 && ad(t, pi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var r = t.elementType, o = r._init;
          if (r = o(r._payload), t.type = r, typeof r == "function")
            ho(r) ? (e = Al(r, e), t.tag = 1, t = wh(
              null,
              t,
              r,
              e,
              l
            )) : (t.tag = 0, t = Po(
              null,
              t,
              r,
              e,
              l
            ));
          else {
            if (r != null) {
              if (o = r.$$typeof, o === ue) {
                t.tag = 11, t = yh(
                  null,
                  t,
                  r,
                  e,
                  l
                );
                break e;
              } else if (o === re) {
                t.tag = 14, t = bh(
                  null,
                  t,
                  r,
                  e,
                  l
                );
                break e;
              }
            }
            throw t = ne(r) || r, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Po(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return r = t.type, o = Al(
          r,
          t.pendingProps
        ), wh(
          e,
          t,
          r,
          o,
          l
        );
      case 3:
        e: {
          if (Ne(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          r = t.pendingProps;
          var c = t.memoizedState;
          o = c.element, Co(e, t), rr(t, r, null, l);
          var g = t.memoizedState;
          if (r = g.cache, Gn(t, at, r), r !== c.cache && So(
            t,
            [at],
            l,
            !0
          ), ar(), r = g.element, c.isDehydrated)
            if (c = {
              element: r,
              isDehydrated: !1,
              cache: g.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = Th(
                e,
                t,
                r,
                l
              );
              break e;
            } else if (r !== o) {
              o = Jt(
                Error(u(424)),
                t
              ), Pa(o), t = Th(
                e,
                t,
                r,
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
              for (Je = sn(e.firstChild), St = t, Be = !0, xl = null, hn = !0, l = ih(
                t,
                null,
                r,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Ja(), r === o) {
              t = Nn(
                e,
                t,
                l
              );
              break e;
            }
            dt(
              e,
              t,
              r,
              l
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Di(e, t), e === null ? (l = Np(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : Be || (l = t.type, e = t.pendingProps, r = Ii(
          ie.current
        ).createElement(l), r[mt] = t, r[wt] = e, pt(r, l, e), ot(r), t.stateNode = r) : t.memoizedState = Np(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return xt(t), e === null && Be && (r = t.stateNode = Rp(
          t.type,
          t.pendingProps,
          ie.current
        ), St = t, hn = !0, o = Je, al(t.type) ? (Ls = o, Je = sn(
          r.firstChild
        )) : Je = o), dt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Di(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Be && ((o = r = Je) && (r = _b(
          r,
          t.type,
          t.pendingProps,
          hn
        ), r !== null ? (t.stateNode = r, St = t, Je = sn(
          r.firstChild
        ), hn = !1, o = !0) : o = !1), o || Sl(t)), xt(t), o = t.type, c = t.pendingProps, g = e !== null ? e.memoizedProps : null, r = c.children, Ds(o, c) ? r = null : g !== null && Ds(o, g) && (t.flags |= 32), t.memoizedState !== null && (o = Mo(
          e,
          t,
          K0,
          null,
          null,
          l
        ), Cr._currentValue = o), Di(e, t), dt(e, t, r, l), t.child;
      case 6:
        return e === null && Be && ((e = l = Je) && (l = Rb(
          l,
          t.pendingProps,
          hn
        ), l !== null ? (t.stateNode = l, St = t, Je = null, e = !0) : e = !1), e || Sl(t)), null;
      case 13:
        return kh(e, t, l);
      case 4:
        return Ne(
          t,
          t.stateNode.containerInfo
        ), r = t.pendingProps, e === null ? t.child = oa(
          t,
          null,
          r,
          l
        ) : dt(
          e,
          t,
          r,
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
        return r = t.pendingProps, Gn(t, t.type, r.value), dt(
          e,
          t,
          r.children,
          l
        ), t.child;
      case 9:
        return o = t.type._context, r = t.pendingProps.children, wl(t), o = gt(o), r = r(o), t.flags |= 1, dt(e, t, r, l), t.child;
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
        return r = t.pendingProps, l = t.mode, r = {
          mode: r.mode,
          children: r.children
        }, e === null ? (l = Ui(
          r,
          l
        ), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = kn(e.child, r), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
      case 22:
        return xh(e, t, l);
      case 24:
        return wl(t), r = gt(at), e === null ? (o = To(), o === null && (o = Xe, c = Eo(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= l), o = c), t.memoizedState = {
          parent: r,
          cache: o
        }, Ao(t), Gn(t, at, o)) : ((e.lanes & l) !== 0 && (Co(e, t), rr(t, null, null, l), ar()), o = e.memoizedState, c = t.memoizedState, o.parent !== r ? (o = { parent: r, cache: r }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Gn(t, at, r)) : (r = c.cache, Gn(t, at, r), r !== o.cache && So(
          t,
          [at],
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
  function Mn(e) {
    e.flags |= 4;
  }
  function Rh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !jp(t)) {
      if (t = en.current, t !== null && ((Me & 4194048) === Me ? pn !== null : (Me & 62914560) !== Me && (Me & 536870912) === 0 || t !== pn))
        throw nr = ko, dd;
      e.flags |= 8192;
    }
  }
  function Bi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? uf() : 536870912, e.lanes |= t, da |= t);
  }
  function dr(e, t) {
    if (!Be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var r = null; l !== null; )
            l.alternate !== null && (r = l), l = l.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        l |= o.lanes | o.childLanes, r |= o.subtreeFlags & 65011712, r |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        l |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = l, t;
  }
  function tb(e, t, l) {
    var r = t.pendingProps;
    switch (yo(t), t.tag) {
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
        return Ie(t), null;
      case 1:
        return Ie(t), null;
      case 3:
        return l = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Rn(at), et(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Ia(t) ? Mn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ud())), Ie(t), null;
      case 26:
        return l = t.memoizedState, e === null ? (Mn(t), l !== null ? (Ie(t), Rh(t, l)) : (Ie(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Mn(t), Ie(t), Rh(t, l)) : (Ie(t), t.flags &= -16777217) : (e.memoizedProps !== r && Mn(t), Ie(t), t.flags &= -16777217), null;
      case 27:
        Dt(t), l = ie.current;
        var o = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== r && Mn(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Ie(t), null;
          }
          e = le.current, Ia(t) ? rd(t) : (e = Rp(o, r, l), t.stateNode = e, Mn(t));
        }
        return Ie(t), null;
      case 5:
        if (Dt(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && Mn(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Ie(t), null;
          }
          if (e = le.current, Ia(t))
            rd(t);
          else {
            switch (o = Ii(
              ie.current
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
                    e = typeof r.is == "string" ? o.createElement("select", { is: r.is }) : o.createElement("select"), r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                    break;
                  default:
                    e = typeof r.is == "string" ? o.createElement(l, { is: r.is }) : o.createElement(l);
                }
            }
            e[mt] = t, e[wt] = r;
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
            e: switch (pt(e, l, r), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!r.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Mn(t);
          }
        }
        return Ie(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== r && Mn(t);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = ie.current, Ia(t)) {
            if (e = t.stateNode, l = t.memoizedProps, r = null, o = St, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  r = o.memoizedProps;
              }
            e[mt] = t, e = !!(e.nodeValue === l || r !== null && r.suppressHydrationWarning === !0 || Ep(e.nodeValue, l)), e || Sl(t);
          } else
            e = Ii(e).createTextNode(
              r
            ), e[mt] = t, t.stateNode = e;
        }
        return Ie(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Ia(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[mt] = t;
            } else
              Ja(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ie(t), o = !1;
          } else
            o = ud(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (zn(t), t) : (zn(t), null);
        }
        if (zn(t), (t.flags & 128) !== 0)
          return t.lanes = l, t;
        if (l = r !== null, e = e !== null && e.memoizedState !== null, l) {
          r = t.child, o = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (o = r.alternate.memoizedState.cachePool.pool);
          var c = null;
          r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool), c !== o && (r.flags |= 2048);
        }
        return l !== e && l && (t.child.flags |= 8192), Bi(t, t.updateQueue), Ie(t), null;
      case 4:
        return et(), e === null && Rs(t.stateNode.containerInfo), Ie(t), null;
      case 10:
        return Rn(t.type), Ie(t), null;
      case 19:
        if (W(rt), o = t.memoizedState, o === null) return Ie(t), null;
        if (r = (t.flags & 128) !== 0, c = o.rendering, c === null)
          if (r) dr(o, !1);
          else {
            if (Pe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = zi(e), c !== null) {
                  for (t.flags |= 128, dr(o, !1), e = c.updateQueue, t.updateQueue = e, Bi(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    ld(l, e), l = l.sibling;
                  return E(
                    rt,
                    rt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && Ut() > Hi && (t.flags |= 128, r = !0, dr(o, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = zi(c), e !== null) {
              if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, Bi(t, e), dr(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !Be)
                return Ie(t), null;
            } else
              2 * Ut() - o.renderingStartTime > Hi && l !== 536870912 && (t.flags |= 128, r = !0, dr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (c.sibling = t.child, t.child = c) : (e = o.last, e !== null ? e.sibling = c : t.child = c, o.last = c);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ut(), t.sibling = null, e = rt.current, E(rt, r ? e & 1 | 2 : e & 1), t) : (Ie(t), null);
      case 22:
      case 23:
        return zn(t), zo(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), l = t.updateQueue, l !== null && Bi(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== l && (t.flags |= 2048), e !== null && W(Tl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Rn(at), Ie(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function nb(e, t) {
    switch (yo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rn(at), et(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Dt(t), null;
      case 13:
        if (zn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          Ja();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return W(rt), null;
      case 4:
        return et(), null;
      case 10:
        return Rn(t.type), null;
      case 22:
      case 23:
        return zn(t), zo(), e !== null && W(Tl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Rn(at), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Oh(e, t) {
    switch (yo(t), t.tag) {
      case 3:
        Rn(at), et();
        break;
      case 26:
      case 27:
      case 5:
        Dt(t);
        break;
      case 4:
        et();
        break;
      case 13:
        zn(t);
        break;
      case 19:
        W(rt);
        break;
      case 10:
        Rn(t.type);
        break;
      case 22:
      case 23:
        zn(t), zo(), e !== null && W(Tl);
        break;
      case 24:
        Rn(at);
    }
  }
  function hr(e, t) {
    try {
      var l = t.updateQueue, r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var o = r.next;
        l = o;
        do {
          if ((l.tag & e) === e) {
            r = void 0;
            var c = l.create, g = l.inst;
            r = c(), g.destroy = r;
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (v) {
      Qe(t, t.return, v);
    }
  }
  function Jn(e, t, l) {
    try {
      var r = t.updateQueue, o = r !== null ? r.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        r = c;
        do {
          if ((r.tag & e) === e) {
            var g = r.inst, v = g.destroy;
            if (v !== void 0) {
              g.destroy = void 0, o = t;
              var T = l, z = v;
              try {
                z();
              } catch (q) {
                Qe(
                  o,
                  T,
                  q
                );
              }
            }
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (q) {
      Qe(t, t.return, q);
    }
  }
  function zh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        bd(t, l);
      } catch (r) {
        Qe(e, e.return, r);
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
    } catch (r) {
      Qe(e, t, r);
    }
  }
  function pr(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(r) : l.current = r;
      }
    } catch (o) {
      Qe(e, t, o);
    }
  }
  function mn(e, t) {
    var l = e.ref, r = e.refCleanup;
    if (l !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (o) {
          Qe(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Qe(e, t, o);
        }
      else l.current = null;
  }
  function Mh(e) {
    var t = e.type, l = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && r.focus();
          break e;
        case "img":
          l.src ? r.src = l.src : l.srcSet && (r.srcset = l.srcSet);
      }
    } catch (o) {
      Qe(e, e.return, o);
    }
  }
  function rs(e, t, l) {
    try {
      var r = e.stateNode;
      wb(r, e.type, l, t), r[wt] = t;
    } catch (o) {
      Qe(e, e.return, o);
    }
  }
  function Dh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && al(e.type) || e.tag === 4;
  }
  function is(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Dh(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && al(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function us(e, t, l) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Fi));
    else if (r !== 4 && (r === 27 && al(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (us(e, t, l), e = e.sibling; e !== null; )
        us(e, t, l), e = e.sibling;
  }
  function ji(e, t, l) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (r !== 4 && (r === 27 && al(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (ji(e, t, l), e = e.sibling; e !== null; )
        ji(e, t, l), e = e.sibling;
  }
  function Uh(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var r = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      pt(t, r, l), t[mt] = e, t[wt] = l;
    } catch (c) {
      Qe(e, e.return, c);
    }
  }
  var Dn = !1, We = !1, os = !1, Bh = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function lb(e, t) {
    if (e = e.containerInfo, Ns = tu, e = Zf(e), ro(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var r = l.getSelection && l.getSelection();
          if (r && r.rangeCount !== 0) {
            l = r.anchorNode;
            var o = r.anchorOffset, c = r.focusNode;
            r = r.focusOffset;
            try {
              l.nodeType, c.nodeType;
            } catch {
              l = null;
              break e;
            }
            var g = 0, v = -1, T = -1, z = 0, q = 0, X = e, N = null;
            t: for (; ; ) {
              for (var M; X !== l || o !== 0 && X.nodeType !== 3 || (v = g + o), X !== c || r !== 0 && X.nodeType !== 3 || (T = g + r), X.nodeType === 3 && (g += X.nodeValue.length), (M = X.firstChild) !== null; )
                N = X, X = M;
              for (; ; ) {
                if (X === e) break t;
                if (N === l && ++z === o && (v = g), N === c && ++q === r && (T = g), (M = X.nextSibling) !== null) break;
                X = N, N = X.parentNode;
              }
              X = M;
            }
            l = v === -1 || T === -1 ? null : { start: v, end: T };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ms = { focusedElem: e, selectionRange: l }, tu = !1, ct = t; ct !== null; )
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
                e = void 0, l = t, o = c.memoizedProps, c = c.memoizedState, r = l.stateNode;
                try {
                  var ve = Al(
                    l.type,
                    o,
                    l.elementType === l.type
                  );
                  e = r.getSnapshotBeforeUpdate(
                    ve,
                    c
                  ), r.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ge) {
                  Qe(
                    l,
                    l.return,
                    ge
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Bs(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bs(e);
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
  function jh(e, t, l) {
    var r = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Pn(e, l), r & 4 && hr(5, l);
        break;
      case 1:
        if (Pn(e, l), r & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (g) {
              Qe(l, l.return, g);
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
              Qe(
                l,
                l.return,
                g
              );
            }
          }
        r & 64 && zh(l), r & 512 && pr(l, l.return);
        break;
      case 3:
        if (Pn(e, l), r & 64 && (e = l.updateQueue, e !== null)) {
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
            Qe(l, l.return, g);
          }
        }
        break;
      case 27:
        t === null && r & 4 && Uh(l);
      case 26:
      case 5:
        Pn(e, l), t === null && r & 4 && Mh(l), r & 512 && pr(l, l.return);
        break;
      case 12:
        Pn(e, l);
        break;
      case 13:
        Pn(e, l), r & 4 && qh(e, l), r & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = db.bind(
          null,
          l
        ), Ob(e, l))));
        break;
      case 22:
        if (r = l.memoizedState !== null || Dn, !r) {
          t = t !== null && t.memoizedState !== null || We, o = Dn;
          var c = We;
          Dn = r, (We = t) && !c ? $n(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Pn(e, l), Dn = o, We = c;
        }
        break;
      case 30:
        break;
      default:
        Pn(e, l);
    }
  }
  function Lh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Lh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && qu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Fe = null, At = !1;
  function Un(e, t, l) {
    for (l = l.child; l !== null; )
      Hh(e, t, l), l = l.sibling;
  }
  function Hh(e, t, l) {
    if (Z && typeof Z.onCommitFiberUnmount == "function")
      try {
        Z.onCommitFiberUnmount(H, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        We || mn(l, t), Un(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        We || mn(l, t);
        var r = Fe, o = At;
        al(l.type) && (Fe = l.stateNode, At = !1), Un(
          e,
          t,
          l
        ), wr(l.stateNode), Fe = r, At = o;
        break;
      case 5:
        We || mn(l, t);
      case 6:
        if (r = Fe, o = At, Fe = null, Un(
          e,
          t,
          l
        ), Fe = r, At = o, Fe !== null)
          if (At)
            try {
              (Fe.nodeType === 9 ? Fe.body : Fe.nodeName === "HTML" ? Fe.ownerDocument.body : Fe).removeChild(l.stateNode);
            } catch (c) {
              Qe(
                l,
                t,
                c
              );
            }
          else
            try {
              Fe.removeChild(l.stateNode);
            } catch (c) {
              Qe(
                l,
                t,
                c
              );
            }
        break;
      case 18:
        Fe !== null && (At ? (e = Fe, Cp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), zr(e)) : Cp(Fe, l.stateNode));
        break;
      case 4:
        r = Fe, o = At, Fe = l.stateNode.containerInfo, At = !0, Un(
          e,
          t,
          l
        ), Fe = r, At = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        We || Jn(2, l, t), We || Jn(4, l, t), Un(
          e,
          t,
          l
        );
        break;
      case 1:
        We || (mn(l, t), r = l.stateNode, typeof r.componentWillUnmount == "function" && Nh(
          l,
          t,
          r
        )), Un(
          e,
          t,
          l
        );
        break;
      case 21:
        Un(
          e,
          t,
          l
        );
        break;
      case 22:
        We = (r = We) || l.memoizedState !== null, Un(
          e,
          t,
          l
        ), We = r;
        break;
      default:
        Un(
          e,
          t,
          l
        );
    }
  }
  function qh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zr(e);
      } catch (l) {
        Qe(t, t.return, l);
      }
  }
  function ab(e) {
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
  function ss(e, t) {
    var l = ab(e);
    t.forEach(function(r) {
      var o = hb.bind(null, e, r);
      l.has(r) || (l.add(r), r.then(o, o));
    });
  }
  function qt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var r = 0; r < l.length; r++) {
        var o = l[r], c = e, g = t, v = g;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (al(v.type)) {
                Fe = v.stateNode, At = !1;
                break e;
              }
              break;
            case 5:
              Fe = v.stateNode, At = !1;
              break e;
            case 3:
            case 4:
              Fe = v.stateNode.containerInfo, At = !0;
              break e;
          }
          v = v.return;
        }
        if (Fe === null) throw Error(u(160));
        Hh(c, g, o), Fe = null, At = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Vh(t, e), t = t.sibling;
  }
  var on = null;
  function Vh(e, t) {
    var l = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        qt(t, e), Vt(e), r & 4 && (Jn(3, e, e.return), hr(3, e), Jn(5, e, e.return));
        break;
      case 1:
        qt(t, e), Vt(e), r & 512 && (We || l === null || mn(l, l.return)), r & 64 && Dn && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? r : l.concat(r))));
        break;
      case 26:
        var o = on;
        if (qt(t, e), Vt(e), r & 512 && (We || l === null || mn(l, l.return)), r & 4) {
          var c = l !== null ? l.memoizedState : null;
          if (r = e.memoizedState, l === null)
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  r = e.type, l = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (r) {
                    case "title":
                      c = o.getElementsByTagName("title")[0], (!c || c[La] || c[mt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(r), o.head.insertBefore(
                        c,
                        o.querySelector("head > title")
                      )), pt(c, r, l), c[mt] = e, ot(c), r = c;
                      break e;
                    case "link":
                      var g = Up(
                        "link",
                        "href",
                        o
                      ).get(r + (l.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (c = g[v], c.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && c.getAttribute("rel") === (l.rel == null ? null : l.rel) && c.getAttribute("title") === (l.title == null ? null : l.title) && c.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      c = o.createElement(r), pt(c, r, l), o.head.appendChild(c);
                      break;
                    case "meta":
                      if (g = Up(
                        "meta",
                        "content",
                        o
                      ).get(r + (l.content || ""))) {
                        for (v = 0; v < g.length; v++)
                          if (c = g[v], c.getAttribute("content") === (l.content == null ? null : "" + l.content) && c.getAttribute("name") === (l.name == null ? null : l.name) && c.getAttribute("property") === (l.property == null ? null : l.property) && c.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && c.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      c = o.createElement(r), pt(c, r, l), o.head.appendChild(c);
                      break;
                    default:
                      throw Error(u(468, r));
                  }
                  c[mt] = e, ot(c), r = c;
                }
                e.stateNode = r;
              } else
                Bp(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Dp(
                o,
                r,
                e.memoizedProps
              );
          else
            c !== r ? (c === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : c.count--, r === null ? Bp(
              o,
              e.type,
              e.stateNode
            ) : Dp(
              o,
              r,
              e.memoizedProps
            )) : r === null && e.stateNode !== null && rs(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        qt(t, e), Vt(e), r & 512 && (We || l === null || mn(l, l.return)), l !== null && r & 4 && rs(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (qt(t, e), Vt(e), r & 512 && (We || l === null || mn(l, l.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Ql(o, "");
          } catch (M) {
            Qe(e, e.return, M);
          }
        }
        r & 4 && e.stateNode != null && (o = e.memoizedProps, rs(
          e,
          o,
          l !== null ? l.memoizedProps : o
        )), r & 1024 && (os = !0);
        break;
      case 6:
        if (qt(t, e), Vt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          r = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = r;
          } catch (M) {
            Qe(e, e.return, M);
          }
        }
        break;
      case 3:
        if ($i = null, o = on, on = Ji(t.containerInfo), qt(t, e), on = o, Vt(e), r & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            zr(t.containerInfo);
          } catch (M) {
            Qe(e, e.return, M);
          }
        os && (os = !1, Yh(e));
        break;
      case 4:
        r = on, on = Ji(
          e.stateNode.containerInfo
        ), qt(t, e), Vt(e), on = r;
        break;
      case 12:
        qt(t, e), Vt(e);
        break;
      case 13:
        qt(t, e), Vt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ms = Ut()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, ss(e, r)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var T = l !== null && l.memoizedState !== null, z = Dn, q = We;
        if (Dn = z || o, We = q || T, qt(t, e), We = q, Dn = z, Vt(e), r & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (l === null || T || Dn || We || Cl(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                T = l = t;
                try {
                  if (c = T.stateNode, o)
                    g = c.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    v = T.stateNode;
                    var X = T.memoizedProps.style, N = X != null && X.hasOwnProperty("display") ? X.display : null;
                    v.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (M) {
                  Qe(T, T.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                T = t;
                try {
                  T.stateNode.nodeValue = o ? "" : T.memoizedProps;
                } catch (M) {
                  Qe(T, T.return, M);
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
        r & 4 && (r = e.updateQueue, r !== null && (l = r.retryQueue, l !== null && (r.retryQueue = null, ss(e, l))));
        break;
      case 19:
        qt(t, e), Vt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, ss(e, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        qt(t, e), Vt(e);
    }
  }
  function Vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, r = e.return; r !== null; ) {
          if (Dh(r)) {
            l = r;
            break;
          }
          r = r.return;
        }
        if (l == null) throw Error(u(160));
        switch (l.tag) {
          case 27:
            var o = l.stateNode, c = is(e);
            ji(e, c, o);
            break;
          case 5:
            var g = l.stateNode;
            l.flags & 32 && (Ql(g, ""), l.flags &= -33);
            var v = is(e);
            ji(e, v, g);
            break;
          case 3:
          case 4:
            var T = l.stateNode.containerInfo, z = is(e);
            us(
              e,
              z,
              T
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (q) {
        Qe(e, e.return, q);
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
  function Pn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        jh(e, t.alternate, t), t = t.sibling;
  }
  function Cl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jn(4, t, t.return), Cl(t);
          break;
        case 1:
          mn(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Nh(
            t,
            t.return,
            l
          ), Cl(t);
          break;
        case 27:
          wr(t.stateNode);
        case 26:
        case 5:
          mn(t, t.return), Cl(t);
          break;
        case 22:
          t.memoizedState === null && Cl(t);
          break;
        case 30:
          Cl(t);
          break;
        default:
          Cl(t);
      }
      e = e.sibling;
    }
  }
  function $n(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate, o = e, c = t, g = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          $n(
            o,
            c,
            l
          ), hr(4, c);
          break;
        case 1:
          if ($n(
            o,
            c,
            l
          ), r = c, o = r.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (z) {
              Qe(r, r.return, z);
            }
          if (r = c, o = r.updateQueue, o !== null) {
            var v = r.stateNode;
            try {
              var T = o.shared.hiddenCallbacks;
              if (T !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < T.length; o++)
                  yd(T[o], v);
            } catch (z) {
              Qe(r, r.return, z);
            }
          }
          l && g & 64 && zh(c), pr(c, c.return);
          break;
        case 27:
          Uh(c);
        case 26:
        case 5:
          $n(
            o,
            c,
            l
          ), l && r === null && g & 4 && Mh(c), pr(c, c.return);
          break;
        case 12:
          $n(
            o,
            c,
            l
          );
          break;
        case 13:
          $n(
            o,
            c,
            l
          ), l && g & 4 && qh(o, c);
          break;
        case 22:
          c.memoizedState === null && $n(
            o,
            c,
            l
          ), pr(c, c.return);
          break;
        case 30:
          break;
        default:
          $n(
            o,
            c,
            l
          );
      }
      t = t.sibling;
    }
  }
  function cs(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Wa(l));
  }
  function fs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wa(e));
  }
  function gn(e, t, l, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Gh(
          e,
          t,
          l,
          r
        ), t = t.sibling;
  }
  function Gh(e, t, l, r) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gn(
          e,
          t,
          l,
          r
        ), o & 2048 && hr(9, t);
        break;
      case 1:
        gn(
          e,
          t,
          l,
          r
        );
        break;
      case 3:
        gn(
          e,
          t,
          l,
          r
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wa(e)));
        break;
      case 12:
        if (o & 2048) {
          gn(
            e,
            t,
            l,
            r
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, g = c.id, v = c.onPostCommit;
            typeof v == "function" && v(
              g,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Qe(t, t.return, T);
          }
        } else
          gn(
            e,
            t,
            l,
            r
          );
        break;
      case 13:
        gn(
          e,
          t,
          l,
          r
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, g = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? gn(
          e,
          t,
          l,
          r
        ) : mr(e, t) : c._visibility & 2 ? gn(
          e,
          t,
          l,
          r
        ) : (c._visibility |= 2, sa(
          e,
          t,
          l,
          r,
          (t.subtreeFlags & 10256) !== 0
        )), o & 2048 && cs(g, t);
        break;
      case 24:
        gn(
          e,
          t,
          l,
          r
        ), o & 2048 && fs(t.alternate, t);
        break;
      default:
        gn(
          e,
          t,
          l,
          r
        );
    }
  }
  function sa(e, t, l, r, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e, g = t, v = l, T = r, z = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          sa(
            c,
            g,
            v,
            T,
            o
          ), hr(8, g);
          break;
        case 23:
          break;
        case 22:
          var q = g.stateNode;
          g.memoizedState !== null ? q._visibility & 2 ? sa(
            c,
            g,
            v,
            T,
            o
          ) : mr(
            c,
            g
          ) : (q._visibility |= 2, sa(
            c,
            g,
            v,
            T,
            o
          )), o && z & 2048 && cs(
            g.alternate,
            g
          );
          break;
        case 24:
          sa(
            c,
            g,
            v,
            T,
            o
          ), o && z & 2048 && fs(g.alternate, g);
          break;
        default:
          sa(
            c,
            g,
            v,
            T,
            o
          );
      }
      t = t.sibling;
    }
  }
  function mr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, r = t, o = r.flags;
        switch (r.tag) {
          case 22:
            mr(l, r), o & 2048 && cs(
              r.alternate,
              r
            );
            break;
          case 24:
            mr(l, r), o & 2048 && fs(r.alternate, r);
            break;
          default:
            mr(l, r);
        }
        t = t.sibling;
      }
  }
  var gr = 8192;
  function ca(e) {
    if (e.subtreeFlags & gr)
      for (e = e.child; e !== null; )
        Qh(e), e = e.sibling;
  }
  function Qh(e) {
    switch (e.tag) {
      case 26:
        ca(e), e.flags & gr && e.memoizedState !== null && Gb(
          on,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ca(e);
        break;
      case 3:
      case 4:
        var t = on;
        on = Ji(e.stateNode.containerInfo), ca(e), on = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = gr, gr = 16777216, ca(e), gr = t) : ca(e));
        break;
      default:
        ca(e);
    }
  }
  function Xh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function yr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var r = t[l];
          ct = r, Zh(
            r,
            e
          );
        }
      Xh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Kh(e), e = e.sibling;
  }
  function Kh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        yr(e), e.flags & 2048 && Jn(9, e, e.return);
        break;
      case 3:
        yr(e);
        break;
      case 12:
        yr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Li(e)) : yr(e);
        break;
      default:
        yr(e);
    }
  }
  function Li(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var r = t[l];
          ct = r, Zh(
            r,
            e
          );
        }
      Xh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, t, t.return), Li(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Li(t));
          break;
        default:
          Li(t);
      }
      e = e.sibling;
    }
  }
  function Zh(e, t) {
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
            var r = l.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Wa(l.memoizedState.cache);
      }
      if (r = l.child, r !== null) r.return = l, ct = r;
      else
        e: for (l = e; ct !== null; ) {
          r = ct;
          var o = r.sibling, c = r.return;
          if (Lh(r), r === l) {
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
  var rb = {
    getCacheForType: function(e) {
      var t = gt(at), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    }
  }, ib = typeof WeakMap == "function" ? WeakMap : Map, He = 0, Xe = null, Oe = null, Me = 0, qe = 0, Yt = null, Wn = !1, fa = !1, ds = !1, Bn = 0, Pe = 0, el = 0, _l = 0, hs = 0, tn = 0, da = 0, br = null, Ct = null, ps = !1, ms = 0, Hi = 1 / 0, qi = null, tl = null, ht = 0, nl = null, ha = null, pa = 0, gs = 0, ys = null, Fh = null, vr = 0, bs = null;
  function Gt() {
    if ((He & 2) !== 0 && Me !== 0)
      return Me & -Me;
    if (A.T !== null) {
      var e = ta;
      return e !== 0 ? e : ks();
    }
    return cf();
  }
  function Ih() {
    tn === 0 && (tn = (Me & 536870912) === 0 || Be ? rf() : 536870912);
    var e = en.current;
    return e !== null && (e.flags |= 32), tn;
  }
  function Qt(e, t, l) {
    (e === Xe && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) && (ma(e, 0), ll(
      e,
      Me,
      tn,
      !1
    )), ja(e, l), ((He & 2) === 0 || e !== Xe) && (e === Xe && ((He & 2) === 0 && (_l |= l), Pe === 4 && ll(
      e,
      Me,
      tn,
      !1
    )), yn(e));
  }
  function Jh(e, t, l) {
    if ((He & 6) !== 0) throw Error(u(327));
    var r = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Zt(e, t), o = r ? sb(e, t) : Ss(e, t, !0), c = r;
    do {
      if (o === 0) {
        fa && !r && ll(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, c && !ub(l)) {
          o = Ss(e, t, !1), c = !1;
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
              var v = e;
              o = br;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (ma(v, g).flags |= 256), g = Ss(
                v,
                g,
                !1
              ), g !== 2) {
                if (ds && !T) {
                  v.errorRecoveryDisabledLanes |= c, _l |= c, o = 4;
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
          ma(e, 0), ll(e, t, 0, !0);
          break;
        }
        e: {
          switch (r = e, c = o, c) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ll(
                r,
                t,
                tn,
                !Wn
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
          if ((t & 62914560) === t && (o = ms + 300 - Ut(), 10 < o)) {
            if (ll(
              r,
              t,
              tn,
              !Wn
            ), ut(r, 0, !0) !== 0) break e;
            r.timeoutHandle = kp(
              Ph.bind(
                null,
                r,
                l,
                Ct,
                qi,
                ps,
                t,
                tn,
                _l,
                da,
                Wn,
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
            r,
            l,
            Ct,
            qi,
            ps,
            t,
            tn,
            _l,
            da,
            Wn,
            c,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    yn(e);
  }
  function Ph(e, t, l, r, o, c, g, v, T, z, q, X, N, M) {
    if (e.timeoutHandle = -1, X = t.subtreeFlags, (X & 8192 || (X & 16785408) === 16785408) && (Ar = { stylesheets: null, count: 0, unsuspend: Yb }, Qh(t), X = Qb(), X !== null)) {
      e.cancelPendingCommit = X(
        ap.bind(
          null,
          e,
          t,
          c,
          l,
          r,
          o,
          g,
          v,
          T,
          q,
          1,
          N,
          M
        )
      ), ll(e, c, g, !z);
      return;
    }
    ap(
      e,
      t,
      c,
      l,
      r,
      o,
      g,
      v,
      T
    );
  }
  function ub(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var r = 0; r < l.length; r++) {
          var o = l[r], c = o.getSnapshot;
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
  function ll(e, t, l, r) {
    t &= ~hs, t &= ~_l, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var c = 31 - be(o), g = 1 << c;
      r[c] = -1, o &= ~g;
    }
    l !== 0 && of(e, l, t);
  }
  function Vi() {
    return (He & 6) === 0 ? (xr(0), !1) : !0;
  }
  function vs() {
    if (Oe !== null) {
      if (qe === 0)
        var e = Oe.return;
      else
        e = Oe, _n = El = null, Bo(e), ua = null, cr = 0, e = Oe;
      for (; e !== null; )
        Oh(e.alternate, e), e = e.return;
      Oe = null;
    }
  }
  function ma(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, kb(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), vs(), Xe = e, Oe = l = kn(e.current, null), Me = t, qe = 0, Yt = null, Wn = !1, fa = Zt(e, t), ds = !1, da = tn = hs = _l = el = Pe = 0, Ct = br = null, ps = !1, (t & 8) !== 0 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var o = 31 - be(r), c = 1 << o;
        t |= e[o], r &= ~c;
      }
    return Bn = t, si(), l;
  }
  function $h(e, t) {
    Ae = null, A.H = _i, t === tr || t === bi ? (t = md(), qe = 3) : t === dd ? (t = md(), qe = 4) : qe = t === gh ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Yt = t, Oe === null && (Pe = 1, Mi(
      e,
      Jt(t, e.current)
    ));
  }
  function Wh() {
    var e = A.H;
    return A.H = _i, e === null ? _i : e;
  }
  function ep() {
    var e = A.A;
    return A.A = rb, e;
  }
  function xs() {
    Pe = 4, Wn || (Me & 4194048) !== Me && en.current !== null || (fa = !0), (el & 134217727) === 0 && (_l & 134217727) === 0 || Xe === null || ll(
      Xe,
      Me,
      tn,
      !1
    );
  }
  function Ss(e, t, l) {
    var r = He;
    He |= 2;
    var o = Wh(), c = ep();
    (Xe !== e || Me !== t) && (qi = null, ma(e, t)), t = !1;
    var g = Pe;
    e: do
      try {
        if (qe !== 0 && Oe !== null) {
          var v = Oe, T = Yt;
          switch (qe) {
            case 8:
              vs(), g = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              en.current === null && (t = !0);
              var z = qe;
              if (qe = 0, Yt = null, ga(e, v, T, z), l && fa) {
                g = 0;
                break e;
              }
              break;
            default:
              z = qe, qe = 0, Yt = null, ga(e, v, T, z);
          }
        }
        ob(), g = Pe;
        break;
      } catch (q) {
        $h(e, q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, _n = El = null, He = r, A.H = o, A.A = c, Oe === null && (Xe = null, Me = 0, si()), g;
  }
  function ob() {
    for (; Oe !== null; ) tp(Oe);
  }
  function sb(e, t) {
    var l = He;
    He |= 2;
    var r = Wh(), o = ep();
    Xe !== e || Me !== t ? (qi = null, Hi = Ut() + 500, ma(e, t)) : fa = Zt(
      e,
      t
    );
    e: do
      try {
        if (qe !== 0 && Oe !== null) {
          t = Oe;
          var c = Yt;
          t: switch (qe) {
            case 1:
              qe = 0, Yt = null, ga(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (hd(c)) {
                qe = 0, Yt = null, np(t);
                break;
              }
              t = function() {
                qe !== 2 && qe !== 9 || Xe !== e || (qe = 7), yn(e);
              }, c.then(t, t);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              hd(c) ? (qe = 0, Yt = null, np(t)) : (qe = 0, Yt = null, ga(e, t, c, 7));
              break;
            case 5:
              var g = null;
              switch (Oe.tag) {
                case 26:
                  g = Oe.memoizedState;
                case 5:
                case 27:
                  var v = Oe;
                  if (!g || jp(g)) {
                    qe = 0, Yt = null;
                    var T = v.sibling;
                    if (T !== null) Oe = T;
                    else {
                      var z = v.return;
                      z !== null ? (Oe = z, Yi(z)) : Oe = null;
                    }
                    break t;
                  }
              }
              qe = 0, Yt = null, ga(e, t, c, 5);
              break;
            case 6:
              qe = 0, Yt = null, ga(e, t, c, 6);
              break;
            case 8:
              vs(), Pe = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        cb();
        break;
      } catch (q) {
        $h(e, q);
      }
    while (!0);
    return _n = El = null, A.H = r, A.A = o, He = l, Oe !== null ? 0 : (Xe = null, Me = 0, si(), Pe);
  }
  function cb() {
    for (; Oe !== null && !Ir(); )
      tp(Oe);
  }
  function tp(e) {
    var t = _h(e.alternate, e, Bn);
    e.memoizedProps = e.pendingProps, t === null ? Yi(e) : Oe = t;
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
        Bo(t);
      default:
        Oh(l, t), t = Oe = ld(t, Bn), t = _h(l, t, Bn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Yi(e) : Oe = t;
  }
  function ga(e, t, l, r) {
    _n = El = null, Bo(t), ua = null, cr = 0;
    var o = t.return;
    try {
      if (W0(
        e,
        o,
        t,
        l,
        Me
      )) {
        Pe = 1, Mi(
          e,
          Jt(l, e.current)
        ), Oe = null;
        return;
      }
    } catch (c) {
      if (o !== null) throw Oe = o, c;
      Pe = 1, Mi(
        e,
        Jt(l, e.current)
      ), Oe = null;
      return;
    }
    t.flags & 32768 ? (Be || r === 1 ? e = !0 : fa || (Me & 536870912) !== 0 ? e = !1 : (Wn = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = en.current, r !== null && r.tag === 13 && (r.flags |= 16384))), lp(t, e)) : Yi(t);
  }
  function Yi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        lp(
          t,
          Wn
        );
        return;
      }
      e = t.return;
      var l = tb(
        t.alternate,
        t,
        Bn
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
      var l = nb(e.alternate, e);
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
  function ap(e, t, l, r, o, c, g, v, T) {
    e.cancelPendingCommit = null;
    do
      Gi();
    while (ht !== 0);
    if ((He & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (c = t.lanes | t.childLanes, c |= co, Yy(
        e,
        l,
        c,
        g,
        v,
        T
      ), e === Xe && (Oe = Xe = null, Me = 0), ha = t, nl = e, pa = l, gs = c, ys = o, Fh = r, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, pb(Bl, function() {
        return sp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
        r = A.T, A.T = null, o = Q.p, Q.p = 2, g = He, He |= 4;
        try {
          lb(e, t, l);
        } finally {
          He = g, Q.p = o, A.T = r;
        }
      }
      ht = 1, rp(), ip(), up();
    }
  }
  function rp() {
    if (ht === 1) {
      ht = 0;
      var e = nl, t = ha, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = A.T, A.T = null;
        var r = Q.p;
        Q.p = 2;
        var o = He;
        He |= 4;
        try {
          Vh(t, e);
          var c = Ms, g = Zf(e.containerInfo), v = c.focusedElem, T = c.selectionRange;
          if (g !== v && v && v.ownerDocument && Kf(
            v.ownerDocument.documentElement,
            v
          )) {
            if (T !== null && ro(v)) {
              var z = T.start, q = T.end;
              if (q === void 0 && (q = z), "selectionStart" in v)
                v.selectionStart = z, v.selectionEnd = Math.min(
                  q,
                  v.value.length
                );
              else {
                var X = v.ownerDocument || document, N = X && X.defaultView || window;
                if (N.getSelection) {
                  var M = N.getSelection(), ve = v.textContent.length, ge = Math.min(T.start, ve), Ge = T.end === void 0 ? ge : Math.min(T.end, ve);
                  !M.extend && ge > Ge && (g = Ge, Ge = ge, ge = g);
                  var C = Xf(
                    v,
                    ge
                  ), k = Xf(
                    v,
                    Ge
                  );
                  if (C && k && (M.rangeCount !== 1 || M.anchorNode !== C.node || M.anchorOffset !== C.offset || M.focusNode !== k.node || M.focusOffset !== k.offset)) {
                    var R = X.createRange();
                    R.setStart(C.node, C.offset), M.removeAllRanges(), ge > Ge ? (M.addRange(R), M.extend(k.node, k.offset)) : (R.setEnd(k.node, k.offset), M.addRange(R));
                  }
                }
              }
            }
            for (X = [], M = v; M = M.parentNode; )
              M.nodeType === 1 && X.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < X.length; v++) {
              var G = X[v];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          tu = !!Ns, Ms = Ns = null;
        } finally {
          He = o, Q.p = r, A.T = l;
        }
      }
      e.current = t, ht = 2;
    }
  }
  function ip() {
    if (ht === 2) {
      ht = 0;
      var e = nl, t = ha, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = A.T, A.T = null;
        var r = Q.p;
        Q.p = 2;
        var o = He;
        He |= 4;
        try {
          jh(e, t.alternate, t);
        } finally {
          He = o, Q.p = r, A.T = l;
        }
      }
      ht = 3;
    }
  }
  function up() {
    if (ht === 4 || ht === 3) {
      ht = 0, Jr();
      var e = nl, t = ha, l = pa, r = Fh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ht = 5 : (ht = 0, ha = nl = null, op(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (tl = null), Lu(l), t = t.stateNode, Z && typeof Z.onCommitFiberRoot == "function")
        try {
          Z.onCommitFiberRoot(
            H,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        t = A.T, o = Q.p, Q.p = 2, A.T = null;
        try {
          for (var c = e.onRecoverableError, g = 0; g < r.length; g++) {
            var v = r[g];
            c(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          A.T = t, Q.p = o;
        }
      }
      (pa & 3) !== 0 && Gi(), yn(e), o = e.pendingLanes, (l & 4194090) !== 0 && (o & 42) !== 0 ? e === bs ? vr++ : (vr = 0, bs = e) : vr = 0, xr(0);
    }
  }
  function op(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Wa(t)));
  }
  function Gi(e) {
    return rp(), ip(), up(), sp();
  }
  function sp() {
    if (ht !== 5) return !1;
    var e = nl, t = gs;
    gs = 0;
    var l = Lu(pa), r = A.T, o = Q.p;
    try {
      Q.p = 32 > l ? 32 : l, A.T = null, l = ys, ys = null;
      var c = nl, g = pa;
      if (ht = 0, ha = nl = null, pa = 0, (He & 6) !== 0) throw Error(u(331));
      var v = He;
      if (He |= 4, Kh(c.current), Gh(
        c,
        c.current,
        g,
        l
      ), He = v, xr(0, !1), Z && typeof Z.onPostCommitFiberRoot == "function")
        try {
          Z.onPostCommitFiberRoot(H, c);
        } catch {
        }
      return !0;
    } finally {
      Q.p = o, A.T = r, op(e, t);
    }
  }
  function cp(e, t, l) {
    t = Jt(l, t), t = Jo(e.stateNode, t, 2), e = Kn(e, t, 2), e !== null && (ja(e, 2), yn(e));
  }
  function Qe(e, t, l) {
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
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tl === null || !tl.has(r))) {
            e = Jt(l, e), l = ph(2), r = Kn(t, l, 2), r !== null && (mh(
              l,
              r,
              t,
              e
            ), ja(r, 2), yn(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function Es(e, t, l) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ib();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else
      o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(l) || (ds = !0, o.add(l), e = fb.bind(null, e, t, l), t.then(e, e));
  }
  function fb(e, t, l) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Xe === e && (Me & l) === l && (Pe === 4 || Pe === 3 && (Me & 62914560) === Me && 300 > Ut() - ms ? (He & 2) === 0 && ma(e, 0) : hs |= l, da === Me && (da = 0)), yn(e);
  }
  function fp(e, t) {
    t === 0 && (t = uf()), e = Pl(e, t), e !== null && (ja(e, t), yn(e));
  }
  function db(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), fp(e, l);
  }
  function hb(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (l = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), fp(e, l);
  }
  function pb(e, t) {
    return Ma(e, t);
  }
  var Qi = null, ya = null, ws = !1, Xi = !1, Ts = !1, Rl = 0;
  function yn(e) {
    e !== ya && e.next === null && (ya === null ? Qi = ya = e : ya = ya.next = e), Xi = !0, ws || (ws = !0, gb());
  }
  function xr(e, t) {
    if (!Ts && Xi) {
      Ts = !0;
      do
        for (var l = !1, r = Qi; r !== null; ) {
          if (e !== 0) {
            var o = r.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var g = r.suspendedLanes, v = r.pingedLanes;
              c = (1 << 31 - be(42 | e) + 1) - 1, c &= o & ~(g & ~v), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (l = !0, mp(r, c));
          } else
            c = Me, c = ut(
              r,
              r === Xe ? c : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (c & 3) === 0 || Zt(r, c) || (l = !0, mp(r, c));
          r = r.next;
        }
      while (l);
      Ts = !1;
    }
  }
  function mb() {
    dp();
  }
  function dp() {
    Xi = ws = !1;
    var e = 0;
    Rl !== 0 && (Tb() && (e = Rl), Rl = 0);
    for (var t = Ut(), l = null, r = Qi; r !== null; ) {
      var o = r.next, c = hp(r, t);
      c === 0 ? (r.next = null, l === null ? Qi = o : l.next = o, o === null && (ya = l)) : (l = r, (e !== 0 || (c & 3) !== 0) && (Xi = !0)), r = o;
    }
    xr(e);
  }
  function hp(e, t) {
    for (var l = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var g = 31 - be(c), v = 1 << g, T = o[g];
      T === -1 ? ((v & l) === 0 || (v & r) !== 0) && (o[g] = rn(v, t)) : T <= t && (e.expiredLanes |= v), c &= ~v;
    }
    if (t = Xe, l = Me, l = ut(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r = e.callbackNode, l === 0 || e === t && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null)
      return r !== null && r !== null && Da(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Zt(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (r !== null && Da(r), Lu(l)) {
        case 2:
        case 8:
          l = Ba;
          break;
        case 32:
          l = Bl;
          break;
        case 268435456:
          l = Pr;
          break;
        default:
          l = Bl;
      }
      return r = pp.bind(null, e), l = Ma(l, r), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return r !== null && r !== null && Da(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function pp(e, t) {
    if (ht !== 0 && ht !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Gi() && e.callbackNode !== l)
      return null;
    var r = Me;
    return r = ut(
      e,
      e === Xe ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r === 0 ? null : (Jh(e, r, t), hp(e, Ut()), e.callbackNode != null && e.callbackNode === l ? pp.bind(null, e) : null);
  }
  function mp(e, t) {
    if (Gi()) return null;
    Jh(e, t, !0);
  }
  function gb() {
    Ab(function() {
      (He & 6) !== 0 ? Ma(
        Ua,
        mb
      ) : dp();
    });
  }
  function ks() {
    return Rl === 0 && (Rl = rf()), Rl;
  }
  function gp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ni("" + e);
  }
  function yp(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function yb(e, t, l, r, o) {
    if (t === "submit" && l && l.stateNode === o) {
      var c = gp(
        (o[wt] || null).action
      ), g = r.submitter;
      g && (t = (t = g[wt] || null) ? gp(t.formAction) : g.getAttribute("formAction"), t !== null && (c = t, g = null));
      var v = new ii(
        "action",
        "action",
        null,
        r,
        o
      );
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (r.defaultPrevented) {
                if (Rl !== 0) {
                  var T = g ? yp(o, g) : new FormData(o);
                  Xo(
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
                typeof c == "function" && (v.preventDefault(), T = g ? yp(o, g) : new FormData(o), Xo(
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
  for (var As = 0; As < so.length; As++) {
    var Cs = so[As], bb = Cs.toLowerCase(), vb = Cs[0].toUpperCase() + Cs.slice(1);
    un(
      bb,
      "on" + vb
    );
  }
  un(Jf, "onAnimationEnd"), un(Pf, "onAnimationIteration"), un($f, "onAnimationStart"), un("dblclick", "onDoubleClick"), un("focusin", "onFocus"), un("focusout", "onBlur"), un(B0, "onTransitionRun"), un(j0, "onTransitionStart"), un(L0, "onTransitionCancel"), un(Wf, "onTransitionEnd"), Vl("onMouseEnter", ["mouseout", "mouseover"]), Vl("onMouseLeave", ["mouseout", "mouseover"]), Vl("onPointerEnter", ["pointerout", "pointerover"]), Vl("onPointerLeave", ["pointerout", "pointerover"]), hl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), hl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), hl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), hl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), hl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), hl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), xb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sr)
  );
  function bp(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var r = e[l], o = r.event;
      r = r.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var g = r.length - 1; 0 <= g; g--) {
            var v = r[g], T = v.instance, z = v.currentTarget;
            if (v = v.listener, T !== c && o.isPropagationStopped())
              break e;
            c = v, o.currentTarget = z;
            try {
              c(o);
            } catch (q) {
              Ni(q);
            }
            o.currentTarget = null, c = T;
          }
        else
          for (g = 0; g < r.length; g++) {
            if (v = r[g], T = v.instance, z = v.currentTarget, v = v.listener, T !== c && o.isPropagationStopped())
              break e;
            c = v, o.currentTarget = z;
            try {
              c(o);
            } catch (q) {
              Ni(q);
            }
            o.currentTarget = null, c = T;
          }
      }
    }
  }
  function ze(e, t) {
    var l = t[Hu];
    l === void 0 && (l = t[Hu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    l.has(r) || (vp(t, e, 2, !1), l.add(r));
  }
  function _s(e, t, l) {
    var r = 0;
    t && (r |= 4), vp(
      l,
      e,
      r,
      t
    );
  }
  var Ki = "_reactListening" + Math.random().toString(36).slice(2);
  function Rs(e) {
    if (!e[Ki]) {
      e[Ki] = !0, df.forEach(function(l) {
        l !== "selectionchange" && (xb.has(l) || _s(l, !1, e), _s(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ki] || (t[Ki] = !0, _s("selectionchange", !1, t));
    }
  }
  function vp(e, t, l, r) {
    switch (Gp(t)) {
      case 2:
        var o = Zb;
        break;
      case 8:
        o = Fb;
        break;
      default:
        o = Gs;
    }
    l = o.bind(
      null,
      t,
      l,
      e
    ), o = void 0, !Ju || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, l, !0) : o !== void 0 ? e.addEventListener(t, l, {
      passive: o
    }) : e.addEventListener(t, l, !1);
  }
  function Os(e, t, l, r, o) {
    var c = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (; ; ) {
        if (r === null) return;
        var g = r.tag;
        if (g === 3 || g === 4) {
          var v = r.stateNode.containerInfo;
          if (v === o) break;
          if (g === 4)
            for (g = r.return; g !== null; ) {
              var T = g.tag;
              if ((T === 3 || T === 4) && g.stateNode.containerInfo === o)
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (g = Ll(v), g === null) return;
            if (T = g.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              r = c = g;
              continue e;
            }
            v = v.parentNode;
          }
        }
        r = r.return;
      }
    Af(function() {
      var z = c, q = Fu(l), X = [];
      e: {
        var N = ed.get(e);
        if (N !== void 0) {
          var M = ii, ve = e;
          switch (e) {
            case "keypress":
              if (ai(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = p0;
              break;
            case "focusin":
              ve = "focus", M = eo;
              break;
            case "focusout":
              ve = "blur", M = eo;
              break;
            case "beforeblur":
            case "afterblur":
              M = eo;
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
              M = n0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = y0;
              break;
            case Jf:
            case Pf:
            case $f:
              M = r0;
              break;
            case Wf:
              M = v0;
              break;
            case "scroll":
            case "scrollend":
              M = e0;
              break;
            case "wheel":
              M = S0;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = u0;
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
              M = w0;
          }
          var ge = (t & 4) !== 0, Ge = !ge && (e === "scroll" || e === "scrollend"), C = ge ? N !== null ? N + "Capture" : null : N;
          ge = [];
          for (var k = z, R; k !== null; ) {
            var G = k;
            if (R = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || R === null || C === null || (G = qa(k, C), G != null && ge.push(
              Er(k, G, R)
            )), Ge) break;
            k = k.return;
          }
          0 < ge.length && (N = new M(
            N,
            ve,
            null,
            l,
            q
          ), X.push({ event: N, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", N && l !== Zu && (ve = l.relatedTarget || l.fromElement) && (Ll(ve) || ve[jl]))
            break e;
          if ((M || N) && (N = q.window === q ? q : (N = q.ownerDocument) ? N.defaultView || N.parentWindow : window, M ? (ve = l.relatedTarget || l.toElement, M = z, ve = ve ? Ll(ve) : null, ve !== null && (Ge = f(ve), ge = ve.tag, ve !== Ge || ge !== 5 && ge !== 27 && ge !== 6) && (ve = null)) : (M = null, ve = z), M !== ve)) {
            if (ge = Rf, G = "onMouseLeave", C = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (ge = zf, G = "onPointerLeave", C = "onPointerEnter", k = "pointer"), Ge = M == null ? N : Ha(M), R = ve == null ? N : Ha(ve), N = new ge(
              G,
              k + "leave",
              M,
              l,
              q
            ), N.target = Ge, N.relatedTarget = R, G = null, Ll(q) === z && (ge = new ge(
              C,
              k + "enter",
              ve,
              l,
              q
            ), ge.target = R, ge.relatedTarget = Ge, G = ge), Ge = G, M && ve)
              t: {
                for (ge = M, C = ve, k = 0, R = ge; R; R = ba(R))
                  k++;
                for (R = 0, G = C; G; G = ba(G))
                  R++;
                for (; 0 < k - R; )
                  ge = ba(ge), k--;
                for (; 0 < R - k; )
                  C = ba(C), R--;
                for (; k--; ) {
                  if (ge === C || C !== null && ge === C.alternate)
                    break t;
                  ge = ba(ge), C = ba(C);
                }
                ge = null;
              }
            else ge = null;
            M !== null && xp(
              X,
              N,
              M,
              ge,
              !1
            ), ve !== null && Ge !== null && xp(
              X,
              Ge,
              ve,
              ge,
              !0
            );
          }
        }
        e: {
          if (N = z ? Ha(z) : window, M = N.nodeName && N.nodeName.toLowerCase(), M === "select" || M === "input" && N.type === "file")
            var oe = Hf;
          else if (jf(N))
            if (qf)
              oe = M0;
            else {
              oe = z0;
              var Re = O0;
            }
          else
            M = N.nodeName, !M || M.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? z && Ku(z.elementType) && (oe = Hf) : oe = N0;
          if (oe && (oe = oe(e, z))) {
            Lf(
              X,
              oe,
              l,
              q
            );
            break e;
          }
          Re && Re(e, N, z), e === "focusout" && z && N.type === "number" && z.memoizedProps.value != null && Xu(N, "number", N.value);
        }
        switch (Re = z ? Ha(z) : window, e) {
          case "focusin":
            (jf(Re) || Re.contentEditable === "true") && (Fl = Re, io = z, Fa = null);
            break;
          case "focusout":
            Fa = io = Fl = null;
            break;
          case "mousedown":
            uo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            uo = !1, Ff(X, l, q);
            break;
          case "selectionchange":
            if (U0) break;
          case "keydown":
          case "keyup":
            Ff(X, l, q);
        }
        var he;
        if (no)
          e: {
            switch (e) {
              case "compositionstart":
                var ye = "onCompositionStart";
                break e;
              case "compositionend":
                ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ye = "onCompositionUpdate";
                break e;
            }
            ye = void 0;
          }
        else
          Zl ? Uf(e, l) && (ye = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ye = "onCompositionStart");
        ye && (Nf && l.locale !== "ko" && (Zl || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Zl && (he = Cf()) : (Yn = q, Pu = "value" in Yn ? Yn.value : Yn.textContent, Zl = !0)), Re = Zi(z, ye), 0 < Re.length && (ye = new Of(
          ye,
          e,
          null,
          l,
          q
        ), X.push({ event: ye, listeners: Re }), he ? ye.data = he : (he = Bf(l), he !== null && (ye.data = he)))), (he = k0 ? A0(e, l) : C0(e, l)) && (ye = Zi(z, "onBeforeInput"), 0 < ye.length && (Re = new Of(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          q
        ), X.push({
          event: Re,
          listeners: ye
        }), Re.data = he)), yb(
          X,
          e,
          z,
          l,
          q
        );
      }
      bp(X, t);
    });
  }
  function Er(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Zi(e, t) {
    for (var l = t + "Capture", r = []; e !== null; ) {
      var o = e, c = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = qa(e, l), o != null && r.unshift(
        Er(e, o, c)
      ), o = qa(e, t), o != null && r.push(
        Er(e, o, c)
      )), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function ba(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xp(e, t, l, r, o) {
    for (var c = t._reactName, g = []; l !== null && l !== r; ) {
      var v = l, T = v.alternate, z = v.stateNode;
      if (v = v.tag, T !== null && T === r) break;
      v !== 5 && v !== 26 && v !== 27 || z === null || (T = z, o ? (z = qa(l, c), z != null && g.unshift(
        Er(l, z, T)
      )) : o || (z = qa(l, c), z != null && g.push(
        Er(l, z, T)
      ))), l = l.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var Sb = /\r\n?/g, Eb = /\u0000|\uFFFD/g;
  function Sp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sb, `
`).replace(Eb, "");
  }
  function Ep(e, t) {
    return t = Sp(t), Sp(e) === t;
  }
  function Fi() {
  }
  function Ye(e, t, l, r, o, c) {
    switch (l) {
      case "children":
        typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Ql(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Ql(e, "" + r);
        break;
      case "className":
        Wr(e, "class", r);
        break;
      case "tabIndex":
        Wr(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wr(e, l, r);
        break;
      case "style":
        Tf(e, r, c);
        break;
      case "data":
        if (t !== "object") {
          Wr(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(l);
          break;
        }
        r = ni("" + r), e.setAttribute(l, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
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
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(l);
          break;
        }
        r = ni("" + r), e.setAttribute(l, r);
        break;
      case "onClick":
        r != null && (e.onclick = Fi);
        break;
      case "onScroll":
        r != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        r != null && ze("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(u(61));
          if (l = r.__html, l != null) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
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
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = ni("" + r), e.setAttributeNS(
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
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(l, "" + r) : e.removeAttribute(l);
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
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        r === !0 ? e.setAttribute(l, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(l, r) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(l, r) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(l) : e.setAttribute(l, r);
        break;
      case "popover":
        ze("beforetoggle", e), ze("toggle", e), $r(e, "popover", r);
        break;
      case "xlinkActuate":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        $r(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = $y.get(l) || l, $r(e, l, r));
    }
  }
  function zs(e, t, l, r, o, c) {
    switch (l) {
      case "style":
        Tf(e, r, c);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(u(61));
          if (l = r.__html, l != null) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof r == "string" ? Ql(e, r) : (typeof r == "number" || typeof r == "bigint") && Ql(e, "" + r);
        break;
      case "onScroll":
        r != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        r != null && ze("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = Fi);
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
            if (l[0] === "o" && l[1] === "n" && (o = l.endsWith("Capture"), t = l.slice(2, o ? l.length - 7 : void 0), c = e[wt] || null, c = c != null ? c[l] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof r == "function")) {
              typeof c != "function" && c !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, r, o);
              break e;
            }
            l in e ? e[l] = r : r === !0 ? e.setAttribute(l, "") : $r(e, l, r);
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
        var r = !1, o = !1, c;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var g = l[c];
            if (g != null)
              switch (c) {
                case "src":
                  r = !0;
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
        o && Ye(e, t, "srcSet", l.srcSet, l, null), r && Ye(e, t, "src", l.src, l, null);
        return;
      case "input":
        ze("invalid", e);
        var v = c = g = o = null, T = null, z = null;
        for (r in l)
          if (l.hasOwnProperty(r)) {
            var q = l[r];
            if (q != null)
              switch (r) {
                case "name":
                  o = q;
                  break;
                case "type":
                  g = q;
                  break;
                case "checked":
                  T = q;
                  break;
                case "defaultChecked":
                  z = q;
                  break;
                case "value":
                  c = q;
                  break;
                case "defaultValue":
                  v = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(u(137, t));
                  break;
                default:
                  Ye(e, t, r, q, l, null);
              }
          }
        xf(
          e,
          c,
          v,
          T,
          z,
          g,
          o,
          !1
        ), ei(e);
        return;
      case "select":
        ze("invalid", e), r = g = c = null;
        for (o in l)
          if (l.hasOwnProperty(o) && (v = l[o], v != null))
            switch (o) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                g = v;
                break;
              case "multiple":
                r = v;
              default:
                Ye(e, t, o, v, l, null);
            }
        t = c, l = g, e.multiple = !!r, t != null ? Gl(e, !!r, t, !1) : l != null && Gl(e, !!r, l, !0);
        return;
      case "textarea":
        ze("invalid", e), c = o = r = null;
        for (g in l)
          if (l.hasOwnProperty(g) && (v = l[g], v != null))
            switch (g) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                o = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(u(91));
                break;
              default:
                Ye(e, t, g, v, l, null);
            }
        Ef(e, r, o, c), ei(e);
        return;
      case "option":
        for (T in l)
          if (l.hasOwnProperty(T) && (r = l[T], r != null))
            switch (T) {
              case "selected":
                e.selected = r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                Ye(e, t, T, r, l, null);
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
        for (r = 0; r < Sr.length; r++)
          ze(Sr[r], e);
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
        for (z in l)
          if (l.hasOwnProperty(z) && (r = l[z], r != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Ye(e, t, z, r, l, null);
            }
        return;
      default:
        if (Ku(t)) {
          for (q in l)
            l.hasOwnProperty(q) && (r = l[q], r !== void 0 && zs(
              e,
              t,
              q,
              r,
              l,
              void 0
            ));
          return;
        }
    }
    for (v in l)
      l.hasOwnProperty(v) && (r = l[v], r != null && Ye(e, t, v, r, l, null));
  }
  function wb(e, t, l, r) {
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
        var o = null, c = null, g = null, v = null, T = null, z = null, q = null;
        for (M in l) {
          var X = l[M];
          if (l.hasOwnProperty(M) && X != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = X;
              default:
                r.hasOwnProperty(M) || Ye(e, t, M, null, r, X);
            }
        }
        for (var N in r) {
          var M = r[N];
          if (X = l[N], r.hasOwnProperty(N) && (M != null || X != null))
            switch (N) {
              case "type":
                c = M;
                break;
              case "name":
                o = M;
                break;
              case "checked":
                z = M;
                break;
              case "defaultChecked":
                q = M;
                break;
              case "value":
                g = M;
                break;
              case "defaultValue":
                v = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(u(137, t));
                break;
              default:
                M !== X && Ye(
                  e,
                  t,
                  N,
                  M,
                  r,
                  X
                );
            }
        }
        Qu(
          e,
          g,
          v,
          T,
          z,
          q,
          c,
          o
        );
        return;
      case "select":
        M = g = v = N = null;
        for (c in l)
          if (T = l[c], l.hasOwnProperty(c) && T != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                M = T;
              default:
                r.hasOwnProperty(c) || Ye(
                  e,
                  t,
                  c,
                  null,
                  r,
                  T
                );
            }
        for (o in r)
          if (c = r[o], T = l[o], r.hasOwnProperty(o) && (c != null || T != null))
            switch (o) {
              case "value":
                N = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                g = c;
              default:
                c !== T && Ye(
                  e,
                  t,
                  o,
                  c,
                  r,
                  T
                );
            }
        t = v, l = g, r = M, N != null ? Gl(e, !!l, N, !1) : !!r != !!l && (t != null ? Gl(e, !!l, t, !0) : Gl(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = N = null;
        for (v in l)
          if (o = l[v], l.hasOwnProperty(v) && o != null && !r.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ye(e, t, v, null, r, o);
            }
        for (g in r)
          if (o = r[g], c = l[g], r.hasOwnProperty(g) && (o != null || c != null))
            switch (g) {
              case "value":
                N = o;
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
                o !== c && Ye(e, t, g, o, r, c);
            }
        Sf(e, N, M);
        return;
      case "option":
        for (var ve in l)
          if (N = l[ve], l.hasOwnProperty(ve) && N != null && !r.hasOwnProperty(ve))
            switch (ve) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ye(
                  e,
                  t,
                  ve,
                  null,
                  r,
                  N
                );
            }
        for (T in r)
          if (N = r[T], M = l[T], r.hasOwnProperty(T) && N !== M && (N != null || M != null))
            switch (T) {
              case "selected":
                e.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Ye(
                  e,
                  t,
                  T,
                  N,
                  r,
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
        for (var ge in l)
          N = l[ge], l.hasOwnProperty(ge) && N != null && !r.hasOwnProperty(ge) && Ye(e, t, ge, null, r, N);
        for (z in r)
          if (N = r[z], M = l[z], r.hasOwnProperty(z) && N !== M && (N != null || M != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(u(137, t));
                break;
              default:
                Ye(
                  e,
                  t,
                  z,
                  N,
                  r,
                  M
                );
            }
        return;
      default:
        if (Ku(t)) {
          for (var Ge in l)
            N = l[Ge], l.hasOwnProperty(Ge) && N !== void 0 && !r.hasOwnProperty(Ge) && zs(
              e,
              t,
              Ge,
              void 0,
              r,
              N
            );
          for (q in r)
            N = r[q], M = l[q], !r.hasOwnProperty(q) || N === M || N === void 0 && M === void 0 || zs(
              e,
              t,
              q,
              N,
              r,
              M
            );
          return;
        }
    }
    for (var C in l)
      N = l[C], l.hasOwnProperty(C) && N != null && !r.hasOwnProperty(C) && Ye(e, t, C, null, r, N);
    for (X in r)
      N = r[X], M = l[X], !r.hasOwnProperty(X) || N === M || N == null && M == null || Ye(e, t, X, N, r, M);
  }
  var Ns = null, Ms = null;
  function Ii(e) {
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
  function Ds(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Us = null;
  function Tb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Us ? !1 : (Us = e, !0) : (Us = null, !1);
  }
  var kp = typeof setTimeout == "function" ? setTimeout : void 0, kb = typeof clearTimeout == "function" ? clearTimeout : void 0, Ap = typeof Promise == "function" ? Promise : void 0, Ab = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ap < "u" ? function(e) {
    return Ap.resolve(null).then(e).catch(Cb);
  } : kp;
  function Cb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function al(e) {
    return e === "head";
  }
  function Cp(e, t) {
    var l = t, r = 0, o = 0;
    do {
      var c = l.nextSibling;
      if (e.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (0 < r && 8 > r) {
            l = r;
            var g = e.ownerDocument;
            if (l & 1 && wr(g.documentElement), l & 2 && wr(g.body), l & 4)
              for (l = g.head, wr(l), g = l.firstChild; g; ) {
                var v = g.nextSibling, T = g.nodeName;
                g[La] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && g.rel.toLowerCase() === "stylesheet" || l.removeChild(g), g = v;
              }
          }
          if (o === 0) {
            e.removeChild(c), zr(t);
            return;
          }
          o--;
        } else
          l === "$" || l === "$?" || l === "$!" ? o++ : r = l.charCodeAt(0) - 48;
      else r = 0;
      l = c;
    } while (l);
    zr(t);
  }
  function Bs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bs(l), qu(l);
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
  function _b(e, t, l, r) {
    for (; e.nodeType === 1; ) {
      var o = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (r) {
        if (!e[La])
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
      if (e = sn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Rb(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = sn(e.nextSibling), e === null)) return null;
    return e;
  }
  function js(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function Ob(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete")
      t();
    else {
      var r = function() {
        t(), l.removeEventListener("DOMContentLoaded", r);
      };
      l.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    }
  }
  function sn(e) {
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
  var Ls = null;
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
    switch (t = Ii(l), e) {
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
  function wr(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    qu(e);
  }
  var nn = /* @__PURE__ */ new Map(), Op = /* @__PURE__ */ new Set();
  function Ji(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var jn = Q.d;
  Q.d = {
    f: zb,
    r: Nb,
    D: Mb,
    C: Db,
    L: Ub,
    m: Bb,
    X: Lb,
    S: jb,
    M: Hb
  };
  function zb() {
    var e = jn.f(), t = Vi();
    return e || t;
  }
  function Nb(e) {
    var t = Hl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Jd(t) : jn.r(e);
  }
  var va = typeof document > "u" ? null : document;
  function zp(e, t, l) {
    var r = va;
    if (r && typeof t == "string" && t) {
      var o = It(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof l == "string" && (o += '[crossorigin="' + l + '"]'), Op.has(o) || (Op.add(o), e = { rel: e, crossOrigin: l, href: t }, r.querySelector(o) === null && (t = r.createElement("link"), pt(t, "link", e), ot(t), r.head.appendChild(t)));
    }
  }
  function Mb(e) {
    jn.D(e), zp("dns-prefetch", e, null);
  }
  function Db(e, t) {
    jn.C(e, t), zp("preconnect", e, t);
  }
  function Ub(e, t, l) {
    jn.L(e, t, l);
    var r = va;
    if (r && e && t) {
      var o = 'link[rel="preload"][as="' + It(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (o += '[imagesrcset="' + It(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (o += '[imagesizes="' + It(
        l.imageSizes
      ) + '"]')) : o += '[href="' + It(e) + '"]';
      var c = o;
      switch (t) {
        case "style":
          c = xa(e);
          break;
        case "script":
          c = Sa(e);
      }
      nn.has(c) || (e = m(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), nn.set(c, e), r.querySelector(o) !== null || t === "style" && r.querySelector(Tr(c)) || t === "script" && r.querySelector(kr(c)) || (t = r.createElement("link"), pt(t, "link", e), ot(t), r.head.appendChild(t)));
    }
  }
  function Bb(e, t) {
    jn.m(e, t);
    var l = va;
    if (l && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + It(r) + '"][href="' + It(e) + '"]', c = o;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Sa(e);
      }
      if (!nn.has(c) && (e = m({ rel: "modulepreload", href: e }, t), nn.set(c, e), l.querySelector(o) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(kr(c)))
              return;
        }
        r = l.createElement("link"), pt(r, "link", e), ot(r), l.head.appendChild(r);
      }
    }
  }
  function jb(e, t, l) {
    jn.S(e, t, l);
    var r = va;
    if (r && e) {
      var o = ql(r).hoistableStyles, c = xa(e);
      t = t || "default";
      var g = o.get(c);
      if (!g) {
        var v = { loading: 0, preload: null };
        if (g = r.querySelector(
          Tr(c)
        ))
          v.loading = 5;
        else {
          e = m(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = nn.get(c)) && Hs(e, l);
          var T = g = r.createElement("link");
          ot(T), pt(T, "link", e), T._p = new Promise(function(z, q) {
            T.onload = z, T.onerror = q;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Pi(g, t, r);
        }
        g = {
          type: "stylesheet",
          instance: g,
          count: 1,
          state: v
        }, o.set(c, g);
      }
    }
  }
  function Lb(e, t) {
    jn.X(e, t);
    var l = va;
    if (l && e) {
      var r = ql(l).hoistableScripts, o = Sa(e), c = r.get(o);
      c || (c = l.querySelector(kr(o)), c || (e = m({ src: e, async: !0 }, t), (t = nn.get(o)) && qs(e, t), c = l.createElement("script"), ot(c), pt(c, "link", e), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(o, c));
    }
  }
  function Hb(e, t) {
    jn.M(e, t);
    var l = va;
    if (l && e) {
      var r = ql(l).hoistableScripts, o = Sa(e), c = r.get(o);
      c || (c = l.querySelector(kr(o)), c || (e = m({ src: e, async: !0, type: "module" }, t), (t = nn.get(o)) && qs(e, t), c = l.createElement("script"), ot(c), pt(c, "link", e), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(o, c));
    }
  }
  function Np(e, t, l, r) {
    var o = (o = ie.current) ? Ji(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = xa(l.href), l = ql(
          o
        ).hoistableStyles, r = l.get(t), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = xa(l.href);
          var c = ql(
            o
          ).hoistableStyles, g = c.get(e);
          if (g || (o = o.ownerDocument || o, g = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, g), (c = o.querySelector(
            Tr(e)
          )) && !c._p && (g.instance = c, g.state.loading = 5), nn.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, nn.set(e, l), c || qb(
            o,
            e,
            l,
            g.state
          ))), t && r === null)
            throw Error(u(528, ""));
          return g;
        }
        if (t && r !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sa(l), l = ql(
          o
        ).hoistableScripts, r = l.get(t), r || (r = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function xa(e) {
    return 'href="' + It(e) + '"';
  }
  function Tr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Mp(e) {
    return m({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function qb(e, t, l, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
      return r.loading |= 1;
    }), t.addEventListener("error", function() {
      return r.loading |= 2;
    }), pt(t, "link", l), ot(t), e.head.appendChild(t));
  }
  function Sa(e) {
    return '[src="' + It(e) + '"]';
  }
  function kr(e) {
    return "script[async]" + e;
  }
  function Dp(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var r = e.querySelector(
            'style[data-href~="' + It(l.href) + '"]'
          );
          if (r)
            return t.instance = r, ot(r), r;
          var o = m({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return r = (e.ownerDocument || e).createElement(
            "style"
          ), ot(r), pt(r, "style", o), Pi(r, l.precedence, e), t.instance = r;
        case "stylesheet":
          o = xa(l.href);
          var c = e.querySelector(
            Tr(o)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ot(c), c;
          r = Mp(l), (o = nn.get(o)) && Hs(r, o), c = (e.ownerDocument || e).createElement("link"), ot(c);
          var g = c;
          return g._p = new Promise(function(v, T) {
            g.onload = v, g.onerror = T;
          }), pt(c, "link", r), t.state.loading |= 4, Pi(c, l.precedence, e), t.instance = c;
        case "script":
          return c = Sa(l.src), (o = e.querySelector(
            kr(c)
          )) ? (t.instance = o, ot(o), o) : (r = l, (o = nn.get(c)) && (r = m({}, l), qs(r, o)), e = e.ownerDocument || e, o = e.createElement("script"), ot(o), pt(o, "link", r), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, Pi(r, l.precedence, e));
    return t.instance;
  }
  function Pi(e, t, l) {
    for (var r = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = r.length ? r[r.length - 1] : null, c = o, g = 0; g < r.length; g++) {
      var v = r[g];
      if (v.dataset.precedence === t) c = v;
      else if (c !== o) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Hs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function qs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var $i = null;
  function Up(e, t, l) {
    if ($i === null) {
      var r = /* @__PURE__ */ new Map(), o = $i = /* @__PURE__ */ new Map();
      o.set(l, r);
    } else
      o = $i, r = o.get(l), r || (r = /* @__PURE__ */ new Map(), o.set(l, r));
    if (r.has(e)) return r;
    for (r.set(e, null), l = l.getElementsByTagName(e), o = 0; o < l.length; o++) {
      var c = l[o];
      if (!(c[La] || c[mt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = c.getAttribute(t) || "";
        g = e + g;
        var v = r.get(g);
        v ? v.push(c) : r.set(g, [c]);
      }
    }
    return r;
  }
  function Bp(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Vb(e, t, l) {
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
  function jp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ar = null;
  function Yb() {
  }
  function Gb(e, t, l) {
    if (Ar === null) throw Error(u(475));
    var r = Ar;
    if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var o = xa(l.href), c = e.querySelector(
          Tr(o)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (r.count++, r = Wi.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = c, ot(c);
          return;
        }
        c = e.ownerDocument || e, l = Mp(l), (o = nn.get(o)) && Hs(l, o), c = c.createElement("link"), ot(c);
        var g = c;
        g._p = new Promise(function(v, T) {
          g.onload = v, g.onerror = T;
        }), pt(c, "link", l), t.instance = c;
      }
      r.stylesheets === null && (r.stylesheets = /* @__PURE__ */ new Map()), r.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (r.count++, t = Wi.bind(r), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function Qb() {
    if (Ar === null) throw Error(u(475));
    var e = Ar;
    return e.stylesheets && e.count === 0 && Vs(e, e.stylesheets), 0 < e.count ? function(t) {
      var l = setTimeout(function() {
        if (e.stylesheets && Vs(e, e.stylesheets), e.unsuspend) {
          var r = e.unsuspend;
          e.unsuspend = null, r();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function Wi() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Vs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var eu = null;
  function Vs(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, eu = /* @__PURE__ */ new Map(), t.forEach(Xb, e), eu = null, Wi.call(e));
  }
  function Xb(e, t) {
    if (!(t.state.loading & 4)) {
      var l = eu.get(e);
      if (l) var r = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), eu.set(e, l);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < o.length; c++) {
          var g = o[c];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (l.set(g.dataset.precedence, g), r = g);
        }
        r && l.set(null, r);
      }
      o = t.instance, g = o.getAttribute("data-precedence"), c = l.get(g) || r, c === r && l.set(null, o), l.set(g, o), this.count++, r = Wi.bind(this), o.addEventListener("load", r), o.addEventListener("error", r), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Cr = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: L,
    _currentValue2: L,
    _threadCount: 0
  };
  function Kb(e, t, l, r, o, c, g, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bu(0), this.hiddenUpdates = Bu(null), this.identifierPrefix = r, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Lp(e, t, l, r, o, c, g, v, T, z, q, X) {
    return e = new Kb(
      e,
      t,
      l,
      g,
      v,
      T,
      z,
      X
    ), t = 1, c === !0 && (t |= 24), c = Ht(3, null, null, t), e.current = c, c.stateNode = e, t = Eo(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: r,
      isDehydrated: l,
      cache: t
    }, Ao(c), e;
  }
  function Hp(e) {
    return e ? (e = $l, e) : $l;
  }
  function qp(e, t, l, r, o, c) {
    o = Hp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Xn(t), r.payload = { element: l }, c = c === void 0 ? null : c, c !== null && (r.callback = c), l = Kn(e, r, t), l !== null && (Qt(l, e, t), lr(l, e, t));
  }
  function Vp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Ys(e, t) {
    Vp(e, t), (e = e.alternate) && Vp(e, t);
  }
  function Yp(e) {
    if (e.tag === 13) {
      var t = Pl(e, 67108864);
      t !== null && Qt(t, e, 67108864), Ys(e, 67108864);
    }
  }
  var tu = !0;
  function Zb(e, t, l, r) {
    var o = A.T;
    A.T = null;
    var c = Q.p;
    try {
      Q.p = 2, Gs(e, t, l, r);
    } finally {
      Q.p = c, A.T = o;
    }
  }
  function Fb(e, t, l, r) {
    var o = A.T;
    A.T = null;
    var c = Q.p;
    try {
      Q.p = 8, Gs(e, t, l, r);
    } finally {
      Q.p = c, A.T = o;
    }
  }
  function Gs(e, t, l, r) {
    if (tu) {
      var o = Qs(r);
      if (o === null)
        Os(
          e,
          t,
          r,
          nu,
          l
        ), Qp(e, r);
      else if (Jb(
        o,
        e,
        t,
        l,
        r
      ))
        r.stopPropagation();
      else if (Qp(e, r), t & 4 && -1 < Ib.indexOf(e)) {
        for (; o !== null; ) {
          var c = Hl(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var g = jt(c.pendingLanes);
                  if (g !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var T = 1 << 31 - be(g);
                      v.entanglements[1] |= T, g &= ~T;
                    }
                    yn(c), (He & 6) === 0 && (Hi = Ut() + 500, xr(0));
                  }
                }
                break;
              case 13:
                v = Pl(c, 2), v !== null && Qt(v, c, 2), Vi(), Ys(c, 2);
            }
          if (c = Qs(r), c === null && Os(
            e,
            t,
            r,
            nu,
            l
          ), c === o) break;
          o = c;
        }
        o !== null && r.stopPropagation();
      } else
        Os(
          e,
          t,
          r,
          null,
          l
        );
    }
  }
  function Qs(e) {
    return e = Fu(e), Xs(e);
  }
  var nu = null;
  function Xs(e) {
    if (nu = null, e = Ll(e), e !== null) {
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
    return nu = e, null;
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
        switch (Nu()) {
          case Ua:
            return 2;
          case Ba:
            return 8;
          case Bl:
          case Mu:
            return 32;
          case Pr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ks = !1, rl = null, il = null, ul = null, _r = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), ol = [], Ib = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Qp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        rl = null;
        break;
      case "dragenter":
      case "dragleave":
        il = null;
        break;
      case "mouseover":
      case "mouseout":
        ul = null;
        break;
      case "pointerover":
      case "pointerout":
        _r.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rr.delete(t.pointerId);
    }
  }
  function Or(e, t, l, r, o, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: r,
      nativeEvent: c,
      targetContainers: [o]
    }, t !== null && (t = Hl(t), t !== null && Yp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Jb(e, t, l, r, o) {
    switch (t) {
      case "focusin":
        return rl = Or(
          rl,
          e,
          t,
          l,
          r,
          o
        ), !0;
      case "dragenter":
        return il = Or(
          il,
          e,
          t,
          l,
          r,
          o
        ), !0;
      case "mouseover":
        return ul = Or(
          ul,
          e,
          t,
          l,
          r,
          o
        ), !0;
      case "pointerover":
        var c = o.pointerId;
        return _r.set(
          c,
          Or(
            _r.get(c) || null,
            e,
            t,
            l,
            r,
            o
          )
        ), !0;
      case "gotpointercapture":
        return c = o.pointerId, Rr.set(
          c,
          Or(
            Rr.get(c) || null,
            e,
            t,
            l,
            r,
            o
          )
        ), !0;
    }
    return !1;
  }
  function Xp(e) {
    var t = Ll(e.target);
    if (t !== null) {
      var l = f(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = d(l), t !== null) {
            e.blockedOn = t, Gy(e.priority, function() {
              if (l.tag === 13) {
                var r = Gt();
                r = ju(r);
                var o = Pl(l, r);
                o !== null && Qt(o, l, r), Ys(l, r);
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
  function lu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Qs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var r = new l.constructor(
          l.type,
          l
        );
        Zu = r, l.target.dispatchEvent(r), Zu = null;
      } else
        return t = Hl(l), t !== null && Yp(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Kp(e, t, l) {
    lu(e) && l.delete(t);
  }
  function Pb() {
    Ks = !1, rl !== null && lu(rl) && (rl = null), il !== null && lu(il) && (il = null), ul !== null && lu(ul) && (ul = null), _r.forEach(Kp), Rr.forEach(Kp);
  }
  function au(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ks || (Ks = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      Pb
    )));
  }
  var ru = null;
  function Zp(e) {
    ru !== e && (ru = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        ru === e && (ru = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], r = e[t + 1], o = e[t + 2];
          if (typeof r != "function") {
            if (Xs(r || l) === null)
              continue;
            break;
          }
          var c = Hl(l);
          c !== null && (e.splice(t, 3), t -= 3, Xo(
            c,
            {
              pending: !0,
              data: o,
              method: l.method,
              action: r
            },
            r,
            o
          ));
        }
      }
    ));
  }
  function zr(e) {
    function t(T) {
      return au(T, e);
    }
    rl !== null && au(rl, e), il !== null && au(il, e), ul !== null && au(ul, e), _r.forEach(t), Rr.forEach(t);
    for (var l = 0; l < ol.length; l++) {
      var r = ol[l];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < ol.length && (l = ol[0], l.blockedOn === null); )
      Xp(l), l.blockedOn === null && ol.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (r = 0; r < l.length; r += 3) {
        var o = l[r], c = l[r + 1], g = o[wt] || null;
        if (typeof c == "function")
          g || Zp(l);
        else if (g) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (o = c, g = c[wt] || null)
              v = g.formAction;
            else if (Xs(o) !== null) continue;
          } else v = g.action;
          typeof v == "function" ? l[r + 1] = v : (l.splice(r, 3), r -= 3), Zp(l);
        }
      }
  }
  function Zs(e) {
    this._internalRoot = e;
  }
  iu.prototype.render = Zs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var l = t.current, r = Gt();
    qp(l, r, e, t, null, null);
  }, iu.prototype.unmount = Zs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      qp(e.current, 2, null, e, null, null), Vi(), t[jl] = null;
    }
  };
  function iu(e) {
    this._internalRoot = e;
  }
  iu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = cf();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ol.length && t !== 0 && t < ol[l].priority; l++) ;
      ol.splice(l, 0, e), l === 0 && Xp(e);
    }
  };
  var Fp = a.version;
  if (Fp !== "19.1.0")
    throw Error(
      u(
        527,
        Fp,
        "19.1.0"
      )
    );
  Q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = y(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var $b = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uu.isDisabled && uu.supportsFiber)
      try {
        H = uu.inject(
          $b
        ), Z = uu;
      } catch {
      }
  }
  return Mr.createRoot = function(e, t) {
    if (!s(e)) throw Error(u(299));
    var l = !1, r = "", o = ch, c = fh, g = dh, v = null;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (v = t.unstable_transitionCallbacks)), t = Lp(
      e,
      1,
      !1,
      null,
      null,
      l,
      r,
      o,
      c,
      g,
      v,
      null
    ), e[jl] = t.current, Rs(e), new Zs(t);
  }, Mr.hydrateRoot = function(e, t, l) {
    if (!s(e)) throw Error(u(299));
    var r = !1, o = "", c = ch, g = fh, v = dh, T = null, z = null;
    return l != null && (l.unstable_strictMode === !0 && (r = !0), l.identifierPrefix !== void 0 && (o = l.identifierPrefix), l.onUncaughtError !== void 0 && (c = l.onUncaughtError), l.onCaughtError !== void 0 && (g = l.onCaughtError), l.onRecoverableError !== void 0 && (v = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (T = l.unstable_transitionCallbacks), l.formState !== void 0 && (z = l.formState)), t = Lp(
      e,
      1,
      !0,
      t,
      l ?? null,
      r,
      o,
      c,
      g,
      v,
      T,
      z
    ), t.context = Hp(null), l = t.current, r = Gt(), r = ju(r), o = Xn(r), o.callback = null, Kn(l, o, r), l = r, t.current.lanes = l, ja(t, l), yn(t), e[jl] = t.current, Rs(e), new iu(t);
  }, Mr.version = "19.1.0", Mr;
}
var am;
function o1() {
  if (am) return Js.exports;
  am = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), Js.exports = u1(), Js.exports;
}
var s1 = o1();
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), f1 = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, i, u) => u ? u.toUpperCase() : i.toLowerCase()
), rm = (n) => {
  const a = f1(n);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, mg = (...n) => n.filter((a, i, u) => !!a && a.trim() !== "" && u.indexOf(a) === i).join(" ").trim(), d1 = (n) => {
  for (const a in n)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var h1 = {
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
const p1 = pe.forwardRef(
  ({
    color: n = "currentColor",
    size: a = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: u,
    className: s = "",
    children: f,
    iconNode: d,
    ...p
  }, y) => pe.createElement(
    "svg",
    {
      ref: y,
      ...h1,
      width: a,
      height: a,
      stroke: n,
      strokeWidth: u ? Number(i) * 24 / Number(a) : i,
      className: mg("lucide", s),
      ...!f && !d1(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([h, m]) => pe.createElement(h, m)),
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
const Nt = (n, a) => {
  const i = pe.forwardRef(
    ({ className: u, ...s }, f) => pe.createElement(p1, {
      ref: f,
      iconNode: a,
      className: mg(
        `lucide-${c1(rm(n))}`,
        `lucide-${n}`,
        u
      ),
      ...s
    })
  );
  return i.displayName = rm(n), i;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], gg = Nt("bot", m1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], yg = Nt("chevron-down", g1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], b1 = Nt("copy", y1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], x1 = Nt("globe", v1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], bg = Nt("loader-circle", S1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], im = Nt("message-circle", E1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w1 = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], T1 = Nt("minimize-2", w1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], A1 = Nt("moon", k1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], _1 = Nt("send", C1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], O1 = Nt("sun", R1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z1 = [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ]
], N1 = Nt("thumbs-down", z1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M1 = [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ]
], D1 = Nt("thumbs-up", M1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U1 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], B1 = Nt("user", U1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], L1 = Nt("x", j1);
function vg(n) {
  var a, i, u = "";
  if (typeof n == "string" || typeof n == "number") u += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (a = 0; a < s; a++) n[a] && (i = vg(n[a])) && (u && (u += " "), u += i);
  } else for (i in n) n[i] && (u && (u += " "), u += i);
  return u;
}
function xg() {
  for (var n, a, i = 0, u = "", s = arguments.length; i < s; i++) (n = arguments[i]) && (a = vg(n)) && (u && (u += " "), u += a);
  return u;
}
const Vc = "-", H1 = (n) => {
  const a = V1(n), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: u
  } = n;
  return {
    getClassGroupId: (d) => {
      const p = d.split(Vc);
      return p[0] === "" && p.length !== 1 && p.shift(), Sg(p, a) || q1(d);
    },
    getConflictingClassGroupIds: (d, p) => {
      const y = i[d] || [];
      return p && u[d] ? [...y, ...u[d]] : y;
    }
  };
}, Sg = (n, a) => {
  if (n.length === 0)
    return a.classGroupId;
  const i = n[0], u = a.nextPart.get(i), s = u ? Sg(n.slice(1), u) : void 0;
  if (s)
    return s;
  if (a.validators.length === 0)
    return;
  const f = n.join(Vc);
  return a.validators.find(({
    validator: d
  }) => d(f))?.classGroupId;
}, um = /^\[(.+)\]$/, q1 = (n) => {
  if (um.test(n)) {
    const a = um.exec(n)[1], i = a?.substring(0, a.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}, V1 = (n) => {
  const {
    theme: a,
    classGroups: i
  } = n, u = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in i)
    xc(i[s], u, s, a);
  return u;
}, xc = (n, a, i, u) => {
  n.forEach((s) => {
    if (typeof s == "string") {
      const f = s === "" ? a : om(a, s);
      f.classGroupId = i;
      return;
    }
    if (typeof s == "function") {
      if (Y1(s)) {
        xc(s(u), a, i, u);
        return;
      }
      a.validators.push({
        validator: s,
        classGroupId: i
      });
      return;
    }
    Object.entries(s).forEach(([f, d]) => {
      xc(d, om(a, f), i, u);
    });
  });
}, om = (n, a) => {
  let i = n;
  return a.split(Vc).forEach((u) => {
    i.nextPart.has(u) || i.nextPart.set(u, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(u);
  }), i;
}, Y1 = (n) => n.isThemeGetter, G1 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, i = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  const s = (f, d) => {
    i.set(f, d), a++, a > n && (a = 0, u = i, i = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let d = i.get(f);
      if (d !== void 0)
        return d;
      if ((d = u.get(f)) !== void 0)
        return s(f, d), d;
    },
    set(f, d) {
      i.has(f) ? i.set(f, d) : s(f, d);
    }
  };
}, Sc = "!", Ec = ":", Q1 = Ec.length, X1 = (n) => {
  const {
    prefix: a,
    experimentalParseClassName: i
  } = n;
  let u = (s) => {
    const f = [];
    let d = 0, p = 0, y = 0, h;
    for (let _ = 0; _ < s.length; _++) {
      let O = s[_];
      if (d === 0 && p === 0) {
        if (O === Ec) {
          f.push(s.slice(y, _)), y = _ + Q1;
          continue;
        }
        if (O === "/") {
          h = _;
          continue;
        }
      }
      O === "[" ? d++ : O === "]" ? d-- : O === "(" ? p++ : O === ")" && p--;
    }
    const m = f.length === 0 ? s : s.substring(y), x = K1(m), w = x !== m, S = h && h > y ? h - y : void 0;
    return {
      modifiers: f,
      hasImportantModifier: w,
      baseClassName: x,
      maybePostfixModifierPosition: S
    };
  };
  if (a) {
    const s = a + Ec, f = u;
    u = (d) => d.startsWith(s) ? f(d.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (i) {
    const s = u;
    u = (f) => i({
      className: f,
      parseClassName: s
    });
  }
  return u;
}, K1 = (n) => n.endsWith(Sc) ? n.substring(0, n.length - 1) : n.startsWith(Sc) ? n.substring(1) : n, Z1 = (n) => {
  const a = Object.fromEntries(n.orderSensitiveModifiers.map((u) => [u, !0]));
  return (u) => {
    if (u.length <= 1)
      return u;
    const s = [];
    let f = [];
    return u.forEach((d) => {
      d[0] === "[" || a[d] ? (s.push(...f.sort(), d), f = []) : f.push(d);
    }), s.push(...f.sort()), s;
  };
}, F1 = (n) => ({
  cache: G1(n.cacheSize),
  parseClassName: X1(n),
  sortModifiers: Z1(n),
  ...H1(n)
}), I1 = /\s+/, J1 = (n, a) => {
  const {
    parseClassName: i,
    getClassGroupId: u,
    getConflictingClassGroupIds: s,
    sortModifiers: f
  } = a, d = [], p = n.trim().split(I1);
  let y = "";
  for (let h = p.length - 1; h >= 0; h -= 1) {
    const m = p[h], {
      isExternal: x,
      modifiers: w,
      hasImportantModifier: S,
      baseClassName: _,
      maybePostfixModifierPosition: O
    } = i(m);
    if (x) {
      y = m + (y.length > 0 ? " " + y : y);
      continue;
    }
    let j = !!O, B = u(j ? _.substring(0, O) : _);
    if (!B) {
      if (!j) {
        y = m + (y.length > 0 ? " " + y : y);
        continue;
      }
      if (B = u(_), !B) {
        y = m + (y.length > 0 ? " " + y : y);
        continue;
      }
      j = !1;
    }
    const F = f(w).join(":"), K = S ? F + Sc : F, ue = K + B;
    if (d.includes(ue))
      continue;
    d.push(ue);
    const P = s(B, j);
    for (let U = 0; U < P.length; ++U) {
      const re = P[U];
      d.push(K + re);
    }
    y = m + (y.length > 0 ? " " + y : y);
  }
  return y;
};
function P1() {
  let n = 0, a, i, u = "";
  for (; n < arguments.length; )
    (a = arguments[n++]) && (i = Eg(a)) && (u && (u += " "), u += i);
  return u;
}
const Eg = (n) => {
  if (typeof n == "string")
    return n;
  let a, i = "";
  for (let u = 0; u < n.length; u++)
    n[u] && (a = Eg(n[u])) && (i && (i += " "), i += a);
  return i;
};
function $1(n, ...a) {
  let i, u, s, f = d;
  function d(y) {
    const h = a.reduce((m, x) => x(m), n());
    return i = F1(h), u = i.cache.get, s = i.cache.set, f = p, p(y);
  }
  function p(y) {
    const h = u(y);
    if (h)
      return h;
    const m = J1(y, i);
    return s(y, m), m;
  }
  return function() {
    return f(P1.apply(null, arguments));
  };
}
const it = (n) => {
  const a = (i) => i[n] || [];
  return a.isThemeGetter = !0, a;
}, wg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Tg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, W1 = /^\d+\/\d+$/, ev = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, lv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, av = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ea = (n) => W1.test(n), Ce = (n) => !!n && !Number.isNaN(Number(n)), cl = (n) => !!n && Number.isInteger(Number(n)), ec = (n) => n.endsWith("%") && Ce(n.slice(0, -1)), Ln = (n) => ev.test(n), rv = () => !0, iv = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  tv.test(n) && !nv.test(n)
), kg = () => !1, uv = (n) => lv.test(n), ov = (n) => av.test(n), sv = (n) => !se(n) && !ce(n), cv = (n) => Ca(n, _g, kg), se = (n) => wg.test(n), Ol = (n) => Ca(n, Rg, iv), tc = (n) => Ca(n, mv, Ce), sm = (n) => Ca(n, Ag, kg), fv = (n) => Ca(n, Cg, ov), ou = (n) => Ca(n, Og, uv), ce = (n) => Tg.test(n), Dr = (n) => _a(n, Rg), dv = (n) => _a(n, gv), cm = (n) => _a(n, Ag), hv = (n) => _a(n, _g), pv = (n) => _a(n, Cg), su = (n) => _a(n, Og, !0), Ca = (n, a, i) => {
  const u = wg.exec(n);
  return u ? u[1] ? a(u[1]) : i(u[2]) : !1;
}, _a = (n, a, i = !1) => {
  const u = Tg.exec(n);
  return u ? u[1] ? a(u[1]) : i : !1;
}, Ag = (n) => n === "position" || n === "percentage", Cg = (n) => n === "image" || n === "url", _g = (n) => n === "length" || n === "size" || n === "bg-size", Rg = (n) => n === "length", mv = (n) => n === "number", gv = (n) => n === "family-name", Og = (n) => n === "shadow", yv = () => {
  const n = it("color"), a = it("font"), i = it("text"), u = it("font-weight"), s = it("tracking"), f = it("leading"), d = it("breakpoint"), p = it("container"), y = it("spacing"), h = it("radius"), m = it("shadow"), x = it("inset-shadow"), w = it("text-shadow"), S = it("drop-shadow"), _ = it("blur"), O = it("perspective"), j = it("aspect"), B = it("ease"), F = it("animate"), K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ue = () => [
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
  ], P = () => [...ue(), ce, se], U = () => ["auto", "hidden", "clip", "visible", "scroll"], re = () => ["auto", "contain", "none"], J = () => [ce, se, y], fe = () => [Ea, "full", "auto", ...J()], Se = () => [cl, "none", "subgrid", ce, se], ae = () => ["auto", {
    span: ["full", cl, ce, se]
  }, cl, ce, se], te = () => [cl, "auto", ce, se], $ = () => ["auto", "min", "max", "fr", ce, se], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ee = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], A = () => ["auto", ...J()], Q = () => [Ea, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...J()], L = () => [n, ce, se], de = () => [...ue(), cm, sm, {
    position: [ce, se]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Y = () => ["auto", "cover", "contain", hv, cv, {
    size: [ce, se]
  }], W = () => [ec, Dr, Ol], E = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    ce,
    se
  ], le = () => ["", Ce, Dr, Ol], Ee = () => ["solid", "dashed", "dotted", "double"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _e = () => [Ce, ec, cm, sm], Ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    _,
    ce,
    se
  ], et = () => ["none", Ce, ce, se], xt = () => ["none", Ce, ce, se], Dt = () => [Ce, ce, se], fn = () => [Ea, "full", ...J()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ln],
      breakpoint: [Ln],
      color: [rv],
      container: [Ln],
      "drop-shadow": [Ln],
      ease: ["in", "out", "in-out"],
      font: [sv],
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
        aspect: ["auto", "square", Ea, se, ce, j]
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
        "break-after": K()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": K()
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
        object: P()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: U()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": U()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": U()
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
        inset: fe()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": fe()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": fe()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: fe()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: fe()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: fe()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: fe()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: fe()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: fe()
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
        z: [cl, "auto", ce, se]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ea, "full", "auto", p, ...J()]
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
        flex: [Ce, Ea, "auto", "initial", "none", se]
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
        order: [cl, "first", "last", "none", ce, se]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Se()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ae()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": te()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": te()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Se()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ae()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": te()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": te()
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
        "auto-cols": $()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": $()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: J()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": J()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": J()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ne(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ee(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ee()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ne()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ee(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ee(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ne()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ee(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ee()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: J()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: J()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: J()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: J()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: J()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: J()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: J()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: J()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: J()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: A()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: A()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: A()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: A()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: A()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: A()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: A()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: A()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: A()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": J()
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
        "space-y": J()
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
        size: Q()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...Q()]
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
          ...Q()
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
          ...Q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", i, Dr, Ol]
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
        font: [u, ce, tc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ec, se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [dv, se, a]
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
        "line-clamp": [Ce, "none", ce, tc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...J()
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
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
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
        decoration: [...Ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ce, "from-font", "auto", ce, Ol]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
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
        indent: J()
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
        bg: de()
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
        bg: Y()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, cl, ce, se],
          radial: ["", ce, se],
          conic: [cl, ce, se]
        }, pv, fv]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: W()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: W()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
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
        border: [...Ee(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ee(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: L()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ee(), "none", "hidden"]
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
        outline: ["", Ce, Dr, Ol]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: L()
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
          su,
          ou
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: L()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", x, su, ou]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": L()
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
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ce, Ol]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
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
        "inset-ring": L()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, su, ou]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": L()
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
        "mix-blend": [...ie(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ie()
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
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": L()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": _e()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": _e()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": L()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": _e()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": _e()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": L()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": _e()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": _e()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": L()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": _e()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": _e()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": L()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": _e()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": _e()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": L()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": _e()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": _e()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": L()
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
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": L()
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
        "mask-radial-at": ue()
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
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": L()
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
        mask: de()
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
        mask: Y()
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
          su,
          ou
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": L()
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
        "border-spacing": J()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": J()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": J()
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
        ease: ["linear", "initial", B, ce, se]
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
        animate: ["none", F, ce, se]
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
        "perspective-origin": P()
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
        skew: Dt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Dt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Dt()
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
        origin: P()
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
        translate: fn()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": fn()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": fn()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": fn()
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
        accent: L()
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
        caret: L()
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
        "scroll-m": J()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": J()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": J()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": J()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": J()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": J()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": J()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": J()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": J()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": J()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": J()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": J()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": J()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": J()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": J()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": J()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": J()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": J()
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
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ce, Dr, Ol, tc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
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
}, bv = /* @__PURE__ */ $1(yv);
function ln(...n) {
  return bv(xg(n));
}
function zg(n, a) {
  const i = n.replace("#", ""), u = parseInt(i.substr(0, 2), 16), s = parseInt(i.substr(2, 2), 16), f = parseInt(i.substr(4, 2), 16), d = (100 - a) / 100, p = Math.round(u * d), y = Math.round(s * d), h = Math.round(f * d);
  return "#" + (p < 16 ? "0" : "") + p.toString(16) + (y < 16 ? "0" : "") + y.toString(16) + (h < 16 ? "0" : "") + h.toString(16);
}
function vv(n, a) {
  const i = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (i.padRight ? " " : "") + "," + (i.padLeft === !1 ? "" : " ")
  ).trim();
}
const xv = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Sv = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ev = {};
function fm(n, a) {
  return (Ev.jsx ? Sv : xv).test(n);
}
const wv = /[ \t\n\f\r]/g;
function Tv(n) {
  return typeof n == "object" ? n.type === "text" ? dm(n.value) : !1 : dm(n);
}
function dm(n) {
  return n.replace(wv, "") === "";
}
class Xr {
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
  constructor(a, i, u) {
    this.normal = i, this.property = a, u && (this.space = u);
  }
}
Xr.prototype.normal = {};
Xr.prototype.property = {};
Xr.prototype.space = void 0;
function Ng(n, a) {
  const i = {}, u = {};
  for (const s of n)
    Object.assign(i, s.property), Object.assign(u, s.normal);
  return new Xr(i, u, a);
}
function wc(n) {
  return n.toLowerCase();
}
class Mt {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(a, i) {
    this.attribute = i, this.property = a;
  }
}
Mt.prototype.attribute = "";
Mt.prototype.booleanish = !1;
Mt.prototype.boolean = !1;
Mt.prototype.commaOrSpaceSeparated = !1;
Mt.prototype.commaSeparated = !1;
Mt.prototype.defined = !1;
Mt.prototype.mustUseProperty = !1;
Mt.prototype.number = !1;
Mt.prototype.overloadedBoolean = !1;
Mt.prototype.property = "";
Mt.prototype.spaceSeparated = !1;
Mt.prototype.space = void 0;
let kv = 0;
const ke = Ul(), lt = Ul(), Tc = Ul(), I = Ul(), Ke = Ul(), ka = Ul(), Xt = Ul();
function Ul() {
  return 2 ** ++kv;
}
const kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ke,
  booleanish: lt,
  commaOrSpaceSeparated: Xt,
  commaSeparated: ka,
  number: I,
  overloadedBoolean: Tc,
  spaceSeparated: Ke
}, Symbol.toStringTag, { value: "Module" })), nc = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(kc)
);
class Yc extends Mt {
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
  constructor(a, i, u, s) {
    let f = -1;
    if (super(a, i), hm(this, "space", s), typeof u == "number")
      for (; ++f < nc.length; ) {
        const d = nc[f];
        hm(this, nc[f], (u & kc[d]) === kc[d]);
      }
  }
}
Yc.prototype.defined = !0;
function hm(n, a, i) {
  i && (n[a] = i);
}
function Ra(n) {
  const a = {}, i = {};
  for (const [u, s] of Object.entries(n.properties)) {
    const f = new Yc(
      u,
      n.transform(n.attributes || {}, u),
      s,
      n.space
    );
    n.mustUseProperty && n.mustUseProperty.includes(u) && (f.mustUseProperty = !0), a[u] = f, i[wc(u)] = u, i[wc(f.attribute)] = u;
  }
  return new Xr(a, i, n.space);
}
const Mg = Ra({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: lt,
    ariaAutoComplete: null,
    ariaBusy: lt,
    ariaChecked: lt,
    ariaColCount: I,
    ariaColIndex: I,
    ariaColSpan: I,
    ariaControls: Ke,
    ariaCurrent: null,
    ariaDescribedBy: Ke,
    ariaDetails: null,
    ariaDisabled: lt,
    ariaDropEffect: Ke,
    ariaErrorMessage: null,
    ariaExpanded: lt,
    ariaFlowTo: Ke,
    ariaGrabbed: lt,
    ariaHasPopup: null,
    ariaHidden: lt,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Ke,
    ariaLevel: I,
    ariaLive: null,
    ariaModal: lt,
    ariaMultiLine: lt,
    ariaMultiSelectable: lt,
    ariaOrientation: null,
    ariaOwns: Ke,
    ariaPlaceholder: null,
    ariaPosInSet: I,
    ariaPressed: lt,
    ariaReadOnly: lt,
    ariaRelevant: null,
    ariaRequired: lt,
    ariaRoleDescription: Ke,
    ariaRowCount: I,
    ariaRowIndex: I,
    ariaRowSpan: I,
    ariaSelected: lt,
    ariaSetSize: I,
    ariaSort: null,
    ariaValueMax: I,
    ariaValueMin: I,
    ariaValueNow: I,
    ariaValueText: null,
    role: null
  },
  transform(n, a) {
    return a === "role" ? a : "aria-" + a.slice(4).toLowerCase();
  }
});
function Dg(n, a) {
  return a in n ? n[a] : a;
}
function Ug(n, a) {
  return Dg(n, a.toLowerCase());
}
const Av = Ra({
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
    accept: ka,
    acceptCharset: Ke,
    accessKey: Ke,
    action: null,
    allow: null,
    allowFullScreen: ke,
    allowPaymentRequest: ke,
    allowUserMedia: ke,
    alt: null,
    as: null,
    async: ke,
    autoCapitalize: null,
    autoComplete: Ke,
    autoFocus: ke,
    autoPlay: ke,
    blocking: Ke,
    capture: null,
    charSet: null,
    checked: ke,
    cite: null,
    className: Ke,
    cols: I,
    colSpan: null,
    content: null,
    contentEditable: lt,
    controls: ke,
    controlsList: Ke,
    coords: I | ka,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ke,
    defer: ke,
    dir: null,
    dirName: null,
    disabled: ke,
    download: Tc,
    draggable: lt,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ke,
    formTarget: null,
    headers: Ke,
    height: I,
    hidden: Tc,
    high: I,
    href: null,
    hrefLang: null,
    htmlFor: Ke,
    httpEquiv: Ke,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ke,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ke,
    itemId: null,
    itemProp: Ke,
    itemRef: Ke,
    itemScope: ke,
    itemType: Ke,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ke,
    low: I,
    manifest: null,
    max: null,
    maxLength: I,
    media: null,
    method: null,
    min: null,
    minLength: I,
    multiple: ke,
    muted: ke,
    name: null,
    nonce: null,
    noModule: ke,
    noValidate: ke,
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
    open: ke,
    optimum: I,
    pattern: null,
    ping: Ke,
    placeholder: null,
    playsInline: ke,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ke,
    referrerPolicy: null,
    rel: Ke,
    required: ke,
    reversed: ke,
    rows: I,
    rowSpan: I,
    sandbox: Ke,
    scope: null,
    scoped: ke,
    seamless: ke,
    selected: ke,
    shadowRootClonable: ke,
    shadowRootDelegatesFocus: ke,
    shadowRootMode: null,
    shape: null,
    size: I,
    sizes: null,
    slot: null,
    span: I,
    spellCheck: lt,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: I,
    step: null,
    style: null,
    tabIndex: I,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ke,
    useMap: null,
    value: lt,
    width: I,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Ke,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: I,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: I,
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
    compact: ke,
    // Lists. Use CSS to reduce space between items instead
    declare: ke,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: I,
    // `<img>` and `<object>`
    leftMargin: I,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: I,
    // `<body>`
    marginWidth: I,
    // `<body>`
    noResize: ke,
    // `<frame>`
    noHref: ke,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ke,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ke,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: I,
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
    topMargin: I,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: I,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: ke,
    disableRemotePlayback: ke,
    prefix: null,
    property: null,
    results: I,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Ug
}), Cv = Ra({
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
    accentHeight: I,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: I,
    amplitude: I,
    arabicForm: null,
    ascent: I,
    attributeName: null,
    attributeType: null,
    azimuth: I,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: I,
    by: null,
    calcMode: null,
    capHeight: I,
    className: Ke,
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
    descent: I,
    diffuseConstant: I,
    direction: null,
    display: null,
    dur: null,
    divisor: I,
    dominantBaseline: null,
    download: ke,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: I,
    enableBackground: null,
    end: null,
    event: null,
    exponent: I,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: I,
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
    g1: ka,
    g2: ka,
    glyphName: ka,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: I,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: I,
    horizOriginX: I,
    horizOriginY: I,
    id: null,
    ideographic: I,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: I,
    k: I,
    k1: I,
    k2: I,
    k3: I,
    k4: I,
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
    limitingConeAngle: I,
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
    mediaSize: I,
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
    overlinePosition: I,
    overlineThickness: I,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: I,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Ke,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: I,
    pointsAtY: I,
    pointsAtZ: I,
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
    specularConstant: I,
    specularExponent: I,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: I,
    strikethroughThickness: I,
    string: null,
    stroke: null,
    strokeDashArray: Xt,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: I,
    strokeOpacity: I,
    strokeWidth: null,
    style: null,
    surfaceScale: I,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Xt,
    tabIndex: I,
    tableValues: null,
    target: null,
    targetX: I,
    targetY: I,
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
    underlinePosition: I,
    underlineThickness: I,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: I,
    values: null,
    vAlphabetic: I,
    vMathematical: I,
    vectorEffect: null,
    vHanging: I,
    vIdeographic: I,
    version: null,
    vertAdvY: I,
    vertOriginX: I,
    vertOriginY: I,
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
    xHeight: I,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Dg
}), Bg = Ra({
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
  transform(n, a) {
    return "xlink:" + a.slice(5).toLowerCase();
  }
}), jg = Ra({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Ug
}), Lg = Ra({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(n, a) {
    return "xml:" + a.slice(3).toLowerCase();
  }
}), _v = {
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
}, Rv = /[A-Z]/g, pm = /-[a-z]/g, Ov = /^data[-\w.:]+$/i;
function zv(n, a) {
  const i = wc(a);
  let u = a, s = Mt;
  if (i in n.normal)
    return n.property[n.normal[i]];
  if (i.length > 4 && i.slice(0, 4) === "data" && Ov.test(a)) {
    if (a.charAt(4) === "-") {
      const f = a.slice(5).replace(pm, Mv);
      u = "data" + f.charAt(0).toUpperCase() + f.slice(1);
    } else {
      const f = a.slice(4);
      if (!pm.test(f)) {
        let d = f.replace(Rv, Nv);
        d.charAt(0) !== "-" && (d = "-" + d), a = "data" + d;
      }
    }
    s = Yc;
  }
  return new s(u, a);
}
function Nv(n) {
  return "-" + n.toLowerCase();
}
function Mv(n) {
  return n.charAt(1).toUpperCase();
}
const Dv = Ng([Mg, Av, Bg, jg, Lg], "html"), Gc = Ng([Mg, Cv, Bg, jg, Lg], "svg");
function Uv(n) {
  return n.join(" ").trim();
}
var wa = {}, lc, mm;
function Bv() {
  if (mm) return lc;
  mm = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, a = /\n/g, i = /^\s*/, u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, f = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, d = /^[;\s]*/, p = /^\s+|\s+$/g, y = `
`, h = "/", m = "*", x = "", w = "comment", S = "declaration";
  lc = function(O, j) {
    if (typeof O != "string")
      throw new TypeError("First argument must be a string");
    if (!O) return [];
    j = j || {};
    var B = 1, F = 1;
    function K($) {
      var ne = $.match(a);
      ne && (B += ne.length);
      var ee = $.lastIndexOf(y);
      F = ~ee ? $.length - ee : F + $.length;
    }
    function ue() {
      var $ = { line: B, column: F };
      return function(ne) {
        return ne.position = new P($), J(), ne;
      };
    }
    function P($) {
      this.start = $, this.end = { line: B, column: F }, this.source = j.source;
    }
    P.prototype.content = O;
    function U($) {
      var ne = new Error(
        j.source + ":" + B + ":" + F + ": " + $
      );
      if (ne.reason = $, ne.filename = j.source, ne.line = B, ne.column = F, ne.source = O, !j.silent) throw ne;
    }
    function re($) {
      var ne = $.exec(O);
      if (ne) {
        var ee = ne[0];
        return K(ee), O = O.slice(ee.length), ne;
      }
    }
    function J() {
      re(i);
    }
    function fe($) {
      var ne;
      for ($ = $ || []; ne = Se(); )
        ne !== !1 && $.push(ne);
      return $;
    }
    function Se() {
      var $ = ue();
      if (!(h != O.charAt(0) || m != O.charAt(1))) {
        for (var ne = 2; x != O.charAt(ne) && (m != O.charAt(ne) || h != O.charAt(ne + 1)); )
          ++ne;
        if (ne += 2, x === O.charAt(ne - 1))
          return U("End of comment missing");
        var ee = O.slice(2, ne - 2);
        return F += 2, K(ee), O = O.slice(ne), F += 2, $({
          type: w,
          comment: ee
        });
      }
    }
    function ae() {
      var $ = ue(), ne = re(u);
      if (ne) {
        if (Se(), !re(s)) return U("property missing ':'");
        var ee = re(f), A = $({
          type: S,
          property: _(ne[0].replace(n, x)),
          value: ee ? _(ee[0].replace(n, x)) : x
        });
        return re(d), A;
      }
    }
    function te() {
      var $ = [];
      fe($);
      for (var ne; ne = ae(); )
        ne !== !1 && ($.push(ne), fe($));
      return $;
    }
    return J(), te();
  };
  function _(O) {
    return O ? O.replace(p, x) : x;
  }
  return lc;
}
var gm;
function jv() {
  if (gm) return wa;
  gm = 1;
  var n = wa && wa.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(wa, "__esModule", { value: !0 }), wa.default = i;
  var a = n(Bv());
  function i(u, s) {
    var f = null;
    if (!u || typeof u != "string")
      return f;
    var d = (0, a.default)(u), p = typeof s == "function";
    return d.forEach(function(y) {
      if (y.type === "declaration") {
        var h = y.property, m = y.value;
        p ? s(h, m, y) : m && (f = f || {}, f[h] = m);
      }
    }), f;
  }
  return wa;
}
var Ur = {}, ym;
function Lv() {
  if (ym) return Ur;
  ym = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, a = /-([a-z])/g, i = /^[^-]+$/, u = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, f = function(h) {
    return !h || i.test(h) || n.test(h);
  }, d = function(h, m) {
    return m.toUpperCase();
  }, p = function(h, m) {
    return "".concat(m, "-");
  }, y = function(h, m) {
    return m === void 0 && (m = {}), f(h) ? h : (h = h.toLowerCase(), m.reactCompat ? h = h.replace(s, p) : h = h.replace(u, p), h.replace(a, d));
  };
  return Ur.camelCase = y, Ur;
}
var Br, bm;
function Hv() {
  if (bm) return Br;
  bm = 1;
  var n = Br && Br.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, a = n(jv()), i = Lv();
  function u(s, f) {
    var d = {};
    return !s || typeof s != "string" || (0, a.default)(s, function(p, y) {
      p && y && (d[(0, i.camelCase)(p, f)] = y);
    }), d;
  }
  return u.default = u, Br = u, Br;
}
var qv = Hv();
const Vv = /* @__PURE__ */ Hc(qv), Hg = qg("end"), Qc = qg("start");
function qg(n) {
  return a;
  function a(i) {
    const u = i && i.position && i.position[n] || {};
    if (typeof u.line == "number" && u.line > 0 && typeof u.column == "number" && u.column > 0)
      return {
        line: u.line,
        column: u.column,
        offset: typeof u.offset == "number" && u.offset > -1 ? u.offset : void 0
      };
  }
}
function Yv(n) {
  const a = Qc(n), i = Hg(n);
  if (a && i)
    return { start: a, end: i };
}
function qr(n) {
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
  constructor(a, i, u) {
    super(), typeof i == "string" && (u = i, i = void 0);
    let s = "", f = {}, d = !1;
    if (i && ("line" in i && "column" in i ? f = { place: i } : "start" in i && "end" in i ? f = { place: i } : "type" in i ? f = {
      ancestors: [i],
      place: i.position
    } : f = { ...i }), typeof a == "string" ? s = a : !f.cause && a && (d = !0, s = a.message, f.cause = a), !f.ruleId && !f.source && typeof u == "string") {
      const y = u.indexOf(":");
      y === -1 ? f.ruleId = u : (f.source = u.slice(0, y), f.ruleId = u.slice(y + 1));
    }
    if (!f.place && f.ancestors && f.ancestors) {
      const y = f.ancestors[f.ancestors.length - 1];
      y && (f.place = y.position);
    }
    const p = f.place && "start" in f.place ? f.place.start : f.place;
    this.ancestors = f.ancestors || void 0, this.cause = f.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file, this.message = s, this.line = p ? p.line : void 0, this.name = qr(f.place) || "1:1", this.place = f.place || void 0, this.reason = this.message, this.ruleId = f.ruleId || void 0, this.source = f.source || void 0, this.stack = d && f.cause && typeof f.cause.stack == "string" ? f.cause.stack : "", this.actual, this.expected, this.note, this.url;
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
const Xc = {}.hasOwnProperty, Gv = /* @__PURE__ */ new Map(), Qv = /[A-Z]/g, Xv = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Kv = /* @__PURE__ */ new Set(["td", "th"]), Vg = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Zv(n, a) {
  if (!a || a.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const i = a.filePath || void 0;
  let u;
  if (a.development) {
    if (typeof a.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = tx(i, a.jsxDEV);
  } else {
    if (typeof a.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof a.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = ex(i, a.jsx, a.jsxs);
  }
  const s = {
    Fragment: a.Fragment,
    ancestors: [],
    components: a.components || {},
    create: u,
    elementAttributeNameCase: a.elementAttributeNameCase || "react",
    evaluater: a.createEvaluater ? a.createEvaluater() : void 0,
    filePath: i,
    ignoreInvalidStyle: a.ignoreInvalidStyle || !1,
    passKeys: a.passKeys !== !1,
    passNode: a.passNode || !1,
    schema: a.space === "svg" ? Gc : Dv,
    stylePropertyNameCase: a.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: a.tableCellAlignToStyle !== !1
  }, f = Yg(s, n, void 0);
  return f && typeof f != "string" ? f : s.create(
    n,
    s.Fragment,
    { children: f || void 0 },
    void 0
  );
}
function Yg(n, a, i) {
  if (a.type === "element")
    return Fv(n, a, i);
  if (a.type === "mdxFlowExpression" || a.type === "mdxTextExpression")
    return Iv(n, a);
  if (a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement")
    return Pv(n, a, i);
  if (a.type === "mdxjsEsm")
    return Jv(n, a);
  if (a.type === "root")
    return $v(n, a, i);
  if (a.type === "text")
    return Wv(n, a);
}
function Fv(n, a, i) {
  const u = n.schema;
  let s = u;
  a.tagName.toLowerCase() === "svg" && u.space === "html" && (s = Gc, n.schema = s), n.ancestors.push(a);
  const f = Qg(n, a.tagName, !1), d = nx(n, a);
  let p = Zc(n, a);
  return Xv.has(a.tagName) && (p = p.filter(function(y) {
    return typeof y == "string" ? !Tv(y) : !0;
  })), Gg(n, d, f, a), Kc(d, p), n.ancestors.pop(), n.schema = u, n.create(a, f, d, i);
}
function Iv(n, a) {
  if (a.data && a.data.estree && n.evaluater) {
    const u = a.data.estree.body[0];
    return u.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(u.expression);
  }
  Gr(n, a.position);
}
function Jv(n, a) {
  if (a.data && a.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(a.data.estree)
    );
  Gr(n, a.position);
}
function Pv(n, a, i) {
  const u = n.schema;
  let s = u;
  a.name === "svg" && u.space === "html" && (s = Gc, n.schema = s), n.ancestors.push(a);
  const f = a.name === null ? n.Fragment : Qg(n, a.name, !0), d = lx(n, a), p = Zc(n, a);
  return Gg(n, d, f, a), Kc(d, p), n.ancestors.pop(), n.schema = u, n.create(a, f, d, i);
}
function $v(n, a, i) {
  const u = {};
  return Kc(u, Zc(n, a)), n.create(a, n.Fragment, u, i);
}
function Wv(n, a) {
  return a.value;
}
function Gg(n, a, i, u) {
  typeof i != "string" && i !== n.Fragment && n.passNode && (a.node = u);
}
function Kc(n, a) {
  if (a.length > 0) {
    const i = a.length > 1 ? a : a[0];
    i && (n.children = i);
  }
}
function ex(n, a, i) {
  return u;
  function u(s, f, d, p) {
    const h = Array.isArray(d.children) ? i : a;
    return p ? h(f, d, p) : h(f, d);
  }
}
function tx(n, a) {
  return i;
  function i(u, s, f, d) {
    const p = Array.isArray(f.children), y = Qc(u);
    return a(
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
function nx(n, a) {
  const i = {};
  let u, s;
  for (s in a.properties)
    if (s !== "children" && Xc.call(a.properties, s)) {
      const f = ax(n, s, a.properties[s]);
      if (f) {
        const [d, p] = f;
        n.tableCellAlignToStyle && d === "align" && typeof p == "string" && Kv.has(a.tagName) ? u = p : i[d] = p;
      }
    }
  if (u) {
    const f = (
      /** @type {Style} */
      i.style || (i.style = {})
    );
    f[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = u;
  }
  return i;
}
function lx(n, a) {
  const i = {};
  for (const u of a.attributes)
    if (u.type === "mdxJsxExpressionAttribute")
      if (u.data && u.data.estree && n.evaluater) {
        const f = u.data.estree.body[0];
        f.type;
        const d = f.expression;
        d.type;
        const p = d.properties[0];
        p.type, Object.assign(
          i,
          n.evaluater.evaluateExpression(p.argument)
        );
      } else
        Gr(n, a.position);
    else {
      const s = u.name;
      let f;
      if (u.value && typeof u.value == "object")
        if (u.value.data && u.value.data.estree && n.evaluater) {
          const p = u.value.data.estree.body[0];
          p.type, f = n.evaluater.evaluateExpression(p.expression);
        } else
          Gr(n, a.position);
      else
        f = u.value === null ? !0 : u.value;
      i[s] = /** @type {Props[keyof Props]} */
      f;
    }
  return i;
}
function Zc(n, a) {
  const i = [];
  let u = -1;
  const s = n.passKeys ? /* @__PURE__ */ new Map() : Gv;
  for (; ++u < a.children.length; ) {
    const f = a.children[u];
    let d;
    if (n.passKeys) {
      const y = f.type === "element" ? f.tagName : f.type === "mdxJsxFlowElement" || f.type === "mdxJsxTextElement" ? f.name : void 0;
      if (y) {
        const h = s.get(y) || 0;
        d = y + "-" + h, s.set(y, h + 1);
      }
    }
    const p = Yg(n, f, d);
    p !== void 0 && i.push(p);
  }
  return i;
}
function ax(n, a, i) {
  const u = zv(n.schema, a);
  if (!(i == null || typeof i == "number" && Number.isNaN(i))) {
    if (Array.isArray(i) && (i = u.commaSeparated ? vv(i) : Uv(i)), u.property === "style") {
      let s = typeof i == "object" ? i : rx(n, String(i));
      return n.stylePropertyNameCase === "css" && (s = ix(s)), ["style", s];
    }
    return [
      n.elementAttributeNameCase === "react" && u.space ? _v[u.property] || u.property : u.attribute,
      i
    ];
  }
}
function rx(n, a) {
  try {
    return Vv(a, { reactCompat: !0 });
  } catch (i) {
    if (n.ignoreInvalidStyle)
      return {};
    const u = (
      /** @type {Error} */
      i
    ), s = new vt("Cannot parse `style` attribute", {
      ancestors: n.ancestors,
      cause: u,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = n.filePath || void 0, s.url = Vg + "#cannot-parse-style-attribute", s;
  }
}
function Qg(n, a, i) {
  let u;
  if (!i)
    u = { type: "Literal", value: a };
  else if (a.includes(".")) {
    const s = a.split(".");
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
    u = fm(a) && !/^[a-z]/.test(a) ? { type: "Identifier", name: a } : { type: "Literal", value: a };
  if (u.type === "Literal") {
    const s = (
      /** @type {string | number} */
      u.value
    );
    return Xc.call(n.components, s) ? n.components[s] : s;
  }
  if (n.evaluater)
    return n.evaluater.evaluateExpression(u);
  Gr(n);
}
function Gr(n, a) {
  const i = new vt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: n.ancestors,
      place: a,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw i.file = n.filePath || void 0, i.url = Vg + "#cannot-handle-mdx-estrees-without-createevaluater", i;
}
function ix(n) {
  const a = {};
  let i;
  for (i in n)
    Xc.call(n, i) && (a[ux(i)] = n[i]);
  return a;
}
function ux(n) {
  let a = n.replace(Qv, ox);
  return a.slice(0, 3) === "ms-" && (a = "-" + a), a;
}
function ox(n) {
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
}, sx = {};
function cx(n, a) {
  const i = sx, u = typeof i.includeImageAlt == "boolean" ? i.includeImageAlt : !0, s = typeof i.includeHtml == "boolean" ? i.includeHtml : !0;
  return Xg(n, u, s);
}
function Xg(n, a, i) {
  if (fx(n)) {
    if ("value" in n)
      return n.type === "html" && !i ? "" : n.value;
    if (a && "alt" in n && n.alt)
      return n.alt;
    if ("children" in n)
      return Sm(n.children, a, i);
  }
  return Array.isArray(n) ? Sm(n, a, i) : "";
}
function Sm(n, a, i) {
  const u = [];
  let s = -1;
  for (; ++s < n.length; )
    u[s] = Xg(n[s], a, i);
  return u.join("");
}
function fx(n) {
  return !!(n && typeof n == "object");
}
const Em = document.createElement("i");
function Fc(n) {
  const a = "&" + n + ";";
  Em.innerHTML = a;
  const i = Em.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    i.charCodeAt(i.length - 1) === 59 && n !== "semi" || i === a ? !1 : i
  );
}
function Sn(n, a, i, u) {
  const s = n.length;
  let f = 0, d;
  if (a < 0 ? a = -a > s ? 0 : s + a : a = a > s ? s : a, i = i > 0 ? i : 0, u.length < 1e4)
    d = Array.from(u), d.unshift(a, i), n.splice(...d);
  else
    for (i && n.splice(a, i); f < u.length; )
      d = u.slice(f, f + 1e4), d.unshift(a, 0), n.splice(...d), f += 1e4, a += 1e4;
}
function an(n, a) {
  return n.length > 0 ? (Sn(n, n.length, 0, a), n) : a;
}
const wm = {}.hasOwnProperty;
function dx(n) {
  const a = {};
  let i = -1;
  for (; ++i < n.length; )
    hx(a, n[i]);
  return a;
}
function hx(n, a) {
  let i;
  for (i in a) {
    const s = (wm.call(n, i) ? n[i] : void 0) || (n[i] = {}), f = a[i];
    let d;
    if (f)
      for (d in f) {
        wm.call(s, d) || (s[d] = []);
        const p = f[d];
        px(
          // @ts-expect-error Looks like a list.
          s[d],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function px(n, a) {
  let i = -1;
  const u = [];
  for (; ++i < a.length; )
    (a[i].add === "after" ? n : u).push(a[i]);
  Sn(n, 0, 0, u);
}
function Kg(n, a) {
  const i = Number.parseInt(n, a);
  return (
    // C0 except for HT, LF, FF, CR, space.
    i < 9 || i === 11 || i > 13 && i < 32 || // Control character (DEL) of C0, and C1 controls.
    i > 126 && i < 160 || // Lone high surrogates and low surrogates.
    i > 55295 && i < 57344 || // Noncharacters.
    i > 64975 && i < 65008 || /* eslint-disable no-bitwise */
    (i & 65535) === 65535 || (i & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    i > 1114111 ? "�" : String.fromCodePoint(i)
  );
}
function Aa(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const xn = dl(/[A-Za-z]/), Kt = dl(/[\dA-Za-z]/), mx = dl(/[#-'*+\--9=?A-Z^-~]/);
function Cc(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const _c = dl(/\d/), gx = dl(/[\dA-Fa-f]/), yx = dl(/[!-/:-@[-`{-~]/);
function xe(n) {
  return n !== null && n < -2;
}
function Rt(n) {
  return n !== null && (n < 0 || n === 32);
}
function je(n) {
  return n === -2 || n === -1 || n === 32;
}
const bx = dl(new RegExp("\\p{P}|\\p{S}", "u")), vx = dl(/\s/);
function dl(n) {
  return a;
  function a(i) {
    return i !== null && i > -1 && n.test(String.fromCharCode(i));
  }
}
function Oa(n) {
  const a = [];
  let i = -1, u = 0, s = 0;
  for (; ++i < n.length; ) {
    const f = n.charCodeAt(i);
    let d = "";
    if (f === 37 && Kt(n.charCodeAt(i + 1)) && Kt(n.charCodeAt(i + 2)))
      s = 2;
    else if (f < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f)) || (d = String.fromCharCode(f));
    else if (f > 55295 && f < 57344) {
      const p = n.charCodeAt(i + 1);
      f < 56320 && p > 56319 && p < 57344 ? (d = String.fromCharCode(f, p), s = 1) : d = "�";
    } else
      d = String.fromCharCode(f);
    d && (a.push(n.slice(u, i), encodeURIComponent(d)), u = i + s + 1, d = ""), s && (i += s, s = 0);
  }
  return a.join("") + n.slice(u);
}
function Ze(n, a, i, u) {
  const s = u ? u - 1 : Number.POSITIVE_INFINITY;
  let f = 0;
  return d;
  function d(y) {
    return je(y) ? (n.enter(i), p(y)) : a(y);
  }
  function p(y) {
    return je(y) && f++ < s ? (n.consume(y), p) : (n.exit(i), a(y));
  }
}
const xx = {
  tokenize: Sx
};
function Sx(n) {
  const a = n.attempt(this.parser.constructs.contentInitial, u, s);
  let i;
  return a;
  function u(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return n.enter("lineEnding"), n.consume(p), n.exit("lineEnding"), Ze(n, a, "linePrefix");
  }
  function s(p) {
    return n.enter("paragraph"), f(p);
  }
  function f(p) {
    const y = n.enter("chunkText", {
      contentType: "text",
      previous: i
    });
    return i && (i.next = y), i = y, d(p);
  }
  function d(p) {
    if (p === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(p);
      return;
    }
    return xe(p) ? (n.consume(p), n.exit("chunkText"), f) : (n.consume(p), d);
  }
}
const Ex = {
  tokenize: wx
}, Tm = {
  tokenize: Tx
};
function wx(n) {
  const a = this, i = [];
  let u = 0, s, f, d;
  return p;
  function p(K) {
    if (u < i.length) {
      const ue = i[u];
      return a.containerState = ue[1], n.attempt(ue[0].continuation, y, h)(K);
    }
    return h(K);
  }
  function y(K) {
    if (u++, a.containerState._closeFlow) {
      a.containerState._closeFlow = void 0, s && F();
      const ue = a.events.length;
      let P = ue, U;
      for (; P--; )
        if (a.events[P][0] === "exit" && a.events[P][1].type === "chunkFlow") {
          U = a.events[P][1].end;
          break;
        }
      B(u);
      let re = ue;
      for (; re < a.events.length; )
        a.events[re][1].end = {
          ...U
        }, re++;
      return Sn(a.events, P + 1, 0, a.events.slice(ue)), a.events.length = re, h(K);
    }
    return p(K);
  }
  function h(K) {
    if (u === i.length) {
      if (!s)
        return w(K);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return _(K);
      a.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return a.containerState = {}, n.check(Tm, m, x)(K);
  }
  function m(K) {
    return s && F(), B(u), w(K);
  }
  function x(K) {
    return a.parser.lazy[a.now().line] = u !== i.length, d = a.now().offset, _(K);
  }
  function w(K) {
    return a.containerState = {}, n.attempt(Tm, S, _)(K);
  }
  function S(K) {
    return u++, i.push([a.currentConstruct, a.containerState]), w(K);
  }
  function _(K) {
    if (K === null) {
      s && F(), B(0), n.consume(K);
      return;
    }
    return s = s || a.parser.flow(a.now()), n.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: f
    }), O(K);
  }
  function O(K) {
    if (K === null) {
      j(n.exit("chunkFlow"), !0), B(0), n.consume(K);
      return;
    }
    return xe(K) ? (n.consume(K), j(n.exit("chunkFlow")), u = 0, a.interrupt = void 0, p) : (n.consume(K), O);
  }
  function j(K, ue) {
    const P = a.sliceStream(K);
    if (ue && P.push(null), K.previous = f, f && (f.next = K), f = K, s.defineSkip(K.start), s.write(P), a.parser.lazy[K.start.line]) {
      let U = s.events.length;
      for (; U--; )
        if (
          // The token starts before the line ending…
          s.events[U][1].start.offset < d && // …and either is not ended yet…
          (!s.events[U][1].end || // …or ends after it.
          s.events[U][1].end.offset > d)
        )
          return;
      const re = a.events.length;
      let J = re, fe, Se;
      for (; J--; )
        if (a.events[J][0] === "exit" && a.events[J][1].type === "chunkFlow") {
          if (fe) {
            Se = a.events[J][1].end;
            break;
          }
          fe = !0;
        }
      for (B(u), U = re; U < a.events.length; )
        a.events[U][1].end = {
          ...Se
        }, U++;
      Sn(a.events, J + 1, 0, a.events.slice(re)), a.events.length = U;
    }
  }
  function B(K) {
    let ue = i.length;
    for (; ue-- > K; ) {
      const P = i[ue];
      a.containerState = P[1], P[0].exit.call(a, n);
    }
    i.length = K;
  }
  function F() {
    s.write([null]), f = void 0, s = void 0, a.containerState._closeFlow = void 0;
  }
}
function Tx(n, a, i) {
  return Ze(n, n.attempt(this.parser.constructs.document, a, i), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function km(n) {
  if (n === null || Rt(n) || vx(n))
    return 1;
  if (bx(n))
    return 2;
}
function Ic(n, a, i) {
  const u = [];
  let s = -1;
  for (; ++s < n.length; ) {
    const f = n[s].resolveAll;
    f && !u.includes(f) && (a = f(a, i), u.push(f));
  }
  return a;
}
const Rc = {
  name: "attention",
  resolveAll: kx,
  tokenize: Ax
};
function kx(n, a) {
  let i = -1, u, s, f, d, p, y, h, m;
  for (; ++i < n.length; )
    if (n[i][0] === "enter" && n[i][1].type === "attentionSequence" && n[i][1]._close) {
      for (u = i; u--; )
        if (n[u][0] === "exit" && n[u][1].type === "attentionSequence" && n[u][1]._open && // If the markers are the same:
        a.sliceSerialize(n[u][1]).charCodeAt(0) === a.sliceSerialize(n[i][1]).charCodeAt(0)) {
          if ((n[u][1]._close || n[i][1]._open) && (n[i][1].end.offset - n[i][1].start.offset) % 3 && !((n[u][1].end.offset - n[u][1].start.offset + n[i][1].end.offset - n[i][1].start.offset) % 3))
            continue;
          y = n[u][1].end.offset - n[u][1].start.offset > 1 && n[i][1].end.offset - n[i][1].start.offset > 1 ? 2 : 1;
          const x = {
            ...n[u][1].end
          }, w = {
            ...n[i][1].start
          };
          Am(x, -y), Am(w, y), d = {
            type: y > 1 ? "strongSequence" : "emphasisSequence",
            start: x,
            end: {
              ...n[u][1].end
            }
          }, p = {
            type: y > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...n[i][1].start
            },
            end: w
          }, f = {
            type: y > 1 ? "strongText" : "emphasisText",
            start: {
              ...n[u][1].end
            },
            end: {
              ...n[i][1].start
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
          }, n[i][1].start = {
            ...p.end
          }, h = [], n[u][1].end.offset - n[u][1].start.offset && (h = an(h, [["enter", n[u][1], a], ["exit", n[u][1], a]])), h = an(h, [["enter", s, a], ["enter", d, a], ["exit", d, a], ["enter", f, a]]), h = an(h, Ic(a.parser.constructs.insideSpan.null, n.slice(u + 1, i), a)), h = an(h, [["exit", f, a], ["enter", p, a], ["exit", p, a], ["exit", s, a]]), n[i][1].end.offset - n[i][1].start.offset ? (m = 2, h = an(h, [["enter", n[i][1], a], ["exit", n[i][1], a]])) : m = 0, Sn(n, u - 1, i - u + 3, h), i = u + h.length - m - 2;
          break;
        }
    }
  for (i = -1; ++i < n.length; )
    n[i][1].type === "attentionSequence" && (n[i][1].type = "data");
  return n;
}
function Ax(n, a) {
  const i = this.parser.constructs.attentionMarkers.null, u = this.previous, s = km(u);
  let f;
  return d;
  function d(y) {
    return f = y, n.enter("attentionSequence"), p(y);
  }
  function p(y) {
    if (y === f)
      return n.consume(y), p;
    const h = n.exit("attentionSequence"), m = km(y), x = !m || m === 2 && s || i.includes(y), w = !s || s === 2 && m || i.includes(u);
    return h._open = !!(f === 42 ? x : x && (s || !w)), h._close = !!(f === 42 ? w : w && (m || !x)), a(y);
  }
}
function Am(n, a) {
  n.column += a, n.offset += a, n._bufferIndex += a;
}
const Cx = {
  name: "autolink",
  tokenize: _x
};
function _x(n, a, i) {
  let u = 0;
  return s;
  function s(S) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), f;
  }
  function f(S) {
    return xn(S) ? (n.consume(S), d) : S === 64 ? i(S) : h(S);
  }
  function d(S) {
    return S === 43 || S === 45 || S === 46 || Kt(S) ? (u = 1, p(S)) : h(S);
  }
  function p(S) {
    return S === 58 ? (n.consume(S), u = 0, y) : (S === 43 || S === 45 || S === 46 || Kt(S)) && u++ < 32 ? (n.consume(S), p) : (u = 0, h(S));
  }
  function y(S) {
    return S === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.exit("autolink"), a) : S === null || S === 32 || S === 60 || Cc(S) ? i(S) : (n.consume(S), y);
  }
  function h(S) {
    return S === 64 ? (n.consume(S), m) : mx(S) ? (n.consume(S), h) : i(S);
  }
  function m(S) {
    return Kt(S) ? x(S) : i(S);
  }
  function x(S) {
    return S === 46 ? (n.consume(S), u = 0, m) : S === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(S), n.exit("autolinkMarker"), n.exit("autolink"), a) : w(S);
  }
  function w(S) {
    if ((S === 45 || Kt(S)) && u++ < 63) {
      const _ = S === 45 ? w : x;
      return n.consume(S), _;
    }
    return i(S);
  }
}
const Eu = {
  partial: !0,
  tokenize: Rx
};
function Rx(n, a, i) {
  return u;
  function u(f) {
    return je(f) ? Ze(n, s, "linePrefix")(f) : s(f);
  }
  function s(f) {
    return f === null || xe(f) ? a(f) : i(f);
  }
}
const Zg = {
  continuation: {
    tokenize: zx
  },
  exit: Nx,
  name: "blockQuote",
  tokenize: Ox
};
function Ox(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    if (d === 62) {
      const p = u.containerState;
      return p.open || (n.enter("blockQuote", {
        _container: !0
      }), p.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(d), n.exit("blockQuoteMarker"), f;
    }
    return i(d);
  }
  function f(d) {
    return je(d) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(d), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), a) : (n.exit("blockQuotePrefix"), a(d));
  }
}
function zx(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    return je(d) ? Ze(n, f, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : f(d);
  }
  function f(d) {
    return n.attempt(Zg, a, i)(d);
  }
}
function Nx(n) {
  n.exit("blockQuote");
}
const Fg = {
  name: "characterEscape",
  tokenize: Mx
};
function Mx(n, a, i) {
  return u;
  function u(f) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(f), n.exit("escapeMarker"), s;
  }
  function s(f) {
    return yx(f) ? (n.enter("characterEscapeValue"), n.consume(f), n.exit("characterEscapeValue"), n.exit("characterEscape"), a) : i(f);
  }
}
const Ig = {
  name: "characterReference",
  tokenize: Dx
};
function Dx(n, a, i) {
  const u = this;
  let s = 0, f, d;
  return p;
  function p(x) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(x), n.exit("characterReferenceMarker"), y;
  }
  function y(x) {
    return x === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(x), n.exit("characterReferenceMarkerNumeric"), h) : (n.enter("characterReferenceValue"), f = 31, d = Kt, m(x));
  }
  function h(x) {
    return x === 88 || x === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(x), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), f = 6, d = gx, m) : (n.enter("characterReferenceValue"), f = 7, d = _c, m(x));
  }
  function m(x) {
    if (x === 59 && s) {
      const w = n.exit("characterReferenceValue");
      return d === Kt && !Fc(u.sliceSerialize(w)) ? i(x) : (n.enter("characterReferenceMarker"), n.consume(x), n.exit("characterReferenceMarker"), n.exit("characterReference"), a);
    }
    return d(x) && s++ < f ? (n.consume(x), m) : i(x);
  }
}
const Cm = {
  partial: !0,
  tokenize: Bx
}, _m = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Ux
};
function Ux(n, a, i) {
  const u = this, s = {
    partial: !0,
    tokenize: P
  };
  let f = 0, d = 0, p;
  return y;
  function y(U) {
    return h(U);
  }
  function h(U) {
    const re = u.events[u.events.length - 1];
    return f = re && re[1].type === "linePrefix" ? re[2].sliceSerialize(re[1], !0).length : 0, p = U, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), m(U);
  }
  function m(U) {
    return U === p ? (d++, n.consume(U), m) : d < 3 ? i(U) : (n.exit("codeFencedFenceSequence"), je(U) ? Ze(n, x, "whitespace")(U) : x(U));
  }
  function x(U) {
    return U === null || xe(U) ? (n.exit("codeFencedFence"), u.interrupt ? a(U) : n.check(Cm, O, ue)(U)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), w(U));
  }
  function w(U) {
    return U === null || xe(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), x(U)) : je(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Ze(n, S, "whitespace")(U)) : U === 96 && U === p ? i(U) : (n.consume(U), w);
  }
  function S(U) {
    return U === null || xe(U) ? x(U) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), _(U));
  }
  function _(U) {
    return U === null || xe(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), x(U)) : U === 96 && U === p ? i(U) : (n.consume(U), _);
  }
  function O(U) {
    return n.attempt(s, ue, j)(U);
  }
  function j(U) {
    return n.enter("lineEnding"), n.consume(U), n.exit("lineEnding"), B;
  }
  function B(U) {
    return f > 0 && je(U) ? Ze(n, F, "linePrefix", f + 1)(U) : F(U);
  }
  function F(U) {
    return U === null || xe(U) ? n.check(Cm, O, ue)(U) : (n.enter("codeFlowValue"), K(U));
  }
  function K(U) {
    return U === null || xe(U) ? (n.exit("codeFlowValue"), F(U)) : (n.consume(U), K);
  }
  function ue(U) {
    return n.exit("codeFenced"), a(U);
  }
  function P(U, re, J) {
    let fe = 0;
    return Se;
    function Se(ee) {
      return U.enter("lineEnding"), U.consume(ee), U.exit("lineEnding"), ae;
    }
    function ae(ee) {
      return U.enter("codeFencedFence"), je(ee) ? Ze(U, te, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ee) : te(ee);
    }
    function te(ee) {
      return ee === p ? (U.enter("codeFencedFenceSequence"), $(ee)) : J(ee);
    }
    function $(ee) {
      return ee === p ? (fe++, U.consume(ee), $) : fe >= d ? (U.exit("codeFencedFenceSequence"), je(ee) ? Ze(U, ne, "whitespace")(ee) : ne(ee)) : J(ee);
    }
    function ne(ee) {
      return ee === null || xe(ee) ? (U.exit("codeFencedFence"), re(ee)) : J(ee);
    }
  }
}
function Bx(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    return d === null ? i(d) : (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), f);
  }
  function f(d) {
    return u.parser.lazy[u.now().line] ? i(d) : a(d);
  }
}
const rc = {
  name: "codeIndented",
  tokenize: Lx
}, jx = {
  partial: !0,
  tokenize: Hx
};
function Lx(n, a, i) {
  const u = this;
  return s;
  function s(h) {
    return n.enter("codeIndented"), Ze(n, f, "linePrefix", 5)(h);
  }
  function f(h) {
    const m = u.events[u.events.length - 1];
    return m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? d(h) : i(h);
  }
  function d(h) {
    return h === null ? y(h) : xe(h) ? n.attempt(jx, d, y)(h) : (n.enter("codeFlowValue"), p(h));
  }
  function p(h) {
    return h === null || xe(h) ? (n.exit("codeFlowValue"), d(h)) : (n.consume(h), p);
  }
  function y(h) {
    return n.exit("codeIndented"), a(h);
  }
}
function Hx(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    return u.parser.lazy[u.now().line] ? i(d) : xe(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), s) : Ze(n, f, "linePrefix", 5)(d);
  }
  function f(d) {
    const p = u.events[u.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? a(d) : xe(d) ? s(d) : i(d);
  }
}
const qx = {
  name: "codeText",
  previous: Yx,
  resolve: Vx,
  tokenize: Gx
};
function Vx(n) {
  let a = n.length - 4, i = 3, u, s;
  if ((n[i][1].type === "lineEnding" || n[i][1].type === "space") && (n[a][1].type === "lineEnding" || n[a][1].type === "space")) {
    for (u = i; ++u < a; )
      if (n[u][1].type === "codeTextData") {
        n[i][1].type = "codeTextPadding", n[a][1].type = "codeTextPadding", i += 2, a -= 2;
        break;
      }
  }
  for (u = i - 1, a++; ++u <= a; )
    s === void 0 ? u !== a && n[u][1].type !== "lineEnding" && (s = u) : (u === a || n[u][1].type === "lineEnding") && (n[s][1].type = "codeTextData", u !== s + 2 && (n[s][1].end = n[u - 1][1].end, n.splice(s + 2, u - s - 2), a -= u - s - 2, u = s + 2), s = void 0);
  return n;
}
function Yx(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Gx(n, a, i) {
  let u = 0, s, f;
  return d;
  function d(x) {
    return n.enter("codeText"), n.enter("codeTextSequence"), p(x);
  }
  function p(x) {
    return x === 96 ? (n.consume(x), u++, p) : (n.exit("codeTextSequence"), y(x));
  }
  function y(x) {
    return x === null ? i(x) : x === 32 ? (n.enter("space"), n.consume(x), n.exit("space"), y) : x === 96 ? (f = n.enter("codeTextSequence"), s = 0, m(x)) : xe(x) ? (n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), y) : (n.enter("codeTextData"), h(x));
  }
  function h(x) {
    return x === null || x === 32 || x === 96 || xe(x) ? (n.exit("codeTextData"), y(x)) : (n.consume(x), h);
  }
  function m(x) {
    return x === 96 ? (n.consume(x), s++, m) : s === u ? (n.exit("codeTextSequence"), n.exit("codeText"), a(x)) : (f.type = "codeTextData", h(x));
  }
}
class Qx {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(a) {
    this.left = a ? [...a] : [], this.right = [];
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
  get(a) {
    if (a < 0 || a >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + a + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return a < this.left.length ? this.left[a] : this.right[this.right.length - a + this.left.length - 1];
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
  slice(a, i) {
    const u = i ?? Number.POSITIVE_INFINITY;
    return u < this.left.length ? this.left.slice(a, u) : a > this.left.length ? this.right.slice(this.right.length - u + this.left.length, this.right.length - a + this.left.length).reverse() : this.left.slice(a).concat(this.right.slice(this.right.length - u + this.left.length).reverse());
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
  splice(a, i, u) {
    const s = i || 0;
    this.setCursor(Math.trunc(a));
    const f = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
    return u && jr(this.left, u), f.reverse();
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
  push(a) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(a);
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
  pushMany(a) {
    this.setCursor(Number.POSITIVE_INFINITY), jr(this.left, a);
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
  unshift(a) {
    this.setCursor(0), this.right.push(a);
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
  unshiftMany(a) {
    this.setCursor(0), jr(this.right, a.reverse());
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
  setCursor(a) {
    if (!(a === this.left.length || a > this.left.length && this.right.length === 0 || a < 0 && this.left.length === 0))
      if (a < this.left.length) {
        const i = this.left.splice(a, Number.POSITIVE_INFINITY);
        jr(this.right, i.reverse());
      } else {
        const i = this.right.splice(this.left.length + this.right.length - a, Number.POSITIVE_INFINITY);
        jr(this.left, i.reverse());
      }
  }
}
function jr(n, a) {
  let i = 0;
  if (a.length < 1e4)
    n.push(...a);
  else
    for (; i < a.length; )
      n.push(...a.slice(i, i + 1e4)), i += 1e4;
}
function Jg(n) {
  const a = {};
  let i = -1, u, s, f, d, p, y, h;
  const m = new Qx(n);
  for (; ++i < m.length; ) {
    for (; i in a; )
      i = a[i];
    if (u = m.get(i), i && u[1].type === "chunkFlow" && m.get(i - 1)[1].type === "listItemPrefix" && (y = u[1]._tokenizer.events, f = 0, f < y.length && y[f][1].type === "lineEndingBlank" && (f += 2), f < y.length && y[f][1].type === "content"))
      for (; ++f < y.length && y[f][1].type !== "content"; )
        y[f][1].type === "chunkText" && (y[f][1]._isInFirstContentOfListItem = !0, f++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(a, Xx(m, i)), i = a[i], h = !0);
    else if (u[1]._container) {
      for (f = i, s = void 0; f--; )
        if (d = m.get(f), d[1].type === "lineEnding" || d[1].type === "lineEndingBlank")
          d[0] === "enter" && (s && (m.get(s)[1].type = "lineEndingBlank"), d[1].type = "lineEnding", s = f);
        else if (!(d[1].type === "linePrefix" || d[1].type === "listItemIndent")) break;
      s && (u[1].end = {
        ...m.get(s)[1].start
      }, p = m.slice(s, i), p.unshift(u), m.splice(s, i - s + 1, p));
    }
  }
  return Sn(n, 0, Number.POSITIVE_INFINITY, m.slice(0)), !h;
}
function Xx(n, a) {
  const i = n.get(a)[1], u = n.get(a)[2];
  let s = a - 1;
  const f = [];
  let d = i._tokenizer;
  d || (d = u.parser[i.contentType](i.start), i._contentTypeTextTrailing && (d._contentTypeTextTrailing = !0));
  const p = d.events, y = [], h = {};
  let m, x, w = -1, S = i, _ = 0, O = 0;
  const j = [O];
  for (; S; ) {
    for (; n.get(++s)[1] !== S; )
      ;
    f.push(s), S._tokenizer || (m = u.sliceStream(S), S.next || m.push(null), x && d.defineSkip(S.start), S._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(m), S._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), x = S, S = S.next;
  }
  for (S = i; ++w < p.length; )
    // Find a void token that includes a break.
    p[w][0] === "exit" && p[w - 1][0] === "enter" && p[w][1].type === p[w - 1][1].type && p[w][1].start.line !== p[w][1].end.line && (O = w + 1, j.push(O), S._tokenizer = void 0, S.previous = void 0, S = S.next);
  for (d.events = [], S ? (S._tokenizer = void 0, S.previous = void 0) : j.pop(), w = j.length; w--; ) {
    const B = p.slice(j[w], j[w + 1]), F = f.pop();
    y.push([F, F + B.length - 1]), n.splice(F, 2, B);
  }
  for (y.reverse(), w = -1; ++w < y.length; )
    h[_ + y[w][0]] = _ + y[w][1], _ += y[w][1] - y[w][0] - 1;
  return h;
}
const Kx = {
  resolve: Fx,
  tokenize: Ix
}, Zx = {
  partial: !0,
  tokenize: Jx
};
function Fx(n) {
  return Jg(n), n;
}
function Ix(n, a) {
  let i;
  return u;
  function u(p) {
    return n.enter("content"), i = n.enter("chunkContent", {
      contentType: "content"
    }), s(p);
  }
  function s(p) {
    return p === null ? f(p) : xe(p) ? n.check(Zx, d, f)(p) : (n.consume(p), s);
  }
  function f(p) {
    return n.exit("chunkContent"), n.exit("content"), a(p);
  }
  function d(p) {
    return n.consume(p), n.exit("chunkContent"), i.next = n.enter("chunkContent", {
      contentType: "content",
      previous: i
    }), i = i.next, s;
  }
}
function Jx(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), Ze(n, f, "linePrefix");
  }
  function f(d) {
    if (d === null || xe(d))
      return i(d);
    const p = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? a(d) : n.interrupt(u.parser.constructs.flow, i, a)(d);
  }
}
function Pg(n, a, i, u, s, f, d, p, y) {
  const h = y || Number.POSITIVE_INFINITY;
  let m = 0;
  return x;
  function x(B) {
    return B === 60 ? (n.enter(u), n.enter(s), n.enter(f), n.consume(B), n.exit(f), w) : B === null || B === 32 || B === 41 || Cc(B) ? i(B) : (n.enter(u), n.enter(d), n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), O(B));
  }
  function w(B) {
    return B === 62 ? (n.enter(f), n.consume(B), n.exit(f), n.exit(s), n.exit(u), a) : (n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), S(B));
  }
  function S(B) {
    return B === 62 ? (n.exit("chunkString"), n.exit(p), w(B)) : B === null || B === 60 || xe(B) ? i(B) : (n.consume(B), B === 92 ? _ : S);
  }
  function _(B) {
    return B === 60 || B === 62 || B === 92 ? (n.consume(B), S) : S(B);
  }
  function O(B) {
    return !m && (B === null || B === 41 || Rt(B)) ? (n.exit("chunkString"), n.exit(p), n.exit(d), n.exit(u), a(B)) : m < h && B === 40 ? (n.consume(B), m++, O) : B === 41 ? (n.consume(B), m--, O) : B === null || B === 32 || B === 40 || Cc(B) ? i(B) : (n.consume(B), B === 92 ? j : O);
  }
  function j(B) {
    return B === 40 || B === 41 || B === 92 ? (n.consume(B), O) : O(B);
  }
}
function $g(n, a, i, u, s, f) {
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
    S === 94 && !p && "_hiddenFootnoteSupport" in d.parser.constructs ? i(S) : S === 93 ? (n.exit(f), n.enter(s), n.consume(S), n.exit(s), n.exit(u), a) : xe(S) ? (n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), m) : (n.enter("chunkString", {
      contentType: "string"
    }), x(S));
  }
  function x(S) {
    return S === null || S === 91 || S === 93 || xe(S) || p++ > 999 ? (n.exit("chunkString"), m(S)) : (n.consume(S), y || (y = !je(S)), S === 92 ? w : x);
  }
  function w(S) {
    return S === 91 || S === 92 || S === 93 ? (n.consume(S), p++, x) : x(S);
  }
}
function Wg(n, a, i, u, s, f) {
  let d;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40 ? (n.enter(u), n.enter(s), n.consume(w), n.exit(s), d = w === 40 ? 41 : w, y) : i(w);
  }
  function y(w) {
    return w === d ? (n.enter(s), n.consume(w), n.exit(s), n.exit(u), a) : (n.enter(f), h(w));
  }
  function h(w) {
    return w === d ? (n.exit(f), y(d)) : w === null ? i(w) : xe(w) ? (n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), Ze(n, h, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), m(w));
  }
  function m(w) {
    return w === d || w === null || xe(w) ? (n.exit("chunkString"), h(w)) : (n.consume(w), w === 92 ? x : m);
  }
  function x(w) {
    return w === d || w === 92 ? (n.consume(w), m) : m(w);
  }
}
function Vr(n, a) {
  let i;
  return u;
  function u(s) {
    return xe(s) ? (n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), i = !0, u) : je(s) ? Ze(n, u, i ? "linePrefix" : "lineSuffix")(s) : a(s);
  }
}
const Px = {
  name: "definition",
  tokenize: Wx
}, $x = {
  partial: !0,
  tokenize: eS
};
function Wx(n, a, i) {
  const u = this;
  let s;
  return f;
  function f(S) {
    return n.enter("definition"), d(S);
  }
  function d(S) {
    return $g.call(
      u,
      n,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      i,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(S);
  }
  function p(S) {
    return s = Aa(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1)), S === 58 ? (n.enter("definitionMarker"), n.consume(S), n.exit("definitionMarker"), y) : i(S);
  }
  function y(S) {
    return Rt(S) ? Vr(n, h)(S) : h(S);
  }
  function h(S) {
    return Pg(
      n,
      m,
      // Note: we don’t need to reset the way `markdown-rs` does.
      i,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(S);
  }
  function m(S) {
    return n.attempt($x, x, x)(S);
  }
  function x(S) {
    return je(S) ? Ze(n, w, "whitespace")(S) : w(S);
  }
  function w(S) {
    return S === null || xe(S) ? (n.exit("definition"), u.parser.defined.push(s), a(S)) : i(S);
  }
}
function eS(n, a, i) {
  return u;
  function u(p) {
    return Rt(p) ? Vr(n, s)(p) : i(p);
  }
  function s(p) {
    return Wg(n, f, i, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function f(p) {
    return je(p) ? Ze(n, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || xe(p) ? a(p) : i(p);
  }
}
const tS = {
  name: "hardBreakEscape",
  tokenize: nS
};
function nS(n, a, i) {
  return u;
  function u(f) {
    return n.enter("hardBreakEscape"), n.consume(f), s;
  }
  function s(f) {
    return xe(f) ? (n.exit("hardBreakEscape"), a(f)) : i(f);
  }
}
const lS = {
  name: "headingAtx",
  resolve: aS,
  tokenize: rS
};
function aS(n, a) {
  let i = n.length - 2, u = 3, s, f;
  return n[u][1].type === "whitespace" && (u += 2), i - 2 > u && n[i][1].type === "whitespace" && (i -= 2), n[i][1].type === "atxHeadingSequence" && (u === i - 1 || i - 4 > u && n[i - 2][1].type === "whitespace") && (i -= u + 1 === i ? 2 : 4), i > u && (s = {
    type: "atxHeadingText",
    start: n[u][1].start,
    end: n[i][1].end
  }, f = {
    type: "chunkText",
    start: n[u][1].start,
    end: n[i][1].end,
    contentType: "text"
  }, Sn(n, u, i - u + 1, [["enter", s, a], ["enter", f, a], ["exit", f, a], ["exit", s, a]])), n;
}
function rS(n, a, i) {
  let u = 0;
  return s;
  function s(m) {
    return n.enter("atxHeading"), f(m);
  }
  function f(m) {
    return n.enter("atxHeadingSequence"), d(m);
  }
  function d(m) {
    return m === 35 && u++ < 6 ? (n.consume(m), d) : m === null || Rt(m) ? (n.exit("atxHeadingSequence"), p(m)) : i(m);
  }
  function p(m) {
    return m === 35 ? (n.enter("atxHeadingSequence"), y(m)) : m === null || xe(m) ? (n.exit("atxHeading"), a(m)) : je(m) ? Ze(n, p, "whitespace")(m) : (n.enter("atxHeadingText"), h(m));
  }
  function y(m) {
    return m === 35 ? (n.consume(m), y) : (n.exit("atxHeadingSequence"), p(m));
  }
  function h(m) {
    return m === null || m === 35 || Rt(m) ? (n.exit("atxHeadingText"), p(m)) : (n.consume(m), h);
  }
}
const iS = [
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
], Rm = ["pre", "script", "style", "textarea"], uS = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: cS,
  tokenize: fS
}, oS = {
  partial: !0,
  tokenize: hS
}, sS = {
  partial: !0,
  tokenize: dS
};
function cS(n) {
  let a = n.length;
  for (; a-- && !(n[a][0] === "enter" && n[a][1].type === "htmlFlow"); )
    ;
  return a > 1 && n[a - 2][1].type === "linePrefix" && (n[a][1].start = n[a - 2][1].start, n[a + 1][1].start = n[a - 2][1].start, n.splice(a - 2, 2)), n;
}
function fS(n, a, i) {
  const u = this;
  let s, f, d, p, y;
  return h;
  function h(E) {
    return m(E);
  }
  function m(E) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(E), x;
  }
  function x(E) {
    return E === 33 ? (n.consume(E), w) : E === 47 ? (n.consume(E), f = !0, O) : E === 63 ? (n.consume(E), s = 3, u.interrupt ? a : b) : xn(E) ? (n.consume(E), d = String.fromCharCode(E), j) : i(E);
  }
  function w(E) {
    return E === 45 ? (n.consume(E), s = 2, S) : E === 91 ? (n.consume(E), s = 5, p = 0, _) : xn(E) ? (n.consume(E), s = 4, u.interrupt ? a : b) : i(E);
  }
  function S(E) {
    return E === 45 ? (n.consume(E), u.interrupt ? a : b) : i(E);
  }
  function _(E) {
    const le = "CDATA[";
    return E === le.charCodeAt(p++) ? (n.consume(E), p === le.length ? u.interrupt ? a : te : _) : i(E);
  }
  function O(E) {
    return xn(E) ? (n.consume(E), d = String.fromCharCode(E), j) : i(E);
  }
  function j(E) {
    if (E === null || E === 47 || E === 62 || Rt(E)) {
      const le = E === 47, Ee = d.toLowerCase();
      return !le && !f && Rm.includes(Ee) ? (s = 1, u.interrupt ? a(E) : te(E)) : iS.includes(d.toLowerCase()) ? (s = 6, le ? (n.consume(E), B) : u.interrupt ? a(E) : te(E)) : (s = 7, u.interrupt && !u.parser.lazy[u.now().line] ? i(E) : f ? F(E) : K(E));
    }
    return E === 45 || Kt(E) ? (n.consume(E), d += String.fromCharCode(E), j) : i(E);
  }
  function B(E) {
    return E === 62 ? (n.consume(E), u.interrupt ? a : te) : i(E);
  }
  function F(E) {
    return je(E) ? (n.consume(E), F) : Se(E);
  }
  function K(E) {
    return E === 47 ? (n.consume(E), Se) : E === 58 || E === 95 || xn(E) ? (n.consume(E), ue) : je(E) ? (n.consume(E), K) : Se(E);
  }
  function ue(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || Kt(E) ? (n.consume(E), ue) : P(E);
  }
  function P(E) {
    return E === 61 ? (n.consume(E), U) : je(E) ? (n.consume(E), P) : K(E);
  }
  function U(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? i(E) : E === 34 || E === 39 ? (n.consume(E), y = E, re) : je(E) ? (n.consume(E), U) : J(E);
  }
  function re(E) {
    return E === y ? (n.consume(E), y = null, fe) : E === null || xe(E) ? i(E) : (n.consume(E), re);
  }
  function J(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || Rt(E) ? P(E) : (n.consume(E), J);
  }
  function fe(E) {
    return E === 47 || E === 62 || je(E) ? K(E) : i(E);
  }
  function Se(E) {
    return E === 62 ? (n.consume(E), ae) : i(E);
  }
  function ae(E) {
    return E === null || xe(E) ? te(E) : je(E) ? (n.consume(E), ae) : i(E);
  }
  function te(E) {
    return E === 45 && s === 2 ? (n.consume(E), A) : E === 60 && s === 1 ? (n.consume(E), Q) : E === 62 && s === 4 ? (n.consume(E), Y) : E === 63 && s === 3 ? (n.consume(E), b) : E === 93 && s === 5 ? (n.consume(E), de) : xe(E) && (s === 6 || s === 7) ? (n.exit("htmlFlowData"), n.check(oS, W, $)(E)) : E === null || xe(E) ? (n.exit("htmlFlowData"), $(E)) : (n.consume(E), te);
  }
  function $(E) {
    return n.check(sS, ne, W)(E);
  }
  function ne(E) {
    return n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), ee;
  }
  function ee(E) {
    return E === null || xe(E) ? $(E) : (n.enter("htmlFlowData"), te(E));
  }
  function A(E) {
    return E === 45 ? (n.consume(E), b) : te(E);
  }
  function Q(E) {
    return E === 47 ? (n.consume(E), d = "", L) : te(E);
  }
  function L(E) {
    if (E === 62) {
      const le = d.toLowerCase();
      return Rm.includes(le) ? (n.consume(E), Y) : te(E);
    }
    return xn(E) && d.length < 8 ? (n.consume(E), d += String.fromCharCode(E), L) : te(E);
  }
  function de(E) {
    return E === 93 ? (n.consume(E), b) : te(E);
  }
  function b(E) {
    return E === 62 ? (n.consume(E), Y) : E === 45 && s === 2 ? (n.consume(E), b) : te(E);
  }
  function Y(E) {
    return E === null || xe(E) ? (n.exit("htmlFlowData"), W(E)) : (n.consume(E), Y);
  }
  function W(E) {
    return n.exit("htmlFlow"), a(E);
  }
}
function dS(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    return xe(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), f) : i(d);
  }
  function f(d) {
    return u.parser.lazy[u.now().line] ? i(d) : a(d);
  }
}
function hS(n, a, i) {
  return u;
  function u(s) {
    return n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), n.attempt(Eu, a, i);
  }
}
const pS = {
  name: "htmlText",
  tokenize: mS
};
function mS(n, a, i) {
  const u = this;
  let s, f, d;
  return p;
  function p(b) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(b), y;
  }
  function y(b) {
    return b === 33 ? (n.consume(b), h) : b === 47 ? (n.consume(b), P) : b === 63 ? (n.consume(b), K) : xn(b) ? (n.consume(b), J) : i(b);
  }
  function h(b) {
    return b === 45 ? (n.consume(b), m) : b === 91 ? (n.consume(b), f = 0, _) : xn(b) ? (n.consume(b), F) : i(b);
  }
  function m(b) {
    return b === 45 ? (n.consume(b), S) : i(b);
  }
  function x(b) {
    return b === null ? i(b) : b === 45 ? (n.consume(b), w) : xe(b) ? (d = x, Q(b)) : (n.consume(b), x);
  }
  function w(b) {
    return b === 45 ? (n.consume(b), S) : x(b);
  }
  function S(b) {
    return b === 62 ? A(b) : b === 45 ? w(b) : x(b);
  }
  function _(b) {
    const Y = "CDATA[";
    return b === Y.charCodeAt(f++) ? (n.consume(b), f === Y.length ? O : _) : i(b);
  }
  function O(b) {
    return b === null ? i(b) : b === 93 ? (n.consume(b), j) : xe(b) ? (d = O, Q(b)) : (n.consume(b), O);
  }
  function j(b) {
    return b === 93 ? (n.consume(b), B) : O(b);
  }
  function B(b) {
    return b === 62 ? A(b) : b === 93 ? (n.consume(b), B) : O(b);
  }
  function F(b) {
    return b === null || b === 62 ? A(b) : xe(b) ? (d = F, Q(b)) : (n.consume(b), F);
  }
  function K(b) {
    return b === null ? i(b) : b === 63 ? (n.consume(b), ue) : xe(b) ? (d = K, Q(b)) : (n.consume(b), K);
  }
  function ue(b) {
    return b === 62 ? A(b) : K(b);
  }
  function P(b) {
    return xn(b) ? (n.consume(b), U) : i(b);
  }
  function U(b) {
    return b === 45 || Kt(b) ? (n.consume(b), U) : re(b);
  }
  function re(b) {
    return xe(b) ? (d = re, Q(b)) : je(b) ? (n.consume(b), re) : A(b);
  }
  function J(b) {
    return b === 45 || Kt(b) ? (n.consume(b), J) : b === 47 || b === 62 || Rt(b) ? fe(b) : i(b);
  }
  function fe(b) {
    return b === 47 ? (n.consume(b), A) : b === 58 || b === 95 || xn(b) ? (n.consume(b), Se) : xe(b) ? (d = fe, Q(b)) : je(b) ? (n.consume(b), fe) : A(b);
  }
  function Se(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Kt(b) ? (n.consume(b), Se) : ae(b);
  }
  function ae(b) {
    return b === 61 ? (n.consume(b), te) : xe(b) ? (d = ae, Q(b)) : je(b) ? (n.consume(b), ae) : fe(b);
  }
  function te(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? i(b) : b === 34 || b === 39 ? (n.consume(b), s = b, $) : xe(b) ? (d = te, Q(b)) : je(b) ? (n.consume(b), te) : (n.consume(b), ne);
  }
  function $(b) {
    return b === s ? (n.consume(b), s = void 0, ee) : b === null ? i(b) : xe(b) ? (d = $, Q(b)) : (n.consume(b), $);
  }
  function ne(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? i(b) : b === 47 || b === 62 || Rt(b) ? fe(b) : (n.consume(b), ne);
  }
  function ee(b) {
    return b === 47 || b === 62 || Rt(b) ? fe(b) : i(b);
  }
  function A(b) {
    return b === 62 ? (n.consume(b), n.exit("htmlTextData"), n.exit("htmlText"), a) : i(b);
  }
  function Q(b) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(b), n.exit("lineEnding"), L;
  }
  function L(b) {
    return je(b) ? Ze(n, de, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : de(b);
  }
  function de(b) {
    return n.enter("htmlTextData"), d(b);
  }
}
const Jc = {
  name: "labelEnd",
  resolveAll: vS,
  resolveTo: xS,
  tokenize: SS
}, gS = {
  tokenize: ES
}, yS = {
  tokenize: wS
}, bS = {
  tokenize: TS
};
function vS(n) {
  let a = -1;
  const i = [];
  for (; ++a < n.length; ) {
    const u = n[a][1];
    if (i.push(n[a]), u.type === "labelImage" || u.type === "labelLink" || u.type === "labelEnd") {
      const s = u.type === "labelImage" ? 4 : 2;
      u.type = "data", a += s;
    }
  }
  return n.length !== i.length && Sn(n, 0, n.length, i), n;
}
function xS(n, a) {
  let i = n.length, u = 0, s, f, d, p;
  for (; i--; )
    if (s = n[i][1], f) {
      if (s.type === "link" || s.type === "labelLink" && s._inactive)
        break;
      n[i][0] === "enter" && s.type === "labelLink" && (s._inactive = !0);
    } else if (d) {
      if (n[i][0] === "enter" && (s.type === "labelImage" || s.type === "labelLink") && !s._balanced && (f = i, s.type !== "labelLink")) {
        u = 2;
        break;
      }
    } else s.type === "labelEnd" && (d = i);
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
  return p = [["enter", y, a], ["enter", h, a]], p = an(p, n.slice(f + 1, f + u + 3)), p = an(p, [["enter", m, a]]), p = an(p, Ic(a.parser.constructs.insideSpan.null, n.slice(f + u + 4, d - 3), a)), p = an(p, [["exit", m, a], n[d - 2], n[d - 1], ["exit", h, a]]), p = an(p, n.slice(d + 1)), p = an(p, [["exit", y, a]]), Sn(n, f, n.length, p), n;
}
function SS(n, a, i) {
  const u = this;
  let s = u.events.length, f, d;
  for (; s--; )
    if ((u.events[s][1].type === "labelImage" || u.events[s][1].type === "labelLink") && !u.events[s][1]._balanced) {
      f = u.events[s][1];
      break;
    }
  return p;
  function p(w) {
    return f ? f._inactive ? x(w) : (d = u.parser.defined.includes(Aa(u.sliceSerialize({
      start: f.end,
      end: u.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(w), n.exit("labelMarker"), n.exit("labelEnd"), y) : i(w);
  }
  function y(w) {
    return w === 40 ? n.attempt(gS, m, d ? m : x)(w) : w === 91 ? n.attempt(yS, m, d ? h : x)(w) : d ? m(w) : x(w);
  }
  function h(w) {
    return n.attempt(bS, m, x)(w);
  }
  function m(w) {
    return a(w);
  }
  function x(w) {
    return f._balanced = !0, i(w);
  }
}
function ES(n, a, i) {
  return u;
  function u(x) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(x), n.exit("resourceMarker"), s;
  }
  function s(x) {
    return Rt(x) ? Vr(n, f)(x) : f(x);
  }
  function f(x) {
    return x === 41 ? m(x) : Pg(n, d, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(x);
  }
  function d(x) {
    return Rt(x) ? Vr(n, y)(x) : m(x);
  }
  function p(x) {
    return i(x);
  }
  function y(x) {
    return x === 34 || x === 39 || x === 40 ? Wg(n, h, i, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(x) : m(x);
  }
  function h(x) {
    return Rt(x) ? Vr(n, m)(x) : m(x);
  }
  function m(x) {
    return x === 41 ? (n.enter("resourceMarker"), n.consume(x), n.exit("resourceMarker"), n.exit("resource"), a) : i(x);
  }
}
function wS(n, a, i) {
  const u = this;
  return s;
  function s(p) {
    return $g.call(u, n, f, d, "reference", "referenceMarker", "referenceString")(p);
  }
  function f(p) {
    return u.parser.defined.includes(Aa(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? a(p) : i(p);
  }
  function d(p) {
    return i(p);
  }
}
function TS(n, a, i) {
  return u;
  function u(f) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(f), n.exit("referenceMarker"), s;
  }
  function s(f) {
    return f === 93 ? (n.enter("referenceMarker"), n.consume(f), n.exit("referenceMarker"), n.exit("reference"), a) : i(f);
  }
}
const kS = {
  name: "labelStartImage",
  resolveAll: Jc.resolveAll,
  tokenize: AS
};
function AS(n, a, i) {
  const u = this;
  return s;
  function s(p) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(p), n.exit("labelImageMarker"), f;
  }
  function f(p) {
    return p === 91 ? (n.enter("labelMarker"), n.consume(p), n.exit("labelMarker"), n.exit("labelImage"), d) : i(p);
  }
  function d(p) {
    return p === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? i(p) : a(p);
  }
}
const CS = {
  name: "labelStartLink",
  resolveAll: Jc.resolveAll,
  tokenize: _S
};
function _S(n, a, i) {
  const u = this;
  return s;
  function s(d) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(d), n.exit("labelMarker"), n.exit("labelLink"), f;
  }
  function f(d) {
    return d === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? i(d) : a(d);
  }
}
const ic = {
  name: "lineEnding",
  tokenize: RS
};
function RS(n, a) {
  return i;
  function i(u) {
    return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), Ze(n, a, "linePrefix");
  }
}
const pu = {
  name: "thematicBreak",
  tokenize: OS
};
function OS(n, a, i) {
  let u = 0, s;
  return f;
  function f(h) {
    return n.enter("thematicBreak"), d(h);
  }
  function d(h) {
    return s = h, p(h);
  }
  function p(h) {
    return h === s ? (n.enter("thematicBreakSequence"), y(h)) : u >= 3 && (h === null || xe(h)) ? (n.exit("thematicBreak"), a(h)) : i(h);
  }
  function y(h) {
    return h === s ? (n.consume(h), u++, y) : (n.exit("thematicBreakSequence"), je(h) ? Ze(n, p, "whitespace")(h) : p(h));
  }
}
const _t = {
  continuation: {
    tokenize: DS
  },
  exit: BS,
  name: "list",
  tokenize: MS
}, zS = {
  partial: !0,
  tokenize: jS
}, NS = {
  partial: !0,
  tokenize: US
};
function MS(n, a, i) {
  const u = this, s = u.events[u.events.length - 1];
  let f = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, d = 0;
  return p;
  function p(S) {
    const _ = u.containerState.type || (S === 42 || S === 43 || S === 45 ? "listUnordered" : "listOrdered");
    if (_ === "listUnordered" ? !u.containerState.marker || S === u.containerState.marker : _c(S)) {
      if (u.containerState.type || (u.containerState.type = _, n.enter(_, {
        _container: !0
      })), _ === "listUnordered")
        return n.enter("listItemPrefix"), S === 42 || S === 45 ? n.check(pu, i, h)(S) : h(S);
      if (!u.interrupt || S === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), y(S);
    }
    return i(S);
  }
  function y(S) {
    return _c(S) && ++d < 10 ? (n.consume(S), y) : (!u.interrupt || d < 2) && (u.containerState.marker ? S === u.containerState.marker : S === 41 || S === 46) ? (n.exit("listItemValue"), h(S)) : i(S);
  }
  function h(S) {
    return n.enter("listItemMarker"), n.consume(S), n.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || S, n.check(
      Eu,
      // Can’t be empty when interrupting.
      u.interrupt ? i : m,
      n.attempt(zS, w, x)
    );
  }
  function m(S) {
    return u.containerState.initialBlankLine = !0, f++, w(S);
  }
  function x(S) {
    return je(S) ? (n.enter("listItemPrefixWhitespace"), n.consume(S), n.exit("listItemPrefixWhitespace"), w) : i(S);
  }
  function w(S) {
    return u.containerState.size = f + u.sliceSerialize(n.exit("listItemPrefix"), !0).length, a(S);
  }
}
function DS(n, a, i) {
  const u = this;
  return u.containerState._closeFlow = void 0, n.check(Eu, s, f);
  function s(p) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, Ze(n, a, "listItemIndent", u.containerState.size + 1)(p);
  }
  function f(p) {
    return u.containerState.furtherBlankLines || !je(p) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, d(p)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, n.attempt(NS, a, d)(p));
  }
  function d(p) {
    return u.containerState._closeFlow = !0, u.interrupt = void 0, Ze(n, n.attempt(_t, a, i), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function US(n, a, i) {
  const u = this;
  return Ze(n, s, "listItemIndent", u.containerState.size + 1);
  function s(f) {
    const d = u.events[u.events.length - 1];
    return d && d[1].type === "listItemIndent" && d[2].sliceSerialize(d[1], !0).length === u.containerState.size ? a(f) : i(f);
  }
}
function BS(n) {
  n.exit(this.containerState.type);
}
function jS(n, a, i) {
  const u = this;
  return Ze(n, s, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(f) {
    const d = u.events[u.events.length - 1];
    return !je(f) && d && d[1].type === "listItemPrefixWhitespace" ? a(f) : i(f);
  }
}
const Om = {
  name: "setextUnderline",
  resolveTo: LS,
  tokenize: HS
};
function LS(n, a) {
  let i = n.length, u, s, f;
  for (; i--; )
    if (n[i][0] === "enter") {
      if (n[i][1].type === "content") {
        u = i;
        break;
      }
      n[i][1].type === "paragraph" && (s = i);
    } else
      n[i][1].type === "content" && n.splice(i, 1), !f && n[i][1].type === "definition" && (f = i);
  const d = {
    type: "setextHeading",
    start: {
      ...n[u][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  };
  return n[s][1].type = "setextHeadingText", f ? (n.splice(s, 0, ["enter", d, a]), n.splice(f + 1, 0, ["exit", n[u][1], a]), n[u][1].end = {
    ...n[f][1].end
  }) : n[u][1] = d, n.push(["exit", d, a]), n;
}
function HS(n, a, i) {
  const u = this;
  let s;
  return f;
  function f(h) {
    let m = u.events.length, x;
    for (; m--; )
      if (u.events[m][1].type !== "lineEnding" && u.events[m][1].type !== "linePrefix" && u.events[m][1].type !== "content") {
        x = u.events[m][1].type === "paragraph";
        break;
      }
    return !u.parser.lazy[u.now().line] && (u.interrupt || x) ? (n.enter("setextHeadingLine"), s = h, d(h)) : i(h);
  }
  function d(h) {
    return n.enter("setextHeadingLineSequence"), p(h);
  }
  function p(h) {
    return h === s ? (n.consume(h), p) : (n.exit("setextHeadingLineSequence"), je(h) ? Ze(n, y, "lineSuffix")(h) : y(h));
  }
  function y(h) {
    return h === null || xe(h) ? (n.exit("setextHeadingLine"), a(h)) : i(h);
  }
}
const qS = {
  tokenize: VS
};
function VS(n) {
  const a = this, i = n.attempt(
    // Try to parse a blank line.
    Eu,
    u,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, s, Ze(n, n.attempt(this.parser.constructs.flow, s, n.attempt(Kx, s)), "linePrefix"))
  );
  return i;
  function u(f) {
    if (f === null) {
      n.consume(f);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(f), n.exit("lineEndingBlank"), a.currentConstruct = void 0, i;
  }
  function s(f) {
    if (f === null) {
      n.consume(f);
      return;
    }
    return n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), a.currentConstruct = void 0, i;
  }
}
const YS = {
  resolveAll: ty()
}, GS = ey("string"), QS = ey("text");
function ey(n) {
  return {
    resolveAll: ty(n === "text" ? XS : void 0),
    tokenize: a
  };
  function a(i) {
    const u = this, s = this.parser.constructs[n], f = i.attempt(s, d, p);
    return d;
    function d(m) {
      return h(m) ? f(m) : p(m);
    }
    function p(m) {
      if (m === null) {
        i.consume(m);
        return;
      }
      return i.enter("data"), i.consume(m), y;
    }
    function y(m) {
      return h(m) ? (i.exit("data"), f(m)) : (i.consume(m), y);
    }
    function h(m) {
      if (m === null)
        return !0;
      const x = s[m];
      let w = -1;
      if (x)
        for (; ++w < x.length; ) {
          const S = x[w];
          if (!S.previous || S.previous.call(u, u.previous))
            return !0;
        }
      return !1;
    }
  }
}
function ty(n) {
  return a;
  function a(i, u) {
    let s = -1, f;
    for (; ++s <= i.length; )
      f === void 0 ? i[s] && i[s][1].type === "data" && (f = s, s++) : (!i[s] || i[s][1].type !== "data") && (s !== f + 2 && (i[f][1].end = i[s - 1][1].end, i.splice(f + 2, s - f - 2), s = f + 2), f = void 0);
    return n ? n(i, u) : i;
  }
}
function XS(n, a) {
  let i = 0;
  for (; ++i <= n.length; )
    if ((i === n.length || n[i][1].type === "lineEnding") && n[i - 1][1].type === "data") {
      const u = n[i - 1][1], s = a.sliceStream(u);
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
      if (a._contentTypeTextTrailing && i === n.length && (p = 0), p) {
        const h = {
          type: i === n.length || y || p < 2 ? "lineSuffix" : "hardBreakTrailing",
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
        }, u.start.offset === u.end.offset ? Object.assign(u, h) : (n.splice(i, 0, ["enter", h, a], ["exit", h, a]), i += 2);
      }
      i++;
    }
  return n;
}
const KS = {
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
  62: Zg
}, ZS = {
  91: Px
}, FS = {
  [-2]: rc,
  [-1]: rc,
  32: rc
}, IS = {
  35: lS,
  42: pu,
  45: [Om, pu],
  60: uS,
  61: Om,
  95: pu,
  96: _m,
  126: _m
}, JS = {
  38: Ig,
  92: Fg
}, PS = {
  [-5]: ic,
  [-4]: ic,
  [-3]: ic,
  33: kS,
  38: Ig,
  42: Rc,
  60: [Cx, pS],
  91: CS,
  92: [tS, Fg],
  93: Jc,
  95: Rc,
  96: qx
}, $S = {
  null: [Rc, YS]
}, WS = {
  null: [42, 95]
}, eE = {
  null: []
}, tE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: WS,
  contentInitial: ZS,
  disable: eE,
  document: KS,
  flow: IS,
  flowInitial: FS,
  insideSpan: $S,
  string: JS,
  text: PS
}, Symbol.toStringTag, { value: "Module" }));
function nE(n, a, i) {
  let u = {
    _bufferIndex: -1,
    _index: 0,
    line: i && i.line || 1,
    column: i && i.column || 1,
    offset: i && i.offset || 0
  };
  const s = {}, f = [];
  let d = [], p = [];
  const y = {
    attempt: re(P),
    check: re(U),
    consume: F,
    enter: K,
    exit: ue,
    interrupt: re(U, {
      interrupt: !0
    })
  }, h = {
    code: null,
    containerState: {},
    defineSkip: O,
    events: [],
    now: _,
    parser: n,
    previous: null,
    sliceSerialize: w,
    sliceStream: S,
    write: x
  };
  let m = a.tokenize.call(h, y);
  return a.resolveAll && f.push(a), h;
  function x(ae) {
    return d = an(d, ae), j(), d[d.length - 1] !== null ? [] : (J(a, 0), h.events = Ic(f, h.events, h), h.events);
  }
  function w(ae, te) {
    return aE(S(ae), te);
  }
  function S(ae) {
    return lE(d, ae);
  }
  function _() {
    const {
      _bufferIndex: ae,
      _index: te,
      line: $,
      column: ne,
      offset: ee
    } = u;
    return {
      _bufferIndex: ae,
      _index: te,
      line: $,
      column: ne,
      offset: ee
    };
  }
  function O(ae) {
    s[ae.line] = ae.column, Se();
  }
  function j() {
    let ae;
    for (; u._index < d.length; ) {
      const te = d[u._index];
      if (typeof te == "string")
        for (ae = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === ae && u._bufferIndex < te.length; )
          B(te.charCodeAt(u._bufferIndex));
      else
        B(te);
    }
  }
  function B(ae) {
    m = m(ae);
  }
  function F(ae) {
    xe(ae) ? (u.line++, u.column = 1, u.offset += ae === -3 ? 2 : 1, Se()) : ae !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    d[u._index].length && (u._bufferIndex = -1, u._index++)), h.previous = ae;
  }
  function K(ae, te) {
    const $ = te || {};
    return $.type = ae, $.start = _(), h.events.push(["enter", $, h]), p.push($), $;
  }
  function ue(ae) {
    const te = p.pop();
    return te.end = _(), h.events.push(["exit", te, h]), te;
  }
  function P(ae, te) {
    J(ae, te.from);
  }
  function U(ae, te) {
    te.restore();
  }
  function re(ae, te) {
    return $;
    function $(ne, ee, A) {
      let Q, L, de, b;
      return Array.isArray(ne) ? (
        /* c8 ignore next 1 */
        W(ne)
      ) : "tokenize" in ne ? (
        // Looks like a construct.
        W([
          /** @type {Construct} */
          ne
        ])
      ) : Y(ne);
      function Y(ie) {
        return _e;
        function _e(Ne) {
          const et = Ne !== null && ie[Ne], xt = Ne !== null && ie.null, Dt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(et) ? et : et ? [et] : [],
            ...Array.isArray(xt) ? xt : xt ? [xt] : []
          ];
          return W(Dt)(Ne);
        }
      }
      function W(ie) {
        return Q = ie, L = 0, ie.length === 0 ? A : E(ie[L]);
      }
      function E(ie) {
        return _e;
        function _e(Ne) {
          return b = fe(), de = ie, ie.partial || (h.currentConstruct = ie), ie.name && h.parser.constructs.disable.null.includes(ie.name) ? Ee() : ie.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            te ? Object.assign(Object.create(h), te) : h,
            y,
            le,
            Ee
          )(Ne);
        }
      }
      function le(ie) {
        return ae(de, b), ee;
      }
      function Ee(ie) {
        return b.restore(), ++L < Q.length ? E(Q[L]) : A;
      }
    }
  }
  function J(ae, te) {
    ae.resolveAll && !f.includes(ae) && f.push(ae), ae.resolve && Sn(h.events, te, h.events.length - te, ae.resolve(h.events.slice(te), h)), ae.resolveTo && (h.events = ae.resolveTo(h.events, h));
  }
  function fe() {
    const ae = _(), te = h.previous, $ = h.currentConstruct, ne = h.events.length, ee = Array.from(p);
    return {
      from: ne,
      restore: A
    };
    function A() {
      u = ae, h.previous = te, h.currentConstruct = $, h.events.length = ne, p = ee, Se();
    }
  }
  function Se() {
    u.line in s && u.column < 2 && (u.column = s[u.line], u.offset += s[u.line] - 1);
  }
}
function lE(n, a) {
  const i = a.start._index, u = a.start._bufferIndex, s = a.end._index, f = a.end._bufferIndex;
  let d;
  if (i === s)
    d = [n[i].slice(u, f)];
  else {
    if (d = n.slice(i, s), u > -1) {
      const p = d[0];
      typeof p == "string" ? d[0] = p.slice(u) : d.shift();
    }
    f > 0 && d.push(n[s].slice(0, f));
  }
  return d;
}
function aE(n, a) {
  let i = -1;
  const u = [];
  let s;
  for (; ++i < n.length; ) {
    const f = n[i];
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
        d = a ? " " : "	";
        break;
      }
      case -1: {
        if (!a && s) continue;
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
function rE(n) {
  const u = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      dx([tE, ...(n || {}).extensions || []])
    ),
    content: s(xx),
    defined: [],
    document: s(Ex),
    flow: s(qS),
    lazy: {},
    string: s(GS),
    text: s(QS)
  };
  return u;
  function s(f) {
    return d;
    function d(p) {
      return nE(u, f, p);
    }
  }
}
function iE(n) {
  for (; !Jg(n); )
    ;
  return n;
}
const zm = /[\0\t\n\r]/g;
function uE() {
  let n = 1, a = "", i = !0, u;
  return s;
  function s(f, d, p) {
    const y = [];
    let h, m, x, w, S;
    for (f = a + (typeof f == "string" ? f.toString() : new TextDecoder(d || void 0).decode(f)), x = 0, a = "", i && (f.charCodeAt(0) === 65279 && x++, i = void 0); x < f.length; ) {
      if (zm.lastIndex = x, h = zm.exec(f), w = h && h.index !== void 0 ? h.index : f.length, S = f.charCodeAt(w), !h) {
        a = f.slice(x);
        break;
      }
      if (S === 10 && x === w && u)
        y.push(-3), u = void 0;
      else
        switch (u && (y.push(-5), u = void 0), x < w && (y.push(f.slice(x, w)), n += w - x), S) {
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
      x = w + 1;
    }
    return p && (u && y.push(-5), a && y.push(a), y.push(null)), y;
  }
}
const oE = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function sE(n) {
  return n.replace(oE, cE);
}
function cE(n, a, i) {
  if (a)
    return a;
  if (i.charCodeAt(0) === 35) {
    const s = i.charCodeAt(1), f = s === 120 || s === 88;
    return Kg(i.slice(f ? 2 : 1), f ? 16 : 10);
  }
  return Fc(i) || n;
}
const ny = {}.hasOwnProperty;
function fE(n, a, i) {
  return typeof a != "string" && (i = a, a = void 0), dE(i)(iE(rE(i).document().write(uE()(n, a, !0))));
}
function dE(n) {
  const a = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: f(Ua),
      autolinkProtocol: fe,
      autolinkEmail: fe,
      atxHeading: f(Ir),
      blockQuote: f(xt),
      characterEscape: fe,
      characterReference: fe,
      codeFenced: f(Dt),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: f(Dt, d),
      codeText: f(fn, d),
      codeTextData: fe,
      data: fe,
      codeFlowValue: fe,
      definition: f(Ma),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: f(Da),
      hardBreakEscape: f(Jr),
      hardBreakTrailing: f(Jr),
      htmlFlow: f(Ut, d),
      htmlFlowData: fe,
      htmlText: f(Ut, d),
      htmlTextData: fe,
      image: f(Nu),
      label: d,
      link: f(Ua),
      listItem: f(Bl),
      listItemValue: w,
      listOrdered: f(Ba, x),
      listUnordered: f(Ba),
      paragraph: f(Mu),
      reference: E,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: f(Ir),
      strong: f(Pr),
      thematicBreak: f(Uu)
    },
    exit: {
      atxHeading: y(),
      atxHeadingSequence: P,
      autolink: y(),
      autolinkEmail: et,
      autolinkProtocol: Ne,
      blockQuote: y(),
      characterEscapeValue: Se,
      characterReferenceMarkerHexadecimal: Ee,
      characterReferenceMarkerNumeric: Ee,
      characterReferenceValue: ie,
      characterReference: _e,
      codeFenced: y(j),
      codeFencedFence: O,
      codeFencedFenceInfo: S,
      codeFencedFenceMeta: _,
      codeFlowValue: Se,
      codeIndented: y(B),
      codeText: y(ee),
      codeTextData: Se,
      data: Se,
      definition: y(),
      definitionDestinationString: ue,
      definitionLabelString: F,
      definitionTitleString: K,
      emphasis: y(),
      hardBreakEscape: y(te),
      hardBreakTrailing: y(te),
      htmlFlow: y($),
      htmlFlowData: Se,
      htmlText: y(ne),
      htmlTextData: Se,
      image: y(Q),
      label: de,
      labelText: L,
      lineEnding: ae,
      link: y(A),
      listItem: y(),
      listOrdered: y(),
      listUnordered: y(),
      paragraph: y(),
      referenceString: le,
      resourceDestinationString: b,
      resourceTitleString: Y,
      resource: W,
      setextHeading: y(J),
      setextHeadingLineSequence: re,
      setextHeadingText: U,
      strong: y(),
      thematicBreak: y()
    }
  };
  ly(a, (n || {}).mdastExtensions || []);
  const i = {};
  return u;
  function u(H) {
    let Z = {
      type: "root",
      children: []
    };
    const me = {
      stack: [Z],
      tokenStack: [],
      config: a,
      enter: p,
      exit: h,
      buffer: d,
      resume: m,
      data: i
    }, be = [];
    let Le = -1;
    for (; ++Le < H.length; )
      if (H[Le][1].type === "listOrdered" || H[Le][1].type === "listUnordered")
        if (H[Le][0] === "enter")
          be.push(Le);
        else {
          const Bt = be.pop();
          Le = s(H, Bt, Le);
        }
    for (Le = -1; ++Le < H.length; ) {
      const Bt = a[H[Le][0]];
      ny.call(Bt, H[Le][1].type) && Bt[H[Le][1].type].call(Object.assign({
        sliceSerialize: H[Le][2].sliceSerialize
      }, me), H[Le][1]);
    }
    if (me.tokenStack.length > 0) {
      const Bt = me.tokenStack[me.tokenStack.length - 1];
      (Bt[1] || Nm).call(me, void 0, Bt[0]);
    }
    for (Z.position = {
      start: fl(H.length > 0 ? H[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: fl(H.length > 0 ? H[H.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Le = -1; ++Le < a.transforms.length; )
      Z = a.transforms[Le](Z) || Z;
    return Z;
  }
  function s(H, Z, me) {
    let be = Z - 1, Le = -1, Bt = !1, En, Et, dn, jt;
    for (; ++be <= me; ) {
      const ut = H[be];
      switch (ut[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ut[0] === "enter" ? Le++ : Le--, jt = void 0;
          break;
        }
        case "lineEndingBlank": {
          ut[0] === "enter" && (En && !jt && !Le && !dn && (dn = be), jt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          jt = void 0;
      }
      if (!Le && ut[0] === "enter" && ut[1].type === "listItemPrefix" || Le === -1 && ut[0] === "exit" && (ut[1].type === "listUnordered" || ut[1].type === "listOrdered")) {
        if (En) {
          let Zt = be;
          for (Et = void 0; Zt--; ) {
            const rn = H[Zt];
            if (rn[1].type === "lineEnding" || rn[1].type === "lineEndingBlank") {
              if (rn[0] === "exit") continue;
              Et && (H[Et][1].type = "lineEndingBlank", Bt = !0), rn[1].type = "lineEnding", Et = Zt;
            } else if (!(rn[1].type === "linePrefix" || rn[1].type === "blockQuotePrefix" || rn[1].type === "blockQuotePrefixWhitespace" || rn[1].type === "blockQuoteMarker" || rn[1].type === "listItemIndent")) break;
          }
          dn && (!Et || dn < Et) && (En._spread = !0), En.end = Object.assign({}, Et ? H[Et][1].start : ut[1].end), H.splice(Et || be, 0, ["exit", En, ut[2]]), be++, me++;
        }
        if (ut[1].type === "listItemPrefix") {
          const Zt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ut[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          En = Zt, H.splice(be, 0, ["enter", Zt, ut[2]]), be++, me++, dn = void 0, jt = !0;
        }
      }
    }
    return H[Z][1]._spread = Bt, me;
  }
  function f(H, Z) {
    return me;
    function me(be) {
      p.call(this, H(be), be), Z && Z.call(this, be);
    }
  }
  function d() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function p(H, Z, me) {
    this.stack[this.stack.length - 1].children.push(H), this.stack.push(H), this.tokenStack.push([Z, me || void 0]), H.position = {
      start: fl(Z.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function y(H) {
    return Z;
    function Z(me) {
      H && H.call(this, me), h.call(this, me);
    }
  }
  function h(H, Z) {
    const me = this.stack.pop(), be = this.tokenStack.pop();
    if (be)
      be[0].type !== H.type && (Z ? Z.call(this, H, be[0]) : (be[1] || Nm).call(this, H, be[0]));
    else throw new Error("Cannot close `" + H.type + "` (" + qr({
      start: H.start,
      end: H.end
    }) + "): it’s not open");
    me.position.end = fl(H.end);
  }
  function m() {
    return cx(this.stack.pop());
  }
  function x() {
    this.data.expectingFirstListItemValue = !0;
  }
  function w(H) {
    if (this.data.expectingFirstListItemValue) {
      const Z = this.stack[this.stack.length - 2];
      Z.start = Number.parseInt(this.sliceSerialize(H), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function S() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.lang = H;
  }
  function _() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.meta = H;
  }
  function O() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function j() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.value = H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function B() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.value = H.replace(/(\r?\n|\r)$/g, "");
  }
  function F(H) {
    const Z = this.resume(), me = this.stack[this.stack.length - 1];
    me.label = Z, me.identifier = Aa(this.sliceSerialize(H)).toLowerCase();
  }
  function K() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.title = H;
  }
  function ue() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.url = H;
  }
  function P(H) {
    const Z = this.stack[this.stack.length - 1];
    if (!Z.depth) {
      const me = this.sliceSerialize(H).length;
      Z.depth = me;
    }
  }
  function U() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function re(H) {
    const Z = this.stack[this.stack.length - 1];
    Z.depth = this.sliceSerialize(H).codePointAt(0) === 61 ? 1 : 2;
  }
  function J() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function fe(H) {
    const me = this.stack[this.stack.length - 1].children;
    let be = me[me.length - 1];
    (!be || be.type !== "text") && (be = Du(), be.position = {
      start: fl(H.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, me.push(be)), this.stack.push(be);
  }
  function Se(H) {
    const Z = this.stack.pop();
    Z.value += this.sliceSerialize(H), Z.position.end = fl(H.end);
  }
  function ae(H) {
    const Z = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const me = Z.children[Z.children.length - 1];
      me.position.end = fl(H.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && a.canContainEols.includes(Z.type) && (fe.call(this, H), Se.call(this, H));
  }
  function te() {
    this.data.atHardBreak = !0;
  }
  function $() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.value = H;
  }
  function ne() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.value = H;
  }
  function ee() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.value = H;
  }
  function A() {
    const H = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Z = this.data.referenceType || "shortcut";
      H.type += "Reference", H.referenceType = Z, delete H.url, delete H.title;
    } else
      delete H.identifier, delete H.label;
    this.data.referenceType = void 0;
  }
  function Q() {
    const H = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Z = this.data.referenceType || "shortcut";
      H.type += "Reference", H.referenceType = Z, delete H.url, delete H.title;
    } else
      delete H.identifier, delete H.label;
    this.data.referenceType = void 0;
  }
  function L(H) {
    const Z = this.sliceSerialize(H), me = this.stack[this.stack.length - 2];
    me.label = sE(Z), me.identifier = Aa(Z).toLowerCase();
  }
  function de() {
    const H = this.stack[this.stack.length - 1], Z = this.resume(), me = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, me.type === "link") {
      const be = H.children;
      me.children = be;
    } else
      me.alt = Z;
  }
  function b() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.url = H;
  }
  function Y() {
    const H = this.resume(), Z = this.stack[this.stack.length - 1];
    Z.title = H;
  }
  function W() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function le(H) {
    const Z = this.resume(), me = this.stack[this.stack.length - 1];
    me.label = Z, me.identifier = Aa(this.sliceSerialize(H)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ee(H) {
    this.data.characterReferenceType = H.type;
  }
  function ie(H) {
    const Z = this.sliceSerialize(H), me = this.data.characterReferenceType;
    let be;
    me ? (be = Kg(Z, me === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : be = Fc(Z);
    const Le = this.stack[this.stack.length - 1];
    Le.value += be;
  }
  function _e(H) {
    const Z = this.stack.pop();
    Z.position.end = fl(H.end);
  }
  function Ne(H) {
    Se.call(this, H);
    const Z = this.stack[this.stack.length - 1];
    Z.url = this.sliceSerialize(H);
  }
  function et(H) {
    Se.call(this, H);
    const Z = this.stack[this.stack.length - 1];
    Z.url = "mailto:" + this.sliceSerialize(H);
  }
  function xt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Dt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function fn() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Ma() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Da() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Ir() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Jr() {
    return {
      type: "break"
    };
  }
  function Ut() {
    return {
      type: "html",
      value: ""
    };
  }
  function Nu() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Ua() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Ba(H) {
    return {
      type: "list",
      ordered: H.type === "listOrdered",
      start: null,
      spread: H._spread,
      children: []
    };
  }
  function Bl(H) {
    return {
      type: "listItem",
      spread: H._spread,
      checked: null,
      children: []
    };
  }
  function Mu() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Pr() {
    return {
      type: "strong",
      children: []
    };
  }
  function Du() {
    return {
      type: "text",
      value: ""
    };
  }
  function Uu() {
    return {
      type: "thematicBreak"
    };
  }
}
function fl(n) {
  return {
    line: n.line,
    column: n.column,
    offset: n.offset
  };
}
function ly(n, a) {
  let i = -1;
  for (; ++i < a.length; ) {
    const u = a[i];
    Array.isArray(u) ? ly(n, u) : hE(n, u);
  }
}
function hE(n, a) {
  let i;
  for (i in a)
    if (ny.call(a, i))
      switch (i) {
        case "canContainEols": {
          const u = a[i];
          u && n[i].push(...u);
          break;
        }
        case "transforms": {
          const u = a[i];
          u && n[i].push(...u);
          break;
        }
        case "enter":
        case "exit": {
          const u = a[i];
          u && Object.assign(n[i], u);
          break;
        }
      }
}
function Nm(n, a) {
  throw n ? new Error("Cannot close `" + n.type + "` (" + qr({
    start: n.start,
    end: n.end
  }) + "): a different token (`" + a.type + "`, " + qr({
    start: a.start,
    end: a.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + a.type + "`, " + qr({
    start: a.start,
    end: a.end
  }) + ") is still open");
}
function pE(n) {
  const a = this;
  a.parser = i;
  function i(u) {
    return fE(u, {
      ...a.data("settings"),
      ...n,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: a.data("micromarkExtensions") || [],
      mdastExtensions: a.data("fromMarkdownExtensions") || []
    });
  }
}
function mE(n, a) {
  const i = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(a), !0)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function gE(n, a) {
  const i = { type: "element", tagName: "br", properties: {}, children: [] };
  return n.patch(a, i), [n.applyData(a, i), { type: "text", value: `
` }];
}
function yE(n, a) {
  const i = a.value ? a.value + `
` : "", u = {};
  a.lang && (u.className = ["language-" + a.lang]);
  let s = {
    type: "element",
    tagName: "code",
    properties: u,
    children: [{ type: "text", value: i }]
  };
  return a.meta && (s.data = { meta: a.meta }), n.patch(a, s), s = n.applyData(a, s), s = { type: "element", tagName: "pre", properties: {}, children: [s] }, n.patch(a, s), s;
}
function bE(n, a) {
  const i = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function vE(n, a) {
  const i = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function xE(n, a) {
  const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", u = String(a.identifier).toUpperCase(), s = Oa(u.toLowerCase()), f = n.footnoteOrder.indexOf(u);
  let d, p = n.footnoteCounts.get(u);
  p === void 0 ? (p = 0, n.footnoteOrder.push(u), d = n.footnoteOrder.length) : d = f + 1, p += 1, n.footnoteCounts.set(u, p);
  const y = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + i + "fn-" + s,
      id: i + "fnref-" + s + (p > 1 ? "-" + p : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(d) }]
  };
  n.patch(a, y);
  const h = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [y]
  };
  return n.patch(a, h), n.applyData(a, h);
}
function SE(n, a) {
  const i = {
    type: "element",
    tagName: "h" + a.depth,
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function EE(n, a) {
  if (n.options.allowDangerousHtml) {
    const i = { type: "raw", value: a.value };
    return n.patch(a, i), n.applyData(a, i);
  }
}
function ay(n, a) {
  const i = a.referenceType;
  let u = "]";
  if (i === "collapsed" ? u += "[]" : i === "full" && (u += "[" + (a.label || a.identifier) + "]"), a.type === "imageReference")
    return [{ type: "text", value: "![" + a.alt + u }];
  const s = n.all(a), f = s[0];
  f && f.type === "text" ? f.value = "[" + f.value : s.unshift({ type: "text", value: "[" });
  const d = s[s.length - 1];
  return d && d.type === "text" ? d.value += u : s.push({ type: "text", value: u }), s;
}
function wE(n, a) {
  const i = String(a.identifier).toUpperCase(), u = n.definitionById.get(i);
  if (!u)
    return ay(n, a);
  const s = { src: Oa(u.url || ""), alt: a.alt };
  u.title !== null && u.title !== void 0 && (s.title = u.title);
  const f = { type: "element", tagName: "img", properties: s, children: [] };
  return n.patch(a, f), n.applyData(a, f);
}
function TE(n, a) {
  const i = { src: Oa(a.url) };
  a.alt !== null && a.alt !== void 0 && (i.alt = a.alt), a.title !== null && a.title !== void 0 && (i.title = a.title);
  const u = { type: "element", tagName: "img", properties: i, children: [] };
  return n.patch(a, u), n.applyData(a, u);
}
function kE(n, a) {
  const i = { type: "text", value: a.value.replace(/\r?\n|\r/g, " ") };
  n.patch(a, i);
  const u = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [i]
  };
  return n.patch(a, u), n.applyData(a, u);
}
function AE(n, a) {
  const i = String(a.identifier).toUpperCase(), u = n.definitionById.get(i);
  if (!u)
    return ay(n, a);
  const s = { href: Oa(u.url || "") };
  u.title !== null && u.title !== void 0 && (s.title = u.title);
  const f = {
    type: "element",
    tagName: "a",
    properties: s,
    children: n.all(a)
  };
  return n.patch(a, f), n.applyData(a, f);
}
function CE(n, a) {
  const i = { href: Oa(a.url) };
  a.title !== null && a.title !== void 0 && (i.title = a.title);
  const u = {
    type: "element",
    tagName: "a",
    properties: i,
    children: n.all(a)
  };
  return n.patch(a, u), n.applyData(a, u);
}
function _E(n, a, i) {
  const u = n.all(a), s = i ? RE(i) : ry(a), f = {}, d = [];
  if (typeof a.checked == "boolean") {
    const m = u[0];
    let x;
    m && m.type === "element" && m.tagName === "p" ? x = m : (x = { type: "element", tagName: "p", properties: {}, children: [] }, u.unshift(x)), x.children.length > 0 && x.children.unshift({ type: "text", value: " " }), x.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: a.checked, disabled: !0 },
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
  return n.patch(a, h), n.applyData(a, h);
}
function RE(n) {
  let a = !1;
  if (n.type === "list") {
    a = n.spread || !1;
    const i = n.children;
    let u = -1;
    for (; !a && ++u < i.length; )
      a = ry(i[u]);
  }
  return a;
}
function ry(n) {
  const a = n.spread;
  return a ?? n.children.length > 1;
}
function OE(n, a) {
  const i = {}, u = n.all(a);
  let s = -1;
  for (typeof a.start == "number" && a.start !== 1 && (i.start = a.start); ++s < u.length; ) {
    const d = u[s];
    if (d.type === "element" && d.tagName === "li" && d.properties && Array.isArray(d.properties.className) && d.properties.className.includes("task-list-item")) {
      i.className = ["contains-task-list"];
      break;
    }
  }
  const f = {
    type: "element",
    tagName: a.ordered ? "ol" : "ul",
    properties: i,
    children: n.wrap(u, !0)
  };
  return n.patch(a, f), n.applyData(a, f);
}
function zE(n, a) {
  const i = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function NE(n, a) {
  const i = { type: "root", children: n.wrap(n.all(a)) };
  return n.patch(a, i), n.applyData(a, i);
}
function ME(n, a) {
  const i = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
function DE(n, a) {
  const i = n.all(a), u = i.shift(), s = [];
  if (u) {
    const d = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: n.wrap([u], !0)
    };
    n.patch(a.children[0], d), s.push(d);
  }
  if (i.length > 0) {
    const d = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: n.wrap(i, !0)
    }, p = Qc(a.children[1]), y = Hg(a.children[a.children.length - 1]);
    p && y && (d.position = { start: p, end: y }), s.push(d);
  }
  const f = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(s, !0)
  };
  return n.patch(a, f), n.applyData(a, f);
}
function UE(n, a, i) {
  const u = i ? i.children : void 0, f = (u ? u.indexOf(a) : 1) === 0 ? "th" : "td", d = i && i.type === "table" ? i.align : void 0, p = d ? d.length : a.children.length;
  let y = -1;
  const h = [];
  for (; ++y < p; ) {
    const x = a.children[y], w = {}, S = d ? d[y] : void 0;
    S && (w.align = S);
    let _ = { type: "element", tagName: f, properties: w, children: [] };
    x && (_.children = n.all(x), n.patch(x, _), _ = n.applyData(x, _)), h.push(_);
  }
  const m = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: n.wrap(h, !0)
  };
  return n.patch(a, m), n.applyData(a, m);
}
function BE(n, a) {
  const i = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, i), n.applyData(a, i);
}
const Mm = 9, Dm = 32;
function jE(n) {
  const a = String(n), i = /\r?\n|\r/g;
  let u = i.exec(a), s = 0;
  const f = [];
  for (; u; )
    f.push(
      Um(a.slice(s, u.index), s > 0, !0),
      u[0]
    ), s = u.index + u[0].length, u = i.exec(a);
  return f.push(Um(a.slice(s), s > 0, !1)), f.join("");
}
function Um(n, a, i) {
  let u = 0, s = n.length;
  if (a) {
    let f = n.codePointAt(u);
    for (; f === Mm || f === Dm; )
      u++, f = n.codePointAt(u);
  }
  if (i) {
    let f = n.codePointAt(s - 1);
    for (; f === Mm || f === Dm; )
      s--, f = n.codePointAt(s - 1);
  }
  return s > u ? n.slice(u, s) : "";
}
function LE(n, a) {
  const i = { type: "text", value: jE(String(a.value)) };
  return n.patch(a, i), n.applyData(a, i);
}
function HE(n, a) {
  const i = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return n.patch(a, i), n.applyData(a, i);
}
const qE = {
  blockquote: mE,
  break: gE,
  code: yE,
  delete: bE,
  emphasis: vE,
  footnoteReference: xE,
  heading: SE,
  html: EE,
  imageReference: wE,
  image: TE,
  inlineCode: kE,
  linkReference: AE,
  link: CE,
  listItem: _E,
  list: OE,
  paragraph: zE,
  // @ts-expect-error: root is different, but hard to type.
  root: NE,
  strong: ME,
  table: DE,
  tableCell: BE,
  tableRow: UE,
  text: LE,
  thematicBreak: HE,
  toml: cu,
  yaml: cu,
  definition: cu,
  footnoteDefinition: cu
};
function cu() {
}
const iy = -1, wu = 0, Yr = 1, bu = 2, Pc = 3, $c = 4, Wc = 5, ef = 6, uy = 7, oy = 8, Bm = typeof self == "object" ? self : globalThis, VE = (n, a) => {
  const i = (s, f) => (n.set(f, s), s), u = (s) => {
    if (n.has(s))
      return n.get(s);
    const [f, d] = a[s];
    switch (f) {
      case wu:
      case iy:
        return i(d, s);
      case Yr: {
        const p = i([], s);
        for (const y of d)
          p.push(u(y));
        return p;
      }
      case bu: {
        const p = i({}, s);
        for (const [y, h] of d)
          p[u(y)] = u(h);
        return p;
      }
      case Pc:
        return i(new Date(d), s);
      case $c: {
        const { source: p, flags: y } = d;
        return i(new RegExp(p, y), s);
      }
      case Wc: {
        const p = i(/* @__PURE__ */ new Map(), s);
        for (const [y, h] of d)
          p.set(u(y), u(h));
        return p;
      }
      case ef: {
        const p = i(/* @__PURE__ */ new Set(), s);
        for (const y of d)
          p.add(u(y));
        return p;
      }
      case uy: {
        const { name: p, message: y } = d;
        return i(new Bm[p](y), s);
      }
      case oy:
        return i(BigInt(d), s);
      case "BigInt":
        return i(Object(BigInt(d)), s);
      case "ArrayBuffer":
        return i(new Uint8Array(d).buffer, d);
      case "DataView": {
        const { buffer: p } = new Uint8Array(d);
        return i(new DataView(p), d);
      }
    }
    return i(new Bm[f](d), s);
  };
  return u;
}, jm = (n) => VE(/* @__PURE__ */ new Map(), n)(0), Ta = "", { toString: YE } = {}, { keys: GE } = Object, Lr = (n) => {
  const a = typeof n;
  if (a !== "object" || !n)
    return [wu, a];
  const i = YE.call(n).slice(8, -1);
  switch (i) {
    case "Array":
      return [Yr, Ta];
    case "Object":
      return [bu, Ta];
    case "Date":
      return [Pc, Ta];
    case "RegExp":
      return [$c, Ta];
    case "Map":
      return [Wc, Ta];
    case "Set":
      return [ef, Ta];
    case "DataView":
      return [Yr, i];
  }
  return i.includes("Array") ? [Yr, i] : i.includes("Error") ? [uy, i] : [bu, i];
}, fu = ([n, a]) => n === wu && (a === "function" || a === "symbol"), QE = (n, a, i, u) => {
  const s = (d, p) => {
    const y = u.push(d) - 1;
    return i.set(p, y), y;
  }, f = (d) => {
    if (i.has(d))
      return i.get(d);
    let [p, y] = Lr(d);
    switch (p) {
      case wu: {
        let m = d;
        switch (y) {
          case "bigint":
            p = oy, m = d.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + y);
            m = null;
            break;
          case "undefined":
            return s([iy], d);
        }
        return s([p, m], d);
      }
      case Yr: {
        if (y) {
          let w = d;
          return y === "DataView" ? w = new Uint8Array(d.buffer) : y === "ArrayBuffer" && (w = new Uint8Array(d)), s([y, [...w]], d);
        }
        const m = [], x = s([p, m], d);
        for (const w of d)
          m.push(f(w));
        return x;
      }
      case bu: {
        if (y)
          switch (y) {
            case "BigInt":
              return s([y, d.toString()], d);
            case "Boolean":
            case "Number":
            case "String":
              return s([y, d.valueOf()], d);
          }
        if (a && "toJSON" in d)
          return f(d.toJSON());
        const m = [], x = s([p, m], d);
        for (const w of GE(d))
          (n || !fu(Lr(d[w]))) && m.push([f(w), f(d[w])]);
        return x;
      }
      case Pc:
        return s([p, d.toISOString()], d);
      case $c: {
        const { source: m, flags: x } = d;
        return s([p, { source: m, flags: x }], d);
      }
      case Wc: {
        const m = [], x = s([p, m], d);
        for (const [w, S] of d)
          (n || !(fu(Lr(w)) || fu(Lr(S)))) && m.push([f(w), f(S)]);
        return x;
      }
      case ef: {
        const m = [], x = s([p, m], d);
        for (const w of d)
          (n || !fu(Lr(w))) && m.push(f(w));
        return x;
      }
    }
    const { message: h } = d;
    return s([p, { name: y, message: h }], d);
  };
  return f;
}, Lm = (n, { json: a, lossy: i } = {}) => {
  const u = [];
  return QE(!(a || i), !!a, /* @__PURE__ */ new Map(), u)(n), u;
}, vu = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, a) => a && ("json" in a || "lossy" in a) ? jm(Lm(n, a)) : structuredClone(n)
) : (n, a) => jm(Lm(n, a));
function XE(n, a) {
  const i = [{ type: "text", value: "↩" }];
  return a > 1 && i.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(a) }]
  }), i;
}
function KE(n, a) {
  return "Back to reference " + (n + 1) + (a > 1 ? "-" + a : "");
}
function ZE(n) {
  const a = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", i = n.options.footnoteBackContent || XE, u = n.options.footnoteBackLabel || KE, s = n.options.footnoteLabel || "Footnotes", f = n.options.footnoteLabelTagName || "h2", d = n.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let y = -1;
  for (; ++y < n.footnoteOrder.length; ) {
    const h = n.footnoteById.get(
      n.footnoteOrder[y]
    );
    if (!h)
      continue;
    const m = n.all(h), x = String(h.identifier).toUpperCase(), w = Oa(x.toLowerCase());
    let S = 0;
    const _ = [], O = n.footnoteCounts.get(x);
    for (; O !== void 0 && ++S <= O; ) {
      _.length > 0 && _.push({ type: "text", value: " " });
      let F = typeof i == "string" ? i : i(y, S);
      typeof F == "string" && (F = { type: "text", value: F }), _.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + a + "fnref-" + w + (S > 1 ? "-" + S : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof u == "string" ? u : u(y, S),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(F) ? F : [F]
      });
    }
    const j = m[m.length - 1];
    if (j && j.type === "element" && j.tagName === "p") {
      const F = j.children[j.children.length - 1];
      F && F.type === "text" ? F.value += " " : j.children.push({ type: "text", value: " " }), j.children.push(..._);
    } else
      m.push(..._);
    const B = {
      type: "element",
      tagName: "li",
      properties: { id: a + "fn-" + w },
      children: n.wrap(m, !0)
    };
    n.patch(h, B), p.push(B);
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
            ...vu(d),
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
const sy = (
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
      return PE;
    if (typeof n == "function")
      return Tu(n);
    if (typeof n == "object")
      return Array.isArray(n) ? FE(n) : IE(n);
    if (typeof n == "string")
      return JE(n);
    throw new Error("Expected function, string, or object as test");
  }
);
function FE(n) {
  const a = [];
  let i = -1;
  for (; ++i < n.length; )
    a[i] = sy(n[i]);
  return Tu(u);
  function u(...s) {
    let f = -1;
    for (; ++f < a.length; )
      if (a[f].apply(this, s)) return !0;
    return !1;
  }
}
function IE(n) {
  const a = (
    /** @type {Record<string, unknown>} */
    n
  );
  return Tu(i);
  function i(u) {
    const s = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      u
    );
    let f;
    for (f in n)
      if (s[f] !== a[f]) return !1;
    return !0;
  }
}
function JE(n) {
  return Tu(a);
  function a(i) {
    return i && i.type === n;
  }
}
function Tu(n) {
  return a;
  function a(i, u, s) {
    return !!($E(i) && n.call(
      this,
      i,
      typeof u == "number" ? u : void 0,
      s || void 0
    ));
  }
}
function PE() {
  return !0;
}
function $E(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const cy = [], WE = !0, Hm = !1, ew = "skip";
function tw(n, a, i, u) {
  let s;
  typeof a == "function" && typeof i != "function" ? (u = i, i = a) : s = a;
  const f = sy(s), d = u ? -1 : 1;
  p(n, void 0, [])();
  function p(y, h, m) {
    const x = (
      /** @type {Record<string, unknown>} */
      y && typeof y == "object" ? y : {}
    );
    if (typeof x.type == "string") {
      const S = (
        // `hast`
        typeof x.tagName == "string" ? x.tagName : (
          // `xast`
          typeof x.name == "string" ? x.name : void 0
        )
      );
      Object.defineProperty(w, "name", {
        value: "node (" + (y.type + (S ? "<" + S + ">" : "")) + ")"
      });
    }
    return w;
    function w() {
      let S = cy, _, O, j;
      if ((!a || f(y, h, m[m.length - 1] || void 0)) && (S = nw(i(y, m)), S[0] === Hm))
        return S;
      if ("children" in y && y.children) {
        const B = (
          /** @type {UnistParent} */
          y
        );
        if (B.children && S[0] !== ew)
          for (O = (u ? B.children.length : -1) + d, j = m.concat(B); O > -1 && O < B.children.length; ) {
            const F = B.children[O];
            if (_ = p(F, O, j)(), _[0] === Hm)
              return _;
            O = typeof _[1] == "number" ? _[1] : O + d;
          }
      }
      return S;
    }
  }
}
function nw(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [WE, n] : n == null ? cy : [n];
}
function fy(n, a, i, u) {
  let s, f, d;
  typeof a == "function" && typeof i != "function" ? (f = void 0, d = a, s = i) : (f = a, d = i, s = u), tw(n, f, p, s);
  function p(y, h) {
    const m = h[h.length - 1], x = m ? m.children.indexOf(y) : void 0;
    return d(y, x, m);
  }
}
const Oc = {}.hasOwnProperty, lw = {};
function aw(n, a) {
  const i = a || lw, u = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), d = { ...qE, ...i.handlers }, p = {
    all: h,
    applyData: iw,
    definitionById: u,
    footnoteById: s,
    footnoteCounts: f,
    footnoteOrder: [],
    handlers: d,
    one: y,
    options: i,
    patch: rw,
    wrap: ow
  };
  return fy(n, function(m) {
    if (m.type === "definition" || m.type === "footnoteDefinition") {
      const x = m.type === "definition" ? u : s, w = String(m.identifier).toUpperCase();
      x.has(w) || x.set(w, m);
    }
  }), p;
  function y(m, x) {
    const w = m.type, S = p.handlers[w];
    if (Oc.call(p.handlers, w) && S)
      return S(p, m, x);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ("children" in m) {
        const { children: O, ...j } = m, B = vu(j);
        return B.children = p.all(m), B;
      }
      return vu(m);
    }
    return (p.options.unknownHandler || uw)(p, m, x);
  }
  function h(m) {
    const x = [];
    if ("children" in m) {
      const w = m.children;
      let S = -1;
      for (; ++S < w.length; ) {
        const _ = p.one(w[S], m);
        if (_) {
          if (S && w[S - 1].type === "break" && (!Array.isArray(_) && _.type === "text" && (_.value = qm(_.value)), !Array.isArray(_) && _.type === "element")) {
            const O = _.children[0];
            O && O.type === "text" && (O.value = qm(O.value));
          }
          Array.isArray(_) ? x.push(..._) : x.push(_);
        }
      }
    }
    return x;
  }
}
function rw(n, a) {
  n.position && (a.position = Yv(n));
}
function iw(n, a) {
  let i = a;
  if (n && n.data) {
    const u = n.data.hName, s = n.data.hChildren, f = n.data.hProperties;
    if (typeof u == "string")
      if (i.type === "element")
        i.tagName = u;
      else {
        const d = "children" in i ? i.children : [i];
        i = { type: "element", tagName: u, properties: {}, children: d };
      }
    i.type === "element" && f && Object.assign(i.properties, vu(f)), "children" in i && i.children && s !== null && s !== void 0 && (i.children = s);
  }
  return i;
}
function uw(n, a) {
  const i = a.data || {}, u = "value" in a && !(Oc.call(i, "hProperties") || Oc.call(i, "hChildren")) ? { type: "text", value: a.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(a)
  };
  return n.patch(a, u), n.applyData(a, u);
}
function ow(n, a) {
  const i = [];
  let u = -1;
  for (a && i.push({ type: "text", value: `
` }); ++u < n.length; )
    u && i.push({ type: "text", value: `
` }), i.push(n[u]);
  return a && n.length > 0 && i.push({ type: "text", value: `
` }), i;
}
function qm(n) {
  let a = 0, i = n.charCodeAt(a);
  for (; i === 9 || i === 32; )
    a++, i = n.charCodeAt(a);
  return n.slice(a);
}
function Vm(n, a) {
  const i = aw(n, a), u = i.one(n, void 0), s = ZE(i), f = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return s && f.children.push({ type: "text", value: `
` }, s), f;
}
function sw(n, a) {
  return n && "run" in n ? async function(i, u) {
    const s = (
      /** @type {HastRoot} */
      Vm(i, { file: u, ...a })
    );
    await n.run(s, u);
  } : function(i, u) {
    return (
      /** @type {HastRoot} */
      Vm(i, { file: u, ...n || a })
    );
  };
}
function Ym(n) {
  if (n)
    throw n;
}
var uc, Gm;
function cw() {
  if (Gm) return uc;
  Gm = 1;
  var n = Object.prototype.hasOwnProperty, a = Object.prototype.toString, i = Object.defineProperty, u = Object.getOwnPropertyDescriptor, s = function(h) {
    return typeof Array.isArray == "function" ? Array.isArray(h) : a.call(h) === "[object Array]";
  }, f = function(h) {
    if (!h || a.call(h) !== "[object Object]")
      return !1;
    var m = n.call(h, "constructor"), x = h.constructor && h.constructor.prototype && n.call(h.constructor.prototype, "isPrototypeOf");
    if (h.constructor && !m && !x)
      return !1;
    var w;
    for (w in h)
      ;
    return typeof w > "u" || n.call(h, w);
  }, d = function(h, m) {
    i && m.name === "__proto__" ? i(h, m.name, {
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
  return uc = function y() {
    var h, m, x, w, S, _, O = arguments[0], j = 1, B = arguments.length, F = !1;
    for (typeof O == "boolean" && (F = O, O = arguments[1] || {}, j = 2), (O == null || typeof O != "object" && typeof O != "function") && (O = {}); j < B; ++j)
      if (h = arguments[j], h != null)
        for (m in h)
          x = p(O, m), w = p(h, m), O !== w && (F && w && (f(w) || (S = s(w))) ? (S ? (S = !1, _ = x && s(x) ? x : []) : _ = x && f(x) ? x : {}, d(O, { name: m, newValue: y(F, _, w) })) : typeof w < "u" && d(O, { name: m, newValue: w }));
    return O;
  }, uc;
}
var fw = cw();
const oc = /* @__PURE__ */ Hc(fw);
function zc(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const a = Object.getPrototypeOf(n);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function dw() {
  const n = [], a = { run: i, use: u };
  return a;
  function i(...s) {
    let f = -1;
    const d = s.pop();
    if (typeof d != "function")
      throw new TypeError("Expected function as last argument, not " + d);
    p(null, ...s);
    function p(y, ...h) {
      const m = n[++f];
      let x = -1;
      if (y) {
        d(y);
        return;
      }
      for (; ++x < s.length; )
        (h[x] === null || h[x] === void 0) && (h[x] = s[x]);
      s = h, m ? hw(m, p)(...h) : d(null, ...h);
    }
  }
  function u(s) {
    if (typeof s != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + s
      );
    return n.push(s), a;
  }
}
function hw(n, a) {
  let i;
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
      if (p && i)
        throw m;
      return s(m);
    }
    p || (y && y.then && typeof y.then == "function" ? y.then(f, s) : y instanceof Error ? s(y) : f(y));
  }
  function s(d, ...p) {
    i || (i = !0, a(d, ...p));
  }
  function f(d) {
    s(null, d);
  }
}
const vn = { basename: pw, dirname: mw, extname: gw, join: yw, sep: "/" };
function pw(n, a) {
  if (a !== void 0 && typeof a != "string")
    throw new TypeError('"ext" argument must be a string');
  Kr(n);
  let i = 0, u = -1, s = n.length, f;
  if (a === void 0 || a.length === 0 || a.length > n.length) {
    for (; s--; )
      if (n.codePointAt(s) === 47) {
        if (f) {
          i = s + 1;
          break;
        }
      } else u < 0 && (f = !0, u = s + 1);
    return u < 0 ? "" : n.slice(i, u);
  }
  if (a === n)
    return "";
  let d = -1, p = a.length - 1;
  for (; s--; )
    if (n.codePointAt(s) === 47) {
      if (f) {
        i = s + 1;
        break;
      }
    } else
      d < 0 && (f = !0, d = s + 1), p > -1 && (n.codePointAt(s) === a.codePointAt(p--) ? p < 0 && (u = s) : (p = -1, u = d));
  return i === u ? u = d : u < 0 && (u = n.length), n.slice(i, u);
}
function mw(n) {
  if (Kr(n), n.length === 0)
    return ".";
  let a = -1, i = n.length, u;
  for (; --i; )
    if (n.codePointAt(i) === 47) {
      if (u) {
        a = i;
        break;
      }
    } else u || (u = !0);
  return a < 0 ? n.codePointAt(0) === 47 ? "/" : "." : a === 1 && n.codePointAt(0) === 47 ? "//" : n.slice(0, a);
}
function gw(n) {
  Kr(n);
  let a = n.length, i = -1, u = 0, s = -1, f = 0, d;
  for (; a--; ) {
    const p = n.codePointAt(a);
    if (p === 47) {
      if (d) {
        u = a + 1;
        break;
      }
      continue;
    }
    i < 0 && (d = !0, i = a + 1), p === 46 ? s < 0 ? s = a : f !== 1 && (f = 1) : s > -1 && (f = -1);
  }
  return s < 0 || i < 0 || // We saw a non-dot character immediately before the dot.
  f === 0 || // The (right-most) trimmed path component is exactly `..`.
  f === 1 && s === i - 1 && s === u + 1 ? "" : n.slice(s, i);
}
function yw(...n) {
  let a = -1, i;
  for (; ++a < n.length; )
    Kr(n[a]), n[a] && (i = i === void 0 ? n[a] : i + "/" + n[a]);
  return i === void 0 ? "." : bw(i);
}
function bw(n) {
  Kr(n);
  const a = n.codePointAt(0) === 47;
  let i = vw(n, !a);
  return i.length === 0 && !a && (i = "."), i.length > 0 && n.codePointAt(n.length - 1) === 47 && (i += "/"), a ? "/" + i : i;
}
function vw(n, a) {
  let i = "", u = 0, s = -1, f = 0, d = -1, p, y;
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
        if (i.length < 2 || u !== 2 || i.codePointAt(i.length - 1) !== 46 || i.codePointAt(i.length - 2) !== 46) {
          if (i.length > 2) {
            if (y = i.lastIndexOf("/"), y !== i.length - 1) {
              y < 0 ? (i = "", u = 0) : (i = i.slice(0, y), u = i.length - 1 - i.lastIndexOf("/")), s = d, f = 0;
              continue;
            }
          } else if (i.length > 0) {
            i = "", u = 0, s = d, f = 0;
            continue;
          }
        }
        a && (i = i.length > 0 ? i + "/.." : "..", u = 2);
      } else
        i.length > 0 ? i += "/" + n.slice(s + 1, d) : i = n.slice(s + 1, d), u = d - s - 1;
      s = d, f = 0;
    } else p === 46 && f > -1 ? f++ : f = -1;
  }
  return i;
}
function Kr(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
const xw = { cwd: Sw };
function Sw() {
  return "/";
}
function Nc(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function Ew(n) {
  if (typeof n == "string")
    n = new URL(n);
  else if (!Nc(n)) {
    const a = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + "`"
    );
    throw a.code = "ERR_INVALID_ARG_TYPE", a;
  }
  if (n.protocol !== "file:") {
    const a = new TypeError("The URL must be of scheme file");
    throw a.code = "ERR_INVALID_URL_SCHEME", a;
  }
  return ww(n);
}
function ww(n) {
  if (n.hostname !== "") {
    const u = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw u.code = "ERR_INVALID_FILE_URL_HOST", u;
  }
  const a = n.pathname;
  let i = -1;
  for (; ++i < a.length; )
    if (a.codePointAt(i) === 37 && a.codePointAt(i + 1) === 50) {
      const u = a.codePointAt(i + 2);
      if (u === 70 || u === 102) {
        const s = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
  return decodeURIComponent(a);
}
const sc = (
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
class dy {
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
  constructor(a) {
    let i;
    a ? Nc(a) ? i = { path: a } : typeof a == "string" || Tw(a) ? i = { value: a } : i = a : i = {}, this.cwd = "cwd" in i ? "" : xw.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < sc.length; ) {
      const f = sc[u];
      f in i && i[f] !== void 0 && i[f] !== null && (this[f] = f === "history" ? [...i[f]] : i[f]);
    }
    let s;
    for (s in i)
      sc.includes(s) || (this[s] = i[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? vn.basename(this.path) : void 0;
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
  set basename(a) {
    fc(a, "basename"), cc(a, "basename"), this.path = vn.join(this.dirname || "", a);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? vn.dirname(this.path) : void 0;
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
  set dirname(a) {
    Qm(this.basename, "dirname"), this.path = vn.join(a || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? vn.extname(this.path) : void 0;
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
  set extname(a) {
    if (cc(a, "extname"), Qm(this.dirname, "extname"), a) {
      if (a.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (a.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = vn.join(this.dirname, this.stem + (a || ""));
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
  set path(a) {
    Nc(a) && (a = Ew(a)), fc(a, "path"), this.path !== a && this.history.push(a);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? vn.basename(this.path, this.extname) : void 0;
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
  set stem(a) {
    fc(a, "stem"), cc(a, "stem"), this.path = vn.join(this.dirname || "", a + (this.extname || ""));
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
  fail(a, i, u) {
    const s = this.message(a, i, u);
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
  info(a, i, u) {
    const s = this.message(a, i, u);
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
  message(a, i, u) {
    const s = new vt(
      // @ts-expect-error: the overloads are fine.
      a,
      i,
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
  toString(a) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(a || void 0).decode(this.value);
  }
}
function cc(n, a) {
  if (n && n.includes(vn.sep))
    throw new Error(
      "`" + a + "` cannot be a path: did not expect `" + vn.sep + "`"
    );
}
function fc(n, a) {
  if (!n)
    throw new Error("`" + a + "` cannot be empty");
}
function Qm(n, a) {
  if (!n)
    throw new Error("Setting `" + a + "` requires `path` to be set too");
}
function Tw(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const kw = (
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
), Aw = {}.hasOwnProperty;
class tf extends kw {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = dw();
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
    const a = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new tf()
    );
    let i = -1;
    for (; ++i < this.attachers.length; ) {
      const u = this.attachers[i];
      a.use(...u);
    }
    return a.data(oc(!0, {}, this.namespace)), a;
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
  data(a, i) {
    return typeof a == "string" ? arguments.length === 2 ? (pc("data", this.frozen), this.namespace[a] = i, this) : Aw.call(this.namespace, a) && this.namespace[a] || void 0 : a ? (pc("data", this.frozen), this.namespace = a, this) : this.namespace;
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
    const a = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [i, ...u] = this.attachers[this.freezeIndex];
      if (u[0] === !1)
        continue;
      u[0] === !0 && (u[0] = void 0);
      const s = i.call(a, ...u);
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
  parse(a) {
    this.freeze();
    const i = du(a), u = this.parser || this.Parser;
    return dc("parse", u), u(String(i), i);
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
  process(a, i) {
    const u = this;
    return this.freeze(), dc("process", this.parser || this.Parser), hc("process", this.compiler || this.Compiler), i ? s(void 0, i) : new Promise(s);
    function s(f, d) {
      const p = du(a), y = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        u.parse(p)
      );
      u.run(y, p, function(m, x, w) {
        if (m || !x || !w)
          return h(m);
        const S = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          x
        ), _ = u.stringify(S, w);
        Rw(_) ? w.value = _ : w.result = _, h(
          m,
          /** @type {VFileWithOutput<CompileResult>} */
          w
        );
      });
      function h(m, x) {
        m || !x ? d(m) : f ? f(x) : i(void 0, x);
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
  processSync(a) {
    let i = !1, u;
    return this.freeze(), dc("processSync", this.parser || this.Parser), hc("processSync", this.compiler || this.Compiler), this.process(a, s), Km("processSync", "process", i), u;
    function s(f, d) {
      i = !0, Ym(f), u = d;
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
  run(a, i, u) {
    Xm(a), this.freeze();
    const s = this.transformers;
    return !u && typeof i == "function" && (u = i, i = void 0), u ? f(void 0, u) : new Promise(f);
    function f(d, p) {
      const y = du(i);
      s.run(a, y, h);
      function h(m, x, w) {
        const S = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          x || a
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
  runSync(a, i) {
    let u = !1, s;
    return this.run(a, i, f), Km("runSync", "run", u), s;
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
  stringify(a, i) {
    this.freeze();
    const u = du(i), s = this.compiler || this.Compiler;
    return hc("stringify", s), Xm(a), s(a, u);
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
  use(a, ...i) {
    const u = this.attachers, s = this.namespace;
    if (pc("use", this.frozen), a != null) if (typeof a == "function")
      y(a, i);
    else if (typeof a == "object")
      Array.isArray(a) ? p(a) : d(a);
    else
      throw new TypeError("Expected usable value, not `" + a + "`");
    return this;
    function f(h) {
      if (typeof h == "function")
        y(h, []);
      else if (typeof h == "object")
        if (Array.isArray(h)) {
          const [m, ...x] = (
            /** @type {PluginTuple<Array<unknown>>} */
            h
          );
          y(m, x);
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
      p(h.plugins), h.settings && (s.settings = oc(!0, s.settings, h.settings));
    }
    function p(h) {
      let m = -1;
      if (h != null) if (Array.isArray(h))
        for (; ++m < h.length; ) {
          const x = h[m];
          f(x);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + h + "`");
    }
    function y(h, m) {
      let x = -1, w = -1;
      for (; ++x < u.length; )
        if (u[x][0] === h) {
          w = x;
          break;
        }
      if (w === -1)
        u.push([h, ...m]);
      else if (m.length > 0) {
        let [S, ..._] = m;
        const O = u[w][1];
        zc(O) && zc(S) && (S = oc(!0, O, S)), u[w] = [h, S, ..._];
      }
    }
  }
}
const Cw = new tf().freeze();
function dc(n, a) {
  if (typeof a != "function")
    throw new TypeError("Cannot `" + n + "` without `parser`");
}
function hc(n, a) {
  if (typeof a != "function")
    throw new TypeError("Cannot `" + n + "` without `compiler`");
}
function pc(n, a) {
  if (a)
    throw new Error(
      "Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Xm(n) {
  if (!zc(n) || typeof n.type != "string")
    throw new TypeError("Expected node, got `" + n + "`");
}
function Km(n, a, i) {
  if (!i)
    throw new Error(
      "`" + n + "` finished async. Use `" + a + "` instead"
    );
}
function du(n) {
  return _w(n) ? n : new dy(n);
}
function _w(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function Rw(n) {
  return typeof n == "string" || Ow(n);
}
function Ow(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const zw = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Zm = [], Fm = { allowDangerousHtml: !0 }, Nw = /^(https?|ircs?|mailto|xmpp)$/i, Mw = [
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
function Dw(n) {
  const a = Uw(n), i = Bw(n);
  return jw(a.runSync(a.parse(i), i), n);
}
function Uw(n) {
  const a = n.rehypePlugins || Zm, i = n.remarkPlugins || Zm, u = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...Fm } : Fm;
  return Cw().use(pE).use(i).use(sw, u).use(a);
}
function Bw(n) {
  const a = n.children || "", i = new dy();
  return typeof a == "string" && (i.value = a), i;
}
function jw(n, a) {
  const i = a.allowedElements, u = a.allowElement, s = a.components, f = a.disallowedElements, d = a.skipHtml, p = a.unwrapDisallowed, y = a.urlTransform || Lw;
  for (const m of Mw)
    Object.hasOwn(a, m.from) && ("" + m.from + (m.to ? "use `" + m.to + "` instead" : "remove it") + zw + m.id, void 0);
  return fy(n, h), Zv(n, {
    Fragment: V.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: V.jsx,
    jsxs: V.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function h(m, x, w) {
    if (m.type === "raw" && w && typeof x == "number")
      return d ? w.children.splice(x, 1) : w.children[x] = { type: "text", value: m.value }, x;
    if (m.type === "element") {
      let S;
      for (S in ac)
        if (Object.hasOwn(ac, S) && Object.hasOwn(m.properties, S)) {
          const _ = m.properties[S], O = ac[S];
          (O === null || O.includes(m.tagName)) && (m.properties[S] = y(String(_ || ""), S, m));
        }
    }
    if (m.type === "element") {
      let S = i ? !i.includes(m.tagName) : f ? f.includes(m.tagName) : !1;
      if (!S && u && typeof x == "number" && (S = !u(m, x, w)), S && w && typeof x == "number")
        return p && m.children ? w.children.splice(x, 1, ...m.children) : w.children.splice(x, 1), x;
    }
  }
}
function Lw(n) {
  const a = n.indexOf(":"), i = n.indexOf("?"), u = n.indexOf("#"), s = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    a === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && a > s || i !== -1 && a > i || u !== -1 && a > u || // It is a protocol, it should be allowed.
    Nw.test(n.slice(0, a)) ? n : ""
  );
}
function Hw({ content: n, className: a = "" }) {
  return /* @__PURE__ */ V.jsx("div", { className: `prose prose-sm max-w-none dark:prose-invert ${a}`, children: /* @__PURE__ */ V.jsx(
    Dw,
    {
      components: {
        // Custom styling for markdown elements
        p: ({ children: i }) => /* @__PURE__ */ V.jsx("p", { className: "mb-2 last:mb-0", children: i }),
        ul: ({ children: i }) => /* @__PURE__ */ V.jsx("ul", { className: "list-disc list-inside mb-2 space-y-1", children: i }),
        ol: ({ children: i }) => /* @__PURE__ */ V.jsx("ol", { className: "list-decimal list-inside mb-2 space-y-1", children: i }),
        li: ({ children: i }) => /* @__PURE__ */ V.jsx("li", { className: "text-sm", children: i }),
        strong: ({ children: i }) => /* @__PURE__ */ V.jsx("strong", { className: "font-semibold", children: i }),
        em: ({ children: i }) => /* @__PURE__ */ V.jsx("em", { className: "italic", children: i }),
        code: ({ children: i }) => /* @__PURE__ */ V.jsx("code", { className: "bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono", children: i }),
        pre: ({ children: i }) => /* @__PURE__ */ V.jsx("pre", { className: "bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto", children: i }),
        h1: ({ children: i }) => /* @__PURE__ */ V.jsx("h1", { className: "text-lg font-bold mb-2", children: i }),
        h2: ({ children: i }) => /* @__PURE__ */ V.jsx("h2", { className: "text-base font-bold mb-2", children: i }),
        h3: ({ children: i }) => /* @__PURE__ */ V.jsx("h3", { className: "text-sm font-bold mb-1", children: i }),
        a: ({ children: i, href: u }) => /* @__PURE__ */ V.jsx(
          "a",
          {
            href: u,
            className: "text-blue-500 hover:text-blue-600 underline",
            target: "_blank",
            rel: "noopener noreferrer",
            children: i
          }
        )
      },
      children: n
    }
  ) });
}
function hy(n, a) {
  return function() {
    return n.apply(a, arguments);
  };
}
const { toString: qw } = Object.prototype, { getPrototypeOf: nf } = Object, { iterator: ku, toStringTag: py } = Symbol, Au = /* @__PURE__ */ ((n) => (a) => {
  const i = qw.call(a);
  return n[i] || (n[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), cn = (n) => (n = n.toLowerCase(), (a) => Au(a) === n), Cu = (n) => (a) => typeof a === n, { isArray: za } = Array, Qr = Cu("undefined");
function Vw(n) {
  return n !== null && !Qr(n) && n.constructor !== null && !Qr(n.constructor) && Ot(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const my = cn("ArrayBuffer");
function Yw(n) {
  let a;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(n) : a = n && n.buffer && my(n.buffer), a;
}
const Gw = Cu("string"), Ot = Cu("function"), gy = Cu("number"), _u = (n) => n !== null && typeof n == "object", Qw = (n) => n === !0 || n === !1, mu = (n) => {
  if (Au(n) !== "object")
    return !1;
  const a = nf(n);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(py in n) && !(ku in n);
}, Xw = cn("Date"), Kw = cn("File"), Zw = cn("Blob"), Fw = cn("FileList"), Iw = (n) => _u(n) && Ot(n.pipe), Jw = (n) => {
  let a;
  return n && (typeof FormData == "function" && n instanceof FormData || Ot(n.append) && ((a = Au(n)) === "formdata" || // detect form-data instance
  a === "object" && Ot(n.toString) && n.toString() === "[object FormData]"));
}, Pw = cn("URLSearchParams"), [$w, Ww, e2, t2] = ["ReadableStream", "Request", "Response", "Headers"].map(cn), n2 = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zr(n, a, { allOwnKeys: i = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let u, s;
  if (typeof n != "object" && (n = [n]), za(n))
    for (u = 0, s = n.length; u < s; u++)
      a.call(null, n[u], u, n);
  else {
    const f = i ? Object.getOwnPropertyNames(n) : Object.keys(n), d = f.length;
    let p;
    for (u = 0; u < d; u++)
      p = f[u], a.call(null, n[p], p, n);
  }
}
function yy(n, a) {
  a = a.toLowerCase();
  const i = Object.keys(n);
  let u = i.length, s;
  for (; u-- > 0; )
    if (s = i[u], a === s.toLowerCase())
      return s;
  return null;
}
const Nl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, by = (n) => !Qr(n) && n !== Nl;
function Mc() {
  const { caseless: n } = by(this) && this || {}, a = {}, i = (u, s) => {
    const f = n && yy(a, s) || s;
    mu(a[f]) && mu(u) ? a[f] = Mc(a[f], u) : mu(u) ? a[f] = Mc({}, u) : za(u) ? a[f] = u.slice() : a[f] = u;
  };
  for (let u = 0, s = arguments.length; u < s; u++)
    arguments[u] && Zr(arguments[u], i);
  return a;
}
const l2 = (n, a, i, { allOwnKeys: u } = {}) => (Zr(a, (s, f) => {
  i && Ot(s) ? n[f] = hy(s, i) : n[f] = s;
}, { allOwnKeys: u }), n), a2 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), r2 = (n, a, i, u) => {
  n.prototype = Object.create(a.prototype, u), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: a.prototype
  }), i && Object.assign(n.prototype, i);
}, i2 = (n, a, i, u) => {
  let s, f, d;
  const p = {};
  if (a = a || {}, n == null) return a;
  do {
    for (s = Object.getOwnPropertyNames(n), f = s.length; f-- > 0; )
      d = s[f], (!u || u(d, n, a)) && !p[d] && (a[d] = n[d], p[d] = !0);
    n = i !== !1 && nf(n);
  } while (n && (!i || i(n, a)) && n !== Object.prototype);
  return a;
}, u2 = (n, a, i) => {
  n = String(n), (i === void 0 || i > n.length) && (i = n.length), i -= a.length;
  const u = n.indexOf(a, i);
  return u !== -1 && u === i;
}, o2 = (n) => {
  if (!n) return null;
  if (za(n)) return n;
  let a = n.length;
  if (!gy(a)) return null;
  const i = new Array(a);
  for (; a-- > 0; )
    i[a] = n[a];
  return i;
}, s2 = /* @__PURE__ */ ((n) => (a) => n && a instanceof n)(typeof Uint8Array < "u" && nf(Uint8Array)), c2 = (n, a) => {
  const u = (n && n[ku]).call(n);
  let s;
  for (; (s = u.next()) && !s.done; ) {
    const f = s.value;
    a.call(n, f[0], f[1]);
  }
}, f2 = (n, a) => {
  let i;
  const u = [];
  for (; (i = n.exec(a)) !== null; )
    u.push(i);
  return u;
}, d2 = cn("HTMLFormElement"), h2 = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, u, s) {
    return u.toUpperCase() + s;
  }
), Im = (({ hasOwnProperty: n }) => (a, i) => n.call(a, i))(Object.prototype), p2 = cn("RegExp"), vy = (n, a) => {
  const i = Object.getOwnPropertyDescriptors(n), u = {};
  Zr(i, (s, f) => {
    let d;
    (d = a(s, f, n)) !== !1 && (u[f] = d || s);
  }), Object.defineProperties(n, u);
}, m2 = (n) => {
  vy(n, (a, i) => {
    if (Ot(n) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
      return !1;
    const u = n[i];
    if (Ot(u)) {
      if (a.enumerable = !1, "writable" in a) {
        a.writable = !1;
        return;
      }
      a.set || (a.set = () => {
        throw Error("Can not rewrite read-only method '" + i + "'");
      });
    }
  });
}, g2 = (n, a) => {
  const i = {}, u = (s) => {
    s.forEach((f) => {
      i[f] = !0;
    });
  };
  return za(n) ? u(n) : u(String(n).split(a)), i;
}, y2 = () => {
}, b2 = (n, a) => n != null && Number.isFinite(n = +n) ? n : a;
function v2(n) {
  return !!(n && Ot(n.append) && n[py] === "FormData" && n[ku]);
}
const x2 = (n) => {
  const a = new Array(10), i = (u, s) => {
    if (_u(u)) {
      if (a.indexOf(u) >= 0)
        return;
      if (!("toJSON" in u)) {
        a[s] = u;
        const f = za(u) ? [] : {};
        return Zr(u, (d, p) => {
          const y = i(d, s + 1);
          !Qr(y) && (f[p] = y);
        }), a[s] = void 0, f;
      }
    }
    return u;
  };
  return i(n, 0);
}, S2 = cn("AsyncFunction"), E2 = (n) => n && (_u(n) || Ot(n)) && Ot(n.then) && Ot(n.catch), xy = ((n, a) => n ? setImmediate : a ? ((i, u) => (Nl.addEventListener("message", ({ source: s, data: f }) => {
  s === Nl && f === i && u.length && u.shift()();
}, !1), (s) => {
  u.push(s), Nl.postMessage(i, "*");
}))(`axios@${Math.random()}`, []) : (i) => setTimeout(i))(
  typeof setImmediate == "function",
  Ot(Nl.postMessage)
), w2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Nl) : typeof process < "u" && process.nextTick || xy, T2 = (n) => n != null && Ot(n[ku]), D = {
  isArray: za,
  isArrayBuffer: my,
  isBuffer: Vw,
  isFormData: Jw,
  isArrayBufferView: Yw,
  isString: Gw,
  isNumber: gy,
  isBoolean: Qw,
  isObject: _u,
  isPlainObject: mu,
  isReadableStream: $w,
  isRequest: Ww,
  isResponse: e2,
  isHeaders: t2,
  isUndefined: Qr,
  isDate: Xw,
  isFile: Kw,
  isBlob: Zw,
  isRegExp: p2,
  isFunction: Ot,
  isStream: Iw,
  isURLSearchParams: Pw,
  isTypedArray: s2,
  isFileList: Fw,
  forEach: Zr,
  merge: Mc,
  extend: l2,
  trim: n2,
  stripBOM: a2,
  inherits: r2,
  toFlatObject: i2,
  kindOf: Au,
  kindOfTest: cn,
  endsWith: u2,
  toArray: o2,
  forEachEntry: c2,
  matchAll: f2,
  isHTMLForm: d2,
  hasOwnProperty: Im,
  hasOwnProp: Im,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: vy,
  freezeMethods: m2,
  toObjectSet: g2,
  toCamelCase: h2,
  noop: y2,
  toFiniteNumber: b2,
  findKey: yy,
  global: Nl,
  isContextDefined: by,
  isSpecCompliantForm: v2,
  toJSONObject: x2,
  isAsyncFn: S2,
  isThenable: E2,
  setImmediate: xy,
  asap: w2,
  isIterable: T2
};
function we(n, a, i, u, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", a && (this.code = a), i && (this.config = i), u && (this.request = u), s && (this.response = s, this.status = s.status ? s.status : null);
}
D.inherits(we, Error, {
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
const Sy = we.prototype, Ey = {};
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
  Ey[n] = { value: n };
});
Object.defineProperties(we, Ey);
Object.defineProperty(Sy, "isAxiosError", { value: !0 });
we.from = (n, a, i, u, s, f) => {
  const d = Object.create(Sy);
  return D.toFlatObject(n, d, function(y) {
    return y !== Error.prototype;
  }, (p) => p !== "isAxiosError"), we.call(d, n.message, a, i, u, s), d.cause = n, d.name = n.name, f && Object.assign(d, f), d;
};
const k2 = null;
function Dc(n) {
  return D.isPlainObject(n) || D.isArray(n);
}
function wy(n) {
  return D.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Jm(n, a, i) {
  return n ? n.concat(a).map(function(s, f) {
    return s = wy(s), !i && f ? "[" + s + "]" : s;
  }).join(i ? "." : "") : a;
}
function A2(n) {
  return D.isArray(n) && !n.some(Dc);
}
const C2 = D.toFlatObject(D, {}, null, function(a) {
  return /^is[A-Z]/.test(a);
});
function Ru(n, a, i) {
  if (!D.isObject(n))
    throw new TypeError("target must be an object");
  a = a || new FormData(), i = D.toFlatObject(i, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(O, j) {
    return !D.isUndefined(j[O]);
  });
  const u = i.metaTokens, s = i.visitor || m, f = i.dots, d = i.indexes, y = (i.Blob || typeof Blob < "u" && Blob) && D.isSpecCompliantForm(a);
  if (!D.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(_) {
    if (_ === null) return "";
    if (D.isDate(_))
      return _.toISOString();
    if (D.isBoolean(_))
      return _.toString();
    if (!y && D.isBlob(_))
      throw new we("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(_) || D.isTypedArray(_) ? y && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _;
  }
  function m(_, O, j) {
    let B = _;
    if (_ && !j && typeof _ == "object") {
      if (D.endsWith(O, "{}"))
        O = u ? O : O.slice(0, -2), _ = JSON.stringify(_);
      else if (D.isArray(_) && A2(_) || (D.isFileList(_) || D.endsWith(O, "[]")) && (B = D.toArray(_)))
        return O = wy(O), B.forEach(function(K, ue) {
          !(D.isUndefined(K) || K === null) && a.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? Jm([O], ue, f) : d === null ? O : O + "[]",
            h(K)
          );
        }), !1;
    }
    return Dc(_) ? !0 : (a.append(Jm(j, O, f), h(_)), !1);
  }
  const x = [], w = Object.assign(C2, {
    defaultVisitor: m,
    convertValue: h,
    isVisitable: Dc
  });
  function S(_, O) {
    if (!D.isUndefined(_)) {
      if (x.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      x.push(_), D.forEach(_, function(B, F) {
        (!(D.isUndefined(B) || B === null) && s.call(
          a,
          B,
          D.isString(F) ? F.trim() : F,
          O,
          w
        )) === !0 && S(B, O ? O.concat(F) : [F]);
      }), x.pop();
    }
  }
  if (!D.isObject(n))
    throw new TypeError("data must be an object");
  return S(n), a;
}
function Pm(n) {
  const a = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(u) {
    return a[u];
  });
}
function lf(n, a) {
  this._pairs = [], n && Ru(n, this, a);
}
const Ty = lf.prototype;
Ty.append = function(a, i) {
  this._pairs.push([a, i]);
};
Ty.toString = function(a) {
  const i = a ? function(u) {
    return a.call(this, u, Pm);
  } : Pm;
  return this._pairs.map(function(s) {
    return i(s[0]) + "=" + i(s[1]);
  }, "").join("&");
};
function _2(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ky(n, a, i) {
  if (!a)
    return n;
  const u = i && i.encode || _2;
  D.isFunction(i) && (i = {
    serialize: i
  });
  const s = i && i.serialize;
  let f;
  if (s ? f = s(a, i) : f = D.isURLSearchParams(a) ? a.toString() : new lf(a, i).toString(u), f) {
    const d = n.indexOf("#");
    d !== -1 && (n = n.slice(0, d)), n += (n.indexOf("?") === -1 ? "?" : "&") + f;
  }
  return n;
}
class $m {
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
  use(a, i, u) {
    return this.handlers.push({
      fulfilled: a,
      rejected: i,
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
  eject(a) {
    this.handlers[a] && (this.handlers[a] = null);
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
  forEach(a) {
    D.forEach(this.handlers, function(u) {
      u !== null && a(u);
    });
  }
}
const Ay = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, R2 = typeof URLSearchParams < "u" ? URLSearchParams : lf, O2 = typeof FormData < "u" ? FormData : null, z2 = typeof Blob < "u" ? Blob : null, N2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: R2,
    FormData: O2,
    Blob: z2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, af = typeof window < "u" && typeof document < "u", Uc = typeof navigator == "object" && navigator || void 0, M2 = af && (!Uc || ["ReactNative", "NativeScript", "NS"].indexOf(Uc.product) < 0), D2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", U2 = af && window.location.href || "http://localhost", B2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: af,
  hasStandardBrowserEnv: M2,
  hasStandardBrowserWebWorkerEnv: D2,
  navigator: Uc,
  origin: U2
}, Symbol.toStringTag, { value: "Module" })), bt = {
  ...B2,
  ...N2
};
function j2(n, a) {
  return Ru(n, new bt.classes.URLSearchParams(), Object.assign({
    visitor: function(i, u, s, f) {
      return bt.isNode && D.isBuffer(i) ? (this.append(u, i.toString("base64")), !1) : f.defaultVisitor.apply(this, arguments);
    }
  }, a));
}
function L2(n) {
  return D.matchAll(/\w+|\[(\w*)]/g, n).map((a) => a[0] === "[]" ? "" : a[1] || a[0]);
}
function H2(n) {
  const a = {}, i = Object.keys(n);
  let u;
  const s = i.length;
  let f;
  for (u = 0; u < s; u++)
    f = i[u], a[f] = n[f];
  return a;
}
function Cy(n) {
  function a(i, u, s, f) {
    let d = i[f++];
    if (d === "__proto__") return !0;
    const p = Number.isFinite(+d), y = f >= i.length;
    return d = !d && D.isArray(s) ? s.length : d, y ? (D.hasOwnProp(s, d) ? s[d] = [s[d], u] : s[d] = u, !p) : ((!s[d] || !D.isObject(s[d])) && (s[d] = []), a(i, u, s[d], f) && D.isArray(s[d]) && (s[d] = H2(s[d])), !p);
  }
  if (D.isFormData(n) && D.isFunction(n.entries)) {
    const i = {};
    return D.forEachEntry(n, (u, s) => {
      a(L2(u), s, i, 0);
    }), i;
  }
  return null;
}
function q2(n, a, i) {
  if (D.isString(n))
    try {
      return (a || JSON.parse)(n), D.trim(n);
    } catch (u) {
      if (u.name !== "SyntaxError")
        throw u;
    }
  return (i || JSON.stringify)(n);
}
const Fr = {
  transitional: Ay,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(a, i) {
    const u = i.getContentType() || "", s = u.indexOf("application/json") > -1, f = D.isObject(a);
    if (f && D.isHTMLForm(a) && (a = new FormData(a)), D.isFormData(a))
      return s ? JSON.stringify(Cy(a)) : a;
    if (D.isArrayBuffer(a) || D.isBuffer(a) || D.isStream(a) || D.isFile(a) || D.isBlob(a) || D.isReadableStream(a))
      return a;
    if (D.isArrayBufferView(a))
      return a.buffer;
    if (D.isURLSearchParams(a))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), a.toString();
    let p;
    if (f) {
      if (u.indexOf("application/x-www-form-urlencoded") > -1)
        return j2(a, this.formSerializer).toString();
      if ((p = D.isFileList(a)) || u.indexOf("multipart/form-data") > -1) {
        const y = this.env && this.env.FormData;
        return Ru(
          p ? { "files[]": a } : a,
          y && new y(),
          this.formSerializer
        );
      }
    }
    return f || s ? (i.setContentType("application/json", !1), q2(a)) : a;
  }],
  transformResponse: [function(a) {
    const i = this.transitional || Fr.transitional, u = i && i.forcedJSONParsing, s = this.responseType === "json";
    if (D.isResponse(a) || D.isReadableStream(a))
      return a;
    if (a && D.isString(a) && (u && !this.responseType || s)) {
      const d = !(i && i.silentJSONParsing) && s;
      try {
        return JSON.parse(a);
      } catch (p) {
        if (d)
          throw p.name === "SyntaxError" ? we.from(p, we.ERR_BAD_RESPONSE, this, null, this.response) : p;
      }
    }
    return a;
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
  validateStatus: function(a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
D.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Fr.headers[n] = {};
});
const V2 = D.toObjectSet([
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
]), Y2 = (n) => {
  const a = {};
  let i, u, s;
  return n && n.split(`
`).forEach(function(d) {
    s = d.indexOf(":"), i = d.substring(0, s).trim().toLowerCase(), u = d.substring(s + 1).trim(), !(!i || a[i] && V2[i]) && (i === "set-cookie" ? a[i] ? a[i].push(u) : a[i] = [u] : a[i] = a[i] ? a[i] + ", " + u : u);
  }), a;
}, Wm = Symbol("internals");
function Hr(n) {
  return n && String(n).trim().toLowerCase();
}
function gu(n) {
  return n === !1 || n == null ? n : D.isArray(n) ? n.map(gu) : String(n);
}
function G2(n) {
  const a = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; u = i.exec(n); )
    a[u[1]] = u[2];
  return a;
}
const Q2 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function mc(n, a, i, u, s) {
  if (D.isFunction(u))
    return u.call(this, a, i);
  if (s && (a = i), !!D.isString(a)) {
    if (D.isString(u))
      return a.indexOf(u) !== -1;
    if (D.isRegExp(u))
      return u.test(a);
  }
}
function X2(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, i, u) => i.toUpperCase() + u);
}
function K2(n, a) {
  const i = D.toCamelCase(" " + a);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(n, u + i, {
      value: function(s, f, d) {
        return this[u].call(this, a, s, f, d);
      },
      configurable: !0
    });
  });
}
let zt = class {
  constructor(a) {
    a && this.set(a);
  }
  set(a, i, u) {
    const s = this;
    function f(p, y, h) {
      const m = Hr(y);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const x = D.findKey(s, m);
      (!x || s[x] === void 0 || h === !0 || h === void 0 && s[x] !== !1) && (s[x || y] = gu(p));
    }
    const d = (p, y) => D.forEach(p, (h, m) => f(h, m, y));
    if (D.isPlainObject(a) || a instanceof this.constructor)
      d(a, i);
    else if (D.isString(a) && (a = a.trim()) && !Q2(a))
      d(Y2(a), i);
    else if (D.isObject(a) && D.isIterable(a)) {
      let p = {}, y, h;
      for (const m of a) {
        if (!D.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        p[h = m[0]] = (y = p[h]) ? D.isArray(y) ? [...y, m[1]] : [y, m[1]] : m[1];
      }
      d(p, i);
    } else
      a != null && f(i, a, u);
    return this;
  }
  get(a, i) {
    if (a = Hr(a), a) {
      const u = D.findKey(this, a);
      if (u) {
        const s = this[u];
        if (!i)
          return s;
        if (i === !0)
          return G2(s);
        if (D.isFunction(i))
          return i.call(this, s, u);
        if (D.isRegExp(i))
          return i.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(a, i) {
    if (a = Hr(a), a) {
      const u = D.findKey(this, a);
      return !!(u && this[u] !== void 0 && (!i || mc(this, this[u], u, i)));
    }
    return !1;
  }
  delete(a, i) {
    const u = this;
    let s = !1;
    function f(d) {
      if (d = Hr(d), d) {
        const p = D.findKey(u, d);
        p && (!i || mc(u, u[p], p, i)) && (delete u[p], s = !0);
      }
    }
    return D.isArray(a) ? a.forEach(f) : f(a), s;
  }
  clear(a) {
    const i = Object.keys(this);
    let u = i.length, s = !1;
    for (; u--; ) {
      const f = i[u];
      (!a || mc(this, this[f], f, a, !0)) && (delete this[f], s = !0);
    }
    return s;
  }
  normalize(a) {
    const i = this, u = {};
    return D.forEach(this, (s, f) => {
      const d = D.findKey(u, f);
      if (d) {
        i[d] = gu(s), delete i[f];
        return;
      }
      const p = a ? X2(f) : String(f).trim();
      p !== f && delete i[f], i[p] = gu(s), u[p] = !0;
    }), this;
  }
  concat(...a) {
    return this.constructor.concat(this, ...a);
  }
  toJSON(a) {
    const i = /* @__PURE__ */ Object.create(null);
    return D.forEach(this, (u, s) => {
      u != null && u !== !1 && (i[s] = a && D.isArray(u) ? u.join(", ") : u);
    }), i;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([a, i]) => a + ": " + i).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(a) {
    return a instanceof this ? a : new this(a);
  }
  static concat(a, ...i) {
    const u = new this(a);
    return i.forEach((s) => u.set(s)), u;
  }
  static accessor(a) {
    const u = (this[Wm] = this[Wm] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function f(d) {
      const p = Hr(d);
      u[p] || (K2(s, d), u[p] = !0);
    }
    return D.isArray(a) ? a.forEach(f) : f(a), this;
  }
};
zt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
D.reduceDescriptors(zt.prototype, ({ value: n }, a) => {
  let i = a[0].toUpperCase() + a.slice(1);
  return {
    get: () => n,
    set(u) {
      this[i] = u;
    }
  };
});
D.freezeMethods(zt);
function gc(n, a) {
  const i = this || Fr, u = a || i, s = zt.from(u.headers);
  let f = u.data;
  return D.forEach(n, function(p) {
    f = p.call(i, f, s.normalize(), a ? a.status : void 0);
  }), s.normalize(), f;
}
function _y(n) {
  return !!(n && n.__CANCEL__);
}
function Na(n, a, i) {
  we.call(this, n ?? "canceled", we.ERR_CANCELED, a, i), this.name = "CanceledError";
}
D.inherits(Na, we, {
  __CANCEL__: !0
});
function Ry(n, a, i) {
  const u = i.config.validateStatus;
  !i.status || !u || u(i.status) ? n(i) : a(new we(
    "Request failed with status code " + i.status,
    [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
    i.config,
    i.request,
    i
  ));
}
function Z2(n) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return a && a[1] || "";
}
function F2(n, a) {
  n = n || 10;
  const i = new Array(n), u = new Array(n);
  let s = 0, f = 0, d;
  return a = a !== void 0 ? a : 1e3, function(y) {
    const h = Date.now(), m = u[f];
    d || (d = h), i[s] = y, u[s] = h;
    let x = f, w = 0;
    for (; x !== s; )
      w += i[x++], x = x % n;
    if (s = (s + 1) % n, s === f && (f = (f + 1) % n), h - d < a)
      return;
    const S = m && h - m;
    return S ? Math.round(w * 1e3 / S) : void 0;
  };
}
function I2(n, a) {
  let i = 0, u = 1e3 / a, s, f;
  const d = (h, m = Date.now()) => {
    i = m, s = null, f && (clearTimeout(f), f = null), n.apply(null, h);
  };
  return [(...h) => {
    const m = Date.now(), x = m - i;
    x >= u ? d(h, m) : (s = h, f || (f = setTimeout(() => {
      f = null, d(s);
    }, u - x)));
  }, () => s && d(s)];
}
const xu = (n, a, i = 3) => {
  let u = 0;
  const s = F2(50, 250);
  return I2((f) => {
    const d = f.loaded, p = f.lengthComputable ? f.total : void 0, y = d - u, h = s(y), m = d <= p;
    u = d;
    const x = {
      loaded: d,
      total: p,
      progress: p ? d / p : void 0,
      bytes: y,
      rate: h || void 0,
      estimated: h && p && m ? (p - d) / h : void 0,
      event: f,
      lengthComputable: p != null,
      [a ? "download" : "upload"]: !0
    };
    n(x);
  }, i);
}, eg = (n, a) => {
  const i = n != null;
  return [(u) => a[0]({
    lengthComputable: i,
    total: n,
    loaded: u
  }), a[1]];
}, tg = (n) => (...a) => D.asap(() => n(...a)), J2 = bt.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, a) => (i) => (i = new URL(i, bt.origin), n.protocol === i.protocol && n.host === i.host && (a || n.port === i.port)))(
  new URL(bt.origin),
  bt.navigator && /(msie|trident)/i.test(bt.navigator.userAgent)
) : () => !0, P2 = bt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, a, i, u, s, f) {
      const d = [n + "=" + encodeURIComponent(a)];
      D.isNumber(i) && d.push("expires=" + new Date(i).toGMTString()), D.isString(u) && d.push("path=" + u), D.isString(s) && d.push("domain=" + s), f === !0 && d.push("secure"), document.cookie = d.join("; ");
    },
    read(n) {
      const a = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return a ? decodeURIComponent(a[3]) : null;
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
function $2(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function W2(n, a) {
  return a ? n.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : n;
}
function Oy(n, a, i) {
  let u = !$2(a);
  return n && (u || i == !1) ? W2(n, a) : a;
}
const ng = (n) => n instanceof zt ? { ...n } : n;
function Dl(n, a) {
  a = a || {};
  const i = {};
  function u(h, m, x, w) {
    return D.isPlainObject(h) && D.isPlainObject(m) ? D.merge.call({ caseless: w }, h, m) : D.isPlainObject(m) ? D.merge({}, m) : D.isArray(m) ? m.slice() : m;
  }
  function s(h, m, x, w) {
    if (D.isUndefined(m)) {
      if (!D.isUndefined(h))
        return u(void 0, h, x, w);
    } else return u(h, m, x, w);
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
  function p(h, m, x) {
    if (x in a)
      return u(h, m);
    if (x in n)
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
    headers: (h, m, x) => s(ng(h), ng(m), x, !0)
  };
  return D.forEach(Object.keys(Object.assign({}, n, a)), function(m) {
    const x = y[m] || s, w = x(n[m], a[m], m);
    D.isUndefined(w) && x !== p || (i[m] = w);
  }), i;
}
const zy = (n) => {
  const a = Dl({}, n);
  let { data: i, withXSRFToken: u, xsrfHeaderName: s, xsrfCookieName: f, headers: d, auth: p } = a;
  a.headers = d = zt.from(d), a.url = ky(Oy(a.baseURL, a.url, a.allowAbsoluteUrls), n.params, n.paramsSerializer), p && d.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let y;
  if (D.isFormData(i)) {
    if (bt.hasStandardBrowserEnv || bt.hasStandardBrowserWebWorkerEnv)
      d.setContentType(void 0);
    else if ((y = d.getContentType()) !== !1) {
      const [h, ...m] = y ? y.split(";").map((x) => x.trim()).filter(Boolean) : [];
      d.setContentType([h || "multipart/form-data", ...m].join("; "));
    }
  }
  if (bt.hasStandardBrowserEnv && (u && D.isFunction(u) && (u = u(a)), u || u !== !1 && J2(a.url))) {
    const h = s && f && P2.read(f);
    h && d.set(s, h);
  }
  return a;
}, eT = typeof XMLHttpRequest < "u", tT = eT && function(n) {
  return new Promise(function(i, u) {
    const s = zy(n);
    let f = s.data;
    const d = zt.from(s.headers).normalize();
    let { responseType: p, onUploadProgress: y, onDownloadProgress: h } = s, m, x, w, S, _;
    function O() {
      S && S(), _ && _(), s.cancelToken && s.cancelToken.unsubscribe(m), s.signal && s.signal.removeEventListener("abort", m);
    }
    let j = new XMLHttpRequest();
    j.open(s.method.toUpperCase(), s.url, !0), j.timeout = s.timeout;
    function B() {
      if (!j)
        return;
      const K = zt.from(
        "getAllResponseHeaders" in j && j.getAllResponseHeaders()
      ), P = {
        data: !p || p === "text" || p === "json" ? j.responseText : j.response,
        status: j.status,
        statusText: j.statusText,
        headers: K,
        config: n,
        request: j
      };
      Ry(function(re) {
        i(re), O();
      }, function(re) {
        u(re), O();
      }, P), j = null;
    }
    "onloadend" in j ? j.onloadend = B : j.onreadystatechange = function() {
      !j || j.readyState !== 4 || j.status === 0 && !(j.responseURL && j.responseURL.indexOf("file:") === 0) || setTimeout(B);
    }, j.onabort = function() {
      j && (u(new we("Request aborted", we.ECONNABORTED, n, j)), j = null);
    }, j.onerror = function() {
      u(new we("Network Error", we.ERR_NETWORK, n, j)), j = null;
    }, j.ontimeout = function() {
      let ue = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || Ay;
      s.timeoutErrorMessage && (ue = s.timeoutErrorMessage), u(new we(
        ue,
        P.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED,
        n,
        j
      )), j = null;
    }, f === void 0 && d.setContentType(null), "setRequestHeader" in j && D.forEach(d.toJSON(), function(ue, P) {
      j.setRequestHeader(P, ue);
    }), D.isUndefined(s.withCredentials) || (j.withCredentials = !!s.withCredentials), p && p !== "json" && (j.responseType = s.responseType), h && ([w, _] = xu(h, !0), j.addEventListener("progress", w)), y && j.upload && ([x, S] = xu(y), j.upload.addEventListener("progress", x), j.upload.addEventListener("loadend", S)), (s.cancelToken || s.signal) && (m = (K) => {
      j && (u(!K || K.type ? new Na(null, n, j) : K), j.abort(), j = null);
    }, s.cancelToken && s.cancelToken.subscribe(m), s.signal && (s.signal.aborted ? m() : s.signal.addEventListener("abort", m)));
    const F = Z2(s.url);
    if (F && bt.protocols.indexOf(F) === -1) {
      u(new we("Unsupported protocol " + F + ":", we.ERR_BAD_REQUEST, n));
      return;
    }
    j.send(f || null);
  });
}, nT = (n, a) => {
  const { length: i } = n = n ? n.filter(Boolean) : [];
  if (a || i) {
    let u = new AbortController(), s;
    const f = function(h) {
      if (!s) {
        s = !0, p();
        const m = h instanceof Error ? h : this.reason;
        u.abort(m instanceof we ? m : new Na(m instanceof Error ? m.message : m));
      }
    };
    let d = a && setTimeout(() => {
      d = null, f(new we(`timeout ${a} of ms exceeded`, we.ETIMEDOUT));
    }, a);
    const p = () => {
      n && (d && clearTimeout(d), d = null, n.forEach((h) => {
        h.unsubscribe ? h.unsubscribe(f) : h.removeEventListener("abort", f);
      }), n = null);
    };
    n.forEach((h) => h.addEventListener("abort", f));
    const { signal: y } = u;
    return y.unsubscribe = () => D.asap(p), y;
  }
}, lT = function* (n, a) {
  let i = n.byteLength;
  if (i < a) {
    yield n;
    return;
  }
  let u = 0, s;
  for (; u < i; )
    s = u + a, yield n.slice(u, s), u = s;
}, aT = async function* (n, a) {
  for await (const i of rT(n))
    yield* lT(i, a);
}, rT = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const a = n.getReader();
  try {
    for (; ; ) {
      const { done: i, value: u } = await a.read();
      if (i)
        break;
      yield u;
    }
  } finally {
    await a.cancel();
  }
}, lg = (n, a, i, u) => {
  const s = aT(n, a);
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
        let x = m.byteLength;
        if (i) {
          let w = f += x;
          i(w);
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
}, Ou = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ny = Ou && typeof ReadableStream == "function", iT = Ou && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (a) => n.encode(a))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), My = (n, ...a) => {
  try {
    return !!n(...a);
  } catch {
    return !1;
  }
}, uT = Ny && My(() => {
  let n = !1;
  const a = new Request(bt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !a;
}), ag = 64 * 1024, Bc = Ny && My(() => D.isReadableStream(new Response("").body)), Su = {
  stream: Bc && ((n) => n.body)
};
Ou && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((a) => {
    !Su[a] && (Su[a] = D.isFunction(n[a]) ? (i) => i[a]() : (i, u) => {
      throw new we(`Response type '${a}' is not supported`, we.ERR_NOT_SUPPORT, u);
    });
  });
})(new Response());
const oT = async (n) => {
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
    return (await iT(n)).byteLength;
}, sT = async (n, a) => {
  const i = D.toFiniteNumber(n.getContentLength());
  return i ?? oT(a);
}, cT = Ou && (async (n) => {
  let {
    url: a,
    method: i,
    data: u,
    signal: s,
    cancelToken: f,
    timeout: d,
    onDownloadProgress: p,
    onUploadProgress: y,
    responseType: h,
    headers: m,
    withCredentials: x = "same-origin",
    fetchOptions: w
  } = zy(n);
  h = h ? (h + "").toLowerCase() : "text";
  let S = nT([s, f && f.toAbortSignal()], d), _;
  const O = S && S.unsubscribe && (() => {
    S.unsubscribe();
  });
  let j;
  try {
    if (y && uT && i !== "get" && i !== "head" && (j = await sT(m, u)) !== 0) {
      let P = new Request(a, {
        method: "POST",
        body: u,
        duplex: "half"
      }), U;
      if (D.isFormData(u) && (U = P.headers.get("content-type")) && m.setContentType(U), P.body) {
        const [re, J] = eg(
          j,
          xu(tg(y))
        );
        u = lg(P.body, ag, re, J);
      }
    }
    D.isString(x) || (x = x ? "include" : "omit");
    const B = "credentials" in Request.prototype;
    _ = new Request(a, {
      ...w,
      signal: S,
      method: i.toUpperCase(),
      headers: m.normalize().toJSON(),
      body: u,
      duplex: "half",
      credentials: B ? x : void 0
    });
    let F = await fetch(_, w);
    const K = Bc && (h === "stream" || h === "response");
    if (Bc && (p || K && O)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((fe) => {
        P[fe] = F[fe];
      });
      const U = D.toFiniteNumber(F.headers.get("content-length")), [re, J] = p && eg(
        U,
        xu(tg(p), !0)
      ) || [];
      F = new Response(
        lg(F.body, ag, re, () => {
          J && J(), O && O();
        }),
        P
      );
    }
    h = h || "text";
    let ue = await Su[D.findKey(Su, h) || "text"](F, n);
    return !K && O && O(), await new Promise((P, U) => {
      Ry(P, U, {
        data: ue,
        headers: zt.from(F.headers),
        status: F.status,
        statusText: F.statusText,
        config: n,
        request: _
      });
    });
  } catch (B) {
    throw O && O(), B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(
      new we("Network Error", we.ERR_NETWORK, n, _),
      {
        cause: B.cause || B
      }
    ) : we.from(B, B && B.code, n, _);
  }
}), jc = {
  http: k2,
  xhr: tT,
  fetch: cT
};
D.forEach(jc, (n, a) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: a });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: a });
  }
});
const rg = (n) => `- ${n}`, fT = (n) => D.isFunction(n) || n === null || n === !1, Dy = {
  getAdapter: (n) => {
    n = D.isArray(n) ? n : [n];
    const { length: a } = n;
    let i, u;
    const s = {};
    for (let f = 0; f < a; f++) {
      i = n[f];
      let d;
      if (u = i, !fT(i) && (u = jc[(d = String(i)).toLowerCase()], u === void 0))
        throw new we(`Unknown adapter '${d}'`);
      if (u)
        break;
      s[d || "#" + f] = u;
    }
    if (!u) {
      const f = Object.entries(s).map(
        ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let d = a ? f.length > 1 ? `since :
` + f.map(rg).join(`
`) : " " + rg(f[0]) : "as no adapter specified";
      throw new we(
        "There is no suitable adapter to dispatch the request " + d,
        "ERR_NOT_SUPPORT"
      );
    }
    return u;
  },
  adapters: jc
};
function yc(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Na(null, n);
}
function ig(n) {
  return yc(n), n.headers = zt.from(n.headers), n.data = gc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Dy.getAdapter(n.adapter || Fr.adapter)(n).then(function(u) {
    return yc(n), u.data = gc.call(
      n,
      n.transformResponse,
      u
    ), u.headers = zt.from(u.headers), u;
  }, function(u) {
    return _y(u) || (yc(n), u && u.response && (u.response.data = gc.call(
      n,
      n.transformResponse,
      u.response
    ), u.response.headers = zt.from(u.response.headers))), Promise.reject(u);
  });
}
const Uy = "1.10.0", zu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, a) => {
  zu[n] = function(u) {
    return typeof u === n || "a" + (a < 1 ? "n " : " ") + n;
  };
});
const ug = {};
zu.transitional = function(a, i, u) {
  function s(f, d) {
    return "[Axios v" + Uy + "] Transitional option '" + f + "'" + d + (u ? ". " + u : "");
  }
  return (f, d, p) => {
    if (a === !1)
      throw new we(
        s(d, " has been removed" + (i ? " in " + i : "")),
        we.ERR_DEPRECATED
      );
    return i && !ug[d] && (ug[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), a ? a(f, d, p) : !0;
  };
};
zu.spelling = function(a) {
  return (i, u) => (console.warn(`${u} is likely a misspelling of ${a}`), !0);
};
function dT(n, a, i) {
  if (typeof n != "object")
    throw new we("options must be an object", we.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(n);
  let s = u.length;
  for (; s-- > 0; ) {
    const f = u[s], d = a[f];
    if (d) {
      const p = n[f], y = p === void 0 || d(p, f, n);
      if (y !== !0)
        throw new we("option " + f + " must be " + y, we.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new we("Unknown option " + f, we.ERR_BAD_OPTION);
  }
}
const yu = {
  assertOptions: dT,
  validators: zu
}, bn = yu.validators;
let Ml = class {
  constructor(a) {
    this.defaults = a || {}, this.interceptors = {
      request: new $m(),
      response: new $m()
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
  async request(a, i) {
    try {
      return await this._request(a, i);
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
  _request(a, i) {
    typeof a == "string" ? (i = i || {}, i.url = a) : i = a || {}, i = Dl(this.defaults, i);
    const { transitional: u, paramsSerializer: s, headers: f } = i;
    u !== void 0 && yu.assertOptions(u, {
      silentJSONParsing: bn.transitional(bn.boolean),
      forcedJSONParsing: bn.transitional(bn.boolean),
      clarifyTimeoutError: bn.transitional(bn.boolean)
    }, !1), s != null && (D.isFunction(s) ? i.paramsSerializer = {
      serialize: s
    } : yu.assertOptions(s, {
      encode: bn.function,
      serialize: bn.function
    }, !0)), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), yu.assertOptions(i, {
      baseUrl: bn.spelling("baseURL"),
      withXsrfToken: bn.spelling("withXSRFToken")
    }, !0), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let d = f && D.merge(
      f.common,
      f[i.method]
    );
    f && D.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (_) => {
        delete f[_];
      }
    ), i.headers = zt.concat(d, f);
    const p = [];
    let y = !0;
    this.interceptors.request.forEach(function(O) {
      typeof O.runWhen == "function" && O.runWhen(i) === !1 || (y = y && O.synchronous, p.unshift(O.fulfilled, O.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(O) {
      h.push(O.fulfilled, O.rejected);
    });
    let m, x = 0, w;
    if (!y) {
      const _ = [ig.bind(this), void 0];
      for (_.unshift.apply(_, p), _.push.apply(_, h), w = _.length, m = Promise.resolve(i); x < w; )
        m = m.then(_[x++], _[x++]);
      return m;
    }
    w = p.length;
    let S = i;
    for (x = 0; x < w; ) {
      const _ = p[x++], O = p[x++];
      try {
        S = _(S);
      } catch (j) {
        O.call(this, j);
        break;
      }
    }
    try {
      m = ig.call(this, S);
    } catch (_) {
      return Promise.reject(_);
    }
    for (x = 0, w = h.length; x < w; )
      m = m.then(h[x++], h[x++]);
    return m;
  }
  getUri(a) {
    a = Dl(this.defaults, a);
    const i = Oy(a.baseURL, a.url, a.allowAbsoluteUrls);
    return ky(i, a.params, a.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function(a) {
  Ml.prototype[a] = function(i, u) {
    return this.request(Dl(u || {}, {
      method: a,
      url: i,
      data: (u || {}).data
    }));
  };
});
D.forEach(["post", "put", "patch"], function(a) {
  function i(u) {
    return function(f, d, p) {
      return this.request(Dl(p || {}, {
        method: a,
        headers: u ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: d
      }));
    };
  }
  Ml.prototype[a] = i(), Ml.prototype[a + "Form"] = i(!0);
});
let hT = class By {
  constructor(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(f) {
      i = f;
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
    }, a(function(f, d, p) {
      u.reason || (u.reason = new Na(f, d, p), i(u.reason));
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
  subscribe(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(a) {
    if (!this._listeners)
      return;
    const i = this._listeners.indexOf(a);
    i !== -1 && this._listeners.splice(i, 1);
  }
  toAbortSignal() {
    const a = new AbortController(), i = (u) => {
      a.abort(u);
    };
    return this.subscribe(i), a.signal.unsubscribe = () => this.unsubscribe(i), a.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let a;
    return {
      token: new By(function(s) {
        a = s;
      }),
      cancel: a
    };
  }
};
function pT(n) {
  return function(i) {
    return n.apply(null, i);
  };
}
function mT(n) {
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
Object.entries(Lc).forEach(([n, a]) => {
  Lc[a] = n;
});
function jy(n) {
  const a = new Ml(n), i = hy(Ml.prototype.request, a);
  return D.extend(i, Ml.prototype, a, { allOwnKeys: !0 }), D.extend(i, a, null, { allOwnKeys: !0 }), i.create = function(s) {
    return jy(Dl(n, s));
  }, i;
}
const Ue = jy(Fr);
Ue.Axios = Ml;
Ue.CanceledError = Na;
Ue.CancelToken = hT;
Ue.isCancel = _y;
Ue.VERSION = Uy;
Ue.toFormData = Ru;
Ue.AxiosError = we;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(a) {
  return Promise.all(a);
};
Ue.spread = pT;
Ue.isAxiosError = mT;
Ue.mergeConfig = Dl;
Ue.AxiosHeaders = zt;
Ue.formToJSON = (n) => Cy(D.isHTMLForm(n) ? new FormData(n) : n);
Ue.getAdapter = Dy.getAdapter;
Ue.HttpStatusCode = Lc;
Ue.default = Ue;
const {
  Axios: PT,
  AxiosError: $T,
  CanceledError: WT,
  isCancel: ek,
  CancelToken: tk,
  VERSION: nk,
  all: lk,
  Cancel: ak,
  isAxiosError: rk,
  spread: ik,
  toFormData: uk,
  AxiosHeaders: ok,
  HttpStatusCode: sk,
  formToJSON: ck,
  getAdapter: fk,
  mergeConfig: dk
} = Ue;
class Hn {
  static BACKEND_URL = "https://qurius-ai.onrender.com";
  // Track widget view
  static async trackWidgetView(a, i) {
    try {
      const u = this.getSessionId(), s = navigator.userAgent;
      await Ue.post(`${this.BACKEND_URL}/api/analytics/widget-view`, {
        companyName: a,
        pageUrl: i || window.location.href,
        userAgent: s,
        sessionId: u,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (u) {
      console.error("Failed to track widget view:", u);
    }
  }
  // Enhanced widget interaction tracking
  static async trackWidgetInteraction(a, i, u, s, f) {
    try {
      const d = this.getSessionId();
      await Ue.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName: a,
        eventType: i,
        message: u,
        response: s,
        sessionId: d,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        ...f
      });
    } catch (d) {
      console.error("Failed to track widget interaction:", d);
    }
  }
  // Get analytics for a company
  static async getCompanyAnalytics(a, i = "7d") {
    try {
      return (await Ue.get(`${this.BACKEND_URL}/api/analytics/company/${a}?period=${i}`)).data;
    } catch (u) {
      throw console.error("Failed to fetch analytics:", u), new Error("Failed to fetch analytics");
    }
  }
  // Get FAQ performance analytics
  static async getFAQPerformance(a, i = "7d") {
    try {
      return (await Ue.get(`${this.BACKEND_URL}/api/analytics/faq-performance/${a}?period=${i}`)).data;
    } catch (u) {
      throw console.error("Failed to fetch FAQ performance:", u), new Error("Failed to fetch FAQ performance");
    }
  }
  // Generate unique session ID
  static getSessionId() {
    let a = sessionStorage.getItem("qurius_session_id");
    return a || (a = "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), sessionStorage.setItem("qurius_session_id", a)), a;
  }
  // Track widget open
  static async trackWidgetOpen(a) {
    await this.trackWidgetInteraction(a, "widget_opened");
  }
  // Track widget close
  static async trackWidgetClose(a) {
    await this.trackWidgetInteraction(a, "widget_closed");
  }
  // Track message sent
  static async trackMessageSent(a, i) {
    await this.trackWidgetInteraction(a, "message_sent", i);
  }
  // Track message received with source tracking
  static async trackMessageReceived(a, i, u, s, f, d) {
    await this.trackWidgetInteraction(a, "message_received", void 0, i, {
      responseSource: u,
      faqId: s,
      confidenceScore: f,
      aiFallbackReason: d
    });
  }
  // Track language change
  static async trackLanguageChange(a, i) {
    await this.trackWidgetInteraction(a, "language_changed", void 0, void 0, {
      language: i
    });
  }
  // Track theme change
  static async trackThemeChange(a, i) {
    await this.trackWidgetInteraction(a, "theme_changed", void 0, void 0, {
      themeMode: i
    });
  }
  // Track FAQ match
  static async trackFAQMatch(a, i, u) {
    await this.trackWidgetInteraction(a, "faq_matched", void 0, void 0, {
      faqId: i,
      confidenceScore: u,
      responseSource: "faq"
    });
  }
  // Track AI fallback
  static async trackAIFallback(a, i, u) {
    await this.trackWidgetInteraction(a, "ai_fallback", void 0, void 0, {
      aiFallbackReason: i,
      confidenceScore: u,
      responseSource: "ai"
    });
  }
  // Track user rating
  static async trackRating(a, i, u, s, f, d, p) {
    await this.trackWidgetInteraction(a, "rating_given", void 0, u, {
      rating: i,
      feedbackText: f,
      responseSource: s,
      faqId: d,
      confidenceScore: p
    });
  }
}
function gT({ message: n, messageIndex: a, liked: i, isUser: u, timestamp: s, onStreamingChange: f, skipStreaming: d, companyTheme: p, isLastAiMessage: y, companyName: h, onRatingChange: m }) {
  const [x, w] = pe.useState(""), [S, _] = pe.useState(!1), [O, j] = pe.useState(!1), [B, F] = pe.useState(!1), [K, ue] = pe.useState(""), [P, U] = pe.useState(!1), [re, J] = pe.useState(!1), fe = async ($) => {
    const ne = $.split(" ");
    let ee = "";
    _(!0), f?.(!0), w("");
    for (let A = 0; A < ne.length; A++)
      ee += ne[A] + " ", w(ee.trim()), A === ne.length - 1 && (_(!1), f?.(!1)), await new Promise((Q) => setTimeout(Q, 100));
  };
  pe.useEffect(() => {
    const $ = setTimeout(() => {
      j(!0);
    }, 500);
    return () => clearTimeout($);
  }, []), pe.useEffect(() => {
    !u && !d && O && y ? setTimeout(() => {
      fe(n);
    }, 1500) : !u && !d && !O && y ? (_(!0), f?.(!0), w("")) : (_(!1), f?.(!1), w(""));
  }, [n, u, d, O, y]);
  const Se = async ($) => {
    if (h)
      try {
        $ === -1 ? F(!0) : await Hn.trackRating(
          h,
          $,
          n,
          "ai",
          // Assuming AI response for now
          void 0,
          void 0,
          0.8
          // Default confidence
        );
      } catch (ne) {
        console.error("Failed to submit rating:", ne);
      }
  }, ae = async () => {
    if (h) {
      U(!0);
      try {
        await Hn.trackRating(
          h,
          -1,
          // Negative rating
          n,
          "ai",
          // Assuming AI response for now
          K,
          void 0,
          0.8
          // Default confidence
        ), F(!1), ue("");
      } catch ($) {
        console.error("Failed to submit feedback:", $);
      } finally {
        U(!1);
      }
    }
  }, te = async () => {
    try {
      await navigator.clipboard.writeText(n), J(!0), setTimeout(() => J(!1), 2e3);
    } catch ($) {
      console.error("Failed to copy message:", $);
    }
  };
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsxs("div", { className: ln("flex gap-3 max-w-[98%] mx-auto px-4 py-6", u ? "flex-row-reverse" : "flex-row"), children: [
      /* @__PURE__ */ V.jsx(
        "div",
        {
          className: ln(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
            u ? "text-white" : "text-gray-600 dark:text-gray-400"
          ),
          style: { backgroundColor: u ? p?.primaryColor : p?.backgroundColor },
          children: u ? /* @__PURE__ */ V.jsx(B1, { className: "w-4 h-4" }) : /* @__PURE__ */ V.jsx(gg, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ V.jsxs("div", { className: ln("flex-1 space-y-2", u ? "text-right" : "text-left"), children: [
        /* @__PURE__ */ V.jsx(
          "div",
          {
            className: ln(
              "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
              u ? "text-white rounded-br-md" : "text-gray-900 dark:text-gray-100 rounded-bl-md"
            ),
            style: { backgroundColor: u ? p?.primaryColor : p?.backgroundColor },
            children: /* @__PURE__ */ V.jsx(
              Hw,
              {
                content: !u && S && !d && y ? x : n
              }
            )
          }
        ),
        !u && !S && /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
          a !== 0 && /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
            /* @__PURE__ */ V.jsx(
              "button",
              {
                onClick: () => {
                  console.log("Current liked status:", i);
                  const $ = i !== "like" ? "like" : null;
                  console.log("New rating:", $), m?.($), Se($ === "like" ? 1 : 0);
                },
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Like this response",
                children: /* @__PURE__ */ V.jsx(D1, { className: ln("w-3 h-3 text-gray-500 hover:text-green-500", i === "like" ? "text-green-500" : "text-gray-500") })
              }
            ),
            /* @__PURE__ */ V.jsx(
              "button",
              {
                onClick: () => {
                  console.log("Current liked status:", i);
                  const $ = i !== "dislike" ? "dislike" : null;
                  console.log("New rating:", $), m?.($), Se($ === "dislike" ? -1 : 0);
                },
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Dislike this response",
                children: /* @__PURE__ */ V.jsx(N1, { className: ln("w-3 h-3 text-gray-500 hover:text-red-500", i === "dislike" ? "text-red-500" : "text-gray-500") })
              }
            ),
            /* @__PURE__ */ V.jsx(
              "button",
              {
                onClick: te,
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Copy message",
                children: /* @__PURE__ */ V.jsx(b1, { className: "w-3 h-3 text-gray-500 hover:text-blue-500" })
              }
            )
          ] }),
          re && /* @__PURE__ */ V.jsx("span", { className: "text-xs text-green-500 ml-1", children: "Copied!" }),
          s && /* @__PURE__ */ V.jsx(
            "div",
            {
              className: ln("text-xs text-gray-500 dark:text-gray-400 px-2", "text-right"),
              children: s
            }
          )
        ] })
      ] })
    ] }),
    B && /* @__PURE__ */ V.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ V.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4", children: [
      /* @__PURE__ */ V.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ V.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: "Help us improve" }),
        /* @__PURE__ */ V.jsx(
          "button",
          {
            onClick: () => F(!1),
            className: "p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
            children: /* @__PURE__ */ V.jsx(L1, { className: "w-5 h-5 text-gray-500" })
          }
        )
      ] }),
      /* @__PURE__ */ V.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "What could we have done better? (Optional)" }),
      /* @__PURE__ */ V.jsx(
        "textarea",
        {
          value: K,
          onChange: ($) => ue($.target.value),
          placeholder: "Your feedback helps us improve...",
          className: "w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100",
          rows: 3
        }
      ),
      /* @__PURE__ */ V.jsxs("div", { className: "flex gap-2 mt-4", children: [
        /* @__PURE__ */ V.jsx(
          "button",
          {
            onClick: () => F(!1),
            className: "flex-1 px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ V.jsx(
          "button",
          {
            onClick: ae,
            disabled: P,
            className: "flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: P ? "Submitting..." : "Submit Feedback"
          }
        )
      ] })
    ] }) })
  ] });
}
function yT({ companyTheme: n }) {
  return /* @__PURE__ */ V.jsxs("div", { className: "flex gap-3 max-w-4xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ V.jsx(
      "div",
      {
        className: "flex-shrink-0 w-8 h-8 rounded-full text-gray-600 dark:text-gray-400 flex items-center justify-center",
        style: { backgroundColor: n?.backgroundColor || "#f3f4f6" },
        children: /* @__PURE__ */ V.jsx(gg, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ V.jsx("div", { className: "flex-1", children: /* @__PURE__ */ V.jsx("div", { className: "inline-block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md", children: /* @__PURE__ */ V.jsxs("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ V.jsx("div", { className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ V.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ V.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.2s" }
        }
      )
    ] }) }) })
  ] });
}
function og(n, a) {
  if (typeof n == "function")
    return n(a);
  n != null && (n.current = a);
}
function bT(...n) {
  return (a) => {
    let i = !1;
    const u = n.map((s) => {
      const f = og(s, a);
      return !i && typeof f == "function" && (i = !0), f;
    });
    if (i)
      return () => {
        for (let s = 0; s < u.length; s++) {
          const f = u[s];
          typeof f == "function" ? f() : og(n[s], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function vT(n) {
  const a = /* @__PURE__ */ ST(n), i = pe.forwardRef((u, s) => {
    const { children: f, ...d } = u, p = pe.Children.toArray(f), y = p.find(wT);
    if (y) {
      const h = y.props.children, m = p.map((x) => x === y ? pe.Children.count(h) > 1 ? pe.Children.only(null) : pe.isValidElement(h) ? h.props.children : null : x);
      return /* @__PURE__ */ V.jsx(a, { ...d, ref: s, children: pe.isValidElement(h) ? pe.cloneElement(h, void 0, m) : null });
    }
    return /* @__PURE__ */ V.jsx(a, { ...d, ref: s, children: f });
  });
  return i.displayName = `${n}.Slot`, i;
}
var xT = /* @__PURE__ */ vT("Slot");
// @__NO_SIDE_EFFECTS__
function ST(n) {
  const a = pe.forwardRef((i, u) => {
    const { children: s, ...f } = i;
    if (pe.isValidElement(s)) {
      const d = kT(s), p = TT(f, s.props);
      return s.type !== pe.Fragment && (p.ref = u ? bT(u, d) : d), pe.cloneElement(s, p);
    }
    return pe.Children.count(s) > 1 ? pe.Children.only(null) : null;
  });
  return a.displayName = `${n}.SlotClone`, a;
}
var ET = Symbol("radix.slottable");
function wT(n) {
  return pe.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === ET;
}
function TT(n, a) {
  const i = { ...a };
  for (const u in a) {
    const s = n[u], f = a[u];
    /^on[A-Z]/.test(u) ? s && f ? i[u] = (...p) => {
      const y = f(...p);
      return s(...p), y;
    } : s && (i[u] = s) : u === "style" ? i[u] = { ...s, ...f } : u === "className" && (i[u] = [s, f].filter(Boolean).join(" "));
  }
  return { ...n, ...i };
}
function kT(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, i = a && "isReactWarning" in a && a.isReactWarning;
  return i ? n.ref : (a = Object.getOwnPropertyDescriptor(n, "ref")?.get, i = a && "isReactWarning" in a && a.isReactWarning, i ? n.props.ref : n.props.ref || n.ref);
}
const sg = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, cg = xg, AT = (n, a) => (i) => {
  var u;
  if (a?.variants == null) return cg(n, i?.class, i?.className);
  const { variants: s, defaultVariants: f } = a, d = Object.keys(s).map((h) => {
    const m = i?.[h], x = f?.[h];
    if (m === null) return null;
    const w = sg(m) || sg(x);
    return s[h][w];
  }), p = i && Object.entries(i).reduce((h, m) => {
    let [x, w] = m;
    return w === void 0 || (h[x] = w), h;
  }, {}), y = a == null || (u = a.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((h, m) => {
    let { class: x, className: w, ...S } = m;
    return Object.entries(S).every((_) => {
      let [O, j] = _;
      return Array.isArray(j) ? j.includes({
        ...f,
        ...p
      }[O]) : {
        ...f,
        ...p
      }[O] === j;
    }) ? [
      ...h,
      x,
      w
    ] : h;
  }, []);
  return cg(n, d, y, i?.class, i?.className);
}, CT = AT(
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
function Ly({
  className: n,
  variant: a,
  size: i,
  asChild: u = !1,
  ...s
}) {
  const f = u ? xT : "button";
  return /* @__PURE__ */ V.jsx(
    f,
    {
      "data-slot": "button",
      className: ln(CT({ variant: a, size: i, className: n })),
      ...s
    }
  );
}
function _T({ className: n, ...a }) {
  return /* @__PURE__ */ V.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: ln(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n
      ),
      ...a
    }
  );
}
function RT({ onSendMessage: n, isLoading: a = !1, placeholder: i = "Type your message...", companyTheme: u }) {
  const [s, f] = pe.useState(""), d = (h) => {
    h.preventDefault(), s.trim() && !a && (n(s.trim()), f(""));
  }, p = (h) => {
    h.key === "Enter" && !h.shiftKey && (h.preventDefault(), d(h));
  }, y = u?.primaryColor ? zg(u.primaryColor, 20) : void 0;
  return /* @__PURE__ */ V.jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900", children: /* @__PURE__ */ V.jsxs("div", { className: "max-w-4xl mx-auto p-4", children: [
    /* @__PURE__ */ V.jsxs("form", { onSubmit: d, className: "relative", children: [
      /* @__PURE__ */ V.jsx(
        _T,
        {
          value: s,
          onChange: (h) => f(h.target.value),
          onKeyDown: p,
          placeholder: i,
          disabled: a,
          className: ln(
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
      /* @__PURE__ */ V.jsxs(
        Ly,
        {
          type: "submit",
          size: "sm",
          disabled: !s.trim() || a,
          className: ln(
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
            a ? /* @__PURE__ */ V.jsx(bg, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ V.jsx(_1, { className: "h-4 w-4 text-white" }),
            /* @__PURE__ */ V.jsx("span", { className: "sr-only", children: "Send message" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ V.jsx("div", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400 text-center", children: "Press Enter to send, Shift + Enter for new line" })
  ] }) });
}
function OT(n, a) {
  return n.replace(/\{(\w+)\}/g, (i, u) => a[u] ?? "");
}
const zT = pe.createContext(void 0), fg = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  zh: "中文",
  ja: "日本語",
  pt: "Português",
  it: "Italiano",
  ru: "Русский",
  ko: "한국어"
}, bc = {
  en: "🇺🇸",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  zh: "🇨🇳",
  ja: "🇯🇵",
  pt: "🇵🇹",
  it: "🇮🇹",
  ru: "🇷🇺",
  ko: "🇰🇷"
};
function Hy() {
  const n = pe.useContext(zT);
  if (n === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return n;
}
function NT({ className: n = "", variant: a = "dropdown", companyName: i }) {
  const { currentLanguage: u, setLanguage: s, isLanguageChanging: f } = Hy(), [d, p] = pe.useState(!1), y = (h) => {
    s(h), p(!1), i && Hn.trackLanguageChange(i, h);
  };
  return a === "buttons" ? /* @__PURE__ */ V.jsx("div", { className: `flex flex-wrap gap-1 ${n}`, children: Object.entries(fg).map(([h, m]) => /* @__PURE__ */ V.jsxs(
    "button",
    {
      onClick: () => y(h),
      disabled: f,
      className: `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${u === h ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"} ${f ? "opacity-50 cursor-not-allowed" : ""}`,
      children: [
        /* @__PURE__ */ V.jsx("span", { className: "mr-2", children: bc[h] }),
        m
      ]
    },
    h
  )) }) : /* @__PURE__ */ V.jsxs("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ V.jsxs(
      "button",
      {
        onClick: () => p(!d),
        disabled: f,
        className: "flex items-center px-1 py-1 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        children: [
          /* @__PURE__ */ V.jsx(x1, { className: "h-4 w-4 mr-1" }),
          /* @__PURE__ */ V.jsx("span", { className: "mr-1", children: bc[u] }),
          /* @__PURE__ */ V.jsx(yg, { className: `h-4 w-4 ml-1 transition-transform ${d ? "rotate-180" : ""}` })
        ]
      }
    ),
    d && /* @__PURE__ */ V.jsx("div", { className: "absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ V.jsx("div", { className: "py-1", children: Object.entries(fg).map(([h, m]) => /* @__PURE__ */ V.jsxs(
      "button",
      {
        onClick: () => y(h),
        className: `w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${u === h ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-300"}`,
        children: [
          /* @__PURE__ */ V.jsx("span", { className: "mr-3", children: bc[h] }),
          m
        ]
      },
      h
    )) }) }),
    d && /* @__PURE__ */ V.jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => p(!1)
      }
    )
  ] });
}
class MT {
  static BACKEND_URL = "https://qurius-ai.onrender.com";
  // Generate theme from primary color
  static generateThemeFromPrimary(a, i, u) {
    return {
      primaryColor: a,
      logoUrl: u,
      backgroundColor: i ? "#1e2939" : "#F3F4F6",
      textColor: i ? "#F9FAFB" : "#1F2937",
      borderColor: i ? "#374151" : "#E5E7EB",
      accentColor: "#10B981"
      // Keep accent consistent
    };
  }
  static async getCompanyTheme(a, i) {
    try {
      const s = (await Ue.get(`${this.BACKEND_URL}/api/companies/${encodeURIComponent(a)}/theme`, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.company, d = s?.theme?.primaryColor || "#3B82F6", p = s?.logo_url || "";
      return this.generateThemeFromPrimary(d, i, p);
    } catch (u) {
      return console.error("Error fetching company theme:", u), this.generateThemeFromPrimary("#3B82F6", i, "");
    }
  }
}
const DT = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_BACKEND_URL: "https://qurius-ai.onrender.com", VITE_FRONTEND_URL: "https://qurius-ai.vercel.app", VITE_JINA_API_KEY: "demo-jina-key", VITE_OPEN_ROUTER_API_KEY: "demo-openrouter-key", VITE_SUPABASE_ANON_KEY: "demo-key", VITE_SUPABASE_PROJECT_URL: "https://demo.supabase.co", VITE_SUPABASE_SERVICE_ROLE_KEY: "demo-service-key" };
function qn(n, a = "") {
  const i = typeof process < "u" ? process.env?.[n] : void 0;
  return (typeof import.meta < "u" ? DT?.[n] : void 0) ?? i ?? a;
}
const UT = {
  projectUrl: qn("VITE_SUPABASE_PROJECT_URL"),
  anonKey: qn("VITE_SUPABASE_ANON_KEY"),
  serviceRoleKey: qn("VITE_SUPABASE_SERVICE_ROLE_KEY")
}, BT = {
  apiUrl: qn("VITE_OPEN_ROUTER_URL", "https://openrouter.ai/api/v1"),
  apiKey: qn("VITE_OPEN_ROUTER_API_KEY"),
  sourceUrl: qn("VITE_SOURCE_URL", "http://localhost:8081")
}, jT = {
  apiUrl: qn("VITE_JINA_API_URL", "https://api.jina.ai/v1/embeddings"),
  apiKey: qn("VITE_JINA_API_KEY")
}, qy = {
  backendUrl: qn("VITE_BACKEND_URL", "http://localhost:3001"),
  ...UT,
  ...BT,
  ...jT
}, LT = {
  en: "en",
  es: "es",
  fr: "fr",
  de: "de",
  zh: "zh",
  ja: "ja",
  pt: "pt",
  it: "it",
  ru: "ru",
  ko: "ko"
}, dg = "https://translation.googleapis.com/language/translate/v2", hg = {
  en: {
    "I apologize, but I don't have specific information about that. Please contact our support team for assistance.": "I apologize, but I don't have specific information about that. Please contact our support team for assistance.",
    "Sorry, something went wrong. Please try again.": "Sorry, something went wrong. Please try again."
  },
  es: {
    "I apologize, but I don't have specific information about that. Please contact our support team for assistance.": "Lo siento, pero no tengo información específica sobre eso. Por favor, contacte a nuestro equipo de soporte para obtener ayuda.",
    "Sorry, something went wrong. Please try again.": "Lo siento, algo salió mal. Por favor, inténtalo de nuevo."
  },
  fr: {
    "I apologize, but I don't have specific information about that. Please contact our support team for assistance.": "Je m'excuse, mais je n'ai pas d'informations spécifiques à ce sujet. Veuillez contacter notre équipe de support pour obtenir de l'aide.",
    "Sorry, something went wrong. Please try again.": "Désolé, quelque chose s'est mal passé. Veuillez réessayer."
  },
  de: {
    "I apologize, but I don't have specific information about that. Please contact our support team for assistance.": "Es tut mir leid, aber ich habe keine spezifischen Informationen dazu. Bitte kontaktieren Sie unser Support-Team für Hilfe.",
    "Sorry, something went wrong. Please try again.": "Entschuldigung, etwas ist schiefgelaufen. Bitte versuchen Sie es erneut."
  },
  zh: {
    "I apologize, but I don't have specific information about that. Please contact our support team for assistance.": "抱歉，我没有关于此事的特定信息。请联系我们的支持团队寻求帮助。",
    "Sorry, something went wrong. Please try again.": "抱歉，出现了一些问题。请再试一次。"
  },
  ja: {
    "I apologize, but I don't have specific information about that. Please contact our support team for assistance.": "申し訳ございませんが、それについての具体的な情報がありません。サポートチームにお問い合わせください。",
    "Sorry, something went wrong. Please try again.": "申し訳ございませんが、問題が発生しました。もう一度お試しください。"
  },
  pt: {
    "I apologize, but I don't have specific information about that. Please contact our support team for assistance.": "Peço desculpas, mas não tenho informações específicas sobre isso. Entre em contato com nossa equipe de suporte para obter ajuda.",
    "Sorry, something went wrong. Please try again.": "Desculpe, algo deu errado. Por favor, tente novamente."
  },
  it: {
    "I apologize, but I don't have specific information about that. Please contact our support team for assistance.": "Mi scuso, ma non ho informazioni specifiche su questo. Contattate il nostro team di supporto per assistenza.",
    "Sorry, something went wrong. Please try again.": "Mi dispiace, qualcosa è andato storto. Per favore riprova."
  },
  ru: {
    "I apologize, but I don't have specific information about that. Please contact our support team for assistance.": "Извините, но у меня нет конкретной информации об этом. Пожалуйста, свяжитесь с нашей службой поддержки для получения помощи.",
    "Sorry, something went wrong. Please try again.": "Извините, что-то пошло не так. Пожалуйста, попробуйте еще раз."
  },
  ko: {
    "I apologize, but I don't have specific information about that. Please contact our support team for assistance.": "죄송하지만 그에 대한 구체적인 정보가 없습니다. 도움이 필요하시면 지원팀에 문의해 주세요.",
    "Sorry, something went wrong. Please try again.": "죄송합니다. 문제가 발생했습니다. 다시 시도해 주세요."
  }
};
class vc {
  static apiKey = null;
  static apiKeyPromise = null;
  /**
   * Fetch API key from backend
   */
  static async fetchApiKey() {
    return this.apiKeyPromise ? this.apiKeyPromise : (this.apiKeyPromise = (async () => {
      try {
        console.log("🔑 Fetching API key from backend...");
        const i = (await Ue.get(`${qy.backendUrl}/api/translate/api-key`)).data.apiKey;
        return console.log("✅ API key fetched successfully"), this.apiKey = i, i;
      } catch (a) {
        return console.warn("⚠️ Failed to fetch Google Translate API key from backend:", a), console.log("🔄 Falling back to fallback translations..."), null;
      }
    })(), this.apiKeyPromise);
  }
  /**
   * Get API key (cached or fetched from backend)
   */
  static async getApiKey() {
    return this.apiKey ? this.apiKey : await this.fetchApiKey();
  }
  /**
   * Detect the language of the input text
   */
  static async detectLanguage(a) {
    const i = await this.getApiKey();
    if (!i)
      return console.warn("Google Translate API key not available, assuming English"), "en";
    try {
      const u = await fetch(`${dg}/detect?key=${i}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          q: a
        })
      });
      if (!u.ok)
        throw new Error(`Translation API error: ${u.status}`);
      return (await u.json()).data.detections[0][0].language;
    } catch (u) {
      return console.error("Error detecting language:", u), "en";
    }
  }
  /**
   * Translate text from source language to target language
   */
  static async translate(a, i, u) {
    if (i === "en")
      return a;
    const s = await this.getApiKey();
    if (!s)
      return console.warn("Google Translate API key not available, using fallback translations"), hg[i][a] || a;
    try {
      const f = await fetch(`${dg}?key=${s}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          q: a,
          target: LT[i],
          source: u || "en"
        })
      });
      if (!f.ok)
        throw new Error(`Translation API error: ${f.status}`);
      return (await f.json()).data.translations[0].translatedText;
    } catch (f) {
      return console.error("Error translating text:", f), hg[i][a] || a;
    }
  }
  /**
   * Translate user input to English for AI processing
   */
  static async translateToEnglish(a) {
    const i = await this.detectLanguage(a);
    return i === "en" ? a : await this.translate(a, "en", i);
  }
  /**
   * Translate AI response to user's language
   */
  static async translateToUserLanguage(a, i) {
    return await this.translate(a, i, "en");
  }
}
class HT {
  BACKEND_URL = qy.backendUrl;
  // Get FAQ answer using semantic search
  async getFAQAnswer(a, i) {
    try {
      const u = await Ue.post(`${this.BACKEND_URL}/api/faqs/search`, {
        companyName: a,
        question: i
      });
      if (console.log("FAQ search results:", u.data), Array.isArray(u.data) && u.data.length > 0) {
        const s = u.data[0];
        if (s.answer)
          return {
            answer: s.answer,
            source: s.source || "ai"
          };
      }
      return u.data && u.data.answer ? {
        answer: u.data.answer,
        source: u.data.source || "ai"
      } : null;
    } catch (u) {
      return console.error("Error searching FAQs:", u), null;
    }
  }
  async getFAQs(a) {
    try {
      return (await Ue.get(`${this.BACKEND_URL}/api/companies/${a}/faqs`)).data;
    } catch (i) {
      throw console.error("Error fetching FAQs:", i), i;
    }
  }
  async importFAQs(a, i) {
    try {
      return (await Ue.post(`${this.BACKEND_URL}/api/companies/${a}/faqs`, { faqs: i })).data;
    } catch (u) {
      throw console.error("Error importing FAQs:", u), u;
    }
  }
  async addFAQ(a, i, u) {
    try {
      return (await Ue.post(`${this.BACKEND_URL}/api/companies/${a}/faqs`, {
        faqs: [{ question: i, answer: u }]
      })).data;
    } catch (s) {
      throw console.error("Error adding FAQ:", s), s;
    }
  }
  async updateFAQ(a, i, u) {
    try {
      return (await Ue.put(`${this.BACKEND_URL}/api/faqs/${a}`, {
        question: i,
        answer: u
      })).data;
    } catch (s) {
      throw console.error("Error updating FAQ:", s), s;
    }
  }
  async deleteFAQ(a) {
    try {
      await Ue.delete(`${this.BACKEND_URL}/api/faqs/${a}`);
    } catch (i) {
      throw console.error("Error deleting FAQ:", i), i;
    }
  }
}
const qT = new HT();
function VT({
  defaultTheme: n,
  toggleTheme: a,
  isMinimized: i,
  onToggleMinimize: u,
  companyName: s,
  isThemeChanging: f
}) {
  const d = pe.useRef(null), p = pe.useRef(null), { t: y, currentLanguage: h } = Hy(), [m, x] = pe.useState(null), w = n === "dark", S = () => OT(y("chat.welcomeWithCompany"), { companyName: s || "AI" }), [_, O] = pe.useState([
    {
      content: S(),
      isUser: !1,
      liked: null,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  pe.useEffect(() => {
    _[0].isUser || O([
      {
        content: S(),
        isUser: !1,
        liked: null,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  }, [y, s]);
  const [j, B] = pe.useState(!1), [F, K] = pe.useState(!1), [ue, P] = pe.useState(!1), [U, re] = pe.useState(!0), [J, fe] = pe.useState(!1);
  pe.useEffect(() => {
    (async () => {
      try {
        const Q = await vc.translateToEnglish("Hello world");
        console.log("✅ Translation service test result:", Q);
      } catch (Q) {
        console.error("❌ Service test failed:", Q);
      }
    })();
  }, []), pe.useEffect(() => {
    s && MT.getCompanyTheme(s, w).then(x);
  }, [s, w]), pe.useEffect(() => {
    s && Hn.trackWidgetView(s);
  }, [s]), pe.useEffect(() => {
    s && (i ? Hn.trackWidgetClose(s) : Hn.trackWidgetOpen(s));
  }, [i, s]);
  const Se = () => {
    d.current?.scrollIntoView({ behavior: "smooth" });
  }, ae = () => {
    if (p.current) {
      const { scrollTop: A, scrollHeight: Q, clientHeight: L } = p.current, de = Q - A - L < 10;
      re(de), ue && !de && K(!0), de && K(!1);
    }
  }, te = (A) => {
    P(A), A && K(!1);
  }, $ = (A, Q) => {
    O((L) => L.map(
      (de, b) => b === A ? { ...de, liked: Q } : de
    ));
  };
  pe.useEffect(() => {
    if (ue && !F) {
      const A = setInterval(() => {
        Se();
      }, 100);
      return () => clearInterval(A);
    }
  }, [ue, F]), pe.useEffect(() => {
    i ? fe(!0) : Se();
  }, [i]);
  const ne = async (A) => {
    console.log("🚀 Starting message processing:", A);
    const Q = {
      content: A,
      isUser: !0,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    B(!0), O((L) => [...L, Q]), s && Hn.trackMessageSent(s, A);
    try {
      console.log("🔄 Translating user input to English...");
      let L = A;
      try {
        L = await vc.translateToEnglish(A);
      } catch (b) {
        console.warn("⚠️ Translation failed, using original input:", b), L = A;
      }
      console.log("🤖 Getting FAQ answer...");
      const de = await qT.getFAQAnswer(s || "", L);
      if (de) {
        console.log("🔄 Translating response to user language...");
        let b = de.answer;
        try {
          b = await vc.translateToUserLanguage(de.answer, h);
        } catch (W) {
          console.warn("⚠️ Response translation failed, using original:", W), b = de.answer;
        }
        const Y = {
          content: b,
          isUser: !1,
          liked: null,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        O((W) => [...W, Y]), fe(!1), s && Hn.trackMessageReceived(s, b, de.source);
      } else
        console.log("⚠️ No response found from server"), O((b) => [
          ...b,
          {
            content: "Sorry, I encountered an error. Please try again.",
            isUser: !1,
            liked: null,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          }
        ]);
    } catch (L) {
      console.error("❌ Error in handleSendMessage:", L), console.error("❌ Error details:", {
        message: L instanceof Error ? L.message : String(L),
        stack: L instanceof Error ? L.stack : void 0,
        name: L instanceof Error ? L.name : "Unknown"
      }), O((de) => [
        ...de,
        {
          content: "Sorry, something went wrong. Please try again.",
          isUser: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      console.log("🏁 Finishing message processing"), B(!1);
    }
  }, ee = m?.primaryColor ? zg(m.primaryColor, 20) : void 0;
  return i ? /* @__PURE__ */ V.jsx(
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
      children: /* @__PURE__ */ V.jsx(
        "button",
        {
          onClick: u,
          className: "text-white p-4 rounded-full shadow-lg transition-colors",
          style: {
            backgroundColor: m?.primaryColor || "#007bff"
          },
          onMouseEnter: (A) => {
            ee && (A.currentTarget.style.backgroundColor = ee);
          },
          onMouseLeave: (A) => {
            A.currentTarget.style.backgroundColor = m?.primaryColor || "#007bff";
          },
          children: /* @__PURE__ */ V.jsx(im, { className: "h-6 w-6" })
        }
      )
    }
  ) : /* @__PURE__ */ V.jsxs(
    "div",
    {
      className: ln(
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
        f && /* @__PURE__ */ V.jsx(
          "div",
          {
            className: "absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg",
            style: { backgroundColor: m?.backgroundColor + "CC" },
            children: /* @__PURE__ */ V.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ V.jsx(
                bg,
                {
                  className: "w-12 h-12 animate-spin",
                  style: { color: m?.primaryColor }
                }
              ),
              /* @__PURE__ */ V.jsx(
                "p",
                {
                  className: "text-sm font-medium",
                  style: { color: m?.textColor },
                  children: "Updating theme..."
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ V.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800", children: [
          /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-3", children: [
            m?.logoUrl ? /* @__PURE__ */ V.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", children: /* @__PURE__ */ V.jsx("img", { src: m?.logoUrl, alt: "Company Logo", className: "w-7 h-7" }) }) : (
              // Default logo
              /* @__PURE__ */ V.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", style: { backgroundColor: m?.primaryColor }, children: /* @__PURE__ */ V.jsx(im, { className: "w-4 h-4 text-white" }) })
            ),
            /* @__PURE__ */ V.jsxs("div", { children: [
              /* @__PURE__ */ V.jsxs("h3", { className: "font-semibold text-gray-900 dark:text-gray-100 text-sm", children: [
                s,
                " Assistant"
              ] }),
              /* @__PURE__ */ V.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Online now" })
            ] })
          ] }),
          /* @__PURE__ */ V.jsxs("div", { className: "flex justify-end gap-1", children: [
            /* @__PURE__ */ V.jsx(
              NT,
              {
                variant: "dropdown",
                className: "scale-65",
                companyName: s
              }
            ),
            /* @__PURE__ */ V.jsx(
              "button",
              {
                onClick: () => {
                  a(), s && Hn.trackThemeChange(s, n);
                },
                disabled: f,
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50",
                children: n === "dark" ? /* @__PURE__ */ V.jsx(O1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }) : /* @__PURE__ */ V.jsx(A1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            ),
            /* @__PURE__ */ V.jsx(
              "button",
              {
                onClick: u,
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
                children: /* @__PURE__ */ V.jsx(T1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ V.jsxs(
          "div",
          {
            ref: p,
            className: "flex-1 overflow-y-auto bg-white dark:bg-gray-900",
            onScroll: ae,
            children: [
              /* @__PURE__ */ V.jsxs("div", { className: "py-4", children: [
                _.map((A, Q) => {
                  const L = !A.isUser && Q === _.length - 1;
                  return /* @__PURE__ */ V.jsx(
                    gT,
                    {
                      message: A.content,
                      messageIndex: Q,
                      liked: A.liked,
                      isUser: A.isUser,
                      timestamp: A.timestamp,
                      onStreamingChange: A.isUser ? void 0 : te,
                      skipStreaming: J && !A.isUser,
                      isLastAiMessage: L,
                      companyTheme: m || void 0,
                      companyName: s,
                      onRatingChange: (de) => $(Q, de)
                    },
                    `${Q}-${A.content.substring(0, 20)}`
                  );
                }),
                j && /* @__PURE__ */ V.jsx(yT, { companyTheme: m })
              ] }),
              /* @__PURE__ */ V.jsx("div", { ref: d })
            ]
          }
        ),
        !U && !ue && /* @__PURE__ */ V.jsx("div", { className: "absolute bottom-27 right-4 z-10", children: /* @__PURE__ */ V.jsxs(
          Ly,
          {
            onClick: Se,
            size: "sm",
            className: "h-10 w-10 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
            style: {
              backgroundColor: m?.primaryColor,
              "--hover-bg-color": ee
            },
            onMouseEnter: (A) => {
              ee && (A.currentTarget.style.backgroundColor = ee);
            },
            onMouseLeave: (A) => {
              m?.primaryColor && (A.currentTarget.style.backgroundColor = m.primaryColor);
            },
            onFocus: (A) => {
              ee && (A.currentTarget.style.backgroundColor = ee);
            },
            onBlur: (A) => {
              m?.primaryColor && (A.currentTarget.style.backgroundColor = m.primaryColor);
            },
            children: [
              /* @__PURE__ */ V.jsx(yg, { className: "h-4 w-4" }),
              /* @__PURE__ */ V.jsx("span", { className: "sr-only", children: "Scroll to bottom" })
            ]
          }
        ) }),
        /* @__PURE__ */ V.jsx(
          RT,
          {
            onSendMessage: ne,
            isLoading: j,
            placeholder: `Ask ${s} anything...`,
            defaultTheme: n,
            companyTheme: m || void 0
          }
        )
      ]
    }
  );
}
const YT = 400, GT = 1300, zl = {
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
}, Vy = pe.createContext({
  colors: zl.light,
  defaultTheme: "light",
  isDark: !1,
  setColorScheme: () => {
  },
  toggleTheme: () => {
  },
  isThemeChanging: !1
}), QT = ({ children: n }) => {
  const a = () => {
    if (typeof window < "u") {
      const h = localStorage.getItem("theme");
      return h === "light" || h === "dark" ? h : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }, [i, u] = pe.useState(a() === "dark"), [s, f] = pe.useState(!1), d = (h) => {
    u(h === "dark"), typeof window < "u" && localStorage.setItem("theme", h);
  }, p = () => {
    const h = i ? "light" : "dark";
    f(!0), setTimeout(() => {
      d(h), setTimeout(() => {
        f(!1);
      }, GT);
    }, YT);
  };
  pe.useEffect(() => {
    const h = window.matchMedia("(prefers-color-scheme: dark)"), m = (x) => {
      localStorage.getItem("theme") || d(x.matches ? "dark" : "light");
    };
    return h.addEventListener("change", m), () => h.removeEventListener("change", m);
  }, []), pe.useEffect(() => {
    typeof window < "u" && (i ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), document.body.style.backgroundColor = i ? zl.dark.containerBackground : zl.light.containerBackground, document.body.style.color = i ? zl.dark.text : zl.light.text);
  }, [i]);
  const y = i ? zl.dark : zl.light;
  return /* @__PURE__ */ V.jsx(Vy.Provider, { value: {
    colors: y,
    defaultTheme: i ? "dark" : "light",
    isDark: i,
    setColorScheme: d,
    toggleTheme: p,
    isThemeChanging: s
  }, children: n });
}, XT = () => {
  const n = pe.useContext(Vy);
  if (!n)
    throw new Error("useTheme must be used within a ThemeProvider");
  return n;
};
let hu = null;
function KT(n, a) {
  hu && hu.unmount(), hu = s1.createRoot(n), hu.render(
    /* @__PURE__ */ V.jsx(pg.StrictMode, { children: /* @__PURE__ */ V.jsx(QT, { children: /* @__PURE__ */ V.jsx(ZT, { config: a }) }) })
  );
}
function ZT({ config: n }) {
  const { defaultTheme: a, toggleTheme: i, isThemeChanging: u } = XT(), [s, f] = pg.useState(!0), d = () => {
    const p = !s;
    f(p), console.log(p ? "Widget minimized, chat button should be visible" : "Widget expanded, chat button should be hidden");
  };
  return /* @__PURE__ */ V.jsx(
    VT,
    {
      defaultTheme: a,
      toggleTheme: i,
      isMinimized: s,
      onToggleMinimize: d,
      companyName: n.companyName,
      isThemeChanging: u
    }
  );
}
const FT = {
  init: KT
};
typeof window < "u" && (window.QuriusChatWidget = FT);
export {
  FT as default
};
