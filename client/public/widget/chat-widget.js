function Bc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ku = { exports: {} }, _r = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zm;
function av() {
  if (Zm) return _r;
  Zm = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function l(o, u, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), "key" in u) {
      c = {};
      for (var p in u)
        p !== "key" && (c[p] = u[p]);
    } else c = u;
    return u = c.ref, {
      $$typeof: n,
      type: o,
      key: d,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return _r.Fragment = i, _r.jsx = l, _r.jsxs = l, _r;
}
var Jm;
function iv() {
  return Jm || (Jm = 1, Ku.exports = av()), Ku.exports;
}
var _ = iv(), Zu = { exports: {} }, ke = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wm;
function rv() {
  if (Wm) return ke;
  Wm = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.iterator;
  function w(b) {
    return b === null || typeof b != "object" ? null : (b = v && b[v] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var x = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, k = Object.assign, z = {};
  function L(b, V, ee) {
    this.props = b, this.context = V, this.refs = z, this.updater = ee || x;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(b, V) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, V, "setState");
  }, L.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function q() {
  }
  q.prototype = L.prototype;
  function K(b, V, ee) {
    this.props = b, this.context = V, this.refs = z, this.updater = ee || x;
  }
  var j = K.prototype = new q();
  j.constructor = K, k(j, L.prototype), j.isPureReactComponent = !0;
  var se = Array.isArray, J = { H: null, A: null, T: null, S: null, V: null }, U = Object.prototype.hasOwnProperty;
  function le(b, V, ee, A, ne, Se) {
    return ee = Se.ref, {
      $$typeof: n,
      type: b,
      key: V,
      ref: ee !== void 0 ? ee : null,
      props: Se
    };
  }
  function Y(b, V) {
    return le(
      b.type,
      V,
      void 0,
      void 0,
      void 0,
      b.props
    );
  }
  function pe(b) {
    return typeof b == "object" && b !== null && b.$$typeof === n;
  }
  function we(b) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(ee) {
      return V[ee];
    });
  }
  var re = /\/+/g;
  function te(b, V) {
    return typeof b == "object" && b !== null && b.key != null ? we("" + b.key) : V.toString(36);
  }
  function W() {
  }
  function ae(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(W, W) : (b.status = "pending", b.then(
          function(V) {
            b.status === "pending" && (b.status = "fulfilled", b.value = V);
          },
          function(V) {
            b.status === "pending" && (b.status = "rejected", b.reason = V);
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
  function ie(b, V, ee, A, ne) {
    var Se = typeof b;
    (Se === "undefined" || Se === "boolean") && (b = null);
    var oe = !1;
    if (b === null) oe = !0;
    else
      switch (Se) {
        case "bigint":
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case n:
            case i:
              oe = !0;
              break;
            case h:
              return oe = b._init, ie(
                oe(b._payload),
                V,
                ee,
                A,
                ne
              );
          }
      }
    if (oe)
      return ne = ne(b), oe = A === "" ? "." + te(b, 0) : A, se(ne) ? (ee = "", oe != null && (ee = oe.replace(re, "$&/") + "/"), ie(ne, V, ee, "", function(Ie) {
        return Ie;
      })) : ne != null && (pe(ne) && (ne = Y(
        ne,
        ee + (ne.key == null || b && b.key === ne.key ? "" : ("" + ne.key).replace(
          re,
          "$&/"
        ) + "/") + oe
      )), V.push(ne)), 1;
    oe = 0;
    var Ae = A === "" ? "." : A + ":";
    if (se(b))
      for (var $ = 0; $ < b.length; $++)
        A = b[$], Se = Ae + te(A, $), oe += ie(
          A,
          V,
          ee,
          Se,
          ne
        );
    else if ($ = w(b), typeof $ == "function")
      for (b = $.call(b), $ = 0; !(A = b.next()).done; )
        A = A.value, Se = Ae + te(A, $++), oe += ie(
          A,
          V,
          ee,
          Se,
          ne
        );
    else if (Se === "object") {
      if (typeof b.then == "function")
        return ie(
          ae(b),
          V,
          ee,
          A,
          ne
        );
      throw V = String(b), Error(
        "Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return oe;
  }
  function N(b, V, ee) {
    if (b == null) return b;
    var A = [], ne = 0;
    return ie(b, A, "", "", function(Se) {
      return V.call(ee, Se, ne++);
    }), A;
  }
  function G(b) {
    if (b._status === -1) {
      var V = b._result;
      V = V(), V.then(
        function(ee) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = ee);
        },
        function(ee) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = ee);
        }
      ), b._status === -1 && (b._status = 0, b._result = V);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var P = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var V = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(V)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  };
  function Ee() {
  }
  return ke.Children = {
    map: N,
    forEach: function(b, V, ee) {
      N(
        b,
        function() {
          V.apply(this, arguments);
        },
        ee
      );
    },
    count: function(b) {
      var V = 0;
      return N(b, function() {
        V++;
      }), V;
    },
    toArray: function(b) {
      return N(b, function(V) {
        return V;
      }) || [];
    },
    only: function(b) {
      if (!pe(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  }, ke.Component = L, ke.Fragment = l, ke.Profiler = u, ke.PureComponent = K, ke.StrictMode = o, ke.Suspense = g, ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, ke.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return J.H.useMemoCache(b);
    }
  }, ke.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, ke.cloneElement = function(b, V, ee) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var A = k({}, b.props), ne = b.key, Se = void 0;
    if (V != null)
      for (oe in V.ref !== void 0 && (Se = void 0), V.key !== void 0 && (ne = "" + V.key), V)
        !U.call(V, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && V.ref === void 0 || (A[oe] = V[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) A.children = ee;
    else if (1 < oe) {
      for (var Ae = Array(oe), $ = 0; $ < oe; $++)
        Ae[$] = arguments[$ + 2];
      A.children = Ae;
    }
    return le(b.type, ne, void 0, void 0, Se, A);
  }, ke.createContext = function(b) {
    return b = {
      $$typeof: d,
      _currentValue: b,
      _currentValue2: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, b.Provider = b, b.Consumer = {
      $$typeof: c,
      _context: b
    }, b;
  }, ke.createElement = function(b, V, ee) {
    var A, ne = {}, Se = null;
    if (V != null)
      for (A in V.key !== void 0 && (Se = "" + V.key), V)
        U.call(V, A) && A !== "key" && A !== "__self" && A !== "__source" && (ne[A] = V[A]);
    var oe = arguments.length - 2;
    if (oe === 1) ne.children = ee;
    else if (1 < oe) {
      for (var Ae = Array(oe), $ = 0; $ < oe; $++)
        Ae[$] = arguments[$ + 2];
      ne.children = Ae;
    }
    if (b && b.defaultProps)
      for (A in oe = b.defaultProps, oe)
        ne[A] === void 0 && (ne[A] = oe[A]);
    return le(b, Se, void 0, void 0, null, ne);
  }, ke.createRef = function() {
    return { current: null };
  }, ke.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, ke.isValidElement = pe, ke.lazy = function(b) {
    return {
      $$typeof: h,
      _payload: { _status: -1, _result: b },
      _init: G
    };
  }, ke.memo = function(b, V) {
    return {
      $$typeof: m,
      type: b,
      compare: V === void 0 ? null : V
    };
  }, ke.startTransition = function(b) {
    var V = J.T, ee = {};
    J.T = ee;
    try {
      var A = b(), ne = J.S;
      ne !== null && ne(ee, A), typeof A == "object" && A !== null && typeof A.then == "function" && A.then(Ee, P);
    } catch (Se) {
      P(Se);
    } finally {
      J.T = V;
    }
  }, ke.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, ke.use = function(b) {
    return J.H.use(b);
  }, ke.useActionState = function(b, V, ee) {
    return J.H.useActionState(b, V, ee);
  }, ke.useCallback = function(b, V) {
    return J.H.useCallback(b, V);
  }, ke.useContext = function(b) {
    return J.H.useContext(b);
  }, ke.useDebugValue = function() {
  }, ke.useDeferredValue = function(b, V) {
    return J.H.useDeferredValue(b, V);
  }, ke.useEffect = function(b, V, ee) {
    var A = J.H;
    if (typeof ee == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return A.useEffect(b, V);
  }, ke.useId = function() {
    return J.H.useId();
  }, ke.useImperativeHandle = function(b, V, ee) {
    return J.H.useImperativeHandle(b, V, ee);
  }, ke.useInsertionEffect = function(b, V) {
    return J.H.useInsertionEffect(b, V);
  }, ke.useLayoutEffect = function(b, V) {
    return J.H.useLayoutEffect(b, V);
  }, ke.useMemo = function(b, V) {
    return J.H.useMemo(b, V);
  }, ke.useOptimistic = function(b, V) {
    return J.H.useOptimistic(b, V);
  }, ke.useReducer = function(b, V, ee) {
    return J.H.useReducer(b, V, ee);
  }, ke.useRef = function(b) {
    return J.H.useRef(b);
  }, ke.useState = function(b) {
    return J.H.useState(b);
  }, ke.useSyncExternalStore = function(b, V, ee) {
    return J.H.useSyncExternalStore(
      b,
      V,
      ee
    );
  }, ke.useTransition = function() {
    return J.H.useTransition();
  }, ke.version = "19.1.0", ke;
}
var $m;
function Hc() {
  return $m || ($m = 1, Zu.exports = rv()), Zu.exports;
}
var de = Hc();
const ho = /* @__PURE__ */ Bc(de);
var Ju = { exports: {} }, Ir = {}, Wu = { exports: {} }, $u = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eh;
function lv() {
  return eh || (eh = 1, function(n) {
    function i(N, G) {
      var P = N.length;
      N.push(G);
      e: for (; 0 < P; ) {
        var Ee = P - 1 >>> 1, b = N[Ee];
        if (0 < u(b, G))
          N[Ee] = G, N[P] = b, P = Ee;
        else break e;
      }
    }
    function l(N) {
      return N.length === 0 ? null : N[0];
    }
    function o(N) {
      if (N.length === 0) return null;
      var G = N[0], P = N.pop();
      if (P !== G) {
        N[0] = P;
        e: for (var Ee = 0, b = N.length, V = b >>> 1; Ee < V; ) {
          var ee = 2 * (Ee + 1) - 1, A = N[ee], ne = ee + 1, Se = N[ne];
          if (0 > u(A, P))
            ne < b && 0 > u(Se, A) ? (N[Ee] = Se, N[ne] = P, Ee = ne) : (N[Ee] = A, N[ee] = P, Ee = ee);
          else if (ne < b && 0 > u(Se, P))
            N[Ee] = Se, N[ne] = P, Ee = ne;
          else break e;
        }
      }
      return G;
    }
    function u(N, G) {
      var P = N.sortIndex - G.sortIndex;
      return P !== 0 ? P : N.id - G.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, p = d.now();
      n.unstable_now = function() {
        return d.now() - p;
      };
    }
    var g = [], m = [], h = 1, v = null, w = 3, x = !1, k = !1, z = !1, L = !1, q = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
    function se(N) {
      for (var G = l(m); G !== null; ) {
        if (G.callback === null) o(m);
        else if (G.startTime <= N)
          o(m), G.sortIndex = G.expirationTime, i(g, G);
        else break;
        G = l(m);
      }
    }
    function J(N) {
      if (z = !1, se(N), !k)
        if (l(g) !== null)
          k = !0, U || (U = !0, te());
        else {
          var G = l(m);
          G !== null && ie(J, G.startTime - N);
        }
    }
    var U = !1, le = -1, Y = 5, pe = -1;
    function we() {
      return L ? !0 : !(n.unstable_now() - pe < Y);
    }
    function re() {
      if (L = !1, U) {
        var N = n.unstable_now();
        pe = N;
        var G = !0;
        try {
          e: {
            k = !1, z && (z = !1, K(le), le = -1), x = !0;
            var P = w;
            try {
              t: {
                for (se(N), v = l(g); v !== null && !(v.expirationTime > N && we()); ) {
                  var Ee = v.callback;
                  if (typeof Ee == "function") {
                    v.callback = null, w = v.priorityLevel;
                    var b = Ee(
                      v.expirationTime <= N
                    );
                    if (N = n.unstable_now(), typeof b == "function") {
                      v.callback = b, se(N), G = !0;
                      break t;
                    }
                    v === l(g) && o(g), se(N);
                  } else o(g);
                  v = l(g);
                }
                if (v !== null) G = !0;
                else {
                  var V = l(m);
                  V !== null && ie(
                    J,
                    V.startTime - N
                  ), G = !1;
                }
              }
              break e;
            } finally {
              v = null, w = P, x = !1;
            }
            G = void 0;
          }
        } finally {
          G ? te() : U = !1;
        }
      }
    }
    var te;
    if (typeof j == "function")
      te = function() {
        j(re);
      };
    else if (typeof MessageChannel < "u") {
      var W = new MessageChannel(), ae = W.port2;
      W.port1.onmessage = re, te = function() {
        ae.postMessage(null);
      };
    } else
      te = function() {
        q(re, 0);
      };
    function ie(N, G) {
      le = q(function() {
        N(n.unstable_now());
      }, G);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, n.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < N ? Math.floor(1e3 / N) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(N) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = w;
      }
      var P = w;
      w = G;
      try {
        return N();
      } finally {
        w = P;
      }
    }, n.unstable_requestPaint = function() {
      L = !0;
    }, n.unstable_runWithPriority = function(N, G) {
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
      var P = w;
      w = N;
      try {
        return G();
      } finally {
        w = P;
      }
    }, n.unstable_scheduleCallback = function(N, G, P) {
      var Ee = n.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? Ee + P : Ee) : P = Ee, N) {
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
      return b = P + b, N = {
        id: h++,
        callback: G,
        priorityLevel: N,
        startTime: P,
        expirationTime: b,
        sortIndex: -1
      }, P > Ee ? (N.sortIndex = P, i(m, N), l(g) === null && N === l(m) && (z ? (K(le), le = -1) : z = !0, ie(J, P - Ee))) : (N.sortIndex = b, i(g, N), k || x || (k = !0, U || (U = !0, te()))), N;
    }, n.unstable_shouldYield = we, n.unstable_wrapCallback = function(N) {
      var G = w;
      return function() {
        var P = w;
        w = G;
        try {
          return N.apply(this, arguments);
        } finally {
          w = P;
        }
      };
    };
  }($u)), $u;
}
var th;
function ov() {
  return th || (th = 1, Wu.exports = lv()), Wu.exports;
}
var ec = { exports: {} }, St = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nh;
function sv() {
  if (nh) return St;
  nh = 1;
  var n = Hc();
  function i(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var h = 2; h < arguments.length; h++)
        m += "&args[]=" + encodeURIComponent(arguments[h]);
    }
    return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var o = {
    d: {
      f: l,
      r: function() {
        throw Error(i(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, u = Symbol.for("react.portal");
  function c(g, m, h) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: v == null ? null : "" + v,
      children: g,
      containerInfo: m,
      implementation: h
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, m) {
    if (g === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, St.createPortal = function(g, m) {
    var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(i(299));
    return c(g, m, null, h);
  }, St.flushSync = function(g) {
    var m = d.T, h = o.p;
    try {
      if (d.T = null, o.p = 2, g) return g();
    } finally {
      d.T = m, o.p = h, o.d.f();
    }
  }, St.preconnect = function(g, m) {
    typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(g, m));
  }, St.prefetchDNS = function(g) {
    typeof g == "string" && o.d.D(g);
  }, St.preinit = function(g, m) {
    if (typeof g == "string" && m && typeof m.as == "string") {
      var h = m.as, v = p(h, m.crossOrigin), w = typeof m.integrity == "string" ? m.integrity : void 0, x = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      h === "style" ? o.d.S(
        g,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: v,
          integrity: w,
          fetchPriority: x
        }
      ) : h === "script" && o.d.X(g, {
        crossOrigin: v,
        integrity: w,
        fetchPriority: x,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, St.preinitModule = function(g, m) {
    if (typeof g == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var h = p(
            m.as,
            m.crossOrigin
          );
          o.d.M(g, {
            crossOrigin: h,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && o.d.M(g);
  }, St.preload = function(g, m) {
    if (typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var h = m.as, v = p(h, m.crossOrigin);
      o.d.L(g, h, {
        crossOrigin: v,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, St.preloadModule = function(g, m) {
    if (typeof g == "string")
      if (m) {
        var h = p(m.as, m.crossOrigin);
        o.d.m(g, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: h,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else o.d.m(g);
  }, St.requestFormReset = function(g) {
    o.d.r(g);
  }, St.unstable_batchedUpdates = function(g, m) {
    return g(m);
  }, St.useFormState = function(g, m, h) {
    return d.H.useFormState(g, m, h);
  }, St.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, St.version = "19.1.0", St;
}
var ah;
function uv() {
  if (ah) return ec.exports;
  ah = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), ec.exports = sv(), ec.exports;
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
var ih;
function cv() {
  if (ih) return Ir;
  ih = 1;
  var n = ov(), i = Hc(), l = uv();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (c(e) !== e)
      throw Error(o(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, r = t; ; ) {
      var s = a.return;
      if (s === null) break;
      var f = s.alternate;
      if (f === null) {
        if (r = s.return, r !== null) {
          a = r;
          continue;
        }
        break;
      }
      if (s.child === f.child) {
        for (f = s.child; f; ) {
          if (f === a) return p(s), e;
          if (f === r) return p(s), t;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== r.return) a = s, r = f;
      else {
        for (var y = !1, S = s.child; S; ) {
          if (S === a) {
            y = !0, a = s, r = f;
            break;
          }
          if (S === r) {
            y = !0, r = s, a = f;
            break;
          }
          S = S.sibling;
        }
        if (!y) {
          for (S = f.child; S; ) {
            if (S === a) {
              y = !0, a = f, r = s;
              break;
            }
            if (S === r) {
              y = !0, r = f, a = s;
              break;
            }
            S = S.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (a.alternate !== r) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : t;
  }
  function m(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = m(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var h = Object.assign, v = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), K = Symbol.for("react.consumer"), j = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), pe = Symbol.for("react.activity"), we = Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = Symbol.for("react.client.reference");
  function ae(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === W ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case k:
        return "Fragment";
      case L:
        return "Profiler";
      case z:
        return "StrictMode";
      case J:
        return "Suspense";
      case U:
        return "SuspenseList";
      case pe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case x:
          return "Portal";
        case j:
          return (e.displayName || "Context") + ".Provider";
        case K:
          return (e._context.displayName || "Context") + ".Consumer";
        case se:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case le:
          return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
        case Y:
          t = e._payload, e = e._init;
          try {
            return ae(e(t));
          } catch {
          }
      }
    return null;
  }
  var ie = Array.isArray, N = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ee = [], b = -1;
  function V(e) {
    return { current: e };
  }
  function ee(e) {
    0 > b || (e.current = Ee[b], Ee[b] = null, b--);
  }
  function A(e, t) {
    b++, Ee[b] = e.current, e.current = t;
  }
  var ne = V(null), Se = V(null), oe = V(null), Ae = V(null);
  function $(e, t) {
    switch (A(oe, t), A(Se, e), A(ne, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Tm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Tm(t), e = Em(t, e);
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
    ee(ne), A(ne, e);
  }
  function Ie() {
    ee(ne), ee(Se), ee(oe);
  }
  function Te(e) {
    e.memoizedState !== null && A(Ae, e);
    var t = ne.current, a = Em(t, e.type);
    t !== a && (A(Se, e), A(ne, a));
  }
  function Le(e) {
    Se.current === e && (ee(ne), ee(Se)), Ae.current === e && (ee(Ae), zr._currentValue = P);
  }
  var Xe = Object.prototype.hasOwnProperty, Et = n.unstable_scheduleCallback, ma = n.unstable_cancelCallback, wn = n.unstable_shouldYield, ha = n.unstable_requestPaint, wt = n.unstable_now, _o = n.unstable_getCurrentPriorityLevel, Li = n.unstable_ImmediatePriority, qi = n.unstable_UserBlockingPriority, Ba = n.unstable_NormalPriority, Io = n.unstable_LowPriority, Jr = n.unstable_IdlePriority, Uo = n.log, Lo = n.unstable_setDisableYieldValue, B = null, X = null;
  function he(e) {
    if (typeof Uo == "function" && Lo(e), X && typeof X.setStrictMode == "function")
      try {
        X.setStrictMode(B, e);
      } catch {
      }
  }
  var be = Math.clz32 ? Math.clz32 : Tn, He = Math.log, qt = Math.LN2;
  function Tn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (He(e) / qt | 0) | 0;
  }
  var Ct = 256, pn = 4194304;
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
  function ct(e, t, a) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0, f = e.suspendedLanes, y = e.pingedLanes;
    e = e.warmLanes;
    var S = r & 134217727;
    return S !== 0 ? (r = S & ~f, r !== 0 ? s = jt(r) : (y &= S, y !== 0 ? s = jt(y) : a || (a = S & ~e, a !== 0 && (s = jt(a))))) : (S = r & ~f, S !== 0 ? s = jt(S) : y !== 0 ? s = jt(y) : a || (a = r & ~e, a !== 0 && (s = jt(a)))), s === 0 ? 0 : t !== 0 && t !== s && (t & f) === 0 && (f = s & -s, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : s;
  }
  function Kt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function on(e, t) {
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
  function of() {
    var e = Ct;
    return Ct <<= 1, (Ct & 4194048) === 0 && (Ct = 256), e;
  }
  function sf() {
    var e = pn;
    return pn <<= 1, (pn & 62914560) === 0 && (pn = 4194304), e;
  }
  function qo(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function ji(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Py(e, t, a, r, s, f) {
    var y = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var S = e.entanglements, T = e.expirationTimes, R = e.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var H = 31 - be(a), F = 1 << H;
      S[H] = 0, T[H] = -1;
      var M = R[H];
      if (M !== null)
        for (R[H] = null, H = 0; H < M.length; H++) {
          var O = M[H];
          O !== null && (O.lane &= -536870913);
        }
      a &= ~F;
    }
    r !== 0 && uf(e, r, 0), f !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~t));
  }
  function uf(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - be(t);
    e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | a & 4194090;
  }
  function cf(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var r = 31 - be(a), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), a &= ~s;
    }
  }
  function jo(e) {
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
  function Bo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ff() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Fm(e.type));
  }
  function Gy(e, t) {
    var a = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = a;
    }
  }
  var Vn = Math.random().toString(36).slice(2), bt = "__reactFiber$" + Vn, kt = "__reactProps$" + Vn, Ha = "__reactContainer$" + Vn, Ho = "__reactEvents$" + Vn, Yy = "__reactListeners$" + Vn, Xy = "__reactHandles$" + Vn, df = "__reactResources$" + Vn, Bi = "__reactMarker$" + Vn;
  function Vo(e) {
    delete e[bt], delete e[kt], delete e[Ho], delete e[Yy], delete e[Xy];
  }
  function Va(e) {
    var t = e[bt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ha] || a[bt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = zm(e); e !== null; ) {
            if (a = e[bt]) return a;
            e = zm(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Qa(e) {
    if (e = e[bt] || e[Ha]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Hi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Fa(e) {
    var t = e[df];
    return t || (t = e[df] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ft(e) {
    e[Bi] = !0;
  }
  var pf = /* @__PURE__ */ new Set(), mf = {};
  function ga(e, t) {
    Pa(e, t), Pa(e + "Capture", t);
  }
  function Pa(e, t) {
    for (mf[e] = t, e = 0; e < t.length; e++)
      pf.add(t[e]);
  }
  var Ky = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), hf = {}, gf = {};
  function Zy(e) {
    return Xe.call(gf, e) ? !0 : Xe.call(hf, e) ? !1 : Ky.test(e) ? gf[e] = !0 : (hf[e] = !0, !1);
  }
  function Wr(e, t, a) {
    if (Zy(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
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
        e.setAttribute(t, "" + a);
      }
  }
  function $r(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function En(e, t, a, r) {
    if (r === null) e.removeAttribute(a);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + r);
    }
  }
  var Qo, yf;
  function Ga(e) {
    if (Qo === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Qo = t && t[1] || "", yf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qo + e + yf;
  }
  var Fo = !1;
  function Po(e, t) {
    if (!e || Fo) return "";
    Fo = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var F = function() {
                throw Error();
              };
              if (Object.defineProperty(F.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(F, []);
                } catch (O) {
                  var M = O;
                }
                Reflect.construct(e, [], F);
              } else {
                try {
                  F.call();
                } catch (O) {
                  M = O;
                }
                e.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                M = O;
              }
              (F = e()) && typeof F.catch == "function" && F.catch(function() {
              });
            }
          } catch (O) {
            if (O && M && typeof O.stack == "string")
              return [O.stack, M.stack];
          }
          return [null, null];
        }
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        r.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = r.DetermineComponentFrameRoot(), y = f[0], S = f[1];
      if (y && S) {
        var T = y.split(`
`), R = S.split(`
`);
        for (s = r = 0; r < T.length && !T[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; s < R.length && !R[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (r === T.length || s === R.length)
          for (r = T.length - 1, s = R.length - 1; 1 <= r && 0 <= s && T[r] !== R[s]; )
            s--;
        for (; 1 <= r && 0 <= s; r--, s--)
          if (T[r] !== R[s]) {
            if (r !== 1 || s !== 1)
              do
                if (r--, s--, 0 > s || T[r] !== R[s]) {
                  var H = `
` + T[r].replace(" at new ", " at ");
                  return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                }
              while (1 <= r && 0 <= s);
            break;
          }
      }
    } finally {
      Fo = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ga(a) : "";
  }
  function Jy(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ga(e.type);
      case 16:
        return Ga("Lazy");
      case 13:
        return Ga("Suspense");
      case 19:
        return Ga("SuspenseList");
      case 0:
      case 15:
        return Po(e.type, !1);
      case 11:
        return Po(e.type.render, !1);
      case 1:
        return Po(e.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function bf(e) {
    try {
      var t = "";
      do
        t += Jy(e), e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function Zt(e) {
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
  function vf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Wy(e) {
    var t = vf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var s = a.get, f = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          r = "" + y, f.call(this, y);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(y) {
          r = "" + y;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function el(e) {
    e._valueTracker || (e._valueTracker = Wy(e));
  }
  function Sf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), r = "";
    return e && (r = vf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== a ? (t.setValue(e), !0) : !1;
  }
  function tl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var $y = /[\n"\\]/g;
  function Jt(e) {
    return e.replace(
      $y,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Go(e, t, a, r, s, f, y, S) {
    e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), t != null ? Yo(e, y, Zt(t)) : a != null ? Yo(e, y, Zt(a)) : r != null && e.removeAttribute("value"), s == null && f != null && (e.defaultChecked = !!f), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + Zt(S) : e.removeAttribute("name");
  }
  function xf(e, t, a, r, s, f, y, S) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || a != null) {
      if (!(f !== "submit" && f !== "reset" || t != null))
        return;
      a = a != null ? "" + Zt(a) : "", t = t != null ? "" + Zt(t) : a, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = r ?? s, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = S ? e.checked : !!r, e.defaultChecked = !!r, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y);
  }
  function Yo(e, t, a) {
    t === "number" && tl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ya(e, t, a, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < a.length; s++)
        t["$" + a[s]] = !0;
      for (a = 0; a < e.length; a++)
        s = t.hasOwnProperty("$" + e[a].value), e[a].selected !== s && (e[a].selected = s), s && r && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Zt(a), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === a) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Af(e, t, a) {
    if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Zt(a) : "";
  }
  function wf(e, t, a, r) {
    if (t == null) {
      if (r != null) {
        if (a != null) throw Error(o(92));
        if (ie(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        a = r;
      }
      a == null && (a = ""), t = a;
    }
    a = Zt(t), e.defaultValue = a, r = e.textContent, r === a && r !== "" && r !== null && (e.value = r);
  }
  function Xa(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var eb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Tf(e, t, a) {
    var r = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, a) : typeof a != "number" || a === 0 || eb.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Ef(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, a != null) {
      for (var r in a)
        !a.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
      for (var s in t)
        r = t[s], t.hasOwnProperty(s) && a[s] !== r && Tf(e, s, r);
    } else
      for (var f in t)
        t.hasOwnProperty(f) && Tf(e, f, t[f]);
  }
  function Xo(e) {
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
  var tb = /* @__PURE__ */ new Map([
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
  ]), nb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function nl(e) {
    return nb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Ko = null;
  function Zo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ka = null, Za = null;
  function Cf(e) {
    var t = Qa(e);
    if (t && (e = t.stateNode)) {
      var a = e[kt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Go(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var r = a[t];
              if (r !== e && r.form === e.form) {
                var s = r[kt] || null;
                if (!s) throw Error(o(90));
                Go(
                  r,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              r = a[t], r.form === e.form && Sf(r);
          }
          break e;
        case "textarea":
          Af(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ya(e, !!a.multiple, t, !1);
      }
    }
  }
  var Jo = !1;
  function kf(e, t, a) {
    if (Jo) return e(t, a);
    Jo = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (Jo = !1, (Ka !== null || Za !== null) && (Hl(), Ka && (t = Ka, e = Za, Za = Ka = null, Cf(t), e)))
        for (t = 0; t < e.length; t++) Cf(e[t]);
    }
  }
  function Vi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var r = a[kt] || null;
    if (r === null) return null;
    a = r[t];
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
    if (a && typeof a != "function")
      throw Error(
        o(231, t, typeof a)
      );
    return a;
  }
  var Cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wo = !1;
  if (Cn)
    try {
      var Qi = {};
      Object.defineProperty(Qi, "passive", {
        get: function() {
          Wo = !0;
        }
      }), window.addEventListener("test", Qi, Qi), window.removeEventListener("test", Qi, Qi);
    } catch {
      Wo = !1;
    }
  var Qn = null, $o = null, al = null;
  function Df() {
    if (al) return al;
    var e, t = $o, a = t.length, r, s = "value" in Qn ? Qn.value : Qn.textContent, f = s.length;
    for (e = 0; e < a && t[e] === s[e]; e++) ;
    var y = a - e;
    for (r = 1; r <= y && t[a - r] === s[f - r]; r++) ;
    return al = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function il(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function rl() {
    return !0;
  }
  function zf() {
    return !1;
  }
  function Dt(e) {
    function t(a, r, s, f, y) {
      this._reactName = a, this._targetInst = s, this.type = r, this.nativeEvent = f, this.target = y, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (a = e[S], this[S] = a ? a(f) : f[S]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? rl : zf, this.isPropagationStopped = zf, this;
    }
    return h(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = rl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = rl);
      },
      persist: function() {
      },
      isPersistent: rl
    }), t;
  }
  var ya = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ll = Dt(ya), Fi = h({}, ya, { view: 0, detail: 0 }), ab = Dt(Fi), es, ts, Pi, ol = h({}, Fi, {
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
    getModifierState: as,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Pi && (Pi && e.type === "mousemove" ? (es = e.screenX - Pi.screenX, ts = e.screenY - Pi.screenY) : ts = es = 0, Pi = e), es);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ts;
    }
  }), Rf = Dt(ol), ib = h({}, ol, { dataTransfer: 0 }), rb = Dt(ib), lb = h({}, Fi, { relatedTarget: 0 }), ns = Dt(lb), ob = h({}, ya, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sb = Dt(ob), ub = h({}, ya, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), cb = Dt(ub), fb = h({}, ya, { data: 0 }), Nf = Dt(fb), db = {
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
  }, pb = {
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
  }, mb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function hb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = mb[e]) ? !!t[e] : !1;
  }
  function as() {
    return hb;
  }
  var gb = h({}, Fi, {
    key: function(e) {
      if (e.key) {
        var t = db[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = il(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: as,
    charCode: function(e) {
      return e.type === "keypress" ? il(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), yb = Dt(gb), bb = h({}, ol, {
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
  }), Mf = Dt(bb), vb = h({}, Fi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: as
  }), Sb = Dt(vb), xb = h({}, ya, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ab = Dt(xb), wb = h({}, ol, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Tb = Dt(wb), Eb = h({}, ya, {
    newState: 0,
    oldState: 0
  }), Cb = Dt(Eb), kb = [9, 13, 27, 32], is = Cn && "CompositionEvent" in window, Gi = null;
  Cn && "documentMode" in document && (Gi = document.documentMode);
  var Db = Cn && "TextEvent" in window && !Gi, Of = Cn && (!is || Gi && 8 < Gi && 11 >= Gi), _f = " ", If = !1;
  function Uf(e, t) {
    switch (e) {
      case "keyup":
        return kb.indexOf(t.keyCode) !== -1;
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
  function Lf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ja = !1;
  function zb(e, t) {
    switch (e) {
      case "compositionend":
        return Lf(t);
      case "keypress":
        return t.which !== 32 ? null : (If = !0, _f);
      case "textInput":
        return e = t.data, e === _f && If ? null : e;
      default:
        return null;
    }
  }
  function Rb(e, t) {
    if (Ja)
      return e === "compositionend" || !is && Uf(e, t) ? (e = Df(), al = $o = Qn = null, Ja = !1, e) : null;
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
        return Of && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Nb = {
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
  function qf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Nb[e.type] : t === "textarea";
  }
  function jf(e, t, a, r) {
    Ka ? Za ? Za.push(r) : Za = [r] : Ka = r, t = Yl(t, "onChange"), 0 < t.length && (a = new ll(
      "onChange",
      "change",
      null,
      a,
      r
    ), e.push({ event: a, listeners: t }));
  }
  var Yi = null, Xi = null;
  function Mb(e) {
    vm(e, 0);
  }
  function sl(e) {
    var t = Hi(e);
    if (Sf(t)) return e;
  }
  function Bf(e, t) {
    if (e === "change") return t;
  }
  var Hf = !1;
  if (Cn) {
    var rs;
    if (Cn) {
      var ls = "oninput" in document;
      if (!ls) {
        var Vf = document.createElement("div");
        Vf.setAttribute("oninput", "return;"), ls = typeof Vf.oninput == "function";
      }
      rs = ls;
    } else rs = !1;
    Hf = rs && (!document.documentMode || 9 < document.documentMode);
  }
  function Qf() {
    Yi && (Yi.detachEvent("onpropertychange", Ff), Xi = Yi = null);
  }
  function Ff(e) {
    if (e.propertyName === "value" && sl(Xi)) {
      var t = [];
      jf(
        t,
        Xi,
        e,
        Zo(e)
      ), kf(Mb, t);
    }
  }
  function Ob(e, t, a) {
    e === "focusin" ? (Qf(), Yi = t, Xi = a, Yi.attachEvent("onpropertychange", Ff)) : e === "focusout" && Qf();
  }
  function _b(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return sl(Xi);
  }
  function Ib(e, t) {
    if (e === "click") return sl(t);
  }
  function Ub(e, t) {
    if (e === "input" || e === "change")
      return sl(t);
  }
  function Lb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Bt = typeof Object.is == "function" ? Object.is : Lb;
  function Ki(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), r = Object.keys(t);
    if (a.length !== r.length) return !1;
    for (r = 0; r < a.length; r++) {
      var s = a[r];
      if (!Xe.call(t, s) || !Bt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function Pf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Gf(e, t) {
    var a = Pf(e);
    e = 0;
    for (var r; a; ) {
      if (a.nodeType === 3) {
        if (r = e + a.textContent.length, e <= t && r >= t)
          return { node: a, offset: t - e };
        e = r;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Pf(a);
    }
  }
  function Yf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Xf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = tl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = tl(e.document);
    }
    return t;
  }
  function os(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var qb = Cn && "documentMode" in document && 11 >= document.documentMode, Wa = null, ss = null, Zi = null, us = !1;
  function Kf(e, t, a) {
    var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    us || Wa == null || Wa !== tl(r) || (r = Wa, "selectionStart" in r && os(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Zi && Ki(Zi, r) || (Zi = r, r = Yl(ss, "onSelect"), 0 < r.length && (t = new ll(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: r }), t.target = Wa)));
  }
  function ba(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var $a = {
    animationend: ba("Animation", "AnimationEnd"),
    animationiteration: ba("Animation", "AnimationIteration"),
    animationstart: ba("Animation", "AnimationStart"),
    transitionrun: ba("Transition", "TransitionRun"),
    transitionstart: ba("Transition", "TransitionStart"),
    transitioncancel: ba("Transition", "TransitionCancel"),
    transitionend: ba("Transition", "TransitionEnd")
  }, cs = {}, Zf = {};
  Cn && (Zf = document.createElement("div").style, "AnimationEvent" in window || (delete $a.animationend.animation, delete $a.animationiteration.animation, delete $a.animationstart.animation), "TransitionEvent" in window || delete $a.transitionend.transition);
  function va(e) {
    if (cs[e]) return cs[e];
    if (!$a[e]) return e;
    var t = $a[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Zf)
        return cs[e] = t[a];
    return e;
  }
  var Jf = va("animationend"), Wf = va("animationiteration"), $f = va("animationstart"), jb = va("transitionrun"), Bb = va("transitionstart"), Hb = va("transitioncancel"), ed = va("transitionend"), td = /* @__PURE__ */ new Map(), fs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  fs.push("scrollEnd");
  function sn(e, t) {
    td.set(e, t), ga(t, [e]);
  }
  var nd = /* @__PURE__ */ new WeakMap();
  function Wt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = nd.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: bf(t)
      }, nd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: bf(t)
    };
  }
  var $t = [], ei = 0, ds = 0;
  function ul() {
    for (var e = ei, t = ds = ei = 0; t < e; ) {
      var a = $t[t];
      $t[t++] = null;
      var r = $t[t];
      $t[t++] = null;
      var s = $t[t];
      $t[t++] = null;
      var f = $t[t];
      if ($t[t++] = null, r !== null && s !== null) {
        var y = r.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), r.pending = s;
      }
      f !== 0 && ad(a, s, f);
    }
  }
  function cl(e, t, a, r) {
    $t[ei++] = e, $t[ei++] = t, $t[ei++] = a, $t[ei++] = r, ds |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function ps(e, t, a, r) {
    return cl(e, t, a, r), fl(e);
  }
  function ti(e, t) {
    return cl(e, null, null, t), fl(e);
  }
  function ad(e, t, a) {
    e.lanes |= a;
    var r = e.alternate;
    r !== null && (r.lanes |= a);
    for (var s = !1, f = e.return; f !== null; )
      f.childLanes |= a, r = f.alternate, r !== null && (r.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (s = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, s && t !== null && (s = 31 - be(a), e = f.hiddenUpdates, r = e[s], r === null ? e[s] = [t] : r.push(t), t.lane = a | 536870912), f) : null;
  }
  function fl(e) {
    if (50 < xr)
      throw xr = 0, vu = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ni = {};
  function Vb(e, t, a, r) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, a, r) {
    return new Vb(e, t, a, r);
  }
  function ms(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function kn(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ht(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function id(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function dl(e, t, a, r, s, f) {
    var y = 0;
    if (r = e, typeof e == "function") ms(e) && (y = 1);
    else if (typeof e == "string")
      y = F0(
        e,
        a,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case pe:
          return e = Ht(31, a, t, s), e.elementType = pe, e.lanes = f, e;
        case k:
          return Sa(a.children, s, f, t);
        case z:
          y = 8, s |= 24;
          break;
        case L:
          return e = Ht(12, a, t, s | 2), e.elementType = L, e.lanes = f, e;
        case J:
          return e = Ht(13, a, t, s), e.elementType = J, e.lanes = f, e;
        case U:
          return e = Ht(19, a, t, s), e.elementType = U, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
              case j:
                y = 10;
                break e;
              case K:
                y = 9;
                break e;
              case se:
                y = 11;
                break e;
              case le:
                y = 14;
                break e;
              case Y:
                y = 16, r = null;
                break e;
            }
          y = 29, a = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), r = null;
      }
    return t = Ht(y, a, t, s), t.elementType = e, t.type = r, t.lanes = f, t;
  }
  function Sa(e, t, a, r) {
    return e = Ht(7, e, r, t), e.lanes = a, e;
  }
  function hs(e, t, a) {
    return e = Ht(6, e, null, t), e.lanes = a, e;
  }
  function gs(e, t, a) {
    return t = Ht(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var ai = [], ii = 0, pl = null, ml = 0, en = [], tn = 0, xa = null, Dn = 1, zn = "";
  function Aa(e, t) {
    ai[ii++] = ml, ai[ii++] = pl, pl = e, ml = t;
  }
  function rd(e, t, a) {
    en[tn++] = Dn, en[tn++] = zn, en[tn++] = xa, xa = e;
    var r = Dn;
    e = zn;
    var s = 32 - be(r) - 1;
    r &= ~(1 << s), a += 1;
    var f = 32 - be(t) + s;
    if (30 < f) {
      var y = s - s % 5;
      f = (r & (1 << y) - 1).toString(32), r >>= y, s -= y, Dn = 1 << 32 - be(t) + s | a << s | r, zn = f + e;
    } else
      Dn = 1 << f | a << s | r, zn = e;
  }
  function ys(e) {
    e.return !== null && (Aa(e, 1), rd(e, 1, 0));
  }
  function bs(e) {
    for (; e === pl; )
      pl = ai[--ii], ai[ii] = null, ml = ai[--ii], ai[ii] = null;
    for (; e === xa; )
      xa = en[--tn], en[tn] = null, zn = en[--tn], en[tn] = null, Dn = en[--tn], en[tn] = null;
  }
  var Tt = null, et = null, je = !1, wa = null, mn = !1, vs = Error(o(519));
  function Ta(e) {
    var t = Error(o(418, ""));
    throw $i(Wt(t, e)), vs;
  }
  function ld(e) {
    var t = e.stateNode, a = e.type, r = e.memoizedProps;
    switch (t[bt] = e, t[kt] = r, a) {
      case "dialog":
        Oe("cancel", t), Oe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Oe("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < wr.length; a++)
          Oe(wr[a], t);
        break;
      case "source":
        Oe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Oe("error", t), Oe("load", t);
        break;
      case "details":
        Oe("toggle", t);
        break;
      case "input":
        Oe("invalid", t), xf(
          t,
          r.value,
          r.defaultValue,
          r.checked,
          r.defaultChecked,
          r.type,
          r.name,
          !0
        ), el(t);
        break;
      case "select":
        Oe("invalid", t);
        break;
      case "textarea":
        Oe("invalid", t), wf(t, r.value, r.defaultValue, r.children), el(t);
    }
    a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || r.suppressHydrationWarning === !0 || wm(t.textContent, a) ? (r.popover != null && (Oe("beforetoggle", t), Oe("toggle", t)), r.onScroll != null && Oe("scroll", t), r.onScrollEnd != null && Oe("scrollend", t), r.onClick != null && (t.onclick = Xl), t = !0) : t = !1, t || Ta(e);
  }
  function od(e) {
    for (Tt = e.return; Tt; )
      switch (Tt.tag) {
        case 5:
        case 13:
          mn = !1;
          return;
        case 27:
        case 3:
          mn = !0;
          return;
        default:
          Tt = Tt.return;
      }
  }
  function Ji(e) {
    if (e !== Tt) return !1;
    if (!je) return od(e), je = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Iu(e.type, e.memoizedProps)), a = !a), a && et && Ta(e), od(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                et = cn(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        et = null;
      }
    } else
      t === 27 ? (t = et, ra(e.type) ? (e = ju, ju = null, et = e) : et = t) : et = Tt ? cn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wi() {
    et = Tt = null, je = !1;
  }
  function sd() {
    var e = wa;
    return e !== null && (Nt === null ? Nt = e : Nt.push.apply(
      Nt,
      e
    ), wa = null), e;
  }
  function $i(e) {
    wa === null ? wa = [e] : wa.push(e);
  }
  var Ss = V(null), Ea = null, Rn = null;
  function Fn(e, t, a) {
    A(Ss, t._currentValue), t._currentValue = a;
  }
  function Nn(e) {
    e._currentValue = Ss.current, ee(Ss);
  }
  function xs(e, t, a) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function As(e, t, a, r) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var f = s.dependencies;
      if (f !== null) {
        var y = s.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var S = f;
          f = s;
          for (var T = 0; T < t.length; T++)
            if (S.context === t[T]) {
              f.lanes |= a, S = f.alternate, S !== null && (S.lanes |= a), xs(
                f.return,
                a,
                e
              ), r || (y = null);
              break e;
            }
          f = S.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(o(341));
        y.lanes |= a, f = y.alternate, f !== null && (f.lanes |= a), xs(y, a, e), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function er(e, t, a, r) {
    e = null;
    for (var s = t, f = !1; s !== null; ) {
      if (!f) {
        if ((s.flags & 524288) !== 0) f = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(o(387));
        if (y = y.memoizedProps, y !== null) {
          var S = s.type;
          Bt(s.pendingProps.value, y.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (s === Ae.current) {
        if (y = s.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(zr) : e = [zr]);
      }
      s = s.return;
    }
    e !== null && As(
      t,
      e,
      a,
      r
    ), t.flags |= 262144;
  }
  function hl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Bt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ca(e) {
    Ea = e, Rn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function vt(e) {
    return ud(Ea, e);
  }
  function gl(e, t) {
    return Ea === null && Ca(e), ud(e, t);
  }
  function ud(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Rn === null) {
      if (e === null) throw Error(o(308));
      Rn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Rn = Rn.next = t;
    return a;
  }
  var Qb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, r) {
        e.push(r);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, Fb = n.unstable_scheduleCallback, Pb = n.unstable_NormalPriority, ot = {
    $$typeof: j,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ws() {
    return {
      controller: new Qb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function tr(e) {
    e.refCount--, e.refCount === 0 && Fb(Pb, function() {
      e.controller.abort();
    });
  }
  var nr = null, Ts = 0, ri = 0, li = null;
  function Gb(e, t) {
    if (nr === null) {
      var a = nr = [];
      Ts = 0, ri = Cu(), li = {
        status: "pending",
        value: void 0,
        then: function(r) {
          a.push(r);
        }
      };
    }
    return Ts++, t.then(cd, cd), t;
  }
  function cd() {
    if (--Ts === 0 && nr !== null) {
      li !== null && (li.status = "fulfilled");
      var e = nr;
      nr = null, ri = 0, li = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Yb(e, t) {
    var a = [], r = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        a.push(s);
      }
    };
    return e.then(
      function() {
        r.status = "fulfilled", r.value = t;
        for (var s = 0; s < a.length; s++) (0, a[s])(t);
      },
      function(s) {
        for (r.status = "rejected", r.reason = s, s = 0; s < a.length; s++)
          (0, a[s])(void 0);
      }
    ), r;
  }
  var fd = N.S;
  N.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Gb(e, t), fd !== null && fd(e, t);
  };
  var ka = V(null);
  function Es() {
    var e = ka.current;
    return e !== null ? e : Ke.pooledCache;
  }
  function yl(e, t) {
    t === null ? A(ka, ka.current) : A(ka, t.pool);
  }
  function dd() {
    var e = Es();
    return e === null ? null : { parent: ot._currentValue, pool: e };
  }
  var ar = Error(o(460)), pd = Error(o(474)), bl = Error(o(542)), Cs = { then: function() {
  } };
  function md(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function vl() {
  }
  function hd(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(vl, vl), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, yd(e), e;
      default:
        if (typeof t.status == "string") t.then(vl, vl);
        else {
          if (e = Ke, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(r) {
              if (t.status === "pending") {
                var s = t;
                s.status = "fulfilled", s.value = r;
              }
            },
            function(r) {
              if (t.status === "pending") {
                var s = t;
                s.status = "rejected", s.reason = r;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, yd(e), e;
        }
        throw ir = t, ar;
    }
  }
  var ir = null;
  function gd() {
    if (ir === null) throw Error(o(459));
    var e = ir;
    return ir = null, e;
  }
  function yd(e) {
    if (e === ar || e === bl)
      throw Error(o(483));
  }
  var Pn = !1;
  function ks(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ds(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Gn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Yn(e, t, a) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Ve & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, t = fl(e), ad(e, null, a), t;
    }
    return cl(e, r, t, a), fl(e);
  }
  function rr(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, a |= r, t.lanes = a, cf(e, a);
    }
  }
  function zs(e, t) {
    var a = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, a === r)) {
      var s = null, f = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var y = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          f === null ? s = f = y : f = f.next = y, a = a.next;
        } while (a !== null);
        f === null ? s = f = t : f = f.next = t;
      } else s = f = t;
      a = {
        baseState: r.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: f,
        shared: r.shared,
        callbacks: r.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Rs = !1;
  function lr() {
    if (Rs) {
      var e = li;
      if (e !== null) throw e;
    }
  }
  function or(e, t, a, r) {
    Rs = !1;
    var s = e.updateQueue;
    Pn = !1;
    var f = s.firstBaseUpdate, y = s.lastBaseUpdate, S = s.shared.pending;
    if (S !== null) {
      s.shared.pending = null;
      var T = S, R = T.next;
      T.next = null, y === null ? f = R : y.next = R, y = T;
      var H = e.alternate;
      H !== null && (H = H.updateQueue, S = H.lastBaseUpdate, S !== y && (S === null ? H.firstBaseUpdate = R : S.next = R, H.lastBaseUpdate = T));
    }
    if (f !== null) {
      var F = s.baseState;
      y = 0, H = R = T = null, S = f;
      do {
        var M = S.lane & -536870913, O = M !== S.lane;
        if (O ? (Ue & M) === M : (r & M) === M) {
          M !== 0 && M === ri && (Rs = !0), H !== null && (H = H.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var ve = e, ge = S;
            M = t;
            var Ge = a;
            switch (ge.tag) {
              case 1:
                if (ve = ge.payload, typeof ve == "function") {
                  F = ve.call(Ge, F, M);
                  break e;
                }
                F = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = ge.payload, M = typeof ve == "function" ? ve.call(Ge, F, M) : ve, M == null) break e;
                F = h({}, F, M);
                break e;
              case 2:
                Pn = !0;
            }
          }
          M = S.callback, M !== null && (e.flags |= 64, O && (e.flags |= 8192), O = s.callbacks, O === null ? s.callbacks = [M] : O.push(M));
        } else
          O = {
            lane: M,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, H === null ? (R = H = O, T = F) : H = H.next = O, y |= M;
        if (S = S.next, S === null) {
          if (S = s.shared.pending, S === null)
            break;
          O = S, S = O.next, O.next = null, s.lastBaseUpdate = O, s.shared.pending = null;
        }
      } while (!0);
      H === null && (T = F), s.baseState = T, s.firstBaseUpdate = R, s.lastBaseUpdate = H, f === null && (s.shared.lanes = 0), ta |= y, e.lanes = y, e.memoizedState = F;
    }
  }
  function bd(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function vd(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        bd(a[e], t);
  }
  var oi = V(null), Sl = V(0);
  function Sd(e, t) {
    e = qn, A(Sl, e), A(oi, t), qn = e | t.baseLanes;
  }
  function Ns() {
    A(Sl, qn), A(oi, oi.current);
  }
  function Ms() {
    qn = Sl.current, ee(oi), ee(Sl);
  }
  var Xn = 0, ze = null, Fe = null, it = null, xl = !1, si = !1, Da = !1, Al = 0, sr = 0, ui = null, Xb = 0;
  function nt() {
    throw Error(o(321));
  }
  function Os(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Bt(e[a], t[a])) return !1;
    return !0;
  }
  function _s(e, t, a, r, s, f) {
    return Xn = f, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, N.H = e === null || e.memoizedState === null ? ap : ip, Da = !1, f = a(r, s), Da = !1, si && (f = Ad(
      t,
      a,
      r,
      s
    )), xd(e), f;
  }
  function xd(e) {
    N.H = Dl;
    var t = Fe !== null && Fe.next !== null;
    if (Xn = 0, it = Fe = ze = null, xl = !1, sr = 0, ui = null, t) throw Error(o(300));
    e === null || dt || (e = e.dependencies, e !== null && hl(e) && (dt = !0));
  }
  function Ad(e, t, a, r) {
    ze = e;
    var s = 0;
    do {
      if (si && (ui = null), sr = 0, si = !1, 25 <= s) throw Error(o(301));
      if (s += 1, it = Fe = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      N.H = t0, f = t(a, r);
    } while (si);
    return f;
  }
  function Kb() {
    var e = N.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ur(t) : t, e = e.useState()[0], (Fe !== null ? Fe.memoizedState : null) !== e && (ze.flags |= 1024), t;
  }
  function Is() {
    var e = Al !== 0;
    return Al = 0, e;
  }
  function Us(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Ls(e) {
    if (xl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      xl = !1;
    }
    Xn = 0, it = Fe = ze = null, si = !1, sr = Al = 0, ui = null;
  }
  function zt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return it === null ? ze.memoizedState = it = e : it = it.next = e, it;
  }
  function rt() {
    if (Fe === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = it === null ? ze.memoizedState : it.next;
    if (t !== null)
      it = t, Fe = e;
    else {
      if (e === null)
        throw ze.alternate === null ? Error(o(467)) : Error(o(310));
      Fe = e, e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null
      }, it === null ? ze.memoizedState = it = e : it = it.next = e;
    }
    return it;
  }
  function qs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ur(e) {
    var t = sr;
    return sr += 1, ui === null && (ui = []), e = hd(ui, e, t), t = ze, (it === null ? t.memoizedState : it.next) === null && (t = t.alternate, N.H = t === null || t.memoizedState === null ? ap : ip), e;
  }
  function wl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ur(e);
      if (e.$$typeof === j) return vt(e);
    }
    throw Error(o(438, String(e)));
  }
  function js(e) {
    var t = null, a = ze.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var r = ze.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
        data: r.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = qs(), ze.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), r = 0; r < e; r++)
        a[r] = we;
    return t.index++, a;
  }
  function Mn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Tl(e) {
    var t = rt();
    return Bs(t, Fe, e);
  }
  function Bs(e, t, a) {
    var r = e.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = a;
    var s = e.baseQueue, f = r.pending;
    if (f !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = f.next, f.next = y;
      }
      t.baseQueue = s = f, r.pending = null;
    }
    if (f = e.baseState, s === null) e.memoizedState = f;
    else {
      t = s.next;
      var S = y = null, T = null, R = t, H = !1;
      do {
        var F = R.lane & -536870913;
        if (F !== R.lane ? (Ue & F) === F : (Xn & F) === F) {
          var M = R.revertLane;
          if (M === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), F === ri && (H = !0);
          else if ((Xn & M) === M) {
            R = R.next, M === ri && (H = !0);
            continue;
          } else
            F = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, T === null ? (S = T = F, y = f) : T = T.next = F, ze.lanes |= M, ta |= M;
          F = R.action, Da && a(f, F), f = R.hasEagerState ? R.eagerState : a(f, F);
        } else
          M = {
            lane: F,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, T === null ? (S = T = M, y = f) : T = T.next = M, ze.lanes |= F, ta |= F;
        R = R.next;
      } while (R !== null && R !== t);
      if (T === null ? y = f : T.next = S, !Bt(f, e.memoizedState) && (dt = !0, H && (a = li, a !== null)))
        throw a;
      e.memoizedState = f, e.baseState = y, e.baseQueue = T, r.lastRenderedState = f;
    }
    return s === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function Hs(e) {
    var t = rt(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var r = a.dispatch, s = a.pending, f = t.memoizedState;
    if (s !== null) {
      a.pending = null;
      var y = s = s.next;
      do
        f = e(f, y.action), y = y.next;
      while (y !== s);
      Bt(f, t.memoizedState) || (dt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
    }
    return [f, r];
  }
  function wd(e, t, a) {
    var r = ze, s = rt(), f = je;
    if (f) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var y = !Bt(
      (Fe || s).memoizedState,
      a
    );
    y && (s.memoizedState = a, dt = !0), s = s.queue;
    var S = Cd.bind(null, r, s, e);
    if (cr(2048, 8, S, [e]), s.getSnapshot !== t || y || it !== null && it.memoizedState.tag & 1) {
      if (r.flags |= 2048, ci(
        9,
        El(),
        Ed.bind(
          null,
          r,
          s,
          a,
          t
        ),
        null
      ), Ke === null) throw Error(o(349));
      f || (Xn & 124) !== 0 || Td(r, t, a);
    }
    return a;
  }
  function Td(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ze.updateQueue, t === null ? (t = qs(), ze.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Ed(e, t, a, r) {
    t.value = a, t.getSnapshot = r, kd(t) && Dd(e);
  }
  function Cd(e, t, a) {
    return a(function() {
      kd(t) && Dd(e);
    });
  }
  function kd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Bt(e, a);
    } catch {
      return !0;
    }
  }
  function Dd(e) {
    var t = ti(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function Vs(e) {
    var t = zt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Da) {
        he(!0);
        try {
          a();
        } finally {
          he(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mn,
      lastRenderedState: e
    }, t;
  }
  function zd(e, t, a, r) {
    return e.baseState = a, Bs(
      e,
      Fe,
      typeof r == "function" ? r : Mn
    );
  }
  function Zb(e, t, a, r, s) {
    if (kl(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var f = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          f.listeners.push(y);
        }
      };
      N.T !== null ? a(!0) : f.isTransition = !1, r(f), a = t.pending, a === null ? (f.next = t.pending = f, Rd(t, f)) : (f.next = a.next, t.pending = a.next = f);
    }
  }
  function Rd(e, t) {
    var a = t.action, r = t.payload, s = e.state;
    if (t.isTransition) {
      var f = N.T, y = {};
      N.T = y;
      try {
        var S = a(s, r), T = N.S;
        T !== null && T(y, S), Nd(e, t, S);
      } catch (R) {
        Qs(e, t, R);
      } finally {
        N.T = f;
      }
    } else
      try {
        f = a(s, r), Nd(e, t, f);
      } catch (R) {
        Qs(e, t, R);
      }
  }
  function Nd(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(r) {
        Md(e, t, r);
      },
      function(r) {
        return Qs(e, t, r);
      }
    ) : Md(e, t, a);
  }
  function Md(e, t, a) {
    t.status = "fulfilled", t.value = a, Od(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Rd(e, a)));
  }
  function Qs(e, t, a) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        t.status = "rejected", t.reason = a, Od(t), t = t.next;
      while (t !== r);
    }
    e.action = null;
  }
  function Od(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function _d(e, t) {
    return t;
  }
  function Id(e, t) {
    if (je) {
      var a = Ke.formState;
      if (a !== null) {
        e: {
          var r = ze;
          if (je) {
            if (et) {
              t: {
                for (var s = et, f = mn; s.nodeType !== 8; ) {
                  if (!f) {
                    s = null;
                    break t;
                  }
                  if (s = cn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                f = s.data, s = f === "F!" || f === "F" ? s : null;
              }
              if (s) {
                et = cn(
                  s.nextSibling
                ), r = s.data === "F!";
                break e;
              }
            }
            Ta(r);
          }
          r = !1;
        }
        r && (t = a[0]);
      }
    }
    return a = zt(), a.memoizedState = a.baseState = t, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _d,
      lastRenderedState: t
    }, a.queue = r, a = ep.bind(
      null,
      ze,
      r
    ), r.dispatch = a, r = Vs(!1), f = Xs.bind(
      null,
      ze,
      !1,
      r.queue
    ), r = zt(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, r.queue = s, a = Zb.bind(
      null,
      ze,
      s,
      f,
      a
    ), s.dispatch = a, r.memoizedState = e, [t, a, !1];
  }
  function Ud(e) {
    var t = rt();
    return Ld(t, Fe, e);
  }
  function Ld(e, t, a) {
    if (t = Bs(
      e,
      t,
      _d
    )[0], e = Tl(Mn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var r = ur(t);
      } catch (y) {
        throw y === ar ? bl : y;
      }
    else r = t;
    t = rt();
    var s = t.queue, f = s.dispatch;
    return a !== t.memoizedState && (ze.flags |= 2048, ci(
      9,
      El(),
      Jb.bind(null, s, a),
      null
    )), [r, f, e];
  }
  function Jb(e, t) {
    e.action = t;
  }
  function qd(e) {
    var t = rt(), a = Fe;
    if (a !== null)
      return Ld(t, a, e);
    rt(), t = t.memoizedState, a = rt();
    var r = a.queue.dispatch;
    return a.memoizedState = e, [t, r, !1];
  }
  function ci(e, t, a, r) {
    return e = { tag: e, create: a, deps: r, inst: t, next: null }, t = ze.updateQueue, t === null && (t = qs(), ze.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (r = a.next, a.next = e, e.next = r, t.lastEffect = e), e;
  }
  function El() {
    return { destroy: void 0, resource: void 0 };
  }
  function jd() {
    return rt().memoizedState;
  }
  function Cl(e, t, a, r) {
    var s = zt();
    r = r === void 0 ? null : r, ze.flags |= e, s.memoizedState = ci(
      1 | t,
      El(),
      a,
      r
    );
  }
  function cr(e, t, a, r) {
    var s = rt();
    r = r === void 0 ? null : r;
    var f = s.memoizedState.inst;
    Fe !== null && r !== null && Os(r, Fe.memoizedState.deps) ? s.memoizedState = ci(t, f, a, r) : (ze.flags |= e, s.memoizedState = ci(
      1 | t,
      f,
      a,
      r
    ));
  }
  function Bd(e, t) {
    Cl(8390656, 8, e, t);
  }
  function Hd(e, t) {
    cr(2048, 8, e, t);
  }
  function Vd(e, t) {
    return cr(4, 2, e, t);
  }
  function Qd(e, t) {
    return cr(4, 4, e, t);
  }
  function Fd(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Pd(e, t, a) {
    a = a != null ? a.concat([e]) : null, cr(4, 4, Fd.bind(null, t, e), a);
  }
  function Fs() {
  }
  function Gd(e, t) {
    var a = rt();
    t = t === void 0 ? null : t;
    var r = a.memoizedState;
    return t !== null && Os(t, r[1]) ? r[0] : (a.memoizedState = [e, t], e);
  }
  function Yd(e, t) {
    var a = rt();
    t = t === void 0 ? null : t;
    var r = a.memoizedState;
    if (t !== null && Os(t, r[1]))
      return r[0];
    if (r = e(), Da) {
      he(!0);
      try {
        e();
      } finally {
        he(!1);
      }
    }
    return a.memoizedState = [r, t], r;
  }
  function Ps(e, t, a) {
    return a === void 0 || (Xn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Zp(), ze.lanes |= e, ta |= e, a);
  }
  function Xd(e, t, a, r) {
    return Bt(a, t) ? a : oi.current !== null ? (e = Ps(e, a, r), Bt(e, t) || (dt = !0), e) : (Xn & 42) === 0 ? (dt = !0, e.memoizedState = a) : (e = Zp(), ze.lanes |= e, ta |= e, t);
  }
  function Kd(e, t, a, r, s) {
    var f = G.p;
    G.p = f !== 0 && 8 > f ? f : 8;
    var y = N.T, S = {};
    N.T = S, Xs(e, !1, t, a);
    try {
      var T = s(), R = N.S;
      if (R !== null && R(S, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var H = Yb(
          T,
          r
        );
        fr(
          e,
          t,
          H,
          Pt(e)
        );
      } else
        fr(
          e,
          t,
          r,
          Pt(e)
        );
    } catch (F) {
      fr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: F },
        Pt()
      );
    } finally {
      G.p = f, N.T = y;
    }
  }
  function Wb() {
  }
  function Gs(e, t, a, r) {
    if (e.tag !== 5) throw Error(o(476));
    var s = Zd(e).queue;
    Kd(
      e,
      s,
      t,
      P,
      a === null ? Wb : function() {
        return Jd(e), a(r);
      }
    );
  }
  function Zd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mn,
        lastRenderedState: P
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
        lastRenderedReducer: Mn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Jd(e) {
    var t = Zd(e).next.queue;
    fr(e, t, {}, Pt());
  }
  function Ys() {
    return vt(zr);
  }
  function Wd() {
    return rt().memoizedState;
  }
  function $d() {
    return rt().memoizedState;
  }
  function $b(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Pt();
          e = Gn(a);
          var r = Yn(t, e, a);
          r !== null && (Gt(r, t, a), rr(r, t, a)), t = { cache: ws() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function e0(e, t, a) {
    var r = Pt();
    a = {
      lane: r,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, kl(e) ? tp(t, a) : (a = ps(e, t, a, r), a !== null && (Gt(a, e, r), np(a, t, r)));
  }
  function ep(e, t, a) {
    var r = Pt();
    fr(e, t, a, r);
  }
  function fr(e, t, a, r) {
    var s = {
      lane: r,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (kl(e)) tp(t, s);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var y = t.lastRenderedState, S = f(y, a);
          if (s.hasEagerState = !0, s.eagerState = S, Bt(S, y))
            return cl(e, t, s, 0), Ke === null && ul(), !1;
        } catch {
        } finally {
        }
      if (a = ps(e, t, s, r), a !== null)
        return Gt(a, e, r), np(a, t, r), !0;
    }
    return !1;
  }
  function Xs(e, t, a, r) {
    if (r = {
      lane: 2,
      revertLane: Cu(),
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, kl(e)) {
      if (t) throw Error(o(479));
    } else
      t = ps(
        e,
        a,
        r,
        2
      ), t !== null && Gt(t, e, 2);
  }
  function kl(e) {
    var t = e.alternate;
    return e === ze || t !== null && t === ze;
  }
  function tp(e, t) {
    si = xl = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function np(e, t, a) {
    if ((a & 4194048) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, a |= r, t.lanes = a, cf(e, a);
    }
  }
  var Dl = {
    readContext: vt,
    use: wl,
    useCallback: nt,
    useContext: nt,
    useEffect: nt,
    useImperativeHandle: nt,
    useLayoutEffect: nt,
    useInsertionEffect: nt,
    useMemo: nt,
    useReducer: nt,
    useRef: nt,
    useState: nt,
    useDebugValue: nt,
    useDeferredValue: nt,
    useTransition: nt,
    useSyncExternalStore: nt,
    useId: nt,
    useHostTransitionStatus: nt,
    useFormState: nt,
    useActionState: nt,
    useOptimistic: nt,
    useMemoCache: nt,
    useCacheRefresh: nt
  }, ap = {
    readContext: vt,
    use: wl,
    useCallback: function(e, t) {
      return zt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: vt,
    useEffect: Bd,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Cl(
        4194308,
        4,
        Fd.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Cl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Cl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = zt();
      t = t === void 0 ? null : t;
      var r = e();
      if (Da) {
        he(!0);
        try {
          e();
        } finally {
          he(!1);
        }
      }
      return a.memoizedState = [r, t], r;
    },
    useReducer: function(e, t, a) {
      var r = zt();
      if (a !== void 0) {
        var s = a(t);
        if (Da) {
          he(!0);
          try {
            a(t);
          } finally {
            he(!1);
          }
        }
      } else s = t;
      return r.memoizedState = r.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, r.queue = e, e = e.dispatch = e0.bind(
        null,
        ze,
        e
      ), [r.memoizedState, e];
    },
    useRef: function(e) {
      var t = zt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Vs(e);
      var t = e.queue, a = ep.bind(null, ze, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Fs,
    useDeferredValue: function(e, t) {
      var a = zt();
      return Ps(a, e, t);
    },
    useTransition: function() {
      var e = Vs(!1);
      return e = Kd.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), zt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var r = ze, s = zt();
      if (je) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), Ke === null)
          throw Error(o(349));
        (Ue & 124) !== 0 || Td(r, t, a);
      }
      s.memoizedState = a;
      var f = { value: a, getSnapshot: t };
      return s.queue = f, Bd(Cd.bind(null, r, f, e), [
        e
      ]), r.flags |= 2048, ci(
        9,
        El(),
        Ed.bind(
          null,
          r,
          f,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = zt(), t = Ke.identifierPrefix;
      if (je) {
        var a = zn, r = Dn;
        a = (r & ~(1 << 32 - be(r) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Al++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = Xb++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ys,
    useFormState: Id,
    useActionState: Id,
    useOptimistic: function(e) {
      var t = zt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Xs.bind(
        null,
        ze,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: js,
    useCacheRefresh: function() {
      return zt().memoizedState = $b.bind(
        null,
        ze
      );
    }
  }, ip = {
    readContext: vt,
    use: wl,
    useCallback: Gd,
    useContext: vt,
    useEffect: Hd,
    useImperativeHandle: Pd,
    useInsertionEffect: Vd,
    useLayoutEffect: Qd,
    useMemo: Yd,
    useReducer: Tl,
    useRef: jd,
    useState: function() {
      return Tl(Mn);
    },
    useDebugValue: Fs,
    useDeferredValue: function(e, t) {
      var a = rt();
      return Xd(
        a,
        Fe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Tl(Mn)[0], t = rt().memoizedState;
      return [
        typeof e == "boolean" ? e : ur(e),
        t
      ];
    },
    useSyncExternalStore: wd,
    useId: Wd,
    useHostTransitionStatus: Ys,
    useFormState: Ud,
    useActionState: Ud,
    useOptimistic: function(e, t) {
      var a = rt();
      return zd(a, Fe, e, t);
    },
    useMemoCache: js,
    useCacheRefresh: $d
  }, t0 = {
    readContext: vt,
    use: wl,
    useCallback: Gd,
    useContext: vt,
    useEffect: Hd,
    useImperativeHandle: Pd,
    useInsertionEffect: Vd,
    useLayoutEffect: Qd,
    useMemo: Yd,
    useReducer: Hs,
    useRef: jd,
    useState: function() {
      return Hs(Mn);
    },
    useDebugValue: Fs,
    useDeferredValue: function(e, t) {
      var a = rt();
      return Fe === null ? Ps(a, e, t) : Xd(
        a,
        Fe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Hs(Mn)[0], t = rt().memoizedState;
      return [
        typeof e == "boolean" ? e : ur(e),
        t
      ];
    },
    useSyncExternalStore: wd,
    useId: Wd,
    useHostTransitionStatus: Ys,
    useFormState: qd,
    useActionState: qd,
    useOptimistic: function(e, t) {
      var a = rt();
      return Fe !== null ? zd(a, Fe, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: js,
    useCacheRefresh: $d
  }, fi = null, dr = 0;
  function zl(e) {
    var t = dr;
    return dr += 1, fi === null && (fi = []), hd(fi, e, t);
  }
  function pr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Rl(e, t) {
    throw t.$$typeof === v ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function rp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function lp(e) {
    function t(C, E) {
      if (e) {
        var D = C.deletions;
        D === null ? (C.deletions = [E], C.flags |= 16) : D.push(E);
      }
    }
    function a(C, E) {
      if (!e) return null;
      for (; E !== null; )
        t(C, E), E = E.sibling;
      return null;
    }
    function r(C) {
      for (var E = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? E.set(C.key, C) : E.set(C.index, C), C = C.sibling;
      return E;
    }
    function s(C, E) {
      return C = kn(C, E), C.index = 0, C.sibling = null, C;
    }
    function f(C, E, D) {
      return C.index = D, e ? (D = C.alternate, D !== null ? (D = D.index, D < E ? (C.flags |= 67108866, E) : D) : (C.flags |= 67108866, E)) : (C.flags |= 1048576, E);
    }
    function y(C) {
      return e && C.alternate === null && (C.flags |= 67108866), C;
    }
    function S(C, E, D, Q) {
      return E === null || E.tag !== 6 ? (E = hs(D, C.mode, Q), E.return = C, E) : (E = s(E, D), E.return = C, E);
    }
    function T(C, E, D, Q) {
      var ue = D.type;
      return ue === k ? H(
        C,
        E,
        D.props.children,
        Q,
        D.key
      ) : E !== null && (E.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === Y && rp(ue) === E.type) ? (E = s(E, D.props), pr(E, D), E.return = C, E) : (E = dl(
        D.type,
        D.key,
        D.props,
        null,
        C.mode,
        Q
      ), pr(E, D), E.return = C, E);
    }
    function R(C, E, D, Q) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== D.containerInfo || E.stateNode.implementation !== D.implementation ? (E = gs(D, C.mode, Q), E.return = C, E) : (E = s(E, D.children || []), E.return = C, E);
    }
    function H(C, E, D, Q, ue) {
      return E === null || E.tag !== 7 ? (E = Sa(
        D,
        C.mode,
        Q,
        ue
      ), E.return = C, E) : (E = s(E, D), E.return = C, E);
    }
    function F(C, E, D) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = hs(
          "" + E,
          C.mode,
          D
        ), E.return = C, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case w:
            return D = dl(
              E.type,
              E.key,
              E.props,
              null,
              C.mode,
              D
            ), pr(D, E), D.return = C, D;
          case x:
            return E = gs(
              E,
              C.mode,
              D
            ), E.return = C, E;
          case Y:
            var Q = E._init;
            return E = Q(E._payload), F(C, E, D);
        }
        if (ie(E) || te(E))
          return E = Sa(
            E,
            C.mode,
            D,
            null
          ), E.return = C, E;
        if (typeof E.then == "function")
          return F(C, zl(E), D);
        if (E.$$typeof === j)
          return F(
            C,
            gl(C, E),
            D
          );
        Rl(C, E);
      }
      return null;
    }
    function M(C, E, D, Q) {
      var ue = E !== null ? E.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return ue !== null ? null : S(C, E, "" + D, Q);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case w:
            return D.key === ue ? T(C, E, D, Q) : null;
          case x:
            return D.key === ue ? R(C, E, D, Q) : null;
          case Y:
            return ue = D._init, D = ue(D._payload), M(C, E, D, Q);
        }
        if (ie(D) || te(D))
          return ue !== null ? null : H(C, E, D, Q, null);
        if (typeof D.then == "function")
          return M(
            C,
            E,
            zl(D),
            Q
          );
        if (D.$$typeof === j)
          return M(
            C,
            E,
            gl(C, D),
            Q
          );
        Rl(C, D);
      }
      return null;
    }
    function O(C, E, D, Q, ue) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return C = C.get(D) || null, S(E, C, "" + Q, ue);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case w:
            return C = C.get(
              Q.key === null ? D : Q.key
            ) || null, T(E, C, Q, ue);
          case x:
            return C = C.get(
              Q.key === null ? D : Q.key
            ) || null, R(E, C, Q, ue);
          case Y:
            var Ne = Q._init;
            return Q = Ne(Q._payload), O(
              C,
              E,
              D,
              Q,
              ue
            );
        }
        if (ie(Q) || te(Q))
          return C = C.get(D) || null, H(E, C, Q, ue, null);
        if (typeof Q.then == "function")
          return O(
            C,
            E,
            D,
            zl(Q),
            ue
          );
        if (Q.$$typeof === j)
          return O(
            C,
            E,
            D,
            gl(E, Q),
            ue
          );
        Rl(E, Q);
      }
      return null;
    }
    function ve(C, E, D, Q) {
      for (var ue = null, Ne = null, me = E, ye = E = 0, mt = null; me !== null && ye < D.length; ye++) {
        me.index > ye ? (mt = me, me = null) : mt = me.sibling;
        var qe = M(
          C,
          me,
          D[ye],
          Q
        );
        if (qe === null) {
          me === null && (me = mt);
          break;
        }
        e && me && qe.alternate === null && t(C, me), E = f(qe, E, ye), Ne === null ? ue = qe : Ne.sibling = qe, Ne = qe, me = mt;
      }
      if (ye === D.length)
        return a(C, me), je && Aa(C, ye), ue;
      if (me === null) {
        for (; ye < D.length; ye++)
          me = F(C, D[ye], Q), me !== null && (E = f(
            me,
            E,
            ye
          ), Ne === null ? ue = me : Ne.sibling = me, Ne = me);
        return je && Aa(C, ye), ue;
      }
      for (me = r(me); ye < D.length; ye++)
        mt = O(
          me,
          C,
          ye,
          D[ye],
          Q
        ), mt !== null && (e && mt.alternate !== null && me.delete(
          mt.key === null ? ye : mt.key
        ), E = f(
          mt,
          E,
          ye
        ), Ne === null ? ue = mt : Ne.sibling = mt, Ne = mt);
      return e && me.forEach(function(ca) {
        return t(C, ca);
      }), je && Aa(C, ye), ue;
    }
    function ge(C, E, D, Q) {
      if (D == null) throw Error(o(151));
      for (var ue = null, Ne = null, me = E, ye = E = 0, mt = null, qe = D.next(); me !== null && !qe.done; ye++, qe = D.next()) {
        me.index > ye ? (mt = me, me = null) : mt = me.sibling;
        var ca = M(C, me, qe.value, Q);
        if (ca === null) {
          me === null && (me = mt);
          break;
        }
        e && me && ca.alternate === null && t(C, me), E = f(ca, E, ye), Ne === null ? ue = ca : Ne.sibling = ca, Ne = ca, me = mt;
      }
      if (qe.done)
        return a(C, me), je && Aa(C, ye), ue;
      if (me === null) {
        for (; !qe.done; ye++, qe = D.next())
          qe = F(C, qe.value, Q), qe !== null && (E = f(qe, E, ye), Ne === null ? ue = qe : Ne.sibling = qe, Ne = qe);
        return je && Aa(C, ye), ue;
      }
      for (me = r(me); !qe.done; ye++, qe = D.next())
        qe = O(me, C, ye, qe.value, Q), qe !== null && (e && qe.alternate !== null && me.delete(qe.key === null ? ye : qe.key), E = f(qe, E, ye), Ne === null ? ue = qe : Ne.sibling = qe, Ne = qe);
      return e && me.forEach(function(nv) {
        return t(C, nv);
      }), je && Aa(C, ye), ue;
    }
    function Ge(C, E, D, Q) {
      if (typeof D == "object" && D !== null && D.type === k && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case w:
            e: {
              for (var ue = D.key; E !== null; ) {
                if (E.key === ue) {
                  if (ue = D.type, ue === k) {
                    if (E.tag === 7) {
                      a(
                        C,
                        E.sibling
                      ), Q = s(
                        E,
                        D.props.children
                      ), Q.return = C, C = Q;
                      break e;
                    }
                  } else if (E.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === Y && rp(ue) === E.type) {
                    a(
                      C,
                      E.sibling
                    ), Q = s(E, D.props), pr(Q, D), Q.return = C, C = Q;
                    break e;
                  }
                  a(C, E);
                  break;
                } else t(C, E);
                E = E.sibling;
              }
              D.type === k ? (Q = Sa(
                D.props.children,
                C.mode,
                Q,
                D.key
              ), Q.return = C, C = Q) : (Q = dl(
                D.type,
                D.key,
                D.props,
                null,
                C.mode,
                Q
              ), pr(Q, D), Q.return = C, C = Q);
            }
            return y(C);
          case x:
            e: {
              for (ue = D.key; E !== null; ) {
                if (E.key === ue)
                  if (E.tag === 4 && E.stateNode.containerInfo === D.containerInfo && E.stateNode.implementation === D.implementation) {
                    a(
                      C,
                      E.sibling
                    ), Q = s(E, D.children || []), Q.return = C, C = Q;
                    break e;
                  } else {
                    a(C, E);
                    break;
                  }
                else t(C, E);
                E = E.sibling;
              }
              Q = gs(D, C.mode, Q), Q.return = C, C = Q;
            }
            return y(C);
          case Y:
            return ue = D._init, D = ue(D._payload), Ge(
              C,
              E,
              D,
              Q
            );
        }
        if (ie(D))
          return ve(
            C,
            E,
            D,
            Q
          );
        if (te(D)) {
          if (ue = te(D), typeof ue != "function") throw Error(o(150));
          return D = ue.call(D), ge(
            C,
            E,
            D,
            Q
          );
        }
        if (typeof D.then == "function")
          return Ge(
            C,
            E,
            zl(D),
            Q
          );
        if (D.$$typeof === j)
          return Ge(
            C,
            E,
            gl(C, D),
            Q
          );
        Rl(C, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, E !== null && E.tag === 6 ? (a(C, E.sibling), Q = s(E, D), Q.return = C, C = Q) : (a(C, E), Q = hs(D, C.mode, Q), Q.return = C, C = Q), y(C)) : a(C, E);
    }
    return function(C, E, D, Q) {
      try {
        dr = 0;
        var ue = Ge(
          C,
          E,
          D,
          Q
        );
        return fi = null, ue;
      } catch (me) {
        if (me === ar || me === bl) throw me;
        var Ne = Ht(29, me, null, C.mode);
        return Ne.lanes = Q, Ne.return = C, Ne;
      } finally {
      }
    };
  }
  var di = lp(!0), op = lp(!1), nn = V(null), hn = null;
  function Kn(e) {
    var t = e.alternate;
    A(st, st.current & 1), A(nn, e), hn === null && (t === null || oi.current !== null || t.memoizedState !== null) && (hn = e);
  }
  function sp(e) {
    if (e.tag === 22) {
      if (A(st, st.current), A(nn, e), hn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (hn = e);
      }
    } else Zn();
  }
  function Zn() {
    A(st, st.current), A(nn, nn.current);
  }
  function On(e) {
    ee(nn), hn === e && (hn = null), ee(st);
  }
  var st = V(0);
  function Nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || qu(a)))
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
  function Ks(e, t, a, r) {
    t = e.memoizedState, a = a(r, t), a = a == null ? t : h({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Zs = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var r = Pt(), s = Gn(r);
      s.payload = t, a != null && (s.callback = a), t = Yn(e, s, r), t !== null && (Gt(t, e, r), rr(t, e, r));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var r = Pt(), s = Gn(r);
      s.tag = 1, s.payload = t, a != null && (s.callback = a), t = Yn(e, s, r), t !== null && (Gt(t, e, r), rr(t, e, r));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Pt(), r = Gn(a);
      r.tag = 2, t != null && (r.callback = t), t = Yn(e, r, a), t !== null && (Gt(t, e, a), rr(t, e, a));
    }
  };
  function up(e, t, a, r, s, f, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, f, y) : t.prototype && t.prototype.isPureReactComponent ? !Ki(a, r) || !Ki(s, f) : !0;
  }
  function cp(e, t, a, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, r), t.state !== e && Zs.enqueueReplaceState(t, t.state, null);
  }
  function za(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var r in t)
        r !== "ref" && (a[r] = t[r]);
    }
    if (e = e.defaultProps) {
      a === t && (a = h({}, a));
      for (var s in e)
        a[s] === void 0 && (a[s] = e[s]);
    }
    return a;
  }
  var Ml = typeof reportError == "function" ? reportError : function(e) {
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
  function fp(e) {
    Ml(e);
  }
  function dp(e) {
    console.error(e);
  }
  function pp(e) {
    Ml(e);
  }
  function Ol(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function mp(e, t, a) {
    try {
      var r = e.onCaughtError;
      r(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Js(e, t, a) {
    return a = Gn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Ol(e, t);
    }, a;
  }
  function hp(e) {
    return e = Gn(e), e.tag = 3, e;
  }
  function gp(e, t, a, r) {
    var s = a.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = r.value;
      e.payload = function() {
        return s(f);
      }, e.callback = function() {
        mp(t, a, r);
      };
    }
    var y = a.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
      mp(t, a, r), typeof s != "function" && (na === null ? na = /* @__PURE__ */ new Set([this]) : na.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function n0(e, t, a, r, s) {
    if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (t = a.alternate, t !== null && er(
        t,
        a,
        s,
        !0
      ), a = nn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return hn === null ? xu() : a.alternate === null && tt === 0 && (tt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = s, r === Cs ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), wu(e, r, s)), !1;
          case 22:
            return a.flags |= 65536, r === Cs ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : a.add(r)), wu(e, r, s)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return wu(e, r, s), xu(), !1;
    }
    if (je)
      return t = nn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, r !== vs && (e = Error(o(422), { cause: r }), $i(Wt(e, a)))) : (r !== vs && (t = Error(o(423), {
        cause: r
      }), $i(
        Wt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, r = Wt(r, a), s = Js(
        e.stateNode,
        r,
        s
      ), zs(e, s), tt !== 4 && (tt = 2)), !1;
    var f = Error(o(520), { cause: r });
    if (f = Wt(f, a), Sr === null ? Sr = [f] : Sr.push(f), tt !== 4 && (tt = 2), t === null) return !0;
    r = Wt(r, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = s & -s, a.lanes |= e, e = Js(a.stateNode, r, e), zs(a, e), !1;
        case 1:
          if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (na === null || !na.has(f))))
            return a.flags |= 65536, s &= -s, a.lanes |= s, s = hp(s), gp(
              s,
              e,
              a,
              r
            ), zs(a, s), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var yp = Error(o(461)), dt = !1;
  function ht(e, t, a, r) {
    t.child = e === null ? op(t, null, a, r) : di(
      t,
      e.child,
      a,
      r
    );
  }
  function bp(e, t, a, r, s) {
    a = a.render;
    var f = t.ref;
    if ("ref" in r) {
      var y = {};
      for (var S in r)
        S !== "ref" && (y[S] = r[S]);
    } else y = r;
    return Ca(t), r = _s(
      e,
      t,
      a,
      y,
      f,
      s
    ), S = Is(), e !== null && !dt ? (Us(e, t, s), _n(e, t, s)) : (je && S && ys(t), t.flags |= 1, ht(e, t, r, s), t.child);
  }
  function vp(e, t, a, r, s) {
    if (e === null) {
      var f = a.type;
      return typeof f == "function" && !ms(f) && f.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = f, Sp(
        e,
        t,
        f,
        r,
        s
      )) : (e = dl(
        a.type,
        null,
        r,
        t,
        t.mode,
        s
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !ru(e, s)) {
      var y = f.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ki, a(y, r) && e.ref === t.ref)
        return _n(e, t, s);
    }
    return t.flags |= 1, e = kn(f, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Sp(e, t, a, r, s) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Ki(f, r) && e.ref === t.ref)
        if (dt = !1, t.pendingProps = r = f, ru(e, s))
          (e.flags & 131072) !== 0 && (dt = !0);
        else
          return t.lanes = e.lanes, _n(e, t, s);
    }
    return Ws(
      e,
      t,
      a,
      r,
      s
    );
  }
  function xp(e, t, a) {
    var r = t.pendingProps, s = r.children, f = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (r = f !== null ? f.baseLanes | a : a, e !== null) {
          for (s = t.child = e.child, f = 0; s !== null; )
            f = f | s.lanes | s.childLanes, s = s.sibling;
          t.childLanes = f & ~r;
        } else t.childLanes = 0, t.child = null;
        return Ap(
          e,
          t,
          r,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && yl(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? Sd(t, f) : Ns(), sp(t);
      else
        return t.lanes = t.childLanes = 536870912, Ap(
          e,
          t,
          f !== null ? f.baseLanes | a : a,
          a
        );
    } else
      f !== null ? (yl(t, f.cachePool), Sd(t, f), Zn(), t.memoizedState = null) : (e !== null && yl(t, null), Ns(), Zn());
    return ht(e, t, s, a), t.child;
  }
  function Ap(e, t, a, r) {
    var s = Es();
    return s = s === null ? null : { parent: ot._currentValue, pool: s }, t.memoizedState = {
      baseLanes: a,
      cachePool: s
    }, e !== null && yl(t, null), Ns(), sp(t), e !== null && er(e, t, r, !0), null;
  }
  function _l(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Ws(e, t, a, r, s) {
    return Ca(t), a = _s(
      e,
      t,
      a,
      r,
      void 0,
      s
    ), r = Is(), e !== null && !dt ? (Us(e, t, s), _n(e, t, s)) : (je && r && ys(t), t.flags |= 1, ht(e, t, a, s), t.child);
  }
  function wp(e, t, a, r, s, f) {
    return Ca(t), t.updateQueue = null, a = Ad(
      t,
      r,
      a,
      s
    ), xd(e), r = Is(), e !== null && !dt ? (Us(e, t, f), _n(e, t, f)) : (je && r && ys(t), t.flags |= 1, ht(e, t, a, f), t.child);
  }
  function Tp(e, t, a, r, s) {
    if (Ca(t), t.stateNode === null) {
      var f = ni, y = a.contextType;
      typeof y == "object" && y !== null && (f = vt(y)), f = new a(r, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Zs, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = r, f.state = t.memoizedState, f.refs = {}, ks(t), y = a.contextType, f.context = typeof y == "object" && y !== null ? vt(y) : ni, f.state = t.memoizedState, y = a.getDerivedStateFromProps, typeof y == "function" && (Ks(
        t,
        a,
        y,
        r
      ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (y = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), y !== f.state && Zs.enqueueReplaceState(f, f.state, null), or(t, r, f, s), lr(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      f = t.stateNode;
      var S = t.memoizedProps, T = za(a, S);
      f.props = T;
      var R = f.context, H = a.contextType;
      y = ni, typeof H == "object" && H !== null && (y = vt(H));
      var F = a.getDerivedStateFromProps;
      H = typeof F == "function" || typeof f.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, H || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S || R !== y) && cp(
        t,
        f,
        r,
        y
      ), Pn = !1;
      var M = t.memoizedState;
      f.state = M, or(t, r, f, s), lr(), R = t.memoizedState, S || M !== R || Pn ? (typeof F == "function" && (Ks(
        t,
        a,
        F,
        r
      ), R = t.memoizedState), (T = Pn || up(
        t,
        a,
        T,
        r,
        M,
        R,
        y
      )) ? (H || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = R), f.props = r, f.state = R, f.context = y, r = T) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      f = t.stateNode, Ds(e, t), y = t.memoizedProps, H = za(a, y), f.props = H, F = t.pendingProps, M = f.context, R = a.contextType, T = ni, typeof R == "object" && R !== null && (T = vt(R)), S = a.getDerivedStateFromProps, (R = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== F || M !== T) && cp(
        t,
        f,
        r,
        T
      ), Pn = !1, M = t.memoizedState, f.state = M, or(t, r, f, s), lr();
      var O = t.memoizedState;
      y !== F || M !== O || Pn || e !== null && e.dependencies !== null && hl(e.dependencies) ? (typeof S == "function" && (Ks(
        t,
        a,
        S,
        r
      ), O = t.memoizedState), (H = Pn || up(
        t,
        a,
        H,
        r,
        M,
        O,
        T
      ) || e !== null && e.dependencies !== null && hl(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, O, T), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        r,
        O,
        T
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = O), f.props = r, f.state = O, f.context = T, r = H) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return f = r, _l(e, t), r = (t.flags & 128) !== 0, f || r ? (f = t.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && r ? (t.child = di(
      t,
      e.child,
      null,
      s
    ), t.child = di(
      t,
      null,
      a,
      s
    )) : ht(e, t, a, s), t.memoizedState = f.state, e = t.child) : e = _n(
      e,
      t,
      s
    ), e;
  }
  function Ep(e, t, a, r) {
    return Wi(), t.flags |= 256, ht(e, t, a, r), t.child;
  }
  var $s = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function eu(e) {
    return { baseLanes: e, cachePool: dd() };
  }
  function tu(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= an), e;
  }
  function Cp(e, t, a) {
    var r = t.pendingProps, s = !1, f = (t.flags & 128) !== 0, y;
    if ((y = f) || (y = e !== null && e.memoizedState === null ? !1 : (st.current & 2) !== 0), y && (s = !0, t.flags &= -129), y = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (je) {
        if (s ? Kn(t) : Zn(), je) {
          var S = et, T;
          if (T = S) {
            e: {
              for (T = S, S = mn; T.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break e;
                }
                if (T = cn(
                  T.nextSibling
                ), T === null) {
                  S = null;
                  break e;
                }
              }
              S = T;
            }
            S !== null ? (t.memoizedState = {
              dehydrated: S,
              treeContext: xa !== null ? { id: Dn, overflow: zn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, T = Ht(
              18,
              null,
              null,
              0
            ), T.stateNode = S, T.return = t, t.child = T, Tt = t, et = null, T = !0) : T = !1;
          }
          T || Ta(t);
        }
        if (S = t.memoizedState, S !== null && (S = S.dehydrated, S !== null))
          return qu(S) ? t.lanes = 32 : t.lanes = 536870912, null;
        On(t);
      }
      return S = r.children, r = r.fallback, s ? (Zn(), s = t.mode, S = Il(
        { mode: "hidden", children: S },
        s
      ), r = Sa(
        r,
        s,
        a,
        null
      ), S.return = t, r.return = t, S.sibling = r, t.child = S, s = t.child, s.memoizedState = eu(a), s.childLanes = tu(
        e,
        y,
        a
      ), t.memoizedState = $s, r) : (Kn(t), nu(t, S));
    }
    if (T = e.memoizedState, T !== null && (S = T.dehydrated, S !== null)) {
      if (f)
        t.flags & 256 ? (Kn(t), t.flags &= -257, t = au(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Zn(), t.child = e.child, t.flags |= 128, t = null) : (Zn(), s = r.fallback, S = t.mode, r = Il(
          { mode: "visible", children: r.children },
          S
        ), s = Sa(
          s,
          S,
          a,
          null
        ), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, di(
          t,
          e.child,
          null,
          a
        ), r = t.child, r.memoizedState = eu(a), r.childLanes = tu(
          e,
          y,
          a
        ), t.memoizedState = $s, t = s);
      else if (Kn(t), qu(S)) {
        if (y = S.nextSibling && S.nextSibling.dataset, y) var R = y.dgst;
        y = R, r = Error(o(419)), r.stack = "", r.digest = y, $i({ value: r, source: null, stack: null }), t = au(
          e,
          t,
          a
        );
      } else if (dt || er(e, t, a, !1), y = (a & e.childLanes) !== 0, dt || y) {
        if (y = Ke, y !== null && (r = a & -a, r = (r & 42) !== 0 ? 1 : jo(r), r = (r & (y.suspendedLanes | a)) !== 0 ? 0 : r, r !== 0 && r !== T.retryLane))
          throw T.retryLane = r, ti(e, r), Gt(y, e, r), yp;
        S.data === "$?" || xu(), t = au(
          e,
          t,
          a
        );
      } else
        S.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, et = cn(
          S.nextSibling
        ), Tt = t, je = !0, wa = null, mn = !1, e !== null && (en[tn++] = Dn, en[tn++] = zn, en[tn++] = xa, Dn = e.id, zn = e.overflow, xa = t), t = nu(
          t,
          r.children
        ), t.flags |= 4096);
      return t;
    }
    return s ? (Zn(), s = r.fallback, S = t.mode, T = e.child, R = T.sibling, r = kn(T, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = T.subtreeFlags & 65011712, R !== null ? s = kn(R, s) : (s = Sa(
      s,
      S,
      a,
      null
    ), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, S = e.child.memoizedState, S === null ? S = eu(a) : (T = S.cachePool, T !== null ? (R = ot._currentValue, T = T.parent !== R ? { parent: R, pool: R } : T) : T = dd(), S = {
      baseLanes: S.baseLanes | a,
      cachePool: T
    }), s.memoizedState = S, s.childLanes = tu(
      e,
      y,
      a
    ), t.memoizedState = $s, r) : (Kn(t), a = e.child, e = a.sibling, a = kn(a, {
      mode: "visible",
      children: r.children
    }), a.return = t, a.sibling = null, e !== null && (y = t.deletions, y === null ? (t.deletions = [e], t.flags |= 16) : y.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function nu(e, t) {
    return t = Il(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Il(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function au(e, t, a) {
    return di(t, e.child, null, a), e = nu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function kp(e, t, a) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), xs(e.return, t, a);
  }
  function iu(e, t, a, r, s) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: a,
      tailMode: s
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = r, f.tail = a, f.tailMode = s);
  }
  function Dp(e, t, a) {
    var r = t.pendingProps, s = r.revealOrder, f = r.tail;
    if (ht(e, t, r.children, a), r = st.current, (r & 2) !== 0)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && kp(e, a, t);
          else if (e.tag === 19)
            kp(e, a, t);
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
    switch (A(st, r), s) {
      case "forwards":
        for (a = t.child, s = null; a !== null; )
          e = a.alternate, e !== null && Nl(e) === null && (s = a), a = a.sibling;
        a = s, a === null ? (s = t.child, t.child = null) : (s = a.sibling, a.sibling = null), iu(
          t,
          !1,
          s,
          a,
          f
        );
        break;
      case "backwards":
        for (a = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Nl(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = a, a = s, s = e;
        }
        iu(
          t,
          !0,
          a,
          null,
          f
        );
        break;
      case "together":
        iu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function _n(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), ta |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (er(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, a = kn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = kn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ru(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && hl(e)));
  }
  function a0(e, t, a) {
    switch (t.tag) {
      case 3:
        $(t, t.stateNode.containerInfo), Fn(t, ot, e.memoizedState.cache), Wi();
        break;
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        $(t, t.stateNode.containerInfo);
        break;
      case 10:
        Fn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (Kn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Cp(e, t, a) : (Kn(t), e = _n(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Kn(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (r = (a & t.childLanes) !== 0, r || (er(
          e,
          t,
          a,
          !1
        ), r = (a & t.childLanes) !== 0), s) {
          if (r)
            return Dp(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), A(st, st.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, xp(e, t, a);
      case 24:
        Fn(t, ot, e.memoizedState.cache);
    }
    return _n(e, t, a);
  }
  function zp(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        dt = !0;
      else {
        if (!ru(e, a) && (t.flags & 128) === 0)
          return dt = !1, a0(
            e,
            t,
            a
          );
        dt = (e.flags & 131072) !== 0;
      }
    else
      dt = !1, je && (t.flags & 1048576) !== 0 && rd(t, ml, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var r = t.elementType, s = r._init;
          if (r = s(r._payload), t.type = r, typeof r == "function")
            ms(r) ? (e = za(r, e), t.tag = 1, t = Tp(
              null,
              t,
              r,
              e,
              a
            )) : (t.tag = 0, t = Ws(
              null,
              t,
              r,
              e,
              a
            ));
          else {
            if (r != null) {
              if (s = r.$$typeof, s === se) {
                t.tag = 11, t = bp(
                  null,
                  t,
                  r,
                  e,
                  a
                );
                break e;
              } else if (s === le) {
                t.tag = 14, t = vp(
                  null,
                  t,
                  r,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = ae(r) || r, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Ws(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return r = t.type, s = za(
          r,
          t.pendingProps
        ), Tp(
          e,
          t,
          r,
          s,
          a
        );
      case 3:
        e: {
          if ($(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          r = t.pendingProps;
          var f = t.memoizedState;
          s = f.element, Ds(e, t), or(t, r, null, a);
          var y = t.memoizedState;
          if (r = y.cache, Fn(t, ot, r), r !== f.cache && As(
            t,
            [ot],
            a,
            !0
          ), lr(), r = y.element, f.isDehydrated)
            if (f = {
              element: r,
              isDehydrated: !1,
              cache: y.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = Ep(
                e,
                t,
                r,
                a
              );
              break e;
            } else if (r !== s) {
              s = Wt(
                Error(o(424)),
                t
              ), $i(s), t = Ep(
                e,
                t,
                r,
                a
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
              for (et = cn(e.firstChild), Tt = t, je = !0, wa = null, mn = !0, a = op(
                t,
                null,
                r,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Wi(), r === s) {
              t = _n(
                e,
                t,
                a
              );
              break e;
            }
            ht(
              e,
              t,
              r,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return _l(e, t), e === null ? (a = Om(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : je || (a = t.type, e = t.pendingProps, r = Kl(
          oe.current
        ).createElement(a), r[bt] = t, r[kt] = e, yt(r, a, e), ft(r), t.stateNode = r) : t.memoizedState = Om(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Te(t), e === null && je && (r = t.stateNode = Rm(
          t.type,
          t.pendingProps,
          oe.current
        ), Tt = t, mn = !0, s = et, ra(t.type) ? (ju = s, et = cn(
          r.firstChild
        )) : et = s), ht(
          e,
          t,
          t.pendingProps.children,
          a
        ), _l(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && je && ((s = r = et) && (r = N0(
          r,
          t.type,
          t.pendingProps,
          mn
        ), r !== null ? (t.stateNode = r, Tt = t, et = cn(
          r.firstChild
        ), mn = !1, s = !0) : s = !1), s || Ta(t)), Te(t), s = t.type, f = t.pendingProps, y = e !== null ? e.memoizedProps : null, r = f.children, Iu(s, f) ? r = null : y !== null && Iu(s, y) && (t.flags |= 32), t.memoizedState !== null && (s = _s(
          e,
          t,
          Kb,
          null,
          null,
          a
        ), zr._currentValue = s), _l(e, t), ht(e, t, r, a), t.child;
      case 6:
        return e === null && je && ((e = a = et) && (a = M0(
          a,
          t.pendingProps,
          mn
        ), a !== null ? (t.stateNode = a, Tt = t, et = null, e = !0) : e = !1), e || Ta(t)), null;
      case 13:
        return Cp(e, t, a);
      case 4:
        return $(
          t,
          t.stateNode.containerInfo
        ), r = t.pendingProps, e === null ? t.child = di(
          t,
          null,
          r,
          a
        ) : ht(
          e,
          t,
          r,
          a
        ), t.child;
      case 11:
        return bp(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return ht(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return ht(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return ht(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return r = t.pendingProps, Fn(t, t.type, r.value), ht(
          e,
          t,
          r.children,
          a
        ), t.child;
      case 9:
        return s = t.type._context, r = t.pendingProps.children, Ca(t), s = vt(s), r = r(s), t.flags |= 1, ht(e, t, r, a), t.child;
      case 14:
        return vp(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Sp(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Dp(e, t, a);
      case 31:
        return r = t.pendingProps, a = t.mode, r = {
          mode: r.mode,
          children: r.children
        }, e === null ? (a = Il(
          r,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = kn(e.child, r), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return xp(e, t, a);
      case 24:
        return Ca(t), r = vt(ot), e === null ? (s = Es(), s === null && (s = Ke, f = ws(), s.pooledCache = f, f.refCount++, f !== null && (s.pooledCacheLanes |= a), s = f), t.memoizedState = {
          parent: r,
          cache: s
        }, ks(t), Fn(t, ot, s)) : ((e.lanes & a) !== 0 && (Ds(e, t), or(t, null, null, a), lr()), s = e.memoizedState, f = t.memoizedState, s.parent !== r ? (s = { parent: r, cache: r }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), Fn(t, ot, r)) : (r = f.cache, Fn(t, ot, r), r !== s.cache && As(
          t,
          [ot],
          a,
          !0
        ))), ht(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function In(e) {
    e.flags |= 4;
  }
  function Rp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !qm(t)) {
      if (t = nn.current, t !== null && ((Ue & 4194048) === Ue ? hn !== null : (Ue & 62914560) !== Ue && (Ue & 536870912) === 0 || t !== hn))
        throw ir = Cs, pd;
      e.flags |= 8192;
    }
  }
  function Ul(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? sf() : 536870912, e.lanes |= t, gi |= t);
  }
  function mr(e, t) {
    if (!je)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var r = null; a !== null; )
            a.alternate !== null && (r = a), a = a.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, r = 0;
    if (t)
      for (var s = e.child; s !== null; )
        a |= s.lanes | s.childLanes, r |= s.subtreeFlags & 65011712, r |= s.flags & 65011712, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        a |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = a, t;
  }
  function i0(e, t, a) {
    var r = t.pendingProps;
    switch (bs(t), t.tag) {
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
        return $e(t), null;
      case 1:
        return $e(t), null;
      case 3:
        return a = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Nn(ot), Ie(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ji(t) ? In(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, sd())), $e(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (In(t), a !== null ? ($e(t), Rp(t, a)) : ($e(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (In(t), $e(t), Rp(t, a)) : ($e(t), t.flags &= -16777217) : (e.memoizedProps !== r && In(t), $e(t), t.flags &= -16777217), null;
      case 27:
        Le(t), a = oe.current;
        var s = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== r && In(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(o(166));
            return $e(t), null;
          }
          e = ne.current, Ji(t) ? ld(t) : (e = Rm(s, r, a), t.stateNode = e, In(t));
        }
        return $e(t), null;
      case 5:
        if (Le(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && In(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(o(166));
            return $e(t), null;
          }
          if (e = ne.current, Ji(t))
            ld(t);
          else {
            switch (s = Kl(
              oe.current
            ), e) {
              case 1:
                e = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                    break;
                  default:
                    e = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
                }
            }
            e[bt] = t, e[kt] = r;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                e.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            t.stateNode = e;
            e: switch (yt(e, a, r), a) {
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
            e && In(t);
          }
        }
        return $e(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== r && In(t);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = oe.current, Ji(t)) {
            if (e = t.stateNode, a = t.memoizedProps, r = null, s = Tt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  r = s.memoizedProps;
              }
            e[bt] = t, e = !!(e.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || wm(e.nodeValue, a)), e || Ta(t);
          } else
            e = Kl(e).createTextNode(
              r
            ), e[bt] = t, t.stateNode = e;
        }
        return $e(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = Ji(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
              s[bt] = t;
            } else
              Wi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            $e(t), s = !1;
          } else
            s = sd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (On(t), t) : (On(t), null);
        }
        if (On(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = r !== null, e = e !== null && e.memoizedState !== null, a) {
          r = t.child, s = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (s = r.alternate.memoizedState.cachePool.pool);
          var f = null;
          r.memoizedState !== null && r.memoizedState.cachePool !== null && (f = r.memoizedState.cachePool.pool), f !== s && (r.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Ul(t, t.updateQueue), $e(t), null;
      case 4:
        return Ie(), e === null && Ru(t.stateNode.containerInfo), $e(t), null;
      case 10:
        return Nn(t.type), $e(t), null;
      case 19:
        if (ee(st), s = t.memoizedState, s === null) return $e(t), null;
        if (r = (t.flags & 128) !== 0, f = s.rendering, f === null)
          if (r) mr(s, !1);
          else {
            if (tt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = Nl(e), f !== null) {
                  for (t.flags |= 128, mr(s, !1), e = f.updateQueue, t.updateQueue = e, Ul(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    id(a, e), a = a.sibling;
                  return A(
                    st,
                    st.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            s.tail !== null && wt() > jl && (t.flags |= 128, r = !0, mr(s, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = Nl(f), e !== null) {
              if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, Ul(t, e), mr(s, !0), s.tail === null && s.tailMode === "hidden" && !f.alternate && !je)
                return $e(t), null;
            } else
              2 * wt() - s.renderingStartTime > jl && a !== 536870912 && (t.flags |= 128, r = !0, mr(s, !1), t.lanes = 4194304);
          s.isBackwards ? (f.sibling = t.child, t.child = f) : (e = s.last, e !== null ? e.sibling = f : t.child = f, s.last = f);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = wt(), t.sibling = null, e = st.current, A(st, r ? e & 1 | 2 : e & 1), t) : ($e(t), null);
      case 22:
      case 23:
        return On(t), Ms(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), a = t.updateQueue, a !== null && Ul(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== a && (t.flags |= 2048), e !== null && ee(ka), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Nn(ot), $e(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function r0(e, t) {
    switch (bs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Nn(ot), Ie(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Le(t), null;
      case 13:
        if (On(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Wi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ee(st), null;
      case 4:
        return Ie(), null;
      case 10:
        return Nn(t.type), null;
      case 22:
      case 23:
        return On(t), Ms(), e !== null && ee(ka), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Nn(ot), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Np(e, t) {
    switch (bs(t), t.tag) {
      case 3:
        Nn(ot), Ie();
        break;
      case 26:
      case 27:
      case 5:
        Le(t);
        break;
      case 4:
        Ie();
        break;
      case 13:
        On(t);
        break;
      case 19:
        ee(st);
        break;
      case 10:
        Nn(t.type);
        break;
      case 22:
      case 23:
        On(t), Ms(), e !== null && ee(ka);
        break;
      case 24:
        Nn(ot);
    }
  }
  function hr(e, t) {
    try {
      var a = t.updateQueue, r = a !== null ? a.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        a = s;
        do {
          if ((a.tag & e) === e) {
            r = void 0;
            var f = a.create, y = a.inst;
            r = f(), y.destroy = r;
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (S) {
      Ye(t, t.return, S);
    }
  }
  function Jn(e, t, a) {
    try {
      var r = t.updateQueue, s = r !== null ? r.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        r = f;
        do {
          if ((r.tag & e) === e) {
            var y = r.inst, S = y.destroy;
            if (S !== void 0) {
              y.destroy = void 0, s = t;
              var T = a, R = S;
              try {
                R();
              } catch (H) {
                Ye(
                  s,
                  T,
                  H
                );
              }
            }
          }
          r = r.next;
        } while (r !== f);
      }
    } catch (H) {
      Ye(t, t.return, H);
    }
  }
  function Mp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        vd(t, a);
      } catch (r) {
        Ye(e, e.return, r);
      }
    }
  }
  function Op(e, t, a) {
    a.props = za(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (r) {
      Ye(e, t, r);
    }
  }
  function gr(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
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
        typeof a == "function" ? e.refCleanup = a(r) : a.current = r;
      }
    } catch (s) {
      Ye(e, t, s);
    }
  }
  function gn(e, t) {
    var a = e.ref, r = e.refCleanup;
    if (a !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (s) {
          Ye(e, t, s);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (s) {
          Ye(e, t, s);
        }
      else a.current = null;
  }
  function _p(e) {
    var t = e.type, a = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && r.focus();
          break e;
        case "img":
          a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet);
      }
    } catch (s) {
      Ye(e, e.return, s);
    }
  }
  function lu(e, t, a) {
    try {
      var r = e.stateNode;
      C0(r, e.type, a, t), r[kt] = t;
    } catch (s) {
      Ye(e, e.return, s);
    }
  }
  function Ip(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ra(e.type) || e.tag === 4;
  }
  function ou(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ip(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ra(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function su(e, t, a) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Xl));
    else if (r !== 4 && (r === 27 && ra(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (su(e, t, a), e = e.sibling; e !== null; )
        su(e, t, a), e = e.sibling;
  }
  function Ll(e, t, a) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (r !== 4 && (r === 27 && ra(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Ll(e, t, a), e = e.sibling; e !== null; )
        Ll(e, t, a), e = e.sibling;
  }
  function Up(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var r = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      yt(t, r, a), t[bt] = e, t[kt] = a;
    } catch (f) {
      Ye(e, e.return, f);
    }
  }
  var Un = !1, at = !1, uu = !1, Lp = typeof WeakSet == "function" ? WeakSet : Set, pt = null;
  function l0(e, t) {
    if (e = e.containerInfo, Ou = to, e = Xf(e), os(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var r = a.getSelection && a.getSelection();
          if (r && r.rangeCount !== 0) {
            a = r.anchorNode;
            var s = r.anchorOffset, f = r.focusNode;
            r = r.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break e;
            }
            var y = 0, S = -1, T = -1, R = 0, H = 0, F = e, M = null;
            t: for (; ; ) {
              for (var O; F !== a || s !== 0 && F.nodeType !== 3 || (S = y + s), F !== f || r !== 0 && F.nodeType !== 3 || (T = y + r), F.nodeType === 3 && (y += F.nodeValue.length), (O = F.firstChild) !== null; )
                M = F, F = O;
              for (; ; ) {
                if (F === e) break t;
                if (M === a && ++R === s && (S = y), M === f && ++H === r && (T = y), (O = F.nextSibling) !== null) break;
                F = M, M = F.parentNode;
              }
              F = O;
            }
            a = S === -1 || T === -1 ? null : { start: S, end: T };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (_u = { focusedElem: e, selectionRange: a }, to = !1, pt = t; pt !== null; )
      if (t = pt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, pt = e;
      else
        for (; pt !== null; ) {
          switch (t = pt, f = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                e = void 0, a = t, s = f.memoizedProps, f = f.memoizedState, r = a.stateNode;
                try {
                  var ve = za(
                    a.type,
                    s,
                    a.elementType === a.type
                  );
                  e = r.getSnapshotBeforeUpdate(
                    ve,
                    f
                  ), r.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ge) {
                  Ye(
                    a,
                    a.return,
                    ge
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Lu(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lu(e);
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
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, pt = e;
            break;
          }
          pt = t.return;
        }
  }
  function qp(e, t, a) {
    var r = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Wn(e, a), r & 4 && hr(5, a);
        break;
      case 1:
        if (Wn(e, a), r & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (y) {
              Ye(a, a.return, y);
            }
          else {
            var s = za(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                s,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              Ye(
                a,
                a.return,
                y
              );
            }
          }
        r & 64 && Mp(a), r & 512 && gr(a, a.return);
        break;
      case 3:
        if (Wn(e, a), r & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            vd(e, t);
          } catch (y) {
            Ye(a, a.return, y);
          }
        }
        break;
      case 27:
        t === null && r & 4 && Up(a);
      case 26:
      case 5:
        Wn(e, a), t === null && r & 4 && _p(a), r & 512 && gr(a, a.return);
        break;
      case 12:
        Wn(e, a);
        break;
      case 13:
        Wn(e, a), r & 4 && Hp(e, a), r & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = h0.bind(
          null,
          a
        ), O0(e, a))));
        break;
      case 22:
        if (r = a.memoizedState !== null || Un, !r) {
          t = t !== null && t.memoizedState !== null || at, s = Un;
          var f = at;
          Un = r, (at = t) && !f ? $n(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Wn(e, a), Un = s, at = f;
        }
        break;
      case 30:
        break;
      default:
        Wn(e, a);
    }
  }
  function jp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, jp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Vo(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var We = null, Rt = !1;
  function Ln(e, t, a) {
    for (a = a.child; a !== null; )
      Bp(e, t, a), a = a.sibling;
  }
  function Bp(e, t, a) {
    if (X && typeof X.onCommitFiberUnmount == "function")
      try {
        X.onCommitFiberUnmount(B, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        at || gn(a, t), Ln(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        at || gn(a, t);
        var r = We, s = Rt;
        ra(a.type) && (We = a.stateNode, Rt = !1), Ln(
          e,
          t,
          a
        ), Er(a.stateNode), We = r, Rt = s;
        break;
      case 5:
        at || gn(a, t);
      case 6:
        if (r = We, s = Rt, We = null, Ln(
          e,
          t,
          a
        ), We = r, Rt = s, We !== null)
          if (Rt)
            try {
              (We.nodeType === 9 ? We.body : We.nodeName === "HTML" ? We.ownerDocument.body : We).removeChild(a.stateNode);
            } catch (f) {
              Ye(
                a,
                t,
                f
              );
            }
          else
            try {
              We.removeChild(a.stateNode);
            } catch (f) {
              Ye(
                a,
                t,
                f
              );
            }
        break;
      case 18:
        We !== null && (Rt ? (e = We, Dm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Or(e)) : Dm(We, a.stateNode));
        break;
      case 4:
        r = We, s = Rt, We = a.stateNode.containerInfo, Rt = !0, Ln(
          e,
          t,
          a
        ), We = r, Rt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        at || Jn(2, a, t), at || Jn(4, a, t), Ln(
          e,
          t,
          a
        );
        break;
      case 1:
        at || (gn(a, t), r = a.stateNode, typeof r.componentWillUnmount == "function" && Op(
          a,
          t,
          r
        )), Ln(
          e,
          t,
          a
        );
        break;
      case 21:
        Ln(
          e,
          t,
          a
        );
        break;
      case 22:
        at = (r = at) || a.memoizedState !== null, Ln(
          e,
          t,
          a
        ), at = r;
        break;
      default:
        Ln(
          e,
          t,
          a
        );
    }
  }
  function Hp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Or(e);
      } catch (a) {
        Ye(t, t.return, a);
      }
  }
  function o0(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Lp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Lp()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function cu(e, t) {
    var a = o0(e);
    t.forEach(function(r) {
      var s = g0.bind(null, e, r);
      a.has(r) || (a.add(r), r.then(s, s));
    });
  }
  function Vt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var s = a[r], f = e, y = t, S = y;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (ra(S.type)) {
                We = S.stateNode, Rt = !1;
                break e;
              }
              break;
            case 5:
              We = S.stateNode, Rt = !1;
              break e;
            case 3:
            case 4:
              We = S.stateNode.containerInfo, Rt = !0;
              break e;
          }
          S = S.return;
        }
        if (We === null) throw Error(o(160));
        Bp(f, y, s), We = null, Rt = !1, f = s.alternate, f !== null && (f.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Vp(t, e), t = t.sibling;
  }
  var un = null;
  function Vp(e, t) {
    var a = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Vt(t, e), Qt(e), r & 4 && (Jn(3, e, e.return), hr(3, e), Jn(5, e, e.return));
        break;
      case 1:
        Vt(t, e), Qt(e), r & 512 && (at || a === null || gn(a, a.return)), r & 64 && Un && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
        break;
      case 26:
        var s = un;
        if (Vt(t, e), Qt(e), r & 512 && (at || a === null || gn(a, a.return)), r & 4) {
          var f = a !== null ? a.memoizedState : null;
          if (r = e.memoizedState, a === null)
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  r = e.type, a = e.memoizedProps, s = s.ownerDocument || s;
                  t: switch (r) {
                    case "title":
                      f = s.getElementsByTagName("title")[0], (!f || f[Bi] || f[bt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = s.createElement(r), s.head.insertBefore(
                        f,
                        s.querySelector("head > title")
                      )), yt(f, r, a), f[bt] = e, ft(f), r = f;
                      break e;
                    case "link":
                      var y = Um(
                        "link",
                        "href",
                        s
                      ).get(r + (a.href || ""));
                      if (y) {
                        for (var S = 0; S < y.length; S++)
                          if (f = y[S], f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            y.splice(S, 1);
                            break t;
                          }
                      }
                      f = s.createElement(r), yt(f, r, a), s.head.appendChild(f);
                      break;
                    case "meta":
                      if (y = Um(
                        "meta",
                        "content",
                        s
                      ).get(r + (a.content || ""))) {
                        for (S = 0; S < y.length; S++)
                          if (f = y[S], f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            y.splice(S, 1);
                            break t;
                          }
                      }
                      f = s.createElement(r), yt(f, r, a), s.head.appendChild(f);
                      break;
                    default:
                      throw Error(o(468, r));
                  }
                  f[bt] = e, ft(f), r = f;
                }
                e.stateNode = r;
              } else
                Lm(
                  s,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Im(
                s,
                r,
                e.memoizedProps
              );
          else
            f !== r ? (f === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : f.count--, r === null ? Lm(
              s,
              e.type,
              e.stateNode
            ) : Im(
              s,
              r,
              e.memoizedProps
            )) : r === null && e.stateNode !== null && lu(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Vt(t, e), Qt(e), r & 512 && (at || a === null || gn(a, a.return)), a !== null && r & 4 && lu(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Vt(t, e), Qt(e), r & 512 && (at || a === null || gn(a, a.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            Xa(s, "");
          } catch (O) {
            Ye(e, e.return, O);
          }
        }
        r & 4 && e.stateNode != null && (s = e.memoizedProps, lu(
          e,
          s,
          a !== null ? a.memoizedProps : s
        )), r & 1024 && (uu = !0);
        break;
      case 6:
        if (Vt(t, e), Qt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          r = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = r;
          } catch (O) {
            Ye(e, e.return, O);
          }
        }
        break;
      case 3:
        if (Wl = null, s = un, un = Zl(t.containerInfo), Vt(t, e), un = s, Qt(e), r & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Or(t.containerInfo);
          } catch (O) {
            Ye(e, e.return, O);
          }
        uu && (uu = !1, Qp(e));
        break;
      case 4:
        r = un, un = Zl(
          e.stateNode.containerInfo
        ), Vt(t, e), Qt(e), un = r;
        break;
      case 12:
        Vt(t, e), Qt(e);
        break;
      case 13:
        Vt(t, e), Qt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (gu = wt()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, cu(e, r)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var T = a !== null && a.memoizedState !== null, R = Un, H = at;
        if (Un = R || s, at = H || T, Vt(t, e), at = H, Un = R, Qt(e), r & 8192)
          e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (a === null || T || Un || at || Ra(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                T = a = t;
                try {
                  if (f = T.stateNode, s)
                    y = f.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    S = T.stateNode;
                    var F = T.memoizedProps.style, M = F != null && F.hasOwnProperty("display") ? F.display : null;
                    S.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (O) {
                  Ye(T, T.return, O);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                T = t;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (O) {
                  Ye(T, T.return, O);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        r & 4 && (r = e.updateQueue, r !== null && (a = r.retryQueue, a !== null && (r.retryQueue = null, cu(e, a))));
        break;
      case 19:
        Vt(t, e), Qt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, cu(e, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Vt(t, e), Qt(e);
    }
  }
  function Qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, r = e.return; r !== null; ) {
          if (Ip(r)) {
            a = r;
            break;
          }
          r = r.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var s = a.stateNode, f = ou(e);
            Ll(e, f, s);
            break;
          case 5:
            var y = a.stateNode;
            a.flags & 32 && (Xa(y, ""), a.flags &= -33);
            var S = ou(e);
            Ll(e, S, y);
            break;
          case 3:
          case 4:
            var T = a.stateNode.containerInfo, R = ou(e);
            su(
              e,
              R,
              T
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (H) {
        Ye(e, e.return, H);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Qp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Wn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        qp(e, t.alternate, t), t = t.sibling;
  }
  function Ra(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jn(4, t, t.return), Ra(t);
          break;
        case 1:
          gn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Op(
            t,
            t.return,
            a
          ), Ra(t);
          break;
        case 27:
          Er(t.stateNode);
        case 26:
        case 5:
          gn(t, t.return), Ra(t);
          break;
        case 22:
          t.memoizedState === null && Ra(t);
          break;
        case 30:
          Ra(t);
          break;
        default:
          Ra(t);
      }
      e = e.sibling;
    }
  }
  function $n(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate, s = e, f = t, y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          $n(
            s,
            f,
            a
          ), hr(4, f);
          break;
        case 1:
          if ($n(
            s,
            f,
            a
          ), r = f, s = r.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (R) {
              Ye(r, r.return, R);
            }
          if (r = f, s = r.updateQueue, s !== null) {
            var S = r.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  bd(T[s], S);
            } catch (R) {
              Ye(r, r.return, R);
            }
          }
          a && y & 64 && Mp(f), gr(f, f.return);
          break;
        case 27:
          Up(f);
        case 26:
        case 5:
          $n(
            s,
            f,
            a
          ), a && r === null && y & 4 && _p(f), gr(f, f.return);
          break;
        case 12:
          $n(
            s,
            f,
            a
          );
          break;
        case 13:
          $n(
            s,
            f,
            a
          ), a && y & 4 && Hp(s, f);
          break;
        case 22:
          f.memoizedState === null && $n(
            s,
            f,
            a
          ), gr(f, f.return);
          break;
        case 30:
          break;
        default:
          $n(
            s,
            f,
            a
          );
      }
      t = t.sibling;
    }
  }
  function fu(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && tr(a));
  }
  function du(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && tr(e));
  }
  function yn(e, t, a, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Fp(
          e,
          t,
          a,
          r
        ), t = t.sibling;
  }
  function Fp(e, t, a, r) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        yn(
          e,
          t,
          a,
          r
        ), s & 2048 && hr(9, t);
        break;
      case 1:
        yn(
          e,
          t,
          a,
          r
        );
        break;
      case 3:
        yn(
          e,
          t,
          a,
          r
        ), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && tr(e)));
        break;
      case 12:
        if (s & 2048) {
          yn(
            e,
            t,
            a,
            r
          ), e = t.stateNode;
          try {
            var f = t.memoizedProps, y = f.id, S = f.onPostCommit;
            typeof S == "function" && S(
              y,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Ye(t, t.return, T);
          }
        } else
          yn(
            e,
            t,
            a,
            r
          );
        break;
      case 13:
        yn(
          e,
          t,
          a,
          r
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, y = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? yn(
          e,
          t,
          a,
          r
        ) : yr(e, t) : f._visibility & 2 ? yn(
          e,
          t,
          a,
          r
        ) : (f._visibility |= 2, pi(
          e,
          t,
          a,
          r,
          (t.subtreeFlags & 10256) !== 0
        )), s & 2048 && fu(y, t);
        break;
      case 24:
        yn(
          e,
          t,
          a,
          r
        ), s & 2048 && du(t.alternate, t);
        break;
      default:
        yn(
          e,
          t,
          a,
          r
        );
    }
  }
  function pi(e, t, a, r, s) {
    for (s = s && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e, y = t, S = a, T = r, R = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          pi(
            f,
            y,
            S,
            T,
            s
          ), hr(8, y);
          break;
        case 23:
          break;
        case 22:
          var H = y.stateNode;
          y.memoizedState !== null ? H._visibility & 2 ? pi(
            f,
            y,
            S,
            T,
            s
          ) : yr(
            f,
            y
          ) : (H._visibility |= 2, pi(
            f,
            y,
            S,
            T,
            s
          )), s && R & 2048 && fu(
            y.alternate,
            y
          );
          break;
        case 24:
          pi(
            f,
            y,
            S,
            T,
            s
          ), s && R & 2048 && du(y.alternate, y);
          break;
        default:
          pi(
            f,
            y,
            S,
            T,
            s
          );
      }
      t = t.sibling;
    }
  }
  function yr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, r = t, s = r.flags;
        switch (r.tag) {
          case 22:
            yr(a, r), s & 2048 && fu(
              r.alternate,
              r
            );
            break;
          case 24:
            yr(a, r), s & 2048 && du(r.alternate, r);
            break;
          default:
            yr(a, r);
        }
        t = t.sibling;
      }
  }
  var br = 8192;
  function mi(e) {
    if (e.subtreeFlags & br)
      for (e = e.child; e !== null; )
        Pp(e), e = e.sibling;
  }
  function Pp(e) {
    switch (e.tag) {
      case 26:
        mi(e), e.flags & br && e.memoizedState !== null && G0(
          un,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        mi(e);
        break;
      case 3:
      case 4:
        var t = un;
        un = Zl(e.stateNode.containerInfo), mi(e), un = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = br, br = 16777216, mi(e), br = t) : mi(e));
        break;
      default:
        mi(e);
    }
  }
  function Gp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function vr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          pt = r, Xp(
            r,
            e
          );
        }
      Gp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Yp(e), e = e.sibling;
  }
  function Yp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        vr(e), e.flags & 2048 && Jn(9, e, e.return);
        break;
      case 3:
        vr(e);
        break;
      case 12:
        vr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ql(e)) : vr(e);
        break;
      default:
        vr(e);
    }
  }
  function ql(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          pt = r, Xp(
            r,
            e
          );
        }
      Gp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, t, t.return), ql(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, ql(t));
          break;
        default:
          ql(t);
      }
      e = e.sibling;
    }
  }
  function Xp(e, t) {
    for (; pt !== null; ) {
      var a = pt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var r = a.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          tr(a.memoizedState.cache);
      }
      if (r = a.child, r !== null) r.return = a, pt = r;
      else
        e: for (a = e; pt !== null; ) {
          r = pt;
          var s = r.sibling, f = r.return;
          if (jp(r), r === a) {
            pt = null;
            break e;
          }
          if (s !== null) {
            s.return = f, pt = s;
            break e;
          }
          pt = f;
        }
    }
  }
  var s0 = {
    getCacheForType: function(e) {
      var t = vt(ot), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, u0 = typeof WeakMap == "function" ? WeakMap : Map, Ve = 0, Ke = null, Me = null, Ue = 0, Qe = 0, Ft = null, ea = !1, hi = !1, pu = !1, qn = 0, tt = 0, ta = 0, Na = 0, mu = 0, an = 0, gi = 0, Sr = null, Nt = null, hu = !1, gu = 0, jl = 1 / 0, Bl = null, na = null, gt = 0, aa = null, yi = null, bi = 0, yu = 0, bu = null, Kp = null, xr = 0, vu = null;
  function Pt() {
    if ((Ve & 2) !== 0 && Ue !== 0)
      return Ue & -Ue;
    if (N.T !== null) {
      var e = ri;
      return e !== 0 ? e : Cu();
    }
    return ff();
  }
  function Zp() {
    an === 0 && (an = (Ue & 536870912) === 0 || je ? of() : 536870912);
    var e = nn.current;
    return e !== null && (e.flags |= 32), an;
  }
  function Gt(e, t, a) {
    (e === Ke && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null) && (vi(e, 0), ia(
      e,
      Ue,
      an,
      !1
    )), ji(e, a), ((Ve & 2) === 0 || e !== Ke) && (e === Ke && ((Ve & 2) === 0 && (Na |= a), tt === 4 && ia(
      e,
      Ue,
      an,
      !1
    )), bn(e));
  }
  function Jp(e, t, a) {
    if ((Ve & 6) !== 0) throw Error(o(327));
    var r = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Kt(e, t), s = r ? d0(e, t) : Au(e, t, !0), f = r;
    do {
      if (s === 0) {
        hi && !r && ia(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, f && !c0(a)) {
          s = Au(e, t, !1), f = !1;
          continue;
        }
        if (s === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f)
            var y = 0;
          else
            y = e.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            t = y;
            e: {
              var S = e;
              s = Sr;
              var T = S.current.memoizedState.isDehydrated;
              if (T && (vi(S, y).flags |= 256), y = Au(
                S,
                y,
                !1
              ), y !== 2) {
                if (pu && !T) {
                  S.errorRecoveryDisabledLanes |= f, Na |= f, s = 4;
                  break e;
                }
                f = Nt, Nt = s, f !== null && (Nt === null ? Nt = f : Nt.push.apply(
                  Nt,
                  f
                ));
              }
              s = y;
            }
            if (f = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          vi(e, 0), ia(e, t, 0, !0);
          break;
        }
        e: {
          switch (r = e, f = s, f) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ia(
                r,
                t,
                an,
                !ea
              );
              break e;
            case 2:
              Nt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (s = gu + 300 - wt(), 10 < s)) {
            if (ia(
              r,
              t,
              an,
              !ea
            ), ct(r, 0, !0) !== 0) break e;
            r.timeoutHandle = Cm(
              Wp.bind(
                null,
                r,
                a,
                Nt,
                Bl,
                hu,
                t,
                an,
                Na,
                gi,
                ea,
                f,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          Wp(
            r,
            a,
            Nt,
            Bl,
            hu,
            t,
            an,
            Na,
            gi,
            ea,
            f,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    bn(e);
  }
  function Wp(e, t, a, r, s, f, y, S, T, R, H, F, M, O) {
    if (e.timeoutHandle = -1, F = t.subtreeFlags, (F & 8192 || (F & 16785408) === 16785408) && (Dr = { stylesheets: null, count: 0, unsuspend: P0 }, Pp(t), F = Y0(), F !== null)) {
      e.cancelPendingCommit = F(
        rm.bind(
          null,
          e,
          t,
          f,
          a,
          r,
          s,
          y,
          S,
          T,
          H,
          1,
          M,
          O
        )
      ), ia(e, f, y, !R);
      return;
    }
    rm(
      e,
      t,
      f,
      a,
      r,
      s,
      y,
      S,
      T
    );
  }
  function c0(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var r = 0; r < a.length; r++) {
          var s = a[r], f = s.getSnapshot;
          s = s.value;
          try {
            if (!Bt(f(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
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
  function ia(e, t, a, r) {
    t &= ~mu, t &= ~Na, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var f = 31 - be(s), y = 1 << f;
      r[f] = -1, s &= ~y;
    }
    a !== 0 && uf(e, a, t);
  }
  function Hl() {
    return (Ve & 6) === 0 ? (Ar(0), !1) : !0;
  }
  function Su() {
    if (Me !== null) {
      if (Qe === 0)
        var e = Me.return;
      else
        e = Me, Rn = Ea = null, Ls(e), fi = null, dr = 0, e = Me;
      for (; e !== null; )
        Np(e.alternate, e), e = e.return;
      Me = null;
    }
  }
  function vi(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, D0(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Su(), Ke = e, Me = a = kn(e.current, null), Ue = t, Qe = 0, Ft = null, ea = !1, hi = Kt(e, t), pu = !1, gi = an = mu = Na = ta = tt = 0, Nt = Sr = null, hu = !1, (t & 8) !== 0 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var s = 31 - be(r), f = 1 << s;
        t |= e[s], r &= ~f;
      }
    return qn = t, ul(), a;
  }
  function $p(e, t) {
    ze = null, N.H = Dl, t === ar || t === bl ? (t = gd(), Qe = 3) : t === pd ? (t = gd(), Qe = 4) : Qe = t === yp ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ft = t, Me === null && (tt = 1, Ol(
      e,
      Wt(t, e.current)
    ));
  }
  function em() {
    var e = N.H;
    return N.H = Dl, e === null ? Dl : e;
  }
  function tm() {
    var e = N.A;
    return N.A = s0, e;
  }
  function xu() {
    tt = 4, ea || (Ue & 4194048) !== Ue && nn.current !== null || (hi = !0), (ta & 134217727) === 0 && (Na & 134217727) === 0 || Ke === null || ia(
      Ke,
      Ue,
      an,
      !1
    );
  }
  function Au(e, t, a) {
    var r = Ve;
    Ve |= 2;
    var s = em(), f = tm();
    (Ke !== e || Ue !== t) && (Bl = null, vi(e, t)), t = !1;
    var y = tt;
    e: do
      try {
        if (Qe !== 0 && Me !== null) {
          var S = Me, T = Ft;
          switch (Qe) {
            case 8:
              Su(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              nn.current === null && (t = !0);
              var R = Qe;
              if (Qe = 0, Ft = null, Si(e, S, T, R), a && hi) {
                y = 0;
                break e;
              }
              break;
            default:
              R = Qe, Qe = 0, Ft = null, Si(e, S, T, R);
          }
        }
        f0(), y = tt;
        break;
      } catch (H) {
        $p(e, H);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Rn = Ea = null, Ve = r, N.H = s, N.A = f, Me === null && (Ke = null, Ue = 0, ul()), y;
  }
  function f0() {
    for (; Me !== null; ) nm(Me);
  }
  function d0(e, t) {
    var a = Ve;
    Ve |= 2;
    var r = em(), s = tm();
    Ke !== e || Ue !== t ? (Bl = null, jl = wt() + 500, vi(e, t)) : hi = Kt(
      e,
      t
    );
    e: do
      try {
        if (Qe !== 0 && Me !== null) {
          t = Me;
          var f = Ft;
          t: switch (Qe) {
            case 1:
              Qe = 0, Ft = null, Si(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (md(f)) {
                Qe = 0, Ft = null, am(t);
                break;
              }
              t = function() {
                Qe !== 2 && Qe !== 9 || Ke !== e || (Qe = 7), bn(e);
              }, f.then(t, t);
              break e;
            case 3:
              Qe = 7;
              break e;
            case 4:
              Qe = 5;
              break e;
            case 7:
              md(f) ? (Qe = 0, Ft = null, am(t)) : (Qe = 0, Ft = null, Si(e, t, f, 7));
              break;
            case 5:
              var y = null;
              switch (Me.tag) {
                case 26:
                  y = Me.memoizedState;
                case 5:
                case 27:
                  var S = Me;
                  if (!y || qm(y)) {
                    Qe = 0, Ft = null;
                    var T = S.sibling;
                    if (T !== null) Me = T;
                    else {
                      var R = S.return;
                      R !== null ? (Me = R, Vl(R)) : Me = null;
                    }
                    break t;
                  }
              }
              Qe = 0, Ft = null, Si(e, t, f, 5);
              break;
            case 6:
              Qe = 0, Ft = null, Si(e, t, f, 6);
              break;
            case 8:
              Su(), tt = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        p0();
        break;
      } catch (H) {
        $p(e, H);
      }
    while (!0);
    return Rn = Ea = null, N.H = r, N.A = s, Ve = a, Me !== null ? 0 : (Ke = null, Ue = 0, ul(), tt);
  }
  function p0() {
    for (; Me !== null && !wn(); )
      nm(Me);
  }
  function nm(e) {
    var t = zp(e.alternate, e, qn);
    e.memoizedProps = e.pendingProps, t === null ? Vl(e) : Me = t;
  }
  function am(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = wp(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ue
        );
        break;
      case 11:
        t = wp(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ue
        );
        break;
      case 5:
        Ls(t);
      default:
        Np(a, t), t = Me = id(t, qn), t = zp(a, t, qn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Vl(e) : Me = t;
  }
  function Si(e, t, a, r) {
    Rn = Ea = null, Ls(t), fi = null, dr = 0;
    var s = t.return;
    try {
      if (n0(
        e,
        s,
        t,
        a,
        Ue
      )) {
        tt = 1, Ol(
          e,
          Wt(a, e.current)
        ), Me = null;
        return;
      }
    } catch (f) {
      if (s !== null) throw Me = s, f;
      tt = 1, Ol(
        e,
        Wt(a, e.current)
      ), Me = null;
      return;
    }
    t.flags & 32768 ? (je || r === 1 ? e = !0 : hi || (Ue & 536870912) !== 0 ? e = !1 : (ea = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = nn.current, r !== null && r.tag === 13 && (r.flags |= 16384))), im(t, e)) : Vl(t);
  }
  function Vl(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        im(
          t,
          ea
        );
        return;
      }
      e = t.return;
      var a = i0(
        t.alternate,
        t,
        qn
      );
      if (a !== null) {
        Me = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    tt === 0 && (tt = 5);
  }
  function im(e, t) {
    do {
      var a = r0(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Me = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Me = e;
        return;
      }
      Me = e = a;
    } while (e !== null);
    tt = 6, Me = null;
  }
  function rm(e, t, a, r, s, f, y, S, T) {
    e.cancelPendingCommit = null;
    do
      Ql();
    while (gt !== 0);
    if ((Ve & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (f = t.lanes | t.childLanes, f |= ds, Py(
        e,
        a,
        f,
        y,
        S,
        T
      ), e === Ke && (Me = Ke = null, Ue = 0), yi = t, aa = e, bi = a, yu = f, bu = s, Kp = r, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, y0(Ba, function() {
        return cm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
        r = N.T, N.T = null, s = G.p, G.p = 2, y = Ve, Ve |= 4;
        try {
          l0(e, t, a);
        } finally {
          Ve = y, G.p = s, N.T = r;
        }
      }
      gt = 1, lm(), om(), sm();
    }
  }
  function lm() {
    if (gt === 1) {
      gt = 0;
      var e = aa, t = yi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = N.T, N.T = null;
        var r = G.p;
        G.p = 2;
        var s = Ve;
        Ve |= 4;
        try {
          Vp(t, e);
          var f = _u, y = Xf(e.containerInfo), S = f.focusedElem, T = f.selectionRange;
          if (y !== S && S && S.ownerDocument && Yf(
            S.ownerDocument.documentElement,
            S
          )) {
            if (T !== null && os(S)) {
              var R = T.start, H = T.end;
              if (H === void 0 && (H = R), "selectionStart" in S)
                S.selectionStart = R, S.selectionEnd = Math.min(
                  H,
                  S.value.length
                );
              else {
                var F = S.ownerDocument || document, M = F && F.defaultView || window;
                if (M.getSelection) {
                  var O = M.getSelection(), ve = S.textContent.length, ge = Math.min(T.start, ve), Ge = T.end === void 0 ? ge : Math.min(T.end, ve);
                  !O.extend && ge > Ge && (y = Ge, Ge = ge, ge = y);
                  var C = Gf(
                    S,
                    ge
                  ), E = Gf(
                    S,
                    Ge
                  );
                  if (C && E && (O.rangeCount !== 1 || O.anchorNode !== C.node || O.anchorOffset !== C.offset || O.focusNode !== E.node || O.focusOffset !== E.offset)) {
                    var D = F.createRange();
                    D.setStart(C.node, C.offset), O.removeAllRanges(), ge > Ge ? (O.addRange(D), O.extend(E.node, E.offset)) : (D.setEnd(E.node, E.offset), O.addRange(D));
                  }
                }
              }
            }
            for (F = [], O = S; O = O.parentNode; )
              O.nodeType === 1 && F.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < F.length; S++) {
              var Q = F[S];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          to = !!Ou, _u = Ou = null;
        } finally {
          Ve = s, G.p = r, N.T = a;
        }
      }
      e.current = t, gt = 2;
    }
  }
  function om() {
    if (gt === 2) {
      gt = 0;
      var e = aa, t = yi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = N.T, N.T = null;
        var r = G.p;
        G.p = 2;
        var s = Ve;
        Ve |= 4;
        try {
          qp(e, t.alternate, t);
        } finally {
          Ve = s, G.p = r, N.T = a;
        }
      }
      gt = 3;
    }
  }
  function sm() {
    if (gt === 4 || gt === 3) {
      gt = 0, ha();
      var e = aa, t = yi, a = bi, r = Kp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? gt = 5 : (gt = 0, yi = aa = null, um(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (na = null), Bo(a), t = t.stateNode, X && typeof X.onCommitFiberRoot == "function")
        try {
          X.onCommitFiberRoot(
            B,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        t = N.T, s = G.p, G.p = 2, N.T = null;
        try {
          for (var f = e.onRecoverableError, y = 0; y < r.length; y++) {
            var S = r[y];
            f(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          N.T = t, G.p = s;
        }
      }
      (bi & 3) !== 0 && Ql(), bn(e), s = e.pendingLanes, (a & 4194090) !== 0 && (s & 42) !== 0 ? e === vu ? xr++ : (xr = 0, vu = e) : xr = 0, Ar(0);
    }
  }
  function um(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, tr(t)));
  }
  function Ql(e) {
    return lm(), om(), sm(), cm();
  }
  function cm() {
    if (gt !== 5) return !1;
    var e = aa, t = yu;
    yu = 0;
    var a = Bo(bi), r = N.T, s = G.p;
    try {
      G.p = 32 > a ? 32 : a, N.T = null, a = bu, bu = null;
      var f = aa, y = bi;
      if (gt = 0, yi = aa = null, bi = 0, (Ve & 6) !== 0) throw Error(o(331));
      var S = Ve;
      if (Ve |= 4, Yp(f.current), Fp(
        f,
        f.current,
        y,
        a
      ), Ve = S, Ar(0, !1), X && typeof X.onPostCommitFiberRoot == "function")
        try {
          X.onPostCommitFiberRoot(B, f);
        } catch {
        }
      return !0;
    } finally {
      G.p = s, N.T = r, um(e, t);
    }
  }
  function fm(e, t, a) {
    t = Wt(a, t), t = Js(e.stateNode, t, 2), e = Yn(e, t, 2), e !== null && (ji(e, 2), bn(e));
  }
  function Ye(e, t, a) {
    if (e.tag === 3)
      fm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          fm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (na === null || !na.has(r))) {
            e = Wt(a, e), a = hp(2), r = Yn(t, a, 2), r !== null && (gp(
              a,
              r,
              t,
              e
            ), ji(r, 2), bn(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function wu(e, t, a) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new u0();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else
      s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(a) || (pu = !0, s.add(a), e = m0.bind(null, e, t, a), t.then(e, e));
  }
  function m0(e, t, a) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ke === e && (Ue & a) === a && (tt === 4 || tt === 3 && (Ue & 62914560) === Ue && 300 > wt() - gu ? (Ve & 2) === 0 && vi(e, 0) : mu |= a, gi === Ue && (gi = 0)), bn(e);
  }
  function dm(e, t) {
    t === 0 && (t = sf()), e = ti(e, t), e !== null && (ji(e, t), bn(e));
  }
  function h0(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), dm(e, a);
  }
  function g0(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, s = e.memoizedState;
        s !== null && (a = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    r !== null && r.delete(t), dm(e, a);
  }
  function y0(e, t) {
    return Et(e, t);
  }
  var Fl = null, xi = null, Tu = !1, Pl = !1, Eu = !1, Ma = 0;
  function bn(e) {
    e !== xi && e.next === null && (xi === null ? Fl = xi = e : xi = xi.next = e), Pl = !0, Tu || (Tu = !0, v0());
  }
  function Ar(e, t) {
    if (!Eu && Pl) {
      Eu = !0;
      do
        for (var a = !1, r = Fl; r !== null; ) {
          if (e !== 0) {
            var s = r.pendingLanes;
            if (s === 0) var f = 0;
            else {
              var y = r.suspendedLanes, S = r.pingedLanes;
              f = (1 << 31 - be(42 | e) + 1) - 1, f &= s & ~(y & ~S), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (a = !0, gm(r, f));
          } else
            f = Ue, f = ct(
              r,
              r === Ke ? f : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (f & 3) === 0 || Kt(r, f) || (a = !0, gm(r, f));
          r = r.next;
        }
      while (a);
      Eu = !1;
    }
  }
  function b0() {
    pm();
  }
  function pm() {
    Pl = Tu = !1;
    var e = 0;
    Ma !== 0 && (k0() && (e = Ma), Ma = 0);
    for (var t = wt(), a = null, r = Fl; r !== null; ) {
      var s = r.next, f = mm(r, t);
      f === 0 ? (r.next = null, a === null ? Fl = s : a.next = s, s === null && (xi = a)) : (a = r, (e !== 0 || (f & 3) !== 0) && (Pl = !0)), r = s;
    }
    Ar(e);
  }
  function mm(e, t) {
    for (var a = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var y = 31 - be(f), S = 1 << y, T = s[y];
      T === -1 ? ((S & a) === 0 || (S & r) !== 0) && (s[y] = on(S, t)) : T <= t && (e.expiredLanes |= S), f &= ~S;
    }
    if (t = Ke, a = Ue, a = ct(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r = e.callbackNode, a === 0 || e === t && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null)
      return r !== null && r !== null && ma(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Kt(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (r !== null && ma(r), Bo(a)) {
        case 2:
        case 8:
          a = qi;
          break;
        case 32:
          a = Ba;
          break;
        case 268435456:
          a = Jr;
          break;
        default:
          a = Ba;
      }
      return r = hm.bind(null, e), a = Et(a, r), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return r !== null && r !== null && ma(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function hm(e, t) {
    if (gt !== 0 && gt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Ql() && e.callbackNode !== a)
      return null;
    var r = Ue;
    return r = ct(
      e,
      e === Ke ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r === 0 ? null : (Jp(e, r, t), mm(e, wt()), e.callbackNode != null && e.callbackNode === a ? hm.bind(null, e) : null);
  }
  function gm(e, t) {
    if (Ql()) return null;
    Jp(e, t, !0);
  }
  function v0() {
    z0(function() {
      (Ve & 6) !== 0 ? Et(
        Li,
        b0
      ) : pm();
    });
  }
  function Cu() {
    return Ma === 0 && (Ma = of()), Ma;
  }
  function ym(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : nl("" + e);
  }
  function bm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function S0(e, t, a, r, s) {
    if (t === "submit" && a && a.stateNode === s) {
      var f = ym(
        (s[kt] || null).action
      ), y = r.submitter;
      y && (t = (t = y[kt] || null) ? ym(t.formAction) : y.getAttribute("formAction"), t !== null && (f = t, y = null));
      var S = new ll(
        "action",
        "action",
        null,
        r,
        s
      );
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (r.defaultPrevented) {
                if (Ma !== 0) {
                  var T = y ? bm(s, y) : new FormData(s);
                  Gs(
                    a,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: f
                    },
                    null,
                    T
                  );
                }
              } else
                typeof f == "function" && (S.preventDefault(), T = y ? bm(s, y) : new FormData(s), Gs(
                  a,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: f
                  },
                  f,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var ku = 0; ku < fs.length; ku++) {
    var Du = fs[ku], x0 = Du.toLowerCase(), A0 = Du[0].toUpperCase() + Du.slice(1);
    sn(
      x0,
      "on" + A0
    );
  }
  sn(Jf, "onAnimationEnd"), sn(Wf, "onAnimationIteration"), sn($f, "onAnimationStart"), sn("dblclick", "onDoubleClick"), sn("focusin", "onFocus"), sn("focusout", "onBlur"), sn(jb, "onTransitionRun"), sn(Bb, "onTransitionStart"), sn(Hb, "onTransitionCancel"), sn(ed, "onTransitionEnd"), Pa("onMouseEnter", ["mouseout", "mouseover"]), Pa("onMouseLeave", ["mouseout", "mouseover"]), Pa("onPointerEnter", ["pointerout", "pointerover"]), Pa("onPointerLeave", ["pointerout", "pointerover"]), ga(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ga(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ga("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ga(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ga(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ga(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), w0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wr)
  );
  function vm(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var r = e[a], s = r.event;
      r = r.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = r.length - 1; 0 <= y; y--) {
            var S = r[y], T = S.instance, R = S.currentTarget;
            if (S = S.listener, T !== f && s.isPropagationStopped())
              break e;
            f = S, s.currentTarget = R;
            try {
              f(s);
            } catch (H) {
              Ml(H);
            }
            s.currentTarget = null, f = T;
          }
        else
          for (y = 0; y < r.length; y++) {
            if (S = r[y], T = S.instance, R = S.currentTarget, S = S.listener, T !== f && s.isPropagationStopped())
              break e;
            f = S, s.currentTarget = R;
            try {
              f(s);
            } catch (H) {
              Ml(H);
            }
            s.currentTarget = null, f = T;
          }
      }
    }
  }
  function Oe(e, t) {
    var a = t[Ho];
    a === void 0 && (a = t[Ho] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    a.has(r) || (Sm(t, e, 2, !1), a.add(r));
  }
  function zu(e, t, a) {
    var r = 0;
    t && (r |= 4), Sm(
      a,
      e,
      r,
      t
    );
  }
  var Gl = "_reactListening" + Math.random().toString(36).slice(2);
  function Ru(e) {
    if (!e[Gl]) {
      e[Gl] = !0, pf.forEach(function(a) {
        a !== "selectionchange" && (w0.has(a) || zu(a, !1, e), zu(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gl] || (t[Gl] = !0, zu("selectionchange", !1, t));
    }
  }
  function Sm(e, t, a, r) {
    switch (Fm(t)) {
      case 2:
        var s = Z0;
        break;
      case 8:
        s = J0;
        break;
      default:
        s = Fu;
    }
    a = s.bind(
      null,
      t,
      a,
      e
    ), s = void 0, !Wo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, a, !0) : s !== void 0 ? e.addEventListener(t, a, {
      passive: s
    }) : e.addEventListener(t, a, !1);
  }
  function Nu(e, t, a, r, s) {
    var f = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (; ; ) {
        if (r === null) return;
        var y = r.tag;
        if (y === 3 || y === 4) {
          var S = r.stateNode.containerInfo;
          if (S === s) break;
          if (y === 4)
            for (y = r.return; y !== null; ) {
              var T = y.tag;
              if ((T === 3 || T === 4) && y.stateNode.containerInfo === s)
                return;
              y = y.return;
            }
          for (; S !== null; ) {
            if (y = Va(S), y === null) return;
            if (T = y.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              r = f = y;
              continue e;
            }
            S = S.parentNode;
          }
        }
        r = r.return;
      }
    kf(function() {
      var R = f, H = Zo(a), F = [];
      e: {
        var M = td.get(e);
        if (M !== void 0) {
          var O = ll, ve = e;
          switch (e) {
            case "keypress":
              if (il(a) === 0) break e;
            case "keydown":
            case "keyup":
              O = yb;
              break;
            case "focusin":
              ve = "focus", O = ns;
              break;
            case "focusout":
              ve = "blur", O = ns;
              break;
            case "beforeblur":
            case "afterblur":
              O = ns;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = Rf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = rb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = Sb;
              break;
            case Jf:
            case Wf:
            case $f:
              O = sb;
              break;
            case ed:
              O = Ab;
              break;
            case "scroll":
            case "scrollend":
              O = ab;
              break;
            case "wheel":
              O = Tb;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = cb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Mf;
              break;
            case "toggle":
            case "beforetoggle":
              O = Cb;
          }
          var ge = (t & 4) !== 0, Ge = !ge && (e === "scroll" || e === "scrollend"), C = ge ? M !== null ? M + "Capture" : null : M;
          ge = [];
          for (var E = R, D; E !== null; ) {
            var Q = E;
            if (D = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || D === null || C === null || (Q = Vi(E, C), Q != null && ge.push(
              Tr(E, Q, D)
            )), Ge) break;
            E = E.return;
          }
          0 < ge.length && (M = new O(
            M,
            ve,
            null,
            a,
            H
          ), F.push({ event: M, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", O = e === "mouseout" || e === "pointerout", M && a !== Ko && (ve = a.relatedTarget || a.fromElement) && (Va(ve) || ve[Ha]))
            break e;
          if ((O || M) && (M = H.window === H ? H : (M = H.ownerDocument) ? M.defaultView || M.parentWindow : window, O ? (ve = a.relatedTarget || a.toElement, O = R, ve = ve ? Va(ve) : null, ve !== null && (Ge = c(ve), ge = ve.tag, ve !== Ge || ge !== 5 && ge !== 27 && ge !== 6) && (ve = null)) : (O = null, ve = R), O !== ve)) {
            if (ge = Rf, Q = "onMouseLeave", C = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (ge = Mf, Q = "onPointerLeave", C = "onPointerEnter", E = "pointer"), Ge = O == null ? M : Hi(O), D = ve == null ? M : Hi(ve), M = new ge(
              Q,
              E + "leave",
              O,
              a,
              H
            ), M.target = Ge, M.relatedTarget = D, Q = null, Va(H) === R && (ge = new ge(
              C,
              E + "enter",
              ve,
              a,
              H
            ), ge.target = D, ge.relatedTarget = Ge, Q = ge), Ge = Q, O && ve)
              t: {
                for (ge = O, C = ve, E = 0, D = ge; D; D = Ai(D))
                  E++;
                for (D = 0, Q = C; Q; Q = Ai(Q))
                  D++;
                for (; 0 < E - D; )
                  ge = Ai(ge), E--;
                for (; 0 < D - E; )
                  C = Ai(C), D--;
                for (; E--; ) {
                  if (ge === C || C !== null && ge === C.alternate)
                    break t;
                  ge = Ai(ge), C = Ai(C);
                }
                ge = null;
              }
            else ge = null;
            O !== null && xm(
              F,
              M,
              O,
              ge,
              !1
            ), ve !== null && Ge !== null && xm(
              F,
              Ge,
              ve,
              ge,
              !0
            );
          }
        }
        e: {
          if (M = R ? Hi(R) : window, O = M.nodeName && M.nodeName.toLowerCase(), O === "select" || O === "input" && M.type === "file")
            var ue = Bf;
          else if (qf(M))
            if (Hf)
              ue = Ub;
            else {
              ue = _b;
              var Ne = Ob;
            }
          else
            O = M.nodeName, !O || O.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? R && Xo(R.elementType) && (ue = Bf) : ue = Ib;
          if (ue && (ue = ue(e, R))) {
            jf(
              F,
              ue,
              a,
              H
            );
            break e;
          }
          Ne && Ne(e, M, R), e === "focusout" && R && M.type === "number" && R.memoizedProps.value != null && Yo(M, "number", M.value);
        }
        switch (Ne = R ? Hi(R) : window, e) {
          case "focusin":
            (qf(Ne) || Ne.contentEditable === "true") && (Wa = Ne, ss = R, Zi = null);
            break;
          case "focusout":
            Zi = ss = Wa = null;
            break;
          case "mousedown":
            us = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            us = !1, Kf(F, a, H);
            break;
          case "selectionchange":
            if (qb) break;
          case "keydown":
          case "keyup":
            Kf(F, a, H);
        }
        var me;
        if (is)
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
          Ja ? Uf(e, a) && (ye = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ye = "onCompositionStart");
        ye && (Of && a.locale !== "ko" && (Ja || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Ja && (me = Df()) : (Qn = H, $o = "value" in Qn ? Qn.value : Qn.textContent, Ja = !0)), Ne = Yl(R, ye), 0 < Ne.length && (ye = new Nf(
          ye,
          e,
          null,
          a,
          H
        ), F.push({ event: ye, listeners: Ne }), me ? ye.data = me : (me = Lf(a), me !== null && (ye.data = me)))), (me = Db ? zb(e, a) : Rb(e, a)) && (ye = Yl(R, "onBeforeInput"), 0 < ye.length && (Ne = new Nf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          H
        ), F.push({
          event: Ne,
          listeners: ye
        }), Ne.data = me)), S0(
          F,
          e,
          R,
          a,
          H
        );
      }
      vm(F, t);
    });
  }
  function Tr(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Yl(e, t) {
    for (var a = t + "Capture", r = []; e !== null; ) {
      var s = e, f = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || f === null || (s = Vi(e, a), s != null && r.unshift(
        Tr(e, s, f)
      ), s = Vi(e, t), s != null && r.push(
        Tr(e, s, f)
      )), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function Ai(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xm(e, t, a, r, s) {
    for (var f = t._reactName, y = []; a !== null && a !== r; ) {
      var S = a, T = S.alternate, R = S.stateNode;
      if (S = S.tag, T !== null && T === r) break;
      S !== 5 && S !== 26 && S !== 27 || R === null || (T = R, s ? (R = Vi(a, f), R != null && y.unshift(
        Tr(a, R, T)
      )) : s || (R = Vi(a, f), R != null && y.push(
        Tr(a, R, T)
      ))), a = a.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var T0 = /\r\n?/g, E0 = /\u0000|\uFFFD/g;
  function Am(e) {
    return (typeof e == "string" ? e : "" + e).replace(T0, `
`).replace(E0, "");
  }
  function wm(e, t) {
    return t = Am(t), Am(e) === t;
  }
  function Xl() {
  }
  function Pe(e, t, a, r, s, f) {
    switch (a) {
      case "children":
        typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Xa(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Xa(e, "" + r);
        break;
      case "className":
        $r(e, "class", r);
        break;
      case "tabIndex":
        $r(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $r(e, a, r);
        break;
      case "style":
        Ef(e, r, f);
        break;
      case "data":
        if (t !== "object") {
          $r(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(a);
          break;
        }
        r = nl("" + r), e.setAttribute(a, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (a === "formAction" ? (t !== "input" && Pe(e, t, "name", s.name, s, null), Pe(
            e,
            t,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Pe(
            e,
            t,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Pe(
            e,
            t,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Pe(e, t, "encType", s.encType, s, null), Pe(e, t, "method", s.method, s, null), Pe(e, t, "target", s.target, s, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(a);
          break;
        }
        r = nl("" + r), e.setAttribute(a, r);
        break;
      case "onClick":
        r != null && (e.onclick = Xl);
        break;
      case "onScroll":
        r != null && Oe("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Oe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(o(61));
          if (a = r.__html, a != null) {
            if (s.children != null) throw Error(o(60));
            e.innerHTML = a;
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
        a = nl("" + r), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "" + r) : e.removeAttribute(a);
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
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        r === !0 ? e.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, r) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(a, r) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(a) : e.setAttribute(a, r);
        break;
      case "popover":
        Oe("beforetoggle", e), Oe("toggle", e), Wr(e, "popover", r);
        break;
      case "xlinkActuate":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        Wr(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = tb.get(a) || a, Wr(e, a, r));
    }
  }
  function Mu(e, t, a, r, s, f) {
    switch (a) {
      case "style":
        Ef(e, r, f);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(o(61));
          if (a = r.__html, a != null) {
            if (s.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof r == "string" ? Xa(e, r) : (typeof r == "number" || typeof r == "bigint") && Xa(e, "" + r);
        break;
      case "onScroll":
        r != null && Oe("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Oe("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = Xl);
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
        if (!mf.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (s = a.endsWith("Capture"), t = a.slice(2, s ? a.length - 7 : void 0), f = e[kt] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, s), typeof r == "function")) {
              typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, r, s);
              break e;
            }
            a in e ? e[a] = r : r === !0 ? e.setAttribute(a, "") : Wr(e, a, r);
          }
    }
  }
  function yt(e, t, a) {
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
        Oe("error", e), Oe("load", e);
        var r = !1, s = !1, f;
        for (f in a)
          if (a.hasOwnProperty(f)) {
            var y = a[f];
            if (y != null)
              switch (f) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Pe(e, t, f, y, a, null);
              }
          }
        s && Pe(e, t, "srcSet", a.srcSet, a, null), r && Pe(e, t, "src", a.src, a, null);
        return;
      case "input":
        Oe("invalid", e);
        var S = f = y = s = null, T = null, R = null;
        for (r in a)
          if (a.hasOwnProperty(r)) {
            var H = a[r];
            if (H != null)
              switch (r) {
                case "name":
                  s = H;
                  break;
                case "type":
                  y = H;
                  break;
                case "checked":
                  T = H;
                  break;
                case "defaultChecked":
                  R = H;
                  break;
                case "value":
                  f = H;
                  break;
                case "defaultValue":
                  S = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Pe(e, t, r, H, a, null);
              }
          }
        xf(
          e,
          f,
          S,
          T,
          R,
          y,
          s,
          !1
        ), el(e);
        return;
      case "select":
        Oe("invalid", e), r = y = f = null;
        for (s in a)
          if (a.hasOwnProperty(s) && (S = a[s], S != null))
            switch (s) {
              case "value":
                f = S;
                break;
              case "defaultValue":
                y = S;
                break;
              case "multiple":
                r = S;
              default:
                Pe(e, t, s, S, a, null);
            }
        t = f, a = y, e.multiple = !!r, t != null ? Ya(e, !!r, t, !1) : a != null && Ya(e, !!r, a, !0);
        return;
      case "textarea":
        Oe("invalid", e), f = s = r = null;
        for (y in a)
          if (a.hasOwnProperty(y) && (S = a[y], S != null))
            switch (y) {
              case "value":
                r = S;
                break;
              case "defaultValue":
                s = S;
                break;
              case "children":
                f = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(91));
                break;
              default:
                Pe(e, t, y, S, a, null);
            }
        wf(e, r, s, f), el(e);
        return;
      case "option":
        for (T in a)
          if (a.hasOwnProperty(T) && (r = a[T], r != null))
            switch (T) {
              case "selected":
                e.selected = r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                Pe(e, t, T, r, a, null);
            }
        return;
      case "dialog":
        Oe("beforetoggle", e), Oe("toggle", e), Oe("cancel", e), Oe("close", e);
        break;
      case "iframe":
      case "object":
        Oe("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < wr.length; r++)
          Oe(wr[r], e);
        break;
      case "image":
        Oe("error", e), Oe("load", e);
        break;
      case "details":
        Oe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Oe("error", e), Oe("load", e);
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
        for (R in a)
          if (a.hasOwnProperty(R) && (r = a[R], r != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Pe(e, t, R, r, a, null);
            }
        return;
      default:
        if (Xo(t)) {
          for (H in a)
            a.hasOwnProperty(H) && (r = a[H], r !== void 0 && Mu(
              e,
              t,
              H,
              r,
              a,
              void 0
            ));
          return;
        }
    }
    for (S in a)
      a.hasOwnProperty(S) && (r = a[S], r != null && Pe(e, t, S, r, a, null));
  }
  function C0(e, t, a, r) {
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
        var s = null, f = null, y = null, S = null, T = null, R = null, H = null;
        for (O in a) {
          var F = a[O];
          if (a.hasOwnProperty(O) && F != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = F;
              default:
                r.hasOwnProperty(O) || Pe(e, t, O, null, r, F);
            }
        }
        for (var M in r) {
          var O = r[M];
          if (F = a[M], r.hasOwnProperty(M) && (O != null || F != null))
            switch (M) {
              case "type":
                f = O;
                break;
              case "name":
                s = O;
                break;
              case "checked":
                R = O;
                break;
              case "defaultChecked":
                H = O;
                break;
              case "value":
                y = O;
                break;
              case "defaultValue":
                S = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, t));
                break;
              default:
                O !== F && Pe(
                  e,
                  t,
                  M,
                  O,
                  r,
                  F
                );
            }
        }
        Go(
          e,
          y,
          S,
          T,
          R,
          H,
          f,
          s
        );
        return;
      case "select":
        O = y = S = M = null;
        for (f in a)
          if (T = a[f], a.hasOwnProperty(f) && T != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                O = T;
              default:
                r.hasOwnProperty(f) || Pe(
                  e,
                  t,
                  f,
                  null,
                  r,
                  T
                );
            }
        for (s in r)
          if (f = r[s], T = a[s], r.hasOwnProperty(s) && (f != null || T != null))
            switch (s) {
              case "value":
                M = f;
                break;
              case "defaultValue":
                S = f;
                break;
              case "multiple":
                y = f;
              default:
                f !== T && Pe(
                  e,
                  t,
                  s,
                  f,
                  r,
                  T
                );
            }
        t = S, a = y, r = O, M != null ? Ya(e, !!a, M, !1) : !!r != !!a && (t != null ? Ya(e, !!a, t, !0) : Ya(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        O = M = null;
        for (S in a)
          if (s = a[S], a.hasOwnProperty(S) && s != null && !r.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Pe(e, t, S, null, r, s);
            }
        for (y in r)
          if (s = r[y], f = a[y], r.hasOwnProperty(y) && (s != null || f != null))
            switch (y) {
              case "value":
                M = s;
                break;
              case "defaultValue":
                O = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== f && Pe(e, t, y, s, r, f);
            }
        Af(e, M, O);
        return;
      case "option":
        for (var ve in a)
          if (M = a[ve], a.hasOwnProperty(ve) && M != null && !r.hasOwnProperty(ve))
            switch (ve) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Pe(
                  e,
                  t,
                  ve,
                  null,
                  r,
                  M
                );
            }
        for (T in r)
          if (M = r[T], O = a[T], r.hasOwnProperty(T) && M !== O && (M != null || O != null))
            switch (T) {
              case "selected":
                e.selected = M && typeof M != "function" && typeof M != "symbol";
                break;
              default:
                Pe(
                  e,
                  t,
                  T,
                  M,
                  r,
                  O
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
        for (var ge in a)
          M = a[ge], a.hasOwnProperty(ge) && M != null && !r.hasOwnProperty(ge) && Pe(e, t, ge, null, r, M);
        for (R in r)
          if (M = r[R], O = a[R], r.hasOwnProperty(R) && M !== O && (M != null || O != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, t));
                break;
              default:
                Pe(
                  e,
                  t,
                  R,
                  M,
                  r,
                  O
                );
            }
        return;
      default:
        if (Xo(t)) {
          for (var Ge in a)
            M = a[Ge], a.hasOwnProperty(Ge) && M !== void 0 && !r.hasOwnProperty(Ge) && Mu(
              e,
              t,
              Ge,
              void 0,
              r,
              M
            );
          for (H in r)
            M = r[H], O = a[H], !r.hasOwnProperty(H) || M === O || M === void 0 && O === void 0 || Mu(
              e,
              t,
              H,
              M,
              r,
              O
            );
          return;
        }
    }
    for (var C in a)
      M = a[C], a.hasOwnProperty(C) && M != null && !r.hasOwnProperty(C) && Pe(e, t, C, null, r, M);
    for (F in r)
      M = r[F], O = a[F], !r.hasOwnProperty(F) || M === O || M == null && O == null || Pe(e, t, F, M, r, O);
  }
  var Ou = null, _u = null;
  function Kl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Tm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Em(e, t) {
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
  function Iu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Uu = null;
  function k0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Uu ? !1 : (Uu = e, !0) : (Uu = null, !1);
  }
  var Cm = typeof setTimeout == "function" ? setTimeout : void 0, D0 = typeof clearTimeout == "function" ? clearTimeout : void 0, km = typeof Promise == "function" ? Promise : void 0, z0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof km < "u" ? function(e) {
    return km.resolve(null).then(e).catch(R0);
  } : Cm;
  function R0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ra(e) {
    return e === "head";
  }
  function Dm(e, t) {
    var a = t, r = 0, s = 0;
    do {
      var f = a.nextSibling;
      if (e.removeChild(a), f && f.nodeType === 8)
        if (a = f.data, a === "/$") {
          if (0 < r && 8 > r) {
            a = r;
            var y = e.ownerDocument;
            if (a & 1 && Er(y.documentElement), a & 2 && Er(y.body), a & 4)
              for (a = y.head, Er(a), y = a.firstChild; y; ) {
                var S = y.nextSibling, T = y.nodeName;
                y[Bi] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y), y = S;
              }
          }
          if (s === 0) {
            e.removeChild(f), Or(t);
            return;
          }
          s--;
        } else
          a === "$" || a === "$?" || a === "$!" ? s++ : r = a.charCodeAt(0) - 48;
      else r = 0;
      a = f;
    } while (a);
    Or(t);
  }
  function Lu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lu(a), Vo(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function N0(e, t, a, r) {
    for (; e.nodeType === 1; ) {
      var s = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (r) {
        if (!e[Bi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (f !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === f)
          return e;
      } else return e;
      if (e = cn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function M0(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function qu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function O0(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var r = function() {
        t(), a.removeEventListener("DOMContentLoaded", r);
      };
      a.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    }
  }
  function cn(e) {
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
  var ju = null;
  function zm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Rm(e, t, a) {
    switch (t = Kl(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Er(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Vo(e);
  }
  var rn = /* @__PURE__ */ new Map(), Nm = /* @__PURE__ */ new Set();
  function Zl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var jn = G.d;
  G.d = {
    f: _0,
    r: I0,
    D: U0,
    C: L0,
    L: q0,
    m: j0,
    X: H0,
    S: B0,
    M: V0
  };
  function _0() {
    var e = jn.f(), t = Hl();
    return e || t;
  }
  function I0(e) {
    var t = Qa(e);
    t !== null && t.tag === 5 && t.type === "form" ? Jd(t) : jn.r(e);
  }
  var wi = typeof document > "u" ? null : document;
  function Mm(e, t, a) {
    var r = wi;
    if (r && typeof t == "string" && t) {
      var s = Jt(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof a == "string" && (s += '[crossorigin="' + a + '"]'), Nm.has(s) || (Nm.add(s), e = { rel: e, crossOrigin: a, href: t }, r.querySelector(s) === null && (t = r.createElement("link"), yt(t, "link", e), ft(t), r.head.appendChild(t)));
    }
  }
  function U0(e) {
    jn.D(e), Mm("dns-prefetch", e, null);
  }
  function L0(e, t) {
    jn.C(e, t), Mm("preconnect", e, t);
  }
  function q0(e, t, a) {
    jn.L(e, t, a);
    var r = wi;
    if (r && e && t) {
      var s = 'link[rel="preload"][as="' + Jt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (s += '[imagesrcset="' + Jt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (s += '[imagesizes="' + Jt(
        a.imageSizes
      ) + '"]')) : s += '[href="' + Jt(e) + '"]';
      var f = s;
      switch (t) {
        case "style":
          f = Ti(e);
          break;
        case "script":
          f = Ei(e);
      }
      rn.has(f) || (e = h(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), rn.set(f, e), r.querySelector(s) !== null || t === "style" && r.querySelector(Cr(f)) || t === "script" && r.querySelector(kr(f)) || (t = r.createElement("link"), yt(t, "link", e), ft(t), r.head.appendChild(t)));
    }
  }
  function j0(e, t) {
    jn.m(e, t);
    var a = wi;
    if (a && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + Jt(r) + '"][href="' + Jt(e) + '"]', f = s;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Ei(e);
      }
      if (!rn.has(f) && (e = h({ rel: "modulepreload", href: e }, t), rn.set(f, e), a.querySelector(s) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(kr(f)))
              return;
        }
        r = a.createElement("link"), yt(r, "link", e), ft(r), a.head.appendChild(r);
      }
    }
  }
  function B0(e, t, a) {
    jn.S(e, t, a);
    var r = wi;
    if (r && e) {
      var s = Fa(r).hoistableStyles, f = Ti(e);
      t = t || "default";
      var y = s.get(f);
      if (!y) {
        var S = { loading: 0, preload: null };
        if (y = r.querySelector(
          Cr(f)
        ))
          S.loading = 5;
        else {
          e = h(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = rn.get(f)) && Bu(e, a);
          var T = y = r.createElement("link");
          ft(T), yt(T, "link", e), T._p = new Promise(function(R, H) {
            T.onload = R, T.onerror = H;
          }), T.addEventListener("load", function() {
            S.loading |= 1;
          }), T.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Jl(y, t, r);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: S
        }, s.set(f, y);
      }
    }
  }
  function H0(e, t) {
    jn.X(e, t);
    var a = wi;
    if (a && e) {
      var r = Fa(a).hoistableScripts, s = Ei(e), f = r.get(s);
      f || (f = a.querySelector(kr(s)), f || (e = h({ src: e, async: !0 }, t), (t = rn.get(s)) && Hu(e, t), f = a.createElement("script"), ft(f), yt(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, r.set(s, f));
    }
  }
  function V0(e, t) {
    jn.M(e, t);
    var a = wi;
    if (a && e) {
      var r = Fa(a).hoistableScripts, s = Ei(e), f = r.get(s);
      f || (f = a.querySelector(kr(s)), f || (e = h({ src: e, async: !0, type: "module" }, t), (t = rn.get(s)) && Hu(e, t), f = a.createElement("script"), ft(f), yt(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, r.set(s, f));
    }
  }
  function Om(e, t, a, r) {
    var s = (s = oe.current) ? Zl(s) : null;
    if (!s) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ti(a.href), a = Fa(
          s
        ).hoistableStyles, r = a.get(t), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Ti(a.href);
          var f = Fa(
            s
          ).hoistableStyles, y = f.get(e);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, y), (f = s.querySelector(
            Cr(e)
          )) && !f._p && (y.instance = f, y.state.loading = 5), rn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, rn.set(e, a), f || Q0(
            s,
            e,
            a,
            y.state
          ))), t && r === null)
            throw Error(o(528, ""));
          return y;
        }
        if (t && r !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ei(a), a = Fa(
          s
        ).hoistableScripts, r = a.get(t), r || (r = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function Ti(e) {
    return 'href="' + Jt(e) + '"';
  }
  function Cr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function _m(e) {
    return h({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Q0(e, t, a, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
      return r.loading |= 1;
    }), t.addEventListener("error", function() {
      return r.loading |= 2;
    }), yt(t, "link", a), ft(t), e.head.appendChild(t));
  }
  function Ei(e) {
    return '[src="' + Jt(e) + '"]';
  }
  function kr(e) {
    return "script[async]" + e;
  }
  function Im(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var r = e.querySelector(
            'style[data-href~="' + Jt(a.href) + '"]'
          );
          if (r)
            return t.instance = r, ft(r), r;
          var s = h({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return r = (e.ownerDocument || e).createElement(
            "style"
          ), ft(r), yt(r, "style", s), Jl(r, a.precedence, e), t.instance = r;
        case "stylesheet":
          s = Ti(a.href);
          var f = e.querySelector(
            Cr(s)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, ft(f), f;
          r = _m(a), (s = rn.get(s)) && Bu(r, s), f = (e.ownerDocument || e).createElement("link"), ft(f);
          var y = f;
          return y._p = new Promise(function(S, T) {
            y.onload = S, y.onerror = T;
          }), yt(f, "link", r), t.state.loading |= 4, Jl(f, a.precedence, e), t.instance = f;
        case "script":
          return f = Ei(a.src), (s = e.querySelector(
            kr(f)
          )) ? (t.instance = s, ft(s), s) : (r = a, (s = rn.get(f)) && (r = h({}, a), Hu(r, s)), e = e.ownerDocument || e, s = e.createElement("script"), ft(s), yt(s, "link", r), e.head.appendChild(s), t.instance = s);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, Jl(r, a.precedence, e));
    return t.instance;
  }
  function Jl(e, t, a) {
    for (var r = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = r.length ? r[r.length - 1] : null, f = s, y = 0; y < r.length; y++) {
      var S = r[y];
      if (S.dataset.precedence === t) f = S;
      else if (f !== s) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Bu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Hu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Wl = null;
  function Um(e, t, a) {
    if (Wl === null) {
      var r = /* @__PURE__ */ new Map(), s = Wl = /* @__PURE__ */ new Map();
      s.set(a, r);
    } else
      s = Wl, r = s.get(a), r || (r = /* @__PURE__ */ new Map(), s.set(a, r));
    if (r.has(e)) return r;
    for (r.set(e, null), a = a.getElementsByTagName(e), s = 0; s < a.length; s++) {
      var f = a[s];
      if (!(f[Bi] || f[bt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = f.getAttribute(t) || "";
        y = e + y;
        var S = r.get(y);
        S ? S.push(f) : r.set(y, [f]);
      }
    }
    return r;
  }
  function Lm(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function F0(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
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
  function qm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Dr = null;
  function P0() {
  }
  function G0(e, t, a) {
    if (Dr === null) throw Error(o(475));
    var r = Dr;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var s = Ti(a.href), f = e.querySelector(
          Cr(s)
        );
        if (f) {
          e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (r.count++, r = $l.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = f, ft(f);
          return;
        }
        f = e.ownerDocument || e, a = _m(a), (s = rn.get(s)) && Bu(a, s), f = f.createElement("link"), ft(f);
        var y = f;
        y._p = new Promise(function(S, T) {
          y.onload = S, y.onerror = T;
        }), yt(f, "link", a), t.instance = f;
      }
      r.stylesheets === null && (r.stylesheets = /* @__PURE__ */ new Map()), r.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (r.count++, t = $l.bind(r), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function Y0() {
    if (Dr === null) throw Error(o(475));
    var e = Dr;
    return e.stylesheets && e.count === 0 && Vu(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Vu(e, e.stylesheets), e.unsuspend) {
          var r = e.unsuspend;
          e.unsuspend = null, r();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function $l() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Vu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var eo = null;
  function Vu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, eo = /* @__PURE__ */ new Map(), t.forEach(X0, e), eo = null, $l.call(e));
  }
  function X0(e, t) {
    if (!(t.state.loading & 4)) {
      var a = eo.get(e);
      if (a) var r = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), eo.set(e, a);
        for (var s = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < s.length; f++) {
          var y = s[f];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y), r = y);
        }
        r && a.set(null, r);
      }
      s = t.instance, y = s.getAttribute("data-precedence"), f = a.get(y) || r, f === r && a.set(null, s), a.set(y, s), this.count++, r = $l.bind(this), s.addEventListener("load", r), s.addEventListener("error", r), f ? f.parentNode.insertBefore(s, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var zr = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function K0(e, t, a, r, s, f, y, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = qo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qo(0), this.hiddenUpdates = qo(null), this.identifierPrefix = r, this.onUncaughtError = s, this.onCaughtError = f, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jm(e, t, a, r, s, f, y, S, T, R, H, F) {
    return e = new K0(
      e,
      t,
      a,
      y,
      S,
      T,
      R,
      F
    ), t = 1, f === !0 && (t |= 24), f = Ht(3, null, null, t), e.current = f, f.stateNode = e, t = ws(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: r,
      isDehydrated: a,
      cache: t
    }, ks(f), e;
  }
  function Bm(e) {
    return e ? (e = ni, e) : ni;
  }
  function Hm(e, t, a, r, s, f) {
    s = Bm(s), r.context === null ? r.context = s : r.pendingContext = s, r = Gn(t), r.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (r.callback = f), a = Yn(e, r, t), a !== null && (Gt(a, e, t), rr(a, e, t));
  }
  function Vm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Qu(e, t) {
    Vm(e, t), (e = e.alternate) && Vm(e, t);
  }
  function Qm(e) {
    if (e.tag === 13) {
      var t = ti(e, 67108864);
      t !== null && Gt(t, e, 67108864), Qu(e, 67108864);
    }
  }
  var to = !0;
  function Z0(e, t, a, r) {
    var s = N.T;
    N.T = null;
    var f = G.p;
    try {
      G.p = 2, Fu(e, t, a, r);
    } finally {
      G.p = f, N.T = s;
    }
  }
  function J0(e, t, a, r) {
    var s = N.T;
    N.T = null;
    var f = G.p;
    try {
      G.p = 8, Fu(e, t, a, r);
    } finally {
      G.p = f, N.T = s;
    }
  }
  function Fu(e, t, a, r) {
    if (to) {
      var s = Pu(r);
      if (s === null)
        Nu(
          e,
          t,
          r,
          no,
          a
        ), Pm(e, r);
      else if ($0(
        s,
        e,
        t,
        a,
        r
      ))
        r.stopPropagation();
      else if (Pm(e, r), t & 4 && -1 < W0.indexOf(e)) {
        for (; s !== null; ) {
          var f = Qa(s);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var y = jt(f.pendingLanes);
                  if (y !== 0) {
                    var S = f;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; y; ) {
                      var T = 1 << 31 - be(y);
                      S.entanglements[1] |= T, y &= ~T;
                    }
                    bn(f), (Ve & 6) === 0 && (jl = wt() + 500, Ar(0));
                  }
                }
                break;
              case 13:
                S = ti(f, 2), S !== null && Gt(S, f, 2), Hl(), Qu(f, 2);
            }
          if (f = Pu(r), f === null && Nu(
            e,
            t,
            r,
            no,
            a
          ), f === s) break;
          s = f;
        }
        s !== null && r.stopPropagation();
      } else
        Nu(
          e,
          t,
          r,
          null,
          a
        );
    }
  }
  function Pu(e) {
    return e = Zo(e), Gu(e);
  }
  var no = null;
  function Gu(e) {
    if (no = null, e = Va(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return no = e, null;
  }
  function Fm(e) {
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
        switch (_o()) {
          case Li:
            return 2;
          case qi:
            return 8;
          case Ba:
          case Io:
            return 32;
          case Jr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yu = !1, la = null, oa = null, sa = null, Rr = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), ua = [], W0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Pm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        la = null;
        break;
      case "dragenter":
      case "dragleave":
        oa = null;
        break;
      case "mouseover":
      case "mouseout":
        sa = null;
        break;
      case "pointerover":
      case "pointerout":
        Rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nr.delete(t.pointerId);
    }
  }
  function Mr(e, t, a, r, s, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: r,
      nativeEvent: f,
      targetContainers: [s]
    }, t !== null && (t = Qa(t), t !== null && Qm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function $0(e, t, a, r, s) {
    switch (t) {
      case "focusin":
        return la = Mr(
          la,
          e,
          t,
          a,
          r,
          s
        ), !0;
      case "dragenter":
        return oa = Mr(
          oa,
          e,
          t,
          a,
          r,
          s
        ), !0;
      case "mouseover":
        return sa = Mr(
          sa,
          e,
          t,
          a,
          r,
          s
        ), !0;
      case "pointerover":
        var f = s.pointerId;
        return Rr.set(
          f,
          Mr(
            Rr.get(f) || null,
            e,
            t,
            a,
            r,
            s
          )
        ), !0;
      case "gotpointercapture":
        return f = s.pointerId, Nr.set(
          f,
          Mr(
            Nr.get(f) || null,
            e,
            t,
            a,
            r,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Gm(e) {
    var t = Va(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = d(a), t !== null) {
            e.blockedOn = t, Gy(e.priority, function() {
              if (a.tag === 13) {
                var r = Pt();
                r = jo(r);
                var s = ti(a, r);
                s !== null && Gt(s, a, r), Qu(a, r);
              }
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ao(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Pu(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var r = new a.constructor(
          a.type,
          a
        );
        Ko = r, a.target.dispatchEvent(r), Ko = null;
      } else
        return t = Qa(a), t !== null && Qm(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Ym(e, t, a) {
    ao(e) && a.delete(t);
  }
  function ev() {
    Yu = !1, la !== null && ao(la) && (la = null), oa !== null && ao(oa) && (oa = null), sa !== null && ao(sa) && (sa = null), Rr.forEach(Ym), Nr.forEach(Ym);
  }
  function io(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Yu || (Yu = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      ev
    )));
  }
  var ro = null;
  function Xm(e) {
    ro !== e && (ro = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        ro === e && (ro = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], r = e[t + 1], s = e[t + 2];
          if (typeof r != "function") {
            if (Gu(r || a) === null)
              continue;
            break;
          }
          var f = Qa(a);
          f !== null && (e.splice(t, 3), t -= 3, Gs(
            f,
            {
              pending: !0,
              data: s,
              method: a.method,
              action: r
            },
            r,
            s
          ));
        }
      }
    ));
  }
  function Or(e) {
    function t(T) {
      return io(T, e);
    }
    la !== null && io(la, e), oa !== null && io(oa, e), sa !== null && io(sa, e), Rr.forEach(t), Nr.forEach(t);
    for (var a = 0; a < ua.length; a++) {
      var r = ua[a];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < ua.length && (a = ua[0], a.blockedOn === null); )
      Gm(a), a.blockedOn === null && ua.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (r = 0; r < a.length; r += 3) {
        var s = a[r], f = a[r + 1], y = s[kt] || null;
        if (typeof f == "function")
          y || Xm(a);
        else if (y) {
          var S = null;
          if (f && f.hasAttribute("formAction")) {
            if (s = f, y = f[kt] || null)
              S = y.formAction;
            else if (Gu(s) !== null) continue;
          } else S = y.action;
          typeof S == "function" ? a[r + 1] = S : (a.splice(r, 3), r -= 3), Xm(a);
        }
      }
  }
  function Xu(e) {
    this._internalRoot = e;
  }
  lo.prototype.render = Xu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, r = Pt();
    Hm(a, r, e, t, null, null);
  }, lo.prototype.unmount = Xu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Hm(e.current, 2, null, e, null, null), Hl(), t[Ha] = null;
    }
  };
  function lo(e) {
    this._internalRoot = e;
  }
  lo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ff();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < ua.length && t !== 0 && t < ua[a].priority; a++) ;
      ua.splice(a, 0, e), a === 0 && Gm(e);
    }
  };
  var Km = i.version;
  if (Km !== "19.1.0")
    throw Error(
      o(
        527,
        Km,
        "19.1.0"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = g(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var tv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oo.isDisabled && oo.supportsFiber)
      try {
        B = oo.inject(
          tv
        ), X = oo;
      } catch {
      }
  }
  return Ir.createRoot = function(e, t) {
    if (!u(e)) throw Error(o(299));
    var a = !1, r = "", s = fp, f = dp, y = pp, S = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (y = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (S = t.unstable_transitionCallbacks)), t = jm(
      e,
      1,
      !1,
      null,
      null,
      a,
      r,
      s,
      f,
      y,
      S,
      null
    ), e[Ha] = t.current, Ru(e), new Xu(t);
  }, Ir.hydrateRoot = function(e, t, a) {
    if (!u(e)) throw Error(o(299));
    var r = !1, s = "", f = fp, y = dp, S = pp, T = null, R = null;
    return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (s = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (y = a.onCaughtError), a.onRecoverableError !== void 0 && (S = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (T = a.unstable_transitionCallbacks), a.formState !== void 0 && (R = a.formState)), t = jm(
      e,
      1,
      !0,
      t,
      a ?? null,
      r,
      s,
      f,
      y,
      S,
      T,
      R
    ), t.context = Bm(null), a = t.current, r = Pt(), r = jo(r), s = Gn(r), s.callback = null, Yn(a, s, r), a = r, t.current.lanes = a, ji(t, a), bn(t), e[Ha] = t.current, Ru(e), new lo(t);
  }, Ir.version = "19.1.0", Ir;
}
var rh;
function fv() {
  if (rh) return Ju.exports;
  rh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Ju.exports = cv(), Ju.exports;
}
var dv = fv();
function gg(n, i) {
  return function() {
    return n.apply(i, arguments);
  };
}
const { toString: pv } = Object.prototype, { getPrototypeOf: Vc } = Object, { iterator: To, toStringTag: yg } = Symbol, Eo = /* @__PURE__ */ ((n) => (i) => {
  const l = pv.call(i);
  return n[l] || (n[l] = l.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dn = (n) => (n = n.toLowerCase(), (i) => Eo(i) === n), Co = (n) => (i) => typeof i === n, { isArray: Ni } = Array, Pr = Co("undefined");
function mv(n) {
  return n !== null && !Pr(n) && n.constructor !== null && !Pr(n.constructor) && Ot(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const bg = dn("ArrayBuffer");
function hv(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && bg(n.buffer), i;
}
const gv = Co("string"), Ot = Co("function"), vg = Co("number"), ko = (n) => n !== null && typeof n == "object", yv = (n) => n === !0 || n === !1, go = (n) => {
  if (Eo(n) !== "object")
    return !1;
  const i = Vc(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(yg in n) && !(To in n);
}, bv = dn("Date"), vv = dn("File"), Sv = dn("Blob"), xv = dn("FileList"), Av = (n) => ko(n) && Ot(n.pipe), wv = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || Ot(n.append) && ((i = Eo(n)) === "formdata" || // detect form-data instance
  i === "object" && Ot(n.toString) && n.toString() === "[object FormData]"));
}, Tv = dn("URLSearchParams"), [Ev, Cv, kv, Dv] = ["ReadableStream", "Request", "Response", "Headers"].map(dn), zv = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yr(n, i, { allOwnKeys: l = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let o, u;
  if (typeof n != "object" && (n = [n]), Ni(n))
    for (o = 0, u = n.length; o < u; o++)
      i.call(null, n[o], o, n);
  else {
    const c = l ? Object.getOwnPropertyNames(n) : Object.keys(n), d = c.length;
    let p;
    for (o = 0; o < d; o++)
      p = c[o], i.call(null, n[p], p, n);
  }
}
function Sg(n, i) {
  i = i.toLowerCase();
  const l = Object.keys(n);
  let o = l.length, u;
  for (; o-- > 0; )
    if (u = l[o], i === u.toLowerCase())
      return u;
  return null;
}
const Ia = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, xg = (n) => !Pr(n) && n !== Ia;
function Sc() {
  const { caseless: n } = xg(this) && this || {}, i = {}, l = (o, u) => {
    const c = n && Sg(i, u) || u;
    go(i[c]) && go(o) ? i[c] = Sc(i[c], o) : go(o) ? i[c] = Sc({}, o) : Ni(o) ? i[c] = o.slice() : i[c] = o;
  };
  for (let o = 0, u = arguments.length; o < u; o++)
    arguments[o] && Yr(arguments[o], l);
  return i;
}
const Rv = (n, i, l, { allOwnKeys: o } = {}) => (Yr(i, (u, c) => {
  l && Ot(u) ? n[c] = gg(u, l) : n[c] = u;
}, { allOwnKeys: o }), n), Nv = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Mv = (n, i, l, o) => {
  n.prototype = Object.create(i.prototype, o), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), l && Object.assign(n.prototype, l);
}, Ov = (n, i, l, o) => {
  let u, c, d;
  const p = {};
  if (i = i || {}, n == null) return i;
  do {
    for (u = Object.getOwnPropertyNames(n), c = u.length; c-- > 0; )
      d = u[c], (!o || o(d, n, i)) && !p[d] && (i[d] = n[d], p[d] = !0);
    n = l !== !1 && Vc(n);
  } while (n && (!l || l(n, i)) && n !== Object.prototype);
  return i;
}, _v = (n, i, l) => {
  n = String(n), (l === void 0 || l > n.length) && (l = n.length), l -= i.length;
  const o = n.indexOf(i, l);
  return o !== -1 && o === l;
}, Iv = (n) => {
  if (!n) return null;
  if (Ni(n)) return n;
  let i = n.length;
  if (!vg(i)) return null;
  const l = new Array(i);
  for (; i-- > 0; )
    l[i] = n[i];
  return l;
}, Uv = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && Vc(Uint8Array)), Lv = (n, i) => {
  const o = (n && n[To]).call(n);
  let u;
  for (; (u = o.next()) && !u.done; ) {
    const c = u.value;
    i.call(n, c[0], c[1]);
  }
}, qv = (n, i) => {
  let l;
  const o = [];
  for (; (l = n.exec(i)) !== null; )
    o.push(l);
  return o;
}, jv = dn("HTMLFormElement"), Bv = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(l, o, u) {
    return o.toUpperCase() + u;
  }
), lh = (({ hasOwnProperty: n }) => (i, l) => n.call(i, l))(Object.prototype), Hv = dn("RegExp"), Ag = (n, i) => {
  const l = Object.getOwnPropertyDescriptors(n), o = {};
  Yr(l, (u, c) => {
    let d;
    (d = i(u, c, n)) !== !1 && (o[c] = d || u);
  }), Object.defineProperties(n, o);
}, Vv = (n) => {
  Ag(n, (i, l) => {
    if (Ot(n) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
      return !1;
    const o = n[l];
    if (Ot(o)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + l + "'");
      });
    }
  });
}, Qv = (n, i) => {
  const l = {}, o = (u) => {
    u.forEach((c) => {
      l[c] = !0;
    });
  };
  return Ni(n) ? o(n) : o(String(n).split(i)), l;
}, Fv = () => {
}, Pv = (n, i) => n != null && Number.isFinite(n = +n) ? n : i;
function Gv(n) {
  return !!(n && Ot(n.append) && n[yg] === "FormData" && n[To]);
}
const Yv = (n) => {
  const i = new Array(10), l = (o, u) => {
    if (ko(o)) {
      if (i.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        i[u] = o;
        const c = Ni(o) ? [] : {};
        return Yr(o, (d, p) => {
          const g = l(d, u + 1);
          !Pr(g) && (c[p] = g);
        }), i[u] = void 0, c;
      }
    }
    return o;
  };
  return l(n, 0);
}, Xv = dn("AsyncFunction"), Kv = (n) => n && (ko(n) || Ot(n)) && Ot(n.then) && Ot(n.catch), wg = ((n, i) => n ? setImmediate : i ? ((l, o) => (Ia.addEventListener("message", ({ source: u, data: c }) => {
  u === Ia && c === l && o.length && o.shift()();
}, !1), (u) => {
  o.push(u), Ia.postMessage(l, "*");
}))(`axios@${Math.random()}`, []) : (l) => setTimeout(l))(
  typeof setImmediate == "function",
  Ot(Ia.postMessage)
), Zv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ia) : typeof process < "u" && process.nextTick || wg, Jv = (n) => n != null && Ot(n[To]), I = {
  isArray: Ni,
  isArrayBuffer: bg,
  isBuffer: mv,
  isFormData: wv,
  isArrayBufferView: hv,
  isString: gv,
  isNumber: vg,
  isBoolean: yv,
  isObject: ko,
  isPlainObject: go,
  isReadableStream: Ev,
  isRequest: Cv,
  isResponse: kv,
  isHeaders: Dv,
  isUndefined: Pr,
  isDate: bv,
  isFile: vv,
  isBlob: Sv,
  isRegExp: Hv,
  isFunction: Ot,
  isStream: Av,
  isURLSearchParams: Tv,
  isTypedArray: Uv,
  isFileList: xv,
  forEach: Yr,
  merge: Sc,
  extend: Rv,
  trim: zv,
  stripBOM: Nv,
  inherits: Mv,
  toFlatObject: Ov,
  kindOf: Eo,
  kindOfTest: dn,
  endsWith: _v,
  toArray: Iv,
  forEachEntry: Lv,
  matchAll: qv,
  isHTMLForm: jv,
  hasOwnProperty: lh,
  hasOwnProp: lh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ag,
  freezeMethods: Vv,
  toObjectSet: Qv,
  toCamelCase: Bv,
  noop: Fv,
  toFiniteNumber: Pv,
  findKey: Sg,
  global: Ia,
  isContextDefined: xg,
  isSpecCompliantForm: Gv,
  toJSONObject: Yv,
  isAsyncFn: Xv,
  isThenable: Kv,
  setImmediate: wg,
  asap: Zv,
  isIterable: Jv
};
function Ce(n, i, l, o, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), l && (this.config = l), o && (this.request = o), u && (this.response = u, this.status = u.status ? u.status : null);
}
I.inherits(Ce, Error, {
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
      config: I.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Tg = Ce.prototype, Eg = {};
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
  Eg[n] = { value: n };
});
Object.defineProperties(Ce, Eg);
Object.defineProperty(Tg, "isAxiosError", { value: !0 });
Ce.from = (n, i, l, o, u, c) => {
  const d = Object.create(Tg);
  return I.toFlatObject(n, d, function(g) {
    return g !== Error.prototype;
  }, (p) => p !== "isAxiosError"), Ce.call(d, n.message, i, l, o, u), d.cause = n, d.name = n.name, c && Object.assign(d, c), d;
};
const Wv = null;
function xc(n) {
  return I.isPlainObject(n) || I.isArray(n);
}
function Cg(n) {
  return I.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function oh(n, i, l) {
  return n ? n.concat(i).map(function(u, c) {
    return u = Cg(u), !l && c ? "[" + u + "]" : u;
  }).join(l ? "." : "") : i;
}
function $v(n) {
  return I.isArray(n) && !n.some(xc);
}
const eS = I.toFlatObject(I, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function Do(n, i, l) {
  if (!I.isObject(n))
    throw new TypeError("target must be an object");
  i = i || new FormData(), l = I.toFlatObject(l, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(z, L) {
    return !I.isUndefined(L[z]);
  });
  const o = l.metaTokens, u = l.visitor || h, c = l.dots, d = l.indexes, g = (l.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(i);
  if (!I.isFunction(u))
    throw new TypeError("visitor must be a function");
  function m(k) {
    if (k === null) return "";
    if (I.isDate(k))
      return k.toISOString();
    if (I.isBoolean(k))
      return k.toString();
    if (!g && I.isBlob(k))
      throw new Ce("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(k) || I.isTypedArray(k) ? g && typeof Blob == "function" ? new Blob([k]) : Buffer.from(k) : k;
  }
  function h(k, z, L) {
    let q = k;
    if (k && !L && typeof k == "object") {
      if (I.endsWith(z, "{}"))
        z = o ? z : z.slice(0, -2), k = JSON.stringify(k);
      else if (I.isArray(k) && $v(k) || (I.isFileList(k) || I.endsWith(z, "[]")) && (q = I.toArray(k)))
        return z = Cg(z), q.forEach(function(j, se) {
          !(I.isUndefined(j) || j === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? oh([z], se, c) : d === null ? z : z + "[]",
            m(j)
          );
        }), !1;
    }
    return xc(k) ? !0 : (i.append(oh(L, z, c), m(k)), !1);
  }
  const v = [], w = Object.assign(eS, {
    defaultVisitor: h,
    convertValue: m,
    isVisitable: xc
  });
  function x(k, z) {
    if (!I.isUndefined(k)) {
      if (v.indexOf(k) !== -1)
        throw Error("Circular reference detected in " + z.join("."));
      v.push(k), I.forEach(k, function(q, K) {
        (!(I.isUndefined(q) || q === null) && u.call(
          i,
          q,
          I.isString(K) ? K.trim() : K,
          z,
          w
        )) === !0 && x(q, z ? z.concat(K) : [K]);
      }), v.pop();
    }
  }
  if (!I.isObject(n))
    throw new TypeError("data must be an object");
  return x(n), i;
}
function sh(n) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(o) {
    return i[o];
  });
}
function Qc(n, i) {
  this._pairs = [], n && Do(n, this, i);
}
const kg = Qc.prototype;
kg.append = function(i, l) {
  this._pairs.push([i, l]);
};
kg.toString = function(i) {
  const l = i ? function(o) {
    return i.call(this, o, sh);
  } : sh;
  return this._pairs.map(function(u) {
    return l(u[0]) + "=" + l(u[1]);
  }, "").join("&");
};
function tS(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Dg(n, i, l) {
  if (!i)
    return n;
  const o = l && l.encode || tS;
  I.isFunction(l) && (l = {
    serialize: l
  });
  const u = l && l.serialize;
  let c;
  if (u ? c = u(i, l) : c = I.isURLSearchParams(i) ? i.toString() : new Qc(i, l).toString(o), c) {
    const d = n.indexOf("#");
    d !== -1 && (n = n.slice(0, d)), n += (n.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return n;
}
class uh {
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
  use(i, l, o) {
    return this.handlers.push({
      fulfilled: i,
      rejected: l,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
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
    I.forEach(this.handlers, function(o) {
      o !== null && i(o);
    });
  }
}
const zg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, nS = typeof URLSearchParams < "u" ? URLSearchParams : Qc, aS = typeof FormData < "u" ? FormData : null, iS = typeof Blob < "u" ? Blob : null, rS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: nS,
    FormData: aS,
    Blob: iS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fc = typeof window < "u" && typeof document < "u", Ac = typeof navigator == "object" && navigator || void 0, lS = Fc && (!Ac || ["ReactNative", "NativeScript", "NS"].indexOf(Ac.product) < 0), oS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", sS = Fc && window.location.href || "http://localhost", uS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fc,
  hasStandardBrowserEnv: lS,
  hasStandardBrowserWebWorkerEnv: oS,
  navigator: Ac,
  origin: sS
}, Symbol.toStringTag, { value: "Module" })), xt = {
  ...uS,
  ...rS
};
function cS(n, i) {
  return Do(n, new xt.classes.URLSearchParams(), Object.assign({
    visitor: function(l, o, u, c) {
      return xt.isNode && I.isBuffer(l) ? (this.append(o, l.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function fS(n) {
  return I.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function dS(n) {
  const i = {}, l = Object.keys(n);
  let o;
  const u = l.length;
  let c;
  for (o = 0; o < u; o++)
    c = l[o], i[c] = n[c];
  return i;
}
function Rg(n) {
  function i(l, o, u, c) {
    let d = l[c++];
    if (d === "__proto__") return !0;
    const p = Number.isFinite(+d), g = c >= l.length;
    return d = !d && I.isArray(u) ? u.length : d, g ? (I.hasOwnProp(u, d) ? u[d] = [u[d], o] : u[d] = o, !p) : ((!u[d] || !I.isObject(u[d])) && (u[d] = []), i(l, o, u[d], c) && I.isArray(u[d]) && (u[d] = dS(u[d])), !p);
  }
  if (I.isFormData(n) && I.isFunction(n.entries)) {
    const l = {};
    return I.forEachEntry(n, (o, u) => {
      i(fS(o), u, l, 0);
    }), l;
  }
  return null;
}
function pS(n, i, l) {
  if (I.isString(n))
    try {
      return (i || JSON.parse)(n), I.trim(n);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (l || JSON.stringify)(n);
}
const Xr = {
  transitional: zg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, l) {
    const o = l.getContentType() || "", u = o.indexOf("application/json") > -1, c = I.isObject(i);
    if (c && I.isHTMLForm(i) && (i = new FormData(i)), I.isFormData(i))
      return u ? JSON.stringify(Rg(i)) : i;
    if (I.isArrayBuffer(i) || I.isBuffer(i) || I.isStream(i) || I.isFile(i) || I.isBlob(i) || I.isReadableStream(i))
      return i;
    if (I.isArrayBufferView(i))
      return i.buffer;
    if (I.isURLSearchParams(i))
      return l.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let p;
    if (c) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return cS(i, this.formSerializer).toString();
      if ((p = I.isFileList(i)) || o.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return Do(
          p ? { "files[]": i } : i,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return c || u ? (l.setContentType("application/json", !1), pS(i)) : i;
  }],
  transformResponse: [function(i) {
    const l = this.transitional || Xr.transitional, o = l && l.forcedJSONParsing, u = this.responseType === "json";
    if (I.isResponse(i) || I.isReadableStream(i))
      return i;
    if (i && I.isString(i) && (o && !this.responseType || u)) {
      const d = !(l && l.silentJSONParsing) && u;
      try {
        return JSON.parse(i);
      } catch (p) {
        if (d)
          throw p.name === "SyntaxError" ? Ce.from(p, Ce.ERR_BAD_RESPONSE, this, null, this.response) : p;
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
    FormData: xt.classes.FormData,
    Blob: xt.classes.Blob
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
I.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Xr.headers[n] = {};
});
const mS = I.toObjectSet([
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
]), hS = (n) => {
  const i = {};
  let l, o, u;
  return n && n.split(`
`).forEach(function(d) {
    u = d.indexOf(":"), l = d.substring(0, u).trim().toLowerCase(), o = d.substring(u + 1).trim(), !(!l || i[l] && mS[l]) && (l === "set-cookie" ? i[l] ? i[l].push(o) : i[l] = [o] : i[l] = i[l] ? i[l] + ", " + o : o);
  }), i;
}, ch = Symbol("internals");
function Ur(n) {
  return n && String(n).trim().toLowerCase();
}
function yo(n) {
  return n === !1 || n == null ? n : I.isArray(n) ? n.map(yo) : String(n);
}
function gS(n) {
  const i = /* @__PURE__ */ Object.create(null), l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = l.exec(n); )
    i[o[1]] = o[2];
  return i;
}
const yS = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function tc(n, i, l, o, u) {
  if (I.isFunction(o))
    return o.call(this, i, l);
  if (u && (i = l), !!I.isString(i)) {
    if (I.isString(o))
      return i.indexOf(o) !== -1;
    if (I.isRegExp(o))
      return o.test(i);
  }
}
function bS(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, l, o) => l.toUpperCase() + o);
}
function vS(n, i) {
  const l = I.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(n, o + l, {
      value: function(u, c, d) {
        return this[o].call(this, i, u, c, d);
      },
      configurable: !0
    });
  });
}
let _t = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, l, o) {
    const u = this;
    function c(p, g, m) {
      const h = Ur(g);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const v = I.findKey(u, h);
      (!v || u[v] === void 0 || m === !0 || m === void 0 && u[v] !== !1) && (u[v || g] = yo(p));
    }
    const d = (p, g) => I.forEach(p, (m, h) => c(m, h, g));
    if (I.isPlainObject(i) || i instanceof this.constructor)
      d(i, l);
    else if (I.isString(i) && (i = i.trim()) && !yS(i))
      d(hS(i), l);
    else if (I.isObject(i) && I.isIterable(i)) {
      let p = {}, g, m;
      for (const h of i) {
        if (!I.isArray(h))
          throw TypeError("Object iterator must return a key-value pair");
        p[m = h[0]] = (g = p[m]) ? I.isArray(g) ? [...g, h[1]] : [g, h[1]] : h[1];
      }
      d(p, l);
    } else
      i != null && c(l, i, o);
    return this;
  }
  get(i, l) {
    if (i = Ur(i), i) {
      const o = I.findKey(this, i);
      if (o) {
        const u = this[o];
        if (!l)
          return u;
        if (l === !0)
          return gS(u);
        if (I.isFunction(l))
          return l.call(this, u, o);
        if (I.isRegExp(l))
          return l.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, l) {
    if (i = Ur(i), i) {
      const o = I.findKey(this, i);
      return !!(o && this[o] !== void 0 && (!l || tc(this, this[o], o, l)));
    }
    return !1;
  }
  delete(i, l) {
    const o = this;
    let u = !1;
    function c(d) {
      if (d = Ur(d), d) {
        const p = I.findKey(o, d);
        p && (!l || tc(o, o[p], p, l)) && (delete o[p], u = !0);
      }
    }
    return I.isArray(i) ? i.forEach(c) : c(i), u;
  }
  clear(i) {
    const l = Object.keys(this);
    let o = l.length, u = !1;
    for (; o--; ) {
      const c = l[o];
      (!i || tc(this, this[c], c, i, !0)) && (delete this[c], u = !0);
    }
    return u;
  }
  normalize(i) {
    const l = this, o = {};
    return I.forEach(this, (u, c) => {
      const d = I.findKey(o, c);
      if (d) {
        l[d] = yo(u), delete l[c];
        return;
      }
      const p = i ? bS(c) : String(c).trim();
      p !== c && delete l[c], l[p] = yo(u), o[p] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const l = /* @__PURE__ */ Object.create(null);
    return I.forEach(this, (o, u) => {
      o != null && o !== !1 && (l[u] = i && I.isArray(o) ? o.join(", ") : o);
    }), l;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, l]) => i + ": " + l).join(`
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
  static concat(i, ...l) {
    const o = new this(i);
    return l.forEach((u) => o.set(u)), o;
  }
  static accessor(i) {
    const o = (this[ch] = this[ch] = {
      accessors: {}
    }).accessors, u = this.prototype;
    function c(d) {
      const p = Ur(d);
      o[p] || (vS(u, d), o[p] = !0);
    }
    return I.isArray(i) ? i.forEach(c) : c(i), this;
  }
};
_t.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(_t.prototype, ({ value: n }, i) => {
  let l = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(o) {
      this[l] = o;
    }
  };
});
I.freezeMethods(_t);
function nc(n, i) {
  const l = this || Xr, o = i || l, u = _t.from(o.headers);
  let c = o.data;
  return I.forEach(n, function(p) {
    c = p.call(l, c, u.normalize(), i ? i.status : void 0);
  }), u.normalize(), c;
}
function Ng(n) {
  return !!(n && n.__CANCEL__);
}
function Mi(n, i, l) {
  Ce.call(this, n ?? "canceled", Ce.ERR_CANCELED, i, l), this.name = "CanceledError";
}
I.inherits(Mi, Ce, {
  __CANCEL__: !0
});
function Mg(n, i, l) {
  const o = l.config.validateStatus;
  !l.status || !o || o(l.status) ? n(l) : i(new Ce(
    "Request failed with status code " + l.status,
    [Ce.ERR_BAD_REQUEST, Ce.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
    l.config,
    l.request,
    l
  ));
}
function SS(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function xS(n, i) {
  n = n || 10;
  const l = new Array(n), o = new Array(n);
  let u = 0, c = 0, d;
  return i = i !== void 0 ? i : 1e3, function(g) {
    const m = Date.now(), h = o[c];
    d || (d = m), l[u] = g, o[u] = m;
    let v = c, w = 0;
    for (; v !== u; )
      w += l[v++], v = v % n;
    if (u = (u + 1) % n, u === c && (c = (c + 1) % n), m - d < i)
      return;
    const x = h && m - h;
    return x ? Math.round(w * 1e3 / x) : void 0;
  };
}
function AS(n, i) {
  let l = 0, o = 1e3 / i, u, c;
  const d = (m, h = Date.now()) => {
    l = h, u = null, c && (clearTimeout(c), c = null), n.apply(null, m);
  };
  return [(...m) => {
    const h = Date.now(), v = h - l;
    v >= o ? d(m, h) : (u = m, c || (c = setTimeout(() => {
      c = null, d(u);
    }, o - v)));
  }, () => u && d(u)];
}
const So = (n, i, l = 3) => {
  let o = 0;
  const u = xS(50, 250);
  return AS((c) => {
    const d = c.loaded, p = c.lengthComputable ? c.total : void 0, g = d - o, m = u(g), h = d <= p;
    o = d;
    const v = {
      loaded: d,
      total: p,
      progress: p ? d / p : void 0,
      bytes: g,
      rate: m || void 0,
      estimated: m && p && h ? (p - d) / m : void 0,
      event: c,
      lengthComputable: p != null,
      [i ? "download" : "upload"]: !0
    };
    n(v);
  }, l);
}, fh = (n, i) => {
  const l = n != null;
  return [(o) => i[0]({
    lengthComputable: l,
    total: n,
    loaded: o
  }), i[1]];
}, dh = (n) => (...i) => I.asap(() => n(...i)), wS = xt.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, i) => (l) => (l = new URL(l, xt.origin), n.protocol === l.protocol && n.host === l.host && (i || n.port === l.port)))(
  new URL(xt.origin),
  xt.navigator && /(msie|trident)/i.test(xt.navigator.userAgent)
) : () => !0, TS = xt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, i, l, o, u, c) {
      const d = [n + "=" + encodeURIComponent(i)];
      I.isNumber(l) && d.push("expires=" + new Date(l).toGMTString()), I.isString(o) && d.push("path=" + o), I.isString(u) && d.push("domain=" + u), c === !0 && d.push("secure"), document.cookie = d.join("; ");
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
function ES(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function CS(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function Og(n, i, l) {
  let o = !ES(i);
  return n && (o || l == !1) ? CS(n, i) : i;
}
const ph = (n) => n instanceof _t ? { ...n } : n;
function La(n, i) {
  i = i || {};
  const l = {};
  function o(m, h, v, w) {
    return I.isPlainObject(m) && I.isPlainObject(h) ? I.merge.call({ caseless: w }, m, h) : I.isPlainObject(h) ? I.merge({}, h) : I.isArray(h) ? h.slice() : h;
  }
  function u(m, h, v, w) {
    if (I.isUndefined(h)) {
      if (!I.isUndefined(m))
        return o(void 0, m, v, w);
    } else return o(m, h, v, w);
  }
  function c(m, h) {
    if (!I.isUndefined(h))
      return o(void 0, h);
  }
  function d(m, h) {
    if (I.isUndefined(h)) {
      if (!I.isUndefined(m))
        return o(void 0, m);
    } else return o(void 0, h);
  }
  function p(m, h, v) {
    if (v in i)
      return o(m, h);
    if (v in n)
      return o(void 0, m);
  }
  const g = {
    url: c,
    method: c,
    data: c,
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
    headers: (m, h, v) => u(ph(m), ph(h), v, !0)
  };
  return I.forEach(Object.keys(Object.assign({}, n, i)), function(h) {
    const v = g[h] || u, w = v(n[h], i[h], h);
    I.isUndefined(w) && v !== p || (l[h] = w);
  }), l;
}
const _g = (n) => {
  const i = La({}, n);
  let { data: l, withXSRFToken: o, xsrfHeaderName: u, xsrfCookieName: c, headers: d, auth: p } = i;
  i.headers = d = _t.from(d), i.url = Dg(Og(i.baseURL, i.url, i.allowAbsoluteUrls), n.params, n.paramsSerializer), p && d.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let g;
  if (I.isFormData(l)) {
    if (xt.hasStandardBrowserEnv || xt.hasStandardBrowserWebWorkerEnv)
      d.setContentType(void 0);
    else if ((g = d.getContentType()) !== !1) {
      const [m, ...h] = g ? g.split(";").map((v) => v.trim()).filter(Boolean) : [];
      d.setContentType([m || "multipart/form-data", ...h].join("; "));
    }
  }
  if (xt.hasStandardBrowserEnv && (o && I.isFunction(o) && (o = o(i)), o || o !== !1 && wS(i.url))) {
    const m = u && c && TS.read(c);
    m && d.set(u, m);
  }
  return i;
}, kS = typeof XMLHttpRequest < "u", DS = kS && function(n) {
  return new Promise(function(l, o) {
    const u = _g(n);
    let c = u.data;
    const d = _t.from(u.headers).normalize();
    let { responseType: p, onUploadProgress: g, onDownloadProgress: m } = u, h, v, w, x, k;
    function z() {
      x && x(), k && k(), u.cancelToken && u.cancelToken.unsubscribe(h), u.signal && u.signal.removeEventListener("abort", h);
    }
    let L = new XMLHttpRequest();
    L.open(u.method.toUpperCase(), u.url, !0), L.timeout = u.timeout;
    function q() {
      if (!L)
        return;
      const j = _t.from(
        "getAllResponseHeaders" in L && L.getAllResponseHeaders()
      ), J = {
        data: !p || p === "text" || p === "json" ? L.responseText : L.response,
        status: L.status,
        statusText: L.statusText,
        headers: j,
        config: n,
        request: L
      };
      Mg(function(le) {
        l(le), z();
      }, function(le) {
        o(le), z();
      }, J), L = null;
    }
    "onloadend" in L ? L.onloadend = q : L.onreadystatechange = function() {
      !L || L.readyState !== 4 || L.status === 0 && !(L.responseURL && L.responseURL.indexOf("file:") === 0) || setTimeout(q);
    }, L.onabort = function() {
      L && (o(new Ce("Request aborted", Ce.ECONNABORTED, n, L)), L = null);
    }, L.onerror = function() {
      o(new Ce("Network Error", Ce.ERR_NETWORK, n, L)), L = null;
    }, L.ontimeout = function() {
      let se = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded";
      const J = u.transitional || zg;
      u.timeoutErrorMessage && (se = u.timeoutErrorMessage), o(new Ce(
        se,
        J.clarifyTimeoutError ? Ce.ETIMEDOUT : Ce.ECONNABORTED,
        n,
        L
      )), L = null;
    }, c === void 0 && d.setContentType(null), "setRequestHeader" in L && I.forEach(d.toJSON(), function(se, J) {
      L.setRequestHeader(J, se);
    }), I.isUndefined(u.withCredentials) || (L.withCredentials = !!u.withCredentials), p && p !== "json" && (L.responseType = u.responseType), m && ([w, k] = So(m, !0), L.addEventListener("progress", w)), g && L.upload && ([v, x] = So(g), L.upload.addEventListener("progress", v), L.upload.addEventListener("loadend", x)), (u.cancelToken || u.signal) && (h = (j) => {
      L && (o(!j || j.type ? new Mi(null, n, L) : j), L.abort(), L = null);
    }, u.cancelToken && u.cancelToken.subscribe(h), u.signal && (u.signal.aborted ? h() : u.signal.addEventListener("abort", h)));
    const K = SS(u.url);
    if (K && xt.protocols.indexOf(K) === -1) {
      o(new Ce("Unsupported protocol " + K + ":", Ce.ERR_BAD_REQUEST, n));
      return;
    }
    L.send(c || null);
  });
}, zS = (n, i) => {
  const { length: l } = n = n ? n.filter(Boolean) : [];
  if (i || l) {
    let o = new AbortController(), u;
    const c = function(m) {
      if (!u) {
        u = !0, p();
        const h = m instanceof Error ? m : this.reason;
        o.abort(h instanceof Ce ? h : new Mi(h instanceof Error ? h.message : h));
      }
    };
    let d = i && setTimeout(() => {
      d = null, c(new Ce(`timeout ${i} of ms exceeded`, Ce.ETIMEDOUT));
    }, i);
    const p = () => {
      n && (d && clearTimeout(d), d = null, n.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(c) : m.removeEventListener("abort", c);
      }), n = null);
    };
    n.forEach((m) => m.addEventListener("abort", c));
    const { signal: g } = o;
    return g.unsubscribe = () => I.asap(p), g;
  }
}, RS = function* (n, i) {
  let l = n.byteLength;
  if (l < i) {
    yield n;
    return;
  }
  let o = 0, u;
  for (; o < l; )
    u = o + i, yield n.slice(o, u), o = u;
}, NS = async function* (n, i) {
  for await (const l of MS(n))
    yield* RS(l, i);
}, MS = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const i = n.getReader();
  try {
    for (; ; ) {
      const { done: l, value: o } = await i.read();
      if (l)
        break;
      yield o;
    }
  } finally {
    await i.cancel();
  }
}, mh = (n, i, l, o) => {
  const u = NS(n, i);
  let c = 0, d, p = (g) => {
    d || (d = !0, o && o(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: m, value: h } = await u.next();
        if (m) {
          p(), g.close();
          return;
        }
        let v = h.byteLength;
        if (l) {
          let w = c += v;
          l(w);
        }
        g.enqueue(new Uint8Array(h));
      } catch (m) {
        throw p(m), m;
      }
    },
    cancel(g) {
      return p(g), u.return();
    }
  }, {
    highWaterMark: 2
  });
}, zo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ig = zo && typeof ReadableStream == "function", OS = zo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), Ug = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, _S = Ig && Ug(() => {
  let n = !1;
  const i = new Request(xt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), hh = 64 * 1024, wc = Ig && Ug(() => I.isReadableStream(new Response("").body)), xo = {
  stream: wc && ((n) => n.body)
};
zo && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !xo[i] && (xo[i] = I.isFunction(n[i]) ? (l) => l[i]() : (l, o) => {
      throw new Ce(`Response type '${i}' is not supported`, Ce.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const IS = async (n) => {
  if (n == null)
    return 0;
  if (I.isBlob(n))
    return n.size;
  if (I.isSpecCompliantForm(n))
    return (await new Request(xt.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (I.isArrayBufferView(n) || I.isArrayBuffer(n))
    return n.byteLength;
  if (I.isURLSearchParams(n) && (n = n + ""), I.isString(n))
    return (await OS(n)).byteLength;
}, US = async (n, i) => {
  const l = I.toFiniteNumber(n.getContentLength());
  return l ?? IS(i);
}, LS = zo && (async (n) => {
  let {
    url: i,
    method: l,
    data: o,
    signal: u,
    cancelToken: c,
    timeout: d,
    onDownloadProgress: p,
    onUploadProgress: g,
    responseType: m,
    headers: h,
    withCredentials: v = "same-origin",
    fetchOptions: w
  } = _g(n);
  m = m ? (m + "").toLowerCase() : "text";
  let x = zS([u, c && c.toAbortSignal()], d), k;
  const z = x && x.unsubscribe && (() => {
    x.unsubscribe();
  });
  let L;
  try {
    if (g && _S && l !== "get" && l !== "head" && (L = await US(h, o)) !== 0) {
      let J = new Request(i, {
        method: "POST",
        body: o,
        duplex: "half"
      }), U;
      if (I.isFormData(o) && (U = J.headers.get("content-type")) && h.setContentType(U), J.body) {
        const [le, Y] = fh(
          L,
          So(dh(g))
        );
        o = mh(J.body, hh, le, Y);
      }
    }
    I.isString(v) || (v = v ? "include" : "omit");
    const q = "credentials" in Request.prototype;
    k = new Request(i, {
      ...w,
      signal: x,
      method: l.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: q ? v : void 0
    });
    let K = await fetch(k, w);
    const j = wc && (m === "stream" || m === "response");
    if (wc && (p || j && z)) {
      const J = {};
      ["status", "statusText", "headers"].forEach((pe) => {
        J[pe] = K[pe];
      });
      const U = I.toFiniteNumber(K.headers.get("content-length")), [le, Y] = p && fh(
        U,
        So(dh(p), !0)
      ) || [];
      K = new Response(
        mh(K.body, hh, le, () => {
          Y && Y(), z && z();
        }),
        J
      );
    }
    m = m || "text";
    let se = await xo[I.findKey(xo, m) || "text"](K, n);
    return !j && z && z(), await new Promise((J, U) => {
      Mg(J, U, {
        data: se,
        headers: _t.from(K.headers),
        status: K.status,
        statusText: K.statusText,
        config: n,
        request: k
      });
    });
  } catch (q) {
    throw z && z(), q && q.name === "TypeError" && /Load failed|fetch/i.test(q.message) ? Object.assign(
      new Ce("Network Error", Ce.ERR_NETWORK, n, k),
      {
        cause: q.cause || q
      }
    ) : Ce.from(q, q && q.code, n, k);
  }
}), Tc = {
  http: Wv,
  xhr: DS,
  fetch: LS
};
I.forEach(Tc, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const gh = (n) => `- ${n}`, qS = (n) => I.isFunction(n) || n === null || n === !1, Lg = {
  getAdapter: (n) => {
    n = I.isArray(n) ? n : [n];
    const { length: i } = n;
    let l, o;
    const u = {};
    for (let c = 0; c < i; c++) {
      l = n[c];
      let d;
      if (o = l, !qS(l) && (o = Tc[(d = String(l)).toLowerCase()], o === void 0))
        throw new Ce(`Unknown adapter '${d}'`);
      if (o)
        break;
      u[d || "#" + c] = o;
    }
    if (!o) {
      const c = Object.entries(u).map(
        ([p, g]) => `adapter ${p} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let d = i ? c.length > 1 ? `since :
` + c.map(gh).join(`
`) : " " + gh(c[0]) : "as no adapter specified";
      throw new Ce(
        "There is no suitable adapter to dispatch the request " + d,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: Tc
};
function ac(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Mi(null, n);
}
function yh(n) {
  return ac(n), n.headers = _t.from(n.headers), n.data = nc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Lg.getAdapter(n.adapter || Xr.adapter)(n).then(function(o) {
    return ac(n), o.data = nc.call(
      n,
      n.transformResponse,
      o
    ), o.headers = _t.from(o.headers), o;
  }, function(o) {
    return Ng(o) || (ac(n), o && o.response && (o.response.data = nc.call(
      n,
      n.transformResponse,
      o.response
    ), o.response.headers = _t.from(o.response.headers))), Promise.reject(o);
  });
}
const qg = "1.10.0", Ro = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, i) => {
  Ro[n] = function(o) {
    return typeof o === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
const bh = {};
Ro.transitional = function(i, l, o) {
  function u(c, d) {
    return "[Axios v" + qg + "] Transitional option '" + c + "'" + d + (o ? ". " + o : "");
  }
  return (c, d, p) => {
    if (i === !1)
      throw new Ce(
        u(d, " has been removed" + (l ? " in " + l : "")),
        Ce.ERR_DEPRECATED
      );
    return l && !bh[d] && (bh[d] = !0, console.warn(
      u(
        d,
        " has been deprecated since v" + l + " and will be removed in the near future"
      )
    )), i ? i(c, d, p) : !0;
  };
};
Ro.spelling = function(i) {
  return (l, o) => (console.warn(`${o} is likely a misspelling of ${i}`), !0);
};
function jS(n, i, l) {
  if (typeof n != "object")
    throw new Ce("options must be an object", Ce.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let u = o.length;
  for (; u-- > 0; ) {
    const c = o[u], d = i[c];
    if (d) {
      const p = n[c], g = p === void 0 || d(p, c, n);
      if (g !== !0)
        throw new Ce("option " + c + " must be " + g, Ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (l !== !0)
      throw new Ce("Unknown option " + c, Ce.ERR_BAD_OPTION);
  }
}
const bo = {
  assertOptions: jS,
  validators: Ro
}, vn = bo.validators;
let Ua = class {
  constructor(i) {
    this.defaults = i || {}, this.interceptors = {
      request: new uh(),
      response: new uh()
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
  async request(i, l) {
    try {
      return await this._request(i, l);
    } catch (o) {
      if (o instanceof Error) {
        let u = {};
        Error.captureStackTrace ? Error.captureStackTrace(u) : u = new Error();
        const c = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? c && !String(o.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + c) : o.stack = c;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(i, l) {
    typeof i == "string" ? (l = l || {}, l.url = i) : l = i || {}, l = La(this.defaults, l);
    const { transitional: o, paramsSerializer: u, headers: c } = l;
    o !== void 0 && bo.assertOptions(o, {
      silentJSONParsing: vn.transitional(vn.boolean),
      forcedJSONParsing: vn.transitional(vn.boolean),
      clarifyTimeoutError: vn.transitional(vn.boolean)
    }, !1), u != null && (I.isFunction(u) ? l.paramsSerializer = {
      serialize: u
    } : bo.assertOptions(u, {
      encode: vn.function,
      serialize: vn.function
    }, !0)), l.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : l.allowAbsoluteUrls = !0), bo.assertOptions(l, {
      baseUrl: vn.spelling("baseURL"),
      withXsrfToken: vn.spelling("withXSRFToken")
    }, !0), l.method = (l.method || this.defaults.method || "get").toLowerCase();
    let d = c && I.merge(
      c.common,
      c[l.method]
    );
    c && I.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (k) => {
        delete c[k];
      }
    ), l.headers = _t.concat(d, c);
    const p = [];
    let g = !0;
    this.interceptors.request.forEach(function(z) {
      typeof z.runWhen == "function" && z.runWhen(l) === !1 || (g = g && z.synchronous, p.unshift(z.fulfilled, z.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(z) {
      m.push(z.fulfilled, z.rejected);
    });
    let h, v = 0, w;
    if (!g) {
      const k = [yh.bind(this), void 0];
      for (k.unshift.apply(k, p), k.push.apply(k, m), w = k.length, h = Promise.resolve(l); v < w; )
        h = h.then(k[v++], k[v++]);
      return h;
    }
    w = p.length;
    let x = l;
    for (v = 0; v < w; ) {
      const k = p[v++], z = p[v++];
      try {
        x = k(x);
      } catch (L) {
        z.call(this, L);
        break;
      }
    }
    try {
      h = yh.call(this, x);
    } catch (k) {
      return Promise.reject(k);
    }
    for (v = 0, w = m.length; v < w; )
      h = h.then(m[v++], m[v++]);
    return h;
  }
  getUri(i) {
    i = La(this.defaults, i);
    const l = Og(i.baseURL, i.url, i.allowAbsoluteUrls);
    return Dg(l, i.params, i.paramsSerializer);
  }
};
I.forEach(["delete", "get", "head", "options"], function(i) {
  Ua.prototype[i] = function(l, o) {
    return this.request(La(o || {}, {
      method: i,
      url: l,
      data: (o || {}).data
    }));
  };
});
I.forEach(["post", "put", "patch"], function(i) {
  function l(o) {
    return function(c, d, p) {
      return this.request(La(p || {}, {
        method: i,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  Ua.prototype[i] = l(), Ua.prototype[i + "Form"] = l(!0);
});
let BS = class jg {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let l;
    this.promise = new Promise(function(c) {
      l = c;
    });
    const o = this;
    this.promise.then((u) => {
      if (!o._listeners) return;
      let c = o._listeners.length;
      for (; c-- > 0; )
        o._listeners[c](u);
      o._listeners = null;
    }), this.promise.then = (u) => {
      let c;
      const d = new Promise((p) => {
        o.subscribe(p), c = p;
      }).then(u);
      return d.cancel = function() {
        o.unsubscribe(c);
      }, d;
    }, i(function(c, d, p) {
      o.reason || (o.reason = new Mi(c, d, p), l(o.reason));
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
    const l = this._listeners.indexOf(i);
    l !== -1 && this._listeners.splice(l, 1);
  }
  toAbortSignal() {
    const i = new AbortController(), l = (o) => {
      i.abort(o);
    };
    return this.subscribe(l), i.signal.unsubscribe = () => this.unsubscribe(l), i.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let i;
    return {
      token: new jg(function(u) {
        i = u;
      }),
      cancel: i
    };
  }
};
function HS(n) {
  return function(l) {
    return n.apply(null, l);
  };
}
function VS(n) {
  return I.isObject(n) && n.isAxiosError === !0;
}
const Ec = {
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
Object.entries(Ec).forEach(([n, i]) => {
  Ec[i] = n;
});
function Bg(n) {
  const i = new Ua(n), l = gg(Ua.prototype.request, i);
  return I.extend(l, Ua.prototype, i, { allOwnKeys: !0 }), I.extend(l, i, null, { allOwnKeys: !0 }), l.create = function(u) {
    return Bg(La(n, u));
  }, l;
}
const _e = Bg(Xr);
_e.Axios = Ua;
_e.CanceledError = Mi;
_e.CancelToken = BS;
_e.isCancel = Ng;
_e.VERSION = qg;
_e.toFormData = Do;
_e.AxiosError = Ce;
_e.Cancel = _e.CanceledError;
_e.all = function(i) {
  return Promise.all(i);
};
_e.spread = HS;
_e.isAxiosError = VS;
_e.mergeConfig = La;
_e.AxiosHeaders = _t;
_e.formToJSON = (n) => Rg(I.isHTMLForm(n) ? new FormData(n) : n);
_e.getAdapter = Lg.getAdapter;
_e.HttpStatusCode = Ec;
_e.default = _e;
const {
  Axios: yC,
  AxiosError: bC,
  CanceledError: vC,
  isCancel: SC,
  CancelToken: xC,
  VERSION: AC,
  all: wC,
  Cancel: TC,
  isAxiosError: EC,
  spread: CC,
  toFormData: kC,
  AxiosHeaders: DC,
  HttpStatusCode: zC,
  formToJSON: RC,
  getAdapter: NC,
  mergeConfig: MC
} = _e;
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QS = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), FS = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, l, o) => o ? o.toUpperCase() : l.toLowerCase()
), vh = (n) => {
  const i = FS(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, Hg = (...n) => n.filter((i, l, o) => !!i && i.trim() !== "" && o.indexOf(i) === l).join(" ").trim(), PS = (n) => {
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
var GS = {
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
const YS = de.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: o,
    className: u = "",
    children: c,
    iconNode: d,
    ...p
  }, g) => de.createElement(
    "svg",
    {
      ref: g,
      ...GS,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: o ? Number(l) * 24 / Number(i) : l,
      className: Hg("lucide", u),
      ...!c && !PS(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([m, h]) => de.createElement(m, h)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = (n, i) => {
  const l = de.forwardRef(
    ({ className: o, ...u }, c) => de.createElement(YS, {
      ref: c,
      iconNode: i,
      className: Hg(
        `lucide-${QS(vh(n))}`,
        `lucide-${n}`,
        o
      ),
      ...u
    })
  );
  return l.displayName = vh(n), l;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XS = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], Vg = Ut("bot", XS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KS = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Qg = Ut("chevron-down", KS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZS = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], JS = Ut("copy", ZS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WS = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], $S = Ut("globe", WS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Fg = Ut("loader-circle", e1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], Sh = Ut("message-circle", t1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n1 = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], a1 = Ut("minimize-2", n1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], r1 = Ut("moon", i1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], o1 = Ut("send", l1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], u1 = Ut("sun", s1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ]
], f1 = Ut("thumbs-down", c1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ]
], p1 = Ut("thumbs-up", d1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], h1 = Ut("user", m1);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], y1 = Ut("x", g1);
function Pg(n) {
  var i, l, o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var u = n.length;
    for (i = 0; i < u; i++) n[i] && (l = Pg(n[i])) && (o && (o += " "), o += l);
  } else for (l in n) n[l] && (o && (o += " "), o += l);
  return o;
}
function Gg() {
  for (var n, i, l = 0, o = "", u = arguments.length; l < u; l++) (n = arguments[l]) && (i = Pg(n)) && (o && (o += " "), o += i);
  return o;
}
const Pc = "-", b1 = (n) => {
  const i = S1(n), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: o
  } = n;
  return {
    getClassGroupId: (d) => {
      const p = d.split(Pc);
      return p[0] === "" && p.length !== 1 && p.shift(), Yg(p, i) || v1(d);
    },
    getConflictingClassGroupIds: (d, p) => {
      const g = l[d] || [];
      return p && o[d] ? [...g, ...o[d]] : g;
    }
  };
}, Yg = (n, i) => {
  if (n.length === 0)
    return i.classGroupId;
  const l = n[0], o = i.nextPart.get(l), u = o ? Yg(n.slice(1), o) : void 0;
  if (u)
    return u;
  if (i.validators.length === 0)
    return;
  const c = n.join(Pc);
  return i.validators.find(({
    validator: d
  }) => d(c))?.classGroupId;
}, xh = /^\[(.+)\]$/, v1 = (n) => {
  if (xh.test(n)) {
    const i = xh.exec(n)[1], l = i?.substring(0, i.indexOf(":"));
    if (l)
      return "arbitrary.." + l;
  }
}, S1 = (n) => {
  const {
    theme: i,
    classGroups: l
  } = n, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const u in l)
    Cc(l[u], o, u, i);
  return o;
}, Cc = (n, i, l, o) => {
  n.forEach((u) => {
    if (typeof u == "string") {
      const c = u === "" ? i : Ah(i, u);
      c.classGroupId = l;
      return;
    }
    if (typeof u == "function") {
      if (x1(u)) {
        Cc(u(o), i, l, o);
        return;
      }
      i.validators.push({
        validator: u,
        classGroupId: l
      });
      return;
    }
    Object.entries(u).forEach(([c, d]) => {
      Cc(d, Ah(i, c), l, o);
    });
  });
}, Ah = (n, i) => {
  let l = n;
  return i.split(Pc).forEach((o) => {
    l.nextPart.has(o) || l.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), l = l.nextPart.get(o);
  }), l;
}, x1 = (n) => n.isThemeGetter, A1 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const u = (c, d) => {
    l.set(c, d), i++, i > n && (i = 0, o = l, l = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let d = l.get(c);
      if (d !== void 0)
        return d;
      if ((d = o.get(c)) !== void 0)
        return u(c, d), d;
    },
    set(c, d) {
      l.has(c) ? l.set(c, d) : u(c, d);
    }
  };
}, kc = "!", Dc = ":", w1 = Dc.length, T1 = (n) => {
  const {
    prefix: i,
    experimentalParseClassName: l
  } = n;
  let o = (u) => {
    const c = [];
    let d = 0, p = 0, g = 0, m;
    for (let k = 0; k < u.length; k++) {
      let z = u[k];
      if (d === 0 && p === 0) {
        if (z === Dc) {
          c.push(u.slice(g, k)), g = k + w1;
          continue;
        }
        if (z === "/") {
          m = k;
          continue;
        }
      }
      z === "[" ? d++ : z === "]" ? d-- : z === "(" ? p++ : z === ")" && p--;
    }
    const h = c.length === 0 ? u : u.substring(g), v = E1(h), w = v !== h, x = m && m > g ? m - g : void 0;
    return {
      modifiers: c,
      hasImportantModifier: w,
      baseClassName: v,
      maybePostfixModifierPosition: x
    };
  };
  if (i) {
    const u = i + Dc, c = o;
    o = (d) => d.startsWith(u) ? c(d.substring(u.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (l) {
    const u = o;
    o = (c) => l({
      className: c,
      parseClassName: u
    });
  }
  return o;
}, E1 = (n) => n.endsWith(kc) ? n.substring(0, n.length - 1) : n.startsWith(kc) ? n.substring(1) : n, C1 = (n) => {
  const i = Object.fromEntries(n.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const u = [];
    let c = [];
    return o.forEach((d) => {
      d[0] === "[" || i[d] ? (u.push(...c.sort(), d), c = []) : c.push(d);
    }), u.push(...c.sort()), u;
  };
}, k1 = (n) => ({
  cache: A1(n.cacheSize),
  parseClassName: T1(n),
  sortModifiers: C1(n),
  ...b1(n)
}), D1 = /\s+/, z1 = (n, i) => {
  const {
    parseClassName: l,
    getClassGroupId: o,
    getConflictingClassGroupIds: u,
    sortModifiers: c
  } = i, d = [], p = n.trim().split(D1);
  let g = "";
  for (let m = p.length - 1; m >= 0; m -= 1) {
    const h = p[m], {
      isExternal: v,
      modifiers: w,
      hasImportantModifier: x,
      baseClassName: k,
      maybePostfixModifierPosition: z
    } = l(h);
    if (v) {
      g = h + (g.length > 0 ? " " + g : g);
      continue;
    }
    let L = !!z, q = o(L ? k.substring(0, z) : k);
    if (!q) {
      if (!L) {
        g = h + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (q = o(k), !q) {
        g = h + (g.length > 0 ? " " + g : g);
        continue;
      }
      L = !1;
    }
    const K = c(w).join(":"), j = x ? K + kc : K, se = j + q;
    if (d.includes(se))
      continue;
    d.push(se);
    const J = u(q, L);
    for (let U = 0; U < J.length; ++U) {
      const le = J[U];
      d.push(j + le);
    }
    g = h + (g.length > 0 ? " " + g : g);
  }
  return g;
};
function R1() {
  let n = 0, i, l, o = "";
  for (; n < arguments.length; )
    (i = arguments[n++]) && (l = Xg(i)) && (o && (o += " "), o += l);
  return o;
}
const Xg = (n) => {
  if (typeof n == "string")
    return n;
  let i, l = "";
  for (let o = 0; o < n.length; o++)
    n[o] && (i = Xg(n[o])) && (l && (l += " "), l += i);
  return l;
};
function N1(n, ...i) {
  let l, o, u, c = d;
  function d(g) {
    const m = i.reduce((h, v) => v(h), n());
    return l = k1(m), o = l.cache.get, u = l.cache.set, c = p, p(g);
  }
  function p(g) {
    const m = o(g);
    if (m)
      return m;
    const h = z1(g, l);
    return u(g, h), h;
  }
  return function() {
    return c(R1.apply(null, arguments));
  };
}
const ut = (n) => {
  const i = (l) => l[n] || [];
  return i.isThemeGetter = !0, i;
}, Kg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Zg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, M1 = /^\d+\/\d+$/, O1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, I1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, U1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, L1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ci = (n) => M1.test(n), Re = (n) => !!n && !Number.isNaN(Number(n)), fa = (n) => !!n && Number.isInteger(Number(n)), ic = (n) => n.endsWith("%") && Re(n.slice(0, -1)), Bn = (n) => O1.test(n), q1 = () => !0, j1 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  _1.test(n) && !I1.test(n)
), Jg = () => !1, B1 = (n) => U1.test(n), H1 = (n) => L1.test(n), V1 = (n) => !ce(n) && !fe(n), Q1 = (n) => Oi(n, ey, Jg), ce = (n) => Kg.test(n), Oa = (n) => Oi(n, ty, j1), rc = (n) => Oi(n, X1, Re), wh = (n) => Oi(n, Wg, Jg), F1 = (n) => Oi(n, $g, H1), so = (n) => Oi(n, ny, B1), fe = (n) => Zg.test(n), Lr = (n) => _i(n, ty), P1 = (n) => _i(n, K1), Th = (n) => _i(n, Wg), G1 = (n) => _i(n, ey), Y1 = (n) => _i(n, $g), uo = (n) => _i(n, ny, !0), Oi = (n, i, l) => {
  const o = Kg.exec(n);
  return o ? o[1] ? i(o[1]) : l(o[2]) : !1;
}, _i = (n, i, l = !1) => {
  const o = Zg.exec(n);
  return o ? o[1] ? i(o[1]) : l : !1;
}, Wg = (n) => n === "position" || n === "percentage", $g = (n) => n === "image" || n === "url", ey = (n) => n === "length" || n === "size" || n === "bg-size", ty = (n) => n === "length", X1 = (n) => n === "number", K1 = (n) => n === "family-name", ny = (n) => n === "shadow", Z1 = () => {
  const n = ut("color"), i = ut("font"), l = ut("text"), o = ut("font-weight"), u = ut("tracking"), c = ut("leading"), d = ut("breakpoint"), p = ut("container"), g = ut("spacing"), m = ut("radius"), h = ut("shadow"), v = ut("inset-shadow"), w = ut("text-shadow"), x = ut("drop-shadow"), k = ut("blur"), z = ut("perspective"), L = ut("aspect"), q = ut("ease"), K = ut("animate"), j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], se = () => [
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
  ], J = () => [...se(), fe, ce], U = () => ["auto", "hidden", "clip", "visible", "scroll"], le = () => ["auto", "contain", "none"], Y = () => [fe, ce, g], pe = () => [Ci, "full", "auto", ...Y()], we = () => [fa, "none", "subgrid", fe, ce], re = () => ["auto", {
    span: ["full", fa, fe, ce]
  }, fa, fe, ce], te = () => [fa, "auto", fe, ce], W = () => ["auto", "min", "max", "fr", fe, ce], ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ie = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], N = () => ["auto", ...Y()], G = () => [Ci, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Y()], P = () => [n, fe, ce], Ee = () => [...se(), Th, wh, {
    position: [fe, ce]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], V = () => ["auto", "cover", "contain", G1, Q1, {
    size: [fe, ce]
  }], ee = () => [ic, Lr, Oa], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    m,
    fe,
    ce
  ], ne = () => ["", Re, Lr, Oa], Se = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Ae = () => [Re, ic, Th, wh], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    k,
    fe,
    ce
  ], Ie = () => ["none", Re, fe, ce], Te = () => ["none", Re, fe, ce], Le = () => [Re, fe, ce], Xe = () => [Ci, "full", ...Y()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Bn],
      breakpoint: [Bn],
      color: [q1],
      container: [Bn],
      "drop-shadow": [Bn],
      ease: ["in", "out", "in-out"],
      font: [V1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Bn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Bn],
      shadow: [Bn],
      spacing: ["px", Re],
      text: [Bn],
      "text-shadow": [Bn],
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
        aspect: ["auto", "square", Ci, ce, fe, L]
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
        columns: [Re, ce, fe, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": j()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": j()
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
        object: J()
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
        overscroll: le()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": le()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": le()
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
        inset: pe()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": pe()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": pe()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: pe()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: pe()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: pe()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: pe()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: pe()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: pe()
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
        z: [fa, "auto", fe, ce]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ci, "full", "auto", p, ...Y()]
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
        flex: [Re, Ci, "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Re, fe, ce]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Re, fe, ce]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [fa, "first", "last", "none", fe, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": we()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: re()
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
        "grid-rows": we()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: re()
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
        "auto-cols": W()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": W()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: Y()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Y()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Y()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ae(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ie(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ie()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ae()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ie(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ie(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ae()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ie(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ie()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Y()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Y()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Y()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Y()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Y()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Y()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Y()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Y()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Y()
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
        "space-x": Y()
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
        "space-y": Y()
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
        size: G()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...G()]
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
          ...G()
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
          ...G()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...G()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...G()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...G()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", l, Lr, Oa]
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
        font: [o, fe, rc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ic, ce]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [P1, ce, i]
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
        tracking: [u, fe, ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Re, "none", fe, rc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          c,
          ...Y()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", fe, ce]
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
        list: ["disc", "decimal", "none", fe, ce]
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
        placeholder: P()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: P()
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
        decoration: [...Se(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Re, "from-font", "auto", fe, Oa]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: P()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Re, "auto", fe, ce]
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
        indent: Y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", fe, ce]
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
        content: ["none", fe, ce]
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
        bg: Ee()
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
        bg: V()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, fa, fe, ce],
          radial: ["", fe, ce],
          conic: [fa, fe, ce]
        }, Y1, F1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: P()
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
        from: P()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: P()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: P()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: A()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": A()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": A()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": A()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": A()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": A()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": A()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": A()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": A()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": A()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": A()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": A()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": A()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": A()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": A()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ne()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ne()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ne()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ne()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ne()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ne()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ne()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ne()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ne()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ne()
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
        "divide-y": ne()
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
        border: [...Se(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Se(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: P()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": P()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": P()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": P()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": P()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": P()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": P()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": P()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": P()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: P()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Se(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Re, fe, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Re, Lr, Oa]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: P()
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
          h,
          uo,
          so
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: P()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", v, uo, so]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": P()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ne()
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
        ring: P()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Re, Oa]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": P()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ne()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": P()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, uo, so]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": P()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Re, fe, ce]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
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
        "mask-linear": [Re]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Ae()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Ae()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": P()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": P()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Ae()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Ae()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": P()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": P()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Ae()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Ae()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": P()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": P()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Ae()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Ae()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": P()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": P()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Ae()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Ae()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": P()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": P()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Ae()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Ae()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": P()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": P()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Ae()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Ae()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": P()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": P()
      }],
      "mask-image-radial": [{
        "mask-radial": [fe, ce]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Ae()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Ae()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": P()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": P()
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
        "mask-radial-at": se()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Re]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Ae()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Ae()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": P()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": P()
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
        mask: Ee()
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
        mask: V()
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
        mask: ["none", fe, ce]
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
          fe,
          ce
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: $()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Re, fe, ce]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Re, fe, ce]
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
          x,
          uo,
          so
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": P()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Re, fe, ce]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Re, fe, ce]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Re, fe, ce]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Re, fe, ce]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Re, fe, ce]
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
          fe,
          ce
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": $()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Re, fe, ce]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Re, fe, ce]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Re, fe, ce]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Re, fe, ce]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Re, fe, ce]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Re, fe, ce]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Re, fe, ce]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Re, fe, ce]
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
        "border-spacing": Y()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Y()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Y()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", fe, ce]
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
        duration: [Re, "initial", fe, ce]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", q, fe, ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Re, fe, ce]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", K, fe, ce]
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
        perspective: [z, fe, ce]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": J()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ie()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ie()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ie()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ie()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Te()
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
        skew: Le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Le()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [fe, ce, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: J()
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
        translate: Xe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Xe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Xe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Xe()
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
        accent: P()
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
        caret: P()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", fe, ce]
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
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
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
        "will-change": ["auto", "scroll", "contents", "transform", fe, ce]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...P()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Re, Lr, Oa, rc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...P()]
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
}, J1 = /* @__PURE__ */ N1(Z1);
function qa(...n) {
  return J1(Gg(n));
}
function ay(n, i) {
  const l = n.replace("#", ""), o = parseInt(l.substr(0, 2), 16), u = parseInt(l.substr(2, 2), 16), c = parseInt(l.substr(4, 2), 16), d = (100 - i) / 100, p = Math.round(o * d), g = Math.round(u * d), m = Math.round(c * d);
  return "#" + (p < 16 ? "0" : "") + p.toString(16) + (g < 16 ? "0" : "") + g.toString(16) + (m < 16 ? "0" : "") + m.toString(16);
}
function W1(n, i) {
  const l = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (l.padRight ? " " : "") + "," + (l.padLeft === !1 ? "" : " ")
  ).trim();
}
const $1 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ex = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, tx = {};
function Eh(n, i) {
  return (tx.jsx ? ex : $1).test(n);
}
const nx = /[ \t\n\f\r]/g;
function ax(n) {
  return typeof n == "object" ? n.type === "text" ? Ch(n.value) : !1 : Ch(n);
}
function Ch(n) {
  return n.replace(nx, "") === "";
}
class Kr {
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
  constructor(i, l, o) {
    this.normal = l, this.property = i, o && (this.space = o);
  }
}
Kr.prototype.normal = {};
Kr.prototype.property = {};
Kr.prototype.space = void 0;
function iy(n, i) {
  const l = {}, o = {};
  for (const u of n)
    Object.assign(l, u.property), Object.assign(o, u.normal);
  return new Kr(l, o, i);
}
function zc(n) {
  return n.toLowerCase();
}
class Lt {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(i, l) {
    this.attribute = l, this.property = i;
  }
}
Lt.prototype.attribute = "";
Lt.prototype.booleanish = !1;
Lt.prototype.boolean = !1;
Lt.prototype.commaOrSpaceSeparated = !1;
Lt.prototype.commaSeparated = !1;
Lt.prototype.defined = !1;
Lt.prototype.mustUseProperty = !1;
Lt.prototype.number = !1;
Lt.prototype.overloadedBoolean = !1;
Lt.prototype.property = "";
Lt.prototype.spaceSeparated = !1;
Lt.prototype.space = void 0;
let ix = 0;
const De = ja(), lt = ja(), Rc = ja(), Z = ja(), Ze = ja(), zi = ja(), Yt = ja();
function ja() {
  return 2 ** ++ix;
}
const Nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: De,
  booleanish: lt,
  commaOrSpaceSeparated: Yt,
  commaSeparated: zi,
  number: Z,
  overloadedBoolean: Rc,
  spaceSeparated: Ze
}, Symbol.toStringTag, { value: "Module" })), lc = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Nc)
);
class Gc extends Lt {
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
  constructor(i, l, o, u) {
    let c = -1;
    if (super(i, l), kh(this, "space", u), typeof o == "number")
      for (; ++c < lc.length; ) {
        const d = lc[c];
        kh(this, lc[c], (o & Nc[d]) === Nc[d]);
      }
  }
}
Gc.prototype.defined = !0;
function kh(n, i, l) {
  l && (n[i] = l);
}
function Ii(n) {
  const i = {}, l = {};
  for (const [o, u] of Object.entries(n.properties)) {
    const c = new Gc(
      o,
      n.transform(n.attributes || {}, o),
      u,
      n.space
    );
    n.mustUseProperty && n.mustUseProperty.includes(o) && (c.mustUseProperty = !0), i[o] = c, l[zc(o)] = o, l[zc(c.attribute)] = o;
  }
  return new Kr(i, l, n.space);
}
const ry = Ii({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: lt,
    ariaAutoComplete: null,
    ariaBusy: lt,
    ariaChecked: lt,
    ariaColCount: Z,
    ariaColIndex: Z,
    ariaColSpan: Z,
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
    ariaLevel: Z,
    ariaLive: null,
    ariaModal: lt,
    ariaMultiLine: lt,
    ariaMultiSelectable: lt,
    ariaOrientation: null,
    ariaOwns: Ze,
    ariaPlaceholder: null,
    ariaPosInSet: Z,
    ariaPressed: lt,
    ariaReadOnly: lt,
    ariaRelevant: null,
    ariaRequired: lt,
    ariaRoleDescription: Ze,
    ariaRowCount: Z,
    ariaRowIndex: Z,
    ariaRowSpan: Z,
    ariaSelected: lt,
    ariaSetSize: Z,
    ariaSort: null,
    ariaValueMax: Z,
    ariaValueMin: Z,
    ariaValueNow: Z,
    ariaValueText: null,
    role: null
  },
  transform(n, i) {
    return i === "role" ? i : "aria-" + i.slice(4).toLowerCase();
  }
});
function ly(n, i) {
  return i in n ? n[i] : i;
}
function oy(n, i) {
  return ly(n, i.toLowerCase());
}
const rx = Ii({
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
    accept: zi,
    acceptCharset: Ze,
    accessKey: Ze,
    action: null,
    allow: null,
    allowFullScreen: De,
    allowPaymentRequest: De,
    allowUserMedia: De,
    alt: null,
    as: null,
    async: De,
    autoCapitalize: null,
    autoComplete: Ze,
    autoFocus: De,
    autoPlay: De,
    blocking: Ze,
    capture: null,
    charSet: null,
    checked: De,
    cite: null,
    className: Ze,
    cols: Z,
    colSpan: null,
    content: null,
    contentEditable: lt,
    controls: De,
    controlsList: Ze,
    coords: Z | zi,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: De,
    defer: De,
    dir: null,
    dirName: null,
    disabled: De,
    download: Rc,
    draggable: lt,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: De,
    formTarget: null,
    headers: Ze,
    height: Z,
    hidden: Rc,
    high: Z,
    href: null,
    hrefLang: null,
    htmlFor: Ze,
    httpEquiv: Ze,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: De,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: De,
    itemId: null,
    itemProp: Ze,
    itemRef: Ze,
    itemScope: De,
    itemType: Ze,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: De,
    low: Z,
    manifest: null,
    max: null,
    maxLength: Z,
    media: null,
    method: null,
    min: null,
    minLength: Z,
    multiple: De,
    muted: De,
    name: null,
    nonce: null,
    noModule: De,
    noValidate: De,
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
    open: De,
    optimum: Z,
    pattern: null,
    ping: Ze,
    placeholder: null,
    playsInline: De,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: De,
    referrerPolicy: null,
    rel: Ze,
    required: De,
    reversed: De,
    rows: Z,
    rowSpan: Z,
    sandbox: Ze,
    scope: null,
    scoped: De,
    seamless: De,
    selected: De,
    shadowRootClonable: De,
    shadowRootDelegatesFocus: De,
    shadowRootMode: null,
    shape: null,
    size: Z,
    sizes: null,
    slot: null,
    span: Z,
    spellCheck: lt,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: Z,
    step: null,
    style: null,
    tabIndex: Z,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: De,
    useMap: null,
    value: lt,
    width: Z,
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
    border: Z,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: Z,
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
    compact: De,
    // Lists. Use CSS to reduce space between items instead
    declare: De,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: Z,
    // `<img>` and `<object>`
    leftMargin: Z,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: Z,
    // `<body>`
    marginWidth: Z,
    // `<body>`
    noResize: De,
    // `<frame>`
    noHref: De,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: De,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: De,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: Z,
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
    topMargin: Z,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: Z,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: De,
    disableRemotePlayback: De,
    prefix: null,
    property: null,
    results: Z,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: oy
}), lx = Ii({
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
    about: Yt,
    accentHeight: Z,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: Z,
    amplitude: Z,
    arabicForm: null,
    ascent: Z,
    attributeName: null,
    attributeType: null,
    azimuth: Z,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: Z,
    by: null,
    calcMode: null,
    capHeight: Z,
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
    descent: Z,
    diffuseConstant: Z,
    direction: null,
    display: null,
    dur: null,
    divisor: Z,
    dominantBaseline: null,
    download: De,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: Z,
    enableBackground: null,
    end: null,
    event: null,
    exponent: Z,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: Z,
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
    g1: zi,
    g2: zi,
    glyphName: zi,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: Z,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: Z,
    horizOriginX: Z,
    horizOriginY: Z,
    id: null,
    ideographic: Z,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: Z,
    k: Z,
    k1: Z,
    k2: Z,
    k3: Z,
    k4: Z,
    kernelMatrix: Yt,
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
    limitingConeAngle: Z,
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
    mediaSize: Z,
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
    overlinePosition: Z,
    overlineThickness: Z,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: Z,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Ze,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: Z,
    pointsAtY: Z,
    pointsAtZ: Z,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Yt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Yt,
    rev: Yt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Yt,
    requiredFeatures: Yt,
    requiredFonts: Yt,
    requiredFormats: Yt,
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
    specularConstant: Z,
    specularExponent: Z,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: Z,
    strikethroughThickness: Z,
    string: null,
    stroke: null,
    strokeDashArray: Yt,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: Z,
    strokeOpacity: Z,
    strokeWidth: null,
    style: null,
    surfaceScale: Z,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Yt,
    tabIndex: Z,
    tableValues: null,
    target: null,
    targetX: Z,
    targetY: Z,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Yt,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: Z,
    underlineThickness: Z,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: Z,
    values: null,
    vAlphabetic: Z,
    vMathematical: Z,
    vectorEffect: null,
    vHanging: Z,
    vIdeographic: Z,
    version: null,
    vertAdvY: Z,
    vertOriginX: Z,
    vertOriginY: Z,
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
    xHeight: Z,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: ly
}), sy = Ii({
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
}), uy = Ii({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: oy
}), cy = Ii({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(n, i) {
    return "xml:" + i.slice(3).toLowerCase();
  }
}), ox = {
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
}, sx = /[A-Z]/g, Dh = /-[a-z]/g, ux = /^data[-\w.:]+$/i;
function cx(n, i) {
  const l = zc(i);
  let o = i, u = Lt;
  if (l in n.normal)
    return n.property[n.normal[l]];
  if (l.length > 4 && l.slice(0, 4) === "data" && ux.test(i)) {
    if (i.charAt(4) === "-") {
      const c = i.slice(5).replace(Dh, dx);
      o = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!Dh.test(c)) {
        let d = c.replace(sx, fx);
        d.charAt(0) !== "-" && (d = "-" + d), i = "data" + d;
      }
    }
    u = Gc;
  }
  return new u(o, i);
}
function fx(n) {
  return "-" + n.toLowerCase();
}
function dx(n) {
  return n.charAt(1).toUpperCase();
}
const px = iy([ry, rx, sy, uy, cy], "html"), Yc = iy([ry, lx, sy, uy, cy], "svg");
function mx(n) {
  return n.join(" ").trim();
}
var ki = {}, oc, zh;
function hx() {
  if (zh) return oc;
  zh = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, l = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, u = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, d = /^[;\s]*/, p = /^\s+|\s+$/g, g = `
`, m = "/", h = "*", v = "", w = "comment", x = "declaration";
  oc = function(z, L) {
    if (typeof z != "string")
      throw new TypeError("First argument must be a string");
    if (!z) return [];
    L = L || {};
    var q = 1, K = 1;
    function j(W) {
      var ae = W.match(i);
      ae && (q += ae.length);
      var ie = W.lastIndexOf(g);
      K = ~ie ? W.length - ie : K + W.length;
    }
    function se() {
      var W = { line: q, column: K };
      return function(ae) {
        return ae.position = new J(W), Y(), ae;
      };
    }
    function J(W) {
      this.start = W, this.end = { line: q, column: K }, this.source = L.source;
    }
    J.prototype.content = z;
    function U(W) {
      var ae = new Error(
        L.source + ":" + q + ":" + K + ": " + W
      );
      if (ae.reason = W, ae.filename = L.source, ae.line = q, ae.column = K, ae.source = z, !L.silent) throw ae;
    }
    function le(W) {
      var ae = W.exec(z);
      if (ae) {
        var ie = ae[0];
        return j(ie), z = z.slice(ie.length), ae;
      }
    }
    function Y() {
      le(l);
    }
    function pe(W) {
      var ae;
      for (W = W || []; ae = we(); )
        ae !== !1 && W.push(ae);
      return W;
    }
    function we() {
      var W = se();
      if (!(m != z.charAt(0) || h != z.charAt(1))) {
        for (var ae = 2; v != z.charAt(ae) && (h != z.charAt(ae) || m != z.charAt(ae + 1)); )
          ++ae;
        if (ae += 2, v === z.charAt(ae - 1))
          return U("End of comment missing");
        var ie = z.slice(2, ae - 2);
        return K += 2, j(ie), z = z.slice(ae), K += 2, W({
          type: w,
          comment: ie
        });
      }
    }
    function re() {
      var W = se(), ae = le(o);
      if (ae) {
        if (we(), !le(u)) return U("property missing ':'");
        var ie = le(c), N = W({
          type: x,
          property: k(ae[0].replace(n, v)),
          value: ie ? k(ie[0].replace(n, v)) : v
        });
        return le(d), N;
      }
    }
    function te() {
      var W = [];
      pe(W);
      for (var ae; ae = re(); )
        ae !== !1 && (W.push(ae), pe(W));
      return W;
    }
    return Y(), te();
  };
  function k(z) {
    return z ? z.replace(p, v) : v;
  }
  return oc;
}
var Rh;
function gx() {
  if (Rh) return ki;
  Rh = 1;
  var n = ki && ki.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(ki, "__esModule", { value: !0 }), ki.default = l;
  var i = n(hx());
  function l(o, u) {
    var c = null;
    if (!o || typeof o != "string")
      return c;
    var d = (0, i.default)(o), p = typeof u == "function";
    return d.forEach(function(g) {
      if (g.type === "declaration") {
        var m = g.property, h = g.value;
        p ? u(m, h, g) : h && (c = c || {}, c[m] = h);
      }
    }), c;
  }
  return ki;
}
var qr = {}, Nh;
function yx() {
  if (Nh) return qr;
  Nh = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, l = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, u = /^-(ms)-/, c = function(m) {
    return !m || l.test(m) || n.test(m);
  }, d = function(m, h) {
    return h.toUpperCase();
  }, p = function(m, h) {
    return "".concat(h, "-");
  }, g = function(m, h) {
    return h === void 0 && (h = {}), c(m) ? m : (m = m.toLowerCase(), h.reactCompat ? m = m.replace(u, p) : m = m.replace(o, p), m.replace(i, d));
  };
  return qr.camelCase = g, qr;
}
var jr, Mh;
function bx() {
  if (Mh) return jr;
  Mh = 1;
  var n = jr && jr.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  }, i = n(gx()), l = yx();
  function o(u, c) {
    var d = {};
    return !u || typeof u != "string" || (0, i.default)(u, function(p, g) {
      p && g && (d[(0, l.camelCase)(p, c)] = g);
    }), d;
  }
  return o.default = o, jr = o, jr;
}
var vx = bx();
const Sx = /* @__PURE__ */ Bc(vx), fy = dy("end"), Xc = dy("start");
function dy(n) {
  return i;
  function i(l) {
    const o = l && l.position && l.position[n] || {};
    if (typeof o.line == "number" && o.line > 0 && typeof o.column == "number" && o.column > 0)
      return {
        line: o.line,
        column: o.column,
        offset: typeof o.offset == "number" && o.offset > -1 ? o.offset : void 0
      };
  }
}
function xx(n) {
  const i = Xc(n), l = fy(n);
  if (i && l)
    return { start: i, end: l };
}
function Vr(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? Oh(n.position) : "start" in n || "end" in n ? Oh(n) : "line" in n || "column" in n ? Mc(n) : "";
}
function Mc(n) {
  return _h(n && n.line) + ":" + _h(n && n.column);
}
function Oh(n) {
  return Mc(n && n.start) + "-" + Mc(n && n.end);
}
function _h(n) {
  return n && typeof n == "number" ? n : 1;
}
class At extends Error {
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
  constructor(i, l, o) {
    super(), typeof l == "string" && (o = l, l = void 0);
    let u = "", c = {}, d = !1;
    if (l && ("line" in l && "column" in l ? c = { place: l } : "start" in l && "end" in l ? c = { place: l } : "type" in l ? c = {
      ancestors: [l],
      place: l.position
    } : c = { ...l }), typeof i == "string" ? u = i : !c.cause && i && (d = !0, u = i.message, c.cause = i), !c.ruleId && !c.source && typeof o == "string") {
      const g = o.indexOf(":");
      g === -1 ? c.ruleId = o : (c.source = o.slice(0, g), c.ruleId = o.slice(g + 1));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const g = c.ancestors[c.ancestors.length - 1];
      g && (c.place = g.position);
    }
    const p = c.place && "start" in c.place ? c.place.start : c.place;
    this.ancestors = c.ancestors || void 0, this.cause = c.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file, this.message = u, this.line = p ? p.line : void 0, this.name = Vr(c.place) || "1:1", this.place = c.place || void 0, this.reason = this.message, this.ruleId = c.ruleId || void 0, this.source = c.source || void 0, this.stack = d && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
At.prototype.file = "";
At.prototype.name = "";
At.prototype.reason = "";
At.prototype.message = "";
At.prototype.stack = "";
At.prototype.column = void 0;
At.prototype.line = void 0;
At.prototype.ancestors = void 0;
At.prototype.cause = void 0;
At.prototype.fatal = void 0;
At.prototype.place = void 0;
At.prototype.ruleId = void 0;
At.prototype.source = void 0;
const Kc = {}.hasOwnProperty, Ax = /* @__PURE__ */ new Map(), wx = /[A-Z]/g, Tx = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Ex = /* @__PURE__ */ new Set(["td", "th"]), py = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Cx(n, i) {
  if (!i || i.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const l = i.filePath || void 0;
  let o;
  if (i.development) {
    if (typeof i.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    o = _x(l, i.jsxDEV);
  } else {
    if (typeof i.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof i.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    o = Ox(l, i.jsx, i.jsxs);
  }
  const u = {
    Fragment: i.Fragment,
    ancestors: [],
    components: i.components || {},
    create: o,
    elementAttributeNameCase: i.elementAttributeNameCase || "react",
    evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
    filePath: l,
    ignoreInvalidStyle: i.ignoreInvalidStyle || !1,
    passKeys: i.passKeys !== !1,
    passNode: i.passNode || !1,
    schema: i.space === "svg" ? Yc : px,
    stylePropertyNameCase: i.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
  }, c = my(u, n, void 0);
  return c && typeof c != "string" ? c : u.create(
    n,
    u.Fragment,
    { children: c || void 0 },
    void 0
  );
}
function my(n, i, l) {
  if (i.type === "element")
    return kx(n, i, l);
  if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
    return Dx(n, i);
  if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
    return Rx(n, i, l);
  if (i.type === "mdxjsEsm")
    return zx(n, i);
  if (i.type === "root")
    return Nx(n, i, l);
  if (i.type === "text")
    return Mx(n, i);
}
function kx(n, i, l) {
  const o = n.schema;
  let u = o;
  i.tagName.toLowerCase() === "svg" && o.space === "html" && (u = Yc, n.schema = u), n.ancestors.push(i);
  const c = gy(n, i.tagName, !1), d = Ix(n, i);
  let p = Jc(n, i);
  return Tx.has(i.tagName) && (p = p.filter(function(g) {
    return typeof g == "string" ? !ax(g) : !0;
  })), hy(n, d, c, i), Zc(d, p), n.ancestors.pop(), n.schema = o, n.create(i, c, d, l);
}
function Dx(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const o = i.data.estree.body[0];
    return o.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(o.expression);
  }
  Gr(n, i.position);
}
function zx(n, i) {
  if (i.data && i.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(i.data.estree)
    );
  Gr(n, i.position);
}
function Rx(n, i, l) {
  const o = n.schema;
  let u = o;
  i.name === "svg" && o.space === "html" && (u = Yc, n.schema = u), n.ancestors.push(i);
  const c = i.name === null ? n.Fragment : gy(n, i.name, !0), d = Ux(n, i), p = Jc(n, i);
  return hy(n, d, c, i), Zc(d, p), n.ancestors.pop(), n.schema = o, n.create(i, c, d, l);
}
function Nx(n, i, l) {
  const o = {};
  return Zc(o, Jc(n, i)), n.create(i, n.Fragment, o, l);
}
function Mx(n, i) {
  return i.value;
}
function hy(n, i, l, o) {
  typeof l != "string" && l !== n.Fragment && n.passNode && (i.node = o);
}
function Zc(n, i) {
  if (i.length > 0) {
    const l = i.length > 1 ? i : i[0];
    l && (n.children = l);
  }
}
function Ox(n, i, l) {
  return o;
  function o(u, c, d, p) {
    const m = Array.isArray(d.children) ? l : i;
    return p ? m(c, d, p) : m(c, d);
  }
}
function _x(n, i) {
  return l;
  function l(o, u, c, d) {
    const p = Array.isArray(c.children), g = Xc(o);
    return i(
      u,
      c,
      d,
      p,
      {
        columnNumber: g ? g.column - 1 : void 0,
        fileName: n,
        lineNumber: g ? g.line : void 0
      },
      void 0
    );
  }
}
function Ix(n, i) {
  const l = {};
  let o, u;
  for (u in i.properties)
    if (u !== "children" && Kc.call(i.properties, u)) {
      const c = Lx(n, u, i.properties[u]);
      if (c) {
        const [d, p] = c;
        n.tableCellAlignToStyle && d === "align" && typeof p == "string" && Ex.has(i.tagName) ? o = p : l[d] = p;
      }
    }
  if (o) {
    const c = (
      /** @type {Style} */
      l.style || (l.style = {})
    );
    c[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = o;
  }
  return l;
}
function Ux(n, i) {
  const l = {};
  for (const o of i.attributes)
    if (o.type === "mdxJsxExpressionAttribute")
      if (o.data && o.data.estree && n.evaluater) {
        const c = o.data.estree.body[0];
        c.type;
        const d = c.expression;
        d.type;
        const p = d.properties[0];
        p.type, Object.assign(
          l,
          n.evaluater.evaluateExpression(p.argument)
        );
      } else
        Gr(n, i.position);
    else {
      const u = o.name;
      let c;
      if (o.value && typeof o.value == "object")
        if (o.value.data && o.value.data.estree && n.evaluater) {
          const p = o.value.data.estree.body[0];
          p.type, c = n.evaluater.evaluateExpression(p.expression);
        } else
          Gr(n, i.position);
      else
        c = o.value === null ? !0 : o.value;
      l[u] = /** @type {Props[keyof Props]} */
      c;
    }
  return l;
}
function Jc(n, i) {
  const l = [];
  let o = -1;
  const u = n.passKeys ? /* @__PURE__ */ new Map() : Ax;
  for (; ++o < i.children.length; ) {
    const c = i.children[o];
    let d;
    if (n.passKeys) {
      const g = c.type === "element" ? c.tagName : c.type === "mdxJsxFlowElement" || c.type === "mdxJsxTextElement" ? c.name : void 0;
      if (g) {
        const m = u.get(g) || 0;
        d = g + "-" + m, u.set(g, m + 1);
      }
    }
    const p = my(n, c, d);
    p !== void 0 && l.push(p);
  }
  return l;
}
function Lx(n, i, l) {
  const o = cx(n.schema, i);
  if (!(l == null || typeof l == "number" && Number.isNaN(l))) {
    if (Array.isArray(l) && (l = o.commaSeparated ? W1(l) : mx(l)), o.property === "style") {
      let u = typeof l == "object" ? l : qx(n, String(l));
      return n.stylePropertyNameCase === "css" && (u = jx(u)), ["style", u];
    }
    return [
      n.elementAttributeNameCase === "react" && o.space ? ox[o.property] || o.property : o.attribute,
      l
    ];
  }
}
function qx(n, i) {
  try {
    return Sx(i, { reactCompat: !0 });
  } catch (l) {
    if (n.ignoreInvalidStyle)
      return {};
    const o = (
      /** @type {Error} */
      l
    ), u = new At("Cannot parse `style` attribute", {
      ancestors: n.ancestors,
      cause: o,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw u.file = n.filePath || void 0, u.url = py + "#cannot-parse-style-attribute", u;
  }
}
function gy(n, i, l) {
  let o;
  if (!l)
    o = { type: "Literal", value: i };
  else if (i.includes(".")) {
    const u = i.split(".");
    let c = -1, d;
    for (; ++c < u.length; ) {
      const p = Eh(u[c]) ? { type: "Identifier", name: u[c] } : { type: "Literal", value: u[c] };
      d = d ? {
        type: "MemberExpression",
        object: d,
        property: p,
        computed: !!(c && p.type === "Literal"),
        optional: !1
      } : p;
    }
    o = d;
  } else
    o = Eh(i) && !/^[a-z]/.test(i) ? { type: "Identifier", name: i } : { type: "Literal", value: i };
  if (o.type === "Literal") {
    const u = (
      /** @type {string | number} */
      o.value
    );
    return Kc.call(n.components, u) ? n.components[u] : u;
  }
  if (n.evaluater)
    return n.evaluater.evaluateExpression(o);
  Gr(n);
}
function Gr(n, i) {
  const l = new At(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: n.ancestors,
      place: i,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw l.file = n.filePath || void 0, l.url = py + "#cannot-handle-mdx-estrees-without-createevaluater", l;
}
function jx(n) {
  const i = {};
  let l;
  for (l in n)
    Kc.call(n, l) && (i[Bx(l)] = n[l]);
  return i;
}
function Bx(n) {
  let i = n.replace(wx, Hx);
  return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
}
function Hx(n) {
  return "-" + n.toLowerCase();
}
const sc = {
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
}, Vx = {};
function Qx(n, i) {
  const l = Vx, o = typeof l.includeImageAlt == "boolean" ? l.includeImageAlt : !0, u = typeof l.includeHtml == "boolean" ? l.includeHtml : !0;
  return yy(n, o, u);
}
function yy(n, i, l) {
  if (Fx(n)) {
    if ("value" in n)
      return n.type === "html" && !l ? "" : n.value;
    if (i && "alt" in n && n.alt)
      return n.alt;
    if ("children" in n)
      return Ih(n.children, i, l);
  }
  return Array.isArray(n) ? Ih(n, i, l) : "";
}
function Ih(n, i, l) {
  const o = [];
  let u = -1;
  for (; ++u < n.length; )
    o[u] = yy(n[u], i, l);
  return o.join("");
}
function Fx(n) {
  return !!(n && typeof n == "object");
}
const Uh = document.createElement("i");
function Wc(n) {
  const i = "&" + n + ";";
  Uh.innerHTML = i;
  const l = Uh.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    l.charCodeAt(l.length - 1) === 59 && n !== "semi" || l === i ? !1 : l
  );
}
function An(n, i, l, o) {
  const u = n.length;
  let c = 0, d;
  if (i < 0 ? i = -i > u ? 0 : u + i : i = i > u ? u : i, l = l > 0 ? l : 0, o.length < 1e4)
    d = Array.from(o), d.unshift(i, l), n.splice(...d);
  else
    for (l && n.splice(i, l); c < o.length; )
      d = o.slice(c, c + 1e4), d.unshift(i, 0), n.splice(...d), c += 1e4, i += 1e4;
}
function ln(n, i) {
  return n.length > 0 ? (An(n, n.length, 0, i), n) : i;
}
const Lh = {}.hasOwnProperty;
function Px(n) {
  const i = {};
  let l = -1;
  for (; ++l < n.length; )
    Gx(i, n[l]);
  return i;
}
function Gx(n, i) {
  let l;
  for (l in i) {
    const u = (Lh.call(n, l) ? n[l] : void 0) || (n[l] = {}), c = i[l];
    let d;
    if (c)
      for (d in c) {
        Lh.call(u, d) || (u[d] = []);
        const p = c[d];
        Yx(
          // @ts-expect-error Looks like a list.
          u[d],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function Yx(n, i) {
  let l = -1;
  const o = [];
  for (; ++l < i.length; )
    (i[l].add === "after" ? n : o).push(i[l]);
  An(n, 0, 0, o);
}
function by(n, i) {
  const l = Number.parseInt(n, i);
  return (
    // C0 except for HT, LF, FF, CR, space.
    l < 9 || l === 11 || l > 13 && l < 32 || // Control character (DEL) of C0, and C1 controls.
    l > 126 && l < 160 || // Lone high surrogates and low surrogates.
    l > 55295 && l < 57344 || // Noncharacters.
    l > 64975 && l < 65008 || /* eslint-disable no-bitwise */
    (l & 65535) === 65535 || (l & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    l > 1114111 ? "�" : String.fromCodePoint(l)
  );
}
function Ri(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const xn = pa(/[A-Za-z]/), Xt = pa(/[\dA-Za-z]/), Xx = pa(/[#-'*+\--9=?A-Z^-~]/);
function Oc(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const _c = pa(/\d/), Kx = pa(/[\dA-Fa-f]/), Zx = pa(/[!-/:-@[-`{-~]/);
function xe(n) {
  return n !== null && n < -2;
}
function It(n) {
  return n !== null && (n < 0 || n === 32);
}
function Be(n) {
  return n === -2 || n === -1 || n === 32;
}
const Jx = pa(new RegExp("\\p{P}|\\p{S}", "u")), Wx = pa(/\s/);
function pa(n) {
  return i;
  function i(l) {
    return l !== null && l > -1 && n.test(String.fromCharCode(l));
  }
}
function Ui(n) {
  const i = [];
  let l = -1, o = 0, u = 0;
  for (; ++l < n.length; ) {
    const c = n.charCodeAt(l);
    let d = "";
    if (c === 37 && Xt(n.charCodeAt(l + 1)) && Xt(n.charCodeAt(l + 2)))
      u = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) || (d = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const p = n.charCodeAt(l + 1);
      c < 56320 && p > 56319 && p < 57344 ? (d = String.fromCharCode(c, p), u = 1) : d = "�";
    } else
      d = String.fromCharCode(c);
    d && (i.push(n.slice(o, l), encodeURIComponent(d)), o = l + u + 1, d = ""), u && (l += u, u = 0);
  }
  return i.join("") + n.slice(o);
}
function Je(n, i, l, o) {
  const u = o ? o - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return d;
  function d(g) {
    return Be(g) ? (n.enter(l), p(g)) : i(g);
  }
  function p(g) {
    return Be(g) && c++ < u ? (n.consume(g), p) : (n.exit(l), i(g));
  }
}
const $x = {
  tokenize: eA
};
function eA(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, o, u);
  let l;
  return i;
  function o(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return n.enter("lineEnding"), n.consume(p), n.exit("lineEnding"), Je(n, i, "linePrefix");
  }
  function u(p) {
    return n.enter("paragraph"), c(p);
  }
  function c(p) {
    const g = n.enter("chunkText", {
      contentType: "text",
      previous: l
    });
    return l && (l.next = g), l = g, d(p);
  }
  function d(p) {
    if (p === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(p);
      return;
    }
    return xe(p) ? (n.consume(p), n.exit("chunkText"), c) : (n.consume(p), d);
  }
}
const tA = {
  tokenize: nA
}, qh = {
  tokenize: aA
};
function nA(n) {
  const i = this, l = [];
  let o = 0, u, c, d;
  return p;
  function p(j) {
    if (o < l.length) {
      const se = l[o];
      return i.containerState = se[1], n.attempt(se[0].continuation, g, m)(j);
    }
    return m(j);
  }
  function g(j) {
    if (o++, i.containerState._closeFlow) {
      i.containerState._closeFlow = void 0, u && K();
      const se = i.events.length;
      let J = se, U;
      for (; J--; )
        if (i.events[J][0] === "exit" && i.events[J][1].type === "chunkFlow") {
          U = i.events[J][1].end;
          break;
        }
      q(o);
      let le = se;
      for (; le < i.events.length; )
        i.events[le][1].end = {
          ...U
        }, le++;
      return An(i.events, J + 1, 0, i.events.slice(se)), i.events.length = le, m(j);
    }
    return p(j);
  }
  function m(j) {
    if (o === l.length) {
      if (!u)
        return w(j);
      if (u.currentConstruct && u.currentConstruct.concrete)
        return k(j);
      i.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
    }
    return i.containerState = {}, n.check(qh, h, v)(j);
  }
  function h(j) {
    return u && K(), q(o), w(j);
  }
  function v(j) {
    return i.parser.lazy[i.now().line] = o !== l.length, d = i.now().offset, k(j);
  }
  function w(j) {
    return i.containerState = {}, n.attempt(qh, x, k)(j);
  }
  function x(j) {
    return o++, l.push([i.currentConstruct, i.containerState]), w(j);
  }
  function k(j) {
    if (j === null) {
      u && K(), q(0), n.consume(j);
      return;
    }
    return u = u || i.parser.flow(i.now()), n.enter("chunkFlow", {
      _tokenizer: u,
      contentType: "flow",
      previous: c
    }), z(j);
  }
  function z(j) {
    if (j === null) {
      L(n.exit("chunkFlow"), !0), q(0), n.consume(j);
      return;
    }
    return xe(j) ? (n.consume(j), L(n.exit("chunkFlow")), o = 0, i.interrupt = void 0, p) : (n.consume(j), z);
  }
  function L(j, se) {
    const J = i.sliceStream(j);
    if (se && J.push(null), j.previous = c, c && (c.next = j), c = j, u.defineSkip(j.start), u.write(J), i.parser.lazy[j.start.line]) {
      let U = u.events.length;
      for (; U--; )
        if (
          // The token starts before the line ending…
          u.events[U][1].start.offset < d && // …and either is not ended yet…
          (!u.events[U][1].end || // …or ends after it.
          u.events[U][1].end.offset > d)
        )
          return;
      const le = i.events.length;
      let Y = le, pe, we;
      for (; Y--; )
        if (i.events[Y][0] === "exit" && i.events[Y][1].type === "chunkFlow") {
          if (pe) {
            we = i.events[Y][1].end;
            break;
          }
          pe = !0;
        }
      for (q(o), U = le; U < i.events.length; )
        i.events[U][1].end = {
          ...we
        }, U++;
      An(i.events, Y + 1, 0, i.events.slice(le)), i.events.length = U;
    }
  }
  function q(j) {
    let se = l.length;
    for (; se-- > j; ) {
      const J = l[se];
      i.containerState = J[1], J[0].exit.call(i, n);
    }
    l.length = j;
  }
  function K() {
    u.write([null]), c = void 0, u = void 0, i.containerState._closeFlow = void 0;
  }
}
function aA(n, i, l) {
  return Je(n, n.attempt(this.parser.constructs.document, i, l), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function jh(n) {
  if (n === null || It(n) || Wx(n))
    return 1;
  if (Jx(n))
    return 2;
}
function $c(n, i, l) {
  const o = [];
  let u = -1;
  for (; ++u < n.length; ) {
    const c = n[u].resolveAll;
    c && !o.includes(c) && (i = c(i, l), o.push(c));
  }
  return i;
}
const Ic = {
  name: "attention",
  resolveAll: iA,
  tokenize: rA
};
function iA(n, i) {
  let l = -1, o, u, c, d, p, g, m, h;
  for (; ++l < n.length; )
    if (n[l][0] === "enter" && n[l][1].type === "attentionSequence" && n[l][1]._close) {
      for (o = l; o--; )
        if (n[o][0] === "exit" && n[o][1].type === "attentionSequence" && n[o][1]._open && // If the markers are the same:
        i.sliceSerialize(n[o][1]).charCodeAt(0) === i.sliceSerialize(n[l][1]).charCodeAt(0)) {
          if ((n[o][1]._close || n[l][1]._open) && (n[l][1].end.offset - n[l][1].start.offset) % 3 && !((n[o][1].end.offset - n[o][1].start.offset + n[l][1].end.offset - n[l][1].start.offset) % 3))
            continue;
          g = n[o][1].end.offset - n[o][1].start.offset > 1 && n[l][1].end.offset - n[l][1].start.offset > 1 ? 2 : 1;
          const v = {
            ...n[o][1].end
          }, w = {
            ...n[l][1].start
          };
          Bh(v, -g), Bh(w, g), d = {
            type: g > 1 ? "strongSequence" : "emphasisSequence",
            start: v,
            end: {
              ...n[o][1].end
            }
          }, p = {
            type: g > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...n[l][1].start
            },
            end: w
          }, c = {
            type: g > 1 ? "strongText" : "emphasisText",
            start: {
              ...n[o][1].end
            },
            end: {
              ...n[l][1].start
            }
          }, u = {
            type: g > 1 ? "strong" : "emphasis",
            start: {
              ...d.start
            },
            end: {
              ...p.end
            }
          }, n[o][1].end = {
            ...d.start
          }, n[l][1].start = {
            ...p.end
          }, m = [], n[o][1].end.offset - n[o][1].start.offset && (m = ln(m, [["enter", n[o][1], i], ["exit", n[o][1], i]])), m = ln(m, [["enter", u, i], ["enter", d, i], ["exit", d, i], ["enter", c, i]]), m = ln(m, $c(i.parser.constructs.insideSpan.null, n.slice(o + 1, l), i)), m = ln(m, [["exit", c, i], ["enter", p, i], ["exit", p, i], ["exit", u, i]]), n[l][1].end.offset - n[l][1].start.offset ? (h = 2, m = ln(m, [["enter", n[l][1], i], ["exit", n[l][1], i]])) : h = 0, An(n, o - 1, l - o + 3, m), l = o + m.length - h - 2;
          break;
        }
    }
  for (l = -1; ++l < n.length; )
    n[l][1].type === "attentionSequence" && (n[l][1].type = "data");
  return n;
}
function rA(n, i) {
  const l = this.parser.constructs.attentionMarkers.null, o = this.previous, u = jh(o);
  let c;
  return d;
  function d(g) {
    return c = g, n.enter("attentionSequence"), p(g);
  }
  function p(g) {
    if (g === c)
      return n.consume(g), p;
    const m = n.exit("attentionSequence"), h = jh(g), v = !h || h === 2 && u || l.includes(g), w = !u || u === 2 && h || l.includes(o);
    return m._open = !!(c === 42 ? v : v && (u || !w)), m._close = !!(c === 42 ? w : w && (h || !v)), i(g);
  }
}
function Bh(n, i) {
  n.column += i, n.offset += i, n._bufferIndex += i;
}
const lA = {
  name: "autolink",
  tokenize: oA
};
function oA(n, i, l) {
  let o = 0;
  return u;
  function u(x) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), c;
  }
  function c(x) {
    return xn(x) ? (n.consume(x), d) : x === 64 ? l(x) : m(x);
  }
  function d(x) {
    return x === 43 || x === 45 || x === 46 || Xt(x) ? (o = 1, p(x)) : m(x);
  }
  function p(x) {
    return x === 58 ? (n.consume(x), o = 0, g) : (x === 43 || x === 45 || x === 46 || Xt(x)) && o++ < 32 ? (n.consume(x), p) : (o = 0, m(x));
  }
  function g(x) {
    return x === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), i) : x === null || x === 32 || x === 60 || Oc(x) ? l(x) : (n.consume(x), g);
  }
  function m(x) {
    return x === 64 ? (n.consume(x), h) : Xx(x) ? (n.consume(x), m) : l(x);
  }
  function h(x) {
    return Xt(x) ? v(x) : l(x);
  }
  function v(x) {
    return x === 46 ? (n.consume(x), o = 0, h) : x === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), i) : w(x);
  }
  function w(x) {
    if ((x === 45 || Xt(x)) && o++ < 63) {
      const k = x === 45 ? w : v;
      return n.consume(x), k;
    }
    return l(x);
  }
}
const No = {
  partial: !0,
  tokenize: sA
};
function sA(n, i, l) {
  return o;
  function o(c) {
    return Be(c) ? Je(n, u, "linePrefix")(c) : u(c);
  }
  function u(c) {
    return c === null || xe(c) ? i(c) : l(c);
  }
}
const vy = {
  continuation: {
    tokenize: cA
  },
  exit: fA,
  name: "blockQuote",
  tokenize: uA
};
function uA(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    if (d === 62) {
      const p = o.containerState;
      return p.open || (n.enter("blockQuote", {
        _container: !0
      }), p.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(d), n.exit("blockQuoteMarker"), c;
    }
    return l(d);
  }
  function c(d) {
    return Be(d) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(d), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), i) : (n.exit("blockQuotePrefix"), i(d));
  }
}
function cA(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return Be(d) ? Je(n, c, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : c(d);
  }
  function c(d) {
    return n.attempt(vy, i, l)(d);
  }
}
function fA(n) {
  n.exit("blockQuote");
}
const Sy = {
  name: "characterEscape",
  tokenize: dA
};
function dA(n, i, l) {
  return o;
  function o(c) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(c), n.exit("escapeMarker"), u;
  }
  function u(c) {
    return Zx(c) ? (n.enter("characterEscapeValue"), n.consume(c), n.exit("characterEscapeValue"), n.exit("characterEscape"), i) : l(c);
  }
}
const xy = {
  name: "characterReference",
  tokenize: pA
};
function pA(n, i, l) {
  const o = this;
  let u = 0, c, d;
  return p;
  function p(v) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(v), n.exit("characterReferenceMarker"), g;
  }
  function g(v) {
    return v === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(v), n.exit("characterReferenceMarkerNumeric"), m) : (n.enter("characterReferenceValue"), c = 31, d = Xt, h(v));
  }
  function m(v) {
    return v === 88 || v === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(v), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), c = 6, d = Kx, h) : (n.enter("characterReferenceValue"), c = 7, d = _c, h(v));
  }
  function h(v) {
    if (v === 59 && u) {
      const w = n.exit("characterReferenceValue");
      return d === Xt && !Wc(o.sliceSerialize(w)) ? l(v) : (n.enter("characterReferenceMarker"), n.consume(v), n.exit("characterReferenceMarker"), n.exit("characterReference"), i);
    }
    return d(v) && u++ < c ? (n.consume(v), h) : l(v);
  }
}
const Hh = {
  partial: !0,
  tokenize: hA
}, Vh = {
  concrete: !0,
  name: "codeFenced",
  tokenize: mA
};
function mA(n, i, l) {
  const o = this, u = {
    partial: !0,
    tokenize: J
  };
  let c = 0, d = 0, p;
  return g;
  function g(U) {
    return m(U);
  }
  function m(U) {
    const le = o.events[o.events.length - 1];
    return c = le && le[1].type === "linePrefix" ? le[2].sliceSerialize(le[1], !0).length : 0, p = U, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), h(U);
  }
  function h(U) {
    return U === p ? (d++, n.consume(U), h) : d < 3 ? l(U) : (n.exit("codeFencedFenceSequence"), Be(U) ? Je(n, v, "whitespace")(U) : v(U));
  }
  function v(U) {
    return U === null || xe(U) ? (n.exit("codeFencedFence"), o.interrupt ? i(U) : n.check(Hh, z, se)(U)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), w(U));
  }
  function w(U) {
    return U === null || xe(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), v(U)) : Be(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Je(n, x, "whitespace")(U)) : U === 96 && U === p ? l(U) : (n.consume(U), w);
  }
  function x(U) {
    return U === null || xe(U) ? v(U) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), k(U));
  }
  function k(U) {
    return U === null || xe(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), v(U)) : U === 96 && U === p ? l(U) : (n.consume(U), k);
  }
  function z(U) {
    return n.attempt(u, se, L)(U);
  }
  function L(U) {
    return n.enter("lineEnding"), n.consume(U), n.exit("lineEnding"), q;
  }
  function q(U) {
    return c > 0 && Be(U) ? Je(n, K, "linePrefix", c + 1)(U) : K(U);
  }
  function K(U) {
    return U === null || xe(U) ? n.check(Hh, z, se)(U) : (n.enter("codeFlowValue"), j(U));
  }
  function j(U) {
    return U === null || xe(U) ? (n.exit("codeFlowValue"), K(U)) : (n.consume(U), j);
  }
  function se(U) {
    return n.exit("codeFenced"), i(U);
  }
  function J(U, le, Y) {
    let pe = 0;
    return we;
    function we(ie) {
      return U.enter("lineEnding"), U.consume(ie), U.exit("lineEnding"), re;
    }
    function re(ie) {
      return U.enter("codeFencedFence"), Be(ie) ? Je(U, te, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ie) : te(ie);
    }
    function te(ie) {
      return ie === p ? (U.enter("codeFencedFenceSequence"), W(ie)) : Y(ie);
    }
    function W(ie) {
      return ie === p ? (pe++, U.consume(ie), W) : pe >= d ? (U.exit("codeFencedFenceSequence"), Be(ie) ? Je(U, ae, "whitespace")(ie) : ae(ie)) : Y(ie);
    }
    function ae(ie) {
      return ie === null || xe(ie) ? (U.exit("codeFencedFence"), le(ie)) : Y(ie);
    }
  }
}
function hA(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return d === null ? l(d) : (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), c);
  }
  function c(d) {
    return o.parser.lazy[o.now().line] ? l(d) : i(d);
  }
}
const uc = {
  name: "codeIndented",
  tokenize: yA
}, gA = {
  partial: !0,
  tokenize: bA
};
function yA(n, i, l) {
  const o = this;
  return u;
  function u(m) {
    return n.enter("codeIndented"), Je(n, c, "linePrefix", 5)(m);
  }
  function c(m) {
    const h = o.events[o.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? d(m) : l(m);
  }
  function d(m) {
    return m === null ? g(m) : xe(m) ? n.attempt(gA, d, g)(m) : (n.enter("codeFlowValue"), p(m));
  }
  function p(m) {
    return m === null || xe(m) ? (n.exit("codeFlowValue"), d(m)) : (n.consume(m), p);
  }
  function g(m) {
    return n.exit("codeIndented"), i(m);
  }
}
function bA(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return o.parser.lazy[o.now().line] ? l(d) : xe(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), u) : Je(n, c, "linePrefix", 5)(d);
  }
  function c(d) {
    const p = o.events[o.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(d) : xe(d) ? u(d) : l(d);
  }
}
const vA = {
  name: "codeText",
  previous: xA,
  resolve: SA,
  tokenize: AA
};
function SA(n) {
  let i = n.length - 4, l = 3, o, u;
  if ((n[l][1].type === "lineEnding" || n[l][1].type === "space") && (n[i][1].type === "lineEnding" || n[i][1].type === "space")) {
    for (o = l; ++o < i; )
      if (n[o][1].type === "codeTextData") {
        n[l][1].type = "codeTextPadding", n[i][1].type = "codeTextPadding", l += 2, i -= 2;
        break;
      }
  }
  for (o = l - 1, i++; ++o <= i; )
    u === void 0 ? o !== i && n[o][1].type !== "lineEnding" && (u = o) : (o === i || n[o][1].type === "lineEnding") && (n[u][1].type = "codeTextData", o !== u + 2 && (n[u][1].end = n[o - 1][1].end, n.splice(u + 2, o - u - 2), i -= o - u - 2, o = u + 2), u = void 0);
  return n;
}
function xA(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function AA(n, i, l) {
  let o = 0, u, c;
  return d;
  function d(v) {
    return n.enter("codeText"), n.enter("codeTextSequence"), p(v);
  }
  function p(v) {
    return v === 96 ? (n.consume(v), o++, p) : (n.exit("codeTextSequence"), g(v));
  }
  function g(v) {
    return v === null ? l(v) : v === 32 ? (n.enter("space"), n.consume(v), n.exit("space"), g) : v === 96 ? (c = n.enter("codeTextSequence"), u = 0, h(v)) : xe(v) ? (n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), g) : (n.enter("codeTextData"), m(v));
  }
  function m(v) {
    return v === null || v === 32 || v === 96 || xe(v) ? (n.exit("codeTextData"), g(v)) : (n.consume(v), m);
  }
  function h(v) {
    return v === 96 ? (n.consume(v), u++, h) : u === o ? (n.exit("codeTextSequence"), n.exit("codeText"), i(v)) : (c.type = "codeTextData", m(v));
  }
}
class wA {
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
  slice(i, l) {
    const o = l ?? Number.POSITIVE_INFINITY;
    return o < this.left.length ? this.left.slice(i, o) : i > this.left.length ? this.right.slice(this.right.length - o + this.left.length, this.right.length - i + this.left.length).reverse() : this.left.slice(i).concat(this.right.slice(this.right.length - o + this.left.length).reverse());
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
  splice(i, l, o) {
    const u = l || 0;
    this.setCursor(Math.trunc(i));
    const c = this.right.splice(this.right.length - u, Number.POSITIVE_INFINITY);
    return o && Br(this.left, o), c.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), Br(this.left, i);
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
    this.setCursor(0), Br(this.right, i.reverse());
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
        const l = this.left.splice(i, Number.POSITIVE_INFINITY);
        Br(this.right, l.reverse());
      } else {
        const l = this.right.splice(this.left.length + this.right.length - i, Number.POSITIVE_INFINITY);
        Br(this.left, l.reverse());
      }
  }
}
function Br(n, i) {
  let l = 0;
  if (i.length < 1e4)
    n.push(...i);
  else
    for (; l < i.length; )
      n.push(...i.slice(l, l + 1e4)), l += 1e4;
}
function Ay(n) {
  const i = {};
  let l = -1, o, u, c, d, p, g, m;
  const h = new wA(n);
  for (; ++l < h.length; ) {
    for (; l in i; )
      l = i[l];
    if (o = h.get(l), l && o[1].type === "chunkFlow" && h.get(l - 1)[1].type === "listItemPrefix" && (g = o[1]._tokenizer.events, c = 0, c < g.length && g[c][1].type === "lineEndingBlank" && (c += 2), c < g.length && g[c][1].type === "content"))
      for (; ++c < g.length && g[c][1].type !== "content"; )
        g[c][1].type === "chunkText" && (g[c][1]._isInFirstContentOfListItem = !0, c++);
    if (o[0] === "enter")
      o[1].contentType && (Object.assign(i, TA(h, l)), l = i[l], m = !0);
    else if (o[1]._container) {
      for (c = l, u = void 0; c--; )
        if (d = h.get(c), d[1].type === "lineEnding" || d[1].type === "lineEndingBlank")
          d[0] === "enter" && (u && (h.get(u)[1].type = "lineEndingBlank"), d[1].type = "lineEnding", u = c);
        else if (!(d[1].type === "linePrefix" || d[1].type === "listItemIndent")) break;
      u && (o[1].end = {
        ...h.get(u)[1].start
      }, p = h.slice(u, l), p.unshift(o), h.splice(u, l - u + 1, p));
    }
  }
  return An(n, 0, Number.POSITIVE_INFINITY, h.slice(0)), !m;
}
function TA(n, i) {
  const l = n.get(i)[1], o = n.get(i)[2];
  let u = i - 1;
  const c = [];
  let d = l._tokenizer;
  d || (d = o.parser[l.contentType](l.start), l._contentTypeTextTrailing && (d._contentTypeTextTrailing = !0));
  const p = d.events, g = [], m = {};
  let h, v, w = -1, x = l, k = 0, z = 0;
  const L = [z];
  for (; x; ) {
    for (; n.get(++u)[1] !== x; )
      ;
    c.push(u), x._tokenizer || (h = o.sliceStream(x), x.next || h.push(null), v && d.defineSkip(x.start), x._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(h), x._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), v = x, x = x.next;
  }
  for (x = l; ++w < p.length; )
    // Find a void token that includes a break.
    p[w][0] === "exit" && p[w - 1][0] === "enter" && p[w][1].type === p[w - 1][1].type && p[w][1].start.line !== p[w][1].end.line && (z = w + 1, L.push(z), x._tokenizer = void 0, x.previous = void 0, x = x.next);
  for (d.events = [], x ? (x._tokenizer = void 0, x.previous = void 0) : L.pop(), w = L.length; w--; ) {
    const q = p.slice(L[w], L[w + 1]), K = c.pop();
    g.push([K, K + q.length - 1]), n.splice(K, 2, q);
  }
  for (g.reverse(), w = -1; ++w < g.length; )
    m[k + g[w][0]] = k + g[w][1], k += g[w][1] - g[w][0] - 1;
  return m;
}
const EA = {
  resolve: kA,
  tokenize: DA
}, CA = {
  partial: !0,
  tokenize: zA
};
function kA(n) {
  return Ay(n), n;
}
function DA(n, i) {
  let l;
  return o;
  function o(p) {
    return n.enter("content"), l = n.enter("chunkContent", {
      contentType: "content"
    }), u(p);
  }
  function u(p) {
    return p === null ? c(p) : xe(p) ? n.check(CA, d, c)(p) : (n.consume(p), u);
  }
  function c(p) {
    return n.exit("chunkContent"), n.exit("content"), i(p);
  }
  function d(p) {
    return n.consume(p), n.exit("chunkContent"), l.next = n.enter("chunkContent", {
      contentType: "content",
      previous: l
    }), l = l.next, u;
  }
}
function zA(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), Je(n, c, "linePrefix");
  }
  function c(d) {
    if (d === null || xe(d))
      return l(d);
    const p = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(d) : n.interrupt(o.parser.constructs.flow, l, i)(d);
  }
}
function wy(n, i, l, o, u, c, d, p, g) {
  const m = g || Number.POSITIVE_INFINITY;
  let h = 0;
  return v;
  function v(q) {
    return q === 60 ? (n.enter(o), n.enter(u), n.enter(c), n.consume(q), n.exit(c), w) : q === null || q === 32 || q === 41 || Oc(q) ? l(q) : (n.enter(o), n.enter(d), n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), z(q));
  }
  function w(q) {
    return q === 62 ? (n.enter(c), n.consume(q), n.exit(c), n.exit(u), n.exit(o), i) : (n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), x(q));
  }
  function x(q) {
    return q === 62 ? (n.exit("chunkString"), n.exit(p), w(q)) : q === null || q === 60 || xe(q) ? l(q) : (n.consume(q), q === 92 ? k : x);
  }
  function k(q) {
    return q === 60 || q === 62 || q === 92 ? (n.consume(q), x) : x(q);
  }
  function z(q) {
    return !h && (q === null || q === 41 || It(q)) ? (n.exit("chunkString"), n.exit(p), n.exit(d), n.exit(o), i(q)) : h < m && q === 40 ? (n.consume(q), h++, z) : q === 41 ? (n.consume(q), h--, z) : q === null || q === 32 || q === 40 || Oc(q) ? l(q) : (n.consume(q), q === 92 ? L : z);
  }
  function L(q) {
    return q === 40 || q === 41 || q === 92 ? (n.consume(q), z) : z(q);
  }
}
function Ty(n, i, l, o, u, c) {
  const d = this;
  let p = 0, g;
  return m;
  function m(x) {
    return n.enter(o), n.enter(u), n.consume(x), n.exit(u), n.enter(c), h;
  }
  function h(x) {
    return p > 999 || x === null || x === 91 || x === 93 && !g || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    x === 94 && !p && "_hiddenFootnoteSupport" in d.parser.constructs ? l(x) : x === 93 ? (n.exit(c), n.enter(u), n.consume(x), n.exit(u), n.exit(o), i) : xe(x) ? (n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), h) : (n.enter("chunkString", {
      contentType: "string"
    }), v(x));
  }
  function v(x) {
    return x === null || x === 91 || x === 93 || xe(x) || p++ > 999 ? (n.exit("chunkString"), h(x)) : (n.consume(x), g || (g = !Be(x)), x === 92 ? w : v);
  }
  function w(x) {
    return x === 91 || x === 92 || x === 93 ? (n.consume(x), p++, v) : v(x);
  }
}
function Ey(n, i, l, o, u, c) {
  let d;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40 ? (n.enter(o), n.enter(u), n.consume(w), n.exit(u), d = w === 40 ? 41 : w, g) : l(w);
  }
  function g(w) {
    return w === d ? (n.enter(u), n.consume(w), n.exit(u), n.exit(o), i) : (n.enter(c), m(w));
  }
  function m(w) {
    return w === d ? (n.exit(c), g(d)) : w === null ? l(w) : xe(w) ? (n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), Je(n, m, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), h(w));
  }
  function h(w) {
    return w === d || w === null || xe(w) ? (n.exit("chunkString"), m(w)) : (n.consume(w), w === 92 ? v : h);
  }
  function v(w) {
    return w === d || w === 92 ? (n.consume(w), h) : h(w);
  }
}
function Qr(n, i) {
  let l;
  return o;
  function o(u) {
    return xe(u) ? (n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), l = !0, o) : Be(u) ? Je(n, o, l ? "linePrefix" : "lineSuffix")(u) : i(u);
  }
}
const RA = {
  name: "definition",
  tokenize: MA
}, NA = {
  partial: !0,
  tokenize: OA
};
function MA(n, i, l) {
  const o = this;
  let u;
  return c;
  function c(x) {
    return n.enter("definition"), d(x);
  }
  function d(x) {
    return Ty.call(
      o,
      n,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      l,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(x);
  }
  function p(x) {
    return u = Ri(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)), x === 58 ? (n.enter("definitionMarker"), n.consume(x), n.exit("definitionMarker"), g) : l(x);
  }
  function g(x) {
    return It(x) ? Qr(n, m)(x) : m(x);
  }
  function m(x) {
    return wy(
      n,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      l,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(x);
  }
  function h(x) {
    return n.attempt(NA, v, v)(x);
  }
  function v(x) {
    return Be(x) ? Je(n, w, "whitespace")(x) : w(x);
  }
  function w(x) {
    return x === null || xe(x) ? (n.exit("definition"), o.parser.defined.push(u), i(x)) : l(x);
  }
}
function OA(n, i, l) {
  return o;
  function o(p) {
    return It(p) ? Qr(n, u)(p) : l(p);
  }
  function u(p) {
    return Ey(n, c, l, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function c(p) {
    return Be(p) ? Je(n, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || xe(p) ? i(p) : l(p);
  }
}
const _A = {
  name: "hardBreakEscape",
  tokenize: IA
};
function IA(n, i, l) {
  return o;
  function o(c) {
    return n.enter("hardBreakEscape"), n.consume(c), u;
  }
  function u(c) {
    return xe(c) ? (n.exit("hardBreakEscape"), i(c)) : l(c);
  }
}
const UA = {
  name: "headingAtx",
  resolve: LA,
  tokenize: qA
};
function LA(n, i) {
  let l = n.length - 2, o = 3, u, c;
  return n[o][1].type === "whitespace" && (o += 2), l - 2 > o && n[l][1].type === "whitespace" && (l -= 2), n[l][1].type === "atxHeadingSequence" && (o === l - 1 || l - 4 > o && n[l - 2][1].type === "whitespace") && (l -= o + 1 === l ? 2 : 4), l > o && (u = {
    type: "atxHeadingText",
    start: n[o][1].start,
    end: n[l][1].end
  }, c = {
    type: "chunkText",
    start: n[o][1].start,
    end: n[l][1].end,
    contentType: "text"
  }, An(n, o, l - o + 1, [["enter", u, i], ["enter", c, i], ["exit", c, i], ["exit", u, i]])), n;
}
function qA(n, i, l) {
  let o = 0;
  return u;
  function u(h) {
    return n.enter("atxHeading"), c(h);
  }
  function c(h) {
    return n.enter("atxHeadingSequence"), d(h);
  }
  function d(h) {
    return h === 35 && o++ < 6 ? (n.consume(h), d) : h === null || It(h) ? (n.exit("atxHeadingSequence"), p(h)) : l(h);
  }
  function p(h) {
    return h === 35 ? (n.enter("atxHeadingSequence"), g(h)) : h === null || xe(h) ? (n.exit("atxHeading"), i(h)) : Be(h) ? Je(n, p, "whitespace")(h) : (n.enter("atxHeadingText"), m(h));
  }
  function g(h) {
    return h === 35 ? (n.consume(h), g) : (n.exit("atxHeadingSequence"), p(h));
  }
  function m(h) {
    return h === null || h === 35 || It(h) ? (n.exit("atxHeadingText"), p(h)) : (n.consume(h), m);
  }
}
const jA = [
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
], Qh = ["pre", "script", "style", "textarea"], BA = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: QA,
  tokenize: FA
}, HA = {
  partial: !0,
  tokenize: GA
}, VA = {
  partial: !0,
  tokenize: PA
};
function QA(n) {
  let i = n.length;
  for (; i-- && !(n[i][0] === "enter" && n[i][1].type === "htmlFlow"); )
    ;
  return i > 1 && n[i - 2][1].type === "linePrefix" && (n[i][1].start = n[i - 2][1].start, n[i + 1][1].start = n[i - 2][1].start, n.splice(i - 2, 2)), n;
}
function FA(n, i, l) {
  const o = this;
  let u, c, d, p, g;
  return m;
  function m(A) {
    return h(A);
  }
  function h(A) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(A), v;
  }
  function v(A) {
    return A === 33 ? (n.consume(A), w) : A === 47 ? (n.consume(A), c = !0, z) : A === 63 ? (n.consume(A), u = 3, o.interrupt ? i : b) : xn(A) ? (n.consume(A), d = String.fromCharCode(A), L) : l(A);
  }
  function w(A) {
    return A === 45 ? (n.consume(A), u = 2, x) : A === 91 ? (n.consume(A), u = 5, p = 0, k) : xn(A) ? (n.consume(A), u = 4, o.interrupt ? i : b) : l(A);
  }
  function x(A) {
    return A === 45 ? (n.consume(A), o.interrupt ? i : b) : l(A);
  }
  function k(A) {
    const ne = "CDATA[";
    return A === ne.charCodeAt(p++) ? (n.consume(A), p === ne.length ? o.interrupt ? i : te : k) : l(A);
  }
  function z(A) {
    return xn(A) ? (n.consume(A), d = String.fromCharCode(A), L) : l(A);
  }
  function L(A) {
    if (A === null || A === 47 || A === 62 || It(A)) {
      const ne = A === 47, Se = d.toLowerCase();
      return !ne && !c && Qh.includes(Se) ? (u = 1, o.interrupt ? i(A) : te(A)) : jA.includes(d.toLowerCase()) ? (u = 6, ne ? (n.consume(A), q) : o.interrupt ? i(A) : te(A)) : (u = 7, o.interrupt && !o.parser.lazy[o.now().line] ? l(A) : c ? K(A) : j(A));
    }
    return A === 45 || Xt(A) ? (n.consume(A), d += String.fromCharCode(A), L) : l(A);
  }
  function q(A) {
    return A === 62 ? (n.consume(A), o.interrupt ? i : te) : l(A);
  }
  function K(A) {
    return Be(A) ? (n.consume(A), K) : we(A);
  }
  function j(A) {
    return A === 47 ? (n.consume(A), we) : A === 58 || A === 95 || xn(A) ? (n.consume(A), se) : Be(A) ? (n.consume(A), j) : we(A);
  }
  function se(A) {
    return A === 45 || A === 46 || A === 58 || A === 95 || Xt(A) ? (n.consume(A), se) : J(A);
  }
  function J(A) {
    return A === 61 ? (n.consume(A), U) : Be(A) ? (n.consume(A), J) : j(A);
  }
  function U(A) {
    return A === null || A === 60 || A === 61 || A === 62 || A === 96 ? l(A) : A === 34 || A === 39 ? (n.consume(A), g = A, le) : Be(A) ? (n.consume(A), U) : Y(A);
  }
  function le(A) {
    return A === g ? (n.consume(A), g = null, pe) : A === null || xe(A) ? l(A) : (n.consume(A), le);
  }
  function Y(A) {
    return A === null || A === 34 || A === 39 || A === 47 || A === 60 || A === 61 || A === 62 || A === 96 || It(A) ? J(A) : (n.consume(A), Y);
  }
  function pe(A) {
    return A === 47 || A === 62 || Be(A) ? j(A) : l(A);
  }
  function we(A) {
    return A === 62 ? (n.consume(A), re) : l(A);
  }
  function re(A) {
    return A === null || xe(A) ? te(A) : Be(A) ? (n.consume(A), re) : l(A);
  }
  function te(A) {
    return A === 45 && u === 2 ? (n.consume(A), N) : A === 60 && u === 1 ? (n.consume(A), G) : A === 62 && u === 4 ? (n.consume(A), V) : A === 63 && u === 3 ? (n.consume(A), b) : A === 93 && u === 5 ? (n.consume(A), Ee) : xe(A) && (u === 6 || u === 7) ? (n.exit("htmlFlowData"), n.check(HA, ee, W)(A)) : A === null || xe(A) ? (n.exit("htmlFlowData"), W(A)) : (n.consume(A), te);
  }
  function W(A) {
    return n.check(VA, ae, ee)(A);
  }
  function ae(A) {
    return n.enter("lineEnding"), n.consume(A), n.exit("lineEnding"), ie;
  }
  function ie(A) {
    return A === null || xe(A) ? W(A) : (n.enter("htmlFlowData"), te(A));
  }
  function N(A) {
    return A === 45 ? (n.consume(A), b) : te(A);
  }
  function G(A) {
    return A === 47 ? (n.consume(A), d = "", P) : te(A);
  }
  function P(A) {
    if (A === 62) {
      const ne = d.toLowerCase();
      return Qh.includes(ne) ? (n.consume(A), V) : te(A);
    }
    return xn(A) && d.length < 8 ? (n.consume(A), d += String.fromCharCode(A), P) : te(A);
  }
  function Ee(A) {
    return A === 93 ? (n.consume(A), b) : te(A);
  }
  function b(A) {
    return A === 62 ? (n.consume(A), V) : A === 45 && u === 2 ? (n.consume(A), b) : te(A);
  }
  function V(A) {
    return A === null || xe(A) ? (n.exit("htmlFlowData"), ee(A)) : (n.consume(A), V);
  }
  function ee(A) {
    return n.exit("htmlFlow"), i(A);
  }
}
function PA(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return xe(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), c) : l(d);
  }
  function c(d) {
    return o.parser.lazy[o.now().line] ? l(d) : i(d);
  }
}
function GA(n, i, l) {
  return o;
  function o(u) {
    return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), n.attempt(No, i, l);
  }
}
const YA = {
  name: "htmlText",
  tokenize: XA
};
function XA(n, i, l) {
  const o = this;
  let u, c, d;
  return p;
  function p(b) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(b), g;
  }
  function g(b) {
    return b === 33 ? (n.consume(b), m) : b === 47 ? (n.consume(b), J) : b === 63 ? (n.consume(b), j) : xn(b) ? (n.consume(b), Y) : l(b);
  }
  function m(b) {
    return b === 45 ? (n.consume(b), h) : b === 91 ? (n.consume(b), c = 0, k) : xn(b) ? (n.consume(b), K) : l(b);
  }
  function h(b) {
    return b === 45 ? (n.consume(b), x) : l(b);
  }
  function v(b) {
    return b === null ? l(b) : b === 45 ? (n.consume(b), w) : xe(b) ? (d = v, G(b)) : (n.consume(b), v);
  }
  function w(b) {
    return b === 45 ? (n.consume(b), x) : v(b);
  }
  function x(b) {
    return b === 62 ? N(b) : b === 45 ? w(b) : v(b);
  }
  function k(b) {
    const V = "CDATA[";
    return b === V.charCodeAt(c++) ? (n.consume(b), c === V.length ? z : k) : l(b);
  }
  function z(b) {
    return b === null ? l(b) : b === 93 ? (n.consume(b), L) : xe(b) ? (d = z, G(b)) : (n.consume(b), z);
  }
  function L(b) {
    return b === 93 ? (n.consume(b), q) : z(b);
  }
  function q(b) {
    return b === 62 ? N(b) : b === 93 ? (n.consume(b), q) : z(b);
  }
  function K(b) {
    return b === null || b === 62 ? N(b) : xe(b) ? (d = K, G(b)) : (n.consume(b), K);
  }
  function j(b) {
    return b === null ? l(b) : b === 63 ? (n.consume(b), se) : xe(b) ? (d = j, G(b)) : (n.consume(b), j);
  }
  function se(b) {
    return b === 62 ? N(b) : j(b);
  }
  function J(b) {
    return xn(b) ? (n.consume(b), U) : l(b);
  }
  function U(b) {
    return b === 45 || Xt(b) ? (n.consume(b), U) : le(b);
  }
  function le(b) {
    return xe(b) ? (d = le, G(b)) : Be(b) ? (n.consume(b), le) : N(b);
  }
  function Y(b) {
    return b === 45 || Xt(b) ? (n.consume(b), Y) : b === 47 || b === 62 || It(b) ? pe(b) : l(b);
  }
  function pe(b) {
    return b === 47 ? (n.consume(b), N) : b === 58 || b === 95 || xn(b) ? (n.consume(b), we) : xe(b) ? (d = pe, G(b)) : Be(b) ? (n.consume(b), pe) : N(b);
  }
  function we(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Xt(b) ? (n.consume(b), we) : re(b);
  }
  function re(b) {
    return b === 61 ? (n.consume(b), te) : xe(b) ? (d = re, G(b)) : Be(b) ? (n.consume(b), re) : pe(b);
  }
  function te(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? l(b) : b === 34 || b === 39 ? (n.consume(b), u = b, W) : xe(b) ? (d = te, G(b)) : Be(b) ? (n.consume(b), te) : (n.consume(b), ae);
  }
  function W(b) {
    return b === u ? (n.consume(b), u = void 0, ie) : b === null ? l(b) : xe(b) ? (d = W, G(b)) : (n.consume(b), W);
  }
  function ae(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? l(b) : b === 47 || b === 62 || It(b) ? pe(b) : (n.consume(b), ae);
  }
  function ie(b) {
    return b === 47 || b === 62 || It(b) ? pe(b) : l(b);
  }
  function N(b) {
    return b === 62 ? (n.consume(b), n.exit("htmlTextData"), n.exit("htmlText"), i) : l(b);
  }
  function G(b) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(b), n.exit("lineEnding"), P;
  }
  function P(b) {
    return Be(b) ? Je(n, Ee, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : Ee(b);
  }
  function Ee(b) {
    return n.enter("htmlTextData"), d(b);
  }
}
const ef = {
  name: "labelEnd",
  resolveAll: WA,
  resolveTo: $A,
  tokenize: ew
}, KA = {
  tokenize: tw
}, ZA = {
  tokenize: nw
}, JA = {
  tokenize: aw
};
function WA(n) {
  let i = -1;
  const l = [];
  for (; ++i < n.length; ) {
    const o = n[i][1];
    if (l.push(n[i]), o.type === "labelImage" || o.type === "labelLink" || o.type === "labelEnd") {
      const u = o.type === "labelImage" ? 4 : 2;
      o.type = "data", i += u;
    }
  }
  return n.length !== l.length && An(n, 0, n.length, l), n;
}
function $A(n, i) {
  let l = n.length, o = 0, u, c, d, p;
  for (; l--; )
    if (u = n[l][1], c) {
      if (u.type === "link" || u.type === "labelLink" && u._inactive)
        break;
      n[l][0] === "enter" && u.type === "labelLink" && (u._inactive = !0);
    } else if (d) {
      if (n[l][0] === "enter" && (u.type === "labelImage" || u.type === "labelLink") && !u._balanced && (c = l, u.type !== "labelLink")) {
        o = 2;
        break;
      }
    } else u.type === "labelEnd" && (d = l);
  const g = {
    type: n[c][1].type === "labelLink" ? "link" : "image",
    start: {
      ...n[c][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  }, m = {
    type: "label",
    start: {
      ...n[c][1].start
    },
    end: {
      ...n[d][1].end
    }
  }, h = {
    type: "labelText",
    start: {
      ...n[c + o + 2][1].end
    },
    end: {
      ...n[d - 2][1].start
    }
  };
  return p = [["enter", g, i], ["enter", m, i]], p = ln(p, n.slice(c + 1, c + o + 3)), p = ln(p, [["enter", h, i]]), p = ln(p, $c(i.parser.constructs.insideSpan.null, n.slice(c + o + 4, d - 3), i)), p = ln(p, [["exit", h, i], n[d - 2], n[d - 1], ["exit", m, i]]), p = ln(p, n.slice(d + 1)), p = ln(p, [["exit", g, i]]), An(n, c, n.length, p), n;
}
function ew(n, i, l) {
  const o = this;
  let u = o.events.length, c, d;
  for (; u--; )
    if ((o.events[u][1].type === "labelImage" || o.events[u][1].type === "labelLink") && !o.events[u][1]._balanced) {
      c = o.events[u][1];
      break;
    }
  return p;
  function p(w) {
    return c ? c._inactive ? v(w) : (d = o.parser.defined.includes(Ri(o.sliceSerialize({
      start: c.end,
      end: o.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(w), n.exit("labelMarker"), n.exit("labelEnd"), g) : l(w);
  }
  function g(w) {
    return w === 40 ? n.attempt(KA, h, d ? h : v)(w) : w === 91 ? n.attempt(ZA, h, d ? m : v)(w) : d ? h(w) : v(w);
  }
  function m(w) {
    return n.attempt(JA, h, v)(w);
  }
  function h(w) {
    return i(w);
  }
  function v(w) {
    return c._balanced = !0, l(w);
  }
}
function tw(n, i, l) {
  return o;
  function o(v) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(v), n.exit("resourceMarker"), u;
  }
  function u(v) {
    return It(v) ? Qr(n, c)(v) : c(v);
  }
  function c(v) {
    return v === 41 ? h(v) : wy(n, d, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(v);
  }
  function d(v) {
    return It(v) ? Qr(n, g)(v) : h(v);
  }
  function p(v) {
    return l(v);
  }
  function g(v) {
    return v === 34 || v === 39 || v === 40 ? Ey(n, m, l, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(v) : h(v);
  }
  function m(v) {
    return It(v) ? Qr(n, h)(v) : h(v);
  }
  function h(v) {
    return v === 41 ? (n.enter("resourceMarker"), n.consume(v), n.exit("resourceMarker"), n.exit("resource"), i) : l(v);
  }
}
function nw(n, i, l) {
  const o = this;
  return u;
  function u(p) {
    return Ty.call(o, n, c, d, "reference", "referenceMarker", "referenceString")(p);
  }
  function c(p) {
    return o.parser.defined.includes(Ri(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))) ? i(p) : l(p);
  }
  function d(p) {
    return l(p);
  }
}
function aw(n, i, l) {
  return o;
  function o(c) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(c), n.exit("referenceMarker"), u;
  }
  function u(c) {
    return c === 93 ? (n.enter("referenceMarker"), n.consume(c), n.exit("referenceMarker"), n.exit("reference"), i) : l(c);
  }
}
const iw = {
  name: "labelStartImage",
  resolveAll: ef.resolveAll,
  tokenize: rw
};
function rw(n, i, l) {
  const o = this;
  return u;
  function u(p) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(p), n.exit("labelImageMarker"), c;
  }
  function c(p) {
    return p === 91 ? (n.enter("labelMarker"), n.consume(p), n.exit("labelMarker"), n.exit("labelImage"), d) : l(p);
  }
  function d(p) {
    return p === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? l(p) : i(p);
  }
}
const lw = {
  name: "labelStartLink",
  resolveAll: ef.resolveAll,
  tokenize: ow
};
function ow(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(d), n.exit("labelMarker"), n.exit("labelLink"), c;
  }
  function c(d) {
    return d === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? l(d) : i(d);
  }
}
const cc = {
  name: "lineEnding",
  tokenize: sw
};
function sw(n, i) {
  return l;
  function l(o) {
    return n.enter("lineEnding"), n.consume(o), n.exit("lineEnding"), Je(n, i, "linePrefix");
  }
}
const vo = {
  name: "thematicBreak",
  tokenize: uw
};
function uw(n, i, l) {
  let o = 0, u;
  return c;
  function c(m) {
    return n.enter("thematicBreak"), d(m);
  }
  function d(m) {
    return u = m, p(m);
  }
  function p(m) {
    return m === u ? (n.enter("thematicBreakSequence"), g(m)) : o >= 3 && (m === null || xe(m)) ? (n.exit("thematicBreak"), i(m)) : l(m);
  }
  function g(m) {
    return m === u ? (n.consume(m), o++, g) : (n.exit("thematicBreakSequence"), Be(m) ? Je(n, p, "whitespace")(m) : p(m));
  }
}
const Mt = {
  continuation: {
    tokenize: pw
  },
  exit: hw,
  name: "list",
  tokenize: dw
}, cw = {
  partial: !0,
  tokenize: gw
}, fw = {
  partial: !0,
  tokenize: mw
};
function dw(n, i, l) {
  const o = this, u = o.events[o.events.length - 1];
  let c = u && u[1].type === "linePrefix" ? u[2].sliceSerialize(u[1], !0).length : 0, d = 0;
  return p;
  function p(x) {
    const k = o.containerState.type || (x === 42 || x === 43 || x === 45 ? "listUnordered" : "listOrdered");
    if (k === "listUnordered" ? !o.containerState.marker || x === o.containerState.marker : _c(x)) {
      if (o.containerState.type || (o.containerState.type = k, n.enter(k, {
        _container: !0
      })), k === "listUnordered")
        return n.enter("listItemPrefix"), x === 42 || x === 45 ? n.check(vo, l, m)(x) : m(x);
      if (!o.interrupt || x === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), g(x);
    }
    return l(x);
  }
  function g(x) {
    return _c(x) && ++d < 10 ? (n.consume(x), g) : (!o.interrupt || d < 2) && (o.containerState.marker ? x === o.containerState.marker : x === 41 || x === 46) ? (n.exit("listItemValue"), m(x)) : l(x);
  }
  function m(x) {
    return n.enter("listItemMarker"), n.consume(x), n.exit("listItemMarker"), o.containerState.marker = o.containerState.marker || x, n.check(
      No,
      // Can’t be empty when interrupting.
      o.interrupt ? l : h,
      n.attempt(cw, w, v)
    );
  }
  function h(x) {
    return o.containerState.initialBlankLine = !0, c++, w(x);
  }
  function v(x) {
    return Be(x) ? (n.enter("listItemPrefixWhitespace"), n.consume(x), n.exit("listItemPrefixWhitespace"), w) : l(x);
  }
  function w(x) {
    return o.containerState.size = c + o.sliceSerialize(n.exit("listItemPrefix"), !0).length, i(x);
  }
}
function pw(n, i, l) {
  const o = this;
  return o.containerState._closeFlow = void 0, n.check(No, u, c);
  function u(p) {
    return o.containerState.furtherBlankLines = o.containerState.furtherBlankLines || o.containerState.initialBlankLine, Je(n, i, "listItemIndent", o.containerState.size + 1)(p);
  }
  function c(p) {
    return o.containerState.furtherBlankLines || !Be(p) ? (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, d(p)) : (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, n.attempt(fw, i, d)(p));
  }
  function d(p) {
    return o.containerState._closeFlow = !0, o.interrupt = void 0, Je(n, n.attempt(Mt, i, l), "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function mw(n, i, l) {
  const o = this;
  return Je(n, u, "listItemIndent", o.containerState.size + 1);
  function u(c) {
    const d = o.events[o.events.length - 1];
    return d && d[1].type === "listItemIndent" && d[2].sliceSerialize(d[1], !0).length === o.containerState.size ? i(c) : l(c);
  }
}
function hw(n) {
  n.exit(this.containerState.type);
}
function gw(n, i, l) {
  const o = this;
  return Je(n, u, "listItemPrefixWhitespace", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function u(c) {
    const d = o.events[o.events.length - 1];
    return !Be(c) && d && d[1].type === "listItemPrefixWhitespace" ? i(c) : l(c);
  }
}
const Fh = {
  name: "setextUnderline",
  resolveTo: yw,
  tokenize: bw
};
function yw(n, i) {
  let l = n.length, o, u, c;
  for (; l--; )
    if (n[l][0] === "enter") {
      if (n[l][1].type === "content") {
        o = l;
        break;
      }
      n[l][1].type === "paragraph" && (u = l);
    } else
      n[l][1].type === "content" && n.splice(l, 1), !c && n[l][1].type === "definition" && (c = l);
  const d = {
    type: "setextHeading",
    start: {
      ...n[o][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  };
  return n[u][1].type = "setextHeadingText", c ? (n.splice(u, 0, ["enter", d, i]), n.splice(c + 1, 0, ["exit", n[o][1], i]), n[o][1].end = {
    ...n[c][1].end
  }) : n[o][1] = d, n.push(["exit", d, i]), n;
}
function bw(n, i, l) {
  const o = this;
  let u;
  return c;
  function c(m) {
    let h = o.events.length, v;
    for (; h--; )
      if (o.events[h][1].type !== "lineEnding" && o.events[h][1].type !== "linePrefix" && o.events[h][1].type !== "content") {
        v = o.events[h][1].type === "paragraph";
        break;
      }
    return !o.parser.lazy[o.now().line] && (o.interrupt || v) ? (n.enter("setextHeadingLine"), u = m, d(m)) : l(m);
  }
  function d(m) {
    return n.enter("setextHeadingLineSequence"), p(m);
  }
  function p(m) {
    return m === u ? (n.consume(m), p) : (n.exit("setextHeadingLineSequence"), Be(m) ? Je(n, g, "lineSuffix")(m) : g(m));
  }
  function g(m) {
    return m === null || xe(m) ? (n.exit("setextHeadingLine"), i(m)) : l(m);
  }
}
const vw = {
  tokenize: Sw
};
function Sw(n) {
  const i = this, l = n.attempt(
    // Try to parse a blank line.
    No,
    o,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, u, Je(n, n.attempt(this.parser.constructs.flow, u, n.attempt(EA, u)), "linePrefix"))
  );
  return l;
  function o(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(c), n.exit("lineEndingBlank"), i.currentConstruct = void 0, l;
  }
  function u(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), i.currentConstruct = void 0, l;
  }
}
const xw = {
  resolveAll: ky()
}, Aw = Cy("string"), ww = Cy("text");
function Cy(n) {
  return {
    resolveAll: ky(n === "text" ? Tw : void 0),
    tokenize: i
  };
  function i(l) {
    const o = this, u = this.parser.constructs[n], c = l.attempt(u, d, p);
    return d;
    function d(h) {
      return m(h) ? c(h) : p(h);
    }
    function p(h) {
      if (h === null) {
        l.consume(h);
        return;
      }
      return l.enter("data"), l.consume(h), g;
    }
    function g(h) {
      return m(h) ? (l.exit("data"), c(h)) : (l.consume(h), g);
    }
    function m(h) {
      if (h === null)
        return !0;
      const v = u[h];
      let w = -1;
      if (v)
        for (; ++w < v.length; ) {
          const x = v[w];
          if (!x.previous || x.previous.call(o, o.previous))
            return !0;
        }
      return !1;
    }
  }
}
function ky(n) {
  return i;
  function i(l, o) {
    let u = -1, c;
    for (; ++u <= l.length; )
      c === void 0 ? l[u] && l[u][1].type === "data" && (c = u, u++) : (!l[u] || l[u][1].type !== "data") && (u !== c + 2 && (l[c][1].end = l[u - 1][1].end, l.splice(c + 2, u - c - 2), u = c + 2), c = void 0);
    return n ? n(l, o) : l;
  }
}
function Tw(n, i) {
  let l = 0;
  for (; ++l <= n.length; )
    if ((l === n.length || n[l][1].type === "lineEnding") && n[l - 1][1].type === "data") {
      const o = n[l - 1][1], u = i.sliceStream(o);
      let c = u.length, d = -1, p = 0, g;
      for (; c--; ) {
        const m = u[c];
        if (typeof m == "string") {
          for (d = m.length; m.charCodeAt(d - 1) === 32; )
            p++, d--;
          if (d) break;
          d = -1;
        } else if (m === -2)
          g = !0, p++;
        else if (m !== -1) {
          c++;
          break;
        }
      }
      if (i._contentTypeTextTrailing && l === n.length && (p = 0), p) {
        const m = {
          type: l === n.length || g || p < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: c ? d : o.start._bufferIndex + d,
            _index: o.start._index + c,
            line: o.end.line,
            column: o.end.column - p,
            offset: o.end.offset - p
          },
          end: {
            ...o.end
          }
        };
        o.end = {
          ...m.start
        }, o.start.offset === o.end.offset ? Object.assign(o, m) : (n.splice(l, 0, ["enter", m, i], ["exit", m, i]), l += 2);
      }
      l++;
    }
  return n;
}
const Ew = {
  42: Mt,
  43: Mt,
  45: Mt,
  48: Mt,
  49: Mt,
  50: Mt,
  51: Mt,
  52: Mt,
  53: Mt,
  54: Mt,
  55: Mt,
  56: Mt,
  57: Mt,
  62: vy
}, Cw = {
  91: RA
}, kw = {
  [-2]: uc,
  [-1]: uc,
  32: uc
}, Dw = {
  35: UA,
  42: vo,
  45: [Fh, vo],
  60: BA,
  61: Fh,
  95: vo,
  96: Vh,
  126: Vh
}, zw = {
  38: xy,
  92: Sy
}, Rw = {
  [-5]: cc,
  [-4]: cc,
  [-3]: cc,
  33: iw,
  38: xy,
  42: Ic,
  60: [lA, YA],
  91: lw,
  92: [_A, Sy],
  93: ef,
  95: Ic,
  96: vA
}, Nw = {
  null: [Ic, xw]
}, Mw = {
  null: [42, 95]
}, Ow = {
  null: []
}, _w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Mw,
  contentInitial: Cw,
  disable: Ow,
  document: Ew,
  flow: Dw,
  flowInitial: kw,
  insideSpan: Nw,
  string: zw,
  text: Rw
}, Symbol.toStringTag, { value: "Module" }));
function Iw(n, i, l) {
  let o = {
    _bufferIndex: -1,
    _index: 0,
    line: l && l.line || 1,
    column: l && l.column || 1,
    offset: l && l.offset || 0
  };
  const u = {}, c = [];
  let d = [], p = [];
  const g = {
    attempt: le(J),
    check: le(U),
    consume: K,
    enter: j,
    exit: se,
    interrupt: le(U, {
      interrupt: !0
    })
  }, m = {
    code: null,
    containerState: {},
    defineSkip: z,
    events: [],
    now: k,
    parser: n,
    previous: null,
    sliceSerialize: w,
    sliceStream: x,
    write: v
  };
  let h = i.tokenize.call(m, g);
  return i.resolveAll && c.push(i), m;
  function v(re) {
    return d = ln(d, re), L(), d[d.length - 1] !== null ? [] : (Y(i, 0), m.events = $c(c, m.events, m), m.events);
  }
  function w(re, te) {
    return Lw(x(re), te);
  }
  function x(re) {
    return Uw(d, re);
  }
  function k() {
    const {
      _bufferIndex: re,
      _index: te,
      line: W,
      column: ae,
      offset: ie
    } = o;
    return {
      _bufferIndex: re,
      _index: te,
      line: W,
      column: ae,
      offset: ie
    };
  }
  function z(re) {
    u[re.line] = re.column, we();
  }
  function L() {
    let re;
    for (; o._index < d.length; ) {
      const te = d[o._index];
      if (typeof te == "string")
        for (re = o._index, o._bufferIndex < 0 && (o._bufferIndex = 0); o._index === re && o._bufferIndex < te.length; )
          q(te.charCodeAt(o._bufferIndex));
      else
        q(te);
    }
  }
  function q(re) {
    h = h(re);
  }
  function K(re) {
    xe(re) ? (o.line++, o.column = 1, o.offset += re === -3 ? 2 : 1, we()) : re !== -1 && (o.column++, o.offset++), o._bufferIndex < 0 ? o._index++ : (o._bufferIndex++, o._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    d[o._index].length && (o._bufferIndex = -1, o._index++)), m.previous = re;
  }
  function j(re, te) {
    const W = te || {};
    return W.type = re, W.start = k(), m.events.push(["enter", W, m]), p.push(W), W;
  }
  function se(re) {
    const te = p.pop();
    return te.end = k(), m.events.push(["exit", te, m]), te;
  }
  function J(re, te) {
    Y(re, te.from);
  }
  function U(re, te) {
    te.restore();
  }
  function le(re, te) {
    return W;
    function W(ae, ie, N) {
      let G, P, Ee, b;
      return Array.isArray(ae) ? (
        /* c8 ignore next 1 */
        ee(ae)
      ) : "tokenize" in ae ? (
        // Looks like a construct.
        ee([
          /** @type {Construct} */
          ae
        ])
      ) : V(ae);
      function V(oe) {
        return Ae;
        function Ae($) {
          const Ie = $ !== null && oe[$], Te = $ !== null && oe.null, Le = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Ie) ? Ie : Ie ? [Ie] : [],
            ...Array.isArray(Te) ? Te : Te ? [Te] : []
          ];
          return ee(Le)($);
        }
      }
      function ee(oe) {
        return G = oe, P = 0, oe.length === 0 ? N : A(oe[P]);
      }
      function A(oe) {
        return Ae;
        function Ae($) {
          return b = pe(), Ee = oe, oe.partial || (m.currentConstruct = oe), oe.name && m.parser.constructs.disable.null.includes(oe.name) ? Se() : oe.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            te ? Object.assign(Object.create(m), te) : m,
            g,
            ne,
            Se
          )($);
        }
      }
      function ne(oe) {
        return re(Ee, b), ie;
      }
      function Se(oe) {
        return b.restore(), ++P < G.length ? A(G[P]) : N;
      }
    }
  }
  function Y(re, te) {
    re.resolveAll && !c.includes(re) && c.push(re), re.resolve && An(m.events, te, m.events.length - te, re.resolve(m.events.slice(te), m)), re.resolveTo && (m.events = re.resolveTo(m.events, m));
  }
  function pe() {
    const re = k(), te = m.previous, W = m.currentConstruct, ae = m.events.length, ie = Array.from(p);
    return {
      from: ae,
      restore: N
    };
    function N() {
      o = re, m.previous = te, m.currentConstruct = W, m.events.length = ae, p = ie, we();
    }
  }
  function we() {
    o.line in u && o.column < 2 && (o.column = u[o.line], o.offset += u[o.line] - 1);
  }
}
function Uw(n, i) {
  const l = i.start._index, o = i.start._bufferIndex, u = i.end._index, c = i.end._bufferIndex;
  let d;
  if (l === u)
    d = [n[l].slice(o, c)];
  else {
    if (d = n.slice(l, u), o > -1) {
      const p = d[0];
      typeof p == "string" ? d[0] = p.slice(o) : d.shift();
    }
    c > 0 && d.push(n[u].slice(0, c));
  }
  return d;
}
function Lw(n, i) {
  let l = -1;
  const o = [];
  let u;
  for (; ++l < n.length; ) {
    const c = n[l];
    let d;
    if (typeof c == "string")
      d = c;
    else switch (c) {
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
        if (!i && u) continue;
        d = " ";
        break;
      }
      default:
        d = String.fromCharCode(c);
    }
    u = c === -2, o.push(d);
  }
  return o.join("");
}
function qw(n) {
  const o = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Px([_w, ...(n || {}).extensions || []])
    ),
    content: u($x),
    defined: [],
    document: u(tA),
    flow: u(vw),
    lazy: {},
    string: u(Aw),
    text: u(ww)
  };
  return o;
  function u(c) {
    return d;
    function d(p) {
      return Iw(o, c, p);
    }
  }
}
function jw(n) {
  for (; !Ay(n); )
    ;
  return n;
}
const Ph = /[\0\t\n\r]/g;
function Bw() {
  let n = 1, i = "", l = !0, o;
  return u;
  function u(c, d, p) {
    const g = [];
    let m, h, v, w, x;
    for (c = i + (typeof c == "string" ? c.toString() : new TextDecoder(d || void 0).decode(c)), v = 0, i = "", l && (c.charCodeAt(0) === 65279 && v++, l = void 0); v < c.length; ) {
      if (Ph.lastIndex = v, m = Ph.exec(c), w = m && m.index !== void 0 ? m.index : c.length, x = c.charCodeAt(w), !m) {
        i = c.slice(v);
        break;
      }
      if (x === 10 && v === w && o)
        g.push(-3), o = void 0;
      else
        switch (o && (g.push(-5), o = void 0), v < w && (g.push(c.slice(v, w)), n += w - v), x) {
          case 0: {
            g.push(65533), n++;
            break;
          }
          case 9: {
            for (h = Math.ceil(n / 4) * 4, g.push(-2); n++ < h; ) g.push(-1);
            break;
          }
          case 10: {
            g.push(-4), n = 1;
            break;
          }
          default:
            o = !0, n = 1;
        }
      v = w + 1;
    }
    return p && (o && g.push(-5), i && g.push(i), g.push(null)), g;
  }
}
const Hw = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Vw(n) {
  return n.replace(Hw, Qw);
}
function Qw(n, i, l) {
  if (i)
    return i;
  if (l.charCodeAt(0) === 35) {
    const u = l.charCodeAt(1), c = u === 120 || u === 88;
    return by(l.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return Wc(l) || n;
}
const Dy = {}.hasOwnProperty;
function Fw(n, i, l) {
  return typeof i != "string" && (l = i, i = void 0), Pw(l)(jw(qw(l).document().write(Bw()(n, i, !0))));
}
function Pw(n) {
  const i = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: c(Li),
      autolinkProtocol: pe,
      autolinkEmail: pe,
      atxHeading: c(wn),
      blockQuote: c(Te),
      characterEscape: pe,
      characterReference: pe,
      codeFenced: c(Le),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: c(Le, d),
      codeText: c(Xe, d),
      codeTextData: pe,
      data: pe,
      codeFlowValue: pe,
      definition: c(Et),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: c(ma),
      hardBreakEscape: c(ha),
      hardBreakTrailing: c(ha),
      htmlFlow: c(wt, d),
      htmlFlowData: pe,
      htmlText: c(wt, d),
      htmlTextData: pe,
      image: c(_o),
      label: d,
      link: c(Li),
      listItem: c(Ba),
      listItemValue: w,
      listOrdered: c(qi, v),
      listUnordered: c(qi),
      paragraph: c(Io),
      reference: A,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: c(wn),
      strong: c(Jr),
      thematicBreak: c(Lo)
    },
    exit: {
      atxHeading: g(),
      atxHeadingSequence: J,
      autolink: g(),
      autolinkEmail: Ie,
      autolinkProtocol: $,
      blockQuote: g(),
      characterEscapeValue: we,
      characterReferenceMarkerHexadecimal: Se,
      characterReferenceMarkerNumeric: Se,
      characterReferenceValue: oe,
      characterReference: Ae,
      codeFenced: g(L),
      codeFencedFence: z,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: k,
      codeFlowValue: we,
      codeIndented: g(q),
      codeText: g(ie),
      codeTextData: we,
      data: we,
      definition: g(),
      definitionDestinationString: se,
      definitionLabelString: K,
      definitionTitleString: j,
      emphasis: g(),
      hardBreakEscape: g(te),
      hardBreakTrailing: g(te),
      htmlFlow: g(W),
      htmlFlowData: we,
      htmlText: g(ae),
      htmlTextData: we,
      image: g(G),
      label: Ee,
      labelText: P,
      lineEnding: re,
      link: g(N),
      listItem: g(),
      listOrdered: g(),
      listUnordered: g(),
      paragraph: g(),
      referenceString: ne,
      resourceDestinationString: b,
      resourceTitleString: V,
      resource: ee,
      setextHeading: g(Y),
      setextHeadingLineSequence: le,
      setextHeadingText: U,
      strong: g(),
      thematicBreak: g()
    }
  };
  zy(i, (n || {}).mdastExtensions || []);
  const l = {};
  return o;
  function o(B) {
    let X = {
      type: "root",
      children: []
    };
    const he = {
      stack: [X],
      tokenStack: [],
      config: i,
      enter: p,
      exit: m,
      buffer: d,
      resume: h,
      data: l
    }, be = [];
    let He = -1;
    for (; ++He < B.length; )
      if (B[He][1].type === "listOrdered" || B[He][1].type === "listUnordered")
        if (B[He][0] === "enter")
          be.push(He);
        else {
          const qt = be.pop();
          He = u(B, qt, He);
        }
    for (He = -1; ++He < B.length; ) {
      const qt = i[B[He][0]];
      Dy.call(qt, B[He][1].type) && qt[B[He][1].type].call(Object.assign({
        sliceSerialize: B[He][2].sliceSerialize
      }, he), B[He][1]);
    }
    if (he.tokenStack.length > 0) {
      const qt = he.tokenStack[he.tokenStack.length - 1];
      (qt[1] || Gh).call(he, void 0, qt[0]);
    }
    for (X.position = {
      start: da(B.length > 0 ? B[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: da(B.length > 0 ? B[B.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, He = -1; ++He < i.transforms.length; )
      X = i.transforms[He](X) || X;
    return X;
  }
  function u(B, X, he) {
    let be = X - 1, He = -1, qt = !1, Tn, Ct, pn, jt;
    for (; ++be <= he; ) {
      const ct = B[be];
      switch (ct[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ct[0] === "enter" ? He++ : He--, jt = void 0;
          break;
        }
        case "lineEndingBlank": {
          ct[0] === "enter" && (Tn && !jt && !He && !pn && (pn = be), jt = void 0);
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
      if (!He && ct[0] === "enter" && ct[1].type === "listItemPrefix" || He === -1 && ct[0] === "exit" && (ct[1].type === "listUnordered" || ct[1].type === "listOrdered")) {
        if (Tn) {
          let Kt = be;
          for (Ct = void 0; Kt--; ) {
            const on = B[Kt];
            if (on[1].type === "lineEnding" || on[1].type === "lineEndingBlank") {
              if (on[0] === "exit") continue;
              Ct && (B[Ct][1].type = "lineEndingBlank", qt = !0), on[1].type = "lineEnding", Ct = Kt;
            } else if (!(on[1].type === "linePrefix" || on[1].type === "blockQuotePrefix" || on[1].type === "blockQuotePrefixWhitespace" || on[1].type === "blockQuoteMarker" || on[1].type === "listItemIndent")) break;
          }
          pn && (!Ct || pn < Ct) && (Tn._spread = !0), Tn.end = Object.assign({}, Ct ? B[Ct][1].start : ct[1].end), B.splice(Ct || be, 0, ["exit", Tn, ct[2]]), be++, he++;
        }
        if (ct[1].type === "listItemPrefix") {
          const Kt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ct[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Tn = Kt, B.splice(be, 0, ["enter", Kt, ct[2]]), be++, he++, pn = void 0, jt = !0;
        }
      }
    }
    return B[X][1]._spread = qt, he;
  }
  function c(B, X) {
    return he;
    function he(be) {
      p.call(this, B(be), be), X && X.call(this, be);
    }
  }
  function d() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function p(B, X, he) {
    this.stack[this.stack.length - 1].children.push(B), this.stack.push(B), this.tokenStack.push([X, he || void 0]), B.position = {
      start: da(X.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function g(B) {
    return X;
    function X(he) {
      B && B.call(this, he), m.call(this, he);
    }
  }
  function m(B, X) {
    const he = this.stack.pop(), be = this.tokenStack.pop();
    if (be)
      be[0].type !== B.type && (X ? X.call(this, B, be[0]) : (be[1] || Gh).call(this, B, be[0]));
    else throw new Error("Cannot close `" + B.type + "` (" + Vr({
      start: B.start,
      end: B.end
    }) + "): it’s not open");
    he.position.end = da(B.end);
  }
  function h() {
    return Qx(this.stack.pop());
  }
  function v() {
    this.data.expectingFirstListItemValue = !0;
  }
  function w(B) {
    if (this.data.expectingFirstListItemValue) {
      const X = this.stack[this.stack.length - 2];
      X.start = Number.parseInt(this.sliceSerialize(B), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function x() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.lang = B;
  }
  function k() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.meta = B;
  }
  function z() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function L() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.value = B.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function q() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.value = B.replace(/(\r?\n|\r)$/g, "");
  }
  function K(B) {
    const X = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = X, he.identifier = Ri(this.sliceSerialize(B)).toLowerCase();
  }
  function j() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.title = B;
  }
  function se() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.url = B;
  }
  function J(B) {
    const X = this.stack[this.stack.length - 1];
    if (!X.depth) {
      const he = this.sliceSerialize(B).length;
      X.depth = he;
    }
  }
  function U() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function le(B) {
    const X = this.stack[this.stack.length - 1];
    X.depth = this.sliceSerialize(B).codePointAt(0) === 61 ? 1 : 2;
  }
  function Y() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function pe(B) {
    const he = this.stack[this.stack.length - 1].children;
    let be = he[he.length - 1];
    (!be || be.type !== "text") && (be = Uo(), be.position = {
      start: da(B.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, he.push(be)), this.stack.push(be);
  }
  function we(B) {
    const X = this.stack.pop();
    X.value += this.sliceSerialize(B), X.position.end = da(B.end);
  }
  function re(B) {
    const X = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const he = X.children[X.children.length - 1];
      he.position.end = da(B.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(X.type) && (pe.call(this, B), we.call(this, B));
  }
  function te() {
    this.data.atHardBreak = !0;
  }
  function W() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.value = B;
  }
  function ae() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.value = B;
  }
  function ie() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.value = B;
  }
  function N() {
    const B = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const X = this.data.referenceType || "shortcut";
      B.type += "Reference", B.referenceType = X, delete B.url, delete B.title;
    } else
      delete B.identifier, delete B.label;
    this.data.referenceType = void 0;
  }
  function G() {
    const B = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const X = this.data.referenceType || "shortcut";
      B.type += "Reference", B.referenceType = X, delete B.url, delete B.title;
    } else
      delete B.identifier, delete B.label;
    this.data.referenceType = void 0;
  }
  function P(B) {
    const X = this.sliceSerialize(B), he = this.stack[this.stack.length - 2];
    he.label = Vw(X), he.identifier = Ri(X).toLowerCase();
  }
  function Ee() {
    const B = this.stack[this.stack.length - 1], X = this.resume(), he = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, he.type === "link") {
      const be = B.children;
      he.children = be;
    } else
      he.alt = X;
  }
  function b() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.url = B;
  }
  function V() {
    const B = this.resume(), X = this.stack[this.stack.length - 1];
    X.title = B;
  }
  function ee() {
    this.data.inReference = void 0;
  }
  function A() {
    this.data.referenceType = "collapsed";
  }
  function ne(B) {
    const X = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = X, he.identifier = Ri(this.sliceSerialize(B)).toLowerCase(), this.data.referenceType = "full";
  }
  function Se(B) {
    this.data.characterReferenceType = B.type;
  }
  function oe(B) {
    const X = this.sliceSerialize(B), he = this.data.characterReferenceType;
    let be;
    he ? (be = by(X, he === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : be = Wc(X);
    const He = this.stack[this.stack.length - 1];
    He.value += be;
  }
  function Ae(B) {
    const X = this.stack.pop();
    X.position.end = da(B.end);
  }
  function $(B) {
    we.call(this, B);
    const X = this.stack[this.stack.length - 1];
    X.url = this.sliceSerialize(B);
  }
  function Ie(B) {
    we.call(this, B);
    const X = this.stack[this.stack.length - 1];
    X.url = "mailto:" + this.sliceSerialize(B);
  }
  function Te() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Le() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Xe() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Et() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function ma() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function wn() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function ha() {
    return {
      type: "break"
    };
  }
  function wt() {
    return {
      type: "html",
      value: ""
    };
  }
  function _o() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Li() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function qi(B) {
    return {
      type: "list",
      ordered: B.type === "listOrdered",
      start: null,
      spread: B._spread,
      children: []
    };
  }
  function Ba(B) {
    return {
      type: "listItem",
      spread: B._spread,
      checked: null,
      children: []
    };
  }
  function Io() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Jr() {
    return {
      type: "strong",
      children: []
    };
  }
  function Uo() {
    return {
      type: "text",
      value: ""
    };
  }
  function Lo() {
    return {
      type: "thematicBreak"
    };
  }
}
function da(n) {
  return {
    line: n.line,
    column: n.column,
    offset: n.offset
  };
}
function zy(n, i) {
  let l = -1;
  for (; ++l < i.length; ) {
    const o = i[l];
    Array.isArray(o) ? zy(n, o) : Gw(n, o);
  }
}
function Gw(n, i) {
  let l;
  for (l in i)
    if (Dy.call(i, l))
      switch (l) {
        case "canContainEols": {
          const o = i[l];
          o && n[l].push(...o);
          break;
        }
        case "transforms": {
          const o = i[l];
          o && n[l].push(...o);
          break;
        }
        case "enter":
        case "exit": {
          const o = i[l];
          o && Object.assign(n[l], o);
          break;
        }
      }
}
function Gh(n, i) {
  throw n ? new Error("Cannot close `" + n.type + "` (" + Vr({
    start: n.start,
    end: n.end
  }) + "): a different token (`" + i.type + "`, " + Vr({
    start: i.start,
    end: i.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + Vr({
    start: i.start,
    end: i.end
  }) + ") is still open");
}
function Yw(n) {
  const i = this;
  i.parser = l;
  function l(o) {
    return Fw(o, {
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
function Xw(n, i) {
  const l = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(i), !0)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function Kw(n, i) {
  const l = { type: "element", tagName: "br", properties: {}, children: [] };
  return n.patch(i, l), [n.applyData(i, l), { type: "text", value: `
` }];
}
function Zw(n, i) {
  const l = i.value ? i.value + `
` : "", o = {};
  i.lang && (o.className = ["language-" + i.lang]);
  let u = {
    type: "element",
    tagName: "code",
    properties: o,
    children: [{ type: "text", value: l }]
  };
  return i.meta && (u.data = { meta: i.meta }), n.patch(i, u), u = n.applyData(i, u), u = { type: "element", tagName: "pre", properties: {}, children: [u] }, n.patch(i, u), u;
}
function Jw(n, i) {
  const l = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function Ww(n, i) {
  const l = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function $w(n, i) {
  const l = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", o = String(i.identifier).toUpperCase(), u = Ui(o.toLowerCase()), c = n.footnoteOrder.indexOf(o);
  let d, p = n.footnoteCounts.get(o);
  p === void 0 ? (p = 0, n.footnoteOrder.push(o), d = n.footnoteOrder.length) : d = c + 1, p += 1, n.footnoteCounts.set(o, p);
  const g = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + l + "fn-" + u,
      id: l + "fnref-" + u + (p > 1 ? "-" + p : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(d) }]
  };
  n.patch(i, g);
  const m = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [g]
  };
  return n.patch(i, m), n.applyData(i, m);
}
function eT(n, i) {
  const l = {
    type: "element",
    tagName: "h" + i.depth,
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function tT(n, i) {
  if (n.options.allowDangerousHtml) {
    const l = { type: "raw", value: i.value };
    return n.patch(i, l), n.applyData(i, l);
  }
}
function Ry(n, i) {
  const l = i.referenceType;
  let o = "]";
  if (l === "collapsed" ? o += "[]" : l === "full" && (o += "[" + (i.label || i.identifier) + "]"), i.type === "imageReference")
    return [{ type: "text", value: "![" + i.alt + o }];
  const u = n.all(i), c = u[0];
  c && c.type === "text" ? c.value = "[" + c.value : u.unshift({ type: "text", value: "[" });
  const d = u[u.length - 1];
  return d && d.type === "text" ? d.value += o : u.push({ type: "text", value: o }), u;
}
function nT(n, i) {
  const l = String(i.identifier).toUpperCase(), o = n.definitionById.get(l);
  if (!o)
    return Ry(n, i);
  const u = { src: Ui(o.url || ""), alt: i.alt };
  o.title !== null && o.title !== void 0 && (u.title = o.title);
  const c = { type: "element", tagName: "img", properties: u, children: [] };
  return n.patch(i, c), n.applyData(i, c);
}
function aT(n, i) {
  const l = { src: Ui(i.url) };
  i.alt !== null && i.alt !== void 0 && (l.alt = i.alt), i.title !== null && i.title !== void 0 && (l.title = i.title);
  const o = { type: "element", tagName: "img", properties: l, children: [] };
  return n.patch(i, o), n.applyData(i, o);
}
function iT(n, i) {
  const l = { type: "text", value: i.value.replace(/\r?\n|\r/g, " ") };
  n.patch(i, l);
  const o = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [l]
  };
  return n.patch(i, o), n.applyData(i, o);
}
function rT(n, i) {
  const l = String(i.identifier).toUpperCase(), o = n.definitionById.get(l);
  if (!o)
    return Ry(n, i);
  const u = { href: Ui(o.url || "") };
  o.title !== null && o.title !== void 0 && (u.title = o.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: u,
    children: n.all(i)
  };
  return n.patch(i, c), n.applyData(i, c);
}
function lT(n, i) {
  const l = { href: Ui(i.url) };
  i.title !== null && i.title !== void 0 && (l.title = i.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: l,
    children: n.all(i)
  };
  return n.patch(i, o), n.applyData(i, o);
}
function oT(n, i, l) {
  const o = n.all(i), u = l ? sT(l) : Ny(i), c = {}, d = [];
  if (typeof i.checked == "boolean") {
    const h = o[0];
    let v;
    h && h.type === "element" && h.tagName === "p" ? v = h : (v = { type: "element", tagName: "p", properties: {}, children: [] }, o.unshift(v)), v.children.length > 0 && v.children.unshift({ type: "text", value: " " }), v.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: i.checked, disabled: !0 },
      children: []
    }), c.className = ["task-list-item"];
  }
  let p = -1;
  for (; ++p < o.length; ) {
    const h = o[p];
    (u || p !== 0 || h.type !== "element" || h.tagName !== "p") && d.push({ type: "text", value: `
` }), h.type === "element" && h.tagName === "p" && !u ? d.push(...h.children) : d.push(h);
  }
  const g = o[o.length - 1];
  g && (u || g.type !== "element" || g.tagName !== "p") && d.push({ type: "text", value: `
` });
  const m = { type: "element", tagName: "li", properties: c, children: d };
  return n.patch(i, m), n.applyData(i, m);
}
function sT(n) {
  let i = !1;
  if (n.type === "list") {
    i = n.spread || !1;
    const l = n.children;
    let o = -1;
    for (; !i && ++o < l.length; )
      i = Ny(l[o]);
  }
  return i;
}
function Ny(n) {
  const i = n.spread;
  return i ?? n.children.length > 1;
}
function uT(n, i) {
  const l = {}, o = n.all(i);
  let u = -1;
  for (typeof i.start == "number" && i.start !== 1 && (l.start = i.start); ++u < o.length; ) {
    const d = o[u];
    if (d.type === "element" && d.tagName === "li" && d.properties && Array.isArray(d.properties.className) && d.properties.className.includes("task-list-item")) {
      l.className = ["contains-task-list"];
      break;
    }
  }
  const c = {
    type: "element",
    tagName: i.ordered ? "ol" : "ul",
    properties: l,
    children: n.wrap(o, !0)
  };
  return n.patch(i, c), n.applyData(i, c);
}
function cT(n, i) {
  const l = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function fT(n, i) {
  const l = { type: "root", children: n.wrap(n.all(i)) };
  return n.patch(i, l), n.applyData(i, l);
}
function dT(n, i) {
  const l = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function pT(n, i) {
  const l = n.all(i), o = l.shift(), u = [];
  if (o) {
    const d = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: n.wrap([o], !0)
    };
    n.patch(i.children[0], d), u.push(d);
  }
  if (l.length > 0) {
    const d = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: n.wrap(l, !0)
    }, p = Xc(i.children[1]), g = fy(i.children[i.children.length - 1]);
    p && g && (d.position = { start: p, end: g }), u.push(d);
  }
  const c = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(u, !0)
  };
  return n.patch(i, c), n.applyData(i, c);
}
function mT(n, i, l) {
  const o = l ? l.children : void 0, c = (o ? o.indexOf(i) : 1) === 0 ? "th" : "td", d = l && l.type === "table" ? l.align : void 0, p = d ? d.length : i.children.length;
  let g = -1;
  const m = [];
  for (; ++g < p; ) {
    const v = i.children[g], w = {}, x = d ? d[g] : void 0;
    x && (w.align = x);
    let k = { type: "element", tagName: c, properties: w, children: [] };
    v && (k.children = n.all(v), n.patch(v, k), k = n.applyData(v, k)), m.push(k);
  }
  const h = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: n.wrap(m, !0)
  };
  return n.patch(i, h), n.applyData(i, h);
}
function hT(n, i) {
  const l = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
const Yh = 9, Xh = 32;
function gT(n) {
  const i = String(n), l = /\r?\n|\r/g;
  let o = l.exec(i), u = 0;
  const c = [];
  for (; o; )
    c.push(
      Kh(i.slice(u, o.index), u > 0, !0),
      o[0]
    ), u = o.index + o[0].length, o = l.exec(i);
  return c.push(Kh(i.slice(u), u > 0, !1)), c.join("");
}
function Kh(n, i, l) {
  let o = 0, u = n.length;
  if (i) {
    let c = n.codePointAt(o);
    for (; c === Yh || c === Xh; )
      o++, c = n.codePointAt(o);
  }
  if (l) {
    let c = n.codePointAt(u - 1);
    for (; c === Yh || c === Xh; )
      u--, c = n.codePointAt(u - 1);
  }
  return u > o ? n.slice(o, u) : "";
}
function yT(n, i) {
  const l = { type: "text", value: gT(String(i.value)) };
  return n.patch(i, l), n.applyData(i, l);
}
function bT(n, i) {
  const l = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return n.patch(i, l), n.applyData(i, l);
}
const vT = {
  blockquote: Xw,
  break: Kw,
  code: Zw,
  delete: Jw,
  emphasis: Ww,
  footnoteReference: $w,
  heading: eT,
  html: tT,
  imageReference: nT,
  image: aT,
  inlineCode: iT,
  linkReference: rT,
  link: lT,
  listItem: oT,
  list: uT,
  paragraph: cT,
  // @ts-expect-error: root is different, but hard to type.
  root: fT,
  strong: dT,
  table: pT,
  tableCell: hT,
  tableRow: mT,
  text: yT,
  thematicBreak: bT,
  toml: co,
  yaml: co,
  definition: co,
  footnoteDefinition: co
};
function co() {
}
const My = -1, Mo = 0, Fr = 1, Ao = 2, tf = 3, nf = 4, af = 5, rf = 6, Oy = 7, _y = 8, Zh = typeof self == "object" ? self : globalThis, ST = (n, i) => {
  const l = (u, c) => (n.set(c, u), u), o = (u) => {
    if (n.has(u))
      return n.get(u);
    const [c, d] = i[u];
    switch (c) {
      case Mo:
      case My:
        return l(d, u);
      case Fr: {
        const p = l([], u);
        for (const g of d)
          p.push(o(g));
        return p;
      }
      case Ao: {
        const p = l({}, u);
        for (const [g, m] of d)
          p[o(g)] = o(m);
        return p;
      }
      case tf:
        return l(new Date(d), u);
      case nf: {
        const { source: p, flags: g } = d;
        return l(new RegExp(p, g), u);
      }
      case af: {
        const p = l(/* @__PURE__ */ new Map(), u);
        for (const [g, m] of d)
          p.set(o(g), o(m));
        return p;
      }
      case rf: {
        const p = l(/* @__PURE__ */ new Set(), u);
        for (const g of d)
          p.add(o(g));
        return p;
      }
      case Oy: {
        const { name: p, message: g } = d;
        return l(new Zh[p](g), u);
      }
      case _y:
        return l(BigInt(d), u);
      case "BigInt":
        return l(Object(BigInt(d)), u);
      case "ArrayBuffer":
        return l(new Uint8Array(d).buffer, d);
      case "DataView": {
        const { buffer: p } = new Uint8Array(d);
        return l(new DataView(p), d);
      }
    }
    return l(new Zh[c](d), u);
  };
  return o;
}, Jh = (n) => ST(/* @__PURE__ */ new Map(), n)(0), Di = "", { toString: xT } = {}, { keys: AT } = Object, Hr = (n) => {
  const i = typeof n;
  if (i !== "object" || !n)
    return [Mo, i];
  const l = xT.call(n).slice(8, -1);
  switch (l) {
    case "Array":
      return [Fr, Di];
    case "Object":
      return [Ao, Di];
    case "Date":
      return [tf, Di];
    case "RegExp":
      return [nf, Di];
    case "Map":
      return [af, Di];
    case "Set":
      return [rf, Di];
    case "DataView":
      return [Fr, l];
  }
  return l.includes("Array") ? [Fr, l] : l.includes("Error") ? [Oy, l] : [Ao, l];
}, fo = ([n, i]) => n === Mo && (i === "function" || i === "symbol"), wT = (n, i, l, o) => {
  const u = (d, p) => {
    const g = o.push(d) - 1;
    return l.set(p, g), g;
  }, c = (d) => {
    if (l.has(d))
      return l.get(d);
    let [p, g] = Hr(d);
    switch (p) {
      case Mo: {
        let h = d;
        switch (g) {
          case "bigint":
            p = _y, h = d.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + g);
            h = null;
            break;
          case "undefined":
            return u([My], d);
        }
        return u([p, h], d);
      }
      case Fr: {
        if (g) {
          let w = d;
          return g === "DataView" ? w = new Uint8Array(d.buffer) : g === "ArrayBuffer" && (w = new Uint8Array(d)), u([g, [...w]], d);
        }
        const h = [], v = u([p, h], d);
        for (const w of d)
          h.push(c(w));
        return v;
      }
      case Ao: {
        if (g)
          switch (g) {
            case "BigInt":
              return u([g, d.toString()], d);
            case "Boolean":
            case "Number":
            case "String":
              return u([g, d.valueOf()], d);
          }
        if (i && "toJSON" in d)
          return c(d.toJSON());
        const h = [], v = u([p, h], d);
        for (const w of AT(d))
          (n || !fo(Hr(d[w]))) && h.push([c(w), c(d[w])]);
        return v;
      }
      case tf:
        return u([p, d.toISOString()], d);
      case nf: {
        const { source: h, flags: v } = d;
        return u([p, { source: h, flags: v }], d);
      }
      case af: {
        const h = [], v = u([p, h], d);
        for (const [w, x] of d)
          (n || !(fo(Hr(w)) || fo(Hr(x)))) && h.push([c(w), c(x)]);
        return v;
      }
      case rf: {
        const h = [], v = u([p, h], d);
        for (const w of d)
          (n || !fo(Hr(w))) && h.push(c(w));
        return v;
      }
    }
    const { message: m } = d;
    return u([p, { name: g, message: m }], d);
  };
  return c;
}, Wh = (n, { json: i, lossy: l } = {}) => {
  const o = [];
  return wT(!(i || l), !!i, /* @__PURE__ */ new Map(), o)(n), o;
}, wo = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, i) => i && ("json" in i || "lossy" in i) ? Jh(Wh(n, i)) : structuredClone(n)
) : (n, i) => Jh(Wh(n, i));
function TT(n, i) {
  const l = [{ type: "text", value: "↩" }];
  return i > 1 && l.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(i) }]
  }), l;
}
function ET(n, i) {
  return "Back to reference " + (n + 1) + (i > 1 ? "-" + i : "");
}
function CT(n) {
  const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", l = n.options.footnoteBackContent || TT, o = n.options.footnoteBackLabel || ET, u = n.options.footnoteLabel || "Footnotes", c = n.options.footnoteLabelTagName || "h2", d = n.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let g = -1;
  for (; ++g < n.footnoteOrder.length; ) {
    const m = n.footnoteById.get(
      n.footnoteOrder[g]
    );
    if (!m)
      continue;
    const h = n.all(m), v = String(m.identifier).toUpperCase(), w = Ui(v.toLowerCase());
    let x = 0;
    const k = [], z = n.footnoteCounts.get(v);
    for (; z !== void 0 && ++x <= z; ) {
      k.length > 0 && k.push({ type: "text", value: " " });
      let K = typeof l == "string" ? l : l(g, x);
      typeof K == "string" && (K = { type: "text", value: K }), k.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + i + "fnref-" + w + (x > 1 ? "-" + x : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof o == "string" ? o : o(g, x),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(K) ? K : [K]
      });
    }
    const L = h[h.length - 1];
    if (L && L.type === "element" && L.tagName === "p") {
      const K = L.children[L.children.length - 1];
      K && K.type === "text" ? K.value += " " : L.children.push({ type: "text", value: " " }), L.children.push(...k);
    } else
      h.push(...k);
    const q = {
      type: "element",
      tagName: "li",
      properties: { id: i + "fn-" + w },
      children: n.wrap(h, !0)
    };
    n.patch(m, q), p.push(q);
  }
  if (p.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: c,
          properties: {
            ...wo(d),
            id: "footnote-label"
          },
          children: [{ type: "text", value: u }]
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
const Iy = (
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
      return RT;
    if (typeof n == "function")
      return Oo(n);
    if (typeof n == "object")
      return Array.isArray(n) ? kT(n) : DT(n);
    if (typeof n == "string")
      return zT(n);
    throw new Error("Expected function, string, or object as test");
  }
);
function kT(n) {
  const i = [];
  let l = -1;
  for (; ++l < n.length; )
    i[l] = Iy(n[l]);
  return Oo(o);
  function o(...u) {
    let c = -1;
    for (; ++c < i.length; )
      if (i[c].apply(this, u)) return !0;
    return !1;
  }
}
function DT(n) {
  const i = (
    /** @type {Record<string, unknown>} */
    n
  );
  return Oo(l);
  function l(o) {
    const u = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      o
    );
    let c;
    for (c in n)
      if (u[c] !== i[c]) return !1;
    return !0;
  }
}
function zT(n) {
  return Oo(i);
  function i(l) {
    return l && l.type === n;
  }
}
function Oo(n) {
  return i;
  function i(l, o, u) {
    return !!(NT(l) && n.call(
      this,
      l,
      typeof o == "number" ? o : void 0,
      u || void 0
    ));
  }
}
function RT() {
  return !0;
}
function NT(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const Uy = [], MT = !0, $h = !1, OT = "skip";
function _T(n, i, l, o) {
  let u;
  typeof i == "function" && typeof l != "function" ? (o = l, l = i) : u = i;
  const c = Iy(u), d = o ? -1 : 1;
  p(n, void 0, [])();
  function p(g, m, h) {
    const v = (
      /** @type {Record<string, unknown>} */
      g && typeof g == "object" ? g : {}
    );
    if (typeof v.type == "string") {
      const x = (
        // `hast`
        typeof v.tagName == "string" ? v.tagName : (
          // `xast`
          typeof v.name == "string" ? v.name : void 0
        )
      );
      Object.defineProperty(w, "name", {
        value: "node (" + (g.type + (x ? "<" + x + ">" : "")) + ")"
      });
    }
    return w;
    function w() {
      let x = Uy, k, z, L;
      if ((!i || c(g, m, h[h.length - 1] || void 0)) && (x = IT(l(g, h)), x[0] === $h))
        return x;
      if ("children" in g && g.children) {
        const q = (
          /** @type {UnistParent} */
          g
        );
        if (q.children && x[0] !== OT)
          for (z = (o ? q.children.length : -1) + d, L = h.concat(q); z > -1 && z < q.children.length; ) {
            const K = q.children[z];
            if (k = p(K, z, L)(), k[0] === $h)
              return k;
            z = typeof k[1] == "number" ? k[1] : z + d;
          }
      }
      return x;
    }
  }
}
function IT(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [MT, n] : n == null ? Uy : [n];
}
function Ly(n, i, l, o) {
  let u, c, d;
  typeof i == "function" && typeof l != "function" ? (c = void 0, d = i, u = l) : (c = i, d = l, u = o), _T(n, c, p, u);
  function p(g, m) {
    const h = m[m.length - 1], v = h ? h.children.indexOf(g) : void 0;
    return d(g, v, h);
  }
}
const Uc = {}.hasOwnProperty, UT = {};
function LT(n, i) {
  const l = i || UT, o = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = { ...vT, ...l.handlers }, p = {
    all: m,
    applyData: jT,
    definitionById: o,
    footnoteById: u,
    footnoteCounts: c,
    footnoteOrder: [],
    handlers: d,
    one: g,
    options: l,
    patch: qT,
    wrap: HT
  };
  return Ly(n, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const v = h.type === "definition" ? o : u, w = String(h.identifier).toUpperCase();
      v.has(w) || v.set(w, h);
    }
  }), p;
  function g(h, v) {
    const w = h.type, x = p.handlers[w];
    if (Uc.call(p.handlers, w) && x)
      return x(p, h, v);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ("children" in h) {
        const { children: z, ...L } = h, q = wo(L);
        return q.children = p.all(h), q;
      }
      return wo(h);
    }
    return (p.options.unknownHandler || BT)(p, h, v);
  }
  function m(h) {
    const v = [];
    if ("children" in h) {
      const w = h.children;
      let x = -1;
      for (; ++x < w.length; ) {
        const k = p.one(w[x], h);
        if (k) {
          if (x && w[x - 1].type === "break" && (!Array.isArray(k) && k.type === "text" && (k.value = eg(k.value)), !Array.isArray(k) && k.type === "element")) {
            const z = k.children[0];
            z && z.type === "text" && (z.value = eg(z.value));
          }
          Array.isArray(k) ? v.push(...k) : v.push(k);
        }
      }
    }
    return v;
  }
}
function qT(n, i) {
  n.position && (i.position = xx(n));
}
function jT(n, i) {
  let l = i;
  if (n && n.data) {
    const o = n.data.hName, u = n.data.hChildren, c = n.data.hProperties;
    if (typeof o == "string")
      if (l.type === "element")
        l.tagName = o;
      else {
        const d = "children" in l ? l.children : [l];
        l = { type: "element", tagName: o, properties: {}, children: d };
      }
    l.type === "element" && c && Object.assign(l.properties, wo(c)), "children" in l && l.children && u !== null && u !== void 0 && (l.children = u);
  }
  return l;
}
function BT(n, i) {
  const l = i.data || {}, o = "value" in i && !(Uc.call(l, "hProperties") || Uc.call(l, "hChildren")) ? { type: "text", value: i.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, o), n.applyData(i, o);
}
function HT(n, i) {
  const l = [];
  let o = -1;
  for (i && l.push({ type: "text", value: `
` }); ++o < n.length; )
    o && l.push({ type: "text", value: `
` }), l.push(n[o]);
  return i && n.length > 0 && l.push({ type: "text", value: `
` }), l;
}
function eg(n) {
  let i = 0, l = n.charCodeAt(i);
  for (; l === 9 || l === 32; )
    i++, l = n.charCodeAt(i);
  return n.slice(i);
}
function tg(n, i) {
  const l = LT(n, i), o = l.one(n, void 0), u = CT(l), c = Array.isArray(o) ? { type: "root", children: o } : o || { type: "root", children: [] };
  return u && c.children.push({ type: "text", value: `
` }, u), c;
}
function VT(n, i) {
  return n && "run" in n ? async function(l, o) {
    const u = (
      /** @type {HastRoot} */
      tg(l, { file: o, ...i })
    );
    await n.run(u, o);
  } : function(l, o) {
    return (
      /** @type {HastRoot} */
      tg(l, { file: o, ...n || i })
    );
  };
}
function ng(n) {
  if (n)
    throw n;
}
var fc, ag;
function QT() {
  if (ag) return fc;
  ag = 1;
  var n = Object.prototype.hasOwnProperty, i = Object.prototype.toString, l = Object.defineProperty, o = Object.getOwnPropertyDescriptor, u = function(m) {
    return typeof Array.isArray == "function" ? Array.isArray(m) : i.call(m) === "[object Array]";
  }, c = function(m) {
    if (!m || i.call(m) !== "[object Object]")
      return !1;
    var h = n.call(m, "constructor"), v = m.constructor && m.constructor.prototype && n.call(m.constructor.prototype, "isPrototypeOf");
    if (m.constructor && !h && !v)
      return !1;
    var w;
    for (w in m)
      ;
    return typeof w > "u" || n.call(m, w);
  }, d = function(m, h) {
    l && h.name === "__proto__" ? l(m, h.name, {
      enumerable: !0,
      configurable: !0,
      value: h.newValue,
      writable: !0
    }) : m[h.name] = h.newValue;
  }, p = function(m, h) {
    if (h === "__proto__")
      if (n.call(m, h)) {
        if (o)
          return o(m, h).value;
      } else return;
    return m[h];
  };
  return fc = function g() {
    var m, h, v, w, x, k, z = arguments[0], L = 1, q = arguments.length, K = !1;
    for (typeof z == "boolean" && (K = z, z = arguments[1] || {}, L = 2), (z == null || typeof z != "object" && typeof z != "function") && (z = {}); L < q; ++L)
      if (m = arguments[L], m != null)
        for (h in m)
          v = p(z, h), w = p(m, h), z !== w && (K && w && (c(w) || (x = u(w))) ? (x ? (x = !1, k = v && u(v) ? v : []) : k = v && c(v) ? v : {}, d(z, { name: h, newValue: g(K, k, w) })) : typeof w < "u" && d(z, { name: h, newValue: w }));
    return z;
  }, fc;
}
var FT = QT();
const dc = /* @__PURE__ */ Bc(FT);
function Lc(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const i = Object.getPrototypeOf(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function PT() {
  const n = [], i = { run: l, use: o };
  return i;
  function l(...u) {
    let c = -1;
    const d = u.pop();
    if (typeof d != "function")
      throw new TypeError("Expected function as last argument, not " + d);
    p(null, ...u);
    function p(g, ...m) {
      const h = n[++c];
      let v = -1;
      if (g) {
        d(g);
        return;
      }
      for (; ++v < u.length; )
        (m[v] === null || m[v] === void 0) && (m[v] = u[v]);
      u = m, h ? GT(h, p)(...m) : d(null, ...m);
    }
  }
  function o(u) {
    if (typeof u != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + u
      );
    return n.push(u), i;
  }
}
function GT(n, i) {
  let l;
  return o;
  function o(...d) {
    const p = n.length > d.length;
    let g;
    p && d.push(u);
    try {
      g = n.apply(this, d);
    } catch (m) {
      const h = (
        /** @type {Error} */
        m
      );
      if (p && l)
        throw h;
      return u(h);
    }
    p || (g && g.then && typeof g.then == "function" ? g.then(c, u) : g instanceof Error ? u(g) : c(g));
  }
  function u(d, ...p) {
    l || (l = !0, i(d, ...p));
  }
  function c(d) {
    u(null, d);
  }
}
const Sn = { basename: YT, dirname: XT, extname: KT, join: ZT, sep: "/" };
function YT(n, i) {
  if (i !== void 0 && typeof i != "string")
    throw new TypeError('"ext" argument must be a string');
  Zr(n);
  let l = 0, o = -1, u = n.length, c;
  if (i === void 0 || i.length === 0 || i.length > n.length) {
    for (; u--; )
      if (n.codePointAt(u) === 47) {
        if (c) {
          l = u + 1;
          break;
        }
      } else o < 0 && (c = !0, o = u + 1);
    return o < 0 ? "" : n.slice(l, o);
  }
  if (i === n)
    return "";
  let d = -1, p = i.length - 1;
  for (; u--; )
    if (n.codePointAt(u) === 47) {
      if (c) {
        l = u + 1;
        break;
      }
    } else
      d < 0 && (c = !0, d = u + 1), p > -1 && (n.codePointAt(u) === i.codePointAt(p--) ? p < 0 && (o = u) : (p = -1, o = d));
  return l === o ? o = d : o < 0 && (o = n.length), n.slice(l, o);
}
function XT(n) {
  if (Zr(n), n.length === 0)
    return ".";
  let i = -1, l = n.length, o;
  for (; --l; )
    if (n.codePointAt(l) === 47) {
      if (o) {
        i = l;
        break;
      }
    } else o || (o = !0);
  return i < 0 ? n.codePointAt(0) === 47 ? "/" : "." : i === 1 && n.codePointAt(0) === 47 ? "//" : n.slice(0, i);
}
function KT(n) {
  Zr(n);
  let i = n.length, l = -1, o = 0, u = -1, c = 0, d;
  for (; i--; ) {
    const p = n.codePointAt(i);
    if (p === 47) {
      if (d) {
        o = i + 1;
        break;
      }
      continue;
    }
    l < 0 && (d = !0, l = i + 1), p === 46 ? u < 0 ? u = i : c !== 1 && (c = 1) : u > -1 && (c = -1);
  }
  return u < 0 || l < 0 || // We saw a non-dot character immediately before the dot.
  c === 0 || // The (right-most) trimmed path component is exactly `..`.
  c === 1 && u === l - 1 && u === o + 1 ? "" : n.slice(u, l);
}
function ZT(...n) {
  let i = -1, l;
  for (; ++i < n.length; )
    Zr(n[i]), n[i] && (l = l === void 0 ? n[i] : l + "/" + n[i]);
  return l === void 0 ? "." : JT(l);
}
function JT(n) {
  Zr(n);
  const i = n.codePointAt(0) === 47;
  let l = WT(n, !i);
  return l.length === 0 && !i && (l = "."), l.length > 0 && n.codePointAt(n.length - 1) === 47 && (l += "/"), i ? "/" + l : l;
}
function WT(n, i) {
  let l = "", o = 0, u = -1, c = 0, d = -1, p, g;
  for (; ++d <= n.length; ) {
    if (d < n.length)
      p = n.codePointAt(d);
    else {
      if (p === 47)
        break;
      p = 47;
    }
    if (p === 47) {
      if (!(u === d - 1 || c === 1)) if (u !== d - 1 && c === 2) {
        if (l.length < 2 || o !== 2 || l.codePointAt(l.length - 1) !== 46 || l.codePointAt(l.length - 2) !== 46) {
          if (l.length > 2) {
            if (g = l.lastIndexOf("/"), g !== l.length - 1) {
              g < 0 ? (l = "", o = 0) : (l = l.slice(0, g), o = l.length - 1 - l.lastIndexOf("/")), u = d, c = 0;
              continue;
            }
          } else if (l.length > 0) {
            l = "", o = 0, u = d, c = 0;
            continue;
          }
        }
        i && (l = l.length > 0 ? l + "/.." : "..", o = 2);
      } else
        l.length > 0 ? l += "/" + n.slice(u + 1, d) : l = n.slice(u + 1, d), o = d - u - 1;
      u = d, c = 0;
    } else p === 46 && c > -1 ? c++ : c = -1;
  }
  return l;
}
function Zr(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
const $T = { cwd: eE };
function eE() {
  return "/";
}
function qc(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function tE(n) {
  if (typeof n == "string")
    n = new URL(n);
  else if (!qc(n)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + "`"
    );
    throw i.code = "ERR_INVALID_ARG_TYPE", i;
  }
  if (n.protocol !== "file:") {
    const i = new TypeError("The URL must be of scheme file");
    throw i.code = "ERR_INVALID_URL_SCHEME", i;
  }
  return nE(n);
}
function nE(n) {
  if (n.hostname !== "") {
    const o = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw o.code = "ERR_INVALID_FILE_URL_HOST", o;
  }
  const i = n.pathname;
  let l = -1;
  for (; ++l < i.length; )
    if (i.codePointAt(l) === 37 && i.codePointAt(l + 1) === 50) {
      const o = i.codePointAt(l + 2);
      if (o === 70 || o === 102) {
        const u = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw u.code = "ERR_INVALID_FILE_URL_PATH", u;
      }
    }
  return decodeURIComponent(i);
}
const pc = (
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
class qy {
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
    let l;
    i ? qc(i) ? l = { path: i } : typeof i == "string" || aE(i) ? l = { value: i } : l = i : l = {}, this.cwd = "cwd" in l ? "" : $T.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let o = -1;
    for (; ++o < pc.length; ) {
      const c = pc[o];
      c in l && l[c] !== void 0 && l[c] !== null && (this[c] = c === "history" ? [...l[c]] : l[c]);
    }
    let u;
    for (u in l)
      pc.includes(u) || (this[u] = l[u]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Sn.basename(this.path) : void 0;
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
    hc(i, "basename"), mc(i, "basename"), this.path = Sn.join(this.dirname || "", i);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Sn.dirname(this.path) : void 0;
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
    ig(this.basename, "dirname"), this.path = Sn.join(i || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Sn.extname(this.path) : void 0;
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
    if (mc(i, "extname"), ig(this.dirname, "extname"), i) {
      if (i.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (i.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Sn.join(this.dirname, this.stem + (i || ""));
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
    qc(i) && (i = tE(i)), hc(i, "path"), this.path !== i && this.history.push(i);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Sn.basename(this.path, this.extname) : void 0;
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
    hc(i, "stem"), mc(i, "stem"), this.path = Sn.join(this.dirname || "", i + (this.extname || ""));
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
  fail(i, l, o) {
    const u = this.message(i, l, o);
    throw u.fatal = !0, u;
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
  info(i, l, o) {
    const u = this.message(i, l, o);
    return u.fatal = void 0, u;
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
  message(i, l, o) {
    const u = new At(
      // @ts-expect-error: the overloads are fine.
      i,
      l,
      o
    );
    return this.path && (u.name = this.path + ":" + u.name, u.file = this.path), u.fatal = !1, this.messages.push(u), u;
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
function mc(n, i) {
  if (n && n.includes(Sn.sep))
    throw new Error(
      "`" + i + "` cannot be a path: did not expect `" + Sn.sep + "`"
    );
}
function hc(n, i) {
  if (!n)
    throw new Error("`" + i + "` cannot be empty");
}
function ig(n, i) {
  if (!n)
    throw new Error("Setting `" + i + "` requires `path` to be set too");
}
function aE(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const iE = (
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
    const o = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), u = o[n], c = function() {
      return u.apply(c, arguments);
    };
    return Object.setPrototypeOf(c, o), c;
  }
), rE = {}.hasOwnProperty;
class lf extends iE {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = PT();
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
      new lf()
    );
    let l = -1;
    for (; ++l < this.attachers.length; ) {
      const o = this.attachers[l];
      i.use(...o);
    }
    return i.data(dc(!0, {}, this.namespace)), i;
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
  data(i, l) {
    return typeof i == "string" ? arguments.length === 2 ? (bc("data", this.frozen), this.namespace[i] = l, this) : rE.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (bc("data", this.frozen), this.namespace = i, this) : this.namespace;
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
      const [l, ...o] = this.attachers[this.freezeIndex];
      if (o[0] === !1)
        continue;
      o[0] === !0 && (o[0] = void 0);
      const u = l.call(i, ...o);
      typeof u == "function" && this.transformers.use(u);
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
    const l = po(i), o = this.parser || this.Parser;
    return gc("parse", o), o(String(l), l);
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
  process(i, l) {
    const o = this;
    return this.freeze(), gc("process", this.parser || this.Parser), yc("process", this.compiler || this.Compiler), l ? u(void 0, l) : new Promise(u);
    function u(c, d) {
      const p = po(i), g = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        o.parse(p)
      );
      o.run(g, p, function(h, v, w) {
        if (h || !v || !w)
          return m(h);
        const x = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          v
        ), k = o.stringify(x, w);
        sE(k) ? w.value = k : w.result = k, m(
          h,
          /** @type {VFileWithOutput<CompileResult>} */
          w
        );
      });
      function m(h, v) {
        h || !v ? d(h) : c ? c(v) : l(void 0, v);
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
    let l = !1, o;
    return this.freeze(), gc("processSync", this.parser || this.Parser), yc("processSync", this.compiler || this.Compiler), this.process(i, u), lg("processSync", "process", l), o;
    function u(c, d) {
      l = !0, ng(c), o = d;
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
  run(i, l, o) {
    rg(i), this.freeze();
    const u = this.transformers;
    return !o && typeof l == "function" && (o = l, l = void 0), o ? c(void 0, o) : new Promise(c);
    function c(d, p) {
      const g = po(l);
      u.run(i, g, m);
      function m(h, v, w) {
        const x = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          v || i
        );
        h ? p(h) : d ? d(x) : o(void 0, x, w);
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
  runSync(i, l) {
    let o = !1, u;
    return this.run(i, l, c), lg("runSync", "run", o), u;
    function c(d, p) {
      ng(d), u = p, o = !0;
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
  stringify(i, l) {
    this.freeze();
    const o = po(l), u = this.compiler || this.Compiler;
    return yc("stringify", u), rg(i), u(i, o);
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
  use(i, ...l) {
    const o = this.attachers, u = this.namespace;
    if (bc("use", this.frozen), i != null) if (typeof i == "function")
      g(i, l);
    else if (typeof i == "object")
      Array.isArray(i) ? p(i) : d(i);
    else
      throw new TypeError("Expected usable value, not `" + i + "`");
    return this;
    function c(m) {
      if (typeof m == "function")
        g(m, []);
      else if (typeof m == "object")
        if (Array.isArray(m)) {
          const [h, ...v] = (
            /** @type {PluginTuple<Array<unknown>>} */
            m
          );
          g(h, v);
        } else
          d(m);
      else
        throw new TypeError("Expected usable value, not `" + m + "`");
    }
    function d(m) {
      if (!("plugins" in m) && !("settings" in m))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      p(m.plugins), m.settings && (u.settings = dc(!0, u.settings, m.settings));
    }
    function p(m) {
      let h = -1;
      if (m != null) if (Array.isArray(m))
        for (; ++h < m.length; ) {
          const v = m[h];
          c(v);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + m + "`");
    }
    function g(m, h) {
      let v = -1, w = -1;
      for (; ++v < o.length; )
        if (o[v][0] === m) {
          w = v;
          break;
        }
      if (w === -1)
        o.push([m, ...h]);
      else if (h.length > 0) {
        let [x, ...k] = h;
        const z = o[w][1];
        Lc(z) && Lc(x) && (x = dc(!0, z, x)), o[w] = [m, x, ...k];
      }
    }
  }
}
const lE = new lf().freeze();
function gc(n, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + n + "` without `parser`");
}
function yc(n, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + n + "` without `compiler`");
}
function bc(n, i) {
  if (i)
    throw new Error(
      "Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function rg(n) {
  if (!Lc(n) || typeof n.type != "string")
    throw new TypeError("Expected node, got `" + n + "`");
}
function lg(n, i, l) {
  if (!l)
    throw new Error(
      "`" + n + "` finished async. Use `" + i + "` instead"
    );
}
function po(n) {
  return oE(n) ? n : new qy(n);
}
function oE(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function sE(n) {
  return typeof n == "string" || uE(n);
}
function uE(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const cE = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", og = [], sg = { allowDangerousHtml: !0 }, fE = /^(https?|ircs?|mailto|xmpp)$/i, dE = [
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
function pE(n) {
  const i = mE(n), l = hE(n);
  return gE(i.runSync(i.parse(l), l), n);
}
function mE(n) {
  const i = n.rehypePlugins || og, l = n.remarkPlugins || og, o = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...sg } : sg;
  return lE().use(Yw).use(l).use(VT, o).use(i);
}
function hE(n) {
  const i = n.children || "", l = new qy();
  return typeof i == "string" && (l.value = i), l;
}
function gE(n, i) {
  const l = i.allowedElements, o = i.allowElement, u = i.components, c = i.disallowedElements, d = i.skipHtml, p = i.unwrapDisallowed, g = i.urlTransform || yE;
  for (const h of dE)
    Object.hasOwn(i, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + cE + h.id, void 0);
  return Ly(n, m), Cx(n, {
    Fragment: _.Fragment,
    components: u,
    ignoreInvalidStyle: !0,
    jsx: _.jsx,
    jsxs: _.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function m(h, v, w) {
    if (h.type === "raw" && w && typeof v == "number")
      return d ? w.children.splice(v, 1) : w.children[v] = { type: "text", value: h.value }, v;
    if (h.type === "element") {
      let x;
      for (x in sc)
        if (Object.hasOwn(sc, x) && Object.hasOwn(h.properties, x)) {
          const k = h.properties[x], z = sc[x];
          (z === null || z.includes(h.tagName)) && (h.properties[x] = g(String(k || ""), x, h));
        }
    }
    if (h.type === "element") {
      let x = l ? !l.includes(h.tagName) : c ? c.includes(h.tagName) : !1;
      if (!x && o && typeof v == "number" && (x = !o(h, v, w)), x && w && typeof v == "number")
        return p && h.children ? w.children.splice(v, 1, ...h.children) : w.children.splice(v, 1), v;
    }
  }
}
function yE(n) {
  const i = n.indexOf(":"), l = n.indexOf("?"), o = n.indexOf("#"), u = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    i === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    u !== -1 && i > u || l !== -1 && i > l || o !== -1 && i > o || // It is a protocol, it should be allowed.
    fE.test(n.slice(0, i)) ? n : ""
  );
}
function jy({ content: n, className: i = "" }) {
  return /* @__PURE__ */ _.jsx("div", { className: `prose prose-sm max-w-none dark:prose-invert ${i}`, children: /* @__PURE__ */ _.jsx(
    pE,
    {
      components: {
        // Custom styling for markdown elements
        p: ({ children: l }) => /* @__PURE__ */ _.jsx("p", { className: "mb-2 last:mb-0", children: l }),
        ul: ({ children: l }) => /* @__PURE__ */ _.jsx("ul", { className: "list-disc list-inside mb-2 space-y-1", children: l }),
        ol: ({ children: l }) => /* @__PURE__ */ _.jsx("ol", { className: "list-decimal list-inside mb-2 space-y-1", children: l }),
        li: ({ children: l }) => /* @__PURE__ */ _.jsx("li", { className: "text-sm", children: l }),
        strong: ({ children: l }) => /* @__PURE__ */ _.jsx("strong", { className: "font-semibold", children: l }),
        em: ({ children: l }) => /* @__PURE__ */ _.jsx("em", { className: "italic", children: l }),
        code: ({ children: l }) => /* @__PURE__ */ _.jsx("code", { className: "bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono", children: l }),
        pre: ({ children: l }) => /* @__PURE__ */ _.jsx("pre", { className: "bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto", children: l }),
        h1: ({ children: l }) => /* @__PURE__ */ _.jsx("h1", { className: "text-lg font-bold mb-2", children: l }),
        h2: ({ children: l }) => /* @__PURE__ */ _.jsx("h2", { className: "text-base font-bold mb-2", children: l }),
        h3: ({ children: l }) => /* @__PURE__ */ _.jsx("h3", { className: "text-sm font-bold mb-1", children: l }),
        a: ({ children: l, href: o }) => /* @__PURE__ */ _.jsx(
          "a",
          {
            href: o,
            className: "text-blue-500 hover:text-blue-600 underline",
            target: "_blank",
            rel: "noopener noreferrer",
            children: l
          }
        )
      },
      children: n
    }
  ) });
}
class fn {
  static BACKEND_URL = "http://localhost:3000";
  // Track widget view
  static async trackWidgetView(i, l) {
    try {
      const o = this.getSessionId(), u = navigator.userAgent;
      await _e.post(`${this.BACKEND_URL}/api/analytics/widget-view`, {
        companyName: i,
        pageUrl: l || window.location.href,
        userAgent: u,
        sessionId: o,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (o) {
      console.error("Failed to track widget view:", o);
    }
  }
  // Enhanced widget interaction tracking
  static async trackWidgetInteraction(i, l, o, u, c) {
    try {
      const d = this.getSessionId();
      await _e.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName: i,
        eventType: l,
        message: o,
        response: u,
        sessionId: d,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        ...c
      });
    } catch (d) {
      console.error("Failed to track widget interaction:", d);
    }
  }
  // Get analytics for a company
  static async getCompanyAnalytics(i, l = "7d") {
    try {
      return (await _e.get(`${this.BACKEND_URL}/api/analytics/company/${i}?period=${l}`)).data;
    } catch (o) {
      throw console.error("Failed to fetch analytics:", o), new Error("Failed to fetch analytics");
    }
  }
  // Get FAQ performance analytics
  static async getFAQPerformance(i, l = "7d") {
    try {
      return (await _e.get(`${this.BACKEND_URL}/api/analytics/faq-performance/${i}?period=${l}`)).data;
    } catch (o) {
      throw console.error("Failed to fetch FAQ performance:", o), new Error("Failed to fetch FAQ performance");
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
  static async trackMessageSent(i, l) {
    await this.trackWidgetInteraction(i, "message_sent", l);
  }
  // Track message received with source tracking
  static async trackMessageReceived(i, l, o, u, c, d) {
    try {
      const p = this.getSessionId();
      await _e.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName: i,
        eventType: "message_received",
        response: l,
        responseSource: o,
        faqId: u,
        confidenceScore: c,
        aiFallbackReason: d,
        sessionId: p,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (p) {
      console.error("Failed to track message received:", p);
    }
  }
  // Track language change
  static async trackLanguageChange(i, l) {
    await this.trackWidgetInteraction(i, "language_changed", void 0, void 0, {
      language: l
    });
  }
  // Track theme change
  static async trackThemeChange(i, l) {
    await this.trackWidgetInteraction(i, "theme_changed", void 0, void 0, {
      themeMode: l
    });
  }
  // Track FAQ match
  static async trackFAQMatch(i, l, o) {
    await this.trackWidgetInteraction(i, "faq_matched", void 0, void 0, {
      faqId: l,
      confidenceScore: o,
      responseSource: "faq"
    });
  }
  // Track AI fallback
  static async trackAIFallback(i, l, o) {
    await this.trackWidgetInteraction(i, "ai_fallback", void 0, void 0, {
      aiFallbackReason: l,
      confidenceScore: o,
      responseSource: "ai"
    });
  }
  // Track user rating
  static async trackRating(i, l, o, u, c, d, p) {
    await this.trackWidgetInteraction(i, "rating_given", void 0, o, {
      rating: l,
      feedbackText: c,
      responseSource: u,
      faqId: d,
      confidenceScore: p
    });
  }
}
function bE({ message: n, timestamp: i, companyTheme: l }) {
  return /* @__PURE__ */ _.jsxs("div", { className: "flex gap-3 max-w-[98%] mx-auto px-4 py-6 flex-row-reverse", children: [
    /* @__PURE__ */ _.jsx(
      "div",
      {
        className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white",
        style: { backgroundColor: l?.primaryColor },
        children: /* @__PURE__ */ _.jsx(h1, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ _.jsxs("div", { className: "flex-1 space-y-2 text-right", children: [
      /* @__PURE__ */ _.jsx(
        "div",
        {
          className: "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed text-white rounded-br-md",
          style: { backgroundColor: l?.primaryColor },
          children: /* @__PURE__ */ _.jsx(jy, { content: n })
        }
      ),
      i && /* @__PURE__ */ _.jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400 px-2 text-right", children: i })
    ] })
  ] });
}
function vE({
  message: n,
  messageIndex: i,
  liked: l,
  timestamp: o,
  onStreamingChange: u,
  skipStreaming: c,
  companyTheme: d,
  isLastAiMessage: p,
  companyName: g,
  onRatingChange: m,
  onStreamingComplete: h
}) {
  const [v, w] = de.useState(""), [x, k] = de.useState(!1), [z, L] = de.useState(!1), [q, K] = de.useState(!1), [j, se] = de.useState(""), [J, U] = de.useState(!1), [le, Y] = de.useState(!1), pe = async (W) => {
    const ae = W.split(" ");
    let ie = "";
    k(!0), u?.(!0), w("");
    for (let N = 0; N < ae.length; N++)
      ie += ae[N] + " ", w(ie.trim()), N === ae.length - 1 && (k(!1), u?.(!1), h?.(i)), await new Promise((G) => setTimeout(G, 100));
  };
  de.useEffect(() => {
    L(!0);
  }, []), de.useEffect(() => {
    z && p && !c ? setTimeout(() => {
      pe(n);
    }, 100) : !c && !z && p ? (k(!0), u?.(!0), w("")) : (k(!1), u?.(!1), w(""));
  }, [n, c, z, p]);
  const we = async (W) => {
    if (g)
      try {
        W === -1 ? K(!0) : await fn.trackRating(
          g,
          W,
          n,
          "ai",
          // Assuming AI response for now
          void 0,
          void 0,
          0.8
          // Default confidence
        );
      } catch (ae) {
        console.error("Failed to submit rating:", ae);
      }
  }, re = async () => {
    if (g) {
      U(!0);
      try {
        await fn.trackRating(
          g,
          -1,
          // Negative rating
          n,
          "ai",
          // Assuming AI response for now
          j,
          void 0,
          0.8
          // Default confidence
        ), K(!1), se("");
      } catch (W) {
        console.error("Failed to submit feedback:", W);
      } finally {
        U(!1);
      }
    }
  }, te = async () => {
    try {
      await navigator.clipboard.writeText(n), Y(!0), setTimeout(() => Y(!1), 2e3);
    } catch (W) {
      console.error("Failed to copy message:", W);
    }
  };
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsxs("div", { className: "flex gap-3 max-w-[98%] mx-auto px-4 py-6 flex-row", children: [
      /* @__PURE__ */ _.jsx(
        "div",
        {
          className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400",
          style: { backgroundColor: d?.backgroundColor },
          children: /* @__PURE__ */ _.jsx(Vg, { className: "w-4 h-4" })
        }
      ),
      z && /* @__PURE__ */ _.jsxs("div", { className: "flex-1 space-y-2 text-left", children: [
        /* @__PURE__ */ _.jsx(
          "div",
          {
            className: "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed text-gray-900 dark:text-gray-100 rounded-bl-md",
            style: { backgroundColor: d?.backgroundColor },
            children: /* @__PURE__ */ _.jsx(
              jy,
              {
                content: x && !c && p ? v : n
              }
            )
          }
        ),
        !x && /* @__PURE__ */ _.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
          i !== 0 && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
            /* @__PURE__ */ _.jsx(
              "button",
              {
                onClick: () => {
                  console.log("Current liked status:", l);
                  const W = l !== "like" ? "like" : null;
                  console.log("New rating:", W), m?.(W), we(W === "like" ? 1 : 0);
                },
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Like this response",
                children: /* @__PURE__ */ _.jsx(p1, { className: qa("w-3 h-3 text-gray-500 hover:text-green-500", l === "like" ? "text-green-500" : "text-gray-500") })
              }
            ),
            /* @__PURE__ */ _.jsx(
              "button",
              {
                onClick: () => {
                  console.log("Current liked status:", l);
                  const W = l !== "dislike" ? "dislike" : null;
                  console.log("New rating:", W), m?.(W), we(W === "dislike" ? -1 : 0);
                },
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Dislike this response",
                children: /* @__PURE__ */ _.jsx(f1, { className: qa("w-3 h-3 text-gray-500 hover:text-red-500", l === "dislike" ? "text-red-500" : "text-gray-500") })
              }
            ),
            /* @__PURE__ */ _.jsx(
              "button",
              {
                onClick: te,
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Copy message",
                children: /* @__PURE__ */ _.jsx(JS, { className: "w-3 h-3 text-gray-500 hover:text-blue-500" })
              }
            )
          ] }),
          le && /* @__PURE__ */ _.jsx("span", { className: "text-xs text-green-500 ml-1", children: "Copied!" }),
          o && /* @__PURE__ */ _.jsx(
            "div",
            {
              className: "text-xs text-gray-500 dark:text-gray-400 px-2 text-right",
              children: o
            }
          )
        ] })
      ] })
    ] }),
    q && /* @__PURE__ */ _.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ _.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ _.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: "Help us improve" }),
        /* @__PURE__ */ _.jsx(
          "button",
          {
            onClick: () => K(!1),
            className: "p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
            children: /* @__PURE__ */ _.jsx(y1, { className: "w-5 h-5 text-gray-500" })
          }
        )
      ] }),
      /* @__PURE__ */ _.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "What could we have done better? (Optional)" }),
      /* @__PURE__ */ _.jsx(
        "textarea",
        {
          value: j,
          onChange: (W) => se(W.target.value),
          placeholder: "Your feedback helps us improve...",
          className: "w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100",
          rows: 3
        }
      ),
      /* @__PURE__ */ _.jsxs("div", { className: "flex gap-2 mt-4", children: [
        /* @__PURE__ */ _.jsx(
          "button",
          {
            onClick: () => K(!1),
            className: "flex-1 px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ _.jsx(
          "button",
          {
            onClick: re,
            disabled: J,
            className: "flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: J ? "Submitting..." : "Submit Feedback"
          }
        )
      ] })
    ] }) })
  ] });
}
function SE({ message: n, messageIndex: i, liked: l, isUser: o, timestamp: u, onStreamingChange: c, skipStreaming: d, companyTheme: p, isLastAiMessage: g, companyName: m, onRatingChange: h, onStreamingComplete: v }) {
  return o ? /* @__PURE__ */ _.jsx(
    bE,
    {
      message: n,
      timestamp: u,
      companyTheme: p
    }
  ) : /* @__PURE__ */ _.jsx(
    vE,
    {
      message: n,
      messageIndex: i,
      liked: l || null,
      timestamp: u,
      onStreamingChange: c,
      skipStreaming: d,
      companyTheme: p,
      isLastAiMessage: g,
      companyName: m,
      onRatingChange: h,
      onStreamingComplete: v
    }
  );
}
function xE({ companyTheme: n }) {
  return /* @__PURE__ */ _.jsxs("div", { className: "flex gap-3 max-w-4xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ _.jsx(
      "div",
      {
        className: "flex-shrink-0 w-8 h-8 rounded-full text-gray-600 dark:text-gray-400 flex items-center justify-center",
        style: { backgroundColor: n?.backgroundColor || "#f3f4f6" },
        children: /* @__PURE__ */ _.jsx(Vg, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ _.jsx("div", { className: "flex-1", children: /* @__PURE__ */ _.jsx("div", { className: "inline-block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md", children: /* @__PURE__ */ _.jsxs("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ _.jsx("div", { className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ _.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ _.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.2s" }
        }
      )
    ] }) }) })
  ] });
}
function ug(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
function AE(...n) {
  return (i) => {
    let l = !1;
    const o = n.map((u) => {
      const c = ug(u, i);
      return !l && typeof c == "function" && (l = !0), c;
    });
    if (l)
      return () => {
        for (let u = 0; u < o.length; u++) {
          const c = o[u];
          typeof c == "function" ? c() : ug(n[u], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function wE(n) {
  const i = /* @__PURE__ */ EE(n), l = de.forwardRef((o, u) => {
    const { children: c, ...d } = o, p = de.Children.toArray(c), g = p.find(kE);
    if (g) {
      const m = g.props.children, h = p.map((v) => v === g ? de.Children.count(m) > 1 ? de.Children.only(null) : de.isValidElement(m) ? m.props.children : null : v);
      return /* @__PURE__ */ _.jsx(i, { ...d, ref: u, children: de.isValidElement(m) ? de.cloneElement(m, void 0, h) : null });
    }
    return /* @__PURE__ */ _.jsx(i, { ...d, ref: u, children: c });
  });
  return l.displayName = `${n}.Slot`, l;
}
var TE = /* @__PURE__ */ wE("Slot");
// @__NO_SIDE_EFFECTS__
function EE(n) {
  const i = de.forwardRef((l, o) => {
    const { children: u, ...c } = l;
    if (de.isValidElement(u)) {
      const d = zE(u), p = DE(c, u.props);
      return u.type !== de.Fragment && (p.ref = o ? AE(o, d) : d), de.cloneElement(u, p);
    }
    return de.Children.count(u) > 1 ? de.Children.only(null) : null;
  });
  return i.displayName = `${n}.SlotClone`, i;
}
var CE = Symbol("radix.slottable");
function kE(n) {
  return de.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === CE;
}
function DE(n, i) {
  const l = { ...i };
  for (const o in i) {
    const u = n[o], c = i[o];
    /^on[A-Z]/.test(o) ? u && c ? l[o] = (...p) => {
      const g = c(...p);
      return u(...p), g;
    } : u && (l[o] = u) : o === "style" ? l[o] = { ...u, ...c } : o === "className" && (l[o] = [u, c].filter(Boolean).join(" "));
  }
  return { ...n, ...l };
}
function zE(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning;
  return l ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning, l ? n.props.ref : n.props.ref || n.ref);
}
const cg = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, fg = Gg, RE = (n, i) => (l) => {
  var o;
  if (i?.variants == null) return fg(n, l?.class, l?.className);
  const { variants: u, defaultVariants: c } = i, d = Object.keys(u).map((m) => {
    const h = l?.[m], v = c?.[m];
    if (h === null) return null;
    const w = cg(h) || cg(v);
    return u[m][w];
  }), p = l && Object.entries(l).reduce((m, h) => {
    let [v, w] = h;
    return w === void 0 || (m[v] = w), m;
  }, {}), g = i == null || (o = i.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((m, h) => {
    let { class: v, className: w, ...x } = h;
    return Object.entries(x).every((k) => {
      let [z, L] = k;
      return Array.isArray(L) ? L.includes({
        ...c,
        ...p
      }[z]) : {
        ...c,
        ...p
      }[z] === L;
    }) ? [
      ...m,
      v,
      w
    ] : m;
  }, []);
  return fg(n, d, g, l?.class, l?.className);
}, NE = RE(
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
function By({
  className: n,
  variant: i,
  size: l,
  asChild: o = !1,
  ...u
}) {
  const c = o ? TE : "button";
  return /* @__PURE__ */ _.jsx(
    c,
    {
      "data-slot": "button",
      className: qa(NE({ variant: i, size: l, className: n })),
      ...u
    }
  );
}
function ME({ className: n, ...i }) {
  return /* @__PURE__ */ _.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: qa(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n
      ),
      ...i
    }
  );
}
function OE({ onSendMessage: n, isLoading: i = !1, placeholder: l = "Type your message...", companyTheme: o, verifiedPlan: u }) {
  const [c, d] = de.useState(""), p = (h) => {
    h.preventDefault(), c.trim() && !i && (n(c.trim()), d(""));
  }, g = (h) => {
    h.key === "Enter" && !h.shiftKey && (h.preventDefault(), p(h));
  }, m = o?.primaryColor ? ay(o.primaryColor, 20) : void 0;
  return /* @__PURE__ */ _.jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900", children: /* @__PURE__ */ _.jsxs("div", { className: "max-w-4xl mx-auto p-4", children: [
    /* @__PURE__ */ _.jsxs("form", { onSubmit: p, className: "relative", children: [
      /* @__PURE__ */ _.jsx(
        ME,
        {
          value: c,
          onChange: (h) => d(h.target.value),
          onKeyDown: g,
          placeholder: l,
          disabled: i,
          className: qa(
            "min-h-[60px] max-h-[200px] resize-none pr-12 py-3",
            "border-gray-300 dark:border-gray-600",
            "bg-white dark:bg-gray-800",
            "text-gray-900 dark:text-gray-100",
            "placeholder:text-gray-500 dark:placeholder:text-gray-400",
            "focus:ring-2 focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          ),
          onFocus: (h) => {
            o?.primaryColor && (h.target.style.boxShadow = `0 0 0 2px ${o.primaryColor}`);
          },
          onBlur: (h) => {
            h.target.style.boxShadow = "";
          },
          rows: 1
        }
      ),
      /* @__PURE__ */ _.jsxs(
        By,
        {
          type: "submit",
          size: "sm",
          disabled: !c.trim() || i,
          className: qa(
            "absolute right-1 bottom-2 h-8 w-8 p-0",
            "disabled:bg-gray-300 dark:disabled:bg-gray-600",
            "transition-all duration-200 ease-in-out",
            "hover:scale-105 focus:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-offset-2"
          ),
          style: {
            backgroundColor: o?.primaryColor,
            "--hover-bg-color": m
          },
          onMouseEnter: (h) => {
            m && (h.currentTarget.style.backgroundColor = m);
          },
          onMouseLeave: (h) => {
            o?.primaryColor && (h.currentTarget.style.backgroundColor = o.primaryColor);
          },
          onFocus: (h) => {
            m && (h.currentTarget.style.backgroundColor = m);
          },
          onBlur: (h) => {
            o?.primaryColor && (h.currentTarget.style.backgroundColor = o.primaryColor);
          },
          children: [
            i ? /* @__PURE__ */ _.jsx(Fg, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ _.jsx(o1, { className: "h-4 w-4 text-white" }),
            /* @__PURE__ */ _.jsx("span", { className: "sr-only", children: "Send message" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ _.jsx("div", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400 text-center", children: "Press Enter to send, Shift + Enter for new line" }),
    u === "free" && /* @__PURE__ */ _.jsxs("div", { className: "mt-1 text-xs text-gray-400 dark:text-gray-500 text-center", children: [
      "Powered by",
      " ",
      /* @__PURE__ */ _.jsx(
        "a",
        {
          href: "https://qurius.app",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-500 hover:text-blue-400 underline",
          children: "Qurius AI"
        }
      )
    ] })
  ] }) });
}
const _E = {
  common: {
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    close: "Close",
    next: "Next",
    previous: "Previous",
    submit: "Submit",
    copy: "Copy",
    copied: "Copied!",
    getStarted: "Get Started",
    step: "Step"
  },
  contact: {
    title: "Contact Us",
    subtitle: "Get in touch with our team. We're here to help you succeed with AI-powered customer support.",
    sendMessage: "Send us a message",
    fullName: "Full Name",
    emailAddress: "Email Address",
    company: "Company",
    subject: "Subject",
    message: "Message",
    namePlaceholder: "John Doe",
    emailPlaceholder: "john@company.com",
    companyPlaceholder: "Your Company",
    messagePlaceholder: "Tell us how we can help you...",
    selectSubject: "Select a subject",
    salesInquiry: "Sales Inquiry",
    technicalSupport: "Technical Support",
    partnership: "Partnership",
    careers: "Careers",
    other: "Other",
    sending: "Sending...",
    getInTouch: "Get in touch",
    emailUs: "Email Us",
    callUs: "Call Us",
    visitUs: "Visit Us",
    emailDescription: "For general inquiries and support",
    callDescription: "Monday to Friday, 9AM to 6PM EST",
    address: "123 AI Innovation Drive, Tech Valley, CA 94043, United States",
    responseTimes: "Response Times",
    salesInquiries: "Sales inquiries",
    within2Hours: "Within 2 hours",
    within4Hours: "Within 4 hours",
    generalQuestions: "General questions",
    within24Hours: "Within 24 hours",
    partnershipRequests: "Partnership requests",
    within48Hours: "Within 48 hours",
    successMessage: "Thank you for your message! We'll get back to you within 24 hours.",
    tryAI: "Try Our AI Assistant",
    tryAIDescription: "Have questions? Chat with our AI assistant to see Qurius AI in action! Click the chat icon in the bottom right to experience our product firsthand.",
    experienceAI: "Experience the Power of AI",
    experienceAIDescription: "This chatbot is powered by the same technology we provide to our customers. Ask about our features, pricing, or any questions you have about Qurius AI!",
    readyToStart: "Ready to Get Started?",
    readyToStartDescription: "Join thousands of businesses using Qurius AI to enhance their customer support.",
    startFreeTrial: "Start Free Trial",
    viewDemo: "View Demo"
  },
  about: {
    title: "About Qurius AI",
    subtitle: "Empowering businesses with intelligent customer support through cutting-edge AI technology",
    mission: "Our Mission",
    missionDescription1: "At Qurius AI, we believe that every customer interaction should be meaningful, efficient, and satisfying. Our mission is to revolutionize customer support by providing businesses with intelligent AI-powered chatbots that understand context, speak multiple languages, and deliver personalized experiences.",
    missionDescription2: "We're committed to making advanced AI technology accessible to businesses of all sizes, helping them scale their customer support while maintaining the human touch that customers value.",
    vision: "Our Vision",
    visionDescription: "To become the leading platform for AI-powered customer support, enabling businesses worldwide to provide exceptional customer experiences through intelligent automation.",
    values: "Our Values",
    valuesDescription: "The principles that guide everything we do",
    customerCentric: "Customer-Centric",
    customerCentricDescription: "Every decision we make is guided by what's best for our customers and their end users. We listen, learn, and continuously improve based on feedback.",
    innovation: "Innovation",
    innovationDescription: "We embrace cutting-edge technology and creative solutions to solve complex problems and stay ahead of the curve in AI development.",
    transparency: "Transparency",
    transparencyDescription: "We believe in open communication, honest pricing, and clear explanations of how our AI technology works to build trust with our customers.",
    meetFounder: "Meet the Founder",
    meetFounderDescription: "The visionary behind Qurius AI, passionate about revolutionizing customer support through intelligent technology.",
    founderName: "De-Graft",
    founderTitle: "Founder & Developer, Qurius AI",
    backgroundExperience: "Background & Experience",
    backgroundDescription: "De-Graft is a Computer Science student at William Paterson University with a GPA of 4.0, with a vested interest in AI, data mining, and full-stack development. He worked as a Software Engineer at AyaPrep Limited, where he developed a RESTful API for a mobile app, increasing user engagement by 30% and reducing latency by 40%.",
    passionsInterests: "Passions & Interests",
    passionsDescription: "De-Graft is passionate about leveraging AI and machine learning to solve real-world problems. He loves building scalable applications that make a difference, from ShareSphere's campus sharing platform to enterprise-grade SaaS solutions.",
    quriusVision: "The Qurius AI Vision",
    quriusVisionDescription: `"Qurius AI was born from my experience building customer-facing applications and understanding the challenges small to medium-sized businesses face with support. I envisioned an intelligent chat widget that could provide instant, personalized responses while maintaining the human touch. The platform combines my expertise in React, TypeScript, and AI to deliver a solution that reduces customer setup time by 80% and provides real-time analytics for actionable insights. I'm committed to making advanced AI technology accessible to businesses of all sizes, helping them scale their customer support while maintaining the human touch that customers value." - De-Graft`,
    skillAI: "AI/ML",
    skillFullStack: "Full-Stack Development",
    skillReact: "React/TypeScript",
    skillSaaS: "SaaS Architecture",
    skillDataScience: "Data Science",
    ourTeam: "Our Team",
    ourTeamDescription: "We're a passionate team of AI researchers, engineers, and customer success specialists dedicated to building the future of customer support.",
    growingTeam: "Growing Team",
    growingTeamDescription: "Our diverse team brings together expertise from machine learning, natural language processing, software engineering, and customer experience design.",
    joinTeam: "Join Our Team",
    experienceAI: "Experience Our AI in Action",
    experienceAIDescription: "Want to see what we're all about? Try our AI assistant right here on this page! Click the chat icon to ask questions about our company, technology, or anything else.",
    tryItNow: "Try It Now",
    tryItNowDescription: "This chatbot uses the same AI technology we provide to our customers. Ask about our features, pricing, team, or company values!",
    readyToStart: "Ready to Get Started?",
    readyToStartDescription: "Join thousands of businesses that trust Qurius AI to deliver exceptional customer experiences.",
    getStartedFree: "Get Started Free",
    contactUs: "Contact Us"
  },
  navigation: {
    home: "Home",
    demo: "Demo",
    admin: "Admin",
    login: "Login",
    logout: "Logout"
  },
  plans: {
    free: "Free",
    starter: "Starter",
    pro: "Pro",
    perMonth: "per month",
    unlimitedMessages: "Unlimited messages",
    whiteLabelOptions: "White-label options",
    phoneSupport: "24/7 phone support",
    advancedAnalytics: "Advanced analytics",
    apiAccess: "API access",
    customIntegrations: "Custom integrations",
    basicCustomization: "Basic customization",
    emailSupport: "Email support",
    standardFaqTemplates: "Standard FAQ templates",
    prioritySupport: "Priority support",
    analyticsDashboard: "Analytics dashboard",
    customFaqImport: "Custom FAQ import",
    // New Pro features
    multiLanguageSupport: "🌍 Multi-language support (10+ languages)",
    autoLanguageDetection: "🌐 Auto-language detection",
    translatedFaqTemplates: "📝 Translated FAQ templates",
    languageSpecificCustomization: "🎨 Language-specific customization",
    multiLanguageAnalytics: "📊 Multi-language analytics",
    customLanguageSupport: "🔧 Custom language support",
    customWebCrawling: "🕸️ Custom web crawling"
  },
  chat: {
    welcome: "How can I help you today?",
    welcomeWithCompany: "Hello! I'm your {companyName} assistant. How can I help you today?",
    typeMessage: "Type your message...",
    send: "Send",
    minimize: "Minimize",
    expand: "Expand",
    typing: "Typing...",
    online: "Online",
    offline: "Offline"
  },
  onboarding: {
    welcome: "Welcome to Qurius AI",
    companyInfo: "Company Information",
    customization: "Widget Customization",
    payment: "Payment Setup",
    integration: "Integration",
    complete: "Complete Setup",
    companyName: "Company Name",
    industry: "Industry",
    website: "Website URL",
    email: "Contact Email",
    location: "Location",
    description: "Description",
    chooseTheme: "Choose a Theme",
    primaryColor: "Primary Color",
    backgroundColor: "Background Color",
    textColor: "Text Color",
    preview: "Preview",
    choosePlan: "Choose Your Billing Plan",
    integrationCode: "Integration Code",
    instructions: "Instructions",
    testWidget: "Test Widget",
    completeSetup: "Complete Setup"
  },
  landing: {
    heroTitle: "Transform Your Website with AI-Powered Chat Support",
    heroSubtitle: "Provide instant, intelligent customer support with our advanced AI chat widget. Boost engagement and satisfaction with 24/7 automated assistance.",
    viewDemo: "View Demo",
    featuresTitle: "Why Choose Qurius AI?",
    featuresSubtitle: "Powerful features designed to enhance your customer support experience",
    feature1Title: "Lightning Fast",
    feature1Description: "Get instant responses with our AI-powered chat system that understands and responds to customer queries in real-time.",
    feature2Title: "Secure & Reliable",
    feature2Description: "Enterprise-grade security with data encryption and privacy protection. Your customer data is always safe with us.",
    feature3Title: "Multi-Language Support",
    feature3Description: "Support customers worldwide with automatic language detection and translation capabilities.",
    pricingTitle: "Simple, Transparent Pricing",
    pricingSubtitle: "Choose the plan that fits your business needs",
    contactSales: "Contact Sales",
    ctaTitle: "Ready to Get Started?",
    ctaSubtitle: "Join thousands of businesses already using Qurius AI to improve their customer support.",
    startFreeTrial: "Start Free Trial",
    emailPlaceholder: "Enter your email",
    getUpdates: "Get Updates",
    footerDescription: "Transform your website with intelligent AI chat support.",
    footerProduct: "Product",
    footerCompany: "Company",
    footerSupport: "Support",
    features: "Features",
    pricing: "Pricing",
    installation: "Installation",
    about: "About",
    blog: "Blog",
    careers: "Careers",
    helpCenter: "Help Center",
    contact: "Contact",
    status: "Status",
    allRightsReserved: "All rights reserved."
  },
  demo: {
    title: "Demo",
    companyWebsiteTitle: "Company Website Content",
    companyWebsiteDescription: "This is a demonstration of how the chat interface would appear when embedded in a professional company website (PurpleSoft Inc). The chat widget is positioned in the bottom-right corner and can be minimized when not in use.",
    keyFeaturesTitle: "Key features include:",
    feature1: "Modern, professional design that matches company branding",
    feature2: "Light and dark theme support with smooth transitions",
    feature3: "Responsive design that works on all devices",
    feature4: "ChatGPT-style message layout with user messages on the right",
    feature5: "Typing indicators and smooth animations",
    feature6: "Minimizable interface to reduce screen clutter",
    tryChatTitle: "Try the Chat Interface",
    tryChatDescription: "Click the chat button in the bottom-right corner to start a conversation. You can toggle between light and dark themes, minimize the chat, and experience the smooth, professional interface.",
    learnMoreButton: "Learn More",
    getStartedButton: "Get Started",
    viewAdminButton: "View Admin Dashboard"
  }
}, IE = {
  common: {
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    cancel: "Cancelar",
    save: "Guardar",
    delete: "Eliminar",
    edit: "Editar",
    view: "Ver",
    close: "Cerrar",
    next: "Siguiente",
    previous: "Anterior",
    submit: "Enviar",
    copy: "Copiar",
    copied: "¡Copiado!",
    getStarted: "Comenzar",
    step: "Paso"
  },
  contact: {
    title: "Contáctanos",
    subtitle: "Ponte en contacto con nuestro equipo. Estamos aquí para ayudarte a tener éxito con el soporte al cliente impulsado por IA.",
    sendMessage: "Envíanos un mensaje",
    fullName: "Nombre completo",
    emailAddress: "Dirección de correo electrónico",
    company: "Empresa",
    subject: "Asunto",
    message: "Mensaje",
    namePlaceholder: "Juan Pérez",
    emailPlaceholder: "juan@empresa.com",
    companyPlaceholder: "Tu Empresa",
    messagePlaceholder: "Cuéntanos cómo podemos ayudarte...",
    selectSubject: "Selecciona un asunto",
    salesInquiry: "Consulta de ventas",
    technicalSupport: "Soporte técnico",
    partnership: "Asociación",
    careers: "Carreras",
    other: "Otro",
    sending: "Enviando...",
    getInTouch: "Ponte en contacto",
    emailUs: "Envíanos un email",
    callUs: "Llámanos",
    visitUs: "Visítanos",
    emailDescription: "Para consultas generales y soporte",
    callDescription: "Lunes a viernes, 9AM a 6PM EST",
    address: "123 AI Innovation Drive<br />Tech Valley, CA 94043<br />Estados Unidos",
    responseTimes: "Tiempos de respuesta",
    salesInquiries: "Consultas de ventas",
    within2Hours: "Dentro de 2 horas",
    within4Hours: "Dentro de 4 horas",
    generalQuestions: "Preguntas generales",
    within24Hours: "Dentro de 24 horas",
    partnershipRequests: "Solicitudes de asociación",
    within48Hours: "Dentro de 48 horas",
    successMessage: "¡Gracias por tu mensaje! Te responderemos dentro de 24 horas.",
    tryAI: "Prueba nuestro asistente de IA",
    tryAIDescription: "¿Tienes preguntas? ¡Chatea con nuestro asistente de IA para ver Qurius AI en acción! Haz clic en el ícono de chat en la esquina inferior derecha para experimentar nuestro producto de primera mano.",
    experienceAI: "Experimenta el poder de la IA",
    experienceAIDescription: "Este chatbot funciona con la misma tecnología que proporcionamos a nuestros clientes. ¡Pregunta sobre nuestras características, precios o cualquier pregunta que tengas sobre Qurius AI!",
    readyToStart: "¿Listo para comenzar?",
    readyToStartDescription: "Únete a miles de empresas que usan Qurius AI para mejorar su soporte al cliente.",
    startFreeTrial: "Comenzar prueba gratuita",
    viewDemo: "Ver demo"
  },
  about: {
    title: "Acerca de Qurius AI",
    subtitle: "Potenciando empresas con soporte al cliente inteligente a través de tecnología de IA de vanguardia",
    mission: "Nuestra Misión",
    missionDescription1: "En Qurius AI, creemos que cada interacción con el cliente debe ser significativa, eficiente y satisfactoria. Nuestra misión es revolucionar el soporte al cliente proporcionando a las empresas chatbots inteligentes impulsados por IA que entienden el contexto, hablan múltiples idiomas y ofrecen experiencias personalizadas.",
    missionDescription2: "Estamos comprometidos a hacer que la tecnología de IA avanzada sea accesible para empresas de todos los tamaños, ayudándolas a escalar su soporte al cliente mientras mantienen el toque humano que los clientes valoran.",
    vision: "Nuestra Visión",
    visionDescription: "Convertirnos en la plataforma líder para el soporte al cliente impulsado por IA, permitiendo que las empresas de todo el mundo proporcionen experiencias excepcionales al cliente a través de la automatización inteligente.",
    values: "Nuestros Valores",
    valuesDescription: "Los principios que guían todo lo que hacemos",
    customerCentric: "Centrado en el Cliente",
    customerCentricDescription: "Cada decisión que tomamos está guiada por lo que es mejor para nuestros clientes y sus usuarios finales. Escuchamos, aprendemos y mejoramos continuamente basándonos en la retroalimentación.",
    innovation: "Innovación",
    innovationDescription: "Abrazamos la tecnología de vanguardia y las soluciones creativas para resolver problemas complejos y mantenernos a la vanguardia en el desarrollo de IA.",
    transparency: "Transparencia",
    transparencyDescription: "Creemos en la comunicación abierta, precios honestos y explicaciones claras de cómo funciona nuestra tecnología de IA para construir confianza con nuestros clientes.",
    meetFounder: "Conoce al Fundador",
    meetFounderDescription: "El visionario detrás de Qurius AI, apasionado por revolucionar el soporte al cliente a través de tecnología inteligente.",
    founderName: "De-Graft",
    founderTitle: "Fundador y Desarrollador, Qurius AI",
    backgroundExperience: "Antecedentes y Experiencia",
    backgroundDescription: "De-Graft es un estudiante de Ciencias de la Computación en la Universidad William Paterson con un GPA de 4.0, aportando experiencia en IA, minería de datos y desarrollo full-stack. Trabajó como Ingeniero de Software en AyaPrep Limited, donde desarrolló una API RESTful para una aplicación móvil, aumentando el compromiso del usuario en un 30% y reduciendo la latencia en un 40%.",
    passionsInterests: "Pasiones e Intereses",
    passionsDescription: "De-Graft está apasionado por aprovechar la IA y el aprendizaje automático para resolver problemas del mundo real. Le encanta construir aplicaciones escalables que marcan la diferencia, desde la plataforma de intercambio del campus ShareSphere hasta soluciones SaaS de nivel empresarial.",
    quriusVision: "La Visión de Qurius AI",
    quriusVisionDescription: '"Qurius AI nació de mi experiencia construyendo aplicaciones orientadas al cliente y entendiendo los desafíos que enfrentan las pequeñas y medianas empresas con el soporte. Visualicé un widget de chat inteligente que pudiera proporcionar respuestas instantáneas y personalizadas mientras mantenía el toque humano. La plataforma combina mi experiencia en React, TypeScript e IA para entregar una solución que reduce el tiempo de configuración del cliente en un 80% y proporciona análisis en tiempo real para insights accionables. Estoy comprometido a hacer que la tecnología de IA avanzada sea accesible para empresas de todos los tamaños, ayudándolas a escalar su soporte al cliente mientras mantienen el toque humano que los clientes valoran." - De-Graft',
    skillAI: "IA/ML",
    skillFullStack: "Desarrollo Full-Stack",
    skillReact: "React/TypeScript",
    skillSaaS: "Arquitectura SaaS",
    skillDataScience: "Ciencia de Datos",
    ourTeam: "Nuestro Equipo",
    ourTeamDescription: "Somos un equipo apasionado de investigadores de IA, ingenieros y especialistas en éxito del cliente dedicados a construir el futuro del soporte al cliente.",
    growingTeam: "Equipo en Crecimiento",
    growingTeamDescription: "Nuestro diverso equipo reúne experiencia de aprendizaje automático, procesamiento de lenguaje natural, ingeniería de software y diseño de experiencia del cliente.",
    joinTeam: "Únete a Nuestro Equipo",
    experienceAI: "Experimenta Nuestra IA en Acción",
    experienceAIDescription: "¿Quieres ver de qué se trata todo esto? ¡Prueba nuestro asistente de IA aquí mismo en esta página! Haz clic en el ícono de chat para hacer preguntas sobre nuestra empresa, tecnología o cualquier otra cosa.",
    tryItNow: "Pruébalo Ahora",
    tryItNowDescription: "Este chatbot usa la misma tecnología de IA que proporcionamos a nuestros clientes. ¡Pregunta sobre nuestras características, precios, equipo o valores de la empresa!",
    readyToStart: "¿Listo para comenzar?",
    readyToStartDescription: "Únete a miles de empresas que confían en Qurius AI para entregar experiencias excepcionales al cliente.",
    getStartedFree: "Comenzar Gratis",
    contactUs: "Contáctanos"
  },
  navigation: {
    home: "Inicio",
    demo: "Demo",
    admin: "Admin",
    login: "Iniciar sesión",
    logout: "Cerrar sesión"
  },
  plans: {
    free: "Gratis",
    starter: "Básico",
    pro: "Pro",
    perMonth: "por mes",
    unlimitedMessages: "Mensajes ilimitados",
    whiteLabelOptions: "Opciones de marca blanca",
    phoneSupport: "Soporte telefónico 24/7",
    advancedAnalytics: "Analíticas avanzadas",
    apiAccess: "Acceso a API",
    customIntegrations: "Integraciones personalizadas",
    basicCustomization: "Personalización básica",
    emailSupport: "Soporte por email",
    standardFaqTemplates: "Plantillas FAQ estándar",
    prioritySupport: "Soporte prioritario",
    analyticsDashboard: "Panel de analíticas",
    customFaqImport: "Importación FAQ personalizada",
    // New Pro features
    multiLanguageSupport: "🌍 Soporte multiidioma (10+ idiomas)",
    autoLanguageDetection: "🌐 Detección automática de idioma",
    translatedFaqTemplates: "📝 Plantillas FAQ traducidas",
    languageSpecificCustomization: "🎨 Personalización específica por idioma",
    multiLanguageAnalytics: "📊 Analíticas multiidioma",
    customLanguageSupport: "🔧 Soporte de idioma personalizado",
    customWebCrawling: "🕸️ Web crawling personalizado"
  },
  chat: {
    welcome: "¿Cómo puedo ayudarte hoy?",
    welcomeWithCompany: "¡Hola! Soy tu asistente de {companyName}. ¿Cómo puedo ayudarte hoy?",
    typeMessage: "Escribe tu mensaje...",
    send: "Enviar",
    minimize: "Minimizar",
    expand: "Expandir",
    typing: "Escribiendo...",
    online: "En línea",
    offline: "Desconectado"
  },
  onboarding: {
    welcome: "Bienvenido a Qurius AI",
    companyInfo: "Información de la empresa",
    customization: "Personalización del widget",
    payment: "Configuración de pago",
    integration: "Integración",
    complete: "Configuración completa",
    companyName: "Nombre de la empresa",
    industry: "Industria",
    website: "URL del sitio web",
    email: "Email de contacto",
    location: "Ubicación",
    description: "Descripción",
    chooseTheme: "Elegir un tema",
    primaryColor: "Color primario",
    backgroundColor: "Color de fondo",
    textColor: "Color del texto",
    preview: "Vista previa",
    choosePlan: "Elegir plan de facturación",
    integrationCode: "Código de integración",
    instructions: "Instrucciones",
    testWidget: "Probar widget",
    completeSetup: "Completar configuración"
  },
  landing: {
    heroTitle: "Transforma tu sitio web con soporte de chat con IA",
    heroSubtitle: "Proporciona soporte al cliente instantáneo e inteligente con nuestro widget de chat con IA avanzado.",
    viewDemo: "Ver Demo",
    featuresTitle: "¿Por qué elegir Qurius AI?",
    featuresSubtitle: "Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente",
    feature1Title: "Súper Rápido",
    feature1Description: "Obtén respuestas instantáneas con nuestro sistema de chat con IA que entiende y responde a las consultas de los clientes en tiempo real.",
    feature2Title: "Seguro y Confiable",
    feature2Description: "Seguridad de nivel empresarial con encriptación de datos y protección de privacidad. Los datos de tus clientes siempre están seguros con nosotros.",
    feature3Title: "Soporte Multiidioma",
    feature3Description: "Soporta clientes de todo el mundo con detección automática de idioma y capacidades de traducción.",
    pricingTitle: "Precios Simples y Transparentes",
    pricingSubtitle: "Elige el plan que se adapte a las necesidades de tu negocio",
    contactSales: "Contactar Ventas",
    ctaTitle: "¿Listo para comenzar?",
    ctaSubtitle: "Únete a miles de empresas que ya usan Qurius AI para mejorar su soporte al cliente.",
    startFreeTrial: "Comenzar Prueba Gratuita",
    emailPlaceholder: "Ingresa tu email",
    getUpdates: "Obtener Actualizaciones",
    footerDescription: "Transforma tu sitio web con soporte de chat inteligente con IA.",
    footerProduct: "Producto",
    footerCompany: "Empresa",
    footerSupport: "Soporte",
    features: "Características",
    pricing: "Precios",
    installation: "Instalación",
    about: "Acerca de",
    blog: "Blog",
    careers: "Carreras",
    helpCenter: "Centro de Ayuda",
    contact: "Contacto",
    status: "Estado",
    allRightsReserved: "Todos los derechos reservados."
  },
  demo: {
    title: "Demo de Interfaz de Chat Profesional",
    companyWebsiteTitle: "Contenido del Sitio Web de la Empresa",
    companyWebsiteDescription: "Esta es una demostración de cómo aparecería la interfaz de chat cuando se integre en un sitio web profesional de una empresa (PurpleSoft Inc). El widget de chat está posicionado en la esquina inferior derecha y se puede minimizar cuando no se usa.",
    keyFeaturesTitle: "Características principales incluyen:",
    feature1: "Diseño moderno y profesional que coincide con la marca de la empresa",
    feature2: "Soporte para temas claros y oscuros con transiciones suaves",
    feature3: "Diseño responsivo que funciona en todos los dispositivos",
    feature4: "Diseño de mensajes estilo ChatGPT con mensajes del usuario a la derecha",
    feature5: "Indicadores de escritura y animaciones suaves",
    feature6: "Interfaz minimizable para reducir el desorden en pantalla",
    tryChatTitle: "Prueba la Interfaz de Chat",
    tryChatDescription: "Haz clic en el botón de chat en la esquina inferior derecha para comenzar una conversación. Puedes alternar entre temas claros y oscuros, minimizar el chat y experimentar la interfaz suave y profesional.",
    learnMoreButton: "Aprender Más",
    getStartedButton: "Comenzar",
    viewAdminButton: "Ver Panel de Administración"
  }
}, UE = {
  common: {
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    cancel: "Annuler",
    save: "Enregistrer",
    delete: "Supprimer",
    edit: "Modifier",
    view: "Voir",
    close: "Fermer",
    next: "Suivant",
    previous: "Précédent",
    submit: "Soumettre",
    copy: "Copier",
    copied: "Copié !",
    getStarted: "Commencer",
    step: "Étape"
  },
  contact: {
    title: "Contactez-nous",
    subtitle: "Contactez notre équipe. Nous sommes là pour vous aider à réussir avec le support client alimenté par l'IA.",
    sendMessage: "Envoyez-nous un message",
    fullName: "Nom complet",
    emailAddress: "Adresse e-mail",
    company: "Entreprise",
    subject: "Sujet",
    message: "Message",
    namePlaceholder: "Jean Dupont",
    emailPlaceholder: "jean@entreprise.com",
    companyPlaceholder: "Votre Entreprise",
    messagePlaceholder: "Dites-nous comment nous pouvons vous aider...",
    selectSubject: "Sélectionnez un sujet",
    salesInquiry: "Demande de vente",
    technicalSupport: "Support technique",
    partnership: "Partenariat",
    careers: "Carrières",
    other: "Autre",
    sending: "Envoi...",
    getInTouch: "Contactez-nous",
    emailUs: "Envoyez-nous un e-mail",
    callUs: "Appelez-nous",
    visitUs: "Visitez-nous",
    emailDescription: "Pour les demandes générales et le support",
    callDescription: "Lundi à vendredi, 9h à 18h EST",
    address: "123 AI Innovation Drive<br />Tech Valley, CA 94043<br />États-Unis",
    responseTimes: "Temps de réponse",
    salesInquiries: "Demandes de vente",
    within2Hours: "Dans les 2 heures",
    within4Hours: "Dans les 4 heures",
    generalQuestions: "Questions générales",
    within24Hours: "Dans les 24 heures",
    partnershipRequests: "Demandes de partenariat",
    within48Hours: "Dans les 48 heures",
    successMessage: "Merci pour votre message ! Nous vous répondrons dans les 24 heures.",
    tryAI: "Essayez notre assistant IA",
    tryAIDescription: "Des questions ? Discutez avec notre assistant IA pour voir Qurius AI en action ! Cliquez sur l'icône de chat en bas à droite pour expérimenter notre produit de première main.",
    experienceAI: "Découvrez la puissance de l'IA",
    experienceAIDescription: "Ce chatbot fonctionne avec la même technologie que nous fournissons à nos clients. Posez des questions sur nos fonctionnalités, nos prix ou toute question que vous avez sur Qurius AI !",
    readyToStart: "Prêt à commencer ?",
    readyToStartDescription: "Rejoignez des milliers d'entreprises qui utilisent Qurius AI pour améliorer leur support client.",
    startFreeTrial: "Commencer l'essai gratuit",
    viewDemo: "Voir la démo"
  },
  about: {
    title: "À propos de Qurius AI",
    subtitle: "Donner aux entreprises les moyens d'agir avec un support client intelligent grâce à la technologie IA de pointe",
    mission: "Notre Mission",
    missionDescription1: "Chez Qurius AI, nous croyons que chaque interaction client doit être significative, efficace et satisfaisante. Notre mission est de révolutionner le support client en fournissant aux entreprises des chatbots intelligents alimentés par l'IA qui comprennent le contexte, parlent plusieurs langues et offrent des expériences personnalisées.",
    missionDescription2: "Nous nous engageons à rendre la technologie IA avancée accessible aux entreprises de toutes tailles, en les aidant à faire évoluer leur support client tout en maintenant le toucher humain que les clients apprécient.",
    vision: "Notre Vision",
    visionDescription: "Devenir la plateforme leader pour le support client alimenté par l'IA, permettant aux entreprises du monde entier de fournir des expériences client exceptionnelles grâce à l'automatisation intelligente.",
    values: "Nos Valeurs",
    valuesDescription: "Les principes qui guident tout ce que nous faisons",
    customerCentric: "Centré sur le Client",
    customerCentricDescription: "Chaque décision que nous prenons est guidée par ce qui est le mieux pour nos clients et leurs utilisateurs finaux. Nous écoutons, apprenons et améliorons continuellement basé sur les retours.",
    innovation: "Innovation",
    innovationDescription: "Nous adoptons la technologie de pointe et les solutions créatives pour résoudre des problèmes complexes et rester en avance sur la courbe dans le développement de l'IA.",
    transparency: "Transparence",
    transparencyDescription: "Nous croyons en la communication ouverte, les prix honnêtes et les explications claires de la façon dont notre technologie IA fonctionne pour construire la confiance avec nos clients.",
    meetFounder: "Rencontrez le Fondateur",
    meetFounderDescription: "Le visionnaire derrière Qurius AI, passionné par la révolution du support client grâce à la technologie intelligente.",
    founderName: "De-Graft",
    founderTitle: "Fondateur et Développeur, Qurius AI",
    backgroundExperience: "Formation et Expérience",
    backgroundDescription: "De-Graft est un étudiant en informatique à l'Université William Paterson avec un GPA de 3,98, apportant une expertise en IA, exploration de données et développement full-stack. Il a travaillé comme ingénieur logiciel chez AyaPrep Limited, où il a développé une API RESTful pour une application mobile, augmentant l'engagement des utilisateurs de 30% et réduisant la latence de 40%.",
    passionsInterests: "Passions et Intérêts",
    passionsDescription: "De-Graft est passionné par l'exploitation de l'IA et de l'apprentissage automatique pour résoudre des problèmes du monde réel. Il aime construire des applications évolutives qui font une différence, de la plateforme de partage du campus ShareSphere aux solutions SaaS de niveau entreprise.",
    quriusVision: "La Vision de Qurius AI",
    quriusVisionDescription: `"Qurius AI est né de mon expérience dans la construction d'applications orientées client et la compréhension des défis auxquels font face les petites et moyennes entreprises avec le support. J'ai imaginé un widget de chat intelligent qui pourrait fournir des réponses instantanées et personnalisées tout en maintenant le toucher humain. La plateforme combine mon expertise en React, TypeScript et IA pour livrer une solution qui réduit le temps de configuration client de 80% et fournit des analyses en temps réel pour des insights actionnables. Je suis engagé à rendre la technologie IA avancée accessible aux entreprises de toutes tailles, en les aidant à faire évoluer leur support client tout en maintenant le toucher humain que les clients apprécient." - De-Graft`,
    skillAI: "IA/ML",
    skillFullStack: "Développement Full-Stack",
    skillReact: "React/TypeScript",
    skillSaaS: "Architecture SaaS",
    skillDataScience: "Science des Données",
    ourTeam: "Notre Équipe",
    ourTeamDescription: "Nous sommes une équipe passionnée de chercheurs en IA, d'ingénieurs et de spécialistes du succès client dédiés à construire l'avenir du support client.",
    growingTeam: "Équipe en Croissance",
    growingTeamDescription: "Notre équipe diversifiée rassemble l'expertise de l'apprentissage automatique, du traitement du langage naturel, de l'ingénierie logicielle et de la conception d'expérience client.",
    joinTeam: "Rejoignez Notre Équipe",
    experienceAI: "Découvrez Notre IA en Action",
    experienceAIDescription: "Voulez-vous voir de quoi il s'agit ? Essayez notre assistant IA ici même sur cette page ! Cliquez sur l'icône de chat pour poser des questions sur notre entreprise, notre technologie ou autre chose.",
    tryItNow: "Essayez-le Maintenant",
    tryItNowDescription: "Ce chatbot utilise la même technologie IA que nous fournissons à nos clients. Posez des questions sur nos fonctionnalités, nos prix, notre équipe ou les valeurs de l'entreprise !",
    readyToStart: "Prêt à commencer ?",
    readyToStartDescription: "Rejoignez des milliers d'entreprises qui font confiance à Qurius AI pour livrer des expériences client exceptionnelles.",
    getStartedFree: "Commencer Gratuitement",
    contactUs: "Contactez-nous"
  },
  navigation: {
    home: "Accueil",
    demo: "Démo",
    admin: "Admin",
    login: "Connexion",
    logout: "Déconnexion"
  },
  plans: {
    free: "Gratuit",
    starter: "Débutant",
    pro: "Pro",
    perMonth: "par mois",
    unlimitedMessages: "Messages illimités",
    whiteLabelOptions: "Options de marque blanche",
    phoneSupport: "Support téléphonique 24/7",
    advancedAnalytics: "Analyses avancées",
    apiAccess: "Accès API",
    customIntegrations: "Intégrations personnalisées",
    basicCustomization: "Personnalisation de base",
    emailSupport: "Support par email",
    standardFaqTemplates: "Modèles FAQ standard",
    prioritySupport: "Support prioritaire",
    analyticsDashboard: "Tableau de bord analytique",
    customFaqImport: "Import FAQ personnalisé",
    // New Pro features
    multiLanguageSupport: "🌍 Support multilingue (10+ langues)",
    autoLanguageDetection: "🌐 Détection automatique de la langue",
    translatedFaqTemplates: "📝 Modèles FAQ traduits",
    languageSpecificCustomization: "🎨 Personnalisation spécifique à la langue",
    multiLanguageAnalytics: "📊 Analyses multilingues",
    customLanguageSupport: "🔧 Support de langue personnalisé",
    customWebCrawling: "🕸️ Web crawling personnalisé"
  },
  chat: {
    welcome: "Comment puis-je vous aider aujourd'hui ?",
    welcomeWithCompany: "Bonjour ! Je suis votre assistant {companyName}. Comment puis-je vous aider aujourd'hui ?",
    typeMessage: "Tapez votre message...",
    send: "Envoyer",
    minimize: "Réduire",
    expand: "Développer",
    typing: "En train d'écrire...",
    online: "En ligne",
    offline: "Hors ligne"
  },
  onboarding: {
    welcome: "Bienvenue sur Qurius AI",
    companyInfo: "Informations de l'entreprise",
    customization: "Personnalisation du widget",
    payment: "Configuration du paiement",
    integration: "Intégration",
    complete: "Configuration terminée",
    companyName: "Nom de l'entreprise",
    industry: "Industrie",
    website: "URL du site web",
    email: "Email de contact",
    location: "Emplacement",
    description: "Description",
    chooseTheme: "Choisir un thème",
    primaryColor: "Couleur primaire",
    backgroundColor: "Couleur d'arrière-plan",
    textColor: "Couleur du texte",
    preview: "Aperçu",
    choosePlan: "Choisir votre plan de facturation",
    integrationCode: "Code d'intégration",
    instructions: "Instructions",
    testWidget: "Tester le widget",
    completeSetup: "Terminer la configuration"
  },
  landing: {
    heroTitle: "Transformez votre site web avec un support de chat IA",
    heroSubtitle: "Fournissez un support client instantané et intelligent avec notre widget de chat IA avancé.",
    viewDemo: "Voir la démo",
    featuresTitle: "Pourquoi choisir Qurius AI?",
    featuresSubtitle: "Fonctionnalités puissantes conçues pour améliorer votre expérience de support client",
    feature1Title: "Ultra Rapide",
    feature1Description: "Obtenez des réponses instantanées avec notre système de chat IA.",
    feature2Title: "Sécurisé et Fiable",
    feature2Description: "Sécurité de niveau entreprise avec chiffrement des données et protection de la vie privée.",
    feature3Title: "Support Multilingue",
    feature3Description: "Soutenez les clients du monde entier avec détection automatique de la langue.",
    pricingTitle: "Tarification Simple et Transparente",
    pricingSubtitle: "Choisissez le plan qui correspond aux besoins de votre entreprise",
    contactSales: "Contacter les Ventes",
    ctaTitle: "Prêt à commencer?",
    ctaSubtitle: "Rejoignez des milliers d'entreprises qui utilisent déjà Qurius AI.",
    startFreeTrial: "Commencer l'essai gratuit",
    emailPlaceholder: "Entrez votre email",
    getUpdates: "Obtenir les mises à jour",
    footerDescription: "Transformez votre site web avec un support de chat IA intelligent.",
    footerProduct: "Produit",
    footerCompany: "Entreprise",
    footerSupport: "Support",
    features: "Fonctionnalités",
    pricing: "Tarification",
    installation: "Installation",
    about: "À propos",
    blog: "Blog",
    careers: "Carrières",
    helpCenter: "Centre d'aide",
    contact: "Contact",
    status: "Statut",
    allRightsReserved: "Tous droits réservés."
  },
  demo: {
    title: "Démo",
    companyWebsiteTitle: "Site web de l'entreprise",
    companyWebsiteDescription: "Description pour le site web de l'entreprise (PurpleSoft Inc)",
    keyFeaturesTitle: "Fonctionnalités clés",
    feature1: "Fonctionnalité 1",
    feature2: "Fonctionnalité 2",
    feature3: "Fonctionnalité 3",
    feature4: "Fonctionnalité 4",
    feature5: "Fonctionnalité 5",
    feature6: "Fonctionnalité 6",
    tryChatTitle: "Essayer le widget de chat",
    tryChatDescription: "Description pour essayer le widget de chat",
    learnMoreButton: "En savoir plus",
    getStartedButton: "Commencer",
    viewAdminButton: "Voir l'administrateur"
  }
}, LE = {
  common: {
    loading: "Laden...",
    error: "Fehler",
    success: "Erfolg",
    cancel: "Abbrechen",
    save: "Speichern",
    delete: "Löschen",
    edit: "Bearbeiten",
    view: "Anzeigen",
    close: "Schließen",
    next: "Weiter",
    previous: "Zurück",
    submit: "Absenden",
    copy: "Kopieren",
    copied: "Kopiert!",
    getStarted: "Loslegen",
    step: "Schritt"
  },
  contact: {
    title: "Kontakt",
    subtitle: "Kontaktieren Sie unser Team. Wir sind hier, um Ihnen beim Erfolg mit KI-gestütztem Kundenservice zu helfen.",
    sendMessage: "Nachricht senden",
    fullName: "Vollständiger Name",
    emailAddress: "E-Mail-Adresse",
    company: "Unternehmen",
    subject: "Betreff",
    message: "Nachricht",
    namePlaceholder: "Max Mustermann",
    emailPlaceholder: "max@unternehmen.com",
    companyPlaceholder: "Ihr Unternehmen",
    messagePlaceholder: "Erzählen Sie uns, wie wir Ihnen helfen können...",
    selectSubject: "Betreff auswählen",
    salesInquiry: "Verkaufsanfrage",
    technicalSupport: "Technischer Support",
    partnership: "Partnerschaft",
    careers: "Karriere",
    other: "Sonstiges",
    sending: "Wird gesendet...",
    getInTouch: "Kontakt aufnehmen",
    emailUs: "E-Mail senden",
    callUs: "Anrufen",
    visitUs: "Besuchen",
    emailDescription: "Für allgemeine Anfragen und Support",
    callDescription: "Montag bis Freitag, 9-18 Uhr EST",
    address: "123 AI Innovation Drive<br />Tech Valley, CA 94043<br />Vereinigte Staaten",
    responseTimes: "Antwortzeiten",
    salesInquiries: "Verkaufsanfragen",
    within2Hours: "Innerhalb von 2 Stunden",
    within4Hours: "Innerhalb von 4 Stunden",
    generalQuestions: "Allgemeine Fragen",
    within24Hours: "Innerhalb von 24 Stunden",
    partnershipRequests: "Partnerschaftsanfragen",
    within48Hours: "Innerhalb von 48 Stunden",
    successMessage: "Vielen Dank für Ihre Nachricht! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    tryAI: "KI-Assistent testen",
    tryAIDescription: "Fragen? Chatten Sie mit unserem KI-Assistenten, um Qurius AI in Aktion zu sehen!",
    experienceAI: "Die Kraft der KI erleben",
    experienceAIDescription: "Dieser Chatbot nutzt die gleiche Technologie, die wir unseren Kunden zur Verfügung stellen.",
    readyToStart: "Bereit zu starten?",
    readyToStartDescription: "Schließen Sie sich Tausenden von Unternehmen an, die Qurius AI nutzen.",
    startFreeTrial: "Kostenlose Testversion starten",
    viewDemo: "Demo ansehen"
  },
  about: {
    title: "Über Qurius AI",
    subtitle: "Unternehmen mit intelligentem Kundenservice durch KI-Technologie stärken",
    mission: "Unsere Mission",
    missionDescription1: "Bei Qurius AI glauben wir, dass jede Kundeninteraktion bedeutungsvoll, effizient und zufriedenstellend sein sollte.",
    missionDescription2: "Wir setzen uns dafür ein, fortschrittliche KI-Technologie für Unternehmen aller Größen zugänglich zu machen.",
    vision: "Unsere Vision",
    visionDescription: "Die führende Plattform für KI-gestützten Kundenservice zu werden.",
    values: "Unsere Werte",
    valuesDescription: "Die Prinzipien, die alles leiten, was wir tun",
    customerCentric: "Kundenorientiert",
    customerCentricDescription: "Jede Entscheidung wird von dem geleitet, was für unsere Kunden am besten ist.",
    innovation: "Innovation",
    innovationDescription: "Wir nutzen modernste Technologie und kreative Lösungen.",
    transparency: "Transparenz",
    transparencyDescription: "Wir glauben an offene Kommunikation und ehrliche Preise.",
    meetFounder: "Den Gründer kennenlernen",
    meetFounderDescription: "Der Visionär hinter Qurius AI.",
    founderName: "De-Graft",
    founderTitle: "Gründer & Entwickler, Qurius AI",
    backgroundExperience: "Hintergrund & Erfahrung",
    backgroundDescription: "De-Graft ist ein Informatikstudent an der William Paterson University.",
    passionsInterests: "Leidenschaften & Interessen",
    passionsDescription: "De-Graft ist leidenschaftlich daran interessiert, KI und maschinelles Lernen zu nutzen.",
    quriusVision: "Die Qurius AI Vision",
    quriusVisionDescription: "Qurius AI entstand aus der Erfahrung beim Aufbau kundenorientierter Anwendungen.",
    skillAI: "KI/ML",
    skillFullStack: "Full-Stack-Entwicklung",
    skillReact: "React/TypeScript",
    skillSaaS: "SaaS-Architektur",
    skillDataScience: "Datenwissenschaft",
    ourTeam: "Unser Team",
    ourTeamDescription: "Wir sind ein leidenschaftliches Team von KI-Forschern und Ingenieuren.",
    growingTeam: "Wachsendes Team",
    growingTeamDescription: "Unser vielfältiges Team vereint Expertise aus verschiedenen Bereichen.",
    joinTeam: "Unserem Team beitreten",
    experienceAI: "Unsere KI in Aktion erleben",
    experienceAIDescription: "Möchten Sie sehen, worum es geht? Testen Sie unseren KI-Assistenten!",
    tryItNow: "Jetzt testen",
    tryItNowDescription: "Dieser Chatbot nutzt die gleiche KI-Technologie, die wir unseren Kunden zur Verfügung stellen.",
    readyToStart: "Bereit zu starten?",
    readyToStartDescription: "Schließen Sie sich Tausenden von Unternehmen an.",
    getStartedFree: "Kostenlos starten",
    contactUs: "Kontakt"
  },
  navigation: {
    home: "Startseite",
    demo: "Demo",
    admin: "Admin",
    login: "Anmelden",
    logout: "Abmelden"
  },
  plans: {
    free: "Kostenlos",
    starter: "Starter",
    pro: "Pro",
    perMonth: "pro Monat",
    unlimitedMessages: "Unbegrenzte Nachrichten",
    whiteLabelOptions: "White-Label-Optionen",
    phoneSupport: "24/7 Telefonsupport",
    advancedAnalytics: "Erweiterte Analysen",
    apiAccess: "API-Zugang",
    customIntegrations: "Benutzerdefinierte Integrationen",
    basicCustomization: "Grundlegende Anpassung",
    emailSupport: "E-Mail-Support",
    standardFaqTemplates: "Standard-FAQ-Vorlagen",
    prioritySupport: "Prioritäts-Support",
    analyticsDashboard: "Analytics-Dashboard",
    customFaqImport: "Benutzerdefinierter FAQ-Import",
    // New Pro features
    multiLanguageSupport: "🌍 Mehrsprachige Unterstützung (10+ Sprachen)",
    autoLanguageDetection: "🌐 Automatische Spracherkennung",
    translatedFaqTemplates: "📝 Übersetzte FAQ-Vorlagen",
    languageSpecificCustomization: "🎨 Sprachspezifische Anpassung",
    multiLanguageAnalytics: "📊 Mehrsprachige Analysen",
    customLanguageSupport: "🔧 Benutzerdefinierte Sprachunterstützung",
    customWebCrawling: "🕸️ Benutzerdefinierter Web-Crawling"
  },
  chat: {
    welcome: "Wie kann ich Ihnen heute helfen?",
    welcomeWithCompany: "Hallo! Ich bin Ihr {companyName} Assistent. Wie kann ich Ihnen heute helfen?",
    typeMessage: "Nachricht eingeben...",
    send: "Senden",
    minimize: "Minimieren",
    expand: "Erweitern",
    typing: "Schreibt...",
    online: "Online",
    offline: "Offline"
  },
  onboarding: {
    welcome: "Willkommen bei Qurius AI",
    companyInfo: "Unternehmensinformationen",
    customization: "Widget-Anpassung",
    payment: "Zahlungseinrichtung",
    integration: "Integration",
    complete: "Einrichtung abschließen",
    companyName: "Firmenname",
    industry: "Branche",
    website: "Website-URL",
    email: "Kontakt-E-Mail",
    location: "Standort",
    description: "Beschreibung",
    chooseTheme: "Thema wählen",
    primaryColor: "Primärfarbe",
    backgroundColor: "Hintergrundfarbe",
    textColor: "Textfarbe",
    preview: "Vorschau",
    choosePlan: "Abrechnungsplan wählen",
    integrationCode: "Integrationscode",
    instructions: "Anweisungen",
    testWidget: "Widget testen",
    completeSetup: "Einrichtung abschließen"
  },
  landing: {
    heroTitle: "Transforma tu sitio web con soporte de chat con IA",
    heroSubtitle: "Proporciona soporte al cliente instantáneo e inteligente con nuestro widget de chat con IA avanzado. Mejora el compromiso y la satisfacción con asistencia automatizada 24/7.",
    viewDemo: "Ver Demo",
    featuresTitle: "¿Por qué elegir Qurius AI?",
    featuresSubtitle: "Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente",
    feature1Title: "Súper Rápido",
    feature1Description: "Obtén respuestas instantáneas con nuestro sistema de chat con IA que entiende y responde a las consultas de los clientes en tiempo real.",
    feature2Title: "Seguro y Confiable",
    feature2Description: "Seguridad de nivel empresarial con encriptación de datos y protección de privacidad. Los datos de tus clientes siempre están seguros con nosotros.",
    feature3Title: "Soporte Multiidioma",
    feature3Description: "Soporta clientes de todo el mundo con detección automática de idioma y capacidades de traducción.",
    pricingTitle: "Precios Simples y Transparentes",
    pricingSubtitle: "Elige el plan que se adapte a las necesidades de tu negocio",
    contactSales: "Contactar Ventas",
    ctaTitle: "¿Listo para comenzar?",
    ctaSubtitle: "Únete a miles de empresas que ya usan Qurius AI para mejorar su soporte al cliente.",
    startFreeTrial: "Comenzar Prueba Gratuita",
    emailPlaceholder: "Ingresa tu email",
    getUpdates: "Obtener Actualizaciones",
    footerDescription: "Transforma tu sitio web con soporte de chat inteligente con IA.",
    footerProduct: "Producto",
    footerCompany: "Empresa",
    footerSupport: "Soporte",
    features: "Características",
    pricing: "Precios",
    installation: "Instalación",
    about: "Acerca de",
    blog: "Blog",
    careers: "Carreras",
    helpCenter: "Centro de Ayuda",
    contact: "Contacto",
    status: "Estado",
    allRightsReserved: "Todos los derechos reservados."
  },
  demo: {
    title: "Demo",
    companyWebsiteTitle: "Sitio web de la empresa",
    companyWebsiteDescription: "Descripción para el sitio web de la empresa (PurpleSoft Inc)",
    keyFeaturesTitle: "Características clave",
    feature1: "Característica 1",
    feature2: "Característica 2",
    feature3: "Característica 3",
    feature4: "Característica 4",
    feature5: "Característica 5",
    feature6: "Característica 6",
    tryChatTitle: "Prueba el widget de chat",
    tryChatDescription: "Descripción para probar el widget de chat",
    learnMoreButton: "Aprender más",
    getStartedButton: "Comenzar",
    viewAdminButton: "Ver Administrador"
  }
}, qE = {
  common: {
    loading: "加载中...",
    error: "错误",
    success: "成功",
    cancel: "取消",
    save: "保存",
    delete: "删除",
    edit: "编辑",
    view: "查看",
    close: "关闭",
    next: "下一步",
    previous: "上一步",
    submit: "提交",
    copy: "复制",
    copied: "已复制！",
    getStarted: "开始使用",
    step: "步骤"
  },
  contact: {
    title: "联系我们",
    subtitle: "欢迎联系我们，我们期待与您合作",
    sendMessage: "发送消息",
    fullName: "姓名",
    emailAddress: "邮箱",
    company: "公司",
    subject: "主题",
    message: "消息",
    namePlaceholder: "请输入您的姓名",
    emailPlaceholder: "请输入您的邮箱",
    companyPlaceholder: "请输入您的公司名称",
    messagePlaceholder: "请输入您的消息",
    selectSubject: "请选择主题",
    salesInquiry: "销售咨询",
    technicalSupport: "技术支持",
    partnership: "合作伙伴关系",
    careers: "职业机会",
    other: "其他",
    sending: "发送中...",
    getInTouch: "获取联系",
    emailUs: "电子邮件我们",
    callUs: "打电话给我们",
    visitUs: "访问我们",
    emailDescription: "我们期待与您合作，请随时联系我们。",
    callDescription: "我们期待与您合作，请随时联系我们。",
    address: "地址",
    responseTimes: "响应时间",
    salesInquiries: "销售咨询",
    within2Hours: "2小时内",
    within4Hours: "4小时内",
    generalQuestions: "一般问题",
    within24Hours: "24小时内",
    partnershipRequests: "合作伙伴请求",
    within48Hours: "48小时内",
    successMessage: "消息发送成功！",
    tryAI: "尝试AI",
    tryAIDescription: "尝试我们的AI聊天小部件，体验智能客户支持。",
    experienceAI: "体验AI",
    experienceAIDescription: "通过我们的AI聊天小部件获得即时响应。",
    readyToStart: "准备开始了吗？",
    readyToStartDescription: "加入数千家已经在使用Qurius AI改善客户支持的企业。",
    startFreeTrial: "开始免费试用",
    viewDemo: "查看演示"
  },
  about: {
    title: "关于我们",
    subtitle: "了解Qurius AI，我们的使命和愿景",
    mission: "使命",
    missionDescription1: "我们的使命是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    missionDescription2: "我们致力于提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    vision: "愿景",
    visionDescription: "我们的愿景是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    values: "价值观",
    valuesDescription: "我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    customerCentric: "客户中心",
    customerCentricDescription: "我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    innovation: "创新",
    innovationDescription: "我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    transparency: "透明",
    transparencyDescription: "我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    meetFounder: "认识创始人",
    meetFounderDescription: "我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    founderName: "创始人",
    founderTitle: "创始人",
    backgroundExperience: "背景经验",
    backgroundDescription: "我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    passionsInterests: "兴趣和激情",
    passionsDescription: "我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    quriusVision: "Qurius AI愿景",
    quriusVisionDescription: "我们的价值观是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    skillAI: "AI技能",
    skillFullStack: "全栈技能",
    skillReact: "React技能",
    skillSaaS: "SaaS技能",
    skillDataScience: "数据科学技能",
    ourTeam: "我们的团队",
    ourTeamDescription: "我们的团队是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    growingTeam: "我们的团队是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    growingTeamDescription: "我们的团队是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    joinTeam: "加入我们的团队",
    experienceAI: "体验AI",
    experienceAIDescription: "我们的团队是提供一个先进的AI聊天小部件，为企业和客户提供一个智能的客户支持系统。",
    tryItNow: "尝试现在",
    tryItNowDescription: "这个聊天机器人使用与我们提供给客户相同的AI技术。询问我们的功能、定价、团队或公司价值观！",
    readyToStart: "准备开始了吗？",
    readyToStartDescription: "加入数千家已经在使用Qurius AI改善客户支持的企业。",
    getStartedFree: "开始免费试用",
    contactUs: "联系我们"
  },
  navigation: {
    home: "首页",
    demo: "演示",
    admin: "管理",
    login: "登录",
    logout: "登出"
  },
  plans: {
    free: "免费",
    starter: "入门版",
    pro: "专业版",
    perMonth: "每月",
    unlimitedMessages: "无限消息",
    whiteLabelOptions: "白标选项",
    phoneSupport: "24/7电话支持",
    advancedAnalytics: "高级分析",
    apiAccess: "API访问",
    customIntegrations: "自定义集成",
    basicCustomization: "基础定制",
    emailSupport: "邮件支持",
    standardFaqTemplates: "标准FAQ模板",
    prioritySupport: "优先支持",
    analyticsDashboard: "分析仪表板",
    customFaqImport: "自定义FAQ导入",
    // New Pro features
    multiLanguageSupport: "🌍 多语言支持（10+种语言）",
    autoLanguageDetection: "🌐 自动语言检测",
    translatedFaqTemplates: "📝 翻译FAQ模板",
    languageSpecificCustomization: "🎨 语言特定定制",
    multiLanguageAnalytics: "📊 多语言分析",
    customLanguageSupport: "🔧 自定义语言支持",
    customWebCrawling: "🕸️ 自定义网络爬虫"
  },
  chat: {
    welcome: "今天我能为您做些什么？",
    welcomeWithCompany: "您好！我是您的{companyName}助手。今天我能为您做些什么？",
    typeMessage: "输入您的消息...",
    send: "发送",
    minimize: "最小化",
    expand: "展开",
    typing: "正在输入...",
    online: "在线",
    offline: "离线"
  },
  onboarding: {
    welcome: "欢迎使用Qurius AI",
    companyInfo: "公司信息",
    customization: "小部件定制",
    payment: "支付设置",
    integration: "集成",
    complete: "完成设置",
    companyName: "公司名称",
    industry: "行业",
    website: "网站URL",
    email: "联系邮箱",
    location: "位置",
    description: "描述",
    chooseTheme: "选择主题",
    primaryColor: "主色调",
    backgroundColor: "背景色",
    textColor: "文字颜色",
    preview: "预览",
    choosePlan: "选择计费计划",
    integrationCode: "集成代码",
    instructions: "说明",
    testWidget: "测试小部件",
    completeSetup: "完成设置"
  },
  landing: {
    heroTitle: "用AI聊天支持改造您的网站",
    heroSubtitle: "通过我们先进的AI聊天小部件提供即时、智能的客户支持。",
    viewDemo: "查看演示",
    featuresTitle: "为什么选择Qurius AI？",
    featuresSubtitle: "专为提升客户支持体验而设计的强大功能",
    feature1Title: "闪电般快速",
    feature1Description: "通过我们的AI聊天系统获得即时响应。",
    feature2Title: "安全可靠",
    feature2Description: "企业级安全性，具有数据加密和隐私保护。",
    feature3Title: "多语言支持",
    feature3Description: "通过自动语言检测支持全球客户。",
    pricingTitle: "简单透明的定价",
    pricingSubtitle: "选择适合您业务需求的计划",
    contactSales: "联系销售",
    ctaTitle: "准备开始了吗？",
    ctaSubtitle: "加入数千家已经在使用Qurius AI改善客户支持的企业。",
    startFreeTrial: "开始免费试用",
    emailPlaceholder: "输入您的邮箱",
    getUpdates: "获取更新",
    footerDescription: "用智能AI聊天支持改造您的网站。",
    footerProduct: "产品",
    footerCompany: "公司",
    footerSupport: "支持",
    features: "功能",
    pricing: "定价",
    installation: "安装",
    about: "关于",
    blog: "博客",
    careers: "职业",
    helpCenter: "帮助中心",
    contact: "联系",
    status: "状态",
    allRightsReserved: "版权所有。"
  },
  demo: {
    title: "演示",
    companyWebsiteTitle: "公司网站",
    companyWebsiteDescription: "公司网站描述 (PurpleSoft Inc)",
    keyFeaturesTitle: "关键功能",
    feature1: "功能1",
    feature2: "功能2",
    feature3: "功能3",
    feature4: "功能4",
    feature5: "功能5",
    feature6: "功能6",
    tryChatTitle: "试用聊天小部件",
    tryChatDescription: "试用聊天小部件描述",
    learnMoreButton: "了解更多",
    getStartedButton: "开始",
    viewAdminButton: "查看管理员"
  }
}, jE = {
  common: {
    loading: "読み込み中...",
    error: "エラー",
    success: "成功",
    cancel: "キャンセル",
    save: "保存",
    delete: "削除",
    edit: "編集",
    view: "表示",
    close: "閉じる",
    next: "次へ",
    previous: "前へ",
    submit: "送信",
    copy: "コピー",
    copied: "コピーしました！",
    getStarted: "はじめる",
    step: "ステップ"
  },
  contact: {
    title: "お問い合わせ",
    subtitle: "私たちのチームにお問い合わせください。AI搭載のカスタマーサポートで成功をお手伝いします。",
    sendMessage: "メッセージを送信",
    fullName: "氏名",
    emailAddress: "メールアドレス",
    company: "会社名",
    subject: "件名",
    message: "メッセージ",
    namePlaceholder: "山田太郎",
    emailPlaceholder: "yamada@company.com",
    companyPlaceholder: "あなたの会社",
    messagePlaceholder: "どのようにお手伝いできるか教えてください...",
    selectSubject: "件名を選択",
    salesInquiry: "営業に関するお問い合わせ",
    technicalSupport: "技術サポート",
    partnership: "パートナーシップ",
    careers: "採用情報",
    other: "その他",
    sending: "送信中...",
    getInTouch: "お問い合わせ",
    emailUs: "メールでお問い合わせ",
    callUs: "お電話でお問い合わせ",
    visitUs: "お越しください",
    emailDescription: "一般的なお問い合わせとサポート",
    callDescription: "月曜日から金曜日、9:00-18:00 EST",
    address: "123 AI Innovation Drive<br />Tech Valley, CA 94043<br />アメリカ合衆国",
    responseTimes: "応答時間",
    salesInquiries: "営業に関するお問い合わせ",
    within2Hours: "2時間以内",
    within4Hours: "4時間以内",
    generalQuestions: "一般的な質問",
    within24Hours: "24時間以内",
    partnershipRequests: "パートナーシップのリクエスト",
    within48Hours: "48時間以内",
    successMessage: "メッセージをありがとうございます！24時間以内にご返信いたします。",
    tryAI: "AIアシスタントを試す",
    tryAIDescription: "質問がありますか？Qurius AIの動作を確認するためにAIアシスタントとチャットしてください！",
    experienceAI: "AIの力を体験",
    experienceAIDescription: "このチャットボットは、お客様に提供しているのと同じ技術を使用しています。",
    readyToStart: "始める準備はできましたか？",
    readyToStartDescription: "Qurius AIを使用してカスタマーサポートを向上させている何千もの企業に参加してください。",
    startFreeTrial: "無料トライアルを開始",
    viewDemo: "デモを見る"
  },
  about: {
    title: "Qurius AIについて",
    subtitle: "最先端のAI技術によるインテリジェントなカスタマーサポートで企業を支援",
    mission: "私たちの使命",
    missionDescription1: "Qurius AIでは、すべての顧客とのやり取りが意味のある、効率的で満足のいくものであるべきだと信じています。",
    missionDescription2: "私たちは、高度なAI技術をあらゆる規模の企業にアクセス可能にし、顧客が重視する人間らしさを保ちながらカスタマーサポートを拡張するお手伝いをします。",
    vision: "私たちのビジョン",
    visionDescription: "AI搭載のカスタマーサポートのリーディングプラットフォームとなり、世界中の企業がインテリジェントな自動化を通じて卓越した顧客体験を提供できるようにすることです。",
    values: "私たちの価値観",
    valuesDescription: "私たちのすべての行動を導く原則",
    customerCentric: "顧客中心",
    customerCentricDescription: "私たちのすべての決定は、顧客とエンドユーザーにとって最善のものによって導かれます。",
    innovation: "革新",
    innovationDescription: "私たちは最先端の技術と創造的なソリューションを受け入れ、複雑な問題を解決し、AI開発の最前線に立ち続けます。",
    transparency: "透明性",
    transparencyDescription: "私たちはオープンなコミュニケーション、誠実な価格設定、AI技術の仕組みについての明確な説明を信じ、顧客との信頼を構築します。",
    meetFounder: "創業者について",
    meetFounderDescription: "Qurius AIの背後にいるビジョナリー、インテリジェントな技術を通じてカスタマーサポートを革新することに情熱を注いでいます。",
    founderName: "De-Graft",
    founderTitle: "創業者兼開発者、Qurius AI",
    backgroundExperience: "経歴と経験",
    backgroundDescription: "De-Graftはウィリアム・パターソン大学のコンピュータサイエンスの学生で、GPA 4.0を保持し、AI、データマイニング、フルスタック開発の専門知識を持っています。",
    passionsInterests: "情熱と興味",
    passionsDescription: "De-Graftは、AIと機械学習を活用して現実世界の問題を解決することに情熱を注いでいます。",
    quriusVision: "Qurius AIのビジョン",
    quriusVisionDescription: "Qurius AIは、顧客向けアプリケーションの構築経験と、中小企業がサポートで直面する課題の理解から生まれました。",
    skillAI: "AI/ML",
    skillFullStack: "フルスタック開発",
    skillReact: "React/TypeScript",
    skillSaaS: "SaaSアーキテクチャ",
    skillDataScience: "データサイエンス",
    ourTeam: "私たちのチーム",
    ourTeamDescription: "私たちは、カスタマーサポートの未来を構築することに専念するAI研究者、エンジニア、カスタマーサクセスの専門家の情熱的なチームです。",
    growingTeam: "成長するチーム",
    growingTeamDescription: "私たちの多様なチームは、機械学習、自然言語処理、ソフトウェアエンジニアリング、顧客体験設計の専門知識を集めています。",
    joinTeam: "チームに参加",
    experienceAI: "私たちのAIを体験",
    experienceAIDescription: "私たちについて知りたいですか？このページでAIアシスタントを試してみてください！",
    tryItNow: "今すぐ試す",
    tryItNowDescription: "このチャットボットは、お客様に提供しているのと同じAI技術を使用しています。",
    readyToStart: "始める準備はできましたか？",
    readyToStartDescription: "Qurius AIを信頼して卓越した顧客体験を提供している何千もの企業に参加してください。",
    getStartedFree: "無料で始める",
    contactUs: "お問い合わせ"
  },
  navigation: {
    home: "ホーム",
    demo: "デモ",
    admin: "管理",
    login: "ログイン",
    logout: "ログアウト"
  },
  plans: {
    free: "無料",
    starter: "スターター",
    pro: "プロ",
    perMonth: "月額",
    unlimitedMessages: "無制限メッセージ",
    whiteLabelOptions: "ホワイトラベルオプション",
    phoneSupport: "24/7電話サポート",
    advancedAnalytics: "高度な分析",
    apiAccess: "APIアクセス",
    customIntegrations: "カスタム統合",
    basicCustomization: "基本的なカスタマイズ",
    emailSupport: "メールサポート",
    standardFaqTemplates: "標準FAQテンプレート",
    prioritySupport: "優先サポート",
    analyticsDashboard: "分析ダッシュボード",
    customFaqImport: "カスタムFAQインポート",
    // New Pro features
    multiLanguageSupport: "🌍 多言語サポート（10+言語）",
    autoLanguageDetection: "🌐 自動言語検出",
    translatedFaqTemplates: "📝 翻訳済みFAQテンプレート",
    languageSpecificCustomization: "🎨 言語固有のカスタマイズ",
    multiLanguageAnalytics: "📊 多言語分析",
    customLanguageSupport: "🔧 カスタム言語サポート",
    customWebCrawling: "🕸️ カスタムWebクローリング"
  },
  chat: {
    welcome: "今日はどのようにお手伝いできますか？",
    welcomeWithCompany: "こんにちは！私はあなたの{companyName}アシスタントです。今日はどのようにお手伝いできますか？",
    typeMessage: "メッセージを入力...",
    send: "送信",
    minimize: "最小化",
    expand: "展開",
    typing: "入力中...",
    online: "オンライン",
    offline: "オフライン"
  },
  onboarding: {
    welcome: "Qurius AIへようこそ",
    companyInfo: "会社情報",
    customization: "ウィジェットカスタマイズ",
    payment: "支払い設定",
    integration: "統合",
    complete: "セットアップ完了",
    companyName: "会社名",
    industry: "業界",
    website: "ウェブサイトURL",
    email: "連絡先メール",
    location: "場所",
    description: "説明",
    chooseTheme: "テーマを選択",
    primaryColor: "プライマリカラー",
    backgroundColor: "背景色",
    textColor: "テキスト色",
    preview: "プレビュー",
    choosePlan: "請求プランを選択",
    integrationCode: "統合コード",
    instructions: "手順",
    testWidget: "ウィジェットをテスト",
    completeSetup: "セットアップ完了"
  },
  landing: {
    heroTitle: "AIチャットサポートでウェブサイトを変革",
    heroSubtitle: "高度なAIチャットウィジェットで即座でインテリジェントなカスタマーサポートを提供。",
    viewDemo: "デモを見る",
    featuresTitle: "Qurius AIを選ぶ理由",
    featuresSubtitle: "カスタマーサポート体験を向上させるために設計された強力な機能",
    feature1Title: "超高速",
    feature1Description: "AIチャットシステムで即座のレスポンスを取得。",
    feature2Title: "安全で信頼性",
    feature2Description: "データ暗号化とプライバシー保護によるエンタープライズレベルのセキュリティ。",
    feature3Title: "多言語サポート",
    feature3Description: "自動言語検出で世界中の顧客をサポート。",
    pricingTitle: "シンプルで透明な価格設定",
    pricingSubtitle: "ビジネスニーズに合ったプランを選択",
    contactSales: "営業に連絡",
    ctaTitle: "始める準備はできましたか？",
    ctaSubtitle: "すでにQurius AIを使用してカスタマーサポートを改善している何千もの企業に参加。",
    startFreeTrial: "無料トライアルを開始",
    emailPlaceholder: "メールアドレスを入力",
    getUpdates: "アップデートを取得",
    footerDescription: "インテリジェントなAIチャットサポートでウェブサイトを変革。",
    footerProduct: "製品",
    footerCompany: "会社",
    footerSupport: "サポート",
    features: "機能",
    pricing: "価格",
    installation: "インストール",
    about: "会社概要",
    blog: "ブログ",
    careers: "採用",
    helpCenter: "ヘルプセンター",
    contact: "お問い合わせ",
    status: "ステータス",
    allRightsReserved: "全著作権所有。"
  },
  demo: {
    title: "デモ",
    companyWebsiteTitle: "会社ウェブサイト",
    companyWebsiteDescription: "会社ウェブサイトの説明 (PurpleSoft Inc)",
    keyFeaturesTitle: "主要機能",
    feature1: "機能1",
    feature2: "機能2",
    feature3: "機能3",
    feature4: "機能4",
    feature5: "機能5",
    feature6: "機能6",
    tryChatTitle: "チャットウィジェットを試す",
    tryChatDescription: "チャットウィジェットを試すための説明",
    learnMoreButton: "もっと知る",
    getStartedButton: "はじめる",
    viewAdminButton: "管理者を見る"
  }
}, BE = {
  common: {
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
    cancel: "Cancelar",
    save: "Salvar",
    delete: "Excluir",
    edit: "Editar",
    view: "Ver",
    close: "Fechar",
    next: "Próximo",
    previous: "Anterior",
    submit: "Enviar",
    copy: "Copiar",
    copied: "Copiado!",
    getStarted: "Comenzar",
    step: "Paso"
  },
  contact: {
    title: "Contato",
    subtitle: "Fale conosco",
    sendMessage: "Enviar mensagem",
    fullName: "Nome completo",
    emailAddress: "Endereço de e-mail",
    company: "Empresa",
    subject: "Assunto",
    message: "Mensagem",
    namePlaceholder: "Nome completo",
    emailPlaceholder: "Endereço de e-mail",
    companyPlaceholder: "Empresa",
    messagePlaceholder: "Mensagem",
    selectSubject: "Selecione o assunto",
    salesInquiry: "Inquérito de vendas",
    technicalSupport: "Suporte técnico",
    partnership: "Parceiros",
    careers: "Carreiras",
    other: "Outro",
    sending: "Enviando...",
    getInTouch: "Fale conosco",
    emailUs: "Email-nos",
    callUs: "Ligue-nos",
    visitUs: "Visite-nos",
    emailDescription: "Nos envie um e-mail",
    callDescription: "Ligue-nos",
    address: "Endereço",
    responseTimes: "Tempos de resposta",
    salesInquiries: "Inquéritos de vendas",
    within2Hours: "Dentro de 2 horas",
    within4Hours: "Dentro de 4 horas",
    generalQuestions: "Perguntas gerais",
    within24Hours: "Dentro de 24 horas",
    partnershipRequests: "Solicitações de parceria",
    within48Hours: "Dentro de 48 horas",
    successMessage: "Mensagem enviada com sucesso!",
    tryAI: "Experimente a IA",
    tryAIDescription: "Experimente a IA agora mesmo!",
    experienceAI: "Experiência IA",
    experienceAIDescription: "Experimente a IA agora mesmo!",
    readyToStart: "Pronto para começar?",
    readyToStartDescription: "Junte-se a milhares de empresas que já usam Qurius AI.",
    startFreeTrial: "Comece grátis",
    viewDemo: "Ver demo"
  },
  about: {
    title: "Sobre",
    subtitle: "Sobre a Qurius AI",
    mission: "Missão",
    missionDescription1: "Missão 1",
    missionDescription2: "Missão 2",
    vision: "Visão",
    visionDescription: "Visão 1",
    values: "Valores",
    valuesDescription: "Valores 1",
    customerCentric: "Centrado no cliente",
    customerCentricDescription: "Centrado no cliente 1",
    innovation: "Inovação",
    innovationDescription: "Inovação 1",
    transparency: "Transparência",
    transparencyDescription: "Transparência 1",
    meetFounder: "Conheça o fundador",
    meetFounderDescription: "Conheça o fundador 1",
    founderName: "Nome do fundador",
    founderTitle: "Título do fundador",
    backgroundExperience: "Experiência de fundo",
    backgroundDescription: "Experiência de fundo 1",
    passionsInterests: "Passions and Interests",
    passionsDescription: "Passions and Interests 1",
    quriusVision: "Qurius Vision",
    quriusVisionDescription: "Qurius Vision 1",
    skillAI: "Habilidades IA",
    skillFullStack: "Habilidades Full Stack",
    skillReact: "Habilidades React",
    skillSaaS: "Habilidades SaaS",
    skillDataScience: "Habilidades Data Science",
    ourTeam: "Nosso time",
    ourTeamDescription: "Nosso time 1",
    growingTeam: "Crescendo",
    growingTeamDescription: "Crescendo 1",
    joinTeam: "Junte-se a nós",
    experienceAI: "Experiência IA",
    experienceAIDescription: "Experiência IA 1",
    tryItNow: "Experimente agora",
    tryItNowDescription: "Experimente agora 1",
    readyToStart: "Pronto para começar?",
    readyToStartDescription: "Pronto para começar 1",
    getStartedFree: "Comece grátis",
    contactUs: "Contate-nos"
  },
  navigation: {
    home: "Início",
    demo: "Demo",
    admin: "Admin",
    login: "Entrar",
    logout: "Sair"
  },
  plans: {
    free: "Gratuito",
    starter: "Iniciante",
    pro: "Pro",
    perMonth: "por mês",
    unlimitedMessages: "Mensagens ilimitadas",
    whiteLabelOptions: "Opções de marca branca",
    phoneSupport: "Suporte telefônico 24/7",
    advancedAnalytics: "Análises avançadas",
    apiAccess: "Acesso à API",
    customIntegrations: "Integrações personalizadas",
    basicCustomization: "Personalização básica",
    emailSupport: "Suporte por email",
    standardFaqTemplates: "Modelos FAQ padrão",
    prioritySupport: "Suporte prioritário",
    analyticsDashboard: "Painel de análises",
    customFaqImport: "Importação FAQ personalizada",
    // New Pro features
    multiLanguageSupport: "🌍 Suporte multilíngue (10+ idiomas)",
    autoLanguageDetection: "🌐 Detecção automática de idioma",
    translatedFaqTemplates: "📝 Modelos FAQ traduzidos",
    languageSpecificCustomization: "🎨 Personalização específica por idioma",
    multiLanguageAnalytics: "📊 Análises multilíngues",
    customLanguageSupport: "🔧 Suporte de idioma personalizado",
    customWebCrawling: "🕸️ Web crawling personalizado"
  },
  chat: {
    welcome: "Olá! Como posso ajudá-lo hoje?",
    welcomeWithCompany: "Olá! Sou seu assistente {companyName}. Como posso ajudá-lo hoje?",
    typeMessage: "Digite sua mensagem...",
    send: "Enviar",
    minimize: "Minimizar",
    expand: "Expandir",
    typing: "Digitando...",
    online: "Online",
    offline: "Offline"
  },
  onboarding: {
    welcome: "Bem-vindo ao Qurius AI",
    companyInfo: "Informações da empresa",
    customization: "Personalização do widget",
    payment: "Configuração de pagamento",
    integration: "Integração",
    complete: "Configuração completa",
    companyName: "Nome da empresa",
    industry: "Indústria",
    website: "URL do site",
    email: "Email de contato",
    location: "Localização",
    description: "Descrição",
    chooseTheme: "Escolher tema",
    primaryColor: "Cor primária",
    backgroundColor: "Cor de fundo",
    textColor: "Cor do texto",
    preview: "Visualizar",
    choosePlan: "Escolher plano de cobrança",
    integrationCode: "Código de integração",
    instructions: "Instruções",
    testWidget: "Testar widget",
    completeSetup: "Completar configuração"
  },
  landing: {
    heroTitle: "Transforme seu site com suporte de chat com IA",
    heroSubtitle: "Forneça suporte ao cliente instantâneo e inteligente com nosso widget de chat com IA avançado.",
    viewDemo: "Ver Demo",
    featuresTitle: "Por que escolher Qurius AI?",
    featuresSubtitle: "Recursos poderosos projetados para melhorar sua experiência de suporte ao cliente",
    feature1Title: "Super Rápido",
    feature1Description: "Obtenha respostas instantâneas com nosso sistema de chat com IA.",
    feature2Title: "Seguro e Confiável",
    feature2Description: "Segurança de nível empresarial com criptografia de dados e proteção de privacidade.",
    feature3Title: "Suporte Multilíngue",
    feature3Description: "Suporte clientes em todo o mundo com detecção automática de idioma.",
    pricingTitle: "Preços Simples e Transparentes",
    pricingSubtitle: "Escolha o plano que se adapta às necessidades do seu negócio",
    contactSales: "Contatar Vendas",
    ctaTitle: "Pronto para começar?",
    ctaSubtitle: "Junte-se a milhares de empresas que já usam Qurius AI.",
    startFreeTrial: "Iniciar Teste Gratuito",
    emailPlaceholder: "Digite seu email",
    getUpdates: "Obter Atualizações",
    footerDescription: "Transforme seu site com suporte de chat inteligente com IA.",
    footerProduct: "Produto",
    footerCompany: "Empresa",
    footerSupport: "Suporte",
    features: "Recursos",
    pricing: "Preços",
    installation: "Instalação",
    about: "Sobre",
    blog: "Blog",
    careers: "Carreiras",
    helpCenter: "Central de Ajuda",
    contact: "Contato",
    status: "Status",
    allRightsReserved: "Todos os direitos reservados."
  },
  demo: {
    title: "Demo",
    companyWebsiteTitle: "Site da Empresa",
    companyWebsiteDescription: "Descrição para o site da empresa (PurpleSoft Inc)",
    keyFeaturesTitle: "Recursos Principais",
    feature1: "Recursos 1",
    feature2: "Recursos 2",
    feature3: "Recursos 3",
    feature4: "Recursos 4",
    feature5: "Recursos 5",
    feature6: "Recursos 6",
    tryChatTitle: "Experimentar Widget de Chat",
    tryChatDescription: "Descrição para experimentar o widget de chat",
    learnMoreButton: "Saber Mais",
    getStartedButton: "Começar",
    viewAdminButton: "Ver Administrador"
  }
}, HE = {
  common: {
    loading: "Caricamento...",
    error: "Errore",
    success: "Successo",
    cancel: "Annulla",
    save: "Salva",
    delete: "Elimina",
    edit: "Modifica",
    view: "Visualizza",
    close: "Chiudi",
    next: "Avanti",
    previous: "Indietro",
    submit: "Invia",
    copy: "Copia",
    copied: "Copiato!",
    getStarted: "Inizia",
    step: "Passo"
  },
  contact: {
    title: "Contattaci",
    subtitle: "Hai domande? Contattaci e saremo felici di aiutarti.",
    sendMessage: "Invia messaggio",
    fullName: "Nome e cognome",
    emailAddress: "Email",
    company: "Azienda",
    subject: "Oggetto",
    message: "Messaggio",
    namePlaceholder: "Inserisci il tuo nome",
    emailPlaceholder: "Inserisci la tua email",
    companyPlaceholder: "Inserisci il nome della tua azienda",
    messagePlaceholder: "Inserisci il tuo messaggio",
    selectSubject: "Seleziona oggetto",
    salesInquiry: "Inquiry vendite",
    technicalSupport: "Supporto tecnico",
    partnership: "Partnership",
    careers: "Carriere",
    other: "Altro",
    sending: "Invio messaggio...",
    getInTouch: "Contattaci",
    emailUs: "Email",
    callUs: "Chiamaci",
    visitUs: "Visita il nostro sito",
    emailDescription: "Invia un'email a support@qurius.ai",
    callDescription: "Chiamaci al +1 (202) 555-0123",
    address: "123 Main St, Anytown, USA",
    responseTimes: "Tempi di risposta",
    salesInquiries: "Inquiry vendite",
    within2Hours: "Entro 2 ore",
    within4Hours: "Entro 4 ore",
    generalQuestions: "Domande generali",
    within24Hours: "Entro 24 ore",
    partnershipRequests: "Richieste di partnership",
    within48Hours: "Entro 48 ore",
    successMessage: "Messaggio inviato con successo!",
    tryAI: "Prova l'IA",
    tryAIDescription: "Prova l'IA e scopri come può aiutarti.",
    experienceAI: "Esperienza AI",
    experienceAIDescription: "Prova l'IA e scopri come può aiutarti.",
    readyToStart: "Pronto per iniziare?",
    readyToStartDescription: "Unisciti a migliaia di aziende che hanno già migliorato il supporto al cliente con Qurius AI.",
    startFreeTrial: "Inizia gratuitamente",
    viewDemo: "Vedi demo"
  },
  about: {
    title: "Chi siamo",
    subtitle: "Scopri Qurius AI, la nostra missione e la nostra visione",
    mission: "La nostra missione",
    missionDescription1: "In Qurius AI, crediamo che ogni interazione con i clienti dovrebbe essere significativa, efficiente e soddisfacente.",
    missionDescription2: "Rendiamo la tecnologia AI avanzata accessibile a tutte le aziende, aiutandole ad espandere il supporto clienti mantenendo l'umanità che i clienti apprezzano.",
    vision: "La nostra visione",
    visionDescription: "Essere la piattaforma leader per il supporto clienti alimentato dall'AI, permettendo alle aziende di tutto il mondo di fornire esperienze clienti eccezionali attraverso l'automazione intelligente.",
    values: "I nostri valori",
    valuesDescription: "I principi che guidano tutto ciò che facciamo",
    customerCentric: "Centrato sul cliente",
    customerCentricDescription: "Tutte le nostre decisioni sono guidate da ciò che è meglio per i nostri clienti e utenti finali.",
    innovation: "Innovazione",
    innovationDescription: "Abbracciamo tecnologie all'avanguardia e soluzioni creative per risolvere problemi complessi e rimanere all'avanguardia nello sviluppo dell'AI.",
    transparency: "Trasparenza",
    transparencyDescription: "Crediamo nella comunicazione aperta, prezzi onesti e spiegazioni chiare su come funziona la tecnologia AI per costruire fiducia con i nostri clienti.",
    meetFounder: "Conosci il fondatore",
    meetFounderDescription: "Il visionario dietro Qurius AI, appassionato di rivoluzionare il supporto clienti attraverso tecnologie intelligenti.",
    founderName: "De-Graft",
    founderTitle: "Fondatore e Sviluppatore, Qurius AI",
    backgroundExperience: "Background ed esperienza",
    backgroundDescription: "De-Graft è uno studente di informatica presso la William Paterson University con un GPA di 4.0, specializzato in AI, data mining e sviluppo full-stack.",
    passionsInterests: "Passioni e interessi",
    passionsDescription: "De-Graft è appassionato di utilizzare l'AI e il machine learning per risolvere problemi del mondo reale.",
    quriusVision: "La visione di Qurius AI",
    quriusVisionDescription: "Qurius AI è nata dall'esperienza nella costruzione di applicazioni per clienti e dalla comprensione delle sfide che le piccole e medie imprese affrontano nel supporto.",
    skillAI: "AI/ML",
    skillFullStack: "Sviluppo Full-Stack",
    skillReact: "React/TypeScript",
    skillSaaS: "Architettura SaaS",
    skillDataScience: "Data Science",
    ourTeam: "Il nostro team",
    ourTeamDescription: "Siamo un team appassionato di ricercatori AI, ingegneri e professionisti del customer success dedicati a costruire il futuro del supporto clienti.",
    growingTeam: "Team in crescita",
    growingTeamDescription: "Il nostro team diversificato riunisce competenze in machine learning, elaborazione del linguaggio naturale, ingegneria del software e design dell'esperienza utente.",
    joinTeam: "Unisciti al team",
    experienceAI: "Sperimenta la nostra AI",
    experienceAIDescription: "Vuoi saperne di più su di noi? Prova l'assistente AI su questa pagina!",
    tryItNow: "Prova ora",
    tryItNowDescription: "Questo chatbot utilizza la stessa tecnologia AI che forniamo ai nostri clienti.",
    readyToStart: "Pronto per iniziare?",
    readyToStartDescription: "Unisciti a migliaia di aziende che si fidano di Qurius AI per fornire esperienze clienti eccezionali.",
    getStartedFree: "Inizia gratuitamente",
    contactUs: "Contattaci"
  },
  navigation: {
    home: "Home",
    demo: "Demo",
    admin: "Admin",
    login: "Accedi",
    logout: "Esci"
  },
  plans: {
    free: "Gratuito",
    starter: "Base",
    pro: "Pro",
    perMonth: "al mese",
    unlimitedMessages: "Messaggi illimitati",
    whiteLabelOptions: "Opzioni white-label",
    phoneSupport: "Supporto telefonico 24/7",
    advancedAnalytics: "Analisi avanzate",
    apiAccess: "Accesso API",
    customIntegrations: "Integrazioni personalizzate",
    basicCustomization: "Personalizzazione di base",
    emailSupport: "Supporto email",
    standardFaqTemplates: "Modelli FAQ standard",
    prioritySupport: "Supporto prioritario",
    analyticsDashboard: "Dashboard analitico",
    customFaqImport: "Import FAQ personalizzato",
    // New Pro features
    multiLanguageSupport: "🌍 Supporto multilingue (10+ lingue)",
    autoLanguageDetection: "🌐 Rilevamento automatico della lingua",
    translatedFaqTemplates: "📝 Modelli FAQ tradotti",
    languageSpecificCustomization: "🎨 Personalizzazione specifica per lingua",
    multiLanguageAnalytics: "📊 Analisi multilingue",
    customLanguageSupport: "🔧 Supporto lingua personalizzato",
    customWebCrawling: "🕸️ Web crawling personalizzato"
  },
  chat: {
    welcome: "Ciao! Come posso aiutarti oggi?",
    welcomeWithCompany: "Ciao! Sono il tuo assistente {companyName}. Come posso aiutarti oggi?",
    typeMessage: "Scrivi il tuo messaggio...",
    send: "Invia",
    minimize: "Riduci",
    expand: "Espandi",
    typing: "Sta scrivendo...",
    online: "Online",
    offline: "Offline"
  },
  onboarding: {
    welcome: "Benvenuto su Qurius AI",
    companyInfo: "Informazioni aziendali",
    customization: "Personalizzazione widget",
    payment: "Configurazione pagamento",
    integration: "Integrazione",
    complete: "Configurazione completa",
    companyName: "Nome azienda",
    industry: "Settore",
    website: "URL sito web",
    email: "Email di contatto",
    location: "Posizione",
    description: "Descrizione",
    chooseTheme: "Scegli tema",
    primaryColor: "Colore primario",
    backgroundColor: "Colore di sfondo",
    textColor: "Colore testo",
    preview: "Anteprima",
    choosePlan: "Scegli piano di fatturazione",
    integrationCode: "Codice integrazione",
    instructions: "Istruzioni",
    testWidget: "Testa widget",
    completeSetup: "Completa configurazione"
  },
  landing: {
    heroTitle: "Transforma tu sitio web con soporte de chat con IA",
    heroSubtitle: "Proporciona soporte al cliente instantáneo e inteligente con nuestro widget de chat con IA avanzado. Mejora el compromiso y la satisfacción con asistencia automatizada 24/7.",
    viewDemo: "Ver Demo",
    featuresTitle: "¿Por qué elegir Qurius AI?",
    featuresSubtitle: "Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente",
    feature1Title: "Súper Rápido",
    feature1Description: "Obtén respuestas instantáneas con nuestro sistema de chat con IA que entiende y responde a las consultas de los clientes en tiempo real.",
    feature2Title: "Seguro y Confiable",
    feature2Description: "Seguridad de nivel empresarial con encriptación de datos y protección de privacidad. Los datos de tus clientes siempre están seguros con nosotros.",
    feature3Title: "Soporte Multiidioma",
    feature3Description: "Soporta clientes de todo el mundo con detección automática de idioma y capacidades de traducción.",
    pricingTitle: "Precios Simples y Transparentes",
    pricingSubtitle: "Elige el plan que se adapte a las necesidades de tu negocio",
    contactSales: "Contactar Ventas",
    ctaTitle: "¿Listo para comenzar?",
    ctaSubtitle: "Únete a miles de empresas que ya usan Qurius AI para mejorar su soporte al cliente.",
    startFreeTrial: "Comenzar Prueba Gratuita",
    emailPlaceholder: "Ingresa tu email",
    getUpdates: "Obtener Actualizaciones",
    footerDescription: "Transforma tu sitio web con soporte de chat inteligente con IA.",
    footerProduct: "Producto",
    footerCompany: "Empresa",
    footerSupport: "Soporte",
    features: "Características",
    pricing: "Precios",
    installation: "Instalación",
    about: "Acerca de",
    blog: "Blog",
    careers: "Carreras",
    helpCenter: "Centro de Ayuda",
    contact: "Contacto",
    status: "Estado",
    allRightsReserved: "Todos los derechos reservados."
  },
  demo: {
    title: "Demo",
    companyWebsiteTitle: "Sito web dell'azienda",
    companyWebsiteDescription: "Descrizione per il sito web dell'azienda (PurpleSoft Inc)",
    keyFeaturesTitle: "Funzionalità principali",
    feature1: "Funzionalità 1",
    feature2: "Funzionalità 2",
    feature3: "Funzionalità 3",
    feature4: "Funzionalità 4",
    feature5: "Funzionalità 5",
    feature6: "Funzionalità 6",
    tryChatTitle: "Prova il widget di chat",
    tryChatDescription: "Descrizione per provare il widget di chat",
    learnMoreButton: "Scopri di più",
    getStartedButton: "Inizia",
    viewAdminButton: "Vedi amministratore"
  }
}, VE = {
  common: {
    loading: "Загрузка...",
    error: "Ошибка",
    success: "Успех",
    cancel: "Отмена",
    save: "Сохранить",
    delete: "Удалить",
    edit: "Редактировать",
    view: "Просмотр",
    close: "Закрыть",
    next: "Далее",
    previous: "Назад",
    submit: "Отправить",
    copy: "Копировать",
    copied: "Скопировано!",
    getStarted: "Начать",
    step: "Шаг"
  },
  contact: {
    title: "Свяжитесь с нами",
    subtitle: "Мы здесь, чтобы помочь вам!",
    sendMessage: "Отправить сообщение",
    fullName: "Имя",
    emailAddress: "Email",
    company: "Компания",
    subject: "Тема",
    message: "Сообщение",
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "Ваш email",
    companyPlaceholder: "Ваша компания",
    messagePlaceholder: "Ваше сообщение",
    selectSubject: "Выберите тему",
    salesInquiry: "Вопрос о продажах",
    technicalSupport: "Техническая поддержка",
    partnership: "Партнерство",
    careers: "Карьера",
    other: "Другое",
    sending: "Отправка...",
    getInTouch: "Свяжитесь с нами",
    emailUs: "Напишите нам",
    callUs: "Позвоните нам",
    visitUs: "Посетите нас",
    emailDescription: "Напишите нам по электронной почте",
    callDescription: "Позвоните нам по телефону",
    address: "Адрес",
    responseTimes: "Время ответа",
    salesInquiries: "Вопросы о продажах",
    within2Hours: "В течение 2 часов",
    within4Hours: "В течение 4 часов",
    generalQuestions: "Общие вопросы",
    within24Hours: "В течение 24 часов",
    partnershipRequests: "Партнерские запросы",
    within48Hours: "В течение 48 часов",
    successMessage: "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.",
    tryAI: "Попробуйте AI",
    tryAIDescription: "Попробуйте нашу AI-поддержку прямо сейчас!",
    experienceAI: "Опыт AI",
    experienceAIDescription: "Наша команда предоставляет передовой виджет чата с AI, который обеспечивает интеллектуальную поддержку клиентов для компаний.",
    readyToStart: "Готовы начать?",
    readyToStartDescription: "Присоединяйтесь к тысячам компаний, которые уже используют Qurius AI для улучшения поддержки клиентов.",
    startFreeTrial: "Начать бесплатно",
    viewDemo: "Посмотреть демо"
  },
  about: {
    title: "О нас",
    subtitle: "Узнайте о Qurius AI, нашей миссии и видении",
    mission: "Наша миссия",
    missionDescription1: "В Qurius AI мы верим, что каждое взаимодействие с клиентами должно быть значимым, эффективным и удовлетворительным.",
    missionDescription2: "Мы делаем передовые технологии ИИ доступными для компаний любого размера, помогая им расширять поддержку клиентов, сохраняя при этом человечность, которую ценят клиенты.",
    vision: "Наше видение",
    visionDescription: "Быть ведущей платформой для поддержки клиентов на базе ИИ, позволяя компаниям по всему миру предоставлять исключительный опыт клиентов через интеллектуальную автоматизацию.",
    values: "Наши ценности",
    valuesDescription: "Принципы, которые направляют все, что мы делаем",
    customerCentric: "Ориентация на клиента",
    customerCentricDescription: "Все наши решения направляются тем, что лучше всего для наших клиентов и конечных пользователей.",
    innovation: "Инновации",
    innovationDescription: "Мы принимаем передовые технологии и творческие решения для решения сложных проблем и остаемся на переднем крае разработки ИИ.",
    transparency: "Прозрачность",
    transparencyDescription: "Мы верим в открытое общение, честное ценообразование и четкие объяснения того, как работает технология ИИ, чтобы строить доверие с нашими клиентами.",
    meetFounder: "Познакомьтесь с основателем",
    meetFounderDescription: "Видение за Qurius AI, страстно увлеченный революционизацией поддержки клиентов через интеллектуальные технологии.",
    founderName: "De-Graft",
    founderTitle: "Основатель и Разработчик, Qurius AI",
    backgroundExperience: "Образование и опыт",
    backgroundDescription: "De-Graft - студент компьютерных наук в Университете Уильяма Патерсона с GPA 4,0, специализирующийся на ИИ, интеллектуальном анализе данных и полнофункциональной разработке.",
    passionsInterests: "Страсти и интересы",
    passionsDescription: "De-Graft страстно увлечен использованием ИИ и машинного обучения для решения реальных проблем мира.",
    quriusVision: "Видение Qurius AI",
    quriusVisionDescription: "Qurius AI родился из опыта создания клиентских приложений и понимания проблем, с которыми сталкиваются малые и средние предприятия в поддержке.",
    skillAI: "ИИ/МО",
    skillFullStack: "Полнофункциональная разработка",
    skillReact: "React/TypeScript",
    skillSaaS: "Архитектура SaaS",
    skillDataScience: "Наука о данных",
    ourTeam: "Наша команда",
    ourTeamDescription: "Мы страстная команда исследователей ИИ, инженеров и специалистов по успеху клиентов, посвященных построению будущего поддержки клиентов.",
    growingTeam: "Растущая команда",
    growingTeamDescription: "Наша разнообразная команда объединяет опыт в машинном обучении, обработке естественного языка, разработке программного обеспечения и дизайне пользовательского опыта.",
    joinTeam: "Присоединяйтесь к команде",
    experienceAI: "Испытайте наш ИИ",
    experienceAIDescription: "Хотите узнать больше о нас? Попробуйте ИИ-ассистента на этой странице!",
    tryItNow: "Попробуйте сейчас",
    tryItNowDescription: "Этот чат-бот использует ту же технологию ИИ, которую мы предоставляем нашим клиентам.",
    readyToStart: "Готовы начать?",
    readyToStartDescription: "Присоединяйтесь к тысячам компаний, которые доверяют Qurius AI для предоставления исключительного опыта клиентов.",
    getStartedFree: "Начать бесплатно",
    contactUs: "Свяжитесь с нами"
  },
  navigation: {
    home: "Главная",
    demo: "Демо",
    admin: "Админ",
    login: "Войти",
    logout: "Выйти"
  },
  plans: {
    free: "Бесплатно",
    starter: "Стартовый",
    pro: "Про",
    perMonth: "в месяц",
    unlimitedMessages: "Неограниченные сообщения",
    whiteLabelOptions: "Опции белой этикетки",
    phoneSupport: "Телефонная поддержка 24/7",
    advancedAnalytics: "Расширенная аналитика",
    apiAccess: "Доступ к API",
    customIntegrations: "Пользовательские интеграции",
    basicCustomization: "Базовая настройка",
    emailSupport: "Поддержка по email",
    standardFaqTemplates: "Стандартные шаблоны FAQ",
    prioritySupport: "Приоритетная поддержка",
    analyticsDashboard: "Панель аналитики",
    customFaqImport: "Пользовательский импорт FAQ",
    // New Pro features
    multiLanguageSupport: "🌍 Многоязычная поддержка (10+ языков)",
    autoLanguageDetection: "🌐 Автоматическое определение языка",
    translatedFaqTemplates: "📝 Переведенные шаблоны FAQ",
    languageSpecificCustomization: "🎨 Языковая настройка",
    multiLanguageAnalytics: "📊 Многоязычная аналитика",
    customLanguageSupport: "🔧 Пользовательская языковая поддержка",
    customWebCrawling: "🕸️ Пользовательский веб-скрапинг"
  },
  chat: {
    welcome: "Привет! Как я могу помочь вам сегодня?",
    welcomeWithCompany: "Привет! Как я могу помочь вам сегодня, {companyName}?",
    typeMessage: "Введите ваше сообщение...",
    send: "Отправить",
    minimize: "Свернуть",
    expand: "Развернуть",
    typing: "Печатает...",
    online: "Онлайн",
    offline: "Офлайн"
  },
  onboarding: {
    welcome: "Добро пожаловать в Qurius AI",
    companyInfo: "Информация о компании",
    customization: "Настройка виджета",
    payment: "Настройка платежа",
    integration: "Интеграция",
    complete: "Завершить настройку",
    companyName: "Название компании",
    industry: "Отрасль",
    website: "URL сайта",
    email: "Контактный email",
    location: "Местоположение",
    description: "Описание",
    chooseTheme: "Выбрать тему",
    primaryColor: "Основной цвет",
    backgroundColor: "Цвет фона",
    textColor: "Цвет текста",
    preview: "Предварительный просмотр",
    choosePlan: "Выбрать план оплаты",
    integrationCode: "Код интеграции",
    instructions: "Инструкции",
    testWidget: "Тестировать виджет",
    completeSetup: "Завершить настройку"
  },
  landing: {
    heroTitle: "Transforma tu sitio web con soporte de chat con IA",
    heroSubtitle: "Proporciona soporte al cliente instantáneo e inteligente con nuestro widget de chat con IA avanzado. Mejora el compromiso y la satisfacción con asistencia automatizada 24/7.",
    viewDemo: "Ver Demo",
    featuresTitle: "¿Por qué elegir Qurius AI?",
    featuresSubtitle: "Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente",
    feature1Title: "Súper Rápido",
    feature1Description: "Obtén respuestas instantáneas con nuestro sistema de chat con IA que entiende y responde a las consultas de los clientes en tiempo real.",
    feature2Title: "Seguro y Confiable",
    feature2Description: "Seguridad de nivel empresarial con encriptación de datos y protección de privacidad. Los datos de tus clientes siempre están seguros con nosotros.",
    feature3Title: "Soporte Multiidioma",
    feature3Description: "Soporta clientes de todo el mundo con detección automática de idioma y capacidades de traducción.",
    pricingTitle: "Precios Simples y Transparentes",
    pricingSubtitle: "Elige el plan que se adapte a las necesidades de tu negocio",
    contactSales: "Contactar Ventas",
    ctaTitle: "¿Listo para comenzar?",
    ctaSubtitle: "Únete a miles de empresas que ya usan Qurius AI para mejorar su soporte al cliente.",
    startFreeTrial: "Comenzar Prueba Gratuita",
    emailPlaceholder: "Ingresa tu email",
    getUpdates: "Obtener Actualizaciones",
    footerDescription: "Transforma tu sitio web con soporte de chat inteligente con IA.",
    footerProduct: "Producto",
    footerCompany: "Empresa",
    footerSupport: "Soporte",
    features: "Características",
    pricing: "Precios",
    installation: "Instalación",
    about: "Acerca de",
    blog: "Blog",
    careers: "Carreras",
    helpCenter: "Centro de Ayuda",
    contact: "Contacto",
    status: "Estado",
    allRightsReserved: "Todos los derechos reservados."
  },
  demo: {
    title: "Demo",
    companyWebsiteTitle: "Сайт компании",
    companyWebsiteDescription: "Описание для сайта компании (PurpleSoft Inc)",
    keyFeaturesTitle: "Ключевые функции",
    feature1: "Функция 1",
    feature2: "Функция 2",
    feature3: "Функция 3",
    feature4: "Функция 4",
    feature5: "Функция 5",
    feature6: "Функция 6",
    tryChatTitle: "Попробуйте виджет чата",
    tryChatDescription: "Описание для проверки виджета чата",
    learnMoreButton: "Узнать больше",
    getStartedButton: "Начать",
    viewAdminButton: "Просмотреть администратора"
  }
}, QE = {
  common: {
    loading: "로딩 중...",
    error: "오류",
    success: "성공",
    cancel: "취소",
    save: "저장",
    delete: "삭제",
    edit: "편집",
    view: "보기",
    close: "닫기",
    next: "다음",
    previous: "이전",
    submit: "제출",
    copy: "복사",
    copied: "복사됨!",
    getStarted: "시작하기",
    step: "단계"
  },
  contact: {
    title: "연락처",
    subtitle: "팀에 연락하세요. AI 기반 고객 지원으로 성공을 도와드립니다.",
    sendMessage: "메시지 보내기",
    fullName: "전체 이름",
    emailAddress: "이메일 주소",
    company: "회사",
    subject: "제목",
    message: "메시지",
    namePlaceholder: "홍길동",
    emailPlaceholder: "hong@company.com",
    companyPlaceholder: "귀하의 회사",
    messagePlaceholder: "어떻게 도움을 드릴 수 있는지 알려주세요...",
    selectSubject: "제목 선택",
    salesInquiry: "영업 문의",
    technicalSupport: "기술 지원",
    partnership: "파트너십",
    careers: "채용",
    other: "기타",
    sending: "전송 중...",
    getInTouch: "연락처",
    emailUs: "이메일 보내기",
    callUs: "전화하기",
    visitUs: "방문하기",
    emailDescription: "일반 문의 및 지원",
    callDescription: "월요일부터 금요일, 오전 9시-오후 6시 EST",
    address: "123 AI Innovation Drive, Tech Valley, CA 94043, United States",
    responseTimes: "응답 시간",
    salesInquiries: "영업 문의",
    within2Hours: "2시간 이내",
    within4Hours: "4시간 이내",
    generalQuestions: "일반 질문",
    within24Hours: "24시간 이내",
    partnershipRequests: "파트너십 요청",
    within48Hours: "48시간 이내",
    successMessage: "메시지를 보내주셔서 감사합니다! 24시간 이내에 답변드리겠습니다.",
    tryAI: "AI 어시스턴트 시도하기",
    tryAIDescription: "질문이 있으신가요? Qurius AI가 어떻게 작동하는지 확인하려면 AI 어시스턴트와 채팅해보세요!",
    experienceAI: "AI의 힘을 경험하세요",
    experienceAIDescription: "이 챗봇은 고객에게 제공하는 것과 동일한 기술을 사용합니다.",
    readyToStart: "시작할 준비가 되셨나요?",
    readyToStartDescription: "Qurius AI를 사용하여 고객 지원을 개선하고 있는 수천 개의 기업에 참여하세요.",
    startFreeTrial: "무료 체험 시작",
    viewDemo: "데모 보기"
  },
  about: {
    title: "Qurius AI 소개",
    subtitle: "최첨단 AI 기술로 지능형 고객 지원을 통해 기업을 지원",
    mission: "우리의 미션",
    missionDescription1: "Qurius AI에서는 모든 고객 상호작용이 의미 있고, 효율적이며, 만족스러워야 한다고 믿습니다.",
    missionDescription2: "우리는 고급 AI 기술을 모든 규모의 기업에 접근 가능하게 하여 고객이 소중히 여기는 인간성을 유지하면서 고객 지원을 확장하도록 돕습니다.",
    vision: "우리의 비전",
    visionDescription: "AI 기반 고객 지원의 선도적인 플랫폼이 되어 전 세계 기업이 지능형 자동화를 통해 탁월한 고객 경험을 제공할 수 있도록 하는 것입니다.",
    values: "우리의 가치",
    valuesDescription: "우리가 하는 모든 일을 이끄는 원칙들",
    customerCentric: "고객 중심",
    customerCentricDescription: "모든 결정은 고객과 최종 사용자에게 최선인 것에 의해 이끌어집니다.",
    innovation: "혁신",
    innovationDescription: "우리는 최첨단 기술과 창의적인 솔루션을 받아들여 복잡한 문제를 해결하고 AI 개발의 최전선에 머물러 있습니다.",
    transparency: "투명성",
    transparencyDescription: "우리는 개방적인 커뮤니케이션, 정직한 가격 책정, AI 기술이 어떻게 작동하는지에 대한 명확한 설명을 믿어 고객과의 신뢰를 구축합니다.",
    meetFounder: "창립자 소개",
    meetFounderDescription: "Qurius AI 뒤에 있는 비전가, 지능형 기술을 통해 고객 지원을 혁신하는 데 열정을 가진 사람입니다.",
    founderName: "De-Graft",
    founderTitle: "창립자 및 개발자, Qurius AI",
    backgroundExperience: "배경 및 경험",
    backgroundDescription: "De-Graft는 William Paterson University의 컴퓨터 과학 학생으로 GPA 4.0 을 유지하며 AI, 데이터 마이닝, 풀스택 개발 전문 지식을 보유하고 있습니다.",
    passionsInterests: "열정과 관심사",
    passionsDescription: "De-Graft는 AI와 머신러닝을 활용하여 실제 문제를 해결하는 데 열정을 가지고 있습니다.",
    quriusVision: "Qurius AI의 비전",
    quriusVisionDescription: "Qurius AI는 고객 애플리케이션 구축 경험과 중소기업이 지원에서 직면하는 과제에 대한 이해에서 탄생했습니다.",
    skillAI: "AI/ML",
    skillFullStack: "풀스택 개발",
    skillReact: "React/TypeScript",
    skillSaaS: "SaaS 아키텍처",
    skillDataScience: "데이터 사이언스",
    ourTeam: "우리 팀",
    ourTeamDescription: "우리는 고객 지원의 미래를 구축하는 데 전념하는 AI 연구원, 엔지니어, 고객 성공 전문가의 열정적인 팀입니다.",
    growingTeam: "성장하는 팀",
    growingTeamDescription: "우리의 다양한 팀은 머신러닝, 자연어 처리, 소프트웨어 엔지니어링, 사용자 경험 설계 전문 지식을 모읍니다.",
    joinTeam: "팀에 참여",
    experienceAI: "우리의 AI를 경험하세요",
    experienceAIDescription: "우리에 대해 더 알고 싶으신가요? 이 페이지에서 AI 어시스턴트를 시도해보세요!",
    tryItNow: "지금 시도하기",
    tryItNowDescription: "이 챗봇은 고객에게 제공하는 것과 동일한 AI 기술을 사용합니다.",
    readyToStart: "시작할 준비가 되셨나요?",
    readyToStartDescription: "Qurius AI를 신뢰하여 탁월한 고객 경험을 제공하고 있는 수천 개의 기업에 참여하세요.",
    getStartedFree: "무료로 시작하기",
    contactUs: "연락처"
  },
  navigation: {
    home: "홈",
    demo: "데모",
    admin: "관리",
    login: "로그인",
    logout: "로그아웃"
  },
  plans: {
    free: "무료",
    starter: "스타터",
    pro: "프로",
    perMonth: "월",
    unlimitedMessages: "무제한 메시지",
    whiteLabelOptions: "화이트 라벨 옵션",
    phoneSupport: "24/7 전화 지원",
    advancedAnalytics: "고급 분석",
    apiAccess: "API 액세스",
    customIntegrations: "사용자 정의 통합",
    basicCustomization: "기본 맞춤 설정",
    emailSupport: "이메일 지원",
    standardFaqTemplates: "표준 FAQ 템플릿",
    prioritySupport: "우선 지원",
    analyticsDashboard: "분석 대시보드",
    customFaqImport: "사용자 정의 FAQ 가져오기",
    // New Pro features
    multiLanguageSupport: "🌍 다국어 지원 (10+ 언어)",
    autoLanguageDetection: "🌐 자동 언어 감지",
    translatedFaqTemplates: "📝 번역된 FAQ 템플릿",
    languageSpecificCustomization: "🎨 언어별 맞춤 설정",
    multiLanguageAnalytics: "📊 다국어 분석",
    customLanguageSupport: "🔧 사용자 정의 언어 지원",
    customWebCrawling: "🕸️ 사용자 정의 웹 크롤링"
  },
  chat: {
    welcome: "안녕하세요! 오늘 어떻게 도와드릴까요?",
    welcomeWithCompany: "안녕하세요! 오늘 어떻게 도와드릴까요, {companyName}?",
    typeMessage: "메시지를 입력하세요...",
    send: "보내기",
    minimize: "최소화",
    expand: "확장",
    typing: "입력 중...",
    online: "온라인",
    offline: "오프라인"
  },
  onboarding: {
    welcome: "Qurius AI에 오신 것을 환영합니다",
    companyInfo: "회사 정보",
    customization: "위젯 맞춤 설정",
    payment: "결제 설정",
    integration: "통합",
    complete: "설정 완료",
    companyName: "회사명",
    industry: "산업",
    website: "웹사이트 URL",
    email: "연락처 이메일",
    location: "위치",
    description: "설명",
    chooseTheme: "테마 선택",
    primaryColor: "주요 색상",
    backgroundColor: "배경 색상",
    textColor: "텍스트 색상",
    preview: "미리보기",
    choosePlan: "청구 플랜 선택",
    integrationCode: "통합 코드",
    instructions: "지침",
    testWidget: "위젯 테스트",
    completeSetup: "설정 완료"
  },
  landing: {
    heroTitle: "Transforma tu sitio web con soporte de chat con IA",
    heroSubtitle: "Proporciona soporte al cliente instantáneo e inteligente con nuestro widget de chat con IA avanzado. Mejora el compromiso y la satisfacción con asistencia automatizada 24/7.",
    viewDemo: "Ver Demo",
    featuresTitle: "¿Por qué elegir Qurius AI?",
    featuresSubtitle: "Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente",
    feature1Title: "Súper Rápido",
    feature1Description: "Obtén respuestas instantáneas con nuestro sistema de chat con IA que entiende y responde a las consultas de los clientes en tiempo real.",
    feature2Title: "Seguro y Confiable",
    feature2Description: "Seguridad de nivel empresarial con encriptación de datos y protección de privacidad. Los datos de tus clientes siempre están seguros con nosotros.",
    feature3Title: "Soporte Multiidioma",
    feature3Description: "Soporta clientes de todo el mundo con detección automática de idioma y capacidades de traducción.",
    pricingTitle: "Precios Simples y Transparentes",
    pricingSubtitle: "Elige el plan que se adapte a las necesidades de tu negocio",
    contactSales: "Contactar Ventas",
    ctaTitle: "¿Listo para comenzar?",
    ctaSubtitle: "Únete a miles de empresas que ya usan Qurius AI para mejorar su soporte al cliente.",
    startFreeTrial: "Comenzar Prueba Gratuita",
    emailPlaceholder: "Ingresa tu email",
    getUpdates: "Obtener Actualizaciones",
    footerDescription: "Transforma tu sitio web con soporte de chat inteligente con IA.",
    footerProduct: "Producto",
    footerCompany: "Empresa",
    footerSupport: "Soporte",
    features: "Características",
    pricing: "Precios",
    installation: "Instalación",
    about: "Acerca de",
    blog: "Blog",
    careers: "Carreras",
    helpCenter: "Centro de Ayuda",
    contact: "Contacto",
    status: "Estado",
    allRightsReserved: "Todos los derechos reservados."
  },
  demo: {
    title: "Demo",
    companyWebsiteTitle: "Sitio web de la empresa",
    companyWebsiteDescription: "Descripción para el sitio web de la empresa (PurpleSoft Inc)",
    keyFeaturesTitle: "Características clave",
    feature1: "Característica 1",
    feature2: "Característica 2",
    feature3: "Característica 3",
    feature4: "Característica 4",
    feature5: "Característica 5",
    feature6: "Característica 6",
    tryChatTitle: "Prueba el widget de chat",
    tryChatDescription: "Descripción para probar el widget de chat",
    learnMoreButton: "Aprender más",
    getStartedButton: "Comenzar",
    viewAdminButton: "Ver Administrador"
  }
}, dg = {
  en: _E,
  es: IE,
  fr: UE,
  de: LE,
  zh: qE,
  ja: jE,
  pt: BE,
  it: HE,
  ru: VE,
  ko: QE
};
function FE(n, i) {
  const l = i.split(".");
  let o = dg[n];
  for (const u of l)
    if (o && typeof o == "object" && u in o)
      o = o[u];
    else {
      o = dg.en;
      for (const c of l)
        if (o && typeof o == "object" && c in o)
          o = o[c];
        else
          return i;
    }
  return typeof o == "string" ? o : i;
}
function PE(n, i) {
  return n.replace(/\{(\w+)\}/g, (l, o) => i[o] ?? "");
}
const Hy = de.createContext(void 0), jc = {
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
}, vc = {
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
}, GE = () => {
  const n = navigator.language.toLowerCase();
  return n.startsWith("es") ? "es" : n.startsWith("fr") ? "fr" : n.startsWith("de") ? "de" : n.startsWith("zh") ? "zh" : n.startsWith("ja") ? "ja" : n.startsWith("pt") ? "pt" : n.startsWith("it") ? "it" : n.startsWith("ru") ? "ru" : n.startsWith("ko") ? "ko" : "en";
};
function YE({ children: n }) {
  const [i, l] = de.useState(GE), [o, u] = de.useState(!1);
  de.useEffect(() => {
    const g = localStorage.getItem("qurius_language");
    g && Object.keys(jc).includes(g) && l(g);
  }, []);
  const c = de.useCallback((g) => {
    u(!0), l(g), localStorage.setItem("qurius_language", g), setTimeout(() => {
      u(!1);
    }, 300);
  }, []), d = de.useCallback((g) => FE(i, g), [i]), p = de.useMemo(() => ({
    currentLanguage: i,
    setLanguage: c,
    t: d,
    isLanguageChanging: o
  }), [i, c, d, o]);
  return /* @__PURE__ */ _.jsx(Hy.Provider, { value: p, children: n });
}
function Vy() {
  const n = de.useContext(Hy);
  if (n === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return n;
}
function XE({ className: n = "", variant: i = "dropdown", companyName: l }) {
  const { currentLanguage: o, setLanguage: u, isLanguageChanging: c } = Vy(), [d, p] = de.useState(!1), g = (m) => {
    u(m), p(!1), l && fn.trackLanguageChange(l, m);
  };
  return i === "buttons" ? /* @__PURE__ */ _.jsx("div", { className: `flex flex-wrap gap-1 ${n}`, children: Object.entries(jc).map(([m, h]) => /* @__PURE__ */ _.jsxs(
    "button",
    {
      onClick: () => g(m),
      disabled: c,
      className: `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${o === m ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"} ${c ? "opacity-50 cursor-not-allowed" : ""}`,
      children: [
        /* @__PURE__ */ _.jsx("span", { className: "mr-2", children: vc[m] }),
        h
      ]
    },
    m
  )) }) : /* @__PURE__ */ _.jsxs("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ _.jsxs(
      "button",
      {
        onClick: () => p(!d),
        disabled: c,
        className: "flex items-center px-1 py-1 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        children: [
          /* @__PURE__ */ _.jsx($S, { className: "h-4 w-4 mr-1" }),
          /* @__PURE__ */ _.jsx("span", { className: "mr-1", children: vc[o] }),
          /* @__PURE__ */ _.jsx(Qg, { className: `h-4 w-4 ml-1 transition-transform ${d ? "rotate-180" : ""}` })
        ]
      }
    ),
    d && /* @__PURE__ */ _.jsx("div", { className: "absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ _.jsx("div", { className: "py-1", children: Object.entries(jc).map(([m, h]) => /* @__PURE__ */ _.jsxs(
      "button",
      {
        onClick: () => g(m),
        className: `w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${o === m ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-300"}`,
        children: [
          /* @__PURE__ */ _.jsx("span", { className: "mr-3", children: vc[m] }),
          h
        ]
      },
      m
    )) }) }),
    d && /* @__PURE__ */ _.jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => p(!1)
      }
    )
  ] });
}
class KE {
  static BACKEND_URL = "http://localhost:3000";
  // Generate theme from primary color
  static generateThemeFromPrimary(i, l, o) {
    return {
      primaryColor: i,
      logoUrl: o,
      backgroundColor: l ? "#1e2939" : "#F3F4F6",
      textColor: l ? "#F9FAFB" : "#1F2937",
      borderColor: l ? "#374151" : "#E5E7EB",
      accentColor: "#10B981"
      // Keep accent consistent
    };
  }
  static async getCompanyTheme(i, l) {
    try {
      const u = (await _e.get(`${this.BACKEND_URL}/api/companies/${encodeURIComponent(i)}/theme`, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.company, d = u?.theme?.primaryColor || "#3B82F6", p = u?.logo_url || "";
      return this.generateThemeFromPrimary(d, l, p);
    } catch (o) {
      return console.error("Error fetching company theme:", o), this.generateThemeFromPrimary("#3B82F6", l, "");
    }
  }
}
const ZE = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_BACKEND_URL: "http://localhost:3000", VITE_JINA_API_KEY: "demo-jina-key", VITE_OPEN_ROUTER_API_KEY: "demo-openrouter-key", VITE_SUPABASE_ANON_KEY: "demo-key", VITE_SUPABASE_PROJECT_URL: "https://demo.supabase.co", VITE_SUPABASE_SERVICE_ROLE_KEY: "demo-service-key" };
function Hn(n, i = "") {
  const l = typeof process < "u" ? process.env?.[n] : void 0;
  return (typeof import.meta < "u" ? ZE?.[n] : void 0) ?? l ?? i;
}
const JE = {
  projectUrl: Hn("VITE_SUPABASE_PROJECT_URL"),
  anonKey: Hn("VITE_SUPABASE_ANON_KEY"),
  serviceRoleKey: Hn("VITE_SUPABASE_SERVICE_ROLE_KEY")
}, WE = {
  apiUrl: Hn("VITE_OPEN_ROUTER_URL", "https://openrouter.ai/api/v1"),
  apiKey: Hn("VITE_OPEN_ROUTER_API_KEY"),
  sourceUrl: Hn("VITE_SOURCE_URL", "http://localhost:8081")
}, $E = {
  apiUrl: Hn("VITE_JINA_API_URL", "https://api.jina.ai/v1/embeddings"),
  apiKey: Hn("VITE_JINA_API_KEY")
}, Qy = {
  backendUrl: Hn("VITE_BACKEND_URL", "http://localhost:3001"),
  ...JE,
  ...WE,
  ...$E
}, eC = {
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
}, pg = "https://translation.googleapis.com/language/translate/v2", mg = {
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
class hg {
  static apiKey = null;
  static apiKeyPromise = null;
  /**
   * Fetch API key from backend
   */
  static async fetchApiKey() {
    return this.apiKeyPromise ? this.apiKeyPromise : (this.apiKeyPromise = (async () => {
      try {
        console.log("🔑 Fetching API key from backend...");
        const l = (await _e.get(`${Qy.backendUrl}/api/translate/api-key`)).data.apiKey;
        return console.log("✅ API key fetched successfully"), this.apiKey = l, l;
      } catch (i) {
        return console.warn("⚠️ Failed to fetch Google Translate API key from backend:", i), console.log("🔄 Falling back to fallback translations..."), null;
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
  static async detectLanguage(i) {
    const l = await this.getApiKey();
    if (!l)
      return console.warn("Google Translate API key not available, assuming English"), "en";
    try {
      return (await _e.post(`${pg}/detect?key=${l}`, {
        q: i
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.data.detections[0][0].language;
    } catch (o) {
      return console.error("Error detecting language:", o), o.response?.status === 403 ? (console.warn("⚠️ Google Translate API access forbidden. This could be due to:"), console.warn("   - Invalid or expired API key"), console.warn("   - API key not enabled for Google Translate API"), console.warn("   - Billing not enabled for the project"), console.warn("   - API quotas exceeded"), console.warn("🔄 Falling back to English detection")) : o.response?.status === 400 ? (console.warn("⚠️ Bad request to Google Translate API"), console.warn("🔄 Falling back to English detection")) : o.response?.status === 429 && (console.warn("⚠️ Google Translate API rate limit exceeded"), console.warn("🔄 Falling back to English detection")), "en";
    }
  }
  /**
   * Translate text from source language to target language
   */
  static async translate(i, l, o) {
    if (l === "en")
      return i;
    const u = await this.getApiKey();
    if (!u)
      return console.warn("Google Translate API key not available, using fallback translations"), mg[l][i] || i;
    try {
      return (await _e.post(`${pg}?key=${u}`, {
        q: i,
        target: eC[l],
        source: o || "en"
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.data.translations[0].translatedText;
    } catch (c) {
      return console.error("Error translating text:", c), c.response?.status === 403 ? console.warn("⚠️ Google Translate API access forbidden, using fallback translations") : c.response?.status === 400 ? console.warn("⚠️ Bad request to Google Translate API, using fallback translations") : c.response?.status === 429 && console.warn("⚠️ Google Translate API rate limit exceeded, using fallback translations"), mg[l][i] || i;
    }
  }
  /**
   * Translate user input to English for AI processing
   */
  static async translateToEnglish(i) {
    const l = await this.detectLanguage(i);
    return l === "en" ? i : await this.translate(i, "en", l);
  }
  /**
   * Translate AI response to user's language
   */
  static async translateToUserLanguage(i, l) {
    return await this.translate(i, l, "en");
  }
}
class tC {
  BACKEND_URL = Qy.backendUrl;
  // Get FAQ answer using semantic search
  async getFAQAnswer(i, l, o) {
    try {
      console.log("🔍 FAQ Search - Context messages:", l?.length || 0);
      const u = await _e.post(`${this.BACKEND_URL}/api/faqs/search`, {
        question: i,
        messages: l || [],
        companyData: o
      });
      if (console.log("FAQ search results:", u.data), Array.isArray(u.data) && u.data.length > 0) {
        const c = u.data[0];
        if (c.source === "limit_reached" || c.limitReached)
          return console.log("⚠️ Limit reached response detected"), {
            question: i,
            answer: c.answer || "Message limit reached for this month. Please upgrade your plan or wait until next month.",
            source: "limit_reached",
            limitReached: !0,
            messagesLeft: c.messagesLeft || 0
          };
        if (c.answer)
          return {
            question: i,
            answer: c.answer,
            source: c.source || "ai",
            faqId: c.faqId,
            confidence: c.confidence,
            fallbackReason: c.fallbackReason,
            limitReached: c.limitReached || !1,
            messagesLeft: c.messagesLeft
          };
      }
      return u.data && u.data.answer ? u.data.source === "limit_reached" || u.data.limitReached ? {
        question: i,
        answer: u.data.answer || "Message limit reached for this month. Please upgrade your plan or wait until next month.",
        source: "limit_reached",
        limitReached: !0,
        messagesLeft: u.data.messagesLeft || 0
      } : {
        question: i,
        answer: u.data.answer,
        source: u.data.source || "ai",
        faqId: u.data.faqId,
        confidence: u.data.confidence,
        fallbackReason: u.data.fallbackReason,
        limitReached: u.data.limitReached || !1,
        messagesLeft: u.data.messagesLeft
      } : null;
    } catch (u) {
      return console.error("Error searching FAQs:", u), null;
    }
  }
  async getFAQs(i) {
    try {
      return (await _e.get(`${this.BACKEND_URL}/api/companies/${i}/faqs`)).data;
    } catch (l) {
      throw console.error("Error fetching FAQs:", l), l;
    }
  }
  async importFAQs(i, l) {
    try {
      return (await _e.post(`${this.BACKEND_URL}/api/companies/${i}/faqs`, { faqs: l })).data;
    } catch (o) {
      throw console.error("Error importing FAQs:", o), o;
    }
  }
  async addFAQ(i, l, o) {
    try {
      return (await _e.post(`${this.BACKEND_URL}/api/companies/${i}/faqs`, {
        faqs: [{ question: l, answer: o }]
      })).data;
    } catch (u) {
      throw console.error("Error adding FAQ:", u), u;
    }
  }
  async updateFAQ(i, l, o) {
    try {
      return (await _e.put(`${this.BACKEND_URL}/api/faqs/${i}`, {
        question: l,
        answer: o
      })).data;
    } catch (u) {
      throw console.error("Error updating FAQ:", u), u;
    }
  }
  async deleteFAQ(i) {
    try {
      await _e.delete(`${this.BACKEND_URL}/api/faqs/${i}`);
    } catch (l) {
      throw console.error("Error deleting FAQ:", l), l;
    }
  }
}
const nC = new tC();
function aC({
  defaultTheme: n,
  toggleTheme: i,
  isMinimized: l,
  onToggleMinimize: o,
  isThemeChanging: u,
  companyData: c
}) {
  const d = de.useRef(null), p = de.useRef(null), { t: g, currentLanguage: m } = Vy(), [h, v] = de.useState(null), w = n === "dark", [x, k] = de.useState(!0), [z, L] = de.useState(!1), [q, K] = de.useState(!1), { name: j, plan: se, logo_url: J } = c || {}, U = () => PE(g("chat.welcomeWithCompany"), { companyName: j || "AI" }), [le, Y] = de.useState([]), [pe, we] = de.useState(!1), [re, te] = de.useState(!1), [W, ae] = de.useState(!1), [ie, N] = de.useState(!0), [G, P] = de.useState(0), Ee = () => {
    p.current && G > 0 && (p.current.scrollTop = G);
  }, b = () => {
    p.current && (p.current.scrollTop = p.current.scrollHeight);
  }, V = () => {
    if (p.current) {
      const { scrollTop: $, scrollHeight: Ie, clientHeight: Te } = p.current, Le = Ie - $ - Te < 10;
      N(Le), W && !Le && te(!0), Le && te(!1);
    }
  }, ee = ($) => {
    ae($), $ && te(!1);
  }, A = ($, Ie) => {
    Y((Te) => Te.map(
      (Le, Xe) => Xe === $ ? { ...Le, liked: Ie } : Le
    ));
  };
  de.useEffect(() => {
    const $ = {
      content: U(),
      isUser: !1,
      liked: null,
      isMessageStreamed: !1,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    Y([$]), j && fn.trackLanguageChange(j, m);
  }, [m]), de.useEffect(() => {
    j ? (k(!0), console.log("🔄 Fetching company theme via service..."), KE.getCompanyTheme(j, w).then(($) => {
      v($), setTimeout(() => {
        k(!1), L(!0);
      }, 100);
    }).catch(($) => {
      console.error("Failed to load company theme:", $), setTimeout(() => {
        k(!1), L(!0);
      }, 100);
    })) : setTimeout(() => {
      k(!1), L(!0);
    }, 100);
  }, [j, w, c]), de.useEffect(() => {
    j && fn.trackWidgetView(j);
  }, [j]), de.useEffect(() => {
    j && (l ? fn.trackWidgetClose(j) : fn.trackWidgetOpen(j));
  }, [l, j]), de.useEffect(() => {
    if (l)
      K(!1);
    else {
      K(!1);
      const $ = setTimeout(() => {
        K(!0), setTimeout(() => {
          Ee();
        }, 100);
      }, 300);
      return () => clearTimeout($);
    }
  }, [l]), de.useEffect(() => {
    if (W && !re) {
      const $ = setInterval(() => {
        b();
      }, 50);
      return () => clearInterval($);
    }
  }, [W, re]);
  const ne = ($, Ie) => {
    const Te = $.slice(1).map((Xe) => ({
      role: Xe.isUser ? "user" : "assistant",
      content: Xe.content
    })), Le = [
      ...Te,
      {
        role: "user",
        content: Ie
      }
    ];
    return console.log("🔧 Built conversation with current message:", {
      historyLength: Te.length,
      currentMessage: Ie.substring(0, 50) + "...",
      totalMessages: Le.length
    }), Le;
  }, Se = async ($) => {
    console.log("🚀 Starting message processing:", $);
    const Ie = {
      content: $,
      isUser: !0,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isMessageStreamed: !0
    };
    we(!0), Y((Te) => [...Te, Ie]), setTimeout(() => {
      b();
    }, 0), j && fn.trackMessageSent(j, $);
    try {
      console.log("🔄 Translating user input to English...");
      let Te = $;
      try {
        Te = await hg.translateToEnglish($);
      } catch (Et) {
        console.warn("⚠️ Translation failed, using original input:", Et), Te = $;
      }
      console.log("🤖 Getting FAQ answer...");
      const Le = ne(le, Te);
      console.log("📝 Conversation context:", Le.length, "messages");
      const Xe = await nC.getFAQAnswer(Te, Le, c);
      if (Xe) {
        if (Xe.source === "limit_reached" || Xe.limitReached) {
          console.log("⚠️ Message limit reached, showing limit message");
          const ha = {
            content: Xe.answer || `Message limit for ${j} reached for this month. Please contact customer support with any questions.`,
            isUser: !1,
            liked: null,
            isMessageStreamed: !1,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          };
          Y((wt) => [...wt, ha]), j && fn.trackMessageReceived(j, ha.content, "limit_reached");
          return;
        }
        console.log("🔄 Translating response to user language...");
        let Et = Xe.answer;
        try {
          Et = await hg.translateToUserLanguage(Xe.answer, m);
        } catch (wn) {
          console.warn("⚠️ Response translation failed, using original:", wn), Et = Xe.answer;
        }
        const ma = {
          content: Et,
          isUser: !1,
          liked: null,
          isMessageStreamed: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        Y((wn) => [...wn, ma]), j && fn.trackMessageReceived(j, Et, Xe.source), Xe.messagesLeft !== void 0 && console.log(`📊 Messages remaining: ${Xe.messagesLeft}`);
      } else
        console.log("⚠️ No response found from server"), Y((Et) => [
          ...Et,
          {
            content: "Sorry, I encountered an error. Please try again.",
            isUser: !1,
            liked: null,
            isMessageStreamed: !1,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          }
        ]);
    } catch (Te) {
      console.error("❌ Error in handleSendMessage:", Te), console.error("❌ Error details:", {
        message: Te instanceof Error ? Te.message : String(Te),
        stack: Te instanceof Error ? Te.stack : void 0,
        name: Te instanceof Error ? Te.name : "Unknown"
      }), Y((Le) => [
        ...Le,
        {
          content: "Sorry, something went wrong. Please try again.",
          isUser: !1,
          isMessageStreamed: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      console.log("🏁 Finishing message processing"), we(!1);
    }
  }, oe = ($) => {
    te(!0), Y((Ie) => Ie.map(
      (Te, Le) => Le === $ ? { ...Te, isMessageStreamed: !0 } : Te
    ));
  }, Ae = h?.primaryColor ? ay(h.primaryColor, 20) : void 0;
  return l ? /* @__PURE__ */ _.jsx(
    "div",
    {
      className: x && !z ? "animate-spin" : "animate-bounce",
      style: {
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 50,
        maxWidth: "400px",
        maxHeight: "600px"
      },
      children: /* @__PURE__ */ _.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ _.jsx(
          "button",
          {
            onClick: o,
            className: "text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl",
            style: {
              backgroundColor: h?.primaryColor || "#007bff"
            },
            onMouseEnter: ($) => {
              Ae && ($.currentTarget.style.backgroundColor = Ae);
            },
            onMouseLeave: ($) => {
              $.currentTarget.style.backgroundColor = h?.primaryColor || "#007bff";
            },
            children: x && !z ? /* @__PURE__ */ _.jsx("div", { className: "w-7 h-7 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ _.jsx(Sh, { className: "h-7 w-7" })
          }
        ),
        se === "free" && /* @__PURE__ */ _.jsxs("div", { className: "absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg", children: [
            "Powered by",
            " ",
            /* @__PURE__ */ _.jsx(
              "a",
              {
                href: "https://qurius.app",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-300 hover:text-blue-200 underline pointer-events-auto",
                onClick: ($) => $.stopPropagation(),
                children: "Qurius AI"
              }
            )
          ] }),
          /* @__PURE__ */ _.jsx("div", { className: "absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" })
        ] })
      ] })
    }
  ) : q ? /* @__PURE__ */ _.jsxs(
    "div",
    {
      className: qa(
        "border border-gray-200 dark:border-gray-700",
        "rounded-lg shadow-2xl flex flex-col overflow-hidden",
        "transition-all duration-300 ease-in-out",
        "relative",
        // Add relative positioning for spinner overlay
        "bg-white dark:bg-gray-900",
        // Add opacity transition for smooth appearance
        "transition-opacity duration-500 ease-in-out",
        "opacity-100"
      ),
      style: {
        width: "100%",
        height: "100%",
        maxWidth: "400px",
        maxHeight: "600px",
        boxSizing: "border-box",
        position: "fixed",
        bottom: `${window.innerWidth > 768 ? "1rem" : "0"}`,
        right: `${window.innerWidth > 768 ? "1rem" : "50%"}`,
        transform: `${window.innerWidth > 768 ? "none" : "translateX(50%)"}`,
        zIndex: 50,
        borderColor: h?.borderColor || "#E5E7EB",
        backgroundColor: h?.backgroundColor || "#FFFFFF"
      },
      children: [
        u && /* @__PURE__ */ _.jsx(
          "div",
          {
            className: "absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg",
            style: { backgroundColor: h?.backgroundColor + "CC" },
            children: /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ _.jsx(
                Fg,
                {
                  className: "w-12 h-12 animate-spin",
                  style: { color: h?.primaryColor }
                }
              ),
              /* @__PURE__ */ _.jsx(
                "p",
                {
                  className: "text-sm font-medium",
                  style: { color: h?.textColor },
                  children: "Updating theme..."
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ _.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "flex items-center gap-3", children: [
            J ? /* @__PURE__ */ _.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", children: /* @__PURE__ */ _.jsx("img", { src: J, alt: "Company Logo", className: "w-7 h-7" }) }) : (
              // Default logo
              /* @__PURE__ */ _.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", style: { backgroundColor: h?.primaryColor }, children: /* @__PURE__ */ _.jsx(Sh, { className: "w-4 h-4 text-white" }) })
            ),
            /* @__PURE__ */ _.jsxs("div", { children: [
              /* @__PURE__ */ _.jsxs("h3", { className: "font-semibold text-gray-900 dark:text-gray-100 text-sm", children: [
                j,
                " Assistant"
              ] }),
              /* @__PURE__ */ _.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Online now" })
            ] })
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "flex justify-end gap-1", children: [
            se === "pro" && /* @__PURE__ */ _.jsx(
              XE,
              {
                variant: "dropdown",
                className: "scale-65",
                companyName: j
              }
            ),
            se !== "free" && /* @__PURE__ */ _.jsx(
              "button",
              {
                onClick: () => {
                  i(), j && fn.trackThemeChange(j, n);
                },
                disabled: u,
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50",
                children: n === "dark" ? /* @__PURE__ */ _.jsx(u1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }) : /* @__PURE__ */ _.jsx(r1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            ),
            /* @__PURE__ */ _.jsx(
              "button",
              {
                onClick: () => {
                  p.current && P(p.current.scrollTop), o?.();
                },
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
                children: /* @__PURE__ */ _.jsx(a1, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs(
          "div",
          {
            ref: p,
            className: "flex-1 overflow-y-auto bg-white dark:bg-gray-900",
            onScroll: V,
            children: [
              /* @__PURE__ */ _.jsxs("div", { className: "py-4 pb-8", children: [
                le.map(($, Ie) => {
                  const Te = !$.isUser && Ie === le.length - 1;
                  return /* @__PURE__ */ _.jsx(
                    SE,
                    {
                      message: $.content,
                      messageIndex: Ie,
                      liked: $.liked,
                      isUser: $.isUser,
                      timestamp: $.timestamp,
                      onStreamingChange: $.isUser ? void 0 : ee,
                      skipStreaming: $.isMessageStreamed === !0,
                      isLastAiMessage: Te,
                      companyName: j,
                      companyTheme: h || void 0,
                      onRatingChange: (Le) => A(Ie, Le),
                      onStreamingComplete: oe
                    },
                    `${Ie}-${$.content.substring(0, 20)}`
                  );
                }),
                pe && /* @__PURE__ */ _.jsx(xE, { companyTheme: h })
              ] }),
              /* @__PURE__ */ _.jsx("div", { ref: d, className: "h-2" })
            ]
          }
        ),
        !ie && !W && /* @__PURE__ */ _.jsx("div", { className: "absolute bottom-27 right-4 z-10", children: /* @__PURE__ */ _.jsxs(
          By,
          {
            onClick: b,
            size: "sm",
            className: "h-10 w-10 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
            style: {
              backgroundColor: h?.primaryColor,
              "--hover-bg-color": Ae
            },
            onMouseEnter: ($) => {
              Ae && ($.currentTarget.style.backgroundColor = Ae);
            },
            onMouseLeave: ($) => {
              h?.primaryColor && ($.currentTarget.style.backgroundColor = h.primaryColor);
            },
            onFocus: ($) => {
              Ae && ($.currentTarget.style.backgroundColor = Ae);
            },
            onBlur: ($) => {
              h?.primaryColor && ($.currentTarget.style.backgroundColor = h.primaryColor);
            },
            children: [
              /* @__PURE__ */ _.jsx(Qg, { className: "h-4 w-4" }),
              /* @__PURE__ */ _.jsx("span", { className: "sr-only", children: "Scroll to bottom" })
            ]
          }
        ) }),
        /* @__PURE__ */ _.jsx(
          OE,
          {
            onSendMessage: Se,
            isLoading: pe,
            placeholder: `Ask ${j} anything...`,
            defaultTheme: n,
            companyTheme: h || void 0,
            verifiedPlan: se
          }
        )
      ]
    }
  ) : null;
}
const iC = 400, rC = 1300, _a = {
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
}, Fy = de.createContext({
  colors: _a.light,
  defaultTheme: "light",
  isDark: !1,
  setColorScheme: () => {
  },
  toggleTheme: () => {
  },
  isThemeChanging: !1
}), lC = ({ children: n, initialTheme: i }) => {
  const l = () => {
    if (i)
      return i;
    if (typeof window < "u") {
      const h = localStorage.getItem("theme");
      return h === "light" || h === "dark" ? h : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }, [o, u] = de.useState(l() === "dark"), [c, d] = de.useState(!1), p = (h) => {
    u(h === "dark"), typeof window < "u" && localStorage.setItem("theme", h);
  }, g = () => {
    const h = o ? "light" : "dark";
    d(!0), setTimeout(() => {
      p(h), setTimeout(() => {
        d(!1);
      }, rC);
    }, iC);
  };
  de.useEffect(() => {
    const h = window.matchMedia("(prefers-color-scheme: dark)"), v = (w) => {
      !localStorage.getItem("theme") && !i && p(w.matches ? "dark" : "light");
    };
    return h.addEventListener("change", v), () => h.removeEventListener("change", v);
  }, [i]), de.useEffect(() => {
    typeof window < "u" && (o ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), document.body.style.backgroundColor = o ? _a.dark.containerBackground : _a.light.containerBackground, document.body.style.color = o ? _a.dark.text : _a.light.text);
  }, [o]);
  const m = o ? _a.dark : _a.light;
  return /* @__PURE__ */ _.jsx(Fy.Provider, { value: {
    colors: m,
    defaultTheme: o ? "dark" : "light",
    isDark: o,
    setColorScheme: p,
    toggleTheme: g,
    isThemeChanging: c
  }, children: n });
}, oC = () => {
  const n = de.useContext(Fy);
  if (!n)
    throw new Error("useTheme must be used within a ThemeProvider");
  return n;
};
let mo = null;
const sC = async (n, i, l) => {
  try {
    return console.log("🔑 Validating widget key:", n, "for company with id:", i), (await _e.get(`${l}/api/validate-key`, {
      params: { key: n, companyId: i }
    })).data;
  } catch (o) {
    const u = o;
    return console.error("Key validation failed:", u.response?.data || u.message), { valid: !1, error: "Validation failed" };
  }
}, uC = async (n, i) => {
  try {
    return console.log("🏢 Fetching company data for ID:", n), (await _e.get(`${i}/api/companies/${n}`)).data;
  } catch (l) {
    const o = l;
    throw console.error("Failed to fetch company data:", o.response?.data || o.message), new Error("Failed to fetch company data");
  }
}, cC = (n, i) => (console.log("🔍 Verifying plan authenticity:", { scriptPlan: n, companyPlan: i }), n === "free" ? n : n === i ? (console.log("✅ Plan verification successful: plans match"), i) : (console.log("⚠️ Plan mismatch detected: using company plan as source of truth"), console.log("Script plan:", n, "Company plan:", i), i)), fC = async (n) => {
  const i = n.key, l = n.companyId, o = n.plan, u = "http://localhost:3000";
  let c = await sC(i, l, u);
  if (!c?.valid)
    return console.error("Widget key validation failed:", c.error), !1;
  try {
    const d = await uC(l, u);
    console.log("✅ Company data fetched successfully:", d);
    const p = cC(o, d.plan);
    return n.companyData = {
      ...d,
      plan: p
      // Use verified plan as single source of truth
    }, console.log("✅ Widget initialization completed successfully"), !0;
  } catch (d) {
    return console.error("❌ Failed to fetch company data:", d), !1;
  }
};
function dC(n, i) {
  mo && mo.unmount(), mo = dv.createRoot(n), mo.render(
    /* @__PURE__ */ _.jsx(ho.StrictMode, { children: /* @__PURE__ */ _.jsx(lC, { initialTheme: i.theme, children: /* @__PURE__ */ _.jsx(YE, { children: /* @__PURE__ */ _.jsx(pC, { config: i }) }) }) })
  );
}
function pC({ config: n }) {
  const { defaultTheme: i, toggleTheme: l, isThemeChanging: o } = oC(), [u, c] = ho.useState(!0), [d, p] = ho.useState(!1);
  if (ho.useEffect(() => {
    fC(n).then(p);
  }, [n]), !d)
    return null;
  const g = () => {
    const m = !u;
    c(m), console.log(m ? "Widget minimized, chat button should be visible" : "Widget expanded, chat button should be hidden");
  };
  return /* @__PURE__ */ _.jsx(
    aC,
    {
      defaultTheme: i,
      toggleTheme: l,
      isMinimized: u,
      onToggleMinimize: g,
      companyData: n.companyData,
      isThemeChanging: o
    }
  );
}
const mC = {
  init: dC
};
typeof window < "u" && (window.QuriusChatWidget = mC);
export {
  mC as default
};
