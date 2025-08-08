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
function n1() {
  if (Zm) return _l;
  Zm = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function r(o, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var m in s)
        m !== "key" && (f[m] = s[m]);
    } else f = s;
    return s = f.ref, {
      $$typeof: n,
      type: o,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return _l.Fragment = i, _l.jsx = r, _l.jsxs = r, _l;
}
var Jm;
function a1() {
  return Jm || (Jm = 1, Ks.exports = n1()), Ks.exports;
}
var q = a1(), Zs = { exports: {} }, Ae = {};
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
function i1() {
  if (Wm) return Ae;
  Wm = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), S = Symbol.iterator;
  function E(y) {
    return y === null || typeof y != "object" ? null : (y = S && y[S] || y["@@iterator"], typeof y == "function" ? y : null);
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
  function U(y, j, X) {
    this.props = y, this.context = j, this.refs = D, this.updater = X || w;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(y, j) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, j, "setState");
  }, U.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function B() {
  }
  B.prototype = U.prototype;
  function W(y, j, X) {
    this.props = y, this.context = j, this.refs = D, this.updater = X || w;
  }
  var Y = W.prototype = new B();
  Y.constructor = W, k(Y, U.prototype), Y.isPureReactComponent = !0;
  var ce = Array.isArray, ee = { H: null, A: null, T: null, S: null, V: null }, L = Object.prototype.hasOwnProperty;
  function ae(y, j, X, x, $, Se) {
    return X = Se.ref, {
      $$typeof: n,
      type: y,
      key: j,
      ref: X !== void 0 ? X : null,
      props: Se
    };
  }
  function Z(y, j) {
    return ae(
      y.type,
      j,
      void 0,
      void 0,
      void 0,
      y.props
    );
  }
  function fe(y) {
    return typeof y == "object" && y !== null && y.$$typeof === n;
  }
  function we(y) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(X) {
      return j[X];
    });
  }
  var ie = /\/+/g;
  function te(y, j) {
    return typeof y == "object" && y !== null && y.key != null ? we("" + y.key) : j.toString(36);
  }
  function re() {
  }
  function P(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(re, re) : (y.status = "pending", y.then(
          function(j) {
            y.status === "pending" && (y.status = "fulfilled", y.value = j);
          },
          function(j) {
            y.status === "pending" && (y.status = "rejected", y.reason = j);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function ne(y, j, X, x, $) {
    var Se = typeof y;
    (Se === "undefined" || Se === "boolean") && (y = null);
    var le = !1;
    if (y === null) le = !0;
    else
      switch (Se) {
        case "bigint":
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case n:
            case i:
              le = !0;
              break;
            case h:
              return le = y._init, ne(
                le(y._payload),
                j,
                X,
                x,
                $
              );
          }
      }
    if (le)
      return $ = $(y), le = x === "" ? "." + te(y, 0) : x, ce($) ? (X = "", le != null && (X = le.replace(ie, "$&/") + "/"), ne($, j, X, "", function(et) {
        return et;
      })) : $ != null && (fe($) && ($ = Z(
        $,
        X + ($.key == null || y && y.key === $.key ? "" : ("" + $.key).replace(
          ie,
          "$&/"
        ) + "/") + le
      )), j.push($)), 1;
    le = 0;
    var ze = x === "" ? "." : x + ":";
    if (ce(y))
      for (var _e = 0; _e < y.length; _e++)
        x = y[_e], Se = ze + te(x, _e), le += ne(
          x,
          j,
          X,
          Se,
          $
        );
    else if (_e = E(y), typeof _e == "function")
      for (y = _e.call(y), _e = 0; !(x = y.next()).done; )
        x = x.value, Se = ze + te(x, _e++), le += ne(
          x,
          j,
          X,
          Se,
          $
        );
    else if (Se === "object") {
      if (typeof y.then == "function")
        return ne(
          P(y),
          j,
          X,
          x,
          $
        );
      throw j = String(y), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return le;
  }
  function O(y, j, X) {
    if (y == null) return y;
    var x = [], $ = 0;
    return ne(y, x, "", "", function(Se) {
      return j.call(X, Se, $++);
    }), x;
  }
  function F(y) {
    if (y._status === -1) {
      var j = y._result;
      j = j(), j.then(
        function(X) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = X);
        },
        function(X) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = X);
        }
      ), y._status === -1 && (y._status = 0, y._result = j);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var Q = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  };
  function be() {
  }
  return Ae.Children = {
    map: O,
    forEach: function(y, j, X) {
      O(
        y,
        function() {
          j.apply(this, arguments);
        },
        X
      );
    },
    count: function(y) {
      var j = 0;
      return O(y, function() {
        j++;
      }), j;
    },
    toArray: function(y) {
      return O(y, function(j) {
        return j;
      }) || [];
    },
    only: function(y) {
      if (!fe(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  }, Ae.Component = U, Ae.Fragment = r, Ae.Profiler = s, Ae.PureComponent = W, Ae.StrictMode = o, Ae.Suspense = g, Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee, Ae.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return ee.H.useMemoCache(y);
    }
  }, Ae.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, Ae.cloneElement = function(y, j, X) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var x = k({}, y.props), $ = y.key, Se = void 0;
    if (j != null)
      for (le in j.ref !== void 0 && (Se = void 0), j.key !== void 0 && ($ = "" + j.key), j)
        !L.call(j, le) || le === "key" || le === "__self" || le === "__source" || le === "ref" && j.ref === void 0 || (x[le] = j[le]);
    var le = arguments.length - 2;
    if (le === 1) x.children = X;
    else if (1 < le) {
      for (var ze = Array(le), _e = 0; _e < le; _e++)
        ze[_e] = arguments[_e + 2];
      x.children = ze;
    }
    return ae(y.type, $, void 0, void 0, Se, x);
  }, Ae.createContext = function(y) {
    return y = {
      $$typeof: d,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: f,
      _context: y
    }, y;
  }, Ae.createElement = function(y, j, X) {
    var x, $ = {}, Se = null;
    if (j != null)
      for (x in j.key !== void 0 && (Se = "" + j.key), j)
        L.call(j, x) && x !== "key" && x !== "__self" && x !== "__source" && ($[x] = j[x]);
    var le = arguments.length - 2;
    if (le === 1) $.children = X;
    else if (1 < le) {
      for (var ze = Array(le), _e = 0; _e < le; _e++)
        ze[_e] = arguments[_e + 2];
      $.children = ze;
    }
    if (y && y.defaultProps)
      for (x in le = y.defaultProps, le)
        $[x] === void 0 && ($[x] = le[x]);
    return ae(y, Se, void 0, void 0, null, $);
  }, Ae.createRef = function() {
    return { current: null };
  }, Ae.forwardRef = function(y) {
    return { $$typeof: m, render: y };
  }, Ae.isValidElement = fe, Ae.lazy = function(y) {
    return {
      $$typeof: h,
      _payload: { _status: -1, _result: y },
      _init: F
    };
  }, Ae.memo = function(y, j) {
    return {
      $$typeof: p,
      type: y,
      compare: j === void 0 ? null : j
    };
  }, Ae.startTransition = function(y) {
    var j = ee.T, X = {};
    ee.T = X;
    try {
      var x = y(), $ = ee.S;
      $ !== null && $(X, x), typeof x == "object" && x !== null && typeof x.then == "function" && x.then(be, Q);
    } catch (Se) {
      Q(Se);
    } finally {
      ee.T = j;
    }
  }, Ae.unstable_useCacheRefresh = function() {
    return ee.H.useCacheRefresh();
  }, Ae.use = function(y) {
    return ee.H.use(y);
  }, Ae.useActionState = function(y, j, X) {
    return ee.H.useActionState(y, j, X);
  }, Ae.useCallback = function(y, j) {
    return ee.H.useCallback(y, j);
  }, Ae.useContext = function(y) {
    return ee.H.useContext(y);
  }, Ae.useDebugValue = function() {
  }, Ae.useDeferredValue = function(y, j) {
    return ee.H.useDeferredValue(y, j);
  }, Ae.useEffect = function(y, j, X) {
    var x = ee.H;
    if (typeof X == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return x.useEffect(y, j);
  }, Ae.useId = function() {
    return ee.H.useId();
  }, Ae.useImperativeHandle = function(y, j, X) {
    return ee.H.useImperativeHandle(y, j, X);
  }, Ae.useInsertionEffect = function(y, j) {
    return ee.H.useInsertionEffect(y, j);
  }, Ae.useLayoutEffect = function(y, j) {
    return ee.H.useLayoutEffect(y, j);
  }, Ae.useMemo = function(y, j) {
    return ee.H.useMemo(y, j);
  }, Ae.useOptimistic = function(y, j) {
    return ee.H.useOptimistic(y, j);
  }, Ae.useReducer = function(y, j, X) {
    return ee.H.useReducer(y, j, X);
  }, Ae.useRef = function(y) {
    return ee.H.useRef(y);
  }, Ae.useState = function(y) {
    return ee.H.useState(y);
  }, Ae.useSyncExternalStore = function(y, j, X) {
    return ee.H.useSyncExternalStore(
      y,
      j,
      X
    );
  }, Ae.useTransition = function() {
    return ee.H.useTransition();
  }, Ae.version = "19.1.0", Ae;
}
var $m;
function Vc() {
  return $m || ($m = 1, Zs.exports = i1()), Zs.exports;
}
var de = Vc();
const ho = /* @__PURE__ */ Hc(de);
var Js = { exports: {} }, Ml = {}, Ws = { exports: {} }, $s = {};
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
function l1() {
  return eh || (eh = 1, function(n) {
    function i(O, F) {
      var Q = O.length;
      O.push(F);
      e: for (; 0 < Q; ) {
        var be = Q - 1 >>> 1, y = O[be];
        if (0 < s(y, F))
          O[be] = F, O[Q] = y, Q = be;
        else break e;
      }
    }
    function r(O) {
      return O.length === 0 ? null : O[0];
    }
    function o(O) {
      if (O.length === 0) return null;
      var F = O[0], Q = O.pop();
      if (Q !== F) {
        O[0] = Q;
        e: for (var be = 0, y = O.length, j = y >>> 1; be < j; ) {
          var X = 2 * (be + 1) - 1, x = O[X], $ = X + 1, Se = O[$];
          if (0 > s(x, Q))
            $ < y && 0 > s(Se, x) ? (O[be] = Se, O[$] = Q, be = $) : (O[be] = x, O[X] = Q, be = X);
          else if ($ < y && 0 > s(Se, Q))
            O[be] = Se, O[$] = Q, be = $;
          else break e;
        }
      }
      return F;
    }
    function s(O, F) {
      var Q = O.sortIndex - F.sortIndex;
      return Q !== 0 ? Q : O.id - F.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, m = d.now();
      n.unstable_now = function() {
        return d.now() - m;
      };
    }
    var g = [], p = [], h = 1, S = null, E = 3, w = !1, k = !1, D = !1, U = !1, B = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, Y = typeof setImmediate < "u" ? setImmediate : null;
    function ce(O) {
      for (var F = r(p); F !== null; ) {
        if (F.callback === null) o(p);
        else if (F.startTime <= O)
          o(p), F.sortIndex = F.expirationTime, i(g, F);
        else break;
        F = r(p);
      }
    }
    function ee(O) {
      if (D = !1, ce(O), !k)
        if (r(g) !== null)
          k = !0, L || (L = !0, te());
        else {
          var F = r(p);
          F !== null && ne(ee, F.startTime - O);
        }
    }
    var L = !1, ae = -1, Z = 5, fe = -1;
    function we() {
      return U ? !0 : !(n.unstable_now() - fe < Z);
    }
    function ie() {
      if (U = !1, L) {
        var O = n.unstable_now();
        fe = O;
        var F = !0;
        try {
          e: {
            k = !1, D && (D = !1, W(ae), ae = -1), w = !0;
            var Q = E;
            try {
              t: {
                for (ce(O), S = r(g); S !== null && !(S.expirationTime > O && we()); ) {
                  var be = S.callback;
                  if (typeof be == "function") {
                    S.callback = null, E = S.priorityLevel;
                    var y = be(
                      S.expirationTime <= O
                    );
                    if (O = n.unstable_now(), typeof y == "function") {
                      S.callback = y, ce(O), F = !0;
                      break t;
                    }
                    S === r(g) && o(g), ce(O);
                  } else o(g);
                  S = r(g);
                }
                if (S !== null) F = !0;
                else {
                  var j = r(p);
                  j !== null && ne(
                    ee,
                    j.startTime - O
                  ), F = !1;
                }
              }
              break e;
            } finally {
              S = null, E = Q, w = !1;
            }
            F = void 0;
          }
        } finally {
          F ? te() : L = !1;
        }
      }
    }
    var te;
    if (typeof Y == "function")
      te = function() {
        Y(ie);
      };
    else if (typeof MessageChannel < "u") {
      var re = new MessageChannel(), P = re.port2;
      re.port1.onmessage = ie, te = function() {
        P.postMessage(null);
      };
    } else
      te = function() {
        B(ie, 0);
      };
    function ne(O, F) {
      ae = B(function() {
        O(n.unstable_now());
      }, F);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, n.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Z = 0 < O ? Math.floor(1e3 / O) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, n.unstable_next = function(O) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = E;
      }
      var Q = E;
      E = F;
      try {
        return O();
      } finally {
        E = Q;
      }
    }, n.unstable_requestPaint = function() {
      U = !0;
    }, n.unstable_runWithPriority = function(O, F) {
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
      var Q = E;
      E = O;
      try {
        return F();
      } finally {
        E = Q;
      }
    }, n.unstable_scheduleCallback = function(O, F, Q) {
      var be = n.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? be + Q : be) : Q = be, O) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = Q + y, O = {
        id: h++,
        callback: F,
        priorityLevel: O,
        startTime: Q,
        expirationTime: y,
        sortIndex: -1
      }, Q > be ? (O.sortIndex = Q, i(p, O), r(g) === null && O === r(p) && (D ? (W(ae), ae = -1) : D = !0, ne(ee, Q - be))) : (O.sortIndex = y, i(g, O), k || w || (k = !0, L || (L = !0, te()))), O;
    }, n.unstable_shouldYield = we, n.unstable_wrapCallback = function(O) {
      var F = E;
      return function() {
        var Q = E;
        E = F;
        try {
          return O.apply(this, arguments);
        } finally {
          E = Q;
        }
      };
    };
  }($s)), $s;
}
var th;
function r1() {
  return th || (th = 1, Ws.exports = l1()), Ws.exports;
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
var nh;
function o1() {
  if (nh) return yt;
  nh = 1;
  var n = Vc();
  function i(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var h = 2; h < arguments.length; h++)
        p += "&args[]=" + encodeURIComponent(arguments[h]);
    }
    return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function f(g, p, h) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: S == null ? null : "" + S,
      children: g,
      containerInfo: p,
      implementation: h
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, p) {
    if (g === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, yt.createPortal = function(g, p) {
    var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(i(299));
    return f(g, p, null, h);
  }, yt.flushSync = function(g) {
    var p = d.T, h = o.p;
    try {
      if (d.T = null, o.p = 2, g) return g();
    } finally {
      d.T = p, o.p = h, o.d.f();
    }
  }, yt.preconnect = function(g, p) {
    typeof g == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(g, p));
  }, yt.prefetchDNS = function(g) {
    typeof g == "string" && o.d.D(g);
  }, yt.preinit = function(g, p) {
    if (typeof g == "string" && p && typeof p.as == "string") {
      var h = p.as, S = m(h, p.crossOrigin), E = typeof p.integrity == "string" ? p.integrity : void 0, w = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      h === "style" ? o.d.S(
        g,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: S,
          integrity: E,
          fetchPriority: w
        }
      ) : h === "script" && o.d.X(g, {
        crossOrigin: S,
        integrity: E,
        fetchPriority: w,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, yt.preinitModule = function(g, p) {
    if (typeof g == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var h = m(
            p.as,
            p.crossOrigin
          );
          o.d.M(g, {
            crossOrigin: h,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && o.d.M(g);
  }, yt.preload = function(g, p) {
    if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var h = p.as, S = m(h, p.crossOrigin);
      o.d.L(g, h, {
        crossOrigin: S,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, yt.preloadModule = function(g, p) {
    if (typeof g == "string")
      if (p) {
        var h = m(p.as, p.crossOrigin);
        o.d.m(g, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: h,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else o.d.m(g);
  }, yt.requestFormReset = function(g) {
    o.d.r(g);
  }, yt.unstable_batchedUpdates = function(g, p) {
    return g(p);
  }, yt.useFormState = function(g, p, h) {
    return d.H.useFormState(g, p, h);
  }, yt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, yt.version = "19.1.0", yt;
}
var ah;
function u1() {
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
  return n(), ec.exports = o1(), ec.exports;
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
function s1() {
  if (ih) return Ml;
  ih = 1;
  var n = r1(), i = Vc(), r = u1();
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
  function f(e) {
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
  function m(e) {
    if (f(e) !== e)
      throw Error(o(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (l = u.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === a) return m(u), e;
          if (c === l) return m(u), t;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) a = u, l = c;
      else {
        for (var b = !1, v = u.child; v; ) {
          if (v === a) {
            b = !0, a = u, l = c;
            break;
          }
          if (v === l) {
            b = !0, l = u, a = c;
            break;
          }
          v = v.sibling;
        }
        if (!b) {
          for (v = c.child; v; ) {
            if (v === a) {
              b = !0, a = c, l = u;
              break;
            }
            if (v === l) {
              b = !0, l = c, a = u;
              break;
            }
            v = v.sibling;
          }
          if (!b) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = p(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var h = Object.assign, S = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), W = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), we = Symbol.for("react.memo_cache_sentinel"), ie = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = ie && e[ie] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var re = Symbol.for("react.client.reference");
  function P(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === re ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case k:
        return "Fragment";
      case U:
        return "Profiler";
      case D:
        return "StrictMode";
      case ee:
        return "Suspense";
      case L:
        return "SuspenseList";
      case fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case w:
          return "Portal";
        case Y:
          return (e.displayName || "Context") + ".Provider";
        case W:
          return (e._context.displayName || "Context") + ".Consumer";
        case ce:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ae:
          return t = e.displayName || null, t !== null ? t : P(e.type) || "Memo";
        case Z:
          t = e._payload, e = e._init;
          try {
            return P(e(t));
          } catch {
          }
      }
    return null;
  }
  var ne = Array.isArray, O = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, be = [], y = -1;
  function j(e) {
    return { current: e };
  }
  function X(e) {
    0 > y || (e.current = be[y], be[y] = null, y--);
  }
  function x(e, t) {
    y++, be[y] = e.current, e.current = t;
  }
  var $ = j(null), Se = j(null), le = j(null), ze = j(null);
  function _e(e, t) {
    switch (x(le, t), x(Se, e), x($, null), t.nodeType) {
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
    X($), x($, e);
  }
  function et() {
    X($), X(Se), X(le);
  }
  function St(e) {
    e.memoizedState !== null && x(ze, e);
    var t = $.current, a = Tm(t, e.type);
    t !== a && (x(Se, e), x($, a));
  }
  function Nt(e) {
    Se.current === e && (X($), X(Se)), ze.current === e && (X(ze), kl._currentValue = Q);
  }
  var fn = Object.prototype.hasOwnProperty, Mi = n.unstable_scheduleCallback, Ni = n.unstable_cancelCallback, Kl = n.unstable_shouldYield, Zl = n.unstable_requestPaint, Ut = n.unstable_now, No = n.unstable_getCurrentPriorityLevel, Ui = n.unstable_ImmediatePriority, Li = n.unstable_UserBlockingPriority, La = n.unstable_NormalPriority, Uo = n.unstable_LowPriority, Jl = n.unstable_IdlePriority, Lo = n.log, Bo = n.unstable_setDisableYieldValue, H = null, K = null;
  function me(e) {
    if (typeof Lo == "function" && Bo(e), K && typeof K.setStrictMode == "function")
      try {
        K.setStrictMode(H, e);
      } catch {
      }
  }
  var ye = Math.clz32 ? Math.clz32 : wn, je = Math.log, Lt = Math.LN2;
  function wn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (je(e) / Lt | 0) | 0;
  }
  var wt = 256, dn = 4194304;
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
  function ot(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, c = e.suspendedLanes, b = e.pingedLanes;
    e = e.warmLanes;
    var v = l & 134217727;
    return v !== 0 ? (l = v & ~c, l !== 0 ? u = Bt(l) : (b &= v, b !== 0 ? u = Bt(b) : a || (a = v & ~e, a !== 0 && (u = Bt(a))))) : (v = l & ~c, v !== 0 ? u = Bt(v) : b !== 0 ? u = Bt(b) : a || (a = l & ~e, a !== 0 && (u = Bt(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & c) === 0 && (c = u & -u, a = t & -t, c >= a || c === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function Xt(e, t) {
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
  function of() {
    var e = wt;
    return wt <<= 1, (wt & 4194048) === 0 && (wt = 256), e;
  }
  function uf() {
    var e = dn;
    return dn <<= 1, (dn & 62914560) === 0 && (dn = 4194304), e;
  }
  function jo(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Bi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Gy(e, t, a, l, u, c) {
    var b = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var v = e.entanglements, A = e.expirationTimes, R = e.hiddenUpdates;
    for (a = b & ~a; 0 < a; ) {
      var V = 31 - ye(a), G = 1 << V;
      v[V] = 0, A[V] = -1;
      var _ = R[V];
      if (_ !== null)
        for (R[V] = null, V = 0; V < _.length; V++) {
          var M = _[V];
          M !== null && (M.lane &= -536870913);
        }
      a &= ~G;
    }
    l !== 0 && sf(e, l, 0), c !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(b & ~t));
  }
  function sf(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - ye(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function cf(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - ye(a), u = 1 << l;
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
    var e = F.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Gm(e.type));
  }
  function Yy(e, t) {
    var a = F.p;
    try {
      return F.p = e, t();
    } finally {
      F.p = a;
    }
  }
  var Vn = Math.random().toString(36).slice(2), ht = "__reactFiber$" + Vn, Et = "__reactProps$" + Vn, Ba = "__reactContainer$" + Vn, Vo = "__reactEvents$" + Vn, Fy = "__reactListeners$" + Vn, Xy = "__reactHandles$" + Vn, df = "__reactResources$" + Vn, ji = "__reactMarker$" + Vn;
  function Io(e) {
    delete e[ht], delete e[Et], delete e[Vo], delete e[Fy], delete e[Xy];
  }
  function ja(e) {
    var t = e[ht];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ba] || a[ht]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Rm(e); e !== null; ) {
            if (a = e[ht]) return a;
            e = Rm(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function qa(e) {
    if (e = e[ht] || e[Ba]) {
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
  function ut(e) {
    e[ji] = !0;
  }
  var pf = /* @__PURE__ */ new Set(), mf = {};
  function pa(e, t) {
    Va(e, t), Va(e + "Capture", t);
  }
  function Va(e, t) {
    for (mf[e] = t, e = 0; e < t.length; e++)
      pf.add(t[e]);
  }
  var Py = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), hf = {}, gf = {};
  function Ky(e) {
    return fn.call(gf, e) ? !0 : fn.call(hf, e) ? !1 : Py.test(e) ? gf[e] = !0 : (hf[e] = !0, !1);
  }
  function Wl(e, t, a) {
    if (Ky(t))
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
  function Yo(e, t) {
    if (!e || Go) return "";
    Go = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var G = function() {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (M) {
                  var _ = M;
                }
                Reflect.construct(e, [], G);
              } else {
                try {
                  G.call();
                } catch (M) {
                  _ = M;
                }
                e.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                _ = M;
              }
              (G = e()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (M) {
            if (M && _ && typeof M.stack == "string")
              return [M.stack, _.stack];
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
      var c = l.DetermineComponentFrameRoot(), b = c[0], v = c[1];
      if (b && v) {
        var A = b.split(`
`), R = v.split(`
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
                  var V = `
` + A[l].replace(" at new ", " at ");
                  return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V;
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
  function Zy(e) {
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
        return Yo(e.type, !1);
      case 11:
        return Yo(e.type.render, !1);
      case 1:
        return Yo(e.type, !0);
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
        t += Zy(e), e = e.return;
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
  function Jy(e) {
    var t = vf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, c = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(b) {
          l = "" + b, c.call(this, b);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(b) {
          l = "" + b;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function er(e) {
    e._valueTracker || (e._valueTracker = Jy(e));
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
  var Wy = /[\n"\\]/g;
  function Kt(e) {
    return e.replace(
      Wy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fo(e, t, a, l, u, c, b, v) {
    e.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.type = b : e.removeAttribute("type"), t != null ? b === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Pt(t)) : e.value !== "" + Pt(t) && (e.value = "" + Pt(t)) : b !== "submit" && b !== "reset" || e.removeAttribute("value"), t != null ? Xo(e, b, Pt(t)) : a != null ? Xo(e, b, Pt(a)) : l != null && e.removeAttribute("value"), u == null && c != null && (e.defaultChecked = !!c), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + Pt(v) : e.removeAttribute("name");
  }
  function xf(e, t, a, l, u, c, b, v) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || t != null))
        return;
      a = a != null ? "" + Pt(a) : "", t = t != null ? "" + Pt(t) : a, v || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = v ? e.checked : !!l, e.defaultChecked = !!l, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.name = b);
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
        if (ne(l)) {
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
  var $y = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Af(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || $y.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
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
      for (var c in t)
        t.hasOwnProperty(c) && Af(e, c, t[c]);
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
  var eb = /* @__PURE__ */ new Map([
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
  ]), tb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function nr(e) {
    return tb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Ko = null;
  function Zo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ya = null, Fa = null;
  function Cf(e) {
    var t = qa(e);
    if (t && (e = t.stateNode)) {
      var a = e[Et] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Fo(
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
                var u = l[Et] || null;
                if (!u) throw Error(o(90));
                Fo(
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
      if (Jo = !1, (Ya !== null || Fa !== null) && (Vr(), Ya && (t = Ya, e = Fa, Fa = Ya = null, Cf(t), e)))
        for (t = 0; t < e.length; t++) Cf(e[t]);
    }
  }
  function Hi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Et] || null;
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
  var In = null, $o = null, ar = null;
  function zf() {
    if (ar) return ar;
    var e, t = $o, a = t.length, l, u = "value" in In ? In.value : In.textContent, c = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++) ;
    var b = a - e;
    for (l = 1; l <= b && t[a - l] === u[c - l]; l++) ;
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
  function At(e) {
    function t(a, l, u, c, b) {
      this._reactName = a, this._targetInst = u, this.type = l, this.nativeEvent = c, this.target = b, this.currentTarget = null;
      for (var v in e)
        e.hasOwnProperty(v) && (a = e[v], this[v] = a ? a(c) : c[v]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? lr : Rf, this.isPropagationStopped = Rf, this;
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
  var ma = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, rr = At(ma), Ii = h({}, ma, { view: 0, detail: 0 }), nb = At(Ii), eu, tu, Qi, or = h({}, Ii, {
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
  }), Df = At(or), ab = h({}, or, { dataTransfer: 0 }), ib = At(ab), lb = h({}, Ii, { relatedTarget: 0 }), nu = At(lb), rb = h({}, ma, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ob = At(rb), ub = h({}, ma, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), sb = At(ub), cb = h({}, ma, { data: 0 }), Of = At(cb), fb = {
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
  }, db = {
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
  }, pb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function mb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = pb[e]) ? !!t[e] : !1;
  }
  function au() {
    return mb;
  }
  var hb = h({}, Ii, {
    key: function(e) {
      if (e.key) {
        var t = fb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? db[e.keyCode] || "Unidentified" : "";
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
  }), gb = At(hb), yb = h({}, or, {
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
  }), _f = At(yb), bb = h({}, Ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au
  }), vb = At(bb), Sb = h({}, ma, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xb = At(Sb), wb = h({}, or, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Eb = At(wb), Ab = h({}, ma, {
    newState: 0,
    oldState: 0
  }), Tb = At(Ab), Cb = [9, 13, 27, 32], iu = An && "CompositionEvent" in window, Gi = null;
  An && "documentMode" in document && (Gi = document.documentMode);
  var kb = An && "TextEvent" in window && !Gi, Mf = An && (!iu || Gi && 8 < Gi && 11 >= Gi), Nf = " ", Uf = !1;
  function Lf(e, t) {
    switch (e) {
      case "keyup":
        return Cb.indexOf(t.keyCode) !== -1;
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
  function zb(e, t) {
    switch (e) {
      case "compositionend":
        return Bf(t);
      case "keypress":
        return t.which !== 32 ? null : (Uf = !0, Nf);
      case "textInput":
        return e = t.data, e === Nf && Uf ? null : e;
      default:
        return null;
    }
  }
  function Rb(e, t) {
    if (Xa)
      return e === "compositionend" || !iu && Lf(e, t) ? (e = zf(), ar = $o = In = null, Xa = !1, e) : null;
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
        return Mf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Db = {
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
    return t === "input" ? !!Db[e.type] : t === "textarea";
  }
  function qf(e, t, a, l) {
    Ya ? Fa ? Fa.push(l) : Fa = [l] : Ya = l, t = Xr(t, "onChange"), 0 < t.length && (a = new rr(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Yi = null, Fi = null;
  function Ob(e) {
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
    Yi && (Yi.detachEvent("onpropertychange", Gf), Fi = Yi = null);
  }
  function Gf(e) {
    if (e.propertyName === "value" && ur(Fi)) {
      var t = [];
      qf(
        t,
        Fi,
        e,
        Zo(e)
      ), kf(Ob, t);
    }
  }
  function _b(e, t, a) {
    e === "focusin" ? (Qf(), Yi = t, Fi = a, Yi.attachEvent("onpropertychange", Gf)) : e === "focusout" && Qf();
  }
  function Mb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ur(Fi);
  }
  function Nb(e, t) {
    if (e === "click") return ur(t);
  }
  function Ub(e, t) {
    if (e === "input" || e === "change")
      return ur(t);
  }
  function Lb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var jt = typeof Object.is == "function" ? Object.is : Lb;
  function Xi(e, t) {
    if (jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var u = a[l];
      if (!fn.call(t, u) || !jt(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function Yf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ff(e, t) {
    var a = Yf(e);
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
      a = Yf(a);
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
  var Bb = An && "documentMode" in document && 11 >= document.documentMode, Pa = null, uu = null, Pi = null, su = !1;
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
  function ha(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Ka = {
    animationend: ha("Animation", "AnimationEnd"),
    animationiteration: ha("Animation", "AnimationIteration"),
    animationstart: ha("Animation", "AnimationStart"),
    transitionrun: ha("Transition", "TransitionRun"),
    transitionstart: ha("Transition", "TransitionStart"),
    transitioncancel: ha("Transition", "TransitionCancel"),
    transitionend: ha("Transition", "TransitionEnd")
  }, cu = {}, Zf = {};
  An && (Zf = document.createElement("div").style, "AnimationEvent" in window || (delete Ka.animationend.animation, delete Ka.animationiteration.animation, delete Ka.animationstart.animation), "TransitionEvent" in window || delete Ka.transitionend.transition);
  function ga(e) {
    if (cu[e]) return cu[e];
    if (!Ka[e]) return e;
    var t = Ka[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Zf)
        return cu[e] = t[a];
    return e;
  }
  var Jf = ga("animationend"), Wf = ga("animationiteration"), $f = ga("animationstart"), jb = ga("transitionrun"), qb = ga("transitionstart"), Hb = ga("transitioncancel"), ed = ga("transitionend"), td = /* @__PURE__ */ new Map(), fu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  fu.push("scrollEnd");
  function on(e, t) {
    td.set(e, t), pa(t, [e]);
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
      var c = Jt[t];
      if (Jt[t++] = null, l !== null && u !== null) {
        var b = l.pending;
        b === null ? u.next = u : (u.next = b.next, b.next = u), l.pending = u;
      }
      c !== 0 && ad(a, u, c);
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
    for (var u = !1, c = e.return; c !== null; )
      c.childLanes |= a, l = c.alternate, l !== null && (l.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (u = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, u && t !== null && (u = 31 - ye(a), e = c.hiddenUpdates, l = e[u], l === null ? e[u] = [t] : l.push(t), t.lane = a | 536870912), c) : null;
  }
  function fr(e) {
    if (50 < vl)
      throw vl = 0, vs = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Wa = {};
  function Vb(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qt(e, t, a, l) {
    return new Vb(e, t, a, l);
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
  function dr(e, t, a, l, u, c) {
    var b = 0;
    if (l = e, typeof e == "function") mu(e) && (b = 1);
    else if (typeof e == "string")
      b = Q0(
        e,
        a,
        $.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case fe:
          return e = qt(31, a, t, u), e.elementType = fe, e.lanes = c, e;
        case k:
          return ya(a.children, u, c, t);
        case D:
          b = 8, u |= 24;
          break;
        case U:
          return e = qt(12, a, t, u | 2), e.elementType = U, e.lanes = c, e;
        case ee:
          return e = qt(13, a, t, u), e.elementType = ee, e.lanes = c, e;
        case L:
          return e = qt(19, a, t, u), e.elementType = L, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case B:
              case Y:
                b = 10;
                break e;
              case W:
                b = 9;
                break e;
              case ce:
                b = 11;
                break e;
              case ae:
                b = 14;
                break e;
              case Z:
                b = 16, l = null;
                break e;
            }
          b = 29, a = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = qt(b, a, t, u), t.elementType = e, t.type = l, t.lanes = c, t;
  }
  function ya(e, t, a, l) {
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
  var $a = [], ei = 0, pr = null, mr = 0, Wt = [], $t = 0, ba = null, Cn = 1, kn = "";
  function va(e, t) {
    $a[ei++] = mr, $a[ei++] = pr, pr = e, mr = t;
  }
  function ld(e, t, a) {
    Wt[$t++] = Cn, Wt[$t++] = kn, Wt[$t++] = ba, ba = e;
    var l = Cn;
    e = kn;
    var u = 32 - ye(l) - 1;
    l &= ~(1 << u), a += 1;
    var c = 32 - ye(t) + u;
    if (30 < c) {
      var b = u - u % 5;
      c = (l & (1 << b) - 1).toString(32), l >>= b, u -= b, Cn = 1 << 32 - ye(t) + u | a << u | l, kn = c + e;
    } else
      Cn = 1 << c | a << u | l, kn = e;
  }
  function yu(e) {
    e.return !== null && (va(e, 1), ld(e, 1, 0));
  }
  function bu(e) {
    for (; e === pr; )
      pr = $a[--ei], $a[ei] = null, mr = $a[--ei], $a[ei] = null;
    for (; e === ba; )
      ba = Wt[--$t], Wt[$t] = null, kn = Wt[--$t], Wt[$t] = null, Cn = Wt[--$t], Wt[$t] = null;
  }
  var xt = null, Ze = null, Le = !1, Sa = null, pn = !1, vu = Error(o(519));
  function xa(e) {
    var t = Error(o(418, ""));
    throw Ji(Zt(t, e)), vu;
  }
  function rd(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[ht] = e, t[Et] = l, a) {
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
        for (a = 0; a < xl.length; a++)
          Oe(xl[a], t);
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
        Oe("invalid", t);
        break;
      case "textarea":
        Oe("invalid", t), Ef(t, l.value, l.defaultValue, l.children), er(t);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Em(t.textContent, a) ? (l.popover != null && (Oe("beforetoggle", t), Oe("toggle", t)), l.onScroll != null && Oe("scroll", t), l.onScrollEnd != null && Oe("scrollend", t), l.onClick != null && (t.onclick = Pr), t = !0) : t = !1, t || xa(e);
  }
  function od(e) {
    for (xt = e.return; xt; )
      switch (xt.tag) {
        case 5:
        case 13:
          pn = !1;
          return;
        case 27:
        case 3:
          pn = !0;
          return;
        default:
          xt = xt.return;
      }
  }
  function Ki(e) {
    if (e !== xt) return !1;
    if (!Le) return od(e), Le = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Us(e.type, e.memoizedProps)), a = !a), a && Ze && xa(e), od(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                Ze = sn(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else
      t === 27 ? (t = Ze, ia(e.type) ? (e = qs, qs = null, Ze = e) : Ze = t) : Ze = xt ? sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zi() {
    Ze = xt = null, Le = !1;
  }
  function ud() {
    var e = Sa;
    return e !== null && (kt === null ? kt = e : kt.push.apply(
      kt,
      e
    ), Sa = null), e;
  }
  function Ji(e) {
    Sa === null ? Sa = [e] : Sa.push(e);
  }
  var Su = j(null), wa = null, zn = null;
  function Qn(e, t, a) {
    x(Su, t._currentValue), t._currentValue = a;
  }
  function Rn(e) {
    e._currentValue = Su.current, X(Su);
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
      var c = u.dependencies;
      if (c !== null) {
        var b = u.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var v = c;
          c = u;
          for (var A = 0; A < t.length; A++)
            if (v.context === t[A]) {
              c.lanes |= a, v = c.alternate, v !== null && (v.lanes |= a), xu(
                c.return,
                a,
                e
              ), l || (b = null);
              break e;
            }
          c = v.next;
        }
      } else if (u.tag === 18) {
        if (b = u.return, b === null) throw Error(o(341));
        b.lanes |= a, c = b.alternate, c !== null && (c.lanes |= a), xu(b, a, e), b = null;
      } else b = u.child;
      if (b !== null) b.return = u;
      else
        for (b = u; b !== null; ) {
          if (b === e) {
            b = null;
            break;
          }
          if (u = b.sibling, u !== null) {
            u.return = b.return, b = u;
            break;
          }
          b = b.return;
        }
      u = b;
    }
  }
  function Wi(e, t, a, l) {
    e = null;
    for (var u = t, c = !1; u !== null; ) {
      if (!c) {
        if ((u.flags & 524288) !== 0) c = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var b = u.alternate;
        if (b === null) throw Error(o(387));
        if (b = b.memoizedProps, b !== null) {
          var v = u.type;
          jt(u.pendingProps.value, b.value) || (e !== null ? e.push(v) : e = [v]);
        }
      } else if (u === ze.current) {
        if (b = u.alternate, b === null) throw Error(o(387));
        b.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(kl) : e = [kl]);
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
  function Ea(e) {
    wa = e, zn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function gt(e) {
    return sd(wa, e);
  }
  function gr(e, t) {
    return wa === null && Ea(e), sd(e, t);
  }
  function sd(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, zn === null) {
      if (e === null) throw Error(o(308));
      zn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else zn = zn.next = t;
    return a;
  }
  var Ib = typeof AbortController < "u" ? AbortController : function() {
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
  }, Qb = n.unstable_scheduleCallback, Gb = n.unstable_NormalPriority, it = {
    $$typeof: Y,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Eu() {
    return {
      controller: new Ib(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $i(e) {
    e.refCount--, e.refCount === 0 && Qb(Gb, function() {
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
  function Fb(e, t) {
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
  var Aa = j(null);
  function Tu() {
    var e = Aa.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function yr(e, t) {
    t === null ? x(Aa, Aa.current) : x(Aa, t.pool);
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
          if (e = Ye, e !== null && 100 < e.shellSuspendCounter)
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
  var Gn = !1;
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
  function Yn(e) {
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
      var u = null, c = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var b = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          c === null ? u = c = b : c = c.next = b, a = a.next;
        } while (a !== null);
        c === null ? u = c = t : c = c.next = t;
      } else u = c = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
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
    Gn = !1;
    var c = u.firstBaseUpdate, b = u.lastBaseUpdate, v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var A = v, R = A.next;
      A.next = null, b === null ? c = R : b.next = R, b = A;
      var V = e.alternate;
      V !== null && (V = V.updateQueue, v = V.lastBaseUpdate, v !== b && (v === null ? V.firstBaseUpdate = R : v.next = R, V.lastBaseUpdate = A));
    }
    if (c !== null) {
      var G = u.baseState;
      b = 0, V = R = A = null, v = c;
      do {
        var _ = v.lane & -536870913, M = _ !== v.lane;
        if (M ? (Ne & _) === _ : (l & _) === _) {
          _ !== 0 && _ === ti && (Du = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var ve = e, he = v;
            _ = t;
            var Qe = a;
            switch (he.tag) {
              case 1:
                if (ve = he.payload, typeof ve == "function") {
                  G = ve.call(Qe, G, _);
                  break e;
                }
                G = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = he.payload, _ = typeof ve == "function" ? ve.call(Qe, G, _) : ve, _ == null) break e;
                G = h({}, G, _);
                break e;
              case 2:
                Gn = !0;
            }
          }
          _ = v.callback, _ !== null && (e.flags |= 64, M && (e.flags |= 8192), M = u.callbacks, M === null ? u.callbacks = [_] : M.push(_));
        } else
          M = {
            lane: _,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, V === null ? (R = V = M, A = G) : V = V.next = M, b |= _;
        if (v = v.next, v === null) {
          if (v = u.shared.pending, v === null)
            break;
          M = v, v = M.next, M.next = null, u.lastBaseUpdate = M, u.shared.pending = null;
        }
      } while (!0);
      V === null && (A = G), u.baseState = A, u.firstBaseUpdate = R, u.lastBaseUpdate = V, c === null && (u.shared.lanes = 0), ea |= b, e.lanes = b, e.memoizedState = G;
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
  var ai = j(null), Sr = j(0);
  function Sd(e, t) {
    e = Ln, x(Sr, e), x(ai, t), Ln = e | t.baseLanes;
  }
  function Ou() {
    x(Sr, Ln), x(ai, ai.current);
  }
  function _u() {
    Ln = Sr.current, X(ai), X(Sr);
  }
  var Xn = 0, Ce = null, Ve = null, tt = null, xr = !1, ii = !1, Ta = !1, wr = 0, rl = 0, li = null, Xb = 0;
  function We() {
    throw Error(o(321));
  }
  function Mu(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!jt(e[a], t[a])) return !1;
    return !0;
  }
  function Nu(e, t, a, l, u, c) {
    return Xn = c, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = e === null || e.memoizedState === null ? ap : ip, Ta = !1, c = a(l, u), Ta = !1, ii && (c = wd(
      t,
      a,
      l,
      u
    )), xd(e), c;
  }
  function xd(e) {
    O.H = zr;
    var t = Ve !== null && Ve.next !== null;
    if (Xn = 0, tt = Ve = Ce = null, xr = !1, rl = 0, li = null, t) throw Error(o(300));
    e === null || st || (e = e.dependencies, e !== null && hr(e) && (st = !0));
  }
  function wd(e, t, a, l) {
    Ce = e;
    var u = 0;
    do {
      if (ii && (li = null), rl = 0, ii = !1, 25 <= u) throw Error(o(301));
      if (u += 1, tt = Ve = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      O.H = e0, c = t(a, l);
    } while (ii);
    return c;
  }
  function Pb() {
    var e = O.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ol(t) : t, e = e.useState()[0], (Ve !== null ? Ve.memoizedState : null) !== e && (Ce.flags |= 1024), t;
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
    Xn = 0, tt = Ve = Ce = null, ii = !1, rl = wr = 0, li = null;
  }
  function Tt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return tt === null ? Ce.memoizedState = tt = e : tt = tt.next = e, tt;
  }
  function nt() {
    if (Ve === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = tt === null ? Ce.memoizedState : tt.next;
    if (t !== null)
      tt = t, Ve = e;
    else {
      if (e === null)
        throw Ce.alternate === null ? Error(o(467)) : Error(o(310));
      Ve = e, e = {
        memoizedState: Ve.memoizedState,
        baseState: Ve.baseState,
        baseQueue: Ve.baseQueue,
        queue: Ve.queue,
        next: null
      }, tt === null ? Ce.memoizedState = tt = e : tt = tt.next = e;
    }
    return tt;
  }
  function ju() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ol(e) {
    var t = rl;
    return rl += 1, li === null && (li = []), e = hd(li, e, t), t = Ce, (tt === null ? t.memoizedState : tt.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? ap : ip), e;
  }
  function Er(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ol(e);
      if (e.$$typeof === Y) return gt(e);
    }
    throw Error(o(438, String(e)));
  }
  function qu(e) {
    var t = null, a = Ce.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = Ce.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ju(), Ce.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
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
    var u = e.baseQueue, c = l.pending;
    if (c !== null) {
      if (u !== null) {
        var b = u.next;
        u.next = c.next, c.next = b;
      }
      t.baseQueue = u = c, l.pending = null;
    }
    if (c = e.baseState, u === null) e.memoizedState = c;
    else {
      t = u.next;
      var v = b = null, A = null, R = t, V = !1;
      do {
        var G = R.lane & -536870913;
        if (G !== R.lane ? (Ne & G) === G : (Xn & G) === G) {
          var _ = R.revertLane;
          if (_ === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), G === ti && (V = !0);
          else if ((Xn & _) === _) {
            R = R.next, _ === ti && (V = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, A === null ? (v = A = G, b = c) : A = A.next = G, Ce.lanes |= _, ea |= _;
          G = R.action, Ta && a(c, G), c = R.hasEagerState ? R.eagerState : a(c, G);
        } else
          _ = {
            lane: G,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, A === null ? (v = A = _, b = c) : A = A.next = _, Ce.lanes |= G, ea |= G;
        R = R.next;
      } while (R !== null && R !== t);
      if (A === null ? b = c : A.next = v, !jt(c, e.memoizedState) && (st = !0, V && (a = ni, a !== null)))
        throw a;
      e.memoizedState = c, e.baseState = b, e.baseQueue = A, l.lastRenderedState = c;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Vu(e) {
    var t = nt(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, u = a.pending, c = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var b = u = u.next;
      do
        c = e(c, b.action), b = b.next;
      while (b !== u);
      jt(c, t.memoizedState) || (st = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), a.lastRenderedState = c;
    }
    return [c, l];
  }
  function Ed(e, t, a) {
    var l = Ce, u = nt(), c = Le;
    if (c) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var b = !jt(
      (Ve || u).memoizedState,
      a
    );
    b && (u.memoizedState = a, st = !0), u = u.queue;
    var v = Cd.bind(null, l, u, e);
    if (ul(2048, 8, v, [e]), u.getSnapshot !== t || b || tt !== null && tt.memoizedState.tag & 1) {
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
      ), Ye === null) throw Error(o(349));
      c || (Xn & 124) !== 0 || Ad(l, t, a);
    }
    return a;
  }
  function Ad(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ce.updateQueue, t === null ? (t = ju(), Ce.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
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
    var t = Tt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Ta) {
        me(!0);
        try {
          a();
        } finally {
          me(!1);
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
  function Kb(e, t, a, l, u) {
    if (kr(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var c = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(b) {
          c.listeners.push(b);
        }
      };
      O.T !== null ? a(!0) : c.isTransition = !1, l(c), a = t.pending, a === null ? (c.next = t.pending = c, Dd(t, c)) : (c.next = a.next, t.pending = a.next = c);
    }
  }
  function Dd(e, t) {
    var a = t.action, l = t.payload, u = e.state;
    if (t.isTransition) {
      var c = O.T, b = {};
      O.T = b;
      try {
        var v = a(u, l), A = O.S;
        A !== null && A(b, v), Od(e, t, v);
      } catch (R) {
        Qu(e, t, R);
      } finally {
        O.T = c;
      }
    } else
      try {
        c = a(u, l), Od(e, t, c);
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
    t.status = "fulfilled", t.value = a, Md(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Dd(e, a)));
  }
  function Qu(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Md(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Md(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Nd(e, t) {
    return t;
  }
  function Ud(e, t) {
    if (Le) {
      var a = Ye.formState;
      if (a !== null) {
        e: {
          var l = Ce;
          if (Le) {
            if (Ze) {
              t: {
                for (var u = Ze, c = pn; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break t;
                  }
                  if (u = sn(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                c = u.data, u = c === "F!" || c === "F" ? u : null;
              }
              if (u) {
                Ze = sn(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            xa(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = Tt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nd,
      lastRenderedState: t
    }, a.queue = l, a = ep.bind(
      null,
      Ce,
      l
    ), l.dispatch = a, l = Iu(!1), c = Pu.bind(
      null,
      Ce,
      !1,
      l.queue
    ), l = Tt(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, a = Kb.bind(
      null,
      Ce,
      u,
      c,
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
      Nd
    )[0], e = Ar(Dn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = ol(t);
      } catch (b) {
        throw b === tl ? br : b;
      }
    else l = t;
    t = nt();
    var u = t.queue, c = u.dispatch;
    return a !== t.memoizedState && (Ce.flags |= 2048, ri(
      9,
      Tr(),
      Zb.bind(null, u, a),
      null
    )), [l, c, e];
  }
  function Zb(e, t) {
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
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = Ce.updateQueue, t === null && (t = ju(), Ce.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Tr() {
    return { destroy: void 0, resource: void 0 };
  }
  function qd() {
    return nt().memoizedState;
  }
  function Cr(e, t, a, l) {
    var u = Tt();
    l = l === void 0 ? null : l, Ce.flags |= e, u.memoizedState = ri(
      1 | t,
      Tr(),
      a,
      l
    );
  }
  function ul(e, t, a, l) {
    var u = nt();
    l = l === void 0 ? null : l;
    var c = u.memoizedState.inst;
    Ve !== null && l !== null && Mu(l, Ve.memoizedState.deps) ? u.memoizedState = ri(t, c, a, l) : (Ce.flags |= e, u.memoizedState = ri(
      1 | t,
      c,
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
  function Yd(e, t, a) {
    a = a != null ? a.concat([e]) : null, ul(4, 4, Gd.bind(null, t, e), a);
  }
  function Gu() {
  }
  function Fd(e, t) {
    var a = nt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Mu(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Xd(e, t) {
    var a = nt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Mu(t, l[1]))
      return l[0];
    if (l = e(), Ta) {
      me(!0);
      try {
        e();
      } finally {
        me(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Yu(e, t, a) {
    return a === void 0 || (Xn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Zp(), Ce.lanes |= e, ea |= e, a);
  }
  function Pd(e, t, a, l) {
    return jt(a, t) ? a : ai.current !== null ? (e = Yu(e, a, l), jt(e, t) || (st = !0), e) : (Xn & 42) === 0 ? (st = !0, e.memoizedState = a) : (e = Zp(), Ce.lanes |= e, ea |= e, t);
  }
  function Kd(e, t, a, l, u) {
    var c = F.p;
    F.p = c !== 0 && 8 > c ? c : 8;
    var b = O.T, v = {};
    O.T = v, Pu(e, !1, t, a);
    try {
      var A = u(), R = O.S;
      if (R !== null && R(v, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var V = Fb(
          A,
          l
        );
        sl(
          e,
          t,
          V,
          Qt(e)
        );
      } else
        sl(
          e,
          t,
          l,
          Qt(e)
        );
    } catch (G) {
      sl(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: G },
        Qt()
      );
    } finally {
      F.p = c, O.T = b;
    }
  }
  function Jb() {
  }
  function Fu(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Zd(e).queue;
    Kd(
      e,
      u,
      t,
      Q,
      a === null ? Jb : function() {
        return Jd(e), a(l);
      }
    );
  }
  function Zd(e) {
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
        lastRenderedReducer: Dn,
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
    return gt(kl);
  }
  function Wd() {
    return nt().memoizedState;
  }
  function $d() {
    return nt().memoizedState;
  }
  function Wb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Qt();
          e = Yn(a);
          var l = Fn(t, e, a);
          l !== null && (Gt(l, t, a), al(l, t, a)), t = { cache: Eu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function $b(e, t, a) {
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
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var b = t.lastRenderedState, v = c(b, a);
          if (u.hasEagerState = !0, u.eagerState = v, jt(v, b))
            return cr(e, t, u, 0), Ye === null && sr(), !1;
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
    return e === Ce || t !== null && t === Ce;
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
    readContext: gt,
    use: Er,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useLayoutEffect: We,
    useInsertionEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useSyncExternalStore: We,
    useId: We,
    useHostTransitionStatus: We,
    useFormState: We,
    useActionState: We,
    useOptimistic: We,
    useMemoCache: We,
    useCacheRefresh: We
  }, ap = {
    readContext: gt,
    use: Er,
    useCallback: function(e, t) {
      return Tt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: gt,
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
      var a = Tt();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ta) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = Tt();
      if (a !== void 0) {
        var u = a(t);
        if (Ta) {
          me(!0);
          try {
            a(t);
          } finally {
            me(!1);
          }
        }
      } else u = t;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = $b.bind(
        null,
        Ce,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Tt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Iu(e);
      var t = e.queue, a = ep.bind(null, Ce, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Gu,
    useDeferredValue: function(e, t) {
      var a = Tt();
      return Yu(a, e, t);
    },
    useTransition: function() {
      var e = Iu(!1);
      return e = Kd.bind(
        null,
        Ce,
        e.queue,
        !0,
        !1
      ), Tt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = Ce, u = Tt();
      if (Le) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), Ye === null)
          throw Error(o(349));
        (Ne & 124) !== 0 || Ad(l, t, a);
      }
      u.memoizedState = a;
      var c = { value: a, getSnapshot: t };
      return u.queue = c, Hd(Cd.bind(null, l, c, e), [
        e
      ]), l.flags |= 2048, ri(
        9,
        Tr(),
        Td.bind(
          null,
          l,
          c,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Tt(), t = Ye.identifierPrefix;
      if (Le) {
        var a = kn, l = Cn;
        a = (l & ~(1 << 32 - ye(l) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = wr++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = Xb++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Xu,
    useFormState: Ud,
    useActionState: Ud,
    useOptimistic: function(e) {
      var t = Tt();
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
        Ce,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: qu,
    useCacheRefresh: function() {
      return Tt().memoizedState = Wb.bind(
        null,
        Ce
      );
    }
  }, ip = {
    readContext: gt,
    use: Er,
    useCallback: Fd,
    useContext: gt,
    useEffect: Vd,
    useImperativeHandle: Yd,
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
  }, e0 = {
    readContext: gt,
    use: Er,
    useCallback: Fd,
    useContext: gt,
    useEffect: Vd,
    useImperativeHandle: Yd,
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
      return Ve === null ? Yu(a, e, t) : Pd(
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
    throw t.$$typeof === S ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
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
    function c(C, T, z) {
      return C.index = z, e ? (z = C.alternate, z !== null ? (z = z.index, z < T ? (C.flags |= 67108866, T) : z) : (C.flags |= 67108866, T)) : (C.flags |= 1048576, T);
    }
    function b(C) {
      return e && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, T, z, I) {
      return T === null || T.tag !== 6 ? (T = hu(z, C.mode, I), T.return = C, T) : (T = u(T, z), T.return = C, T);
    }
    function A(C, T, z, I) {
      var oe = z.type;
      return oe === k ? V(
        C,
        T,
        z.props.children,
        I,
        z.key
      ) : T !== null && (T.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Z && lp(oe) === T.type) ? (T = u(T, z.props), fl(T, z), T.return = C, T) : (T = dr(
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
    function V(C, T, z, I, oe) {
      return T === null || T.tag !== 7 ? (T = ya(
        z,
        C.mode,
        I,
        oe
      ), T.return = C, T) : (T = u(T, z), T.return = C, T);
    }
    function G(C, T, z) {
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
          case Z:
            var I = T._init;
            return T = I(T._payload), G(C, T, z);
        }
        if (ne(T) || te(T))
          return T = ya(
            T,
            C.mode,
            z,
            null
          ), T.return = C, T;
        if (typeof T.then == "function")
          return G(C, Rr(T), z);
        if (T.$$typeof === Y)
          return G(
            C,
            gr(C, T),
            z
          );
        Dr(C, T);
      }
      return null;
    }
    function _(C, T, z, I) {
      var oe = T !== null ? T.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return oe !== null ? null : v(C, T, "" + z, I);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case E:
            return z.key === oe ? A(C, T, z, I) : null;
          case w:
            return z.key === oe ? R(C, T, z, I) : null;
          case Z:
            return oe = z._init, z = oe(z._payload), _(C, T, z, I);
        }
        if (ne(z) || te(z))
          return oe !== null ? null : V(C, T, z, I, null);
        if (typeof z.then == "function")
          return _(
            C,
            T,
            Rr(z),
            I
          );
        if (z.$$typeof === Y)
          return _(
            C,
            T,
            gr(C, z),
            I
          );
        Dr(C, z);
      }
      return null;
    }
    function M(C, T, z, I, oe) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return C = C.get(z) || null, v(T, C, "" + I, oe);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case E:
            return C = C.get(
              I.key === null ? z : I.key
            ) || null, A(T, C, I, oe);
          case w:
            return C = C.get(
              I.key === null ? z : I.key
            ) || null, R(T, C, I, oe);
          case Z:
            var Re = I._init;
            return I = Re(I._payload), M(
              C,
              T,
              z,
              I,
              oe
            );
        }
        if (ne(I) || te(I))
          return C = C.get(z) || null, V(T, C, I, oe, null);
        if (typeof I.then == "function")
          return M(
            C,
            T,
            z,
            Rr(I),
            oe
          );
        if (I.$$typeof === Y)
          return M(
            C,
            T,
            z,
            gr(T, I),
            oe
          );
        Dr(T, I);
      }
      return null;
    }
    function ve(C, T, z, I) {
      for (var oe = null, Re = null, pe = T, ge = T = 0, ft = null; pe !== null && ge < z.length; ge++) {
        pe.index > ge ? (ft = pe, pe = null) : ft = pe.sibling;
        var Ue = _(
          C,
          pe,
          z[ge],
          I
        );
        if (Ue === null) {
          pe === null && (pe = ft);
          break;
        }
        e && pe && Ue.alternate === null && t(C, pe), T = c(Ue, T, ge), Re === null ? oe = Ue : Re.sibling = Ue, Re = Ue, pe = ft;
      }
      if (ge === z.length)
        return a(C, pe), Le && va(C, ge), oe;
      if (pe === null) {
        for (; ge < z.length; ge++)
          pe = G(C, z[ge], I), pe !== null && (T = c(
            pe,
            T,
            ge
          ), Re === null ? oe = pe : Re.sibling = pe, Re = pe);
        return Le && va(C, ge), oe;
      }
      for (pe = l(pe); ge < z.length; ge++)
        ft = M(
          pe,
          C,
          ge,
          z[ge],
          I
        ), ft !== null && (e && ft.alternate !== null && pe.delete(
          ft.key === null ? ge : ft.key
        ), T = c(
          ft,
          T,
          ge
        ), Re === null ? oe = ft : Re.sibling = ft, Re = ft);
      return e && pe.forEach(function(sa) {
        return t(C, sa);
      }), Le && va(C, ge), oe;
    }
    function he(C, T, z, I) {
      if (z == null) throw Error(o(151));
      for (var oe = null, Re = null, pe = T, ge = T = 0, ft = null, Ue = z.next(); pe !== null && !Ue.done; ge++, Ue = z.next()) {
        pe.index > ge ? (ft = pe, pe = null) : ft = pe.sibling;
        var sa = _(C, pe, Ue.value, I);
        if (sa === null) {
          pe === null && (pe = ft);
          break;
        }
        e && pe && sa.alternate === null && t(C, pe), T = c(sa, T, ge), Re === null ? oe = sa : Re.sibling = sa, Re = sa, pe = ft;
      }
      if (Ue.done)
        return a(C, pe), Le && va(C, ge), oe;
      if (pe === null) {
        for (; !Ue.done; ge++, Ue = z.next())
          Ue = G(C, Ue.value, I), Ue !== null && (T = c(Ue, T, ge), Re === null ? oe = Ue : Re.sibling = Ue, Re = Ue);
        return Le && va(C, ge), oe;
      }
      for (pe = l(pe); !Ue.done; ge++, Ue = z.next())
        Ue = M(pe, C, ge, Ue.value, I), Ue !== null && (e && Ue.alternate !== null && pe.delete(Ue.key === null ? ge : Ue.key), T = c(Ue, T, ge), Re === null ? oe = Ue : Re.sibling = Ue, Re = Ue);
      return e && pe.forEach(function(t1) {
        return t(C, t1);
      }), Le && va(C, ge), oe;
    }
    function Qe(C, T, z, I) {
      if (typeof z == "object" && z !== null && z.type === k && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case E:
            e: {
              for (var oe = z.key; T !== null; ) {
                if (T.key === oe) {
                  if (oe = z.type, oe === k) {
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
                  } else if (T.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Z && lp(oe) === T.type) {
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
              z.type === k ? (I = ya(
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
            return b(C);
          case w:
            e: {
              for (oe = z.key; T !== null; ) {
                if (T.key === oe)
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
            return b(C);
          case Z:
            return oe = z._init, z = oe(z._payload), Qe(
              C,
              T,
              z,
              I
            );
        }
        if (ne(z))
          return ve(
            C,
            T,
            z,
            I
          );
        if (te(z)) {
          if (oe = te(z), typeof oe != "function") throw Error(o(150));
          return z = oe.call(z), he(
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
        if (z.$$typeof === Y)
          return Qe(
            C,
            T,
            gr(C, z),
            I
          );
        Dr(C, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, T !== null && T.tag === 6 ? (a(C, T.sibling), I = u(T, z), I.return = C, C = I) : (a(C, T), I = hu(z, C.mode, I), I.return = C, C = I), b(C)) : a(C, T);
    }
    return function(C, T, z, I) {
      try {
        cl = 0;
        var oe = Qe(
          C,
          T,
          z,
          I
        );
        return oi = null, oe;
      } catch (pe) {
        if (pe === tl || pe === br) throw pe;
        var Re = qt(29, pe, null, C.mode);
        return Re.lanes = I, Re.return = C, Re;
      } finally {
      }
    };
  }
  var ui = rp(!0), op = rp(!1), en = j(null), mn = null;
  function Pn(e) {
    var t = e.alternate;
    x(lt, lt.current & 1), x(en, e), mn === null && (t === null || ai.current !== null || t.memoizedState !== null) && (mn = e);
  }
  function up(e) {
    if (e.tag === 22) {
      if (x(lt, lt.current), x(en, e), mn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (mn = e);
      }
    } else Kn();
  }
  function Kn() {
    x(lt, lt.current), x(en, en.current);
  }
  function On(e) {
    X(en), mn === e && (mn = null), X(lt);
  }
  var lt = j(0);
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
      var l = Qt(), u = Yn(l);
      u.payload = t, a != null && (u.callback = a), t = Fn(e, u, l), t !== null && (Gt(t, e, l), al(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Qt(), u = Yn(l);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = Fn(e, u, l), t !== null && (Gt(t, e, l), al(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Qt(), l = Yn(a);
      l.tag = 2, t != null && (l.callback = t), t = Fn(e, l, a), t !== null && (Gt(t, e, a), al(t, e, a));
    }
  };
  function sp(e, t, a, l, u, c, b) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, b) : t.prototype && t.prototype.isPureReactComponent ? !Xi(a, l) || !Xi(u, c) : !0;
  }
  function cp(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Zu.enqueueReplaceState(t, t.state, null);
  }
  function Ca(e, t) {
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
  function Mr(e, t) {
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
    return a = Yn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Mr(e, t);
    }, a;
  }
  function hp(e) {
    return e = Yn(e), e.tag = 3, e;
  }
  function gp(e, t, a, l) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = l.value;
      e.payload = function() {
        return u(c);
      }, e.callback = function() {
        mp(t, a, l);
      };
    }
    var b = a.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (e.callback = function() {
      mp(t, a, l), typeof u != "function" && (ta === null ? ta = /* @__PURE__ */ new Set([this]) : ta.add(this));
      var v = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function t0(e, t, a, l, u) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Wi(
        t,
        a,
        u,
        !0
      ), a = en.current, a !== null) {
        switch (a.tag) {
          case 13:
            return mn === null ? xs() : a.alternate === null && Je === 0 && (Je = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, l === Cu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Es(e, l, u)), !1;
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
      ), Ru(e, u), Je !== 4 && (Je = 2)), !1;
    var c = Error(o(520), { cause: l });
    if (c = Zt(c, a), bl === null ? bl = [c] : bl.push(c), Je !== 4 && (Je = 2), t === null) return !0;
    l = Zt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = u & -u, a.lanes |= e, e = Ju(a.stateNode, l, e), Ru(a, e), !1;
        case 1:
          if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (ta === null || !ta.has(c))))
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
  var yp = Error(o(461)), st = !1;
  function dt(e, t, a, l) {
    t.child = e === null ? op(t, null, a, l) : ui(
      t,
      e.child,
      a,
      l
    );
  }
  function bp(e, t, a, l, u) {
    a = a.render;
    var c = t.ref;
    if ("ref" in l) {
      var b = {};
      for (var v in l)
        v !== "ref" && (b[v] = l[v]);
    } else b = l;
    return Ea(t), l = Nu(
      e,
      t,
      a,
      b,
      c,
      u
    ), v = Uu(), e !== null && !st ? (Lu(e, t, u), _n(e, t, u)) : (Le && v && yu(t), t.flags |= 1, dt(e, t, l, u), t.child);
  }
  function vp(e, t, a, l, u) {
    if (e === null) {
      var c = a.type;
      return typeof c == "function" && !mu(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, Sp(
        e,
        t,
        c,
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
    if (c = e.child, !ls(e, u)) {
      var b = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xi, a(b, l) && e.ref === t.ref)
        return _n(e, t, u);
    }
    return t.flags |= 1, e = Tn(c, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Sp(e, t, a, l, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Xi(c, l) && e.ref === t.ref)
        if (st = !1, t.pendingProps = l = c, ls(e, u))
          (e.flags & 131072) !== 0 && (st = !0);
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
    var l = t.pendingProps, u = l.children, c = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = c !== null ? c.baseLanes | a : a, e !== null) {
          for (u = t.child = e.child, c = 0; u !== null; )
            c = c | u.lanes | u.childLanes, u = u.sibling;
          t.childLanes = c & ~l;
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
          c !== null ? c.cachePool : null
        ), c !== null ? Sd(t, c) : Ou(), up(t);
      else
        return t.lanes = t.childLanes = 536870912, wp(
          e,
          t,
          c !== null ? c.baseLanes | a : a,
          a
        );
    } else
      c !== null ? (yr(t, c.cachePool), Sd(t, c), Kn(), t.memoizedState = null) : (e !== null && yr(t, null), Ou(), Kn());
    return dt(e, t, u, a), t.child;
  }
  function wp(e, t, a, l) {
    var u = Tu();
    return u = u === null ? null : { parent: it._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && yr(t, null), Ou(), up(t), e !== null && Wi(e, t, l, !0), null;
  }
  function Nr(e, t) {
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
    return Ea(t), a = Nu(
      e,
      t,
      a,
      l,
      void 0,
      u
    ), l = Uu(), e !== null && !st ? (Lu(e, t, u), _n(e, t, u)) : (Le && l && yu(t), t.flags |= 1, dt(e, t, a, u), t.child);
  }
  function Ep(e, t, a, l, u, c) {
    return Ea(t), t.updateQueue = null, a = wd(
      t,
      l,
      a,
      u
    ), xd(e), l = Uu(), e !== null && !st ? (Lu(e, t, c), _n(e, t, c)) : (Le && l && yu(t), t.flags |= 1, dt(e, t, a, c), t.child);
  }
  function Ap(e, t, a, l, u) {
    if (Ea(t), t.stateNode === null) {
      var c = Wa, b = a.contextType;
      typeof b == "object" && b !== null && (c = gt(b)), c = new a(l, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Zu, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = l, c.state = t.memoizedState, c.refs = {}, ku(t), b = a.contextType, c.context = typeof b == "object" && b !== null ? gt(b) : Wa, c.state = t.memoizedState, b = a.getDerivedStateFromProps, typeof b == "function" && (Ku(
        t,
        a,
        b,
        l
      ), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (b = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), b !== c.state && Zu.enqueueReplaceState(c, c.state, null), ll(t, l, c, u), il(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      c = t.stateNode;
      var v = t.memoizedProps, A = Ca(a, v);
      c.props = A;
      var R = c.context, V = a.contextType;
      b = Wa, typeof V == "object" && V !== null && (b = gt(V));
      var G = a.getDerivedStateFromProps;
      V = typeof G == "function" || typeof c.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, V || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || R !== b) && cp(
        t,
        c,
        l,
        b
      ), Gn = !1;
      var _ = t.memoizedState;
      c.state = _, ll(t, l, c, u), il(), R = t.memoizedState, v || _ !== R || Gn ? (typeof G == "function" && (Ku(
        t,
        a,
        G,
        l
      ), R = t.memoizedState), (A = Gn || sp(
        t,
        a,
        A,
        l,
        _,
        R,
        b
      )) ? (V || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = R), c.props = l, c.state = R, c.context = b, l = A) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      c = t.stateNode, zu(e, t), b = t.memoizedProps, V = Ca(a, b), c.props = V, G = t.pendingProps, _ = c.context, R = a.contextType, A = Wa, typeof R == "object" && R !== null && (A = gt(R)), v = a.getDerivedStateFromProps, (R = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (b !== G || _ !== A) && cp(
        t,
        c,
        l,
        A
      ), Gn = !1, _ = t.memoizedState, c.state = _, ll(t, l, c, u), il();
      var M = t.memoizedState;
      b !== G || _ !== M || Gn || e !== null && e.dependencies !== null && hr(e.dependencies) ? (typeof v == "function" && (Ku(
        t,
        a,
        v,
        l
      ), M = t.memoizedState), (V = Gn || sp(
        t,
        a,
        V,
        l,
        _,
        M,
        A
      ) || e !== null && e.dependencies !== null && hr(e.dependencies)) ? (R || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, M, A), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        M,
        A
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || b === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = M), c.props = l, c.state = M, c.context = A, l = V) : (typeof c.componentDidUpdate != "function" || b === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return c = l, Nr(e, t), l = (t.flags & 128) !== 0, c || l ? (c = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && l ? (t.child = ui(
      t,
      e.child,
      null,
      u
    ), t.child = ui(
      t,
      null,
      a,
      u
    )) : dt(e, t, a, u), t.memoizedState = c.state, e = t.child) : e = _n(
      e,
      t,
      u
    ), e;
  }
  function Tp(e, t, a, l) {
    return Zi(), t.flags |= 256, dt(e, t, a, l), t.child;
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
    var l = t.pendingProps, u = !1, c = (t.flags & 128) !== 0, b;
    if ((b = c) || (b = e !== null && e.memoizedState === null ? !1 : (lt.current & 2) !== 0), b && (u = !0, t.flags &= -129), b = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Le) {
        if (u ? Pn(t) : Kn(), Le) {
          var v = Ze, A;
          if (A = v) {
            e: {
              for (A = v, v = pn; A.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (A = sn(
                  A.nextSibling
                ), A === null) {
                  v = null;
                  break e;
                }
              }
              v = A;
            }
            v !== null ? (t.memoizedState = {
              dehydrated: v,
              treeContext: ba !== null ? { id: Cn, overflow: kn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, A = qt(
              18,
              null,
              null,
              0
            ), A.stateNode = v, A.return = t, t.child = A, xt = t, Ze = null, A = !0) : A = !1;
          }
          A || xa(t);
        }
        if (v = t.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return js(v) ? t.lanes = 32 : t.lanes = 536870912, null;
        On(t);
      }
      return v = l.children, l = l.fallback, u ? (Kn(), u = t.mode, v = Ur(
        { mode: "hidden", children: v },
        u
      ), l = ya(
        l,
        u,
        a,
        null
      ), v.return = t, l.return = t, v.sibling = l, t.child = v, u = t.child, u.memoizedState = es(a), u.childLanes = ts(
        e,
        b,
        a
      ), t.memoizedState = $u, l) : (Pn(t), ns(t, v));
    }
    if (A = e.memoizedState, A !== null && (v = A.dehydrated, v !== null)) {
      if (c)
        t.flags & 256 ? (Pn(t), t.flags &= -257, t = as(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Kn(), t.child = e.child, t.flags |= 128, t = null) : (Kn(), u = l.fallback, v = t.mode, l = Ur(
          { mode: "visible", children: l.children },
          v
        ), u = ya(
          u,
          v,
          a,
          null
        ), u.flags |= 2, l.return = t, u.return = t, l.sibling = u, t.child = l, ui(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = es(a), l.childLanes = ts(
          e,
          b,
          a
        ), t.memoizedState = $u, t = u);
      else if (Pn(t), js(v)) {
        if (b = v.nextSibling && v.nextSibling.dataset, b) var R = b.dgst;
        b = R, l = Error(o(419)), l.stack = "", l.digest = b, Ji({ value: l, source: null, stack: null }), t = as(
          e,
          t,
          a
        );
      } else if (st || Wi(e, t, a, !1), b = (a & e.childLanes) !== 0, st || b) {
        if (b = Ye, b !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : qo(l), l = (l & (b.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== A.retryLane))
          throw A.retryLane = l, Ja(e, l), Gt(b, e, l), yp;
        v.data === "$?" || xs(), t = as(
          e,
          t,
          a
        );
      } else
        v.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = A.treeContext, Ze = sn(
          v.nextSibling
        ), xt = t, Le = !0, Sa = null, pn = !1, e !== null && (Wt[$t++] = Cn, Wt[$t++] = kn, Wt[$t++] = ba, Cn = e.id, kn = e.overflow, ba = t), t = ns(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (Kn(), u = l.fallback, v = t.mode, A = e.child, R = A.sibling, l = Tn(A, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = A.subtreeFlags & 65011712, R !== null ? u = Tn(R, u) : (u = ya(
      u,
      v,
      a,
      null
    ), u.flags |= 2), u.return = t, l.return = t, l.sibling = u, t.child = l, l = u, u = t.child, v = e.child.memoizedState, v === null ? v = es(a) : (A = v.cachePool, A !== null ? (R = it._currentValue, A = A.parent !== R ? { parent: R, pool: R } : A) : A = dd(), v = {
      baseLanes: v.baseLanes | a,
      cachePool: A
    }), u.memoizedState = v, u.childLanes = ts(
      e,
      b,
      a
    ), t.memoizedState = $u, l) : (Pn(t), a = e.child, e = a.sibling, a = Tn(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (b = t.deletions, b === null ? (t.deletions = [e], t.flags |= 16) : b.push(e)), t.child = a, t.memoizedState = null, a);
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
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: u
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = l, c.tail = a, c.tailMode = u);
  }
  function zp(e, t, a) {
    var l = t.pendingProps, u = l.revealOrder, c = l.tail;
    if (dt(e, t, l.children, a), l = lt.current, (l & 2) !== 0)
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
          c
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
  function _n(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), ea |= t.lanes, (a & t.childLanes) === 0)
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
  function n0(e, t, a) {
    switch (t.tag) {
      case 3:
        _e(t, t.stateNode.containerInfo), Qn(t, it, e.memoizedState.cache), Zi();
        break;
      case 27:
      case 5:
        St(t);
        break;
      case 4:
        _e(t, t.stateNode.containerInfo);
        break;
      case 10:
        Qn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Pn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Cp(e, t, a) : (Pn(t), e = _n(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Pn(t);
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
        Qn(t, it, e.memoizedState.cache);
    }
    return _n(e, t, a);
  }
  function Rp(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        st = !0;
      else {
        if (!ls(e, a) && (t.flags & 128) === 0)
          return st = !1, n0(
            e,
            t,
            a
          );
        st = (e.flags & 131072) !== 0;
      }
    else
      st = !1, Le && (t.flags & 1048576) !== 0 && ld(t, mr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType, u = l._init;
          if (l = u(l._payload), t.type = l, typeof l == "function")
            mu(l) ? (e = Ca(l, e), t.tag = 1, t = Ap(
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
              if (u = l.$$typeof, u === ce) {
                t.tag = 11, t = bp(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              } else if (u === ae) {
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
            throw t = P(l) || l, Error(o(306, t, ""));
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
        return l = t.type, u = Ca(
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
          if (_e(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var c = t.memoizedState;
          u = c.element, zu(e, t), ll(t, l, null, a);
          var b = t.memoizedState;
          if (l = b.cache, Qn(t, it, l), l !== c.cache && wu(
            t,
            [it],
            a,
            !0
          ), il(), l = b.element, c.isDehydrated)
            if (c = {
              element: l,
              isDehydrated: !1,
              cache: b.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
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
              for (Ze = sn(e.firstChild), xt = t, Le = !0, Sa = null, pn = !0, a = op(
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
            dt(
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
        return Nr(e, t), e === null ? (a = Mm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Le || (a = t.type, e = t.pendingProps, l = Kr(
          le.current
        ).createElement(a), l[ht] = t, l[Et] = e, mt(l, a, e), ut(l), t.stateNode = l) : t.memoizedState = Mm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return St(t), e === null && Le && (l = t.stateNode = Dm(
          t.type,
          t.pendingProps,
          le.current
        ), xt = t, pn = !0, u = Ze, ia(t.type) ? (qs = u, Ze = sn(
          l.firstChild
        )) : Ze = u), dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Nr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Le && ((u = l = Ze) && (l = D0(
          l,
          t.type,
          t.pendingProps,
          pn
        ), l !== null ? (t.stateNode = l, xt = t, Ze = sn(
          l.firstChild
        ), pn = !1, u = !0) : u = !1), u || xa(t)), St(t), u = t.type, c = t.pendingProps, b = e !== null ? e.memoizedProps : null, l = c.children, Us(u, c) ? l = null : b !== null && Us(u, b) && (t.flags |= 32), t.memoizedState !== null && (u = Nu(
          e,
          t,
          Pb,
          null,
          null,
          a
        ), kl._currentValue = u), Nr(e, t), dt(e, t, l, a), t.child;
      case 6:
        return e === null && Le && ((e = a = Ze) && (a = O0(
          a,
          t.pendingProps,
          pn
        ), a !== null ? (t.stateNode = a, xt = t, Ze = null, e = !0) : e = !1), e || xa(t)), null;
      case 13:
        return Cp(e, t, a);
      case 4:
        return _e(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ui(
          t,
          null,
          l,
          a
        ) : dt(
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
        return dt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Qn(t, t.type, l.value), dt(
          e,
          t,
          l.children,
          a
        ), t.child;
      case 9:
        return u = t.type._context, l = t.pendingProps.children, Ea(t), u = gt(u), l = l(u), t.flags |= 1, dt(e, t, l, a), t.child;
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
        return Ea(t), l = gt(it), e === null ? (u = Tu(), u === null && (u = Ye, c = Eu(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= a), u = c), t.memoizedState = {
          parent: l,
          cache: u
        }, ku(t), Qn(t, it, u)) : ((e.lanes & a) !== 0 && (zu(e, t), ll(t, null, null, a), il()), u = e.memoizedState, c = t.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Qn(t, it, l)) : (l = c.cache, Qn(t, it, l), l !== u.cache && wu(
          t,
          [it],
          a,
          !0
        ))), dt(
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
  function Mn(e) {
    e.flags |= 4;
  }
  function Dp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !jm(t)) {
      if (t = en.current, t !== null && ((Ne & 4194048) === Ne ? mn !== null : (Ne & 62914560) !== Ne && (Ne & 536870912) === 0 || t !== mn))
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
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function a0(e, t, a) {
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
        return Ke(t), null;
      case 1:
        return Ke(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Rn(it), et(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ki(t) ? Mn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ud())), Ke(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (Mn(t), a !== null ? (Ke(t), Dp(t, a)) : (Ke(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Mn(t), Ke(t), Dp(t, a)) : (Ke(t), t.flags &= -16777217) : (e.memoizedProps !== l && Mn(t), Ke(t), t.flags &= -16777217), null;
      case 27:
        Nt(t), a = le.current;
        var u = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== l && Mn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ke(t), null;
          }
          e = $.current, Ki(t) ? rd(t) : (e = Dm(u, l, a), t.stateNode = e, Mn(t));
        }
        return Ke(t), null;
      case 5:
        if (Nt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Mn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ke(t), null;
          }
          if (e = $.current, Ki(t))
            rd(t);
          else {
            switch (u = Kr(
              le.current
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
            e[ht] = t, e[Et] = l;
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
            e: switch (mt(e, a, l), a) {
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
            e && Mn(t);
          }
        }
        return Ke(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Mn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = le.current, Ki(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, u = xt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[ht] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Em(e.nodeValue, a)), e || xa(t);
          } else
            e = Kr(e).createTextNode(
              l
            ), e[ht] = t, t.stateNode = e;
        }
        return Ke(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = Ki(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[ht] = t;
            } else
              Zi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), u = !1;
          } else
            u = ud(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (On(t), t) : (On(t), null);
        }
        if (On(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = t.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool);
          var c = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== u && (l.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Lr(t, t.updateQueue), Ke(t), null;
      case 4:
        return et(), e === null && Ds(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return Rn(t.type), Ke(t), null;
      case 19:
        if (X(lt), u = t.memoizedState, u === null) return Ke(t), null;
        if (l = (t.flags & 128) !== 0, c = u.rendering, c === null)
          if (l) dl(u, !1);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = Or(e), c !== null) {
                  for (t.flags |= 128, dl(u, !1), e = c.updateQueue, t.updateQueue = e, Lr(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
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
            if (e = Or(c), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, Lr(t, e), dl(u, !0), u.tail === null && u.tailMode === "hidden" && !c.alternate && !Le)
                return Ke(t), null;
            } else
              2 * Ut() - u.renderingStartTime > qr && a !== 536870912 && (t.flags |= 128, l = !0, dl(u, !1), t.lanes = 4194304);
          u.isBackwards ? (c.sibling = t.child, t.child = c) : (e = u.last, e !== null ? e.sibling = c : t.child = c, u.last = c);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Ut(), t.sibling = null, e = lt.current, x(lt, l ? e & 1 | 2 : e & 1), t) : (Ke(t), null);
      case 22:
      case 23:
        return On(t), _u(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), a = t.updateQueue, a !== null && Lr(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && X(Aa), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Rn(it), Ke(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function i0(e, t) {
    switch (bu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rn(it), et(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Nt(t), null;
      case 13:
        if (On(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Zi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return X(lt), null;
      case 4:
        return et(), null;
      case 10:
        return Rn(t.type), null;
      case 22:
      case 23:
        return On(t), _u(), e !== null && X(Aa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
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
        Rn(it), et();
        break;
      case 26:
      case 27:
      case 5:
        Nt(t);
        break;
      case 4:
        et();
        break;
      case 13:
        On(t);
        break;
      case 19:
        X(lt);
        break;
      case 10:
        Rn(t.type);
        break;
      case 22:
      case 23:
        On(t), _u(), e !== null && X(Aa);
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
            var c = a.create, b = a.inst;
            l = c(), b.destroy = l;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (v) {
      Ge(t, t.return, v);
    }
  }
  function Zn(e, t, a) {
    try {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var b = l.inst, v = b.destroy;
            if (v !== void 0) {
              b.destroy = void 0, u = t;
              var A = a, R = v;
              try {
                R();
              } catch (V) {
                Ge(
                  u,
                  A,
                  V
                );
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (V) {
      Ge(t, t.return, V);
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
  function Mp(e, t, a) {
    a.props = Ca(
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
  function hn(e, t) {
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
  function Np(e) {
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
      T0(l, e.type, a, t), l[Et] = t;
    } catch (u) {
      Ge(e, e.return, u);
    }
  }
  function Up(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ia(e.type) || e.tag === 4;
  }
  function os(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Up(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ia(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function us(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Pr));
    else if (l !== 4 && (l === 27 && ia(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (us(e, t, a), e = e.sibling; e !== null; )
        us(e, t, a), e = e.sibling;
  }
  function Br(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && ia(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Br(e, t, a), e = e.sibling; e !== null; )
        Br(e, t, a), e = e.sibling;
  }
  function Lp(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      mt(t, l, a), t[ht] = e, t[Et] = a;
    } catch (c) {
      Ge(e, e.return, c);
    }
  }
  var Nn = !1, $e = !1, ss = !1, Bp = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function l0(e, t) {
    if (e = e.containerInfo, Ms = to, e = Pf(e), ou(e)) {
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
            var u = l.anchorOffset, c = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break e;
            }
            var b = 0, v = -1, A = -1, R = 0, V = 0, G = e, _ = null;
            t: for (; ; ) {
              for (var M; G !== a || u !== 0 && G.nodeType !== 3 || (v = b + u), G !== c || l !== 0 && G.nodeType !== 3 || (A = b + l), G.nodeType === 3 && (b += G.nodeValue.length), (M = G.firstChild) !== null; )
                _ = G, G = M;
              for (; ; ) {
                if (G === e) break t;
                if (_ === a && ++R === u && (v = b), _ === c && ++V === l && (A = b), (M = G.nextSibling) !== null) break;
                G = _, _ = G.parentNode;
              }
              G = M;
            }
            a = v === -1 || A === -1 ? null : { start: v, end: A };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Ns = { focusedElem: e, selectionRange: a }, to = !1, ct = t; ct !== null; )
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
                e = void 0, a = t, u = c.memoizedProps, c = c.memoizedState, l = a.stateNode;
                try {
                  var ve = Ca(
                    a.type,
                    u,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ve,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (he) {
                  Ge(
                    a,
                    a.return,
                    he
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
            e.return = t.return, ct = e;
            break;
          }
          ct = t.return;
        }
  }
  function jp(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Jn(e, a), l & 4 && pl(5, a);
        break;
      case 1:
        if (Jn(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (b) {
              Ge(a, a.return, b);
            }
          else {
            var u = Ca(
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
            } catch (b) {
              Ge(
                a,
                a.return,
                b
              );
            }
          }
        l & 64 && _p(a), l & 512 && ml(a, a.return);
        break;
      case 3:
        if (Jn(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
          } catch (b) {
            Ge(a, a.return, b);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Lp(a);
      case 26:
      case 5:
        Jn(e, a), t === null && l & 4 && Np(a), l & 512 && ml(a, a.return);
        break;
      case 12:
        Jn(e, a);
        break;
      case 13:
        Jn(e, a), l & 4 && Vp(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = m0.bind(
          null,
          a
        ), _0(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Nn, !l) {
          t = t !== null && t.memoizedState !== null || $e, u = Nn;
          var c = $e;
          Nn = l, ($e = t) && !c ? Wn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Jn(e, a), Nn = u, $e = c;
        }
        break;
      case 30:
        break;
      default:
        Jn(e, a);
    }
  }
  function qp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, qp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Io(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Pe = null, Ct = !1;
  function Un(e, t, a) {
    for (a = a.child; a !== null; )
      Hp(e, t, a), a = a.sibling;
  }
  function Hp(e, t, a) {
    if (K && typeof K.onCommitFiberUnmount == "function")
      try {
        K.onCommitFiberUnmount(H, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        $e || hn(a, t), Un(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        $e || hn(a, t);
        var l = Pe, u = Ct;
        ia(a.type) && (Pe = a.stateNode, Ct = !1), Un(
          e,
          t,
          a
        ), El(a.stateNode), Pe = l, Ct = u;
        break;
      case 5:
        $e || hn(a, t);
      case 6:
        if (l = Pe, u = Ct, Pe = null, Un(
          e,
          t,
          a
        ), Pe = l, Ct = u, Pe !== null)
          if (Ct)
            try {
              (Pe.nodeType === 9 ? Pe.body : Pe.nodeName === "HTML" ? Pe.ownerDocument.body : Pe).removeChild(a.stateNode);
            } catch (c) {
              Ge(
                a,
                t,
                c
              );
            }
          else
            try {
              Pe.removeChild(a.stateNode);
            } catch (c) {
              Ge(
                a,
                t,
                c
              );
            }
        break;
      case 18:
        Pe !== null && (Ct ? (e = Pe, zm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Ol(e)) : zm(Pe, a.stateNode));
        break;
      case 4:
        l = Pe, u = Ct, Pe = a.stateNode.containerInfo, Ct = !0, Un(
          e,
          t,
          a
        ), Pe = l, Ct = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $e || Zn(2, a, t), $e || Zn(4, a, t), Un(
          e,
          t,
          a
        );
        break;
      case 1:
        $e || (hn(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Mp(
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
        $e = (l = $e) || a.memoizedState !== null, Un(
          e,
          t,
          a
        ), $e = l;
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
  function r0(e) {
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
    var a = r0(e);
    t.forEach(function(l) {
      var u = h0.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(u, u));
    });
  }
  function Ht(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l], c = e, b = t, v = b;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (ia(v.type)) {
                Pe = v.stateNode, Ct = !1;
                break e;
              }
              break;
            case 5:
              Pe = v.stateNode, Ct = !1;
              break e;
            case 3:
            case 4:
              Pe = v.stateNode.containerInfo, Ct = !0;
              break e;
          }
          v = v.return;
        }
        if (Pe === null) throw Error(o(160));
        Hp(c, b, u), Pe = null, Ct = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Ip(t, e), t = t.sibling;
  }
  var un = null;
  function Ip(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ht(t, e), Vt(e), l & 4 && (Zn(3, e, e.return), pl(3, e), Zn(5, e, e.return));
        break;
      case 1:
        Ht(t, e), Vt(e), l & 512 && ($e || a === null || hn(a, a.return)), l & 64 && Nn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var u = un;
        if (Ht(t, e), Vt(e), l & 512 && ($e || a === null || hn(a, a.return)), l & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (l) {
                    case "title":
                      c = u.getElementsByTagName("title")[0], (!c || c[ji] || c[ht] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(l), u.head.insertBefore(
                        c,
                        u.querySelector("head > title")
                      )), mt(c, l, a), c[ht] = e, ut(c), l = c;
                      break e;
                    case "link":
                      var b = Lm(
                        "link",
                        "href",
                        u
                      ).get(l + (a.href || ""));
                      if (b) {
                        for (var v = 0; v < b.length; v++)
                          if (c = b[v], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            b.splice(v, 1);
                            break t;
                          }
                      }
                      c = u.createElement(l), mt(c, l, a), u.head.appendChild(c);
                      break;
                    case "meta":
                      if (b = Lm(
                        "meta",
                        "content",
                        u
                      ).get(l + (a.content || ""))) {
                        for (v = 0; v < b.length; v++)
                          if (c = b[v], c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            b.splice(v, 1);
                            break t;
                          }
                      }
                      c = u.createElement(l), mt(c, l, a), u.head.appendChild(c);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  c[ht] = e, ut(c), l = c;
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
            c !== l ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, l === null ? Bm(
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
        Ht(t, e), Vt(e), l & 512 && ($e || a === null || hn(a, a.return)), a !== null && l & 4 && rs(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Ht(t, e), Vt(e), l & 512 && ($e || a === null || hn(a, a.return)), e.flags & 32) {
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
        if (Wr = null, u = un, un = Zr(t.containerInfo), Ht(t, e), un = u, Vt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ol(t.containerInfo);
          } catch (M) {
            Ge(e, e.return, M);
          }
        ss && (ss = !1, Qp(e));
        break;
      case 4:
        l = un, un = Zr(
          e.stateNode.containerInfo
        ), Ht(t, e), Vt(e), un = l;
        break;
      case 12:
        Ht(t, e), Vt(e);
        break;
      case 13:
        Ht(t, e), Vt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (gs = Ut()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, cs(e, l)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var A = a !== null && a.memoizedState !== null, R = Nn, V = $e;
        if (Nn = R || u, $e = V || A, Ht(t, e), $e = V, Nn = R, Vt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || A || Nn || $e || ka(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                A = a = t;
                try {
                  if (c = A.stateNode, u)
                    b = c.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none";
                  else {
                    v = A.stateNode;
                    var G = A.memoizedProps.style, _ = G != null && G.hasOwnProperty("display") ? G.display : null;
                    v.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
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
            var u = a.stateNode, c = os(e);
            Br(e, c, u);
            break;
          case 5:
            var b = a.stateNode;
            a.flags & 32 && (Ga(b, ""), a.flags &= -33);
            var v = os(e);
            Br(e, v, b);
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
      } catch (V) {
        Ge(e, e.return, V);
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
  function Jn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        jp(e, t.alternate, t), t = t.sibling;
  }
  function ka(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zn(4, t, t.return), ka(t);
          break;
        case 1:
          hn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Mp(
            t,
            t.return,
            a
          ), ka(t);
          break;
        case 27:
          El(t.stateNode);
        case 26:
        case 5:
          hn(t, t.return), ka(t);
          break;
        case 22:
          t.memoizedState === null && ka(t);
          break;
        case 30:
          ka(t);
          break;
        default:
          ka(t);
      }
      e = e.sibling;
    }
  }
  function Wn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, u = e, c = t, b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Wn(
            u,
            c,
            a
          ), pl(4, c);
          break;
        case 1:
          if (Wn(
            u,
            c,
            a
          ), l = c, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (R) {
              Ge(l, l.return, R);
            }
          if (l = c, u = l.updateQueue, u !== null) {
            var v = l.stateNode;
            try {
              var A = u.shared.hiddenCallbacks;
              if (A !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < A.length; u++)
                  bd(A[u], v);
            } catch (R) {
              Ge(l, l.return, R);
            }
          }
          a && b & 64 && _p(c), ml(c, c.return);
          break;
        case 27:
          Lp(c);
        case 26:
        case 5:
          Wn(
            u,
            c,
            a
          ), a && l === null && b & 4 && Np(c), ml(c, c.return);
          break;
        case 12:
          Wn(
            u,
            c,
            a
          );
          break;
        case 13:
          Wn(
            u,
            c,
            a
          ), a && b & 4 && Vp(u, c);
          break;
        case 22:
          c.memoizedState === null && Wn(
            u,
            c,
            a
          ), ml(c, c.return);
          break;
        case 30:
          break;
        default:
          Wn(
            u,
            c,
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
  function gn(e, t, a, l) {
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
        gn(
          e,
          t,
          a,
          l
        ), u & 2048 && pl(9, t);
        break;
      case 1:
        gn(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        gn(
          e,
          t,
          a,
          l
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $i(e)));
        break;
      case 12:
        if (u & 2048) {
          gn(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, b = c.id, v = c.onPostCommit;
            typeof v == "function" && v(
              b,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (A) {
            Ge(t, t.return, A);
          }
        } else
          gn(
            e,
            t,
            a,
            l
          );
        break;
      case 13:
        gn(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, b = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? gn(
          e,
          t,
          a,
          l
        ) : hl(e, t) : c._visibility & 2 ? gn(
          e,
          t,
          a,
          l
        ) : (c._visibility |= 2, si(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0
        )), u & 2048 && fs(b, t);
        break;
      case 24:
        gn(
          e,
          t,
          a,
          l
        ), u & 2048 && ds(t.alternate, t);
        break;
      default:
        gn(
          e,
          t,
          a,
          l
        );
    }
  }
  function si(e, t, a, l, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e, b = t, v = a, A = l, R = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          si(
            c,
            b,
            v,
            A,
            u
          ), pl(8, b);
          break;
        case 23:
          break;
        case 22:
          var V = b.stateNode;
          b.memoizedState !== null ? V._visibility & 2 ? si(
            c,
            b,
            v,
            A,
            u
          ) : hl(
            c,
            b
          ) : (V._visibility |= 2, si(
            c,
            b,
            v,
            A,
            u
          )), u && R & 2048 && fs(
            b.alternate,
            b
          );
          break;
        case 24:
          si(
            c,
            b,
            v,
            A,
            u
          ), u && R & 2048 && ds(b.alternate, b);
          break;
        default:
          si(
            c,
            b,
            v,
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
        Yp(e), e = e.sibling;
  }
  function Yp(e) {
    switch (e.tag) {
      case 26:
        ci(e), e.flags & gl && e.memoizedState !== null && Y0(
          un,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ci(e);
        break;
      case 3:
      case 4:
        var t = un;
        un = Zr(e.stateNode.containerInfo), ci(e), un = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = gl, gl = 16777216, ci(e), gl = t) : ci(e));
        break;
      default:
        ci(e);
    }
  }
  function Fp(e) {
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
          ct = l, Pp(
            l,
            e
          );
        }
      Fp(e);
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
        yl(e), e.flags & 2048 && Zn(9, e, e.return);
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
          ct = l, Pp(
            l,
            e
          );
        }
      Fp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Zn(8, t, t.return), jr(t);
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
    for (; ct !== null; ) {
      var a = ct;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Zn(8, a, t);
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
      if (l = a.child, l !== null) l.return = a, ct = l;
      else
        e: for (a = e; ct !== null; ) {
          l = ct;
          var u = l.sibling, c = l.return;
          if (qp(l), l === a) {
            ct = null;
            break e;
          }
          if (u !== null) {
            u.return = c, ct = u;
            break e;
          }
          ct = c;
        }
    }
  }
  var o0 = {
    getCacheForType: function(e) {
      var t = gt(it), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, u0 = typeof WeakMap == "function" ? WeakMap : Map, qe = 0, Ye = null, De = null, Ne = 0, He = 0, It = null, $n = !1, fi = !1, ps = !1, Ln = 0, Je = 0, ea = 0, za = 0, ms = 0, tn = 0, di = 0, bl = null, kt = null, hs = !1, gs = 0, qr = 1 / 0, Hr = null, ta = null, pt = 0, na = null, pi = null, mi = 0, ys = 0, bs = null, Kp = null, vl = 0, vs = null;
  function Qt() {
    if ((qe & 2) !== 0 && Ne !== 0)
      return Ne & -Ne;
    if (O.T !== null) {
      var e = ti;
      return e !== 0 ? e : Cs();
    }
    return ff();
  }
  function Zp() {
    tn === 0 && (tn = (Ne & 536870912) === 0 || Le ? of() : 536870912);
    var e = en.current;
    return e !== null && (e.flags |= 32), tn;
  }
  function Gt(e, t, a) {
    (e === Ye && (He === 2 || He === 9) || e.cancelPendingCommit !== null) && (hi(e, 0), aa(
      e,
      Ne,
      tn,
      !1
    )), Bi(e, a), ((qe & 2) === 0 || e !== Ye) && (e === Ye && ((qe & 2) === 0 && (za |= a), Je === 4 && aa(
      e,
      Ne,
      tn,
      !1
    )), yn(e));
  }
  function Jp(e, t, a) {
    if ((qe & 6) !== 0) throw Error(o(327));
    var l = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Xt(e, t), u = l ? f0(e, t) : ws(e, t, !0), c = l;
    do {
      if (u === 0) {
        fi && !l && aa(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, c && !s0(a)) {
          u = ws(e, t, !1), c = !1;
          continue;
        }
        if (u === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var b = 0;
          else
            b = e.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
          if (b !== 0) {
            t = b;
            e: {
              var v = e;
              u = bl;
              var A = v.current.memoizedState.isDehydrated;
              if (A && (hi(v, b).flags |= 256), b = ws(
                v,
                b,
                !1
              ), b !== 2) {
                if (ps && !A) {
                  v.errorRecoveryDisabledLanes |= c, za |= c, u = 4;
                  break e;
                }
                c = kt, kt = u, c !== null && (kt === null ? kt = c : kt.push.apply(
                  kt,
                  c
                ));
              }
              u = b;
            }
            if (c = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          hi(e, 0), aa(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, c = u, c) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              aa(
                l,
                t,
                tn,
                !$n
              );
              break e;
            case 2:
              kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = gs + 300 - Ut(), 10 < u)) {
            if (aa(
              l,
              t,
              tn,
              !$n
            ), ot(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Cm(
              Wp.bind(
                null,
                l,
                a,
                kt,
                Hr,
                hs,
                t,
                tn,
                za,
                di,
                $n,
                c,
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
            kt,
            Hr,
            hs,
            t,
            tn,
            za,
            di,
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
    yn(e);
  }
  function Wp(e, t, a, l, u, c, b, v, A, R, V, G, _, M) {
    if (e.timeoutHandle = -1, G = t.subtreeFlags, (G & 8192 || (G & 16785408) === 16785408) && (Cl = { stylesheets: null, count: 0, unsuspend: G0 }, Yp(t), G = F0(), G !== null)) {
      e.cancelPendingCommit = G(
        lm.bind(
          null,
          e,
          t,
          c,
          a,
          l,
          u,
          b,
          v,
          A,
          V,
          1,
          _,
          M
        )
      ), aa(e, c, b, !R);
      return;
    }
    lm(
      e,
      t,
      c,
      a,
      l,
      u,
      b,
      v,
      A
    );
  }
  function s0(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var u = a[l], c = u.getSnapshot;
          u = u.value;
          try {
            if (!jt(c(), u)) return !1;
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
  function aa(e, t, a, l) {
    t &= ~ms, t &= ~za, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var c = 31 - ye(u), b = 1 << c;
      l[c] = -1, u &= ~b;
    }
    a !== 0 && sf(e, a, t);
  }
  function Vr() {
    return (qe & 6) === 0 ? (Sl(0), !1) : !0;
  }
  function Ss() {
    if (De !== null) {
      if (He === 0)
        var e = De.return;
      else
        e = De, zn = wa = null, Bu(e), oi = null, cl = 0, e = De;
      for (; e !== null; )
        Op(e.alternate, e), e = e.return;
      De = null;
    }
  }
  function hi(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, k0(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ss(), Ye = e, De = a = Tn(e.current, null), Ne = t, He = 0, It = null, $n = !1, fi = Xt(e, t), ps = !1, di = tn = ms = za = ea = Je = 0, kt = bl = null, hs = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - ye(l), c = 1 << u;
        t |= e[u], l &= ~c;
      }
    return Ln = t, sr(), a;
  }
  function $p(e, t) {
    Ce = null, O.H = zr, t === tl || t === br ? (t = gd(), He = 3) : t === pd ? (t = gd(), He = 4) : He = t === yp ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, It = t, De === null && (Je = 1, Mr(
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
    return O.A = o0, e;
  }
  function xs() {
    Je = 4, $n || (Ne & 4194048) !== Ne && en.current !== null || (fi = !0), (ea & 134217727) === 0 && (za & 134217727) === 0 || Ye === null || aa(
      Ye,
      Ne,
      tn,
      !1
    );
  }
  function ws(e, t, a) {
    var l = qe;
    qe |= 2;
    var u = em(), c = tm();
    (Ye !== e || Ne !== t) && (Hr = null, hi(e, t)), t = !1;
    var b = Je;
    e: do
      try {
        if (He !== 0 && De !== null) {
          var v = De, A = It;
          switch (He) {
            case 8:
              Ss(), b = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              en.current === null && (t = !0);
              var R = He;
              if (He = 0, It = null, gi(e, v, A, R), a && fi) {
                b = 0;
                break e;
              }
              break;
            default:
              R = He, He = 0, It = null, gi(e, v, A, R);
          }
        }
        c0(), b = Je;
        break;
      } catch (V) {
        $p(e, V);
      }
    while (!0);
    return t && e.shellSuspendCounter++, zn = wa = null, qe = l, O.H = u, O.A = c, De === null && (Ye = null, Ne = 0, sr()), b;
  }
  function c0() {
    for (; De !== null; ) nm(De);
  }
  function f0(e, t) {
    var a = qe;
    qe |= 2;
    var l = em(), u = tm();
    Ye !== e || Ne !== t ? (Hr = null, qr = Ut() + 500, hi(e, t)) : fi = Xt(
      e,
      t
    );
    e: do
      try {
        if (He !== 0 && De !== null) {
          t = De;
          var c = It;
          t: switch (He) {
            case 1:
              He = 0, It = null, gi(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (md(c)) {
                He = 0, It = null, am(t);
                break;
              }
              t = function() {
                He !== 2 && He !== 9 || Ye !== e || (He = 7), yn(e);
              }, c.then(t, t);
              break e;
            case 3:
              He = 7;
              break e;
            case 4:
              He = 5;
              break e;
            case 7:
              md(c) ? (He = 0, It = null, am(t)) : (He = 0, It = null, gi(e, t, c, 7));
              break;
            case 5:
              var b = null;
              switch (De.tag) {
                case 26:
                  b = De.memoizedState;
                case 5:
                case 27:
                  var v = De;
                  if (!b || jm(b)) {
                    He = 0, It = null;
                    var A = v.sibling;
                    if (A !== null) De = A;
                    else {
                      var R = v.return;
                      R !== null ? (De = R, Ir(R)) : De = null;
                    }
                    break t;
                  }
              }
              He = 0, It = null, gi(e, t, c, 5);
              break;
            case 6:
              He = 0, It = null, gi(e, t, c, 6);
              break;
            case 8:
              Ss(), Je = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        d0();
        break;
      } catch (V) {
        $p(e, V);
      }
    while (!0);
    return zn = wa = null, O.H = l, O.A = u, qe = a, De !== null ? 0 : (Ye = null, Ne = 0, sr(), Je);
  }
  function d0() {
    for (; De !== null && !Kl(); )
      nm(De);
  }
  function nm(e) {
    var t = Rp(e.alternate, e, Ln);
    e.memoizedProps = e.pendingProps, t === null ? Ir(e) : De = t;
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
          Ne
        );
        break;
      case 11:
        t = Ep(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ne
        );
        break;
      case 5:
        Bu(t);
      default:
        Op(a, t), t = De = id(t, Ln), t = Rp(a, t, Ln);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ir(e) : De = t;
  }
  function gi(e, t, a, l) {
    zn = wa = null, Bu(t), oi = null, cl = 0;
    var u = t.return;
    try {
      if (t0(
        e,
        u,
        t,
        a,
        Ne
      )) {
        Je = 1, Mr(
          e,
          Zt(a, e.current)
        ), De = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw De = u, c;
      Je = 1, Mr(
        e,
        Zt(a, e.current)
      ), De = null;
      return;
    }
    t.flags & 32768 ? (Le || l === 1 ? e = !0 : fi || (Ne & 536870912) !== 0 ? e = !1 : ($n = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = en.current, l !== null && l.tag === 13 && (l.flags |= 16384))), im(t, e)) : Ir(t);
  }
  function Ir(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        im(
          t,
          $n
        );
        return;
      }
      e = t.return;
      var a = a0(
        t.alternate,
        t,
        Ln
      );
      if (a !== null) {
        De = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function im(e, t) {
    do {
      var a = i0(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, De = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        De = e;
        return;
      }
      De = e = a;
    } while (e !== null);
    Je = 6, De = null;
  }
  function lm(e, t, a, l, u, c, b, v, A) {
    e.cancelPendingCommit = null;
    do
      Qr();
    while (pt !== 0);
    if ((qe & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (c = t.lanes | t.childLanes, c |= du, Gy(
        e,
        a,
        c,
        b,
        v,
        A
      ), e === Ye && (De = Ye = null, Ne = 0), pi = t, na = e, mi = a, ys = c, bs = u, Kp = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, g0(La, function() {
        return cm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = O.T, O.T = null, u = F.p, F.p = 2, b = qe, qe |= 4;
        try {
          l0(e, t, a);
        } finally {
          qe = b, F.p = u, O.T = l;
        }
      }
      pt = 1, rm(), om(), um();
    }
  }
  function rm() {
    if (pt === 1) {
      pt = 0;
      var e = na, t = pi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = O.T, O.T = null;
        var l = F.p;
        F.p = 2;
        var u = qe;
        qe |= 4;
        try {
          Ip(t, e);
          var c = Ns, b = Pf(e.containerInfo), v = c.focusedElem, A = c.selectionRange;
          if (b !== v && v && v.ownerDocument && Xf(
            v.ownerDocument.documentElement,
            v
          )) {
            if (A !== null && ou(v)) {
              var R = A.start, V = A.end;
              if (V === void 0 && (V = R), "selectionStart" in v)
                v.selectionStart = R, v.selectionEnd = Math.min(
                  V,
                  v.value.length
                );
              else {
                var G = v.ownerDocument || document, _ = G && G.defaultView || window;
                if (_.getSelection) {
                  var M = _.getSelection(), ve = v.textContent.length, he = Math.min(A.start, ve), Qe = A.end === void 0 ? he : Math.min(A.end, ve);
                  !M.extend && he > Qe && (b = Qe, Qe = he, he = b);
                  var C = Ff(
                    v,
                    he
                  ), T = Ff(
                    v,
                    Qe
                  );
                  if (C && T && (M.rangeCount !== 1 || M.anchorNode !== C.node || M.anchorOffset !== C.offset || M.focusNode !== T.node || M.focusOffset !== T.offset)) {
                    var z = G.createRange();
                    z.setStart(C.node, C.offset), M.removeAllRanges(), he > Qe ? (M.addRange(z), M.extend(T.node, T.offset)) : (z.setEnd(T.node, T.offset), M.addRange(z));
                  }
                }
              }
            }
            for (G = [], M = v; M = M.parentNode; )
              M.nodeType === 1 && G.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < G.length; v++) {
              var I = G[v];
              I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
            }
          }
          to = !!Ms, Ns = Ms = null;
        } finally {
          qe = u, F.p = l, O.T = a;
        }
      }
      e.current = t, pt = 2;
    }
  }
  function om() {
    if (pt === 2) {
      pt = 0;
      var e = na, t = pi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = O.T, O.T = null;
        var l = F.p;
        F.p = 2;
        var u = qe;
        qe |= 4;
        try {
          jp(e, t.alternate, t);
        } finally {
          qe = u, F.p = l, O.T = a;
        }
      }
      pt = 3;
    }
  }
  function um() {
    if (pt === 4 || pt === 3) {
      pt = 0, Zl();
      var e = na, t = pi, a = mi, l = Kp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? pt = 5 : (pt = 0, pi = na = null, sm(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (ta = null), Ho(a), t = t.stateNode, K && typeof K.onCommitFiberRoot == "function")
        try {
          K.onCommitFiberRoot(
            H,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = O.T, u = F.p, F.p = 2, O.T = null;
        try {
          for (var c = e.onRecoverableError, b = 0; b < l.length; b++) {
            var v = l[b];
            c(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          O.T = t, F.p = u;
        }
      }
      (mi & 3) !== 0 && Qr(), yn(e), u = e.pendingLanes, (a & 4194090) !== 0 && (u & 42) !== 0 ? e === vs ? vl++ : (vl = 0, vs = e) : vl = 0, Sl(0);
    }
  }
  function sm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, $i(t)));
  }
  function Qr(e) {
    return rm(), om(), um(), cm();
  }
  function cm() {
    if (pt !== 5) return !1;
    var e = na, t = ys;
    ys = 0;
    var a = Ho(mi), l = O.T, u = F.p;
    try {
      F.p = 32 > a ? 32 : a, O.T = null, a = bs, bs = null;
      var c = na, b = mi;
      if (pt = 0, pi = na = null, mi = 0, (qe & 6) !== 0) throw Error(o(331));
      var v = qe;
      if (qe |= 4, Xp(c.current), Gp(
        c,
        c.current,
        b,
        a
      ), qe = v, Sl(0, !1), K && typeof K.onPostCommitFiberRoot == "function")
        try {
          K.onPostCommitFiberRoot(H, c);
        } catch {
        }
      return !0;
    } finally {
      F.p = u, O.T = l, sm(e, t);
    }
  }
  function fm(e, t, a) {
    t = Zt(a, t), t = Ju(e.stateNode, t, 2), e = Fn(e, t, 2), e !== null && (Bi(e, 2), yn(e));
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ta === null || !ta.has(l))) {
            e = Zt(a, e), a = hp(2), l = Fn(t, a, 2), l !== null && (gp(
              a,
              l,
              t,
              e
            ), Bi(l, 2), yn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Es(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new u0();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else
      u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(a) || (ps = !0, u.add(a), e = p0.bind(null, e, t, a), t.then(e, e));
  }
  function p0(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ye === e && (Ne & a) === a && (Je === 4 || Je === 3 && (Ne & 62914560) === Ne && 300 > Ut() - gs ? (qe & 2) === 0 && hi(e, 0) : ms |= a, di === Ne && (di = 0)), yn(e);
  }
  function dm(e, t) {
    t === 0 && (t = uf()), e = Ja(e, t), e !== null && (Bi(e, t), yn(e));
  }
  function m0(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), dm(e, a);
  }
  function h0(e, t) {
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
  function g0(e, t) {
    return Mi(e, t);
  }
  var Gr = null, yi = null, As = !1, Yr = !1, Ts = !1, Ra = 0;
  function yn(e) {
    e !== yi && e.next === null && (yi === null ? Gr = yi = e : yi = yi.next = e), Yr = !0, As || (As = !0, b0());
  }
  function Sl(e, t) {
    if (!Ts && Yr) {
      Ts = !0;
      do
        for (var a = !1, l = Gr; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var b = l.suspendedLanes, v = l.pingedLanes;
              c = (1 << 31 - ye(42 | e) + 1) - 1, c &= u & ~(b & ~v), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, gm(l, c));
          } else
            c = Ne, c = ot(
              l,
              l === Ye ? c : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (c & 3) === 0 || Xt(l, c) || (a = !0, gm(l, c));
          l = l.next;
        }
      while (a);
      Ts = !1;
    }
  }
  function y0() {
    pm();
  }
  function pm() {
    Yr = As = !1;
    var e = 0;
    Ra !== 0 && (C0() && (e = Ra), Ra = 0);
    for (var t = Ut(), a = null, l = Gr; l !== null; ) {
      var u = l.next, c = mm(l, t);
      c === 0 ? (l.next = null, a === null ? Gr = u : a.next = u, u === null && (yi = a)) : (a = l, (e !== 0 || (c & 3) !== 0) && (Yr = !0)), l = u;
    }
    Sl(e);
  }
  function mm(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var b = 31 - ye(c), v = 1 << b, A = u[b];
      A === -1 ? ((v & a) === 0 || (v & l) !== 0) && (u[b] = rn(v, t)) : A <= t && (e.expiredLanes |= v), c &= ~v;
    }
    if (t = Ye, a = Ne, a = ot(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (He === 2 || He === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ni(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Xt(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Ni(l), Ho(a)) {
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
      return l = hm.bind(null, e), a = Mi(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Ni(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function hm(e, t) {
    if (pt !== 0 && pt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Qr() && e.callbackNode !== a)
      return null;
    var l = Ne;
    return l = ot(
      e,
      e === Ye ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Jp(e, l, t), mm(e, Ut()), e.callbackNode != null && e.callbackNode === a ? hm.bind(null, e) : null);
  }
  function gm(e, t) {
    if (Qr()) return null;
    Jp(e, t, !0);
  }
  function b0() {
    z0(function() {
      (qe & 6) !== 0 ? Mi(
        Ui,
        y0
      ) : pm();
    });
  }
  function Cs() {
    return Ra === 0 && (Ra = of()), Ra;
  }
  function ym(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : nr("" + e);
  }
  function bm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function v0(e, t, a, l, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var c = ym(
        (u[Et] || null).action
      ), b = l.submitter;
      b && (t = (t = b[Et] || null) ? ym(t.formAction) : b.getAttribute("formAction"), t !== null && (c = t, b = null));
      var v = new rr(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ra !== 0) {
                  var A = b ? bm(u, b) : new FormData(u);
                  Fu(
                    a,
                    {
                      pending: !0,
                      data: A,
                      method: u.method,
                      action: c
                    },
                    null,
                    A
                  );
                }
              } else
                typeof c == "function" && (v.preventDefault(), A = b ? bm(u, b) : new FormData(u), Fu(
                  a,
                  {
                    pending: !0,
                    data: A,
                    method: u.method,
                    action: c
                  },
                  c,
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
    var zs = fu[ks], S0 = zs.toLowerCase(), x0 = zs[0].toUpperCase() + zs.slice(1);
    on(
      S0,
      "on" + x0
    );
  }
  on(Jf, "onAnimationEnd"), on(Wf, "onAnimationIteration"), on($f, "onAnimationStart"), on("dblclick", "onDoubleClick"), on("focusin", "onFocus"), on("focusout", "onBlur"), on(jb, "onTransitionRun"), on(qb, "onTransitionStart"), on(Hb, "onTransitionCancel"), on(ed, "onTransitionEnd"), Va("onMouseEnter", ["mouseout", "mouseover"]), Va("onMouseLeave", ["mouseout", "mouseover"]), Va("onPointerEnter", ["pointerout", "pointerover"]), Va("onPointerLeave", ["pointerout", "pointerover"]), pa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), pa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), pa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), pa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), pa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), pa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var xl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), w0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl)
  );
  function vm(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], u = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var b = l.length - 1; 0 <= b; b--) {
            var v = l[b], A = v.instance, R = v.currentTarget;
            if (v = v.listener, A !== c && u.isPropagationStopped())
              break e;
            c = v, u.currentTarget = R;
            try {
              c(u);
            } catch (V) {
              _r(V);
            }
            u.currentTarget = null, c = A;
          }
        else
          for (b = 0; b < l.length; b++) {
            if (v = l[b], A = v.instance, R = v.currentTarget, v = v.listener, A !== c && u.isPropagationStopped())
              break e;
            c = v, u.currentTarget = R;
            try {
              c(u);
            } catch (V) {
              _r(V);
            }
            u.currentTarget = null, c = A;
          }
      }
    }
  }
  function Oe(e, t) {
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
  var Fr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ds(e) {
    if (!e[Fr]) {
      e[Fr] = !0, pf.forEach(function(a) {
        a !== "selectionchange" && (w0.has(a) || Rs(a, !1, e), Rs(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Fr] || (t[Fr] = !0, Rs("selectionchange", !1, t));
    }
  }
  function Sm(e, t, a, l) {
    switch (Gm(t)) {
      case 2:
        var u = K0;
        break;
      case 8:
        u = Z0;
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
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var b = l.tag;
        if (b === 3 || b === 4) {
          var v = l.stateNode.containerInfo;
          if (v === u) break;
          if (b === 4)
            for (b = l.return; b !== null; ) {
              var A = b.tag;
              if ((A === 3 || A === 4) && b.stateNode.containerInfo === u)
                return;
              b = b.return;
            }
          for (; v !== null; ) {
            if (b = ja(v), b === null) return;
            if (A = b.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              l = c = b;
              continue e;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    kf(function() {
      var R = c, V = Zo(a), G = [];
      e: {
        var _ = td.get(e);
        if (_ !== void 0) {
          var M = rr, ve = e;
          switch (e) {
            case "keypress":
              if (ir(a) === 0) break e;
            case "keydown":
            case "keyup":
              M = gb;
              break;
            case "focusin":
              ve = "focus", M = nu;
              break;
            case "focusout":
              ve = "blur", M = nu;
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
              M = ib;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = vb;
              break;
            case Jf:
            case Wf:
            case $f:
              M = ob;
              break;
            case ed:
              M = xb;
              break;
            case "scroll":
            case "scrollend":
              M = nb;
              break;
            case "wheel":
              M = Eb;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = sb;
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
              M = Tb;
          }
          var he = (t & 4) !== 0, Qe = !he && (e === "scroll" || e === "scrollend"), C = he ? _ !== null ? _ + "Capture" : null : _;
          he = [];
          for (var T = R, z; T !== null; ) {
            var I = T;
            if (z = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || z === null || C === null || (I = Hi(T, C), I != null && he.push(
              wl(T, I, z)
            )), Qe) break;
            T = T.return;
          }
          0 < he.length && (_ = new M(
            _,
            ve,
            null,
            a,
            V
          ), G.push({ event: _, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", _ && a !== Ko && (ve = a.relatedTarget || a.fromElement) && (ja(ve) || ve[Ba]))
            break e;
          if ((M || _) && (_ = V.window === V ? V : (_ = V.ownerDocument) ? _.defaultView || _.parentWindow : window, M ? (ve = a.relatedTarget || a.toElement, M = R, ve = ve ? ja(ve) : null, ve !== null && (Qe = f(ve), he = ve.tag, ve !== Qe || he !== 5 && he !== 27 && he !== 6) && (ve = null)) : (M = null, ve = R), M !== ve)) {
            if (he = Df, I = "onMouseLeave", C = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (he = _f, I = "onPointerLeave", C = "onPointerEnter", T = "pointer"), Qe = M == null ? _ : qi(M), z = ve == null ? _ : qi(ve), _ = new he(
              I,
              T + "leave",
              M,
              a,
              V
            ), _.target = Qe, _.relatedTarget = z, I = null, ja(V) === R && (he = new he(
              C,
              T + "enter",
              ve,
              a,
              V
            ), he.target = z, he.relatedTarget = Qe, I = he), Qe = I, M && ve)
              t: {
                for (he = M, C = ve, T = 0, z = he; z; z = bi(z))
                  T++;
                for (z = 0, I = C; I; I = bi(I))
                  z++;
                for (; 0 < T - z; )
                  he = bi(he), T--;
                for (; 0 < z - T; )
                  C = bi(C), z--;
                for (; T--; ) {
                  if (he === C || C !== null && he === C.alternate)
                    break t;
                  he = bi(he), C = bi(C);
                }
                he = null;
              }
            else he = null;
            M !== null && xm(
              G,
              _,
              M,
              he,
              !1
            ), ve !== null && Qe !== null && xm(
              G,
              Qe,
              ve,
              he,
              !0
            );
          }
        }
        e: {
          if (_ = R ? qi(R) : window, M = _.nodeName && _.nodeName.toLowerCase(), M === "select" || M === "input" && _.type === "file")
            var oe = Hf;
          else if (jf(_))
            if (Vf)
              oe = Ub;
            else {
              oe = Mb;
              var Re = _b;
            }
          else
            M = _.nodeName, !M || M.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? R && Po(R.elementType) && (oe = Hf) : oe = Nb;
          if (oe && (oe = oe(e, R))) {
            qf(
              G,
              oe,
              a,
              V
            );
            break e;
          }
          Re && Re(e, _, R), e === "focusout" && R && _.type === "number" && R.memoizedProps.value != null && Xo(_, "number", _.value);
        }
        switch (Re = R ? qi(R) : window, e) {
          case "focusin":
            (jf(Re) || Re.contentEditable === "true") && (Pa = Re, uu = R, Pi = null);
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
            su = !1, Kf(G, a, V);
            break;
          case "selectionchange":
            if (Bb) break;
          case "keydown":
          case "keyup":
            Kf(G, a, V);
        }
        var pe;
        if (iu)
          e: {
            switch (e) {
              case "compositionstart":
                var ge = "onCompositionStart";
                break e;
              case "compositionend":
                ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ge = "onCompositionUpdate";
                break e;
            }
            ge = void 0;
          }
        else
          Xa ? Lf(e, a) && (ge = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ge = "onCompositionStart");
        ge && (Mf && a.locale !== "ko" && (Xa || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Xa && (pe = zf()) : (In = V, $o = "value" in In ? In.value : In.textContent, Xa = !0)), Re = Xr(R, ge), 0 < Re.length && (ge = new Of(
          ge,
          e,
          null,
          a,
          V
        ), G.push({ event: ge, listeners: Re }), pe ? ge.data = pe : (pe = Bf(a), pe !== null && (ge.data = pe)))), (pe = kb ? zb(e, a) : Rb(e, a)) && (ge = Xr(R, "onBeforeInput"), 0 < ge.length && (Re = new Of(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          V
        ), G.push({
          event: Re,
          listeners: ge
        }), Re.data = pe)), v0(
          G,
          e,
          R,
          a,
          V
        );
      }
      vm(G, t);
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
      var u = e, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Hi(e, a), u != null && l.unshift(
        wl(e, u, c)
      ), u = Hi(e, t), u != null && l.push(
        wl(e, u, c)
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
    for (var c = t._reactName, b = []; a !== null && a !== l; ) {
      var v = a, A = v.alternate, R = v.stateNode;
      if (v = v.tag, A !== null && A === l) break;
      v !== 5 && v !== 26 && v !== 27 || R === null || (A = R, u ? (R = Hi(a, c), R != null && b.unshift(
        wl(a, R, A)
      )) : u || (R = Hi(a, c), R != null && b.push(
        wl(a, R, A)
      ))), a = a.return;
    }
    b.length !== 0 && e.push({ event: t, listeners: b });
  }
  var E0 = /\r\n?/g, A0 = /\u0000|\uFFFD/g;
  function wm(e) {
    return (typeof e == "string" ? e : "" + e).replace(E0, `
`).replace(A0, "");
  }
  function Em(e, t) {
    return t = wm(t), wm(e) === t;
  }
  function Pr() {
  }
  function Ie(e, t, a, l, u, c) {
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
        Tf(e, l, c);
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
          typeof c == "function" && (a === "formAction" ? (t !== "input" && Ie(e, t, "name", u.name, u, null), Ie(
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
        l != null && Oe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Oe("scrollend", e);
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
        Oe("beforetoggle", e), Oe("toggle", e), Wl(e, "popover", l);
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
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = eb.get(a) || a, Wl(e, a, l));
    }
  }
  function _s(e, t, a, l, u, c) {
    switch (a) {
      case "style":
        Tf(e, l, c);
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
        l != null && Oe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Oe("scrollend", e);
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
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), c = e[Et] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, u), typeof l == "function")) {
              typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, u);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Wl(e, a, l);
          }
    }
  }
  function mt(e, t, a) {
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
        var l = !1, u = !1, c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var b = a[c];
            if (b != null)
              switch (c) {
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
                  Ie(e, t, c, b, a, null);
              }
          }
        u && Ie(e, t, "srcSet", a.srcSet, a, null), l && Ie(e, t, "src", a.src, a, null);
        return;
      case "input":
        Oe("invalid", e);
        var v = c = b = u = null, A = null, R = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var V = a[l];
            if (V != null)
              switch (l) {
                case "name":
                  u = V;
                  break;
                case "type":
                  b = V;
                  break;
                case "checked":
                  A = V;
                  break;
                case "defaultChecked":
                  R = V;
                  break;
                case "value":
                  c = V;
                  break;
                case "defaultValue":
                  v = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Ie(e, t, l, V, a, null);
              }
          }
        xf(
          e,
          c,
          v,
          A,
          R,
          b,
          u,
          !1
        ), er(e);
        return;
      case "select":
        Oe("invalid", e), l = b = c = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (v = a[u], v != null))
            switch (u) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                b = v;
                break;
              case "multiple":
                l = v;
              default:
                Ie(e, t, u, v, a, null);
            }
        t = c, a = b, e.multiple = !!l, t != null ? Qa(e, !!l, t, !1) : a != null && Qa(e, !!l, a, !0);
        return;
      case "textarea":
        Oe("invalid", e), c = u = l = null;
        for (b in a)
          if (a.hasOwnProperty(b) && (v = a[b], v != null))
            switch (b) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                u = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(o(91));
                break;
              default:
                Ie(e, t, b, v, a, null);
            }
        Ef(e, l, u, c), er(e);
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
        Oe("beforetoggle", e), Oe("toggle", e), Oe("cancel", e), Oe("close", e);
        break;
      case "iframe":
      case "object":
        Oe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < xl.length; l++)
          Oe(xl[l], e);
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
          for (V in a)
            a.hasOwnProperty(V) && (l = a[V], l !== void 0 && _s(
              e,
              t,
              V,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (v in a)
      a.hasOwnProperty(v) && (l = a[v], l != null && Ie(e, t, v, l, a, null));
  }
  function T0(e, t, a, l) {
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
        var u = null, c = null, b = null, v = null, A = null, R = null, V = null;
        for (M in a) {
          var G = a[M];
          if (a.hasOwnProperty(M) && G != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = G;
              default:
                l.hasOwnProperty(M) || Ie(e, t, M, null, l, G);
            }
        }
        for (var _ in l) {
          var M = l[_];
          if (G = a[_], l.hasOwnProperty(_) && (M != null || G != null))
            switch (_) {
              case "type":
                c = M;
                break;
              case "name":
                u = M;
                break;
              case "checked":
                R = M;
                break;
              case "defaultChecked":
                V = M;
                break;
              case "value":
                b = M;
                break;
              case "defaultValue":
                v = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, t));
                break;
              default:
                M !== G && Ie(
                  e,
                  t,
                  _,
                  M,
                  l,
                  G
                );
            }
        }
        Fo(
          e,
          b,
          v,
          A,
          R,
          V,
          c,
          u
        );
        return;
      case "select":
        M = b = v = _ = null;
        for (c in a)
          if (A = a[c], a.hasOwnProperty(c) && A != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                M = A;
              default:
                l.hasOwnProperty(c) || Ie(
                  e,
                  t,
                  c,
                  null,
                  l,
                  A
                );
            }
        for (u in l)
          if (c = l[u], A = a[u], l.hasOwnProperty(u) && (c != null || A != null))
            switch (u) {
              case "value":
                _ = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                b = c;
              default:
                c !== A && Ie(
                  e,
                  t,
                  u,
                  c,
                  l,
                  A
                );
            }
        t = v, a = b, l = M, _ != null ? Qa(e, !!a, _, !1) : !!l != !!a && (t != null ? Qa(e, !!a, t, !0) : Qa(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        M = _ = null;
        for (v in a)
          if (u = a[v], a.hasOwnProperty(v) && u != null && !l.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ie(e, t, v, null, l, u);
            }
        for (b in l)
          if (u = l[b], c = a[b], l.hasOwnProperty(b) && (u != null || c != null))
            switch (b) {
              case "value":
                _ = u;
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
                u !== c && Ie(e, t, b, u, l, c);
            }
        wf(e, _, M);
        return;
      case "option":
        for (var ve in a)
          if (_ = a[ve], a.hasOwnProperty(ve) && _ != null && !l.hasOwnProperty(ve))
            switch (ve) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ie(
                  e,
                  t,
                  ve,
                  null,
                  l,
                  _
                );
            }
        for (A in l)
          if (_ = l[A], M = a[A], l.hasOwnProperty(A) && _ !== M && (_ != null || M != null))
            switch (A) {
              case "selected":
                e.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                Ie(
                  e,
                  t,
                  A,
                  _,
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
        for (var he in a)
          _ = a[he], a.hasOwnProperty(he) && _ != null && !l.hasOwnProperty(he) && Ie(e, t, he, null, l, _);
        for (R in l)
          if (_ = l[R], M = a[R], l.hasOwnProperty(R) && _ !== M && (_ != null || M != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(o(137, t));
                break;
              default:
                Ie(
                  e,
                  t,
                  R,
                  _,
                  l,
                  M
                );
            }
        return;
      default:
        if (Po(t)) {
          for (var Qe in a)
            _ = a[Qe], a.hasOwnProperty(Qe) && _ !== void 0 && !l.hasOwnProperty(Qe) && _s(
              e,
              t,
              Qe,
              void 0,
              l,
              _
            );
          for (V in l)
            _ = l[V], M = a[V], !l.hasOwnProperty(V) || _ === M || _ === void 0 && M === void 0 || _s(
              e,
              t,
              V,
              _,
              l,
              M
            );
          return;
        }
    }
    for (var C in a)
      _ = a[C], a.hasOwnProperty(C) && _ != null && !l.hasOwnProperty(C) && Ie(e, t, C, null, l, _);
    for (G in l)
      _ = l[G], M = a[G], !l.hasOwnProperty(G) || _ === M || _ == null && M == null || Ie(e, t, G, _, l, M);
  }
  var Ms = null, Ns = null;
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
  function C0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ls ? !1 : (Ls = e, !0) : (Ls = null, !1);
  }
  var Cm = typeof setTimeout == "function" ? setTimeout : void 0, k0 = typeof clearTimeout == "function" ? clearTimeout : void 0, km = typeof Promise == "function" ? Promise : void 0, z0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof km < "u" ? function(e) {
    return km.resolve(null).then(e).catch(R0);
  } : Cm;
  function R0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ia(e) {
    return e === "head";
  }
  function zm(e, t) {
    var a = t, l = 0, u = 0;
    do {
      var c = a.nextSibling;
      if (e.removeChild(a), c && c.nodeType === 8)
        if (a = c.data, a === "/$") {
          if (0 < l && 8 > l) {
            a = l;
            var b = e.ownerDocument;
            if (a & 1 && El(b.documentElement), a & 2 && El(b.body), a & 4)
              for (a = b.head, El(a), b = a.firstChild; b; ) {
                var v = b.nextSibling, A = b.nodeName;
                b[ji] || A === "SCRIPT" || A === "STYLE" || A === "LINK" && b.rel.toLowerCase() === "stylesheet" || a.removeChild(b), b = v;
              }
          }
          if (u === 0) {
            e.removeChild(c), Ol(t);
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!" ? u++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = c;
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
  function D0(e, t, a, l) {
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
              if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (c !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = sn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function O0(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = sn(e.nextSibling), e === null)) return null;
    return e;
  }
  function js(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function _0(e, t) {
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
  var Bn = F.d;
  F.d = {
    f: M0,
    r: N0,
    D: U0,
    C: L0,
    L: B0,
    m: j0,
    X: H0,
    S: q0,
    M: V0
  };
  function M0() {
    var e = Bn.f(), t = Vr();
    return e || t;
  }
  function N0(e) {
    var t = qa(e);
    t !== null && t.tag === 5 && t.type === "form" ? Jd(t) : Bn.r(e);
  }
  var vi = typeof document > "u" ? null : document;
  function _m(e, t, a) {
    var l = vi;
    if (l && typeof t == "string" && t) {
      var u = Kt(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), Om.has(u) || (Om.add(u), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(u) === null && (t = l.createElement("link"), mt(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function U0(e) {
    Bn.D(e), _m("dns-prefetch", e, null);
  }
  function L0(e, t) {
    Bn.C(e, t), _m("preconnect", e, t);
  }
  function B0(e, t, a) {
    Bn.L(e, t, a);
    var l = vi;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + Kt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + Kt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + Kt(
        a.imageSizes
      ) + '"]')) : u += '[href="' + Kt(e) + '"]';
      var c = u;
      switch (t) {
        case "style":
          c = Si(e);
          break;
        case "script":
          c = xi(e);
      }
      nn.has(c) || (e = h(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), nn.set(c, e), l.querySelector(u) !== null || t === "style" && l.querySelector(Al(c)) || t === "script" && l.querySelector(Tl(c)) || (t = l.createElement("link"), mt(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function j0(e, t) {
    Bn.m(e, t);
    var a = vi;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Kt(l) + '"][href="' + Kt(e) + '"]', c = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = xi(e);
      }
      if (!nn.has(c) && (e = h({ rel: "modulepreload", href: e }, t), nn.set(c, e), a.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Tl(c)))
              return;
        }
        l = a.createElement("link"), mt(l, "link", e), ut(l), a.head.appendChild(l);
      }
    }
  }
  function q0(e, t, a) {
    Bn.S(e, t, a);
    var l = vi;
    if (l && e) {
      var u = Ha(l).hoistableStyles, c = Si(e);
      t = t || "default";
      var b = u.get(c);
      if (!b) {
        var v = { loading: 0, preload: null };
        if (b = l.querySelector(
          Al(c)
        ))
          v.loading = 5;
        else {
          e = h(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = nn.get(c)) && Hs(e, a);
          var A = b = l.createElement("link");
          ut(A), mt(A, "link", e), A._p = new Promise(function(R, V) {
            A.onload = R, A.onerror = V;
          }), A.addEventListener("load", function() {
            v.loading |= 1;
          }), A.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Jr(b, t, l);
        }
        b = {
          type: "stylesheet",
          instance: b,
          count: 1,
          state: v
        }, u.set(c, b);
      }
    }
  }
  function H0(e, t) {
    Bn.X(e, t);
    var a = vi;
    if (a && e) {
      var l = Ha(a).hoistableScripts, u = xi(e), c = l.get(u);
      c || (c = a.querySelector(Tl(u)), c || (e = h({ src: e, async: !0 }, t), (t = nn.get(u)) && Vs(e, t), c = a.createElement("script"), ut(c), mt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(u, c));
    }
  }
  function V0(e, t) {
    Bn.M(e, t);
    var a = vi;
    if (a && e) {
      var l = Ha(a).hoistableScripts, u = xi(e), c = l.get(u);
      c || (c = a.querySelector(Tl(u)), c || (e = h({ src: e, async: !0, type: "module" }, t), (t = nn.get(u)) && Vs(e, t), c = a.createElement("script"), ut(c), mt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(u, c));
    }
  }
  function Mm(e, t, a, l) {
    var u = (u = le.current) ? Zr(u) : null;
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
          var c = Ha(
            u
          ).hoistableStyles, b = c.get(e);
          if (b || (u = u.ownerDocument || u, b = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, b), (c = u.querySelector(
            Al(e)
          )) && !c._p && (b.instance = c, b.state.loading = 5), nn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, nn.set(e, a), c || I0(
            u,
            e,
            a,
            b.state
          ))), t && l === null)
            throw Error(o(528, ""));
          return b;
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
  function Nm(e) {
    return h({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function I0(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), mt(t, "link", a), ut(t), e.head.appendChild(t));
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
            return t.instance = l, ut(l), l;
          var u = h({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), ut(l), mt(l, "style", u), Jr(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          u = Si(a.href);
          var c = e.querySelector(
            Al(u)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ut(c), c;
          l = Nm(a), (u = nn.get(u)) && Hs(l, u), c = (e.ownerDocument || e).createElement("link"), ut(c);
          var b = c;
          return b._p = new Promise(function(v, A) {
            b.onload = v, b.onerror = A;
          }), mt(c, "link", l), t.state.loading |= 4, Jr(c, a.precedence, e), t.instance = c;
        case "script":
          return c = xi(a.src), (u = e.querySelector(
            Tl(c)
          )) ? (t.instance = u, ut(u), u) : (l = a, (u = nn.get(c)) && (l = h({}, a), Vs(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), ut(u), mt(u, "link", l), e.head.appendChild(u), t.instance = u);
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
    ), u = l.length ? l[l.length - 1] : null, c = u, b = 0; b < l.length; b++) {
      var v = l[b];
      if (v.dataset.precedence === t) c = v;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
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
      var c = a[u];
      if (!(c[ji] || c[ht] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = c.getAttribute(t) || "";
        b = e + b;
        var v = l.get(b);
        v ? v.push(c) : l.set(b, [c]);
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
  function Q0(e, t, a) {
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
  function G0() {
  }
  function Y0(e, t, a) {
    if (Cl === null) throw Error(o(475));
    var l = Cl;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var u = Si(a.href), c = e.querySelector(
          Al(u)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = $r.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = c, ut(c);
          return;
        }
        c = e.ownerDocument || e, a = Nm(a), (u = nn.get(u)) && Hs(a, u), c = c.createElement("link"), ut(c);
        var b = c;
        b._p = new Promise(function(v, A) {
          b.onload = v, b.onerror = A;
        }), mt(c, "link", a), t.instance = c;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = $r.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function F0() {
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, eo = /* @__PURE__ */ new Map(), t.forEach(X0, e), eo = null, $r.call(e));
  }
  function X0(e, t) {
    if (!(t.state.loading & 4)) {
      var a = eo.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), eo.set(e, a);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var b = u[c];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (a.set(b.dataset.precedence, b), l = b);
        }
        l && a.set(null, l);
      }
      u = t.instance, b = u.getAttribute("data-precedence"), c = a.get(b) || l, c === l && a.set(null, u), a.set(b, u), this.count++, l = $r.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), c ? c.parentNode.insertBefore(u, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var kl = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function P0(e, t, a, l, u, c, b, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jo(0), this.hiddenUpdates = jo(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qm(e, t, a, l, u, c, b, v, A, R, V, G) {
    return e = new P0(
      e,
      t,
      a,
      b,
      v,
      A,
      R,
      G
    ), t = 1, c === !0 && (t |= 24), c = qt(3, null, null, t), e.current = c, c.stateNode = e, t = Eu(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, ku(c), e;
  }
  function Hm(e) {
    return e ? (e = Wa, e) : Wa;
  }
  function Vm(e, t, a, l, u, c) {
    u = Hm(u), l.context === null ? l.context = u : l.pendingContext = u, l = Yn(t), l.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (l.callback = c), a = Fn(e, l, t), a !== null && (Gt(a, e, t), al(a, e, t));
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
  function K0(e, t, a, l) {
    var u = O.T;
    O.T = null;
    var c = F.p;
    try {
      F.p = 2, Gs(e, t, a, l);
    } finally {
      F.p = c, O.T = u;
    }
  }
  function Z0(e, t, a, l) {
    var u = O.T;
    O.T = null;
    var c = F.p;
    try {
      F.p = 8, Gs(e, t, a, l);
    } finally {
      F.p = c, O.T = u;
    }
  }
  function Gs(e, t, a, l) {
    if (to) {
      var u = Ys(l);
      if (u === null)
        Os(
          e,
          t,
          l,
          no,
          a
        ), Ym(e, l);
      else if (W0(
        u,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (Ym(e, l), t & 4 && -1 < J0.indexOf(e)) {
        for (; u !== null; ) {
          var c = qa(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var b = Bt(c.pendingLanes);
                  if (b !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; b; ) {
                      var A = 1 << 31 - ye(b);
                      v.entanglements[1] |= A, b &= ~A;
                    }
                    yn(c), (qe & 6) === 0 && (qr = Ut() + 500, Sl(0));
                  }
                }
                break;
              case 13:
                v = Ja(c, 2), v !== null && Gt(v, c, 2), Vr(), Qs(c, 2);
            }
          if (c = Ys(l), c === null && Os(
            e,
            t,
            l,
            no,
            a
          ), c === u) break;
          u = c;
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
  function Ys(e) {
    return e = Zo(e), Fs(e);
  }
  var no = null;
  function Fs(e) {
    if (no = null, e = ja(e), e !== null) {
      var t = f(e);
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
        switch (No()) {
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
  var Xs = !1, la = null, ra = null, oa = null, zl = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map(), ua = [], J0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ym(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        la = null;
        break;
      case "dragenter":
      case "dragleave":
        ra = null;
        break;
      case "mouseover":
      case "mouseout":
        oa = null;
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
  function Dl(e, t, a, l, u, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [u]
    }, t !== null && (t = qa(t), t !== null && Qm(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function W0(e, t, a, l, u) {
    switch (t) {
      case "focusin":
        return la = Dl(
          la,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "dragenter":
        return ra = Dl(
          ra,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "mouseover":
        return oa = Dl(
          oa,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return zl.set(
          c,
          Dl(
            zl.get(c) || null,
            e,
            t,
            a,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, Rl.set(
          c,
          Dl(
            Rl.get(c) || null,
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
  function Fm(e) {
    var t = ja(e.target);
    if (t !== null) {
      var a = f(t);
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
      var a = Ys(e.nativeEvent);
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
  function $0() {
    Xs = !1, la !== null && ao(la) && (la = null), ra !== null && ao(ra) && (ra = null), oa !== null && ao(oa) && (oa = null), zl.forEach(Xm), Rl.forEach(Xm);
  }
  function io(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xs || (Xs = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      $0
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
            if (Fs(l || a) === null)
              continue;
            break;
          }
          var c = qa(a);
          c !== null && (e.splice(t, 3), t -= 3, Fu(
            c,
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
    la !== null && io(la, e), ra !== null && io(ra, e), oa !== null && io(oa, e), zl.forEach(t), Rl.forEach(t);
    for (var a = 0; a < ua.length; a++) {
      var l = ua[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < ua.length && (a = ua[0], a.blockedOn === null); )
      Fm(a), a.blockedOn === null && ua.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var u = a[l], c = a[l + 1], b = u[Et] || null;
        if (typeof c == "function")
          b || Pm(a);
        else if (b) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, b = c[Et] || null)
              v = b.formAction;
            else if (Fs(u) !== null) continue;
          } else v = b.action;
          typeof v == "function" ? a[l + 1] = v : (a.splice(l, 3), l -= 3), Pm(a);
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
      for (var a = 0; a < ua.length && t !== 0 && t < ua[a].priority; a++) ;
      ua.splice(a, 0, e), a === 0 && Fm(e);
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
  F.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = g(t), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var e1 = {
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
        H = oo.inject(
          e1
        ), K = oo;
      } catch {
      }
  }
  return Ml.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var a = !1, l = "", u = fp, c = dp, b = pp, v = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (b = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (v = t.unstable_transitionCallbacks)), t = qm(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      u,
      c,
      b,
      v,
      null
    ), e[Ba] = t.current, Ds(e), new Ps(t);
  }, Ml.hydrateRoot = function(e, t, a) {
    if (!s(e)) throw Error(o(299));
    var l = !1, u = "", c = fp, b = dp, v = pp, A = null, R = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (b = a.onCaughtError), a.onRecoverableError !== void 0 && (v = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (A = a.unstable_transitionCallbacks), a.formState !== void 0 && (R = a.formState)), t = qm(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      u,
      c,
      b,
      v,
      A,
      R
    ), t.context = Hm(null), a = t.current, l = Qt(), l = qo(l), u = Yn(l), u.callback = null, Fn(a, u, l), a = l, t.current.lanes = a, Bi(t, a), yn(t), e[Ba] = t.current, Ds(e), new ro(t);
  }, Ml.version = "19.1.0", Ml;
}
var lh;
function c1() {
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
  return n(), Js.exports = s1(), Js.exports;
}
var f1 = c1();
function gg(n, i) {
  return function() {
    return n.apply(i, arguments);
  };
}
const { toString: d1 } = Object.prototype, { getPrototypeOf: Ic } = Object, { iterator: Ao, toStringTag: yg } = Symbol, To = /* @__PURE__ */ ((n) => (i) => {
  const r = d1.call(i);
  return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), cn = (n) => (n = n.toLowerCase(), (i) => To(i) === n), Co = (n) => (i) => typeof i === n, { isArray: ki } = Array, Ql = Co("undefined");
function p1(n) {
  return n !== null && !Ql(n) && n.constructor !== null && !Ql(n.constructor) && Rt(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const bg = cn("ArrayBuffer");
function m1(n) {
  let i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && bg(n.buffer), i;
}
const h1 = Co("string"), Rt = Co("function"), vg = Co("number"), ko = (n) => n !== null && typeof n == "object", g1 = (n) => n === !0 || n === !1, go = (n) => {
  if (To(n) !== "object")
    return !1;
  const i = Ic(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(yg in n) && !(Ao in n);
}, y1 = cn("Date"), b1 = cn("File"), v1 = cn("Blob"), S1 = cn("FileList"), x1 = (n) => ko(n) && Rt(n.pipe), w1 = (n) => {
  let i;
  return n && (typeof FormData == "function" && n instanceof FormData || Rt(n.append) && ((i = To(n)) === "formdata" || // detect form-data instance
  i === "object" && Rt(n.toString) && n.toString() === "[object FormData]"));
}, E1 = cn("URLSearchParams"), [A1, T1, C1, k1] = ["ReadableStream", "Request", "Response", "Headers"].map(cn), z1 = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yl(n, i, { allOwnKeys: r = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let o, s;
  if (typeof n != "object" && (n = [n]), ki(n))
    for (o = 0, s = n.length; o < s; o++)
      i.call(null, n[o], o, n);
  else {
    const f = r ? Object.getOwnPropertyNames(n) : Object.keys(n), d = f.length;
    let m;
    for (o = 0; o < d; o++)
      m = f[o], i.call(null, n[m], m, n);
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
const _a = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, xg = (n) => !Ql(n) && n !== _a;
function Sc() {
  const { caseless: n } = xg(this) && this || {}, i = {}, r = (o, s) => {
    const f = n && Sg(i, s) || s;
    go(i[f]) && go(o) ? i[f] = Sc(i[f], o) : go(o) ? i[f] = Sc({}, o) : ki(o) ? i[f] = o.slice() : i[f] = o;
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && Yl(arguments[o], r);
  return i;
}
const R1 = (n, i, r, { allOwnKeys: o } = {}) => (Yl(i, (s, f) => {
  r && Rt(s) ? n[f] = gg(s, r) : n[f] = s;
}, { allOwnKeys: o }), n), D1 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), O1 = (n, i, r, o) => {
  n.prototype = Object.create(i.prototype, o), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: i.prototype
  }), r && Object.assign(n.prototype, r);
}, _1 = (n, i, r, o) => {
  let s, f, d;
  const m = {};
  if (i = i || {}, n == null) return i;
  do {
    for (s = Object.getOwnPropertyNames(n), f = s.length; f-- > 0; )
      d = s[f], (!o || o(d, n, i)) && !m[d] && (i[d] = n[d], m[d] = !0);
    n = r !== !1 && Ic(n);
  } while (n && (!r || r(n, i)) && n !== Object.prototype);
  return i;
}, M1 = (n, i, r) => {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= i.length;
  const o = n.indexOf(i, r);
  return o !== -1 && o === r;
}, N1 = (n) => {
  if (!n) return null;
  if (ki(n)) return n;
  let i = n.length;
  if (!vg(i)) return null;
  const r = new Array(i);
  for (; i-- > 0; )
    r[i] = n[i];
  return r;
}, U1 = /* @__PURE__ */ ((n) => (i) => n && i instanceof n)(typeof Uint8Array < "u" && Ic(Uint8Array)), L1 = (n, i) => {
  const o = (n && n[Ao]).call(n);
  let s;
  for (; (s = o.next()) && !s.done; ) {
    const f = s.value;
    i.call(n, f[0], f[1]);
  }
}, B1 = (n, i) => {
  let r;
  const o = [];
  for (; (r = n.exec(i)) !== null; )
    o.push(r);
  return o;
}, j1 = cn("HTMLFormElement"), q1 = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, s) {
    return o.toUpperCase() + s;
  }
), rh = (({ hasOwnProperty: n }) => (i, r) => n.call(i, r))(Object.prototype), H1 = cn("RegExp"), wg = (n, i) => {
  const r = Object.getOwnPropertyDescriptors(n), o = {};
  Yl(r, (s, f) => {
    let d;
    (d = i(s, f, n)) !== !1 && (o[f] = d || s);
  }), Object.defineProperties(n, o);
}, V1 = (n) => {
  wg(n, (i, r) => {
    if (Rt(n) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = n[r];
    if (Rt(o)) {
      if (i.enumerable = !1, "writable" in i) {
        i.writable = !1;
        return;
      }
      i.set || (i.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, I1 = (n, i) => {
  const r = {}, o = (s) => {
    s.forEach((f) => {
      r[f] = !0;
    });
  };
  return ki(n) ? o(n) : o(String(n).split(i)), r;
}, Q1 = () => {
}, G1 = (n, i) => n != null && Number.isFinite(n = +n) ? n : i;
function Y1(n) {
  return !!(n && Rt(n.append) && n[yg] === "FormData" && n[Ao]);
}
const F1 = (n) => {
  const i = new Array(10), r = (o, s) => {
    if (ko(o)) {
      if (i.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        i[s] = o;
        const f = ki(o) ? [] : {};
        return Yl(o, (d, m) => {
          const g = r(d, s + 1);
          !Ql(g) && (f[m] = g);
        }), i[s] = void 0, f;
      }
    }
    return o;
  };
  return r(n, 0);
}, X1 = cn("AsyncFunction"), P1 = (n) => n && (ko(n) || Rt(n)) && Rt(n.then) && Rt(n.catch), Eg = ((n, i) => n ? setImmediate : i ? ((r, o) => (_a.addEventListener("message", ({ source: s, data: f }) => {
  s === _a && f === r && o.length && o.shift()();
}, !1), (s) => {
  o.push(s), _a.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Rt(_a.postMessage)
), K1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(_a) : typeof process < "u" && process.nextTick || Eg, Z1 = (n) => n != null && Rt(n[Ao]), N = {
  isArray: ki,
  isArrayBuffer: bg,
  isBuffer: p1,
  isFormData: w1,
  isArrayBufferView: m1,
  isString: h1,
  isNumber: vg,
  isBoolean: g1,
  isObject: ko,
  isPlainObject: go,
  isReadableStream: A1,
  isRequest: T1,
  isResponse: C1,
  isHeaders: k1,
  isUndefined: Ql,
  isDate: y1,
  isFile: b1,
  isBlob: v1,
  isRegExp: H1,
  isFunction: Rt,
  isStream: x1,
  isURLSearchParams: E1,
  isTypedArray: U1,
  isFileList: S1,
  forEach: Yl,
  merge: Sc,
  extend: R1,
  trim: z1,
  stripBOM: D1,
  inherits: O1,
  toFlatObject: _1,
  kindOf: To,
  kindOfTest: cn,
  endsWith: M1,
  toArray: N1,
  forEachEntry: L1,
  matchAll: B1,
  isHTMLForm: j1,
  hasOwnProperty: rh,
  hasOwnProp: rh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wg,
  freezeMethods: V1,
  toObjectSet: I1,
  toCamelCase: q1,
  noop: Q1,
  toFiniteNumber: G1,
  findKey: Sg,
  global: _a,
  isContextDefined: xg,
  isSpecCompliantForm: Y1,
  toJSONObject: F1,
  isAsyncFn: X1,
  isThenable: P1,
  setImmediate: Eg,
  asap: K1,
  isIterable: Z1
};
function Ee(n, i, r, o, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), o && (this.request = o), s && (this.response = s, this.status = s.status ? s.status : null);
}
N.inherits(Ee, Error, {
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
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ag = Ee.prototype, Tg = {};
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
Object.defineProperties(Ee, Tg);
Object.defineProperty(Ag, "isAxiosError", { value: !0 });
Ee.from = (n, i, r, o, s, f) => {
  const d = Object.create(Ag);
  return N.toFlatObject(n, d, function(g) {
    return g !== Error.prototype;
  }, (m) => m !== "isAxiosError"), Ee.call(d, n.message, i, r, o, s), d.cause = n, d.name = n.name, f && Object.assign(d, f), d;
};
const J1 = null;
function xc(n) {
  return N.isPlainObject(n) || N.isArray(n);
}
function Cg(n) {
  return N.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function oh(n, i, r) {
  return n ? n.concat(i).map(function(s, f) {
    return s = Cg(s), !r && f ? "[" + s + "]" : s;
  }).join(r ? "." : "") : i;
}
function W1(n) {
  return N.isArray(n) && !n.some(xc);
}
const $1 = N.toFlatObject(N, {}, null, function(i) {
  return /^is[A-Z]/.test(i);
});
function zo(n, i, r) {
  if (!N.isObject(n))
    throw new TypeError("target must be an object");
  i = i || new FormData(), r = N.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(D, U) {
    return !N.isUndefined(U[D]);
  });
  const o = r.metaTokens, s = r.visitor || h, f = r.dots, d = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(i);
  if (!N.isFunction(s))
    throw new TypeError("visitor must be a function");
  function p(k) {
    if (k === null) return "";
    if (N.isDate(k))
      return k.toISOString();
    if (N.isBoolean(k))
      return k.toString();
    if (!g && N.isBlob(k))
      throw new Ee("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(k) || N.isTypedArray(k) ? g && typeof Blob == "function" ? new Blob([k]) : Buffer.from(k) : k;
  }
  function h(k, D, U) {
    let B = k;
    if (k && !U && typeof k == "object") {
      if (N.endsWith(D, "{}"))
        D = o ? D : D.slice(0, -2), k = JSON.stringify(k);
      else if (N.isArray(k) && W1(k) || (N.isFileList(k) || N.endsWith(D, "[]")) && (B = N.toArray(k)))
        return D = Cg(D), B.forEach(function(Y, ce) {
          !(N.isUndefined(Y) || Y === null) && i.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? oh([D], ce, f) : d === null ? D : D + "[]",
            p(Y)
          );
        }), !1;
    }
    return xc(k) ? !0 : (i.append(oh(U, D, f), p(k)), !1);
  }
  const S = [], E = Object.assign($1, {
    defaultVisitor: h,
    convertValue: p,
    isVisitable: xc
  });
  function w(k, D) {
    if (!N.isUndefined(k)) {
      if (S.indexOf(k) !== -1)
        throw Error("Circular reference detected in " + D.join("."));
      S.push(k), N.forEach(k, function(B, W) {
        (!(N.isUndefined(B) || B === null) && s.call(
          i,
          B,
          N.isString(W) ? W.trim() : W,
          D,
          E
        )) === !0 && w(B, D ? D.concat(W) : [W]);
      }), S.pop();
    }
  }
  if (!N.isObject(n))
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
function ev(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function zg(n, i, r) {
  if (!i)
    return n;
  const o = r && r.encode || ev;
  N.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let f;
  if (s ? f = s(i, r) : f = N.isURLSearchParams(i) ? i.toString() : new Qc(i, r).toString(o), f) {
    const d = n.indexOf("#");
    d !== -1 && (n = n.slice(0, d)), n += (n.indexOf("?") === -1 ? "?" : "&") + f;
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
    N.forEach(this.handlers, function(o) {
      o !== null && i(o);
    });
  }
}
const Rg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, tv = typeof URLSearchParams < "u" ? URLSearchParams : Qc, nv = typeof FormData < "u" ? FormData : null, av = typeof Blob < "u" ? Blob : null, iv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: tv,
    FormData: nv,
    Blob: av
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Gc = typeof window < "u" && typeof document < "u", wc = typeof navigator == "object" && navigator || void 0, lv = Gc && (!wc || ["ReactNative", "NativeScript", "NS"].indexOf(wc.product) < 0), rv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ov = Gc && window.location.href || "http://localhost", uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Gc,
  hasStandardBrowserEnv: lv,
  hasStandardBrowserWebWorkerEnv: rv,
  navigator: wc,
  origin: ov
}, Symbol.toStringTag, { value: "Module" })), bt = {
  ...uv,
  ...iv
};
function sv(n, i) {
  return zo(n, new bt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, s, f) {
      return bt.isNode && N.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : f.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
function cv(n) {
  return N.matchAll(/\w+|\[(\w*)]/g, n).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
}
function fv(n) {
  const i = {}, r = Object.keys(n);
  let o;
  const s = r.length;
  let f;
  for (o = 0; o < s; o++)
    f = r[o], i[f] = n[f];
  return i;
}
function Dg(n) {
  function i(r, o, s, f) {
    let d = r[f++];
    if (d === "__proto__") return !0;
    const m = Number.isFinite(+d), g = f >= r.length;
    return d = !d && N.isArray(s) ? s.length : d, g ? (N.hasOwnProp(s, d) ? s[d] = [s[d], o] : s[d] = o, !m) : ((!s[d] || !N.isObject(s[d])) && (s[d] = []), i(r, o, s[d], f) && N.isArray(s[d]) && (s[d] = fv(s[d])), !m);
  }
  if (N.isFormData(n) && N.isFunction(n.entries)) {
    const r = {};
    return N.forEachEntry(n, (o, s) => {
      i(cv(o), s, r, 0);
    }), r;
  }
  return null;
}
function dv(n, i, r) {
  if (N.isString(n))
    try {
      return (i || JSON.parse)(n), N.trim(n);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(n);
}
const Fl = {
  transitional: Rg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(i, r) {
    const o = r.getContentType() || "", s = o.indexOf("application/json") > -1, f = N.isObject(i);
    if (f && N.isHTMLForm(i) && (i = new FormData(i)), N.isFormData(i))
      return s ? JSON.stringify(Dg(i)) : i;
    if (N.isArrayBuffer(i) || N.isBuffer(i) || N.isStream(i) || N.isFile(i) || N.isBlob(i) || N.isReadableStream(i))
      return i;
    if (N.isArrayBufferView(i))
      return i.buffer;
    if (N.isURLSearchParams(i))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
    let m;
    if (f) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return sv(i, this.formSerializer).toString();
      if ((m = N.isFileList(i)) || o.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return zo(
          m ? { "files[]": i } : i,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return f || s ? (r.setContentType("application/json", !1), dv(i)) : i;
  }],
  transformResponse: [function(i) {
    const r = this.transitional || Fl.transitional, o = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (N.isResponse(i) || N.isReadableStream(i))
      return i;
    if (i && N.isString(i) && (o && !this.responseType || s)) {
      const d = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(i);
      } catch (m) {
        if (d)
          throw m.name === "SyntaxError" ? Ee.from(m, Ee.ERR_BAD_RESPONSE, this, null, this.response) : m;
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
N.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Fl.headers[n] = {};
});
const pv = N.toObjectSet([
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
]), mv = (n) => {
  const i = {};
  let r, o, s;
  return n && n.split(`
`).forEach(function(d) {
    s = d.indexOf(":"), r = d.substring(0, s).trim().toLowerCase(), o = d.substring(s + 1).trim(), !(!r || i[r] && pv[r]) && (r === "set-cookie" ? i[r] ? i[r].push(o) : i[r] = [o] : i[r] = i[r] ? i[r] + ", " + o : o);
  }), i;
}, ch = Symbol("internals");
function Nl(n) {
  return n && String(n).trim().toLowerCase();
}
function yo(n) {
  return n === !1 || n == null ? n : N.isArray(n) ? n.map(yo) : String(n);
}
function hv(n) {
  const i = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(n); )
    i[o[1]] = o[2];
  return i;
}
const gv = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function tc(n, i, r, o, s) {
  if (N.isFunction(o))
    return o.call(this, i, r);
  if (s && (i = r), !!N.isString(i)) {
    if (N.isString(o))
      return i.indexOf(o) !== -1;
    if (N.isRegExp(o))
      return o.test(i);
  }
}
function yv(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, r, o) => r.toUpperCase() + o);
}
function bv(n, i) {
  const r = N.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(n, o + r, {
      value: function(s, f, d) {
        return this[o].call(this, i, s, f, d);
      },
      configurable: !0
    });
  });
}
let Dt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, r, o) {
    const s = this;
    function f(m, g, p) {
      const h = Nl(g);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const S = N.findKey(s, h);
      (!S || s[S] === void 0 || p === !0 || p === void 0 && s[S] !== !1) && (s[S || g] = yo(m));
    }
    const d = (m, g) => N.forEach(m, (p, h) => f(p, h, g));
    if (N.isPlainObject(i) || i instanceof this.constructor)
      d(i, r);
    else if (N.isString(i) && (i = i.trim()) && !gv(i))
      d(mv(i), r);
    else if (N.isObject(i) && N.isIterable(i)) {
      let m = {}, g, p;
      for (const h of i) {
        if (!N.isArray(h))
          throw TypeError("Object iterator must return a key-value pair");
        m[p = h[0]] = (g = m[p]) ? N.isArray(g) ? [...g, h[1]] : [g, h[1]] : h[1];
      }
      d(m, r);
    } else
      i != null && f(r, i, o);
    return this;
  }
  get(i, r) {
    if (i = Nl(i), i) {
      const o = N.findKey(this, i);
      if (o) {
        const s = this[o];
        if (!r)
          return s;
        if (r === !0)
          return hv(s);
        if (N.isFunction(r))
          return r.call(this, s, o);
        if (N.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, r) {
    if (i = Nl(i), i) {
      const o = N.findKey(this, i);
      return !!(o && this[o] !== void 0 && (!r || tc(this, this[o], o, r)));
    }
    return !1;
  }
  delete(i, r) {
    const o = this;
    let s = !1;
    function f(d) {
      if (d = Nl(d), d) {
        const m = N.findKey(o, d);
        m && (!r || tc(o, o[m], m, r)) && (delete o[m], s = !0);
      }
    }
    return N.isArray(i) ? i.forEach(f) : f(i), s;
  }
  clear(i) {
    const r = Object.keys(this);
    let o = r.length, s = !1;
    for (; o--; ) {
      const f = r[o];
      (!i || tc(this, this[f], f, i, !0)) && (delete this[f], s = !0);
    }
    return s;
  }
  normalize(i) {
    const r = this, o = {};
    return N.forEach(this, (s, f) => {
      const d = N.findKey(o, f);
      if (d) {
        r[d] = yo(s), delete r[f];
        return;
      }
      const m = i ? yv(f) : String(f).trim();
      m !== f && delete r[f], r[m] = yo(s), o[m] = !0;
    }), this;
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const r = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (o, s) => {
      o != null && o !== !1 && (r[s] = i && N.isArray(o) ? o.join(", ") : o);
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
    function f(d) {
      const m = Nl(d);
      o[m] || (bv(s, d), o[m] = !0);
    }
    return N.isArray(i) ? i.forEach(f) : f(i), this;
  }
};
Dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(Dt.prototype, ({ value: n }, i) => {
  let r = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(o) {
      this[r] = o;
    }
  };
});
N.freezeMethods(Dt);
function nc(n, i) {
  const r = this || Fl, o = i || r, s = Dt.from(o.headers);
  let f = o.data;
  return N.forEach(n, function(m) {
    f = m.call(r, f, s.normalize(), i ? i.status : void 0);
  }), s.normalize(), f;
}
function Og(n) {
  return !!(n && n.__CANCEL__);
}
function zi(n, i, r) {
  Ee.call(this, n ?? "canceled", Ee.ERR_CANCELED, i, r), this.name = "CanceledError";
}
N.inherits(zi, Ee, {
  __CANCEL__: !0
});
function _g(n, i, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? n(r) : i(new Ee(
    "Request failed with status code " + r.status,
    [Ee.ERR_BAD_REQUEST, Ee.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function vv(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return i && i[1] || "";
}
function Sv(n, i) {
  n = n || 10;
  const r = new Array(n), o = new Array(n);
  let s = 0, f = 0, d;
  return i = i !== void 0 ? i : 1e3, function(g) {
    const p = Date.now(), h = o[f];
    d || (d = p), r[s] = g, o[s] = p;
    let S = f, E = 0;
    for (; S !== s; )
      E += r[S++], S = S % n;
    if (s = (s + 1) % n, s === f && (f = (f + 1) % n), p - d < i)
      return;
    const w = h && p - h;
    return w ? Math.round(E * 1e3 / w) : void 0;
  };
}
function xv(n, i) {
  let r = 0, o = 1e3 / i, s, f;
  const d = (p, h = Date.now()) => {
    r = h, s = null, f && (clearTimeout(f), f = null), n.apply(null, p);
  };
  return [(...p) => {
    const h = Date.now(), S = h - r;
    S >= o ? d(p, h) : (s = p, f || (f = setTimeout(() => {
      f = null, d(s);
    }, o - S)));
  }, () => s && d(s)];
}
const So = (n, i, r = 3) => {
  let o = 0;
  const s = Sv(50, 250);
  return xv((f) => {
    const d = f.loaded, m = f.lengthComputable ? f.total : void 0, g = d - o, p = s(g), h = d <= m;
    o = d;
    const S = {
      loaded: d,
      total: m,
      progress: m ? d / m : void 0,
      bytes: g,
      rate: p || void 0,
      estimated: p && m && h ? (m - d) / p : void 0,
      event: f,
      lengthComputable: m != null,
      [i ? "download" : "upload"]: !0
    };
    n(S);
  }, r);
}, fh = (n, i) => {
  const r = n != null;
  return [(o) => i[0]({
    lengthComputable: r,
    total: n,
    loaded: o
  }), i[1]];
}, dh = (n) => (...i) => N.asap(() => n(...i)), wv = bt.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, i) => (r) => (r = new URL(r, bt.origin), n.protocol === r.protocol && n.host === r.host && (i || n.port === r.port)))(
  new URL(bt.origin),
  bt.navigator && /(msie|trident)/i.test(bt.navigator.userAgent)
) : () => !0, Ev = bt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, i, r, o, s, f) {
      const d = [n + "=" + encodeURIComponent(i)];
      N.isNumber(r) && d.push("expires=" + new Date(r).toGMTString()), N.isString(o) && d.push("path=" + o), N.isString(s) && d.push("domain=" + s), f === !0 && d.push("secure"), document.cookie = d.join("; ");
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
function Av(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function Tv(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function Mg(n, i, r) {
  let o = !Av(i);
  return n && (o || r == !1) ? Tv(n, i) : i;
}
const ph = (n) => n instanceof Dt ? { ...n } : n;
function Na(n, i) {
  i = i || {};
  const r = {};
  function o(p, h, S, E) {
    return N.isPlainObject(p) && N.isPlainObject(h) ? N.merge.call({ caseless: E }, p, h) : N.isPlainObject(h) ? N.merge({}, h) : N.isArray(h) ? h.slice() : h;
  }
  function s(p, h, S, E) {
    if (N.isUndefined(h)) {
      if (!N.isUndefined(p))
        return o(void 0, p, S, E);
    } else return o(p, h, S, E);
  }
  function f(p, h) {
    if (!N.isUndefined(h))
      return o(void 0, h);
  }
  function d(p, h) {
    if (N.isUndefined(h)) {
      if (!N.isUndefined(p))
        return o(void 0, p);
    } else return o(void 0, h);
  }
  function m(p, h, S) {
    if (S in i)
      return o(p, h);
    if (S in n)
      return o(void 0, p);
  }
  const g = {
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
    validateStatus: m,
    headers: (p, h, S) => s(ph(p), ph(h), S, !0)
  };
  return N.forEach(Object.keys(Object.assign({}, n, i)), function(h) {
    const S = g[h] || s, E = S(n[h], i[h], h);
    N.isUndefined(E) && S !== m || (r[h] = E);
  }), r;
}
const Ng = (n) => {
  const i = Na({}, n);
  let { data: r, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: f, headers: d, auth: m } = i;
  i.headers = d = Dt.from(d), i.url = zg(Mg(i.baseURL, i.url, i.allowAbsoluteUrls), n.params, n.paramsSerializer), m && d.set(
    "Authorization",
    "Basic " + btoa((m.username || "") + ":" + (m.password ? unescape(encodeURIComponent(m.password)) : ""))
  );
  let g;
  if (N.isFormData(r)) {
    if (bt.hasStandardBrowserEnv || bt.hasStandardBrowserWebWorkerEnv)
      d.setContentType(void 0);
    else if ((g = d.getContentType()) !== !1) {
      const [p, ...h] = g ? g.split(";").map((S) => S.trim()).filter(Boolean) : [];
      d.setContentType([p || "multipart/form-data", ...h].join("; "));
    }
  }
  if (bt.hasStandardBrowserEnv && (o && N.isFunction(o) && (o = o(i)), o || o !== !1 && wv(i.url))) {
    const p = s && f && Ev.read(f);
    p && d.set(s, p);
  }
  return i;
}, Cv = typeof XMLHttpRequest < "u", kv = Cv && function(n) {
  return new Promise(function(r, o) {
    const s = Ng(n);
    let f = s.data;
    const d = Dt.from(s.headers).normalize();
    let { responseType: m, onUploadProgress: g, onDownloadProgress: p } = s, h, S, E, w, k;
    function D() {
      w && w(), k && k(), s.cancelToken && s.cancelToken.unsubscribe(h), s.signal && s.signal.removeEventListener("abort", h);
    }
    let U = new XMLHttpRequest();
    U.open(s.method.toUpperCase(), s.url, !0), U.timeout = s.timeout;
    function B() {
      if (!U)
        return;
      const Y = Dt.from(
        "getAllResponseHeaders" in U && U.getAllResponseHeaders()
      ), ee = {
        data: !m || m === "text" || m === "json" ? U.responseText : U.response,
        status: U.status,
        statusText: U.statusText,
        headers: Y,
        config: n,
        request: U
      };
      _g(function(ae) {
        r(ae), D();
      }, function(ae) {
        o(ae), D();
      }, ee), U = null;
    }
    "onloadend" in U ? U.onloadend = B : U.onreadystatechange = function() {
      !U || U.readyState !== 4 || U.status === 0 && !(U.responseURL && U.responseURL.indexOf("file:") === 0) || setTimeout(B);
    }, U.onabort = function() {
      U && (o(new Ee("Request aborted", Ee.ECONNABORTED, n, U)), U = null);
    }, U.onerror = function() {
      o(new Ee("Network Error", Ee.ERR_NETWORK, n, U)), U = null;
    }, U.ontimeout = function() {
      let ce = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const ee = s.transitional || Rg;
      s.timeoutErrorMessage && (ce = s.timeoutErrorMessage), o(new Ee(
        ce,
        ee.clarifyTimeoutError ? Ee.ETIMEDOUT : Ee.ECONNABORTED,
        n,
        U
      )), U = null;
    }, f === void 0 && d.setContentType(null), "setRequestHeader" in U && N.forEach(d.toJSON(), function(ce, ee) {
      U.setRequestHeader(ee, ce);
    }), N.isUndefined(s.withCredentials) || (U.withCredentials = !!s.withCredentials), m && m !== "json" && (U.responseType = s.responseType), p && ([E, k] = So(p, !0), U.addEventListener("progress", E)), g && U.upload && ([S, w] = So(g), U.upload.addEventListener("progress", S), U.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (h = (Y) => {
      U && (o(!Y || Y.type ? new zi(null, n, U) : Y), U.abort(), U = null);
    }, s.cancelToken && s.cancelToken.subscribe(h), s.signal && (s.signal.aborted ? h() : s.signal.addEventListener("abort", h)));
    const W = vv(s.url);
    if (W && bt.protocols.indexOf(W) === -1) {
      o(new Ee("Unsupported protocol " + W + ":", Ee.ERR_BAD_REQUEST, n));
      return;
    }
    U.send(f || null);
  });
}, zv = (n, i) => {
  const { length: r } = n = n ? n.filter(Boolean) : [];
  if (i || r) {
    let o = new AbortController(), s;
    const f = function(p) {
      if (!s) {
        s = !0, m();
        const h = p instanceof Error ? p : this.reason;
        o.abort(h instanceof Ee ? h : new zi(h instanceof Error ? h.message : h));
      }
    };
    let d = i && setTimeout(() => {
      d = null, f(new Ee(`timeout ${i} of ms exceeded`, Ee.ETIMEDOUT));
    }, i);
    const m = () => {
      n && (d && clearTimeout(d), d = null, n.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(f) : p.removeEventListener("abort", f);
      }), n = null);
    };
    n.forEach((p) => p.addEventListener("abort", f));
    const { signal: g } = o;
    return g.unsubscribe = () => N.asap(m), g;
  }
}, Rv = function* (n, i) {
  let r = n.byteLength;
  if (r < i) {
    yield n;
    return;
  }
  let o = 0, s;
  for (; o < r; )
    s = o + i, yield n.slice(o, s), o = s;
}, Dv = async function* (n, i) {
  for await (const r of Ov(n))
    yield* Rv(r, i);
}, Ov = async function* (n) {
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
  const s = Dv(n, i);
  let f = 0, d, m = (g) => {
    d || (d = !0, o && o(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: p, value: h } = await s.next();
        if (p) {
          m(), g.close();
          return;
        }
        let S = h.byteLength;
        if (r) {
          let E = f += S;
          r(E);
        }
        g.enqueue(new Uint8Array(h));
      } catch (p) {
        throw m(p), p;
      }
    },
    cancel(g) {
      return m(g), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ro = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ug = Ro && typeof ReadableStream == "function", _v = Ro && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (i) => n.encode(i))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), Lg = (n, ...i) => {
  try {
    return !!n(...i);
  } catch {
    return !1;
  }
}, Mv = Ug && Lg(() => {
  let n = !1;
  const i = new Request(bt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !i;
}), hh = 64 * 1024, Ec = Ug && Lg(() => N.isReadableStream(new Response("").body)), xo = {
  stream: Ec && ((n) => n.body)
};
Ro && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
    !xo[i] && (xo[i] = N.isFunction(n[i]) ? (r) => r[i]() : (r, o) => {
      throw new Ee(`Response type '${i}' is not supported`, Ee.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const Nv = async (n) => {
  if (n == null)
    return 0;
  if (N.isBlob(n))
    return n.size;
  if (N.isSpecCompliantForm(n))
    return (await new Request(bt.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (N.isArrayBufferView(n) || N.isArrayBuffer(n))
    return n.byteLength;
  if (N.isURLSearchParams(n) && (n = n + ""), N.isString(n))
    return (await _v(n)).byteLength;
}, Uv = async (n, i) => {
  const r = N.toFiniteNumber(n.getContentLength());
  return r ?? Nv(i);
}, Lv = Ro && (async (n) => {
  let {
    url: i,
    method: r,
    data: o,
    signal: s,
    cancelToken: f,
    timeout: d,
    onDownloadProgress: m,
    onUploadProgress: g,
    responseType: p,
    headers: h,
    withCredentials: S = "same-origin",
    fetchOptions: E
  } = Ng(n);
  p = p ? (p + "").toLowerCase() : "text";
  let w = zv([s, f && f.toAbortSignal()], d), k;
  const D = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let U;
  try {
    if (g && Mv && r !== "get" && r !== "head" && (U = await Uv(h, o)) !== 0) {
      let ee = new Request(i, {
        method: "POST",
        body: o,
        duplex: "half"
      }), L;
      if (N.isFormData(o) && (L = ee.headers.get("content-type")) && h.setContentType(L), ee.body) {
        const [ae, Z] = fh(
          U,
          So(dh(g))
        );
        o = mh(ee.body, hh, ae, Z);
      }
    }
    N.isString(S) || (S = S ? "include" : "omit");
    const B = "credentials" in Request.prototype;
    k = new Request(i, {
      ...E,
      signal: w,
      method: r.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: B ? S : void 0
    });
    let W = await fetch(k, E);
    const Y = Ec && (p === "stream" || p === "response");
    if (Ec && (m || Y && D)) {
      const ee = {};
      ["status", "statusText", "headers"].forEach((fe) => {
        ee[fe] = W[fe];
      });
      const L = N.toFiniteNumber(W.headers.get("content-length")), [ae, Z] = m && fh(
        L,
        So(dh(m), !0)
      ) || [];
      W = new Response(
        mh(W.body, hh, ae, () => {
          Z && Z(), D && D();
        }),
        ee
      );
    }
    p = p || "text";
    let ce = await xo[N.findKey(xo, p) || "text"](W, n);
    return !Y && D && D(), await new Promise((ee, L) => {
      _g(ee, L, {
        data: ce,
        headers: Dt.from(W.headers),
        status: W.status,
        statusText: W.statusText,
        config: n,
        request: k
      });
    });
  } catch (B) {
    throw D && D(), B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(
      new Ee("Network Error", Ee.ERR_NETWORK, n, k),
      {
        cause: B.cause || B
      }
    ) : Ee.from(B, B && B.code, n, k);
  }
}), Ac = {
  http: J1,
  xhr: kv,
  fetch: Lv
};
N.forEach(Ac, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const gh = (n) => `- ${n}`, Bv = (n) => N.isFunction(n) || n === null || n === !1, Bg = {
  getAdapter: (n) => {
    n = N.isArray(n) ? n : [n];
    const { length: i } = n;
    let r, o;
    const s = {};
    for (let f = 0; f < i; f++) {
      r = n[f];
      let d;
      if (o = r, !Bv(r) && (o = Ac[(d = String(r)).toLowerCase()], o === void 0))
        throw new Ee(`Unknown adapter '${d}'`);
      if (o)
        break;
      s[d || "#" + f] = o;
    }
    if (!o) {
      const f = Object.entries(s).map(
        ([m, g]) => `adapter ${m} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let d = i ? f.length > 1 ? `since :
` + f.map(gh).join(`
`) : " " + gh(f[0]) : "as no adapter specified";
      throw new Ee(
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
  return ac(n), n.headers = Dt.from(n.headers), n.data = nc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Bg.getAdapter(n.adapter || Fl.adapter)(n).then(function(o) {
    return ac(n), o.data = nc.call(
      n,
      n.transformResponse,
      o
    ), o.headers = Dt.from(o.headers), o;
  }, function(o) {
    return Og(o) || (ac(n), o && o.response && (o.response.data = nc.call(
      n,
      n.transformResponse,
      o.response
    ), o.response.headers = Dt.from(o.response.headers))), Promise.reject(o);
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
  function s(f, d) {
    return "[Axios v" + jg + "] Transitional option '" + f + "'" + d + (o ? ". " + o : "");
  }
  return (f, d, m) => {
    if (i === !1)
      throw new Ee(
        s(d, " has been removed" + (r ? " in " + r : "")),
        Ee.ERR_DEPRECATED
      );
    return r && !bh[d] && (bh[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(f, d, m) : !0;
  };
};
Do.spelling = function(i) {
  return (r, o) => (console.warn(`${o} is likely a misspelling of ${i}`), !0);
};
function jv(n, i, r) {
  if (typeof n != "object")
    throw new Ee("options must be an object", Ee.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let s = o.length;
  for (; s-- > 0; ) {
    const f = o[s], d = i[f];
    if (d) {
      const m = n[f], g = m === void 0 || d(m, f, n);
      if (g !== !0)
        throw new Ee("option " + f + " must be " + g, Ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ee("Unknown option " + f, Ee.ERR_BAD_OPTION);
  }
}
const bo = {
  assertOptions: jv,
  validators: Do
}, bn = bo.validators;
let Ma = class {
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
        const f = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? f && !String(o.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + f) : o.stack = f;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(i, r) {
    typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = Na(this.defaults, r);
    const { transitional: o, paramsSerializer: s, headers: f } = r;
    o !== void 0 && bo.assertOptions(o, {
      silentJSONParsing: bn.transitional(bn.boolean),
      forcedJSONParsing: bn.transitional(bn.boolean),
      clarifyTimeoutError: bn.transitional(bn.boolean)
    }, !1), s != null && (N.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : bo.assertOptions(s, {
      encode: bn.function,
      serialize: bn.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), bo.assertOptions(r, {
      baseUrl: bn.spelling("baseURL"),
      withXsrfToken: bn.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let d = f && N.merge(
      f.common,
      f[r.method]
    );
    f && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (k) => {
        delete f[k];
      }
    ), r.headers = Dt.concat(d, f);
    const m = [];
    let g = !0;
    this.interceptors.request.forEach(function(D) {
      typeof D.runWhen == "function" && D.runWhen(r) === !1 || (g = g && D.synchronous, m.unshift(D.fulfilled, D.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(D) {
      p.push(D.fulfilled, D.rejected);
    });
    let h, S = 0, E;
    if (!g) {
      const k = [yh.bind(this), void 0];
      for (k.unshift.apply(k, m), k.push.apply(k, p), E = k.length, h = Promise.resolve(r); S < E; )
        h = h.then(k[S++], k[S++]);
      return h;
    }
    E = m.length;
    let w = r;
    for (S = 0; S < E; ) {
      const k = m[S++], D = m[S++];
      try {
        w = k(w);
      } catch (U) {
        D.call(this, U);
        break;
      }
    }
    try {
      h = yh.call(this, w);
    } catch (k) {
      return Promise.reject(k);
    }
    for (S = 0, E = p.length; S < E; )
      h = h.then(p[S++], p[S++]);
    return h;
  }
  getUri(i) {
    i = Na(this.defaults, i);
    const r = Mg(i.baseURL, i.url, i.allowAbsoluteUrls);
    return zg(r, i.params, i.paramsSerializer);
  }
};
N.forEach(["delete", "get", "head", "options"], function(i) {
  Ma.prototype[i] = function(r, o) {
    return this.request(Na(o || {}, {
      method: i,
      url: r,
      data: (o || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(i) {
  function r(o) {
    return function(f, d, m) {
      return this.request(Na(m || {}, {
        method: i,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: d
      }));
    };
  }
  Ma.prototype[i] = r(), Ma.prototype[i + "Form"] = r(!0);
});
let qv = class qg {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(f) {
      r = f;
    });
    const o = this;
    this.promise.then((s) => {
      if (!o._listeners) return;
      let f = o._listeners.length;
      for (; f-- > 0; )
        o._listeners[f](s);
      o._listeners = null;
    }), this.promise.then = (s) => {
      let f;
      const d = new Promise((m) => {
        o.subscribe(m), f = m;
      }).then(s);
      return d.cancel = function() {
        o.unsubscribe(f);
      }, d;
    }, i(function(f, d, m) {
      o.reason || (o.reason = new zi(f, d, m), r(o.reason));
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
function Hv(n) {
  return function(r) {
    return n.apply(null, r);
  };
}
function Vv(n) {
  return N.isObject(n) && n.isAxiosError === !0;
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
  const i = new Ma(n), r = gg(Ma.prototype.request, i);
  return N.extend(r, Ma.prototype, i, { allOwnKeys: !0 }), N.extend(r, i, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Hg(Na(n, s));
  }, r;
}
const Me = Hg(Fl);
Me.Axios = Ma;
Me.CanceledError = zi;
Me.CancelToken = qv;
Me.isCancel = Og;
Me.VERSION = jg;
Me.toFormData = zo;
Me.AxiosError = Ee;
Me.Cancel = Me.CanceledError;
Me.all = function(i) {
  return Promise.all(i);
};
Me.spread = Hv;
Me.isAxiosError = Vv;
Me.mergeConfig = Na;
Me.AxiosHeaders = Dt;
Me.formToJSON = (n) => Dg(N.isHTMLForm(n) ? new FormData(n) : n);
Me.getAdapter = Bg.getAdapter;
Me.HttpStatusCode = Tc;
Me.default = Me;
const {
  Axios: m2,
  AxiosError: h2,
  CanceledError: g2,
  isCancel: y2,
  CancelToken: b2,
  VERSION: v2,
  all: S2,
  Cancel: x2,
  isAxiosError: w2,
  spread: E2,
  toFormData: A2,
  AxiosHeaders: T2,
  HttpStatusCode: C2,
  formToJSON: k2,
  getAdapter: z2,
  mergeConfig: R2
} = Me;
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iv = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Qv = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), vh = (n) => {
  const i = Qv(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, Vg = (...n) => n.filter((i, r, o) => !!i && i.trim() !== "" && o.indexOf(i) === r).join(" ").trim(), Gv = (n) => {
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
const Fv = de.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: f,
    iconNode: d,
    ...m
  }, g) => de.createElement(
    "svg",
    {
      ref: g,
      ...Yv,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: o ? Number(r) * 24 / Number(i) : r,
      className: Vg("lucide", s),
      ...!f && !Gv(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...d.map(([p, h]) => de.createElement(p, h)),
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
const _t = (n, i) => {
  const r = de.forwardRef(
    ({ className: o, ...s }, f) => de.createElement(Fv, {
      ref: f,
      iconNode: i,
      className: Vg(
        `lucide-${Iv(vh(n))}`,
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
const Xv = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], Ig = _t("bot", Xv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pv = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Qg = _t("chevron-down", Pv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kv = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Zv = _t("copy", Kv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jv = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], Wv = _t("globe", Jv);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $v = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Gg = _t("loader-circle", $v);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eS = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], Sh = _t("message-circle", eS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tS = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], nS = _t("minimize-2", tS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aS = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], iS = _t("moon", aS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lS = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], rS = _t("send", lS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oS = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], uS = _t("sun", oS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sS = [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ]
], cS = _t("thumbs-down", sS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fS = [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ]
], dS = _t("thumbs-up", fS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pS = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], mS = _t("user", pS);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hS = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], gS = _t("x", hS);
function Yg(n) {
  var i, r, o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (i = 0; i < s; i++) n[i] && (r = Yg(n[i])) && (o && (o += " "), o += r);
  } else for (r in n) n[r] && (o && (o += " "), o += r);
  return o;
}
function Fg() {
  for (var n, i, r = 0, o = "", s = arguments.length; r < s; r++) (n = arguments[r]) && (i = Yg(n)) && (o && (o += " "), o += i);
  return o;
}
const Yc = "-", yS = (n) => {
  const i = vS(n), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = n;
  return {
    getClassGroupId: (d) => {
      const m = d.split(Yc);
      return m[0] === "" && m.length !== 1 && m.shift(), Xg(m, i) || bS(d);
    },
    getConflictingClassGroupIds: (d, m) => {
      const g = r[d] || [];
      return m && o[d] ? [...g, ...o[d]] : g;
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
  const f = n.join(Yc);
  return i.validators.find(({
    validator: d
  }) => d(f))?.classGroupId;
}, xh = /^\[(.+)\]$/, bS = (n) => {
  if (xh.test(n)) {
    const i = xh.exec(n)[1], r = i?.substring(0, i.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, vS = (n) => {
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
      const f = s === "" ? i : wh(i, s);
      f.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (SS(s)) {
        Cc(s(o), i, r, o);
        return;
      }
      i.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([f, d]) => {
      Cc(d, wh(i, f), r, o);
    });
  });
}, wh = (n, i) => {
  let r = n;
  return i.split(Yc).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, SS = (n) => n.isThemeGetter, xS = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (f, d) => {
    r.set(f, d), i++, i > n && (i = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let d = r.get(f);
      if (d !== void 0)
        return d;
      if ((d = o.get(f)) !== void 0)
        return s(f, d), d;
    },
    set(f, d) {
      r.has(f) ? r.set(f, d) : s(f, d);
    }
  };
}, kc = "!", zc = ":", wS = zc.length, ES = (n) => {
  const {
    prefix: i,
    experimentalParseClassName: r
  } = n;
  let o = (s) => {
    const f = [];
    let d = 0, m = 0, g = 0, p;
    for (let k = 0; k < s.length; k++) {
      let D = s[k];
      if (d === 0 && m === 0) {
        if (D === zc) {
          f.push(s.slice(g, k)), g = k + wS;
          continue;
        }
        if (D === "/") {
          p = k;
          continue;
        }
      }
      D === "[" ? d++ : D === "]" ? d-- : D === "(" ? m++ : D === ")" && m--;
    }
    const h = f.length === 0 ? s : s.substring(g), S = AS(h), E = S !== h, w = p && p > g ? p - g : void 0;
    return {
      modifiers: f,
      hasImportantModifier: E,
      baseClassName: S,
      maybePostfixModifierPosition: w
    };
  };
  if (i) {
    const s = i + zc, f = o;
    o = (d) => d.startsWith(s) ? f(d.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: d,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const s = o;
    o = (f) => r({
      className: f,
      parseClassName: s
    });
  }
  return o;
}, AS = (n) => n.endsWith(kc) ? n.substring(0, n.length - 1) : n.startsWith(kc) ? n.substring(1) : n, TS = (n) => {
  const i = Object.fromEntries(n.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const s = [];
    let f = [];
    return o.forEach((d) => {
      d[0] === "[" || i[d] ? (s.push(...f.sort(), d), f = []) : f.push(d);
    }), s.push(...f.sort()), s;
  };
}, CS = (n) => ({
  cache: xS(n.cacheSize),
  parseClassName: ES(n),
  sortModifiers: TS(n),
  ...yS(n)
}), kS = /\s+/, zS = (n, i) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: f
  } = i, d = [], m = n.trim().split(kS);
  let g = "";
  for (let p = m.length - 1; p >= 0; p -= 1) {
    const h = m[p], {
      isExternal: S,
      modifiers: E,
      hasImportantModifier: w,
      baseClassName: k,
      maybePostfixModifierPosition: D
    } = r(h);
    if (S) {
      g = h + (g.length > 0 ? " " + g : g);
      continue;
    }
    let U = !!D, B = o(U ? k.substring(0, D) : k);
    if (!B) {
      if (!U) {
        g = h + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (B = o(k), !B) {
        g = h + (g.length > 0 ? " " + g : g);
        continue;
      }
      U = !1;
    }
    const W = f(E).join(":"), Y = w ? W + kc : W, ce = Y + B;
    if (d.includes(ce))
      continue;
    d.push(ce);
    const ee = s(B, U);
    for (let L = 0; L < ee.length; ++L) {
      const ae = ee[L];
      d.push(Y + ae);
    }
    g = h + (g.length > 0 ? " " + g : g);
  }
  return g;
};
function RS() {
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
function DS(n, ...i) {
  let r, o, s, f = d;
  function d(g) {
    const p = i.reduce((h, S) => S(h), n());
    return r = CS(p), o = r.cache.get, s = r.cache.set, f = m, m(g);
  }
  function m(g) {
    const p = o(g);
    if (p)
      return p;
    const h = zS(g, r);
    return s(g, h), h;
  }
  return function() {
    return f(RS.apply(null, arguments));
  };
}
const rt = (n) => {
  const i = (r) => r[n] || [];
  return i.isThemeGetter = !0, i;
}, Kg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Zg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, OS = /^\d+\/\d+$/, _S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, MS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, NS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, US = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, LS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, wi = (n) => OS.test(n), ke = (n) => !!n && !Number.isNaN(Number(n)), ca = (n) => !!n && Number.isInteger(Number(n)), ic = (n) => n.endsWith("%") && ke(n.slice(0, -1)), jn = (n) => _S.test(n), BS = () => !0, jS = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  MS.test(n) && !NS.test(n)
), Jg = () => !1, qS = (n) => US.test(n), HS = (n) => LS.test(n), VS = (n) => !ue(n) && !se(n), IS = (n) => Ri(n, ey, Jg), ue = (n) => Kg.test(n), Da = (n) => Ri(n, ty, jS), lc = (n) => Ri(n, XS, ke), Eh = (n) => Ri(n, Wg, Jg), QS = (n) => Ri(n, $g, HS), uo = (n) => Ri(n, ny, qS), se = (n) => Zg.test(n), Ul = (n) => Di(n, ty), GS = (n) => Di(n, PS), Ah = (n) => Di(n, Wg), YS = (n) => Di(n, ey), FS = (n) => Di(n, $g), so = (n) => Di(n, ny, !0), Ri = (n, i, r) => {
  const o = Kg.exec(n);
  return o ? o[1] ? i(o[1]) : r(o[2]) : !1;
}, Di = (n, i, r = !1) => {
  const o = Zg.exec(n);
  return o ? o[1] ? i(o[1]) : r : !1;
}, Wg = (n) => n === "position" || n === "percentage", $g = (n) => n === "image" || n === "url", ey = (n) => n === "length" || n === "size" || n === "bg-size", ty = (n) => n === "length", XS = (n) => n === "number", PS = (n) => n === "family-name", ny = (n) => n === "shadow", KS = () => {
  const n = rt("color"), i = rt("font"), r = rt("text"), o = rt("font-weight"), s = rt("tracking"), f = rt("leading"), d = rt("breakpoint"), m = rt("container"), g = rt("spacing"), p = rt("radius"), h = rt("shadow"), S = rt("inset-shadow"), E = rt("text-shadow"), w = rt("drop-shadow"), k = rt("blur"), D = rt("perspective"), U = rt("aspect"), B = rt("ease"), W = rt("animate"), Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ce = () => [
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
  ], ee = () => [...ce(), se, ue], L = () => ["auto", "hidden", "clip", "visible", "scroll"], ae = () => ["auto", "contain", "none"], Z = () => [se, ue, g], fe = () => [wi, "full", "auto", ...Z()], we = () => [ca, "none", "subgrid", se, ue], ie = () => ["auto", {
    span: ["full", ca, se, ue]
  }, ca, se, ue], te = () => [ca, "auto", se, ue], re = () => ["auto", "min", "max", "fr", se, ue], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ne = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...Z()], F = () => [wi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Z()], Q = () => [n, se, ue], be = () => [...ce(), Ah, Eh, {
    position: [se, ue]
  }], y = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", YS, IS, {
    size: [se, ue]
  }], X = () => [ic, Ul, Da], x = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    se,
    ue
  ], $ = () => ["", ke, Ul, Da], Se = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ze = () => [ke, ic, Ah, Eh], _e = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    k,
    se,
    ue
  ], et = () => ["none", ke, se, ue], St = () => ["none", ke, se, ue], Nt = () => [ke, se, ue], fn = () => [wi, "full", ...Z()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [jn],
      breakpoint: [jn],
      color: [BS],
      container: [jn],
      "drop-shadow": [jn],
      ease: ["in", "out", "in-out"],
      font: [VS],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [jn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [jn],
      shadow: [jn],
      spacing: ["px", ke],
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
        aspect: ["auto", "square", wi, ue, se, U]
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
        columns: [ke, ue, se, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Y()
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
        object: ee()
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
        z: [ca, "auto", se, ue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [wi, "full", "auto", m, ...Z()]
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
        flex: [ke, wi, "auto", "initial", "none", ue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ke, se, ue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ke, se, ue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ca, "first", "last", "none", se, ue]
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
        col: ie()
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
        row: ie()
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
        "auto-cols": re()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": re()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: Z()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Z()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Z()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...P(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ne(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ne()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...P()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": P()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ne(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ne()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Z()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Z()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Z()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Z()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Z()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Z()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Z()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Z()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Z()
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
        "space-x": Z()
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
        "space-y": Z()
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
        size: F()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...F()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...F()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...F()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...F()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...F()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...F()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ul, Da]
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
        font: [o, se, lc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ic, ue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [GS, ue, i]
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
        tracking: [s, se, ue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ke, "none", se, lc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...Z()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", se, ue]
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
        list: ["disc", "decimal", "none", se, ue]
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
        decoration: [...Se(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ke, "from-font", "auto", se, Da]
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
        "underline-offset": [ke, "auto", se, ue]
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
        indent: Z()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se, ue]
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
        content: ["none", se, ue]
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
        bg: be()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: y()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: j()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ca, se, ue],
          radial: ["", se, ue],
          conic: [ca, se, ue]
        }, FS, QS]
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
        from: X()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: X()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: X()
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
        outline: [...Se(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ke, se, ue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ke, Ul, Da]
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
          so,
          uo
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
        "inset-shadow": ["none", S, so, uo]
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
        ring: Q()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ke, Da]
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
        "inset-ring": $()
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
        "text-shadow": ["none", E, so, uo]
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
        opacity: [ke, se, ue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        "mask-linear": [ke]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ze()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ze()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": Q()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ze()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ze()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": Q()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ze()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ze()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": Q()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ze()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ze()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": Q()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ze()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ze()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": Q()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ze()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ze()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": Q()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ze()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ze()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": Q()
      }],
      "mask-image-radial": [{
        "mask-radial": [se, ue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ze()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ze()
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
        "mask-radial-at": ce()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ke]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ze()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ze()
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
        mask: be()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: y()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: j()
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
        mask: ["none", se, ue]
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
          se,
          ue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: _e()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ke, se, ue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ke, se, ue]
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
        "drop-shadow": Q()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ke, se, ue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ke, se, ue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ke, se, ue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ke, se, ue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ke, se, ue]
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
          se,
          ue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": _e()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ke, se, ue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ke, se, ue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ke, se, ue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ke, se, ue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ke, se, ue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ke, se, ue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ke, se, ue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ke, se, ue]
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
        "border-spacing": Z()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Z()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Z()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", se, ue]
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
        duration: [ke, "initial", se, ue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", B, se, ue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ke, se, ue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", W, se, ue]
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
        perspective: [D, se, ue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ee()
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
        scale: St()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": St()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": St()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": St()
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
        skew: Nt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Nt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Nt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [se, ue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ee()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se, ue]
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
        "scroll-m": Z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Z()
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
        "will-change": ["auto", "scroll", "contents", "transform", se, ue]
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
        stroke: [ke, Ul, Da, lc]
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
}, ZS = /* @__PURE__ */ DS(KS);
function an(...n) {
  return ZS(Fg(n));
}
function ay(n, i) {
  const r = n.replace("#", ""), o = parseInt(r.substr(0, 2), 16), s = parseInt(r.substr(2, 2), 16), f = parseInt(r.substr(4, 2), 16), d = (100 - i) / 100, m = Math.round(o * d), g = Math.round(s * d), p = Math.round(f * d);
  return "#" + (m < 16 ? "0" : "") + m.toString(16) + (g < 16 ? "0" : "") + g.toString(16) + (p < 16 ? "0" : "") + p.toString(16);
}
function JS(n, i) {
  const r = {};
  return (n[n.length - 1] === "" ? [...n, ""] : n).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const WS = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, $S = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ex = {};
function Th(n, i) {
  return (ex.jsx ? $S : WS).test(n);
}
const tx = /[ \t\n\f\r]/g;
function nx(n) {
  return typeof n == "object" ? n.type === "text" ? Ch(n.value) : !1 : Ch(n);
}
function Ch(n) {
  return n.replace(tx, "") === "";
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
let ax = 0;
const Te = Ua(), at = Ua(), Dc = Ua(), J = Ua(), Fe = Ua(), Ti = Ua(), Yt = Ua();
function Ua() {
  return 2 ** ++ax;
}
const Oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Te,
  booleanish: at,
  commaOrSpaceSeparated: Yt,
  commaSeparated: Ti,
  number: J,
  overloadedBoolean: Dc,
  spaceSeparated: Fe
}, Symbol.toStringTag, { value: "Module" })), rc = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Oc)
);
class Fc extends Mt {
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
    let f = -1;
    if (super(i, r), kh(this, "space", s), typeof o == "number")
      for (; ++f < rc.length; ) {
        const d = rc[f];
        kh(this, rc[f], (o & Oc[d]) === Oc[d]);
      }
  }
}
Fc.prototype.defined = !0;
function kh(n, i, r) {
  r && (n[i] = r);
}
function Oi(n) {
  const i = {}, r = {};
  for (const [o, s] of Object.entries(n.properties)) {
    const f = new Fc(
      o,
      n.transform(n.attributes || {}, o),
      s,
      n.space
    );
    n.mustUseProperty && n.mustUseProperty.includes(o) && (f.mustUseProperty = !0), i[o] = f, r[Rc(o)] = o, r[Rc(f.attribute)] = o;
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
    ariaColCount: J,
    ariaColIndex: J,
    ariaColSpan: J,
    ariaControls: Fe,
    ariaCurrent: null,
    ariaDescribedBy: Fe,
    ariaDetails: null,
    ariaDisabled: at,
    ariaDropEffect: Fe,
    ariaErrorMessage: null,
    ariaExpanded: at,
    ariaFlowTo: Fe,
    ariaGrabbed: at,
    ariaHasPopup: null,
    ariaHidden: at,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Fe,
    ariaLevel: J,
    ariaLive: null,
    ariaModal: at,
    ariaMultiLine: at,
    ariaMultiSelectable: at,
    ariaOrientation: null,
    ariaOwns: Fe,
    ariaPlaceholder: null,
    ariaPosInSet: J,
    ariaPressed: at,
    ariaReadOnly: at,
    ariaRelevant: null,
    ariaRequired: at,
    ariaRoleDescription: Fe,
    ariaRowCount: J,
    ariaRowIndex: J,
    ariaRowSpan: J,
    ariaSelected: at,
    ariaSetSize: J,
    ariaSort: null,
    ariaValueMax: J,
    ariaValueMin: J,
    ariaValueNow: J,
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
const ix = Oi({
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
    acceptCharset: Fe,
    accessKey: Fe,
    action: null,
    allow: null,
    allowFullScreen: Te,
    allowPaymentRequest: Te,
    allowUserMedia: Te,
    alt: null,
    as: null,
    async: Te,
    autoCapitalize: null,
    autoComplete: Fe,
    autoFocus: Te,
    autoPlay: Te,
    blocking: Fe,
    capture: null,
    charSet: null,
    checked: Te,
    cite: null,
    className: Fe,
    cols: J,
    colSpan: null,
    content: null,
    contentEditable: at,
    controls: Te,
    controlsList: Fe,
    coords: J | Ti,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Te,
    defer: Te,
    dir: null,
    dirName: null,
    disabled: Te,
    download: Dc,
    draggable: at,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Te,
    formTarget: null,
    headers: Fe,
    height: J,
    hidden: Dc,
    high: J,
    href: null,
    hrefLang: null,
    htmlFor: Fe,
    httpEquiv: Fe,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Te,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Te,
    itemId: null,
    itemProp: Fe,
    itemRef: Fe,
    itemScope: Te,
    itemType: Fe,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Te,
    low: J,
    manifest: null,
    max: null,
    maxLength: J,
    media: null,
    method: null,
    min: null,
    minLength: J,
    multiple: Te,
    muted: Te,
    name: null,
    nonce: null,
    noModule: Te,
    noValidate: Te,
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
    open: Te,
    optimum: J,
    pattern: null,
    ping: Fe,
    placeholder: null,
    playsInline: Te,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Te,
    referrerPolicy: null,
    rel: Fe,
    required: Te,
    reversed: Te,
    rows: J,
    rowSpan: J,
    sandbox: Fe,
    scope: null,
    scoped: Te,
    seamless: Te,
    selected: Te,
    shadowRootClonable: Te,
    shadowRootDelegatesFocus: Te,
    shadowRootMode: null,
    shape: null,
    size: J,
    sizes: null,
    slot: null,
    span: J,
    spellCheck: at,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: J,
    step: null,
    style: null,
    tabIndex: J,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Te,
    useMap: null,
    value: at,
    width: J,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Fe,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: J,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: J,
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
    compact: Te,
    // Lists. Use CSS to reduce space between items instead
    declare: Te,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: J,
    // `<img>` and `<object>`
    leftMargin: J,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: J,
    // `<body>`
    marginWidth: J,
    // `<body>`
    noResize: Te,
    // `<frame>`
    noHref: Te,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Te,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Te,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: J,
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
    topMargin: J,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: J,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Te,
    disableRemotePlayback: Te,
    prefix: null,
    property: null,
    results: J,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: oy
}), lx = Oi({
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
    accentHeight: J,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: J,
    amplitude: J,
    arabicForm: null,
    ascent: J,
    attributeName: null,
    attributeType: null,
    azimuth: J,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: J,
    by: null,
    calcMode: null,
    capHeight: J,
    className: Fe,
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
    descent: J,
    diffuseConstant: J,
    direction: null,
    display: null,
    dur: null,
    divisor: J,
    dominantBaseline: null,
    download: Te,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: J,
    enableBackground: null,
    end: null,
    event: null,
    exponent: J,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: J,
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
    hanging: J,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: J,
    horizOriginX: J,
    horizOriginY: J,
    id: null,
    ideographic: J,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: J,
    k: J,
    k1: J,
    k2: J,
    k3: J,
    k4: J,
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
    limitingConeAngle: J,
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
    mediaSize: J,
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
    overlinePosition: J,
    overlineThickness: J,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: J,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Fe,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: J,
    pointsAtY: J,
    pointsAtZ: J,
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
    specularConstant: J,
    specularExponent: J,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: J,
    strikethroughThickness: J,
    string: null,
    stroke: null,
    strokeDashArray: Yt,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: J,
    strokeOpacity: J,
    strokeWidth: null,
    style: null,
    surfaceScale: J,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Yt,
    tabIndex: J,
    tableValues: null,
    target: null,
    targetX: J,
    targetY: J,
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
    underlinePosition: J,
    underlineThickness: J,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: J,
    values: null,
    vAlphabetic: J,
    vMathematical: J,
    vectorEffect: null,
    vHanging: J,
    vIdeographic: J,
    version: null,
    vertAdvY: J,
    vertOriginX: J,
    vertOriginY: J,
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
    xHeight: J,
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
}), rx = {
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
}, ox = /[A-Z]/g, zh = /-[a-z]/g, ux = /^data[-\w.:]+$/i;
function sx(n, i) {
  const r = Rc(i);
  let o = i, s = Mt;
  if (r in n.normal)
    return n.property[n.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && ux.test(i)) {
    if (i.charAt(4) === "-") {
      const f = i.slice(5).replace(zh, fx);
      o = "data" + f.charAt(0).toUpperCase() + f.slice(1);
    } else {
      const f = i.slice(4);
      if (!zh.test(f)) {
        let d = f.replace(ox, cx);
        d.charAt(0) !== "-" && (d = "-" + d), i = "data" + d;
      }
    }
    s = Fc;
  }
  return new s(o, i);
}
function cx(n) {
  return "-" + n.toLowerCase();
}
function fx(n) {
  return n.charAt(1).toUpperCase();
}
const dx = iy([ly, ix, uy, sy, cy], "html"), Xc = iy([ly, lx, uy, sy, cy], "svg");
function px(n) {
  return n.join(" ").trim();
}
var Ei = {}, oc, Rh;
function mx() {
  if (Rh) return oc;
  Rh = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, r = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, f = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, d = /^[;\s]*/, m = /^\s+|\s+$/g, g = `
`, p = "/", h = "*", S = "", E = "comment", w = "declaration";
  oc = function(D, U) {
    if (typeof D != "string")
      throw new TypeError("First argument must be a string");
    if (!D) return [];
    U = U || {};
    var B = 1, W = 1;
    function Y(re) {
      var P = re.match(i);
      P && (B += P.length);
      var ne = re.lastIndexOf(g);
      W = ~ne ? re.length - ne : W + re.length;
    }
    function ce() {
      var re = { line: B, column: W };
      return function(P) {
        return P.position = new ee(re), Z(), P;
      };
    }
    function ee(re) {
      this.start = re, this.end = { line: B, column: W }, this.source = U.source;
    }
    ee.prototype.content = D;
    function L(re) {
      var P = new Error(
        U.source + ":" + B + ":" + W + ": " + re
      );
      if (P.reason = re, P.filename = U.source, P.line = B, P.column = W, P.source = D, !U.silent) throw P;
    }
    function ae(re) {
      var P = re.exec(D);
      if (P) {
        var ne = P[0];
        return Y(ne), D = D.slice(ne.length), P;
      }
    }
    function Z() {
      ae(r);
    }
    function fe(re) {
      var P;
      for (re = re || []; P = we(); )
        P !== !1 && re.push(P);
      return re;
    }
    function we() {
      var re = ce();
      if (!(p != D.charAt(0) || h != D.charAt(1))) {
        for (var P = 2; S != D.charAt(P) && (h != D.charAt(P) || p != D.charAt(P + 1)); )
          ++P;
        if (P += 2, S === D.charAt(P - 1))
          return L("End of comment missing");
        var ne = D.slice(2, P - 2);
        return W += 2, Y(ne), D = D.slice(P), W += 2, re({
          type: E,
          comment: ne
        });
      }
    }
    function ie() {
      var re = ce(), P = ae(o);
      if (P) {
        if (we(), !ae(s)) return L("property missing ':'");
        var ne = ae(f), O = re({
          type: w,
          property: k(P[0].replace(n, S)),
          value: ne ? k(ne[0].replace(n, S)) : S
        });
        return ae(d), O;
      }
    }
    function te() {
      var re = [];
      fe(re);
      for (var P; P = ie(); )
        P !== !1 && (re.push(P), fe(re));
      return re;
    }
    return Z(), te();
  };
  function k(D) {
    return D ? D.replace(m, S) : S;
  }
  return oc;
}
var Dh;
function hx() {
  if (Dh) return Ei;
  Dh = 1;
  var n = Ei && Ei.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(Ei, "__esModule", { value: !0 }), Ei.default = r;
  var i = n(mx());
  function r(o, s) {
    var f = null;
    if (!o || typeof o != "string")
      return f;
    var d = (0, i.default)(o), m = typeof s == "function";
    return d.forEach(function(g) {
      if (g.type === "declaration") {
        var p = g.property, h = g.value;
        m ? s(p, h, g) : h && (f = f || {}, f[p] = h);
      }
    }), f;
  }
  return Ei;
}
var Ll = {}, Oh;
function gx() {
  if (Oh) return Ll;
  Oh = 1, Object.defineProperty(Ll, "__esModule", { value: !0 }), Ll.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, r = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, f = function(p) {
    return !p || r.test(p) || n.test(p);
  }, d = function(p, h) {
    return h.toUpperCase();
  }, m = function(p, h) {
    return "".concat(h, "-");
  }, g = function(p, h) {
    return h === void 0 && (h = {}), f(p) ? p : (p = p.toLowerCase(), h.reactCompat ? p = p.replace(s, m) : p = p.replace(o, m), p.replace(i, d));
  };
  return Ll.camelCase = g, Ll;
}
var Bl, _h;
function yx() {
  if (_h) return Bl;
  _h = 1;
  var n = Bl && Bl.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, i = n(hx()), r = gx();
  function o(s, f) {
    var d = {};
    return !s || typeof s != "string" || (0, i.default)(s, function(m, g) {
      m && g && (d[(0, r.camelCase)(m, f)] = g);
    }), d;
  }
  return o.default = o, Bl = o, Bl;
}
var bx = yx();
const vx = /* @__PURE__ */ Hc(bx), fy = dy("end"), Pc = dy("start");
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
function Sx(n) {
  const i = Pc(n), r = fy(n);
  if (i && r)
    return { start: i, end: r };
}
function Hl(n) {
  return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? Mh(n.position) : "start" in n || "end" in n ? Mh(n) : "line" in n || "column" in n ? _c(n) : "";
}
function _c(n) {
  return Nh(n && n.line) + ":" + Nh(n && n.column);
}
function Mh(n) {
  return _c(n && n.start) + "-" + _c(n && n.end);
}
function Nh(n) {
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
  constructor(i, r, o) {
    super(), typeof r == "string" && (o = r, r = void 0);
    let s = "", f = {}, d = !1;
    if (r && ("line" in r && "column" in r ? f = { place: r } : "start" in r && "end" in r ? f = { place: r } : "type" in r ? f = {
      ancestors: [r],
      place: r.position
    } : f = { ...r }), typeof i == "string" ? s = i : !f.cause && i && (d = !0, s = i.message, f.cause = i), !f.ruleId && !f.source && typeof o == "string") {
      const g = o.indexOf(":");
      g === -1 ? f.ruleId = o : (f.source = o.slice(0, g), f.ruleId = o.slice(g + 1));
    }
    if (!f.place && f.ancestors && f.ancestors) {
      const g = f.ancestors[f.ancestors.length - 1];
      g && (f.place = g.position);
    }
    const m = f.place && "start" in f.place ? f.place.start : f.place;
    this.ancestors = f.ancestors || void 0, this.cause = f.cause || void 0, this.column = m ? m.column : void 0, this.fatal = void 0, this.file, this.message = s, this.line = m ? m.line : void 0, this.name = Hl(f.place) || "1:1", this.place = f.place || void 0, this.reason = this.message, this.ruleId = f.ruleId || void 0, this.source = f.source || void 0, this.stack = d && f.cause && typeof f.cause.stack == "string" ? f.cause.stack : "", this.actual, this.expected, this.note, this.url;
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
const Kc = {}.hasOwnProperty, xx = /* @__PURE__ */ new Map(), wx = /[A-Z]/g, Ex = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Ax = /* @__PURE__ */ new Set(["td", "th"]), py = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Tx(n, i) {
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
    o = _x(r, i.jsx, i.jsxs);
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
    schema: i.space === "svg" ? Xc : dx,
    stylePropertyNameCase: i.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
  }, f = my(s, n, void 0);
  return f && typeof f != "string" ? f : s.create(
    n,
    s.Fragment,
    { children: f || void 0 },
    void 0
  );
}
function my(n, i, r) {
  if (i.type === "element")
    return Cx(n, i, r);
  if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
    return kx(n, i);
  if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
    return Rx(n, i, r);
  if (i.type === "mdxjsEsm")
    return zx(n, i);
  if (i.type === "root")
    return Dx(n, i, r);
  if (i.type === "text")
    return Ox(n, i);
}
function Cx(n, i, r) {
  const o = n.schema;
  let s = o;
  i.tagName.toLowerCase() === "svg" && o.space === "html" && (s = Xc, n.schema = s), n.ancestors.push(i);
  const f = gy(n, i.tagName, !1), d = Nx(n, i);
  let m = Jc(n, i);
  return Ex.has(i.tagName) && (m = m.filter(function(g) {
    return typeof g == "string" ? !nx(g) : !0;
  })), hy(n, d, f, i), Zc(d, m), n.ancestors.pop(), n.schema = o, n.create(i, f, d, r);
}
function kx(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const o = i.data.estree.body[0];
    return o.type, /** @type {Child | undefined} */
    n.evaluater.evaluateExpression(o.expression);
  }
  Gl(n, i.position);
}
function zx(n, i) {
  if (i.data && i.data.estree && n.evaluater)
    return (
      /** @type {Child | undefined} */
      n.evaluater.evaluateProgram(i.data.estree)
    );
  Gl(n, i.position);
}
function Rx(n, i, r) {
  const o = n.schema;
  let s = o;
  i.name === "svg" && o.space === "html" && (s = Xc, n.schema = s), n.ancestors.push(i);
  const f = i.name === null ? n.Fragment : gy(n, i.name, !0), d = Ux(n, i), m = Jc(n, i);
  return hy(n, d, f, i), Zc(d, m), n.ancestors.pop(), n.schema = o, n.create(i, f, d, r);
}
function Dx(n, i, r) {
  const o = {};
  return Zc(o, Jc(n, i)), n.create(i, n.Fragment, o, r);
}
function Ox(n, i) {
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
function _x(n, i, r) {
  return o;
  function o(s, f, d, m) {
    const p = Array.isArray(d.children) ? r : i;
    return m ? p(f, d, m) : p(f, d);
  }
}
function Mx(n, i) {
  return r;
  function r(o, s, f, d) {
    const m = Array.isArray(f.children), g = Pc(o);
    return i(
      s,
      f,
      d,
      m,
      {
        columnNumber: g ? g.column - 1 : void 0,
        fileName: n,
        lineNumber: g ? g.line : void 0
      },
      void 0
    );
  }
}
function Nx(n, i) {
  const r = {};
  let o, s;
  for (s in i.properties)
    if (s !== "children" && Kc.call(i.properties, s)) {
      const f = Lx(n, s, i.properties[s]);
      if (f) {
        const [d, m] = f;
        n.tableCellAlignToStyle && d === "align" && typeof m == "string" && Ax.has(i.tagName) ? o = m : r[d] = m;
      }
    }
  if (o) {
    const f = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    f[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = o;
  }
  return r;
}
function Ux(n, i) {
  const r = {};
  for (const o of i.attributes)
    if (o.type === "mdxJsxExpressionAttribute")
      if (o.data && o.data.estree && n.evaluater) {
        const f = o.data.estree.body[0];
        f.type;
        const d = f.expression;
        d.type;
        const m = d.properties[0];
        m.type, Object.assign(
          r,
          n.evaluater.evaluateExpression(m.argument)
        );
      } else
        Gl(n, i.position);
    else {
      const s = o.name;
      let f;
      if (o.value && typeof o.value == "object")
        if (o.value.data && o.value.data.estree && n.evaluater) {
          const m = o.value.data.estree.body[0];
          m.type, f = n.evaluater.evaluateExpression(m.expression);
        } else
          Gl(n, i.position);
      else
        f = o.value === null ? !0 : o.value;
      r[s] = /** @type {Props[keyof Props]} */
      f;
    }
  return r;
}
function Jc(n, i) {
  const r = [];
  let o = -1;
  const s = n.passKeys ? /* @__PURE__ */ new Map() : xx;
  for (; ++o < i.children.length; ) {
    const f = i.children[o];
    let d;
    if (n.passKeys) {
      const g = f.type === "element" ? f.tagName : f.type === "mdxJsxFlowElement" || f.type === "mdxJsxTextElement" ? f.name : void 0;
      if (g) {
        const p = s.get(g) || 0;
        d = g + "-" + p, s.set(g, p + 1);
      }
    }
    const m = my(n, f, d);
    m !== void 0 && r.push(m);
  }
  return r;
}
function Lx(n, i, r) {
  const o = sx(n.schema, i);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = o.commaSeparated ? JS(r) : px(r)), o.property === "style") {
      let s = typeof r == "object" ? r : Bx(n, String(r));
      return n.stylePropertyNameCase === "css" && (s = jx(s)), ["style", s];
    }
    return [
      n.elementAttributeNameCase === "react" && o.space ? rx[o.property] || o.property : o.attribute,
      r
    ];
  }
}
function Bx(n, i) {
  try {
    return vx(i, { reactCompat: !0 });
  } catch (r) {
    if (n.ignoreInvalidStyle)
      return {};
    const o = (
      /** @type {Error} */
      r
    ), s = new vt("Cannot parse `style` attribute", {
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
    let f = -1, d;
    for (; ++f < s.length; ) {
      const m = Th(s[f]) ? { type: "Identifier", name: s[f] } : { type: "Literal", value: s[f] };
      d = d ? {
        type: "MemberExpression",
        object: d,
        property: m,
        computed: !!(f && m.type === "Literal"),
        optional: !1
      } : m;
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
  const r = new vt(
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
function jx(n) {
  const i = {};
  let r;
  for (r in n)
    Kc.call(n, r) && (i[qx(r)] = n[r]);
  return i;
}
function qx(n) {
  let i = n.replace(wx, Hx);
  return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
}
function Hx(n) {
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
}, Vx = {};
function Ix(n, i) {
  const r = Vx, o = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, s = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return yy(n, o, s);
}
function yy(n, i, r) {
  if (Qx(n)) {
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
function Qx(n) {
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
  let f = 0, d;
  if (i < 0 ? i = -i > s ? 0 : s + i : i = i > s ? s : i, r = r > 0 ? r : 0, o.length < 1e4)
    d = Array.from(o), d.unshift(i, r), n.splice(...d);
  else
    for (r && n.splice(i, r); f < o.length; )
      d = o.slice(f, f + 1e4), d.unshift(i, 0), n.splice(...d), f += 1e4, i += 1e4;
}
function ln(n, i) {
  return n.length > 0 ? (xn(n, n.length, 0, i), n) : i;
}
const Bh = {}.hasOwnProperty;
function Gx(n) {
  const i = {};
  let r = -1;
  for (; ++r < n.length; )
    Yx(i, n[r]);
  return i;
}
function Yx(n, i) {
  let r;
  for (r in i) {
    const s = (Bh.call(n, r) ? n[r] : void 0) || (n[r] = {}), f = i[r];
    let d;
    if (f)
      for (d in f) {
        Bh.call(s, d) || (s[d] = []);
        const m = f[d];
        Fx(
          // @ts-expect-error Looks like a list.
          s[d],
          Array.isArray(m) ? m : m ? [m] : []
        );
      }
  }
}
function Fx(n, i) {
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
const Sn = da(/[A-Za-z]/), Ft = da(/[\dA-Za-z]/), Xx = da(/[#-'*+\--9=?A-Z^-~]/);
function Mc(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const Nc = da(/\d/), Px = da(/[\dA-Fa-f]/), Kx = da(/[!-/:-@[-`{-~]/);
function xe(n) {
  return n !== null && n < -2;
}
function Ot(n) {
  return n !== null && (n < 0 || n === 32);
}
function Be(n) {
  return n === -2 || n === -1 || n === 32;
}
const Zx = da(new RegExp("\\p{P}|\\p{S}", "u")), Jx = da(/\s/);
function da(n) {
  return i;
  function i(r) {
    return r !== null && r > -1 && n.test(String.fromCharCode(r));
  }
}
function _i(n) {
  const i = [];
  let r = -1, o = 0, s = 0;
  for (; ++r < n.length; ) {
    const f = n.charCodeAt(r);
    let d = "";
    if (f === 37 && Ft(n.charCodeAt(r + 1)) && Ft(n.charCodeAt(r + 2)))
      s = 2;
    else if (f < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f)) || (d = String.fromCharCode(f));
    else if (f > 55295 && f < 57344) {
      const m = n.charCodeAt(r + 1);
      f < 56320 && m > 56319 && m < 57344 ? (d = String.fromCharCode(f, m), s = 1) : d = "�";
    } else
      d = String.fromCharCode(f);
    d && (i.push(n.slice(o, r), encodeURIComponent(d)), o = r + s + 1, d = ""), s && (r += s, s = 0);
  }
  return i.join("") + n.slice(o);
}
function Xe(n, i, r, o) {
  const s = o ? o - 1 : Number.POSITIVE_INFINITY;
  let f = 0;
  return d;
  function d(g) {
    return Be(g) ? (n.enter(r), m(g)) : i(g);
  }
  function m(g) {
    return Be(g) && f++ < s ? (n.consume(g), m) : (n.exit(r), i(g));
  }
}
const Wx = {
  tokenize: $x
};
function $x(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, o, s);
  let r;
  return i;
  function o(m) {
    if (m === null) {
      n.consume(m);
      return;
    }
    return n.enter("lineEnding"), n.consume(m), n.exit("lineEnding"), Xe(n, i, "linePrefix");
  }
  function s(m) {
    return n.enter("paragraph"), f(m);
  }
  function f(m) {
    const g = n.enter("chunkText", {
      contentType: "text",
      previous: r
    });
    return r && (r.next = g), r = g, d(m);
  }
  function d(m) {
    if (m === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(m);
      return;
    }
    return xe(m) ? (n.consume(m), n.exit("chunkText"), f) : (n.consume(m), d);
  }
}
const ew = {
  tokenize: tw
}, jh = {
  tokenize: nw
};
function tw(n) {
  const i = this, r = [];
  let o = 0, s, f, d;
  return m;
  function m(Y) {
    if (o < r.length) {
      const ce = r[o];
      return i.containerState = ce[1], n.attempt(ce[0].continuation, g, p)(Y);
    }
    return p(Y);
  }
  function g(Y) {
    if (o++, i.containerState._closeFlow) {
      i.containerState._closeFlow = void 0, s && W();
      const ce = i.events.length;
      let ee = ce, L;
      for (; ee--; )
        if (i.events[ee][0] === "exit" && i.events[ee][1].type === "chunkFlow") {
          L = i.events[ee][1].end;
          break;
        }
      B(o);
      let ae = ce;
      for (; ae < i.events.length; )
        i.events[ae][1].end = {
          ...L
        }, ae++;
      return xn(i.events, ee + 1, 0, i.events.slice(ce)), i.events.length = ae, p(Y);
    }
    return m(Y);
  }
  function p(Y) {
    if (o === r.length) {
      if (!s)
        return E(Y);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return k(Y);
      i.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return i.containerState = {}, n.check(jh, h, S)(Y);
  }
  function h(Y) {
    return s && W(), B(o), E(Y);
  }
  function S(Y) {
    return i.parser.lazy[i.now().line] = o !== r.length, d = i.now().offset, k(Y);
  }
  function E(Y) {
    return i.containerState = {}, n.attempt(jh, w, k)(Y);
  }
  function w(Y) {
    return o++, r.push([i.currentConstruct, i.containerState]), E(Y);
  }
  function k(Y) {
    if (Y === null) {
      s && W(), B(0), n.consume(Y);
      return;
    }
    return s = s || i.parser.flow(i.now()), n.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: f
    }), D(Y);
  }
  function D(Y) {
    if (Y === null) {
      U(n.exit("chunkFlow"), !0), B(0), n.consume(Y);
      return;
    }
    return xe(Y) ? (n.consume(Y), U(n.exit("chunkFlow")), o = 0, i.interrupt = void 0, m) : (n.consume(Y), D);
  }
  function U(Y, ce) {
    const ee = i.sliceStream(Y);
    if (ce && ee.push(null), Y.previous = f, f && (f.next = Y), f = Y, s.defineSkip(Y.start), s.write(ee), i.parser.lazy[Y.start.line]) {
      let L = s.events.length;
      for (; L--; )
        if (
          // The token starts before the line ending…
          s.events[L][1].start.offset < d && // …and either is not ended yet…
          (!s.events[L][1].end || // …or ends after it.
          s.events[L][1].end.offset > d)
        )
          return;
      const ae = i.events.length;
      let Z = ae, fe, we;
      for (; Z--; )
        if (i.events[Z][0] === "exit" && i.events[Z][1].type === "chunkFlow") {
          if (fe) {
            we = i.events[Z][1].end;
            break;
          }
          fe = !0;
        }
      for (B(o), L = ae; L < i.events.length; )
        i.events[L][1].end = {
          ...we
        }, L++;
      xn(i.events, Z + 1, 0, i.events.slice(ae)), i.events.length = L;
    }
  }
  function B(Y) {
    let ce = r.length;
    for (; ce-- > Y; ) {
      const ee = r[ce];
      i.containerState = ee[1], ee[0].exit.call(i, n);
    }
    r.length = Y;
  }
  function W() {
    s.write([null]), f = void 0, s = void 0, i.containerState._closeFlow = void 0;
  }
}
function nw(n, i, r) {
  return Xe(n, n.attempt(this.parser.constructs.document, i, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function qh(n) {
  if (n === null || Ot(n) || Jx(n))
    return 1;
  if (Zx(n))
    return 2;
}
function $c(n, i, r) {
  const o = [];
  let s = -1;
  for (; ++s < n.length; ) {
    const f = n[s].resolveAll;
    f && !o.includes(f) && (i = f(i, r), o.push(f));
  }
  return i;
}
const Uc = {
  name: "attention",
  resolveAll: aw,
  tokenize: iw
};
function aw(n, i) {
  let r = -1, o, s, f, d, m, g, p, h;
  for (; ++r < n.length; )
    if (n[r][0] === "enter" && n[r][1].type === "attentionSequence" && n[r][1]._close) {
      for (o = r; o--; )
        if (n[o][0] === "exit" && n[o][1].type === "attentionSequence" && n[o][1]._open && // If the markers are the same:
        i.sliceSerialize(n[o][1]).charCodeAt(0) === i.sliceSerialize(n[r][1]).charCodeAt(0)) {
          if ((n[o][1]._close || n[r][1]._open) && (n[r][1].end.offset - n[r][1].start.offset) % 3 && !((n[o][1].end.offset - n[o][1].start.offset + n[r][1].end.offset - n[r][1].start.offset) % 3))
            continue;
          g = n[o][1].end.offset - n[o][1].start.offset > 1 && n[r][1].end.offset - n[r][1].start.offset > 1 ? 2 : 1;
          const S = {
            ...n[o][1].end
          }, E = {
            ...n[r][1].start
          };
          Hh(S, -g), Hh(E, g), d = {
            type: g > 1 ? "strongSequence" : "emphasisSequence",
            start: S,
            end: {
              ...n[o][1].end
            }
          }, m = {
            type: g > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...n[r][1].start
            },
            end: E
          }, f = {
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
              ...m.end
            }
          }, n[o][1].end = {
            ...d.start
          }, n[r][1].start = {
            ...m.end
          }, p = [], n[o][1].end.offset - n[o][1].start.offset && (p = ln(p, [["enter", n[o][1], i], ["exit", n[o][1], i]])), p = ln(p, [["enter", s, i], ["enter", d, i], ["exit", d, i], ["enter", f, i]]), p = ln(p, $c(i.parser.constructs.insideSpan.null, n.slice(o + 1, r), i)), p = ln(p, [["exit", f, i], ["enter", m, i], ["exit", m, i], ["exit", s, i]]), n[r][1].end.offset - n[r][1].start.offset ? (h = 2, p = ln(p, [["enter", n[r][1], i], ["exit", n[r][1], i]])) : h = 0, xn(n, o - 1, r - o + 3, p), r = o + p.length - h - 2;
          break;
        }
    }
  for (r = -1; ++r < n.length; )
    n[r][1].type === "attentionSequence" && (n[r][1].type = "data");
  return n;
}
function iw(n, i) {
  const r = this.parser.constructs.attentionMarkers.null, o = this.previous, s = qh(o);
  let f;
  return d;
  function d(g) {
    return f = g, n.enter("attentionSequence"), m(g);
  }
  function m(g) {
    if (g === f)
      return n.consume(g), m;
    const p = n.exit("attentionSequence"), h = qh(g), S = !h || h === 2 && s || r.includes(g), E = !s || s === 2 && h || r.includes(o);
    return p._open = !!(f === 42 ? S : S && (s || !E)), p._close = !!(f === 42 ? E : E && (h || !S)), i(g);
  }
}
function Hh(n, i) {
  n.column += i, n.offset += i, n._bufferIndex += i;
}
const lw = {
  name: "autolink",
  tokenize: rw
};
function rw(n, i, r) {
  let o = 0;
  return s;
  function s(w) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(w), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), f;
  }
  function f(w) {
    return Sn(w) ? (n.consume(w), d) : w === 64 ? r(w) : p(w);
  }
  function d(w) {
    return w === 43 || w === 45 || w === 46 || Ft(w) ? (o = 1, m(w)) : p(w);
  }
  function m(w) {
    return w === 58 ? (n.consume(w), o = 0, g) : (w === 43 || w === 45 || w === 46 || Ft(w)) && o++ < 32 ? (n.consume(w), m) : (o = 0, p(w));
  }
  function g(w) {
    return w === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(w), n.exit("autolinkMarker"), n.exit("autolink"), i) : w === null || w === 32 || w === 60 || Mc(w) ? r(w) : (n.consume(w), g);
  }
  function p(w) {
    return w === 64 ? (n.consume(w), h) : Xx(w) ? (n.consume(w), p) : r(w);
  }
  function h(w) {
    return Ft(w) ? S(w) : r(w);
  }
  function S(w) {
    return w === 46 ? (n.consume(w), o = 0, h) : w === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(w), n.exit("autolinkMarker"), n.exit("autolink"), i) : E(w);
  }
  function E(w) {
    if ((w === 45 || Ft(w)) && o++ < 63) {
      const k = w === 45 ? E : S;
      return n.consume(w), k;
    }
    return r(w);
  }
}
const Oo = {
  partial: !0,
  tokenize: ow
};
function ow(n, i, r) {
  return o;
  function o(f) {
    return Be(f) ? Xe(n, s, "linePrefix")(f) : s(f);
  }
  function s(f) {
    return f === null || xe(f) ? i(f) : r(f);
  }
}
const vy = {
  continuation: {
    tokenize: sw
  },
  exit: cw,
  name: "blockQuote",
  tokenize: uw
};
function uw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    if (d === 62) {
      const m = o.containerState;
      return m.open || (n.enter("blockQuote", {
        _container: !0
      }), m.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(d), n.exit("blockQuoteMarker"), f;
    }
    return r(d);
  }
  function f(d) {
    return Be(d) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(d), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), i) : (n.exit("blockQuotePrefix"), i(d));
  }
}
function sw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return Be(d) ? Xe(n, f, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : f(d);
  }
  function f(d) {
    return n.attempt(vy, i, r)(d);
  }
}
function cw(n) {
  n.exit("blockQuote");
}
const Sy = {
  name: "characterEscape",
  tokenize: fw
};
function fw(n, i, r) {
  return o;
  function o(f) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(f), n.exit("escapeMarker"), s;
  }
  function s(f) {
    return Kx(f) ? (n.enter("characterEscapeValue"), n.consume(f), n.exit("characterEscapeValue"), n.exit("characterEscape"), i) : r(f);
  }
}
const xy = {
  name: "characterReference",
  tokenize: dw
};
function dw(n, i, r) {
  const o = this;
  let s = 0, f, d;
  return m;
  function m(S) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(S), n.exit("characterReferenceMarker"), g;
  }
  function g(S) {
    return S === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(S), n.exit("characterReferenceMarkerNumeric"), p) : (n.enter("characterReferenceValue"), f = 31, d = Ft, h(S));
  }
  function p(S) {
    return S === 88 || S === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(S), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), f = 6, d = Px, h) : (n.enter("characterReferenceValue"), f = 7, d = Nc, h(S));
  }
  function h(S) {
    if (S === 59 && s) {
      const E = n.exit("characterReferenceValue");
      return d === Ft && !Wc(o.sliceSerialize(E)) ? r(S) : (n.enter("characterReferenceMarker"), n.consume(S), n.exit("characterReferenceMarker"), n.exit("characterReference"), i);
    }
    return d(S) && s++ < f ? (n.consume(S), h) : r(S);
  }
}
const Vh = {
  partial: !0,
  tokenize: mw
}, Ih = {
  concrete: !0,
  name: "codeFenced",
  tokenize: pw
};
function pw(n, i, r) {
  const o = this, s = {
    partial: !0,
    tokenize: ee
  };
  let f = 0, d = 0, m;
  return g;
  function g(L) {
    return p(L);
  }
  function p(L) {
    const ae = o.events[o.events.length - 1];
    return f = ae && ae[1].type === "linePrefix" ? ae[2].sliceSerialize(ae[1], !0).length : 0, m = L, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), h(L);
  }
  function h(L) {
    return L === m ? (d++, n.consume(L), h) : d < 3 ? r(L) : (n.exit("codeFencedFenceSequence"), Be(L) ? Xe(n, S, "whitespace")(L) : S(L));
  }
  function S(L) {
    return L === null || xe(L) ? (n.exit("codeFencedFence"), o.interrupt ? i(L) : n.check(Vh, D, ce)(L)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), E(L));
  }
  function E(L) {
    return L === null || xe(L) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), S(L)) : Be(L) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Xe(n, w, "whitespace")(L)) : L === 96 && L === m ? r(L) : (n.consume(L), E);
  }
  function w(L) {
    return L === null || xe(L) ? S(L) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), k(L));
  }
  function k(L) {
    return L === null || xe(L) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), S(L)) : L === 96 && L === m ? r(L) : (n.consume(L), k);
  }
  function D(L) {
    return n.attempt(s, ce, U)(L);
  }
  function U(L) {
    return n.enter("lineEnding"), n.consume(L), n.exit("lineEnding"), B;
  }
  function B(L) {
    return f > 0 && Be(L) ? Xe(n, W, "linePrefix", f + 1)(L) : W(L);
  }
  function W(L) {
    return L === null || xe(L) ? n.check(Vh, D, ce)(L) : (n.enter("codeFlowValue"), Y(L));
  }
  function Y(L) {
    return L === null || xe(L) ? (n.exit("codeFlowValue"), W(L)) : (n.consume(L), Y);
  }
  function ce(L) {
    return n.exit("codeFenced"), i(L);
  }
  function ee(L, ae, Z) {
    let fe = 0;
    return we;
    function we(ne) {
      return L.enter("lineEnding"), L.consume(ne), L.exit("lineEnding"), ie;
    }
    function ie(ne) {
      return L.enter("codeFencedFence"), Be(ne) ? Xe(L, te, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ne) : te(ne);
    }
    function te(ne) {
      return ne === m ? (L.enter("codeFencedFenceSequence"), re(ne)) : Z(ne);
    }
    function re(ne) {
      return ne === m ? (fe++, L.consume(ne), re) : fe >= d ? (L.exit("codeFencedFenceSequence"), Be(ne) ? Xe(L, P, "whitespace")(ne) : P(ne)) : Z(ne);
    }
    function P(ne) {
      return ne === null || xe(ne) ? (L.exit("codeFencedFence"), ae(ne)) : Z(ne);
    }
  }
}
function mw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return d === null ? r(d) : (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), f);
  }
  function f(d) {
    return o.parser.lazy[o.now().line] ? r(d) : i(d);
  }
}
const sc = {
  name: "codeIndented",
  tokenize: gw
}, hw = {
  partial: !0,
  tokenize: yw
};
function gw(n, i, r) {
  const o = this;
  return s;
  function s(p) {
    return n.enter("codeIndented"), Xe(n, f, "linePrefix", 5)(p);
  }
  function f(p) {
    const h = o.events[o.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? d(p) : r(p);
  }
  function d(p) {
    return p === null ? g(p) : xe(p) ? n.attempt(hw, d, g)(p) : (n.enter("codeFlowValue"), m(p));
  }
  function m(p) {
    return p === null || xe(p) ? (n.exit("codeFlowValue"), d(p)) : (n.consume(p), m);
  }
  function g(p) {
    return n.exit("codeIndented"), i(p);
  }
}
function yw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return o.parser.lazy[o.now().line] ? r(d) : xe(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), s) : Xe(n, f, "linePrefix", 5)(d);
  }
  function f(d) {
    const m = o.events[o.events.length - 1];
    return m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? i(d) : xe(d) ? s(d) : r(d);
  }
}
const bw = {
  name: "codeText",
  previous: Sw,
  resolve: vw,
  tokenize: xw
};
function vw(n) {
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
function Sw(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function xw(n, i, r) {
  let o = 0, s, f;
  return d;
  function d(S) {
    return n.enter("codeText"), n.enter("codeTextSequence"), m(S);
  }
  function m(S) {
    return S === 96 ? (n.consume(S), o++, m) : (n.exit("codeTextSequence"), g(S));
  }
  function g(S) {
    return S === null ? r(S) : S === 32 ? (n.enter("space"), n.consume(S), n.exit("space"), g) : S === 96 ? (f = n.enter("codeTextSequence"), s = 0, h(S)) : xe(S) ? (n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), g) : (n.enter("codeTextData"), p(S));
  }
  function p(S) {
    return S === null || S === 32 || S === 96 || xe(S) ? (n.exit("codeTextData"), g(S)) : (n.consume(S), p);
  }
  function h(S) {
    return S === 96 ? (n.consume(S), s++, h) : s === o ? (n.exit("codeTextSequence"), n.exit("codeText"), i(S)) : (f.type = "codeTextData", p(S));
  }
}
class ww {
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
    const f = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
    return o && jl(this.left, o), f.reverse();
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
  let r = -1, o, s, f, d, m, g, p;
  const h = new ww(n);
  for (; ++r < h.length; ) {
    for (; r in i; )
      r = i[r];
    if (o = h.get(r), r && o[1].type === "chunkFlow" && h.get(r - 1)[1].type === "listItemPrefix" && (g = o[1]._tokenizer.events, f = 0, f < g.length && g[f][1].type === "lineEndingBlank" && (f += 2), f < g.length && g[f][1].type === "content"))
      for (; ++f < g.length && g[f][1].type !== "content"; )
        g[f][1].type === "chunkText" && (g[f][1]._isInFirstContentOfListItem = !0, f++);
    if (o[0] === "enter")
      o[1].contentType && (Object.assign(i, Ew(h, r)), r = i[r], p = !0);
    else if (o[1]._container) {
      for (f = r, s = void 0; f--; )
        if (d = h.get(f), d[1].type === "lineEnding" || d[1].type === "lineEndingBlank")
          d[0] === "enter" && (s && (h.get(s)[1].type = "lineEndingBlank"), d[1].type = "lineEnding", s = f);
        else if (!(d[1].type === "linePrefix" || d[1].type === "listItemIndent")) break;
      s && (o[1].end = {
        ...h.get(s)[1].start
      }, m = h.slice(s, r), m.unshift(o), h.splice(s, r - s + 1, m));
    }
  }
  return xn(n, 0, Number.POSITIVE_INFINITY, h.slice(0)), !p;
}
function Ew(n, i) {
  const r = n.get(i)[1], o = n.get(i)[2];
  let s = i - 1;
  const f = [];
  let d = r._tokenizer;
  d || (d = o.parser[r.contentType](r.start), r._contentTypeTextTrailing && (d._contentTypeTextTrailing = !0));
  const m = d.events, g = [], p = {};
  let h, S, E = -1, w = r, k = 0, D = 0;
  const U = [D];
  for (; w; ) {
    for (; n.get(++s)[1] !== w; )
      ;
    f.push(s), w._tokenizer || (h = o.sliceStream(w), w.next || h.push(null), S && d.defineSkip(w.start), w._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(h), w._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), S = w, w = w.next;
  }
  for (w = r; ++E < m.length; )
    // Find a void token that includes a break.
    m[E][0] === "exit" && m[E - 1][0] === "enter" && m[E][1].type === m[E - 1][1].type && m[E][1].start.line !== m[E][1].end.line && (D = E + 1, U.push(D), w._tokenizer = void 0, w.previous = void 0, w = w.next);
  for (d.events = [], w ? (w._tokenizer = void 0, w.previous = void 0) : U.pop(), E = U.length; E--; ) {
    const B = m.slice(U[E], U[E + 1]), W = f.pop();
    g.push([W, W + B.length - 1]), n.splice(W, 2, B);
  }
  for (g.reverse(), E = -1; ++E < g.length; )
    p[k + g[E][0]] = k + g[E][1], k += g[E][1] - g[E][0] - 1;
  return p;
}
const Aw = {
  resolve: Cw,
  tokenize: kw
}, Tw = {
  partial: !0,
  tokenize: zw
};
function Cw(n) {
  return wy(n), n;
}
function kw(n, i) {
  let r;
  return o;
  function o(m) {
    return n.enter("content"), r = n.enter("chunkContent", {
      contentType: "content"
    }), s(m);
  }
  function s(m) {
    return m === null ? f(m) : xe(m) ? n.check(Tw, d, f)(m) : (n.consume(m), s);
  }
  function f(m) {
    return n.exit("chunkContent"), n.exit("content"), i(m);
  }
  function d(m) {
    return n.consume(m), n.exit("chunkContent"), r.next = n.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, s;
  }
}
function zw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), Xe(n, f, "linePrefix");
  }
  function f(d) {
    if (d === null || xe(d))
      return r(d);
    const m = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes("codeIndented") && m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], !0).length >= 4 ? i(d) : n.interrupt(o.parser.constructs.flow, r, i)(d);
  }
}
function Ey(n, i, r, o, s, f, d, m, g) {
  const p = g || Number.POSITIVE_INFINITY;
  let h = 0;
  return S;
  function S(B) {
    return B === 60 ? (n.enter(o), n.enter(s), n.enter(f), n.consume(B), n.exit(f), E) : B === null || B === 32 || B === 41 || Mc(B) ? r(B) : (n.enter(o), n.enter(d), n.enter(m), n.enter("chunkString", {
      contentType: "string"
    }), D(B));
  }
  function E(B) {
    return B === 62 ? (n.enter(f), n.consume(B), n.exit(f), n.exit(s), n.exit(o), i) : (n.enter(m), n.enter("chunkString", {
      contentType: "string"
    }), w(B));
  }
  function w(B) {
    return B === 62 ? (n.exit("chunkString"), n.exit(m), E(B)) : B === null || B === 60 || xe(B) ? r(B) : (n.consume(B), B === 92 ? k : w);
  }
  function k(B) {
    return B === 60 || B === 62 || B === 92 ? (n.consume(B), w) : w(B);
  }
  function D(B) {
    return !h && (B === null || B === 41 || Ot(B)) ? (n.exit("chunkString"), n.exit(m), n.exit(d), n.exit(o), i(B)) : h < p && B === 40 ? (n.consume(B), h++, D) : B === 41 ? (n.consume(B), h--, D) : B === null || B === 32 || B === 40 || Mc(B) ? r(B) : (n.consume(B), B === 92 ? U : D);
  }
  function U(B) {
    return B === 40 || B === 41 || B === 92 ? (n.consume(B), D) : D(B);
  }
}
function Ay(n, i, r, o, s, f) {
  const d = this;
  let m = 0, g;
  return p;
  function p(w) {
    return n.enter(o), n.enter(s), n.consume(w), n.exit(s), n.enter(f), h;
  }
  function h(w) {
    return m > 999 || w === null || w === 91 || w === 93 && !g || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    w === 94 && !m && "_hiddenFootnoteSupport" in d.parser.constructs ? r(w) : w === 93 ? (n.exit(f), n.enter(s), n.consume(w), n.exit(s), n.exit(o), i) : xe(w) ? (n.enter("lineEnding"), n.consume(w), n.exit("lineEnding"), h) : (n.enter("chunkString", {
      contentType: "string"
    }), S(w));
  }
  function S(w) {
    return w === null || w === 91 || w === 93 || xe(w) || m++ > 999 ? (n.exit("chunkString"), h(w)) : (n.consume(w), g || (g = !Be(w)), w === 92 ? E : S);
  }
  function E(w) {
    return w === 91 || w === 92 || w === 93 ? (n.consume(w), m++, S) : S(w);
  }
}
function Ty(n, i, r, o, s, f) {
  let d;
  return m;
  function m(E) {
    return E === 34 || E === 39 || E === 40 ? (n.enter(o), n.enter(s), n.consume(E), n.exit(s), d = E === 40 ? 41 : E, g) : r(E);
  }
  function g(E) {
    return E === d ? (n.enter(s), n.consume(E), n.exit(s), n.exit(o), i) : (n.enter(f), p(E));
  }
  function p(E) {
    return E === d ? (n.exit(f), g(d)) : E === null ? r(E) : xe(E) ? (n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), Xe(n, p, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), h(E));
  }
  function h(E) {
    return E === d || E === null || xe(E) ? (n.exit("chunkString"), p(E)) : (n.consume(E), E === 92 ? S : h);
  }
  function S(E) {
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
const Rw = {
  name: "definition",
  tokenize: Ow
}, Dw = {
  partial: !0,
  tokenize: _w
};
function Ow(n, i, r) {
  const o = this;
  let s;
  return f;
  function f(w) {
    return n.enter("definition"), d(w);
  }
  function d(w) {
    return Ay.call(
      o,
      n,
      m,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(w);
  }
  function m(w) {
    return s = Ci(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)), w === 58 ? (n.enter("definitionMarker"), n.consume(w), n.exit("definitionMarker"), g) : r(w);
  }
  function g(w) {
    return Ot(w) ? Vl(n, p)(w) : p(w);
  }
  function p(w) {
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
    return n.attempt(Dw, S, S)(w);
  }
  function S(w) {
    return Be(w) ? Xe(n, E, "whitespace")(w) : E(w);
  }
  function E(w) {
    return w === null || xe(w) ? (n.exit("definition"), o.parser.defined.push(s), i(w)) : r(w);
  }
}
function _w(n, i, r) {
  return o;
  function o(m) {
    return Ot(m) ? Vl(n, s)(m) : r(m);
  }
  function s(m) {
    return Ty(n, f, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(m);
  }
  function f(m) {
    return Be(m) ? Xe(n, d, "whitespace")(m) : d(m);
  }
  function d(m) {
    return m === null || xe(m) ? i(m) : r(m);
  }
}
const Mw = {
  name: "hardBreakEscape",
  tokenize: Nw
};
function Nw(n, i, r) {
  return o;
  function o(f) {
    return n.enter("hardBreakEscape"), n.consume(f), s;
  }
  function s(f) {
    return xe(f) ? (n.exit("hardBreakEscape"), i(f)) : r(f);
  }
}
const Uw = {
  name: "headingAtx",
  resolve: Lw,
  tokenize: Bw
};
function Lw(n, i) {
  let r = n.length - 2, o = 3, s, f;
  return n[o][1].type === "whitespace" && (o += 2), r - 2 > o && n[r][1].type === "whitespace" && (r -= 2), n[r][1].type === "atxHeadingSequence" && (o === r - 1 || r - 4 > o && n[r - 2][1].type === "whitespace") && (r -= o + 1 === r ? 2 : 4), r > o && (s = {
    type: "atxHeadingText",
    start: n[o][1].start,
    end: n[r][1].end
  }, f = {
    type: "chunkText",
    start: n[o][1].start,
    end: n[r][1].end,
    contentType: "text"
  }, xn(n, o, r - o + 1, [["enter", s, i], ["enter", f, i], ["exit", f, i], ["exit", s, i]])), n;
}
function Bw(n, i, r) {
  let o = 0;
  return s;
  function s(h) {
    return n.enter("atxHeading"), f(h);
  }
  function f(h) {
    return n.enter("atxHeadingSequence"), d(h);
  }
  function d(h) {
    return h === 35 && o++ < 6 ? (n.consume(h), d) : h === null || Ot(h) ? (n.exit("atxHeadingSequence"), m(h)) : r(h);
  }
  function m(h) {
    return h === 35 ? (n.enter("atxHeadingSequence"), g(h)) : h === null || xe(h) ? (n.exit("atxHeading"), i(h)) : Be(h) ? Xe(n, m, "whitespace")(h) : (n.enter("atxHeadingText"), p(h));
  }
  function g(h) {
    return h === 35 ? (n.consume(h), g) : (n.exit("atxHeadingSequence"), m(h));
  }
  function p(h) {
    return h === null || h === 35 || Ot(h) ? (n.exit("atxHeadingText"), m(h)) : (n.consume(h), p);
  }
}
const jw = [
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
], Qh = ["pre", "script", "style", "textarea"], qw = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Iw,
  tokenize: Qw
}, Hw = {
  partial: !0,
  tokenize: Yw
}, Vw = {
  partial: !0,
  tokenize: Gw
};
function Iw(n) {
  let i = n.length;
  for (; i-- && !(n[i][0] === "enter" && n[i][1].type === "htmlFlow"); )
    ;
  return i > 1 && n[i - 2][1].type === "linePrefix" && (n[i][1].start = n[i - 2][1].start, n[i + 1][1].start = n[i - 2][1].start, n.splice(i - 2, 2)), n;
}
function Qw(n, i, r) {
  const o = this;
  let s, f, d, m, g;
  return p;
  function p(x) {
    return h(x);
  }
  function h(x) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(x), S;
  }
  function S(x) {
    return x === 33 ? (n.consume(x), E) : x === 47 ? (n.consume(x), f = !0, D) : x === 63 ? (n.consume(x), s = 3, o.interrupt ? i : y) : Sn(x) ? (n.consume(x), d = String.fromCharCode(x), U) : r(x);
  }
  function E(x) {
    return x === 45 ? (n.consume(x), s = 2, w) : x === 91 ? (n.consume(x), s = 5, m = 0, k) : Sn(x) ? (n.consume(x), s = 4, o.interrupt ? i : y) : r(x);
  }
  function w(x) {
    return x === 45 ? (n.consume(x), o.interrupt ? i : y) : r(x);
  }
  function k(x) {
    const $ = "CDATA[";
    return x === $.charCodeAt(m++) ? (n.consume(x), m === $.length ? o.interrupt ? i : te : k) : r(x);
  }
  function D(x) {
    return Sn(x) ? (n.consume(x), d = String.fromCharCode(x), U) : r(x);
  }
  function U(x) {
    if (x === null || x === 47 || x === 62 || Ot(x)) {
      const $ = x === 47, Se = d.toLowerCase();
      return !$ && !f && Qh.includes(Se) ? (s = 1, o.interrupt ? i(x) : te(x)) : jw.includes(d.toLowerCase()) ? (s = 6, $ ? (n.consume(x), B) : o.interrupt ? i(x) : te(x)) : (s = 7, o.interrupt && !o.parser.lazy[o.now().line] ? r(x) : f ? W(x) : Y(x));
    }
    return x === 45 || Ft(x) ? (n.consume(x), d += String.fromCharCode(x), U) : r(x);
  }
  function B(x) {
    return x === 62 ? (n.consume(x), o.interrupt ? i : te) : r(x);
  }
  function W(x) {
    return Be(x) ? (n.consume(x), W) : we(x);
  }
  function Y(x) {
    return x === 47 ? (n.consume(x), we) : x === 58 || x === 95 || Sn(x) ? (n.consume(x), ce) : Be(x) ? (n.consume(x), Y) : we(x);
  }
  function ce(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || Ft(x) ? (n.consume(x), ce) : ee(x);
  }
  function ee(x) {
    return x === 61 ? (n.consume(x), L) : Be(x) ? (n.consume(x), ee) : Y(x);
  }
  function L(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96 ? r(x) : x === 34 || x === 39 ? (n.consume(x), g = x, ae) : Be(x) ? (n.consume(x), L) : Z(x);
  }
  function ae(x) {
    return x === g ? (n.consume(x), g = null, fe) : x === null || xe(x) ? r(x) : (n.consume(x), ae);
  }
  function Z(x) {
    return x === null || x === 34 || x === 39 || x === 47 || x === 60 || x === 61 || x === 62 || x === 96 || Ot(x) ? ee(x) : (n.consume(x), Z);
  }
  function fe(x) {
    return x === 47 || x === 62 || Be(x) ? Y(x) : r(x);
  }
  function we(x) {
    return x === 62 ? (n.consume(x), ie) : r(x);
  }
  function ie(x) {
    return x === null || xe(x) ? te(x) : Be(x) ? (n.consume(x), ie) : r(x);
  }
  function te(x) {
    return x === 45 && s === 2 ? (n.consume(x), O) : x === 60 && s === 1 ? (n.consume(x), F) : x === 62 && s === 4 ? (n.consume(x), j) : x === 63 && s === 3 ? (n.consume(x), y) : x === 93 && s === 5 ? (n.consume(x), be) : xe(x) && (s === 6 || s === 7) ? (n.exit("htmlFlowData"), n.check(Hw, X, re)(x)) : x === null || xe(x) ? (n.exit("htmlFlowData"), re(x)) : (n.consume(x), te);
  }
  function re(x) {
    return n.check(Vw, P, X)(x);
  }
  function P(x) {
    return n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), ne;
  }
  function ne(x) {
    return x === null || xe(x) ? re(x) : (n.enter("htmlFlowData"), te(x));
  }
  function O(x) {
    return x === 45 ? (n.consume(x), y) : te(x);
  }
  function F(x) {
    return x === 47 ? (n.consume(x), d = "", Q) : te(x);
  }
  function Q(x) {
    if (x === 62) {
      const $ = d.toLowerCase();
      return Qh.includes($) ? (n.consume(x), j) : te(x);
    }
    return Sn(x) && d.length < 8 ? (n.consume(x), d += String.fromCharCode(x), Q) : te(x);
  }
  function be(x) {
    return x === 93 ? (n.consume(x), y) : te(x);
  }
  function y(x) {
    return x === 62 ? (n.consume(x), j) : x === 45 && s === 2 ? (n.consume(x), y) : te(x);
  }
  function j(x) {
    return x === null || xe(x) ? (n.exit("htmlFlowData"), X(x)) : (n.consume(x), j);
  }
  function X(x) {
    return n.exit("htmlFlow"), i(x);
  }
}
function Gw(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return xe(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), f) : r(d);
  }
  function f(d) {
    return o.parser.lazy[o.now().line] ? r(d) : i(d);
  }
}
function Yw(n, i, r) {
  return o;
  function o(s) {
    return n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), n.attempt(Oo, i, r);
  }
}
const Fw = {
  name: "htmlText",
  tokenize: Xw
};
function Xw(n, i, r) {
  const o = this;
  let s, f, d;
  return m;
  function m(y) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(y), g;
  }
  function g(y) {
    return y === 33 ? (n.consume(y), p) : y === 47 ? (n.consume(y), ee) : y === 63 ? (n.consume(y), Y) : Sn(y) ? (n.consume(y), Z) : r(y);
  }
  function p(y) {
    return y === 45 ? (n.consume(y), h) : y === 91 ? (n.consume(y), f = 0, k) : Sn(y) ? (n.consume(y), W) : r(y);
  }
  function h(y) {
    return y === 45 ? (n.consume(y), w) : r(y);
  }
  function S(y) {
    return y === null ? r(y) : y === 45 ? (n.consume(y), E) : xe(y) ? (d = S, F(y)) : (n.consume(y), S);
  }
  function E(y) {
    return y === 45 ? (n.consume(y), w) : S(y);
  }
  function w(y) {
    return y === 62 ? O(y) : y === 45 ? E(y) : S(y);
  }
  function k(y) {
    const j = "CDATA[";
    return y === j.charCodeAt(f++) ? (n.consume(y), f === j.length ? D : k) : r(y);
  }
  function D(y) {
    return y === null ? r(y) : y === 93 ? (n.consume(y), U) : xe(y) ? (d = D, F(y)) : (n.consume(y), D);
  }
  function U(y) {
    return y === 93 ? (n.consume(y), B) : D(y);
  }
  function B(y) {
    return y === 62 ? O(y) : y === 93 ? (n.consume(y), B) : D(y);
  }
  function W(y) {
    return y === null || y === 62 ? O(y) : xe(y) ? (d = W, F(y)) : (n.consume(y), W);
  }
  function Y(y) {
    return y === null ? r(y) : y === 63 ? (n.consume(y), ce) : xe(y) ? (d = Y, F(y)) : (n.consume(y), Y);
  }
  function ce(y) {
    return y === 62 ? O(y) : Y(y);
  }
  function ee(y) {
    return Sn(y) ? (n.consume(y), L) : r(y);
  }
  function L(y) {
    return y === 45 || Ft(y) ? (n.consume(y), L) : ae(y);
  }
  function ae(y) {
    return xe(y) ? (d = ae, F(y)) : Be(y) ? (n.consume(y), ae) : O(y);
  }
  function Z(y) {
    return y === 45 || Ft(y) ? (n.consume(y), Z) : y === 47 || y === 62 || Ot(y) ? fe(y) : r(y);
  }
  function fe(y) {
    return y === 47 ? (n.consume(y), O) : y === 58 || y === 95 || Sn(y) ? (n.consume(y), we) : xe(y) ? (d = fe, F(y)) : Be(y) ? (n.consume(y), fe) : O(y);
  }
  function we(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || Ft(y) ? (n.consume(y), we) : ie(y);
  }
  function ie(y) {
    return y === 61 ? (n.consume(y), te) : xe(y) ? (d = ie, F(y)) : Be(y) ? (n.consume(y), ie) : fe(y);
  }
  function te(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? r(y) : y === 34 || y === 39 ? (n.consume(y), s = y, re) : xe(y) ? (d = te, F(y)) : Be(y) ? (n.consume(y), te) : (n.consume(y), P);
  }
  function re(y) {
    return y === s ? (n.consume(y), s = void 0, ne) : y === null ? r(y) : xe(y) ? (d = re, F(y)) : (n.consume(y), re);
  }
  function P(y) {
    return y === null || y === 34 || y === 39 || y === 60 || y === 61 || y === 96 ? r(y) : y === 47 || y === 62 || Ot(y) ? fe(y) : (n.consume(y), P);
  }
  function ne(y) {
    return y === 47 || y === 62 || Ot(y) ? fe(y) : r(y);
  }
  function O(y) {
    return y === 62 ? (n.consume(y), n.exit("htmlTextData"), n.exit("htmlText"), i) : r(y);
  }
  function F(y) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(y), n.exit("lineEnding"), Q;
  }
  function Q(y) {
    return Be(y) ? Xe(n, be, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(y) : be(y);
  }
  function be(y) {
    return n.enter("htmlTextData"), d(y);
  }
}
const ef = {
  name: "labelEnd",
  resolveAll: Jw,
  resolveTo: Ww,
  tokenize: $w
}, Pw = {
  tokenize: eE
}, Kw = {
  tokenize: tE
}, Zw = {
  tokenize: nE
};
function Jw(n) {
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
function Ww(n, i) {
  let r = n.length, o = 0, s, f, d, m;
  for (; r--; )
    if (s = n[r][1], f) {
      if (s.type === "link" || s.type === "labelLink" && s._inactive)
        break;
      n[r][0] === "enter" && s.type === "labelLink" && (s._inactive = !0);
    } else if (d) {
      if (n[r][0] === "enter" && (s.type === "labelImage" || s.type === "labelLink") && !s._balanced && (f = r, s.type !== "labelLink")) {
        o = 2;
        break;
      }
    } else s.type === "labelEnd" && (d = r);
  const g = {
    type: n[f][1].type === "labelLink" ? "link" : "image",
    start: {
      ...n[f][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  }, p = {
    type: "label",
    start: {
      ...n[f][1].start
    },
    end: {
      ...n[d][1].end
    }
  }, h = {
    type: "labelText",
    start: {
      ...n[f + o + 2][1].end
    },
    end: {
      ...n[d - 2][1].start
    }
  };
  return m = [["enter", g, i], ["enter", p, i]], m = ln(m, n.slice(f + 1, f + o + 3)), m = ln(m, [["enter", h, i]]), m = ln(m, $c(i.parser.constructs.insideSpan.null, n.slice(f + o + 4, d - 3), i)), m = ln(m, [["exit", h, i], n[d - 2], n[d - 1], ["exit", p, i]]), m = ln(m, n.slice(d + 1)), m = ln(m, [["exit", g, i]]), xn(n, f, n.length, m), n;
}
function $w(n, i, r) {
  const o = this;
  let s = o.events.length, f, d;
  for (; s--; )
    if ((o.events[s][1].type === "labelImage" || o.events[s][1].type === "labelLink") && !o.events[s][1]._balanced) {
      f = o.events[s][1];
      break;
    }
  return m;
  function m(E) {
    return f ? f._inactive ? S(E) : (d = o.parser.defined.includes(Ci(o.sliceSerialize({
      start: f.end,
      end: o.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(E), n.exit("labelMarker"), n.exit("labelEnd"), g) : r(E);
  }
  function g(E) {
    return E === 40 ? n.attempt(Pw, h, d ? h : S)(E) : E === 91 ? n.attempt(Kw, h, d ? p : S)(E) : d ? h(E) : S(E);
  }
  function p(E) {
    return n.attempt(Zw, h, S)(E);
  }
  function h(E) {
    return i(E);
  }
  function S(E) {
    return f._balanced = !0, r(E);
  }
}
function eE(n, i, r) {
  return o;
  function o(S) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(S), n.exit("resourceMarker"), s;
  }
  function s(S) {
    return Ot(S) ? Vl(n, f)(S) : f(S);
  }
  function f(S) {
    return S === 41 ? h(S) : Ey(n, d, m, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(S);
  }
  function d(S) {
    return Ot(S) ? Vl(n, g)(S) : h(S);
  }
  function m(S) {
    return r(S);
  }
  function g(S) {
    return S === 34 || S === 39 || S === 40 ? Ty(n, p, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(S) : h(S);
  }
  function p(S) {
    return Ot(S) ? Vl(n, h)(S) : h(S);
  }
  function h(S) {
    return S === 41 ? (n.enter("resourceMarker"), n.consume(S), n.exit("resourceMarker"), n.exit("resource"), i) : r(S);
  }
}
function tE(n, i, r) {
  const o = this;
  return s;
  function s(m) {
    return Ay.call(o, n, f, d, "reference", "referenceMarker", "referenceString")(m);
  }
  function f(m) {
    return o.parser.defined.includes(Ci(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))) ? i(m) : r(m);
  }
  function d(m) {
    return r(m);
  }
}
function nE(n, i, r) {
  return o;
  function o(f) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(f), n.exit("referenceMarker"), s;
  }
  function s(f) {
    return f === 93 ? (n.enter("referenceMarker"), n.consume(f), n.exit("referenceMarker"), n.exit("reference"), i) : r(f);
  }
}
const aE = {
  name: "labelStartImage",
  resolveAll: ef.resolveAll,
  tokenize: iE
};
function iE(n, i, r) {
  const o = this;
  return s;
  function s(m) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(m), n.exit("labelImageMarker"), f;
  }
  function f(m) {
    return m === 91 ? (n.enter("labelMarker"), n.consume(m), n.exit("labelMarker"), n.exit("labelImage"), d) : r(m);
  }
  function d(m) {
    return m === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? r(m) : i(m);
  }
}
const lE = {
  name: "labelStartLink",
  resolveAll: ef.resolveAll,
  tokenize: rE
};
function rE(n, i, r) {
  const o = this;
  return s;
  function s(d) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(d), n.exit("labelMarker"), n.exit("labelLink"), f;
  }
  function f(d) {
    return d === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? r(d) : i(d);
  }
}
const cc = {
  name: "lineEnding",
  tokenize: oE
};
function oE(n, i) {
  return r;
  function r(o) {
    return n.enter("lineEnding"), n.consume(o), n.exit("lineEnding"), Xe(n, i, "linePrefix");
  }
}
const vo = {
  name: "thematicBreak",
  tokenize: uE
};
function uE(n, i, r) {
  let o = 0, s;
  return f;
  function f(p) {
    return n.enter("thematicBreak"), d(p);
  }
  function d(p) {
    return s = p, m(p);
  }
  function m(p) {
    return p === s ? (n.enter("thematicBreakSequence"), g(p)) : o >= 3 && (p === null || xe(p)) ? (n.exit("thematicBreak"), i(p)) : r(p);
  }
  function g(p) {
    return p === s ? (n.consume(p), o++, g) : (n.exit("thematicBreakSequence"), Be(p) ? Xe(n, m, "whitespace")(p) : m(p));
  }
}
const zt = {
  continuation: {
    tokenize: dE
  },
  exit: mE,
  name: "list",
  tokenize: fE
}, sE = {
  partial: !0,
  tokenize: hE
}, cE = {
  partial: !0,
  tokenize: pE
};
function fE(n, i, r) {
  const o = this, s = o.events[o.events.length - 1];
  let f = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, d = 0;
  return m;
  function m(w) {
    const k = o.containerState.type || (w === 42 || w === 43 || w === 45 ? "listUnordered" : "listOrdered");
    if (k === "listUnordered" ? !o.containerState.marker || w === o.containerState.marker : Nc(w)) {
      if (o.containerState.type || (o.containerState.type = k, n.enter(k, {
        _container: !0
      })), k === "listUnordered")
        return n.enter("listItemPrefix"), w === 42 || w === 45 ? n.check(vo, r, p)(w) : p(w);
      if (!o.interrupt || w === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), g(w);
    }
    return r(w);
  }
  function g(w) {
    return Nc(w) && ++d < 10 ? (n.consume(w), g) : (!o.interrupt || d < 2) && (o.containerState.marker ? w === o.containerState.marker : w === 41 || w === 46) ? (n.exit("listItemValue"), p(w)) : r(w);
  }
  function p(w) {
    return n.enter("listItemMarker"), n.consume(w), n.exit("listItemMarker"), o.containerState.marker = o.containerState.marker || w, n.check(
      Oo,
      // Can’t be empty when interrupting.
      o.interrupt ? r : h,
      n.attempt(sE, E, S)
    );
  }
  function h(w) {
    return o.containerState.initialBlankLine = !0, f++, E(w);
  }
  function S(w) {
    return Be(w) ? (n.enter("listItemPrefixWhitespace"), n.consume(w), n.exit("listItemPrefixWhitespace"), E) : r(w);
  }
  function E(w) {
    return o.containerState.size = f + o.sliceSerialize(n.exit("listItemPrefix"), !0).length, i(w);
  }
}
function dE(n, i, r) {
  const o = this;
  return o.containerState._closeFlow = void 0, n.check(Oo, s, f);
  function s(m) {
    return o.containerState.furtherBlankLines = o.containerState.furtherBlankLines || o.containerState.initialBlankLine, Xe(n, i, "listItemIndent", o.containerState.size + 1)(m);
  }
  function f(m) {
    return o.containerState.furtherBlankLines || !Be(m) ? (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, d(m)) : (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, n.attempt(cE, i, d)(m));
  }
  function d(m) {
    return o.containerState._closeFlow = !0, o.interrupt = void 0, Xe(n, n.attempt(zt, i, r), "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m);
  }
}
function pE(n, i, r) {
  const o = this;
  return Xe(n, s, "listItemIndent", o.containerState.size + 1);
  function s(f) {
    const d = o.events[o.events.length - 1];
    return d && d[1].type === "listItemIndent" && d[2].sliceSerialize(d[1], !0).length === o.containerState.size ? i(f) : r(f);
  }
}
function mE(n) {
  n.exit(this.containerState.type);
}
function hE(n, i, r) {
  const o = this;
  return Xe(n, s, "listItemPrefixWhitespace", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(f) {
    const d = o.events[o.events.length - 1];
    return !Be(f) && d && d[1].type === "listItemPrefixWhitespace" ? i(f) : r(f);
  }
}
const Gh = {
  name: "setextUnderline",
  resolveTo: gE,
  tokenize: yE
};
function gE(n, i) {
  let r = n.length, o, s, f;
  for (; r--; )
    if (n[r][0] === "enter") {
      if (n[r][1].type === "content") {
        o = r;
        break;
      }
      n[r][1].type === "paragraph" && (s = r);
    } else
      n[r][1].type === "content" && n.splice(r, 1), !f && n[r][1].type === "definition" && (f = r);
  const d = {
    type: "setextHeading",
    start: {
      ...n[o][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  };
  return n[s][1].type = "setextHeadingText", f ? (n.splice(s, 0, ["enter", d, i]), n.splice(f + 1, 0, ["exit", n[o][1], i]), n[o][1].end = {
    ...n[f][1].end
  }) : n[o][1] = d, n.push(["exit", d, i]), n;
}
function yE(n, i, r) {
  const o = this;
  let s;
  return f;
  function f(p) {
    let h = o.events.length, S;
    for (; h--; )
      if (o.events[h][1].type !== "lineEnding" && o.events[h][1].type !== "linePrefix" && o.events[h][1].type !== "content") {
        S = o.events[h][1].type === "paragraph";
        break;
      }
    return !o.parser.lazy[o.now().line] && (o.interrupt || S) ? (n.enter("setextHeadingLine"), s = p, d(p)) : r(p);
  }
  function d(p) {
    return n.enter("setextHeadingLineSequence"), m(p);
  }
  function m(p) {
    return p === s ? (n.consume(p), m) : (n.exit("setextHeadingLineSequence"), Be(p) ? Xe(n, g, "lineSuffix")(p) : g(p));
  }
  function g(p) {
    return p === null || xe(p) ? (n.exit("setextHeadingLine"), i(p)) : r(p);
  }
}
const bE = {
  tokenize: vE
};
function vE(n) {
  const i = this, r = n.attempt(
    // Try to parse a blank line.
    Oo,
    o,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, s, Xe(n, n.attempt(this.parser.constructs.flow, s, n.attempt(Aw, s)), "linePrefix"))
  );
  return r;
  function o(f) {
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
const SE = {
  resolveAll: ky()
}, xE = Cy("string"), wE = Cy("text");
function Cy(n) {
  return {
    resolveAll: ky(n === "text" ? EE : void 0),
    tokenize: i
  };
  function i(r) {
    const o = this, s = this.parser.constructs[n], f = r.attempt(s, d, m);
    return d;
    function d(h) {
      return p(h) ? f(h) : m(h);
    }
    function m(h) {
      if (h === null) {
        r.consume(h);
        return;
      }
      return r.enter("data"), r.consume(h), g;
    }
    function g(h) {
      return p(h) ? (r.exit("data"), f(h)) : (r.consume(h), g);
    }
    function p(h) {
      if (h === null)
        return !0;
      const S = s[h];
      let E = -1;
      if (S)
        for (; ++E < S.length; ) {
          const w = S[E];
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
    let s = -1, f;
    for (; ++s <= r.length; )
      f === void 0 ? r[s] && r[s][1].type === "data" && (f = s, s++) : (!r[s] || r[s][1].type !== "data") && (s !== f + 2 && (r[f][1].end = r[s - 1][1].end, r.splice(f + 2, s - f - 2), s = f + 2), f = void 0);
    return n ? n(r, o) : r;
  }
}
function EE(n, i) {
  let r = 0;
  for (; ++r <= n.length; )
    if ((r === n.length || n[r][1].type === "lineEnding") && n[r - 1][1].type === "data") {
      const o = n[r - 1][1], s = i.sliceStream(o);
      let f = s.length, d = -1, m = 0, g;
      for (; f--; ) {
        const p = s[f];
        if (typeof p == "string") {
          for (d = p.length; p.charCodeAt(d - 1) === 32; )
            m++, d--;
          if (d) break;
          d = -1;
        } else if (p === -2)
          g = !0, m++;
        else if (p !== -1) {
          f++;
          break;
        }
      }
      if (i._contentTypeTextTrailing && r === n.length && (m = 0), m) {
        const p = {
          type: r === n.length || g || m < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: f ? d : o.start._bufferIndex + d,
            _index: o.start._index + f,
            line: o.end.line,
            column: o.end.column - m,
            offset: o.end.offset - m
          },
          end: {
            ...o.end
          }
        };
        o.end = {
          ...p.start
        }, o.start.offset === o.end.offset ? Object.assign(o, p) : (n.splice(r, 0, ["enter", p, i], ["exit", p, i]), r += 2);
      }
      r++;
    }
  return n;
}
const AE = {
  42: zt,
  43: zt,
  45: zt,
  48: zt,
  49: zt,
  50: zt,
  51: zt,
  52: zt,
  53: zt,
  54: zt,
  55: zt,
  56: zt,
  57: zt,
  62: vy
}, TE = {
  91: Rw
}, CE = {
  [-2]: sc,
  [-1]: sc,
  32: sc
}, kE = {
  35: Uw,
  42: vo,
  45: [Gh, vo],
  60: qw,
  61: Gh,
  95: vo,
  96: Ih,
  126: Ih
}, zE = {
  38: xy,
  92: Sy
}, RE = {
  [-5]: cc,
  [-4]: cc,
  [-3]: cc,
  33: aE,
  38: xy,
  42: Uc,
  60: [lw, Fw],
  91: lE,
  92: [Mw, Sy],
  93: ef,
  95: Uc,
  96: bw
}, DE = {
  null: [Uc, SE]
}, OE = {
  null: [42, 95]
}, _E = {
  null: []
}, ME = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: OE,
  contentInitial: TE,
  disable: _E,
  document: AE,
  flow: kE,
  flowInitial: CE,
  insideSpan: DE,
  string: zE,
  text: RE
}, Symbol.toStringTag, { value: "Module" }));
function NE(n, i, r) {
  let o = {
    _bufferIndex: -1,
    _index: 0,
    line: r && r.line || 1,
    column: r && r.column || 1,
    offset: r && r.offset || 0
  };
  const s = {}, f = [];
  let d = [], m = [];
  const g = {
    attempt: ae(ee),
    check: ae(L),
    consume: W,
    enter: Y,
    exit: ce,
    interrupt: ae(L, {
      interrupt: !0
    })
  }, p = {
    code: null,
    containerState: {},
    defineSkip: D,
    events: [],
    now: k,
    parser: n,
    previous: null,
    sliceSerialize: E,
    sliceStream: w,
    write: S
  };
  let h = i.tokenize.call(p, g);
  return i.resolveAll && f.push(i), p;
  function S(ie) {
    return d = ln(d, ie), U(), d[d.length - 1] !== null ? [] : (Z(i, 0), p.events = $c(f, p.events, p), p.events);
  }
  function E(ie, te) {
    return LE(w(ie), te);
  }
  function w(ie) {
    return UE(d, ie);
  }
  function k() {
    const {
      _bufferIndex: ie,
      _index: te,
      line: re,
      column: P,
      offset: ne
    } = o;
    return {
      _bufferIndex: ie,
      _index: te,
      line: re,
      column: P,
      offset: ne
    };
  }
  function D(ie) {
    s[ie.line] = ie.column, we();
  }
  function U() {
    let ie;
    for (; o._index < d.length; ) {
      const te = d[o._index];
      if (typeof te == "string")
        for (ie = o._index, o._bufferIndex < 0 && (o._bufferIndex = 0); o._index === ie && o._bufferIndex < te.length; )
          B(te.charCodeAt(o._bufferIndex));
      else
        B(te);
    }
  }
  function B(ie) {
    h = h(ie);
  }
  function W(ie) {
    xe(ie) ? (o.line++, o.column = 1, o.offset += ie === -3 ? 2 : 1, we()) : ie !== -1 && (o.column++, o.offset++), o._bufferIndex < 0 ? o._index++ : (o._bufferIndex++, o._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    d[o._index].length && (o._bufferIndex = -1, o._index++)), p.previous = ie;
  }
  function Y(ie, te) {
    const re = te || {};
    return re.type = ie, re.start = k(), p.events.push(["enter", re, p]), m.push(re), re;
  }
  function ce(ie) {
    const te = m.pop();
    return te.end = k(), p.events.push(["exit", te, p]), te;
  }
  function ee(ie, te) {
    Z(ie, te.from);
  }
  function L(ie, te) {
    te.restore();
  }
  function ae(ie, te) {
    return re;
    function re(P, ne, O) {
      let F, Q, be, y;
      return Array.isArray(P) ? (
        /* c8 ignore next 1 */
        X(P)
      ) : "tokenize" in P ? (
        // Looks like a construct.
        X([
          /** @type {Construct} */
          P
        ])
      ) : j(P);
      function j(le) {
        return ze;
        function ze(_e) {
          const et = _e !== null && le[_e], St = _e !== null && le.null, Nt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(et) ? et : et ? [et] : [],
            ...Array.isArray(St) ? St : St ? [St] : []
          ];
          return X(Nt)(_e);
        }
      }
      function X(le) {
        return F = le, Q = 0, le.length === 0 ? O : x(le[Q]);
      }
      function x(le) {
        return ze;
        function ze(_e) {
          return y = fe(), be = le, le.partial || (p.currentConstruct = le), le.name && p.parser.constructs.disable.null.includes(le.name) ? Se() : le.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            te ? Object.assign(Object.create(p), te) : p,
            g,
            $,
            Se
          )(_e);
        }
      }
      function $(le) {
        return ie(be, y), ne;
      }
      function Se(le) {
        return y.restore(), ++Q < F.length ? x(F[Q]) : O;
      }
    }
  }
  function Z(ie, te) {
    ie.resolveAll && !f.includes(ie) && f.push(ie), ie.resolve && xn(p.events, te, p.events.length - te, ie.resolve(p.events.slice(te), p)), ie.resolveTo && (p.events = ie.resolveTo(p.events, p));
  }
  function fe() {
    const ie = k(), te = p.previous, re = p.currentConstruct, P = p.events.length, ne = Array.from(m);
    return {
      from: P,
      restore: O
    };
    function O() {
      o = ie, p.previous = te, p.currentConstruct = re, p.events.length = P, m = ne, we();
    }
  }
  function we() {
    o.line in s && o.column < 2 && (o.column = s[o.line], o.offset += s[o.line] - 1);
  }
}
function UE(n, i) {
  const r = i.start._index, o = i.start._bufferIndex, s = i.end._index, f = i.end._bufferIndex;
  let d;
  if (r === s)
    d = [n[r].slice(o, f)];
  else {
    if (d = n.slice(r, s), o > -1) {
      const m = d[0];
      typeof m == "string" ? d[0] = m.slice(o) : d.shift();
    }
    f > 0 && d.push(n[s].slice(0, f));
  }
  return d;
}
function LE(n, i) {
  let r = -1;
  const o = [];
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
    s = f === -2, o.push(d);
  }
  return o.join("");
}
function BE(n) {
  const o = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Gx([ME, ...(n || {}).extensions || []])
    ),
    content: s(Wx),
    defined: [],
    document: s(ew),
    flow: s(bE),
    lazy: {},
    string: s(xE),
    text: s(wE)
  };
  return o;
  function s(f) {
    return d;
    function d(m) {
      return NE(o, f, m);
    }
  }
}
function jE(n) {
  for (; !wy(n); )
    ;
  return n;
}
const Yh = /[\0\t\n\r]/g;
function qE() {
  let n = 1, i = "", r = !0, o;
  return s;
  function s(f, d, m) {
    const g = [];
    let p, h, S, E, w;
    for (f = i + (typeof f == "string" ? f.toString() : new TextDecoder(d || void 0).decode(f)), S = 0, i = "", r && (f.charCodeAt(0) === 65279 && S++, r = void 0); S < f.length; ) {
      if (Yh.lastIndex = S, p = Yh.exec(f), E = p && p.index !== void 0 ? p.index : f.length, w = f.charCodeAt(E), !p) {
        i = f.slice(S);
        break;
      }
      if (w === 10 && S === E && o)
        g.push(-3), o = void 0;
      else
        switch (o && (g.push(-5), o = void 0), S < E && (g.push(f.slice(S, E)), n += E - S), w) {
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
      S = E + 1;
    }
    return m && (o && g.push(-5), i && g.push(i), g.push(null)), g;
  }
}
const HE = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function VE(n) {
  return n.replace(HE, IE);
}
function IE(n, i, r) {
  if (i)
    return i;
  if (r.charCodeAt(0) === 35) {
    const s = r.charCodeAt(1), f = s === 120 || s === 88;
    return by(r.slice(f ? 2 : 1), f ? 16 : 10);
  }
  return Wc(r) || n;
}
const zy = {}.hasOwnProperty;
function QE(n, i, r) {
  return typeof i != "string" && (r = i, i = void 0), GE(r)(jE(BE(r).document().write(qE()(n, i, !0))));
}
function GE(n) {
  const i = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: f(Ui),
      autolinkProtocol: fe,
      autolinkEmail: fe,
      atxHeading: f(Kl),
      blockQuote: f(St),
      characterEscape: fe,
      characterReference: fe,
      codeFenced: f(Nt),
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: d,
      codeIndented: f(Nt, d),
      codeText: f(fn, d),
      codeTextData: fe,
      data: fe,
      codeFlowValue: fe,
      definition: f(Mi),
      definitionDestinationString: d,
      definitionLabelString: d,
      definitionTitleString: d,
      emphasis: f(Ni),
      hardBreakEscape: f(Zl),
      hardBreakTrailing: f(Zl),
      htmlFlow: f(Ut, d),
      htmlFlowData: fe,
      htmlText: f(Ut, d),
      htmlTextData: fe,
      image: f(No),
      label: d,
      link: f(Ui),
      listItem: f(La),
      listItemValue: E,
      listOrdered: f(Li, S),
      listUnordered: f(Li),
      paragraph: f(Uo),
      reference: x,
      referenceString: d,
      resourceDestinationString: d,
      resourceTitleString: d,
      setextHeading: f(Kl),
      strong: f(Jl),
      thematicBreak: f(Bo)
    },
    exit: {
      atxHeading: g(),
      atxHeadingSequence: ee,
      autolink: g(),
      autolinkEmail: et,
      autolinkProtocol: _e,
      blockQuote: g(),
      characterEscapeValue: we,
      characterReferenceMarkerHexadecimal: Se,
      characterReferenceMarkerNumeric: Se,
      characterReferenceValue: le,
      characterReference: ze,
      codeFenced: g(U),
      codeFencedFence: D,
      codeFencedFenceInfo: w,
      codeFencedFenceMeta: k,
      codeFlowValue: we,
      codeIndented: g(B),
      codeText: g(ne),
      codeTextData: we,
      data: we,
      definition: g(),
      definitionDestinationString: ce,
      definitionLabelString: W,
      definitionTitleString: Y,
      emphasis: g(),
      hardBreakEscape: g(te),
      hardBreakTrailing: g(te),
      htmlFlow: g(re),
      htmlFlowData: we,
      htmlText: g(P),
      htmlTextData: we,
      image: g(F),
      label: be,
      labelText: Q,
      lineEnding: ie,
      link: g(O),
      listItem: g(),
      listOrdered: g(),
      listUnordered: g(),
      paragraph: g(),
      referenceString: $,
      resourceDestinationString: y,
      resourceTitleString: j,
      resource: X,
      setextHeading: g(Z),
      setextHeadingLineSequence: ae,
      setextHeadingText: L,
      strong: g(),
      thematicBreak: g()
    }
  };
  Ry(i, (n || {}).mdastExtensions || []);
  const r = {};
  return o;
  function o(H) {
    let K = {
      type: "root",
      children: []
    };
    const me = {
      stack: [K],
      tokenStack: [],
      config: i,
      enter: m,
      exit: p,
      buffer: d,
      resume: h,
      data: r
    }, ye = [];
    let je = -1;
    for (; ++je < H.length; )
      if (H[je][1].type === "listOrdered" || H[je][1].type === "listUnordered")
        if (H[je][0] === "enter")
          ye.push(je);
        else {
          const Lt = ye.pop();
          je = s(H, Lt, je);
        }
    for (je = -1; ++je < H.length; ) {
      const Lt = i[H[je][0]];
      zy.call(Lt, H[je][1].type) && Lt[H[je][1].type].call(Object.assign({
        sliceSerialize: H[je][2].sliceSerialize
      }, me), H[je][1]);
    }
    if (me.tokenStack.length > 0) {
      const Lt = me.tokenStack[me.tokenStack.length - 1];
      (Lt[1] || Fh).call(me, void 0, Lt[0]);
    }
    for (K.position = {
      start: fa(H.length > 0 ? H[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: fa(H.length > 0 ? H[H.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, je = -1; ++je < i.transforms.length; )
      K = i.transforms[je](K) || K;
    return K;
  }
  function s(H, K, me) {
    let ye = K - 1, je = -1, Lt = !1, wn, wt, dn, Bt;
    for (; ++ye <= me; ) {
      const ot = H[ye];
      switch (ot[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ot[0] === "enter" ? je++ : je--, Bt = void 0;
          break;
        }
        case "lineEndingBlank": {
          ot[0] === "enter" && (wn && !Bt && !je && !dn && (dn = ye), Bt = void 0);
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
      if (!je && ot[0] === "enter" && ot[1].type === "listItemPrefix" || je === -1 && ot[0] === "exit" && (ot[1].type === "listUnordered" || ot[1].type === "listOrdered")) {
        if (wn) {
          let Xt = ye;
          for (wt = void 0; Xt--; ) {
            const rn = H[Xt];
            if (rn[1].type === "lineEnding" || rn[1].type === "lineEndingBlank") {
              if (rn[0] === "exit") continue;
              wt && (H[wt][1].type = "lineEndingBlank", Lt = !0), rn[1].type = "lineEnding", wt = Xt;
            } else if (!(rn[1].type === "linePrefix" || rn[1].type === "blockQuotePrefix" || rn[1].type === "blockQuotePrefixWhitespace" || rn[1].type === "blockQuoteMarker" || rn[1].type === "listItemIndent")) break;
          }
          dn && (!wt || dn < wt) && (wn._spread = !0), wn.end = Object.assign({}, wt ? H[wt][1].start : ot[1].end), H.splice(wt || ye, 0, ["exit", wn, ot[2]]), ye++, me++;
        }
        if (ot[1].type === "listItemPrefix") {
          const Xt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ot[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          wn = Xt, H.splice(ye, 0, ["enter", Xt, ot[2]]), ye++, me++, dn = void 0, Bt = !0;
        }
      }
    }
    return H[K][1]._spread = Lt, me;
  }
  function f(H, K) {
    return me;
    function me(ye) {
      m.call(this, H(ye), ye), K && K.call(this, ye);
    }
  }
  function d() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function m(H, K, me) {
    this.stack[this.stack.length - 1].children.push(H), this.stack.push(H), this.tokenStack.push([K, me || void 0]), H.position = {
      start: fa(K.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function g(H) {
    return K;
    function K(me) {
      H && H.call(this, me), p.call(this, me);
    }
  }
  function p(H, K) {
    const me = this.stack.pop(), ye = this.tokenStack.pop();
    if (ye)
      ye[0].type !== H.type && (K ? K.call(this, H, ye[0]) : (ye[1] || Fh).call(this, H, ye[0]));
    else throw new Error("Cannot close `" + H.type + "` (" + Hl({
      start: H.start,
      end: H.end
    }) + "): it’s not open");
    me.position.end = fa(H.end);
  }
  function h() {
    return Ix(this.stack.pop());
  }
  function S() {
    this.data.expectingFirstListItemValue = !0;
  }
  function E(H) {
    if (this.data.expectingFirstListItemValue) {
      const K = this.stack[this.stack.length - 2];
      K.start = Number.parseInt(this.sliceSerialize(H), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function w() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.lang = H;
  }
  function k() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.meta = H;
  }
  function D() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function U() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function B() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = H.replace(/(\r?\n|\r)$/g, "");
  }
  function W(H) {
    const K = this.resume(), me = this.stack[this.stack.length - 1];
    me.label = K, me.identifier = Ci(this.sliceSerialize(H)).toLowerCase();
  }
  function Y() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.title = H;
  }
  function ce() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.url = H;
  }
  function ee(H) {
    const K = this.stack[this.stack.length - 1];
    if (!K.depth) {
      const me = this.sliceSerialize(H).length;
      K.depth = me;
    }
  }
  function L() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function ae(H) {
    const K = this.stack[this.stack.length - 1];
    K.depth = this.sliceSerialize(H).codePointAt(0) === 61 ? 1 : 2;
  }
  function Z() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function fe(H) {
    const me = this.stack[this.stack.length - 1].children;
    let ye = me[me.length - 1];
    (!ye || ye.type !== "text") && (ye = Lo(), ye.position = {
      start: fa(H.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, me.push(ye)), this.stack.push(ye);
  }
  function we(H) {
    const K = this.stack.pop();
    K.value += this.sliceSerialize(H), K.position.end = fa(H.end);
  }
  function ie(H) {
    const K = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const me = K.children[K.children.length - 1];
      me.position.end = fa(H.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(K.type) && (fe.call(this, H), we.call(this, H));
  }
  function te() {
    this.data.atHardBreak = !0;
  }
  function re() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = H;
  }
  function P() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = H;
  }
  function ne() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.value = H;
  }
  function O() {
    const H = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || "shortcut";
      H.type += "Reference", H.referenceType = K, delete H.url, delete H.title;
    } else
      delete H.identifier, delete H.label;
    this.data.referenceType = void 0;
  }
  function F() {
    const H = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || "shortcut";
      H.type += "Reference", H.referenceType = K, delete H.url, delete H.title;
    } else
      delete H.identifier, delete H.label;
    this.data.referenceType = void 0;
  }
  function Q(H) {
    const K = this.sliceSerialize(H), me = this.stack[this.stack.length - 2];
    me.label = VE(K), me.identifier = Ci(K).toLowerCase();
  }
  function be() {
    const H = this.stack[this.stack.length - 1], K = this.resume(), me = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, me.type === "link") {
      const ye = H.children;
      me.children = ye;
    } else
      me.alt = K;
  }
  function y() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.url = H;
  }
  function j() {
    const H = this.resume(), K = this.stack[this.stack.length - 1];
    K.title = H;
  }
  function X() {
    this.data.inReference = void 0;
  }
  function x() {
    this.data.referenceType = "collapsed";
  }
  function $(H) {
    const K = this.resume(), me = this.stack[this.stack.length - 1];
    me.label = K, me.identifier = Ci(this.sliceSerialize(H)).toLowerCase(), this.data.referenceType = "full";
  }
  function Se(H) {
    this.data.characterReferenceType = H.type;
  }
  function le(H) {
    const K = this.sliceSerialize(H), me = this.data.characterReferenceType;
    let ye;
    me ? (ye = by(K, me === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : ye = Wc(K);
    const je = this.stack[this.stack.length - 1];
    je.value += ye;
  }
  function ze(H) {
    const K = this.stack.pop();
    K.position.end = fa(H.end);
  }
  function _e(H) {
    we.call(this, H);
    const K = this.stack[this.stack.length - 1];
    K.url = this.sliceSerialize(H);
  }
  function et(H) {
    we.call(this, H);
    const K = this.stack[this.stack.length - 1];
    K.url = "mailto:" + this.sliceSerialize(H);
  }
  function St() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Nt() {
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
  function Mi() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ni() {
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
  function No() {
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
  function Li(H) {
    return {
      type: "list",
      ordered: H.type === "listOrdered",
      start: null,
      spread: H._spread,
      children: []
    };
  }
  function La(H) {
    return {
      type: "listItem",
      spread: H._spread,
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
function fa(n) {
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
function Fh(n, i) {
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
function FE(n) {
  const i = this;
  i.parser = r;
  function r(o) {
    return QE(o, {
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
function XE(n, i) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: n.wrap(n.all(i), !0)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function PE(n, i) {
  const r = { type: "element", tagName: "br", properties: {}, children: [] };
  return n.patch(i, r), [n.applyData(i, r), { type: "text", value: `
` }];
}
function KE(n, i) {
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
function ZE(n, i) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function JE(n, i) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function WE(n, i) {
  const r = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", o = String(i.identifier).toUpperCase(), s = _i(o.toLowerCase()), f = n.footnoteOrder.indexOf(o);
  let d, m = n.footnoteCounts.get(o);
  m === void 0 ? (m = 0, n.footnoteOrder.push(o), d = n.footnoteOrder.length) : d = f + 1, m += 1, n.footnoteCounts.set(o, m);
  const g = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + r + "fn-" + s,
      id: r + "fnref-" + s + (m > 1 ? "-" + m : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(d) }]
  };
  n.patch(i, g);
  const p = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [g]
  };
  return n.patch(i, p), n.applyData(i, p);
}
function $E(n, i) {
  const r = {
    type: "element",
    tagName: "h" + i.depth,
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function eA(n, i) {
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
  const s = n.all(i), f = s[0];
  f && f.type === "text" ? f.value = "[" + f.value : s.unshift({ type: "text", value: "[" });
  const d = s[s.length - 1];
  return d && d.type === "text" ? d.value += o : s.push({ type: "text", value: o }), s;
}
function tA(n, i) {
  const r = String(i.identifier).toUpperCase(), o = n.definitionById.get(r);
  if (!o)
    return Dy(n, i);
  const s = { src: _i(o.url || ""), alt: i.alt };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const f = { type: "element", tagName: "img", properties: s, children: [] };
  return n.patch(i, f), n.applyData(i, f);
}
function nA(n, i) {
  const r = { src: _i(i.url) };
  i.alt !== null && i.alt !== void 0 && (r.alt = i.alt), i.title !== null && i.title !== void 0 && (r.title = i.title);
  const o = { type: "element", tagName: "img", properties: r, children: [] };
  return n.patch(i, o), n.applyData(i, o);
}
function aA(n, i) {
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
function iA(n, i) {
  const r = String(i.identifier).toUpperCase(), o = n.definitionById.get(r);
  if (!o)
    return Dy(n, i);
  const s = { href: _i(o.url || "") };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const f = {
    type: "element",
    tagName: "a",
    properties: s,
    children: n.all(i)
  };
  return n.patch(i, f), n.applyData(i, f);
}
function lA(n, i) {
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
function rA(n, i, r) {
  const o = n.all(i), s = r ? oA(r) : Oy(i), f = {}, d = [];
  if (typeof i.checked == "boolean") {
    const h = o[0];
    let S;
    h && h.type === "element" && h.tagName === "p" ? S = h : (S = { type: "element", tagName: "p", properties: {}, children: [] }, o.unshift(S)), S.children.length > 0 && S.children.unshift({ type: "text", value: " " }), S.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: i.checked, disabled: !0 },
      children: []
    }), f.className = ["task-list-item"];
  }
  let m = -1;
  for (; ++m < o.length; ) {
    const h = o[m];
    (s || m !== 0 || h.type !== "element" || h.tagName !== "p") && d.push({ type: "text", value: `
` }), h.type === "element" && h.tagName === "p" && !s ? d.push(...h.children) : d.push(h);
  }
  const g = o[o.length - 1];
  g && (s || g.type !== "element" || g.tagName !== "p") && d.push({ type: "text", value: `
` });
  const p = { type: "element", tagName: "li", properties: f, children: d };
  return n.patch(i, p), n.applyData(i, p);
}
function oA(n) {
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
function uA(n, i) {
  const r = {}, o = n.all(i);
  let s = -1;
  for (typeof i.start == "number" && i.start !== 1 && (r.start = i.start); ++s < o.length; ) {
    const d = o[s];
    if (d.type === "element" && d.tagName === "li" && d.properties && Array.isArray(d.properties.className) && d.properties.className.includes("task-list-item")) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const f = {
    type: "element",
    tagName: i.ordered ? "ol" : "ul",
    properties: r,
    children: n.wrap(o, !0)
  };
  return n.patch(i, f), n.applyData(i, f);
}
function sA(n, i) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function cA(n, i) {
  const r = { type: "root", children: n.wrap(n.all(i)) };
  return n.patch(i, r), n.applyData(i, r);
}
function fA(n, i) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, r), n.applyData(i, r);
}
function dA(n, i) {
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
    }, m = Pc(i.children[1]), g = fy(i.children[i.children.length - 1]);
    m && g && (d.position = { start: m, end: g }), s.push(d);
  }
  const f = {
    type: "element",
    tagName: "table",
    properties: {},
    children: n.wrap(s, !0)
  };
  return n.patch(i, f), n.applyData(i, f);
}
function pA(n, i, r) {
  const o = r ? r.children : void 0, f = (o ? o.indexOf(i) : 1) === 0 ? "th" : "td", d = r && r.type === "table" ? r.align : void 0, m = d ? d.length : i.children.length;
  let g = -1;
  const p = [];
  for (; ++g < m; ) {
    const S = i.children[g], E = {}, w = d ? d[g] : void 0;
    w && (E.align = w);
    let k = { type: "element", tagName: f, properties: E, children: [] };
    S && (k.children = n.all(S), n.patch(S, k), k = n.applyData(S, k)), p.push(k);
  }
  const h = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: n.wrap(p, !0)
  };
  return n.patch(i, h), n.applyData(i, h);
}
function mA(n, i) {
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
function hA(n) {
  const i = String(n), r = /\r?\n|\r/g;
  let o = r.exec(i), s = 0;
  const f = [];
  for (; o; )
    f.push(
      Kh(i.slice(s, o.index), s > 0, !0),
      o[0]
    ), s = o.index + o[0].length, o = r.exec(i);
  return f.push(Kh(i.slice(s), s > 0, !1)), f.join("");
}
function Kh(n, i, r) {
  let o = 0, s = n.length;
  if (i) {
    let f = n.codePointAt(o);
    for (; f === Xh || f === Ph; )
      o++, f = n.codePointAt(o);
  }
  if (r) {
    let f = n.codePointAt(s - 1);
    for (; f === Xh || f === Ph; )
      s--, f = n.codePointAt(s - 1);
  }
  return s > o ? n.slice(o, s) : "";
}
function gA(n, i) {
  const r = { type: "text", value: hA(String(i.value)) };
  return n.patch(i, r), n.applyData(i, r);
}
function yA(n, i) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return n.patch(i, r), n.applyData(i, r);
}
const bA = {
  blockquote: XE,
  break: PE,
  code: KE,
  delete: ZE,
  emphasis: JE,
  footnoteReference: WE,
  heading: $E,
  html: eA,
  imageReference: tA,
  image: nA,
  inlineCode: aA,
  linkReference: iA,
  link: lA,
  listItem: rA,
  list: uA,
  paragraph: sA,
  // @ts-expect-error: root is different, but hard to type.
  root: cA,
  strong: fA,
  table: dA,
  tableCell: mA,
  tableRow: pA,
  text: gA,
  thematicBreak: yA,
  toml: co,
  yaml: co,
  definition: co,
  footnoteDefinition: co
};
function co() {
}
const _y = -1, _o = 0, Il = 1, wo = 2, tf = 3, nf = 4, af = 5, lf = 6, My = 7, Ny = 8, Zh = typeof self == "object" ? self : globalThis, vA = (n, i) => {
  const r = (s, f) => (n.set(f, s), s), o = (s) => {
    if (n.has(s))
      return n.get(s);
    const [f, d] = i[s];
    switch (f) {
      case _o:
      case _y:
        return r(d, s);
      case Il: {
        const m = r([], s);
        for (const g of d)
          m.push(o(g));
        return m;
      }
      case wo: {
        const m = r({}, s);
        for (const [g, p] of d)
          m[o(g)] = o(p);
        return m;
      }
      case tf:
        return r(new Date(d), s);
      case nf: {
        const { source: m, flags: g } = d;
        return r(new RegExp(m, g), s);
      }
      case af: {
        const m = r(/* @__PURE__ */ new Map(), s);
        for (const [g, p] of d)
          m.set(o(g), o(p));
        return m;
      }
      case lf: {
        const m = r(/* @__PURE__ */ new Set(), s);
        for (const g of d)
          m.add(o(g));
        return m;
      }
      case My: {
        const { name: m, message: g } = d;
        return r(new Zh[m](g), s);
      }
      case Ny:
        return r(BigInt(d), s);
      case "BigInt":
        return r(Object(BigInt(d)), s);
      case "ArrayBuffer":
        return r(new Uint8Array(d).buffer, d);
      case "DataView": {
        const { buffer: m } = new Uint8Array(d);
        return r(new DataView(m), d);
      }
    }
    return r(new Zh[f](d), s);
  };
  return o;
}, Jh = (n) => vA(/* @__PURE__ */ new Map(), n)(0), Ai = "", { toString: SA } = {}, { keys: xA } = Object, ql = (n) => {
  const i = typeof n;
  if (i !== "object" || !n)
    return [_o, i];
  const r = SA.call(n).slice(8, -1);
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
  return r.includes("Array") ? [Il, r] : r.includes("Error") ? [My, r] : [wo, r];
}, fo = ([n, i]) => n === _o && (i === "function" || i === "symbol"), wA = (n, i, r, o) => {
  const s = (d, m) => {
    const g = o.push(d) - 1;
    return r.set(m, g), g;
  }, f = (d) => {
    if (r.has(d))
      return r.get(d);
    let [m, g] = ql(d);
    switch (m) {
      case _o: {
        let h = d;
        switch (g) {
          case "bigint":
            m = Ny, h = d.toString();
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
        return s([m, h], d);
      }
      case Il: {
        if (g) {
          let E = d;
          return g === "DataView" ? E = new Uint8Array(d.buffer) : g === "ArrayBuffer" && (E = new Uint8Array(d)), s([g, [...E]], d);
        }
        const h = [], S = s([m, h], d);
        for (const E of d)
          h.push(f(E));
        return S;
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
          return f(d.toJSON());
        const h = [], S = s([m, h], d);
        for (const E of xA(d))
          (n || !fo(ql(d[E]))) && h.push([f(E), f(d[E])]);
        return S;
      }
      case tf:
        return s([m, d.toISOString()], d);
      case nf: {
        const { source: h, flags: S } = d;
        return s([m, { source: h, flags: S }], d);
      }
      case af: {
        const h = [], S = s([m, h], d);
        for (const [E, w] of d)
          (n || !(fo(ql(E)) || fo(ql(w)))) && h.push([f(E), f(w)]);
        return S;
      }
      case lf: {
        const h = [], S = s([m, h], d);
        for (const E of d)
          (n || !fo(ql(E))) && h.push(f(E));
        return S;
      }
    }
    const { message: p } = d;
    return s([m, { name: g, message: p }], d);
  };
  return f;
}, Wh = (n, { json: i, lossy: r } = {}) => {
  const o = [];
  return wA(!(i || r), !!i, /* @__PURE__ */ new Map(), o)(n), o;
}, Eo = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (n, i) => i && ("json" in i || "lossy" in i) ? Jh(Wh(n, i)) : structuredClone(n)
) : (n, i) => Jh(Wh(n, i));
function EA(n, i) {
  const r = [{ type: "text", value: "↩" }];
  return i > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(i) }]
  }), r;
}
function AA(n, i) {
  return "Back to reference " + (n + 1) + (i > 1 ? "-" + i : "");
}
function TA(n) {
  const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", r = n.options.footnoteBackContent || EA, o = n.options.footnoteBackLabel || AA, s = n.options.footnoteLabel || "Footnotes", f = n.options.footnoteLabelTagName || "h2", d = n.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, m = [];
  let g = -1;
  for (; ++g < n.footnoteOrder.length; ) {
    const p = n.footnoteById.get(
      n.footnoteOrder[g]
    );
    if (!p)
      continue;
    const h = n.all(p), S = String(p.identifier).toUpperCase(), E = _i(S.toLowerCase());
    let w = 0;
    const k = [], D = n.footnoteCounts.get(S);
    for (; D !== void 0 && ++w <= D; ) {
      k.length > 0 && k.push({ type: "text", value: " " });
      let W = typeof r == "string" ? r : r(g, w);
      typeof W == "string" && (W = { type: "text", value: W }), k.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + i + "fnref-" + E + (w > 1 ? "-" + w : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof o == "string" ? o : o(g, w),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(W) ? W : [W]
      });
    }
    const U = h[h.length - 1];
    if (U && U.type === "element" && U.tagName === "p") {
      const W = U.children[U.children.length - 1];
      W && W.type === "text" ? W.value += " " : U.children.push({ type: "text", value: " " }), U.children.push(...k);
    } else
      h.push(...k);
    const B = {
      type: "element",
      tagName: "li",
      properties: { id: i + "fn-" + E },
      children: n.wrap(h, !0)
    };
    n.patch(p, B), m.push(B);
  }
  if (m.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: f,
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
          children: n.wrap(m, !0)
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
      return RA;
    if (typeof n == "function")
      return Mo(n);
    if (typeof n == "object")
      return Array.isArray(n) ? CA(n) : kA(n);
    if (typeof n == "string")
      return zA(n);
    throw new Error("Expected function, string, or object as test");
  }
);
function CA(n) {
  const i = [];
  let r = -1;
  for (; ++r < n.length; )
    i[r] = Uy(n[r]);
  return Mo(o);
  function o(...s) {
    let f = -1;
    for (; ++f < i.length; )
      if (i[f].apply(this, s)) return !0;
    return !1;
  }
}
function kA(n) {
  const i = (
    /** @type {Record<string, unknown>} */
    n
  );
  return Mo(r);
  function r(o) {
    const s = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      o
    );
    let f;
    for (f in n)
      if (s[f] !== i[f]) return !1;
    return !0;
  }
}
function zA(n) {
  return Mo(i);
  function i(r) {
    return r && r.type === n;
  }
}
function Mo(n) {
  return i;
  function i(r, o, s) {
    return !!(DA(r) && n.call(
      this,
      r,
      typeof o == "number" ? o : void 0,
      s || void 0
    ));
  }
}
function RA() {
  return !0;
}
function DA(n) {
  return n !== null && typeof n == "object" && "type" in n;
}
const Ly = [], OA = !0, $h = !1, _A = "skip";
function MA(n, i, r, o) {
  let s;
  typeof i == "function" && typeof r != "function" ? (o = r, r = i) : s = i;
  const f = Uy(s), d = o ? -1 : 1;
  m(n, void 0, [])();
  function m(g, p, h) {
    const S = (
      /** @type {Record<string, unknown>} */
      g && typeof g == "object" ? g : {}
    );
    if (typeof S.type == "string") {
      const w = (
        // `hast`
        typeof S.tagName == "string" ? S.tagName : (
          // `xast`
          typeof S.name == "string" ? S.name : void 0
        )
      );
      Object.defineProperty(E, "name", {
        value: "node (" + (g.type + (w ? "<" + w + ">" : "")) + ")"
      });
    }
    return E;
    function E() {
      let w = Ly, k, D, U;
      if ((!i || f(g, p, h[h.length - 1] || void 0)) && (w = NA(r(g, h)), w[0] === $h))
        return w;
      if ("children" in g && g.children) {
        const B = (
          /** @type {UnistParent} */
          g
        );
        if (B.children && w[0] !== _A)
          for (D = (o ? B.children.length : -1) + d, U = h.concat(B); D > -1 && D < B.children.length; ) {
            const W = B.children[D];
            if (k = m(W, D, U)(), k[0] === $h)
              return k;
            D = typeof k[1] == "number" ? k[1] : D + d;
          }
      }
      return w;
    }
  }
}
function NA(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [OA, n] : n == null ? Ly : [n];
}
function By(n, i, r, o) {
  let s, f, d;
  typeof i == "function" && typeof r != "function" ? (f = void 0, d = i, s = r) : (f = i, d = r, s = o), MA(n, f, m, s);
  function m(g, p) {
    const h = p[p.length - 1], S = h ? h.children.indexOf(g) : void 0;
    return d(g, S, h);
  }
}
const Lc = {}.hasOwnProperty, UA = {};
function LA(n, i) {
  const r = i || UA, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), d = { ...bA, ...r.handlers }, m = {
    all: p,
    applyData: jA,
    definitionById: o,
    footnoteById: s,
    footnoteCounts: f,
    footnoteOrder: [],
    handlers: d,
    one: g,
    options: r,
    patch: BA,
    wrap: HA
  };
  return By(n, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const S = h.type === "definition" ? o : s, E = String(h.identifier).toUpperCase();
      S.has(E) || S.set(E, h);
    }
  }), m;
  function g(h, S) {
    const E = h.type, w = m.handlers[E];
    if (Lc.call(m.handlers, E) && w)
      return w(m, h, S);
    if (m.options.passThrough && m.options.passThrough.includes(E)) {
      if ("children" in h) {
        const { children: D, ...U } = h, B = Eo(U);
        return B.children = m.all(h), B;
      }
      return Eo(h);
    }
    return (m.options.unknownHandler || qA)(m, h, S);
  }
  function p(h) {
    const S = [];
    if ("children" in h) {
      const E = h.children;
      let w = -1;
      for (; ++w < E.length; ) {
        const k = m.one(E[w], h);
        if (k) {
          if (w && E[w - 1].type === "break" && (!Array.isArray(k) && k.type === "text" && (k.value = eg(k.value)), !Array.isArray(k) && k.type === "element")) {
            const D = k.children[0];
            D && D.type === "text" && (D.value = eg(D.value));
          }
          Array.isArray(k) ? S.push(...k) : S.push(k);
        }
      }
    }
    return S;
  }
}
function BA(n, i) {
  n.position && (i.position = Sx(n));
}
function jA(n, i) {
  let r = i;
  if (n && n.data) {
    const o = n.data.hName, s = n.data.hChildren, f = n.data.hProperties;
    if (typeof o == "string")
      if (r.type === "element")
        r.tagName = o;
      else {
        const d = "children" in r ? r.children : [r];
        r = { type: "element", tagName: o, properties: {}, children: d };
      }
    r.type === "element" && f && Object.assign(r.properties, Eo(f)), "children" in r && r.children && s !== null && s !== void 0 && (r.children = s);
  }
  return r;
}
function qA(n, i) {
  const r = i.data || {}, o = "value" in i && !(Lc.call(r, "hProperties") || Lc.call(r, "hChildren")) ? { type: "text", value: i.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: n.all(i)
  };
  return n.patch(i, o), n.applyData(i, o);
}
function HA(n, i) {
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
  const r = LA(n, i), o = r.one(n, void 0), s = TA(r), f = Array.isArray(o) ? { type: "root", children: o } : o || { type: "root", children: [] };
  return s && f.children.push({ type: "text", value: `
` }, s), f;
}
function VA(n, i) {
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
function IA() {
  if (ag) return fc;
  ag = 1;
  var n = Object.prototype.hasOwnProperty, i = Object.prototype.toString, r = Object.defineProperty, o = Object.getOwnPropertyDescriptor, s = function(p) {
    return typeof Array.isArray == "function" ? Array.isArray(p) : i.call(p) === "[object Array]";
  }, f = function(p) {
    if (!p || i.call(p) !== "[object Object]")
      return !1;
    var h = n.call(p, "constructor"), S = p.constructor && p.constructor.prototype && n.call(p.constructor.prototype, "isPrototypeOf");
    if (p.constructor && !h && !S)
      return !1;
    var E;
    for (E in p)
      ;
    return typeof E > "u" || n.call(p, E);
  }, d = function(p, h) {
    r && h.name === "__proto__" ? r(p, h.name, {
      enumerable: !0,
      configurable: !0,
      value: h.newValue,
      writable: !0
    }) : p[h.name] = h.newValue;
  }, m = function(p, h) {
    if (h === "__proto__")
      if (n.call(p, h)) {
        if (o)
          return o(p, h).value;
      } else return;
    return p[h];
  };
  return fc = function g() {
    var p, h, S, E, w, k, D = arguments[0], U = 1, B = arguments.length, W = !1;
    for (typeof D == "boolean" && (W = D, D = arguments[1] || {}, U = 2), (D == null || typeof D != "object" && typeof D != "function") && (D = {}); U < B; ++U)
      if (p = arguments[U], p != null)
        for (h in p)
          S = m(D, h), E = m(p, h), D !== E && (W && E && (f(E) || (w = s(E))) ? (w ? (w = !1, k = S && s(S) ? S : []) : k = S && f(S) ? S : {}, d(D, { name: h, newValue: g(W, k, E) })) : typeof E < "u" && d(D, { name: h, newValue: E }));
    return D;
  }, fc;
}
var QA = IA();
const dc = /* @__PURE__ */ Hc(QA);
function Bc(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const i = Object.getPrototypeOf(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function GA() {
  const n = [], i = { run: r, use: o };
  return i;
  function r(...s) {
    let f = -1;
    const d = s.pop();
    if (typeof d != "function")
      throw new TypeError("Expected function as last argument, not " + d);
    m(null, ...s);
    function m(g, ...p) {
      const h = n[++f];
      let S = -1;
      if (g) {
        d(g);
        return;
      }
      for (; ++S < s.length; )
        (p[S] === null || p[S] === void 0) && (p[S] = s[S]);
      s = p, h ? YA(h, m)(...p) : d(null, ...p);
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
    const m = n.length > d.length;
    let g;
    m && d.push(s);
    try {
      g = n.apply(this, d);
    } catch (p) {
      const h = (
        /** @type {Error} */
        p
      );
      if (m && r)
        throw h;
      return s(h);
    }
    m || (g && g.then && typeof g.then == "function" ? g.then(f, s) : g instanceof Error ? s(g) : f(g));
  }
  function s(d, ...m) {
    r || (r = !0, i(d, ...m));
  }
  function f(d) {
    s(null, d);
  }
}
const vn = { basename: FA, dirname: XA, extname: PA, join: KA, sep: "/" };
function FA(n, i) {
  if (i !== void 0 && typeof i != "string")
    throw new TypeError('"ext" argument must be a string');
  Pl(n);
  let r = 0, o = -1, s = n.length, f;
  if (i === void 0 || i.length === 0 || i.length > n.length) {
    for (; s--; )
      if (n.codePointAt(s) === 47) {
        if (f) {
          r = s + 1;
          break;
        }
      } else o < 0 && (f = !0, o = s + 1);
    return o < 0 ? "" : n.slice(r, o);
  }
  if (i === n)
    return "";
  let d = -1, m = i.length - 1;
  for (; s--; )
    if (n.codePointAt(s) === 47) {
      if (f) {
        r = s + 1;
        break;
      }
    } else
      d < 0 && (f = !0, d = s + 1), m > -1 && (n.codePointAt(s) === i.codePointAt(m--) ? m < 0 && (o = s) : (m = -1, o = d));
  return r === o ? o = d : o < 0 && (o = n.length), n.slice(r, o);
}
function XA(n) {
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
function PA(n) {
  Pl(n);
  let i = n.length, r = -1, o = 0, s = -1, f = 0, d;
  for (; i--; ) {
    const m = n.codePointAt(i);
    if (m === 47) {
      if (d) {
        o = i + 1;
        break;
      }
      continue;
    }
    r < 0 && (d = !0, r = i + 1), m === 46 ? s < 0 ? s = i : f !== 1 && (f = 1) : s > -1 && (f = -1);
  }
  return s < 0 || r < 0 || // We saw a non-dot character immediately before the dot.
  f === 0 || // The (right-most) trimmed path component is exactly `..`.
  f === 1 && s === r - 1 && s === o + 1 ? "" : n.slice(s, r);
}
function KA(...n) {
  let i = -1, r;
  for (; ++i < n.length; )
    Pl(n[i]), n[i] && (r = r === void 0 ? n[i] : r + "/" + n[i]);
  return r === void 0 ? "." : ZA(r);
}
function ZA(n) {
  Pl(n);
  const i = n.codePointAt(0) === 47;
  let r = JA(n, !i);
  return r.length === 0 && !i && (r = "."), r.length > 0 && n.codePointAt(n.length - 1) === 47 && (r += "/"), i ? "/" + r : r;
}
function JA(n, i) {
  let r = "", o = 0, s = -1, f = 0, d = -1, m, g;
  for (; ++d <= n.length; ) {
    if (d < n.length)
      m = n.codePointAt(d);
    else {
      if (m === 47)
        break;
      m = 47;
    }
    if (m === 47) {
      if (!(s === d - 1 || f === 1)) if (s !== d - 1 && f === 2) {
        if (r.length < 2 || o !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            if (g = r.lastIndexOf("/"), g !== r.length - 1) {
              g < 0 ? (r = "", o = 0) : (r = r.slice(0, g), o = r.length - 1 - r.lastIndexOf("/")), s = d, f = 0;
              continue;
            }
          } else if (r.length > 0) {
            r = "", o = 0, s = d, f = 0;
            continue;
          }
        }
        i && (r = r.length > 0 ? r + "/.." : "..", o = 2);
      } else
        r.length > 0 ? r += "/" + n.slice(s + 1, d) : r = n.slice(s + 1, d), o = d - s - 1;
      s = d, f = 0;
    } else m === 46 && f > -1 ? f++ : f = -1;
  }
  return r;
}
function Pl(n) {
  if (typeof n != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(n)
    );
}
const WA = { cwd: $A };
function $A() {
  return "/";
}
function jc(n) {
  return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && // @ts-expect-error: indexing is fine.
  n.auth === void 0);
}
function eT(n) {
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
  return tT(n);
}
function tT(n) {
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
    i ? jc(i) ? r = { path: i } : typeof i == "string" || nT(i) ? r = { value: i } : r = i : r = {}, this.cwd = "cwd" in r ? "" : WA.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let o = -1;
    for (; ++o < pc.length; ) {
      const f = pc[o];
      f in r && r[f] !== void 0 && r[f] !== null && (this[f] = f === "history" ? [...r[f]] : r[f]);
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
  set basename(i) {
    hc(i, "basename"), mc(i, "basename"), this.path = vn.join(this.dirname || "", i);
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
  set dirname(i) {
    ig(this.basename, "dirname"), this.path = vn.join(i || "", this.basename);
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
  set extname(i) {
    if (mc(i, "extname"), ig(this.dirname, "extname"), i) {
      if (i.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (i.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = vn.join(this.dirname, this.stem + (i || ""));
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
    jc(i) && (i = eT(i)), hc(i, "path"), this.path !== i && this.history.push(i);
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
  set stem(i) {
    hc(i, "stem"), mc(i, "stem"), this.path = vn.join(this.dirname || "", i + (this.extname || ""));
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
    const s = new vt(
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
  if (n && n.includes(vn.sep))
    throw new Error(
      "`" + i + "` cannot be a path: did not expect `" + vn.sep + "`"
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
function nT(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const aT = (
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
    ), s = o[n], f = function() {
      return s.apply(f, arguments);
    };
    return Object.setPrototypeOf(f, o), f;
  }
), iT = {}.hasOwnProperty;
class rf extends aT {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = GA();
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
    return typeof i == "string" ? arguments.length === 2 ? (bc("data", this.frozen), this.namespace[i] = r, this) : iT.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (bc("data", this.frozen), this.namespace = i, this) : this.namespace;
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
    function s(f, d) {
      const m = po(i), g = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        o.parse(m)
      );
      o.run(g, m, function(h, S, E) {
        if (h || !S || !E)
          return p(h);
        const w = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          S
        ), k = o.stringify(w, E);
        oT(k) ? E.value = k : E.result = k, p(
          h,
          /** @type {VFileWithOutput<CompileResult>} */
          E
        );
      });
      function p(h, S) {
        h || !S ? d(h) : f ? f(S) : r(void 0, S);
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
    function s(f, d) {
      r = !0, ng(f), o = d;
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
    return !o && typeof r == "function" && (o = r, r = void 0), o ? f(void 0, o) : new Promise(f);
    function f(d, m) {
      const g = po(r);
      s.run(i, g, p);
      function p(h, S, E) {
        const w = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          S || i
        );
        h ? m(h) : d ? d(w) : o(void 0, w, E);
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
    return this.run(i, r, f), rg("runSync", "run", o), s;
    function f(d, m) {
      ng(d), s = m, o = !0;
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
      Array.isArray(i) ? m(i) : d(i);
    else
      throw new TypeError("Expected usable value, not `" + i + "`");
    return this;
    function f(p) {
      if (typeof p == "function")
        g(p, []);
      else if (typeof p == "object")
        if (Array.isArray(p)) {
          const [h, ...S] = (
            /** @type {PluginTuple<Array<unknown>>} */
            p
          );
          g(h, S);
        } else
          d(p);
      else
        throw new TypeError("Expected usable value, not `" + p + "`");
    }
    function d(p) {
      if (!("plugins" in p) && !("settings" in p))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      m(p.plugins), p.settings && (s.settings = dc(!0, s.settings, p.settings));
    }
    function m(p) {
      let h = -1;
      if (p != null) if (Array.isArray(p))
        for (; ++h < p.length; ) {
          const S = p[h];
          f(S);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + p + "`");
    }
    function g(p, h) {
      let S = -1, E = -1;
      for (; ++S < o.length; )
        if (o[S][0] === p) {
          E = S;
          break;
        }
      if (E === -1)
        o.push([p, ...h]);
      else if (h.length > 0) {
        let [w, ...k] = h;
        const D = o[E][1];
        Bc(D) && Bc(w) && (w = dc(!0, D, w)), o[E] = [p, w, ...k];
      }
    }
  }
}
const lT = new rf().freeze();
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
  return rT(n) ? n : new jy(n);
}
function rT(n) {
  return !!(n && typeof n == "object" && "message" in n && "messages" in n);
}
function oT(n) {
  return typeof n == "string" || uT(n);
}
function uT(n) {
  return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
}
const sT = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", og = [], ug = { allowDangerousHtml: !0 }, cT = /^(https?|ircs?|mailto|xmpp)$/i, fT = [
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
function dT(n) {
  const i = pT(n), r = mT(n);
  return hT(i.runSync(i.parse(r), r), n);
}
function pT(n) {
  const i = n.rehypePlugins || og, r = n.remarkPlugins || og, o = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...ug } : ug;
  return lT().use(FE).use(r).use(VA, o).use(i);
}
function mT(n) {
  const i = n.children || "", r = new jy();
  return typeof i == "string" && (r.value = i), r;
}
function hT(n, i) {
  const r = i.allowedElements, o = i.allowElement, s = i.components, f = i.disallowedElements, d = i.skipHtml, m = i.unwrapDisallowed, g = i.urlTransform || gT;
  for (const h of fT)
    Object.hasOwn(i, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + sT + h.id, void 0);
  return By(n, p), Tx(n, {
    Fragment: q.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: q.jsx,
    jsxs: q.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function p(h, S, E) {
    if (h.type === "raw" && E && typeof S == "number")
      return d ? E.children.splice(S, 1) : E.children[S] = { type: "text", value: h.value }, S;
    if (h.type === "element") {
      let w;
      for (w in uc)
        if (Object.hasOwn(uc, w) && Object.hasOwn(h.properties, w)) {
          const k = h.properties[w], D = uc[w];
          (D === null || D.includes(h.tagName)) && (h.properties[w] = g(String(k || ""), w, h));
        }
    }
    if (h.type === "element") {
      let w = r ? !r.includes(h.tagName) : f ? f.includes(h.tagName) : !1;
      if (!w && o && typeof S == "number" && (w = !o(h, S, E)), w && E && typeof S == "number")
        return m && h.children ? E.children.splice(S, 1, ...h.children) : E.children.splice(S, 1), S;
    }
  }
}
function gT(n) {
  const i = n.indexOf(":"), r = n.indexOf("?"), o = n.indexOf("#"), s = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    i === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && i > s || r !== -1 && i > r || o !== -1 && i > o || // It is a protocol, it should be allowed.
    cT.test(n.slice(0, i)) ? n : ""
  );
}
function yT({ content: n, className: i = "" }) {
  return /* @__PURE__ */ q.jsx("div", { className: `prose prose-sm max-w-none dark:prose-invert ${i}`, children: /* @__PURE__ */ q.jsx(
    dT,
    {
      components: {
        // Custom styling for markdown elements
        p: ({ children: r }) => /* @__PURE__ */ q.jsx("p", { className: "mb-2 last:mb-0", children: r }),
        ul: ({ children: r }) => /* @__PURE__ */ q.jsx("ul", { className: "list-disc list-inside mb-2 space-y-1", children: r }),
        ol: ({ children: r }) => /* @__PURE__ */ q.jsx("ol", { className: "list-decimal list-inside mb-2 space-y-1", children: r }),
        li: ({ children: r }) => /* @__PURE__ */ q.jsx("li", { className: "text-sm", children: r }),
        strong: ({ children: r }) => /* @__PURE__ */ q.jsx("strong", { className: "font-semibold", children: r }),
        em: ({ children: r }) => /* @__PURE__ */ q.jsx("em", { className: "italic", children: r }),
        code: ({ children: r }) => /* @__PURE__ */ q.jsx("code", { className: "bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono", children: r }),
        pre: ({ children: r }) => /* @__PURE__ */ q.jsx("pre", { className: "bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto", children: r }),
        h1: ({ children: r }) => /* @__PURE__ */ q.jsx("h1", { className: "text-lg font-bold mb-2", children: r }),
        h2: ({ children: r }) => /* @__PURE__ */ q.jsx("h2", { className: "text-base font-bold mb-2", children: r }),
        h3: ({ children: r }) => /* @__PURE__ */ q.jsx("h3", { className: "text-sm font-bold mb-1", children: r }),
        a: ({ children: r, href: o }) => /* @__PURE__ */ q.jsx(
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
class qn {
  static BACKEND_URL = "https://qurius-ai.onrender.com";
  // Track widget view
  static async trackWidgetView(i, r) {
    try {
      const o = this.getSessionId(), s = navigator.userAgent;
      await Me.post(`${this.BACKEND_URL}/api/analytics/widget-view`, {
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
  static async trackWidgetInteraction(i, r, o, s, f) {
    try {
      const d = this.getSessionId();
      await Me.post(`${this.BACKEND_URL}/api/analytics/widget-interaction`, {
        companyName: i,
        eventType: r,
        message: o,
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
  static async getCompanyAnalytics(i, r = "7d") {
    try {
      return (await Me.get(`${this.BACKEND_URL}/api/analytics/company/${i}?period=${r}`)).data;
    } catch (o) {
      throw console.error("Failed to fetch analytics:", o), new Error("Failed to fetch analytics");
    }
  }
  // Get FAQ performance analytics
  static async getFAQPerformance(i, r = "7d") {
    try {
      return (await Me.get(`${this.BACKEND_URL}/api/analytics/faq-performance/${i}?period=${r}`)).data;
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
  static async trackMessageReceived(i, r, o, s, f, d) {
    await this.trackWidgetInteraction(i, "message_received", void 0, r, {
      responseSource: o,
      faqId: s,
      confidenceScore: f,
      aiFallbackReason: d
    });
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
  static async trackRating(i, r, o, s, f, d, m) {
    await this.trackWidgetInteraction(i, "rating_given", void 0, o, {
      rating: r,
      feedbackText: f,
      responseSource: s,
      faqId: d,
      confidenceScore: m
    });
  }
}
function bT({ message: n, messageIndex: i, liked: r, isUser: o, timestamp: s, onStreamingChange: f, skipStreaming: d, companyTheme: m, isLastAiMessage: g, companyName: p, onRatingChange: h, wasMinimized: S }) {
  const [E, w] = de.useState(""), [k, D] = de.useState(!1), [U, B] = de.useState(!1), [W, Y] = de.useState(!1), [ce, ee] = de.useState(""), [L, ae] = de.useState(!1), [Z, fe] = de.useState(!1), we = async (P) => {
    const ne = P.split(" ");
    let O = "";
    D(!0), f?.(!0), w("");
    for (let F = 0; F < ne.length; F++)
      O += ne[F] + " ", w(O.trim()), F === ne.length - 1 && (D(!1), f?.(!1)), await new Promise((Q) => setTimeout(Q, 100));
  };
  de.useEffect(() => {
    const P = setTimeout(() => {
      B(!0);
    }, 500);
    return () => clearTimeout(P);
  }, []), de.useEffect(() => {
    !o && !d && U && g ? setTimeout(() => {
      we(n);
    }, 1e3) : !o && !d && !U && g ? (D(!0), f?.(!0), w("")) : (D(!1), f?.(!1), w(""));
  }, [n, o, d, U, g]);
  const ie = async (P) => {
    if (p)
      try {
        P === -1 ? Y(!0) : await qn.trackRating(
          p,
          P,
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
  }, te = async () => {
    if (p) {
      ae(!0);
      try {
        await qn.trackRating(
          p,
          -1,
          // Negative rating
          n,
          "ai",
          // Assuming AI response for now
          ce,
          void 0,
          0.8
          // Default confidence
        ), Y(!1), ee("");
      } catch (P) {
        console.error("Failed to submit feedback:", P);
      } finally {
        ae(!1);
      }
    }
  }, re = async () => {
    try {
      await navigator.clipboard.writeText(n), fe(!0), setTimeout(() => fe(!1), 2e3);
    } catch (P) {
      console.error("Failed to copy message:", P);
    }
  };
  return /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
    /* @__PURE__ */ q.jsxs("div", { className: an("flex gap-3 max-w-[98%] mx-auto px-4 py-6", o ? "flex-row-reverse" : "flex-row"), children: [
      /* @__PURE__ */ q.jsx(
        "div",
        {
          className: an(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
            o ? "text-white" : "text-gray-600 dark:text-gray-400"
          ),
          style: { backgroundColor: o ? m?.primaryColor : m?.backgroundColor },
          children: o ? /* @__PURE__ */ q.jsx(mS, { className: "w-4 h-4" }) : /* @__PURE__ */ q.jsx(Ig, { className: "w-4 h-4" })
        }
      ),
      (S || U) && /* @__PURE__ */ q.jsxs("div", { className: an("flex-1 space-y-2", o ? "text-right" : "text-left"), children: [
        /* @__PURE__ */ q.jsx(
          "div",
          {
            className: an(
              "inline-block max-w-[98%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
              o ? "text-white rounded-br-md" : "text-gray-900 dark:text-gray-100 rounded-bl-md"
            ),
            style: { backgroundColor: o ? m?.primaryColor : m?.backgroundColor },
            children: /* @__PURE__ */ q.jsx(
              yT,
              {
                content: !o && k && !d && g ? E : n
              }
            )
          }
        ),
        !o && !k && /* @__PURE__ */ q.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
          i !== 0 && /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
            /* @__PURE__ */ q.jsx(
              "button",
              {
                onClick: () => {
                  console.log("Current liked status:", r);
                  const P = r !== "like" ? "like" : null;
                  console.log("New rating:", P), h?.(P), ie(P === "like" ? 1 : 0);
                },
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Like this response",
                children: /* @__PURE__ */ q.jsx(dS, { className: an("w-3 h-3 text-gray-500 hover:text-green-500", r === "like" ? "text-green-500" : "text-gray-500") })
              }
            ),
            /* @__PURE__ */ q.jsx(
              "button",
              {
                onClick: () => {
                  console.log("Current liked status:", r);
                  const P = r !== "dislike" ? "dislike" : null;
                  console.log("New rating:", P), h?.(P), ie(P === "dislike" ? -1 : 0);
                },
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Dislike this response",
                children: /* @__PURE__ */ q.jsx(cS, { className: an("w-3 h-3 text-gray-500 hover:text-red-500", r === "dislike" ? "text-red-500" : "text-gray-500") })
              }
            ),
            /* @__PURE__ */ q.jsx(
              "button",
              {
                onClick: re,
                className: "p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                title: "Copy message",
                children: /* @__PURE__ */ q.jsx(Zv, { className: "w-3 h-3 text-gray-500 hover:text-blue-500" })
              }
            )
          ] }),
          Z && /* @__PURE__ */ q.jsx("span", { className: "text-xs text-green-500 ml-1", children: "Copied!" }),
          s && /* @__PURE__ */ q.jsx(
            "div",
            {
              className: an("text-xs text-gray-500 dark:text-gray-400 px-2", "text-right"),
              children: s
            }
          )
        ] })
      ] })
    ] }),
    W && /* @__PURE__ */ q.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ q.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4", children: [
      /* @__PURE__ */ q.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ q.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: "Help us improve" }),
        /* @__PURE__ */ q.jsx(
          "button",
          {
            onClick: () => Y(!1),
            className: "p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
            children: /* @__PURE__ */ q.jsx(gS, { className: "w-5 h-5 text-gray-500" })
          }
        )
      ] }),
      /* @__PURE__ */ q.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "What could we have done better? (Optional)" }),
      /* @__PURE__ */ q.jsx(
        "textarea",
        {
          value: ce,
          onChange: (P) => ee(P.target.value),
          placeholder: "Your feedback helps us improve...",
          className: "w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100",
          rows: 3
        }
      ),
      /* @__PURE__ */ q.jsxs("div", { className: "flex gap-2 mt-4", children: [
        /* @__PURE__ */ q.jsx(
          "button",
          {
            onClick: () => Y(!1),
            className: "flex-1 px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ q.jsx(
          "button",
          {
            onClick: te,
            disabled: L,
            className: "flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            children: L ? "Submitting..." : "Submit Feedback"
          }
        )
      ] })
    ] }) })
  ] });
}
function vT({ companyTheme: n }) {
  return /* @__PURE__ */ q.jsxs("div", { className: "flex gap-3 max-w-4xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ q.jsx(
      "div",
      {
        className: "flex-shrink-0 w-8 h-8 rounded-full text-gray-600 dark:text-gray-400 flex items-center justify-center",
        style: { backgroundColor: n?.backgroundColor || "#f3f4f6" },
        children: /* @__PURE__ */ q.jsx(Ig, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ q.jsx("div", { className: "flex-1", children: /* @__PURE__ */ q.jsx("div", { className: "inline-block bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md", children: /* @__PURE__ */ q.jsxs("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ q.jsx("div", { className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" }),
      /* @__PURE__ */ q.jsx(
        "div",
        {
          className: "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce",
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ q.jsx(
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
function ST(...n) {
  return (i) => {
    let r = !1;
    const o = n.map((s) => {
      const f = sg(s, i);
      return !r && typeof f == "function" && (r = !0), f;
    });
    if (r)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const f = o[s];
          typeof f == "function" ? f() : sg(n[s], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function xT(n) {
  const i = /* @__PURE__ */ ET(n), r = de.forwardRef((o, s) => {
    const { children: f, ...d } = o, m = de.Children.toArray(f), g = m.find(TT);
    if (g) {
      const p = g.props.children, h = m.map((S) => S === g ? de.Children.count(p) > 1 ? de.Children.only(null) : de.isValidElement(p) ? p.props.children : null : S);
      return /* @__PURE__ */ q.jsx(i, { ...d, ref: s, children: de.isValidElement(p) ? de.cloneElement(p, void 0, h) : null });
    }
    return /* @__PURE__ */ q.jsx(i, { ...d, ref: s, children: f });
  });
  return r.displayName = `${n}.Slot`, r;
}
var wT = /* @__PURE__ */ xT("Slot");
// @__NO_SIDE_EFFECTS__
function ET(n) {
  const i = de.forwardRef((r, o) => {
    const { children: s, ...f } = r;
    if (de.isValidElement(s)) {
      const d = kT(s), m = CT(f, s.props);
      return s.type !== de.Fragment && (m.ref = o ? ST(o, d) : d), de.cloneElement(s, m);
    }
    return de.Children.count(s) > 1 ? de.Children.only(null) : null;
  });
  return i.displayName = `${n}.SlotClone`, i;
}
var AT = Symbol("radix.slottable");
function TT(n) {
  return de.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === AT;
}
function CT(n, i) {
  const r = { ...i };
  for (const o in i) {
    const s = n[o], f = i[o];
    /^on[A-Z]/.test(o) ? s && f ? r[o] = (...m) => {
      const g = f(...m);
      return s(...m), g;
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...f } : o === "className" && (r[o] = [s, f].filter(Boolean).join(" "));
  }
  return { ...n, ...r };
}
function kT(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? n.props.ref : n.props.ref || n.ref);
}
const cg = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, fg = Fg, zT = (n, i) => (r) => {
  var o;
  if (i?.variants == null) return fg(n, r?.class, r?.className);
  const { variants: s, defaultVariants: f } = i, d = Object.keys(s).map((p) => {
    const h = r?.[p], S = f?.[p];
    if (h === null) return null;
    const E = cg(h) || cg(S);
    return s[p][E];
  }), m = r && Object.entries(r).reduce((p, h) => {
    let [S, E] = h;
    return E === void 0 || (p[S] = E), p;
  }, {}), g = i == null || (o = i.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((p, h) => {
    let { class: S, className: E, ...w } = h;
    return Object.entries(w).every((k) => {
      let [D, U] = k;
      return Array.isArray(U) ? U.includes({
        ...f,
        ...m
      }[D]) : {
        ...f,
        ...m
      }[D] === U;
    }) ? [
      ...p,
      S,
      E
    ] : p;
  }, []);
  return fg(n, d, g, r?.class, r?.className);
}, RT = zT(
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
function qy({
  className: n,
  variant: i,
  size: r,
  asChild: o = !1,
  ...s
}) {
  const f = o ? wT : "button";
  return /* @__PURE__ */ q.jsx(
    f,
    {
      "data-slot": "button",
      className: an(RT({ variant: i, size: r, className: n })),
      ...s
    }
  );
}
function DT({ className: n, ...i }) {
  return /* @__PURE__ */ q.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: an(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n
      ),
      ...i
    }
  );
}
function OT({ onSendMessage: n, isLoading: i = !1, placeholder: r = "Type your message...", companyTheme: o }) {
  const [s, f] = de.useState(""), d = (p) => {
    p.preventDefault(), s.trim() && !i && (n(s.trim()), f(""));
  }, m = (p) => {
    p.key === "Enter" && !p.shiftKey && (p.preventDefault(), d(p));
  }, g = o?.primaryColor ? ay(o.primaryColor, 20) : void 0;
  return /* @__PURE__ */ q.jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900", children: /* @__PURE__ */ q.jsxs("div", { className: "max-w-4xl mx-auto p-4", children: [
    /* @__PURE__ */ q.jsxs("form", { onSubmit: d, className: "relative", children: [
      /* @__PURE__ */ q.jsx(
        DT,
        {
          value: s,
          onChange: (p) => f(p.target.value),
          onKeyDown: m,
          placeholder: r,
          disabled: i,
          className: an(
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
      /* @__PURE__ */ q.jsxs(
        qy,
        {
          type: "submit",
          size: "sm",
          disabled: !s.trim() || i,
          className: an(
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
          onMouseEnter: (p) => {
            g && (p.currentTarget.style.backgroundColor = g);
          },
          onMouseLeave: (p) => {
            o?.primaryColor && (p.currentTarget.style.backgroundColor = o.primaryColor);
          },
          onFocus: (p) => {
            g && (p.currentTarget.style.backgroundColor = g);
          },
          onBlur: (p) => {
            o?.primaryColor && (p.currentTarget.style.backgroundColor = o.primaryColor);
          },
          children: [
            i ? /* @__PURE__ */ q.jsx(Gg, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ q.jsx(rS, { className: "h-4 w-4 text-white" }),
            /* @__PURE__ */ q.jsx("span", { className: "sr-only", children: "Send message" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ q.jsx("div", { className: "mt-2 text-xs text-gray-500 dark:text-gray-400 text-center", children: "Press Enter to send, Shift + Enter for new line" })
  ] }) });
}
const _T = {
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
}, MT = {
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
}, NT = {
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
}, UT = {
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
}, LT = {
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
}, BT = {
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
}, jT = {
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
}, qT = {
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
}, HT = {
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
}, VT = {
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
  en: _T,
  es: MT,
  fr: NT,
  de: UT,
  zh: LT,
  ja: BT,
  pt: jT,
  it: qT,
  ru: HT,
  ko: VT
};
function IT(n, i) {
  const r = i.split(".");
  let o = dg[n];
  for (const s of r)
    if (o && typeof o == "object" && s in o)
      o = o[s];
    else {
      o = dg.en;
      for (const f of r)
        if (o && typeof o == "object" && f in o)
          o = o[f];
        else
          return i;
    }
  return typeof o == "string" ? o : i;
}
function QT(n, i) {
  return n.replace(/\{(\w+)\}/g, (r, o) => i[o] ?? "");
}
const Hy = de.createContext(void 0), qc = {
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
}, GT = () => {
  const n = navigator.language.toLowerCase();
  return n.startsWith("es") ? "es" : n.startsWith("fr") ? "fr" : n.startsWith("de") ? "de" : n.startsWith("zh") ? "zh" : n.startsWith("ja") ? "ja" : n.startsWith("pt") ? "pt" : n.startsWith("it") ? "it" : n.startsWith("ru") ? "ru" : n.startsWith("ko") ? "ko" : "en";
};
function YT({ children: n }) {
  const [i, r] = de.useState(GT), [o, s] = de.useState(!1);
  de.useEffect(() => {
    const g = localStorage.getItem("qurius_language");
    g && Object.keys(qc).includes(g) && r(g);
  }, []);
  const m = {
    currentLanguage: i,
    setLanguage: (g) => {
      s(!0), r(g), localStorage.setItem("qurius_language", g), setTimeout(() => {
        s(!1);
      }, 300);
    },
    t: (g) => IT(i, g),
    isLanguageChanging: o
  };
  return /* @__PURE__ */ q.jsx(Hy.Provider, { value: m, children: n });
}
function Vy() {
  const n = de.useContext(Hy);
  if (n === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return n;
}
function FT({ className: n = "", variant: i = "dropdown", companyName: r }) {
  const { currentLanguage: o, setLanguage: s, isLanguageChanging: f } = Vy(), [d, m] = de.useState(!1), g = (p) => {
    s(p), m(!1), r && qn.trackLanguageChange(r, p);
  };
  return i === "buttons" ? /* @__PURE__ */ q.jsx("div", { className: `flex flex-wrap gap-1 ${n}`, children: Object.entries(qc).map(([p, h]) => /* @__PURE__ */ q.jsxs(
    "button",
    {
      onClick: () => g(p),
      disabled: f,
      className: `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${o === p ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"} ${f ? "opacity-50 cursor-not-allowed" : ""}`,
      children: [
        /* @__PURE__ */ q.jsx("span", { className: "mr-2", children: vc[p] }),
        h
      ]
    },
    p
  )) }) : /* @__PURE__ */ q.jsxs("div", { className: `relative ${n}`, children: [
    /* @__PURE__ */ q.jsxs(
      "button",
      {
        onClick: () => m(!d),
        disabled: f,
        className: "flex items-center px-1 py-1 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        children: [
          /* @__PURE__ */ q.jsx(Wv, { className: "h-4 w-4 mr-1" }),
          /* @__PURE__ */ q.jsx("span", { className: "mr-1", children: vc[o] }),
          /* @__PURE__ */ q.jsx(Qg, { className: `h-4 w-4 ml-1 transition-transform ${d ? "rotate-180" : ""}` })
        ]
      }
    ),
    d && /* @__PURE__ */ q.jsx("div", { className: "absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ q.jsx("div", { className: "py-1", children: Object.entries(qc).map(([p, h]) => /* @__PURE__ */ q.jsxs(
      "button",
      {
        onClick: () => g(p),
        className: `w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${o === p ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-300"}`,
        children: [
          /* @__PURE__ */ q.jsx("span", { className: "mr-3", children: vc[p] }),
          h
        ]
      },
      p
    )) }) }),
    d && /* @__PURE__ */ q.jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => m(!1)
      }
    )
  ] });
}
class XT {
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
      const s = (await Me.get(`${this.BACKEND_URL}/api/companies/${encodeURIComponent(i)}/theme`, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.company, d = s?.theme?.primaryColor || "#3B82F6", m = s?.logo_url || "";
      return this.generateThemeFromPrimary(d, r, m);
    } catch (o) {
      return console.error("Error fetching company theme:", o), this.generateThemeFromPrimary("#3B82F6", r, "");
    }
  }
}
const PT = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_BACKEND_URL: "https://qurius-ai.onrender.com", VITE_FRONTEND_URL: "https://qurius-ai.vercel.app", VITE_JINA_API_KEY: "demo-jina-key", VITE_OPEN_ROUTER_API_KEY: "demo-openrouter-key", VITE_SUPABASE_ANON_KEY: "demo-key", VITE_SUPABASE_PROJECT_URL: "https://demo.supabase.co", VITE_SUPABASE_SERVICE_ROLE_KEY: "demo-service-key" };
function Hn(n, i = "") {
  const r = typeof process < "u" ? process.env?.[n] : void 0;
  return (typeof import.meta < "u" ? PT?.[n] : void 0) ?? r ?? i;
}
const KT = {
  projectUrl: Hn("VITE_SUPABASE_PROJECT_URL"),
  anonKey: Hn("VITE_SUPABASE_ANON_KEY"),
  serviceRoleKey: Hn("VITE_SUPABASE_SERVICE_ROLE_KEY")
}, ZT = {
  apiUrl: Hn("VITE_OPEN_ROUTER_URL", "https://openrouter.ai/api/v1"),
  apiKey: Hn("VITE_OPEN_ROUTER_API_KEY"),
  sourceUrl: Hn("VITE_SOURCE_URL", "http://localhost:8081")
}, JT = {
  apiUrl: Hn("VITE_JINA_API_URL", "https://api.jina.ai/v1/embeddings"),
  apiKey: Hn("VITE_JINA_API_KEY")
}, Iy = {
  backendUrl: Hn("VITE_BACKEND_URL", "http://localhost:3001"),
  ...KT,
  ...ZT,
  ...JT
}, WT = {
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
        const r = (await Me.get(`${Iy.backendUrl}/api/translate/api-key`)).data.apiKey;
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
      return (await Me.post(`${pg}/detect?key=${r}`, {
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
      return (await Me.post(`${pg}?key=${s}`, {
        q: i,
        target: WT[r],
        source: o || "en"
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data.data.translations[0].translatedText;
    } catch (f) {
      return console.error("Error translating text:", f), mg[r][i] || i;
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
class $T {
  BACKEND_URL = Iy.backendUrl;
  // Get FAQ answer using semantic search
  async getFAQAnswer(i, r) {
    try {
      const o = await Me.post(`${this.BACKEND_URL}/api/faqs/search`, {
        companyName: i,
        question: r
      });
      if (console.log("FAQ search results:", o.data), Array.isArray(o.data) && o.data.length > 0) {
        const s = o.data[0];
        if (s.answer)
          return {
            answer: s.answer,
            source: s.source || "ai"
          };
      }
      return o.data && o.data.answer ? {
        answer: o.data.answer,
        source: o.data.source || "ai"
      } : null;
    } catch (o) {
      return console.error("Error searching FAQs:", o), null;
    }
  }
  async getFAQs(i) {
    try {
      return (await Me.get(`${this.BACKEND_URL}/api/companies/${i}/faqs`)).data;
    } catch (r) {
      throw console.error("Error fetching FAQs:", r), r;
    }
  }
  async importFAQs(i, r) {
    try {
      return (await Me.post(`${this.BACKEND_URL}/api/companies/${i}/faqs`, { faqs: r })).data;
    } catch (o) {
      throw console.error("Error importing FAQs:", o), o;
    }
  }
  async addFAQ(i, r, o) {
    try {
      return (await Me.post(`${this.BACKEND_URL}/api/companies/${i}/faqs`, {
        faqs: [{ question: r, answer: o }]
      })).data;
    } catch (s) {
      throw console.error("Error adding FAQ:", s), s;
    }
  }
  async updateFAQ(i, r, o) {
    try {
      return (await Me.put(`${this.BACKEND_URL}/api/faqs/${i}`, {
        question: r,
        answer: o
      })).data;
    } catch (s) {
      throw console.error("Error updating FAQ:", s), s;
    }
  }
  async deleteFAQ(i) {
    try {
      await Me.delete(`${this.BACKEND_URL}/api/faqs/${i}`);
    } catch (r) {
      throw console.error("Error deleting FAQ:", r), r;
    }
  }
}
const e2 = new $T();
function t2({
  defaultTheme: n,
  toggleTheme: i,
  isMinimized: r,
  onToggleMinimize: o,
  companyName: s,
  isThemeChanging: f
}) {
  const d = de.useRef(null), m = de.useRef(null), { t: g, currentLanguage: p } = Vy(), [h, S] = de.useState(null), E = n === "dark", [w, k] = de.useState(!0), [D, U] = de.useState(!1), B = () => QT(g("chat.welcomeWithCompany"), { company: s || "AI" }), [W, Y] = de.useState([]);
  de.useEffect(() => {
    W[0]?.isUser || Y([
      {
        content: B(),
        isUser: !1,
        liked: null,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  }, [g, s]);
  const [ce, ee] = de.useState(!1), [L, ae] = de.useState(!1), [Z, fe] = de.useState(!1), [we, ie] = de.useState(!0), [te, re] = de.useState(!1), P = () => {
    d.current?.scrollIntoView({ behavior: "smooth" });
  }, ne = () => {
    if (m.current) {
      const { scrollTop: y, scrollHeight: j, clientHeight: X } = m.current, x = j - y - X < 10;
      ie(x), Z && !x && ae(!0), x && ae(!1);
    }
  }, O = (y) => {
    fe(y), y && ae(!1);
  }, F = (y, j) => {
    Y((X) => X.map(
      (x, $) => $ === y ? { ...x, liked: j } : x
    ));
  };
  de.useEffect(() => {
    s ? (k(!0), XT.getCompanyTheme(s, E).then((y) => {
      S(y), setTimeout(() => {
        k(!1);
      }, 1e3);
    }).catch((y) => {
      console.error("Failed to load company theme:", y), setTimeout(() => {
        k(!1);
      }, 1e3);
    })) : setTimeout(() => {
      k(!1);
    }, 1e3);
  }, [s, E]), de.useEffect(() => {
    s && qn.trackWidgetView(s);
  }, [s]), de.useEffect(() => {
    s && (r ? qn.trackWidgetClose(s) : qn.trackWidgetOpen(s));
  }, [r, s]), de.useEffect(() => {
    if (r)
      U(!1);
    else {
      U(!1);
      const y = setTimeout(() => {
        U(!0), setTimeout(() => {
          P();
        }, 100);
      }, 500);
      return () => clearTimeout(y);
    }
  }, [r]), de.useEffect(() => {
    if (Z && !L) {
      const y = setInterval(() => {
        P();
      }, 25);
      return () => clearInterval(y);
    }
  }, [Z, L]);
  const Q = async (y) => {
    console.log("🚀 Starting message processing:", y);
    const j = {
      content: y,
      isUser: !0,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    ee(!0), Y((X) => [...X, j]), s && qn.trackMessageSent(s, y);
    try {
      console.log("🔄 Translating user input to English...");
      let X = y;
      try {
        X = await hg.translateToEnglish(y);
      } catch ($) {
        console.warn("⚠️ Translation failed, using original input:", $), X = y;
      }
      console.log("🤖 Getting FAQ answer...");
      const x = await e2.getFAQAnswer(s || "", X);
      if (x) {
        console.log("🔄 Translating response to user language...");
        let $ = x.answer;
        try {
          $ = await hg.translateToUserLanguage(x.answer, p);
        } catch (le) {
          console.warn("⚠️ Response translation failed, using original:", le), $ = x.answer;
        }
        const Se = {
          content: $,
          isUser: !1,
          liked: null,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        Y((le) => [...le, Se]), re(!1), s && qn.trackMessageReceived(s, $, x.source);
      } else
        console.log("⚠️ No response found from server"), Y(($) => [
          ...$,
          {
            content: "Sorry, I encountered an error. Please try again.",
            isUser: !1,
            liked: null,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          }
        ]);
    } catch (X) {
      console.error("❌ Error in handleSendMessage:", X), console.error("❌ Error details:", {
        message: X instanceof Error ? X.message : String(X),
        stack: X instanceof Error ? X.stack : void 0,
        name: X instanceof Error ? X.name : "Unknown"
      }), Y((x) => [
        ...x,
        {
          content: "Sorry, something went wrong. Please try again.",
          isUser: !1,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      console.log("🏁 Finishing message processing"), ee(!1);
    }
  }, be = h?.primaryColor ? ay(h.primaryColor, 20) : void 0;
  return r ? /* @__PURE__ */ q.jsx(
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
      children: /* @__PURE__ */ q.jsx(
        "button",
        {
          onClick: o,
          className: "text-white p-4 rounded-full shadow-lg transition-colors",
          style: {
            backgroundColor: h?.primaryColor || "#007bff"
          },
          onMouseEnter: (y) => {
            be && (y.currentTarget.style.backgroundColor = be);
          },
          onMouseLeave: (y) => {
            y.currentTarget.style.backgroundColor = h?.primaryColor || "#007bff";
          },
          children: w ? /* @__PURE__ */ q.jsx("div", { className: "w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ q.jsx(Sh, { className: "h-6 w-6" })
        }
      )
    }
  ) : D ? /* @__PURE__ */ q.jsxs(
    "div",
    {
      className: an(
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
        zIndex: 50
      },
      children: [
        f && /* @__PURE__ */ q.jsx(
          "div",
          {
            className: "absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg",
            style: { backgroundColor: h?.backgroundColor + "CC" },
            children: /* @__PURE__ */ q.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ q.jsx(
                Gg,
                {
                  className: "w-12 h-12 animate-spin",
                  style: { color: h?.primaryColor }
                }
              ),
              /* @__PURE__ */ q.jsx(
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
        /* @__PURE__ */ q.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800", children: [
          /* @__PURE__ */ q.jsxs("div", { className: "flex items-center gap-3", children: [
            h?.logoUrl ? /* @__PURE__ */ q.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", children: /* @__PURE__ */ q.jsx("img", { src: h?.logoUrl, alt: "Company Logo", className: "w-7 h-7" }) }) : (
              // Default logo
              /* @__PURE__ */ q.jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center", style: { backgroundColor: h?.primaryColor }, children: /* @__PURE__ */ q.jsx(Sh, { className: "w-4 h-4 text-white" }) })
            ),
            /* @__PURE__ */ q.jsxs("div", { children: [
              /* @__PURE__ */ q.jsxs("h3", { className: "font-semibold text-gray-900 dark:text-gray-100 text-sm", children: [
                s,
                " Assistant"
              ] }),
              /* @__PURE__ */ q.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Online now" })
            ] })
          ] }),
          /* @__PURE__ */ q.jsxs("div", { className: "flex justify-end gap-1", children: [
            /* @__PURE__ */ q.jsx(
              FT,
              {
                variant: "dropdown",
                className: "scale-65",
                companyName: s
              }
            ),
            /* @__PURE__ */ q.jsx(
              "button",
              {
                onClick: () => {
                  i(), s && qn.trackThemeChange(s, n);
                },
                disabled: f,
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50",
                children: n === "dark" ? /* @__PURE__ */ q.jsx(uS, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" }) : /* @__PURE__ */ q.jsx(iS, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            ),
            /* @__PURE__ */ q.jsx(
              "button",
              {
                onClick: () => {
                  o?.(), re(!0);
                },
                className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
                children: /* @__PURE__ */ q.jsx(nS, { className: "h-4 w-4 text-gray-600 dark:text-gray-400" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ q.jsxs(
          "div",
          {
            ref: m,
            className: "flex-1 overflow-y-auto bg-white dark:bg-gray-900",
            onScroll: ne,
            children: [
              /* @__PURE__ */ q.jsxs("div", { className: "py-4", children: [
                W.map((y, j) => {
                  const X = !y.isUser && j === W.length - 1;
                  return /* @__PURE__ */ q.jsx(
                    bT,
                    {
                      message: y.content,
                      messageIndex: j,
                      liked: y.liked,
                      isUser: y.isUser,
                      timestamp: y.timestamp,
                      onStreamingChange: y.isUser ? void 0 : O,
                      skipStreaming: te && !y.isUser,
                      isLastAiMessage: X,
                      companyTheme: h || void 0,
                      companyName: s,
                      onRatingChange: (x) => F(j, x),
                      wasMinimized: te
                    },
                    `${j}-${y.content.substring(0, 20)}`
                  );
                }),
                ce && /* @__PURE__ */ q.jsx(vT, { companyTheme: h })
              ] }),
              /* @__PURE__ */ q.jsx("div", { ref: d })
            ]
          }
        ),
        !we && !Z && /* @__PURE__ */ q.jsx("div", { className: "absolute bottom-27 right-4 z-10", children: /* @__PURE__ */ q.jsxs(
          qy,
          {
            onClick: P,
            size: "sm",
            className: "h-10 w-10 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 p-0 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
            style: {
              backgroundColor: h?.primaryColor,
              "--hover-bg-color": be
            },
            onMouseEnter: (y) => {
              be && (y.currentTarget.style.backgroundColor = be);
            },
            onMouseLeave: (y) => {
              h?.primaryColor && (y.currentTarget.style.backgroundColor = h.primaryColor);
            },
            onFocus: (y) => {
              be && (y.currentTarget.style.backgroundColor = be);
            },
            onBlur: (y) => {
              h?.primaryColor && (y.currentTarget.style.backgroundColor = h.primaryColor);
            },
            children: [
              /* @__PURE__ */ q.jsx(Qg, { className: "h-4 w-4" }),
              /* @__PURE__ */ q.jsx("span", { className: "sr-only", children: "Scroll to bottom" })
            ]
          }
        ) }),
        /* @__PURE__ */ q.jsx(
          OT,
          {
            onSendMessage: Q,
            isLoading: ce,
            placeholder: `Ask ${s} anything...`,
            defaultTheme: n,
            companyTheme: h || void 0
          }
        )
      ]
    }
  ) : null;
}
const n2 = 400, a2 = 1300, Oa = {
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
}, Qy = de.createContext({
  colors: Oa.light,
  defaultTheme: "light",
  isDark: !1,
  setColorScheme: () => {
  },
  toggleTheme: () => {
  },
  isThemeChanging: !1
}), i2 = ({ children: n }) => {
  const i = () => {
    if (typeof window < "u") {
      const p = localStorage.getItem("theme");
      return p === "light" || p === "dark" ? p : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }, [r, o] = de.useState(i() === "dark"), [s, f] = de.useState(!1), d = (p) => {
    o(p === "dark"), typeof window < "u" && localStorage.setItem("theme", p);
  }, m = () => {
    const p = r ? "light" : "dark";
    f(!0), setTimeout(() => {
      d(p), setTimeout(() => {
        f(!1);
      }, a2);
    }, n2);
  };
  de.useEffect(() => {
    const p = window.matchMedia("(prefers-color-scheme: dark)"), h = (S) => {
      localStorage.getItem("theme") || d(S.matches ? "dark" : "light");
    };
    return p.addEventListener("change", h), () => p.removeEventListener("change", h);
  }, []), de.useEffect(() => {
    typeof window < "u" && (r ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), document.body.style.backgroundColor = r ? Oa.dark.containerBackground : Oa.light.containerBackground, document.body.style.color = r ? Oa.dark.text : Oa.light.text);
  }, [r]);
  const g = r ? Oa.dark : Oa.light;
  return /* @__PURE__ */ q.jsx(Qy.Provider, { value: {
    colors: g,
    defaultTheme: r ? "dark" : "light",
    isDark: r,
    setColorScheme: d,
    toggleTheme: m,
    isThemeChanging: s
  }, children: n });
}, l2 = () => {
  const n = de.useContext(Qy);
  if (!n)
    throw new Error("useTheme must be used within a ThemeProvider");
  return n;
};
let mo = null;
const r2 = async (n, i, r) => {
  try {
    return console.log("🔑 Validating widget key:", n, "for company with name:", i), (await Me.get(`${r}/api/validate-key`, {
      params: { key: n, companyName: i }
    })).data;
  } catch (o) {
    const s = o;
    return console.error("Key validation failed:", s.response?.data || s.message), { valid: !1, error: "Validation failed" };
  }
}, o2 = async (n, i) => {
  try {
    return console.log("🔑 Validating demo key:", n), (await Me.get(`${i}/api/validate-demo-key`, {
      params: { key: n }
    })).data;
  } catch (r) {
    const o = r;
    return console.error("Demo key validation failed:", o.response?.data || o.message), { valid: !1, error: "Demo validation failed" };
  }
}, u2 = async (n) => {
  const i = n.key, r = n.companyName, o = "https://qurius-ai.onrender.com";
  let s;
  return i === "demo-2025-healthplus" ? s = await o2(i, o) : s = await r2(i, r, o), s.valid ? (console.log("✅ Widget key validated successfully"), !0) : (console.error("Widget key validation failed:", s.error), !1);
};
function s2(n, i) {
  mo && mo.unmount(), mo = f1.createRoot(n), mo.render(
    /* @__PURE__ */ q.jsx(ho.StrictMode, { children: /* @__PURE__ */ q.jsx(i2, { children: /* @__PURE__ */ q.jsx(YT, { children: /* @__PURE__ */ q.jsx(c2, { config: i }) }) }) })
  );
}
function c2({ config: n }) {
  const { defaultTheme: i, toggleTheme: r, isThemeChanging: o } = l2(), [s, f] = ho.useState(!0), [d, m] = ho.useState(!1);
  if (ho.useEffect(() => {
    u2(n).then(m);
  }, [n]), !d)
    return null;
  const g = () => {
    const p = !s;
    f(p), console.log(p ? "Widget minimized, chat button should be visible" : "Widget expanded, chat button should be hidden");
  };
  return /* @__PURE__ */ q.jsx(
    t2,
    {
      defaultTheme: i,
      toggleTheme: r,
      isMinimized: s,
      onToggleMinimize: g,
      companyName: n.companyName,
      isThemeChanging: o
    }
  );
}
const f2 = {
  init: s2
};
typeof window < "u" && (window.QuriusChatWidget = f2);
export {
  f2 as default
};
