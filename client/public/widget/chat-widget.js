function Hc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ks = { exports: {} }, _l = {};
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
function a1() {
  if (Zm) return _l;
  Zm = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function r(o, s, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      c = {};
      for (var p in s)
        p !== "key" && (c[p] = s[p]);
    } else c = s;
    return s = c.ref, {
      $$typeof: n,
      type: o,
      key: d,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return _l.Fragment = i, _l.jsx = r, _l.jsxs = r, _l;
}
var Jm;
function i1() {
  return Jm || (Jm = 1, Ks.exports = a1()), Ks.exports;
}
var j = i1(), Zs = { exports: {} }, Te = {};
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
function l1() {
  if (Wm) return Te;
  Wm = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.iterator;
  function E(b) {
    return b === null || typeof b != "object" ? null : (b = v && b[v] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var w = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, k = Object.assign, D = {};
  function B(b, V, J) {
    this.props = b, this.context = V, this.refs = D, this.updater = J || w;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(b, V) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, V, "setState");
  }, B.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function _() {
  }
  _.prototype = B.prototype;
  function Z(b, V, J) {
    this.props = b, this.context = V, this.refs = D, this.updater = J || w;
  }
  var F = Z.prototype = new _();
  F.constructor = Z, k(F, B.prototype), F.isPureReactComponent = !0;
  var fe = Array.isArray, W = { H: null, A: null, T: null, S: null, V: null }, U = Object.prototype.hasOwnProperty;
  function re(b, V, J, x, $, oe) {
    return J = oe.ref, {
      $$typeof: n,
      type: b,
      key: V,
      ref: J !== void 0 ? J : null,
      props: oe
    };
  }
  function P(b, V) {
    return re(
      b.type,
      V,
      void 0,
      void 0,
      void 0,
      b.props
    );
  }
  function de(b) {
    return typeof b == "object" && b !== null && b.$$typeof === n;
  }
  function we(b) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(J) {
      return V[J];
    });
  }
  var le = /\/+/g;
  function ne(b, V) {
    return typeof b == "object" && b !== null && b.key != null ? we("" + b.key) : V.toString(36);
  }
  function te() {
  }
  function ae(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(te, te) : (b.status = "pending", b.then(
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
  function ie(b, V, J, x, $) {
    var oe = typeof b;
    (oe === "undefined" || oe === "boolean") && (b = null);
    var ee = !1;
    if (b === null) ee = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          ee = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case n:
            case i:
              ee = !0;
              break;
            case h:
              return ee = b._init, ie(
                ee(b._payload),
                V,
                J,
                x,
                $
              );
          }
      }
    if (ee)
      return $ = $(b), ee = x === "" ? "." + ne(b, 0) : x, fe($) ? (J = "", ee != null && (J = ee.replace(le, "$&/") + "/"), ie($, V, J, "", function(Pe) {
        return Pe;
      })) : $ != null && (de($) && ($ = P(
        $,
        J + ($.key == null || b && b.key === $.key ? "" : ("" + $.key).replace(
          le,
          "$&/"
        ) + "/") + ee
      )), V.push($)), 1;
    ee = 0;
    var be = x === "" ? "." : x + ":";
    if (fe(b))
      for (var Re = 0; Re < b.length; Re++)
        x = b[Re], oe = be + ne(x, Re), ee += ie(
          x,
          V,
          J,
          oe,
          $
        );
    else if (Re = E(b), typeof Re == "function")
      for (b = Re.call(b), Re = 0; !(x = b.next()).done; )
        x = x.value, oe = be + ne(x, Re++), ee += ie(
          x,
          V,
          J,
          oe,
          $
        );
    else if (oe === "object") {
      if (typeof b.then == "function")
        return ie(
          ae(b),
          V,
          J,
          x,
          $
        );
      throw V = String(b), Error(
        "Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ee;
  }
  function O(b, V, J) {
    if (b == null) return b;
    var x = [], $ = 0;
    return ie(b, x, "", "", function(oe) {
      return V.call(J, oe, $++);
    }), x;
  }
  function Y(b) {
    if (b._status === -1) {
      var V = b._result;
      V = V(), V.then(
        function(J) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = J);
        },
        function(J) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = J);
        }
      ), b._status === -1 && (b._status = 0, b._result = V);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var G = typeof reportError == "function" ? reportError : function(b) {
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
  return Te.Children = {
    map: O,
    forEach: function(b, V, J) {
      O(
        b,
        function() {
          V.apply(this, arguments);
        },
        J
      );
    },
    count: function(b) {
      var V = 0;
      return O(b, function() {
        V++;
      }), V;
    },
    toArray: function(b) {
      return O(b, function(V) {
        return V;
      }) || [];
    },
    only: function(b) {
      if (!de(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  }, Te.Component = B, Te.Fragment = r, Te.Profiler = s, Te.PureComponent = Z, Te.StrictMode = o, Te.Suspense = g, Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, Te.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return W.H.useMemoCache(b);
    }
  }, Te.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, Te.cloneElement = function(b, V, J) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var x = k({}, b.props), $ = b.key, oe = void 0;
    if (V != null)
      for (ee in V.ref !== void 0 && (oe = void 0), V.key !== void 0 && ($ = "" + V.key), V)
        !U.call(V, ee) || ee === "key" || ee === "__self" || ee === "__source" || ee === "ref" && V.ref === void 0 || (x[ee] = V[ee]);
    var ee = arguments.length - 2;
    if (ee === 1) x.children = J;
    else if (1 < ee) {
      for (var be = Array(ee), Re = 0; Re < ee; Re++)
        be[Re] = arguments[Re + 2];
      x.children = be;
    }
    return re(b.type, $, void 0, void 0, oe, x);
  }, Te.createContext = function(b) {
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
  }, Te.createElement = function(b, V, J) {
    var x, $ = {}, oe = null;
    if (V != null)
      for (x in V.key !== void 0 && (oe = "" + V.key), V)
        U.call(V, x) && x !== "key" && x !== "__self" && x !== "__source" && ($[x] = V[x]);
    var ee = arguments.length - 2;
    if (ee === 1) $.children = J;
    else if (1 < ee) {
      for (var be = Array(ee), Re = 0; Re < ee; Re++)
        be[Re] = arguments[Re + 2];
      $.children = be;
    }
    if (b && b.defaultProps)
      for (x in ee = b.defaultProps, ee)
        $[x] === void 0 && ($[x] = ee[x]);
    return re(b, oe, void 0, void 0, null, $);
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, Te.isValidElement = de, Te.lazy = function(b) {
    return {
      $$typeof: h,
      _payload: { _status: -1, _result: b },
      _init: Y
    };
  }, Te.memo = function(b, V) {
    return {
      $$typeof: m,
      type: b,
      compare: V === void 0 ? null : V
    };
  }, Te.startTransition = function(b) {
    var V = W.T, J = {};
    W.T = J;
    try {
      var x = b(), $ = W.S;
      $ !== null && $(J, x), typeof x == "object" && x !== null && typeof x.then == "function" && x.then(Ee, G);
    } catch (oe) {
      G(oe);
    } finally {
      W.T = V;
    }
  }, Te.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, Te.use = function(b) {
    return W.H.use(b);
  }, Te.useActionState = function(b, V, J) {
    return W.H.useActionState(b, V, J);
  }, Te.useCallback = function(b, V) {
    return W.H.useCallback(b, V);
  }, Te.useContext = function(b) {
    return W.H.useContext(b);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(b, V) {
    return W.H.useDeferredValue(b, V);
  }, Te.useEffect = function(b, V, J) {
    var x = W.H;
    if (typeof J == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return x.useEffect(b, V);
  }, Te.useId = function() {
    return W.H.useId();
  }, Te.useImperativeHandle = function(b, V, J) {
    return W.H.useImperativeHandle(b, V, J);
  }, Te.useInsertionEffect = function(b, V) {
    return W.H.useInsertionEffect(b, V);
  }, Te.useLayoutEffect = function(b, V) {
    return W.H.useLayoutEffect(b, V);
  }, Te.useMemo = function(b, V) {
    return W.H.useMemo(b, V);
  }, Te.useOptimistic = function(b, V) {
    return W.H.useOptimistic(b, V);
  }, Te.useReducer = function(b, V, J) {
    return W.H.useReducer(b, V, J);
  }, Te.useRef = function(b) {
    return W.H.useRef(b);
  }, Te.useState = function(b) {
    return W.H.useState(b);
  }, Te.useSyncExternalStore = function(b, V, J) {
    return W.H.useSyncExternalStore(
      b,
      V,
      J
    );
  }, Te.useTransition = function() {
    return W.H.useTransition();
  }, Te.version = "19.1.0", Te;
}
var $m;
function Vc() {
  return $m || ($m = 1, Zs.exports = l1()), Zs.exports;
}
var pe = Vc();
const ho = /* @__PURE__ */ Hc(pe);
var Js = { exports: {} }, Nl = {}, Ws = { exports: {} }, $s = {};
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
function r1() {
  return eh || (eh = 1, function(n) {
    function i(O, Y) {
      var G = O.length;
      O.push(Y);
      e: for (; 0 < G; ) {
        var Ee = G - 1 >>> 1, b = O[Ee];
        if (0 < s(b, Y))
          O[Ee] = Y, O[G] = b, G = Ee;
        else break e;
      }
    }
    function r(O) {
      return O.length === 0 ? null : O[0];
    }
    function o(O) {
      if (O.length === 0) return null;
      var Y = O[0], G = O.pop();
      if (G !== Y) {
        O[0] = G;
        e: for (var Ee = 0, b = O.length, V = b >>> 1; Ee < V; ) {
          var J = 2 * (Ee + 1) - 1, x = O[J], $ = J + 1, oe = O[$];
          if (0 > s(x, G))
            $ < b && 0 > s(oe, x) ? (O[Ee] = oe, O[$] = G, Ee = $) : (O[Ee] = x, O[J] = G, Ee = J);
          else if ($ < b && 0 > s(oe, G))
            O[Ee] = oe, O[$] = G, Ee = $;
          else break e;
        }
      }
      return Y;
    }
    function s(O, Y) {
      var G = O.sortIndex - Y.sortIndex;
      return G !== 0 ? G : O.id - Y.id;
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
    var g = [], m = [], h = 1, v = null, E = 3, w = !1, k = !1, D = !1, B = !1, _ = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    function fe(O) {
      for (var Y = r(m); Y !== null; ) {
        if (Y.callback === null) o(m);
        else if (Y.startTime <= O)
          o(m), Y.sortIndex = Y.expirationTime, i(g, Y);
        else break;
        Y = r(m);
      }
    }
    function W(O) {
      if (D = !1, fe(O), !k)
        if (r(g) !== null)
          k = !0, U || (U = !0, ne());
        else {
          var Y = r(m);
          Y !== null && ie(W, Y.startTime - O);
        }
    }
    var U = !1, re = -1, P = 5, de = -1;
    function we() {
      return B ? !0 : !(n.unstable_now() - de < P);
    }
    function le() {
      if (B = !1, U) {
        var O = n.unstable_now();
        de = O;
        var Y = !0;
        try {
          e: {
            k = !1, D && (D = !1, Z(re), re = -1), w = !0;
            var G = E;
            try {
              t: {
                for (fe(O), v = r(g); v !== null && !(v.expirationTime > O && we()); ) {
                  var Ee = v.callback;
                  if (typeof Ee == "function") {
                    v.callback = null, E = v.priorityLevel;
                    var b = Ee(
                      v.expirationTime <= O
                    );
                    if (O = n.unstable_now(), typeof b == "function") {
                      v.callback = b, fe(O), Y = !0;
                      break t;
                    }
                    v === r(g) && o(g), fe(O);
                  } else o(g);
                  v = r(g);
                }
                if (v !== null) Y = !0;
                else {
                  var V = r(m);
                  V !== null && ie(
                    W,
                    V.startTime - O
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              v = null, E = G, w = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? ne() : U = !1;
        }
      }
    }
    var ne;
    if (typeof F == "function")
      ne = function() {
        F(le);
      };
    else if (typeof MessageChannel < "u") {
      var te = new MessageChannel(), ae = te.port2;
      te.port1.onmessage = le, ne = function() {
        ae.postMessage(null);
      };
    } else
      ne = function() {
        _(le, 0);
      };
    function ie(O, Y) {
      re = _(function() {
        O(n.unstable_now());
      }, Y);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, n.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < O ? Math.floor(1e3 / O) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, n.unstable_next = function(O) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = E;
      }
      var G = E;
      E = Y;
      try {
        return O();
      } finally {
        E = G;
      }
    }, n.unstable_requestPaint = function() {
      B = !0;
    }, n.unstable_runWithPriority = function(O, Y) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var G = E;
      E = O;
      try {
        return Y();
      } finally {
        E = G;
      }
    }, n.unstable_scheduleCallback = function(O, Y, G) {
      var Ee = n.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? Ee + G : Ee) : G = Ee, O) {
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
      return b = G + b, O = {
        id: h++,
        callback: Y,
        priorityLevel: O,
        startTime: G,
        expirationTime: b,
        sortIndex: -1
      }, G > Ee ? (O.sortIndex = G, i(m, O), r(g) === null && O === r(m) && (D ? (Z(re), re = -1) : D = !0, ie(W, G - Ee))) : (O.sortIndex = b, i(g, O), k || w || (k = !0, U || (U = !0, ne()))), O;
    }, n.unstable_shouldYield = we, n.unstable_wrapCallback = function(O) {
      var Y = E;
      return function() {
        var G = E;
        E = Y;
        try {
          return O.apply(this, arguments);
        } finally {
          E = G;
        }
      };
    };
  }($s)), $s;
}
var th;
function o1() {
  return th || (th = 1, Ws.exports = r1()), Ws.exports;
}
var ec = { exports: {} }, bt = {};
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
function u1() {
  if (nh) return bt;
  nh = 1;
  var n = Vc();
  function i(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var h = 2; h < arguments.length; h++)
        m += "&args[]=" + encodeURIComponent(arguments[h]);
    }
    return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var o = {
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
  function c(g, m, h) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
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
  return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, bt.createPortal = function(g, m) {
    var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(i(299));
    return c(g, m, null, h);
  }, bt.flushSync = function(g) {
    var m = d.T, h = o.p;
    try {
      if (d.T = null, o.p = 2, g) return g();
    } finally {
      d.T = m, o.p = h, o.d.f();
    }
  }, bt.preconnect = function(g, m) {
    typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(g, m));
  }, bt.prefetchDNS = function(g) {
    typeof g == "string" && o.d.D(g);
  }, bt.preinit = function(g, m) {
    if (typeof g == "string" && m && typeof m.as == "string") {
      var h = m.as, v = p(h, m.crossOrigin), E = typeof m.integrity == "string" ? m.integrity : void 0, w = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      h === "style" ? o.d.S(
        g,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: v,
          integrity: E,
          fetchPriority: w
        }
      ) : h === "script" && o.d.X(g, {
        crossOrigin: v,
        integrity: E,
        fetchPriority: w,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, bt.preinitModule = function(g, m) {
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
  }, bt.preload = function(g, m) {
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
  }, bt.preloadModule = function(g, m) {
    if (typeof g == "string")
      if (m) {
        var h = p(m.as, m.crossOrigin);
        o.d.m(g, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: h,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else o.d.m(g);
  }, bt.requestFormReset = function(g) {
    o.d.r(g);
  }, bt.unstable_batchedUpdates = function(g, m) {
    return g(m);
  }, bt.useFormState = function(g, m, h) {
    return d.H.useFormState(g, m, h);
  }, bt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, bt.version = "19.1.0", bt;
}
var ah;
function s1() {
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
  return n(), ec.exports = u1(), ec.exports;
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
function c1() {
  if (ih) return Nl;
  ih = 1;
  var n = o1(), i = Vc(), r = s1();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
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
    for (var a = e, l = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (l = u.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === a) return p(u), e;
          if (f === l) return p(u), t;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) a = u, l = f;
      else {
        for (var y = !1, S = u.child; S; ) {
          if (S === a) {
            y = !0, a = u, l = f;
            break;
          }
          if (S === l) {
            y = !0, l = u, a = f;
            break;
          }
          S = S.sibling;
        }
        if (!y) {
          for (S = f.child; S; ) {
            if (S === a) {
              y = !0, a = f, l = u;
              break;
            }
            if (S === l) {
              y = !0, l = f, a = u;
              break;
            }
            S = S.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
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
  var h = Object.assign, v = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), Z = Symbol.for("react.consumer"), F = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), we = Symbol.for("react.memo_cache_sentinel"), le = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var te = Symbol.for("react.client.reference");
  function ae(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === te ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case k:
        return "Fragment";
      case B:
        return "Profiler";
      case D:
        return "StrictMode";
      case W:
        return "Suspense";
      case U:
        return "SuspenseList";
      case de:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case w:
          return "Portal";
        case F:
          return (e.displayName || "Context") + ".Provider";
        case Z:
          return (e._context.displayName || "Context") + ".Consumer";
        case fe:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case re:
          return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
        case P:
          t = e._payload, e = e._init;
          try {
            return ae(e(t));
          } catch {
          }
      }
    return null;
  }
  var ie = Array.isArray, O = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ee = [], b = -1;
  function V(e) {
    return { current: e };
  }
  function J(e) {
    0 > b || (e.current = Ee[b], Ee[b] = null, b--);
  }
  function x(e, t) {
    b++, Ee[b] = e.current, e.current = t;
  }
  var $ = V(null), oe = V(null), ee = V(null), be = V(null);
  function Re(e, t) {
    switch (x(ee, t), x(oe, e), x($, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Am(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Am(t), e = Tm(t, e);
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
    J($), x($, e);
  }
  function Pe() {
    J($), J(oe), J(ee);
  }
  function ot(e) {
    e.memoizedState !== null && x(be, e);
    var t = $.current, a = Tm(t, e.type);
    t !== a && (x(oe, e), x($, a));
  }
  function xt(e) {
    oe.current === e && (J($), J(oe)), be.current === e && (J(be), kl._currentValue = G);
  }
  var cn = Object.prototype.hasOwnProperty, Ni = n.unstable_scheduleCallback, Mi = n.unstable_cancelCallback, Kl = n.unstable_shouldYield, Zl = n.unstable_requestPaint, Ut = n.unstable_now, Mo = n.unstable_getCurrentPriorityLevel, Ui = n.unstable_ImmediatePriority, Li = n.unstable_UserBlockingPriority, La = n.unstable_NormalPriority, Uo = n.unstable_LowPriority, Jl = n.unstable_IdlePriority, Lo = n.log, Bo = n.unstable_setDisableYieldValue, q = null, X = null;
  function he(e) {
    if (typeof Lo == "function" && Bo(e), X && typeof X.setStrictMode == "function")
      try {
        X.setStrictMode(q, e);
      } catch {
      }
  }
  var ve = Math.clz32 ? Math.clz32 : wn, je = Math.log, Lt = Math.LN2;
  function wn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (je(e) / Lt | 0) | 0;
  }
  var Et = 256, fn = 4194304;
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
  function ut(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, f = e.suspendedLanes, y = e.pingedLanes;
    e = e.warmLanes;
    var S = l & 134217727;
    return S !== 0 ? (l = S & ~f, l !== 0 ? u = Bt(l) : (y &= S, y !== 0 ? u = Bt(y) : a || (a = S & ~e, a !== 0 && (u = Bt(a))))) : (S = l & ~f, S !== 0 ? u = Bt(S) : y !== 0 ? u = Bt(y) : a || (a = l & ~e, a !== 0 && (u = Bt(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & f) === 0 && (f = u & -u, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function Xt(e, t) {
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
  function of() {
    var e = Et;
    return Et <<= 1, (Et & 4194048) === 0 && (Et = 256), e;
  }
  function uf() {
    var e = fn;
    return fn <<= 1, (fn & 62914560) === 0 && (fn = 4194304), e;
  }
  function jo(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Bi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Fy(e, t, a, l, u, f) {
    var y = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var S = e.entanglements, A = e.expirationTimes, R = e.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var H = 31 - ve(a), Q = 1 << H;
      S[H] = 0, A[H] = -1;
      var N = R[H];
      if (N !== null)
        for (R[H] = null, H = 0; H < N.length; H++) {
          var M = N[H];
          M !== null && (M.lane &= -536870913);
        }
      a &= ~Q;
    }
    l !== 0 && sf(e, l, 0), f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~t));
  }
  function sf(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - ve(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function cf(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - ve(a), u = 1 << l;
      u & t | e[l] & t && (e[l] |= t), a &= ~u;
    }
  }
  function qo(e) {
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
  function Ho(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ff() {
    var e = Y.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Gm(e.type));
  }
  function Yy(e, t) {
    var a = Y.p;
    try {
      return Y.p = e, t();
    } finally {
      Y.p = a;
    }
  }
  var Hn = Math.random().toString(36).slice(2), gt = "__reactFiber$" + Hn, At = "__reactProps$" + Hn, Ba = "__reactContainer$" + Hn, Vo = "__reactEvents$" + Hn, Xy = "__reactListeners$" + Hn, Py = "__reactHandles$" + Hn, df = "__reactResources$" + Hn, ji = "__reactMarker$" + Hn;
  function Io(e) {
    delete e[gt], delete e[At], delete e[Vo], delete e[Xy], delete e[Py];
  }
  function ja(e) {
    var t = e[gt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ba] || a[gt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Rm(e); e !== null; ) {
            if (a = e[gt]) return a;
            e = Rm(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function qa(e) {
    if (e = e[gt] || e[Ba]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function qi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ha(e) {
    var t = e[df];
    return t || (t = e[df] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function st(e) {
    e[ji] = !0;
  }
  var pf = /* @__PURE__ */ new Set(), mf = {};
  function da(e, t) {
    Va(e, t), Va(e + "Capture", t);
  }
  function Va(e, t) {
    for (mf[e] = t, e = 0; e < t.length; e++)
      pf.add(t[e]);
  }
  var Ky = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), hf = {}, gf = {};
  function Zy(e) {
    return cn.call(gf, e) ? !0 : cn.call(hf, e) ? !1 : Ky.test(e) ? gf[e] = !0 : (hf[e] = !0, !1);
  }
  function Wl(e, t, a) {
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
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function $l(e, t, a) {
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
  function En(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  var Qo, yf;
  function Ia(e) {
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
  var Go = !1;
  function Fo(e, t) {
    if (!e || Go) return "";
    Go = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (M) {
                  var N = M;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (M) {
                  N = M;
                }
                e.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                N = M;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (M) {
            if (M && N && typeof M.stack == "string")
              return [M.stack, N.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = l.DetermineComponentFrameRoot(), y = f[0], S = f[1];
      if (y && S) {
        var A = y.split(`
`), R = S.split(`
`);
        for (u = l = 0; l < A.length && !A[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < R.length && !R[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === A.length || u === R.length)
          for (l = A.length - 1, u = R.length - 1; 1 <= l && 0 <= u && A[l] !== R[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (A[l] !== R[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || A[l] !== R[u]) {
                  var H = `
` + A[l].replace(" at new ", " at ");
                  return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      Go = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ia(a) : "";
  }
  function Jy(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ia(e.type);
      case 16:
        return Ia("Lazy");
      case 13:
        return Ia("Suspense");
      case 19:
        return Ia("SuspenseList");
      case 0:
      case 15:
        return Fo(e.type, !1);
      case 11:
        return Fo(e.type.render, !1);
      case 1:
        return Fo(e.type, !0);
      case 31:
        return Ia("Activity");
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
  function Pt(e) {
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
    ), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, f = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(y) {
          l = "" + y, f.call(this, y);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(y) {
          l = "" + y;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function er(e) {
    e._valueTracker || (e._valueTracker = Wy(e));
  }
  function Sf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = vf(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function tr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var $y = /[\n"\\]/g;
  function Kt(e) {
    return e.replace(
      $y,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Yo(e, t, a, l, u, f, y, S) {
    e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Pt(t)) : e.value !== "" + Pt(t) && (e.value = "" + Pt(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), t != null ? Xo(e, y, Pt(t)) : a != null ? Xo(e, y, Pt(a)) : l != null && e.removeAttribute("value"), u == null && f != null && (e.defaultChecked = !!f), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + Pt(S) : e.removeAttribute("name");
  }
  function xf(e, t, a, l, u, f, y, S) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || a != null) {
      if (!(f !== "submit" && f !== "reset" || t != null))
        return;
      a = a != null ? "" + Pt(a) : "", t = t != null ? "" + Pt(t) : a, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = S ? e.checked : !!l, e.defaultChecked = !!l, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y);
  }
  function Xo(e, t, a) {
    t === "number" && tr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Qa(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        u = t.hasOwnProperty("$" + e[a].value), e[a].selected !== u && (e[a].selected = u), u && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Pt(a), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function wf(e, t, a) {
    if (t != null && (t = "" + Pt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Pt(a) : "";
  }
  function Ef(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (ie(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Pt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l);
  }
  function Ga(e, t) {
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
  function Af(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || eb.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Tf(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var u in t)
        l = t[u], t.hasOwnProperty(u) && a[u] !== l && Af(e, u, l);
    } else
      for (var f in t)
        t.hasOwnProperty(f) && Af(e, f, t[f]);
  }
  function Po(e) {
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
  function nr(e) {
    return nb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Ko = null;
  function Zo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Fa = null, Ya = null;
  function Cf(e) {
    var t = qa(e);
    if (t && (e = t.stateNode)) {
      var a = e[At] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Yo(
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
              'input[name="' + Kt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var u = l[At] || null;
                if (!u) throw Error(o(90));
                Yo(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && Sf(l);
          }
          break e;
        case "textarea":
          wf(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Qa(e, !!a.multiple, t, !1);
      }
    }
  }
  var Jo = !1;
  function kf(e, t, a) {
    if (Jo) return e(t, a);
    Jo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Jo = !1, (Fa !== null || Ya !== null) && (Vr(), Fa && (t = Fa, e = Ya, Ya = Fa = null, Cf(t), e)))
        for (t = 0; t < e.length; t++) Cf(e[t]);
    }
  }
  function Hi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[At] || null;
    if (l === null) return null;
    a = l[t];
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
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
  var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wo = !1;
  if (An)
    try {
      var Vi = {};
      Object.defineProperty(Vi, "passive", {
        get: function() {
          Wo = !0;
        }
      }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
    } catch {
      Wo = !1;
    }
  var Vn = null, $o = null, ar = null;
  function zf() {
    if (ar) return ar;
    var e, t = $o, a = t.length, l, u = "value" in Vn ? Vn.value : Vn.textContent, f = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++) ;
    var y = a - e;
    for (l = 1; l <= y && t[a - l] === u[f - l]; l++) ;
    return ar = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function ir(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function lr() {
    return !0;
  }
  function Rf() {
    return !1;
  }
  function Tt(e) {
    function t(a, l, u, f, y) {
      this._reactName = a, this._targetInst = u, this.type = l, this.nativeEvent = f, this.target = y, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (a = e[S], this[S] = a ? a(f) : f[S]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? lr : Rf, this.isPropagationStopped = Rf, this;
    }
    return h(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = lr);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = lr);
      },
      persist: function() {
      },
      isPersistent: lr
    }), t;
  }
  var pa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, rr = Tt(pa), Ii = h({}, pa, { view: 0, detail: 0 }), ab = Tt(Ii), eu, tu, Qi, or = h({}, Ii, {
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
    getModifierState: au,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Qi && (Qi && e.type === "mousemove" ? (eu = e.screenX - Qi.screenX, tu = e.screenY - Qi.screenY) : tu = eu = 0, Qi = e), eu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : tu;
    }
  }), Df = Tt(or), ib = h({}, or, { dataTransfer: 0 }), lb = Tt(ib), rb = h({}, Ii, { relatedTarget: 0 }), nu = Tt(rb), ob = h({}, pa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ub = Tt(ob), sb = h({}, pa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), cb = Tt(sb), fb = h({}, pa, { data: 0 }), Of = Tt(fb), db = {
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
  function au() {
    return hb;
  }
  var gb = h({}, Ii, {
    key: function(e) {
      if (e.key) {
        var t = db[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: au,
    charCode: function(e) {
      return e.type === "keypress" ? ir(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), yb = Tt(gb), bb = h({}, or, {
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
  }), _f = Tt(bb), vb = h({}, Ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au
  }), Sb = Tt(vb), xb = h({}, pa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wb = Tt(xb), Eb = h({}, or, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ab = Tt(Eb), Tb = h({}, pa, {
    newState: 0,
    oldState: 0
  }), Cb = Tt(Tb), kb = [9, 13, 27, 32], iu = An && "CompositionEvent" in window, Gi = null;
  An && "documentMode" in document && (Gi = document.documentMode);
  var zb = An && "TextEvent" in window && !Gi, Nf = An && (!iu || Gi && 8 < Gi && 11 >= Gi), Mf = " ", Uf = !1;
  function Lf(e, t) {
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
  function Bf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Xa = !1;
  function Rb(e, t) {
    switch (e) {
      case "compositionend":
        return Bf(t);
      case "keypress":
        return t.which !== 32 ? null : (Uf = !0, Mf);
      case "textInput":
        return e = t.data, e === Mf && Uf ? null : e;
      default:
        return null;
    }
  }
  function Db(e, t) {
    if (Xa)
      return e === "compositionend" || !iu && Lf(e, t) ? (e = zf(), ar = $o = Vn = null, Xa = !1, e) : null;
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
  var Ob = {
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
    return t === "input" ? !!Ob[e.type] : t === "textarea";
  }
  function qf(e, t, a, l) {
    Fa ? Ya ? Ya.push(l) : Ya = [l] : Fa = l, t = Xr(t, "onChange"), 0 < t.length && (a = new rr(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Fi = null, Yi = null;
  function _b(e) {
    vm(e, 0);
  }
  function ur(e) {
    var t = qi(e);
    if (Sf(t)) return e;
  }
  function Hf(e, t) {
    if (e === "change") return t;
  }
  var Vf = !1;
  if (An) {
    var lu;
    if (An) {
      var ru = "oninput" in document;
      if (!ru) {
        var If = document.createElement("div");
        If.setAttribute("oninput", "return;"), ru = typeof If.oninput == "function";
      }
      lu = ru;
    } else lu = !1;
    Vf = lu && (!document.documentMode || 9 < document.documentMode);
  }
  function Qf() {
    Fi && (Fi.detachEvent("onpropertychange", Gf), Yi = Fi = null);
  }
  function Gf(e) {
    if (e.propertyName === "value" && ur(Yi)) {
      var t = [];
      qf(
        t,
        Yi,
        e,
        Zo(e)
      ), kf(_b, t);
    }
  }
  function Nb(e, t, a) {
    e === "focusin" ? (Qf(), Fi = t, Yi = a, Fi.attachEvent("onpropertychange", Gf)) : e === "focusout" && Qf();
  }
  function Mb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ur(Yi);
  }
  function Ub(e, t) {
    if (e === "click") return ur(t);
  }
  function Lb(e, t) {
    if (e === "input" || e === "change")
      return ur(t);
  }
  function Bb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var jt = typeof Object.is == "function" ? Object.is : Bb;
  function Xi(e, t) {
    if (jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var u = a[l];
      if (!cn.call(t, u) || !jt(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function Ff(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Yf(e, t) {
    var a = Ff(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t)
          return { node: a, offset: t - e };
        e = l;
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
      a = Ff(a);
    }
  }
  function Xf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Pf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = tr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = tr(e.document);
    }
    return t;
  }
  function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var jb = An && "documentMode" in document && 11 >= document.documentMode, Pa = null, uu = null, Pi = null, su = !1;
  function Kf(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    su || Pa == null || Pa !== tr(l) || (l = Pa, "selectionStart" in l && ou(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Pi && Xi(Pi, l) || (Pi = l, l = Xr(uu, "onSelect"), 0 < l.length && (t = new rr(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Pa)));
  }
  function ma(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Ka = {
    animationend: ma("Animation", "AnimationEnd"),
    animationiteration: ma("Animation", "AnimationIteration"),
    animationstart: ma("Animation", "AnimationStart"),
    transitionrun: ma("Transition", "TransitionRun"),
    transitionstart: ma("Transition", "TransitionStart"),
    transitioncancel: ma("Transition", "TransitionCancel"),
    transitionend: ma("Transition", "TransitionEnd")
  }, cu = {}, Zf = {};
  An && (Zf = document.createElement("div").style, "AnimationEvent" in window || (delete Ka.animationend.animation, delete Ka.animationiteration.animation, delete Ka.animationstart.animation), "TransitionEvent" in window || delete Ka.transitionend.transition);
  function ha(e) {
    if (cu[e]) return cu[e];
    if (!Ka[e]) return e;
    var t = Ka[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Zf)
        return cu[e] = t[a];
    return e;
  }
  var Jf = ha("animationend"), Wf = ha("animationiteration"), $f = ha("animationstart"), qb = ha("transitionrun"), Hb = ha("transitionstart"), Vb = ha("transitioncancel"), ed = ha("transitionend"), td = /* @__PURE__ */ new Map(), fu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  fu.push("scrollEnd");
  function rn(e, t) {
    td.set(e, t), da(t, [e]);
  }
  var nd = /* @__PURE__ */ new WeakMap();
  function Zt(e, t) {
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
  var Jt = [], Za = 0, du = 0;
  function sr() {
    for (var e = Za, t = du = Za = 0; t < e; ) {
      var a = Jt[t];
      Jt[t++] = null;
      var l = Jt[t];
      Jt[t++] = null;
      var u = Jt[t];
      Jt[t++] = null;
      var f = Jt[t];
      if (Jt[t++] = null, l !== null && u !== null) {
        var y = l.pending;
        y === null ? u.next = u : (u.next = y.next, y.next = u), l.pending = u;
      }
      f !== 0 && ad(a, u, f);
    }
  }
  function cr(e, t, a, l) {
    Jt[Za++] = e, Jt[Za++] = t, Jt[Za++] = a, Jt[Za++] = l, du |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function pu(e, t, a, l) {
    return cr(e, t, a, l), fr(e);
  }
  function Ja(e, t) {
    return cr(e, null, null, t), fr(e);
  }
  function ad(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var u = !1, f = e.return; f !== null; )
      f.childLanes |= a, l = f.alternate, l !== null && (l.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (u = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, u && t !== null && (u = 31 - ve(a), e = f.hiddenUpdates, l = e[u], l === null ? e[u] = [t] : l.push(t), t.lane = a | 536870912), f) : null;
  }
  function fr(e) {
    if (50 < vl)
      throw vl = 0, vs = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Wa = {};
  function Ib(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qt(e, t, a, l) {
    return new Ib(e, t, a, l);
  }
  function mu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Tn(e, t) {
    var a = e.alternate;
    return a === null ? (a = qt(
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
  function dr(e, t, a, l, u, f) {
    var y = 0;
    if (l = e, typeof e == "function") mu(e) && (y = 1);
    else if (typeof e == "string")
      y = G0(
        e,
        a,
        $.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case de:
          return e = qt(31, a, t, u), e.elementType = de, e.lanes = f, e;
        case k:
          return ga(a.children, u, f, t);
        case D:
          y = 8, u |= 24;
          break;
        case B:
          return e = qt(12, a, t, u | 2), e.elementType = B, e.lanes = f, e;
        case W:
          return e = qt(13, a, t, u), e.elementType = W, e.lanes = f, e;
        case U:
          return e = qt(19, a, t, u), e.elementType = U, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case _:
              case F:
                y = 10;
                break e;
              case Z:
                y = 9;
                break e;
              case fe:
                y = 11;
                break e;
              case re:
                y = 14;
                break e;
              case P:
                y = 16, l = null;
                break e;
            }
          y = 29, a = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = qt(y, a, t, u), t.elementType = e, t.type = l, t.lanes = f, t;
  }
  function ga(e, t, a, l) {
    return e = qt(7, e, l, t), e.lanes = a, e;
  }
  function hu(e, t, a) {
    return e = qt(6, e, null, t), e.lanes = a, e;
  }
  function gu(e, t, a) {
    return t = qt(
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
  var $a = [], ei = 0, pr = null, mr = 0, Wt = [], $t = 0, ya = null, Cn = 1, kn = "";
  function ba(e, t) {
    $a[ei++] = mr, $a[ei++] = pr, pr = e, mr = t;
  }
  function ld(e, t, a) {
    Wt[$t++] = Cn, Wt[$t++] = kn, Wt[$t++] = ya, ya = e;
    var l = Cn;
    e = kn;
    var u = 32 - ve(l) - 1;
    l &= ~(1 << u), a += 1;
    var f = 32 - ve(t) + u;
    if (30 < f) {
      var y = u - u % 5;
      f = (l & (1 << y) - 1).toString(32), l >>= y, u -= y, Cn = 1 << 32 - ve(t) + u | a << u | l, kn = f + e;
    } else
      Cn = 1 << f | a << u | l, kn = e;
  }
  function yu(e) {
    e.return !== null && (ba(e, 1), ld(e, 1, 0));
  }
  function bu(e) {
    for (; e === pr; )
      pr = $a[--ei], $a[ei] = null, mr = $a[--ei], $a[ei] = null;
    for (; e === ya; )
      ya = Wt[--$t], Wt[$t] = null, kn = Wt[--$t], Wt[$t] = null, Cn = Wt[--$t], Wt[$t] = null;
  }
  var wt = null, Je = null, Le = !1, va = null, dn = !1, vu = Error(o(519));
  function Sa(e) {
    var t = Error(o(418, ""));
    throw Ji(Zt(t, e)), vu;
  }
  function rd(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[gt] = e, t[At] = l, a) {
      case "dialog":
        _e("cancel", t), _e("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        _e("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < xl.length; a++)
          _e(xl[a], t);
        break;
      case "source":
        _e("error", t);
        break;
      case "img":
      case "image":
      case "link":
        _e("error", t), _e("load", t);
        break;
      case "details":
        _e("toggle", t);
        break;
      case "input":
        _e("invalid", t), xf(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), er(t);
        break;
      case "select":
        _e("invalid", t);
        break;
      case "textarea":
        _e("invalid", t), Ef(t, l.value, l.defaultValue, l.children), er(t);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Em(t.textContent, a) ? (l.popover != null && (_e("beforetoggle", t), _e("toggle", t)), l.onScroll != null && _e("scroll", t), l.onScrollEnd != null && _e("scrollend", t), l.onClick != null && (t.onclick = Pr), t = !0) : t = !1, t || Sa(e);
  }
  function od(e) {
    for (wt = e.return; wt; )
      switch (wt.tag) {
        case 5:
        case 13:
          dn = !1;
          return;
        case 27:
        case 3:
          dn = !0;
          return;
        default:
          wt = wt.return;
      }
  }
  function Ki(e) {
    if (e !== wt) return !1;
    if (!Le) return od(e), Le = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Us(e.type, e.memoizedProps)), a = !a), a && Je && Sa(e), od(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                Je = un(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        Je = null;
      }
    } else
      t === 27 ? (t = Je, aa(e.type) ? (e = qs, qs = null, Je = e) : Je = t) : Je = wt ? un(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zi() {
    Je = wt = null, Le = !1;
  }
  function ud() {
    var e = va;
    return e !== null && (zt === null ? zt = e : zt.push.apply(
      zt,
      e
    ), va = null), e;
  }
  function Ji(e) {
    va === null ? va = [e] : va.push(e);
  }
  var Su = V(null), xa = null, zn = null;
  function In(e, t, a) {
    x(Su, t._currentValue), t._currentValue = a;
  }
  function Rn(e) {
    e._currentValue = Su.current, J(Su);
  }
  function xu(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function wu(e, t, a, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var y = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var S = f;
          f = u;
          for (var A = 0; A < t.length; A++)
            if (S.context === t[A]) {
              f.lanes |= a, S = f.alternate, S !== null && (S.lanes |= a), xu(
                f.return,
                a,
                e
              ), l || (y = null);
              break e;
            }
          f = S.next;
        }
      } else if (u.tag === 18) {
        if (y = u.return, y === null) throw Error(o(341));
        y.lanes |= a, f = y.alternate, f !== null && (f.lanes |= a), xu(y, a, e), y = null;
      } else y = u.child;
      if (y !== null) y.return = u;
      else
        for (y = u; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (u = y.sibling, u !== null) {
            u.return = y.return, y = u;
            break;
          }
          y = y.return;
        }
      u = y;
    }
  }
  function Wi(e, t, a, l) {
    e = null;
    for (var u = t, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var y = u.alternate;
        if (y === null) throw Error(o(387));
        if (y = y.memoizedProps, y !== null) {
          var S = u.type;
          jt(u.pendingProps.value, y.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (u === be.current) {
        if (y = u.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(kl) : e = [kl]);
      }
      u = u.return;
    }
    e !== null && wu(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function hr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!jt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function wa(e) {
    xa = e, zn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function yt(e) {
    return sd(xa, e);
  }
  function gr(e, t) {
    return xa === null && wa(e), sd(e, t);
  }
  function sd(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, zn === null) {
      if (e === null) throw Error(o(308));
      zn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else zn = zn.next = t;
    return a;
  }
  var Qb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, Gb = n.unstable_scheduleCallback, Fb = n.unstable_NormalPriority, it = {
    $$typeof: F,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Eu() {
    return {
      controller: new Qb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $i(e) {
    e.refCount--, e.refCount === 0 && Gb(Fb, function() {
      e.controller.abort();
    });
  }
  var el = null, Au = 0, ti = 0, ni = null;
  function Yb(e, t) {
    if (el === null) {
      var a = el = [];
      Au = 0, ti = Cs(), ni = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return Au++, t.then(cd, cd), t;
  }
  function cd() {
    if (--Au === 0 && el !== null) {
      ni !== null && (ni.status = "fulfilled");
      var e = el;
      el = null, ti = 0, ni = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Xb(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), l;
  }
  var fd = O.S;
  O.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Yb(e, t), fd !== null && fd(e, t);
  };
  var Ea = V(null);
  function Tu() {
    var e = Ea.current;
    return e !== null ? e : Fe.pooledCache;
  }
  function yr(e, t) {
    t === null ? x(Ea, Ea.current) : x(Ea, t.pool);
  }
  function dd() {
    var e = Tu();
    return e === null ? null : { parent: it._currentValue, pool: e };
  }
  var tl = Error(o(460)), pd = Error(o(474)), br = Error(o(542)), Cu = { then: function() {
  } };
  function md(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function vr() {
  }
  function hd(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(vr, vr), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, yd(e), e;
      default:
        if (typeof t.status == "string") t.then(vr, vr);
        else {
          if (e = Fe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = l;
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
        throw nl = t, tl;
    }
  }
  var nl = null;
  function gd() {
    if (nl === null) throw Error(o(459));
    var e = nl;
    return nl = null, e;
  }
  function yd(e) {
    if (e === tl || e === br)
      throw Error(o(483));
  }
  var Qn = !1;
  function ku(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function zu(e, t) {
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
  function Fn(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (qe & 2) !== 0) {
      var u = l.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, t = fr(e), ad(e, null, a), t;
    }
    return cr(e, l, t, a), fr(e);
  }
  function al(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, cf(e, a);
    }
  }
  function Ru(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var u = null, f = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var y = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          f === null ? u = f = y : f = f.next = y, a = a.next;
        } while (a !== null);
        f === null ? u = f = t : f = f.next = t;
      } else u = f = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Du = !1;
  function il() {
    if (Du) {
      var e = ni;
      if (e !== null) throw e;
    }
  }
  function ll(e, t, a, l) {
    Du = !1;
    var u = e.updateQueue;
    Qn = !1;
    var f = u.firstBaseUpdate, y = u.lastBaseUpdate, S = u.shared.pending;
    if (S !== null) {
      u.shared.pending = null;
      var A = S, R = A.next;
      A.next = null, y === null ? f = R : y.next = R, y = A;
      var H = e.alternate;
      H !== null && (H = H.updateQueue, S = H.lastBaseUpdate, S !== y && (S === null ? H.firstBaseUpdate = R : S.next = R, H.lastBaseUpdate = A));
    }
    if (f !== null) {
      var Q = u.baseState;
      y = 0, H = R = A = null, S = f;
      do {
        var N = S.lane & -536870913, M = N !== S.lane;
        if (M ? (Me & N) === N : (l & N) === N) {
          N !== 0 && N === ti && (Du = !0), H !== null && (H = H.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var Se = e, ge = S;
            N = t;
            var Qe = a;
            switch (ge.tag) {
              case 1:
                if (Se = ge.payload, typeof Se == "function") {
                  Q = Se.call(Qe, Q, N);
                  break e;
                }
                Q = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = ge.payload, N = typeof Se == "function" ? Se.call(Qe, Q, N) : Se, N == null) break e;
                Q = h({}, Q, N);
                break e;
              case 2:
                Qn = !0;
            }
          }
          N = S.callback, N !== null && (e.flags |= 64, M && (e.flags |= 8192), M = u.callbacks, M === null ? u.callbacks = [N] : M.push(N));
        } else
          M = {
            lane: N,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, H === null ? (R = H = M, A = Q) : H = H.next = M, y |= N;
        if (S = S.next, S === null) {
          if (S = u.shared.pending, S === null)
            break;
          M = S, S = M.next, M.next = null, u.lastBaseUpdate = M, u.shared.pending = null;
        }
      } while (!0);
      H === null && (A = Q), u.baseState = A, u.firstBaseUpdate = R, u.lastBaseUpdate = H, f === null && (u.shared.lanes = 0), $n |= y, e.lanes = y, e.memoizedState = Q;
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
  var ai = V(null), Sr = V(0);
  function Sd(e, t) {
    e = Ln, x(Sr, e), x(ai, t), Ln = e | t.baseLanes;
  }
  function Ou() {
    x(Sr, Ln), x(ai, ai.current);
  }
  function _u() {
    Ln = Sr.current, J(ai), J(Sr);
  }
  var Yn = 0, ke = null, Ve = null, tt = null, xr = !1, ii = !1, Aa = !1, wr = 0, rl = 0, li = null, Pb = 0;
  function $e() {
    throw Error(o(321));
  }
  function Nu(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!jt(e[a], t[a])) return !1;
    return !0;
  }
  function Mu(e, t, a, l, u, f) {
    return Yn = f, ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = e === null || e.memoizedState === null ? ap : ip, Aa = !1, f = a(l, u), Aa = !1, ii && (f = wd(
      t,
      a,
      l,
      u
    )), xd(e), f;
  }
  function xd(e) {
    O.H = zr;
    var t = Ve !== null && Ve.next !== null;
    if (Yn = 0, tt = Ve = ke = null, xr = !1, rl = 0, li = null, t) throw Error(o(300));
    e === null || ct || (e = e.dependencies, e !== null && hr(e) && (ct = !0));
  }
  function wd(e, t, a, l) {
    ke = e;
    var u = 0;
    do {
      if (ii && (li = null), rl = 0, ii = !1, 25 <= u) throw Error(o(301));
      if (u += 1, tt = Ve = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      O.H = t0, f = t(a, l);
    } while (ii);
    return f;
  }
  function Kb() {
    var e = O.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ol(t) : t, e = e.useState()[0], (Ve !== null ? Ve.memoizedState : null) !== e && (ke.flags |= 1024), t;
  }
  function Uu() {
    var e = wr !== 0;
    return wr = 0, e;
  }
  function Lu(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Bu(e) {
    if (xr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      xr = !1;
    }
    Yn = 0, tt = Ve = ke = null, ii = !1, rl = wr = 0, li = null;
  }
  function Ct() {
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
        throw ke.alternate === null ? Error(o(467)) : Error(o(310));
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
  function ju() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ol(e) {
    var t = rl;
    return rl += 1, li === null && (li = []), e = hd(li, e, t), t = ke, (tt === null ? t.memoizedState : tt.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? ap : ip), e;
  }
  function Er(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ol(e);
      if (e.$$typeof === F) return yt(e);
    }
    throw Error(o(438, String(e)));
  }
  function qu(e) {
    var t = null, a = ke.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = ke.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ju(), ke.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = we;
    return t.index++, a;
  }
  function Dn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ar(e) {
    var t = nt();
    return Hu(t, Ve, e);
  }
  function Hu(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = a;
    var u = e.baseQueue, f = l.pending;
    if (f !== null) {
      if (u !== null) {
        var y = u.next;
        u.next = f.next, f.next = y;
      }
      t.baseQueue = u = f, l.pending = null;
    }
    if (f = e.baseState, u === null) e.memoizedState = f;
    else {
      t = u.next;
      var S = y = null, A = null, R = t, H = !1;
      do {
        var Q = R.lane & -536870913;
        if (Q !== R.lane ? (Me & Q) === Q : (Yn & Q) === Q) {
          var N = R.revertLane;
          if (N === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), Q === ti && (H = !0);
          else if ((Yn & N) === N) {
            R = R.next, N === ti && (H = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, A === null ? (S = A = Q, y = f) : A = A.next = Q, ke.lanes |= N, $n |= N;
          Q = R.action, Aa && a(f, Q), f = R.hasEagerState ? R.eagerState : a(f, Q);
        } else
          N = {
            lane: Q,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, A === null ? (S = A = N, y = f) : A = A.next = N, ke.lanes |= Q, $n |= Q;
        R = R.next;
      } while (R !== null && R !== t);
      if (A === null ? y = f : A.next = S, !jt(f, e.memoizedState) && (ct = !0, H && (a = ni, a !== null)))
        throw a;
      e.memoizedState = f, e.baseState = y, e.baseQueue = A, l.lastRenderedState = f;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Vu(e) {
    var t = nt(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, u = a.pending, f = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var y = u = u.next;
      do
        f = e(f, y.action), y = y.next;
      while (y !== u);
      jt(f, t.memoizedState) || (ct = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
    }
    return [f, l];
  }
  function Ed(e, t, a) {
    var l = ke, u = nt(), f = Le;
    if (f) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var y = !jt(
      (Ve || u).memoizedState,
      a
    );
    y && (u.memoizedState = a, ct = !0), u = u.queue;
    var S = Cd.bind(null, l, u, e);
    if (ul(2048, 8, S, [e]), u.getSnapshot !== t || y || tt !== null && tt.memoizedState.tag & 1) {
      if (l.flags |= 2048, ri(
        9,
        Tr(),
        Td.bind(
          null,
          l,
          u,
          a,
          t
        ),
        null
      ), Fe === null) throw Error(o(349));
      f || (Yn & 124) !== 0 || Ad(l, t, a);
    }
    return a;
  }
  function Ad(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ke.updateQueue, t === null ? (t = ju(), ke.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Td(e, t, a, l) {
    t.value = a, t.getSnapshot = l, kd(t) && zd(e);
  }
  function Cd(e, t, a) {
    return a(function() {
      kd(t) && zd(e);
    });
  }
  function kd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !jt(e, a);
    } catch {
      return !0;
    }
  }
  function zd(e) {
    var t = Ja(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function Iu(e) {
    var t = Ct();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Aa) {
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
      lastRenderedReducer: Dn,
      lastRenderedState: e
    }, t;
  }
  function Rd(e, t, a, l) {
    return e.baseState = a, Hu(
      e,
      Ve,
      typeof l == "function" ? l : Dn
    );
  }
  function Zb(e, t, a, l, u) {
    if (kr(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var f = {
        payload: u,
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
      O.T !== null ? a(!0) : f.isTransition = !1, l(f), a = t.pending, a === null ? (f.next = t.pending = f, Dd(t, f)) : (f.next = a.next, t.pending = a.next = f);
    }
  }
  function Dd(e, t) {
    var a = t.action, l = t.payload, u = e.state;
    if (t.isTransition) {
      var f = O.T, y = {};
      O.T = y;
      try {
        var S = a(u, l), A = O.S;
        A !== null && A(y, S), Od(e, t, S);
      } catch (R) {
        Qu(e, t, R);
      } finally {
        O.T = f;
      }
    } else
      try {
        f = a(u, l), Od(e, t, f);
      } catch (R) {
        Qu(e, t, R);
      }
  }
  function Od(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        _d(e, t, l);
      },
      function(l) {
        return Qu(e, t, l);
      }
    ) : _d(e, t, a);
  }
  function _d(e, t, a) {
    t.status = "fulfilled", t.value = a, Nd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Dd(e, a)));
  }
  function Qu(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Nd(t), t = t.next;
      while (t !== l);
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
  function Ud(e, t) {
    if (Le) {
      var a = Fe.formState;
      if (a !== null) {
        e: {
          var l = ke;
          if (Le) {
            if (Je) {
              t: {
                for (var u = Je, f = dn; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (u = un(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                f = u.data, u = f === "F!" || f === "F" ? u : null;
              }
              if (u) {
                Je = un(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            Sa(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = Ct(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Md,
      lastRenderedState: t
    }, a.queue = l, a = ep.bind(
      null,
      ke,
      l
    ), l.dispatch = a, l = Iu(!1), f = Pu.bind(
      null,
      ke,
      !1,
      l.queue
    ), l = Ct(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, a = Zb.bind(
      null,
      ke,
      u,
      f,
      a
    ), u.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function Ld(e) {
    var t = nt();
    return Bd(t, Ve, e);
  }
  function Bd(e, t, a) {
    if (t = Hu(
      e,
      t,
      Md
    )[0], e = Ar(Dn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = ol(t);
      } catch (y) {
        throw y === tl ? br : y;
      }
    else l = t;
    t = nt();
    var u = t.queue, f = u.dispatch;
    return a !== t.memoizedState && (ke.flags |= 2048, ri(
      9,
      Tr(),
      Jb.bind(null, u, a),
      null
    )), [l, f, e];
  }
  function Jb(e, t) {
    e.action = t;
  }
  function jd(e) {
    var t = nt(), a = Ve;
    if (a !== null)
      return Bd(t, a, e);
    nt(), t = t.memoizedState, a = nt();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function ri(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = ke.updateQueue, t === null && (t = ju(), ke.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Tr() {
    return { destroy: void 0, resource: void 0 };
  }
  function qd() {
    return nt().memoizedState;
  }
  function Cr(e, t, a, l) {
    var u = Ct();
    l = l === void 0 ? null : l, ke.flags |= e, u.memoizedState = ri(
      1 | t,
      Tr(),
      a,
      l
    );
  }
  function ul(e, t, a, l) {
    var u = nt();
    l = l === void 0 ? null : l;
    var f = u.memoizedState.inst;
    Ve !== null && l !== null && Nu(l, Ve.memoizedState.deps) ? u.memoizedState = ri(t, f, a, l) : (ke.flags |= e, u.memoizedState = ri(
      1 | t,
      f,
      a,
      l
    ));
  }
  function Hd(e, t) {
    Cr(8390656, 8, e, t);
  }
  function Vd(e, t) {
    ul(2048, 8, e, t);
  }
  function Id(e, t) {
    return ul(4, 2, e, t);
  }
  function Qd(e, t) {
    return ul(4, 4, e, t);
  }
  function Gd(e, t) {
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
  function Fd(e, t, a) {
    a = a != null ? a.concat([e]) : null, ul(4, 4, Gd.bind(null, t, e), a);
  }
  function Gu() {
  }
  function Yd(e, t) {
    var a = nt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Nu(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Xd(e, t) {
    var a = nt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Nu(t, l[1]))
      return l[0];
    if (l = e(), Aa) {
      he(!0);
      try {
        e();
      } finally {
        he(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Fu(e, t, a) {
    return a === void 0 || (Yn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Zp(), ke.lanes |= e, $n |= e, a);
  }
  function Pd(e, t, a, l) {
    return jt(a, t) ? a : ai.current !== null ? (e = Fu(e, a, l), jt(e, t) || (ct = !0), e) : (Yn & 42) === 0 ? (ct = !0, e.memoizedState = a) : (e = Zp(), ke.lanes |= e, $n |= e, t);
  }
  function Kd(e, t, a, l, u) {
    var f = Y.p;
    Y.p = f !== 0 && 8 > f ? f : 8;
    var y = O.T, S = {};
    O.T = S, Pu(e, !1, t, a);
    try {
      var A = u(), R = O.S;
      if (R !== null && R(S, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var H = Xb(
          A,
          l
        );
        sl(
          e,
          t,
          H,
          Qt(e)
        );
      } else
        sl(
          e,
          t,
          l,
          Qt(e)
        );
    } catch (Q) {
      sl(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Q },
        Qt()
      );
    } finally {
      Y.p = f, O.T = y;
    }
  }
  function Wb() {
  }
  function Yu(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Zd(e).queue;
    Kd(
      e,
      u,
      t,
      G,
      a === null ? Wb : function() {
        return Jd(e), a(l);
      }
    );
  }
  function Zd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: G
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
        lastRenderedReducer: Dn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Jd(e) {
    var t = Zd(e).next.queue;
    sl(e, t, {}, Qt());
  }
  function Xu() {
    return yt(kl);
  }
  function Wd() {
    return nt().memoizedState;
  }
  function $d() {
    return nt().memoizedState;
  }
  function $b(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Qt();
          e = Gn(a);
          var l = Fn(t, e, a);
          l !== null && (Gt(l, t, a), al(l, t, a)), t = { cache: Eu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function e0(e, t, a) {
    var l = Qt();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, kr(e) ? tp(t, a) : (a = pu(e, t, a, l), a !== null && (Gt(a, e, l), np(a, t, l)));
  }
  function ep(e, t, a) {
    var l = Qt();
    sl(e, t, a, l);
  }
  function sl(e, t, a, l) {
    var u = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (kr(e)) tp(t, u);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var y = t.lastRenderedState, S = f(y, a);
          if (u.hasEagerState = !0, u.eagerState = S, jt(S, y))
            return cr(e, t, u, 0), Fe === null && sr(), !1;
        } catch {
        } finally {
        }
      if (a = pu(e, t, u, l), a !== null)
        return Gt(a, e, l), np(a, t, l), !0;
    }
    return !1;
  }
  function Pu(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Cs(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, kr(e)) {
      if (t) throw Error(o(479));
    } else
      t = pu(
        e,
        a,
        l,
        2
      ), t !== null && Gt(t, e, 2);
  }
  function kr(e) {
    var t = e.alternate;
    return e === ke || t !== null && t === ke;
  }
  function tp(e, t) {
    ii = xr = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function np(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, cf(e, a);
    }
  }
  var zr = {
    readContext: yt,
    use: Er,
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
  }, ap = {
    readContext: yt,
    use: Er,
    useCallback: function(e, t) {
      return Ct().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: yt,
    useEffect: Hd,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Cr(
        4194308,
        4,
        Gd.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Cr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Cr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Ct();
      t = t === void 0 ? null : t;
      var l = e();
      if (Aa) {
        he(!0);
        try {
          e();
        } finally {
          he(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = Ct();
      if (a !== void 0) {
        var u = a(t);
        if (Aa) {
          he(!0);
          try {
            a(t);
          } finally {
            he(!1);
          }
        }
      } else u = t;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = e0.bind(
        null,
        ke,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ct();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Iu(e);
      var t = e.queue, a = ep.bind(null, ke, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Gu,
    useDeferredValue: function(e, t) {
      var a = Ct();
      return Fu(a, e, t);
    },
    useTransition: function() {
      var e = Iu(!1);
      return e = Kd.bind(
        null,
        ke,
        e.queue,
        !0,
        !1
      ), Ct().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = ke, u = Ct();
      if (Le) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), Fe === null)
          throw Error(o(349));
        (Me & 124) !== 0 || Ad(l, t, a);
      }
      u.memoizedState = a;
      var f = { value: a, getSnapshot: t };
      return u.queue = f, Hd(Cd.bind(null, l, f, e), [
        e
      ]), l.flags |= 2048, ri(
        9,
        Tr(),
        Td.bind(
          null,
          l,
          f,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Ct(), t = Fe.identifierPrefix;
      if (Le) {
        var a = kn, l = Cn;
        a = (l & ~(1 << 32 - ve(l) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = wr++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = Pb++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Xu,
    useFormState: Ud,
    useActionState: Ud,
    useOptimistic: function(e) {
      var t = Ct();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Pu.bind(
        null,
        ke,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: qu,
    useCacheRefresh: function() {
      return Ct().memoizedState = $b.bind(
        null,
        ke
      );
    }
  }, ip = {
    readContext: yt,
    use: Er,
    useCallback: Yd,
    useContext: yt,
    useEffect: Vd,
    useImperativeHandle: Fd,
    useInsertionEffect: Id,
    useLayoutEffect: Qd,
    useMemo: Xd,
    useReducer: Ar,
    useRef: qd,
    useState: function() {
      return Ar(Dn);
    },
    useDebugValue: Gu,
    useDeferredValue: function(e, t) {
      var a = nt();
      return Pd(
        a,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ar(Dn)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : ol(e),
        t
      ];
    },
    useSyncExternalStore: Ed,
    useId: Wd,
    useHostTransitionStatus: Xu,
    useFormState: Ld,
    useActionState: Ld,
    useOptimistic: function(e, t) {
      var a = nt();
      return Rd(a, Ve, e, t);
    },
    useMemoCache: qu,
    useCacheRefresh: $d
  }, t0 = {
    readContext: yt,
    use: Er,
    useCallback: Yd,
    useContext: yt,
    useEffect: Vd,
    useImperativeHandle: Fd,
    useInsertionEffect: Id,
    useLayoutEffect: Qd,
    useMemo: Xd,
    useReducer: Vu,
    useRef: qd,
    useState: function() {
      return Vu(Dn);
    },
    useDebugValue: Gu,
    useDeferredValue: function(e, t) {
      var a = nt();
      return Ve === null ? Fu(a, e, t) : Pd(
        a,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Vu(Dn)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : ol(e),
        t
      ];
    },
    useSyncExternalStore: Ed,
    useId: Wd,
    useHostTransitionStatus: Xu,
    useFormState: jd,
    useActionState: jd,
    useOptimistic: function(e, t) {
      var a = nt();
      return Ve !== null ? Rd(a, Ve, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: qu,
    useCacheRefresh: $d
  }, oi = null, cl = 0;
  function Rr(e) {
    var t = cl;
    return cl += 1, oi === null && (oi = []), hd(oi, e, t);
  }
  function fl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Dr(e, t) {
    throw t.$$typeof === v ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function lp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function rp(e) {
    function t(C, T) {
      if (e) {
        var z = C.deletions;
        z === null ? (C.deletions = [T], C.flags |= 16) : z.push(T);
      }
    }
    function a(C, T) {
      if (!e) return null;
      for (; T !== null; )
        t(C, T), T = T.sibling;
      return null;
    }
    function l(C) {
      for (var T = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? T.set(C.key, C) : T.set(C.index, C), C = C.sibling;
      return T;
    }
    function u(C, T) {
      return C = Tn(C, T), C.index = 0, C.sibling = null, C;
    }
    function f(C, T, z) {
      return C.index = z, e ? (z = C.alternate, z !== null ? (z = z.index, z < T ? (C.flags |= 67108866, T) : z) : (C.flags |= 67108866, T)) : (C.flags |= 1048576, T);
    }
    function y(C) {
      return e && C.alternate === null && (C.flags |= 67108866), C;
    }
    function S(C, T, z, I) {
      return T === null || T.tag !== 6 ? (T = hu(z, C.mode, I), T.return = C, T) : (T = u(T, z), T.return = C, T);
    }
    function A(C, T, z, I) {
      var ue = z.type;
      return ue === k ? H(
        C,
        T,
        z.props.children,
        I,
        z.key
      ) : T !== null && (T.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === P && lp(ue) === T.type) ? (T = u(T, z.props), fl(T, z), T.return = C, T) : (T = dr(
        z.type,
        z.key,
        z.props,
        null,
        C.mode,
        I
      ), fl(T, z), T.return = C, T);
    }
    function R(C, T, z, I) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== z.containerInfo || T.stateNode.implementation !== z.implementation ? (T = gu(z, C.mode, I), T.return = C, T) : (T = u(T, z.children || []), T.return = C, T);
    }
    function H(C, T, z, I, ue) {
      return T === null || T.tag !== 7 ? (T = ga(
        z,
        C.mode,
        I,
        ue
      ), T.return = C, T) : (T = u(T, z), T.return = C, T);
    }
    function Q(C, T, z) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = hu(
          "" + T,
          C.mode,
          z
        ), T.return = C, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case E:
            return z = dr(
              T.type,
              T.key,
              T.props,
              null,
              C.mode,
              z
            ), fl(z, T), z.return = C, z;
          case w:
            return T = gu(
              T,
              C.mode,
              z
            ), T.return = C, T;
          case P:
            var I = T._init;
            return T = I(T._payload), Q(C, T, z);
        }
        if (ie(T) || ne(T))
          return T = ga(
            T,
            C.mode,
            z,
            null
          ), T.return = C, T;
        if (typeof T.then == "function")
          return Q(C, Rr(T), z);
        if (T.$$typeof === F)
          return Q(
            C,
            gr(C, T),
            z
          );
        Dr(C, T);
      }
      return null;
    }
    function N(C, T, z, I) {
      var ue = T !== null ? T.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return ue !== null ? null : S(C, T, "" + z, I);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case E:
            return z.key === ue ? A(C, T, z, I) : null;
          case w:
            return z.key === ue ? R(C, T, z, I) : null;
          case P:
            return ue = z._init, z = ue(z._payload), N(C, T, z, I);
        }
        if (ie(z) || ne(z))
          return ue !== null ? null : H(C, T, z, I, null);
        if (typeof z.then == "function")
          return N(
            C,
            T,
            Rr(z),
            I
          );
        if (z.$$typeof === F)
          return N(
            C,
            T,
            gr(C, z),
            I
          );
        Dr(C, z);
      }
      return null;
    }
    function M(C, T, z, I, ue) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return C = C.get(z) || null, S(T, C, "" + I, ue);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case E:
            return C = C.get(
              I.key === null ? z : I.key
            ) || null, A(T, C, I, ue);
          case w:
            return C = C.get(
              I.key === null ? z : I.key
            ) || null, R(T, C, I, ue);
          case P:
            var De = I._init;
            return I = De(I._payload), M(
              C,
              T,
              z,
              I,
              ue
            );
        }
        if (ie(I) || ne(I))
          return C = C.get(z) || null, H(T, C, I, ue, null);
        if (typeof I.then == "function")
          return M(
            C,
            T,
            z,
            Rr(I),
            ue
          );
        if (I.$$typeof === F)
          return M(
            C,
            T,
            z,
            gr(T, I),
            ue
          );
        Dr(T, I);
      }
      return null;
    }
    function Se(C, T, z, I) {
      for (var ue = null, De = null, me = T, ye = T = 0, dt = null; me !== null && ye < z.length; ye++) {
        me.index > ye ? (dt = me, me = null) : dt = me.sibling;
        var Ue = N(
          C,
          me,
          z[ye],
          I
        );
        if (Ue === null) {
          me === null && (me = dt);
          break;
        }
        e && me && Ue.alternate === null && t(C, me), T = f(Ue, T, ye), De === null ? ue = Ue : De.sibling = Ue, De = Ue, me = dt;
      }
      if (ye === z.length)
        return a(C, me), Le && ba(C, ye), ue;
      if (me === null) {
        for (; ye < z.length; ye++)
          me = Q(C, z[ye], I), me !== null && (T = f(
            me,
            T,
            ye
          ), De === null ? ue = me : De.sibling = me, De = me);
        return Le && ba(C, ye), ue;
      }
      for (me = l(me); ye < z.length; ye++)
        dt = M(
          me,
          C,
          ye,
          z[ye],
          I
        ), dt !== null && (e && dt.alternate !== null && me.delete(
          dt.key === null ? ye : dt.key
        ), T = f(
          dt,
          T,
          ye
        ), De === null ? ue = dt : De.sibling = dt, De = dt);
      return e && me.forEach(function(ua) {
        return t(C, ua);
      }), Le && ba(C, ye), ue;
    }
    function ge(C, T, z, I) {
      if (z == null) throw Error(o(151));
      for (var ue = null, De = null, me = T, ye = T = 0, dt = null, Ue = z.next(); me !== null && !Ue.done; ye++, Ue = z.next()) {
        me.index > ye ? (dt = me, me = null) : dt = me.sibling;
        var ua = N(C, me, Ue.value, I);
        if (ua === null) {
          me === null && (me = dt);
          break;
        }
        e && me && ua.alternate === null && t(C, me), T = f(ua, T, ye), De === null ? ue = ua : De.sibling = ua, De = ua, me = dt;
      }
      if (Ue.done)
        return a(C, me), Le && ba(C, ye), ue;
      if (me === null) {
        for (; !Ue.done; ye++, Ue = z.next())
          Ue = Q(C, Ue.value, I), Ue !== null && (T = f(Ue, T, ye), De === null ? ue = Ue : De.sibling = Ue, De = Ue);
        return Le && ba(C, ye), ue;
      }
      for (me = l(me); !Ue.done; ye++, Ue = z.next())
        Ue = M(me, C, ye, Ue.value, I), Ue !== null && (e && Ue.alternate !== null && me.delete(Ue.key === null ? ye : Ue.key), T = f(Ue, T, ye), De === null ? ue = Ue : De.sibling = Ue, De = Ue);
      return e && me.forEach(function(n1) {
        return t(C, n1);
      }), Le && ba(C, ye), ue;
    }
    function Qe(C, T, z, I) {
      if (typeof z == "object" && z !== null && z.type === k && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case E:
            e: {
              for (var ue = z.key; T !== null; ) {
                if (T.key === ue) {
                  if (ue = z.type, ue === k) {
                    if (T.tag === 7) {
                      a(
                        C,
                        T.sibling
                      ), I = u(
                        T,
                        z.props.children
                      ), I.return = C, C = I;
                      break e;
                    }
                  } else if (T.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === P && lp(ue) === T.type) {
                    a(
                      C,
                      T.sibling
                    ), I = u(T, z.props), fl(I, z), I.return = C, C = I;
                    break e;
                  }
                  a(C, T);
                  break;
                } else t(C, T);
                T = T.sibling;
              }
              z.type === k ? (I = ga(
                z.props.children,
                C.mode,
                I,
                z.key
              ), I.return = C, C = I) : (I = dr(
                z.type,
                z.key,
                z.props,
                null,
                C.mode,
                I
              ), fl(I, z), I.return = C, C = I);
            }
            return y(C);
          case w:
            e: {
              for (ue = z.key; T !== null; ) {
                if (T.key === ue)
                  if (T.tag === 4 && T.stateNode.containerInfo === z.containerInfo && T.stateNode.implementation === z.implementation) {
                    a(
                      C,
                      T.sibling
                    ), I = u(T, z.children || []), I.return = C, C = I;
                    break e;
                  } else {
                    a(C, T);
                    break;
                  }
                else t(C, T);
                T = T.sibling;
              }
              I = gu(z, C.mode, I), I.return = C, C = I;
            }
            return y(C);
          case P:
            return ue = z._init, z = ue(z._payload), Qe(
              C,
              T,
              z,
              I
            );
        }
        if (ie(z))
          return Se(
            C,
            T,
            z,
            I
          );
        if (ne(z)) {
          if (ue = ne(z), typeof ue != "function") throw Error(o(150));
          return z = ue.call(z), ge(
            C,
            T,
            z,
            I
          );
        }
        if (typeof z.then == "function")
          return Qe(
            C,
            T,
            Rr(z),
            I
          );
        if (z.$$typeof === F)
          return Qe(
            C,
            T,
            gr(C, z),
            I
          );
        Dr(C, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, T !== null && T.tag === 6 ? (a(C, T.sibling), I = u(T, z), I.return = C, C = I) : (a(C, T), I = hu(z, C.mode, I), I.return = C, C = I), y(C)) : a(C, T);
    }
    return function(C, T, z, I) {
      try {
        cl = 0;
        var ue = Qe(
          C,
          T,
          z,
          I
        );
        return oi = null, ue;
      } catch (me) {
        if (me === tl || me === br) throw me;
        var De = qt(29, me, null, C.mode);
        return De.lanes = I, De.return = C, De;
      } finally {
      }
    };
  }
  var ui = rp(!0), op = rp(!1), en = V(null), pn = null;
  function Xn(e) {
    var t = e.alternate;
    x(lt, lt.current & 1), x(en, e), pn === null && (t === null || ai.current !== null || t.memoizedState !== null) && (pn = e);
  }
  function up(e) {
    if (e.tag === 22) {
      if (x(lt, lt.current), x(en, e), pn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (pn = e);
      }
    } else Pn();
  }
  function Pn() {
    x(lt, lt.current), x(en, en.current);
  }
  function On(e) {
    J(en), pn === e && (pn = null), J(lt);
  }
  var lt = V(0);
  function Or(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || js(a)))
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
  function Ku(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : h({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Zu = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Qt(), u = Gn(l);
      u.payload = t, a != null && (u.callback = a), t = Fn(e, u, l), t !== null && (Gt(t, e, l), al(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Qt(), u = Gn(l);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = Fn(e, u, l), t !== null && (Gt(t, e, l), al(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Qt(), l = Gn(a);
      l.tag = 2, t != null && (l.callback = t), t = Fn(e, l, a), t !== null && (Gt(t, e, a), al(t, e, a));
    }
  };
  function sp(e, t, a, l, u, f, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, y) : t.prototype && t.prototype.isPureReactComponent ? !Xi(a, l) || !Xi(u, f) : !0;
  }
  function cp(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Zu.enqueueReplaceState(t, t.state, null);
  }
  function Ta(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = h({}, a));
      for (var u in e)
        a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  var _r = typeof reportError == "function" ? reportError : function(e) {
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
    _r(e);
  }
  function dp(e) {
    console.error(e);
  }
  function pp(e) {
    _r(e);
  }
  function Nr(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function mp(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Ju(e, t, a) {
    return a = Gn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Nr(e, t);
    }, a;
  }
  function hp(e) {
    return e = Gn(e), e.tag = 3, e;
  }
  function gp(e, t, a, l) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = l.value;
      e.payload = function() {
        return u(f);
      }, e.callback = function() {
        mp(t, a, l);
      };
    }
    var y = a.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
      mp(t, a, l), typeof u != "function" && (ea === null ? ea = /* @__PURE__ */ new Set([this]) : ea.add(this));
      var S = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function n0(e, t, a, l, u) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Wi(
        t,
        a,
        u,
        !0
      ), a = en.current, a !== null) {
        switch (a.tag) {
          case 13:
            return pn === null ? xs() : a.alternate === null && We === 0 && (We = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, l === Cu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Es(e, l, u)), !1;
          case 22:
            return a.flags |= 65536, l === Cu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Es(e, l, u)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return Es(e, l, u), xs(), !1;
    }
    if (Le)
      return t = en.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, l !== vu && (e = Error(o(422), { cause: l }), Ji(Zt(e, a)))) : (l !== vu && (t = Error(o(423), {
        cause: l
      }), Ji(
        Zt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = Zt(l, a), u = Ju(
        e.stateNode,
        l,
        u
      ), Ru(e, u), We !== 4 && (We = 2)), !1;
    var f = Error(o(520), { cause: l });
    if (f = Zt(f, a), bl === null ? bl = [f] : bl.push(f), We !== 4 && (We = 2), t === null) return !0;
    l = Zt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = u & -u, a.lanes |= e, e = Ju(a.stateNode, l, e), Ru(a, e), !1;
        case 1:
          if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ea === null || !ea.has(f))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = hp(u), gp(
              u,
              e,
              a,
              l
            ), Ru(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var yp = Error(o(461)), ct = !1;
  function pt(e, t, a, l) {
    t.child = e === null ? op(t, null, a, l) : ui(
      t,
      e.child,
      a,
      l
    );
  }
  function bp(e, t, a, l, u) {
    a = a.render;
    var f = t.ref;
    if ("ref" in l) {
      var y = {};
      for (var S in l)
        S !== "ref" && (y[S] = l[S]);
    } else y = l;
    return wa(t), l = Mu(
      e,
      t,
      a,
      y,
      f,
      u
    ), S = Uu(), e !== null && !ct ? (Lu(e, t, u), _n(e, t, u)) : (Le && S && yu(t), t.flags |= 1, pt(e, t, l, u), t.child);
  }
  function vp(e, t, a, l, u) {
    if (e === null) {
      var f = a.type;
      return typeof f == "function" && !mu(f) && f.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = f, Sp(
        e,
        t,
        f,
        l,
        u
      )) : (e = dr(
        a.type,
        null,
        l,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !ls(e, u)) {
      var y = f.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xi, a(y, l) && e.ref === t.ref)
        return _n(e, t, u);
    }
    return t.flags |= 1, e = Tn(f, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Sp(e, t, a, l, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Xi(f, l) && e.ref === t.ref)
        if (ct = !1, t.pendingProps = l = f, ls(e, u))
          (e.flags & 131072) !== 0 && (ct = !0);
        else
          return t.lanes = e.lanes, _n(e, t, u);
    }
    return Wu(
      e,
      t,
      a,
      l,
      u
    );
  }
  function xp(e, t, a) {
    var l = t.pendingProps, u = l.children, f = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = f !== null ? f.baseLanes | a : a, e !== null) {
          for (u = t.child = e.child, f = 0; u !== null; )
            f = f | u.lanes | u.childLanes, u = u.sibling;
          t.childLanes = f & ~l;
        } else t.childLanes = 0, t.child = null;
        return wp(
          e,
          t,
          l,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && yr(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? Sd(t, f) : Ou(), up(t);
      else
        return t.lanes = t.childLanes = 536870912, wp(
          e,
          t,
          f !== null ? f.baseLanes | a : a,
          a
        );
    } else
      f !== null ? (yr(t, f.cachePool), Sd(t, f), Pn(), t.memoizedState = null) : (e !== null && yr(t, null), Ou(), Pn());
    return pt(e, t, u, a), t.child;
  }
  function wp(e, t, a, l) {
    var u = Tu();
    return u = u === null ? null : { parent: it._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && yr(t, null), Ou(), up(t), e !== null && Wi(e, t, l, !0), null;
  }
  function Mr(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Wu(e, t, a, l, u) {
    return wa(t), a = Mu(
      e,
      t,
      a,
      l,
      void 0,
      u
    ), l = Uu(), e !== null && !ct ? (Lu(e, t, u), _n(e, t, u)) : (Le && l && yu(t), t.flags |= 1, pt(e, t, a, u), t.child);
  }
  function Ep(e, t, a, l, u, f) {
    return wa(t), t.updateQueue = null, a = wd(
      t,
      l,
      a,
      u
    ), xd(e), l = Uu(), e !== null && !ct ? (Lu(e, t, f), _n(e, t, f)) : (Le && l && yu(t), t.flags |= 1, pt(e, t, a, f), t.child);
  }
  function Ap(e, t, a, l, u) {
    if (wa(t), t.stateNode === null) {
      var f = Wa, y = a.contextType;
      typeof y == "object" && y !== null && (f = yt(y)), f = new a(l, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Zu, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = l, f.state = t.memoizedState, f.refs = {}, ku(t), y = a.contextType, f.context = typeof y == "object" && y !== null ? yt(y) : Wa, f.state = t.memoizedState, y = a.getDerivedStateFromProps, typeof y == "function" && (Ku(
        t,
        a,
        y,
        l
      ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (y = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), y !== f.state && Zu.enqueueReplaceState(f, f.state, null), ll(t, l, f, u), il(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      f = t.stateNode;
      var S = t.memoizedProps, A = Ta(a, S);
      f.props = A;
      var R = f.context, H = a.contextType;
      y = Wa, typeof H == "object" && H !== null && (y = yt(H));
      var Q = a.getDerivedStateFromProps;
      H = typeof Q == "function" || typeof f.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, H || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S || R !== y) && cp(
        t,
        f,
        l,
        y
      ), Qn = !1;
      var N = t.memoizedState;
      f.state = N, ll(t, l, f, u), il(), R = t.memoizedState, S || N !== R || Qn ? (typeof Q == "function" && (Ku(
        t,
        a,
        Q,
        l
      ), R = t.memoizedState), (A = Qn || sp(
        t,
        a,
        A,
        l,
        N,
        R,
        y
      )) ? (H || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = R), f.props = l, f.state = R, f.context = y, l = A) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      f = t.stateNode, zu(e, t), y = t.memoizedProps, H = Ta(a, y), f.props = H, Q = t.pendingProps, N = f.context, R = a.contextType, A = Wa, typeof R == "object" && R !== null && (A = yt(R)), S = a.getDerivedStateFromProps, (R = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== Q || N !== A) && cp(
        t,
        f,
        l,
        A
      ), Qn = !1, N = t.memoizedState, f.state = N, ll(t, l, f, u), il();
      var M = t.memoizedState;
      y !== Q || N !== M || Qn || e !== null && e.dependencies !== null && hr(e.dependencies) ? (typeof S == "function" && (Ku(
        t,
        a,
        S,
        l
      ), M = t.memoizedState), (H = Qn || sp(
        t,
        a,
        H,
        l,
        N,
        M,
        A
      ) || e !== null && e.dependencies !== null && hr(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, M, A), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        l,
        M,
        A
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = M), f.props = l, f.state = M, f.context = A, l = H) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return f = l, Mr(e, t), l = (t.flags & 128) !== 0, f || l ? (f = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && l ? (t.child = ui(
      t,
      e.child,
      null,
      u
    ), t.child = ui(
      t,
      null,
      a,
      u
    )) : pt(e, t, a, u), t.memoizedState = f.state, e = t.child) : e = _n(
      e,
      t,
      u
    ), e;
  }
  function Tp(e, t, a, l) {
    return Zi(), t.flags |= 256, pt(e, t, a, l), t.child;
  }
  var $u = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function es(e) {
    return { baseLanes: e, cachePool: dd() };
  }
  function ts(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= tn), e;
  }
  function Cp(e, t, a) {
    var l = t.pendingProps, u = !1, f = (t.flags & 128) !== 0, y;
    if ((y = f) || (y = e !== null && e.memoizedState === null ? !1 : (lt.current & 2) !== 0), y && (u = !0, t.flags &= -129), y = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Le) {
        if (u ? Xn(t) : Pn(), Le) {
          var S = Je, A;
          if (A = S) {
            e: {
              for (A = S, S = dn; A.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break e;
                }
                if (A = un(
                  A.nextSibling
                ), A === null) {
                  S = null;
                  break e;
                }
              }
              S = A;
            }
            S !== null ? (t.memoizedState = {
              dehydrated: S,
              treeContext: ya !== null ? { id: Cn, overflow: kn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, A = qt(
              18,
              null,
              null,
              0
            ), A.stateNode = S, A.return = t, t.child = A, wt = t, Je = null, A = !0) : A = !1;
          }
          A || Sa(t);
        }
        if (S = t.memoizedState, S !== null && (S = S.dehydrated, S !== null))
          return js(S) ? t.lanes = 32 : t.lanes = 536870912, null;
        On(t);
      }
      return S = l.children, l = l.fallback, u ? (Pn(), u = t.mode, S = Ur(
        { mode: "hidden", children: S },
        u
      ), l = ga(
        l,
        u,
        a,
        null
      ), S.return = t, l.return = t, S.sibling = l, t.child = S, u = t.child, u.memoizedState = es(a), u.childLanes = ts(
        e,
        y,
        a
      ), t.memoizedState = $u, l) : (Xn(t), ns(t, S));
    }
    if (A = e.memoizedState, A !== null && (S = A.dehydrated, S !== null)) {
      if (f)
        t.flags & 256 ? (Xn(t), t.flags &= -257, t = as(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Pn(), t.child = e.child, t.flags |= 128, t = null) : (Pn(), u = l.fallback, S = t.mode, l = Ur(
          { mode: "visible", children: l.children },
          S
        ), u = ga(
          u,
          S,
          a,
          null
        ), u.flags |= 2, l.return = t, u.return = t, l.sibling = u, t.child = l, ui(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = es(a), l.childLanes = ts(
          e,
          y,
          a
        ), t.memoizedState = $u, t = u);
      else if (Xn(t), js(S)) {
        if (y = S.nextSibling && S.nextSibling.dataset, y) var R = y.dgst;
        y = R, l = Error(o(419)), l.stack = "", l.digest = y, Ji({ value: l, source: null, stack: null }), t = as(
          e,
          t,
          a
        );
      } else if (ct || Wi(e, t, a, !1), y = (a & e.childLanes) !== 0, ct || y) {
        if (y = Fe, y !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : qo(l), l = (l & (y.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== A.retryLane))
          throw A.retryLane = l, Ja(e, l), Gt(y, e, l), yp;
        S.data === "$?" || xs(), t = as(
          e,
          t,
          a
        );
      } else
        S.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = A.treeContext, Je = un(
          S.nextSibling
        ), wt = t, Le = !0, va = null, dn = !1, e !== null && (Wt[$t++] = Cn, Wt[$t++] = kn, Wt[$t++] = ya, Cn = e.id, kn = e.overflow, ya = t), t = ns(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (Pn(), u = l.fallback, S = t.mode, A = e.child, R = A.sibling, l = Tn(A, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = A.subtreeFlags & 65011712, R !== null ? u = Tn(R, u) : (u = ga(
      u,
      S,
      a,
      null
    ), u.flags |= 2), u.return = t, l.return = t, l.sibling = u, t.child = l, l = u, u = t.child, S = e.child.memoizedState, S === null ? S = es(a) : (A = S.cachePool, A !== null ? (R = it._currentValue, A = A.parent !== R ? { parent: R, pool: R } : A) : A = dd(), S = {
      baseLanes: S.baseLanes | a,
      cachePool: A
    }), u.memoizedState = S, u.childLanes = ts(
      e,
      y,
      a
    ), t.memoizedState = $u, l) : (Xn(t), a = e.child, e = a.sibling, a = Tn(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (y = t.deletions, y === null ? (t.deletions = [e], t.flags |= 16) : y.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ns(e, t) {
    return t = Ur(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ur(e, t) {
    return e = qt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function as(e, t, a) {
    return ui(t, e.child, null, a), e = ns(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function kp(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), xu(e.return, t, a);
  }
  function is(e, t, a, l, u) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: u
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = l, f.tail = a, f.tailMode = u);
  }
  function zp(e, t, a) {
    var l = t.pendingProps, u = l.revealOrder, f = l.tail;
    if (pt(e, t, l.children, a), l = lt.current, (l & 2) !== 0)
      l = l & 1 | 2, t.flags |= 128;
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
      l &= 1;
    }
    switch (x(lt, l), u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          e = a.alternate, e !== null && Or(e) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), is(
          t,
          !1,
          u,
          a,
          f
        );
        break;
      case "backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && Or(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = a, a = u, u = e;
        }
        is(
          t,
          !0,
          a,
          null,
          f
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
  function _n(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), $n |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Wi(
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
      for (e = t.child, a = Tn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Tn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ls(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && hr(e)));
  }
  function a0(e, t, a) {
    switch (t.tag) {
      case 3:
        Re(t, t.stateNode.containerInfo), In(t, it, e.memoizedState.cache), Zi();
        break;
      case 27:
      case 5:
        ot(t);
        break;
      case 4:
        Re(t, t.stateNode.containerInfo);
        break;
      case 10:
        In(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Xn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Cp(e, t, a) : (Xn(t), e = _n(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Xn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Wi(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), u) {
          if (l)
            return zp(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), x(lt, lt.current), l) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, xp(e, t, a);
      case 24:
        In(t, it, e.memoizedState.cache);
    }
    return _n(e, t, a);
  }
  function Rp(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ct = !0;
      else {
        if (!ls(e, a) && (t.flags & 128) === 0)
          return ct = !1, a0(
            e,
            t,
            a
          );
        ct = (e.flags & 131072) !== 0;
      }
    else
      ct = !1, Le && (t.flags & 1048576) !== 0 && ld(t, mr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType, u = l._init;
          if (l = u(l._payload), t.type = l, typeof l == "function")
            mu(l) ? (e = Ta(l, e), t.tag = 1, t = Ap(
              null,
              t,
              l,
              e,
              a
            )) : (t.tag = 0, t = Wu(
              null,
              t,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              if (u = l.$$typeof, u === fe) {
                t.tag = 11, t = bp(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              } else if (u === re) {
                t.tag = 14, t = vp(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = ae(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Wu(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, u = Ta(
          l,
          t.pendingProps
        ), Ap(
          e,
          t,
          l,
          u,
          a
        );
      case 3:
        e: {
          if (Re(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var f = t.memoizedState;
          u = f.element, zu(e, t), ll(t, l, null, a);
          var y = t.memoizedState;
          if (l = y.cache, In(t, it, l), l !== f.cache && wu(
            t,
            [it],
            a,
            !0
          ), il(), l = y.element, f.isDehydrated)
            if (f = {
              element: l,
              isDehydrated: !1,
              cache: y.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = Tp(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== u) {
              u = Zt(
                Error(o(424)),
                t
              ), Ji(u), t = Tp(
                e,
                t,
                l,
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
              for (Je = un(e.firstChild), wt = t, Le = !0, va = null, dn = !0, a = op(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Zi(), l === u) {
              t = _n(
                e,
                t,
                a
              );
              break e;
            }
            pt(
              e,
              t,
              l,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Mr(e, t), e === null ? (a = Nm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Le || (a = t.type, e = t.pendingProps, l = Kr(
          ee.current
        ).createElement(a), l[gt] = t, l[At] = e, ht(l, a, e), st(l), t.stateNode = l) : t.memoizedState = Nm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ot(t), e === null && Le && (l = t.stateNode = Dm(
          t.type,
          t.pendingProps,
          ee.current
        ), wt = t, dn = !0, u = Je, aa(t.type) ? (qs = u, Je = un(
          l.firstChild
        )) : Je = u), pt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Mr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Le && ((u = l = Je) && (l = O0(
          l,
          t.type,
          t.pendingProps,
          dn
        ), l !== null ? (t.stateNode = l, wt = t, Je = un(
          l.firstChild
        ), dn = !1, u = !0) : u = !1), u || Sa(t)), ot(t), u = t.type, f = t.pendingProps, y = e !== null ? e.memoizedProps : null, l = f.children, Us(u, f) ? l = null : y !== null && Us(u, y) && (t.flags |= 32), t.memoizedState !== null && (u = Mu(
          e,
          t,
          Kb,
          null,
          null,
          a
        ), kl._currentValue = u), Mr(e, t), pt(e, t, l, a), t.child;
      case 6:
        return e === null && Le && ((e = a = Je) && (a = _0(
          a,
          t.pendingProps,
          dn
        ), a !== null ? (t.stateNode = a, wt = t, Je = null, e = !0) : e = !1), e || Sa(t)), null;
      case 13:
        return Cp(e, t, a);
      case 4:
        return Re(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ui(
          t,
          null,
          l,
          a
        ) : pt(
          e,
          t,
          l,
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
        return pt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return pt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return pt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, In(t, t.type, l.value), pt(
          e,
          t,
          l.children,
          a
        ), t.child;
      case 9:
        return u = t.type._context, l = t.pendingProps.children, wa(t), u = yt(u), l = l(u), t.flags |= 1, pt(e, t, l, a), t.child;
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
        return zp(e, t, a);
      case 31:
        return l = t.pendingProps, a = t.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (a = Ur(
          l,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Tn(e.child, l), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return xp(e, t, a);
      case 24:
        return wa(t), l = yt(it), e === null ? (u = Tu(), u === null && (u = Fe, f = Eu(), u.pooledCache = f, f.refCount++, f !== null && (u.pooledCacheLanes |= a), u = f), t.memoizedState = {
          parent: l,
          cache: u
        }, ku(t), In(t, it, u)) : ((e.lanes & a) !== 0 && (zu(e, t), ll(t, null, null, a), il()), u = e.memoizedState, f = t.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), In(t, it, l)) : (l = f.cache, In(t, it, l), l !== u.cache && wu(
          t,
          [it],
          a,
          !0
        ))), pt(
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
  function Nn(e) {
    e.flags |= 4;
  }
  function Dp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !jm(t)) {
      if (t = en.current, t !== null && ((Me & 4194048) === Me ? pn !== null : (Me & 62914560) !== Me && (Me & 536870912) === 0 || t !== pn))
        throw nl = Cu, pd;
      e.flags |= 8192;
    }
  }
  function Lr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? uf() : 536870912, e.lanes |= t, di |= t);
  }
  function dl(e, t) {
    if (!Le)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function i0(e, t, a) {
    var l = t.pendingProps;
    switch (bu(t), t.tag) {
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
        return Ze(t), null;
      case 1:
        return Ze(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Rn(it), Pe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ki(t) ? Nn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ud())), Ze(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (Nn(t), a !== null ? (Ze(t), Dp(t, a)) : (Ze(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Nn(t), Ze(t), Dp(t, a)) : (Ze(t), t.flags &= -16777217) : (e.memoizedProps !== l && Nn(t), Ze(t), t.flags &= -16777217), null;
      case 27:
        xt(t), a = ee.current;
        var u = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== l && Nn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ze(t), null;
          }
          e = $.current, Ki(t) ? rd(t) : (e = Dm(u, l, a), t.stateNode = e, Nn(t));
        }
        return Ze(t), null;
      case 5:
        if (xt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Nn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ze(t), null;
          }
          if (e = $.current, Ki(t))
            rd(t);
          else {
            switch (u = Kr(
              ee.current
            ), e) {
              case 1:
                e = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof l.is == "string" ? u.createElement("select", { is: l.is }) : u.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? u.createElement(a, { is: l.is }) : u.createElement(a);
                }
            }
            e[gt] = t, e[At] = l;
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t)
                  break e;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            t.stateNode = e;
            e: switch (ht(e, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
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
        return Ze(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Nn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ee.current, Ki(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, u = wt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[gt] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Em(e.nodeValue, a)), e || Sa(t);
          } else
            e = Kr(e).createTextNode(
              l
            ), e[gt] = t, t.stateNode = e;
        }
        return Ze(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = Ki(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[gt] = t;
            } else
              Zi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ze(t), u = !1;
          } else
            u = ud(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (On(t), t) : (On(t), null);
        }
        if (On(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = t.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool);
          var f = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== u && (l.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Lr(t, t.updateQueue), Ze(t), null;
      case 4:
        return Pe(), e === null && Ds(t.stateNode.containerInfo), Ze(t), null;
      case 10:
        return Rn(t.type), Ze(t), null;
      case 19:
        if (J(lt), u = t.memoizedState, u === null) return Ze(t), null;
        if (l = (t.flags & 128) !== 0, f = u.rendering, f === null)
          if (l) dl(u, !1);
          else {
            if (We !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = Or(e), f !== null) {
                  for (t.flags |= 128, dl(u, !1), e = f.updateQueue, t.updateQueue = e, Lr(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    id(a, e), a = a.sibling;
                  return x(
                    lt,
                    lt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null && Ut() > qr && (t.flags |= 128, l = !0, dl(u, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Or(f), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, Lr(t, e), dl(u, !0), u.tail === null && u.tailMode === "hidden" && !f.alternate && !Le)
                return Ze(t), null;
            } else
              2 * Ut() - u.renderingStartTime > qr && a !== 536870912 && (t.flags |= 128, l = !0, dl(u, !1), t.lanes = 4194304);
          u.isBackwards ? (f.sibling = t.child, t.child = f) : (e = u.last, e !== null ? e.sibling = f : t.child = f, u.last = f);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Ut(), t.sibling = null, e = lt.current, x(lt, l ? e & 1 | 2 : e & 1), t) : (Ze(t), null);
      case 22:
      case 23:
        return On(t), _u(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ze(t), a = t.updateQueue, a !== null && Lr(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && J(Ea), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Rn(it), Ze(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function l0(e, t) {
    switch (bu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rn(it), Pe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return xt(t), null;
      case 13:
        if (On(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Zi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return J(lt), null;
      case 4:
        return Pe(), null;
      case 10:
        return Rn(t.type), null;
      case 22:
      case 23:
        return On(t), _u(), e !== null && J(Ea), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Rn(it), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Op(e, t) {
    switch (bu(t), t.tag) {
      case 3:
        Rn(it), Pe();
        break;
      case 26:
      case 27:
      case 5:
        xt(t);
        break;
      case 4:
        Pe();
        break;
      case 13:
        On(t);
        break;
      case 19:
        J(lt);
        break;
      case 10:
        Rn(t.type);
        break;
      case 22:
      case 23:
        On(t), _u(), e !== null && J(Ea);
        break;
      case 24:
        Rn(it);
    }
  }
  function pl(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var f = a.create, y = a.inst;
            l = f(), y.destroy = l;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (S) {
      Ge(t, t.return, S);
    }
  }
  function Kn(e, t, a) {
    try {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var y = l.inst, S = y.destroy;
            if (S !== void 0) {
              y.destroy = void 0, u = t;
              var A = a, R = S;
              try {
                R();
              } catch (H) {
                Ge(
                  u,
                  A,
                  H
                );
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (H) {
      Ge(t, t.return, H);
    }
  }
  function _p(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        vd(t, a);
      } catch (l) {
        Ge(e, e.return, l);
      }
    }
  }
  function Np(e, t, a) {
    a.props = Ta(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Ge(e, t, l);
    }
  }
  function ml(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (u) {
      Ge(e, t, u);
    }
  }
  function mn(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Ge(e, t, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          Ge(e, t, u);
        }
      else a.current = null;
  }
  function Mp(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (u) {
      Ge(e, e.return, u);
    }
  }
  function rs(e, t, a) {
    try {
      var l = e.stateNode;
      C0(l, e.type, a, t), l[At] = t;
    } catch (u) {
      Ge(e, e.return, u);
    }
  }
  function Up(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && aa(e.type) || e.tag === 4;
  }
  function os(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Up(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && aa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function us(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Pr));
    else if (l !== 4 && (l === 27 && aa(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (us(e, t, a), e = e.sibling; e !== null; )
        us(e, t, a), e = e.sibling;
  }
  function Br(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && aa(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Br(e, t, a), e = e.sibling; e !== null; )
        Br(e, t, a), e = e.sibling;
  }
  function Lp(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      ht(t, l, a), t[gt] = e, t[At] = a;
    } catch (f) {
      Ge(e, e.return, f);
    }
  }
  var Mn = !1, et = !1, ss = !1, Bp = typeof WeakSet == "function" ? WeakSet : Set, ft = null;
  function r0(e, t) {
    if (e = e.containerInfo, Ns = to, e = Pf(e), ou(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var u = l.anchorOffset, f = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break e;
            }
            var y = 0, S = -1, A = -1, R = 0, H = 0, Q = e, N = null;
            t: for (; ; ) {
              for (var M; Q !== a || u !== 0 && Q.nodeType !== 3 || (S = y + u), Q !== f || l !== 0 && Q.nodeType !== 3 || (A = y + l), Q.nodeType === 3 && (y += Q.nodeValue.length), (M = Q.firstChild) !== null; )
                N = Q, Q = M;
              for (; ; ) {
                if (Q === e) break t;
                if (N === a && ++R === u && (S = y), N === f && ++H === l && (A = y), (M = Q.nextSibling) !== null) break;
                Q = N, N = Q.parentNode;
              }
              Q = M;
            }
            a = S === -1 || A === -1 ? null : { start: S, end: A };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Ms = { focusedElem: e, selectionRange: a }, to = !1, ft = t; ft !== null; )
      if (t = ft, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, ft = e;
      else
        for (; ft !== null; ) {
          switch (t = ft, f = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                e = void 0, a = t, u = f.memoizedProps, f = f.memoizedState, l = a.stateNode;
                try {
                  var Se = Ta(
                    a.type,
                    u,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Se,
                    f
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ge) {
                  Ge(
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
                  Bs(e);
                else if (a === 1)
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
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ft = e;
            break;
          }
          ft = t.return;
        }
  }
  function jp(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Zn(e, a), l & 4 && pl(5, a);
        break;
      case 1:
        if (Zn(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (y) {
              Ge(a, a.return, y);
            }
          else {
            var u = Ta(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              Ge(
                a,
                a.return,
                y
              );
            }
          }
        l & 64 && _p(a), l & 512 && ml(a, a.return);
        break;
      case 3:
        if (Zn(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
            Ge(a, a.return, y);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Lp(a);
      case 26:
      case 5:
        Zn(e, a), t === null && l & 4 && Mp(a), l & 512 && ml(a, a.return);
        break;
      case 12:
        Zn(e, a);
        break;
      case 13:
        Zn(e, a), l & 4 && Vp(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = h0.bind(
          null,
          a
        ), N0(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Mn, !l) {
          t = t !== null && t.memoizedState !== null || et, u = Mn;
          var f = et;
          Mn = l, (et = t) && !f ? Jn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Zn(e, a), Mn = u, et = f;
        }
        break;
      case 30:
        break;
      default:
        Zn(e, a);
    }
  }
  function qp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, qp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Io(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ke = null, kt = !1;
  function Un(e, t, a) {
    for (a = a.child; a !== null; )
      Hp(e, t, a), a = a.sibling;
  }
  function Hp(e, t, a) {
    if (X && typeof X.onCommitFiberUnmount == "function")
      try {
        X.onCommitFiberUnmount(q, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        et || mn(a, t), Un(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        et || mn(a, t);
        var l = Ke, u = kt;
        aa(a.type) && (Ke = a.stateNode, kt = !1), Un(
          e,
          t,
          a
        ), El(a.stateNode), Ke = l, kt = u;
        break;
      case 5:
        et || mn(a, t);
      case 6:
        if (l = Ke, u = kt, Ke = null, Un(
          e,
          t,
          a
        ), Ke = l, kt = u, Ke !== null)
          if (kt)
            try {
              (Ke.nodeType === 9 ? Ke.body : Ke.nodeName === "HTML" ? Ke.ownerDocument.body : Ke).removeChild(a.stateNode);
            } catch (f) {
              Ge(
                a,
                t,
                f
              );
            }
          else
            try {
              Ke.removeChild(a.stateNode);
            } catch (f) {
              Ge(
                a,
                t,
                f
              );
            }
        break;
      case 18:
        Ke !== null && (kt ? (e = Ke, zm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Ol(e)) : zm(Ke, a.stateNode));
        break;
      case 4:
        l = Ke, u = kt, Ke = a.stateNode.containerInfo, kt = !0, Un(
          e,
          t,
          a
        ), Ke = l, kt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        et || Kn(2, a, t), et || Kn(4, a, t), Un(
          e,
          t,
          a
        );
        break;
      case 1:
        et || (mn(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Np(
          a,
          t,
          l
        )), Un(
          e,
          t,
          a
        );
        break;
      case 21:
        Un(
          e,
          t,
          a
        );
        break;
      case 22:
        et = (l = et) || a.memoizedState !== null, Un(
          e,
          t,
          a
        ), et = l;
        break;
      default:
        Un(
          e,
          t,
          a
        );
    }
  }
  function Vp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ol(e);
      } catch (a) {
        Ge(t, t.return, a);
      }
  }
  function o0(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Bp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Bp()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function cs(e, t) {
    var a = o0(e);
    t.forEach(function(l) {
      var u = g0.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(u, u));
    });
  }
  function Ht(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l], f = e, y = t, S = y;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (aa(S.type)) {
                Ke = S.stateNode, kt = !1;
                break e;
              }
              break;
            case 5:
              Ke = S.stateNode, kt = !1;
              break e;
            case 3:
            case 4:
              Ke = S.stateNode.containerInfo, kt = !0;
              break e;
          }
          S = S.return;
        }
        if (Ke === null) throw Error(o(160));
        Hp(f, y, u), Ke = null, kt = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Ip(t, e), t = t.sibling;
  }
  var on = null;
  function Ip(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ht(t, e), Vt(e), l & 4 && (Kn(3, e, e.return), pl(3, e), Kn(5, e, e.return));
        break;
      case 1:
        Ht(t, e), Vt(e), l & 512 && (et || a === null || mn(a, a.return)), l & 64 && Mn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var u = on;
        if (Ht(t, e), Vt(e), l & 512 && (et || a === null || mn(a, a.return)), l & 4) {
          var f = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (l) {
                    case "title":
                      f = u.getElementsByTagName("title")[0], (!f || f[ji] || f[gt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = u.createElement(l), u.head.insertBefore(
                        f,
                        u.querySelector("head > title")
                      )), ht(f, l, a), f[gt] = e, st(f), l = f;
                      break e;
                    case "link":
                      var y = Lm(
                        "link",
                        "href",
                        u
                      ).get(l + (a.href || ""));
                      if (y) {
                        for (var S = 0; S < y.length; S++)
                          if (f = y[S], f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            y.splice(S, 1);
                            break t;
                          }
                      }
                      f = u.createElement(l), ht(f, l, a), u.head.appendChild(f);
                      break;
                    case "meta":
                      if (y = Lm(
                        "meta",
                        "content",
                        u
                      ).get(l + (a.content || ""))) {
                        for (S = 0; S < y.length; S++)
                          if (f = y[S], f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            y.splice(S, 1);
                            break t;
                          }
                      }
                      f = u.createElement(l), ht(f, l, a), u.head.appendChild(f);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  f[gt] = e, st(f), l = f;
                }
                e.stateNode = l;
              } else
                Bm(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Um(
                u,
                l,
                e.memoizedProps
              );
          else
            f !== l ? (f === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : f.count--, l === null ? Bm(
              u,
              e.type,
              e.stateNode
            ) : Um(
              u,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && rs(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Ht(t, e), Vt(e), l & 512 && (et || a === null || mn(a, a.return)), a !== null && l & 4 && rs(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Ht(t, e), Vt(e), l & 512 && (et || a === null || mn(a, a.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Ga(u, "");
          } catch (M) {
            Ge(e, e.return, M);
          }
        }
        l & 4 && e.stateNode != null && (u = e.memoizedProps, rs(
          e,
          u,
          a !== null ? a.memoizedProps : u
        )), l & 1024 && (ss = !0);
        break;
      case 6:
        if (Ht(t, e), Vt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (M) {
            Ge(e, e.return, M);
          }
        }
        break;
      case 3:
        if (Wr = null, u = on, on = Zr(t.containerInfo), Ht(t, e), on = u, Vt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ol(t.containerInfo);
          } catch (M) {
            Ge(e, e.return, M);
          }
        ss && (ss = !1, Qp(e));
        break;
      case 4:
        l = on, on = Zr(
          e.stateNode.containerInfo
        ), Ht(t, e), Vt(e), on = l;
        break;
      case 12:
        Ht(t, e), Vt(e);
        break;
      case 13:
        Ht(t, e), Vt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (gs = Ut()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, cs(e, l)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var A = a !== null && a.memoizedState !== null, R = Mn, H = et;
        if (Mn = R || u, et = H || A, Ht(t, e), et = H, Mn = R, Vt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || A || Mn || et || Ca(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                A = a = t;
                try {
                  if (f = A.stateNode, u)
                    y = f.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    S = A.stateNode;
                    var Q = A.memoizedProps.style, N = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                    S.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (M) {
                  Ge(A, A.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                A = t;
                try {
                  A.stateNode.nodeValue = u ? "" : A.memoizedProps;
                } catch (M) {
                  Ge(A, A.return, M);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, cs(e, a))));
        break;
      case 19:
        Ht(t, e), Vt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, cs(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ht(t, e), Vt(e);
    }
  }
  function Vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Up(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, f = os(e);
            Br(e, f, u);
            break;
          case 5:
            var y = a.stateNode;
            a.flags & 32 && (Ga(y, ""), a.flags &= -33);
            var S = os(e);
            Br(e, S, y);
            break;
          case 3:
          case 4:
            var A = a.stateNode.containerInfo, R = os(e);
            us(
              e,
              R,
              A
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (H) {
        Ge(e, e.return, H);
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
  function Zn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        jp(e, t.alternate, t), t = t.sibling;
  }
  function Ca(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Kn(4, t, t.return), Ca(t);
          break;
        case 1:
          mn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Np(
            t,
            t.return,
            a
          ), Ca(t);
          break;
        case 27:
          El(t.stateNode);
        case 26:
        case 5:
          mn(t, t.return), Ca(t);
          break;
        case 22:
          t.memoizedState === null && Ca(t);
          break;
        case 30:
          Ca(t);
          break;
        default:
          Ca(t);
      }
      e = e.sibling;
    }
  }
  function Jn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, u = e, f = t, y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Jn(
            u,
            f,
            a
          ), pl(4, f);
          break;
        case 1:
          if (Jn(
            u,
            f,
            a
          ), l = f, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (R) {
              Ge(l, l.return, R);
            }
          if (l = f, u = l.updateQueue, u !== null) {
            var S = l.stateNode;
            try {
              var A = u.shared.hiddenCallbacks;
              if (A !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < A.length; u++)
                  bd(A[u], S);
            } catch (R) {
              Ge(l, l.return, R);
            }
          }
          a && y & 64 && _p(f), ml(f, f.return);
          break;
        case 27:
          Lp(f);
        case 26:
        case 5:
          Jn(
            u,
            f,
            a
          ), a && l === null && y & 4 && Mp(f), ml(f, f.return);
          break;
        case 12:
          Jn(
            u,
            f,
            a
          );
          break;
        case 13:
          Jn(
            u,
            f,
            a
          ), a && y & 4 && Vp(u, f);
          break;
        case 22:
          f.memoizedState === null && Jn(
            u,
            f,
            a
          ), ml(f, f.return);
          break;
        case 30:
          break;
        default:
          Jn(
            u,
            f,
            a
          );
      }
      t = t.sibling;
    }
  }
  function fs(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && $i(a));
  }
  function ds(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $i(e));
  }
  function hn(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Gp(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function Gp(e, t, a, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        hn(
          e,
          t,
          a,
          l
        ), u & 2048 && pl(9, t);
        break;
      case 1:
        hn(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        hn(
          e,
          t,
          a,
          l
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $i(e)));
        break;
      case 12:
        if (u & 2048) {
          hn(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var f = t.memoizedProps, y = f.id, S = f.onPostCommit;
            typeof S == "function" && S(
              y,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (A) {
            Ge(t, t.return, A);
          }
        } else
          hn(
            e,
            t,
            a,
            l
          );
        break;
      case 13:
        hn(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, y = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? hn(
          e,
          t,
          a,
          l
        ) : hl(e, t) : f._visibility & 2 ? hn(
          e,
          t,
          a,
          l
        ) : (f._visibility |= 2, si(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0
        )), u & 2048 && fs(y, t);
        break;
      case 24:
        hn(
          e,
          t,
          a,
          l
        ), u & 2048 && ds(t.alternate, t);
        break;
      default:
        hn(
          e,
          t,
          a,
          l
        );
    }
  }
  function si(e, t, a, l, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e, y = t, S = a, A = l, R = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          si(
            f,
            y,
            S,
            A,
            u
          ), pl(8, y);
          break;
        case 23:
          break;
        case 22:
          var H = y.stateNode;
          y.memoizedState !== null ? H._visibility & 2 ? si(
            f,
            y,
            S,
            A,
            u
          ) : hl(
            f,
            y
          ) : (H._visibility |= 2, si(
            f,
            y,
            S,
            A,
            u
          )), u && R & 2048 && fs(
            y.alternate,
            y
          );
          break;
        case 24:
          si(
            f,
            y,
            S,
            A,
            u
          ), u && R & 2048 && ds(y.alternate, y);
          break;
        default:
          si(
            f,
            y,
            S,
            A,
            u
          );
      }
      t = t.sibling;
    }
  }
  function hl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, u = l.flags;
        switch (l.tag) {
          case 22:
            hl(a, l), u & 2048 && fs(
              l.alternate,
              l
            );
            break;
          case 24:
            hl(a, l), u & 2048 && ds(l.alternate, l);
            break;
          default:
            hl(a, l);
        }
        t = t.sibling;
      }
  }
  var gl = 8192;
  function ci(e) {
    if (e.subtreeFlags & gl)
      for (e = e.child; e !== null; )
        Fp(e), e = e.sibling;
  }
  function Fp(e) {
    switch (e.tag) {
      case 26:
        ci(e), e.flags & gl && e.memoizedState !== null && Y0(
          on,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ci(e);
        break;
      case 3:
      case 4:
        var t = on;
        on = Zr(e.stateNode.containerInfo), ci(e), on = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = gl, gl = 16777216, ci(e), gl = t) : ci(e));
        break;
      default:
        ci(e);
    }
  }
  function Yp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function yl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ft = l, Pp(
            l,
            e
          );
        }
      Yp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Xp(e), e = e.sibling;
  }
  function Xp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        yl(e), e.flags & 2048 && Kn(9, e, e.return);
        break;
      case 3:
        yl(e);
        break;
      case 12:
        yl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, jr(e)) : yl(e);
        break;
      default:
        yl(e);
    }
  }
  function jr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ft = l, Pp(
            l,
            e
          );
        }
      Yp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Kn(8, t, t.return), jr(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, jr(t));
          break;
        default:
          jr(t);
      }
      e = e.sibling;
    }
  }
  function Pp(e, t) {
    for (; ft !== null; ) {
      var a = ft;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Kn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          $i(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ft = l;
      else
        e: for (a = e; ft !== null; ) {
          l = ft;
          var u = l.sibling, f = l.return;
          if (qp(l), l === a) {
            ft = null;
            break e;
          }
          if (u !== null) {
            u.return = f, ft = u;
            break e;
          }
          ft = f;
        }
    }
  }
  var u0 = {
    getCacheForType: function(e) {
      var t = yt(it), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, s0 = typeof WeakMap == "function" ? WeakMap : Map, qe = 0, Fe = null, Oe = null, Me = 0, He = 0, It = null, Wn = !1, fi = !1, ps = !1, Ln = 0, We = 0, $n = 0, ka = 0, ms = 0, tn = 0, di = 0, bl = null, zt = null, hs = !1, gs = 0, qr = 1 / 0, Hr = null, ea = null, mt = 0, ta = null, pi = null, mi = 0, ys = 0, bs = null, Kp = null, vl = 0, vs = null;
  function Qt() {
    if ((qe & 2) !== 0 && Me !== 0)
      return Me & -Me;
    if (O.T !== null) {
      var e = ti;
      return e !== 0 ? e : Cs();
    }
    return ff();
  }
  function Zp() {
    tn === 0 && (tn = (Me & 536870912) === 0 || Le ? of() : 536870912);
    var e = en.current;
    return e !== null && (e.flags |= 32), tn;
  }
  function Gt(e, t, a) {
    (e === Fe && (He === 2 || He === 9) || e.cancelPendingCommit !== null) && (hi(e, 0), na(
      e,
      Me,
      tn,
      !1
    )), Bi(e, a), ((qe & 2) === 0 || e !== Fe) && (e === Fe && ((qe & 2) === 0 && (ka |= a), We === 4 && na(
      e,
      Me,
      tn,
      !1
    )), gn(e));
  }
  function Jp(e, t, a) {
    if ((qe & 6) !== 0) throw Error(o(327));
    var l = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Xt(e, t), u = l ? d0(e, t) : ws(e, t, !0), f = l;
    do {
      if (u === 0) {
        fi && !l && na(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, f && !c0(a)) {
          u = ws(e, t, !1), f = !1;
          continue;
        }
        if (u === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f)
            var y = 0;
          else
            y = e.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            t = y;
            e: {
              var S = e;
              u = bl;
              var A = S.current.memoizedState.isDehydrated;
              if (A && (hi(S, y).flags |= 256), y = ws(
                S,
                y,
                !1
              ), y !== 2) {
                if (ps && !A) {
                  S.errorRecoveryDisabledLanes |= f, ka |= f, u = 4;
                  break e;
                }
                f = zt, zt = u, f !== null && (zt === null ? zt = f : zt.push.apply(
                  zt,
                  f
                ));
              }
              u = y;
            }
            if (f = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          hi(e, 0), na(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, f = u, f) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              na(
                l,
                t,
                tn,
                !Wn
              );
              break e;
            case 2:
              zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = gs + 300 - Ut(), 10 < u)) {
            if (na(
              l,
              t,
              tn,
              !Wn
            ), ut(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Cm(
              Wp.bind(
                null,
                l,
                a,
                zt,
                Hr,
                hs,
                t,
                tn,
                ka,
                di,
                Wn,
                f,
                2,
                -0,
                0
              ),
              u
            );
            break e;
          }
          Wp(
            l,
            a,
            zt,
            Hr,
            hs,
            t,
            tn,
            ka,
            di,
            Wn,
            f,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    gn(e);
  }
  function Wp(e, t, a, l, u, f, y, S, A, R, H, Q, N, M) {
    if (e.timeoutHandle = -1, Q = t.subtreeFlags, (Q & 8192 || (Q & 16785408) === 16785408) && (Cl = { stylesheets: null, count: 0, unsuspend: F0 }, Fp(t), Q = X0(), Q !== null)) {
      e.cancelPendingCommit = Q(
        lm.bind(
          null,
          e,
          t,
          f,
          a,
          l,
          u,
          y,
          S,
          A,
          H,
          1,
          N,
          M
        )
      ), na(e, f, y, !R);
      return;
    }
    lm(
      e,
      t,
      f,
      a,
      l,
      u,
      y,
      S,
      A
    );
  }
  function c0(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var u = a[l], f = u.getSnapshot;
          u = u.value;
          try {
            if (!jt(f(), u)) return !1;
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
  function na(e, t, a, l) {
    t &= ~ms, t &= ~ka, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var f = 31 - ve(u), y = 1 << f;
      l[f] = -1, u &= ~y;
    }
    a !== 0 && sf(e, a, t);
  }
  function Vr() {
    return (qe & 6) === 0 ? (Sl(0), !1) : !0;
  }
  function Ss() {
    if (Oe !== null) {
      if (He === 0)
        var e = Oe.return;
      else
        e = Oe, zn = xa = null, Bu(e), oi = null, cl = 0, e = Oe;
      for (; e !== null; )
        Op(e.alternate, e), e = e.return;
      Oe = null;
    }
  }
  function hi(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, z0(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ss(), Fe = e, Oe = a = Tn(e.current, null), Me = t, He = 0, It = null, Wn = !1, fi = Xt(e, t), ps = !1, di = tn = ms = ka = $n = We = 0, zt = bl = null, hs = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - ve(l), f = 1 << u;
        t |= e[u], l &= ~f;
      }
    return Ln = t, sr(), a;
  }
  function $p(e, t) {
    ke = null, O.H = zr, t === tl || t === br ? (t = gd(), He = 3) : t === pd ? (t = gd(), He = 4) : He = t === yp ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, It = t, Oe === null && (We = 1, Nr(
      e,
      Zt(t, e.current)
    ));
  }
  function em() {
    var e = O.H;
    return O.H = zr, e === null ? zr : e;
  }
  function tm() {
    var e = O.A;
    return O.A = u0, e;
  }
  function xs() {
    We = 4, Wn || (Me & 4194048) !== Me && en.current !== null || (fi = !0), ($n & 134217727) === 0 && (ka & 134217727) === 0 || Fe === null || na(
      Fe,
      Me,
      tn,
      !1
    );
  }
  function ws(e, t, a) {
    var l = qe;
    qe |= 2;
    var u = em(), f = tm();
    (Fe !== e || Me !== t) && (Hr = null, hi(e, t)), t = !1;
    var y = We;
    e: do
      try {
        if (He !== 0 && Oe !== null) {
          var S = Oe, A = It;
          switch (He) {
            case 8:
              Ss(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              en.current === null && (t = !0);
              var R = He;
              if (He = 0, It = null, gi(e, S, A, R), a && fi) {
                y = 0;
                break e;
              }
              break;
            default:
              R = He, He = 0, It = null, gi(e, S, A, R);
          }
        }
        f0(), y = We;
        break;
      } catch (H) {
        $p(e, H);
      }
    while (!0);
    return t && e.shellSuspendCounter++, zn = xa = null, qe = l, O.H = u, O.A = f, Oe === null && (Fe = null, Me = 0, sr()), y;
  }
  function f0() {
    for (; Oe !== null; ) nm(Oe);
  }
  function d0(e, t) {
    var a = qe;
    qe |= 2;
    var l = em(), u = tm();
    Fe !== e || Me !== t ? (Hr = null, qr = Ut() + 500, hi(e, t)) : fi = Xt(
      e,
      t
    );
    e: do
      try {
        if (He !== 0 && Oe !== null) {
          t = Oe;
          var f = It;
          t: switch (He) {
            case 1:
              He = 0, It = null, gi(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (md(f)) {
                He = 0, It = null, am(t);
                break;
              }
              t = function() {
                He !== 2 && He !== 9 || Fe !== e || (He = 7), gn(e);
              }, f.then(t, t);
              break e;
            case 3:
              He = 7;
              break e;
            case 4:
              He = 5;
              break e;
            case 7:
              md(f) ? (He = 0, It = null, am(t)) : (He = 0, It = null, gi(e, t, f, 7));
              break;
            case 5:
              var y = null;
              switch (Oe.tag) {
                case 26:
                  y = Oe.memoizedState;
                case 5:
                case 27:
                  var S = Oe;
                  if (!y || jm(y)) {
                    He = 0, It = null;
                    var A = S.sibling;
                    if (A !== null) Oe = A;
                    else {
                      var R = S.return;
                      R !== null ? (Oe = R, Ir(R)) : Oe = null;
                    }
                    break t;
                  }
              }
              He = 0, It = null, gi(e, t, f, 5);
              break;
            case 6:
              He = 0, It = null, gi(e, t, f, 6);
              break;
            case 8:
              Ss(), We = 6;
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
    return zn = xa = null, O.H = l, O.A = u, qe = a, Oe !== null ? 0 : (Fe = null, Me = 0, sr(), We);
  }
  function p0() {
    for (; Oe !== null && !Kl(); )
      nm(Oe);
  }
  function nm(e) {
    var t = Rp(e.alternate, e, Ln);
    e.memoizedProps = e.pendingProps, t === null ? Ir(e) : Oe = t;
  }
  function am(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ep(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Me
        );
        break;
      case 11:
        t = Ep(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Me
        );
        break;
      case 5:
        Bu(t);
      default:
        Op(a, t), t = Oe = id(t, Ln), t = Rp(a, t, Ln);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ir(e) : Oe = t;
  }
  function gi(e, t, a, l) {
    zn = xa = null, Bu(t), oi = null, cl = 0;
    var u = t.return;
    try {
      if (n0(
        e,
        u,
        t,
        a,
        Me
      )) {
        We = 1, Nr(
          e,
          Zt(a, e.current)
        ), Oe = null;
        return;
      }
    } catch (f) {
      if (u !== null) throw Oe = u, f;
      We = 1, Nr(
        e,
        Zt(a, e.current)
      ), Oe = null;
      return;
    }
    t.flags & 32768 ? (Le || l === 1 ? e = !0 : fi || (Me & 536870912) !== 0 ? e = !1 : (Wn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = en.current, l !== null && l.tag === 13 && (l.flags |= 16384))), im(t, e)) : Ir(t);
  }
  function Ir(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        im(
          t,
          Wn
        );
        return;
      }
      e = t.return;
      var a = i0(
        t.alternate,
        t,
        Ln
      );
      if (a !== null) {
        Oe = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
  }
  function im(e, t) {
    do {
      var a = l0(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Oe = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Oe = e;
        return;
      }
      Oe = e = a;
    } while (e !== null);
    We = 6, Oe = null;
  }
  function lm(e, t, a, l, u, f, y, S, A) {
    e.cancelPendingCommit = null;
    do
      Qr();
    while (mt !== 0);
    if ((qe & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (f = t.lanes | t.childLanes, f |= du, Fy(
        e,
        a,
        f,
        y,
        S,
        A
      ), e === Fe && (Oe = Fe = null, Me = 0), pi = t, ta = e, mi = a, ys = f, bs = u, Kp = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, y0(La, function() {
        return cm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = O.T, O.T = null, u = Y.p, Y.p = 2, y = qe, qe |= 4;
        try {
          r0(e, t, a);
        } finally {
          qe = y, Y.p = u, O.T = l;
        }
      }
      mt = 1, rm(), om(), um();
    }
  }
  function rm() {
    if (mt === 1) {
      mt = 0;
      var e = ta, t = pi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = O.T, O.T = null;
        var l = Y.p;
        Y.p = 2;
        var u = qe;
        qe |= 4;
        try {
          Ip(t, e);
          var f = Ms, y = Pf(e.containerInfo), S = f.focusedElem, A = f.selectionRange;
          if (y !== S && S && S.ownerDocument && Xf(
            S.ownerDocument.documentElement,
            S
          )) {
            if (A !== null && ou(S)) {
              var R = A.start, H = A.end;
              if (H === void 0 && (H = R), "selectionStart" in S)
                S.selectionStart = R, S.selectionEnd = Math.min(
                  H,
                  S.value.length
                );
              else {
                var Q = S.ownerDocument || document, N = Q && Q.defaultView || window;
                if (N.getSelection) {
                  var M = N.getSelection(), Se = S.textContent.length, ge = Math.min(A.start, Se), Qe = A.end === void 0 ? ge : Math.min(A.end, Se);
                  !M.extend && ge > Qe && (y = Qe, Qe = ge, ge = y);
                  var C = Yf(
                    S,
                    ge
                  ), T = Yf(
                    S,
                    Qe
                  );
                  if (C && T && (M.rangeCount !== 1 || M.anchorNode !== C.node || M.anchorOffset !== C.offset || M.focusNode !== T.node || M.focusOffset !== T.offset)) {
                    var z = Q.createRange();
                    z.setStart(C.node, C.offset), M.removeAllRanges(), ge > Qe ? (M.addRange(z), M.extend(T.node, T.offset)) : (z.setEnd(T.node, T.offset), M.addRange(z));
                  }
                }
              }
            }
            for (Q = [], M = S; M = M.parentNode; )
              M.nodeType === 1 && Q.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < Q.length; S++) {
              var I = Q[S];
              I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
            }
          }
          to = !!Ns, Ms = Ns = null;
        } finally {
          qe = u, Y.p = l, O.T = a;
        }
      }
      e.current = t, mt = 2;
    }
  }
  function om() {
    if (mt === 2) {
      mt = 0;
      var e = ta, t = pi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = O.T, O.T = null;
        var l = Y.p;
        Y.p = 2;
        var u = qe;
        qe |= 4;
        try {
          jp(e, t.alternate, t);
        } finally {
          qe = u, Y.p = l, O.T = a;
        }
      }
      mt = 3;
    }
  }
  function um() {
    if (mt === 4 || mt === 3) {
      mt = 0, Zl();
      var e = ta, t = pi, a = mi, l = Kp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? mt = 5 : (mt = 0, pi = ta = null, sm(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (ea = null), Ho(a), t = t.stateNode, X && typeof X.onCommitFiberRoot == "function")
        try {
          X.onCommitFiberRoot(
            q,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = O.T, u = Y.p, Y.p = 2, O.T = null;
        try {
          for (var f = e.onRecoverableError, y = 0; y < l.length; y++) {
            var S = l[y];
            f(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          O.T = t, Y.p = u;
        }
      }
      (mi & 3) !== 0 && Qr(), gn(e), u = e.pendingLanes, (a & 4194090) !== 0 && (u & 42) !== 0 ? e === vs ? vl++ : (vl = 0, vs = e) : vl = 0, Sl(0);
    }
  }
  function sm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, $i(t)));
  }
  function Qr(e) {
    return rm(), om(), um(), cm();
  }
  function cm() {
    if (mt !== 5) return !1;
    var e = ta, t = ys;
    ys = 0;
    var a = Ho(mi), l = O.T, u = Y.p;
    try {
      Y.p = 32 > a ? 32 : a, O.T = null, a = bs, bs = null;
      var f = ta, y = mi;
      if (mt = 0, pi = ta = null, mi = 0, (qe & 6) !== 0) throw Error(o(331));
      var S = qe;
      if (qe |= 4, Xp(f.current), Gp(
        f,
        f.current,
        y,
        a
      ), qe = S, Sl(0, !1), X && typeof X.onPostCommitFiberRoot == "function")
        try {
          X.onPostCommitFiberRoot(q, f);
        } catch {
        }
      return !0;
    } finally {
      Y.p = u, O.T = l, sm(e, t);
    }
  }
  function fm(e, t, a) {
    t = Zt(a, t), t = Ju(e.stateNode, t, 2), e = Fn(e, t, 2), e !== null && (Bi(e, 2), gn(e));
  }
  function Ge(e, t, a) {
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
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ea === null || !ea.has(l))) {
            e = Zt(a, e), a = hp(2), l = Fn(t, a, 2), l !== null && (gp(
              a,
              l,
              t,
              e
            ), Bi(l, 2), gn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Es(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new s0();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else
      u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(a) || (ps = !0, u.add(a), e = m0.bind(null, e, t, a), t.then(e, e));
  }
  function m0(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Fe === e && (Me & a) === a && (We === 4 || We === 3 && (Me & 62914560) === Me && 300 > Ut() - gs ? (qe & 2) === 0 && hi(e, 0) : ms |= a, di === Me && (di = 0)), gn(e);
  }
  function dm(e, t) {
    t === 0 && (t = uf()), e = Ja(e, t), e !== null && (Bi(e, t), gn(e));
  }
  function h0(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), dm(e, a);
  }
  function g0(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), dm(e, a);
  }
  function y0(e, t) {
    return Ni(e, t);
  }
  var Gr = null, yi = null, As = !1, Fr = !1, Ts = !1, za = 0;
  function gn(e) {
    e !== yi && e.next === null && (yi === null ? Gr = yi = e : yi = yi.next = e), Fr = !0, As || (As = !0, v0());
  }
  function Sl(e, t) {
    if (!Ts && Fr) {
      Ts = !0;
      do
        for (var a = !1, l = Gr; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var y = l.suspendedLanes, S = l.pingedLanes;
              f = (1 << 31 - ve(42 | e) + 1) - 1, f &= u & ~(y & ~S), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (a = !0, gm(l, f));
          } else
            f = Me, f = ut(
              l,
              l === Fe ? f : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (f & 3) === 0 || Xt(l, f) || (a = !0, gm(l, f));
          l = l.next;
        }
      while (a);
      Ts = !1;
    }
  }
  function b0() {
    pm();
  }
  function pm() {
    Fr = As = !1;
    var e = 0;
    za !== 0 && (k0() && (e = za), za = 0);
    for (var t = Ut(), a = null, l = Gr; l !== null; ) {
      var u = l.next, f = mm(l, t);
      f === 0 ? (l.next = null, a === null ? Gr = u : a.next = u, u === null && (yi = a)) : (a = l, (e !== 0 || (f & 3) !== 0) && (Fr = !0)), l = u;
    }
    Sl(e);
  }
  function mm(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var y = 31 - ve(f), S = 1 << y, A = u[y];
      A === -1 ? ((S & a) === 0 || (S & l) !== 0) && (u[y] = ln(S, t)) : A <= t && (e.expiredLanes |= S), f &= ~S;
    }
    if (t = Fe, a = Me, a = ut(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (He === 2 || He === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Mi(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Xt(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Mi(l), Ho(a)) {
        case 2:
        case 8:
          a = Li;
          break;
        case 32:
          a = La;
          break;
        case 268435456:
          a = Jl;
          break;
        default:
          a = La;
      }
      return l = hm.bind(null, e), a = Ni(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Mi(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function hm(e, t) {
    if (mt !== 0 && mt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Qr() && e.callbackNode !== a)
      return null;
    var l = Me;
    return l = ut(
      e,
      e === Fe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Jp(e, l, t), mm(e, Ut()), e.callbackNode != null && e.callbackNode === a ? hm.bind(null, e) : null);
  }
  function gm(e, t) {
    if (Qr()) return null;
    Jp(e, t, !0);
  }
  function v0() {
    R0(function() {
      (qe & 6) !== 0 ? Ni(
        Ui,
        b0
      ) : pm();
    });
  }
  function Cs() {
    return za === 0 && (za = of()), za;
  }
  function ym(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : nr("" + e);
  }
  function bm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function S0(e, t, a, l, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var f = ym(
        (u[At] || null).action
      ), y = l.submitter;
      y && (t = (t = y[At] || null) ? ym(t.formAction) : y.getAttribute("formAction"), t !== null && (f = t, y = null));
      var S = new rr(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (za !== 0) {
                  var A = y ? bm(u, y) : new FormData(u);
                  Yu(
                    a,
                    {
                      pending: !0,
                      data: A,
                      method: u.method,
                      action: f
                    },
                    null,
                    A
                  );
                }
              } else
                typeof f == "function" && (S.preventDefault(), A = y ? bm(u, y) : new FormData(u), Yu(
                  a,
                  {
                    pending: !0,
                    data: A,
                    method: u.method,
                    action: f
                  },
                  f,
                  A
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var ks = 0; ks < fu.length; ks++) {
    var zs = fu[ks], x0 = zs.toLowerCase(), w0 = zs[0].toUpperCase() + zs.slice(1);
    rn(
      x0,
      "on" + w0
    );
  }
  rn(Jf, "onAnimationEnd"), rn(Wf, "onAnimationIteration"), rn($f, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(qb, "onTransitionRun"), rn(Hb, "onTransitionStart"), rn(Vb, "onTransitionCancel"), rn(ed, "onTransitionEnd"), Va("onMouseEnter", ["mouseout", "mouseover"]), Va("onMouseLeave", ["mouseout", "mouseover"]), Va("onPointerEnter", ["pointerout", "pointerover"]), Va("onPointerLeave", ["pointerout", "pointerover"]), da(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), da(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), da("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), da(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), da(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), da(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var xl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), E0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl)
  );
  function vm(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], u = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = l.length - 1; 0 <= y; y--) {
            var S = l[y], A = S.instance, R = S.currentTarget;
            if (S = S.listener, A !== f && u.isPropagationStopped())
              break e;
            f = S, u.currentTarget = R;
            try {
              f(u);
            } catch (H) {
              _r(H);
            }
            u.currentTarget = null, f = A;
          }
        else
          for (y = 0; y < l.length; y++) {
            if (S = l[y], A = S.instance, R = S.currentTarget, S = S.listener, A !== f && u.isPropagationStopped())
              break e;
            f = S, u.currentTarget = R;
            try {
              f(u);
            } catch (H) {
              _r(H);
            }
            u.currentTarget = null, f = A;
          }
      }
    }
  }
  function _e(e, t) {
    var a = t[Vo];
    a === void 0 && (a = t[Vo] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Sm(t, e, 2, !1), a.add(l));
  }
  function Rs(e, t, a) {
    var l = 0;
    t && (l |= 4), Sm(
      a,
      e,
      l,
      t
    );
  }
  var Yr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ds(e) {
    if (!e[Yr]) {
      e[Yr] = !0, pf.forEach(function(a) {
        a !== "selectionchange" && (E0.has(a) || Rs(a, !1, e), Rs(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Yr] || (t[Yr] = !0, Rs("selectionchange", !1, t));
    }
  }
  function Sm(e, t, a, l) {
    switch (Gm(t)) {
      case 2:
        var u = Z0;
        break;
      case 8:
        u = J0;
        break;
      default:
        u = Gs;
    }
    a = u.bind(
      null,
      t,
      a,
      e
    ), u = void 0, !Wo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, a, !0) : u !== void 0 ? e.addEventListener(t, a, {
      passive: u
    }) : e.addEventListener(t, a, !1);
  }
  function Os(e, t, a, l, u) {
    var f = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var S = l.stateNode.containerInfo;
          if (S === u) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var A = y.tag;
              if ((A === 3 || A === 4) && y.stateNode.containerInfo === u)
                return;
              y = y.return;
            }
          for (; S !== null; ) {
            if (y = ja(S), y === null) return;
            if (A = y.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              l = f = y;
              continue e;
            }
            S = S.parentNode;
          }
        }
        l = l.return;
      }
    kf(function() {
      var R = f, H = Zo(a), Q = [];
      e: {
        var N = td.get(e);
        if (N !== void 0) {
          var M = rr, Se = e;
          switch (e) {
            case "keypress":
              if (ir(a) === 0) break e;
            case "keydown":
            case "keyup":
              M = yb;
              break;
            case "focusin":
              Se = "focus", M = nu;
              break;
            case "focusout":
              Se = "blur", M = nu;
              break;
            case "beforeblur":
            case "afterblur":
              M = nu;
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
              M = Df;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = lb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = Sb;
              break;
            case Jf:
            case Wf:
            case $f:
              M = ub;
              break;
            case ed:
              M = wb;
              break;
            case "scroll":
            case "scrollend":
              M = ab;
              break;
            case "wheel":
              M = Ab;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = cb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = _f;
              break;
            case "toggle":
            case "beforetoggle":
              M = Cb;
          }
          var ge = (t & 4) !== 0, Qe = !ge && (e === "scroll" || e === "scrollend"), C = ge ? N !== null ? N + "Capture" : null : N;
          ge = [];
          for (var T = R, z; T !== null; ) {
            var I = T;
            if (z = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || z === null || C === null || (I = Hi(T, C), I != null && ge.push(
              wl(T, I, z)
            )), Qe) break;
            T = T.return;
          }
          0 < ge.length && (N = new M(
            N,
            Se,
            null,
            a,
            H
          ), Q.push({ event: N, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", N && a !== Ko && (Se = a.relatedTarget || a.fromElement) && (ja(Se) || Se[Ba]))
            break e;
          if ((M || N) && (N = H.window === H ? H : (N = H.ownerDocument) ? N.defaultView || N.parentWindow : window, M ? (Se = a.relatedTarget || a.toElement, M = R, Se = Se ? ja(Se) : null, Se !== null && (Qe = c(Se), ge = Se.tag, Se !== Qe || ge !== 5 && ge !== 27 && ge !== 6) && (Se = null)) : (M = null, Se = R), M !== Se)) {
            if (ge = Df, I = "onMouseLeave", C = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ge = _f, I = "onPointerLeave", C = "onPointerEnter", T = "pointer"), Qe = M == null ? N : qi(M), z = Se == null ? N : qi(Se), N = new ge(
              I,
              T + "leave",
              M,
              a,
              H
            ), N.target = Qe, N.relatedTarget = z, I = null, ja(H) === R && (ge = new ge(
              C,
              T + "enter",
              Se,
              a,
              H
            ), ge.target = z, ge.relatedTarget = Qe, I = ge), Qe = I, M && Se)
              t: {
                for (ge = M, C = Se, T = 0, z = ge; z; z = bi(z))
                  T++;
                for (z = 0, I = C; I; I = bi(I))
                  z++;
                for (; 0 < T - z; )
                  ge = bi(ge), T--;
                for (; 0 < z - T; )
                  C = bi(C), z--;
                for (; T--; ) {
                  if (ge === C || C !== null && ge === C.alternate)
                    break t;
                  ge = bi(ge), C = bi(C);
                }
                ge = null;
              }
            else ge = null;
            M !== null && xm(
              Q,
              N,
              M,
              ge,
              !1
            ), Se !== null && Qe !== null && xm(
              Q,
              Qe,
              Se,
              ge,
              !0
            );
          }
        }
        e: {
          if (N = R ? qi(R) : window, M = N.nodeName && N.nodeName.toLowerCase(), M === "select" || M === "input" && N.type === "file")
            var ue = Hf;
          else if (jf(N))
            if (Vf)
              ue = Lb;
            else {
              ue = Mb;
              var De = Nb;
            }
          else
            M = N.nodeName, !M || M.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? R && Po(R.elementType) && (ue = Hf) : ue = Ub;
          if (ue && (ue = ue(e, R))) {
            qf(
              Q,
              ue,
              a,
              H
            );
            break e;
          }
          De && De(e, N, R), e === "focusout" && R && N.type === "number" && R.memoizedProps.value != null && Xo(N, "number", N.value);
        }
        switch (De = R ? qi(R) : window, e) {
          case "focusin":
            (jf(De) || De.contentEditable === "true") && (Pa = De, uu = R, Pi = null);
            break;
          case "focusout":
            Pi = uu = Pa = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            su = !1, Kf(Q, a, H);
            break;
          case "selectionchange":
            if (jb) break;
          case "keydown":
          case "keyup":
            Kf(Q, a, H);
        }
        var me;
        if (iu)
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
          Xa ? Lf(e, a) && (ye = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ye = "onCompositionStart");
        ye && (Nf && a.locale !== "ko" && (Xa || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Xa && (me = zf()) : (Vn = H, $o = "value" in Vn ? Vn.value : Vn.textContent, Xa = !0)), De = Xr(R, ye), 0 < De.length && (ye = new Of(
          ye,
          e,
          null,
          a,
          H
        ), Q.push({ event: ye, listeners: De }), me ? ye.data = me : (me = Bf(a), me !== null && (ye.data = me)))), (me = zb ? Rb(e, a) : Db(e, a)) && (ye = Xr(R, "onBeforeInput"), 0 < ye.length && (De = new Of(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          H
        ), Q.push({
          event: De,
          listeners: ye
        }), De.data = me)), S0(
          Q,
          e,
          R,
          a,
          H
        );
      }
      vm(Q, t);
    });
  }
  function wl(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Xr(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var u = e, f = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || f === null || (u = Hi(e, a), u != null && l.unshift(
        wl(e, u, f)
      ), u = Hi(e, t), u != null && l.push(
        wl(e, u, f)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function bi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xm(e, t, a, l, u) {
    for (var f = t._reactName, y = []; a !== null && a !== l; ) {
      var S = a, A = S.alternate, R = S.stateNode;
      if (S = S.tag, A !== null && A === l) break;
      S !== 5 && S !== 26 && S !== 27 || R === null || (A = R, u ? (R = Hi(a, f), R != null && y.unshift(
        wl(a, R, A)
      )) : u || (R = Hi(a, f), R != null && y.push(
        wl(a, R, A)
      ))), a = a.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var A0 = /\r\n?/g, T0 = /\u0000|\uFFFD/g;
  function wm(e) {
    return (typeof e == "string" ? e : "" + e).replace(A0, `
`).replace(T0, "");
  }
  function Em(e, t) {
    return t = wm(t), wm(e) === t;
  }
  function Pr() {
  }
  function Ie(e, t, a, l, u, f) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ga(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ga(e, "" + l);
        break;
      case "className":
        $l(e, "class", l);
        break;
      case "tabIndex":
        $l(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $l(e, a, l);
        break;
      case "style":
        Tf(e, l, f);
        break;
      case "data":
        if (t !== "object") {
          $l(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = nr("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (a === "formAction" ? (t !== "input" && Ie(e, t, "name", u.name, u, null), Ie(
            e,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Ie(
            e,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Ie(
            e,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Ie(e, t, "encType", u.encType, u, null), Ie(e, t, "method", u.method, u, null), Ie(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = nr("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = Pr);
        break;
      case "onScroll":
        l != null && _e("scroll", e);
        break;
      case "onScrollEnd":
        l != null && _e("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (a = l.__html, a != null) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = nr("" + l), e.setAttributeNS(
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
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        _e("beforetoggle", e), _e("toggle", e), Wl(e, "popover", l);
        break;
      case "xlinkActuate":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Wl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = tb.get(a) || a, Wl(e, a, l));
    }
  }
  function _s(e, t, a, l, u, f) {
    switch (a) {
      case "style":
        Tf(e, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (a = l.__html, a != null) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Ga(e, l) : (typeof l == "number" || typeof l == "bigint") && Ga(e, "" + l);
        break;
      case "onScroll":
        l != null && _e("scroll", e);
        break;
      case "onScrollEnd":
        l != null && _e("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Pr);
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
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), f = e[At] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, u), typeof l == "function")) {
              typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, u);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Wl(e, a, l);
          }
    }
  }
  function ht(e, t, a) {
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
        _e("error", e), _e("load", e);
        var l = !1, u = !1, f;
        for (f in a)
          if (a.hasOwnProperty(f)) {
            var y = a[f];
            if (y != null)
              switch (f) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Ie(e, t, f, y, a, null);
              }
          }
        u && Ie(e, t, "srcSet", a.srcSet, a, null), l && Ie(e, t, "src", a.src, a, null);
        return;
      case "input":
        _e("invalid", e);
        var S = f = y = u = null, A = null, R = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var H = a[l];
            if (H != null)
              switch (l) {
                case "name":
                  u = H;
                  break;
                case "type":
                  y = H;
                  break;
                case "checked":
                  A = H;
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
                  Ie(e, t, l, H, a, null);
              }
          }
        xf(
          e,
          f,
          S,
          A,
          R,
          y,
          u,
          !1
        ), er(e);
        return;
      case "select":
        _e("invalid", e), l = y = f = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (S = a[u], S != null))
            switch (u) {
              case "value":
                f = S;
                break;
              case "defaultValue":
                y = S;
                break;
              case "multiple":
                l = S;
              default:
                Ie(e, t, u, S, a, null);
            }
        t = f, a = y, e.multiple = !!l, t != null ? Qa(e, !!l, t, !1) : a != null && Qa(e, !!l, a, !0);
        return;
      case "textarea":
        _e("invalid", e), f = u = l = null;
        for (y in a)
          if (a.hasOwnProperty(y) && (S = a[y], S != null))
            switch (y) {
              case "value":
                l = S;
                break;
              case "defaultValue":
                u = S;
                break;
              case "children":
                f = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(91));
                break;
              default:
                Ie(e, t, y, S, a, null);
            }
        Ef(e, l, u, f), er(e);
        return;
      case "option":
        for (A in a)
          if (a.hasOwnProperty(A) && (l = a[A], l != null))
            switch (A) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ie(e, t, A, l, a, null);
            }
        return;
      case "dialog":
        _e("beforetoggle", e), _e("toggle", e), _e("cancel", e), _e("close", e);
        break;
      case "iframe":
      case "object":
        _e("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < xl.length; l++)
          _e(xl[l], e);
        break;
      case "image":
        _e("error", e), _e("load", e);
        break;
      case "details":
        _e("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        _e("error", e), _e("load", e);
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
          if (a.hasOwnProperty(R) && (l = a[R], l != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ie(e, t, R, l, a, null);
            }
        return;
      default:
        if (Po(t)) {
          for (H in a)
            a.hasOwnProperty(H) && (l = a[H], l !== void 0 && _s(
              e,
              t,
              H,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (S in a)
      a.hasOwnProperty(S) && (l = a[S], l != null && Ie(e, t, S, l, a, null));
  }
  function C0(e, t, a, l) {
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
        var u = null, f = null, y = null, S = null, A = null, R = null, H = null;
        for (M in a) {
          var Q = a[M];
          if (a.hasOwnProperty(M) && Q != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = Q;
              default:
                l.hasOwnProperty(M) || Ie(e, t, M, null, l, Q);
            }
        }
        for (var N in l) {
          var M = l[N];
          if (Q = a[N], l.hasOwnProperty(N) && (M != null || Q != null))
            switch (N) {
              case "type":
                f = M;
                break;
              case "name":
                u = M;
                break;
              case "checked":
                R = M;
                break;
              case "defaultChecked":
                H = M;
                break;
              case "value":
                y = M;
                break;
              case "defaultValue":
                S = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, t));
                break;
              default:
                M !== Q && Ie(
                  e,
                  t,
                  N,
                  M,
                  l,
                  Q
                );
            }
        }
        Yo(
          e,
          y,
          S,
          A,
          R,
          H,
          f,
          u
        );
        return;
      case "select":
        M = y = S = N = null;
        for (f in a)
          if (A = a[f], a.hasOwnProperty(f) && A != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                M = A;
              default:
                l.hasOwnProperty(f) || Ie(
                  e,
                  t,
                  f,
                  null,
                  l,
                  A
                );
            }
        for (u in l)
          if (f = l[u], A = a[u], l.hasOwnProperty(u) && (f != null || A != null))
            switch (u) {
              case "value":
                N = f;
                break;
              case "defaultValue":
                S = f;
                break;
              case "multiple":
                y = f;
              default:
                f !== A && Ie(
                  e,
                  t,
                  u,
                  f,
                  l,
                  A
                );
            }
        t = S, a = y, l = M, N != null ? Qa(e, !!a, N, !1) : !!l != !!a && (t != null ? Qa(e, !!a, t, !0) : Qa(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        M = N = null;
        for (S in a)
          if (u = a[S], a.hasOwnProperty(S) && u != null && !l.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ie(e, t, S, null, l, u);
            }
        for (y in l)
          if (u = l[y], f = a[y], l.hasOwnProperty(y) && (u != null || f != null))
            switch (y) {
              case "value":
                N = u;
                break;
              case "defaultValue":
                M = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== f && Ie(e, t, y, u, l, f);
            }
        wf(e, N, M);
        return;
      case "option":
        for (var Se in a)
          if (N = a[Se], a.hasOwnProperty(Se) && N != null && !l.hasOwnProperty(Se))
            switch (Se) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ie(
                  e,
                  t,
                  Se,
                  null,
                  l,
                  N
                );
            }
        for (A in l)
          if (N = l[A], M = a[A], l.hasOwnProperty(A) && N !== M && (N != null || M != null))
            switch (A) {
              case "selected":
                e.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Ie(
                  e,
                  t,
                  A,
                  N,
                  l,
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
        for (var ge in a)
          N = a[ge], a.hasOwnProperty(ge) && N != null && !l.hasOwnProperty(ge) && Ie(e, t, ge, null, l, N);
        for (R in l)
          if (N = l[R], M = a[R], l.hasOwnProperty(R) && N !== M && (N != null || M != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(o(137, t));
                break;
              default:
                Ie(
                  e,
                  t,
                  R,
                  N,
                  l,
                  M
                );
            }
        return;
      default:
        if (Po(t)) {
          for (var Qe in a)
            N = a[Qe], a.hasOwnProperty(Qe) && N !== void 0 && !l.hasOwnProperty(Qe) && _s(
              e,
              t,
              Qe,
              void 0,
              l,
              N
            );
          for (H in l)
            N = l[H], M = a[H], !l.hasOwnProperty(H) || N === M || N === void 0 && M === void 0 || _s(
              e,
              t,
              H,
              N,
              l,
              M
            );
          return;
        }
    }
    for (var C in a)
      N = a[C], a.hasOwnProperty(C) && N != null && !l.hasOwnProperty(C) && Ie(e, t, C, null, l, N);
    for (Q in l)
      N = l[Q], M = a[Q], !l.hasOwnProperty(Q) || N === M || N == null && M == null || Ie(e, t, Q, N, l, M);
  }
  var Ns = null, Ms = null;
  function Kr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Am(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Tm(e, t) {
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
  var Ls = null;
  function k0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ls ? !1 : (Ls = e, !0) : (Ls = null, !1);
  }
  var Cm = typeof setTimeout == "function" ? setTimeout : void 0, z0 = typeof clearTimeout == "function" ? clearTimeout : void 0, km = typeof Promise == "function" ? Promise : void 0, R0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof km < "u" ? function(e) {
    return km.resolve(null).then(e).catch(D0);
  } : Cm;
  function D0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function aa(e) {
    return e === "head";
  }
  function zm(e, t) {
    var a = t, l = 0, u = 0;
    do {
      var f = a.nextSibling;
      if (e.removeChild(a), f && f.nodeType === 8)
        if (a = f.data, a === "/$") {
          if (0 < l && 8 > l) {
            a = l;
            var y = e.ownerDocument;
            if (a & 1 && El(y.documentElement), a & 2 && El(y.body), a & 4)
              for (a = y.head, El(a), y = a.firstChild; y; ) {
                var S = y.nextSibling, A = y.nodeName;
                y[ji] || A === "SCRIPT" || A === "STYLE" || A === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y), y = S;
              }
          }
          if (u === 0) {
            e.removeChild(f), Ol(t);
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!" ? u++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = f;
    } while (a);
    Ol(t);
  }
  function Bs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bs(a), Io(a);
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
  function O0(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[ji])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (f !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === f)
          return e;
      } else return e;
      if (e = un(e.nextSibling), e === null) break;
    }
    return null;
  }
  function _0(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = un(e.nextSibling), e === null)) return null;
    return e;
  }
  function js(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function N0(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
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
  var qs = null;
  function Rm(e) {
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
  function Dm(e, t, a) {
    switch (t = Kr(a), e) {
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
  function El(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Io(e);
  }
  var nn = /* @__PURE__ */ new Map(), Om = /* @__PURE__ */ new Set();
  function Zr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Bn = Y.d;
  Y.d = {
    f: M0,
    r: U0,
    D: L0,
    C: B0,
    L: j0,
    m: q0,
    X: V0,
    S: H0,
    M: I0
  };
  function M0() {
    var e = Bn.f(), t = Vr();
    return e || t;
  }
  function U0(e) {
    var t = qa(e);
    t !== null && t.tag === 5 && t.type === "form" ? Jd(t) : Bn.r(e);
  }
  var vi = typeof document > "u" ? null : document;
  function _m(e, t, a) {
    var l = vi;
    if (l && typeof t == "string" && t) {
      var u = Kt(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), Om.has(u) || (Om.add(u), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(u) === null && (t = l.createElement("link"), ht(t, "link", e), st(t), l.head.appendChild(t)));
    }
  }
  function L0(e) {
    Bn.D(e), _m("dns-prefetch", e, null);
  }
  function B0(e, t) {
    Bn.C(e, t), _m("preconnect", e, t);
  }
  function j0(e, t, a) {
    Bn.L(e, t, a);
    var l = vi;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + Kt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + Kt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + Kt(
        a.imageSizes
      ) + '"]')) : u += '[href="' + Kt(e) + '"]';
      var f = u;
      switch (t) {
        case "style":
          f = Si(e);
          break;
        case "script":
          f = xi(e);
      }
      nn.has(f) || (e = h(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), nn.set(f, e), l.querySelector(u) !== null || t === "style" && l.querySelector(Al(f)) || t === "script" && l.querySelector(Tl(f)) || (t = l.createElement("link"), ht(t, "link", e), st(t), l.head.appendChild(t)));
    }
  }
  function q0(e, t) {
    Bn.m(e, t);
    var a = vi;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Kt(l) + '"][href="' + Kt(e) + '"]', f = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = xi(e);
      }
      if (!nn.has(f) && (e = h({ rel: "modulepreload", href: e }, t), nn.set(f, e), a.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Tl(f)))
              return;
        }
        l = a.createElement("link"), ht(l, "link", e), st(l), a.head.appendChild(l);
      }
    }
  }
  function H0(e, t, a) {
    Bn.S(e, t, a);
    var l = vi;
    if (l && e) {
      var u = Ha(l).hoistableStyles, f = Si(e);
      t = t || "default";
      var y = u.get(f);
      if (!y) {
        var S = { loading: 0, preload: null };
        if (y = l.querySelector(
          Al(f)
        ))
          S.loading = 5;
        else {
          e = h(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = nn.get(f)) && Hs(e, a);
          var A = y = l.createElement("link");
          st(A), ht(A, "link", e), A._p = new Promise(function(R, H) {
            A.onload = R, A.onerror = H;
          }), A.addEventListener("load", function() {
            S.loading |= 1;
          }), A.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Jr(y, t, l);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: S
        }, u.set(f, y);
      }
    }
  }
  function V0(e, t) {
    Bn.X(e, t);
    var a = vi;
    if (a && e) {
      var l = Ha(a).hoistableScripts, u = xi(e), f = l.get(u);
      f || (f = a.querySelector(Tl(u)), f || (e = h({ src: e, async: !0 }, t), (t = nn.get(u)) && Vs(e, t), f = a.createElement("script"), st(f), ht(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(u, f));
    }
  }
  function I0(e, t) {
    Bn.M(e, t);
    var a = vi;
    if (a && e) {
      var l = Ha(a).hoistableScripts, u = xi(e), f = l.get(u);
      f || (f = a.querySelector(Tl(u)), f || (e = h({ src: e, async: !0, type: "module" }, t), (t = nn.get(u)) && Vs(e, t), f = a.createElement("script"), st(f), ht(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(u, f));
    }
  }
  function Nm(e, t, a, l) {
    var u = (u = ee.current) ? Zr(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Si(a.href), a = Ha(
          u
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Si(a.href);
          var f = Ha(
            u
          ).hoistableStyles, y = f.get(e);
          if (y || (u = u.ownerDocument || u, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, y), (f = u.querySelector(
            Al(e)
          )) && !f._p && (y.instance = f, y.state.loading = 5), nn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, nn.set(e, a), f || Q0(
            u,
            e,
            a,
            y.state
          ))), t && l === null)
            throw Error(o(528, ""));
          return y;
        }
        if (t && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = xi(a), a = Ha(
          u
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function Si(e) {
    return 'href="' + Kt(e) + '"';
  }
  function Al(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Mm(e) {
    return h({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Q0(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ht(t, "link", a), st(t), e.head.appendChild(t));
  }
  function xi(e) {
    return '[src="' + Kt(e) + '"]';
  }
  function Tl(e) {
    return "script[async]" + e;
  }
  function Um(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Kt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, st(l), l;
          var u = h({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), st(l), ht(l, "style", u), Jr(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          u = Si(a.href);
          var f = e.querySelector(
            Al(u)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, st(f), f;
          l = Mm(a), (u = nn.get(u)) && Hs(l, u), f = (e.ownerDocument || e).createElement("link"), st(f);
          var y = f;
          return y._p = new Promise(function(S, A) {
            y.onload = S, y.onerror = A;
          }), ht(f, "link", l), t.state.loading |= 4, Jr(f, a.precedence, e), t.instance = f;
        case "script":
          return f = xi(a.src), (u = e.querySelector(
            Tl(f)
          )) ? (t.instance = u, st(u), u) : (l = a, (u = nn.get(f)) && (l = h({}, a), Vs(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), st(u), ht(u, "link", l), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Jr(l, a.precedence, e));
    return t.instance;
  }
  function Jr(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, f = u, y = 0; y < l.length; y++) {
      var S = l[y];
      if (S.dataset.precedence === t) f = S;
      else if (f !== u) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Hs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Vs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Wr = null;
  function Lm(e, t, a) {
    if (Wr === null) {
      var l = /* @__PURE__ */ new Map(), u = Wr = /* @__PURE__ */ new Map();
      u.set(a, l);
    } else
      u = Wr, l = u.get(a), l || (l = /* @__PURE__ */ new Map(), u.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), u = 0; u < a.length; u++) {
      var f = a[u];
      if (!(f[ji] || f[gt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = f.getAttribute(t) || "";
        y = e + y;
        var S = l.get(y);
        S ? S.push(f) : l.set(y, [f]);
      }
    }
    return l;
  }
  function Bm(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function G0(e, t, a) {
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
  function jm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Cl = null;
  function F0() {
  }
  function Y0(e, t, a) {
    if (Cl === null) throw Error(o(475));
    var l = Cl;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var u = Si(a.href), f = e.querySelector(
          Al(u)
        );
        if (f) {
          e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = $r.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = f, st(f);
          return;
        }
        f = e.ownerDocument || e, a = Mm(a), (u = nn.get(u)) && Hs(a, u), f = f.createElement("link"), st(f);
        var y = f;
        y._p = new Promise(function(S, A) {
          y.onload = S, y.onerror = A;
        }), ht(f, "link", a), t.instance = f;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = $r.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function X0() {
    if (Cl === null) throw Error(o(475));
    var e = Cl;
    return e.stylesheets && e.count === 0 && Is(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Is(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function $r() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Is(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var eo = null;
  function Is(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, eo = /* @__PURE__ */ new Map(), t.forEach(P0, e), eo = null, $r.call(e));
  }
  function P0(e, t) {
    if (!(t.state.loading & 4)) {
      var a = eo.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), eo.set(e, a);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < u.length; f++) {
          var y = u[f];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y), l = y);
        }
        l && a.set(null, l);
      }
      u = t.instance, y = u.getAttribute("data-precedence"), f = a.get(y) || l, f === l && a.set(null, u), a.set(y, u), this.count++, l = $r.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), f ? f.parentNode.insertBefore(u, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var kl = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function K0(e, t, a, l, u, f, y, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jo(0), this.hiddenUpdates = jo(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = f, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qm(e, t, a, l, u, f, y, S, A, R, H, Q) {
    return e = new K0(
      e,
      t,
      a,
      y,
      S,
      A,
      R,
      Q
    ), t = 1, f === !0 && (t |= 24), f = qt(3, null, null, t), e.current = f, f.stateNode = e, t = Eu(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, ku(f), e;
  }
  function Hm(e) {
    return e ? (e = Wa, e) : Wa;
  }
  function Vm(e, t, a, l, u, f) {
    u = Hm(u), l.context === null ? l.context = u : l.pendingContext = u, l = Gn(t), l.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (l.callback = f), a = Fn(e, l, t), a !== null && (Gt(a, e, t), al(a, e, t));
  }
  function Im(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Qs(e, t) {
    Im(e, t), (e = e.alternate) && Im(e, t);
  }
  function Qm(e) {
    if (e.tag === 13) {
      var t = Ja(e, 67108864);
      t !== null && Gt(t, e, 67108864), Qs(e, 67108864);
    }
  }
  var to = !0;
  function Z0(e, t, a, l) {
    var u = O.T;
    O.T = null;
    var f = Y.p;
    try {
      Y.p = 2, Gs(e, t, a, l);
    } finally {
      Y.p = f, O.T = u;
    }
  }
  function J0(e, t, a, l) {
    var u = O.T;
    O.T = null;
    var f = Y.p;
    try {
      Y.p = 8, Gs(e, t, a, l);
    } finally {
      Y.p = f, O.T = u;
    }
  }
  function Gs(e, t, a, l) {
    if (to) {
      var u = Fs(l);
      if (u === null)
        Os(
          e,
          t,
          l,
          no,
          a
        ), Fm(e, l);
      else if ($0(
        u,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (Fm(e, l), t & 4 && -1 < W0.indexOf(e)) {
        for (; u !== null; ) {
          var f = qa(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var y = Bt(f.pendingLanes);
                  if (y !== 0) {
                    var S = f;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; y; ) {
                      var A = 1 << 31 - ve(y);
                      S.entanglements[1] |= A, y &= ~A;
                    }
                    gn(f), (qe & 6) === 0 && (qr = Ut() + 500, Sl(0));
                  }
                }
                break;
              case 13:
                S = Ja(f, 2), S !== null && Gt(S, f, 2), Vr(), Qs(f, 2);
            }
          if (f = Fs(l), f === null && Os(
            e,
            t,
            l,
            no,
            a
          ), f === u) break;
          u = f;
        }
        u !== null && l.stopPropagation();
      } else
        Os(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Fs(e) {
    return e = Zo(e), Ys(e);
  }
  var no = null;
  function Ys(e) {
    if (no = null, e = ja(e), e !== null) {
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
  function Gm(e) {
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
        switch (Mo()) {
          case Ui:
            return 2;
          case Li:
            return 8;
          case La:
          case Uo:
            return 32;
          case Jl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xs = !1, ia = null, la = null, ra = null, zl = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map(), oa = [], W0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Fm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ia = null;
        break;
      case "dragenter":
      case "dragleave":
        la = null;
        break;
      case "mouseover":
      case "mouseout":
        ra = null;
        break;
      case "pointerover":
      case "pointerout":
        zl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rl.delete(t.pointerId);
    }
  }
  function Dl(e, t, a, l, u, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: f,
      targetContainers: [u]
    }, t !== null && (t = qa(t), t !== null && Qm(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function $0(e, t, a, l, u) {
    switch (t) {
      case "focusin":
        return ia = Dl(
          ia,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "dragenter":
        return la = Dl(
          la,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "mouseover":
        return ra = Dl(
          ra,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "pointerover":
        var f = u.pointerId;
        return zl.set(
          f,
          Dl(
            zl.get(f) || null,
            e,
            t,
            a,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return f = u.pointerId, Rl.set(
          f,
          Dl(
            Rl.get(f) || null,
            e,
            t,
            a,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Ym(e) {
    var t = ja(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = d(a), t !== null) {
            e.blockedOn = t, Yy(e.priority, function() {
              if (a.tag === 13) {
                var l = Qt();
                l = qo(l);
                var u = Ja(a, l);
                u !== null && Gt(u, a, l), Qs(a, l);
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
      var a = Fs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Ko = l, a.target.dispatchEvent(l), Ko = null;
      } else
        return t = qa(a), t !== null && Qm(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Xm(e, t, a) {
    ao(e) && a.delete(t);
  }
  function e1() {
    Xs = !1, ia !== null && ao(ia) && (ia = null), la !== null && ao(la) && (la = null), ra !== null && ao(ra) && (ra = null), zl.forEach(Xm), Rl.forEach(Xm);
  }
  function io(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xs || (Xs = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      e1
    )));
  }
  var lo = null;
  function Pm(e) {
    lo !== e && (lo = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        lo === e && (lo = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], u = e[t + 2];
          if (typeof l != "function") {
            if (Ys(l || a) === null)
              continue;
            break;
          }
          var f = qa(a);
          f !== null && (e.splice(t, 3), t -= 3, Yu(
            f,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function Ol(e) {
    function t(A) {
      return io(A, e);
    }
    ia !== null && io(ia, e), la !== null && io(la, e), ra !== null && io(ra, e), zl.forEach(t), Rl.forEach(t);
    for (var a = 0; a < oa.length; a++) {
      var l = oa[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < oa.length && (a = oa[0], a.blockedOn === null); )
      Ym(a), a.blockedOn === null && oa.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var u = a[l], f = a[l + 1], y = u[At] || null;
        if (typeof f == "function")
          y || Pm(a);
        else if (y) {
          var S = null;
          if (f && f.hasAttribute("formAction")) {
            if (u = f, y = f[At] || null)
              S = y.formAction;
            else if (Ys(u) !== null) continue;
          } else S = y.action;
          typeof S == "function" ? a[l + 1] = S : (a.splice(l, 3), l -= 3), Pm(a);
        }
      }
  }
  function Ps(e) {
    this._internalRoot = e;
  }
  ro.prototype.render = Ps.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, l = Qt();
    Vm(a, l, e, t, null, null);
  }, ro.prototype.unmount = Ps.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Vm(e.current, 2, null, e, null, null), Vr(), t[Ba] = null;
    }
  };
  function ro(e) {
    this._internalRoot = e;
  }
  ro.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ff();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < oa.length && t !== 0 && t < oa[a].priority; a++) ;
      oa.splice(a, 0, e), a === 0 && Ym(e);
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
  Y.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = g(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var t1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oo.isDisabled && oo.supportsFiber)
      try {
        q = oo.inject(
          t1
        ), X = oo;
      } catch {
      }
  }
  return Nl.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var a = !1, l = "", u = fp, f = dp, y = pp, S = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (y = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (S = t.unstable_transitionCallbacks)), t = qm(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      u,
      f,
      y,
      S,
      null
    ), e[Ba] = t.current, Ds(e), new Ps(t);
  }, Nl.hydrateRoot = function(e, t, a) {
    if (!s(e)) throw Error(o(299));
    var l = !1, u = "", f = fp, y = dp, S = pp, A = null, R = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (y = a.onCaughtError), a.onRecoverableError !== void 0 && (S = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (A = a.unstable_transitionCallbacks), a.formState !== void 0 && (R = a.formState)), t = qm(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      u,
      f,
      y,
      S,
      A,
      R
    ), t.context = Hm(null), a = t.current, l = Qt(), l = qo(l), u = Gn(l), u.callback = null, Fn(a, u, l), a = l, t.current.lanes = a, Bi(t, a), gn(t), e[Ba] = t.current, Ds(e), new ro(t);
  }, Nl.version = "19.1.0", Nl;
}
var lh;
function f1() {
  if (lh) return Js.exports;
  lh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Js.exports = c1(), Js.exports;
}
var d1 = f1();
function gg(n, i) {
  return function() {
    return n.apply(i, arguments);
  };
}
const { toString: p1 } = Object.prototype, { getPrototypeOf: Ic } = Object, { iterator: Ao, toStringTag: yg } = Symbol, To = /* @__PURE__ */ ((n) => (i) => {
  const r = p1.call(i);
  return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), sn = (n) => (n = n.toLowerCase(), (i) => To(i) === n), Co = (n) => (i) => typeof i === n, { isArray: ki } = Array, Ql = Co("undefined");
function m1(n) {
  return n !== null && !Ql(n) && n.constructor !== null && !Ql(n.constructor) && Dt(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const bg = sn("ArrayBuffer");
function h1(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && bg(n.buffer), i;
}
const g1 = Co("string"), Dt = Co("function"), vg = Co("number"), ko = (n) => n !== null && typeof n == "object", y1 = (n) => n === !0 || n === !1, go = (n) => {
  if (To(n) !== "object")
    return !1;
  const i = Ic(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(yg in n) && !(Ao in n);
}, b1 = sn("Date"), v1 = sn("File"), S1 = sn("Blob"), x1 = sn("FileList"), w1 = (n) => ko(n) && Dt(n.pipe), E1 = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || Dt(n.append) && ((i = To(n)) === "formdata" || // detect form-data instance
  i === "object" && Dt(n.toString) && n.toString() === "[object FormData]"));
}, A1 = sn("URLSearchParams"), [T1, C1, k1, z1] = ["ReadableStream", "Request", "Response", "Headers"].map(sn), R1 = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fl(n, i, { allOwnKeys: r = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let o, s;
  if (typeof n != "object" && (n = [n]), ki(n))
    for (o = 0, s = n.length; o < s; o++)
      i.call(null, n[o], o, n);
  else {
    const c = r ? Object.getOwnPropertyNames(n) : Object.keys(n), d = c.length;
    let p;
    for (o = 0; o < d; o++)
      p = c[o], i.call(null, n[p], p, n);
  }
}
function Sg(n, i) {
  i = i.toLowerCase();
  const r = Object.keys(n);
  let o = r.length, s;
  for (; o-- > 0; )
    if (s = r[o], i === s.toLowerCase())
      return s;
  return null;
}
const Oa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, xg = (n) => !Ql(n) && n !== Oa;
function Sc() {
  const { caseless: n } = xg(this) && this || {}, i = {}, r = (o, s) => {
    const c = n && Sg(i, s) || s;
    go(i[c]) && go(o) ? i[c] = Sc(i[c], o) : go(o) ? i[c] = Sc({}, o) : ki(o) ? i[c] = o.slice() : i[c] = o;
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && Fl(arguments[o], r);
  return i;
}
const D1 = (n, i, r, { allOwnKeys: o } = {}) => (Fl(i, (s, c) => {
  r && Dt(s) ? n[c] = gg(s, r) : n[c] = s;
}, { allOwnKeys: o }), n), O1 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), _1 = (n, i, r, o) => {
  n.prototype = Object.create(i.prototype, o), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), r && Object.assign(n.prototype, r);
}, N1 = (n, i, r, o) => {
  let s, c, d;
  const p = {};
  if (i = i || {}, n == null) return i;
  do {
    for (s = Object.getOwnPropertyNames(n), c = s.length; c-- > 0; )
      d = s[c], (!o || o(d, n, i)) && !p[d] && (i[d] = n[d], p[d] = !0);
    n = r !== !1 && Ic(n);
  } while (n && (!r || r(n, i)) && n !== Object.prototype);
  return i;
}, M1 = (n, i, r) => {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= i.length;
  const o = n.indexOf(i, r);
  return o !== -1 && o === r;
}, U1 = (n) => {
  if (!n) return null;
  if (ki(n)) return n;
  let i = n.length;
  if (!vg(i)) return null;
  const r = new Array(i);
  for (; i-- > 0; )
    r[i] = n[i];
  return r;
}, L1 = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && Ic(Uint8Array)), B1 = (n, i) => {
  const o = (n && n[Ao]).call(n);
  let s;
  for (; (s = o.next()) && !s.done; ) {
    const c = s.value;
    i.call(n, c[0], c[1]);
  }
}, j1 = (n, i) => {
  let r;
  const o = [];
  for (; (r = n.exec(i)) !== null; )
    o.push(r);
  return o;
}, q1 = sn("HTMLFormElement"), H1 = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, s) {
    return o.toUpperCase() + s;
  }
), rh = (({ hasOwnProperty: n }) => (i, r) => n.call(i, r))(Object.prototype), V1 = sn("RegExp"), wg = (n, i) => {
  const r = Object.getOwnPropertyDescriptors(n), o = {};
  Fl(r, (s, c) => {
    let d;
    (d = i(s, c, n)) !== !1 && (o[c] = d || s);
  }), Object.defineProperties(n, o);
}, I1 = (n) => {
  wg(n, (i, r) => {
    if (Dt(n) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = n[r];
    if (Dt(o)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Q1 = (n, i) => {
  const r = {}, o = (s) => {
    s.forEach((c) => {
      r[c] = !0;
    });
  };
  return ki(n) ? o(n) : o(String(n).split(i)), r;
}, G1 = () => {
}, F1 = (n, i) => n != null && Number.isFinite(n = +n) ? n : i;
function Y1(n) {
  return !!(n && Dt(n.append) && n[yg] === "FormData" && n[Ao]);
}
const X1 = (n) => {
  const i = new Array(10), r = (o, s) => {
    if (ko(o)) {
      if (i.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        i[s] = o;
        const c = ki(o) ? [] : {};
        return Fl(o, (d, p) => {
          const g = r(d, s + 1);
          !Ql(g) && (c[p] = g);
        }), i[s] = void 0, c;
      }
    }
    return o;
  };
  return r(n, 0);
}, P1 = sn("AsyncFunction"), K1 = (n) => n && (ko(n) || Dt(n)) && Dt(n.then) && Dt(n.catch), Eg = ((n, i) => n ? setImmediate : i ? ((r, o) => (Oa.addEventListener("message", ({ source: s, data: c }) => {
  s === Oa && c === r && o.length && o.shift()();
}, !1), (s) => {
  o.push(s), Oa.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Dt(Oa.postMessage)
), Z1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Oa) : typeof process < "u" && process.nextTick || Eg, J1 = (n) => n != null && Dt(n[Ao]), L = {
  isArray: ki,
  isArrayBuffer: bg,
  isBuffer: m1,
  isFormData: E1,
  isArrayBufferView: h1,
  isString: g1,
  isNumber: vg,
  isBoolean: y1,
  isObject: ko,
  isPlainObject: go,
  isReadableStream: T1,
  isRequest: C1,
  isResponse: k1,
  isHeaders: z1,
  isUndefined: Ql,
  isDate: b1,
  isFile: v1,
  isBlob: S1,
  isRegExp: V1,
  isFunction: Dt,
  isStream: w1,
  isURLSearchParams: A1,
  isTypedArray: L1,
  isFileList: x1,
  forEach: Fl,
  merge: Sc,
  extend: D1,
  trim: R1,
  stripBOM: O1,
  inherits: _1,
  toFlatObject: N1,
  kindOf: To,
  kindOfTest: sn,
  endsWith: M1,
  toArray: U1,
  forEachEntry: B1,
  matchAll: j1,
  isHTMLForm: q1,
  hasOwnProperty: rh,
  hasOwnProp: rh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wg,
  freezeMethods: I1,
  toObjectSet: Q1,
  toCamelCase: H1,
  noop: G1,
  toFiniteNumber: F1,
  findKey: Sg,
  global: Oa,
  isContextDefined: xg,
  isSpecCompliantForm: Y1,
  toJSONObject: X1,
  isAsyncFn: P1,
  isThenable: K1,
  setImmediate: Eg,
  asap: Z1,
  isIterable: J1
};
function Ae(n, i, r, o, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), o && (this.request = o), s && (this.response = s, this.status = s.status ? s.status : null);
}
L.inherits(Ae, Error, {
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
const Ag = Ae.prototype, Tg = {};
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
  Tg[n] = { value: n };
});
Object.defineProperties(Ae, Tg);
Object.defineProperty(Ag, "isAxiosError", { value: !0 });
Ae.from = (n, i, r, o, s, c) => {
  const d = Object.create(Ag);
  return L.toFlatObject(n, d, function(g) {
    return g !== Error.prototype;
  }, (p) => p !== "isAxiosError"), Ae.call(d, n.message, i, r, o, s), d.cause = n, d.name = n.name, c && Object.assign(d, c), d;
};
const W1 = null;
function xc(n) {
  return L.isPlainObject(n) || L.isArray(n);
}
function Cg(n) {
  return L.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function oh(n, i, r) {
  return n ? n.concat(i).map(function(s, c) {
    return s = Cg(s), !r && c ? "[" + s + "]" : s;
  }).join(r ? "." : "") : i;
}
function $1(n) {
  return L.isArray(n) && !n.some(xc);
}
const ev = L.toFlatObject(L, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function zo(n, i, r) {
  if (!L.isObject(n))
    throw new TypeError("target must be an object");
  i = i || new FormData(), r = L.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(D, B) {
    return !L.isUndefined(B[D]);
  });
  const o = r.metaTokens, s = r.visitor || h, c = r.dots, d = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(i);
  if (!L.isFunction(s))
    throw new TypeError("visitor must be a function");
  function m(k) {
    if (k === null) return "";
    if (L.isDate(k))
      return k.toISOString();
    if (L.isBoolean(k))
      return k.toString();
    if (!g && L.isBlob(k))
      throw new Ae("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(k) || L.isTypedArray(k) ? g && typeof Blob == "function" ? new Blob([k]) : Buffer.from(k) : k;
  }
  function h(k, D, B) {
    let _ = k;
    if (k && !B && typeof k == "object") {
      if (L.endsWith(D, "{}"))
        D = o ? D : D.slice(0, -2), k = JSON.stringify(k);
      else if (L.isArray(k) && $1(k) || (L.isFileList(k) || L.endsWith(D, "[]")) && (_ = L.toArray(k)))
        return D = Cg(D), _.forEach(function(F, fe) {
          !(L.isUndefined(F) || F === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? oh([D], fe, c) : d === null ? D : D + "[]",
            m(F)
          );
        }), !1;
    }
    return xc(k) ? !0 : (i.append(oh(B, D, c), m(k)), !1);
  }
  const v = [], E = Object.assign(ev, {
    defaultVisitor: h,
    convertValue: m,
    isVisitable: xc
  });
  function w(k, D) {
    if (!L.isUndefined(k)) {
      if (v.indexOf(k) !== -1)
        throw Error("Circular reference detected in " + D.join("."));
      v.push(k), L.forEach(k, function(_, Z) {
        (!(L.isUndefined(_) || _ === null) && s.call(
          i,
          _,
          L.isString(Z) ? Z.trim() : Z,
          D,
          E
        )) === !0 && w(_, D ? D.concat(Z) : [Z]);
      }), v.pop();
    }
  }
  if (!L.isObject(n))
    throw new TypeError("data must be an object");
  return w(n), i;
}
function uh(n) {
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
  this._pairs = [], n && zo(n, this, i);
}
const kg = Qc.prototype;
kg.append = function(i, r) {
  this._pairs.push([i, r]);
};
kg.toString = function(i) {
  const r = i ? function(o) {
    return i.call(this, o, uh);
  } : uh;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function tv(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function zg(n, i, r) {
  if (!i)
    return n;
  const o = r && r.encode || tv;
  L.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let c;
  if (s ? c = s(i, r) : c = L.isURLSearchParams(i) ? i.toString() : new Qc(i, r).toString(o), c) {
    const d = n.indexOf("#");
    d !== -1 && (n = n.slice(0, d)), n += (n.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return n;
}
class sh {
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
  use(i, r, o) {
    return this.handlers.push({
      fulfilled: i,
      rejected: r,
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
const Rg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, nv = typeof URLSearchParams < "u" ? URLSearchParams : Qc, av = typeof FormData < "u" ? FormData : null, iv = typeof Blob < "u" ? Blob : null, lv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: nv,
    FormData: av,
    Blob: iv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Gc = typeof window < "u" && typeof document < "u", wc = typeof navigator == "object" && navigator || void 0, rv = Gc && (!wc || ["ReactNative", "NativeScript", "NS"].indexOf(wc.product) < 0), ov = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", uv = Gc && window.location.href || "http://localhost", sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Gc,
  hasStandardBrowserEnv: rv,
  hasStandardBrowserWebWorkerEnv: ov,
  navigator: wc,
  origin: uv
}, Symbol.toStringTag, { value: "Module" })), vt = {
  ...sv,
  ...lv
};
function cv(n, i) {
  return zo(n, new vt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, s, c) {
      return vt.isNode && L.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function fv(n) {
  return L.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function dv(n) {
  const i = {}, r = Object.keys(n);
  let o;
  const s = r.length;
  let c;
  for (o = 0; o < s; o++)
    c = r[o], i[c] = n[c];
  return i;
}
function Dg(n) {
  function i(r, o, s, c) {
    let d = r[c++];
    if (d === "__proto__") return !0;
    const p = Number.isFinite(+d), g = c >= r.length;
    return d = !d && L.isArray(s) ? s.length : d, g ? (L.hasOwnProp(s, d) ? s[d] = [s[d], o] : s[d] = o, !p) : ((!s[d] || !L.isObject(s[d])) && (s[d] = []), i(r, o, s[d], c) && L.isArray(s[d]) && (s[d] = dv(s[d])), !p);
  }
  if (L.isFormData(n) && L.isFunction(n.entries)) {
    const r = {};
    return L.forEachEntry(n, (o, s) => {
      i(fv(o), s, r, 0);
    }), r;
  }
  return null;
}
function pv(n, i, r) {
  if (L.isString(n))
    try {
      return (i || JSON.parse)(n), L.trim(n);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(n);
}
const Yl = {
  transitional: Rg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, r) {
    const o = r.getContentType() || "", s = o.indexOf("application/json") > -1, c = L.isObject(i);
    if (c && L.isHTMLForm(i) && (i = new FormData(i)), L.isFormData(i))
      return s ? JSON.stringify(Dg(i)) : i;
    if (L.isArrayBuffer(i) || L.isBuffer(i) || L.isStream(i) || L.isFile(i) || L.isBlob(i) || L.isReadableStream(i))
      return i;
    if (L.isArrayBufferView(i))
      return i.buffer;
    if (L.isURLSearchParams(i))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let p;
    if (c) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return cv(i, this.formSerializer).toString();
      if ((p = L.isFileList(i)) || o.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return zo(
          p ? { "files[]": i } : i,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return c || s ? (r.setContentType("application/json", !1), pv(i)) : i;
  }],
  transformResponse: [function(i) {
    const r = this.transitional || Yl.transitional, o = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (L.isResponse(i) || L.isReadableStream(i))
      return i;
    if (i && L.isString(i) && (o && !this.responseType || s)) {
      const d = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(i);
      } catch (p) {
        if (d)
          throw p.name === "SyntaxError" ? Ae.from(p, Ae.ERR_BAD_RESPONSE, this, null, this.response) : p;
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
    FormData: vt.classes.FormData,
    Blob: vt.classes.Blob
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
  Yl.headers[n] = {};
});
const mv = L.toObjectSet([
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
]), hv = (n) => {
  const i = {};
  let r, o, s;
  return n && n.split(`
`).forEach(function(d) {
    s = d.indexOf(":"), r = d.substring(0, s).trim().toLowerCase(), o = d.substring(s + 1).trim(), !(!r || i[r] && mv[r]) && (r === "set-cookie" ? i[r] ? i[r].push(o) : i[r] = [o] : i[r] = i[r] ? i[r] + ", " + o : o);
  }), i;
}, ch = Symbol("internals");
function Ml(n) {
  return n && String(n).trim().toLowerCase();
}
function yo(n) {
  return n === !1 || n == null ? n : L.isArray(n) ? n.map(yo) : String(n);
}
function gv(n) {
  const i = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(n); )
    i[o[1]] = o[2];
  return i;
}
const yv = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function tc(n, i, r, o, s) {
  if (L.isFunction(o))
    return o.call(this, i, r);
  if (s && (i = r), !!L.isString(i)) {
    if (L.isString(o))
      return i.indexOf(o) !== -1;
    if (L.isRegExp(o))
      return o.test(i);
  }
}
function bv(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, r, o) => r.toUpperCase() + o);
}
function vv(n, i) {
  const r = L.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(n, o + r, {
      value: function(s, c, d) {
        return this[o].call(this, i, s, c, d);
      },
      configurable: !0
    });
  });
}
let Ot = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, r, o) {
    const s = this;
    function c(p, g, m) {
      const h = Ml(g);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const v = L.findKey(s, h);
      (!v || s[v] === void 0 || m === !0 || m === void 0 && s[v] !== !1) && (s[v || g] = yo(p));
    }
    const d = (p, g) => L.forEach(p, (m, h) => c(m, h, g));
    if (L.isPlainObject(i) || i instanceof this.constructor)
      d(i, r);
    else if (L.isString(i) && (i = i.trim()) && !yv(i))
      d(hv(i), r);
    else if (L.isObject(i) && L.isIterable(i)) {
      let p = {}, g, m;
      for (const h of i) {
        if (!L.isArray(h))
          throw TypeError("Object iterator must return a key-value pair");
        p[m = h[0]] = (g = p[m]) ? L.isArray(g) ? [...g, h[1]] : [g, h[1]] : h[1];
      }
      d(p, r);
    } else
      i != null && c(r, i, o);
    return this;
  }
  get(i, r) {
    if (i = Ml(i), i) {
      const o = L.findKey(this, i);
      if (o) {
        const s = this[o];
        if (!r)
          return s;
        if (r === !0)
          return gv(s);
        if (L.isFunction(r))
          return r.call(this, s, o);
        if (L.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, r) {
    if (i = Ml(i), i) {
      const o = L.findKey(this, i);
      return !!(o && this[o] !== void 0 && (!r || tc(this, this[o], o, r)));
    }
    return !1;
  }
  delete(i, r) {
    const o = this;
    let s = !1;
    function c(d) {
      if (d = Ml(d), d) {
        const p = L.findKey(o, d);
        p && (!r || tc(o, o[p], p, r)) && (delete o[p], s = !0);
      }
    }
    return L.isArray(i) ? i.forEach(c) : c(i), s;
  }
  clear(i) {
    const r = Object.keys(this);
    let o = r.length, s = !1;
    for (; o--; ) {
      const c = r[o];
      (!i || tc(this, this[c], c, i, !0)) && (delete this[c], s = !0);
    }
    return s;
  }
  normalize(i) {
    const r = this, o = {};
    return L.forEach(this, (s, c) => {
      const d = L.findKey(o, c);
      if (d) {
        r[d] = yo(s), delete r[c];
        return;
      }
      const p = i ? bv(c) : String(c).trim();
      p !== c && delete r[c], r[p] = yo(s), o[p] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const r = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (o, s) => {
      o != null && o !== !1 && (r[s] = i && L.isArray(o) ? o.join(", ") : o);
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
    const o = new this(i);
    return r.forEach((s) => o.set(s)), o;
  }
  static accessor(i) {
    const o = (this[ch] = this[ch] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function c(d) {
      const p = Ml(d);
      o[p] || (vv(s, d), o[p] = !0);
    }
    return L.isArray(i) ? i.forEach(c) : c(i), this;
  }
};
Ot.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(Ot.prototype, ({ value: n }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(o) {
      this[r] = o;
    }
  };
});
L.freezeMethods(Ot);
function nc(n, i) {
  const r = this || Yl, o = i || r, s = Ot.from(o.headers);
  let c = o.data;
  return L.forEach(n, function(p) {
    c = p.call(r, c, s.normalize(), i ? i.status : void 0);
  }), s.normalize(), c;
}
function Og(n) {
  return !!(n && n.__CANCEL__);
}
function zi(n, i, r) {
  Ae.call(this, n ?? "canceled", Ae.ERR_CANCELED, i, r), this.name = "CanceledError";
}
L.inherits(zi, Ae, {
  __CANCEL__: !0
});
function _g(n, i, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? n(r) : i(new Ae(
    "Request failed with status code " + r.status,
    [Ae.ERR_BAD_REQUEST, Ae.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Sv(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function xv(n, i) {
  n = n || 10;
  const r = new Array(n), o = new Array(n);
  let s = 0, c = 0, d;
  return i = i !== void 0 ? i : 1e3, function(g) {
    const m = Date.now(), h = o[c];
    d || (d = m), r[s] = g, o[s] = m;
    let v = c, E = 0;
    for (; v !== s; )
      E += r[v++], v = v % n;
    if (s = (s + 1) % n, s === c && (c = (c + 1) % n), m - d < i)
      return;
    const w = h && m - h;
    return w ? Math.round(E * 1e3 / w) : void 0;
  };
}
function wv(n, i) {
  let r = 0, o = 1e3 / i, s, c;
  const d = (m, h = Date.now()) => {
    r = h, s = null, c && (clearTimeout(c), c = null), n.apply(null, m);
  };
  return [(...m) => {
    const h = Date.now(), v = h - r;
    v >= o ? d(m, h) : (s = m, c || (c = setTimeout(() => {
      c = null, d(s);
    }, o - v)));
  }, () => s && d(s)];
}
const So = (n, i, r = 3) => {
  let o = 0;
  const s = xv(50, 250);
  return wv((c) => {
    const d = c.loaded, p = c.lengthComputable ? c.total : void 0, g = d - o, m = s(g), h = d <= p;
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
  }, r);
}, fh = (n, i) => {
  const r = n != null;
  return [(o) => i[0]({
    lengthComputable: r,
    total: n,
    loaded: o
  }), i[1]];
}, dh = (n) => (...i) => L.asap(() => n(...i)), Ev = vt.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, i) => (r) => (r = new URL(r, vt.origin), n.protocol === r.protocol && n.host === r.host && (i || n.port === r.port)))(
  new URL(vt.origin),
  vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent)
) : () => !0, Av = vt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, i, r, o, s, c) {
      const d = [n + "=" + encodeURIComponent(i)];
      L.isNumber(r) && d.push("expires=" + new Date(r).toGMTString()), L.isString(o) && d.push("path=" + o), L.isString(s) && d.push("domain=" + s), c === !0 && d.push("secure"), document.cookie = d.join("; ");
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
function Tv(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function Cv(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function Ng(n, i, r) {
  let o = !Tv(i);
  return n && (o || r == !1) ? Cv(n, i) : i;
}
const ph = (n) => n instanceof Ot ? { ...n } : n;
function Na(n, i) {
  i = i || {};
  const r = {};
  function o(m, h, v, E) {
    return L.isPlainObject(m) && L.isPlainObject(h) ? L.merge.call({ caseless: E }, m, h) : L.isPlainObject(h) ? L.merge({}, h) : L.isArray(h) ? h.slice() : h;
  }
  function s(m, h, v, E) {
    if (L.isUndefined(h)) {
      if (!L.isUndefined(m))
        return o(void 0, m, v, E);
    } else return o(m, h, v, E);
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
    headers: (m, h, v) => s(ph(m), ph(h), v, !0)
  };
  return L.forEach(Object.keys(Object.assign({}, n, i)), function(h) {
    const v = g[h] || s, E = v(n[h], i[h], h);
    L.isUndefined(E) && v !== p || (r[h] = E);
  }), r;
}
const Mg = (n) => {
  const i = Na({}, n);
  let { data: r, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: c, headers: d, auth: p } = i;
  i.headers = d = Ot.from(d), i.url = zg(Ng(i.baseURL, i.url, i.allowAbsoluteUrls), n.params, n.paramsSerializer), p && d.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let g;
  if (L.isFormData(r)) {
    if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
      d.setContentType(void 0);
    else if ((g = d.getContentType()) !== !1) {
      const [m, ...h] = g ? g.split(";").map((v) => v.trim()).filter(Boolean) : [];
      d.setContentType([m || "multipart/form-data", ...h].join("; "));
    }
  }
  if (vt.hasStandardBrowserEnv && (o && L.isFunction(o) && (o = o(i)), o || o !== !1 && Ev(i.url))) {
    const m = s && c && Av.read(c);
    m && d.set(s, m);
  }
  return i;
}, kv = typeof XMLHttpRequest < "u", zv = kv && function(n) {
  return new Promise(function(r, o) {
    const s = Mg(n);
    let c = s.data;
    const d = Ot.from(s.headers).normalize();
    let { responseType: p, onUploadProgress: g, onDownloadProgress: m } = s, h, v, E, w, k;
    function D() {
      w && w(), k && k(), s.cancelToken && s.cancelToken.unsubscribe(h), s.signal && s.signal.removeEventListener("abort", h);
    }
    let B = new XMLHttpRequest();
    B.open(s.method.toUpperCase(), s.url, !0), B.timeout = s.timeout;
    function _() {
      if (!B)
        return;
      const F = Ot.from(
        "getAllResponseHeaders" in B && B.getAllResponseHeaders()
      ), W = {
        data: !p || p === "text" || p === "json" ? B.responseText : B.response,
        status: B.status,
        statusText: B.statusText,
        headers: F,
        config: n,
        request: B
      };
      _g(function(re) {
        r(re), D();
      }, function(re) {
        o(re), D();
      }, W), B = null;
    }
    "onloadend" in B ? B.onloadend = _ : B.onreadystatechange = function() {
      !B || B.readyState !== 4 || B.status === 0 && !(B.responseURL && B.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, B.onabort = function() {
      B && (o(new Ae("Request aborted", Ae.ECONNABORTED, n, B)), B = null);
    }, B.onerror = function() {
      o(new Ae("Network Error", Ae.ERR_NETWORK, n, B)), B = null;
    }, B.ontimeout = function() {
      let fe = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const W = s.transitional || Rg;
      s.timeoutErrorMessage && (fe = s.timeoutErrorMessage), o(new Ae(
        fe,
        W.clarifyTimeoutError ? Ae.ETIMEDOUT : Ae.ECONNABORTED,
        n,
        B
      )), B = null;
    }, c === void 0 && d.setContentType(null), "setRequestHeader" in B && L.forEach(d.toJSON(), function(fe, W) {
      B.setRequestHeader(W, fe);
    }), L.isUndefined(s.withCredentials) || (B.withCredentials = !!s.withCredentials), p && p !== "json" && (B.responseType = s.responseType), m && ([E, k] = So(m, !0), B.addEventListener("progress", E)), g && B.upload && ([v, w] = So(g), B.upload.addEventListener("progress", v), B.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (h = (F) => {
      B && (o(!F || F.type ? new zi(null, n, B) : F), B.abort(), B = null);
    }, s.cancelToken && s.cancelToken.subscribe(h), s.signal && (s.signal.aborted ? h() : s.signal.addEventListener("abort", h)));
    const Z = Sv(s.url);
    if (Z && vt.protocols.indexOf(Z) === -1) {
      o(new Ae("Unsupported protocol " + Z + ":", Ae.ERR_BAD_REQUEST, n));
      return;
    }
    B.send(c || null);
  });
}, Rv = (n, i) => {
  const { length: r } = n = n ? n.filter(Boolean) : [];
  if (i || r) {
    let o = new AbortController(), s;
    const c = function(m) {
      if (!s) {
        s = !0, p();
        const h = m instanceof Error ? m : this.reason;
        o.abort(h instanceof Ae ? h : new zi(h instanceof Error ? h.message : h));
      }
    };
    let d = i && setTimeout(() => {
      d = null, c(new Ae(`timeout ${i} of ms exceeded`, Ae.ETIMEDOUT));
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
}, Dv = function* (n, i) {
  let r = n.byteLength;
  if (r < i) {
    yield n;
    return;
  }
  let o = 0, s;
  for (; o < r; )
    s = o + i, yield n.slice(o, s), o = s;
}, Ov = async function* (n, i) {
  for await (const r of _v(n))
    yield* Dv(r, i);
}, _v = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const i = n.getReader();
  try {
    for (; ; ) {
      const { done: r, value: o } = await i.read();
      if (r)
        break;
      yield o;
    }
  } finally {
    await i.cancel();
  }
}, mh = (n, i, r, o) => {
  const s = Ov(n, i);
  let c = 0, d, p = (g) => {
    d || (d = !0, o && o(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: m, value: h } = await s.next();
        if (m) {
          p(), g.close();
          return;
        }
        let v = h.byteLength;
        if (r) {
          let E = c += v;
          r(E);
        }
        g.enqueue(new Uint8Array(h));
      } catch (m) {
        throw p(m), m;
      }
    },
    cancel(g) {
      return p(g), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ro = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ug = Ro && typeof ReadableStream == "function", Nv = Ro && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), Lg = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, Mv = Ug && Lg(() => {
  let n = !1;
  const i = new Request(vt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), hh = 64 * 1024, Ec = Ug && Lg(() => L.isReadableStream(new Response("").body)), xo = {
  stream: Ec && ((n) => n.body)
};
Ro && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !xo[i] && (xo[i] = L.isFunction(n[i]) ? (r) => r[i]() : (r, o) => {
      throw new Ae(`Response type '${i}' is not supported`, Ae.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const Uv = async (n) => {
  if (n == null)
    return 0;
  if (L.isBlob(n))
    return n.size;
  if (L.isSpecCompliantForm(n))
    return (await new Request(vt.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (L.isArrayBufferView(n) || L.isArrayBuffer(n))
    return n.byteLength;
  if (L.isURLSearchParams(n) && (n = n + ""), L.isString(n))
    return (await Nv(n)).byteLength;
}, Lv = async (n, i) => {
  const r = L.toFiniteNumber(n.getContentLength());
  return r ?? Uv(i);
}, Bv = Ro && (async (n) => {
  let {
    url: i,
    method: r,
    data: o,
    signal: s,
    cancelToken: c,
    timeout: d,
    onDownloadProgress: p,
    onUploadProgress: g,
    responseType: m,
    headers: h,
    withCredentials: v = "same-origin",
    fetchOptions: E
  } = Mg(n);
  m = m ? (m + "").toLowerCase() : "text";
  let w = Rv([s, c && c.toAbortSignal()], d), k;
  const D = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let B;
  try {
    if (g && Mv && r !== "get" && r !== "head" && (B = await Lv(h, o)) !== 0) {
      let W = new Request(i, {
        method: "POST",
        body: o,
        duplex: "half"
      }), U;
      if (L.isFormData(o) && (U = W.headers.get("content-type")) && h.setContentType(U), W.body) {
        const [re, P] = fh(
          B,
          So(dh(g))
        );
        o = mh(W.body, hh, re, P);
      }
    }
    L.isString(v) || (v = v ? "include" : "omit");
    const _ = "credentials" in Request.prototype;
    k = new Request(i, {
      ...E,
      signal: w,
      method: r.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: _ ? v : void 0
    });
    let Z = await fetch(k, E);
    const F = Ec && (m === "stream" || m === "response");
    if (Ec && (p || F && D)) {
      const W = {};
      ["status", "statusText", "headers"].forEach((de) => {
        W[de] = Z[de];
      });
      const U = L.toFiniteNumber(Z.headers.get("content-length")), [re, P] = p && fh(
        U,
        So(dh(p), !0)
      ) || [];
      Z = new Response(
        mh(Z.body, hh, re, () => {
          P && P(), D && D();
        }),
        W
      );
    }
    m = m || "text";
    let fe = await xo[L.findKey(xo, m) || "text"](Z, n);
    return !F && D && D(), await new Promise((W, U) => {
      _g(W, U, {
        data: fe,
        headers: Ot.from(Z.headers),
        status: Z.status,
        statusText: Z.statusText,
        config: n,
        request: k
      });
    });
  } catch (_) {
    throw D && D(), _ && _.name === "TypeError" && /Load failed|fetch/i.test(_.message) ? Object.assign(
      new Ae("Network Error", Ae.ERR_NETWORK, n, k),
      {
        cause: _.cause || _
      }
    ) : Ae.from(_, _ && _.code, n, k);
  }
}), Ac = {
  http: W1,
  xhr: zv,
  fetch: Bv
};
L.forEach(Ac, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const gh = (n) => `- ${n}`, jv = (n) => L.isFunction(n) || n === null || n === !1, Bg = {
  getAdapter: (n) => {
    n = L.isArray(n) ? n : [n];
    const { length: i } = n;
    let r, o;
    const s = {};
    for (let c = 0; c < i; c++) {
      r = n[c];
      let d;
      if (o = r, !jv(r) && (o = Ac[(d = String(r)).toLowerCase()], o === void 0))
        throw new Ae(`Unknown adapter '${d}'`);
      if (o)
        break;
      s[d || "#" + c] = o;
    }
    if (!o) {
      const c = Object.entries(s).map(
        ([p, g]) => `adapter ${p} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let d = i ? c.length > 1 ? `since :
` + c.map(gh).join(`
`) : " " + gh(c[0]) : "as no adapter specified";
      throw new Ae(
        "There is no suitable adapter to dispatch the request " + d,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: Ac
};
function ac(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new zi(null, n);
}
function yh(n) {
  return ac(n), n.headers = Ot.from(n.headers), n.data = nc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Bg.getAdapter(n.adapter || Yl.adapter)(n).then(function(o) {
    return ac(n), o.data = nc.call(
      n,
      n.transformResponse,
      o
    ), o.headers = Ot.from(o.headers), o;
  }, function(o) {
    return Og(o) || (ac(n), o && o.response && (o.response.data = nc.call(
      n,
      n.transformResponse,
      o.response
    ), o.response.headers = Ot.from(o.response.headers))), Promise.reject(o);
  });
}
const jg = "1.10.0", Do = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, i) => {
  Do[n] = function(o) {
    return typeof o === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
const bh = {};
Do.transitional = function(i, r, o) {
  function s(c, d) {
    return "[Axios v" + jg + "] Transitional option '" + c + "'" + d + (o ? ". " + o : "");
  }
  return (c, d, p) => {
    if (i === !1)
      throw new Ae(
        s(d, " has been removed" + (r ? " in " + r : "")),
        Ae.ERR_DEPRECATED
      );
    return r && !bh[d] && (bh[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(c, d, p) : !0;
  };
};
Do.spelling = function(i) {
  return (r, o) => (console.warn(`${o} is likely a misspelling of ${i}`), !0);
};
function qv(n, i, r) {
  if (typeof n != "object")
    throw new Ae("options must be an object", Ae.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let s = o.length;
  for (; s-- > 0; ) {
    const c = o[s], d = i[c];
    if (d) {
      const p = n[c], g = p === void 0 || d(p, c, n);
      if (g !== !0)
        throw new Ae("option " + c + " must be " + g, Ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ae("Unknown option " + c, Ae.ERR_BAD_OPTION);
  }
}
const bo = {
  assertOptions: qv,
  validators: Do
}, yn = bo.validators;
let _a = class {
  constructor(i) {
    this.defaults = i || {}, this.interceptors = {
      request: new sh(),
      response: new sh()
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
    } catch (o) {
      if (o instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const c = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? c && !String(o.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + c) : o.stack = c;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(i, r) {
    typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = Na(this.defaults, r);
    const { transitional: o, paramsSerializer: s, headers: c } = r;
    o !== void 0 && bo.assertOptions(o, {
      silentJSONParsing: yn.transitional(yn.boolean),
      forcedJSONParsing: yn.transitional(yn.boolean),
      clarifyTimeoutError: yn.transitional(yn.boolean)
    }, !1), s != null && (L.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : bo.assertOptions(s, {
      encode: yn.function,
      serialize: yn.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), bo.assertOptions(r, {
      baseUrl: yn.spelling("baseURL"),
      withXsrfToken: yn.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let d = c && L.merge(
      c.common,
      c[r.method]
    );
    c && L.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (k) => {
        delete c[k];
      }
    ), r.headers = Ot.concat(d, c);
    const p = [];
    let g = !0;
    this.interceptors.request.forEach(function(D) {
      typeof D.runWhen == "function" && D.runWhen(r) === !1 || (g = g && D.synchronous, p.unshift(D.fulfilled, D.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(D) {
      m.push(D.fulfilled, D.rejected);
    });
    let h, v = 0, E;
    if (!g) {
      const k = [yh.bind(this), void 0];
      for (k.unshift.apply(k, p), k.push.apply(k, m), E = k.length, h = Promise.resolve(r); v < E; )
        h = h.then(k[v++], k[v++]);
      return h;
    }
    E = p.length;
    let w = r;
    for (v = 0; v < E; ) {
      const k = p[v++], D = p[v++];
      try {
        w = k(w);
      } catch (B) {
        D.call(this, B);
        break;
      }
    }
    try {
      h = yh.call(this, w);
    } catch (k) {
      return Promise.reject(k);
    }
    for (v = 0, E = m.length; v < E; )
      h = h.then(m[v++], m[v++]);
    return h;
  }
  getUri(i) {
    i = Na(this.defaults, i);
    const r = Ng(i.baseURL, i.url, i.allowAbsoluteUrls);
    return zg(r, i.params, i.paramsSerializer);
  }
};
L.forEach(["delete", "get", "head", "options"], function(i) {
  _a.prototype[i] = function(r, o) {
    return this.request(Na(o || {}, {
      method: i,
      url: r,
      data: (o || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(i) {
  function r(o) {
    return function(c, d, p) {
      return this.request(Na(p || {}, {
        method: i,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  _a.prototype[i] = r(), _a.prototype[i + "Form"] = r(!0);
});
let Hv = class qg {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(c) {
      r = c;
    });
    const o = this;
    this.promise.then((s) => {
      if (!o._listeners) return;
      let c = o._listeners.length;
      for (; c-- > 0; )
        o._listeners[c](s);
      o._listeners = null;
    }), this.promise.then = (s) => {
      let c;
      const d = new Promise((p) => {
        o.subscribe(p), c = p;
      }).then(s);
      return d.cancel = function() {
        o.unsubscribe(c);
      }, d;
    }, i(function(c, d, p) {
      o.reason || (o.reason = new zi(c, d, p), r(o.reason));
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
    const i = new AbortController(), r = (o) => {
      i.abort(o);
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
      token: new qg(function(s) {
        i = s;
      }),
      cancel: i
    };
  }
};
function Vv(n) {
  return function(r) {
    return n.apply(null, r);
  };
}
function Iv(n) {
  return L.isObject(n) && n.isAxiosError === !0;
}
const Tc = {
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
Object.entries(Tc).forEach(([n, i]) => {
  Tc[i] = n;
});
function Hg(n) {
  const i = new _a(n), r = gg(_a.prototype.request, i);
  return L.extend(r, _a.prototype, i, { allOwnKeys: !0 }), L.extend(r, i, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Hg(Na(n, s));
  }, r;
}
const Ne = Hg(Yl);
Ne.Axios = _a;
Ne.CanceledError = zi;
Ne.CancelToken = Hv;
Ne.isCancel = Og;
Ne.VERSION = jg;
Ne.toFormData = zo;
Ne.AxiosError = Ae;
Ne.Cancel = Ne.CanceledError;
Ne.all = function(i) {
  return Promise.all(i);
};
Ne.spread = Vv;
Ne.isAxiosError = Iv;
Ne.mergeConfig = Na;
Ne.AxiosHeaders = Ot;
Ne.formToJSON = (n) => Dg(L.isHTMLForm(n) ? new FormData(n) : n);
Ne.getAdapter = Bg.getAdapter;
Ne.HttpStatusCode = Tc;
Ne.default = Ne;
const {
  Axios: yC,
  AxiosError: bC,
  CanceledError: vC,
  isCancel: SC,
  CancelToken: xC,
  VERSION: wC,
  all: EC,
  Cancel: AC,
  isAxiosError: TC,
  spread: CC,
  toFormData: kC,
  AxiosHeaders: zC,
  HttpStatusCode: RC,
  formToJSON: DC,
  getAdapter: OC,
  mergeConfig: _C
} = Ne;
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qv = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gv = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), vh = (n) => {
  const i = Gv(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, Vg = (...n) => n.filter((i, r, o) => !!i && i.trim() !== "" && o.indexOf(i) === r).join(" ").trim(), Fv = (n) => {
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
var Yv = {
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
const Xv = pe.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: c,
    iconNode: d,
    ...p
  }, g) => pe.createElement(
    "svg",
    {
      ref: g,
      ...Yv,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: o ? Number(r) * 24 / Number(i) : r,
      className: Vg("lucide", s),
      ...!c && !Fv(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([m, h]) => pe.createElement(m, h)),
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
const Nt = (n, i) => {
  const r = pe.forwardRef(
    ({ className: o, ...s }, c) => pe.createElement(Xv, {
      ref: c,
      iconNode: i,
      className: Vg(
        `lucide-${Qv(vh(n))}`,
        `lucide-${n}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = vh(n), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pv = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], Ig = Nt("bot", Pv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kv = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Qg = Nt("chevron-down", Kv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zv = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Jv = Nt("copy", Zv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wv = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], $v = Nt("globe", Wv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eS = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Gg = Nt("loader-circle", eS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tS = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], Sh = Nt("message-circle", tS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nS = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], aS = Nt("minimize-2", nS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iS = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], lS = Nt("moon", iS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rS = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], oS = Nt("send", rS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uS = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], sS = Nt("sun", uS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cS = [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ]
], fS = Nt("thumbs-down", cS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dS = [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ]
], pS = Nt("thumbs-up", dS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mS = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], hS = Nt("user", mS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gS = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], yS = Nt("x", gS);
function Fg(n) {
  var i, r, o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (i = 0; i < s; i++) n[i] && (r = Fg(n[i])) && (o && (o += " "), o += r);
  } else for (r in n) n[r] && (o && (o += " "), o += r);
  return o;
}
function Yg() {
  for (var n, i, r = 0, o = "", s = arguments.length; r < s; r++) (n = arguments[r]) && (i = Fg(n)) && (o && (o += " "), o += i);
  return o;
}
const Fc = "-", bS = (n) => {
  const i = SS(n), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = n;
  return {
    getClassGroupId: (d) => {
      const p = d.split(Fc);
      return p[0] === "" && p.length !== 1 && p.shift(), Xg(p, i) || vS(d);
    },
    getConflictingClassGroupIds: (d, p) => {
      const g = r[d] || [];
      return p && o[d] ? [...g, ...o[d]] : g;
    }
  };
}, Xg = (n, i) => {
  if (n.length === 0)
    return i.classGroupId;
  const r = n[0], o = i.nextPart.get(r), s = o ? Xg(n.slice(1), o) : void 0;
  if (s)
    return s;
  if (i.validators.length === 0)
    return;
  const c = n.join(Fc);
  return i.validators.find(({
    validator: d
  }) => d(c))?.classGroupId;
}, xh = /^\[(.+)\]$/, vS = (n) => {
  if (xh.test(n)) {
    const i = xh.exec(n)[1], r = i?.substring(0, i.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, SS = (n) => {
  const {
    theme: i,
    classGroups: r
  } = n, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in r)
    Cc(r[s], o, s, i);
  return o;
}, Cc = (n, i, r, o) => {
  n.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? i : wh(i, s);
      c.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (xS(s)) {
        Cc(s(o), i, r, o);
        return;
      }
      i.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([c, d]) => {
      Cc(d, wh(i, c), r, o);
    });
  });
}, wh = (n, i) => {
  let r = n;
  return i.split(Fc).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, xS = (n) => n.isThemeGetter, wS = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (c, d) => {
    r.set(c, d), i++, i > n && (i = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let d = r.get(c);
      if (d !== void 0)
        return d;
      if ((d = o.get(c)) !== void 0)
        return s(c, d), d;
    },
    set(c, d) {
      r.has(c) ? r.set(c, d) : s(c, d);
    }
  };
}, kc = "!", zc = ":", ES = zc.length, AS = (n) => {
  const {
    prefix: i,
    experimentalParseClassName: r
  } = n;
  let o = (s) => {
    const c = [];
    let d = 0, p = 0, g = 0, m;
    for (let k = 0; k < s.length; k++) {
      let D = s[k];
      if (d === 0 && p === 0) {
        if (D === zc) {
          c.push(s.slice(g, k)), g = k + ES;
          continue;
        }
        if (D === "/") {
          m = k;
          continue;
        }
      }
      D === "[" ? d++ : D === "]" ? d-- : D === "(" ? p++ : D === ")" && p--;
    }
    const h = c.length === 0 ? s : s.substring(g), v = TS(h), E = v !== h, w = m && m > g ? m - g : void 0;
    return {
      modifiers: c,
      hasImportantModifier: E,
      baseClassName: v,
      maybePostfixModifierPosition: w
    };
  };
  if (i) {
    const s = i + zc, c = o;
    o = (d) => d.startsWith(s) ? c(d.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const s = o;
    o = (c) => r({
      className: c,
      parseClassName: s
    });
  }
  return o;
}, TS = (n) => n.endsWith(kc) ? n.substring(0, n.length - 1) : n.startsWith(kc) ? n.substring(1) : n, CS = (n) => {
  const i = Object.fromEntries(n.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const s = [];
    let c = [];
    return o.forEach((d) => {
      d[0] === "[" || i[d] ? (s.push(...c.sort(), d), c = []) : c.push(d);
    }), s.push(...c.sort()), s;
  };
}, kS = (n) => ({
  cache: wS(n.cacheSize),
  parseClassName: AS(n),
  sortModifiers: CS(n),
  ...bS(n)
}), zS = /\s+/, RS = (n, i) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: c
  } = i, d = [], p = n.trim().split(zS);
  let g = "";
  for (let m = p.length - 1; m >= 0; m -= 1) {
    const h = p[m], {
      isExternal: v,
      modifiers: E,
      hasImportantModifier: w,
      baseClassName: k,
      maybePostfixModifierPosition: D
    } = r(h);
    if (v) {
      g = h + (g.length > 0 ? " " + g : g);
      continue;
    }
    let B = !!D, _ = o(B ? k.substring(0, D) : k);
    if (!_) {
      if (!B) {
        g = h + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (_ = o(k), !_) {
        g = h + (g.length > 0 ? " " + g : g);
        continue;
      }
      B = !1;
    }
    const Z = c(E).join(":"), F = w ? Z + kc : Z, fe = F + _;
    if (d.includes(fe))
      continue;
    d.push(fe);
    const W = s(_, B);
    for (let U = 0; U < W.length; ++U) {
      const re = W[U];
      d.push(F + re);
    }
    g = h + (g.length > 0 ? " " + g : g);
  }
  return g;
};
function DS() {
  let n = 0, i, r, o = "";
  for (; n < arguments.length; )
    (i = arguments[n++]) && (r = Pg(i)) && (o && (o += " "), o += r);
  return o;
}
const Pg = (n) => {
  if (typeof n == "string")
    return n;
  let i, r = "";
  for (let o = 0; o < n.length; o++)
    n[o] && (i = Pg(n[o])) && (r && (r += " "), r += i);
  return r;
};
function OS(n, ...i) {
  let r, o, s, c = d;
  function d(g) {
    const m = i.reduce((h, v) => v(h), n());
    return r = kS(m), o = r.cache.get, s = r.cache.set, c = p, p(g);
  }
  function p(g) {
    const m = o(g);
    if (m)
      return m;
    const h = RS(g, r);
    return s(g, h), h;
  }
  return function() {
    return c(DS.apply(null, arguments));
  };
}
const rt = (n) => {
  const i = (r) => r[n] || [];
  return i.isThemeGetter = !0, i;
}, Kg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Zg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, _S = /^\d+\/\d+$/, NS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, MS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, US = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, LS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, BS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, wi = (n) => _S.test(n), ze = (n) => !!n && !Number.isNaN(Number(n)), sa = (n) => !!n && Number.isInteger(Number(n)), ic = (n) => n.endsWith("%") && ze(n.slice(0, -1)), jn = (n) => NS.test(n), jS = () => !0, qS = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  MS.test(n) && !US.test(n)
), Jg = () => !1, HS = (n) => LS.test(n), VS = (n) => BS.test(n), IS = (n) => !se(n) && !ce(n), QS = (n) => Ri(n, ey, Jg), se = (n) => Kg.test(n), Ra = (n) => Ri(n, ty, qS), lc = (n) => Ri(n, PS, ze), Eh = (n) => Ri(n, Wg, Jg), GS = (n) => Ri(n, $g, VS), uo = (n) => Ri(n, ny, HS), ce = (n) => Zg.test(n), Ul = (n) => Di(n, ty), FS = (n) => Di(n, KS), Ah = (n) => Di(n, Wg), YS = (n) => Di(n, ey), XS = (n) => Di(n, $g), so = (n) => Di(n, ny, !0), Ri = (n, i, r) => {
  const o = Kg.exec(n);
  return o ? o[1] ? i(o[1]) : r(o[2]) : !1;
}, Di = (n, i, r = !1) => {
  const o = Zg.exec(n);
  return o ? o[1] ? i(o[1]) : r : !1;
}, Wg = (n) => n === "position" || n === "percentage", $g = (n) => n === "image" || n === "url", ey = (n) => n === "length" || n === "size" || n === "bg-size", ty = (n) => n === "length", PS = (n) => n === "number", KS = (n) => n === "family-name", ny = (n) => n === "shadow", ZS = () => {
  const n = rt("color"), i = rt("font"), r = rt("text"), o = rt("font-weight"), s = rt("tracking"), c = rt("leading"), d = rt("breakpoint"), p = rt("container"), g = rt("spacing"), m = rt("radius"), h = rt("shadow"), v = rt("inset-shadow"), E = rt("text-shadow"), w = rt("drop-shadow"), k = rt("blur"), D = rt("perspective"), B = rt("aspect"), _ = rt("ease"), Z = rt("animate"), F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], fe = () => [
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
  ], W = () => [...fe(), ce, se], U = () => ["auto", "hidden", "clip", "visible", "scroll"], re = () => ["auto", "contain", "none"], P = () => [ce, se, g], de = () => [wi, "full", "auto", ...P()], we = () => [sa, "none", "subgrid", ce, se], le = () => ["auto", {
    span: ["full", sa, ce, se]
  }, sa, ce, se], ne = () => [sa, "auto", ce, se], te = () => ["auto", "min", "max", "fr", ce, se], ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ie = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...P()], Y = () => [wi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], G = () => [n, ce, se], Ee = () => [...fe(), Ah, Eh, {
    position: [ce, se]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], V = () => ["auto", "cover", "contain", YS, QS, {
    size: [ce, se]
  }], J = () => [ic, Ul, Ra], x = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    m,
    ce,
    se
  ], $ = () => ["", ze, Ul, Ra], oe = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], be = () => [ze, ic, Ah, Eh], Re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    k,
    ce,
    se
  ], Pe = () => ["none", ze, ce, se], ot = () => ["none", ze, ce, se], xt = () => [ze, ce, se], cn = () => [wi, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [jn],
      breakpoint: [jn],
      color: [jS],
      container: [jn],
      "drop-shadow": [jn],
      ease: ["in", "out", "in-out"],
      font: [IS],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [jn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [jn],
      shadow: [jn],
      spacing: ["px", ze],
      text: [jn],
      "text-shadow": [jn],
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
        aspect: ["auto", "square", wi, se, ce, B]
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
        columns: [ze, se, ce, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
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
        z: [sa, "auto", ce, se]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [wi, "full", "auto", p, ...P()]
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
        flex: [ze, wi, "auto", "initial", "none", se]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ze, ce, se]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ze, ce, se]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [sa, "first", "last", "none", ce, se]
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
        col: le()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ne()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ne()
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
        row: le()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ne()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ne()
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
        "auto-cols": te()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": te()
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
        m: O()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: O()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: O()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: O()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: O()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: O()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: O()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: O()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: O()
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
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...Y()]
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
          ...Y()
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
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ul, Ra]
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
        font: [o, ce, lc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ic, se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [FS, se, i]
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
        "line-clamp": [ze, "none", ce, lc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          c,
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
        placeholder: G()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: G()
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
        decoration: [...oe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ze, "from-font", "auto", ce, Ra]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: G()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ze, "auto", ce, se]
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
          }, sa, ce, se],
          radial: ["", ce, se],
          conic: [sa, ce, se]
        }, XS, GS]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: G()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: J()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: J()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: J()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: G()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: x()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": x()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": x()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": x()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": x()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": x()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": x()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": x()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": x()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": x()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": x()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": x()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": x()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": x()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": x()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: $()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
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
        "divide-y": $()
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
        border: [...oe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...oe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: G()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": G()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": G()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": G()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": G()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": G()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": G()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": G()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": G()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: G()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...oe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ze, ce, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ze, Ul, Ra]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: G()
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
          so,
          uo
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: G()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", v, so, uo]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": G()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $()
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
        ring: G()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ze, Ra]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": G()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": G()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", E, so, uo]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": G()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ze, ce, se]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
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
        "mask-linear": [ze]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": be()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": be()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": G()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": be()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": be()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": G()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": be()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": be()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": G()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": be()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": be()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": G()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": be()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": be()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": G()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": be()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": be()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": G()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": be()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": be()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": G()
      }],
      "mask-image-radial": [{
        "mask-radial": [ce, se]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": be()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": be()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": G()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": G()
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
        "mask-radial-at": fe()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ze]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": be()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": be()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": G()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": G()
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
        blur: Re()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ze, ce, se]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ze, ce, se]
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
          w,
          so,
          uo
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": G()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ze, ce, se]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ze, ce, se]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ze, ce, se]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ze, ce, se]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ze, ce, se]
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
        "backdrop-blur": Re()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ze, ce, se]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ze, ce, se]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ze, ce, se]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ze, ce, se]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ze, ce, se]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ze, ce, se]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ze, ce, se]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ze, ce, se]
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
        duration: [ze, "initial", ce, se]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, ce, se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ze, ce, se]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Z, ce, se]
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
        perspective: [D, ce, se]
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
        rotate: Pe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Pe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Pe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Pe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ot()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ot()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ot()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ot()
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
        transform: [ce, se, "", "none", "gpu", "cpu"]
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
        translate: cn()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": cn()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": cn()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": cn()
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
        accent: G()
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
        caret: G()
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
        fill: ["none", ...G()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ze, Ul, Ra, lc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...G()]
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
}, JS = /* @__PURE__ */ OS(ZS);
function Ma(...n) {
  return JS(Yg(n));
}
function ay(n, i) {
  const r = n.replace("#", ""), o = parseInt(r.substr(0, 2), 16), s = parseInt(r.substr(2, 2), 16), c = parseInt(r.substr(4, 2), 16), d = (100 - i) / 100, p = Math.round(o * d), g = Math.round(s * d), m = Math.round(c * d);
  return "#" + (p < 16 ? "0" : "") + p.toString(16) + (g < 16 ? "0" : "") + g.toString(16) + (m < 16 ? "0" : "") + m.toString(16);
}
function WS(n, i) {
  const r = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const $S = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ex = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, tx = {};
function Th(n, i) {
  return (tx.jsx ? ex : $S).test(n);
}
const nx = /[ \t\n\f\r]/g;
function ax(n) {
  return typeof n == "object" ? n.type === "text" ? Ch(n.value) : !1 : Ch(n);
}
function Ch(n) {
  return n.replace(nx, "") === "";
}
class Xl {
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
  constructor(i, r, o) {
    this.normal = r, this.property = i, o && (this.space = o);
  }
}
Xl.prototype.normal = {};
Xl.prototype.property = {};
Xl.prototype.space = void 0;
function iy(n, i) {
  const r = {}, o = {};
  for (const s of n)
    Object.assign(r, s.property), Object.assign(o, s.normal);
  return new Xl(r, o, i);
}
function Rc(n) {
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
  constructor(i, r) {
    this.attribute = r, this.property = i;
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
let ix = 0;
const Ce = Ua(), at = Ua(), Dc = Ua(), K = Ua(), Ye = Ua(), Ti = Ua(), Ft = Ua();
function Ua() {
  return 2 ** ++ix;
}
const Oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Ce,
  booleanish: at,
  commaOrSpaceSeparated: Ft,
  commaSeparated: Ti,
  number: K,
  overloadedBoolean: Dc,
  spaceSeparated: Ye
}, Symbol.toStringTag, { value: "Module" })), rc = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Oc)
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
  constructor(i, r, o, s) {
    let c = -1;
    if (super(i, r), kh(this, "space", s), typeof o == "number")
      for (; ++c < rc.length; ) {
        const d = rc[c];
        kh(this, rc[c], (o & Oc[d]) === Oc[d]);
      }
  }
}
Yc.prototype.defined = !0;
function kh(n, i, r) {
  r && (n[i] = r);
}
function Oi(n) {
  const i = {}, r = {};
  for (const [o, s] of Object.entries(n.properties)) {
    const c = new Yc(
      o,
      n.transform(n.attributes || {}, o),
      s,
      n.space
    );
    n.mustUseProperty && n.mustUseProperty.includes(o) && (c.mustUseProperty = !0), i[o] = c, r[Rc(o)] = o, r[Rc(c.attribute)] = o;
  }
  return new Xl(i, r, n.space);
}
const ly = Oi({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: at,
    ariaAutoComplete: null,
    ariaBusy: at,
    ariaChecked: at,
    ariaColCount: K,
    ariaColIndex: K,
    ariaColSpan: K,
    ariaControls: Ye,
    ariaCurrent: null,
    ariaDescribedBy: Ye,
    ariaDetails: null,
    ariaDisabled: at,
    ariaDropEffect: Ye,
    ariaErrorMessage: null,
    ariaExpanded: at,
    ariaFlowTo: Ye,
    ariaGrabbed: at,
    ariaHasPopup: null,
    ariaHidden: at,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Ye,
    ariaLevel: K,
    ariaLive: null,
    ariaModal: at,
    ariaMultiLine: at,
    ariaMultiSelectable: at,
    ariaOrientation: null,
    ariaOwns: Ye,
    ariaPlaceholder: null,
    ariaPosInSet: K,
    ariaPressed: at,
    ariaReadOnly: at,
    ariaRelevant: null,
    ariaRequired: at,
    ariaRoleDescription: Ye,
    ariaRowCount: K,
    ariaRowIndex: K,
    ariaRowSpan: K,
    ariaSelected: at,
    ariaSetSize: K,
    ariaSort: null,
    ariaValueMax: K,
    ariaValueMin: K,
    ariaValueNow: K,
    ariaValueText: null,
    role: null
  },
  transform(n, i) {
    return i === "role" ? i : "aria-" + i.slice(4).toLowerCase();
  }
});
function ry(n, i) {
  return i in n ? n[i] : i;
}
function oy(n, i) {
  return ry(n, i.toLowerCase());
}
const lx = Oi({
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
    acceptCharset: Ye,
    accessKey: Ye,
    action: null,
    allow: null,
    allowFullScreen: Ce,
    allowPaymentRequest: Ce,
    allowUserMedia: Ce,
    alt: null,
    as: null,
    async: Ce,
    autoCapitalize: null,
    autoComplete: Ye,
    autoFocus: Ce,
    autoPlay: Ce,
    blocking: Ye,
    capture: null,
    charSet: null,
    checked: Ce,
    cite: null,
    className: Ye,
    cols: K,
    colSpan: null,
    content: null,
    contentEditable: at,
    controls: Ce,
    controlsList: Ye,
    coords: K | Ti,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Ce,
    defer: Ce,
    dir: null,
    dirName: null,
    disabled: Ce,
    download: Dc,
    draggable: at,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Ce,
    formTarget: null,
    headers: Ye,
    height: K,
    hidden: Dc,
    high: K,
    href: null,
    hrefLang: null,
    htmlFor: Ye,
    httpEquiv: Ye,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Ce,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Ce,
    itemId: null,
    itemProp: Ye,
    itemRef: Ye,
    itemScope: Ce,
    itemType: Ye,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Ce,
    low: K,
    manifest: null,
    max: null,
    maxLength: K,
    media: null,
    method: null,
    min: null,
    minLength: K,
    multiple: Ce,
    muted: Ce,
    name: null,
    nonce: null,
    noModule: Ce,
    noValidate: Ce,
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
    open: Ce,
    optimum: K,
    pattern: null,
    ping: Ye,
    placeholder: null,
    playsInline: Ce,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Ce,
    referrerPolicy: null,
    rel: Ye,
    required: Ce,
    reversed: Ce,
    rows: K,
    rowSpan: K,
    sandbox: Ye,
    scope: null,
    scoped: Ce,
    seamless: Ce,
    selected: Ce,
    shadowRootClonable: Ce,
    shadowRootDelegatesFocus: Ce,
    shadowRootMode: null,
    shape: null,
    size: K,
    sizes: null,
    slot: null,
    span: K,
    spellCheck: at,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: K,
    step: null,
    style: null,
    tabIndex: K,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Ce,
    useMap: null,
    value: at,
    width: K,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Ye,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: K,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: K,
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
    compact: Ce,
    // Lists. Use CSS to reduce space between items instead
    declare: Ce,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: K,
    // `<img>` and `<object>`
    leftMargin: K,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: K,
    // `<body>`
    marginWidth: K,
    // `<body>`
    noResize: Ce,
    // `<frame>`
    noHref: Ce,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Ce,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Ce,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: K,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: at,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: K,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: K,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Ce,
    disableRemotePlayback: Ce,
    prefix: null,
    property: null,
    results: K,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: oy
}), rx = Oi({
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
    about: Ft,
    accentHeight: K,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: K,
    amplitude: K,
    arabicForm: null,
    ascent: K,
    attributeName: null,
    attributeType: null,
    azimuth: K,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: K,
    by: null,
    calcMode: null,
    capHeight: K,
    className: Ye,
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
    descent: K,
    diffuseConstant: K,
    direction: null,
    display: null,
    dur: null,
    divisor: K,
    dominantBaseline: null,
    download: Ce,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: K,
    enableBackground: null,
    end: null,
    event: null,
    exponent: K,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: K,
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
    hanging: K,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: K,
    horizOriginX: K,
    horizOriginY: K,
    id: null,
    ideographic: K,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: K,
    k: K,
    k1: K,
    k2: K,
    k3: K,
    k4: K,
    kernelMatrix: Ft,
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
    limitingConeAngle: K,
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
    mediaSize: K,
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
    overlinePosition: K,
    overlineThickness: K,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: K,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Ye,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: K,
    pointsAtY: K,
    pointsAtZ: K,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ft,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ft,
    rev: Ft,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ft,
    requiredFeatures: Ft,
    requiredFonts: Ft,
    requiredFormats: Ft,
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
    specularConstant: K,
    specularExponent: K,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: K,
    strikethroughThickness: K,
    string: null,
    stroke: null,
    strokeDashArray: Ft,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: K,
    strokeOpacity: K,
    strokeWidth: null,
    style: null,
    surfaceScale: K,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ft,
    tabIndex: K,
    tableValues: null,
    target: null,
    targetX: K,
    targetY: K,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ft,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: K,
    underlineThickness: K,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: K,
    values: null,
    vAlphabetic: K,
    vMathematical: K,
    vectorEffect: null,
    vHanging: K,
    vIdeographic: K,
    version: null,
    vertAdvY: K,
    vertOriginX: K,
    vertOriginY: K,
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
    xHeight: K,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: ry
}), uy = Oi({
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
}), sy = Oi({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: oy
}), cy = Oi({
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
}, ux = /[A-Z]/g, zh = /-[a-z]/g, sx = /^data[-\w.:]+$/i;
function cx(n, i) {
  const r = Rc(i);
  let o = i, s = Mt;
  if (r in n.normal)
    return n.property[n.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && sx.test(i)) {
    if (i.charAt(4) === "-") {
      const c = i.slice(5).replace(zh, dx);
      o = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!zh.test(c)) {
        let d = c.replace(ux, fx);
        d.charAt(0) !== "-" && (d = "-" + d), i = "data" + d;
      }
    }
    s = Yc;
  }
  return new s(o, i);
}
function fx(n) {
  return "-" + n.toLowerCase();
}
function dx(n) {
  return n.charAt(1).toUpperCase();
}
const px = iy([ly, lx, uy, sy, cy], "html"), Xc = iy([ly, rx, uy, sy, cy], "svg");
function mx(n) {
  return n.join(" ").trim();
}
var Ei = {}, oc, Rh;
function hx() {
  if (Rh) return oc;
  Rh = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, r = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, d = /^[;\s]*/, p = /^\s+|\s+$/g, g = `
`, m = "/", h = "*", v = "", E = "comment", w = "declaration";
  oc = function(D, B) {
    if (typeof D != "string")
      throw new TypeError("First argument must be a string");
    if (!D) return [];
    B = B || {};
    var _ = 1, Z = 1;
    function F(te) {
      var ae = te.match(i);
      ae && (_ += ae.length);
      var ie = te.lastIndexOf(g);
      Z = ~ie ? te.length - ie : Z + te.length;
    }
    function fe() {
      var te = { line: _, column: Z };
      return function(ae) {
        return ae.position = new W(te), P(), ae;
      };
    }
    function W(te) {
      this.start = te, this.end = { line: _, column: Z }, this.source = B.source;
    }
    W.prototype.content = D;
    function U(te) {
      var ae = new Error(
        B.source + ":" + _ + ":" + Z + ": " + te
      );
      if (ae.reason = te, ae.filename = B.source, ae.line = _, ae.column = Z, ae.source = D, !B.silent) throw ae;
    }
    function re(te) {
      var ae = te.exec(D);
      if (ae) {
        var ie = ae[0];
        return F(ie), D = D.slice(ie.length), ae;
      }
    }
    function P() {
      re(r);
    }
    function de(te) {
      var ae;
      for (te = te || []; ae = we(); )
        ae !== !1 && te.push(ae);
      return te;
    }
    function we() {
      var te = fe();
      if (!(m != D.charAt(0) || h != D.charAt(1))) {
        for (var ae = 2; v != D.charAt(ae) && (h != D.charAt(ae) || m != D.charAt(ae + 1)); )
          ++ae;
        if (ae += 2, v === D.charAt(ae - 1))
          return U("End of comment missing");
        var ie = D.slice(2, ae - 2);
        return Z += 2, F(ie), D = D.slice(ae), Z += 2, te({
          type: E,
          comment: ie
        });
      }
    }
    function le() {
      var te = fe(), ae = re(o);
      if (ae) {
        if (we(), !re(s)) return U("property missing ':'");
        var ie = re(c), O = te({
          type: w,
          property: k(ae[0].replace(n, v)),
          value: ie ? k(ie[0].replace(n, v)) : v
        });
        return re(d), O;
      }
    }
    function ne() {
      var te = [];
      de(te);
      for (var ae; ae = le(); )
        ae !== !1 && (te.push(ae), de(te));
      return te;
    }
    return P(), ne();
  };
  function k(D) {
    return D ? D.replace(p, v) : v;
  }
  return oc;
}
var Dh;
function gx() {
  if (Dh) return Ei;
  Dh = 1;
  var n = Ei && Ei.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(Ei, "__esModule", { value: !0 }), Ei.default = r;
  var i = n(hx());
  function r(o, s) {
    var c = null;
    if (!o || typeof o != "string")
      return c;
    var d = (0, i.default)(o), p = typeof s == "function";
    return d.forEach(function(g) {
      if (g.type === "declaration") {
        var m = g.property, h = g.value;
        p ? s(m, h, g) : h && (c = c || {}, c[m] = h);
      }
    }), c;
  }
  return Ei;
}
var Ll = {}, Oh;
function yx() {
  if (Oh) return Ll;
  Oh = 1, Object.defineProperty(Ll, "__esModule", { value: !0 }), Ll.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, r = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, c = function(m) {
    return !m || r.test(m) || n.test(m);
  }, d = function(m, h) {
    return h.toUpperCase();
  }, p = function(m, h) {
    return "".concat(h, "-");
  }, g = function(m, h) {
    return h === void 0 && (h = {}), c(m) ? m : (m = m.toLowerCase(), h.reactCompat ? m = m.replace(s, p) : m = m.replace(o, p), m.replace(i, d));
  };
  return Ll.camelCase = g, Ll;
}
var Bl, _h;
function bx() {
  if (_h) return Bl;
  _h = 1;
  var n = Bl && Bl.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, i = n(gx()), r = yx();
  function o(s, c) {
    var d = {};
    return !s || typeof s != "string" || (0, i.default)(s, function(p, g) {
      p && g && (d[(0, r.camelCase)(p, c)] = g);
    }), d;
  }
  return o.default = o, Bl = o, Bl;
}
var vx = bx();
const Sx = /* @__PURE__ */ Hc(vx), fy = dy("end"), Pc = dy("start");
function dy(n) {
  return i;
  function i(r) {
    const o = r && r.position && r.position[n] || {};
    if (typeof o.line == "number" && o.line > 0 && typeof o.column == "number" && o.column > 0)
      return {
        line: o.line,
        column: o.column,
        offset: typeof o.offset == "number" && o.offset > -1 ? o.offset : void 0
      };
  }
}
function xx(n) {
  const i = Pc(n), r = fy(n);
  if (i && r)
    return { start: i, end: r };
}
function Hl(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? Nh(n.position) : "start" in n || "end" in n ? Nh(n) : "line" in n || "column" in n ? _c(n) : "";
}
function _c(n) {
  return Mh(n && n.line) + ":" + Mh(n && n.column);
}
function Nh(n) {
  return _c(n && n.start) + "-" + _c(n && n.end);
}
function Mh(n) {
  return n && typeof n == "number" ? n : 1;
}
class St extends Error {
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
  constructor(i, r, o) {
    super(), typeof r == "string" && (o = r, r = void 0);
    let s = "", c = {}, d = !1;
    if (r && ("line" in r && "column" in r ? c = { place: r } : "start" in r && "end" in r ? c = { place: r } : "type" in r ? c = {
      ancestors: [r],
      place: r.position
    } : c = { ...r }), typeof i == "string" ? s = i : !c.cause && i && (d = !0, s = i.message, c.cause = i), !c.ruleId && !c.source && typeof o == "string") {
      const g = o.indexOf(":");
      g === -1 ? c.ruleId = o : (c.source = o.slice(0, g), c.ruleId = o.slice(g + 1));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const g = c.ancestors[c.ancestors.length - 1];
      g && (c.place = g.position);
    }
    const p = c.place && "start" in c.place ? c.place.start : c.place;
    this.ancestors = c.ancestors || void 0, this.cause = c.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file, this.message = s, this.line = p ? p.line : void 0, this.name = Hl(c.place) || "1:1", this.place = c.place || void 0, this.reason = this.message, this.ruleId = c.ruleId || void 0, this.source = c.source || void 0, this.stack = d && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
St.prototype.file = "";
St.prototype.name = "";
St.prototype.reason = "";
St.prototype.message = "";
St.prototype.stack = "";
St.prototype.column = void 0;
St.prototype.line = void 0;
St.prototype.ancestors = void 0;
St.prototype.cause = void 0;
St.prototype.fatal = void 0;
St.prototype.place = void 0;
St.prototype.ruleId = void 0;
St.prototype.source = void 0;
const Kc = {}.hasOwnProperty, wx = /* @__PURE__ */ new Map(), Ex = /[A-Z]/g, Ax = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Tx = /* @__PURE__ */ new Set(["td", "th"]), py = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Cx(n, i) {
  if (!i || i.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = i.filePath || void 0;
  let o;
  if (i.development) {
    if (typeof i.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    o = Mx(r, i.jsxDEV);
  } else {
    if (typeof i.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof i.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    o = Nx(r, i.jsx, i.jsxs);
  }
  const s = {
    Fragment: i.Fragment,
    ancestors: [],
    components: i.components || {},
    create: o,
    elementAttributeNameCase: i.elementAttributeNameCase || "react",
    evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
    filePath: r,
    ignoreInvalidStyle: i.ignoreInvalidStyle || !1,
    passKeys: i.passKeys !== !1,
    passNode: i.passNode || !1,
    schema: i.space === "svg" ? Xc : px,
    stylePropertyNameCase: i.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
  }, c = my(s, n, void 0);
  return c && typeof c != "string" ? c : s.create(
    n,
    s.Fragment,
    { children: c || void 0 },
    void 0
  );
}
function my(n, i, r) {
  if (i.type === "element")
    return kx(n, i, r);
  if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
    return zx(n, i);
  if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
    return Dx(n, i, r);
  if (i.type === "mdxjsEsm")
    return Rx(n, i);
  if (i.type === "root")
    return Ox(n, i, r);
  if (i.type === "text")
    return _x(n, i);
}
function kx(n, i, r) {
  const o = n.schema;
  let s = o;
  i.tagName.toLowerCase() === "svg" && o.space === "html" && (s = Xc, n.schema = s), n.ancestors.push(i);
  const c = gy(n, i.tagName, !1), d = Ux(n, i);
  let p = Jc(n, i);
  return Ax.has(i.tagName) && (p = p.filter(function(g) {
    return typeof g == "string" ? !ax(g) : !0;
  })), hy(n, d, c, i), Zc(d, p), n.ancestors.pop(), n.schema = o, n.create(i, c, d, r);
}
function zx(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const o = i.data.estree.body[0];
    return o.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(o.expression);
  }
  Gl(n, i.position);
}
function Rx(n, i) {
  if (i.data && i.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(i.data.estree)
    );
  Gl(n, i.position);
}
function Dx(n, i, r) {
  const o = n.schema;
  let s = o;
  i.name === "svg" && o.space === "html" && (s = Xc, n.schema = s), n.ancestors.push(i);
  const c = i.name === null ? n.Fragment : gy(n, i.name, !0), d = Lx(n, i), p = Jc(n, i);
  return hy(n, d, c, i), Zc(d, p), n.ancestors.pop(), n.schema = o, n.create(i, c, d, r);
}
function Ox(n, i, r) {
  const o = {};
  return Zc(o, Jc(n, i)), n.create(i, n.Fragment, o, r);
}
function _x(n, i) {
  return i.value;
}
function hy(n, i, r, o) {
  typeof r != "string" && r !== n.Fragment && n.passNode && (i.node = o);
}
function Zc(n, i) {
  if (i.length > 0) {
    const r = i.length > 1 ? i : i[0];
    r && (n.children = r);
  }
}
function Nx(n, i, r) {
  return o;
  function o(s, c, d, p) {
    const m = Array.isArray(d.children) ? r : i;
    return p ? m(c, d, p) : m(c, d);
  }
}
function Mx(n, i) {
  return r;
  function r(o, s, c, d) {
    const p = Array.isArray(c.children), g = Pc(o);
    return i(
      s,
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
function Ux(n, i) {
  const r = {};
  let o, s;
  for (s in i.properties)
    if (s !== "children" && Kc.call(i.properties, s)) {
      const c = Bx(n, s, i.properties[s]);
      if (c) {
        const [d, p] = c;
        n.tableCellAlignToStyle && d === "align" && typeof p == "string" && Tx.has(i.tagName) ? o = p : r[d] = p;
      }
    }
  if (o) {
    const c = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    c[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = o;
  }
  return r;
}
function Lx(n, i) {
  const r = {};
  for (const o of i.attributes)
    if (o.type === "mdxJsxExpressionAttribute")
      if (o.data && o.data.estree && n.evaluater) {
        const c = o.data.estree.body[0];
        c.type;
        const d = c.expression;
        d.type;
        const p = d.properties[0];
        p.type, Object.assign(
          r,
          n.evaluater.evaluateExpression(p.argument)
        );
      } else
        Gl(n, i.position);
    else {
      const s = o.name;
      let c;
      if (o.value && typeof o.value == "object")
        if (o.value.data && o.value.data.estree && n.evaluater) {
          const p = o.value.data.estree.body[0];
          p.type, c = n.evaluater.evaluateExpression(p.expression);
        } else
          Gl(n, i.position);
      else
        c = o.value === null ? !0 : o.value;
      r[s] = /** @type {Props[keyof Props]} */
      c;
    }
  return r;
}
function Jc(n, i) {
  const r = [];
  let o = -1;
  const s = n.passKeys ? /* @__PURE__ */ new Map() : wx;
  for (; ++o < i.children.length; ) {
    const c = i.children[o];
    let d;
    if (n.passKeys) {
      const g = c.type === "element" ? c.tagName : c.type === "mdxJsxFlowElement" || c.type === "mdxJsxTextElement" ? c.name : void 0;
      if (g) {
        const m = s.get(g) || 0;
        d = g + "-" + m, s.set(g, m + 1);
      }
    }
    const p = my(n, c, d);
    p !== void 0 && r.push(p);
  }
  return r;
}
function Bx(n, i, r) {
  const o = cx(n.schema, i);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = o.commaSeparated ? WS(r) : mx(r)), o.property === "style") {
      let s = typeof r == "object" ? r : jx(n, String(r));
      return n.stylePropertyNameCase === "css" && (s = qx(s)), ["style", s];
    }
    return [
      n.elementAttributeNameCase === "react" && o.space ? ox[o.property] || o.property : o.attribute,
      r
    ];
  }
}
function jx(n, i) {
  try {
    return Sx(i, { reactCompat: !0 });
  } catch (r) {
    if (n.ignoreInvalidStyle)
      return {};
    const o = (
      /** @type {Error} */
      r
    ), s = new St("Cannot parse `style` attribute", {
      ancestors: n.ancestors,
      cause: o,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = n.filePath || void 0, s.url = py + "#cannot-parse-style-attribute", s;
  }
}
function gy(n, i, r) {
  let o;
  if (!r)
    o = { type: "Literal", value: i };
  else if (i.includes(".")) {
    const s = i.split(".");
    let c = -1, d;
    for (; ++c < s.length; ) {
      const p = Th(s[c]) ? { type: "Identifier", name: s[c] } : { type: "Literal", value: s[c] };
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
    o = Th(i) && !/^[a-z]/.test(i) ? { type: "Identifier", name: i } : { type: "Literal", value: i };
  if (o.type === "Literal") {
    const s = (
      /** @type {string | number} */
      o.value
    );
    return Kc.call(n.components, s) ? n.components[s] : s;
  }
  if (n.evaluater)
    return n.evaluater.evaluateExpression(o);
  Gl(n);
}
function Gl(n, i) {
  const r = new St(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: n.ancestors,
      place: i,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = n.filePath || void 0, r.url = py + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function qx(n) {
  const i = {};
  let r;
  for (r in n)
    Kc.call(n, r) && (i[Hx(r)] = n[r]);
  return i;
}
function Hx(n) {
  let i = n.replace(Ex, Vx);
  return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
}
function Vx(n) {
  return "-" + n.toLowerCase();
}
const uc = {
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
}, Ix = {};
function Qx(n, i) {
  const r = Ix, o = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, s = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return yy(n, o, s);
}
function yy(n, i, r) {
  if (Gx(n)) {
    if ("value" in n)
      return n.type === "html" && !r ? "" : n.value;
    if (i && "alt" in n && n.alt)
      return n.alt;
    if ("children" in n)
      return Uh(n.children, i, r);
  }
  return Array.isArray(n) ? Uh(n, i, r) : "";
}
function Uh(n, i, r) {
  const o = [];
  let s = -1;
  for (; ++s < n.length; )
    o[s] = yy(n[s], i, r);
  return o.join("");
}
function Gx(n) {
  return !!(n && typeof n == "object");
}
const Lh = document.createElement("i");
function Wc(n) {
  const i = "&" + n + ";";
  Lh.innerHTML = i;
  const r = Lh.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    r.charCodeAt(r.length - 1) === 59 && n !== "semi" || r === i ? !1 : r
  );
}
function xn(n, i, r, o) {
  const s = n.length;
  let c = 0, d;
  if (i < 0 ? i = -i > s ? 0 : s + i : i = i > s ? s : i, r = r > 0 ? r : 0, o.length < 1e4)
    d = Array.from(o), d.unshift(i, r), n.splice(...d);
  else
    for (r && n.splice(i, r); c < o.length; )
      d = o.slice(c, c + 1e4), d.unshift(i, 0), n.splice(...d), c += 1e4, i += 1e4;
}
function an(n, i) {
  return n.length > 0 ? (xn(n, n.length, 0, i), n) : i;
}
const Bh = {}.hasOwnProperty;
function Fx(n) {
  const i = {};
  let r = -1;
  for (; ++r < n.length; )
    Yx(i, n[r]);
  return i;
}
function Yx(n, i) {
  let r;
  for (r in i) {
    const s = (Bh.call(n, r) ? n[r] : void 0) || (n[r] = {}), c = i[r];
    let d;
    if (c)
      for (d in c) {
        Bh.call(s, d) || (s[d] = []);
        const p = c[d];
        Xx(
          // @ts-expect-error Looks like a list.
          s[d],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function Xx(n, i) {
  let r = -1;
  const o = [];
  for (; ++r < i.length; )
    (i[r].add === "after" ? n : o).push(i[r]);
  xn(n, 0, 0, o);
}
function by(n, i) {
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
function Ci(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Sn = fa(/[A-Za-z]/), Yt = fa(/[\dA-Za-z]/), Px = fa(/[#-'*+\--9=?A-Z^-~]/);
function Nc(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const Mc = fa(/\d/), Kx = fa(/[\dA-Fa-f]/), Zx = fa(/[!-/:-@[-`{-~]/);
function xe(n) {
  return n !== null && n < -2;
}
function _t(n) {
  return n !== null && (n < 0 || n === 32);
}
function Be(n) {
  return n === -2 || n === -1 || n === 32;
}
const Jx = fa(new RegExp("\\p{P}|\\p{S}", "u")), Wx = fa(/\s/);
function fa(n) {
  return i;
  function i(r) {
    return r !== null && r > -1 && n.test(String.fromCharCode(r));
  }
}
function _i(n) {
  const i = [];
  let r = -1, o = 0, s = 0;
  for (; ++r < n.length; ) {
    const c = n.charCodeAt(r);
    let d = "";
    if (c === 37 && Yt(n.charCodeAt(r + 1)) && Yt(n.charCodeAt(r + 2)))
      s = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) || (d = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const p = n.charCodeAt(r + 1);
      c < 56320 && p > 56319 && p < 57344 ? (d = String.fromCharCode(c, p), s = 1) : d = "�";
    } else
      d = String.fromCharCode(c);
    d && (i.push(n.slice(o, r), encodeURIComponent(d)), o = r + s + 1, d = ""), s && (r += s, s = 0);
  }
  return i.join("") + n.slice(o);
}
function Xe(n, i, r, o) {
  const s = o ? o - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return d;
  function d(g) {
    return Be(g) ? (n.enter(r), p(g)) : i(g);
  }
  function p(g) {
    return Be(g) && c++ < s ? (n.consume(g), p) : (n.exit(r), i(g));
  }
}
const $x = {
  tokenize: ew
};
function ew(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, o, s);
  let r;
  return i;
  function o(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return n.enter("lineEnding"), n.consume(p), n.exit("lineEnding"), Xe(n, i, "linePrefix");
  }
  function s(p) {
    return n.enter("paragraph"), c(p);
  }
  function c(p) {
    const g = n.enter("chunkText", {
      contentType: "text",
      previous: r
    });
    return r && (r.next = g), r = g, d(p);
  }
  function d(p) {
    if (p === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(p);
      return;
    }
    return xe(p) ? (n.consume(p), n.exit("chunkText"), c) : (n.consume(p), d);
  }
}
const tw = {
  tokenize: nw
}, jh = {
  tokenize: aw
};
function nw(n) {
  const i = this, r = [];
  let o = 0, s, c, d;
  return p;
  function p(F) {
    if (o < r.length) {
      const fe = r[o];
      return i.containerState = fe[1], n.attempt(fe[0].continuation, g, m)(F);
    }
    return m(F);
  }
  function g(F) {
    if (o++, i.containerState._closeFlow) {
      i.containerState._closeFlow = void 0, s && Z();
      const fe = i.events.length;
      let W = fe, U;
      for (; W--; )
        if (i.events[W][0] === "exit" && i.events[W][1].type === "chunkFlow") {
          U = i.events[W][1].end;
          break;
        }
      _(o);
      let re = fe;
      for (; re < i.events.length; )
        i.events[re][1].end = {
          ...U
        }, re++;
      return xn(i.events, W + 1, 0, i.events.slice(fe)), i.events.length = re, m(F);
    }
    return p(F);
  }
  function m(F) {
    if (o === r.length) {
      if (!s)
        return E(F);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return k(F);
      i.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return i.containerState = {}, n.check(jh, h, v)(F);
  }
  function h(F) {
    return s && Z(), _(o), E(F);
  }
  function v(F) {
    return i.parser.lazy[i.now().line] = o !== r.length, d = i.now().offset, k(F);
  }
  function E(F) {
    return i.containerState = {}, n.attempt(jh, w, k)(F);
  }
  function w(F) {
    return o++, r.push([i.currentConstruct, i.containerState]), E(F);
  }
  function k(F) {
    if (F === null) {
      s && Z(), _(0), n.consume(F);
      return;
    }
    return s = s || i.parser.flow(i.now()), n.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: c
    }), D(F);
  }
  function D(F) {
    if (F === null) {
      B(n.exit("chunkFlow"), !0), _(0), n.consume(F);
      return;
    }
    return xe(F) ? (n.consume(F), B(n.exit("chunkFlow")), o = 0, i.interrupt = void 0, p) : (n.consume(F), D);
  }
  function B(F, fe) {
    const W = i.sliceStream(F);
    if (fe && W.push(null), F.previous = c, c && (c.next = F), c = F, s.defineSkip(F.start), s.write(W), i.parser.lazy[F.start.line]) {
      let U = s.events.length;
      for (; U--; )
        if (
          // The token starts before the line ending…
          s.events[U][1].start.offset < d && // …and either is not ended yet…
          (!s.events[U][1].end || // …or ends after it.
          s.events[U][1].end.offset > d)
        )
          return;
      const re = i.events.length;
      let P = re, de, we;
      for (; P--; )
        if (i.events[P][0] === "exit" && i.events[P][1].type === "chunkFlow") {
          if (de) {
            we = i.events[P][1].end;
            break;
          }
          de = !0;
        }
      for (_(o), U = re; U < i.events.length; )
        i.events[U][1].end = {
          ...we
        }, U++;
      xn(i.events, P + 1, 0, i.events.slice(re)), i.events.length = U;
    }
  }
  function _(F) {
    let fe = r.length;
    for (; fe-- > F; ) {
      const W = r[fe];
      i.containerState = W[1], W[0].exit.call(i, n);
    }
    r.length = F;
  }
  function Z() {
    s.write([null]), c = void 0, s = void 0, i.containerState._closeFlow = void 0;
  }
}
function aw(n, i, r) {
  return Xe(n, n.attempt(this.parser.constructs.document, i, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function qh(n) {
  if (n === null || _t(n) || Wx(n))
    return 1;
  if (Jx(n))
    return 2;
}
function $c(n, i, r) {
  const o = [];
  let s = -1;
  for (; ++s < n.length; ) {
    const c = n[s].resolveAll;
    c && !o.includes(c) && (i = c(i, r), o.push(c));
  }
  return i;
}
const Uc = {
  name: "attention",
  resolveAll: iw,
  tokenize: lw
};
function iw(n, i) {
  let r = -1, o, s, c, d, p, g, m, h;
  for (; ++r < n.length; )
    if (n[r][0] === "enter" && n[r][1].type === "attentionSequence" && n[r][1]._close) {
      for (o = r; o--; )
        if (n[o][0] === "exit" && n[o][1].type === "attentionSequence" && n[o][1]._open && // If the markers are the same:
        i.sliceSerialize(n[o][1]).charCodeAt(0) === i.sliceSerialize(n[r][1]).charCodeAt(0)) {
          if ((n[o][1]._close || n[r][1]._open) && (n[r][1].end.offset - n[r][1].start.offset) % 3 && !((n[o][1].end.offset - n[o][1].start.offset + n[r][1].end.offset - n[r][1].start.offset) % 3))
            continue;
          g = n[o][1].end.offset - n[o][1].start.offset > 1 && n[r][1].end.offset - n[r][1].start.offset > 1 ? 2 : 1;
          const v = {
            ...n[o][1].end
          }, E = {
            ...n[r][1].start
          };
          Hh(v, -g), Hh(E, g), d = {
            type: g > 1 ? "strongSequence" : "emphasisSequence",
            start: v,
            end: {
              ...n[o][1].end
            }
          }, p = {
            type: g > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...n[r][1].start
            },
            end: E
          }, c = {
            type: g > 1 ? "strongText" : "emphasisText",
            start: {
              ...n[o][1].end
            },
            end: {
              ...n[r][1].start
            }
          }, s = {
            type: g > 1 ? "strong" : "emphasis",
            start: {
              ...d.start
            },
            end: {
              ...p.end
            }
          }, n[o][1].end = {
            ...d.start
          }, n[r][1].start = {
            ...p.end
          }, m = [], n[o][1].end.offset - n[o][1].start.offset && (m = an(m, [["enter", n[o][1], i], ["exit", n[o][1], i]])), m = an(m, [["enter", s, i], ["enter", d, i], ["exit", d, i], ["enter", c, i]]), m = an(m, $c(i.parser.constructs.insideSpan.null, n.slice(o + 1, r), i)), m = an(m, [["exit", c, i], ["enter", p, i], ["exit", p, i], ["exit", s, i]]), n[r][1].end.offset - n[r][1].start.offset ? (h = 2, m = an(m, [["enter", n[r][1], i], ["exit", n[r][1], i]])) : h = 0, xn(n, o - 1, r - o + 3, m), r = o + m.length - h - 2;
          break;
        }
    }
  for (r = -1; ++r < n.length; )
    n[r][1].type === "attentionSequence" && (n[r][1].type = "data");
  return n;
}
function lw(n, i) {
  const r = this.parser.constructs.attentionMarkers.null, o = this.previous, s = qh(o);
  let c;
  return d;
  function d(g) {
    return c = g, n.enter("attentionSequence"), p(g);
  }
  function p(g) {
    if (g === c)
      return n.consume(g), p;
    const m = n.exit("attentionSequence"), h = qh(g), v = !h || h === 2 && s || r.includes(g), E = !s || s === 2 && h || r.includes(o);
    return m._open = !!(c === 42 ? v : v && (s || !E)), m._close = !!(c === 42 ? E : E && (h || !v)), i(g);
  }
}
function Hh(n, i) {
  n.column += i, n.offset += i, n._bufferIndex += i;
}
const rw = {
  name: "autolink",
  tokenize: ow
};
function ow(n, i, r) {
  let o = 0;
  return s;
  function s(w) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(w), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), c;
  }
  function c(w) {
    return Sn(w) ? (n.consume(w), d) : w === 64 ? r(w) : m(w);
  }
  function d(w) {
    return w === 43 || w === 45 || w === 46 || Yt(w) ? (o = 1, p(w)) : m(w);
  }
  function p(w) {
    return w === 58 ? (n.consume(w), o = 0, g) : (w === 43 || w === 45 || w === 46 || Yt(w)) && o++ < 32 ? (n.consume(w), p) : (o = 0, m(w));
  }
  function g(w) {
    return w === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(w), n.exit("autolinkMarker"), n.exit("autolink"), i) : w === null || w === 32 || w === 60 || Nc(w) ? r(w) : (n.consume(w), g);
  }
  function m(w) {
    return w === 64 ? (n.consume(w), h) : Px(w) ? (n.consume(w), m) : r(w);
  }
  function h(w) {
    return Yt(w) ? v(w) : r(w);
  }
  function v(w) {
    return w === 46 ? (n.consume(w), o = 0, h) : w === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(w), n.exit("autolinkMarker"), n.exit("autolink"), i) : E(w);
  }
  function E(w) {
    if ((w === 45 || Yt(w)) && o++ < 63) {
      const k = w === 45 ? E : v;
      return n.consume(w), k;
    }
    return r(w);
  }
}
const Oo = {
  partial: !0,
  tokenize: uw
};
function uw(n, i, r) {
  return o;
  function o(c) {
    return Be(c) ? Xe(n, s, "linePrefix")(c) : s(c);
  }
  function s(c) {
    return c === null || xe(c) ? i(c) : r(c);
  }
}
const vy = {
  continuation: {
    tokenize: cw
  },
  exit: fw,
  name: "blockQuote",
  tokenize: sw
};
function sw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    if (d === 62) {
      const p = o.containerState;
      return p.open || (n.enter("blockQuote", {
        _container: !0
      }), p.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(d), n.exit("blockQuoteMarker"), c;
    }
    return r(d);
  }
  function c(d) {
    return Be(d) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(d), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), i) : (n.exit("blockQuotePrefix"), i(d));
  }
}
function cw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return Be(d) ? Xe(n, c, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : c(d);
  }
  function c(d) {
    return n.attempt(vy, i, r)(d);
  }
}
function fw(n) {
  n.exit("blockQuote");
}
const Sy = {
  name: "characterEscape",
  tokenize: dw
};
function dw(n, i, r) {
  return o;
  function o(c) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(c), n.exit("escapeMarker"), s;
  }
  function s(c) {
    return Zx(c) ? (n.enter("characterEscapeValue"), n.consume(c), n.exit("characterEscapeValue"), n.exit("characterEscape"), i) : r(c);
  }
}
const xy = {
  name: "characterReference",
  tokenize: pw
};
function pw(n, i, r) {
  const o = this;
  let s = 0, c, d;
  return p;
  function p(v) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(v), n.exit("characterReferenceMarker"), g;
  }
  function g(v) {
    return v === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(v), n.exit("characterReferenceMarkerNumeric"), m) : (n.enter("characterReferenceValue"), c = 31, d = Yt, h(v));
  }
  function m(v) {
    return v === 88 || v === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(v), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), c = 6, d = Kx, h) : (n.enter("characterReferenceValue"), c = 7, d = Mc, h(v));
  }
  function h(v) {
    if (v === 59 && s) {
      const E = n.exit("characterReferenceValue");
      return d === Yt && !Wc(o.sliceSerialize(E)) ? r(v) : (n.enter("characterReferenceMarker"), n.consume(v), n.exit("characterReferenceMarker"), n.exit("characterReference"), i);
    }
    return d(v) && s++ < c ? (n.consume(v), h) : r(v);
  }
}
const Vh = {
  partial: !0,
  tokenize: hw
}, Ih = {
  concrete: !0,
  name: "codeFenced",
  tokenize: mw
};
function mw(n, i, r) {
  const o = this, s = {
    partial: !0,
    tokenize: W
  };
  let c = 0, d = 0, p;
  return g;
  function g(U) {
    return m(U);
  }
  function m(U) {
    const re = o.events[o.events.length - 1];
    return c = re && re[1].type === "linePrefix" ? re[2].sliceSerialize(re[1], !0).length : 0, p = U, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), h(U);
  }
  function h(U) {
    return U === p ? (d++, n.consume(U), h) : d < 3 ? r(U) : (n.exit("codeFencedFenceSequence"), Be(U) ? Xe(n, v, "whitespace")(U) : v(U));
  }
  function v(U) {
    return U === null || xe(U) ? (n.exit("codeFencedFence"), o.interrupt ? i(U) : n.check(Vh, D, fe)(U)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), E(U));
  }
  function E(U) {
    return U === null || xe(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), v(U)) : Be(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Xe(n, w, "whitespace")(U)) : U === 96 && U === p ? r(U) : (n.consume(U), E);
  }
  function w(U) {
    return U === null || xe(U) ? v(U) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), k(U));
  }
  function k(U) {
    return U === null || xe(U) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), v(U)) : U === 96 && U === p ? r(U) : (n.consume(U), k);
  }
  function D(U) {
    return n.attempt(s, fe, B)(U);
  }
  function B(U) {
    return n.enter("lineEnding"), n.consume(U), n.exit("lineEnding"), _;
  }
  function _(U) {
    return c > 0 && Be(U) ? Xe(n, Z, "linePrefix", c + 1)(U) : Z(U);
  }
  function Z(U) {
    return U === null || xe(U) ? n.check(Vh, D, fe)(U) : (n.enter("codeFlowValue"), F(U));
  }
  function F(U) {
    return U === null || xe(U) ? (n.exit("codeFlowValue"), Z(U)) : (n.consume(U), F);
  }
  function fe(U) {
    return n.exit("codeFenced"), i(U);
  }
  function W(U, re, P) {
    let de = 0;
    return we;
    function we(ie) {
      return U.enter("lineEnding"), U.consume(ie), U.exit("lineEnding"), le;
    }
    function le(ie) {
      return U.enter("codeFencedFence"), Be(ie) ? Xe(U, ne, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ie) : ne(ie);
    }
    function ne(ie) {
      return ie === p ? (U.enter("codeFencedFenceSequence"), te(ie)) : P(ie);
    }
    function te(ie) {
      return ie === p ? (de++, U.consume(ie), te) : de >= d ? (U.exit("codeFencedFenceSequence"), Be(ie) ? Xe(U, ae, "whitespace")(ie) : ae(ie)) : P(ie);
    }
    function ae(ie) {
      return ie === null || xe(ie) ? (U.exit("codeFencedFence"), re(ie)) : P(ie);
    }
  }
}
function hw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return d === null ? r(d) : (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), c);
  }
  function c(d) {
    return o.parser.lazy[o.now().line] ? r(d) : i(d);
  }
}
const sc = {
  name: "codeIndented",
  tokenize: yw
}, gw = {
  partial: !0,
  tokenize: bw
};
function yw(n, i, r) {
  const o = this;
  return s;
  function s(m) {
    return n.enter("codeIndented"), Xe(n, c, "linePrefix", 5)(m);
  }
  function c(m) {
    const h = o.events[o.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? d(m) : r(m);
  }
  function d(m) {
    return m === null ? g(m) : xe(m) ? n.attempt(gw, d, g)(m) : (n.enter("codeFlowValue"), p(m));
  }
  function p(m) {
    return m === null || xe(m) ? (n.exit("codeFlowValue"), d(m)) : (n.consume(m), p);
  }
  function g(m) {
    return n.exit("codeIndented"), i(m);
  }
}
function bw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return o.parser.lazy[o.now().line] ? r(d) : xe(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), s) : Xe(n, c, "linePrefix", 5)(d);
  }
  function c(d) {
    const p = o.events[o.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(d) : xe(d) ? s(d) : r(d);
  }
}
const vw = {
  name: "codeText",
  previous: xw,
  resolve: Sw,
  tokenize: ww
};
function Sw(n) {
  let i = n.length - 4, r = 3, o, s;
  if ((n[r][1].type === "lineEnding" || n[r][1].type === "space") && (n[i][1].type === "lineEnding" || n[i][1].type === "space")) {
    for (o = r; ++o < i; )
      if (n[o][1].type === "codeTextData") {
        n[r][1].type = "codeTextPadding", n[i][1].type = "codeTextPadding", r += 2, i -= 2;
        break;
      }
  }
  for (o = r - 1, i++; ++o <= i; )
    s === void 0 ? o !== i && n[o][1].type !== "lineEnding" && (s = o) : (o === i || n[o][1].type === "lineEnding") && (n[s][1].type = "codeTextData", o !== s + 2 && (n[s][1].end = n[o - 1][1].end, n.splice(s + 2, o - s - 2), i -= o - s - 2, o = s + 2), s = void 0);
  return n;
}
function xw(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ww(n, i, r) {
  let o = 0, s, c;
  return d;
  function d(v) {
    return n.enter("codeText"), n.enter("codeTextSequence"), p(v);
  }
  function p(v) {
    return v === 96 ? (n.consume(v), o++, p) : (n.exit("codeTextSequence"), g(v));
  }
  function g(v) {
    return v === null ? r(v) : v === 32 ? (n.enter("space"), n.consume(v), n.exit("space"), g) : v === 96 ? (c = n.enter("codeTextSequence"), s = 0, h(v)) : xe(v) ? (n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), g) : (n.enter("codeTextData"), m(v));
  }
  function m(v) {
    return v === null || v === 32 || v === 96 || xe(v) ? (n.exit("codeTextData"), g(v)) : (n.consume(v), m);
  }
  function h(v) {
    return v === 96 ? (n.consume(v), s++, h) : s === o ? (n.exit("codeTextSequence"), n.exit("codeText"), i(v)) : (c.type = "codeTextData", m(v));
  }
}
class Ew {
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
    const o = r ?? Number.POSITIVE_INFINITY;
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
  splice(i, r, o) {
    const s = r || 0;
    this.setCursor(Math.trunc(i));
    const c = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
    return o && jl(this.left, o), c.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), jl(this.left, i);
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
    this.setCursor(0), jl(this.right, i.reverse());
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
        jl(this.right, r.reverse());
      } else {
        const r = this.right.splice(this.left.length + this.right.length - i, Number.POSITIVE_INFINITY);
        jl(this.left, r.reverse());
      }
  }
}
function jl(n, i) {
  let r = 0;
  if (i.length < 1e4)
    n.push(...i);
  else
    for (; r < i.length; )
      n.push(...i.slice(r, r + 1e4)), r += 1e4;
}
function wy(n) {
  const i = {};
  let r = -1, o, s, c, d, p, g, m;
  const h = new Ew(n);
  for (; ++r < h.length; ) {
    for (; r in i; )
      r = i[r];
    if (o = h.get(r), r && o[1].type === "chunkFlow" && h.get(r - 1)[1].type === "listItemPrefix" && (g = o[1]._tokenizer.events, c = 0, c < g.length && g[c][1].type === "lineEndingBlank" && (c += 2), c < g.length && g[c][1].type === "content"))
      for (; ++c < g.length && g[c][1].type !== "content"; )
        g[c][1].type === "chunkText" && (g[c][1]._isInFirstContentOfListItem = !0, c++);
    if (o[0] === "enter")
      o[1].contentType && (Object.assign(i, Aw(h, r)), r = i[r], m = !0);
    else if (o[1]._container) {
      for (c = r, s = void 0; c--; )
        if (d = h.get(c), d[1].type === "lineEnding" || d[1].type === "lineEndingBlank")
          d[0] === "enter" && (s && (h.get(s)[1].type = "lineEndingBlank"), d[1].type = "lineEnding", s = c);
        else if (!(d[1].type === "linePrefix" || d[1].type === "listItemIndent")) break;
      s && (o[1].end = {
        ...h.get(s)[1].start
      }, p = h.slice(s, r), p.unshift(o), h.splice(s, r - s + 1, p));
    }
  }
  return xn(n, 0, Number.POSITIVE_INFINITY, h.slice(0)), !m;
}
function Aw(n, i) {
  const r = n.get(i)[1], o = n.get(i)[2];
  let s = i - 1;
  const c = [];
  let d = r._tokenizer;
  d || (d = o.parser[r.contentType](r.start), r._contentTypeTextTrailing && (d._contentTypeTextTrailing = !0));
  const p = d.events, g = [], m = {};
  let h, v, E = -1, w = r, k = 0, D = 0;
  const B = [D];
  for (; w; ) {
    for (; n.get(++s)[1] !== w; )
      ;
    c.push(s), w._tokenizer || (h = o.sliceStream(w), w.next || h.push(null), v && d.defineSkip(w.start), w._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(h), w._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), v = w, w = w.next;
  }
  for (w = r; ++E < p.length; )
    // Find a void token that includes a break.
    p[E][0] === "exit" && p[E - 1][0] === "enter" && p[E][1].type === p[E - 1][1].type && p[E][1].start.line !== p[E][1].end.line && (D = E + 1, B.push(D), w._tokenizer = void 0, w.previous = void 0, w = w.next);
  for (d.events = [], w ? (w._tokenizer = void 0, w.previous = void 0) : B.pop(), E = B.length; E--; ) {
    const _ = p.slice(B[E], B[E + 1]), Z = c.pop();
    g.push([Z, Z + _.length - 1]), n.splice(Z, 2, _);
  }
  for (g.reverse(), E = -1; ++E < g.length; )
    m[k + g[E][0]] = k + g[E][1], k += g[E][1] - g[E][0] - 1;
  return m;
}
const Tw = {
  resolve: kw,
  tokenize: zw
}, Cw = {
  partial: !0,
  tokenize: Rw
};
function kw(n) {
  return wy(n), n;
}
function zw(n, i) {
  let r;
  return o;
  function o(p) {
    return n.enter("content"), r = n.enter("chunkContent", {
      contentType: "content"
    }), s(p);
  }
  function s(p) {
    return p === null ? c(p) : xe(p) ? n.check(Cw, d, c)(p) : (n.consume(p), s);
  }
  function c(p) {
    return n.exit("chunkContent"), n.exit("content"), i(p);
  }
  function d(p) {
    return n.consume(p), n.exit("chunkContent"), r.next = n.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, s;
  }
}
function Rw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), Xe(n, c, "linePrefix");
  }
  function c(d) {
    if (d === null || xe(d))
      return r(d);
    const p = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(d) : n.interrupt(o.parser.constructs.flow, r, i)(d);
  }
}
function Ey(n, i, r, o, s, c, d, p, g) {
  const m = g || Number.POSITIVE_INFINITY;
  let h = 0;
  return v;
  function v(_) {
    return _ === 60 ? (n.enter(o), n.enter(s), n.enter(c), n.consume(_), n.exit(c), E) : _ === null || _ === 32 || _ === 41 || Nc(_) ? r(_) : (n.enter(o), n.enter(d), n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), D(_));
  }
  function E(_) {
    return _ === 62 ? (n.enter(c), n.consume(_), n.exit(c), n.exit(s), n.exit(o), i) : (n.enter(p), n.enter("chunkString", {
      contentType: "string"
    }), w(_));
  }
  function w(_) {
    return _ === 62 ? (n.exit("chunkString"), n.exit(p), E(_)) : _ === null || _ === 60 || xe(_) ? r(_) : (n.consume(_), _ === 92 ? k : w);
  }
  function k(_) {
    return _ === 60 || _ === 62 || _ === 92 ? (n.consume(_), w) : w(_);
  }
  function D(_) {
    return !h && (_ === null || _ === 41 || _t(_)) ? (n.exit("chunkString"), n.exit(p), n.exit(d), n.exit(o), i(_)) : h < m && _ === 40 ? (n.consume(_), h++, D) : _ === 41 ? (n.consume(_), h--, D) : _ === null || _ === 32 || _ === 40 || Nc(_) ? r(_) : (n.consume(_), _ === 92 ? B : D);
  }
  function B(_) {
    return _ === 40 || _ === 41 || _ === 92 ? (n.consume(_), D) : D(_);
  }
}
function Ay(n, i, r, o, s, c) {
  const d = this;
  let p = 0, g;
  return m;
  function m(w) {
    return n.enter(o), n.enter(s), n.consume(w), n.exit(s), n.enter(c), h;
  }
  function h(w) {
    return p > 999 || w === null || w === 91 || w === 93 && !g || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    w === 94 && !p && "_hiddenFootnoteSupport" in d.parser.constructs ? r(w) : w === 93 ? (n.exit(c), n.enter(s), n.consume(w), n.exit(s), n.exit(o), i) : xe(w) ? (n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), h) : (n.enter("chunkString", {
      contentType: "string"
    }), v(w));
  }
  function v(w) {
    return w === null || w === 91 || w === 93 || xe(w) || p++ > 999 ? (n.exit("chunkString"), h(w)) : (n.consume(w), g || (g = !Be(w)), w === 92 ? E : v);
  }
  function E(w) {
    return w === 91 || w === 92 || w === 93 ? (n.consume(w), p++, v) : v(w);
  }
}
function Ty(n, i, r, o, s, c) {
  let d;
  return p;
  function p(E) {
    return E === 34 || E === 39 || E === 40 ? (n.enter(o), n.enter(s), n.consume(E), n.exit(s), d = E === 40 ? 41 : E, g) : r(E);
  }
  function g(E) {
    return E === d ? (n.enter(s), n.consume(E), n.exit(s), n.exit(o), i) : (n.enter(c), m(E));
  }
  function m(E) {
    return E === d ? (n.exit(c), g(d)) : E === null ? r(E) : xe(E) ? (n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), Xe(n, m, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), h(E));
  }
  function h(E) {
    return E === d || E === null || xe(E) ? (n.exit("chunkString"), m(E)) : (n.consume(E), E === 92 ? v : h);
  }
  function v(E) {
    return E === d || E === 92 ? (n.consume(E), h) : h(E);
  }
}
function Vl(n, i) {
  let r;
  return o;
  function o(s) {
    return xe(s) ? (n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), r = !0, o) : Be(s) ? Xe(n, o, r ? "linePrefix" : "lineSuffix")(s) : i(s);
  }
}
const Dw = {
  name: "definition",
  tokenize: _w
}, Ow = {
  partial: !0,
  tokenize: Nw
};
function _w(n, i, r) {
  const o = this;
  let s;
  return c;
  function c(w) {
    return n.enter("definition"), d(w);
  }
  function d(w) {
    return Ay.call(
      o,
      n,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(w);
  }
  function p(w) {
    return s = Ci(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)), w === 58 ? (n.enter("definitionMarker"), n.consume(w), n.exit("definitionMarker"), g) : r(w);
  }
  function g(w) {
    return _t(w) ? Vl(n, m)(w) : m(w);
  }
  function m(w) {
    return Ey(
      n,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(w);
  }
  function h(w) {
    return n.attempt(Ow, v, v)(w);
  }
  function v(w) {
    return Be(w) ? Xe(n, E, "whitespace")(w) : E(w);
  }
  function E(w) {
    return w === null || xe(w) ? (n.exit("definition"), o.parser.defined.push(s), i(w)) : r(w);
  }
}
function Nw(n, i, r) {
  return o;
  function o(p) {
    return _t(p) ? Vl(n, s)(p) : r(p);
  }
  function s(p) {
    return Ty(n, c, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function c(p) {
    return Be(p) ? Xe(n, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || xe(p) ? i(p) : r(p);
  }
}
const Mw = {
  name: "hardBreakEscape",
  tokenize: Uw
};
function Uw(n, i, r) {
  return o;
  function o(c) {
    return n.enter("hardBreakEscape"), n.consume(c), s;
  }
  function s(c) {
    return xe(c) ? (n.exit("hardBreakEscape"), i(c)) : r(c);
  }
}
const Lw = {
  name: "headingAtx",
  resolve: Bw,
  tokenize: jw
};
function Bw(n, i) {
  let r = n.length - 2, o = 3, s, c;
  return n[o][1].type === "whitespace" && (o += 2), r - 2 > o && n[r][1].type === "whitespace" && (r -= 2), n[r][1].type === "atxHeadingSequence" && (o === r - 1 || r - 4 > o && n[r - 2][1].type === "whitespace") && (r -= o + 1 === r ? 2 : 4), r > o && (s = {
    type: "atxHeadingText",
    start: n[o][1].start,
    end: n[r][1].end
  }, c = {
    type: "chunkText",
    start: n[o][1].start,
    end: n[r][1].end,
    contentType: "text"
  }, xn(n, o, r - o + 1, [["enter", s, i], ["enter", c, i], ["exit", c, i], ["exit", s, i]])), n;
}
function jw(n, i, r) {
  let o = 0;
  return s;
  function s(h) {
    return n.enter("atxHeading"), c(h);
  }
  function c(h) {
    return n.enter("atxHeadingSequence"), d(h);
  }
  function d(h) {
    return h === 35 && o++ < 6 ? (n.consume(h), d) : h === null || _t(h) ? (n.exit("atxHeadingSequence"), p(h)) : r(h);
  }
  function p(h) {
    return h === 35 ? (n.enter("atxHeadingSequence"), g(h)) : h === null || xe(h) ? (n.exit("atxHeading"), i(h)) : Be(h) ? Xe(n, p, "whitespace")(h) : (n.enter("atxHeadingText"), m(h));
  }
  function g(h) {
    return h === 35 ? (n.consume(h), g) : (n.exit("atxHeadingSequence"), p(h));
  }
  function m(h) {
    return h === null || h === 35 || _t(h) ? (n.exit("atxHeadingText"), p(h)) : (n.consume(h), m);
  }
}
const qw = [
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
], Qh = ["pre", "script", "style", "textarea"], Hw = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Qw,
  tokenize: Gw
}, Vw = {
  partial: !0,
  tokenize: Yw
}, Iw = {
  partial: !0,
  tokenize: Fw
};
function Qw(n) {
  let i = n.length;
  for (; i-- && !(n[i][0] === "enter" && n[i][1].type === "htmlFlow"); )
    ;
  return i > 1 && n[i - 2][1].type === "linePrefix" && (n[i][1].start = n[i - 2][1].start, n[i + 1][1].start = n[i - 2][1].start, n.splice(i - 2, 2)), n;
}
function Gw(n, i, r) {
  const o = this;
  let s, c, d, p, g;
  return m;
  function m(x) {
    return h(x);
  }
  function h(x) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(x), v;
  }
  function v(x) {
    return x === 33 ? (n.consume(x), E) : x === 47 ? (n.consume(x), c = !0, D) : x === 63 ? (n.consume(x), s = 3, o.interrupt ? i : b) : Sn(x) ? (n.consume(x), d = String.fromCharCode(x), B) : r(x);
  }
  function E(x) {
    return x === 45 ? (n.consume(x), s = 2, w) : x === 91 ? (n.consume(x), s = 5, p = 0, k) : Sn(x) ? (n.consume(x), s = 4, o.interrupt ? i : b) : r(x);
  }
  function w(x) {
    return x === 45 ? (n.consume(x), o.interrupt ? i : b) : r(x);
  }
  function k(x) {
    const $ = "CDATA[";
    return x === $.charCodeAt(p++) ? (n.consume(x), p === $.length ? o.interrupt ? i : ne : k) : r(x);
  }
  function D(x) {
    return Sn(x) ? (n.consume(x), d = String.fromCharCode(x), B) : r(x);
  }
  function B(x) {
    if (x === null || x === 47 || x === 62 || _t(x)) {
      const $ = x === 47, oe = d.toLowerCase();
      return !$ && !c && Qh.includes(oe) ? (s = 1, o.interrupt ? i(x) : ne(x)) : qw.includes(d.toLowerCase()) ? (s = 6, $ ? (n.consume(x), _) : o.interrupt ? i(x) : ne(x)) : (s = 7, o.interrupt && !o.parser.lazy[o.now().line] ? r(x) : c ? Z(x) : F(x));
    }
    return x === 45 || Yt(x) ? (n.consume(x), d += String.fromCharCode(x), B) : r(x);
  }
  function _(x) {
    return x === 62 ? (n.consume(x), o.interrupt ? i : ne) : r(x);
  }
  function Z(x) {
    return Be(x) ? (n.consume(x), Z) : we(x);
  }
  function F(x) {
    return x === 47 ? (n.consume(x), we) : x === 58 || x === 95 || Sn(x) ? (n.consume(x), fe) : Be(x) ? (n.consume(x), F) : we(x);
  }
  function fe(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || Yt(x) ? (n.consume(x), fe) : W(x);
  }
  function W(x) {
    return x === 61 ? (n.consume(x), U) : Be(x) ? (n.consume(x), W) : F(x);
  }
  function U(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96 ? r(x) : x === 34 || x === 39 ? (n.consume(x), g = x, re) : Be(x) ? (n.consume(x), U) : P(x);
  }
  function re(x) {
    return x === g ? (n.consume(x), g = null, de) : x === null || xe(x) ? r(x) : (n.consume(x), re);
  }
  function P(x) {
    return x === null || x === 34 || x === 39 || x === 47 || x === 60 || x === 61 || x === 62 || x === 96 || _t(x) ? W(x) : (n.consume(x), P);
  }
  function de(x) {
    return x === 47 || x === 62 || Be(x) ? F(x) : r(x);
  }
  function we(x) {
    return x === 62 ? (n.consume(x), le) : r(x);
  }
  function le(x) {
    return x === null || xe(x) ? ne(x) : Be(x) ? (n.consume(x), le) : r(x);
  }
  function ne(x) {
    return x === 45 && s === 2 ? (n.consume(x), O) : x === 60 && s === 1 ? (n.consume(x), Y) : x === 62 && s === 4 ? (n.consume(x), V) : x === 63 && s === 3 ? (n.consume(x), b) : x === 93 && s === 5 ? (n.consume(x), Ee) : xe(x) && (s === 6 || s === 7) ? (n.exit("htmlFlowData"), n.check(Vw, J, te)(x)) : x === null || xe(x) ? (n.exit("htmlFlowData"), te(x)) : (n.consume(x), ne);
  }
  function te(x) {
    return n.check(Iw, ae, J)(x);
  }
  function ae(x) {
    return n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), ie;
  }
  function ie(x) {
    return x === null || xe(x) ? te(x) : (n.enter("htmlFlowData"), ne(x));
  }
  function O(x) {
    return x === 45 ? (n.consume(x), b) : ne(x);
  }
  function Y(x) {
    return x === 47 ? (n.consume(x), d = "", G) : ne(x);
  }
  function G(x) {
    if (x === 62) {
      const $ = d.toLowerCase();
      return Qh.includes($) ? (n.consume(x), V) : ne(x);
    }
    return Sn(x) && d.length < 8 ? (n.consume(x), d += String.fromCharCode(x), G) : ne(x);
  }
  function Ee(x) {
    return x === 93 ? (n.consume(x), b) : ne(x);
  }
  function b(x) {
    return x === 62 ? (n.consume(x), V) : x === 45 && s === 2 ? (n.consume(x), b) : ne(x);
  }
  function V(x) {
    return x === null || xe(x) ? (n.exit("htmlFlowData"), J(x)) : (n.consume(x), V);
  }
  function J(x) {
    return n.exit("htmlFlow"), i(x);
  }
}
function Fw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return xe(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), c) : r(d);
  }
  function c(d) {
    return o.parser.lazy[o.now().line] ? r(d) : i(d);
  }
}
function Yw(n, i, r) {
  return o;
  function o(s) {
    return n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), n.attempt(Oo, i, r);
  }
}
const Xw = {
  name: "htmlText",
  tokenize: Pw
};
function Pw(n, i, r) {
  const o = this;
  let s, c, d;
  return p;
  function p(b) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(b), g;
  }
  function g(b) {
    return b === 33 ? (n.consume(b), m) : b === 47 ? (n.consume(b), W) : b === 63 ? (n.consume(b), F) : Sn(b) ? (n.consume(b), P) : r(b);
  }
  function m(b) {
    return b === 45 ? (n.consume(b), h) : b === 91 ? (n.consume(b), c = 0, k) : Sn(b) ? (n.consume(b), Z) : r(b);
  }
  function h(b) {
    return b === 45 ? (n.consume(b), w) : r(b);
  }
  function v(b) {
    return b === null ? r(b) : b === 45 ? (n.consume(b), E) : xe(b) ? (d = v, Y(b)) : (n.consume(b), v);
  }
  function E(b) {
    return b === 45 ? (n.consume(b), w) : v(b);
  }
  function w(b) {
    return b === 62 ? O(b) : b === 45 ? E(b) : v(b);
  }
  function k(b) {
    const V = "CDATA[";
    return b === V.charCodeAt(c++) ? (n.consume(b), c === V.length ? D : k) : r(b);
  }
  function D(b) {
    return b === null ? r(b) : b === 93 ? (n.consume(b), B) : xe(b) ? (d = D, Y(b)) : (n.consume(b), D);
  }
  function B(b) {
    return b === 93 ? (n.consume(b), _) : D(b);
  }
  function _(b) {
    return b === 62 ? O(b) : b === 93 ? (n.consume(b), _) : D(b);
  }
  function Z(b) {
    return b === null || b === 62 ? O(b) : xe(b) ? (d = Z, Y(b)) : (n.consume(b), Z);
  }
  function F(b) {
    return b === null ? r(b) : b === 63 ? (n.consume(b), fe) : xe(b) ? (d = F, Y(b)) : (n.consume(b), F);
  }
  function fe(b) {
    return b === 62 ? O(b) : F(b);
  }
  function W(b) {
    return Sn(b) ? (n.consume(b), U) : r(b);
  }
  function U(b) {
    return b === 45 || Yt(b) ? (n.consume(b), U) : re(b);
  }
  function re(b) {
    return xe(b) ? (d = re, Y(b)) : Be(b) ? (n.consume(b), re) : O(b);
  }
  function P(b) {
    return b === 45 || Yt(b) ? (n.consume(b), P) : b === 47 || b === 62 || _t(b) ? de(b) : r(b);
  }
  function de(b) {
    return b === 47 ? (n.consume(b), O) : b === 58 || b === 95 || Sn(b) ? (n.consume(b), we) : xe(b) ? (d = de, Y(b)) : Be(b) ? (n.consume(b), de) : O(b);
  }
  function we(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Yt(b) ? (n.consume(b), we) : le(b);
  }
  function le(b) {
    return b === 61 ? (n.consume(b), ne) : xe(b) ? (d = le, Y(b)) : Be(b) ? (n.consume(b), le) : de(b);
  }
  function ne(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? r(b) : b === 34 || b === 39 ? (n.consume(b), s = b, te) : xe(b) ? (d = ne, Y(b)) : Be(b) ? (n.consume(b), ne) : (n.consume(b), ae);
  }
  function te(b) {
    return b === s ? (n.consume(b), s = void 0, ie) : b === null ? r(b) : xe(b) ? (d = te, Y(b)) : (n.consume(b), te);
  }
  function ae(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? r(b) : b === 47 || b === 62 || _t(b) ? de(b) : (n.consume(b), ae);
  }
  function ie(b) {
    return b === 47 || b === 62 || _t(b) ? de(b) : r(b);
  }
  function O(b) {
    return b === 62 ? (n.consume(b), n.exit("htmlTextData"), n.exit("htmlText"), i) : r(b);
  }
  function Y(b) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(b), n.exit("lineEnding"), G;
  }
  function G(b) {
    return Be(b) ? Xe(n, Ee, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : Ee(b);
  }
  function Ee(b) {
    return n.enter("htmlTextData"), d(b);
  }
}
const ef = {
  name: "labelEnd",
  resolveAll: Ww,
  resolveTo: $w,
  tokenize: eE
}, Kw = {
  tokenize: tE
}, Zw = {
  tokenize: nE
}, Jw = {
  tokenize: aE
};
function Ww(n) {
  let i = -1;
  const r = [];
  for (; ++i < n.length; ) {
    const o = n[i][1];
    if (r.push(n[i]), o.type === "labelImage" || o.type === "labelLink" || o.type === "labelEnd") {
      const s = o.type === "labelImage" ? 4 : 2;
      o.type = "data", i += s;
    }
  }
  return n.length !== r.length && xn(n, 0, n.length, r), n;
}
function $w(n, i) {
  let r = n.length, o = 0, s, c, d, p;
  for (; r--; )
    if (s = n[r][1], c) {
      if (s.type === "link" || s.type === "labelLink" && s._inactive)
        break;
      n[r][0] === "enter" && s.type === "labelLink" && (s._inactive = !0);
    } else if (d) {
      if (n[r][0] === "enter" && (s.type === "labelImage" || s.type === "labelLink") && !s._balanced && (c = r, s.type !== "labelLink")) {
        o = 2;
        break;
      }
    } else s.type === "labelEnd" && (d = r);
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
  return p = [["enter", g, i], ["enter", m, i]], p = an(p, n.slice(c + 1, c + o + 3)), p = an(p, [["enter", h, i]]), p = an(p, $c(i.parser.constructs.insideSpan.null, n.slice(c + o + 4, d - 3), i)), p = an(p, [["exit", h, i], n[d - 2], n[d - 1], ["exit", m, i]]), p = an(p, n.slice(d + 1)), p = an(p, [["exit", g, i]]), xn(n, c, n.length, p), n;
}
function eE(n, i, r) {
  const o = this;
  let s = o.events.length, c, d;
  for (; s--; )
    if ((o.events[s][1].type === "labelImage" || o.events[s][1].type === "labelLink") && !o.events[s][1]._balanced) {
      c = o.events[s][1];
      break;
    }
  return p;
  function p(E) {
    return c ? c._inactive ? v(E) : (d = o.parser.defined.includes(Ci(o.sliceSerialize({
      start: c.end,
      end: o.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(E), n.exit("labelMarker"), n.exit("labelEnd"), g) : r(E);
  }
  function g(E) {
    return E === 40 ? n.attempt(Kw, h, d ? h : v)(E) : E === 91 ? n.attempt(Zw, h, d ? m : v)(E) : d ? h(E) : v(E);
  }
  function m(E) {
    return n.attempt(Jw, h, v)(E);
  }
  function h(E) {
    return i(E);
  }
  function v(E) {
    return c._balanced = !0, r(E);
  }
}
function tE(n, i, r) {
  return o;
  function o(v) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(v), n.exit("resourceMarker"), s;
  }
  function s(v) {
    return _t(v) ? Vl(n, c)(v) : c(v);
  }
  function c(v) {
    return v === 41 ? h(v) : Ey(n, d, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(v);
  }
  function d(v) {
    return _t(v) ? Vl(n, g)(v) : h(v);
  }
  function p(v) {
    return r(v);
  }
  function g(v) {
    return v === 34 || v === 39 || v === 40 ? Ty(n, m, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(v) : h(v);
  }
  function m(v) {
    return _t(v) ? Vl(n, h)(v) : h(v);
  }
  function h(v) {
    return v === 41 ? (n.enter("resourceMarker"), n.consume(v), n.exit("resourceMarker"), n.exit("resource"), i) : r(v);
  }
}
function nE(n, i, r) {
  const o = this;
  return s;
  function s(p) {
    return Ay.call(o, n, c, d, "reference", "referenceMarker", "referenceString")(p);
  }
  function c(p) {
    return o.parser.defined.includes(Ci(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))) ? i(p) : r(p);
  }
  function d(p) {
    return r(p);
  }
}
function aE(n, i, r) {
  return o;
  function o(c) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(c), n.exit("referenceMarker"), s;
  }
  function s(c) {
    return c === 93 ? (n.enter("referenceMarker"), n.consume(c), n.exit("referenceMarker"), n.exit("reference"), i) : r(c);
  }
}
const iE = {
  name: "labelStartImage",
  resolveAll: ef.resolveAll,
  tokenize: lE
};
function lE(n, i, r) {
  const o = this;
  return s;
  function s(p) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(p), n.exit("labelImageMarker"), c;
  }
  function c(p) {
    return p === 91 ? (n.enter("labelMarker"), n.consume(p), n.exit("labelMarker"), n.exit("labelImage"), d) : r(p);
  }
  function d(p) {
    return p === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? r(p) : i(p);
  }
}
const rE = {
  name: "labelStartLink",
  resolveAll: ef.resolveAll,
  tokenize: oE
};
function oE(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(d), n.exit("labelMarker"), n.exit("labelLink"), c;
  }
  function c(d) {
    return d === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? r(d) : i(d);
  }
}
const cc = {
  name: "lineEnding",
  tokenize: uE
};
function uE(n, i) {
  return r;
  function r(o) {
    return n.enter("lineEnding"), n.consume(o), n.exit("lineEnding"), Xe(n, i, "linePrefix");
  }
}
const vo = {
  name: "thematicBreak",
  tokenize: sE
};
function sE(n, i, r) {
  let o = 0, s;
  return c;
  function c(m) {
    return n.enter("thematicBreak"), d(m);
  }
  function d(m) {
    return s = m, p(m);
  }
  function p(m) {
    return m === s ? (n.enter("thematicBreakSequence"), g(m)) : o >= 3 && (m === null || xe(m)) ? (n.exit("thematicBreak"), i(m)) : r(m);
  }
  function g(m) {
    return m === s ? (n.consume(m), o++, g) : (n.exit("thematicBreakSequence"), Be(m) ? Xe(n, p, "whitespace")(m) : p(m));
  }
}
const Rt = {
  continuation: {
    tokenize: pE
  },
  exit: hE,
  name: "list",
  tokenize: dE
}, cE = {
  partial: !0,
  tokenize: gE
}, fE = {
  partial: !0,
  tokenize: mE
};
function dE(n, i, r) {
  const o = this, s = o.events[o.events.length - 1];
  let c = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, d = 0;
  return p;
  function p(w) {
    const k = o.containerState.type || (w === 42 || w === 43 || w === 45 ? "listUnordered" : "listOrdered");
    if (k === "listUnordered" ? !o.containerState.marker || w === o.containerState.marker : Mc(w)) {
      if (o.containerState.type || (o.containerState.type = k, n.enter(k, {
        _container: !0
      })), k === "listUnordered")
        return n.enter("listItemPrefix"), w === 42 || w === 45 ? n.check(vo, r, m)(w) : m(w);
      if (!o.interrupt || w === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), g(w);
    }
    return r(w);
  }
  function g(w) {
    return Mc(w) && ++d < 10 ? (n.consume(w), g) : (!o.interrupt || d < 2) && (o.containerState.marker ? w === o.containerState.marker : w === 41 || w === 46) ? (n.exit("listItemValue"), m(w)) : r(w);
  }
  function m(w) {
    return n.enter("listItemMarker"), n.consume(w), n.exit("listItemMarker"), o.containerState.marker = o.containerState.marker || w, n.check(
      Oo,
      // Can’t be empty when interrupting.
      o.interrupt ? r : h,
      n.attempt(cE, E, v)
    );
  }
  function h(w) {
    return o.containerState.initialBlankLine = !0, c++, E(w);
  }
  function v(w) {
    return Be(w) ? (n.enter("listItemPrefixWhitespace"), n.consume(w), n.exit("listItemPrefixWhitespace"), E) : r(w);
  }
  function E(w) {
    return o.containerState.size = c + o.sliceSerialize(n.exit("listItemPrefix"), !0).length, i(w);
  }
}
function pE(n, i, r) {
  const o = this;
  return o.containerState._closeFlow = void 0, n.check(Oo, s, c);
  function s(p) {
    return o.containerState.furtherBlankLines = o.containerState.furtherBlankLines || o.containerState.initialBlankLine, Xe(n, i, "listItemIndent", o.containerState.size + 1)(p);
  }
  function c(p) {
    return o.containerState.furtherBlankLines || !Be(p) ? (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, d(p)) : (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, n.attempt(fE, i, d)(p));
  }
  function d(p) {
    return o.containerState._closeFlow = !0, o.interrupt = void 0, Xe(n, n.attempt(Rt, i, r), "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function mE(n, i, r) {
  const o = this;
  return Xe(n, s, "listItemIndent", o.containerState.size + 1);
  function s(c) {
    const d = o.events[o.events.length - 1];
    return d && d[1].type === "listItemIndent" && d[2].sliceSerialize(d[1], !0).length === o.containerState.size ? i(c) : r(c);
  }
}
function hE(n) {
  n.exit(this.containerState.type);
}
function gE(n, i, r) {
  const o = this;
  return Xe(n, s, "listItemPrefixWhitespace", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(c) {
    const d = o.events[o.events.length - 1];
    return !Be(c) && d && d[1].type === "listItemPrefixWhitespace" ? i(c) : r(c);
  }
}
const Gh = {
  name: "setextUnderline",
  resolveTo: yE,
  tokenize: bE
};
function yE(n, i) {
  let r = n.length, o, s, c;
  for (; r--; )
    if (n[r][0] === "enter") {
      if (n[r][1].type === "content") {
        o = r;
        break;
      }
      n[r][1].type === "paragraph" && (s = r);
    } else
      n[r][1].type === "content" && n.splice(r, 1), !c && n[r][1].type === "definition" && (c = r);
  const d = {
    type: "setextHeading",
    start: {
      ...n[o][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  };
  return n[s][1].type = "setextHeadingText", c ? (n.splice(s, 0, ["enter", d, i]), n.splice(c + 1, 0, ["exit", n[o][1], i]), n[o][1].end = {
    ...n[c][1].end
  }) : n[o][1] = d, n.push(["exit", d, i]), n;
}
function bE(n, i, r) {
  const o = this;
  let s;
  return c;
  function c(m) {
    let h = o.events.length, v;
    for (; h--; )
      if (o.events[h][1].type !== "lineEnding" && o.events[h][1].type !== "linePrefix" && o.events[h][1].type !== "content") {
        v = o.events[h][1].type === "paragraph";
        break;
      }
    return !o.parser.lazy[o.now().line] && (o.interrupt || v) ? (n.enter("setextHeadingLine"), s = m, d(m)) : r(m);
  }
  function d(m) {
    return n.enter("setextHeadingLineSequence"), p(m);
  }
  function p(m) {
    return m === s ? (n.consume(m), p) : (n.exit("setextHeadingLineSequence"), Be(m) ? Xe(n, g, "lineSuffix")(m) : g(m));
  }
  function g(m) {
    return m === null || xe(m) ? (n.exit("setextHeadingLine"), i(m)) : r(m);
  }
}
const vE = {
  tokenize: SE
};
function SE(n) {
  const i = this, r = n.attempt(
    // Try to parse a blank line.
    Oo,
    o,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, s, Xe(n, n.attempt(this.parser.constructs.flow, s, n.attempt(Tw, s)), "linePrefix"))
  );
  return r;
  function o(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(c), n.exit("lineEndingBlank"), i.currentConstruct = void 0, r;
  }
  function s(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), i.currentConstruct = void 0, r;
  }
}
const xE = {
  resolveAll: ky()
}, wE = Cy("string"), EE = Cy("text");
function Cy(n) {
  return {
    resolveAll: ky(n === "text" ? AE : void 0),
    tokenize: i
  };
  function i(r) {
    const o = this, s = this.parser.constructs[n], c = r.attempt(s, d, p);
    return d;
    function d(h) {
      return m(h) ? c(h) : p(h);
    }
    function p(h) {
      if (h === null) {
        r.consume(h);
        return;
      }
      return r.enter("data"), r.consume(h), g;
    }
    function g(h) {
      return m(h) ? (r.exit("data"), c(h)) : (r.consume(h), g);
    }
    function m(h) {
      if (h === null)
        return !0;
      const v = s[h];
      let E = -1;
      if (v)
        for (; ++E < v.length; ) {
          const w = v[E];
          if (!w.previous || w.previous.call(o, o.previous))
            return !0;
        }
      return !1;
    }
  }
}
function ky(n) {
  return i;
  function i(r, o) {
    let s = -1, c;
    for (; ++s <= r.length; )
      c === void 0 ? r[s] && r[s][1].type === "data" && (c = s, s++) : (!r[s] || r[s][1].type !== "data") && (s !== c + 2 && (r[c][1].end = r[s - 1][1].end, r.splice(c + 2, s - c - 2), s = c + 2), c = void 0);
    return n ? n(r, o) : r;
  }
}
function AE(n, i) {
  let r = 0;
  for (; ++r <= n.length; )
    if ((r === n.length || n[r][1].type === "lineEnding") && n[r - 1][1].type === "data") {
      const o = n[r - 1][1], s = i.sliceStream(o);
      let c = s.length, d = -1, p = 0, g;
      for (; c--; ) {
        const m = s[c];
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
      if (i._contentTypeTextTrailing && r === n.length && (p = 0), p) {
        const m = {
          type: r === n.length || g || p < 2 ? "lineSuffix" : "hardBreakTrailing",
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
        }, o.start.offset === o.end.offset ? Object.assign(o, m) : (n.splice(r, 0, ["enter", m, i], ["exit", m, i]), r += 2);
      }
      r++;
    }
  return n;
}
const TE = {
  42: Rt,
  43: Rt,
  45: Rt,
  48: Rt,
  49: Rt,
  50: Rt,
  51: Rt,
  52: Rt,
  53: Rt,
  54: Rt,
  55: Rt,
  56: Rt,
  57: Rt,
  62: vy
}, CE = {
  91: Dw
}, kE = {
  [-2]: sc,
  [-1]: sc,
  32: sc
}, zE = {
  35: Lw,
  42: vo,
  45: [Gh, vo],
  60: Hw,
  61: Gh,
  95: vo,
  96: Ih,
  126: Ih
}, RE = {
  38: xy,
  92: Sy
}, DE = {
  [-5]: cc,
  [-4]: cc,
  [-3]: cc,
  33: iE,
  38: xy,
  42: Uc,
  60: [rw, Xw],
  91: rE,
  92: [Mw, Sy],
  93: ef,
  95: Uc,
  96: vw
}, OE = {
  null: [Uc, xE]
}, _E = {
  null: [42, 95]
}, NE = {
  null: []
}, ME = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: _E,
  contentInitial: CE,
  disable: NE,
  document: TE,
  flow: zE,
  flowInitial: kE,
  insideSpan: OE,
  string: RE,
  text: DE
}, Symbol.toStringTag, { value: "Module" }));
function UE(n, i, r) {
  let o = {
    _bufferIndex: -1,
    _index: 0,
    line: r && r.line || 1,
    column: r && r.column || 1,
    offset: r && r.offset || 0
  };
  const s = {}, c = [];
  let d = [], p = [];
  const g = {
    attempt: re(W),
    check: re(U),
    consume: Z,
    enter: F,
    exit: fe,
    interrupt: re(U, {
      interrupt: !0
    })
  }, m = {
    code: null,
    containerState: {},
    defineSkip: D,
    events: [],
    now: k,
    parser: n,
    previous: null,
    sliceSerialize: E,
    sliceStream: w,
    write: v
  };
  let h = i.tokenize.call(m, g);
  return i.resolveAll && c.push(i), m;
  function v(le) {
    return d = an(d, le), B(), d[d.length - 1] !== null ? [] : (P(i, 0), m.events = $c(c, m.events, m), m.events);
  }
  function E(le, ne) {
    return BE(w(le), ne);
  }
  function w(le) {
    return LE(d, le);
  }
  function k() {
    const {
      _bufferIndex: le,
      _index: ne,
      line: te,
      column: ae,
      offset: ie
    } = o;
    return {
      _bufferIndex: le,
      _index: ne,
      line: te,
      column: ae,
      offset: ie
    };
  }
  function D(le) {
    s[le.line] = le.column, we();
  }
  function B() {
    let le;
    for (; o._index < d.length; ) {
      const ne = d[o._index];
      if (typeof ne == "string")
        for (le = o._index, o._bufferIndex < 0 && (o._bufferIndex = 0); o._index === le && o._bufferIndex < ne.length; )
          _(ne.charCodeAt(o._bufferIndex));
      else
        _(ne);
    }
  }
  function _(le) {
    h = h(le);
  }
  function Z(le) {
    xe(le) ? (o.line++, o.column = 1, o.offset += le === -3 ? 2 : 1, we()) : le !== -1 && (o.column++, o.offset++), o._bufferIndex < 0 ? o._index++ : (o._bufferIndex++, o._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    d[o._index].length && (o._bufferIndex = -1, o._index++)), m.previous = le;
  }
  function F(le, ne) {
    const te = ne || {};
    return te.type = le, te.start = k(), m.events.push(["enter", te, m]), p.push(te), te;
  }
  function fe(le) {
    const ne = p.pop();
    return ne.end = k(), m.events.push(["exit", ne, m]), ne;
  }
  function W(le, ne) {
    P(le, ne.from);
  }
  function U(le, ne) {
    ne.restore();
  }
  function re(le, ne) {
    return te;
    function te(ae, ie, O) {
      let Y, G, Ee, b;
      return Array.isArray(ae) ? (
        /* c8 ignore next 1 */
        J(ae)
      ) : "tokenize" in ae ? (
        // Looks like a construct.
        J([
          /** @type {Construct} */
          ae
        ])
      ) : V(ae);
      function V(ee) {
        return be;
        function be(Re) {
          const Pe = Re !== null && ee[Re], ot = Re !== null && ee.null, xt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Pe) ? Pe : Pe ? [Pe] : [],
            ...Array.isArray(ot) ? ot : ot ? [ot] : []
          ];
          return J(xt)(Re);
        }
      }
      function J(ee) {
        return Y = ee, G = 0, ee.length === 0 ? O : x(ee[G]);
      }
      function x(ee) {
        return be;
        function be(Re) {
          return b = de(), Ee = ee, ee.partial || (m.currentConstruct = ee), ee.name && m.parser.constructs.disable.null.includes(ee.name) ? oe() : ee.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            ne ? Object.assign(Object.create(m), ne) : m,
            g,
            $,
            oe
          )(Re);
        }
      }
      function $(ee) {
        return le(Ee, b), ie;
      }
      function oe(ee) {
        return b.restore(), ++G < Y.length ? x(Y[G]) : O;
      }
    }
  }
  function P(le, ne) {
    le.resolveAll && !c.includes(le) && c.push(le), le.resolve && xn(m.events, ne, m.events.length - ne, le.resolve(m.events.slice(ne), m)), le.resolveTo && (m.events = le.resolveTo(m.events, m));
  }
  function de() {
    const le = k(), ne = m.previous, te = m.currentConstruct, ae = m.events.length, ie = Array.from(p);
    return {
      from: ae,
      restore: O
    };
    function O() {
      o = le, m.previous = ne, m.currentConstruct = te, m.events.length = ae, p = ie, we();
    }
  }
  function we() {
    o.line in s && o.column < 2 && (o.column = s[o.line], o.offset += s[o.line] - 1);
  }
}
function LE(n, i) {
  const r = i.start._index, o = i.start._bufferIndex, s = i.end._index, c = i.end._bufferIndex;
  let d;
  if (r === s)
    d = [n[r].slice(o, c)];
  else {
    if (d = n.slice(r, s), o > -1) {
      const p = d[0];
      typeof p == "string" ? d[0] = p.slice(o) : d.shift();
    }
    c > 0 && d.push(n[s].slice(0, c));
  }
  return d;
}
function BE(n, i) {
  let r = -1;
  const o = [];
  let s;
  for (; ++r < n.length; ) {
    const c = n[r];
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
        if (!i && s) continue;
        d = " ";
        break;
      }
      default:
        d = String.fromCharCode(c);
    }
    s = c === -2, o.push(d);
  }
  return o.join("");
}
function jE(n) {
  const o = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Fx([ME, ...(n || {}).extensions || []])
    ),
    content: s($x),
    defined: [],
    document: s(tw),
    flow: s(vE),
    lazy: {},
    string: s(wE),
    text: s(EE)
  };
  return o;
  function s(c) {
    return d;
    function d(p) {
      return UE(o, c, p);
    }
  }
}
function qE(n) {
  for (; !wy(n); )
    ;
  return n;
}
const Fh = /[\0\t\n\r]/g;
function HE() {
  let n = 1, i = "", r = !0, o;
  return s;
  function s(c, d, p) {
    const g = [];
    let m, h, v, E, w;
    for (c = i + (typeof c == "string" ? c.toString() : new TextDecoder(d || void 0).decode(c)), v = 0, i = "", r && (c.charCodeAt(0) === 65279 && v++, r = void 0); v < c.length; ) {
      if (Fh.lastIndex = v, m = Fh.exec(c), E = m && m.index !== void 0 ? m.index : c.length, w = c.charCodeAt(E), !m) {
        i = c.slice(v);
        break;
      }
      if (w === 10 && v === E && o)
        g.push(-3), o = void 0;
      else
        switch (o && (g.push(-5), o = void 0), v < E && (g.push(c.slice(v, E)), n += E - v), w) {
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
      v = E + 1;
    }
    return p && (o && g.push(-5), i && g.push(i), g.push(null)), g;
  }
}
const VE = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function IE(n) {
  return n.replace(VE, QE);
}
function QE(n, i, r) {
  if (i)
    return i;
  if (r.charCodeAt(0) === 35) {
    const s = r.charCodeAt(1), c = s === 120 || s === 88;
    return by(r.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return Wc(r) || n;
}
const zy = {}.hasOwnProperty;
function GE(n, i, r) {
  return typeof i != "string" && (r = i, i = void 0), FE(r)(qE(jE(r).document().write(HE()(n, i, !0))));
}
function FE(n) {
  const i = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: c(Ui),
      autolinkProtocol: de,
      autolinkEmail: de,
      atxHeading: c(Kl),
      blockQuote: c(ot),
      characterEscape: de,
      characterReference: de,
      codeFenced: c(xt),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: c(xt, d),
      codeText: c(cn, d),
      codeTextData: de,
      data: de,
      codeFlowValue: de,
      definition: c(Ni),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: c(Mi),
      hardBreakEscape: c(Zl),
      hardBreakTrailing: c(Zl),
      htmlFlow: c(Ut, d),
      htmlFlowData: de,
      htmlText: c(Ut, d),
      htmlTextData: de,
      image: c(Mo),
      label: d,
      link: c(Ui),
      listItem: c(La),
      listItemValue: E,
      listOrdered: c(Li, v),
      listUnordered: c(Li),
      paragraph: c(Uo),
      reference: x,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: c(Kl),
      strong: c(Jl),
      thematicBreak: c(Bo)
    },
    exit: {
      atxHeading: g(),
      atxHeadingSequence: W,
      autolink: g(),
      autolinkEmail: Pe,
      autolinkProtocol: Re,
      blockQuote: g(),
      characterEscapeValue: we,
      characterReferenceMarkerHexadecimal: oe,
      characterReferenceMarkerNumeric: oe,
      characterReferenceValue: ee,
      characterReference: be,
      codeFenced: g(B),
      codeFencedFence: D,
      codeFencedFenceInfo: w,
      codeFencedFenceMeta: k,
      codeFlowValue: we,
      codeIndented: g(_),
      codeText: g(ie),
      codeTextData: we,
      data: we,
      definition: g(),
      definitionDestinationString: fe,
      definitionLabelString: Z,
      definitionTitleString: F,
      emphasis: g(),
      hardBreakEscape: g(ne),
      hardBreakTrailing: g(ne),
      htmlFlow: g(te),
      htmlFlowData: we,
      htmlText: g(ae),
      htmlTextData: we,
      image: g(Y),
      label: Ee,
      labelText: G,
      lineEnding: le,
      link: g(O),
      listItem: g(),
      listOrdered: g(),
      listUnordered: g(),
      paragraph: g(),
      referenceString: $,
      resourceDestinationString: b,
      resourceTitleString: V,
      resource: J,
      setextHeading: g(P),
      setextHeadingLineSequence: re,
      setextHeadingText: U,
      strong: g(),
      thematicBreak: g()
    }
  };
  Ry(i, (n || {}).mdastExtensions || []);
  const r = {};
  return o;
  function o(q) {
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
      data: r
    }, ve = [];
    let je = -1;
    for (; ++je < q.length; )
      if (q[je][1].type === "listOrdered" || q[je][1].type === "listUnordered")
        if (q[je][0] === "enter")
          ve.push(je);
        else {
          const Lt = ve.pop();
          je = s(q, Lt, je);
        }
    for (je = -1; ++je < q.length; ) {
      const Lt = i[q[je][0]];
      zy.call(Lt, q[je][1].type) && Lt[q[je][1].type].call(Object.assign({
        sliceSerialize: q[je][2].sliceSerialize
      }, he), q[je][1]);
    }
    if (he.tokenStack.length > 0) {
      const Lt = he.tokenStack[he.tokenStack.length - 1];
      (Lt[1] || Yh).call(he, void 0, Lt[0]);
    }
    for (X.position = {
      start: ca(q.length > 0 ? q[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: ca(q.length > 0 ? q[q.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, je = -1; ++je < i.transforms.length; )
      X = i.transforms[je](X) || X;
    return X;
  }
  function s(q, X, he) {
    let ve = X - 1, je = -1, Lt = !1, wn, Et, fn, Bt;
    for (; ++ve <= he; ) {
      const ut = q[ve];
      switch (ut[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ut[0] === "enter" ? je++ : je--, Bt = void 0;
          break;
        }
        case "lineEndingBlank": {
          ut[0] === "enter" && (wn && !Bt && !je && !fn && (fn = ve), Bt = void 0);
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
        if (wn) {
          let Xt = ve;
          for (Et = void 0; Xt--; ) {
            const ln = q[Xt];
            if (ln[1].type === "lineEnding" || ln[1].type === "lineEndingBlank") {
              if (ln[0] === "exit") continue;
              Et && (q[Et][1].type = "lineEndingBlank", Lt = !0), ln[1].type = "lineEnding", Et = Xt;
            } else if (!(ln[1].type === "linePrefix" || ln[1].type === "blockQuotePrefix" || ln[1].type === "blockQuotePrefixWhitespace" || ln[1].type === "blockQuoteMarker" || ln[1].type === "listItemIndent")) break;
          }
          fn && (!Et || fn < Et) && (wn._spread = !0), wn.end = Object.assign({}, Et ? q[Et][1].start : ut[1].end), q.splice(Et || ve, 0, ["exit", wn, ut[2]]), ve++, he++;
        }
        if (ut[1].type === "listItemPrefix") {
          const Xt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ut[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          wn = Xt, q.splice(ve, 0, ["enter", Xt, ut[2]]), ve++, he++, fn = void 0, Bt = !0;
        }
      }
    }
    return q[X][1]._spread = Lt, he;
  }
  function c(q, X) {
    return he;
    function he(ve) {
      p.call(this, q(ve), ve), X && X.call(this, ve);
    }
  }
  function d() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function p(q, X, he) {
    this.stack[this.stack.length - 1].children.push(q), this.stack.push(q), this.tokenStack.push([X, he || void 0]), q.position = {
      start: ca(X.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function g(q) {
    return X;
    function X(he) {
      q && q.call(this, he), m.call(this, he);
    }
  }
  function m(q, X) {
    const he = this.stack.pop(), ve = this.tokenStack.pop();
    if (ve)
      ve[0].type !== q.type && (X ? X.call(this, q, ve[0]) : (ve[1] || Yh).call(this, q, ve[0]));
    else throw new Error("Cannot close `" + q.type + "` (" + Hl({
      start: q.start,
      end: q.end
    }) + "): it’s not open");
    he.position.end = ca(q.end);
  }
  function h() {
    return Qx(this.stack.pop());
  }
  function v() {
    this.data.expectingFirstListItemValue = !0;
  }
  function E(q) {
    if (this.data.expectingFirstListItemValue) {
      const X = this.stack[this.stack.length - 2];
      X.start = Number.parseInt(this.sliceSerialize(q), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function w() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.lang = q;
  }
  function k() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.meta = q;
  }
  function D() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function B() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.value = q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function _() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.value = q.replace(/(\r?\n|\r)$/g, "");
  }
  function Z(q) {
    const X = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = X, he.identifier = Ci(this.sliceSerialize(q)).toLowerCase();
  }
  function F() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.title = q;
  }
  function fe() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.url = q;
  }
  function W(q) {
    const X = this.stack[this.stack.length - 1];
    if (!X.depth) {
      const he = this.sliceSerialize(q).length;
      X.depth = he;
    }
  }
  function U() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function re(q) {
    const X = this.stack[this.stack.length - 1];
    X.depth = this.sliceSerialize(q).codePointAt(0) === 61 ? 1 : 2;
  }
  function P() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function de(q) {
    const he = this.stack[this.stack.length - 1].children;
    let ve = he[he.length - 1];
    (!ve || ve.type !== "text") && (ve = Lo(), ve.position = {
      start: ca(q.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, he.push(ve)), this.stack.push(ve);
  }
  function we(q) {
    const X = this.stack.pop();
    X.value += this.sliceSerialize(q), X.position.end = ca(q.end);
  }
  function le(q) {
    const X = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const he = X.children[X.children.length - 1];
      he.position.end = ca(q.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(X.type) && (de.call(this, q), we.call(this, q));
  }
  function ne() {
    this.data.atHardBreak = !0;
  }
  function te() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.value = q;
  }
  function ae() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.value = q;
  }
  function ie() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.value = q;
  }
  function O() {
    const q = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const X = this.data.referenceType || "shortcut";
      q.type += "Reference", q.referenceType = X, delete q.url, delete q.title;
    } else
      delete q.identifier, delete q.label;
    this.data.referenceType = void 0;
  }
  function Y() {
    const q = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const X = this.data.referenceType || "shortcut";
      q.type += "Reference", q.referenceType = X, delete q.url, delete q.title;
    } else
      delete q.identifier, delete q.label;
    this.data.referenceType = void 0;
  }
  function G(q) {
    const X = this.sliceSerialize(q), he = this.stack[this.stack.length - 2];
    he.label = IE(X), he.identifier = Ci(X).toLowerCase();
  }
  function Ee() {
    const q = this.stack[this.stack.length - 1], X = this.resume(), he = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, he.type === "link") {
      const ve = q.children;
      he.children = ve;
    } else
      he.alt = X;
  }
  function b() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.url = q;
  }
  function V() {
    const q = this.resume(), X = this.stack[this.stack.length - 1];
    X.title = q;
  }
  function J() {
    this.data.inReference = void 0;
  }
  function x() {
    this.data.referenceType = "collapsed";
  }
  function $(q) {
    const X = this.resume(), he = this.stack[this.stack.length - 1];
    he.label = X, he.identifier = Ci(this.sliceSerialize(q)).toLowerCase(), this.data.referenceType = "full";
  }
  function oe(q) {
    this.data.characterReferenceType = q.type;
  }
  function ee(q) {
    const X = this.sliceSerialize(q), he = this.data.characterReferenceType;
    let ve;
    he ? (ve = by(X, he === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : ve = Wc(X);
    const je = this.stack[this.stack.length - 1];
    je.value += ve;
  }
  function be(q) {
    const X = this.stack.pop();
    X.position.end = ca(q.end);
  }
  function Re(q) {
    we.call(this, q);
    const X = this.stack[this.stack.length - 1];
    X.url = this.sliceSerialize(q);
  }
  function Pe(q) {
    we.call(this, q);
    const X = this.stack[this.stack.length - 1];
    X.url = "mailto:" + this.sliceSerialize(q);
  }
  function ot() {
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
  function cn() {
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
  function Kl() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Zl() {
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
  function Mo() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Ui() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Li(q) {
    return {
      type: "list",
      ordered: q.type === "listOrdered",
      start: null,
      spread: q._spread,
      children: []
    };
  }
  function La(q) {
    return {
      type: "listItem",
      spread: q._spread,
      checked: null,
      children: []
    };
  }
  function Uo() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Jl() {
    return {
      type: "strong",
      children: []
    };
  }
  function Lo() {
    return {
      type: "text",
      value: ""
    };
  }
  function Bo() {
    return {
      type: "thematicBreak"
    };
  }
}
function ca(n) {
  return {
    line: n.line,
    column: n.column,
    offset: n.offset
  };
}
function Ry(n, i) {
  let r = -1;
  for (; ++r < i.length; ) {
    const o = i[r];
    Array.isArray(o) ? Ry(n, o) : YE(n, o);
  }
}
function YE(n, i) {
  let r;
  for (r in i)
    if (zy.call(i, r))
      switch (r) {
        case "canContainEols": {
          const o = i[r];
          o && n[r].push(...o);
          break;
        }
        case "transforms": {
          const o = i[r];
          o && n[r].push(...o);
          break;
        }
        case "enter":
        case "exit": {
          const o = i[r];
          o && Object.assign(n[r], o);
          break;
        }
      }
}
function Yh(n, i) {
  throw n ? new Error("Cannot close `" + n.type + "` (" + Hl({
    start: n.start,
    end: n.end
  }) + "): a different token (`" + i.type + "`, " + Hl({
    start: i.start,
    end: i.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + Hl({
    start: i.start,
    end: i.end
  }) + ") is still open");
}
function XE(n) {
  const i = this;
  i.parser = r;
  function r(o) {
    return GE(o, {
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
function PE(n, i) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(i), !0)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function KE(n, i) {
  const r = { type: "element", tagName: "br", properties: {}, children: [] };
  return n.patch(i, r), [n.applyData(i, r), { type: "text", value: `
` }];
}
function ZE(n, i) {
  const r = i.value ? i.value + `
` : "", o = {};
  i.lang && (o.className = ["language-" + i.lang]);
  let s = {
    type: "element",
    tagName: "code",
    properties: o,
    children: [{ type: "text", value: r }]
  };
  return i.meta && (s.data = { meta: i.meta }), n.patch(i, s), s = n.applyData(i, s), s = { type: "element", tagName: "pre", properties: {}, children: [s] }, n.patch(i, s), s;
}
function JE(n, i) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function WE(n, i) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function $E(n, i) {
  const r = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", o = String(i.identifier).toUpperCase(), s = _i(o.toLowerCase()), c = n.footnoteOrder.indexOf(o);
  let d, p = n.footnoteCounts.get(o);
  p === void 0 ? (p = 0, n.footnoteOrder.push(o), d = n.footnoteOrder.length) : d = c + 1, p += 1, n.footnoteCounts.set(o, p);
  const g = {
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
  n.patch(i, g);
  const m = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [g]
  };
  return n.patch(i, m), n.applyData(i, m);
}
function eA(n, i) {
  const r = {
    type: "element",
    tagName: "h" + i.depth,
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function tA(n, i) {
  if (n.options.allowDangerousHtml) {
    const r = { type: "raw", value: i.value };
    return n.patch(i, r), n.applyData(i, r);
  }
}
function Dy(n, i) {
  const r = i.referenceType;
  let o = "]";
  if (r === "collapsed" ? o += "[]" : r === "full" && (o += "[" + (i.label || i.identifier) + "]"), i.type === "imageReference")
    return [{ type: "text", value: "![" + i.alt + o }];
  const s = n.all(i), c = s[0];
  c && c.type === "text" ? c.value = "[" + c.value : s.unshift({ type: "text", value: "[" });
  const d = s[s.length - 1];
  return d && d.type === "text" ? d.value += o : s.push({ type: "text", value: o }), s;
}
function nA(n, i) {
  const r = String(i.identifier).toUpperCase(), o = n.definitionById.get(r);
  if (!o)
    return Dy(n, i);
  const s = { src: _i(o.url || ""), alt: i.alt };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const c = { type: "element", tagName: "img", properties: s, children: [] };
  return n.patch(i, c), n.applyData(i, c);
}
function aA(n, i) {
  const r = { src: _i(i.url) };
  i.alt !== null && i.alt !== void 0 && (r.alt = i.alt), i.title !== null && i.title !== void 0 && (r.title = i.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return n.patch(i, o), n.applyData(i, o);
}
function iA(n, i) {
  const r = { type: "text", value: i.value.replace(/\r?\n|\r/g, " ") };
  n.patch(i, r);
  const o = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [r]
  };
  return n.patch(i, o), n.applyData(i, o);
}
function lA(n, i) {
  const r = String(i.identifier).toUpperCase(), o = n.definitionById.get(r);
  if (!o)
    return Dy(n, i);
  const s = { href: _i(o.url || "") };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: s,
    children: n.all(i)
  };
  return n.patch(i, c), n.applyData(i, c);
}
function rA(n, i) {
  const r = { href: _i(i.url) };
  i.title !== null && i.title !== void 0 && (r.title = i.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: r,
    children: n.all(i)
  };
  return n.patch(i, o), n.applyData(i, o);
}
function oA(n, i, r) {
  const o = n.all(i), s = r ? uA(r) : Oy(i), c = {}, d = [];
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
    (s || p !== 0 || h.type !== "element" || h.tagName !== "p") && d.push({ type: "text", value: `
` }), h.type === "element" && h.tagName === "p" && !s ? d.push(...h.children) : d.push(h);
  }
  const g = o[o.length - 1];
  g && (s || g.type !== "element" || g.tagName !== "p") && d.push({ type: "text", value: `
` });
  const m = { type: "element", tagName: "li", properties: c, children: d };
  return n.patch(i, m), n.applyData(i, m);
}
function uA(n) {
  let i = !1;
  if (n.type === "list") {
    i = n.spread || !1;
    const r = n.children;
    let o = -1;
    for (; !i && ++o < r.length; )
      i = Oy(r[o]);
  }
  return i;
}
function Oy(n) {
  const i = n.spread;
  return i ?? n.children.length > 1;
}
function sA(n, i) {
  const r = {}, o = n.all(i);
  let s = -1;
  for (typeof i.start == "number" && i.start !== 1 && (r.start = i.start); ++s < o.length; ) {
    const d = o[s];
    if (d.type === "element" && d.tagName === "li" && d.properties && Array.isArray(d.properties.className) && d.properties.className.includes("task-list-item")) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const c = {
    type: "element",
    tagName: i.ordered ? "ol" : "ul",
    properties: r,
    children: n.wrap(o, !0)
  };
  return n.patch(i, c), n.applyData(i, c);
}
function cA(n, i) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function fA(n, i) {
  const r = { type: "root", children: n.wrap(n.all(i)) };
  return n.patch(i, r), n.applyData(i, r);
}
function dA(n, i) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function pA(n, i) {
  const r = n.all(i), o = r.shift(), s = [];
  if (o) {
    const d = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: n.wrap([o], !0)
    };
    n.patch(i.children[0], d), s.push(d);
  }
  if (r.length > 0) {
    const d = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: n.wrap(r, !0)
    }, p = Pc(i.children[1]), g = fy(i.children[i.children.length - 1]);
    p && g && (d.position = { start: p, end: g }), s.push(d);
  }
  const c = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(s, !0)
  };
  return n.patch(i, c), n.applyData(i, c);
}
function mA(n, i, r) {
  const o = r ? r.children : void 0, c = (o ? o.indexOf(i) : 1) === 0 ? "th" : "td", d = r && r.type === "table" ? r.align : void 0, p = d ? d.length : i.children.length;
  let g = -1;
  const m = [];
  for (; ++g < p; ) {
    const v = i.children[g], E = {}, w = d ? d[g] : void 0;
    w && (E.align = w);
    let k = { type: "element", tagName: c, properties: E, children: [] };
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
function hA(n, i) {
  const r = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
const Xh = 9, Ph = 32;
function gA(n) {
  const i = String(n), r = /\r?\n|\r/g;
  let o = r.exec(i), s = 0;
  const c = [];
  for (; o; )
    c.push(
      Kh(i.slice(s, o.index), s > 0, !0),
      o[0]
    ), s = o.index + o[0].length, o = r.exec(i);
  return c.push(Kh(i.slice(s), s > 0, !1)), c.join("");
}
function Kh(n, i, r) {
  let o = 0, s = n.length;
  if (i) {
    let c = n.codePointAt(o);
    for (; c === Xh || c === Ph; )
      o++, c = n.codePointAt(o);
  }
  if (r) {
    let c = n.codePointAt(s - 1);
    for (; c === Xh || c === Ph; )
      s--, c = n.codePointAt(s - 1);
  }
  return s > o ? n.slice(o, s) : "";
}
function yA(n, i) {
  const r = { type: "text", value: gA(String(i.value)) };
  return n.patch(i, r), n.applyData(i, r);
}
function bA(n, i) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return n.patch(i, r), n.applyData(i, r);
}
const vA = {
  blockquote: PE,
  break: KE,
  code: ZE,
  delete: JE,
  emphasis: WE,
  footnoteReference: $E,
  heading: eA,
  html: tA,
  imageReference: nA,
  image: aA,
  inlineCode: iA,
  linkReference: lA,
  link: rA,
  listItem: oA,
  list: sA,
  paragraph: cA,
  // @ts-expect-error: root is different, but hard to type.
  root: fA,
  strong: dA,
  table: pA,
  tableCell: hA,
  tableRow: mA,
  text: yA,
  thematicBreak: bA,
  toml: co,
  yaml: co,
  definition: co,
  footnoteDefinition: co
};
function co() {
}
const _y = -1, _o = 0, Il = 1, wo = 2, tf = 3, nf = 4, af = 5, lf = 6, Ny = 7, My = 8, Zh = typeof self == "object" ? self : globalThis, SA = (n, i) => {
  const r = (s, c) => (n.set(c, s), s), o = (s) => {
    if (n.has(s))
      return n.get(s);
    const [c, d] = i[s];
    switch (c) {
      case _o:
      case _y:
        return r(d, s);
      case Il: {
        const p = r([], s);
        for (const g of d)
          p.push(o(g));
        return p;
      }
      case wo: {
        const p = r({}, s);
        for (const [g, m] of d)
          p[o(g)] = o(m);
        return p;
      }
      case tf:
        return r(new Date(d), s);
      case nf: {
        const { source: p, flags: g } = d;
        return r(new RegExp(p, g), s);
      }
      case af: {
        const p = r(/* @__PURE__ */ new Map(), s);
        for (const [g, m] of d)
          p.set(o(g), o(m));
        return p;
      }
      case lf: {
        const p = r(/* @__PURE__ */ new Set(), s);
        for (const g of d)
          p.add(o(g));
        return p;
      }
      case Ny: {
        const { name: p, message: g } = d;
        return r(new Zh[p](g), s);
      }
      case My:
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
    return r(new Zh[c](d), s);
  };
  return o;
}, Jh = (n) => SA(/* @__PURE__ */ new Map(), n)(0), Ai = "", { toString: xA } = {}, { keys: wA } = Object, ql = (n) => {
  const i = typeof n;
  if (i !== "object" || !n)
    return [_o, i];
  const r = xA.call(n).slice(8, -1);
  switch (r) {
    case "Array":
      return [Il, Ai];
    case "Object":
      return [wo, Ai];
    case "Date":
      return [tf, Ai];
    case "RegExp":
      return [nf, Ai];
    case "Map":
      return [af, Ai];
    case "Set":
      return [lf, Ai];
    case "DataView":
      return [Il, r];
  }
  return r.includes("Array") ? [Il, r] : r.includes("Error") ? [Ny, r] : [wo, r];
}, fo = ([n, i]) => n === _o && (i === "function" || i === "symbol"), EA = (n, i, r, o) => {
  const s = (d, p) => {
    const g = o.push(d) - 1;
    return r.set(p, g), g;
  }, c = (d) => {
    if (r.has(d))
      return r.get(d);
    let [p, g] = ql(d);
    switch (p) {
      case _o: {
        let h = d;
        switch (g) {
          case "bigint":
            p = My, h = d.toString();
            break;
          case "function":
          case "symbol":
            if (n)
              throw new TypeError("unable to serialize " + g);
            h = null;
            break;
          case "undefined":
            return s([_y], d);
        }
        return s([p, h], d);
      }
      case Il: {
        if (g) {
          let E = d;
          return g === "DataView" ? E = new Uint8Array(d.buffer) : g === "ArrayBuffer" && (E = new Uint8Array(d)), s([g, [...E]], d);
        }
        const h = [], v = s([p, h], d);
        for (const E of d)
          h.push(c(E));
        return v;
      }
      case wo: {
        if (g)
          switch (g) {
            case "BigInt":
              return s([g, d.toString()], d);
            case "Boolean":
            case "Number":
            case "String":
              return s([g, d.valueOf()], d);
          }
        if (i && "toJSON" in d)
          return c(d.toJSON());
        const h = [], v = s([p, h], d);
        for (const E of wA(d))
          (n || !fo(ql(d[E]))) && h.push([c(E), c(d[E])]);
        return v;
      }
      case tf:
        return s([p, d.toISOString()], d);
      case nf: {
        const { source: h, flags: v } = d;
        return s([p, { source: h, flags: v }], d);
      }
      case af: {
        const h = [], v = s([p, h], d);
        for (const [E, w] of d)
          (n || !(fo(ql(E)) || fo(ql(w)))) && h.push([c(E), c(w)]);
        return v;
      }
      case lf: {
        const h = [], v = s([p, h], d);
        for (const E of d)
          (n || !fo(ql(E))) && h.push(c(E));
        return v;
      }
    }
    const { message: m } = d;
    return s([p, { name: g, message: m }], d);
  };
  return c;
}, Wh = (n, { json: i, lossy: r } = {}) => {
  const o = [];
  return EA(!(i || r), !!i, /* @__PURE__ */ new Map(), o)(n), o;
}, Eo = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, i) => i && ("json" in i || "lossy" in i) ? Jh(Wh(n, i)) : structuredClone(n)
) : (n, i) => Jh(Wh(n, i));
function AA(n, i) {
  const r = [{ type: "text", value: "↩" }];
  return i > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(i) }]
  }), r;
}
function TA(n, i) {
  return "Back to reference " + (n + 1) + (i > 1 ? "-" + i : "");
}
function CA(n) {
  const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", r = n.options.footnoteBackContent || AA, o = n.options.footnoteBackLabel || TA, s = n.options.footnoteLabel || "Footnotes", c = n.options.footnoteLabelTagName || "h2", d = n.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let g = -1;
  for (; ++g < n.footnoteOrder.length; ) {
    const m = n.footnoteById.get(
      n.footnoteOrder[g]
    );
    if (!m)
      continue;
    const h = n.all(m), v = String(m.identifier).toUpperCase(), E = _i(v.toLowerCase());
    let w = 0;
    const k = [], D = n.footnoteCounts.get(v);
    for (; D !== void 0 && ++w <= D; ) {
      k.length > 0 && k.push({ type: "text", value: " " });
      let Z = typeof r == "string" ? r : r(g, w);
      typeof Z == "string" && (Z = { type: "text", value: Z }), k.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + i + "fnref-" + E + (w > 1 ? "-" + w : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof o == "string" ? o : o(g, w),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(Z) ? Z : [Z]
      });
    }
    const B = h[h.length - 1];
    if (B && B.type === "element" && B.tagName === "p") {
      const Z = B.children[B.children.length - 1];
      Z && Z.type === "text" ? Z.value += " " : B.children.push({ type: "text", value: " " }), B.children.push(...k);
    } else
      h.push(...k);
    const _ = {
      type: "element",
      tagName: "li",
      properties: { id: i + "fn-" + E },
      children: n.wrap(h, !0)
    };
    n.patch(m, _), p.push(_);
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
            ...Eo(d),
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
const Uy = (
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
      return DA;
    if (typeof n == "function")
      return No(n);
    if (typeof n == "object")
      return Array.isArray(n) ? kA(n) : zA(n);
    if (typeof n == "string")
      return RA(n);
    throw new Error("Expected function, string, or object as test");
  }
);
function kA(n) {
  const i = [];
  let r = -1;
  for (; ++r < n.length; )
    i[r] = Uy(n[r]);
  return No(o);
  function o(...s) {
    let c = -1;
    for (; ++c < i.length; )
      if (i[c].apply(this, s)) return !0;
    return !1;
  }
}
function zA(n) {
  const i = (
    /** @type {Record<string, unknown>} */
    n
  );
  return No(r);
  function r(o) {
    const s = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      o
    );
    let c;
    for (c in n)
      if (s[c] !== i[c]) return !1;
    return !0;
  }
}
function RA(n) {
  return No(i);
  function i(r) {
    return r && r.type === n;
  }
}
function No(n) {
  return i;
  function i(r, o, s) {
    return !!(OA(r) && n.call(
      this,
      r,
      typeof o == "number" ? o : void 0,
      s || void 0
    ));
  }
}
function DA() {
  return !0;
}
function OA(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const Ly = [], _A = !0, $h = !1, NA = "skip";
function MA(n, i, r, o) {
  let s;
  typeof i == "function" && typeof r != "function" ? (o = r, r = i) : s = i;
  const c = Uy(s), d = o ? -1 : 1;
  p(n, void 0, [])();
  function p(g, m, h) {
    const v = (
      /** @type {Record<string, unknown>} */
      g && typeof g == "object" ? g : {}
    );
    if (typeof v.type == "string") {
      const w = (
        // `hast`
        typeof v.tagName == "string" ? v.tagName : (
          // `xast`
          typeof v.name == "string" ? v.name : void 0
        )
      );
      Object.defineProperty(E, "name", {
        value: "node (" + (g.type + (w ? "<" + w + ">" : "")) + ")"
      });
    }
    return E;
    function E() {
      let w = Ly, k, D, B;
      if ((!i || c(g, m, h[h.length - 1] || void 0)) && (w = UA(r(g, h)), w[0] === $h))
        return w;
      if ("children" in g && g.children) {
        const _ = (
          /** @type {UnistParent} */
          g
        );
        if (_.children && w[0] !== NA)
          for (D = (o ? _.children.length : -1) + d, B = h.concat(_); D > -1 && D < _.children.length; ) {
            const Z = _.children[D];
            if (k = p(Z, D, B)(), k[0] === $h)
              return k;
            D = typeof k[1] == "number" ? k[1] : D + d;
          }
      }
      return w;
    }
  }
}
function UA(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [_A, n] : n == null ? Ly : [n];
}
function By(n, i, r, o) {
  let s, c, d;
  typeof i == "function" && typeof r != "function" ? (c = void 0, d = i, s = r) : (c = i, d = r, s = o), MA(n, c, p, s);
  function p(g, m) {
    const h = m[m.length - 1], v = h ? h.children.indexOf(g) : void 0;
    return d(g, v, h);
  }
}
const Lc = {}.hasOwnProperty, LA = {};
function BA(n, i) {
  const r = i || LA, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = { ...vA, ...r.handlers }, p = {
    all: m,
    applyData: qA,
    definitionById: o,
    footnoteById: s,
    footnoteCounts: c,
    footnoteOrder: [],
    handlers: d,
    one: g,
    options: r,
    patch: jA,
    wrap: VA
  };
  return By(n, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const v = h.type === "definition" ? o : s, E = String(h.identifier).toUpperCase();
      v.has(E) || v.set(E, h);
    }
  }), p;
  function g(h, v) {
    const E = h.type, w = p.handlers[E];
    if (Lc.call(p.handlers, E) && w)
      return w(p, h, v);
    if (p.options.passThrough && p.options.passThrough.includes(E)) {
      if ("children" in h) {
        const { children: D, ...B } = h, _ = Eo(B);
        return _.children = p.all(h), _;
      }
      return Eo(h);
    }
    return (p.options.unknownHandler || HA)(p, h, v);
  }
  function m(h) {
    const v = [];
    if ("children" in h) {
      const E = h.children;
      let w = -1;
      for (; ++w < E.length; ) {
        const k = p.one(E[w], h);
        if (k) {
          if (w && E[w - 1].type === "break" && (!Array.isArray(k) && k.type === "text" && (k.value = eg(k.value)), !Array.isArray(k) && k.type === "element")) {
            const D = k.children[0];
            D && D.type === "text" && (D.value = eg(D.value));
          }
          Array.isArray(k) ? v.push(...k) : v.push(k);
        }
      }
    }
    return v;
  }
}
function jA(n, i) {
  n.position && (i.position = xx(n));
}
function qA(n, i) {
  let r = i;
  if (n && n.data) {
    const o = n.data.hName, s = n.data.hChildren, c = n.data.hProperties;
    if (typeof o == "string")
      if (r.type === "element")
        r.tagName = o;
      else {
        const d = "children" in r ? r.children : [r];
        r = { type: "element", tagName: o, properties: {}, children: d };
      }
    r.type === "element" && c && Object.assign(r.properties, Eo(c)), "children" in r && r.children && s !== null && s !== void 0 && (r.children = s);
  }
  return r;
}
function HA(n, i) {
  const r = i.data || {}, o = "value" in i && !(Lc.call(r, "hProperties") || Lc.call(r, "hChildren")) ? { type: "text", value: i.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, o), n.applyData(i, o);
}
function VA(n, i) {
  const r = [];
  let o = -1;
  for (i && r.push({ type: "text", value: `
` }); ++o < n.length; )
    o && r.push({ type: "text", value: `
` }), r.push(n[o]);
  return i && n.length > 0 && r.push({ type: "text", value: `
` }), r;
}
function eg(n) {
  let i = 0, r = n.charCodeAt(i);
  for (; r === 9 || r === 32; )
    i++, r = n.charCodeAt(i);
  return n.slice(i);
}
function tg(n, i) {
  const r = BA(n, i), o = r.one(n, void 0), s = CA(r), c = Array.isArray(o) ? { type: "root", children: o } : o || { type: "root", children: [] };
  return s && c.children.push({ type: "text", value: `
` }, s), c;
}
function IA(n, i) {
  return n && "run" in n ? async function(r, o) {
    const s = (
      /** @type {HastRoot} */
      tg(r, { file: o, ...i })
    );
    await n.run(s, o);
  } : function(r, o) {
    return (
      /** @type {HastRoot} */
      tg(r, { file: o, ...n || i })
    );
  };
}
function ng(n) {
  if (n)
    throw n;
}
var fc, ag;
function QA() {
  if (ag) return fc;
  ag = 1;
  var n = Object.prototype.hasOwnProperty, i = Object.prototype.toString, r = Object.defineProperty, o = Object.getOwnPropertyDescriptor, s = function(m) {
    return typeof Array.isArray == "function" ? Array.isArray(m) : i.call(m) === "[object Array]";
  }, c = function(m) {
    if (!m || i.call(m) !== "[object Object]")
      return !1;
    var h = n.call(m, "constructor"), v = m.constructor && m.constructor.prototype && n.call(m.constructor.prototype, "isPrototypeOf");
    if (m.constructor && !h && !v)
      return !1;
    var E;
    for (E in m)
      ;
    return typeof E > "u" || n.call(m, E);
  }, d = function(m, h) {
    r && h.name === "__proto__" ? r(m, h.name, {
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
    var m, h, v, E, w, k, D = arguments[0], B = 1, _ = arguments.length, Z = !1;
    for (typeof D == "boolean" && (Z = D, D = arguments[1] || {}, B = 2), (D == null || typeof D != "object" && typeof D != "function") && (D = {}); B < _; ++B)
      if (m = arguments[B], m != null)
        for (h in m)
          v = p(D, h), E = p(m, h), D !== E && (Z && E && (c(E) || (w = s(E))) ? (w ? (w = !1, k = v && s(v) ? v : []) : k = v && c(v) ? v : {}, d(D, { name: h, newValue: g(Z, k, E) })) : typeof E < "u" && d(D, { name: h, newValue: E }));
    return D;
  }, fc;
}
var GA = QA();
const dc = /* @__PURE__ */ Hc(GA);
function Bc(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const i = Object.getPrototypeOf(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function FA() {
  const n = [], i = { run: r, use: o };
  return i;
  function r(...s) {
    let c = -1;
    const d = s.pop();
    if (typeof d != "function")
      throw new TypeError("Expected function as last argument, not " + d);
    p(null, ...s);
    function p(g, ...m) {
      const h = n[++c];
      let v = -1;
      if (g) {
        d(g);
        return;
      }
      for (; ++v < s.length; )
        (m[v] === null || m[v] === void 0) && (m[v] = s[v]);
      s = m, h ? YA(h, p)(...m) : d(null, ...m);
    }
  }
  function o(s) {
    if (typeof s != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + s
      );
    return n.push(s), i;
  }
}
function YA(n, i) {
  let r;
  return o;
  function o(...d) {
    const p = n.length > d.length;
    let g;
    p && d.push(s);
    try {
      g = n.apply(this, d);
    } catch (m) {
      const h = (
        /** @type {Error} */
        m
      );
      if (p && r)
        throw h;
      return s(h);
    }
    p || (g && g.then && typeof g.then == "function" ? g.then(c, s) : g instanceof Error ? s(g) : c(g));
  }
  function s(d, ...p) {
    r || (r = !0, i(d, ...p));
  }
  function c(d) {
    s(null, d);
  }
}
const bn = { basename: XA, dirname: PA, extname: KA, join: ZA, sep: "/" };
function XA(n, i) {
  if (i !== void 0 && typeof i != "string")
    throw new TypeError('"ext" argument must be a string');
  Pl(n);
  let r = 0, o = -1, s = n.length, c;
  if (i === void 0 || i.length === 0 || i.length > n.length) {
    for (; s--; )
      if (n.codePointAt(s) === 47) {
        if (c) {
          r = s + 1;
          break;
        }
      } else o < 0 && (c = !0, o = s + 1);
    return o < 0 ? "" : n.slice(r, o);
  }
  if (i === n)
    return "";
  let d = -1, p = i.length - 1;
  for (; s--; )
    if (n.codePointAt(s) === 47) {
      if (c) {
        r = s + 1;
        break;
      }
    } else
      d < 0 && (c = !0, d = s + 1), p > -1 && (n.codePointAt(s) === i.codePointAt(p--) ? p < 0 && (o = s) : (p = -1, o = d));
  return r === o ? o = d : o < 0 && (o = n.length), n.slice(r, o);
}
function PA(n) {
  if (Pl(n), n.length === 0)
    return ".";
  let i = -1, r = n.length, o;
  for (; --r; )
    if (n.codePointAt(r) === 47) {
      if (o) {
        i = r;
        break;
      }
    } else o || (o = !0);
  return i < 0 ? n.codePointAt(0) === 47 ? "/" : "." : i === 1 && n.codePointAt(0) === 47 ? "//" : n.slice(0, i);
}
function KA(n) {
  Pl(n);
  let i = n.length, r = -1, o = 0, s = -1, c = 0, d;
  for (; i--; ) {
    const p = n.codePointAt(i);
    if (p === 47) {
      if (d) {
        o = i + 1;
        break;
      }
      continue;
    }
    r < 0 && (d = !0, r = i + 1), p === 46 ? s < 0 ? s = i : c !== 1 && (c = 1) : s > -1 && (c = -1);
  }
  return s < 0 || r < 0 || // We saw a non-dot character immediately before the dot.
  c === 0 || // The (right-most) trimmed path component is exactly `..`.
  c === 1 && s === r - 1 && s === o + 1 ? "" : n.slice(s, r);
}
function ZA(...n) {
  let i = -1, r;
  for (; ++i < n.length; )
    Pl(n[i]), n[i] && (r = r === void 0 ? n[i] : r + "/" + n[i]);
  return r === void 0 ? "." : JA(r);
}
function JA(n) {
  Pl(n);
  const i = n.codePointAt(0) === 47;
  let r = WA(n, !i);
  return r.length === 0 && !i && (r = "."), r.length > 0 && n.codePointAt(n.length - 1) === 47 && (r += "/"), i ? "/" + r : r;
}
function WA(n, i) {
  let r = "", o = 0, s = -1, c = 0, d = -1, p, g;
  for (; ++d <= n.length; ) {
    if (d < n.length)
      p = n.codePointAt(d);
    else {
      if (p === 47)
        break;
      p = 47;
    }
    if (p === 47) {
      if (!(s === d - 1 || c === 1)) if (s !== d - 1 && c === 2) {
        if (r.length < 2 || o !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            if (g = r.lastIndexOf("/"), g !== r.length - 1) {
              g < 0 ? (r = "", o = 0) : (r = r.slice(0, g), o = r.length - 1 - r.lastIndexOf("/")), s = d, c = 0;
              continue;
            }
          } else if (r.length > 0) {
            r = "", o = 0, s = d, c = 0;
            continue;
          }
        }
        i && (r = r.length > 0 ? r + "/.." : "..", o = 2);
      } else
        r.length > 0 ? r += "/" + n.slice(s + 1, d) : r = n.slice(s + 1, d), o = d - s - 1;
      s = d, c = 0;
    } else p === 46 && c > -1 ? c++ : c = -1;
  }
  return r;
}
function Pl(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
const $A = { cwd: eT };
function eT() {
  return "/";
}
function jc(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function tT(n) {
  if (typeof n == "string")
    n = new URL(n);
  else if (!jc(n)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + n + "`"
    );
    throw i.code = "ERR_INVALID_ARG_TYPE", i;
  }
  if (n.protocol !== "file:") {
    const i = new TypeError("The URL must be of scheme file");
    throw i.code = "ERR_INVALID_URL_SCHEME", i;
  }
  return nT(n);
}
function nT(n) {
  if (n.hostname !== "") {
    const o = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw o.code = "ERR_INVALID_FILE_URL_HOST", o;
  }
  const i = n.pathname;
  let r = -1;
  for (; ++r < i.length; )
    if (i.codePointAt(r) === 37 && i.codePointAt(r + 1) === 50) {
      const o = i.codePointAt(r + 2);
      if (o === 70 || o === 102) {
        const s = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
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
class jy {
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
    i ? jc(i) ? r = { path: i } : typeof i == "string" || aT(i) ? r = { value: i } : r = i : r = {}, this.cwd = "cwd" in r ? "" : $A.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let o = -1;
    for (; ++o < pc.length; ) {
      const c = pc[o];
      c in r && r[c] !== void 0 && r[c] !== null && (this[c] = c === "history" ? [...r[c]] : r[c]);
    }
    let s;
    for (s in r)
      pc.includes(s) || (this[s] = r[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? bn.basename(this.path) : void 0;
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
    hc(i, "basename"), mc(i, "basename"), this.path = bn.join(this.dirname || "", i);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? bn.dirname(this.path) : void 0;
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
    ig(this.basename, "dirname"), this.path = bn.join(i || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? bn.extname(this.path) : void 0;
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
    this.path = bn.join(this.dirname, this.stem + (i || ""));
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
    jc(i) && (i = tT(i)), hc(i, "path"), this.path !== i && this.history.push(i);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? bn.basename(this.path, this.extname) : void 0;
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
    hc(i, "stem"), mc(i, "stem"), this.path = bn.join(this.dirname || "", i + (this.extname || ""));
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
  fail(i, r, o) {
    const s = this.message(i, r, o);
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
  info(i, r, o) {
    const s = this.message(i, r, o);
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
  message(i, r, o) {
    const s = new St(
      // @ts-expect-error: the overloads are fine.
      i,
      r,
      o
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
function mc(n, i) {
  if (n && n.includes(bn.sep))
    throw new Error(
      "`" + i + "` cannot be a path: did not expect `" + bn.sep + "`"
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
function aT(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const iT = (
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
    ), s = o[n], c = function() {
      return s.apply(c, arguments);
    };
    return Object.setPrototypeOf(c, o), c;
  }
), lT = {}.hasOwnProperty;
class rf extends iT {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = FA();
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
      new rf()
    );
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const o = this.attachers[r];
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
  data(i, r) {
    return typeof i == "string" ? arguments.length === 2 ? (bc("data", this.frozen), this.namespace[i] = r, this) : lT.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (bc("data", this.frozen), this.namespace = i, this) : this.namespace;
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
      const [r, ...o] = this.attachers[this.freezeIndex];
      if (o[0] === !1)
        continue;
      o[0] === !0 && (o[0] = void 0);
      const s = r.call(i, ...o);
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
    const r = po(i), o = this.parser || this.Parser;
    return gc("parse", o), o(String(r), r);
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
    const o = this;
    return this.freeze(), gc("process", this.parser || this.Parser), yc("process", this.compiler || this.Compiler), r ? s(void 0, r) : new Promise(s);
    function s(c, d) {
      const p = po(i), g = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        o.parse(p)
      );
      o.run(g, p, function(h, v, E) {
        if (h || !v || !E)
          return m(h);
        const w = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          v
        ), k = o.stringify(w, E);
        uT(k) ? E.value = k : E.result = k, m(
          h,
          /** @type {VFileWithOutput<CompileResult>} */
          E
        );
      });
      function m(h, v) {
        h || !v ? d(h) : c ? c(v) : r(void 0, v);
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
    let r = !1, o;
    return this.freeze(), gc("processSync", this.parser || this.Parser), yc("processSync", this.compiler || this.Compiler), this.process(i, s), rg("processSync", "process", r), o;
    function s(c, d) {
      r = !0, ng(c), o = d;
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
  run(i, r, o) {
    lg(i), this.freeze();
    const s = this.transformers;
    return !o && typeof r == "function" && (o = r, r = void 0), o ? c(void 0, o) : new Promise(c);
    function c(d, p) {
      const g = po(r);
      s.run(i, g, m);
      function m(h, v, E) {
        const w = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          v || i
        );
        h ? p(h) : d ? d(w) : o(void 0, w, E);
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
    let o = !1, s;
    return this.run(i, r, c), rg("runSync", "run", o), s;
    function c(d, p) {
      ng(d), s = p, o = !0;
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
    const o = po(r), s = this.compiler || this.Compiler;
    return yc("stringify", s), lg(i), s(i, o);
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
    const o = this.attachers, s = this.namespace;
    if (bc("use", this.frozen), i != null) if (typeof i == "function")
      g(i, r);
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
      p(m.plugins), m.settings && (s.settings = dc(!0, s.settings, m.settings));
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
      let v = -1, E = -1;
      for (; ++v < o.length; )
        if (o[v][0] === m) {
          E = v;
          break;
        }
      if (E === -1)
        o.push([m, ...h]);
      else if (h.length > 0) {
        let [w, ...k] = h;
        const D = o[E][1];
        Bc(D) && Bc(w) && (w = dc(!0, D, w)), o[E] = [m, w, ...k];
      }
    }
  }
}
const rT = new rf().freeze();
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
function lg(n) {
  if (!Bc(n) || typeof n.type != "string")
    throw new TypeError("Expected node, got `" + n + "`");
}
function rg(n, i, r) {
  if (!r)
    throw new Error(
      "`" + n + "` finished async. Use `" + i + "` instead"
    );
}
function po(n) {
  return oT(n) ? n : new jy(n);
}
function oT(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function uT(n) {
  return typeof n == "string" || sT(n);
}
function sT(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const cT = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", og = [], ug = { allowDangerousHtml: !0 }, fT = /^(https?|ircs?|mailto|xmpp)$/i, dT = [
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
function pT(n) {
  const i = mT(n), r = hT(n);
  return gT(i.runSync(i.parse(r), r), n);
}
function mT(n) {
  const i = n.rehypePlugins || og, r = n.remarkPlugins || og, o = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...ug } : ug;
  return rT().use(XE).use(r).use(IA, o).use(i);
}
function hT(n) {
  const i = n.children || "", r = new jy();
  return typeof i == "string" && (r.value = i), r;
}
function gT(n, i) {
  const r = i.allowedElements, o = i.allowElement, s = i.components, c = i.disallowedElements, d = i.skipHtml, p = i.unwrapDisallowed, g = i.urlTransform || yT;
  for (const h of dT)
    Object.hasOwn(i, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + cT + h.id, void 0);
  return By(n, m), Cx(n, {
    Fragment: j.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: j.jsx,
    jsxs: j.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function m(h, v, E) {
    if (h.type === "raw" && E && typeof v == "number")
      return d ? E.children.splice(v, 1) : E.children[v] = { type: "text", value: h.value }, v;
    if (h.type === "element") {
      let w;
      for (w in uc)
        if (Object.hasOwn(uc, w) && Object.hasOwn(h.properties, w)) {
          const k = h.properties[w], D = uc[w];
          (D === null || D.includes(h.tagName)) && (h.properties[w] = g(String(k || ""), w, h));
        }
    }
    if (h.type === "element") {
      let w = r ? !r.includes(h.tagName) : c ? c.includes(h.tagName) : !1;
      if (!w && o && typeof v == "number" && (w = !o(h, v, E)), w && E && typeof v == "number")
        return p && h.children ? E.children.splice(v, 1, ...h.children) : E.children.splice(v, 1), v;
    }
  }
}
function yT(n) {
  const i = n.indexOf(":"), r = n.indexOf("?"), o = n.indexOf("#"), s = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    i === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && i > s || r !== -1 && i > r || o !== -1 && i > o || // It is a protocol, it should be allowed.
    fT.test(n.slice(0, i)) ? n : ""
  );
}
function qy({ content: n, className: i = "" }) {
  return /* @__PURE__ */ j.jsx("div", { className: `prose prose-sm max-w-none dark:prose-invert ${i}`, children: /* @__PURE__ */ j.jsx(
    pT,
    {
      components: {
        // Custom styling for markdown elements
        p: ({ children: r }) => /* @__PURE__ */ j.jsx("p", { className: "mb-2 last:mb-0", children: r }),
        ul: ({ children: r }) => /* @__PURE__ */ j.jsx("ul", { className: "list-disc list-inside mb-2 space-y-1", children: r }),
        ol: ({ children: r }) => /* @__PURE__ */ j.jsx("ol", { className: "list-decimal list-inside mb-2 space-y-1", children: r }),
        li: ({ children: r }) => /* @__PURE__ */ j.jsx("li", { className: "text-sm", children: r }),
        strong: ({ children: r }) => /* @__PURE__ */ j.jsx("strong", { className: "font-semibold", children: r }),
        em: ({ children: r }) => /* @__PURE__ */ j.jsx("em", { className: "italic", children: r }),
        code: ({ children: r }) => /* @__PURE__ */ j.jsx("code", { className: "bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono", children: r }),
        pre: ({ children: r }) => /* @__PURE__ */ j.jsx("pre", { className: "bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto", children: r }),
        h1: ({ children: r }) => /* @__PURE__ */ j.jsx("h1", { className: "text-lg font-bold mb-2", children: r }),
        h2: ({ children: r }) => /* @__PURE__ */ j.jsx("h2", { className: "text-base font-bold mb-2", children: r }),
        h3: ({ children: r }) => /* @__PURE__ */ j.jsx("h3", { className: "text-sm font-bold mb-1", children: r }),
        a: ({ children: r, href: o }) => /* @__PURE__ */ j.jsx(
          "a",
          {
            href: o,
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
class vn {
  static BACKEND_URL = "https://qurius-ai.onrender.com";
  // Track widget view
  static async trackWidgetView(i, r) {
    try {
      const o = this.getSessionId(), s = navigator.userAgent;
      await Ne.post(`${this.BACKEND_URL}/api/analytics/widget-view`, {
        companyName: i,
        pageUrl: r || window.location.href,
        userAgent: s,
        sessionId: o,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (o) {
      console.error("Failed to track widget view:", o);
    }
  }
  // Enhanced widget interaction tracking
  static async trackWidgetInteraction(i, r, o, s, c) {
    try {
      const d = this.getSessionId();
      await Ne.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName: i,
        eventType: r,
        message: o,
        response: s,
        sessionId: d,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        ...c
      });
    } catch (d) {
      console.error("Failed to track widget interaction:", d);
    }
  }
  // Get analytics for a company
  static async getCompanyAnalytics(i, r = "7d") {
    try {
      return (await Ne.get(`${this.BACKEND_URL}/api/analytics/company/${i}?period=${r}`)).data;
    } catch (o) {
      throw console.error("Failed to fetch analytics:", o), new Error("Failed to fetch analytics");
    }
  }
  // Get FAQ performance analytics
  static async getFAQPerformance(i, r = "7d") {
    try {
      return (await Ne.get(`${this.BACKEND_URL}/api/analytics/faq-performance/${i}?period=${r}`)).data;
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
  static async trackMessageSent(i, r) {
    await this.trackWidgetInteraction(i, "message_sent", r);
  }
  // Track message received with source tracking
  static async trackMessageReceived(i, r, o, s, c, d) {
    try {
      const p = this.getSessionId();
      await Ne.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName: i,
        eventType: "message_received",
        response: r,
        responseSource: o,
        faqId: s,
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
  static async trackLanguageChange(i, r) {
    await this.trackWidgetInteraction(i, "language_changed", void 0, void 0, {
      language: r
    });
  }
  // Track theme change
  static async trackThemeChange(i, r) {
    await this.trackWidgetInteraction(i, "theme_changed", void 0, void 0, {
      themeMode: r
    });
  }
  // Track FAQ match
  static async trackFAQMatch(i, r, o) {
    await this.trackWidgetInteraction(i, "faq_matched", void 0, void 0, {
      faqId: r,
      confidenceScore: o,
      responseSource: "faq"
    });
  }
  // Track AI fallback
  static async trackAIFallback(i, r, o) {
    await this.trackWidgetInteraction(i, "ai_fallback", void 0, void 0, {
      aiFallbackReason: r,
      confidenceScore: o,
      responseSource: "ai"
    });
  }
  // Track user rating
  static async trackRating(i, r, o, s, c, d, p) {
    await this.trackWidgetInteraction(i, "rating_given", void 0, o, {
      rating: r,
      feedbackText: c,
      responseSource: s,
      faqId: d,
      confidenceScore: p
    });
  }
}
function bT({ message: n, timestamp: i, companyTheme: r }) {
  return /* @__PURE__ */ j.jsxs("div", { className: "flex gap-3 max-w-[98%] mx-auto px-4 py-6 flex-row-reverse", children: [
    /* @__PURE__ */ j.jsx(
      "div",
      {
        className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white",
        style: { backgroundColor: r?.primaryColor },
        children: /* @__PURE__ */ j.jsx(hS, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ j.jsxs("div", { className: "flex-1 space-y-2 text-right", children: [
      /* @__PURE__ */ j.jsx(
        "div",
        {
          className: "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed text-white rounded-br-md",
          style: { backgroundColor: r?.primaryColor },
          children: /* @__PURE__ */ j.jsx(qy, { content: n })
        }
      ),
      i && /* @__PURE__ */ j.jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400 px-2 text-right", children: i })
    ] })
  ] });
}
function vT({
  message: n,
  messageIndex: i,
  liked: r,
  timestamp: o,
  onStreamingChange: s,
  skipStreaming: c,
  companyTheme: d,
  isLastAiMessage: p,
  companyName: g,
  onRatingChange: m,
  wasMinimized: h
}) {
  const [v, E] = pe.useState(""), [w, k] = pe.useState(!1), [D, B] = pe.useState(!1), [_, Z] = pe.useState(!1), [F, fe] = pe.useState(""), [W, U] = pe.useState(!1), [re, P] = pe.useState(!1), de = async (te) => {
    const ae = te.split(" ");
    let ie = "";
    k(!0), s?.(!0), E("");
    for (let O = 0; O < ae.length; O++)
      ie += ae[O] + " ", E(ie.trim()), O === ae.length - 1 && (k(!1), s?.(!1)), await new Promise((Y) => setTimeout(Y, 100));
  };
  pe.useEffect(() => {
    const te = setTimeout(() => {
      B(!0);
    }, 500);
    return () => clearTimeout(te);
  }, []), pe.useEffect(() => {
    !c && D && p ? setTimeout(() => {
      de(n);
    }, 1e3) : !c && !D && p ? (k(!0), s?.(!0), E("")) : (k(!1), s?.(!1), E(""));
  }, [n, c, D, p]);
  const we = async (te) => {
    if (g)
      try {
        te === -1 ? Z(!0) : await vn.trackRating(
          g,
          te,
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
  }, le = async () => {
    if (g) {
      U(!0);
      try {
        await vn.trackRating(
          g,
          -1,
          // Negative rating
          n,
          "ai",
          // Assuming AI response for now
          F,
          void 0,
          0.8
          // Default confidence
        ), Z(!1), fe("");
      } catch (te) {
        console.error("Failed to submit feedback:", te);
      } finally {
        U(!1);
      }
    }
  }, ne = async () => {
    try {
      await navigator.clipboard.writeText(n), P(!0), setTimeout(() => P(!1), 2e3);
    } catch (te) {
      console.error("Failed to copy message:", te);
    }
  };
  return /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsxs("div", { className: "flex gap-3 max-w-[98%] mx-auto px-4 py-6 flex-row", children: [
      /* @__PURE__ */ j.jsx(
        "div",
        {
          className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400",
          style: { backgroundColor: d?.backgroundColor },
          children: /* @__PURE__ */ j.jsx(Ig, { className: "w-4 h-4" })
        }
      ),
      (h || D) && /* @__PURE__ */ j.jsxs("div", { className: "flex-1 space-y-2 text-left", children: [
        /* @__PURE__ */ j.jsx(
          "div",
          {
            className: "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed text-gray-900 dark:text-gray-100 rounded-bl-md",
            style: { backgroundColor: d?.backgroundColor },
            children: /* @__PURE__ */ j.jsx(
              qy,
              {
                content: w && !c && p ? v : n
              }
            )
          }
        ),
        !w && /* @__PURE__ */ j.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
          i !== 0 && /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
            /* @__PURE__ */ j.jsx(
              "button",
              {
                onClick: () => {
                  console.log("Current liked status:", r);
                  const te = r !== "like" ? "like" : null;
                  console.log("New rating:", te), m?.(te), we(te === "like" ? 1 : 0);
                },
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Like this response",
                children: /* @__PURE__ */ j.jsx(pS, { className: Ma("w-3 h-3 text-gray-500 hover:text-green-500", r === "like" ? "text-green-500" : "text-gray-500") })
              }
            ),
            /* @__PURE__ */ j.jsx(
              "button",
              {
                onClick: () => {
                  console.log("Current liked status:", r);
                  const te = r !== "dislike" ? "dislike" : null;
                  console.log("New rating:", te), m?.(te), we(te === "dislike" ? -1 : 0);
                },
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Dislike this response",
                children: /* @__PURE__ */ j.jsx(fS, { className: Ma("w-3 h-3 text-gray-500 hover:text-red-500", r === "dislike" ? "text-red-500" : "text-gray-500") })
              }
            ),
            /* @__PURE__ */ j.jsx(
              "button",
              {
                onClick: ne,
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Copy message",
                children: /* @__PURE__ */ j.jsx(Jv, { className: "w-3 h-3 text-gray-500 hover:text-blue-500" })
              }
            )
          ] }),
          re && /* @__PURE__ */ j.jsx("span", { className: "text-xs text-green-500 ml-1", children: "Copied!" }),
          o && /* @__PURE__ */ j.jsx(
            "div",
            {
              className: "text-xs text-gray-500 dark:text-gray-400 px-2 text-right",
              children: o
            }
          )
        ] })
      ] })
    ] }),
    _ && /* @__PURE__ */ j.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ j.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4", children: [
      /* @__PURE__ */ j.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ j.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: "Help us improve" }),
        /* @__PURE__ */ j.jsx(
          "button",
          {
            onClick: () => Z(!1),
            className: "p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
            children: /* @__PURE__ */ j.jsx(yS, { className: "w-5 h-5 text-gray-500" })
          }
        )
      ] }),
      /* @__PURE__ */ j.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "What could we have done better? (Optional)" }),
      /* @__PURE__ */ j.jsx(
        "textarea",
        {
          value: F,
          onChange: (te) => fe(te.target.value),
          placeholder: "Your feedback helps us improve...",
          className: "w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100",
          rows: 3
        }
      ),
      /* @__PURE__ */ j.jsxs("div", { className: "flex gap-2 mt-4", children: [
        /* @__PURE__ */ j.jsx(
          "button",
          {
            onClick: () => Z(!1),
            className: "flex-1 px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ j.jsx(
          "button",
          {
            onClick: le,
            disabled: W,
            className: "flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: W ? "Submitting..." : "Submit Feedback"
          }
        )
      ] })
    ] }) })
  ] });
}
function ST({ message: n, messageIndex: i, liked: r, isUser: o, timestamp: s, onStreamingChange: c, skipStreaming: d, companyTheme: p, isLastAiMessage: g, companyName: m, onRatingChange: h, wasMinimized: v }) {
  return o ? /* @__PURE__ */ j.jsx(
    bT,
    {
      message: n,
      timestamp: s,
      companyTheme: p
    }
  ) : /* @__PURE__ */ j.jsx(
    vT,
    {
      message: n,
      messageIndex: i,
      liked: r || null,
      timestamp: s,
      onStreamingChange: c,
      skipStreaming: d,
      companyTheme: p,
      isLastAiMessage: g,
      companyName: m,
      onRatingChange: h,
      wasMinimized: v
    }
  );
}
function xT({ companyTheme: n }) {
  return /* @__PURE__ */ j.jsxs("div", { className: "flex gap-3 max-w-4xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ j.jsx(
      "div",
      {
        className: "flex-shrink-0 w-8 h-8 rounded-full text-gray-600 dark:text-gray-400 flex items-center justify-center",
        style: { backgroundColor: n?.backgroundColor || "#f3f4f6" },
        children: /* @__PURE__ */ j.jsx(Ig, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ j.jsx("div", { className: "flex-1", children: /* @__PURE__ */ j.jsx("div", { className: "inline-block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md", children: /* @__PURE__ */ j.jsxs("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ j.jsx("div", { className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ j.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ j.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.2s" }
        }
      )
    ] }) }) })
  ] });
}
function sg(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
function wT(...n) {
  return (i) => {
    let r = !1;
    const o = n.map((s) => {
      const c = sg(s, i);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const c = o[s];
          typeof c == "function" ? c() : sg(n[s], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function ET(n) {
  const i = /* @__PURE__ */ TT(n), r = pe.forwardRef((o, s) => {
    const { children: c, ...d } = o, p = pe.Children.toArray(c), g = p.find(kT);
    if (g) {
      const m = g.props.children, h = p.map((v) => v === g ? pe.Children.count(m) > 1 ? pe.Children.only(null) : pe.isValidElement(m) ? m.props.children : null : v);
      return /* @__PURE__ */ j.jsx(i, { ...d, ref: s, children: pe.isValidElement(m) ? pe.cloneElement(m, void 0, h) : null });
    }
    return /* @__PURE__ */ j.jsx(i, { ...d, ref: s, children: c });
  });
  return r.displayName = `${n}.Slot`, r;
}
var AT = /* @__PURE__ */ ET("Slot");
// @__NO_SIDE_EFFECTS__
function TT(n) {
  const i = pe.forwardRef((r, o) => {
    const { children: s, ...c } = r;
    if (pe.isValidElement(s)) {
      const d = RT(s), p = zT(c, s.props);
      return s.type !== pe.Fragment && (p.ref = o ? wT(o, d) : d), pe.cloneElement(s, p);
    }
    return pe.Children.count(s) > 1 ? pe.Children.only(null) : null;
  });
  return i.displayName = `${n}.SlotClone`, i;
}
var CT = Symbol("radix.slottable");
function kT(n) {
  return pe.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === CT;
}
function zT(n, i) {
  const r = { ...i };
  for (const o in i) {
    const s = n[o], c = i[o];
    /^on[A-Z]/.test(o) ? s && c ? r[o] = (...p) => {
      const g = c(...p);
      return s(...p), g;
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...c } : o === "className" && (r[o] = [s, c].filter(Boolean).join(" "));
  }
  return { ...n, ...r };
}
function RT(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? n.props.ref : n.props.ref || n.ref);
}
const cg = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, fg = Yg, DT = (n, i) => (r) => {
  var o;
  if (i?.variants == null) return fg(n, r?.class, r?.className);
  const { variants: s, defaultVariants: c } = i, d = Object.keys(s).map((m) => {
    const h = r?.[m], v = c?.[m];
    if (h === null) return null;
    const E = cg(h) || cg(v);
    return s[m][E];
  }), p = r && Object.entries(r).reduce((m, h) => {
    let [v, E] = h;
    return E === void 0 || (m[v] = E), m;
  }, {}), g = i == null || (o = i.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((m, h) => {
    let { class: v, className: E, ...w } = h;
    return Object.entries(w).every((k) => {
      let [D, B] = k;
      return Array.isArray(B) ? B.includes({
        ...c,
        ...p
      }[D]) : {
        ...c,
        ...p
      }[D] === B;
    }) ? [
      ...m,
      v,
      E
    ] : m;
  }, []);
  return fg(n, d, g, r?.class, r?.className);
}, OT = DT(
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
function Hy({
  className: n,
  variant: i,
  size: r,
  asChild: o = !1,
  ...s
}) {
  const c = o ? AT : "button";
  return /* @__PURE__ */ j.jsx(
    c,
    {
      "data-slot": "button",
      className: Ma(OT({ variant: i, size: r, className: n })),
      ...s
    }
  );
}
function _T({ className: n, ...i }) {
  return /* @__PURE__ */ j.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: Ma(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n
      ),
      ...i
    }
  );
}
function NT({ onSendMessage: n, isLoading: i = !1, placeholder: r = "Type your message...", companyTheme: o }) {
  const [s, c] = pe.useState(""), d = (m) => {
    m.preventDefault(), s.trim() && !i && (n(s.trim()), c(""));
  }, p = (m) => {
    m.key === "Enter" && !m.shiftKey && (m.preventDefault(), d(m));
  }, g = o?.primaryColor ? ay(o.primaryColor, 20) : void 0;
  return /* @__PURE__ */ j.jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900", children: /* @__PURE__ */ j.jsxs("div", { className: "max-w-4xl mx-auto p-4", children: [
    /* @__PURE__ */ j.jsxs("form", { onSubmit: d, className: "relative", children: [
      /* @__PURE__ */ j.jsx(
        _T,
        {
          value: s,
          onChange: (m) => c(m.target.value),
          onKeyDown: p,
          placeholder: r,
          disabled: i,
          className: Ma(
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
      /* @__PURE__ */ j.jsxs(
        Hy,
        {
          type: "submit",
          size: "sm",
          disabled: !s.trim() || i,
          className: Ma(
            "absolute right-1 bottom-2 h-8 w-8 p-0",
            "disabled:bg-gray-300 dark:disabled:bg-gray-600",
            "transition-all duration-200 ease-in-out",
            "hover:scale-105 focus:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-offset-2"
          ),
          style: {
            backgroundColor: o?.primaryColor,
            "--hover-bg-color": g
          },
          onMouseEnter: (m) => {
            g && (m.currentTarget.style.backgroundColor = g);
          },
          onMouseLeave: (m) => {
            o?.primaryColor && (m.currentTarget.style.backgroundColor = o.primaryColor);
          },
          onFocus: (m) => {
            g && (m.currentTarget.style.backgroundColor = g);
          },
          onBlur: (m) => {
            o?.primaryColor && (m.currentTarget.style.backgroundColor = o.primaryColor);
          },
          children: [
            i ? /* @__PURE__ */ j.jsx(Gg, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ j.jsx(oS, { className: "h-4 w-4 text-white" }),
            /* @__PURE__ */ j.jsx("span", { className: "sr-only", children: "Send message" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ j.jsx("div", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400 text-center", children: "Press Enter to send, Shift + Enter for new line" })
  ] }) });
}
const MT = {
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
    customLanguageSupport: "🔧 Custom language support"
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
    documentation: "Documentation",
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
    companyWebsiteDescription: "This is a demonstration of how the chat interface would appear when embedded in a professional company website. The chat widget is positioned in the bottom-right corner and can be minimized when not in use.",
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
}, UT = {
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
    customLanguageSupport: "🔧 Soporte de idioma personalizado"
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
    documentation: "Documentación",
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
    companyWebsiteDescription: "Esta es una demostración de cómo aparecería la interfaz de chat cuando se integre en un sitio web profesional de una empresa. El widget de chat está posicionado en la esquina inferior derecha y se puede minimizar cuando no se usa.",
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
}, LT = {
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
    customLanguageSupport: "🔧 Support de langue personnalisé"
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
    documentation: "Documentation",
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
    companyWebsiteDescription: "Description pour le site web de l'entreprise",
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
}, BT = {
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
    customLanguageSupport: "🔧 Benutzerdefinierte Sprachunterstützung"
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
    documentation: "Documentación",
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
    companyWebsiteDescription: "Descripción para el sitio web de la empresa",
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
}, jT = {
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
    customLanguageSupport: "🔧 自定义语言支持"
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
    documentation: "文档",
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
    companyWebsiteDescription: "公司网站描述",
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
}, qT = {
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
    customLanguageSupport: "🔧 カスタム言語サポート"
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
    documentation: "ドキュメント",
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
    companyWebsiteDescription: "会社ウェブサイトの説明",
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
}, HT = {
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
    customLanguageSupport: "🔧 Suporte de idioma personalizado"
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
    documentation: "Documentação",
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
    companyWebsiteDescription: "Descrição para o site da empresa",
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
}, VT = {
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
    customLanguageSupport: "🔧 Supporto lingua personalizzato"
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
    documentation: "Documentación",
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
    companyWebsiteDescription: "Descrizione per il sito web dell'azienda",
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
}, IT = {
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
    customLanguageSupport: "🔧 Пользовательская языковая поддержка"
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
    documentation: "Documentación",
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
    companyWebsiteDescription: "Описание для сайта компании",
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
}, QT = {
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
    customLanguageSupport: "🔧 사용자 정의 언어 지원"
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
    documentation: "Documentación",
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
    companyWebsiteDescription: "Descripción para el sitio web de la empresa",
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
  en: MT,
  es: UT,
  fr: LT,
  de: BT,
  zh: jT,
  ja: qT,
  pt: HT,
  it: VT,
  ru: IT,
  ko: QT
};
function GT(n, i) {
  const r = i.split(".");
  let o = dg[n];
  for (const s of r)
    if (o && typeof o == "object" && s in o)
      o = o[s];
    else {
      o = dg.en;
      for (const c of r)
        if (o && typeof o == "object" && c in o)
          o = o[c];
        else
          return i;
    }
  return typeof o == "string" ? o : i;
}
function FT(n, i) {
  return n.replace(/\{(\w+)\}/g, (r, o) => i[o] ?? "");
}
const Vy = pe.createContext(void 0), qc = {
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
}, YT = () => {
  const n = navigator.language.toLowerCase();
  return n.startsWith("es") ? "es" : n.startsWith("fr") ? "fr" : n.startsWith("de") ? "de" : n.startsWith("zh") ? "zh" : n.startsWith("ja") ? "ja" : n.startsWith("pt") ? "pt" : n.startsWith("it") ? "it" : n.startsWith("ru") ? "ru" : n.startsWith("ko") ? "ko" : "en";
};
function XT({ children: n }) {
  const [i, r] = pe.useState(YT), [o, s] = pe.useState(!1);
  pe.useEffect(() => {
    const g = localStorage.getItem("qurius_language");
    g && Object.keys(qc).includes(g) && r(g);
  }, []);
  const p = {
    currentLanguage: i,
    setLanguage: (g) => {
      s(!0), r(g), localStorage.setItem("qurius_language", g), setTimeout(() => {
        s(!1);
      }, 300);
    },
    t: (g) => GT(i, g),
    isLanguageChanging: o
  };
  return /* @__PURE__ */ j.jsx(Vy.Provider, { value: p, children: n });
}
function Iy() {
  const n = pe.useContext(Vy);
  if (n === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return n;
}
function PT({ className: n = "", variant: i = "dropdown", companyName: r }) {
  const { currentLanguage: o, setLanguage: s, isLanguageChanging: c } = Iy(), [d, p] = pe.useState(!1), g = (m) => {
    s(m), p(!1), r && vn.trackLanguageChange(r, m);
  };
  return i === "buttons" ? /* @__PURE__ */ j.jsx("div", { className: `flex flex-wrap gap-1 ${n}`, children: Object.entries(qc).map(([m, h]) => /* @__PURE__ */ j.jsxs(
    "button",
    {
      onClick: () => g(m),
      disabled: c,
      className: `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${o === m ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"} ${c ? "opacity-50 cursor-not-allowed" : ""}`,
      children: [
        /* @__PURE__ */ j.jsx("span", { className: "mr-2", children: vc[m] }),
        h
      ]
    },
    m
  )) }) : /* @__PURE__ */ j.jsxs("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ j.jsxs(
      "button",
      {
        onClick: () => p(!d),
        disabled: c,
        className: "flex items-center px-1 py-1 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        children: [
          /* @__PURE__ */ j.jsx($v, { className: "h-4 w-4 mr-1" }),
          /* @__PURE__ */ j.jsx("span", { className: "mr-1", children: vc[o] }),
          /* @__PURE__ */ j.jsx(Qg, { className: `h-4 w-4 ml-1 transition-transform ${d ? "rotate-180" : ""}` })
        ]
      }
    ),
    d && /* @__PURE__ */ j.jsx("div", { className: "absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ j.jsx("div", { className: "py-1", children: Object.entries(qc).map(([m, h]) => /* @__PURE__ */ j.jsxs(
      "button",
      {
        onClick: () => g(m),
        className: `w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${o === m ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-300"}`,
        children: [
          /* @__PURE__ */ j.jsx("span", { className: "mr-3", children: vc[m] }),
          h
        ]
      },
      m
    )) }) }),
    d && /* @__PURE__ */ j.jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => p(!1)
      }
    )
  ] });
}
class KT {
  static BACKEND_URL = "https://qurius-ai.onrender.com";
  // Generate theme from primary color
  static generateThemeFromPrimary(i, r, o) {
    return {
      primaryColor: i,
      logoUrl: o,
      backgroundColor: r ? "#1e2939" : "#F3F4F6",
      textColor: r ? "#F9FAFB" : "#1F2937",
      borderColor: r ? "#374151" : "#E5E7EB",
      accentColor: "#10B981"
      // Keep accent consistent
    };
  }
  static async getCompanyTheme(i, r) {
    try {
      const s = (await Ne.get(`${this.BACKEND_URL}/api/companies/${encodeURIComponent(i)}/theme`, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.company, d = s?.theme?.primaryColor || "#3B82F6", p = s?.logo_url || "";
      return this.generateThemeFromPrimary(d, r, p);
    } catch (o) {
      return console.error("Error fetching company theme:", o), this.generateThemeFromPrimary("#3B82F6", r, "");
    }
  }
}
const ZT = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_BACKEND_URL: "https://qurius-ai.onrender.com", VITE_JINA_API_KEY: "demo-jina-key", VITE_OPEN_ROUTER_API_KEY: "demo-openrouter-key", VITE_SUPABASE_ANON_KEY: "demo-key", VITE_SUPABASE_PROJECT_URL: "https://demo.supabase.co", VITE_SUPABASE_SERVICE_ROLE_KEY: "demo-service-key" };
function qn(n, i = "") {
  const r = typeof process < "u" ? process.env?.[n] : void 0;
  return (typeof import.meta < "u" ? ZT?.[n] : void 0) ?? r ?? i;
}
const JT = {
  projectUrl: qn("VITE_SUPABASE_PROJECT_URL"),
  anonKey: qn("VITE_SUPABASE_ANON_KEY"),
  serviceRoleKey: qn("VITE_SUPABASE_SERVICE_ROLE_KEY")
}, WT = {
  apiUrl: qn("VITE_OPEN_ROUTER_URL", "https://openrouter.ai/api/v1"),
  apiKey: qn("VITE_OPEN_ROUTER_API_KEY"),
  sourceUrl: qn("VITE_SOURCE_URL", "http://localhost:8081")
}, $T = {
  apiUrl: qn("VITE_JINA_API_URL", "https://api.jina.ai/v1/embeddings"),
  apiKey: qn("VITE_JINA_API_KEY")
}, Qy = {
  backendUrl: qn("VITE_BACKEND_URL", "http://localhost:3001"),
  ...JT,
  ...WT,
  ...$T
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
        const r = (await Ne.get(`${Qy.backendUrl}/api/translate/api-key`)).data.apiKey;
        return console.log("✅ API key fetched successfully"), this.apiKey = r, r;
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
    const r = await this.getApiKey();
    if (!r)
      return console.warn("Google Translate API key not available, assuming English"), "en";
    try {
      return (await Ne.post(`${pg}/detect?key=${r}`, {
        q: i
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.data.detections[0][0].language;
    } catch (o) {
      return console.error("Error detecting language:", o), "en";
    }
  }
  /**
   * Translate text from source language to target language
   */
  static async translate(i, r, o) {
    if (r === "en")
      return i;
    const s = await this.getApiKey();
    if (!s)
      return console.warn("Google Translate API key not available, using fallback translations"), mg[r][i] || i;
    try {
      return (await Ne.post(`${pg}?key=${s}`, {
        q: i,
        target: eC[r],
        source: o || "en"
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.data.translations[0].translatedText;
    } catch (c) {
      return console.error("Error translating text:", c), mg[r][i] || i;
    }
  }
  /**
   * Translate user input to English for AI processing
   */
  static async translateToEnglish(i) {
    const r = await this.detectLanguage(i);
    return r === "en" ? i : await this.translate(i, "en", r);
  }
  /**
   * Translate AI response to user's language
   */
  static async translateToUserLanguage(i, r) {
    return await this.translate(i, r, "en");
  }
}
class tC {
  BACKEND_URL = Qy.backendUrl;
  // Get FAQ answer using semantic search
  async getFAQAnswer(i, r, o) {
    try {
      const s = await Ne.post(`${this.BACKEND_URL}/api/faqs/search`, {
        companyId: i,
        companyName: r,
        question: o
      });
      if (console.log("FAQ search results:", s.data), Array.isArray(s.data) && s.data.length > 0) {
        const c = s.data[0];
        if (c.source === "limit_reached" || c.limitReached)
          return console.log("⚠️ Limit reached response detected"), {
            question: o,
            answer: c.answer || "Message limit reached for this month. Please upgrade your plan or wait until next month.",
            source: "limit_reached",
            limitReached: !0,
            messagesLeft: c.messagesLeft || 0
          };
        if (c.answer)
          return {
            question: o,
            answer: c.answer,
            source: c.source || "ai",
            faqId: c.faqId,
            confidence: c.confidence,
            fallbackReason: c.fallbackReason,
            limitReached: c.limitReached || !1,
            messagesLeft: c.messagesLeft
          };
      }
      return s.data && s.data.answer ? s.data.source === "limit_reached" || s.data.limitReached ? {
        question: o,
        answer: s.data.answer || "Message limit reached for this month. Please upgrade your plan or wait until next month.",
        source: "limit_reached",
        limitReached: !0,
        messagesLeft: s.data.messagesLeft || 0
      } : {
        question: o,
        answer: s.data.answer,
        source: s.data.source || "ai",
        faqId: s.data.faqId,
        confidence: s.data.confidence,
        fallbackReason: s.data.fallbackReason,
        limitReached: s.data.limitReached || !1,
        messagesLeft: s.data.messagesLeft
      } : null;
    } catch (s) {
      return console.error("Error searching FAQs:", s), null;
    }
  }
  async getFAQs(i) {
    try {
      return (await Ne.get(`${this.BACKEND_URL}/api/companies/${i}/faqs`)).data;
    } catch (r) {
      throw console.error("Error fetching FAQs:", r), r;
    }
  }
  async importFAQs(i, r) {
    try {
      return (await Ne.post(`${this.BACKEND_URL}/api/companies/${i}/faqs`, { faqs: r })).data;
    } catch (o) {
      throw console.error("Error importing FAQs:", o), o;
    }
  }
  async addFAQ(i, r, o) {
    try {
      return (await Ne.post(`${this.BACKEND_URL}/api/companies/${i}/faqs`, {
        faqs: [{ question: r, answer: o }]
      })).data;
    } catch (s) {
      throw console.error("Error adding FAQ:", s), s;
    }
  }
  async updateFAQ(i, r, o) {
    try {
      return (await Ne.put(`${this.BACKEND_URL}/api/faqs/${i}`, {
        question: r,
        answer: o
      })).data;
    } catch (s) {
      throw console.error("Error updating FAQ:", s), s;
    }
  }
  async deleteFAQ(i) {
    try {
      await Ne.delete(`${this.BACKEND_URL}/api/faqs/${i}`);
    } catch (r) {
      throw console.error("Error deleting FAQ:", r), r;
    }
  }
}
const nC = new tC();
function aC({
  defaultTheme: n,
  toggleTheme: i,
  isMinimized: r,
  onToggleMinimize: o,
  isThemeChanging: s,
  companyData: c
}) {
  const d = pe.useRef(null), p = pe.useRef(null), { t: g, currentLanguage: m } = Iy(), [h, v] = pe.useState(null), E = n === "dark", [w, k] = pe.useState(!0), [D, B] = pe.useState(!1), { name: _, id: Z, plan: F } = c || {}, fe = () => FT(g("chat.welcomeWithCompany"), { companyName: _ || "AI" }), [W, U] = pe.useState([]), [re, P] = pe.useState(!1), [de, we] = pe.useState(!1), [le, ne] = pe.useState(!1), [te, ae] = pe.useState(!0), [ie, O] = pe.useState(!1), Y = () => {
    d.current?.scrollIntoView({ behavior: "smooth" });
  }, G = () => {
    if (p.current) {
      const { scrollTop: x, scrollHeight: $, clientHeight: oe } = p.current, ee = $ - x - oe < 10;
      ae(ee), le && !ee && we(!0), ee && we(!1);
    }
  }, Ee = (x) => {
    ne(x), x && we(!1);
  }, b = (x, $) => {
    U((oe) => oe.map(
      (ee, be) => be === x ? { ...ee, liked: $ } : ee
    ));
  };
  pe.useEffect(() => {
    if (!W[0]?.isUser && c) {
      const x = {
        content: fe(),
        isUser: !1,
        liked: null,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      U([x]);
    }
  }, [g, _, c]), pe.useEffect(() => {
    _ ? (k(!0), console.log("🔄 Fetching company theme via service..."), KT.getCompanyTheme(_, E).then((x) => {
      v(x), setTimeout(() => {
        k(!1);
      }, 1e3);
    }).catch((x) => {
      console.error("Failed to load company theme:", x), setTimeout(() => {
        k(!1);
      }, 1e3);
    })) : setTimeout(() => {
      k(!1);
    }, 1e3);
  }, [_, E, c]), pe.useEffect(() => {
    _ && vn.trackWidgetView(_);
  }, [_]), pe.useEffect(() => {
    _ && (r ? vn.trackWidgetClose(_) : vn.trackWidgetOpen(_));
  }, [r, _]), pe.useEffect(() => {
    if (r)
      B(!1);
    else {
      B(!1);
      const x = setTimeout(() => {
        B(!0), setTimeout(() => {
          Y();
        }, 100);
      }, 500);
      return () => clearTimeout(x);
    }
  }, [r]), pe.useEffect(() => {
    if (le && !de) {
      const x = setInterval(() => {
        Y();
      }, 25);
      return () => clearInterval(x);
    }
  }, [le, de]);
  const V = async (x) => {
    console.log("🚀 Starting message processing:", x);
    const $ = {
      content: x,
      isUser: !0,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    P(!0), U((oe) => [...oe, $]), _ && vn.trackMessageSent(_, x);
    try {
      console.log("🔄 Translating user input to English...");
      let oe = x;
      try {
        oe = await hg.translateToEnglish(x);
      } catch (be) {
        console.warn("⚠️ Translation failed, using original input:", be), oe = x;
      }
      console.log("🤖 Getting FAQ answer...");
      const ee = await nC.getFAQAnswer(Z || "", _ || "", oe);
      if (ee) {
        if (ee.source === "limit_reached" || ee.limitReached) {
          console.log("⚠️ Message limit reached, showing limit message");
          const ot = {
            content: ee.answer || `Message limit for ${_} reached for this month. Please contact customer support with any questions.`,
            isUser: !1,
            liked: null,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          };
          U((xt) => [...xt, ot]), O(!1), _ && vn.trackMessageReceived(_, ot.content, "limit_reached");
          return;
        }
        console.log("🔄 Translating response to user language...");
        let be = ee.answer;
        try {
          be = await hg.translateToUserLanguage(ee.answer, m);
        } catch (Pe) {
          console.warn("⚠️ Response translation failed, using original:", Pe), be = ee.answer;
        }
        const Re = {
          content: be,
          isUser: !1,
          liked: null,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        U((Pe) => [...Pe, Re]), O(!1), _ && vn.trackMessageReceived(_, be, ee.source), ee.messagesLeft !== void 0 && console.log(`📊 Messages remaining: ${ee.messagesLeft}`);
      } else
        console.log("⚠️ No response found from server"), U((be) => [
          ...be,
          {
            content: "Sorry, I encountered an error. Please try again.",
            isUser: !1,
            liked: null,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          }
        ]);
    } catch (oe) {
      console.error("❌ Error in handleSendMessage:", oe), console.error("❌ Error details:", {
        message: oe instanceof Error ? oe.message : String(oe),
        stack: oe instanceof Error ? oe.stack : void 0,
        name: oe instanceof Error ? oe.name : "Unknown"
      }), U((ee) => [
        ...ee,
        {
          content: "Sorry, something went wrong. Please try again.",
          isUser: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      console.log("🏁 Finishing message processing"), P(!1);
    }
  }, J = h?.primaryColor ? ay(h.primaryColor, 20) : void 0;
  return r ? /* @__PURE__ */ j.jsx(
    "div",
    {
      className: w ? "animate-spin" : "animate-bounce",
      style: {
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 50,
        maxWidth: "400px",
        maxHeight: "600px"
      },
      children: /* @__PURE__ */ j.jsx(
        "button",
        {
          onClick: o,
          className: "text-white p-4 rounded-full shadow-lg transition-colors",
          style: {
            backgroundColor: h?.primaryColor || "#007bff"
          },
          onMouseEnter: (x) => {
            J && (x.currentTarget.style.backgroundColor = J);
          },
          onMouseLeave: (x) => {
            x.currentTarget.style.backgroundColor = h?.primaryColor || "#007bff";
          },
          children: w ? /* @__PURE__ */ j.jsx("div", { className: "w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ j.jsx(Sh, { className: "h-6 w-6" })
        }
      )
    }
  ) : D ? /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: Ma(
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
        s && /* @__PURE__ */ j.jsx(
          "div",
          {
            className: "absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg",
            style: { backgroundColor: h?.backgroundColor + "CC" },
            children: /* @__PURE__ */ j.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ j.jsx(
                Gg,
                {
                  className: "w-12 h-12 animate-spin",
                  style: { color: h?.primaryColor }
                }
              ),
              /* @__PURE__ */ j.jsx(
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
        /* @__PURE__ */ j.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800", children: [
          /* @__PURE__ */ j.jsxs("div", { className: "flex items-center gap-3", children: [
            h?.logoUrl ? /* @__PURE__ */ j.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", children: /* @__PURE__ */ j.jsx("img", { src: h?.logoUrl, alt: "Company Logo", className: "w-7 h-7" }) }) : (
              // Default logo
              /* @__PURE__ */ j.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", style: { backgroundColor: h?.primaryColor }, children: /* @__PURE__ */ j.jsx(Sh, { className: "w-4 h-4 text-white" }) })
            ),
            /* @__PURE__ */ j.jsxs("div", { children: [
              /* @__PURE__ */ j.jsxs("h3", { className: "font-semibold text-gray-900 dark:text-gray-100 text-sm", children: [
                _,
                " Assistant"
              ] }),
              /* @__PURE__ */ j.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Online now" })
            ] })
          ] }),
          /* @__PURE__ */ j.jsxs("div", { className: "flex justify-end gap-1", children: [
            F === "pro" && /* @__PURE__ */ j.jsx(
              PT,
              {
                variant: "dropdown",
                className: "scale-65",
                companyName: _
              }
            ),
            F !== "free" && /* @__PURE__ */ j.jsx(
              "button",
              {
                onClick: () => {
                  i(), _ && vn.trackThemeChange(_, n);
                },
                disabled: s,
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50",
                children: n === "dark" ? /* @__PURE__ */ j.jsx(sS, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }) : /* @__PURE__ */ j.jsx(lS, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            ),
            /* @__PURE__ */ j.jsx(
              "button",
              {
                onClick: () => {
                  o?.(), O(!0);
                },
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
                children: /* @__PURE__ */ j.jsx(aS, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ j.jsxs(
          "div",
          {
            ref: p,
            className: "flex-1 overflow-y-auto bg-white dark:bg-gray-900",
            onScroll: G,
            children: [
              /* @__PURE__ */ j.jsxs("div", { className: "py-4", children: [
                W.map((x, $) => {
                  const oe = !x.isUser && $ === W.length - 1;
                  return /* @__PURE__ */ j.jsx(
                    ST,
                    {
                      message: x.content,
                      messageIndex: $,
                      liked: x.liked,
                      isUser: x.isUser,
                      timestamp: x.timestamp,
                      onStreamingChange: x.isUser ? void 0 : Ee,
                      skipStreaming: ie && !x.isUser,
                      isLastAiMessage: oe,
                      companyTheme: h || void 0,
                      companyName: _,
                      onRatingChange: (ee) => b($, ee),
                      wasMinimized: ie
                    },
                    `${$}-${x.content.substring(0, 20)}`
                  );
                }),
                re && /* @__PURE__ */ j.jsx(xT, { companyTheme: h })
              ] }),
              /* @__PURE__ */ j.jsx("div", { ref: d })
            ]
          }
        ),
        !te && !le && /* @__PURE__ */ j.jsx("div", { className: "absolute bottom-27 right-4 z-10", children: /* @__PURE__ */ j.jsxs(
          Hy,
          {
            onClick: Y,
            size: "sm",
            className: "h-10 w-10 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
            style: {
              backgroundColor: h?.primaryColor,
              "--hover-bg-color": J
            },
            onMouseEnter: (x) => {
              J && (x.currentTarget.style.backgroundColor = J);
            },
            onMouseLeave: (x) => {
              h?.primaryColor && (x.currentTarget.style.backgroundColor = h.primaryColor);
            },
            onFocus: (x) => {
              J && (x.currentTarget.style.backgroundColor = J);
            },
            onBlur: (x) => {
              h?.primaryColor && (x.currentTarget.style.backgroundColor = h.primaryColor);
            },
            children: [
              /* @__PURE__ */ j.jsx(Qg, { className: "h-4 w-4" }),
              /* @__PURE__ */ j.jsx("span", { className: "sr-only", children: "Scroll to bottom" })
            ]
          }
        ) }),
        /* @__PURE__ */ j.jsx(
          NT,
          {
            onSendMessage: V,
            isLoading: re,
            placeholder: `Ask ${_} anything...`,
            defaultTheme: n,
            companyTheme: h || void 0
          }
        )
      ]
    }
  ) : null;
}
const iC = 400, lC = 1300, Da = {
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
}, Gy = pe.createContext({
  colors: Da.light,
  defaultTheme: "light",
  isDark: !1,
  setColorScheme: () => {
  },
  toggleTheme: () => {
  },
  isThemeChanging: !1
}), rC = ({ children: n, initialTheme: i }) => {
  const r = () => {
    if (i)
      return i;
    if (typeof window < "u") {
      const h = localStorage.getItem("theme");
      return h === "light" || h === "dark" ? h : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }, [o, s] = pe.useState(r() === "dark"), [c, d] = pe.useState(!1), p = (h) => {
    s(h === "dark"), typeof window < "u" && localStorage.setItem("theme", h);
  }, g = () => {
    const h = o ? "light" : "dark";
    d(!0), setTimeout(() => {
      p(h), setTimeout(() => {
        d(!1);
      }, lC);
    }, iC);
  };
  pe.useEffect(() => {
    const h = window.matchMedia("(prefers-color-scheme: dark)"), v = (E) => {
      !localStorage.getItem("theme") && !i && p(E.matches ? "dark" : "light");
    };
    return h.addEventListener("change", v), () => h.removeEventListener("change", v);
  }, [i]), pe.useEffect(() => {
    typeof window < "u" && (o ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), document.body.style.backgroundColor = o ? Da.dark.containerBackground : Da.light.containerBackground, document.body.style.color = o ? Da.dark.text : Da.light.text);
  }, [o]);
  const m = o ? Da.dark : Da.light;
  return /* @__PURE__ */ j.jsx(Gy.Provider, { value: {
    colors: m,
    defaultTheme: o ? "dark" : "light",
    isDark: o,
    setColorScheme: p,
    toggleTheme: g,
    isThemeChanging: c
  }, children: n });
}, oC = () => {
  const n = pe.useContext(Gy);
  if (!n)
    throw new Error("useTheme must be used within a ThemeProvider");
  return n;
};
let mo = null;
const uC = async (n, i, r) => {
  try {
    return console.log("🔑 Validating widget key:", n, "for company with name:", i), (await Ne.get(`${r}/api/validate-key`, {
      params: { key: n, companyName: i }
    })).data;
  } catch (o) {
    const s = o;
    return console.error("Key validation failed:", s.response?.data || s.message), { valid: !1, error: "Validation failed" };
  }
}, sC = async (n, i) => {
  try {
    return console.log("🏢 Fetching company data for ID:", n), (await Ne.get(`${i}/api/companies/${n}`)).data;
  } catch (r) {
    const o = r;
    throw console.error("Failed to fetch company data:", o.response?.data || o.message), new Error("Failed to fetch company data");
  }
}, cC = (n, i) => (console.log("🔍 Verifying plan authenticity:", { scriptPlan: n, companyPlan: i }), n === "free" ? n : n === i ? (console.log("✅ Plan verification successful: plans match"), i) : (console.log("⚠️ Plan mismatch detected: using company plan as source of truth"), console.log("Script plan:", n, "Company plan:", i), i)), fC = async (n) => {
  const i = n.key, r = n.companyName, o = n.companyId, s = n.plan, c = "https://qurius-ai.onrender.com";
  let d = await uC(i, r, c);
  if (!d?.valid)
    return console.error("Widget key validation failed:", d.error), !1;
  try {
    const p = await sC(o, c);
    console.log("✅ Company data fetched successfully:", p);
    const g = cC(s, p.plan);
    return n.companyData = {
      ...p,
      plan: g
      // Use verified plan as single source of truth
    }, console.log("✅ Widget initialization completed successfully"), !0;
  } catch (p) {
    return console.error("❌ Failed to fetch company data:", p), !1;
  }
};
function dC(n, i) {
  mo && mo.unmount(), mo = d1.createRoot(n), mo.render(
    /* @__PURE__ */ j.jsx(ho.StrictMode, { children: /* @__PURE__ */ j.jsx(rC, { initialTheme: i.theme, children: /* @__PURE__ */ j.jsx(XT, { children: /* @__PURE__ */ j.jsx(pC, { config: i }) }) }) })
  );
}
function pC({ config: n }) {
  const { defaultTheme: i, toggleTheme: r, isThemeChanging: o } = oC(), [s, c] = ho.useState(!0), [d, p] = ho.useState(!1);
  if (ho.useEffect(() => {
    fC(n).then(p);
  }, [n]), !d)
    return null;
  const g = () => {
    const m = !s;
    c(m), console.log(m ? "Widget minimized, chat button should be visible" : "Widget expanded, chat button should be hidden");
  };
  return /* @__PURE__ */ j.jsx(
    aC,
    {
      defaultTheme: i,
      toggleTheme: r,
      isMinimized: s,
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
