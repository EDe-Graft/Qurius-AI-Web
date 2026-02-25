function Pc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var $u = { exports: {} }, qr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nh;
function dv() {
  if (nh) return qr;
  nh = 1;
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
  return qr.Fragment = i, qr.jsx = l, qr.jsxs = l, qr;
}
var ah;
function pv() {
  return ah || (ah = 1, $u.exports = dv()), $u.exports;
}
var C = pv(), ec = { exports: {} }, Ce = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ih;
function mv() {
  if (ih) return Ce;
  ih = 1;
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
  }, D = Object.assign, R = {};
  function j(b, q, $) {
    this.props = b, this.context = q, this.refs = R, this.updater = $ || x;
  }
  j.prototype.isReactComponent = {}, j.prototype.setState = function(b, q) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, q, "setState");
  }, j.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function I() {
  }
  I.prototype = j.prototype;
  function ee(b, q, $) {
    this.props = b, this.context = q, this.refs = R, this.updater = $ || x;
  }
  var P = ee.prototype = new I();
  P.constructor = ee, D(P, j.prototype), P.isPureReactComponent = !0;
  var J = Array.isArray, W = { H: null, A: null, T: null, S: null, V: null }, U = Object.prototype.hasOwnProperty;
  function ae(b, q, $, A, ne, Ae) {
    return $ = Ae.ref, {
      $$typeof: n,
      type: b,
      key: q,
      ref: $ !== void 0 ? $ : null,
      props: Ae
    };
  }
  function X(b, q) {
    return ae(
      b.type,
      q,
      void 0,
      void 0,
      void 0,
      b.props
    );
  }
  function ce(b) {
    return typeof b == "object" && b !== null && b.$$typeof === n;
  }
  function ge(b) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function($) {
      return q[$];
    });
  }
  var re = /\/+/g;
  function te(b, q) {
    return typeof b == "object" && b !== null && b.key != null ? ge("" + b.key) : q.toString(36);
  }
  function oe() {
  }
  function ie(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(oe, oe) : (b.status = "pending", b.then(
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
  function Y(b, q, $, A, ne) {
    var Ae = typeof b;
    (Ae === "undefined" || Ae === "boolean") && (b = null);
    var se = !1;
    if (b === null) se = !0;
    else
      switch (Ae) {
        case "bigint":
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case n:
            case i:
              se = !0;
              break;
            case h:
              return se = b._init, Y(
                se(b._payload),
                q,
                $,
                A,
                ne
              );
          }
      }
    if (se)
      return ne = ne(b), se = A === "" ? "." + te(b, 0) : A, J(ne) ? ($ = "", se != null && ($ = se.replace(re, "$&/") + "/"), Y(ne, q, $, "", function(tt) {
        return tt;
      })) : ne != null && (ce(ne) && (ne = X(
        ne,
        $ + (ne.key == null || b && b.key === ne.key ? "" : ("" + ne.key).replace(
          re,
          "$&/"
        ) + "/") + se
      )), q.push(ne)), 1;
    se = 0;
    var De = A === "" ? "." : A + ":";
    if (J(b))
      for (var Me = 0; Me < b.length; Me++)
        A = b[Me], Ae = De + te(A, Me), se += Y(
          A,
          q,
          $,
          Ae,
          ne
        );
    else if (Me = w(b), typeof Me == "function")
      for (b = Me.call(b), Me = 0; !(A = b.next()).done; )
        A = A.value, Ae = De + te(A, Me++), se += Y(
          A,
          q,
          $,
          Ae,
          ne
        );
    else if (Ae === "object") {
      if (typeof b.then == "function")
        return Y(
          ie(b),
          q,
          $,
          A,
          ne
        );
      throw q = String(b), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return se;
  }
  function M(b, q, $) {
    if (b == null) return b;
    var A = [], ne = 0;
    return Y(b, A, "", "", function(Ae) {
      return q.call($, Ae, ne++);
    }), A;
  }
  function G(b) {
    if (b._status === -1) {
      var q = b._result;
      q = q(), q.then(
        function($) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = $);
        },
        function($) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = $);
        }
      ), b._status === -1 && (b._status = 0, b._result = q);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var Q = typeof reportError == "function" ? reportError : function(b) {
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
  function Te() {
  }
  return Ce.Children = {
    map: M,
    forEach: function(b, q, $) {
      M(
        b,
        function() {
          q.apply(this, arguments);
        },
        $
      );
    },
    count: function(b) {
      var q = 0;
      return M(b, function() {
        q++;
      }), q;
    },
    toArray: function(b) {
      return M(b, function(q) {
        return q;
      }) || [];
    },
    only: function(b) {
      if (!ce(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  }, Ce.Component = j, Ce.Fragment = l, Ce.Profiler = u, Ce.PureComponent = ee, Ce.StrictMode = o, Ce.Suspense = g, Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, Ce.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return W.H.useMemoCache(b);
    }
  }, Ce.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, Ce.cloneElement = function(b, q, $) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var A = D({}, b.props), ne = b.key, Ae = void 0;
    if (q != null)
      for (se in q.ref !== void 0 && (Ae = void 0), q.key !== void 0 && (ne = "" + q.key), q)
        !U.call(q, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && q.ref === void 0 || (A[se] = q[se]);
    var se = arguments.length - 2;
    if (se === 1) A.children = $;
    else if (1 < se) {
      for (var De = Array(se), Me = 0; Me < se; Me++)
        De[Me] = arguments[Me + 2];
      A.children = De;
    }
    return ae(b.type, ne, void 0, void 0, Ae, A);
  }, Ce.createContext = function(b) {
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
  }, Ce.createElement = function(b, q, $) {
    var A, ne = {}, Ae = null;
    if (q != null)
      for (A in q.key !== void 0 && (Ae = "" + q.key), q)
        U.call(q, A) && A !== "key" && A !== "__self" && A !== "__source" && (ne[A] = q[A]);
    var se = arguments.length - 2;
    if (se === 1) ne.children = $;
    else if (1 < se) {
      for (var De = Array(se), Me = 0; Me < se; Me++)
        De[Me] = arguments[Me + 2];
      ne.children = De;
    }
    if (b && b.defaultProps)
      for (A in se = b.defaultProps, se)
        ne[A] === void 0 && (ne[A] = se[A]);
    return ae(b, Ae, void 0, void 0, null, ne);
  }, Ce.createRef = function() {
    return { current: null };
  }, Ce.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, Ce.isValidElement = ce, Ce.lazy = function(b) {
    return {
      $$typeof: h,
      _payload: { _status: -1, _result: b },
      _init: G
    };
  }, Ce.memo = function(b, q) {
    return {
      $$typeof: m,
      type: b,
      compare: q === void 0 ? null : q
    };
  }, Ce.startTransition = function(b) {
    var q = W.T, $ = {};
    W.T = $;
    try {
      var A = b(), ne = W.S;
      ne !== null && ne($, A), typeof A == "object" && A !== null && typeof A.then == "function" && A.then(Te, Q);
    } catch (Ae) {
      Q(Ae);
    } finally {
      W.T = q;
    }
  }, Ce.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, Ce.use = function(b) {
    return W.H.use(b);
  }, Ce.useActionState = function(b, q, $) {
    return W.H.useActionState(b, q, $);
  }, Ce.useCallback = function(b, q) {
    return W.H.useCallback(b, q);
  }, Ce.useContext = function(b) {
    return W.H.useContext(b);
  }, Ce.useDebugValue = function() {
  }, Ce.useDeferredValue = function(b, q) {
    return W.H.useDeferredValue(b, q);
  }, Ce.useEffect = function(b, q, $) {
    var A = W.H;
    if (typeof $ == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return A.useEffect(b, q);
  }, Ce.useId = function() {
    return W.H.useId();
  }, Ce.useImperativeHandle = function(b, q, $) {
    return W.H.useImperativeHandle(b, q, $);
  }, Ce.useInsertionEffect = function(b, q) {
    return W.H.useInsertionEffect(b, q);
  }, Ce.useLayoutEffect = function(b, q) {
    return W.H.useLayoutEffect(b, q);
  }, Ce.useMemo = function(b, q) {
    return W.H.useMemo(b, q);
  }, Ce.useOptimistic = function(b, q) {
    return W.H.useOptimistic(b, q);
  }, Ce.useReducer = function(b, q, $) {
    return W.H.useReducer(b, q, $);
  }, Ce.useRef = function(b) {
    return W.H.useRef(b);
  }, Ce.useState = function(b) {
    return W.H.useState(b);
  }, Ce.useSyncExternalStore = function(b, q, $) {
    return W.H.useSyncExternalStore(
      b,
      q,
      $
    );
  }, Ce.useTransition = function() {
    return W.H.useTransition();
  }, Ce.version = "19.1.0", Ce;
}
var rh;
function Gc() {
  return rh || (rh = 1, ec.exports = mv()), ec.exports;
}
var ue = Gc();
const dn = /* @__PURE__ */ Pc(ue);
var tc = { exports: {} }, Br = {}, nc = { exports: {} }, ac = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lh;
function hv() {
  return lh || (lh = 1, function(n) {
    function i(M, G) {
      var Q = M.length;
      M.push(G);
      e: for (; 0 < Q; ) {
        var Te = Q - 1 >>> 1, b = M[Te];
        if (0 < u(b, G))
          M[Te] = G, M[Q] = b, Q = Te;
        else break e;
      }
    }
    function l(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var G = M[0], Q = M.pop();
      if (Q !== G) {
        M[0] = Q;
        e: for (var Te = 0, b = M.length, q = b >>> 1; Te < q; ) {
          var $ = 2 * (Te + 1) - 1, A = M[$], ne = $ + 1, Ae = M[ne];
          if (0 > u(A, Q))
            ne < b && 0 > u(Ae, A) ? (M[Te] = Ae, M[ne] = Q, Te = ne) : (M[Te] = A, M[$] = Q, Te = $);
          else if (ne < b && 0 > u(Ae, Q))
            M[Te] = Ae, M[ne] = Q, Te = ne;
          else break e;
        }
      }
      return G;
    }
    function u(M, G) {
      var Q = M.sortIndex - G.sortIndex;
      return Q !== 0 ? Q : M.id - G.id;
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
    var g = [], m = [], h = 1, v = null, w = 3, x = !1, D = !1, R = !1, j = !1, I = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    function J(M) {
      for (var G = l(m); G !== null; ) {
        if (G.callback === null) o(m);
        else if (G.startTime <= M)
          o(m), G.sortIndex = G.expirationTime, i(g, G);
        else break;
        G = l(m);
      }
    }
    function W(M) {
      if (R = !1, J(M), !D)
        if (l(g) !== null)
          D = !0, U || (U = !0, te());
        else {
          var G = l(m);
          G !== null && Y(W, G.startTime - M);
        }
    }
    var U = !1, ae = -1, X = 5, ce = -1;
    function ge() {
      return j ? !0 : !(n.unstable_now() - ce < X);
    }
    function re() {
      if (j = !1, U) {
        var M = n.unstable_now();
        ce = M;
        var G = !0;
        try {
          e: {
            D = !1, R && (R = !1, ee(ae), ae = -1), x = !0;
            var Q = w;
            try {
              t: {
                for (J(M), v = l(g); v !== null && !(v.expirationTime > M && ge()); ) {
                  var Te = v.callback;
                  if (typeof Te == "function") {
                    v.callback = null, w = v.priorityLevel;
                    var b = Te(
                      v.expirationTime <= M
                    );
                    if (M = n.unstable_now(), typeof b == "function") {
                      v.callback = b, J(M), G = !0;
                      break t;
                    }
                    v === l(g) && o(g), J(M);
                  } else o(g);
                  v = l(g);
                }
                if (v !== null) G = !0;
                else {
                  var q = l(m);
                  q !== null && Y(
                    W,
                    q.startTime - M
                  ), G = !1;
                }
              }
              break e;
            } finally {
              v = null, w = Q, x = !1;
            }
            G = void 0;
          }
        } finally {
          G ? te() : U = !1;
        }
      }
    }
    var te;
    if (typeof P == "function")
      te = function() {
        P(re);
      };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), ie = oe.port2;
      oe.port1.onmessage = re, te = function() {
        ie.postMessage(null);
      };
    } else
      te = function() {
        I(re, 0);
      };
    function Y(M, G) {
      ae = I(function() {
        M(n.unstable_now());
      }, G);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, n.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : X = 0 < M ? Math.floor(1e3 / M) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(M) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = w;
      }
      var Q = w;
      w = G;
      try {
        return M();
      } finally {
        w = Q;
      }
    }, n.unstable_requestPaint = function() {
      j = !0;
    }, n.unstable_runWithPriority = function(M, G) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var Q = w;
      w = M;
      try {
        return G();
      } finally {
        w = Q;
      }
    }, n.unstable_scheduleCallback = function(M, G, Q) {
      var Te = n.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? Te + Q : Te) : Q = Te, M) {
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
      return b = Q + b, M = {
        id: h++,
        callback: G,
        priorityLevel: M,
        startTime: Q,
        expirationTime: b,
        sortIndex: -1
      }, Q > Te ? (M.sortIndex = Q, i(m, M), l(g) === null && M === l(m) && (R ? (ee(ae), ae = -1) : R = !0, Y(W, Q - Te))) : (M.sortIndex = b, i(g, M), D || x || (D = !0, U || (U = !0, te()))), M;
    }, n.unstable_shouldYield = ge, n.unstable_wrapCallback = function(M) {
      var G = w;
      return function() {
        var Q = w;
        w = G;
        try {
          return M.apply(this, arguments);
        } finally {
          w = Q;
        }
      };
    };
  }(ac)), ac;
}
var oh;
function gv() {
  return oh || (oh = 1, nc.exports = hv()), nc.exports;
}
var ic = { exports: {} }, Tt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sh;
function yv() {
  if (sh) return Tt;
  sh = 1;
  var n = Gc();
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
  return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Tt.createPortal = function(g, m) {
    var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(i(299));
    return c(g, m, null, h);
  }, Tt.flushSync = function(g) {
    var m = d.T, h = o.p;
    try {
      if (d.T = null, o.p = 2, g) return g();
    } finally {
      d.T = m, o.p = h, o.d.f();
    }
  }, Tt.preconnect = function(g, m) {
    typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(g, m));
  }, Tt.prefetchDNS = function(g) {
    typeof g == "string" && o.d.D(g);
  }, Tt.preinit = function(g, m) {
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
  }, Tt.preinitModule = function(g, m) {
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
  }, Tt.preload = function(g, m) {
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
  }, Tt.preloadModule = function(g, m) {
    if (typeof g == "string")
      if (m) {
        var h = p(m.as, m.crossOrigin);
        o.d.m(g, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: h,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else o.d.m(g);
  }, Tt.requestFormReset = function(g) {
    o.d.r(g);
  }, Tt.unstable_batchedUpdates = function(g, m) {
    return g(m);
  }, Tt.useFormState = function(g, m, h) {
    return d.H.useFormState(g, m, h);
  }, Tt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, Tt.version = "19.1.0", Tt;
}
var uh;
function bv() {
  if (uh) return ic.exports;
  uh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), ic.exports = yv(), ic.exports;
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
var ch;
function vv() {
  if (ch) return Br;
  ch = 1;
  var n = gv(), i = Gc(), l = bv();
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
  var h = Object.assign, v = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), ee = Symbol.for("react.consumer"), P = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), ge = Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case j:
        return "Profiler";
      case R:
        return "StrictMode";
      case W:
        return "Suspense";
      case U:
        return "SuspenseList";
      case ce:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case x:
          return "Portal";
        case P:
          return (e.displayName || "Context") + ".Provider";
        case ee:
          return (e._context.displayName || "Context") + ".Consumer";
        case J:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ae:
          return t = e.displayName || null, t !== null ? t : ie(e.type) || "Memo";
        case X:
          t = e._payload, e = e._init;
          try {
            return ie(e(t));
          } catch {
          }
      }
    return null;
  }
  var Y = Array.isArray, M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Te = [], b = -1;
  function q(e) {
    return { current: e };
  }
  function $(e) {
    0 > b || (e.current = Te[b], Te[b] = null, b--);
  }
  function A(e, t) {
    b++, Te[b] = e.current, e.current = t;
  }
  var ne = q(null), Ae = q(null), se = q(null), De = q(null);
  function Me(e, t) {
    switch (A(se, t), A(Ae, e), A(ne, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Rm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Rm(t), e = Nm(t, e);
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
    $(ne), A(ne, e);
  }
  function tt() {
    $(ne), $(Ae), $(se);
  }
  function yt(e) {
    e.memoizedState !== null && A(De, e);
    var t = ne.current, a = Nm(t, e.type);
    t !== a && (A(Ae, e), A(ne, a));
  }
  function xt(e) {
    Ae.current === e && ($(ne), $(Ae)), De.current === e && ($(De), _r._currentValue = Q);
  }
  var $t = Object.prototype.hasOwnProperty, xa = n.unstable_scheduleCallback, Ht = n.unstable_cancelCallback, le = n.unstable_shouldYield, Ue = n.unstable_requestPaint, me = n.unstable_now, Le = n.unstable_getCurrentPriorityLevel, qe = n.unstable_ImmediatePriority, zt = n.unstable_UserBlockingPriority, Kn = n.unstable_NormalPriority, vn = n.unstable_LowPriority, Aa = n.unstable_IdlePriority, Qi = n.log, Ho = n.unstable_setDisableYieldValue, B = null, K = null;
  function ye(e) {
    if (typeof Qi == "function" && Ho(e), K && typeof K.setStrictMode == "function")
      try {
        K.setStrictMode(B, e);
      } catch {
      }
  }
  var Se = Math.clz32 ? Math.clz32 : Rn, Qe = Math.log, Vt = Math.LN2;
  function Rn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Qe(e) / Vt | 0) | 0;
  }
  var Rt = 256, Sn = 4194304;
  function Qt(e) {
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
  function dt(e, t, a) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0, f = e.suspendedLanes, y = e.pingedLanes;
    e = e.warmLanes;
    var S = r & 134217727;
    return S !== 0 ? (r = S & ~f, r !== 0 ? s = Qt(r) : (y &= S, y !== 0 ? s = Qt(y) : a || (a = S & ~e, a !== 0 && (s = Qt(a))))) : (S = r & ~f, S !== 0 ? s = Qt(S) : y !== 0 ? s = Qt(y) : a || (a = r & ~e, a !== 0 && (s = Qt(a)))), s === 0 ? 0 : t !== 0 && t !== s && (t & f) === 0 && (f = s & -s, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : s;
  }
  function en(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function pn(e, t) {
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
  function pf() {
    var e = Rt;
    return Rt <<= 1, (Rt & 4194048) === 0 && (Rt = 256), e;
  }
  function mf() {
    var e = Sn;
    return Sn <<= 1, (Sn & 62914560) === 0 && (Sn = 4194304), e;
  }
  function Vo(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Fi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function eb(e, t, a, r, s, f) {
    var y = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var S = e.entanglements, T = e.expirationTimes, N = e.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var H = 31 - Se(a), F = 1 << H;
      S[H] = 0, T[H] = -1;
      var O = N[H];
      if (O !== null)
        for (N[H] = null, H = 0; H < O.length; H++) {
          var _ = O[H];
          _ !== null && (_.lane &= -536870913);
        }
      a &= ~F;
    }
    r !== 0 && hf(e, r, 0), f !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~t));
  }
  function hf(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - Se(t);
    e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | a & 4194090;
  }
  function gf(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var r = 31 - Se(a), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), a &= ~s;
    }
  }
  function Qo(e) {
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
  function Fo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function yf() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Zm(e.type));
  }
  function tb(e, t) {
    var a = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = a;
    }
  }
  var Xn = Math.random().toString(36).slice(2), At = "__reactFiber$" + Xn, Nt = "__reactProps$" + Xn, Ya = "__reactContainer$" + Xn, Po = "__reactEvents$" + Xn, nb = "__reactListeners$" + Xn, ab = "__reactHandles$" + Xn, bf = "__reactResources$" + Xn, Pi = "__reactMarker$" + Xn;
  function Go(e) {
    delete e[At], delete e[Nt], delete e[Po], delete e[nb], delete e[ab];
  }
  function Ka(e) {
    var t = e[At];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ya] || a[At]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Im(e); e !== null; ) {
            if (a = e[At]) return a;
            e = Im(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Xa(e) {
    if (e = e[At] || e[Ya]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Gi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Za(e) {
    var t = e[bf];
    return t || (t = e[bf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function pt(e) {
    e[Pi] = !0;
  }
  var vf = /* @__PURE__ */ new Set(), Sf = {};
  function wa(e, t) {
    Ja(e, t), Ja(e + "Capture", t);
  }
  function Ja(e, t) {
    for (Sf[e] = t, e = 0; e < t.length; e++)
      vf.add(t[e]);
  }
  var ib = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), xf = {}, Af = {};
  function rb(e) {
    return $t.call(Af, e) ? !0 : $t.call(xf, e) ? !1 : ib.test(e) ? Af[e] = !0 : (xf[e] = !0, !1);
  }
  function il(e, t, a) {
    if (rb(t))
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
  function rl(e, t, a) {
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
  function Nn(e, t, a, r) {
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
  var Yo, wf;
  function Wa(e) {
    if (Yo === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Yo = t && t[1] || "", wf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Yo + e + wf;
  }
  var Ko = !1;
  function Xo(e, t) {
    if (!e || Ko) return "";
    Ko = !0;
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
                } catch (_) {
                  var O = _;
                }
                Reflect.construct(e, [], F);
              } else {
                try {
                  F.call();
                } catch (_) {
                  O = _;
                }
                e.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                O = _;
              }
              (F = e()) && typeof F.catch == "function" && F.catch(function() {
              });
            }
          } catch (_) {
            if (_ && O && typeof _.stack == "string")
              return [_.stack, O.stack];
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
`), N = S.split(`
`);
        for (s = r = 0; r < T.length && !T[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; s < N.length && !N[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (r === T.length || s === N.length)
          for (r = T.length - 1, s = N.length - 1; 1 <= r && 0 <= s && T[r] !== N[s]; )
            s--;
        for (; 1 <= r && 0 <= s; r--, s--)
          if (T[r] !== N[s]) {
            if (r !== 1 || s !== 1)
              do
                if (r--, s--, 0 > s || T[r] !== N[s]) {
                  var H = `
` + T[r].replace(" at new ", " at ");
                  return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                }
              while (1 <= r && 0 <= s);
            break;
          }
      }
    } finally {
      Ko = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Wa(a) : "";
  }
  function lb(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Wa(e.type);
      case 16:
        return Wa("Lazy");
      case 13:
        return Wa("Suspense");
      case 19:
        return Wa("SuspenseList");
      case 0:
      case 15:
        return Xo(e.type, !1);
      case 11:
        return Xo(e.type.render, !1);
      case 1:
        return Xo(e.type, !0);
      case 31:
        return Wa("Activity");
      default:
        return "";
    }
  }
  function Tf(e) {
    try {
      var t = "";
      do
        t += lb(e), e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function tn(e) {
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
  function Ef(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ob(e) {
    var t = Ef(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
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
  function ll(e) {
    e._valueTracker || (e._valueTracker = ob(e));
  }
  function Cf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), r = "";
    return e && (r = Ef(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== a ? (t.setValue(e), !0) : !1;
  }
  function ol(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var sb = /[\n"\\]/g;
  function nn(e) {
    return e.replace(
      sb,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Zo(e, t, a, r, s, f, y, S) {
    e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + tn(t)) : e.value !== "" + tn(t) && (e.value = "" + tn(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), t != null ? Jo(e, y, tn(t)) : a != null ? Jo(e, y, tn(a)) : r != null && e.removeAttribute("value"), s == null && f != null && (e.defaultChecked = !!f), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + tn(S) : e.removeAttribute("name");
  }
  function kf(e, t, a, r, s, f, y, S) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || a != null) {
      if (!(f !== "submit" && f !== "reset" || t != null))
        return;
      a = a != null ? "" + tn(a) : "", t = t != null ? "" + tn(t) : a, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = r ?? s, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = S ? e.checked : !!r, e.defaultChecked = !!r, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y);
  }
  function Jo(e, t, a) {
    t === "number" && ol(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function $a(e, t, a, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < a.length; s++)
        t["$" + a[s]] = !0;
      for (a = 0; a < e.length; a++)
        s = t.hasOwnProperty("$" + e[a].value), e[a].selected !== s && (e[a].selected = s), s && r && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + tn(a), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === a) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Df(e, t, a) {
    if (t != null && (t = "" + tn(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + tn(a) : "";
  }
  function zf(e, t, a, r) {
    if (t == null) {
      if (r != null) {
        if (a != null) throw Error(o(92));
        if (Y(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        a = r;
      }
      a == null && (a = ""), t = a;
    }
    a = tn(t), e.defaultValue = a, r = e.textContent, r === a && r !== "" && r !== null && (e.value = r);
  }
  function ei(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ub = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rf(e, t, a) {
    var r = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, a) : typeof a != "number" || a === 0 || ub.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Nf(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, a != null) {
      for (var r in a)
        !a.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
      for (var s in t)
        r = t[s], t.hasOwnProperty(s) && a[s] !== r && Rf(e, s, r);
    } else
      for (var f in t)
        t.hasOwnProperty(f) && Rf(e, f, t[f]);
  }
  function Wo(e) {
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
  var cb = /* @__PURE__ */ new Map([
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
  ]), fb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function sl(e) {
    return fb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var $o = null;
  function es(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ti = null, ni = null;
  function Mf(e) {
    var t = Xa(e);
    if (t && (e = t.stateNode)) {
      var a = e[Nt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Zo(
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
              'input[name="' + nn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var r = a[t];
              if (r !== e && r.form === e.form) {
                var s = r[Nt] || null;
                if (!s) throw Error(o(90));
                Zo(
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
              r = a[t], r.form === e.form && Cf(r);
          }
          break e;
        case "textarea":
          Df(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && $a(e, !!a.multiple, t, !1);
      }
    }
  }
  var ts = !1;
  function Of(e, t, a) {
    if (ts) return e(t, a);
    ts = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (ts = !1, (ti !== null || ni !== null) && (Yl(), ti && (t = ti, e = ni, ni = ti = null, Mf(t), e)))
        for (t = 0; t < e.length; t++) Mf(e[t]);
    }
  }
  function Yi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var r = a[Nt] || null;
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
  var Mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ns = !1;
  if (Mn)
    try {
      var Ki = {};
      Object.defineProperty(Ki, "passive", {
        get: function() {
          ns = !0;
        }
      }), window.addEventListener("test", Ki, Ki), window.removeEventListener("test", Ki, Ki);
    } catch {
      ns = !1;
    }
  var Zn = null, as = null, ul = null;
  function _f() {
    if (ul) return ul;
    var e, t = as, a = t.length, r, s = "value" in Zn ? Zn.value : Zn.textContent, f = s.length;
    for (e = 0; e < a && t[e] === s[e]; e++) ;
    var y = a - e;
    for (r = 1; r <= y && t[a - r] === s[f - r]; r++) ;
    return ul = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function cl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function fl() {
    return !0;
  }
  function If() {
    return !1;
  }
  function Mt(e) {
    function t(a, r, s, f, y) {
      this._reactName = a, this._targetInst = s, this.type = r, this.nativeEvent = f, this.target = y, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (a = e[S], this[S] = a ? a(f) : f[S]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? fl : If, this.isPropagationStopped = If, this;
    }
    return h(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = fl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = fl);
      },
      persist: function() {
      },
      isPersistent: fl
    }), t;
  }
  var Ta = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, dl = Mt(Ta), Xi = h({}, Ta, { view: 0, detail: 0 }), db = Mt(Xi), is, rs, Zi, pl = h({}, Xi, {
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
    getModifierState: os,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Zi && (Zi && e.type === "mousemove" ? (is = e.screenX - Zi.screenX, rs = e.screenY - Zi.screenY) : rs = is = 0, Zi = e), is);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : rs;
    }
  }), Uf = Mt(pl), pb = h({}, pl, { dataTransfer: 0 }), mb = Mt(pb), hb = h({}, Xi, { relatedTarget: 0 }), ls = Mt(hb), gb = h({}, Ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), yb = Mt(gb), bb = h({}, Ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), vb = Mt(bb), Sb = h({}, Ta, { data: 0 }), Lf = Mt(Sb), xb = {
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
  }, Ab = {
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
  }, wb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Tb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = wb[e]) ? !!t[e] : !1;
  }
  function os() {
    return Tb;
  }
  var Eb = h({}, Xi, {
    key: function(e) {
      if (e.key) {
        var t = xb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = cl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ab[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: os,
    charCode: function(e) {
      return e.type === "keypress" ? cl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? cl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Cb = Mt(Eb), kb = h({}, pl, {
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
  }), jf = Mt(kb), Db = h({}, Xi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: os
  }), zb = Mt(Db), Rb = h({}, Ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Nb = Mt(Rb), Mb = h({}, pl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ob = Mt(Mb), _b = h({}, Ta, {
    newState: 0,
    oldState: 0
  }), Ib = Mt(_b), Ub = [9, 13, 27, 32], ss = Mn && "CompositionEvent" in window, Ji = null;
  Mn && "documentMode" in document && (Ji = document.documentMode);
  var Lb = Mn && "TextEvent" in window && !Ji, qf = Mn && (!ss || Ji && 8 < Ji && 11 >= Ji), Bf = " ", Hf = !1;
  function Vf(e, t) {
    switch (e) {
      case "keyup":
        return Ub.indexOf(t.keyCode) !== -1;
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
  function Qf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ai = !1;
  function jb(e, t) {
    switch (e) {
      case "compositionend":
        return Qf(t);
      case "keypress":
        return t.which !== 32 ? null : (Hf = !0, Bf);
      case "textInput":
        return e = t.data, e === Bf && Hf ? null : e;
      default:
        return null;
    }
  }
  function qb(e, t) {
    if (ai)
      return e === "compositionend" || !ss && Vf(e, t) ? (e = _f(), ul = as = Zn = null, ai = !1, e) : null;
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
        return qf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Bb = {
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
  function Ff(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Bb[e.type] : t === "textarea";
  }
  function Pf(e, t, a, r) {
    ti ? ni ? ni.push(r) : ni = [r] : ti = r, t = $l(t, "onChange"), 0 < t.length && (a = new dl(
      "onChange",
      "change",
      null,
      a,
      r
    ), e.push({ event: a, listeners: t }));
  }
  var Wi = null, $i = null;
  function Hb(e) {
    Em(e, 0);
  }
  function ml(e) {
    var t = Gi(e);
    if (Cf(t)) return e;
  }
  function Gf(e, t) {
    if (e === "change") return t;
  }
  var Yf = !1;
  if (Mn) {
    var us;
    if (Mn) {
      var cs = "oninput" in document;
      if (!cs) {
        var Kf = document.createElement("div");
        Kf.setAttribute("oninput", "return;"), cs = typeof Kf.oninput == "function";
      }
      us = cs;
    } else us = !1;
    Yf = us && (!document.documentMode || 9 < document.documentMode);
  }
  function Xf() {
    Wi && (Wi.detachEvent("onpropertychange", Zf), $i = Wi = null);
  }
  function Zf(e) {
    if (e.propertyName === "value" && ml($i)) {
      var t = [];
      Pf(
        t,
        $i,
        e,
        es(e)
      ), Of(Hb, t);
    }
  }
  function Vb(e, t, a) {
    e === "focusin" ? (Xf(), Wi = t, $i = a, Wi.attachEvent("onpropertychange", Zf)) : e === "focusout" && Xf();
  }
  function Qb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ml($i);
  }
  function Fb(e, t) {
    if (e === "click") return ml(t);
  }
  function Pb(e, t) {
    if (e === "input" || e === "change")
      return ml(t);
  }
  function Gb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ft = typeof Object.is == "function" ? Object.is : Gb;
  function er(e, t) {
    if (Ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), r = Object.keys(t);
    if (a.length !== r.length) return !1;
    for (r = 0; r < a.length; r++) {
      var s = a[r];
      if (!$t.call(t, s) || !Ft(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function Jf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Wf(e, t) {
    var a = Jf(e);
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
      a = Jf(a);
    }
  }
  function $f(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ed(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ol(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = ol(e.document);
    }
    return t;
  }
  function fs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Yb = Mn && "documentMode" in document && 11 >= document.documentMode, ii = null, ds = null, tr = null, ps = !1;
  function td(e, t, a) {
    var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ps || ii == null || ii !== ol(r) || (r = ii, "selectionStart" in r && fs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), tr && er(tr, r) || (tr = r, r = $l(ds, "onSelect"), 0 < r.length && (t = new dl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: r }), t.target = ii)));
  }
  function Ea(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var ri = {
    animationend: Ea("Animation", "AnimationEnd"),
    animationiteration: Ea("Animation", "AnimationIteration"),
    animationstart: Ea("Animation", "AnimationStart"),
    transitionrun: Ea("Transition", "TransitionRun"),
    transitionstart: Ea("Transition", "TransitionStart"),
    transitioncancel: Ea("Transition", "TransitionCancel"),
    transitionend: Ea("Transition", "TransitionEnd")
  }, ms = {}, nd = {};
  Mn && (nd = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
  function Ca(e) {
    if (ms[e]) return ms[e];
    if (!ri[e]) return e;
    var t = ri[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in nd)
        return ms[e] = t[a];
    return e;
  }
  var ad = Ca("animationend"), id = Ca("animationiteration"), rd = Ca("animationstart"), Kb = Ca("transitionrun"), Xb = Ca("transitionstart"), Zb = Ca("transitioncancel"), ld = Ca("transitionend"), od = /* @__PURE__ */ new Map(), hs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hs.push("scrollEnd");
  function mn(e, t) {
    od.set(e, t), wa(t, [e]);
  }
  var sd = /* @__PURE__ */ new WeakMap();
  function an(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = sd.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Tf(t)
      }, sd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Tf(t)
    };
  }
  var rn = [], li = 0, gs = 0;
  function hl() {
    for (var e = li, t = gs = li = 0; t < e; ) {
      var a = rn[t];
      rn[t++] = null;
      var r = rn[t];
      rn[t++] = null;
      var s = rn[t];
      rn[t++] = null;
      var f = rn[t];
      if (rn[t++] = null, r !== null && s !== null) {
        var y = r.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), r.pending = s;
      }
      f !== 0 && ud(a, s, f);
    }
  }
  function gl(e, t, a, r) {
    rn[li++] = e, rn[li++] = t, rn[li++] = a, rn[li++] = r, gs |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function ys(e, t, a, r) {
    return gl(e, t, a, r), yl(e);
  }
  function oi(e, t) {
    return gl(e, null, null, t), yl(e);
  }
  function ud(e, t, a) {
    e.lanes |= a;
    var r = e.alternate;
    r !== null && (r.lanes |= a);
    for (var s = !1, f = e.return; f !== null; )
      f.childLanes |= a, r = f.alternate, r !== null && (r.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (s = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, s && t !== null && (s = 31 - Se(a), e = f.hiddenUpdates, r = e[s], r === null ? e[s] = [t] : r.push(t), t.lane = a | 536870912), f) : null;
  }
  function yl(e) {
    if (50 < Cr)
      throw Cr = 0, wu = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var si = {};
  function Jb(e, t, a, r) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pt(e, t, a, r) {
    return new Jb(e, t, a, r);
  }
  function bs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function On(e, t) {
    var a = e.alternate;
    return a === null ? (a = Pt(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function cd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function bl(e, t, a, r, s, f) {
    var y = 0;
    if (r = e, typeof e == "function") bs(e) && (y = 1);
    else if (typeof e == "string")
      y = $0(
        e,
        a,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ce:
          return e = Pt(31, a, t, s), e.elementType = ce, e.lanes = f, e;
        case D:
          return ka(a.children, s, f, t);
        case R:
          y = 8, s |= 24;
          break;
        case j:
          return e = Pt(12, a, t, s | 2), e.elementType = j, e.lanes = f, e;
        case W:
          return e = Pt(13, a, t, s), e.elementType = W, e.lanes = f, e;
        case U:
          return e = Pt(19, a, t, s), e.elementType = U, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case I:
              case P:
                y = 10;
                break e;
              case ee:
                y = 9;
                break e;
              case J:
                y = 11;
                break e;
              case ae:
                y = 14;
                break e;
              case X:
                y = 16, r = null;
                break e;
            }
          y = 29, a = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), r = null;
      }
    return t = Pt(y, a, t, s), t.elementType = e, t.type = r, t.lanes = f, t;
  }
  function ka(e, t, a, r) {
    return e = Pt(7, e, r, t), e.lanes = a, e;
  }
  function vs(e, t, a) {
    return e = Pt(6, e, null, t), e.lanes = a, e;
  }
  function Ss(e, t, a) {
    return t = Pt(
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
  var ui = [], ci = 0, vl = null, Sl = 0, ln = [], on = 0, Da = null, _n = 1, In = "";
  function za(e, t) {
    ui[ci++] = Sl, ui[ci++] = vl, vl = e, Sl = t;
  }
  function fd(e, t, a) {
    ln[on++] = _n, ln[on++] = In, ln[on++] = Da, Da = e;
    var r = _n;
    e = In;
    var s = 32 - Se(r) - 1;
    r &= ~(1 << s), a += 1;
    var f = 32 - Se(t) + s;
    if (30 < f) {
      var y = s - s % 5;
      f = (r & (1 << y) - 1).toString(32), r >>= y, s -= y, _n = 1 << 32 - Se(t) + s | a << s | r, In = f + e;
    } else
      _n = 1 << f | a << s | r, In = e;
  }
  function xs(e) {
    e.return !== null && (za(e, 1), fd(e, 1, 0));
  }
  function As(e) {
    for (; e === vl; )
      vl = ui[--ci], ui[ci] = null, Sl = ui[--ci], ui[ci] = null;
    for (; e === Da; )
      Da = ln[--on], ln[on] = null, In = ln[--on], ln[on] = null, _n = ln[--on], ln[on] = null;
  }
  var Dt = null, nt = null, He = !1, Ra = null, xn = !1, ws = Error(o(519));
  function Na(e) {
    var t = Error(o(418, ""));
    throw ir(an(t, e)), ws;
  }
  function dd(e) {
    var t = e.stateNode, a = e.type, r = e.memoizedProps;
    switch (t[At] = e, t[Nt] = r, a) {
      case "dialog":
        Ie("cancel", t), Ie("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ie("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Dr.length; a++)
          Ie(Dr[a], t);
        break;
      case "source":
        Ie("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ie("error", t), Ie("load", t);
        break;
      case "details":
        Ie("toggle", t);
        break;
      case "input":
        Ie("invalid", t), kf(
          t,
          r.value,
          r.defaultValue,
          r.checked,
          r.defaultChecked,
          r.type,
          r.name,
          !0
        ), ll(t);
        break;
      case "select":
        Ie("invalid", t);
        break;
      case "textarea":
        Ie("invalid", t), zf(t, r.value, r.defaultValue, r.children), ll(t);
    }
    a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || r.suppressHydrationWarning === !0 || zm(t.textContent, a) ? (r.popover != null && (Ie("beforetoggle", t), Ie("toggle", t)), r.onScroll != null && Ie("scroll", t), r.onScrollEnd != null && Ie("scrollend", t), r.onClick != null && (t.onclick = eo), t = !0) : t = !1, t || Na(e);
  }
  function pd(e) {
    for (Dt = e.return; Dt; )
      switch (Dt.tag) {
        case 5:
        case 13:
          xn = !1;
          return;
        case 27:
        case 3:
          xn = !0;
          return;
        default:
          Dt = Dt.return;
      }
  }
  function nr(e) {
    if (e !== Dt) return !1;
    if (!He) return pd(e), He = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || qu(e.type, e.memoizedProps)), a = !a), a && nt && Na(e), pd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                nt = gn(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        nt = null;
      }
    } else
      t === 27 ? (t = nt, da(e.type) ? (e = Qu, Qu = null, nt = e) : nt = t) : nt = Dt ? gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ar() {
    nt = Dt = null, He = !1;
  }
  function md() {
    var e = Ra;
    return e !== null && (It === null ? It = e : It.push.apply(
      It,
      e
    ), Ra = null), e;
  }
  function ir(e) {
    Ra === null ? Ra = [e] : Ra.push(e);
  }
  var Ts = q(null), Ma = null, Un = null;
  function Jn(e, t, a) {
    A(Ts, t._currentValue), t._currentValue = a;
  }
  function Ln(e) {
    e._currentValue = Ts.current, $(Ts);
  }
  function Es(e, t, a) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Cs(e, t, a, r) {
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
              f.lanes |= a, S = f.alternate, S !== null && (S.lanes |= a), Es(
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
        y.lanes |= a, f = y.alternate, f !== null && (f.lanes |= a), Es(y, a, e), y = null;
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
  function rr(e, t, a, r) {
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
          Ft(s.pendingProps.value, y.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (s === De.current) {
        if (y = s.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(_r) : e = [_r]);
      }
      s = s.return;
    }
    e !== null && Cs(
      t,
      e,
      a,
      r
    ), t.flags |= 262144;
  }
  function xl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ft(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Oa(e) {
    Ma = e, Un = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function wt(e) {
    return hd(Ma, e);
  }
  function Al(e, t) {
    return Ma === null && Oa(e), hd(e, t);
  }
  function hd(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Un === null) {
      if (e === null) throw Error(o(308));
      Un = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Un = Un.next = t;
    return a;
  }
  var Wb = typeof AbortController < "u" ? AbortController : function() {
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
  }, $b = n.unstable_scheduleCallback, e0 = n.unstable_NormalPriority, ut = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ks() {
    return {
      controller: new Wb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function lr(e) {
    e.refCount--, e.refCount === 0 && $b(e0, function() {
      e.controller.abort();
    });
  }
  var or = null, Ds = 0, fi = 0, di = null;
  function t0(e, t) {
    if (or === null) {
      var a = or = [];
      Ds = 0, fi = Ru(), di = {
        status: "pending",
        value: void 0,
        then: function(r) {
          a.push(r);
        }
      };
    }
    return Ds++, t.then(gd, gd), t;
  }
  function gd() {
    if (--Ds === 0 && or !== null) {
      di !== null && (di.status = "fulfilled");
      var e = or;
      or = null, fi = 0, di = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function n0(e, t) {
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
  var yd = M.S;
  M.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && t0(e, t), yd !== null && yd(e, t);
  };
  var _a = q(null);
  function zs() {
    var e = _a.current;
    return e !== null ? e : Ze.pooledCache;
  }
  function wl(e, t) {
    t === null ? A(_a, _a.current) : A(_a, t.pool);
  }
  function bd() {
    var e = zs();
    return e === null ? null : { parent: ut._currentValue, pool: e };
  }
  var sr = Error(o(460)), vd = Error(o(474)), Tl = Error(o(542)), Rs = { then: function() {
  } };
  function Sd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function El() {
  }
  function xd(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(El, El), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, wd(e), e;
      default:
        if (typeof t.status == "string") t.then(El, El);
        else {
          if (e = Ze, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, wd(e), e;
        }
        throw ur = t, sr;
    }
  }
  var ur = null;
  function Ad() {
    if (ur === null) throw Error(o(459));
    var e = ur;
    return ur = null, e;
  }
  function wd(e) {
    if (e === sr || e === Tl)
      throw Error(o(483));
  }
  var Wn = !1;
  function Ns(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ms(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function $n(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ea(e, t, a) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Fe & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, t = yl(e), ud(e, null, a), t;
    }
    return gl(e, r, t, a), yl(e);
  }
  function cr(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, a |= r, t.lanes = a, gf(e, a);
    }
  }
  function Os(e, t) {
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
  var _s = !1;
  function fr() {
    if (_s) {
      var e = di;
      if (e !== null) throw e;
    }
  }
  function dr(e, t, a, r) {
    _s = !1;
    var s = e.updateQueue;
    Wn = !1;
    var f = s.firstBaseUpdate, y = s.lastBaseUpdate, S = s.shared.pending;
    if (S !== null) {
      s.shared.pending = null;
      var T = S, N = T.next;
      T.next = null, y === null ? f = N : y.next = N, y = T;
      var H = e.alternate;
      H !== null && (H = H.updateQueue, S = H.lastBaseUpdate, S !== y && (S === null ? H.firstBaseUpdate = N : S.next = N, H.lastBaseUpdate = T));
    }
    if (f !== null) {
      var F = s.baseState;
      y = 0, H = N = T = null, S = f;
      do {
        var O = S.lane & -536870913, _ = O !== S.lane;
        if (_ ? (je & O) === O : (r & O) === O) {
          O !== 0 && O === fi && (_s = !0), H !== null && (H = H.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var xe = e, be = S;
            O = t;
            var Ke = a;
            switch (be.tag) {
              case 1:
                if (xe = be.payload, typeof xe == "function") {
                  F = xe.call(Ke, F, O);
                  break e;
                }
                F = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = be.payload, O = typeof xe == "function" ? xe.call(Ke, F, O) : xe, O == null) break e;
                F = h({}, F, O);
                break e;
              case 2:
                Wn = !0;
            }
          }
          O = S.callback, O !== null && (e.flags |= 64, _ && (e.flags |= 8192), _ = s.callbacks, _ === null ? s.callbacks = [O] : _.push(O));
        } else
          _ = {
            lane: O,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, H === null ? (N = H = _, T = F) : H = H.next = _, y |= O;
        if (S = S.next, S === null) {
          if (S = s.shared.pending, S === null)
            break;
          _ = S, S = _.next, _.next = null, s.lastBaseUpdate = _, s.shared.pending = null;
        }
      } while (!0);
      H === null && (T = F), s.baseState = T, s.firstBaseUpdate = N, s.lastBaseUpdate = H, f === null && (s.shared.lanes = 0), sa |= y, e.lanes = y, e.memoizedState = F;
    }
  }
  function Td(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Ed(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Td(a[e], t);
  }
  var pi = q(null), Cl = q(0);
  function Cd(e, t) {
    e = Fn, A(Cl, e), A(pi, t), Fn = e | t.baseLanes;
  }
  function Is() {
    A(Cl, Fn), A(pi, pi.current);
  }
  function Us() {
    Fn = Cl.current, $(pi), $(Cl);
  }
  var ta = 0, Re = null, Ge = null, lt = null, kl = !1, mi = !1, Ia = !1, Dl = 0, pr = 0, hi = null, a0 = 0;
  function it() {
    throw Error(o(321));
  }
  function Ls(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Ft(e[a], t[a])) return !1;
    return !0;
  }
  function js(e, t, a, r, s, f) {
    return ta = f, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? up : cp, Ia = !1, f = a(r, s), Ia = !1, mi && (f = Dd(
      t,
      a,
      r,
      s
    )), kd(e), f;
  }
  function kd(e) {
    M.H = _l;
    var t = Ge !== null && Ge.next !== null;
    if (ta = 0, lt = Ge = Re = null, kl = !1, pr = 0, hi = null, t) throw Error(o(300));
    e === null || mt || (e = e.dependencies, e !== null && xl(e) && (mt = !0));
  }
  function Dd(e, t, a, r) {
    Re = e;
    var s = 0;
    do {
      if (mi && (hi = null), pr = 0, mi = !1, 25 <= s) throw Error(o(301));
      if (s += 1, lt = Ge = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      M.H = c0, f = t(a, r);
    } while (mi);
    return f;
  }
  function i0() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? mr(t) : t, e = e.useState()[0], (Ge !== null ? Ge.memoizedState : null) !== e && (Re.flags |= 1024), t;
  }
  function qs() {
    var e = Dl !== 0;
    return Dl = 0, e;
  }
  function Bs(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Hs(e) {
    if (kl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      kl = !1;
    }
    ta = 0, lt = Ge = Re = null, mi = !1, pr = Dl = 0, hi = null;
  }
  function Ot() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return lt === null ? Re.memoizedState = lt = e : lt = lt.next = e, lt;
  }
  function ot() {
    if (Ge === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = lt === null ? Re.memoizedState : lt.next;
    if (t !== null)
      lt = t, Ge = e;
    else {
      if (e === null)
        throw Re.alternate === null ? Error(o(467)) : Error(o(310));
      Ge = e, e = {
        memoizedState: Ge.memoizedState,
        baseState: Ge.baseState,
        baseQueue: Ge.baseQueue,
        queue: Ge.queue,
        next: null
      }, lt === null ? Re.memoizedState = lt = e : lt = lt.next = e;
    }
    return lt;
  }
  function Vs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mr(e) {
    var t = pr;
    return pr += 1, hi === null && (hi = []), e = xd(hi, e, t), t = Re, (lt === null ? t.memoizedState : lt.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? up : cp), e;
  }
  function zl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return mr(e);
      if (e.$$typeof === P) return wt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Qs(e) {
    var t = null, a = Re.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var r = Re.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
        data: r.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Vs(), Re.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), r = 0; r < e; r++)
        a[r] = ge;
    return t.index++, a;
  }
  function jn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Rl(e) {
    var t = ot();
    return Fs(t, Ge, e);
  }
  function Fs(e, t, a) {
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
      var S = y = null, T = null, N = t, H = !1;
      do {
        var F = N.lane & -536870913;
        if (F !== N.lane ? (je & F) === F : (ta & F) === F) {
          var O = N.revertLane;
          if (O === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), F === fi && (H = !0);
          else if ((ta & O) === O) {
            N = N.next, O === fi && (H = !0);
            continue;
          } else
            F = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, T === null ? (S = T = F, y = f) : T = T.next = F, Re.lanes |= O, sa |= O;
          F = N.action, Ia && a(f, F), f = N.hasEagerState ? N.eagerState : a(f, F);
        } else
          O = {
            lane: F,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, T === null ? (S = T = O, y = f) : T = T.next = O, Re.lanes |= F, sa |= F;
        N = N.next;
      } while (N !== null && N !== t);
      if (T === null ? y = f : T.next = S, !Ft(f, e.memoizedState) && (mt = !0, H && (a = di, a !== null)))
        throw a;
      e.memoizedState = f, e.baseState = y, e.baseQueue = T, r.lastRenderedState = f;
    }
    return s === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function Ps(e) {
    var t = ot(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var r = a.dispatch, s = a.pending, f = t.memoizedState;
    if (s !== null) {
      a.pending = null;
      var y = s = s.next;
      do
        f = e(f, y.action), y = y.next;
      while (y !== s);
      Ft(f, t.memoizedState) || (mt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
    }
    return [f, r];
  }
  function zd(e, t, a) {
    var r = Re, s = ot(), f = He;
    if (f) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var y = !Ft(
      (Ge || s).memoizedState,
      a
    );
    y && (s.memoizedState = a, mt = !0), s = s.queue;
    var S = Md.bind(null, r, s, e);
    if (hr(2048, 8, S, [e]), s.getSnapshot !== t || y || lt !== null && lt.memoizedState.tag & 1) {
      if (r.flags |= 2048, gi(
        9,
        Nl(),
        Nd.bind(
          null,
          r,
          s,
          a,
          t
        ),
        null
      ), Ze === null) throw Error(o(349));
      f || (ta & 124) !== 0 || Rd(r, t, a);
    }
    return a;
  }
  function Rd(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Re.updateQueue, t === null ? (t = Vs(), Re.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Nd(e, t, a, r) {
    t.value = a, t.getSnapshot = r, Od(t) && _d(e);
  }
  function Md(e, t, a) {
    return a(function() {
      Od(t) && _d(e);
    });
  }
  function Od(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Ft(e, a);
    } catch {
      return !0;
    }
  }
  function _d(e) {
    var t = oi(e, 2);
    t !== null && Zt(t, e, 2);
  }
  function Gs(e) {
    var t = Ot();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Ia) {
        ye(!0);
        try {
          a();
        } finally {
          ye(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jn,
      lastRenderedState: e
    }, t;
  }
  function Id(e, t, a, r) {
    return e.baseState = a, Fs(
      e,
      Ge,
      typeof r == "function" ? r : jn
    );
  }
  function r0(e, t, a, r, s) {
    if (Ol(e)) throw Error(o(485));
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
      M.T !== null ? a(!0) : f.isTransition = !1, r(f), a = t.pending, a === null ? (f.next = t.pending = f, Ud(t, f)) : (f.next = a.next, t.pending = a.next = f);
    }
  }
  function Ud(e, t) {
    var a = t.action, r = t.payload, s = e.state;
    if (t.isTransition) {
      var f = M.T, y = {};
      M.T = y;
      try {
        var S = a(s, r), T = M.S;
        T !== null && T(y, S), Ld(e, t, S);
      } catch (N) {
        Ys(e, t, N);
      } finally {
        M.T = f;
      }
    } else
      try {
        f = a(s, r), Ld(e, t, f);
      } catch (N) {
        Ys(e, t, N);
      }
  }
  function Ld(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(r) {
        jd(e, t, r);
      },
      function(r) {
        return Ys(e, t, r);
      }
    ) : jd(e, t, a);
  }
  function jd(e, t, a) {
    t.status = "fulfilled", t.value = a, qd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ud(e, a)));
  }
  function Ys(e, t, a) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        t.status = "rejected", t.reason = a, qd(t), t = t.next;
      while (t !== r);
    }
    e.action = null;
  }
  function qd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Bd(e, t) {
    return t;
  }
  function Hd(e, t) {
    if (He) {
      var a = Ze.formState;
      if (a !== null) {
        e: {
          var r = Re;
          if (He) {
            if (nt) {
              t: {
                for (var s = nt, f = xn; s.nodeType !== 8; ) {
                  if (!f) {
                    s = null;
                    break t;
                  }
                  if (s = gn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                f = s.data, s = f === "F!" || f === "F" ? s : null;
              }
              if (s) {
                nt = gn(
                  s.nextSibling
                ), r = s.data === "F!";
                break e;
              }
            }
            Na(r);
          }
          r = !1;
        }
        r && (t = a[0]);
      }
    }
    return a = Ot(), a.memoizedState = a.baseState = t, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bd,
      lastRenderedState: t
    }, a.queue = r, a = lp.bind(
      null,
      Re,
      r
    ), r.dispatch = a, r = Gs(!1), f = Ws.bind(
      null,
      Re,
      !1,
      r.queue
    ), r = Ot(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, r.queue = s, a = r0.bind(
      null,
      Re,
      s,
      f,
      a
    ), s.dispatch = a, r.memoizedState = e, [t, a, !1];
  }
  function Vd(e) {
    var t = ot();
    return Qd(t, Ge, e);
  }
  function Qd(e, t, a) {
    if (t = Fs(
      e,
      t,
      Bd
    )[0], e = Rl(jn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var r = mr(t);
      } catch (y) {
        throw y === sr ? Tl : y;
      }
    else r = t;
    t = ot();
    var s = t.queue, f = s.dispatch;
    return a !== t.memoizedState && (Re.flags |= 2048, gi(
      9,
      Nl(),
      l0.bind(null, s, a),
      null
    )), [r, f, e];
  }
  function l0(e, t) {
    e.action = t;
  }
  function Fd(e) {
    var t = ot(), a = Ge;
    if (a !== null)
      return Qd(t, a, e);
    ot(), t = t.memoizedState, a = ot();
    var r = a.queue.dispatch;
    return a.memoizedState = e, [t, r, !1];
  }
  function gi(e, t, a, r) {
    return e = { tag: e, create: a, deps: r, inst: t, next: null }, t = Re.updateQueue, t === null && (t = Vs(), Re.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (r = a.next, a.next = e, e.next = r, t.lastEffect = e), e;
  }
  function Nl() {
    return { destroy: void 0, resource: void 0 };
  }
  function Pd() {
    return ot().memoizedState;
  }
  function Ml(e, t, a, r) {
    var s = Ot();
    r = r === void 0 ? null : r, Re.flags |= e, s.memoizedState = gi(
      1 | t,
      Nl(),
      a,
      r
    );
  }
  function hr(e, t, a, r) {
    var s = ot();
    r = r === void 0 ? null : r;
    var f = s.memoizedState.inst;
    Ge !== null && r !== null && Ls(r, Ge.memoizedState.deps) ? s.memoizedState = gi(t, f, a, r) : (Re.flags |= e, s.memoizedState = gi(
      1 | t,
      f,
      a,
      r
    ));
  }
  function Gd(e, t) {
    Ml(8390656, 8, e, t);
  }
  function Yd(e, t) {
    hr(2048, 8, e, t);
  }
  function Kd(e, t) {
    return hr(4, 2, e, t);
  }
  function Xd(e, t) {
    return hr(4, 4, e, t);
  }
  function Zd(e, t) {
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
  function Jd(e, t, a) {
    a = a != null ? a.concat([e]) : null, hr(4, 4, Zd.bind(null, t, e), a);
  }
  function Ks() {
  }
  function Wd(e, t) {
    var a = ot();
    t = t === void 0 ? null : t;
    var r = a.memoizedState;
    return t !== null && Ls(t, r[1]) ? r[0] : (a.memoizedState = [e, t], e);
  }
  function $d(e, t) {
    var a = ot();
    t = t === void 0 ? null : t;
    var r = a.memoizedState;
    if (t !== null && Ls(t, r[1]))
      return r[0];
    if (r = e(), Ia) {
      ye(!0);
      try {
        e();
      } finally {
        ye(!1);
      }
    }
    return a.memoizedState = [r, t], r;
  }
  function Xs(e, t, a) {
    return a === void 0 || (ta & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = nm(), Re.lanes |= e, sa |= e, a);
  }
  function ep(e, t, a, r) {
    return Ft(a, t) ? a : pi.current !== null ? (e = Xs(e, a, r), Ft(e, t) || (mt = !0), e) : (ta & 42) === 0 ? (mt = !0, e.memoizedState = a) : (e = nm(), Re.lanes |= e, sa |= e, t);
  }
  function tp(e, t, a, r, s) {
    var f = G.p;
    G.p = f !== 0 && 8 > f ? f : 8;
    var y = M.T, S = {};
    M.T = S, Ws(e, !1, t, a);
    try {
      var T = s(), N = M.S;
      if (N !== null && N(S, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var H = n0(
          T,
          r
        );
        gr(
          e,
          t,
          H,
          Xt(e)
        );
      } else
        gr(
          e,
          t,
          r,
          Xt(e)
        );
    } catch (F) {
      gr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: F },
        Xt()
      );
    } finally {
      G.p = f, M.T = y;
    }
  }
  function o0() {
  }
  function Zs(e, t, a, r) {
    if (e.tag !== 5) throw Error(o(476));
    var s = np(e).queue;
    tp(
      e,
      s,
      t,
      Q,
      a === null ? o0 : function() {
        return ap(e), a(r);
      }
    );
  }
  function np(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jn,
        lastRenderedState: Q
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
        lastRenderedReducer: jn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function ap(e) {
    var t = np(e).next.queue;
    gr(e, t, {}, Xt());
  }
  function Js() {
    return wt(_r);
  }
  function ip() {
    return ot().memoizedState;
  }
  function rp() {
    return ot().memoizedState;
  }
  function s0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Xt();
          e = $n(a);
          var r = ea(t, e, a);
          r !== null && (Zt(r, t, a), cr(r, t, a)), t = { cache: ks() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function u0(e, t, a) {
    var r = Xt();
    a = {
      lane: r,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ol(e) ? op(t, a) : (a = ys(e, t, a, r), a !== null && (Zt(a, e, r), sp(a, t, r)));
  }
  function lp(e, t, a) {
    var r = Xt();
    gr(e, t, a, r);
  }
  function gr(e, t, a, r) {
    var s = {
      lane: r,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ol(e)) op(t, s);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var y = t.lastRenderedState, S = f(y, a);
          if (s.hasEagerState = !0, s.eagerState = S, Ft(S, y))
            return gl(e, t, s, 0), Ze === null && hl(), !1;
        } catch {
        } finally {
        }
      if (a = ys(e, t, s, r), a !== null)
        return Zt(a, e, r), sp(a, t, r), !0;
    }
    return !1;
  }
  function Ws(e, t, a, r) {
    if (r = {
      lane: 2,
      revertLane: Ru(),
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ol(e)) {
      if (t) throw Error(o(479));
    } else
      t = ys(
        e,
        a,
        r,
        2
      ), t !== null && Zt(t, e, 2);
  }
  function Ol(e) {
    var t = e.alternate;
    return e === Re || t !== null && t === Re;
  }
  function op(e, t) {
    mi = kl = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function sp(e, t, a) {
    if ((a & 4194048) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, a |= r, t.lanes = a, gf(e, a);
    }
  }
  var _l = {
    readContext: wt,
    use: zl,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useLayoutEffect: it,
    useInsertionEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useSyncExternalStore: it,
    useId: it,
    useHostTransitionStatus: it,
    useFormState: it,
    useActionState: it,
    useOptimistic: it,
    useMemoCache: it,
    useCacheRefresh: it
  }, up = {
    readContext: wt,
    use: zl,
    useCallback: function(e, t) {
      return Ot().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: wt,
    useEffect: Gd,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Ml(
        4194308,
        4,
        Zd.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Ml(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ml(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Ot();
      t = t === void 0 ? null : t;
      var r = e();
      if (Ia) {
        ye(!0);
        try {
          e();
        } finally {
          ye(!1);
        }
      }
      return a.memoizedState = [r, t], r;
    },
    useReducer: function(e, t, a) {
      var r = Ot();
      if (a !== void 0) {
        var s = a(t);
        if (Ia) {
          ye(!0);
          try {
            a(t);
          } finally {
            ye(!1);
          }
        }
      } else s = t;
      return r.memoizedState = r.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, r.queue = e, e = e.dispatch = u0.bind(
        null,
        Re,
        e
      ), [r.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ot();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Gs(e);
      var t = e.queue, a = lp.bind(null, Re, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Ks,
    useDeferredValue: function(e, t) {
      var a = Ot();
      return Xs(a, e, t);
    },
    useTransition: function() {
      var e = Gs(!1);
      return e = tp.bind(
        null,
        Re,
        e.queue,
        !0,
        !1
      ), Ot().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var r = Re, s = Ot();
      if (He) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), Ze === null)
          throw Error(o(349));
        (je & 124) !== 0 || Rd(r, t, a);
      }
      s.memoizedState = a;
      var f = { value: a, getSnapshot: t };
      return s.queue = f, Gd(Md.bind(null, r, f, e), [
        e
      ]), r.flags |= 2048, gi(
        9,
        Nl(),
        Nd.bind(
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
      var e = Ot(), t = Ze.identifierPrefix;
      if (He) {
        var a = In, r = _n;
        a = (r & ~(1 << 32 - Se(r) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Dl++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = a0++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Js,
    useFormState: Hd,
    useActionState: Hd,
    useOptimistic: function(e) {
      var t = Ot();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ws.bind(
        null,
        Re,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Qs,
    useCacheRefresh: function() {
      return Ot().memoizedState = s0.bind(
        null,
        Re
      );
    }
  }, cp = {
    readContext: wt,
    use: zl,
    useCallback: Wd,
    useContext: wt,
    useEffect: Yd,
    useImperativeHandle: Jd,
    useInsertionEffect: Kd,
    useLayoutEffect: Xd,
    useMemo: $d,
    useReducer: Rl,
    useRef: Pd,
    useState: function() {
      return Rl(jn);
    },
    useDebugValue: Ks,
    useDeferredValue: function(e, t) {
      var a = ot();
      return ep(
        a,
        Ge.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Rl(jn)[0], t = ot().memoizedState;
      return [
        typeof e == "boolean" ? e : mr(e),
        t
      ];
    },
    useSyncExternalStore: zd,
    useId: ip,
    useHostTransitionStatus: Js,
    useFormState: Vd,
    useActionState: Vd,
    useOptimistic: function(e, t) {
      var a = ot();
      return Id(a, Ge, e, t);
    },
    useMemoCache: Qs,
    useCacheRefresh: rp
  }, c0 = {
    readContext: wt,
    use: zl,
    useCallback: Wd,
    useContext: wt,
    useEffect: Yd,
    useImperativeHandle: Jd,
    useInsertionEffect: Kd,
    useLayoutEffect: Xd,
    useMemo: $d,
    useReducer: Ps,
    useRef: Pd,
    useState: function() {
      return Ps(jn);
    },
    useDebugValue: Ks,
    useDeferredValue: function(e, t) {
      var a = ot();
      return Ge === null ? Xs(a, e, t) : ep(
        a,
        Ge.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ps(jn)[0], t = ot().memoizedState;
      return [
        typeof e == "boolean" ? e : mr(e),
        t
      ];
    },
    useSyncExternalStore: zd,
    useId: ip,
    useHostTransitionStatus: Js,
    useFormState: Fd,
    useActionState: Fd,
    useOptimistic: function(e, t) {
      var a = ot();
      return Ge !== null ? Id(a, Ge, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Qs,
    useCacheRefresh: rp
  }, yi = null, yr = 0;
  function Il(e) {
    var t = yr;
    return yr += 1, yi === null && (yi = []), xd(yi, e, t);
  }
  function br(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ul(e, t) {
    throw t.$$typeof === v ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function fp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function dp(e) {
    function t(k, E) {
      if (e) {
        var z = k.deletions;
        z === null ? (k.deletions = [E], k.flags |= 16) : z.push(E);
      }
    }
    function a(k, E) {
      if (!e) return null;
      for (; E !== null; )
        t(k, E), E = E.sibling;
      return null;
    }
    function r(k) {
      for (var E = /* @__PURE__ */ new Map(); k !== null; )
        k.key !== null ? E.set(k.key, k) : E.set(k.index, k), k = k.sibling;
      return E;
    }
    function s(k, E) {
      return k = On(k, E), k.index = 0, k.sibling = null, k;
    }
    function f(k, E, z) {
      return k.index = z, e ? (z = k.alternate, z !== null ? (z = z.index, z < E ? (k.flags |= 67108866, E) : z) : (k.flags |= 67108866, E)) : (k.flags |= 1048576, E);
    }
    function y(k) {
      return e && k.alternate === null && (k.flags |= 67108866), k;
    }
    function S(k, E, z, V) {
      return E === null || E.tag !== 6 ? (E = vs(z, k.mode, V), E.return = k, E) : (E = s(E, z), E.return = k, E);
    }
    function T(k, E, z, V) {
      var fe = z.type;
      return fe === D ? H(
        k,
        E,
        z.props.children,
        V,
        z.key
      ) : E !== null && (E.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === X && fp(fe) === E.type) ? (E = s(E, z.props), br(E, z), E.return = k, E) : (E = bl(
        z.type,
        z.key,
        z.props,
        null,
        k.mode,
        V
      ), br(E, z), E.return = k, E);
    }
    function N(k, E, z, V) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = Ss(z, k.mode, V), E.return = k, E) : (E = s(E, z.children || []), E.return = k, E);
    }
    function H(k, E, z, V, fe) {
      return E === null || E.tag !== 7 ? (E = ka(
        z,
        k.mode,
        V,
        fe
      ), E.return = k, E) : (E = s(E, z), E.return = k, E);
    }
    function F(k, E, z) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = vs(
          "" + E,
          k.mode,
          z
        ), E.return = k, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case w:
            return z = bl(
              E.type,
              E.key,
              E.props,
              null,
              k.mode,
              z
            ), br(z, E), z.return = k, z;
          case x:
            return E = Ss(
              E,
              k.mode,
              z
            ), E.return = k, E;
          case X:
            var V = E._init;
            return E = V(E._payload), F(k, E, z);
        }
        if (Y(E) || te(E))
          return E = ka(
            E,
            k.mode,
            z,
            null
          ), E.return = k, E;
        if (typeof E.then == "function")
          return F(k, Il(E), z);
        if (E.$$typeof === P)
          return F(
            k,
            Al(k, E),
            z
          );
        Ul(k, E);
      }
      return null;
    }
    function O(k, E, z, V) {
      var fe = E !== null ? E.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return fe !== null ? null : S(k, E, "" + z, V);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case w:
            return z.key === fe ? T(k, E, z, V) : null;
          case x:
            return z.key === fe ? N(k, E, z, V) : null;
          case X:
            return fe = z._init, z = fe(z._payload), O(k, E, z, V);
        }
        if (Y(z) || te(z))
          return fe !== null ? null : H(k, E, z, V, null);
        if (typeof z.then == "function")
          return O(
            k,
            E,
            Il(z),
            V
          );
        if (z.$$typeof === P)
          return O(
            k,
            E,
            Al(k, z),
            V
          );
        Ul(k, z);
      }
      return null;
    }
    function _(k, E, z, V, fe) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return k = k.get(z) || null, S(E, k, "" + V, fe);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case w:
            return k = k.get(
              V.key === null ? z : V.key
            ) || null, T(E, k, V, fe);
          case x:
            return k = k.get(
              V.key === null ? z : V.key
            ) || null, N(E, k, V, fe);
          case X:
            var Oe = V._init;
            return V = Oe(V._payload), _(
              k,
              E,
              z,
              V,
              fe
            );
        }
        if (Y(V) || te(V))
          return k = k.get(z) || null, H(E, k, V, fe, null);
        if (typeof V.then == "function")
          return _(
            k,
            E,
            z,
            Il(V),
            fe
          );
        if (V.$$typeof === P)
          return _(
            k,
            E,
            z,
            Al(E, V),
            fe
          );
        Ul(E, V);
      }
      return null;
    }
    function xe(k, E, z, V) {
      for (var fe = null, Oe = null, he = E, ve = E = 0, gt = null; he !== null && ve < z.length; ve++) {
        he.index > ve ? (gt = he, he = null) : gt = he.sibling;
        var Be = O(
          k,
          he,
          z[ve],
          V
        );
        if (Be === null) {
          he === null && (he = gt);
          break;
        }
        e && he && Be.alternate === null && t(k, he), E = f(Be, E, ve), Oe === null ? fe = Be : Oe.sibling = Be, Oe = Be, he = gt;
      }
      if (ve === z.length)
        return a(k, he), He && za(k, ve), fe;
      if (he === null) {
        for (; ve < z.length; ve++)
          he = F(k, z[ve], V), he !== null && (E = f(
            he,
            E,
            ve
          ), Oe === null ? fe = he : Oe.sibling = he, Oe = he);
        return He && za(k, ve), fe;
      }
      for (he = r(he); ve < z.length; ve++)
        gt = _(
          he,
          k,
          ve,
          z[ve],
          V
        ), gt !== null && (e && gt.alternate !== null && he.delete(
          gt.key === null ? ve : gt.key
        ), E = f(
          gt,
          E,
          ve
        ), Oe === null ? fe = gt : Oe.sibling = gt, Oe = gt);
      return e && he.forEach(function(ya) {
        return t(k, ya);
      }), He && za(k, ve), fe;
    }
    function be(k, E, z, V) {
      if (z == null) throw Error(o(151));
      for (var fe = null, Oe = null, he = E, ve = E = 0, gt = null, Be = z.next(); he !== null && !Be.done; ve++, Be = z.next()) {
        he.index > ve ? (gt = he, he = null) : gt = he.sibling;
        var ya = O(k, he, Be.value, V);
        if (ya === null) {
          he === null && (he = gt);
          break;
        }
        e && he && ya.alternate === null && t(k, he), E = f(ya, E, ve), Oe === null ? fe = ya : Oe.sibling = ya, Oe = ya, he = gt;
      }
      if (Be.done)
        return a(k, he), He && za(k, ve), fe;
      if (he === null) {
        for (; !Be.done; ve++, Be = z.next())
          Be = F(k, Be.value, V), Be !== null && (E = f(Be, E, ve), Oe === null ? fe = Be : Oe.sibling = Be, Oe = Be);
        return He && za(k, ve), fe;
      }
      for (he = r(he); !Be.done; ve++, Be = z.next())
        Be = _(he, k, ve, Be.value, V), Be !== null && (e && Be.alternate !== null && he.delete(Be.key === null ? ve : Be.key), E = f(Be, E, ve), Oe === null ? fe = Be : Oe.sibling = Be, Oe = Be);
      return e && he.forEach(function(fv) {
        return t(k, fv);
      }), He && za(k, ve), fe;
    }
    function Ke(k, E, z, V) {
      if (typeof z == "object" && z !== null && z.type === D && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case w:
            e: {
              for (var fe = z.key; E !== null; ) {
                if (E.key === fe) {
                  if (fe = z.type, fe === D) {
                    if (E.tag === 7) {
                      a(
                        k,
                        E.sibling
                      ), V = s(
                        E,
                        z.props.children
                      ), V.return = k, k = V;
                      break e;
                    }
                  } else if (E.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === X && fp(fe) === E.type) {
                    a(
                      k,
                      E.sibling
                    ), V = s(E, z.props), br(V, z), V.return = k, k = V;
                    break e;
                  }
                  a(k, E);
                  break;
                } else t(k, E);
                E = E.sibling;
              }
              z.type === D ? (V = ka(
                z.props.children,
                k.mode,
                V,
                z.key
              ), V.return = k, k = V) : (V = bl(
                z.type,
                z.key,
                z.props,
                null,
                k.mode,
                V
              ), br(V, z), V.return = k, k = V);
            }
            return y(k);
          case x:
            e: {
              for (fe = z.key; E !== null; ) {
                if (E.key === fe)
                  if (E.tag === 4 && E.stateNode.containerInfo === z.containerInfo && E.stateNode.implementation === z.implementation) {
                    a(
                      k,
                      E.sibling
                    ), V = s(E, z.children || []), V.return = k, k = V;
                    break e;
                  } else {
                    a(k, E);
                    break;
                  }
                else t(k, E);
                E = E.sibling;
              }
              V = Ss(z, k.mode, V), V.return = k, k = V;
            }
            return y(k);
          case X:
            return fe = z._init, z = fe(z._payload), Ke(
              k,
              E,
              z,
              V
            );
        }
        if (Y(z))
          return xe(
            k,
            E,
            z,
            V
          );
        if (te(z)) {
          if (fe = te(z), typeof fe != "function") throw Error(o(150));
          return z = fe.call(z), be(
            k,
            E,
            z,
            V
          );
        }
        if (typeof z.then == "function")
          return Ke(
            k,
            E,
            Il(z),
            V
          );
        if (z.$$typeof === P)
          return Ke(
            k,
            E,
            Al(k, z),
            V
          );
        Ul(k, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, E !== null && E.tag === 6 ? (a(k, E.sibling), V = s(E, z), V.return = k, k = V) : (a(k, E), V = vs(z, k.mode, V), V.return = k, k = V), y(k)) : a(k, E);
    }
    return function(k, E, z, V) {
      try {
        yr = 0;
        var fe = Ke(
          k,
          E,
          z,
          V
        );
        return yi = null, fe;
      } catch (he) {
        if (he === sr || he === Tl) throw he;
        var Oe = Pt(29, he, null, k.mode);
        return Oe.lanes = V, Oe.return = k, Oe;
      } finally {
      }
    };
  }
  var bi = dp(!0), pp = dp(!1), sn = q(null), An = null;
  function na(e) {
    var t = e.alternate;
    A(ct, ct.current & 1), A(sn, e), An === null && (t === null || pi.current !== null || t.memoizedState !== null) && (An = e);
  }
  function mp(e) {
    if (e.tag === 22) {
      if (A(ct, ct.current), A(sn, e), An === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (An = e);
      }
    } else aa();
  }
  function aa() {
    A(ct, ct.current), A(sn, sn.current);
  }
  function qn(e) {
    $(sn), An === e && (An = null), $(ct);
  }
  var ct = q(0);
  function Ll(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Vu(a)))
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
  function $s(e, t, a, r) {
    t = e.memoizedState, a = a(r, t), a = a == null ? t : h({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var eu = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var r = Xt(), s = $n(r);
      s.payload = t, a != null && (s.callback = a), t = ea(e, s, r), t !== null && (Zt(t, e, r), cr(t, e, r));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var r = Xt(), s = $n(r);
      s.tag = 1, s.payload = t, a != null && (s.callback = a), t = ea(e, s, r), t !== null && (Zt(t, e, r), cr(t, e, r));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Xt(), r = $n(a);
      r.tag = 2, t != null && (r.callback = t), t = ea(e, r, a), t !== null && (Zt(t, e, a), cr(t, e, a));
    }
  };
  function hp(e, t, a, r, s, f, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, f, y) : t.prototype && t.prototype.isPureReactComponent ? !er(a, r) || !er(s, f) : !0;
  }
  function gp(e, t, a, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, r), t.state !== e && eu.enqueueReplaceState(t, t.state, null);
  }
  function Ua(e, t) {
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
  var jl = typeof reportError == "function" ? reportError : function(e) {
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
  function yp(e) {
    jl(e);
  }
  function bp(e) {
    console.error(e);
  }
  function vp(e) {
    jl(e);
  }
  function ql(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Sp(e, t, a) {
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
  function tu(e, t, a) {
    return a = $n(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      ql(e, t);
    }, a;
  }
  function xp(e) {
    return e = $n(e), e.tag = 3, e;
  }
  function Ap(e, t, a, r) {
    var s = a.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = r.value;
      e.payload = function() {
        return s(f);
      }, e.callback = function() {
        Sp(t, a, r);
      };
    }
    var y = a.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
      Sp(t, a, r), typeof s != "function" && (ua === null ? ua = /* @__PURE__ */ new Set([this]) : ua.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function f0(e, t, a, r, s) {
    if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (t = a.alternate, t !== null && rr(
        t,
        a,
        s,
        !0
      ), a = sn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return An === null ? Eu() : a.alternate === null && at === 0 && (at = 3), a.flags &= -257, a.flags |= 65536, a.lanes = s, r === Rs ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), ku(e, r, s)), !1;
          case 22:
            return a.flags |= 65536, r === Rs ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : a.add(r)), ku(e, r, s)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return ku(e, r, s), Eu(), !1;
    }
    if (He)
      return t = sn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, r !== ws && (e = Error(o(422), { cause: r }), ir(an(e, a)))) : (r !== ws && (t = Error(o(423), {
        cause: r
      }), ir(
        an(t, a)
      )), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, r = an(r, a), s = tu(
        e.stateNode,
        r,
        s
      ), Os(e, s), at !== 4 && (at = 2)), !1;
    var f = Error(o(520), { cause: r });
    if (f = an(f, a), Er === null ? Er = [f] : Er.push(f), at !== 4 && (at = 2), t === null) return !0;
    r = an(r, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = s & -s, a.lanes |= e, e = tu(a.stateNode, r, e), Os(a, e), !1;
        case 1:
          if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ua === null || !ua.has(f))))
            return a.flags |= 65536, s &= -s, a.lanes |= s, s = xp(s), Ap(
              s,
              e,
              a,
              r
            ), Os(a, s), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var wp = Error(o(461)), mt = !1;
  function bt(e, t, a, r) {
    t.child = e === null ? pp(t, null, a, r) : bi(
      t,
      e.child,
      a,
      r
    );
  }
  function Tp(e, t, a, r, s) {
    a = a.render;
    var f = t.ref;
    if ("ref" in r) {
      var y = {};
      for (var S in r)
        S !== "ref" && (y[S] = r[S]);
    } else y = r;
    return Oa(t), r = js(
      e,
      t,
      a,
      y,
      f,
      s
    ), S = qs(), e !== null && !mt ? (Bs(e, t, s), Bn(e, t, s)) : (He && S && xs(t), t.flags |= 1, bt(e, t, r, s), t.child);
  }
  function Ep(e, t, a, r, s) {
    if (e === null) {
      var f = a.type;
      return typeof f == "function" && !bs(f) && f.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = f, Cp(
        e,
        t,
        f,
        r,
        s
      )) : (e = bl(
        a.type,
        null,
        r,
        t,
        t.mode,
        s
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !uu(e, s)) {
      var y = f.memoizedProps;
      if (a = a.compare, a = a !== null ? a : er, a(y, r) && e.ref === t.ref)
        return Bn(e, t, s);
    }
    return t.flags |= 1, e = On(f, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Cp(e, t, a, r, s) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (er(f, r) && e.ref === t.ref)
        if (mt = !1, t.pendingProps = r = f, uu(e, s))
          (e.flags & 131072) !== 0 && (mt = !0);
        else
          return t.lanes = e.lanes, Bn(e, t, s);
    }
    return nu(
      e,
      t,
      a,
      r,
      s
    );
  }
  function kp(e, t, a) {
    var r = t.pendingProps, s = r.children, f = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (r = f !== null ? f.baseLanes | a : a, e !== null) {
          for (s = t.child = e.child, f = 0; s !== null; )
            f = f | s.lanes | s.childLanes, s = s.sibling;
          t.childLanes = f & ~r;
        } else t.childLanes = 0, t.child = null;
        return Dp(
          e,
          t,
          r,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && wl(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? Cd(t, f) : Is(), mp(t);
      else
        return t.lanes = t.childLanes = 536870912, Dp(
          e,
          t,
          f !== null ? f.baseLanes | a : a,
          a
        );
    } else
      f !== null ? (wl(t, f.cachePool), Cd(t, f), aa(), t.memoizedState = null) : (e !== null && wl(t, null), Is(), aa());
    return bt(e, t, s, a), t.child;
  }
  function Dp(e, t, a, r) {
    var s = zs();
    return s = s === null ? null : { parent: ut._currentValue, pool: s }, t.memoizedState = {
      baseLanes: a,
      cachePool: s
    }, e !== null && wl(t, null), Is(), mp(t), e !== null && rr(e, t, r, !0), null;
  }
  function Bl(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function nu(e, t, a, r, s) {
    return Oa(t), a = js(
      e,
      t,
      a,
      r,
      void 0,
      s
    ), r = qs(), e !== null && !mt ? (Bs(e, t, s), Bn(e, t, s)) : (He && r && xs(t), t.flags |= 1, bt(e, t, a, s), t.child);
  }
  function zp(e, t, a, r, s, f) {
    return Oa(t), t.updateQueue = null, a = Dd(
      t,
      r,
      a,
      s
    ), kd(e), r = qs(), e !== null && !mt ? (Bs(e, t, f), Bn(e, t, f)) : (He && r && xs(t), t.flags |= 1, bt(e, t, a, f), t.child);
  }
  function Rp(e, t, a, r, s) {
    if (Oa(t), t.stateNode === null) {
      var f = si, y = a.contextType;
      typeof y == "object" && y !== null && (f = wt(y)), f = new a(r, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = eu, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = r, f.state = t.memoizedState, f.refs = {}, Ns(t), y = a.contextType, f.context = typeof y == "object" && y !== null ? wt(y) : si, f.state = t.memoizedState, y = a.getDerivedStateFromProps, typeof y == "function" && ($s(
        t,
        a,
        y,
        r
      ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (y = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), y !== f.state && eu.enqueueReplaceState(f, f.state, null), dr(t, r, f, s), fr(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      f = t.stateNode;
      var S = t.memoizedProps, T = Ua(a, S);
      f.props = T;
      var N = f.context, H = a.contextType;
      y = si, typeof H == "object" && H !== null && (y = wt(H));
      var F = a.getDerivedStateFromProps;
      H = typeof F == "function" || typeof f.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, H || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S || N !== y) && gp(
        t,
        f,
        r,
        y
      ), Wn = !1;
      var O = t.memoizedState;
      f.state = O, dr(t, r, f, s), fr(), N = t.memoizedState, S || O !== N || Wn ? (typeof F == "function" && ($s(
        t,
        a,
        F,
        r
      ), N = t.memoizedState), (T = Wn || hp(
        t,
        a,
        T,
        r,
        O,
        N,
        y
      )) ? (H || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = N), f.props = r, f.state = N, f.context = y, r = T) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      f = t.stateNode, Ms(e, t), y = t.memoizedProps, H = Ua(a, y), f.props = H, F = t.pendingProps, O = f.context, N = a.contextType, T = si, typeof N == "object" && N !== null && (T = wt(N)), S = a.getDerivedStateFromProps, (N = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== F || O !== T) && gp(
        t,
        f,
        r,
        T
      ), Wn = !1, O = t.memoizedState, f.state = O, dr(t, r, f, s), fr();
      var _ = t.memoizedState;
      y !== F || O !== _ || Wn || e !== null && e.dependencies !== null && xl(e.dependencies) ? (typeof S == "function" && ($s(
        t,
        a,
        S,
        r
      ), _ = t.memoizedState), (H = Wn || hp(
        t,
        a,
        H,
        r,
        O,
        _,
        T
      ) || e !== null && e.dependencies !== null && xl(e.dependencies)) ? (N || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, _, T), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        r,
        _,
        T
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), f.props = r, f.state = _, f.context = T, r = H) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return f = r, Bl(e, t), r = (t.flags & 128) !== 0, f || r ? (f = t.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && r ? (t.child = bi(
      t,
      e.child,
      null,
      s
    ), t.child = bi(
      t,
      null,
      a,
      s
    )) : bt(e, t, a, s), t.memoizedState = f.state, e = t.child) : e = Bn(
      e,
      t,
      s
    ), e;
  }
  function Np(e, t, a, r) {
    return ar(), t.flags |= 256, bt(e, t, a, r), t.child;
  }
  var au = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function iu(e) {
    return { baseLanes: e, cachePool: bd() };
  }
  function ru(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= un), e;
  }
  function Mp(e, t, a) {
    var r = t.pendingProps, s = !1, f = (t.flags & 128) !== 0, y;
    if ((y = f) || (y = e !== null && e.memoizedState === null ? !1 : (ct.current & 2) !== 0), y && (s = !0, t.flags &= -129), y = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (He) {
        if (s ? na(t) : aa(), He) {
          var S = nt, T;
          if (T = S) {
            e: {
              for (T = S, S = xn; T.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break e;
                }
                if (T = gn(
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
              treeContext: Da !== null ? { id: _n, overflow: In } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, T = Pt(
              18,
              null,
              null,
              0
            ), T.stateNode = S, T.return = t, t.child = T, Dt = t, nt = null, T = !0) : T = !1;
          }
          T || Na(t);
        }
        if (S = t.memoizedState, S !== null && (S = S.dehydrated, S !== null))
          return Vu(S) ? t.lanes = 32 : t.lanes = 536870912, null;
        qn(t);
      }
      return S = r.children, r = r.fallback, s ? (aa(), s = t.mode, S = Hl(
        { mode: "hidden", children: S },
        s
      ), r = ka(
        r,
        s,
        a,
        null
      ), S.return = t, r.return = t, S.sibling = r, t.child = S, s = t.child, s.memoizedState = iu(a), s.childLanes = ru(
        e,
        y,
        a
      ), t.memoizedState = au, r) : (na(t), lu(t, S));
    }
    if (T = e.memoizedState, T !== null && (S = T.dehydrated, S !== null)) {
      if (f)
        t.flags & 256 ? (na(t), t.flags &= -257, t = ou(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (aa(), t.child = e.child, t.flags |= 128, t = null) : (aa(), s = r.fallback, S = t.mode, r = Hl(
          { mode: "visible", children: r.children },
          S
        ), s = ka(
          s,
          S,
          a,
          null
        ), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, bi(
          t,
          e.child,
          null,
          a
        ), r = t.child, r.memoizedState = iu(a), r.childLanes = ru(
          e,
          y,
          a
        ), t.memoizedState = au, t = s);
      else if (na(t), Vu(S)) {
        if (y = S.nextSibling && S.nextSibling.dataset, y) var N = y.dgst;
        y = N, r = Error(o(419)), r.stack = "", r.digest = y, ir({ value: r, source: null, stack: null }), t = ou(
          e,
          t,
          a
        );
      } else if (mt || rr(e, t, a, !1), y = (a & e.childLanes) !== 0, mt || y) {
        if (y = Ze, y !== null && (r = a & -a, r = (r & 42) !== 0 ? 1 : Qo(r), r = (r & (y.suspendedLanes | a)) !== 0 ? 0 : r, r !== 0 && r !== T.retryLane))
          throw T.retryLane = r, oi(e, r), Zt(y, e, r), wp;
        S.data === "$?" || Eu(), t = ou(
          e,
          t,
          a
        );
      } else
        S.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, nt = gn(
          S.nextSibling
        ), Dt = t, He = !0, Ra = null, xn = !1, e !== null && (ln[on++] = _n, ln[on++] = In, ln[on++] = Da, _n = e.id, In = e.overflow, Da = t), t = lu(
          t,
          r.children
        ), t.flags |= 4096);
      return t;
    }
    return s ? (aa(), s = r.fallback, S = t.mode, T = e.child, N = T.sibling, r = On(T, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = T.subtreeFlags & 65011712, N !== null ? s = On(N, s) : (s = ka(
      s,
      S,
      a,
      null
    ), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, S = e.child.memoizedState, S === null ? S = iu(a) : (T = S.cachePool, T !== null ? (N = ut._currentValue, T = T.parent !== N ? { parent: N, pool: N } : T) : T = bd(), S = {
      baseLanes: S.baseLanes | a,
      cachePool: T
    }), s.memoizedState = S, s.childLanes = ru(
      e,
      y,
      a
    ), t.memoizedState = au, r) : (na(t), a = e.child, e = a.sibling, a = On(a, {
      mode: "visible",
      children: r.children
    }), a.return = t, a.sibling = null, e !== null && (y = t.deletions, y === null ? (t.deletions = [e], t.flags |= 16) : y.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function lu(e, t) {
    return t = Hl(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Hl(e, t) {
    return e = Pt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function ou(e, t, a) {
    return bi(t, e.child, null, a), e = lu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Op(e, t, a) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Es(e.return, t, a);
  }
  function su(e, t, a, r, s) {
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
  function _p(e, t, a) {
    var r = t.pendingProps, s = r.revealOrder, f = r.tail;
    if (bt(e, t, r.children, a), r = ct.current, (r & 2) !== 0)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Op(e, a, t);
          else if (e.tag === 19)
            Op(e, a, t);
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
    switch (A(ct, r), s) {
      case "forwards":
        for (a = t.child, s = null; a !== null; )
          e = a.alternate, e !== null && Ll(e) === null && (s = a), a = a.sibling;
        a = s, a === null ? (s = t.child, t.child = null) : (s = a.sibling, a.sibling = null), su(
          t,
          !1,
          s,
          a,
          f
        );
        break;
      case "backwards":
        for (a = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Ll(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = a, a = s, s = e;
        }
        su(
          t,
          !0,
          a,
          null,
          f
        );
        break;
      case "together":
        su(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Bn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), sa |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (rr(
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
      for (e = t.child, a = On(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = On(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function uu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && xl(e)));
  }
  function d0(e, t, a) {
    switch (t.tag) {
      case 3:
        Me(t, t.stateNode.containerInfo), Jn(t, ut, e.memoizedState.cache), ar();
        break;
      case 27:
      case 5:
        yt(t);
        break;
      case 4:
        Me(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (na(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Mp(e, t, a) : (na(t), e = Bn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        na(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (r = (a & t.childLanes) !== 0, r || (rr(
          e,
          t,
          a,
          !1
        ), r = (a & t.childLanes) !== 0), s) {
          if (r)
            return _p(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), A(ct, ct.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, kp(e, t, a);
      case 24:
        Jn(t, ut, e.memoizedState.cache);
    }
    return Bn(e, t, a);
  }
  function Ip(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        mt = !0;
      else {
        if (!uu(e, a) && (t.flags & 128) === 0)
          return mt = !1, d0(
            e,
            t,
            a
          );
        mt = (e.flags & 131072) !== 0;
      }
    else
      mt = !1, He && (t.flags & 1048576) !== 0 && fd(t, Sl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var r = t.elementType, s = r._init;
          if (r = s(r._payload), t.type = r, typeof r == "function")
            bs(r) ? (e = Ua(r, e), t.tag = 1, t = Rp(
              null,
              t,
              r,
              e,
              a
            )) : (t.tag = 0, t = nu(
              null,
              t,
              r,
              e,
              a
            ));
          else {
            if (r != null) {
              if (s = r.$$typeof, s === J) {
                t.tag = 11, t = Tp(
                  null,
                  t,
                  r,
                  e,
                  a
                );
                break e;
              } else if (s === ae) {
                t.tag = 14, t = Ep(
                  null,
                  t,
                  r,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = ie(r) || r, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return nu(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return r = t.type, s = Ua(
          r,
          t.pendingProps
        ), Rp(
          e,
          t,
          r,
          s,
          a
        );
      case 3:
        e: {
          if (Me(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          r = t.pendingProps;
          var f = t.memoizedState;
          s = f.element, Ms(e, t), dr(t, r, null, a);
          var y = t.memoizedState;
          if (r = y.cache, Jn(t, ut, r), r !== f.cache && Cs(
            t,
            [ut],
            a,
            !0
          ), fr(), r = y.element, f.isDehydrated)
            if (f = {
              element: r,
              isDehydrated: !1,
              cache: y.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = Np(
                e,
                t,
                r,
                a
              );
              break e;
            } else if (r !== s) {
              s = an(
                Error(o(424)),
                t
              ), ir(s), t = Np(
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
              for (nt = gn(e.firstChild), Dt = t, He = !0, Ra = null, xn = !0, a = pp(
                t,
                null,
                r,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (ar(), r === s) {
              t = Bn(
                e,
                t,
                a
              );
              break e;
            }
            bt(
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
        return Bl(e, t), e === null ? (a = qm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : He || (a = t.type, e = t.pendingProps, r = to(
          se.current
        ).createElement(a), r[At] = t, r[Nt] = e, St(r, a, e), pt(r), t.stateNode = r) : t.memoizedState = qm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return yt(t), e === null && He && (r = t.stateNode = Um(
          t.type,
          t.pendingProps,
          se.current
        ), Dt = t, xn = !0, s = nt, da(t.type) ? (Qu = s, nt = gn(
          r.firstChild
        )) : nt = s), bt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Bl(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && He && ((s = r = nt) && (r = B0(
          r,
          t.type,
          t.pendingProps,
          xn
        ), r !== null ? (t.stateNode = r, Dt = t, nt = gn(
          r.firstChild
        ), xn = !1, s = !0) : s = !1), s || Na(t)), yt(t), s = t.type, f = t.pendingProps, y = e !== null ? e.memoizedProps : null, r = f.children, qu(s, f) ? r = null : y !== null && qu(s, y) && (t.flags |= 32), t.memoizedState !== null && (s = js(
          e,
          t,
          i0,
          null,
          null,
          a
        ), _r._currentValue = s), Bl(e, t), bt(e, t, r, a), t.child;
      case 6:
        return e === null && He && ((e = a = nt) && (a = H0(
          a,
          t.pendingProps,
          xn
        ), a !== null ? (t.stateNode = a, Dt = t, nt = null, e = !0) : e = !1), e || Na(t)), null;
      case 13:
        return Mp(e, t, a);
      case 4:
        return Me(
          t,
          t.stateNode.containerInfo
        ), r = t.pendingProps, e === null ? t.child = bi(
          t,
          null,
          r,
          a
        ) : bt(
          e,
          t,
          r,
          a
        ), t.child;
      case 11:
        return Tp(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return bt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return bt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return bt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return r = t.pendingProps, Jn(t, t.type, r.value), bt(
          e,
          t,
          r.children,
          a
        ), t.child;
      case 9:
        return s = t.type._context, r = t.pendingProps.children, Oa(t), s = wt(s), r = r(s), t.flags |= 1, bt(e, t, r, a), t.child;
      case 14:
        return Ep(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Cp(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return _p(e, t, a);
      case 31:
        return r = t.pendingProps, a = t.mode, r = {
          mode: r.mode,
          children: r.children
        }, e === null ? (a = Hl(
          r,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = On(e.child, r), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return kp(e, t, a);
      case 24:
        return Oa(t), r = wt(ut), e === null ? (s = zs(), s === null && (s = Ze, f = ks(), s.pooledCache = f, f.refCount++, f !== null && (s.pooledCacheLanes |= a), s = f), t.memoizedState = {
          parent: r,
          cache: s
        }, Ns(t), Jn(t, ut, s)) : ((e.lanes & a) !== 0 && (Ms(e, t), dr(t, null, null, a), fr()), s = e.memoizedState, f = t.memoizedState, s.parent !== r ? (s = { parent: r, cache: r }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), Jn(t, ut, r)) : (r = f.cache, Jn(t, ut, r), r !== s.cache && Cs(
          t,
          [ut],
          a,
          !0
        ))), bt(
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
  function Hn(e) {
    e.flags |= 4;
  }
  function Up(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Fm(t)) {
      if (t = sn.current, t !== null && ((je & 4194048) === je ? An !== null : (je & 62914560) !== je && (je & 536870912) === 0 || t !== An))
        throw ur = Rs, vd;
      e.flags |= 8192;
    }
  }
  function Vl(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? mf() : 536870912, e.lanes |= t, Ai |= t);
  }
  function vr(e, t) {
    if (!He)
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
  function et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, r = 0;
    if (t)
      for (var s = e.child; s !== null; )
        a |= s.lanes | s.childLanes, r |= s.subtreeFlags & 65011712, r |= s.flags & 65011712, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        a |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = a, t;
  }
  function p0(e, t, a) {
    var r = t.pendingProps;
    switch (As(t), t.tag) {
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
        return et(t), null;
      case 1:
        return et(t), null;
      case 3:
        return a = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Ln(ut), tt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (nr(t) ? Hn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, md())), et(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (Hn(t), a !== null ? (et(t), Up(t, a)) : (et(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Hn(t), et(t), Up(t, a)) : (et(t), t.flags &= -16777217) : (e.memoizedProps !== r && Hn(t), et(t), t.flags &= -16777217), null;
      case 27:
        xt(t), a = se.current;
        var s = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== r && Hn(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(o(166));
            return et(t), null;
          }
          e = ne.current, nr(t) ? dd(t) : (e = Um(s, r, a), t.stateNode = e, Hn(t));
        }
        return et(t), null;
      case 5:
        if (xt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && Hn(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(o(166));
            return et(t), null;
          }
          if (e = ne.current, nr(t))
            dd(t);
          else {
            switch (s = to(
              se.current
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
            e[At] = t, e[Nt] = r;
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
            e: switch (St(e, a, r), a) {
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
            e && Hn(t);
          }
        }
        return et(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== r && Hn(t);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = se.current, nr(t)) {
            if (e = t.stateNode, a = t.memoizedProps, r = null, s = Dt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  r = s.memoizedProps;
              }
            e[At] = t, e = !!(e.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || zm(e.nodeValue, a)), e || Na(t);
          } else
            e = to(e).createTextNode(
              r
            ), e[At] = t, t.stateNode = e;
        }
        return et(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = nr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
              s[At] = t;
            } else
              ar(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            et(t), s = !1;
          } else
            s = md(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (qn(t), t) : (qn(t), null);
        }
        if (qn(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = r !== null, e = e !== null && e.memoizedState !== null, a) {
          r = t.child, s = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (s = r.alternate.memoizedState.cachePool.pool);
          var f = null;
          r.memoizedState !== null && r.memoizedState.cachePool !== null && (f = r.memoizedState.cachePool.pool), f !== s && (r.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Vl(t, t.updateQueue), et(t), null;
      case 4:
        return tt(), e === null && _u(t.stateNode.containerInfo), et(t), null;
      case 10:
        return Ln(t.type), et(t), null;
      case 19:
        if ($(ct), s = t.memoizedState, s === null) return et(t), null;
        if (r = (t.flags & 128) !== 0, f = s.rendering, f === null)
          if (r) vr(s, !1);
          else {
            if (at !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = Ll(e), f !== null) {
                  for (t.flags |= 128, vr(s, !1), e = f.updateQueue, t.updateQueue = e, Vl(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    cd(a, e), a = a.sibling;
                  return A(
                    ct,
                    ct.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            s.tail !== null && me() > Pl && (t.flags |= 128, r = !0, vr(s, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = Ll(f), e !== null) {
              if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, Vl(t, e), vr(s, !0), s.tail === null && s.tailMode === "hidden" && !f.alternate && !He)
                return et(t), null;
            } else
              2 * me() - s.renderingStartTime > Pl && a !== 536870912 && (t.flags |= 128, r = !0, vr(s, !1), t.lanes = 4194304);
          s.isBackwards ? (f.sibling = t.child, t.child = f) : (e = s.last, e !== null ? e.sibling = f : t.child = f, s.last = f);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = me(), t.sibling = null, e = ct.current, A(ct, r ? e & 1 | 2 : e & 1), t) : (et(t), null);
      case 22:
      case 23:
        return qn(t), Us(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (et(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : et(t), a = t.updateQueue, a !== null && Vl(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== a && (t.flags |= 2048), e !== null && $(_a), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ln(ut), et(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function m0(e, t) {
    switch (As(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ln(ut), tt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return xt(t), null;
      case 13:
        if (qn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          ar();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return $(ct), null;
      case 4:
        return tt(), null;
      case 10:
        return Ln(t.type), null;
      case 22:
      case 23:
        return qn(t), Us(), e !== null && $(_a), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Ln(ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Lp(e, t) {
    switch (As(t), t.tag) {
      case 3:
        Ln(ut), tt();
        break;
      case 26:
      case 27:
      case 5:
        xt(t);
        break;
      case 4:
        tt();
        break;
      case 13:
        qn(t);
        break;
      case 19:
        $(ct);
        break;
      case 10:
        Ln(t.type);
        break;
      case 22:
      case 23:
        qn(t), Us(), e !== null && $(_a);
        break;
      case 24:
        Ln(ut);
    }
  }
  function Sr(e, t) {
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
      Xe(t, t.return, S);
    }
  }
  function ia(e, t, a) {
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
              var T = a, N = S;
              try {
                N();
              } catch (H) {
                Xe(
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
      Xe(t, t.return, H);
    }
  }
  function jp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Ed(t, a);
      } catch (r) {
        Xe(e, e.return, r);
      }
    }
  }
  function qp(e, t, a) {
    a.props = Ua(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (r) {
      Xe(e, t, r);
    }
  }
  function xr(e, t) {
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
      Xe(e, t, s);
    }
  }
  function wn(e, t) {
    var a = e.ref, r = e.refCleanup;
    if (a !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (s) {
          Xe(e, t, s);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (s) {
          Xe(e, t, s);
        }
      else a.current = null;
  }
  function Bp(e) {
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
      Xe(e, e.return, s);
    }
  }
  function cu(e, t, a) {
    try {
      var r = e.stateNode;
      I0(r, e.type, a, t), r[Nt] = t;
    } catch (s) {
      Xe(e, e.return, s);
    }
  }
  function Hp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && da(e.type) || e.tag === 4;
  }
  function fu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && da(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function du(e, t, a) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = eo));
    else if (r !== 4 && (r === 27 && da(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (du(e, t, a), e = e.sibling; e !== null; )
        du(e, t, a), e = e.sibling;
  }
  function Ql(e, t, a) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (r !== 4 && (r === 27 && da(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Ql(e, t, a), e = e.sibling; e !== null; )
        Ql(e, t, a), e = e.sibling;
  }
  function Vp(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var r = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      St(t, r, a), t[At] = e, t[Nt] = a;
    } catch (f) {
      Xe(e, e.return, f);
    }
  }
  var Vn = !1, rt = !1, pu = !1, Qp = typeof WeakSet == "function" ? WeakSet : Set, ht = null;
  function h0(e, t) {
    if (e = e.containerInfo, Lu = oo, e = ed(e), fs(e)) {
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
            var y = 0, S = -1, T = -1, N = 0, H = 0, F = e, O = null;
            t: for (; ; ) {
              for (var _; F !== a || s !== 0 && F.nodeType !== 3 || (S = y + s), F !== f || r !== 0 && F.nodeType !== 3 || (T = y + r), F.nodeType === 3 && (y += F.nodeValue.length), (_ = F.firstChild) !== null; )
                O = F, F = _;
              for (; ; ) {
                if (F === e) break t;
                if (O === a && ++N === s && (S = y), O === f && ++H === r && (T = y), (_ = F.nextSibling) !== null) break;
                F = O, O = F.parentNode;
              }
              F = _;
            }
            a = S === -1 || T === -1 ? null : { start: S, end: T };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ju = { focusedElem: e, selectionRange: a }, oo = !1, ht = t; ht !== null; )
      if (t = ht, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, ht = e;
      else
        for (; ht !== null; ) {
          switch (t = ht, f = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                e = void 0, a = t, s = f.memoizedProps, f = f.memoizedState, r = a.stateNode;
                try {
                  var xe = Ua(
                    a.type,
                    s,
                    a.elementType === a.type
                  );
                  e = r.getSnapshotBeforeUpdate(
                    xe,
                    f
                  ), r.__reactInternalSnapshotBeforeUpdate = e;
                } catch (be) {
                  Xe(
                    a,
                    a.return,
                    be
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Hu(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Hu(e);
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
            e.return = t.return, ht = e;
            break;
          }
          ht = t.return;
        }
  }
  function Fp(e, t, a) {
    var r = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ra(e, a), r & 4 && Sr(5, a);
        break;
      case 1:
        if (ra(e, a), r & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (y) {
              Xe(a, a.return, y);
            }
          else {
            var s = Ua(
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
              Xe(
                a,
                a.return,
                y
              );
            }
          }
        r & 64 && jp(a), r & 512 && xr(a, a.return);
        break;
      case 3:
        if (ra(e, a), r & 64 && (e = a.updateQueue, e !== null)) {
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
            Ed(e, t);
          } catch (y) {
            Xe(a, a.return, y);
          }
        }
        break;
      case 27:
        t === null && r & 4 && Vp(a);
      case 26:
      case 5:
        ra(e, a), t === null && r & 4 && Bp(a), r & 512 && xr(a, a.return);
        break;
      case 12:
        ra(e, a);
        break;
      case 13:
        ra(e, a), r & 4 && Yp(e, a), r & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = T0.bind(
          null,
          a
        ), V0(e, a))));
        break;
      case 22:
        if (r = a.memoizedState !== null || Vn, !r) {
          t = t !== null && t.memoizedState !== null || rt, s = Vn;
          var f = rt;
          Vn = r, (rt = t) && !f ? la(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : ra(e, a), Vn = s, rt = f;
        }
        break;
      case 30:
        break;
      default:
        ra(e, a);
    }
  }
  function Pp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Go(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var $e = null, _t = !1;
  function Qn(e, t, a) {
    for (a = a.child; a !== null; )
      Gp(e, t, a), a = a.sibling;
  }
  function Gp(e, t, a) {
    if (K && typeof K.onCommitFiberUnmount == "function")
      try {
        K.onCommitFiberUnmount(B, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        rt || wn(a, t), Qn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        rt || wn(a, t);
        var r = $e, s = _t;
        da(a.type) && ($e = a.stateNode, _t = !1), Qn(
          e,
          t,
          a
        ), Rr(a.stateNode), $e = r, _t = s;
        break;
      case 5:
        rt || wn(a, t);
      case 6:
        if (r = $e, s = _t, $e = null, Qn(
          e,
          t,
          a
        ), $e = r, _t = s, $e !== null)
          if (_t)
            try {
              ($e.nodeType === 9 ? $e.body : $e.nodeName === "HTML" ? $e.ownerDocument.body : $e).removeChild(a.stateNode);
            } catch (f) {
              Xe(
                a,
                t,
                f
              );
            }
          else
            try {
              $e.removeChild(a.stateNode);
            } catch (f) {
              Xe(
                a,
                t,
                f
              );
            }
        break;
      case 18:
        $e !== null && (_t ? (e = $e, _m(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), jr(e)) : _m($e, a.stateNode));
        break;
      case 4:
        r = $e, s = _t, $e = a.stateNode.containerInfo, _t = !0, Qn(
          e,
          t,
          a
        ), $e = r, _t = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        rt || ia(2, a, t), rt || ia(4, a, t), Qn(
          e,
          t,
          a
        );
        break;
      case 1:
        rt || (wn(a, t), r = a.stateNode, typeof r.componentWillUnmount == "function" && qp(
          a,
          t,
          r
        )), Qn(
          e,
          t,
          a
        );
        break;
      case 21:
        Qn(
          e,
          t,
          a
        );
        break;
      case 22:
        rt = (r = rt) || a.memoizedState !== null, Qn(
          e,
          t,
          a
        ), rt = r;
        break;
      default:
        Qn(
          e,
          t,
          a
        );
    }
  }
  function Yp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        jr(e);
      } catch (a) {
        Xe(t, t.return, a);
      }
  }
  function g0(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Qp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Qp()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function mu(e, t) {
    var a = g0(e);
    t.forEach(function(r) {
      var s = E0.bind(null, e, r);
      a.has(r) || (a.add(r), r.then(s, s));
    });
  }
  function Gt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var s = a[r], f = e, y = t, S = y;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (da(S.type)) {
                $e = S.stateNode, _t = !1;
                break e;
              }
              break;
            case 5:
              $e = S.stateNode, _t = !1;
              break e;
            case 3:
            case 4:
              $e = S.stateNode.containerInfo, _t = !0;
              break e;
          }
          S = S.return;
        }
        if ($e === null) throw Error(o(160));
        Gp(f, y, s), $e = null, _t = !1, f = s.alternate, f !== null && (f.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Kp(t, e), t = t.sibling;
  }
  var hn = null;
  function Kp(e, t) {
    var a = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Gt(t, e), Yt(e), r & 4 && (ia(3, e, e.return), Sr(3, e), ia(5, e, e.return));
        break;
      case 1:
        Gt(t, e), Yt(e), r & 512 && (rt || a === null || wn(a, a.return)), r & 64 && Vn && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
        break;
      case 26:
        var s = hn;
        if (Gt(t, e), Yt(e), r & 512 && (rt || a === null || wn(a, a.return)), r & 4) {
          var f = a !== null ? a.memoizedState : null;
          if (r = e.memoizedState, a === null)
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  r = e.type, a = e.memoizedProps, s = s.ownerDocument || s;
                  t: switch (r) {
                    case "title":
                      f = s.getElementsByTagName("title")[0], (!f || f[Pi] || f[At] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = s.createElement(r), s.head.insertBefore(
                        f,
                        s.querySelector("head > title")
                      )), St(f, r, a), f[At] = e, pt(f), r = f;
                      break e;
                    case "link":
                      var y = Vm(
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
                      f = s.createElement(r), St(f, r, a), s.head.appendChild(f);
                      break;
                    case "meta":
                      if (y = Vm(
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
                      f = s.createElement(r), St(f, r, a), s.head.appendChild(f);
                      break;
                    default:
                      throw Error(o(468, r));
                  }
                  f[At] = e, pt(f), r = f;
                }
                e.stateNode = r;
              } else
                Qm(
                  s,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Hm(
                s,
                r,
                e.memoizedProps
              );
          else
            f !== r ? (f === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : f.count--, r === null ? Qm(
              s,
              e.type,
              e.stateNode
            ) : Hm(
              s,
              r,
              e.memoizedProps
            )) : r === null && e.stateNode !== null && cu(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Gt(t, e), Yt(e), r & 512 && (rt || a === null || wn(a, a.return)), a !== null && r & 4 && cu(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Gt(t, e), Yt(e), r & 512 && (rt || a === null || wn(a, a.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            ei(s, "");
          } catch (_) {
            Xe(e, e.return, _);
          }
        }
        r & 4 && e.stateNode != null && (s = e.memoizedProps, cu(
          e,
          s,
          a !== null ? a.memoizedProps : s
        )), r & 1024 && (pu = !0);
        break;
      case 6:
        if (Gt(t, e), Yt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          r = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = r;
          } catch (_) {
            Xe(e, e.return, _);
          }
        }
        break;
      case 3:
        if (io = null, s = hn, hn = no(t.containerInfo), Gt(t, e), hn = s, Yt(e), r & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            jr(t.containerInfo);
          } catch (_) {
            Xe(e, e.return, _);
          }
        pu && (pu = !1, Xp(e));
        break;
      case 4:
        r = hn, hn = no(
          e.stateNode.containerInfo
        ), Gt(t, e), Yt(e), hn = r;
        break;
      case 12:
        Gt(t, e), Yt(e);
        break;
      case 13:
        Gt(t, e), Yt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Su = me()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, mu(e, r)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var T = a !== null && a.memoizedState !== null, N = Vn, H = rt;
        if (Vn = N || s, rt = H || T, Gt(t, e), rt = H, Vn = N, Yt(e), r & 8192)
          e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (a === null || T || Vn || rt || La(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                T = a = t;
                try {
                  if (f = T.stateNode, s)
                    y = f.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    S = T.stateNode;
                    var F = T.memoizedProps.style, O = F != null && F.hasOwnProperty("display") ? F.display : null;
                    S.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (_) {
                  Xe(T, T.return, _);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                T = t;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (_) {
                  Xe(T, T.return, _);
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
        r & 4 && (r = e.updateQueue, r !== null && (a = r.retryQueue, a !== null && (r.retryQueue = null, mu(e, a))));
        break;
      case 19:
        Gt(t, e), Yt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, mu(e, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Gt(t, e), Yt(e);
    }
  }
  function Yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, r = e.return; r !== null; ) {
          if (Hp(r)) {
            a = r;
            break;
          }
          r = r.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var s = a.stateNode, f = fu(e);
            Ql(e, f, s);
            break;
          case 5:
            var y = a.stateNode;
            a.flags & 32 && (ei(y, ""), a.flags &= -33);
            var S = fu(e);
            Ql(e, S, y);
            break;
          case 3:
          case 4:
            var T = a.stateNode.containerInfo, N = fu(e);
            du(
              e,
              N,
              T
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (H) {
        Xe(e, e.return, H);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Xp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ra(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Fp(e, t.alternate, t), t = t.sibling;
  }
  function La(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ia(4, t, t.return), La(t);
          break;
        case 1:
          wn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && qp(
            t,
            t.return,
            a
          ), La(t);
          break;
        case 27:
          Rr(t.stateNode);
        case 26:
        case 5:
          wn(t, t.return), La(t);
          break;
        case 22:
          t.memoizedState === null && La(t);
          break;
        case 30:
          La(t);
          break;
        default:
          La(t);
      }
      e = e.sibling;
    }
  }
  function la(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate, s = e, f = t, y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          la(
            s,
            f,
            a
          ), Sr(4, f);
          break;
        case 1:
          if (la(
            s,
            f,
            a
          ), r = f, s = r.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (N) {
              Xe(r, r.return, N);
            }
          if (r = f, s = r.updateQueue, s !== null) {
            var S = r.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Td(T[s], S);
            } catch (N) {
              Xe(r, r.return, N);
            }
          }
          a && y & 64 && jp(f), xr(f, f.return);
          break;
        case 27:
          Vp(f);
        case 26:
        case 5:
          la(
            s,
            f,
            a
          ), a && r === null && y & 4 && Bp(f), xr(f, f.return);
          break;
        case 12:
          la(
            s,
            f,
            a
          );
          break;
        case 13:
          la(
            s,
            f,
            a
          ), a && y & 4 && Yp(s, f);
          break;
        case 22:
          f.memoizedState === null && la(
            s,
            f,
            a
          ), xr(f, f.return);
          break;
        case 30:
          break;
        default:
          la(
            s,
            f,
            a
          );
      }
      t = t.sibling;
    }
  }
  function hu(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && lr(a));
  }
  function gu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && lr(e));
  }
  function Tn(e, t, a, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Zp(
          e,
          t,
          a,
          r
        ), t = t.sibling;
  }
  function Zp(e, t, a, r) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tn(
          e,
          t,
          a,
          r
        ), s & 2048 && Sr(9, t);
        break;
      case 1:
        Tn(
          e,
          t,
          a,
          r
        );
        break;
      case 3:
        Tn(
          e,
          t,
          a,
          r
        ), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && lr(e)));
        break;
      case 12:
        if (s & 2048) {
          Tn(
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
            Xe(t, t.return, T);
          }
        } else
          Tn(
            e,
            t,
            a,
            r
          );
        break;
      case 13:
        Tn(
          e,
          t,
          a,
          r
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, y = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? Tn(
          e,
          t,
          a,
          r
        ) : Ar(e, t) : f._visibility & 2 ? Tn(
          e,
          t,
          a,
          r
        ) : (f._visibility |= 2, vi(
          e,
          t,
          a,
          r,
          (t.subtreeFlags & 10256) !== 0
        )), s & 2048 && hu(y, t);
        break;
      case 24:
        Tn(
          e,
          t,
          a,
          r
        ), s & 2048 && gu(t.alternate, t);
        break;
      default:
        Tn(
          e,
          t,
          a,
          r
        );
    }
  }
  function vi(e, t, a, r, s) {
    for (s = s && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e, y = t, S = a, T = r, N = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          vi(
            f,
            y,
            S,
            T,
            s
          ), Sr(8, y);
          break;
        case 23:
          break;
        case 22:
          var H = y.stateNode;
          y.memoizedState !== null ? H._visibility & 2 ? vi(
            f,
            y,
            S,
            T,
            s
          ) : Ar(
            f,
            y
          ) : (H._visibility |= 2, vi(
            f,
            y,
            S,
            T,
            s
          )), s && N & 2048 && hu(
            y.alternate,
            y
          );
          break;
        case 24:
          vi(
            f,
            y,
            S,
            T,
            s
          ), s && N & 2048 && gu(y.alternate, y);
          break;
        default:
          vi(
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
  function Ar(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, r = t, s = r.flags;
        switch (r.tag) {
          case 22:
            Ar(a, r), s & 2048 && hu(
              r.alternate,
              r
            );
            break;
          case 24:
            Ar(a, r), s & 2048 && gu(r.alternate, r);
            break;
          default:
            Ar(a, r);
        }
        t = t.sibling;
      }
  }
  var wr = 8192;
  function Si(e) {
    if (e.subtreeFlags & wr)
      for (e = e.child; e !== null; )
        Jp(e), e = e.sibling;
  }
  function Jp(e) {
    switch (e.tag) {
      case 26:
        Si(e), e.flags & wr && e.memoizedState !== null && tv(
          hn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Si(e);
        break;
      case 3:
      case 4:
        var t = hn;
        hn = no(e.stateNode.containerInfo), Si(e), hn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = wr, wr = 16777216, Si(e), wr = t) : Si(e));
        break;
      default:
        Si(e);
    }
  }
  function Wp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Tr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          ht = r, em(
            r,
            e
          );
        }
      Wp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        $p(e), e = e.sibling;
  }
  function $p(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Tr(e), e.flags & 2048 && ia(9, e, e.return);
        break;
      case 3:
        Tr(e);
        break;
      case 12:
        Tr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Fl(e)) : Tr(e);
        break;
      default:
        Tr(e);
    }
  }
  function Fl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          ht = r, em(
            r,
            e
          );
        }
      Wp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, t, t.return), Fl(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Fl(t));
          break;
        default:
          Fl(t);
      }
      e = e.sibling;
    }
  }
  function em(e, t) {
    for (; ht !== null; ) {
      var a = ht;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var r = a.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          lr(a.memoizedState.cache);
      }
      if (r = a.child, r !== null) r.return = a, ht = r;
      else
        e: for (a = e; ht !== null; ) {
          r = ht;
          var s = r.sibling, f = r.return;
          if (Pp(r), r === a) {
            ht = null;
            break e;
          }
          if (s !== null) {
            s.return = f, ht = s;
            break e;
          }
          ht = f;
        }
    }
  }
  var y0 = {
    getCacheForType: function(e) {
      var t = wt(ut), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, b0 = typeof WeakMap == "function" ? WeakMap : Map, Fe = 0, Ze = null, _e = null, je = 0, Pe = 0, Kt = null, oa = !1, xi = !1, yu = !1, Fn = 0, at = 0, sa = 0, ja = 0, bu = 0, un = 0, Ai = 0, Er = null, It = null, vu = !1, Su = 0, Pl = 1 / 0, Gl = null, ua = null, vt = 0, ca = null, wi = null, Ti = 0, xu = 0, Au = null, tm = null, Cr = 0, wu = null;
  function Xt() {
    if ((Fe & 2) !== 0 && je !== 0)
      return je & -je;
    if (M.T !== null) {
      var e = fi;
      return e !== 0 ? e : Ru();
    }
    return yf();
  }
  function nm() {
    un === 0 && (un = (je & 536870912) === 0 || He ? pf() : 536870912);
    var e = sn.current;
    return e !== null && (e.flags |= 32), un;
  }
  function Zt(e, t, a) {
    (e === Ze && (Pe === 2 || Pe === 9) || e.cancelPendingCommit !== null) && (Ei(e, 0), fa(
      e,
      je,
      un,
      !1
    )), Fi(e, a), ((Fe & 2) === 0 || e !== Ze) && (e === Ze && ((Fe & 2) === 0 && (ja |= a), at === 4 && fa(
      e,
      je,
      un,
      !1
    )), En(e));
  }
  function am(e, t, a) {
    if ((Fe & 6) !== 0) throw Error(o(327));
    var r = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || en(e, t), s = r ? x0(e, t) : Cu(e, t, !0), f = r;
    do {
      if (s === 0) {
        xi && !r && fa(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, f && !v0(a)) {
          s = Cu(e, t, !1), f = !1;
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
              s = Er;
              var T = S.current.memoizedState.isDehydrated;
              if (T && (Ei(S, y).flags |= 256), y = Cu(
                S,
                y,
                !1
              ), y !== 2) {
                if (yu && !T) {
                  S.errorRecoveryDisabledLanes |= f, ja |= f, s = 4;
                  break e;
                }
                f = It, It = s, f !== null && (It === null ? It = f : It.push.apply(
                  It,
                  f
                ));
              }
              s = y;
            }
            if (f = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Ei(e, 0), fa(e, t, 0, !0);
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
              fa(
                r,
                t,
                un,
                !oa
              );
              break e;
            case 2:
              It = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (s = Su + 300 - me(), 10 < s)) {
            if (fa(
              r,
              t,
              un,
              !oa
            ), dt(r, 0, !0) !== 0) break e;
            r.timeoutHandle = Mm(
              im.bind(
                null,
                r,
                a,
                It,
                Gl,
                vu,
                t,
                un,
                ja,
                Ai,
                oa,
                f,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          im(
            r,
            a,
            It,
            Gl,
            vu,
            t,
            un,
            ja,
            Ai,
            oa,
            f,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    En(e);
  }
  function im(e, t, a, r, s, f, y, S, T, N, H, F, O, _) {
    if (e.timeoutHandle = -1, F = t.subtreeFlags, (F & 8192 || (F & 16785408) === 16785408) && (Or = { stylesheets: null, count: 0, unsuspend: ev }, Jp(t), F = nv(), F !== null)) {
      e.cancelPendingCommit = F(
        fm.bind(
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
          O,
          _
        )
      ), fa(e, f, y, !N);
      return;
    }
    fm(
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
  function v0(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var r = 0; r < a.length; r++) {
          var s = a[r], f = s.getSnapshot;
          s = s.value;
          try {
            if (!Ft(f(), s)) return !1;
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
  function fa(e, t, a, r) {
    t &= ~bu, t &= ~ja, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var f = 31 - Se(s), y = 1 << f;
      r[f] = -1, s &= ~y;
    }
    a !== 0 && hf(e, a, t);
  }
  function Yl() {
    return (Fe & 6) === 0 ? (kr(0), !1) : !0;
  }
  function Tu() {
    if (_e !== null) {
      if (Pe === 0)
        var e = _e.return;
      else
        e = _e, Un = Ma = null, Hs(e), yi = null, yr = 0, e = _e;
      for (; e !== null; )
        Lp(e.alternate, e), e = e.return;
      _e = null;
    }
  }
  function Ei(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, L0(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Tu(), Ze = e, _e = a = On(e.current, null), je = t, Pe = 0, Kt = null, oa = !1, xi = en(e, t), yu = !1, Ai = un = bu = ja = sa = at = 0, It = Er = null, vu = !1, (t & 8) !== 0 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var s = 31 - Se(r), f = 1 << s;
        t |= e[s], r &= ~f;
      }
    return Fn = t, hl(), a;
  }
  function rm(e, t) {
    Re = null, M.H = _l, t === sr || t === Tl ? (t = Ad(), Pe = 3) : t === vd ? (t = Ad(), Pe = 4) : Pe = t === wp ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Kt = t, _e === null && (at = 1, ql(
      e,
      an(t, e.current)
    ));
  }
  function lm() {
    var e = M.H;
    return M.H = _l, e === null ? _l : e;
  }
  function om() {
    var e = M.A;
    return M.A = y0, e;
  }
  function Eu() {
    at = 4, oa || (je & 4194048) !== je && sn.current !== null || (xi = !0), (sa & 134217727) === 0 && (ja & 134217727) === 0 || Ze === null || fa(
      Ze,
      je,
      un,
      !1
    );
  }
  function Cu(e, t, a) {
    var r = Fe;
    Fe |= 2;
    var s = lm(), f = om();
    (Ze !== e || je !== t) && (Gl = null, Ei(e, t)), t = !1;
    var y = at;
    e: do
      try {
        if (Pe !== 0 && _e !== null) {
          var S = _e, T = Kt;
          switch (Pe) {
            case 8:
              Tu(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              sn.current === null && (t = !0);
              var N = Pe;
              if (Pe = 0, Kt = null, Ci(e, S, T, N), a && xi) {
                y = 0;
                break e;
              }
              break;
            default:
              N = Pe, Pe = 0, Kt = null, Ci(e, S, T, N);
          }
        }
        S0(), y = at;
        break;
      } catch (H) {
        rm(e, H);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Un = Ma = null, Fe = r, M.H = s, M.A = f, _e === null && (Ze = null, je = 0, hl()), y;
  }
  function S0() {
    for (; _e !== null; ) sm(_e);
  }
  function x0(e, t) {
    var a = Fe;
    Fe |= 2;
    var r = lm(), s = om();
    Ze !== e || je !== t ? (Gl = null, Pl = me() + 500, Ei(e, t)) : xi = en(
      e,
      t
    );
    e: do
      try {
        if (Pe !== 0 && _e !== null) {
          t = _e;
          var f = Kt;
          t: switch (Pe) {
            case 1:
              Pe = 0, Kt = null, Ci(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (Sd(f)) {
                Pe = 0, Kt = null, um(t);
                break;
              }
              t = function() {
                Pe !== 2 && Pe !== 9 || Ze !== e || (Pe = 7), En(e);
              }, f.then(t, t);
              break e;
            case 3:
              Pe = 7;
              break e;
            case 4:
              Pe = 5;
              break e;
            case 7:
              Sd(f) ? (Pe = 0, Kt = null, um(t)) : (Pe = 0, Kt = null, Ci(e, t, f, 7));
              break;
            case 5:
              var y = null;
              switch (_e.tag) {
                case 26:
                  y = _e.memoizedState;
                case 5:
                case 27:
                  var S = _e;
                  if (!y || Fm(y)) {
                    Pe = 0, Kt = null;
                    var T = S.sibling;
                    if (T !== null) _e = T;
                    else {
                      var N = S.return;
                      N !== null ? (_e = N, Kl(N)) : _e = null;
                    }
                    break t;
                  }
              }
              Pe = 0, Kt = null, Ci(e, t, f, 5);
              break;
            case 6:
              Pe = 0, Kt = null, Ci(e, t, f, 6);
              break;
            case 8:
              Tu(), at = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        A0();
        break;
      } catch (H) {
        rm(e, H);
      }
    while (!0);
    return Un = Ma = null, M.H = r, M.A = s, Fe = a, _e !== null ? 0 : (Ze = null, je = 0, hl(), at);
  }
  function A0() {
    for (; _e !== null && !le(); )
      sm(_e);
  }
  function sm(e) {
    var t = Ip(e.alternate, e, Fn);
    e.memoizedProps = e.pendingProps, t === null ? Kl(e) : _e = t;
  }
  function um(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = zp(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          je
        );
        break;
      case 11:
        t = zp(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          je
        );
        break;
      case 5:
        Hs(t);
      default:
        Lp(a, t), t = _e = cd(t, Fn), t = Ip(a, t, Fn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Kl(e) : _e = t;
  }
  function Ci(e, t, a, r) {
    Un = Ma = null, Hs(t), yi = null, yr = 0;
    var s = t.return;
    try {
      if (f0(
        e,
        s,
        t,
        a,
        je
      )) {
        at = 1, ql(
          e,
          an(a, e.current)
        ), _e = null;
        return;
      }
    } catch (f) {
      if (s !== null) throw _e = s, f;
      at = 1, ql(
        e,
        an(a, e.current)
      ), _e = null;
      return;
    }
    t.flags & 32768 ? (He || r === 1 ? e = !0 : xi || (je & 536870912) !== 0 ? e = !1 : (oa = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = sn.current, r !== null && r.tag === 13 && (r.flags |= 16384))), cm(t, e)) : Kl(t);
  }
  function Kl(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        cm(
          t,
          oa
        );
        return;
      }
      e = t.return;
      var a = p0(
        t.alternate,
        t,
        Fn
      );
      if (a !== null) {
        _e = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    at === 0 && (at = 5);
  }
  function cm(e, t) {
    do {
      var a = m0(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, _e = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        _e = e;
        return;
      }
      _e = e = a;
    } while (e !== null);
    at = 6, _e = null;
  }
  function fm(e, t, a, r, s, f, y, S, T) {
    e.cancelPendingCommit = null;
    do
      Xl();
    while (vt !== 0);
    if ((Fe & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (f = t.lanes | t.childLanes, f |= gs, eb(
        e,
        a,
        f,
        y,
        S,
        T
      ), e === Ze && (_e = Ze = null, je = 0), wi = t, ca = e, Ti = a, xu = f, Au = s, tm = r, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, C0(Kn, function() {
        return gm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
        r = M.T, M.T = null, s = G.p, G.p = 2, y = Fe, Fe |= 4;
        try {
          h0(e, t, a);
        } finally {
          Fe = y, G.p = s, M.T = r;
        }
      }
      vt = 1, dm(), pm(), mm();
    }
  }
  function dm() {
    if (vt === 1) {
      vt = 0;
      var e = ca, t = wi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null;
        var r = G.p;
        G.p = 2;
        var s = Fe;
        Fe |= 4;
        try {
          Kp(t, e);
          var f = ju, y = ed(e.containerInfo), S = f.focusedElem, T = f.selectionRange;
          if (y !== S && S && S.ownerDocument && $f(
            S.ownerDocument.documentElement,
            S
          )) {
            if (T !== null && fs(S)) {
              var N = T.start, H = T.end;
              if (H === void 0 && (H = N), "selectionStart" in S)
                S.selectionStart = N, S.selectionEnd = Math.min(
                  H,
                  S.value.length
                );
              else {
                var F = S.ownerDocument || document, O = F && F.defaultView || window;
                if (O.getSelection) {
                  var _ = O.getSelection(), xe = S.textContent.length, be = Math.min(T.start, xe), Ke = T.end === void 0 ? be : Math.min(T.end, xe);
                  !_.extend && be > Ke && (y = Ke, Ke = be, be = y);
                  var k = Wf(
                    S,
                    be
                  ), E = Wf(
                    S,
                    Ke
                  );
                  if (k && E && (_.rangeCount !== 1 || _.anchorNode !== k.node || _.anchorOffset !== k.offset || _.focusNode !== E.node || _.focusOffset !== E.offset)) {
                    var z = F.createRange();
                    z.setStart(k.node, k.offset), _.removeAllRanges(), be > Ke ? (_.addRange(z), _.extend(E.node, E.offset)) : (z.setEnd(E.node, E.offset), _.addRange(z));
                  }
                }
              }
            }
            for (F = [], _ = S; _ = _.parentNode; )
              _.nodeType === 1 && F.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < F.length; S++) {
              var V = F[S];
              V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
            }
          }
          oo = !!Lu, ju = Lu = null;
        } finally {
          Fe = s, G.p = r, M.T = a;
        }
      }
      e.current = t, vt = 2;
    }
  }
  function pm() {
    if (vt === 2) {
      vt = 0;
      var e = ca, t = wi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = M.T, M.T = null;
        var r = G.p;
        G.p = 2;
        var s = Fe;
        Fe |= 4;
        try {
          Fp(e, t.alternate, t);
        } finally {
          Fe = s, G.p = r, M.T = a;
        }
      }
      vt = 3;
    }
  }
  function mm() {
    if (vt === 4 || vt === 3) {
      vt = 0, Ue();
      var e = ca, t = wi, a = Ti, r = tm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? vt = 5 : (vt = 0, wi = ca = null, hm(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (ua = null), Fo(a), t = t.stateNode, K && typeof K.onCommitFiberRoot == "function")
        try {
          K.onCommitFiberRoot(
            B,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        t = M.T, s = G.p, G.p = 2, M.T = null;
        try {
          for (var f = e.onRecoverableError, y = 0; y < r.length; y++) {
            var S = r[y];
            f(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          M.T = t, G.p = s;
        }
      }
      (Ti & 3) !== 0 && Xl(), En(e), s = e.pendingLanes, (a & 4194090) !== 0 && (s & 42) !== 0 ? e === wu ? Cr++ : (Cr = 0, wu = e) : Cr = 0, kr(0);
    }
  }
  function hm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, lr(t)));
  }
  function Xl(e) {
    return dm(), pm(), mm(), gm();
  }
  function gm() {
    if (vt !== 5) return !1;
    var e = ca, t = xu;
    xu = 0;
    var a = Fo(Ti), r = M.T, s = G.p;
    try {
      G.p = 32 > a ? 32 : a, M.T = null, a = Au, Au = null;
      var f = ca, y = Ti;
      if (vt = 0, wi = ca = null, Ti = 0, (Fe & 6) !== 0) throw Error(o(331));
      var S = Fe;
      if (Fe |= 4, $p(f.current), Zp(
        f,
        f.current,
        y,
        a
      ), Fe = S, kr(0, !1), K && typeof K.onPostCommitFiberRoot == "function")
        try {
          K.onPostCommitFiberRoot(B, f);
        } catch {
        }
      return !0;
    } finally {
      G.p = s, M.T = r, hm(e, t);
    }
  }
  function ym(e, t, a) {
    t = an(a, t), t = tu(e.stateNode, t, 2), e = ea(e, t, 2), e !== null && (Fi(e, 2), En(e));
  }
  function Xe(e, t, a) {
    if (e.tag === 3)
      ym(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ym(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ua === null || !ua.has(r))) {
            e = an(a, e), a = xp(2), r = ea(t, a, 2), r !== null && (Ap(
              a,
              r,
              t,
              e
            ), Fi(r, 2), En(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function ku(e, t, a) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new b0();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else
      s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(a) || (yu = !0, s.add(a), e = w0.bind(null, e, t, a), t.then(e, e));
  }
  function w0(e, t, a) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ze === e && (je & a) === a && (at === 4 || at === 3 && (je & 62914560) === je && 300 > me() - Su ? (Fe & 2) === 0 && Ei(e, 0) : bu |= a, Ai === je && (Ai = 0)), En(e);
  }
  function bm(e, t) {
    t === 0 && (t = mf()), e = oi(e, t), e !== null && (Fi(e, t), En(e));
  }
  function T0(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), bm(e, a);
  }
  function E0(e, t) {
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
    r !== null && r.delete(t), bm(e, a);
  }
  function C0(e, t) {
    return xa(e, t);
  }
  var Zl = null, ki = null, Du = !1, Jl = !1, zu = !1, qa = 0;
  function En(e) {
    e !== ki && e.next === null && (ki === null ? Zl = ki = e : ki = ki.next = e), Jl = !0, Du || (Du = !0, D0());
  }
  function kr(e, t) {
    if (!zu && Jl) {
      zu = !0;
      do
        for (var a = !1, r = Zl; r !== null; ) {
          if (e !== 0) {
            var s = r.pendingLanes;
            if (s === 0) var f = 0;
            else {
              var y = r.suspendedLanes, S = r.pingedLanes;
              f = (1 << 31 - Se(42 | e) + 1) - 1, f &= s & ~(y & ~S), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (a = !0, Am(r, f));
          } else
            f = je, f = dt(
              r,
              r === Ze ? f : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (f & 3) === 0 || en(r, f) || (a = !0, Am(r, f));
          r = r.next;
        }
      while (a);
      zu = !1;
    }
  }
  function k0() {
    vm();
  }
  function vm() {
    Jl = Du = !1;
    var e = 0;
    qa !== 0 && (U0() && (e = qa), qa = 0);
    for (var t = me(), a = null, r = Zl; r !== null; ) {
      var s = r.next, f = Sm(r, t);
      f === 0 ? (r.next = null, a === null ? Zl = s : a.next = s, s === null && (ki = a)) : (a = r, (e !== 0 || (f & 3) !== 0) && (Jl = !0)), r = s;
    }
    kr(e);
  }
  function Sm(e, t) {
    for (var a = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var y = 31 - Se(f), S = 1 << y, T = s[y];
      T === -1 ? ((S & a) === 0 || (S & r) !== 0) && (s[y] = pn(S, t)) : T <= t && (e.expiredLanes |= S), f &= ~S;
    }
    if (t = Ze, a = je, a = dt(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r = e.callbackNode, a === 0 || e === t && (Pe === 2 || Pe === 9) || e.cancelPendingCommit !== null)
      return r !== null && r !== null && Ht(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || en(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (r !== null && Ht(r), Fo(a)) {
        case 2:
        case 8:
          a = zt;
          break;
        case 32:
          a = Kn;
          break;
        case 268435456:
          a = Aa;
          break;
        default:
          a = Kn;
      }
      return r = xm.bind(null, e), a = xa(a, r), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return r !== null && r !== null && Ht(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function xm(e, t) {
    if (vt !== 0 && vt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Xl() && e.callbackNode !== a)
      return null;
    var r = je;
    return r = dt(
      e,
      e === Ze ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r === 0 ? null : (am(e, r, t), Sm(e, me()), e.callbackNode != null && e.callbackNode === a ? xm.bind(null, e) : null);
  }
  function Am(e, t) {
    if (Xl()) return null;
    am(e, t, !0);
  }
  function D0() {
    j0(function() {
      (Fe & 6) !== 0 ? xa(
        qe,
        k0
      ) : vm();
    });
  }
  function Ru() {
    return qa === 0 && (qa = pf()), qa;
  }
  function wm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : sl("" + e);
  }
  function Tm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function z0(e, t, a, r, s) {
    if (t === "submit" && a && a.stateNode === s) {
      var f = wm(
        (s[Nt] || null).action
      ), y = r.submitter;
      y && (t = (t = y[Nt] || null) ? wm(t.formAction) : y.getAttribute("formAction"), t !== null && (f = t, y = null));
      var S = new dl(
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
                if (qa !== 0) {
                  var T = y ? Tm(s, y) : new FormData(s);
                  Zs(
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
                typeof f == "function" && (S.preventDefault(), T = y ? Tm(s, y) : new FormData(s), Zs(
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
  for (var Nu = 0; Nu < hs.length; Nu++) {
    var Mu = hs[Nu], R0 = Mu.toLowerCase(), N0 = Mu[0].toUpperCase() + Mu.slice(1);
    mn(
      R0,
      "on" + N0
    );
  }
  mn(ad, "onAnimationEnd"), mn(id, "onAnimationIteration"), mn(rd, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(Kb, "onTransitionRun"), mn(Xb, "onTransitionStart"), mn(Zb, "onTransitionCancel"), mn(ld, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), wa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), wa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), wa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), wa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), wa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), wa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), M0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dr)
  );
  function Em(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var r = e[a], s = r.event;
      r = r.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = r.length - 1; 0 <= y; y--) {
            var S = r[y], T = S.instance, N = S.currentTarget;
            if (S = S.listener, T !== f && s.isPropagationStopped())
              break e;
            f = S, s.currentTarget = N;
            try {
              f(s);
            } catch (H) {
              jl(H);
            }
            s.currentTarget = null, f = T;
          }
        else
          for (y = 0; y < r.length; y++) {
            if (S = r[y], T = S.instance, N = S.currentTarget, S = S.listener, T !== f && s.isPropagationStopped())
              break e;
            f = S, s.currentTarget = N;
            try {
              f(s);
            } catch (H) {
              jl(H);
            }
            s.currentTarget = null, f = T;
          }
      }
    }
  }
  function Ie(e, t) {
    var a = t[Po];
    a === void 0 && (a = t[Po] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    a.has(r) || (Cm(t, e, 2, !1), a.add(r));
  }
  function Ou(e, t, a) {
    var r = 0;
    t && (r |= 4), Cm(
      a,
      e,
      r,
      t
    );
  }
  var Wl = "_reactListening" + Math.random().toString(36).slice(2);
  function _u(e) {
    if (!e[Wl]) {
      e[Wl] = !0, vf.forEach(function(a) {
        a !== "selectionchange" && (M0.has(a) || Ou(a, !1, e), Ou(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wl] || (t[Wl] = !0, Ou("selectionchange", !1, t));
    }
  }
  function Cm(e, t, a, r) {
    switch (Zm(t)) {
      case 2:
        var s = rv;
        break;
      case 8:
        s = lv;
        break;
      default:
        s = Ku;
    }
    a = s.bind(
      null,
      t,
      a,
      e
    ), s = void 0, !ns || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, a, !0) : s !== void 0 ? e.addEventListener(t, a, {
      passive: s
    }) : e.addEventListener(t, a, !1);
  }
  function Iu(e, t, a, r, s) {
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
            if (y = Ka(S), y === null) return;
            if (T = y.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              r = f = y;
              continue e;
            }
            S = S.parentNode;
          }
        }
        r = r.return;
      }
    Of(function() {
      var N = f, H = es(a), F = [];
      e: {
        var O = od.get(e);
        if (O !== void 0) {
          var _ = dl, xe = e;
          switch (e) {
            case "keypress":
              if (cl(a) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Cb;
              break;
            case "focusin":
              xe = "focus", _ = ls;
              break;
            case "focusout":
              xe = "blur", _ = ls;
              break;
            case "beforeblur":
            case "afterblur":
              _ = ls;
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
              _ = Uf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = mb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = zb;
              break;
            case ad:
            case id:
            case rd:
              _ = yb;
              break;
            case ld:
              _ = Nb;
              break;
            case "scroll":
            case "scrollend":
              _ = db;
              break;
            case "wheel":
              _ = Ob;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = vb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = jf;
              break;
            case "toggle":
            case "beforetoggle":
              _ = Ib;
          }
          var be = (t & 4) !== 0, Ke = !be && (e === "scroll" || e === "scrollend"), k = be ? O !== null ? O + "Capture" : null : O;
          be = [];
          for (var E = N, z; E !== null; ) {
            var V = E;
            if (z = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || z === null || k === null || (V = Yi(E, k), V != null && be.push(
              zr(E, V, z)
            )), Ke) break;
            E = E.return;
          }
          0 < be.length && (O = new _(
            O,
            xe,
            null,
            a,
            H
          ), F.push({ event: O, listeners: be }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", O && a !== $o && (xe = a.relatedTarget || a.fromElement) && (Ka(xe) || xe[Ya]))
            break e;
          if ((_ || O) && (O = H.window === H ? H : (O = H.ownerDocument) ? O.defaultView || O.parentWindow : window, _ ? (xe = a.relatedTarget || a.toElement, _ = N, xe = xe ? Ka(xe) : null, xe !== null && (Ke = c(xe), be = xe.tag, xe !== Ke || be !== 5 && be !== 27 && be !== 6) && (xe = null)) : (_ = null, xe = N), _ !== xe)) {
            if (be = Uf, V = "onMouseLeave", k = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (be = jf, V = "onPointerLeave", k = "onPointerEnter", E = "pointer"), Ke = _ == null ? O : Gi(_), z = xe == null ? O : Gi(xe), O = new be(
              V,
              E + "leave",
              _,
              a,
              H
            ), O.target = Ke, O.relatedTarget = z, V = null, Ka(H) === N && (be = new be(
              k,
              E + "enter",
              xe,
              a,
              H
            ), be.target = z, be.relatedTarget = Ke, V = be), Ke = V, _ && xe)
              t: {
                for (be = _, k = xe, E = 0, z = be; z; z = Di(z))
                  E++;
                for (z = 0, V = k; V; V = Di(V))
                  z++;
                for (; 0 < E - z; )
                  be = Di(be), E--;
                for (; 0 < z - E; )
                  k = Di(k), z--;
                for (; E--; ) {
                  if (be === k || k !== null && be === k.alternate)
                    break t;
                  be = Di(be), k = Di(k);
                }
                be = null;
              }
            else be = null;
            _ !== null && km(
              F,
              O,
              _,
              be,
              !1
            ), xe !== null && Ke !== null && km(
              F,
              Ke,
              xe,
              be,
              !0
            );
          }
        }
        e: {
          if (O = N ? Gi(N) : window, _ = O.nodeName && O.nodeName.toLowerCase(), _ === "select" || _ === "input" && O.type === "file")
            var fe = Gf;
          else if (Ff(O))
            if (Yf)
              fe = Pb;
            else {
              fe = Qb;
              var Oe = Vb;
            }
          else
            _ = O.nodeName, !_ || _.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? N && Wo(N.elementType) && (fe = Gf) : fe = Fb;
          if (fe && (fe = fe(e, N))) {
            Pf(
              F,
              fe,
              a,
              H
            );
            break e;
          }
          Oe && Oe(e, O, N), e === "focusout" && N && O.type === "number" && N.memoizedProps.value != null && Jo(O, "number", O.value);
        }
        switch (Oe = N ? Gi(N) : window, e) {
          case "focusin":
            (Ff(Oe) || Oe.contentEditable === "true") && (ii = Oe, ds = N, tr = null);
            break;
          case "focusout":
            tr = ds = ii = null;
            break;
          case "mousedown":
            ps = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ps = !1, td(F, a, H);
            break;
          case "selectionchange":
            if (Yb) break;
          case "keydown":
          case "keyup":
            td(F, a, H);
        }
        var he;
        if (ss)
          e: {
            switch (e) {
              case "compositionstart":
                var ve = "onCompositionStart";
                break e;
              case "compositionend":
                ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ve = "onCompositionUpdate";
                break e;
            }
            ve = void 0;
          }
        else
          ai ? Vf(e, a) && (ve = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ve = "onCompositionStart");
        ve && (qf && a.locale !== "ko" && (ai || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && ai && (he = _f()) : (Zn = H, as = "value" in Zn ? Zn.value : Zn.textContent, ai = !0)), Oe = $l(N, ve), 0 < Oe.length && (ve = new Lf(
          ve,
          e,
          null,
          a,
          H
        ), F.push({ event: ve, listeners: Oe }), he ? ve.data = he : (he = Qf(a), he !== null && (ve.data = he)))), (he = Lb ? jb(e, a) : qb(e, a)) && (ve = $l(N, "onBeforeInput"), 0 < ve.length && (Oe = new Lf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          H
        ), F.push({
          event: Oe,
          listeners: ve
        }), Oe.data = he)), z0(
          F,
          e,
          N,
          a,
          H
        );
      }
      Em(F, t);
    });
  }
  function zr(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function $l(e, t) {
    for (var a = t + "Capture", r = []; e !== null; ) {
      var s = e, f = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || f === null || (s = Yi(e, a), s != null && r.unshift(
        zr(e, s, f)
      ), s = Yi(e, t), s != null && r.push(
        zr(e, s, f)
      )), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function Di(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function km(e, t, a, r, s) {
    for (var f = t._reactName, y = []; a !== null && a !== r; ) {
      var S = a, T = S.alternate, N = S.stateNode;
      if (S = S.tag, T !== null && T === r) break;
      S !== 5 && S !== 26 && S !== 27 || N === null || (T = N, s ? (N = Yi(a, f), N != null && y.unshift(
        zr(a, N, T)
      )) : s || (N = Yi(a, f), N != null && y.push(
        zr(a, N, T)
      ))), a = a.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var O0 = /\r\n?/g, _0 = /\u0000|\uFFFD/g;
  function Dm(e) {
    return (typeof e == "string" ? e : "" + e).replace(O0, `
`).replace(_0, "");
  }
  function zm(e, t) {
    return t = Dm(t), Dm(e) === t;
  }
  function eo() {
  }
  function Ye(e, t, a, r, s, f) {
    switch (a) {
      case "children":
        typeof r == "string" ? t === "body" || t === "textarea" && r === "" || ei(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && ei(e, "" + r);
        break;
      case "className":
        rl(e, "class", r);
        break;
      case "tabIndex":
        rl(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        rl(e, a, r);
        break;
      case "style":
        Nf(e, r, f);
        break;
      case "data":
        if (t !== "object") {
          rl(e, "data", r);
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
        r = sl("" + r), e.setAttribute(a, r);
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
          typeof f == "function" && (a === "formAction" ? (t !== "input" && Ye(e, t, "name", s.name, s, null), Ye(
            e,
            t,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ye(
            e,
            t,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ye(
            e,
            t,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ye(e, t, "encType", s.encType, s, null), Ye(e, t, "method", s.method, s, null), Ye(e, t, "target", s.target, s, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(a);
          break;
        }
        r = sl("" + r), e.setAttribute(a, r);
        break;
      case "onClick":
        r != null && (e.onclick = eo);
        break;
      case "onScroll":
        r != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Ie("scrollend", e);
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
        a = sl("" + r), e.setAttributeNS(
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
        Ie("beforetoggle", e), Ie("toggle", e), il(e, "popover", r);
        break;
      case "xlinkActuate":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        Nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        Nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        Nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        il(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = cb.get(a) || a, il(e, a, r));
    }
  }
  function Uu(e, t, a, r, s, f) {
    switch (a) {
      case "style":
        Nf(e, r, f);
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
        typeof r == "string" ? ei(e, r) : (typeof r == "number" || typeof r == "bigint") && ei(e, "" + r);
        break;
      case "onScroll":
        r != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Ie("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = eo);
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
        if (!Sf.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (s = a.endsWith("Capture"), t = a.slice(2, s ? a.length - 7 : void 0), f = e[Nt] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, s), typeof r == "function")) {
              typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, r, s);
              break e;
            }
            a in e ? e[a] = r : r === !0 ? e.setAttribute(a, "") : il(e, a, r);
          }
    }
  }
  function St(e, t, a) {
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
        Ie("error", e), Ie("load", e);
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
                  Ye(e, t, f, y, a, null);
              }
          }
        s && Ye(e, t, "srcSet", a.srcSet, a, null), r && Ye(e, t, "src", a.src, a, null);
        return;
      case "input":
        Ie("invalid", e);
        var S = f = y = s = null, T = null, N = null;
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
                  N = H;
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
                  Ye(e, t, r, H, a, null);
              }
          }
        kf(
          e,
          f,
          S,
          T,
          N,
          y,
          s,
          !1
        ), ll(e);
        return;
      case "select":
        Ie("invalid", e), r = y = f = null;
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
                Ye(e, t, s, S, a, null);
            }
        t = f, a = y, e.multiple = !!r, t != null ? $a(e, !!r, t, !1) : a != null && $a(e, !!r, a, !0);
        return;
      case "textarea":
        Ie("invalid", e), f = s = r = null;
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
                Ye(e, t, y, S, a, null);
            }
        zf(e, r, s, f), ll(e);
        return;
      case "option":
        for (T in a)
          if (a.hasOwnProperty(T) && (r = a[T], r != null))
            switch (T) {
              case "selected":
                e.selected = r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                Ye(e, t, T, r, a, null);
            }
        return;
      case "dialog":
        Ie("beforetoggle", e), Ie("toggle", e), Ie("cancel", e), Ie("close", e);
        break;
      case "iframe":
      case "object":
        Ie("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Dr.length; r++)
          Ie(Dr[r], e);
        break;
      case "image":
        Ie("error", e), Ie("load", e);
        break;
      case "details":
        Ie("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ie("error", e), Ie("load", e);
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
        for (N in a)
          if (a.hasOwnProperty(N) && (r = a[N], r != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ye(e, t, N, r, a, null);
            }
        return;
      default:
        if (Wo(t)) {
          for (H in a)
            a.hasOwnProperty(H) && (r = a[H], r !== void 0 && Uu(
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
      a.hasOwnProperty(S) && (r = a[S], r != null && Ye(e, t, S, r, a, null));
  }
  function I0(e, t, a, r) {
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
        var s = null, f = null, y = null, S = null, T = null, N = null, H = null;
        for (_ in a) {
          var F = a[_];
          if (a.hasOwnProperty(_) && F != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = F;
              default:
                r.hasOwnProperty(_) || Ye(e, t, _, null, r, F);
            }
        }
        for (var O in r) {
          var _ = r[O];
          if (F = a[O], r.hasOwnProperty(O) && (_ != null || F != null))
            switch (O) {
              case "type":
                f = _;
                break;
              case "name":
                s = _;
                break;
              case "checked":
                N = _;
                break;
              case "defaultChecked":
                H = _;
                break;
              case "value":
                y = _;
                break;
              case "defaultValue":
                S = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(o(137, t));
                break;
              default:
                _ !== F && Ye(
                  e,
                  t,
                  O,
                  _,
                  r,
                  F
                );
            }
        }
        Zo(
          e,
          y,
          S,
          T,
          N,
          H,
          f,
          s
        );
        return;
      case "select":
        _ = y = S = O = null;
        for (f in a)
          if (T = a[f], a.hasOwnProperty(f) && T != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                _ = T;
              default:
                r.hasOwnProperty(f) || Ye(
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
                O = f;
                break;
              case "defaultValue":
                S = f;
                break;
              case "multiple":
                y = f;
              default:
                f !== T && Ye(
                  e,
                  t,
                  s,
                  f,
                  r,
                  T
                );
            }
        t = S, a = y, r = _, O != null ? $a(e, !!a, O, !1) : !!r != !!a && (t != null ? $a(e, !!a, t, !0) : $a(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        _ = O = null;
        for (S in a)
          if (s = a[S], a.hasOwnProperty(S) && s != null && !r.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ye(e, t, S, null, r, s);
            }
        for (y in r)
          if (s = r[y], f = a[y], r.hasOwnProperty(y) && (s != null || f != null))
            switch (y) {
              case "value":
                O = s;
                break;
              case "defaultValue":
                _ = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== f && Ye(e, t, y, s, r, f);
            }
        Df(e, O, _);
        return;
      case "option":
        for (var xe in a)
          if (O = a[xe], a.hasOwnProperty(xe) && O != null && !r.hasOwnProperty(xe))
            switch (xe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ye(
                  e,
                  t,
                  xe,
                  null,
                  r,
                  O
                );
            }
        for (T in r)
          if (O = r[T], _ = a[T], r.hasOwnProperty(T) && O !== _ && (O != null || _ != null))
            switch (T) {
              case "selected":
                e.selected = O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                Ye(
                  e,
                  t,
                  T,
                  O,
                  r,
                  _
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
        for (var be in a)
          O = a[be], a.hasOwnProperty(be) && O != null && !r.hasOwnProperty(be) && Ye(e, t, be, null, r, O);
        for (N in r)
          if (O = r[N], _ = a[N], r.hasOwnProperty(N) && O !== _ && (O != null || _ != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, t));
                break;
              default:
                Ye(
                  e,
                  t,
                  N,
                  O,
                  r,
                  _
                );
            }
        return;
      default:
        if (Wo(t)) {
          for (var Ke in a)
            O = a[Ke], a.hasOwnProperty(Ke) && O !== void 0 && !r.hasOwnProperty(Ke) && Uu(
              e,
              t,
              Ke,
              void 0,
              r,
              O
            );
          for (H in r)
            O = r[H], _ = a[H], !r.hasOwnProperty(H) || O === _ || O === void 0 && _ === void 0 || Uu(
              e,
              t,
              H,
              O,
              r,
              _
            );
          return;
        }
    }
    for (var k in a)
      O = a[k], a.hasOwnProperty(k) && O != null && !r.hasOwnProperty(k) && Ye(e, t, k, null, r, O);
    for (F in r)
      O = r[F], _ = a[F], !r.hasOwnProperty(F) || O === _ || O == null && _ == null || Ye(e, t, F, O, r, _);
  }
  var Lu = null, ju = null;
  function to(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Nm(e, t) {
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
  function qu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Bu = null;
  function U0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Bu ? !1 : (Bu = e, !0) : (Bu = null, !1);
  }
  var Mm = typeof setTimeout == "function" ? setTimeout : void 0, L0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Om = typeof Promise == "function" ? Promise : void 0, j0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Om < "u" ? function(e) {
    return Om.resolve(null).then(e).catch(q0);
  } : Mm;
  function q0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function da(e) {
    return e === "head";
  }
  function _m(e, t) {
    var a = t, r = 0, s = 0;
    do {
      var f = a.nextSibling;
      if (e.removeChild(a), f && f.nodeType === 8)
        if (a = f.data, a === "/$") {
          if (0 < r && 8 > r) {
            a = r;
            var y = e.ownerDocument;
            if (a & 1 && Rr(y.documentElement), a & 2 && Rr(y.body), a & 4)
              for (a = y.head, Rr(a), y = a.firstChild; y; ) {
                var S = y.nextSibling, T = y.nodeName;
                y[Pi] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y), y = S;
              }
          }
          if (s === 0) {
            e.removeChild(f), jr(t);
            return;
          }
          s--;
        } else
          a === "$" || a === "$?" || a === "$!" ? s++ : r = a.charCodeAt(0) - 48;
      else r = 0;
      a = f;
    } while (a);
    jr(t);
  }
  function Hu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Hu(a), Go(a);
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
  function B0(e, t, a, r) {
    for (; e.nodeType === 1; ) {
      var s = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (r) {
        if (!e[Pi])
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
      if (e = gn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function H0(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = gn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function V0(e, t) {
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
  function gn(e) {
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
  var Qu = null;
  function Im(e) {
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
  function Um(e, t, a) {
    switch (t = to(a), e) {
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
  function Rr(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Go(e);
  }
  var cn = /* @__PURE__ */ new Map(), Lm = /* @__PURE__ */ new Set();
  function no(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Pn = G.d;
  G.d = {
    f: Q0,
    r: F0,
    D: P0,
    C: G0,
    L: Y0,
    m: K0,
    X: Z0,
    S: X0,
    M: J0
  };
  function Q0() {
    var e = Pn.f(), t = Yl();
    return e || t;
  }
  function F0(e) {
    var t = Xa(e);
    t !== null && t.tag === 5 && t.type === "form" ? ap(t) : Pn.r(e);
  }
  var zi = typeof document > "u" ? null : document;
  function jm(e, t, a) {
    var r = zi;
    if (r && typeof t == "string" && t) {
      var s = nn(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof a == "string" && (s += '[crossorigin="' + a + '"]'), Lm.has(s) || (Lm.add(s), e = { rel: e, crossOrigin: a, href: t }, r.querySelector(s) === null && (t = r.createElement("link"), St(t, "link", e), pt(t), r.head.appendChild(t)));
    }
  }
  function P0(e) {
    Pn.D(e), jm("dns-prefetch", e, null);
  }
  function G0(e, t) {
    Pn.C(e, t), jm("preconnect", e, t);
  }
  function Y0(e, t, a) {
    Pn.L(e, t, a);
    var r = zi;
    if (r && e && t) {
      var s = 'link[rel="preload"][as="' + nn(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (s += '[imagesrcset="' + nn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (s += '[imagesizes="' + nn(
        a.imageSizes
      ) + '"]')) : s += '[href="' + nn(e) + '"]';
      var f = s;
      switch (t) {
        case "style":
          f = Ri(e);
          break;
        case "script":
          f = Ni(e);
      }
      cn.has(f) || (e = h(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), cn.set(f, e), r.querySelector(s) !== null || t === "style" && r.querySelector(Nr(f)) || t === "script" && r.querySelector(Mr(f)) || (t = r.createElement("link"), St(t, "link", e), pt(t), r.head.appendChild(t)));
    }
  }
  function K0(e, t) {
    Pn.m(e, t);
    var a = zi;
    if (a && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + nn(r) + '"][href="' + nn(e) + '"]', f = s;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Ni(e);
      }
      if (!cn.has(f) && (e = h({ rel: "modulepreload", href: e }, t), cn.set(f, e), a.querySelector(s) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Mr(f)))
              return;
        }
        r = a.createElement("link"), St(r, "link", e), pt(r), a.head.appendChild(r);
      }
    }
  }
  function X0(e, t, a) {
    Pn.S(e, t, a);
    var r = zi;
    if (r && e) {
      var s = Za(r).hoistableStyles, f = Ri(e);
      t = t || "default";
      var y = s.get(f);
      if (!y) {
        var S = { loading: 0, preload: null };
        if (y = r.querySelector(
          Nr(f)
        ))
          S.loading = 5;
        else {
          e = h(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = cn.get(f)) && Fu(e, a);
          var T = y = r.createElement("link");
          pt(T), St(T, "link", e), T._p = new Promise(function(N, H) {
            T.onload = N, T.onerror = H;
          }), T.addEventListener("load", function() {
            S.loading |= 1;
          }), T.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, ao(y, t, r);
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
  function Z0(e, t) {
    Pn.X(e, t);
    var a = zi;
    if (a && e) {
      var r = Za(a).hoistableScripts, s = Ni(e), f = r.get(s);
      f || (f = a.querySelector(Mr(s)), f || (e = h({ src: e, async: !0 }, t), (t = cn.get(s)) && Pu(e, t), f = a.createElement("script"), pt(f), St(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, r.set(s, f));
    }
  }
  function J0(e, t) {
    Pn.M(e, t);
    var a = zi;
    if (a && e) {
      var r = Za(a).hoistableScripts, s = Ni(e), f = r.get(s);
      f || (f = a.querySelector(Mr(s)), f || (e = h({ src: e, async: !0, type: "module" }, t), (t = cn.get(s)) && Pu(e, t), f = a.createElement("script"), pt(f), St(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, r.set(s, f));
    }
  }
  function qm(e, t, a, r) {
    var s = (s = se.current) ? no(s) : null;
    if (!s) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ri(a.href), a = Za(
          s
        ).hoistableStyles, r = a.get(t), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Ri(a.href);
          var f = Za(
            s
          ).hoistableStyles, y = f.get(e);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, y), (f = s.querySelector(
            Nr(e)
          )) && !f._p && (y.instance = f, y.state.loading = 5), cn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, cn.set(e, a), f || W0(
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ni(a), a = Za(
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
  function Ri(e) {
    return 'href="' + nn(e) + '"';
  }
  function Nr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Bm(e) {
    return h({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function W0(e, t, a, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
      return r.loading |= 1;
    }), t.addEventListener("error", function() {
      return r.loading |= 2;
    }), St(t, "link", a), pt(t), e.head.appendChild(t));
  }
  function Ni(e) {
    return '[src="' + nn(e) + '"]';
  }
  function Mr(e) {
    return "script[async]" + e;
  }
  function Hm(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var r = e.querySelector(
            'style[data-href~="' + nn(a.href) + '"]'
          );
          if (r)
            return t.instance = r, pt(r), r;
          var s = h({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return r = (e.ownerDocument || e).createElement(
            "style"
          ), pt(r), St(r, "style", s), ao(r, a.precedence, e), t.instance = r;
        case "stylesheet":
          s = Ri(a.href);
          var f = e.querySelector(
            Nr(s)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, pt(f), f;
          r = Bm(a), (s = cn.get(s)) && Fu(r, s), f = (e.ownerDocument || e).createElement("link"), pt(f);
          var y = f;
          return y._p = new Promise(function(S, T) {
            y.onload = S, y.onerror = T;
          }), St(f, "link", r), t.state.loading |= 4, ao(f, a.precedence, e), t.instance = f;
        case "script":
          return f = Ni(a.src), (s = e.querySelector(
            Mr(f)
          )) ? (t.instance = s, pt(s), s) : (r = a, (s = cn.get(f)) && (r = h({}, a), Pu(r, s)), e = e.ownerDocument || e, s = e.createElement("script"), pt(s), St(s, "link", r), e.head.appendChild(s), t.instance = s);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, ao(r, a.precedence, e));
    return t.instance;
  }
  function ao(e, t, a) {
    for (var r = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = r.length ? r[r.length - 1] : null, f = s, y = 0; y < r.length; y++) {
      var S = r[y];
      if (S.dataset.precedence === t) f = S;
      else if (f !== s) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Fu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Pu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var io = null;
  function Vm(e, t, a) {
    if (io === null) {
      var r = /* @__PURE__ */ new Map(), s = io = /* @__PURE__ */ new Map();
      s.set(a, r);
    } else
      s = io, r = s.get(a), r || (r = /* @__PURE__ */ new Map(), s.set(a, r));
    if (r.has(e)) return r;
    for (r.set(e, null), a = a.getElementsByTagName(e), s = 0; s < a.length; s++) {
      var f = a[s];
      if (!(f[Pi] || f[At] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = f.getAttribute(t) || "";
        y = e + y;
        var S = r.get(y);
        S ? S.push(f) : r.set(y, [f]);
      }
    }
    return r;
  }
  function Qm(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function $0(e, t, a) {
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
  function Fm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Or = null;
  function ev() {
  }
  function tv(e, t, a) {
    if (Or === null) throw Error(o(475));
    var r = Or;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var s = Ri(a.href), f = e.querySelector(
          Nr(s)
        );
        if (f) {
          e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (r.count++, r = ro.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = f, pt(f);
          return;
        }
        f = e.ownerDocument || e, a = Bm(a), (s = cn.get(s)) && Fu(a, s), f = f.createElement("link"), pt(f);
        var y = f;
        y._p = new Promise(function(S, T) {
          y.onload = S, y.onerror = T;
        }), St(f, "link", a), t.instance = f;
      }
      r.stylesheets === null && (r.stylesheets = /* @__PURE__ */ new Map()), r.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (r.count++, t = ro.bind(r), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function nv() {
    if (Or === null) throw Error(o(475));
    var e = Or;
    return e.stylesheets && e.count === 0 && Gu(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Gu(e, e.stylesheets), e.unsuspend) {
          var r = e.unsuspend;
          e.unsuspend = null, r();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function ro() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Gu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var lo = null;
  function Gu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, lo = /* @__PURE__ */ new Map(), t.forEach(av, e), lo = null, ro.call(e));
  }
  function av(e, t) {
    if (!(t.state.loading & 4)) {
      var a = lo.get(e);
      if (a) var r = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), lo.set(e, a);
        for (var s = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < s.length; f++) {
          var y = s[f];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y), r = y);
        }
        r && a.set(null, r);
      }
      s = t.instance, y = s.getAttribute("data-precedence"), f = a.get(y) || r, f === r && a.set(null, s), a.set(y, s), this.count++, r = ro.bind(this), s.addEventListener("load", r), s.addEventListener("error", r), f ? f.parentNode.insertBefore(s, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var _r = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function iv(e, t, a, r, s, f, y, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vo(0), this.hiddenUpdates = Vo(null), this.identifierPrefix = r, this.onUncaughtError = s, this.onCaughtError = f, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Pm(e, t, a, r, s, f, y, S, T, N, H, F) {
    return e = new iv(
      e,
      t,
      a,
      y,
      S,
      T,
      N,
      F
    ), t = 1, f === !0 && (t |= 24), f = Pt(3, null, null, t), e.current = f, f.stateNode = e, t = ks(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: r,
      isDehydrated: a,
      cache: t
    }, Ns(f), e;
  }
  function Gm(e) {
    return e ? (e = si, e) : si;
  }
  function Ym(e, t, a, r, s, f) {
    s = Gm(s), r.context === null ? r.context = s : r.pendingContext = s, r = $n(t), r.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (r.callback = f), a = ea(e, r, t), a !== null && (Zt(a, e, t), cr(a, e, t));
  }
  function Km(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Yu(e, t) {
    Km(e, t), (e = e.alternate) && Km(e, t);
  }
  function Xm(e) {
    if (e.tag === 13) {
      var t = oi(e, 67108864);
      t !== null && Zt(t, e, 67108864), Yu(e, 67108864);
    }
  }
  var oo = !0;
  function rv(e, t, a, r) {
    var s = M.T;
    M.T = null;
    var f = G.p;
    try {
      G.p = 2, Ku(e, t, a, r);
    } finally {
      G.p = f, M.T = s;
    }
  }
  function lv(e, t, a, r) {
    var s = M.T;
    M.T = null;
    var f = G.p;
    try {
      G.p = 8, Ku(e, t, a, r);
    } finally {
      G.p = f, M.T = s;
    }
  }
  function Ku(e, t, a, r) {
    if (oo) {
      var s = Xu(r);
      if (s === null)
        Iu(
          e,
          t,
          r,
          so,
          a
        ), Jm(e, r);
      else if (sv(
        s,
        e,
        t,
        a,
        r
      ))
        r.stopPropagation();
      else if (Jm(e, r), t & 4 && -1 < ov.indexOf(e)) {
        for (; s !== null; ) {
          var f = Xa(s);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var y = Qt(f.pendingLanes);
                  if (y !== 0) {
                    var S = f;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; y; ) {
                      var T = 1 << 31 - Se(y);
                      S.entanglements[1] |= T, y &= ~T;
                    }
                    En(f), (Fe & 6) === 0 && (Pl = me() + 500, kr(0));
                  }
                }
                break;
              case 13:
                S = oi(f, 2), S !== null && Zt(S, f, 2), Yl(), Yu(f, 2);
            }
          if (f = Xu(r), f === null && Iu(
            e,
            t,
            r,
            so,
            a
          ), f === s) break;
          s = f;
        }
        s !== null && r.stopPropagation();
      } else
        Iu(
          e,
          t,
          r,
          null,
          a
        );
    }
  }
  function Xu(e) {
    return e = es(e), Zu(e);
  }
  var so = null;
  function Zu(e) {
    if (so = null, e = Ka(e), e !== null) {
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
    return so = e, null;
  }
  function Zm(e) {
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
        switch (Le()) {
          case qe:
            return 2;
          case zt:
            return 8;
          case Kn:
          case vn:
            return 32;
          case Aa:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ju = !1, pa = null, ma = null, ha = null, Ir = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), ga = [], ov = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Jm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pa = null;
        break;
      case "dragenter":
      case "dragleave":
        ma = null;
        break;
      case "mouseover":
      case "mouseout":
        ha = null;
        break;
      case "pointerover":
      case "pointerout":
        Ir.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ur.delete(t.pointerId);
    }
  }
  function Lr(e, t, a, r, s, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: r,
      nativeEvent: f,
      targetContainers: [s]
    }, t !== null && (t = Xa(t), t !== null && Xm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function sv(e, t, a, r, s) {
    switch (t) {
      case "focusin":
        return pa = Lr(
          pa,
          e,
          t,
          a,
          r,
          s
        ), !0;
      case "dragenter":
        return ma = Lr(
          ma,
          e,
          t,
          a,
          r,
          s
        ), !0;
      case "mouseover":
        return ha = Lr(
          ha,
          e,
          t,
          a,
          r,
          s
        ), !0;
      case "pointerover":
        var f = s.pointerId;
        return Ir.set(
          f,
          Lr(
            Ir.get(f) || null,
            e,
            t,
            a,
            r,
            s
          )
        ), !0;
      case "gotpointercapture":
        return f = s.pointerId, Ur.set(
          f,
          Lr(
            Ur.get(f) || null,
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
  function Wm(e) {
    var t = Ka(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = d(a), t !== null) {
            e.blockedOn = t, tb(e.priority, function() {
              if (a.tag === 13) {
                var r = Xt();
                r = Qo(r);
                var s = oi(a, r);
                s !== null && Zt(s, a, r), Yu(a, r);
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
  function uo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Xu(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var r = new a.constructor(
          a.type,
          a
        );
        $o = r, a.target.dispatchEvent(r), $o = null;
      } else
        return t = Xa(a), t !== null && Xm(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function $m(e, t, a) {
    uo(e) && a.delete(t);
  }
  function uv() {
    Ju = !1, pa !== null && uo(pa) && (pa = null), ma !== null && uo(ma) && (ma = null), ha !== null && uo(ha) && (ha = null), Ir.forEach($m), Ur.forEach($m);
  }
  function co(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ju || (Ju = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      uv
    )));
  }
  var fo = null;
  function eh(e) {
    fo !== e && (fo = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        fo === e && (fo = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], r = e[t + 1], s = e[t + 2];
          if (typeof r != "function") {
            if (Zu(r || a) === null)
              continue;
            break;
          }
          var f = Xa(a);
          f !== null && (e.splice(t, 3), t -= 3, Zs(
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
  function jr(e) {
    function t(T) {
      return co(T, e);
    }
    pa !== null && co(pa, e), ma !== null && co(ma, e), ha !== null && co(ha, e), Ir.forEach(t), Ur.forEach(t);
    for (var a = 0; a < ga.length; a++) {
      var r = ga[a];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < ga.length && (a = ga[0], a.blockedOn === null); )
      Wm(a), a.blockedOn === null && ga.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (r = 0; r < a.length; r += 3) {
        var s = a[r], f = a[r + 1], y = s[Nt] || null;
        if (typeof f == "function")
          y || eh(a);
        else if (y) {
          var S = null;
          if (f && f.hasAttribute("formAction")) {
            if (s = f, y = f[Nt] || null)
              S = y.formAction;
            else if (Zu(s) !== null) continue;
          } else S = y.action;
          typeof S == "function" ? a[r + 1] = S : (a.splice(r, 3), r -= 3), eh(a);
        }
      }
  }
  function Wu(e) {
    this._internalRoot = e;
  }
  po.prototype.render = Wu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, r = Xt();
    Ym(a, r, e, t, null, null);
  }, po.prototype.unmount = Wu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ym(e.current, 2, null, e, null, null), Yl(), t[Ya] = null;
    }
  };
  function po(e) {
    this._internalRoot = e;
  }
  po.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = yf();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < ga.length && t !== 0 && t < ga[a].priority; a++) ;
      ga.splice(a, 0, e), a === 0 && Wm(e);
    }
  };
  var th = i.version;
  if (th !== "19.1.0")
    throw Error(
      o(
        527,
        th,
        "19.1.0"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = g(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var cv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!mo.isDisabled && mo.supportsFiber)
      try {
        B = mo.inject(
          cv
        ), K = mo;
      } catch {
      }
  }
  return Br.createRoot = function(e, t) {
    if (!u(e)) throw Error(o(299));
    var a = !1, r = "", s = yp, f = bp, y = vp, S = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (y = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (S = t.unstable_transitionCallbacks)), t = Pm(
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
    ), e[Ya] = t.current, _u(e), new Wu(t);
  }, Br.hydrateRoot = function(e, t, a) {
    if (!u(e)) throw Error(o(299));
    var r = !1, s = "", f = yp, y = bp, S = vp, T = null, N = null;
    return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (s = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (y = a.onCaughtError), a.onRecoverableError !== void 0 && (S = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (T = a.unstable_transitionCallbacks), a.formState !== void 0 && (N = a.formState)), t = Pm(
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
      N
    ), t.context = Gm(null), a = t.current, r = Xt(), r = Qo(r), s = $n(r), s.callback = null, ea(a, s, r), a = r, t.current.lanes = a, Fi(t, a), En(t), e[Ya] = t.current, _u(e), new po(t);
  }, Br.version = "19.1.0", Br;
}
var fh;
function Sv() {
  if (fh) return tc.exports;
  fh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), tc.exports = vv(), tc.exports;
}
var xv = Sv();
function Ag(n, i) {
  return function() {
    return n.apply(i, arguments);
  };
}
const { toString: Av } = Object.prototype, { getPrototypeOf: Yc } = Object, { iterator: No, toStringTag: wg } = Symbol, Mo = /* @__PURE__ */ ((n) => (i) => {
  const l = Av.call(i);
  return n[l] || (n[l] = l.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), bn = (n) => (n = n.toLowerCase(), (i) => Mo(i) === n), Oo = (n) => (i) => typeof i === n, { isArray: Li } = Array, Wr = Oo("undefined");
function wv(n) {
  return n !== null && !Wr(n) && n.constructor !== null && !Wr(n.constructor) && Lt(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Tg = bn("ArrayBuffer");
function Tv(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && Tg(n.buffer), i;
}
const Ev = Oo("string"), Lt = Oo("function"), Eg = Oo("number"), _o = (n) => n !== null && typeof n == "object", Cv = (n) => n === !0 || n === !1, xo = (n) => {
  if (Mo(n) !== "object")
    return !1;
  const i = Yc(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(wg in n) && !(No in n);
}, kv = bn("Date"), Dv = bn("File"), zv = bn("Blob"), Rv = bn("FileList"), Nv = (n) => _o(n) && Lt(n.pipe), Mv = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || Lt(n.append) && ((i = Mo(n)) === "formdata" || // detect form-data instance
  i === "object" && Lt(n.toString) && n.toString() === "[object FormData]"));
}, Ov = bn("URLSearchParams"), [_v, Iv, Uv, Lv] = ["ReadableStream", "Request", "Response", "Headers"].map(bn), jv = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function el(n, i, { allOwnKeys: l = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let o, u;
  if (typeof n != "object" && (n = [n]), Li(n))
    for (o = 0, u = n.length; o < u; o++)
      i.call(null, n[o], o, n);
  else {
    const c = l ? Object.getOwnPropertyNames(n) : Object.keys(n), d = c.length;
    let p;
    for (o = 0; o < d; o++)
      p = c[o], i.call(null, n[p], p, n);
  }
}
function Cg(n, i) {
  i = i.toLowerCase();
  const l = Object.keys(n);
  let o = l.length, u;
  for (; o-- > 0; )
    if (u = l[o], i === u.toLowerCase())
      return u;
  return null;
}
const Va = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, kg = (n) => !Wr(n) && n !== Va;
function Ec() {
  const { caseless: n } = kg(this) && this || {}, i = {}, l = (o, u) => {
    const c = n && Cg(i, u) || u;
    xo(i[c]) && xo(o) ? i[c] = Ec(i[c], o) : xo(o) ? i[c] = Ec({}, o) : Li(o) ? i[c] = o.slice() : i[c] = o;
  };
  for (let o = 0, u = arguments.length; o < u; o++)
    arguments[o] && el(arguments[o], l);
  return i;
}
const qv = (n, i, l, { allOwnKeys: o } = {}) => (el(i, (u, c) => {
  l && Lt(u) ? n[c] = Ag(u, l) : n[c] = u;
}, { allOwnKeys: o }), n), Bv = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Hv = (n, i, l, o) => {
  n.prototype = Object.create(i.prototype, o), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), l && Object.assign(n.prototype, l);
}, Vv = (n, i, l, o) => {
  let u, c, d;
  const p = {};
  if (i = i || {}, n == null) return i;
  do {
    for (u = Object.getOwnPropertyNames(n), c = u.length; c-- > 0; )
      d = u[c], (!o || o(d, n, i)) && !p[d] && (i[d] = n[d], p[d] = !0);
    n = l !== !1 && Yc(n);
  } while (n && (!l || l(n, i)) && n !== Object.prototype);
  return i;
}, Qv = (n, i, l) => {
  n = String(n), (l === void 0 || l > n.length) && (l = n.length), l -= i.length;
  const o = n.indexOf(i, l);
  return o !== -1 && o === l;
}, Fv = (n) => {
  if (!n) return null;
  if (Li(n)) return n;
  let i = n.length;
  if (!Eg(i)) return null;
  const l = new Array(i);
  for (; i-- > 0; )
    l[i] = n[i];
  return l;
}, Pv = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && Yc(Uint8Array)), Gv = (n, i) => {
  const o = (n && n[No]).call(n);
  let u;
  for (; (u = o.next()) && !u.done; ) {
    const c = u.value;
    i.call(n, c[0], c[1]);
  }
}, Yv = (n, i) => {
  let l;
  const o = [];
  for (; (l = n.exec(i)) !== null; )
    o.push(l);
  return o;
}, Kv = bn("HTMLFormElement"), Xv = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(l, o, u) {
    return o.toUpperCase() + u;
  }
), dh = (({ hasOwnProperty: n }) => (i, l) => n.call(i, l))(Object.prototype), Zv = bn("RegExp"), Dg = (n, i) => {
  const l = Object.getOwnPropertyDescriptors(n), o = {};
  el(l, (u, c) => {
    let d;
    (d = i(u, c, n)) !== !1 && (o[c] = d || u);
  }), Object.defineProperties(n, o);
}, Jv = (n) => {
  Dg(n, (i, l) => {
    if (Lt(n) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
      return !1;
    const o = n[l];
    if (Lt(o)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + l + "'");
      });
    }
  });
}, Wv = (n, i) => {
  const l = {}, o = (u) => {
    u.forEach((c) => {
      l[c] = !0;
    });
  };
  return Li(n) ? o(n) : o(String(n).split(i)), l;
}, $v = () => {
}, eS = (n, i) => n != null && Number.isFinite(n = +n) ? n : i;
function tS(n) {
  return !!(n && Lt(n.append) && n[wg] === "FormData" && n[No]);
}
const nS = (n) => {
  const i = new Array(10), l = (o, u) => {
    if (_o(o)) {
      if (i.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        i[u] = o;
        const c = Li(o) ? [] : {};
        return el(o, (d, p) => {
          const g = l(d, u + 1);
          !Wr(g) && (c[p] = g);
        }), i[u] = void 0, c;
      }
    }
    return o;
  };
  return l(n, 0);
}, aS = bn("AsyncFunction"), iS = (n) => n && (_o(n) || Lt(n)) && Lt(n.then) && Lt(n.catch), zg = ((n, i) => n ? setImmediate : i ? ((l, o) => (Va.addEventListener("message", ({ source: u, data: c }) => {
  u === Va && c === l && o.length && o.shift()();
}, !1), (u) => {
  o.push(u), Va.postMessage(l, "*");
}))(`axios@${Math.random()}`, []) : (l) => setTimeout(l))(
  typeof setImmediate == "function",
  Lt(Va.postMessage)
), rS = typeof queueMicrotask < "u" ? queueMicrotask.bind(Va) : typeof process < "u" && process.nextTick || zg, lS = (n) => n != null && Lt(n[No]), L = {
  isArray: Li,
  isArrayBuffer: Tg,
  isBuffer: wv,
  isFormData: Mv,
  isArrayBufferView: Tv,
  isString: Ev,
  isNumber: Eg,
  isBoolean: Cv,
  isObject: _o,
  isPlainObject: xo,
  isReadableStream: _v,
  isRequest: Iv,
  isResponse: Uv,
  isHeaders: Lv,
  isUndefined: Wr,
  isDate: kv,
  isFile: Dv,
  isBlob: zv,
  isRegExp: Zv,
  isFunction: Lt,
  isStream: Nv,
  isURLSearchParams: Ov,
  isTypedArray: Pv,
  isFileList: Rv,
  forEach: el,
  merge: Ec,
  extend: qv,
  trim: jv,
  stripBOM: Bv,
  inherits: Hv,
  toFlatObject: Vv,
  kindOf: Mo,
  kindOfTest: bn,
  endsWith: Qv,
  toArray: Fv,
  forEachEntry: Gv,
  matchAll: Yv,
  isHTMLForm: Kv,
  hasOwnProperty: dh,
  hasOwnProp: dh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Dg,
  freezeMethods: Jv,
  toObjectSet: Wv,
  toCamelCase: Xv,
  noop: $v,
  toFiniteNumber: eS,
  findKey: Cg,
  global: Va,
  isContextDefined: kg,
  isSpecCompliantForm: tS,
  toJSONObject: nS,
  isAsyncFn: aS,
  isThenable: iS,
  setImmediate: zg,
  asap: rS,
  isIterable: lS
};
function Ee(n, i, l, o, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), l && (this.config = l), o && (this.request = o), u && (this.response = u, this.status = u.status ? u.status : null);
}
L.inherits(Ee, Error, {
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
      config: L.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Rg = Ee.prototype, Ng = {};
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
  Ng[n] = { value: n };
});
Object.defineProperties(Ee, Ng);
Object.defineProperty(Rg, "isAxiosError", { value: !0 });
Ee.from = (n, i, l, o, u, c) => {
  const d = Object.create(Rg);
  return L.toFlatObject(n, d, function(g) {
    return g !== Error.prototype;
  }, (p) => p !== "isAxiosError"), Ee.call(d, n.message, i, l, o, u), d.cause = n, d.name = n.name, c && Object.assign(d, c), d;
};
const oS = null;
function Cc(n) {
  return L.isPlainObject(n) || L.isArray(n);
}
function Mg(n) {
  return L.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function ph(n, i, l) {
  return n ? n.concat(i).map(function(u, c) {
    return u = Mg(u), !l && c ? "[" + u + "]" : u;
  }).join(l ? "." : "") : i;
}
function sS(n) {
  return L.isArray(n) && !n.some(Cc);
}
const uS = L.toFlatObject(L, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function Io(n, i, l) {
  if (!L.isObject(n))
    throw new TypeError("target must be an object");
  i = i || new FormData(), l = L.toFlatObject(l, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(R, j) {
    return !L.isUndefined(j[R]);
  });
  const o = l.metaTokens, u = l.visitor || h, c = l.dots, d = l.indexes, g = (l.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(i);
  if (!L.isFunction(u))
    throw new TypeError("visitor must be a function");
  function m(D) {
    if (D === null) return "";
    if (L.isDate(D))
      return D.toISOString();
    if (L.isBoolean(D))
      return D.toString();
    if (!g && L.isBlob(D))
      throw new Ee("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(D) || L.isTypedArray(D) ? g && typeof Blob == "function" ? new Blob([D]) : Buffer.from(D) : D;
  }
  function h(D, R, j) {
    let I = D;
    if (D && !j && typeof D == "object") {
      if (L.endsWith(R, "{}"))
        R = o ? R : R.slice(0, -2), D = JSON.stringify(D);
      else if (L.isArray(D) && sS(D) || (L.isFileList(D) || L.endsWith(R, "[]")) && (I = L.toArray(D)))
        return R = Mg(R), I.forEach(function(P, J) {
          !(L.isUndefined(P) || P === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? ph([R], J, c) : d === null ? R : R + "[]",
            m(P)
          );
        }), !1;
    }
    return Cc(D) ? !0 : (i.append(ph(j, R, c), m(D)), !1);
  }
  const v = [], w = Object.assign(uS, {
    defaultVisitor: h,
    convertValue: m,
    isVisitable: Cc
  });
  function x(D, R) {
    if (!L.isUndefined(D)) {
      if (v.indexOf(D) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      v.push(D), L.forEach(D, function(I, ee) {
        (!(L.isUndefined(I) || I === null) && u.call(
          i,
          I,
          L.isString(ee) ? ee.trim() : ee,
          R,
          w
        )) === !0 && x(I, R ? R.concat(ee) : [ee]);
      }), v.pop();
    }
  }
  if (!L.isObject(n))
    throw new TypeError("data must be an object");
  return x(n), i;
}
function mh(n) {
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
function Kc(n, i) {
  this._pairs = [], n && Io(n, this, i);
}
const Og = Kc.prototype;
Og.append = function(i, l) {
  this._pairs.push([i, l]);
};
Og.toString = function(i) {
  const l = i ? function(o) {
    return i.call(this, o, mh);
  } : mh;
  return this._pairs.map(function(u) {
    return l(u[0]) + "=" + l(u[1]);
  }, "").join("&");
};
function cS(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function _g(n, i, l) {
  if (!i)
    return n;
  const o = l && l.encode || cS;
  L.isFunction(l) && (l = {
    serialize: l
  });
  const u = l && l.serialize;
  let c;
  if (u ? c = u(i, l) : c = L.isURLSearchParams(i) ? i.toString() : new Kc(i, l).toString(o), c) {
    const d = n.indexOf("#");
    d !== -1 && (n = n.slice(0, d)), n += (n.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return n;
}
class hh {
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
    L.forEach(this.handlers, function(o) {
      o !== null && i(o);
    });
  }
}
const Ig = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fS = typeof URLSearchParams < "u" ? URLSearchParams : Kc, dS = typeof FormData < "u" ? FormData : null, pS = typeof Blob < "u" ? Blob : null, mS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fS,
    FormData: dS,
    Blob: pS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xc = typeof window < "u" && typeof document < "u", kc = typeof navigator == "object" && navigator || void 0, hS = Xc && (!kc || ["ReactNative", "NativeScript", "NS"].indexOf(kc.product) < 0), gS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", yS = Xc && window.location.href || "http://localhost", bS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xc,
  hasStandardBrowserEnv: hS,
  hasStandardBrowserWebWorkerEnv: gS,
  navigator: kc,
  origin: yS
}, Symbol.toStringTag, { value: "Module" })), Et = {
  ...bS,
  ...mS
};
function vS(n, i) {
  return Io(n, new Et.classes.URLSearchParams(), Object.assign({
    visitor: function(l, o, u, c) {
      return Et.isNode && L.isBuffer(l) ? (this.append(o, l.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function SS(n) {
  return L.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function xS(n) {
  const i = {}, l = Object.keys(n);
  let o;
  const u = l.length;
  let c;
  for (o = 0; o < u; o++)
    c = l[o], i[c] = n[c];
  return i;
}
function Ug(n) {
  function i(l, o, u, c) {
    let d = l[c++];
    if (d === "__proto__") return !0;
    const p = Number.isFinite(+d), g = c >= l.length;
    return d = !d && L.isArray(u) ? u.length : d, g ? (L.hasOwnProp(u, d) ? u[d] = [u[d], o] : u[d] = o, !p) : ((!u[d] || !L.isObject(u[d])) && (u[d] = []), i(l, o, u[d], c) && L.isArray(u[d]) && (u[d] = xS(u[d])), !p);
  }
  if (L.isFormData(n) && L.isFunction(n.entries)) {
    const l = {};
    return L.forEachEntry(n, (o, u) => {
      i(SS(o), u, l, 0);
    }), l;
  }
  return null;
}
function AS(n, i, l) {
  if (L.isString(n))
    try {
      return (i || JSON.parse)(n), L.trim(n);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (l || JSON.stringify)(n);
}
const tl = {
  transitional: Ig,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, l) {
    const o = l.getContentType() || "", u = o.indexOf("application/json") > -1, c = L.isObject(i);
    if (c && L.isHTMLForm(i) && (i = new FormData(i)), L.isFormData(i))
      return u ? JSON.stringify(Ug(i)) : i;
    if (L.isArrayBuffer(i) || L.isBuffer(i) || L.isStream(i) || L.isFile(i) || L.isBlob(i) || L.isReadableStream(i))
      return i;
    if (L.isArrayBufferView(i))
      return i.buffer;
    if (L.isURLSearchParams(i))
      return l.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let p;
    if (c) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return vS(i, this.formSerializer).toString();
      if ((p = L.isFileList(i)) || o.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return Io(
          p ? { "files[]": i } : i,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return c || u ? (l.setContentType("application/json", !1), AS(i)) : i;
  }],
  transformResponse: [function(i) {
    const l = this.transitional || tl.transitional, o = l && l.forcedJSONParsing, u = this.responseType === "json";
    if (L.isResponse(i) || L.isReadableStream(i))
      return i;
    if (i && L.isString(i) && (o && !this.responseType || u)) {
      const d = !(l && l.silentJSONParsing) && u;
      try {
        return JSON.parse(i);
      } catch (p) {
        if (d)
          throw p.name === "SyntaxError" ? Ee.from(p, Ee.ERR_BAD_RESPONSE, this, null, this.response) : p;
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
    FormData: Et.classes.FormData,
    Blob: Et.classes.Blob
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
L.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  tl.headers[n] = {};
});
const wS = L.toObjectSet([
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
]), TS = (n) => {
  const i = {};
  let l, o, u;
  return n && n.split(`
`).forEach(function(d) {
    u = d.indexOf(":"), l = d.substring(0, u).trim().toLowerCase(), o = d.substring(u + 1).trim(), !(!l || i[l] && wS[l]) && (l === "set-cookie" ? i[l] ? i[l].push(o) : i[l] = [o] : i[l] = i[l] ? i[l] + ", " + o : o);
  }), i;
}, gh = Symbol("internals");
function Hr(n) {
  return n && String(n).trim().toLowerCase();
}
function Ao(n) {
  return n === !1 || n == null ? n : L.isArray(n) ? n.map(Ao) : String(n);
}
function ES(n) {
  const i = /* @__PURE__ */ Object.create(null), l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = l.exec(n); )
    i[o[1]] = o[2];
  return i;
}
const CS = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function rc(n, i, l, o, u) {
  if (L.isFunction(o))
    return o.call(this, i, l);
  if (u && (i = l), !!L.isString(i)) {
    if (L.isString(o))
      return i.indexOf(o) !== -1;
    if (L.isRegExp(o))
      return o.test(i);
  }
}
function kS(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, l, o) => l.toUpperCase() + o);
}
function DS(n, i) {
  const l = L.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(n, o + l, {
      value: function(u, c, d) {
        return this[o].call(this, i, u, c, d);
      },
      configurable: !0
    });
  });
}
let jt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, l, o) {
    const u = this;
    function c(p, g, m) {
      const h = Hr(g);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const v = L.findKey(u, h);
      (!v || u[v] === void 0 || m === !0 || m === void 0 && u[v] !== !1) && (u[v || g] = Ao(p));
    }
    const d = (p, g) => L.forEach(p, (m, h) => c(m, h, g));
    if (L.isPlainObject(i) || i instanceof this.constructor)
      d(i, l);
    else if (L.isString(i) && (i = i.trim()) && !CS(i))
      d(TS(i), l);
    else if (L.isObject(i) && L.isIterable(i)) {
      let p = {}, g, m;
      for (const h of i) {
        if (!L.isArray(h))
          throw TypeError("Object iterator must return a key-value pair");
        p[m = h[0]] = (g = p[m]) ? L.isArray(g) ? [...g, h[1]] : [g, h[1]] : h[1];
      }
      d(p, l);
    } else
      i != null && c(l, i, o);
    return this;
  }
  get(i, l) {
    if (i = Hr(i), i) {
      const o = L.findKey(this, i);
      if (o) {
        const u = this[o];
        if (!l)
          return u;
        if (l === !0)
          return ES(u);
        if (L.isFunction(l))
          return l.call(this, u, o);
        if (L.isRegExp(l))
          return l.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, l) {
    if (i = Hr(i), i) {
      const o = L.findKey(this, i);
      return !!(o && this[o] !== void 0 && (!l || rc(this, this[o], o, l)));
    }
    return !1;
  }
  delete(i, l) {
    const o = this;
    let u = !1;
    function c(d) {
      if (d = Hr(d), d) {
        const p = L.findKey(o, d);
        p && (!l || rc(o, o[p], p, l)) && (delete o[p], u = !0);
      }
    }
    return L.isArray(i) ? i.forEach(c) : c(i), u;
  }
  clear(i) {
    const l = Object.keys(this);
    let o = l.length, u = !1;
    for (; o--; ) {
      const c = l[o];
      (!i || rc(this, this[c], c, i, !0)) && (delete this[c], u = !0);
    }
    return u;
  }
  normalize(i) {
    const l = this, o = {};
    return L.forEach(this, (u, c) => {
      const d = L.findKey(o, c);
      if (d) {
        l[d] = Ao(u), delete l[c];
        return;
      }
      const p = i ? kS(c) : String(c).trim();
      p !== c && delete l[c], l[p] = Ao(u), o[p] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const l = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (o, u) => {
      o != null && o !== !1 && (l[u] = i && L.isArray(o) ? o.join(", ") : o);
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
    const o = (this[gh] = this[gh] = {
      accessors: {}
    }).accessors, u = this.prototype;
    function c(d) {
      const p = Hr(d);
      o[p] || (DS(u, d), o[p] = !0);
    }
    return L.isArray(i) ? i.forEach(c) : c(i), this;
  }
};
jt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(jt.prototype, ({ value: n }, i) => {
  let l = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(o) {
      this[l] = o;
    }
  };
});
L.freezeMethods(jt);
function lc(n, i) {
  const l = this || tl, o = i || l, u = jt.from(o.headers);
  let c = o.data;
  return L.forEach(n, function(p) {
    c = p.call(l, c, u.normalize(), i ? i.status : void 0);
  }), u.normalize(), c;
}
function Lg(n) {
  return !!(n && n.__CANCEL__);
}
function ji(n, i, l) {
  Ee.call(this, n ?? "canceled", Ee.ERR_CANCELED, i, l), this.name = "CanceledError";
}
L.inherits(ji, Ee, {
  __CANCEL__: !0
});
function jg(n, i, l) {
  const o = l.config.validateStatus;
  !l.status || !o || o(l.status) ? n(l) : i(new Ee(
    "Request failed with status code " + l.status,
    [Ee.ERR_BAD_REQUEST, Ee.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
    l.config,
    l.request,
    l
  ));
}
function zS(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function RS(n, i) {
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
function NS(n, i) {
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
const ko = (n, i, l = 3) => {
  let o = 0;
  const u = RS(50, 250);
  return NS((c) => {
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
}, yh = (n, i) => {
  const l = n != null;
  return [(o) => i[0]({
    lengthComputable: l,
    total: n,
    loaded: o
  }), i[1]];
}, bh = (n) => (...i) => L.asap(() => n(...i)), MS = Et.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, i) => (l) => (l = new URL(l, Et.origin), n.protocol === l.protocol && n.host === l.host && (i || n.port === l.port)))(
  new URL(Et.origin),
  Et.navigator && /(msie|trident)/i.test(Et.navigator.userAgent)
) : () => !0, OS = Et.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, i, l, o, u, c) {
      const d = [n + "=" + encodeURIComponent(i)];
      L.isNumber(l) && d.push("expires=" + new Date(l).toGMTString()), L.isString(o) && d.push("path=" + o), L.isString(u) && d.push("domain=" + u), c === !0 && d.push("secure"), document.cookie = d.join("; ");
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
function _S(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function IS(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function qg(n, i, l) {
  let o = !_S(i);
  return n && (o || l == !1) ? IS(n, i) : i;
}
const vh = (n) => n instanceof jt ? { ...n } : n;
function Fa(n, i) {
  i = i || {};
  const l = {};
  function o(m, h, v, w) {
    return L.isPlainObject(m) && L.isPlainObject(h) ? L.merge.call({ caseless: w }, m, h) : L.isPlainObject(h) ? L.merge({}, h) : L.isArray(h) ? h.slice() : h;
  }
  function u(m, h, v, w) {
    if (L.isUndefined(h)) {
      if (!L.isUndefined(m))
        return o(void 0, m, v, w);
    } else return o(m, h, v, w);
  }
  function c(m, h) {
    if (!L.isUndefined(h))
      return o(void 0, h);
  }
  function d(m, h) {
    if (L.isUndefined(h)) {
      if (!L.isUndefined(m))
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
    headers: (m, h, v) => u(vh(m), vh(h), v, !0)
  };
  return L.forEach(Object.keys(Object.assign({}, n, i)), function(h) {
    const v = g[h] || u, w = v(n[h], i[h], h);
    L.isUndefined(w) && v !== p || (l[h] = w);
  }), l;
}
const Bg = (n) => {
  const i = Fa({}, n);
  let { data: l, withXSRFToken: o, xsrfHeaderName: u, xsrfCookieName: c, headers: d, auth: p } = i;
  i.headers = d = jt.from(d), i.url = _g(qg(i.baseURL, i.url, i.allowAbsoluteUrls), n.params, n.paramsSerializer), p && d.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let g;
  if (L.isFormData(l)) {
    if (Et.hasStandardBrowserEnv || Et.hasStandardBrowserWebWorkerEnv)
      d.setContentType(void 0);
    else if ((g = d.getContentType()) !== !1) {
      const [m, ...h] = g ? g.split(";").map((v) => v.trim()).filter(Boolean) : [];
      d.setContentType([m || "multipart/form-data", ...h].join("; "));
    }
  }
  if (Et.hasStandardBrowserEnv && (o && L.isFunction(o) && (o = o(i)), o || o !== !1 && MS(i.url))) {
    const m = u && c && OS.read(c);
    m && d.set(u, m);
  }
  return i;
}, US = typeof XMLHttpRequest < "u", LS = US && function(n) {
  return new Promise(function(l, o) {
    const u = Bg(n);
    let c = u.data;
    const d = jt.from(u.headers).normalize();
    let { responseType: p, onUploadProgress: g, onDownloadProgress: m } = u, h, v, w, x, D;
    function R() {
      x && x(), D && D(), u.cancelToken && u.cancelToken.unsubscribe(h), u.signal && u.signal.removeEventListener("abort", h);
    }
    let j = new XMLHttpRequest();
    j.open(u.method.toUpperCase(), u.url, !0), j.timeout = u.timeout;
    function I() {
      if (!j)
        return;
      const P = jt.from(
        "getAllResponseHeaders" in j && j.getAllResponseHeaders()
      ), W = {
        data: !p || p === "text" || p === "json" ? j.responseText : j.response,
        status: j.status,
        statusText: j.statusText,
        headers: P,
        config: n,
        request: j
      };
      jg(function(ae) {
        l(ae), R();
      }, function(ae) {
        o(ae), R();
      }, W), j = null;
    }
    "onloadend" in j ? j.onloadend = I : j.onreadystatechange = function() {
      !j || j.readyState !== 4 || j.status === 0 && !(j.responseURL && j.responseURL.indexOf("file:") === 0) || setTimeout(I);
    }, j.onabort = function() {
      j && (o(new Ee("Request aborted", Ee.ECONNABORTED, n, j)), j = null);
    }, j.onerror = function() {
      o(new Ee("Network Error", Ee.ERR_NETWORK, n, j)), j = null;
    }, j.ontimeout = function() {
      let J = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded";
      const W = u.transitional || Ig;
      u.timeoutErrorMessage && (J = u.timeoutErrorMessage), o(new Ee(
        J,
        W.clarifyTimeoutError ? Ee.ETIMEDOUT : Ee.ECONNABORTED,
        n,
        j
      )), j = null;
    }, c === void 0 && d.setContentType(null), "setRequestHeader" in j && L.forEach(d.toJSON(), function(J, W) {
      j.setRequestHeader(W, J);
    }), L.isUndefined(u.withCredentials) || (j.withCredentials = !!u.withCredentials), p && p !== "json" && (j.responseType = u.responseType), m && ([w, D] = ko(m, !0), j.addEventListener("progress", w)), g && j.upload && ([v, x] = ko(g), j.upload.addEventListener("progress", v), j.upload.addEventListener("loadend", x)), (u.cancelToken || u.signal) && (h = (P) => {
      j && (o(!P || P.type ? new ji(null, n, j) : P), j.abort(), j = null);
    }, u.cancelToken && u.cancelToken.subscribe(h), u.signal && (u.signal.aborted ? h() : u.signal.addEventListener("abort", h)));
    const ee = zS(u.url);
    if (ee && Et.protocols.indexOf(ee) === -1) {
      o(new Ee("Unsupported protocol " + ee + ":", Ee.ERR_BAD_REQUEST, n));
      return;
    }
    j.send(c || null);
  });
}, jS = (n, i) => {
  const { length: l } = n = n ? n.filter(Boolean) : [];
  if (i || l) {
    let o = new AbortController(), u;
    const c = function(m) {
      if (!u) {
        u = !0, p();
        const h = m instanceof Error ? m : this.reason;
        o.abort(h instanceof Ee ? h : new ji(h instanceof Error ? h.message : h));
      }
    };
    let d = i && setTimeout(() => {
      d = null, c(new Ee(`timeout ${i} of ms exceeded`, Ee.ETIMEDOUT));
    }, i);
    const p = () => {
      n && (d && clearTimeout(d), d = null, n.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(c) : m.removeEventListener("abort", c);
      }), n = null);
    };
    n.forEach((m) => m.addEventListener("abort", c));
    const { signal: g } = o;
    return g.unsubscribe = () => L.asap(p), g;
  }
}, qS = function* (n, i) {
  let l = n.byteLength;
  if (l < i) {
    yield n;
    return;
  }
  let o = 0, u;
  for (; o < l; )
    u = o + i, yield n.slice(o, u), o = u;
}, BS = async function* (n, i) {
  for await (const l of HS(n))
    yield* qS(l, i);
}, HS = async function* (n) {
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
}, Sh = (n, i, l, o) => {
  const u = BS(n, i);
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
}, Uo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Hg = Uo && typeof ReadableStream == "function", VS = Uo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), Vg = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, QS = Hg && Vg(() => {
  let n = !1;
  const i = new Request(Et.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), xh = 64 * 1024, Dc = Hg && Vg(() => L.isReadableStream(new Response("").body)), Do = {
  stream: Dc && ((n) => n.body)
};
Uo && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !Do[i] && (Do[i] = L.isFunction(n[i]) ? (l) => l[i]() : (l, o) => {
      throw new Ee(`Response type '${i}' is not supported`, Ee.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const FS = async (n) => {
  if (n == null)
    return 0;
  if (L.isBlob(n))
    return n.size;
  if (L.isSpecCompliantForm(n))
    return (await new Request(Et.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (L.isArrayBufferView(n) || L.isArrayBuffer(n))
    return n.byteLength;
  if (L.isURLSearchParams(n) && (n = n + ""), L.isString(n))
    return (await VS(n)).byteLength;
}, PS = async (n, i) => {
  const l = L.toFiniteNumber(n.getContentLength());
  return l ?? FS(i);
}, GS = Uo && (async (n) => {
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
  } = Bg(n);
  m = m ? (m + "").toLowerCase() : "text";
  let x = jS([u, c && c.toAbortSignal()], d), D;
  const R = x && x.unsubscribe && (() => {
    x.unsubscribe();
  });
  let j;
  try {
    if (g && QS && l !== "get" && l !== "head" && (j = await PS(h, o)) !== 0) {
      let W = new Request(i, {
        method: "POST",
        body: o,
        duplex: "half"
      }), U;
      if (L.isFormData(o) && (U = W.headers.get("content-type")) && h.setContentType(U), W.body) {
        const [ae, X] = yh(
          j,
          ko(bh(g))
        );
        o = Sh(W.body, xh, ae, X);
      }
    }
    L.isString(v) || (v = v ? "include" : "omit");
    const I = "credentials" in Request.prototype;
    D = new Request(i, {
      ...w,
      signal: x,
      method: l.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: I ? v : void 0
    });
    let ee = await fetch(D, w);
    const P = Dc && (m === "stream" || m === "response");
    if (Dc && (p || P && R)) {
      const W = {};
      ["status", "statusText", "headers"].forEach((ce) => {
        W[ce] = ee[ce];
      });
      const U = L.toFiniteNumber(ee.headers.get("content-length")), [ae, X] = p && yh(
        U,
        ko(bh(p), !0)
      ) || [];
      ee = new Response(
        Sh(ee.body, xh, ae, () => {
          X && X(), R && R();
        }),
        W
      );
    }
    m = m || "text";
    let J = await Do[L.findKey(Do, m) || "text"](ee, n);
    return !P && R && R(), await new Promise((W, U) => {
      jg(W, U, {
        data: J,
        headers: jt.from(ee.headers),
        status: ee.status,
        statusText: ee.statusText,
        config: n,
        request: D
      });
    });
  } catch (I) {
    throw R && R(), I && I.name === "TypeError" && /Load failed|fetch/i.test(I.message) ? Object.assign(
      new Ee("Network Error", Ee.ERR_NETWORK, n, D),
      {
        cause: I.cause || I
      }
    ) : Ee.from(I, I && I.code, n, D);
  }
}), zc = {
  http: oS,
  xhr: LS,
  fetch: GS
};
L.forEach(zc, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const Ah = (n) => `- ${n}`, YS = (n) => L.isFunction(n) || n === null || n === !1, Qg = {
  getAdapter: (n) => {
    n = L.isArray(n) ? n : [n];
    const { length: i } = n;
    let l, o;
    const u = {};
    for (let c = 0; c < i; c++) {
      l = n[c];
      let d;
      if (o = l, !YS(l) && (o = zc[(d = String(l)).toLowerCase()], o === void 0))
        throw new Ee(`Unknown adapter '${d}'`);
      if (o)
        break;
      u[d || "#" + c] = o;
    }
    if (!o) {
      const c = Object.entries(u).map(
        ([p, g]) => `adapter ${p} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let d = i ? c.length > 1 ? `since :
` + c.map(Ah).join(`
`) : " " + Ah(c[0]) : "as no adapter specified";
      throw new Ee(
        "There is no suitable adapter to dispatch the request " + d,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: zc
};
function oc(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new ji(null, n);
}
function wh(n) {
  return oc(n), n.headers = jt.from(n.headers), n.data = lc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Qg.getAdapter(n.adapter || tl.adapter)(n).then(function(o) {
    return oc(n), o.data = lc.call(
      n,
      n.transformResponse,
      o
    ), o.headers = jt.from(o.headers), o;
  }, function(o) {
    return Lg(o) || (oc(n), o && o.response && (o.response.data = lc.call(
      n,
      n.transformResponse,
      o.response
    ), o.response.headers = jt.from(o.response.headers))), Promise.reject(o);
  });
}
const Fg = "1.10.0", Lo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, i) => {
  Lo[n] = function(o) {
    return typeof o === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
const Th = {};
Lo.transitional = function(i, l, o) {
  function u(c, d) {
    return "[Axios v" + Fg + "] Transitional option '" + c + "'" + d + (o ? ". " + o : "");
  }
  return (c, d, p) => {
    if (i === !1)
      throw new Ee(
        u(d, " has been removed" + (l ? " in " + l : "")),
        Ee.ERR_DEPRECATED
      );
    return l && !Th[d] && (Th[d] = !0, console.warn(
      u(
        d,
        " has been deprecated since v" + l + " and will be removed in the near future"
      )
    )), i ? i(c, d, p) : !0;
  };
};
Lo.spelling = function(i) {
  return (l, o) => (console.warn(`${o} is likely a misspelling of ${i}`), !0);
};
function KS(n, i, l) {
  if (typeof n != "object")
    throw new Ee("options must be an object", Ee.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let u = o.length;
  for (; u-- > 0; ) {
    const c = o[u], d = i[c];
    if (d) {
      const p = n[c], g = p === void 0 || d(p, c, n);
      if (g !== !0)
        throw new Ee("option " + c + " must be " + g, Ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (l !== !0)
      throw new Ee("Unknown option " + c, Ee.ERR_BAD_OPTION);
  }
}
const wo = {
  assertOptions: KS,
  validators: Lo
}, Cn = wo.validators;
let Qa = class {
  constructor(i) {
    this.defaults = i || {}, this.interceptors = {
      request: new hh(),
      response: new hh()
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
    typeof i == "string" ? (l = l || {}, l.url = i) : l = i || {}, l = Fa(this.defaults, l);
    const { transitional: o, paramsSerializer: u, headers: c } = l;
    o !== void 0 && wo.assertOptions(o, {
      silentJSONParsing: Cn.transitional(Cn.boolean),
      forcedJSONParsing: Cn.transitional(Cn.boolean),
      clarifyTimeoutError: Cn.transitional(Cn.boolean)
    }, !1), u != null && (L.isFunction(u) ? l.paramsSerializer = {
      serialize: u
    } : wo.assertOptions(u, {
      encode: Cn.function,
      serialize: Cn.function
    }, !0)), l.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : l.allowAbsoluteUrls = !0), wo.assertOptions(l, {
      baseUrl: Cn.spelling("baseURL"),
      withXsrfToken: Cn.spelling("withXSRFToken")
    }, !0), l.method = (l.method || this.defaults.method || "get").toLowerCase();
    let d = c && L.merge(
      c.common,
      c[l.method]
    );
    c && L.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (D) => {
        delete c[D];
      }
    ), l.headers = jt.concat(d, c);
    const p = [];
    let g = !0;
    this.interceptors.request.forEach(function(R) {
      typeof R.runWhen == "function" && R.runWhen(l) === !1 || (g = g && R.synchronous, p.unshift(R.fulfilled, R.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(R) {
      m.push(R.fulfilled, R.rejected);
    });
    let h, v = 0, w;
    if (!g) {
      const D = [wh.bind(this), void 0];
      for (D.unshift.apply(D, p), D.push.apply(D, m), w = D.length, h = Promise.resolve(l); v < w; )
        h = h.then(D[v++], D[v++]);
      return h;
    }
    w = p.length;
    let x = l;
    for (v = 0; v < w; ) {
      const D = p[v++], R = p[v++];
      try {
        x = D(x);
      } catch (j) {
        R.call(this, j);
        break;
      }
    }
    try {
      h = wh.call(this, x);
    } catch (D) {
      return Promise.reject(D);
    }
    for (v = 0, w = m.length; v < w; )
      h = h.then(m[v++], m[v++]);
    return h;
  }
  getUri(i) {
    i = Fa(this.defaults, i);
    const l = qg(i.baseURL, i.url, i.allowAbsoluteUrls);
    return _g(l, i.params, i.paramsSerializer);
  }
};
L.forEach(["delete", "get", "head", "options"], function(i) {
  Qa.prototype[i] = function(l, o) {
    return this.request(Fa(o || {}, {
      method: i,
      url: l,
      data: (o || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(i) {
  function l(o) {
    return function(c, d, p) {
      return this.request(Fa(p || {}, {
        method: i,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  Qa.prototype[i] = l(), Qa.prototype[i + "Form"] = l(!0);
});
let XS = class Pg {
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
      o.reason || (o.reason = new ji(c, d, p), l(o.reason));
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
      token: new Pg(function(u) {
        i = u;
      }),
      cancel: i
    };
  }
};
function ZS(n) {
  return function(l) {
    return n.apply(null, l);
  };
}
function JS(n) {
  return L.isObject(n) && n.isAxiosError === !0;
}
const Rc = {
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
Object.entries(Rc).forEach(([n, i]) => {
  Rc[i] = n;
});
function Gg(n) {
  const i = new Qa(n), l = Ag(Qa.prototype.request, i);
  return L.extend(l, Qa.prototype, i, { allOwnKeys: !0 }), L.extend(l, i, null, { allOwnKeys: !0 }), l.create = function(u) {
    return Gg(Fa(n, u));
  }, l;
}
const ze = Gg(tl);
ze.Axios = Qa;
ze.CanceledError = ji;
ze.CancelToken = XS;
ze.isCancel = Lg;
ze.VERSION = Fg;
ze.toFormData = Io;
ze.AxiosError = Ee;
ze.Cancel = ze.CanceledError;
ze.all = function(i) {
  return Promise.all(i);
};
ze.spread = ZS;
ze.isAxiosError = JS;
ze.mergeConfig = Fa;
ze.AxiosHeaders = jt;
ze.formToJSON = (n) => Ug(L.isHTMLForm(n) ? new FormData(n) : n);
ze.getAdapter = Qg.getAdapter;
ze.HttpStatusCode = Rc;
ze.default = ze;
const {
  Axios: OC,
  AxiosError: _C,
  CanceledError: IC,
  isCancel: UC,
  CancelToken: LC,
  VERSION: jC,
  all: qC,
  Cancel: BC,
  isAxiosError: HC,
  spread: VC,
  toFormData: QC,
  AxiosHeaders: FC,
  HttpStatusCode: PC,
  formToJSON: GC,
  getAdapter: YC,
  mergeConfig: KC
} = ze;
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WS = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $S = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, l, o) => o ? o.toUpperCase() : l.toLowerCase()
), Eh = (n) => {
  const i = $S(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, Yg = (...n) => n.filter((i, l, o) => !!i && i.trim() !== "" && o.indexOf(i) === l).join(" ").trim(), ex = (n) => {
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
var tx = {
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
const nx = ue.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: o,
    className: u = "",
    children: c,
    iconNode: d,
    ...p
  }, g) => ue.createElement(
    "svg",
    {
      ref: g,
      ...tx,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: o ? Number(l) * 24 / Number(i) : l,
      className: Yg("lucide", u),
      ...!c && !ex(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([m, h]) => ue.createElement(m, h)),
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
const Ct = (n, i) => {
  const l = ue.forwardRef(
    ({ className: o, ...u }, c) => ue.createElement(nx, {
      ref: c,
      iconNode: i,
      className: Yg(
        `lucide-${WS(Eh(n))}`,
        `lucide-${n}`,
        o
      ),
      ...u
    })
  );
  return l.displayName = Eh(n), l;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], Kg = Ct("bot", ax);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ix = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Xg = Ct("chevron-down", ix);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], lx = Ct("copy", rx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], sx = Ct("globe", ox);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Zg = Ct("loader-circle", ux);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], fx = Ct("mail", cx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dx = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], Ch = Ct("message-circle", dx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const px = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], mx = Ct("minimize-2", px);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hx = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], gx = Ct("moon", hx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], bx = Ct("phone", yx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Sx = Ct("send", vx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xx = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], Ax = Ct("sun", xx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ]
], Tx = Ct("thumbs-down", wx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ex = [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ]
], Cx = Ct("thumbs-up", Ex);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Jg = Ct("user", kx);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dx = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Wg = Ct("x", Dx);
function $g(n) {
  var i, l, o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var u = n.length;
    for (i = 0; i < u; i++) n[i] && (l = $g(n[i])) && (o && (o += " "), o += l);
  } else for (l in n) n[l] && (o && (o += " "), o += l);
  return o;
}
function ey() {
  for (var n, i, l = 0, o = "", u = arguments.length; l < u; l++) (n = arguments[l]) && (i = $g(n)) && (o && (o += " "), o += i);
  return o;
}
const Zc = "-", zx = (n) => {
  const i = Nx(n), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: o
  } = n;
  return {
    getClassGroupId: (d) => {
      const p = d.split(Zc);
      return p[0] === "" && p.length !== 1 && p.shift(), ty(p, i) || Rx(d);
    },
    getConflictingClassGroupIds: (d, p) => {
      const g = l[d] || [];
      return p && o[d] ? [...g, ...o[d]] : g;
    }
  };
}, ty = (n, i) => {
  if (n.length === 0)
    return i.classGroupId;
  const l = n[0], o = i.nextPart.get(l), u = o ? ty(n.slice(1), o) : void 0;
  if (u)
    return u;
  if (i.validators.length === 0)
    return;
  const c = n.join(Zc);
  return i.validators.find(({
    validator: d
  }) => d(c))?.classGroupId;
}, kh = /^\[(.+)\]$/, Rx = (n) => {
  if (kh.test(n)) {
    const i = kh.exec(n)[1], l = i?.substring(0, i.indexOf(":"));
    if (l)
      return "arbitrary.." + l;
  }
}, Nx = (n) => {
  const {
    theme: i,
    classGroups: l
  } = n, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const u in l)
    Nc(l[u], o, u, i);
  return o;
}, Nc = (n, i, l, o) => {
  n.forEach((u) => {
    if (typeof u == "string") {
      const c = u === "" ? i : Dh(i, u);
      c.classGroupId = l;
      return;
    }
    if (typeof u == "function") {
      if (Mx(u)) {
        Nc(u(o), i, l, o);
        return;
      }
      i.validators.push({
        validator: u,
        classGroupId: l
      });
      return;
    }
    Object.entries(u).forEach(([c, d]) => {
      Nc(d, Dh(i, c), l, o);
    });
  });
}, Dh = (n, i) => {
  let l = n;
  return i.split(Zc).forEach((o) => {
    l.nextPart.has(o) || l.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), l = l.nextPart.get(o);
  }), l;
}, Mx = (n) => n.isThemeGetter, Ox = (n) => {
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
}, Mc = "!", Oc = ":", _x = Oc.length, Ix = (n) => {
  const {
    prefix: i,
    experimentalParseClassName: l
  } = n;
  let o = (u) => {
    const c = [];
    let d = 0, p = 0, g = 0, m;
    for (let D = 0; D < u.length; D++) {
      let R = u[D];
      if (d === 0 && p === 0) {
        if (R === Oc) {
          c.push(u.slice(g, D)), g = D + _x;
          continue;
        }
        if (R === "/") {
          m = D;
          continue;
        }
      }
      R === "[" ? d++ : R === "]" ? d-- : R === "(" ? p++ : R === ")" && p--;
    }
    const h = c.length === 0 ? u : u.substring(g), v = Ux(h), w = v !== h, x = m && m > g ? m - g : void 0;
    return {
      modifiers: c,
      hasImportantModifier: w,
      baseClassName: v,
      maybePostfixModifierPosition: x
    };
  };
  if (i) {
    const u = i + Oc, c = o;
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
}, Ux = (n) => n.endsWith(Mc) ? n.substring(0, n.length - 1) : n.startsWith(Mc) ? n.substring(1) : n, Lx = (n) => {
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
}, jx = (n) => ({
  cache: Ox(n.cacheSize),
  parseClassName: Ix(n),
  sortModifiers: Lx(n),
  ...zx(n)
}), qx = /\s+/, Bx = (n, i) => {
  const {
    parseClassName: l,
    getClassGroupId: o,
    getConflictingClassGroupIds: u,
    sortModifiers: c
  } = i, d = [], p = n.trim().split(qx);
  let g = "";
  for (let m = p.length - 1; m >= 0; m -= 1) {
    const h = p[m], {
      isExternal: v,
      modifiers: w,
      hasImportantModifier: x,
      baseClassName: D,
      maybePostfixModifierPosition: R
    } = l(h);
    if (v) {
      g = h + (g.length > 0 ? " " + g : g);
      continue;
    }
    let j = !!R, I = o(j ? D.substring(0, R) : D);
    if (!I) {
      if (!j) {
        g = h + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (I = o(D), !I) {
        g = h + (g.length > 0 ? " " + g : g);
        continue;
      }
      j = !1;
    }
    const ee = c(w).join(":"), P = x ? ee + Mc : ee, J = P + I;
    if (d.includes(J))
      continue;
    d.push(J);
    const W = u(I, j);
    for (let U = 0; U < W.length; ++U) {
      const ae = W[U];
      d.push(P + ae);
    }
    g = h + (g.length > 0 ? " " + g : g);
  }
  return g;
};
function Hx() {
  let n = 0, i, l, o = "";
  for (; n < arguments.length; )
    (i = arguments[n++]) && (l = ny(i)) && (o && (o += " "), o += l);
  return o;
}
const ny = (n) => {
  if (typeof n == "string")
    return n;
  let i, l = "";
  for (let o = 0; o < n.length; o++)
    n[o] && (i = ny(n[o])) && (l && (l += " "), l += i);
  return l;
};
function Vx(n, ...i) {
  let l, o, u, c = d;
  function d(g) {
    const m = i.reduce((h, v) => v(h), n());
    return l = jx(m), o = l.cache.get, u = l.cache.set, c = p, p(g);
  }
  function p(g) {
    const m = o(g);
    if (m)
      return m;
    const h = Bx(g, l);
    return u(g, h), h;
  }
  return function() {
    return c(Hx.apply(null, arguments));
  };
}
const ft = (n) => {
  const i = (l) => l[n] || [];
  return i.isThemeGetter = !0, i;
}, ay = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, iy = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Qx = /^\d+\/\d+$/, Fx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Px = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Gx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Yx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Mi = (n) => Qx.test(n), Ne = (n) => !!n && !Number.isNaN(Number(n)), ba = (n) => !!n && Number.isInteger(Number(n)), sc = (n) => n.endsWith("%") && Ne(n.slice(0, -1)), Gn = (n) => Fx.test(n), Xx = () => !0, Zx = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Px.test(n) && !Gx.test(n)
), ry = () => !1, Jx = (n) => Yx.test(n), Wx = (n) => Kx.test(n), $x = (n) => !de(n) && !pe(n), e1 = (n) => qi(n, sy, ry), de = (n) => ay.test(n), Ba = (n) => qi(n, uy, Zx), uc = (n) => qi(n, r1, Ne), zh = (n) => qi(n, ly, ry), t1 = (n) => qi(n, oy, Wx), ho = (n) => qi(n, cy, Jx), pe = (n) => iy.test(n), Vr = (n) => Bi(n, uy), n1 = (n) => Bi(n, l1), Rh = (n) => Bi(n, ly), a1 = (n) => Bi(n, sy), i1 = (n) => Bi(n, oy), go = (n) => Bi(n, cy, !0), qi = (n, i, l) => {
  const o = ay.exec(n);
  return o ? o[1] ? i(o[1]) : l(o[2]) : !1;
}, Bi = (n, i, l = !1) => {
  const o = iy.exec(n);
  return o ? o[1] ? i(o[1]) : l : !1;
}, ly = (n) => n === "position" || n === "percentage", oy = (n) => n === "image" || n === "url", sy = (n) => n === "length" || n === "size" || n === "bg-size", uy = (n) => n === "length", r1 = (n) => n === "number", l1 = (n) => n === "family-name", cy = (n) => n === "shadow", o1 = () => {
  const n = ft("color"), i = ft("font"), l = ft("text"), o = ft("font-weight"), u = ft("tracking"), c = ft("leading"), d = ft("breakpoint"), p = ft("container"), g = ft("spacing"), m = ft("radius"), h = ft("shadow"), v = ft("inset-shadow"), w = ft("text-shadow"), x = ft("drop-shadow"), D = ft("blur"), R = ft("perspective"), j = ft("aspect"), I = ft("ease"), ee = ft("animate"), P = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], J = () => [
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
  ], W = () => [...J(), pe, de], U = () => ["auto", "hidden", "clip", "visible", "scroll"], ae = () => ["auto", "contain", "none"], X = () => [pe, de, g], ce = () => [Mi, "full", "auto", ...X()], ge = () => [ba, "none", "subgrid", pe, de], re = () => ["auto", {
    span: ["full", ba, pe, de]
  }, ba, pe, de], te = () => [ba, "auto", pe, de], oe = () => ["auto", "min", "max", "fr", pe, de], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Y = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...X()], G = () => [Mi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...X()], Q = () => [n, pe, de], Te = () => [...J(), Rh, zh, {
    position: [pe, de]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], q = () => ["auto", "cover", "contain", a1, e1, {
    size: [pe, de]
  }], $ = () => [sc, Vr, Ba], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    m,
    pe,
    de
  ], ne = () => ["", Ne, Vr, Ba], Ae = () => ["solid", "dashed", "dotted", "double"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], De = () => [Ne, sc, Rh, zh], Me = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    D,
    pe,
    de
  ], tt = () => ["none", Ne, pe, de], yt = () => ["none", Ne, pe, de], xt = () => [Ne, pe, de], $t = () => [Mi, "full", ...X()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Gn],
      breakpoint: [Gn],
      color: [Xx],
      container: [Gn],
      "drop-shadow": [Gn],
      ease: ["in", "out", "in-out"],
      font: [$x],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Gn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Gn],
      shadow: [Gn],
      spacing: ["px", Ne],
      text: [Gn],
      "text-shadow": [Gn],
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
        aspect: ["auto", "square", Mi, de, pe, j]
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
        columns: [Ne, de, pe, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": P()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": P()
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
        object: W()
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
        overscroll: ae()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ae()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ae()
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
        inset: ce()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": ce()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": ce()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: ce()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: ce()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: ce()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: ce()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: ce()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: ce()
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
        z: [ba, "auto", pe, de]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Mi, "full", "auto", p, ...X()]
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
        flex: [Ne, Mi, "auto", "initial", "none", de]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ne, pe, de]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ne, pe, de]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ba, "first", "last", "none", pe, de]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ge()
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
        "grid-rows": ge()
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
        "auto-cols": oe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": oe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: X()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": X()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": X()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ie(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Y(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Y()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ie()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Y(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Y(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ie()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Y(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Y()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: X()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: X()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: X()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: X()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: X()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: X()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: X()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: X()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: X()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: M()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: M()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: M()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: M()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: M()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: M()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: M()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: M()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: M()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": X()
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
        "space-y": X()
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
        text: ["base", l, Vr, Ba]
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
        font: [o, pe, uc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", sc, de]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [n1, de, i]
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
        tracking: [u, pe, de]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ne, "none", pe, uc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          c,
          ...X()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", pe, de]
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
        list: ["disc", "decimal", "none", pe, de]
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
        placeholder: Q()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: Q()
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
        decoration: [...Ae(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ne, "from-font", "auto", pe, Ba]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: Q()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ne, "auto", pe, de]
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
        indent: X()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pe, de]
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
        content: ["none", pe, de]
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
        bg: Te()
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
          }, ba, pe, de],
          radial: ["", pe, de],
          conic: [ba, pe, de]
        }, i1, t1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: Q()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: $()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: $()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: $()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: Q()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: Q()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: Q()
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
        border: [...Ae(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ae(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: Q()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": Q()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": Q()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": Q()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": Q()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": Q()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": Q()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": Q()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": Q()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: Q()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ae(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ne, pe, de]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ne, Vr, Ba]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: Q()
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
          go,
          ho
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: Q()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", v, go, ho]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": Q()
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
        ring: Q()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ne, Ba]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": Q()
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
        "inset-ring": Q()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, go, ho]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": Q()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ne, pe, de]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        "mask-linear": [Ne]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": De()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": De()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": Q()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": De()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": De()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": Q()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": De()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": De()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": Q()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": De()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": De()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": Q()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": De()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": De()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": Q()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": De()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": De()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": Q()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": De()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": De()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": Q()
      }],
      "mask-image-radial": [{
        "mask-radial": [pe, de]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": De()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": De()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": Q()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": Q()
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
        "mask-radial-at": J()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ne]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": De()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": De()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": Q()
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
        mask: Te()
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
        mask: ["none", pe, de]
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
          pe,
          de
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Me()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ne, pe, de]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ne, pe, de]
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
          go,
          ho
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": Q()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ne, pe, de]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ne, pe, de]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ne, pe, de]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ne, pe, de]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ne, pe, de]
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
          pe,
          de
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Me()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ne, pe, de]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ne, pe, de]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ne, pe, de]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ne, pe, de]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ne, pe, de]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ne, pe, de]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ne, pe, de]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ne, pe, de]
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
        "border-spacing": X()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": X()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": X()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", pe, de]
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
        duration: [Ne, "initial", pe, de]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", I, pe, de]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ne, pe, de]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", ee, pe, de]
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
        perspective: [R, pe, de]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": W()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: tt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": tt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": tt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": tt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: yt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": yt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": yt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": yt()
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
        skew: xt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": xt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": xt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [pe, de, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: W()
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
        translate: $t()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": $t()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": $t()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": $t()
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
        accent: Q()
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
        caret: Q()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pe, de]
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
        "scroll-m": X()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": X()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": X()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": X()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": X()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": X()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": X()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": X()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": X()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": X()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": X()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": X()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": X()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": X()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": X()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": X()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": X()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": X()
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
        "will-change": ["auto", "scroll", "contents", "transform", pe, de]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...Q()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ne, Vr, Ba, uc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...Q()]
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
}, s1 = /* @__PURE__ */ Vx(o1);
function Pa(...n) {
  return s1(ey(n));
}
function Yr(n, i) {
  const l = n.replace("#", ""), o = parseInt(l.substr(0, 2), 16), u = parseInt(l.substr(2, 2), 16), c = parseInt(l.substr(4, 2), 16), d = (100 - i) / 100, p = Math.round(o * d), g = Math.round(u * d), m = Math.round(c * d);
  return "#" + (p < 16 ? "0" : "") + p.toString(16) + (g < 16 ? "0" : "") + g.toString(16) + (m < 16 ? "0" : "") + m.toString(16);
}
function u1(n, i) {
  const l = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (l.padRight ? " " : "") + "," + (l.padLeft === !1 ? "" : " ")
  ).trim();
}
const c1 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, f1 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, d1 = {};
function Nh(n, i) {
  return (d1.jsx ? f1 : c1).test(n);
}
const p1 = /[ \t\n\f\r]/g;
function m1(n) {
  return typeof n == "object" ? n.type === "text" ? Mh(n.value) : !1 : Mh(n);
}
function Mh(n) {
  return n.replace(p1, "") === "";
}
class nl {
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
nl.prototype.normal = {};
nl.prototype.property = {};
nl.prototype.space = void 0;
function fy(n, i) {
  const l = {}, o = {};
  for (const u of n)
    Object.assign(l, u.property), Object.assign(o, u.normal);
  return new nl(l, o, i);
}
function _c(n) {
  return n.toLowerCase();
}
class Bt {
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
Bt.prototype.attribute = "";
Bt.prototype.booleanish = !1;
Bt.prototype.boolean = !1;
Bt.prototype.commaOrSpaceSeparated = !1;
Bt.prototype.commaSeparated = !1;
Bt.prototype.defined = !1;
Bt.prototype.mustUseProperty = !1;
Bt.prototype.number = !1;
Bt.prototype.overloadedBoolean = !1;
Bt.prototype.property = "";
Bt.prototype.spaceSeparated = !1;
Bt.prototype.space = void 0;
let h1 = 0;
const ke = Ga(), st = Ga(), Ic = Ga(), Z = Ga(), Je = Ga(), Ii = Ga(), Jt = Ga();
function Ga() {
  return 2 ** ++h1;
}
const Uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ke,
  booleanish: st,
  commaOrSpaceSeparated: Jt,
  commaSeparated: Ii,
  number: Z,
  overloadedBoolean: Ic,
  spaceSeparated: Je
}, Symbol.toStringTag, { value: "Module" })), cc = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Uc)
);
class Jc extends Bt {
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
    if (super(i, l), Oh(this, "space", u), typeof o == "number")
      for (; ++c < cc.length; ) {
        const d = cc[c];
        Oh(this, cc[c], (o & Uc[d]) === Uc[d]);
      }
  }
}
Jc.prototype.defined = !0;
function Oh(n, i, l) {
  l && (n[i] = l);
}
function Hi(n) {
  const i = {}, l = {};
  for (const [o, u] of Object.entries(n.properties)) {
    const c = new Jc(
      o,
      n.transform(n.attributes || {}, o),
      u,
      n.space
    );
    n.mustUseProperty && n.mustUseProperty.includes(o) && (c.mustUseProperty = !0), i[o] = c, l[_c(o)] = o, l[_c(c.attribute)] = o;
  }
  return new nl(i, l, n.space);
}
const dy = Hi({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: st,
    ariaAutoComplete: null,
    ariaBusy: st,
    ariaChecked: st,
    ariaColCount: Z,
    ariaColIndex: Z,
    ariaColSpan: Z,
    ariaControls: Je,
    ariaCurrent: null,
    ariaDescribedBy: Je,
    ariaDetails: null,
    ariaDisabled: st,
    ariaDropEffect: Je,
    ariaErrorMessage: null,
    ariaExpanded: st,
    ariaFlowTo: Je,
    ariaGrabbed: st,
    ariaHasPopup: null,
    ariaHidden: st,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Je,
    ariaLevel: Z,
    ariaLive: null,
    ariaModal: st,
    ariaMultiLine: st,
    ariaMultiSelectable: st,
    ariaOrientation: null,
    ariaOwns: Je,
    ariaPlaceholder: null,
    ariaPosInSet: Z,
    ariaPressed: st,
    ariaReadOnly: st,
    ariaRelevant: null,
    ariaRequired: st,
    ariaRoleDescription: Je,
    ariaRowCount: Z,
    ariaRowIndex: Z,
    ariaRowSpan: Z,
    ariaSelected: st,
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
function py(n, i) {
  return i in n ? n[i] : i;
}
function my(n, i) {
  return py(n, i.toLowerCase());
}
const g1 = Hi({
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
    accept: Ii,
    acceptCharset: Je,
    accessKey: Je,
    action: null,
    allow: null,
    allowFullScreen: ke,
    allowPaymentRequest: ke,
    allowUserMedia: ke,
    alt: null,
    as: null,
    async: ke,
    autoCapitalize: null,
    autoComplete: Je,
    autoFocus: ke,
    autoPlay: ke,
    blocking: Je,
    capture: null,
    charSet: null,
    checked: ke,
    cite: null,
    className: Je,
    cols: Z,
    colSpan: null,
    content: null,
    contentEditable: st,
    controls: ke,
    controlsList: Je,
    coords: Z | Ii,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ke,
    defer: ke,
    dir: null,
    dirName: null,
    disabled: ke,
    download: Ic,
    draggable: st,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ke,
    formTarget: null,
    headers: Je,
    height: Z,
    hidden: Ic,
    high: Z,
    href: null,
    hrefLang: null,
    htmlFor: Je,
    httpEquiv: Je,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ke,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ke,
    itemId: null,
    itemProp: Je,
    itemRef: Je,
    itemScope: ke,
    itemType: Je,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ke,
    low: Z,
    manifest: null,
    max: null,
    maxLength: Z,
    media: null,
    method: null,
    min: null,
    minLength: Z,
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
    optimum: Z,
    pattern: null,
    ping: Je,
    placeholder: null,
    playsInline: ke,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ke,
    referrerPolicy: null,
    rel: Je,
    required: ke,
    reversed: ke,
    rows: Z,
    rowSpan: Z,
    sandbox: Je,
    scope: null,
    scoped: ke,
    seamless: ke,
    selected: ke,
    shadowRootClonable: ke,
    shadowRootDelegatesFocus: ke,
    shadowRootMode: null,
    shape: null,
    size: Z,
    sizes: null,
    slot: null,
    span: Z,
    spellCheck: st,
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
    typeMustMatch: ke,
    useMap: null,
    value: st,
    width: Z,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Je,
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
    rightMargin: Z,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: st,
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
    disablePictureInPicture: ke,
    disableRemotePlayback: ke,
    prefix: null,
    property: null,
    results: Z,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: my
}), y1 = Hi({
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
    about: Jt,
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
    className: Je,
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
    download: ke,
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
    g1: Ii,
    g2: Ii,
    glyphName: Ii,
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
    kernelMatrix: Jt,
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
    ping: Je,
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
    property: Jt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Jt,
    rev: Jt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Jt,
    requiredFeatures: Jt,
    requiredFonts: Jt,
    requiredFormats: Jt,
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
    strokeDashArray: Jt,
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
    systemLanguage: Jt,
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
    typeOf: Jt,
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
  transform: py
}), hy = Hi({
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
}), gy = Hi({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: my
}), yy = Hi({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(n, i) {
    return "xml:" + i.slice(3).toLowerCase();
  }
}), b1 = {
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
}, v1 = /[A-Z]/g, _h = /-[a-z]/g, S1 = /^data[-\w.:]+$/i;
function x1(n, i) {
  const l = _c(i);
  let o = i, u = Bt;
  if (l in n.normal)
    return n.property[n.normal[l]];
  if (l.length > 4 && l.slice(0, 4) === "data" && S1.test(i)) {
    if (i.charAt(4) === "-") {
      const c = i.slice(5).replace(_h, w1);
      o = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!_h.test(c)) {
        let d = c.replace(v1, A1);
        d.charAt(0) !== "-" && (d = "-" + d), i = "data" + d;
      }
    }
    u = Jc;
  }
  return new u(o, i);
}
function A1(n) {
  return "-" + n.toLowerCase();
}
function w1(n) {
  return n.charAt(1).toUpperCase();
}
const T1 = fy([dy, g1, hy, gy, yy], "html"), Wc = fy([dy, y1, hy, gy, yy], "svg");
function E1(n) {
  return n.join(" ").trim();
}
var Oi = {}, fc, Ih;
function C1() {
  if (Ih) return fc;
  Ih = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, l = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, u = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, d = /^[;\s]*/, p = /^\s+|\s+$/g, g = `
`, m = "/", h = "*", v = "", w = "comment", x = "declaration";
  fc = function(R, j) {
    if (typeof R != "string")
      throw new TypeError("First argument must be a string");
    if (!R) return [];
    j = j || {};
    var I = 1, ee = 1;
    function P(oe) {
      var ie = oe.match(i);
      ie && (I += ie.length);
      var Y = oe.lastIndexOf(g);
      ee = ~Y ? oe.length - Y : ee + oe.length;
    }
    function J() {
      var oe = { line: I, column: ee };
      return function(ie) {
        return ie.position = new W(oe), X(), ie;
      };
    }
    function W(oe) {
      this.start = oe, this.end = { line: I, column: ee }, this.source = j.source;
    }
    W.prototype.content = R;
    function U(oe) {
      var ie = new Error(
        j.source + ":" + I + ":" + ee + ": " + oe
      );
      if (ie.reason = oe, ie.filename = j.source, ie.line = I, ie.column = ee, ie.source = R, !j.silent) throw ie;
    }
    function ae(oe) {
      var ie = oe.exec(R);
      if (ie) {
        var Y = ie[0];
        return P(Y), R = R.slice(Y.length), ie;
      }
    }
    function X() {
      ae(l);
    }
    function ce(oe) {
      var ie;
      for (oe = oe || []; ie = ge(); )
        ie !== !1 && oe.push(ie);
      return oe;
    }
    function ge() {
      var oe = J();
      if (!(m != R.charAt(0) || h != R.charAt(1))) {
        for (var ie = 2; v != R.charAt(ie) && (h != R.charAt(ie) || m != R.charAt(ie + 1)); )
          ++ie;
        if (ie += 2, v === R.charAt(ie - 1))
          return U("End of comment missing");
        var Y = R.slice(2, ie - 2);
        return ee += 2, P(Y), R = R.slice(ie), ee += 2, oe({
          type: w,
          comment: Y
        });
      }
    }
    function re() {
      var oe = J(), ie = ae(o);
      if (ie) {
        if (ge(), !ae(u)) return U("property missing ':'");
        var Y = ae(c), M = oe({
          type: x,
          property: D(ie[0].replace(n, v)),
          value: Y ? D(Y[0].replace(n, v)) : v
        });
        return ae(d), M;
      }
    }
    function te() {
      var oe = [];
      ce(oe);
      for (var ie; ie = re(); )
        ie !== !1 && (oe.push(ie), ce(oe));
      return oe;
    }
    return X(), te();
  };
  function D(R) {
    return R ? R.replace(p, v) : v;
  }
  return fc;
}
var Uh;
function k1() {
  if (Uh) return Oi;
  Uh = 1;
  var n = Oi && Oi.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(Oi, "__esModule", { value: !0 }), Oi.default = l;
  var i = n(C1());
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
  return Oi;
}
var Qr = {}, Lh;
function D1() {
  if (Lh) return Qr;
  Lh = 1, Object.defineProperty(Qr, "__esModule", { value: !0 }), Qr.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, l = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, u = /^-(ms)-/, c = function(m) {
    return !m || l.test(m) || n.test(m);
  }, d = function(m, h) {
    return h.toUpperCase();
  }, p = function(m, h) {
    return "".concat(h, "-");
  }, g = function(m, h) {
    return h === void 0 && (h = {}), c(m) ? m : (m = m.toLowerCase(), h.reactCompat ? m = m.replace(u, p) : m = m.replace(o, p), m.replace(i, d));
  };
  return Qr.camelCase = g, Qr;
}
var Fr, jh;
function z1() {
  if (jh) return Fr;
  jh = 1;
  var n = Fr && Fr.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  }, i = n(k1()), l = D1();
  function o(u, c) {
    var d = {};
    return !u || typeof u != "string" || (0, i.default)(u, function(p, g) {
      p && g && (d[(0, l.camelCase)(p, c)] = g);
    }), d;
  }
  return o.default = o, Fr = o, Fr;
}
var R1 = z1();
const N1 = /* @__PURE__ */ Pc(R1), by = vy("end"), $c = vy("start");
function vy(n) {
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
function M1(n) {
  const i = $c(n), l = by(n);
  if (i && l)
    return { start: i, end: l };
}
function Kr(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? qh(n.position) : "start" in n || "end" in n ? qh(n) : "line" in n || "column" in n ? Lc(n) : "";
}
function Lc(n) {
  return Bh(n && n.line) + ":" + Bh(n && n.column);
}
function qh(n) {
  return Lc(n && n.start) + "-" + Lc(n && n.end);
}
function Bh(n) {
  return n && typeof n == "number" ? n : 1;
}
class kt extends Error {
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
    this.ancestors = c.ancestors || void 0, this.cause = c.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file, this.message = u, this.line = p ? p.line : void 0, this.name = Kr(c.place) || "1:1", this.place = c.place || void 0, this.reason = this.message, this.ruleId = c.ruleId || void 0, this.source = c.source || void 0, this.stack = d && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
kt.prototype.file = "";
kt.prototype.name = "";
kt.prototype.reason = "";
kt.prototype.message = "";
kt.prototype.stack = "";
kt.prototype.column = void 0;
kt.prototype.line = void 0;
kt.prototype.ancestors = void 0;
kt.prototype.cause = void 0;
kt.prototype.fatal = void 0;
kt.prototype.place = void 0;
kt.prototype.ruleId = void 0;
kt.prototype.source = void 0;
const ef = {}.hasOwnProperty, O1 = /* @__PURE__ */ new Map(), _1 = /[A-Z]/g, I1 = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), U1 = /* @__PURE__ */ new Set(["td", "th"]), Sy = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function L1(n, i) {
  if (!i || i.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const l = i.filePath || void 0;
  let o;
  if (i.development) {
    if (typeof i.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    o = P1(l, i.jsxDEV);
  } else {
    if (typeof i.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof i.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    o = F1(l, i.jsx, i.jsxs);
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
    schema: i.space === "svg" ? Wc : T1,
    stylePropertyNameCase: i.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
  }, c = xy(u, n, void 0);
  return c && typeof c != "string" ? c : u.create(
    n,
    u.Fragment,
    { children: c || void 0 },
    void 0
  );
}
function xy(n, i, l) {
  if (i.type === "element")
    return j1(n, i, l);
  if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
    return q1(n, i);
  if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
    return H1(n, i, l);
  if (i.type === "mdxjsEsm")
    return B1(n, i);
  if (i.type === "root")
    return V1(n, i, l);
  if (i.type === "text")
    return Q1(n, i);
}
function j1(n, i, l) {
  const o = n.schema;
  let u = o;
  i.tagName.toLowerCase() === "svg" && o.space === "html" && (u = Wc, n.schema = u), n.ancestors.push(i);
  const c = wy(n, i.tagName, !1), d = G1(n, i);
  let p = nf(n, i);
  return I1.has(i.tagName) && (p = p.filter(function(g) {
    return typeof g == "string" ? !m1(g) : !0;
  })), Ay(n, d, c, i), tf(d, p), n.ancestors.pop(), n.schema = o, n.create(i, c, d, l);
}
function q1(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const o = i.data.estree.body[0];
    return o.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(o.expression);
  }
  $r(n, i.position);
}
function B1(n, i) {
  if (i.data && i.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(i.data.estree)
    );
  $r(n, i.position);
}
function H1(n, i, l) {
  const o = n.schema;
  let u = o;
  i.name === "svg" && o.space === "html" && (u = Wc, n.schema = u), n.ancestors.push(i);
  const c = i.name === null ? n.Fragment : wy(n, i.name, !0), d = Y1(n, i), p = nf(n, i);
  return Ay(n, d, c, i), tf(d, p), n.ancestors.pop(), n.schema = o, n.create(i, c, d, l);
}
function V1(n, i, l) {
  const o = {};
  return tf(o, nf(n, i)), n.create(i, n.Fragment, o, l);
}
function Q1(n, i) {
  return i.value;
}
function Ay(n, i, l, o) {
  typeof l != "string" && l !== n.Fragment && n.passNode && (i.node = o);
}
function tf(n, i) {
  if (i.length > 0) {
    const l = i.length > 1 ? i : i[0];
    l && (n.children = l);
  }
}
function F1(n, i, l) {
  return o;
  function o(u, c, d, p) {
    const m = Array.isArray(d.children) ? l : i;
    return p ? m(c, d, p) : m(c, d);
  }
}
function P1(n, i) {
  return l;
  function l(o, u, c, d) {
    const p = Array.isArray(c.children), g = $c(o);
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
function G1(n, i) {
  const l = {};
  let o, u;
  for (u in i.properties)
    if (u !== "children" && ef.call(i.properties, u)) {
      const c = K1(n, u, i.properties[u]);
      if (c) {
        const [d, p] = c;
        n.tableCellAlignToStyle && d === "align" && typeof p == "string" && U1.has(i.tagName) ? o = p : l[d] = p;
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
function Y1(n, i) {
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
        $r(n, i.position);
    else {
      const u = o.name;
      let c;
      if (o.value && typeof o.value == "object")
        if (o.value.data && o.value.data.estree && n.evaluater) {
          const p = o.value.data.estree.body[0];
          p.type, c = n.evaluater.evaluateExpression(p.expression);
        } else
          $r(n, i.position);
      else
        c = o.value === null ? !0 : o.value;
      l[u] = /** @type {Props[keyof Props]} */
      c;
    }
  return l;
}
function nf(n, i) {
  const l = [];
  let o = -1;
  const u = n.passKeys ? /* @__PURE__ */ new Map() : O1;
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
    const p = xy(n, c, d);
    p !== void 0 && l.push(p);
  }
  return l;
}
function K1(n, i, l) {
  const o = x1(n.schema, i);
  if (!(l == null || typeof l == "number" && Number.isNaN(l))) {
    if (Array.isArray(l) && (l = o.commaSeparated ? u1(l) : E1(l)), o.property === "style") {
      let u = typeof l == "object" ? l : X1(n, String(l));
      return n.stylePropertyNameCase === "css" && (u = Z1(u)), ["style", u];
    }
    return [
      n.elementAttributeNameCase === "react" && o.space ? b1[o.property] || o.property : o.attribute,
      l
    ];
  }
}
function X1(n, i) {
  try {
    return N1(i, { reactCompat: !0 });
  } catch (l) {
    if (n.ignoreInvalidStyle)
      return {};
    const o = (
      /** @type {Error} */
      l
    ), u = new kt("Cannot parse `style` attribute", {
      ancestors: n.ancestors,
      cause: o,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw u.file = n.filePath || void 0, u.url = Sy + "#cannot-parse-style-attribute", u;
  }
}
function wy(n, i, l) {
  let o;
  if (!l)
    o = { type: "Literal", value: i };
  else if (i.includes(".")) {
    const u = i.split(".");
    let c = -1, d;
    for (; ++c < u.length; ) {
      const p = Nh(u[c]) ? { type: "Identifier", name: u[c] } : { type: "Literal", value: u[c] };
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
    o = Nh(i) && !/^[a-z]/.test(i) ? { type: "Identifier", name: i } : { type: "Literal", value: i };
  if (o.type === "Literal") {
    const u = (
      /** @type {string | number} */
      o.value
    );
    return ef.call(n.components, u) ? n.components[u] : u;
  }
  if (n.evaluater)
    return n.evaluater.evaluateExpression(o);
  $r(n);
}
function $r(n, i) {
  const l = new kt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: n.ancestors,
      place: i,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw l.file = n.filePath || void 0, l.url = Sy + "#cannot-handle-mdx-estrees-without-createevaluater", l;
}
function Z1(n) {
  const i = {};
  let l;
  for (l in n)
    ef.call(n, l) && (i[J1(l)] = n[l]);
  return i;
}
function J1(n) {
  let i = n.replace(_1, W1);
  return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
}
function W1(n) {
  return "-" + n.toLowerCase();
}
const dc = {
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
}, $1 = {};
function eA(n, i) {
  const l = $1, o = typeof l.includeImageAlt == "boolean" ? l.includeImageAlt : !0, u = typeof l.includeHtml == "boolean" ? l.includeHtml : !0;
  return Ty(n, o, u);
}
function Ty(n, i, l) {
  if (tA(n)) {
    if ("value" in n)
      return n.type === "html" && !l ? "" : n.value;
    if (i && "alt" in n && n.alt)
      return n.alt;
    if ("children" in n)
      return Hh(n.children, i, l);
  }
  return Array.isArray(n) ? Hh(n, i, l) : "";
}
function Hh(n, i, l) {
  const o = [];
  let u = -1;
  for (; ++u < n.length; )
    o[u] = Ty(n[u], i, l);
  return o.join("");
}
function tA(n) {
  return !!(n && typeof n == "object");
}
const Vh = document.createElement("i");
function af(n) {
  const i = "&" + n + ";";
  Vh.innerHTML = i;
  const l = Vh.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    l.charCodeAt(l.length - 1) === 59 && n !== "semi" || l === i ? !1 : l
  );
}
function zn(n, i, l, o) {
  const u = n.length;
  let c = 0, d;
  if (i < 0 ? i = -i > u ? 0 : u + i : i = i > u ? u : i, l = l > 0 ? l : 0, o.length < 1e4)
    d = Array.from(o), d.unshift(i, l), n.splice(...d);
  else
    for (l && n.splice(i, l); c < o.length; )
      d = o.slice(c, c + 1e4), d.unshift(i, 0), n.splice(...d), c += 1e4, i += 1e4;
}
function fn(n, i) {
  return n.length > 0 ? (zn(n, n.length, 0, i), n) : i;
}
const Qh = {}.hasOwnProperty;
function nA(n) {
  const i = {};
  let l = -1;
  for (; ++l < n.length; )
    aA(i, n[l]);
  return i;
}
function aA(n, i) {
  let l;
  for (l in i) {
    const u = (Qh.call(n, l) ? n[l] : void 0) || (n[l] = {}), c = i[l];
    let d;
    if (c)
      for (d in c) {
        Qh.call(u, d) || (u[d] = []);
        const p = c[d];
        iA(
          // @ts-expect-error Looks like a list.
          u[d],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function iA(n, i) {
  let l = -1;
  const o = [];
  for (; ++l < i.length; )
    (i[l].add === "after" ? n : o).push(i[l]);
  zn(n, 0, 0, o);
}
function Ey(n, i) {
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
function Ui(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Dn = Sa(/[A-Za-z]/), Wt = Sa(/[\dA-Za-z]/), rA = Sa(/[#-'*+\--9=?A-Z^-~]/);
function jc(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const qc = Sa(/\d/), lA = Sa(/[\dA-Fa-f]/), oA = Sa(/[!-/:-@[-`{-~]/);
function we(n) {
  return n !== null && n < -2;
}
function qt(n) {
  return n !== null && (n < 0 || n === 32);
}
function Ve(n) {
  return n === -2 || n === -1 || n === 32;
}
const sA = Sa(new RegExp("\\p{P}|\\p{S}", "u")), uA = Sa(/\s/);
function Sa(n) {
  return i;
  function i(l) {
    return l !== null && l > -1 && n.test(String.fromCharCode(l));
  }
}
function Vi(n) {
  const i = [];
  let l = -1, o = 0, u = 0;
  for (; ++l < n.length; ) {
    const c = n.charCodeAt(l);
    let d = "";
    if (c === 37 && Wt(n.charCodeAt(l + 1)) && Wt(n.charCodeAt(l + 2)))
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
function We(n, i, l, o) {
  const u = o ? o - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return d;
  function d(g) {
    return Ve(g) ? (n.enter(l), p(g)) : i(g);
  }
  function p(g) {
    return Ve(g) && c++ < u ? (n.consume(g), p) : (n.exit(l), i(g));
  }
}
const cA = {
  tokenize: fA
};
function fA(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, o, u);
  let l;
  return i;
  function o(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return n.enter("lineEnding"), n.consume(p), n.exit("lineEnding"), We(n, i, "linePrefix");
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
    return we(p) ? (n.consume(p), n.exit("chunkText"), c) : (n.consume(p), d);
  }
}
const dA = {
  tokenize: pA
}, Fh = {
  tokenize: mA
};
function pA(n) {
  const i = this, l = [];
  let o = 0, u, c, d;
  return p;
  function p(P) {
    if (o < l.length) {
      const J = l[o];
      return i.containerState = J[1], n.attempt(J[0].continuation, g, m)(P);
    }
    return m(P);
  }
  function g(P) {
    if (o++, i.containerState._closeFlow) {
      i.containerState._closeFlow = void 0, u && ee();
      const J = i.events.length;
      let W = J, U;
      for (; W--; )
        if (i.events[W][0] === "exit" && i.events[W][1].type === "chunkFlow") {
          U = i.events[W][1].end;
          break;
        }
      I(o);
      let ae = J;
      for (; ae < i.events.length; )
        i.events[ae][1].end = {
          ...U
        }, ae++;
      return zn(i.events, W + 1, 0, i.events.slice(J)), i.events.length = ae, m(P);
    }
    return p(P);
  }
  function m(P) {
    if (o === l.length) {
      if (!u)
        return w(P);
      if (u.currentConstruct && u.currentConstruct.concrete)
        return D(P);
      i.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
    }
    return i.containerState = {}, n.check(Fh, h, v)(P);
  }
  function h(P) {
    return u && ee(), I(o), w(P);
  }
  function v(P) {
    return i.parser.lazy[i.now().line] = o !== l.length, d = i.now().offset, D(P);
  }
  function w(P) {
    return i.containerState = {}, n.attempt(Fh, x, D)(P);
  }
  function x(P) {
    return o++, l.push([i.currentConstruct, i.containerState]), w(P);
  }
  function D(P) {
    if (P === null) {
      u && ee(), I(0), n.consume(P);
      return;
    }
    return u = u || i.parser.flow(i.now()), n.enter("chunkFlow", {
      _tokenizer: u,
      contentType: "flow",
      previous: c
    }), R(P);
  }
  function R(P) {
    if (P === null) {
      j(n.exit("chunkFlow"), !0), I(0), n.consume(P);
      return;
    }
    return we(P) ? (n.consume(P), j(n.exit("chunkFlow")), o = 0, i.interrupt = void 0, p) : (n.consume(P), R);
  }
  function j(P, J) {
    const W = i.sliceStream(P);
    if (J && W.push(null), P.previous = c, c && (c.next = P), c = P, u.defineSkip(P.start), u.write(W), i.parser.lazy[P.start.line]) {
      let U = u.events.length;
      for (; U--; )
        if (
          // The token starts before the line ending…
          u.events[U][1].start.offset < d && // …and either is not ended yet…
          (!u.events[U][1].end || // …or ends after it.
          u.events[U][1].end.offset > d)
        )
          return;
      const ae = i.events.length;
      let X = ae, ce, ge;
      for (; X--; )
        if (i.events[X][0] === "exit" && i.events[X][1].type === "chunkFlow") {
          if (ce) {
            ge = i.events[X][1].end;
            break;
          }
          ce = !0;
        }
      for (I(o), U = ae; U < i.events.length; )
        i.events[U][1].end = {
          ...ge
        }, U++;
      zn(i.events, X + 1, 0, i.events.slice(ae)), i.events.length = U;
    }
  }
  function I(P) {
    let J = l.length;
    for (; J-- > P; ) {
      const W = l[J];
      i.containerState = W[1], W[0].exit.call(i, n);
    }
    l.length = P;
  }
  function ee() {
    u.write([null]), c = void 0, u = void 0, i.containerState._closeFlow = void 0;
  }
}
function mA(n, i, l) {
  return We(n, n.attempt(this.parser.constructs.document, i, l), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Ph(n) {
  if (n === null || qt(n) || uA(n))
    return 1;
  if (sA(n))
    return 2;
}
function rf(n, i, l) {
  const o = [];
  let u = -1;
  for (; ++u < n.length; ) {
    const c = n[u].resolveAll;
    c && !o.includes(c) && (i = c(i, l), o.push(c));
  }
  return i;
}
const Bc = {
  name: "attention",
  resolveAll: hA,
  tokenize: gA
};
function hA(n, i) {
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
          Gh(v, -g), Gh(w, g), d = {
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
          }, m = [], n[o][1].end.offset - n[o][1].start.offset && (m = fn(m, [["enter", n[o][1], i], ["exit", n[o][1], i]])), m = fn(m, [["enter", u, i], ["enter", d, i], ["exit", d, i], ["enter", c, i]]), m = fn(m, rf(i.parser.constructs.insideSpan.null, n.slice(o + 1, l), i)), m = fn(m, [["exit", c, i], ["enter", p, i], ["exit", p, i], ["exit", u, i]]), n[l][1].end.offset - n[l][1].start.offset ? (h = 2, m = fn(m, [["enter", n[l][1], i], ["exit", n[l][1], i]])) : h = 0, zn(n, o - 1, l - o + 3, m), l = o + m.length - h - 2;
          break;
        }
    }
  for (l = -1; ++l < n.length; )
    n[l][1].type === "attentionSequence" && (n[l][1].type = "data");
  return n;
}
function gA(n, i) {
  const l = this.parser.constructs.attentionMarkers.null, o = this.previous, u = Ph(o);
  let c;
  return d;
  function d(g) {
    return c = g, n.enter("attentionSequence"), p(g);
  }
  function p(g) {
    if (g === c)
      return n.consume(g), p;
    const m = n.exit("attentionSequence"), h = Ph(g), v = !h || h === 2 && u || l.includes(g), w = !u || u === 2 && h || l.includes(o);
    return m._open = !!(c === 42 ? v : v && (u || !w)), m._close = !!(c === 42 ? w : w && (h || !v)), i(g);
  }
}
function Gh(n, i) {
  n.column += i, n.offset += i, n._bufferIndex += i;
}
const yA = {
  name: "autolink",
  tokenize: bA
};
function bA(n, i, l) {
  let o = 0;
  return u;
  function u(x) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), c;
  }
  function c(x) {
    return Dn(x) ? (n.consume(x), d) : x === 64 ? l(x) : m(x);
  }
  function d(x) {
    return x === 43 || x === 45 || x === 46 || Wt(x) ? (o = 1, p(x)) : m(x);
  }
  function p(x) {
    return x === 58 ? (n.consume(x), o = 0, g) : (x === 43 || x === 45 || x === 46 || Wt(x)) && o++ < 32 ? (n.consume(x), p) : (o = 0, m(x));
  }
  function g(x) {
    return x === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), i) : x === null || x === 32 || x === 60 || jc(x) ? l(x) : (n.consume(x), g);
  }
  function m(x) {
    return x === 64 ? (n.consume(x), h) : rA(x) ? (n.consume(x), m) : l(x);
  }
  function h(x) {
    return Wt(x) ? v(x) : l(x);
  }
  function v(x) {
    return x === 46 ? (n.consume(x), o = 0, h) : x === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), i) : w(x);
  }
  function w(x) {
    if ((x === 45 || Wt(x)) && o++ < 63) {
      const D = x === 45 ? w : v;
      return n.consume(x), D;
    }
    return l(x);
  }
}
const jo = {
  partial: !0,
  tokenize: vA
};
function vA(n, i, l) {
  return o;
  function o(c) {
    return Ve(c) ? We(n, u, "linePrefix")(c) : u(c);
  }
  function u(c) {
    return c === null || we(c) ? i(c) : l(c);
  }
}
const Cy = {
  continuation: {
    tokenize: xA
  },
  exit: AA,
  name: "blockQuote",
  tokenize: SA
};
function SA(n, i, l) {
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
    return Ve(d) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(d), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), i) : (n.exit("blockQuotePrefix"), i(d));
  }
}
function xA(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return Ve(d) ? We(n, c, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : c(d);
  }
  function c(d) {
    return n.attempt(Cy, i, l)(d);
  }
}
function AA(n) {
  n.exit("blockQuote");
}
const ky = {
  name: "characterEscape",
  tokenize: wA
};
function wA(n, i, l) {
  return o;
  function o(c) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(c), n.exit("escapeMarker"), u;
  }
  function u(c) {
    return oA(c) ? (n.enter("characterEscapeValue"), n.consume(c), n.exit("characterEscapeValue"), n.exit("characterEscape"), i) : l(c);
  }
}
const Dy = {
  name: "characterReference",
  tokenize: TA
};
function TA(n, i, l) {
  const o = this;
  let u = 0, c, d;
  return p;
  function p(v) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(v), n.exit("characterReferenceMarker"), g;
  }
  function g(v) {
    return v === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(v), n.exit("characterReferenceMarkerNumeric"), m) : (n.enter("characterReferenceValue"), c = 31, d = Wt, h(v));
  }
  function m(v) {
    return v === 88 || v === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(v), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), c = 6, d = lA, h) : (n.enter("characterReferenceValue"), c = 7, d = qc, h(v));
  }
  function h(v) {
    if (v === 59 && u) {
      const w = n.exit("characterReferenceValue");
      return d === Wt && !af(o.sliceSerialize(w)) ? l(v) : (n.enter("characterReferenceMarker"), n.consume(v), n.exit("characterReferenceMarker"), n.exit("characterReference"), i);
    }
    return d(v) && u++ < c ? (n.consume(v), h) : l(v);
  }
}
const Yh = {
  partial: !0,
  tokenize: CA
}, Kh = {
  concrete: !0,
  name: "codeFenced",
  tokenize: EA
};
function EA(n, i, l) {
  const o = this, u = {
    partial: !0,
    tokenize: W
  };
  let c = 0, d = 0, p;
  return g;
  function g(U) {
    return m(U);
  }
  function m(U) {
    const ae = o.events[o.events.length - 1];
    return c = ae && ae[1].type === "linePrefix" ? ae[2].sliceSerialize(ae[1], !0).length : 0, p = U, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), h(U);
  }
  function h(U) {
    return U === p ? (d++, n.consume(U), h) : d < 3 ? l(U) : (n.exit("codeFencedFenceSequence"), Ve(U) ? We(n, v, "whitespace")(U) : v(U));
  }
  function v(U) {
    return U === null || we(U) ? (n.exit("codeFencedFence"), o.interrupt ? i(U) : n.check(Yh, R, J)(U)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), w(U));
  }
  function w(U) {
    return U === null || we(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), v(U)) : Ve(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), We(n, x, "whitespace")(U)) : U === 96 && U === p ? l(U) : (n.consume(U), w);
  }
  function x(U) {
    return U === null || we(U) ? v(U) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), D(U));
  }
  function D(U) {
    return U === null || we(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), v(U)) : U === 96 && U === p ? l(U) : (n.consume(U), D);
  }
  function R(U) {
    return n.attempt(u, J, j)(U);
  }
  function j(U) {
    return n.enter("lineEnding"), n.consume(U), n.exit("lineEnding"), I;
  }
  function I(U) {
    return c > 0 && Ve(U) ? We(n, ee, "linePrefix", c + 1)(U) : ee(U);
  }
  function ee(U) {
    return U === null || we(U) ? n.check(Yh, R, J)(U) : (n.enter("codeFlowValue"), P(U));
  }
  function P(U) {
    return U === null || we(U) ? (n.exit("codeFlowValue"), ee(U)) : (n.consume(U), P);
  }
  function J(U) {
    return n.exit("codeFenced"), i(U);
  }
  function W(U, ae, X) {
    let ce = 0;
    return ge;
    function ge(Y) {
      return U.enter("lineEnding"), U.consume(Y), U.exit("lineEnding"), re;
    }
    function re(Y) {
      return U.enter("codeFencedFence"), Ve(Y) ? We(U, te, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(Y) : te(Y);
    }
    function te(Y) {
      return Y === p ? (U.enter("codeFencedFenceSequence"), oe(Y)) : X(Y);
    }
    function oe(Y) {
      return Y === p ? (ce++, U.consume(Y), oe) : ce >= d ? (U.exit("codeFencedFenceSequence"), Ve(Y) ? We(U, ie, "whitespace")(Y) : ie(Y)) : X(Y);
    }
    function ie(Y) {
      return Y === null || we(Y) ? (U.exit("codeFencedFence"), ae(Y)) : X(Y);
    }
  }
}
function CA(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return d === null ? l(d) : (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), c);
  }
  function c(d) {
    return o.parser.lazy[o.now().line] ? l(d) : i(d);
  }
}
const pc = {
  name: "codeIndented",
  tokenize: DA
}, kA = {
  partial: !0,
  tokenize: zA
};
function DA(n, i, l) {
  const o = this;
  return u;
  function u(m) {
    return n.enter("codeIndented"), We(n, c, "linePrefix", 5)(m);
  }
  function c(m) {
    const h = o.events[o.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? d(m) : l(m);
  }
  function d(m) {
    return m === null ? g(m) : we(m) ? n.attempt(kA, d, g)(m) : (n.enter("codeFlowValue"), p(m));
  }
  function p(m) {
    return m === null || we(m) ? (n.exit("codeFlowValue"), d(m)) : (n.consume(m), p);
  }
  function g(m) {
    return n.exit("codeIndented"), i(m);
  }
}
function zA(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return o.parser.lazy[o.now().line] ? l(d) : we(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), u) : We(n, c, "linePrefix", 5)(d);
  }
  function c(d) {
    const p = o.events[o.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(d) : we(d) ? u(d) : l(d);
  }
}
const RA = {
  name: "codeText",
  previous: MA,
  resolve: NA,
  tokenize: OA
};
function NA(n) {
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
function MA(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function OA(n, i, l) {
  let o = 0, u, c;
  return d;
  function d(v) {
    return n.enter("codeText"), n.enter("codeTextSequence"), p(v);
  }
  function p(v) {
    return v === 96 ? (n.consume(v), o++, p) : (n.exit("codeTextSequence"), g(v));
  }
  function g(v) {
    return v === null ? l(v) : v === 32 ? (n.enter("space"), n.consume(v), n.exit("space"), g) : v === 96 ? (c = n.enter("codeTextSequence"), u = 0, h(v)) : we(v) ? (n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), g) : (n.enter("codeTextData"), m(v));
  }
  function m(v) {
    return v === null || v === 32 || v === 96 || we(v) ? (n.exit("codeTextData"), g(v)) : (n.consume(v), m);
  }
  function h(v) {
    return v === 96 ? (n.consume(v), u++, h) : u === o ? (n.exit("codeTextSequence"), n.exit("codeText"), i(v)) : (c.type = "codeTextData", m(v));
  }
}
class _A {
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
    return o && Pr(this.left, o), c.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), Pr(this.left, i);
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
    this.setCursor(0), Pr(this.right, i.reverse());
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
        Pr(this.right, l.reverse());
      } else {
        const l = this.right.splice(this.left.length + this.right.length - i, Number.POSITIVE_INFINITY);
        Pr(this.left, l.reverse());
      }
  }
}
function Pr(n, i) {
  let l = 0;
  if (i.length < 1e4)
    n.push(...i);
  else
    for (; l < i.length; )
      n.push(...i.slice(l, l + 1e4)), l += 1e4;
}
function zy(n) {
  const i = {};
  let l = -1, o, u, c, d, p, g, m;
  const h = new _A(n);
  for (; ++l < h.length; ) {
    for (; l in i; )
      l = i[l];
    if (o = h.get(l), l && o[1].type === "chunkFlow" && h.get(l - 1)[1].type === "listItemPrefix" && (g = o[1]._tokenizer.events, c = 0, c < g.length && g[c][1].type === "lineEndingBlank" && (c += 2), c < g.length && g[c][1].type === "content"))
      for (; ++c < g.length && g[c][1].type !== "content"; )
        g[c][1].type === "chunkText" && (g[c][1]._isInFirstContentOfListItem = !0, c++);
    if (o[0] === "enter")
      o[1].contentType && (Object.assign(i, IA(h, l)), l = i[l], m = !0);
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
  return zn(n, 0, Number.POSITIVE_INFINITY, h.slice(0)), !m;
}
function IA(n, i) {
  const l = n.get(i)[1], o = n.get(i)[2];
  let u = i - 1;
  const c = [];
  let d = l._tokenizer;
  d || (d = o.parser[l.contentType](l.start), l._contentTypeTextTrailing && (d._contentTypeTextTrailing = !0));
  const p = d.events, g = [], m = {};
  let h, v, w = -1, x = l, D = 0, R = 0;
  const j = [R];
  for (; x; ) {
    for (; n.get(++u)[1] !== x; )
      ;
    c.push(u), x._tokenizer || (h = o.sliceStream(x), x.next || h.push(null), v && d.defineSkip(x.start), x._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(h), x._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), v = x, x = x.next;
  }
  for (x = l; ++w < p.length; )
    // Find a void token that includes a break.
    p[w][0] === "exit" && p[w - 1][0] === "enter" && p[w][1].type === p[w - 1][1].type && p[w][1].start.line !== p[w][1].end.line && (R = w + 1, j.push(R), x._tokenizer = void 0, x.previous = void 0, x = x.next);
  for (d.events = [], x ? (x._tokenizer = void 0, x.previous = void 0) : j.pop(), w = j.length; w--; ) {
    const I = p.slice(j[w], j[w + 1]), ee = c.pop();
    g.push([ee, ee + I.length - 1]), n.splice(ee, 2, I);
  }
  for (g.reverse(), w = -1; ++w < g.length; )
    m[D + g[w][0]] = D + g[w][1], D += g[w][1] - g[w][0] - 1;
  return m;
}
const UA = {
  resolve: jA,
  tokenize: qA
}, LA = {
  partial: !0,
  tokenize: BA
};
function jA(n) {
  return zy(n), n;
}
function qA(n, i) {
  let l;
  return o;
  function o(p) {
    return n.enter("content"), l = n.enter("chunkContent", {
      contentType: "content"
    }), u(p);
  }
  function u(p) {
    return p === null ? c(p) : we(p) ? n.check(LA, d, c)(p) : (n.consume(p), u);
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
function BA(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), We(n, c, "linePrefix");
  }
  function c(d) {
    if (d === null || we(d))
      return l(d);
    const p = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(d) : n.interrupt(o.parser.constructs.flow, l, i)(d);
  }
}
function Ry(n, i, l, o, u, c, d, p, g) {
  const m = g || Number.POSITIVE_INFINITY;
  let h = 0;
  return v;
  function v(I) {
    return I === 60 ? (n.enter(o), n.enter(u), n.enter(c), n.consume(I), n.exit(c), w) : I === null || I === 32 || I === 41 || jc(I) ? l(I) : (n.enter(o), n.enter(d), n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), R(I));
  }
  function w(I) {
    return I === 62 ? (n.enter(c), n.consume(I), n.exit(c), n.exit(u), n.exit(o), i) : (n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), x(I));
  }
  function x(I) {
    return I === 62 ? (n.exit("chunkString"), n.exit(p), w(I)) : I === null || I === 60 || we(I) ? l(I) : (n.consume(I), I === 92 ? D : x);
  }
  function D(I) {
    return I === 60 || I === 62 || I === 92 ? (n.consume(I), x) : x(I);
  }
  function R(I) {
    return !h && (I === null || I === 41 || qt(I)) ? (n.exit("chunkString"), n.exit(p), n.exit(d), n.exit(o), i(I)) : h < m && I === 40 ? (n.consume(I), h++, R) : I === 41 ? (n.consume(I), h--, R) : I === null || I === 32 || I === 40 || jc(I) ? l(I) : (n.consume(I), I === 92 ? j : R);
  }
  function j(I) {
    return I === 40 || I === 41 || I === 92 ? (n.consume(I), R) : R(I);
  }
}
function Ny(n, i, l, o, u, c) {
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
    x === 94 && !p && "_hiddenFootnoteSupport" in d.parser.constructs ? l(x) : x === 93 ? (n.exit(c), n.enter(u), n.consume(x), n.exit(u), n.exit(o), i) : we(x) ? (n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), h) : (n.enter("chunkString", {
      contentType: "string"
    }), v(x));
  }
  function v(x) {
    return x === null || x === 91 || x === 93 || we(x) || p++ > 999 ? (n.exit("chunkString"), h(x)) : (n.consume(x), g || (g = !Ve(x)), x === 92 ? w : v);
  }
  function w(x) {
    return x === 91 || x === 92 || x === 93 ? (n.consume(x), p++, v) : v(x);
  }
}
function My(n, i, l, o, u, c) {
  let d;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40 ? (n.enter(o), n.enter(u), n.consume(w), n.exit(u), d = w === 40 ? 41 : w, g) : l(w);
  }
  function g(w) {
    return w === d ? (n.enter(u), n.consume(w), n.exit(u), n.exit(o), i) : (n.enter(c), m(w));
  }
  function m(w) {
    return w === d ? (n.exit(c), g(d)) : w === null ? l(w) : we(w) ? (n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), We(n, m, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), h(w));
  }
  function h(w) {
    return w === d || w === null || we(w) ? (n.exit("chunkString"), m(w)) : (n.consume(w), w === 92 ? v : h);
  }
  function v(w) {
    return w === d || w === 92 ? (n.consume(w), h) : h(w);
  }
}
function Xr(n, i) {
  let l;
  return o;
  function o(u) {
    return we(u) ? (n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), l = !0, o) : Ve(u) ? We(n, o, l ? "linePrefix" : "lineSuffix")(u) : i(u);
  }
}
const HA = {
  name: "definition",
  tokenize: QA
}, VA = {
  partial: !0,
  tokenize: FA
};
function QA(n, i, l) {
  const o = this;
  let u;
  return c;
  function c(x) {
    return n.enter("definition"), d(x);
  }
  function d(x) {
    return Ny.call(
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
    return u = Ui(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)), x === 58 ? (n.enter("definitionMarker"), n.consume(x), n.exit("definitionMarker"), g) : l(x);
  }
  function g(x) {
    return qt(x) ? Xr(n, m)(x) : m(x);
  }
  function m(x) {
    return Ry(
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
    return n.attempt(VA, v, v)(x);
  }
  function v(x) {
    return Ve(x) ? We(n, w, "whitespace")(x) : w(x);
  }
  function w(x) {
    return x === null || we(x) ? (n.exit("definition"), o.parser.defined.push(u), i(x)) : l(x);
  }
}
function FA(n, i, l) {
  return o;
  function o(p) {
    return qt(p) ? Xr(n, u)(p) : l(p);
  }
  function u(p) {
    return My(n, c, l, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function c(p) {
    return Ve(p) ? We(n, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || we(p) ? i(p) : l(p);
  }
}
const PA = {
  name: "hardBreakEscape",
  tokenize: GA
};
function GA(n, i, l) {
  return o;
  function o(c) {
    return n.enter("hardBreakEscape"), n.consume(c), u;
  }
  function u(c) {
    return we(c) ? (n.exit("hardBreakEscape"), i(c)) : l(c);
  }
}
const YA = {
  name: "headingAtx",
  resolve: KA,
  tokenize: XA
};
function KA(n, i) {
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
  }, zn(n, o, l - o + 1, [["enter", u, i], ["enter", c, i], ["exit", c, i], ["exit", u, i]])), n;
}
function XA(n, i, l) {
  let o = 0;
  return u;
  function u(h) {
    return n.enter("atxHeading"), c(h);
  }
  function c(h) {
    return n.enter("atxHeadingSequence"), d(h);
  }
  function d(h) {
    return h === 35 && o++ < 6 ? (n.consume(h), d) : h === null || qt(h) ? (n.exit("atxHeadingSequence"), p(h)) : l(h);
  }
  function p(h) {
    return h === 35 ? (n.enter("atxHeadingSequence"), g(h)) : h === null || we(h) ? (n.exit("atxHeading"), i(h)) : Ve(h) ? We(n, p, "whitespace")(h) : (n.enter("atxHeadingText"), m(h));
  }
  function g(h) {
    return h === 35 ? (n.consume(h), g) : (n.exit("atxHeadingSequence"), p(h));
  }
  function m(h) {
    return h === null || h === 35 || qt(h) ? (n.exit("atxHeadingText"), p(h)) : (n.consume(h), m);
  }
}
const ZA = [
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
], Xh = ["pre", "script", "style", "textarea"], JA = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: ew,
  tokenize: tw
}, WA = {
  partial: !0,
  tokenize: aw
}, $A = {
  partial: !0,
  tokenize: nw
};
function ew(n) {
  let i = n.length;
  for (; i-- && !(n[i][0] === "enter" && n[i][1].type === "htmlFlow"); )
    ;
  return i > 1 && n[i - 2][1].type === "linePrefix" && (n[i][1].start = n[i - 2][1].start, n[i + 1][1].start = n[i - 2][1].start, n.splice(i - 2, 2)), n;
}
function tw(n, i, l) {
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
    return A === 33 ? (n.consume(A), w) : A === 47 ? (n.consume(A), c = !0, R) : A === 63 ? (n.consume(A), u = 3, o.interrupt ? i : b) : Dn(A) ? (n.consume(A), d = String.fromCharCode(A), j) : l(A);
  }
  function w(A) {
    return A === 45 ? (n.consume(A), u = 2, x) : A === 91 ? (n.consume(A), u = 5, p = 0, D) : Dn(A) ? (n.consume(A), u = 4, o.interrupt ? i : b) : l(A);
  }
  function x(A) {
    return A === 45 ? (n.consume(A), o.interrupt ? i : b) : l(A);
  }
  function D(A) {
    const ne = "CDATA[";
    return A === ne.charCodeAt(p++) ? (n.consume(A), p === ne.length ? o.interrupt ? i : te : D) : l(A);
  }
  function R(A) {
    return Dn(A) ? (n.consume(A), d = String.fromCharCode(A), j) : l(A);
  }
  function j(A) {
    if (A === null || A === 47 || A === 62 || qt(A)) {
      const ne = A === 47, Ae = d.toLowerCase();
      return !ne && !c && Xh.includes(Ae) ? (u = 1, o.interrupt ? i(A) : te(A)) : ZA.includes(d.toLowerCase()) ? (u = 6, ne ? (n.consume(A), I) : o.interrupt ? i(A) : te(A)) : (u = 7, o.interrupt && !o.parser.lazy[o.now().line] ? l(A) : c ? ee(A) : P(A));
    }
    return A === 45 || Wt(A) ? (n.consume(A), d += String.fromCharCode(A), j) : l(A);
  }
  function I(A) {
    return A === 62 ? (n.consume(A), o.interrupt ? i : te) : l(A);
  }
  function ee(A) {
    return Ve(A) ? (n.consume(A), ee) : ge(A);
  }
  function P(A) {
    return A === 47 ? (n.consume(A), ge) : A === 58 || A === 95 || Dn(A) ? (n.consume(A), J) : Ve(A) ? (n.consume(A), P) : ge(A);
  }
  function J(A) {
    return A === 45 || A === 46 || A === 58 || A === 95 || Wt(A) ? (n.consume(A), J) : W(A);
  }
  function W(A) {
    return A === 61 ? (n.consume(A), U) : Ve(A) ? (n.consume(A), W) : P(A);
  }
  function U(A) {
    return A === null || A === 60 || A === 61 || A === 62 || A === 96 ? l(A) : A === 34 || A === 39 ? (n.consume(A), g = A, ae) : Ve(A) ? (n.consume(A), U) : X(A);
  }
  function ae(A) {
    return A === g ? (n.consume(A), g = null, ce) : A === null || we(A) ? l(A) : (n.consume(A), ae);
  }
  function X(A) {
    return A === null || A === 34 || A === 39 || A === 47 || A === 60 || A === 61 || A === 62 || A === 96 || qt(A) ? W(A) : (n.consume(A), X);
  }
  function ce(A) {
    return A === 47 || A === 62 || Ve(A) ? P(A) : l(A);
  }
  function ge(A) {
    return A === 62 ? (n.consume(A), re) : l(A);
  }
  function re(A) {
    return A === null || we(A) ? te(A) : Ve(A) ? (n.consume(A), re) : l(A);
  }
  function te(A) {
    return A === 45 && u === 2 ? (n.consume(A), M) : A === 60 && u === 1 ? (n.consume(A), G) : A === 62 && u === 4 ? (n.consume(A), q) : A === 63 && u === 3 ? (n.consume(A), b) : A === 93 && u === 5 ? (n.consume(A), Te) : we(A) && (u === 6 || u === 7) ? (n.exit("htmlFlowData"), n.check(WA, $, oe)(A)) : A === null || we(A) ? (n.exit("htmlFlowData"), oe(A)) : (n.consume(A), te);
  }
  function oe(A) {
    return n.check($A, ie, $)(A);
  }
  function ie(A) {
    return n.enter("lineEnding"), n.consume(A), n.exit("lineEnding"), Y;
  }
  function Y(A) {
    return A === null || we(A) ? oe(A) : (n.enter("htmlFlowData"), te(A));
  }
  function M(A) {
    return A === 45 ? (n.consume(A), b) : te(A);
  }
  function G(A) {
    return A === 47 ? (n.consume(A), d = "", Q) : te(A);
  }
  function Q(A) {
    if (A === 62) {
      const ne = d.toLowerCase();
      return Xh.includes(ne) ? (n.consume(A), q) : te(A);
    }
    return Dn(A) && d.length < 8 ? (n.consume(A), d += String.fromCharCode(A), Q) : te(A);
  }
  function Te(A) {
    return A === 93 ? (n.consume(A), b) : te(A);
  }
  function b(A) {
    return A === 62 ? (n.consume(A), q) : A === 45 && u === 2 ? (n.consume(A), b) : te(A);
  }
  function q(A) {
    return A === null || we(A) ? (n.exit("htmlFlowData"), $(A)) : (n.consume(A), q);
  }
  function $(A) {
    return n.exit("htmlFlow"), i(A);
  }
}
function nw(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return we(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), c) : l(d);
  }
  function c(d) {
    return o.parser.lazy[o.now().line] ? l(d) : i(d);
  }
}
function aw(n, i, l) {
  return o;
  function o(u) {
    return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), n.attempt(jo, i, l);
  }
}
const iw = {
  name: "htmlText",
  tokenize: rw
};
function rw(n, i, l) {
  const o = this;
  let u, c, d;
  return p;
  function p(b) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(b), g;
  }
  function g(b) {
    return b === 33 ? (n.consume(b), m) : b === 47 ? (n.consume(b), W) : b === 63 ? (n.consume(b), P) : Dn(b) ? (n.consume(b), X) : l(b);
  }
  function m(b) {
    return b === 45 ? (n.consume(b), h) : b === 91 ? (n.consume(b), c = 0, D) : Dn(b) ? (n.consume(b), ee) : l(b);
  }
  function h(b) {
    return b === 45 ? (n.consume(b), x) : l(b);
  }
  function v(b) {
    return b === null ? l(b) : b === 45 ? (n.consume(b), w) : we(b) ? (d = v, G(b)) : (n.consume(b), v);
  }
  function w(b) {
    return b === 45 ? (n.consume(b), x) : v(b);
  }
  function x(b) {
    return b === 62 ? M(b) : b === 45 ? w(b) : v(b);
  }
  function D(b) {
    const q = "CDATA[";
    return b === q.charCodeAt(c++) ? (n.consume(b), c === q.length ? R : D) : l(b);
  }
  function R(b) {
    return b === null ? l(b) : b === 93 ? (n.consume(b), j) : we(b) ? (d = R, G(b)) : (n.consume(b), R);
  }
  function j(b) {
    return b === 93 ? (n.consume(b), I) : R(b);
  }
  function I(b) {
    return b === 62 ? M(b) : b === 93 ? (n.consume(b), I) : R(b);
  }
  function ee(b) {
    return b === null || b === 62 ? M(b) : we(b) ? (d = ee, G(b)) : (n.consume(b), ee);
  }
  function P(b) {
    return b === null ? l(b) : b === 63 ? (n.consume(b), J) : we(b) ? (d = P, G(b)) : (n.consume(b), P);
  }
  function J(b) {
    return b === 62 ? M(b) : P(b);
  }
  function W(b) {
    return Dn(b) ? (n.consume(b), U) : l(b);
  }
  function U(b) {
    return b === 45 || Wt(b) ? (n.consume(b), U) : ae(b);
  }
  function ae(b) {
    return we(b) ? (d = ae, G(b)) : Ve(b) ? (n.consume(b), ae) : M(b);
  }
  function X(b) {
    return b === 45 || Wt(b) ? (n.consume(b), X) : b === 47 || b === 62 || qt(b) ? ce(b) : l(b);
  }
  function ce(b) {
    return b === 47 ? (n.consume(b), M) : b === 58 || b === 95 || Dn(b) ? (n.consume(b), ge) : we(b) ? (d = ce, G(b)) : Ve(b) ? (n.consume(b), ce) : M(b);
  }
  function ge(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Wt(b) ? (n.consume(b), ge) : re(b);
  }
  function re(b) {
    return b === 61 ? (n.consume(b), te) : we(b) ? (d = re, G(b)) : Ve(b) ? (n.consume(b), re) : ce(b);
  }
  function te(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? l(b) : b === 34 || b === 39 ? (n.consume(b), u = b, oe) : we(b) ? (d = te, G(b)) : Ve(b) ? (n.consume(b), te) : (n.consume(b), ie);
  }
  function oe(b) {
    return b === u ? (n.consume(b), u = void 0, Y) : b === null ? l(b) : we(b) ? (d = oe, G(b)) : (n.consume(b), oe);
  }
  function ie(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? l(b) : b === 47 || b === 62 || qt(b) ? ce(b) : (n.consume(b), ie);
  }
  function Y(b) {
    return b === 47 || b === 62 || qt(b) ? ce(b) : l(b);
  }
  function M(b) {
    return b === 62 ? (n.consume(b), n.exit("htmlTextData"), n.exit("htmlText"), i) : l(b);
  }
  function G(b) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(b), n.exit("lineEnding"), Q;
  }
  function Q(b) {
    return Ve(b) ? We(n, Te, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : Te(b);
  }
  function Te(b) {
    return n.enter("htmlTextData"), d(b);
  }
}
const lf = {
  name: "labelEnd",
  resolveAll: uw,
  resolveTo: cw,
  tokenize: fw
}, lw = {
  tokenize: dw
}, ow = {
  tokenize: pw
}, sw = {
  tokenize: mw
};
function uw(n) {
  let i = -1;
  const l = [];
  for (; ++i < n.length; ) {
    const o = n[i][1];
    if (l.push(n[i]), o.type === "labelImage" || o.type === "labelLink" || o.type === "labelEnd") {
      const u = o.type === "labelImage" ? 4 : 2;
      o.type = "data", i += u;
    }
  }
  return n.length !== l.length && zn(n, 0, n.length, l), n;
}
function cw(n, i) {
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
  return p = [["enter", g, i], ["enter", m, i]], p = fn(p, n.slice(c + 1, c + o + 3)), p = fn(p, [["enter", h, i]]), p = fn(p, rf(i.parser.constructs.insideSpan.null, n.slice(c + o + 4, d - 3), i)), p = fn(p, [["exit", h, i], n[d - 2], n[d - 1], ["exit", m, i]]), p = fn(p, n.slice(d + 1)), p = fn(p, [["exit", g, i]]), zn(n, c, n.length, p), n;
}
function fw(n, i, l) {
  const o = this;
  let u = o.events.length, c, d;
  for (; u--; )
    if ((o.events[u][1].type === "labelImage" || o.events[u][1].type === "labelLink") && !o.events[u][1]._balanced) {
      c = o.events[u][1];
      break;
    }
  return p;
  function p(w) {
    return c ? c._inactive ? v(w) : (d = o.parser.defined.includes(Ui(o.sliceSerialize({
      start: c.end,
      end: o.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(w), n.exit("labelMarker"), n.exit("labelEnd"), g) : l(w);
  }
  function g(w) {
    return w === 40 ? n.attempt(lw, h, d ? h : v)(w) : w === 91 ? n.attempt(ow, h, d ? m : v)(w) : d ? h(w) : v(w);
  }
  function m(w) {
    return n.attempt(sw, h, v)(w);
  }
  function h(w) {
    return i(w);
  }
  function v(w) {
    return c._balanced = !0, l(w);
  }
}
function dw(n, i, l) {
  return o;
  function o(v) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(v), n.exit("resourceMarker"), u;
  }
  function u(v) {
    return qt(v) ? Xr(n, c)(v) : c(v);
  }
  function c(v) {
    return v === 41 ? h(v) : Ry(n, d, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(v);
  }
  function d(v) {
    return qt(v) ? Xr(n, g)(v) : h(v);
  }
  function p(v) {
    return l(v);
  }
  function g(v) {
    return v === 34 || v === 39 || v === 40 ? My(n, m, l, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(v) : h(v);
  }
  function m(v) {
    return qt(v) ? Xr(n, h)(v) : h(v);
  }
  function h(v) {
    return v === 41 ? (n.enter("resourceMarker"), n.consume(v), n.exit("resourceMarker"), n.exit("resource"), i) : l(v);
  }
}
function pw(n, i, l) {
  const o = this;
  return u;
  function u(p) {
    return Ny.call(o, n, c, d, "reference", "referenceMarker", "referenceString")(p);
  }
  function c(p) {
    return o.parser.defined.includes(Ui(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))) ? i(p) : l(p);
  }
  function d(p) {
    return l(p);
  }
}
function mw(n, i, l) {
  return o;
  function o(c) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(c), n.exit("referenceMarker"), u;
  }
  function u(c) {
    return c === 93 ? (n.enter("referenceMarker"), n.consume(c), n.exit("referenceMarker"), n.exit("reference"), i) : l(c);
  }
}
const hw = {
  name: "labelStartImage",
  resolveAll: lf.resolveAll,
  tokenize: gw
};
function gw(n, i, l) {
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
const yw = {
  name: "labelStartLink",
  resolveAll: lf.resolveAll,
  tokenize: bw
};
function bw(n, i, l) {
  const o = this;
  return u;
  function u(d) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(d), n.exit("labelMarker"), n.exit("labelLink"), c;
  }
  function c(d) {
    return d === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? l(d) : i(d);
  }
}
const mc = {
  name: "lineEnding",
  tokenize: vw
};
function vw(n, i) {
  return l;
  function l(o) {
    return n.enter("lineEnding"), n.consume(o), n.exit("lineEnding"), We(n, i, "linePrefix");
  }
}
const To = {
  name: "thematicBreak",
  tokenize: Sw
};
function Sw(n, i, l) {
  let o = 0, u;
  return c;
  function c(m) {
    return n.enter("thematicBreak"), d(m);
  }
  function d(m) {
    return u = m, p(m);
  }
  function p(m) {
    return m === u ? (n.enter("thematicBreakSequence"), g(m)) : o >= 3 && (m === null || we(m)) ? (n.exit("thematicBreak"), i(m)) : l(m);
  }
  function g(m) {
    return m === u ? (n.consume(m), o++, g) : (n.exit("thematicBreakSequence"), Ve(m) ? We(n, p, "whitespace")(m) : p(m));
  }
}
const Ut = {
  continuation: {
    tokenize: Tw
  },
  exit: Cw,
  name: "list",
  tokenize: ww
}, xw = {
  partial: !0,
  tokenize: kw
}, Aw = {
  partial: !0,
  tokenize: Ew
};
function ww(n, i, l) {
  const o = this, u = o.events[o.events.length - 1];
  let c = u && u[1].type === "linePrefix" ? u[2].sliceSerialize(u[1], !0).length : 0, d = 0;
  return p;
  function p(x) {
    const D = o.containerState.type || (x === 42 || x === 43 || x === 45 ? "listUnordered" : "listOrdered");
    if (D === "listUnordered" ? !o.containerState.marker || x === o.containerState.marker : qc(x)) {
      if (o.containerState.type || (o.containerState.type = D, n.enter(D, {
        _container: !0
      })), D === "listUnordered")
        return n.enter("listItemPrefix"), x === 42 || x === 45 ? n.check(To, l, m)(x) : m(x);
      if (!o.interrupt || x === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), g(x);
    }
    return l(x);
  }
  function g(x) {
    return qc(x) && ++d < 10 ? (n.consume(x), g) : (!o.interrupt || d < 2) && (o.containerState.marker ? x === o.containerState.marker : x === 41 || x === 46) ? (n.exit("listItemValue"), m(x)) : l(x);
  }
  function m(x) {
    return n.enter("listItemMarker"), n.consume(x), n.exit("listItemMarker"), o.containerState.marker = o.containerState.marker || x, n.check(
      jo,
      // Can’t be empty when interrupting.
      o.interrupt ? l : h,
      n.attempt(xw, w, v)
    );
  }
  function h(x) {
    return o.containerState.initialBlankLine = !0, c++, w(x);
  }
  function v(x) {
    return Ve(x) ? (n.enter("listItemPrefixWhitespace"), n.consume(x), n.exit("listItemPrefixWhitespace"), w) : l(x);
  }
  function w(x) {
    return o.containerState.size = c + o.sliceSerialize(n.exit("listItemPrefix"), !0).length, i(x);
  }
}
function Tw(n, i, l) {
  const o = this;
  return o.containerState._closeFlow = void 0, n.check(jo, u, c);
  function u(p) {
    return o.containerState.furtherBlankLines = o.containerState.furtherBlankLines || o.containerState.initialBlankLine, We(n, i, "listItemIndent", o.containerState.size + 1)(p);
  }
  function c(p) {
    return o.containerState.furtherBlankLines || !Ve(p) ? (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, d(p)) : (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, n.attempt(Aw, i, d)(p));
  }
  function d(p) {
    return o.containerState._closeFlow = !0, o.interrupt = void 0, We(n, n.attempt(Ut, i, l), "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function Ew(n, i, l) {
  const o = this;
  return We(n, u, "listItemIndent", o.containerState.size + 1);
  function u(c) {
    const d = o.events[o.events.length - 1];
    return d && d[1].type === "listItemIndent" && d[2].sliceSerialize(d[1], !0).length === o.containerState.size ? i(c) : l(c);
  }
}
function Cw(n) {
  n.exit(this.containerState.type);
}
function kw(n, i, l) {
  const o = this;
  return We(n, u, "listItemPrefixWhitespace", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function u(c) {
    const d = o.events[o.events.length - 1];
    return !Ve(c) && d && d[1].type === "listItemPrefixWhitespace" ? i(c) : l(c);
  }
}
const Zh = {
  name: "setextUnderline",
  resolveTo: Dw,
  tokenize: zw
};
function Dw(n, i) {
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
function zw(n, i, l) {
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
    return m === u ? (n.consume(m), p) : (n.exit("setextHeadingLineSequence"), Ve(m) ? We(n, g, "lineSuffix")(m) : g(m));
  }
  function g(m) {
    return m === null || we(m) ? (n.exit("setextHeadingLine"), i(m)) : l(m);
  }
}
const Rw = {
  tokenize: Nw
};
function Nw(n) {
  const i = this, l = n.attempt(
    // Try to parse a blank line.
    jo,
    o,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, u, We(n, n.attempt(this.parser.constructs.flow, u, n.attempt(UA, u)), "linePrefix"))
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
const Mw = {
  resolveAll: _y()
}, Ow = Oy("string"), _w = Oy("text");
function Oy(n) {
  return {
    resolveAll: _y(n === "text" ? Iw : void 0),
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
function _y(n) {
  return i;
  function i(l, o) {
    let u = -1, c;
    for (; ++u <= l.length; )
      c === void 0 ? l[u] && l[u][1].type === "data" && (c = u, u++) : (!l[u] || l[u][1].type !== "data") && (u !== c + 2 && (l[c][1].end = l[u - 1][1].end, l.splice(c + 2, u - c - 2), u = c + 2), c = void 0);
    return n ? n(l, o) : l;
  }
}
function Iw(n, i) {
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
const Uw = {
  42: Ut,
  43: Ut,
  45: Ut,
  48: Ut,
  49: Ut,
  50: Ut,
  51: Ut,
  52: Ut,
  53: Ut,
  54: Ut,
  55: Ut,
  56: Ut,
  57: Ut,
  62: Cy
}, Lw = {
  91: HA
}, jw = {
  [-2]: pc,
  [-1]: pc,
  32: pc
}, qw = {
  35: YA,
  42: To,
  45: [Zh, To],
  60: JA,
  61: Zh,
  95: To,
  96: Kh,
  126: Kh
}, Bw = {
  38: Dy,
  92: ky
}, Hw = {
  [-5]: mc,
  [-4]: mc,
  [-3]: mc,
  33: hw,
  38: Dy,
  42: Bc,
  60: [yA, iw],
  91: yw,
  92: [PA, ky],
  93: lf,
  95: Bc,
  96: RA
}, Vw = {
  null: [Bc, Mw]
}, Qw = {
  null: [42, 95]
}, Fw = {
  null: []
}, Pw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Qw,
  contentInitial: Lw,
  disable: Fw,
  document: Uw,
  flow: qw,
  flowInitial: jw,
  insideSpan: Vw,
  string: Bw,
  text: Hw
}, Symbol.toStringTag, { value: "Module" }));
function Gw(n, i, l) {
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
    attempt: ae(W),
    check: ae(U),
    consume: ee,
    enter: P,
    exit: J,
    interrupt: ae(U, {
      interrupt: !0
    })
  }, m = {
    code: null,
    containerState: {},
    defineSkip: R,
    events: [],
    now: D,
    parser: n,
    previous: null,
    sliceSerialize: w,
    sliceStream: x,
    write: v
  };
  let h = i.tokenize.call(m, g);
  return i.resolveAll && c.push(i), m;
  function v(re) {
    return d = fn(d, re), j(), d[d.length - 1] !== null ? [] : (X(i, 0), m.events = rf(c, m.events, m), m.events);
  }
  function w(re, te) {
    return Kw(x(re), te);
  }
  function x(re) {
    return Yw(d, re);
  }
  function D() {
    const {
      _bufferIndex: re,
      _index: te,
      line: oe,
      column: ie,
      offset: Y
    } = o;
    return {
      _bufferIndex: re,
      _index: te,
      line: oe,
      column: ie,
      offset: Y
    };
  }
  function R(re) {
    u[re.line] = re.column, ge();
  }
  function j() {
    let re;
    for (; o._index < d.length; ) {
      const te = d[o._index];
      if (typeof te == "string")
        for (re = o._index, o._bufferIndex < 0 && (o._bufferIndex = 0); o._index === re && o._bufferIndex < te.length; )
          I(te.charCodeAt(o._bufferIndex));
      else
        I(te);
    }
  }
  function I(re) {
    h = h(re);
  }
  function ee(re) {
    we(re) ? (o.line++, o.column = 1, o.offset += re === -3 ? 2 : 1, ge()) : re !== -1 && (o.column++, o.offset++), o._bufferIndex < 0 ? o._index++ : (o._bufferIndex++, o._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    d[o._index].length && (o._bufferIndex = -1, o._index++)), m.previous = re;
  }
  function P(re, te) {
    const oe = te || {};
    return oe.type = re, oe.start = D(), m.events.push(["enter", oe, m]), p.push(oe), oe;
  }
  function J(re) {
    const te = p.pop();
    return te.end = D(), m.events.push(["exit", te, m]), te;
  }
  function W(re, te) {
    X(re, te.from);
  }
  function U(re, te) {
    te.restore();
  }
  function ae(re, te) {
    return oe;
    function oe(ie, Y, M) {
      let G, Q, Te, b;
      return Array.isArray(ie) ? (
        /* c8 ignore next 1 */
        $(ie)
      ) : "tokenize" in ie ? (
        // Looks like a construct.
        $([
          /** @type {Construct} */
          ie
        ])
      ) : q(ie);
      function q(se) {
        return De;
        function De(Me) {
          const tt = Me !== null && se[Me], yt = Me !== null && se.null, xt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(tt) ? tt : tt ? [tt] : [],
            ...Array.isArray(yt) ? yt : yt ? [yt] : []
          ];
          return $(xt)(Me);
        }
      }
      function $(se) {
        return G = se, Q = 0, se.length === 0 ? M : A(se[Q]);
      }
      function A(se) {
        return De;
        function De(Me) {
          return b = ce(), Te = se, se.partial || (m.currentConstruct = se), se.name && m.parser.constructs.disable.null.includes(se.name) ? Ae() : se.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            te ? Object.assign(Object.create(m), te) : m,
            g,
            ne,
            Ae
          )(Me);
        }
      }
      function ne(se) {
        return re(Te, b), Y;
      }
      function Ae(se) {
        return b.restore(), ++Q < G.length ? A(G[Q]) : M;
      }
    }
  }
  function X(re, te) {
    re.resolveAll && !c.includes(re) && c.push(re), re.resolve && zn(m.events, te, m.events.length - te, re.resolve(m.events.slice(te), m)), re.resolveTo && (m.events = re.resolveTo(m.events, m));
  }
  function ce() {
    const re = D(), te = m.previous, oe = m.currentConstruct, ie = m.events.length, Y = Array.from(p);
    return {
      from: ie,
      restore: M
    };
    function M() {
      o = re, m.previous = te, m.currentConstruct = oe, m.events.length = ie, p = Y, ge();
    }
  }
  function ge() {
    o.line in u && o.column < 2 && (o.column = u[o.line], o.offset += u[o.line] - 1);
  }
}
function Yw(n, i) {
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
function Kw(n, i) {
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
function Xw(n) {
  const o = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      nA([Pw, ...(n || {}).extensions || []])
    ),
    content: u(cA),
    defined: [],
    document: u(dA),
    flow: u(Rw),
    lazy: {},
    string: u(Ow),
    text: u(_w)
  };
  return o;
  function u(c) {
    return d;
    function d(p) {
      return Gw(o, c, p);
    }
  }
}
function Zw(n) {
  for (; !zy(n); )
    ;
  return n;
}
const Jh = /[\0\t\n\r]/g;
function Jw() {
  let n = 1, i = "", l = !0, o;
  return u;
  function u(c, d, p) {
    const g = [];
    let m, h, v, w, x;
    for (c = i + (typeof c == "string" ? c.toString() : new TextDecoder(d || void 0).decode(c)), v = 0, i = "", l && (c.charCodeAt(0) === 65279 && v++, l = void 0); v < c.length; ) {
      if (Jh.lastIndex = v, m = Jh.exec(c), w = m && m.index !== void 0 ? m.index : c.length, x = c.charCodeAt(w), !m) {
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
const Ww = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function $w(n) {
  return n.replace(Ww, eT);
}
function eT(n, i, l) {
  if (i)
    return i;
  if (l.charCodeAt(0) === 35) {
    const u = l.charCodeAt(1), c = u === 120 || u === 88;
    return Ey(l.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return af(l) || n;
}
const Iy = {}.hasOwnProperty;
function tT(n, i, l) {
  return typeof i != "string" && (l = i, i = void 0), nT(l)(Zw(Xw(l).document().write(Jw()(n, i, !0))));
}
function nT(n) {
  const i = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: c(qe),
      autolinkProtocol: ce,
      autolinkEmail: ce,
      atxHeading: c(le),
      blockQuote: c(yt),
      characterEscape: ce,
      characterReference: ce,
      codeFenced: c(xt),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: c(xt, d),
      codeText: c($t, d),
      codeTextData: ce,
      data: ce,
      codeFlowValue: ce,
      definition: c(xa),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: c(Ht),
      hardBreakEscape: c(Ue),
      hardBreakTrailing: c(Ue),
      htmlFlow: c(me, d),
      htmlFlowData: ce,
      htmlText: c(me, d),
      htmlTextData: ce,
      image: c(Le),
      label: d,
      link: c(qe),
      listItem: c(Kn),
      listItemValue: w,
      listOrdered: c(zt, v),
      listUnordered: c(zt),
      paragraph: c(vn),
      reference: A,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: c(le),
      strong: c(Aa),
      thematicBreak: c(Ho)
    },
    exit: {
      atxHeading: g(),
      atxHeadingSequence: W,
      autolink: g(),
      autolinkEmail: tt,
      autolinkProtocol: Me,
      blockQuote: g(),
      characterEscapeValue: ge,
      characterReferenceMarkerHexadecimal: Ae,
      characterReferenceMarkerNumeric: Ae,
      characterReferenceValue: se,
      characterReference: De,
      codeFenced: g(j),
      codeFencedFence: R,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: D,
      codeFlowValue: ge,
      codeIndented: g(I),
      codeText: g(Y),
      codeTextData: ge,
      data: ge,
      definition: g(),
      definitionDestinationString: J,
      definitionLabelString: ee,
      definitionTitleString: P,
      emphasis: g(),
      hardBreakEscape: g(te),
      hardBreakTrailing: g(te),
      htmlFlow: g(oe),
      htmlFlowData: ge,
      htmlText: g(ie),
      htmlTextData: ge,
      image: g(G),
      label: Te,
      labelText: Q,
      lineEnding: re,
      link: g(M),
      listItem: g(),
      listOrdered: g(),
      listUnordered: g(),
      paragraph: g(),
      referenceString: ne,
      resourceDestinationString: b,
      resourceTitleString: q,
      resource: $,
      setextHeading: g(X),
      setextHeadingLineSequence: ae,
      setextHeadingText: U,
      strong: g(),
      thematicBreak: g()
    }
  };
  Uy(i, (n || {}).mdastExtensions || []);
  const l = {};
  return o;
  function o(B) {
    let K = {
      type: "root",
      children: []
    };
    const ye = {
      stack: [K],
      tokenStack: [],
      config: i,
      enter: p,
      exit: m,
      buffer: d,
      resume: h,
      data: l
    }, Se = [];
    let Qe = -1;
    for (; ++Qe < B.length; )
      if (B[Qe][1].type === "listOrdered" || B[Qe][1].type === "listUnordered")
        if (B[Qe][0] === "enter")
          Se.push(Qe);
        else {
          const Vt = Se.pop();
          Qe = u(B, Vt, Qe);
        }
    for (Qe = -1; ++Qe < B.length; ) {
      const Vt = i[B[Qe][0]];
      Iy.call(Vt, B[Qe][1].type) && Vt[B[Qe][1].type].call(Object.assign({
        sliceSerialize: B[Qe][2].sliceSerialize
      }, ye), B[Qe][1]);
    }
    if (ye.tokenStack.length > 0) {
      const Vt = ye.tokenStack[ye.tokenStack.length - 1];
      (Vt[1] || Wh).call(ye, void 0, Vt[0]);
    }
    for (K.position = {
      start: va(B.length > 0 ? B[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: va(B.length > 0 ? B[B.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Qe = -1; ++Qe < i.transforms.length; )
      K = i.transforms[Qe](K) || K;
    return K;
  }
  function u(B, K, ye) {
    let Se = K - 1, Qe = -1, Vt = !1, Rn, Rt, Sn, Qt;
    for (; ++Se <= ye; ) {
      const dt = B[Se];
      switch (dt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          dt[0] === "enter" ? Qe++ : Qe--, Qt = void 0;
          break;
        }
        case "lineEndingBlank": {
          dt[0] === "enter" && (Rn && !Qt && !Qe && !Sn && (Sn = Se), Qt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Qt = void 0;
      }
      if (!Qe && dt[0] === "enter" && dt[1].type === "listItemPrefix" || Qe === -1 && dt[0] === "exit" && (dt[1].type === "listUnordered" || dt[1].type === "listOrdered")) {
        if (Rn) {
          let en = Se;
          for (Rt = void 0; en--; ) {
            const pn = B[en];
            if (pn[1].type === "lineEnding" || pn[1].type === "lineEndingBlank") {
              if (pn[0] === "exit") continue;
              Rt && (B[Rt][1].type = "lineEndingBlank", Vt = !0), pn[1].type = "lineEnding", Rt = en;
            } else if (!(pn[1].type === "linePrefix" || pn[1].type === "blockQuotePrefix" || pn[1].type === "blockQuotePrefixWhitespace" || pn[1].type === "blockQuoteMarker" || pn[1].type === "listItemIndent")) break;
          }
          Sn && (!Rt || Sn < Rt) && (Rn._spread = !0), Rn.end = Object.assign({}, Rt ? B[Rt][1].start : dt[1].end), B.splice(Rt || Se, 0, ["exit", Rn, dt[2]]), Se++, ye++;
        }
        if (dt[1].type === "listItemPrefix") {
          const en = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, dt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Rn = en, B.splice(Se, 0, ["enter", en, dt[2]]), Se++, ye++, Sn = void 0, Qt = !0;
        }
      }
    }
    return B[K][1]._spread = Vt, ye;
  }
  function c(B, K) {
    return ye;
    function ye(Se) {
      p.call(this, B(Se), Se), K && K.call(this, Se);
    }
  }
  function d() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function p(B, K, ye) {
    this.stack[this.stack.length - 1].children.push(B), this.stack.push(B), this.tokenStack.push([K, ye || void 0]), B.position = {
      start: va(K.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function g(B) {
    return K;
    function K(ye) {
      B && B.call(this, ye), m.call(this, ye);
    }
  }
  function m(B, K) {
    const ye = this.stack.pop(), Se = this.tokenStack.pop();
    if (Se)
      Se[0].type !== B.type && (K ? K.call(this, B, Se[0]) : (Se[1] || Wh).call(this, B, Se[0]));
    else throw new Error("Cannot close `" + B.type + "` (" + Kr({
      start: B.start,
      end: B.end
    }) + "): it’s not open");
    ye.position.end = va(B.end);
  }
  function h() {
    return eA(this.stack.pop());
  }
  function v() {
    this.data.expectingFirstListItemValue = !0;
  }
  function w(B) {
    if (this.data.expectingFirstListItemValue) {
      const K = this.stack[this.stack.length - 2];
      K.start = Number.parseInt(this.sliceSerialize(B), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function x() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.lang = B;
  }
  function D() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.meta = B;
  }
  function R() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function j() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = B.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function I() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = B.replace(/(\r?\n|\r)$/g, "");
  }
  function ee(B) {
    const K = this.resume(), ye = this.stack[this.stack.length - 1];
    ye.label = K, ye.identifier = Ui(this.sliceSerialize(B)).toLowerCase();
  }
  function P() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.title = B;
  }
  function J() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.url = B;
  }
  function W(B) {
    const K = this.stack[this.stack.length - 1];
    if (!K.depth) {
      const ye = this.sliceSerialize(B).length;
      K.depth = ye;
    }
  }
  function U() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function ae(B) {
    const K = this.stack[this.stack.length - 1];
    K.depth = this.sliceSerialize(B).codePointAt(0) === 61 ? 1 : 2;
  }
  function X() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function ce(B) {
    const ye = this.stack[this.stack.length - 1].children;
    let Se = ye[ye.length - 1];
    (!Se || Se.type !== "text") && (Se = Qi(), Se.position = {
      start: va(B.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ye.push(Se)), this.stack.push(Se);
  }
  function ge(B) {
    const K = this.stack.pop();
    K.value += this.sliceSerialize(B), K.position.end = va(B.end);
  }
  function re(B) {
    const K = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ye = K.children[K.children.length - 1];
      ye.position.end = va(B.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(K.type) && (ce.call(this, B), ge.call(this, B));
  }
  function te() {
    this.data.atHardBreak = !0;
  }
  function oe() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = B;
  }
  function ie() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = B;
  }
  function Y() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = B;
  }
  function M() {
    const B = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || "shortcut";
      B.type += "Reference", B.referenceType = K, delete B.url, delete B.title;
    } else
      delete B.identifier, delete B.label;
    this.data.referenceType = void 0;
  }
  function G() {
    const B = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || "shortcut";
      B.type += "Reference", B.referenceType = K, delete B.url, delete B.title;
    } else
      delete B.identifier, delete B.label;
    this.data.referenceType = void 0;
  }
  function Q(B) {
    const K = this.sliceSerialize(B), ye = this.stack[this.stack.length - 2];
    ye.label = $w(K), ye.identifier = Ui(K).toLowerCase();
  }
  function Te() {
    const B = this.stack[this.stack.length - 1], K = this.resume(), ye = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ye.type === "link") {
      const Se = B.children;
      ye.children = Se;
    } else
      ye.alt = K;
  }
  function b() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.url = B;
  }
  function q() {
    const B = this.resume(), K = this.stack[this.stack.length - 1];
    K.title = B;
  }
  function $() {
    this.data.inReference = void 0;
  }
  function A() {
    this.data.referenceType = "collapsed";
  }
  function ne(B) {
    const K = this.resume(), ye = this.stack[this.stack.length - 1];
    ye.label = K, ye.identifier = Ui(this.sliceSerialize(B)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ae(B) {
    this.data.characterReferenceType = B.type;
  }
  function se(B) {
    const K = this.sliceSerialize(B), ye = this.data.characterReferenceType;
    let Se;
    ye ? (Se = Ey(K, ye === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Se = af(K);
    const Qe = this.stack[this.stack.length - 1];
    Qe.value += Se;
  }
  function De(B) {
    const K = this.stack.pop();
    K.position.end = va(B.end);
  }
  function Me(B) {
    ge.call(this, B);
    const K = this.stack[this.stack.length - 1];
    K.url = this.sliceSerialize(B);
  }
  function tt(B) {
    ge.call(this, B);
    const K = this.stack[this.stack.length - 1];
    K.url = "mailto:" + this.sliceSerialize(B);
  }
  function yt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function xt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function $t() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function xa() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ht() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function le() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Ue() {
    return {
      type: "break"
    };
  }
  function me() {
    return {
      type: "html",
      value: ""
    };
  }
  function Le() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function qe() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function zt(B) {
    return {
      type: "list",
      ordered: B.type === "listOrdered",
      start: null,
      spread: B._spread,
      children: []
    };
  }
  function Kn(B) {
    return {
      type: "listItem",
      spread: B._spread,
      checked: null,
      children: []
    };
  }
  function vn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Aa() {
    return {
      type: "strong",
      children: []
    };
  }
  function Qi() {
    return {
      type: "text",
      value: ""
    };
  }
  function Ho() {
    return {
      type: "thematicBreak"
    };
  }
}
function va(n) {
  return {
    line: n.line,
    column: n.column,
    offset: n.offset
  };
}
function Uy(n, i) {
  let l = -1;
  for (; ++l < i.length; ) {
    const o = i[l];
    Array.isArray(o) ? Uy(n, o) : aT(n, o);
  }
}
function aT(n, i) {
  let l;
  for (l in i)
    if (Iy.call(i, l))
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
function Wh(n, i) {
  throw n ? new Error("Cannot close `" + n.type + "` (" + Kr({
    start: n.start,
    end: n.end
  }) + "): a different token (`" + i.type + "`, " + Kr({
    start: i.start,
    end: i.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + Kr({
    start: i.start,
    end: i.end
  }) + ") is still open");
}
function iT(n) {
  const i = this;
  i.parser = l;
  function l(o) {
    return tT(o, {
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
function rT(n, i) {
  const l = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(i), !0)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function lT(n, i) {
  const l = { type: "element", tagName: "br", properties: {}, children: [] };
  return n.patch(i, l), [n.applyData(i, l), { type: "text", value: `
` }];
}
function oT(n, i) {
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
function sT(n, i) {
  const l = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function uT(n, i) {
  const l = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function cT(n, i) {
  const l = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", o = String(i.identifier).toUpperCase(), u = Vi(o.toLowerCase()), c = n.footnoteOrder.indexOf(o);
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
function fT(n, i) {
  const l = {
    type: "element",
    tagName: "h" + i.depth,
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function dT(n, i) {
  if (n.options.allowDangerousHtml) {
    const l = { type: "raw", value: i.value };
    return n.patch(i, l), n.applyData(i, l);
  }
}
function Ly(n, i) {
  const l = i.referenceType;
  let o = "]";
  if (l === "collapsed" ? o += "[]" : l === "full" && (o += "[" + (i.label || i.identifier) + "]"), i.type === "imageReference")
    return [{ type: "text", value: "![" + i.alt + o }];
  const u = n.all(i), c = u[0];
  c && c.type === "text" ? c.value = "[" + c.value : u.unshift({ type: "text", value: "[" });
  const d = u[u.length - 1];
  return d && d.type === "text" ? d.value += o : u.push({ type: "text", value: o }), u;
}
function pT(n, i) {
  const l = String(i.identifier).toUpperCase(), o = n.definitionById.get(l);
  if (!o)
    return Ly(n, i);
  const u = { src: Vi(o.url || ""), alt: i.alt };
  o.title !== null && o.title !== void 0 && (u.title = o.title);
  const c = { type: "element", tagName: "img", properties: u, children: [] };
  return n.patch(i, c), n.applyData(i, c);
}
function mT(n, i) {
  const l = { src: Vi(i.url) };
  i.alt !== null && i.alt !== void 0 && (l.alt = i.alt), i.title !== null && i.title !== void 0 && (l.title = i.title);
  const o = { type: "element", tagName: "img", properties: l, children: [] };
  return n.patch(i, o), n.applyData(i, o);
}
function hT(n, i) {
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
function gT(n, i) {
  const l = String(i.identifier).toUpperCase(), o = n.definitionById.get(l);
  if (!o)
    return Ly(n, i);
  const u = { href: Vi(o.url || "") };
  o.title !== null && o.title !== void 0 && (u.title = o.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: u,
    children: n.all(i)
  };
  return n.patch(i, c), n.applyData(i, c);
}
function yT(n, i) {
  const l = { href: Vi(i.url) };
  i.title !== null && i.title !== void 0 && (l.title = i.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: l,
    children: n.all(i)
  };
  return n.patch(i, o), n.applyData(i, o);
}
function bT(n, i, l) {
  const o = n.all(i), u = l ? vT(l) : jy(i), c = {}, d = [];
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
function vT(n) {
  let i = !1;
  if (n.type === "list") {
    i = n.spread || !1;
    const l = n.children;
    let o = -1;
    for (; !i && ++o < l.length; )
      i = jy(l[o]);
  }
  return i;
}
function jy(n) {
  const i = n.spread;
  return i ?? n.children.length > 1;
}
function ST(n, i) {
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
function xT(n, i) {
  const l = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function AT(n, i) {
  const l = { type: "root", children: n.wrap(n.all(i)) };
  return n.patch(i, l), n.applyData(i, l);
}
function wT(n, i) {
  const l = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
function TT(n, i) {
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
    }, p = $c(i.children[1]), g = by(i.children[i.children.length - 1]);
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
function ET(n, i, l) {
  const o = l ? l.children : void 0, c = (o ? o.indexOf(i) : 1) === 0 ? "th" : "td", d = l && l.type === "table" ? l.align : void 0, p = d ? d.length : i.children.length;
  let g = -1;
  const m = [];
  for (; ++g < p; ) {
    const v = i.children[g], w = {}, x = d ? d[g] : void 0;
    x && (w.align = x);
    let D = { type: "element", tagName: c, properties: w, children: [] };
    v && (D.children = n.all(v), n.patch(v, D), D = n.applyData(v, D)), m.push(D);
  }
  const h = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: n.wrap(m, !0)
  };
  return n.patch(i, h), n.applyData(i, h);
}
function CT(n, i) {
  const l = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, l), n.applyData(i, l);
}
const $h = 9, eg = 32;
function kT(n) {
  const i = String(n), l = /\r?\n|\r/g;
  let o = l.exec(i), u = 0;
  const c = [];
  for (; o; )
    c.push(
      tg(i.slice(u, o.index), u > 0, !0),
      o[0]
    ), u = o.index + o[0].length, o = l.exec(i);
  return c.push(tg(i.slice(u), u > 0, !1)), c.join("");
}
function tg(n, i, l) {
  let o = 0, u = n.length;
  if (i) {
    let c = n.codePointAt(o);
    for (; c === $h || c === eg; )
      o++, c = n.codePointAt(o);
  }
  if (l) {
    let c = n.codePointAt(u - 1);
    for (; c === $h || c === eg; )
      u--, c = n.codePointAt(u - 1);
  }
  return u > o ? n.slice(o, u) : "";
}
function DT(n, i) {
  const l = { type: "text", value: kT(String(i.value)) };
  return n.patch(i, l), n.applyData(i, l);
}
function zT(n, i) {
  const l = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return n.patch(i, l), n.applyData(i, l);
}
const RT = {
  blockquote: rT,
  break: lT,
  code: oT,
  delete: sT,
  emphasis: uT,
  footnoteReference: cT,
  heading: fT,
  html: dT,
  imageReference: pT,
  image: mT,
  inlineCode: hT,
  linkReference: gT,
  link: yT,
  listItem: bT,
  list: ST,
  paragraph: xT,
  // @ts-expect-error: root is different, but hard to type.
  root: AT,
  strong: wT,
  table: TT,
  tableCell: CT,
  tableRow: ET,
  text: DT,
  thematicBreak: zT,
  toml: yo,
  yaml: yo,
  definition: yo,
  footnoteDefinition: yo
};
function yo() {
}
const qy = -1, qo = 0, Zr = 1, zo = 2, of = 3, sf = 4, uf = 5, cf = 6, By = 7, Hy = 8, ng = typeof self == "object" ? self : globalThis, NT = (n, i) => {
  const l = (u, c) => (n.set(c, u), u), o = (u) => {
    if (n.has(u))
      return n.get(u);
    const [c, d] = i[u];
    switch (c) {
      case qo:
      case qy:
        return l(d, u);
      case Zr: {
        const p = l([], u);
        for (const g of d)
          p.push(o(g));
        return p;
      }
      case zo: {
        const p = l({}, u);
        for (const [g, m] of d)
          p[o(g)] = o(m);
        return p;
      }
      case of:
        return l(new Date(d), u);
      case sf: {
        const { source: p, flags: g } = d;
        return l(new RegExp(p, g), u);
      }
      case uf: {
        const p = l(/* @__PURE__ */ new Map(), u);
        for (const [g, m] of d)
          p.set(o(g), o(m));
        return p;
      }
      case cf: {
        const p = l(/* @__PURE__ */ new Set(), u);
        for (const g of d)
          p.add(o(g));
        return p;
      }
      case By: {
        const { name: p, message: g } = d;
        return l(new ng[p](g), u);
      }
      case Hy:
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
    return l(new ng[c](d), u);
  };
  return o;
}, ag = (n) => NT(/* @__PURE__ */ new Map(), n)(0), _i = "", { toString: MT } = {}, { keys: OT } = Object, Gr = (n) => {
  const i = typeof n;
  if (i !== "object" || !n)
    return [qo, i];
  const l = MT.call(n).slice(8, -1);
  switch (l) {
    case "Array":
      return [Zr, _i];
    case "Object":
      return [zo, _i];
    case "Date":
      return [of, _i];
    case "RegExp":
      return [sf, _i];
    case "Map":
      return [uf, _i];
    case "Set":
      return [cf, _i];
    case "DataView":
      return [Zr, l];
  }
  return l.includes("Array") ? [Zr, l] : l.includes("Error") ? [By, l] : [zo, l];
}, bo = ([n, i]) => n === qo && (i === "function" || i === "symbol"), _T = (n, i, l, o) => {
  const u = (d, p) => {
    const g = o.push(d) - 1;
    return l.set(p, g), g;
  }, c = (d) => {
    if (l.has(d))
      return l.get(d);
    let [p, g] = Gr(d);
    switch (p) {
      case qo: {
        let h = d;
        switch (g) {
          case "bigint":
            p = Hy, h = d.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + g);
            h = null;
            break;
          case "undefined":
            return u([qy], d);
        }
        return u([p, h], d);
      }
      case Zr: {
        if (g) {
          let w = d;
          return g === "DataView" ? w = new Uint8Array(d.buffer) : g === "ArrayBuffer" && (w = new Uint8Array(d)), u([g, [...w]], d);
        }
        const h = [], v = u([p, h], d);
        for (const w of d)
          h.push(c(w));
        return v;
      }
      case zo: {
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
        for (const w of OT(d))
          (n || !bo(Gr(d[w]))) && h.push([c(w), c(d[w])]);
        return v;
      }
      case of:
        return u([p, d.toISOString()], d);
      case sf: {
        const { source: h, flags: v } = d;
        return u([p, { source: h, flags: v }], d);
      }
      case uf: {
        const h = [], v = u([p, h], d);
        for (const [w, x] of d)
          (n || !(bo(Gr(w)) || bo(Gr(x)))) && h.push([c(w), c(x)]);
        return v;
      }
      case cf: {
        const h = [], v = u([p, h], d);
        for (const w of d)
          (n || !bo(Gr(w))) && h.push(c(w));
        return v;
      }
    }
    const { message: m } = d;
    return u([p, { name: g, message: m }], d);
  };
  return c;
}, ig = (n, { json: i, lossy: l } = {}) => {
  const o = [];
  return _T(!(i || l), !!i, /* @__PURE__ */ new Map(), o)(n), o;
}, Ro = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, i) => i && ("json" in i || "lossy" in i) ? ag(ig(n, i)) : structuredClone(n)
) : (n, i) => ag(ig(n, i));
function IT(n, i) {
  const l = [{ type: "text", value: "↩" }];
  return i > 1 && l.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(i) }]
  }), l;
}
function UT(n, i) {
  return "Back to reference " + (n + 1) + (i > 1 ? "-" + i : "");
}
function LT(n) {
  const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", l = n.options.footnoteBackContent || IT, o = n.options.footnoteBackLabel || UT, u = n.options.footnoteLabel || "Footnotes", c = n.options.footnoteLabelTagName || "h2", d = n.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let g = -1;
  for (; ++g < n.footnoteOrder.length; ) {
    const m = n.footnoteById.get(
      n.footnoteOrder[g]
    );
    if (!m)
      continue;
    const h = n.all(m), v = String(m.identifier).toUpperCase(), w = Vi(v.toLowerCase());
    let x = 0;
    const D = [], R = n.footnoteCounts.get(v);
    for (; R !== void 0 && ++x <= R; ) {
      D.length > 0 && D.push({ type: "text", value: " " });
      let ee = typeof l == "string" ? l : l(g, x);
      typeof ee == "string" && (ee = { type: "text", value: ee }), D.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + i + "fnref-" + w + (x > 1 ? "-" + x : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof o == "string" ? o : o(g, x),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(ee) ? ee : [ee]
      });
    }
    const j = h[h.length - 1];
    if (j && j.type === "element" && j.tagName === "p") {
      const ee = j.children[j.children.length - 1];
      ee && ee.type === "text" ? ee.value += " " : j.children.push({ type: "text", value: " " }), j.children.push(...D);
    } else
      h.push(...D);
    const I = {
      type: "element",
      tagName: "li",
      properties: { id: i + "fn-" + w },
      children: n.wrap(h, !0)
    };
    n.patch(m, I), p.push(I);
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
            ...Ro(d),
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
const Vy = (
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
      return HT;
    if (typeof n == "function")
      return Bo(n);
    if (typeof n == "object")
      return Array.isArray(n) ? jT(n) : qT(n);
    if (typeof n == "string")
      return BT(n);
    throw new Error("Expected function, string, or object as test");
  }
);
function jT(n) {
  const i = [];
  let l = -1;
  for (; ++l < n.length; )
    i[l] = Vy(n[l]);
  return Bo(o);
  function o(...u) {
    let c = -1;
    for (; ++c < i.length; )
      if (i[c].apply(this, u)) return !0;
    return !1;
  }
}
function qT(n) {
  const i = (
    /** @type {Record<string, unknown>} */
    n
  );
  return Bo(l);
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
function BT(n) {
  return Bo(i);
  function i(l) {
    return l && l.type === n;
  }
}
function Bo(n) {
  return i;
  function i(l, o, u) {
    return !!(VT(l) && n.call(
      this,
      l,
      typeof o == "number" ? o : void 0,
      u || void 0
    ));
  }
}
function HT() {
  return !0;
}
function VT(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const Qy = [], QT = !0, rg = !1, FT = "skip";
function PT(n, i, l, o) {
  let u;
  typeof i == "function" && typeof l != "function" ? (o = l, l = i) : u = i;
  const c = Vy(u), d = o ? -1 : 1;
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
      let x = Qy, D, R, j;
      if ((!i || c(g, m, h[h.length - 1] || void 0)) && (x = GT(l(g, h)), x[0] === rg))
        return x;
      if ("children" in g && g.children) {
        const I = (
          /** @type {UnistParent} */
          g
        );
        if (I.children && x[0] !== FT)
          for (R = (o ? I.children.length : -1) + d, j = h.concat(I); R > -1 && R < I.children.length; ) {
            const ee = I.children[R];
            if (D = p(ee, R, j)(), D[0] === rg)
              return D;
            R = typeof D[1] == "number" ? D[1] : R + d;
          }
      }
      return x;
    }
  }
}
function GT(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [QT, n] : n == null ? Qy : [n];
}
function Fy(n, i, l, o) {
  let u, c, d;
  typeof i == "function" && typeof l != "function" ? (c = void 0, d = i, u = l) : (c = i, d = l, u = o), PT(n, c, p, u);
  function p(g, m) {
    const h = m[m.length - 1], v = h ? h.children.indexOf(g) : void 0;
    return d(g, v, h);
  }
}
const Hc = {}.hasOwnProperty, YT = {};
function KT(n, i) {
  const l = i || YT, o = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = { ...RT, ...l.handlers }, p = {
    all: m,
    applyData: ZT,
    definitionById: o,
    footnoteById: u,
    footnoteCounts: c,
    footnoteOrder: [],
    handlers: d,
    one: g,
    options: l,
    patch: XT,
    wrap: WT
  };
  return Fy(n, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const v = h.type === "definition" ? o : u, w = String(h.identifier).toUpperCase();
      v.has(w) || v.set(w, h);
    }
  }), p;
  function g(h, v) {
    const w = h.type, x = p.handlers[w];
    if (Hc.call(p.handlers, w) && x)
      return x(p, h, v);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ("children" in h) {
        const { children: R, ...j } = h, I = Ro(j);
        return I.children = p.all(h), I;
      }
      return Ro(h);
    }
    return (p.options.unknownHandler || JT)(p, h, v);
  }
  function m(h) {
    const v = [];
    if ("children" in h) {
      const w = h.children;
      let x = -1;
      for (; ++x < w.length; ) {
        const D = p.one(w[x], h);
        if (D) {
          if (x && w[x - 1].type === "break" && (!Array.isArray(D) && D.type === "text" && (D.value = lg(D.value)), !Array.isArray(D) && D.type === "element")) {
            const R = D.children[0];
            R && R.type === "text" && (R.value = lg(R.value));
          }
          Array.isArray(D) ? v.push(...D) : v.push(D);
        }
      }
    }
    return v;
  }
}
function XT(n, i) {
  n.position && (i.position = M1(n));
}
function ZT(n, i) {
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
    l.type === "element" && c && Object.assign(l.properties, Ro(c)), "children" in l && l.children && u !== null && u !== void 0 && (l.children = u);
  }
  return l;
}
function JT(n, i) {
  const l = i.data || {}, o = "value" in i && !(Hc.call(l, "hProperties") || Hc.call(l, "hChildren")) ? { type: "text", value: i.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, o), n.applyData(i, o);
}
function WT(n, i) {
  const l = [];
  let o = -1;
  for (i && l.push({ type: "text", value: `
` }); ++o < n.length; )
    o && l.push({ type: "text", value: `
` }), l.push(n[o]);
  return i && n.length > 0 && l.push({ type: "text", value: `
` }), l;
}
function lg(n) {
  let i = 0, l = n.charCodeAt(i);
  for (; l === 9 || l === 32; )
    i++, l = n.charCodeAt(i);
  return n.slice(i);
}
function og(n, i) {
  const l = KT(n, i), o = l.one(n, void 0), u = LT(l), c = Array.isArray(o) ? { type: "root", children: o } : o || { type: "root", children: [] };
  return u && c.children.push({ type: "text", value: `
` }, u), c;
}
function $T(n, i) {
  return n && "run" in n ? async function(l, o) {
    const u = (
      /** @type {HastRoot} */
      og(l, { file: o, ...i })
    );
    await n.run(u, o);
  } : function(l, o) {
    return (
      /** @type {HastRoot} */
      og(l, { file: o, ...n || i })
    );
  };
}
function sg(n) {
  if (n)
    throw n;
}
var hc, ug;
function eE() {
  if (ug) return hc;
  ug = 1;
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
  return hc = function g() {
    var m, h, v, w, x, D, R = arguments[0], j = 1, I = arguments.length, ee = !1;
    for (typeof R == "boolean" && (ee = R, R = arguments[1] || {}, j = 2), (R == null || typeof R != "object" && typeof R != "function") && (R = {}); j < I; ++j)
      if (m = arguments[j], m != null)
        for (h in m)
          v = p(R, h), w = p(m, h), R !== w && (ee && w && (c(w) || (x = u(w))) ? (x ? (x = !1, D = v && u(v) ? v : []) : D = v && c(v) ? v : {}, d(R, { name: h, newValue: g(ee, D, w) })) : typeof w < "u" && d(R, { name: h, newValue: w }));
    return R;
  }, hc;
}
var tE = eE();
const gc = /* @__PURE__ */ Pc(tE);
function Vc(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const i = Object.getPrototypeOf(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function nE() {
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
      u = m, h ? aE(h, p)(...m) : d(null, ...m);
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
function aE(n, i) {
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
const kn = { basename: iE, dirname: rE, extname: lE, join: oE, sep: "/" };
function iE(n, i) {
  if (i !== void 0 && typeof i != "string")
    throw new TypeError('"ext" argument must be a string');
  al(n);
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
function rE(n) {
  if (al(n), n.length === 0)
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
function lE(n) {
  al(n);
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
function oE(...n) {
  let i = -1, l;
  for (; ++i < n.length; )
    al(n[i]), n[i] && (l = l === void 0 ? n[i] : l + "/" + n[i]);
  return l === void 0 ? "." : sE(l);
}
function sE(n) {
  al(n);
  const i = n.codePointAt(0) === 47;
  let l = uE(n, !i);
  return l.length === 0 && !i && (l = "."), l.length > 0 && n.codePointAt(n.length - 1) === 47 && (l += "/"), i ? "/" + l : l;
}
function uE(n, i) {
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
function al(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
const cE = { cwd: fE };
function fE() {
  return "/";
}
function Qc(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function dE(n) {
  if (typeof n == "string")
    n = new URL(n);
  else if (!Qc(n)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + "`"
    );
    throw i.code = "ERR_INVALID_ARG_TYPE", i;
  }
  if (n.protocol !== "file:") {
    const i = new TypeError("The URL must be of scheme file");
    throw i.code = "ERR_INVALID_URL_SCHEME", i;
  }
  return pE(n);
}
function pE(n) {
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
const yc = (
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
class Py {
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
    i ? Qc(i) ? l = { path: i } : typeof i == "string" || mE(i) ? l = { value: i } : l = i : l = {}, this.cwd = "cwd" in l ? "" : cE.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let o = -1;
    for (; ++o < yc.length; ) {
      const c = yc[o];
      c in l && l[c] !== void 0 && l[c] !== null && (this[c] = c === "history" ? [...l[c]] : l[c]);
    }
    let u;
    for (u in l)
      yc.includes(u) || (this[u] = l[u]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? kn.basename(this.path) : void 0;
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
    vc(i, "basename"), bc(i, "basename"), this.path = kn.join(this.dirname || "", i);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? kn.dirname(this.path) : void 0;
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
    cg(this.basename, "dirname"), this.path = kn.join(i || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? kn.extname(this.path) : void 0;
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
    if (bc(i, "extname"), cg(this.dirname, "extname"), i) {
      if (i.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (i.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = kn.join(this.dirname, this.stem + (i || ""));
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
    Qc(i) && (i = dE(i)), vc(i, "path"), this.path !== i && this.history.push(i);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? kn.basename(this.path, this.extname) : void 0;
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
    vc(i, "stem"), bc(i, "stem"), this.path = kn.join(this.dirname || "", i + (this.extname || ""));
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
    const u = new kt(
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
function bc(n, i) {
  if (n && n.includes(kn.sep))
    throw new Error(
      "`" + i + "` cannot be a path: did not expect `" + kn.sep + "`"
    );
}
function vc(n, i) {
  if (!n)
    throw new Error("`" + i + "` cannot be empty");
}
function cg(n, i) {
  if (!n)
    throw new Error("Setting `" + i + "` requires `path` to be set too");
}
function mE(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const hE = (
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
), gE = {}.hasOwnProperty;
class ff extends hE {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = nE();
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
      new ff()
    );
    let l = -1;
    for (; ++l < this.attachers.length; ) {
      const o = this.attachers[l];
      i.use(...o);
    }
    return i.data(gc(!0, {}, this.namespace)), i;
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
    return typeof i == "string" ? arguments.length === 2 ? (Ac("data", this.frozen), this.namespace[i] = l, this) : gE.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (Ac("data", this.frozen), this.namespace = i, this) : this.namespace;
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
    const l = vo(i), o = this.parser || this.Parser;
    return Sc("parse", o), o(String(l), l);
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
    return this.freeze(), Sc("process", this.parser || this.Parser), xc("process", this.compiler || this.Compiler), l ? u(void 0, l) : new Promise(u);
    function u(c, d) {
      const p = vo(i), g = (
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
        ), D = o.stringify(x, w);
        vE(D) ? w.value = D : w.result = D, m(
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
    return this.freeze(), Sc("processSync", this.parser || this.Parser), xc("processSync", this.compiler || this.Compiler), this.process(i, u), dg("processSync", "process", l), o;
    function u(c, d) {
      l = !0, sg(c), o = d;
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
    fg(i), this.freeze();
    const u = this.transformers;
    return !o && typeof l == "function" && (o = l, l = void 0), o ? c(void 0, o) : new Promise(c);
    function c(d, p) {
      const g = vo(l);
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
    return this.run(i, l, c), dg("runSync", "run", o), u;
    function c(d, p) {
      sg(d), u = p, o = !0;
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
    const o = vo(l), u = this.compiler || this.Compiler;
    return xc("stringify", u), fg(i), u(i, o);
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
    if (Ac("use", this.frozen), i != null) if (typeof i == "function")
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
      p(m.plugins), m.settings && (u.settings = gc(!0, u.settings, m.settings));
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
        let [x, ...D] = h;
        const R = o[w][1];
        Vc(R) && Vc(x) && (x = gc(!0, R, x)), o[w] = [m, x, ...D];
      }
    }
  }
}
const yE = new ff().freeze();
function Sc(n, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + n + "` without `parser`");
}
function xc(n, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + n + "` without `compiler`");
}
function Ac(n, i) {
  if (i)
    throw new Error(
      "Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function fg(n) {
  if (!Vc(n) || typeof n.type != "string")
    throw new TypeError("Expected node, got `" + n + "`");
}
function dg(n, i, l) {
  if (!l)
    throw new Error(
      "`" + n + "` finished async. Use `" + i + "` instead"
    );
}
function vo(n) {
  return bE(n) ? n : new Py(n);
}
function bE(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function vE(n) {
  return typeof n == "string" || SE(n);
}
function SE(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const xE = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", pg = [], mg = { allowDangerousHtml: !0 }, AE = /^(https?|ircs?|mailto|xmpp)$/i, wE = [
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
function TE(n) {
  const i = EE(n), l = CE(n);
  return kE(i.runSync(i.parse(l), l), n);
}
function EE(n) {
  const i = n.rehypePlugins || pg, l = n.remarkPlugins || pg, o = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...mg } : mg;
  return yE().use(iT).use(l).use($T, o).use(i);
}
function CE(n) {
  const i = n.children || "", l = new Py();
  return typeof i == "string" && (l.value = i), l;
}
function kE(n, i) {
  const l = i.allowedElements, o = i.allowElement, u = i.components, c = i.disallowedElements, d = i.skipHtml, p = i.unwrapDisallowed, g = i.urlTransform || DE;
  for (const h of wE)
    Object.hasOwn(i, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + xE + h.id, void 0);
  return Fy(n, m), L1(n, {
    Fragment: C.Fragment,
    components: u,
    ignoreInvalidStyle: !0,
    jsx: C.jsx,
    jsxs: C.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function m(h, v, w) {
    if (h.type === "raw" && w && typeof v == "number")
      return d ? w.children.splice(v, 1) : w.children[v] = { type: "text", value: h.value }, v;
    if (h.type === "element") {
      let x;
      for (x in dc)
        if (Object.hasOwn(dc, x) && Object.hasOwn(h.properties, x)) {
          const D = h.properties[x], R = dc[x];
          (R === null || R.includes(h.tagName)) && (h.properties[x] = g(String(D || ""), x, h));
        }
    }
    if (h.type === "element") {
      let x = l ? !l.includes(h.tagName) : c ? c.includes(h.tagName) : !1;
      if (!x && o && typeof v == "number" && (x = !o(h, v, w)), x && w && typeof v == "number")
        return p && h.children ? w.children.splice(v, 1, ...h.children) : w.children.splice(v, 1), v;
    }
  }
}
function DE(n) {
  const i = n.indexOf(":"), l = n.indexOf("?"), o = n.indexOf("#"), u = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    i === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    u !== -1 && i > u || l !== -1 && i > l || o !== -1 && i > o || // It is a protocol, it should be allowed.
    AE.test(n.slice(0, i)) ? n : ""
  );
}
function zE(n) {
  if (!n) return { type: "external", style: "text-blue-500 hover:text-blue-600" };
  const i = n.toLowerCase();
  return i.startsWith("mailto:") ? { type: "email", style: "text-green-500 hover:text-green-600" } : i.startsWith("tel:") ? { type: "phone", style: "text-purple-500 hover:text-purple-600" } : i.startsWith("sms:") ? { type: "sms", style: "text-orange-500 hover:text-orange-600" } : i.startsWith("whatsapp:") ? { type: "whatsapp", style: "text-green-500 hover:text-green-600" } : i.startsWith("http://") || i.startsWith("https://") ? i.includes("#") ? { type: "section", style: "text-blue-500 hover:text-blue-600" } : { type: "external", style: "text-blue-500 hover:text-blue-600" } : { type: "internal", style: "text-blue-500 hover:text-blue-600" };
}
function Gy({ content: n, className: i = "" }) {
  return /* @__PURE__ */ C.jsx("div", { className: `prose prose-sm max-w-none dark:prose-invert ${i}`, children: /* @__PURE__ */ C.jsx(
    TE,
    {
      components: {
        // Custom styling for markdown elements
        p: ({ children: l }) => /* @__PURE__ */ C.jsx("p", { className: "mb-2 last:mb-0", children: l }),
        ul: ({ children: l }) => /* @__PURE__ */ C.jsx("ul", { className: "list-disc list-inside mb-2 space-y-1", children: l }),
        ol: ({ children: l }) => /* @__PURE__ */ C.jsx("ol", { className: "list-decimal list-inside mb-2 space-y-1", children: l }),
        li: ({ children: l }) => /* @__PURE__ */ C.jsx("li", { className: "text-sm", children: l }),
        strong: ({ children: l }) => /* @__PURE__ */ C.jsx("strong", { className: "font-semibold", children: l }),
        em: ({ children: l }) => /* @__PURE__ */ C.jsx("em", { className: "italic", children: l }),
        code: ({ children: l }) => /* @__PURE__ */ C.jsx("code", { className: "bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono", children: l }),
        pre: ({ children: l }) => /* @__PURE__ */ C.jsx("pre", { className: "bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto", children: l }),
        h1: ({ children: l }) => /* @__PURE__ */ C.jsx("h1", { className: "text-lg font-bold mb-2", children: l }),
        h2: ({ children: l }) => /* @__PURE__ */ C.jsx("h2", { className: "text-base font-bold mb-2", children: l }),
        h3: ({ children: l }) => /* @__PURE__ */ C.jsx("h3", { className: "text-sm font-bold mb-1", children: l }),
        a: ({ children: l, href: o }) => {
          const { type: u, style: c } = zE(o || "");
          return u === "email" ? /* @__PURE__ */ C.jsx(
            "a",
            {
              href: o,
              className: `${c} underline inline-flex items-center gap-1 hover:no-underline transition-colors`,
              title: "Send email",
              children: l
            }
          ) : u === "phone" ? /* @__PURE__ */ C.jsx(
            "a",
            {
              href: o,
              className: `${c} underline inline-flex items-center gap-1 hover:no-underline transition-colors`,
              title: "Call phone number",
              children: l
            }
          ) : u === "sms" ? /* @__PURE__ */ C.jsx(
            "a",
            {
              href: o,
              className: `${c} underline inline-flex items-center gap-1 hover:no-underline transition-colors`,
              title: "Send SMS",
              children: l
            }
          ) : u === "whatsapp" ? /* @__PURE__ */ C.jsx(
            "a",
            {
              href: o,
              className: `${c} underline inline-flex items-center gap-1 hover:no-underline transition-colors`,
              title: "Open WhatsApp",
              children: l
            }
          ) : u === "external" ? /* @__PURE__ */ C.jsx(
            "a",
            {
              href: o,
              className: `${c} underline inline-flex items-center gap-1 hover:no-underline transition-colors`,
              target: "_blank",
              rel: "noopener noreferrer",
              title: "Open external link",
              children: l
            }
          ) : u === "section" ? /* @__PURE__ */ C.jsx(
            "a",
            {
              href: o,
              className: `${c} underline inline-flex items-center gap-1 hover:no-underline transition-colors`,
              title: "Navigate to section",
              children: l
            }
          ) : /* @__PURE__ */ C.jsx(
            "a",
            {
              href: o,
              className: `${c} underline inline-flex items-center gap-1 hover:no-underline transition-colors`,
              title: "Navigate to link",
              children: l
            }
          );
        }
      },
      children: n
    }
  ) });
}
class yn {
  static BACKEND_URL = "https://qurius-ai.onrender.com";
  // Track widget view
  static async trackWidgetView(i, l, o) {
    try {
      const u = this.getSessionId(), c = navigator.userAgent;
      await ze.post(`${this.BACKEND_URL}/api/analytics/widget-view`, {
        companyName: i,
        companyId: l,
        pageUrl: o || window.location.href,
        userAgent: c,
        sessionId: u,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (u) {
      console.error("Failed to track widget view:", u);
    }
  }
  // Enhanced widget interaction tracking
  static async trackWidgetInteraction(i, l, o, u, c, d) {
    try {
      const p = this.getSessionId();
      await ze.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName: i,
        companyId: l,
        eventType: o,
        message: u,
        response: c,
        sessionId: p,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        ...d
      });
    } catch (p) {
      console.error("Failed to track widget interaction:", p);
    }
  }
  // Get analytics for a company
  static async getCompanyAnalytics(i, l = "7d") {
    try {
      return (await ze.get(`${this.BACKEND_URL}/api/analytics/company/${i}?period=${l}`)).data;
    } catch (o) {
      throw console.error("Failed to fetch analytics:", o), new Error("Failed to fetch analytics");
    }
  }
  // Get FAQ performance analytics
  static async getFAQPerformance(i, l = "7d") {
    try {
      return (await ze.get(`${this.BACKEND_URL}/api/analytics/faq-performance/${i}?period=${l}`)).data;
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
  static async trackWidgetOpen(i, l) {
    await this.trackWidgetInteraction(i, l, "widget_opened");
  }
  // Track widget close
  static async trackWidgetClose(i, l) {
    await this.trackWidgetInteraction(i, l, "widget_closed");
  }
  // Track message sent
  static async trackMessageSent(i, l, o) {
    await this.trackWidgetInteraction(i, l, "message_sent", o);
  }
  // Track message received with source tracking
  static async trackMessageReceived(i, l, o, u, c, d, p) {
    try {
      const g = this.getSessionId();
      await ze.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName: i,
        companyId: l,
        eventType: "message_received",
        response: o,
        responseSource: u,
        faqId: c,
        confidenceScore: d,
        aiFallbackReason: p,
        sessionId: g,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (g) {
      console.error("Failed to track message received:", g);
    }
  }
  // Track language change
  static async trackLanguageChange(i, l, o) {
    await this.trackWidgetInteraction(i, l, "language_changed", void 0, void 0, {
      language: o
    });
  }
  // Track theme change
  static async trackThemeChange(i, l, o) {
    await this.trackWidgetInteraction(i, l, "theme_changed", void 0, void 0, {
      themeMode: o
    });
  }
  // Track content match (new approach - when content is found)
  static async trackContentMatch(i, l, o, u, c = "mixed") {
    await this.trackWidgetInteraction(i, l, "content_matched", void 0, void 0, {
      faqId: o,
      confidenceScore: u,
      responseSource: "ai_with_context",
      aiFallbackReason: `high_confidence_${c}`
    });
  }
  // Track true AI fallback (new approach - when no content is found)
  static async trackTrueAIFallback(i, l, o) {
    await this.trackWidgetInteraction(i, l, "true_ai_fallback", void 0, void 0, {
      aiFallbackReason: o,
      confidenceScore: 0,
      responseSource: "ai"
    });
  }
  // Track FAQ match (legacy - keeping for backward compatibility)
  static async trackFAQMatch(i, l, o, u) {
    await this.trackWidgetInteraction(i, l, "faq_matched", void 0, void 0, {
      faqId: o,
      confidenceScore: u,
      responseSource: "faq"
    });
  }
  // Track AI fallback (legacy - keeping for backward compatibility)
  static async trackAIFallback(i, l, o, u) {
    await this.trackWidgetInteraction(i, l, "ai_fallback", void 0, void 0, {
      aiFallbackReason: o,
      confidenceScore: u,
      responseSource: "ai"
    });
  }
  // Track user rating
  static async trackRating(i, l, o, u, c, d, p, g) {
    await this.trackWidgetInteraction(i, l, "rating_given", void 0, u, {
      rating: o,
      feedbackText: d,
      responseSource: c,
      faqId: p,
      confidenceScore: g
    });
  }
  // Track lead generation
  static async trackLeadGenerated(i, l, o) {
    try {
      await ze.post(`${this.BACKEND_URL}/api/analytics/lead-generated`, {
        companyName: i,
        companyId: l,
        ...o,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (u) {
      console.error("Failed to track lead generation:", u);
    }
  }
  // Get lead analytics
  static async getLeadAnalytics(i) {
    try {
      return (await ze.get(`${this.BACKEND_URL}/api/analytics/leads/${i}`)).data;
    } catch (l) {
      return console.error("Failed to get lead analytics:", l), {
        totalLeads: 0,
        newLeads: 0,
        contactedLeads: 0,
        convertedLeads: 0,
        lostLeads: 0,
        conversionRate: 0,
        averageResponseTime: 0,
        leadSources: {},
        monthlyLeads: []
      };
    }
  }
}
function RE({ message: n, timestamp: i, companyTheme: l }) {
  return /* @__PURE__ */ C.jsxs("div", { className: "flex gap-3 max-w-[98%] mx-auto px-4 py-6 flex-row-reverse", children: [
    /* @__PURE__ */ C.jsx(
      "div",
      {
        className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white",
        style: { backgroundColor: l?.primaryColor },
        children: /* @__PURE__ */ C.jsx(Jg, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ C.jsxs("div", { className: "flex-1 space-y-2 text-right", children: [
      /* @__PURE__ */ C.jsx(
        "div",
        {
          className: "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed text-white rounded-br-md",
          style: { backgroundColor: l?.primaryColor },
          children: /* @__PURE__ */ C.jsx(Gy, { content: n })
        }
      ),
      i && /* @__PURE__ */ C.jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400 px-2 text-right", children: i })
    ] })
  ] });
}
function NE({
  message: n,
  messageIndex: i,
  liked: l,
  timestamp: o,
  onStreamingChange: u,
  skipStreaming: c,
  companyTheme: d,
  isLastAiMessage: p,
  companyName: g,
  companyId: m,
  logoUrl: h,
  onRatingChange: v,
  onStreamingComplete: w
}) {
  const [x, D] = ue.useState(""), [R, j] = ue.useState(!1), [I, ee] = ue.useState(!1), [P, J] = ue.useState(!1), [W, U] = ue.useState(""), [ae, X] = ue.useState(!1), [ce, ge] = ue.useState(!1), re = async (Y) => {
    const M = Y.split(" ");
    let G = "";
    j(!0), u?.(!0), D("");
    for (let Q = 0; Q < M.length; Q++)
      G += M[Q] + " ", D(G.trim()), Q === M.length - 1 && (j(!1), u?.(!1), w?.(i)), await new Promise((Te) => setTimeout(Te, 100));
  };
  ue.useEffect(() => {
    ee(!0);
  }, []), ue.useEffect(() => {
    I && p && !c ? setTimeout(() => {
      re(n);
    }, 100) : !c && !I && p ? (j(!0), u?.(!0), D("")) : (j(!1), u?.(!1), D(""));
  }, [n, c, I, p]);
  const te = async (Y) => {
    if (g)
      try {
        Y === -1 ? J(!0) : await yn.trackRating(
          g,
          m || "unknown",
          Y,
          n,
          "ai",
          // Assuming AI response for now
          void 0,
          void 0,
          0.8
          // Default confidence
        );
      } catch (M) {
        console.error("Failed to submit rating:", M);
      }
  }, oe = async () => {
    if (g) {
      X(!0);
      try {
        await yn.trackRating(
          g,
          m || "unknown",
          -1,
          // Negative rating
          n,
          "ai",
          // Assuming AI response for now
          W,
          void 0,
          0.8
          // Default confidence
        ), J(!1), U("");
      } catch (Y) {
        console.error("Failed to submit feedback:", Y);
      } finally {
        X(!1);
      }
    }
  }, ie = async () => {
    try {
      await navigator.clipboard.writeText(n), ge(!0), setTimeout(() => ge(!1), 2e3);
    } catch (Y) {
      console.error("Failed to copy message:", Y);
    }
  };
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsxs("div", { className: "flex gap-3 max-w-[98%] mx-auto px-4 py-6 flex-row", children: [
      /* @__PURE__ */ C.jsx(
        "div",
        {
          className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400",
          style: { backgroundColor: d?.backgroundColor },
          children: h ? /* @__PURE__ */ C.jsx("img", { src: h, alt: "Company Logo", className: "w-full h-full rounded-full" }) : /* @__PURE__ */ C.jsx(Kg, { className: "w-4 h-4" })
        }
      ),
      I && /* @__PURE__ */ C.jsxs("div", { className: "flex-1 space-y-2 text-left", children: [
        /* @__PURE__ */ C.jsx(
          "div",
          {
            className: "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed text-gray-900 dark:text-gray-100 rounded-bl-md",
            style: { backgroundColor: d?.backgroundColor },
            children: /* @__PURE__ */ C.jsx(
              Gy,
              {
                content: R && !c && p ? x : n
              }
            )
          }
        ),
        !R && /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
          i !== 0 && /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
            /* @__PURE__ */ C.jsx(
              "button",
              {
                onClick: () => {
                  console.log("Current liked status:", l);
                  const Y = l !== "like" ? "like" : null;
                  console.log("New rating:", Y), v?.(Y), te(Y === "like" ? 1 : 0);
                },
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Like this response",
                children: /* @__PURE__ */ C.jsx(Cx, { className: Pa("w-3 h-3 text-gray-500 hover:text-green-500", l === "like" ? "text-green-500" : "text-gray-500") })
              }
            ),
            /* @__PURE__ */ C.jsx(
              "button",
              {
                onClick: () => {
                  console.log("Current liked status:", l);
                  const Y = l !== "dislike" ? "dislike" : null;
                  console.log("New rating:", Y), v?.(Y), te(Y === "dislike" ? -1 : 0);
                },
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Dislike this response",
                children: /* @__PURE__ */ C.jsx(Tx, { className: Pa("w-3 h-3 text-gray-500 hover:text-red-500", l === "dislike" ? "text-red-500" : "text-gray-500") })
              }
            ),
            /* @__PURE__ */ C.jsx(
              "button",
              {
                onClick: ie,
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Copy message",
                children: /* @__PURE__ */ C.jsx(lx, { className: "w-3 h-3 text-gray-500 hover:text-blue-500" })
              }
            )
          ] }),
          ce && /* @__PURE__ */ C.jsx("span", { className: "text-xs text-green-500 ml-1", children: "Copied!" }),
          o && /* @__PURE__ */ C.jsx(
            "div",
            {
              className: "text-xs text-gray-500 dark:text-gray-400 px-2 text-right",
              children: o
            }
          )
        ] })
      ] })
    ] }),
    P && /* @__PURE__ */ C.jsx("div", { className: "fixed inset-0 bg-gray-900/75 dark:bg-black/75 flex items-center justify-center z-50", children: /* @__PURE__ */ C.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ C.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: "Help us improve" }),
        /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: () => J(!1),
            className: "p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
            children: /* @__PURE__ */ C.jsx(Wg, { className: "w-5 h-5 text-gray-500" })
          }
        )
      ] }),
      /* @__PURE__ */ C.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "What could we have done better? (Optional)" }),
      /* @__PURE__ */ C.jsx(
        "textarea",
        {
          value: W,
          onChange: (Y) => U(Y.target.value),
          placeholder: "Your feedback helps us improve...",
          className: "w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100",
          rows: 3
        }
      ),
      /* @__PURE__ */ C.jsxs("div", { className: "flex gap-2 mt-4", children: [
        /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: () => J(!1),
            className: "flex-1 px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: oe,
            disabled: ae,
            className: "flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: ae ? "Submitting..." : "Submit Feedback"
          }
        )
      ] })
    ] }) })
  ] });
}
function ME({ message: n, messageIndex: i, liked: l, isUser: o, timestamp: u, onStreamingChange: c, skipStreaming: d, companyTheme: p, isLastAiMessage: g, companyName: m, companyId: h, logoUrl: v, onRatingChange: w, onStreamingComplete: x }) {
  return o ? /* @__PURE__ */ C.jsx(
    RE,
    {
      message: n,
      timestamp: u,
      companyTheme: p
    }
  ) : /* @__PURE__ */ C.jsx(
    NE,
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
      companyId: h,
      logoUrl: v,
      onRatingChange: w,
      onStreamingComplete: x
    }
  );
}
function OE({ companyTheme: n, logoUrl: i }) {
  return /* @__PURE__ */ C.jsxs("div", { className: "flex gap-3 max-w-4xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ C.jsx(
      "div",
      {
        className: "flex-shrink-0 w-8 h-8 rounded-full text-gray-600 dark:text-gray-400 flex items-center justify-center",
        style: { backgroundColor: n?.backgroundColor || "#f3f4f6" },
        children: i ? /* @__PURE__ */ C.jsx("img", { src: i, alt: "Company Logo", className: "w-full h-full rounded-full" }) : /* @__PURE__ */ C.jsx(Kg, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ C.jsx("div", { className: "flex-1", children: /* @__PURE__ */ C.jsx("div", { className: "inline-block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md", children: /* @__PURE__ */ C.jsxs("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ C.jsx("div", { className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ C.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ C.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.2s" }
        }
      )
    ] }) }) })
  ] });
}
function hg(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
function _E(...n) {
  return (i) => {
    let l = !1;
    const o = n.map((u) => {
      const c = hg(u, i);
      return !l && typeof c == "function" && (l = !0), c;
    });
    if (l)
      return () => {
        for (let u = 0; u < o.length; u++) {
          const c = o[u];
          typeof c == "function" ? c() : hg(n[u], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function IE(n) {
  const i = /* @__PURE__ */ LE(n), l = ue.forwardRef((o, u) => {
    const { children: c, ...d } = o, p = ue.Children.toArray(c), g = p.find(qE);
    if (g) {
      const m = g.props.children, h = p.map((v) => v === g ? ue.Children.count(m) > 1 ? ue.Children.only(null) : ue.isValidElement(m) ? m.props.children : null : v);
      return /* @__PURE__ */ C.jsx(i, { ...d, ref: u, children: ue.isValidElement(m) ? ue.cloneElement(m, void 0, h) : null });
    }
    return /* @__PURE__ */ C.jsx(i, { ...d, ref: u, children: c });
  });
  return l.displayName = `${n}.Slot`, l;
}
var UE = /* @__PURE__ */ IE("Slot");
// @__NO_SIDE_EFFECTS__
function LE(n) {
  const i = ue.forwardRef((l, o) => {
    const { children: u, ...c } = l;
    if (ue.isValidElement(u)) {
      const d = HE(u), p = BE(c, u.props);
      return u.type !== ue.Fragment && (p.ref = o ? _E(o, d) : d), ue.cloneElement(u, p);
    }
    return ue.Children.count(u) > 1 ? ue.Children.only(null) : null;
  });
  return i.displayName = `${n}.SlotClone`, i;
}
var jE = Symbol("radix.slottable");
function qE(n) {
  return ue.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === jE;
}
function BE(n, i) {
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
function HE(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning;
  return l ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, l = i && "isReactWarning" in i && i.isReactWarning, l ? n.props.ref : n.props.ref || n.ref);
}
const gg = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, yg = ey, VE = (n, i) => (l) => {
  var o;
  if (i?.variants == null) return yg(n, l?.class, l?.className);
  const { variants: u, defaultVariants: c } = i, d = Object.keys(u).map((m) => {
    const h = l?.[m], v = c?.[m];
    if (h === null) return null;
    const w = gg(h) || gg(v);
    return u[m][w];
  }), p = l && Object.entries(l).reduce((m, h) => {
    let [v, w] = h;
    return w === void 0 || (m[v] = w), m;
  }, {}), g = i == null || (o = i.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((m, h) => {
    let { class: v, className: w, ...x } = h;
    return Object.entries(x).every((D) => {
      let [R, j] = D;
      return Array.isArray(j) ? j.includes({
        ...c,
        ...p
      }[R]) : {
        ...c,
        ...p
      }[R] === j;
    }) ? [
      ...m,
      v,
      w
    ] : m;
  }, []);
  return yg(n, d, g, l?.class, l?.className);
}, QE = VE(
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
function Jr({
  className: n,
  variant: i,
  size: l,
  asChild: o = !1,
  ...u
}) {
  const c = o ? UE : "button";
  return /* @__PURE__ */ C.jsx(
    c,
    {
      "data-slot": "button",
      className: Pa(QE({ variant: i, size: l, className: n })),
      ...u
    }
  );
}
function FE({ className: n, ...i }) {
  return /* @__PURE__ */ C.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: Pa(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n
      ),
      ...i
    }
  );
}
function PE({
  onSendMessage: n,
  isLoading: i = !1,
  placeholder: l = "Type your message...",
  companyTheme: o,
  verifiedPlan: u,
  isLeadCollection: c = !1
}) {
  const [d, p] = ue.useState(""), g = (w) => {
    w.preventDefault(), d.trim() && !i && (n(d.trim()), p(""));
  }, m = (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), g(w));
  }, h = o?.primaryColor ? Yr(o.primaryColor, 20) : void 0, v = c ? "Please provide your contact information (name, email, phone)..." : l;
  return /* @__PURE__ */ C.jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900", children: /* @__PURE__ */ C.jsxs("div", { className: "max-w-4xl mx-auto p-4", children: [
    /* @__PURE__ */ C.jsxs("form", { onSubmit: g, className: "relative", children: [
      /* @__PURE__ */ C.jsx(
        FE,
        {
          value: d,
          onChange: (w) => p(w.target.value),
          onKeyDown: m,
          placeholder: v,
          disabled: i,
          className: Pa(
            "min-h-[60px] max-h-[200px] resize-none pr-12 py-3",
            "border-gray-300 dark:border-gray-600",
            "bg-white dark:bg-gray-800",
            "text-gray-900 dark:text-gray-100",
            "placeholder:text-gray-500 dark:placeholder:text-gray-400",
            "focus:ring-2 focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          ),
          onFocus: (w) => {
            o?.primaryColor && (w.target.style.boxShadow = `0 0 0 2px ${o.primaryColor}`);
          },
          onBlur: (w) => {
            w.target.style.boxShadow = "";
          },
          rows: 1
        }
      ),
      /* @__PURE__ */ C.jsxs(
        Jr,
        {
          type: "submit",
          size: "sm",
          disabled: !d.trim() || i,
          className: Pa(
            "absolute right-1 bottom-2 h-8 w-8 p-0",
            "disabled:bg-gray-300 dark:disabled:bg-gray-600",
            "transition-all duration-200 ease-in-out",
            "hover:scale-105 focus:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-offset-2"
          ),
          style: {
            backgroundColor: o?.primaryColor,
            "--hover-bg-color": h
          },
          onMouseEnter: (w) => {
            h && (w.currentTarget.style.backgroundColor = h);
          },
          onMouseLeave: (w) => {
            o?.primaryColor && (w.currentTarget.style.backgroundColor = o.primaryColor);
          },
          onFocus: (w) => {
            h && (w.currentTarget.style.backgroundColor = h);
          },
          onBlur: (w) => {
            o?.primaryColor && (w.currentTarget.style.backgroundColor = o.primaryColor);
          },
          children: [
            i ? /* @__PURE__ */ C.jsx(Zg, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ C.jsx(Sx, { className: "h-4 w-4 text-white" }),
            /* @__PURE__ */ C.jsx("span", { className: "sr-only", children: "Send message" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ C.jsx("div", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400 text-center", children: "Press Enter to send, Shift + Enter for new line" }),
    u === "free" && /* @__PURE__ */ C.jsxs("div", { className: "mt-1 text-xs text-gray-400 dark:text-gray-500 text-center", children: [
      "Powered by",
      " ",
      /* @__PURE__ */ C.jsx(
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
const Eo = dn.forwardRef(
  ({ className: n, type: i, ...l }, o) => /* @__PURE__ */ C.jsx(
    "input",
    {
      type: i,
      className: `flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm ring-offset-white dark:ring-offset-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${n}`,
      ref: o,
      ...l
    }
  )
);
Eo.displayName = "Input";
const Co = dn.forwardRef(
  ({ className: n, ...i }, l) => /* @__PURE__ */ C.jsx(
    "label",
    {
      className: `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300 ${n}`,
      ref: l,
      ...i
    }
  )
);
Co.displayName = "Label";
const Yy = dn.forwardRef(({ className: n, ...i }, l) => /* @__PURE__ */ C.jsx(
  "div",
  {
    ref: l,
    className: `rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm ${n}`,
    ...i
  }
));
Yy.displayName = "Card";
const Ky = dn.forwardRef(({ className: n, ...i }, l) => /* @__PURE__ */ C.jsx("div", { ref: l, className: `flex flex-col space-y-1.5 p-6 ${n}`, ...i }));
Ky.displayName = "CardHeader";
const Xy = dn.forwardRef(({ className: n, ...i }, l) => /* @__PURE__ */ C.jsx(
  "h3",
  {
    ref: l,
    className: `text-2xl font-semibold leading-none tracking-tight ${n}`,
    ...i
  }
));
Xy.displayName = "CardTitle";
const GE = dn.forwardRef(({ className: n, ...i }, l) => /* @__PURE__ */ C.jsx(
  "p",
  {
    ref: l,
    className: `text-sm text-gray-500 dark:text-gray-400 ${n}`,
    ...i
  }
));
GE.displayName = "CardDescription";
const Zy = dn.forwardRef(({ className: n, ...i }, l) => /* @__PURE__ */ C.jsx("div", { ref: l, className: `p-6 pt-0 ${n}`, ...i }));
Zy.displayName = "CardContent";
const YE = dn.forwardRef(({ className: n, ...i }, l) => /* @__PURE__ */ C.jsx("div", { ref: l, className: `flex items-center p-6 pt-0 ${n}`, ...i }));
YE.displayName = "CardFooter";
function KE({
  onSubmit: n,
  onSkip: i,
  isSubmitting: l,
  error: o,
  defaultTheme: u = "light",
  companyTheme: c
}) {
  const [d, p] = ue.useState({
    name: "",
    email: "",
    phone: ""
  }), g = (v) => {
    v.preventDefault(), n(d);
  }, m = (v, w) => {
    p((x) => ({
      ...x,
      [v]: w
    }));
  }, h = d.email || d.phone;
  return /* @__PURE__ */ C.jsxs(Yy, { className: `w-full max-w-md mx-auto ${u === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`, children: [
    /* @__PURE__ */ C.jsxs(Ky, { className: "pb-4", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ C.jsx(Xy, { className: `text-lg font-semibold ${u === "dark" ? "text-gray-100" : "text-gray-900"}`, children: "Contact Information" }),
        /* @__PURE__ */ C.jsx(
          Jr,
          {
            variant: "ghost",
            size: "sm",
            onClick: i,
            disabled: l,
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ C.jsx(Wg, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ C.jsx("p", { className: `text-sm ${u === "dark" ? "text-gray-400" : "text-gray-600"}`, children: "Please share your contact information so we can provide you with more personalized assistance." })
    ] }),
    /* @__PURE__ */ C.jsx(Zy, { children: /* @__PURE__ */ C.jsxs("form", { onSubmit: g, className: "space-y-4", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ C.jsxs(Co, { htmlFor: "name", className: `text-sm font-medium ${u === "dark" ? "text-gray-300" : "text-gray-700"}`, children: [
          /* @__PURE__ */ C.jsx(Jg, { className: "inline h-4 w-4 mr-2" }),
          "Name (Optional)"
        ] }),
        /* @__PURE__ */ C.jsx(
          Eo,
          {
            id: "name",
            type: "text",
            placeholder: "Your name",
            value: d.name || "",
            onChange: (v) => m("name", v.target.value),
            disabled: l,
            className: `${u === "dark" ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300"}`
          }
        )
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ C.jsxs(Co, { htmlFor: "email", className: `text-sm font-medium ${u === "dark" ? "text-gray-300" : "text-gray-700"}`, children: [
          /* @__PURE__ */ C.jsx(fx, { className: "inline h-4 w-4 mr-2" }),
          "Email Address (Recommended)"
        ] }),
        /* @__PURE__ */ C.jsx(
          Eo,
          {
            id: "email",
            type: "email",
            placeholder: "your.email@example.com",
            value: d.email || "",
            onChange: (v) => m("email", v.target.value),
            disabled: l,
            className: `${u === "dark" ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300"}`
          }
        )
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ C.jsxs(Co, { htmlFor: "phone", className: `text-sm font-medium ${u === "dark" ? "text-gray-300" : "text-gray-700"}`, children: [
          /* @__PURE__ */ C.jsx(bx, { className: "inline h-4 w-4 mr-2" }),
          "Phone Number (Optional)"
        ] }),
        /* @__PURE__ */ C.jsx(
          Eo,
          {
            id: "phone",
            type: "tel",
            placeholder: "(555) 123-4567",
            value: d.phone || "",
            onChange: (v) => m("phone", v.target.value),
            disabled: l,
            className: `${u === "dark" ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300"}`
          }
        )
      ] }),
      o && /* @__PURE__ */ C.jsx("div", { className: "text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-md", children: o }),
      /* @__PURE__ */ C.jsx(
        Jr,
        {
          type: "submit",
          disabled: !h || l,
          className: "w-full text-white transition-all duration-200 ease-in-out hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
          style: {
            backgroundColor: c?.primaryColor || "#007bff",
            "--hover-bg-color": c?.primaryColor ? Yr(c.primaryColor, 20) : void 0
          },
          onMouseEnter: (v) => {
            c?.primaryColor && (v.currentTarget.style.backgroundColor = Yr(c.primaryColor, 20));
          },
          onMouseLeave: (v) => {
            c?.primaryColor && (v.currentTarget.style.backgroundColor = c.primaryColor);
          },
          onFocus: (v) => {
            c?.primaryColor && (v.currentTarget.style.backgroundColor = Yr(c.primaryColor, 20));
          },
          onBlur: (v) => {
            c?.primaryColor && (v.currentTarget.style.backgroundColor = c.primaryColor);
          },
          children: l ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
            /* @__PURE__ */ C.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" }),
            "Submitting..."
          ] }) : "Submit Contact Information"
        }
      ),
      /* @__PURE__ */ C.jsx(
        Jr,
        {
          type: "button",
          variant: "outline",
          onClick: i,
          disabled: l,
          className: `w-full hover:scale-105 ${u === "dark" ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-600 hover:bg-gray-50"}`,
          children: "Skip for now"
        }
      )
    ] }) })
  ] });
}
const XE = {
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
    heroTitle: "Your 24/7 AI-Powered Web Assistant & Customer Intelligence Platform",
    heroSubtitle: "Answer up to 80% of patient and customer questions automatically and reduce incoming calls and messages.",
    viewDemo: "View Demo",
    featuresTitle: "Why Choose Qurius AI?",
    featuresSubtitle: "Powerful features designed to enhance your customer support experience",
    feature1Title: "Intelligent Knowledge Management",
    feature1Description: "AI-powered semantic search, automatic FAQ generation, and intelligent content crawling that learns and adapts to your business needs.",
    feature2Title: "Advanced Analytics & Insights",
    feature2Description: "Comprehensive business intelligence with real-time analytics, customer behavior tracking, and actionable insights to optimize your customer experience.",
    feature3Title: "24/7 Personalized Assistance",
    feature3Description: "Multi-language support with automatic language detection, personalized responses, and seamless AI fallback for every customer interaction.",
    pricingTitle: "Simple, Transparent Pricing",
    pricingSubtitle: "Choose the plan that fits your business needs",
    contactSales: "Contact Sales",
    ctaTitle: "Ready to Transform Your Customer Experience?",
    ctaSubtitle: "Join thousands of businesses already using Qurius AI to provide intelligent, personalized support and gain valuable customer insights.",
    startFreeTrial: "Start Free Trial",
    emailPlaceholder: "Enter your email",
    getUpdates: "Get Updates",
    footerDescription: "Transform your website with intelligent AI-powered customer intelligence and analytics.",
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
}, ZE = {
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
    welcomeWithCompany: "¡Hola! Soy tu asistente {companyName}. ¿Cómo puedo ayudarte hoy?",
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
    heroTitle: "Tu Asistente Web con IA 24/7 y Plataforma de Inteligencia de Clientes",
    heroSubtitle: "Transforma tu sitio web en una experiencia inteligente y personalizada con analíticas avanzadas, soporte multiidioma y gestión automatizada de conocimiento que funciona las 24 horas.",
    viewDemo: "Ver Demo",
    featuresTitle: "¿Por qué elegir Qurius AI?",
    featuresSubtitle: "Características poderosas diseñadas para mejorar tu experiencia de soporte al cliente",
    feature1Title: "Gestión Inteligente del Conocimiento",
    feature1Description: "Búsqueda semántica con IA, generación automática de FAQs y crawling inteligente de contenido que aprende y se adapta a las necesidades de tu negocio.",
    feature2Title: "Analíticas Avanzadas e Insights",
    feature2Description: "Inteligencia empresarial integral con analíticas en tiempo real, seguimiento del comportamiento del cliente e insights accionables para optimizar la experiencia del cliente.",
    feature3Title: "Asistencia Personalizada 24/7",
    feature3Description: "Soporte multiidioma con detección automática de idioma, respuestas personalizadas y transición fluida a IA para cada interacción del cliente.",
    pricingTitle: "Precios Simples y Transparentes",
    pricingSubtitle: "Elige el plan que se adapte a las necesidades de tu negocio",
    contactSales: "Contactar Ventas",
    ctaTitle: "¿Listo para Transformar la Experiencia de tus Clientes?",
    ctaSubtitle: "Únete a miles de empresas que ya usan Qurius AI para proporcionar soporte inteligente y personalizado y obtener valiosos insights de clientes.",
    startFreeTrial: "Comenzar Prueba Gratuita",
    emailPlaceholder: "Ingresa tu email",
    getUpdates: "Obtener Actualizaciones",
    footerDescription: "Transforma tu sitio web con inteligencia de clientes e analíticas impulsadas por IA.",
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
}, JE = {
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
    growingTeamDescription: "Notre équipe diversifiée rassemble l'expertise de l'apprentage automatique, du traitement du langage naturel, de l'ingénierie logicielle et de la conception d'expérience client.",
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
}, WE = {
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
}, $E = {
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
}, eC = {
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
    quriusVisionDescription: "Qurius AIは、顧客向けアプリケーションの構築経験と、中小企業がサポートで直面する課題についての理解から生まれました。",
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
    phoneSupport: "24/7 電話サポート",
    advancedAnalytics: "高度な分析",
    apiAccess: "API アクセス",
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
}, tC = {
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
}, nC = {
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
}, aC = {
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
}, iC = {
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
    emailSupport: "메일 지원",
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
}, bg = {
  en: XE,
  es: ZE,
  fr: JE,
  de: WE,
  zh: $E,
  ja: eC,
  pt: tC,
  it: nC,
  ru: aC,
  ko: iC
};
function rC(n, i) {
  const l = i.split(".");
  let o = bg[n];
  for (const u of l)
    if (o && typeof o == "object" && u in o)
      o = o[u];
    else {
      o = bg.en;
      for (const c of l)
        if (o && typeof o == "object" && c in o)
          o = o[c];
        else
          return i;
    }
  return typeof o == "string" ? o : i;
}
function lC(n, i) {
  return n.replace(/\{(\w+)\}/g, (l, o) => i[o] ?? "");
}
const Jy = ue.createContext(void 0), Fc = {
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
}, wc = {
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
}, oC = () => {
  const n = navigator.language.toLowerCase();
  return n.startsWith("es") ? "es" : n.startsWith("fr") ? "fr" : n.startsWith("de") ? "de" : n.startsWith("zh") ? "zh" : n.startsWith("ja") ? "ja" : n.startsWith("pt") ? "pt" : n.startsWith("it") ? "it" : n.startsWith("ru") ? "ru" : n.startsWith("ko") ? "ko" : "en";
};
function sC({ children: n }) {
  const [i, l] = ue.useState(oC), [o, u] = ue.useState(!1);
  ue.useEffect(() => {
    const g = localStorage.getItem("qurius_language");
    g && Object.keys(Fc).includes(g) && l(g);
  }, []);
  const c = ue.useCallback((g) => {
    u(!0), l(g), localStorage.setItem("qurius_language", g), setTimeout(() => {
      u(!1);
    }, 300);
  }, []), d = ue.useCallback((g) => rC(i, g), [i]), p = ue.useMemo(() => ({
    currentLanguage: i,
    setLanguage: c,
    t: d,
    isLanguageChanging: o
  }), [i, c, d, o]);
  return /* @__PURE__ */ C.jsx(Jy.Provider, { value: p, children: n });
}
function Wy() {
  const n = ue.useContext(Jy);
  if (n === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return n;
}
function uC({ className: n = "", variant: i = "dropdown", companyName: l, companyId: o }) {
  const { currentLanguage: u, setLanguage: c, isLanguageChanging: d } = Wy(), [p, g] = ue.useState(!1), m = (h) => {
    c(h), g(!1), l && yn.trackLanguageChange(l, o || "", h);
  };
  return i === "buttons" ? /* @__PURE__ */ C.jsx("div", { className: `flex flex-wrap gap-1 ${n}`, children: Object.entries(Fc).map(([h, v]) => /* @__PURE__ */ C.jsxs(
    "button",
    {
      onClick: () => m(h),
      disabled: d,
      className: `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${u === h ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"} ${d ? "opacity-50 cursor-not-allowed" : ""}`,
      children: [
        /* @__PURE__ */ C.jsx("span", { className: "mr-2", children: wc[h] }),
        v
      ]
    },
    h
  )) }) : /* @__PURE__ */ C.jsxs("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ C.jsxs(
      "button",
      {
        onClick: () => g(!p),
        disabled: d,
        className: "flex items-center px-1 py-1 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        children: [
          /* @__PURE__ */ C.jsx(sx, { className: "h-4 w-4 mr-1" }),
          /* @__PURE__ */ C.jsx("span", { className: "mr-1", children: wc[u] }),
          /* @__PURE__ */ C.jsx(Xg, { className: `h-4 w-4 ml-1 transition-transform ${p ? "rotate-180" : ""}` })
        ]
      }
    ),
    p && /* @__PURE__ */ C.jsx("div", { className: "absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ C.jsx("div", { className: "py-1", children: Object.entries(Fc).map(([h, v]) => /* @__PURE__ */ C.jsxs(
      "button",
      {
        onClick: () => m(h),
        className: `w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${u === h ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-300"}`,
        children: [
          /* @__PURE__ */ C.jsx("span", { className: "mr-3", children: wc[h] }),
          v
        ]
      },
      h
    )) }) }),
    p && /* @__PURE__ */ C.jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => g(!1)
      }
    )
  ] });
}
class cC {
  static BACKEND_URL = "https://qurius-ai.onrender.com";
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
  static async getCompanyTheme(i, l, o) {
    try {
      const c = (await ze.get(`${this.BACKEND_URL}/api/companies/${i}/${l}/theme`, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.company, p = c?.theme?.primaryColor || "#3B82F6", g = c?.logo_url || "";
      return this.generateThemeFromPrimary(p, o, g);
    } catch (u) {
      return console.error("Error fetching company theme:", u), this.generateThemeFromPrimary("#3B82F6", o, "");
    }
  }
}
const fC = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_BACKEND_URL: "https://qurius-ai.onrender.com", VITE_JINA_API_KEY: "demo-jina-key", VITE_OPEN_ROUTER_API_KEY: "demo-openrouter-key", VITE_SUPABASE_ANON_KEY: "demo-key", VITE_SUPABASE_PROJECT_URL: "https://demo.supabase.co", VITE_SUPABASE_SERVICE_ROLE_KEY: "demo-service-key" };
function Yn(n, i = "") {
  const l = typeof process < "u" ? process.env?.[n] : void 0;
  return (typeof import.meta < "u" ? fC?.[n] : void 0) ?? l ?? i;
}
const dC = {
  projectUrl: Yn("VITE_SUPABASE_PROJECT_URL"),
  anonKey: Yn("VITE_SUPABASE_ANON_KEY"),
  serviceRoleKey: Yn("VITE_SUPABASE_SERVICE_ROLE_KEY")
}, pC = {
  apiUrl: Yn("VITE_OPEN_ROUTER_URL", "https://openrouter.ai/api/v1"),
  apiKey: Yn("VITE_OPEN_ROUTER_API_KEY"),
  sourceUrl: Yn("VITE_SOURCE_URL", "http://localhost:8081")
}, mC = {
  apiUrl: Yn("VITE_JINA_API_URL", "https://api.jina.ai/v1/embeddings"),
  apiKey: Yn("VITE_JINA_API_KEY")
}, df = {
  backendUrl: Yn("VITE_BACKEND_URL", "http://localhost:3000"),
  ...dC,
  ...pC,
  ...mC
}, hC = {
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
}, vg = "https://translation.googleapis.com/language/translate/v2", Sg = {
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
class xg {
  static apiKey = null;
  static apiKeyPromise = null;
  /**
   * Fetch API key from backend
   */
  static async fetchApiKey() {
    return this.apiKeyPromise ? this.apiKeyPromise : (this.apiKeyPromise = (async () => {
      try {
        console.log("🔑 Fetching API key from backend...");
        const l = (await ze.get(`${df.backendUrl}/api/translate/api-key`)).data.apiKey;
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
      return (await ze.post(`${vg}/detect?key=${l}`, {
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
      return console.warn("Google Translate API key not available, using fallback translations"), Sg[l][i] || i;
    try {
      return (await ze.post(`${vg}?key=${u}`, {
        q: i,
        target: hC[l],
        source: o || "en"
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.data.translations[0].translatedText;
    } catch (c) {
      return console.error("Error translating text:", c), c.response?.status === 403 ? console.warn("⚠️ Google Translate API access forbidden, using fallback translations") : c.response?.status === 400 ? console.warn("⚠️ Bad request to Google Translate API, using fallback translations") : c.response?.status === 429 && console.warn("⚠️ Google Translate API rate limit exceeded, using fallback translations"), Sg[l][i] || i;
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
class gC {
  BACKEND_URL = df.backendUrl;
  // Submit lead information to backend
  async submitLead(i) {
    try {
      console.log("📝 Submitting lead data:", i);
      const l = await ze.post(`${this.BACKEND_URL}/api/leads/store`, {
        companyId: i.companyId,
        companyName: i.companyName,
        name: i.name || null,
        email: i.email || null,
        phone: i.phone || null,
        conversationContext: i.conversationContext || null,
        sessionId: i.sessionId || null,
        userQuestion: i.userQuestion || null,
        aiResponse: i.aiResponse || null
      });
      return console.log("✅ Lead submitted successfully:", l.data), l.data.success ? {
        success: !0,
        leadId: l.data.leadId
      } : {
        success: !1,
        error: l.data.error || "Failed to submit lead"
      };
    } catch (l) {
      return console.error("❌ Error submitting lead:", l), {
        success: !1,
        error: l.response?.data?.error || l.message || "Failed to submit lead"
      };
    }
  }
  // Extract contact information from user response
  extractContactInfo(i) {
    const l = {}, o = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, u = i.match(o);
    u && u.length > 0 && (l.email = u[0]);
    const c = /(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/g, d = i.match(c);
    d && d.length > 0 && (l.phone = d[0].replace(/[-.\s()]/g, ""));
    const g = i.split(/\s+/).filter(
      (m) => !o.test(m) && !c.test(m) && m.length > 1 && /^[A-Za-z]+$/.test(m)
    );
    return g.length > 0 && (l.name = g.slice(0, 3).join(" ")), l;
  }
  // Validate lead information
  validateLeadInfo(i) {
    const l = [];
    return !i.email && !i.phone && l.push("Please provide either an email address or phone number"), i.email && (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(i.email) || l.push("Please provide a valid email address")), i.phone && (/^\+?[\d\s\-\(\)]{10,}$/.test(i.phone) || l.push("Please provide a valid phone number")), {
      isValid: l.length === 0,
      errors: l
    };
  }
}
const Tc = new gC();
class yC {
  BACKEND_URL = df.backendUrl;
  // Get FAQ answer using semantic search
  async getAnswer(i, l, o) {
    try {
      console.log("🔍 FAQ Search - Context messages:", l?.length || 0);
      const u = await ze.post(`${this.BACKEND_URL}/api/faqs/search`, {
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
            messagesLeft: c.messagesLeft,
            shouldRequestLead: c.shouldRequestLead || !1
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
        messagesLeft: u.data.messagesLeft,
        shouldRequestLead: u.data.shouldRequestLead || !1
      } : null;
    } catch (u) {
      return console.error("Error searching FAQs:", u), null;
    }
  }
  async getFAQs(i) {
    try {
      const l = await ze.get(`${this.BACKEND_URL}/api/companies/${i}/faqs`);
      return l.data && l.data.faqs ? l.data.faqs : Array.isArray(l.data) ? l.data : (console.warn("Unexpected FAQ response structure:", l.data), []);
    } catch (l) {
      throw console.error("Error fetching FAQs:", l), l;
    }
  }
  async getFAQsWithPagination(i, l) {
    try {
      const o = new URLSearchParams();
      return l?.limit && o.append("limit", l.limit.toString()), l?.offset && o.append("offset", l.offset.toString()), l?.source && o.append("source", l.source), l?.orderBy && o.append("orderBy", l.orderBy), l?.includeSummary && o.append("includeSummary", l.includeSummary.toString()), (await ze.get(`${this.BACKEND_URL}/api/companies/${i}/faqs?${o}`)).data;
    } catch (o) {
      throw console.error("Error fetching FAQs with pagination:", o), o;
    }
  }
  async importFAQs(i, l, o) {
    try {
      return (await ze.post(`${this.BACKEND_URL}/api/companies/import-faqs`, { companyId: i, companyName: l, faqs: o })).data;
    } catch (u) {
      throw console.error("Error importing FAQs:", u), u;
    }
  }
  async updateFAQ(i, l, o, u, c) {
    try {
      return (await ze.put(`${this.BACKEND_URL}/api/companies/update-faqs`, {
        companyId: i,
        companyName: l,
        faqId: o,
        question: u,
        answer: c
      })).data;
    } catch (d) {
      throw console.error("Error updating FAQ:", d), d;
    }
  }
  async deleteFAQ(i) {
    try {
      await ze.delete(`${this.BACKEND_URL}/api/faqs/${i}`);
    } catch (l) {
      throw console.error("Error deleting FAQ:", l), l;
    }
  }
}
const bC = new yC();
function vC({
  defaultTheme: n,
  toggleTheme: i,
  isMinimized: l,
  onToggleMinimize: o,
  isThemeChanging: u,
  resetKey: c = 0,
  // Add resetKey prop with default value
  companyData: d
}) {
  const p = ue.useRef(null), g = ue.useRef(null), { t: m, currentLanguage: h } = Wy(), [v, w] = ue.useState(null), x = n === "dark", [D, R] = ue.useState(!0), [j, I] = ue.useState(!1), [ee, P] = ue.useState(!1), { name: J, plan: W, logo_url: U, id: ae } = d || {}, X = () => lC(m("chat.welcomeWithCompany"), { companyName: J || "AI" }), [ce, ge] = ue.useState([]), [re, te] = ue.useState(!1), [oe, ie] = ue.useState(!1), [Y, M] = ue.useState(!1), [G, Q] = ue.useState(!0), [Te, b] = ue.useState(0), [q, $] = ue.useState({
    isCollecting: !1,
    leadInfo: {},
    isSubmitting: !1,
    error: void 0
  }), A = () => {
    g.current && Te > 0 && (g.current.scrollTop = Te);
  }, ne = () => {
    g.current && (g.current.scrollTop = g.current.scrollHeight);
  }, Ae = () => {
    if (g.current) {
      const { scrollTop: le, scrollHeight: Ue, clientHeight: me } = g.current, Le = Ue - le - me < 10;
      Q(Le), Y && !Le && ie(!0), Le && ie(!1);
    }
  }, se = (le) => {
    M(le), le && ie(!1);
  }, De = (le, Ue) => {
    ge((me) => me.map(
      (Le, qe) => qe === le ? { ...Le, liked: Ue } : Le
    ));
  };
  ue.useEffect(() => {
    const le = {
      content: X(),
      isUser: !1,
      liked: null,
      isMessageStreamed: !1,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    ge([le]), J && yn.trackLanguageChange(J, ae || "", h);
  }, [h]), ue.useEffect(() => {
    const le = {
      content: X(),
      isUser: !1,
      liked: null,
      isMessageStreamed: !1,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    ge([le]), console.log("🔄 Chat reset due to company change, resetKey:", c);
  }, [c]), ue.useEffect(() => {
    J ? (R(!0), console.log("🔄 Fetching company theme via service..."), cC.getCompanyTheme(J, ae || "", x).then((le) => {
      w(le), setTimeout(() => {
        R(!1), I(!0);
      }, 100);
    }).catch((le) => {
      console.error("Failed to load company theme:", le), setTimeout(() => {
        R(!1), I(!0);
      }, 100);
    })) : setTimeout(() => {
      R(!1), I(!0);
    }, 100);
  }, [J, x, d]), ue.useEffect(() => {
    J && yn.trackWidgetView(J, ae || "");
  }, [J]), ue.useEffect(() => {
    J && (l ? yn.trackWidgetClose(J, ae || "") : yn.trackWidgetOpen(J, ae || ""));
  }, [l, J]), ue.useEffect(() => {
    if (l)
      P(!1);
    else {
      P(!1);
      const le = setTimeout(() => {
        P(!0), setTimeout(() => {
          A();
        }, 100);
      }, 300);
      return () => clearTimeout(le);
    }
  }, [l]), ue.useEffect(() => {
    if (Y && !oe) {
      const le = setInterval(() => {
        ne();
      }, 50);
      return () => clearInterval(le);
    }
  }, [Y, oe]);
  const Me = (le, Ue) => {
    const me = le.slice(1).map((qe) => ({
      role: qe.isUser ? "user" : "assistant",
      content: qe.content
    })), Le = [
      ...me,
      {
        role: "user",
        content: Ue
      }
    ];
    return console.log("🔧 Built conversation with current message:", {
      historyLength: me.length,
      currentMessage: Ue.substring(0, 50) + "...",
      totalMessages: Le.length
    }), Le;
  }, tt = async (le) => {
    if (console.log("🚀 Starting message processing:", le), q.isCollecting) {
      console.log("📝 Processing lead collection input"), xa(le);
      return;
    }
    const Ue = {
      content: le,
      isUser: !0,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isMessageStreamed: !0
    };
    te(!0), ge((me) => [...me, Ue]), setTimeout(() => {
      ne();
    }, 0), J && yn.trackMessageSent(J, ae || "", le);
    try {
      console.log("🔄 Translating user input to English...");
      let me = le;
      try {
        me = await xg.translateToEnglish(le);
      } catch (zt) {
        console.warn("⚠️ Translation failed, using original input:", zt), me = le;
      }
      console.log("🤖 Getting FAQ answer...");
      const Le = Me(ce, me);
      console.log("📝 Conversation context:", Le.length, "messages");
      const qe = await bC.getAnswer(me, Le, d);
      if (qe) {
        if (qe.source === "limit_reached" || qe.limitReached) {
          console.log("⚠️ Message limit reached, showing limit message");
          const Aa = {
            content: qe.answer || `Message limit for ${J} reached for this month. Please contact customer support with any questions.`,
            isUser: !1,
            liked: null,
            isMessageStreamed: !1,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          };
          ge((Qi) => [...Qi, Aa]), J && yn.trackMessageReceived(J, ae || "", Aa.content, "limit_reached");
          return;
        }
        console.log("🔄 Translating response to user language...");
        let zt = qe.answer;
        try {
          zt = await xg.translateToUserLanguage(qe.answer, h);
        } catch (vn) {
          console.warn("⚠️ Response translation failed, using original:", vn), zt = qe.answer;
        }
        const Kn = {
          content: zt,
          isUser: !1,
          liked: null,
          isMessageStreamed: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        ge((vn) => [...vn, Kn]), J && yn.trackMessageReceived(J, ae || "", zt, qe.source), qe.messagesLeft !== void 0 && console.log(`📊 Messages remaining: ${qe.messagesLeft}`), qe.shouldRequestLead && (console.log("🎯 Lead collection requested by AI - will show after streaming completes"), $((vn) => ({
          ...vn,
          shouldRequestAfterStreaming: !0,
          error: void 0
        })));
      } else
        console.log("⚠️ No response found from server"), ge((zt) => [
          ...zt,
          {
            content: "Sorry, I don't know the answer to that. Please contact customer support at " + d?.contact_email + ".",
            isUser: !1,
            liked: null,
            isMessageStreamed: !1,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          }
        ]);
    } catch (me) {
      console.error("❌ Error in handleSendMessage:", me), console.error("❌ Error details:", {
        message: me instanceof Error ? me.message : String(me),
        stack: me instanceof Error ? me.stack : void 0,
        name: me instanceof Error ? me.name : "Unknown",
        response: me.response?.data,
        status: me.response?.status
      });
      let Le = "Sorry, something went wrong. Please try again.";
      me.response?.status === 401 ? Le = "Authentication error. Please refresh the page and try again." : me.response?.status === 429 ? Le = "Too many requests. Please wait a moment and try again." : me.response?.status === 500 ? Le = "Server error. Please try again later." : me.code === "NETWORK_ERROR" || me.code === "ECONNABORTED" ? Le = "Network error. Please check your connection and try again." : me.message?.includes("timeout") && (Le = "Request timed out. Please try again."), ge((qe) => [
        ...qe,
        {
          content: Le,
          isUser: !1,
          isMessageStreamed: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      console.log("🏁 Finishing message processing"), te(!1);
    }
  }, yt = (le) => {
    ie(!0), ge((Ue) => Ue.map(
      (me, Le) => Le === le ? { ...me, isMessageStreamed: !0 } : me
    )), q.shouldRequestAfterStreaming && setTimeout(() => {
      $((Ue) => ({
        ...Ue,
        isCollecting: !0,
        shouldRequestAfterStreaming: !1,
        // Reset the flag
        error: void 0
      }));
    }, 1500);
  }, xt = async (le) => {
    console.log("📝 Submitting lead information:", le), $((Ue) => ({
      ...Ue,
      isSubmitting: !0,
      error: void 0
    }));
    try {
      const Ue = ce.slice(-6).map((Le) => `${Le.isUser ? "User" : "AI"}: ${Le.content}`).join(`
`), me = await Tc.submitLead({
        companyId: ae || "",
        companyName: J || "",
        name: le.name,
        email: le.email,
        phone: le.phone,
        conversationContext: Ue,
        sessionId: "qurius-ai-session",
        // Use consistent session ID
        userQuestion: ce[ce.length - 2]?.content || "",
        // The question that triggered lead collection
        aiResponse: ce[ce.length - 1]?.content || ""
        // The AI response that preceded lead collection
      });
      if (me.success) {
        console.log("✅ Lead submitted successfully:", me.leadId);
        const Le = {
          content: "Thank you for providing your contact information! I'll continue helping you with any questions you have.",
          isUser: !1,
          liked: null,
          isMessageStreamed: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        ge((qe) => [...qe, Le]), $((qe) => ({
          ...qe,
          isCollecting: !1,
          isSubmitting: !1,
          leadInfo: {}
        }));
      } else
        throw new Error(me.error || "Failed to submit lead");
    } catch (Ue) {
      console.error("❌ Error submitting lead:", Ue), $((me) => ({
        ...me,
        isSubmitting: !1,
        error: Ue.message || "Failed to submit contact information. Please try again."
      }));
    }
  }, $t = () => {
    console.log("⏭️ User skipped lead collection");
    const le = {
      content: "No problem! I'll continue helping you with any questions you have.",
      isUser: !1,
      liked: null,
      isMessageStreamed: !1,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    ge((Ue) => [...Ue, le]), $((Ue) => ({
      ...Ue,
      isCollecting: !1,
      leadInfo: {}
    }));
  }, xa = (le) => {
    console.log("📝 Processing lead collection input:", le);
    const Ue = Tc.extractContactInfo(le), me = Tc.validateLeadInfo(Ue);
    if (me.isValid)
      xt(Ue);
    else {
      $((qe) => ({
        ...qe,
        error: me.errors.join(", ")
      }));
      const Le = {
        content: le,
        isUser: !0,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isMessageStreamed: !0
      };
      ge((qe) => [...qe, Le]);
    }
  }, Ht = v?.primaryColor ? Yr(v.primaryColor, 20) : void 0;
  return l ? /* @__PURE__ */ C.jsx(
    "div",
    {
      className: D && !j ? "animate-spin" : "animate-bounce",
      style: {
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 9999,
        maxWidth: "400px",
        maxHeight: "600px"
      },
      children: /* @__PURE__ */ C.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ C.jsx(
          "button",
          {
            onClick: o,
            className: "text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl",
            style: {
              backgroundColor: v?.primaryColor || "#007bff"
            },
            onMouseEnter: (le) => {
              Ht && (le.currentTarget.style.backgroundColor = Ht);
            },
            onMouseLeave: (le) => {
              le.currentTarget.style.backgroundColor = v?.primaryColor || "#007bff";
            },
            children: D && !j ? /* @__PURE__ */ C.jsx("div", { className: "w-7 h-7 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ C.jsx(Ch, { className: "h-7 w-7" })
          }
        ),
        W === "free" && /* @__PURE__ */ C.jsxs("div", { className: "absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg", children: [
            "Powered by",
            " ",
            /* @__PURE__ */ C.jsx(
              "a",
              {
                href: "https://qurius.app",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-300 hover:text-blue-200 underline pointer-events-auto",
                onClick: (le) => le.stopPropagation(),
                children: "Qurius AI"
              }
            )
          ] }),
          /* @__PURE__ */ C.jsx("div", { className: "absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" })
        ] })
      ] })
    }
  ) : ee ? /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: Pa(
        "border border-gray-200 dark:border-gray-700",
        "rounded-lg shadow-2xl flex flex-col overflow-hidden",
        "transition-all duration-300 ease-in-out",
        "relative",
        // Add relative positioning for spinner overlay
        "bg-white dark:bg-gray-900",
        // Add opacity transition for smooth appearance
        "transition-opacity duration-500 ease-in-out",
        "opacity-100",
        // Mobile-specific classes
        window.innerWidth <= 768 ? "rounded-none border-0" : ""
      ),
      style: {
        width: window.innerWidth > 768 ? "400px" : "100vw",
        height: window.innerWidth > 768 ? "600px" : "100vh",
        maxWidth: window.innerWidth > 768 ? "400px" : "100vw",
        maxHeight: window.innerWidth > 768 ? "600px" : "100vh",
        boxSizing: "border-box",
        position: "fixed",
        bottom: window.innerWidth > 768 ? "1rem" : "0",
        right: window.innerWidth > 768 ? "1rem" : "0",
        transform: (window.innerWidth > 768, "none"),
        zIndex: 9999,
        borderColor: v?.borderColor || "#E5E7EB",
        backgroundColor: v?.backgroundColor || "#FFFFFF"
      },
      children: [
        u && /* @__PURE__ */ C.jsx(
          "div",
          {
            className: "absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg",
            style: { backgroundColor: v?.backgroundColor + "CC" },
            children: /* @__PURE__ */ C.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ C.jsx(
                Zg,
                {
                  className: "w-12 h-12 animate-spin",
                  style: { color: v?.primaryColor }
                }
              ),
              /* @__PURE__ */ C.jsx(
                "p",
                {
                  className: "text-sm font-medium",
                  style: { color: v?.textColor },
                  children: "Updating theme..."
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-3", children: [
            U ? /* @__PURE__ */ C.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", children: /* @__PURE__ */ C.jsx("img", { src: U, alt: "Company Logo", className: "w-full h-full rounded-full" }) }) : (
              // Default logo
              /* @__PURE__ */ C.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", style: { backgroundColor: v?.primaryColor }, children: /* @__PURE__ */ C.jsx(Ch, { className: "w-4 h-4 text-white" }) })
            ),
            /* @__PURE__ */ C.jsxs("div", { children: [
              /* @__PURE__ */ C.jsxs("h3", { className: "font-semibold text-gray-900 dark:text-gray-100 text-sm", children: [
                J,
                " Assistant"
              ] }),
              /* @__PURE__ */ C.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Online now" })
            ] })
          ] }),
          /* @__PURE__ */ C.jsxs("div", { className: "flex justify-end gap-1", children: [
            W === "pro" && /* @__PURE__ */ C.jsx(
              uC,
              {
                variant: "dropdown",
                className: "scale-65",
                companyName: J,
                companyId: ae || ""
              }
            ),
            W !== "free" && /* @__PURE__ */ C.jsx(
              "button",
              {
                onClick: () => {
                  i(), J && yn.trackThemeChange(J, ae || "", n);
                },
                disabled: u,
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50",
                children: n === "dark" ? /* @__PURE__ */ C.jsx(Ax, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }) : /* @__PURE__ */ C.jsx(gx, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            ),
            /* @__PURE__ */ C.jsx(
              "button",
              {
                onClick: () => {
                  g.current && b(g.current.scrollTop), o?.();
                },
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
                children: /* @__PURE__ */ C.jsx(mx, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ C.jsxs(
          "div",
          {
            ref: g,
            className: "flex-1 overflow-y-auto bg-white dark:bg-gray-900",
            onScroll: Ae,
            children: [
              /* @__PURE__ */ C.jsxs("div", { className: "py-4 pb-8", children: [
                ce.map((le, Ue) => {
                  const me = !le.isUser && Ue === ce.length - 1;
                  return /* @__PURE__ */ C.jsx(
                    ME,
                    {
                      message: le.content,
                      messageIndex: Ue,
                      liked: le.liked,
                      isUser: le.isUser,
                      timestamp: le.timestamp,
                      onStreamingChange: le.isUser ? void 0 : se,
                      skipStreaming: le.isMessageStreamed === !0,
                      isLastAiMessage: me,
                      companyName: J,
                      companyId: ae || "",
                      logoUrl: U || void 0,
                      companyTheme: v || void 0,
                      onRatingChange: (Le) => De(Ue, Le),
                      onStreamingComplete: yt
                    },
                    `${Ue}-${le.content.substring(0, 20)}`
                  );
                }),
                re && /* @__PURE__ */ C.jsx(OE, { companyTheme: v, logoUrl: U || void 0 })
              ] }),
              /* @__PURE__ */ C.jsx("div", { ref: p, className: "h-2" })
            ]
          }
        ),
        !G && !Y && /* @__PURE__ */ C.jsx("div", { className: "absolute bottom-27 right-4 z-10", children: /* @__PURE__ */ C.jsxs(
          Jr,
          {
            onClick: ne,
            size: "sm",
            className: "h-10 w-10 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
            style: {
              backgroundColor: v?.primaryColor,
              "--hover-bg-color": Ht
            },
            onMouseEnter: (le) => {
              Ht && (le.currentTarget.style.backgroundColor = Ht);
            },
            onMouseLeave: (le) => {
              v?.primaryColor && (le.currentTarget.style.backgroundColor = v.primaryColor);
            },
            onFocus: (le) => {
              Ht && (le.currentTarget.style.backgroundColor = Ht);
            },
            onBlur: (le) => {
              v?.primaryColor && (le.currentTarget.style.backgroundColor = v.primaryColor);
            },
            children: [
              /* @__PURE__ */ C.jsx(Xg, { className: "h-4 w-4" }),
              /* @__PURE__ */ C.jsx("span", { className: "sr-only", children: "Scroll to bottom" })
            ]
          }
        ) }),
        q.isCollecting && /* @__PURE__ */ C.jsx("div", { className: "p-4 border-t border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ C.jsx(
          KE,
          {
            onSubmit: xt,
            onSkip: $t,
            isSubmitting: q.isSubmitting,
            error: q.error,
            defaultTheme: n,
            companyTheme: v
          }
        ) }),
        /* @__PURE__ */ C.jsx(
          PE,
          {
            onSendMessage: tt,
            isLoading: re,
            placeholder: `Ask ${J} anything...`,
            defaultTheme: n,
            companyTheme: v || void 0,
            verifiedPlan: W,
            isLeadCollection: q.isCollecting
          }
        )
      ]
    }
  ) : null;
}
const SC = 400, xC = 1300, Ha = {
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
}, $y = ue.createContext({
  colors: Ha.light,
  defaultTheme: "light",
  isDark: !1,
  setColorScheme: () => {
  },
  toggleTheme: () => {
  },
  isThemeChanging: !1
}), AC = ({ children: n, initialTheme: i }) => {
  const l = () => {
    if (i)
      return i;
    if (typeof window < "u") {
      const h = localStorage.getItem("theme");
      return h === "light" || h === "dark" ? h : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }, [o, u] = ue.useState(l() === "dark"), [c, d] = ue.useState(!1), p = (h) => {
    u(h === "dark"), typeof window < "u" && localStorage.setItem("theme", h);
  }, g = () => {
    const h = o ? "light" : "dark";
    d(!0), setTimeout(() => {
      p(h), setTimeout(() => {
        d(!1);
      }, xC);
    }, SC);
  };
  ue.useEffect(() => {
    const h = window.matchMedia("(prefers-color-scheme: dark)"), v = (w) => {
      !localStorage.getItem("theme") && !i && p(w.matches ? "dark" : "light");
    };
    return h.addEventListener("change", v), () => h.removeEventListener("change", v);
  }, [i]), ue.useEffect(() => {
    typeof window < "u" && (o ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), document.body.style.backgroundColor = o ? Ha.dark.containerBackground : Ha.light.containerBackground, document.body.style.color = o ? Ha.dark.text : Ha.light.text);
  }, [o]);
  const m = o ? Ha.dark : Ha.light;
  return /* @__PURE__ */ C.jsx($y.Provider, { value: {
    colors: m,
    defaultTheme: o ? "dark" : "light",
    isDark: o,
    setColorScheme: p,
    toggleTheme: g,
    isThemeChanging: c
  }, children: n });
}, wC = () => {
  const n = ue.useContext($y);
  if (!n)
    throw new Error("useTheme must be used within a ThemeProvider");
  return n;
};
let So = null;
const TC = async (n, i, l) => {
  try {
    return console.log("🔑 Validating widget key:", n, "for company with id:", i), (await ze.get(`${l}/api/validate-key`, {
      params: { key: n, companyId: i }
    })).data;
  } catch (o) {
    const u = o;
    return console.error("Key validation failed:", u.response?.data || u.message), { valid: !1, error: "Validation failed" };
  }
}, EC = async (n, i) => {
  try {
    return console.log("🏢 Fetching company data for ID:", n), (await ze.get(`${i}/api/companies/${n}`)).data;
  } catch (l) {
    const o = l;
    throw console.error("Failed to fetch company data:", o.response?.data || o.message), new Error("Failed to fetch company data");
  }
}, CC = (n, i) => (console.log("🔍 Verifying plan authenticity:", { scriptPlan: n, companyPlan: i }), n === "free" ? n : n === i ? (console.log("✅ Plan verification successful: plans match"), i) : (console.log("⚠️ Plan mismatch detected: using company plan as source of truth"), console.log("Script plan:", n, "Company plan:", i), i)), kC = async (n) => {
  const i = n.key, l = n.companyId, o = n.plan, u = "https://qurius-ai.onrender.com";
  let c = await TC(i, l, u);
  if (!c?.valid)
    return console.error("Widget key validation failed:", c.error), !1;
  try {
    const d = await EC(l, u);
    console.log("✅ Company data fetched successfully:", d);
    const p = CC(o, d.plan);
    return n.companyData = {
      ...d,
      plan: p
      // Use verified plan as single source of truth
    }, console.log("✅ Widget initialization completed successfully"), !0;
  } catch (d) {
    return console.error("❌ Failed to fetch company data:", d), !1;
  }
};
function DC(n, i) {
  So && So.unmount(), So = xv.createRoot(n), So.render(
    /* @__PURE__ */ C.jsx(dn.StrictMode, { children: /* @__PURE__ */ C.jsx(AC, { initialTheme: i.theme, children: /* @__PURE__ */ C.jsx(sC, { children: /* @__PURE__ */ C.jsx(zC, { config: i }) }) }) })
  );
}
function zC({ config: n }) {
  const { defaultTheme: i, toggleTheme: l, isThemeChanging: o } = wC(), [u, c] = dn.useState(!0), [d, p] = dn.useState(!1);
  if (dn.useEffect(() => {
    kC(n).then(p);
  }, [n]), !d)
    return null;
  const g = () => {
    const m = !u;
    c(m), console.log(m ? "Widget minimized, chat button should be visible" : "Widget expanded, chat button should be hidden");
  };
  return /* @__PURE__ */ C.jsx(
    vC,
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
const RC = {
  init: DC
};
typeof window < "u" && (window.QuriusChatWidget = RC);
export {
  RC as default
};
